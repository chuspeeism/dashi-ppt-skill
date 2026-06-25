import { useDeckStyles, deckTheme, deckLabel, SlideShell, SlideHead } from './DeckKit.jsx';
/* ============================================================================
   SlideGrade — 评级矩阵（字母评级方阵 · S/A/B/C/D 等级片 + 综合评级徽章）
   独立组件：仅靠 props 控制内容与样式；render 时自注入 DeckKit 基座样式。
   与 Compare（○●/✓◐✕ 定性）、Matrix（数值热力）、Ledger（定量数字台账）刻意区分：
   本页每格是一枚「字母等级片」（按等级染色），并可生成一列「综合评级」圆徽章。

   ── 可调参数（Props） ──────────────────────────────────────────────────────
   | prop          | 类型                          | 默认值 | 说明                              |
   | criteria      | string[]                      | 见下   | 评价维度（列）                    |
   | rows          | Row[]                         | 见下   | 评级对象（行）                    |
   | rowCount      | number (3–8)                  | 6      | 展示行数（截取）                  |
   | colCount      | number (2–6)                  | 5      | 展示维度数（截取）                |
   | showComposite | boolean                       | true   | 综合评级徽章列                    |
   | focus         | boolean                       | true   | 高亮某一行                        |
   | focusIndex    | number (0-based)              | 0      | 高亮第几行                        |
   | highlightCol  | number (-1 关 / 0-based)      | -1     | 高亮某一维度列                    |
   | labelType     | 'number'|'symbol'|'keyword'   | number | 行首序号样式                      |
   | showAside     | boolean                       | true   | 底部等级图例（装饰文案）          |
   | head/rowHeader/note : 见下                                                  |
   | theme         | Partial<DeckTheme>            | —      | 设计令牌覆盖                      |
   Row = { label, sub?, grades:Grade[] }   Grade ∈ 'S'|'A'|'B'|'C'|'D'
   ========================================================================== */
/* ── 页面属性契约 · defaultProps ──────────────────────────────────────────
   本页全部可见文案 / 数据 / 图片槽默认值集中于此，直接编辑即可换内容；
   组件内部以 { ...defaultProps, ...props } 合并，外部传同名 props 逐项覆盖。 */
export const defaultProps = {
  rowCount: 6,
  colCount: 5,
  showComposite: true,
  focus: true,
  focusIndex: 0,
  highlightCol: -1,
  labelType: 'number',
  showAside: true,
  rowHeader: '赛道 / 投资原型',
  note: '等级为研究性主观判断：S 卓越 · A 优 · B 良 · C 中 · D 弱；综合为各维度等级的加权折算。',
  head: { no:'10', en:'Grading Matrix', cn:'赛道评级矩阵' },
  criteria: ['资本热度','护城河','现金流','成长性','泡沫风险','落地确定'],
  rows: [
      { label:'算力基础设施', sub:'Infra',       grades:['S','A','A','B','B','S'] },
      { label:'头部大模型',   sub:'Foundation',  grades:['S','S','C','S','D','B'] },
      { label:'垂直行业应用', sub:'Vertical',    grades:['A','B','B','A','C','A'] },
      { label:'工具与中间件', sub:'Tooling',     grades:['B','C','B','B','C','B'] },
      { label:'数据与标注',   sub:'Data Layer',  grades:['A','B','A','B','B','A'] },
      { label:'概念叙事项目', sub:'Narrative',   grades:['B','D','D','C','S','D'] },
      { label:'安全与对齐',   sub:'Safety',      grades:['A','A','C','A','C','B'] },
      { label:'端侧与硬件',   sub:'Edge / HW',   grades:['B','B','B','B','C','C'] },
    ],
};

