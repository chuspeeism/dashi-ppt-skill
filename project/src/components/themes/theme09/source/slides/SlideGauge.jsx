import { useDeckStyles, deckTheme, deckLabel, SlideShell, SlideHead } from './DeckKit.jsx';
/* ============================================================================
   SlideGauge — 景气仪表盘（半环 / 整环 仪表组）
   独立组件：仅靠 props 控制内容与样式；render 时自注入 DeckKit 基座样式。

   ── 可调参数（Props） ──────────────────────────────────────────────────────
   | prop        | 类型                          | 默认值 | 说明                            |
   | items       | Item[]                        | 见下   | 数据源（每条 = 一个仪表）       |
   | itemCount   | number (2–4)                  | 4      | 展示仪表数（截取）              |
   | gaugeStyle  | '半环' | '整环'               | '半环' | 仪表样式                        |
   | focus       | boolean                       | true   | 是否高亮某一仪表                |
   | focusIndex  | number (0-based)              | 0      | 高亮第几个                      |
   | labelType   | 'number'|'symbol'|'keyword'   | number | 角标样式                        |
   | showAside   | boolean                       | true   | 是否显示「口径说明」装饰条      |
   | badge       | string                        | '10'   | 页眉编号徽标                    |
   Item = { cn, en, value:0–100, note, tone:'acc'|'warn' }
   ========================================================================== */
/* ── 页面属性契约 · defaultProps ──────────────────────────────────────────
   本页全部可见文案 / 数据 / 图片槽默认值集中于此，直接编辑即可换内容；
   组件内部以 { ...defaultProps, ...props } 合并，外部传同名 props 逐项覆盖。 */
export const defaultProps = {
  itemCount: 4,
  gaugeStyle: '半环',
  focus: true,
  focusIndex: 0,
  labelType: 'number',
  showAside: true,
  badge: '10',
  items: [
      { cn:'市场景气度', en:'Sentiment',  value:78, note:'资本情绪偏热', tone:'acc' },
      { cn:'资本活跃度', en:'Activity',   value:86, note:'交易频次创高', tone:'acc' },
      { cn:'估值泡沫度', en:'Valuation',  value:64, note:'需警惕回调',   tone:'warn' },
      { cn:'退出预期',   en:'Exit Window', value:52, note:'IPO 窗口临近', tone:'acc' },
    ],
};

