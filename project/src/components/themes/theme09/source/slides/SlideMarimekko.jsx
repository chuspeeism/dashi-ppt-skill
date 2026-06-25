import { useDeckStyles, deckTheme, deckLabel, SlideShell, SlideHead } from './DeckKit.jsx';
/* ============================================================================
   SlideMarimekko — 市占矩形（变宽堆叠 / Mekko · 列宽∝类别规模，段高∝构成占比）
   独立组件：仅靠 props 控制内容与样式；render 时自注入 DeckKit 基座样式。
   与 Stacked（等宽堆叠条）、Treemap（squarified 矩形树图）刻意区分：本页为
   「Marimekko 变宽堆叠」——每列宽度按该类别在总盘中的份额变化、列内各分段高度
   按构成占比堆叠，一眼读出「哪个类别更大 × 其内部结构」两个维度。

   ── 可调参数（Props） ──────────────────────────────────────────────────────
   | prop       | 类型                          | 默认值 | 说明                            |
   | cats       | {label,vals}[]                | 见下   | 数据源（每条 = 一个类别列）     |
   | segs       | string[]                      | 见下   | 分段名称（图例，长度 = 段数）   |
   | catCount   | number (3–6)                  | 5      | 展示类别数（截取列）            |
   | segCount   | number (2–5)                  | 4      | 展示分段数（截取段）            |
   | showSegPct | boolean                       | true   | 段内占比标注                    |
   | focus      | boolean                       | true   | 高亮某一类别列                  |
   | focusIndex | number (0-based)              | 0      | 高亮第几列                      |
   | labelType  | 'number'|'symbol'|'keyword'   | number | 图例角标样式                    |
   | showAside  | boolean                       | true   | 「读图」装饰条                  |
   | head       | {no,en,cn}                    | 见下   | 页眉                            |
   | theme      | Partial<DeckTheme>            | —      | 设计令牌覆盖                    |
   Cat = { label:string, vals:number[] }   vals 与 segs 对齐
   ========================================================================== */
/* ── 页面属性契约 · defaultProps ──────────────────────────────────────────
   本页全部可见文案 / 数据 / 图片槽默认值集中于此，直接编辑即可换内容；
   组件内部以 { ...defaultProps, ...props } 合并，外部传同名 props 逐项覆盖。 */
export const defaultProps = {
  catCount: 5,
  segCount: 4,
  showSegPct: true,
  focus: true,
  focusIndex: 0,
  labelType: 'number',
  showAside: true,
  unit: '亿$',
  head: { no:'08', en:'Marimekko · Share × Mix', cn:'市占矩形 · 规模 × 构成' },
  segs: ['种子 / A 轮','B / C 轮','成长期','后期 / Pre-IPO','战略 / 并购'],
  cats: [
      { label:'大模型',     vals:[60, 120, 200, 230, 90] },
      { label:'算力基建',   vals:[30, 70, 130, 140, 60] },
      { label:'应用层',     vals:[55, 60, 50, 25, 18] },
      { label:'企业服务',   vals:[35, 45, 38, 22, 14] },
      { label:'其它赛道',   vals:[40, 30, 28, 20, 12] },
      { label:'机器人',     vals:[28, 34, 30, 16, 10] },
    ],
};

