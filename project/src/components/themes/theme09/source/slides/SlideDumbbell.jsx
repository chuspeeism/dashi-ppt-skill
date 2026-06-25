import { useDeckStyles, deckTheme, deckLabel, SlideShell, SlideHead } from './DeckKit.jsx';
/* ============================================================================
   SlideDumbbell — 区间对比（哑铃图 · 每行两端点 + 连接杠，读「起→止」跨度与方向）
   独立组件：仅靠 props 控制内容与样式；render 时自注入 DeckKit 基座样式。
   与 Slope（两期纵轴间连线斜率）、Ledger（量化表格）刻意区分：本页为水平「哑铃/
   区间图」——所有行共享一条横向数值轴，每行两枚端点（起/止）由一根杠连接，杠按
   方向染色（升=主色 / 降=暖色），一眼读出每项的区间跨度与同比方向。

   ── 可调参数（Props） ──────────────────────────────────────────────────────
   | prop       | 类型                          | 默认值 | 说明                            |
   | items      | {label,a,b,sub}[]             | 见下   | 数据源（a=起点值, b=止点值）    |
   | itemCount  | number (3–7)                  | 6      | 展示行数（截取）                |
   | endLabels  | [string,string]               | 见下   | 两端点图例名（起 / 止）         |
   | sort       | '跨度'|'止点'|'原序'          | '跨度' | 排序方式                        |
   | showValue  | boolean                       | true   | 端点数值标签                    |
   | focus      | boolean                       | true   | 高亮某一行                      |
   | focusIndex | number (0-based)              | 0      | 高亮第几行                      |
   | labelType  | 'number'|'symbol'|'keyword'   | number | 行首徽标样式                    |
   | showAside  | boolean                       | true   | 「读图」装饰条                  |
   | unit / head : 见下                                                          |
   | theme      | Partial<DeckTheme>            | —      | 设计令牌覆盖                    |
   ========================================================================== */
/* ── 页面属性契约 · defaultProps ──────────────────────────────────────────
   本页全部可见文案 / 数据 / 图片槽默认值集中于此，直接编辑即可换内容；
   组件内部以 { ...defaultProps, ...props } 合并，外部传同名 props 逐项覆盖。 */
export const defaultProps = {
  itemCount: 6,
  endLabels: ['2023','2024'],
  sort: '跨度',
  showValue: true,
  focus: true,
  focusIndex: 0,
  labelType: 'number',
  showAside: true,
  unit: '亿$',
  head: { no:'08', en:'Dumbbell · Range', cn:'融资区间 · 同比跨度' },
  items: [
      { label:'大模型',     a:210, b:610, sub:'Foundation' },
      { label:'算力基建',   a:130, b:370, sub:'Compute' },
      { label:'应用层',     a:90,  b:190, sub:'Apps' },
      { label:'企业服务',   a:60,  b:120, sub:'Enterprise' },
      { label:'数据 / 安全',a:48,  b:96,  sub:'Data & Safety' },
      { label:'机器人',     a:70,  b:55,  sub:'Robotics' },
      { label:'医疗 AI',    a:42,  b:74,  sub:'Health' },
    ],
};

