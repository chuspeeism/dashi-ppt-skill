import { useDeckStyles, deckTheme, deckLabel, SlideShell, SlideHead } from './DeckKit.jsx';
/* ============================================================================
   SlideFAQ — 关键问答（问 + 答 列表）
   独立组件：仅靠 props 控制内容与样式；render 时自注入 DeckKit 基座样式。
   非图表内容页 · 通用版式「Q&A 列表」（可单 / 双列）。

   ── 可调参数（Props） ──────────────────────────────────────────────────────
   | prop        | 类型                          | 默认值 | 说明                          |
   | items       | QA[]                          | 见下   | 问答数据源                    |
   | itemCount   | number (3–6)                  | 4      | 展示的问答数（截取 items）    |
   | columns     | number (1–2)                  | 2      | 每行列数                      |
   | focus       | boolean                       | true   | 是否高亮某条                  |
   | focusIndex  | number (0-based)              | 0      | 高亮第几条                    |
   | labelType   | 'number'|'symbol'|'keyword'   | number | 序号样式                      |
   | showAside   | boolean                       | true   | 是否显示顶部「引言」          |
   | intro       | string                        | 见下   | 引言文案                      |
   | head        | {no,en,cn}                    | 见下   | 页眉编号 / 英文 / 中文标题    |
   | theme       | Partial<DeckTheme>            | —      | 设计令牌覆盖                  |
   QA = { q:string, a:string }
   ========================================================================== */
/* ── 页面属性契约 · defaultProps ──────────────────────────────────────────
   本页全部可见文案 / 数据 / 图片槽默认值集中于此，直接编辑即可换内容；
   组件内部以 { ...defaultProps, ...props } 合并，外部传同名 props 逐项覆盖。 */
export const defaultProps = {
  itemCount: 4,
  columns: 2,
  focus: true,
  focusIndex: 0,
  labelType: 'number',
  showAside: true,
  head: { no:'14', en:'Q&A', cn:'关键问答' },
  intro: '面对这轮 AI 融资热，最常被问到的六个问题，我们用一句话给出研究视角的回答。',
  items: [
      { q:'这轮 AI 融资是泡沫吗？', a:'局部泡沫明显，但基础设施与有收入的应用具备坚实支撑，不宜一概而论。' },
      { q:'资金最终流向了哪里？',   a:'过半流入通用大模型与算力基础设施，旧金山湾区吸走逾六成。' },
      { q:'普通公司还有机会吗？',   a:'有——在垂直场景做深数据护城河，比追逐通用大模型更现实可行。' },
      { q:'什么时候会洗牌？',       a:'头部公司 IPO 表现是关键信号，若破发将触发全行业估值回调。' },
      { q:'如何判断公司是否健康？', a:'看收入兑现速度、续约率与现金跑道，而非单看融资估值。' },
      { q:'下一阶段的主线是什么？', a:'从「赌叙事」转向「看兑现」，能把技术变成收入的公司将胜出。' },
    ],
};

