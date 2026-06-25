import { useDeckStyles, deckTheme, deckLabel, SlideShell, SlideHead } from './DeckKit.jsx';
/* ============================================================================
   SlideFunnel — 资本漏斗（投资决策漏斗 · 横/纵向 + 转化率）
   独立组件：仅靠 props 控制内容与样式；render 时自注入 DeckKit 基座样式。

   ── 可调参数（Props） ──────────────────────────────────────────────────────
   | prop        | 类型                          | 默认值 | 说明                              |
   | stages      | Stage[]                       | 见下   | 漏斗层级数据源（按从宽到窄）      |
   | itemCount   | number (3–6)                  | 5      | 实际展示的层级数（截取）          |
   | orientation | '纵向' | '横向'                | '纵向' | 漏斗方向                          |
   | focus       | boolean                       | true   | 是否高亮某层                      |
   | focusIndex  | number (0-based)              | 3      | 高亮第几层                        |
   | labelType   | 'number'|'symbol'|'keyword'   | number | 层徽标样式                        |
   | showRate    | boolean                       | true   | 是否显示相邻层转化率              |
   | showAside   | boolean                       | true   | 是否显示「漏斗洞察」装饰条        |
   | badge       | string                        | '09'   | 页眉编号徽标                      |
   | theme       | Partial<DeckTheme>            | —      | 设计令牌覆盖                      |
   Stage = { label, en, value:number, note }
   ========================================================================== */
/* ── 页面属性契约 · defaultProps ──────────────────────────────────────────
   本页全部可见文案 / 数据 / 图片槽默认值集中于此，直接编辑即可换内容；
   组件内部以 { ...defaultProps, ...props } 合并，外部传同名 props 逐项覆盖。 */
export const defaultProps = {
  itemCount: 5,
  orientation: '纵向',
  focus: true,
  focusIndex: 3,
  labelType: 'number',
  showRate: true,
  showAside: true,
  badge: '09',
  stages: [
      { label:'候选标的', en:'Pipeline',   value:1200, note:'年内进入观察池的 AI 公司' },
      { label:'立项跟进', en:'Sourced',    value:360,  note:'通过初筛、建立接触' },
      { label:'尽职调查', en:'Due Dilig.', value:120,  note:'进入实质性尽调阶段' },
      { label:'投资决策', en:'Committed',  value:48,   note:'过投决会、签署条款' },
      { label:'大额落地', en:'Mega Deal',  value:22,   note:'单笔 ≥1 亿美元成交' },
    ],
};

