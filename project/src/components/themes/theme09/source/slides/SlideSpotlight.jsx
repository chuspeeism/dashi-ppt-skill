import { useDeckStyles, deckTheme, SlideShell, SlideHead } from './DeckKit.jsx';
import ImageStrip from './ImageStrip.jsx';
/* ============================================================================
   SlideSpotlight — 专题洞察（叙事 + 自适应图片面板）
   独立组件：仅靠 props 控制内容与样式；render 时自注入 DeckKit 基座样式。
   非图表内容页 · 通用版式「图文专题」（图片槽按真实比例自适应，数量 0–n）。

   ── 可调参数（Props） ──────────────────────────────────────────────────────
   | prop        | 类型                          | 默认值 | 说明                          |
   | kicker      | string                        | 见下   | 小标签                        |
   | title       | string                        | 见下   | 主标题（金属字）              |
   | titleEN     | string                        | 见下   | 标题英文                      |
   | paragraphs  | string[]                      | 见下   | 叙事段落                      |
   | stats       | Stat[]                        | 见下   | 关键数字（数据条）            |
   | statCount   | number (0–3)                  | 3      | 展示的数字数                  |
   | focus       | boolean                       | true   | 是否高亮某个数字              |
   | focusIndex  | number (0-based)              | 0      | 高亮第几个数字                |
   | showAside   | boolean                       | true   | 是否显示底部数据条            |
   | imgCount    | number (0–4)                  | 2      | 图片槽数量（自适应比例）      |
   | imgSide     | 'left' | 'right'              | 'left' | 图片面板所在侧                |
   | head        | {no,en,cn}                    | 见下   | 页眉编号 / 英文 / 中文标题    |
   | theme       | Partial<DeckTheme>            | —      | 设计令牌覆盖                  |
   Stat = { value:string, unit:string, label:string }
   ========================================================================== */
/* ── 页面属性契约 · defaultProps ──────────────────────────────────────────
   本页全部可见文案 / 数据 / 图片槽默认值集中于此，直接编辑即可换内容；
   组件内部以 { ...defaultProps, ...props } 合并，外部传同名 props 逐项覆盖。 */
export const defaultProps = {
  kicker: '专题洞察',
  title: '算力，是这轮周期的硬通货',
  titleEN: 'Compute is the hard currency',
  paragraphs: [
      '当模型参数与训练规模演变为军备竞赛，谁锁定了算力，谁就锁定了入场券。',
      '2024 年，提前签下长期 GPU 供给的基础设施商，成为一级市场最稀缺、也最受追捧的标的——「卖铲子的人」率先赚到了确定性的钱。',
    ],
  stats: [
      { value:'110', unit:'亿美元', label:'头部算力云累计融资' },
      { value:'63.9', unit:'%',     label:'资金集中于旧金山湾区' },
      { value:'43.3', unit:'%',     label:'大模型赛道资金占比' },
    ],
  statCount: 3,
  focus: true,
  focusIndex: 0,
  showAside: true,
  imgCount: 2,
  imgSide: 'left',
  head: { no:'15', en:'Spotlight', cn:'专题洞察' },
};

