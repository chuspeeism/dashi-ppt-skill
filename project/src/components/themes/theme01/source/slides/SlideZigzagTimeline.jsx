// SlideZigzagTimeline.jsx — 纵向交错时间线 / vertical zig-zag timeline.
// Migration-safe: default export + defaultProps + controls; props-only; aip- scope.
// A central spine runs top-to-bottom; dated nodes sit on it while frosted event
// cards alternate left / right, each tethered to its node by a short connector.
// The zig-zag rhythm lets a sequence breathe vertically (distinct from the deck's
// horizontal timeline) and reads as a chronology at a glance. One event can be
// promoted to a fluorescent node + accented card. Event count / highlight /
// spine / alternation / accent are tweakable; text lives in defaultProps. Pure
// CSS grid — exports cleanly to PDF / PPTX.
import React from 'react';
import { SlideFrame, SlideHead, MonoCaption, hexA } from './SlideKit.jsx';

export const defaultProps = {
  kicker: '市场全景 · 时间线',
  tone: 'amber',
  title: '2024：改写纪录的一年',
  en: 'A Year That Reset the Record',
  cn: '大额融资与里程碑的关键节点',
  events: [
    { date: '02月', title: 'Figure AI 完成 6.8 亿融资', desc: '具身智能成为新风口，估值一年内翻数倍。' },
    { date: '05月', title: 'xAI 募资 60 亿美元', desc: '挑战者强势补位，单轮规模直逼头部。' },
    { date: '09月', title: 'OpenAI 66 亿创纪录', desc: '刷新单轮融资上限，估值站上 1570 亿美元。' },
    { date: '11月', title: 'Anthropic 加注 40 亿', desc: '亚马逊追投，安全叙事持续吸金。' },
    { date: '12月', title: '全年大额融资破千亿', desc: '美国 AI 一级市场吸纳资金创历史新高。' },
    { date: '年末', title: '算力与治理议题升温', desc: '基础设施、模型安全与监管框架同步成为长期投入方向。' },
  ],
  note: '节点为公开披露的代表性事件，非完整清单',
  caption: '时间轴 · 一年之内，纪录被反复刷新',
  // tweakable (universal names)
  itemCount: 5,
  highlight: true,
  highlightIndex: 2,
  showSpine: true,
  alternate: true,
  accentColor: '#e0a23a',
  showNote: true,
  showCaption: true,
};

export const controls = [
  { key: 'itemCount', label: '节点数量', type: 'number', default: 5, min: 3, max: 6, step: 1, unit: ' 个',
    description: '时间线展示的事件节点数量。' },
  { key: 'highlight', label: '重点强调', type: 'boolean', default: true,
    description: '是否把其中一个节点 + 卡片渲染成荧光强调。' },
  { key: 'highlightIndex', label: '强调第几个', type: 'number', default: 2, min: 0, max: 5, step: 1,
    description: '被强调的节点序号（从 0 开始）。' },
  { key: 'showSpine', label: '中轴脊线', type: 'boolean', default: true,
    description: '中央竖向脊线的显示。' },
  { key: 'alternate', label: '左右交错', type: 'boolean', default: true,
    description: '卡片左右交错排布（关闭则全部排在右侧，节点靠左成竖排清单）。' },
  { key: 'accentColor', label: '主题色', type: 'color', default: '#e0a23a',
    options: ['#e0a23a', '#5b8def', '#46b083', '#e8503a', '#7a5ae0'],
    description: '脊线、节点与强调卡片的主题色。' },
  { key: 'showNote', label: '口径说明', type: 'boolean', default: true,
    description: '底部口径小字说明的显示。' },
  { key: 'showCaption', label: '装饰文案', type: 'boolean', default: true,
    description: '底部 */ … /* 说明文案的显示。' },
];

