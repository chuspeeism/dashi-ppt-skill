import { useDeckStyles, deckTheme, deckLabel, SlideShell, SlideHead } from './DeckKit.jsx';
/* ============================================================================
   SlideStat — 指标墙（KPI 数字砖 · 可切迷你图类型）
   独立组件：仅靠 props 控制内容与样式；render 时自注入 DeckKit 基座样式。

   ── 可调参数（Props） ──────────────────────────────────────────────────────
   | prop        | 类型                          | 默认值 | 说明                              |
   | stats       | Stat[]                        | 见下   | 指标数据源                        |
   | itemCount   | number (2–6)                  | 6      | 实际展示的指标数（截取）          |
   | columns     | number (2–3)                  | 3      | 每行砖块数                        |
   | miniChart   | '无'|'迷你环'|'迷你柱'|'迷你线' | '迷你柱' | 砖内迷你图类型                  |
   | focus       | boolean                       | true   | 是否高亮某块                      |
   | focusIndex  | number (0-based)              | 0      | 高亮第几块                        |
   | labelType   | 'number'|'symbol'|'keyword'   | number | 砖角标样式                        |
   | showAside   | boolean                       | true   | 是否显示「口径说明」装饰条        |
   | badge       | string                        | '09'   | 页眉编号徽标                      |
   | theme       | Partial<DeckTheme>            | —      | 设计令牌覆盖                      |
   Stat = { value, unit, label, en, pct:0–100, spark:number[], delta }
     · pct   = 迷你环占比；spark = 迷你柱/线序列；delta = 角标变化文案
   ========================================================================== */
/* ── 页面属性契约 · defaultProps ──────────────────────────────────────────
   本页全部可见文案 / 数据 / 图片槽默认值集中于此，直接编辑即可换内容；
   组件内部以 { ...defaultProps, ...props } 合并，外部传同名 props 逐项覆盖。 */
export const defaultProps = {
  itemCount: 6,
  columns: 3,
  miniChart: '迷你柱',
  focus: true,
  focusIndex: 0,
  labelType: 'number',
  showAside: true,
  badge: '09',
  stats: [
      { value:'970', unit:'亿$', label:'全年融资总额', en:'Total Funding', pct:100, spark:[162,284,318,206], delta:'历史新高' },
      { value:'97',  unit:'笔',  label:'大额事件数',   en:'Mega Rounds',   pct:62,  spark:[18,26,31,22],     delta:'≥1 亿美元' },
      { value:'10.0',unit:'亿$', label:'平均单笔',     en:'Avg Ticket',    pct:48,  spark:[1.2,1.8,3.5,6.8,15.2], delta:'轮次越后越大' },
      { value:'43.3',unit:'%',   label:'大模型占比',   en:'Foundation',    pct:43,  spark:[420,245,158,97,50], delta:'近半壁江山' },
      { value:'63.9',unit:'%',   label:'湾区集中度',   en:'Bay Area',      pct:64,  spark:[64,18,10,8],      delta:'地理高度集中' },
      { value:'1570',unit:'亿$', label:'最高单体估值', en:'Top Valuation', pct:88,  spark:[860,1000,1570],   delta:'OpenAI 年末' },
    ],
};

