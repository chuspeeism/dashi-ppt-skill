/* ============================================================================
   SlideMega — 数字海报（巨号 + 叠印标题 + 旋转贴标 + 底部走马灯式数据带）
   标准 ES Module。与 Hero（左对齐 单号 + 支撑轨）、Stat（网格）、Versus（双号对置）
   刻意区分：本页是「海报式」排版 —— 居中超大数字作主视觉，粗体标题叠印其上，配旋转
   贴标与一条重复滚动感的数据带，强冲击力的单点表达。

   ── 可调参数（Props） ──────────────────────────────────────────────────────
   | prop         | 类型                          | 默认值 | 说明                              |
   | value/unit   | string                        | 见下   | 主数字 / 单位                     |
   | lines        | string[]                      | 见下   | 叠印标题（逐行）                  |
   | tag          | string                        | 见下   | 旋转贴标文字                      |
   | ticker       | string[]                      | 见下   | 底部数据带条目                    |
   | tickerCount  | number (0–6)                  | 4      | 展示数据带条目数（截取）          |
   | accentNumber | boolean                       | false  | 主数字用强调色（关则金属字）      |
   | showTag      | boolean                       | true   | 旋转贴标（装饰文案）              |
   | focus        | boolean                       | true   | 高亮某条数据带                    |
   | focusIndex   | number (0-based)              | 0      | 高亮第几条                        |
   | badge/kicker : string  顶部编号 / 小标                                      |
   | theme        | Partial<DeckTheme>            | —      | 设计令牌覆盖                      |
   ========================================================================== */
import { useDeckStyles, deckTheme, deckLabel, SlideShell } from './DeckKit.jsx';

/* ── 页面属性契约 · defaultProps ──────────────────────────────────────────
   本页全部可见文案 / 数据 / 图片槽默认值集中于此，直接编辑即可换内容；
   组件内部以 { ...defaultProps, ...props } 合并，外部传同名 props 逐项覆盖。 */
export const defaultProps = {
  value: '97',
  unit: '笔',
  lines: ['单笔 ≥ 1 亿美元的', '大额融资事件'],
  tag: '资本大年',
  tickerCount: 4,
  accentNumber: false,
  showTag: true,
  focus: true,
  focusIndex: 0,
  badge: '08',
  kicker: 'POSTER FIGURE',
  ticker: [
      '970 亿$ 全年总额', '10 亿$ 平均单笔', '43.3% 大模型占比',
      '63.9% 湾区集中', '1570 亿$ 最高估值', '×3 头部翻倍',
    ],
};

