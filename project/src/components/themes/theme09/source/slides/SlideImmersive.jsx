import { useDeckStyles, deckTheme, SlideShell } from './DeckKit.jsx';
import ImageStrip from './ImageStrip.jsx';
import UnicornBackground, { UNICORN_BACKGROUND_CONTROL, createUnicornSceneControl } from '../../../unicorn-background.jsx';
/* ============================================================================
   SlideImmersive — 全幅图景（图片领衔满幅 · 渐隐压暗 + 浮层文字板 + 可选缩略轨）
   独立组件：仅靠 props 控制内容与样式；render 时自注入 DeckKit 基座样式。
   图片依赖 ImageStrip.jsx：用户上传后按真实比例自适应；主图尽量铺满，缩略轨同样自适应。
   与 Feature（编辑式分栏 + 图说列）刻意区分：本页图片占据整幅，文字以玻璃浮板叠加，
   作沉浸式的「视觉转场 / 篇章意象」页。

   ── 可调参数（Props） ──────────────────────────────────────────────────────
   | prop      | 类型                          | 默认值 | 说明                              |
   | imgCount  | number (1–4)                  | 1      | 图片槽数量（1=纯满幅；>1 加缩略轨）|
   | textPos   | '左下'|'右下'|'居中'          | '左下' | 浮层文字板位置                    |
   | showScrim | boolean                       | true   | 渐隐压暗层（保证文字可读）        |
   | showRail  | boolean                       | true   | 底部缩略轨（imgCount>1 时·装饰）  |
   | tags      | string[]                      | 见下   | 浮板内标签                        |
   | tagCount  | number (0–4)                  | 2      | 展示标签数（截取）                |
   | focus     | boolean                       | true   | 是否高亮浮板（强调描边/光晕）     |
   | kicker/title/titleEN/paragraph : string  文案（默认=篇章意象）            |
   | badge     | string                        | '10'   | 顶部编号徽标                      |
   | theme     | Partial<DeckTheme>            | —      | 设计令牌覆盖                      |
   ========================================================================== */
/* ── 页面属性契约 · defaultProps ──────────────────────────────────────────
   本页全部可见文案 / 数据 / 图片槽默认值集中于此，直接编辑即可换内容；
   组件内部以 { ...defaultProps, ...props } 合并，外部传同名 props 逐项覆盖。 */
export const defaultProps = {
  imgCount: 1,
  backgroundMode: 'unicorn',
  unicornScene: 'moving',
  textPos: '左下',
  showScrim: true,
  showRail: true,
  tagCount: 2,
  focus: true,
  badge: '10',
  kicker: 'CHAPTER · 视觉',
  title: '资本与算力的浪潮',
  titleEN: 'Capital × Compute',
  paragraph: '在这一年，资金以前所未有的密度涌向少数团队 —— 每一笔大额融资，都是一次对方向的押注。',
  tags: ['2024 · 资本大年', '湾区 63.9%', '大模型 43.3%', '≥1 亿美元'],
};

