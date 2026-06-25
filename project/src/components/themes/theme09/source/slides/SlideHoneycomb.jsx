import { useDeckStyles, deckTheme, deckLabel, SlideShell, SlideHead } from './DeckKit.jsx';
/* ============================================================================
   SlideHoneycomb — 蜂巢网格（六边形螺旋镶嵌 · 热力染色）
   独立组件：仅靠 props 控制内容与样式；render 时自注入 DeckKit 基座样式。
   与 Heatmap（行×列方格热力矩阵）、Treemap（矩形树图）刻意区分：本页是「六边形
   蜂巢」—— 各赛道为一枚正六边形，自中心按轴向螺旋向外镶嵌成花簇，色深∝量级，
   大者居中，读「中心主导 + 梯度扩散」。

   ── 可调参数（Props） ──────────────────────────────────────────────────────
   | prop        | 类型                          | 默认值 | 说明                          |
   | items       | Cell[]                        | 见下   | 数据源（value 决定热力深浅）  |
   | itemCount   | number (4–10)                 | 9      | 展示蜂格数（截取）            |
   | sort        | '降序'|'原序'                 | 降序   | 排序（决定中心→外圈顺序）     |
   | showValue   | boolean                       | true   | 格内数值                      |
   | showScale   | boolean                       | true   | 热力色阶图例（装饰）          |
   | focus       | boolean                       | true   | 高亮某一蜂格                  |
   | focusIndex  | number (0-based)              | 0      | 高亮第几格                    |
   | labelType   | 'number'|'symbol'|'keyword'   | number | 角标徽标样式                  |
   | showAside   | boolean                       | true   | 读图（装饰）                  |
   Cell = { label, sub, value, unit }
   ========================================================================== */
/* ── 页面属性契约 · defaultProps ──────────────────────────────────────────
   本页全部可见文案 / 数据 / 图片槽默认值集中于此，直接编辑即可换内容；
   组件内部以 { ...defaultProps, ...props } 合并，外部传同名 props 逐项覆盖。 */
export const defaultProps = {
  itemCount: 9,
  sort: '降序',
  showValue: true,
  showScale: true,
  focus: true,
  focusIndex: 0,
  labelType: 'number',
  showAside: true,
  head: { no:'10', en:'Honeycomb · Cells', cn:'赛道蜂巢 · 热度分布' },
  items: [
      { label:'算力',     sub:'Compute',    value:18,   unit:'%' },
      { label:'应用层',   sub:'Apps',       value:16,   unit:'%' },
      { label:'大模型',   sub:'Foundation', value:43.3, unit:'%' },
      { label:'企业服务', sub:'Enterprise', value:12,   unit:'%' },
      { label:'数据',     sub:'Data',       value:2.5,  unit:'%' },
      { label:'机器人',   sub:'Robotics',   value:4,    unit:'%' },
      { label:'医疗 AI',  sub:'Health',     value:3.7,  unit:'%' },
      { label:'自动驾驶', sub:'AV',         value:3,    unit:'%' },
      { label:'安全',     sub:'Safety',     value:2,    unit:'%' },
      { label:'边缘',     sub:'Edge',       value:1.5,  unit:'%' },
    ],
};

