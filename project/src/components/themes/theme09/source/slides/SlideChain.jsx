import { useDeckStyles, SlideHead } from './DeckKit.jsx';
/* SlideChain — 04 产业链分层透视
   模板参数：
     layers     : number 1–3  显示层级数量（上游/中游/下游）
     perLayer   : number 1–5  每层显示公司数量
     showGeo    : bool  地区分布面板显隐
     callout    : bool  地理护城河装饰卡显隐
     labelType  : 'number'|'symbol'|'keyword'  层级徽标
     focus      : bool  高亮中游模型层
*/

/* ── 页面属性契约 · defaultProps ──────────────────────────────────────────
   本页全部可见文案 / 数据 / 图片槽默认值集中于此，直接编辑即可换内容；
   组件内部以 { ...defaultProps, ...props } 合并，外部传同名 props 逐项覆盖。 */
export const defaultProps = {
  layers: 3,
  perLayer: 4,
  showGeo: true,
  callout: true,
  labelType: 'number',
  focus: true,
  focusIndex: 1,
  tiers: [
    { tier:'上游', name:'基础设施', en:'Infrastructure', desc:'算力 · 芯片 · 数据',
      companies:['Cerebras','Groq','CoreWeave','Scale AI'], color:'#4a86ff', spine:'linear-gradient(180deg,#5a8dff,#1d49d6)' },
    { tier:'中游', name:'模型层', en:'Model Layer', desc:'通用大模型 · 开源 / 专用',
      companies:['OpenAI','Anthropic','xAI','Mistral','SSI'], color:'#46e3c6', spine:'linear-gradient(180deg,#5af0d4,#1fb89b)' },
    { tier:'下游', name:'应用层', en:'Application', desc:'生产力 · 搜索 · 具身智能',
      companies:['Glean','Databricks','Perplexity AI','Figure AI'], color:'#9f7bff', spine:'linear-gradient(180deg,#a98bff,#5a2fd6)' },
  ],
  geo: [
    { lb:'旧金山湾区', amt:620, pct:63.9 }, { lb:'纽约', amt:120, pct:12.4 },
    { lb:'西雅图', amt:95, pct:9.8 }, { lb:'波士顿', amt:75, pct:7.7 }, { lb:'其他地区', amt:60, pct:6.2 },
  ],
};

