import { useDeckStyles, deckTheme, deckLabel, SlideShell, SlideHead } from './DeckKit.jsx';
/* ============================================================================
   SlideTakeaway — 核心要点速览（左侧导语 + 右侧编号要点列表）
   独立组件：仅靠 props 控制内容与样式；render 时自注入 DeckKit 基座样式。
   非图表内容页 · 通用版式「导语 + 编号要点列表」。

   ── 可调参数（Props） ──────────────────────────────────────────────────────
   | prop        | 类型                          | 默认值 | 说明                          |
   | items       | Item[]                        | 见下   | 要点数据源                    |
   | itemCount   | number (3–6)                  | 5      | 展示的要点数（截取 items）    |
   | focus       | boolean                       | true   | 是否高亮某条                  |
   | focusIndex  | number (0-based)              | 1      | 高亮第几条                    |
   | labelType   | 'number'|'symbol'|'keyword'   | number | 编号样式                      |
   | showAside   | boolean                       | true   | 是否显示左侧导语面板          |
   | lead        | {tag,text}                    | 见下   | 导语面板内容                  |
   | head        | {no,en,cn}                    | 见下   | 页眉编号 / 英文 / 中文标题    |
   | theme       | Partial<DeckTheme>            | —      | 设计令牌覆盖                  |
   Item = { title:string, desc:string }
   ========================================================================== */
/* ── 页面属性契约 · defaultProps ──────────────────────────────────────────
   本页全部可见文案 / 数据 / 图片槽默认值集中于此，直接编辑即可换内容；
   组件内部以 { ...defaultProps, ...props } 合并，外部传同名 props 逐项覆盖。 */
export const defaultProps = {
  itemCount: 5,
  focus: true,
  focusIndex: 1,
  labelType: 'number',
  showAside: true,
  head: { no:'11', en:'Key Takeaways', cn:'核心要点速览' },
  lead: {
      tag:'全局判断',
      text:'2024 是 AI 融资的资本大年，但繁荣之下结构正在分化——读懂以下要点，便读懂了这轮周期的方向。',
    },
  items: [
      { title:'资本向头部集中', desc:'大模型与头部公司吸走过半资金，长尾募资难度显著上升。' },
      { title:'估值与收入背离', desc:'明星公司估值领先收入数个身位，兑现压力持续累积。' },
      { title:'基础设施先行',   desc:'算力、数据、云服务等「卖铲子」环节确定性最高。' },
      { title:'应用层开始分化', desc:'有 PMF 的垂直应用跑出，纯叙事项目逐步退潮。' },
      { title:'地域高度集聚',   desc:'旧金山湾区继续虹吸全球顶尖人才与资本。' },
      { title:'退出窗口临近',   desc:'头部公司 IPO 表现，将重新校准全行业估值锚。' },
    ],
};

function SlideTakeaway(props){
  useDeckStyles(props.theme);
  const T = (deckTheme ? deckTheme(props.theme) : {});
  const ACC = T.accent || '#46e3c6';

  const {
    itemCount, focus, focusIndex, labelType, showAside, head, lead,
    items,
  } = { ...defaultProps, ...props };

  const shown = items.slice(0, Math.max(3, Math.min(itemCount, items.length)));
  const fIdx = Math.max(0, Math.min(focusIndex, shown.length - 1));
  const num = (i)=> deckLabel(labelType, i, { keyword:'KEY' });

  return (
    <SlideShell orbs={[{ w:520, h:520, right:-160, top:-150,
        color:'radial-gradient(circle at 50% 50%, rgba(90,150,255,.30), rgba(40,90,230,0) 70%)' }]}>
      <SlideHead no={head.no} en={head.en} cn={head.cn}
        badge={labelType==='keyword'?'KEY':labelType==='symbol'?'◆':head.no} />

      <div style={{flex:'1 1 0', minHeight:0, display:'grid', marginTop:30,
            gridTemplateColumns: showAside ? '0.82fr 1.18fr' : '1fr', gap:54}}>

        {/* 左：导语 */}
        {showAside && (
          <div className="dk-glass dk-anim d1" style={{borderRadius:'var(--dk-radius)', padding:'42px 40px',
              display:'flex', flexDirection:'column', justifyContent:'center', position:'relative', overflow:'hidden'}}>
            <span aria-hidden="true" style={{position:'absolute', left:24, top:-44, fontFamily:'var(--font-display)',
                fontWeight:900, fontSize:220, lineHeight:1, color:hexA(ACC,.10)}}>“</span>
            <span style={{fontFamily:'var(--font-mono)', fontSize:15, letterSpacing:'.16em', color:ACC,
                textTransform:'uppercase', marginBottom:22}}>{lead.tag}</span>
            <p style={{fontSize:'var(--type-sub)', fontWeight:700, lineHeight:1.5, color:'#fff', textWrap:'pretty', zIndex:1}}>{lead.text}</p>
            <div style={{marginTop:30, height:3, width:90, background:ACC, borderRadius:2}}></div>
          </div>
        )}

        {/* 右：编号要点列表 */}
        <div style={{display:'flex', flexDirection:'column', gap:14}}>
          {shown.map((it,i)=>{
            const hot = focus && i===fIdx;
            return (
              <div key={i} className={'dk-anim d'+Math.min(i+1,5)} style={{
                flex:'1 1 0', minHeight:0, display:'flex', alignItems:'center', gap:30,
                borderRadius:'var(--dk-radius)', padding:'0 34px',
                background: hot ? 'linear-gradient(120deg, '+hexA(ACC,.12)+', rgba(255,255,255,.03))' : 'rgba(255,255,255,.03)',
                border:`1px solid ${hot ? hexA(ACC,.45) : 'rgba(255,255,255,.10)'}`,
                boxShadow: hot ? `0 24px 60px ${hexA(ACC,.20)}` : 'none', overflow:'hidden'}}>
                <span aria-hidden="true" style={{flexShrink:0, width:104, textAlign:'center', fontFamily:'var(--font-display)',
                    fontWeight:900, fontSize:84, lineHeight:.8, color:'transparent',
                    WebkitTextStroke:`2px ${hot ? hexA(ACC,.6) : 'rgba(255,255,255,.14)'}`}}>{num(i)}</span>
                <div style={{minWidth:0}}>
                  <div style={{fontFamily:'var(--font-cn)', fontWeight:900, fontSize:'var(--type-sub)',
                      color: hot ? ACC : '#fff', lineHeight:1.1}}>{it.title}</div>
                  <p style={{fontSize:'var(--type-small)', lineHeight:1.4, color:'var(--ink-dim)', marginTop:6, textWrap:'pretty'}}>{it.desc}</p>
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

export default SlideTakeaway;

/* ── 模板参数 schema（自描述 · 迁移即带控件；Tweaks 由此自动生成） ── */
export const slideSpec = { defaults: defaultProps, slot:'takeaway', name:'核心要点 · Takeaway', controls:[
  { prop:'itemCount', type:'slider', label:'数量', default:5, min:3, max:6, step:1 },
  { prop:'showAside', type:'toggle', label:'装饰文案', default:true },
  { prop:'labelType', type:'labelType', label:'标签类型', default:'数字' },
  { prop:'focus', type:'focus', label:'重点信息 Focus', default:true },
  { prop:'focusIndex', type:'slider', label:'焦点序号', default:1, min:0, max:(p)=>p.itemCount-1, maxFromKey:'itemCount', maxFromKeyOffset:-1, displayOffset:1, step:1, showIf:(p)=>p.focus },
]};
