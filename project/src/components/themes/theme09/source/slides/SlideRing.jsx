/* ============================================================================
   SlideRing — 圆窗影像（圆形画窗一字/弧形排列 + 标签）
   标准 ES Module。图片用 FillSlot（满版裁切，圆形画窗内铺满，radius='50%'）。
   与 Team（圆角矩形肖像网格）、Gallery（矩形 justified）刻意区分：少量大「圆窗」
   一字或弧形排开、图大字精，像勋章/徽记式的影像陈列。

   ── 可调参数（Props） ──────────────────────────────────────────────────────
   | prop       | 类型                          | 默认值 | 说明                              |
   | items      | {label,sub}[]                 | 见下   | 各圆窗的标签数据源                |
   | imgCount   | number (1–5)                  | 4      | 图片槽数量（圆窗数）              |
   | arc        | boolean                       | true   | 弧形排列（错落）/ 关则一字平排    |
   | focus      | boolean                       | true   | 高亮某个圆窗（放大 + 描边）       |
   | focusIndex | number (0-based)              | 0      | 高亮第几个                        |
   | labelType  | 'number'|'symbol'|'keyword'   | number | 圆窗角标样式                      |
   | head       | {no,en,cn}                    | 见下   | 页眉                              |
   | theme      | Partial<DeckTheme>            | —      | 设计令牌覆盖                      |
   ========================================================================== */
import { useDeckStyles, deckTheme, deckLabel, SlideShell, SlideHead } from './DeckKit.jsx';
import { FillSlot } from './ImageStrip.jsx';

/* ── 页面属性契约 · defaultProps ──────────────────────────────────────────
   本页全部可见文案 / 数据 / 图片槽默认值集中于此，直接编辑即可换内容；
   组件内部以 { ...defaultProps, ...props } 合并，外部传同名 props 逐项覆盖。 */
export const defaultProps = {
  imgCount: 4,
  arc: true,
  focus: true,
  focusIndex: 0,
  labelType: 'number',
  head: { no:'05', en:'Portraits · Windows', cn:'圆窗影像 · 群像' },
  items: [
      { label:'OpenAI',    sub:'大模型 · 1570 亿$' },
      { label:'Anthropic', sub:'大模型 · 965 亿$' },
      { label:'xAI',       sub:'大模型 · 450 亿$' },
      { label:'Databricks',sub:'基础设施 · 620 亿$' },
      { label:'CoreWeave', sub:'算力云 · 190 亿$' },
    ],
};

function SlideRing(props){
  useDeckStyles(props.theme);
  const T = (deckTheme ? deckTheme(props.theme) : {});
  const ACC = T.accent || '#46e3c6';
  const BLUE = T.blue || '#4a86ff';
  const navy = T.navy900 || '#050b22';

  const {
    imgCount, arc, focus, focusIndex, labelType, head, items,
  } = { ...defaultProps, ...props };

  const n = Math.max(1, Math.min(imgCount, 5));
  const data = items.slice(0, n);
  const single = n === 1;
  const fIdx = Math.max(0, Math.min(focusIndex, n - 1));
  const lbl = (i)=> deckLabel(labelType, i, { keyword:'NO' });
  // 弧形：以中点为顶，两侧下沉（确定性抛物线）
  const arcDy = (i)=> { const c=(n-1)/2; const d=Math.abs(i-c); return !single && arc ? Math.round(d*d*22) : 0; };

  return (
    <SlideShell orbs={[{ w:560, h:560, left:'50%', top:'46%',
        color:`radial-gradient(circle at 50% 50%, ${hexA(BLUE,.16)}, ${hexA(BLUE,0)} 66%)` }]}>
      <SlideHead no={head.no} en={head.en} cn={head.cn} badge={head.no} />

      <div style={{flex:'1 1 0', minHeight:0, display:'flex', alignItems:'center', justifyContent:'center', gap:single?0:36, marginTop:10}}>
        {data.map((it,i)=>{
          const hot = focus && i===fIdx;
          return (
            <div key={i} className={'dk-anim d'+Math.min(i+1,6)} data-dashi-theme09-ring-item="true"
                style={{flex:single?'0 1 560px':'1 1 0', maxWidth:single?560:340, minWidth:0,
                  display:'flex', flexDirection:'column', alignItems:'center', gap:single?26:20,
                  transform:`translateY(${arcDy(i)}px)`, transition:'transform .2s'}}>
              {/* 圆窗 */}
              <div data-dashi-theme09-ring-window="true" style={{position:'relative', width:'100%', paddingBottom:'100%', borderRadius:'50%',
                    transform: hot?'scale(1.08)':'scale(1)', transition:'transform .2s',
                    boxShadow: hot
                      ? `0 ${single?42:30}px ${single?110:70}px ${hexA(ACC,.4)}, 0 0 0 ${single?6:4}px ${ACC}`
                      : '0 22px 54px rgba(3,8,30,.5), 0 0 0 2px rgba(255,255,255,.16)'}}>
                <FillSlot idPrefix="ring" idx={i} placeholder={'肖像 / '+(i+1)} accent={ACC} radius="50%" theme={props.theme} />
                <span style={{position:'absolute', top:'14%', left:'86%', transform:'translate(-50%,-50%)', zIndex:4, width:single?52:40, height:single?52:40, borderRadius:'50%', display:'inline-flex',
                    alignItems:'center', justifyContent:'center', fontFamily:'var(--font-display)', fontWeight:900, fontSize:single?20:16,
                    color: hot?navy:'#fff', background: hot?ACC:'rgba(5,11,34,.78)', border:`2px solid ${hot?ACC:'rgba(255,255,255,.45)'}`,
                    boxShadow:'0 6px 18px rgba(3,8,30,.5)', backdropFilter:'blur(4px)'}}>{lbl(i)}</span>
              </div>
              {/* 标签 */}
              <div style={{textAlign:'center'}}>
                <div style={{fontFamily:'var(--font-cn)', fontWeight:900, fontSize:single?64:'var(--type-sub)', color: hot?ACC:'#fff', lineHeight:1.05}}>{it.label}</div>
                <div style={{fontFamily:'var(--font-mono)', fontSize:single?18:14, color:'var(--ink-dim)', marginTop:single?10:6}}>{it.sub}</div>
              </div>
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

export default SlideRing;

export const slideSpec = { defaults: defaultProps, slot:'ring', name:'圆窗影像 · Ring', controls:[
  { prop:'imgCount', type:'slider', label:'图片槽数量', default:4, min:1, max:5, step:1 },
  { prop:'arc', type:'toggle', label:'弧形排列', default:true },
  { prop:'labelType', type:'labelType', label:'标签类型', default:'数字' },
  { prop:'focus', type:'focus', label:'重点信息 Focus', default:true },
  { prop:'focusIndex', type:'slider', label:'焦点序号', default:0, min:0, max:(p)=>p.imgCount-1, maxFromKey:'imgCount', maxFromKeyOffset:-1, displayOffset:1, step:1, showIf:(p)=>p.focus },
]};
