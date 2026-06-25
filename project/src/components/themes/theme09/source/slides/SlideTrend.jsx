import { useDeckStyles, deckTheme, deckLabel, SlideShell, SlideHead } from './DeckKit.jsx';
/* ============================================================================
   SlideTrend — 多序列趋势线（多条赛道同图对比）
   独立组件：仅靠 props 控制内容与样式；render 时自注入 DeckKit 基座样式。

   ── 可调参数（Props） ──────────────────────────────────────────────────────
   | prop        | 类型                          | 默认值 | 说明                            |
   | series      | Series[]                      | 见下   | 数据源（每条 = 一个序列）       |
   | seriesCount | number (2–4)                  | 4      | 展示序列数（截取）              |
   | chartType   | '折线' | '面积'               | '折线' | 图表类型                        |
   | showLegend  | boolean                       | true   | 是否显示图例                    |
   | focus       | boolean                       | true   | 是否突出某一序列（其余淡化）    |
   | focusIndex  | number (0-based)              | 0      | 突出第几条序列                  |
   | labelType   | 'number'|'symbol'|'keyword'   | number | 序列角标样式                    |
   | showAside   | boolean                       | true   | 是否显示「走势解读」装饰条      |
   | badge       | string                        | '10'   | 页眉编号徽标                    |
   Series = { cn:string, vals:number[] }   （各序列 vals 长度一致，对齐 xLabels）
   ========================================================================== */
/* ── 页面属性契约 · defaultProps ──────────────────────────────────────────
   本页全部可见文案 / 数据 / 图片槽默认值集中于此，直接编辑即可换内容；
   组件内部以 { ...defaultProps, ...props } 合并，外部传同名 props 逐项覆盖。 */
export const defaultProps = {
  seriesCount: 4,
  chartType: '折线',
  showLegend: true,
  focus: true,
  focusIndex: 0,
  labelType: 'number',
  showAside: true,
  badge: '10',
  unit: '亿$',
  xLabels: ['23Q1','23Q2','23Q3','23Q4','24Q1','24Q2','24Q3','24Q4'],
  series: [
      { cn:'大模型',     vals:[42,55,68,75,96,118,132,128] },
      { cn:'AI 基础设施', vals:[30,36,44,48,58,66,74,78] },
      { cn:'应用层',     vals:[14,20,26,30,40,52,60,58] },
      { cn:'企业服务',   vals:[22,26,30,33,38,42,46,44] },
    ],
};

