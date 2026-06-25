import { useDeckStyles, deckTheme, deckLabel, SlideShell, SlideHead } from './DeckKit.jsx';
/* ============================================================================
   SlideRidgeline — 山脊密度图（ridgeline / joyplot · 重叠面积脊线）
   独立组件：仅靠 props 控制内容与样式；render 时自注入 DeckKit 基座样式。
   与 Stream（绕居中浮动基线的单一河带）、Stacked（坐标轴离散堆叠）、Fan（预测置信带）、
   Trend（多折线）刻意区分：本页是「山脊图」—— 多行各自一条平滑密度曲线沿同一横轴铺开，
   逐行向下错位、峰顶探入上一行，像层叠山脊读「分布形态如何逐期演进、峰位整体右移」。

   ── 可调参数（Props） ──────────────────────────────────────────────────────
   | prop        | 类型             | 默认值 | 说明                              |
   | rows        | Row[]            | 见下   | 各期数据源（含分布峰位/幅度）     |
   | itemCount   | number (4–8)     | 8      | 展示行数（截取）                  |
   | bins        | number (11–19)   | 15     | 横轴采样点数（曲线平滑度）        |
   | seed        | number           | 5      | 形态微扰种子（确定性）            |
   | showAxis    | boolean          | true   | 横轴档位刻度显隐                  |
   | focus       | boolean          | true   | 高亮某一行                        |
   | focusIndex  | number (0-based) | 7      | 高亮第几行                        |
   | labelType   | 'number'|'symbol'|'keyword' | number | 行徽标样式             |
   | showAside   | boolean          | true   | 「演进解读」装饰条                |
   | head        | …                | 见下   | 页眉文案                          |
   Row = { label, peak(0–1), amp(0–1) }
   ========================================================================== */
/* ── 页面属性契约 · defaultProps ──────────────────────────────────────────
   本页全部可见文案 / 数据 / 图片槽默认值集中于此，直接编辑即可换内容；
   组件内部以 { ...defaultProps, ...props } 合并，外部传同名 props 逐项覆盖。 */
export const defaultProps = {
  itemCount: 8,
  bins: 15,
  seed: 5,
  showAxis: true,
  focus: true,
  focusIndex: 7,
  labelType: 'number',
  showAside: true,
  head: { no:'10', en:'Ridgeline · Distribution', cn:'单笔分布 · 山脊演进' },
  axisTicks: ['$0.5亿','$1亿','$2亿','$5亿','$10亿','$20亿','≥$30亿'],
  rows: [
      { label:'23 Q1', peak:0.28, amp:0.62 },
      { label:'23 Q2', peak:0.34, amp:0.66 },
      { label:'23 Q3', peak:0.40, amp:0.70 },
      { label:'23 Q4', peak:0.46, amp:0.74 },
      { label:'24 Q1', peak:0.54, amp:0.80 },
      { label:'24 Q2', peak:0.60, amp:0.86 },
      { label:'24 Q3', peak:0.66, amp:0.92 },
      { label:'24 Q4', peak:0.72, amp:1.0  },
    ],
};

