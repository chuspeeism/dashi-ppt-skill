import { useDeckStyles, deckTheme } from './DeckKit.jsx';
/* ============================================================================
   SlideSplit — 斜切分屏（对角剖面 · 巨号数字 + 主张 · 极简低卡片）
   独立组件：仅靠 props 控制内容与样式；render 时自注入 DeckKit 基座样式。
   非卡片 · 以「对角 clip-path 色场」为构图主装置：一条贯穿斜线把画面切成两半，
   一侧承载金属巨号数字 + 主张句，另一侧沿斜边排一列细线支撑指标（无卡片框）。

   ── 区别于同类既有页 ──────────────────────────────────────────────────────
   Hero(左对齐单巨号+轨)、Mega(海报居中)、Versus(双号头对头)、Scoreboard(LED 网格) →
   本页是「非对称对角分屏」：斜切色场 + 贴边巨号 + 斜边支撑轨，构图张力来自对角线本身。

   ── 可调参数（Props） ──────────────────────────────────────────────────────
   | prop          | 类型                     | 默认 | 说明                          |
   | supportCount  | number (0–4)             | 3    | 支撑指标条数（截取 supports） |
   | splitDir      | '左下'|'右下'            | '左下' | 斜切方向（巨号所在侧）       |
   | showGhost     | boolean                  | true | 幽灵大字（装饰）              |
   | focus         | boolean                  | true | 巨号辉光强调                  |
   | focusIndex    | number                   | 0    | 高亮第几条支撑指标            |
   | labelType     | number|symbol|keyword    | number | 支撑指标角标样式            |
   | kicker/statement/bigValue/unit/supports | …   | —    | 文案（默认=全年风投总量）     |
   ========================================================================== */
/* ── 页面属性契约 · defaultProps ──────────────────────────────────────────
   本页全部可见文案 / 数据 / 图片槽默认值集中于此，直接编辑即可换内容；
   组件内部以 { ...defaultProps, ...props } 合并，外部传同名 props 逐项覆盖。 */
export const defaultProps = {
  supportCount: 3,
  splitDir: '左下',
  showGhost: true,
  focus: true,
  focusIndex: 0,
  kicker: 'FY2024 · 资本总量',
  statement: '全年流入创历史新高，\nAI 成为美元风投的主航道。',
  bigValue: '970',
  unit: '亿美元',
  ghost: 'CAPITAL',
  supports: [
      { label:'占美国 VC 总额', value:'≈ 1/3' },
      { label:'≥1 亿美元事件', value:'97 笔' },
      { label:'平均单笔规模', value:'≈ 10 亿' },
      { label:'同比', value:'+ 显著' },
    ],
};