function SlideDumbbell(props){
  useDeckStyles(props.theme);
  const T = (deckTheme ? deckTheme(props.theme) : {});
  const ACC = T.accent || '#46e3c6';
  const BLUE = T.blue || '#4a86ff';
  const WARN = T.warn || '#ffb27a';
  const navy = T.navy900 || '#050b22';

  const {
    itemCount, endLabels, sort, showValue, focus, focusIndex, labelType,
    showAside, unit, head, items,
  } = { ...defaultProps, ...props };

  let data = items.slice();
  if(sort==='跨度') data.sort((x,y)=> Math.abs(y.b-y.a) - Math.abs(x.b-x.a));
  else if(sort==='止点') data.sort((x,y)=> y.b - x.b);
  data = data.slice(0, Math.max(3, Math.min(itemCount, data.length)));
  const fIdx = Math.max(0, Math.min(focusIndex, data.length - 1));
  const lbl = (i)=> deckLabel(labelType, i, { keyword:'R' });

  const allV = data.flatMap(d=>[d.a, d.b]);
  const lo = Math.min(...allV), hi = Math.max(...allV);
  const pad = (hi-lo)*0.08 || 1;
  const min = Math.max(0, lo - pad), max = hi + pad;
  const pos = (v)=> ((v-min)/(max-min))*100;
  const ticks = 4;
  const tickVals = Array.from({length:ticks+1}, (_,i)=> Math.round(min + (max-min)*i/ticks));

  // 最大跨度行（读图）
  const mover = data.reduce((m,d,i)=> Math.abs(d.b-d.a) > Math.abs(m.d.b-m.d.a) ? {d,i} : m, {d:data[0],i:0});

  return (
    <SlideShell orbs={[{ w:520, h:520, left:-170, top:-150,
        color:`radial-gradient(circle at 50% 50%, ${hexA(BLUE,.18)}, ${hexA(BLUE,0)} 70%)` }]}>
      <SlideHead no={head.no} en={head.en} cn={head.cn}
        badge={labelType==='keyword'?'RANGE':labelType==='symbol'?'●':head.no} />

      <div style={{flex:'1 1 0', minHeight:0, display:'flex', flexDirection:'column', marginTop:26}}>
        <div className="dk-glass dk-anim d1" style={{flex:'1 1 0', minHeight:0, borderRadius:'var(--dk-radius)',
              padding:'22px 44px 16px', display:'flex', flexDirection:'column'}}>
          {/* 图例 */}
          <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:10}}>
            <div style={{display:'flex', gap:26, fontSize:'var(--type-tiny)', color:'var(--ink-dim)'}}>
              <span style={{display:'inline-flex', alignItems:'center', gap:9}}><i style={{width:16,height:16,borderRadius:'50%',background:'#fff',border:`2px solid ${hexA(BLUE,.9)}`}}></i>{endLabels[0]}（起）</span>
              <span style={{display:'inline-flex', alignItems:'center', gap:9}}><i style={{width:16,height:16,borderRadius:'50%',background:ACC}}></i>{endLabels[1]}（止）</span>
            </div>
            <span style={{fontFamily:'var(--font-mono)', fontSize:'var(--type-tiny)', color:'var(--ink-faint)'}}>单位 · {unit}</span>
          </div>

          {/* 行区 */}
          <div style={{flex:'1 1 0', minHeight:0, display:'flex', flexDirection:'column'}}>
            {data.map((d,i)=>{
              const hot = focus && i===fIdx;
              const up = d.b >= d.a;
              const barCol = up ? ACC : WARN;
              const x1 = pos(Math.min(d.a,d.b)), x2 = pos(Math.max(d.a,d.b));
              return (
                <div key={i} className={'dk-anim d'+Math.min(i+1,6)} style={{flex:'1 1 0', minHeight:0, display:'flex', alignItems:'center', gap:20,
                      opacity: focus&&!hot?.6:1, borderTop: i? '1px solid rgba(255,255,255,.07)':'none', padding:'4px 0'}}>
                  {/* 行首 */}
                  <div style={{flex:'0 0 230px', display:'flex', alignItems:'center', gap:12, minWidth:0}}>
                    <span style={{fontFamily:'var(--font-display)', fontWeight:900, fontSize:15, width:30, height:30, borderRadius:8, flexShrink:0,
                        display:'inline-flex', alignItems:'center', justifyContent:'center',
                        color: hot?navy:ACC, background: hot?ACC:hexA(ACC,.14), border:`1px solid ${hexA(ACC,.5)}`}}>{lbl(i)}</span>
                    <div style={{minWidth:0}}>
                      <div style={{fontFamily:'var(--font-cn)', fontWeight:hot?900:700, fontSize:22, color:hot?ACC:'#fff', whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis'}}>{d.label}</div>
                      {d.sub && <div style={{fontFamily:'var(--font-mono)', fontSize:12, color:'var(--ink-faint)'}}>{d.sub}</div>}
                    </div>
                  </div>
                  {/* 哑铃轨 */}
                  <div style={{flex:'1 1 0', position:'relative', height:'100%', minWidth:0}}>
                    {/* 基线 */}
                    <div style={{position:'absolute', left:0, right:0, top:'50%', height:1, background:'rgba(255,255,255,.08)'}}></div>
                    {/* 连接杠 */}
                    <div style={{position:'absolute', top:'50%', transform:'translateY(-50%)', left:x1+'%', width:(x2-x1)+'%', height:hot?11:8, borderRadius:6,
                        background:`linear-gradient(90deg, ${hexA(barCol,.35)}, ${barCol})`,
                        boxShadow: hot?`0 0 16px ${hexA(barCol,.6)}`:'none'}}></div>
                    {/* 起点 */}
                    <Dot left={pos(d.a)} fill="#fff" ring={hexA(BLUE,.9)} hot={hot} />
                    {/* 止点 */}
                    <Dot left={pos(d.b)} fill={barCol} ring={barCol} hot={hot} solid />
                    {showValue && (
                      <React.Fragment>
                        <Val left={pos(d.a)} v={d.a} above color="rgba(255,255,255,.7)" />
                        <Val left={pos(d.b)} v={d.b} color={barCol} bold />
                      </React.Fragment>
                    )}
                  </div>
                  {/* 跨度 */}
                  <div style={{flex:'0 0 96px', textAlign:'right'}}>
                    <span style={{fontFamily:'var(--font-display)', fontWeight:900, fontSize:hot?24:20, color:barCol}}>{up?'+':'−'}{Math.abs(d.b-d.a)}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* x 轴刻度 */}
          <div style={{flexShrink:0, marginTop:8, paddingTop:8, borderTop:'1px solid rgba(255,255,255,.1)', position:'relative', height:26}}>
            <div style={{position:'absolute', left:230+20, right:96+20, top:8, display:'flex', justifyContent:'space-between'}}>
              {tickVals.map((v,i)=>(
                <span key={i} style={{fontFamily:'var(--font-mono)', fontSize:12, color:'var(--ink-faint)'}}>{v}</span>
              ))}
            </div>
          </div>
        </div>

        {showAside && (
          <div className="dk-glass-dark dk-anim d2" style={{marginTop:18, flexShrink:0, borderRadius:20, padding:'18px 30px', display:'flex', alignItems:'center', gap:22}}>
            <span style={{flexShrink:0, fontFamily:'var(--font-mono)', fontSize:14, letterSpacing:'.12em', color:ACC}}>读图</span>
            <p style={{fontSize:'var(--type-small)', lineHeight:1.5, color:'rgba(255,255,255,.86)', textWrap:'pretty'}}>
              <b style={{color:'#fff'}}>{mover.d.label}</b>区间跨度最大，自 {mover.d.a} 升至 <b style={{color:ACC}}>{mover.d.b}</b> {unit}
              （{mover.d.b>=mover.d.a?'+':'−'}{Math.abs(mover.d.b-mover.d.a)}）；杠越长代表同比变化越剧烈，方向由染色区分。
            </p>
          </div>
        )}
      </div>
    </SlideShell>
  );

  function Dot({ left, fill, ring, hot, solid }){
    const sz = hot?22:18;
    return <div style={{position:'absolute', left:left+'%', top:'50%', transform:'translate(-50%,-50%)', width:sz, height:sz, borderRadius:'50%',
        background:fill, border:`${solid?0:3}px solid ${ring}`, boxShadow:`0 4px 12px rgba(2,6,22,.5)${hot?`, 0 0 0 4px ${hexA(ring,.25)}`:''}`, zIndex:3}}></div>;
  }
  function Val({ left, v, above, color, bold }){
    return <span style={{position:'absolute', left:left+'%', top: above?'4%':'72%', transform:'translateX(-50%)',
        fontFamily:'var(--font-mono)', fontWeight:bold?700:400, fontSize:13, color, whiteSpace:'nowrap', zIndex:2}}>{v}</span>;
  }
  function hexA(hex, a){
    if(!hex || hex[0] !== '#') return hex;
    const x = hex.slice(1); const f = x.length===3 ? x.split('').map(c=>c+c).join('') : x;
    return `rgba(${parseInt(f.slice(0,2),16)},${parseInt(f.slice(2,4),16)},${parseInt(f.slice(4,6),16)},${a})`;
  }
}

export default SlideDumbbell;

/* ── 模板参数 schema（自描述 · 迁移即带控件；Tweaks 由此自动生成） ── */
export const slideSpec = { defaults: defaultProps, slot:'dumbbell', name:'区间对比 · Dumbbell', controls:[
  { prop:'itemCount', type:'slider', label:'行数量', default:6, min:3, max:7, step:1 },
  { prop:'sort', type:'radio', label:'排序', default:'跨度', options:['跨度','止点','原序'] },
  { prop:'showValue', type:'toggle', label:'端点数值', default:true },
  { prop:'showAside', type:'toggle', label:'装饰文案', default:true, desc:'读图条' },
  { prop:'labelType', type:'labelType', label:'标签类型', default:'数字' },
  { prop:'focus', type:'focus', label:'重点信息 Focus', default:true },
  { prop:'focusIndex', type:'slider', label:'焦点序号', default:0, min:0, max:(p)=>p.itemCount-1, maxFromKey:'itemCount', maxFromKeyOffset:-1, displayOffset:1, step:1, showIf:(p)=>p.focus },
]};
