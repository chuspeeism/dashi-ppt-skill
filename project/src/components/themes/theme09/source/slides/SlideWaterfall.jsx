import { useDeckStyles, deckTheme, deckLabel, SlideShell, SlideHead } from './DeckKit.jsx';
/* ============================================================================
   SlideWaterfall — 资金瀑布图（增量累积至总额）
   独立组件：仅靠 props 控制内容与样式；render 时自注入 DeckKit 基座样式。
   迁移：连同 DeckKit.jsx 复制即可；本工程用 window 暴露，标准工程改为 import/export。

   ── 可调参数（Props） ──────────────────────────────────────────────────────
   | prop        | 类型                          | 默认值 | 说明                              |
   | items       | Item[]                        | 见下   | 数据源（每条 = 一个增量分项）     |
   | itemCount   | number (3–6)                  | 6      | 实际展示的分项数（截取）          |
   | showConnector | boolean                     | true   | 是否显示阶梯连接线                |
   | showTotal   | boolean                       | true   | 是否显示「合计」汇总柱            |
   | focus       | boolean                       | true   | 是否高亮某一分项                  |
   | focusIndex  | number (0-based)              | 0      | 高亮第几个分项                    |
   | labelType   | 'number'|'symbol'|'keyword'   | number | 角标样式                          |
   | showAside   | boolean                       | true   | 是否显示「构成解读」装饰卡        |
   | badge       | string                        | '10'   | 页眉编号徽标                      |
   | theme       | Partial<DeckTheme>            | —      | 设计令牌覆盖                      |
   Item = { cn:string, en:string, value:number }   value = 该分项贡献的增量
   ========================================================================== */
/* ── 页面属性契约 · defaultProps ──────────────────────────────────────────
   本页全部可见文案 / 数据 / 图片槽默认值集中于此，直接编辑即可换内容；
   组件内部以 { ...defaultProps, ...props } 合并，外部传同名 props 逐项覆盖。 */
export const defaultProps = {
  itemCount: 6,
  showConnector: true,
  showTotal: true,
  focus: true,
  focusIndex: 0,
  labelType: 'number',
  showAside: true,
  badge: '10',
  unit: '亿美元',
  items: [
      { cn:'大模型',     en:'Foundation', value:380 },
      { cn:'AI 基础设施', en:'Infra',      value:170 },
      { cn:'应用层',     en:'Application', value:150 },
      { cn:'企业服务',   en:'Enterprise', value:110 },
      { cn:'数据与算力', en:'Data/Compute', value:90 },
      { cn:'其它赛道',   en:'Others',     value:70 },
    ],
};