function SlideSplit(props){
  useDeckStyles(props.theme);
  const T = (deckTheme ? deckTheme(props.theme) : {});
  const ACC = T.accent || '#46e3c6';
  const BLUE = T.blue || '#4a86ff';

  const {
    supportCount, splitDir, showGhost, focus, focusIndex, kicker, statement,
    bigValue, unit, ghost, supports,
  } = { ...defaultProps, ...props };

  const sym = ['◆','▲','●','■'];
  const shown = supports.slice(0, Math.max(0, Math.min(supportCount, supports.length)));
  const fIdx = Math.max(0, Math.min(focusIndex, shown.length - 1));
  const left = splitDir === '左下';
  // 对角 clip：左下三角 或 右下三角
  const clip = left
    ? 'polygon(0 0, 64% 0, 38% 100%, 0 100%)'
    : 'polygon(36% 0, 100% 0, 100% 100%, 62% 100%)';

  return (
    <div className="dk-scope-fill" style={{position:'relative', width:'100%', height:'100%', overflow:'hidden'}}>
      {/* 斜切色场 */}
      <div className="dk-anim" style={{position:'absolute', inset:0, clipPath:clip,
          background:`linear-gradient(150deg, ${hexA(BLUE,.32)}, ${hexA('#0a1230',.0)} 78%)`,
          borderRight:'none'}}></div>
      {/* 斜边亮线 */}
      <svg viewBox="0 0 1920 1080" preserveAspectRatio="none" style={{position:'absolute', inset:0, width:'100%', height:'100%', pointerEvents:'none'}}>
        <line x1={left?1228:691} y1="0" x2={left?730:1190} y2="1080"
              stroke={hexA(ACC,.55)} strokeWidth="2" />
      </svg>

      {/* 幽灵大字 */}
      {showGhost && (
        <div aria-hidden="true" style={{position:'absolute', bottom:-40, [left?'right':'left']:60,
            fontFamily:'var(--font-display)', fontWeight:900, fontSize:300, lineHeight:.8,
            letterSpacing:'.02em', color:'transparent', WebkitTextStroke:`1.5px ${hexA('#fff',.06)}`,
            pointerEvents:'none', zIndex:0}}>{ghost}</div>
      )}

      <div style={{position:'absolute', inset:0, padding:'var(--pad-y) var(--pad-x)',
            display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
        {/* 顶部 kicker */}
        <div className="dk-anim" style={{display:'flex', alignItems:'center', gap:16,
              alignSelf: left?'flex-start':'flex-end'}}>
          <span style={{width:10, height:10, transform:'rotate(45deg)', background:ACC, boxShadow:`0 0 14px ${hexA(ACC,.7)}`}}></span>
          <span style={{fontFamily:'var(--font-mono)', fontSize:'var(--type-tiny)', letterSpacing:'.32em', color:ACC, textTransform:'uppercase'}}>{kicker}</span>
        </div>

        {/* 中部：巨号 + 主张，按方向贴边 */}
        <div style={{flex:'1 1 0', minHeight:0, display:'flex',
              flexDirection: left?'row':'row-reverse', alignItems:'center', gap:70, marginTop:6}}>
          <div style={{flexShrink:0}}>
            <div className="dk-chrome dk-anim d1" style={{fontFamily:'var(--font-display)', fontWeight:900,
                fontSize:360, lineHeight:.86, letterSpacing:'-.02em',
                filter: focus ? `drop-shadow(0 0 60px ${hexA(ACC,.32)})` : 'drop-shadow(0 8px 20px rgba(4,14,60,.45))'}}>{bigValue}</div>
            <div className="dk-anim d2" style={{display:'flex', alignItems:'baseline', gap:14, marginTop:-6}}>
              <span style={{height:3, width:64, background:ACC, alignSelf:'center'}}></span>
              <span style={{fontFamily:'var(--font-cn)', fontWeight:700, fontSize:'var(--type-h2)', color:'#fff'}}>{unit}</span>
            </div>
          </div>
          <p className="dk-anim d3" style={{flex:1, minWidth:0, whiteSpace:'pre-line',
              fontFamily:'var(--font-cn)', fontWeight:800, fontSize:'var(--type-sub)', lineHeight:1.4,
              color:'rgba(255,255,255,.92)', textWrap:'balance',
              textAlign: left?'left':'right'}}>{statement}</p>
        </div>

        {/* 底部：支撑指标轨（细线分隔，无卡片框） */}
        {shown.length > 0 && (
          <div className="dk-anim d4" style={{display:'flex',
                justifyContent: left?'flex-start':'flex-end', gap:0,
                borderTop:`1px solid ${hexA('#fff',.16)}`, paddingTop:24}}>
            {shown.map((s,i)=>{
              const hot = focus && i===fIdx;
              return (
                <div key={i} data-dashi-theme09-split-support="true" style={{display:'flex', flexDirection:'column', gap:8, padding:'0 40px',
                      borderLeft: i? `1px solid ${hexA('#fff',.12)}`:'none', minWidth:230}}>
                  <span style={{display:'flex', alignItems:'center', gap:10, fontFamily:'var(--font-mono)',
                      fontSize:13, letterSpacing:'.14em', color: hot?ACC:'var(--ink-faint)', textTransform:'uppercase'}}>
                    <b style={{color: hot?ACC:'var(--ink-faint)'}}>{lab(i)}</b>{s.label}</span>
                  <span data-dashi-theme09-split-support-value="true" style={{fontFamily:'var(--font-display)', fontWeight:900, fontSize:'var(--type-sub)',
                      color: hot?ACC:'rgba(255,255,255,.82)'}}>{s.value}</span>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );

  function lab(i){
    const t = props.labelType || 'number';
    if(t==='symbol') return sym[i%sym.length]+' ';
    if(t==='keyword') return '· ';
    return String(i+1).padStart(2,'0')+' ';
  }
  function hexA(hex, a){
    if(!hex || hex[0] !== '#') return hex;
    const x = hex.slice(1); const f = x.length===3 ? x.split('').map(c=>c+c).join('') : x;
    return `rgba(${parseInt(f.slice(0,2),16)},${parseInt(f.slice(2,4),16)},${parseInt(f.slice(4,6),16)},${a})`;
  }
}

export default SlideSplit;

/* ── 模板参数 schema（自描述 · 迁移即带控件；Tweaks 由此自动生成） ── */
export const slideSpec = { defaults: defaultProps, slot:'split', name:'斜切分屏 · Split', controls:[
  { prop:'supportCount', type:'slider', label:'支撑指标数量', default:3, min:0, max:4, step:1 },
  { prop:'splitDir', type:'radio', label:'斜切方向', default:'左下', options:['左下','右下'] },
  { prop:'showGhost', type:'toggle', label:'装饰文案', default:true, desc:'幽灵大字' },
  { prop:'labelType', type:'labelType', label:'标签类型', default:'数字' },
  { prop:'focus', type:'focus', label:'重点信息 Focus', default:true },
  { prop:'focusIndex', type:'slider', label:'焦点序号', default:0, min:0, max:(p)=>Math.max(0,p.supportCount-1), maxFromKey:'supportCount', maxFromKeyOffset:-1, displayOffset:1, step:1, showIf:(p)=>p.focus && p.supportCount>0 },
]};
