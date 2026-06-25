import { useDeckStyles, deckTheme, deckLabel, SlideShell, SlideHead } from './DeckKit.jsx';
/* ============================================================================
   SlideOrbit — 环形纪程（极坐标时间轴 · 扇形放射 / 整环 两种形态）
   独立组件：仅靠 props 控制内容与样式；render 时自注入 DeckKit 基座样式。
   与 Timeline（直轴单点错位卡）、Phases（甘特跨度条）、Journey（照片钉轴）、
   Era（左脊柱分期簇）刻意区分：本页把里程碑摆上「极坐标」—— 自一处枢轴扇形放射，
   或沿整环均布，辐条连向各自卡片，呈放射状年度纪程。
   采用固定画布（1640×700）内绝对定位，SVG 辐条与 HTML 卡片像素对齐（deck-stage 整体缩放）。

   ── 可调参数（Props） ──────────────────────────────────────────────────────
   | prop          | 类型                          | 默认值 | 说明                            |
   | events        | Event[]                       | 见下   | 里程碑数据源（按时序）          |
   | itemCount     | number (3–7)                  | 6      | 展示节点数（截取）              |
   | chartType     | '扇形' | '整环'               | 扇形   | 排布形态                        |
   | showSpokes    | boolean                       | true   | 辐条连线                        |
   | focus         | boolean                       | true   | 高亮某一节点                    |
   | focusIndex    | number (0-based)              | 0      | 高亮第几个                      |
   | labelType     | 'number'|'symbol'|'keyword'   | number | 节点徽标样式                    |
   | showAside     | boolean                       | true   | 圆心 / 枢轴文案（装饰）         |
   | head/hubText  | …                             | 见下   | 页眉 / 枢轴标题                 |
   | theme         | Partial<DeckTheme>            | —      | 设计令牌覆盖                    |
   Event = { date, title, text, tone:'acc'|'blue'|'violet'|'warn' }
   ========================================================================== */
/* ── 页面属性契约 · defaultProps ──────────────────────────────────────────
   本页全部可见文案 / 数据 / 图片槽默认值集中于此，直接编辑即可换内容；
   组件内部以 { ...defaultProps, ...props } 合并，外部传同名 props 逐项覆盖。 */
export const defaultProps = {
  itemCount: 6,
  chartType: '扇形',
  showSpokes: true,
  focus: true,
  focusIndex: 0,
  labelType: 'number',
  showAside: true,
  hubText: { big:'2024', sub:'年度纪程' },
  head: { no:'08', en:'Orbit · Milestones', cn:'环形纪程 · 资本年轮' },
  events: [
      { date:'02', title:'要约收购', text:'OpenAI 早期股东要约，估值约 860 亿$', tone:'blue' },
      { date:'05', title:'xAI B 轮', text:'募资 60 亿$，投后约 240 亿$', tone:'acc' },
      { date:'06', title:'战略加注', text:'Anthropic 获亚马逊追加投资', tone:'violet' },
      { date:'09', title:'Databricks', text:'J 轮约 100 亿$，估值 620 亿$', tone:'acc' },
      { date:'10', title:'OpenAI 新轮', text:'66 亿$，估值跃至 1570 亿$', tone:'blue' },
      { date:'12', title:'Safe SI', text:'种子轮即募 10 亿$', tone:'warn' },
      { date:'年末', title:'结构跃迁', text:'全年 ≥1 亿$ 事件 97 笔', tone:'acc' },
    ],
};

