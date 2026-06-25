import { useDeckStyles, deckTheme, deckLabel, SlideShell } from './DeckKit.jsx';
import { FillSlot } from './ImageStrip.jsx';
/* ============================================================================
   SlidePanorama — 全景横幅（影院级宽幅图带 · 上 kicker / 下 ticker · bg-night）
   标准 ES Module。图片用 FillSlot（满版裁切）。
   与 Immersive（整幅满屏 + 渐隐压暗 + 玻璃浮层）、Filmstrip（齿孔长卷）、
   CoverStory（杂志封面）刻意区分：本页为「居中的影院宽幅画带」——固定 2.39:1
   letterbox 黑边画框，可切 1–3 段连续画面，画框上方放超大叙事标题、下方一条
   等宽刻度走马灯，营造横向全景/转场气息。

   ── 可调参数（Props） ──────────────────────────────────────────────────────
   | prop        | 类型                          | 默认值 | 说明                            |
   | imgCount    | number (1–3)                  | 1      | 画带分段数（每段一个图片槽）    |
   | ticks       | {k,v}[]                       | 见下   | 底部走马灯刻度数据源            |
   | tickCount   | number (0–6)                  | 5      | 走马灯刻度数（装饰文案）        |
   | showLetterbox| boolean                      | true   | 上下黑边 letterbox              |
   | focus       | boolean                       | true   | 高亮某一段（描边强调）          |
   | focusIndex  | number (0-based)              | 0      | 高亮第几段                      |
   | labelType   | 'number'|'symbol'|'keyword'   | number | 段角标样式                      |
   | kicker/title/titleEN : 见下                                                 |
   | theme       | Partial<DeckTheme>            | —      | 设计令牌覆盖                    |
   ========================================================================== */
/* ── 页面属性契约 · defaultProps ──────────────────────────────────────────
   本页全部可见文案 / 数据 / 图片槽默认值集中于此，直接编辑即可换内容；
   组件内部以 { ...defaultProps, ...props } 合并，外部传同名 props 逐项覆盖。 */
export const defaultProps = {
  imgCount: 1,
  tickCount: 5,
  showLetterbox: false,
  focus: true,
  focusIndex: 0,
  labelType: 'number',
  kicker: 'PANORAMA · 全景影像',
  title: '资本浪潮下的产业全景',
  titleEN: 'The Capital Landscape, End to End',
  ticks: [
      { k:'PANEL', v:'2.39 : 1' },
      { k:'湾区占比', v:'63.9%' },
      { k:'大模型', v:'43.3%' },
      { k:'单笔均值', v:'≈$10亿' },
      { k:'≥$1亿', v:'97 笔' },
      { k:'全年', v:'$970亿' },
    ],
};

