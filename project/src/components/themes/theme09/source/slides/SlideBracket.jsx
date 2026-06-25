import { useDeckStyles, deckTheme, deckLabel, SlideHead } from './DeckKit.jsx';
/* ============================================================================
   SlideBracket — 归纳括弧（多项 → 大括弧 → 单结论 · 图示 · 极简低卡片）
   独立组件：仅靠 props 控制内容与样式；render 时自注入 DeckKit 基座样式。
   非卡片 · 以一道贯通的「大括弧」把左侧若干并列要素收敛到右侧一个结论：
   左列要素仅用编号 + 细线（无卡片框），中缝一条 SVG 花括号，右侧落归纳结论。

   ── 区别于同类既有页 ──────────────────────────────────────────────────────
   Thesis(命题→脊线阶梯→推论)、Process(横向步骤)、Takeaway(并列编号) →
   本页是「收敛/归纳」结构：多输入经一道花括号汇成单一输出，靠括弧形态表达「合并」。

   ── 可调参数（Props） ──────────────────────────────────────────────────────
   | prop        | 类型                   | 默认 | 说明                          |
   | itemCount   | number (2–5)           | 4    | 左侧要素数量（截取 items）    |
   | side        | '左归右'|'右归左'      | '左归右' | 收敛方向                   |
   | showBrace   | boolean                | true | 中缝花括号（装饰）            |
   | focus       | boolean                | true | 高亮某条要素                  |
   | focusIndex  | number                 | 0    | 高亮第几条                    |
   | labelType   | number|symbol|keyword  | number | 要素编号样式                |
   | head/items/conclusion | …            | —    | 文案（默认=四因素→一结论）    |
   ========================================================================== */
/* ── 页面属性契约 · defaultProps ──────────────────────────────────────────
   本页全部可见文案 / 数据 / 图片槽默认值集中于此，直接编辑即可换内容；
   组件内部以 { ...defaultProps, ...props } 合并，外部传同名 props 逐项覆盖。 */
export const defaultProps = {
  itemCount: 4,
  side: '左归右',
  showBrace: true,
  focus: true,
  focusIndex: 0,
  labelType: 'number',
  head: { no:'归纳', en:'Convergence', cn:'四股力，归于一个判断' },
  items: [
      { text:'总量创新高，但增量高度集中' },
      { text:'头部估值远跑赢收入兑现' },
      { text:'基础设施环节稳收过路费' },
      { text:'应用层两极分化，叙事退潮' },
      { text:'监管与算力约束逐步抬头' },
    ],
  conclusion: { tag:'归纳结论', text:'押注「结构」\n胜过押注「个体」。', note:'确定性藏在卖铲子的环节里。' },
};

