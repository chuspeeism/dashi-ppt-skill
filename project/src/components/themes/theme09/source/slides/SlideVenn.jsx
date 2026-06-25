import { useDeckStyles, deckTheme, SlideHead } from './DeckKit.jsx';
/* ============================================================================
   SlideVenn — 交集视图（集合叠加 · 交集落点 · 极简低卡片）
   独立组件：仅靠 props 控制内容与样式；render 时自注入 DeckKit 基座样式。
   非卡片 · 用 2–3 个半透明大圆相互叠合表达「条件交集」：各圆瓣写要素名，
   重叠核心区落「交集结论」，右侧一句导读（无卡片框）。

   ── 区别于同类既有页 ──────────────────────────────────────────────────────
   全 deck 首个「集合 / 韦恩图」：以圆的叠合表达「同时具备 → 胜出」，
   与 Quadrant(散点)、Cross(环饼)、Radar(雷达) 的坐标 / 角度叙事完全不同。

   ── 可调参数（Props） ──────────────────────────────────────────────────────
   | prop          | 类型                  | 默认 | 说明                          |
   | setCount      | number (2–3)          | 3    | 集合数量（截取 sets）         |
   | showCore      | boolean               | true | 交集核心结论                  |
   | showAside     | boolean               | true | 右侧导读（装饰）              |
   | focus         | boolean               | true | 高亮某个集合圆                |
   | focusIndex    | number                | 0    | 高亮第几个                    |
   | head/sets/core/aside | …             | —    | 文案（默认=胜出三要素）       |
   ========================================================================== */
/* ── 页面属性契约 · defaultProps ──────────────────────────────────────────
   本页全部可见文案 / 数据 / 图片槽默认值集中于此，直接编辑即可换内容；
   组件内部以 { ...defaultProps, ...props } 合并，外部传同名 props 逐项覆盖。 */
export const defaultProps = {
  setCount: 3,
  showCore: true,
  showAside: true,
  focus: true,
  focusIndex: 0,
  head: { no:'交集', en:'The Intersection', cn:'谁能同时握住三件事' },
  sets: [
      { label:'算力', desc:'稳定的 GPU 与云供给', color: '#4a86ff' },
      { label:'数据', desc:'独占且高质的语料壁垒', color: '#46e3c6' },
      { label:'资本', desc:'可持续的大额弹药', color: '#9f7bff' },
    ],
  core: { tag:'交集 = 胜出位', text:'三者同时具备者，\n才是这轮押注的安全区。' },
  aside: { tag:'READING · 导读', text:'圆越叠合，确定性越高——单点优势难以独自跑赢，结构性的交集才是壁垒。' },
};

