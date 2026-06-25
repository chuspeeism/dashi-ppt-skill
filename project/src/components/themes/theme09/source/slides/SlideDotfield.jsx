import { useDeckStyles, deckTheme, SlideHead } from './DeckKit.jsx';
/* ============================================================================
   SlideDotfield — 点阵计数（单元/isotype 图 · 巨号读数 · 极简低卡片）
   独立组件：仅靠 props 控制内容与样式；render 时自注入 DeckKit 基座样式。
   非卡片 · 把一个数量画成「一格一单位」的点阵：满阵 = 总量，点亮子集 = 焦点量，
   右侧落巨号读数 + 说明。比例靠数颗粒直观可感，而非条形/扇形。

   ── 区别于同类既有页 ──────────────────────────────────────────────────────
   全 deck 首个「单元/isotype 点阵」：以离散颗粒计数（97 颗里点亮某子集），
   与 Stat/Hero(单值大字)、Ribbon/Stacked(连续条形)、Cross(环饼) 在表达粒度上完全不同。

   ── 可调参数（Props） ──────────────────────────────────────────────────────
   | prop       | 类型                     | 默认 | 说明                          |
   | total      | number                   | 97   | 总单元数（满阵颗粒数）        |
   | active     | number                   | 42   | 点亮单元数（焦点子集）        |
   | columns    | number (8–16)            | 14   | 每行颗粒数                    |
   | dotShape   | '圆'|'方'|'菱'           | '圆' | 颗粒形状                      |
   | showLegend | boolean                  | true | 图例（点亮/未亮，装饰）       |
   | readout/caption/unit | …              | —    | 文案（默认=≥1亿事件中大模型占比）|
   ========================================================================== */
/* ── 页面属性契约 · defaultProps ──────────────────────────────────────────
   本页全部可见文案 / 数据 / 图片槽默认值集中于此，直接编辑即可换内容；
   组件内部以 { ...defaultProps, ...props } 合并，外部传同名 props 逐项覆盖。 */
export const defaultProps = {
  total: 97,
  active: 42,
  columns: 14,
  dotShape: '圆',
  showLegend: true,
  kicker: 'COUNTING · 一格一笔',
  readout: { value:'97', unit:'笔' },
  caption: '2024 年单笔 ≥ 1 亿美元的融资事件，\n其中点亮者为大模型与基础设施赛道。',
  legend: { on:'大模型 / 基础设施', off:'其他赛道' },
};

