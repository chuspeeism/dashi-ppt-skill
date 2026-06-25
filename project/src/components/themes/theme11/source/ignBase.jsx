/* ignBase.jsx — shared, migration-safe base for the IGNIS deck template.
 *
 * - No global :root pollution. All theme values are CSS custom properties set
 *   INLINE on each slide's root element (.ign-slide), so styles are scoped to
 *   the component subtree and safe to drop into any React project.
 * - All class names are prefixed `ign-` to avoid collisions after migration.
 * - Exports are standard ES exports (no window registration).
 *
 * Consuming project: just render <Slide> (and the primitives) inside any
 * container. React must be available (classic or automatic JSX runtime).
 */

/* ----------------------------------------------------------------------------
 * Fonts + scoped stylesheet are injected once, lazily, on first Slide mount.
 * The stylesheet only defines `.ign-*` rules that read CSS variables which are
 * set per-slide on the root element — nothing leaks to the host document root.
 * -------------------------------------------------------------------------- */
let __ignInjected = false;
export const IgnisImageSlotMediaContext = React.createContext(null);
function ensureBase() {
  if (__ignInjected || typeof document === 'undefined') return;
  __ignInjected = true;

  if (!document.getElementById('ign-fonts')) {
    const l = document.createElement('link');
    l.id = 'ign-fonts';
    l.rel = 'stylesheet';
    l.href = 'https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@300;400;500;700;900&family=Noto+Serif+SC:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&family=Newsreader:ital,opsz,wght@1,18..72,300;1,18..72,400;1,18..72,500&display=swap';
    document.head.appendChild(l);
  }
  const s = document.createElement('style');
  s.id = 'ign-base-css';
  s.textContent = IGN_CSS;
  document.head.appendChild(s);
}

/* ---- theme tokens ---------------------------------------------------------- */
export const IGN_SURFACES = ['ink', 'paper', 'ember'];

export function makeTheme(surface = 'ink') {
  const accent = { a: '#FFC07A', b: '#FF6E2E', c: '#E22A0C' };
  const emberText = `linear-gradient(110deg, ${accent.a} 0%, ${accent.b} 46%, ${accent.c} 100%)`;
  const base = { '--ign-a': accent.a, '--ign-b': accent.b, '--ign-c': accent.c, '--ign-ember': emberText };

  if (surface === 'paper') {
    return { surface, ...base,
      '--ign-bg': '#ECE7DF', '--ign-ink': '#191310',
      '--ign-ink2': 'rgba(25,19,16,0.62)', '--ign-ink3': 'rgba(25,19,16,0.40)', '--ign-ink4': 'rgba(25,19,16,0.16)',
      '--ign-hair': 'rgba(25,19,16,0.13)', '--ign-hair2': 'rgba(25,19,16,0.24)',
      '--ign-panel': 'rgba(25,19,16,0.035)', '--ign-ghost': 'rgba(25,19,16,0.05)',
      '--ign-glow': '0.42', '--ign-grain': '0.32', '--ign-edge': '0' };
  }
  if (surface === 'ember') {
    return { surface, ...base,
      '--ign-bg': '#170A05', '--ign-ink': '#F8ECE2',
      '--ign-ink2': 'rgba(248,236,226,0.62)', '--ign-ink3': 'rgba(248,236,226,0.34)', '--ign-ink4': 'rgba(248,236,226,0.17)',
      '--ign-hair': 'rgba(248,236,226,0.13)', '--ign-hair2': 'rgba(248,236,226,0.24)',
      '--ign-panel': 'rgba(255,244,236,0.03)', '--ign-ghost': 'rgba(255,255,255,0.03)',
      '--ign-glow': '1', '--ign-grain': '0.5', '--ign-edge': '0.62' };
  }
  return { surface, ...base, // ink (default dark)
    '--ign-bg': '#0B0908', '--ign-ink': '#F4EEE6',
    '--ign-ink2': 'rgba(244,238,230,0.60)', '--ign-ink3': 'rgba(244,238,230,0.32)', '--ign-ink4': 'rgba(244,238,230,0.16)',
    '--ign-hair': 'rgba(244,238,230,0.12)', '--ign-hair2': 'rgba(244,238,230,0.22)',
    '--ign-panel': 'rgba(255,244,236,0.026)', '--ign-ghost': 'rgba(255,255,255,0.028)',
    '--ign-glow': '0.92', '--ign-grain': '0.5', '--ign-edge': '0.56' };
}

