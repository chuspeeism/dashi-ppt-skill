// SlideVersus.jsx — 横向对比 / N-way comparison matrix.
// Migration-safe: default export + defaultProps + controls; props-only; aip- scope.
// 版式：SlideHead + 对比矩阵——左侧属性标签列 + N 个公司「竖卡」（表头 + 逐行取值）。
// 每个公司有自己的主题色；可高亮其中一列；表头支持可选 logo 图片槽（自适应比例）。
import React from 'react';
import { SlideFrame, SlideHead, MonoCaption, ImageSlot, hexA } from './SlideKit.jsx';

export const defaultProps = {
  kicker: '# 典型案例',
  title: '通用大模型三强 · 横向对比',
  en: 'Foundation-Model Leaders, Head to Head',
  cn: 'OpenAI × Anthropic × xAI',
  companies: [
    { name: 'OpenAI', role: '先行者 · 规模领先', color: '#5b8def' },
    { name: 'Anthropic', role: '宪法式 AI · 企业信任', color: '#46b083' },
    { name: 'xAI', role: 'X 实时数据 · Grok', color: '#7a5ae0' },
  ],
  attributes: [
    { label: '单笔最大融资', values: ['66 亿', '65 亿', '50 亿'] },
    { label: '成立年份', values: ['2015', '2021', '2023'] },
    { label: '差异化定位', values: ['通用 AGI · 生态先发', '安全对齐 · 云巨头绑定', '实时社交数据 · 无审查'] },
    { label: '资本看点', values: ['收入与算力成本博弈', '估值 9650 亿 · 已递交 IPO', '18 个月跻身头部梯队'] },
  ],
  images: ['', '', ''],
  caption: '横向对比 · 三强同台，路径各异（融资单位：亿美元）',
  // tweakable
  itemCount: 3,
  rowCount: 4,
  highlight: true,
  highlightIndex: 1,
  accentColor: '#46b083',
  imageSlotCount: 0,
  imageFit: 'contain',
  showCaption: true,
};

export const controls = [
  { key: 'itemCount', label: '对比对象数量', type: 'number', default: 3, min: 2, max: 3, step: 1, unit: ' 个',
    description: '参与横向对比的对象（公司）数量。' },
  { key: 'rowCount', label: '对比维度数量', type: 'number', default: 4, min: 2, max: 4, step: 1, unit: ' 项',
    description: '对比的属性行数量。' },
  { key: 'highlight', label: '重点强调', type: 'boolean', default: true,
    description: '是否高亮强调其中一个对象（整列着色）。' },
  { key: 'highlightIndex', label: '强调第几个', type: 'number', default: 1, min: 0, max: 2, step: 1,
    description: '被强调的对象序号（从 0 开始）。' },
  { key: 'accentColor', label: '强调色', type: 'color', default: '#46b083',
    options: ['#46b083', '#5b8def', '#e0a23a', '#e8503a', '#7a5ae0'],
    description: '被强调列的着色。' },
  { key: 'imageSlotCount', label: 'Logo 数量', type: 'number', default: 0, min: 0, max: 1, step: 1, unit: ' 个',
    description: '表头 logo 图片槽数量（0 时用首字母色块代替）。' },
  { key: 'imageFit', label: '图片填充', type: 'select', default: 'contain',
    options: [{ value: 'contain', label: '完整自适应' }, { value: 'cover', label: '裁剪填满' }],
    description: 'logo 填充方式（通常用「完整自适应」避免裁切）。' },
  { key: 'images', label: 'Logo 图片', type: 'images', countKey: 'imageSlotCount',
    description: '上传各对象的 logo，槽位自适应比例不变形。' },
  { key: 'showCaption', label: '装饰文案', type: 'boolean', default: true,
    description: '底部 */ … /* 说明文案的显示。' },
];

const HEADER_H = 168;

