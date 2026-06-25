import { useDeckStyles, deckTheme, deckLabel, SlideShell, SlideHead } from './DeckKit.jsx';
/* ============================================================================
   SlideCompare — 多维对比表格（定性对照表：评级 / 判定 / 标签 / 文本单元格）
   独立组件：仅靠 props 控制内容与样式；render 时自注入 DeckKit 基座样式。
   非图表内容页 · 通用版式「表格 / 对照表」（真·表头 + 行列 + 评级单元格）。

   ── 可调参数（Props） ──────────────────────────────────────────────────────
   | prop         | 类型                          | 默认值 | 说明                              |
   | columns      | Column[]                      | 见下   | 列定义（首列为行标题列，不计入）  |
   | rows         | Row[]                         | 见下   | 行数据源                          |
   | rowCount     | number (2–6)                  | 5      | 展示的行数（截取 rows）           |
   | columnCount  | number (2–5)                  | 4      | 展示的列数（截取 columns）        |
   | focus        | boolean                       | true   | 是否高亮某一行                    |
   | focusIndex   | number (0-based)              | 0      | 高亮第几行                        |
   | highlightCol | number (-1 关闭 / 0-based)    | -1     | 高亮某一列（贯穿表头到表体）      |
   | ratingMax    | number                        | 5      | 评级单元格满值（圆点数）          |
   | labelType    | 'number'|'symbol'|'keyword'   | number | 行首序号样式                      |
   | showAside    | boolean                       | true   | 是否显示底部图例 + 注释           |
   | rowHeader    | string                        | 见下   | 行标题列的表头文字                |
   | note         | string                        | 见下   | 底部注释文案                      |
   | head         | {no,en,cn}                    | 见下   | 页眉编号 / 英文 / 中文标题        |
   | theme        | Partial<DeckTheme>            | —      | 设计令牌覆盖                      |
   Column = { label:string, type:'rating'|'check'|'tag'|'text', align?:'left'|'center' }
   Row    = { label:string, sub?:string, cells:Cell[] }   // cells 与 columns 对齐
   Cell   = number (rating) | 'yes'|'no'|'mid' (check) | string (tag/text)
   ========================================================================== */
/* ── 页面属性契约 · defaultProps ──────────────────────────────────────────
   本页全部可见文案 / 数据 / 图片槽默认值集中于此，直接编辑即可换内容；
   组件内部以 { ...defaultProps, ...props } 合并，外部传同名 props 逐项覆盖。 */
export const defaultProps = {
  rowCount: 5,
  columnCount: 4,
  focus: true,
  focusIndex: 0,
  highlightCol: -1,
  ratingMax: 5,
  labelType: 'number',
  showAside: true,
  rowHeader: '投资原型',
  note: '评级为研究性主观判断，○ 至 ● 表示由弱到强；判定列 ✓ / ◐ / ✕ 表示满足 / 部分 / 不满足。',
  head: { no:'12', en:'Comparison', cn:'多维对比一览' },
  columns: [
      { label:'现金流确定性', type:'rating' },
      { label:'护城河强度',   type:'rating' },
      { label:'估值泡沫风险', type:'rating' },
      { label:'已验证 PMF',   type:'check'  },
      { label:'配置建议',     type:'tag'    },
    ],
  rows: [
      { label:'算力基础设施', sub:'Infra · 卖铲子', cells:[5,4,2,'yes','超配'] },
      { label:'头部大模型',   sub:'Foundation',     cells:[3,5,5,'yes','标配'] },
      { label:'垂直行业应用', sub:'Vertical Apps',  cells:[4,3,3,'mid','精选'] },
      { label:'工具与中间件', sub:'Tooling',        cells:[3,2,3,'mid','低配'] },
      { label:'概念叙事项目', sub:'Narrative',      cells:[1,1,5,'no','回避'] },
      { label:'数据与标注',   sub:'Data Layer',     cells:[4,3,2,'yes','标配'] },
    ],
};

