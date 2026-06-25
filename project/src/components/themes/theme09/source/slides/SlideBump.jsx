import { useDeckStyles, deckTheme, deckLabel, SlideShell, SlideHead } from './DeckKit.jsx';
/* ============================================================================
   SlideBump — 名次轨迹（bump chart · 多期排名升降折线）
   独立组件：仅靠 props 控制内容与样式；render 时自注入 DeckKit 基座样式。
   与 Slope（仅两期斜率）、Trend（多折线读数值而非名次）刻意区分：本页是「名次轨迹图」
   —— 横轴为连续多个时期、纵轴为名次（第 1 名在顶），每条赛道一条折线串起各期名次，
   名次徽标钉在每个节点上，交叉处即「此消彼长」，一眼读「谁在爬升、谁在跌出」。

   ── 可调参数（Props） ──────────────────────────────────────────────────────
   | prop        | 类型                          | 默认值 | 说明                          |
   | series      | Series[]                      | 见下   | 赛道数据源（ranks 对齐 periods）|
   | periods     | string[]                      | 见下   | 时期标签（文本，非参数调节）  |
   | itemCount   | number (4–8)                  | 7      | 展示赛道数（截取）            |
   | periodCount | number (3–6)                  | 5      | 展示时期数（截取）            |
   | showBadge   | boolean                       | true   | 节点名次徽标显隐              |
   | focus       | boolean                       | true   | 高亮某条赛道                  |
   | focusIndex  | number (0-based)              | 0      | 高亮第几条                    |
   | labelType   | 'number'|'symbol'|'keyword'   | number | 行首徽标样式                  |
   | showAside   | boolean                       | true   | 「升降解读」装饰条            |
   | head        | …                             | 见下   | 页眉文案                      |
   Series = { label, ranks:number[] }  // ranks 为各期名次（1 起）
   ========================================================================== */
/* ── 页面属性契约 · defaultProps ──────────────────────────────────────────
   本页全部可见文案 / 数据 / 图片槽默认值集中于此，直接编辑即可换内容；
   组件内部以 { ...defaultProps, ...props } 合并，外部传同名 props 逐项覆盖。 */
export const defaultProps = {
  itemCount: 7,
  periodCount: 5,
  showBadge: true,
  focus: true,
  focusIndex: 0,
  labelType: 'number',
  showAside: true,
  head: { no:'08', en:'Bump · Rank Trajectory', cn:'赛道名次 · 多期轨迹' },
  periods: ['2020','2021','2022','2023','2024','2025'],
  series: [
      { label:'大模型',     ranks:[3,2,1,1,1,1] },
      { label:'算力基建',   ranks:[5,4,3,2,2,2] },
      { label:'企业应用',   ranks:[2,3,4,4,3,3] },
      { label:'自动驾驶',   ranks:[1,1,2,3,5,6] },
      { label:'数据平台',   ranks:[6,5,5,5,4,4] },
      { label:'医疗 AI',    ranks:[7,7,6,6,6,5] },
      { label:'机器人',     ranks:[4,6,7,7,7,7] },
      { label:'AI 芯片',    ranks:[8,8,8,8,8,8] },
    ],
};

