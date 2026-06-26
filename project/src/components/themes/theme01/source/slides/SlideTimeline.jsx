// SlideTimeline.jsx — 时间轴 / horizontal milestone timeline.
// Migration-safe: default export + defaultProps + controls; props-only; aip- scope.
// Visual: a heavy central spine with sticker "stamp" amount labels alternating
// above/below (zigzag), a fluorescent highlight on one pivotal node — drawing on
// the tag/label reference (oversized stamps, tilt, fluorescent accent).
import React from 'react';
import { SlideFrame, SlideHead, MonoCaption, hexA } from './SlideKit.jsx';

export const defaultProps = {
  kicker: '# 典型案例',
  title: '里程碑 · Anthropic 2024 融资节奏',
  en: 'Funding Milestones',
  cn: '一年三轮 · 估值 16 倍跃迁',
  events: [
    { date: '2024 · 05', round: 'Series G', amount: '280', unit: '亿', note: '估值 600 亿', color: '#5b8def' },
    { date: '2024 · 08', round: 'Series H · 首轮', amount: '180', unit: '亿', note: '估值 830 亿', color: '#46b083' },
    { date: '2024 · 11', round: 'Series H · 扩轮', amount: '190', unit: '亿', note: '估值 9650 亿', color: '#e8503a' },
    { date: '2026 · 06', round: '递交 IPO 申请', amount: '上市', unit: '', note: '全球估值最高 AI 初创', color: '#7a5ae0' },
    { date: '2026 · H2', round: '公开市场定价', amount: 'IPO', unit: '', note: '进入二级市场验证期', color: '#e0a23a' },
  ],
  caption: '时间轴 · 资本如何在一年内重写估值',
  // tweakable (universal names — not bound to any specific business term)
  itemCount: 4,
  highlight: true,
  highlightIndex: 2,
  accentColor: '#e8503a',
  layout: 'zigzag',
  showConnector: true,
  showCaption: true,
};

export const controls = [
  { key: 'itemCount', label: '节点数量', type: 'number', default: 4, min: 2, max: 5, step: 1, unit: ' 个',
    description: '时间轴上展示的节点数量。' },
  { key: 'highlight', label: '重点强调', type: 'boolean', default: true,
    description: '是否把其中一个节点渲染成荧光「印章」贴纸。' },
  { key: 'highlightIndex', label: '强调第几个', type: 'number', default: 2, min: 0, max: 4, step: 1,
    description: '被强调的节点序号（从 0 开始）。' },
  { key: 'accentColor', label: '强调色', type: 'color', default: '#e8503a',
    options: ['#e8503a', '#5b8def', '#46b083', '#e0a23a', '#7a5ae0', '#c9f24d'],
    description: '被强调节点的荧光贴纸颜色。' },
  { key: 'layout', label: '节点排布', type: 'select', default: 'zigzag',
    options: [{ value: 'zigzag', label: '上下交错' }, { value: 'below', label: '全部在下' }],
    description: '节点相对中轴线的排布方式。' },
  { key: 'showConnector', label: '连接轴线', type: 'boolean', default: true,
    description: '是否显示贯穿的中轴线与节点圆点。' },
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

function Card({ ev, on, accent, above, tilt }) {
  const c = on ? accent : ev.color;
  const fg = on ? readableOn(accent) : 'var(--aip-ink)';
  return (
    <div style={{
      width: '100%', padding: on ? '22px 26px' : '20px 24px', borderRadius: 20,
      transform: `rotate(${tilt}deg)`,
      background: on ? c : 'rgba(255,255,255,.66)',
      border: `1px solid ${on ? hexA(c, 0.55) : 'rgba(255,255,255,.85)'}`,
      boxShadow: on
        ? `0 22px 50px ${hexA(c, 0.42)}, 0 2px 0 rgba(255,255,255,.5) inset`
        : '0 1px 0 rgba(255,255,255,.7) inset, 0 16px 38px rgba(70,72,100,.16)',
    }}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
        <span style={{ fontSize: 60, fontWeight: 900, lineHeight: 0.95, color: on ? fg : c, letterSpacing: '-.01em' }}>{ev.amount}</span>
        {ev.unit && <span style={{ fontSize: 30, fontWeight: 800, color: on ? fg : 'var(--aip-ink-3)' }}>{ev.unit}</span>}
      </div>
      <div style={{ marginTop: 6, fontSize: 27, fontWeight: 800, color: fg }}>{ev.round}</div>
      <div style={{ marginTop: 2, fontSize: 24, color: on ? hexA(fg === '#ffffff' ? '#ffffff' : '#23232a', 0.75) : 'var(--aip-ink-3)', fontWeight: 600 }}>{ev.note}</div>
    </div>
  );
}

function DateChip({ date, color, on }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 10, padding: '8px 18px', borderRadius: 12,
      background: '#23232a', color: '#fff', fontFamily: "'Space Mono', monospace",
      fontSize: 24, fontWeight: 700, letterSpacing: '.02em', whiteSpace: 'nowrap',
      boxShadow: '0 12px 26px rgba(20,20,28,.28)',
    }}>
      <span style={{ width: 12, height: 12, borderRadius: 4, background: on ? color : hexA(color, 0.9) }} />
      {date}
    </span>
  );
}

export default function SlideTimeline(props) {
  const p = { ...defaultProps, ...props };
  const evs = p.events.slice(0, Math.max(2, Math.min(5, p.itemCount)));
  const zig = p.layout === 'zigzag';

  return (
    <SlideFrame bg="a">
      <SlideHead kicker={p.kicker} tone="violet" title={p.title} en={p.en} cn={p.cn} />

      <div style={{ flex: 1, display: 'flex', alignItems: 'center', minHeight: 0, marginTop: 4 }}>
        <div style={{ position: 'relative', width: '100%', display: 'flex', gap: 26 }}>
          {/* central spine */}
          {p.showConnector && (
            <div style={{
              position: 'absolute', left: 8, right: 8, top: '50%', height: 6, transform: 'translateY(-50%)',
              borderRadius: 3, background: 'linear-gradient(90deg, rgba(122,90,224,.25), rgba(232,80,58,.35))',
            }} />
          )}
          {evs.map((ev, i) => {
            const on = p.highlight && i === p.highlightIndex;
            const above = zig ? i % 2 === 0 : false;
            const tilt = (i % 2 === 0 ? -1 : 1) * (on ? 2 : 1.4);
            const dotC = on ? p.accentColor : ev.color;
            const dot = (
              <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', zIndex: 2 }}>
                <span style={{ display: 'block', width: on ? 30 : 24, height: on ? 30 : 24, borderRadius: '50%',
                  background: dotC, border: '4px solid #fff', boxShadow: `0 6px 16px ${hexA(dotC, 0.5)}` }} />
              </div>
            );
            const chip = <DateChip date={ev.date} color={dotC} on={on} />;
            const card = <Card ev={ev} on={on} accent={p.accentColor} above={above} tilt={tilt} />;
            return (
              <div key={i} style={{ flex: 1, position: 'relative', display: 'flex', flexDirection: 'column', minHeight: 560 }}>
                {/* upper half — content hugs the axis at the bottom (date chip nearest the spine) */}
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end', gap: 18, paddingBottom: 12 }}>
                  {above && <>{card}{chip}</>}
                </div>
                {dot}
                {/* lower half — content hugs the axis at the top (date chip nearest the spine) */}
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', gap: 18, paddingTop: 12 }}>
                  {!above && <>{chip}{card}</>}
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
