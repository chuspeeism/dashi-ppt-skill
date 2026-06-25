import { useDeckStyles, deckTheme, SlideHead } from './DeckKit.jsx';
/* ============================================================================
   SlideRibbon — 全幅比例带（整幅横向比例分割 · 信息图 · 极简低卡片）
   独立组件：仅靠 props 控制内容与样式；render 时自注入 DeckKit 基座样式。
   非卡片 · 把整条版心做成一根贯通的「比例带」：按各项占比切成宽度不等的竖段，
   段内直接落大号占比 + 标签，段顶错位引出说明（无卡片框），底部一条刻度基线。

   ── 区别于同类既有页 ──────────────────────────────────────────────────────
   Stacked(坐标轴堆叠条 · 多期)、Marimekko(变宽×变高二维)、Funnel(逐层收窄) →
   本页是「单根全幅比例带」：一行铺满、段宽∝占比、段内巨号占比 + 错位引线说明。

   ── 可调参数（Props） ──────────────────────────────────────────────────────
   | prop        | 类型                    | 默认 | 说明                          |
   | itemCount   | number (2–6)            | 4    | 分段数量（截取 items）        |
   | showPct     | boolean                 | true | 段内显示占比数字              |
   | showScale   | boolean                 | true | 底部 0–100% 刻度基线（装饰）  |
   | focus       | boolean                 | true | 高亮某段                      |
   | focusIndex  | number                  | 0    | 高亮第几段                    |
   | labelType   | number|symbol|keyword   | number | 段角标样式                  |
   | head/items  | …                       | —    | 文案（默认=赛道资金占比）     |
   ========================================================================== */
/* ── 页面属性契约 · defaultProps ──────────────────────────────────────────
   本页全部可见文案 / 数据 / 图片槽默认值集中于此，直接编辑即可换内容；
   组件内部以 { ...defaultProps, ...props } 合并，外部传同名 props 逐项覆盖。 */
export const defaultProps = {
  itemCount: 4,
  showPct: true,
  showScale: true,
  focus: true,
  focusIndex: 0,
  labelType: 'number',
  head: { no:'占比', en:'Share of Capital', cn:'资金都流向了哪条赛道' },
  items: [
      { label:'大模型 / 基础模型', pct:43.3, note:'一条赛道吞下逾四成资金', color: '#4a86ff' },
      { label:'AI 基础设施 / 算力', pct:24.6, note:'卖铲子环节稳收过路费', color: '#46e3c6' },
      { label:'应用层 / 垂直场景', pct:21.1, note:'两极分化，PMF 者跑出', color: '#9f7bff' },
      { label:'其他 / 早期探索', pct:11.0, note:'长尾叙事开始退潮', color: '#ffb27a' },
      { label:'机器人 / 具身智能', pct:8.2, note:'硬件长周期，资本谨慎试水', color: '#6fd3ff' },
      { label:'安全 / 对齐', pct:5.0, note:'政策驱动的新兴小赛道', color: '#ff9bb6' },
    ],
};

