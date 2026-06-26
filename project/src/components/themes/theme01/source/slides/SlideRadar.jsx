// SlideRadar.jsx — 能力雷达 / multi-axis radar comparing the top players.
// Migration-safe: default export + defaultProps + controls; props-only; aip- scope.
// A frosted-glass chart card holds a hand-rolled SVG radar (concentric guide
// rings + spokes, one translucent polygon per series, vertex dots) next to a
// legend + per-axis "who leads" readout. Axis count, series count, highlighted
// series, ring fill and accent palette are tweakable; all text lives in
// defaultProps. No recharts — pure SVG so it exports cleanly to PDF/PPTX.
import React from 'react';
import { SlideFrame, SlideHead, MonoCaption, hexA } from './SlideKit.jsx';

export const defaultProps = {
  kicker: '典型案例 · 三强横评',
  tone: 'violet',
  title: '三强能力雷达',
  en: 'Capability Radar · Big Three',
  cn: '六个维度，一眼看清各自的长板与短板',
  // axes share one 0–100 normalized scale (relative positioning, not absolute $)
  axes: ['估值规模', '年度收入', '算力储备', '模型能力', '融资能力', '人才密度'],
  series: [
    { name: 'OpenAI', color: '#5b8def', values: [100, 100, 86, 96, 95, 98] },
    { name: 'Anthropic', color: '#46b083', values: [72, 64, 70, 92, 86, 90] },
    { name: 'xAI', color: '#e0a23a', values: [76, 30, 92, 80, 82, 70] },
    { name: 'CoreWeave', color: '#e8503a', values: [58, 72, 100, 62, 78, 66] },
  ],
  leadLabel: '维度领先',
  scaleNote: '0–100 相对分 · 非绝对金额',
  caption: '雷达图 · OpenAI 全维领跑，Anthropic 胜在模型，xAI 强于算力',
  // tweakable (universal names)
  itemCount: 3,
  axisCount: 6,
  highlight: true,
  highlightIndex: 0,
  showRings: true,
  showDots: true,
  showLead: true,
  fillOpacity: 18,
  accentColor: '#7a5ae0',
  showCaption: true,
};

export const controls = [
  { key: 'itemCount', label: '对比对象数', type: 'number', default: 3, min: 2, max: 4, step: 1, unit: ' 个',
    description: '同时叠加在雷达上的系列数量。' },
  { key: 'axisCount', label: '维度数量', type: 'number', default: 6, min: 4, max: 6, step: 1, unit: ' 维',
    description: '雷达的轴（评估维度）数量。' },
  { key: 'highlight', label: '高亮系列', type: 'boolean', default: true,
    description: '是否突出其中一个系列（加粗描边 + 提亮，其余淡化）。' },
  { key: 'highlightIndex', label: '高亮第几个', type: 'number', default: 0, min: 0, max: 3, step: 1,
    description: '被高亮的系列序号（从 0 开始）。' },
  { key: 'showRings', label: '刻度环', type: 'boolean', default: true,
    description: '同心刻度参考环与轴线的显示。' },
  { key: 'showDots', label: '顶点圆点', type: 'boolean', default: true,
    description: '每个系列在各轴上的顶点圆点。' },
  { key: 'showLead', label: '领先读数', type: 'boolean', default: true,
    description: '右侧「维度领先」逐项对照表的显示。' },
  { key: 'fillOpacity', label: '填充浓度', type: 'number', default: 18, min: 6, max: 34, step: 2, unit: ' %',
    description: '系列多边形的半透明填充浓度。' },
  { key: 'accentColor', label: '主题色', type: 'color', default: '#7a5ae0',
    options: ['#7a5ae0', '#5b8def', '#46b083', '#e0a23a', '#e8503a'],
    description: '卡片标题点 / 刻度强调的主题色（不改系列自身配色）。' },
  { key: 'showCaption', label: '装饰文案', type: 'boolean', default: true,
    description: '底部 */ … /* 说明文案的显示。' },
];