function SlideCompare(props){
  useDeckStyles(props.theme);
  const T = (deckTheme ? deckTheme(props.theme) : {});
  const ACC = T.accent || '#46e3c6';
  const WARN = '#ffb454';

  const {
    rowCount, columnCount, focus, focusIndex, highlightCol, ratingMax, labelType,
    showAside, rowHeader, note, head, columns, rows,
  } = { ...defaultProps, ...props };

  const cols = columns.slice(0, Math.max(2, Math.min(columnCount, columns.length)));
  const shown = rows.slice(0, Math.max(2, Math.min(rowCount, rows.length)));
  const fRow = Math.max(0, Math.min(focusIndex, shown.length - 1));
  const hCol = (highlightCol>=0 && highlightCol<cols.length) ? highlightCol : -1;
  const num = (i)=> deckLabel(labelType, i, { keyword:'R' });

  const TAG_COLOR = { '超配':ACC, '标配':ACC, '精选':'#8fd0ff', '低配':'var(--ink-dim)', '回避':WARN };

  // 单元格内容渲染
  function renderCell(type, val){
    if(type==='rating'){
      const n = Math.max(0, Math.min(Number(val)||0, ratingMax));
      const hot = n >= Math.ceil(ratingMax*0.8);
      return (
        <span style={{display:'inline-flex', gap:5, alignItems:'center'}}>
          {Array.from({length:ratingMax}).map((_,k)=>(
            <span key={k} style={{width:11, height:11, borderRadius:'50%',
              background: k<n ? (hot?ACC:'rgba(255,255,255,.78)') : 'transparent',
              border:`1.5px solid ${k<n ? (hot?ACC:'rgba(255,255,255,.5)') : 'rgba(255,255,255,.22)'}`,
              boxShadow: (k<n && hot) ? `0 0 8px ${hexA(ACC,.6)}` : 'none'}}></span>
          ))}
        </span>
      );
    }
    if(type==='check'){
      const map = { yes:{s:'✓', c:ACC}, mid:{s:'◐', c:WARN}, no:{s:'✕', c:'rgba(255,255,255,.34)'} };
      const m = map[val] || map.no;
      return <span style={{fontSize:26, fontWeight:800, color:m.c, lineHeight:1}}>{m.s}</span>;
    }
    if(type==='tag'){
      const c = TAG_COLOR[val] || 'var(--ink-dim)';
      return <span style={{display:'inline-flex', alignItems:'center', padding:'7px 18px', borderRadius:999,
          fontFamily:'var(--font-cn)', fontWeight:800, fontSize:'var(--type-small)', color:c,
          background:hexA(c,.14), border:`1.5px solid ${hexA(c,.5)}`}}>{val}</span>;
    }
    return <span style={{fontSize:'var(--type-small)', color:'var(--ink-dim)'}}>{val}</span>;
  }

  const gridCols = `minmax(220px, 1.5fr) repeat(${cols.length}, 1fr)`;
  const cellPad = '0 24px';

  // 表头单元格
  const headCell = (txt, ci, isRowHeader)=>{
    const colHot = !isRowHeader && ci===hCol;
    return (
      <div key={'h'+ci} style={{display:'flex', alignItems:'center', justifyContent:isRowHeader?'flex-start':'center',
          padding:cellPad, borderBottom:`2px solid ${hexA(ACC,.5)}`,
          background: colHot ? hexA(ACC,.12) : 'transparent'}}>
        <span style={{fontFamily:'var(--font-cn)', fontWeight:800, fontSize:'var(--type-small)', textWrap:'pretty',
            color: colHot ? ACC : 'rgba(255,255,255,.92)', textAlign:isRowHeader?'left':'center', lineHeight:1.25}}>{txt}</span>
      </div>
    );
  };

  return (
    <SlideShell orbs={[{ w:480, h:480, left:-160, bottom:-180,
        color:'radial-gradient(circle at 50% 50%, rgba(70,227,198,.16), rgba(70,227,198,0) 70%)' }]}>
      <SlideHead no={head.no} en={head.en} cn={head.cn} badge={head.no} />

      <div style={{flex:'1 1 0', minHeight:0, display:'flex', flexDirection:'column', marginTop:28}}>
        {/* 表格本体（单一 grid，列在表头/表体间天然对齐） */}
        <div className="dk-glass dk-anim d1" style={{flex:'1 1 0', minHeight:0, borderRadius:'var(--dk-radius)',
            overflow:'hidden', display:'grid', gridTemplateColumns:gridCols,
            gridTemplateRows:`72px repeat(${shown.length}, minmax(0,1fr))`}}>
          {/* 表头行 */}
          {headCell(rowHeader, -1, true)}
          {cols.map((c,ci)=> headCell(c.label, ci, false))}

          {/* 数据行 */}
          {shown.map((r,ri)=>{
            const rowHot = focus && ri===fRow;
            const rowBg = rowHot ? hexA(ACC,.10) : (ri%2 ? 'rgba(255,255,255,.025)' : 'transparent');
            return (
              <React.Fragment key={ri}>
                {/* 行标题单元格 */}
                <div style={{display:'flex', alignItems:'center', gap:16, padding:cellPad,
                    background:rowBg, borderLeft:`3px solid ${rowHot?ACC:'transparent'}`,
                    borderTop:'1px solid rgba(255,255,255,.06)'}}>
                  <span style={{flexShrink:0, fontFamily:'var(--font-mono)', fontSize:14, fontWeight:700,
                      width:30, height:30, borderRadius:8, display:'inline-flex', alignItems:'center',
                      justifyContent:'center', color: rowHot?ACC:'var(--ink-faint)',
                      background:'rgba(255,255,255,.06)', border:`1px solid ${rowHot?hexA(ACC,.5):'rgba(255,255,255,.14)'}`}}>{num(ri)}</span>
                  <div style={{minWidth:0}}>
                    <div style={{fontFamily:'var(--font-cn)', fontWeight:900, fontSize:'var(--type-small)',
                        color: rowHot?ACC:'#fff', lineHeight:1.15}}>{r.label}</div>
                    {r.sub && <div style={{fontFamily:'var(--font-mono)', fontSize:13, letterSpacing:'.04em',
                        color:'var(--ink-faint)', marginTop:2}}>{r.sub}</div>}
                  </div>
                </div>
                {/* 数值单元格 */}
                {cols.map((c,ci)=>{
                  const colHot = ci===hCol;
                  return (
                    <div key={ci} style={{display:'flex', alignItems:'center', justifyContent:'center', padding:cellPad,
                        background: colHot ? hexA(ACC, rowHot?.16:.08) : rowBg,
                        borderTop:'1px solid rgba(255,255,255,.06)',
                        borderLeft: colHot ? `1px solid ${hexA(ACC,.3)}` : '1px solid transparent'}}>
                      {renderCell(c.type, r.cells[ci])}
                    </div>
                  );
                })}
              </React.Fragment>
            );
          })}
        </div>

        {/* 图例 + 注释 */}
        {showAside && (
          <div className="dk-anim d3" style={{marginTop:16, flexShrink:0, display:'flex', alignItems:'center',
              gap:26, flexWrap:'wrap'}}>
            <div style={{display:'flex', alignItems:'center', gap:10}}>
              <span style={{display:'inline-flex', gap:4}}>
                {[0,1,2].map(k=><span key={k} style={{width:9, height:9, borderRadius:'50%',
                  background:k<2?ACC:'transparent', border:`1.5px solid ${k<2?ACC:'rgba(255,255,255,.3)'}`}}></span>)}
              </span>
              <span style={{fontSize:'var(--type-tiny)', color:'var(--ink-dim)'}}>评级 弱→强</span>
            </div>
            <div style={{display:'flex', alignItems:'center', gap:14}}>
              <span style={{fontSize:'var(--type-tiny)', color:'var(--ink-dim)'}}><b style={{color:ACC}}>✓</b> 满足</span>
              <span style={{fontSize:'var(--type-tiny)', color:'var(--ink-dim)'}}><b style={{color:WARN}}>◐</b> 部分</span>
              <span style={{fontSize:'var(--type-tiny)', color:'var(--ink-dim)'}}><b style={{color:'rgba(255,255,255,.5)'}}>✕</b> 不满足</span>
            </div>
            <span style={{flex:1, minWidth:200, textAlign:'right', fontSize:'var(--type-tiny)', lineHeight:1.4,
                color:'var(--ink-faint)', textWrap:'pretty'}}>{note}</span>
          </div>
        )}
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

export default SlideCompare;

/* ── 模板参数 schema（自描述 · 迁移即带控件；Tweaks 由此自动生成） ── */
export const slideSpec = { defaults: defaultProps, slot:'compare', name:'多维对比 · Compare', controls:[
  { prop:'rowCount', type:'slider', label:'行数量', default:5, min:2, max:6, step:1 },
  { prop:'columnCount', type:'slider', label:'列数量', default:5, min:2, max:5, step:1 },
  { prop:'highlightCol', type:'slider', label:'高亮列 (-1 关闭)', default:-1, min:-1, max:(p)=>p.columnCount-1, maxFromKey:'columnCount', maxFromKeyOffset:-1, step:1 },
  { prop:'showAside', type:'toggle', label:'装饰文案', default:true },
  { prop:'labelType', type:'labelType', label:'标签类型', default:'数字' },
  { prop:'focus', type:'focus', label:'重点信息 Focus', default:true },
  { prop:'focusIndex', type:'slider', label:'焦点序号', default:0, min:0, max:(p)=>p.rowCount-1, maxFromKey:'rowCount', maxFromKeyOffset:-1, displayOffset:1, step:1, showIf:(p)=>p.focus },
]};
