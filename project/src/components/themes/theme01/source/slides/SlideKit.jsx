// SlideKit.jsx — shared, migration-safe primitives for every slide.
// Standard ES module: `import React from 'react'`, relative theme import, named
// exports only. No window globals. Styles are injected ONCE under the `aip-`
// scope (guarded by element id) so re-mounting many slides is cheap and never
// pollutes the host document's :root.

import React from 'react';
import { THEME_CSS, FONT_HREF, hexA } from './theme.js';

export { hexA };

// ── one-time injectors ──────────────────────────────────────────────────────
function injectStyleOnce(id, css) {
  if (typeof document === 'undefined' || document.getElementById(id)) return;
  const el = document.createElement('style');
  el.id = id;
  el.textContent = css;
  document.head.appendChild(el);
}
function injectFontOnce(id, href) {
  if (typeof document === 'undefined' || document.getElementById(id)) return;
  const el = document.createElement('link');
  el.id = id;
  el.rel = 'stylesheet';
  el.href = href;
  document.head.appendChild(el);
}

// ── SlideFrame ────────────────────────────────────────────────────────────
// The root every slide renders into. Establishes the `.aip-root` theme scope
// (CSS variables live here, never on :root), paints the dreamy background, and
// lays out children inside the padded `.aip-content` column.
//   bg:  'a' | 'b'  — which bokeh background variant
export function SlideFrame({ bg = 'a', children, style }) {
  React.useEffect(() => {
    injectFontOnce('aip-font', FONT_HREF);
    injectStyleOnce('aip-theme', THEME_CSS);
  }, []);
  // Inject synchronously too (covers SSR / first paint before effects run).
  injectStyleOnce('aip-theme', THEME_CSS);
  injectFontOnce('aip-font', FONT_HREF);
  return (
    <div className="aip-root" style={style}>
      <div className={`aip-bg aip-bg-${bg}`} />
      <div className="aip-content">{children}</div>
    </div>
  );
}

// ── Tag / pill ──────────────────────────────────────────────────────────────
export function Tag({ tone = 'red', children, className = '', style }) {
  return (
    <span className={`aip-tag aip-tag-${tone} ${className}`} style={style}>{children}</span>
  );
}

// ── SlideHead ─────────────────────────────────────────────────────────────
// The standard kicker + title + bilingual subtitle block used on content slides.
export function SlideHead({ kicker, tone = 'red', title, en, cn }) {
  return (
    <div className="aip-head">
      {kicker && <Tag tone={tone} className="aip-kicker">{kicker}</Tag>}
      <h2>{title}</h2>
      {(en || cn) && (
        <div className="aip-sub">
          {en && <span className="aip-en">{en}</span>}
          {cn && <span className="aip-cn">{cn}</span>}
        </div>
      )}
    </div>
  );
}

// ── MonoCaption ─────────────────────────────────────────────────────────────
// The `*/ … /*` decorative footnote. Hidden entirely when `show` is false.
export function MonoCaption({ show = true, children, style }) {
  if (!show) return null;
  return <div className="aip-mono" style={style}>{`*/ `}{children}{` /*`}</div>;
}

// ── ImageSlot ─────────────────────────────────────────────────────────────
// A drop-in image frame that adapts to whatever the user supplies.
//   src         — image URL / dataURL. When empty, a striped placeholder shows.
//   placeholder — caption shown on the empty placeholder
//   fit         — 'cover' (fill the cell, crop) | 'contain' (letterbox, no crop)
//   ratioMode   — 'fill' keeps the slot at its CSS box; 'auto' relaxes the slot
//                 to the loaded image's own aspect ratio (no cropping)
//   accent      — placeholder tint
// The slot never distorts an image: 'cover' crops to fill, 'contain'/'auto'
// preserve the full frame, so composition stays clean at any aspect ratio.
// ── ImageSlotActions (optional host wiring) — click-to-upload contract.
// The HOST (a preview shell or any target app) may wrap a slide in:
//   <ImageSlotActions.Provider value={{ pick: (slot) => …, clear: (slot) => … }}>
// Every <ImageSlot slot={i}> inside then becomes clickable: clicking calls
// `pick(i)` (the host opens its own file picker and feeds the result back
// through the slide's `images` prop), hovering a filled slot reveals a ✕ that
// calls `clear(i)`. WITHOUT a provider (or without a `slot` index) the slot
// renders as a plain, non-interactive image frame — slides stay pure,
// props-only PPT components and never depend on any preview runtime.
export const ImageSlotActions = React.createContext(null);

function mediaItem(value) {
  if (!value) return null;
  if (typeof value === 'string') return { src: value, kind: looksLikeVideoSrc(value) ? 'video' : 'image' };
  if (typeof value === 'object' && (value.src || value.u)) {
    const src = value.src || value.u;
    return {
      ...value,
      src,
      kind: value.kind || (String(value.type || src).startsWith('video/') || looksLikeVideoSrc(src) ? 'video' : 'image'),
    };
  }
  return null;
}

