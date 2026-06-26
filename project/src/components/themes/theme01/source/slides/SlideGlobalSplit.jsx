// SlideGlobalSplit.jsx — 全球资金版图 / 100% stacked share bar + region tiles.
// One full-width stacked bar splits global AI funding by region (shares sum to
// 100), paired with a tile per region carrying rank, share, amount and a note.
// Migration-safe: default export + defaultProps + controls; props-only; all
// styles live under the `aip-` scope and never leak to the host :root.
import React from 'react';
import { SlideFrame, SlideHead, MonoCaption, hexA } from './SlideKit.jsx';

export const defaultProps = {
  kicker: '市场全景 · 全球版图',
  tone: 'blue',
  title: '资金版图：一极独大',
  en: 'Global Funding Map',
  cn: '美国虹吸全球过半 AI 资本',
  totalLabel: '全球 AI 融资总额',
  totalValue: '970',
  totalUnit: '亿美元',
  regions: [
    { name: '美国', en: 'United States', share: 64, amount: '620', tone: 'blue', note: '湾区为核心，模型与算力双轮驱动' },
    { name: '中国', en: 'China', share: 22, amount: '213', tone: 'red', note: '大模型与应用并进，政策与算力受限' },
    { name: '欧洲', en: 'Europe', share: 9, amount: '87', tone: 'amber', note: 'Mistral 领衔，监管先行' },
    { name: '其他', en: 'Rest of World', share: 5, amount: '50', tone: 'green', note: '中东主权基金加速入场' },
  ],
  caption: '全球版图 · 美国独占六成以上，资本高度集中于单一枢纽',
  // tweakable (universal names)
  itemCount: 4,
  highlight: true,
  highlightIndex: 0,
  showBar: true,
  showAmounts: true,
  showTotal: true,
  accentColor: '#5b8def',
  showCaption: true,
};

export const controls = [
  { key: 'itemCount', label: '地区数量', type: 'number', default: 4, min: 2, max: 4, step: 1, unit: ' 个',
    description: '参与堆叠与卡片展示的地区数量。' },
  { key: 'highlight', label: '重点强调', type: 'boolean', default: true,
    description: '是否高亮强调其中一个地区（描边卡片 + 加粗段）。' },
  { key: 'highlightIndex', label: '强调第几个', type: 'number', default: 0, min: 0, max: 3, step: 1,
    description: '被强调的地区序号（从 0 开始）。' },
  { key: 'showBar', label: '堆叠条', type: 'boolean', default: true,
    description: '顶部 100% 堆叠占比条的显示。' },
  { key: 'showAmounts', label: '金额数字', type: 'boolean', default: true,
    description: '卡片上金额数字的显示（关闭则只看占比）。' },
  { key: 'showTotal', label: '总额徽标', type: 'boolean', default: true,
    description: '右上角全球总额胶囊徽标的显示。' },
  { key: 'accentColor', label: '主题色', type: 'color', default: '#5b8def',
    options: ['#5b8def', '#e8503a', '#46b083', '#e0a23a', '#7a5ae0'],
    description: '标题荧光与强调地区的颜色。' },
  { key: 'showCaption', label: '装饰文案', type: 'boolean', default: true,
    description: '底部 */ … /* 说明文案的显示。' },
];

const SOLID = { blue: '#5b8def', green: '#46b083', red: '#e8503a', amber: '#e0a23a', violet: '#7a5ae0' };
const GRAD = {
  blue: ['rgba(91,141,239,.96)', 'rgba(91,141,239,.66)'],
  red: ['rgba(232,80,58,.96)', 'rgba(232,80,58,.66)'],
  amber: ['rgba(224,162,58,.96)', 'rgba(224,162,58,.66)'],
  green: ['rgba(70,176,131,.96)', 'rgba(70,176,131,.66)'],
  violet: ['rgba(122,90,224,.96)', 'rgba(122,90,224,.66)'],
};

