import { useDeckStyles, deckTheme, deckLabel, SlideHead } from './DeckKit.jsx';
/* ============================================================================
   SlideMeter — 计量条（横向 bullet/进度计量 · 目标刻度 · 极简低卡片）
   独立组件：仅靠 props 控制内容与样式；render 时自注入 DeckKit 基座样式。
   非卡片 · 每行一根贯通的横向计量条：浅色定量底槽 + 渐变填充 + 目标刻度线 +
   末端读数；左侧仅编号 + 名目（无卡片框）。线性、克制、读数即结论。

   ── 区别于同类既有页 ──────────────────────────────────────────────────────
   Gauge(半环/整环仪表)、Trend(折线走势)、Slope(两期连线)、Ledger(数字台账) →
   本页是「水平 bullet 计量条」：每行实测 vs 目标刻度，横向比例条直读达成度。

   ── 可调参数（Props） ──────────────────────────────────────────────────────
   | prop        | 类型                   | 默认 | 说明                          |
   | itemCount   | number (2–6)           | 6    | 计量条数量（截取 items）      |
   | showTarget  | boolean                | true | 目标刻度线（装饰）            |
   | showValue   | boolean                | true | 末端读数                      |
   | focus       | boolean                | true | 高亮某条                      |
   | focusIndex  | number                 | 0    | 高亮第几条                    |
   | labelType   | number|symbol|keyword  | number | 行首编号样式                |
   | head/items  | …                      | —    | 文案（默认=四项关键达成度）   |
   ========================================================================== */
/* ── 页面属性契约 · defaultProps ──────────────────────────────────────────
   本页全部可见文案 / 数据 / 图片槽默认值集中于此，直接编辑即可换内容；
   组件内部以 { ...defaultProps, ...props } 合并，外部传同名 props 逐项覆盖。 */
export const defaultProps = {
  itemCount: 6,
  showTarget: true,
  showValue: true,
  focus: true,
  focusIndex: 0,
  labelType: 'number',
  head: { no:'计量', en:'Key Gauges', cn:'四项关键指标的达成度' },
  items: [
      { label:'大模型赛道资金占比', value:43.3, target:35, unit:'%', tone:'up' },
      { label:'旧金山湾区地理集中度', value:63.9, target:55, unit:'%', tone:'up' },
      { label:'≥1 亿美元事件占比', value:78, target:60, unit:'%', tone:'up' },
      { label:'头部估值 / 收入倍数（归一）', value:88, target:50, unit:'', tone:'warn' },
      { label:'应用层有效 PMF 比例', value:34, target:50, unit:'%', tone:'down' },
      { label:'早期项目存活率（归一）', value:46, target:60, unit:'%', tone:'down' },
    ],
};

