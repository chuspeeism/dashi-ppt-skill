// SlideChapter.jsx — 章节页 / bold section divider.
// Migration-safe: default export + defaultProps + controls; props-only; aip- scope.
// Visual: oversized ghost index behind a heavy title, tilted "sticker" topic
// chips (a nod to the tag/label reference), optional adaptive image column.
import React from 'react';
import { SlideFrame, Tag, MonoCaption, ImageSlot, hexA } from './SlideKit.jsx';

export const defaultProps = {
  kicker: '章节',
  partLabel: 'PART 03',
  index: '03',
  title: '横向透视',
  en: 'Horizontal Perspective',
  desc: '在同一时间截面上，横向对比公司、赛道、轮次与地区——谁更大、谁更密集、资源集中在哪里。',
  topics: [
    { label: '行业赛道' }, { label: '轮次结构' }, { label: '头部玩家' },
    { label: '地区分布' }, { label: '资本四象限' },
  ],
  caption: '章节导航 · 横向透视的四条主线',
  // tweakable
  topicCount: 5,
  highlight: true,
  highlightIndex: 0,
  showGhost: true,
  accentColor: '#5b8def',
  imageSlotCount: 0,
  imageFit: 'cover',
  images: ['', ''],
  showCaption: true,
};

export const controls = [
  { key: 'topicCount', label: '主线数量', type: 'number', default: 5, min: 0, max: 5, step: 1, unit: ' 条',
    description: '展示的分主题贴纸数量（0 时只显示标题）。' },
  { key: 'highlight', label: '重点强调', type: 'boolean', default: true,
    description: '是否高亮其中一条主线贴纸。' },
  { key: 'highlightIndex', label: '强调第几条', type: 'number', default: 0, min: 0, max: 4, step: 1,
    description: '被强调的主线序号（从 0 开始）。' },
  { key: 'showGhost', label: '背景巨字', type: 'boolean', default: true,
    description: '是否显示背景的超大序号（无图片时生效）。' },
  { key: 'accentColor', label: '主题色', type: 'color', default: '#5b8def',
    options: ['#5b8def', '#46b083', '#e0a23a', '#e8503a', '#7a5ae0'],
    description: '本章主题色（序号、贴纸、高亮）。' },
  { key: 'imageSlotCount', label: '图片数量', type: 'number', default: 0, min: 0, max: 2, step: 1, unit: ' 张',
    description: '右侧图片槽数量（0 时背景巨字铺满，布局自动适配）。' },
  { key: 'imageFit', label: '图片填充', type: 'select', default: 'cover',
    options: [{ value: 'cover', label: '裁剪填满' }, { value: 'contain', label: '完整自适应' }],
    description: '图片填充方式。' },
  { key: 'images', label: '图片', type: 'images', countKey: 'imageSlotCount',
    description: '上传图片（数量由「图片数量」控制），槽位自适应图片比例。' },
  { key: 'showCaption', label: '装饰文案', type: 'boolean', default: true,
    description: '底部 */ … /* 说明文案的显示。' },
];

function Sticker({ label, color, on, i }) {
  const tilt = (i % 2 === 0 ? -1 : 1) * (1.5 + (i % 3));
  return (
    <span style={{
      display: 'inline-block', padding: on ? '14px 30px' : '12px 26px', borderRadius: 14,
      fontSize: on ? 34 : 30, fontWeight: on ? 900 : 700, whiteSpace: 'nowrap',
      letterSpacing: '.01em', transform: `rotate(${tilt}deg)`,
      background: on ? color : 'rgba(255,255,255,.72)',
      color: on ? '#fff' : 'var(--aip-ink)',
      border: `1px solid ${on ? hexA(color, 0.5) : 'rgba(255,255,255,.85)'}`,
      boxShadow: on
        ? `0 18px 40px ${hexA(color, 0.36)}`
        : '0 1px 0 rgba(255,255,255,.7) inset, 0 12px 30px rgba(70,72,100,.14)',
    }}>{label}</span>
  );
}

