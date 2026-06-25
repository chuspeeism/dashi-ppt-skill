/* ============================================================================
   SlidePlans — 方案对照（列向对照表 · 每个方案一列 + 推荐列高亮）
   标准 ES Module。与 Compare（行=对象 的评级表）、Matrix（热力）、Ledger（数字台账）、
   Grade（字母评级）刻意区分：本页「列=方案」、行=对照维度，列头是方案卡，焦点列加
   「推荐」徽标并贯通高亮 —— 即常见的「套餐 / 方案对比表」。

   ── 可调参数（Props） ──────────────────────────────────────────────────────
   | prop        | 类型                          | 默认值 | 说明                              |
   | plans       | Plan[]                        | 见下   | 方案数据源（列）                  |
   | attributes  | {label}[]                     | 见下   | 对照维度（行）                    |
   | planCount   | number (2–4)                  | 3      | 展示方案列数（截取）              |
   | rowCount    | number (2–6)                  | 5      | 展示维度行数（截取）              |
   | showBadge   | boolean                       | true   | 焦点列「推荐」徽标                |
   | focus       | boolean                       | true   | 高亮某一方案列                    |
   | focusIndex  | number (0-based)              | 0      | 高亮第几列                        |
   | head/rowHeader/note : 见下                                                  |
   | theme       | Partial<DeckTheme>            | —      | 设计令牌覆盖                      |
   Plan = { name, sub, tag, cells:Cell[] }   Cell = string | 'yes' | 'no'
   ========================================================================== */
import { useDeckStyles, deckTheme, SlideShell, SlideHead } from './DeckKit.jsx';

/* ── 页面属性契约 · defaultProps ──────────────────────────────────────────
   本页全部可见文案 / 数据 / 图片槽默认值集中于此，直接编辑即可换内容；
   组件内部以 { ...defaultProps, ...props } 合并，外部传同名 props 逐项覆盖。 */
export const defaultProps = {
  planCount: 3,
  rowCount: 5,
  showBadge: true,
  focus: true,
  focusIndex: 0,
  rowHeader: '对照维度',
  note: '为研究性主观判断；「推荐」指在当前风险偏好下的相对优选，不构成投资建议。',
  head: { no:'13', en:'Options', cn:'配置方案对照' },
  attributes: [
      { label:'现金流确定性' }, { label:'成长空间' }, { label:'估值泡沫' },
      { label:'已验证 PMF' }, { label:'流动性' }, { label:'适配风险偏好' },
    ],
  plans: [
      { name:'稳健配置', sub:'Infra-led', tag:'低波动', cells:['高','中','低','yes','高','保守'] },
      { name:'均衡配置', sub:'Balanced', tag:'攻守兼备', cells:['中','高','中','yes','中','中性'] },
      { name:'进取配置', sub:'Model-led', tag:'高弹性', cells:['低','极高','高','no','中','激进'] },
      { name:'主题配置', sub:'Thematic', tag:'叙事驱动', cells:['低','高','极高','no','低','投机'] },
    ],
};

