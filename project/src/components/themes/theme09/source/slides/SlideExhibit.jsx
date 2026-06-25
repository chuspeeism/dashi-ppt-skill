import { useDeckStyles, deckTheme, deckLabel, SlideShell, SlideHead } from './DeckKit.jsx';
import { FillSlot } from './ImageStrip.jsx';
/* ============================================================================
   SlideExhibit — 美术馆陈列墙（裱框悬挂 + 投影 + 展签 placard + 地平线）
   标准 ES Module。图片用 FillSlot（满版裁切，铺满每个画框）。
   与 Gallery（justified 单行 + 说明）、Mosaic（接触印相裁切角框）、OverlayCards
   （满版叠印文案）刻意区分：本页是「美术馆挂画墙」——每幅作品有米色/深色裱衬
   (passe-partout) 画框、墙面投影、画框下方独立金属展签（编号 / 题名 / 媒材），
   底部一条地平线渐变把作品「挂」在展墙上，焦点作品镶金边。

   ── 可调参数（Props） ──────────────────────────────────────────────────────
   | prop       | 类型                          | 默认值 | 说明                              |
   | works      | {title,medium}[]              | 见下   | 展签数据源（题名 + 媒材）         |
   | imgCount   | number (2–4)                  | 3      | 画框数量（图片槽数）              |
   | matStyle   | '浅裱'|'深裱'                 | '浅裱' | 裱衬色（passe-partout）           |
   | showPlacard| boolean                       | true   | 展签牌（装饰文案）                |
   | focus      | boolean                       | true   | 高亮某一幅（镶金边）              |
   | focusIndex | number (0-based)              | 0      | 高亮第几幅                        |
   | labelType  | 'number'|'symbol'|'keyword'   | number | 展签编号样式                      |
   | head       | {no,en,cn}                    | 见下   | 页眉                              |
   | theme      | Partial<DeckTheme>            | —      | 设计令牌覆盖                      |
   ========================================================================== */
/* ── 页面属性契约 · defaultProps ──────────────────────────────────────────
   本页全部可见文案 / 数据 / 图片槽默认值集中于此，直接编辑即可换内容；
   组件内部以 { ...defaultProps, ...props } 合并，外部传同名 props 逐项覆盖。 */
export const defaultProps = {
  imgCount: 3,
  matStyle: '浅裱',
  showPlacard: true,
  focus: true,
  focusIndex: 0,
  labelType: 'number',
  head: { no:'陈列', en:'Exhibit · Gallery Wall', cn:'代表企业陈列墙' },
  works: [
      { title:'前沿大模型',   medium:'Foundation Model · 旗舰' },
      { title:'算力基础设施', medium:'Compute Infrastructure' },
      { title:'垂直应用层',   medium:'Vertical Applications' },
      { title:'企业级服务',   medium:'Enterprise Software' },
    ],
};

