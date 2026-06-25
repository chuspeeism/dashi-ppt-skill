/**
 * SlideLogoWall.jsx — 公司图谱（图片页 · 自适应瓦片墙）.
 * Independent, prop-driven. Renders its own theme styles.
 *
 * 自适应公司瓦片墙：每块瓦片是一个图片槽 + 名称 + 标签。瓦片数量 0–n 可调，列数随
 * 数量自动重排，保证任意数量下构图均衡。图片以 props 传入，不依赖预览运行时；空槽点击
 * 上传（预览接线），无回调时为静态只读。
 *
 * ── Props (see slideLogoWallDefaults) ───────────────────────────────────────
 *   kicker, title, titleEm, lead     strings
 *   names        string[]   每块瓦片的名称
 *   tags         string[]   每块瓦片的标签（赛道/轮次）
 *   tileCount    number   瓦片数量（0–n）
 *   fit          'cover' | 'contain'   图片贴合方式
 *   focusEnabled boolean  高亮某一块（辉光描边）
 *   focusIndex   number   0-based 被强调瓦片
 *   showNames    boolean  名称显隐
 *   showTags     boolean  标签显隐
 *   images       array    图片源（预览接线）
 *   onSlotActivate fn?    (i)=>void
 *   onSlotClear    fn?    (i)=>void
 */
import React from 'react';
import { ThemeStyle, THEME_CLASS, cx } from '../gxnTheme.js';
import { SlideHeader, MediaView, mediaItem } from '../gxnPrimitives.jsx';

export const slideLogoWallDefaults = {
  kicker: 'PLAYERS · 公司图谱',
  title: '一张图看懂 ',
  titleEm: '头部玩家阵营',
  lead: '模型实验室、算力云、应用层与基础设施——大额融资塑造的头部阵营，集中在少数几张面孔上。',
  names: ['OpenAI', 'Anthropic', 'xAI', 'CoreWeave', 'Scale AI', 'Databricks', 'Mistral', 'Perplexity'],
  tags: ['通用大模型', '安全对齐', '实时多模态', '算力云', '数据标注', '数据平台', '开源模型', 'AI 搜索'],
  tileCount: 6,
  fit: 'cover',
  focusEnabled: false,
  focusIndex: 0,
  showNames: true,
  showTags: true,
  images: [],
};

export const slideLogoWallControls = [
  { key: 'tileCount', type: 'number', label: '瓦片数量', default: 6, min: 0, step: 1,
    maxFrom: (p) => (p.names ? p.names.length : 8), describe: '公司瓦片数量（0 = 纯标题）' },
  { key: 'fit', type: 'enum', label: '贴合方式', default: 'cover',
    options: [{ value: 'cover', label: '填充（裁切）' }, { value: 'contain', label: '完整（不裁切）' }],
    visibleWhen: (p) => p.tileCount > 0, describe: '图片在瓦片内填充或完整显示' },
  { key: 'focusEnabled', type: 'toggle', label: '重点强调', default: false,
    describe: '是否高亮其中一块' },
  { key: 'focusIndex', type: 'number', label: '强调项', default: 0, min: 0, step: 1,
    oneBased: true, maxFrom: (p) => Math.max(0, (p.tileCount || 1) - 1),
    visibleWhen: (p) => p.focusEnabled && p.tileCount > 0, describe: '被强调瓦片的序号' },
  { key: 'showNames', type: 'toggle', label: '名称', default: true,
    visibleWhen: (p) => p.tileCount > 0, describe: '显示/隐藏公司名称' },
  { key: 'showTags', type: 'toggle', label: '标签', default: true,
    visibleWhen: (p) => p.tileCount > 0, describe: '显示/隐藏赛道标签' },
];

// columns chosen so any count stays balanced (avoids a lonely trailing tile)
const COLS = { 1: 1, 2: 2, 3: 3, 4: 2, 5: 3, 6: 3, 7: 4, 8: 4 };

function Tile({ i, src, name, tag, fit, isFocus, showNames, showTags, onActivate, onClear }) {
  const media = mediaItem(src);
  const filled = !!media?.src;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 14, minHeight: 0 }}>
      <div className={cx('gxn-slot', filled && 'is-filled', isFocus && 'is-focus')}
           style={{ flex: 1, minHeight: 0, borderRadius: 20 }}>
        {filled
          ? <MediaView value={media} fit={fit} />
          : <span className="gxn-slot-cap">{name || '拖入 LOGO · IMAGE'}</span>}
        {onActivate && (
          <button type="button" className="gxn-slot-btn gxn-slot-add"
                  aria-label="选择图片" onClick={() => onActivate(i)} />
        )}
        {onClear && filled && (
          <button type="button" className="gxn-slot-btn gxn-slot-clear" aria-label="移除图片"
                  onClick={(e) => { e.stopPropagation(); onClear(i); }}>×</button>
        )}
      </div>
      {(showNames || showTags) && (
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 12 }}>
          {showNames && (
            <span style={{ fontSize: 28, fontWeight: 700, lineHeight: 1.1,
              color: isFocus ? 'var(--gxn-accent)' : 'var(--gxn-text)', whiteSpace: 'nowrap',
              overflow: 'hidden', textOverflow: 'ellipsis' }}>{name}</span>
          )}
          {showTags && tag && (
            <span className="gxn-mono" style={{ fontSize: 24, color: 'var(--gxn-faint)',
              whiteSpace: 'nowrap', flex: '0 0 auto' }}>{tag}</span>
          )}
        </div>
      )}
    </div>
  );
}

export function SlideLogoWall(props) {
  const p = { ...slideLogoWallDefaults, ...props };
  const count = Math.max(0, Math.min(p.names.length, p.tileCount));
  const cols = COLS[count] || Math.min(4, count || 1);
  const fIdx = p.focusEnabled ? Math.max(0, Math.min(count - 1, p.focusIndex)) : -1;
  const imgs = p.images || [];

  return (
    <div className={cx(THEME_CLASS, 'gxn-slide')}>
      <ThemeStyle />
      <div className="gxn-pad">
        <SlideHeader kicker={p.kicker} title={p.title} titleEm={p.titleEm} index={p.index || "18 / 27"} />
        {p.lead && <p className="gxn-sub gxn-rise" style={{ marginTop: 18, maxWidth: 1240 }}>{p.lead}</p>}

        <div className="gxn-rise-2" style={{ flex: 1, marginTop: 34, minHeight: 0 }}>
          {count > 0 ? (
            <div style={{ height: '100%', display: 'grid', gap: 30,
              gridTemplateColumns: `repeat(${cols}, 1fr)`,
              gridAutoRows: '1fr' }}>
              {Array.from({ length: count }).map((_, i) => (
                <Tile key={i} i={i} src={imgs[i]} name={p.names[i]} tag={p.tags[i]} fit={p.fit}
                      isFocus={i === fIdx} showNames={p.showNames} showTags={p.showTags}
                      onActivate={p.onSlotActivate} onClear={p.onSlotClear} />
              ))}
            </div>
          ) : (
            <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span className="gxn-mono" style={{ fontSize: 26, color: 'var(--gxn-faint)' }}>纯标题版式 · 瓦片数量为 0</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SlideLogoWall;
