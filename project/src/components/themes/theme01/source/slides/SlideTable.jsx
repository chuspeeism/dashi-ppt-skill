// SlideTable.jsx — 表格 / data table page.
// Migration-safe: default export + defaultProps + controls; props-only; aip- scope.
// Generic, data-driven table (columns + rows + optional footer). One column can be
// "emphasized" (tinted, with optional inline proportional bars), one row highlighted.
import React from 'react';
import { SlideFrame, SlideHead, MonoCaption, GlassCard, hexA } from './SlideKit.jsx';

export const defaultProps = {
  kicker: '# 横向透视',
  title: '轮次结构 · 笔数与单笔明细',
  en: 'Funding Rounds — Count & Avg Ticket',
  cn: '不同轮次的事件笔数与平均单笔',
  columns: ['融资轮次', '事件笔数', '平均单笔 / 亿美元'],
  rows: [
    ['种子轮 Seed', '8', '1.2'],
    ['A 轮 Series A', '12', '1.8'],
    ['B 轮 Series B', '18', '3.5'],
    ['C 轮 Series C', '15', '6.8'],
    ['D 轮及以后 Series D+', '22', '15.2'],
    ['未标明轮次 Undisclosed', '22', '18.6'],
  ],
  footer: ['全年合计', '97', '10.0'],
  textCols: [],
  caption: '表格 · 越到后轮，单笔越大——“赢家通吃”',
  // tweakable
  rowCount: 6,
  emphasizeCol: 2,
  showBars: true,
  highlight: true,
  highlightIndex: 4,
  striped: true,
  showFooter: true,
  accentColor: '#5b8def',
  showCaption: true,
};

export const controls = [
  { key: 'rowCount', label: '数据行数', type: 'number', default: 6, min: 1, max: 10, step: 1, unit: ' 行',
    description: '展示的数据行数量（不含表头与合计行）；行高随行数自适应，不会溢出。' },
  { key: 'emphasizeCol', label: '强调列', type: 'select', default: 2,
    options: [{ value: -1, label: '无' }, { value: 1, label: '第 2 列' }, { value: 2, label: '第 3 列' }],
    description: '被着重显示的数值列（着色，可叠加迷你条）。' },
  { key: 'showBars', label: '迷你条形', type: 'boolean', default: true,
    description: '是否在强调列的单元格内叠加比例条。' },
  { key: 'highlight', label: '重点强调', type: 'boolean', default: true,
    description: '是否高亮其中一行。' },
  { key: 'highlightIndex', label: '强调第几行', type: 'number', default: 4, min: 0, max: 5, step: 1,
    description: '被强调的数据行序号（从 0 开始）。' },
  { key: 'striped', label: '斑马纹', type: 'boolean', default: true,
    description: '隔行底色，便于横向阅读。' },
  { key: 'showFooter', label: '合计行', type: 'boolean', default: true,
    description: '是否显示底部合计 / 汇总行。' },
  { key: 'accentColor', label: '主题色', type: 'color', default: '#5b8def',
    options: ['#5b8def', '#46b083', '#e0a23a', '#e8503a', '#7a5ae0'],
    description: '表头、强调列与高亮行的颜色。' },
  { key: 'showCaption', label: '装饰文案', type: 'boolean', default: true,
    description: '底部 */ … /* 说明文案的显示。' },
];

const num = (v) => {
  const m = String(v).replace(/[^\d.]/g, '');
  return m ? parseFloat(m) : 0;
};

