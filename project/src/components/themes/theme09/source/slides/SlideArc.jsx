import { useDeckStyles, deckTheme, deckLabel, SlideShell, SlideHead } from './DeckKit.jsx';
/* ============================================================================
   SlideArc — 弧线关系图（arc diagram · 基线节点 + 半圆连弧）
   独立组件：仅靠 props 控制内容与样式；render 时自注入 DeckKit 基座样式。
   与 Chord（圆周穿心环带）、Network（中枢辐辏散点）、Chain（产业链分层）刻意区分：
   本页是「弧线图」—— 所有机构沿一条横基线一字排开（点径 ∝ 体量），机构间的共同出资以
   跨越其上的半圆弧相连（弧宽 ∝ 关联强度），线性排布 + 跨度弧一眼读「谁连谁、跨得多远」。

   ── 可调参数（Props） ──────────────────────────────────────────────────────
   | prop        | 类型                          | 默认值 | 说明                          |
   | nodes       | Node[]                        | 见下   | 节点数据源（沿基线排列）      |
   | links       | Link[]                        | 见下   | 节点间关联（i,j,v）           |
   | itemCount   | number (4–8)                  | 7      | 展示节点数（截取，相关弧同步）|
   | showArc     | boolean                       | true   | 连弧显隐                      |
   | showValue   | boolean                       | true   | 节点体量数值                  |
   | focus       | boolean                       | true   | 高亮某节点及其相关弧          |
   | focusIndex  | number (0-based)              | 0      | 高亮第几个节点                |
   | labelType   | 'number'|'symbol'|'keyword'   | number | 节点徽标样式                  |
   | showAside   | boolean                       | true   | 「关联解读」装饰条            |
   | head        | …                             | 见下   | 页眉文案                      |
   Node = { label, sub, value }  Link = { i, j, v }
   ========================================================================== */
/* ── 页面属性契约 · defaultProps ──────────────────────────────────────────
   本页全部可见文案 / 数据 / 图片槽默认值集中于此，直接编辑即可换内容；
   组件内部以 { ...defaultProps, ...props } 合并，外部传同名 props 逐项覆盖。 */
export const defaultProps = {
  itemCount: 7,
  showArc: true,
  showValue: true,
  focus: true,
  focusIndex: 0,
  labelType: 'number',
  showAside: true,
  unit: '亿$',
  head: { no:'10', en:'Arc · Co-investment', cn:'资本弧网 · 共投连线' },
  nodes: [
      { label:'红杉资本',   sub:'Sequoia',   value:120 },
      { label:'a16z',       sub:'Andreessen',value:98 },
      { label:'Thrive',     sub:'Thrive',    value:64 },
      { label:'微软',       sub:'Microsoft', value:150 },
      { label:'英伟达',     sub:'NVIDIA',    value:88 },
      { label:'老虎环球',   sub:'Tiger',     value:52 },
      { label:'Coatue',     sub:'Coatue',    value:46 },
      { label:'软银愿景',   sub:'SoftBank',  value:70 },
    ],
  links: [
      { i:0, j:3, v:9 }, { i:1, j:3, v:7 }, { i:3, j:4, v:8 },
      { i:0, j:1, v:6 }, { i:2, j:4, v:5 }, { i:1, j:4, v:6 },
      { i:5, j:6, v:4 }, { i:0, j:5, v:3 }, { i:3, j:7, v:5 }, { i:4, j:7, v:4 },
    ],
};

