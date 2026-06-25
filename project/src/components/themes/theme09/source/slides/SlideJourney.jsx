/* ============================================================================
   SlideJourney — 影像纪程（图配时间线 · 时间轴上的照片节点 + 日期 + 图注）
   标准 ES Module。照片用 FillSlot（满版裁切，固定缩略框铺满）。
   与 Timeline（纯文字节点卡）、Filmstrip（等高胶片）、Era（分期簇）刻意区分：本页把
   「照片」钉在时间轴节点上，图上时间下图注，叙事性的影像编年。

   ── 可调参数（Props） ──────────────────────────────────────────────────────
   | prop       | 类型                          | 默认值 | 说明                              |
   | nodes      | {date,caption}[]              | 见下   | 各节点数据源（按时序）            |
   | imgCount   | number (3–6)                  | 5      | 图片槽数量（节点数）              |
   | showAxis   | boolean                       | true   | 轴线 + 节点点                     |
   | focus      | boolean                       | true   | 高亮某节点（放大 + 描边）         |
   | focusIndex | number (0-based)              | 0      | 高亮第几个                        |
   | labelType  | 'number'|'symbol'|'keyword'   | number | 节点角标样式                      |
   | head       | {no,en,cn}                    | 见下   | 页眉                              |
   | theme      | Partial<DeckTheme>            | —      | 设计令牌覆盖                      |
   ========================================================================== */
import { useDeckStyles, deckTheme, deckLabel, SlideShell, SlideHead } from './DeckKit.jsx';
import { FillSlot } from './ImageStrip.jsx';

/* ── 页面属性契约 · defaultProps ──────────────────────────────────────────
   本页全部可见文案 / 数据 / 图片槽默认值集中于此，直接编辑即可换内容；
   组件内部以 { ...defaultProps, ...props } 合并，外部传同名 props 逐项覆盖。 */
export const defaultProps = {
  imgCount: 5,
  showAxis: true,
  focus: true,
  focusIndex: 0,
  labelType: 'number',
  head: { no:'08', en:'Photo Journey · 2024', cn:'影像纪程 · 资本之年' },
  nodes: [
      { date:'02', caption:'OpenAI 要约收购 · 估值约 860 亿$' },
      { date:'05', caption:'xAI B 轮 60 亿$ · 投后 240 亿' },
      { date:'06', caption:'Anthropic 获亚马逊追加战略投资' },
      { date:'09', caption:'Databricks J 轮约 100 亿$' },
      { date:'10', caption:'OpenAI 新一轮 66 亿$ · 估值 1570 亿' },
      { date:'12', caption:'Safe SI 种子轮即募 10 亿$' },
    ],
};

