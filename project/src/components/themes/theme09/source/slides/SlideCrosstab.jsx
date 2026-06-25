import { useDeckStyles, deckTheme, deckLabel, SlideShell, SlideHead } from './DeckKit.jsx';
/* ============================================================================
   SlideCrosstab — 交叉透视表（行×列列联表 · 含边际合计 + 角落总计）
   独立组件：仅靠 props 控制内容与样式；render 时自注入 DeckKit 基座样式。
   与 Compare（○●/✓◐✕ 定性评级）、Matrix（数值热力网格）、Ledger（财务台账）、
   Grade（字母评级片）、Plans（列=方案）刻意区分：本页是真正的「数据透视表」——
   行类目 × 列类目交叉计数，并自动给出行合计、列合计与右下角总计（边际 margins）。

   ── 可调参数（Props） ──────────────────────────────────────────────────────
   | prop         | 类型                          | 默认值 | 说明                            |
   | columns      | string[]                      | 见下   | 列类目                          |
   | rows         | Row[]                         | 见下   | 行类目 + 各列单元值             |
   | rowCount     | number (2–6)                  | 6      | 展示行数（截取）                |
   | colCount     | number (2–4)                  | 4      | 展示列数（截取）                |
   | heat         | boolean                       | true   | 按值热力着色单元格              |
   | showTotals   | boolean                       | true   | 边际合计行 / 列                 |
   | focus        | boolean                       | true   | 高亮某一行                      |
   | focusIndex   | number (0-based)              | 0      | 高亮第几行                      |
   | highlightCol | number (-1 关 / 0-based)      | -1     | 高亮某一列                      |
   | labelType    | 'number'|'symbol'|'keyword'   | number | 行首序号样式                    |
   | showAside    | boolean                       | true   | 读表提示（装饰）                |
   | head/rowHeader/unit/note : 见下                                             |
   | theme        | Partial<DeckTheme>            | —      | 设计令牌覆盖                    |
   Row = { label, sub?, values:number[] }
   ========================================================================== */
/* ── 页面属性契约 · defaultProps ──────────────────────────────────────────
   本页全部可见文案 / 数据 / 图片槽默认值集中于此，直接编辑即可换内容；
   组件内部以 { ...defaultProps, ...props } 合并，外部传同名 props 逐项覆盖。 */
export const defaultProps = {
  rowCount: 6,
  colCount: 4,
  heat: true,
  showTotals: true,
  focus: true,
  focusIndex: 0,
  highlightCol: -1,
  labelType: 'number',
  showAside: true,
  rowHeader: '赛道 \\ 季度',
  unit: '笔',
  note: '单元格为各赛道在各季度的 ≥1 亿美元融资笔数；右侧与底部为边际合计，右下角为全年总笔数。数据为调研整理，仅供研究参考。',
  head: { no:'08', en:'Cross-Tab · Pivot', cn:'交叉透视 · 笔数列联表' },
  columns: ['一季度','二季度','三季度','四季度'],
  rows: [
      { label:'大模型',     sub:'Foundation', values:[9,11,13,9] },
      { label:'算力基建',   sub:'Compute',    values:[6,7,9,8] },
      { label:'垂直应用',   sub:'Vertical',   values:[5,6,7,6] },
      { label:'数据与工具', sub:'Data/Tool',  values:[3,4,5,4] },
      { label:'安全对齐',   sub:'Safety',     values:[2,3,3,3] },
      { label:'端侧硬件',   sub:'Edge/HW',    values:[2,2,3,2] },
    ],
};

