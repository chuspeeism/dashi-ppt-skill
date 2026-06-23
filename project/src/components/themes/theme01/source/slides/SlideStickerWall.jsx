// Migration-safe: default export + defaultProps + controls; props-only; aip- scope.
// A stacked sticker headline sits over a flowing wall of keyword stickers; the
// cluster is a wrap layout so it stays balanced at any tag count. Tag count /
// highlighted tag / headline tilt / fluorescent accent / takeaway are tweakable;
// text lives in defaultProps.
import React from 'react';
import { SlideFrame, MonoCaption, hexA } from './SlideKit.jsx';

export const defaultProps = {
  kicker: 'ANNUAL · 关键词',
  headChunks: [
    { text: '资本', tone: 'dark' },
    { text: '年度', tone: 'glow' },
    { text: '热词', tone: 'light' },
  ],
  sub: '十二个词，复盘这一年 AI 融资的全部叙事',
  meta: '2025 · WORD WALL',
  tags: [
    { term: 'AGI 叙事', note: 'The AGI Bet', tone: 'glow', big: true },
    { term: '卖铲子', note: 'Picks & Shovels', tone: 'dark' },
    { term: '算力卡脖子', note: 'Compute Crunch', tone: 'light' },
    { term: '估值泡沫', note: 'Bubble Watch', tone: 'dark', big: true },
    { term: '湾区集中', note: 'Bay Area', tone: 'light' },
    { term: '千倍 PS', note: '1000× Revenue', tone: 'glow' },
    { term: 'IPO 退出', note: 'Exit Window', tone: 'dark' },
    { term: '具身智能', note: 'Embodied AI', tone: 'light', big: true },
    { term: 'Constitutional AI', note: '安全对齐', tone: 'dark' },
    { term: 'Token 经济', note: 'Token Economy', tone: 'light' },
    { term: '大模型断层', note: 'Foundation Gap', tone: 'glow' },
    { term: '头部通吃', note: 'Winner-Takes-Most', tone: 'dark' },
  ],
  takeaway: '一句话 —— 钱，正在向少数共识快速收口。',
  takeawayHighlight: '少数共识',
  caption: '标签墙 · 十二个热词，一页复盘全年叙事',
  // tweakable (universal names)
  itemCount: 10,
  highlight: true,
  highlightIndex: 0,
  headTilt: -3,
  showSub: true,
  showTakeaway: true,
  accentColor: '#c9f24d',
  showCaption: true,
};

export const controls = [
  { key: 'itemCount', label: '标签数量', type: 'number', default: 10, min: 6, max: 12, step: 1, unit: ' 个',
    description: '标签墙上展示的热词数量（自动保持错落构图）。' },
  { key: 'highlight', label: '高亮标签', type: 'boolean', default: true,
    description: '是否放大并发光强调其中一个标签。' },
  { key: 'highlightIndex', label: '高亮第几个', type: 'number', default: 0, min: 0, max: 11, step: 1,
    description: '被强调的标签序号（从 0 开始）。' },
  { key: 'headTilt', label: '标题倾斜', type: 'number', default: -3, min: -8, max: 8, step: 1, unit: '°',
    description: '顶部贴纸标题的整体旋转角度。' },
  { key: 'showSub', label: '副标题', type: 'boolean', default: true,
    description: '标题下方说明副标题的显示。' },
  { key: 'showTakeaway', label: '底部金句', type: 'boolean', default: true,
    description: '底部荧光高亮金句贴纸的显示。' },
  { key: 'accentColor', label: '荧光色', type: 'color', default: '#c9f24d',
    options: ['#c9f24d', '#46b083', '#5b8def', '#e0a23a', '#e8503a', '#7a5ae0'],
    description: '荧光高亮贴纸 / 高光的主题色。' },
  { key: 'showCaption', label: '装饰文案', type: 'boolean', default: true,
    description: '底部 */ … /* 说明文案的显示。' },
];

const ROTS = [-4, 3, -2, 5, -3, 2, -5, 4, -1, 3, -4, 2];

// One keyword sticker. tone: dark | light | glow. `on` promotes it (scale+glow).
function Sticker({ term, note, tone, big, rot, on, ac }) {
  const isGlow = tone === 'glow' || on;
  const bg = on ? ac : tone === 'dark' ? '#1c1c22' : tone === 'glow' ? ac : '#ffffff';
  const fg = tone === 'dark' && !on ? '#ffffff' : '#1a1a1f';
  const noteFg = tone === 'dark' && !on ? hexA('#ffffff', 0.66) : hexA('#1a1a1f', 0.6);
  const size = (big ? 56 : 46) * (on ? 1.22 : 1);
  return (
    <div data-theme01-page69-sticker="" data-editable-skip="true" style={{
      display: 'inline-flex', flexDirection: 'column', gap: 4,
      padding: big ? '16px 28px' : '13px 22px', borderRadius: 16,
      background: bg, transform: `rotate(${rot}deg)`,
      border: tone === 'light' && !on ? '2px solid rgba(26,26,31,.14)' : 'none',
      boxShadow: on
        ? `0 0 0 4px ${hexA(ac, 0.35)}, 0 22px 46px ${hexA(ac, 0.5)}, 0 8px 18px rgba(26,26,31,.28)`
        : isGlow
          ? `0 16px 34px ${hexA(ac, 0.4)}, 0 5px 14px rgba(26,26,31,.22)`
          : '0 16px 32px rgba(26,26,31,.26), 0 5px 12px rgba(26,26,31,.16)',
    }}>
      <span data-theme01-page69-term="" style={{ fontSize: size, fontWeight: 900, lineHeight: 1, letterSpacing: '.01em', color: fg, whiteSpace: 'nowrap' }}>{term}</span>
      <span data-theme01-page69-note="" style={{ fontFamily: "'Space Mono', monospace", fontSize: 18, letterSpacing: '.08em',
        textTransform: 'uppercase', color: noteFg, whiteSpace: 'nowrap' }}>{note}</span>
    </div>
  );
}

