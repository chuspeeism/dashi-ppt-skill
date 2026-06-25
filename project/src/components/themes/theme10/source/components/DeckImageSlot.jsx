// DeckImageSlot.jsx — a user-fillable image placeholder.
// Self-contained & migratable: depends only on React (imported). Click or drag an
// image onto it; the file is stored as a data URL in localStorage under `id`, so
// it survives reloads. Reports the image's natural aspect ratio via onAspect(r)
// so a parent layout can size the slot faithfully (no cropping when fit="cover"
// and the box already matches the ratio).
//
// Props:
//   id          string   persistence key (REQUIRED for persistence)
//   placeholder string   label shown in the empty state            default 'IMAGE'
//   fit         'cover' | 'contain'                                  default 'cover'
//   radius      number   corner radius in px                        default 18
//   onAspect    (ratio:number) => void   fires with naturalW/naturalH
//   className   string   extra class on the root

import React from 'react';

export const DeckImageSlotMediaContext = React.createContext(null);

function DeckImageSlot({ id, placeholder = 'IMAGE', fit = 'cover', radius = 18, onAspect, className = '' }) {
  const storeKey = id ? `dslot:${id}` : null;
  const mediaHost = React.useContext(DeckImageSlotMediaContext);
  const hasHostMedia = Boolean(mediaHost?.get || mediaHost?.set);
  const [media, setMedia] = React.useState(() => {
    if (hasHostMedia) return normalizeHostMedia(mediaHost?.get?.(id, 0));
    try { return storeKey ? readStoredMedia(localStorage.getItem(storeKey) || '') : null; } catch (e) { return null; }
  });
  const [over, setOver] = React.useState(false);
  const inputRef = React.useRef(null);

  React.useEffect(() => { dslotInjectStyle(); }, []);

  // Re-read when id changes (slots reused across counts keep their own image).
  React.useEffect(() => {
    if (hasHostMedia) setMedia(normalizeHostMedia(mediaHost?.get?.(id, 0)));
    else {
      try { setMedia(storeKey ? readStoredMedia(localStorage.getItem(storeKey) || '') : null); } catch (e) { /* noop */ }
    }
  }, [storeKey, id, hasHostMedia, mediaHost]);

  const report = React.useCallback((item) => {
    if (!onAspect || !item?.src || item.kind === 'video') return;
    const im = new Image();
    im.onload = () => onAspect(im.naturalWidth / im.naturalHeight);
    im.src = item.src;
  }, [onAspect]);

  React.useEffect(() => { if (media?.src) report(media); }, [media, report]);

  const save = (item) => {
    setMedia(item);
    if (mediaHost?.set) mediaHost.set(id, 0, item);
    else {
      try {
        if (item && storeKey) localStorage.setItem(storeKey, JSON.stringify(item));
        else if (storeKey) localStorage.removeItem(storeKey);
      } catch (e) { /* quota */ }
    }
  };

  const ingest = (file) => {
    if (!file || !/^(image|video)\//.test(file.type || '')) return;
    if (hasHostMedia && mediaHost?.drop) {
      mediaHost.drop(id, 0, file);
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      const url = String(reader.result);
      const item = {
        src: url,
        type: file.type,
        kind: file.type.startsWith('video/') ? 'video' : 'image',
      };
      save(item);
    };
    reader.readAsDataURL(file);
  };

  const stopSlotNavigation = (e) => e.stopPropagation();
  const openPicker = (e) => {
    e.stopPropagation();
    inputRef.current && inputRef.current.click();
  };
  const onDrop = (e) => { e.preventDefault(); e.stopPropagation(); setOver(false); ingest(e.dataTransfer.files && e.dataTransfer.files[0]); };
  const clear = (e) => {
    e.stopPropagation();
    save(null);
  };

  return (
    <div className={`dslot ${over ? 'is-over' : ''} ${media?.src ? 'is-filled' : ''} ${className}`}
         style={{ borderRadius: radius }}
         onPointerDown={stopSlotNavigation}
         onMouseDown={stopSlotNavigation}
         onClick={openPicker}
         onDragOver={(e) => { e.preventDefault(); e.stopPropagation(); setOver(true); }}
         onDragLeave={(e) => { e.stopPropagation(); setOver(false); }}
         onDrop={onDrop}>
      {media?.src ? (
        <>
          {media.kind === 'video'
            ? <video className="dslot-img" src={media.src} muted playsInline loop preload="metadata" style={{ objectFit: fit }} />
            : <img className="dslot-img" src={media.src} alt="" style={{ objectFit: fit }} />}
          <button className="dslot-clear" onClick={clear} aria-label="清除图片">✕</button>
        </>
      ) : (
        <div className="dslot-empty">
          <span className="dslot-label">{placeholder}</span>
          <span className="dslot-hint">点击或拖入媒体</span>
        </div>
      )}
      <input ref={inputRef} type="file" accept="image/*,video/mp4,video/webm,video/quicktime,video/*" hidden
             onClick={(e) => e.stopPropagation()}
             onChange={(e) => { ingest(e.target.files && e.target.files[0]); e.target.value = ''; }} />
    </div>
  );
}

function normalizeHostMedia(value) {
  if (!value) return null;
  if (typeof value === 'string') return { src: value, kind: looksLikeVideoSrc(value) ? 'video' : 'image' };
  if (typeof value === 'object') {
    const src = value.src || value.url || value.u;
    if (!src) return null;
    return {
      ...value,
      src,
      kind: value.kind || (String(value.type || src).startsWith('video/') || looksLikeVideoSrc(src) ? 'video' : 'image'),
    };
  }
  return null;
}

function readStoredMedia(raw) {
  if (!raw) return null;
  try {
    const parsed = JSON.parse(raw);
    if (parsed?.src) return {
      ...parsed,
      kind: parsed.kind || (String(parsed.type || parsed.src).startsWith('video/') || looksLikeVideoSrc(parsed.src) ? 'video' : 'image'),
    };
  } catch {}
  return { src: raw, kind: looksLikeVideoSrc(raw) ? 'video' : 'image' };
}

function looksLikeVideoSrc(src) {
  return String(src || '').startsWith('data:video/')
    || /\.(mp4|m4v|mov|webm|ogv)(?:[?#].*)?$/i.test(String(src || ''));
}

function dslotInjectStyle() {
  if (document.getElementById('dslot-style')) return;
  const s = document.createElement('style');
  s.id = 'dslot-style';
  s.textContent = `
  .dslot{position:relative;width:100%;height:100%;overflow:hidden;cursor:pointer;
    background:
      repeating-linear-gradient(135deg, rgba(255,255,255,.045) 0 2px, transparent 2px 11px),
      var(--ds-bg-soft, #16181d);
    box-shadow: inset 0 0 0 1px var(--ds-line, rgba(243,244,246,.14));
    transition:box-shadow .18s ease, background .18s ease;}
  .dslot.is-over{box-shadow: inset 0 0 0 1.5px var(--ds-accent, #6f9bd8);}
  .dslot.is-filled{background:var(--ds-bg-soft,#16181d);box-shadow:none;}
  .dslot-img{position:absolute;inset:0;width:100%;height:100%;display:block;}
  .dslot-empty{position:absolute;inset:0;display:flex;flex-direction:column;
    align-items:center;justify-content:center;gap:12px;text-align:center;padding:18px;}
  .dslot-label{font-family:var(--font-mono,'IBM Plex Mono',monospace);
    font-size:24px;letter-spacing:.16em;text-transform:uppercase;
    color:var(--ds-faint, rgba(243,244,246,.42));}
  .dslot-hint{font-family:var(--font-mono,'IBM Plex Mono',monospace);
    font-size:24px;letter-spacing:.04em;color:var(--ds-faint, rgba(243,244,246,.28));}
  .dslot-clear{position:absolute;top:12px;right:12px;width:40px;height:40px;border:0;
    border-radius:50%;background:rgba(8,9,11,.55);color:#fff;font-size:24px;line-height:1;
    cursor:pointer;opacity:0;transition:opacity .15s ease;backdrop-filter:blur(6px);}
  .dslot:hover .dslot-clear{opacity:1;}
  `;
  document.head.appendChild(s);
}

export { DeckImageSlot };
export default DeckImageSlot;
