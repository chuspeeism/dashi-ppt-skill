import React from 'react';
import { flushSync } from 'react-dom';
import { createRoot } from 'react-dom/client';
import {
  createLayoutContracts,
  isMediaArrayKey,
  isMediaArrayPath,
  isPrunedContractOmit,
  normalizeSlidePropsForContract,
  pruneContractValue,
  isCssColorLike,
} from '../../prop-contract-core.mjs';
// JAD-201:主题注册表(runtimePages + 图片槽 Provider 包裹)从可注入模块取。
// renderDeck 打包时把 `@dashi/theme-registry` 别名指向「全主题」或「按 deck 实际用到的主题裁剪版」。
import { runtimePages, wrapThemeImageProviders } from '@dashi/theme-registry';

const mountedRoots = new WeakMap();
const rootMediaApis = new WeakMap();
const IMAGE_UPLOAD_MAX_DIM = 1400;
const IMAGE_UPLOAD_QUALITY = 0.78;
const releaseInactiveThemeKeys = new Set(['theme03', 'theme10']);
const entriesByKey = new Map(runtimePages.map(page => [page.key, page]));
const UNCHANGED_EXTERNAL_VALUE = Symbol('unchanged-external-value');
const CONTRACT_VALUE_OMIT = Symbol('contract-value-omit');

function readJson(value, fallback) {
  try {
    return JSON.parse(value || '') || fallback;
  } catch {
    return fallback;
  }
}

function getRootApi(root) {
  let api = mountedRoots.get(root);
  if (!api) {
    api = createRoot(root);
    mountedRoots.set(root, api);
  }
  return api;
}

function toArray(value) {
  return Array.isArray(value) ? [...value] : [];
}

function stripRuntimeProps(props) {
  const next = {};
  for (const [key, value] of Object.entries(props || {})) {
    if (typeof value !== 'function') next[key] = value;
  }
  return next;
}

function inferDeckPagePropSpec(entry) {
  const defaults = entry?.defaultProps || {};
  if (typeof defaults.page === 'string' && typeof defaults.total === 'string') return { kind: 'page-total' };
  if (typeof defaults.pageno === 'string' && /^\s*\d+\s*\/\s*\d+\s*$/.test(defaults.pageno)) return { kind: 'pageno' };
  return null;
}

function getDeckPageNumberForSlide(slide) {
  const state = window.__getDeckPageNumberForSlide?.(slide);
  if (state) return state;
  const visible = window.__getVisibleSlides?.() || [...document.querySelectorAll('#deck > .slide:not([hidden])')];
  const index = visible.indexOf(slide);
  return index >= 0 ? { current: index + 1, total: visible.length } : null;
}

function formatDeckPageNumber(value, pad = 2) {
  const number = Number(value);
  const text = Number.isFinite(number) ? String(Math.max(0, Math.trunc(number))) : String(value || '');
  return text.padStart(pad, '0');
}

function withDeckPageProps(slide, entry, props) {
  const spec = inferDeckPagePropSpec(entry);
  if (!spec) return props;
  const state = getDeckPageNumberForSlide(slide);
  if (!state) return props;
  if (spec.kind === 'pageno') {
    return {
      ...props,
      pageno: `${formatDeckPageNumber(state.current)} / ${formatDeckPageNumber(state.total)}`,
    };
  }
  return {
    ...props,
    page: formatDeckPageNumber(state.current),
    total: formatDeckPageNumber(state.total),
  };
}

function readMediaFile(file) {
  return new Promise(resolve => {
    if (!file || !/^(image|video)\//.test(file.type || '')) {
      resolve(null);
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      const src = reader.result;
      if (file.type.startsWith('video/')) {
        const video = document.createElement('video');
        video.preload = 'metadata';
        video.muted = true;
        const finish = data => {
          video.onloadedmetadata = null;
          video.onerror = null;
          releaseVideoElement(video);
          resolve(data);
        };
        video.onloadedmetadata = () => finish({
          src,
          type: file.type,
          kind: 'video',
          width: video.videoWidth || null,
          height: video.videoHeight || null,
          ratio: video.videoWidth && video.videoHeight ? video.videoWidth / video.videoHeight : null,
        });
        video.onerror = () => finish({ src, type: file.type, kind: 'video', ratio: null });
        video.src = src;
        return;
      }
      const img = new Image();
      img.onload = async () => {
        const ratio = img.naturalWidth && img.naturalHeight ? img.naturalWidth / img.naturalHeight : null;
        const compressed = await compressImageFile(file, img.naturalWidth, img.naturalHeight, src);
        resolve({
          src: compressed.src,
          type: compressed.type,
          kind: 'image',
          width: img.naturalWidth || null,
          height: img.naturalHeight || null,
          ratio,
        });
      };
      img.onerror = () => resolve({ src, type: file.type, kind: 'image', ratio: null });
      img.src = src;
    };
    reader.onerror = () => resolve(null);
    reader.readAsDataURL(file);
  });
}

async function compressImageFile(file, naturalWidth, naturalHeight, originalSrc) {
  if (!file || file.type === 'image/svg+xml' || file.type === 'image/gif') {
    return { src: originalSrc, type: file?.type || 'image' };
  }
  const maxSide = Math.max(Number(naturalWidth) || 0, Number(naturalHeight) || 0);
  if (!maxSide || (maxSide <= IMAGE_UPLOAD_MAX_DIM && originalSrc.length < 1_500_000)) {
    return { src: originalSrc, type: file.type };
  }
  if (typeof createImageBitmap !== 'function') {
    return { src: originalSrc, type: file.type };
  }
  try {
    const bitmap = await createImageBitmap(file);
    try {
      const scale = Math.min(1, IMAGE_UPLOAD_MAX_DIM / Math.max(bitmap.width, bitmap.height));
      const width = Math.max(1, Math.round(bitmap.width * scale));
      const height = Math.max(1, Math.round(bitmap.height * scale));
      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');
      if (!ctx) return { src: originalSrc, type: file.type };
      ctx.drawImage(bitmap, 0, 0, width, height);
      const src = canvas.toDataURL('image/webp', IMAGE_UPLOAD_QUALITY);
      return src && src.length < originalSrc.length
        ? { src, type: 'image/webp' }
        : { src: originalSrc, type: file.type };
    } finally {
      bitmap.close?.();
    }
  } catch {
    return { src: originalSrc, type: file.type };
  }
}

