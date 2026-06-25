// SwImageSlot.jsx — a reusable, props-controlled image placeholder.
//
// The user fills it by dragging an image onto it or clicking to pick a file.
// It is fully controlled: it never owns persistence — the parent passes `value`
// (a data/URL string or null) and receives `onChange(next, meta)` where
// meta = { ratio }  (natural width / height of the dropped image).
//
// "Adaptive ratio": when `adaptive` is true, a filled slot reshapes its own box
// to the image's natural aspect ratio (clamped to [minRatio, maxRatio]) so the
// composition follows the artwork instead of cropping it. When false, the slot
// fills the box its parent gives it and crops with object-fit:cover.
//
// Props
//   value      string|null   current image src (controlled)            default null
//   onChange   (src, meta)   called on add/replace/remove              default no-op
//   placeholder string       hint text shown when empty                default '拖入图片 / Drop image'
//   fit        'cover'|'contain'  object-fit when filled               default 'cover'
//   adaptive   boolean       reshape box to image ratio when filled    default false
//   minRatio   number        clamp for adaptive aspect-ratio           default 0.6
//   maxRatio   number        clamp for adaptive aspect-ratio           default 1.9
//   radius     number        corner radius (px)                        default 18
//   accent     string        tint for placeholder + focus              default '#f15a29'
//   label      string|number small index badge (optional)              default null
//   tone       'light'|'dark' empty-state styling for the backdrop       default 'light'

import React from 'react';

