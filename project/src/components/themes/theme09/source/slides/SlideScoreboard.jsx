import { useDeckStyles, deckTheme, deckLabel, SlideShell, SlideHead } from './DeckKit.jsx';
/* ============================================================================
   SlideScoreboard — 计分榜（体育记分牌式大数字 · LED 面板巨号 + 榜首高亮）
   独立组件：仅靠 props 控制内容与样式；render 时自注入 DeckKit 基座样式。
   与 Stat（等大 KPI 网格砖）、Hero（单一巨号）、Versus（双号头对头）、Mega（海报式
   居中巨号）刻意区分：本页是「记分牌 / LED 仪表盘」——顶部赛季横幅 + 一排深色 LED
   面板，每面板一枚等宽巨号（带分段扫描线质感）+ 单位 + 名目 + 同比片，榜首镶光发亮。

   ── 可调参数（Props） ──────────────────────────────────────────────────────
   | prop       | 类型                          | 默认值 | 说明                            |
   | stats      | {value,unit,label,sub,delta}[]| 见下   | 计分项数据源                    |
   | itemCount  | number (2–5)                  | 4      | 面板数（截取）                  |
   | showDelta  | boolean                       | true   | 同比片（装饰）                  |
   | showScan   | boolean                       | true   | LED 分段扫描线质感              |
   | focus      | boolean                       | true   | 榜首高亮（发光镶边）            |
   | focusIndex | number (0-based)              | 0      | 高亮第几项                      |
   | labelType  | 'number'|'symbol'|'keyword'   | number | 名次徽标样式                    |
   | banner     | {tag,title}                   | 见下   | 顶部横幅                        |
   | head       | {no,en,cn}                    | 见下   | 页眉                            |
   | theme      | Partial<DeckTheme>            | —      | 设计令牌覆盖                    |
   ========================================================================== */
/* ── 页面属性契约 · defaultProps ──────────────────────────────────────────
   本页全部可见文案 / 数据 / 图片槽默认值集中于此，直接编辑即可换内容；
   组件内部以 { ...defaultProps, ...props } 合并，外部传同名 props 逐项覆盖。 */
export const defaultProps = {
  itemCount: 4,
  showDelta: true,
  showScan: true,
  focus: true,
  focusIndex: 0,
  labelType: 'number',
  banner: { tag:'SEASON 2024', title:'资本计分榜 · 关键指标终盘' },
  head: { no:'数字', en:'Scoreboard · Final Tally', cn:'年度计分榜' },
  stats: [
      { value:'970', unit:'亿$', label:'全年 AI 风投', sub:'历史新高', delta:'+71%' },
      { value:'97',  unit:'笔',  label:'≥1 亿美元事件', sub:'mega-rounds', delta:'+38%' },
      { value:'43.3',unit:'%',   label:'大模型赛道占比', sub:'最大权重', delta:'+9.1pt' },
      { value:'63.9',unit:'%',   label:'旧金山湾区占比', sub:'地理集中', delta:'+4.4pt' },
      { value:'10',  unit:'亿$', label:'单笔平均规模', sub:'avg / deal', delta:'+22%' },
    ],
};

