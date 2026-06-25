import { useDeckStyles, deckTheme } from './DeckKit.jsx';
/* ============================================================================
   SlideCoverMast — 封面 A · 刊头排版型（Editorial Masthead）
   独立组件：仅靠 props 控制内容与样式；render 时自注入 DeckKit 基座样式。
   以「排版」为构图主装置：顶部细线刊头条（品牌 + 期次/日期，等宽小字）→ 巨幅左对齐
   金属主标题（年份作强调块嵌入）→ 底部等宽 key/value 元信息条；右下幽灵巨号年份压底。

   ── 区别于既有封面 ──────────────────────────────────────────────────────
   SlideCover（签名社论式：右上理念 + Caveat 手写签名 + 年号选择框）→
   本页是「期刊刊头」：极简横向刊头线 + 顶天立地的左对齐标题 + 元信息台账条，
   去装饰、强排版，靠字阶与留白制造权威感。

   ── 可调参数（Props） ──────────────────────────────────────────────────────
   | prop          | 类型                  | 默认 | 说明                          |
   | metaCount     | number (1–4)          | 4    | 底部元信息条数（截取 meta）   |
   | showRule      | boolean               | true | 刊头分隔线（装饰）            |
   | showGhostYear | boolean               | true | 右下幽灵巨号年份（装饰）      |
   | focus         | boolean               | true | 高亮强调（年份块 + 焦点元信息）|
   | focusIndex    | number                | 0    | 高亮第几条元信息              |
   | kicker/year/titleLines/edition/meta | … | — | 文案（默认=报告封面）        |
   ========================================================================== */
/* ── 页面属性契约 · defaultProps ──────────────────────────────────────────
   本页全部可见文案 / 数据 / 图片槽默认值集中于此，直接编辑即可换内容；
   组件内部以 { ...defaultProps, ...props } 合并，外部传同名 props 逐项覆盖。 */
export const defaultProps = {
  kicker: 'AI CAPITAL LAB · INVESTMENT RESEARCH',
  year: '2024',
  titleLines: ['美国大额融资', 'AI 公司调研报告'],
  edition: [
      { label: 'EDITION', value: 'VOL.01' },
      { label: 'ISSUED', value: '2026 · 06' },
    ],
  meta: [
      { k: '数据口径', v: '≥ 1 亿美元' },
      { k: '样本区间', v: '2024 全年' },
      { k: '分析框架', v: '横纵分析法' },
      { k: '事件总量', v: '120+ 笔' },
    ],
  metaCount: 4,
  showRule: true,
  showGhostYear: true,
  showChip: true,
  focus: true,
  focusIndex: 0,
};

