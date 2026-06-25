import { useDeckStyles, deckTheme, SlideShell } from './DeckKit.jsx';
import ImageStrip from './ImageStrip.jsx';
/* ============================================================================
   SlideFilmstrip — 影像长卷（胶片条 · 上下齿孔带 + 等高画格 + 帧号说明带）
   独立组件：仅靠 props 控制内容与样式；render 时自注入 DeckKit 基座样式。
   图片依赖 ImageStrip.jsx：用户上传后按真实比例自适应（justified 等高）。
   与 Gallery（整洁单行 + 说明）、Mosaic（接触印相裁切角框）刻意区分：本页为「胶片
   长卷」气质 —— 上下齿孔带夹持一条等高画格，帧号 + 走带说明，电影感的影像陈列。

   ── 可调参数（Props） ──────────────────────────────────────────────────────
   | prop         | 类型                          | 默认值 | 说明                              |
   | imgCount     | number (0–6)                  | 5      | 图片槽数量（等高 justified）      |
   | maxH         | number                        | 520    | 画格最大高度                      |
   | showSprockets| boolean                       | true   | 上下齿孔带                        |
   | showCaption  | boolean                       | true   | 帧号 + 走带说明（装饰文案）       |
   | tags         | string[]                      | 见下   | 走带标签                          |
   | tagCount     | number (0–5)                  | 3      | 展示标签数（截取）                |
   | focus        | boolean                       | true   | 高亮胶片描边 + 某标签             |
   | focusIndex   | number (0-based)              | 0      | 高亮第几个标签                    |
   | kicker/title/titleEN/reel : string  文案（默认=年度影像走带）              |
   | theme        | Partial<DeckTheme>            | —      | 设计令牌覆盖                      |
   ========================================================================== */
/* ── 页面属性契约 · defaultProps ──────────────────────────────────────────
   本页全部可见文案 / 数据 / 图片槽默认值集中于此，直接编辑即可换内容；
   组件内部以 { ...defaultProps, ...props } 合并，外部传同名 props 逐项覆盖。 */
export const defaultProps = {
  imgCount: 5,
  maxH: 520,
  showSprockets: true,
  showCaption: true,
  tagCount: 3,
  focus: true,
  focusIndex: 0,
  kicker: 'REEL · 影像走带',
  title: '年度影像长卷',
  titleEN: 'The 2024 Reel',
  reel: 'REEL 2024 · 24 FPS · AI CAPITAL',
  tags: ['启动','加速','竞速','收束','回望'],
};

