import { useDeckStyles, deckTheme, deckLabel, SlideShell, SlideHead } from './DeckKit.jsx';
/* ============================================================================
   SlideStacked — 结构演变堆叠条（占比 / 绝对值，分段构成随期变化）
   独立组件：仅靠 props 控制内容与样式；render 时自注入 DeckKit 基座样式。

   ── 可调参数（Props） ──────────────────────────────────────────────────────
   | prop        | 类型                          | 默认值 | 说明                            |
   | periods     | Period[]                      | 见下   | 数据源（每条 = 一个时期）       |
   | segs        | string[]                      | 见下   | 分段名称（图例，长度 = 段数）   |
   | itemCount   | number (3–5)                  | 5      | 展示时期数（截取列）            |
   | segCount    | number (2–5)                  | 5      | 展示分段数（截取段）            |
   | mode        | '占比' | '绝对值'             | '占比' | 100% 归一 / 绝对堆叠            |
   | focus       | boolean                       | true   | 是否高亮某一时期列              |
   | focusIndex  | number (0-based)              | 4      | 高亮第几列                      |
   | labelType   | 'number'|'symbol'|'keyword'   | number | 图例角标样式                    |
   | showAside   | boolean                       | true   | 是否显示「结构解读」装饰条      |
   | badge       | string                        | '10'   | 页眉编号徽标                    |
   Period = { label:string, vals:number[] }   vals 与 segs 对齐
   ========================================================================== */
/* ── 页面属性契约 · defaultProps ──────────────────────────────────────────
   本页全部可见文案 / 数据 / 图片槽默认值集中于此，直接编辑即可换内容；
   组件内部以 { ...defaultProps, ...props } 合并，外部传同名 props 逐项覆盖。 */
export const defaultProps = {
  itemCount: 5,
  segCount: 5,
  mode: '占比',
  focus: true,
  focusIndex: 4,
  labelType: 'number',
  showAside: true,
  badge: '10',
  unit: '亿$',
  segs: ['大模型','AI 基础设施','应用层','企业服务','其它赛道'],
  periods: [
      { label:'2020', vals:[40,30,20,15,10] },
      { label:'2021', vals:[80,55,35,25,18] },
      { label:'2022', vals:[120,90,55,40,28] },
      { label:'2023', vals:[210,130,90,60,45] },
      { label:'2024', vals:[380,170,150,110,160] },
    ],
};