export default function SlideRadar(props) {
  const p = { ...defaultProps, ...props };
  const nA = Math.max(4, Math.min(6, p.axisCount));
  const nS = Math.max(2, Math.min(4, p.itemCount));
  const axes = p.axes.slice(0, nA);
  const series = p.series.slice(0, nS);

  const VB = 600, cx = VB / 2, cy = VB / 2, R = 226;
  const rings = [0.25, 0.5, 0.75, 1];
  // axis i angle: start at top (−90°), clockwise
  const ang = (i) => (-Math.PI / 2) + (i * 2 * Math.PI) / nA;
  const pt = (i, r) => [cx + r * Math.cos(ang(i)), cy + r * Math.sin(ang(i))];
  const scoreAt = (s, i) => Math.max(0, Math.min(100, Number(s?.values?.[i]) || 0));
  const polyFor = (vals) =>
    axes.map((_, i) => pt(i, (Math.max(0, Math.min(100, Number(vals?.[i]) || 0)) / 100) * R).join(',')).join(' ');

  const hiIdx = p.highlight ? Math.min(p.highlightIndex, nS - 1) : -1;

  // per-axis leader
  const leaders = axes.map((ax, i) => {
    let best = 0;
    series.forEach((s, si) => { if (scoreAt(s, i) > scoreAt(series[best], i)) best = si; });
    return { axis: ax, who: series[best], val: scoreAt(series[best], i) };
  });

  return (
    <SlideFrame bg="a">
      <SlideHead kicker={p.kicker} tone={p.tone} title={p.title} en={p.en} cn={p.cn} />

      <div style={{ flex: 1, minHeight: 0, marginTop: 22, display: 'flex',
        background: 'rgba(255,255,255,.55)', backdropFilter: 'blur(28px) saturate(140%)', WebkitBackdropFilter: 'blur(28px) saturate(140%)',
        border: '1px solid rgba(255,255,255,.72)', borderRadius: 30, padding: '34px 46px 30px',
        boxShadow: '0 1px 0 rgba(255,255,255,.8) inset, 0 28px 64px rgba(70,72,100,.14)', gap: 48 }}>

        {/* ── radar ── */}
        <div style={{ flex: '0 0 56%', position: 'relative', minWidth: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg viewBox={`0 0 ${VB} ${VB}`} style={{ width: '100%', height: '100%', maxHeight: 620, overflow: 'visible' }}>
            {/* guide rings + spokes */}
            {p.showRings && (
              <g>
                {rings.map((rr, ri) => (
                  <polygon key={ri}
                    points={axes.map((_, i) => pt(i, rr * R).join(',')).join(' ')}
                    fill={ri === rings.length - 1 ? 'rgba(255,255,255,.30)' : 'none'}
                    stroke={hexA('#5a5a70', ri === rings.length - 1 ? 0.34 : 0.18)}
                    strokeWidth={ri === rings.length - 1 ? 2 : 1.4} />
                ))}
                {axes.map((_, i) => {
                  const [x, y] = pt(i, R);
                  return <line key={i} x1={cx} y1={cy} x2={x} y2={y} stroke={hexA('#5a5a70', 0.2)} strokeWidth="1.4" />;
                })}
                {/* ring scale tick (25/50/75/100) along the top spoke */}
                {rings.map((rr, ri) => {
                  const [, y] = pt(0, rr * R);
                  return (
                    <text key={ri} x={cx + 9} y={y + 7} fontFamily="'Space Mono', monospace"
                      fontSize="17" fill={hexA('#5a5a70', 0.5)}>{rr * 100}</text>
                  );
                })}
              </g>
            )}

            {/* series polygons — non-highlighted first, highlighted on top */}
            {series.map((s, si) => {
              if (si === hiIdx) return null;
              const dim = hiIdx >= 0;
              return (
                <g key={si}>
                  <polygon points={polyFor(s.values)} fill={hexA(s.color, (p.fillOpacity / 100) * (dim ? 0.6 : 1))}
                    stroke={s.color} strokeWidth={dim ? 2.4 : 3} strokeLinejoin="round" opacity={dim ? 0.7 : 1} />
                  {p.showDots && axes.map((_, i) => {
                    const [x, y] = pt(i, (scoreAt(s, i) / 100) * R);
                    return <circle key={i} cx={x} cy={y} r={dim ? 4.5 : 5.5} fill="#fff" stroke={s.color} strokeWidth="2.6" opacity={dim ? 0.7 : 1} />;
                  })}
                </g>
              );
            })}
            {hiIdx >= 0 && (() => {
              const s = series[hiIdx];
              return (
                <g>
                  <polygon points={polyFor(s.values)} fill={hexA(s.color, (p.fillOpacity / 100) + 0.1)}
                    stroke={s.color} strokeWidth="4.5" strokeLinejoin="round"
                    style={{ filter: `drop-shadow(0 8px 22px ${hexA(s.color, 0.4)})` }} />
                  {p.showDots && axes.map((_, i) => {
                    const [x, y] = pt(i, (scoreAt(s, i) / 100) * R);
                    return <circle key={i} cx={x} cy={y} r="7" fill={s.color} stroke="#fff" strokeWidth="3" />;
                  })}
                </g>
              );
            })()}

            {/* axis labels */}
            {axes.map((ax, i) => {
              const [x, y] = pt(i, R + 34);
              const a = ang(i);
              const anchor = Math.abs(Math.cos(a)) < 0.3 ? 'middle' : (Math.cos(a) > 0 ? 'start' : 'end');
              return (
                <text key={i} x={x} y={y + 6} textAnchor={anchor}
                  fontFamily="'Noto Sans SC', system-ui, sans-serif" fontWeight="900"
                  fontSize="26" fill="#2b2b30">{ax}</text>
              );
            })}
          </svg>
        </div>

        {/* ── legend + readout ── */}
        <div style={{ flex: 1, minWidth: 0, minHeight: 0, display: 'flex', flexDirection: 'column' }}>
          <div style={{ flex: '0 0 auto', display: 'flex', flexDirection: 'column', gap: 12 }}>
            {series.map((s, si) => {
              const on = si === hiIdx;
              const sum = axes.reduce((a, _, i) => a + scoreAt(s, i), 0);
              const avg = Math.round(sum / nA);
              return (
                <div key={si} style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '11px 20px', borderRadius: 16,
                  background: on ? hexA(s.color, 0.12) : 'rgba(255,255,255,.5)',
                  border: `1.5px solid ${on ? hexA(s.color, 0.5) : 'rgba(255,255,255,.7)'}`,
                  boxShadow: on ? `0 10px 26px ${hexA(s.color, 0.2)}` : '0 6px 16px rgba(70,72,100,.08)' }}>
                  <span style={{ flex: '0 0 auto', width: 18, height: 18, borderRadius: 6, background: s.color,
                    boxShadow: on ? `0 0 14px ${hexA(s.color, 0.7)}` : 'none' }} />
                  <span style={{ flex: 1, fontSize: 30, fontWeight: 900, color: 'var(--aip-ink)' }}>{s.name}</span>
                  <span style={{ display: 'flex', alignItems: 'baseline', gap: 4 }}>
                    <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 34, fontWeight: 700, color: s.color, letterSpacing: '-.02em' }}>{avg}</span>
                    <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 20, color: 'var(--aip-ink-3)' }}>均分</span>
                  </span>
                </div>
              );
            })}
          </div>

          {p.showLead && (
            <div style={{ flex: 1, minHeight: 0, marginTop: 16, display: 'flex', flexDirection: 'column' }}>
              <div style={{ flex: '0 0 auto', fontFamily: "'Space Mono', monospace", fontSize: 21, letterSpacing: '.12em',
                textTransform: 'uppercase', color: hexA(p.accentColor, 0.95), fontWeight: 700, marginBottom: 2 }}>
                {`// `}{p.leadLabel}
              </div>
              <div style={{ flex: 1, minHeight: 0, display: 'flex', flexDirection: 'column' }}>
                {leaders.map((ld, i) => (
                  <div key={i} style={{ flex: 1, minHeight: 0, display: 'flex', alignItems: 'center', gap: 14,
                    borderTop: i === 0 ? 'none' : '1px solid rgba(43,43,48,.12)' }}>
                    <span style={{ flex: 1, fontSize: 24, fontWeight: 700, color: 'var(--aip-ink-2)' }}>{ld.axis}</span>
                    <span style={{ width: 11, height: 11, borderRadius: 4, background: ld.who.color }} />
                    <span style={{ flex: '0 0 auto', width: 152, fontSize: 24, fontWeight: 900, color: 'var(--aip-ink)' }}>{ld.who.name}</span>
                    <span style={{ flex: '0 0 auto', width: 52, textAlign: 'right', fontFamily: "'Space Mono', monospace",
                      fontSize: 24, fontWeight: 700, color: ld.who.color }}>{ld.val}</span>
                  </div>
                ))}
              </div>
              <div style={{ flex: '0 0 auto', marginTop: 4, fontFamily: "'Space Mono', monospace", fontSize: 17, color: 'var(--aip-ink-3)' }}>
                {`* `}{p.scaleNote}
              </div>
            </div>
          )}
        </div>
      </div>

      <MonoCaption show={p.showCaption} style={{ marginTop: 14 }}>{p.caption}</MonoCaption>
    </SlideFrame>
  );
}