function SlideCoverMast(props){
  useDeckStyles(props.theme);
  const T = (deckTheme ? deckTheme(props.theme) : {});
  const ACC = T.accent || '#46e3c6';
  const BLUE = T.blue || '#4a86ff';

  const {
    kicker, year, titleLines, edition, meta, metaCount, showRule,
    showGhostYear, showChip, focus, focusIndex,
  } = { ...defaultProps, ...props };

  const items = meta.slice(0, Math.max(1, Math.min(metaCount, meta.length)));
  const fIdx = Math.max(0, Math.min(focusIndex, items.length - 1));

  return (
    <div style={{position:'relative', width:'100%', height:'100%', overflow:'hidden'}}>
      <div className="dk-orb" style={{width:560, height:560, left:-160, top:-180, background:`radial-gradient(circle at 50% 50%, ${hexA(BLUE,.45)}, ${hexA(BLUE,0)} 70%)`}}></div>
      {/* 质感玻璃小方块（取自原封面） */}
      {showChip && <>
        <div className="dk-anim d3" style={{position:'absolute', width:138, height:138, right:300, top:300, zIndex:1}}>
          <div className="dk-glass-chip" style={{width:'100%', height:'100%', transform:'rotate(14deg)'}}></div>
        </div>
        <div className="dk-anim d4" style={{position:'absolute', width:70, height:70, right:560, top:470, zIndex:1}}>
          <div className="dk-glass-chip" style={{width:'100%', height:'100%', transform:'rotate(-10deg)'}}></div>
        </div>
      </>}

      {/* 右下幽灵巨号年份 */}
      {showGhostYear && (
        <div aria-hidden="true" className="dk-anim d2" style={{position:'absolute', right:60, bottom:-90,
            fontFamily:'var(--font-display)', fontWeight:900, fontSize:540, lineHeight:.8, letterSpacing:'-.03em',
            color:'transparent', WebkitTextStroke:`1.5px ${hexA('#fff',.07)}`, pointerEvents:'none', zIndex:0}}>{year}</div>
      )}

      <div style={{position:'absolute', inset:0, padding:'var(--pad-y) var(--pad-x)',
            display:'flex', flexDirection:'column', zIndex:2}}>
        {/* 刊头条 */}
        <div className="dk-anim" style={{display:'flex', justifyContent:'space-between', alignItems:'flex-end'}}>
          <div style={{display:'flex', alignItems:'center', gap:16}}>
            <span style={{width:12, height:12, transform:'rotate(45deg)', background:ACC, boxShadow:`0 0 16px ${hexA(ACC,.7)}`}}></span>
            <span style={{fontFamily:'var(--font-mono)', fontSize:'var(--type-tiny)', letterSpacing:'.30em', color:'var(--ink-dim)', textTransform:'uppercase'}}>{kicker}</span>
          </div>
          <div style={{display:'flex', gap:54}}>
            {edition.map((e,i)=>(
              <div key={i} style={{textAlign:'right'}}>
                <div style={{fontFamily:'var(--font-mono)', fontSize:14, letterSpacing:'.18em', color:'var(--ink-faint)'}}>{e.label}</div>
                <div style={{fontFamily:'var(--font-display)', fontWeight:700, fontSize:26, color:'#fff', marginTop:4}}>{e.value}</div>
              </div>
            ))}
          </div>
        </div>
        {showRule && <div className="dk-anim d1" style={{height:1, background:`linear-gradient(90deg, ${hexA('#fff',.35)}, ${hexA('#fff',.06)})`, marginTop:22}}></div>}

        {/* 中部：年份 + 巨幅主标题 */}
        <div style={{flex:'1 1 0', minHeight:0, display:'flex', flexDirection:'column', justifyContent:'center'}}>
          <div className="dk-anim d2" style={{display:'flex', alignItems:'center', gap:38, marginBottom:30}}>
            <span style={{position:'relative', display:'inline-flex', alignItems:'center', padding:'10px 26px',
                background: focus ? hexA(ACC,.16) : hexA('#fff',.06),
                border:`1.5px solid ${focus ? hexA(ACC,.55) : hexA('#fff',.18)}`,
                fontFamily:'var(--font-display)', fontWeight:900, fontSize:54, letterSpacing:'.04em',
                color: focus ? ACC : '#fff',
                boxShadow: focus ? `0 0 40px ${hexA(ACC,.25)}` : 'none'}}>{year}
              {focus && <SelBox color={ACC} />}
            </span>
            <span style={{fontFamily:'var(--font-mono)', fontSize:'var(--type-small)', letterSpacing:'.20em', color:'var(--ink-dim)', textTransform:'uppercase'}}>ANNUAL&nbsp;REPORT</span>
          </div>
          <h1 className="dk-chrome dk-anim d3" style={{fontFamily:'var(--font-cn)', fontWeight:900,
              fontSize:148, lineHeight:1.02, letterSpacing:'.01em', margin:0}}>
            {titleLines.map((t,i)=><div key={i}>{t}</div>)}
          </h1>
        </div>

        {/* 底部：元信息台账条 */}
        <div className="dk-anim d4" style={{display:'grid', gridTemplateColumns:`repeat(${items.length}, 1fr)`,
              borderTop:`1px solid ${hexA('#fff',.18)}`, paddingTop:28}}>
          {items.map((m,i)=>{
            const hot = focus && i===fIdx;
            return (
              <div key={i} style={{paddingRight:40, borderLeft: i? `1px solid ${hexA('#fff',.12)}`:'none', paddingLeft: i?40:0}}>
                <div style={{fontFamily:'var(--font-mono)', fontSize:15, letterSpacing:'.16em', color: hot?ACC:'var(--ink-faint)', textTransform:'uppercase'}}>{String(i+1).padStart(2,'0')} · {m.k}</div>
                <div style={{fontFamily:'var(--font-display)', fontWeight:800, fontSize:'var(--type-sub)', color: hot?ACC:'rgba(255,255,255,.84)', textShadow: hot?`0 0 28px ${hexA(ACC,.45)}`:'none', marginTop:8}}>{m.v}</div>
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

export default SlideCoverMast;

/* 角标选择框（取自原封面 SelectionBox：mint 四角刻线 + 细边框，作焦点强调） */
function SelBox({ color = '#46e3c6', inset = '-14px -12px', size = 18 }){
  const tick = (s) => <span style={{position:'absolute', width:size, height:size, border:`3px solid ${color}`, ...s}}></span>;
  return (
    <span style={{position:'absolute', inset, border:`2px solid ${color}`, pointerEvents:'none'}}>
      {tick({top:-9, left:-9, borderRight:'none', borderBottom:'none'})}
      {tick({top:-9, right:-9, borderLeft:'none', borderBottom:'none'})}
      {tick({bottom:-9, left:-9, borderRight:'none', borderTop:'none'})}
      {tick({bottom:-9, right:-9, borderLeft:'none', borderTop:'none'})}
    </span>
  );
}

/* ── 模板参数 schema（自描述 · 迁移即带控件；Tweaks 由此自动生成） ── */
export const slideSpec = { defaults: defaultProps, slot:'covermast', name:'封面A · 刊头排版', controls:[
  { prop:'metaCount', type:'slider', label:'元信息数量', default:4, min:1, max:4, step:1 },
  { prop:'showRule', type:'toggle', label:'刊头分隔线', default:true, desc:'装饰' },
  { prop:'showGhostYear', type:'toggle', label:'幽灵年份', default:true, desc:'装饰' },
  { prop:'showChip', type:'toggle', label:'质感方块', default:true, desc:'玻璃芯片装饰' },
  { prop:'focus', type:'focus', label:'重点信息 Focus', default:true },
  { prop:'focusIndex', type:'slider', label:'焦点序号', default:0, min:0, max:(p)=>Math.max(0,p.metaCount-1), maxFromKey:'metaCount', maxFromKeyOffset:-1, displayOffset:1, step:1, showIf:(p)=>p.focus },
]};
