import { useDeckStyles, deckTheme, deckLabel, SlideShell, SlideHead } from './DeckKit.jsx';
/* ============================================================================
   SlideNetwork — 关系网络（节点-连线图 · 中枢辐辏 + 交叉关联）
   独立组件：仅靠 props 控制内容与样式；render 时自注入 DeckKit 基座样式。
   与 Flow（桑基带状流量）、Orbit（极坐标时间轴）、Chain（产业链分层）刻意区分：
   本页是「节点-连线网络」—— 中央枢纽节点向各赛道节点辐辏，节点面积∝量级、连线
   粗细∝关联强度，并叠加若干节点间交叉关联，读「谁是中心 + 谁与谁相连」。

   ── 可调参数（Props） ──────────────────────────────────────────────────────
   | prop          | 类型                          | 默认值 | 说明                          |
   | nodes         | Node[]                        | 见下   | 外围节点数据源（value 决定大小）|
   | itemCount     | number (4–8)                  | 7      | 展示节点数（截取）            |
   | hub           | {label,sub}                   | 见下   | 中枢节点                      |
   | showCrossLinks| boolean                       | true   | 节点间交叉关联线              |
   | showValue     | boolean                       | true   | 节点数值                      |
   | focus         | boolean                       | true   | 高亮某一节点及其连线          |
   | focusIndex    | number (0-based)              | 0      | 高亮第几个                    |
   | labelType     | 'number'|'symbol'|'keyword'   | number | 角标徽标样式                  |
   | showAside     | boolean                       | true   | 读图（装饰）                  |
   Node = { label, sub, value, tone:'acc'|'blue'|'violet'|'warn' }
   ========================================================================== */
/* ── 页面属性契约 · defaultProps ──────────────────────────────────────────
   本页全部可见文案 / 数据 / 图片槽默认值集中于此，直接编辑即可换内容；
   组件内部以 { ...defaultProps, ...props } 合并，外部传同名 props 逐项覆盖。 */
export const defaultProps = {
  itemCount: 7,
  hub: { label:'资本', sub:'$97B Capital' },
  showCrossLinks: true,
  showValue: true,
  focus: true,
  focusIndex: 0,
  labelType: 'number',
  showAside: true,
  head: { no:'10', en:'Network · Graph', cn:'资本网络 · 赛道关联' },
  nodes: [
      { label:'大模型',   sub:'Foundation', value:610, tone:'acc' },
      { label:'算力',     sub:'Compute',    value:370, tone:'blue' },
      { label:'应用层',   sub:'Apps',       value:190, tone:'violet' },
      { label:'企业服务', sub:'Enterprise', value:120, tone:'blue' },
      { label:'数据',     sub:'Data',       value:96,  tone:'acc' },
      { label:'安全',     sub:'Safety',     value:74,  tone:'warn' },
      { label:'机器人',   sub:'Robotics',   value:55,  tone:'violet' },
      { label:'医疗 AI',  sub:'Health',     value:48,  tone:'blue' },
    ],
  // 交叉关联（外围节点之间，按索引）
  crossLinks: [ [0,1], [0,2], [1,4], [2,3], [3,7], [0,5] ],
};