function SlidePlans(props){
  useDeckStyles(props.theme);
  const T = (deckTheme ? deckTheme(props.theme) : {});
  const ACC = T.accent || '#46e3c6';
  const WARN = T.warn || '#ffb27a';
  const navy = T.navy900 || '#050b22';

  const {
    planCount, rowCount, showBadge, focus, focusIndex, rowHeader, note,
    head, attributes, plans,
  } = { ...defaultProps, ...props };

  const cols = plans.slice(0, Math.max(2, Math.min(planCount, plans.length)));
  const rows = attributes.slice(0, Math.max(2, Math.min(rowCount, attributes.length)));
  const fIdx = Math.max(0, Math.min(focusIndex, cols.length - 1));
  const gridCols = `minmax(200px, 1fr) repeat(${cols.length}, 1fr)`;

  const Cell = ({ v, hot })=>{
    if(v==='yes') return <span style={{fontSize:26, fontWeight:800, color:ACC}}>✓</span>;
    if(v==='no')  return <span style={{fontSize:24, fontWeight:800, color:'rgba(255,255,255,.34)'}}>✕</span>;
    return <span style={{fontFamily:'var(--font-cn)', fontWeight:800, fontSize:'var(--type-small)', color: hot?'#fff':'rgba(255,255,255,.88)'}}>{v}</span>;
  };

  return (
    <SlideShell orbs={[{ w:480, h:480, right:-150, top:-160,
        color:`radial-gradient(circle at 50% 50%, ${hexA(ACC,.14)}, ${hexA(ACC,0)} 70%)` }]}>
      <SlideHead no={head.no} en={head.en} cn={head.cn} badge={head.no} />

      <div style={{flex:'1 1 0', minHeight:0, display:'flex', flexDirection:'column', marginTop:26}}>
        <div className="dk-anim d1" style={{flex:'1 1 0', minHeight:0, display:'grid', gridTemplateColumns:gridCols,
              gridTemplateRows:`128px repeat(${rows.length}, minmax(0,1fr))`, gap:0}}>
          {/* 列头：方案卡 */}
          <div style={{display:'flex', alignItems:'flex-end', padding:'0 22px 16px'}}>
            <span style={{fontFamily:'var(--font-mono)', fontSize:14, letterSpacing:'.12em', color:'var(--ink-faint)'}}>{rowHeader}</span>
          </div>
          {cols.map((p,ci)=>{
            const hot = focus && ci===fIdx;
            return (
              <div key={ci} style={{position:'relative', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', gap:4,
                    padding:'0 16px', borderRadius:'18px 18px 0 0',
                    background: hot?`linear-gradient(180deg, ${hexA(ACC,.22)}, ${hexA(ACC,.06)})`:'rgba(255,255,255,.04)',
                    border:`1px solid ${hot?hexA(ACC,.6):'rgba(255,255,255,.1)'}`, borderBottom:'none',
                    boxShadow: hot?`0 -10px 40px ${hexA(ACC,.2)}`:'none'}}>
                {showBadge && hot && (
                  <span style={{position:'absolute', top:-14, left:'50%', transform:'translateX(-50%)', padding:'4px 16px', borderRadius:999,
                      fontFamily:'var(--font-cn)', fontWeight:800, fontSize:14, color:navy, background:ACC, whiteSpace:'nowrap',
                      boxShadow:`0 8px 22px ${hexA(ACC,.5)}`}}>★ 推荐</span>
                )}
                <span style={{fontFamily:'var(--font-cn)', fontWeight:900, fontSize:'var(--type-sub)', color: hot?ACC:'#fff'}}>{p.name}</span>
                <span style={{fontFamily:'var(--font-mono)', fontSize:13, letterSpacing:'.06em', color:'var(--ink-faint)'}}>{p.sub}</span>
                {p.tag && <span style={{marginTop:4, padding:'4px 12px', borderRadius:999, fontSize:13, fontWeight:600,
                    color: hot?navy:'#fff', background: hot?ACC:'rgba(255,255,255,.1)', border:`1px solid ${hexA(ACC,.4)}`}}>{p.tag}</span>}
              </div>
            );
          })}

          {/* 行：维度 × 方案 */}
          {rows.map((r,ri)=>(
            <React.Fragment key={ri}>
              <div style={{display:'flex', alignItems:'center', padding:'0 22px', borderTop:'1px solid rgba(255,255,255,.08)'}}>
                <span style={{fontFamily:'var(--font-cn)', fontWeight:700, fontSize:'var(--type-small)', color:'var(--ink-dim)'}}>{r.label}</span>
              </div>
              {cols.map((p,ci)=>{
                const hot = focus && ci===fIdx;
                const last = ri===rows.length-1;
                return (
                  <div key={ci} style={{display:'flex', alignItems:'center', justifyContent:'center', padding:'0 16px',
                      borderTop:'1px solid rgba(255,255,255,.08)',
                      background: hot?hexA(ACC,.08):(ci%2?'rgba(255,255,255,.02)':'transparent'),
                      borderLeft:`1px solid ${hot?hexA(ACC,.4):'transparent'}`, borderRight:`1px solid ${hot?hexA(ACC,.4):'transparent'}`,
                      borderBottom: last?`1px solid ${hot?hexA(ACC,.4):'transparent'}`:'none',
                      borderRadius: last?'0 0 18px 18px':0}}>
                    <Cell v={p.cells[ri]} hot={hot} />
                  </div>
                );
              })}
            </React.Fragment>
          ))}
        </div>

        <div className="dk-anim d3" style={{marginTop:16, flexShrink:0, display:'flex', alignItems:'center', gap:24, flexWrap:'wrap'}}>
          <span style={{fontSize:'var(--type-tiny)', color:'var(--ink-dim)'}}><b style={{color:ACC}}>✓</b> 满足 · <b style={{color:'rgba(255,255,255,.5)'}}>✕</b> 不满足</span>
          <span style={{flex:1, minWidth:200, textAlign:'right', fontSize:'var(--type-tiny)', lineHeight:1.4, color:'var(--ink-faint)', textWrap:'pretty'}}>{note}</span>
        </div>
      </div>
    </SlideShell>
  );

  function hexA(hex, a){
    if(!hex || hex[0] !== '#') return hex;
    const x = hex.slice(1); const f = x.length===3 ? x.split('').map(c=>c+c).join('') : x;
    return `rgba(${parseInt(f.slice(0,2),16)},${parseInt(f.slice(2,4),16)},${parseInt(f.slice(4,6),16)},${a})`;
  }
}

export default SlidePlans;

export const slideSpec = { defaults: defaultProps, slot:'plans', name:'方案对照 · Plans', controls:[
  { prop:'planCount', type:'slider', label:'列数量', default:3, min:2, max:4, step:1, desc:'方案数' },
  { prop:'rowCount', type:'slider', label:'行数量', default:5, min:2, max:6, step:1, desc:'维度数' },
  { prop:'showBadge', type:'toggle', label:'装饰文案', default:true, desc:'推荐徽标' },
  { prop:'focus', type:'focus', label:'重点信息 Focus', default:true },
  { prop:'focusIndex', type:'slider', label:'焦点序号', default:0, min:0, max:(p)=>p.planCount-1, maxFromKey:'planCount', maxFromKeyOffset:-1, displayOffset:1, step:1, showIf:(p)=>p.focus },
]};
