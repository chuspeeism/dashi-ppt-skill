import { useDeckStyles, deckTheme, SlideShell } from './DeckKit.jsx';
import ImageStrip from './ImageStrip.jsx';
/* ============================================================================
   SlideMosaic — 影像拼贴（接触印相式画墙 · 裁切角框 + 浮层标题 + 多排自适应）
   独立组件：仅靠 props 控制内容与样式；render 时自注入 DeckKit 基座样式。
   图片依赖 ImageStrip.jsx：用户上传后按真实比例自适应（justified）；数量 0–6。
   与 Gallery（整洁单行 + 说明 + 标签）刻意区分：本页为「接触印相 / 影像志」气质——
   裁切角框、竖向胶片标、可单/双排拼贴，无逐图说明，整体作视觉留白页。

   ── 可调参数（Props） ──────────────────────────────────────────────────────
   | prop      | 类型                          | 默认值 | 说明                              |
   | imgCount  | number (0–6)                  | 5      | 图片槽数量（justified 自适应比例）|
   | layout    | '单排' | '双排'                | '双排' | 拼贴排布（双排=上少下多）         |
   | maxH      | number                        | 760    | 拼贴可用最大高度                  |
   | showFrame | boolean                       | true   | 裁切角框 + 竖向胶片标             |
   | showMeta  | boolean                       | true   | 底部 mono 元信息 + 标签（装饰）   |
   | tags      | string[]                      | 见下   | 标签数据源                        |
   | tagCount  | number (0–6)                  | 4      | 实际展示的标签数（截取）          |
   | focus     | boolean                       | true   | 是否高亮某个标签 + 提亮角框       |
   | focusIndex| number (0-based)              | 0      | 高亮第几个标签                    |
   | kicker/title/titleEN/serial : string  文案（默认=代表企业影像）            |
   | theme     | Partial<DeckTheme>            | —      | 设计令牌覆盖                      |
   ========================================================================== */
/* ── 页面属性契约 · defaultProps ──────────────────────────────────────────
   本页全部可见文案 / 数据 / 图片槽默认值集中于此，直接编辑即可换内容；
   组件内部以 { ...defaultProps, ...props } 合并，外部传同名 props 逐项覆盖。 */
export const defaultProps = {
  imgCount: 5,
  layout: '双排',
  maxH: 540,
  showFrame: true,
  showMeta: true,
  tagCount: 4,
  focus: true,
  focusIndex: 0,
  kicker: 'CONTACT SHEET · 影像',
  title: '代表企业影像志',
  titleEN: 'Selected · 2024',
  serial: 'ROLL 024 · AI CAPITAL',
  tags: ['大模型','算力基础设施','垂直应用','工具与中间件','数据与标注','安全与对齐'],
};

