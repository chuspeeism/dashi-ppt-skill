// SlideImageFeature.jsx — 图片特写 / full-bleed image feature.
// Migration-safe: default export + defaultProps + controls; props-only; aip- scope.
// A single hero image paired with an editorial column: one oversized hero number,
// a fluorescent-marked lead line and a row of secondary stat stickers. Three
// layouts (image right / left / behind-overlay) and graceful 0-image fallback.
import React from 'react';
import { SlideFrame, MonoCaption, ImageSlot, CollageImageArea, hexA } from './SlideKit.jsx';

export const defaultProps = {
  kicker: '横向透视 · 地区分布',
  title: '旧金山湾区地理城河',
  en: 'The Geographic Moat',
  lead: '人才、资本与算力的虹吸效应不断自我强化，短期内难以撼动。',
  highlightWord: '虹吸效应',
  bigStat: { value: '63.9', unit: '%', label: '湾区占全美 AI 大额融资' },
  stats: [
    { value: '12.4', unit: '%', label: '纽约' },
    { value: '9.8', unit: '%', label: '西雅图' },
    { value: '7.7', unit: '%', label: '波士顿' },
  ],
  images: ['', '', ''],
  caption: '图片特写 · 资本为何如此集中',
  // tweakable (universal names)
  imageSlotCount: 1,
  imageFit: 'cover',
  imageLayout: 'normal',
  layout: 'split-right',
  statCount: 3,
  highlight: true,
  showHighlighter: true,
  accentColor: '#5b8def',
  showCaption: true,
};