function SlideBracket(props){
  useDeckStyles(props.theme);
  const T = (deckTheme ? deckTheme(props.theme) : {});
  const ACC = T.accent || '#46e3c6';
  const BLUE = T.blue || '#4a86ff';

  const {
    itemCount, side, showBrace, focus, focusIndex, labelType, head,
    items, conclusion,
  } = { ...defaultProps, ...props };

  const n = Math.max(2, Math.min(itemCount, items.length));
  const shown = items.slice(0, n);
  const fIdx = Math.max(0, Math.min(focusIndex, shown.length - 1));
  const leftToRight = side === '左归右';
  const num = (i)=> deckLabel(labelType, i, { keyword:'F' });

  const List = (
    <div style={{flex:'1.05 1 0', minWidth:0, display:'flex', flexDirection:'column', justifyContent:'center', gap:14}}>
      {shown.map((it,i)=>{
        const hot = focus && i===fIdx;
        return (
          <div key={i} className={'dk-anim d'+Math.min(i+1,6)} style={{display:'flex', alignItems:'center', gap:22,
                padding:'14px 4px', borderBottom:`1px solid ${hexA('#fff', i<shown.length-1?.10:0)}`}}>
            <span style={{flexShrink:0, width:46, height:46, borderRadius:'50%', display:'grid', placeItems:'center',
                fontFamily:'var(--font-display)', fontWeight:900, fontSize:19,
                color: hot?'#04122e':ACC, background: hot?ACC:'transparent',
                border:`2px solid ${hexA(ACC, hot?1:.4)}`}}>{num(i)}</span>
            <span style={{fontFamily:'var(--font-cn)', fontWeight:600, fontSize:'var(--type-body)', lineHeight:1.36,
                color: hot?'#fff':'var(--ink-dim)', textWrap:'pretty'}}>{it.text}</span>
          </div>
        );
      })}
    </div>
  );

  const Brace = (
    <div className="dk-anim d2" style={{flexShrink:0, width:90, alignSelf:'stretch', display:'flex', alignItems:'center', justifyContent:'center'}}>
      {showBrace && (
        <svg viewBox="0 0 90 600" preserveAspectRatio="none" style={{width:90, height:'78%'}}>
          <path d={leftToRight
              ? 'M20 10 C 60 10, 46 290, 76 300 C 46 310, 60 590, 20 590'
              : 'M70 10 C 30 10, 44 290, 14 300 C 44 310, 30 590, 70 590'}
            fill="none" stroke={hexA(ACC,.8)} strokeWidth="3" strokeLinecap="round" />
        </svg>
      )}
      {!showBrace && (
        <div style={{width:3, height:'72%', background:`linear-gradient(180deg,${hexA(ACC,.6)},${hexA(ACC,.1)})`}}></div>
      )}
    </div>
  );

  const Result = (
    <div className="dk-anim d3" style={{flex:'.95 1 0', minWidth:0, display:'flex', flexDirection:'column', justifyContent:'center'}}>
      <span style={{fontFamily:'var(--font-mono)', fontSize:14, letterSpacing:'.2em', color:ACC, textTransform:'uppercase', marginBottom:18}}>{conclusion.tag}</span>
      <p className="dk-chrome" style={{whiteSpace:'pre-line', fontFamily:'var(--font-cn)', fontWeight:900,
          fontSize:'var(--type-title)', lineHeight:1.14, letterSpacing:'.01em', textWrap:'balance'}}>{conclusion.text}</p>
      <div style={{display:'flex', alignItems:'center', gap:14, marginTop:26}}>
        <span style={{height:3, width:60, background:ACC}}></span>
        <span style={{fontFamily:'var(--font-cn)', fontSize:'var(--type-small)', color:'var(--ink-dim)'}}>{conclusion.note}</span>
      </div>
    </div>
  );

  return (
    <div style={{position:'relative', width:'100%', height:'100%', overflow:'hidden',
          padding:'var(--pad-y) var(--pad-x)', display:'flex', flexDirection:'column'}}>
      <div className="dk-orb" style={{width:540, height:540, right:-160, bottom:-160,
          background:`radial-gradient(circle at 50% 50%, ${hexA(BLUE,.16)}, ${hexA(BLUE,0)} 70%)`}}></div>

      <SlideHead no="归纳" en={head.en} cn={head.cn} badge="}" />

      <div style={{flex:'1 1 0', minHeight:0, display:'flex', alignItems:'stretch', gap:40, marginTop:24}}>
        {leftToRight ? <>{List}{Brace}{Result}</> : <>{Result}{Brace}{List}</>}
      </div>
    </div>
  );

  function hexA(hex, a){
    if(!hex || hex[0] !== '#') return hex;
    const x = hex.slice(1); const f = x.length===3 ? x.split('').map(c=>c+c).join('') : x;
    return `rgba(${parseInt(f.slice(0,2),16)},${parseInt(f.slice(2,4),16)},${parseInt(f.slice(4,6),16)},${a})`;
  }
}

export default SlideBracket;

/* ── 模板参数 schema（自描述 · 迁移即带控件；Tweaks 由此自动生成） ── */
export const slideSpec = { defaults: defaultProps, slot:'bracket', name:'归纳括弧 · Bracket', controls:[
  { prop:'itemCount', type:'slider', label:'数量', default:4, min:2, max:5, step:1 },
  { prop:'side', type:'radio', label:'收敛方向', default:'左归右', options:['左归右','右归左'] },
  { prop:'showBrace', type:'toggle', label:'装饰文案', default:true, desc:'中缝花括号' },
  { prop:'labelType', type:'labelType', label:'标签类型', default:'数字' },
  { prop:'focus', type:'focus', label:'重点信息 Focus', default:true },
  { prop:'focusIndex', type:'slider', label:'焦点序号', default:0, min:0, max:(p)=>p.itemCount-1, maxFromKey:'itemCount', maxFromKeyOffset:-1, displayOffset:1, step:1, showIf:(p)=>p.focus },
]};
