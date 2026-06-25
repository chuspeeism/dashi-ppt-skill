import { useDeckStyles, deckTheme, deckLabel, SlideShell, SlideHead } from './DeckKit.jsx';
/* ============================================================================
   SlideRadialBar — 径向条形图（极坐标 · 同心轨道 / 极柱 两种形态）
   独立组件：仅靠 props 控制内容与样式；render 时自注入 DeckKit 基座样式。
   与 Gauge（独立仪表）、Cross（环形/饼）、Vertical（渗透环格）刻意区分：本页把多项
   指标摊在「极坐标」上 —— 同心轨道各画一段比例弧，或自圆心放射出极柱。

   ── 可调参数（Props） ──────────────────────────────────────────────────────
   | prop        | 类型                          | 默认值 | 说明                            |
   | items       | Item[]                        | 见下   | 数据源（每条 = 一条轨道 / 一根极柱）|
   | itemCount   | number (2–6)                  | 5      | 展示条目数（截取）              |
   | chartType   | '径向条' | '极柱'              | 径向条 | 图表类型                        |
   | showScale   | boolean                       | true   | 刻度网格（装饰）                |
   | focus       | boolean                       | true   | 高亮某一条（其余淡化）          |
   | focusIndex  | number (0-based)              | 0      | 高亮第几条                      |
   | labelType   | 'number'|'symbol'|'keyword'   | number | 图例角标样式                    |
   | showAside   | boolean                       | true   | 底部口径说明（装饰）            |
   | head/note   | …                             | 见下   | 页眉 / 口径文案                 |
   | theme       | Partial<DeckTheme>            | —      | 设计令牌覆盖                    |
   Item = { cn, en, value, unit?, tone:'acc'|'blue'|'violet'|'warn' }
   ========================================================================== */
/* ── 页面属性契约 · defaultProps ──────────────────────────────────────────
   本页全部可见文案 / 数据 / 图片槽默认值集中于此，直接编辑即可换内容；
   组件内部以 { ...defaultProps, ...props } 合并，外部传同名 props 逐项覆盖。 */
export const defaultProps = {
  itemCount: 5,
  chartType: '径向条',
  showScale: true,
  focus: false,
  focusIndex: 0,
  labelType: 'number',
  showAside: true,
  head: { no:'10', en:'Radial Bars', cn:'径向透视 · 赛道热度' },
  note: '数值经标准化后映射到极坐标半径；刻度环为 0 / 50 / 100 参考线。各赛道热度由融资笔数、金额与增速综合测算，仅供研究参考。',
  items: [
      { cn:'大模型',     en:'Foundation', value:92, unit:'热度', tone:'acc' },
      { cn:'算力基建',   en:'Compute',    value:78, unit:'热度', tone:'blue' },
      { cn:'垂直应用',   en:'Vertical',   value:64, unit:'热度', tone:'violet' },
      { cn:'数据与工具', en:'Data/Tool',  value:51, unit:'热度', tone:'acc' },
      { cn:'安全对齐',   en:'Safety',     value:43, unit:'热度', tone:'blue' },
      { cn:'端侧硬件',   en:'Edge/HW',    value:36, unit:'热度', tone:'warn' },
    ],
};