export default function SlideGlobalSplit(props) {
  const p = { ...defaultProps, ...props };
  const ac = p.accentColor;
  const n = Math.max(2, Math.min(4, p.itemCount));
  const regions = p.regions.slice(0, n);
  const sum = regions.reduce((a, r) => a + r.share, 0) || 1;

  return (
    <SlideFrame bg="a">
      <SlideHead kicker={p.kicker} tone={p.tone} title={p.title} en={p.en} cn={p.cn} />
      {p.showTotal && (
        <div style={{ position: 'absolute', top: 'var(--aip-pad-top)', right: 'var(--aip-pad-x)', zIndex: 5 }}>
          <div style={{ display: 'inline-flex', alignItems: 'baseline', gap: 14, padding: '16px 30px', borderRadius: 20,
            background: 'rgba(255,255,255,.6)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(255,255,255,.75)', boxShadow: '0 14px 34px rgba(70,72,100,.14)' }}>
            <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 22, letterSpacing: '.08em', color: 'var(--aip-ink-3)' }}>{p.totalLabel}</span>
            <span style={{ fontSize: 56, fontWeight: 900, color: 'var(--aip-ink)', lineHeight: 1 }}>{p.totalValue}</span>
            <span style={{ fontSize: 28, fontWeight: 700, color: ac }}>{p.totalUnit}</span>
          </div>
        </div>
      )}

      <div style={{ flex: 1, minHeight: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 48, marginTop: 8 }}>
        {/* stacked share bar */}
        {p.showBar && (
          <div>
            <div style={{ display: 'flex', width: '100%', height: 150, borderRadius: 22, overflow: 'hidden',
              boxShadow: '0 1px 0 rgba(255,255,255,.6) inset, 0 18px 44px rgba(70,72,100,.14)' }}>
              {regions.map((r, i) => {
                const pct = r.share / sum * 100;
                const g = GRAD[r.tone] || GRAD.blue;
                const on = p.highlight && i === p.highlightIndex;
                return (
                  <div key={i} style={{ width: `${pct}%`, position: 'relative', background: `linear-gradient(180deg, ${g[0]}, ${g[1]})`,
                    borderRight: i < regions.length - 1 ? '2px solid rgba(255,255,255,.7)' : 'none',
                    display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                    transform: on ? 'scaleY(1.07)' : 'none', zIndex: on ? 2 : 1, transition: '.3s' }}>
                    <div style={{ fontSize: pct > 14 ? 48 : 30, fontWeight: 900, color: '#fff', textShadow: '0 1px 4px rgba(0,0,0,.22)', lineHeight: 1 }}>{r.share}%</div>
                    {pct > 12 && <div style={{ marginTop: 6, fontSize: 26, fontWeight: 700, color: 'rgba(255,255,255,.95)' }}>{r.name}</div>}
                  </div>
                );
              })}
            </div>
            <div style={{ marginTop: 12, fontFamily: "'Space Mono', monospace", fontSize: 22, letterSpacing: '.06em', color: 'var(--aip-ink-3)' }}>
              {`*/ 各地区占全球 AI 融资份额 · 合计 100% /*`}
            </div>
          </div>
        )}

        {/* region tiles */}
        <div style={{ display: 'grid', gridTemplateColumns: `repeat(${n}, 1fr)`, gap: 22 }}>
          {regions.map((r, i) => {
            const on = p.highlight && i === p.highlightIndex;
            const c = SOLID[r.tone] || ac;
            return (
              <div key={i} style={{ position: 'relative', padding: '28px 28px 26px', borderRadius: 22,
                background: on ? hexA(c, 0.12) : 'rgba(255,255,255,.52)',
                backdropFilter: 'blur(22px) saturate(140%)', WebkitBackdropFilter: 'blur(22px) saturate(140%)',
                border: on ? `2px solid ${hexA(c, 0.55)}` : '1px solid rgba(255,255,255,.7)',
                boxShadow: on ? `0 22px 52px ${hexA(c, 0.26)}` : '0 1px 0 rgba(255,255,255,.7) inset, 0 18px 44px rgba(70,72,100,.12)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <span style={{ width: 16, height: 16, borderRadius: 5, background: c }} />
                  <span style={{ fontSize: 34, fontWeight: 900, color: 'var(--aip-ink)' }}>{r.name}</span>
                  <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 24, fontWeight: 700, color: c, marginLeft: 'auto' }}>#{i + 1}</span>
                </div>
                <div style={{ fontFamily: "'Space Mono', monospace", textTransform: 'uppercase', letterSpacing: '.12em', fontSize: 20, color: 'var(--aip-ink-3)', marginTop: 4 }}>{r.en}</div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginTop: 16 }}>
                  <span style={{ fontSize: 60, fontWeight: 900, color: c, lineHeight: 1 }}>{r.share}<span style={{ fontSize: 30 }}>%</span></span>
                  {p.showAmounts && <span style={{ fontSize: 26, fontWeight: 700, color: 'var(--aip-ink-2)' }}>≈ {r.amount} 亿</span>}
                </div>
                <p style={{ margin: '14px 0 0', fontSize: 24, lineHeight: 1.45, color: 'var(--aip-ink-2)', fontWeight: on ? 700 : 500, textWrap: 'pretty' }}>{r.note}</p>
              </div>
            );
          })}
        </div>
      </div>

      <MonoCaption show={p.showCaption} style={{ marginTop: 10 }}>{p.caption}</MonoCaption>
    </SlideFrame>
  );
}
