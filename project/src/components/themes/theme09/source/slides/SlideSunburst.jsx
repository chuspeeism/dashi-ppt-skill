import { useDeckStyles, deckTheme, deckLabel, SlideShell, SlideHead } from './DeckKit.jsx';
/* ============================================================================
   SlideSunburst — 旭日图（二层层级放射环 · 内环=大类 / 外环=子项）
   独立组件：仅靠 props 控制内容与样式；render 时自注入 DeckKit 基座样式。
   与 Cross（单环环饼）、Alloc（单环堆叠）、RadialBar（同心比例弧）、Orbit（极坐标
   时间轴）刻意区分：本页是「层级旭日图」—— 内环按大类占比分扇，外环把每个大类再
   细分为子项，同一扇区内外对齐，一眼读「总体构成 → 内部细分」两级层级。

   ── 可调参数（Props） ──────────────────────────────────────────────────────
   | prop        | 类型                          | 默认值 | 说明                          |
   | groups      | Group[]                       | 见下   | 数据源（大类含 children 子项）|
   | itemCount   | number (3–5)                  | 5      | 展示大类数（截取）            |
   | showOuter   | boolean                       | true   | 外环（子项细分）显隐          |
   | showLabels  | boolean                       | true   | 弧上百分比标注                |
   | focus       | boolean                       | true   | 高亮某一大类（扇区与图例）    |
   | focusIndex  | number (0-based)              | 0      | 高亮第几个大类                |
   | labelType   | 'number'|'symbol'|'keyword'   | number | 图例徽标样式                  |
   | showAside   | boolean                       | true   | 圆心读数（装饰）              |
   | head        | …                             | 见下   | 页眉文案                      |
   Group = { label, value, sub, children:[{label,value}] }
   ========================================================================== */
/* ── 页面属性契约 · defaultProps ──────────────────────────────────────────
   本页全部可见文案 / 数据 / 图片槽默认值集中于此，直接编辑即可换内容；
   组件内部以 { ...defaultProps, ...props } 合并，外部传同名 props 逐项覆盖。 */
export const defaultProps = {
  itemCount: 5,
  showOuter: true,
  showLabels: true,
  focus: true,
  focusIndex: 0,
  labelType: 'number',
  showAside: true,
  head: { no:'03', en:'Sunburst · Hierarchy', cn:'资本构成 · 两级层级' },
  groups: [
      { label:'大模型', sub:'Foundation', value:43.3, children:[
        { label:'基础模型', value:28 }, { label:'多模态', value:9 }, { label:'智能体', value:6.3 } ] },
      { label:'算力基建', sub:'Compute', value:18, children:[
        { label:'芯片', value:8 }, { label:'云 / 数据中心', value:7 }, { label:'网络', value:3 } ] },
      { label:'应用层', sub:'Applications', value:16, children:[
        { label:'企业应用', value:7 }, { label:'消费', value:5 }, { label:'行业垂直', value:4 } ] },
      { label:'企业服务', sub:'Enterprise', value:12, children:[
        { label:'安全', value:5 }, { label:'数据', value:4 }, { label:'运维', value:3 } ] },
      { label:'其他赛道', sub:'Others', value:10.7, children:[
        { label:'机器人', value:4 }, { label:'医疗 AI', value:3.7 }, { label:'自动驾驶', value:3 } ] },
    ],
};