function mediaItem(value) {
  if (!value) return null;
  if (typeof value === 'string') return { src: value, kind: mediaKindFromValue(value) };
  if (typeof value === 'object' && value.src) {
    const kind = mediaKindFromValue(value);
    return { ...value, kind };
  }
  return null;
}

function mediaKindFromValue(value) {
  if (value && typeof value === 'object' && value.kind) return String(value.kind).toLowerCase() === 'video' ? 'video' : 'image';
  const hint = String(value && typeof value === 'object' ? (value.type || value.src || '') : value || '').toLowerCase();
  return hint.startsWith('video/')
    || hint.startsWith('data:video/')
    || /\.(mp4|webm|mov|m4v)(?:[?#].*)?$/i.test(hint)
    ? 'video'
    : 'image';
}

function mediaWithAspect(value, ar) {
  const item = mediaItem(value);
  if (!item?.src) return null;
  return { ...item, ar: ar ?? item.ar ?? item.ratio ?? null, ratio: item.ratio ?? ar ?? null };
}

function mediaSrc(value) {
  return mediaItem(value)?.src || '';
}

function mediaKind(value) {
  return mediaItem(value)?.kind || 'image';
}

function videoPosterSrc(src) {
  if (typeof src !== 'string') return null;
  const match = src.match(/^(.*)\.(mp4|webm|mov|m4v)(?:[?#].*)?$/i);
  return match ? `${match[1]}.poster.jpg` : null;
}

function isRuntimeSlideActive(slide) {
  return !!slide?.hasAttribute?.('data-deck-active') || !!slide?.classList?.contains?.('active');
}

function releaseVideoElement(video) {
  video.pause?.();
  video.removeAttribute?.('src');
  video.querySelectorAll?.('source[src]')?.forEach(source => source.removeAttribute('src'));
  video.load?.();
}

function collectVideoElements(root) {
  const videos = [];
  const visit = node => {
    if (!node?.querySelectorAll) return;
    videos.push(...node.querySelectorAll('video'));
    node.querySelectorAll('*').forEach(element => {
      if (element.shadowRoot) visit(element.shadowRoot);
    });
  };
  visit(root);
  return videos;
}

function hasLiveVideoElement(root) {
  return collectVideoElements(root).some(video => video.getAttribute('src') || video.querySelector?.('source[src]'));
}

function renderMedia(value, props = {}) {
  const item = mediaItem(value);
  if (!item?.src) return null;
  const { active = true, ...mediaProps } = props;
  if (item.kind === 'video') {
    const poster = videoPosterSrc(item.src);
    if (!active) {
      return poster
        ? <img src={poster} alt="" loading="lazy" decoding="async" data-dashi-video-poster="true" {...mediaProps} />
        : <div aria-hidden="true" data-dashi-video-poster="true" {...mediaProps} />;
    }
    return (
      <video
        src={item.src}
        muted
        loop
        playsInline
        preload="none"
        poster={poster}
        {...mediaProps}
      />
    );
  }
  return <img src={item.src} alt="" loading="lazy" decoding="async" {...mediaProps} />;
}

function createMediaApi(slide, baseProps, entry, defaults) {
  // `extraProps` (optional): companion top-level props to merge in the same
  // write — e.g. a theme gates a slot's visibility behind a switch
  // (backgroundMode:'unicorn'|'media', mediaCount:0) whose upload-only
  // fallback slot (mounted so editors have a click/drop target before they've
  // found the switch) writes media but leaves the gate untouched, so the
  // upload lands in the view-model yet never paints. Callers that own such a
  // gate pass its target value here so the single setProps below flips both
  // atomically. Read back the gate's current value first so undo restores it.
  function updateList(key, index, value, extraProps) {
    const slideId = slide.dataset.vmSlideId;
    const vmApi = window.__deckViewModel;
    const currentProps = (vmApi?.peek ? vmApi.peek('props') : vmApi?.getState?.().props)?.[slideId] || {};
    const safeCurrentProps = sanitizeExternalStateValues(entry, defaults, currentProps);
    const sourceProps = { ...baseProps, ...safeCurrentProps };
    const nextList = toArray(sourceProps[key]);
    const previousValue = nextList[index] || null;
    const previousExtraProps = extraProps
      ? Object.fromEntries(Object.keys(extraProps).map(k => [k, sourceProps[k]]))
      : null;
    nextList[index] = value || null;
    // Persist from `sourceProps` (baseProps + live overrides), not just
    // `safeCurrentProps` (live overrides alone) — baseProps carries the
    // slide's authored goal.json control props (e.g. backgroundMode:'media')
    // that haven't yet been promoted into vmState. Persisting only
    // safeCurrentProps drops any such authored-but-untouched prop back to
    // the component's hardcoded default on the very next render, which for
    // a prop gating a media slot's visibility (as here) silently unmounts
    // the slot — the media a user just dropped renders once, then the
    // background/media control reverts and the video disappears.
    const nextProps = sanitizeExternalStateValues(entry, defaults, stripRuntimeProps({ ...sourceProps, [key]: nextList, ...extraProps }));
    window.__dashiUndo?.push?.({
      label: 'media',
      undo: () => updateList(key, index, previousValue, previousExtraProps),
    });
    window.__deckViewModel?.setProps?.(slideId, nextProps);
    window.__markOverviewThumbDirty?.(slide);
    renderRuntimeThemeSlide(slide, nextProps);
    window.__initEditableText?.(slide);
    window.__syncActiveEffects?.(slide, { skipMotion: true });
  }

  async function acceptFile(key, index, file, extraProps) {
    const data = await readMediaFile(file);
    if (data?.src) updateList(key, index, data, extraProps);
  }

  function pick(key, index, extraProps) {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*,video/mp4,video/webm,video/quicktime,video/*';
    input.style.display = 'none';
    input.addEventListener('change', () => {
      acceptFile(key, index, input.files && input.files[0], extraProps).finally(() => input.remove());
    }, { once: true });
    document.body.appendChild(input);
    input.click();
  }

  return {
    isActive: () => isRuntimeSlideActive(slide),
    get: (key, index) => {
      const slideId = slide.dataset.vmSlideId;
      const vmApi = window.__deckViewModel;
      const currentProps = (vmApi?.peek ? vmApi.peek('props') : vmApi?.getState?.().props)?.[slideId] || {};
      const sourceProps = { ...baseProps, ...currentProps };
      return toArray(sourceProps[key])[index] || null;
    },
    set: updateList,
    acceptFile,
    pick,
  };
}

function HostImageSlot({ mediaApi, index, options = {} }) {
  const [over, setOver] = React.useState(false);
  const value = mediaApi.get('images', index);
  const item = mediaItem(value);
  const filled = !!item?.src;
  const mediaRatioValue = Number(item?.ar ?? item?.ratio);
  const mediaRatio = Number.isFinite(mediaRatioValue) && mediaRatioValue > 0 ? mediaRatioValue : null;
  const optionRatioValue = Number(options.ratioAR ?? (options.ratio && options.ratio !== 'auto' ? options.ratio : undefined));
  const optionRatio = Number.isFinite(optionRatioValue) && optionRatioValue > 0 ? optionRatioValue : null;
  const fallbackRatioValue = Number(options.fallbackRatio ?? options.fallbackRatioAR);
  const fallbackRatio = Number.isFinite(fallbackRatioValue) && fallbackRatioValue > 0 ? fallbackRatioValue : null;
  const preserveVideoSize = !!options.preserveVideoSize && item?.kind === 'video';
  const preserveVideoRatio = (!!options.preserveVideoRatio || !!options.preserveVideoSize) && item?.kind === 'video';
  const containMedia = !!options.containMedia && filled;
  const preserveMediaRatio = preserveVideoRatio && !!mediaRatio;
  const adaptiveMedia = !!options.adaptiveMedia && !preserveMediaRatio;
  const aspectRatioValue = preserveMediaRatio
    ? mediaRatio
    : (adaptiveMedia ? (mediaRatio || fallbackRatio) : optionRatio);
  const aspectRatio = aspectRatioValue ? String(aspectRatioValue) : undefined;
  const nativeWidth = preserveVideoSize && item?.width ? `${item.width}px` : '100%';
  const nativeHeight = preserveVideoSize ? 'auto' : '100%';
  const autoHeight = preserveVideoSize || adaptiveMedia || preserveMediaRatio;
  const stopSlotNavigation = event => event.stopPropagation();
  const drop = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setOver(false);
    mediaApi.acceptFile('images', index, event.dataTransfer.files && event.dataTransfer.files[0]);
  };

  return (
    <div
      data-dashi-host-image-slot="true"
      data-dashi-media-kind={item?.kind || ''}
      data-dashi-video-native={preserveVideoSize ? 'true' : undefined}
      data-dashi-video-ratio={preserveVideoRatio ? 'true' : undefined}
      data-dashi-contain-media={containMedia ? 'true' : undefined}
      data-dashi-adaptive-media={adaptiveMedia ? 'true' : undefined}
      data-dashi-fallback-ratio={adaptiveMedia && fallbackRatio ? String(fallbackRatio) : undefined}
      style={{
        position: 'relative',
        width: preserveVideoSize ? nativeWidth : '100%',
        height: preserveVideoSize ? nativeHeight : (autoHeight ? 'auto' : '100%'),
        maxWidth: preserveVideoSize ? '100%' : undefined,
        maxHeight: preserveVideoSize ? '100%' : undefined,
        minHeight: 0,
        aspectRatio,
        overflow: 'hidden',
        cursor: 'pointer',
        background: filled
          ? 'transparent'
          : 'repeating-linear-gradient(135deg, rgba(0,0,0,.08) 0 12px, rgba(0,0,0,.03) 12px 24px)',
        outline: over ? '3px solid rgba(143,227,39,.85)' : '1px dashed rgba(0,0,0,.25)',
        outlineOffset: over ? -3 : -1,
      }}
      onClick={(event) => {
        event.stopPropagation();
        mediaApi.pick('images', index);
      }}
      onPointerDown={stopSlotNavigation}
      onMouseDown={stopSlotNavigation}
      onDragOver={(event) => {
        event.preventDefault();
        event.stopPropagation();
        setOver(true);
      }}
      onDragLeave={(event) => {
        event.stopPropagation();
        setOver(false);
      }}
      onDrop={drop}
    >
      {filled ? (
        <>
          {renderMedia(value, {
            active: mediaApi.isActive?.() !== false,
            style: {
              width: '100%',
              height: '100%',
              objectFit: containMedia || preserveVideoRatio ? 'contain' : 'cover',
              display: 'block',
            },
          })}
          <button
            type="button"
            aria-label="Clear media"
            onClick={(event) => {
              event.stopPropagation();
              mediaApi.set('images', index, null);
            }}
            style={{
              position: 'absolute',
              top: 10,
              right: 10,
              width: 34,
              height: 34,
              border: 0,
              borderRadius: '50%',
              background: 'rgba(0,0,0,.55)',
              color: '#fff',
              cursor: 'pointer',
              fontSize: 20,
              lineHeight: '34px',
            }}
          >×</button>
        </>
      ) : (
        <div style={{
          position: 'absolute',
          inset: 0,
          display: 'grid',
          placeItems: 'center',
          fontFamily: 'monospace',
          fontSize: 22,
          letterSpacing: '.08em',
          color: 'rgba(0,0,0,.48)',
          textAlign: 'center',
          padding: 18,
        }}>
          DROP MEDIA
        </div>
      )}
    </div>
  );
}

function withMediaHostProps(slide, baseProps, entry, defaults) {
  const mediaApi = createMediaApi(slide, baseProps, entry, defaults);
  return {
    ...baseProps,
    images: toArray(baseProps.images),
    media: toArray(baseProps.media),
    onSlotActivate: index => mediaApi.pick('images', index),
    onSlotClear: index => mediaApi.set('images', index, null),
    onActivate: index => mediaApi.pick('images', index),
    onClear: index => mediaApi.set('images', index, null),
    onImageChange: (index, src, ar) => mediaApi.set('images', index, mediaWithAspect(src, ar)),
    onMediaChange: (index, src, extraProps) => mediaApi.set('media', index, src, extraProps),
    renderSlot: (index, options) => (
      <HostImageSlot mediaApi={mediaApi} index={index} options={options} />
    ),
    __mediaApi: mediaApi,
  };
}

function withImageProviders(element, mediaApi) {
  // `extraProps` (optional 2nd/3rd arg here) mirrors createMediaApi's own
  // extraProps passthrough (see its comment above `updateList`): a page can
  // gate its real ImageSlot behind a switch (backgroundMode:'unicorn'|'media')
  // and still mount a corner EditOnlyImageSlot as an upload entry point before
  // the editor finds that switch. Threading extraProps from the slot all the
  // way through this context bridge lets that corner slot flip the gate in
  // the same write as the upload, so the image doesn't land invisibly behind
  // a switch that's still set to its dynamic-background default.
  const theme01Value = {
      pick: (index, extraProps) => mediaApi.pick('images', index, extraProps),
      clear: index => mediaApi.set('images', index, null),
      drop: (index, file, extraProps) => mediaApi.acceptFile('images', index, file, extraProps),
  };
  const theme03Value = {
    get: index => mediaApi.get('images', index),
    set: (index, value, extraProps) => mediaApi.set('images', index, value, extraProps),
    pick: (index, extraProps) => mediaApi.pick('images', index, extraProps),
    drop: (index, file, extraProps) => mediaApi.acceptFile('images', index, file, extraProps),
  };
  const keyedValue = createKeyedImageBridge(mediaApi);
  const theme11Value = createTheme11ImageBridge(mediaApi);
  return wrapThemeImageProviders(element, { theme01Value, theme03Value, keyedValue, theme11Value });
}

function createTheme11ImageBridge(mediaApi) {
  const indexes = new Map();
  let nextIndex = 0;
  const resolve = slotId => {
    const key = String(slotId || `slot-${nextIndex}`);
    if (!indexes.has(key)) indexes.set(key, nextIndex++);
    return indexes.get(key);
  };
  return {
    isActive: () => mediaApi.isActive?.() !== false,
    resolve,
    get: index => mediaApi.get('images', index),
    set: (index, value) => mediaApi.set('images', index, value),
    pick: index => mediaApi.pick('images', index),
    drop: (index, file) => mediaApi.acceptFile('images', index, file),
  };
}

function createKeyedImageBridge(mediaApi) {
  const indexes = new Map();
  const usedIndexes = new Set();
  let nextIndex = 0;

  const assignIndex = () => {
    while (usedIndexes.has(nextIndex)) nextIndex += 1;
    const index = nextIndex;
    usedIndexes.add(index);
    nextIndex += 1;
    return index;
  };

  const resolveIndex = (slotKey, fallbackIndex = 0) => {
    const stableIndex = stableImageSlotIndex(slotKey);
    if (stableIndex !== null) {
      usedIndexes.add(stableIndex);
      return stableIndex;
    }
    const key = String(slotKey || `slot-${fallbackIndex}`);
    if (!indexes.has(key)) indexes.set(key, assignIndex());
    return indexes.get(key);
  };
  return {
    isActive: () => mediaApi.isActive?.() !== false,
    get: (slotKey, fallbackIndex) => mediaApi.get('images', resolveIndex(slotKey, fallbackIndex)),
    // Trailing `extraProps` mirrors createMediaApi's own passthrough (see the
    // comment above `updateList`): lets a mode-gated edit-only slot (e.g.
    // theme06 layout:'table'|'map' presets) flip its gate in the same write
    // as the upload so the media never lands invisibly.
    set: (slotKey, fallbackIndex, value, extraProps) => mediaApi.set('images', resolveIndex(slotKey, fallbackIndex), value, extraProps),
    pick: (slotKey, fallbackIndex, extraProps) => mediaApi.pick('images', resolveIndex(slotKey, fallbackIndex), extraProps),
    drop: (slotKey, fallbackIndex, file, extraProps) => mediaApi.acceptFile('images', resolveIndex(slotKey, fallbackIndex), file, extraProps),
  };
}

const NAMED_IMAGE_SLOT_INDEXES = new Map([
  ['left', 0],
  ['right', 1],
  ['top', 0],
  ['bottom', 1],
  ['hero', 0],
  ['bg', 0],
  ['background', 0],
  ['portrait', 0],
  ['main', 0],
  ['media', 0],
  ['img', 0],
  ['image', 0],
  ['photo', 0],
  ['shot', 0],
  ['poster', 0],
  ['cover', 0],
  ['qr', 0],
  ['avatar', 0],
  ['inset', 1],
  ['detail', 1],
  ['thumb', 1],
]);

function stableImageSlotIndex(slotKey) {
  const key = String(slotKey || '').trim();
  if (!key) return null;
  const parts = key.split(/[-_:]/).filter(Boolean);
  const tail = parts[parts.length - 1] || key;
  const numeric = parts.length > 1 || /^\d+$/.test(tail)
    ? tail.match(/^(?:[a-z]+)?(\d+)$/i)
    : null;
  if (numeric) return Number(numeric[1]);
  const named = NAMED_IMAGE_SLOT_INDEXES.get(tail.toLowerCase());
  return Number.isInteger(named) ? named : null;
}

function getGxnSlotIndex(root, slot) {
  const slots = [...root.querySelectorAll('.gxn-slot')];
  const index = slots.indexOf(slot);
  return index < 0 ? 0 : index;
}

function bindRenderedImageSlots(root, mediaApi) {
  rootMediaApis.set(root, mediaApi);
  if (root.dataset.mediaSlotsBound === 'true') return;
  root.dataset.mediaSlotsBound = 'true';

  root.addEventListener('dragover', event => {
    const slot = event.target.closest?.('.gxn-slot');
    if (!slot || !root.contains(slot)) return;
    event.preventDefault();
    slot.classList.add('is-dashi-drag-over');
  });

  root.addEventListener('dragleave', event => {
    const slot = event.target.closest?.('.gxn-slot');
    if (slot && root.contains(slot)) slot.classList.remove('is-dashi-drag-over');
  });

  root.addEventListener('drop', event => {
    const slot = event.target.closest?.('.gxn-slot');
    if (!slot || !root.contains(slot)) return;
    event.preventDefault();
    slot.classList.remove('is-dashi-drag-over');
    const file = event.dataTransfer?.files?.[0];
    rootMediaApis.get(root)?.acceptFile('images', getGxnSlotIndex(root, slot), file);
  });

  // theme04's <image-slot> custom element manages its own upload/persistence
  // (shadow DOM + sidecar/localStorage) entirely outside this bridge, and
  // notifies content changes via a bubbling 'dashi-image-slot-change' event
  // (see source/image-slot.js `_notifyHost`). Fold that into props.images at
  // the slot's DOM-order index — same indexing applyImageSlotSources() uses
  // to read the initial src back out — so uploads land in the deck's own
  // view-model (export/undo/hash-visible state), not just the slot's shadow
  // DOM.
  //
  // A page can gate its "real" <image-slot> behind another control (e.g.
  // backgroundMode:'unicorn'|'media') and mount an EditOnlySlot fallback with
  // the same id as an upload entry point before the editor finds that
  // control. The fallback element can declare a `data-dashi-media-extra-props`
  // JSON attribute (companion props to write atomically with the upload, only
  // applied when a value actually lands — clearing an image shouldn't also
  // flip an unrelated gate) so the write doesn't land invisibly behind a gate
  // that's still at its default.
  root.addEventListener('dashi-image-slot-change', event => {
    const slot = event.target;
    if (!slot || slot.tagName !== 'IMAGE-SLOT' || !root.contains(slot)) return;
    const index = [...root.querySelectorAll('image-slot')].indexOf(slot);
    if (index < 0) return;
    const value = event.detail?.value ?? null;
    const extraProps = value ? readJson(slot.getAttribute('data-dashi-media-extra-props'), null) : null;
    rootMediaApis.get(root)?.set('images', index, value, extraProps || undefined);
  });
}

function applyImageSlotSources(root, mediaApi) {
  const slots = [...root.querySelectorAll('image-slot')];
  slots.forEach((slot, index) => {
    const value = mediaApi.get('media', index) || mediaApi.get('images', index);
    const src = mediaSrc(value);
    if (src) slot.setAttribute('src', src);
    else if (slot.hasAttribute('src')) slot.removeAttribute('src');
  });
}

const entryContracts = new Map();

function getEntryContract(entry) {
  if (!entry?.key) return null;
  if (entryContracts.has(entry.key)) return entryContracts.get(entry.key);
  const contract = createLayoutContracts([{
    ...entry,
    defaultProps: { ...(entry.defaultProps || {}) },
  }]).get(entry.key) || null;
  entryContracts.set(entry.key, contract);
  return contract;
}

// 把一批待应用的外部改动喂给契约校验;超出边界(如 count 超出数组长度)时不整体作废这次
// 编辑,而是逐字段回退到"改动前"的取值,把真正违规的那个字段单独丢弃——用户拖坏一个滑杆
// 不该连坐同一页的其它控件,也不该让这次渲染直接抛出、把上层调用链的收尾代码一起冲掉。
function safeNormalizeContractValues(entry, contract, contractValues, baselineAuthored) {
  try {
    return { values: normalizeSlidePropsForContract(entry.key, contractValues, contract) };
  } catch (error) {
    const safe = {};
    for (const [key, value] of Object.entries(contractValues)) {
      try {
        normalizeSlidePropsForContract(entry.key, { ...baselineAuthored, [key]: value }, contract);
        safe[key] = value;
      } catch {
        // 该字段单独校验也不通过(如 count 超出当前数组长度):丢弃它,保留其余改动。
      }
    }
    try {
      return { values: normalizeSlidePropsForContract(entry.key, safe, contract), error };
    } catch (fallbackError) {
      return { values: {}, error: fallbackError };
    }
  }
}

function normalizeExternalValues(entry, defaults, values) {
  const baselineValues = stripRuntimeProps({
    ...(entry.defaultProps || {}),
    ...(defaults || {}),
  });
  const authoredValues = stripRuntimeProps(values || {});
  const externalValues = changedExternalValues(baselineValues, authoredValues);
  if (!Object.keys(externalValues).length) return externalValues;
  const contractValues = {};
  const passthroughValues = {};
  for (const [key, value] of Object.entries(externalValues)) {
    const hasDefaultValue = hasRuntimeDefaultKey(entry, defaults, key);
    if (!hasDefaultValue) {
      if (isAuthoredMediaArrayValue(entry, defaults, key, authoredValues[key])) {
        passthroughValues[key] = authoredValues[key];
      } else if (isAllowedPrunedControlValue(entry, key, value)) {
        passthroughValues[key] = value;
      }
      continue;
    }
    const defaultValue = Object.prototype.hasOwnProperty.call(defaults || {}, key)
      ? defaults[key]
      : entry.defaultProps?.[key];
    if (isPrunedContractOmit(pruneContractValue(defaultValue, key))) {
      if (isAuthoredMediaArrayValue(entry, defaults, key, authoredValues[key])) {
        passthroughValues[key] = authoredValues[key];
      } else if (isAllowedPrunedControlValue(entry, key, value)) {
        passthroughValues[key] = value;
      }
    } else {
      contractValues[key] = value;
    }
  }
  if (!Object.keys(contractValues).length) return passthroughValues;
  const contract = getEntryContract(entry);
  if (!contract) return { ...contractValues, ...passthroughValues };
  carryCountKeysForChangedArrays(contract, contractValues, authoredValues);
  const { values: normalizedValues, error } = safeNormalizeContractValues(entry, contract, contractValues, baselineValues);
  if (error) {
    console.warn(`[dashi-ppt] dropped invalid prop(s) for "${entry.key}" instead of crashing the render`, error);
  }
  return { ...normalizedValues, ...passthroughValues };
}

// contractValues 只装「与 baseline 不同」的字段(见 changedExternalValues)。一个 count 控件
// 拖到和当页 baseline(布局设计默认值)恰好相同的档位时(常见于拖到静态 max——很多页面的
// defaultProps 数组长度正好等于 max),count 字段本身会被判定为"没变"而被这里漏掉,只留下
// 真正变了的内容数组。normalizeSlidePropsForContract 一旦发现 count 字段缺失,会按"未显式
// 设置"处理、从(此刻已变短的)数组长度反推 count——把用户刚选的档位悄悄改回数组长度。
//
// 只在调用方这次确实显式带了这个 count 字段(hasOwnProperty,不只是"凑巧等于 baseline")时才
// 把它带回 contractValues;从不退回 baseline——只 authored 了数组、从没提过 count 的场景(如
// goal.json 只写了内容数组)必须继续让 normalizeSlidePropsForContract 按数组长度自动推导,
// 不能被这里意外钉死成布局设计默认值。
function carryCountKeysForChangedArrays(contract, contractValues, authoredValues) {
  for (const binding of contract.countBindings || []) {
    if (!binding?.key || Object.prototype.hasOwnProperty.call(contractValues, binding.key)) continue;
    if (!Object.prototype.hasOwnProperty.call(authoredValues, binding.key)) continue;
    const arrayChanged = (binding.arrays || []).some(pathName => {
      const rootKey = String(pathName || '').split(/[.[]/)[0];
      return rootKey && Object.prototype.hasOwnProperty.call(contractValues, rootKey);
    });
    if (arrayChanged) contractValues[binding.key] = authoredValues[binding.key];
  }
}

function isAuthoredMediaArrayValue(entry, defaults, key, value) {
  return Array.isArray(value) && isMediaArrayKey(key) && isDeclaredMediaArrayProp(entry, defaults, key);
}

function isDeclaredMediaArrayProp(entry, defaults, key) {
  return hasRuntimeDefaultKey(entry, defaults, key)
    || (entry.controls || []).some(control => {
      return control?.key === key || control?.publicKey === key || control?.prop === key;
    });
}

function hasRuntimeDefaultKey(entry, defaults, key) {
  return Object.prototype.hasOwnProperty.call(defaults || {}, key)
    || Object.prototype.hasOwnProperty.call(entry?.defaultProps || {}, key);
}

function runtimeDefaultValue(entry, defaults, key) {
  return Object.prototype.hasOwnProperty.call(defaults || {}, key)
    ? defaults[key]
    : entry?.defaultProps?.[key];
}

function sanitizeExternalStateValues(entry, defaults, values) {
  const next = {};
  for (const [key, value] of Object.entries(stripRuntimeProps(values || {}))) {
    if (isAuthoredMediaArrayValue(entry, defaults, key, value)) {
      next[key] = value;
      continue;
    }
    if (!hasRuntimeDefaultKey(entry, defaults, key)) {
      if (isAllowedPrunedControlValue(entry, key, value)) next[key] = value;
      continue;
    }
    if (isAllowedPrunedControlValue(entry, key, value)) {
      next[key] = value;
      continue;
    }
    const defaultValue = runtimeDefaultValue(entry, defaults, key);
    const shape = pruneContractValue(defaultValue, key);
    if (isPrunedContractOmit(shape)) continue;
    const pruned = pruneExternalValueToContractShape(value, shape);
    if (pruned !== CONTRACT_VALUE_OMIT) next[key] = pruned;
  }
  return next;
}

function pruneExternalValueToContractShape(value, shape) {
  if (Array.isArray(shape)) {
    if (!Array.isArray(value)) return CONTRACT_VALUE_OMIT;
    const itemShape = shape.find(isPlainObject) || shape.find(item => item != null);
    if (isPlainObject(itemShape)) {
      return value.map(item => pruneExternalObjectToContractShape(item, itemShape))
        .filter(item => item !== CONTRACT_VALUE_OMIT);
    }
    if (Array.isArray(itemShape)) {
      return value.map(item => pruneExternalValueToContractShape(item, itemShape))
        .filter(item => item !== CONTRACT_VALUE_OMIT);
    }
    const primitive = primitiveContractType(itemShape);
    return primitive
      ? value.filter(item => contractPrimitiveMatches(item, primitive))
      : value;
  }
  if (isPlainObject(shape)) return pruneExternalObjectToContractShape(value, shape);
  const primitive = primitiveContractType(shape);
  if (primitive) return contractPrimitiveMatches(value, primitive) ? value : CONTRACT_VALUE_OMIT;
  return CONTRACT_VALUE_OMIT;
}

function pruneExternalObjectToContractShape(value, shape) {
  if (!isPlainObject(value)) return CONTRACT_VALUE_OMIT;
  const entries = Object.entries(value)
    .filter(([key]) => Object.prototype.hasOwnProperty.call(shape, key))
    .map(([key, item]) => [key, pruneExternalValueToContractShape(item, shape[key])])
    .filter(([, item]) => item !== CONTRACT_VALUE_OMIT);
  if (!entries.length) return CONTRACT_VALUE_OMIT;
  return Object.fromEntries(entries);
}

function primitiveContractType(value) {
  if (value == null || Array.isArray(value) || isPlainObject(value)) return null;
  const type = typeof value;
  return ['string', 'number', 'boolean'].includes(type) ? type : null;
}

function contractPrimitiveMatches(value, type) {
  if (type === 'number') return typeof value === 'number' && Number.isFinite(value);
  return typeof value === type;
}

function isAllowedPrunedControlValue(entry, key, value) {
  const control = (entry.controls || []).find(item => {
    return item?.key === key || item?.publicKey === key || item?.prop === key;
  });
  if (!control) return false;
  const options = Array.isArray(control.options) ? control.options : [];
  if (options.length) return options.some(option => controlOptionValuesEqual(controlOptionValue(option), value));
  const type = String(control.type || '').toLowerCase();
  if (['toggle', 'boolean', 'checkbox'].includes(type)) return typeof value === 'boolean';
  if (['slider', 'range', 'number', 'stepper'].includes(type)) return typeof value === 'number' && Number.isFinite(value);
  if (type === 'color') return isCssColorLike(value);
  return false;
}

function controlOptionValuesEqual(optionValue, value) {
  if (Object.is(optionValue, value)) return true;
  if (Array.isArray(optionValue) && Array.isArray(value)) return externalValuesEqual(optionValue, value);
  return false;
}

function controlOptionValue(option) {
  if (Array.isArray(option)) return option[0];
  if (option && typeof option === 'object') return option.value ?? option.key ?? option.id;
  return option;
}


function changedExternalValues(baseline, values) {
  const next = {};
  for (const [key, value] of Object.entries(values || {})) {
    const changed = externalValueDiff(baseline?.[key], value);
    if (changed !== UNCHANGED_EXTERNAL_VALUE) next[key] = changed;
  }
  return next;
}

function externalValueDiff(baseline, value) {
  if (externalValuesEqual(baseline, value)) return UNCHANGED_EXTERNAL_VALUE;
  if (Array.isArray(baseline) && Array.isArray(value)) {
    return value.map((item, index) => {
      const changed = externalValueDiff(baseline[index], item);
      if (changed !== UNCHANGED_EXTERNAL_VALUE) return changed;
      if (isPlainObject(item)) return {};
      if (Array.isArray(item)) return [];
      return item;
    });
  }
  if (isPlainObject(baseline) && isPlainObject(value)) {
    return Object.fromEntries(Object.entries(value)
      .map(([key, item]) => [key, externalValueDiff(baseline[key], item)])
      .filter(([, item]) => item !== UNCHANGED_EXTERNAL_VALUE));
  }
  return value;
}

function externalValuesEqual(left, right) {
  if (Object.is(left, right)) return true;
  if (Array.isArray(left) || Array.isArray(right)) {
    if (!Array.isArray(left) || !Array.isArray(right) || left.length !== right.length) return false;
    return left.every((item, index) => externalValuesEqual(item, right[index]));
  }
  if (isPlainObject(left) || isPlainObject(right)) {
    if (!isPlainObject(left) || !isPlainObject(right)) return false;
    const leftKeys = Object.keys(left);
    const rightKeys = Object.keys(right);
    if (leftKeys.length !== rightKeys.length) return false;
    return leftKeys.every(key => Object.prototype.hasOwnProperty.call(right, key) && externalValuesEqual(left[key], right[key]));
  }
  return false;
}

function mergeExternalPropsForRender(defaultProps, externalProps) {
  const next = { ...(defaultProps || {}) };
  for (const [key, value] of Object.entries(externalProps || {})) {
    next[key] = mergeExternalValueForRender(next[key], value, key);
  }
  return next;
}

function mergeExternalValueForRender(defaultValue, externalValue, key) {
  if (Array.isArray(defaultValue) && Array.isArray(externalValue)) {
    if (isMediaArrayKey(key)) return externalValue;
    const defaultItem = defaultValue.find(isPlainObject);
    const externalHasObjects = externalValue.some(isPlainObject);
    if (!defaultItem || !externalHasObjects) return externalValue;
    return externalValue.map((item, index) => {
      return isPlainObject(item)
        ? mergeExternalValueForRender(defaultValue[index], item, key)
        : item;
    });
  }
  if (isPlainObject(defaultValue) && isPlainObject(externalValue)) {
    const next = { ...defaultValue };
    for (const [key, value] of Object.entries(externalValue)) {
      next[key] = mergeExternalValueForRender(next[key], value, key);
    }
    return next;
  }
  return externalValue;
}

function isPlainObject(value) {
  return !!value && typeof value === 'object' && !Array.isArray(value);
}

// count 控件的静态 max 是布局设计的完整档位(参见 prop-contract-core.mjs 的
// clampCountControlLimits——它保证 max 永远不超过该 layout defaultProps 里对应数组的长度),
// 所以把 count 拖到比当前 authored 数组长时,defaultProps 同名数组里永远有足够的条目可以
// 补足。这里只补渲染用的 props,不改 entry/view-model 本身——用户没编辑过的补足条目因此不会
// 被持久化;补足条目取自 defaultProps 的同下标内容,和这些下标平时默认渲染出来的文案 ID 一致,
// 侧栏按 `text:<slideKey>:<slot>` 编辑这些条目和编辑普通默认条目没有区别。
function withPaddedCountArrays(entry, props) {
  const contract = getEntryContract(entry);
  if (!contract) return props;
  let next = props;
  for (const binding of contract.countBindings || []) {
    const count = Number(next[binding.key]);
    if (!Number.isFinite(count) || count <= 0) continue;
    for (const arrayPath of binding.arrays || []) {
      if (isMediaArrayPath(arrayPath)) continue; // 媒体数组靠上传增长，容量上限已在契约里放行。
      next = padArrayAtPath(next, entry.defaultProps, arrayPath, count);
    }
  }
  // 同长绑定组(如图表 series[].values 必须和 categories 同长):count 补足只直接触达
  // countBindings.arrays 里登记的数组,anchor 数组补长之后,单靠 lengthBindings 关联、自己不
  // 挂 count 控件的 dependent 数组不会跟着变——这里按 anchor 补足后的实际长度再补一次 dependent,
  // 避免"categories 变长了但 values 还是老长度"这种渲染期错位。
  for (const binding of contract.lengthBindings || []) {
    if ((binding.relation || 'same-length') !== 'same-length' || !binding.anchor || !binding.dependent) continue;
    const anchorLength = readArrayLengthAtPath(next, binding.anchor);
    if (!Number.isFinite(anchorLength) || anchorLength <= 0) continue;
    next = padArrayAtPath(next, entry.defaultProps, binding.dependent, anchorLength);
  }
  return next;
}

// 读 `a.b` / `a[].b` 路径上第一个数组的长度,用来给 lengthBindings 的 dependent 数组定补足
// 目标——语义上与 prop-contract-core.mjs 的 collectArrayCounts 一致,但只取长度、不聚合多条。
function readArrayLengthAtPath(container, pathName) {
  if (!container || typeof container !== 'object') return NaN;
  const [segment, ...restParts] = String(pathName || '').split('.');
  const rest = restParts.join('.');
  const arraySegment = segment.endsWith('[]');
  const key = arraySegment ? segment.slice(0, -2) : segment;
  const current = container[key];
  if (arraySegment) {
    if (!Array.isArray(current)) return NaN;
    if (!rest) return current.length;
    for (const item of current) {
      const length = readArrayLengthAtPath(item, rest);
      if (Number.isFinite(length)) return length;
    }
    return NaN;
  }
  if (!rest) return Array.isArray(current) ? current.length : NaN;
  return readArrayLengthAtPath(current, rest);
}

// 与 prop-contract-core.mjs 的 collectArrayCounts 用同一套路径语法：`a.b` 逐层取值，
// `a[].b` 表示先取数组 a，再逐项钻进每项的 b。只在需要补足的节点上浅拷贝，其余引用原样保留。
function padArrayAtPath(container, defaultContainer, pathName, count) {
  if (!container || typeof container !== 'object') return container;
  const [segment, ...restParts] = String(pathName || '').split('.');
  const rest = restParts.join('.');
  const arraySegment = segment.endsWith('[]');
  const key = arraySegment ? segment.slice(0, -2) : segment;
  const current = container[key];
  if (arraySegment) {
    if (!Array.isArray(current)) return container;
    if (!rest) return padArrayField(container, key, current, defaultContainer?.[key], count);
    const defaultArray = Array.isArray(defaultContainer?.[key]) ? defaultContainer[key] : [];
    let itemsChanged = false;
    const nextItems = current.map((item, index) => {
      const padded = padArrayAtPath(item, defaultArray[index], rest, count);
      if (padded !== item) itemsChanged = true;
      return padded;
    });
    return itemsChanged ? { ...container, [key]: nextItems } : container;
  }
  if (!rest) return padArrayField(container, key, current, defaultContainer?.[key], count);
  const nested = padArrayAtPath(current, defaultContainer?.[key], rest, count);
  return nested === current ? container : { ...container, [key]: nested };
}

function padArrayField(container, key, current, defaultValue, count) {
  if (!Array.isArray(current) || current.length >= count) return container;
  if (!Array.isArray(defaultValue) || defaultValue.length < count) return container;
  return { ...container, [key]: [...current, ...defaultValue.slice(current.length, count)] };
}

function renderRuntimeThemeSlide(slide, values = {}, options = {}) {
  const root = slide?.querySelector?.('.imported-theme-root');
  if (!root) return false;
  const entry = entriesByKey.get(root.dataset.pageKey);
  if (!entry?.Component) return false;
  // 整段渲染尝试(含契约校验、React 渲染)都不允许把异常抛给调用方——一页坏 props 不该
  // 冲断 template-swiss.html 里 go()/commitSlideIndex 的收尾代码,导致导航锁永远释放不掉。
  try {
    const defaults = readJson(root.dataset.propDefaults, {});
    const externalProps = options.trusted
      ? stripRuntimeProps(values || {})
      : normalizeExternalValues(entry, defaults, values);
    const mergedProps = mergeExternalPropsForRender({
      ...(entry.defaultProps || {}),
      ...defaults,
    }, externalProps);
    const baseProps = withPaddedCountArrays(entry, mergedProps);
    const pageProps = withDeckPageProps(slide, entry, stripRuntimeProps(baseProps));
    const componentProps = withMediaHostProps(slide, pageProps, entry, defaults);
    flushSync(() => {
      getRootApi(root).render(withImageProviders(
        React.createElement(entry.Component, componentProps),
        componentProps.__mediaApi,
      ));
    });
    applyImageSlotSources(root, componentProps.__mediaApi);
    bindRenderedImageSlots(root, componentProps.__mediaApi);
    root.dataset.importedThemeRuntime = 'true';
    const pageSpec = inferDeckPagePropSpec(entry);
    if (pageSpec) root.dataset.dashiDynamicPageProps = pageSpec.kind;
    window.__syncDeckPageNumbers?.(slide);
    return true;
  } catch (error) {
    console.error(`[dashi-ppt] runtime render failed for "${root.dataset.pageKey || entry.key}"`, error);
    return false;
  }
}

function releaseRuntimeThemeSlide(slide) {
  const root = slide?.querySelector?.('.imported-theme-root');
  const api = root && mountedRoots.get(root);
  if (!root || !api) return false;
  releaseRuntimeSlideVideos(root);
  try {
    api.unmount();
  } catch {}
  mountedRoots.delete(root);
  rootMediaApis.delete(root);
  root.replaceChildren();
  delete root.dataset.importedThemeRuntime;
  return true;
}

function releaseRuntimeSlideVideos(root) {
  root.querySelectorAll?.('image-slot[src]')?.forEach(slot => {
    if (mediaKind(slot.getAttribute('src')) === 'video') slot.removeAttribute('src');
  });
  collectVideoElements(root).forEach(releaseVideoElement);
}

function releaseInactiveRuntimeSlides(activeSlide, options = {}) {
  // 缓存策略:只保留当前页与前后一页(cv-near)的渲染,其余全部卸载 ——
  // 长 deck 逐页翻阅时,已渲染页的合成层/滤镜(玻璃卡 backdrop-filter)与 React 树
  // 会线性堆积,这是「越翻越卡」的直接来源。卸载后翻回由惰性渲染即时重建。
  const keys = options.themeKeys ? new Set(options.themeKeys) : null;
  document.querySelectorAll?.('.slide.imported-theme-slide').forEach(slide => {
    if (slide === activeSlide) return;
    const root = slide.querySelector?.('.imported-theme-root');
    if (!root) return;
    if (keys && !keys.has(root.dataset.themeKey) && !hasLiveVideoElement(root)) return;
    if (slide.classList?.contains('cv-near')) {
      releaseRuntimeSlideVideos(root);
      return;
    }
    releaseRuntimeThemeSlide(slide);
  });
}

function renderRuntimeThemeSlides(scope = document) {
  scope.querySelectorAll?.('.slide.imported-theme-slide').forEach(slide => {
    renderRuntimeThemeSlide(slide);
  });
}

function renderRuntimeSlide(slide, values = {}, options = {}) {
  return renderRuntimeThemeSlide(slide, values, options);
}

function renderRuntimeSlides(scope = document) {
  renderRuntimeThemeSlides(scope);
}

window.__renderRuntimeSlide = renderRuntimeSlide;
window.__renderRuntimeSlides = renderRuntimeSlides;
window.__releaseRuntimeSlide = releaseRuntimeThemeSlide;
window.__releaseInactiveRuntimeSlides = releaseInactiveRuntimeSlides;
