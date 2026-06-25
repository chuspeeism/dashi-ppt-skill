import { useDeckStyles, deckTheme } from './DeckKit.jsx';
/* ============================================================================
   SlideTypeRiver — 标语字阵（巨号关键词字阶 · 排版 · 极简低卡片）
   独立组件：仅靠 props 控制内容与样式；render 时自注入 DeckKit 基座样式。
   非卡片 · 把若干关键词按「权重」排成一列大小渐变的字阶：焦点词最大最亮、
   其余按权重缩小淡出，左侧一根贯通竖轴 + 导语小标。纯排版张力，无任何卡片框。

   ── 区别于同类既有页 ──────────────────────────────────────────────────────
   Manifesto(全幅单句)、Quote(多引述墙+署名)、Epigraph(题词+花线)、Annotated(锚点批注) →
   本页是「关键词字阶」：以字号权重 + 透明度梯度承载一组词，而非完整句子或引述。

   ── 可调参数（Props） ──────────────────────────────────────────────────────
   | prop       | 类型                    | 默认 | 说明                          |
   | wordCount  | number (3–6)            | 5    | 关键词数量（截取 words）      |
   | align      | '居左'|'居中'           | '居左' | 字阶对齐                     |
   | focusIndex | number                  | 1    | 焦点词（最大最亮）            |
   | showAxis   | boolean                 | true | 左侧贯通竖轴（装饰）          |
   | showLead   | boolean                 | true | 导语小标                      |
   | focus      | boolean                 | true | 焦点词主色描边                |
   | lead/words | …                       | —    | 文案（默认=年度四个关键词）   |
   ========================================================================== */
/* ── 页面属性契约 · defaultProps ──────────────────────────────────────────
   本页全部可见文案 / 数据 / 图片槽默认值集中于此，直接编辑即可换内容；
   组件内部以 { ...defaultProps, ...props } 合并，外部传同名 props 逐项覆盖。 */
export const defaultProps = {
  wordCount: 5,
  align: '居左',
  focusIndex: 1,
  showAxis: true,
  showLead: true,
  focus: true,
  lead: { tag:'KEYWORDS · 2024', text:'如果只用几个词，\n概括这一年的 AI 资本——' },
  words: [
      { text:'集中', en:'CONCENTRATION' },
      { text:'分化', en:'DIVERGENCE' },
      { text:'押注', en:'BIG BETS' },
      { text:'兑现', en:'DELIVERY' },
      { text:'退潮', en:'EBB TIDE' },
      { text:'重估', en:'REPRICING' },
    ],
};

