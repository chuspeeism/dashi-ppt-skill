import { useDeckStyles, deckTheme, SlideShell } from './DeckKit.jsx';
import ImageStrip, { FillSlot } from './ImageStrip.jsx';
/* ============================================================================
   SlideTestimonial — 人物证言（肖像 + 大引言 · 署名卡 + 资历标签）
   独立组件：仅靠 props 控制内容与样式；render 时自注入 DeckKit 基座样式。
   肖像依赖 ImageStrip.jsx：用户上传后按真实比例自适应（居中于框内）。
   与 Quote（多引述墙 + 立场分布）、Manifesto（无图居中大字）刻意区分：本页为「单人
   证言」——一侧肖像、一侧大引言 + 署名卡 + 资历标签，强调来源可信度。

   ── 可调参数（Props） ──────────────────────────────────────────────────────
   | prop       | 类型                          | 默认值 | 说明                              |
   | imgSide    | 'left' | 'right'              | left   | 肖像所在侧                        |
   | quote      | string                        | 见下   | 引言正文                          |
   | name/role/org : string  署名 / 角色 / 机构                                 |
   | creds      | string[]                      | 见下   | 资历标签数据源                    |
   | credCount  | number (0–3)                  | 3      | 展示资历标签数（截取）            |
   | showMark   | boolean                       | true   | 大引号装饰                        |
   | focus      | boolean                       | true   | 强调（引言关键句上色 + 肖像描边） |
   | badge      | string                        | '09'   | 顶部编号徽标                      |
   | kicker     | string                        | 见下   | 顶部小标                          |
   | theme      | Partial<DeckTheme>            | —      | 设计令牌覆盖                      |
   ========================================================================== */
/* ── 页面属性契约 · defaultProps ──────────────────────────────────────────
   本页全部可见文案 / 数据 / 图片槽默认值集中于此，直接编辑即可换内容；
   组件内部以 { ...defaultProps, ...props } 合并，外部传同名 props 逐项覆盖。 */
export const defaultProps = {
  imgSide: 'left',
  quote: '真正稀缺的不是模型，而是能把模型嵌进工作流、拿到续约的垂直应用 —— 卖铲子的人最先赚钱，而修路的人走得最远。',
  name: '某产业基金',
  role: '企业服务 合伙人',
  org: 'Enterprise Fund',
  credCount: 3,
  mediaFit: '原始比例',
  showMark: true,
  focus: true,
  badge: '09',
  kicker: 'TESTIMONIAL · 证言',
  creds: ['深度参与 12 笔大额轮次', '专注企业级 AI 落地', '管理规模 30 亿美元+'],
};