function ImageArea({ count, images, fit }) {
  const mode = fit === 'contain' ? 'auto' : 'fill';
  const slot = (i, style) => (
    <ImageSlot key={i} slot={i} src={images[i] || ''} placeholder={`图片 ${i + 1}`} fit={fit}
      ratioMode={count === 1 ? mode : 'fill'} accent="#5b8def" radius={24} style={style} />
  );
  if (count === 1) return <div style={{ height: '100%', display: 'flex', alignItems: 'center' }}>{slot(0, { height: fit === 'contain' ? 'auto' : '100%', maxHeight: '100%' })}</div>;
  return <div style={{ display: 'flex', flexDirection: 'column', gap: 22, height: '100%' }}>{slot(0, { flex: 1 })}{slot(1, { flex: 1 })}</div>;
}

export default function SlideChapter(props) {
  const p = { ...defaultProps, ...props };
  const ac = p.accentColor;
  const topics = p.topics.slice(0, Math.max(0, Math.min(5, p.topicCount)));
  const hasImg = p.imageSlotCount > 0;
  const titleFontSize = hasImg ? 126 : 150;

  return (
    <SlideFrame bg="b">
      {/* oversized ghost index — purely decorative, behind everything */}
      {p.showGhost && !hasImg && (
        <div style={{
          position: 'absolute', right: -40, bottom: -200, zIndex: 0, pointerEvents: 'none',
          fontFamily: "'Space Mono', monospace", fontWeight: 700, fontSize: 940, lineHeight: 0.8,
          color: hexA(ac, 0.10), letterSpacing: '-.04em', userSelect: 'none',
        }}>{p.index}</div>
      )}

      <div style={{ position: 'relative', zIndex: 1, flex: 1, display: 'flex', gap: 70, minHeight: 0 }}>
        {/* left column */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', minWidth: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
            <Tag tone="red" style={{ background: ac }}># {p.kicker}</Tag>
            <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 26, letterSpacing: '.22em', color: hexA(ac, 0.9), fontWeight: 700 }}>{p.partLabel}</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'flex-end', gap: hasImg ? 24 : 30, marginTop: 30, minWidth: 0 }}>
            <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 200, fontWeight: 700, lineHeight: 0.82, color: ac, letterSpacing: '-.04em' }}>{p.index}</span>
            <h2 style={{ margin: 0, fontSize: titleFontSize, fontWeight: 900, lineHeight: 0.92, letterSpacing: '.01em', color: 'var(--aip-ink)', whiteSpace: hasImg ? 'nowrap' : 'normal' }}>{p.title}</h2>
          </div>

          <div style={{ marginTop: 22, fontFamily: "'Space Mono', monospace", textTransform: 'uppercase', letterSpacing: '.16em', fontSize: 30, color: 'var(--aip-ink-3)' }}>{p.en}</div>

          <p style={{ margin: '24px 0 0', maxWidth: 920, fontSize: 32, lineHeight: 1.5, color: 'var(--aip-ink-2)', fontWeight: 500, textWrap: 'pretty' }}>{p.desc}</p>

          {topics.length > 0 && (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 18, marginTop: 40, alignItems: 'center' }}>
              {topics.map((t, i) => (
                <Sticker key={i} label={t.label} color={ac} i={i} on={p.highlight && i === p.highlightIndex} />
              ))}
            </div>
          )}

          {p.showCaption && <MonoCaption style={{ marginTop: 40 }}>{p.caption}</MonoCaption>}
        </div>

        {/* right column — adaptive images */}
        {hasImg && (
          <div style={{ flex: '0 0 620px', minWidth: 0 }}>
            <ImageArea count={Math.min(2, p.imageSlotCount)} images={p.images} fit={p.imageFit} />
          </div>
        )}
      </div>
    </SlideFrame>
  );
}
