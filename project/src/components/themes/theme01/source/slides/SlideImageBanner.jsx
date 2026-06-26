// SlideImageBanner.jsx — 满版图片横幅 / image-forward full-bleed banner.
// Migration-safe: default export + defaultProps + controls; props-only; aip- scope.
// Unlike SlideImageFeature (text-column dominant), HERE THE IMAGE IS THE HERO:
// it bleeds edge-to-edge and a single restrained glass "label plate" floats over
// it (magazine-cover plate). One hero image, or a two-up split, each slot
// adapting to the uploaded image's ratio (cover crop / contain) with no warp. A
// soft scrim keeps the plate legible over any photo. Plate position / stat count
// / highlight / accent are tweakable; text lives in defaultProps.
import React from 'react';
import { SlideFrame, ImageSlot, MonoCaption, hexA } from './SlideKit.jsx';
import UnicornBackground, { UNICORN_BACKGROUND_CONTROL, createUnicornSceneControl } from '../../../unicorn-background.jsx';

export const defaultProps = {
  kicker: '前沿赛道 · 具身智能',
  title: '从模型，走向物理世界',
  en: 'Embodied AI',
  cn: 'AI 的下一个战场：让智能拥有身体',
  lead: '当大模型在屏幕里日趋成熟，资本开始押注「具身智能」——人形机器人把算法装进可以行动的躯体。',
  highlightWord: '具身智能',
  stats: [
    { value: '6.8', unit: '亿', label: 'Figure AI 单笔融资' },
    { value: 'Top 6', unit: '', label: '跻身年度单笔前六' },
    { value: '硬科技', unit: '', label: '需长周期技术积累' },
  ],
  images: ['', ''],
  caption: '满版图片 · 资本下注的下一个战场',
  // tweakable (universal names)
  imageSlotCount: 1,
  imageFit: 'cover',
  backgroundMode: 'unicorn',
  unicornScene: 'tech',
  plate: 'bottom-left',
  statCount: 3,
  highlight: true,
  highlightIndex: 0,
  showHighlighter: true,
  accentColor: '#7a5ae0',
  showCaption: true,
};

export const controls = [
  UNICORN_BACKGROUND_CONTROL,
  createUnicornSceneControl(defaultProps.unicornScene),
  { key: 'imageSlotCount', label: '图片数量', type: 'number', default: 1, min: 0, max: 2, step: 1, unit: ' 张',
    description: '满版图片槽数量：0 显示条纹占位、1 单张满版、2 左右双图（各自按比例自适应，不变形）。' },
  { key: 'imageFit', label: '图片填充', type: 'select', default: 'cover',
    options: [{ value: 'cover', label: '裁剪填满' }, { value: 'contain', label: '完整自适应' }],
    description: '图片填充方式：裁剪填满铺满版面，完整自适应按原始比例显示。' },
  { key: 'images', label: '图片', type: 'images', countKey: 'imageSlotCount',
    description: '上传满版图片，槽位自适应图片比例不变形。' },
  { key: 'plate', label: '信息卡位置', type: 'select', default: 'bottom-left',
    options: [{ value: 'bottom-left', label: '左下' }, { value: 'bottom-right', label: '右下' }, { value: 'center-left', label: '左侧居中' }],
    description: '浮层玻璃信息卡在画面中的落位。' },
  { key: 'statCount', label: '指标数量', type: 'number', default: 3, min: 0, max: 3, step: 1, unit: ' 个',
    description: '信息卡底部统计胶囊的数量。' },
  { key: 'highlight', label: '重点强调', type: 'boolean', default: true,
    description: '是否把其中一个指标渲染成实色荧光「印章」胶囊。' },
  { key: 'highlightIndex', label: '强调第几个', type: 'number', default: 0, min: 0, max: 2, step: 1,
    description: '被强调的指标序号（从 0 开始）。' },
  { key: 'showHighlighter', label: '荧光高亮', type: 'boolean', default: true,
    description: '是否给说明句关键词加荧光底纹。' },
  { key: 'accentColor', label: '主题色', type: 'color', default: '#7a5ae0',
    options: ['#7a5ae0', '#5b8def', '#46b083', '#e0a23a', '#e8503a', '#c9f24d'],
    description: '信息卡强调元素与荧光的颜色。' },
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
  const mark = { background: `linear-gradient(180deg, transparent 0 46%, ${hexA(color, 0.45)} 46% 96%, transparent 96%)`,
    padding: '0 .06em', fontWeight: 800 };
  return <span>{text.slice(0, i)}<span style={mark}>{word}</span>{text.slice(i + word.length)}</span>;
}

