// SlideStackedBars.jsx — 构成演变 / 100% stacked bars over time.
// Migration-safe: default export + defaultProps + controls; props-only; aip- scope.
// One full-width bar per period, each split into segment shares that always sum
// to 100% — so the eye reads how the MIX shifts year over year (a story neither
// a line nor a single-bar chart tells). A frosted card frames the stack with a
// top legend; one segment can be spotlighted across every bar (the rest dim) to
// trace a single trend. Period count, segment count, spotlight, in-bar values
// and accent are tweakable; text lives in defaultProps. Pure CSS flex — exports
// cleanly to PDF / PPTX.
import React from 'react';
import { SlideFrame, SlideHead, MonoCaption, hexA } from './SlideKit.jsx';

export const defaultProps = {
  kicker: '市场全景 · 结构变迁',
  tone: 'green',
  title: '资金流向的此消彼长',
  en: 'How the Mix Shifted',
  cn: '把每年大额融资归一为 100%，看构成如何演变',
  segments: [
    { label: '通用大模型', color: '#5b8def' },
    { label: 'AI 基础设施 · 算力', color: '#46b083' },
    { label: '垂直应用层', color: '#e0a23a' },
    { label: '其他', color: '#9aa0ad' },
  ],
  // rows: each period's shares, aligned to `segments` order (auto-normalized to 100).
  rows: [
    { period: '2021', shares: [30, 20, 35, 15] },
    { period: '2022', shares: [38, 22, 28, 12] },
    { period: '2023', shares: [44, 26, 22, 8] },
    { period: '2024', shares: [48, 28, 18, 6] },
    { period: '2025', shares: [50, 30, 15, 5] },
  ],
  note: '占比按当年大额融资金额归一计算',
  caption: '堆叠图 · 大模型与算力持续扩张，应用层占比逐年收缩',
  // tweakable (universal names)
  itemCount: 4,
  segmentCount: 4,
  highlight: true,
  highlightIndex: 0,
  showValues: true,
  showLegend: true,
  showNote: true,
  accentColor: '#46b083',
  showCaption: true,
};

export const controls = [
  { key: 'itemCount', label: '时间条数', type: 'number', default: 4, min: 2, max: 5, step: 1, unit: ' 条',
    description: '展示的时间周期（堆叠条）数量。' },
  { key: 'segmentCount', label: '分段数量', type: 'number', default: 4, min: 2, max: 4, step: 1, unit: ' 段',
    description: '每条堆叠的分段（类别）数量。' },
  { key: 'highlight', label: '聚焦某段', type: 'boolean', default: true,
    description: '是否在所有条上点亮同一分段（其余淡化），追踪单一趋势。' },
  { key: 'highlightIndex', label: '聚焦第几段', type: 'number', default: 0, min: 0, max: 3, step: 1,
    description: '被聚焦的分段序号（从 0 开始）。' },
  { key: 'showValues', label: '段内数值', type: 'boolean', default: true,
    description: '各分段内百分比数值的显示（过窄的段自动隐藏）。' },
  { key: 'showLegend', label: '顶部图例', type: 'boolean', default: true,
    description: '顶部分段图例的显示。' },
  { key: 'showNote', label: '口径说明', type: 'boolean', default: true,
    description: '底部口径小字说明的显示。' },
  { key: 'accentColor', label: '主题色', type: 'color', default: '#46b083',
    options: ['#46b083', '#5b8def', '#e0a23a', '#e8503a', '#7a5ae0'],
    description: '标题点的主题色（不改各分段自身配色）。' },
  { key: 'showCaption', label: '装饰文案', type: 'boolean', default: true,
    description: '底部 */ … /* 说明文案的显示。' },
];

function readableOn(hex) {
  const h = String(hex).replace('#', '');
  const x = h.length === 3 ? h.replace(/./g, (c) => c + c) : h;
  const n = parseInt(x, 16);
  const lum = (0.299 * ((n >> 16) & 255) + 0.587 * ((n >> 8) & 255) + 0.114 * (n & 255)) / 255;
  return lum > 0.6 ? '#23232a' : '#ffffff';
}