export default function SlideVersus(props) {
  const p = { ...defaultProps, ...props };
  const n = Math.max(2, Math.min(3, p.itemCount));
  const companies = p.companies.slice(0, n);
  const rows = p.attributes.slice(0, Math.max(2, Math.min(4, p.rowCount)));
  const hasLogo = p.imageSlotCount > 0;

  return (
    <SlideFrame bg="a">
      <SlideHead kicker={p.kicker} tone="violet" title={p.title} en={p.en} cn={p.cn} />

      <div style={{ flex: 1, display: 'flex', gap: 22, marginTop: 18, minHeight: 0 }}>
        {/* 左侧属性标签列 */}
        <div style={{ flex: '0 0 230px', display: 'flex', flexDirection: 'column' }}>
          <div style={{ height: HEADER_H, flex: '0 0 auto' }} />
          {rows.map((r, i) => (
            <div key={i} style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'flex-end',
              paddingRight: 20, textAlign: 'right' }}>
              <span style={{ fontSize: 27, fontWeight: 800, color: 'var(--aip-ink-2)', lineHeight: 1.2 }}>{r.label}</span>
            </div>
          ))}
        </div>

        {/* N 个公司竖卡 */}
        {companies.map((co, ci) => {
          const on = p.highlight && ci === p.highlightIndex;
          const c = on ? p.accentColor : co.color;
          return (
            <div key={ci} style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column',
              borderRadius: 24, overflow: 'hidden',
              background: on ? `linear-gradient(180deg, ${hexA(c, 0.16)}, ${hexA(c, 0.04)})` : 'rgba(255,255,255,.5)',
              border: `1px solid ${on ? hexA(c, 0.5) : 'rgba(255,255,255,.78)'}`,
              backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)',
              boxShadow: on ? `0 26px 58px ${hexA(c, 0.24)}` : '0 1px 0 rgba(255,255,255,.7) inset, 0 18px 44px rgba(70,72,100,.12)' }}>

              {/* 表头 */}
              <div style={{ height: HEADER_H, flex: '0 0 auto', display: 'flex', alignItems: 'center', gap: 18,
                padding: '0 28px', background: on ? hexA(c, 0.16) : 'rgba(255,255,255,.4)',
                borderBottom: `2px solid ${hexA(c, on ? 0.5 : 0.3)}` }}>
                {hasLogo ? (
                  <div style={{ flex: '0 0 auto', width: 72, height: 72 }}>
                    <ImageSlot slot={ci} src={p.images[ci] || ''} placeholder={co.name} fit={p.imageFit}
                      ratioMode="fill" accent={c} radius={16} style={{ height: '100%' }} />
                  </div>
                ) : (
                  <span style={{ flex: '0 0 auto', width: 64, height: 64, borderRadius: 18, background: c, color: '#fff',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 36, fontWeight: 900,
                    boxShadow: `0 12px 28px ${hexA(c, 0.4)}` }}>{co.name.slice(0, 1)}</span>
                )}
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontSize: 40, fontWeight: 900, color: 'var(--aip-ink)', lineHeight: 1.05 }}>{co.name}</div>
                  <div style={{ marginTop: 6, fontSize: 23, color: hexA(c, 0.95), fontWeight: 700, lineHeight: 1.2, textWrap: 'pretty' }}>{co.role}</div>
                </div>
              </div>

              {/* 逐行取值 */}
              {rows.map((r, ri) => (
                <div key={ri} style={{ flex: 1, display: 'flex', alignItems: 'center', padding: '0 28px',
                  borderTop: ri === 0 ? 'none' : `1px solid ${hexA('#2b2b30', 0.1)}` }}>
                  <span style={{ fontSize: ri < 2 ? 38 : 27, fontWeight: ri < 2 ? 900 : 600,
                    color: ri < 2 ? (on ? c : 'var(--aip-ink)') : 'var(--aip-ink-2)', lineHeight: 1.3, textWrap: 'pretty' }}>
                    {r.values[ci]}
                  </span>
                </div>
              ))}
            </div>
          );
        })}
      </div>

      <MonoCaption show={p.showCaption} style={{ marginTop: 14 }}>{p.caption}</MonoCaption>
    </SlideFrame>
  );
}
