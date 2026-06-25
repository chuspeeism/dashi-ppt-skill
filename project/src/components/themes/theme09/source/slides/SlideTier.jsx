import { useDeckStyles, deckTheme, deckLabel, SlideShell, SlideHead } from './DeckKit.jsx';
/* ============================================================================
   SlideTier — 估值梯队（独角兽群像 · 金字塔分层）
   独立组件：仅靠 props 控制内容与样式；render 时自注入 DeckKit 基座样式。

   ── 可调参数（Props） ──────────────────────────────────────────────────────
   | prop        | 类型                          | 默认值 | 说明                              |
   | tiers       | Tier[]                        | 见下   | 梯队数据源（从塔尖到塔基）        |
   | itemCount   | number (3–5)                  | 5      | 实际展示的梯队层数（截取）        |
   | focus       | boolean                       | true   | 是否高亮某层                      |
   | focusIndex  | number (0-based)              | 0      | 高亮第几层                        |
   | labelType   | 'number'|'symbol'|'keyword'   | number | 层徽标样式                        |
   | showAside   | boolean                       | true   | 是否显示「梯队读法」装饰条        |
   | badge       | string                        | '10'   | 页眉编号徽标                      |
   | theme       | Partial<DeckTheme>            | —      | 设计令牌覆盖                      |
   Tier = { band, en, count, range, reps:string[] }
   ========================================================================== */
/* ── 页面属性契约 · defaultProps ──────────────────────────────────────────
   本页全部可见文案 / 数据 / 图片槽默认值集中于此，直接编辑即可换内容；
   组件内部以 { ...defaultProps, ...props } 合并，外部传同名 props 逐项覆盖。 */
export const defaultProps = {
  itemCount: 5,
  focus: true,
  focusIndex: 0,
  labelType: 'number',
  showAside: true,
  badge: '10',
  tiers: [
      { band:'超级梯队', en:'Super League',   count:2,  range:'估值 > 1500 亿$', reps:['OpenAI','xAI'] },
      { band:'巨型独角兽', en:'Decacorn+',     count:7,  range:'300 – 1500 亿$',  reps:['Anthropic','Databricks','Safe Superint.'] },
      { band:'大型独角兽', en:'Large Unicorn', count:16, range:'80 – 300 亿$',    reps:['Perplexity','Glean','Figure AI'] },
      { band:'成长独角兽', en:'Growth Unicorn',count:34, range:'20 – 80 亿$',     reps:['Cursor','ElevenLabs','Sierra'] },
      { band:'新晋独角兽', en:'New Unicorn',   count:48, range:'10 – 20 亿$',     reps:['Decagon','Mercor','+45 家'] },
    ],
};

