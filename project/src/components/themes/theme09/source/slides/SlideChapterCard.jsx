/* ============================================================================
   SlideChapterCard — 篇章卡（实色侧栏巨号 + 标题/导语 + 编号议程 + 进度点）
   标准 ES Module。与 Section（叠层玻璃卡 + 气泡）、Divider（极简排版索引）刻意区分：
   本页为「实色侧栏 + 议程卡」——左侧整块强调色面板嵌入巨号章节数，右侧列出该篇章的
   小节议程，作有结构感的章节分隔页。

   ── 可调参数（Props） ──────────────────────────────────────────────────────
   | prop         | 类型                          | 默认值 | 说明                              |
   | items        | {label,sub}[]                 | 见下   | 议程小节数据源                    |
   | itemCount    | number (1–6)                  | 4      | 展示小节数（截取）                |
   | showProgress | boolean                       | true   | 顶部进度点（装饰文案）            |
   | focus        | boolean                       | true   | 高亮某一小节                      |
   | focusIndex   | number (0-based)              | 0      | 高亮第几节                        |
   | labelType    | 'number'|'symbol'|'keyword'   | number | 小节编号样式                      |
   | chapterNo/titleCN/titleEN/lead : 文案                                      |
   | theme        | Partial<DeckTheme>            | —      | 设计令牌覆盖                      |
   ========================================================================== */
import { useDeckStyles, deckTheme, deckLabel, SlideShell } from './DeckKit.jsx';

/* ── 页面属性契约 · defaultProps ──────────────────────────────────────────
   本页全部可见文案 / 数据 / 图片槽默认值集中于此，直接编辑即可换内容；
   组件内部以 { ...defaultProps, ...props } 合并，外部传同名 props 逐项覆盖。 */
export const defaultProps = {
  itemCount: 4,
  showProgress: true,
  focus: true,
  focusIndex: 0,
  labelType: 'number',
  chapterNo: '03',
  titleCN: '横向透视',
  titleEN: 'Cross-Section',
  lead: '在同一时间截面上对比公司与赛道 —— 看清资本在结构上的偏好与集中度。',
  items: [
      { label:'赛道资金分布', sub:'大模型 / 基建 / 应用 占比' },
      { label:'地理集中度',   sub:'湾区与非湾区的此消彼长' },
      { label:'轮次结构',     sub:'越往后轮，单笔越大' },
      { label:'投资人画像',   sub:'谁在主导大额关账' },
      { label:'估值分层',     sub:'独角兽到超级独角兽' },
      { label:'退出预期',     sub:'一级与二级的预期差' },
    ],
};