export default function SlideStackedBars(props) {
  const p = { ...defaultProps, ...props };
  const ac = p.accentColor;
  const nSeg = Math.max(2, Math.min(4, p.segmentCount));
  const nRow = Math.max(2, Math.min(5, p.itemCount));
  const segs = p.segments.slice(0, nSeg);
  const rows = p.rows.slice(0, nRow);
  const hiIdx = p.highlight ? Math.min(p.highlightIndex, nSeg - 1) : -1;

  return (
    <SlideFrame bg="a">
      <SlideHead kicker={p.kicker} tone={p.tone} title={p.title} en={p.en} cn={p.cn} />

      <div style={{ flex: 1, minHeight: 0, marginTop: 22, display: 'flex', flexDirection: 'column',
        position: 'relative',
        background: 'rgba(255,255,255,.55)', backdropFilter: 'blur(28px) saturate(140%)', WebkitBackdropFilter: 'blur(28px) saturate(140%)',
        border: `1.5px solid ${hexA(ac, 0.38)}`, borderRadius: 30, padding: '30px 44px 26px',
        boxShadow: `0 1px 0 rgba(255,255,255,.8) inset, 0 28px 64px rgba(70,72,100,.14), 0 0 0 5px ${hexA(ac, 0.08)}` }}>
        <span style={{ position: 'absolute', left: 22, top: 32, bottom: 30, width: 5, borderRadius: 999,
          background: `linear-gradient(180deg, ${hexA(ac, 0.25)}, ${ac}, ${hexA(ac, 0.25)})`,
          boxShadow: `0 0 18px ${hexA(ac, 0.38)}` }} />

        {/* legend */}
        {p.showLegend && (
          <div style={{ flex: '0 0 auto', display: 'flex', gap: 32, flexWrap: 'wrap', marginBottom: 22 }}>
            {segs.map((s, i) => {
              const dim = hiIdx >= 0 && i !== hiIdx;
              return (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, opacity: dim ? 0.4 : 1 }}>
                  <span style={{ width: 22, height: 22, borderRadius: 7, background: s.color,
                    boxShadow: `0 3px 10px ${hexA(s.color, 0.4)}` }} />
                  <span style={{ fontSize: 27, fontWeight: 800, color: 'var(--aip-ink)', whiteSpace: 'nowrap' }}>{s.label}</span>
                </div>
              );
            })}
          </div>
        )}

        {/* bars */}
        <div style={{ flex: 1, minHeight: 0, display: 'flex', flexDirection: 'column', gap: 20 }}>
          {rows.map((row, ri) => {
            const shares = segs.map((_, i) => Math.max(0, row.shares[i] || 0));
            const total = shares.reduce((a, b) => a + b, 0) || 1;
            return (
              <div key={ri} style={{ flex: 1, minHeight: 0, display: 'flex', alignItems: 'center', gap: 28 }}>
                {/* period label */}
                <div style={{ flex: '0 0 130px', fontFamily: "'Space Mono', monospace", fontSize: 44, fontWeight: 700,
                  color: ac, letterSpacing: '-.01em', textShadow: `0 5px 18px ${hexA(ac, 0.22)}` }}>{row.period}</div>

                {/* stacked track */}
                <div style={{ flex: 1, minWidth: 0, height: '74%', display: 'flex', borderRadius: 16, overflow: 'hidden',
                  boxShadow: '0 10px 26px rgba(70,72,100,.16), 0 1px 0 rgba(255,255,255,.5) inset' }}>
                  {segs.map((s, i) => {
                    const pct = (shares[i] / total) * 100;
                    if (pct <= 0) return null;
                    const dim = hiIdx >= 0 && i !== hiIdx;
                    const on = hiIdx >= 0 && i === hiIdx;
                    const fg = readableOn(s.color);
                    return (
                      <div key={i} style={{ width: `${pct}%`, height: '100%', position: 'relative',
                        background: dim ? hexA(s.color, 0.3) : s.color,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        borderRight: i < nSeg - 1 ? '2px solid rgba(255,255,255,.55)' : 'none',
                        boxShadow: on ? `0 0 0 3px ${hexA(s.color, 0.55)} inset` : 'none',
                        transition: 'none' }}>
                        {p.showValues && pct >= 9 && (
                          <span style={{ display: 'inline-flex', alignItems: 'baseline', gap: 1,
                            fontWeight: 900, color: dim ? hexA(fg, 0.85) : fg,
                            textShadow: '0 1px 4px rgba(0,0,0,.16)' }}>
                            <span style={{ fontSize: on ? 40 : 34 }}>{Math.round(pct)}</span>
                            <span style={{ fontSize: on ? 24 : 20 }}>%</span>
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {p.showNote && (
          <div style={{ flex: '0 0 auto', marginTop: 14, fontFamily: "'Space Mono', monospace",
            fontSize: 19, color: 'var(--aip-ink-3)' }}><span style={{ color: ac, fontWeight: 700 }}>{`* `}</span>{p.note}</div>
        )}
      </div>

      <MonoCaption show={p.showCaption} style={{ marginTop: 14 }}>{p.caption}</MonoCaption>
    </SlideFrame>
  );
}
