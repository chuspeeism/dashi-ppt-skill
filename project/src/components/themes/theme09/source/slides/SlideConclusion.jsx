import { useDeckStyles, deckTheme, deckLabel, SlideShell, SlideHead } from './DeckKit.jsx';
/* ============================================================================
   SlideConclusion — 核心结论（三条结论 + 一句话总结）
   独立组件：仅靠 props 控制内容与样式；render 时自注入 DeckKit 基座样式。

   ── 可调参数（Props） ──────────────────────────────────────────────────────
   | prop        | 类型                          | 默认值 | 说明                          |
   | items       | Conclusion[]                  | 见下   | 结论条目数据源                |
   | itemCount   | number (1–3)                  | 3      | 展示的结论数                  |
   | focus       | boolean                       | true   | 是否高亮某条                  |
   | focusIndex  | number (0-based)              | 0      | 高亮第几条                    |
   | labelType   | 'number'|'symbol'|'keyword'   | number | 序号样式                      |
   | showAside   | boolean                       | true   | 是否显示「一句话总结」横幅    |
   | summary     | {tag,text}                    | 见下   | 总结横幅内容                  |
   | theme       | Partial<DeckTheme>            | —      | 设计令牌覆盖                  |
   Conclusion = { dim, title, en, desc }
   ========================================================================== */
/* ── 页面属性契约 · defaultProps ──────────────────────────────────────────
   本页全部可见文案 / 数据 / 图片槽默认值集中于此，直接编辑即可换内容；
   组件内部以 { ...defaultProps, ...props } 合并，外部传同名 props 逐项覆盖。 */
export const defaultProps = {
  itemCount: 3,
  focus: true,
  focusIndex: 0,
  labelType: 'number',
  showAside: true,
  items: [
      { dim:'横向', title:'看集中', en:'Concentration',
        desc:'资金高度向头部公司、通用大模型、旧金山湾区集中，「赢家通吃」格局确立。' },
      { dim:'纵向', title:'看节奏', en:'Rhythm',
        desc:'全年「前高后稳」，Q2–Q3 达峰后理性回落，市场从狂热转向分化。' },
      { dim:'结构', title:'看分层', en:'Structure',
        desc:'上游确定性最强、中游竞争最激烈、下游潜力最大但尚需时间验证。' },
    ],
  summary: {
      tag:'一句话总结',
      text:'AI 融资盛宴仍在继续，但音乐的节奏正在变化——资本的下一阶段将从「赌叙事」转向「看兑现」，能把技术转化为可持续收入的公司，才能在退潮后留在牌桌上。',
    },
};

