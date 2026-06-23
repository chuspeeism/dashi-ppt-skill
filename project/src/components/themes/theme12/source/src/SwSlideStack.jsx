// SwSlideStack.jsx — Slide 02 (product matrix / the stack).
// All visible copy/data defaults live in `defaultProps`; layout/visibility
// props map 1:1 with `controls`.

import React from 'react';
import { swTheme, swCardPalette } from './swTheme.js';
import { SlideRoot, Bar, Footer, Hl, renderSwText } from './swBase.jsx';

const C = swTheme.color, F = swTheme.font, T = swTheme.type;

export const meta = { id: 'stack', index: 5, label: '产品矩阵 / The Stack' };

export const defaultProps = {
  accent: C.orange,
  cardCount: 4,
  columns: 2,
  focus: false,
  focusIndex: 1,
  showLede: true,
  showDeco: true,
  // —— content ——
  barMeta: '05 — The Stack',
  lede: '你只管[[写歌]]，发行 · 结算 · [[维权]]，[[声浪全包了]]。',
  cards: [
    { num: '01', cn: '一键发行', en: 'Release', body: '一次上传，自动分发到全球 30+ 流媒体平台，元数据与封面规格代为校验。', tag: '30+ 平台' },
    { num: '02', cn: '粉丝直连', en: 'Direct', body: '跳过算法与中间商，用专属页面与会员把听众沉淀为可经营的资产。', tag: '0 中间商' },
    { num: '03', cn: '收益透明', en: 'Ledger', body: '实时结算面板，按平台、地区、单曲拆解每一笔版税，路径可追溯。', tag: '72h 到账' },
    { num: '04', cn: '版权护盾', en: 'Shield', body: '作品自动登记存证，全网监测翻唱、采样与盗用，一键发起维权。', tag: '全网监测' },
  ],
  page: '05',
  total: '82',
};

export const controls = [
  { key: 'cardCount', label: '卡片数量', type: 'slider', def: 4, min: 2, max: 4, step: 1,
    desc: '展示的产品卡片数量' },
  { key: 'columns', label: '栏数', type: 'segment', def: 2,
    options: [{ value: 1, label: '1 栏' }, { value: 2, label: '2 栏' }, { value: 'grid', label: '网格' }], desc: '卡片网格的列数' },
  { key: 'focus', label: '重点强调', type: 'toggle', def: false, desc: '高亮某一张卡片，弱化其余' },
  { key: 'focusIndex', label: '强调第几个', type: 'slider', def: 1, min: 1, max: 4, step: 1,
    dependsOn: 'focus', desc: '被强调卡片的序号（1 起）' },
  { key: 'showLede', label: '显示导语', type: 'toggle', def: true, desc: '显示/隐藏顶部高亮短句' },
  { key: 'showDeco', label: '显示装饰', type: 'toggle', def: true, desc: '显示/隐藏卡片内的图形装饰' },
  { key: 'accent', label: '强调色', type: 'color', def: C.orange,
    options: [C.orange, C.purple, C.cyan, C.green], desc: '页脚等强调色' },
];

function gridArea(count, i) {
  const layouts = {
    2: [
      ['1 / 1 / 9 / 5', 'tall'],
      ['1 / 5 / 9 / 13', 'hero'],
    ],
    3: [
      ['1 / 1 / 9 / 8', 'hero'],
      ['1 / 8 / 5 / 13', 'wide'],
      ['5 / 8 / 9 / 13', 'wide'],
    ],
    4: [
      ['1 / 1 / 9 / 7', 'hero'],
      ['1 / 7 / 5 / 13', 'wide'],
      ['5 / 7 / 9 / 10', 'small'],
      ['5 / 10 / 9 / 13', 'small'],
    ],
  };
  return layouts[count]?.[i] || layouts[4][i] || layouts[4][0];
}

function gridTypeStyle(type) {
  if (type === 'hero') return { pad: '32px 36px', radius: 28, h3: 37, body: 23, meta: 23, en: 22, tag: 22, bodyMax: '78%', decoCompact: false };
  if (type === 'wide') return { pad: '26px 30px', radius: 26, h3: 32, body: 20, meta: 21, en: 20, tag: 19, bodyMax: '76%', decoCompact: true };
  if (type === 'tall') return { pad: '30px 32px', radius: 28, h3: 34, body: 21, meta: 22, en: 21, tag: 20, bodyMax: '88%', decoCompact: true };
  return { pad: '22px 24px', radius: 24, h3: 28, body: 18, meta: 19, en: 18, tag: 17, bodyMax: 'none', decoCompact: true };
}

