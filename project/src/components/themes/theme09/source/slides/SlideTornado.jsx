import { useDeckStyles, deckTheme, deckLabel, SlideShell, SlideHead } from './DeckKit.jsx';
/* ============================================================================
   SlideTornado — 龙卷风图（中轴双向发散条 · 两测度左右对望）
   独立组件：仅靠 props 控制内容与样式；render 时自注入 DeckKit 基座样式。
   与 Dumbbell（共享横轴 · 单测度两端点连杠）、Ledger（数字台账）刻意区分：本页是
   「中轴双向发散条」—— 每行以中央名目轴为界，左/右各伸一根条表达两个对立测度
   （如 2023 vs 2024），按合计宽度降序排列形成上宽下窄的龙卷风轮廓，一眼读对比与增长。

   ── 可调参数（Props） ──────────────────────────────────────────────────────
   | prop       | 类型                          | 默认值 | 说明                            |
   | items      | {label,sub,left,right}[]      | 见下   | 数据源（left/right 两测度）     |
   | itemCount  | number (3–7)                  | 7      | 展示行数（截取）                |
   | endLabels  | [string,string]               | 见下   | 左 / 右测度图例                 |
   | sort       | '合计'|'右值'|'原序'          | 合计   | 排序方式（决定龙卷风轮廓）      |
   | showValue  | boolean                       | true   | 条末读数                        |
   | focus      | boolean                       | true   | 高亮某一行                      |
   | focusIndex | number (0-based)              | 0      | 高亮第几行                      |
   | labelType  | 'number'|'symbol'|'keyword'   | number | 行首徽标样式                    |
   | showAside  | boolean                       | true   | 读图（装饰）                    |
   ========================================================================== */
/* ── 页面属性契约 · defaultProps ──────────────────────────────────────────
   本页全部可见文案 / 数据 / 图片槽默认值集中于此，直接编辑即可换内容；
   组件内部以 { ...defaultProps, ...props } 合并，外部传同名 props 逐项覆盖。 */
export const defaultProps = {
  itemCount: 7,
  endLabels: ['2023','2024'],
  sort: '合计',
  showValue: true,
  focus: true,
  focusIndex: 0,
  labelType: 'number',
  showAside: true,
  unit: '亿$',
  head: { no:'08', en:'Tornado · Diverge', cn:'同比对望 · 赛道增势' },
  items: [
      { label:'大模型',     sub:'Foundation', left:210, right:610 },
      { label:'算力基建',   sub:'Compute',    left:130, right:370 },
      { label:'应用层',     sub:'Apps',       left:90,  right:190 },
      { label:'企业服务',   sub:'Enterprise', left:60,  right:120 },
      { label:'数据 / 安全',sub:'Data',       left:48,  right:96 },
      { label:'医疗 AI',    sub:'Health',     left:42,  right:74 },
      { label:'机器人',     sub:'Robotics',   left:70,  right:55 },
    ],
};

