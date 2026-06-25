import { useDeckStyles, deckTheme, deckLabel, SlideShell, SlideHead } from './DeckKit.jsx';
import { FillSlot } from './ImageStrip.jsx';
/* ============================================================================
   SlideBento — 影像便当（模块化便当格 · 一枚特写大格 + 若干支撑格）
   标准 ES Module。图片用 FillSlot（满版裁切，铺满每格、按需裁切）。
   与 Gallery（单行 justified）、Mosaic（接触印相拼贴）、OverlayCards（满版裁切卡）、
   Masonry（竖向瀑布）刻意区分：本页是「便当式」非等分网格 —— 左/首格为大特写，
   其余格按确定性版式拼贴，整版无缝铺满，附可选叠印图说。

   ── 可调参数（Props） ──────────────────────────────────────────────────────
   | prop        | 类型                          | 默认值 | 说明                              |
   | items       | {label,sub}[]                 | 见下   | 各格的叠印图说数据源              |
   | imgCount    | number (3–6)                  | 5      | 图片槽数量（便当格数）            |
   | showCaption | boolean                       | true   | 叠印图说（装饰文案）              |
   | focus       | boolean                       | true   | 高亮某一格（描边强调）            |
   | focusIndex  | number (0-based)              | 0      | 高亮第几格                        |
   | labelType   | 'number'|'symbol'|'keyword'   | number | 格角标样式                        |
   | head        | {no,en,cn}                    | 见下   | 页眉                              |
   | theme       | Partial<DeckTheme>            | —      | 设计令牌覆盖                      |
   ========================================================================== */
/* ── 页面属性契约 · defaultProps ──────────────────────────────────────────
   本页全部可见文案 / 数据 / 图片槽默认值集中于此，直接编辑即可换内容；
   组件内部以 { ...defaultProps, ...props } 合并，外部传同名 props 逐项覆盖。 */
export const defaultProps = {
  imgCount: 5,
  showCaption: true,
  focus: true,
  focusIndex: 0,
  labelType: 'number',
  head: { no:'05', en:'Bento · Visual Grid', cn:'影像便当 · 版图拼贴' },
  items: [
      { label:'总部园区', sub:'HQ campus' },
      { label:'核心团队', sub:'core team' },
      { label:'产品界面', sub:'product UI' },
      { label:'算力机房', sub:'compute' },
      { label:'融资现场', sub:'deal room' },
      { label:'路演现场', sub:'demo day' },
    ],
};

function SlideBento(props){
  useDeckStyles(props.theme);
  const T = (deckTheme ? deckTheme(props.theme) : {});
  const ACC = T.accent || '#46e3c6';
  const BLUE = T.blue || '#4a86ff';
  const navy = T.navy900 || '#050b22';

  const {
    imgCount, showCaption, focus, focusIndex, labelType, head, items,
  } = { ...defaultProps, ...props };

  const n = Math.max(3, Math.min(imgCount, 6));
  const data = items.slice(0, n);
  const fIdx = Math.max(0, Math.min(focusIndex, n - 1));
  const lbl = (i)=> deckLabel(labelType, i, { keyword:'NO' });

  // 便当版式：6×6 网格，按格数给出确定性 grid-area（无缝铺满，首格=大特写）
  const LAYOUTS = {
    3:['1/1/7/4','1/4/3/7','3/4/7/7'],
    4:['1/1/5/4','1/4/3/7','3/4/5/7','5/1/7/7'],
    5:['1/1/5/4','1/4/3/7','3/4/5/7','5/1/7/3','5/3/7/7'],
    6:['1/1/5/4','1/4/3/7','3/4/5/7','5/1/7/3','5/3/7/5','5/5/7/7'],
  };
  const areas = LAYOUTS[n];

  return (
    <SlideShell orbs={[{ w:520, h:520, right:-160, top:-150,
        color:`radial-gradient(circle at 50% 50%, ${hexA(BLUE,.16)}, ${hexA(BLUE,0)} 70%)` }]}>
      <SlideHead no={head.no} en={head.en} cn={head.cn} badge={head.no} />

      <div style={{flex:'1 1 0', minHeight:0, marginTop:24,
            display:'grid', gridTemplateColumns:'repeat(6,1fr)', gridTemplateRows:'repeat(6,1fr)', gap:14}}>
        {data.map((it,i)=>{
          const hot = focus && i===fIdx;
          const big = i===0;
          return (
            <div key={i} data-dashi-theme09-bento-slot={i} data-dashi-theme09-bento-area={areas[i]}
              className={'dk-anim d'+Math.min(i+1,6)} style={{ gridArea:areas[i], position:'relative', borderRadius:big?22:16, overflow:'hidden',
                  boxShadow: hot ? `0 0 0 3px ${ACC}, 0 30px 70px ${hexA(ACC,.32)}`
                                 : '0 22px 54px rgba(3,8,30,.5), inset 0 0 0 1px rgba(255,255,255,.1)' }}>
              <FillSlot idPrefix="bento" idx={i} placeholder={(it.label||'图片')+' / '+(i+1)} accent={ACC}
                        radius={big?22:16} theme={props.theme} />
              {/* 角标 */}
              <span style={{position:'absolute', top:12, left:12, zIndex:4, minWidth:36, height:36, padding:'0 9px', borderRadius:10,
                  display:'inline-flex', alignItems:'center', justifyContent:'center', fontFamily:'var(--font-display)', fontWeight:900,
                  fontSize:big?17:15, color: hot?navy:'#fff', background: hot?ACC:'rgba(5,11,34,.55)',
                  border:`1px solid ${hot?ACC:'rgba(255,255,255,.32)'}`, backdropFilter:'blur(4px)', pointerEvents:'none'}}>{lbl(i)}</span>
              {/* 叠印图说 */}
              {showCaption && (
                <div style={{position:'absolute', left:0, right:0, bottom:0, zIndex:3, pointerEvents:'none',
                    padding: big?'46px 22px 18px':'34px 16px 14px',
                    background:'linear-gradient(0deg, rgba(3,7,24,.82) 0%, rgba(3,7,24,.34) 55%, rgba(3,7,24,0) 100%)'}}>
                  <div style={{fontFamily:'var(--font-cn)', fontWeight:900, fontSize: big?'var(--type-sub)':'var(--type-small)',
                      color: hot?ACC:'#fff', lineHeight:1.1}}>{it.label}</div>
                  <div style={{fontFamily:'var(--font-mono)', fontSize: big?14:12, letterSpacing:'.06em',
                      color:'var(--ink-dim)', marginTop:3}}>{it.sub}</div>
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

export default SlideBento;

/* ── 模板参数 schema（自描述 · 迁移即带控件；Tweaks 由此自动生成） ── */
export const slideSpec = { defaults: defaultProps, slot:'bento', name:'影像便当 · Bento', controls:[
  { prop:'imgCount', type:'slider', label:'图片槽数量', default:5, min:3, max:6, step:1 },
  { prop:'showCaption', type:'toggle', label:'装饰文案', default:true, desc:'叠印图说' },
  { prop:'labelType', type:'labelType', label:'标签类型', default:'数字' },
  { prop:'focus', type:'focus', label:'重点信息 Focus', default:true },
  { prop:'focusIndex', type:'slider', label:'焦点序号', default:0, min:0, max:(p)=>p.imgCount-1, maxFromKey:'imgCount', maxFromKeyOffset:-1, displayOffset:1, step:1, showIf:(p)=>p.focus },
]};
