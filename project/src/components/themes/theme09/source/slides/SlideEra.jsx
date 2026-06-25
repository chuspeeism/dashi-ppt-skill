import { useDeckStyles, deckTheme, deckLabel, SlideShell, SlideHead } from './DeckKit.jsx';
/* ============================================================================
   SlideEra — 编年纪事（分期中轴 · 左侧贯通脊柱 + 分期节点 + 每期事件簇）
   独立组件：仅靠 props 控制内容与样式；render 时自注入 DeckKit 基座样式。
   与 Timeline（轴上单点 + 错位卡）、Phases（甘特跨度条）刻意区分：本页按「分期」
   聚合 —— 每个时期是一行，左脊柱上一枚分期节点，右侧时期名 + 该期多个事件簇。

   ── 可调参数（Props） ──────────────────────────────────────────────────────
   | prop          | 类型                          | 默认值 | 说明                              |
   | eras          | Era[]                         | 见下   | 分期数据源（每期含若干事件）      |
   | itemCount     | number (2–5)                  | 4      | 展示分期数（截取）                |
   | showConnector | boolean                       | true   | 左侧贯通脊柱                      |
   | showAside     | boolean                       | true   | 底部节奏解读（装饰文案）          |
   | focus         | boolean                       | true   | 高亮某一分期                      |
   | focusIndex    | number (0-based)              | 0      | 高亮第几期                        |
   | labelType     | 'number'|'symbol'|'keyword'   | number | 分期徽标样式                      |
   | head          | {no,en,cn}                    | 见下   | 页眉                              |
   | note          | string                        | 见下   | 节奏解读文案                      |
   | theme         | Partial<DeckTheme>            | —      | 设计令牌覆盖                      |
   Era = { period, name, sub, events:{date,text}[] }
   ========================================================================== */
/* ── 页面属性契约 · defaultProps ──────────────────────────────────────────
   本页全部可见文案 / 数据 / 图片槽默认值集中于此，直接编辑即可换内容；
   组件内部以 { ...defaultProps, ...props } 合并，外部传同名 props 逐项覆盖。 */
export const defaultProps = {
  itemCount: 4,
  showConnector: true,
  showAside: true,
  focus: true,
  focusIndex: 0,
  labelType: 'number',
  note: '全年呈「蓄势 → 修复 → 加速 → 竞速」四段递进 —— 资本信心自年中拐点后持续升温，至年末进入白热化。',
  head: { no:'08', en:'Chronicle · 2024', cn:'编年纪事 · 资本分期' },
  eras: [
      { period:'Q1 · 年初', name:'蓄势观望', sub:'估值消化 · 谨慎试探', events:[
        { date:'01–02', text:'市场延续上年谨慎，资金多观望' },
        { date:'02', text:'OpenAI 要约收购，估值约 860 亿$' } ] },
      { period:'Q2 · 年中', name:'信心修复', sub:'头部率先关账', events:[
        { date:'05', text:'xAI B 轮 60 亿$，投后 240 亿' },
        { date:'06', text:'Anthropic 获亚马逊追加战略投资' } ] },
      { period:'Q3 · 下半年', name:'加速关账', sub:'大额事件密集', events:[
        { date:'09', text:'Databricks J 轮约 100 亿$，估值 620 亿' },
        { date:'09', text:'多笔基础设施长约落定' } ] },
      { period:'Q4 · 年末', name:'巅峰竞速', sub:'估值水位抬升', events:[
        { date:'10', text:'OpenAI 新一轮 66 亿$，估值 1570 亿' },
        { date:'12', text:'Safe SI 种子轮即募 10 亿$' } ] },
      { period:'全年', name:'结构跃迁', sub:'赢家通吃成型', events:[
        { date:'2024', text:'≥1 亿$ 事件 97 笔，总额 970 亿$' } ] },
    ],
};

