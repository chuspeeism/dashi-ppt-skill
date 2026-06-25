import { useDeckStyles, deckTheme, deckLabel, SlideShell, SlideHead } from './DeckKit.jsx';
/* ============================================================================
   SlideThesis — 论点推演（命题 + 论据阶梯 + 推论 · 复杂文本排版）
   独立组件：仅靠 props 控制内容与样式；render 时自注入 DeckKit 基座样式。
   非卡片 · 非图表 · 论证结构排版：左侧立「命题」，右侧沿脊线逐级展开论据，收束于推论。

   ── 区别于同类既有页 ──────────────────────────────────────────────────────
   Takeaway(并列要点)、Process(横向步骤) → 本页表达「论证链」：命题→论据(逐级递进)→推论，
   以连续脊线 + 悬挂式段落 + 终点推论块呈现推理过程，而非并列条目。

   ── 可调参数（Props） ──────────────────────────────────────────────────────
   | prop         | 类型                        | 默认 | 说明                       |
   | itemCount    | number (2–5)                | 4    | 论据数量（截取 premises）  |
   | focus        | boolean                     | true | 是否高亮某条论据           |
   | focusIndex   | number                      | 1    | 高亮第几条                 |
   | labelType    | number|symbol|keyword       | number | 论据编号样式             |
   | showAside    | boolean                     | true | 装饰文案：左侧命题面板     |
   | showConclusion | boolean                   | true | 是否显示终点「推论」块     |
   | thesis/conclusion/premises | …             | —    | 文案（默认=本报告核心论证）|
   ========================================================================== */
/* ── 页面属性契约 · defaultProps ──────────────────────────────────────────
   本页全部可见文案 / 数据 / 图片槽默认值集中于此，直接编辑即可换内容；
   组件内部以 { ...defaultProps, ...props } 合并，外部传同名 props 逐项覆盖。 */
export const defaultProps = {
  itemCount: 4,
  focus: true,
  focusIndex: 1,
  labelType: 'number',
  showAside: true,
  showConclusion: true,
  head: { no:'论纲', en:'The Argument', cn:'一笔钱，三层判断' },
  thesis: {
      tag:'核心命题',
      text:'2024 年的 AI 融资热，本质是一次结构性的资本再分配，而非一场普涨。',
    },
  conclusion: {
      tag:'推论',
      text:'因此，押注「结构」比押注「个体」更接近长期胜算——确定性藏在卖铲子的环节里。',
    },
  premises: [
      { lead:'前提一', text:'总量创下历史新高，但增量高度集中——大模型一条赛道吞下逾四成资金。' },
      { lead:'前提二', text:'头部公司估值领先收入数个身位，繁荣的兑现压力被推迟，而非消除。' },
      { lead:'前提三', text:'算力、数据与云等基础设施环节，无论谁胜出都稳定收取过路费。' },
      { lead:'前提四', text:'应用层两极分化，有真实 PMF 的产品跑出，纯叙事项目开始退潮。' },
      { lead:'前提五', text:'退出通道收窄，一级估值与二级定价之间的剪刀差，正在重新定价风险。' },
    ],
};

