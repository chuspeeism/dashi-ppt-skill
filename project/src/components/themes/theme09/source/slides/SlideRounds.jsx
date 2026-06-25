import { useDeckStyles, deckTheme, deckLabel, SlideShell, SlideHead } from './DeckKit.jsx';
/* ============================================================================
   SlideRounds — 轮次结构（分组数据图 · 图表类型可切换）
   独立组件：仅靠 props 控制内容与样式；render 时自注入 DeckKit 基座样式。
   迁移：连同 DeckKit.jsx 复制即可；本工程用 window 暴露，标准工程改为 import/export。

   ── 可调参数（Props） ──────────────────────────────────────────────────────
   | prop        | 类型                          | 默认值   | 说明                              |
   | items       | RoundItem[]                   | 见下     | 数据源（每条 = 一个轮次）         |
   | itemCount   | number (2–6)                  | 6        | 实际展示的条目数（截取）          |
   | chartType   | '柱状' | '折线' | '面积'       | '柱状'   | 图表类型                          |
   | metric      | '主指标' | '次指标' | '双指标'  | '双指标' | 展示主指标 / 次指标 / 双轴叠加     |
   | focus       | boolean                       | true     | 是否高亮某条目                    |
   | focusIndex  | number (0-based)              | 4        | 高亮第几条                        |
   | labelType   | 'number'|'symbol'|'keyword'   | number   | 角标样式（数字/符号/关键词）      |
   | showAside   | boolean                       | true     | 是否显示「结构解读」装饰卡        |
   | badge       | string                        | '08'     | 页眉编号徽标                      |
   | theme       | Partial<DeckTheme>            | —        | 设计令牌覆盖                      |
   RoundItem = { key, cn, en, primary:number, secondary:number }
     · primary   = 主指标（默认：事件笔数）
     · secondary = 次指标（默认：平均单笔金额）
   ========================================================================== */
/* ── 页面属性契约 · defaultProps ──────────────────────────────────────────
   本页全部可见文案 / 数据 / 图片槽默认值集中于此，直接编辑即可换内容；
   组件内部以 { ...defaultProps, ...props } 合并，外部传同名 props 逐项覆盖。 */
export const defaultProps = {
  itemCount: 6,
  chartType: '柱状',
  metric: '双指标',
  focus: true,
  focusIndex: 4,
  labelType: 'number',
  showAside: true,
  badge: '08',
  primaryMeta: { label:'事件笔数', unit:'笔' },
  secondaryMeta: { label:'平均单笔', unit:'亿美元' },
  items: [
      { key:'Seed', cn:'种子轮',     en:'Seed',        primary:8,  secondary:1.2 },
      { key:'A',    cn:'A 轮',       en:'Series A',    primary:12, secondary:1.8 },
      { key:'B',    cn:'B 轮',       en:'Series B',    primary:18, secondary:3.5 },
      { key:'C',    cn:'C 轮',       en:'Series C',    primary:15, secondary:6.8 },
      { key:'D+',   cn:'D 轮及以后', en:'Series D+',   primary:22, secondary:15.2 },
      { key:'—',    cn:'未披露',     en:'Undisclosed', primary:22, secondary:18.6 },
    ],
};

