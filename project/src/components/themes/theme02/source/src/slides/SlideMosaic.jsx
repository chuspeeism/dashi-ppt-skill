/**
 * SlideMosaic.jsx — 案例拼贴（图片页 · 杂志全幅）.
 * Independent, prop-driven. Renders its own theme styles.
 *
 * 满幅杂志式图片拼贴：图片按非对称网格平铺至整页，标题以磨砂浮层压在角上。
 * 图片槽位数量可调（0–5），不同数量自动切换为美观的拼贴构图；单图自适应
 * 原始比例，多图走 cover 网格保证整洁。图片以 props 传入，无预览运行时耦合。
 *
 * ── Props (see slideMosaicDefaults) ─────────────────────────────────────────
 *   kicker, title, titleEm, lead     strings
 *   imageCount   number   0–5 图片槽位（0 → 纯文字浮层）
 *   captions     string[] 每槽图注
 *   focusEnabled boolean  辉光强调某一张（accent 描边）
 *   focusIndex   number   0-based 被强调槽位
 *   showCaptions boolean  图注显隐
 *   titlePlacement 'tl' | 'bl' | 'tr'  标题浮层位置
 *   overlayStyle 'panel' | 'plain'  浮层是否带磨砂卡片底
 *   images       array    图片源（预览注入）
 *   onSlotActivate fn?     (i)=>void  填充槽位
 *   onSlotClear    fn?     (i)=>void  清空槽位
 */
import React from 'react';
import { ThemeStyle, THEME_CLASS, cx } from '../gxnTheme.js';
import { SlideHeader, MediaView, mediaItem } from '../gxnPrimitives.jsx';

export const slideMosaicDefaults = {
  kicker: 'GALLERY · 案例拼贴',
  title: '资本聚光下的 ',
  titleEm: '面孔与现场',
  lead: '模型、芯片、机器人、数据中心——把这一年最被资本追逐的现场拼在同一张版面里。',
  imageCount: 5,
  captions: [
    '大模型发布现场',
    'GPU 算力集群',
    '自动驾驶路测',
    '具身智能样机',
    '数据中心机房',
  ],
  focusEnabled: false,
  focusIndex: 0,
  showCaptions: true,
  titlePlacement: 'tl',
  overlayStyle: 'panel',
  images: [],
};

export const slideMosaicControls = [
  { key: 'imageCount', type: 'number', label: '图片数量', default: 5, min: 0, max: 5, step: 1,
    describe: '拼贴图片槽位数量（0 = 纯文字浮层）' },
  { key: 'titlePlacement', type: 'enum', label: '标题位置', default: 'tl',
    options: [
      { value: 'tl', label: '左上' },
      { value: 'bl', label: '左下' },
      { value: 'tr', label: '右上' },
    ],
    describe: '标题浮层贴靠的角落' },
  { key: 'overlayStyle', type: 'enum', label: '浮层样式', default: 'panel',
    options: [{ value: 'panel', label: '磨砂卡片' }, { value: 'plain', label: '直接压字' }],
    describe: '标题浮层是否带磨砂卡片底' },
  { key: 'focusEnabled', type: 'toggle', label: '重点强调', default: false,
    describe: '是否高亮其中一张图片' },
  { key: 'focusIndex', type: 'number', label: '强调项', default: 0, min: 0, step: 1,
    oneBased: true, maxFrom: (p) => Math.max(0, (p.imageCount || 1) - 1),
    visibleWhen: (p) => p.focusEnabled && p.imageCount > 0, describe: '被强调图片的序号' },
  { key: 'showCaptions', type: 'toggle', label: '图注', default: true,
    visibleWhen: (p) => p.imageCount > 0, describe: '显示/隐藏图片上的图注' },
];

/* Per-count grid templates (cols × rows) + each slot's grid-area placement.
   Asymmetric, magazine-like; every layout fills the full canvas. */
const LAYOUTS = {
  1: { cols: '1fr', rows: '1fr', areas: [[1, 1, 2, 2]] },
  2: { cols: '1.15fr 0.85fr', rows: '1fr', areas: [[1, 1, 2, 2], [1, 2, 2, 3]] },
  3: { cols: '1.3fr 1fr', rows: '1fr 1fr',
       areas: [[1, 1, 3, 2], [1, 2, 2, 3], [2, 2, 3, 3]] },
  4: { cols: '1.3fr 0.9fr 0.9fr', rows: '1fr 1fr',
       areas: [[1, 1, 3, 2], [1, 2, 2, 3], [1, 3, 2, 4], [2, 2, 3, 4]] },
  5: { cols: '1.25fr 0.95fr 0.95fr', rows: '1fr 1fr',
       areas: [[1, 1, 3, 2], [1, 2, 2, 3], [1, 3, 2, 4], [2, 2, 3, 3], [2, 3, 3, 4]] },
};

