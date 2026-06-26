// SlideFeaturePoints.jsx — 要点 / image + numbered key-points.
// Migration-safe: default export + defaultProps + controls; props-only; aip- scope.
// An adaptive image column (0–2 slots, ratio-aware) paired with numbered point
// cards; one point can be promoted. Layout collapses gracefully to full-width
// points when no image is supplied. Sticker/glass visual system.
import React from 'react';
import { SlideFrame, SlideHead, MonoCaption, ImageSlot, CollageImageArea, hexA } from './SlideKit.jsx';

export const defaultProps = {
  kicker: '# 典型案例',
  title: '核心竞争力 · Anthropic',
  en: 'What Sets It Apart',
  cn: '为何能从追赶到反超',
  points: [
    { h: '安全对齐 · 信任壁垒', d: '技术路线聚焦「安全对齐」，在企业客户中建立长期信任优势。', color: '#5b8def' },
    { h: 'Claude 模型能力', d: 'Claude 系列在代码生成、长文本理解等任务上表现突出。', color: '#46b083' },
    { h: '云巨头深度合作', d: '与 Amazon、Google 等云巨头深度绑定，渠道覆盖迅速。', color: '#e0a23a' },
    { h: '企业场景渗透', d: '通过 API、Team 与企业版产品切入高价值工作流，形成可持续收入闭环。', color: '#e8503a' },
  ],
  images: ['', ''],
  caption: '要点 · 三条护城河支撑估值反超',
  // tweakable (universal names)
  pointCount: 3,
  highlight: true,
  highlightIndex: 0,
  imageSlotCount: 1,
  imageFit: 'cover',
  imageLayout: 'normal',
  imageSide: 'left',
  accentColor: '#7a5ae0',
  showCaption: true,
};

export const controls = [
  { key: 'pointCount', label: '要点数量', type: 'number', default: 3, min: 1, max: 4, step: 1, unit: ' 条',
    description: '展示的要点卡数量。' },
  { key: 'highlight', label: '重点强调', type: 'boolean', default: true,
    description: '是否高亮强调其中一条要点。' },
  { key: 'highlightIndex', label: '强调第几条', type: 'number', default: 0, min: 0, max: 3, step: 1,
    description: '被强调的要点序号（从 0 开始）。' },
  { key: 'imageSlotCount', label: '图片数量', type: 'number', default: 1, min: 0, max: 2, step: 1, unit: ' 张',
    description: '图片槽数量（0 时要点占满整页，布局自动适配）。' },
  { key: 'imageFit', label: '图片填充', type: 'select', default: 'cover',
    options: [{ value: 'cover', label: '裁剪填满' }, { value: 'contain', label: '完整自适应' }],
    description: '图片填充方式：裁剪填满构图统一，完整自适应按原始比例显示。' },
  { key: 'images', label: '图片', type: 'images', countKey: 'imageSlotCount',
    description: '上传图片（数量由「图片数量」控制），槽位自适应图片比例。' },
  { key: 'imageSide', label: '图片位置', type: 'select', default: 'left',
    options: [{ value: 'left', label: '图左文右' }, { value: 'right', label: '图右文左' }],
    description: '图片相对要点的位置。' },
  { key: 'imageLayout', label: '图片版式', type: 'select', default: 'normal',
    options: [{ value: 'normal', label: '常规排布' }, { value: 'collage', label: '叠放拼贴' }],
    description: '常规：整齐排布；叠放拼贴：图片倾斜叠压、白边浮起的拼贴效果。' },
  { key: 'accentColor', label: '主题色', type: 'color', default: '#7a5ae0',
    options: ['#7a5ae0', '#5b8def', '#46b083', '#e0a23a', '#e8503a'],
    description: '序号徽标与强调要点的颜色。' },
  { key: 'showCaption', label: '装饰文案', type: 'boolean', default: true,
    description: '底部 */ … /* 说明文案的显示。' },
];

function ImageArea({ count, images, fit }) {
  const mode = fit === 'contain' ? 'auto' : 'fill';
  const slot = (i, style) => (
    <ImageSlot key={i} slot={i} src={images[i] || ''} placeholder={`图片 ${i + 1}`} fit={fit}
      ratioMode={count === 1 ? mode : 'fill'} accent="#7a5ae0" radius={24} style={style} />
  );
  if (count === 1) return <div style={{ height: '100%', display: 'flex', alignItems: 'center' }}>{slot(0, { height: fit === 'contain' ? 'auto' : '100%', maxHeight: '100%' })}</div>;
  return <div style={{ display: 'flex', flexDirection: 'column', gap: 22, height: '100%' }}>{slot(0, { flex: 1 })}{slot(1, { flex: 1 })}</div>;
}

export default function SlideFeaturePoints(props) {
  const p = { ...defaultProps, ...props };
  const ac = p.accentColor;
  const pts = p.points.slice(0, Math.max(1, Math.min(4, p.pointCount)));
  const hasImg = p.imageSlotCount > 0;
  const imgLeft = p.imageSide === 'left';

  const imgCol = hasImg ? (
    <div style={{ flex: '0 0 40%', minWidth: 0 }}>
      {p.imageLayout === 'collage'
        ? <CollageImageArea count={Math.min(2, p.imageSlotCount)} images={p.images} fit={p.imageFit} accent={ac} />
        : <ImageArea count={Math.min(2, p.imageSlotCount)} images={p.images} fit={p.imageFit} />}
    </div>
  ) : null;

  const pointsCol = (
    <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 18 }}>
      {pts.map((pt, i) => {
        const on = p.highlight && i === p.highlightIndex;
        const c = on ? ac : pt.color;
        return (
          <div key={i} style={{
            display: 'flex', alignItems: 'center', gap: 26, padding: '24px 30px', borderRadius: 20,
            background: on ? `linear-gradient(120deg, ${hexA(c, 0.16)}, ${hexA(c, 0.05)})` : 'rgba(255,255,255,.55)',
            border: `1px solid ${on ? hexA(c, 0.5) : 'rgba(255,255,255,.75)'}`,
            boxShadow: on ? `0 20px 46px ${hexA(c, 0.22)}` : '0 1px 0 rgba(255,255,255,.7) inset, 0 14px 34px rgba(70,72,100,.12)',
          }}>
            <span style={{ flex: '0 0 auto', width: 70, height: 70, borderRadius: 18, background: c, color: '#fff',
              display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Space Mono', monospace",
              fontSize: 34, fontWeight: 700, transform: `rotate(${i % 2 ? 2 : -2}deg)`, boxShadow: `0 14px 30px ${hexA(c, 0.4)}` }}>
              {String(i + 1).padStart(2, '0')}
            </span>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 34, fontWeight: 800, color: 'var(--aip-ink)' }}>{pt.h}</div>
              <div style={{ marginTop: 6, fontSize: 27, lineHeight: 1.45, color: 'var(--aip-ink-2)', fontWeight: 500, textWrap: 'pretty' }}>{pt.d}</div>
            </div>
          </div>
        );
      })}
    </div>
  );

  return (
    <SlideFrame bg="a">
      <SlideHead kicker={p.kicker} tone="violet" title={p.title} en={p.en} cn={p.cn} />
      <div style={{ flex: 1, display: 'flex', gap: 56, minHeight: 0, marginTop: 14, alignItems: 'stretch' }}>
        {imgLeft && imgCol}
        {pointsCol}
        {!imgLeft && imgCol}
      </div>
      <MonoCaption show={p.showCaption}>{p.caption}</MonoCaption>
    </SlideFrame>
  );
}