function SlideExhibit(props){
  useDeckStyles(props.theme);
  const T = (deckTheme ? deckTheme(props.theme) : {});
  const ACC = T.accent || '#46e3c6';
  const BLUE = T.blue || '#4a86ff';
  const navy = T.navy900 || '#050b22';

  const {
    imgCount, matStyle, showPlacard, focus, focusIndex, labelType, head,
    works,
  } = { ...defaultProps, ...props };

  const n = Math.max(2, Math.min(imgCount, 4));
  const data = works.slice(0, n);
  const fIdx = Math.max(0, Math.min(focusIndex, n - 1));
  const lbl = (i)=> deckLabel(labelType, i, { keyword:'NO' });
  const dark = matStyle === '深裱';
  // 策展式画框比例（高低错落，制造真实挂画节奏）
  const ASPECTS = [0.82, 1.18, 0.9, 1.3];
  const mat = dark ? '#0c1430' : 'linear-gradient(160deg,#f3f1e8,#dad6c6)';
  const matLine = dark ? 'rgba(255,255,255,.14)' : 'rgba(70,60,40,.28)';

  return (
    <SlideShell orbs={[{ w:560, h:560, right:-180, top:-160,
        color:`radial-gradient(circle at 50% 50%, ${hexA(BLUE,.16)}, ${hexA(BLUE,0)} 70%)` }]}>
      <SlideHead no={head.no} en={head.en} cn={head.cn}
        badge={labelType==='keyword'?'WALL':labelType==='symbol'?'■':head.no} />

      {/* 展墙区 */}
      <div style={{flex:'1 1 0', minHeight:0, marginTop:30, position:'relative', display:'flex',
            alignItems:'center', justifyContent:'center'}}>
        <div className="dk-anim d1" style={{display:'flex', gap:54, alignItems:'flex-end', justifyContent:'center',
              height:'78%', width:'100%'}}>
          {data.map((w,i)=>{
            const hot = focus && i===fIdx;
            const asp = ASPECTS[i % ASPECTS.length];
            return (
              <div key={i} className={'dk-anim d'+Math.min(i+2,6)} style={{display:'flex', flexDirection:'column', alignItems:'center',
                    height:'100%', justifyContent:'flex-end', flex:'0 1 auto', maxWidth:'30%'}}>
                {/* 画框 */}
                <div style={{position:'relative', height:hot?'100%':'90%', aspectRatio:String(asp),
                      padding: dark?14:18, borderRadius:4, background:mat,
                      boxShadow: hot
                        ? `0 38px 70px rgba(2,6,22,.6), 0 0 0 4px ${ACC}, inset 0 0 0 1px ${matLine}`
                        : `0 30px 56px rgba(2,6,22,.55), inset 0 0 0 1px ${matLine}`}}>
                  <div style={{position:'relative', width:'100%', height:'100%', overflow:'hidden', background:'#0a1330',
                        boxShadow:'inset 0 2px 10px rgba(0,0,0,.45)'}}>
                    <FillSlot idPrefix="exhibit" idx={i} placeholder={w.title+' / artwork '+(i+1)} accent={ACC} theme={props.theme} />
                  </div>
                </div>

                {/* 展签牌 */}
                {showPlacard && (
                  <div style={{marginTop:18, minWidth:160, maxWidth:240, padding:'11px 18px', borderRadius:8, textAlign:'center',
                        background: hot?hexA(ACC,.16):'rgba(255,255,255,.06)', border:`1px solid ${hot?ACC:'rgba(255,255,255,.16)'}`,
                        backdropFilter:'blur(6px)'}}>
                    <div style={{display:'flex', alignItems:'center', justifyContent:'center', gap:9}}>
                      <span style={{fontFamily:'var(--font-display)', fontWeight:900, fontSize:15, width:28, height:28, borderRadius:7,
                          display:'inline-flex', alignItems:'center', justifyContent:'center',
                          color: hot?navy:ACC, background: hot?ACC:hexA(ACC,.14), border:`1px solid ${hexA(ACC,.5)}`}}>{lbl(i)}</span>
                      <span style={{fontFamily:'var(--font-cn)', fontWeight:900, fontSize:22, color: hot?ACC:'#fff', whiteSpace:'nowrap'}}>{w.title}</span>
                    </div>
                    <div style={{fontFamily:'var(--font-mono)', fontSize:12.5, letterSpacing:'.04em', color:'var(--ink-faint)', marginTop:6}}>{w.medium}</div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </SlideShell>
  );

  function hexA(hex, a){
    if(!hex || hex[0] !== '#') return hex;
    const x = hex.slice(1); const f = x.length===3 ? x.split('').map(c=>c+c).join('') : x;
    return `rgba(${parseInt(f.slice(0,2),16)},${parseInt(f.slice(2,4),16)},${parseInt(f.slice(4,6),16)},${a})`;
  }
}

export default SlideExhibit;

/* ── 模板参数 schema（自描述 · 迁移即带控件；Tweaks 由此自动生成） ── */
export const slideSpec = { defaults: defaultProps, slot:'exhibit', name:'陈列墙 · Exhibit', controls:[
  { prop:'imgCount', type:'slider', label:'图片槽数量', default:3, min:2, max:4, step:1 },
  { prop:'matStyle', type:'radio', label:'裱衬色', default:'浅裱', options:['浅裱','深裱'] },
  { prop:'showPlacard', type:'toggle', label:'装饰文案', default:true, desc:'展签牌' },
  { prop:'labelType', type:'labelType', label:'标签类型', default:'数字' },
  { prop:'focus', type:'focus', label:'重点信息 Focus', default:true },
  { prop:'focusIndex', type:'slider', label:'焦点序号', default:0, min:0, max:(p)=>p.imgCount-1, maxFromKey:'imgCount', maxFromKeyOffset:-1, displayOffset:1, step:1, showIf:(p)=>p.focus },
]};