function SlideOrbit(props){
  useDeckStyles(props.theme);
  const T = (deckTheme ? deckTheme(props.theme) : {});
  const ACC = T.accent || '#46e3c6';
  const BLUE = T.blue || '#4a86ff';
  const VIO = T.violet || '#9f7bff';
  const WARN = T.warn || '#ffb27a';
  const navy = T.navy900 || '#050b22';
  const TONE = { acc:ACC, blue:BLUE, violet:VIO, warn:WARN };

  const {
    itemCount, chartType, showSpokes, focus, focusIndex, labelType, showAside,
    hubText, head, events,
  } = { ...defaultProps, ...props };

  const data = events.slice(0, Math.max(3, Math.min(itemCount, events.length)));
  const n = data.length;
  const fIdx = Math.max(0, Math.min(focusIndex, n - 1));
  const lbl = (i)=> deckLabel(labelType, i, { keyword:'M' });

  const W = 1640, H = 700;
  const ring = chartType === '整环';
  const cx = W/2, cy = ring ? H/2 : H + 116;
  const R = ring ? 232 : 548;
  const cardR = ring ? R + 168 : R + 150;
  const deg = (a)=> a*Math.PI/180;
  const at = (r,a)=> [cx + r*Math.cos(deg(a)), cy + r*Math.sin(deg(a))];
  // 角度：整环 360° 均布（自顶顺时针）；扇形以 270°(正上) 为中、±74° 放射
  const angle = (i)=> ring ? (-90 + i*(360/n)) : (n>1 ? (196 + i*(148/(n-1))) : 270);
  const samp = (r,a0,a1,steps)=>{ const pts=[]; const N=Math.max(2,steps); for(let k=0;k<=N;k++){ const a=deg(a0+(a1-a0)*k/N); pts.push(`${cx+r*Math.cos(a)},${cy+r*Math.sin(a)}`);} return 'M '+pts.join(' L '); };

  return (
    <SlideShell orbs={[{ w:560, h:560, left:'50%', top: ring?'52%':'120%',
        color:`radial-gradient(circle at 50% 50%, ${hexA(BLUE,.16)}, ${hexA(BLUE,0)} 66%)` }]}>
      <SlideHead no={head.no} en={head.en} cn={head.cn} badge={head.no} />

      <div className="dk-anim d1" style={{flex:'1 1 0', minHeight:0, position:'relative', marginTop:8}}>
        <div style={{position:'absolute', left:'50%', top:'50%', transform:'translate(-50%,-50%)', width:W, height:H}}>
          <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} style={{position:'absolute', inset:0}}>
            <defs>
              <linearGradient id="orbitArc" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0" stopColor={hexA(ACC,.2)} /><stop offset=".5" stopColor={hexA(ACC,.6)} /><stop offset="1" stopColor={hexA(BLUE,.25)} />
              </linearGradient>
            </defs>
            {/* 轨道 */}
            {ring
              ? <circle cx={cx} cy={cy} r={R} fill="none" stroke="url(#orbitArc)" strokeWidth="3" strokeDasharray="2 9" />
              : <path d={samp(R,208,332,120)} fill="none" stroke="url(#orbitArc)" strokeWidth="3" strokeDasharray="2 9" />}
            {/* 辐条 + 节点 */}
            {data.map((e,i)=>{
              const a = angle(i); const col = TONE[e.tone] || ACC;
              const [nx,ny] = at(R, a); const [hx,hy] = at(ring?40:0, a);
              const hot = focus && i===fIdx; const dim = focus && i!==fIdx;
              return (
                <g key={i} opacity={dim?0.5:1}>
                  {showSpokes && <line x1={hx} y1={hy} x2={nx} y2={ny} stroke={hot?col:'rgba(255,255,255,.16)'} strokeWidth={hot?3:1.5} />}
                  <circle cx={nx} cy={ny} r={hot?20:15} fill={hot?col:navy} stroke={col} strokeWidth="3"
                          style={{filter: hot?`drop-shadow(0 0 16px ${hexA(col,.8)})`:'none'}} />
                  <text x={nx} y={ny+(hot?6:5)} textAnchor="middle" fontFamily="var(--font-display)" fontWeight="900"
                        fontSize={hot?17:13} fill={hot?navy:col}>{lbl(i)}</text>
                </g>
              );
            })}
            {/* 圆心枢轴（整环模式） */}
            {ring && (
              <g>
                <circle cx={cx} cy={cy} r={R-150} fill="rgba(5,11,34,.5)" stroke="rgba(255,255,255,.12)" strokeWidth="1" />
                <text x={cx} y={cy-2} textAnchor="middle" fontFamily="var(--font-display)" fontWeight="900" fontSize="64" fill="#fff">{hubText.big}</text>
                <text x={cx} y={cy+36} textAnchor="middle" fontFamily="var(--font-cn)" fontWeight="700" fontSize="24" fill="var(--ink-dim)">{hubText.sub}</text>
              </g>
            )}
          </svg>

          {/* 事件卡（HTML 绝对定位，与 SVG 像素对齐） */}
          {data.map((e,i)=>{
            const a = angle(i); const col = TONE[e.tone] || ACC;
            const [cxp,cyp] = at(cardR, a);
            const hot = focus && i===fIdx; const dim = focus && i!==fIdx;
            return (
              <div key={i} style={{position:'absolute', left:cxp, top:cyp, width:236, transform:'translate(-50%,-50%)',
                    opacity:dim?0.55:1, transition:'opacity .2s'}}>
                <div style={{borderRadius:16, padding:'14px 18px', textAlign:'center',
                      background: hot?hexA(col,.14):'rgba(255,255,255,.05)',
                      border:`1px solid ${hot?col:'rgba(255,255,255,.14)'}`,
                      boxShadow: hot?`0 18px 44px ${hexA(col,.32)}`:'0 14px 32px rgba(3,8,30,.4)',
                      backdropFilter:'blur(10px)'}}>
                  <div style={{fontFamily:'var(--font-mono)', fontSize:13, fontWeight:700, letterSpacing:'.1em', color: hot?col:'var(--ink-faint)'}}>{e.date}</div>
                  <div style={{fontFamily:'var(--font-cn)', fontWeight:900, fontSize:'var(--type-small)', color: hot?'#fff':'rgba(255,255,255,.92)', lineHeight:1.1, marginTop:4}}>{e.title}</div>
                  <div style={{fontSize:'var(--type-tiny)', lineHeight:1.4, color:'var(--ink-dim)', marginTop:5, textWrap:'pretty'}}>{e.text}</div>
                </div>
              </div>
            );
          })}

          {/* 枢轴文案（扇形模式底部） */}
          {!ring && showAside && (
            <div style={{position:'absolute', left:'50%', bottom:6, transform:'translateX(-50%)', textAlign:'center'}}>
              <div style={{fontFamily:'var(--font-display)', fontWeight:900, fontSize:64, color:ACC, lineHeight:.9}}>{hubText.big}</div>
              <div style={{fontFamily:'var(--font-cn)', fontWeight:700, fontSize:'var(--type-small)', color:'var(--ink-dim)', marginTop:2}}>{hubText.sub}</div>
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

export default SlideOrbit;

/* ── 模板参数 schema（自描述 · 迁移即带控件；Tweaks 由此自动生成） ── */
export const slideSpec = { defaults: defaultProps, slot:'orbit', name:'环形纪程 · Orbit', controls:[
  { prop:'itemCount', type:'slider', label:'数量', default:6, min:3, max:7, step:1, desc:'节点数' },
  { prop:'chartType', type:'radio', label:'图表类型', default:'扇形', options:['扇形','整环'] },
  { prop:'showSpokes', type:'toggle', label:'辐条连线', default:true },
  { prop:'showAside', type:'toggle', label:'装饰文案', default:true, desc:'枢轴文案' },
  { prop:'labelType', type:'labelType', label:'标签类型', default:'数字' },
  { prop:'focus', type:'focus', label:'重点信息 Focus', default:true },
  { prop:'focusIndex', type:'slider', label:'焦点序号', default:0, min:0, max:(p)=>p.itemCount-1, maxFromKey:'itemCount', maxFromKeyOffset:-1, displayOffset:1, step:1, showIf:(p)=>p.focus },
]};