function SlideMarimekko(props){
  useDeckStyles(props.theme);
  const T = (deckTheme ? deckTheme(props.theme) : {});
  const ACC = T.accent || '#46e3c6';
  const BLUE = T.blue || '#4a86ff';
  const VIO = T.violet || '#9f7bff';
  const WARN = T.warn || '#ffb27a';
  const PALETTE = [BLUE, ACC, VIO, WARN, '#7fa8ff'];

  const {
    catCount, segCount, showSegPct, focus, focusIndex, labelType, showAside,
    unit, head, segs, cats,
  } = { ...defaultProps, ...props };

  const sc = Math.max(2, Math.min(segCount, segs.length));
  const cc = Math.max(3, Math.min(catCount, cats.length));
  const segNames = segs.slice(0, sc);
  const cols = cats.slice(0, cc).map(c=>{ const vals=c.vals.slice(0,sc); return { label:c.label, vals, sum:vals.reduce((a,b)=>a+b,0) }; });
  const grand = cols.reduce((a,c)=>a+c.sum,0);
  const fIdx = Math.max(0, Math.min(focusIndex, cols.length - 1));
  const lbl = (i)=> deckLabel(labelType, i, { keyword:'SEG' });

  return (
    <SlideShell orbs={[{ w:520, h:520, right:-170, top:-150,
        color:`radial-gradient(circle at 50% 50%, ${hexA(BLUE,.18)}, ${hexA(BLUE,0)} 70%)` }]}>
      <SlideHead no={head.no} en={head.en} cn={head.cn}
        badge={labelType==='keyword'?'MEKKO':labelType==='symbol'?'■':head.no} />

      <div style={{flex:'1 1 0', minHeight:0, display:'flex', flexDirection:'column', marginTop:26}}>
        <div className="dk-glass dk-anim d1" style={{flex:'1 1 0', minHeight:0, borderRadius:'var(--dk-radius)',
              padding:'24px 40px 18px', display:'flex', flexDirection:'column'}}>
          <div style={{display:'flex', justifyContent:'space-between', alignItems:'baseline', marginBottom:14}}>
            <span style={{fontSize:'var(--type-sub)', fontWeight:700}}>各赛道资金规模 × 轮次构成</span>
            <span style={{fontFamily:'var(--font-mono)', fontSize:'var(--type-tiny)', color:'var(--ink-faint)'}}>列宽∝规模 · 段高∝占比 · {unit}</span>
          </div>

          {/* mekko 区：每列宽度按该类别占比 flexGrow */}
          <div style={{flex:'1 1 0', minHeight:0, display:'flex', gap:6}}>
            {cols.map((c,ci)=>{
              const hot = focus && ci===fIdx;
              const wShare = Math.round(c.sum/grand*100);
              return (
                <div key={ci} className={'dk-anim d'+Math.min(ci+1,6)} style={{flexGrow:c.sum, flexBasis:0, minWidth:0,
                      display:'flex', flexDirection:'column', opacity: focus&&!hot?.62:1}}>
                  {/* 列头：类别规模份额 */}
                  <div style={{textAlign:'center', marginBottom:8}}>
                    <div style={{fontFamily:'var(--font-display)', fontWeight:900, fontSize:hot?26:22, color:hot?ACC:'#fff', lineHeight:1}}>{wShare}%</div>
                  </div>
                  {/* 堆叠柱（高度 100%，段高 = flexGrow） */}
                  <div style={{flex:'1 1 0', minHeight:0, display:'flex', flexDirection:'column-reverse', borderRadius:10, overflow:'hidden',
                        border:`1px solid ${hot?ACC:'rgba(255,255,255,.16)'}`,
                        boxShadow: hot?`0 22px 56px ${hexA(ACC,.3)}, 0 0 0 2px ${ACC}`:'0 14px 36px rgba(3,8,30,.42)'}}>
                    {c.vals.map((v,si)=>{
                      const pct = Math.round(v/c.sum*100);
                      return (
                        <div key={si} style={{flexGrow:v, flexBasis:0, position:'relative', display:'flex', alignItems:'center', justifyContent:'center',
                              background:`linear-gradient(176deg, rgba(255,255,255,.3), rgba(255,255,255,.06) 30%, rgba(255,255,255,0) 56%, rgba(4,10,34,.16) 100%), ${PALETTE[si%PALETTE.length]}`,
                              borderTop: si<c.vals.length-1?'1px solid rgba(4,10,30,.34)':'none'}}>
                          {showSegPct && pct>=14 && (
                            <span style={{fontFamily:'var(--font-display)', fontWeight:800, fontSize:16, color:'rgba(4,12,38,.82)', textShadow:'0 1px 0 rgba(255,255,255,.3)'}}>{pct}%</span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                  {/* 列脚：类别名 + 规模 */}
                  <div style={{textAlign:'center', marginTop:10}}>
                    <div style={{fontFamily:'var(--font-cn)', fontWeight:hot?800:600, fontSize:21, color:hot?ACC:'rgba(255,255,255,.82)', whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis'}}>{c.label}</div>
                    <div style={{fontFamily:'var(--font-mono)', fontSize:13, color:'var(--ink-faint)', marginTop:2}}>{c.sum} {unit}</div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* 图例 */}
          <div style={{display:'flex', gap:26, paddingTop:14, marginTop:10, borderTop:'1px solid rgba(255,255,255,.1)', flexWrap:'wrap', fontSize:'var(--type-tiny)', color:'var(--ink-dim)'}}>
            {segNames.map((s,i)=>(
              <span key={i} style={{display:'inline-flex', alignItems:'center', gap:10}}>
                <i style={{width:18, height:18, borderRadius:5, background:PALETTE[i%PALETTE.length]}}></i>{lbl(i)!==String(i+1).padStart(2,'0')?lbl(i)+' · ':''}{s}
              </span>
            ))}
          </div>
        </div>

        {showAside && (()=>{ const c=cols[fIdx]; const top=c.vals.indexOf(Math.max(...c.vals)); return (
          <div className="dk-glass-dark dk-anim d2" style={{marginTop:18, flexShrink:0, borderRadius:20, padding:'18px 30px', display:'flex', alignItems:'center', gap:22}}>
            <span style={{flexShrink:0, fontFamily:'var(--font-mono)', fontSize:14, letterSpacing:'.12em', color:ACC}}>读图</span>
            <p style={{fontSize:'var(--type-small)', lineHeight:1.5, color:'rgba(255,255,255,.86)', textWrap:'pretty'}}>
              <b style={{color:'#fff'}}>{c.label}</b>以 <b style={{color:ACC}}>{Math.round(c.sum/grand*100)}%</b> 的资金占比领跑全盘（列最宽），
              其内部以 <b style={{color:'#fff'}}>{segNames[top]}</b> 为主、占该赛道 <b style={{color:ACC}}>{Math.round(c.vals[top]/c.sum*100)}%</b>；宽 × 高同读，规模与结构一目了然。
            </p>
          </div>
        );})()}
      </div>
    </SlideShell>
  );

  function hexA(hex, a){
    if(!hex || hex[0] !== '#') return hex;
    const x = hex.slice(1); const f = x.length===3 ? x.split('').map(c=>c+c).join('') : x;
    return `rgba(${parseInt(f.slice(0,2),16)},${parseInt(f.slice(2,4),16)},${parseInt(f.slice(4,6),16)},${a})`;
  }
}

export default SlideMarimekko;

/* ── 模板参数 schema（自描述 · 迁移即带控件；Tweaks 由此自动生成） ── */
export const slideSpec = { defaults: defaultProps, slot:'marimekko', name:'市占矩形 · Marimekko', controls:[
  { prop:'catCount', type:'slider', label:'列数量', default:5, min:3, max:6, step:1 },
  { prop:'segCount', type:'slider', label:'分段数量', default:4, min:2, max:5, step:1 },
  { prop:'showSegPct', type:'toggle', label:'段内占比', default:true },
  { prop:'showAside', type:'toggle', label:'装饰文案', default:true, desc:'读图条' },
  { prop:'labelType', type:'labelType', label:'标签类型', default:'数字' },
  { prop:'focus', type:'focus', label:'重点信息 Focus', default:true },
  { prop:'focusIndex', type:'slider', label:'焦点序号', default:0, min:0, max:(p)=>p.catCount-1, maxFromKey:'catCount', maxFromKeyOffset:-1, displayOffset:1, step:1, showIf:(p)=>p.focus },
]};