function SlideFAQ(props){
  useDeckStyles(props.theme);
  const T = (deckTheme ? deckTheme(props.theme) : {});
  const ACC = T.accent || '#46e3c6';

  const {
    itemCount, columns, focus, focusIndex, labelType, showAside, head,
    intro, items,
  } = { ...defaultProps, ...props };

  const cols = Math.max(1, Math.min(columns, 2));
  const shown = items.slice(0, Math.max(3, Math.min(itemCount, items.length)));
  const fIdx = Math.max(0, Math.min(focusIndex, shown.length - 1));
  const denseSingleCol = cols === 1 && shown.length >= 6;
  const questionSize = denseSingleCol ? 24 : 'var(--type-sub)';
  const num = (i)=> deckLabel(labelType, i, { keyword:'Q' });

  return (
    <SlideShell orbs={[{ w:480, h:480, left:-160, bottom:-170,
        color:'radial-gradient(circle at 50% 50%, rgba(70,227,198,.18), rgba(70,227,198,0) 70%)' }]}>
      <SlideHead no={head.no} en={head.en} cn={head.cn}
        badge={labelType==='keyword'?'FAQ':labelType==='symbol'?'◆':head.no} />

      <div style={{flex:'1 1 0', minHeight:0, display:'flex', flexDirection:'column', marginTop:28}}>
        {showAside && intro && (
          <p className="dk-anim d1" style={{flexShrink:0, fontSize:'var(--type-body)', fontWeight:600, lineHeight:1.45,
              color:'rgba(255,255,255,.86)', textWrap:'pretty', maxWidth:1500, marginBottom:20}}>{intro}</p>
        )}

        <div style={{flex:'1 1 0', minHeight:0, display:'grid',
              gridTemplateColumns:`repeat(${cols}, 1fr)`, gridAutoRows:'minmax(0,1fr)', gap:18}}>
          {shown.map((it,i)=>{
            const hot = focus && i===fIdx;
            return (
              <div key={i} className={'dk-anim d'+Math.min(i+1,5)} style={{
                minHeight:0, overflow:'hidden', display:'flex', gap:24, borderRadius:'var(--dk-radius)', padding:'24px 32px',
                background: hot ? 'linear-gradient(120deg, '+hexA(ACC,.12)+', rgba(255,255,255,.03))' : 'rgba(255,255,255,.035)',
                border:`1px solid ${hot ? hexA(ACC,.45) : 'rgba(255,255,255,.10)'}`,
                boxShadow: hot ? `0 24px 60px ${hexA(ACC,.20)}` : 'none'}}>
                <span aria-hidden="true" style={{flexShrink:0, fontFamily:'var(--font-display)', fontWeight:900,
                    fontSize:58, lineHeight:.85, width:78, textAlign:'center', color:'transparent',
                    WebkitTextStroke:`2px ${hot ? hexA(ACC,.6) : 'rgba(255,255,255,.14)'}`}}>{num(i)}</span>
                <div style={{minWidth:0, display:'flex', flexDirection:'column', justifyContent:'center'}}>
                  <div style={{display:'flex', gap:10, alignItems:'baseline', marginBottom:10}}>
                    <span style={{flexShrink:0, fontFamily:'var(--font-mono)', fontWeight:700, fontSize:18, color:ACC}}>Q</span>
                    <span data-dashi-theme09-faq-question="true" style={{fontFamily:'var(--font-cn)', fontWeight:800, fontSize:questionSize,
                        color: hot ? ACC : '#fff', lineHeight:1.2}}>{it.q}</span>
                  </div>
                  <div style={{display:'flex', gap:10, alignItems:'flex-start'}}>
                    <span style={{flexShrink:0, fontFamily:'var(--font-mono)', fontWeight:700, fontSize:18, color:'var(--ink-faint)'}}>A</span>
                    <p style={{fontSize:'var(--type-small)', lineHeight:1.45, color:'var(--ink-dim)', textWrap:'pretty'}}>{it.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
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

export default SlideFAQ;

/* ── 模板参数 schema（自描述 · 迁移即带控件；Tweaks 由此自动生成） ── */
export const slideSpec = { defaults: defaultProps, slot:'faq', name:'关键问答 · Q&A', controls:[
  { prop:'itemCount', type:'slider', label:'数量', default:4, min:3, max:6, step:1 },
  { prop:'columns', type:'slider', label:'每行数量', default:2, min:1, max:2, step:1 },
  { prop:'showAside', type:'toggle', label:'装饰文案', default:true },
  { prop:'labelType', type:'labelType', label:'标签类型', default:'数字' },
  { prop:'focus', type:'focus', label:'重点信息 Focus', default:true },
  { prop:'focusIndex', type:'slider', label:'焦点序号', default:0, min:0, max:(p)=>p.itemCount-1, maxFromKey:'itemCount', maxFromKeyOffset:-1, displayOffset:1, step:1, showIf:(p)=>p.focus },
]};