function SlideTypeRiver(props){
  useDeckStyles(props.theme);
  const T = (deckTheme ? deckTheme(props.theme) : {});
  const ACC = T.accent || '#46e3c6';
  const BLUE = T.blue || '#4a86ff';

  const {
    wordCount, align, focusIndex, showAxis, showLead, focus, lead,
    words,
  } = { ...defaultProps, ...props };

  const n = Math.max(3, Math.min(wordCount, words.length));
  const shown = words.slice(0, n);
  const fIdx = Math.max(0, Math.min(focusIndex, shown.length - 1));
  const center = align === '居中';
  // 字号权重：以距焦点的远近衰减
  const sizeFor = (i)=>{
    const d = Math.abs(i - fIdx);
    const base = n<=3?196 : n<=4?172 : n<=5?150 : 130;
    const step = n<=4?32:26;
    return Math.round(base - d*step);
  };
  const opacFor = (i)=> i===fIdx ? 1 : Math.max(.34, .8 - Math.abs(i-fIdx)*.16);

  return (
    <div style={{position:'relative', width:'100%', height:'100%', overflow:'hidden',
          padding:'var(--pad-y) var(--pad-x)', display:'flex', flexDirection:'column'}}>
      <div className="dk-orb" style={{width:620, height:620, right:-160, top:-180,
          background:`radial-gradient(circle at 50% 50%, ${hexA(BLUE,.16)}, ${hexA(BLUE,0)} 70%)`}}></div>

      {showLead && (
        <div className="dk-anim" style={{textAlign: center?'center':'left', marginBottom:8}}>
          <div style={{fontFamily:'var(--font-mono)', fontSize:'var(--type-tiny)', letterSpacing:'.34em', color:ACC, marginBottom:16}}>{lead.tag}</div>
          <p style={{whiteSpace:'pre-line', fontFamily:'var(--font-cn)', fontWeight:600,
              fontSize:'var(--type-sub)', lineHeight:1.4, color:'var(--ink-dim)', textWrap:'balance'}}>{lead.text}</p>
        </div>
      )}

      <div style={{flex:'1 1 0', minHeight:0, display:'flex', alignItems:'center',
            justifyContent: center?'center':'flex-start', position:'relative'}}>
        {showAxis && !center && (
          <div className="dk-anim d1" style={{position:'absolute', left:0, top:'8%', bottom:'8%', width:3,
              background:`linear-gradient(180deg, ${hexA(ACC,.7)}, ${hexA(ACC,.08)})`}}></div>
        )}
        <div style={{display:'flex', flexDirection:'column', gap:'min(1.4vh,18px)',
              paddingLeft: (showAxis && !center)?48:0, alignItems: center?'center':'flex-start'}}>
          {shown.map((w,i)=>{
            const hot = i===fIdx;
            const fz = sizeFor(i);
            return (
              <div key={i} className={'dk-anim d'+Math.min(i+1,6)} style={{display:'flex', alignItems:'baseline',
                    gap:24, opacity:opacFor(i), flexDirection:'row', justifyContent: center?'center':'flex-start',
                    alignSelf: center?'center':'auto'}}>
                <span style={{fontFamily:'var(--font-cn)', fontWeight:900, fontSize:fz, lineHeight:1.02,
                    letterSpacing:'.04em',
                    color: hot ? '#fff' : '#cdd9f5',
                    textShadow: hot && focus ? `0 0 40px ${hexA(ACC,.45)}` : 'none',
                    background: hot && focus ? 'linear-gradient(176deg,#ffffff,#c2d2ff 60%,#8ea7f4)' : 'none',
                    WebkitBackgroundClip: hot && focus ? 'text' : 'border-box',
                    backgroundClip: hot && focus ? 'text' : 'border-box',
                    WebkitTextFillColor: hot && focus ? 'transparent' : undefined,
                    filter: hot && focus ? `drop-shadow(0 0 36px ${hexA(ACC,.35)})` : 'none'}}>{w.text}</span>
                <span style={{fontFamily:'var(--font-mono)', fontSize: Math.max(13, fz*0.12),
                    letterSpacing:'.24em', color: hot?ACC:'var(--ink-faint)', whiteSpace:'nowrap'}}>{w.en}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );

  function hexA(hex, a){
    if(!hex || hex[0] !== '#') return hex;
    const x = hex.slice(1); const f = x.length===3 ? x.split('').map(c=>c+c).join('') : x;
    return `rgba(${parseInt(f.slice(0,2),16)},${parseInt(f.slice(2,4),16)},${parseInt(f.slice(4,6),16)},${a})`;
  }
}

export default SlideTypeRiver;

/* ── 模板参数 schema（自描述 · 迁移即带控件；Tweaks 由此自动生成） ── */
export const slideSpec = { defaults: defaultProps, slot:'typeriver', name:'标语字阵 · TypeRiver', controls:[
  { prop:'wordCount', type:'slider', label:'数量', default:5, min:3, max:6, step:1 },
  { prop:'align', type:'radio', label:'对齐', default:'居左', options:['居左','居中'] },
  { prop:'showAxis', type:'toggle', label:'装饰文案', default:true, desc:'左侧竖轴' },
  { prop:'showLead', type:'toggle', label:'导语小标', default:true },
  { prop:'focus', type:'focus', label:'重点信息 Focus', default:true },
  { prop:'focusIndex', type:'slider', label:'焦点序号', default:1, min:0, max:(p)=>p.wordCount-1, maxFromKey:'wordCount', maxFromKeyOffset:-1, displayOffset:1, step:1 },
]};