function SlideRadialBar(props){
  useDeckStyles(props.theme);
  const T = (deckTheme ? deckTheme(props.theme) : {});
  const ACC = T.accent || '#46e3c6';
  const BLUE = T.blue || '#4a86ff';
  const VIO = T.violet || '#9f7bff';
  const WARN = T.warn || '#ffb27a';
  const navy = T.navy900 || '#050b22';
  const TONE = { acc:ACC, blue:BLUE, violet:VIO, warn:WARN };

  const {
    itemCount, chartType, showScale, focus, focusIndex, labelType, showAside,
    head, note, items,
  } = { ...defaultProps, ...props };

  const data = items.slice(0, Math.max(2, Math.min(itemCount, items.length)));
  const fIdx = Math.max(0, Math.min(focusIndex, data.length - 1));
  const lbl = (i)=> deckLabel(labelType, i, { keyword:'IDX' });
  const max = Math.max(100, ...data.map(d=>d.value));

  const cx=320, cy=320, Rmax=288, Rmin=96;
  const polar = chartType==='极柱';
  const samp = (r,a0,a1,steps)=>{ const pts=[]; const N=Math.max(2,steps); for(let i=0;i<=N;i++){ const a=(a0+(a1-a0)*i/N)*Math.PI/180; pts.push(`${cx+r*Math.cos(a)},${cy+r*Math.sin(a)}`);} return 'M '+pts.join(' L '); };
  const pt = (r,a)=>{ const t=a*Math.PI/180; return [cx+r*Math.cos(t), cy+r*Math.sin(t)]; };

  // 同心轨道半径（外→内）
  const step = data.length>1 ? (Rmax-Rmin)/(data.length-1) : 0;
  const trackR = (i)=> Rmax - i*step;
  const sw = Math.max(16, Math.min(36, step*0.6 || 30));
  // 极柱角度（自顶 12 点起，顺时针均布）
  const ang = (i)=> -90 + i*(360/data.length);
  const scaleRings = [0.25, 0.5, 0.75, 1];
  const scaleStroke = 'rgba(210,230,255,.28)';
  const spokeStroke = 'rgba(210,230,255,.18)';

  return (
    <SlideShell orbs={[{ w:520, h:520, right:-160, bottom:-170,
        color:`radial-gradient(circle at 50% 50%, ${hexA(BLUE,.16)}, ${hexA(BLUE,0)} 70%)` }]}>
      <SlideHead no={head.no} en={head.en} cn={head.cn} badge={head.no} />

      <div style={{flex:'1 1 0', minHeight:0, display:'flex', alignItems:'center', gap:50, marginTop:14}}>
        {/* 极坐标图 */}
        <div className="dk-anim d1" style={{flex:'1.25 1 0', minWidth:0, height:'100%', display:'flex', alignItems:'center', justifyContent:'center'}}>
          <svg viewBox="0 0 640 640" style={{width:'100%', height:'100%', maxHeight:680}}>
            {!polar && data.map((d,i)=>{
              const col = TONE[d.tone] || ACC;
              const frac = d.value/max;
              const r = trackR(i);
              const dim = focus && i!==fIdx;
              const hot = focus && i===fIdx;
              return (
                <g key={i} opacity={dim?0.4:1}>
                  <path d={samp(r,-90,270,96)} fill="none" stroke="rgba(255,255,255,.08)" strokeWidth={sw} strokeLinecap="round" />
                  <path d={samp(r,-90,-90+360*frac,Math.max(2,Math.round(96*frac)))} fill="none" stroke={col} strokeWidth={sw} strokeLinecap="round"
                        style={{filter: hot?`drop-shadow(0 0 14px ${hexA(col,.7)})`:'none'}} />
                  {(()=>{ const [x,y]=pt(r,-90); return <circle cx={x} cy={y} r={sw/2-2} fill={navy} stroke={col} strokeWidth="2.5" />; })()}
                </g>
              );
            })}

            {polar && data.map((d,i)=>{
              const col = TONE[d.tone] || ACC;
              const frac = d.value/max;
              const a = ang(i);
              const r1 = Rmin + (Rmax-Rmin)*frac;
              const [x0,y0]=pt(Rmin, a); const [x1,y1]=pt(r1, a);
              const dim = focus && i!==fIdx; const hot = focus && i===fIdx;
              return (
                <g key={i} opacity={dim?0.4:1}>
                  <line x1={x0} y1={y0} x2={pt(Rmax,a)[0]} y2={pt(Rmax,a)[1]} stroke="rgba(255,255,255,.07)" strokeWidth={sw} strokeLinecap="round" />
                  <line x1={x0} y1={y0} x2={x1} y2={y1} stroke={col} strokeWidth={sw} strokeLinecap="round"
                        style={{filter: hot?`drop-shadow(0 0 14px ${hexA(col,.7)})`:'none'}} />
                  <circle cx={x1} cy={y1} r={sw/2-1} fill={col} stroke={navy} strokeWidth="2.5" />
                </g>
              );
            })}

            {/* 刻度网格 */}
            {showScale && scaleRings.map((f,k)=>(
              <path key={k} data-dashi-theme09-radialbar-scale-ring="true" d={samp(Rmin+(Rmax-Rmin)*f, -90, 270, 96)} fill="none" stroke={scaleStroke} strokeWidth={k===scaleRings.length-1 ? 2 : 1.35} strokeDasharray="5 8" opacity={k===scaleRings.length-1 ? 0.95 : 0.82} />
            ))}
            {showScale && polar && data.map((_,i)=>{ const [x,y]=pt(Rmax+6, ang(i)); return <line key={'g'+i} data-dashi-theme09-radialbar-scale-spoke="true" x1={cx} y1={cy} x2={x} y2={y} stroke={spokeStroke} strokeWidth="1.35" strokeDasharray="4 9" />; })}

            {/* 圆心：焦点项数值 */}
            <circle cx={cx} cy={cy} r={Rmin-18} fill="rgba(5,11,34,.55)" stroke="rgba(255,255,255,.12)" strokeWidth="1" />
            <text x={cx} y={cy-6} textAnchor="middle" fontFamily="var(--font-display)" fontWeight="900" fontSize="72"
                  fill={focus ? (TONE[data[fIdx].tone]||ACC) : '#fff'}>{focus?data[fIdx].value:max}</text>
            <text x={cx} y={cy+30} textAnchor="middle" fontFamily="var(--font-cn)" fontWeight="700" fontSize="22" fill="var(--ink-dim)">
              {focus?data[fIdx].cn:'峰值刻度'}</text>
          </svg>
        </div>

        {/* 图例 */}
        <div style={{flex:'1 1 0', minWidth:0, display:'flex', flexDirection:'column', gap:12}}>
          {data.map((d,i)=>{
            const col = TONE[d.tone] || ACC;
            const hot = focus && i===fIdx;
            return (
              <div key={i} className={'dk-anim d'+Math.min(i+1,6)} style={{display:'flex', alignItems:'center', gap:18,
                    padding:'14px 20px', borderRadius:16, background: hot?hexA(col,.12):'rgba(255,255,255,.04)',
                    borderLeft:`5px solid ${hot?col:'rgba(255,255,255,.16)'}`,
                    boxShadow: hot?`0 0 0 1px ${hexA(col,.5)}`:'none'}}>
                <span style={{flexShrink:0, width:40, height:40, borderRadius:11, display:'inline-flex', alignItems:'center', justifyContent:'center',
                    fontFamily:'var(--font-display)', fontWeight:900, fontSize:16, color: hot?navy:col,
                    background: hot?col:hexA(col,.16), border:`1px solid ${col}`}}>{lbl(i)}</span>
                <div style={{flex:1, minWidth:0}}>
                  <div style={{fontFamily:'var(--font-cn)', fontWeight:900, fontSize:'var(--type-small)', color: hot?col:'#fff', lineHeight:1.1}}>{d.cn}</div>
                  <div style={{fontFamily:'var(--font-mono)', fontSize:13, color:'var(--ink-faint)', marginTop:2}}>{d.en}</div>
                </div>
                <div style={{flexShrink:0, textAlign:'right'}}>
                  <span style={{fontFamily:'var(--font-display)', fontWeight:900, fontSize:'var(--type-sub)', color: hot?col:'#fff'}}>{d.value}</span>
                  <span style={{fontFamily:'var(--font-mono)', fontSize:13, color:'var(--ink-faint)', marginLeft:5}}>{d.unit||''}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {showAside && (
        <div className="dk-glass-dark dk-anim d5" style={{marginTop:14, flexShrink:0, borderRadius:18, padding:'13px 30px', display:'flex', alignItems:'center', gap:20}}>
          <span style={{flexShrink:0, fontFamily:'var(--font-mono)', fontSize:14, letterSpacing:'.12em', color:ACC}}>口径说明</span>
          <p style={{fontSize:'var(--type-tiny)', lineHeight:1.5, color:'var(--ink-dim)', textWrap:'pretty', margin:0}}>{note}</p>
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

export default SlideRadialBar;

/* ── 模板参数 schema（自描述 · 迁移即带控件；Tweaks 由此自动生成） ── */
export const slideSpec = { defaults: defaultProps, slot:'radialbar', name:'径向透视 · RadialBar', controls:[
  { prop:'itemCount', type:'slider', label:'数量', default:5, min:2, max:6, step:1 },
  { prop:'chartType', type:'radio', label:'图表类型', default:'径向条', options:['径向条','极柱'] },
  { prop:'showScale', type:'toggle', label:'刻度网格', default:true, desc:'装饰' },
  { prop:'showAside', type:'toggle', label:'装饰文案', default:true, desc:'口径说明' },
  { prop:'labelType', type:'labelType', label:'标签类型', default:'数字' },
  { prop:'focus', type:'focus', label:'重点信息 Focus', default:false },
  { prop:'focusIndex', type:'slider', label:'焦点序号', default:0, min:0, max:(p)=>p.itemCount-1, maxFromKey:'itemCount', maxFromKeyOffset:-1, displayOffset:1, step:1, showIf:(p)=>p.focus },
]};
