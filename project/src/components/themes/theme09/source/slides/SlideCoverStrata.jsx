import { useDeckStyles, deckTheme } from './DeckKit.jsx';
/* ============================================================================
   SlideCoverStrata — 封面 E · 层叠光带（Horizontal Strata）
   独立组件：仅靠 props 控制内容与样式；render 时自注入 DeckKit 基座样式。
   以「满幅横向层带」为构图主装置：画面被等分为若干横向光带（细线分隔 + 右缘篇章刻度），
   焦点带染 mint 渐变；左侧叠印巨号年份(角标选择框) + 竖分隔 + 金属主标题，横向节奏鲜明。

   ── 区别于既有封面 ──────────────────────────────────────────────────────
   Mast(细线刊头+左对齐标题)、Diagonal(对角)、Dossier(档案框) → 本页以「横向层带阵列」
   承载篇章索引、焦点带高亮，title/year 叠印其上，靠水平律动与留白制造秩序感。

   ── 可调参数（Props） ──────────────────────────────────────────────────────
   | prop        | 类型           | 默认 | 说明                              |
   | bandCount   | number (3–6)   | 5    | 横向层带数量（截取 bands）        |
   | showLabels  | boolean        | true | 右缘篇章刻度（装饰）              |
   | showChip    | boolean        | true | 质感玻璃方块（装饰）              |
   | focus       | boolean        | true | 焦点带高亮 + 年份角标框            |
   | focusIndex  | number         | 2    | 高亮第几条层带                    |
   | kicker/year/titleLines/bands/footnote | … | — | 文案（默认=报告封面）            |
   ========================================================================== */
/* ── 页面属性契约 · defaultProps ──────────────────────────────────────────
   本页全部可见文案 / 数据 / 图片槽默认值集中于此，直接编辑即可换内容；
   组件内部以 { ...defaultProps, ...props } 合并，外部传同名 props 逐项覆盖。 */
export const defaultProps = {
  kicker: 'AI CAPITAL LAB · INVESTMENT RESEARCH',
  year: '2024',
  titleLines: ['美国大额融资', 'AI 公司调研报告'],
  bands: [
      { no:'01', t:'市场全景' },
      { no:'02', t:'行业分布' },
      { no:'03', t:'产业链分层' },
      { no:'04', t:'典型案例' },
      { no:'05', t:'风险与展望' },
      { no:'06', t:'投资展望' },
    ],
  bandCount: 5,
  showLabels: true,
  showChip: true,
  footnote: '聚焦 2024 年单笔 ≥ 1 亿美元的大额融资事件 · 横纵分析法',
  focus: true,
  focusIndex: 2,
};

