import { useDeckStyles, deckTheme, deckLabel, SlideShell, SlideHead } from './DeckKit.jsx';
/* ============================================================================
   SlideChord — 弦图（板块联投 · 圆周节点 + 穿心环形带）
   独立组件：仅靠 props 控制内容与样式；render 时自注入 DeckKit 基座样式。
   与 Network（中枢辐辏散点）、Sunburst（层级放射）、Flow（桑基带状流量）刻意区分：
   本页是「弦图 chord」—— 各板块按联投总量分布在圆周弧段上，板块间的共同投资以
   穿过圆心的环形带相连，带宽两端各 ∝ 该板块投向对方的强度，读「谁与谁共投、强弱」。

   ── 可调参数（Props） ──────────────────────────────────────────────────────
   | prop        | 类型                          | 默认值 | 说明                          |
   | nodes       | Node[]                        | 见下   | 板块节点（弧段）数据源        |
   | links       | Link[]                        | 见下   | 板块间联投关系（i,j,v）       |
   | itemCount   | number (3–6)                  | 6      | 展示板块数（截取，相关弦同步）|
   | showRibbon  | boolean                       | true   | 环形带（弦）显隐              |
   | showValue   | boolean                       | true   | 图例联投强度数值              |
   | focus       | boolean                       | true   | 高亮某板块及其相关弦          |
   | focusIndex  | number (0-based)              | 0      | 高亮第几个板块                |
   | labelType   | 'number'|'symbol'|'keyword'   | number | 弧段/图例徽标样式             |
   | showAside   | boolean                       | true   | 圆心读数（装饰）              |
   | head        | …                             | 见下   | 页眉文案                      |
   Node = { label, sub, col? }   Link = { i, j, v }
   ========================================================================== */
/* ── 页面属性契约 · defaultProps ──────────────────────────────────────────
   本页全部可见文案 / 数据 / 图片槽默认值集中于此，直接编辑即可换内容；
   组件内部以 { ...defaultProps, ...props } 合并，外部传同名 props 逐项覆盖。 */
export const defaultProps = {
  itemCount: 6,
  showRibbon: true,
  showValue: true,
  focus: true,
  focusIndex: 0,
  labelType: 'number',
  showAside: true,
  head: { no:'03', en:'Chord · Co-investment', cn:'板块联投 · 弦图' },
  nodes: [
      { label:'大模型',   sub:'Foundation' },
      { label:'算力基建', sub:'Compute' },
      { label:'企业应用', sub:'Enterprise' },
      { label:'数据平台', sub:'Data' },
      { label:'机器人',   sub:'Robotics' },
      { label:'医疗 AI',  sub:'Health' },
    ],
  links: [
      { i:0, j:1, v:38 }, { i:0, j:2, v:22 }, { i:0, j:3, v:18 },
      { i:1, j:3, v:16 }, { i:1, j:4, v:12 }, { i:2, j:3, v:14 },
      { i:2, j:5, v:9 },  { i:3, j:4, v:8 },  { i:4, j:5, v:7 },
      { i:0, j:4, v:11 },
    ],
};

