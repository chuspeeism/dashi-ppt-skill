import { useDeckStyles, deckTheme, deckLabel, SlideShell, SlideHead } from './DeckKit.jsx';
/* ============================================================================
   SlideLedger — 数据台账（量化表 · 名次 + 等宽数字 + 行内条 + 涨跌箭头 + 合计行）
   独立组件：仅靠 props 控制内容与样式；render 时自注入 DeckKit 基座样式。
   与 Compare（定性评级 ○●/✓◐✕）、Matrix（热力着色网格）刻意区分：本页为「定量
   财务式台账」——等宽右对齐数字、单列行内比例条、带正负染色的同比箭头、合计/均值行。

   ── 可调参数（Props） ──────────────────────────────────────────────────────
   | prop         | 类型                          | 默认值 | 说明                              |
   | columns      | Column[]                      | 见下   | 指标列定义（不含行标题列）        |
   | rows         | Row[]                         | 见下   | 行数据源                          |
   | rowCount     | number (3–8)                  | 6      | 展示行数（截取 rows）             |
   | colCount     | number (2–5)                  | 4      | 展示指标列数（截取 columns）      |
   | sort         | '降序'|'升序'|'原序'          | '降序' | 按主指标（第1列）排序             |
   | showBar      | boolean                       | true   | 主指标列渲染为行内比例条          |
   | showTotal    | boolean                       | true   | 合计 / 均值行                     |
   | focus        | boolean                       | true   | 高亮某一行                        |
   | focusIndex   | number (0-based)              | 0      | 高亮第几行                        |
   | highlightCol | number (-1 关 / 0-based)      | -1     | 高亮某一指标列                    |
   | labelType    | 'number'|'symbol'|'keyword'   | number | 名次徽标样式                      |
   | head/rowHeader/note : 见下                                                  |
   | theme        | Partial<DeckTheme>            | —      | 设计令牌覆盖                      |
   Column = { label, unit?, type:'num'|'bar'|'delta' }
   Row    = { label, sub?, vals:number[] }   // vals 与 columns 对齐
   ========================================================================== */
/* ── 页面属性契约 · defaultProps ──────────────────────────────────────────
   本页全部可见文案 / 数据 / 图片槽默认值集中于此，直接编辑即可换内容；
   组件内部以 { ...defaultProps, ...props } 合并，外部传同名 props 逐项覆盖。 */
export const defaultProps = {
  rowCount: 6,
  colCount: 4,
  sort: '降序',
  showBar: true,
  showTotal: true,
  focus: true,
  focusIndex: 0,
  highlightCol: -1,
  labelType: 'number',
  rowHeader: '公司 / 赛道',
  note: '金额单位：亿美元；同比为相对上一年披露口径的变化，仅供研究参考。',
  head: { no:'08', en:'Ledger', cn:'资本台账 · 量化一览' },
  columns: [
      { label:'融资额', unit:'亿$', type:'bar'   },
      { label:'估值',   unit:'亿$', type:'num'   },
      { label:'轮次',   unit:'次',  type:'num'   },
      { label:'同比',   unit:'%',   type:'delta' },
    ],
  rows: [
      { label:'OpenAI',     sub:'大模型',     vals:[66,  1570, 2, 82] },
      { label:'xAI',        sub:'大模型',     vals:[60,  450,  2, 120] },
      { label:'Anthropic',  sub:'大模型',     vals:[40,  965,  3, 95] },
      { label:'Databricks', sub:'基础设施',   vals:[100, 620,  1, 48] },
      { label:'CoreWeave',  sub:'算力云',     vals:[110, 190,  2, 160] },
      { label:'Glean',      sub:'垂直应用',   vals:[2.6, 46,   1, 34] },
      { label:'Safe SI',    sub:'大模型',     vals:[10,  50,   1, 0] },
      { label:'Scale AI',   sub:'数据标注',   vals:[10,  138,  1, 28] },
    ],
};