function SlideRibbon(props){
  useDeckStyles(props.theme);
  const T = (deckTheme ? deckTheme(props.theme) : {});
  const ACC = T.accent || '#46e3c6';
  const BLUE = T.blue || '#4a86ff';
  const VIO  = T.violet || '#9f7bff';
  const WARN = T.warn || '#ffb27a';

  const {
    itemCount, showPct, showScale, focus, focusIndex, labelType, head,
    items,
  } = { ...defaultProps, ...props };

  const n = Math.max(2, Math.min(itemCount, items.length));
  const shown = items.slice(0, n);
  const total = shown.reduce((s,d)=>s + (d.pct||0), 0) || 1;
  const fIdx = Math.max(0, Math.min(focusIndex, shown.length - 1));
  const sym = ['◆','▲','●','■','★','✦'];
  const lab = (i)=> labelType==='symbol' ? sym[i%sym.length] : labelType==='keyword' ? '·' : String(i+1).padStart(2,'0');

  return (
    <div style={{position:'relative', width:'100%', height:'100%', overflow:'hidden',
          padding:'var(--pad-y) var(--pad-x)', display:'flex', flexDirection:'column'}}>
      <div className="dk-orb" style={{width:560, height:560, right:-180, top:-160,
          background:`radial-gradient(circle at 50% 50%, ${hexA(BLUE,.18)}, ${hexA(BLUE,0)} 70%)`}}></div>

      <SlideHead no="占比" en={head.en} cn={head.cn} badge="%" />

      {/* 比例带 */}
      <div style={{flex:'1 1 0', minHeight:0, display:'flex', flexDirection:'column', justifyContent:'center', marginTop:30}}>
        <div style={{display:'flex', alignItems:'stretch', width:'100%', height:320,
              boxShadow:'0 30px 70px rgba(3,8,30,.45)'}}>
          {shown.map((d,i)=>{
            const w = (d.pct/total)*100;
            const hot = focus && i===fIdx;
            const c = d.color || BLUE;
            const isFirst = i===0, isLast = i===shown.length-1;
            return (
              <div key={i} className={'dk-anim d'+Math.min(i+1,6)} style={{flexBasis:w+'%', position:'relative',
                    display:'flex', flexDirection:'column', justifyContent:'flex-end', padding:'30px 26px',
                    background:`linear-gradient(180deg, ${hexA(c,hot?.42:.24)}, ${hexA(c,hot?.92:.7)})`,
                    borderRight: i<shown.length-1 ? '2px solid rgba(2,6,24,.5)' : 'none',
                    borderTopLeftRadius:isFirst?18:0, borderBottomLeftRadius:isFirst?18:0,
                    borderTopRightRadius:isLast?18:0, borderBottomRightRadius:isLast?18:0,
                    boxShadow: hot ? `inset 0 0 0 3px ${hexA('#fff',.85)}` : 'none', zIndex: hot?2:1,
                    transition:'flex-basis .4s'}}>
                <span style={{position:'absolute', top:22, left:26, fontFamily:'var(--font-mono)',
                    fontSize:14, letterSpacing:'.14em', color:hexA('#fff',.85)}}>{lab(i)}</span>
                {showPct && (
                  <div style={{fontFamily:'var(--font-display)', fontWeight:900,
                      fontSize: w<8?34: w<14?54:88, lineHeight:.9, color:'#fff',
                      textShadow:'0 4px 18px rgba(2,6,24,.5)'}}>
                    {d.pct}<span style={{fontSize:'.42em', fontWeight:700}}>%</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* 刻度基线 */}
        {showScale && (
          <div className="dk-anim d2" style={{display:'flex', justifyContent:'space-between', marginTop:10,
                fontFamily:'var(--font-mono)', fontSize:13, color:'var(--ink-faint)', letterSpacing:'.1em'}}>
            {['0','25','50','75','100%'].map((t,i)=>(<span key={i}>{t}</span>))}
          </div>
        )}

        {/* 段说明（错位引线，无卡片框；过窄分段隐藏文字以保可读） */}
        <div style={{display:'flex', width:'100%', marginTop:34}}>
          {shown.map((d,i)=>{
            const w = (d.pct/total)*100;
            const hot = focus && i===fIdx;
            const c = d.color || BLUE;
            const tiny = w < 6;      // 极窄：仅留色点
            const narrow = w < 11;   // 较窄：隐藏底部说明文字
            return (
              <div key={i} className={'dk-anim d'+Math.min(i+2,6)} style={{flexBasis:w+'%', paddingRight: narrow?10:24, minWidth:0}}>
                <div style={{display:'flex', alignItems:'center', gap:10, marginBottom:8}}>
                  <span style={{width:12, height:12, borderRadius:3, background:c, flexShrink:0,
                      boxShadow: hot?`0 0 12px ${hexA(c,.8)}`:'none'}}></span>
                  {!tiny && <span style={{fontFamily:'var(--font-cn)', fontWeight:800, fontSize:'var(--type-small)',
                      color: hot?'#fff':'rgba(255,255,255,.86)', whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis'}}>{d.label}</span>}
                </div>
                {!narrow && <p style={{fontFamily:'var(--font-cn)', fontSize:18, lineHeight:1.4,
                    color: hot?'var(--ink-dim)':'var(--ink-faint)', textWrap:'pretty'}}>{d.note}</p>}
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

export default SlideRibbon;

/* ── 模板参数 schema（自描述 · 迁移即带控件；Tweaks 由此自动生成） ── */
export const slideSpec = { defaults: defaultProps, slot:'ribbon', name:'全幅比例带 · Ribbon', controls:[
  { prop:'itemCount', type:'slider', label:'分段数量', default:4, min:2, max:6, step:1 },
  { prop:'showPct', type:'toggle', label:'段内占比', default:true },
  { prop:'showScale', type:'toggle', label:'装饰文案', default:true, desc:'刻度基线' },
  { prop:'labelType', type:'labelType', label:'标签类型', default:'数字' },
  { prop:'focus', type:'focus', label:'重点信息 Focus', default:true },
  { prop:'focusIndex', type:'slider', label:'焦点序号', default:0, min:0, max:(p)=>p.itemCount-1, maxFromKey:'itemCount', maxFromKeyOffset:-1, displayOffset:1, step:1, showIf:(p)=>p.focus },
]};