function SlideFilmstrip(props){
  useDeckStyles(props.theme);
  const T = (deckTheme ? deckTheme(props.theme) : {});
  const ACC = T.accent || '#46e3c6';
  const BLUE = T.blue || '#4a86ff';

  const {
    imgCount, maxH, showSprockets, showCaption, tagCount, focus, focusIndex,
    kicker, title, titleEN, reel, tags,
  } = { ...defaultProps, ...props };

  const n = Math.max(0, Math.min(imgCount, 6));
  const tg = tags.slice(0, Math.max(0, Math.min(tagCount, tags.length)));
  const fIdx = Math.max(0, Math.min(focusIndex, Math.max(0, tg.length - 1)));
  const sprockets = Array.from({length:22});
  const accentEdge = focus ? ACC : 'rgba(255,255,255,.16)';

  const Sprockets = ()=> (
    <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', padding:'0 14px', height:26, background:'#070e26'}}>
      {sprockets.map((_,i)=>(
        <span key={i} style={{width:20, height:13, borderRadius:3, background:'#13204a', border:'1px solid rgba(255,255,255,.06)'}}></span>
      ))}
    </div>
  );

  return (
    <SlideShell orbs={[{ w:560, h:560, left:-180, top:-160,
        color:`radial-gradient(circle at 50% 50%, ${hexA(BLUE,.2)}, ${hexA(BLUE,0)} 70%)` }]}>
      {/* 场记式标题 */}
      <div className="dk-anim" style={{flexShrink:0, display:'flex', alignItems:'flex-end', justifyContent:'space-between', gap:24}}>
        <div>
          <div style={{display:'flex', alignItems:'center', gap:14, marginBottom:10}}>
            {/* 场记板斜条 */}
            <span style={{display:'inline-flex', gap:0, borderRadius:5, overflow:'hidden', border:'1px solid rgba(255,255,255,.3)'}}>
              {[0,1,2,3,4,5].map(i=>(<span key={i} style={{width:14, height:22, background: i%2? '#fff':'#0b0b0f', transform:'skewX(-16deg)'}}></span>))}
            </span>
            <span style={{fontFamily:'var(--font-mono)', fontSize:14, letterSpacing:'.24em', color:ACC}}>{kicker}</span>
          </div>
          <h2 className="dk-chrome" style={{fontFamily:'var(--font-cn)', fontWeight:900, fontSize:80, lineHeight:1, letterSpacing:'.02em'}}>{title}</h2>
        </div>
        <div style={{textAlign:'right', flexShrink:0}}>
          <div style={{fontFamily:'var(--font-display)', fontWeight:700, fontSize:'var(--type-sub)', color:'var(--ink-dim)'}}>{titleEN}</div>
          <div style={{fontFamily:'var(--font-mono)', fontSize:13, letterSpacing:'.1em', color:'var(--ink-faint)', marginTop:6}}>{reel}</div>
        </div>
      </div>

      {/* 胶片长卷 */}
      <div className="dk-anim d1" style={{flex:'1 1 0', minHeight:0, marginTop:26, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
        <div style={{width:'100%', borderRadius:14, overflow:'hidden', background:'#0a1330',
              border:`2px solid ${accentEdge}`, boxShadow: focus?`0 26px 64px ${hexA(ACC,.22)}`:'0 26px 64px rgba(3,8,30,.5)'}}>
          {showSprockets && <Sprockets />}
          <div style={{padding:'16px 14px', background:'#0a1330'}}>
            {n === 0 ? (
              <div style={{height:240, display:'flex', alignItems:'center', justifyContent:'center', fontFamily:'var(--font-mono)', fontSize:'var(--type-small)', color:'var(--ink-faint)'}}>图片槽数量 0 · 调大以走带</div>
            ) : (
              ImageStrip && (
                <ImageStrip idPrefix="filmstrip" count={n} width={1620} maxH={maxH} gap={12} theme={props.theme}
                  placeholders={[
                    { ratio:1.5, label:'画格 / frame' }, { ratio:1.33, label:'画格 / frame' },
                    { ratio:1.62, label:'画格 / frame' }, { ratio:1.5, label:'画格 / frame' },
                    { ratio:1.33, label:'画格 / frame' }, { ratio:1.5, label:'画格 / frame' },
                  ]} />
              )
            )}
          </div>
          {showSprockets && <Sprockets />}
        </div>

        {/* 帧号 + 走带说明 */}
        {showCaption && (
          <div className="dk-anim d3" style={{width:'100%', marginTop:18, display:'flex', alignItems:'center', gap:18, flexWrap:'wrap'}}>
            <span style={{fontFamily:'var(--font-mono)', fontSize:13, letterSpacing:'.14em', color:ACC}}>
              {Array.from({length:Math.max(1,n)}).map((_,i)=>'F'+String(i+1).padStart(2,'0')).join(' · ')}
            </span>
            <span style={{height:14, width:1, background:'rgba(255,255,255,.2)'}}></span>
            <div style={{display:'flex', gap:10, flexWrap:'wrap'}}>
              {tg.map((t,i)=>{
                const hot = focus && i===fIdx;
                return (
                  <span key={i} style={{padding:'7px 16px', borderRadius:999, fontSize:'var(--type-tiny)', fontWeight:600,
                      color: hot?(T.navy900||'#050b22'):'#fff', background: hot?ACC:'rgba(255,255,255,.08)',
                      border:`1px solid ${hot?ACC:'rgba(255,255,255,.16)'}`}}>{t}</span>
                );
              })}
            </div>
            <span style={{marginLeft:'auto', fontFamily:'var(--font-mono)', fontSize:12, color:'rgba(255,255,255,.28)'}}>图片为示意 · 画格按比例自适应</span>
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

export default SlideFilmstrip;

/* ── 模板参数 schema（自描述 · 迁移即带控件；Tweaks 由此自动生成） ── */
export const slideSpec = { defaults: defaultProps, slot:'filmstrip', name:'影像长卷 · Filmstrip', controls:[
  { prop:'imgCount', type:'slider', label:'图片槽数量', default:5, min:0, max:6, step:1 },
  { prop:'tagCount', type:'slider', label:'数量', default:3, min:0, max:5, step:1, desc:'走带标签' },
  { prop:'showSprockets', type:'toggle', label:'齿孔带', default:true },
  { prop:'showCaption', type:'toggle', label:'装饰文案', default:true, desc:'帧号 + 标签' },
  { prop:'focus', type:'focus', label:'重点信息 Focus', default:true },
  { prop:'focusIndex', type:'slider', label:'焦点序号', default:0, min:0, max:(p)=>Math.max(0,p.tagCount-1), maxFromKey:'tagCount', maxFromKeyOffset:-1, displayOffset:1, step:1, showIf:(p)=>p.focus && p.tagCount>0 },
]};
