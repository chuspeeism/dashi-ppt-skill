/**
 * SlideVoices.jsx — 声音墙（图片页 · 多人物金句）.
 * Independent, prop-driven. Renders its own theme styles.
 *
 * 一排 2–4 张人物卡：头像图片槽（按原始比例适配、不裁切，居中留边）+ 短引言 +
 * 署名头衔。可辉光强调某一张。图片以 props 注入（images / onSlotActivate /
 * onSlotClear），不依赖预览运行时。
 *
 * ── Props (see slideVoicesDefaults) ─────────────────────────────────────────
 *   kicker, title, titleEm, lead     strings
 *   voices       Array<{quote, name, role, caption}>
 *   voiceCount   number   人物卡数量（2–4）
 *   focusEnabled boolean  辉光强调某一张（其余淡出）
 *   focusIndex   number   0-based 被强调卡片
 *   showMark     boolean  装饰引号显隐
 *   showRole     boolean  头衔显隐
 *   showCaption  boolean  头像下方图注显隐
 *   images       array    图片源（预览注入）
 *   onSlotActivate fn?    (i)=>void  点击空槽上传
 *   onSlotClear    fn?    (i)=>void  清除图片
 */
import React from 'react';
import { ThemeStyle, THEME_CLASS, cx } from '../gxnTheme.js';
import { SlideHeader, MediaView, mediaItem } from '../gxnPrimitives.jsx';

export const slideVoicesDefaults = {
  kicker: 'VOICES · 多方之声',
  title: '资本与创始人 ',
  titleEm: '怎么看这一年',
  lead: '把投资人、创始人与研究者的判断并置——同一片热潮，他们读出的信号并不相同。',
  voices: [
    { quote: '算力与数据是这一轮唯一确定的红利，其余都要用收入来证明。', name: 'Investor A', role: '成长期基金合伙人', caption: '投资人 · GROWTH' },
    { quote: '我们更相信可解释、可控的系统，长期看这才符合用户利益。', name: 'Founder B', role: '模型公司联合创始人', caption: '创始人 · MODEL' },
    { quote: '估值跑在营收前面，窗口正在收窄，下一年是兑现之年。', name: 'Analyst C', role: '一级市场研究负责人', caption: '研究者 · RESEARCH' },
  ],
  voiceCount: 3,
  focusEnabled: false,
  focusIndex: 0,
  showMark: true,
  showRole: true,
  showCaption: true,
  images: [],
};

export const slideVoicesControls = [
  { key: 'voiceCount', type: 'number', label: '人物卡数量', default: 3, min: 2, max: 4, step: 1,
    maxFrom: (p) => Math.min(4, p.voices ? p.voices.length : 4), describe: '一排人物卡的数量（2–4）' },
  { key: 'focusEnabled', type: 'toggle', label: '重点强调', default: false,
    describe: '辉光强调某一张（其余淡出）' },
  { key: 'focusIndex', type: 'number', label: '强调项', default: 0, min: 0, step: 1,
    oneBased: true, maxFrom: (p) => Math.max(0, (p.voiceCount || 1) - 1),
    visibleWhen: (p) => p.focusEnabled, describe: '被强调卡片的序号' },
  { key: 'showMark', type: 'toggle', label: '装饰引号', default: true,
    describe: '卡内装饰引号显隐' },
  { key: 'showRole', type: 'toggle', label: '头衔', default: true,
    describe: '署名头衔显隐' },
  { key: 'showCaption', type: 'toggle', label: '头像图注', default: true,
    describe: '头像下方图注显隐' },
];

/* Per-card portrait slot — ratio-adaptive (contain, no crop) inside a fixed
   portrait box so the row of cards stays uniform. Mirrors gxn-slot styling. */