function SlideArc(props){
  useDeckStyles(props.theme);
  const T = (deckTheme ? deckTheme(props.theme) : {});
  const ACC = T.accent || '#46e3c6';
  const BLUE = T.blue || '#4a86ff';
  const VIO = T.violet || '#9f7bff';
  const WARN = T.warn || '#ffb27a';
  const navy = T.navy900 || '#050b22';
  const PAL = [ACC, BLUE, VIO, WARN, '#6fd3ff', '#ff9bb6', '#9affc8', '#ffd66e'];

  const {
    itemCount, showArc, showValue, focus, focusIndex, labelType, showAside,
    unit, head, nodes, links,
  } = { ...defaultProps, ...props };

  const n = Math.max(4, Math.min(itemCount, nodes.length));
  const data = nodes.slice(0, n).map((d,i)=>({ ...d, col:PAL[i%PAL.length], idx:i }));
  const lks = links.filter(l=> l.i<n && l.j<n);
  const fIdx = Math.max(0, Math.min(focusIndex, n-1));
  const lbl = (i)=> deckLabel(labelType, i, { keyword:'N' });
  const maxV = Math.max(...data.map(d=>d.value));
  const maxL = Math.max(...lks.map(l=>l.v), 1);

  const W = 1640, H = 560, padX = 110, baseY = 392, maxArc = 332;
  const X = (i)=> padX + (n<=1?(W-2*padX)/2:(i/(n-1))*(W-2*padX));
  const rNode = (v)=> 16 + (v/maxV)*30;
  const arcPath = (a,b)=>{
    const x0=X(a), x1=X(b), rx=Math.abs(x1-x0)/2, ry=Math.min(rx, maxArc);
    return `M${x0},${baseY} A${rx},${ry} 0 0 1 ${x1},${baseY}`;
  };
  const partners = (i)=> lks.filter(l=>l.i===i||l.j===i).map(l=>({ j:l.i===i?l.j:l.i, v:l.v })).sort((a,b)=>b.v-a.v);
  const fp = partners(fIdx);

  return (
    <SlideShell orbs={[{ w:520, h:520, left:-150, top:-150,
        color:`radial-gradient(circle at 50% 50%, ${hexA(ACC,.15)}, ${hexA(ACC,0)} 70%)` }]}>
      <SlideHead no={head.no} en={head.en} cn={head.cn} badge={head.no} />

      <div style={{flex:'1 1 0', minHeight:0, display:'flex', flexDirection:'column', marginTop:22}}>
        <div className="dk-glass dk-anim d1" style={{flex:'1 1 0', minHeight:0, borderRadius:'var(--dk-radius)', padding:'10px 26px', display:'flex', flexDirection:'column'}}>
          <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="xMidYMid meet" style={{width:'100%', flex:'1 1 0', minHeight:0, display:'block'}}>
            <defs>
              {/* 真·背景模糊：把后方连弧在「节点圆盘范围内」做高斯模糊，圆点处线段虚化、
                  与清晰圆点拉开层次；圆盘外仍为清晰弧。无暗色光晕。 */}
              <filter id="arc-soft" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="6.5" /></filter>
              <mask id="arc-hide-discs" maskUnits="userSpaceOnUse" x="0" y="0" width={W} height={H}>
                <rect x="0" y="0" width={W} height={H} fill="#fff" />
                {data.map((d)=> <circle key={d.idx} cx={X(d.idx)} cy={baseY} r={rNode(d.value)+1} fill="#000" />)}
              </mask>
              <mask id="arc-show-discs" maskUnits="userSpaceOnUse" x="0" y="0" width={W} height={H}>
                <rect x="0" y="0" width={W} height={H} fill="#000" />
                {data.map((d)=> <circle key={'s'+d.idx} cx={X(d.idx)} cy={baseY} r={rNode(d.value)+1} fill="#fff" />)}
              </mask>
              {/* 基线 + 连弧定义一次，下面以「清晰 / 模糊」两份分区绘制（球内基线一并虚化） */}
              <g id="arc-lines">
                <line x1={padX-30} y1={baseY} x2={W-padX+30} y2={baseY} stroke="rgba(255,255,255,.18)" strokeWidth="2" />
                {showArc && lks.map((l,k)=>{
                  const hot = focus && (l.i===fIdx || l.j===fIdx);
                  const dim = focus && !hot;
                  const base = (l.i===fIdx)?data[l.i].col:(l.j===fIdx)?data[l.j].col:data[l.i].col;
                  return <path key={k} d={arcPath(l.i,l.j)} fill="none"
                    stroke={hexA(base, dim?0.14:hot?0.95:0.4)} strokeWidth={2+(l.v/maxL)*12} strokeLinecap="round" />;
                })}
              </g>
            </defs>
            {/* 圆盘外清晰（基线+弧）+ 圆盘内背景模糊（球内线段一并虚化遮挡） */}
            <use href="#arc-lines" mask="url(#arc-hide-discs)" />
            <use href="#arc-lines" mask="url(#arc-show-discs)" filter="url(#arc-soft)" />
            {/* 节点 + 标签 */}
            {data.map((d)=>{
              const hot = focus && d.idx===fIdx, dim = focus && d.idx!==fIdx;
              const r = rNode(d.value);
              return (<g key={d.idx} opacity={dim?0.5:1} style={{transition:'opacity .2s'}}>
                <circle cx={X(d.idx)} cy={baseY} r={r} fill={hexA(d.col,hot?.86:.66)} stroke={navy} strokeWidth="3"
                  style={{filter: hot?`drop-shadow(0 0 16px ${hexA(d.col,.8)})`:'none'}} />
                <text x={X(d.idx)} y={baseY+1} textAnchor="middle" dominantBaseline="central"
                  fontFamily="var(--font-display)" fontWeight="900" fontSize="18" fill={navy}>{lbl(d.idx)}</text>
                <text x={X(d.idx)} y={baseY+r+34} textAnchor="middle" fontFamily="var(--font-cn)" fontWeight={hot?900:700} fontSize="24" fill={hot?d.col:'#fff'}>{d.label}</text>
                {showValue && <text x={X(d.idx)} y={baseY+r+58} textAnchor="middle" fontFamily="var(--font-mono)" fontSize="15" fill="var(--ink-faint)">{d.value} {unit}</text>}
              </g>);
            })}
          </svg>
          <div style={{display:'flex', gap:26, padding:'0 14px 6px', fontFamily:'var(--font-mono)', fontSize:'var(--type-tiny)', color:'var(--ink-faint)'}}>
            <span>● 点径 ∝ 机构出资体量</span>
            <span>⌒ 弧宽 ∝ 共投强度</span>
            <span style={{marginLeft:'auto'}}>{n} 家机构 · {lks.length} 对共投</span>
          </div>
        </div>

        {showAside && (
          <div className="dk-glass-dark dk-anim d2" style={{marginTop:16, borderRadius:22, padding:'20px 30px', display:'flex', gap:24, alignItems:'center'}}>
            <span style={{flexShrink:0, fontFamily:'var(--font-mono)', fontSize:14, letterSpacing:'.12em', color:ACC, writingMode:'vertical-rl', textOrientation:'upright'}}>关联</span>
            <p style={{flex:'1 1 0', fontSize:'var(--type-small)', lineHeight:1.5, color:'rgba(255,255,255,.86)', textWrap:'pretty'}}>
              <b style={{color:data[fIdx].col}}>{data[fIdx].label}</b> 共与 <b style={{color:'#fff'}}>{fp.length}</b> 家机构联合出资，
              其中与 <b style={{color:fp[0]?data[fp[0].j].col:'#fff'}}>{fp[0]?data[fp[0].j].label:'—'}</b> 的共投跨度最强（强度 {fp[0]?fp[0].v:0}）；
              头部资本围绕大模型与算力企业形成密集弧网，跨度越长代表跨赛道协同越深。
            </p>
            <div style={{flexShrink:0, textAlign:'center'}}>
              <div style={{fontFamily:'var(--font-display)', fontWeight:900, fontSize:54, lineHeight:.9, color:ACC}}>{fp.length}</div>
              <div style={{fontSize:'var(--type-tiny)', color:'var(--ink-faint)', marginTop:4}}>关联机构</div>
            </div>
          </div>
        )}
      </div>
    </SlideShell>
  );

  function hexA(hex, a){
    if(!hex || hex[0] !== '#') return hex;
    const x = hex.slice(1); const f = x.length===3 ? x.split('').map(c=>c+c).join('') : x;
    return `rgba(${parseInt(f.slice(0,2),16)},${parseInt(f.slice(2,4),16)},${parseInt(f.slice(4,6),16)},${a})`;
  }
}

export default SlideArc;

/* ── 模板参数 schema（自描述 · 迁移即带控件；Tweaks 由此自动生成） ── */
export const slideSpec = { defaults: defaultProps, slot:'arc', name:'资本弧网 · Arc', controls:[
  { prop:'itemCount', type:'slider', label:'数量', default:7, min:4, max:8, step:1, desc:'节点数' },
  { prop:'showArc', type:'toggle', label:'连弧', default:true },
  { prop:'showValue', type:'toggle', label:'体量数值', default:true },
  { prop:'showAside', type:'toggle', label:'装饰文案', default:true, desc:'关联解读' },
  { prop:'labelType', type:'labelType', label:'标签类型', default:'数字' },
  { prop:'focus', type:'focus', label:'重点信息 Focus', default:true },
  { prop:'focusIndex', type:'slider', label:'焦点序号', default:0, min:0, max:(p)=>p.itemCount-1, maxFromKey:'itemCount', maxFromKeyOffset:-1, displayOffset:1, step:1, showIf:(p)=>p.focus },
]};