function looksLikeVideoSrc(src) {
  return String(src || '').startsWith('data:video/')
    || /\.(mp4|m4v|mov|webm|ogv)(?:[?#].*)?$/i.test(String(src || ''));
}

export function ImageSlot({
  src = '',
  placeholder = 'IMAGE',
  fit = 'cover',
  ratioMode = 'fill',
  accent = '#5b8def',
  radius = 20,
  slot = null,
  style,
}) {
  const [ratio, setRatio] = React.useState(null);
  const [hover, setHover] = React.useState(false);
  const actions = React.useContext(ImageSlotActions);
  const interactive = !!(actions && actions.pick && slot != null);
  const media = mediaItem(src);
  const mediaSrc = media?.src || '';
  const mediaKind = media?.kind || 'image';
  const onLoad = (e) => {
    const w = e.target.naturalWidth, h = e.target.naturalHeight;
    if (w && h) setRatio(w / h);
  };
  const base = {
    position: 'relative',
    width: '100%',
    height: ratioMode === 'auto' && ratio ? 'auto' : '100%',
    aspectRatio: ratioMode === 'auto' && ratio ? String(ratio) : undefined,
    borderRadius: radius,
    overflow: 'hidden',
    background: hexA(accent, 0.08),
    border: `1px solid ${hexA(accent, 0.22)}`,
    boxShadow: '0 1px 0 rgba(255,255,255,.6) inset, 0 18px 44px rgba(70,72,100,.12)',
    cursor: interactive ? 'pointer' : undefined,
    ...style,
  };
  // role="button" keeps deck-stage's touch tap-navigation from swallowing the
  // tap; these handlers only exist when a host wired ImageSlotActions.
  const stopSlotNavigation = (e) => { e.stopPropagation(); };
  const hostProps = interactive ? {
    'data-dashi-theme01-image-slot': 'true',
    role: 'button',
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    onPointerDown: stopSlotNavigation,
    onMouseDown: stopSlotNavigation,
    onClick: (e) => { e.stopPropagation(); actions.pick(slot); },
    onDoubleClick: stopSlotNavigation,
    onDragOver: (e) => { e.preventDefault(); e.stopPropagation(); setHover(true); },
    onDragLeave: () => setHover(false),
    onDrop: (e) => {
      e.preventDefault();
      e.stopPropagation();
      setHover(false);
      actions.drop && actions.drop(slot, e.dataTransfer.files && e.dataTransfer.files[0]);
    },
  } : {};
  if (mediaSrc) {
    return (
      <div style={base} {...hostProps}>
        {mediaKind === 'video' ? (
          <video
            src={mediaSrc}
            muted
            playsInline
            loop
            preload="metadata"
            style={{ display: 'block', width: '100%', height: '100%', objectFit: fit }}
          />
        ) : (
          <img
            src={mediaSrc}
            alt={placeholder}
            onLoad={onLoad}
            style={{ display: 'block', width: '100%', height: '100%', objectFit: fit }}
          />
        )}
        {interactive && (
          <div style={{
            position: 'absolute', inset: 0, display: 'flex', alignItems: 'center',
            justifyContent: 'center', pointerEvents: 'none',
            background: 'rgba(28,30,48,.30)', opacity: hover ? 1 : 0,
            transition: 'opacity .15s ease',
          }}>
            <span style={{
              fontFamily: "'Space Mono', monospace", fontSize: 20, letterSpacing: '.12em',
              color: '#fff', padding: '10px 20px', borderRadius: 999, whiteSpace: 'nowrap',
              border: '1px solid rgba(255,255,255,.65)', background: 'rgba(20,22,38,.48)',
              backdropFilter: 'blur(6px)',
            }}>点击更换图片</span>
          </div>
        )}
        {interactive && actions.clear && hover && (
          <span
            onClick={(e) => { e.stopPropagation(); setHover(false); actions.clear(slot); }}
            style={{
              position: 'absolute', top: 10, right: 10, width: 34, height: 34,
              borderRadius: '50%', display: 'flex', alignItems: 'center',
              justifyContent: 'center', cursor: 'pointer', fontSize: 17, lineHeight: 1,
              color: '#fff', background: 'rgba(20,22,38,.58)',
              border: '1px solid rgba(255,255,255,.55)', backdropFilter: 'blur(6px)',
            }}
          >✕</span>
        )}
      </div>
    );
  }
  // Empty: subtle diagonal stripes + monospace label (+ upload hint when the
  // host made the slot interactive).
  return (
    <div
      style={{
        ...base,
        backgroundImage: `repeating-linear-gradient(135deg, ${hexA(accent, 0.10)} 0 2px, transparent 2px 16px)`,
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
        alignItems: 'center',
        justifyContent: 'center',
        ...(interactive && hover ? { border: `1px solid ${hexA(accent, 0.55)}`, background: hexA(accent, 0.13) } : null),
      }}
      {...hostProps}
    >
      <span
        style={{
          fontFamily: 'Space Mono, monospace',
          fontSize: 24,
          letterSpacing: '.14em',
          textTransform: 'uppercase',
          color: hexA(accent, 0.75),
          padding: '8px 16px',
          border: `1px dashed ${hexA(accent, 0.45)}`,
          borderRadius: 8,
          maxWidth: '86%',
          textAlign: 'center',
        }}
      >
        {placeholder}
      </span>
      {interactive && (
        <span style={{
          fontFamily: 'Space Mono, monospace', fontSize: 18, letterSpacing: '.18em',
          color: hexA(accent, hover ? 0.9 : 0.6), transition: 'color .15s ease',
        }}>+ 点击上传</span>
      )}
    </div>
  );
}

// ── CollageImageArea ────────────────────────────────────────────────────────
// Overlapping "scrapbook" composition. The core idea, distilled: pieces ESCAPE
// normal flow (absolute positioning) and z-index decides who sits on top.
// Each piece is tilted (rotate), white-framed (a padding-as-border mat), and
// drop-shadowed so it reads as floating; the front-most piece can carry an
// accent frame to tie into the slide's theme color. Adapts to 1–5 images and to
// each image's own ratio via ImageSlot (cover crop / contain fit — never warps).
// Coordinates are percentages of the host box, so the same layouts read well in
// a tall side column or a wide montage band.
const COLLAGE_LAYOUTS = {
  1: [{ l: 6, t: 5, w: 84, h: 88, r: -2.2, z: 1 }],
  2: [
    { l: 0, t: 2, w: 64, h: 62, r: -3.6, z: 1 },
    { l: 35, t: 33, w: 64, h: 64, r: 3.0, z: 2 },
  ],
  3: [
    { l: 1, t: 1, w: 60, h: 55, r: -3.6, z: 1 },
    { l: 41, t: 11, w: 58, h: 55, r: 3.2, z: 2 },
    { l: 16, t: 45, w: 61, h: 53, r: -1.4, z: 3 },
  ],
  4: [
    { l: 0, t: 0, w: 53, h: 50, r: -3.6, z: 1 },
    { l: 47, t: 5, w: 53, h: 50, r: 3.0, z: 2 },
    { l: 2, t: 48, w: 53, h: 51, r: 2.4, z: 3 },
    { l: 46, t: 50, w: 54, h: 50, r: -3.2, z: 4 },
  ],
  5: [
    { l: 0, t: 1, w: 46, h: 46, r: -4.2, z: 1 },
    { l: 53, t: 0, w: 47, h: 46, r: 3.4, z: 2 },
    { l: 1, t: 50, w: 46, h: 49, r: 2.8, z: 3 },
    { l: 54, t: 50, w: 46, h: 49, r: -3.4, z: 4 },
    { l: 25, t: 27, w: 50, h: 48, r: -0.8, z: 5 },
  ],
};

export function CollageImageArea({
  count = 1,
  images = [],
  fit = 'cover',
  accent = '#5b8def',
  accentFront = true,
  renderBadge,
}) {
  const n = Math.max(1, Math.min(5, count));
  const pieces = COLLAGE_LAYOUTS[n];
  const frontZ = Math.max.apply(null, pieces.map((p) => p.z));
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      {pieces.map((pc, i) => {
        const isFront = accentFront && n > 1 && pc.z === frontZ;
        const fw = isFront ? 6 : 7;                 // white-mat thickness
        return (
          <div
            key={i}
            style={{
              position: 'absolute',
              left: `${pc.l}%`, top: `${pc.t}%`,
              width: `${pc.w}%`, height: `${pc.h}%`,
              transform: `rotate(${pc.r}deg)`,
              zIndex: pc.z,
              padding: fw,                            // the mat: shows as a frame
              borderRadius: 18,
              background: isFront ? accent : '#ffffff',
              boxShadow: isFront
                ? `0 30px 64px ${hexA(accent, 0.42)}, 0 8px 20px rgba(40,42,70,.22)`
                : '0 28px 56px rgba(40,42,70,.30), 0 6px 16px rgba(40,42,70,.18)',
            }}
          >
            <div style={{ position: 'relative', width: '100%', height: '100%', borderRadius: 12, overflow: 'hidden' }}>
              <ImageSlot
                src={images[i] || ''}
                placeholder={`图片 ${i + 1}`}
                fit={fit}
                ratioMode="fill"
                accent={accent}
                radius={0}
                slot={i}
                style={{ height: '100%', border: 'none', borderRadius: 0, boxShadow: 'none' }}
              />
              {renderBadge && renderBadge(i)}
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ── GlassCard ───────────────────────────────────────────────────────────────
export function GlassCard({ children, className = '', style }) {
  return <div className={`aip-glass ${className}`} style={style}>{children}</div>;
}
