import { useDeckStyles, deckTheme, deckLabel, SlideShell } from './DeckKit.jsx';
/* ============================================================================
   SlideDivider — 区段扉页（排版式 · 巨号数字 + 竖向强调条 + 主题索引）
   独立组件：仅靠 props 控制内容与样式；render 时自注入 DeckKit 基座样式。
   与 SlideSection（叠层玻璃卡 + 气泡）刻意区分：本页为「极简排版扉页」——
   一根贯通的强调竖条、巨号轮廓数字、横向编号主题索引，用作大段落的分隔。

   ── 可调参数（Props） ──────────────────────────────────────────────────────
   | prop        | 类型                          | 默认值 | 说明                              |
   | sectionNo   | string                        | '08'   | 区段编号                          |
   | titleCN     | string                        | 见下   | 中文标题                          |
   | titleEN     | string                        | 见下   | 英文标题                          |
   | kicker      | string                        | 见下   | 顶部小标（mono）                  |
   | topics      | {no,label}[]                  | 见下   | 主题索引数据源                    |
   | itemCount   | number (1–6)                  | 4      | 实际展示的索引条目数（截取）      |
   | align       | '居左' | '居中'                | '居左' | 标题与索引对齐方式                |
   | showIndex   | boolean                       | true   | 是否显示底部主题索引（装饰文案）  |
   | focus       | boolean                       | true   | 是否高亮某个索引条目              |
   | focusIndex  | number (0-based)              | 0      | 高亮第几条                        |
   | labelType   | 'number'|'symbol'|'keyword'   | number | 索引前缀样式                      |
   | theme       | Partial<DeckTheme>            | —      | 设计令牌覆盖                      |
   ========================================================================== */
/* ── 页面属性契约 · defaultProps ──────────────────────────────────────────
   本页全部可见文案 / 数据 / 图片槽默认值集中于此，直接编辑即可换内容；
   组件内部以 { ...defaultProps, ...props } 合并，外部传同名 props 逐项覆盖。 */
export const defaultProps = {
  sectionNo: '08',
  titleCN: '深度数据透视',
  titleEN: 'Deep Data Perspectives',
  kicker: 'PART · APPENDIX',
  itemCount: 4,
  align: '居左',
  showIndex: true,
  focus: true,
  focusIndex: 0,
  labelType: 'number',
  topics: [
      { no:'A', label:'轮次结构与资本节奏' },
      { no:'B', label:'估值梯队与集中度' },
      { no:'C', label:'赛道渗透与版图' },
      { no:'D', label:'走势演变与景气度' },
      { no:'E', label:'风险信号与拐点' },
      { no:'F', label:'综合评分与排序' },
    ],
};