function SlideEra(props){
  useDeckStyles(props.theme);
  const T = (deckTheme ? deckTheme(props.theme) : {});
  const ACC = T.accent || '#46e3c6';
  const BLUE = T.blue || '#4a86ff';
  const VIO = T.violet || '#9f7bff';
  const navy = T.navy900 || '#050b22';

  const {
    itemCount, showConnector, showAside, focus, focusIndex, labelType, note,
    head, eras,
  } = { ...defaultProps, ...props };

  const data = eras.slice(0, Math.max(2, Math.min(itemCount, eras.length)));
  const fIdx = Math.max(0, Math.min(focusIndex, data.length - 1));
  const PALETTE = [ACC, BLUE, VIO, '#5ad1ff', '#ffb27a'];
  const lbl = (i)=> deckLabel(labelType, i, { keyword:'ERA' });

  return (
    <SlideShell orbs={[{ w:520, h:520, right:-160, top:-150,
        color:`radial-gradient(circle at 50% 50%, ${hexA(BLUE,.2)}, ${hexA(BLUE,0)} 70%)` }]}>
      <SlideHead no={head.no} en={head.en} cn={head.cn} badge={head.no} />

      <div style={{flex:'1 1 0', minHeight:0, display:'flex', flexDirection:'column', marginTop:24, position:'relative'}}>
        {/* 贯通脊柱 */}
        {showConnector && (
          <div style={{position:'absolute', left:33, top:18, bottom:18, width:3, borderRadius:2,
              background:`linear-gradient(180deg, ${hexA(ACC,.2)}, ${hexA(ACC,.55)}, ${hexA(ACC,.2)})`}}></div>
        )}

        <div style={{flex:'1 1 0', minHeight:0, display:'flex', flexDirection:'column', gap:14}}>
          {data.map((e,i)=>{
            const hot = focus && i===fIdx;
            const c = PALETTE[i % PALETTE.length];
            return (
              <div key={i} className={'dk-anim d'+Math.min(i+1,6)} style={{flex:'1 1 0', minHeight:0, display:'flex', alignItems:'center', gap:26, position:'relative'}}>
                {/* 分期节点 */}
                <span style={{flexShrink:0, width:hot?70:60, height:hot?70:60, borderRadius:'50%', zIndex:2, marginLeft:hot?-1:4,
                    display:'inline-flex', alignItems:'center', justifyContent:'center', fontFamily:'var(--font-display)', fontWeight:900,
                    fontSize:hot?26:22, color: hot?navy:c,
                    backdropFilter: hot?undefined:'blur(20px)', WebkitBackdropFilter: hot?undefined:'blur(20px)',
                    background: hot?`linear-gradient(150deg, ${c}, ${hexA(c,.7)})`:`radial-gradient(circle at 32% 26%, ${hexA('#ffffff',.22)}, ${hexA('#ffffff',0)} 55%), radial-gradient(circle at 35% 30%, ${hexA(c,.34)}, ${hexA(c,.14)}), ${hexA(navy,.82)}`,
                    border:`2px solid ${c}`, boxShadow: hot?`0 0 26px ${hexA(c,.7)}`:'0 8px 22px '+hexA(navy,.55)}}>{lbl(i)}</span>

                {/* 时期标题 */}
                <div style={{flexShrink:0, width:230}}>
                  <div style={{fontFamily:'var(--font-mono)', fontSize:14, letterSpacing:'.1em', color: hot?c:'var(--ink-faint)'}}>{e.period}</div>
                  <div style={{fontFamily:'var(--font-cn)', fontWeight:900, fontSize:'var(--type-sub)', color: hot?'#fff':'rgba(255,255,255,.92)', lineHeight:1.05, marginTop:4}}>{e.name}</div>
                  <div style={{fontSize:'var(--type-tiny)', color:'var(--ink-dim)', marginTop:3}}>{e.sub}</div>
                </div>

                {/* 事件簇 */}
                <div style={{flex:'1 1 0', minWidth:0, display:'flex', gap:14, alignItems:'stretch'}}>
                  {e.events.map((ev,j)=>(
                    <div key={j} style={{flex:'1 1 0', minWidth:0, display:'flex', flexDirection:'column', justifyContent:'center', gap:6,
                        padding:'14px 20px', borderRadius:14, background: hot?hexA(c,.1):'rgba(255,255,255,.04)',
                        borderLeft:`4px solid ${hot?c:'rgba(255,255,255,.16)'}`}}>
                      <span style={{fontFamily:'var(--font-mono)', fontSize:13, fontWeight:700, color: hot?c:'var(--ink-faint)'}}>{ev.date}</span>
                      <span style={{fontSize:'var(--type-tiny)', lineHeight:1.4, color:'rgba(255,255,255,.9)', textWrap:'pretty'}}>{ev.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {showAside && (
          <div className="dk-glass-dark dk-anim d5" style={{marginTop:16, flexShrink:0, borderRadius:18, padding:'14px 30px', display:'flex', alignItems:'center', gap:18}}>
            <span style={{flexShrink:0, fontFamily:'var(--font-mono)', fontSize:14, letterSpacing:'.12em', color:ACC}}>节奏解读</span>
            <p style={{fontSize:'var(--type-small)', lineHeight:1.5, color:'rgba(255,255,255,.88)', textWrap:'pretty', margin:0}}>{note}</p>
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

export default SlideEra;

/* ── 模板参数 schema（自描述 · 迁移即带控件；Tweaks 由此自动生成） ── */
export const slideSpec = { defaults: defaultProps, slot:'era', name:'编年纪事 · Era', controls:[
  { prop:'itemCount', type:'slider', label:'数量', default:4, min:2, max:5, step:1, desc:'分期数' },
  { prop:'showConnector', type:'toggle', label:'脊柱连线', default:true },
  { prop:'showAside', type:'toggle', label:'装饰文案', default:true, desc:'节奏解读' },
  { prop:'labelType', type:'labelType', label:'标签类型', default:'数字' },
  { prop:'focus', type:'focus', label:'重点信息 Focus', default:true },
  { prop:'focusIndex', type:'slider', label:'焦点序号', default:0, min:0, max:(p)=>p.itemCount-1, maxFromKey:'itemCount', maxFromKeyOffset:-1, displayOffset:1, step:1, showIf:(p)=>p.focus },
]};