function Deco({ i, pal, compact = false, corner = false }) {
  const wrap = corner
    ? { position: 'absolute', right: compact ? 18 : 30, bottom: compact ? 18 : 26, pointerEvents: 'none', zIndex: 0, opacity: 0.95 }
    : compact
    ? { position: 'relative', width: 104, height: 74, justifySelf: 'center', alignSelf: 'center', opacity: 0.95, pointerEvents: 'none', zIndex: 1 }
    : { position: 'absolute', right: 30, bottom: 26, pointerEvents: 'none', zIndex: 0 };
  if (i === 1) {
    const d = compact ? [72, 46, 22] : [96, 62, 30];
    return (
      <div style={{ ...wrap, width: compact ? 88 : 96, height: compact ? 74 : 96 }}>
        <span style={{ position: 'absolute', right: 0, bottom: 0, width: d[0], height: d[0], borderRadius: '50%', background: pal.deco[0] }} />
        <span style={{ position: 'absolute', right: 0, bottom: 0, width: d[1], height: d[1], borderRadius: '50%', background: pal.deco[1] }} />
        <span style={{ position: 'absolute', right: 0, bottom: 0, width: d[2], height: d[2], borderRadius: '50%', background: pal.deco[2] }} />
      </div>
    );
  }
  if (i === 3) {
    return (
      <div style={{ ...wrap, width: compact ? 64 : 80, height: compact ? 70 : 92, background: pal.deco[0],
        clipPath: 'polygon(50% 0,100% 18%,100% 62%,50% 100%,0 62%,0 18%)' }} />
    );
  }
  const hs = compact ? [28, 52, 36, 64] : [34, 62, 44, 74];
  return (
    <div style={{ ...wrap, display: 'flex', alignItems: 'flex-end', justifyContent: 'center', gap: compact ? 7 : 8, height: compact ? 66 : 74 }}>
      {hs.map((h, k) => (
        <i key={k} style={{ width: compact ? 10 : 13, height: h, borderRadius: 4, display: 'block',
          background: k % 2 ? pal.deco[1] : pal.deco[0] }} />
      ))}
    </div>
  );
}

