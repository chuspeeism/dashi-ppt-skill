import { useDeckStyles, deckTheme, deckLabel, SlideShell, SlideHead } from './DeckKit.jsx';
/* ============================================================================
   SlideMatrix — 对比矩阵（多维表格 · 行列可裁 + 焦点行 + 高亮列 + 热力）
   独立组件：仅靠 props 控制内容与样式；render 时自注入 DeckKit 基座样式。

   ── 可调参数（Props） ──────────────────────────────────────────────────────
   | prop        | 类型                          | 默认值 | 说明                              |
   | rows        | Row[]                         | 见下   | 行数据源（每行一个对象）          |
   | columns     | Col[]                         | 见下   | 列定义（顺序即展示顺序）          |
   | rowCount    | number (2–6)                  | 6      | 实际展示的行数（截取）            |
   | colCount    | number (2–6)                  | 5      | 实际展示的列数（截取，不含名称列）|
   | focus       | boolean                       | true   | 是否高亮某一行                    |
   | focusIndex  | number (0-based)              | 0      | 高亮第几行                        |
   | highlightCol| number (-1 = 无)              | 0      | 高亮第几列（用 heat 着色）        |
   | heat        | boolean                       | true   | 是否按 heatKey 数值热力着色       |
   | labelType   | 'number'|'symbol'|'keyword'   | number | 行首徽标样式                      |
   | showAside   | boolean                       | true   | 是否显示「读表提示」装饰条        |
   | badge       | string                        | '08'   | 页眉编号徽标                      |
   | theme       | Partial<DeckTheme>            | —      | 设计令牌覆盖                      |
   Col = { key, label, unit?, heatKey?:bool }   // heatKey:true 的列参与热力着色
   Row = { name, en, [colKey]:value, heat:0–1 } // heat 控制热力强度
   ========================================================================== */
/* ── 页面属性契约 · defaultProps ──────────────────────────────────────────
   本页全部可见文案 / 数据 / 图片槽默认值集中于此，直接编辑即可换内容；
   组件内部以 { ...defaultProps, ...props } 合并，外部传同名 props 逐项覆盖。 */
export const defaultProps = {
  rowCount: 6,
  colCount: 5,
  focus: true,
  focusIndex: 0,
  highlightCol: 0,
  heat: true,
  labelType: 'number',
  showAside: true,
  badge: '08',
  columns: [
      { key:'value', label:'融资额',  unit:'亿$',  heatKey:true },
      { key:'valuation', label:'投后估值', unit:'亿$' },
      { key:'round', label:'最新轮次' },
      { key:'seg',   label:'赛道' },
      { key:'ps',    label:'P/S 倍数' },
      { key:'geo',   label:'总部' },
    ],
  rows: [
      { name:'OpenAI',     en:'Foundation', value:118, valuation:1570, round:'未披露', seg:'大模型',   ps:'40×', geo:'旧金山', heat:1.0 },
      { name:'Anthropic',  en:'Foundation', value:95,  valuation:600,  round:'D 轮+',  seg:'大模型',   ps:'35×', geo:'旧金山', heat:0.78 },
      { name:'xAI',        en:'Foundation', value:110, valuation:500,  round:'B 轮',   seg:'大模型',   ps:'—',   geo:'湾区',   heat:0.86 },
      { name:'Databricks', en:'Data + AI',  value:100, valuation:620,  round:'J 轮',   seg:'基础设施', ps:'28×', geo:'旧金山', heat:0.72 },
      { name:'Scale AI',   en:'Data Infra', value:38,  valuation:138,  round:'F 轮',   seg:'基础设施', ps:'22×', geo:'旧金山', heat:0.48 },
      { name:'Glean',      en:'Search',     value:26,  valuation:46,   round:'E 轮',   seg:'垂直应用', ps:'18×', geo:'帕洛阿尔托', heat:0.36 },
    ],
};

