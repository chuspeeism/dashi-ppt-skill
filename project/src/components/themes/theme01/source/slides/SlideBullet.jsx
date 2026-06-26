// SlideBullet.jsx — 图表页 · 子弹图 / 目标达成度（actual vs target）。
// 迁移安全：default export + defaultProps + controls；纯 props 驱动；样式收在
// `.aip-root` 作用域（沿用 SlideKit 主题，不污染全局，不依赖 window）。
//
// 设计：每行是一支「子弹」——浅色定性区间带（差/良/优）打底，一条粗实测量条
// 表示当前值，一根竖向标尺标出目标位；右侧给出达成率徽标。可把某行提为荧光
// 主行（加粗 + 发光 + 达成率高亮）。纯 CSS flex，导出 PDF / PPTX 干净。
import React from 'react';
import { SlideFrame, SlideHead, MonoCaption, hexA } from './SlideKit.jsx';

export const defaultProps = {
  kicker: '风险与展望 · 兑现度',
  tone: 'green',
  title: '叙事 vs 兑现 · 2026 目标达成度',
  en: 'Progress Against 2026 Targets',
  cn: '当前进度对照年度目标，差距一目了然',
  unit: '亿',
  // value=当前值, target=目标值, max=区间上限（留白用）
  items: [
    { label: '基座模型 · 年化收入', en: 'Foundation Revenue', value: 86, target: 120, max: 150, meta: 'OpenAI + Anthropic 合计' },
    { label: '算力交付 · GW 装机', en: 'Compute Delivered', value: 64, target: 80, max: 100, meta: '在建 + 已投产' },
    { label: '企业付费渗透率', en: 'Enterprise Adoption', value: 41, target: 60, max: 100, meta: '财富 500 强采用占比' },
    { label: '具身智能 · 量产台数', en: 'Robots Shipped', value: 18, target: 50, max: 60, meta: '人形机器人累计交付' },
    { label: 'AI 芯片 · 国产替代', en: 'Domestic Silicon', value: 12, target: 35, max: 50, meta: '训练芯片自给率' },
  ],
  note: '收入与算力两项进度过半、最接近达标；而具身量产与芯片自给仍不足目标的四成——叙事最性感的赛道，恰恰是兑现差距最大的地方。',
  // tweakable（通用命名）
  itemCount: 5,
  highlight: true,
  highlightIndex: 3,
  showTarget: true,
  showBands: true,
  showRate: true,
  showMeta: true,
  showNote: true,
  accentColor: '#46b083',
  showCaption: true,
  caption: '子弹图 · 越性感的叙事，兑现差距越大',
};