function SlideSunburst(props){
  useDeckStyles(props.theme);
  const T = (deckTheme ? deckTheme(props.theme) : {});
  const ACC = T.accent || '#46e3c6';
  const BLUE = T.blue || '#4a86ff';
  const VIO = T.violet || '#9f7bff';
  const WARN = T.warn || '#ffb27a';
  const navy = T.navy900 || '#050b22';
  const PAL = [ACC, BLUE, VIO, WARN, '#6fd3ff'];

  const {
    itemCount, showOuter, showLabels, focus, focusIndex, labelType, showAside,
    head, groups,
  } = { ...defaultProps, ...props };

  const data = groups.slice(0, Math.max(3, Math.min(itemCount, groups.length)));
  const fIdx = Math.max(0, Math.min(focusIndex, data.length - 1));
  const lbl = (i)=> deckLabel(labelType, i, { keyword:'C' });
  const total = data.reduce((s,g)=> s + g.value, 0);

  // 角度布局（自正上 -90° 顺时针）
  const GAP = 2; // 扇区间隙（度）
  let acc = -90;
  const segs = data.map((g,i)=>{
    const sweep = (g.value/total)*360 - GAP;
    const a0 = acc + GAP/2, a1 = acc + GAP/2 + sweep;
    acc += (g.value/total)*360;
    // 子项细分
    const childTotal = (g.children||[]).reduce((s,c)=> s + c.value, 0) || 1;
    let ca = a0;
    const kids = (g.children||[]).map((c)=>{
      const cs = ((a1-a0))*(c.value/childTotal);
      const seg = { ...c, a0:ca, a1:ca+cs };
      ca += cs; return seg;
    });
    return { ...g, idx:i, a0, a1, col:PAL[i%PAL.length], kids };
  });

  const D = 640, cx = D/2, cy = D/2;
  const rIn0 = 96, rIn1 = 220, rOut1 = showOuter ? 296 : 224;
  const deg = (a)=> a*Math.PI/180;
  const annular = (r0,r1,a0,a1)=>{
    const p=(r,a)=>[cx+r*Math.cos(deg(a)), cy+r*Math.sin(deg(a))];
    const large = (a1-a0) > 180 ? 1 : 0;
    const [x0,y0]=p(r1,a0),[x1,y1]=p(r1,a1),[x2,y2]=p(r0,a1),[x3,y3]=p(r0,a0);
    return `M${x0},${y0} A${r1},${r1} 0 ${large} 1 ${x1},${y1} L${x2},${y2} A${r0},${r0} 0 ${large} 0 ${x3},${y3} Z`;
  };
  const mid = (a0,a1)=> (a0+a1)/2;

  return (
    <SlideShell orbs={[{ w:560, h:560, right:-150, top:-140,
        color:`radial-gradient(circle at 50% 50%, ${hexA(BLUE,.16)}, ${hexA(BLUE,0)} 68%)` }]}>
      <SlideHead no={head.no} en={head.en} cn={head.cn} badge={head.no} />

      <div className="dk-anim d1" style={{flex:'1 1 0', minHeight:0, display:'grid',
            gridTemplateColumns:'auto 1fr', gap:64, alignItems:'center', marginTop:18}}>
        {/* 旭日图 */}
        <div style={{position:'relative', width:D, height:D, flexShrink:0}}>
          <svg width={D} height={D} viewBox={`0 0 ${D} ${D}`}>
            {segs.map((s)=>{
              const hot = focus && s.idx===fIdx, dim = focus && s.idx!==fIdx;
              return (
                <g key={s.idx} opacity={dim?0.42:1} style={{transition:'opacity .2s'}}>
                  {/* 内环：大类 */}
                  <path d={annular(rIn0, rIn1, s.a0, s.a1)} fill={s.col}
                        stroke={navy} strokeWidth="2"
                        style={{filter: hot?`drop-shadow(0 0 18px ${hexA(s.col,.7)})`:'none'}} />
                  {/* 外环：子项 */}
                  {showOuter && s.kids.map((k,ki)=>(
                    <path key={ki} d={annular(rIn1+6, rOut1, k.a0, k.a1)}
                          fill={hexA(s.col, ki%2? .42 : .62)} stroke={navy} strokeWidth="2" />
                  ))}
                  {/* 内环标签 */}
                  {showLabels && (s.a1-s.a0) > 16 && (()=>{
                    const a = mid(s.a0,s.a1); const r=(rIn0+rIn1)/2;
                    const x=cx+r*Math.cos(deg(a)), y=cy+r*Math.sin(deg(a));
                    return <text x={x} y={y} textAnchor="middle" dominantBaseline="central"
                      fontFamily="var(--font-display)" fontWeight="900" fontSize="26" fill={navy}>{s.value}%</text>;
                  })()}
                </g>
              );
            })}
            {/* 圆心 */}
            <circle cx={cx} cy={cy} r={rIn0-8} fill="rgba(5,11,34,.62)" stroke="rgba(255,255,255,.14)" strokeWidth="1.5" />
            {showAside && (
              <g>
                <text x={cx} y={cy-10} textAnchor="middle" fontFamily="var(--font-display)" fontWeight="900" fontSize="58" fill="#fff">${'970'}</text>
                <text x={cx} y={cy+30} textAnchor="middle" fontFamily="var(--font-cn)" fontWeight="700" fontSize="22" fill={ACC}>亿美元 · 全年</text>
              </g>
            )}
          </svg>
        </div>

        {/* 图例：大类 → 子项细分 */}
        <div style={{display:'flex', flexDirection:'column', gap:'min(2.2vh,20px)', minWidth:0}}>
          {segs.map((s)=>{
            const hot = focus && s.idx===fIdx;
            return (
              <div key={s.idx} className={'dk-anim d'+Math.min(s.idx+2,6)} style={{display:'flex', gap:18, alignItems:'flex-start',
                    opacity: focus&&!hot?.6:1, paddingLeft:14, borderLeft:`4px solid ${hot?s.col:hexA(s.col,.4)}`}}>
                <span style={{flexShrink:0, width:38, height:38, borderRadius:11, display:'grid', placeItems:'center',
                    fontFamily:'var(--font-display)', fontWeight:900, fontSize:16,
                    color: hot?navy:s.col, background: hot?s.col:hexA(s.col,.16), border:`1.5px solid ${hexA(s.col,.55)}`}}>{lbl(s.idx)}</span>
                <div style={{minWidth:0, flex:'1 1 0'}}>
                  <div style={{display:'flex', alignItems:'baseline', gap:12}}>
                    <span style={{fontFamily:'var(--font-cn)', fontWeight:hot?900:700, fontSize:'var(--type-sub)', color:hot?'#fff':'rgba(255,255,255,.92)'}}>{s.label}</span>
                    <span style={{fontFamily:'var(--font-display)', fontWeight:900, fontSize:'var(--type-small)', color:s.col}}>{s.value}%</span>
                  </div>
                  <div style={{display:'flex', flexWrap:'wrap', gap:'4px 16px', marginTop:6}}>
                    {s.kids.map((k,ki)=>(
                      <span key={ki} style={{fontFamily:'var(--font-cn)', fontSize:'var(--type-tiny)', color:'var(--ink-dim)', display:'inline-flex', alignItems:'center', gap:7}}>
                        <i style={{width:9, height:9, borderRadius:2, background:hexA(s.col, ki%2?.42:.62), flexShrink:0}}></i>
                        {k.label} <b style={{color:'rgba(255,255,255,.78)', fontFamily:'var(--font-mono)', fontWeight:700}}>{k.value}</b>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
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

export default SlideSunburst;

/* ── 模板参数 schema（自描述 · 迁移即带控件；Tweaks 由此自动生成） ── */
export const slideSpec = { defaults: defaultProps, slot:'sunburst', name:'旭日图 · Sunburst', controls:[
  { prop:'itemCount', type:'slider', label:'数量', default:5, min:3, max:5, step:1, desc:'大类数' },
  { prop:'showOuter', type:'toggle', label:'外环细分', default:true },
  { prop:'showLabels', type:'toggle', label:'弧上标注', default:true },
  { prop:'showAside', type:'toggle', label:'装饰文案', default:true, desc:'圆心读数' },
  { prop:'labelType', type:'labelType', label:'标签类型', default:'数字' },
  { prop:'focus', type:'focus', label:'重点信息 Focus', default:true },
  { prop:'focusIndex', type:'slider', label:'焦点序号', default:0, min:0, max:(p)=>p.itemCount-1, maxFromKey:'itemCount', maxFromKeyOffset:-1, displayOffset:1, step:1, showIf:(p)=>p.focus },
]};