export default function SlideTable(props) {
  const p = { ...defaultProps, ...props };
  const ac = p.accentColor;
  const cols = p.columns;
  const n = cols.length;
  const rows = p.rows.slice(0, Math.max(1, Math.min(p.rows.length, p.rowCount)));
  const emp = p.emphasizeCol;
  const colTemplate = `minmax(0, 2.2fr) ${Array(n - 1).fill('minmax(0, 1fr)').join(' ')}`;
  const empMax = emp > 0 ? Math.max(...rows.map((r) => num(r[emp])), num(p.footer ? p.footer[emp] : 0)) : 0;

  // density — row heights flex to fill the card, type scales with row count so
  // any number of rows (e.g. a migrated dataset > 6) fits without overflowing.
  // At higher counts we also open up vertical rhythm (row gaps, a shorter header,
  // a hair more card padding) and ease the type down so 10 rows never feel packed.
  const nRows = rows.length;
  const dense = nRows > 8;                 // 9–10 rows
  const mid = nRows > 6 && nRows <= 8;     // 7–8 rows
  const numFont = nRows <= 6 ? 38 : mid ? 32 : 27;
  const txtFont = nRows <= 6 ? 31 : mid ? 27 : 24;
  const headFont = nRows <= 6 ? 27 : mid ? 26 : 24;
  const padX = dense ? 22 : 26;
  const rowGap = nRows <= 6 ? 0 : dense ? 8 : 6;
  const cardPad = nRows <= 6 ? 14 : 18;

  const cell = (text, ci, opts = {}) => {
    const textCol = (p.textCols || []).includes(ci);
    const isEmp = ci === emp && ci > 0 && !textCol;
    const right = ci > 0 && !textCol;
    const bar = isEmp && p.showBars && !opts.head && empMax > 0;
    return (
      <div key={ci} style={{
        position: 'relative', padding: `0 ${padX}px`, display: 'flex', alignItems: 'center',
        justifyContent: right ? 'flex-end' : 'flex-start', overflow: 'hidden', minWidth: 0,
        background: isEmp && !opts.head ? hexA(ac, opts.foot ? 0.14 : 0.07) : 'transparent',
      }}>
        {bar && (
          <div style={{ position: 'absolute', right: 0, top: '18%', bottom: '18%', width: `${(num(text) / empMax) * 100}%`,
            background: `linear-gradient(90deg, ${hexA(ac, 0)}, ${hexA(ac, opts.on ? 0.4 : 0.2)})`, borderRadius: 8 }} />
        )}
        <span style={{ position: 'relative', whiteSpace: 'nowrap',
          fontFamily: right ? "'Space Mono', monospace" : 'inherit',
          fontSize: opts.head ? headFont : (right ? numFont : txtFont),
          fontWeight: opts.head ? 700 : (opts.foot ? 900 : (right ? 700 : 600)),
          color: opts.head ? '#fff' : (isEmp ? (opts.on ? ac : 'var(--aip-ink)') : (opts.on ? ac : (right ? 'var(--aip-ink)' : 'var(--aip-ink-2)'))),
        }}>{text}</span>
      </div>
    );
  };

  const headerH = dense ? 72 : 82;

  return (
    <SlideFrame bg="a">
      <SlideHead kicker={p.kicker} tone="blue" title={p.title} en={p.en} cn={p.cn} />

      <div style={{ flex: 1, display: 'flex', minHeight: 0, marginTop: nRows <= 6 ? 14 : 20 }}>
        <GlassCard style={{ width: '100%', display: 'flex', flexDirection: 'column', padding: cardPad, borderRadius: 26, overflow: 'hidden' }}>
          {/* header */}
          <div style={{ flex: '0 0 auto', display: 'grid', gridTemplateColumns: colTemplate, height: headerH, marginBottom: rowGap, borderRadius: 16,
            background: `linear-gradient(120deg, ${ac}, ${hexA(ac, 0.82)})`, boxShadow: `0 12px 28px ${hexA(ac, 0.28)}` }}>
            {cols.map((c, ci) => cell(c, ci, { head: true }))}
          </div>

          {/* data rows — each flexes to share the remaining height equally */}
          <div style={{ flex: 1, minHeight: 0, display: 'flex', flexDirection: 'column', gap: rowGap }}>
            {rows.map((r, ri) => {
              const on = p.highlight && ri === p.highlightIndex;
              return (
                <div key={ri} style={{ position: 'relative', flex: '1 1 0', minHeight: 0, display: 'grid', gridTemplateColumns: colTemplate,
                  background: on ? `linear-gradient(100deg, ${hexA(ac, 0.16)}, ${hexA(ac, 0.05)})` : (p.striped && ri % 2 ? 'rgba(255,255,255,.4)' : 'transparent'),
                  borderRadius: on ? 14 : (rowGap ? 10 : 0),
                  boxShadow: on ? `0 14px 32px ${hexA(ac, 0.18)}` : 'none',
                  borderBottom: (rowGap || ri === rows.length - 1) ? 'none' : '1px solid rgba(70,72,100,.1)' }}>
                  {on && <div style={{ position: 'absolute', left: 0, top: '14%', bottom: '14%', width: 6, borderRadius: 4, background: ac }} />}
                  {r.map((v, ci) => cell(v, ci, { on }))}
                </div>
              );
            })}
          </div>

          {/* footer */}
          {p.showFooter && p.footer && (
            <div style={{ flex: '0 0 auto', display: 'grid', gridTemplateColumns: colTemplate, height: dense ? 72 : 80, marginTop: rowGap || 6,
              borderTop: `2px solid ${hexA(ac, 0.45)}`, background: hexA(ac, 0.06), borderRadius: 14 }}>
              {p.footer.map((v, ci) => cell(v, ci, { foot: true }))}
            </div>
          )}
        </GlassCard>
      </div>

      {p.showCaption && <MonoCaption>{p.caption}</MonoCaption>}
    </SlideFrame>
  );
}
