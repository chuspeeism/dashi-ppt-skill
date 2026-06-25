/**
 * SlideZigzag.jsx — 编辑图文（图片页 · 左右交错版式）.
 * Independent, prop-driven. Renders its own theme styles.
 *
 * 杂志式的左右交错图文：每一行一张配图 + 一段解读，图片侧别逐行翻转，形成
 * 之字形阅读节奏。图片槽按原始比例适配（不裁切）；行数 2–3 自适应等高排布，
 * 可辉光强调某一行。仅依赖 props；图片以 props 传入，空槽点击上传。
 *
 * ── Props (see slideZigzagDefaults) ─────────────────────────────────────────
 *   kicker, title, titleEm, lead     strings
 *   rows         Array<{title,copy,tag,stat:{value,unit}}>  每行文本
 *   rowCount     number   行数（2–n）
 *   startSide    'left' | 'right'   首行图片所在侧
 *   fit          'contain' | 'cover'  图片贴合（完整不裁切 / 填充裁切）
 *   focusEnabled boolean  辉光强调某一行
 *   focusIndex   number   0-based 被强调行
 *   showCopy     boolean  解读段落显隐
 *   showStat     boolean  行内关键数字显隐
 *   images       array    图片源（预览接线）
 *   onSlotActivate / onSlotClear  fn?
 */
import React from 'react';
import { ThemeStyle, THEME_CLASS, cx } from '../gxnTheme.js';
import { SlideHeader, MediaView, mediaItem } from '../gxnPrimitives.jsx';

export const slideZigzagDefaults = {
  kicker: 'EDITORIAL · 图文叙事',
  title: '三段切片 ',
  titleEm: '读懂这轮资本',
  lead: '把一年里最有代表性的三组画面并排铺开——从算力机房到模型发布会，钱流向哪里，故事就发生在哪里。',
  rows: [
    { title: '算力是新的石油', tag: 'INFRA · 基础设施',
      copy: '超大规模训练把 GPU 集群变成稀缺资产，算力供给方率先吃到这轮红利，估值随订单一起膨胀。',
      stat: { value: '78', unit: '%' } },
    { title: '模型即产品', tag: 'MODEL · 通用大模型',
      copy: '头部模型公司以产品化速度构筑生态绑定，单轮融资屡破纪录，资本愿意为“下一个平台”提前下注。',
      stat: { value: '10', unit: '亿/笔' } },
    { title: '应用层在追赶', tag: 'APP · 应用落地',
      copy: '企业级场景的付费意愿与续费率双双走高，应用层公司开始用真实营收兑现资本的耐心。',
      stat: { value: '41', unit: '%' } },
  ],
  rowCount: 3,
  startSide: 'left',
  fit: 'contain',
  focusEnabled: false,
  focusIndex: 0,
  showCopy: true,
  showStat: true,
  images: [],
};

export const slideZigzagControls = [
  { key: 'rowCount', type: 'number', label: '行数', default: 3, min: 2, step: 1,
    maxFrom: (p) => (p.rows ? p.rows.length : 3), describe: '图文行数（2–n）' },
  { key: 'startSide', type: 'enum', label: '首行图片', default: 'left',
    options: [{ value: 'left', label: '居左起' }, { value: 'right', label: '居右起' }],
    describe: '首行图片所在侧，逐行交错翻转' },
  { key: 'fit', type: 'enum', label: '贴合方式', default: 'contain',
    options: [{ value: 'contain', label: '完整（不裁切）' }, { value: 'cover', label: '填充（裁切）' }],
    describe: '图片在槽内完整显示或填充裁切' },
  { key: 'focusEnabled', type: 'toggle', label: '重点强调', default: false,
    describe: '是否辉光强调某一行' },
  { key: 'focusIndex', type: 'number', label: '强调项', default: 0, min: 0, step: 1,
    oneBased: true, maxFrom: (p) => Math.max(0, (p.rowCount || 1) - 1),
    visibleWhen: (p) => p.focusEnabled, describe: '被强调行的序号' },
  { key: 'showCopy', type: 'toggle', label: '解读段落', default: true,
    describe: '显示/隐藏每行解读段落' },
  { key: 'showStat', type: 'toggle', label: '行内数字', default: true,
    describe: '显示/隐藏行内关键数字' },
];

