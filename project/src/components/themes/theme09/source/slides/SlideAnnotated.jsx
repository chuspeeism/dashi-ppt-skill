import { useDeckStyles, deckTheme, deckLabel, SlideShell, SlideHead } from './DeckKit.jsx';
/* ============================================================================
   SlideAnnotated — 批注精读（中心陈述 + 批注连线 · 复杂文本排版）
   独立组件：仅靠 props 控制内容与样式；render 时自注入 DeckKit 基座样式。
   非卡片 · 非图表 · 批注式排版：一句加重陈述居中，关键词上加色标上标，
   下方批注卡以连线/连点对应锚点，呈现「精读划重点」的文本质感。

   ── 区别于同类既有页 ──────────────────────────────────────────────────────
   Manifesto(纯大字单句) → 本页在大字上叠加「锚点上标 + 批注卡 + 连线」，把一句话
   拆解为多处可读注脚；与底部式 Footnotes 不同，批注就近锚定、连线指向。

   ── 可调参数（Props） ──────────────────────────────────────────────────────
   | prop        | 类型                       | 默认 | 说明                          |
   | noteCount   | number (2–4)               | 3    | 启用的批注数（截取 notes）    |
   | focus       | boolean                    | true | 是否高亮某条批注 + 其锚点     |
   | focusIndex  | number                     | 0    | 高亮第几条                    |
   | labelType   | number|symbol|keyword      | number | 锚点编号样式                |
   | showConnector | boolean                  | true | 装饰文案：批注连线            |
   | showAside   | boolean                    | true | 顶部题注条                    |
   | head/aside/segments/notes | …           | —    | 文案（默认=核心陈述精读）     |
   segments = ({text} | {text,note:true})[]；其中 note 段按出现序对应 notes[i]
   ========================================================================== */
/* ── 页面属性契约 · defaultProps ──────────────────────────────────────────
   本页全部可见文案 / 数据 / 图片槽默认值集中于此，直接编辑即可换内容；
   组件内部以 { ...defaultProps, ...props } 合并，外部传同名 props 逐项覆盖。 */
export const defaultProps = {
  noteCount: 3,
  focus: true,
  focusIndex: 0,
  labelType: 'number',
  showConnector: true,
  showAside: true,
  head: { no:'精读', en:'Close Reading', cn:'一句话里的三个伏笔' },
  aside: { tag:'核心陈述', note:'划线处皆有出处，下附批注。' },
  segments: [
      { text:'2024 年，约 ' },
      { text:'970 亿美元', note:true },
      { text:' 涌入 AI，其中 ' },
      { text:'逾四成', note:true },
      { text:' 押注大模型，而 ' },
      { text:'近六成', note:true },
      { text:' 资本聚集在旧金山湾区。' },
    ],
  notes: [
      { lead:'总量', text:'约占全美创投总额三分之一，刷新历史纪录；单笔过亿事件 97 起。' },
      { lead:'集中', text:'大模型一条赛道吞下逾四成资金，资本向头部高速集中。' },
      { lead:'地域', text:'湾区占比逼近 64%，人才与资本的飞轮短期难以逆转。' },
      { lead:'兑现', text:'估值领先收入数个身位，繁荣的兑现压力被推迟而非消除。' },
    ],
};

