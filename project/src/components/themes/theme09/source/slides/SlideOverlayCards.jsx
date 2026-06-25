import { useDeckStyles, deckTheme, deckLabel, SlideShell, SlideHead } from './DeckKit.jsx';
import { ImageStripMediaContext } from './ImageStrip.jsx';
/* ============================================================================
   SlideOverlayCards — 影像卡集（满版裁切图卡 · 渐隐压暗 + 卡面叠印标题/图说）
   独立组件：仅靠 props 控制内容与样式；render 时自注入 DeckKit 基座样式。
   含「满版裁切图卡」槽（CardFill）：用户上传后按 objectFit:cover 铺满卡面（按需裁切），
   localStorage 持久化（键 cards-<i>，全局唯一、刷新不丢）。
   与 Gallery（单行比例自适应 + 行下说明）、Mosaic（接触印相拼贴）刻意区分：本页文字
   直接叠印在等大图卡上（杂志卡片式），整排同高、卡面满版裁切。

   ── 可调参数（Props） ──────────────────────────────────────────────────────
   | prop        | 类型                          | 默认值 | 说明                              |
   | cards       | {title,caption}[]             | 见下   | 卡面文案数据源（同时=图卡数）     |
   | cardCount   | number (2–4)                  | 3      | 展示卡数（截取 = 图片槽数）       |
   | showCaption | boolean                       | true   | 卡面叠印标题 / 图说               |
   | focus       | boolean                       | true   | 高亮某张卡（放大 + 描边）         |
   | focusIndex  | number (0-based)              | 0      | 高亮第几张                        |
   | labelType   | 'number'|'symbol'|'keyword'   | number | 卡角序号样式                      |
   | head        | {no,en,cn}                    | 见下   | 页眉                              |
   | theme       | Partial<DeckTheme>            | —      | 设计令牌覆盖                      |
   ========================================================================== */
/* ── 页面属性契约 · defaultProps ──────────────────────────────────────────
   本页全部可见文案 / 数据 / 图片槽默认值集中于此，直接编辑即可换内容；
   组件内部以 { ...defaultProps, ...props } 合并，外部传同名 props 逐项覆盖。 */
export const defaultProps = {
  cardCount: 3,
  showCaption: true,
  focus: true,
  focusIndex: 0,
  labelType: 'number',
  head: { no:'10', en:'Image Cards', cn:'影像卡集 · 赛道掠影' },
  cards: [
      { title:'算力基建', caption:'卖铲子的人 —— 锁定长约与稀缺算力的中游赢家' },
      { title:'头部大模型', caption:'淘金的人 —— 估值押注未来，想象与风险并存' },
      { title:'垂直应用', caption:'卖水的人 —— 嵌入工作流、拿到续约的稳健下注' },
      { title:'数据与工具', caption:'修路的人 —— 支撑模型迭代的隐形基础层' },
    ],
};