function SlidePanorama(props){
  useDeckStyles(props.theme);
  const T = (deckTheme ? deckTheme(props.theme) : {});
  const ACC = T.accent || '#46e3c6';
  const BLUE = T.blue || '#4a86ff';

  const {
    imgCount, tickCount, showLetterbox, focus, focusIndex, labelType, kicker,
    title, titleEN, ticks,
  } = { ...defaultProps, ...props };

  const n = Math.max(1, Math.min(imgCount, 3));
  const fIdx = Math.max(0, Math.min(focusIndex, n - 1));
  const tk = ticks.slice(0, Math.max(0, Math.min(tickCount, ticks.length)));
  const lbl = (i)=> deckLabel(labelType, i, { keyword:'CUT' });

  return (
    <SlideShell pad={{x:96, y:78}} orbs={[
      { w:640, h:640, left:-200, bottom:-240, color:`radial-gradient(circle at 50% 50%, ${hexA(BLUE,.22)}, ${hexA(BLUE,0)} 70%)` },
      { w:420, h:420, right:-140, top:-120, color:`radial-gradient(circle at 50% 50%, ${hexA(ACC,.12)}, ${hexA(ACC,0)} 70%)` },
    ]}>
      {/* 顶部 kicker + 巨号标题 */}
      <div className="dk-anim" style={{display:'flex', alignItems:'flex-end', justifyContent:'space-between', gap:30, flexShrink:0}}>
        <div>
          <div style={{fontFamily:'var(--font-mono)', fontSize:'var(--type-tiny)', letterSpacing:'.34em', color:ACC, marginBottom:14}}>{kicker}</div>
          <h2 className="dk-ink-grad" style={{fontFamily:'var(--font-cn)', fontWeight:900, fontSize:72, lineHeight:1.04, letterSpacing:'.01em', maxWidth:1180, textWrap:'balance'}}>{title}</h2>
        </div>
        <div style={{flexShrink:0, textAlign:'right', fontFamily:'var(--font-display)', fontWeight:800, fontSize:'var(--type-small)', color:'var(--ink-faint)', letterSpacing:'.04em', maxWidth:360, lineHeight:1.3}}>{titleEN}</div>
      </div>

      {/* 影院宽幅画带 */}
      <div className="dk-anim d1" style={{flex:'1 1 0', minHeight:0, margin:'30px 0 26px', display:'flex', alignItems:'center'}}>
        <div style={{width:'100%', aspectRatio:'2.39 / 1', maxHeight:'100%', margin:'0 auto', position:'relative',
              borderRadius:18, overflow:'hidden', display:'flex', gap: showLetterbox?0:6,
              background:'#01030a', padding: showLetterbox?'0':'0',
              boxShadow:`0 40px 110px rgba(2,6,24,.7), 0 0 0 1px rgba(255,255,255,.08)`}}>
          {/* letterbox 黑边 */}
          {showLetterbox && <div style={{position:'absolute', left:0, right:0, top:0, height:'8.5%', background:'#000', zIndex:6, pointerEvents:'none'}}></div>}
          {showLetterbox && <div style={{position:'absolute', left:0, right:0, bottom:0, height:'8.5%', background:'#000', zIndex:6, pointerEvents:'none'}}></div>}
          {Array.from({length:n}).map((_,i)=>{
            const hot = focus && i===fIdx;
            return (
              <div key={i} style={{flex:'1 1 0', position:'relative', overflow:'hidden',
                    boxShadow: (i<n-1 ? 'inset -1px 0 0 rgba(0,0,0,.6)' : 'none')}}>
                <FillSlot idPrefix="panorama" idx={i} placeholder={'全景画面 / panorama '+(i+1)} accent={ACC} theme={props.theme} />
                {/* 焦点描边：内缩 + 圆角，避免被画带外圆角裁切 */}
                {hot && <div style={{position:'absolute', inset:4, border:`3px solid ${ACC}`, borderRadius:12, pointerEvents:'none', zIndex:8, boxShadow:`0 0 18px ${hexA(ACC,.5)}`}}></div>}
                {/* 段角标 */}
                {n>1 && (
                  <span style={{position:'absolute', top:'12%', left:14, zIndex:7, minWidth:34, height:34, padding:'0 9px', borderRadius:9,
                      display:'inline-flex', alignItems:'center', justifyContent:'center', fontFamily:'var(--font-display)', fontWeight:900,
                      fontSize:15, color: hot?'#02040c':'#fff', background: hot?ACC:'rgba(3,7,22,.6)',
                      border:`1px solid ${hot?ACC:'rgba(255,255,255,.3)'}`, backdropFilter:'blur(4px)', pointerEvents:'none'}}>{lbl(i)}</span>
                )}
              </div>
            );
          })}
          {/* 左右渐隐压暗 */}
          <div style={{position:'absolute', inset:0, zIndex:5, pointerEvents:'none',
                background:'linear-gradient(90deg, rgba(1,3,10,.4) 0%, rgba(1,3,10,0) 14%, rgba(1,3,10,0) 86%, rgba(1,3,10,.4) 100%)'}}></div>
        </div>
      </div>

      {/* 底部等宽走马灯刻度 */}
      {tk.length > 0 && (
        <div className="dk-anim d2" style={{flexShrink:0, display:'flex', alignItems:'stretch', borderTop:`1px solid ${hexA(ACC,.3)}`, borderBottom:`1px solid ${hexA(ACC,.3)}`}}>
          {tk.map((t,i)=>(
            <div key={i} style={{flex:'1 1 0', padding:'16px 22px', display:'flex', flexDirection:'column', gap:5,
                  borderLeft: i? '1px solid rgba(255,255,255,.1)':'none'}}>
              <span style={{fontFamily:'var(--font-mono)', fontSize:13, letterSpacing:'.16em', color:'var(--ink-faint)'}}>{t.k}</span>
              <span style={{fontFamily:'var(--font-display)', fontWeight:900, fontSize:'var(--type-sub)', color: i===0?ACC:'#fff', lineHeight:1}}>{t.v}</span>
            </div>
          ))}
        </div>
      )}
    </SlideShell>
  );

  function hexA(hex, a){
    if(!hex || hex[0] !== '#') return hex;
    const x = hex.slice(1); const f = x.length===3 ? x.split('').map(c=>c+c).join('') : x;
    return `rgba(${parseInt(f.slice(0,2),16)},${parseInt(f.slice(2,4),16)},${parseInt(f.slice(4,6),16)},${a})`;
  }
}

export default SlidePanorama;

/* ── 模板参数 schema（自描述 · 迁移即带控件；Tweaks 由此自动生成） ── */
export const slideSpec = { defaults: defaultProps, slot:'panorama', name:'全景横幅 · Panorama', controls:[
  { prop:'imgCount', type:'slider', label:'图片槽数量', default:1, min:1, max:3, step:1 },
  { prop:'tickCount', type:'slider', label:'装饰文案', default:5, min:0, max:6, step:1, desc:'底部走马灯刻度数' },
  { prop:'showLetterbox', type:'toggle', label:'影院黑边', default:false },
  { prop:'labelType', type:'labelType', label:'标签类型', default:'数字' },
  { prop:'focus', type:'focus', label:'重点信息 Focus', default:true },
  { prop:'focusIndex', type:'slider', label:'焦点序号', default:0, min:0, max:(p)=>p.imgCount-1, maxFromKey:'imgCount', maxFromKeyOffset:-1, displayOffset:1, step:1, showIf:(p)=>p.focus && p.imgCount>1 },
]};
