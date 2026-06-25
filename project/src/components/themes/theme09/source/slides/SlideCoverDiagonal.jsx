import { useDeckStyles, deckTheme } from './DeckKit.jsx';
/* ============================================================================
   SlideCoverDiagonal — 封面 C · 斜切分屏（Diagonal Split Cover）
   独立组件：仅靠 props 控制内容与样式；render 时自注入 DeckKit 基座样式。
   以「对角 clip-path 色场」分屏：左半承载竖排书脊品牌 + 金属巨幅主标题 + 年份；
   右半斜切面板内排一列等宽「篇章索引」（编号 + 标题），斜边亮线贯通。

   ── 区别于既有封面 / SlideSplit ────────────────────────────────────────
   SlideSplit 是内容页（对角剖面承载「巨号数字 + 主张 + 支撑指标」）→
   本页是封面：对角面板承载「篇章索引」，左侧承载标题与书脊，作目录预告式封面。

   ── 可调参数（Props） ──────────────────────────────────────────────────────
   | prop        | 类型           | 默认 | 说明                              |
   | indexCount  | number (0–6)   | 5    | 右侧篇章索引条数（截取 index）    |
   | splitDir    | '右' | '左'   | '右' | 斜切面板所在侧                    |
   | showSpine   | boolean        | true | 左侧竖排书脊品牌（装饰）          |
   | showSeam    | boolean        | true | 斜切边亮线（装饰）                |
   | focus       | boolean        | true | 高亮强调                          |
   | focusIndex  | number         | 0    | 高亮第几条索引                    |
   | brand/kicker/year/titleLines/index | … | — | 文案（默认=报告封面）            |
   ========================================================================== */
/* ── 页面属性契约 · defaultProps ──────────────────────────────────────────
   本页全部可见文案 / 数据 / 图片槽默认值集中于此，直接编辑即可换内容；
   组件内部以 { ...defaultProps, ...props } 合并，外部传同名 props 逐项覆盖。 */
export const defaultProps = {
  brand: 'AI CAPITAL LAB',
  kicker: 'ANNUAL RESEARCH REPORT',
  year: '2024',
  titleLines: ['美国大额融资', 'AI 公司', '调研报告'],
  index: [
      { no:'01', t:'研究方法' },
      { no:'02', t:'市场全景' },
      { no:'03', t:'横向透视' },
      { no:'04', t:'产业链分层' },
      { no:'05', t:'典型案例' },
      { no:'06', t:'风险与展望' },
    ],
  indexCount: 5,
  splitDir: '右',
  showSpine: true,
  showSeam: true,
  showChip: true,
  focus: true,
  focusIndex: 0,
};

