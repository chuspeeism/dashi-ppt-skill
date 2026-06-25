import { useDeckStyles, deckTheme } from './DeckKit.jsx';
/* ============================================================================
   SlideCoverTerminal — 封面 G · 数据终端（Terminal / Data Rails）
   独立组件：仅靠 props 控制内容与样式；render 时自注入 DeckKit 基座样式。
   以「金融终端」为构图主装置：极淡网格底纹 + 顶部实时数据 ticker 条（label/value/涨跌）
   + 中部命令行 kicker + 金属主标题 + 年份终端块(角标选择框)与静态光标 + 底部状态行。

   ── 区别于既有封面 ──────────────────────────────────────────────────────
   既有封面均为编辑/档案语汇 → 本页是「终端/数据」语汇：ticker 条、命令行、光标、网格，
   科技金融质感，强调「实时、量化」的研究气质。

   ── 可调参数（Props） ──────────────────────────────────────────────────────
   | prop        | 类型           | 默认 | 说明                              |
   | tickerCount | number (2–6)   | 5    | 顶部 ticker 条目数（截取 tickers）|
   | showGrid    | boolean        | true | 终端网格底纹（装饰）              |
   | showCaret   | boolean        | true | 年份后静态光标块（装饰）          |
   | showChip    | boolean        | true | 质感玻璃方块（装饰）              |
   | focus       | boolean        | true | 年份强调 + 角标选择框              |
   | focusIndex  | number         | 0    | 高亮第几条 ticker                 |
   | prompt/year/titleLines/tickers/status | … | — | 文案（默认=报告封面）            |
   ========================================================================== */
/* ── 页面属性契约 · defaultProps ──────────────────────────────────────────
   本页全部可见文案 / 数据 / 图片槽默认值集中于此，直接编辑即可换内容；
   组件内部以 { ...defaultProps, ...props } 合并，外部传同名 props 逐项覆盖。 */
export const defaultProps = {
  prompt: '// 2024 美国大额融资 AI · 年度调研',
  year: '2024',
  titleLines: ['美国大额融资', 'AI 公司调研报告'],
  tickers: [
      { k:'AI FUNDING', v:'$97B', d:'▲' },
      { k:'MEGA DEALS', v:'97', d:'▲' },
      { k:'AVG ROUND', v:'$1.0B', d:'▲' },
      { k:'VC SHARE', v:'33%', d:'▲' },
      { k:'YOY', v:'+58%', d:'▲' },
      { k:'LATE STAGE', v:'62%', d:'▼' },
    ],
  tickerCount: 5,
  showGrid: true,
  showCaret: true,
  showChip: true,
  status: 'AI CAPITAL LAB · 数据口径 ≥ 1 亿美元 · 2024 全年',
  focus: true,
  focusIndex: 0,
};