function SlideWaterfall(props){
  useDeckStyles(props.theme);
  const T = (deckTheme ? deckTheme(props.theme) : {});
  const ACC = T.accent || '#46e3c6';
  const BLUE = T.blue || '#4a86ff';

  const {
    itemCount, showConnector, showTotal, focus, focusIndex, labelType, showAside,
    badge, unit, items,
  } = { ...defaultProps, ...props };

  const shown = items.slice(0, Math.max(3, Math.min(itemCount, items.length)));
  const fIdx = Math.max(0, Math.min(focusIndex, shown.length - 1));
  const total = shown.reduce((a,b)=>a+b.value, 0);
  const lbl = (i)=> deckLabel(labelType, i, { keyword:'SEG' });

  // 累计：每个增量柱 from cumPrev -> cumPrev+value
  let cum = 0;
  const bars = shown.map((d)=>{ const from=cum; cum+=d.value; return { ...d, from, to:cum }; });
  const cols = bars.length + (showTotal ? 1 : 0);

  // 图表几何
  const W = 1660, H = 460, padL = 70, padR = 30, padT = 56, padB = 80;
  const plotW = W - padL - padR, plotH = H - padT - padB;
  const maxV = niceMax(total);
  const band = plotW / cols;
  const barW = Math.min(150, band * 0.56);
  const xCenter = (i)=> padL + band*i + band/2;
  const yAt = (v)=> padT + plotH - (v/maxV)*plotH;

  return (
    <SlideShell orbs={[{ w:520, h:520, right:-160, top:-150,
        color:`radial-gradient(circle at 50% 50%, ${hexA(BLUE,.20)}, ${hexA(BLUE,0)} 70%)` }]}>
      <SlideHead no={badge} en="Funding Waterfall" cn="资金瀑布 · 总额构成"
        badge={labelType==='keyword'?'FLOW':labelType==='symbol'?'◆':badge} />

      <div style={{flex:'1 1 0', minHeight:0, display:'flex', flexDirection:'column', marginTop:26}}>
        <div className="dk-glass dk-anim d1" style={{flex:'1 1 0', minHeight:0, borderRadius:'var(--dk-radius)',
              padding:'24px 40px 14px', position:'relative', display:'flex', flexDirection:'column'}}>
          <div style={{display:'flex', justifyContent:'space-between', alignItems:'baseline', padding:'0 24px', marginBottom:2}}>
            <span style={{fontSize:'var(--type-sub)', fontWeight:700}}>各赛道资金累积构成</span>
            <span style={{fontFamily:'var(--font-mono)', fontSize:'var(--type-tiny)', color:'var(--ink-faint)'}}>单位 · {unit}　合计 ${total}{unit==='亿美元'?'亿':''}</span>
          </div>

          <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" style={{width:'100%', flex:'1 1 0', minHeight:0, display:'block'}}>
            <defs>
              <linearGradient id="wfBar" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={BLUE} stopOpacity="0.95" />
                <stop offset="100%" stopColor={BLUE} stopOpacity="0.55" />
              </linearGradient>
              <linearGradient id="wfTotal" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={ACC} stopOpacity="1" />
                <stop offset="100%" stopColor={ACC} stopOpacity="0.55" />
              </linearGradient>
            </defs>

            {/* 网格 + 左轴 */}
            {[0,0.25,0.5,0.75,1].map((g,i)=>{
              const y = padT + plotH - g*plotH;
              return (<g key={i}>
                <line x1={padL} y1={y} x2={W-padR} y2={y} stroke="rgba(255,255,255,.1)" strokeWidth="1" />
                <text x={padL-16} y={y+6} textAnchor="end" fontFamily="var(--font-mono)" fontSize="20" fill="rgba(255,255,255,.4)">{Math.round(g*maxV)}</text>
              </g>);
            })}

            {/* 连接线（阶梯） */}
            {showConnector && bars.map((b,i)=> i<bars.length-1 ? (
              <line key={i} x1={xCenter(i)+barW/2} y1={yAt(b.to)} x2={xCenter(i+1)-barW/2} y2={yAt(b.to)}
                stroke="rgba(255,255,255,.32)" strokeWidth="2" strokeDasharray="2 6" />
            ) : (showTotal &&
              <line key={i} x1={xCenter(i)+barW/2} y1={yAt(b.to)} x2={xCenter(cols-1)-barW/2} y2={yAt(b.to)}
                stroke={hexA(ACC,.4)} strokeWidth="2" strokeDasharray="2 6" />
            ))}

            {/* 增量柱 */}
            {bars.map((b,i)=>{
              const hot = focus && i===fIdx;
              const y = yAt(b.to), h = yAt(b.from)-yAt(b.to);
              return (<g key={i}>
                <rect x={xCenter(i)-barW/2} y={y} width={barW} height={Math.max(2,h)} rx="8"
                  fill={hot?'url(#wfTotal)':'url(#wfBar)'} opacity={hot?1:.92}
                  style={{filter: hot?`drop-shadow(0 0 22px ${hexA(ACC,.6)})`:'none'}} />
                <text x={xCenter(i)} y={y-12} textAnchor="middle" fontFamily="var(--font-display)" fontWeight="900"
                  fontSize={hot?30:24} fill={hot?ACC:'#fff'}>+{b.value}</text>
              </g>);
            })}

            {/* 合计柱 */}
            {showTotal && (()=>{ const x=xCenter(cols-1); return (
              <g>
                <rect x={x-barW/2} y={yAt(total)} width={barW} height={plotH*(total/maxV)} rx="8" fill="url(#wfTotal)"
                  style={{filter:`drop-shadow(0 0 24px ${hexA(ACC,.5)})`}} />
                <text x={x} y={yAt(total)-12} textAnchor="middle" fontFamily="var(--font-display)" fontWeight="900" fontSize="32" fill={ACC}>{total}</text>
              </g>);})()}

            {/* X 轴标签 + 角标 */}
            {bars.map((b,i)=>{
              const hot = focus && i===fIdx;
              return (<g key={i}>
                <text x={xCenter(i)} y={padT+plotH+34} textAnchor="middle" fontFamily="var(--font-cn)" fontWeight="700"
                  fontSize={shown.length<=5?24:20} fill={hot?ACC:'rgba(255,255,255,.78)'}>{b.cn}</text>
                <text x={xCenter(i)} y={padT+plotH+62} textAnchor="middle" fontFamily="var(--font-mono)" fontSize="15"
                  fill="rgba(255,255,255,.4)">{lbl(i)}</text>
              </g>);
            })}
            {showTotal && <text x={xCenter(cols-1)} y={padT+plotH+34} textAnchor="middle" fontFamily="var(--font-cn)" fontWeight="800" fontSize="24" fill={ACC}>合计</text>}
          </svg>
        </div>

        {/* 底部：解读卡 + 头条数字 */}
        <div style={{display:'flex', gap:22, marginTop:18, alignItems:'stretch'}}>
          {showAside && (
            <div className="dk-glass-dark dk-anim d2" style={{flex:'1 1 0', borderRadius:22, padding:'22px 30px', display:'flex', gap:22, alignItems:'center'}}>
              <span style={{flexShrink:0, fontFamily:'var(--font-mono)', fontSize:14, letterSpacing:'.12em', color:ACC, writingMode:'vertical-rl', textOrientation:'upright'}}>构成</span>
              <p style={{fontSize:'var(--type-small)', lineHeight:1.55, color:'rgba(255,255,255,.86)', textWrap:'pretty'}}>
                <b style={{color:'#fff'}}>{shown[0].cn}</b>单赛道即贡献近 <b style={{color:ACC}}>{Math.round(shown[0].value/total*100)}%</b> 资金，
                叠加基础设施层后过半；全年合计达 <b style={{color:'#fff'}}>${total} {unit}</b>，结构高度向头部赛道倾斜。
              </p>
            </div>
          )}
          {[{v:String(total),u:unit,l:'全年合计'},{v:String(shown[0].value),u:unit,l:shown[0].cn},{v:Math.round(shown[0].value/total*100)+'%',u:'占比',l:'头部赛道份额'}].map((s,i)=>(
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

export default SlideWaterfall;

/* ── 模板参数 schema（自描述 · 迁移即带控件；Tweaks 由此自动生成） ── */
export const slideSpec = { defaults: defaultProps, slot:'waterfall', name:'资金瀑布 · Waterfall', controls:[
  { prop:'itemCount', type:'slider', label:'数量', default:6, min:3, max:6, step:1 },
  { prop:'showConnector', type:'toggle', label:'连接线', default:true },
  { prop:'showTotal', type:'toggle', label:'合计柱', default:true },
  { prop:'showAside', type:'toggle', label:'装饰文案', default:true },
  { prop:'labelType', type:'labelType', label:'标签类型', default:'数字' },
  { prop:'focus', type:'focus', label:'重点信息 Focus', default:true },
  { prop:'focusIndex', type:'slider', label:'焦点序号', default:0, min:0, max:(p)=>p.itemCount-1, maxFromKey:'itemCount', maxFromKeyOffset:-1, displayOffset:1, step:1, showIf:(p)=>p.focus },
]};