function SlideRidgeline(props){
  useDeckStyles(props.theme);
  const T = (deckTheme ? deckTheme(props.theme) : {});
  const ACC = T.accent || '#46e3c6';
  const BLUE = T.blue || '#4a86ff';
  const VIO = T.violet || '#9f7bff';
  const navy = T.navy900 || '#050b22';
  const PAL = [BLUE, '#5a93ff', '#6fb0ff', ACC, '#5ad8c4', VIO, '#b79bff', '#ff9bb6'];

  const {
    itemCount, bins, seed, showAxis, focus, focusIndex, labelType,
    showAside, head, axisTicks, rows,
  } = { ...defaultProps, ...props };

  const B = Math.max(11, Math.min(bins, 19));
  const data = rows.slice(0, Math.max(4, Math.min(itemCount, rows.length))).map((r,i)=>({ ...r, col:PAL[i%PAL.length], idx:i }));
  const N = data.length;
  const fIdx = Math.max(0, Math.min(focusIndex, N-1));
  const lbl = (i)=> deckLabel(labelType, i, { keyword:'Q' });

  const W = 1660, H = 580, x0 = 92, chartW = 1340;
  // 几何按可视高度自适应铺满：顶/底留白固定，山脊步距由「行数 + 峰高比」反推，少行也填满
  const RIDGE = 1.9, TOPPAD = 14, BOTPAD = 52;
  const step = (H - BOTPAD - TOPPAD) / (RIDGE + N - 1);
  const peakH = step * RIDGE;
  const padTop = peakH + TOPPAD;
  const baseY = (r)=> padTop + r*step;
  const X = (i)=> x0 + (i/(B-1))*chartW;
  const frac = (k)=>{ const s=Math.sin(k*12.9898 + seed*78.233)*43758.5453; return s-Math.floor(s); };

  // 各行分布（高斯主峰 + 轻微次峰 + 确定性微扰）→ 像素曲线
  const sigma = 2.4;
  const curves = data.map((r)=>{
    const peakBin = r.peak*(B-1);
    const ys = [];
    for(let i=0;i<B;i++){
      const g = Math.exp(-((i-peakBin)**2)/(2*sigma*sigma));
      const g2 = 0.22*Math.exp(-((i-(peakBin-3.5))**2)/(2*2.0*2.0));
      const noise = (frac(i + r.idx*7)-0.5)*0.06;
      ys.push(Math.max(0,(g+g2+noise))*r.amp);
    }
    return { ...r, ys };
  });
  const maxY = Math.max(...curves.flatMap(c=>c.ys));
  const smoothArea = (ys, by)=>{
    const pts = ys.map((v,i)=>[X(i), by - (v/maxY)*peakH]);
    let d=`M${x0},${by} L${pts[0][0]},${pts[0][1]}`;
    for(let i=0;i<pts.length-1;i++){ const [a,b]=pts[i],[c,e]=pts[i+1]; const mx=(a+c)/2; d+=` C${mx},${b} ${mx},${e} ${c},${e}`; }
    d+=` L${X(B-1)},${by} Z`;
    return d;
  };
  const smoothLine = (ys, by)=>{
    const pts = ys.map((v,i)=>[X(i), by - (v/maxY)*peakH]);
    let d=`M${pts[0][0]},${pts[0][1]}`;
    for(let i=0;i<pts.length-1;i++){ const [a,b]=pts[i],[c,e]=pts[i+1]; const mx=(a+c)/2; d+=` C${mx},${b} ${mx},${e} ${c},${e}`; }
    return d;
  };
  const fd = curves[fIdx];
  const fPeakBucket = axisTicks[Math.round(fd.peak*(axisTicks.length-1))];

  return (
    <SlideShell orbs={[{ w:520, h:520, right:-160, top:-150,
        color:`radial-gradient(circle at 50% 50%, ${hexA(VIO,.16)}, ${hexA(VIO,0)} 70%)` }]}>
      <SlideHead no={head.no} en={head.en} cn={head.cn} badge={head.no} />

      <div style={{flex:'1 1 0', minHeight:0, display:'flex', flexDirection:'column', marginTop:20}}>
        <div className="dk-glass dk-anim d1" style={{flex:'1 1 0', minHeight:0, borderRadius:'var(--dk-radius)', padding:'10px 24px', display:'flex', flexDirection:'column'}}>
          <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="xMidYMid meet" style={{width:'100%', flex:'1 1 0', minHeight:0, display:'block'}}>
            <defs>
              {curves.map((c)=>{
                const hot = focus && c.idx===fIdx;
                return (<linearGradient key={c.idx} id={`ridge-g-${c.idx}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={hexA(c.col, hot?0.92:0.7)} />
                  <stop offset="100%" stopColor={hexA(navy, 0.96)} />
                </linearGradient>);
              })}
            </defs>
            {/* 横轴刻度参考线 */}
            {showAxis && axisTicks.map((t,i)=>{
              const xx = x0 + (i/(axisTicks.length-1))*chartW;
              return <line key={i} x1={xx} y1={padTop-peakH+6} x2={xx} y2={baseY(N-1)+10} stroke="rgba(255,255,255,.06)" strokeWidth="1.5" />;
            })}
            {/* 山脊（自上而下绘制，下行覆上行实现重叠遮挡） */}
            {curves.map((c)=>{
              const hot = focus && c.idx===fIdx, dim = focus && c.idx!==fIdx;
              const by = baseY(c.idx);
              return (<g key={c.idx} opacity={dim?0.6:1} style={{transition:'opacity .2s'}}>
                <path d={smoothArea(c.ys, by)} fill={`url(#ridge-g-${c.idx})`} stroke="none" />
                <path d={smoothLine(c.ys, by)} fill="none" stroke={hot?'#fff':c.col} strokeWidth={hot?4:2.5}
                  style={{filter: hot?`drop-shadow(0 0 12px ${hexA(c.col,.8)})`:'none'}} />
                {/* 行标 */}
                <text x={x0-18} y={by-4} textAnchor="end" fontFamily="var(--font-display)" fontWeight={hot?900:700} fontSize="22" fill={hot?c.col:'var(--ink-dim)'}>{c.label}</text>
              </g>);
            })}
            {/* 右侧徽标列 */}
            {curves.map((c)=>{
              const hot = focus && c.idx===fIdx; const by = baseY(c.idx);
              return <g key={'b'+c.idx} opacity={focus&&!hot?.5:1}>
                <text x={W-28} y={by-4} textAnchor="end" fontFamily="var(--font-cn)" fontSize="17" fill="var(--ink-faint)">峰位 {axisTicks[Math.round(c.peak*(axisTicks.length-1))]}</text>
              </g>;
            })}
            {/* 横轴档位 */}
            {showAxis && axisTicks.map((t,i)=>{
              const xx = x0 + (i/(axisTicks.length-1))*chartW;
              return <text key={'t'+i} x={xx} y={baseY(N-1)+40} textAnchor="middle" fontFamily="var(--font-mono)" fontSize="16" fill="var(--ink-dim)">{t}</text>;
            })}
          </svg>
        </div>

        {showAside && (
          <div className="dk-glass-dark dk-anim d2" style={{marginTop:14, borderRadius:22, padding:'18px 30px', display:'flex', gap:24, alignItems:'center'}}>
            <span style={{flexShrink:0, fontFamily:'var(--font-mono)', fontSize:14, letterSpacing:'.12em', color:ACC, writingMode:'vertical-rl', textOrientation:'upright'}}>演进</span>
            <p style={{flex:'1 1 0', fontSize:'var(--type-small)', lineHeight:1.5, color:'rgba(255,255,255,.86)', textWrap:'pretty'}}>
              单笔融资分布的峰位自 <b style={{color:'#fff'}}>{axisTicks[Math.round(curves[0].peak*(axisTicks.length-1))]}</b> 一路右移至
              <b style={{color:fd.col}}> {fPeakBucket}</b>，山脊整体抬升、右尾变厚——大额轮次（≥$10亿）逐季成为分布主体，
              「平均单笔约 $10亿」由此而来。
            </p>
            <div style={{flexShrink:0, textAlign:'center'}}>
              <div style={{fontFamily:'var(--font-display)', fontWeight:900, fontSize:54, lineHeight:.9, color:ACC}}>{fPeakBucket}</div>
              <div style={{fontSize:'var(--type-tiny)', color:'var(--ink-faint)', marginTop:4}}>{fd.label} 峰位</div>
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

export default SlideRidgeline;

/* ── 模板参数 schema（自描述 · 迁移即带控件；Tweaks 由此自动生成） ── */
export const slideSpec = { defaults: defaultProps, slot:'ridge', name:'山脊密度 · Ridgeline', controls:[
  { prop:'itemCount', type:'slider', label:'数量', default:8, min:4, max:8, step:1, desc:'行数' },
  { prop:'bins', type:'slider', label:'采样点数', default:15, min:11, max:19, step:2, desc:'曲线平滑度' },
  { prop:'seed', type:'slider', label:'形态种子', default:5, min:1, max:30, step:1 },
  { prop:'showAxis', type:'toggle', label:'横轴刻度', default:true },
  { prop:'showAside', type:'toggle', label:'装饰文案', default:true, desc:'演进解读' },
  { prop:'labelType', type:'labelType', label:'标签类型', default:'数字' },
  { prop:'focus', type:'focus', label:'重点信息 Focus', default:true },
  { prop:'focusIndex', type:'slider', label:'焦点序号', default:7, min:0, max:(p)=>p.itemCount-1, maxFromKey:'itemCount', maxFromKeyOffset:-1, displayOffset:1, step:1, showIf:(p)=>p.focus },
]};
