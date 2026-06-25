import { useDeckStyles, deckTheme, deckLabel, SlideShell, SlideHead } from './DeckKit.jsx';
/* ============================================================================
   SlideOutlook — 投资展望（看好/谨慎 双栏 + 阶段策略时间轴）
   独立组件：仅靠 props 控制内容与样式；render 时自注入 DeckKit 基座样式。

   ── 可调参数（Props） ──────────────────────────────────────────────────────
   | prop        | 类型                          | 默认值 | 说明                          |
   | groups      | Group[]                       | 见下   | 两组观点（看好 / 谨慎）       |
   | itemCount   | number (1–3)                  | 3      | 每组展示的条目数              |
   | focus       | boolean                       | true   | 是否高亮某一组                |
   | focusIndex  | number (0|1)                  | 0      | 高亮第几组                    |
   | labelType   | 'number'|'symbol'|'keyword'   | symbol | 条目前缀样式                  |
   | showAside   | boolean                       | true   | 是否显示「阶段策略」时间轴    |
   | phases      | {time,text}[]                 | 见下   | 时间轴阶段                    |
   | theme       | Partial<DeckTheme>            | —      | 设计令牌覆盖                  |
   Group = { title, en, tone:'positive'|'caution', sign, items:[{label,note}] }
   ========================================================================== */
/* ── 页面属性契约 · defaultProps ──────────────────────────────────────────
   本页全部可见文案 / 数据 / 图片槽默认值集中于此，直接编辑即可换内容；
   组件内部以 { ...defaultProps, ...props } 合并，外部传同名 props 逐项覆盖。 */
export const defaultProps = {
  itemCount: 3,
  focus: true,
  focusIndex: 0,
  labelType: 'symbol',
  showAside: true,
  groups: [
      { title:'看好方向', en:'Bullish', tone:'positive', sign:'✓', items:[
        { label:'垂直应用', note:'清晰商业模式、已验证 PMF（Glean、Harvey）' },
        { label:'基础设施中游', note:'数据标注、向量数据库等「卖铲子」环节' },
        { label:'具身智能', note:'人形机器人、自动驾驶等长周期硬科技' },
      ]},
      { title:'谨慎对待', en:'Caution', tone:'caution', sign:'!', items:[
        { label:'高估值无收入纯模型', note:'烧钱快、壁垒低、泡沫大' },
        { label:'跟风「AI 包装」项目', note:'仅叠一层 LLM 调用，无壁垒' },
        { label:'缺数据护城河消费应用', note:'迁移成本低，易被大厂复制' },
      ]},
    ],
  phases: [
      { time:'2025 – 2026', text:'观察头部公司 IPO 表现，若 Anthropic / OpenAI 破发，警惕全行业估值回调' },
      { time:'2026 – 2027', text:'关注垂直应用收入曲线，优选 ARR ≥ 1 亿、续约率 > 120% 的标的' },
      { time:'2027 年后',   text:'若 AGI 突破未兑现，行业进入洗牌期，可抄底被低估的技术资产' },
    ],
};