function SlideTier(props){
  useDeckStyles(props.theme);
  const T = (deckTheme ? deckTheme(props.theme) : {});
  const ACC = T.accent || '#46e3c6';
  const BLUE = T.blue || '#4a86ff';

  const {
    itemCount, focus, focusIndex, labelType, showAside, badge, tiers,
  } = { ...defaultProps, ...props };

  const data = tiers.slice(0, Math.max(3, Math.min(itemCount, tiers.length)));
  const N = data.length;
  const fIdx = Math.max(0, Math.min(focusIndex, N - 1));
  const lbl = (i)=> deckLabel(labelType, i, { keyword:'T' });
  const totalCount = data.reduce((a, t) => a + (t.count || 0), 0);

  // 梯队宽度：塔尖窄 → 塔基宽
  const widthAt = (i) => 46 + (N <= 1 ? 0 : (i / (N - 1)) * 50); // 46% → 96%

  return (
    <SlideShell orbs={[{ w:560, h:560, right:-180, top:-150,
        color:`radial-gradient(circle at 50% 50%, ${hexA(ACC,.16)}, ${hexA(ACC,0)} 70%)` }]}>
      <SlideHead no={badge} en="Valuation Tiers" cn="估值梯队 · 独角兽群像"
        badge={labelType==='keyword'?'TIER':labelType==='symbol'?'◆':badge} />

      <div style={{flex:'1 1 0', minHeight:0, display:'flex', flexDirection:'column', alignItems:'center',
            justifyContent:'center', gap:14, marginTop:20}}>
        {data.map((t, i) => {
          const hot = focus && i === fIdx;
          const c = mix(ACC, BLUE, N <= 1 ? 0 : i / (N - 1));
          return (
            <div key={i} className={'dk-anim d'+Math.min(i+1,6)} style={{width:`${widthAt(i)}%`, flex:'1 1 0', minHeight:0,
                  display:'flex', alignItems:'center', gap:30, borderRadius:18, padding:'0 38px', position:'relative', overflow:'hidden',
                  background:`linear-gradient(120deg, ${hexA(c, hot?.34:.16)}, ${hexA(c, hot?.12:.04)})`,
                  border:`1.5px solid ${hot ? ACC : hexA(c,.5)}`,
                  boxShadow: hot ? `0 26px 64px ${hexA(ACC,.28)}, 0 0 0 1.5px ${ACC}` : '0 16px 40px rgba(3,8,30,.36)'}}>
              {/* 层徽标 */}
              <span data-dashi-theme09-tier-badge="true" data-dashi-theme09-tier-hot={hot ? 'true' : 'false'} style={{flexShrink:0, fontFamily:'var(--font-mono)', fontSize:14, fontWeight:800, color: hot?'#061833':'rgba(232,245,255,.72)',
                  background: hot?'rgba(255,255,255,.88)':'rgba(255,255,255,.06)',
                  border:`1px solid ${hot?'rgba(255,255,255,.78)':'rgba(255,255,255,.18)'}`, borderRadius:8, padding:'4px 10px'}}>{lbl(i)}</span>
              {/* 梯队名 */}
              <div style={{flexShrink:0, minWidth:200}}>
                <div style={{fontFamily:'var(--font-cn)', fontWeight:900, fontSize:'var(--type-sub)', color: hot?'#fff':'rgba(255,255,255,.92)', lineHeight:1}}>{t.band}</div>
                <div style={{fontFamily:'var(--font-mono)', fontSize:13, letterSpacing:'.06em', color: hot?'rgba(255,255,255,.82)':'var(--ink-faint)', marginTop:4}}>{t.en} · {t.range}</div>
              </div>
              {/* 代表公司 */}
              <div style={{flex:1, minWidth:0, display:'flex', flexWrap:'wrap', gap:8, justifyContent:'center'}}>
                {(t.reps||[]).map((r, k) => (
                  <span key={k} data-dashi-theme09-tier-rep="true" data-dashi-theme09-tier-hot={hot ? 'true' : 'false'} style={{fontFamily:'var(--font-display)', fontWeight:700, fontSize:18, color: hot?'#fff':'rgba(232,245,255,.76)',
                      background:hot?'rgba(5,18,42,.32)':'rgba(255,255,255,.07)', border:`1px solid ${hot?'rgba(255,255,255,.24)':'rgba(255,255,255,.14)'}`, borderRadius:999, padding:'3px 14px', whiteSpace:'nowrap'}}>{r}</span>
                ))}
              </div>
              {/* 数量 */}
              <div style={{flexShrink:0, display:'flex', alignItems:'baseline', gap:5}}>
                <span data-dashi-theme09-tier-count="true" data-dashi-theme09-tier-hot={hot ? 'true' : 'false'} style={{fontFamily:'var(--font-display)', fontWeight:900, fontSize:64, lineHeight:.8,
                    color:'#fff', textShadow: hot?`0 2px 10px rgba(2,9,28,.42), 0 0 22px ${hexA(ACC,.34)}`:'none'}}>{t.count}</span>
                <span style={{fontFamily:'var(--font-cn)', fontWeight:700, fontSize:'var(--type-tiny)', color:hot?'rgba(255,255,255,.9)':'var(--ink-dim)'}}>家</span>
              </div>
            </div>
          );
        })}
      </div>

      {showAside && (
        <div className="dk-glass-dark dk-anim d5" style={{marginTop:16, flexShrink:0, borderRadius:20, padding:'15px 30px',
              display:'flex', alignItems:'center', gap:22, flexWrap:'wrap'}}>
          <span style={{flexShrink:0, fontFamily:'var(--font-mono)', fontSize:14, letterSpacing:'.12em', color:ACC}}>梯队读法</span>
          <div style={{display:'flex', alignItems:'baseline', gap:8}}>
            <span style={{fontFamily:'var(--font-display)', fontWeight:900, fontSize:38, lineHeight:.9, color:'#fff'}}>{totalCount}</span>
            <span style={{fontSize:'var(--type-tiny)', color:'var(--ink-dim)'}}>家 AI 独角兽在册</span>
          </div>
          <p style={{flex:'1 1 300px', fontSize:'var(--type-tiny)', lineHeight:1.5, color:'var(--ink-dim)', textWrap:'pretty', minWidth:0}}>
            塔尖与塔基的估值落差超过两个数量级 —— 少数「超级梯队」吸走绝大多数资金与算力，而塔基的新晋独角兽数量虽多，单体体量与确定性都远不及头部。
          </p>
        </div>
      )}
    </SlideShell>
  );

  function mix(a, b, t){
    const pa=hx(a), pb=hx(b);
    return `rgb(${Math.round(pa[0]+(pb[0]-pa[0])*t)},${Math.round(pa[1]+(pb[1]-pa[1])*t)},${Math.round(pa[2]+(pb[2]-pa[2])*t)})`;
  }
  function hx(hex){ const x=hex.slice(1); const f=x.length===3?x.split('').map(c=>c+c).join(''):x;
    return [parseInt(f.slice(0,2),16),parseInt(f.slice(2,4),16),parseInt(f.slice(4,6),16)]; }
  function hexA(hex, a){
    if(!hex || hex[0] !== '#') return hex;
    const f = hx(hex); return `rgba(${f[0]},${f[1]},${f[2]},${a})`;
  }
}

export default SlideTier;

/* ── 模板参数 schema（自描述 · 迁移即带控件；Tweaks 由此自动生成） ── */
export const slideSpec = { defaults: defaultProps, slot:'tier', name:'估值梯队 · Tier', controls:[
  { prop:'itemCount', type:'slider', label:'数量', default:5, min:3, max:5, step:1, desc:'梯队层数' },
  { prop:'showAside', type:'toggle', label:'装饰文案', default:true },
  { prop:'labelType', type:'labelType', label:'标签类型', default:'数字' },
  { prop:'focus', type:'focus', label:'重点信息 Focus', default:true },
  { prop:'focusIndex', type:'slider', label:'焦点序号', default:0, min:0, max:(p)=>p.itemCount-1, maxFromKey:'itemCount', maxFromKeyOffset:-1, displayOffset:1, step:1, showIf:(p)=>p.focus },
]};
