/* ImageStrip — 自适应图片槽（正片式 justified 画廊）
   需求：用户上传图片后，图片槽按图片真实比例自适应改变宽高；
        支持数量 0–n；任意数量 / 比例下保持构图齐整美观。
   标准 ES Module：`export default ImageStrip`；仅依赖 DeckKit 的 useDeckStyles。

   Props:
     idPrefix   : string  本地存储键前缀（确保各页 / 各槽唯一、刷新不丢）
     count      : number  槽数量 (0–n)
     width      : number  可用总宽（设计像素），用于 justified 计算
     maxH       : number  单行最大高度（避免少量宽图过大）
     gap        : number  槽间距
     placeholders : {ratio,label}[]  各槽空状态的默认比例与说明文案
*/
import React from 'react';
import { useDeckStyles } from './DeckKit.jsx';

export const ImageStripMediaContext = React.createContext(null);

function normalizeMediaItem(value){
  if(!value) return null;
  if(typeof value === 'string') return { src:value, kind:looksLikeVideoSrc(value) ? 'video' : 'image' };
  if(typeof value === 'object'){
    const src = value.src || value.url || value.u;
    if(!src) return null;
    const kind = value.kind || (String(value.type || src).startsWith('video/') || looksLikeVideoSrc(src) ? 'video' : 'image');
    return { ...value, src, kind };
  }
  return null;
}