function SlideAnnotated(props){
  useDeckStyles(props.theme);
  const T = (deckTheme ? deckTheme(props.theme) : {});
  const ACC = T.accent || '#46e3c6';

  const {
    noteCount, focus, focusIndex, labelType, showConnector, showAside, head,
    aside, segments, notes,
  } = { ...defaultProps, ...props };

  const cap = Math.max(2, Math.min(noteCount, notes.length));
  const shown = notes.slice(0, cap);
  const fIdx = Math.max(0, Math.min(focusIndex, shown.length - 1));
  const num = (i)=> deckLabel(labelType, i, { keyword:'N' });

  // 给 note 段按出现顺序编号；超过 cap 的 note 段降级为普通文本
  let mk = -1;
  const rendered = segments.map((seg, i)=>{
    if(seg.note){ mk += 1; const idx = mk; if(idx < cap) return { ...seg, idx }; return { text:seg.text }; }
    return { text:seg.text };
  });

  return (
    <SlideShell orbs={[{ w:540, h:540, left:-180, bottom:-200,
        color:'radial-gradient(circle at 50% 50%, '+hexA(ACC,.16)+', rgba(40,90,230,0) 70%)' }]}>
      <SlideHead no="精读" en={head.en} cn={head.cn}
        badge={labelType==='keyword'?'N':labelType==='symbol'?'◆':'¶'} />

      {showAside && (
        <div className="dk-anim d1" style={{display:'flex', alignItems:'center', gap:16, marginTop:20}}>
          <span style={{fontFamily:'var(--font-mono)', fontSize:14, letterSpacing:'.18em', textTransform:'uppercase',
              color:ACC, border:'1px solid '+hexA(ACC,.5), borderRadius:4, padding:'4px 12px'}}>{aside.tag}</span>
          <span style={{fontFamily:'var(--font-mono)', fontSize:14, color:'var(--ink-faint)', letterSpacing:'.06em'}}>{aside.note}</span>
        </div>
      )}

      {/* 中心陈述 */}
      <div className="dk-anim d2" style={{flex:'0 0 auto', display:'flex', alignItems:'center',
          margin:'26px 0 10px'}}>
        <p style={{fontFamily:'var(--font-cn)', fontWeight:900, fontSize:78, lineHeight:1.34,
            color:'#fff', letterSpacing:'.01em', textWrap:'balance'}}>
          {rendered.map((seg,i)=>{
            if(seg.idx == null) return <span key={i}>{seg.text}</span>;
            const hot = focus && seg.idx===fIdx;
            return (
              <span key={i} style={{position:'relative', whiteSpace:'nowrap',
                  color: hot?ACC:'#fff',
                  background:'linear-gradient(180deg,transparent 62%,'+hexA(ACC,hot?.34:.18)+' 62%)',
                  padding:'0 .06em', borderRadius:2}}>
                {seg.text}
                <sup style={{fontFamily:'var(--font-mono)', fontWeight:700, fontSize:24, color:ACC,
                    verticalAlign:'super', marginLeft:2}}>{num(seg.idx)}</sup>
              </span>
            );
          })}
        </p>
      </div>

      {/* 批注卡 + 连线 */}
      <div style={{flex:'1 1 0', minHeight:0, display:'flex', flexDirection:'column', justifyContent:'flex-end'}}>
        {showConnector && (
          <div style={{display:'grid', gridTemplateColumns:`repeat(${cap},1fr)`, gap:30, marginBottom:-1}}>
            {shown.map((_,i)=>(
              <div key={i} style={{height:34, display:'flex', justifyContent:'center'}}>
                <div style={{width:2, height:'100%', background:'linear-gradient(180deg,'+hexA(ACC,(focus&&i===fIdx)?.7:.3)+',transparent)'}}></div>
              </div>
            ))}
          </div>
        )}
        <div style={{display:'grid', gridTemplateColumns:`repeat(${cap},1fr)`, gap:30}}>
          {shown.map((nt,i)=>{
            const hot = focus && i===fIdx;
            return (
              <div key={i} className={'dk-anim d'+Math.min(i+2,5)} style={{borderRadius:20, padding:'26px 28px',
                  background: hot ? 'linear-gradient(150deg,'+hexA(ACC,.14)+',rgba(255,255,255,.03))' : 'rgba(255,255,255,.04)',
                  border:'1px solid '+(hot?hexA(ACC,.45):'rgba(255,255,255,.12)'),
                  boxShadow: hot ? '0 24px 56px '+hexA(ACC,.20) : 'none'}}>
                <div style={{display:'flex', alignItems:'center', gap:12, marginBottom:12}}>
                  <span style={{width:38, height:38, borderRadius:10, display:'grid', placeItems:'center',
                      fontFamily:'var(--font-display)', fontWeight:900, fontSize:18,
                      color: hot?'#04122e':ACC, background: hot?ACC:hexA(ACC,.14),
                      border:'1px solid '+hexA(ACC,.5)}}>{num(i)}</span>
                  <span style={{fontFamily:'var(--font-mono)', fontSize:13, letterSpacing:'.16em',
                      textTransform:'uppercase', color: hot?ACC:'var(--ink-faint)'}}>{nt.lead}</span>
                </div>
                <p style={{fontSize:'var(--type-small)', lineHeight:1.5, color: hot?'#fff':'var(--ink-dim)',
                    textWrap:'pretty'}}>{nt.text}</p>
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

export default SlideAnnotated;

/* ── 模板参数 schema（自描述 · 迁移即带控件；Tweaks 由此自动生成） ── */
export const slideSpec = { defaults: defaultProps, slot:'annotated', name:'批注精读 · Annotated', controls:[
  { prop:'noteCount', type:'slider', label:'数量', default:3, min:2, max:4, step:1 },
  { prop:'showConnector', type:'toggle', label:'装饰元素', default:true },
  { prop:'showAside', type:'toggle', label:'题注条', default:true },
  { prop:'labelType', type:'labelType', label:'标签类型', default:'数字' },
  { prop:'focus', type:'focus', label:'重点信息 Focus', default:true },
  { prop:'focusIndex', type:'slider', label:'焦点序号', default:0, min:0, max:(p)=>p.noteCount-1, maxFromKey:'noteCount', maxFromKeyOffset:-1, displayOffset:1, step:1, showIf:(p)=>p.focus },
]};
