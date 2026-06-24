import React from 'react';
import { flushSync } from 'react-dom';
import { createRoot } from 'react-dom/client';
import { ImageSlotActions as theme01ImageSlotActions } from './theme01/source/slides/SlideKit.jsx';
import { ImageSlotMediaContext as theme03ImageSlotMediaContext } from './theme03/source/src/ImageSlot.jsx';
import { KxImageSlotMediaContext as theme06KxImageSlotMediaContext } from './theme06/source/slides/kit.jsx';
import { AdaptiveImageSlotMediaContext as theme08AdaptiveImageSlotMediaContext } from './theme08/source/components/AclPrimitives.jsx';
import { ImageStripMediaContext as theme09ImageStripMediaContext } from './theme09/source/slides/ImageStrip.jsx';
import { DeckImageSlotMediaContext as theme10DeckImageSlotMediaContext } from './theme10/source/components/DeckImageSlot.jsx';
import { IgnisImageSlotMediaContext as theme11ImageSlotMediaContext } from './theme11/source/ignBase.jsx';
import { runtimePages as theme01Pages } from './theme01/runtime.jsx';
import { runtimePages as theme02Pages } from './theme02/runtime.jsx';
import { runtimePages as theme03Pages } from './theme03/runtime.jsx';
import { runtimePages as theme04Pages } from './theme04/runtime.jsx';
import { runtimePages as theme05Pages } from './theme05/runtime.jsx';
import { runtimePages as theme06Pages } from './theme06/runtime.jsx';
import { runtimePages as theme07Pages } from './theme07/runtime.jsx';
import { runtimePages as theme08Pages } from './theme08/runtime.jsx';
import { runtimePages as theme09Pages } from './theme09/runtime.jsx';
import { runtimePages as theme10Pages } from './theme10/runtime.jsx';
import { runtimePages as theme11Pages } from './theme11/runtime.jsx';
import { runtimePages as theme12Pages } from './theme12/runtime.jsx';