export default function SwImageSlot({
  value = null,
  onChange = () => {},
  placeholder = '拖入图片 / Drop image',
  fit = 'cover',
  adaptive = false,
  minRatio = 0.6,
  maxRatio = 1.9,
  radius = 18,
  accent = '#f15a29',
  label = null,
  tone = 'light',
}) {
  const dark = tone === 'dark';
  const inputRef = React.useRef(null);
  const [ratio, setRatio] = React.useState(null);
  const [over, setOver] = React.useState(false);
  const media = normalizeMedia(value);

  const readFile = (file) => {
    if (!file || !/^(image|video)\//.test(file.type || '')) return;
    const r = new FileReader();
    r.onload = () => {
      const src = r.result;
      if (file.type.startsWith('video/')) {
        const video = document.createElement('video');
        video.preload = 'metadata';
        video.onloadedmetadata = () => {
          const ra = video.videoWidth && video.videoHeight ? video.videoWidth / video.videoHeight : 1;
          setRatio(ra);
          onChange({ src, type: file.type, kind: 'video', ratio: ra }, { ratio: ra, kind: 'video', type: file.type });
        };
        video.onerror = () => onChange({ src, type: file.type, kind: 'video', ratio: null }, { ratio: null, kind: 'video', type: file.type });
        video.src = src;
        return;
      }
      const img = new Image();
      img.onload = () => {
        const ra = img.naturalWidth / img.naturalHeight;
        setRatio(ra);
        onChange({ src, type: file.type, kind: 'image', ratio: ra }, { ratio: ra, kind: 'image', type: file.type });
      };
      img.src = src;
    };
    r.readAsDataURL(file);
  };

  const onDrop = (e) => {
    e.preventDefault(); e.stopPropagation(); setOver(false);
    const f = e.dataTransfer.files && e.dataTransfer.files[0];
    readFile(f);
  };
  const stopSlotNavigation = (e) => e.stopPropagation();
  const openPicker = (e) => {
    e.stopPropagation();
    inputRef.current && inputRef.current.click();
  };

  const clamp = (r) => Math.max(minRatio, Math.min(maxRatio, r));
  const boxAspect = adaptive && media?.src && (ratio || media.ratio) ? clamp(ratio || media.ratio) : undefined;

  const stripe = dark
    ? 'repeating-linear-gradient(135deg, rgba(255,255,255,.07) 0 14px, rgba(255,255,255,.02) 14px 28px)'
    : 'repeating-linear-gradient(135deg, rgba(0,0,0,.045) 0 14px, rgba(0,0,0,.015) 14px 28px)';
  const emptyBg = dark ? 'rgba(255,255,255,.05)' : 'rgba(27,21,24,.04)';
  const dashColor = dark ? 'rgba(245,225,227,.34)' : 'rgba(27,21,24,.28)';
  const hintColor = dark ? 'rgba(245,225,227,.62)' : 'rgba(27,21,24,.5)';

  return (
    <div
      onClick={openPicker}
      onPointerDown={stopSlotNavigation}
      onMouseDown={stopSlotNavigation}
      onDragOver={(e) => { e.preventDefault(); e.stopPropagation(); setOver(true); }}
      onDragLeave={(e) => { e.stopPropagation(); setOver(false); }}
      onDrop={onDrop}
      style={{
        position: 'relative', width: '100%', height: adaptive && boxAspect ? 'auto' : '100%',
        aspectRatio: boxAspect, borderRadius: radius, overflow: 'hidden', cursor: 'pointer',
        background: media?.src ? '#0000' : stripe,
        backgroundColor: media?.src ? 'transparent' : emptyBg,
        outline: over ? '3px solid ' + accent : '1px dashed ' + dashColor,
        outlineOffset: over ? -3 : -1, transition: 'outline-color .12s',
      }}
    >
      <input ref={inputRef} type="file" accept="image/*,video/mp4,video/webm,video/quicktime,video/*" style={{ display: 'none' }}
        onClick={(e) => e.stopPropagation()}
        onChange={(e) => { readFile(e.target.files && e.target.files[0]); e.target.value = ''; }} />

      {media?.src ? (
        <>
          {media.kind === 'video'
            ? <video src={media.src} muted playsInline loop autoPlay preload="metadata" style={{ width: '100%', height: '100%', objectFit: fit, display: 'block' }} />
            : <img src={media.src} alt="" style={{ width: '100%', height: '100%', objectFit: fit, display: 'block' }} />}
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); setRatio(null); onChange(null, { ratio: null }); }}
            style={{ position: 'absolute', top: 10, right: 10, width: 30, height: 30, borderRadius: '50%',
              border: 'none', cursor: 'pointer', background: 'rgba(0,0,0,.55)', color: '#fff',
              fontFamily: "'Space Mono',monospace", fontSize: 16, lineHeight: '30px' }}
            aria-label="Remove media">×</button>
        </>
      ) : (
        <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center', gap: 10, textAlign: 'center', padding: 18 }}>
          <div style={{ width: 46, height: 46, borderRadius: '50%', display: 'flex', alignItems: 'center',
            justifyContent: 'center', background: accent, color: '#fff', fontSize: 26, fontWeight: 700,
            fontFamily: "'Space Mono',monospace" }}>+</div>
          <div style={{ fontFamily: "'Space Mono',monospace", fontSize: 24, letterSpacing: '.04em',
            color: hintColor }}>{placeholder}</div>
        </div>
      )}

      {label != null && (
        <div style={{ position: 'absolute', top: 10, left: 12, fontFamily: "'Space Mono',monospace",
          fontSize: 22, fontWeight: 700, color: media?.src ? '#fff' : 'rgba(27,21,24,.4)',
          textShadow: media?.src ? '0 1px 4px rgba(0,0,0,.5)' : 'none' }}>{String(label).padStart(2, '0')}</div>
      )}
    </div>
  );
}

export function normalizeMedia(value) {
  if (!value) return null;
  if (typeof value === 'string') return { src: value, kind: looksLikeVideoSrc(value) ? 'video' : 'image' };
  if (typeof value === 'object' && value.src) {
    return {
      ...value,
      kind: value.kind || (String(value.type || value.src).startsWith('video/') || looksLikeVideoSrc(value.src) ? 'video' : 'image'),
    };
  }
  return null;
}

function looksLikeVideoSrc(src) {
  return String(src || '').startsWith('data:video/')
    || /\.(mp4|m4v|mov|webm|ogv)(?:[?#].*)?$/i.test(String(src || ''));
}