function SlideStat(props){
  useDeckStyles(props.theme);
  const T = (deckTheme ? deckTheme(props.theme) : {});
  const ACC = T.accent || '#46e3c6';
  const BLUE = T.blue || '#4a86ff';

  const {
    itemCount, columns, miniChart, focus, focusIndex, labelType, showAside,
    badge, stats,
  } = { ...defaultProps, ...props };

  const data = stats.slice(0, Math.max(2, Math.min(itemCount, stats.length)));
  const cols = Math.max(2, Math.min(columns, 3));
  const fIdx = Math.max(0, Math.min(focusIndex, data.length - 1));
  const lbl = (i)=> deckLabel(labelType, i, { keyword:'KPI' });
  const compact = cols === 2 && data.length > 4;

  return (
    <SlideShell orbs={[{ w:520, h:520, right:-160, top:-160,
        color:`radial-gradient(circle at 50% 50%, ${hexA(ACC,.16)}, ${hexA(ACC,0)} 70%)` }]}>
      <SlideHead no={badge} en="Key Metrics" cn="关键指标 · 全景速览"
        badge={labelType==='keyword'?'STAT':labelType==='symbol'?'◆':badge} />

      <div data-dashi-theme09-stat-density={compact?'compact':'regular'} style={{flex:'1 1 0', minHeight:0, display:'grid', marginTop:compact?18:26,
            gridTemplateColumns:`repeat(${cols}, minmax(0,1fr))`, gridAutoRows:'1fr', gap:compact?14:22}}>
        {data.map((s,i)=>{
          const hot = focus && i===fIdx;
          return (
            <div key={i} data-dashi-theme09-stat-card="true" className={'dk-glass dk-anim d'+Math.min(i+1,6)} style={{minHeight:0, borderRadius:'var(--dk-radius)',
                  padding:compact?'14px 20px':'28px 32px', display:'flex', flexDirection:'column', justifyContent:'space-between', gap:compact?7:0, position:'relative', overflow:'hidden',
                  boxShadow: hot?`0 34px 80px ${hexA(ACC,.28)}, 0 0 0 2px ${ACC}`:'0 22px 54px rgba(3,8,30,.42)'}}>
              {/* 角标 */}
              <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                <span style={{fontFamily:'var(--font-mono)', fontSize:compact?12:14, letterSpacing:'.06em', color: hot?ACC:'var(--ink-faint)',
                    border:`1px solid ${hot?hexA(ACC,.5):'rgba(255,255,255,.16)'}`, borderRadius:8, padding:compact?'3px 8px':'4px 11px'}}>{lbl(i)}</span>
                <span style={{fontFamily:'var(--font-mono)', fontSize:compact?11:13, letterSpacing:'.08em', color:'var(--ink-faint)'}}>{s.en}</span>
              </div>

              {/* 数字 */}
              <div style={{margin:compact?'3px 0':'10px 0'}}>
                <div style={{display:'flex', alignItems:'baseline', gap:8, whiteSpace:'nowrap'}}>
                  <span className={hot?'':'dk-ink-grad'} style={{fontFamily:'var(--font-display)', fontWeight:900, fontSize:compact?52:84, lineHeight:compact ? .86 : .82,
                      color: hot?ACC:undefined, textShadow: hot?`0 0 30px ${hexA(ACC,.45)}`:'none'}}>{s.value}</span>
                  <span style={{fontFamily:'var(--font-display)', fontWeight:700, fontSize:compact?22:30, color:'var(--ink-dim)'}}>{s.unit}</span>
                </div>
                <div style={{fontFamily:'var(--font-cn)', fontWeight:800, fontSize:compact?21:'var(--type-sub)', color:'#fff', marginTop:compact?4:8, lineHeight:1.12}}>{s.label}</div>
              </div>

              {/* 迷你图 + delta */}
              <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', gap:compact?10:16, minHeight:compact?34:56}}>
                <span style={{fontSize:compact?15:'var(--type-tiny)', lineHeight:1.25, color:'var(--ink-dim)', display:'inline-flex', alignItems:'center', gap:8, minWidth:0}}>
                  <span style={{width:8, height:8, borderRadius:'50%', background:ACC, flexShrink:0}}></span>{s.delta}
                </span>
                <Mini type={miniChart} s={s} color={hot?ACC:BLUE} accent={ACC} hexA={hexA} compact={compact} />
              </div>
            </div>
          );
        })}
      </div>

      {showAside && (
        <div className="dk-glass-dark dk-anim d5" style={{marginTop:compact?12:18, flexShrink:0, borderRadius:20, padding:compact?'10px 22px':'15px 30px',
              display:'flex', alignItems:'center', gap:compact?16:22}}>
          <span style={{flexShrink:0, fontFamily:'var(--font-mono)', fontSize:compact?12:14, letterSpacing:'.12em', color:ACC}}>口径说明</span>
          <p style={{fontSize:compact?15:'var(--type-tiny)', lineHeight:compact?1.35:1.5, color:'var(--ink-dim)', textWrap:'pretty'}}>
            统计口径：2024 全年公开披露的单笔 <b style={{color:'#fff'}}>≥1 亿美元</b> 融资事件；金额单位为亿美元，占比基于赛道资金分布。数据为调研整理，仅供研究参考。
          </p>
        </div>
      )}
    </SlideShell>
  );

  function hexA(hex, a){
    if(!hex || hex[0] !== '#') return hex;
    const n = hex.slice(1);
    const f = n.length===3 ? n.split('').map(c=>c+c).join('') : n;
    const r = parseInt(f.slice(0,2),16), g = parseInt(f.slice(2,4),16), b = parseInt(f.slice(4,6),16);
    return `rgba(${r},${g},${b},${a})`;
  }
}