function SlideCoverStrata(props){
  useDeckStyles(props.theme);
  const T = (deckTheme ? deckTheme(props.theme) : {});
  const ACC = T.accent || '#46e3c6';
  const BLUE = T.blue || '#4a86ff';

  const {
    kicker, year, titleLines, bands, bandCount, showLabels, showChip,
    footnote, focus, focusIndex,
  } = { ...defaultProps, ...props };

  const items = bands.slice(0, Math.max(3, Math.min(bandCount, bands.length)));
  const fIdx = Math.max(0, Math.min(focusIndex, items.length - 1));

  return (
    <div style={{position:'relative', width:'100%', height:'100%', overflow:'hidden'}}>
      {/* 横向层带 */}
      <div style={{position:'absolute', inset:0, display:'flex', flexDirection:'column'}}>
        {items.map((b,i)=>{
          const hot = focus && i===fIdx;
          return (
            <div key={i} className={`dk-anim d${Math.min(i+1,6)}`} style={{flex:1, position:'relative',
                borderTop: i? `1px solid ${hexA('#fff',.13)}`:'none',
                background: hot ? `linear-gradient(90deg, ${hexA(ACC,.12)}, ${hexA(ACC,0)} 58%)` : 'transparent'}}>
              {showLabels && (
                <div style={{position:'absolute', right:'var(--pad-x)', top:'50%', transform:'translateY(-50%)',
                      display:'flex', alignItems:'center', gap:20}}>
                  <span style={{fontFamily:'var(--font-cn)', fontWeight:hot?800:500, fontSize:'var(--type-body)', color: hot?'#fff':hexA('#fff',.46)}}>{b.t}</span>
                  <span style={{fontFamily:'var(--font-display)', fontWeight:900, fontSize:46, color: hot?ACC:hexA('#fff',.30), minWidth:64, textAlign:'right'}}>{b.no}</span>
                  {hot && <span style={{width:10, height:10, transform:'rotate(45deg)', background:ACC, boxShadow:`0 0 12px ${hexA(ACC,.8)}`}}></span>}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {showChip && <>
        <div className="dk-anim d2" style={{position:'absolute', width:96, height:96, left:742, top:122, zIndex:3}}>
          <div className="dk-glass-chip" style={{width:'100%', height:'100%', transform:'rotate(14deg)'}}></div>
        </div>
        <div className="dk-anim d3" style={{position:'absolute', width:52, height:52, left:880, top:230, zIndex:3}}>
          <div className="dk-glass-chip" style={{width:'100%', height:'100%', transform:'rotate(-12deg)'}}></div>
        </div>
      </>}

      {/* 叠印内容 */}
      <div style={{position:'absolute', inset:0, padding:'var(--pad-y) var(--pad-x)',
            display:'flex', flexDirection:'column', justifyContent:'space-between', zIndex:2}}>
        <div className="dk-anim" style={{display:'flex', alignItems:'center', gap:16}}>
          <span style={{width:12, height:12, transform:'rotate(45deg)', background:ACC, boxShadow:`0 0 16px ${hexA(ACC,.7)}`}}></span>
          <span style={{fontFamily:'var(--font-mono)', fontSize:'var(--type-tiny)', letterSpacing:'.30em', color:'var(--ink-dim)', textTransform:'uppercase'}}>{kicker}</span>
        </div>

        <div style={{display:'flex', alignItems:'center', gap:50}}>
          <div style={{position:'relative', display:'inline-flex'}}>
            <span className="dk-chrome dk-anim d2" style={{fontFamily:'var(--font-display)', fontWeight:900, fontSize:228, lineHeight:.82, letterSpacing:'-.02em'}}>{year}</span>
            {focus && <SelBox color={ACC} inset="-18px -16px" size={22} />}
          </div>
          <span className="dk-anim d2" style={{width:2, height:196, background:`linear-gradient(180deg, ${hexA('#fff',0)}, ${hexA('#fff',.32)}, ${hexA('#fff',0)})`}}></span>
          <h1 className="dk-chrome dk-anim d3" style={{fontFamily:'var(--font-cn)', fontWeight:900, fontSize:92, lineHeight:1.05, letterSpacing:'.01em', margin:0}}>
            {titleLines.map((t,i)=><div key={i}>{t}</div>)}
          </h1>
        </div>

        <div className="dk-anim d4" style={{fontFamily:'var(--font-cn)', fontWeight:400, fontSize:'var(--type-small)', color:'var(--ink-faint)', maxWidth:900}}>{footnote}</div>
      </div>
    </div>
  );

  function hexA(hex, a){
    if(!hex || hex[0] !== '#') return hex;
    const x = hex.slice(1); const f = x.length===3 ? x.split('').map(c=>c+c).join('') : x;
    return `rgba(${parseInt(f.slice(0,2),16)},${parseInt(f.slice(2,4),16)},${parseInt(f.slice(4,6),16)},${a})`;
  }
}

export default SlideCoverStrata;

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
export const slideSpec = { defaults: defaultProps, slot:'coverstrata', name:'封面E · 层叠光带', controls:[
  { prop:'bandCount', type:'slider', label:'层带数量', default:5, min:3, max:6, step:1 },
  { prop:'showLabels', type:'toggle', label:'篇章刻度', default:true, desc:'装饰' },
  { prop:'showChip', type:'toggle', label:'质感方块', default:true, desc:'玻璃芯片装饰' },
  { prop:'focus', type:'focus', label:'重点信息 Focus', default:true },
  { prop:'focusIndex', type:'slider', label:'焦点序号', default:2, min:0, max:(p)=>Math.max(0,p.bandCount-1), maxFromKey:'bandCount', maxFromKeyOffset:-1, displayOffset:1, step:1, showIf:(p)=>p.focus },
]};