function SlideMosaic(props){
  useDeckStyles(props.theme);
  const T = (deckTheme ? deckTheme(props.theme) : {});
  const ACC = T.accent || '#46e3c6';
  const BLUE = T.blue || '#4a86ff';

  const {
    imgCount, layout, maxH, showFrame, showMeta, tagCount, focus,
    focusIndex, kicker, title, titleEN, serial, tags,
  } = { ...defaultProps, ...props };

  const n = Math.max(0, Math.min(imgCount, 6));
  const tg = tags.slice(0, Math.max(0, Math.min(tagCount, tags.length)));
  const fIdx = Math.max(0, Math.min(focusIndex, Math.max(0, tg.length - 1)));
  const two = layout === '双排' && n >= 3;
  const topN = two ? Math.max(1, Math.floor(n/2)) : n;
  const botN = two ? n - topN : 0;

  const PH = [
    { ratio:1.5,  label:'影像 / image' },
    { ratio:0.78, label:'人物 / portrait' },
    { ratio:1.33, label:'产品 / product' },
    { ratio:1.62, label:'场景 / scene' },
    { ratio:1.0,  label:'团队 / team' },
    { ratio:1.4,  label:'实景 / office' },
  ];
  const cornerC = focus ? ACC : 'rgba(255,255,255,.4)';

  const Corner = ({pos})=> {
    const s = { position:'absolute', width:30, height:30, borderColor:cornerC, pointerEvents:'none' };
    const m = {
      tl:{ left:-3, top:-3, borderLeft:`2px solid ${cornerC}`, borderTop:`2px solid ${cornerC}` },
      tr:{ right:-3, top:-3, borderRight:`2px solid ${cornerC}`, borderTop:`2px solid ${cornerC}` },
      bl:{ left:-3, bottom:-3, borderLeft:`2px solid ${cornerC}`, borderBottom:`2px solid ${cornerC}` },
      br:{ right:-3, bottom:-3, borderRight:`2px solid ${cornerC}`, borderBottom:`2px solid ${cornerC}` },
    };
    return <span style={{...s, ...m[pos]}}></span>;
  };

  return (
    <SlideShell orbs={[{ w:560, h:560, left:-180, bottom:-200,
        color:`radial-gradient(circle at 50% 50%, ${hexA(BLUE,.22)}, ${hexA(BLUE,0)} 70%)` }]}>
      <div style={{flex:'1 1 0', minHeight:0, display:'flex', flexDirection:'column'}}>
        {/* 浮层标题板 */}
        <div className="dk-anim" style={{flexShrink:0, display:'flex', alignItems:'flex-end', justifyContent:'space-between', gap:24, marginBottom:24}}>
          <div>
            <div style={{fontFamily:'var(--font-mono)', fontSize:14, letterSpacing:'.24em', color:ACC, marginBottom:10}}>{kicker}</div>
            <h2 className="dk-chrome" style={{fontFamily:'var(--font-cn)', fontWeight:900, fontSize:84, lineHeight:1, letterSpacing:'.02em'}}>{title}</h2>
          </div>
          <div style={{textAlign:'right', flexShrink:0}}>
            <div style={{fontFamily:'var(--font-display)', fontWeight:700, fontSize:'var(--type-sub)', color:'var(--ink-dim)'}}>{titleEN}</div>
            <div style={{fontFamily:'var(--font-mono)', fontSize:13, letterSpacing:'.12em', color:'var(--ink-faint)', marginTop:6}}>{serial}</div>
          </div>
        </div>

        {/* 接触印相框 */}
        <div className="dk-anim d1" style={{flex:'1 1 0', minHeight:0, position:'relative', display:'flex',
              alignItems:'center', justifyContent:'center', padding: showFrame?'18px 36px':0, overflow:'hidden',
              border: showFrame?`1px solid ${hexA('#ffffff',.14)}`:'none', borderRadius:20,
              background: showFrame?'rgba(255,255,255,.02)':'transparent'}}>
          {showFrame && <><Corner pos="tl"/><Corner pos="tr"/><Corner pos="bl"/><Corner pos="br"/></>}
          {showFrame && (
            <span style={{position:'absolute', left:-2, top:'50%', transform:'translateY(-50%) rotate(180deg)',
                writingMode:'vertical-rl', fontFamily:'var(--font-mono)', fontSize:12, letterSpacing:'.3em',
                color:'var(--ink-faint)'}}>{serial}</span>
          )}

          {n === 0 ? (
            <div style={{fontFamily:'var(--font-mono)', fontSize:'var(--type-small)', color:'var(--ink-faint)'}}>图片槽数量 0 · 调大以拼贴影像</div>
          ) : (
            <div style={{width:'100%', display:'flex', flexDirection:'column', gap:18, justifyContent:'center'}}>
              {ImageStrip && (
                <ImageStrip idPrefix="mosaic-a" count={topN} width={1560}
                  maxH={two ? maxH*0.52 : maxH} theme={props.theme} placeholders={PH} />
              )}
              {two && botN > 0 && ImageStrip && (
                <ImageStrip idPrefix="mosaic-b" count={botN} width={1560}
                  maxH={maxH*0.42} theme={props.theme} placeholders={PH.slice().reverse()} />
              )}
            </div>
          )}
        </div>

        {/* 元信息 + 标签 */}
        {showMeta && (
          <div className="dk-anim d3" style={{flexShrink:0, marginTop:22, display:'flex', alignItems:'center', gap:18, flexWrap:'wrap'}}>
            <span style={{fontFamily:'var(--font-mono)', fontSize:13, letterSpacing:'.14em', color:'var(--ink-faint)'}}>FRAMES · {n}/6</span>
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
            <span style={{marginLeft:'auto', fontFamily:'var(--font-mono)', fontSize:12, color:'rgba(255,255,255,.28)'}}>图片为示意 · 槽位按比例自适应</span>
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

export default SlideMosaic;

/* ── 模板参数 schema（自描述 · 迁移即带控件；Tweaks 由此自动生成） ── */
export const slideSpec = { defaults: defaultProps, slot:'mosaic', name:'影像拼贴 · Mosaic', controls:[
  { prop:'imgCount', type:'slider', label:'图片槽数量', default:5, min:0, max:6, step:1 },
  { prop:'maxH', type:'slider', label:'拼贴最大高', default:540, min:360, max:640, step:20 },
  { prop:'layout', type:'radio', label:'排布', default:'双排', options:['单排','双排'] },
  { prop:'tagCount', type:'slider', label:'数量', default:4, min:0, max:6, step:1, desc:'标签数' },
  { prop:'showFrame', type:'toggle', label:'裁切角框', default:true },
  { prop:'showMeta', type:'toggle', label:'装饰文案', default:true, desc:'元信息 + 标签' },
  { prop:'focus', type:'focus', label:'重点信息 Focus', default:true },
  { prop:'focusIndex', type:'slider', label:'焦点序号', default:0, min:0, max:(p)=>Math.max(0,p.tagCount-1), maxFromKey:'tagCount', maxFromKeyOffset:-1, displayOffset:1, step:1, showIf:(p)=>p.focus && p.tagCount>0 },
]};
