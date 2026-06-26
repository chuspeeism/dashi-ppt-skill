// SlideTreemap.jsx — 矩形树图 / squarified treemap chart.
// Migration-safe: default export + defaultProps + controls; props-only; aip- scope.
// Area encodes value (融资额); tiles are colored "stamp" blocks with one promoted
// to a fluorescent focus. A self-contained squarified layout keeps aspect ratios
// handsome for any 2–6 items. Visual base follows the glass/bokeh + label system.
import React from 'react';
import { SlideFrame, SlideHead, MonoCaption, hexA } from './SlideKit.jsx';

export const defaultProps = {
  kicker: '# 横向透视',
  title: '赛道资金 · 矩形树图',
  en: 'Funding by Sector — Treemap',
  cn: '',
  items: [
    { label: '通用大模型', en: 'Foundation Model', v: 420, amount: '420 亿', color: '#5b8def' },
    { label: '垂直应用', en: 'Vertical AI', v: 245, amount: '245 亿', color: '#46b083' },
    { label: 'AI 基础设施', en: 'Infrastructure', v: 158, amount: '158 亿', color: '#e0a23a' },
    { label: 'AI 芯片', en: 'Hardware', v: 97, amount: '97 亿', color: '#e8503a' },
    { label: '其他 · 工具链/安全', en: 'Others', v: 50, amount: '50 亿', color: '#7a5ae0' },
  ],
  caption: '矩形树图 · 通用大模型独占近半壁江山',
  // tweakable (universal names)
  itemCount: 5,
  highlight: true,
  highlightIndex: 0,
  showPercent: true,
  showAmount: true,
  showCaption: true,
};

export const controls = [
  { key: 'itemCount', label: '板块数量', type: 'number', default: 5, min: 2, max: 6, step: 1, unit: ' 块',
    description: '参与树图的板块数量；布局会按数量自动平铺，2–6 块都保持美观。' },
  { key: 'highlight', label: '重点强调', type: 'boolean', default: true,
    description: '是否强调其中一个板块（上浮 + 阴影，其余板块转为浅色）。' },
  { key: 'highlightIndex', label: '强调第几个', type: 'number', default: 0, min: 0, max: 4, step: 1,
    description: '被强调的板块序号（从 0 开始，按原始数据顺序）。' },
  { key: 'showPercent', label: '占比数字', type: 'boolean', default: true,
    description: '是否在板块中显示百分比。' },
  { key: 'showAmount', label: '金额标注', type: 'boolean', default: true,
    description: '是否在板块中显示金额。' },
  { key: 'showCaption', label: '装饰文案', type: 'boolean', default: true,
    description: '底部 */ … /* 说明文案的显示。' },
];

function readableOn(hex) {
  const h = String(hex).replace('#', '');
  const x = h.length === 3 ? h.replace(/./g, (c) => c + c) : h;
  const n = parseInt(x, 16);
  const lum = (0.299 * ((n >> 16) & 255) + 0.587 * ((n >> 8) & 255) + 0.114 * (n & 255)) / 255;
  return lum > 0.62 ? '#23232a' : '#ffffff';
}
const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));

// Squarified treemap (Bruls, Huizing & van Wijk). Returns rects in pixel space.
function squarify(data, X0, Y0, W0, H0) {
  const total = data.reduce((a, b) => a + b.v, 0) || 1;
  let X = X0, Y = Y0, W = W0, H = H0;
  const nodes = data.map((d) => ({ d, area: (d.v / total) * (W0 * H0) }));
  const out = [];
  const sum = (r) => r.reduce((a, b) => a + b.area, 0);
  const worst = (r, side) => {
    const s = sum(r), mx = Math.max(...r.map((x) => x.area)), mn = Math.min(...r.map((x) => x.area));
    return Math.max((side * side * mx) / (s * s), (s * s) / (side * side * mn));
  };
  const flush = (r) => {
    const s = sum(r);
    if (W <= H) { const rh = s / W; let xx = X; for (const n of r) { const ww = n.area / rh; out.push({ ...n, x: xx, y: Y, w: ww, h: rh }); xx += ww; } Y += rh; H -= rh; }
    else { const cw = s / H; let yy = Y; for (const n of r) { const hh = n.area / cw; out.push({ ...n, x: X, y: yy, w: cw, h: hh }); yy += hh; } X += cw; W -= cw; }
  };
  let row = [];
  for (let i = 0; i < nodes.length;) {
    const side = Math.min(W, H), n = nodes[i];
    if (row.length === 0) { row = [n]; i++; continue; }
    if (worst(row, side) >= worst(row.concat(n), side)) { row = row.concat(n); i++; }
    else { flush(row); row = []; }
  }
  if (row.length) flush(row);
  return out;
}