function SlideOverlayCards(props){
  useDeckStyles(props.theme);
  const T = (deckTheme ? deckTheme(props.theme) : {});
  const ACC = T.accent || '#46e3c6';
  const BLUE = T.blue || '#4a86ff';
  const navy = T.navy900 || '#050b22';

  const {
    cardCount, showCaption, focus, focusIndex, labelType, head, cards,
  } = { ...defaultProps, ...props };

  const data = cards.slice(0, Math.max(2, Math.min(cardCount, cards.length)));
  const fIdx = Math.max(0, Math.min(focusIndex, data.length - 1));
  const lbl = (i)=> deckLabel(labelType, i, { keyword:'IMG' });

  return (
    <SlideShell orbs={[{ w:480, h:480, right:-150, bottom:-170,
        color:`radial-gradient(circle at 50% 50%, ${hexA(BLUE,.18)}, ${hexA(BLUE,0)} 70%)` }]}>
      <SlideHead no={head.no} en={head.en} cn={head.cn} badge={head.no} />

      <div style={{flex:'1 1 0', minHeight:0, display:'flex', gap:24, marginTop:26, alignItems:'stretch'}}>
        {data.map((c,i)=>{
          const hot = focus && i===fIdx;
          return (
            <div key={i} className={'dk-anim d'+Math.min(i+1,6)} style={{flex: hot?'1.18 1 0':'1 1 0', minWidth:0, position:'relative',
                  borderRadius:'var(--dk-radius)', overflow:'hidden', transition:'flex .25s',
                  boxShadow: hot?`0 30px 70px ${hexA(ACC,.3)}, 0 0 0 2px ${ACC}`:'0 22px 54px rgba(3,8,30,.45)'}}>
              <CardFill idPrefix="cards" idx={i} placeholder={(c.title||'影像')+' / image'} accent={ACC} />
              {/* 卡角序号 */}
              <span style={{position:'absolute', top:16, left:16, zIndex:3, width:40, height:40, borderRadius:11, display:'inline-flex',
                  alignItems:'center', justifyContent:'center', fontFamily:'var(--font-display)', fontWeight:900, fontSize:17,
                  color: hot?navy:'#fff', background: hot?ACC:'rgba(5,11,34,.6)', border:`1px solid ${hot?ACC:'rgba(255,255,255,.3)'}`,
                  backdropFilter:'blur(6px)'}}>{lbl(i)}</span>
              {/* 卡面叠印 */}
              {showCaption && (
                <div style={{position:'absolute', left:0, right:0, bottom:0, zIndex:2, padding:'40px 24px 24px',
                    background:'linear-gradient(180deg, rgba(3,8,30,0), rgba(3,8,30,.55) 42%, rgba(3,8,30,.92))', pointerEvents:'none'}}>
                  <div style={{fontFamily:'var(--font-cn)', fontWeight:900, fontSize:'var(--type-h2)', color:'#fff', lineHeight:1.05,
                      textShadow:'0 2px 18px rgba(3,8,30,.9)'}}>{c.title}</div>
                  {c.caption && <p style={{fontSize:'var(--type-tiny)', lineHeight:1.45, color:'rgba(255,255,255,.86)', marginTop:10, textWrap:'pretty'}}>{c.caption}</p>}
                  <div style={{height:3, width: hot?64:36, marginTop:14, borderRadius:2, background: hot?ACC:'rgba(255,255,255,.4)'}}></div>
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
    const n = hex.slice(1);
    const f = n.length===3 ? n.split('').map(c=>c+c).join('') : n;
    const r = parseInt(f.slice(0,2),16), g = parseInt(f.slice(2,4),16), b = parseInt(f.slice(4,6),16);
    return `rgba(${r},${g},${b},${a})`;
  }
}

/* 满版裁切图卡槽：objectFit:cover 铺满卡面（按需裁切），拖入/点击上传 + localStorage 持久化。 */
function CardFill({ idPrefix, idx, placeholder, accent }){
  const key = `${idPrefix}-${idx}`;
  const media = React.useContext(ImageStripMediaContext);
  const hasHostMedia = Boolean(media?.get || media?.set);
  const loadLocal = ()=>{ try{ const r = localStorage.getItem(key); if(r) return JSON.parse(r); }catch(e){} return null; };
  const load = ()=> {
    const hosted = hasHostMedia ? mediaToCardData(media?.get?.(key, idx)) : null;
    return hosted || loadLocal();
  };
  const [data, setData] = React.useState(load);
  const [drag, setDrag] = React.useState(false);
  const [hover, setHover] = React.useState(false);
  const inputRef = React.useRef(null);
  const openPicker = (e)=>{ e.stopPropagation(); inputRef.current && inputRef.current.click(); };
  React.useEffect(()=>{ setData(load()); }, [hasHostMedia, media, key, idx]);
  const save = (d)=>{
    setData(d);
    if(media?.set) media.set(key, idx, cardDataToMedia(d));
    try{ d?localStorage.setItem(key, JSON.stringify(d)):localStorage.removeItem(key); }catch(e){}
  };
  const ingest = (file)=>{
    if(!file || !/^(image|video)\//.test(file.type || '')) return;
    if(hasHostMedia && media?.drop){
      media.drop(key, idx, file);
      return;
    }
    const reader = new FileReader();
    reader.onload = (e)=>{ const url = e.target.result;
      if(file.type.startsWith('video/')){
        const video = document.createElement('video');
        video.preload = 'metadata';
        video.onloadedmetadata = ()=> save({ url, aspect: (video.videoWidth && video.videoHeight) ? video.videoWidth/video.videoHeight : 16/9, kind:'video', type:file.type });
        video.onerror = ()=> save({ url, aspect: 16/9, kind:'video', type:file.type });
        video.src = url;
        return;
      }
      const im = new Image();
      im.onload = ()=> save({ url, aspect: im.naturalWidth/im.naturalHeight, kind:'image', type:file.type }); im.src = url; };
    reader.readAsDataURL(file);
  };
  return (
    <div
      onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}
      onPointerDown={(e)=>e.stopPropagation()}
      onMouseDown={(e)=>e.stopPropagation()}
      onDragOver={(e)=>{e.preventDefault(); e.stopPropagation(); setDrag(true);}} onDragLeave={(e)=>{e.stopPropagation(); setDrag(false);}}
      onDrop={(e)=>{e.preventDefault(); e.stopPropagation(); setDrag(false); ingest(e.dataTransfer.files[0]);}}
      onClick={openPicker}
      style={{position:'absolute', inset:0, cursor:'pointer', overflow:'hidden',
        background: data ? '#03081e' : 'repeating-linear-gradient(135deg, rgba(255,255,255,.05) 0 16px, rgba(255,255,255,.02) 16px 32px)',
        boxShadow: drag ? `inset 0 0 0 3px ${accent}` : 'none'}}>
      <input ref={inputRef} type="file" accept="image/*,video/mp4,video/webm,video/quicktime,video/*" style={{display:'none'}} onChange={(e)=>{ ingest(e.target.files[0]); e.target.value=''; }} onClick={(e)=>e.stopPropagation()} />
      {data ? (
        data.kind === 'video'
          ? <video src={data.url} muted playsInline loop autoPlay preload="metadata" style={{width:'100%', height:'100%', objectFit:'cover', display:'block'}} />
          : <img src={data.url} alt="" style={{width:'100%', height:'100%', objectFit:'cover', display:'block'}} />
      ) : (
        <div style={{position:'absolute', inset:0, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:12, padding:18, textAlign:'center'}}>
          <span style={{width:48, height:48, borderRadius:13, display:'inline-flex', alignItems:'center', justifyContent:'center',
              border:'1px solid rgba(255,255,255,.28)', color:'var(--ink-dim)', fontSize:24}}>＋</span>
          <span style={{fontFamily:'var(--font-mono)', fontSize:15, color:'var(--ink-faint)', lineHeight:1.4}}>{placeholder}</span>
          <span style={{fontFamily:'var(--font-mono)', fontSize:12, color:'rgba(255,255,255,.28)'}}>拖入或点击 · 满版裁切</span>
        </div>
      )}
      {data && hover && (
        <button onClick={(e)=>{e.stopPropagation(); save(null);}}
          style={{position:'absolute', top:12, right:12, zIndex:5, width:34, height:34, borderRadius:'50%', border:'none',
            background:'rgba(5,11,34,.7)', color:'#fff', cursor:'pointer', fontSize:16, display:'inline-flex',
            alignItems:'center', justifyContent:'center', backdropFilter:'blur(6px)'}}>✕</button>
      )}
    </div>
  );
}

function mediaToCardData(value){
  if(!value) return null;
  if(typeof value === 'string') return { url:value, aspect:1.5, kind:looksLikeVideoSrc(value) ? 'video' : 'image' };
  if(typeof value === 'object'){
    const src = value.src || value.url || value.u;
    if(!src) return null;
    return {
      url:src,
      aspect:value.aspect || value.ratio || value.ar || 1.5,
      kind:value.kind || (String(value.type || src).startsWith('video/') || looksLikeVideoSrc(src) ? 'video' : 'image'),
      type:value.type,
    };
  }
  return null;
}

function cardDataToMedia(data){
  if(!data?.url) return null;
  return {
    src:data.url,
    kind:data.kind || (String(data.type || data.url).startsWith('video/') || looksLikeVideoSrc(data.url) ? 'video' : 'image'),
    type:data.type,
    ratio:data.aspect || null,
    ar:data.aspect || null,
  };
}

function looksLikeVideoSrc(src){
  return String(src || '').startsWith('data:video/')
    || /\.(mp4|m4v|mov|webm|ogv)(?:[?#].*)?$/i.test(String(src || ''));
}
export default SlideOverlayCards;

/* ── 模板参数 schema（自描述 · 迁移即带控件；Tweaks 由此自动生成） ── */
export const slideSpec = { defaults: defaultProps, slot:'cards', name:'影像卡集 · Cards', controls:[
  { prop:'cardCount', type:'slider', label:'图片槽数量', default:3, min:2, max:4, step:1, desc:'图卡数' },
  { prop:'showCaption', type:'toggle', label:'装饰文案', default:true, desc:'卡面叠印标题/图说' },
  { prop:'labelType', type:'labelType', label:'标签类型', default:'数字' },
  { prop:'focus', type:'focus', label:'重点信息 Focus', default:true },
  { prop:'focusIndex', type:'slider', label:'焦点序号', default:0, min:0, max:(p)=>p.cardCount-1, maxFromKey:'cardCount', maxFromKeyOffset:-1, displayOffset:1, step:1, showIf:(p)=>p.focus },
]};