function SlideScoreboard(props){
  useDeckStyles(props.theme);
  const T = (deckTheme ? deckTheme(props.theme) : {});
  const ACC = T.accent || '#46e3c6';
  const BLUE = T.blue || '#4a86ff';
  const WARN = T.warn || '#ffb27a';
  const navy = T.navy900 || '#050b22';

  const {
    itemCount, showDelta, showScan, focus, focusIndex, labelType, banner,
    head, stats,
  } = { ...defaultProps, ...props };

  const n = Math.max(2, Math.min(itemCount, 5));
  const data = stats.slice(0, n);
  const fIdx = Math.max(0, Math.min(focusIndex, n - 1));
  const lbl = (i)=> deckLabel(labelType, i, { keyword:'#' });
  const scan = showScan ? 'repeating-linear-gradient(0deg, rgba(255,255,255,.05) 0 2px, rgba(255,255,255,0) 2px 5px), ' : '';

  return (
    <SlideShell orbs={[
      { w:600, h:600, right:-200, bottom:-220, color:`radial-gradient(circle at 50% 50%, ${hexA(BLUE,.2)}, ${hexA(BLUE,0)} 70%)` },
      { w:420, h:420, left:-150, top:-120, color:`radial-gradient(circle at 50% 50%, ${hexA(ACC,.12)}, ${hexA(ACC,0)} 70%)` },
    ]}>
      <SlideHead no={head.no} en={head.en} cn={head.cn}
        badge={labelType==='keyword'?'BOARD':labelType==='symbol'?'★':head.no} />

      {/* 横幅 */}
      <div className="dk-anim d1" style={{marginTop:26, flexShrink:0, display:'flex', alignItems:'center', gap:18,
            borderRadius:14, padding:'14px 26px', background:'rgba(3,8,28,.55)', border:`1px solid ${hexA(ACC,.35)}`}}>
        <span style={{fontFamily:'var(--font-mono)', fontWeight:700, fontSize:14, letterSpacing:'.22em', color:navy,
            background:ACC, padding:'5px 13px', borderRadius:7}}>{banner.tag}</span>
        <span style={{fontFamily:'var(--font-cn)', fontWeight:800, fontSize:'var(--type-sub)', color:'#fff'}}>{banner.title}</span>
        <span style={{marginLeft:'auto', display:'inline-flex', gap:7}}>
          {Array.from({length:3}).map((_,i)=>(
            <i key={i} style={{width:11, height:11, borderRadius:'50%', background: i===0?ACC:hexA(ACC,.3),
                boxShadow: i===0?`0 0 10px ${ACC}`:'none'}}></i>
          ))}
        </span>
      </div>

      {/* LED 面板行 */}
      <div className="dk-anim d2" style={{flex:'1 1 0', minHeight:0, marginTop:22, display:'flex', gap:20}}>
        {data.map((s,i)=>{
          const hot = focus && i===fIdx;
          const up = (s.delta||'').trim().startsWith('-') || (s.delta||'').trim().startsWith('−') ? false : true;
          return (
            <div key={i} style={{flex:'1 1 0', minWidth:0, position:'relative', display:'flex', flexDirection:'column', justifyContent:'space-between',
                  borderRadius:18, padding:'26px 24px 24px', overflow:'hidden',
                  background:`${scan}linear-gradient(165deg, #0b1538, #060d24)`,
                  border:`1px solid ${hot?ACC:'rgba(255,255,255,.12)'}`,
                  boxShadow: hot ? `0 30px 70px ${hexA(ACC,.28)}, 0 0 0 2px ${ACC}, inset 0 0 36px ${hexA(ACC,.12)}`
                                 : '0 22px 54px rgba(2,6,22,.5), inset 0 1px 0 rgba(255,255,255,.08)'}}>
              {/* 名次徽标 */}
              <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                <span style={{fontFamily:'var(--font-display)', fontWeight:900, fontSize:16, minWidth:34, height:34, padding:'0 9px', borderRadius:9,
                    display:'inline-flex', alignItems:'center', justifyContent:'center',
                    color: hot?navy:ACC, background: hot?ACC:hexA(ACC,.14), border:`1px solid ${hexA(ACC,.5)}`}}>{lbl(i)}</span>
                {showDelta && s.delta && (
                  <span style={{fontFamily:'var(--font-mono)', fontWeight:700, fontSize:15, color: up?ACC:WARN, display:'inline-flex', alignItems:'center', gap:5}}>
                    <span style={{fontSize:13}}>{up?'▲':'▼'}</span>{s.delta.replace(/^[+\-−]/,'')}
                  </span>
                )}
              </div>
              {/* 巨号 */}
              <div style={{margin:'14px 0 6px', display:'flex', alignItems:'baseline', gap:8}}>
                <span style={{fontFamily:'var(--font-display)', fontWeight:900, fontSize:110, lineHeight:.86,
                    color: hot?'#fff':'rgba(255,255,255,.94)', letterSpacing:'-.01em',
                    textShadow: hot?`0 0 30px ${hexA(ACC,.6)}`:'none'}}>{s.value}</span>
                <span style={{fontFamily:'var(--font-display)', fontWeight:800, fontSize:34, color: hot?ACC:'var(--ink-dim)'}}>{s.unit}</span>
              </div>
              {/* 名目 */}
              <div>
                <div style={{fontFamily:'var(--font-cn)', fontWeight:800, fontSize:'var(--type-small)', color: hot?ACC:'#fff', lineHeight:1.2, textWrap:'pretty'}}>{s.label}</div>
                {s.sub && <div style={{fontFamily:'var(--font-mono)', fontSize:13, letterSpacing:'.04em', color:'var(--ink-faint)', marginTop:5}}>{s.sub}</div>}
              </div>
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

export default SlideScoreboard;

/* ── 模板参数 schema（自描述 · 迁移即带控件；Tweaks 由此自动生成） ── */
export const slideSpec = { defaults: defaultProps, slot:'scoreboard', name:'计分榜 · Scoreboard', controls:[
  { prop:'itemCount', type:'slider', label:'数量', default:4, min:2, max:5, step:1 },
  { prop:'showDelta', type:'toggle', label:'同比片', default:true },
  { prop:'showScan', type:'toggle', label:'装饰元素', default:true, desc:'LED 扫描线质感' },
  { prop:'labelType', type:'labelType', label:'标签类型', default:'数字' },
  { prop:'focus', type:'focus', label:'重点信息 Focus', default:true },
  { prop:'focusIndex', type:'slider', label:'焦点序号', default:0, min:0, max:(p)=>p.itemCount-1, maxFromKey:'itemCount', maxFromKeyOffset:-1, displayOffset:1, step:1, showIf:(p)=>p.focus },
]};
