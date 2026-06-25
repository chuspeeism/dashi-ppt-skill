import { useDeckStyles, deckTheme, deckLabel, SlideShell, SlideHead } from './DeckKit.jsx';
/* ============================================================================
   SlideParallel — 平行坐标（multivariate · 多维画像折线）
   独立组件：仅靠 props 控制内容与样式；render 时自注入 DeckKit 基座样式。
   与 Radar（径向闭合多边形）、Trend（横轴时间的数值折线）、Score（评分卡）刻意区分：
   本页是「平行坐标图」—— 若干竖直平行轴各代表一个维度（各自量纲、各自刻度），每个对象
   是一条横穿所有轴的折线，线在轴间的高低起伏即其多维画像，焦点对象高亮、其余淡化做背景。

   ── 可调参数（Props） ──────────────────────────────────────────────────────
   | prop        | 类型                          | 默认值 | 说明                          |
   | objects     | Obj[]                         | 见下   | 对象数据源（vals 对齐 axes）  |
   | axes        | Axis[]                        | 见下   | 维度轴定义（label,max,unit）  |
   | itemCount   | number (3–7)                  | 6      | 展示对象数（截取）            |
   | axisCount   | number (3–6)                  | 5      | 展示维度数（截取）            |
   | showDots    | boolean                       | true   | 轴上节点圆点                  |
   | focus       | boolean                       | true   | 高亮某对象                    |
   | focusIndex  | number (0-based)              | 0      | 高亮第几个                    |
   | labelType   | 'number'|'symbol'|'keyword'   | number | 图例徽标样式                  |
   | showAside   | boolean                       | true   | 「画像解读」装饰条            |
   | head        | …                             | 见下   | 页眉文案                      |
   Obj = { label, vals:number[] }  Axis = { label, max, unit? }
   ========================================================================== */
/* ── 页面属性契约 · defaultProps ──────────────────────────────────────────
   本页全部可见文案 / 数据 / 图片槽默认值集中于此，直接编辑即可换内容；
   组件内部以 { ...defaultProps, ...props } 合并，外部传同名 props 逐项覆盖。 */
export const defaultProps = {
  itemCount: 6,
  axisCount: 5,
  showDots: true,
  focus: true,
  focusIndex: 0,
  labelType: 'number',
  showAside: true,
  head: { no:'10', en:'Parallel · Multivariate', cn:'区域画像 · 平行坐标' },
  axes: [
      { label:'融资额',   max:500, unit:'亿$' },
      { label:'交易数',   max:120, unit:'笔' },
      { label:'平均单笔', max:15,  unit:'亿$' },
      { label:'估值倍数', max:40,  unit:'×' },
      { label:'人才密度', max:100, unit:'指数' },
    ],
  objects: [
      { label:'旧金山湾区', vals:[480, 110, 12, 36, 95] },
      { label:'纽约',       vals:[180, 64, 6, 24, 72] },
      { label:'波士顿',     vals:[120, 38, 5, 20, 80] },
      { label:'西雅图',     vals:[90, 30, 4.5, 18, 68] },
      { label:'洛杉矶',     vals:[70, 28, 3.8, 15, 55] },
      { label:'奥斯汀',     vals:[55, 22, 3.2, 14, 50] },
      { label:'迈阿密',     vals:[42, 18, 2.8, 12, 44] },
    ],
};