function MosaicSlot({ i, src, caption, showCaption, isFocus, onActivate, onClear, area }) {
  const [r1, c1, r2, c2] = area;
  const media = mediaItem(src);
  const filled = !!media?.src;
  return (
    <div className={cx('gxn-slot', filled && 'is-filled', isFocus && 'is-focus')}
         style={{ gridRow: `${r1} / ${r2}`, gridColumn: `${c1} / ${c2}`, borderRadius: 18 }}>
      {filled
        ? <MediaView value={media} fit="cover" />
        : <span className="gxn-slot-cap">{caption || '拖入图片 · IMAGE'}</span>}
      {filled && showCaption && caption && (
        <div className="gxn-slot-overlay">
          <span className="gxn-cap-idx">{String(i + 1).padStart(2, '0')}</span>
          <span className="gxn-cap-txt">{caption}</span>
        </div>
      )}
      {onActivate && (
        <button type="button" className="gxn-slot-btn gxn-slot-add" aria-label="选择图片"
                onClick={() => onActivate(i)} />
      )}
      {onClear && filled && (
        <button type="button" className="gxn-slot-btn gxn-slot-clear" aria-label="移除图片"
                onClick={(e) => { e.stopPropagation(); onClear(i); }}>×</button>
      )}
    </div>
  );
}

export function SlideMosaic(props) {
  const p = { ...slideMosaicDefaults, ...props };
  const count = Math.max(0, Math.min(5, p.imageCount));
  const fIdx = p.focusEnabled ? Math.max(0, Math.min(count - 1, p.focusIndex)) : -1;
  const layout = LAYOUTS[count] || null;

  const place = p.titlePlacement;
  const overlayPos = place === 'bl'
    ? { left: 0, bottom: 0 }
    : place === 'tr'
      ? { right: 0, top: 0, textAlign: 'right' }
      : { left: 0, top: 0 };

  const overlay = (
    <div style={{ position: 'absolute', ...overlayPos, maxWidth: 980, zIndex: 3,
                  padding: p.overlayStyle === 'panel' ? 0 : 0 }}>
      <div className={p.overlayStyle === 'panel' ? 'gxn-panel' : undefined}
           style={{
             padding: p.overlayStyle === 'panel' ? '40px 48px' : '6px 2px',
             background: p.overlayStyle === 'panel' ? 'rgba(7,9,11,0.62)' : 'transparent',
             border: p.overlayStyle === 'panel' ? '1px solid var(--gxn-line)' : 'none',
             backdropFilter: p.overlayStyle === 'panel' ? 'blur(14px)' : 'none',
             WebkitBackdropFilter: p.overlayStyle === 'panel' ? 'blur(14px)' : 'none',
             display: 'flex', flexDirection: 'column', gap: 18,
             alignItems: place === 'tr' ? 'flex-end' : 'flex-start',
             borderRadius: 22,
             boxShadow: p.overlayStyle === 'panel'
               ? 'inset 0 0 60px -22px rgba(var(--gxn-glow),0.3), 0 30px 70px -42px rgba(0,0,0,0.9)' : 'none',
           }}>
        <SlideHeader kicker={p.kicker} title={p.title} titleEm={p.titleEm}
                     index={p.index || "37 / 39"}
                     style={{ gap: 18, alignItems: place === 'tr' ? 'flex-end' : 'stretch' }} />
        {p.lead && (
          <p className="gxn-sub" style={{ maxWidth: 760, marginTop: 2,
            textAlign: place === 'tr' ? 'right' : 'left' }}>{p.lead}</p>
        )}
      </div>
    </div>
  );

  return (
    <div className={cx(THEME_CLASS, 'gxn-slide')}>
      <ThemeStyle />
      {/* full-bleed mosaic */}
      <div className="gxn-rise" style={{ position: 'absolute', inset: 0, padding: 40 }}>
        {count > 0 && layout ? (
          <div style={{ position: 'absolute', inset: 40, display: 'grid',
                        gridTemplateColumns: layout.cols, gridTemplateRows: layout.rows, gap: 16 }}>
            {Array.from({ length: count }).map((_, i) => (
              <MosaicSlot key={i} i={i} src={(p.images || [])[i]}
                          caption={p.captions[i]} showCaption={p.showCaptions}
                          isFocus={i === fIdx} area={layout.areas[i]}
                          onActivate={p.onSlotActivate} onClear={p.onSlotClear} />
            ))}
          </div>
        ) : (
          <div style={{ position: 'absolute', inset: 40, borderRadius: 22,
                        background: 'radial-gradient(120% 120% at 80% 0%, rgba(var(--gxn-glow),0.08), transparent 60%)',
                        border: '1px solid var(--gxn-line)' }} />
        )}
      </div>

      {/* gradient scrim behind the floating title for legibility */}
      {count > 0 && (
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none',
          background: place === 'tr'
            ? 'linear-gradient(245deg, rgba(4,6,8,0.66), transparent 46%)'
            : place === 'bl'
              ? 'linear-gradient(20deg, rgba(4,6,8,0.66), transparent 46%)'
              : 'linear-gradient(135deg, rgba(4,6,8,0.66), transparent 46%)' }} />
      )}

      <div className="gxn-rise-2" style={{ position: 'absolute', inset: 0,
        padding: 'var(--gxn-py) var(--gxn-px)', pointerEvents: 'none' }}>
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
          {/* 标题浮层为纯展示内容 — 保持 none，点击可穿透到其下方的图片槽 */}
          <div style={{ pointerEvents: 'none', position: 'absolute', inset: 0 }}>{overlay}</div>
        </div>
      </div>
    </div>
  );
}

export default SlideMosaic;
