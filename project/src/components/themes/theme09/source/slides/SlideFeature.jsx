import { useDeckStyles, deckTheme, deckLabel, SlideShell } from './DeckKit.jsx';
import ImageStrip, { FillSlot } from './ImageStrip.jsx';
/* ============================================================================
   SlideFeature — 图说特写（编辑式分栏 · 大图 + 字幕条 + 编号图说列）
   独立组件：仅靠 props 控制内容与样式；render 时自注入 DeckKit 基座样式。
   图片依赖 ImageStrip.jsx：用户上传后按真实比例自适应；imgCount>1 时主图下补缩略行。
   与 Cases / Spotlight / Gallery / Team / Profile 刻意区分：本页为「一张主图领衔
   + 图底字幕条 + 右侧编号图说」的编辑式特写版式（图说与字幕联动）。

   ── 可调参数（Props） ──────────────────────────────────────────────────────
   | prop        | 类型                          | 默认值 | 说明                              |
   | imgCount    | number (1–4)                  | 1      | 图片槽数量（1=主图；>1 主图+缩略）|
   | imgSide     | 'left' | 'right'              | left   | 主图所在侧                        |
   | points      | {label,value,caption}[]       | 见下   | 编号图说数据源                    |
   | pointCount  | number (0–4)                  | 3      | 实际展示的图说条数（截取）        |
   | focus       | boolean                       | true   | 高亮某条图说并驱动图底字幕        |
   | focusIndex  | number (0-based)              | 0      | 高亮第几条                        |
   | labelType   | 'number'|'symbol'|'keyword'   | number | 图说编号样式                      |
   | showCaption | boolean                       | true   | 图底字幕条（装饰文案）            |
   | kicker/title/titleEN/paragraph : string  叙事文案（默认=典型案例特写）       |
   | badge       | string                        | '05'   | 顶部编号徽标                      |
   | theme       | Partial<DeckTheme>            | —      | 设计令牌覆盖                      |
   ========================================================================== */
/* ── 页面属性契约 · defaultProps ──────────────────────────────────────────
   本页全部可见文案 / 数据 / 图片槽默认值集中于此，直接编辑即可换内容；
   组件内部以 { ...defaultProps, ...props } 合并，外部传同名 props 逐项覆盖。 */
export const defaultProps = {
  imgCount: 1,
  imgSide: 'left',
  pointCount: 3,
  focus: true,
  focusIndex: 0,
  labelType: 'number',
  showCaption: true,
  badge: '05',
  kicker: 'IN FOCUS · 特写',
  title: 'Anthropic',
  titleEN: '从追赶者到反超者',
  paragraph: '以「可解释、可控」的安全路线切入，三轮密集融资把估值推上新台阶 —— 在头部大模型的竞速里，叙事与对齐能力同样是稀缺资产。',
  points: [
      { label:'累计融资', value:'650+ 亿$', caption:'2024 年内三轮密集关账，资本高速加注' },
      { label:'最新估值', value:'9650 亿$', caption:'跻身全球大模型第一梯队的估值水位' },
      { label:'核心标签', value:'安全对齐 · Claude', caption:'Constitutional AI 路线构筑差异化护城河' },
      { label:'战略支点', value:'云厂商深绑', caption:'获超大规模算力与渠道的长期承诺' },
    ],
};