function SlideTrend(props){
  useDeckStyles(props.theme);
  const T = (deckTheme ? deckTheme(props.theme) : {});
  const ACC = T.accent || '#46e3c6';
  const BLUE = T.blue || '#4a86ff';
  const VIO = T.violet || '#9f7bff';
  const WARN = T.warn || '#ffb27a';
  const PALETTE = [BLUE, ACC, VIO, WARN];

  const {
    seriesCount, chartType, showLegend, focus, focusIndex, labelType, showAside,
    badge, unit, xLabels, series,
  } = { ...defaultProps, ...props };

  const shown = series.slice(0, Math.max(2, Math.min(seriesCount, series.length)));
  const fIdx = Math.max(0, Math.min(focusIndex, shown.length - 1));
  const lbl = (i)=> deckLabel(labelType, i, { keyword:'SER' });
  const maxV = niceMax(Math.max(...shown.flatMap(s=>s.vals)));
  const n = xLabels.length;

  const W = 1660, H = 460, padL = 70, padR = 188, padT = 30, padB = 56;
  const plotW = W - padL - padR, plotH = H - padT - padB;
  const xAt = (i)=> padL + (n===1?plotW/2:(i/(n-1))*plotW);
  const yAt = (v)=> padT + plotH - (v/maxV)*plotH;
  const linePath = (vals)=> vals.map((v,i)=>`${i?'L':'M'} ${xAt(i)} ${yAt(v)}`).join(' ');
  const areaPath = (vals)=> `${linePath(vals)} L ${xAt(n-1)} ${padT+plotH} L ${xAt(0)} ${padT+plotH} Z`;

  return (
    <SlideShell orbs={[{ w:520, h:520, right:-160, top:-150,
        color:`radial-gradient(circle at 50% 50%, ${hexA(VIO,.18)}, ${hexA(VIO,0)} 70%)` }]}>
      <SlideHead no={badge} en="Trend Lines" cn="季度走势 · 赛道对比"
        badge={labelType==='keyword'?'TREND':labelType==='symbol'?'◆':badge} />

      <div style={{flex:'1 1 0', minHeight:0, display:'flex', flexDirection:'column', marginTop:26}}>
        <div className="dk-glass dk-anim d1" style={{flex:'1 1 0', minHeight:0, borderRadius:'var(--dk-radius)',
              padding:'22px 40px 14px', position:'relative', display:'flex', flexDirection:'column'}}>
          <div style={{display:'flex', justifyContent:'space-between', alignItems:'baseline', padding:'0 24px', marginBottom:2}}>
            <span style={{fontSize:'var(--type-sub)', fontWeight:700}}>逐季度融资额走势</span>
            <span style={{fontFamily:'var(--font-mono)', fontSize:'var(--type-tiny)', color:'var(--ink-faint)'}}>单位 · {unit}</span>
          </div>

          <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" style={{width:'100%', flex:'1 1 0', minHeight:0, display:'block'}}>
            {/* 网格 + 左轴 */}
            {[0,0.25,0.5,0.75,1].map((g,i)=>{
              const y = padT + plotH - g*plotH;
              return (<g key={i}>
                <line x1={padL} y1={y} x2={W-padR} y2={y} stroke="rgba(255,255,255,.1)" strokeWidth="1" />
                <text x={padL-16} y={y+6} textAnchor="end" fontFamily="var(--font-mono)" fontSize="20" fill="rgba(255,255,255,.4)">{Math.round(g*maxV)}</text>
              </g>);
            })}

            {/* 序列（先画非焦点，焦点最后压顶） */}
            {shown.map((s,i)=>({s,i})).sort((a,b)=> (a.i===fIdx?1:0)-(b.i===fIdx?1:0)).map(({s,i})=>{
              const col = PALETTE[i % PALETTE.length];
              const dim = focus && i!==fIdx;
              return (<g key={i} opacity={dim?.38:1}>
                {chartType==='面积' && !dim && <path d={areaPath(s.vals)} fill={hexA(col,.14)} />}
                <path d={linePath(s.vals)} fill="none" stroke={col} strokeWidth={focus&&i===fIdx?5:3} strokeLinecap="round" strokeLinejoin="round"
                  style={{filter: focus&&i===fIdx?`drop-shadow(0 0 12px ${hexA(col,.6)})`:'none'}} />
                {(focus&&i===fIdx) && s.vals.map((v,j)=><circle key={j} cx={xAt(j)} cy={yAt(v)} r="6" fill={col} stroke="#0a1230" strokeWidth="2" />)}
                {/* 末端标签 */}
                <text x={xAt(n-1)+14} y={yAt(s.vals[n-1])+6} textAnchor="start" fontFamily="var(--font-cn)" fontWeight={focus&&i===fIdx?800:600}
                  fontSize="20" fill={dim?'var(--ink-faint)':col}>{s.cn}</text>
              </g>);
            })}

            {/* X 轴标签 */}
            {xLabels.map((m,i)=>(
              <text key={i} x={xAt(i)} y={padT+plotH+34} textAnchor="middle" fontFamily="var(--font-mono)" fontWeight="600" fontSize="20"
                fill="rgba(255,255,255,.6)">{m}</text>
            ))}
          </svg>

          {showLegend && (
            <div style={{display:'flex', gap:28, padding:'2px 24px 2px', fontSize:'var(--type-tiny)', color:'var(--ink-dim)', flexWrap:'wrap'}}>
              {shown.map((s,i)=>{
                const col = PALETTE[i % PALETTE.length]; const on = !focus || i===fIdx;
                return (<span key={i} style={{display:'inline-flex', alignItems:'center', gap:10, opacity:on?1:.5}}>
                  <i style={{width:24, height:5, borderRadius:3, background:col}}></i>{lbl(i)!==String(i+1).padStart(2,'0')?lbl(i)+' · ':''}{s.cn}
                </span>);
              })}
            </div>
          )}
        </div>

        {/* 底部：解读 + 头条 */}
        <div style={{display:'flex', gap:22, marginTop:18, alignItems:'stretch'}}>
          {showAside && (()=>{ const s=shown[fIdx]; const g=s.vals[n-1]-s.vals[0]; return (
            <div className="dk-glass-dark dk-anim d2" style={{flex:'1 1 0', borderRadius:22, padding:'22px 30px', display:'flex', gap:22, alignItems:'center'}}>
              <span style={{flexShrink:0, fontFamily:'var(--font-mono)', fontSize:14, letterSpacing:'.12em', color:ACC, writingMode:'vertical-rl', textOrientation:'upright'}}>走势</span>
              <p style={{fontSize:'var(--type-small)', lineHeight:1.55, color:'rgba(255,255,255,.86)', textWrap:'pretty'}}>
                <b style={{color:'#fff'}}>{s.cn}</b> 自期初 {s.vals[0]} 升至期末 <b style={{color:ACC}}>{s.vals[n-1]} {unit}</b>
                （{g>=0?'+':''}{g}），领跑各赛道；多数序列于 24H1 后加速上行，景气共振明显。
              </p>
            </div>
          );})()}
          {[{v:String(shown[fIdx].vals[n-1]),u:unit,l:shown[fIdx].cn+' 期末'},{v:'+'+(shown[fIdx].vals[n-1]-shown[fIdx].vals[0]),u:unit,l:'区间增量'}].map((s,i)=>(
            <div key={i} className="dk-glass dk-anim d3" style={{flex: showAside?'0 0 250px':'1 1 0', borderRadius:22, padding:'18px 26px', display:'flex', flexDirection:'column', justifyContent:'center'}}>
              <div style={{display:'flex', alignItems:'baseline', gap:8, whiteSpace:'nowrap'}}>
                <span style={{fontFamily:'var(--font-display)', fontWeight:900, fontSize:48, lineHeight:.9}}>{s.v}</span>
                <span style={{fontSize:'var(--type-tiny)', color:'var(--ink-dim)', fontWeight:600}}>{s.u}</span>
              </div>
              <span style={{fontSize:'var(--type-tiny)', color:'var(--ink-faint)', marginTop:6}}>{s.l}</span>
            </div>
          ))}
        </div>
      </div>
    </SlideShell>
  );

  function niceMax(v){ if(v<=0) return 1; const p=Math.pow(10,Math.floor(Math.log10(v))); const n=v/p; const s=n<=1?1:n<=2?2:n<=5?5:10; return s*p; }
  function hexA(hex, a){
    if(!hex || hex[0] !== '#') return hex;
    const n = hex.slice(1);
    const f = n.length===3 ? n.split('').map(c=>c+c).join('') : n;
    const r = parseInt(f.slice(0,2),16), g = parseInt(f.slice(2,4),16), b = parseInt(f.slice(4,6),16);
    return `rgba(${r},${g},${b},${a})`;
  }
}

export default SlideTrend;

/* ── 模板参数 schema（自描述 · 迁移即带控件；Tweaks 由此自动生成） ── */
export const slideSpec = { defaults: defaultProps, slot:'trend', name:'季度走势 · Trend', controls:[
  { prop:'seriesCount', type:'slider', label:'数量', default:4, min:2, max:4, step:1 },
  { prop:'chartType', type:'radio', label:'图表类型', default:'折线', options:['折线','面积'] },
  { prop:'showLegend', type:'toggle', label:'图例', default:true },
  { prop:'showAside', type:'toggle', label:'装饰文案', default:true },
  { prop:'labelType', type:'labelType', label:'标签类型', default:'数字' },
  { prop:'focus', type:'focus', label:'重点信息 Focus', default:true },
  { prop:'focusIndex', type:'slider', label:'焦点序号', default:0, min:0, max:(p)=>p.seriesCount-1, maxFromKey:'seriesCount', maxFromKeyOffset:-1, displayOffset:1, step:1, showIf:(p)=>p.focus },
]};
