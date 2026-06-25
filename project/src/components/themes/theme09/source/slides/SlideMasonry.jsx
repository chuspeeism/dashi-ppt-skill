import { useDeckStyles, deckTheme, deckLabel, SlideShell, SlideHead } from './DeckKit.jsx';
import { FillSlot } from './ImageStrip.jsx';
/* ============================================================================
   SlideMasonry — 瀑布影像（竖向多列瀑布流 · 错落参差）
   标准 ES Module。图片用 FillSlot（满版裁切，按各格设计高度铺满）。
   与 Gallery / Mosaic（横向 justified 单行）刻意区分：本页是 Pinterest 式「竖向
   瀑布」—— 多列等宽、各格高度参差，按槽位序号行优先摆放后整体缩放贴合版心，永不溢出。

   ── 可调参数（Props） ──────────────────────────────────────────────────────
   | prop        | 类型                          | 默认值 | 说明                              |
   | items       | {label,sub}[]                 | 见下   | 各格叠印图说数据源                |
   | imgCount    | number (3–8)                  | 6      | 图片槽数量                        |
   | columns     | number (2–4)                  | 3      | 列数量                            |
   | showCaption | boolean                       | true   | 叠印图说（装饰文案）              |
   | focus       | boolean                       | true   | 高亮某一格                        |
   | focusIndex  | number (0-based)              | 0      | 高亮第几格                        |
   | labelType   | 'number'|'symbol'|'keyword'   | number | 格角标样式                        |
   | head        | {no,en,cn}                    | 见下   | 页眉                              |
   | theme       | Partial<DeckTheme>            | —      | 设计令牌覆盖                      |
   ========================================================================== */
/* ── 页面属性契约 · defaultProps ──────────────────────────────────────────
   本页全部可见文案 / 数据 / 图片槽默认值集中于此，直接编辑即可换内容；
   组件内部以 { ...defaultProps, ...props } 合并，外部传同名 props 逐项覆盖。 */
export const defaultProps = {
  imgCount: 6,
  columns: 3,
  showCaption: true,
  focus: true,
  focusIndex: 0,
  labelType: 'number',
  head: { no:'10', en:'Masonry · Visual Wall', cn:'瀑布影像 · 群像墙' },
  items: [
      { label:'发布会', sub:'launch' },
      { label:'实验室', sub:'lab' },
      { label:'创始团队', sub:'founders' },
      { label:'数据中心', sub:'data center' },
      { label:'用户现场', sub:'on-site' },
      { label:'城市夜景', sub:'skyline' },
      { label:'路演', sub:'pitch' },
      { label:'签约', sub:'signing' },
    ],
};