/* ---- Slide root ------------------------------------------------------------ */
export function Slide({ surface = 'ink', className = '', style, children }) {
  ensureBase();
  const theme = makeTheme(surface);
  return (
    <div className={`ign-slide ${className}`} data-surface={surface} style={{ ...theme, ...style }}>
      {children}
    </div>
  );
}

/* ---- atmosphere primitives ------------------------------------------------- */
export function Bloom({ style }) { return <div className="ign-bloom" style={style} />; }
export function Grain() { return <div className="ign-grain" />; }
export function Edge() { return <div className="ign-edge" />; }
export function Ghost({ children, style }) { return <div className="ign-ghost" style={style}>{children}</div>; }
export function Rail({ children }) { return <div className="ign-rail"><span className="ign-rail-txt">{children}</span></div>; }
export function Corners() {
  return <><span className="ign-corner tl" /><span className="ign-corner tr" /><span className="ign-corner bl" /><span className="ign-corner br" /></>;
}
export function EmberText({ children, style, className = '' }) {
  return <span className={`ign-ember-text ${className}`} style={style}>{children}</span>;
}
export function Frame({ children, style, className = '' }) {
  return <div className={`ign-frame ${className}`} style={style}>{children}</div>;
}

let __markId = 0;
export function Brandmark({ size = 24 }) {
  const id = React.useMemo(() => 'ign-mk-' + (++__markId), []);
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" style={{ flex: 'none' }}>
      <path d="M20 5 L20 18 M20 18 L12 10 M20 18 L28 10" stroke={`url(#${id})`} strokeWidth="4" strokeLinecap="round" />
      <path d="M20 35 L20 22 M20 22 L12 30 M20 22 L28 30" stroke={`url(#${id})`} strokeWidth="4" strokeLinecap="round" />
      <defs><linearGradient id={id} x1="0" y1="0" x2="40" y2="40"><stop stopColor="#FFC07A" /><stop offset="1" stopColor="#E22A0C" /></linearGradient></defs>
    </svg>
  );
}

export function Wordmark() {
  return <div className="ign-lock"><Brandmark /><div className="ign-wm">IGNIS <em>燃点</em></div></div>;
}

/* ---- adaptive image slot ---------------------------------------------------
 * Auto-adapts to the uploaded image's native aspect ratio. `mode`:
 *   'ratio'  → box takes the image's natural ratio (good for feature images)
 *   'height' → fixed height, width follows ratio (good for logo walls)
 *   'fill'   → fills given box, object-fit cover (good for circles/cards)
 * Empty (no src) renders a striped placeholder with a monospace hint.
 * ------------------------------------------------------------------------- */
