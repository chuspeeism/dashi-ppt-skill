/**
 * gxnPrimitives.jsx — shared, prop-driven building blocks for all slides.
 * Pure presentational React. No window globals, no preview-runtime deps.
 *   import React from 'react'; in a real project.
 */
import React from 'react';
import { cx } from './gxnTheme.js';

/* ─────────────────────────────────────────────────────────────────────────
 * SlideHeader — parallel kicker + title + optional subtitle, top-left.
 * Renders title with an optional emphasised fragment ({ text, em }).
 * ──────────────────────────────────────────────────────────────────────── */
export function SlideHeader({ kicker, title, titleEm, subtitle, index, style }) {
  return (
    <header className="gxn-rise" style={{ display: 'flex', flexDirection: 'column', gap: 22, ...style }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {kicker != null && <p className="gxn-kicker">{kicker}</p>}
        {index != null && <span className="gxn-index">{index}</span>}
      </div>
      {title != null && (
        <h1 className="gxn-title">
          {title}
          {titleEm ? <span className="gxn-em">{titleEm}</span> : null}
        </h1>
      )}
      {subtitle != null && <p className="gxn-sub" style={{ maxWidth: 1180 }}>{subtitle}</p>}
    </header>
  );
}

export function mediaItem(value) {
  if (!value) return null;
  if (typeof value === 'string') return { src: value, kind: looksLikeVideoSrc(value) ? 'video' : 'image' };
  if (typeof value === 'object' && value.src) {
    const src = String(value.src || '');
    return {
      ...value,
      src,
      kind: value.kind || (String(value.type || src).startsWith('video/') || looksLikeVideoSrc(src) ? 'video' : 'image'),
    };
  }
  return null;
}

export function MediaView({ value, fit = 'cover', style }) {
  const data = mediaItem(value);
  if (!data?.src) return null;
  const nextStyle = { objectFit: fit, ...(style || {}) };
  return data.kind === 'video'
    ? <video src={data.src} muted playsInline loop autoPlay preload="metadata" style={nextStyle} />
    : <img src={data.src} alt="" style={nextStyle} />;
}

function looksLikeVideoSrc(src) {
  return String(src || '').startsWith('data:video/')
    || /\.(mp4|m4v|mov|webm|ogv)(?:[?#].*)?$/i.test(String(src || ''));
}

/* ─────────────────────────────────────────────────────────────────────────
 * ImageSlots — user-fillable, ratio-adaptive image area.
 *
 * Props
 *   count        number  how many slots to render (0 → renders nothing)
 *   items        array   image sources: string[] or {src}[] (index-aligned)
 *   captions     array   per-slot caption text (string[]). Shown as an overlay
 *                        on a filled slot, and as the empty-state hint.
 *   focusIndex   number  index of the slot to highlight (accent ring). -1 = none.
 *   onActivate   fn?     (i) => void — click an (empty or filled) slot.
 *                        Omit for a static/read-only render (migration default).
 *   onClear      fn?     (i) => void — remove the image in slot i.
 *   placeholder  string  empty-state caption (fallback when no per-slot caption).
 *   gap          number  px gap between slots in multi-slot layouts.
 *
 * Behaviour
 *   • count === 1 → the slot ADOPTS the uploaded image's natural aspect ratio
 *     (no crop), centred in the available area — best for a hero/feature shot.
 *   • count >= 2  → a composed grid (2: stacked, 3: feature + pair, 4: 2×2)
 *     with object-fit: cover, so any mix of ratios stays tidy.
 * ──────────────────────────────────────────────────────────────────────── */
export function ImageSlots({
  count = 1, items = [], captions = [], focusIndex = -1, onActivate, onClear,
  placeholder = '拖入图片 · IMAGE', gap = 16, arrange = 'grid', fit, className, style,
}) {
  const [ratios, setRatios] = React.useState({});
  if (!count || count < 1) return null;

  const get = (i) => mediaItem(items[i]);
  const onLoad = (i) => (e) => {
    const r = e.target.naturalWidth / e.target.naturalHeight;
    if (!r || !isFinite(r)) return;
    setRatios((p) => (Math.abs((p[i] || 0) - r) < 0.001 ? p : { ...p, [i]: r }));
  };

  const Slot = ({ i, single, cellStyle }) => {
    const data = get(i);
    const filled = !!(data && data.src);
    const ratio = ratios[i];
    const cap = captions[i];
    const isFocus = i === focusIndex;
    let boxStyle = { ...cellStyle };
    if (single) {
      const r = Math.max(0.62, Math.min(1.9, ratio || 1.5));
      boxStyle = {
        ...cellStyle,
        aspectRatio: filled ? String(r) : '3 / 2',
        width: !filled || r >= 1 ? '100%' : 'auto',
        height: !filled || r >= 1 ? 'auto' : '100%',
        maxWidth: '100%', maxHeight: '100%',
      };
    }
    return (
      <div className={cx('gxn-slot', filled && 'is-filled', isFocus && 'is-focus')} style={boxStyle}>
        {filled
          ? data.kind === 'video'
            ? <video src={data.src} muted playsInline loop preload="metadata"
                     style={{ objectFit: single ? 'contain' : (fit || 'cover') }} />
            : <img src={data.src} alt="" onLoad={onLoad(i)}
                   style={{ objectFit: single ? 'contain' : (fit || 'cover') }} />
          : <span className="gxn-slot-cap">{cap || placeholder}</span>}
        {filled && cap && (
          <div className="gxn-slot-overlay">
            <span className="gxn-cap-idx">{String(i + 1).padStart(2, '0')}</span>
            <span className="gxn-cap-txt">{cap}</span>
          </div>
        )}
        {onActivate && (
          <button type="button" className="gxn-slot-btn gxn-slot-add"
                  aria-label="选择图片" onClick={() => onActivate(i)} />
        )}
        {onClear && filled && (
          <button type="button" className="gxn-slot-btn gxn-slot-clear"
                  aria-label="移除图片"
                  onClick={(e) => { e.stopPropagation(); onClear(i); }}>×</button>
        )}
      </div>
    );
  };

  if (count === 1 && arrange !== 'row') {
    return (
      <div className={className}
           style={{ height: '100%', width: '100%', display: 'flex',
                    alignItems: 'center', justifyContent: 'center', ...style }}>
        <Slot i={0} single cellStyle={{}} />
      </div>
    );
  }

  if (arrange === 'row') {
    return (
      <div className={className}
           style={{ height: '100%', width: '100%', display: 'flex', gap, ...style }}>
        {Array.from({ length: count }).map((_, i) => (
          <Slot key={i} i={i} cellStyle={{ flex: 1, minWidth: 0, height: '100%' }} />
        ))}
      </div>
    );
  }

  let grid;
  if (count === 2) {
    grid = { gridTemplateColumns: '1fr', gridTemplateRows: '1fr 1fr' };
  } else if (count === 3) {
    grid = { gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1.25fr 1fr' };
  } else {
    grid = { gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr' };
  }
  return (
    <div className={className}
         style={{ height: '100%', width: '100%', display: 'grid', gap, ...grid, ...style }}>
      {Array.from({ length: count }).map((_, i) => (
        <Slot key={i} i={i}
              cellStyle={count === 3 && i === 0 ? { gridColumn: '1 / span 2' } : {}} />
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
 * Stat — a large glowing figure with unit + caption.
 * ──────────────────────────────────────────────────────────────────────── */
export function Stat({ value, unit, caption, focus = false, size = 'var(--gxn-fs-stat)' }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      <div className={cx('gxn-num', focus && 'gxn-aurora-num')} style={{
        fontSize: size, fontWeight: 600, lineHeight: 0.95, letterSpacing: '-0.02em',
        color: focus ? 'var(--gxn-accent)' : 'var(--gxn-text)',
        textShadow: focus ? '0 0 38px rgba(var(--gxn-glow),0.55)' : 'none',
      }}>
        {value}
        {unit && <span style={{ fontSize: '0.36em', marginLeft: 10, color: 'var(--gxn-dim)', fontWeight: 500 }}>{unit}</span>}
      </div>
      {caption && <span className="gxn-mono" style={{ fontSize: 'var(--gxn-fs-label)', color: 'var(--gxn-faint)' }}>{caption}</span>}
    </div>
  );
}

/* Decorative tag pill row. */
export function TagRow({ tags = [], style }) {
  if (!tags.length) return null;
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, ...style }}>
      {tags.map((t, i) => (
        <span key={i} className="gxn-mono" style={{
          fontSize: 'var(--gxn-fs-label)', color: 'var(--gxn-dim)',
          padding: '8px 18px', borderRadius: 999,
          border: '1px solid var(--gxn-line)', background: 'rgba(255,255,255,0.03)',
        }}>{t}</span>
      ))}
    </div>
  );
}
