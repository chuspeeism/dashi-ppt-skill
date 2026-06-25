/* ============================================================================
   SlideHalfHero — 跨栏图景（上半幅大图 + 下半栏文字 · 杂志封面式）
   标准 ES Module。主图用 FillSlot（满版裁切，铺满上半幅画框）。
   与 Immersive（整幅压暗）、Feature（左右分栏）刻意区分：水平二分 —— 上半是一张
   跨栏大图（标题叠印其上），下半是并排文字栏，杂志封面/跨栏报道的节奏。

   ── 可调参数（Props） ──────────────────────────────────────────────────────
   | prop       | 类型                          | 默认值 | 说明                              |
   | cols       | {label,text}[]                | 见下   | 下半栏文字数据源                  |
   | colCount   | number (2–4)                  | 3      | 下半栏列数（截取）                |
   | titlePos   | '左'|'居中'                   | '左'   | 大图上标题位置                    |
   | showScrim  | boolean                       | true   | 大图压暗层（保证标题可读）        |
   | focus      | boolean                       | true   | 高亮某一文字栏                    |
   | focusIndex | number (0-based)              | 0      | 高亮第几栏                        |
   | labelType  | 'number'|'symbol'|'keyword'   | number | 栏目编号样式                      |
   | kicker/title/titleEN : string  文案                                        |
   | badge      | string                        | '02'   | 顶部编号徽标                      |
   | theme      | Partial<DeckTheme>            | —      | 设计令牌覆盖                      |
   ========================================================================== */
import { useDeckStyles, deckTheme, deckLabel, SlideShell } from './DeckKit.jsx';
import { FillSlot } from './ImageStrip.jsx';

/* ── 页面属性契约 · defaultProps ──────────────────────────────────────────
   本页全部可见文案 / 数据 / 图片槽默认值集中于此，直接编辑即可换内容；
   组件内部以 { ...defaultProps, ...props } 合并，外部传同名 props 逐项覆盖。 */
export const defaultProps = {
  colCount: 3,
  titlePos: '左',
  showScrim: true,
  focus: true,
  focusIndex: 0,
  labelType: 'number',
  badge: '02',
  kicker: 'COVER STORY · 跨栏',
  title: '资本涌向算力与模型',
  titleEN: 'Where the money went',
  cols: [
      { label:'大模型',   text:'占全年大额融资约 43.3%，单笔金额屡创新高，赢家通吃。' },
      { label:'基础设施', text:'算力与数据中游率先兑现现金流，成为更稳的下注。' },
      { label:'垂直应用', text:'能嵌入工作流、拿到续约的应用层，估值开始被重估。' },
      { label:'安全对齐', text:'监管与对齐叙事升温，安全成为稀缺的差异化资产。' },
    ],
};