function SlideJourney(props){
  useDeckStyles(props.theme);
  const T = (deckTheme ? deckTheme(props.theme) : {});
  const ACC = T.accent || '#46e3c6';
  const BLUE = T.blue || '#4a86ff';
  const navy = T.navy900 || '#050b22';

  const {
    imgCount, showAxis, focus, focusIndex, labelType, head, nodes,
  } = { ...defaultProps, ...props };

  const n = Math.max(3, Math.min(imgCount, 6));
  const data = nodes.slice(0, n);
  const fIdx = Math.max(0, Math.min(focusIndex, n - 1));
  const lbl = (e,i)=> deckLabel(labelType, i, { keyword:'KEY', number:e.date });

  return (
    <SlideShell orbs={[{ w:520, h:520, left:-160, top:-150,
        color:`radial-gradient(circle at 50% 50%, ${hexA(BLUE,.2)}, ${hexA(BLUE,0)} 70%)` }]}>
      <SlideHead no={head.no} en={head.en} cn={head.cn} badge={head.no} />

      {/* 3 行网格：照片(行1) / 节点点(行2·定高带) / 日期图注(行3)。
          所有列共享行高 → 节点点必落在同一水平线上，与轴线对齐（与卡片数无关）。 */}
      <div style={{flex:'1 1 0', minHeight:0, marginTop:38, position:'relative', display:'grid',
            gridTemplateColumns:`repeat(${n}, 1fr)`, gridTemplateRows:'minmax(0,1fr) 44px auto',
            columnGap:22, rowGap:0, alignItems:'stretch'}}>
        {/* 轴线（贯穿节点行，居中） */}
        {showAxis && (
          <div style={{gridColumn:'1 / -1', gridRow:'2', alignSelf:'center', height:3, borderRadius:2,
              background:'linear-gradient(90deg, rgba(255,255,255,.06), rgba(255,255,255,.3), rgba(255,255,255,.06))'}}></div>
        )}
        {/* 行1：照片 */}
        {data.map((e,i)=>{
          const hot = focus && i===fIdx;
          return (
            <div key={'p'+i} className={'dk-anim d'+Math.min(i+1,6)} style={{gridColumn:i+1, gridRow:1, minWidth:0, minHeight:0,
                  position:'relative', display:'flex', alignItems:'flex-end'}}>
              <div style={{position:'relative', width:'100%', height:'100%', borderRadius:16, overflow:'hidden',
                    transform: hot?'scale(1.025)':'scale(1)', transformOrigin:'bottom center', transition:'transform .2s', zIndex: hot?3:1,
                    boxShadow: hot?`0 26px 60px ${hexA(ACC,.34)}, 0 0 0 3px ${ACC}`:'0 18px 44px rgba(3,8,30,.46)'}}>
                <FillSlot idPrefix="journey" idx={i} placeholder={'影像 / '+(i+1)} accent={ACC} theme={props.theme} />
                <span style={{position:'absolute', top:10, left:10, zIndex:4, padding:'4px 12px', borderRadius:999, fontFamily:'var(--font-mono)',
                    fontSize:13, fontWeight:700, color: hot?navy:'#fff', background: hot?ACC:'rgba(5,11,34,.6)',
                    border:`1px solid ${hot?ACC:'rgba(255,255,255,.3)'}`, backdropFilter:'blur(4px)'}}>{lbl(e,i)}</span>
              </div>
            </div>
          );
        })}
        {/* 行2：节点点（定高带·垂直居中 → 与轴线重合） */}
        {data.map((e,i)=>{
          const hot = focus && i===fIdx;
          return (
            <div key={'n'+i} style={{gridColumn:i+1, gridRow:2, display:'flex', alignItems:'center', justifyContent:'center'}}>
              <span style={{width:hot?20:14, height:hot?20:14, borderRadius:'50%', background: hot?ACC:'#cfe0ff',
                  border:`3px solid ${navy}`, boxShadow: hot?`0 0 20px ${hexA(ACC,.8)}`:'0 0 0 4px rgba(255,255,255,.06)', zIndex:2}}></span>
            </div>
          );
        })}
        {/* 行3：日期 + 图注 */}
        {data.map((e,i)=>{
          const hot = focus && i===fIdx;
          return (
            <div key={'c'+i} style={{gridColumn:i+1, gridRow:3, textAlign:'center', paddingTop:6, minWidth:0}}>
              <div style={{fontFamily:'var(--font-display)', fontWeight:900, fontSize:30, color: hot?ACC:'#fff'}}>2024·{e.date}</div>
              <p style={{fontSize:'var(--type-tiny)', lineHeight:1.4, color:'var(--ink-dim)', marginTop:6, textWrap:'pretty'}}>{e.caption}</p>
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

export default SlideJourney;

export const slideSpec = { defaults: defaultProps, slot:'journey', name:'影像纪程 · Journey', controls:[
  { prop:'imgCount', type:'slider', label:'图片槽数量', default:5, min:3, max:6, step:1, desc:'节点数' },
  { prop:'showAxis', type:'toggle', label:'装饰文案', default:true, desc:'轴线 + 节点' },
  { prop:'labelType', type:'labelType', label:'标签类型', default:'数字' },
  { prop:'focus', type:'focus', label:'重点信息 Focus', default:true },
  { prop:'focusIndex', type:'slider', label:'焦点序号', default:0, min:0, max:(p)=>p.imgCount-1, maxFromKey:'imgCount', maxFromKeyOffset:-1, displayOffset:1, step:1, showIf:(p)=>p.focus },
]};