function SlideCoverTerminal(props){
  useDeckStyles(props.theme);
  const T = (deckTheme ? deckTheme(props.theme) : {});
  const ACC = T.accent || '#46e3c6';
  const BLUE = T.blue || '#4a86ff';

  const {
    prompt, year, titleLines, tickers, tickerCount, showGrid, showCaret,
    showChip, status, focus, focusIndex,
  } = { ...defaultProps, ...props };

  const items = tickers.slice(0, Math.max(2, Math.min(tickerCount, tickers.length)));
  const fIdx = Math.max(0, Math.min(focusIndex, items.length - 1));

  return (
    <div style={{position:'relative', width:'100%', height:'100%', overflow:'hidden'}}>
      {showGrid && <div style={{position:'absolute', inset:0, zIndex:0,
          backgroundImage:`linear-gradient(${hexA('#fff',.045)} 1px, transparent 1px), linear-gradient(90deg, ${hexA('#fff',.045)} 1px, transparent 1px)`,
          backgroundSize:'66px 66px', maskImage:'radial-gradient(120% 100% at 50% 50%, #000 55%, transparent 100%)', WebkitMaskImage:'radial-gradient(120% 100% at 50% 50%, #000 55%, transparent 100%)'}}></div>}

      {showChip && <>
        <div className="dk-anim d3" style={{position:'absolute', width:92, height:92, right:200, top:300, zIndex:3}}>
          <div className="dk-glass-chip" style={{width:'100%', height:'100%', transform:'rotate(15deg)'}}></div>
        </div>
        <div className="dk-anim d4" style={{position:'absolute', width:54, height:54, right:430, top:460, zIndex:3}}>
          <div className="dk-glass-chip" style={{width:'100%', height:'100%', transform:'rotate(-11deg)'}}></div>
        </div>
      </>}

      <div style={{position:'absolute', inset:0, padding:'var(--pad-y) var(--pad-x)',
            display:'flex', flexDirection:'column', justifyContent:'space-between', zIndex:2}}>
        {/* 顶部 ticker 条 */}
        <div className="dk-glass-dark dk-anim" style={{display:'flex', alignItems:'stretch', borderRadius:14, overflow:'hidden', border:`1px solid ${hexA('#fff',.14)}`}}>
          <div style={{display:'flex', alignItems:'center', gap:12, padding:'0 26px', background:hexA(ACC,.14), borderRight:`1px solid ${hexA('#fff',.14)}`}}>
            <span style={{width:11, height:11, borderRadius:'50%', background:ACC, boxShadow:`0 0 12px ${hexA(ACC,.9)}`}}></span>
            <span style={{fontFamily:'var(--font-mono)', fontSize:18, letterSpacing:'.20em', color:ACC, fontWeight:700}}>LIVE</span>
          </div>
          <div style={{flex:1, display:'flex', alignItems:'center'}}>
            {items.map((t,i)=>{
              const hot = focus && i===fIdx;
              const up = t.d === '▲';
              return (
                <div key={i} style={{flex:1, display:'flex', alignItems:'center', justifyContent:'center', gap:12,
                      padding:'20px 14px', borderLeft: i? `1px solid ${hexA('#fff',.10)}`:'none',
                      background: hot? hexA(ACC,.08):'transparent'}}>
                  <span style={{fontFamily:'var(--font-mono)', fontSize:15, letterSpacing:'.10em', color:'var(--ink-faint)'}}>{t.k}</span>
                  <span style={{fontFamily:'var(--font-display)', fontWeight:800, fontSize:24, color:'#fff'}}>{t.v}</span>
                  <span style={{fontFamily:'var(--font-mono)', fontSize:16, color: up?ACC:'var(--dk-warn)'}}>{t.d}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* 中部命令行 + 标题 + 年份 */}
        <div>
          <div className="dk-anim d1" style={{display:'flex', alignItems:'center', gap:14, marginBottom:26}}>
            <span style={{fontFamily:'var(--font-mono)', fontWeight:700, fontSize:'var(--type-small)', color:ACC}}>&gt;_</span>
            <span style={{fontFamily:'var(--font-mono)', fontSize:'var(--type-tiny)', letterSpacing:'.14em', color:'var(--ink-dim)'}}>{prompt}</span>
          </div>
          <h1 className="dk-chrome dk-anim d2" style={{fontFamily:'var(--font-cn)', fontWeight:900, fontSize:138, lineHeight:1.02, letterSpacing:'.01em', margin:0}}>
            {titleLines.map((t,i)=><div key={i}>{t}</div>)}
          </h1>
          <div className="dk-anim d3" style={{display:'flex', alignItems:'center', gap:26, marginTop:34}}>
            <div style={{position:'relative', display:'inline-flex', alignItems:'center'}}>
              <span style={{fontFamily:'var(--font-display)', fontWeight:900, fontSize:86, letterSpacing:'.02em', color: focus?ACC:'#fff', textShadow: focus?`0 0 36px ${hexA(ACC,.4)}`:'none'}}>{year}</span>
              {focus && <SelBox color={ACC} inset="-12px -14px" size={18} />}
            </div>
            {showCaret && <span style={{width:20, height:62, background:ACC, boxShadow:`0 0 16px ${hexA(ACC,.6)}`}}></span>}
            <span style={{fontFamily:'var(--font-mono)', fontSize:'var(--type-small)', letterSpacing:'.18em', color:'var(--ink-faint)'}}>FY · ANNUAL REPORT</span>
          </div>
        </div>

        {/* 底部状态行 */}
        <div className="dk-anim d4" style={{display:'flex', justifyContent:'space-between', alignItems:'center', borderTop:`1px solid ${hexA('#fff',.16)}`, paddingTop:22, fontFamily:'var(--font-mono)', fontSize:16, letterSpacing:'.16em', color:'var(--ink-faint)'}}>
          <span style={{display:'flex', alignItems:'center', gap:14}}>
            <span style={{width:9, height:9, transform:'rotate(45deg)', background:ACC}}></span>{status}
          </span>
          <span>PAGE 00 · COVER</span>
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

export default SlideCoverTerminal;

/* 角标选择框（取自原封面 SelectionBox：mint 四角刻线 + 细边框） */
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
export const slideSpec = { defaults: defaultProps, slot:'coverterminal', name:'封面G · 数据终端', controls:[
  { prop:'tickerCount', type:'slider', label:'Ticker 数量', default:5, min:2, max:6, step:1 },
  { prop:'showGrid', type:'toggle', label:'终端网格', default:true, desc:'装饰' },
  { prop:'showCaret', type:'toggle', label:'光标块', default:true, desc:'装饰' },
  { prop:'showChip', type:'toggle', label:'质感方块', default:true, desc:'玻璃芯片装饰' },
  { prop:'focus', type:'focus', label:'重点信息 Focus', default:true },
  { prop:'focusIndex', type:'slider', label:'焦点序号', default:0, min:0, max:(p)=>Math.max(0,p.tickerCount-1), maxFromKey:'tickerCount', maxFromKeyOffset:-1, displayOffset:1, step:1, showIf:(p)=>p.focus },
]};