function SlideHalfHero(props){
  useDeckStyles(props.theme);
  const T = (deckTheme ? deckTheme(props.theme) : {});
  const ACC = T.accent || '#46e3c6';
  const BLUE = T.blue || '#4a86ff';
  const navy = T.navy900 || '#050b22';

  const {
    colCount, titlePos, showScrim, focus, focusIndex, labelType, badge,
    kicker, title, titleEN, cols,
  } = { ...defaultProps, ...props };

  const data = cols.slice(0, Math.max(2, Math.min(colCount, cols.length)));
  const fIdx = Math.max(0, Math.min(focusIndex, data.length - 1));
  const lbl = (i)=> deckLabel(labelType, i, { keyword:'COL' });
  const centered = titlePos === '居中';

  return (
    <SlideShell pad={false} style={{display:'flex', flexDirection:'column'}}>
      {/* 上半幅大图 */}
      <div style={{flex:'1.05 1 0', minHeight:0, position:'relative', background:navy}}>
        <FillSlot idPrefix="halfhero" idx={0} placeholder="跨栏主图 / cover image" accent={ACC} theme={props.theme} />
        {showScrim && (
          <div style={{position:'absolute', inset:0, pointerEvents:'none',
            background:'linear-gradient(to top, rgba(3,8,30,.9) 0%, rgba(3,8,30,.35) 34%, rgba(3,8,30,0) 60%)'}}></div>
        )}
        {/* 顶部小标 */}
        <div className="dk-anim" style={{position:'absolute', top:'var(--pad-y)', left:'var(--pad-x)', display:'flex', alignItems:'center', gap:14}}>
          <span style={{fontFamily:'var(--font-display)', fontWeight:900, fontSize:'var(--type-sub)', color:ACC, textShadow:'0 2px 16px rgba(3,8,30,.8)'}}>{badge}</span>
          <span style={{height:2, width:58, background:ACC}}></span>
          <span style={{fontFamily:'var(--font-mono)', fontSize:14, letterSpacing:'.24em', color:'#fff', textShadow:'0 2px 12px rgba(3,8,30,.9)'}}>{kicker}</span>
        </div>
        {/* 叠印标题 */}
        <div style={{position:'absolute', left: centered?'50%':'var(--pad-x)', right: centered?'auto':'var(--pad-x)',
              bottom:36, transform: centered?'translateX(-50%)':'none', textAlign: centered?'center':'left',
              display:'flex', flexDirection:'column', gap:8}}>
          <h2 style={{fontFamily:'var(--font-cn)', fontWeight:900, fontSize:92, lineHeight:1.0, letterSpacing:'.02em', color:'#fff',
              textShadow:'0 4px 28px rgba(3,8,30,.7)', textWrap:'balance', margin:0}}>{title}</h2>
          <div style={{fontFamily:'var(--font-display)', fontWeight:600, fontSize:'var(--type-sub)', letterSpacing:'.06em', color:ACC}}>{titleEN}</div>
        </div>
      </div>

      {/* 下半栏文字 */}
      <div style={{flex:'0.95 1 0', minHeight:0, padding:'40px var(--pad-x)', display:'grid',
            gridTemplateColumns:`repeat(${data.length}, 1fr)`, gap:40, alignItems:'stretch'}}>
        {data.map((c,i)=>{
          const hot = focus && i===fIdx;
          return (
            <div key={i} className={'dk-anim d'+Math.min(i+1,6)} style={{minWidth:0, display:'flex', flexDirection:'column', gap:16,
                  paddingTop:26, borderTop:`3px solid ${hot?ACC:'rgba(255,255,255,.2)'}`}}>
              <div style={{display:'flex', alignItems:'center', gap:14}}>
                <span style={{flexShrink:0, width:42, height:42, borderRadius:11, display:'inline-flex', alignItems:'center', justifyContent:'center',
                    fontFamily:'var(--font-display)', fontWeight:900, fontSize:18, color: hot?navy:ACC,
                    background: hot?ACC:hexA(ACC,.14), border:`1px solid ${hexA(ACC,.55)}`}}>{lbl(i)}</span>
                <span style={{fontFamily:'var(--font-cn)', fontWeight:900, fontSize:'var(--type-sub)', color: hot?'#fff':'rgba(255,255,255,.94)'}}>{c.label}</span>
              </div>
              <p style={{fontSize:'var(--type-body)', lineHeight:1.55, color:'var(--ink-dim)', textWrap:'pretty', margin:0}}>{c.text}</p>
            </div>
          );
        })}
      </div>
    </SlideShell>
  );

  function hexA(hex, a){
    if(!hex || hex[0] !== '#') return hex;
    const x = hex.slice(1); const f = x.length===3 ? x.split('').map(c=>c+c).join('') : x;
    return `rgba(${parseInt(f.slice(0,2),16)},${parseInt(f.slice(2,4),16)},${parseInt(f.slice(4,6),16)},${a})`;
  }
}

export default SlideHalfHero;

export const slideSpec = { defaults: defaultProps, slot:'halfhero', name:'跨栏图景 · HalfHero', controls:[
  { prop:'colCount', type:'slider', label:'数量', default:3, min:2, max:4, step:1, desc:'下半栏列数' },
  { prop:'titlePos', type:'radio', label:'图片位置', default:'左', options:['左','居中'], desc:'大图上标题位置' },
  { prop:'showScrim', type:'toggle', label:'装饰文案', default:true, desc:'大图压暗层' },
  { prop:'labelType', type:'labelType', label:'标签类型', default:'数字' },
  { prop:'focus', type:'focus', label:'重点信息 Focus', default:true },
  { prop:'focusIndex', type:'slider', label:'焦点序号', default:0, min:0, max:(p)=>p.colCount-1, maxFromKey:'colCount', maxFromKeyOffset:-1, displayOffset:1, step:1, showIf:(p)=>p.focus },
]};
