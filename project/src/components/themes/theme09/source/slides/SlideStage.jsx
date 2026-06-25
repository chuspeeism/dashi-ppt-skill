import { useDeckStyles, deckTheme, deckLabel, SlideShell } from './DeckKit.jsx';
import ImageStrip from './ImageStrip.jsx';
/* ============================================================================
   SlideStage — 焦点舞台（聚光中央大图 · 光晕舞台 + 倒影 + 浮动标注片）
   独立组件：仅靠 props 控制内容与样式；render 时自注入 DeckKit 基座样式。
   图片依赖 ImageStrip.jsx：用户上传后按真实比例自适应；imgCount>1 时主图下补缩略行。
   与 Cases/Feature/Mosaic/Immersive/Gallery/Spotlight 刻意区分：本页把一张主体置于
   居中「聚光舞台」上（径向光晕 + 底部倒影），四周浮动若干标注片，作单点聚焦展示。

   ── 可调参数（Props） ──────────────────────────────────────────────────────
   | prop          | 类型                          | 默认值 | 说明                              |
   | imgCount      | number (1–3)                  | 1      | 图片槽数量（1=主图；>1 补缩略行） |
   | chips         | {label,value}[]               | 见下   | 浮动标注片数据源                  |
   | chipCount     | number (0–4)                  | 3      | 展示标注片数（截取）              |
   | showSpotlight | boolean                       | true   | 径向聚光 + 倒影（装饰）           |
   | focus         | boolean                       | true   | 高亮某个标注片                    |
   | focusIndex    | number (0-based)              | 0      | 高亮第几个                        |
   | labelType     | 'number'|'symbol'|'keyword'   | number | 标注片编号样式                    |
   | kicker/title/titleEN : string  文案（默认=年度焦点标的）                    |
   | badge         | string                        | '05'   | 顶部编号徽标                      |
   | theme         | Partial<DeckTheme>            | —      | 设计令牌覆盖                      |
   ========================================================================== */
/* ── 页面属性契约 · defaultProps ──────────────────────────────────────────
   本页全部可见文案 / 数据 / 图片槽默认值集中于此，直接编辑即可换内容；
   组件内部以 { ...defaultProps, ...props } 合并，外部传同名 props 逐项覆盖。 */
export const defaultProps = {
  imgCount: 1,
  chipCount: 3,
  showSpotlight: true,
  focus: true,
  focusIndex: 0,
  labelType: 'number',
  badge: '05',
  kicker: 'SPOTLIGHT · 年度焦点',
  title: '年度焦点标的',
  titleEN: 'Company of the Year',
  chips: [
      { label:'最新估值', value:'1570 亿$' },
      { label:'年内轮次', value:'2 轮加注' },
      { label:'赛道',     value:'大模型' },
      { label:'关键词',   value:'AGI 叙事' },
    ],
};