function SlideTornado(props){
  useDeckStyles(props.theme);
  const T = (deckTheme ? deckTheme(props.theme) : {});
  const ACC = T.accent || '#46e3c6';
  const BLUE = T.blue || '#4a86ff';
  const navy = T.navy900 || '#050b22';

  const {
    itemCount, endLabels, sort, showValue, focus, focusIndex, labelType,
    showAside, unit, head, items,
  } = { ...defaultProps, ...props };

  let data = items.slice();
  if(sort==='合计') data.sort((a,b)=> (b.left+b.right) - (a.left+a.right));
  else if(sort==='右值') data.sort((a,b)=> b.right - a.right);
  data = data.slice(0, Math.max(3, Math.min(itemCount, data.length)));
  const fIdx = Math.max(0, Math.min(focusIndex, data.length - 1));
  const lbl = (i)=> deckLabel(labelType, i, { keyword:'T' });

  const maxL = Math.max(...data.map(d=>d.left));
  const maxR = Math.max(...data.map(d=>d.right));
  const pctL = (v)=> (v/maxL)*100;
  const pctR = (v)=> (v/maxR)*100;
  const sumL = data.reduce((s,d)=>s+d.left,0), sumR = data.reduce((s,d)=>s+d.right,0);
  const growth = ((sumR/sumL - 1)*100).toFixed(0);

  return (
    <SlideShell orbs={[{ w:520, h:520, right:-160, bottom:-150,
        color:`radial-gradient(circle at 50% 50%, ${hexA(ACC,.14)}, ${hexA(ACC,0)} 70%)` }]}>
      <SlideHead no={head.no} en={head.en} cn={head.cn} badge={head.no} />

      {/* 图例 */}
      <div className="dk-anim d1" style={{display:'flex', justifyContent:'center', gap:48, marginTop:16}}>
        <span style={{display:'inline-flex', alignItems:'center', gap:10, fontSize:'var(--type-small)', color:'var(--ink-dim)'}}>
          <i style={{width:30, height:14, borderRadius:3, background:`linear-gradient(90deg, ${BLUE}, ${hexA(BLUE,.4)})`}}></i>{endLabels[0]}
        </span>
        <span style={{fontFamily:'var(--font-mono)', fontSize:'var(--type-tiny)', color:'var(--ink-faint)', alignSelf:'center'}}>单位 · {unit}</span>
        <span style={{display:'inline-flex', alignItems:'center', gap:10, fontSize:'var(--type-small)', color:'var(--ink-dim)'}}>
          <i style={{width:30, height:14, borderRadius:3, background:`linear-gradient(90deg, ${hexA(ACC,.4)}, ${ACC})`}}></i>{endLabels[1]}
        </span>
      </div>

      <div style={{flex:'1 1 0', minHeight:0, display:'flex', flexDirection:'column', gap:'min(1.4vh,14px)', marginTop:16, paddingBottom:4}}>
        {data.map((d,i)=>{
          const hot = focus && i===fIdx;
          const up = d.right >= d.left;
          return (
            <div key={i} className={'dk-anim d'+Math.min(i+1,6)} style={{flex:'1 1 0', minHeight:0, display:'grid',
                  gridTemplateColumns:'1fr 280px 1fr', alignItems:'center', gap:0,
                  opacity: focus&&!hot?.62:1}}>
              {/* 左条（含读数，右对齐） */}
              <div style={{display:'flex', alignItems:'center', justifyContent:'flex-end', gap:14, height:hot?'62%':'48%'}}>
                {showValue && <span style={{fontFamily:'var(--font-display)', fontWeight:900, fontSize:hot?24:19, color:hexA(BLUE,.95)}}>{d.left}</span>}
                <div style={{height:'100%', width:pctL(d.left)+'%', borderRadius:'9px 0 0 9px',
                    background:`linear-gradient(270deg, ${BLUE}, ${hexA(BLUE,.6)})`,
                    boxShadow: hot?`0 0 16px ${hexA(BLUE,.5)}`:`inset 0 0 0 1px ${hexA('#bcd2ff',.3)}`, minWidth:4}}></div>
              </div>
              {/* 中央名目 */}
              <div style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', padding:'0 14px', position:'relative'}}>
                <div style={{position:'absolute', top:-8, bottom:-8, left:'50%', width:hot?2:1, background:hexA('#fff',hot?.4:.16)}}></div>
                <span style={{position:'relative', display:'inline-flex', alignItems:'center', gap:9, background:navy, padding:'2px 6px', borderRadius:8}}>
                  <i style={{width:26, height:26, borderRadius:8, display:'grid', placeItems:'center', flexShrink:0,
                      fontFamily:'var(--font-display)', fontWeight:900, fontSize:13,
                      color:hot?navy:ACC, background:hot?ACC:hexA(ACC,.16), border:`1px solid ${hexA(ACC,.5)}`}}>{lbl(i)}</i>
                  <span style={{fontFamily:'var(--font-cn)', fontWeight:hot?900:700, fontSize:hot?22:19, color:hot?'#fff':'rgba(255,255,255,.9)', whiteSpace:'nowrap'}}>{d.label}</span>
                </span>
              </div>
              {/* 右条（含读数，左对齐） */}
              <div style={{display:'flex', alignItems:'center', gap:14, height:hot?'62%':'48%'}}>
                <div style={{height:'100%', width:pctR(d.right)+'%', borderRadius:'0 9px 9px 0',
                    background:`linear-gradient(90deg, ${hexA(ACC,.55)}, ${ACC})`,
                    boxShadow: hot?`0 0 16px ${hexA(ACC,.5)}`:`inset 0 0 0 1px ${hexA('#bdf3e9',.3)}`, minWidth:4}}></div>
                {showValue && (
                  <span style={{display:'inline-flex', alignItems:'baseline', gap:7}}>
                    <span style={{fontFamily:'var(--font-display)', fontWeight:900, fontSize:hot?26:20, color:hot?'#fff':ACC}}>{d.right}</span>
                    <span style={{fontFamily:'var(--font-mono)', fontSize:12, color: up?ACC:'#ffb27a'}}>{up?'▲':'▼'}{Math.abs(d.right-d.left)}</span>
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {showAside && (
        <div className="dk-glass-dark dk-anim d3" style={{flexShrink:0, marginTop:10, borderRadius:18, padding:'14px 30px', display:'flex', alignItems:'center', gap:22}}>
          <span style={{flexShrink:0, fontFamily:'var(--font-mono)', fontSize:14, letterSpacing:'.12em', color:ACC}}>读图</span>
          <p style={{fontSize:'var(--type-small)', lineHeight:1.5, color:'rgba(255,255,255,.86)', textWrap:'pretty', margin:0}}>
            左右条以中轴对望，行按合计降序使轮廓呈龙卷风收束。全赛道自 {sumL} 增至 <b style={{color:ACC}}>{sumR}</b> {unit}
            （同比 <b style={{color:'#fff'}}>+{growth}%</b>），增量高度集中于顶部少数赛道。
          </p>
        </div>
      )}
    </SlideShell>
  );

  function hexA(hex, a){
    if(!hex || hex[0] !== '#') return hex;
    const x = hex.slice(1); const f = x.length===3 ? x.split('').map(c=>c+c).join('') : x;
    return `rgba(${parseInt(f.slice(0,2),16)},${parseInt(f.slice(2,4),16)},${parseInt(f.slice(4,6),16)},${a})`;
  }
}

export default SlideTornado;

/* ── 模板参数 schema（自描述 · 迁移即带控件；Tweaks 由此自动生成） ── */
export const slideSpec = { defaults: defaultProps, slot:'tornado', name:'龙卷风图 · Tornado', controls:[
  { prop:'itemCount', type:'slider', label:'行数量', default:7, min:3, max:7, step:1 },
  { prop:'sort', type:'radio', label:'排序', default:'合计', options:['合计','右值','原序'] },
  { prop:'showValue', type:'toggle', label:'条末读数', default:true },
  { prop:'showAside', type:'toggle', label:'装饰文案', default:true, desc:'读图条' },
  { prop:'labelType', type:'labelType', label:'标签类型', default:'数字' },
  { prop:'focus', type:'focus', label:'重点信息 Focus', default:true },
  { prop:'focusIndex', type:'slider', label:'焦点序号', default:0, min:0, max:(p)=>p.itemCount-1, maxFromKey:'itemCount', maxFromKeyOffset:-1, displayOffset:1, step:1, showIf:(p)=>p.focus },
]};