function SlideParallel(props){
  useDeckStyles(props.theme);
  const T = (deckTheme ? deckTheme(props.theme) : {});
  const ACC = T.accent || '#46e3c6';
  const BLUE = T.blue || '#4a86ff';
  const VIO = T.violet || '#9f7bff';
  const WARN = T.warn || '#ffb27a';
  const PAL = [ACC, BLUE, VIO, WARN, '#6fd3ff', '#ff9bb6', '#9affc8'];

  const {
    itemCount, axisCount, showDots, focus, focusIndex, labelType, showAside,
    head, axes, objects,
  } = { ...defaultProps, ...props };

  const ac = Math.max(3, Math.min(axisCount, axes.length));
  const ax = axes.slice(0, ac);
  const data = objects.slice(0, Math.max(3, Math.min(itemCount, objects.length)))
    .map((o,i)=>({ ...o, vals:o.vals.slice(0,ac), col:PAL[i%PAL.length], idx:i }));
  const n = data.length;
  const fIdx = Math.max(0, Math.min(focusIndex, n-1));
  const lbl = (i)=> deckLabel(labelType, i, { keyword:'R' });

  const W = 1640, H = 580, padL = 90, padR = 90, padT = 96, padB = 70;
  const plotW = W - padL - padR, plotH = H - padT - padB;
  const AX = (k)=> padL + (ac<=1?plotW/2:(k/(ac-1))*plotW);
  const AY = (k,v)=> padT + plotH - Math.max(0,Math.min(1,v/ax[k].max))*plotH;
  const smooth = (pts)=>{
    let d=`M${pts[0][0]},${pts[0][1]}`;
    for(let i=0;i<pts.length-1;i++){ const [x0,y0]=pts[i],[x1,y1]=pts[i+1]; const mx=(x0+x1)/2; d+=` C${mx},${y0} ${mx},${y1} ${x1},${y1}`; }
    return d;
  };
  const fd = data[fIdx];

  return (
    <SlideShell orbs={[{ w:520, h:520, right:-160, top:-150,
        color:`radial-gradient(circle at 50% 50%, ${hexA(VIO,.18)}, ${hexA(VIO,0)} 70%)` }]}>
      <SlideHead no={head.no} en={head.en} cn={head.cn} badge={head.no} />

      <div style={{flex:'1 1 0', minHeight:0, display:'flex', flexDirection:'column', marginTop:24}}>
        <div className="dk-glass dk-anim d1" style={{flex:'1 1 0', minHeight:0, borderRadius:'var(--dk-radius)', padding:'14px 30px', display:'flex', flexDirection:'column'}}>
          <div style={{position:'relative', flex:'1 1 0', minHeight:0}}>
            <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" style={{position:'absolute', inset:0, width:'100%', height:'100%', display:'block'}}>
              {/* 维度轴 + 刻度 */}
              {ax.map((a,k)=>(<g key={k}>
                <line x1={AX(k)} y1={padT-8} x2={AX(k)} y2={padT+plotH+8} stroke="rgba(255,255,255,.2)" strokeWidth="2.5" />
                {[0,0.5,1].map((f,fi)=>(<g key={fi}>
                  <line x1={AX(k)-7} y1={padT+plotH-f*plotH} x2={AX(k)+7} y2={padT+plotH-f*plotH} stroke="rgba(255,255,255,.28)" strokeWidth="2" />
                  <text x={AX(k)-14} y={padT+plotH-f*plotH+5} textAnchor="end" fontFamily="var(--font-mono)" fontSize="14" fill="var(--ink-faint)">{Math.round(a.max*f)}</text>
                </g>))}
                <text x={AX(k)} y={padT-44} textAnchor="middle" fontFamily="var(--font-cn)" fontWeight="800" fontSize="26" fill="#fff">{a.label}</text>
                <text x={AX(k)} y={padT-20} textAnchor="middle" fontFamily="var(--font-mono)" fontSize="15" fill="var(--ink-dim)">{a.unit}</text>
              </g>))}
              {/* 折线 */}
              {data.map((o)=>{
                const hot = focus && o.idx===fIdx;
                const pts = o.vals.map((v,k)=>[AX(k),AY(k,v)]);
                return <path key={o.idx} d={smooth(pts)} fill="none" stroke={hot?o.col:hexA(o.col,.42)}
                  strokeWidth={hot?7:3.5} strokeLinecap="round" opacity={focus&&!hot?.5:1}
                  style={{filter: hot?`drop-shadow(0 0 12px ${hexA(o.col,.6)})`:'none', transition:'opacity .2s'}} />;
              })}
              {/* 焦点对象右端名 */}
              {focus && (<text x={AX(ac-1)+16} y={AY(ac-1, fd.vals[ac-1])+7} textAnchor="start" fontFamily="var(--font-cn)" fontWeight="900" fontSize="26" fill={fd.col}>{fd.label}</text>)}
            </svg>
            {showDots && data.map((o)=>{
              const hot = focus && o.idx===fIdx; if(focus && !hot) return null;
              return o.vals.map((v,k)=>(<span key={o.idx+'-'+k} data-dashi-theme09-parallel-node="true" style={{
                position:'absolute', left:`${(AX(k)/W)*100}%`, top:`${(AY(k,v)/H)*100}%`, transform:'translate(-50%, -50%)',
                width:hot?16:10, height:hot?16:10, borderRadius:'50%', background:o.col, border:'2px solid #0a1230',
                boxSizing:'border-box', pointerEvents:'none', zIndex:2, boxShadow:hot?`0 0 10px ${hexA(o.col,.55)}`:'none',
              }} />));
            })}
          </div>
        </div>

        {/* 图例 + 解读 */}
        <div style={{display:'flex', gap:18, marginTop:16, alignItems:'stretch'}}>
          <div className="dk-anim d2" style={{flex:'1 1 0', display:'flex', flexWrap:'wrap', gap:'10px 22px', alignContent:'center'}}>
            {data.map((o)=>{
              const hot = focus && o.idx===fIdx;
              return (<span key={o.idx} style={{display:'inline-flex', alignItems:'center', gap:10, opacity:focus&&!hot?.55:1}}>
                <span style={{width:30, height:30, borderRadius:9, display:'grid', placeItems:'center', flexShrink:0,
                  fontFamily:'var(--font-display)', fontWeight:900, fontSize:14, color:hot?'#08122e':o.col,
                  background:hot?o.col:hexA(o.col,.16), border:`1.5px solid ${hexA(o.col,.5)}`}}>{lbl(o.idx)}</span>
                <span style={{fontFamily:'var(--font-cn)', fontWeight:hot?900:600, fontSize:'var(--type-small)', color:hot?'#fff':'rgba(255,255,255,.8)'}}>{o.label}</span>
              </span>);
            })}
          </div>
          {showAside && (
            <div className="dk-glass-dark dk-anim d3" style={{flex:'0 0 600px', borderRadius:22, padding:'18px 28px', display:'flex', gap:20, alignItems:'center'}}>
              <span style={{flexShrink:0, fontFamily:'var(--font-mono)', fontSize:13, letterSpacing:'.12em', color:ACC, writingMode:'vertical-rl', textOrientation:'upright'}}>画像</span>
              <p style={{fontSize:'var(--type-tiny)', lineHeight:1.55, color:'rgba(255,255,255,.85)', textWrap:'pretty'}}>
                <b style={{color:fd.col}}>{fd.label}</b> 在 <b style={{color:'#fff'}}>{ax[0].label}</b> 与 <b style={{color:'#fff'}}>{ax[ac-1].label}</b> 两端均处高位，
                多维折线整体抬升，呈现「资本与人才双密集」的领跑画像；其余区域折线在中下区平移，梯度分明。
              </p>
            </div>
          )}
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

export default SlideParallel;

/* ── 模板参数 schema（自描述 · 迁移即带控件；Tweaks 由此自动生成） ── */
export const slideSpec = { defaults: defaultProps, slot:'parallel', name:'平行坐标 · Parallel', controls:[
  { prop:'itemCount', type:'slider', label:'数量', default:6, min:3, max:7, step:1, desc:'对象数' },
  { prop:'axisCount', type:'slider', label:'列数量', default:5, min:3, max:5, step:1, desc:'维度数' },
  { prop:'showDots', type:'toggle', label:'轴上节点', default:true },
  { prop:'showAside', type:'toggle', label:'装饰文案', default:true, desc:'画像解读' },
  { prop:'labelType', type:'labelType', label:'标签类型', default:'数字' },
  { prop:'focus', type:'focus', label:'重点信息 Focus', default:true },
  { prop:'focusIndex', type:'slider', label:'焦点序号', default:0, min:0, max:(p)=>p.itemCount-1, maxFromKey:'itemCount', maxFromKeyOffset:-1, displayOffset:1, step:1, showIf:(p)=>p.focus },
]};