function SlideChain(props){
  useDeckStyles(props.theme);
  const {
    layers, perLayer, showGeo, callout, labelType, focus, focusIndex,
    tiers, geo,
  } = { ...defaultProps, ...props };

  const shown = tiers.slice(0, Math.max(1, Math.min(layers, 3)));
  const focusIdx = Math.max(0, Math.min(focusIndex, shown.length-1));
  const badge = (i)=> labelType==='symbol' ? ['◆','▲','●'][i%3]
    : labelType==='keyword' ? ['UP','MID','DOWN'][i%3] : String(i+1).padStart(2,'0');

  return (
    <div style={{position:'relative', width:'100%', height:'100%', padding:'var(--pad-y) var(--pad-x)'}}>
      <div className="dk-orb" style={{width:520, height:520, right:-160, bottom:-180, background:'radial-gradient(circle at 50% 50%, rgba(70,227,198,.18), rgba(70,227,198,0) 70%)'}}></div>

      <SlideHead no="04" en="Value Chain" cn="产业链分层透视" badge={labelType==='keyword'?'CHAIN':labelType==='symbol'?'◆':'04'} />

      <div style={{display:'grid', gridTemplateColumns: showGeo?'1fr 520px':'1fr', gap:40, marginTop:38, height:640}}>
        {/* layers */}
        <div style={{display:'flex', flexDirection:'column', gap:22, justifyContent:'stretch'}}>
          {shown.map((t,i)=>{
            const hot = focus && i===focusIdx;
            return (
              <div key={i} className={'dk-glass dk-anim d'+(i+1)} style={{
                position:'relative', flex:'1 1 0', minHeight:0, borderRadius:26, padding:'30px 36px 30px 30px', display:'flex', gap:28, alignItems:'center',
                boxShadow: hot ? `0 30px 70px rgba(70,227,198,.28), 0 0 0 2px var(--mint)` : '0 24px 56px rgba(3,8,30,.4)',
              }}>
                <div style={{flexShrink:0, width:8, alignSelf:'stretch', borderRadius:8, background:t.spine}}></div>
                <div style={{flexShrink:0, width:188}}>
                  <div style={{display:'flex', alignItems:'center', gap:12, marginBottom:8}}>
                    <span style={{fontFamily:'var(--font-mono)', fontSize:14, letterSpacing:'.1em', color:t.color, border:`1px solid ${t.color}`, borderRadius:6, padding:'3px 9px'}}>{badge(i)}</span>
                    <span style={{fontFamily:'var(--font-cn)', fontWeight:900, fontSize:'var(--type-sub)', letterSpacing:'.04em'}}>{t.tier}</span>
                  </div>
                  <div style={{fontSize:'var(--type-body)', fontWeight:700, color:'#fff'}}>{t.name}</div>
                  <div style={{fontSize:'var(--type-tiny)', color:'var(--ink-faint)', marginTop:4}}>{t.desc}</div>
                </div>
                <div style={{flex:1, display:'flex', flexWrap:'wrap', gap:12, alignContent:'center'}}>
                  {t.companies.slice(0, Math.max(1, Math.min(perLayer, t.companies.length))).map((c,j)=>(
                    <span key={j} style={{padding:'12px 22px', borderRadius:14, background:'rgba(255,255,255,.08)',
                      border:`1px solid ${hot?'rgba(70,227,198,.4)':'rgba(255,255,255,.18)'}`, fontSize:'var(--type-small)', fontWeight:600, whiteSpace:'nowrap'}}>{c}</span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* geography */}
        {showGeo && (
          <div className="dk-glass-dark dk-anim d2" style={{borderRadius:30, padding:'38px 40px', display:'flex', flexDirection:'column'}}>
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'baseline', marginBottom:8}}>
              <span style={{fontSize:'var(--type-sub)', fontWeight:700}}>地区分布</span>
              <span style={{fontFamily:'var(--font-mono)', fontSize:'var(--type-tiny)', color:'var(--ink-faint)'}}>$亿 · 占比</span>
            </div>
            <div style={{flex:1, display:'flex', flexDirection:'column', justifyContent:'center', gap:22}}>
              {geo.map((g,i)=>{
                const hot = focus && i===0;
                return (
                  <div key={i}>
                    <div style={{display:'flex', justifyContent:'space-between', alignItems:'baseline', marginBottom:8}}>
                      <span style={{fontSize:'var(--type-small)', fontWeight:600, color: hot?'#fff':'rgba(255,255,255,.82)'}}>{g.lb}</span>
                      <span style={{fontFamily:'var(--font-mono)', fontSize:'var(--type-small)', fontWeight:700, color: hot?'var(--mint)':'var(--ink-dim)'}}>{g.pct}%</span>
                    </div>
                    <div style={{height:14, borderRadius:999, background:'rgba(255,255,255,.1)', overflow:'hidden'}}>
                      <div style={{height:'100%', width:g.pct+'%', borderRadius:999,
                        background: hot?'linear-gradient(90deg,#5af0d4,#1fb89b)':'linear-gradient(90deg,#5a8dff,#1d49d6)',
                        boxShadow: hot?'0 0 16px rgba(70,227,198,.6)':'none'}}></div>
                    </div>
                  </div>
                );
              })}
            </div>
            {callout && (
              <div style={{marginTop:24, paddingTop:20, borderTop:'1px solid rgba(255,255,255,.12)', fontSize:'var(--type-tiny)', lineHeight:1.55, color:'rgba(255,255,255,.84)'}}>
                <b style={{color:'var(--mint)'}}>地理护城河 · </b>湾区独占六成以上，人才、资本、算力虹吸效应强化，短期难以撼动。
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default SlideChain;

/* ── 模板参数 schema（自描述 · 迁移即带控件；Tweaks 由此自动生成） ── */
export const slideSpec = { defaults: defaultProps, slot:'chain', name:'产业链分层 · Chain', controls:[
  { prop:'layers', type:'slider', label:'层级数量', default:3, min:1, max:3, step:1 },
  { prop:'perLayer', type:'slider', label:'每层数量', default:4, min:1, max:5, step:1 },
  { prop:'showGeo', type:'toggle', label:'分布面板', default:true },
  { prop:'callout', type:'toggle', label:'解读卡', default:true },
  { prop:'labelType', type:'labelType', label:'标签类型', default:'数字' },
  { prop:'focus', type:'focus', label:'重点信息 Focus', default:true },
  { prop:'focusIndex', type:'slider', label:'焦点序号', default:1, min:0, max:(p)=>p.layers-1, maxFromKey:'layers', maxFromKeyOffset:-1, displayOffset:1, step:1, showIf:(p)=>p.focus },
]};