export default function SlideZigzagTimeline(props) {
  const p = { ...defaultProps, ...props };
  const ac = p.accentColor;
  const events = p.events.slice(0, Math.max(3, Math.min(6, p.itemCount)));
  const alt = p.alternate;
  const spineCol = alt ? 150 : 120;

  function Card({ ev, on, side }) {
    return (
      <div style={{
        position: 'relative', maxWidth: alt ? 620 : 1180, width: '100%',
        justifySelf: side === 'left' ? 'end' : 'start',
        padding: '20px 30px', borderRadius: 22,
        background: on ? hexA(ac, 0.14) : 'rgba(255,255,255,.6)',
        backdropFilter: 'blur(24px) saturate(140%)', WebkitBackdropFilter: 'blur(24px) saturate(140%)',
        border: on ? `2px solid ${hexA(ac, 0.55)}` : '1px solid rgba(255,255,255,.75)',
        boxShadow: on
          ? `0 0 0 5px ${hexA(ac, 0.12)}, 0 20px 44px ${hexA(ac, 0.26)}`
          : '0 1px 0 rgba(255,255,255,.8) inset, 0 18px 40px rgba(70,72,100,.12)',
        transform: on ? `rotate(${side === 'left' ? 0.6 : -0.6}deg)` : 'none' }}>
        {/* connector nub toward spine */}
        <span style={{ position: 'absolute', top: 38, [side === 'left' ? 'right' : 'left']: -10,
          width: 20, height: 4, borderRadius: 2, background: on ? ac : hexA('#5a5a70', 0.25) }} />
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 14, flexDirection: side === 'left' && alt ? 'row-reverse' : 'row',
          textAlign: side === 'left' && alt ? 'right' : 'left' }}>
          <span style={{ fontSize: 32, fontWeight: 900, color: 'var(--aip-ink)', lineHeight: 1.15, textWrap: 'pretty' }}>{ev.title}</span>
        </div>
        <div style={{ fontSize: 25, fontWeight: 500, color: 'var(--aip-ink-2)', marginTop: 8, lineHeight: 1.4, textWrap: 'pretty',
          textAlign: side === 'left' && alt ? 'right' : 'left' }}>{ev.desc}</div>
      </div>
    );
  }

  function Node({ ev, on }) {
    return (
      <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
        {/* date badge */}
        <div style={{ fontFamily: "'Space Mono', monospace", fontSize: on ? 27 : 24, fontWeight: 700,
          padding: '5px 14px', borderRadius: 10, marginBottom: 8, whiteSpace: 'nowrap',
          color: on ? '#fff' : 'var(--aip-ink)', background: on ? ac : 'rgba(255,255,255,.85)',
          border: on ? 'none' : '1px solid rgba(255,255,255,.9)',
          boxShadow: on ? `0 10px 24px ${hexA(ac, 0.42)}` : '0 8px 20px rgba(70,72,100,.14)' }}>{ev.date}</div>
        {/* dot */}
        <span style={{ width: on ? 32 : 22, height: on ? 32 : 22, borderRadius: '50%',
          background: on ? ac : '#fff', border: `${on ? 6 : 5}px solid ${on ? hexA(ac, 0.4) : hexA(ac, 0.7)}`,
          boxShadow: on ? `0 0 0 7px ${hexA(ac, 0.14)}, 0 8px 20px ${hexA(ac, 0.45)}` : `0 6px 16px ${hexA(ac, 0.3)}` }} />
      </div>
    );
  }

  return (
    <SlideFrame bg="b">
      <SlideHead kicker={p.kicker} tone={p.tone} title={p.title} en={p.en} cn={p.cn} />

      <div style={{ flex: 1, minHeight: 0, marginTop: 18, position: 'relative', display: 'flex', flexDirection: 'column' }}>
        {/* spine */}
        {p.showSpine && (
          <span style={{ position: 'absolute', top: 18, bottom: 18,
            left: alt ? '50%' : `${spineCol / 2}px`, transform: 'translateX(-50%)', width: 4, borderRadius: 2,
            background: `linear-gradient(180deg, ${hexA(ac, 0.15)}, ${hexA(ac, 0.55)}, ${hexA(ac, 0.15)})` }} />
        )}

        {events.map((ev, i) => {
          const on = p.highlight && i === p.highlightIndex;
          const side = alt ? (i % 2 === 0 ? 'left' : 'right') : 'right';
          return (
            <div key={i} style={{ flex: 1, minHeight: 0, display: 'grid',
              gridTemplateColumns: alt ? `1fr ${spineCol}px 1fr` : `${spineCol}px 1fr`,
              alignItems: 'center', columnGap: 8 }}>
              {alt ? (
                <>
                  {side === 'left' ? <Card ev={ev} on={on} side="left" /> : <span />}
                  <Node ev={ev} on={on} />
                  {side === 'right' ? <Card ev={ev} on={on} side="right" /> : <span />}
                </>
              ) : (
                <>
                  <Node ev={ev} on={on} />
                  <Card ev={ev} on={on} side="right" />
                </>
              )}
            </div>
          );
        })}
      </div>

      {p.showNote && (
        <div style={{ flex: '0 0 auto', marginTop: 8, fontFamily: "'Space Mono', monospace",
          fontSize: 19, color: 'var(--aip-ink-3)' }}>{`* `}{p.note}</div>
      )}
      <MonoCaption show={p.showCaption}>{p.caption}</MonoCaption>
    </SlideFrame>
  );
}
