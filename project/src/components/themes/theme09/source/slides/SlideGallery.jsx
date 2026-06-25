import { useDeckStyles, deckTheme, SlideShell } from './DeckKit.jsx';
import ImageStrip from './ImageStrip.jsx';
/* ============================================================================
   作品集模板组 · Showcase / SlideGallery — 作品陈列（自适应图片画廊）
   独立组件：仅靠 props 控制内容与样式；render 时自注入 DeckKit 基座样式。
   图片槽按上传图片真实比例自适应（justified），数量 0–6，任意数量构图均齐整。

   ── 可调参数（Props） ──────────────────────────────────────────────────────
   | prop        | 类型              | 默认值        | 说明                              |
   | kicker      | string            | 'Selected Works' | 小标签                         |
   | title       | string            | '精选作品陈列'| 主标题                            |
   | titleEN     | string            | 'Project Showcase' | 标题英文                     |
   | caption     | string            | 见下          | 说明文字                          |
   | imgCount    | number (0–6)      | 3             | 图片槽数量（比例自适应）          |
   | maxH        | number            | 560           | 画廊单行最大高度                  |
   | tags        | string[]          | 见下          | 标签                              |
   | tagCount    | number (0–6)      | 4             | 展示的标签数                      |
   | showMeta    | boolean           | true          | 是否显示说明 + 标签               |
   | focus       | boolean           | true          | 是否高亮某个标签                  |
   | focusIndex  | number (0-based)  | 0             | 高亮第几个标签                    |
   | theme       | Partial<DeckTheme>| —             | 设计令牌覆盖                      |
   ========================================================================== */
/* ── 页面属性契约 · defaultProps ──────────────────────────────────────────
   本页全部可见文案 / 数据 / 图片槽默认值集中于此，直接编辑即可换内容；
   组件内部以 { ...defaultProps, ...props } 合并，外部传同名 props 逐项覆盖。 */
export const defaultProps = {
  kicker: 'Featured Companies',
  title: '代表企业掠影',
  titleEN: 'Company Gallery',
  caption: '拖入代表性 AI 公司的产品、团队或场景图片，画廊按图片真实比例自适应排布——任意数量都保持齐整美观的构图。',
  imgCount: 3,
  maxH: 560,
  tags: ['大模型','算力基础设施','垂直应用','数据层','工具链','退出案例'],
  tagCount: 4,
  showMeta: true,
  focus: true,
  focusIndex: 0,
};

function SlideGallery(props){
  useDeckStyles(props.theme);
  const T = (deckTheme ? deckTheme(props.theme) : {});
  const ACC = T.accent || '#46e3c6';

  const {
    kicker, title, titleEN, caption, imgCount, maxH, tags,
    tagCount, showMeta, focus, focusIndex,
  } = { ...defaultProps, ...props };

  const tgs = tags.slice(0, Math.max(0, Math.min(tagCount, tags.length)));
  const fIdx = Math.max(0, Math.min(focusIndex, Math.max(0, tgs.length - 1)));

  return (
    <SlideShell orbs={[{ w:520, h:520, right:-160, top:-150,
        color:'radial-gradient(circle at 50% 50%, rgba(120,170,255,.30), rgba(40,90,230,0) 70%)' }]}>
      {/* 标题行 */}
      <div className="dk-anim" style={{flexShrink:0, display:'flex', justifyContent:'space-between', alignItems:'flex-end', gap:30, zIndex:2}}>
        <div>
          <span style={{fontFamily:'var(--font-mono)', fontSize:'var(--type-small)', letterSpacing:'.18em', color:ACC, textTransform:'uppercase'}}>{kicker}</span>
          <h2 className="dk-chrome" style={{fontFamily:'var(--font-cn)', fontWeight:900, fontSize:'var(--type-h2)', lineHeight:1.04, marginTop:10}}>{title}</h2>
        </div>
        <span style={{fontFamily:'var(--font-display)', fontWeight:600, fontSize:'var(--type-sub)', color:'var(--ink-faint)', whiteSpace:'nowrap'}}>{titleEN}</span>
      </div>

      {/* 画廊 */}
      <div className="dk-anim d1" style={{flex:'1 1 0', minHeight:0, margin:'30px 0', display:'flex',
            alignItems:'center', justifyContent:'center', zIndex:2}}>
        {imgCount>0 && ImageStrip ? (
          <ImageStrip idPrefix="gallery" count={imgCount} width={1700} maxH={maxH} gap={22}
            placeholders={[
              { ratio:1.5,  label:'企业 / landscape' },
              { ratio:0.74, label:'人物 / portrait' },
              { ratio:1.0,  label:'产品 / square' },
              { ratio:1.33, label:'场景 / wide' },
              { ratio:0.8,  label:'海报 / poster' },
              { ratio:1.62, label:'实景 / banner' },
            ]} />
        ) : (
          <div style={{padding:'60px 90px', borderRadius:'var(--dk-radius)', border:'1px dashed rgba(255,255,255,.22)',
              color:'var(--ink-faint)', fontFamily:'var(--font-mono)', fontSize:'var(--type-small)', textAlign:'center'}}>
            图片槽数量为 0 · 在 Tweaks 中调高「图片槽数量」以展示企业图集
          </div>
        )}
      </div>

      {/* 说明 + 标签 */}
      {showMeta && (
        <div className="dk-anim d2" style={{flexShrink:0, display:'flex', justifyContent:'space-between', alignItems:'center', gap:30, zIndex:2}}>
          <p style={{maxWidth:880, fontSize:'var(--type-small)', lineHeight:1.5, color:'var(--ink-dim)', textWrap:'pretty'}}>{caption}</p>
          {tgs.length>0 && (
            <div style={{display:'flex', gap:10, flexWrap:'wrap', justifyContent:'flex-end'}}>
              {tgs.map((tg,i)=>{
                const hot = focus && i===fIdx;
                return (
                  <span key={i} style={{padding:'9px 20px', borderRadius:999, fontFamily:'var(--font-cn)', fontWeight:700,
                      fontSize:'var(--type-tiny)', whiteSpace:'nowrap',
                      color: hot?'#04121a':'rgba(255,255,255,.86)',
                      background: hot?ACC:'rgba(255,255,255,.05)',
                      border:`1px solid ${hot?ACC:'rgba(255,255,255,.14)'}`}}>{tg}</span>
                );
              })}
            </div>
          )}
        </div>
      )}
    </SlideShell>
  );
}

export default SlideGallery;

/* ── 模板参数 schema（自描述 · 迁移即带控件；Tweaks 由此自动生成） ── */
export const slideSpec = { defaults: defaultProps, slot:'pf-gallery', name:'企业掠影 · Gallery', controls:[
  { prop:'imgCount', type:'slider', label:'图片槽数量', default:3, min:0, max:6, step:1 },
  { prop:'tagCount', type:'slider', label:'标签数量', default:4, min:0, max:6, step:1 },
  { prop:'showMeta', type:'toggle', label:'说明与标签', default:true },
  { prop:'focus', type:'focus', label:'重点信息 Focus', default:true },
  { prop:'focusIndex', type:'slider', label:'焦点序号', default:0, min:0, max:(p)=>p.tagCount-1, maxFromKey:'tagCount', maxFromKeyOffset:-1, displayOffset:1, step:1, showIf:(p)=>p.focus&&p.tagCount>0 },
]};