function SlideBump(props){
  useDeckStyles(props.theme);
  const T = (deckTheme ? deckTheme(props.theme) : {});
  const ACC = T.accent || '#46e3c6';
  const BLUE = T.blue || '#4a86ff';
  const VIO = T.violet || '#9f7bff';
  const WARN = T.warn || '#ffb27a';
  const PAL = [ACC, BLUE, VIO, WARN, '#6fd3ff', '#ff9bb6', '#9affc8', '#ffd66e'];

  const {
    itemCount, periodCount, showBadge, focus, focusIndex, labelType, showAside,
    head, periods, series,
  } = { ...defaultProps, ...props };

  const pc = Math.max(3, Math.min(periodCount, periods.length));
  const pds = periods.slice(0, pc);
  const data = series.slice(0, Math.max(4, Math.min(itemCount, series.length)))
    .map((s,i)=>({ ...s, ranks:s.ranks.slice(0,pc), col:PAL[i%PAL.length], idx:i }));
  const n = data.length;
  const fIdx = Math.max(0, Math.min(focusIndex, n-1));
  const labelKind = labelType === '符号' ? 'symbol' : labelType === '关键词' ? 'keyword' : labelType === '数字' ? 'number' : labelType;
  const lbl = (rank)=> deckLabel(labelKind, rank - 1, { keyword:'T', number:rank });

  const W = 1640, H = 560, padL = 250, padR = 250, padT = 64, padB = 50;
  const plotW = W - padL - padR, plotH = H - padT - padB;
  // 名次纵轴按「实际出现的最大名次」归一，避免少量赛道时名次值超出 n 导致节点溢出绘图区
  const maxRank = Math.max(2, ...data.flatMap(s=>s.ranks));
  const X = (k)=> padL + (pc<=1?plotW/2:(k/(pc-1))*plotW);
  const Y = (r)=> padT + ((r-1)/(maxRank-1))*plotH;

  const smooth = (pts)=>{
    if(pts.length<2) return '';
    let d=`M${pts[0][0]},${pts[0][1]}`;
    for(let i=0;i<pts.length-1;i++){
      const [x0,y0]=pts[i],[x1,y1]=pts[i+1]; const mx=(x0+x1)/2;
      d+=` C${mx},${y0} ${mx},${y1} ${x1},${y1}`;
    }
    return d;
  };

  const fd = data[fIdx];
  const delta = fd.ranks[0] - fd.ranks[pc-1]; // 正=名次上升
  const deltaText = delta>0 ? `↑ 升 ${delta} 位` : delta<0 ? `↓ 降 ${-delta} 位` : '持平';

  return (
    <SlideShell orbs={[{ w:520, h:520, left:-160, top:-150,
        color:`radial-gradient(circle at 50% 50%, ${hexA(BLUE,.2)}, ${hexA(BLUE,0)} 70%)` }]}>
      <SlideHead no={head.no} en={head.en} cn={head.cn} badge={head.no} />

      <div style={{flex:'1 1 0', minHeight:0, display:'flex', flexDirection:'column', marginTop:24}}>
        <div className="dk-glass dk-anim d1" style={{flex:'1 1 0', minHeight:0, borderRadius:'var(--dk-radius)', padding:'18px 26px', display:'flex', flexDirection:'column'}}>
          <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" style={{width:'100%', flex:'1 1 0', minHeight:0, display:'block'}}>
            {/* 纵向期次网格 */}
            {pds.map((p,k)=>(<g key={k}>
              <line x1={X(k)} y1={padT-14} x2={X(k)} y2={padT+plotH+10} stroke="rgba(255,255,255,.1)" strokeWidth="1.5" />
              <text x={X(k)} y={padT-26} textAnchor="middle" fontFamily="var(--font-display)" fontWeight="900" fontSize="28" fill={k===pc-1?'#fff':'var(--ink-dim)'}>{p}</text>
            </g>))}
            {/* 折线 */}
            {data.map((s)=>{
              const hot = focus && s.idx===fIdx;
              const pts = s.ranks.map((r,k)=>[X(k),Y(r)]);
              return <path key={s.idx} d={smooth(pts)} fill="none" stroke={hot?s.col:hexA(s.col,.5)}
                strokeWidth={hot?9:5} strokeLinecap="round" opacity={focus&&!hot?.4:1}
                style={{filter: hot?`drop-shadow(0 0 14px ${hexA(s.col,.6)})`:'none', transition:'opacity .2s'}} />;
            })}
            {/* 节点徽标 */}
            {showBadge && data.map((s)=>{
              const hot = focus && s.idx===fIdx;
              return s.ranks.map((r,k)=>{
                const badge = lbl(r);
                return (
                <g key={s.idx+'-'+k} opacity={focus&&!hot?.4:1}>
                  <circle cx={X(k)} cy={Y(r)} r={hot?17:12} fill={hot?s.col:'#0a1230'} stroke={s.col} strokeWidth={hot?3:2.5} />
                  <text data-dashi-theme09-bump-badge-label={badge} x={X(k)} y={Y(r)+1} textAnchor="middle" dominantBaseline="central"
                    fontFamily="var(--font-display)" fontWeight="900" fontSize={hot?18:13}
                    fill={hot?'#08122e':'#fff'}>{badge}</text>
                </g>
                );
              });
            })}
            {/* 两端赛道名 */}
            {data.map((s)=>{
              const hot = focus && s.idx===fIdx;
              return (<g key={'lab'+s.idx} opacity={focus&&!hot?.5:1}>
                <text x={X(0)-30} y={Y(s.ranks[0])+8} textAnchor="end" fontFamily="var(--font-cn)" fontWeight={hot?900:600} fontSize="25" fill={hot?s.col:'rgba(255,255,255,.82)'}>{s.label}</text>
                <text x={X(pc-1)+30} y={Y(s.ranks[pc-1])+8} textAnchor="start" fontFamily="var(--font-cn)" fontWeight={hot?900:600} fontSize="25" fill={hot?s.col:'#fff'}>{s.label}</text>
              </g>);
            })}
          </svg>
          <div style={{display:'flex', gap:30, padding:'4px 14px 0', fontSize:'var(--type-tiny)', color:'var(--ink-faint)', fontFamily:'var(--font-mono)'}}>
            <span>↑ 名次第 1 在顶部</span>
            <span style={{marginLeft:'auto'}}>{pds[0]} → {pds[pc-1]} · 共 {n} 条赛道</span>
          </div>
        </div>

        {showAside && (
          <div className="dk-glass-dark dk-anim d2" style={{marginTop:16, borderRadius:22, padding:'20px 30px', display:'flex', gap:24, alignItems:'center'}}>
            <span style={{flexShrink:0, fontFamily:'var(--font-mono)', fontSize:14, letterSpacing:'.12em', color:ACC, writingMode:'vertical-rl', textOrientation:'upright'}}>轨迹</span>
            <p style={{flex:'1 1 0', fontSize:'var(--type-small)', lineHeight:1.5, color:'rgba(255,255,255,.86)', textWrap:'pretty'}}>
              <b style={{color:fd.col}}>{fd.label}</b> 自 {pds[0]} 第 {fd.ranks[0]} 名{delta>0?'稳步攀升至':delta<0?'回落至':'保持'} {pds[pc-1]} 第 <b style={{color:'#fff'}}>{fd.ranks[pc-1]}</b> 名
              （{deltaText}）；资本注意力在多期内显著重排，头部赛道更替加速。
            </p>
            <div style={{flexShrink:0, textAlign:'center'}}>
              <div style={{fontFamily:'var(--font-display)', fontWeight:900, fontSize:54, lineHeight:.9, color:delta>0?ACC:delta<0?WARN:BLUE}}>{delta>0?'↑'+delta:delta<0?'↓'+(-delta):'='}</div>
              <div style={{fontSize:'var(--type-tiny)', color:'var(--ink-faint)', marginTop:4}}>名次变化</div>
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

export default SlideBump;

/* ── 模板参数 schema（自描述 · 迁移即带控件；Tweaks 由此自动生成） ── */
export const slideSpec = { defaults: defaultProps, slot:'bump', name:'名次轨迹 · Bump', controls:[
  { prop:'itemCount', type:'slider', label:'数量', default:7, min:4, max:8, step:1, desc:'赛道数' },
  { prop:'periodCount', type:'slider', label:'列数量', default:5, min:3, max:6, step:1, desc:'时期数' },
  { prop:'showBadge', type:'toggle', label:'名次徽标', default:true },
  { prop:'showAside', type:'toggle', label:'装饰文案', default:true, desc:'升降解读' },
  { prop:'labelType', type:'labelType', label:'标签类型', default:'数字' },
  { prop:'focus', type:'focus', label:'重点信息 Focus', default:true },
  { prop:'focusIndex', type:'slider', label:'焦点序号', default:0, min:0, max:(p)=>p.itemCount-1, maxFromKey:'itemCount', maxFromKeyOffset:-1, displayOffset:1, step:1, showIf:(p)=>p.focus },
]};