function SlideMatrix(props){
  useDeckStyles(props.theme);
  const T = (deckTheme ? deckTheme(props.theme) : {});
  const ACC = T.accent || '#46e3c6';

  const {
    rowCount, colCount, focus, focusIndex, highlightCol, heat, labelType,
    showAside, badge, columns, rows,
  } = { ...defaultProps, ...props };

  const cols = columns.slice(0, Math.max(2, Math.min(colCount, columns.length)));
  const data = rows.slice(0, Math.max(2, Math.min(rowCount, rows.length)));
  const fIdx = Math.max(0, Math.min(focusIndex, data.length - 1));
  const hCol = (highlightCol>=0 && highlightCol<cols.length) ? highlightCol : -1;

  const lbl = (i)=> deckLabel(labelType, i, { keyword:'CO' });
  // 名称列 + 数据列：grid 模板
  const gridCols = `minmax(280px, 1.5fr) ${cols.map(()=> '1fr').join(' ')}`;

  return (
    <SlideShell orbs={[{ w:500, h:500, left:-160, bottom:-170,
        color:`radial-gradient(circle at 50% 50%, ${hexA(ACC,.16)}, ${hexA(ACC,0)} 70%)` }]}>
      <SlideHead no={badge} en="Comparison Matrix" cn="估值对比矩阵 · 头部横评"
        badge={labelType==='keyword'?'GRID':labelType==='symbol'?'◆':badge} />

      <div style={{flex:'1 1 0', minHeight:0, display:'flex', flexDirection:'column', marginTop:26}}>
        <div data-dashi-theme09-matrix-highlight-col={hCol}
          className="dk-glass dk-anim d1" style={{flex:'1 1 0', minHeight:0, borderRadius:'var(--dk-radius)',
              padding:'10px 16px', display:'flex', flexDirection:'column', overflow:'hidden'}}>

          {/* 表头 */}
          <div style={{display:'grid', gridTemplateColumns:gridCols, alignItems:'center',
                padding:'14px 22px 14px', borderBottom:'1px solid rgba(255,255,255,.14)', flexShrink:0}}>
            <span style={{fontFamily:'var(--font-mono)', fontSize:15, letterSpacing:'.06em', color:'var(--ink-faint)'}}>公司 / Company</span>
            {cols.map((c,ci)=>(
              <span key={ci} style={{textAlign:'right', display:'flex', flexDirection:'column', alignItems:'flex-end',
                  color: ci===hCol?ACC:'var(--ink-dim)'}}>
                <span style={{fontSize:'var(--type-tiny)', fontWeight:700}}>{c.label}</span>
                {c.unit && <span style={{fontFamily:'var(--font-mono)', fontSize:13, color:'var(--ink-faint)'}}>{c.unit}</span>}
              </span>
            ))}
          </div>

          {/* 数据行 */}
          <div style={{flex:'1 1 0', minHeight:0, display:'flex', flexDirection:'column'}}>
            {data.map((r,i)=>{
              const hot = focus && i===fIdx;
              return (
                <div key={i} className={'dk-anim d'+Math.min(i+1,6)} style={{flex:'1 1 0', minHeight:0,
                      display:'grid', gridTemplateColumns:gridCols, alignItems:'center', gap:0,
                      padding:'0 22px', borderRadius:16,
                      background: hot ? `linear-gradient(150deg, ${hexA(ACC,.16)}, ${hexA(ACC,.04)})` : (i%2? 'rgba(255,255,255,.025)':'transparent'),
                      boxShadow: hot ? `inset 0 0 0 1.5px ${ACC}` : 'none'}}>
                  {/* 名称列 */}
                  <div style={{display:'flex', alignItems:'center', gap:16, minWidth:0}}>
                    <span style={{flexShrink:0, width:42, height:42, borderRadius:11, display:'inline-flex', alignItems:'center', justifyContent:'center',
                        fontFamily:'var(--font-mono)', fontSize:15, fontWeight:700,
                        background: hot?hexA(ACC,.2):'rgba(255,255,255,.07)',
                        border:`1px solid ${hot?ACC:'rgba(255,255,255,.16)'}`, color: hot?ACC:'var(--ink-dim)'}}>{lbl(i)}</span>
                    <div style={{minWidth:0}}>
                      <div style={{fontFamily:'var(--font-cn)', fontWeight:800, fontSize:'var(--type-small)',
                          color: hot?'#fff':'rgba(255,255,255,.92)', whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis'}}>{r.name}</div>
                      <div style={{fontFamily:'var(--font-mono)', fontSize:12, color:'var(--ink-faint)', marginTop:1}}>{r.en}</div>
                    </div>
                  </div>
                  {/* 数据列 */}
                  {cols.map((c,ci)=>{
                    const raw = r[c.key];
                    const useHeat = heat && (c.heatKey || ci===hCol);
                    const hv = typeof r.heat === 'number' ? r.heat : 0;
                    return (
                      <div key={ci} style={{textAlign:'right', padding:'0 4px'}}>
                        <span style={{
                          display:'inline-block', minWidth: useHeat? 78:'auto', textAlign:'center',
                          fontFamily: typeof raw==='number'?'var(--font-display)':'var(--font-cn)',
                          fontWeight: typeof raw==='number'?800:600,
                          fontSize: typeof raw==='number'?'var(--type-sub)':'var(--type-tiny)',
                          lineHeight:1.1,
                          padding: useHeat? '4px 12px':'0',
                          borderRadius: useHeat? 10:0,
                          color: useHeat ? '#06210f' : (ci===hCol ? ACC : '#fff'),
                          background: useHeat ? `rgba(70,227,198,${0.18 + hv*0.66})` : 'transparent',
                        }}>{raw}</span>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>

        {/* 读表提示 */}
        {showAside && (
          <div className="dk-glass-dark dk-anim d5" style={{marginTop:16, flexShrink:0, borderRadius:20, padding:'15px 30px',
                display:'flex', alignItems:'center', gap:24, flexWrap:'wrap'}}>
            <span style={{flexShrink:0, fontFamily:'var(--font-mono)', fontSize:14, letterSpacing:'.12em', color:ACC}}>读表提示</span>
            <div style={{display:'flex', alignItems:'center', gap:12}}>
              <span style={{width:54, height:14, borderRadius:5, background:'linear-gradient(90deg, rgba(70,227,198,.18), rgba(70,227,198,.84))'}}></span>
              <span style={{fontSize:'var(--type-tiny)', color:'var(--ink-dim)'}}>色块越亮 = 融资额越高</span>
            </div>
            <p style={{flex:'1 1 300px', fontSize:'var(--type-tiny)', lineHeight:1.5, color:'var(--ink-dim)', textWrap:'pretty', minWidth:0}}>
              估值与融资额并不完全同步 —— <b style={{color:'#fff'}}>P/S 倍数</b>普遍处于历史高位，
              多数头部公司的估值建立在「未来市值」而非当期收入之上。
            </p>
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

export default SlideMatrix;

/* ── 模板参数 schema（自描述 · 迁移即带控件；Tweaks 由此自动生成） ── */
export const slideSpec = { defaults: defaultProps, slot:'matrix', name:'对比矩阵 · Matrix', controls:[
  { prop:'rowCount', type:'slider', label:'行数量', default:6, min:2, max:6, step:1 },
  { prop:'colCount', type:'slider', label:'列数量', default:5, min:2, max:6, step:1 },
  { prop:'heat', type:'toggle', label:'热力着色', default:true },
  { prop:'highlightCol', type:'slider', label:'高亮列 (-1 关闭)', default:0, min:-1, max:(p)=>p.colCount-1, maxFromKey:'colCount', maxFromKeyOffset:-1, step:1 },
  { prop:'showAside', type:'toggle', label:'装饰文案', default:true },
  { prop:'labelType', type:'labelType', label:'标签类型', default:'数字' },
  { prop:'focus', type:'focus', label:'重点信息 Focus', default:true },
  { prop:'focusIndex', type:'slider', label:'焦点序号', default:0, min:0, max:(p)=>p.rowCount-1, maxFromKey:'rowCount', maxFromKeyOffset:-1, displayOffset:1, step:1, showIf:(p)=>p.focus },
]};
