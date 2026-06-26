// SlideArcGauges.jsx — 环形仪表 / a row of 270° arc gauges for key ratios.
// Migration-safe: default export + defaultProps + controls; props-only; aip- scope.
// A frosted card holds 2–4 gauges; each is a hand-rolled SVG 270° arc (faint
// track + value arc, rounded caps) wrapped around an oversized center percentage
// with a label and sub-line. One gauge can be promoted to a glowing accent (the
// rest soften), spotlighting a single headline ratio. Gauge count, highlight,
// arc thickness, track and accent are tweakable; text lives in defaultProps.
// Pure SVG — exports cleanly to PDF / PPTX, no chart library.
import React from 'react';
import { SlideFrame, SlideHead, MonoCaption, hexA } from './SlideKit.jsx';

export const defaultProps = {
  kicker: '横向透视 · 关键比率',
  tone: 'blue',
  title: '关键比率，看清资本格局',
  en: 'Key Ratios at a Glance',
  cn: '集中度、赛道与地理，一组环形仪表读懂结构',
  gauges: [
    { value: 78, label: '资金集中度', sub: 'Top 10 占全年融资', color: '#5b8def' },
    { value: 45, label: '大模型占比', sub: '通用大模型 / 全赛道', color: '#46b083' },
    { value: 64, label: '地理集中', sub: '旧金山湾区占比', color: '#e0a23a' },
    { value: 33, label: 'AI 渗透率', sub: 'AI 占全美 VC 投资', color: '#e8503a' },
  ],
  unit: '%',
  caption: '环形仪表 · 资金高度集中，结构性特征鲜明',
  // tweakable (universal names)
  itemCount: 3,
  highlight: true,
  highlightIndex: 0,
  showTrack: true,
  arcWidth: 24,
  accentColor: '#5b8def',
  showCaption: true,
};

export const controls = [
  { key: 'itemCount', label: '仪表数量', type: 'number', default: 3, min: 2, max: 4, step: 1, unit: ' 个',
    description: '一行并排的环形仪表数量。' },
  { key: 'highlight', label: '重点强调', type: 'boolean', default: true,
    description: '是否把其中一个仪表渲染成发光强调款（其余柔化）。' },
  { key: 'highlightIndex', label: '强调第几个', type: 'number', default: 0, min: 0, max: 3, step: 1,
    description: '被强调的仪表序号（从 0 开始）。' },
  { key: 'showTrack', label: '底环轨道', type: 'boolean', default: true,
    description: '环形底部灰色轨道的显示。' },
  { key: 'arcWidth', label: '环线粗细', type: 'number', default: 24, min: 14, max: 34, step: 2, unit: ' px',
    description: '仪表环线的粗细。' },
  { key: 'accentColor', label: '主题色', type: 'color', default: '#5b8def',
    options: ['#5b8def', '#46b083', '#e0a23a', '#e8503a', '#7a5ae0'],
    description: '标题点与强调发光的主题色（不改各仪表自身配色）。' },
  { key: 'showCaption', label: '装饰文案', type: 'boolean', default: true,
    description: '底部 */ … /* 说明文案的显示。' },
];

const SWEEP = 270;            // total gauge sweep, gap centered at the bottom
const START = 225;            // start angle (deg, 0 = top, clockwise)
function polar(cx, cy, r, deg) {
  const a = ((deg - 90) * Math.PI) / 180;
  return [cx + r * Math.cos(a), cy + r * Math.sin(a)];
}
function arc(cx, cy, r, a0, a1) {
  const [x1, y1] = polar(cx, cy, r, a0);
  const [x2, y2] = polar(cx, cy, r, a1);
  const large = a1 - a0 > 180 ? 1 : 0;
  return `M ${x1} ${y1} A ${r} ${r} 0 ${large} 1 ${x2} ${y2}`;
}