function SlideSpotlight(props){
  useDeckStyles(props.theme);
  const T = (deckTheme ? deckTheme(props.theme) : {});
  const ACC = T.accent || '#46e3c6';

  const {
    kicker, title, titleEN, paragraphs, stats, statCount, focus,
    focusIndex, showAside, imgCount, imgSide, head,
  } = { ...defaultProps, ...props };

  const hasImg = imgCount > 0;
  const shownStats = stats.slice(0, Math.max(0, Math.min(statCount, stats.length)));
  const fIdx = Math.max(0, Math.min(focusIndex, Math.max(0, shownStats.length - 1)));
  const imageSide = imgSide === '右' || imgSide === 'right' ? 'right' : 'left';

  const imagePanel = hasImg ? (
    <div className="dk-anim d2" data-dashi-theme09-spotlight-image-panel="true" style={{minWidth:0, display:'flex', flexDirection:'column', justifyContent:'center'}}>
      {ImageStrip &&
        <ImageStrip idPrefix="spotlight" count={imgCount} width={720} maxH={640} gap={18}
          placeholders={[
            { ratio:0.8,  label:'专题主图 / hero' },
            { ratio:1.0,  label:'细节 / detail' },
            { ratio:1.33, label:'场景 / scene' },
            { ratio:0.78, label:'人物 / portrait' },
          ]} />}
    </div>
  ) : null;

  const textPanel = (
    <div data-dashi-theme09-spotlight-text-panel="true" style={{minWidth:0, display:'flex', flexDirection:'column', justifyContent:'center'}}>
      <span className="dk-anim d1" style={{fontFamily:'var(--font-mono)', fontSize:16, letterSpacing:'.18em',
          color:ACC, textTransform:'uppercase', marginBottom:18}}>{kicker}</span>
      <h3 className="dk-chrome dk-anim d1" style={{fontFamily:'var(--font-cn)', fontWeight:900,
          fontSize:'var(--type-h2)', lineHeight:1.1, letterSpacing:'.01em'}}>{title}</h3>
      <div className="dk-anim d2" style={{fontFamily:'var(--font-mono)', fontSize:16, letterSpacing:'.06em',
          color:'var(--ink-faint)', margin:'12px 0 26px'}}>{titleEN}</div>
      {paragraphs.map((p,i)=>(
        <p key={i} className={'dk-anim d'+Math.min(i+2,5)} style={{fontSize:'var(--type-body)', lineHeight:1.55,
            color: i===0 ? 'rgba(255,255,255,.92)' : 'var(--ink-dim)', textWrap:'pretty',
            fontWeight: i===0?600:400, marginBottom:16, maxWidth:820}}>{p}</p>
      ))}
    </div>
  );

  return (
    <SlideShell orbs={[{ w:520, h:520, right:-170, top:-160,
        color:'radial-gradient(circle at 50% 50%, rgba(90,150,255,.30), rgba(40,90,230,0) 70%)' }]}>
      <SlideHead no={head.no} en={head.en} cn={head.cn} badge={head.no} />

      <div style={{flex:'1 1 0', minHeight:0, display:'flex', flexDirection:'column', marginTop:24}}>
        <div style={{flex:'1 1 0', minHeight:0, display:'grid',
              gridTemplateColumns: hasImg ? '1fr 1fr' : '1fr', gap:64, alignItems:'center'}}>
          {hasImg && imageSide==='left' ? <>{imagePanel}{textPanel}</> : <>{textPanel}{hasImg && imagePanel}</>}
        </div>

        {/* 数据条 */}
        {showAside && shownStats.length>0 && (
          <div className="dk-anim d4" style={{marginTop:22, flexShrink:0, display:'grid',
                gridTemplateColumns:`repeat(${shownStats.length}, 1fr)`, gap:18}}>
            {shownStats.map((s,i)=>{
              const hot = focus && i===fIdx;
              return (
                <div key={i} className="dk-glass-dark" style={{borderRadius:18, padding:'20px 28px',
                    display:'flex', alignItems:'baseline', gap:14,
                    boxShadow: hot ? `0 0 0 2px ${ACC}, 0 22px 50px ${hexA(ACC,.2)}` : 'none'}}>
                  <span style={{fontFamily:'var(--font-display)', fontWeight:900, fontSize:56, lineHeight:.8,
                      color: hot?ACC:'#fff', textShadow: hot?`0 0 26px ${hexA(ACC,.5)}`:'none'}}>{s.value}</span>
                  <span style={{fontSize:'var(--type-small)', fontWeight:700, color: hot?ACC:'var(--ink-dim)'}}>{s.unit}</span>
                  <span style={{flex:1, textAlign:'right', fontSize:'var(--type-tiny)', lineHeight:1.35,
                      color:'var(--ink-dim)', textWrap:'pretty'}}>{s.label}</span>
                </div>
              );
            })}
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

export default SlideSpotlight;

/* ── 模板参数 schema（自描述 · 迁移即带控件；Tweaks 由此自动生成） ── */
export const slideSpec = { defaults: defaultProps, slot:'spotlight', name:'专题洞察 · Spotlight', controls:[
  { prop:'imgCount', type:'slider', label:'图片槽数量', default:2, min:0, max:4, step:1 },
  { prop:'imgSide', type:'radio', label:'图片位置', default:'left', options:[['left','左'],['right','右']], showIf:(p)=>p.imgCount>0 },
  { prop:'statCount', type:'slider', label:'数量', default:3, min:0, max:3, step:1, desc:'关键数字数' },
  { prop:'showAside', type:'toggle', label:'装饰文案', default:true },
  { prop:'focus', type:'focus', label:'重点信息 Focus', default:true },
  { prop:'focusIndex', type:'slider', label:'焦点序号', default:0, min:0, max:(p)=>p.statCount-1, maxFromKey:'statCount', maxFromKeyOffset:-1, displayOffset:1, step:1, showIf:(p)=>p.focus&&p.statCount>0 },
]};
