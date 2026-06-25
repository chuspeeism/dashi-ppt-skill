import { useDeckStyles, deckTheme, SlideShell, SlideHead } from './DeckKit.jsx';
/* ============================================================================
   SlideBubble — 气泡聚类（圆形装箱 · 面积编码量级）
   独立组件：仅靠 props 控制内容与样式；render 时自注入 DeckKit 基座样式。
   与 Quadrant（X/Y 散点定位）、Dotfield（等大单元点阵计数）、Treemap（矩形树图）、
   Venn（集合叠合）刻意区分：本页是「气泡聚类装箱」—— 圆面积∝量级，按确定性螺旋
   贪心装箱抱团成一簇，大者居中、小者环抱，读「谁体量最大 + 整体梯度」。

   ── 可调参数（Props） ──────────────────────────────────────────────────────
   | prop        | 类型                          | 默认值 | 说明                          |
   | items       | Bubble[]                      | 见下   | 数据源（value 决定面积）      |
   | itemCount   | number (1–8)                  | 8      | 展示气泡数（截取）            |
   | sort        | '降序'|'原序'                 | 降序   | 按量级排序（影响装箱顺序）    |
   | showValue   | boolean                       | true   | 泡内数值                      |
   | focus       | boolean                       | true   | 高亮某一气泡                  |
   | focusIndex  | number (0-based)              | 0      | 高亮第几个                    |
   | showAside   | boolean                       | true   | 读图（装饰）                  |
   Bubble = { label, sub, value, tone:'acc'|'blue'|'violet'|'warn' }
   ========================================================================== */
/* ── 页面属性契约 · defaultProps ──────────────────────────────────────────
   本页全部可见文案 / 数据 / 图片槽默认值集中于此，直接编辑即可换内容；
   组件内部以 { ...defaultProps, ...props } 合并，外部传同名 props 逐项覆盖。 */
export const defaultProps = {
  itemCount: 8,
  sort: '降序',
  showValue: true,
  focus: false,
  focusIndex: 0,
  showAside: true,
  unit: '亿$',
  head: { no:'09', en:'Bubble · Pack', cn:'体量聚类 · 资本抱团' },
  items: [
      { label:'OpenAI',     sub:'Foundation', value:157, tone:'acc' },
      { label:'Databricks', sub:'Data/AI',    value:62,  tone:'blue' },
      { label:'xAI',        sub:'Foundation', value:50,  tone:'violet' },
      { label:'Anthropic',  sub:'Foundation', value:40,  tone:'acc' },
      { label:'Anysphere',  sub:'Dev Tools',  value:25,  tone:'blue' },
      { label:'Scale AI',   sub:'Data',       value:14,  tone:'warn' },
      { label:'Glean',      sub:'Enterprise', value:9,   tone:'blue' },
      { label:'Safe SI',    sub:'Safety',     value:10,  tone:'violet' },
    ],
};