function SlideCrosstab(props){
  useDeckStyles(props.theme);
  const T = (deckTheme ? deckTheme(props.theme) : {});
  const ACC = T.accent || '#46e3c6';
  const BLUE = T.blue || '#4a86ff';
  const navy = T.navy900 || '#050b22';

  const {
    rowCount, colCount, heat, showTotals, focus, focusIndex, highlightCol,
    labelType, showAside, rowHeader, unit, note, head, columns,
    rows,
  } = { ...defaultProps, ...props };

  const cols = columns.slice(0, Math.max(2, Math.min(colCount, columns.length)));
  const shown = rows.slice(0, Math.max(2, Math.min(rowCount, rows.length)));
  const fRow = Math.max(0, Math.min(focusIndex, shown.length - 1));
  const hCol = (highlightCol>=0 && highlightCol<cols.length) ? highlightCol : -1;
  const num = (i)=> deckLabel(labelType, i, { keyword:'R' });

  const cell = (r,ci)=> (shown[r].values[ci]||0);
  const rowTotal = (r)=> cols.reduce((s,_,ci)=> s+cell(r,ci), 0);
  const colTotal = (ci)=> shown.reduce((s,_,r)=> s+cell(r,ci), 0);
  const grand = shown.reduce((s,_,r)=> s+rowTotal(r), 0);
  let cellMax = 1; shown.forEach((_,r)=> cols.forEach((_,ci)=>{ if(cell(r,ci)>cellMax) cellMax=cell(r,ci); }));

  const gridCols = `60px minmax(220px,1.3fr) repeat(${cols.length}, 1fr)${showTotals?' 132px':''}`;
  const gridRows = `74px repeat(${shown.length}, minmax(0,1fr))${showTotals?' 78px':''}`;
  // 逐行递进入场：表头 k=0、数据行 k=ri+1、列合计行 k=末位；同一行各单元同延时 → 整行一起升起，行间错峰
  const rise = (k)=> ({ animationDelay: (0.04 + k*0.08).toFixed(2)+'s' });
  const totalsK = shown.length + 1;

  return (
    <SlideShell orbs={[{ w:480, h:480, right:-150, top:-160,
        color:`radial-gradient(circle at 50% 50%, ${hexA(ACC,.15)}, ${hexA(ACC,0)} 70%)` }]}>
      <SlideHead no={head.no} en={head.en} cn={head.cn} badge={head.no} />

      <div style={{flex:'1 1 0', minHeight:0, display:'flex', flexDirection:'column', marginTop:24}}>
        <div className="dk-glass" style={{flex:'1 1 0', minHeight:0, borderRadius:'var(--dk-radius)', overflow:'hidden',
            display:'grid', gridTemplateColumns:gridCols, gridTemplateRows:gridRows}}>
          {/* 表头 */}
          <div className="dk-anim" style={{...rise(0), gridColumn:'1 / 3', display:'flex', alignItems:'center', padding:'0 22px', borderBottom:`2px solid ${hexA(ACC,.5)}`}}>
            <span style={{fontFamily:'var(--font-cn)', fontWeight:800, fontSize:'var(--type-small)', color:'rgba(255,255,255,.92)'}}>{rowHeader}</span>
          </div>
          {cols.map((c,ci)=>{
            const colHot = ci===hCol;
            return (
              <div key={ci} className="dk-anim" style={{...rise(0), display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:3,
                  borderBottom:`2px solid ${hexA(ACC,.5)}`, background: colHot?hexA(ACC,.12):'transparent'}}>
                <span style={{fontFamily:'var(--font-cn)', fontWeight:800, fontSize:'var(--type-tiny)', color: colHot?ACC:'rgba(255,255,255,.9)'}}>{c}</span>
              </div>
            );
          })}
          {showTotals && (
            <div className="dk-anim" style={{...rise(0), display:'flex', alignItems:'center', justifyContent:'center', borderBottom:`2px solid ${hexA(ACC,.5)}`, background:hexA(ACC,.08)}}>
              <span style={{fontFamily:'var(--font-cn)', fontWeight:800, fontSize:'var(--type-small)', color:ACC}}>行合计</span>
            </div>
          )}

          {/* 数据行 */}
          {shown.map((r,ri)=>{
            const rowHot = focus && ri===fRow;
            const rowBg = rowHot ? hexA(ACC,.1) : (ri%2 ? 'rgba(255,255,255,.025)' : 'transparent');
            return (
              <React.Fragment key={ri}>
                <div className="dk-anim" style={{...rise(ri+1), display:'flex', alignItems:'center', justifyContent:'center', background:rowBg,
                    borderTop:'1px solid rgba(255,255,255,.06)', borderLeft:`3px solid ${rowHot?ACC:'transparent'}`}}>
                  <span style={{fontFamily:'var(--font-mono)', fontSize:14, fontWeight:700, width:32, height:32, borderRadius:8, display:'inline-flex',
                      alignItems:'center', justifyContent:'center', color: rowHot?ACC:'var(--ink-faint)',
                      background:'rgba(255,255,255,.06)', border:`1px solid ${rowHot?hexA(ACC,.5):'rgba(255,255,255,.14)'}`}}>{num(ri)}</span>
                </div>
                <div className="dk-anim" style={{...rise(ri+1), display:'flex', flexDirection:'column', justifyContent:'center', padding:'0 22px', background:rowBg, borderTop:'1px solid rgba(255,255,255,.06)'}}>
                  <span style={{fontFamily:'var(--font-cn)', fontWeight:900, fontSize:'var(--type-small)', color: rowHot?ACC:'#fff', lineHeight:1.15}}>{r.label}</span>
                  {r.sub && <span style={{fontFamily:'var(--font-mono)', fontSize:13, color:'var(--ink-faint)', marginTop:2}}>{r.sub}</span>}
                </div>
                {cols.map((c,ci)=>{
                  const v = cell(ri,ci);
                  const colHot = ci===hCol;
                  const heatBg = heat ? hexA(ACC, 0.06 + 0.46*(v/cellMax)) : 'transparent';
                  return (
                    <div key={ci} className="dk-anim" style={{...rise(ri+1), display:'flex', alignItems:'center', justifyContent:'center', position:'relative',
                        background: colHot ? hexA(ACC, rowHot?.2:.12) : (heat? heatBg : rowBg),
                        borderTop:'1px solid rgba(255,255,255,.06)', borderLeft: colHot?`1px solid ${hexA(ACC,.3)}`:'1px solid rgba(255,255,255,.04)'}}>
                      <span style={{fontFamily:'var(--font-display)', fontWeight:900, fontSize:'var(--type-h2)', lineHeight:1,
                          color: (rowHot||colHot)?'#fff':'rgba(255,255,255,.86)'}}>{v}</span>
                    </div>
                  );
                })}
                {showTotals && (
                  <div className="dk-anim" style={{...rise(ri+1), display:'flex', alignItems:'center', justifyContent:'center', background:hexA(ACC, rowHot?.18:.1),
                      borderTop:'1px solid rgba(255,255,255,.06)', borderLeft:`1px solid ${hexA(ACC,.22)}`}}>
                    <span style={{fontFamily:'var(--font-display)', fontWeight:900, fontSize:'var(--type-h2)', lineHeight:1, color: rowHot?ACC:'#fff'}}>{rowTotal(ri)}</span>
                  </div>
                )}
              </React.Fragment>
            );
          })}

          {/* 列合计行 */}
          {showTotals && (
            <React.Fragment>
              <div className="dk-anim" style={{...rise(totalsK), gridColumn:'1 / 3', display:'flex', alignItems:'center', padding:'0 22px',
                  background:hexA(ACC,.1), borderTop:`2px solid ${hexA(ACC,.5)}`}}>
                <span style={{fontFamily:'var(--font-cn)', fontWeight:800, fontSize:'var(--type-small)', color:ACC}}>列合计</span>
              </div>
              {cols.map((c,ci)=>{
                const colHot = ci===hCol;
                return (
                  <div key={ci} className="dk-anim" style={{...rise(totalsK), display:'flex', alignItems:'center', justifyContent:'center',
                      background: colHot?hexA(ACC,.2):hexA(ACC,.1), borderTop:`2px solid ${hexA(ACC,.5)}`, borderLeft:'1px solid rgba(255,255,255,.06)'}}>
                    <span style={{fontFamily:'var(--font-display)', fontWeight:900, fontSize:'var(--type-h2)', lineHeight:1, color: colHot?ACC:'#fff'}}>{colTotal(ci)}</span>
                  </div>
                );
              })}
              <div className="dk-anim" style={{...rise(totalsK), display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center',
                  background:`linear-gradient(150deg, ${hexA(ACC,.32)}, ${hexA(BLUE,.22)})`, borderTop:`2px solid ${ACC}`, borderLeft:`1px solid ${hexA(ACC,.4)}`}}>
                <span style={{fontFamily:'var(--font-display)', fontWeight:900, fontSize:'var(--type-h2)', lineHeight:1, color:'#fff'}}>{grand}</span>
                <span style={{fontFamily:'var(--font-mono)', fontSize:12, color:'rgba(255,255,255,.7)', letterSpacing:'.08em'}}>总计 {unit}</span>
              </div>
            </React.Fragment>
          )}
        </div>

        {showAside && (
          <div className="dk-anim d3" style={{marginTop:15, flexShrink:0, display:'flex', alignItems:'center', gap:18, flexWrap:'wrap'}}>
            <span style={{fontFamily:'var(--font-mono)', fontSize:13, letterSpacing:'.12em', color:'var(--ink-faint)'}}>读表</span>
            {heat && (
              <span style={{display:'inline-flex', alignItems:'center', gap:10}}>
                <span style={{fontSize:'var(--type-tiny)', color:'var(--ink-dim)'}}>少</span>
                <span style={{width:120, height:12, borderRadius:6, background:`linear-gradient(90deg, ${hexA(ACC,.1)}, ${ACC})`}}></span>
                <span style={{fontSize:'var(--type-tiny)', color:'var(--ink-dim)'}}>多</span>
              </span>
            )}
            <span style={{flex:1, minWidth:240, textAlign:'right', fontSize:'var(--type-tiny)', lineHeight:1.45, color:'var(--ink-faint)', textWrap:'pretty'}}>{note}</span>
          </div>
        )}
      </div>
    </SlideShell>
  );

  function hexA(hex, a){
    if(!hex || hex[0] !== '#') return hex;
    const x = hex.slice(1); const f = x.length===3 ? x.split('').map(c=>c+c).join('') : x;
    return `rgba(${parseInt(f.slice(0,2),16)},${parseInt(f.slice(2,4),16)},${parseInt(f.slice(4,6),16)},${a})`;
  }
}

