import { useDeckStyles, deckTheme, deckLabel, SlideShell } from './DeckKit.jsx';
/* ============================================================================
   SlideHero — 核心大数字（单一巨号数字 · 主张 + 支撑指标轨）
   独立组件：仅靠 props 控制内容与样式；render 时自注入 DeckKit 基座样式。
   与 SlideStat（六块等大 KPI 砖网格）刻意区分：本页只突出「一个」核心数字，
   占据画面主体，配一句主张与底部 0–3 个支撑指标，作节奏上的「重音」页。

   ── 可调参数（Props） ──────────────────────────────────────────────────────
   | prop         | 类型                          | 默认值 | 说明                              |
   | value        | string                        | '970'  | 主数字                            |
   | unit         | string                        | '亿$'  | 主数字单位                        |
   | label        | string                        | 见下   | 主数字标签                        |
   | statement    | string                        | 见下   | 主张 / 解读句                     |
   | supports     | {value,unit,label}[]          | 见下   | 支撑指标数据源                    |
   | supportCount | number (0–3)                  | 3      | 实际展示的支撑指标数（截取）      |
   | accentNumber | boolean                       | false  | 主数字用强调色（关则金属字）      |
   | showGhost    | boolean                       | true   | 背景巨号幽灵数字（装饰文案）      |
   | focus        | boolean                       | true   | 是否高亮某个支撑指标              |
   | focusIndex   | number (0-based)              | 0      | 高亮第几个支撑指标                |
   | labelType    | 'number'|'symbol'|'keyword'   | number | 支撑指标前缀样式                  |
   | badge        | string                        | '08'   | 顶部编号徽标                      |
   | kicker       | string                        | 见下   | 顶部小标（mono）                  |
   | theme        | Partial<DeckTheme>            | —      | 设计令牌覆盖                      |
   ========================================================================== */
/* ── 页面属性契约 · defaultProps ──────────────────────────────────────────
   本页全部可见文案 / 数据 / 图片槽默认值集中于此，直接编辑即可换内容；
   组件内部以 { ...defaultProps, ...props } 合并，外部传同名 props 逐项覆盖。 */
export const defaultProps = {
  value: '970',
  unit: '亿$',
  label: '2024 全年 AI 风投总额',
  statement: '相当于美国全年风险投资的近三分之一 —— 资本以前所未有的密度，押注少数能讲好 AGI 故事的团队。',
  supportCount: 3,
  accentNumber: false,
  showGhost: true,
  focus: true,
  focusIndex: 0,
  labelType: 'number',
  badge: '08',
  kicker: 'HEADLINE FIGURE',
  supports: [
      { value:'97',   unit:'笔', label:'单笔≥1亿美元事件' },
      { value:'43.3', unit:'%', label:'大模型赛道占比' },
      { value:'63.9', unit:'%', label:'旧金山湾区集中度' },
    ],
};