function SlideCoverDiagonal(props){
  useDeckStyles(props.theme);
  const T = (deckTheme ? deckTheme(props.theme) : {});
  const ACC = T.accent || '#46e3c6';
  const BLUE = T.blue || '#4a86ff';

  const {
    brand, kicker, year, titleLines, index, indexCount, splitDir,
    showSpine, showSeam, showChip, focus, focusIndex,
  } = { ...defaultProps, ...props };

  const right = splitDir === '右';
  const items = index.slice(0, Math.max(0, Math.min(indexCount, index.length)));
  const fIdx = Math.max(0, Math.min(focusIndex, items.length - 1));
  const clip = right
    ? 'polygon(40% 0, 100% 0, 100% 100%, 60% 100%)'
    : 'polygon(0 0, 40% 0, 60% 100%, 0 100%)';

  return (
    <div style={{position:'relative', width:'100%', height:'100%', overflow:'hidden'}}>
      {/* 斜切色场 */}
      <div className="dk-anim" style={{position:'absolute', inset:0, clipPath:clip,
          background:`linear-gradient(${right?'150deg':'210deg'}, ${hexA(BLUE,.34)}, ${hexA('#0a1230',0)} 80%)`}}></div>
      {/* 斜边亮线 */}
      {showSeam && (
        <svg viewBox="0 0 1920 1080" preserveAspectRatio="none" style={{position:'absolute', inset:0, width:'100%', height:'100%', pointerEvents:'none'}}>
          <line x1="768" y1="0" x2="1152" y2="1080" stroke={hexA(ACC,.55)} strokeWidth="2" />
        </svg>
      )}

      {/* 竖排书脊品牌 */}
      {showSpine && (
        <div style={{position:'absolute', top:'50%', [right?'left':'right']:56,
            transform:`translate(${right?'-50%':'50%'},-50%) rotate(${right?-90:90}deg)`, transformOrigin:'center',
            fontFamily:'var(--font-mono)', fontSize:18, letterSpacing:'.42em', color:'var(--ink-faint)',
            textTransform:'uppercase', whiteSpace:'nowrap', zIndex:1}}>{brand}</div>
      )}

      {/* 质感玻璃小方块（取自原封面） */}
      {showChip && <>
        <div className="dk-anim d2" style={{position:'absolute', width:120, height:120, top:118, [right?'right':'left']:150, zIndex:2}}>
          <div className="dk-glass-chip" style={{width:'100%', height:'100%', transform:'rotate(16deg)'}}></div>
        </div>
        <div className="dk-anim d3" style={{position:'absolute', width:64, height:64, bottom:140, [right?'right':'left']:340, zIndex:2}}>
          <div className="dk-glass-chip" style={{width:'100%', height:'100%', transform:'rotate(-12deg)'}}></div>
        </div>
      </>}

      <div style={{position:'absolute', inset:0, padding:'var(--pad-y) var(--pad-x)', zIndex:2,
            display:'flex', flexDirection: right?'row':'row-reverse', alignItems:'stretch'}}>
        {/* 标题区 */}
        <div style={{flex:'0 0 54%', display:'flex', flexDirection:'column', justifyContent:'center', paddingRight: right?60:0, paddingLeft: right?0:60}}>
          <div className="dk-anim" style={{display:'flex', alignItems:'center', gap:16, marginBottom:30}}>
            <span style={{width:10, height:10, transform:'rotate(45deg)', background:ACC, boxShadow:`0 0 14px ${hexA(ACC,.7)}`}}></span>
            <span style={{fontFamily:'var(--font-mono)', fontSize:'var(--type-tiny)', letterSpacing:'.28em', color:'var(--ink-dim)', textTransform:'uppercase'}}>{kicker}</span>
          </div>
          <h1 className="dk-chrome dk-anim d2" style={{fontFamily:'var(--font-cn)', fontWeight:900,
              fontSize:132, lineHeight:1.0, letterSpacing:'.01em', margin:0}}>
            {titleLines.map((t,i)=><div key={i}>{t}</div>)}
          </h1>
          <div className="dk-anim d3" style={{display:'flex', alignItems:'baseline', gap:20, marginTop:36}}>
            <span style={{position:'relative', fontFamily:'var(--font-display)', fontWeight:900, fontSize:96, letterSpacing:'.02em',
                color: focus?ACC:'#fff', textShadow: focus?`0 0 40px ${hexA(ACC,.4)}`:'none'}}>{year}
              {focus && <SelBox color={ACC} inset="-12px -12px" size={18} />}
            </span>
            <span style={{height:2, width:120, background:hexA('#fff',.4), alignSelf:'center'}}></span>
            <span style={{fontFamily:'var(--font-mono)', fontSize:'var(--type-small)', letterSpacing:'.18em', color:'var(--ink-faint)'}}>FY ANNUAL</span>
          </div>
        </div>

        {/* 篇章索引 */}
        {items.length>0 && (
          <div style={{flex:1, display:'flex', flexDirection:'column', justifyContent:'center',
                alignItems: right?'flex-end':'flex-start'}}>
            <div className="dk-anim d2" style={{fontFamily:'var(--font-mono)', fontSize:15, letterSpacing:'.24em',
                color:hexA('#fff',.5), textTransform:'uppercase', marginBottom:22}}>CONTENTS</div>
            <div style={{display:'flex', flexDirection:'column', gap:0, width:'min(100%, 440px)'}}>
              {items.map((m,i)=>{
                const hot = focus && i===fIdx;
                return (
                  <div key={i} className={`dk-anim d${Math.min(3+i,6)}`} style={{display:'flex', alignItems:'center', gap:22,
                        padding:'18px 4px', borderTop:`1px solid ${hexA('#fff', i===0?.28:.12)}`,
                        borderBottom: i===items.length-1?`1px solid ${hexA('#fff',.12)}`:'none'}}>
                    <span style={{fontFamily:'var(--font-display)', fontWeight:900, fontSize:30,
                        color: hot?ACC:hexA('#fff',.5), minWidth:46}}>{m.no}</span>
                    <span style={{fontFamily:'var(--font-cn)', fontWeight:hot?800:600, fontSize:'var(--type-body)',
                        color: hot?'#fff':'rgba(255,255,255,.82)'}}>{m.t}</span>
                    {hot && <span style={{marginLeft:'auto', width:8, height:8, transform:'rotate(45deg)', background:ACC, boxShadow:`0 0 12px ${hexA(ACC,.8)}`}}></span>}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );

  function hexA(hex, a){
    if(!hex || hex[0] !== '#') return hex;
    const x = hex.slice(1); const f = x.length===3 ? x.split('').map(c=>c+c).join('') : x;
    return `rgba(${parseInt(f.slice(0,2),16)},${parseInt(f.slice(2,4),16)},${parseInt(f.slice(4,6),16)},${a})`;
  }
}

export default SlideCoverDiagonal;

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
export const slideSpec = { defaults: defaultProps, slot:'coverdiag', name:'封面C · 斜切分屏', controls:[
  { prop:'indexCount', type:'slider', label:'篇章索引数量', default:5, min:0, max:6, step:1 },
  { prop:'splitDir', type:'radio', label:'斜切方向', default:'右', options:['右','左'] },
  { prop:'showSpine', type:'toggle', label:'竖排书脊', default:true, desc:'装饰' },
  { prop:'showSeam', type:'toggle', label:'斜边亮线', default:true, desc:'装饰' },
  { prop:'showChip', type:'toggle', label:'质感方块', default:true, desc:'玻璃芯片装饰' },
  { prop:'focus', type:'focus', label:'重点信息 Focus', default:true },
  { prop:'focusIndex', type:'slider', label:'焦点序号', default:0, min:0, max:(p)=>Math.max(0,p.indexCount-1), maxFromKey:'indexCount', maxFromKeyOffset:-1, displayOffset:1, step:1, showIf:(p)=>p.focus && p.indexCount>0 },
]};