function SlideImmersive(props){
  useDeckStyles(props.theme);
  const T = (deckTheme ? deckTheme(props.theme) : {});
  const ACC = T.accent || '#46e3c6';
  const BLUE = T.blue || '#4a86ff';

  const {
    imgCount, textPos, showScrim, showRail, tagCount, focus, badge,
    kicker, title, titleEN, paragraph, tags, backgroundMode, unicornScene,
  } = { ...defaultProps, ...props };

  const useUnicorn = backgroundMode === 'unicorn';
  const nImg = Math.max(1, Math.min(imgCount, 4));
  const tg = tags.slice(0, Math.max(0, Math.min(tagCount, tags.length)));
  const hasRail = showRail && nImg > 1;

  const posMap = {
    '左下': { left:'var(--pad-x)', bottom: hasRail?200:'var(--pad-y)' },
    '右下': { right:'var(--pad-x)', bottom: hasRail?200:'var(--pad-y)' },
    '居中': { left:'50%', top:'50%', transform:'translate(-50%, -50%)' },
  };
  const pp = posMap[textPos] || posMap['左下'];
  const centered = textPos === '居中';
  const scrimDir = textPos==='右下' ? 'to left' : textPos==='居中' ? 'to top' : 'to right';

  return (
    <SlideShell pad={false} style={{position:'relative'}}>
      {/* 主图：满幅裁切铺满（cover） */}
      <div style={{position:'absolute', inset:0, background:'#03081e'}}>
        {useUnicorn
          ? <UnicornBackground scene={unicornScene} accent={ACC} />
          : <CoverSlot idPrefix="immersive-main" placeholder="满幅意象 / full-bleed image" accent={ACC} />}
      </div>

      {/* 渐隐压暗 */}
      {showScrim && (
        <div style={{position:'absolute', inset:0, pointerEvents:'none',
          background:`linear-gradient(${scrimDir}, rgba(3,8,30,.86) 0%, rgba(3,8,30,.5) 38%, rgba(3,8,30,.08) 64%, rgba(3,8,30,0) 100%),
                      linear-gradient(to top, rgba(3,8,30,.7), rgba(3,8,30,0) 46%)`}}></div>
      )}

      {/* 顶部小标 */}
      <div className="dk-anim" style={{position:'absolute', top:'var(--pad-y)', left:'var(--pad-x)', display:'flex', alignItems:'center', gap:16}}>
        <span style={{fontFamily:'var(--font-display)', fontWeight:900, fontSize:'var(--type-sub)', color:ACC,
            textShadow:`0 2px 18px rgba(3,8,30,.8)`}}>{badge}</span>
        <span style={{height:2, width:60, background:ACC}}></span>
        <span style={{fontFamily:'var(--font-mono)', fontSize:14, letterSpacing:'.24em', color:'#fff', textShadow:'0 2px 12px rgba(3,8,30,.9)'}}>{kicker}</span>
      </div>

      {/* 浮层文字板 */}
      <div data-dashi-theme09-immersive-copy={textPos} style={{position:'absolute', width:'min(760px, calc(100% - var(--pad-x) * 2))', ...pp}}>
        <div className="dk-anim d2" data-dashi-theme09-immersive-card={textPos} style={{display:'flex', flexDirection:'column',
              gap:16, padding:'34px 40px', borderRadius:'var(--dk-radius)',
              alignItems:centered?'center':'flex-start', textAlign:centered?'center':'left',
              background:'linear-gradient(150deg, rgba(10,18,48,.66), rgba(6,12,34,.5))',
              backdropFilter:'blur(16px)', WebkitBackdropFilter:'blur(16px)',
              border:`1px solid ${focus?hexA(ACC,.55):'rgba(255,255,255,.16)'}`,
              boxShadow: focus?`0 30px 70px rgba(3,8,30,.55), 0 0 0 1px ${hexA(ACC,.3)}`:'0 30px 70px rgba(3,8,30,.55)'}}>
          <h2 style={{fontFamily:'var(--font-cn)', fontWeight:900, fontSize:84, lineHeight:1.02, letterSpacing:'.02em',
              color:'#fff', textWrap:'balance', margin:0}}>{title}</h2>
          <div style={{fontFamily:'var(--font-display)', fontWeight:600, fontSize:'var(--type-sub)', letterSpacing:'.06em', color:ACC}}>{titleEN}</div>
          <p style={{fontSize:'var(--type-body)', lineHeight:1.55, color:'rgba(255,255,255,.88)', textWrap:'pretty', margin:0}}>{paragraph}</p>
          {tg.length > 0 && (
            <div style={{display:'flex', gap:10, flexWrap:'wrap', justifyContent: centered?'center':'flex-start', marginTop:6}}>
              {tg.map((t,i)=>(
                <span key={i} style={{padding:'7px 16px', borderRadius:999, fontSize:'var(--type-tiny)', fontWeight:600,
                    color:'#fff', background:hexA(ACC,.16), border:`1px solid ${hexA(ACC,.45)}`}}>{t}</span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* 底部缩略轨 */}
      {hasRail && ImageStrip && (
        <div className="dk-anim d3" style={{position:'absolute', left:'var(--pad-x)', right:'var(--pad-x)', bottom:44}}>
          <ImageStrip idPrefix="immersive-rail" count={nImg-1} width={1700} maxH={130} theme={props.theme}
            placeholders={[
              { ratio:1.5, label:'细节 / detail' },
              { ratio:1.33, label:'场景 / scene' },
              { ratio:1.5, label:'产品 / product' },
            ]} />
        </div>
      )}
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

export default SlideImmersive;

/* 满幅裁切图片槽：始终铺满容器（objectFit:cover，按需裁切），
   保留拖入/点击上传 + localStorage 持久化（键格式兼容 ImageStrip）。 */
function CoverSlot({ idPrefix, placeholder, accent }){
  const key = `${idPrefix}-0`;
  const load = ()=>{ try{ const r = localStorage.getItem(key); if(r) return JSON.parse(r); }catch(e){} return null; };
  const [data, setData] = React.useState(load);
  const [drag, setDrag] = React.useState(false);
  const [hover, setHover] = React.useState(false);
  const inputRef = React.useRef(null);
  const openPicker = (e)=>{ e.stopPropagation(); inputRef.current && inputRef.current.click(); };

  const save = (d)=>{ setData(d); try{ d?localStorage.setItem(key, JSON.stringify(d)):localStorage.removeItem(key); }catch(e){} };
  const ingest = (file)=>{
    if(!file || !/^(image|video)\//.test(file.type || '')) return;
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
      style={{position:'absolute', inset:0, overflow:'hidden', cursor:'pointer',
        background: data ? '#03081e'
          : 'repeating-linear-gradient(135deg, rgba(255,255,255,.05) 0 18px, rgba(255,255,255,.02) 18px 36px)',
        boxShadow: drag ? `inset 0 0 0 3px ${accent}` : 'none'}}>
      <input ref={inputRef} type="file" accept="image/*,video/mp4,video/webm,video/quicktime,video/*" style={{display:'none'}}
             onChange={(e)=>{ ingest(e.target.files[0]); e.target.value=''; }} onClick={(e)=>e.stopPropagation()} />
      {data ? (
        data.kind === 'video'
          ? <video src={data.url} muted playsInline loop autoPlay preload="metadata" style={{width:'100%', height:'100%', objectFit:'cover', display:'block'}} />
          : <img src={data.url} alt="" style={{width:'100%', height:'100%', objectFit:'cover', display:'block'}} />
      ) : (
        <div style={{position:'absolute', inset:0, display:'flex', flexDirection:'column', alignItems:'center',
              justifyContent:'center', gap:16, textAlign:'center'}}>
          <span style={{width:60, height:60, borderRadius:16, display:'inline-flex', alignItems:'center', justifyContent:'center',
              border:'1px solid rgba(255,255,255,.28)', color:'var(--ink-dim)', fontSize:30}}>＋</span>
          <span style={{fontFamily:'var(--font-mono)', fontSize:18, letterSpacing:'.04em', color:'var(--ink-faint)'}}>{placeholder}</span>
          <span style={{fontFamily:'var(--font-mono)', fontSize:14, color:'rgba(255,255,255,.28)'}}>拖入或点击上传 · 满幅裁切</span>
        </div>
      )}
      {data && hover && (
        <button onClick={(e)=>{e.stopPropagation(); save(null);}}
          style={{position:'absolute', top:'calc(var(--pad-y))', right:'calc(var(--pad-x))', width:40, height:40, borderRadius:'50%',
            border:'none', background:'rgba(5,11,34,.7)', color:'#fff', cursor:'pointer', fontSize:18, zIndex:30,
            display:'inline-flex', alignItems:'center', justifyContent:'center', backdropFilter:'blur(6px)'}}>✕</button>
      )}
    </div>
  );
}

/* ── 模板参数 schema（自描述 · 迁移即带控件；Tweaks 由此自动生成） ── */
export const slideSpec = { defaults: defaultProps, slot:'immersive', name:'全幅图景 · Immersive', controls:[
  UNICORN_BACKGROUND_CONTROL,
  createUnicornSceneControl(defaultProps.unicornScene),
  { prop:'imgCount', type:'slider', label:'图片槽数量', default:1, min:1, max:4, step:1 },
  { prop:'textPos', type:'radio', label:'文案位置', default:'左下', options:['左下','右下','居中'] },
  { prop:'tagCount', type:'slider', label:'数量', default:2, min:0, max:4, step:1, desc:'浮板标签数' },
  { prop:'showScrim', type:'toggle', label:'压暗层', default:true },
  { prop:'showRail', type:'toggle', label:'装饰图片', default:true, desc:'底部缩略轨' },
  { prop:'focus', type:'focus', label:'描边高亮', default:true },
]};