function SlideStage(props){
  useDeckStyles(props.theme);
  const T = (deckTheme ? deckTheme(props.theme) : {});
  const ACC = T.accent || '#46e3c6';
  const BLUE = T.blue || '#4a86ff';

  const {
    imgCount, chipCount, showSpotlight, focus, focusIndex, labelType, badge,
    kicker, title, titleEN, chips,
  } = { ...defaultProps, ...props };

  const nImg = Math.max(1, Math.min(imgCount, 3));
  const cs = chips.slice(0, Math.max(0, Math.min(chipCount, chips.length)));
  const fIdx = Math.max(0, Math.min(focusIndex, Math.max(0, cs.length - 1)));
  const lbl = (i)=> deckLabel(labelType, i, { keyword:'PT' });
  const hasThumbs = nImg > 1;
  const stageCoreHeight = hasThumbs ? (showSpotlight ? 732 : 668) : (showSpotlight ? 628 : 560);
  const mainImageHeight = hasThumbs ? 520 : 560;
  // 四角定位
  const POS = [
    { top:18,  left:0 }, { top:18,  right:0 }, { bottom:18, left:0 }, { bottom:18, right:0 },
  ];

  return (
    <SlideShell>
      {/* 顶部小标 */}
      <div className="dk-anim" style={{flexShrink:0, display:'flex', alignItems:'flex-end', justifyContent:'space-between', gap:24}}>
        <div>
          <div style={{display:'flex', alignItems:'center', gap:16, marginBottom:8}}>
            <span style={{fontFamily:'var(--font-display)', fontWeight:900, fontSize:'var(--type-sub)', color:ACC}}>{badge}</span>
            <span style={{fontFamily:'var(--font-mono)', fontSize:14, letterSpacing:'.2em', color:'var(--ink-dim)'}}>{kicker}</span>
          </div>
          <h2 className="dk-chrome" style={{fontFamily:'var(--font-cn)', fontWeight:900, fontSize:72, lineHeight:1, letterSpacing:'.02em'}}>{title}</h2>
        </div>
        <span style={{fontFamily:'var(--font-display)', fontWeight:700, fontSize:'var(--type-sub)', color:'var(--ink-dim)', flexShrink:0}}>{titleEN}</span>
      </div>

      {/* 舞台 */}
      <div style={{flex:'1 1 0', minHeight:0, position:'relative', display:'flex', alignItems:'center', justifyContent:'center', marginTop:18}}>
        {showSpotlight && (
          <div className="dk-orb" style={{width:900, height:900, left:'50%', top:'42%', transform:'translate(-50%,-50%)',
              background:`radial-gradient(circle at 50% 42%, ${hexA(ACC,.22)}, ${hexA(BLUE,.12)} 38%, rgba(40,90,230,0) 66%)`}}></div>
        )}

        {/* 中央主图 + 浮动片 */}
        <div className="dk-anim d1" style={{position:'relative', width:'min(1180px, 96%)', height:stageCoreHeight, display:'flex', flexDirection:'column', alignItems:'center', gap:16, zIndex:2}}>
          <div style={{position:'relative', width:'100%', height:mainImageHeight, display:'flex', justifyContent:'center', alignItems:'center'}}>
            {ImageStrip && (
              <ImageStrip idPrefix="stage-main" count={1} width={1000} maxH={mainImageHeight} theme={props.theme}
                placeholders={[{ ratio:1.6, label:'焦点主体 / hero subject' }]} />
            )}
            {/* 浮动标注片（四角） */}
            {cs.map((ch,i)=>{
              const hot = focus && i===fIdx;
              return (
                <div key={i} className={'dk-anim d'+Math.min(i+2,6)} style={{position:'absolute', ...POS[i % POS.length],
                      display:'flex', alignItems:'center', gap:12, padding:'12px 18px', borderRadius:14,
                      background:'linear-gradient(150deg, rgba(10,18,48,.82), rgba(6,12,34,.7))', backdropFilter:'blur(10px)',
                      border:`1px solid ${hot?ACC:'rgba(255,255,255,.2)'}`,
                      boxShadow: hot?`0 18px 44px ${hexA(ACC,.4)}, 0 0 0 1px ${hexA(ACC,.4)}`:'0 16px 40px rgba(3,8,30,.55)', zIndex:3}}>
                  <span style={{flexShrink:0, width:34, height:34, borderRadius:9, display:'inline-flex', alignItems:'center', justifyContent:'center',
                      fontFamily:'var(--font-display)', fontWeight:900, fontSize:15, color: hot?(T.navy900||'#050b22'):ACC,
                      background: hot?ACC:hexA(ACC,.14), border:`1px solid ${hexA(ACC,.5)}`}}>{lbl(i)}</span>
                  <div>
                    <div style={{fontSize:13, color:'var(--ink-dim)'}}>{ch.label}</div>
                    <div style={{fontFamily:'var(--font-display)', fontWeight:900, fontSize:'var(--type-small)', color:'#fff', whiteSpace:'nowrap'}}>{ch.value}</div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* 倒影 */}
          {showSpotlight && (
            <div style={{width:'62%', height:60, marginTop:-8, borderRadius:'50%',
                background:`radial-gradient(ellipse at 50% 0%, ${hexA(ACC,.3)}, rgba(40,90,230,0) 72%)`, filter:'blur(8px)'}}></div>
          )}

          {/* 缩略行 */}
          {hasThumbs && ImageStrip && (
            <div data-dashi-theme09-stage-thumbs="true" style={{position:'absolute', left:0, right:0, bottom:34, height:120, overflow:'hidden',
                display:'flex', justifyContent:'center', alignItems:'flex-start'}}>
              <ImageStrip idPrefix="stage-thumb" count={nImg-1} width={1000} maxH={120} theme={props.theme}
                placeholders={[{ ratio:1.5, label:'细节 / detail' }, { ratio:1.5, label:'场景 / scene' }]} />
            </div>
          )}
        </div>
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

export default SlideStage;

/* ── 模板参数 schema（自描述 · 迁移即带控件；Tweaks 由此自动生成） ── */
export const slideSpec = { defaults: defaultProps, slot:'stage', name:'焦点舞台 · Stage', controls:[
  { prop:'imgCount', type:'slider', label:'图片槽数量', default:1, min:1, max:3, step:1 },
  { prop:'chipCount', type:'slider', label:'数量', default:3, min:0, max:4, step:1, desc:'浮动标注片' },
  { prop:'showSpotlight', type:'toggle', label:'装饰元素', default:true, desc:'聚光 + 倒影' },
  { prop:'labelType', type:'labelType', label:'标签类型', default:'数字' },
  { prop:'focus', type:'focus', label:'重点信息 Focus', default:true },
  { prop:'focusIndex', type:'slider', label:'焦点序号', default:0, min:0, max:(p)=>Math.max(0,p.chipCount-1), maxFromKey:'chipCount', maxFromKeyOffset:-1, displayOffset:1, step:1, showIf:(p)=>p.focus && p.chipCount>0 },
]};
