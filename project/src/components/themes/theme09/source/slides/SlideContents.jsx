import { useDeckStyles } from './DeckKit.jsx';
/* SlideContents — 目录 (CONTENTS 风格)
   Props:
     bigWord   : string  大号英文标题
     subCN     : string  中文副标题
     cards     : {cn,en,color,dark}[]  目录卡（dark=深色文字）
     cardCount : number  显示卡片数量（从 cards 截取）
     labelType : 'number'|'symbol'|'keyword'  卡片角标类型
     focus     : bool    高亮强调卡
     focusIndex: number  被强调的卡索引
*/
/* ── 页面属性契约 · defaultProps ──────────────────────────────────────────
   本页全部可见文案 / 数据 / 图片槽默认值集中于此，直接编辑即可换内容；
   组件内部以 { ...defaultProps, ...props } 合并，外部传同名 props 逐项覆盖。 */
export const defaultProps = {
  bigWord: 'CONTENTS',
  subCN: '报告结构 · Structure',
  cards: [
      { cn: '研究方法',   en: 'Methodology',     color: 'linear-gradient(160deg,#3f78ff,#1d49d6)', dark:false },
      { cn: '市场全景',   en: 'Market Panorama',  color: 'linear-gradient(160deg,#5af0d4,#1fb89b)', dark:true  },
      { cn: '横向透视',   en: 'Cross-Section',    color: 'linear-gradient(160deg,#0c1430,#070d22)', dark:false },
      { cn: '产业链分层', en: 'Value Chain',      color: 'linear-gradient(160deg,#eef2ff,#cdd8f5)', dark:true  },
      { cn: '典型案例',   en: 'Case Studies',     color: 'linear-gradient(160deg,#7a5aff,#4a2fd6)', dark:false },
      { cn: '风险展望',   en: 'Risk & Outlook',   color: 'linear-gradient(160deg,#3f78ff,#1d49d6)', dark:false },
      { cn: '结论',       en: 'Conclusion',       color: 'linear-gradient(160deg,#5af0d4,#1fb89b)', dark:true  },
    ],
  cardCount: 4,
  labelType: 'number',
  focus: true,
  focusIndex: 1,
};

function SlideContents(props){
  useDeckStyles(props.theme);
  const {
    bigWord, subCN, cards, cardCount, labelType, focus, focusIndex,
  } = { ...defaultProps, ...props };

  const shown = cards.slice(0, Math.max(1, Math.min(cardCount, cards.length)));
  const n = shown.length;
  // 随卡片数量自适应缩小字号 / 内边距，避免窄卡折行
  const cnSize  = n<=4 ? 40 : n===5 ? 35 : n===6 ? 31 : 27;
  const enSize  = n<=5 ? 24 : n===6 ? 21 : 19;
  const numSize = n<=4 ? 64 : n===5 ? 54 : n===6 ? 46 : 40;
  const padX    = n<=4 ? 36 : n<=6 ? 28 : 22;
  const padY    = n<=4 ? 40 : 32;
  const cardGap = n<=5 ? 26 : n===6 ? 20 : 16;

  const badge = (i)=>{
    if(labelType === 'symbol')  return ['◆','▲','●','■','★','✦','◇'][i%7];
    if(labelType === 'keyword') return 'STEP';
    return 'Step ' + String(i+1).padStart(2,'0');
  };

  return (
    <div style={{position:'relative', width:'100%', height:'100%', padding:'var(--pad-y) var(--pad-x)'}}>
      <div className="dk-orb" style={{width:420, height:420, right:160, top:-120, background:'radial-gradient(circle at 50% 50%, rgba(90,150,255,.4), rgba(40,90,230,0) 70%)'}}></div>
      <div className="dk-glass-chip dk-anim d2" style={{position:'absolute', width:120, height:120, right:300, top:120, transform:'rotate(-12deg)'}}></div>

      {/* big title */}
      <div style={{position:'relative', height:200}}>
        <div className="dk-anim" aria-hidden="true" style={{position:'absolute', top:0, left:42, fontFamily:'var(--font-display)', fontWeight:900, fontSize:170, lineHeight:.9, letterSpacing:'-.01em', color:'transparent', WebkitTextStroke:'2px rgba(255,255,255,.18)'}}>{bigWord}</div>
        <div className="dk-chrome dk-anim d1" style={{position:'absolute', top:0, left:0, fontFamily:'var(--font-display)', fontWeight:900, fontSize:170, lineHeight:.9, letterSpacing:'-.01em'}}>{bigWord}</div>
        <div className="dk-anim d2" style={{position:'absolute', top:158, left:6, fontFamily:'var(--font-cn)', fontWeight:700, fontSize:'var(--type-sub)', color:'var(--ink-dim)'}}>{subCN}</div>
      </div>

      {/* cards */}
      <div style={{display:'flex', gap:cardGap, marginTop:96, height:560}}>
        {shown.map((c,i)=>{
          const hot = focus && i===focusIndex;
          const ink = c.dark ? 'var(--navy-900)' : '#fff';
          return (
            <div key={i} className={'dk-anim d'+Math.min(i+1,5)} style={{
              flex:1, minWidth:0, borderRadius:30, padding:padY+'px '+padX+'px', background:c.color, color:ink,
              display:'flex', flexDirection:'column', justifyContent:'space-between',
              marginTop: hot ? -38 : 0,
              boxShadow: hot ? '0 44px 90px rgba(70,227,198,.45), 0 0 0 2px var(--mint)' : '0 26px 60px rgba(3,8,30,.45)',
              border:'1px solid rgba(255,255,255,.16)',
            }}>
              <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                <span style={{fontFamily:'var(--font-mono)', fontSize:'var(--type-tiny)', opacity:.7, letterSpacing:'.06em'}}>{badge(i)}</span>
                <span style={{width:40, height:40, borderRadius:'50%', border:`1.5px solid ${c.dark?'rgba(5,11,34,.35)':'rgba(255,255,255,.5)'}`, display:'inline-flex', alignItems:'center', justifyContent:'center', fontSize:18}}>↗</span>
              </div>
              <div>
                <div style={{fontFamily:'var(--font-display)', fontWeight:900, fontSize:numSize, lineHeight:.9, opacity: c.dark?.18:.22, marginBottom:18}}>{String(i+1).padStart(2,'0')}</div>
                <div style={{fontFamily:'var(--font-cn)', fontWeight:900, fontSize:cnSize, lineHeight:1.15, letterSpacing:'.04em', textWrap:'balance'}}>{c.cn}</div>
                <div style={{fontFamily:'var(--font-display)', fontWeight:600, fontSize:enSize, opacity:.7, marginTop:8}}>{c.en}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SlideContents;

/* ── 模板参数 schema（自描述 · 迁移即带控件；Tweaks 由此自动生成） ── */
export const slideSpec = { defaults: defaultProps, slot:'contents', name:'目录 · Contents', controls:[
  { prop:'cardCount', type:'slider', label:'卡片数量', default:4, min:2, max:7, step:1 },
  { prop:'labelType', type:'labelType', label:'标签类型', default:'数字' },
  { prop:'focus', type:'focus', label:'重点信息 Focus', default:true },
  { prop:'focusIndex', type:'slider', label:'焦点序号', default:1, min:0, max:(p)=>p.cardCount-1, maxFromKey:'cardCount', maxFromKeyOffset:-1, displayOffset:1, step:1, showIf:(p)=>p.focus },
]};