function looksLikeVideoSrc(src){
  return String(src || '').startsWith('data:video/')
    || /\.(mp4|m4v|mov|webm|ogv)(?:[?#].*)?$/i.test(String(src || ''));
}

function mediaToSlotData(value){
  const item = normalizeMediaItem(value);
  if(!item?.src) return null;
  return {
    url:item.src,
    aspect:item.aspect || item.ratio || item.ar || 1.5,
    kind:item.kind || 'image',
    type:item.type,
  };
}

function slotDataToMedia(data){
  if(!data?.url) return null;
  return {
    src:data.url,
    kind:data.kind || (String(data.type || data.url).startsWith('video/') || looksLikeVideoSrc(data.url) ? 'video' : 'image'),
    type:data.type,
    ratio:data.aspect || null,
    ar:data.aspect || null,
  };
}

function ImageStrip(props){
  useDeckStyles(props.theme);
  const {
    idPrefix = 'img',
    count = 3,
    width = 1680,
    maxH = 360,
    gap = 22,
    placeholders = [
      { ratio: 1.50, label: '公司实景 / office' },
      { ratio: 0.78, label: '创始人 / portrait' },
      { ratio: 1.33, label: '产品截图 / product' },
      { ratio: 1.0,  label: '团队 / team' },
      { ratio: 1.62, label: '场景 / scene' },
    ],
  } = props;

  const n = Math.max(0, Math.min(count, 6));
  const media = React.useContext(ImageStripMediaContext);
  const hasHostMedia = Boolean(media?.get || media?.set);
  const slotKey = (i)=> `${idPrefix}-${i}`;

  const load = (i)=>{
    if(i >= n) return null;
    if(hasHostMedia) return mediaToSlotData(media?.get?.(slotKey(i), i));
    try{
      const raw = localStorage.getItem(slotKey(i));
      if(raw) return JSON.parse(raw);
    }catch(e){}
    return null;
  };
  const [slots, setSlots] = React.useState(()=> Array.from({length:6}, (_,i)=> load(i)));

  React.useEffect(()=>{
    if(!hasHostMedia) return;
    setSlots(prev=> prev.map((item, i)=> i < n ? mediaToSlotData(media?.get?.(slotKey(i), i)) || null : null));
  }, [hasHostMedia, media, idPrefix, n]);

  const setSlot = (i, data)=>{
    setSlots(prev=>{
      const next = prev.slice();
      next[i] = data;
      return next;
    });
    if(media?.set) media.set(slotKey(i), i, slotDataToMedia(data));
    else {
      try{
        if(data) localStorage.setItem(slotKey(i), JSON.stringify(data));
        else localStorage.removeItem(slotKey(i));
      }catch(e){}
    }
  };

  const ingest = (i, file)=>{
    if(!file || !/^(image|video)\//.test(file.type || '')) return;
    if(hasHostMedia && media?.drop){
      media.drop(slotKey(i), i, file);
      return;
    }
    const reader = new FileReader();
    reader.onload = (e)=>{
      const url = e.target.result;
      if(file.type.startsWith('video/')){
        const video = document.createElement('video');
        video.preload = 'metadata';
        video.onloadedmetadata = ()=> setSlot(i, { url, aspect: (video.videoWidth && video.videoHeight) ? video.videoWidth/video.videoHeight : 16/9, kind:'video', type:file.type });
        video.onerror = ()=> setSlot(i, { url, aspect: 16/9, kind:'video', type:file.type });
        video.src = url;
        return;
      }
      const im = new Image();
      im.onload = ()=> setSlot(i, { url, aspect: im.naturalWidth/im.naturalHeight, kind:'image', type:file.type });
      im.src = url;
    };
    reader.readAsDataURL(file);
  };

  if(n === 0) return null;

  // justified 行布局：以图片真实比例求和，按可用宽反推行高（封顶 maxH），
  // 宽度 = 行高 × 比例，从而每个槽都精确贴合自身图片比例。
  const aspects = [];
  for(let i=0;i<n;i++){
    const s = slots[i];
    const ph = placeholders[i % placeholders.length];
    aspects.push(s ? s.aspect : ph.ratio);
  }
  const availW = width - gap*(n-1);
  const sumA = aspects.reduce((a,b)=>a+b, 0);
  const rowH = Math.min(maxH, availW / sumA);

  return (
    <div
      data-dashi-theme09-image-strip="true"
      style={{
        display:'flex', flexWrap:'nowrap', gap, justifyContent:'center', alignItems:'flex-start',
        width:'100%', maxWidth:width, height:Math.round(rowH), overflow:'hidden',
      }}
    >
      {aspects.map((asp, i)=>(
        <ImageSlotCell
          key={i}
          data={slots[i]}
          aspect={asp}
          height={rowH}
          placeholder={placeholders[i % placeholders.length]}
          onFile={(f)=>ingest(i, f)}
          onClear={()=>setSlot(i, null)}
        />
      ))}
    </div>
  );
}

function ImageSlotCell({ data, aspect, height, placeholder, onFile, onClear }){
  const inputRef = React.useRef(null);
  const [hover, setHover] = React.useState(false);
  const [drag, setDrag] = React.useState(false);
  const w = Math.round(height * aspect);
  const openPicker = (e)=>{ e.stopPropagation(); inputRef.current && inputRef.current.click(); };

  return (
    <div
      data-dashi-theme09-image-slot="true"
      onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}
      onPointerDown={(e)=>e.stopPropagation()}
      onMouseDown={(e)=>e.stopPropagation()}
      onDragOver={(e)=>{e.preventDefault(); e.stopPropagation(); setDrag(true);}}
      onDragLeave={(e)=>{e.stopPropagation(); setDrag(false);}}
      onDrop={(e)=>{e.preventDefault(); e.stopPropagation(); setDrag(false); onFile(e.dataTransfer.files[0]);}}
      onClick={openPicker}
      style={{
        position:'relative', width:w, height:Math.round(height), flex:`0 1 ${w}px`, minWidth:0,
        borderRadius:20, overflow:'hidden', cursor:'pointer',
        background: data ? '#0a1230'
          : 'repeating-linear-gradient(135deg, rgba(255,255,255,.05) 0 14px, rgba(255,255,255,.02) 14px 28px)',
        border: drag ? '2px solid var(--mint)' : '1px solid rgba(255,255,255,.18)',
        boxShadow: data ? '0 26px 60px rgba(3,8,30,.5)' : 'inset 0 1px 0 rgba(255,255,255,.12)',
        transition:'border-color .15s, box-shadow .15s',
      }}
    >
      <input ref={inputRef} type="file" accept="image/*,video/mp4,video/webm,video/quicktime,video/*" style={{display:'none'}}
             onChange={(e)=>{ onFile(e.target.files[0]); e.target.value=''; }} onClick={(e)=>e.stopPropagation()} />

      {data ? (
        data.kind === 'video'
          ? <video src={data.url} muted playsInline loop autoPlay preload="metadata" style={{width:'100%', height:'100%', objectFit:'cover', display:'block'}} />
          : <img src={data.url} alt="" style={{width:'100%', height:'100%', objectFit:'cover', display:'block'}} />
      ) : (
        <div style={{position:'absolute', inset:0, display:'flex', flexDirection:'column',
                     alignItems:'center', justifyContent:'center', gap:14, padding:18, textAlign:'center'}}>
          <span style={{width:48, height:48, borderRadius:14, display:'inline-flex', alignItems:'center',
                        justifyContent:'center', border:'1px solid rgba(255,255,255,.28)',
                        color:'var(--ink-dim)', fontSize:24}}>＋</span>
          <span style={{fontFamily:'var(--font-mono)', fontSize:16, letterSpacing:'.04em',
                        color:'var(--ink-faint)', lineHeight:1.4}}>{placeholder.label}</span>
          <span style={{fontFamily:'var(--font-mono)', fontSize:13, color:'rgba(255,255,255,.28)'}}>拖入或点击上传</span>
        </div>
      )}

      {data && hover && (
        <button onClick={(e)=>{e.stopPropagation(); onClear();}}
          style={{position:'absolute', top:12, right:12, width:34, height:34, borderRadius:'50%',
                  border:'none', background:'rgba(5,11,34,.7)', color:'#fff', cursor:'pointer',
                  fontSize:16, display:'inline-flex', alignItems:'center', justifyContent:'center',
                  backdropFilter:'blur(6px)'}}>✕</button>
      )}
    </div>
  );
}

/* ============================================================================
   FillSlot — 满版裁切单槽（objectFit:cover，按需裁切）
   与默认导出的 ImageStrip（保持真实比例的 justified 画廊）互补：用于「固定画框」
   版式（圆窗 / 拍立得 / 半幅主图 / 杂志格），图片铺满画框、按需裁切。
   填满父容器 —— 父元素需 position:relative 且有确定尺寸。
   上传 / 拖拽 / localStorage 持久化（键 `${idPrefix}-${idx}`，须全局唯一）。
   Props: idPrefix, idx, placeholder, accent, radius(px|'50%'), theme
   ========================================================================== */
export function FillSlot({ idPrefix='fill', idx=0, placeholder='图片 / image', accent='#46e3c6', radius=0, theme }){
  useDeckStyles(theme);
  const key = `${idPrefix}-${idx}`;
  const media = React.useContext(ImageStripMediaContext);
  const hasHostMedia = Boolean(media?.get || media?.set);
  const load = ()=>{
    if(hasHostMedia) return mediaToSlotData(media?.get?.(key, idx));
    try{ const r = localStorage.getItem(key); if(r) return JSON.parse(r); }catch(e){}
    return null;
  };
  const [data, setData] = React.useState(load);
  const [drag, setDrag] = React.useState(false);
  const [hover, setHover] = React.useState(false);
  const inputRef = React.useRef(null);
  const openPicker = (e)=>{ e.stopPropagation(); inputRef.current && inputRef.current.click(); };
  React.useEffect(()=>{
    if(!hasHostMedia) return;
    setData(mediaToSlotData(media?.get?.(key, idx)) || null);
  }, [hasHostMedia, media, key, idx]);
  const save = (d)=>{
    setData(d);
    if(media?.set) media.set(key, idx, slotDataToMedia(d));
    else {
      try{ d?localStorage.setItem(key, JSON.stringify(d)):localStorage.removeItem(key); }catch(e){}
    }
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
      data-dashi-theme09-image-slot="true"
      onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}
      onPointerDown={(e)=>e.stopPropagation()}
      onMouseDown={(e)=>e.stopPropagation()}
      onDragOver={(e)=>{e.preventDefault(); e.stopPropagation(); setDrag(true);}} onDragLeave={(e)=>{e.stopPropagation(); setDrag(false);}}
      onDrop={(e)=>{e.preventDefault(); e.stopPropagation(); setDrag(false); ingest(e.dataTransfer.files[0]);}}
      onClick={openPicker}
      style={{position:'absolute', inset:0, cursor:'pointer', overflow:'hidden', borderRadius:radius,
        background: data ? '#03081e' : 'repeating-linear-gradient(135deg, rgba(255,255,255,.06) 0 16px, rgba(255,255,255,.02) 16px 32px)',
        boxShadow: drag ? `inset 0 0 0 3px ${accent}` : 'none'}}>
      <input ref={inputRef} type="file" accept="image/*,video/mp4,video/webm,video/quicktime,video/*" style={{display:'none'}} onChange={(e)=>{ ingest(e.target.files[0]); e.target.value=''; }} onClick={(e)=>e.stopPropagation()} />
      {data ? (
        data.kind === 'video'
          ? <video src={data.url} muted playsInline loop autoPlay preload="metadata" style={{width:'100%', height:'100%', objectFit:'cover', display:'block'}} />
          : <img src={data.url} alt="" style={{width:'100%', height:'100%', objectFit:'cover', display:'block'}} />
      ) : (
        <div style={{position:'absolute', inset:0, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:10, padding:14, textAlign:'center'}}>
          <span style={{width:42, height:42, borderRadius:12, display:'inline-flex', alignItems:'center', justifyContent:'center',
              border:'1px solid rgba(255,255,255,.28)', color:'var(--ink-dim)', fontSize:22}}>＋</span>
          <span style={{fontFamily:'var(--font-mono)', fontSize:13, color:'var(--ink-faint)', lineHeight:1.4}}>{placeholder}</span>
        </div>
      )}
      {data && hover && (
        <button onClick={(e)=>{e.stopPropagation(); save(null);}}
          style={{position:'absolute', top:10, right:10, zIndex:5, width:32, height:32, borderRadius:'50%', border:'none',
            background:'rgba(5,11,34,.7)', color:'#fff', cursor:'pointer', fontSize:15, display:'inline-flex',
            alignItems:'center', justifyContent:'center', backdropFilter:'blur(6px)'}}>✕</button>
      )}
    </div>
  );
}

export default ImageStrip;
