import { useDeckStyles, deckTheme, deckLabel, SlideShell, SlideHead } from './DeckKit.jsx';
/* ============================================================================
   SlideRose — 南丁格尔玫瑰（polar area · 等角分扇 · 变径读量）
   独立组件：仅靠 props 控制内容与样式；render 时自注入 DeckKit 基座样式。
   与 RadialBar（同心轨道比例弧）、Sunburst（层级放射两环）、Cross（单环环饼按角度分占比）
   刻意区分：本页是「玫瑰图 / 极区图」—— 每个赛道占据相同角宽的扇瓣，扇瓣半径 ∝ 量级，
   面积一眼成「花瓣」轮廓比较各赛道体量；外圈刻度环辅助读数。

   ── 可调参数（Props） ──────────────────────────────────────────────────────
   | prop        | 类型                          | 默认值 | 说明                          |
   | items       | Item[]                        | 见下   | 赛道数据源（value 量级）      |
   | itemCount   | number (4–8)                  | 8      | 展示扇瓣数（截取）            |
   | areaTrue    | boolean                       | true   | 半径 ∝√值（面积真实）/线性     |
   | showScale   | boolean                       | true   | 刻度环与读数                  |
   | focus       | boolean                       | true   | 高亮某一扇瓣                  |
   | focusIndex  | number (0-based)              | 0      | 高亮第几瓣                    |
   | labelType   | 'number'|'symbol'|'keyword'   | number | 图例徽标样式                  |
   | showAside   | boolean                       | true   | 圆心读数（装饰）              |
   | head        | …                             | 见下   | 页眉文案                      |
   Item = { label, sub, value }
   ========================================================================== */
/* ── 页面属性契约 · defaultProps ──────────────────────────────────────────
   本页全部可见文案 / 数据 / 图片槽默认值集中于此，直接编辑即可换内容；
   组件内部以 { ...defaultProps, ...props } 合并，外部传同名 props 逐项覆盖。 */
export const defaultProps = {
  itemCount: 8,
  areaTrue: true,
  showScale: true,
  focus: true,
  focusIndex: 0,
  labelType: 'number',
  showAside: true,
  unit: '亿$',
  head: { no:'10', en:'Rose · Polar Area', cn:'资金玫瑰 · 极区分布' },
  items: [
      { label:'大模型',   sub:'Foundation', value:420 },
      { label:'算力基建', sub:'Compute',    value:180 },
      { label:'企业应用', sub:'Enterprise', value:150 },
      { label:'自动驾驶', sub:'Autonomy',   value:120 },
      { label:'数据平台', sub:'Data',       value:90 },
      { label:'医疗 AI',  sub:'Health',     value:88 },
      { label:'机器人',   sub:'Robotics',   value:70 },
      { label:'安全合规', sub:'Security',   value:52 },
    ],
};