export function ImageSlot({ src, placeholder = '图片', mode = 'ratio', height, radius = 4, fit = 'cover', uploadable = true }) {
  const [ratio, setRatio] = React.useState(null);
  const [picked, setPicked] = React.useState(null);
  const [drag, setDrag] = React.useState(false);
  const inputRef = React.useRef(null);
  const mediaBridge = React.useContext(IgnisImageSlotMediaContext);
  const slotId = React.useId();
  const bridgeIndex = mediaBridge?.resolve?.(slotId);
  const bridged = Number.isFinite(bridgeIndex) ? mediaBridge?.get?.(bridgeIndex) : null;
  const media = normalizeMedia(bridged || picked || src);
  const eff = media?.src;
  const onLoad = (e) => setRatio(`${e.target.naturalWidth} / ${e.target.naturalHeight}`);
  const commitPicked = (value) => {
    if (mediaBridge && Number.isFinite(bridgeIndex)) {
      mediaBridge.set?.(bridgeIndex, value);
      return;
    }
    setPicked(value);
  };
  const ingest = (f) => {
    if (!f || !/^(image|video)\//.test(f.type || '')) return;
    if (mediaBridge?.drop && Number.isFinite(bridgeIndex)) {
      mediaBridge.drop(bridgeIndex, f);
      return;
    }
    const rd = new FileReader();
    rd.onload = () => {
      const url = rd.result;
      if (f.type.startsWith('video/')) {
        const video = document.createElement('video');
        video.preload = 'metadata';
        video.onloadedmetadata = () => {
          const nextRatio = video.videoWidth && video.videoHeight ? `${video.videoWidth} / ${video.videoHeight}` : null;
          setRatio(nextRatio);
          commitPicked({ src: url, kind: 'video', type: f.type, ratio: video.videoWidth && video.videoHeight ? video.videoWidth / video.videoHeight : null });
        };
        video.onerror = () => commitPicked({ src: url, kind: 'video', type: f.type });
        video.src = url;
        return;
      }
      setRatio(null);
      commitPicked({ src: url, kind: 'image', type: f.type });
    };
    rd.readAsDataURL(f);
  };
  const onFile = (e) => {
    ingest(e.target.files && e.target.files[0]);
    e.target.value = '';
  };
  const stopSlotNavigation = (e) => e.stopPropagation();
  const openPicker = (e) => {
    e.stopPropagation();
    inputRef.current && inputRef.current.click();
  };
  const onDragOver = (e) => { e.preventDefault(); e.stopPropagation(); if (!drag) setDrag(true); };
  const onDragLeave = (e) => { e.preventDefault(); e.stopPropagation(); setDrag(false); };
  const onDrop = (e) => { e.preventDefault(); e.stopPropagation(); setDrag(false); ingest(e.dataTransfer.files && e.dataTransfer.files[0]); };
  let boxStyle = { borderRadius: radius };
  if (mode === 'height') { boxStyle.height = height || 44; boxStyle.aspectRatio = ratio || '3 / 1'; boxStyle.width = 'auto'; }
  else if (mode === 'fill') { boxStyle.height = height || '100%'; boxStyle.width = height || '100%'; }
  else { boxStyle.width = '100%'; boxStyle.aspectRatio = ratio || '4 / 3'; }
  return (
    <div className={`ign-imgslot${uploadable ? ' ign-imgslot-up' : ''}${drag ? ' ign-imgslot-drag' : ''}`} style={boxStyle}
      onClick={uploadable ? openPicker : undefined}
      onPointerDown={uploadable ? stopSlotNavigation : undefined}
      onMouseDown={uploadable ? stopSlotNavigation : undefined}
      onDragOver={uploadable ? onDragOver : undefined}
      onDragLeave={uploadable ? onDragLeave : undefined}
      onDrop={uploadable ? onDrop : undefined}
      role={uploadable ? 'button' : undefined}
      title={uploadable ? (eff ? '点击或拖拽媒体以更换' : '点击或拖拽媒体以上传') : undefined}>
      {eff
        ? (media.kind === 'video'
          ? <video src={eff} muted playsInline loop autoPlay preload="metadata" style={{ width: '100%', height: '100%', objectFit: fit, display: 'block', borderRadius: radius }} />
          : <img src={eff} alt="" onLoad={onLoad} style={{ width: '100%', height: '100%', objectFit: fit, display: 'block', borderRadius: radius }} />)
        : <div className="ign-imgslot-ph"><span>{placeholder}</span></div>}
      {uploadable && (
        <>
          <div className="ign-imgslot-hint"><span>{drag ? '释放以上传' : (eff ? '点击 / 拖拽更换' : '点击 / 拖拽上传')}</span></div>
          <input ref={inputRef} type="file" accept="image/*,video/mp4,video/webm,video/quicktime,video/*" onChange={onFile}
            onClick={(e)=>e.stopPropagation()}
            style={{ position: 'absolute', width: 1, height: 1, opacity: 0, pointerEvents: 'none' }} tabIndex={-1} />
        </>
      )}
    </div>
  );
}

function normalizeMedia(value) {
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

/* ---- small util: clamp a prop into [min,max] ------------------------------- */
export function clampInt(v, min, max) { v = Math.round(Number(v) || 0); return Math.max(min, Math.min(max, v)); }

/* Inject a page's own prefixed stylesheet once (keeps each page self-contained
 * for migration; all selectors must be `.ign-*` prefixed by convention). */
/* Inject a page's own prefixed stylesheet once (keeps each page self-contained
 * for migration; all selectors must be `.ign-*` prefixed by convention).
 * Always ensures the shared base stylesheet is present FIRST, so the base
 * `.ign-slide *{margin:0;padding:0}` reset can never cascade over (and wipe out)
 * a page's spacing — important for whichever slide renders before any <Slide>. */
export function injectCSS(id, css) {
  if (typeof document === 'undefined') return;
  ensureBase();
  if (document.getElementById(id)) return;
  const s = document.createElement('style');
  s.id = id; s.textContent = css;
  document.head.appendChild(s);
}

/* ---- the scoped stylesheet ------------------------------------------------- */
const IGN_CSS = `
.ign-slide{position:absolute;inset:0;overflow:hidden;background:var(--ign-bg);color:var(--ign-ink);
  font-family:'Noto Sans SC',sans-serif;-webkit-font-smoothing:antialiased;
  font-synthesis-style:none}
.ign-slide *{box-sizing:border-box;margin:0;padding:0}
.ign-en{font-family:'Space Grotesk','Noto Sans SC',sans-serif}
.ign-serif{font-family:'Newsreader','Noto Serif SC',serif;font-style:italic;font-weight:800}
.ign-ember-text{background:var(--ign-ember);-webkit-background-clip:text;background-clip:text;color:transparent}

.ign-bloom{position:absolute;pointer-events:none;z-index:0;opacity:var(--ign-glow)}
.ign-grain{position:absolute;inset:0;z-index:2;pointer-events:none;opacity:var(--ign-grain);mix-blend-mode:overlay;
  background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='220' height='220'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")}
.ign-edge{position:absolute;inset:0;z-index:3;pointer-events:none;
  background:radial-gradient(135% 125% at 50% 40%,rgba(0,0,0,0) 50%,rgba(0,0,0,var(--ign-edge)) 100%)}

.ign-ghost{position:absolute;z-index:1;font-family:'Space Grotesk',sans-serif;font-weight:700;line-height:0.8;
  color:var(--ign-ghost);letter-spacing:-0.04em;pointer-events:none;user-select:none}
.ign-rail{position:absolute;left:42px;top:0;bottom:0;width:44px;z-index:4;
  display:flex;align-items:center;justify-content:center;pointer-events:none}
.ign-rail-txt{white-space:nowrap;transform:rotate(-90deg);transform-origin:center;
  font-family:'Space Grotesk',sans-serif;font-size:24px;letter-spacing:0.32em;text-transform:uppercase;color:var(--ign-ink3)}
.ign-corner{position:absolute;z-index:4;width:20px;height:20px;pointer-events:none}
.ign-corner.tl{left:52px;top:50px;border-left:1px solid var(--ign-hair2);border-top:1px solid var(--ign-hair2)}
.ign-corner.tr{right:52px;top:50px;border-right:1px solid var(--ign-hair2);border-top:1px solid var(--ign-hair2)}
.ign-corner.bl{left:52px;bottom:50px;border-left:1px solid var(--ign-hair2);border-bottom:1px solid var(--ign-hair2)}
.ign-corner.br{right:52px;bottom:50px;border-right:1px solid var(--ign-hair2);border-bottom:1px solid var(--ign-hair2)}

.ign-frame{position:absolute;inset:0;z-index:5;padding:76px 128px 66px;display:flex;flex-direction:column;pointer-events:none}
/* frame chrome is click-through in its empty gaps so a full-bleed ImageSlot
 * sitting BEHIND the frame stays click-to-upload; real content re-enables. */
.ign-frame > *{pointer-events:auto}

/* utility bar */
.ign-util{display:grid;grid-template-columns:1fr auto 1fr;align-items:center}
.ign-lock{display:flex;align-items:center;gap:14px}
.ign-wm{font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:25px;letter-spacing:0.02em;white-space:nowrap}
.ign-wm em{font-family:'Newsreader','Noto Serif SC',serif;font-style:italic;font-weight:800;color:var(--ign-a)}
.ign-nav{display:flex;align-items:center;gap:30px;font-family:'Space Grotesk',sans-serif;font-size:24px;letter-spacing:0.14em;white-space:nowrap}
.ign-nav span{color:var(--ign-ink3);display:flex;align-items:center;gap:10px}
.ign-nav span.on{color:var(--ign-ink)}
.ign-nav span.on::before{content:"";width:7px;height:7px;border-radius:50%;background:var(--ign-b);box-shadow:0 0 12px var(--ign-b)}
.ign-nav i{color:var(--ign-ink4);font-style:normal}
.ign-ix{font-family:'Space Grotesk',sans-serif;font-size:24px;letter-spacing:0.24em;color:var(--ign-ink3);text-align:right;white-space:nowrap}
.ign-ix b{color:var(--ign-a);font-weight:500}

/* meta bar */
.ign-meta{display:grid;grid-template-columns:1fr auto 1fr;align-items:center;border-top:1px solid var(--ign-hair);
  padding-top:22px;font-family:'Space Grotesk',sans-serif;font-size:24px;letter-spacing:0.16em;color:var(--ign-ink3)}
.ign-meta .r{text-align:right;white-space:nowrap}
.ign-meta .mid{font-family:'Newsreader','Noto Serif SC',serif;font-style:italic;font-weight:800;color:var(--ign-ink2);letter-spacing:0.01em;white-space:nowrap}
.ign-prog{display:inline-flex;align-items:center;gap:12px;justify-content:flex-end;white-space:nowrap}
.ign-prog .track{width:120px;height:2px;background:var(--ign-hair);position:relative}
.ign-prog .fill{position:absolute;left:0;top:0;height:100%;background:linear-gradient(90deg,var(--ign-a),var(--ign-b))}

.ign-eyebrow{display:flex;align-items:center;gap:16px;font-family:'Space Grotesk',sans-serif;font-size:24px;
  letter-spacing:0.28em;text-transform:uppercase;color:var(--ign-ink2)}
.ign-eyebrow .tick{width:30px;height:1px;background:linear-gradient(90deg,var(--ign-b),transparent)}
.ign-eyebrow .no{color:var(--ign-a)}

/* image slot */
.ign-imgslot{position:relative;overflow:hidden;flex:none}
.ign-imgslot-ph{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;
  background:repeating-linear-gradient(135deg,var(--ign-panel) 0 10px,transparent 10px 20px);
  border:1px solid var(--ign-hair);border-radius:inherit}
.ign-imgslot-ph span{font-family:'Space Grotesk',sans-serif;font-size:24px;letter-spacing:0.1em;color:var(--ign-ink3)}
.ign-imgslot-up{cursor:pointer}
.ign-imgslot-hint{position:absolute;inset:0;z-index:2;display:flex;align-items:center;justify-content:center;
  opacity:0;transition:opacity .2s;pointer-events:none;background:rgba(8,5,4,0.32)}
.ign-imgslot-up:hover .ign-imgslot-hint{opacity:1}
.ign-imgslot-up.ign-imgslot-drag .ign-imgslot-hint{opacity:1}
.ign-imgslot-up.ign-imgslot-drag{outline:2px dashed var(--ign-b);outline-offset:-6px}
.ign-imgslot-up.ign-imgslot-drag .ign-imgslot-hint{background:rgba(226,42,12,0.32)}
.ign-imgslot-hint span{font-family:'Space Grotesk',sans-serif;font-size:22px;letter-spacing:0.14em;text-transform:uppercase;
  color:#F8ECE2;padding:12px 22px;border:1px solid rgba(248,236,226,0.55);backdrop-filter:blur(2px)}
@media print{.ign-imgslot-hint{display:none}}

/* dim helper for focus/emphasis mode */
.ign-dim{opacity:0.34;filter:saturate(0.5);transition:opacity .25s,filter .25s}
.ign-lit{transition:opacity .25s}

/* per-slide entrance animation. Base style is the visible end-state; we animate
 * FROM hidden only while the slide is active and motion is allowed, so print,
 * PDF export and reduced-motion always show finished content. */
@keyframes ign-rise{from{opacity:0;transform:translateY(30px)}to{opacity:1;transform:none}}
@media (prefers-reduced-motion:no-preference){
  [data-deck-active] .ign-a1{animation:ign-rise .66s cubic-bezier(.2,.7,.2,1) both}
  [data-deck-active] .ign-a2{animation:ign-rise .66s cubic-bezier(.2,.7,.2,1) .13s both}
  [data-deck-active] .ign-a3{animation:ign-rise .66s cubic-bezier(.2,.7,.2,1) .24s both}
}
`;