const BOX_W = 1704, BOX_H = 612, GAP = 7;

export default function SlideTreemap(props) {
  const p = { ...defaultProps, ...props };
  const items = p.items.slice(0, Math.max(2, Math.min(6, p.itemCount)));
  const total = items.reduce((a, b) => a + b.v, 0) || 1;
  const rects = squarify(items, 0, 0, BOX_W, BOX_H);

  return (
    <SlideFrame bg="b">
      <SlideHead kicker={p.kicker} tone="blue" title={p.title} en={p.en} cn={p.cn} />

      <div style={{ flex: 1, display: 'flex', alignItems: 'center', minHeight: 0, marginTop: 14 }}>
        <div style={{ position: 'relative', width: '100%', height: BOX_H }}>
          {rects.map((r, ri) => {
            const it = r.d;
            const origIdx = items.indexOf(it);
            const on = p.highlight && origIdx === p.highlightIndex;
            const pct = ((it.v / total) * 100).toFixed(1);
            const fg = readableOn(it.color);
            const minDim = Math.min(r.w, r.h);
            const pctFs = clamp(minDim * 0.3, 30, 86);
            const nameFs = clamp(minDim * 0.13, 23, 38);
            const small = minDim < 220;
            // Emphasis = lift + shadow on its OWN color (no stroke); the rest fall
            // back to a pale tint of their own color so the focus reads clearly.
            const inkOn = fg === '#ffffff' ? '#ffffff' : '#23232a';
            const nameColor = on ? fg : 'var(--aip-ink)';
            const enColor = on ? hexA(inkOn, 0.7) : hexA(it.color, 0.7);
            const pctColor = on ? fg : it.color;
            const amtColor = on ? hexA(inkOn, 0.82) : 'var(--aip-ink-2)';
            return (
              <div key={ri} style={{
                position: 'absolute', left: r.x + GAP / 2, top: r.y + GAP / 2,
                width: r.w - GAP, height: r.h - GAP, borderRadius: 18, overflow: 'hidden',
                padding: small ? '18px 20px' : '26px 28px', display: 'flex', flexDirection: 'column',
                justifyContent: 'space-between',
                background: on
                  ? `linear-gradient(150deg, ${it.color}, ${hexA(it.color, 0.86)})`
                  : `linear-gradient(150deg, ${hexA(it.color, 0.20)}, ${hexA(it.color, 0.09)})`,
                transform: on ? 'translateY(-12px)' : 'none', zIndex: on ? 3 : 1,
                border: `1px solid ${on ? 'rgba(255,255,255,.32)' : hexA(it.color, 0.28)}`,
                boxShadow: on
                  ? `0 36px 72px ${hexA(it.color, 0.52)}, 0 2px 0 rgba(255,255,255,.4) inset`
                  : 'none',
                transition: 'transform .3s ease, box-shadow .3s ease',
              }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, flexWrap: 'wrap' }}>
                  <span style={{ fontSize: nameFs, fontWeight: 900, lineHeight: 1.05, textWrap: 'pretty', color: nameColor }}>{it.label}</span>
                  {!small && <span style={{ fontFamily: "'Space Mono', monospace", fontSize: clamp(nameFs * 0.6, 17, 22), letterSpacing: '.08em', color: enColor }}>{it.en}</span>}
                </div>
                <div>
                  {p.showPercent && <div style={{ fontSize: pctFs, fontWeight: 900, lineHeight: 0.9, letterSpacing: '-.02em', color: pctColor }}>{pct}<span style={{ fontSize: pctFs * 0.42, fontWeight: 900 }}>%</span></div>}
                  {p.showAmount && <div style={{ marginTop: 4, fontSize: clamp(minDim * 0.085, 20, 28), fontWeight: 700, color: amtColor }}>{it.amount}</div>}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <MonoCaption show={p.showCaption}>{p.caption}</MonoCaption>
    </SlideFrame>
  );
}