function SlideChord(props){
  useDeckStyles(props.theme);
  const T = (deckTheme ? deckTheme(props.theme) : {});
  const ACC = T.accent || '#46e3c6';
  const BLUE = T.blue || '#4a86ff';
  const VIO = T.violet || '#9f7bff';
  const WARN = T.warn || '#ffb27a';
  const navy = T.navy900 || '#050b22';
  const PAL = [ACC, BLUE, VIO, WARN, '#6fd3ff', '#ff9bb6'];

  const {
    itemCount, showRibbon, showValue, focus, focusIndex, labelType, showAside,
    head, nodes, links,
  } = { ...defaultProps, ...props };

  const n = Math.max(3, Math.min(itemCount, nodes.length));
  const data = nodes.slice(0, n).map((d,i)=>({ ...d, col:d.col||PAL[i%PAL.length], idx:i }));
  const lks = links.filter(l => l.i < n && l.j < n);
  const fIdx = Math.max(0, Math.min(focusIndex, n - 1));
  const lbl = (i)=> deckLabel(labelType, i, { keyword:'B' });

  // 行和（每节点联投总量）→ 弧段角度
  const rowSum = data.map((_,i)=> lks.reduce((s,l)=> s + ((l.i===i||l.j===i)? l.v : 0), 0) || 1);
  const total = rowSum.reduce((a,b)=>a+b,0);
  const GAP = 5; // 弧段间隙（度）
  const avail = 360 - n*GAP;
  let a = -90;
  const arcs = data.map((d,i)=>{ const span = avail*rowSum[i]/total; const a0=a+GAP/2, a1=a0+span; a=a1+GAP/2; return { ...d, a0, a1, mid:(a0+a1)/2 }; });

  // 子弧分配 → 环形带（弦）
  const cursor = arcs.map(x=>x.a0);
  const ribbons = lks.map(l=>{
    const wi = (arcs[l.i].a1-arcs[l.i].a0) * l.v/rowSum[l.i];
    const wj = (arcs[l.j].a1-arcs[l.j].a0) * l.v/rowSum[l.j];
    const si0=cursor[l.i], si1=si0+wi; cursor[l.i]=si1;
    const sj0=cursor[l.j], sj1=sj0+wj; cursor[l.j]=sj1;
    return { ...l, si0, si1, sj0, sj1 };
  });

  const D = 660, cx = D/2, cy = D/2, R = 248, TH = 30;
  const deg = (x)=> x*Math.PI/180;
  const P = (r,x)=> [cx+r*Math.cos(deg(x)), cy+r*Math.sin(deg(x))];
  const arcPath = (r0,r1,a0,a1)=>{
    const lg=(a1-a0)>180?1:0; const [x0,y0]=P(r1,a0),[x1,y1]=P(r1,a1),[x2,y2]=P(r0,a1),[x3,y3]=P(r0,a0);
    return `M${x0},${y0} A${r1},${r1} 0 ${lg} 1 ${x1},${y1} L${x2},${y2} A${r0},${r0} 0 ${lg} 0 ${x3},${y3} Z`;
  };
  const ribbonPath = (rb)=>{
    const [ax0,ay0]=P(R,rb.si0),[ax1,ay1]=P(R,rb.si1),[bx0,by0]=P(R,rb.sj0),[bx1,by1]=P(R,rb.sj1);
    return `M${ax0},${ay0} A${R},${R} 0 0 1 ${ax1},${ay1} Q${cx},${cy} ${bx0},${by0} A${R},${R} 0 0 1 ${bx1},${by1} Q${cx},${cy} ${ax0},${ay0} Z`;
  };

  // 图例：每板块联投强度排序的前两条关系
  const partners = (i)=> lks.filter(l=>l.i===i||l.j===i).map(l=>({ j: l.i===i?l.j:l.i, v:l.v })).sort((a,b)=>b.v-a.v);

  return (
    <SlideShell orbs={[{ w:560, h:560, right:-160, top:-150,
        color:`radial-gradient(circle at 50% 50%, ${hexA(VIO,.16)}, ${hexA(VIO,0)} 68%)` }]}>
      <SlideHead no={head.no} en={head.en} cn={head.cn} badge={head.no} />

      <div className="dk-anim d1" style={{flex:'1 1 0', minHeight:0, display:'grid',
            gridTemplateColumns:'auto 1fr', gap:64, alignItems:'center', marginTop:18}}>
        <div style={{position:'relative', width:D, height:D, flexShrink:0}}>
          <svg width={D} height={D} viewBox={`0 0 ${D} ${D}`}>
            {/* 环形带（弦） */}
            {showRibbon && ribbons.map((rb,k)=>{
              const hot = focus && (rb.i===fIdx || rb.j===fIdx);
              const dim = focus && !hot;
              const cA=arcs[rb.i].col, cB=arcs[rb.j].col;
              const base = (rb.i===fIdx)?cA:(rb.j===fIdx)?cB:cA;
              return <path key={k} d={ribbonPath(rb)} fill={hexA(base, dim?0.07:hot?0.5:0.26)}
                stroke={hexA(base, dim?0.1:0.55)} strokeWidth="1"
                style={{filter: hot?`drop-shadow(0 0 10px ${hexA(base,.45)})`:'none', transition:'opacity .2s'}} />;
            })}
            {/* 圆周弧段 */}
            {arcs.map((s,i)=>{
              const hot = focus && i===fIdx, dim = focus && i!==fIdx;
              const [lx,ly]=P(R+TH+30, s.mid);
              return (<g key={i} opacity={dim?0.5:1} style={{transition:'opacity .2s'}}>
                <path d={arcPath(R, R+TH, s.a0, s.a1)} fill={s.col} stroke={navy} strokeWidth="2.5"
                  style={{filter: hot?`drop-shadow(0 0 16px ${hexA(s.col,.7)})`:'none'}} />
                <text x={lx} y={ly} textAnchor="middle" dominantBaseline="central"
                  fontFamily="var(--font-display)" fontWeight="900" fontSize="22"
                  fill={hot?s.col:'rgba(255,255,255,.6)'}>{lbl(i)}</text>
              </g>);
            })}
            {/* 圆心读数 */}
            <circle cx={cx} cy={cy} r={92} fill="rgba(5,11,34,.5)" stroke="rgba(255,255,255,.12)" strokeWidth="1.5" />
            {showAside && (<g>
              <text x={cx} y={cy-8} textAnchor="middle" fontFamily="var(--font-display)" fontWeight="900" fontSize="50" fill="#fff">{lks.length}</text>
              <text x={cx} y={cy+30} textAnchor="middle" fontFamily="var(--font-cn)" fontWeight="700" fontSize="20" fill={ACC}>对联投关系</text>
            </g>)}
          </svg>
        </div>

        {/* 图例：板块 → 主要联投对象 */}
        <div style={{display:'flex', flexDirection:'column', gap:'min(2vh,18px)', minWidth:0}}>
          {arcs.map((s)=>{
            const hot = focus && s.idx===fIdx;
            const ps = partners(s.idx).slice(0,3);
            return (
              <div key={s.idx} className={'dk-anim d'+Math.min(s.idx+2,6)} style={{display:'flex', gap:18, alignItems:'flex-start',
                    opacity: focus&&!hot?.55:1, paddingLeft:14, borderLeft:`4px solid ${hot?s.col:hexA(s.col,.4)}`}}>
                <span style={{flexShrink:0, width:38, height:38, borderRadius:11, display:'grid', placeItems:'center',
                    fontFamily:'var(--font-display)', fontWeight:900, fontSize:16,
                    color: hot?navy:s.col, background: hot?s.col:hexA(s.col,.16), border:`1.5px solid ${hexA(s.col,.55)}`}}>{lbl(s.idx)}</span>
                <div style={{minWidth:0, flex:'1 1 0'}}>
                  <div style={{display:'flex', alignItems:'baseline', gap:12}}>
                    <span style={{fontFamily:'var(--font-cn)', fontWeight:hot?900:700, fontSize:'var(--type-sub)', color:hot?'#fff':'rgba(255,255,255,.92)'}}>{s.label}</span>
                    <span style={{fontFamily:'var(--font-mono)', fontSize:'var(--type-tiny)', color:'var(--ink-faint)', letterSpacing:'.05em'}}>{s.sub}</span>
                  </div>
                  <div style={{display:'flex', flexWrap:'wrap', gap:'4px 16px', marginTop:6}}>
                    {ps.map((p,pi)=>(
                      <span key={pi} style={{fontFamily:'var(--font-cn)', fontSize:'var(--type-tiny)', color:'var(--ink-dim)', display:'inline-flex', alignItems:'center', gap:7}}>
                        <i style={{width:9, height:9, borderRadius:2, background:arcs[p.j]?arcs[p.j].col:'#888', flexShrink:0}}></i>
                        {data[p.j]?data[p.j].label:''}{showValue?<b style={{color:'rgba(255,255,255,.78)', fontFamily:'var(--font-mono)', fontWeight:700, marginLeft:6}}>{p.v}</b>:null}
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

export default SlideChord;

/* ── 模板参数 schema（自描述 · 迁移即带控件；Tweaks 由此自动生成） ── */
export const slideSpec = { defaults: defaultProps, slot:'chord', name:'板块联投 · Chord', controls:[
  { prop:'itemCount', type:'slider', label:'数量', default:6, min:3, max:6, step:1, desc:'板块数' },
  { prop:'showRibbon', type:'toggle', label:'联投环带', default:true },
  { prop:'showValue', type:'toggle', label:'强度数值', default:true },
  { prop:'showAside', type:'toggle', label:'装饰文案', default:true, desc:'圆心读数' },
  { prop:'labelType', type:'labelType', label:'标签类型', default:'数字' },
  { prop:'focus', type:'focus', label:'重点信息 Focus', default:true },
  { prop:'focusIndex', type:'slider', label:'焦点序号', default:0, min:0, max:(p)=>p.itemCount-1, maxFromKey:'itemCount', maxFromKeyOffset:-1, displayOffset:1, step:1, showIf:(p)=>p.focus },
]};