function SlideGauge(props){
  useDeckStyles(props.theme);
  const T = (deckTheme ? deckTheme(props.theme) : {});
  const ACC = T.accent || '#46e3c6';
  const WARN = T.warn || '#ffb27a';
  const BLUE = T.blue || '#4a86ff';

  const {
    itemCount, gaugeStyle, focus, focusIndex, labelType, showAside, badge,
    items,
  } = { ...defaultProps, ...props };

  const shown = items.slice(0, Math.max(2, Math.min(itemCount, items.length)));
  const fIdx = Math.max(0, Math.min(focusIndex, shown.length - 1));
  const lbl = (i)=> deckLabel(labelType, i, { keyword:'IDX' });

  return (
    <SlideShell orbs={[{ w:520, h:520, right:-160, top:-150,
        color:`radial-gradient(circle at 50% 50%, ${hexA(ACC,.16)}, ${hexA(ACC,0)} 70%)` }]}>
      <SlideHead no={badge} en="Market Gauges" cn="景气仪表 · 体征速览"
        badge={labelType==='keyword'?'GAUGE':labelType==='symbol'?'◆':badge} />

      <div style={{flex:'1 1 0', minHeight:0, display:'grid', marginTop:26,
            gridTemplateColumns:`repeat(${shown.length}, minmax(0,1fr))`, gap:24}}>
        {shown.map((g,i)=>{
          const hot = focus && i===fIdx;
          const col = g.tone==='warn' ? WARN : ACC;
          return (
            <div key={i} className={'dk-glass dk-anim d'+Math.min(i+1,6)} style={{minHeight:0, borderRadius:'var(--dk-radius)',
                  padding:'30px 26px', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'space-between',
                  position:'relative', overflow:'hidden',
                  boxShadow: hot?`0 34px 80px ${hexA(col,.28)}, 0 0 0 2px ${col}`:'0 22px 54px rgba(3,8,30,.42)'}}>
              <div style={{alignSelf:'stretch', display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                <span style={{fontFamily:'var(--font-mono)', fontSize:14, letterSpacing:'.06em', color: hot?col:'var(--ink-faint)',
                    border:`1px solid ${hot?hexA(col,.5):'rgba(255,255,255,.16)'}`, borderRadius:8, padding:'4px 11px'}}>{lbl(i)}</span>
                <span style={{fontFamily:'var(--font-mono)', fontSize:13, letterSpacing:'.08em', color:'var(--ink-faint)'}}>{g.en}</span>
              </div>

              <Gauge value={g.value} color={col} style={gaugeStyle} hot={hot} hexA={hexA} />

              <div style={{textAlign:'center'}}>
                <div style={{fontFamily:'var(--font-cn)', fontWeight:900, fontSize:'var(--type-sub)', color: hot?col:'#fff'}}>{g.cn}</div>
                <div style={{fontSize:'var(--type-tiny)', color:'var(--ink-dim)', marginTop:6, display:'inline-flex', alignItems:'center', gap:8}}>
                  <span style={{width:8, height:8, borderRadius:'50%', background:col, flexShrink:0}}></span>{g.note}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {showAside && (
        <div className="dk-glass-dark dk-anim d5" style={{marginTop:18, flexShrink:0, borderRadius:20, padding:'15px 30px',
              display:'flex', alignItems:'center', gap:22}}>
          <span style={{flexShrink:0, fontFamily:'var(--font-mono)', fontSize:14, letterSpacing:'.12em', color:ACC}}>口径说明</span>
          <p style={{fontSize:'var(--type-tiny)', lineHeight:1.5, color:'var(--ink-dim)', textWrap:'pretty'}}>
            各体征指数以 <b style={{color:'#fff'}}>0–100</b> 标准化打分（基于交易频次、估值倍数、情绪问卷综合测算）；
            分值越高代表该维度越活跃，<b style={{color:WARN}}>暖色</b>项为需警惕的过热信号。数据为调研整理，仅供研究参考。
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

/* 仪表：半环（180°）/ 整环（360°），用采样折线绘制以规避 arc flag */
function Gauge({ value, color, style, hot, hexA }){
  const pct = Math.max(0, Math.min(value, 100))/100;
  const samp = (cx,cy,r,a0,a1,steps)=>{
    const pts=[];
    for(let i=0;i<=steps;i++){ const a=(a0+(a1-a0)*i/steps)*Math.PI/180; pts.push(`${cx+r*Math.cos(a)},${cy+r*Math.sin(a)}`); }
    return 'M '+pts.join(' L ');
  };
  if(style === '整环'){
    const cx=110, cy=110, r=82;
    return (
      <svg width="220" height="220" viewBox="0 0 220 220" style={{filter: hot?`drop-shadow(0 0 22px ${hexA(color,.5)})`:'none'}}>
        <path d={samp(cx,cy,r,-90,270,80)} fill="none" stroke="rgba(255,255,255,.12)" strokeWidth="16" strokeLinecap="round" />
        <path d={samp(cx,cy,r,-90,-90+360*pct,Math.max(2,Math.round(80*pct)))} fill="none" stroke={color} strokeWidth="16" strokeLinecap="round" />
        <text x={cx} y={cy+4} textAnchor="middle" fontFamily="var(--font-display)" fontWeight="900" fontSize="58" fill="#fff">{value}</text>
        <text x={cx} y={cy+38} textAnchor="middle" fontFamily="var(--font-mono)" fontSize="18" fill="var(--ink-faint)">/ 100</text>
      </svg>
    );
  }
  // 半环（顶部）：180° → 360°
  const cx=130, cy=150, r=104;
  return (
    <svg width="260" height="178" viewBox="0 0 260 178" style={{filter: hot?`drop-shadow(0 0 22px ${hexA(color,.5)})`:'none'}}>
      <path d={samp(cx,cy,r,180,360,80)} fill="none" stroke="rgba(255,255,255,.12)" strokeWidth="18" strokeLinecap="round" />
      <path d={samp(cx,cy,r,180,180+180*pct,Math.max(2,Math.round(80*pct)))} fill="none" stroke={color} strokeWidth="18" strokeLinecap="round" />
      {/* 指针端点 */}
      {(()=>{ const a=(180+180*pct)*Math.PI/180; return <circle cx={cx+r*Math.cos(a)} cy={cy+r*Math.sin(a)} r="9" fill={color} stroke="#0a1230" strokeWidth="3" />; })()}
      <text x={cx} y={cy-18} textAnchor="middle" fontFamily="var(--font-display)" fontWeight="900" fontSize="64" fill="#fff">{value}</text>
      <text x={cx} y={cy+8} textAnchor="middle" fontFamily="var(--font-mono)" fontSize="18" fill="var(--ink-faint)">/ 100</text>
    </svg>
  );
}

export default SlideGauge;

/* ── 模板参数 schema（自描述 · 迁移即带控件；Tweaks 由此自动生成） ── */
export const slideSpec = { defaults: defaultProps, slot:'gauge', name:'景气仪表 · Gauge', controls:[
  { prop:'itemCount', type:'slider', label:'数量', default:4, min:2, max:4, step:1 },
  { prop:'gaugeStyle', type:'radio', label:'图表类型', default:'半环', options:['半环','整环'] },
  { prop:'showAside', type:'toggle', label:'装饰文案', default:true },
  { prop:'labelType', type:'labelType', label:'标签类型', default:'数字' },
  { prop:'focus', type:'focus', label:'重点信息 Focus', default:true },
  { prop:'focusIndex', type:'slider', label:'焦点序号', default:0, min:0, max:(p)=>p.itemCount-1, maxFromKey:'itemCount', maxFromKeyOffset:-1, displayOffset:1, step:1, showIf:(p)=>p.focus },
]};
