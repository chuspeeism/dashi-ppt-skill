import { useDeckStyles, deckTheme, deckLabel, SlideShell, SlideHead } from './DeckKit.jsx';
/* ============================================================================
   SlideRisk — 风险研判（风险卡片 + 传导链）
   独立组件：仅靠 props 控制内容与样式；render 时自注入 DeckKit 基座样式。

   ── 可调参数（Props） ──────────────────────────────────────────────────────
   | prop        | 类型                          | 默认值 | 说明                         |
   | items       | RiskItem[]                    | 见下   | 风险条目数据源               |
   | itemCount   | number (1–4)                  | 4      | 实际展示的条目数（截取）     |
   | variant     | '网格' | '列表'               | '网格' | 卡片排布方式                 |
   | focus       | boolean                       | true   | 是否高亮某条目               |
   | focusIndex  | number (0-based)              | 0      | 高亮第几条                   |
   | labelType   | 'number'|'symbol'|'keyword'   | number | 角标样式（数字/符号/关键词） |
   | showAside   | boolean                       | true   | 是否显示「风险传导链」装饰条 |
   | accent      | string(css color)             | warn   | 风险信号色（默认主题暖色）   |
   | theme       | Partial<DeckTheme>            | —      | 设计令牌覆盖                 |
   RiskItem = { title, en, desc, metric:{v,u,l} }
   ========================================================================== */
/* ── 页面属性契约 · defaultProps ──────────────────────────────────────────
   本页全部可见文案 / 数据 / 图片槽默认值集中于此，直接编辑即可换内容；
   组件内部以 { ...defaultProps, ...props } 合并，外部传同名 props 逐项覆盖。 */
export const defaultProps = {
  itemCount: 4,
  variant: '网格',
  focus: true,
  focusIndex: 0,
  labelType: 'number',
  showAside: true,
  accent: '#ffb27a',
  items: [
      { title:'估值泡沫与盈利困境', en:'Valuation', metric:{ v:'1000', u:'×+', l:'P/S 市销率' },
        desc:'估值多建立在「未来市值」而非当前收入，宏观一旦收紧，高位回调难免。' },
      { title:'监管压力加大', en:'Regulation', metric:{ v:'EU', u:'AI Act', l:'合规成本' },
        desc:'欧盟 AI Act、美国各州隐私法案相继生效，合规成本与法律风险持续上升。' },
      { title:'大厂挤压与开源冲击', en:'Incumbents', metric:{ v:'3', u:'巨头', l:'自研降维' },
        desc:'Google / Meta / Microsoft 自研模型降维打击；开源性能逼近闭源，削弱付费壁垒。' },
      { title:'算力供应链「卡脖子」', en:'Compute', metric:{ v:'GPU', u:'紧张', l:'出口管制' },
        desc:'NVIDIA GPU 供应紧张、对华出口管制加码，算力成本居高，中小公司难撑烧钱。' },
    ],
  chain: ['估值高企','宏观收紧','估值回调','行业洗牌'],
};