export const controls = [
  { key: 'imageSlotCount', label: '图片数量', type: 'number', default: 1, min: 0, max: 3, step: 1, unit: ' 张',
    description: '特写图片槽数量（0 时自动切换为纯文字大留白构图）；常规与拼贴版式都会按数量重排。' },
  { key: 'imageFit', label: '图片填充', type: 'select', default: 'cover',
    options: [{ value: 'cover', label: '裁剪填满' }, { value: 'contain', label: '完整自适应' }],
    description: '图片填充方式：裁剪填满铺满版面，完整自适应按原始比例显示。' },
  { key: 'imageLayout', label: '图片版式', type: 'select', default: 'normal',
    options: [{ value: 'normal', label: '常规特写' }, { value: 'collage', label: '叠放拼贴' }],
    description: '常规：整齐特写排布；叠放拼贴：多张图片倾斜叠压、白边浮起的拼贴效果。' },
  { key: 'images', label: '图片', type: 'images', countKey: 'imageSlotCount',
    description: '上传特写图片，槽位自适应图片比例不变形。' },
  { key: 'layout', label: '版式', type: 'select', default: 'split-right',
    options: [{ value: 'split-right', label: '图右文左' }, { value: 'split-left', label: '图左文右' }, { value: 'overlay', label: '满版叠字' }],
    description: '图文版式：左右分栏或满版图片叠加文字。' },
  { key: 'statCount', label: '副指标数量', type: 'number', default: 3, min: 0, max: 3, step: 1, unit: ' 个',
    description: '主数字下方的副统计贴纸数量。' },
  { key: 'highlight', label: '主数字强调', type: 'boolean', default: true,
    description: '是否给主数字加荧光描边强调。' },
  { key: 'showHighlighter', label: '荧光高亮', type: 'boolean', default: true,
    description: '是否给说明句关键词加荧光底纹。' },
  { key: 'accentColor', label: '主题色', type: 'color', default: '#5b8def',
    options: ['#5b8def', '#46b083', '#e0a23a', '#e8503a', '#7a5ae0', '#c9f24d'],
    description: '主数字、荧光与强调描边的颜色。' },
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
function Marked({ text, word, color, on }) {
  if (!word || !on || !String(text).includes(word)) return <span>{text}</span>;
  const i = text.indexOf(word);
  const mark = { background: `linear-gradient(180deg, transparent 0 44%, ${hexA(color, 0.4)} 44% 94%, transparent 94%)`,
    padding: '0 .08em', borderRadius: 4, fontWeight: 800, color: 'var(--aip-ink)' };
  return <span>{text.slice(0, i)}<span style={mark}>{word}</span>{text.slice(i + word.length)}</span>;
}

function TextCol({ p, ac, onLight }) {
  const ink = onLight ? '#fff' : 'var(--aip-ink)';
  const ink2 = onLight ? 'rgba(255,255,255,.86)' : 'var(--aip-ink-2)';
  const secs = (p.stats || []).slice(0, Math.max(0, Math.min(3, p.statCount)));
  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', minWidth: 0,
      zIndex: 2, maxWidth: p.layout === 'overlay' ? 1080 : undefined }}>
      <div style={{ display: 'inline-flex', alignSelf: 'flex-start', alignItems: 'center', gap: 12, padding: '11px 24px',
        borderRadius: 13, background: '#23232a', transform: 'rotate(-1.2deg)', boxShadow: '0 12px 28px rgba(20,20,28,.3)' }}>
        <span style={{ width: 14, height: 14, borderRadius: 4, background: ac }} />
        <span style={{ fontSize: 27, fontWeight: 800, letterSpacing: '.04em', color: '#fff', whiteSpace: 'nowrap' }}># {p.kicker}</span>
      </div>

      <h2 style={{ margin: '26px 0 0', fontSize: 92, fontWeight: 900, lineHeight: 1.02, letterSpacing: '.01em',
        color: ink, textWrap: 'pretty', textShadow: onLight ? '0 2px 24px rgba(0,0,0,.35)' : 'none' }}>{p.title}</h2>
      <div style={{ marginTop: 14, fontFamily: "'Space Mono', monospace", textTransform: 'uppercase', letterSpacing: '.16em',
        fontSize: 28, color: onLight ? 'rgba(255,255,255,.7)' : 'var(--aip-ink-3)' }}>{p.en}</div>

      <div style={{ display: 'flex', alignItems: 'baseline', gap: 14, marginTop: 30 }}>
        <span style={{ fontSize: 188, fontWeight: 900, lineHeight: 0.9, letterSpacing: '-.02em', color: p.highlight ? ac : ink,
          textShadow: onLight ? '0 4px 30px rgba(0,0,0,.4)' : 'none' }}>{p.bigStat.value}</span>
        <span style={{ fontSize: 64, fontWeight: 900, color: ac }}>{p.bigStat.unit}</span>
      </div>
      <div style={{ fontSize: 30, fontWeight: 700, color: ink2, marginTop: 2 }}>{p.bigStat.label}</div>

      <p style={{ margin: '22px 0 0', maxWidth: 760, fontSize: 31, lineHeight: 1.5, color: ink2, fontWeight: 500, textWrap: 'pretty' }}>
        <Marked text={p.lead} word={p.highlightWord} color={ac} on={p.showHighlighter} />
      </p>

      {secs.length > 0 && (
        <div style={{ display: 'flex', gap: 16, marginTop: 32, flexWrap: 'wrap' }}>
          {secs.map((s, i) => (
            <div key={i} style={{ padding: '16px 26px', borderRadius: 16, transform: `rotate(${i % 2 ? 1.2 : -1.2}deg)`,
              background: onLight ? 'rgba(255,255,255,.92)' : 'rgba(255,255,255,.66)',
              border: '1px solid rgba(255,255,255,.85)', boxShadow: '0 14px 32px rgba(70,72,100,.18)' }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 4 }}>
                <span style={{ fontSize: 46, fontWeight: 900, color: 'var(--aip-ink)', lineHeight: 1 }}>{s.value}</span>
                <span style={{ fontSize: 26, fontWeight: 800, color: 'var(--aip-ink-3)' }}>{s.unit}</span>
              </div>
              <div style={{ fontSize: 24, color: 'var(--aip-ink-2)', fontWeight: 600, marginTop: 4, whiteSpace: 'nowrap' }}>{s.label}</div>
            </div>
          ))}
        </div>
      )}

      {p.showCaption && <MonoCaption style={{ marginTop: 36, color: onLight ? 'rgba(255,255,255,.7)' : undefined }}>{p.caption}</MonoCaption>}
    </div>
  );
}

