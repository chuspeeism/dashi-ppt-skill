import { useDeckStyles, deckTheme, deckLabel, SlideShell, SlideHead } from './DeckKit.jsx';
/* ============================================================================
   SlideStream — 河流图（居中流式堆叠 · streamgraph）
   独立组件：仅靠 props 控制内容与样式；render 时自注入 DeckKit 基座样式。
   与 Stacked（坐标轴堆叠条·离散列）、Trend（多序列折线）、Ribbon（单根全幅比例带）、
   Marimekko（变宽×变高矩形）刻意区分：本页是「河流图」—— 各序列以平滑色带沿时间
   连续流动，围绕居中浮动基线（wiggle）上下分布，读「总量起伏 + 结构此消彼长」。

   ── 可调参数（Props） ──────────────────────────────────────────────────────
   | prop        | 类型                          | 默认值 | 说明                          |
   | series      | Series[]                      | 见下   | 数据源（vals 对齐 periods）   |
   | periods     | string[]                      | 见下   | 时间刻度                      |
   | seriesCount | number (2–5)                  | 5      | 展示序列数（截取）            |
   | offset      | '居中'|'基线'                 | 居中   | wiggle 居中 / 零基线堆叠      |
   | showLegend  | boolean                       | true   | 图例                          |
   | focus       | boolean                       | true   | 突出某序列（其余淡化）        |
   | focusIndex  | number (0-based)              | 0      | 突出第几条                    |
   | labelType   | 'number'|'symbol'|'keyword'   | number | 图例徽标样式                  |
   | showAside   | boolean                       | true   | 读图（装饰）                  |
   Series = { label, sub, vals:number[] }
   ========================================================================== */
/* ── 页面属性契约 · defaultProps ──────────────────────────────────────────
   本页全部可见文案 / 数据 / 图片槽默认值集中于此，直接编辑即可换内容；
   组件内部以 { ...defaultProps, ...props } 合并，外部传同名 props 逐项覆盖。 */
export const defaultProps = {
  periods: ['Q1·23','Q2','Q3','Q4','Q1·24','Q2','Q3','Q4'],
  seriesCount: 5,
  offset: '居中',
  showLegend: true,
  focus: true,
  focusIndex: 0,
  labelType: 'number',
  showAside: true,
  head: { no:'02', en:'Streamgraph · Flow', cn:'季度资金 · 结构之流' },
  series: [
      { label:'大模型',   sub:'Foundation', vals:[42, 58, 96, 150, 188, 232, 290, 360] },
      { label:'算力基建', sub:'Compute',    vals:[30, 44, 66, 92, 120, 150, 176, 210] },
      { label:'应用层',   sub:'Apps',       vals:[26, 36, 50, 70, 92, 110, 132, 160] },
      { label:'企业服务', sub:'Enterprise', vals:[20, 28, 40, 54, 68, 82, 96, 118] },
      { label:'其他',     sub:'Others',     vals:[18, 24, 32, 44, 56, 66, 78, 92] },
    ],
};