function SlideRisk(props){
  useDeckStyles(props.theme);
  const T = (deckTheme ? deckTheme(props.theme) : {});
  const {
    itemCount, variant, focus, focusIndex, labelType, showAside, accent,
    items, chain,
  } = { ...defaultProps, ...props };

  const shown = items.slice(0, Math.max(1, Math.min(itemCount, items.length)));
  const fIdx = Math.max(0, Math.min(focusIndex, shown.length - 1));
  const isGrid = variant === '网格';
  const n = shown.length;
  // 列表模式下随条目数量自适应标题字号与描述行数，避免裁切
  const titleSize = isGrid ? 36 : (n>=4 ? 25 : n===3 ? 31 : 36);
  const descClamp = isGrid ? 4 : (n>=4 ? 1 : n===3 ? 2 : 3);
  const badge = (i)=> deckLabel(labelType, i, { keyword:'RISK', number:'R'+(i+1) });

  return (
    <SlideShell orbs={[{ w:520, h:520, right:-170, top:-170,
        color:`radial-gradient(circle at 50% 50%, rgba(255,178,122,.18), rgba(255,178,122,0) 70%)` }]}>
      <SlideHead no="06" en="Risk Assessment" cn="风险研判 · 投资前哨"
        badge={labelType==='keyword'?'RISK':labelType==='symbol'?'◆':'06'} />

      <div style={{flex:'1 1 0', minHeight:0, display:'flex', flexDirection:'column', marginTop: isGrid?30:22}}>
        {n===1 ? (()=>{
          const r = shown[0]; const hot = focus;
          return (
            <div className="dk-glass dk-anim d1" style={{flex:'1 1 0', minHeight:0, position:'relative', overflow:'hidden',
                borderRadius:'var(--dk-radius)', display:'grid', gridTemplateColumns: r.metric ? '1.62fr 1fr' : '1fr',
                background:`linear-gradient(145deg, ${hexA(accent,.15)}, ${hexA(accent,.04)})`,
                border:`1.5px solid ${hexA(accent,.55)}`, boxShadow:`0 34px 80px ${hexA(accent,.26)}`}}>
              {/* 巨号轮廓装饰 */}
              <span aria-hidden="true" style={{position:'absolute', right: r.metric?'40%':28, bottom:-70,
                  fontFamily:'var(--font-display)', fontWeight:900, fontSize:340, lineHeight:1,
                  color:hexA(accent,.08), pointerEvents:'none', userSelect:'none'}}>!</span>
              {/* 左侧色脊 */}
              <span style={{position:'absolute', left:0, top:40, bottom:40, width:8, borderRadius:8,
                  background:accent, boxShadow:`0 0 22px ${hexA(accent,.7)}`}}></span>
              {/* 文字区 */}
              <div style={{padding:'58px 64px', display:'flex', flexDirection:'column', justifyContent:'center', gap:22, position:'relative', minWidth:0}}>
                <div style={{display:'flex', alignItems:'center', gap:16}}>
                  <span style={{fontFamily:'var(--font-mono)', fontSize:16, letterSpacing:'.1em', color:accent,
                      border:`1px solid ${hexA(accent,.5)}`, borderRadius:8, padding:'6px 14px'}}>{badge(0)}</span>
                  <span style={{fontFamily:'var(--font-display)', fontWeight:600, fontSize:'var(--type-small)',
                      color:'var(--ink-dim)', letterSpacing:'.05em', textTransform:'uppercase'}}>{r.en}</span>
                  <span style={{marginLeft:'auto', fontFamily:'var(--font-mono)', fontSize:14, letterSpacing:'.14em', color:'var(--ink-faint)'}}>核心风险 · TOP RISK</span>
                </div>
                <div style={{fontFamily:'var(--font-cn)', fontWeight:900, fontSize:74, lineHeight:1.08,
                    color:'#fff', textWrap:'balance', letterSpacing:'.01em'}}>{r.title}</div>
                <p style={{fontSize:'var(--type-sub)', lineHeight:1.55, color:'var(--ink-dim)', textWrap:'pretty', maxWidth:880, margin:0}}>{r.desc}</p>
              </div>
              {/* 指标区 */}
              {r.metric && (
                <div style={{position:'relative', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:6,
                    padding:'40px', borderLeft:`1px solid ${hexA(accent,.28)}`,
                    background:`linear-gradient(160deg, ${hexA(accent,.1)}, transparent)`}}>
                  <span style={{fontFamily:'var(--font-mono)', fontSize:14, letterSpacing:'.12em', color:'var(--ink-faint)', marginBottom:6}}>{r.metric.l}</span>
                  <span style={{fontFamily:'var(--font-display)', fontWeight:900, fontSize:140, lineHeight:.82,
                      color:accent, textShadow:`0 0 40px ${hexA(accent,.5)}`}}>{r.metric.v}</span>
                  <span style={{fontFamily:'var(--font-cn)', fontWeight:800, fontSize:'var(--type-sub)', color:'#fff', marginTop:8}}>{r.metric.u}</span>
                </div>
              )}
            </div>
          );
        })() : (
        <div style={{flex:'1 1 0', minHeight:0,
              display:'grid',
              gridTemplateColumns: isGrid ? 'repeat(2, minmax(0,1fr))' : '1fr',
              gridAutoRows:'1fr', gap: isGrid?22:14}}>
          {shown.map((r,i)=>{
            const hot = focus && i===fIdx;
            return (
              <div key={i} className={'dk-glass dk-anim d'+Math.min(i+1,5)} style={{
                position:'relative', borderRadius:'var(--dk-radius)', padding: isGrid?'22px 30px':'9px 30px',
                display:'flex', flexDirection: isGrid ? 'column' : 'row', alignItems: isGrid?'stretch':'center', gap: isGrid?10:34,
                overflow:'hidden',
                background: hot ? `linear-gradient(150deg, ${hexA(accent,.16)}, ${hexA(accent,.045)})` : undefined,
                border: hot ? `1.5px solid ${accent}` : undefined,
                boxShadow: hot ? `0 28px 66px ${hexA(accent,.26)}` : '0 22px 54px rgba(3,8,30,.42)',
              }}>
                {/* 左侧色脊 */}
                <span style={{position:'absolute', left:0, top:16, bottom:16, width:6, borderRadius:6,
                    background: hot ? accent : 'rgba(255,255,255,.18)', boxShadow: hot?`0 0 16px ${hexA(accent,.7)}`:'none'}}></span>

                <div style={{flex: isGrid?'0 0 auto':'1 1 0', minWidth:0}}>
                  <div style={{display:'flex', alignItems:'center', gap:12, marginBottom: isGrid?10:4}}>
                    <span style={{fontFamily:'var(--font-mono)', fontSize:14, letterSpacing:'.08em',
                        color: accent, border:`1px solid ${hexA(accent,.5)}`, borderRadius:7, padding:'4px 10px'}}>{badge(i)}</span>
                    <span style={{fontFamily:'var(--font-display)', fontWeight:600, fontSize:'var(--type-tiny)',
                        color:'var(--ink-faint)', letterSpacing:'.04em'}}>{r.en}</span>
                  </div>
                  <div style={{fontFamily:'var(--font-cn)', fontWeight:900, fontSize:titleSize, lineHeight:1.1,
                        color: hot ? '#fff' : 'rgba(255,255,255,.92)'}}>{r.title}</div>
                  <p style={{fontSize:'var(--type-tiny)', lineHeight: isGrid?1.5:1.34, color:'var(--ink-dim)', marginTop: isGrid?10:5,
                        textWrap:'pretty', maxWidth: isGrid? 'none':760,
                        display:'-webkit-box', WebkitBoxOrient:'vertical', WebkitLineClamp:descClamp, overflow:'hidden'}}>{r.desc}</p>
                </div>

                {r.metric && (
                  <div style={{flexShrink:0, marginTop: isGrid?'auto':0, paddingTop: isGrid?12:0,
                        borderTop: isGrid?'1px solid rgba(255,255,255,.12)':'none',
                        display:'flex', alignItems:'baseline', gap:10,
                        justifyContent: isGrid?'flex-start':'flex-end', textAlign:'right'}}>
                    <span style={{fontFamily:'var(--font-display)', fontWeight:900, fontSize:46, lineHeight:.85,
                        color: hot ? accent : '#fff', textShadow: hot?`0 0 26px ${hexA(accent,.5)}`:'none'}}>{r.metric.v}</span>
                    <div style={{display:'flex', flexDirection:'column', alignItems: isGrid?'flex-start':'flex-end'}}>
                      <span style={{fontSize:'var(--type-tiny)', fontWeight:700, color:'var(--ink-dim)'}}>{r.metric.u}</span>
                      <span style={{fontSize:13, fontFamily:'var(--font-mono)', color:'var(--ink-faint)', marginTop:2}}>{r.metric.l}</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
        )}

        {/* 风险传导链 */}
        {showAside && (
          <div className="dk-glass-dark dk-anim d4" style={{marginTop:12, borderRadius:18, padding:'11px 26px',
                display:'flex', alignItems:'center', gap:22, flexWrap:'wrap'}}>
            <span style={{flexShrink:0, fontFamily:'var(--font-mono)', fontSize:14, letterSpacing:'.12em', color:accent}}>风险传导链</span>
            <div style={{display:'flex', alignItems:'center', gap:14, flexWrap:'wrap'}}>
              {chain.map((c,i)=>(
                <React.Fragment key={i}>
                  <span style={{padding:'9px 18px', borderRadius:999, fontSize:'var(--type-tiny)', fontWeight:600,
                      background: i===chain.length-1 ? hexA(accent,.18) : 'rgba(255,255,255,.08)',
                      border:`1px solid ${i===chain.length-1 ? hexA(accent,.5) : 'rgba(255,255,255,.16)'}`,
                      color: i===chain.length-1 ? accent : '#fff'}}>{c}</span>
                  {i<chain.length-1 && <span style={{color:'var(--ink-faint)', fontSize:18}}>→</span>}
                </React.Fragment>
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

export default SlideRisk;

/* ── 模板参数 schema（自描述 · 迁移即带控件；Tweaks 由此自动生成） ── */
export const slideSpec = { defaults: defaultProps, slot:'risk', name:'风险研判 · Risk', controls:[
  { prop:'itemCount', type:'slider', label:'条目数量', default:4, min:1, max:4, step:1 },
  { prop:'variant', type:'radio', label:'布局方式', default:'网格', options:['网格','列表'] },
  { prop:'showAside', type:'toggle', label:'装饰文案', default:true },
  { prop:'labelType', type:'labelType', label:'标签类型', default:'数字' },
  { prop:'focus', type:'focus', label:'重点信息 Focus', default:true },
  { prop:'focusIndex', type:'slider', label:'焦点序号', default:1, min:0, max:(p)=>p.itemCount-1, maxFromKey:'itemCount', maxFromKeyOffset:-1, displayOffset:1, step:1, showIf:(p)=>p.focus },
]};
