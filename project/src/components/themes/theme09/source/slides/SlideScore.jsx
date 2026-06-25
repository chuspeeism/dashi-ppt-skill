import { useDeckStyles, deckTheme, deckLabel, SlideShell, SlideHead } from './DeckKit.jsx';
/* ============================================================================
   SlideScore — 评分卡（多对象 × 多维度打分 + 综合分）
   独立组件：仅靠 props 控制内容与样式；render 时自注入 DeckKit 基座样式。

   ── 可调参数（Props） ──────────────────────────────────────────────────────
   | prop          | 类型                         | 默认值 | 说明                            |
   | objects       | Obj[]                        | 见下   | 数据源（每条 = 一个评分对象）   |
   | criteria      | string[]                     | 见下   | 维度名（与各对象 scores 对齐）  |
   | itemCount     | number (2–5)                 | 4      | 展示对象数（截取卡片）          |
   | criteriaCount | number (3–6)                 | 6      | 展示维度数（截取行）            |
   | sort          | '降序' | '原序'              | '降序' | 按综合分排序                    |
   | showComposite | boolean                      | true   | 是否显示综合分环                |
   | focus         | boolean                      | true   | 是否高亮某一对象卡              |
   | focusIndex    | number (0-based)             | 0      | 高亮第几张卡（排序后序位）      |
   | labelType     | 'number'|'symbol'|'keyword'  | number | 卡角标样式                      |
   | showAside     | boolean                      | true   | 是否显示「评分口径」装饰条      |
   | badge         | string                       | '10'   | 页眉编号徽标                    |
   Obj = { cn:string, en:string, scores:number[] }   scores 为 0–100，与 criteria 对齐
   ========================================================================== */
/* ── 页面属性契约 · defaultProps ──────────────────────────────────────────
   本页全部可见文案 / 数据 / 图片槽默认值集中于此，直接编辑即可换内容；
   组件内部以 { ...defaultProps, ...props } 合并，外部传同名 props 逐项覆盖。 */
export const defaultProps = {
  itemCount: 4,
  criteriaCount: 6,
  sort: '降序',
  showComposite: true,
  focus: true,
  focusIndex: 0,
  labelType: 'number',
  showAside: true,
  badge: '10',
  criteria: ['资本热度','收入兑现','技术壁垒','竞争格局','政策友好','退出预期'],
  objects: [
      { cn:'大模型',     en:'Foundation', scores:[95,60,88,50,70,82] },
      { cn:'AI 基础设施', en:'Infra',      scores:[85,82,90,65,80,76] },
      { cn:'企业服务',   en:'Enterprise', scores:[70,85,72,80,85,70] },
      { cn:'应用层',     en:'Application', scores:[78,70,60,45,75,66] },
      { cn:'医疗与生物', en:'BioHealth',  scores:[55,58,80,75,60,54] },
    ],
};