function SlideVenn(props){
  useDeckStyles(props.theme);
  const T = (deckTheme ? deckTheme(props.theme) : {});
  const ACC = T.accent || '#46e3c6';
  const BLUE = T.blue || '#4a86ff';
  const VIO  = T.violet || '#9f7bff';

  const {
    setCount, showCore, showAside, focus, focusIndex, head, sets,
    core, aside,
  } = { ...defaultProps, ...props };

  const n = Math.max(2, Math.min(setCount, 3));
  const shown = sets.slice(0, n);
  const fIdx = Math.max(0, Math.min(focusIndex, shown.length - 1));

  // 圆心布局（viewBox 800×620）
  const layout3 = [{cx:300,cy:250},{cx:500,cy:250},{cx:400,cy:420}];
  const layout2 = [{cx:310,cy:320},{cx:490,cy:320}];
  const pos = n===2 ? layout2 : layout3;
  const R = n===2 ? 200 : 185;
  // 名称落在每个圆「外瓣」的厚实区（远离描边/交集），描述移到下方图例，杜绝压边
  const namePos3 = [{x:230,y:212},{x:570,y:212},{x:400,y:500}];
  const namePos2 = [{x:230,y:320},{x:570,y:320}];
  const npos = n===2 ? namePos2 : namePos3;

  return (
    <div style={{position:'relative', width:'100%', height:'100%', overflow:'hidden',
          padding:'var(--pad-y) var(--pad-x)', display:'flex', flexDirection:'column'}}>
      <div className="dk-orb" style={{width:560, height:560, right:-160, bottom:-180,
          background:`radial-gradient(circle at 50% 50%, ${hexA(VIO,.16)}, ${hexA(VIO,0)} 70%)`}}></div>

      <SlideHead no="交集" en={head.en} cn={head.cn} badge="∩" />

      <div style={{flex:'1 1 0', minHeight:0, display:'grid',
            gridTemplateColumns: showAside ? '1.15fr 1fr' : '1fr', gridTemplateRows:'minmax(0,1fr)', gap:76, alignItems:'center', marginTop:10}}>
        {/* 韦恩图 + 图例 */}
        <div className="dk-anim d1" style={{position:'relative', height:'100%', minHeight:0,
              display:'flex', flexDirection:'column'}}>
          <svg viewBox="0 0 800 620" style={{flex:'1 1 0', minHeight:0, width:'100%', overflow:'visible'}}>
            <defs>
              {shown.map((s,i)=>(
                <radialGradient key={i} id={'vg'+i} cx="38%" cy="32%">
                  <stop offset="0%" stopColor={hexA(s.color||BLUE,.46)} />
                  <stop offset="100%" stopColor={hexA(s.color||BLUE,.18)} />
                </radialGradient>
              ))}
            </defs>
            {shown.map((s,i)=>{
              const hot = focus && i===fIdx;
              return (
                <circle key={i} cx={pos[i].cx} cy={pos[i].cy} r={R}
                  fill={'url(#vg'+i+')'} stroke={hexA(s.color||BLUE, hot?.95:.5)}
                  strokeWidth={hot?4:2} style={{mixBlendMode:'screen'}} />
              );
            })}
            {/* 交集核心标记（三圆时居中） */}
            {showCore && (
              <circle cx={n===2?400:400} cy={n===2?320:300} r={n===2?54:60}
                fill={hexA('#fff',.10)} stroke={hexA(ACC,.9)} strokeWidth="2" strokeDasharray="5 6" />
            )}
            {shown.map((s,i)=>(
              <text key={i} x={npos[i].x} y={npos[i].y} textAnchor="middle"
                style={{fontFamily:'var(--font-cn)', fontWeight:900, fontSize:46, fill:'#fff',
                  paintOrder:'stroke', stroke:hexA(T.navy900||'#050b22',.55), strokeWidth:5}}>{s.label}</text>
            ))}
            {showCore && (
              <text x="400" y={n===2?326:306} textAnchor="middle"
                style={{fontFamily:'var(--font-display)', fontWeight:900, fontSize:34, fill:ACC}}>∩</text>
            )}
          </svg>
          {/* 图例：色块 + 名称 + 描述（替代圆内压边文字） */}
          <div style={{flexShrink:0, display:'flex', gap:30, justifyContent:'center', flexWrap:'wrap', marginTop:6}}>
            {shown.map((s,i)=>(
              <div key={i} style={{display:'flex', alignItems:'center', gap:12, minWidth:0}}>
                <span style={{width:14, height:14, borderRadius:4, background:s.color||BLUE, flexShrink:0,
                    boxShadow:`0 0 12px ${hexA(s.color||BLUE,.6)}`}}></span>
                <div style={{minWidth:0}}>
                  <div style={{fontFamily:'var(--font-cn)', fontWeight:900, fontSize:23, color:'#fff', lineHeight:1.1}}>{s.label}</div>
                  <div style={{fontFamily:'var(--font-cn)', fontSize:16, color:'rgba(255,255,255,.6)', lineHeight:1.2}}>{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 右侧：交集结论 + 导读 */}
        {showAside && (
          <div className="dk-anim d2" style={{display:'flex', flexDirection:'column', gap:30}}>
            {showCore && (
              <div>
                <span style={{fontFamily:'var(--font-mono)', fontSize:14, letterSpacing:'.18em', color:ACC, textTransform:'uppercase'}}>{core.tag}</span>
                <p style={{whiteSpace:'pre-line', fontFamily:'var(--font-cn)', fontWeight:900,
                    fontSize:'var(--type-h2)', lineHeight:1.24, color:'#fff', marginTop:14, textWrap:'balance'}}>{core.text}</p>
              </div>
            )}
            <div style={{display:'flex', gap:18, paddingTop:24, borderTop:`1px solid ${hexA('#fff',.14)}`}}>
              <span style={{width:4, alignSelf:'stretch', background:`linear-gradient(180deg,${ACC},${hexA(ACC,.2)})`, flexShrink:0}}></span>
              <div>
                <span style={{fontFamily:'var(--font-mono)', fontSize:13, letterSpacing:'.16em', color:'var(--ink-faint)'}}>{aside.tag}</span>
                <p style={{fontFamily:'var(--font-cn)', fontSize:'var(--type-small)', lineHeight:1.5,
                    color:'var(--ink-dim)', marginTop:8, textWrap:'pretty'}}>{aside.text}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  function hexA(hex, a){
    if(!hex || hex[0] !== '#') return hex;
    const x = hex.slice(1); const f = x.length===3 ? x.split('').map(c=>c+c).join('') : x;
    return `rgba(${parseInt(f.slice(0,2),16)},${parseInt(f.slice(2,4),16)},${parseInt(f.slice(4,6),16)},${a})`;
  }
}

export default SlideVenn;

/* ── 模板参数 schema（自描述 · 迁移即带控件；Tweaks 由此自动生成） ── */
export const slideSpec = { defaults: defaultProps, slot:'venn', name:'交集视图 · Venn', controls:[
  { prop:'setCount', type:'slider', label:'集合数量', default:3, min:2, max:3, step:1 },
  { prop:'showCore', type:'toggle', label:'交集结论', default:true },
  { prop:'showAside', type:'toggle', label:'装饰文案', default:true, desc:'右侧导读' },
  { prop:'focus', type:'focus', label:'重点信息 Focus', default:true },
  { prop:'focusIndex', type:'slider', label:'焦点序号', default:0, min:0, max:(p)=>p.setCount-1, maxFromKey:'setCount', maxFromKeyOffset:-1, displayOffset:1, step:1, showIf:(p)=>p.focus },
]};