function SlideBubble(props){
  useDeckStyles(props.theme);
  const T = (deckTheme ? deckTheme(props.theme) : {});
  const ACC = T.accent || '#46e3c6';
  const BLUE = T.blue || '#4a86ff';
  const VIO = T.violet || '#9f7bff';
  const WARN = T.warn || '#ffb27a';
  const navy = T.navy900 || '#050b22';
  const TONE = { acc:ACC, blue:BLUE, violet:VIO, warn:WARN };

  const {
    itemCount, sort, showValue, focus, focusIndex, showAside,
    unit, head, items,
  } = { ...defaultProps, ...props };

  let data = items.slice();
  if(sort==='降序') data.sort((a,b)=> b.value - a.value);
  data = data.slice(0, Math.max(1, Math.min(itemCount, data.length)));
  const fIdx = Math.max(0, Math.min(focusIndex, data.length - 1));

  // 半径：面积∝value
  const W = 1500, H = 600, cx = W/2, cy = H/2;
  const maxV = Math.max(...data.map(d=>d.value));
  const n = data.length;
  const lowCount = n <= 3;
  const packMode = n === 1 ? 'single' : n === 2 ? 'pair' : n === 3 ? 'trio' : 'cluster';
  const rMax = n === 1 ? 235 : n === 2 ? 210 : n === 3 ? 192 : 178;
  const minR = n === 1 ? 150 : n === 2 ? 88 : n === 3 ? 66 : 34;
  const sized = data.map((d,i)=> ({ ...d, idx:i, r: Math.max(minR, rMax*Math.sqrt(d.value/maxV)) }));

  // 确定性螺旋贪心装箱（大→小）
  const order = sized.slice().sort((a,b)=> b.r - a.r);
  let placed = [];
  const sparsePositions = {
    single: [{ x:cx, y:cy }],
    pair: [{ x:cx-240, y:cy }, { x:cx+245, y:cy }],
    trio: [{ x:cx, y:cy-135 }, { x:cx-250, y:cy+145 }, { x:cx+250, y:cy+145 }],
  }[packMode];
  if(sparsePositions){
    placed = order.map((it, k)=> ({ ...it, ...sparsePositions[k] }));
  }else{
    order.forEach((it, k)=>{
      if(k===0){ placed.push({ ...it, x:cx, y:cy }); return; }
      let best=null;
      for(let rad=0; rad<700 && !best; rad+=9){
        for(let ang=0; ang<360; ang+=6){
          const a = ang*Math.PI/180;
          const x = cx + rad*Math.cos(a)*1.18, y = cy + rad*Math.sin(a);
          if(x-it.r<8 || x+it.r>W-8 || y-it.r<8 || y+it.r>H-8) continue;
          let ok=true;
          for(const p of placed){ if(Math.hypot(x-p.x, y-p.y) < p.r+it.r+8){ ok=false; break; } }
          if(ok){ best={x,y}; break; }
        }
      }
      placed.push({ ...it, x:(best?best.x:cx), y:(best?best.y:cy) });
    });
  }
  const byIdx = {}; placed.forEach(p=> byIdx[p.idx]=p);

  // viewBox 收紧到簇的真实包围盒，消除画布空白
  const _pad = 18;
  const bx0 = Math.min(...placed.map(p=>p.x-p.r)), bx1 = Math.max(...placed.map(p=>p.x+p.r));
  const by0 = Math.min(...placed.map(p=>p.y-p.r)), by1 = Math.max(...placed.map(p=>p.y+p.r));
  const VB = `${(bx0-_pad).toFixed(0)} ${(by0-_pad).toFixed(0)} ${(bx1-bx0+_pad*2).toFixed(0)} ${(by1-by0+_pad*2).toFixed(0)}`;

  const top = data[0];

  return (
    <SlideShell orbs={[{ w:560, h:560, right:-160, top:-150,
        color:`radial-gradient(circle at 50% 50%, ${hexA(VIO,.16)}, ${hexA(VIO,0)} 68%)` }]}>
      <SlideHead no={head.no} en={head.en} cn={head.cn} badge={head.no} />

      <div className="dk-anim d1" style={{flex:'1 1 0', minHeight:0, position:'relative', marginTop:10}}>
        <div style={{position:'absolute', inset:0, display:'grid', placeItems:'center'}}>
          <svg data-dashi-theme09-bubble-pack={packMode} width="100%" height="100%" viewBox={VB} preserveAspectRatio="xMidYMid meet" style={{maxHeight:'100%'}}>
            <defs>
              {Object.entries(TONE).map(([k,c])=>(
                <radialGradient key={k} id={'bub'+k} cx="38%" cy="32%" r="75%">
                  <stop offset="0" stopColor={hexA(c,.95)} />
                  <stop offset="0.6" stopColor={hexA(c,.62)} />
                  <stop offset="1" stopColor={hexA(c,.34)} />
                </radialGradient>
              ))}
            </defs>
            {sized.map((it)=>{
              const p = byIdx[it.idx]; const c = TONE[it.tone]||ACC;
              const hot = focus && it.idx===fIdx, dim = focus && it.idx!==fIdx;
              const fs = Math.max(lowCount?28:15, it.r*(lowCount?0.24:0.30));
              const nameFs = Math.max(lowCount?28:16, it.r*(lowCount?0.23:0.22));
              return (
                <g key={it.idx} opacity={dim?0.5:1} style={{transition:'opacity .2s'}}>
                  {lowCount && <circle cx={p.x} cy={p.y} r={it.r+12} fill="none" stroke={hexA(c,.22)} strokeWidth="4" />}
                  <circle data-dashi-theme09-bubble-node="true" cx={p.x} cy={p.y} r={it.r} fill={`url(#bub${it.tone||'acc'})`}
                    stroke={hot?c:hexA(c,.5)} strokeWidth={hot?4:2}
                    style={{filter: hot?`drop-shadow(0 0 26px ${hexA(c,.6)})`:'none'}} />
                  {/* 角标 */}
                  <circle cx={p.x - it.r*0.0} cy={p.y - it.r*0.62} r={it.r*0.0} fill="none" />
                  <text data-dashi-theme09-bubble-label="true" x={p.x} y={p.y - it.r*(lowCount?0.20:0.18)} textAnchor="middle" fontFamily="var(--font-cn)" fontWeight="900"
                    fontSize={nameFs} fill="#fff">{it.label}</text>
                  {showValue && (
                    <text x={p.x} y={p.y + it.r*(lowCount?0.22:0.30)} textAnchor="middle" fontFamily="var(--font-display)" fontWeight="900"
                      fontSize={fs} fill={hot?'#fff':hexA('#fff',.92)}>{it.value}<tspan fontSize={fs*0.5} fill={hexA('#fff',.7)}> {unit}</tspan></text>
                  )}
                  {(it.r>52 || lowCount) && (
                    <text x={p.x} y={p.y + it.r*(lowCount?0.48:0.56)} textAnchor="middle" fontFamily="var(--font-mono)"
                      fontSize={Math.max(lowCount?16:10, it.r*(lowCount?0.10:0.12))} fill={hexA('#fff',.66)} letterSpacing=".06em">{it.sub}</text>
                  )}
                </g>
              );
            })}
          </svg>
        </div>
      </div>

      {showAside && (
        <div className="dk-glass-dark dk-anim d2" style={{flexShrink:0, marginTop:12, borderRadius:18,
              padding:'14px 26px', display:'flex', alignItems:'center', gap:18}}>
          <span style={{flexShrink:0, fontFamily:'var(--font-mono)', fontSize:13, letterSpacing:'.12em', color:ACC}}>读图</span>
          <p style={{fontSize:'var(--type-tiny)', lineHeight:1.5, color:'rgba(255,255,255,.84)', textWrap:'pretty', margin:0}}>
            圆面积正比单家融资额。<b style={{color:'#fff'}}>{top.label}</b> 体量居中领先（{top.value} {unit}），
            头部与长尾的半径差直观映射资本极度集中于少数巨头。
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

export default SlideBubble;

/* ── 模板参数 schema（自描述 · 迁移即带控件；Tweaks 由此自动生成） ── */
export const slideSpec = { defaults: defaultProps, slot:'bubble', name:'气泡聚类 · Bubble', controls:[
  { prop:'itemCount', type:'slider', label:'数量', default:8, min:1, max:8, step:1, desc:'气泡数' },
  { prop:'sort', type:'radio', label:'排序', default:'降序', options:['降序','原序'] },
  { prop:'showValue', type:'toggle', label:'泡内数值', default:true },
  { prop:'showAside', type:'toggle', label:'装饰文案', default:true, desc:'读图条' },
  { prop:'focus', type:'focus', label:'重点信息 Focus', default:false },
  { prop:'focusIndex', type:'slider', label:'焦点序号', default:0, min:0, max:(p)=>p.itemCount-1, maxFromKey:'itemCount', maxFromKeyOffset:-1, displayOffset:1, step:1, showIf:(p)=>p.focus },
]};