/* 迷你图：环 / 柱 / 线 / 无 */
function Mini({ type, s, color, accent, hexA, compact }){
  if(type === '无') return null;
  if(type === '迷你环'){
    const size = compact ? 44 : 64;
    const R=compact?18:26, C=2*Math.PI*R, p=Math.max(0,Math.min(s.pct||0,100))/100;
    return (
      <svg width={size} height={size} viewBox="0 0 64 64" style={{flexShrink:0}}>
        <circle cx="32" cy="32" r={R} fill="none" stroke="rgba(255,255,255,.14)" strokeWidth="7" />
        <circle cx="32" cy="32" r={R} fill="none" stroke={color} strokeWidth="7" strokeLinecap="round"
          strokeDasharray={`${C*p} ${C}`} transform="rotate(-90 32 32)" />
        <text x="32" y="36" textAnchor="middle" fontFamily="var(--font-display)" fontWeight="800" fontSize={compact?13:16} fill="#fff">{Math.round(s.pct||0)}</text>
      </svg>
    );
  }
  const spark = (s.spark && s.spark.length) ? s.spark : [1];
  const max = Math.max(...spark), W=compact?86:120, H=compact?34:56, n=spark.length;
  if(type === '迷你线'){
    const path = spark.map((v,i)=>`${i?'L':'M'} ${(i/(n-1||1))*W} ${H-(v/max)*H*0.9-4}`).join(' ');
    return (
      <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} style={{flexShrink:0}}>
        <path d={`${path} L ${W} ${H} L 0 ${H} Z`} fill={hexA(color,.16)} />
        <path d={path} fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  // 迷你柱（默认）
  const bw = W/n*0.62;
  return (
    <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} style={{flexShrink:0}}>
      {spark.map((v,i)=>{
        const h=Math.max(3,(v/max)*H*0.92);
        return <rect key={i} x={(i/n)*W+(W/n-bw)/2} y={H-h} width={bw} height={h} rx="2.5"
          fill={i===n-1?accent:color} opacity={i===n-1?1:.7} />;
      })}
    </svg>
  );
}

export default SlideStat;

/* ── 模板参数 schema（自描述 · 迁移即带控件；Tweaks 由此自动生成） ── */
export const slideSpec = { defaults: defaultProps, slot:'stat', name:'关键指标 · Stat', controls:[
  { prop:'itemCount', type:'slider', label:'数量', default:6, min:2, max:6, step:1 },
  { prop:'columns', type:'slider', label:'每行数量', default:3, min:2, max:3, step:1 },
  { prop:'miniChart', type:'radio', label:'迷你图', default:'迷你柱', options:['无','迷你环','迷你柱','迷你线'] },
  { prop:'showAside', type:'toggle', label:'装饰文案', default:true },
  { prop:'labelType', type:'labelType', label:'标签类型', default:'数字' },
  { prop:'focus', type:'focus', label:'重点信息 Focus', default:true },
  { prop:'focusIndex', type:'slider', label:'焦点序号', default:0, min:0, max:(p)=>p.itemCount-1, maxFromKey:'itemCount', maxFromKeyOffset:-1, displayOffset:1, step:1, showIf:(p)=>p.focus },
]};