function SlideFunnel(props){
  useDeckStyles(props.theme);
  const T = (deckTheme ? deckTheme(props.theme) : {});
  const ACC = T.accent || '#46e3c6';
  const BLUE = T.blue || '#4a86ff';

  const {
    itemCount, orientation, focus, focusIndex, labelType, showRate, showAside,
    badge, stages,
  } = { ...defaultProps, ...props };

  const data = stages.slice(0, Math.max(3, Math.min(itemCount, stages.length)));
  const fIdx = Math.max(0, Math.min(focusIndex, data.length - 1));
  const maxV = data[0].value || 1;
  const lbl = (i)=> deckLabel(labelType, i, { keyword:'S' });
  const rate = (i)=> i===0 ? null : Math.round(data[i].value/data[i-1].value*100);
  const colorAt = (i)=> mix(BLUE, ACC, data.length<=1?0:i/(data.length-1));

  const isV = orientation === '纵向';

  return (
    <SlideShell orbs={[{ w:520, h:520, left:-180, top:-150,
        color:`radial-gradient(circle at 50% 50%, ${hexA(BLUE,.18)}, ${hexA(BLUE,0)} 70%)` }]}>
      <SlideHead no={badge} en="Investment Funnel" cn="资本漏斗 · 决策转化"
        badge={labelType==='keyword'?'FLOW':labelType==='symbol'?'◆':badge} />

      <div style={{flex:'1 1 0', minHeight:0, display:'flex', marginTop:24, gap:34}}>
        {/* 漏斗主体 */}
        <div style={{flex:'1 1 0', minWidth:0, display:'flex', flexDirection: isV?'column':'row',
              alignItems:'stretch', justifyContent:'center', gap:isV?12:14}}>
          {data.map((s,i)=>{
            const hot = focus && i===fIdx;
            const frac = Math.max(0.18, s.value/maxV);
            const c = colorAt(i);
            return (
              <div key={i} className={'dk-anim d'+Math.min(i+1,6)} style={{flex:'1 1 0', minHeight:0, minWidth:0, position:'relative',
                    display:'flex', flexDirection: isV?'row':'column', alignItems:'center', justifyContent:'center', gap:isV?22:10}}>
                {/* 横向模式：层名在上 */}
                {!isV && <div style={{textAlign:'center', height:46}}>
                  <div style={{fontFamily:'var(--font-cn)', fontWeight:800, fontSize:'var(--type-tiny)', color: hot?'#fff':'rgba(255,255,255,.9)'}}>{s.label}</div>
                </div>}

                {/* 漏斗条 */}
                <div style={{flex:'1 1 0', display:'flex', alignItems:'center', justifyContent:'center',
                      width: isV? `${frac*100}%`:'100%', height: isV?'100%':`${frac*100}%`,
                      minWidth: isV?160:0, position:'relative'}}>
                  <div style={{width:'100%', height:'100%', borderRadius:16, position:'relative', overflow:'hidden',
                        display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:2,
                        background:`linear-gradient(150deg, ${hexA(c,hot?.5:.32)}, ${hexA(c,hot?.2:.08)})`,
                        border:`1.5px solid ${hot?ACC:hexA(c,.55)}`,
                        boxShadow: hot?`0 26px 60px ${hexA(ACC,.3)}, 0 0 0 1.5px ${ACC}`:'0 18px 44px rgba(3,8,30,.4)'}}>
                    <span style={{position:'absolute', top:12, left:16, fontFamily:'var(--font-mono)', fontSize:13,
                        color: hot?ACC:'var(--ink-faint)', fontWeight:700}}>{lbl(i)}</span>
                    {isV ? (
                      /* 纵向：数值 + 名称/英文 横向成组居中，单行紧凑、不再竖向撑高 */
                      <div style={{display:'flex', alignItems:'center', justifyContent:'center', gap:'clamp(14px,1.4vw,26px)'}}>
                        <span style={{fontFamily:'var(--font-display)', fontWeight:900, fontSize:'clamp(44px,5.2vh,64px)', lineHeight:.85,
                            color: hot?ACC:'#fff', textShadow: hot?`0 0 22px ${hexA(ACC,.5)}`:'none'}}>{s.value}</span>
                        <span style={{width:1, alignSelf:'stretch', maxHeight:54, background:hexA('#ffffff',.22)}}></span>
                        <div style={{display:'flex', flexDirection:'column', gap:3, textAlign:'left', minWidth:0}}>
                          <span style={{fontFamily:'var(--font-cn)', fontWeight:900, fontSize:'var(--type-sub)', color:'#fff', lineHeight:1.05, whiteSpace:'nowrap'}}>{s.label}</span>
                          <span style={{fontFamily:'var(--font-mono)', fontSize:14, letterSpacing:'.06em', color:'var(--ink-faint)', whiteSpace:'nowrap'}}>{s.en}</span>
                        </div>
                      </div>
                    ) : (
                      <div style={{display:'flex', alignItems:'baseline', gap:6}}>
                        <span style={{fontFamily:'var(--font-display)', fontWeight:900, fontSize:46, lineHeight:.85,
                            color: hot?ACC:'#fff', textShadow: hot?`0 0 22px ${hexA(ACC,.5)}`:'none'}}>{s.value}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* 转化率 */}
                {showRate && i>0 && (
                  <div style={{fontFamily:'var(--font-mono)', fontSize:14, color:ACC, fontWeight:700,
                        ...(isV
                          ? {position:'absolute', left:'50%', top:0, transform:'translate(-50%,-58%)', background:'var(--navy-card)',
                             padding:'3px 13px', borderRadius:999, border:`1px solid ${hexA(ACC,.4)}`, zIndex:4, whiteSpace:'nowrap'}
                          : {}),
                        display:'block'}}>↓ {rate(i)}%</div>
                )}
              </div>
            );
          })}
        </div>

        {/* 右侧：层级说明 + 转化率（纵向模式展示转化阶梯） */}
        <div style={{flex:'0 0 380px', display:'flex', flexDirection:'column', gap:12, minHeight:0}}>
          {data.map((s,i)=>{
            const hot = focus && i===fIdx;
            const r = rate(i);
            return (
              <div key={i} className="dk-glass dk-anim d2" style={{flex:'1 1 0', minHeight:0, borderRadius:16, padding:'0 22px',
                    display:'flex', alignItems:'center', gap:16,
                    boxShadow: hot?`0 0 0 1.5px ${ACC}`:'none'}}>
                <span style={{flexShrink:0, width:38, height:38, borderRadius:10, display:'inline-flex', alignItems:'center', justifyContent:'center',
                    fontFamily:'var(--font-mono)', fontSize:14, fontWeight:700,
                    background: hot?hexA(ACC,.18):'rgba(255,255,255,.07)', border:`1px solid ${hot?ACC:'rgba(255,255,255,.16)'}`, color: hot?ACC:'var(--ink-dim)'}}>{lbl(i)}</span>
                <div style={{flex:1, minWidth:0}}>
                  <div style={{display:'flex', alignItems:'baseline', justifyContent:'space-between', gap:10}}>
                    <span style={{fontFamily:'var(--font-cn)', fontWeight:800, fontSize:'var(--type-small)', color:'#fff'}}>{s.label}</span>
                    {showRate && r!=null && <span style={{fontFamily:'var(--font-mono)', fontSize:14, color:ACC, fontWeight:700}}>转化 {r}%</span>}
                  </div>
                  <div style={{fontSize:13, lineHeight:1.4, color:'var(--ink-faint)', marginTop:2, textWrap:'pretty'}}>{s.note}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {showAside && (()=>{
        const overall = Math.round(data[data.length-1].value/data[0].value*1000)/10;
        return (
          <div className="dk-glass-dark dk-anim d5" style={{marginTop:18, flexShrink:0, borderRadius:20, padding:'15px 30px',
                display:'flex', alignItems:'center', gap:22, flexWrap:'wrap'}}>
            <span style={{flexShrink:0, fontFamily:'var(--font-mono)', fontSize:14, letterSpacing:'.12em', color:ACC}}>漏斗洞察</span>
            <div style={{display:'flex', alignItems:'baseline', gap:8}}>
              <span style={{fontFamily:'var(--font-display)', fontWeight:900, fontSize:38, lineHeight:.9, color:'#fff'}}>{overall}%</span>
              <span style={{fontSize:'var(--type-tiny)', color:'var(--ink-dim)'}}>端到端入选率</span>
            </div>
            <p style={{flex:'1 1 300px', fontSize:'var(--type-tiny)', lineHeight:1.5, color:'var(--ink-dim)', textWrap:'pretty', minWidth:0}}>
              资本筛选高度严苛 —— 上千候选中仅极少数能拿到大额融资，越靠后的环节转化越陡峭，竞争集中在头部。
            </p>
          </div>
        );
      })()}
    </SlideShell>
  );

  function mix(a, b, t){
    const pa=hx(a), pb=hx(b);
    const r=Math.round(pa[0]+(pb[0]-pa[0])*t), g=Math.round(pa[1]+(pb[1]-pa[1])*t), bl=Math.round(pa[2]+(pb[2]-pa[2])*t);
    return `rgb(${r},${g},${bl})`;
  }
  function hx(hex){ const n=hex.slice(1); const f=n.length===3?n.split('').map(c=>c+c).join(''):n;
    return [parseInt(f.slice(0,2),16),parseInt(f.slice(2,4),16),parseInt(f.slice(4,6),16)]; }
  function hexA(hex, a){
    if(!hex || hex[0] !== '#') return hex;
    const f = hx(hex); return `rgba(${f[0]},${f[1]},${f[2]},${a})`;
  }
}

export default SlideFunnel;

/* ── 模板参数 schema（自描述 · 迁移即带控件；Tweaks 由此自动生成） ── */
export const slideSpec = { defaults: defaultProps, slot:'funnel', name:'资本漏斗 · Funnel', controls:[
  { prop:'itemCount', type:'slider', label:'数量', default:5, min:3, max:6, step:1, desc:'漏斗层数' },
  { prop:'orientation', type:'radio', label:'方向', default:'纵向', options:['纵向','横向'] },
  { prop:'showRate', type:'toggle', label:'转化率', default:true },
  { prop:'showAside', type:'toggle', label:'装饰文案', default:true },
  { prop:'labelType', type:'labelType', label:'标签类型', default:'数字' },
  { prop:'focus', type:'focus', label:'重点信息 Focus', default:true },
  { prop:'focusIndex', type:'slider', label:'焦点序号', default:3, min:0, max:(p)=>p.itemCount-1, maxFromKey:'itemCount', maxFromKeyOffset:-1, displayOffset:1, step:1, showIf:(p)=>p.focus },
]};