export default function SwSlideStack(props) {
  const p = { ...defaultProps, ...props };
  const accent = p.accent;
  const count = Math.max(2, Math.min(4, p.cardCount));
  const isGrid = p.columns === 'grid';
  const cols = p.columns === 1 ? 1 : 2;
  const singleColumn = cols === 1;
  const layoutSignature = `${isGrid ? 'grid' : cols}-${count}`;
  const cards = (p.cards || []).slice(0, count);

  return (
    <SlideRoot bg={C.blush} color={C.ink}>
      <Bar meta={p.barMeta} accent={accent} />

      <div style={{ flex: 1, minHeight: 0, background: C.paper, borderRadius: 38, margin: '24px 0 22px',
        padding: isGrid ? '38px 46px 44px' : singleColumn ? '34px 46px 40px' : '44px 52px 50px',
        display: 'flex', flexDirection: 'column' }}>
        {p.showLede && (
          <p style={{ textAlign: 'center', fontWeight: 900, fontSize: isGrid ? 36 : singleColumn ? 34 : 40,
            lineHeight: 1.28, letterSpacing: '-.5px', maxWidth: 1180, margin: isGrid ? '0 auto 26px' : singleColumn ? '0 auto 24px' : '0 auto 36px' }}>
            {renderSwText(p.lede, { hl: { tone: 'o' } })}
          </p>
        )}

        <div style={{ flex: 1, minHeight: 0, display: 'grid',
          gridTemplateColumns: isGrid ? 'repeat(12,1fr)' : 'repeat(' + cols + ',1fr)',
          gridTemplateRows: isGrid ? 'repeat(8,1fr)' : undefined,
          gridAutoRows: isGrid ? undefined : '1fr',
          gap: isGrid ? 18 : singleColumn ? 14 : 22 }}>
          {cards.map((card, i) => {
            const pal = swCardPalette[i % swCardPalette.length];
            const dim = p.focus && (i + 1) !== p.focusIndex;
            const [area, gridType] = gridArea(count, i);
            const gridStyle = gridTypeStyle(gridType);
            const cardRadius = isGrid ? gridStyle.radius : singleColumn ? 22 : 26;
            const cardPadding = isGrid ? gridStyle.pad : singleColumn ? '20px 28px' : '34px 38px';
            const cardDisplay = singleColumn && !isGrid ? 'grid' : 'flex';
            const isSmallGridCard = isGrid && gridType === 'small';
            return (
              <div key={`${layoutSignature}-${card.num}`} style={{ borderRadius: cardRadius, padding: cardPadding,
                position: 'relative', overflow: 'hidden', display: cardDisplay,
                gridArea: isGrid ? area : undefined,
                gridTemplateColumns: singleColumn && !isGrid ? '88px 250px minmax(0,1fr) 108px 150px' : undefined,
                columnGap: singleColumn && !isGrid ? 24 : undefined,
                alignItems: singleColumn && !isGrid ? 'center' : undefined,
                flexDirection: singleColumn && !isGrid ? undefined : 'column', background: pal.bg, color: pal.body,
                opacity: dim ? 0.4 : 1, transform: p.focus && !dim ? 'scale(1)' : 'none',
                outline: p.focus && !dim ? '3px solid ' + accent : 'none', outlineOffset: -3,
                transition: 'opacity .2s, transform .24s ease',
                animation: `sw-rise .44s cubic-bezier(.22,.61,.36,1) ${(i * 0.035).toFixed(3)}s both` }}>
                <div style={{ position: 'relative', zIndex: 1, minWidth: 0, display: 'flex',
                  flexDirection: singleColumn && !isGrid ? 'column' : 'row', alignItems: singleColumn && !isGrid ? 'flex-start' : 'baseline',
                  justifyContent: singleColumn && !isGrid ? 'center' : 'space-between', gap: singleColumn && !isGrid ? 8 : undefined }}>
                  <span style={{ fontFamily: F.mono, fontWeight: 700, fontSize: isGrid ? gridStyle.meta : singleColumn ? 22 : 25, color: pal.name }}>{card.num}</span>
                  <span style={{ fontFamily: F.mono, fontSize: isGrid ? gridStyle.en : singleColumn ? 18 : 24, letterSpacing: '.14em',
                    textTransform: 'uppercase', color: pal.sub }}>{card.en}</span>
                </div>
                <h3 style={{ position: 'relative', zIndex: 1, minWidth: 0, fontWeight: 900,
                  fontSize: isGrid ? gridStyle.h3 : singleColumn ? 36 : T.h3, lineHeight: 1.04, letterSpacing: '-.5px',
                  marginTop: singleColumn && !isGrid ? 0 : isSmallGridCard ? 12 : 18, color: pal.title }}>{card.cn}</h3>
                <p style={{ position: 'relative', zIndex: 1, minWidth: 0, fontSize: isGrid ? gridStyle.body : singleColumn ? 21 : 24,
                  lineHeight: isGrid ? 1.42 : singleColumn ? 1.38 : 1.6, marginTop: singleColumn && !isGrid ? 0 : isSmallGridCard ? 10 : 12,
                  maxWidth: isGrid ? gridStyle.bodyMax : singleColumn ? 'none' : '74%' }}>{card.body}</p>
                {p.showDeco && <Deco i={i} pal={pal} compact={isGrid ? gridStyle.decoCompact : singleColumn} corner={isGrid} />}
                <span style={{ position: 'relative', zIndex: 1, marginTop: singleColumn && !isGrid ? 0 : 'auto',
                  justifySelf: singleColumn && !isGrid ? 'end' : undefined, alignSelf: singleColumn && !isGrid ? 'center' : 'flex-start',
                  whiteSpace: 'nowrap', fontFamily: F.mono, fontWeight: 700, fontSize: isGrid ? gridStyle.tag : singleColumn ? 20 : 24,
                  letterSpacing: '.04em', padding: isGrid ? '8px 17px' : singleColumn ? '8px 16px' : '9px 20px', borderRadius: 999,
                  background: pal.tagBg, color: pal.tagFg }}>{card.tag}</span>
              </div>
            );
          })}
        </div>
      </div>

      <Footer page={p.page} total={p.total} accent={accent} />
    </SlideRoot>
  );
}