function SlideRose(props){
  useDeckStyles(props.theme);
  const T = (deckTheme ? deckTheme(props.theme) : {});
  const ACC = T.accent || '#46e3c6';
  const BLUE = T.blue || '#4a86ff';
  const VIO = T.violet || '#9f7bff';
  const WARN = T.warn || '#ffb27a';
  const navy = T.navy900 || '#050b22';
  const PAL = [ACC, BLUE, VIO, WARN, '#6fd3ff', '#ff9bb6', '#9affc8', '#ffd66e'];

  const {
    itemCount, areaTrue, showScale, focus, focusIndex, labelType, showAside,
    unit, head, items,
  } = { ...defaultProps, ...props };

  const data = items.slice(0, Math.max(4, Math.min(itemCount, items.length))).map((d,i)=>({ ...d, col:PAL[i%PAL.length], idx:i }));
  const n = data.length;
  const fIdx = Math.max(0, Math.min(focusIndex, n-1));
  const lbl = (i)=> deckLabel(labelType, i, { keyword:'S' });
  const maxV = Math.max(...data.map(d=>d.value));
  const niceMax = (v)=>{ const p=Math.pow(10,Math.floor(Math.log10(v))); const k=v/p; const s=k<=1?1:k<=2?2:k<=5?5:10; return s*p; };
  const top = niceMax(maxV);

  const D = 660, cx = D/2, cy = D/2, R = 270, r0 = 50;
  const rad = (v)=>{ const t = areaTrue ? Math.sqrt(v/top) : v/top; return r0 + t*(R-r0); };
  const GAP = 2; // 扇瓣间隙（度）
  const step = 360/n;
  const deg = (x)=> (x-90)*Math.PI/180;
  const P = (r,x)=> [cx+r*Math.cos(deg(x)), cy+r*Math.sin(deg(x))];
  const wedge = (r1, a0, a1)=>{
    const [x0,y0]=P(r0,a0),[x1,y1]=P(r1,a0),[x2,y2]=P(r1,a1),[x3,y3]=P(r0,a1);
    const lg=(a1-a0)>180?1:0;
    return `M${x0},${y0} L${x1},${y1} A${r1},${r1} 0 ${lg} 1 ${x2},${y2} L${x3},${y3} A${r0},${r0} 0 ${lg} 0 ${x0},${y0} Z`;
  };
  const rings = [0.25,0.5,0.75,1].map(f=> ({ r:r0+f*(R-r0), v:Math.round(top*(areaTrue?f*f:f)) }));

  return (
    <SlideShell orbs={[{ w:560, h:560, right:-150, top:-150,
        color:`radial-gradient(circle at 50% 50%, ${hexA(ACC,.15)}, ${hexA(ACC,0)} 68%)` }]}>
      <SlideHead no={head.no} en={head.en} cn={head.cn} badge={head.no} />

      <div className="dk-anim d1" style={{flex:'1 1 0', minHeight:0, display:'grid',
            gridTemplateColumns:'auto 1fr', gap:64, alignItems:'center', marginTop:18}}>
        <div style={{position:'relative', width:D, height:D, flexShrink:0}}>
          <svg width={D} height={D} viewBox={`0 0 ${D} ${D}`}>
            {/* 刻度环 */}
            {showScale && rings.map((g,i)=>(<g key={i}>
              <circle cx={cx} cy={cy} r={g.r} fill="none" stroke="rgba(255,255,255,.12)" strokeWidth="1.5" strokeDasharray={i===rings.length-1?'none':'3 6'} />
              <text x={cx+6} y={cy-g.r+4} fontFamily="var(--font-mono)" fontSize="15" fill="var(--ink-faint)">{g.v}</text>
            </g>))}
            {/* 扇瓣 */}
            {data.map((s)=>{
              const a0 = s.idx*step + GAP/2, a1 = (s.idx+1)*step - GAP/2;
              const hot = focus && s.idx===fIdx, dim = focus && s.idx!==fIdx;
              const mid=(a0+a1)/2; const [lx,ly]=P(rad(s.value)+26, mid);
              return (<g key={s.idx} opacity={dim?0.45:1} style={{transition:'opacity .2s'}}>
                <path d={wedge(rad(s.value), a0, a1)} fill={hexA(s.col,hot?0.9:0.7)} stroke={navy} strokeWidth="2.5"
                  style={{filter: hot?`drop-shadow(0 0 18px ${hexA(s.col,.7)})`:'none'}} />
                <text x={lx} y={ly} textAnchor="middle" dominantBaseline="central"
                  fontFamily="var(--font-display)" fontWeight="900" fontSize="22" fill={hot?s.col:'rgba(255,255,255,.7)'}>{lbl(s.idx)}</text>
              </g>);
            })}
            {/* 圆心 */}
            <circle cx={cx} cy={cy} r={r0-6} fill="rgba(5,11,34,.6)" stroke="rgba(255,255,255,.14)" strokeWidth="1.5" />
            {showAside && (<g>
              <text x={cx} y={cy-2} textAnchor="middle" fontFamily="var(--font-display)" fontWeight="900" fontSize="32" fill="#fff">{n}</text>
              <text x={cx} y={cy+24} textAnchor="middle" fontFamily="var(--font-cn)" fontWeight="700" fontSize="15" fill={ACC}>赛道</text>
            </g>)}
          </svg>
        </div>

        {/* 图例 */}
        <div style={{display:'flex', flexDirection:'column', gap:'min(1.8vh,16px)', minWidth:0}}>
          {data.map((s)=>{
            const hot = focus && s.idx===fIdx;
            const pct = Math.round(s.value/data.reduce((a,b)=>a+b.value,0)*100);
            return (
              <div key={s.idx} className={'dk-anim d'+Math.min(s.idx+2,6)} style={{display:'flex', gap:18, alignItems:'center',
                    opacity: focus&&!hot?.55:1, paddingLeft:14, borderLeft:`4px solid ${hot?s.col:hexA(s.col,.4)}`}}>
                <span style={{flexShrink:0, width:36, height:36, borderRadius:10, display:'grid', placeItems:'center',
                    fontFamily:'var(--font-display)', fontWeight:900, fontSize:15,
                    color: hot?navy:s.col, background: hot?s.col:hexA(s.col,.16), border:`1.5px solid ${hexA(s.col,.55)}`}}>{lbl(s.idx)}</span>
                <div style={{minWidth:0, flex:'1 1 0'}}>
                  <div style={{display:'flex', alignItems:'baseline', gap:12}}>
                    <span style={{fontFamily:'var(--font-cn)', fontWeight:hot?900:700, fontSize:'var(--type-sub)', color:hot?'#fff':'rgba(255,255,255,.92)'}}>{s.label}</span>
                    <span style={{fontFamily:'var(--font-display)', fontWeight:900, fontSize:'var(--type-small)', color:s.col}}>{s.value}</span>
                    <span style={{fontFamily:'var(--font-mono)', fontSize:'var(--type-tiny)', color:'var(--ink-faint)'}}>{unit} · {pct}%</span>
                  </div>
                  <div style={{height:7, borderRadius:4, background:'rgba(255,255,255,.08)', marginTop:7, overflow:'hidden'}}>
                    <div style={{height:'100%', width:(s.value/maxV*100)+'%', background:hexA(s.col,hot?1:.7), borderRadius:4}}></div>
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

export default SlideRose;

/* ── 模板参数 schema（自描述 · 迁移即带控件；Tweaks 由此自动生成） ── */
export const slideSpec = { defaults: defaultProps, slot:'rose', name:'资金玫瑰 · Rose', controls:[
  { prop:'itemCount', type:'slider', label:'数量', default:8, min:4, max:8, step:1, desc:'扇瓣数' },
  { prop:'areaTrue', type:'toggle', label:'面积真实', default:true, desc:'半径∝√值' },
  { prop:'showScale', type:'toggle', label:'刻度环', default:true },
  { prop:'showAside', type:'toggle', label:'装饰文案', default:true, desc:'圆心读数' },
  { prop:'labelType', type:'labelType', label:'标签类型', default:'数字' },
  { prop:'focus', type:'focus', label:'重点信息 Focus', default:true },
  { prop:'focusIndex', type:'slider', label:'焦点序号', default:0, min:0, max:(p)=>p.itemCount-1, maxFromKey:'itemCount', maxFromKeyOffset:-1, displayOffset:1, step:1, showIf:(p)=>p.focus },
]};