function SlideFeature(props){
  useDeckStyles(props.theme);
  const T = (deckTheme ? deckTheme(props.theme) : {});
  const ACC = T.accent || '#46e3c6';
  const BLUE = T.blue || '#4a86ff';

  const {
    imgCount, imgSide, pointCount, focus, focusIndex, labelType, showCaption,
    badge, kicker, title, titleEN, paragraph, points,
  } = { ...defaultProps, ...props };

  const data = points.slice(0, Math.max(0, Math.min(pointCount, points.length)));
  const fIdx = Math.max(0, Math.min(focusIndex, Math.max(0, data.length - 1)));
  const nImg = Math.max(1, Math.min(imgCount, 4));
  const imageSide = imgSide === '右' || imgSide === 'right' ? 'right' : 'left';
  const lbl = (i)=> deckLabel(labelType, i, { keyword:'PT' });
  const cap = (focus && data[fIdx]) ? data[fIdx] : data[0];

  const imgPanel = (
    <div data-dashi-theme09-feature-image-panel="true" className="dk-anim d1" style={{flex:'1.32 1 0', minWidth:0, position:'relative', display:'flex',
          flexDirection:'column', gap:16}}>
      <div style={{position:'relative', flex:'1 1 0', minHeight:0, borderRadius:20, overflow:'hidden',
            boxShadow:'0 26px 60px rgba(3,8,30,.5)'}}>
        <FillSlot idPrefix="feature-main" idx={0} placeholder="主体特写 / hero shot" accent={ACC} radius={20} theme={props.theme} />
        {showCaption && cap && (
          <div style={{position:'absolute', left:18, right:18, bottom:18, display:'flex', alignItems:'center', gap:16,
                padding:'14px 20px', borderRadius:16, background:'rgba(5,11,34,.82)', border:`1px solid ${hexA('#fff',.12)}`,
                backdropFilter:'blur(8px)', WebkitBackdropFilter:'blur(8px)'}}>
            <span style={{flexShrink:0, width:40, height:40, borderRadius:11, display:'inline-flex', alignItems:'center',
                justifyContent:'center', fontFamily:'var(--font-display)', fontWeight:900, fontSize:18,
                background:ACC, color:T.navy900||'#050b22'}}>{lbl(fIdx)}</span>
            <p style={{fontSize:'var(--type-tiny)', lineHeight:1.4, color:'#fff', textWrap:'pretty', margin:0}}>{cap.caption}</p>
          </div>
        )}
      </div>
      {nImg > 1 && (
        <div style={{flexShrink:0, height:150, display:'grid', gridTemplateColumns:`repeat(${nImg-1}, 1fr)`, gap:16}}>
          {Array.from({length:nImg-1}).map((_,i)=>(
            <div key={i} style={{position:'relative', borderRadius:14, overflow:'hidden'}}>
              <FillSlot idPrefix="feature-thumb" idx={i} accent={ACC} radius={14} theme={props.theme}
                placeholder={['细节 / detail','场景 / scene','产品 / product'][i] || '图片 / image'} />
            </div>
          ))}
        </div>
      )}
    </div>
  );

  const textCol = (
    <div data-dashi-theme09-feature-text-col="true" style={{flex:'1 1 0', minWidth:0, display:'flex', flexDirection:'column', justifyContent:'center'}}>
      <div className="dk-anim" style={{display:'flex', alignItems:'center', gap:16, marginBottom:18}}>
        <span style={{fontFamily:'var(--font-display)', fontWeight:900, fontSize:'var(--type-sub)', color:ACC}}>{badge}</span>
        <span style={{fontFamily:'var(--font-mono)', fontSize:14, letterSpacing:'.2em', color:'var(--ink-dim)'}}>{kicker}</span>
      </div>
      <h2 className="dk-chrome dk-anim d1" style={{fontFamily:'var(--font-display)', fontWeight:900, fontSize:96,
          lineHeight:.96, letterSpacing:'.01em'}}>{title}</h2>
      <div className="dk-anim d2" style={{fontFamily:'var(--font-cn)', fontWeight:700, fontSize:'var(--type-sub)',
          color:'#fff', marginTop:12}}>{titleEN}</div>
      <p className="dk-anim d2" style={{marginTop:18, fontSize:'var(--type-body)', lineHeight:1.6, color:'var(--ink-dim)', textWrap:'pretty'}}>{paragraph}</p>

      {data.length > 0 && (
        <div style={{marginTop:30, display:'flex', flexDirection:'column', gap:12}}>
          {data.map((p,i)=>{
            const hot = focus && i===fIdx;
            return (
              <div key={i} className={'dk-anim d'+Math.min(i+3,6)} style={{display:'flex', alignItems:'center', gap:18,
                    padding:'16px 20px', borderRadius:14,
                    background: hot?hexA(ACC,.12):'rgba(255,255,255,.04)',
                    borderLeft:`4px solid ${hot?ACC:'rgba(255,255,255,.16)'}`}}>
                <span style={{flexShrink:0, width:38, height:38, borderRadius:10, display:'inline-flex', alignItems:'center',
                    justifyContent:'center', fontFamily:'var(--font-display)', fontWeight:900, fontSize:17,
                    color: hot?ACC:'var(--ink-dim)', background:'rgba(255,255,255,.06)',
                    border:`1px solid ${hot?ACC:'rgba(255,255,255,.18)'}`}}>{lbl(i)}</span>
                <span style={{fontFamily:'var(--font-cn)', fontWeight:700, fontSize:'var(--type-small)', color:'var(--ink-dim)', whiteSpace:'nowrap'}}>{p.label}</span>
                <span style={{marginLeft:'auto', fontFamily:'var(--font-display)', fontWeight:900, fontSize:'var(--type-sub)',
                    color: hot?'#fff':'rgba(255,255,255,.9)', whiteSpace:'nowrap'}}>{p.value}</span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );

  return (
    <SlideShell orbs={[{ w:520, h:520, right:-160, top:-150,
        color:`radial-gradient(circle at 50% 50%, ${hexA(BLUE,.2)}, ${hexA(BLUE,0)} 70%)` }]}>
      <div style={{flex:'1 1 0', minHeight:0, display:'flex', gap:48, alignItems:'stretch'}}>
        {imageSide==='left' ? <>{imgPanel}{textCol}</> : <>{textCol}{imgPanel}</>}
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

export default SlideFeature;

/* ── 模板参数 schema（自描述 · 迁移即带控件；Tweaks 由此自动生成） ── */
export const slideSpec = { defaults: defaultProps, slot:'feature', name:'图说特写 · Feature', controls:[
  { prop:'imgCount', type:'slider', label:'图片槽数量', default:1, min:1, max:4, step:1 },
  { prop:'imgSide', type:'radio', label:'图片位置', default:'左', options:['左','右'], map:(v)=>v==='右'?'right':'left' },
  { prop:'pointCount', type:'slider', label:'数量', default:3, min:0, max:4, step:1, desc:'图说条数' },
  { prop:'showCaption', type:'toggle', label:'装饰文案', default:true, desc:'图底字幕条' },
  { prop:'labelType', type:'labelType', label:'标签类型', default:'数字' },
  { prop:'focus', type:'focus', label:'重点信息 Focus', default:true },
  { prop:'focusIndex', type:'slider', label:'焦点序号', default:0, min:0, max:(p)=>Math.max(0,p.pointCount-1), maxFromKey:'pointCount', maxFromKeyOffset:-1, displayOffset:1, step:1, showIf:(p)=>p.focus && p.pointCount>0 },
]};