function Row({ i, src, row, fit, imageRight, isFocus, dim, showCopy, showStat, onActivate, onClear }) {
  const media = mediaItem(src);
  const filled = !!media?.src;
  const imageCell = (
    <div className={cx('gxn-panel', isFocus && 'is-focus')}
         style={{ position: 'relative', overflow: 'hidden', padding: filled ? 0 : 10,
                  borderRadius: 'var(--gxn-radius)' }}>
      <div className={cx('gxn-slot', filled && 'is-filled')}
           style={{ width: '100%', height: '100%', borderRadius: filled ? 'var(--gxn-radius)' : 16,
                    background: filled ? '#0b0d10' : undefined, border: filled ? 'none' : undefined }}>
        {filled
          ? <MediaView value={media} fit={fit} />
          : <span className="gxn-slot-cap">{row.tag ? row.tag.split('·')[0].trim() : '拖入配图'} · IMAGE</span>}
        {onActivate && (
          <button type="button" className="gxn-slot-btn gxn-slot-add" aria-label="选择图片"
                  onClick={() => onActivate(i)} />
        )}
        {onClear && filled && (
          <button type="button" className="gxn-slot-btn gxn-slot-clear" aria-label="移除图片"
                  onClick={(e) => { e.stopPropagation(); onClear(i); }}>×</button>
        )}
      </div>
    </div>
  );

  const clamp = (lines) => ({ display: '-webkit-box', WebkitBoxOrient: 'vertical',
    WebkitLineClamp: lines, overflow: 'hidden' });
  const textCell = (
    <div style={{ display: 'flex', alignItems: 'center', gap: 26, minWidth: 0,
                  padding: imageRight ? '0 8px 0 0' : '0 0 0 8px' }}>
      <span className="gxn-num" style={{ flex: '0 0 auto', fontSize: 60, fontWeight: 600,
        lineHeight: 0.9, letterSpacing: '-0.02em',
        color: isFocus ? 'var(--gxn-accent)' : 'var(--gxn-faint)',
        textShadow: isFocus ? '0 0 26px rgba(var(--gxn-glow),0.5)' : 'none' }}>
        {String(i + 1).padStart(2, '0')}
      </span>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 9, minWidth: 0 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, minWidth: 0 }}>
          {row.tag && (
            <span className="gxn-mono" style={{ fontSize: 21, letterSpacing: '.1em',
              color: 'var(--gxn-accent)', whiteSpace: 'nowrap', overflow: 'hidden',
              textOverflow: 'ellipsis' }}>{row.tag}</span>
          )}
          {showStat && row.stat && (
            <span style={{ marginLeft: 'auto', display: 'flex', alignItems: 'baseline', gap: 6,
              flex: '0 0 auto' }}>
              <span className="gxn-num" style={{ fontSize: 34, fontWeight: 600, lineHeight: 1,
                letterSpacing: '-0.02em', color: isFocus ? 'var(--gxn-accent)' : 'var(--gxn-text)' }}>{row.stat.value}</span>
              {row.stat.unit && <span className="gxn-mono" style={{ fontSize: 20,
                color: 'var(--gxn-dim)' }}>{row.stat.unit}</span>}
            </span>
          )}
        </div>
        <h3 style={{ margin: 0, fontSize: 33, fontWeight: 700, lineHeight: 1.14,
          color: isFocus ? 'var(--gxn-accent)' : 'var(--gxn-text)', letterSpacing: '-0.01em',
          ...clamp(2) }}>
          {row.title}
        </h3>
        {showCopy && row.copy && (
          <p style={{ margin: 0, fontSize: 23, lineHeight: 1.45, color: 'var(--gxn-dim)',
            ...clamp(2) }}>
            {row.copy}
          </p>
        )}
      </div>
    </div>
  );

  return (
    <div style={{ display: 'grid', gridTemplateColumns: imageRight ? '0.95fr 1.05fr' : '1.05fr 0.95fr',
      gap: 52, minHeight: 0,
      opacity: dim ? 0.5 : 1, transition: 'opacity .3s ease', alignItems: 'stretch' }}>
      {imageRight
        ? <>{textCell}{imageCell}</>
        : <>{imageCell}{textCell}</>}
    </div>
  );
}

export function SlideZigzag(props) {
  const p = { ...slideZigzagDefaults, ...props };
  const count = Math.max(2, Math.min(p.rows.length, p.rowCount));
  const rows = p.rows.slice(0, count);
  const fIdx = p.focusEnabled ? Math.max(0, Math.min(count - 1, p.focusIndex)) : -1;
  const imgs = p.images || [];
  const startRight = p.startSide === 'right';

  return (
    <div className={cx(THEME_CLASS, 'gxn-slide')}>
      <ThemeStyle />
      <div className="gxn-pad">
        <SlideHeader kicker={p.kicker} title={p.title} titleEm={p.titleEm} index={p.index || '20 / 43'} />
        {p.lead && <p className="gxn-sub gxn-rise" style={{ marginTop: 16, maxWidth: 1240 }}>{p.lead}</p>}

        <div className="gxn-rise-2" style={{ flex: 1, marginTop: 26, minHeight: 0, display: 'grid',
          gridTemplateRows: `repeat(${count}, 1fr)`, gap: 30 }}>
          {rows.map((r, i) => (
            <Row key={i} i={i} src={imgs[i]} row={r} fit={p.fit}
                 imageRight={startRight ? i % 2 === 0 : i % 2 === 1}
                 isFocus={i === fIdx} dim={fIdx >= 0 && i !== fIdx}
                 showCopy={p.showCopy} showStat={p.showStat}
                 onActivate={p.onSlotActivate} onClear={p.onSlotClear} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SlideZigzag;