export default function SlideStickerWall(props) {
  const p = { ...defaultProps, ...props };
  const tags = p.tags.slice(0, Math.max(6, Math.min(12, p.itemCount)));
  const hi = p.highlight ? Math.min(p.highlightIndex, tags.length - 1) : -1;
  const ac = p.accentColor;

  const headTone = (t) => t === 'dark'
    ? { background: '#1c1c22', color: '#fff', border: 'none' }
    : t === 'glow'
      ? { background: ac, color: '#1a1a1f', border: 'none' }
      : { background: '#fff', color: '#1a1a1f', border: '2px solid rgba(26,26,31,.12)' };

  return (
    <SlideFrame bg="b">
      {/* header: kicker sticker + meta */}
      <div style={{ flex: '0 0 auto', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
        <span style={{ display: 'inline-block', transform: 'rotate(-3deg)', padding: '10px 22px', borderRadius: 12,
          background: ac, color: '#1a1a1f', fontFamily: "'Space Mono', monospace", fontSize: 24, fontWeight: 700,
          letterSpacing: '.1em', boxShadow: `0 12px 26px ${hexA(ac, 0.45)}` }}>{p.kicker}</span>
        <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 22, letterSpacing: '.14em', color: 'var(--aip-ink-3)', paddingTop: 10 }}>{p.meta}</span>
      </div>

      {/* stacked sticker headline */}
      <div style={{ flex: '0 0 auto', marginTop: 18, transform: `rotate(${p.headTilt}deg)`, transformOrigin: 'left center' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 18 }}>
          {p.headChunks.map((c, i) => {
            const st = headTone(c.tone);
            return (
              <span key={i} style={{ display: 'inline-block', padding: '6px 26px 12px', borderRadius: 18,
                fontSize: 120, fontWeight: 900, lineHeight: 1, letterSpacing: '.01em',
                background: st.background, color: st.color, border: st.border,
                boxShadow: c.tone === 'glow'
                  ? `0 22px 48px ${hexA(ac, 0.5)}, 0 8px 18px rgba(26,26,31,.24)`
                  : '0 22px 44px rgba(26,26,31,.3), 0 8px 16px rgba(26,26,31,.18)',
                transform: `rotate(${i % 2 ? 2 : -1.5}deg)` }}>{c.text}</span>
            );
          })}
        </div>
        {p.showSub && (
          <div style={{ marginTop: 18, marginLeft: 6, fontSize: 30, fontWeight: 700, color: 'var(--aip-ink-2)' }}>{p.sub}</div>
        )}
      </div>

      {/* tag wall */}
      <div style={{ flex: 1, minHeight: 0, marginTop: 10, display: 'flex', flexWrap: 'wrap', alignContent: 'center',
        justifyContent: 'center', alignItems: 'center', gap: '26px 30px', padding: '8px 10px' }}>
        {tags.map((t, i) => (
          <Sticker key={i} term={t.term} note={t.note} tone={t.tone} big={t.big}
            rot={ROTS[i % ROTS.length]} on={i === hi} ac={ac} />
        ))}
      </div>

      {/* takeaway */}
      {p.showTakeaway && (
        <div style={{ flex: '0 0 auto', display: 'flex', justifyContent: 'center', marginTop: 6 }}>
          <span style={{ display: 'inline-block', transform: 'rotate(-1deg)', padding: '14px 34px', borderRadius: 16,
            background: '#1c1c22', color: '#fff', fontSize: 38, fontWeight: 900, letterSpacing: '.01em',
            boxShadow: '0 18px 38px rgba(26,26,31,.32)' }}>
            {(() => {
              const parts = String(p.takeaway).split(p.takeawayHighlight);
              if (parts.length < 2) return p.takeaway;
              return (
                <>
                  {parts[0]}
                  <span style={{ background: ac, color: '#1a1a1f', padding: '0 12px', borderRadius: 8, boxDecorationBreak: 'clone', WebkitBoxDecorationBreak: 'clone' }}>{p.takeawayHighlight}</span>
                  {parts.slice(1).join(p.takeawayHighlight)}
                </>
              );
            })()}
          </span>
        </div>
      )}

      <MonoCaption show={p.showCaption}>{p.caption}</MonoCaption>
    </SlideFrame>
  );
}