function SlideRounds(props){
  useDeckStyles(props.theme);
  const T = (deckTheme ? deckTheme(props.theme) : {});
  const ACC = T.accent || '#46e3c6';
  const BLUE = T.blue || '#4a86ff';

  const {
    itemCount, chartType, metric, focus, focusIndex, labelType, showAside,
    badge, primaryMeta, secondaryMeta, items,
  } = { ...defaultProps, ...props };

  const want = Math.max(2, Math.min(itemCount, 24));
  // 不足时按规律合成补充条目（供模板演示更多柱体，最多 24）
  const data = (function(){
    const out = items.slice(0, Math.min(want, items.length));
    for(let k=items.length; k<want; k++){
      const seed = items[k % items.length];
      out.push({
        key:'R'+(k+1), cn:'轮次 '+(k+1), en:'Bucket '+(k+1),
        primary: Math.max(2, Math.round(seed.primary*(0.55+((k*37)%50)/100))),
        secondary: Math.round((seed.secondary*(0.5+((k*53)%70)/100))*10)/10,
      });
    }
    return out;
  })();
  const fIdx = Math.max(0, Math.min(focusIndex, data.length - 1));
  const showP = metric !== '次指标';
  const showS = metric !== '主指标';

  // 图表几何（viewBox 自适应）
  const W = 1660, H = 470, padL = 70, padR = showS && metric==='双指标' ? 80 : 40, padT = 40, padB = 64;
  const plotW = W - padL - padR, plotH = H - padT - padB;
  const maxP = niceMax(Math.max(...data.map(d=>d.primary)));
  const maxS = niceMax(Math.max(...data.map(d=>d.secondary)));
  // 单指标模式下用对应指标作为主序列
  const soloKey = metric === '次指标' ? 'secondary' : 'primary';
  const soloMax = metric === '次指标' ? maxS : maxP;

  const xAt = (i)=> padL + (data.length===1 ? plotW/2 : (i/(data.length-1))*plotW);
  const bandW = plotW / data.length;
  const yP = (v)=> padT + plotH - (v/soloMax)*plotH;       // 主图序列（按当前主指标）
  const yS = (v)=> padT + plotH - (v/maxS)*plotH;          // 双指标模式下的次序列（右轴）

  const soloVals = data.map(d=> d[soloKey]);
  const linePath = soloVals.map((v,i)=> `${i?'L':'M'} ${xAt(i)} ${yP(v)}`).join(' ');
  const areaPath = `${linePath} L ${xAt(data.length-1)} ${padT+plotH} L ${xAt(0)} ${padT+plotH} Z`;
  const sPath = data.map((d,i)=> `${i?'L':'M'} ${xAt(i)} ${yS(d.secondary)}`).join(' ');
  const barW = Math.min(78, bandW*0.46);
  // 柱数较多时缩小 X 轴标签字号并隔项显示，避免重叠
  const xFont = data.length<=8 ? 24 : data.length<=14 ? 18 : 14;
  const xStep = data.length<=16 ? 1 : 2;

  const lbl = (i)=> deckLabel(labelType, i, { keyword:'RND' });

  return (
    <SlideShell orbs={[{ w:520, h:520, left:-170, top:-150,
        color:`radial-gradient(circle at 50% 50%, ${hexA(BLUE,.20)}, ${hexA(BLUE,0)} 70%)` }]}>
      <SlideHead no={badge} en="Round Structure" cn="轮次结构 · 资本梯度"
        badge={labelType==='keyword'?'DATA':labelType==='symbol'?'◆':badge} />

      <div style={{flex:'1 1 0', minHeight:0, display:'flex', flexDirection:'column', marginTop:26}}>
        {/* 图表卡 */}
        <div className="dk-glass dk-anim d1" style={{flex:'1 1 0', minHeight:0, borderRadius:'var(--dk-radius)',
              padding:'24px 40px 14px', position:'relative', display:'flex', flexDirection:'column'}}>
          <div style={{display:'flex', justifyContent:'space-between', alignItems:'baseline', padding:'0 24px', marginBottom:2}}>
            <span style={{fontSize:'var(--type-sub)', fontWeight:700}}>各轮次{metric==='次指标'?secondaryMeta.label:primaryMeta.label}分布</span>
            <span style={{fontFamily:'var(--font-mono)', fontSize:'var(--type-tiny)', color:'var(--ink-faint)'}}>
              {metric==='双指标' ? `${primaryMeta.label} · ${secondaryMeta.label}` : (metric==='次指标'?secondaryMeta.label:primaryMeta.label)} ／ 共 97 笔
            </span>
          </div>

          <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" style={{width:'100%', flex:'1 1 0', minHeight:0, display:'block'}}>
            <defs>
              <linearGradient id="rndArea" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={BLUE} stopOpacity="0.5" />
                <stop offset="100%" stopColor={BLUE} stopOpacity="0.02" />
              </linearGradient>
            </defs>

            {/* 网格 + 左轴 */}
            {[0,0.25,0.5,0.75,1].map((g,i)=>{
              const y = padT + plotH - g*plotH;
              return (<g key={i}>
                <line x1={padL} y1={y} x2={W-padR} y2={y} stroke="rgba(255,255,255,.1)" strokeWidth="1" />
                <text x={padL-16} y={y+6} textAnchor="end" fontFamily="var(--font-mono)" fontSize="20" fill="rgba(255,255,255,.4)">{Math.round(g*soloMax)}</text>
              </g>);
            })}

            {/* 柱状主序列 */}
            {chartType === '柱状' && data.map((d,i)=>{
              const hot = focus && i===fIdx;
              const v = d[soloKey];
              return <rect key={i} x={xAt(i)-barW/2} y={yP(v)} width={barW} height={padT+plotH-yP(v)}
                rx="9" fill={hot?ACC:BLUE} opacity={hot?1:.82}
                style={{filter: hot?`drop-shadow(0 0 22px ${hexA(ACC,.6)})`:'none'}} />;
            })}
            {/* 面积 / 折线主序列 */}
            {chartType === '面积' && <path d={areaPath} fill="url(#rndArea)" />}
            {chartType !== '柱状' && <path d={linePath} fill="none" stroke="#6ea0ff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />}
            {chartType !== '柱状' && data.map((d,i)=>{
              const hot = focus && i===fIdx;
              return <circle key={i} cx={xAt(i)} cy={yP(d[soloKey])} r={hot?11:6}
                fill={hot?ACC:'#cfe0ff'} stroke="#0a1230" strokeWidth={hot?3:2}
                style={{filter: hot?`drop-shadow(0 0 16px ${hexA(ACC,.8)})`:'none'}} />;
            })}

            {/* 次指标副线（仅双指标模式，右轴） */}
            {metric==='双指标' && showS && <>
              <path d={sPath} fill="none" stroke={ACC} strokeWidth="3" strokeDasharray="3 8" strokeLinecap="round" />
              {data.map((d,i)=><circle key={i} cx={xAt(i)} cy={yS(d.secondary)} r="5" fill={ACC} />)}
              {[0,0.5,1].map((g,i)=>{
                const y = padT + plotH - g*plotH;
                return <text key={i} x={W-padR+14} y={y+6} textAnchor="start" fontFamily="var(--font-mono)" fontSize="18" fill={hexA(ACC,.7)}>{(g*maxS).toFixed(0)}</text>;
              })}
            </>}

            {/* 焦点数值 */}
            {focus && (()=>{ const d=data[fIdx]; const v=d[soloKey]; return (
              <text x={xAt(fIdx)} y={yP(v)-22} textAnchor="middle" fontFamily="var(--font-display)" fontWeight="900" fontSize="32" fill="#fff">{v}</text>
            );})()}

            {/* X 轴标签 */}
            {data.map((d,i)=> (i%xStep===0 || i===data.length-1) ? (
              <text key={i} x={xAt(i)} y={padT+plotH+38} textAnchor="middle" fontFamily="var(--font-cn)" fontWeight="600" fontSize={xFont}
                fill={focus&&i===fIdx?ACC:'rgba(255,255,255,.7)'}>{d.cn}</text>
            ) : null)}
          </svg>

          {/* 图例 */}
          <div style={{display:'flex', gap:30, padding:'2px 24px 4px', fontSize:'var(--type-tiny)', color:'var(--ink-dim)'}}>
            {showP && metric!=='次指标' && <span style={{display:'inline-flex', alignItems:'center', gap:10}}><i style={{width:24, height:12, borderRadius:4, background:BLUE}}></i>{primaryMeta.label}</span>}
            {metric==='次指标' && <span style={{display:'inline-flex', alignItems:'center', gap:10}}><i style={{width:24, height:12, borderRadius:4, background:BLUE}}></i>{secondaryMeta.label}</span>}
            {metric==='双指标' && showS && <span style={{display:'inline-flex', alignItems:'center', gap:10}}><i style={{width:24, height:0, borderTop:`3px dashed ${ACC}`}}></i>{secondaryMeta.label}</span>}
          </div>
        </div>

        {/* 底部：解读卡 + 头条数字 */}
        <div style={{display:'flex', gap:22, marginTop:18, alignItems:'stretch'}}>
          {showAside && (
            <div className="dk-glass-dark dk-anim d2" style={{flex:'1 1 0', borderRadius:22, padding:'22px 30px', display:'flex', gap:22, alignItems:'center'}}>
              <span style={{flexShrink:0, fontFamily:'var(--font-mono)', fontSize:14, letterSpacing:'.12em', color:ACC, writingMode:'vertical-rl', textOrientation:'upright'}}>结构</span>
              <p style={{fontSize:'var(--type-small)', lineHeight:1.55, color:'rgba(255,255,255,.86)', textWrap:'pretty'}}>
                轮次越靠后、单笔越大：<b style={{color:'#fff'}}>D 轮及以后与未披露轮次</b>贡献了绝大部分资本，
                而早期笔数虽多、金额有限 —— 资金高度向<b style={{color:ACC}}>头部成熟标的</b>集中。
              </p>
            </div>
          )}
          {[{v:'97',u:'笔',l:'大额事件总数'},{v:'10.0',u:'亿美元',l:'平均单笔'},{v:'18.6',u:'亿美元',l:'未披露轮均值'}].map((s,i)=>(
            <div key={i} className="dk-glass dk-anim d3" style={{flex: showAside?'0 0 230px':'1 1 0', borderRadius:22, padding:'18px 26px', display:'flex', flexDirection:'column', justifyContent:'center'}}>
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

export default SlideRounds;

/* ── 模板参数 schema（自描述 · 迁移即带控件；Tweaks 由此自动生成） ── */
export const slideSpec = { defaults: defaultProps, slot:'rounds', name:'轮次结构 · Rounds', controls:[
  { prop:'itemCount', type:'slider', label:'条目数量', default:6, min:2, max:24, step:1 },
  { prop:'chartType', type:'radio', label:'图表类型', default:'柱状', options:['柱状','折线','面积'] },
  { prop:'metric', type:'radio', label:'展示指标', default:'双指标', options:['主指标','次指标','双指标'] },
  { prop:'showAside', type:'toggle', label:'装饰文案', default:true },
  { prop:'labelType', type:'labelType', label:'标签类型', default:'数字' },
  { prop:'focus', type:'focus', label:'重点信息 Focus', default:true },
  { prop:'focusIndex', type:'slider', label:'焦点序号', default:4, min:0, max:(p)=>p.itemCount-1, maxFromKey:'itemCount', maxFromKeyOffset:-1, displayOffset:1, step:1, showIf:(p)=>p.focus },
]};