function SlideDotfield(props){
  useDeckStyles(props.theme);
  const T = (deckTheme ? deckTheme(props.theme) : {});
  const ACC = T.accent || '#46e3c6';
  const BLUE = T.blue || '#4a86ff';

  const {
    total, active, columns, dotShape, showLegend, kicker,
    readout, caption, legend,
  } = { ...defaultProps, ...props };

  const N = Math.max(1, Math.round(total));
  const on = Math.max(0, Math.min(Math.round(active), N));
  const cols = Math.max(8, Math.min(columns, 16));
  const rows = Math.ceil(N / cols);
  const dotGap = Math.max(5, Math.min(14, Math.floor(160 / Math.max(cols, rows))));
  const dotSize = Math.max(10, Math.floor(Math.min(
    44,
    (960 - dotGap * (cols - 1)) / cols,
    (640 - dotGap * (rows - 1)) / rows,
  )));
  const radius = dotShape==='圆' ? '50%' : dotShape==='菱' ? '6px' : '4px';
  const rot = dotShape==='菱' ? 'rotate(45deg)' : 'none';
  const pct = Math.round((on/N)*100);
  const readoutValue = String(readout?.value ?? '') === String(defaultProps.readout.value)
    ? String(N)
    : (readout?.value ?? String(N));

  return (
    <div style={{position:'relative', width:'100%', height:'100%', overflow:'hidden',
          padding:'var(--pad-y) var(--pad-x)', display:'flex', flexDirection:'column'}}>
      <div className="dk-orb" style={{width:520, height:520, left:-160, bottom:-160,
          background:`radial-gradient(circle at 50% 50%, ${hexA(ACC,.16)}, ${hexA(ACC,0)} 70%)`}}></div>

      <SlideHead no="计数" en="Unit Count" cn="把九十七笔，摆成一片" badge="◌" />

      <div style={{flex:'1 1 0', minHeight:0, display:'grid', gridTemplateColumns:'1.32fr .9fr',
            gap:80, alignItems:'center', marginTop:24}}>
        {/* 点阵 */}
        <div className="dk-anim d1" style={{display:'grid',
              gridTemplateColumns:`repeat(${cols}, ${dotSize}px)`, gridAutoRows:`${dotSize}px`,
              gap:dotGap, alignContent:'center', justifyContent:'center', justifySelf:'center',
              maxWidth:'100%', maxHeight:640, overflow:'hidden'}}>
          {Array.from({length:N}).map((_,i)=>{
            const lit = i < on;
            return (
              <div key={i} style={{width:'100%', height:'100%', borderRadius:radius, transform:rot,
                  background: lit
                    ? `radial-gradient(circle at 35% 30%, ${hexA('#fff',.9)}, ${ACC} 60%)`
                    : hexA('#fff',.07),
                  border: lit ? 'none' : `1px solid ${hexA('#fff',.14)}`,
                  boxShadow: lit ? `0 0 12px ${hexA(ACC,.55)}` : 'none'}}></div>
            );
          })}
        </div>

        {/* 读数 + 说明 */}
        <div className="dk-anim d2" style={{display:'flex', flexDirection:'column', gap:0}}>
          <span style={{fontFamily:'var(--font-mono)', fontSize:'var(--type-tiny)', letterSpacing:'.3em', color:ACC, marginBottom:18}}>{kicker}</span>
          <div style={{display:'flex', alignItems:'baseline', gap:14}}>
            <span className="dk-chrome" style={{fontFamily:'var(--font-display)', fontWeight:900,
                fontSize:240, lineHeight:.8, letterSpacing:'-.02em'}}>{readoutValue}</span>
            <span style={{fontFamily:'var(--font-cn)', fontWeight:700, fontSize:'var(--type-sub)', color:'#fff'}}>{readout.unit}</span>
          </div>
          <div style={{display:'flex', alignItems:'center', gap:14, margin:'18px 0 22px'}}>
            <span style={{height:3, width:56, background:ACC}}></span>
            <span style={{fontFamily:'var(--font-display)', fontWeight:900, fontSize:'var(--type-sub)', color:ACC}}>{pct}<span style={{fontSize:'.5em'}}>%</span> <span style={{fontSize:'.46em', color:'var(--ink-dim)', fontWeight:600}}>已点亮</span></span>
          </div>
          <p style={{whiteSpace:'pre-line', fontFamily:'var(--font-cn)', fontSize:'var(--type-body)',
              lineHeight:1.5, color:'var(--ink-dim)', textWrap:'pretty', maxWidth:520}}>{caption}</p>

          {showLegend && (
            <div style={{display:'flex', gap:34, marginTop:30}}>
              {[{c:ACC,t:legend.on,lit:true},{c:hexA('#fff',.1),t:legend.off,lit:false}].map((g,i)=>(
                <div key={i} style={{display:'flex', alignItems:'center', gap:12}}>
                  <span style={{width:18, height:18, borderRadius: dotShape==='圆'?'50%':'4px',
                      background:g.lit?`radial-gradient(circle at 35% 30%, #fff, ${ACC} 60%)`:g.c,
                      border:g.lit?'none':`1px solid ${hexA('#fff',.18)}`}}></span>
                  <span style={{fontFamily:'var(--font-cn)', fontSize:18, color:'var(--ink-dim)'}}>{g.t}</span>
                </div>
              ))}
            </div>
          )}
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

export default SlideDotfield;

/* ── 模板参数 schema（自描述 · 迁移即带控件；Tweaks 由此自动生成） ── */
export const slideSpec = { defaults: defaultProps, slot:'dotfield', name:'点阵计数 · Dotfield', controls:[
  { prop:'total', type:'slider', label:'总单元数', default:97, min:20, max:140, step:1 },
  { prop:'active', type:'slider', label:'点亮数量', default:42, min:0, max:(p)=>p.total, maxFromKey:'total', maxFromKeyOffset:0, step:1 },
  { prop:'columns', type:'slider', label:'每行数量', default:14, min:8, max:16, step:1 },
  { prop:'dotShape', type:'radio', label:'颗粒形状', default:'圆', options:['圆','方','菱'] },
  { prop:'showLegend', type:'toggle', label:'装饰文案', default:true, desc:'图例' },
]};
