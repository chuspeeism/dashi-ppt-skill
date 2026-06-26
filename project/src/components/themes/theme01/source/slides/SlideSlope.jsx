// SlideSlope.jsx — 斜率图 / slopegraph (value migration across two periods).
// Migration-safe: default export + defaultProps + controls; props-only; aip- scope.
// Two value columns (a "from" period and a "to" period); each series is a single
// straight segment connecting its two readings. The eye reads RANK CROSSINGS and
// the STEEPNESS of change at a glance — a story a grouped-bar can't tell as
// cleanly. Each end carries a labelled node + value; one series can be promoted
// to a thick fluorescent line (the rest recede to grey) to trace one move. Series
// count / highlight / value labels / Δ chips / accent are tweakable; text lives in
// defaultProps. SVG lines + HTML labels — exports cleanly to PDF / PPTX.
import React from 'react';
import { SlideFrame, SlideHead, MonoCaption, hexA } from './SlideKit.jsx';

export const defaultProps = {
  kicker: '市场全景 · 结构变迁',
  tone: 'violet',
  title: '资金版图的重新洗牌',
  en: 'Where the Money Migrated',
  cn: '各赛道大额融资额：2023 → 2024（亿美元）',
  leftLabel: '2023',
  rightLabel: '2024',
  unit: '亿',
  series: [
    { label: '通用大模型', from: 95, to: 248, color: '#5b8def' },
    { label: 'AI 基础设施 · 算力', from: 78, to: 175, color: '#46b083' },
    { label: 'AI 芯片', from: 41, to: 128, color: '#7a5ae0' },
    { label: '具身智能 · 机器人', from: 14, to: 96, color: '#e0a23a' },
    { label: '垂直应用层', from: 62, to: 70, color: '#e8503a' },
    { label: 'AI 安全与治理', from: 18, to: 54, color: '#5b8def' },
  ],
  note: '口径为公开披露的单笔 ≥1 亿美元融资合计',
  caption: '斜率图 · 大模型与算力陡升，应用层相对走平',
  // tweakable (universal names)
  itemCount: 5,
  highlight: true,
  highlightIndex: 0,
  showValues: true,
  showDelta: true,
  showGrid: true,
  accentColor: '#7a5ae0',
  showNote: true,
  showCaption: true,
};

export const controls = [
  { key: 'itemCount', label: '系列数量', type: 'number', default: 5, min: 2, max: 6, step: 1, unit: ' 条',
    description: '斜率图展示的赛道系列数量。' },
  { key: 'highlight', label: '聚焦某条', type: 'boolean', default: true,
    description: '是否点亮其中一条系列（其余淡为灰线），追踪单一迁移。' },
  { key: 'highlightIndex', label: '聚焦第几条', type: 'number', default: 0, min: 0, max: 5, step: 1,
    description: '被聚焦的系列序号（从 0 开始）。' },
  { key: 'showValues', label: '两端数值', type: 'boolean', default: true,
    description: '左右两端节点数值的显示。' },
  { key: 'showDelta', label: '变化量胶囊', type: 'boolean', default: true,
    description: '右端 Δ 增减胶囊的显示。' },
  { key: 'showGrid', label: '两端基准线', type: 'boolean', default: true,
    description: '左右两条期次基准竖线与表头的显示。' },
  { key: 'accentColor', label: '聚焦色', type: 'color', default: '#7a5ae0',
    options: ['#7a5ae0', '#5b8def', '#46b083', '#e0a23a', '#e8503a'],
    description: '被聚焦系列与标题点的颜色（不改其余系列自身配色）。' },
  { key: 'showNote', label: '口径说明', type: 'boolean', default: true,
    description: '底部口径小字说明的显示。' },
  { key: 'showCaption', label: '装饰文案', type: 'boolean', default: true,
    description: '底部 */ … /* 说明文案的显示。' },
];