function SlideStream(props){
  useDeckStyles(props.theme);
  const T = (deckTheme ? deckTheme(props.theme) : {});
  const ACC = T.accent || '#46e3c6';
  const BLUE = T.blue || '#4a86ff';
  const VIO = T.violet || '#9f7bff';
  const WARN = T.warn || '#ffb27a';
  const PAL = [ACC, BLUE, VIO, WARN, '#6fd3ff'];

  const {
    periods, seriesCount, offset, showLegend, focus, focusIndex, labelType,
    showAside, head, series,
  } = { ...defaultProps, ...props };

  const data = series.slice(0, Math.max(2, Math.min(seriesCount, series.length)));
  const n = periods.length;
  const fIdx = Math.max(0, Math.min(focusIndex, data.length - 1));
  const lbl = (i)=> deckLabel(labelType, i, { keyword:'S' });

  // 画布
  const W = 1640, H = 560, padX = 40;
  const innerW = W - padX*2;
  const xAt = (i)=> padX + (innerW)*(i/(n-1));
  const totals = periods.map((_,xi)=> data.reduce((s,d)=> s + (d.vals[xi]||0), 0));
  const maxTotal = Math.max(...totals);
  const scale = (H*0.82) / maxTotal;
  const wiggle = offset === '居中';

  // 每列各序列的 [y0,y1]
  const cols = periods.map((_,xi)=>{
    const stackTotal = totals[xi]*scale;
    let base = wiggle ? (H/2 - stackTotal/2) : (H - H*0.09);
    const bands = [];
    for(let s=0;s<data.length;s++){
      const h = (data[s].vals[xi]||0)*scale;
      if(wiggle){ bands.push([base, base+h]); base += h; }
      else { bands.push([base-h, base]); base -= h; }
    }
    return bands;
  });

  // 平滑路径（cardinal spline）
  const spline = (pts)=>{
    if(pts.length<2) return '';
    let d = `M ${pts[0][0].toFixed(1)},${pts[0][1].toFixed(1)}`;
    for(let i=0;i<pts.length-1;i++){
      const p0=pts[i-1]||pts[i], p1=pts[i], p2=pts[i+1], p3=pts[i+2]||p2;
      const c1x=p1[0]+(p2[0]-p0[0])/6, c1y=p1[1]+(p2[1]-p0[1])/6;
      const c2x=p2[0]-(p3[0]-p1[0])/6, c2y=p2[1]-(p3[1]-p1[1])/6;
      d += ` C ${c1x.toFixed(1)},${c1y.toFixed(1)} ${c2x.toFixed(1)},${c2y.toFixed(1)} ${p2[0].toFixed(1)},${p2[1].toFixed(1)}`;
    }
    return d;
  };
  const layerPath = (si)=>{
    const top = periods.map((_,xi)=> [xAt(xi), cols[xi][si][0]]);
    const bot = periods.map((_,xi)=> [xAt(xi), cols[xi][si][1]]).reverse();
    return spline(top) + ' L ' + bot.map(p=>`${p[0].toFixed(1)},${p[1].toFixed(1)}`)[0] + ' ' + spline(bot).slice(1) + ' Z';
  };

  return (
    <SlideShell orbs={[{ w:560, h:560, left:-160, bottom:-160,
        color:`radial-gradient(circle at 50% 50%, ${hexA(ACC,.14)}, ${hexA(ACC,0)} 68%)` }]}>
      <SlideHead no={head.no} en={head.en} cn={head.cn} badge={head.no} />

      <div className="dk-anim d1" style={{flex:'1 1 0', minHeight:0, display:'flex', flexDirection:'column', marginTop:14}}>
        {showLegend && (
          <div style={{display:'flex', flexWrap:'wrap', gap:'8px 26px', marginBottom:8}}>
            {data.map((d,i)=>{
              const hot = focus && i===fIdx;
              return (
                <span key={i} style={{display:'inline-flex', alignItems:'center', gap:9, opacity: focus&&!hot?.55:1}}>
                  <i style={{width:18, height:12, borderRadius:3, background:PAL[i%PAL.length]}}></i>
                  <b style={{fontFamily:'var(--font-display)', fontWeight:900, fontSize:14, color:hot?PAL[i%PAL.length]:'var(--ink-faint)'}}>{lbl(i)}</b>
                  <span style={{fontFamily:'var(--font-cn)', fontSize:'var(--type-tiny)', color:hot?'#fff':'var(--ink-dim)', fontWeight:hot?700:400}}>{d.label}</span>
                </span>
              );
            })}
          </div>
        )}

        <div style={{flex:'1 1 0', minHeight:0, position:'relative'}}>
          <svg width="100%" height="100%" viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="xMidYMid meet" style={{display:'block'}}>
            <defs>
              {data.map((d,i)=>(
                <linearGradient key={i} id={'strm'+i} x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0" stopColor={hexA(PAL[i%PAL.length], .55)} />
                  <stop offset="1" stopColor={PAL[i%PAL.length]} />
                </linearGradient>
              ))}
            </defs>
            {/* 竖向时间网格 */}
            {periods.map((_,xi)=>(
              <line key={xi} x1={xAt(xi)} y1={28} x2={xAt(xi)} y2={H-30} stroke="rgba(255,255,255,.06)" strokeWidth="1" />
            ))}
            {/* '现在'分界（23→24） */}
            <line x1={xAt(4)} y1={20} x2={xAt(4)} y2={H-24} stroke={hexA('#fff',.28)} strokeWidth="1.5" strokeDasharray="4 6" />
            {/* 流带 */}
            {data.map((d,i)=>{
              const hot = focus && i===fIdx, dim = focus && i!==fIdx;
              return <path key={i} d={layerPath(i)} fill={`url(#strm${i})`} opacity={dim?0.32:1}
                stroke={hexA('#02040c',.5)} strokeWidth="1"
                style={{filter: hot?`drop-shadow(0 0 22px ${hexA(PAL[i%PAL.length],.55)})`:'none', transition:'opacity .2s'}} />;
            })}
          </svg>
          {/* x 轴刻度 */}
          <div style={{position:'absolute', left:`${padX/W*100}%`, right:`${padX/W*100}%`, bottom:-6, display:'flex', justifyContent:'space-between'}}>
            {periods.map((p,xi)=>(
              <span key={xi} style={{fontFamily:'var(--font-mono)', fontSize:12, color: xi===4?ACC:'var(--ink-faint)', fontWeight:xi===4?700:400}}>{p}</span>
            ))}
          </div>
        </div>

        {showAside && (()=> {
          const f = data[fIdx];
          const g = ((f.vals[n-1]/f.vals[0]) ).toFixed(1);
          return (
            <div className="dk-glass-dark dk-anim d2" style={{marginTop:24, flexShrink:0, borderRadius:20, padding:'16px 30px', display:'flex', alignItems:'center', gap:22}}>
              <span style={{flexShrink:0, fontFamily:'var(--font-mono)', fontSize:14, letterSpacing:'.12em', color:ACC}}>读图</span>
              <p style={{fontSize:'var(--type-small)', lineHeight:1.5, color:'rgba(255,255,255,.86)', textWrap:'pretty', margin:0}}>
                河道总宽 = 当季全赛道资金；八个季度自 {totals[0]} 增至 <b style={{color:ACC}}>{totals[n-1]}</b> 亿$。
                <b style={{color:'#fff'}}> {f.label}</b> 带宽扩张约 <b style={{color:ACC}}>{g}×</b>，是结构右移的主引擎。
              </p>
            </div>
          );
        })()}
      </div>
    </SlideShell>
  );

  function hexA(hex, a){
    if(!hex || hex[0] !== '#') return hex;
    const x = hex.slice(1); const f = x.length===3 ? x.split('').map(c=>c+c).join('') : x;
    return `rgba(${parseInt(f.slice(0,2),16)},${parseInt(f.slice(2,4),16)},${parseInt(f.slice(4,6),16)},${a})`;
  }
}

export default SlideStream;

/* ── 模板参数 schema（自描述 · 迁移即带控件；Tweaks 由此自动生成） ── */
export const slideSpec = { defaults: defaultProps, slot:'stream', name:'河流图 · Streamgraph', controls:[
  { prop:'seriesCount', type:'slider', label:'数量', default:5, min:2, max:5, step:1, desc:'序列数' },
  { prop:'offset', type:'radio', label:'图表类型', default:'居中', options:['居中','基线'] },
  { prop:'showLegend', type:'toggle', label:'图例', default:true },
  { prop:'showAside', type:'toggle', label:'装饰文案', default:true, desc:'读图条' },
  { prop:'labelType', type:'labelType', label:'标签类型', default:'数字' },
  { prop:'focus', type:'focus', label:'重点信息 Focus', default:true },
  { prop:'focusIndex', type:'slider', label:'焦点序号', default:0, min:0, max:(p)=>p.seriesCount-1, maxFromKey:'seriesCount', maxFromKeyOffset:-1, displayOffset:1, step:1, showIf:(p)=>p.focus },
]};
