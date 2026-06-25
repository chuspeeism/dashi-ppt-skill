/**
 * SlideCardGrid.jsx — 图文卡组（图片页 · 图 + 标题 + 描述）.
 * Independent, prop-driven. Renders its own theme styles.
 *
 * 一排图文卡，每张卡 = 顶部图片槽 + 标题 + 描述 + 标签。卡片数量 1–4 自适应排列，
 * 比纯 logo 墙更适合“配图 + 一句话解读”的并列叙事。图片以 props 传入，空槽点击上传。
 *
 * ── Props (see slideCardGridDefaults) ───────────────────────────────────────
 *   kicker, title, titleEm, lead     strings
 *   cards        Array<{title,desc,tag}>   每张卡的文本
 *   cardCount    number   卡片数量（1–n）
 *   fit          'cover' | 'contain'   图片贴合方式
 *   focusEnabled boolean  辉光强调某一张
 *   focusIndex   number   0-based 被强调卡片
 *   showDesc     boolean  描述显隐
 *   showTags     boolean  标签显隐
 *   images       array    图片源（预览接线）
 *   onSlotActivate / onSlotClear  fn?
 */
import React from 'react';
import { ThemeStyle, THEME_CLASS, cx } from '../gxnTheme.js';
import { SlideHeader, MediaView, mediaItem } from '../gxnPrimitives.jsx';

export const slideCardGridDefaults = {
  kicker: 'CASES · 案例图文',
  title: '四张面孔 ',
  titleEm: '四条技术路线',
  lead: '同样的“大额融资”，落到不同公司身上，讲的是四套截然不同的故事。',
  cards: [
    { title: 'OpenAI', desc: '通用大模型领跑者，以产品化速度与生态绑定构筑护城河。', tag: '通用大模型' },
    { title: 'Anthropic', desc: '以安全对齐为叙事核心，企业级市场稳步扩张。', tag: '安全对齐' },
    { title: 'xAI', desc: '自建超大算力集群，押注实时多模态与社交数据。', tag: '实时多模态' },
    { title: 'CoreWeave', desc: '把 GPU 算力做成云生意，吃下训练侧的基础设施红利。', tag: '算力云' },
  ],
  cardCount: 4,
  fit: 'cover',
  focusEnabled: false,
  focusIndex: 0,
  showDesc: true,
  showTags: true,
  images: [],
};

export const slideCardGridControls = [
  { key: 'cardCount', type: 'number', label: '卡片数量', default: 4, min: 1, step: 1,
    maxFrom: (p) => (p.cards ? p.cards.length : 4), describe: '图文卡数量' },
  { key: 'fit', type: 'enum', label: '贴合方式', default: 'cover',
    options: [{ value: 'cover', label: '填充（裁切）' }, { value: 'contain', label: '完整（不裁切）' }],
    describe: '图片在卡片内填充或完整显示' },
  { key: 'focusEnabled', type: 'toggle', label: '重点强调', default: false,
    describe: '是否辉光强调某一张' },
  { key: 'focusIndex', type: 'number', label: '强调项', default: 0, min: 0, step: 1,
    oneBased: true, maxFrom: (p) => Math.max(0, (p.cardCount || 1) - 1),
    visibleWhen: (p) => p.focusEnabled, describe: '被强调卡片的序号' },
  { key: 'showDesc', type: 'toggle', label: '描述', default: true,
    describe: '显示/隐藏卡片描述' },
  { key: 'showTags', type: 'toggle', label: '标签', default: true,
    describe: '显示/隐藏卡片标签' },
];

function Card({ i, src, card, fit, isFocus, dim, showDesc, showTags, onActivate, onClear }) {
  const media = mediaItem(src);
  const filled = !!media?.src;
  return (
    <article className={cx('gxn-panel', isFocus && 'is-focus')}
             style={{ position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column',
                      padding: 18, gap: 18, minHeight: 0, opacity: dim ? 0.5 : 1, transition: 'opacity .3s ease' }}>
      <div className={cx('gxn-slot', filled && 'is-filled')}
           style={{ flex: 1, minHeight: 0, borderRadius: 16 }}>
        {filled
          ? <MediaView value={media} fit={fit} />
          : <span className="gxn-slot-cap">{card.title || '拖入配图 · IMAGE'}</span>}
        {onActivate && (
          <button type="button" className="gxn-slot-btn gxn-slot-add" aria-label="选择图片"
                  onClick={() => onActivate(i)} />
        )}
        {onClear && filled && (
          <button type="button" className="gxn-slot-btn gxn-slot-clear" aria-label="移除图片"
                  onClick={(e) => { e.stopPropagation(); onClear(i); }}>×</button>
        )}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, padding: '2px 8px 8px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
          <h3 style={{ margin: 0, fontSize: 32, fontWeight: 700, lineHeight: 1.1,
            color: isFocus ? 'var(--gxn-accent)' : 'var(--gxn-text)', whiteSpace: 'nowrap',
            overflow: 'hidden', textOverflow: 'ellipsis' }}>{card.title}</h3>
          {showTags && card.tag && (
            <span className="gxn-mono" style={{ fontSize: 24, color: 'var(--gxn-accent)', flex: '0 0 auto',
              whiteSpace: 'nowrap' }}>{card.tag}</span>
          )}
        </div>
        {showDesc && card.desc && (
          <p style={{ margin: 0, fontSize: 25, lineHeight: 1.5, color: 'var(--gxn-dim)' }}>{card.desc}</p>
        )}
      </div>
    </article>
  );
}

export function SlideCardGrid(props) {
  const p = { ...slideCardGridDefaults, ...props };
  const count = Math.max(1, Math.min(p.cards.length, p.cardCount));
  const cards = p.cards.slice(0, count);
  const fIdx = p.focusEnabled ? Math.max(0, Math.min(count - 1, p.focusIndex)) : -1;
  const imgs = p.images || [];

  return (
    <div className={cx(THEME_CLASS, 'gxn-slide')}>
      <ThemeStyle />
      <div className="gxn-pad">
        <SlideHeader kicker={p.kicker} title={p.title} titleEm={p.titleEm} index={p.index || "18 / 31"} />
        {p.lead && <p className="gxn-sub gxn-rise" style={{ marginTop: 18, maxWidth: 1240 }}>{p.lead}</p>}

        <div className="gxn-rise-2" style={{ flex: 1, marginTop: 34, minHeight: 0, display: 'grid',
          gridTemplateColumns: `repeat(${count}, 1fr)`, gap: 28 }}>
          {cards.map((c, i) => (
            <Card key={i} i={i} src={imgs[i]} card={c} fit={p.fit}
                  isFocus={i === fIdx} dim={fIdx >= 0 && i !== fIdx}
                  showDesc={p.showDesc} showTags={p.showTags}
                  onActivate={p.onSlotActivate} onClear={p.onSlotClear} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SlideCardGrid;