function SlideOutlook(props){
  useDeckStyles(props.theme);
  const T = (deckTheme ? deckTheme(props.theme) : {});
  const POS = T.accent || '#46e3c6';
  const NEG = T.warn || '#ffb27a';

  const {
    itemCount, focus, focusIndex, labelType, showAside, groups, phases,
  } = { ...defaultProps, ...props };

  const focusGroup = focusIndex === '右侧' || focusIndex === 'right' || focusIndex === 1 || focusIndex === '1' ? 1 : 0;
  const sym = (i)=> deckLabel(labelType, i, { keyword:'PT' });

  return (
    <SlideShell orbs={[{ w:480, h:480, left:-160, bottom:-160,
        color:'radial-gradient(circle at 50% 50%, rgba(70,227,198,.18), rgba(70,227,198,0) 70%)' }]}>
      <SlideHead no="06" en="Investment Outlook" cn="投资展望 · 策略取舍"
        badge={labelType==='keyword'?'PLAN':labelType==='symbol'?'◆':'06'} />

      <div style={{flex:'1 1 0', minHeight:0, display:'flex', flexDirection:'column', marginTop:30}}>
        {/* 双栏观点 */}
        <div style={{flex:'1 1 0', minHeight:0, display:'grid', gridTemplateColumns:'1fr 1fr', gap:26}}>
          {groups.map((g,gi)=>{
            const c = g.tone === 'caution' ? NEG : POS;
            const hot = focus && gi===focusGroup;
            const its = g.items.slice(0, Math.max(1, Math.min(itemCount, g.items.length)));
            return (
              <div key={gi} data-dashi-theme09-outlook-group={gi} data-dashi-theme09-outlook-hot={hot ? 'true' : 'false'} className={'dk-glass dk-anim d'+(gi+1)} style={{
                borderRadius:'var(--dk-radius)', padding:'30px 34px', display:'flex', flexDirection:'column',
                boxShadow: hot ? `0 34px 80px ${hexA(c,.28)}, 0 0 0 2px ${c}` : '0 22px 54px rgba(3,8,30,.42)'}}>
                {/* 组头 */}
                <div style={{display:'flex', alignItems:'center', gap:16, marginBottom:8}}>
                  <span style={{width:50, height:50, borderRadius:15, flexShrink:0, display:'inline-flex',
                      alignItems:'center', justifyContent:'center', fontSize:26, fontWeight:800,
                      background: hexA(c,.16), border:`1.5px solid ${c}`, color:c}}>{g.sign}</span>
                  <div>
                    <div style={{fontFamily:'var(--font-cn)', fontWeight:900, fontSize:'var(--type-sub)', color:'#fff'}}>{g.title}</div>
                    <div style={{fontFamily:'var(--font-mono)', fontSize:14, letterSpacing:'.1em', color:'var(--ink-faint)', marginTop:2}}>{g.en}</div>
                  </div>
                </div>
                <div style={{height:1, background:`linear-gradient(90deg, ${hexA(c,.5)}, transparent)`, margin:'10px 0 18px'}}></div>

                <div style={{flex:1, display:'flex', flexDirection:'column', justifyContent:'flex-start', gap:20}}>
                  {its.map((it,i)=>(
                    <div key={i} style={{display:'flex', gap:16, alignItems:'flex-start'}}>
                      <span style={{flexShrink:0, marginTop:2, width:30, height:30, borderRadius:9,
                          display:'inline-flex', alignItems:'center', justifyContent:'center',
                          fontFamily:'var(--font-mono)', fontSize:13, fontWeight:700,
                          background:'rgba(255,255,255,.08)', border:'1px solid rgba(255,255,255,.16)', color:c}}>{sym(i)}</span>
                      <div style={{minWidth:0}}>
                        <div style={{fontSize:'var(--type-small)', fontWeight:700, color:'#fff'}}>{it.label}</div>
                        <div style={{fontSize:'var(--type-tiny)', lineHeight:1.45, color:'var(--ink-dim)', marginTop:3, textWrap:'pretty'}}>{it.note}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* 阶段策略时间轴 */}
        {showAside && (
          <div className="dk-anim d3" style={{marginTop:22, flexShrink:0}}>
            <div style={{display:'flex', alignItems:'center', gap:16, marginBottom:16}}>
              <span style={{fontFamily:'var(--font-mono)', fontSize:14, letterSpacing:'.14em', color:'var(--ink-faint)', textTransform:'uppercase'}}>Staged Strategy</span>
              <span style={{height:1, flex:1, background:'rgba(255,255,255,.14)'}}></span>
              <span style={{fontSize:'var(--type-tiny)', color:'var(--ink-faint)'}}>阶段性策略 · 时间轴</span>
            </div>
            <div style={{display:'grid', gridTemplateColumns:`repeat(${phases.length}, 1fr)`, gap:20}}>
              {phases.map((p,i)=>(
                <div key={i} className="dk-glass-dark" style={{borderRadius:18, padding:'20px 24px', position:'relative'}}>
                  <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:10}}>
                    <div style={{display:'flex', alignItems:'center', gap:10, minWidth:0}}>
                      <span style={{width:10, height:10, flexShrink:0, borderRadius:'50%', background:POS, boxShadow:`0 0 12px ${POS}`}}></span>
                      <span style={{fontFamily:'var(--font-display)', fontWeight:800, fontSize:'var(--type-small)', color:'#fff', whiteSpace:'nowrap'}}>{p.time}</span>
                    </div>
                    <span style={{flexShrink:0, fontFamily:'var(--font-mono)', fontSize:13, letterSpacing:'.08em', color:'var(--ink-faint)'}}>{String(i+1).padStart(2,'0')}</span>
                  </div>
                  <p style={{fontSize:'var(--type-tiny)', lineHeight:1.5, color:'var(--ink-dim)', textWrap:'pretty'}}>{p.text}</p>
                </div>
              ))}
            </div>
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

export default SlideOutlook;

/* ── 模板参数 schema（自描述 · 迁移即带控件；Tweaks 由此自动生成） ── */
export const slideSpec = { defaults: defaultProps, slot:'outlook', name:'投资展望 · Outlook', controls:[
  { prop:'itemCount', type:'slider', label:'数量', default:3, min:1, max:3, step:1, desc:'每组条目数' },
  { prop:'showAside', type:'toggle', label:'时间轴', default:true },
  { prop:'labelType', type:'labelType', label:'标签类型', default:'数字' },
  { prop:'focus', type:'focus', label:'重点信息 Focus', default:true },
  { prop:'focusIndex', type:'radio', label:'焦点分组', default:'左侧', options:['左侧','右侧'], map:(v)=>v==='右侧'?1:0, showIf:(p)=>p.focus },
]};