function SlideConclusion(props){
  useDeckStyles(props.theme);
  const T = (deckTheme ? deckTheme(props.theme) : {});
  const ACC = T.accent || '#46e3c6';

  const {
    itemCount, focus, focusIndex, labelType, showAside, items, summary,
  } = { ...defaultProps, ...props };

  const shown = items.slice(0, Math.max(1, Math.min(itemCount, items.length)));
  const fIdx = Math.max(0, Math.min(focusIndex, shown.length - 1));
  const num = (i)=> deckLabel(labelType, i, { keyword:'KEY' });

  return (
    <SlideShell orbs={[{ w:560, h:560, right:-180, top:-140,
        color:'radial-gradient(circle at 50% 50%, rgba(60,120,255,.34), rgba(40,90,230,0) 70%)' }]}>
      <SlideHead no="07" en="Conclusion" cn="核心结论 · 横纵结构"
        badge={labelType==='keyword'?'SUM':labelType==='symbol'?'◆':'07'} />

      <div style={{flex:'1 1 0', minHeight:0, display:'flex', flexDirection:'column', marginTop:28}}>
        <div style={{flex:'1 1 0', minHeight:0, display:'flex', flexDirection:'column', gap:18}}>
          {shown.map((c,i)=>{
            const hot = focus && i===fIdx;
            return (
              <div key={i} className={'dk-anim d'+Math.min(i+1,5)} style={{
                flex:'1 1 0', minHeight:0, position:'relative',
                display:'flex', alignItems:'center', gap:38,
                borderRadius:'var(--dk-radius)', padding:'0 44px',
                background: hot ? 'linear-gradient(120deg, rgba(70,227,198,.12), rgba(255,255,255,.03))' : 'rgba(255,255,255,.03)',
                border:`1px solid ${hot ? hexA(ACC,.45) : 'rgba(255,255,255,.10)'}`,
                boxShadow: hot ? `0 26px 64px ${hexA(ACC,.22)}` : 'none', overflow:'hidden'}}>
                {/* 巨号 */}
                <span aria-hidden="true" style={{flexShrink:0, fontFamily:'var(--font-display)', fontWeight:900,
                    fontSize:124, lineHeight:.8, width:130, textAlign:'center',
                    color:'transparent', WebkitTextStroke:`2px ${hot ? hexA(ACC,.55) : 'rgba(255,255,255,.12)'}`}}>{num(i)}</span>

                {/* 维度徽标 */}
                <div style={{flexShrink:0, display:'flex', flexDirection:'column', alignItems:'center', gap:8, width:120}}>
                  <span style={{fontFamily:'var(--font-cn)', fontWeight:900, fontSize:'var(--type-sub)',
                      color: hot ? ACC : '#fff', letterSpacing:'.14em', writingMode:'vertical-rl', textOrientation:'upright',
                      lineHeight:1}}>{c.dim}</span>
                </div>

                <div style={{width:1, alignSelf:'stretch', margin:'26px 0', background:'rgba(255,255,255,.14)'}}></div>

                {/* 文案 */}
                <div style={{flex:1, minWidth:0}}>
                  <div style={{display:'flex', alignItems:'baseline', gap:16, marginBottom:8}}>
                    <span className={hot?'':'dk-chrome'} style={{fontFamily:'var(--font-cn)', fontWeight:900, fontSize:'var(--type-h2)',
                        lineHeight:1, color: hot ? ACC : undefined}}>{c.title}</span>
                    <span style={{fontFamily:'var(--font-display)', fontWeight:600, fontSize:'var(--type-small)',
                        color:'var(--ink-faint)', letterSpacing:'.04em'}}>{c.en}</span>
                  </div>
                  <p style={{fontSize:'var(--type-small)', lineHeight:1.45, color:'var(--ink-dim)', textWrap:'pretty', maxWidth:1180}}>{c.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* 一句话总结 */}
        {showAside && summary && (
          <div className="dk-glass dk-anim d5" style={{marginTop:20, flexShrink:0, borderRadius:'var(--dk-radius)',
              padding:'26px 38px', display:'flex', alignItems:'center', gap:30, overflow:'hidden', position:'relative',
              boxShadow:`0 26px 70px ${hexA(ACC,.2)}, 0 0 0 2px ${hexA(ACC,.45)}`}}>
            <span style={{position:'absolute', left:-10, top:-30, fontFamily:'var(--font-display)', fontWeight:900,
                fontSize:160, lineHeight:1, color:hexA(ACC,.10)}}>”</span>
            <span style={{flexShrink:0, fontFamily:'var(--font-mono)', fontSize:15, letterSpacing:'.12em', color:ACC,
                writingMode:'vertical-rl', textOrientation:'upright'}}>{summary.tag}</span>
            <p style={{fontSize:'var(--type-sub)', fontWeight:700, lineHeight:1.5, color:'#fff', textWrap:'pretty', zIndex:1}}>{summary.text}</p>
          </div>
        )}
      </div>
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

export default SlideConclusion;

/* ── 模板参数 schema（自描述 · 迁移即带控件；Tweaks 由此自动生成） ── */
export const slideSpec = { defaults: defaultProps, slot:'conclusion', name:'核心结论 · Conclusion', controls:[
  { prop:'itemCount', type:'slider', label:'条目数量', default:3, min:1, max:3, step:1 },
  { prop:'showAside', type:'toggle', label:'装饰文案', default:true },
  { prop:'labelType', type:'labelType', label:'标签类型', default:'数字' },
  { prop:'focus', type:'focus', label:'重点信息 Focus', default:true },
  { prop:'focusIndex', type:'slider', label:'焦点序号', default:0, min:0, max:(p)=>p.itemCount-1, maxFromKey:'itemCount', maxFromKeyOffset:-1, displayOffset:1, step:1, showIf:(p)=>p.focus },
]};