function SlideMasonry(props){
  useDeckStyles(props.theme);
  const T = (deckTheme ? deckTheme(props.theme) : {});
  const ACC = T.accent || '#46e3c6';
  const BLUE = T.blue || '#4a86ff';
  const navy = T.navy900 || '#050b22';

  const {
    imgCount, columns, showCaption, focus, focusIndex, labelType, head,
    items,
  } = { ...defaultProps, ...props };

  const n = Math.max(3, Math.min(imgCount, 8));
  const cols = Math.max(2, Math.min(columns, 4));
  const data = items.slice(0, n);
  const fIdx = Math.max(0, Math.min(focusIndex, n - 1));
  const lbl = (i)=> deckLabel(labelType, i, { keyword:'NO' });

  const gap = 16, availH = 752;
  const rowCount = Math.ceil(n / cols);
  const rowH = rowCount === 1
    ? Math.min(520, availH)
    : Math.floor((availH - gap*(rowCount-1)) / rowCount);

  return (
    <SlideShell orbs={[{ w:500, h:500, left:-150, bottom:-170,
        color:`radial-gradient(circle at 50% 50%, ${hexA(BLUE,.18)}, ${hexA(BLUE,0)} 70%)` }]}>
      <SlideHead no={head.no} en={head.en} cn={head.cn} badge={head.no} />

      <div
        className="dk-anim d1"
        data-dashi-theme09-masonry-grid="true"
        style={{flex:'1 1 0', minHeight:0, height:availH, marginTop:22, display:'grid', gridTemplateColumns:`repeat(${cols}, minmax(0, 1fr))`,
          gridAutoRows:rowH, gap, alignItems:'stretch', alignContent:'center'}}
      >
        {data.map((it,i)=>{
          const hot = focus && i===fIdx;
          return (
            <div
              key={i}
              data-dashi-theme09-masonry-slot={i}
              data-dashi-theme09-masonry-col={i % cols}
              data-dashi-theme09-masonry-row={Math.floor(i / cols)}
              style={{position:'relative', width:'100%', height:'100%', minHeight:0, borderRadius:16, overflow:'hidden',
                    boxShadow: hot ? `0 0 0 3px ${ACC}, 0 26px 60px ${hexA(ACC,.3)}`
                                   : '0 18px 44px rgba(3,8,30,.5), inset 0 0 0 1px rgba(255,255,255,.1)'}}
            >
              <FillSlot idPrefix="masonry" idx={i} placeholder={(it.label||'图片')+' / '+(i+1)} accent={ACC} radius={16} theme={props.theme} />
              <span style={{position:'absolute', top:11, left:11, zIndex:4, minWidth:34, height:34, padding:'0 8px', borderRadius:9,
                  display:'inline-flex', alignItems:'center', justifyContent:'center', fontFamily:'var(--font-display)', fontWeight:900,
                  fontSize:15, color: hot?navy:'#fff', background: hot?ACC:'rgba(5,11,34,.55)',
                  border:`1px solid ${hot?ACC:'rgba(255,255,255,.3)'}`, backdropFilter:'blur(4px)', pointerEvents:'none'}}>{lbl(i)}</span>
              {showCaption && (
                <div style={{position:'absolute', left:0, right:0, bottom:0, zIndex:3, pointerEvents:'none', padding:'30px 14px 12px',
                    background:'linear-gradient(0deg, rgba(3,7,24,.82) 0%, rgba(3,7,24,.3) 60%, rgba(3,7,24,0) 100%)'}}>
                  <div style={{fontFamily:'var(--font-cn)', fontWeight:900, fontSize:'var(--type-small)', color: hot?ACC:'#fff', lineHeight:1.1}}>{it.label}</div>
                  <div style={{fontFamily:'var(--font-mono)', fontSize:12, letterSpacing:'.06em', color:'var(--ink-dim)', marginTop:2}}>{it.sub}</div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </SlideShell>
  );

  function hexA(hex, a){
    if(!hex || hex[0] !== '#') return hex;
    const x = hex.slice(1); const f = x.length===3 ? x.split('').map(c=>c+c).join('') : x;
    return `rgba(${parseInt(f.slice(0,2),16)},${parseInt(f.slice(2,4),16)},${parseInt(f.slice(4,6),16)},${a})`;
  }
}

export default SlideMasonry;

/* ── 模板参数 schema（自描述 · 迁移即带控件；Tweaks 由此自动生成） ── */
export const slideSpec = { defaults: defaultProps, slot:'masonry', name:'瀑布影像 · Masonry', controls:[
  { prop:'imgCount', type:'slider', label:'图片槽数量', default:6, min:3, max:8, step:1 },
  { prop:'columns', type:'slider', label:'列数量', default:3, min:2, max:4, step:1 },
  { prop:'showCaption', type:'toggle', label:'装饰文案', default:true, desc:'叠印图说' },
  { prop:'labelType', type:'labelType', label:'标签类型', default:'数字' },
  { prop:'focus', type:'focus', label:'重点信息 Focus', default:true },
  { prop:'focusIndex', type:'slider', label:'焦点序号', default:0, min:0, max:(p)=>p.imgCount-1, maxFromKey:'imgCount', maxFromKeyOffset:-1, displayOffset:1, step:1, showIf:(p)=>p.focus },
]};