export const controls = [
  { key: 'itemCount', label: '指标条数', type: 'number', default: 5, min: 3, max: 6, step: 1, unit: ' 条',
    description: '展示的目标指标条数。' },
  { key: 'highlight', label: '重点强调', type: 'boolean', default: true,
    description: '是否把某一条渲染成荧光主条（加粗 + 发光）。' },
  { key: 'highlightIndex', label: '强调第几条', type: 'number', default: 3, min: 0, max: 4, step: 1,
    description: '被强调的指标序号（0 基）。' },
  { key: 'showTarget', label: '目标标尺', type: 'boolean', default: true,
    description: '竖向目标线与「目标」标注的显示。' },
  { key: 'showBands', label: '区间色带', type: 'boolean', default: true,
    description: '差 / 良 / 优三段定性背景色带的显示。' },
  { key: 'showRate', label: '达成率徽标', type: 'boolean', default: true,
    description: '右侧达成率（当前 / 目标）徽标的显示。' },
  { key: 'showMeta', label: '副标说明', type: 'boolean', default: true,
    description: '每条标签下方口径说明的显示。' },
  { key: 'showNote', label: '核心发现', type: 'boolean', default: true,
    description: '底部「核心发现」说明卡的显示。' },
  { key: 'accentColor', label: '主题色', type: 'color', default: '#46b083',
    options: ['#46b083', '#5b8def', '#e0a23a', '#e8503a', '#7a5ae0'],
    description: '测量条与达成率徽标的主题色。' },
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

export default function SlideBullet(props) {
  const p = { ...defaultProps, ...props };
  const ac = p.accentColor;
  const fg = readableOn(ac);
  const items = p.items.slice(0, Math.max(3, Math.min(6, p.itemCount)));

  return (
    <SlideFrame bg="b">
      <SlideHead kicker={p.kicker} tone={p.tone} title={p.title} en={p.en} cn={p.cn} />

      <div style={{ flex: 1, minHeight: 0, marginTop: 22, display: 'flex', flexDirection: 'column',
        background: 'rgba(255,255,255,.55)', backdropFilter: 'blur(28px) saturate(140%)', WebkitBackdropFilter: 'blur(28px) saturate(140%)',
        border: '1px solid rgba(255,255,255,.72)', borderRadius: 30, padding: '24px 48px 18px',
        boxShadow: '0 1px 0 rgba(255,255,255,.8) inset, 0 28px 64px rgba(70,72,100,.14)' }}>

        <div style={{ flex: 1, minHeight: 0, display: 'flex', flexDirection: 'column' }}>
          {items.map((it, i) => {
            const on = p.highlight && i === p.highlightIndex;
            const max = it.max || Math.max(it.target, it.value) * 1.25;
            const vPct = Math.max(0, Math.min(100, (it.value / max) * 100));
            const tPct = Math.max(0, Math.min(100, (it.target / max) * 100));
            const rate = it.target ? Math.round((it.value / it.target) * 100) : 0;
            const hit = rate >= 100;
            const barH = on ? 30 : 22;
            return (
              <div key={i} style={{ flex: 1, minHeight: 0, display: 'flex', alignItems: 'center', gap: 26,
                borderTop: i ? '1px solid rgba(43,43,48,.08)' : 'none' }}>
                {/* label block */}
                <div style={{ flex: '0 0 360px', minWidth: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 3 }}>
                  <span style={{ fontSize: on ? 33 : 29, fontWeight: 900, color: 'var(--aip-ink)', lineHeight: 1.12,
                    whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{it.label}</span>
                  {p.showMeta && it.meta && (
                    <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 19, color: 'var(--aip-ink-3)',
                      whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{it.meta}</span>
                  )}
                </div>

                {/* bullet track */}
                <div style={{ flex: 1, minWidth: 0, position: 'relative', height: 56, display: 'flex', alignItems: 'center' }}>
                  {/* qualitative bands */}
                  <div style={{ position: 'absolute', inset: '0 0', borderRadius: 13, overflow: 'hidden',
                    display: 'flex', background: 'rgba(43,43,48,.05)' }}>
                    {p.showBands && (
                      <>
                        <div style={{ flex: '0 0 55%', background: hexA('#5a5a70', 0.10) }} />
                        <div style={{ flex: '0 0 25%', background: hexA('#5a5a70', 0.06) }} />
                        <div style={{ flex: 1, background: hexA('#5a5a70', 0.025) }} />
                      </>
                    )}
                  </div>

                  {/* measure bar */}
                  <div style={{ position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)',
                    width: `${vPct}%`, height: barH, borderRadius: 999,
                    background: on
                      ? `linear-gradient(90deg, ${hexA(ac, 0.78)}, ${ac})`
                      : `linear-gradient(90deg, ${hexA(ac, 0.5)}, ${hexA(ac, 0.82)})`,
                    boxShadow: on
                      ? `0 0 0 4px ${hexA(ac, 0.14)}, 0 12px 30px ${hexA(ac, 0.42)}`
                      : `0 8px 20px ${hexA(ac, 0.26)}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'flex-end', paddingRight: 14,
                    transition: 'all .3s' }}>
                    <span style={{ fontFamily: "'Space Mono', monospace", fontSize: on ? 24 : 20, fontWeight: 700,
                      color: fg, textShadow: '0 1px 3px rgba(0,0,0,.2)' }}>{it.value}</span>
                  </div>

                  {/* target marker */}
                  {p.showTarget && (
                    <div style={{ position: 'absolute', left: `${tPct}%`, top: '50%', transform: 'translate(-50%,-50%)',
                      height: 50, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                      <div style={{ width: 5, height: 50, borderRadius: 3, background: 'var(--aip-ink)',
                        boxShadow: '0 2px 8px rgba(40,42,70,.35)' }} />
                    </div>
                  )}
                </div>

                {/* rate badge */}
                {p.showRate && (
                  <div style={{ flex: '0 0 168px', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 12 }}>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ display: 'flex', alignItems: 'baseline', gap: 3, justifyContent: 'flex-end' }}>
                        <span style={{ fontFamily: "'Space Mono', monospace", fontSize: on ? 48 : 40, fontWeight: 700,
                          lineHeight: 1, color: hit ? ac : (on ? ac : 'var(--aip-ink)') }}>{rate}</span>
                        <span style={{ fontSize: 22, fontWeight: 800, color: 'var(--aip-ink-3)' }}>%</span>
                      </div>
                      <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 17, color: 'var(--aip-ink-3)',
                        whiteSpace: 'nowrap', marginTop: 2 }}>目标 {it.target}{p.unit}</div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* legend strip */}
        <div style={{ flex: '0 0 auto', marginTop: 10, display: 'flex', alignItems: 'center', gap: 28,
          fontFamily: "'Space Mono', monospace", fontSize: 19, color: 'var(--aip-ink-3)' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 9 }}>
            <span style={{ width: 26, height: 12, borderRadius: 999, background: `linear-gradient(90deg, ${hexA(ac, 0.5)}, ${ac})` }} />当前值
          </span>
          {p.showTarget && (
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 9 }}>
              <span style={{ width: 5, height: 20, borderRadius: 3, background: 'var(--aip-ink)' }} />目标线
            </span>
          )}
          {p.showBands && (
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 9 }}>
              <span style={{ width: 26, height: 12, borderRadius: 4, background: hexA('#5a5a70', 0.10) }} />差 · 良 · 优 区间
            </span>
          )}
        </div>
      </div>

      {p.showNote && p.note && (
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 18, marginTop: 14, padding: '16px 26px', borderRadius: 18,
          background: 'rgba(255,255,255,.5)', border: '1px solid rgba(255,255,255,.7)',
          boxShadow: '0 1px 0 rgba(255,255,255,.7) inset, 0 18px 44px -28px rgba(70,72,100,.5)' }}>
          <span style={{ flex: '0 0 auto', fontFamily: "'Space Mono', monospace", fontWeight: 700, fontSize: 20,
            letterSpacing: '.12em', color: '#fff', background: ac, padding: '8px 16px', borderRadius: 9 }}>核心发现</span>
          <p style={{ margin: 0, fontSize: 24, lineHeight: 1.5, color: 'var(--aip-ink-2)', fontWeight: 500, textWrap: 'pretty' }}>{p.note}</p>
        </div>
      )}

      <MonoCaption show={p.showCaption} style={{ marginTop: 14 }}>{p.caption}</MonoCaption>
    </SlideFrame>
  );
}
