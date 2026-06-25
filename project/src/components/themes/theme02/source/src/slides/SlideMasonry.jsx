/**
 * SlideMasonry.jsx — 瀑布流图墙（图片页 · 自适应 Masonry）.
 * Independent, prop-driven. Renders its own theme styles.
 *
 * 瀑布流图墙：多列错落的图片槽，每块高度按内置节律错位排布，列数随数量自动重排，
 * 任意数量都填满版面、构图均衡且不溢出。图片以 props 传入，不依赖预览运行时；
 * 空槽点击上传（预览接线），无回调时为静态只读。
 *
 * 实现：N 列等宽，列内用 flex-grow 权重制造高低错落 —— 各列内权重之和被独立填满，
 * 因此既有「瀑布流」的参差感，又保证每列恰好填满固定高度、不会溢出。
 *
 * ── Props (see slideMasonryDefaults) ────────────────────────────────────────
 *   kicker, title, titleEm, lead     strings
 *   captions     string[]   每块图注（填充后叠加 / 空槽提示）
 *   tileCount    number   图片块数量（0–n）
 *   columns      number   列数（2–4）
 *   fit          'cover' | 'contain'   图片贴合方式
 *   focusEnabled boolean  辉光强调某一块（描边）
 *   focusIndex   number   0-based 被强调块
 *   showCaptions boolean  图注显隐
 *   images       array    图片源（预览接线）
 *   onSlotActivate fn?    (i)=>void
 *   onSlotClear    fn?    (i)=>void
 */
import React from 'react';
import { ThemeStyle, THEME_CLASS, cx } from '../gxnTheme.js';
import { SlideHeader, MediaView, mediaItem } from '../gxnPrimitives.jsx';

export const slideMasonryDefaults = {
  kicker: 'GALLERY · 资本图墙',
  title: '一面墙 ',
  titleEm: '看尽头部面孔',
  lead: '模型实验室、算力云、芯片与应用——把这一年最受资本追捧的面孔错落铺开，越大的块，越是焦点。',
  captions: [
    'OpenAI · 通用大模型', 'Anthropic · 安全对齐', 'xAI · 实时多模态', 'CoreWeave · 算力云',
    'Scale AI · 数据标注', 'Databricks · 数据平台', 'Mistral · 开源模型', 'Perplexity · AI 搜索',
    'Cerebras · AI 芯片', 'Glean · 企业搜索',
  ],
  tileCount: 7,
  columns: 3,
  fit: 'cover',
  focusEnabled: false,
  focusIndex: 0,
  showCaptions: true,
  images: [],
};

export const slideMasonryControls = [
  { key: 'tileCount', type: 'number', label: '图片数量', default: 7, min: 0, step: 1,
    maxFrom: (p) => (p.captions ? p.captions.length : 10), describe: '瀑布流图片块数量（0 = 纯标题）' },
  { key: 'columns', type: 'number', label: '列数', default: 3, min: 2, max: 4, step: 1,
    visibleWhen: (p) => p.tileCount > 0, describe: '瀑布流列数（自适应错落）' },
  { key: 'fit', type: 'enum', label: '贴合方式', default: 'cover',
    options: [{ value: 'cover', label: '填充（裁切）' }, { value: 'contain', label: '完整（不裁切）' }],
    visibleWhen: (p) => p.tileCount > 0, describe: '图片在块内填充或完整显示' },
  { key: 'focusEnabled', type: 'toggle', label: '重点强调', default: false,
    describe: '辉光强调某一块（描边）' },
  { key: 'focusIndex', type: 'number', label: '强调项', default: 0, min: 0, step: 1,
    oneBased: true, maxFrom: (p) => Math.max(0, (p.tileCount || 1) - 1),
    visibleWhen: (p) => p.focusEnabled && p.tileCount > 0, describe: '被强调块的序号' },
  { key: 'showCaptions', type: 'toggle', label: '图注', default: true,
    visibleWhen: (p) => p.tileCount > 0, describe: '显示/隐藏图注' },
];

// per-tile height weights — a repeating rhythm so columns stay staggered.
const WEIGHTS = [1.35, 0.92, 1.12, 0.82, 1.22, 1.0, 0.88, 1.28, 0.96, 1.08];

function Tile({ i, src, cap, fit, isFocus, weight, showCaptions, onActivate, onClear }) {
  const media = mediaItem(src);
  const filled = !!media?.src;
  return (
    <div className={cx('gxn-slot', filled && 'is-filled', isFocus && 'is-focus')}
         style={{ flex: `${weight} 1 0`, minHeight: 0, borderRadius: 18 }}>
      {filled
        ? <MediaView value={media} fit={fit} />
        : <span className="gxn-slot-cap">{cap || '拖入图片 · IMAGE'}</span>}
      {filled && showCaptions && cap && (
        <div className="gxn-slot-overlay">
          <span className="gxn-cap-idx">{String(i + 1).padStart(2, '0')}</span>
          <span className="gxn-cap-txt">{cap}</span>
        </div>
      )}
      {onActivate && (
        <button type="button" className="gxn-slot-btn gxn-slot-add"
                aria-label="选择图片" onClick={() => onActivate(i)} />
      )}
      {onClear && filled && (
        <button type="button" className="gxn-slot-btn gxn-slot-clear" aria-label="移除图片"
                onClick={(e) => { e.stopPropagation(); onClear(i); }}>×</button>
      )}
    </div>
  );
}

export function SlideMasonry(props) {
  const p = { ...slideMasonryDefaults, ...props };
  const count = Math.max(0, Math.min(p.captions.length, p.tileCount));
  const cols = Math.max(2, Math.min(4, count > 0 ? Math.min(p.columns, count) : p.columns));
  const fIdx = p.focusEnabled ? Math.max(0, Math.min(count - 1, p.focusIndex)) : -1;
  const imgs = p.images || [];

  // distribute tiles across columns, column-major so order reads top→bottom per column
  const buckets = Array.from({ length: cols }, () => []);
  for (let i = 0; i < count; i++) buckets[i % cols].push(i);

  return (
    <div className={cx(THEME_CLASS, 'gxn-slide')}>
      <ThemeStyle />
      <div className="gxn-pad">
        <SlideHeader kicker={p.kicker} title={p.title} titleEm={p.titleEm} index={p.index || '19 / 27'} />
        {p.lead && <p className="gxn-sub gxn-rise" style={{ marginTop: 18, maxWidth: 1240 }}>{p.lead}</p>}

        <div className="gxn-rise-2" style={{ flex: 1, marginTop: 32, minHeight: 0 }}>
          {count > 0 ? (
            <div style={{ height: '100%', display: 'flex', gap: 22 }}>
              {buckets.map((bucket, ci) => (
                <div key={ci} style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 22 }}>
                  {bucket.map((i) => (
                    <Tile key={i} i={i} src={imgs[i]} cap={p.captions[i]} fit={p.fit}
                          isFocus={i === fIdx} weight={WEIGHTS[i % WEIGHTS.length]}
                          showCaptions={p.showCaptions}
                          onActivate={p.onSlotActivate} onClear={p.onSlotClear} />
                  ))}
                </div>
              ))}
            </div>
          ) : (
            <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span className="gxn-mono" style={{ fontSize: 26, color: 'var(--gxn-faint)' }}>纯标题版式 · 图片数量为 0</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SlideMasonry;