function PortraitSlot({ src, caption, placeholder, onActivate, onClear }) {
  const media = mediaItem(src);
  const filled = !!media?.src;
  return (
    <div className={cx('gxn-slot', filled && 'is-filled')}
         style={{ width: '100%', aspectRatio: '4 / 5', borderRadius: 16 }}>
      {filled
        ? <MediaView value={media} fit="contain" />
        : <span className="gxn-slot-cap">{placeholder}</span>}
      {filled && caption && (
        <div className="gxn-slot-overlay">
          <span className="gxn-cap-txt" style={{ fontSize: 22 }}>{caption}</span>
        </div>
      )}
      {onActivate && (
        <button type="button" className="gxn-slot-btn gxn-slot-add"
                aria-label="选择头像" onClick={() => onActivate()} />
      )}
      {onClear && filled && (
        <button type="button" className="gxn-slot-btn gxn-slot-clear"
                aria-label="移除头像"
                onClick={(e) => { e.stopPropagation(); onClear(); }}>×</button>
      )}
    </div>
  );
}

export function SlideVoices(props) {
  const p = { ...slideVoicesDefaults, ...props };
  const count = Math.max(2, Math.min(4, Math.min(p.voices.length, p.voiceCount)));
  const voices = p.voices.slice(0, count);
  const fIdx = p.focusEnabled ? Math.max(0, Math.min(count - 1, p.focusIndex)) : -1;
  const focused = fIdx >= 0;
  const images = p.images || [];

  return (
    <div className={cx(THEME_CLASS, 'gxn-slide')}>
      <ThemeStyle />
      <div className="gxn-pad">
        <SlideHeader kicker={p.kicker} title={p.title} titleEm={p.titleEm} index={p.index || '29 / 35'} />
        {p.lead && <p className="gxn-sub gxn-rise" style={{ marginTop: 16, maxWidth: 1240 }}>{p.lead}</p>}

        <div className="gxn-rise-2" style={{ flex: 1, marginTop: 36, minHeight: 0, display: 'grid',
          gridTemplateColumns: `repeat(${count}, 1fr)`, gap: 40, alignItems: 'stretch' }}>
          {voices.map((v, i) => {
            const isF = i === fIdx; const dim = focused && !isF;
            return (
              <article key={i} className={cx('gxn-panel', isF && 'is-focus', dim && 'is-dim')}
                       style={{ position: 'relative', overflow: 'hidden', padding: '34px 32px 36px',
                                display: 'flex', flexDirection: 'column', gap: 26, minWidth: 0 }}>
                <PortraitSlot src={images[i]} caption={p.showCaption ? v.caption : null}
                              placeholder="拖入头像 · PORTRAIT"
                              onActivate={p.onSlotActivate ? () => p.onSlotActivate(i) : undefined}
                              onClear={p.onSlotClear ? () => p.onSlotClear(i) : undefined} />

                <div style={{ position: 'relative', flex: 1, display: 'flex', flexDirection: 'column',
                  justifyContent: 'space-between', gap: 22 }}>
                  <div style={{ position: 'relative' }}>
                    {p.showMark && (
                      <span aria-hidden="true" style={{ position: 'absolute', top: -52, left: -6,
                        fontFamily: 'Georgia, serif', fontSize: 110, lineHeight: 1,
                        color: 'var(--gxn-accent)', opacity: 0.18,
                        textShadow: '0 0 36px rgba(var(--gxn-glow),0.5)', pointerEvents: 'none' }}>“</span>
                    )}
                    <blockquote style={{ margin: 0, position: 'relative', zIndex: 1,
                      fontSize: 28, fontWeight: 500, lineHeight: 1.46, letterSpacing: '-0.005em',
                      color: 'var(--gxn-text)', textWrap: 'pretty' }}>{v.quote}</blockquote>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                    <span style={{ width: 40, height: 3, borderRadius: 3, flex: '0 0 auto',
                      background: 'linear-gradient(90deg, var(--gxn-accent), transparent)',
                      boxShadow: '0 0 14px rgba(var(--gxn-glow),0.8)' }} />
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 3, minWidth: 0 }}>
                      <span style={{ fontSize: 27, fontWeight: 700, color: 'var(--gxn-text)' }}>{v.name}</span>
                      {p.showRole && v.role && (
                        <span className="gxn-mono" style={{ fontSize: 22, color: 'var(--gxn-dim)' }}>{v.role}</span>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SlideVoices;