function SlideMeter(props){
  useDeckStyles(props.theme);
  const T = (deckTheme ? deckTheme(props.theme) : {});
  const ACC = T.accent || '#46e3c6';
  const BLUE = T.blue || '#4a86ff';
  const WARN = T.warn || '#ffb27a';

  const {
    itemCount, showTarget, showValue, focus, focusIndex, labelType, head,
    items,
  } = { ...defaultProps, ...props };

  const n = Math.max(2, Math.min(itemCount, items.length));
  const shown = items.slice(0, n);
  const fIdx = Math.max(0, Math.min(focusIndex, shown.length - 1));
  const num = (i)=> deckLabel(labelType, i, { keyword:'M' });
  const colorFor = (tone, hot)=> tone==='warn' ? WARN : tone==='down' ? '#7fa0d8' : ACC;

  return (
    <div style={{position:'relative', width:'100%', height:'100%', overflow:'hidden',
          padding:'var(--pad-y) var(--pad-x)', display:'flex', flexDirection:'column'}}>
      <div className="dk-orb" style={{width:520, height:520, left:-160, top:-150,
          background:`radial-gradient(circle at 50% 50%, ${hexA(ACC,.14)}, ${hexA(ACC,0)} 70%)`}}></div>

      <SlideHead no="计量" en={head.en} cn={head.cn} badge="≣" />

      <div style={{flex:'1 1 0', minHeight:0, display:'flex', flexDirection:'column', justifyContent:'space-evenly', gap:'min(2vh,22px)', marginTop:20, paddingBottom:8}}>
        {shown.map((it,i)=>{
          const hot = focus && i===fIdx;
          const c = colorFor(it.tone, hot);
          const v = Math.max(0, Math.min(it.value, 100));
          const tgt = Math.max(0, Math.min(it.target, 100));
          return (
            <div key={i} className={'dk-anim d'+Math.min(i+1,6)} style={{display:'grid',
                  gridTemplateColumns:'minmax(360px, .9fr) 2.1fr auto', alignItems:'center', gap:34,
                  opacity: hot||!focus ? 1 : .82}}>
              {/* 名目 */}
              <div style={{display:'flex', alignItems:'center', gap:18, minWidth:0}}>
                <span style={{flexShrink:0, width:42, height:42, borderRadius:12, display:'grid', placeItems:'center',
                    fontFamily:'var(--font-display)', fontWeight:900, fontSize:17,
                    color: hot?'#04122e':c, background: hot?c:'transparent', border:`2px solid ${hexA(c,hot?1:.4)}`}}>{num(i)}</span>
                <span style={{fontFamily:'var(--font-cn)', fontWeight:700, fontSize:'var(--type-small)',
                    color: hot?'#fff':'var(--ink-dim)', lineHeight:1.2}}>{it.label}</span>
              </div>
              {/* 计量槽 */}
              <div style={{position:'relative', height:hot?28:22, borderRadius:30, background:hexA('#fff',.07),
                    border:`1px solid ${hexA('#fff',.12)}`, overflow:'visible'}}>
                <div style={{position:'absolute', left:0, top:0, bottom:0, width:v+'%', borderRadius:30,
                    background:`linear-gradient(90deg, ${hexA(c,.5)}, ${c})`,
                    boxShadow: hot?`0 0 18px ${hexA(c,.5)}`:'none'}}></div>
                {showTarget && (
                  <div style={{position:'absolute', left:tgt+'%', top:-7, bottom:-7, width:3,
                      background:'#fff', borderRadius:2, boxShadow:'0 0 8px rgba(255,255,255,.6)'}} title="目标"></div>
                )}
              </div>
              {/* 读数 */}
              <div style={{minWidth:128, textAlign:'right'}}>
                {showValue && (
                  <span style={{fontFamily:'var(--font-display)', fontWeight:900, fontSize:'var(--type-sub)',
                      color: hot?'#fff':'rgba(255,255,255,.84)'}}>{it.value}<span style={{fontSize:'.5em', color:c}}>{it.unit}</span></span>
                )}
                {showTarget && (
                  <div style={{fontFamily:'var(--font-mono)', fontSize:13, color:'var(--ink-faint)', letterSpacing:'.08em', marginTop:2}}>目标 {it.target}{it.unit}</div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  function hexA(hex, a){
    if(!hex || hex[0] !== '#') return hex;
    const x = hex.slice(1); const f = x.length===3 ? x.split('').map(c=>c+c).join('') : x;
    return `rgba(${parseInt(f.slice(0,2),16)},${parseInt(f.slice(2,4),16)},${parseInt(f.slice(4,6),16)},${a})`;
  }
}

export default SlideMeter;

/* ── 模板参数 schema（自描述 · 迁移即带控件；Tweaks 由此自动生成） ── */
export const slideSpec = { defaults: defaultProps, slot:'meter', name:'计量条 · Meter', controls:[
  { prop:'itemCount', type:'slider', label:'数量', default:6, min:2, max:6, step:1 },
  { prop:'showTarget', type:'toggle', label:'装饰元素', default:true, desc:'目标刻度线' },
  { prop:'showValue', type:'toggle', label:'末端读数', default:true },
  { prop:'labelType', type:'labelType', label:'标签类型', default:'数字' },
  { prop:'focus', type:'focus', label:'重点信息 Focus', default:true },
  { prop:'focusIndex', type:'slider', label:'焦点序号', default:0, min:0, max:(p)=>p.itemCount-1, maxFromKey:'itemCount', maxFromKeyOffset:-1, displayOffset:1, step:1, showIf:(p)=>p.focus },
]};