function SlideThesis(props){
  useDeckStyles(props.theme);
  const T = (deckTheme ? deckTheme(props.theme) : {});
  const ACC = T.accent || '#46e3c6';

  const {
    itemCount, focus, focusIndex, labelType, showAside, showConclusion, head,
    thesis, conclusion, premises,
  } = { ...defaultProps, ...props };

  const shown = premises.slice(0, Math.max(2, Math.min(itemCount, premises.length)));
  const fIdx = Math.max(0, Math.min(focusIndex, shown.length - 1));
  const compact = showConclusion && shown.length >= 5;
  const num = (i)=> deckLabel(labelType, i, { keyword:'IF' });

  return (
    <SlideShell orbs={[{ w:520, h:520, left:-180, top:-160,
        color:'radial-gradient(circle at 50% 50%, '+hexA(ACC,.16)+', rgba(40,90,230,0) 70%)' }]}>
      <SlideHead no="论纲" en={head.en} cn={head.cn}
        badge={labelType==='keyword'?'IF':labelType==='symbol'?'◆':'∴'} />

      <div style={{flex:'1 1 0', minHeight:0, display:'grid', marginTop:compact?24:30,
            gridTemplateColumns: showAside ? '0.86fr 1.14fr' : '1fr', gap:compact?48:58}}>

        {/* 左：命题 */}
        {showAside && (
          <div className="dk-glass dk-anim d1" style={{borderRadius:'var(--dk-radius)', padding:'46px 42px',
              display:'flex', flexDirection:'column', justifyContent:'center', position:'relative', overflow:'hidden'}}>
            <span aria-hidden="true" style={{position:'absolute', right:28, bottom:-30,
                fontFamily:'var(--font-display)', fontWeight:900, fontSize:240, lineHeight:1, color:hexA(ACC,.10)}}>∴</span>
            <span style={{fontFamily:'var(--font-mono)', fontSize:15, letterSpacing:'.18em', color:ACC,
                textTransform:'uppercase', marginBottom:24}}>{thesis.tag}</span>
            <p style={{fontFamily:'var(--font-cn)', fontWeight:900, fontSize:'var(--type-h2)', lineHeight:1.22,
                color:'#fff', textWrap:'balance', letterSpacing:'.01em', zIndex:1}}>{thesis.text}</p>
            <div style={{marginTop:34, display:'flex', alignItems:'center', gap:14, color:'var(--ink-faint)'}}>
              <span style={{height:2, width:54, background:ACC}}></span>
              <span style={{fontFamily:'var(--font-mono)', fontSize:14, letterSpacing:'.1em'}}>据此推演如右</span>
            </div>
          </div>
        )}

        {/* 右：论据阶梯（脊线 + 悬挂段落）+ 推论 */}
        <div data-dashi-theme09-thesis-stack="true" style={{position:'relative', display:'flex', flexDirection:'column', minHeight:0}}>
          <div style={{position:'absolute', left:26, top:8, bottom:8, width:2,
              background:'linear-gradient(180deg,'+hexA(ACC,.55)+','+hexA(ACC,.12)+')'}}></div>
          <div data-dashi-theme09-thesis-list="true" style={{display:'flex', flexDirection:'column', gap:compact?8:12, flex:'1 1 0', minHeight:0, justifyContent:'space-between'}}>
            {shown.map((p,i)=>{
              const hot = focus && i===fIdx;
              return (
                <div key={i} data-dashi-theme09-thesis-premise="true" className={'dk-anim d'+Math.min(i+1,5)} style={{
                    display:'flex', alignItems:'center', gap:compact?18:24, paddingLeft:0}}>
                  <span style={{flexShrink:0, width:compact?42:48, height:compact?42:48, borderRadius:'50%', zIndex:1,
                      display:'grid', placeItems:'center', fontFamily:'var(--font-display)', fontWeight:900, fontSize:compact?17:20,
                      color: hot ? '#04122e' : ACC, background: hot ? ACC : 'var(--navy-card)',
                      border:'2px solid '+(hot?ACC:hexA(ACC,.4)),
                      boxShadow: hot ? '0 12px 30px '+hexA(ACC,.4) : 'none'}}>{num(i)}</span>
                  <div style={{flex:1, minWidth:0, borderRadius:compact?14:16, padding:compact?'9px 22px':'13px 26px',
                      background: hot ? 'linear-gradient(120deg,'+hexA(ACC,.12)+',rgba(255,255,255,.02))' : 'rgba(255,255,255,.03)',
                      border:'1px solid '+(hot?hexA(ACC,.42):'rgba(255,255,255,.10)')}}>
                    <span style={{fontFamily:'var(--font-mono)', fontSize:compact?12:13, letterSpacing:'.16em',
                        textTransform:'uppercase', color: hot ? ACC : 'var(--ink-faint)'}}>{p.lead}</span>
                    <p style={{fontFamily:'var(--font-cn)', fontWeight:600, fontSize:compact?22:'var(--type-small)',
                        lineHeight:compact?1.32:1.42, color: hot ? '#fff' : 'var(--ink-dim)', marginTop:compact?2:3, textWrap:'pretty'}}>{p.text}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* 推论：脊线终点 */}
          {showConclusion && (
            <div data-dashi-theme09-thesis-conclusion="true" className="dk-anim d5" style={{display:'flex', alignItems:'center', gap:compact?20:26, marginTop:compact?10:14, flexShrink:0}}>
              <span style={{flexShrink:0, width:compact?48:54, height:compact?48:54, borderRadius:14, zIndex:1, display:'grid',
                  placeItems:'center', fontFamily:'var(--font-display)', fontWeight:900, fontSize:compact?26:30,
                  color:'#04122e', background:ACC, boxShadow:'0 14px 34px '+hexA(ACC,.45)}}>∴</span>
              <div style={{flex:1, minWidth:0, borderRadius:18, padding:compact?'15px 28px':'20px 32px',
                  background:'linear-gradient(120deg,'+hexA(ACC,.18)+','+hexA('#4a86ff',.10)+')',
                  border:'1px solid '+hexA(ACC,.5)}}>
                <span style={{fontFamily:'var(--font-mono)', fontSize:compact?12:13, letterSpacing:'.18em',
                    textTransform:'uppercase', color:ACC}}>{conclusion.tag}</span>
                <p style={{fontFamily:'var(--font-cn)', fontWeight:900, fontSize:compact?'var(--type-body)':'var(--type-sub)',
                    lineHeight:compact?1.26:1.3, color:'#fff', marginTop:compact?2:4, textWrap:'balance'}}>{conclusion.text}</p>
              </div>
            </div>
          )}
        </div>
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

export default SlideThesis;

/* ── 模板参数 schema（自描述 · 迁移即带控件；Tweaks 由此自动生成） ── */
export const slideSpec = { defaults: defaultProps, slot:'thesis', name:'论点推演 · Thesis', controls:[
  { prop:'itemCount', type:'slider', label:'数量', default:4, min:2, max:5, step:1 },
  { prop:'showAside', type:'toggle', label:'装饰文案', default:true },
  { prop:'showConclusion', type:'toggle', label:'推论块', default:true },
  { prop:'labelType', type:'labelType', label:'标签类型', default:'数字' },
  { prop:'focus', type:'focus', label:'重点信息 Focus', default:true },
  { prop:'focusIndex', type:'slider', label:'焦点序号', default:1, min:0, max:(p)=>p.itemCount-1, maxFromKey:'itemCount', maxFromKeyOffset:-1, displayOffset:1, step:1, showIf:(p)=>p.focus },
]};