function SlideLedger(props){
  useDeckStyles(props.theme);
  const T = (deckTheme ? deckTheme(props.theme) : {});
  const ACC = T.accent || '#46e3c6';
  const WARN = T.warn || '#ffb27a';
  const navy = T.navy900 || '#050b22';

  const {
    rowCount, colCount, sort, showBar, showTotal, focus, focusIndex,
    highlightCol, labelType, rowHeader, note, head, columns, rows,
  } = { ...defaultProps, ...props };

  const cols = columns.slice(0, Math.max(2, Math.min(colCount, columns.length)));
  let shown = rows.slice();
  if(sort !== '原序'){
    shown = shown.map((r,i)=>({r,i})).sort((a,b)=>{
      const dv = (b.r.vals[0]||0) - (a.r.vals[0]||0);
      return sort==='降序' ? dv : -dv;
    }).map(o=>o.r);
  }
  shown = shown.slice(0, Math.max(3, Math.min(rowCount, shown.length)));
  const fRow = Math.max(0, Math.min(focusIndex, shown.length - 1));
  const hCol = (highlightCol>=0 && highlightCol<cols.length) ? highlightCol : -1;
  const num = (i)=> deckLabel(labelType, i, { keyword:'R' });

  const barMax = Math.max(...shown.map(r=>Math.abs(r.vals[0]||0)), 1);
  const fmt = (v)=> (v==null||isNaN(v)) ? '—' : (Math.abs(v)>=100 ? Math.round(v).toLocaleString() : (Number.isInteger(v)?v:v.toFixed(1)));

  // 合计 / 均值
  const totals = cols.map((c,ci)=>{
    const arr = shown.map(r=>r.vals[ci]).filter(v=>typeof v==='number');
    if(!arr.length) return null;
    const sum = arr.reduce((a,b)=>a+b,0);
    if(c.type==='delta') return { txt:'均 '+ (sum/arr.length>=0?'+':'') + (sum/arr.length).toFixed(0), v:sum/arr.length };
    if(c.type==='num' && c.label==='轮次') return { txt:'Σ '+sum, v:sum };
    return { txt:'Σ '+fmt(sum), v:sum };
  });

  const gridCols = `64px minmax(220px, 1.4fr) repeat(${cols.length}, 1fr)`;

  function Cell({ c, v, rowHot }){
    if(c.type==='delta'){
      const up = (v||0) > 0, flat = (v||0) === 0;
      const col = flat ? 'var(--ink-faint)' : up ? ACC : WARN;
      return (
        <span style={{fontFamily:'var(--font-mono)', fontWeight:700, fontSize:'var(--type-small)', color:col,
            display:'inline-flex', alignItems:'center', gap:6}}>
          <span style={{fontSize:15}}>{flat?'—':up?'▲':'▼'}</span>{flat?'0':Math.abs(v)}<span style={{fontSize:13, opacity:.7}}>{c.unit}</span>
        </span>
      );
    }
    if(c.type==='bar' && showBar){
      const w = Math.max(4, (Math.abs(v||0)/barMax)*100);
      return (
        <div style={{display:'flex', alignItems:'center', gap:14, width:'100%'}}>
          <div style={{flex:1, height:12, borderRadius:6, background:'rgba(255,255,255,.08)', overflow:'hidden', minWidth:40}}>
            <div style={{width:w+'%', height:'100%', borderRadius:6,
                background: rowHot?`linear-gradient(90deg, ${ACC}, ${hexA(ACC,.6)})`:`linear-gradient(90deg, ${hexA(T.blue||'#4a86ff',.95)}, ${hexA(T.blue||'#4a86ff',.45)})`,
                boxShadow: rowHot?`0 0 16px ${hexA(ACC,.6)}`:'none'}}></div>
          </div>
          <span style={{flexShrink:0, fontFamily:'var(--font-mono)', fontWeight:700, fontSize:'var(--type-small)', color: rowHot?ACC:'#fff', minWidth:54, textAlign:'right'}}>{fmt(v)}</span>
        </div>
      );
    }
    return <span style={{fontFamily:'var(--font-mono)', fontWeight:700, fontSize:'var(--type-small)', color: rowHot?'#fff':'rgba(255,255,255,.9)'}}>{fmt(v)}<span style={{fontSize:13, color:'var(--ink-faint)', marginLeft:4}}>{c.unit}</span></span>;
  }

  const headCell = (txt, unit, ci, isRowHeader)=>{
    const colHot = !isRowHeader && ci===hCol;
    return (
      <div key={'h'+ci} style={{display:'flex', alignItems:'center', justifyContent:isRowHeader?'flex-start':'flex-end',
          gap:6, padding:'0 22px', borderBottom:`2px solid ${hexA(ACC,.5)}`, background: colHot?hexA(ACC,.12):'transparent'}}>
        <span style={{fontFamily:'var(--font-cn)', fontWeight:800, fontSize:'var(--type-small)', color: colHot?ACC:'rgba(255,255,255,.92)'}}>{txt}</span>
        {unit && <span style={{fontFamily:'var(--font-mono)', fontSize:13, color:'var(--ink-faint)'}}>{unit}</span>}
      </div>
    );
  };

  return (
    <SlideShell orbs={[{ w:480, h:480, right:-160, top:-160,
        color:`radial-gradient(circle at 50% 50%, ${hexA(ACC,.14)}, ${hexA(ACC,0)} 70%)` }]}>
      <SlideHead no={head.no} en={head.en} cn={head.cn} badge={head.no} />

      <div style={{flex:'1 1 0', minHeight:0, display:'flex', flexDirection:'column', marginTop:28}}>
        <div className="dk-glass dk-anim d1" style={{flex:'1 1 0', minHeight:0, borderRadius:'var(--dk-radius)', overflow:'hidden',
            display:'grid', gridTemplateColumns:gridCols,
            gridTemplateRows:`66px repeat(${shown.length}, minmax(0,1fr))${showTotal?' 70px':''}`}}>
          {/* 表头 */}
          <div style={{borderBottom:`2px solid ${hexA(ACC,.5)}`}}></div>
          {headCell(rowHeader, '', -1, true)}
          {cols.map((c,ci)=> headCell(c.label, c.unit, ci, false))}

          {/* 数据行 */}
          {shown.map((r,ri)=>{
            const rowHot = focus && ri===fRow;
            const rowBg = rowHot ? hexA(ACC,.10) : (ri%2 ? 'rgba(255,255,255,.025)' : 'transparent');
            return (
              <React.Fragment key={ri}>
                <div style={{display:'flex', alignItems:'center', justifyContent:'center', background:rowBg,
                    borderTop:'1px solid rgba(255,255,255,.06)', borderLeft:`3px solid ${rowHot?ACC:'transparent'}`}}>
                  <span style={{fontFamily:'var(--font-display)', fontWeight:900, fontSize:18, width:36, height:36, borderRadius:9,
                      display:'inline-flex', alignItems:'center', justifyContent:'center',
                      color: rowHot?navy:ACC, background: rowHot?ACC:hexA(ACC,.12), border:`1px solid ${hexA(ACC,.5)}`}}>{num(ri)}</span>
                </div>
                <div style={{display:'flex', flexDirection:'column', justifyContent:'center', padding:'0 22px', background:rowBg,
                    borderTop:'1px solid rgba(255,255,255,.06)'}}>
                  <span style={{fontFamily:'var(--font-cn)', fontWeight:900, fontSize:'var(--type-small)', color: rowHot?ACC:'#fff', lineHeight:1.15}}>{r.label}</span>
                  {r.sub && <span style={{fontFamily:'var(--font-mono)', fontSize:13, color:'var(--ink-faint)', marginTop:2}}>{r.sub}</span>}
                </div>
                {cols.map((c,ci)=>{
                  const colHot = ci===hCol;
                  return (
                    <div key={ci} style={{display:'flex', alignItems:'center', justifyContent: c.type==='bar'&&showBar?'stretch':'flex-end', padding:'0 22px',
                        background: colHot?hexA(ACC, rowHot?.16:.08):rowBg, borderTop:'1px solid rgba(255,255,255,.06)',
                        borderLeft: colHot?`1px solid ${hexA(ACC,.3)}`:'1px solid transparent'}}>
                      <Cell c={c} v={r.vals[ci]} rowHot={rowHot} />
                    </div>
                  );
                })}
              </React.Fragment>
            );
          })}

          {/* 合计 / 均值行 */}
          {showTotal && (
            <React.Fragment>
              <div style={{background:hexA(ACC,.1), borderTop:`2px solid ${hexA(ACC,.4)}`}}></div>
              <div style={{display:'flex', alignItems:'center', padding:'0 22px', background:hexA(ACC,.1),
                  borderTop:`2px solid ${hexA(ACC,.4)}`}}>
                <span style={{fontFamily:'var(--font-cn)', fontWeight:900, fontSize:'var(--type-small)', color:ACC, letterSpacing:'.04em'}}>合计 / 均值</span>
              </div>
              {cols.map((c,ci)=>(
                <div key={ci} style={{display:'flex', alignItems:'center', justifyContent:'flex-end', padding:'0 22px',
                    background: ci===hCol?hexA(ACC,.16):hexA(ACC,.1), borderTop:`2px solid ${hexA(ACC,.4)}`,
                    borderLeft: ci===hCol?`1px solid ${hexA(ACC,.3)}`:'1px solid transparent'}}>
                  <span style={{fontFamily:'var(--font-mono)', fontWeight:700, fontSize:'var(--type-small)', color:'#fff'}}>{totals[ci]?totals[ci].txt:'—'}</span>
                </div>
              ))}
            </React.Fragment>
          )}
        </div>

        <div className="dk-anim d3" style={{marginTop:16, flexShrink:0, display:'flex', alignItems:'center', gap:24, flexWrap:'wrap'}}>
          <span style={{fontSize:'var(--type-tiny)', color:'var(--ink-dim)', display:'inline-flex', alignItems:'center', gap:8}}>
            <span style={{color:ACC, fontWeight:700}}>▲</span> 同比上升 <span style={{color:WARN, fontWeight:700, marginLeft:8}}>▼</span> 同比回落</span>
          <span style={{flex:1, minWidth:200, textAlign:'right', fontSize:'var(--type-tiny)', lineHeight:1.4, color:'var(--ink-faint)', textWrap:'pretty'}}>{note}</span>
        </div>
      </div>
    </SlideShell>
  );

  function hexA(hex, a){
    if(!hex || hex[0] !== '#') return hex;
    const n = hex.slice(1);
    const f = n.length===3 ? n.split('').map(c=>c+c).join('') : n;
    const r = parseInt(f.slice(0,2),16), g = parseInt(f.slice(2,4),16), b = parseInt(f.slice(4,6),16);
    return `rgba(${r},${g},${b},${a})`;
  }
}