function SlideMega(props){
  useDeckStyles(props.theme);
  const T = (deckTheme ? deckTheme(props.theme) : {});
  const ACC = T.accent || '#46e3c6';
  const BLUE = T.blue || '#4a86ff';
  const navy = T.navy900 || '#050b22';

  const {
    value, unit, lines, tag, tickerCount, accentNumber, showTag,
    focus, focusIndex, badge, kicker, ticker,
  } = { ...defaultProps, ...props };

  const tk = ticker.slice(0, Math.max(0, Math.min(tickerCount, ticker.length)));
  const fIdx = Math.max(0, Math.min(focusIndex, Math.max(0, tk.length - 1)));

  return (
    <SlideShell orbs={[
      { w:760, h:760, left:'50%', top:'44%', color:`radial-gradient(circle at 50% 50%, ${hexA(ACC,.18)}, ${hexA(ACC,0)} 64%)` },
    ]}>
      {/* 顶部小标 */}
      <div className="dk-anim" style={{flexShrink:0, display:'flex', alignItems:'center', justifyContent:'space-between'}}>
        <div style={{display:'flex', alignItems:'center', gap:16}}>
          <span style={{fontFamily:'var(--font-display)', fontWeight:900, fontSize:'var(--type-sub)', color:ACC}}>{badge}</span>
          <span style={{height:2, width:64, background:ACC}}></span>
          <span style={{fontFamily:'var(--font-mono)', fontSize:'var(--type-tiny)', letterSpacing:'.3em', color:'var(--ink-dim)'}}>{kicker}</span>
        </div>
      </div>

      {/* 海报主体 */}
      <div style={{flex:'1 1 0', minHeight:0, position:'relative', display:'flex', flexDirection:'column',
            alignItems:'center', justifyContent:'center'}}>
        {/* 巨号 */}
        <div style={{position:'relative', display:'flex', alignItems:'flex-start', justifyContent:'center'}}>
          <span className={accentNumber?'':'dk-chrome'} style={{fontFamily:'var(--font-display)', fontWeight:900,
              fontSize:480, lineHeight:.8, letterSpacing:'-.03em',
              color: accentNumber?ACC:undefined, textShadow: accentNumber?`0 0 90px ${hexA(ACC,.5)}`:'none'}}>{value}</span>
          <span style={{fontFamily:'var(--font-display)', fontWeight:800, fontSize:90, color:'var(--ink-dim)', marginTop:60}}>{unit}</span>
          {showTag && (
            <span className="dk-anim d2" style={{position:'absolute', right:-30, top:20, transform:'rotate(11deg)',
                fontFamily:'var(--font-cn)', fontWeight:900, fontSize:34, color:'#fff', background:BLUE, padding:'10px 22px',
                borderRadius:14, boxShadow:`0 16px 40px ${hexA(BLUE,.55)}`, whiteSpace:'nowrap'}}>{tag}</span>
          )}
        </div>
        {/* 叠印标题 */}
        <div className="dk-anim d1" style={{position:'relative', marginTop:-26, textAlign:'center'}}>
          {lines.map((l,i)=>(
            <div key={i} style={{fontFamily:'var(--font-cn)', fontWeight:900, fontSize:64, lineHeight:1.06, color:'#fff',
                textShadow:'0 6px 30px rgba(3,8,30,.6)'}}>{l}</div>
          ))}
        </div>
      </div>

      {/* 底部数据带 */}
      {tk.length > 0 && (
        <div className="dk-anim d4" style={{flexShrink:0, display:'flex', alignItems:'stretch', gap:0, borderRadius:16, overflow:'hidden',
              border:'1px solid rgba(255,255,255,.14)'}}>
          {tk.map((s,i)=>{
            const hot = focus && i===fIdx;
            return (
              <div key={i} style={{flex:'1 1 0', minWidth:0, display:'flex', alignItems:'center', justifyContent:'center', gap:10,
                    padding:'18px 16px', background: hot?hexA(ACC,.16):(i%2?'rgba(255,255,255,.03)':'transparent'),
                    borderRight: i<tk.length-1?'1px solid rgba(255,255,255,.1)':'none'}}>
                <span style={{width:7, height:7, borderRadius:'50%', background: hot?ACC:'rgba(255,255,255,.4)', flexShrink:0}}></span>
                <span style={{fontFamily:'var(--font-cn)', fontWeight:700, fontSize:'var(--type-tiny)', color: hot?'#fff':'var(--ink-dim)', whiteSpace:'nowrap'}}>{s}</span>
              </div>
            );
          })}
        </div>
      )}
    </SlideShell>
  );

  function hexA(hex, a){
    if(!hex || hex[0] !== '#') return hex;
    const x = hex.slice(1); const f = x.length===3 ? x.split('').map(c=>c+c).join('') : x;
    return `rgba(${parseInt(f.slice(0,2),16)},${parseInt(f.slice(2,4),16)},${parseInt(f.slice(4,6),16)},${a})`;
  }
}

export default SlideMega;

export const slideSpec = { defaults: defaultProps, slot:'mega', name:'数字海报 · Mega', controls:[
  { prop:'tickerCount', type:'slider', label:'数量', default:4, min:0, max:6, step:1, desc:'数据带条目' },
  { prop:'accentNumber', type:'toggle', label:'强调主数字', default:false, desc:'关则金属字' },
  { prop:'showTag', type:'toggle', label:'装饰文案', default:true, desc:'旋转贴标' },
  { prop:'focus', type:'focus', label:'重点信息 Focus', default:true },
  { prop:'focusIndex', type:'slider', label:'焦点序号', default:0, min:0, max:(p)=>Math.max(0,p.tickerCount-1), maxFromKey:'tickerCount', maxFromKeyOffset:-1, displayOffset:1, step:1, showIf:(p)=>p.focus && p.tickerCount>0 },
]};