function SlideStacked(props){
  useDeckStyles(props.theme);
  const T = (deckTheme ? deckTheme(props.theme) : {});
  const ACC = T.accent || '#46e3c6';
  const BLUE = T.blue || '#4a86ff';
  const VIO = T.violet || '#9f7bff';
  const WARN = T.warn || '#ffb27a';
  const PALETTE = [BLUE, ACC, VIO, WARN, '#7fa8ff'];

  const {
    itemCount, segCount, mode, focus, focusIndex, labelType, showAside,
    badge, unit, segs, periods,
  } = { ...defaultProps, ...props };

  const sc = Math.max(2, Math.min(segCount, segs.length));
  const ic = Math.max(3, Math.min(itemCount, periods.length));
  const segNames = segs.slice(0, sc);
  const cols = periods.slice(0, ic).map(p=>({ label:p.label, vals:p.vals.slice(0,sc), sum:p.vals.slice(0,sc).reduce((a,b)=>a+b,0) }));
  const fIdx = Math.max(0, Math.min(focusIndex, cols.length - 1));
  const maxSum = Math.max(...cols.map(c=>c.sum));
  const lbl = (i)=> deckLabel(labelType, i, { keyword:'SEG' });
  const is100 = mode === '占比';

  return (
    <SlideShell orbs={[{ w:520, h:520, left:-160, top:-150,
        color:`radial-gradient(circle at 50% 50%, ${hexA(BLUE,.20)}, ${hexA(BLUE,0)} 70%)` }]}>
      <SlideHead no={badge} en="Composition Shift" cn="结构演变 · 占比迁移"
        badge={labelType==='keyword'?'COMP':labelType==='symbol'?'◆':badge} />

      <div style={{flex:'1 1 0', minHeight:0, display:'flex', flexDirection:'column', marginTop:26}}>
        <div className="dk-glass dk-anim d1" style={{flex:'1 1 0', minHeight:0, borderRadius:'var(--dk-radius)',
              padding:'26px 44px 18px', position:'relative', display:'flex', flexDirection:'column'}}>
          <div style={{display:'flex', justifyContent:'space-between', alignItems:'baseline', marginBottom:14}}>
            <span style={{fontSize:'var(--type-sub)', fontWeight:700}}>各赛道资金{is100?'占比':'规模'}演变</span>
            <span style={{fontFamily:'var(--font-mono)', fontSize:'var(--type-tiny)', color:'var(--ink-faint)'}}>{is100?'每列归一至 100%':`单位 · ${unit}`}</span>
          </div>

          {/* 柱区 */}
          <div style={{flex:'1 1 0', minHeight:0, display:'flex', alignItems:'flex-end', justifyContent:'space-around', gap:30, paddingBottom:8}}>
            {cols.map((c,ci)=>{
              const hot = focus && ci===fIdx;
              const colH = is100 ? 100 : (c.sum/maxSum)*100;
              return (
                <div key={ci} className={'dk-anim d'+Math.min(ci+1,6)} style={{flex:'1 1 0', height:'100%', display:'flex', flexDirection:'column',
                    alignItems:'center', justifyContent:'flex-end', opacity: focus&&!hot?.55:1, minWidth:0}}>
                  <span style={{fontFamily:'var(--font-display)', fontWeight:900, fontSize:hot?30:24, color:hot?ACC:'#fff', marginBottom:8}}>
                    {is100 ? '100%' : c.sum}
                  </span>
                  <div style={{width:'72%', maxWidth:150, height:`calc(${colH}% - 46px)`, minHeight:40, display:'flex', flexDirection:'column-reverse',
                      borderRadius:14, overflow:'hidden', border:'1px solid rgba(255,255,255,.16)',
                      boxShadow: hot?`0 26px 64px ${hexA(ACC,.32)}, 0 0 0 2px ${ACC}`:'0 18px 44px rgba(3,8,30,.46)'}}>
                    {c.vals.map((v,si)=>(
                      <div key={si} style={{flexGrow:v, flexBasis:0,
                          background:`linear-gradient(176deg, rgba(255,255,255,.32), rgba(255,255,255,.08) 26%, rgba(255,255,255,0) 52%, rgba(4,10,34,.16) 100%), ${PALETTE[si%PALETTE.length]}`,
                          position:'relative', boxShadow:'inset 0 1px 0 rgba(255,255,255,.42)',
                          borderTop: si<c.vals.length-1?'1px solid rgba(4,10,30,.32)':'none', display:'flex', alignItems:'center', justifyContent:'center'}}>
                        {(()=>{ const pct=Math.round(v/c.sum*100); return pct>=12 ? (
                          <span style={{fontFamily:'var(--font-display)', fontWeight:800, fontSize:18, color:'rgba(4,12,38,.82)', textShadow:'0 1px 0 rgba(255,255,255,.3)'}}>{is100?pct+'%':v}</span>
                        ) : null; })()}
                      </div>
                    ))}
                  </div>
                  <span style={{fontFamily:'var(--font-cn)', fontWeight:hot?800:600, fontSize:24, color:hot?ACC:'rgba(255,255,255,.78)', marginTop:12}}>{c.label}</span>
                </div>
              );
            })}
          </div>

          {/* 图例 */}
          <div style={{display:'flex', gap:26, paddingTop:12, marginTop:6, borderTop:'1px solid rgba(255,255,255,.1)', flexWrap:'wrap', fontSize:'var(--type-tiny)', color:'var(--ink-dim)'}}>
            {segNames.map((s,i)=>(
              <span key={i} style={{display:'inline-flex', alignItems:'center', gap:10}}>
                <i style={{width:18, height:18, borderRadius:5, background:PALETTE[i%PALETTE.length]}}></i>{s}
              </span>
            ))}
          </div>
        </div>

        {/* 底部解读 */}
        {showAside && (()=>{ const c=cols[fIdx]; const top=c.vals.indexOf(Math.max(...c.vals)); return (
          <div className="dk-glass-dark dk-anim d2" style={{marginTop:18, flexShrink:0, borderRadius:20, padding:'18px 30px', display:'flex', alignItems:'center', gap:22}}>
            <span style={{flexShrink:0, fontFamily:'var(--font-mono)', fontSize:14, letterSpacing:'.12em', color:ACC}}>结构</span>
            <p style={{fontSize:'var(--type-small)', lineHeight:1.5, color:'rgba(255,255,255,.86)', textWrap:'pretty'}}>
              {c.label} 年，<b style={{color:'#fff'}}>{segNames[top]}</b>占比升至 <b style={{color:ACC}}>{Math.round(c.vals[top]/c.sum*100)}%</b>，
              成为最大权重；五年间头部赛道份额持续走高，资金结构由分散走向集中。
            </p>
          </div>
        );})()}
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

export default SlideStacked;

/* ── 模板参数 schema（自描述 · 迁移即带控件；Tweaks 由此自动生成） ── */
export const slideSpec = { defaults: defaultProps, slot:'stacked', name:'结构演变 · Stacked', controls:[
  { prop:'itemCount', type:'slider', label:'列数量', default:5, min:3, max:5, step:1 },
  { prop:'segCount', type:'slider', label:'分段数量', default:5, min:2, max:5, step:1 },
  { prop:'mode', type:'radio', label:'图表类型', default:'占比', options:['占比','绝对值'] },
  { prop:'showAside', type:'toggle', label:'装饰文案', default:true },
  { prop:'labelType', type:'labelType', label:'标签类型', default:'数字' },
  { prop:'focus', type:'focus', label:'重点信息 Focus', default:true },
  { prop:'focusIndex', type:'slider', label:'焦点序号', default:4, min:0, max:(p)=>p.itemCount-1, maxFromKey:'itemCount', maxFromKeyOffset:-1, displayOffset:1, step:1, showIf:(p)=>p.focus },
]};