function SlideGrade(props){
  useDeckStyles(props.theme);
  const T = (deckTheme ? deckTheme(props.theme) : {});
  const ACC = T.accent || '#46e3c6';
  const BLUE = T.blue || '#4a86ff';
  const WARN = T.warn || '#ffb27a';
  const navy = T.navy900 || '#050b22';

  const {
    rowCount, colCount, showComposite, focus, focusIndex, highlightCol, labelType,
    showAside, rowHeader, note, head, criteria, rows,
  } = { ...defaultProps, ...props };

  const cols = criteria.slice(0, Math.max(2, Math.min(colCount, criteria.length)));
  const shown = rows.slice(0, Math.max(3, Math.min(rowCount, rows.length)));
  const fRow = Math.max(0, Math.min(focusIndex, shown.length - 1));
  const hCol = (highlightCol>=0 && highlightCol<cols.length) ? highlightCol : -1;
  const num = (i)=> deckLabel(labelType, i, { keyword:'R' });

  const GP = { S:4, A:3, B:2, C:1, D:0 };
  const GC = { S:ACC, A:BLUE, B:T.violet||'#9f7bff', C:WARN, D:'rgba(255,255,255,.34)' };
  const composite = (grades)=>{
    const arr = grades.slice(0, cols.length).map(g=>GP[g]).filter(v=>v!=null);
    if(!arr.length) return 'C';
    const avg = arr.reduce((a,b)=>a+b,0)/arr.length;
    return avg>=3.5?'S':avg>=2.5?'A':avg>=1.5?'B':avg>=0.6?'C':'D';
  };

  const gridCols = `64px minmax(220px,1.3fr) repeat(${cols.length}, 1fr)${showComposite?' 130px':''}`;

  const Chip = ({g, big, hot})=>{
    const c = GC[g] || GC.C;
    const sz = big ? 56 : 44;
    return (
      <span style={{width:sz, height:sz, borderRadius:big?16:12, display:'inline-flex', alignItems:'center', justifyContent:'center',
          fontFamily:'var(--font-display)', fontWeight:900, fontSize:big?28:22,
          color: g==='D'?'#fff':navy, background: g==='D'?'rgba(255,255,255,.08)':`linear-gradient(150deg, ${c}, ${hexA(c,.7)})`,
          border:`1px solid ${hexA(c,.6)}`, boxShadow: (hot&&big)?`0 0 20px ${hexA(c,.6)}`:'none'}}>{g}</span>
    );
  };

  return (
    <SlideShell orbs={[{ w:480, h:480, left:-150, bottom:-170,
        color:`radial-gradient(circle at 50% 50%, ${hexA(BLUE,.18)}, ${hexA(BLUE,0)} 70%)` }]}>
      <SlideHead no={head.no} en={head.en} cn={head.cn} badge={head.no} />

      <div style={{flex:'1 1 0', minHeight:0, display:'flex', flexDirection:'column', marginTop:26}}>
        <div className="dk-glass dk-anim d1" style={{flex:'1 1 0', minHeight:0, borderRadius:'var(--dk-radius)', overflow:'hidden',
            display:'grid', gridTemplateColumns:gridCols, gridTemplateRows:`70px repeat(${shown.length}, minmax(0,1fr))`}}>
          {/* 表头 */}
          <div style={{borderBottom:`2px solid ${hexA(ACC,.5)}`}}></div>
          <div style={{display:'flex', alignItems:'center', padding:'0 22px', borderBottom:`2px solid ${hexA(ACC,.5)}`}}>
            <span style={{fontFamily:'var(--font-cn)', fontWeight:800, fontSize:'var(--type-small)', color:'rgba(255,255,255,.92)'}}>{rowHeader}</span>
          </div>
          {cols.map((c,ci)=>{
            const colHot = ci===hCol;
            return (
              <div key={ci} style={{display:'flex', alignItems:'center', justifyContent:'center', padding:'0 8px', textAlign:'center',
                  borderBottom:`2px solid ${hexA(ACC,.5)}`, background: colHot?hexA(ACC,.12):'transparent'}}>
                <span style={{fontFamily:'var(--font-cn)', fontWeight:800, fontSize:'var(--type-tiny)', color: colHot?ACC:'rgba(255,255,255,.9)', lineHeight:1.2}}>{c}</span>
              </div>
            );
          })}
          {showComposite && (
            <div style={{display:'flex', alignItems:'center', justifyContent:'center', borderBottom:`2px solid ${hexA(ACC,.5)}`}}>
              <span style={{fontFamily:'var(--font-cn)', fontWeight:800, fontSize:'var(--type-small)', color:ACC}}>综合</span>
            </div>
          )}

          {/* 数据行 */}
          {shown.map((r,ri)=>{
            const rowHot = focus && ri===fRow;
            const rowBg = rowHot ? hexA(ACC,.10) : (ri%2 ? 'rgba(255,255,255,.025)' : 'transparent');
            const comp = composite(r.grades);
            return (
              <React.Fragment key={ri}>
                <div style={{display:'flex', alignItems:'center', justifyContent:'center', background:rowBg,
                    borderTop:'1px solid rgba(255,255,255,.06)', borderLeft:`3px solid ${rowHot?ACC:'transparent'}`}}>
                  <span style={{fontFamily:'var(--font-mono)', fontSize:14, fontWeight:700, width:32, height:32, borderRadius:8, display:'inline-flex',
                      alignItems:'center', justifyContent:'center', color: rowHot?ACC:'var(--ink-faint)',
                      background:'rgba(255,255,255,.06)', border:`1px solid ${rowHot?hexA(ACC,.5):'rgba(255,255,255,.14)'}`}}>{num(ri)}</span>
                </div>
                <div style={{display:'flex', flexDirection:'column', justifyContent:'center', padding:'0 22px', background:rowBg, borderTop:'1px solid rgba(255,255,255,.06)'}}>
                  <span style={{fontFamily:'var(--font-cn)', fontWeight:900, fontSize:'var(--type-small)', color: rowHot?ACC:'#fff', lineHeight:1.15}}>{r.label}</span>
                  {r.sub && <span style={{fontFamily:'var(--font-mono)', fontSize:13, color:'var(--ink-faint)', marginTop:2}}>{r.sub}</span>}
                </div>
                {cols.map((c,ci)=>{
                  const colHot = ci===hCol;
                  return (
                    <div key={ci} style={{display:'flex', alignItems:'center', justifyContent:'center', background: colHot?hexA(ACC,rowHot?.16:.08):rowBg,
                        borderTop:'1px solid rgba(255,255,255,.06)', borderLeft: colHot?`1px solid ${hexA(ACC,.3)}`:'1px solid transparent'}}>
                      <Chip g={r.grades[ci]} hot={rowHot} />
                    </div>
                  );
                })}
                {showComposite && (
                  <div style={{display:'flex', alignItems:'center', justifyContent:'center', background:rowBg, borderTop:'1px solid rgba(255,255,255,.06)', borderLeft:'1px solid rgba(255,255,255,.06)'}}>
                    <Chip g={comp} big hot={rowHot} />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>

        {showAside && (
          <div className="dk-anim d3" style={{marginTop:16, flexShrink:0, display:'flex', alignItems:'center', gap:18, flexWrap:'wrap'}}>
            <span style={{fontFamily:'var(--font-mono)', fontSize:13, letterSpacing:'.12em', color:'var(--ink-faint)'}}>等级</span>
            {['S','A','B','C','D'].map((g,i)=>(
              <span key={i} style={{display:'inline-flex', alignItems:'center', gap:8}}>
                <span style={{width:22, height:22, borderRadius:6, display:'inline-flex', alignItems:'center', justifyContent:'center',
                    fontFamily:'var(--font-display)', fontWeight:900, fontSize:13, color: g==='D'?'#fff':navy,
                    background: g==='D'?'rgba(255,255,255,.1)':GC[g], border:`1px solid ${hexA(GC[g],.6)}`}}>{g}</span>
                <span style={{fontSize:'var(--type-tiny)', color:'var(--ink-dim)'}}>{['卓越','优','良','中','弱'][i]}</span>
              </span>
            ))}
            <span style={{flex:1, minWidth:200, textAlign:'right', fontSize:'var(--type-tiny)', lineHeight:1.4, color:'var(--ink-faint)', textWrap:'pretty'}}>{note}</span>
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

export default SlideGrade;

/* ── 模板参数 schema（自描述 · 迁移即带控件；Tweaks 由此自动生成） ── */
export const slideSpec = { defaults: defaultProps, slot:'grade', name:'评级矩阵 · Grade', controls:[
  { prop:'rowCount', type:'slider', label:'行数量', default:6, min:3, max:8, step:1 },
  { prop:'colCount', type:'slider', label:'列数量', default:5, min:2, max:6, step:1 },
  { prop:'highlightCol', type:'slider', label:'高亮列 (-1 关闭)', default:-1, min:-1, max:(p)=>p.colCount-1, maxFromKey:'colCount', maxFromKeyOffset:-1, step:1 },
  { prop:'showComposite', type:'toggle', label:'综合评级', default:true },
  { prop:'showAside', type:'toggle', label:'装饰文案', default:true, desc:'等级图例' },
  { prop:'labelType', type:'labelType', label:'标签类型', default:'数字' },
  { prop:'focus', type:'focus', label:'重点信息 Focus', default:true },
  { prop:'focusIndex', type:'slider', label:'焦点序号', default:0, min:0, max:(p)=>p.rowCount-1, maxFromKey:'rowCount', maxFromKeyOffset:-1, displayOffset:1, step:1, showIf:(p)=>p.focus },
]};
