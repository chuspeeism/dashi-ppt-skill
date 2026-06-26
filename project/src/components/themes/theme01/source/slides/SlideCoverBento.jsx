// SlideCoverBento.jsx — 封面 · 模块化便当格。
// 迁移安全：default export + defaultProps + controls；纯 props 驱动；aip- 作用域。
//
// 版式：自包含便当网格（无独立标题区）。左上巨型「标题瓦」横跨两列，右上一块
// accent 实色「数字瓦」，底排三块磨砂玻璃「元信息瓦」。沿用 玻璃 + 圆角方形数字
// 徽章 + 单一 accent 体系，底部 */ … /* mono 脚注。
import React from 'react';
import { SlideFrame, hexA } from './SlideKit.jsx';

export const defaultProps = {
  kicker: '行动指南 · 2026',
  titleTop: '数字化转型',
  titleBottom: '行动指南',
  en: 'Digital Transformation Playbook',
  bigNumber: '36',
  bigLabel: '套可落地方法',
  tiles: [
    { label: 'RELEASE', value: '2026 · 06' },
    { label: 'EDITION', value: 'Vol. 07' },
    { label: 'FORMAT', value: '实战图谱版' },
  ],
  footnote: '灯塔研究院 · 数字化转型研究 · 2026',
  tileCount: 3,
  showBigTile: true,
  accentColor: '#e0a23a',
  showCaption: true,
};

export const controls = [
  { key: 'tileCount', label: '元信息瓦', type: 'number', default: 3, min: 1, max: 3, step: 1, unit: ' 块',
    description: '底排元信息瓦片的数量（按数量均分整行宽度）。' },
  { key: 'showBigTile', label: '数字瓦', type: 'boolean', default: true,
    description: '右上 accent 数字瓦的显示；关闭时标题瓦横向铺满。' },
  { key: 'accentColor', label: '主题色', type: 'color', default: '#e0a23a',
    options: ['#e0a23a', '#5b8def', '#46b083', '#e8503a', '#7a5ae0'],
    description: 'kicker、数字瓦与徽章的主题色。' },
  { key: 'showCaption', label: '脚注说明', type: 'boolean', default: true,
    description: '底部 */ … /* mono 脚注的显示。' },
];

const MONO = "'Space Mono', monospace";

export default function SlideCoverBento(props) {
  const p = { ...defaultProps, ...props };
  const ac = p.accentColor;
  const big = p.showBigTile;
  const tiles = (p.tiles || []).slice(0, Math.max(1, Math.min(3, p.tileCount)));

  return (
    <SlideFrame bg="a">
      <div style={{ flex: '1 1 0%', minHeight: 0, display: 'grid', gap: 26,
        gridTemplateColumns: big ? '1.5fr 1fr 1fr' : '1fr 1fr 1fr',
        gridTemplateRows: '1.55fr 1fr' }}>

        {/* 标题瓦 */}
        <div className="aip-glass" style={{ gridColumn: big ? '1 / 3' : '1 / 4', gridRow: '1',
          display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 56px', borderRadius: 30 }}>
          <span style={{ alignSelf: 'flex-start', display: 'inline-flex', alignItems: 'center', gap: 12,
            padding: '10px 22px', borderRadius: 12, background: ac, color: '#fff',
            boxShadow: `0 12px 28px ${hexA(ac, 0.34)}` }}>
            <span style={{ width: 12, height: 12, borderRadius: 4, background: 'rgba(255,255,255,.85)' }}></span>
            <span style={{ fontSize: 26, fontWeight: 800, letterSpacing: '.04em', whiteSpace: 'nowrap' }}>{p.kicker}</span>
          </span>
          <h1 style={{ margin: '28px 0 0', fontSize: 104, fontWeight: 900, lineHeight: 1.02,
            letterSpacing: '.012em', color: 'var(--aip-ink)' }}>
            <span style={{ display: 'block' }}>{p.titleTop}</span>
            <span style={{ display: 'block' }}>{p.titleBottom}</span>
          </h1>
          <div style={{ marginTop: 22, fontFamily: MONO, textTransform: 'uppercase',
            letterSpacing: '.16em', fontSize: 26, fontWeight: 700, color: 'var(--aip-ink-3)' }}>{p.en}</div>
        </div>

        {/* 数字瓦 (accent 实色) */}
        {big && (
          <div style={{ gridColumn: '3', gridRow: '1', display: 'flex', flexDirection: 'column',
            justifyContent: 'center', padding: '0 44px', borderRadius: 30,
            background: `linear-gradient(155deg, ${ac}, ${hexA(ac, 0.82)})`,
            border: `1px solid ${hexA(ac, 0.6)}`,
            boxShadow: `0 2px 0 rgba(255,255,255,.4) inset, 0 26px 60px ${hexA(ac, 0.4)}` }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
              <span style={{ fontSize: 168, fontWeight: 900, lineHeight: 0.82, letterSpacing: '-.03em', color: '#fff' }}>{p.bigNumber}</span>
            </div>
            <span style={{ marginTop: 16, height: 8, width: 60, borderRadius: 4, background: 'rgba(255,255,255,.7)' }}></span>
            <div style={{ marginTop: 16, fontSize: 32, fontWeight: 800, color: '#fff', lineHeight: 1.2, textWrap: 'pretty' }}>{p.bigLabel}</div>
          </div>
        )}

        {/* 元信息瓦 */}
        <div style={{ gridColumn: '1 / 4', gridRow: '2', display: 'grid', gap: 26,
          gridTemplateColumns: `repeat(${tiles.length}, minmax(0, 1fr))` }}>
          {tiles.map((m, i) => (
            <div key={i} className="aip-glass" style={{
              display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 40px', borderRadius: 26 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <span style={{ width: 44, height: 44, borderRadius: 12, background: hexA(ac, 0.14),
                  border: `1px solid ${hexA(ac, 0.4)}`, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: MONO, fontSize: 24, fontWeight: 700, color: ac }}>{String(i + 1).padStart(2, '0')}</span>
                <span style={{ fontFamily: MONO, fontSize: 24, letterSpacing: '.14em', color: 'var(--aip-ink-3)' }}>{m.label}</span>
              </div>
              <div style={{ marginTop: 16, fontSize: 40, fontWeight: 800, color: 'var(--aip-ink)', lineHeight: 1.1 }}>{m.value}</div>
            </div>
          ))}
        </div>
      </div>

      {p.showCaption && (
        <div className="aip-mono" style={{ marginTop: 24 }}>{`*/ `}{p.footnote}{` /*`}</div>
      )}
    </SlideFrame>
  );
}