function SlideHoneycomb(props){
  useDeckStyles(props.theme);
  const T = (deckTheme ? deckTheme(props.theme) : {});
  const ACC = T.accent || '#46e3c6';
  const BLUE = T.blue || '#4a86ff';
  const DEEP = T.blueDeep || '#1d49d6';
  const navy = T.navy900 || '#050b22';

  const {
    itemCount, sort, showValue, showScale, focus, focusIndex, labelType,
    showAside, head, items,
  } = { ...defaultProps, ...props };

  let data = items.slice();
  if(sort==='降序') data.sort((a,b)=> b.value - a.value);
  const n = Math.max(4, Math.min(itemCount, data.length));
  data = data.slice(0, n);
  const fIdx = Math.max(0, Math.min(focusIndex, data.length - 1));
  const lbl = (i)=> deckLabel(labelType, i, { keyword:'H' });
  const maxV = Math.max(...data.map(d=>d.value)), minV = Math.min(...data.map(d=>d.value));

  // 轴向六边形螺旋坐标（pointy-top）
  const size = 112;
  const SQ3 = Math.sqrt(3);
  const axial = spiralAxial(n);
  const pix = axial.map(([q,r])=> [ size*SQ3*(q + r/2), size*1.5*r ]);
  const xs = pix.map(p=>p[0]), ys = pix.map(p=>p[1]);
  const minX = Math.min(...xs), maxX = Math.max(...xs), minY = Math.min(...ys), maxY = Math.max(...ys);
  const hw = size*SQ3/2, hh = size;
  const W = (maxX-minX) + hw*2 + 20, H = (maxY-minY) + hh*2 + 20;
  const ox = -minX + hw + 10, oy = -minY + hh + 10;

  const hexPts = (cx,cy)=>{
    const pts=[]; for(let k=0;k<6;k++){ const a=Math.PI/180*(60*k - 90);
      pts.push(`${(cx+size*Math.cos(a)).toFixed(1)},${(cy+size*Math.sin(a)).toFixed(1)}`); }
    return pts.join(' ');
  };
  // 热力色（DEEP→ACC）
  const lerp = (a,b,t)=> a+(b-a)*t;
  const hx = (h)=>{ const x=h.slice(1); const f=x.length===3?x.split('').map(c=>c+c).join(''):x; return [parseInt(f.slice(0,2),16),parseInt(f.slice(2,4),16),parseInt(f.slice(4,6),16)]; };
  const cDeep = hx(DEEP), cAcc = hx(ACC);
  const heatCol = (v)=>{ const t = maxV===minV?1:(v-minV)/(maxV-minV); return `rgb(${Math.round(lerp(cDeep[0],cAcc[0],t))},${Math.round(lerp(cDeep[1],cAcc[1],t))},${Math.round(lerp(cDeep[2],cAcc[2],t))})`; };

  const top = data[0];
  const listGap = data.length > 8 ? 6 : data.length > 6 ? 7 : 9;
  const listFont = data.length > 8 ? '20px' : 'var(--type-small)';

  return (
    <SlideShell orbs={[{ w:560, h:560, left:-150, bottom:-160,
        color:`radial-gradient(circle at 50% 50%, ${hexA(ACC,.14)}, ${hexA(ACC,0)} 68%)` }]}>
      <SlideHead no={head.no} en={head.en} cn={head.cn} badge={head.no} />

      <div className="dk-anim d1" style={{flex:'1 1 0', minHeight:0, display:'grid', gridTemplateColumns:'1.35fr 1fr', gridTemplateRows:'minmax(0,1fr)', gap:48, alignItems:'center', marginTop:12}}>
        {/* 蜂巢 */}
        <div style={{position:'relative', width:'100%', height:'100%', display:'grid', placeItems:'center'}}>
          <svg width="100%" height="100%" viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="xMidYMid meet" style={{maxHeight:'100%'}}>
            {data.map((d,i)=>{
              const cx = pix[i][0]+ox, cy = pix[i][1]+oy;
              const hot = focus && i===fIdx, dim = focus && i!==fIdx;
              const col = heatCol(d.value);
              return (
                <g key={i} opacity={dim?0.5:1} style={{transition:'opacity .2s'}}>
                  <polygon points={hexPts(cx,cy)} fill={col} stroke={hot?'#fff':hexA('#fff',.18)} strokeWidth={hot?4:2}
                    style={{filter: hot?`drop-shadow(0 0 22px ${hexA(ACC,.6)})`:'none'}} />
                  <text x={cx} y={cy-26} textAnchor="middle" fontFamily="var(--font-display)" fontWeight="900" fontSize="15" fill={hexA('#fff',.55)}>{lbl(i)}</text>
                  <text x={cx} y={cy+2} textAnchor="middle" fontFamily="var(--font-cn)" fontWeight="900" fontSize="26" fill="#fff">{d.label}</text>
                  {showValue && <text x={cx} y={cy+40} textAnchor="middle" fontFamily="var(--font-display)" fontWeight="900" fontSize="30" fill="#fff">{d.value}<tspan fontSize="16">{d.unit}</tspan></text>}
                </g>
              );
            })}
          </svg>
        </div>

        {/* 右栏：色阶 + 排行 + 读图 */}
        <div style={{display:'flex', flexDirection:'column', gap:22, minHeight:0, justifyContent:'center'}}>
          {showScale && (
            <div className="dk-anim d2">
              <div style={{fontFamily:'var(--font-mono)', fontSize:13, letterSpacing:'.1em', color:'var(--ink-faint)', marginBottom:8}}>热力色阶 · 占比</div>
              <div style={{height:16, borderRadius:8, background:`linear-gradient(90deg, ${DEEP}, ${ACC})`}}></div>
              <div style={{display:'flex', justifyContent:'space-between', marginTop:5, fontFamily:'var(--font-mono)', fontSize:12, color:'var(--ink-faint)'}}>
                <span>{minV}%</span><span>{maxV}%</span>
              </div>
            </div>
          )}
          <div className="dk-anim d3" style={{display:'flex', flexDirection:'column', gap:listGap}}>
            {data.map((d,i)=>{
              const hot = focus && i===fIdx;
              return (
                <div key={i} data-dashi-theme09-honeycomb-rank={i} data-dashi-theme09-honeycomb-label={d.label} style={{display:'flex', alignItems:'center', gap:14, opacity:focus&&!hot?.62:1}}>
                  <i style={{width:14, height:14, borderRadius:3, background:heatCol(d.value), flexShrink:0}}></i>
                  <span style={{fontFamily:'var(--font-cn)', fontWeight:hot?900:600, fontSize:listFont, color:hot?'#fff':'rgba(255,255,255,.86)', flex:'1 1 0'}}>{d.label}</span>
                  <span style={{fontFamily:'var(--font-display)', fontWeight:900, fontSize:listFont, color:hot?ACC:'rgba(255,255,255,.7)'}}>{d.value}{d.unit}</span>
                </div>
              );
            })}
          </div>
          {showAside && (
            <div className="dk-glass-dark dk-anim d4" style={{borderRadius:16, padding:'14px 22px'}}>
              <p style={{fontSize:'var(--type-tiny)', lineHeight:1.55, color:'rgba(255,255,255,.84)', textWrap:'pretty', margin:0}}>
                色深正比赛道占比。<b style={{color:'#fff'}}>{top.label}</b> 居中心、色最深（{top.value}{top.unit}），
                向外蜂格渐浅，呈现资本高度向头部赛道收拢的热度梯度。
              </p>
            </div>
          )}
        </div>
      </div>
    </SlideShell>
  );

  // 轴向螺旋：返回 n 个 [q,r]（自中心 0,0 逐环外扩 · 标准 hex spiral）
  function spiralAxial(count){
    const res = [[0,0]];
    const dirs = [[1,0],[1,-1],[0,-1],[-1,0],[-1,1],[0,1]];
    for(let k=1; res.length < count && k <= 10; k++){
      let q = dirs[4][0]*k, r = dirs[4][1]*k;   // 自第 4 方向 ×k 起步
      for(let i=0;i<6;i++){
        for(let j=0;j<k;j++){
          if(res.length < count) res.push([q, r]);
          q += dirs[i][0]; r += dirs[i][1];
        }
      }
    }
    return res.slice(0, count);
  }

  function hexA(hex, a){
    if(!hex || hex[0] !== '#') return hex;
    const x = hex.slice(1); const f = x.length===3 ? x.split('').map(c=>c+c).join('') : x;
    return `rgba(${parseInt(f.slice(0,2),16)},${parseInt(f.slice(2,4),16)},${parseInt(f.slice(4,6),16)},${a})`;
  }
}

export default SlideHoneycomb;

/* ── 模板参数 schema（自描述 · 迁移即带控件；Tweaks 由此自动生成） ── */
export const slideSpec = { defaults: defaultProps, slot:'honeycomb', name:'蜂巢网格 · Honeycomb', controls:[
  { prop:'itemCount', type:'slider', label:'数量', default:9, min:4, max:10, step:1, desc:'蜂格数' },
  { prop:'sort', type:'radio', label:'排序', default:'降序', options:['降序','原序'] },
  { prop:'showValue', type:'toggle', label:'格内数值', default:true },
  { prop:'showScale', type:'toggle', label:'装饰文案', default:true, desc:'热力色阶' },
  { prop:'showAside', type:'toggle', label:'读图条', default:true },
  { prop:'labelType', type:'labelType', label:'标签类型', default:'数字' },
  { prop:'focus', type:'focus', label:'重点信息 Focus', default:true },
  { prop:'focusIndex', type:'slider', label:'焦点序号', default:0, min:0, max:(p)=>p.itemCount-1, maxFromKey:'itemCount', maxFromKeyOffset:-1, displayOffset:1, step:1, showIf:(p)=>p.focus },
]};