export default function SlideSlope(props) {
  const p = { ...defaultProps, ...props };
  const ac = p.accentColor;
  const series = p.series.slice(0, Math.max(2, Math.min(6, p.itemCount)));
  const hiOn = p.highlight;
  const hiIdx = hiOn ? Math.min(p.highlightIndex, series.length - 1) : -1;

  const allVals = series.flatMap((s) => [s.from, s.to]);
  const maxV = Math.max.apply(null, allVals);
  const minV = Math.min.apply(null, allVals);
  const pad = (maxV - minV) * 0.12 || 1;
  const lo = minV - pad, hi = maxV + pad;
  // plot geometry (viewBox units)
  const W = 1000, H = 560, padTop = 24, padBot = 24;
  const xL = 200, xR = 740;
  const y = (v) => padTop + (1 - (v - lo) / (hi - lo)) * (H - padTop - padBot);

  return (
    <SlideFrame bg="b">
      <SlideHead kicker={p.kicker} tone={p.tone} title={p.title} en={p.en} cn={p.cn} />

      <div style={{ flex: 1, minHeight: 0, marginTop: 22, position: 'relative',
        background: 'rgba(255,255,255,.55)', backdropFilter: 'blur(28px) saturate(140%)', WebkitBackdropFilter: 'blur(28px) saturate(140%)',
        border: '1px solid rgba(255,255,255,.72)', borderRadius: 30, padding: '20px 40px 16px',
        boxShadow: '0 1px 0 rgba(255,255,255,.8) inset, 0 28px 64px rgba(70,72,100,.14)',
        display: 'flex', flexDirection: 'column' }}>

        {/* column headers */}
        {p.showGrid && (
          <div style={{ flex: '0 0 auto', position: 'relative', height: 44, padding: '0 4px 10px' }}>
            <span style={{ position: 'absolute', left: `${(xL / W) * 100}%`, transform: 'translateX(-50%)',
              fontFamily: "'Space Mono', monospace", fontSize: 32, fontWeight: 700, color: 'var(--aip-ink-2)' }}>{p.leftLabel}</span>
            <span style={{ position: 'absolute', left: `${(xR / W) * 100}%`, transform: 'translateX(-50%)',
              fontFamily: "'Space Mono', monospace", fontSize: 32, fontWeight: 700, color: 'var(--aip-ink)' }}>{p.rightLabel}</span>
          </div>
        )}

        <div style={{ flex: 1, minHeight: 0, position: 'relative' }}>
          <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
            {p.showGrid && (
              <g>
                <line x1={xL} y1={padTop - 6} x2={xL} y2={H - padBot + 6} stroke={hexA('#5a5a70', 0.22)} strokeWidth="1.5" />
                <line x1={xR} y1={padTop - 6} x2={xR} y2={H - padBot + 6} stroke={hexA('#5a5a70', 0.22)} strokeWidth="1.5" />
              </g>
            )}
            {series.map((s, i) => {
              const dim = hiIdx >= 0 && i !== hiIdx;
              const on = hiIdx >= 0 && i === hiIdx;
              const col = on ? ac : (dim ? hexA('#8d8f9c', 0.55) : s.color);
              const yF = y(s.from), yT = y(s.to);
              // Only LINES live in the stretched (preserveAspectRatio=none) SVG —
              // a stretched straight line is still straight. End-node dots are
              // drawn as real HTML circles below so they never distort to ovals.
              return (
                <g key={i}>
                  <line x1={xL} y1={yF} x2={xR} y2={yT} stroke={col} strokeWidth={on ? 7 : (dim ? 3 : 5)}
                    strokeLinecap="round" opacity={dim ? 0.85 : 1}
                    style={{ filter: on ? `drop-shadow(0 6px 14px ${hexA(ac, 0.5)})` : 'none', vectorEffect: 'non-scaling-stroke' }} />
                </g>
              );
            })}
          </svg>

          {/* HTML labels at both ends — positioned by percentage of the plot box */}
          {series.map((s, i) => {
            const dim = hiIdx >= 0 && i !== hiIdx;
            const on = hiIdx >= 0 && i === hiIdx;
            const col = on ? ac : (dim ? '#8d8f9c' : s.color);
            const pctY = (v) => (y(v) / H) * 100;
            const delta = s.to - s.from;
            const dotL = on ? 22 : (dim ? 13 : 17);
            const dotR = on ? 24 : (dim ? 13 : 18);
            return (
              <React.Fragment key={i}>
                {/* left node — real round HTML dot (never distorts) */}
                <div style={{ position: 'absolute', left: `${(xL / W) * 100}%`, top: `${pctY(s.from)}%`,
                  transform: 'translate(-50%,-50%)', width: dotL, height: dotL, borderRadius: '50%',
                  background: '#fff', border: `${on ? 5 : 3}px solid ${col}`, boxSizing: 'border-box',
                  opacity: dim ? 0.7 : 1, zIndex: 2 }} />
                {/* right node */}
                <div style={{ position: 'absolute', left: `${(xR / W) * 100}%`, top: `${pctY(s.to)}%`,
                  transform: 'translate(-50%,-50%)', width: dotR, height: dotR, borderRadius: '50%',
                  background: col, border: `${on ? 4 : 3}px solid #fff`, boxSizing: 'border-box',
                  boxShadow: on ? `0 6px 14px ${hexA(ac, 0.5)}` : 'none', opacity: dim ? 0.7 : 1, zIndex: 2 }} />
                {/* left value */}
                {p.showValues && (
                  <div style={{ position: 'absolute', right: `${100 - (xL / W) * 100}%`, top: `${pctY(s.from)}%`,
                    transform: 'translate(-22px,-50%)', textAlign: 'right', whiteSpace: 'nowrap',
                    opacity: dim ? 0.55 : 1 }}>
                    <span style={{ fontFamily: "'Space Mono', monospace", fontSize: on ? 30 : 26, fontWeight: 700, color: 'var(--aip-ink-2)' }}>{s.from}</span>
                  </div>
                )}
                {/* right label cluster */}
                <div style={{ position: 'absolute', left: `${(xR / W) * 100}%`, top: `${pctY(s.to)}%`,
                  transform: 'translate(26px,-50%)', display: 'flex', alignItems: 'center', gap: 14,
                  whiteSpace: 'nowrap', opacity: dim ? 0.5 : 1 }}>
                  {p.showValues && (
                    <span style={{ fontFamily: "'Space Mono', monospace", fontSize: on ? 34 : 28, fontWeight: 700, color: on ? ac : 'var(--aip-ink)' }}>{s.to}</span>
                  )}
                  <span style={{ fontSize: on ? 30 : 26, fontWeight: on ? 900 : 800, color: on ? 'var(--aip-ink)' : 'var(--aip-ink-2)' }}>{s.label}</span>
                  {p.showDelta && (
                    <span style={{ display: 'inline-flex', alignItems: 'baseline', gap: 1, padding: '3px 12px', borderRadius: 999,
                      fontSize: 21, fontWeight: 800, color: delta >= 0 ? '#1d8a5e' : '#c0402c',
                      background: delta >= 0 ? hexA('#46b083', 0.16) : hexA('#e8503a', 0.16) }}>
                      {delta >= 0 ? '▲' : '▼'} {Math.abs(delta)}
                    </span>
                  )}
                </div>
              </React.Fragment>
            );
          })}
        </div>

        {p.showNote && (
          <div style={{ flex: '0 0 auto', marginTop: 6, fontFamily: "'Space Mono', monospace",
            fontSize: 19, color: 'var(--aip-ink-3)' }}>{`* `}{p.note}</div>
        )}
      </div>

      <MonoCaption show={p.showCaption} style={{ marginTop: 16 }}>{p.caption}</MonoCaption>
    </SlideFrame>
  );
}