function SlideNetwork(props){
  useDeckStyles(props.theme);
  const T = (deckTheme ? deckTheme(props.theme) : {});
  const ACC = T.accent || '#46e3c6';
  const BLUE = T.blue || '#4a86ff';
  const VIO = T.violet || '#9f7bff';
  const WARN = T.warn || '#ffb27a';
  const navy = T.navy900 || '#050b22';
  const TONE = { acc:ACC, blue:BLUE, violet:VIO, warn:WARN };

  const {
    itemCount, hub, showCrossLinks, showValue, focus, focusIndex, labelType,
    showAside, head, nodes, crossLinks,
  } = { ...defaultProps, ...props };

  const data = nodes.slice(0, Math.max(4, Math.min(itemCount, nodes.length)));
  const n = data.length;
  const fIdx = Math.max(0, Math.min(focusIndex, n - 1));
  const lbl = (i)=> deckLabel(labelType, i, { keyword:'N' });

  const W = 1560, H = 660, cx = W/2, cy = H/2;
  const R = 248;
  const maxV = Math.max(...data.map(d=>d.value));
  const rOf = (v)=> Math.max(46, 96*Math.sqrt(v/maxV));
  const hubR = 104;
  const ang = (i)=> (-90 + i*(360/n)) * Math.PI/180;
  const pos = (i)=> [cx + R*1.28*Math.cos(ang(i)), cy + R*0.92*Math.sin(ang(i))];
  const links = showCrossLinks ? crossLinks.filter(([a,b])=> a<n && b<n) : [];

  // viewBox 收紧到图形真实包围盒，消除左右大片空白
  const _np = 26;
  const _pts = data.map((d,i)=>{ const [x,y]=pos(i); return {x,y,r:rOf(d.value)}; });
  _pts.push({ x:cx, y:cy, r:hubR+10 });
  const NX0 = Math.min(..._pts.map(p=>p.x-p.r)), NX1 = Math.max(..._pts.map(p=>p.x+p.r));
  const NY0 = Math.min(..._pts.map(p=>p.y-p.r)), NY1 = Math.max(..._pts.map(p=>p.y+p.r));
  const NVB = `${(NX0-_np).toFixed(0)} ${(NY0-_np).toFixed(0)} ${(NX1-NX0+_np*2).toFixed(0)} ${(NY1-NY0+_np*2).toFixed(0)}`;

  return (
    <SlideShell orbs={[{ w:620, h:620, left:'50%', top:'58%',
        color:`radial-gradient(circle at 50% 50%, ${hexA(BLUE,.18)}, ${hexA(BLUE,0)} 64%)` }]}>
      <SlideHead no={head.no} en={head.en} cn={head.cn} badge={head.no} />

      <div className="dk-anim d1" style={{flex:'1 1 0', minHeight:0, position:'relative', marginTop:6}}>
        <svg width="100%" height="100%" viewBox={NVB} preserveAspectRatio="xMidYMid meet" style={{display:'block', maxHeight:'100%'}}>
          <defs>
            <radialGradient id="netHub" cx="38%" cy="34%" r="72%">
              <stop offset="0" stopColor="#fff" /><stop offset=".5" stopColor={hexA(ACC,.85)} /><stop offset="1" stopColor={hexA(BLUE,.7)} />
            </radialGradient>
            {Object.entries(TONE).map(([k,c])=>(
              <radialGradient key={k} id={'netN'+k} cx="36%" cy="32%" r="74%">
                <stop offset="0" stopColor={hexA(c,.96)} /><stop offset=".62" stopColor={hexA(c,.6)} /><stop offset="1" stopColor={hexA(c,.34)} />
              </radialGradient>
            ))}
            {/* 背景模糊：把汇聚到球上的连线 / 虚线在「节点圆盘范围内」高斯模糊压掉，球外仍清晰 */}
            <filter id="net-soft" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="8" /></filter>
            <mask id="net-hide-discs" maskUnits="userSpaceOnUse" x="-4000" y="-4000" width="12000" height="12000">
              <rect x="-4000" y="-4000" width="12000" height="12000" fill="#fff" />
              {data.map((d,i)=>{ const [x,y]=pos(i); return <circle key={i} cx={x} cy={y} r={rOf(d.value)+1} fill="#000" />; })}
              <circle cx={cx} cy={cy} r={hubR+1} fill="#000" />
            </mask>
            <mask id="net-show-discs" maskUnits="userSpaceOnUse" x="-4000" y="-4000" width="12000" height="12000">
              <rect x="-4000" y="-4000" width="12000" height="12000" fill="#000" />
              {data.map((d,i)=>{ const [x,y]=pos(i); return <circle key={'s'+i} cx={x} cy={y} r={rOf(d.value)+1} fill="#fff" />; })}
              <circle cx={cx} cy={cy} r={hubR+1} fill="#fff" />
            </mask>
            {/* 连线定义一次，下面以清晰 / 模糊两份分区绘制 */}
            <g id="net-lines">
              {data.map((d,i)=>{
                const [x,y]=pos(i); const c=TONE[d.tone]||ACC;
                const hot = focus && i===fIdx, dim = focus && i!==fIdx;
                const w = 2 + 7*(d.value/maxV);
                return <line key={'s'+i} x1={cx} y1={cy} x2={x} y2={y} stroke={hot?c:hexA('#9fc0ff',.3)} strokeWidth={hot?w+2:w} opacity={dim?0.35:1} strokeLinecap="round" />;
              })}
              {links.map(([a,b],i)=>{
                const [ax,ay]=pos(a),[bx,by]=pos(b);
                const involve = focus && (a===fIdx||b===fIdx);
                const dim = focus && !involve;
                const mx=(ax+bx)/2, my=(ay+by)/2 + (ay+by>2*cy? 40:-40);
                return <path key={'c'+i} d={`M${ax},${ay} Q${mx},${my} ${bx},${by}`} fill="none"
                  stroke={involve?ACC:hexA('#fff',.16)} strokeWidth={involve?2.5:1.4} strokeDasharray="2 7" opacity={dim?0.3:1} />;
              })}
            </g>
          </defs>

          {/* 圆盘外清晰连线 + 圆盘内背景模糊连线（球压掉汇聚的线段与虚线） */}
          <use href="#net-lines" mask="url(#net-hide-discs)" />
          <use href="#net-lines" mask="url(#net-show-discs)" filter="url(#net-soft)" />

          {/* 中枢节点 */}
          <circle cx={cx} cy={cy} r={hubR+8} fill="none" stroke={hexA(ACC,.3)} strokeWidth="1.5" strokeDasharray="3 7" />
          <circle cx={cx} cy={cy} r={hubR} fill="url(#netHub)" stroke="#fff" strokeWidth="2"
            style={{filter:`drop-shadow(0 0 30px ${hexA(ACC,.55)})`}} />
          <text x={cx} y={cy-6} textAnchor="middle" fontFamily="var(--font-cn)" fontWeight="900" fontSize="40" fill={navy}>{hub.label}</text>
          <text x={cx} y={cy+30} textAnchor="middle" fontFamily="var(--font-mono)" fontSize="15" fontWeight="700" fill={hexA(navy,.7)}>{hub.sub}</text>

          {/* 外围节点 */}
          {data.map((d,i)=>{
            const [x,y]=pos(i); const c=TONE[d.tone]||ACC; const r=rOf(d.value);
            const hot = focus && i===fIdx, dim = focus && i!==fIdx;
            return (
              <g key={'n'+i} opacity={dim?0.52:1} style={{transition:'opacity .2s'}}>
                <circle cx={x} cy={y} r={r} fill={`url(#netN${d.tone||'acc'})`} stroke={hot?'#fff':hexA(c,.6)} strokeWidth={hot?4:2}
                  style={{filter: hot?`drop-shadow(0 0 22px ${hexA(c,.65)})`:'none'}} />
                <text x={x} y={y-(showValue?6:2)} textAnchor="middle" fontFamily="var(--font-cn)" fontWeight="900" fontSize={Math.max(18,r*0.32)} fill="#fff">{d.label}</text>
                {showValue && <text x={x} y={y+r*0.42} textAnchor="middle" fontFamily="var(--font-display)" fontWeight="900" fontSize={Math.max(14,r*0.26)} fill={hexA('#fff',.9)}>{d.value}</text>}
                {/* 角标 */}
                <circle cx={x + r*0.72} cy={y - r*0.72} r="16" fill={hot?c:navy} stroke={c} strokeWidth="2" />
                <text x={x + r*0.72} y={y - r*0.72 + 5} textAnchor="middle" fontFamily="var(--font-display)" fontWeight="900" fontSize="13" fill={hot?navy:c}>{lbl(i)}</text>
              </g>
            );
          })}
        </svg>
      </div>

      {showAside && (
        <div className="dk-glass-dark dk-anim d2" style={{flexShrink:0, marginTop:10, borderRadius:16,
              padding:'14px 24px', display:'flex', alignItems:'center', gap:16}}>
          <span style={{flexShrink:0, fontFamily:'var(--font-mono)', fontSize:13, letterSpacing:'.12em', color:ACC}}>读图</span>
          <p style={{fontSize:'var(--type-tiny)', lineHeight:1.5, color:'rgba(255,255,255,.84)', textWrap:'pretty', margin:0}}>
            节点面积∝赛道资金、辐条粗细∝与资本中枢的关联强度，虚线为赛道间协同。
            <b style={{color:'#fff'}}>{data[fIdx].label}</b> 为当前焦点节点，连线最密。
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

export default SlideNetwork;

/* ── 模板参数 schema（自描述 · 迁移即带控件；Tweaks 由此自动生成） ── */
export const slideSpec = { defaults: defaultProps, slot:'network', name:'关系网络 · Network', controls:[
  { prop:'itemCount', type:'slider', label:'数量', default:7, min:4, max:8, step:1, desc:'节点数' },
  { prop:'showCrossLinks', type:'toggle', label:'交叉关联', default:true },
  { prop:'showValue', type:'toggle', label:'节点数值', default:true },
  { prop:'showAside', type:'toggle', label:'装饰文案', default:true, desc:'读图条' },
  { prop:'labelType', type:'labelType', label:'标签类型', default:'数字' },
  { prop:'focus', type:'focus', label:'重点信息 Focus', default:true },
  { prop:'focusIndex', type:'slider', label:'焦点序号', default:0, min:0, max:(p)=>p.itemCount-1, maxFromKey:'itemCount', maxFromKeyOffset:-1, displayOffset:1, step:1, showIf:(p)=>p.focus },
]};