function SlideDivider(props){
  useDeckStyles(props.theme);
  const T = (deckTheme ? deckTheme(props.theme) : {});
  const ACC = T.accent || '#46e3c6';
  const BLUE = T.blue || '#4a86ff';

  const {
    sectionNo, titleCN, titleEN, kicker, itemCount, align, showIndex,
    focus, focusIndex, labelType, topics,
  } = { ...defaultProps, ...props };

  const data = topics.slice(0, Math.max(1, Math.min(itemCount, topics.length)));
  const fIdx = Math.max(0, Math.min(focusIndex, data.length - 1));
  const centered = align === '居中';
  const mark = (t,i)=> deckLabel(labelType, i, { keyword:'SEC', number:t.no });

  return (
    <SlideShell orbs={[
      { w:640, h:640, left:-220, bottom:-260, color:`radial-gradient(circle at 50% 50%, ${hexA(BLUE,.32)}, ${hexA(BLUE,0)} 70%)` },
      { w:420, h:420, right:-120, top:-140, color:`radial-gradient(circle at 50% 50%, ${hexA(ACC,.12)}, ${hexA(ACC,0)} 70%)` },
    ]}>
      {/* 巨号轮廓数字（背景） */}
      <div className="dk-anim" aria-hidden="true" style={{position:'absolute', right: centered?'50%':70, top:-30,
          transform: centered?'translateX(50%)':'none',
          fontFamily:'var(--font-display)', fontWeight:900, fontSize:760, lineHeight:.8,
          color:'transparent', WebkitTextStroke:`2px ${hexA('#ffffff',.07)}`, pointerEvents:'none'}}>{sectionNo}</div>

      <div style={{flex:'1 1 0', minHeight:0, display:'flex', flexDirection:'column',
            justifyContent:'center', alignItems: centered?'center':'flex-start',
            textAlign: centered?'center':'left', position:'relative', zIndex:2}}>

        {/* 顶部小标 + 编号 */}
        <div className="dk-anim" style={{display:'flex', alignItems:'center', gap:20, marginBottom:30}}>
          <span style={{fontFamily:'var(--font-display)', fontWeight:900, fontSize:'var(--type-sub)', color:ACC,
              textShadow:`0 0 26px ${hexA(ACC,.5)}`}}>{sectionNo}</span>
          <span style={{height:2, width:96, background:ACC}}></span>
          <span style={{fontFamily:'var(--font-mono)', fontSize:'var(--type-tiny)', letterSpacing:'.28em', color:'var(--ink-dim)'}}>{kicker}</span>
        </div>

        {/* 标题：左侧贯通竖条 + 巨标题 */}
        <div style={{display:'flex', alignItems:'stretch', gap:36}}>
          {!centered && (
            <div className="dk-anim d1" style={{flexShrink:0, width:10, borderRadius:6,
                background:`linear-gradient(180deg, ${ACC}, ${hexA(BLUE,.4)})`, boxShadow:`0 0 30px ${hexA(ACC,.5)}`}}></div>
          )}
          <div>
            <h2 className="dk-chrome dk-anim d1" style={{fontFamily:'var(--font-cn)', fontWeight:900,
                fontSize:150, lineHeight:1.16, letterSpacing:'.03em', whiteSpace:'nowrap'}}>{titleCN}</h2>
            <div className="dk-anim d2" style={{fontFamily:'var(--font-display)', fontWeight:600, fontSize:'var(--type-sub)',
                letterSpacing:'.08em', color:'var(--ink-dim)', marginTop:14}}>{titleEN}</div>
          </div>
        </div>

        {/* 主题索引（横向编号条） */}
        {showIndex && (
          <div className="dk-anim d3" style={{marginTop:64, display:'flex', flexWrap:'wrap', gap:18,
                justifyContent: centered?'center':'flex-start', maxWidth: centered?1200:'none'}}>
            {data.map((t,i)=>{
              const hot = focus && i===fIdx;
              return (
                <div key={i} style={{display:'flex', alignItems:'center', gap:16, padding:'16px 26px 16px 18px',
                      borderRadius:16, minWidth:0,
                      background: hot ? hexA(ACC,.14) : 'rgba(255,255,255,.05)',
                      border:`1px solid ${hot?ACC:'rgba(255,255,255,.14)'}`,
                      boxShadow: hot?`0 18px 44px ${hexA(ACC,.26)}`:'none'}}>
                  <span style={{flexShrink:0, width:46, height:46, borderRadius:12, display:'inline-flex',
                      alignItems:'center', justifyContent:'center', fontFamily:'var(--font-display)', fontWeight:900,
                      fontSize:22, color: hot?T.navy900||'#050b22':ACC,
                      background: hot?ACC:hexA(ACC,.12), border:`1px solid ${hexA(ACC,.5)}`}}>{mark(t,i)}</span>
                  <span style={{fontFamily:'var(--font-cn)', fontWeight:700, fontSize:'var(--type-small)',
                      color: hot?'#fff':'var(--ink-dim)', whiteSpace:'nowrap'}}>{t.label}</span>
                </div>
              );
            })}
          </div>
        )}
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

export default SlideDivider;

/* ── 模板参数 schema（自描述 · 迁移即带控件；Tweaks 由此自动生成） ── */
export const slideSpec = { defaults: defaultProps, slot:'divider', name:'区段扉页 · Divider', controls:[
  { prop:'itemCount', type:'slider', label:'数量', default:4, min:1, max:6, step:1, desc:'主题索引条目数' },
  { prop:'align', type:'radio', label:'对齐', default:'居左', options:['居左','居中'] },
  { prop:'showIndex', type:'toggle', label:'装饰文案', default:true, desc:'底部主题索引' },
  { prop:'labelType', type:'labelType', label:'标签类型', default:'数字' },
  { prop:'focus', type:'focus', label:'重点信息 Focus', default:true },
  { prop:'focusIndex', type:'slider', label:'焦点序号', default:0, min:0, max:(p)=>p.itemCount-1, maxFromKey:'itemCount', maxFromKeyOffset:-1, displayOffset:1, step:1, showIf:(p)=>p.focus },
]};