export default SlideLedger;

/* ── 模板参数 schema（自描述 · 迁移即带控件；Tweaks 由此自动生成） ── */
export const slideSpec = { defaults: defaultProps, slot:'ledger', name:'数据台账 · Ledger', controls:[
  { prop:'rowCount', type:'slider', label:'行数量', default:6, min:3, max:8, step:1 },
  { prop:'colCount', type:'slider', label:'列数量', default:4, min:2, max:4, step:1 },
  { prop:'sort', type:'radio', label:'排序', default:'降序', options:['降序','升序','原序'] },
  { prop:'highlightCol', type:'slider', label:'高亮列 (-1 关闭)', default:-1, min:-1, max:(p)=>p.colCount-1, maxFromKey:'colCount', maxFromKeyOffset:-1, step:1 },
  { prop:'showBar', type:'toggle', label:'行内比例条', default:true },
  { prop:'showTotal', type:'toggle', label:'装饰文案', default:true, desc:'合计/均值行' },
  { prop:'labelType', type:'labelType', label:'标签类型', default:'数字' },
  { prop:'focus', type:'focus', label:'重点信息 Focus', default:true },
  { prop:'focusIndex', type:'slider', label:'焦点序号', default:0, min:0, max:(p)=>p.rowCount-1, maxFromKey:'rowCount', maxFromKeyOffset:-1, displayOffset:1, step:1, showIf:(p)=>p.focus },
]};