function Gauge({ g, on, dim, unit, arcWidth, showTrack, accent }) {
  const VB = 240, cx = VB / 2, cy = VB / 2;
  const r = (VB - arcWidth) / 2 - 8;
  const f = Math.max(0, Math.min(100, g.value)) / 100;
  const col = g.color;
  return (
    <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', opacity: dim ? 0.62 : 1 }}>
      <div style={{ position: 'relative', width: '100%', maxWidth: 320 }}>
        {on && (
          <span style={{ position: 'absolute', inset: 0, borderRadius: '50%',
            background: `radial-gradient(circle, ${hexA(accent, 0.14)} 0%, ${hexA(accent, 0.08)} 42%, transparent 68%)`,
            filter: 'blur(2px)' }} />
        )}
        <svg viewBox={`0 0 ${VB} ${VB}`} style={{ width: '100%', height: 'auto', overflow: 'visible' }}>
          {showTrack && (
            <path d={arc(cx, cy, r, START, START + SWEEP)} fill="none"
              stroke={hexA('#5a5a70', 0.14)} strokeWidth={arcWidth} strokeLinecap="round" />
          )}
          {on && (
            <path d={arc(cx, cy, r + arcWidth * 0.62, START, START + SWEEP)} fill="none"
              stroke={hexA(accent, 0.42)} strokeWidth="4" strokeLinecap="round"
              style={{ filter: `drop-shadow(0 4px 16px ${hexA(accent, 0.5)})` }} />
          )}
          <path d={arc(cx, cy, r, START, START + SWEEP * f)} fill="none"
            stroke={col} strokeWidth={on ? arcWidth + 4 : arcWidth} strokeLinecap="round"
            style={on ? { filter: `drop-shadow(0 4px 16px ${hexA(accent, 0.5)})` } : undefined} />
          {/* center readout — 数字与单位同一行 */}
          <text x={cx} y={cy + 24} textAnchor="middle"
            fontFamily="'Space Mono', monospace" fontWeight="700" fontSize="70"
            fill="var(--aip-ink)" letterSpacing="-.02em">{g.value}<tspan fontSize="34" fill={col} dx="3">{unit}</tspan></text>
        </svg>
      </div>
      <div style={{ marginTop: 6, fontSize: 36, fontWeight: 900, color: 'var(--aip-ink)', textAlign: 'center', whiteSpace: 'nowrap',
        padding: on ? '2px 14px 4px' : 0, borderRadius: 12,
        background: on ? hexA(accent, 0.12) : 'transparent',
        boxShadow: on ? `0 8px 20px ${hexA(accent, 0.18)}` : 'none' }}>{g.label}</div>
      <div style={{ marginTop: 4, fontSize: 24, fontWeight: 500, color: 'var(--aip-ink-2)', textAlign: 'center' }}>{g.sub}</div>
    </div>
  );
}

export default function SlideArcGauges(props) {
  const p = { ...defaultProps, ...props };
  const ac = p.accentColor;
  const gauges = p.gauges.slice(0, Math.max(2, Math.min(4, p.itemCount)));
  const hiIdx = p.highlight ? Math.min(p.highlightIndex, gauges.length - 1) : -1;

  return (
    <SlideFrame bg="a">
      <SlideHead kicker={p.kicker} tone={p.tone} title={p.title} en={p.en} cn={p.cn} />

      <div style={{ flex: 1, minHeight: 0, marginTop: 22, display: 'flex', alignItems: 'center', gap: 28, position: 'relative',
        background: 'rgba(255,255,255,.55)', backdropFilter: 'blur(28px) saturate(140%)', WebkitBackdropFilter: 'blur(28px) saturate(140%)',
        border: `1.5px solid ${hexA(ac, 0.38)}`, borderRadius: 30, padding: '20px 48px',
        boxShadow: `0 1px 0 rgba(255,255,255,.8) inset, 0 28px 64px rgba(70,72,100,.14), 0 0 0 5px ${hexA(ac, 0.08)}` }}>
        <span style={{ position: 'absolute', left: 28, right: 28, top: 18, height: 5, borderRadius: 999,
          background: `linear-gradient(90deg, transparent, ${hexA(ac, 0.72)}, transparent)`,
          boxShadow: `0 0 18px ${hexA(ac, 0.35)}` }} />
        {gauges.map((g, i) => (
          <React.Fragment key={i}>
            {i > 0 && <div style={{ flex: '0 0 auto', alignSelf: 'stretch', width: 1, margin: '40px 0',
              background: `linear-gradient(180deg, transparent, ${hexA(ac, 0.32)}, transparent)` }} />}
            <Gauge g={g} on={i === hiIdx} dim={hiIdx >= 0 && i !== hiIdx} unit={p.unit}
              arcWidth={p.arcWidth} showTrack={p.showTrack} accent={p.accentColor} />
          </React.Fragment>
        ))}
      </div>

      <MonoCaption show={p.showCaption} style={{ marginTop: 14 }}>{p.caption}</MonoCaption>
    </SlideFrame>
  );
}