function SlideScore(props){
  useDeckStyles(props.theme);
  const T = (deckTheme ? deckTheme(props.theme) : {});
  const ACC = T.accent || '#46e3c6';
  const BLUE = T.blue || '#4a86ff';

  const {
    itemCount, criteriaCount, sort, showComposite, focus, focusIndex, labelType,
    showAside, badge, criteria, objects,
  } = { ...defaultProps, ...props };

  const cc = Math.max(3, Math.min(criteriaCount, criteria.length));
  const ic = Math.max(2, Math.min(itemCount, objects.length));
  const crit = criteria.slice(0, cc);
  let data = objects.slice(0, ic).map(o=>{
    const sc = o.scores.slice(0, cc);
    return { ...o, scores:sc, composite: Math.round(sc.reduce((a,b)=>a+b,0)/sc.length) };
  });
  if(sort === '降序') data = data.slice().sort((a,b)=>b.composite-a.composite);
  const fIdx = Math.max(0, Math.min(focusIndex, data.length - 1));
  const lbl = (i)=> deckLabel(labelType, i, { keyword:'OBJ' });
  // 卡片较多时收紧：标题单行不换行、缩小字号与内边距，避免内容竖向被裁
  const many = data.length >= 4;
  const nameFs = data.length >= 5 ? 30 : data.length >= 4 ? 34 : 'var(--type-sub)';
  const cardPad = data.length >= 5 ? '22px 22px' : '26px 28px';

  return (
    <SlideShell orbs={[{ w:520, h:520, right:-160, top:-150,
        color:`radial-gradient(circle at 50% 50%, ${hexA(ACC,.16)}, ${hexA(ACC,0)} 70%)` }]}>
      <SlideHead no={badge} en="Scorecard" cn="赛道评分 · 多维测评"
        badge={labelType==='keyword'?'SCORE':labelType==='symbol'?'◆':badge} />

      <div style={{flex:'1 1 0', minHeight:0, display:'grid', marginTop:26,
            gridTemplateColumns:`repeat(${data.length}, minmax(0,1fr))`, gap:22}}>
        {data.map((o,i)=>{
          const hot = focus && i===fIdx;
          const barCol = hot ? ACC : BLUE;
          return (
            <div key={i} className={'dk-glass dk-anim d'+Math.min(i+1,6)} style={{minHeight:0, borderRadius:'var(--dk-radius)',
                  padding:cardPad, display:'flex', flexDirection:'column',
                  boxShadow: hot?`0 34px 80px ${hexA(ACC,.26)}, 0 0 0 2px ${ACC}`:'0 22px 54px rgba(3,8,30,.42)'}}>
              {/* 卡头 */}
              <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', gap:12}}>
                <div style={{minWidth:0}}>
                  <div style={{display:'flex', alignItems:'center', gap:10, marginBottom:6}}>
                    <span style={{fontFamily:'var(--font-mono)', fontSize:13, color: hot?ACC:'var(--ink-faint)',
                        border:`1px solid ${hot?hexA(ACC,.5):'rgba(255,255,255,.16)'}`, borderRadius:7, padding:'2px 9px'}}>{lbl(i)}</span>
                    <span style={{fontFamily:'var(--font-mono)', fontSize:13, color:'var(--ink-faint)'}}>{o.en}</span>
                  </div>
                  <div style={{fontFamily:'var(--font-cn)', fontWeight:900, fontSize:nameFs, color: hot?ACC:'#fff', lineHeight:1.05,
                      whiteSpace: many?'nowrap':'normal', overflow:'hidden', textOverflow:'ellipsis'}}>{o.cn}</div>
                </div>
                {showComposite && <Ring value={o.composite} color={hot?ACC:BLUE} hexA={hexA} />}
              </div>

              <div style={{height:1, background:'rgba(255,255,255,.1)', margin:'18px 0'}}></div>

              {/* 维度条 */}
              <div style={{flex:'1 1 0', minHeight:0, display:'flex', flexDirection:'column', justifyContent:'space-around', gap:10}}>
                {o.scores.map((v,ci)=>(
                  <div key={ci}>
                    <div style={{display:'flex', justifyContent:'space-between', alignItems:'baseline', marginBottom:5}}>
                      <span style={{fontFamily:'var(--font-cn)', fontSize:'var(--type-small)', color:'var(--ink-dim)'}}>{crit[ci]}</span>
                      <span style={{fontFamily:'var(--font-display)', fontWeight:800, fontSize:22, color: hot?ACC:'#fff'}}>{v}</span>
                    </div>
                    <div style={{height:9, borderRadius:6, background:'rgba(255,255,255,.1)', overflow:'hidden'}}>
                      <div style={{height:'100%', width:`${v}%`, borderRadius:6,
                          background: hot?`linear-gradient(90deg, ${hexA(ACC,.7)}, ${ACC})`:`linear-gradient(90deg, ${hexA(BLUE,.6)}, ${BLUE})`}}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {showAside && (
        <div className="dk-glass-dark dk-anim d5" style={{marginTop:18, flexShrink:0, borderRadius:20, padding:'15px 30px',
              display:'flex', alignItems:'center', gap:22}}>
          <span style={{flexShrink:0, fontFamily:'var(--font-mono)', fontSize:14, letterSpacing:'.12em', color:ACC}}>评分口径</span>
          <p style={{fontSize:'var(--type-tiny)', lineHeight:1.5, color:'var(--ink-dim)', textWrap:'pretty'}}>
            综合分为各维度（0–100）等权平均；<b style={{color:'#fff'}}>{data[0].cn}</b> 以 <b style={{color:ACC}}>{data[0].composite}</b> 分领先——
            资本热度突出但收入兑现与竞争格局承压。评分为调研主观测评，仅供研究参考。
          </p>
        </div>
      )}
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

/* 综合分环 */
function Ring({ value, color, hexA }){
  const R=34, C=2*Math.PI*R, p=Math.max(0,Math.min(value,100))/100;
  return (
    <svg width="86" height="86" viewBox="0 0 86 86" style={{flexShrink:0}}>
      <circle cx="43" cy="43" r={R} fill="none" stroke="rgba(255,255,255,.12)" strokeWidth="8" />
      <circle cx="43" cy="43" r={R} fill="none" stroke={color} strokeWidth="8" strokeLinecap="round"
        strokeDasharray={`${C*p} ${C}`} transform="rotate(-90 43 43)" style={{filter:`drop-shadow(0 0 8px ${hexA(color,.5)})`}} />
      <text x="43" y="50" textAnchor="middle" fontFamily="var(--font-display)" fontWeight="900" fontSize="30" fill="#fff">{value}</text>
    </svg>
  );
}

export default SlideScore;

/* ── 模板参数 schema（自描述 · 迁移即带控件；Tweaks 由此自动生成） ── */
export const slideSpec = { defaults: defaultProps, slot:'score', name:'赛道评分 · Score', controls:[
  { prop:'itemCount', type:'slider', label:'数量', default:4, min:2, max:5, step:1 },
  { prop:'criteriaCount', type:'slider', label:'行数量', default:6, min:3, max:6, step:1 },
  { prop:'sort', type:'radio', label:'排序', default:'降序', options:['降序','原序'] },
  { prop:'showComposite', type:'toggle', label:'综合分环', default:true },
  { prop:'showAside', type:'toggle', label:'装饰文案', default:true },
  { prop:'labelType', type:'labelType', label:'标签类型', default:'数字' },
  { prop:'focus', type:'focus', label:'重点信息 Focus', default:true },
  { prop:'focusIndex', type:'slider', label:'焦点序号', default:0, min:0, max:(p)=>p.itemCount-1, maxFromKey:'itemCount', maxFromKeyOffset:-1, displayOffset:1, step:1, showIf:(p)=>p.focus },
]};