export default SlideCrosstab;

/* ── 模板参数 schema（自描述 · 迁移即带控件；Tweaks 由此自动生成） ── */
export const slideSpec = { defaults: defaultProps, slot:'crosstab', name:'交叉透视 · Crosstab', controls:[
  { prop:'rowCount', type:'slider', label:'行数量', default:6, min:2, max:6, step:1 },
  { prop:'colCount', type:'slider', label:'列数量', default:4, min:2, max:4, step:1 },
  { prop:'highlightCol', type:'slider', label:'高亮列 (-1 关闭)', default:-1, min:-1, max:(p)=>p.colCount-1, maxFromKey:'colCount', maxFromKeyOffset:-1, step:1 },
  { prop:'heat', type:'toggle', label:'热力着色', default:true },
  { prop:'showTotals', type:'toggle', label:'边际合计', default:true },
  { prop:'showAside', type:'toggle', label:'装饰文案', default:true, desc:'读表提示' },
  { prop:'labelType', type:'labelType', label:'标签类型', default:'数字' },
  { prop:'focus', type:'focus', label:'重点信息 Focus', default:true },
  { prop:'focusIndex', type:'slider', label:'焦点序号', default:0, min:0, max:(p)=>p.rowCount-1, maxFromKey:'rowCount', maxFromKeyOffset:-1, displayOffset:1, step:1, showIf:(p)=>p.focus },
]};