function SlideTestimonial(props){
  useDeckStyles(props.theme);
  const T = (deckTheme ? deckTheme(props.theme) : {});
  const ACC = T.accent || '#46e3c6';
  const BLUE = T.blue || '#4a86ff';
  const navy = T.navy900 || '#050b22';

  const {
    imgSide, quote, name, role, org, credCount, mediaFit, showMark,
    focus, badge, kicker, creds,
  } = { ...defaultProps, ...props };

  const cd = creds.slice(0, Math.max(0, Math.min(credCount, creds.length)));
  const imageSide = imgSide === '右' || imgSide === 'right' ? 'right' : 'left';
  const fillMode = mediaFit === '自适应' || mediaFit === 'cover';

  const portrait = (
    <div className="dk-anim d1" data-dashi-theme09-testimonial-portrait="true" data-dashi-theme09-testimonial-media-fit={fillMode?'cover':'ratio'} style={{flex:'0 0 38%', minWidth:0, position:'relative', borderRadius:'var(--dk-radius)', overflow:'hidden',
          display:'flex', alignItems:'center', justifyContent:'center',
          boxShadow: focus?`0 28px 64px ${hexA(ACC,.26)}, 0 0 0 2px ${hexA(ACC,.7)}`:'0 24px 56px rgba(3,8,30,.5)'}}>
      {fillMode && FillSlot ? (
        <FillSlot idPrefix="testimonial" idx={0} placeholder="人物肖像 / portrait" accent={ACC} radius="var(--dk-radius)" theme={props.theme} />
      ) : ImageStrip && (
        <ImageStrip idPrefix="testimonial" count={1} width={680} maxH={780} theme={props.theme}
          placeholders={[{ ratio:0.8, label:'人物肖像 / portrait' }]} />
      )}
    </div>
  );

  const body = (
    <div data-dashi-theme09-testimonial-body="true" style={{flex:'1 1 0', minWidth:0, display:'flex', flexDirection:'column', justifyContent:'center'}}>
      <div className="dk-anim" style={{display:'flex', alignItems:'center', gap:16, marginBottom:20}}>
        <span style={{fontFamily:'var(--font-display)', fontWeight:900, fontSize:'var(--type-sub)', color:ACC}}>{badge}</span>
        <span style={{height:2, width:64, background:ACC}}></span>
        <span style={{fontFamily:'var(--font-mono)', fontSize:14, letterSpacing:'.2em', color:'var(--ink-dim)'}}>{kicker}</span>
      </div>

      <div style={{position:'relative'}}>
        {showMark && (
          <span aria-hidden="true" style={{position:'absolute', top:-86, left:-12, fontFamily:'Archivo, serif', fontWeight:900,
              fontSize:200, lineHeight:1, color:hexA(ACC,.16), pointerEvents:'none'}}>“</span>
        )}
        <p className="dk-anim d2" style={{position:'relative', fontFamily:'var(--font-cn)', fontWeight:800, fontSize:50, lineHeight:1.42,
            color:'#fff', textWrap:'pretty', margin:0}}>{quote}</p>
      </div>

      {/* 署名卡 */}
      <div className="dk-anim d3" style={{marginTop:36, display:'flex', alignItems:'center', gap:18}}>
        <span style={{width:58, height:58, borderRadius:15, flexShrink:0, display:'inline-flex', alignItems:'center', justifyContent:'center',
            fontFamily:'var(--font-display)', fontWeight:900, fontSize:24, background:hexA(ACC,.16), border:`1.5px solid ${ACC}`, color:ACC}}>◆</span>
        <div>
          <div style={{fontFamily:'var(--font-cn)', fontWeight:900, fontSize:'var(--type-sub)', color:'#fff'}}>{name}</div>
          <div style={{fontSize:'var(--type-tiny)', color:'var(--ink-dim)', marginTop:3}}>{role} · {org}</div>
        </div>
      </div>

      {/* 资历标签 */}
      {cd.length > 0 && (
        <div className="dk-anim d4" style={{marginTop:26, display:'flex', flexDirection:'column', gap:10}}>
          {cd.map((c,i)=>(
            <div key={i} style={{display:'flex', alignItems:'center', gap:12, fontSize:'var(--type-tiny)', color:'rgba(255,255,255,.85)'}}>
              <span style={{width:8, height:8, borderRadius:'50%', background:ACC, flexShrink:0}}></span>{c}
            </div>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <SlideShell orbs={[{ w:520, h:520, right:-160, bottom:-180,
        color:`radial-gradient(circle at 50% 50%, ${hexA(BLUE,.18)}, ${hexA(BLUE,0)} 70%)` }]}>
      <div style={{flex:'1 1 0', minHeight:0, display:'flex', gap:54, alignItems:'stretch'}}>
        {imageSide==='left' ? <>{portrait}{body}</> : <>{body}{portrait}</>}
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

export default SlideTestimonial;

/* ── 模板参数 schema（自描述 · 迁移即带控件；Tweaks 由此自动生成） ── */
export const slideSpec = { defaults: defaultProps, slot:'testimonial', name:'人物证言 · Testimonial', controls:[
  { prop:'imgSide', type:'radio', label:'图片位置', default:'左', options:['左','右'], map:(v)=>v==='右'?'right':'left' },
  { prop:'credCount', type:'slider', label:'富文本数量', default:3, min:0, max:3, step:1, desc:'资历标签数' },
  { prop:'mediaFit', type:'radio', label:'媒体填充类型', default:'原始比例', options:['原始比例','自适应'] },
  { prop:'showMark', type:'toggle', label:'引号装饰', default:true },
  { prop:'focus', type:'focus', label:'描边高亮', default:true },
]};