function SlideChapterCard(props){
  useDeckStyles(props.theme);
  const T = (deckTheme ? deckTheme(props.theme) : {});
  const ACC = T.accent || '#46e3c6';
  const BLUE = T.blue || '#4a86ff';
  const navy = T.navy900 || '#050b22';

  const {
    itemCount, showProgress, focus, focusIndex, labelType, chapterNo, titleCN,
    titleEN, lead, items,
  } = { ...defaultProps, ...props };

  const data = items.slice(0, Math.max(1, Math.min(itemCount, items.length)));
  const fIdx = Math.max(0, Math.min(focusIndex, data.length - 1));
  const lbl = (i)=> deckLabel(labelType, i, { keyword:'SEC' });

  return (
    <SlideShell pad={false} style={{display:'flex', flexDirection:'row'}}>
      {/* 左：实色侧栏 + 巨号 */}
      <div className="dk-anim" style={{flex:'0 0 40%', position:'relative', overflow:'hidden',
            background:`linear-gradient(160deg, ${ACC} 0%, ${hexA(ACC,.5)} 30%, ${BLUE} 78%, ${T.blueDeep||'#1d49d6'} 100%)`,
            display:'flex', flexDirection:'column', justifyContent:'space-between', padding:'var(--pad-y) 64px'}}>
        <div style={{fontFamily:'var(--font-mono)', fontSize:'var(--type-small)', letterSpacing:'.3em', color:hexA(navy,.7), fontWeight:700}}>CHAPTER</div>
        <div aria-hidden="true" style={{fontFamily:'var(--font-display)', fontWeight:900, fontSize:440, lineHeight:.78,
            color:navy, opacity:.92, letterSpacing:'-.02em'}}>{chapterNo}</div>
        <div style={{fontFamily:'var(--font-display)', fontWeight:700, fontSize:'var(--type-sub)', letterSpacing:'.04em', color:hexA(navy,.8)}}>{titleEN}</div>
        {/* 玻璃球点缀 */}
        <div className="dk-glass-chip" style={{position:'absolute', right:-60, top:'42%', width:220, height:220, opacity:.5}}></div>
      </div>

      {/* 右：标题 + 导语 + 议程 */}
      <div style={{flex:'1 1 0', minWidth:0, display:'flex', flexDirection:'column', justifyContent:'center', padding:'var(--pad-y) var(--pad-x)'}}>
        {showProgress && (
          <div className="dk-anim" style={{display:'flex', gap:8, marginBottom:26}}>
            {data.map((_,i)=>(
              <span key={i} style={{height:5, flex: (focus&&i===fIdx)?2:1, borderRadius:3,
                  background: (focus&&i===fIdx)?ACC:'rgba(255,255,255,.2)'}}></span>
            ))}
          </div>
        )}
        <h2 className="dk-chrome dk-anim d1" style={{fontFamily:'var(--font-cn)', fontWeight:900, fontSize:104, lineHeight:1, letterSpacing:'.03em'}}>{titleCN}</h2>
        <p className="dk-anim d2" style={{marginTop:18, fontSize:'var(--type-sub)', lineHeight:1.5, color:'var(--ink-dim)', textWrap:'pretty', maxWidth:900}}>{lead}</p>

        <div style={{marginTop:38, display:'flex', flexDirection:'column', gap:10}}>
          {data.map((it,i)=>{
            const hot = focus && i===fIdx;
            return (
              <div key={i} className={'dk-anim d'+Math.min(i+3,6)} style={{display:'flex', alignItems:'center', gap:20,
                    padding:'16px 22px', borderRadius:14, background: hot?hexA(ACC,.12):'transparent',
                    borderLeft:`4px solid ${hot?ACC:'rgba(255,255,255,.16)'}`}}>
                <span style={{flexShrink:0, width:44, height:44, borderRadius:12, display:'inline-flex', alignItems:'center', justifyContent:'center',
                    fontFamily:'var(--font-display)', fontWeight:900, fontSize:18, color: hot?navy:ACC,
                    background: hot?ACC:hexA(ACC,.14), border:`1px solid ${hexA(ACC,.55)}`}}>{lbl(i)}</span>
                <span style={{fontFamily:'var(--font-cn)', fontWeight:800, fontSize:'var(--type-sub)', color: hot?'#fff':'rgba(255,255,255,.94)', whiteSpace:'nowrap'}}>{it.label}</span>
                <span style={{marginLeft:'auto', fontSize:'var(--type-tiny)', color:'var(--ink-dim)', textAlign:'right'}}>{it.sub}</span>
              </div>
            );
          })}
        </div>
      </div>
    </SlideShell>
  );

  function hexA(hex, a){
    if(!hex || hex[0] !== '#') return hex;
    const x = hex.slice(1); const f = x.length===3 ? x.split('').map(c=>c+c).join('') : x;
    return `rgba(${parseInt(f.slice(0,2),16)},${parseInt(f.slice(2,4),16)},${parseInt(f.slice(4,6),16)},${a})`;
  }
}

export default SlideChapterCard;

export const slideSpec = { defaults: defaultProps, slot:'chapter', name:'篇章卡 · Chapter', controls:[
  { prop:'itemCount', type:'slider', label:'数量', default:4, min:1, max:6, step:1, desc:'议程小节数' },
  { prop:'showProgress', type:'toggle', label:'装饰文案', default:true, desc:'进度点' },
  { prop:'labelType', type:'labelType', label:'标签类型', default:'数字' },
  { prop:'focus', type:'focus', label:'重点信息 Focus', default:true },
  { prop:'focusIndex', type:'slider', label:'焦点序号', default:0, min:0, max:(p)=>p.itemCount-1, maxFromKey:'itemCount', maxFromKeyOffset:-1, displayOffset:1, step:1, showIf:(p)=>p.focus },
]};