export default function SlideImageBanner(props) {
  const p = { ...defaultProps, ...props };
  const ac = p.accentColor;
  const useUnicorn = p.backgroundMode === 'unicorn';
  const cnt = Math.max(0, Math.min(2, p.imageSlotCount));
  const stats = (p.stats || []).slice(0, Math.max(0, Math.min(3, p.statCount)));

  // plate placement
  const pos = p.plate === 'bottom-right'
    ? { right: 92, bottom: 88, left: 'auto', top: 'auto' }
    : p.plate === 'center-left'
      ? { left: 92, top: 88, bottom: 88, right: 'auto', display: 'flex', alignItems: 'center' }
      : { left: 92, bottom: 88, right: 'auto', top: 'auto' };
  const scrimDir = p.plate === 'bottom-right' ? '300deg' : p.plate === 'center-left' ? '90deg' : '60deg';
  const plateWidth = p.plate === 'center-left' ? 760 : 880;

  return (
    <SlideFrame bg="a">
      {/* hero image(s) — full bleed */}
      <div style={{ position: 'absolute', inset: 0, display: 'flex', gap: cnt === 2 ? 6 : 0 }}>
        {useUnicorn ? (
          <UnicornBackground scene={p.unicornScene} accent={ac} />
        ) : cnt === 0 ? (
          <ImageSlot src="" placeholder="满版图片 · 人形机器人 / 工厂场景" fit={p.imageFit}
            ratioMode="fill" accent={ac} radius={0} style={{ height: '100%', borderRadius: 0, border: 'none' }} />
        ) : (
          Array.from({ length: cnt }).map((_, i) => (
            <div key={i} style={{ flex: 1, minWidth: 0 }}>
              <ImageSlot slot={i} src={p.images[i] || ''} placeholder={`满版图片 ${i + 1}`} fit={p.imageFit}
                ratioMode="fill" accent={ac} radius={0} style={{ height: '100%', borderRadius: 0, border: 'none' }} />
            </div>
          ))
        )}
      </div>

      {/* legibility scrim biased toward the plate */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none',
        background: `linear-gradient(${scrimDir}, rgba(16,16,24,.66) 0%, rgba(16,16,24,.32) 40%, rgba(16,16,24,0) 70%)` }} />

      {/* corner mono caption */}
      {p.showCaption && (
        <div style={{ position: 'absolute', top: 'var(--aip-pad-top)', right: 'var(--aip-pad-x)', zIndex: 3 }}>
          <MonoCaption style={{ color: 'rgba(255,255,255,.78)' }}>{p.caption}</MonoCaption>
        </div>
      )}

      {/* floating glass label plate */}
      <div style={{ position: 'absolute', zIndex: 3, width: plateWidth, maxWidth: 'calc(100% - 184px)', ...pos }}>
        <div style={{
          padding: '40px 46px 38px', borderRadius: 28,
          background: 'rgba(22,22,30,.46)', backdropFilter: 'blur(30px) saturate(140%)',
          WebkitBackdropFilter: 'blur(30px) saturate(140%)',
          border: '1px solid rgba(255,255,255,.22)',
          boxShadow: '0 1px 0 rgba(255,255,255,.25) inset, 0 30px 70px rgba(0,0,0,.4)',
        }}>
          {/* sticker kicker */}
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 12, padding: '10px 22px', borderRadius: 13,
            background: '#fff', transform: 'rotate(-1.2deg)', boxShadow: '0 12px 28px rgba(0,0,0,.3)' }}>
            <span style={{ width: 13, height: 13, borderRadius: 4, background: ac }} />
            <span style={{ fontSize: 26, fontWeight: 800, letterSpacing: '.04em', color: '#23232a', whiteSpace: 'nowrap' }}># {p.kicker}</span>
          </span>

          <h2 style={{ margin: '24px 0 0', fontSize: 88, fontWeight: 900, lineHeight: 1.02, letterSpacing: '.01em',
            color: '#fff', textWrap: 'pretty', textShadow: '0 2px 20px rgba(0,0,0,.4)' }}>{p.title}</h2>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 18, marginTop: 14, flexWrap: 'wrap' }}>
            <span style={{ fontFamily: "'Space Mono', monospace", textTransform: 'uppercase', letterSpacing: '.16em', fontSize: 26, color: 'rgba(255,255,255,.72)' }}>{p.en}</span>
            <span style={{ fontSize: 30, fontWeight: 700, color: 'rgba(255,255,255,.9)' }}>{p.cn}</span>
          </div>

          <p style={{ margin: '22px 0 0', maxWidth: 780, fontSize: 30, lineHeight: 1.5, fontWeight: 500,
            color: 'rgba(255,255,255,.92)', textWrap: 'pretty' }}>
            <Marked text={p.lead} word={p.highlightWord} color={ac} on={p.showHighlighter} />
          </p>

          {stats.length > 0 && (
            <div style={{ display: 'flex', gap: 14, marginTop: 30, flexWrap: 'wrap' }}>
              {stats.map((s, i) => {
                const on = p.highlight && i === p.highlightIndex;
                const fg = on ? readableOn(ac) : '#fff';
                return (
                  <div key={i} style={{ padding: '14px 24px', borderRadius: 16, transform: `rotate(${i % 2 ? 1 : -1}deg)`,
                    background: on ? ac : 'rgba(255,255,255,.14)',
                    border: `1px solid ${on ? hexA(ac, 0.7) : 'rgba(255,255,255,.3)'}`,
                    boxShadow: on ? `0 16px 36px ${hexA(ac, 0.5)}` : '0 10px 26px rgba(0,0,0,.28)' }}>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: 5 }}>
                      <span style={{ fontSize: 44, fontWeight: 900, lineHeight: 1, color: fg }}>{s.value}</span>
                      {s.unit && <span style={{ fontSize: 25, fontWeight: 800, color: on ? hexA(fg === '#ffffff' ? '#fff' : '#23232a', 0.85) : 'rgba(255,255,255,.78)' }}>{s.unit}</span>}
                    </div>
                    <div style={{ fontSize: 23, fontWeight: 600, marginTop: 4, whiteSpace: 'nowrap',
                      color: on ? hexA(fg === '#ffffff' ? '#fff' : '#23232a', 0.85) : 'rgba(255,255,255,.82)' }}>{s.label}</div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </SlideFrame>
  );
}