function SlideHero(props){
  useDeckStyles(props.theme);
  const T = (deckTheme ? deckTheme(props.theme) : {});
  const ACC = T.accent || '#46e3c6';
  const BLUE = T.blue || '#4a86ff';

  const {
    value, unit, label, statement, supportCount, accentNumber, showGhost,
    focus, focusIndex, labelType, badge, kicker, supports,
  } = { ...defaultProps, ...props };

  const data = supports.slice(0, Math.max(0, Math.min(supportCount, supports.length)));
  const fIdx = Math.max(0, Math.min(focusIndex, Math.max(0, data.length - 1)));
  const lbl = (i)=> deckLabel(labelType, i, { keyword:'PT' });

  return (
    <SlideShell orbs={[
      { w:760, h:760, left:'22%', top:'8%', color:`radial-gradient(circle at 50% 50%, ${hexA(ACC,.16)}, ${hexA(ACC,0)} 68%)` },
      { w:460, h:460, right:-140, bottom:-160, color:`radial-gradient(circle at 50% 50%, ${hexA(BLUE,.26)}, ${hexA(BLUE,0)} 70%)` },
    ]}>
      {/* 顶部小标 */}
      <div className="dk-anim" style={{display:'flex', alignItems:'center', gap:18, flexShrink:0}}>
        <span style={{fontFamily:'var(--font-display)', fontWeight:900, fontSize:'var(--type-sub)', color:ACC}}>{badge}</span>
        <span style={{height:2, width:72, background:ACC}}></span>
        <span style={{fontFamily:'var(--font-mono)', fontSize:'var(--type-tiny)', letterSpacing:'.28em', color:'var(--ink-dim)'}}>{kicker}</span>
      </div>

      {/* 主体：巨号数字 */}
      <div style={{flex:'1 1 0', minHeight:0, display:'flex', flexDirection:'column', justifyContent:'center', position:'relative'}}>
        {showGhost && (
          <div className="dk-anim" aria-hidden="true" style={{position:'absolute', right:0, top:'50%', transform:'translateY(-54%)',
              fontFamily:'var(--font-display)', fontWeight:900, fontSize:560, lineHeight:.8, letterSpacing:'-.02em',
              color:'transparent', WebkitTextStroke:`2px ${hexA('#ffffff',.055)}`, pointerEvents:'none', whiteSpace:'nowrap'}}>{value}</div>
        )}

        <div style={{position:'relative', display:'flex', alignItems:'flex-end', gap:24, flexWrap:'wrap'}}>
          <span style={{fontFamily:'var(--font-display)', fontWeight:900,
              fontSize:380, lineHeight:.78, letterSpacing:'-.02em',
              color: accentNumber ? ACC : undefined,
              textShadow: accentNumber ? `0 0 70px ${hexA(ACC,.45)}` : 'none',
              ...(accentNumber ? {} : chromeStyle())}}>{value}</span>
          <span style={{fontFamily:'var(--font-display)', fontWeight:800, fontSize:88, color:'var(--ink-dim)', marginBottom:40}}>{unit}</span>
        </div>

        <div className="dk-anim d2" style={{position:'relative', marginTop:18, display:'flex', alignItems:'baseline', gap:24, flexWrap:'wrap'}}>
          <span style={{fontFamily:'var(--font-cn)', fontWeight:900, fontSize:'var(--type-h2)', color:'#fff', whiteSpace:'nowrap'}}>{label}</span>
        </div>

        <p className="dk-anim d3" style={{position:'relative', marginTop:22, maxWidth:1180, fontFamily:'var(--font-cn)',
            fontSize:'var(--type-sub)', lineHeight:1.5, color:'var(--ink-dim)', textWrap:'pretty'}}>{statement}</p>
      </div>

      {/* 底部支撑指标轨 */}
      {data.length > 0 && (
        <div className="dk-anim d4" style={{flexShrink:0, display:'grid', gridTemplateColumns:`repeat(${data.length}, 1fr)`, gap:20,
              borderTop:`1px solid rgba(255,255,255,.14)`, paddingTop:26}}>
          {data.map((s,i)=>{
            const hot = focus && i===fIdx;
            return (
              <div key={i} style={{display:'flex', alignItems:'center', gap:18,
                    padding:'14px 22px', borderRadius:16,
                    background: hot?hexA(ACC,.12):'transparent', border:`1px solid ${hot?hexA(ACC,.5):'transparent'}`}}>
                <span style={{flexShrink:0, fontFamily:'var(--font-mono)', fontSize:14, width:34, height:34, borderRadius:9,
                    display:'inline-flex', alignItems:'center', justifyContent:'center', color: hot?ACC:'var(--ink-faint)',
                    background:'rgba(255,255,255,.06)', border:`1px solid ${hot?hexA(ACC,.5):'rgba(255,255,255,.16)'}`}}>{lbl(i)}</span>
                <div style={{minWidth:0}}>
                  <div style={{display:'flex', alignItems:'baseline', gap:6}}>
                    <span style={{fontFamily:'var(--font-display)', fontWeight:900, fontSize:48, lineHeight:.9,
                        color: hot?ACC:'#fff'}}>{s.value}</span>
                    <span style={{fontSize:'var(--type-tiny)', fontWeight:700, color:'var(--ink-dim)'}}>{s.unit}</span>
                  </div>
                  <div style={{fontSize:'var(--type-tiny)', color:'var(--ink-dim)', marginTop:4, whiteSpace:'nowrap'}}>{s.label}</div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </SlideShell>
  );

  function chromeStyle(){
    return { background:'linear-gradient(176deg,#fff 0%,#f0f5ff 30%,#c2d2ff 52%,#8ea7f4 64%,#e9f0ff 80%,#fff 100%)',
      WebkitBackgroundClip:'text', backgroundClip:'text', color:'transparent', WebkitTextFillColor:'transparent',
      filter:'drop-shadow(0 10px 24px rgba(4,14,60,.45))' };
  }
  function hexA(hex, a){
    if(!hex || hex[0] !== '#') return hex;
    const n = hex.slice(1);
    const f = n.length===3 ? n.split('').map(c=>c+c).join('') : n;
    const r = parseInt(f.slice(0,2),16), g = parseInt(f.slice(2,4),16), b = parseInt(f.slice(4,6),16);
    return `rgba(${r},${g},${b},${a})`;
  }
}

export default SlideHero;

/* ── 模板参数 schema（自描述 · 迁移即带控件；Tweaks 由此自动生成） ── */
export const slideSpec = { defaults: defaultProps, slot:'hero', name:'核心大数字 · Big Number', controls:[
  { prop:'supportCount', type:'slider', label:'数量', default:3, min:0, max:3, step:1, desc:'底部支撑指标数' },
  { prop:'accentNumber', type:'toggle', label:'强调主数字', default:false, desc:'关则金属字' },
  { prop:'showGhost', type:'toggle', label:'装饰文案', default:true, desc:'背景巨号幽灵数字' },
  { prop:'labelType', type:'labelType', label:'标签类型', default:'数字' },
  { prop:'focus', type:'focus', label:'重点信息 Focus', default:true },
  { prop:'focusIndex', type:'slider', label:'焦点序号', default:0, min:0, max:(p)=>Math.max(0,p.supportCount-1), maxFromKey:'supportCount', maxFromKeyOffset:-1, displayOffset:1, step:1, showIf:(p)=>p.focus && p.supportCount>0 },
]};