const mountedRoots = new WeakMap();
const rootMediaApis = new WeakMap();
const releaseInactiveThemeKeys = new Set(['theme03', 'theme10']);
const IMAGE_UPLOAD_MAX_DIM = 1400;
const IMAGE_UPLOAD_QUALITY = 0.78;
const runtimePages = [
  ...theme01Pages,
  ...theme02Pages,
  ...theme03Pages,
  ...theme04Pages,
  ...theme05Pages,
  ...theme06Pages,
  ...theme07Pages,
  ...theme08Pages,
  ...theme09Pages,
  ...theme10Pages,
  ...theme11Pages,
  ...theme12Pages,
];
const entriesByKey = new Map(runtimePages.map(page => [page.key, page]));

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
        video.onloadedmetadata = () => resolve({
          src,
          type: file.type,
          kind: 'video',
          ratio: video.videoWidth && video.videoHeight ? video.videoWidth / video.videoHeight : null,
        });
        video.onerror = () => resolve({ src, type: file.type, kind: 'video', ratio: null });
        video.src = src;
        return;
      }
      const img = new Image();
      img.onload = async () => {
        const ratio = img.naturalWidth / img.naturalHeight;
        const compressed = await compressImageFile(file, img.naturalWidth, img.naturalHeight, src);
        resolve({ src: compressed.src, type: compressed.type, kind: 'image', ratio });
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
  if (typeof value === 'string') return { src: value, kind: value.startsWith('data:video/') ? 'video' : 'image' };
  if (typeof value === 'object' && value.src) {
    const kind = value.kind || (String(value.type || value.src).startsWith('video/') || String(value.src).startsWith('data:video/') ? 'video' : 'image');
    return { ...value, kind };
  }
  return null;
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

function renderMedia(value, props = {}) {
  const item = mediaItem(value);
  if (!item?.src) return null;
  if (item.kind === 'video') {
    return <video src={item.src} muted playsInline loop autoPlay preload="metadata" {...props} />;
  }
  return <img src={item.src} alt="" {...props} />;
}

function createMediaApi(slide, baseProps) {
  function updateList(key, index, value) {
    const slideId = slide.dataset.vmSlideId;
    const currentProps = window.__deckViewModel?.getState?.().props?.[slideId] || {};
    const sourceProps = { ...baseProps, ...currentProps };
    const nextList = toArray(sourceProps[key]);
    const previousValue = nextList[index] || null;
    nextList[index] = value || null;
    const nextProps = stripRuntimeProps({ ...sourceProps, [key]: nextList });
    window.__dashiUndo?.push?.({
      label: 'media',
      undo: () => updateList(key, index, previousValue),
    });
    window.__deckViewModel?.setProps?.(slideId, nextProps);
    window.__markOverviewThumbDirty?.(slide);
    renderImportedThemeSlide(slide, nextProps);
    window.__initEditableText?.(slide);
    window.__syncActiveEffects?.(slide);
  }

  async function acceptFile(key, index, file) {
    const data = await readMediaFile(file);
    if (data?.src) updateList(key, index, data);
  }

  function pick(key, index) {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*,video/mp4,video/webm,video/quicktime,video/*';
    input.style.display = 'none';
    input.addEventListener('change', () => {
      acceptFile(key, index, input.files && input.files[0]).finally(() => input.remove());
    }, { once: true });
    document.body.appendChild(input);
    input.click();
  }

  return {
    get: (key, index) => {
      const slideId = slide.dataset.vmSlideId;
      const currentProps = window.__deckViewModel?.getState?.().props?.[slideId] || {};
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
  const filled = !!mediaSrc(value);
  const aspectRatio = options.ratioAR || (options.ratio ? String(options.ratio) : undefined);
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
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
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
            style: { width: '100%', height: '100%', objectFit: 'cover', display: 'block' },
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

function withMediaHostProps(slide, baseProps) {
  const mediaApi = createMediaApi(slide, baseProps);
  return {
    ...baseProps,
    images: toArray(baseProps.images),
    media: toArray(baseProps.media),
    onSlotActivate: index => mediaApi.pick('images', index),
    onSlotClear: index => mediaApi.set('images', index, null),
    onActivate: index => mediaApi.pick('images', index),
    onClear: index => mediaApi.set('images', index, null),
    onImageChange: (index, src, ar) => mediaApi.set('images', index, mediaWithAspect(src, ar)),
    onMediaChange: (index, src) => mediaApi.set('media', index, src),
    renderSlot: (index, options) => (
      <HostImageSlot mediaApi={mediaApi} index={index} options={options} />
    ),
    __mediaApi: mediaApi,
  };
}

function withImageProviders(element, mediaApi) {
  const theme01Value = {
      pick: index => mediaApi.pick('images', index),
      clear: index => mediaApi.set('images', index, null),
      drop: (index, file) => mediaApi.acceptFile('images', index, file),
  };
  const theme03Value = {
    get: index => mediaApi.get('images', index),
    set: (index, value) => mediaApi.set('images', index, value),
    pick: index => mediaApi.pick('images', index),
    drop: (index, file) => mediaApi.acceptFile('images', index, file),
  };
  const keyedValue = createKeyedImageBridge(mediaApi);
  const theme11Value = createTheme11ImageBridge(mediaApi);
  return React.createElement(theme01ImageSlotActions.Provider, { value: theme01Value },
    React.createElement(theme03ImageSlotMediaContext.Provider, { value: theme03Value },
      React.createElement(theme06KxImageSlotMediaContext.Provider, { value: keyedValue },
        React.createElement(theme08AdaptiveImageSlotMediaContext.Provider, { value: keyedValue },
          React.createElement(theme09ImageStripMediaContext.Provider, { value: keyedValue },
            React.createElement(theme10DeckImageSlotMediaContext.Provider, { value: keyedValue },
              React.createElement(theme11ImageSlotMediaContext.Provider, { value: theme11Value }, element),
            ),
          ),
        ),
      ),
    ),
  );
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
    resolve,
    get: index => mediaApi.get('images', index),
    set: (index, value) => mediaApi.set('images', index, value),
    pick: index => mediaApi.pick('images', index),
    drop: (index, file) => mediaApi.acceptFile('images', index, file),
  };
}

function createKeyedImageBridge(mediaApi) {
  const indexes = new Map();
  const resolveIndex = (slotKey, fallbackIndex = 0) => {
    const key = String(slotKey || `slot-${fallbackIndex}`);
    if (!indexes.has(key)) indexes.set(key, indexes.size);
    return indexes.get(key);
  };
  return {
    get: (slotKey, fallbackIndex) => mediaApi.get('images', resolveIndex(slotKey, fallbackIndex)),
    set: (slotKey, fallbackIndex, value) => mediaApi.set('images', resolveIndex(slotKey, fallbackIndex), value),
    pick: (slotKey, fallbackIndex) => mediaApi.pick('images', resolveIndex(slotKey, fallbackIndex)),
    drop: (slotKey, fallbackIndex, file) => mediaApi.acceptFile('images', resolveIndex(slotKey, fallbackIndex), file),
  };
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

function renderImportedThemeSlide(slide, values = {}) {
  const root = slide?.querySelector?.('.imported-theme-root');
  if (!root) return false;
  const entry = entriesByKey.get(root.dataset.pageKey);
  if (!entry?.Component) return false;
  const defaults = readJson(root.dataset.propDefaults, {});
  const baseProps = {
    ...(entry.defaultProps || {}),
    ...defaults,
    ...(values || {}),
  };
  const pageProps = withDeckPageProps(slide, entry, stripRuntimeProps(baseProps));
  const componentProps = withMediaHostProps(slide, pageProps);
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
}

function releaseImportedThemeSlide(slide) {
  const root = slide?.querySelector?.('.imported-theme-root');
  const api = root && mountedRoots.get(root);
  if (!root || !api) return false;
  try {
    api.unmount();
  } catch {}
  mountedRoots.delete(root);
  rootMediaApis.delete(root);
  root.replaceChildren();
  delete root.dataset.importedThemeRuntime;
  return true;
}

function releaseInactiveRuntimeSlides(activeSlide, options = {}) {
  const keys = options.themeKeys ? new Set(options.themeKeys) : releaseInactiveThemeKeys;
  document.querySelectorAll?.('.slide.imported-theme-slide').forEach(slide => {
    if (slide === activeSlide) return;
    const root = slide.querySelector?.('.imported-theme-root');
    if (!root || !keys.has(root.dataset.themeKey)) return;
    releaseImportedThemeSlide(slide);
  });
}

function renderImportedThemeSlides(scope = document) {
  scope.querySelectorAll?.('.slide.imported-theme-slide').forEach(slide => {
    renderImportedThemeSlide(slide);
  });
}

function renderRuntimeSlide(slide, values = {}) {
  return renderImportedThemeSlide(slide, values);
}

function renderRuntimeSlides(scope = document) {
  renderImportedThemeSlides(scope);
}

window.__renderImportedThemeSlide = renderImportedThemeSlide;
window.__renderImportedThemeSlides = renderImportedThemeSlides;
window.__renderRuntimeSlide = renderRuntimeSlide;
window.__renderRuntimeSlides = renderRuntimeSlides;
window.__releaseRuntimeSlide = releaseImportedThemeSlide;
window.__releaseInactiveRuntimeSlides = releaseInactiveRuntimeSlides;