function RegularImageArea({ count, images, fit, accent }) {
  const n = Math.max(1, Math.min(3, count));
  const mode = fit === 'contain' ? 'auto' : 'fill';
  const slot = (i, style) => (
    <ImageSlot key={i} slot={i} src={images[i] || ''} placeholder={`特写图片 ${i + 1}`} fit={fit}
      ratioMode={n === 1 ? mode : 'fill'} accent={accent} radius={24} style={style} />
  );
  if (n === 1) {
    return (
      <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center' }}>
        {slot(0, { height: fit === 'contain' ? 'auto' : '100%' })}
      </div>
    );
  }
  if (n === 2) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 22, height: '100%' }}>
        {slot(0, { flex: 1 })}
        {slot(1, { flex: 1 })}
      </div>
    );
  }
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 22, height: '100%' }}>
      {slot(0, { flex: 1.35 })}
      <div style={{ display: 'flex', gap: 22, flex: 1 }}>
        {slot(1, { flex: 1 })}
        {slot(2, { flex: 1 })}
      </div>
    </div>
  );
}

export default function SlideImageFeature(props) {
  const p = { ...defaultProps, ...props };
  const ac = p.accentColor;
  const hasImg = p.imageSlotCount > 0;
  const collage = hasImg && p.imageLayout === 'collage';
  const overlay = hasImg && p.layout === 'overlay' && !collage;

  if (overlay) {
    return (
      <SlideFrame bg="a">
        <div style={{ position: 'absolute', inset: 0 }}>
          <ImageSlot slot={0} src={p.images[0] || ''} placeholder="特写图片 · 满版" fit={p.imageFit}
            ratioMode="fill" accent="#5b8def" radius={0} style={{ height: '100%', borderRadius: 0, border: 'none' }} />
          <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', background: 'linear-gradient(90deg, rgba(18,18,26,.74) 0%, rgba(18,18,26,.4) 52%, rgba(18,18,26,.05) 100%)' }} />
        </div>
        <div style={{ position: 'absolute', inset: 0, padding: 'var(--aip-pad-top) var(--aip-pad-x) var(--aip-pad-bottom)', display: 'flex' }}>
          <TextCol p={p} ac={ac} onLight />
        </div>
      </SlideFrame>
    );
  }

  const imgLeft = p.layout === 'split-left';
  const imgCol = hasImg ? (
    collage ? (
      <div style={{ flex: '0 0 44%', minWidth: 0, display: 'flex', alignItems: 'center' }}>
        <div style={{ width: '100%', height: '86%' }}>
          <CollageImageArea count={Math.min(3, p.imageSlotCount)} images={p.images} fit={p.imageFit} accent={ac} />
        </div>
      </div>
    ) : (
      <div style={{ flex: '0 0 41%', minWidth: 0 }}>
        <RegularImageArea count={p.imageSlotCount} images={p.images} fit={p.imageFit} accent={ac} />
      </div>
    )
  ) : null;

  return (
    <SlideFrame bg="a">
      <div style={{ position: 'absolute', inset: 0, padding: 'var(--aip-pad-top) var(--aip-pad-x) var(--aip-pad-bottom)',
        display: 'flex', gap: 64, alignItems: 'stretch' }}>
        {imgLeft && imgCol}
        <TextCol p={p} ac={ac} onLight={false} />
        {!imgLeft && imgCol}
      </div>
    </SlideFrame>
  );
}
