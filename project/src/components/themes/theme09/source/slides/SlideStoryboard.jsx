import { useDeckStyles, deckTheme, deckLabel, SlideShell, SlideHead } from './DeckKit.jsx';
import { FillSlot } from './ImageStrip.jsx';
/* ============================================================================
   SlideStoryboard — 分镜脚本（导演分镜板 · 16:9 镜头格 + 景别标 + 镜头说明 + 流向箭头）
   标准 ES Module。图片用 FillSlot（满版裁切，铺满 16:9 镜头格）。
   与 Filmstrip（连续齿孔长卷）、Bento（便当网格）、Gallery（justified 单行）刻意
   区分：本页是「电影分镜板」——每格 16:9 镜头画面 + 镜号 + 景别徽标（远/中/近）+
   下方镜头调度说明；≤4 格单排并以箭头串起拍摄流向，5–6 格转 3 列双排按镜号叙序。

   ── 可调参数（Props） ──────────────────────────────────────────────────────
   | prop       | 类型                          | 默认值 | 说明                              |
   | shots      | {shot,desc}[]                 | 见下   | 镜头数据源（景别 + 调度说明）     |
   | imgCount   | number (3–6)                  | 4      | 镜头格数（图片槽数）              |
   | showFlow   | boolean                       | true   | 单排时的流向箭头（装饰）          |
   | showDesc   | boolean                       | true   | 镜头调度说明                      |
   | focus      | boolean                       | true   | 高亮某一镜（镶边）                |
   | focusIndex | number (0-based)              | 0      | 高亮第几镜                        |
   | labelType  | 'number'|'symbol'|'keyword'   | number | 镜号样式                          |
   | head       | {no,en,cn}                    | 见下   | 页眉                              |
   | theme      | Partial<DeckTheme>            | —      | 设计令牌覆盖                      |
   ========================================================================== */
/* ── 页面属性契约 · defaultProps ──────────────────────────────────────────
   本页全部可见文案 / 数据 / 图片槽默认值集中于此，直接编辑即可换内容；
   组件内部以 { ...defaultProps, ...props } 合并，外部传同名 props 逐项覆盖。 */
export const defaultProps = {
  imgCount: 4,
  showFlow: true,
  showDesc: true,
  focus: true,
  focusIndex: 0,
  labelType: 'number',
  head: { no:'分镜', en:'Storyboard · Shot Sequence', cn:'资本叙事 · 分镜脚本' },
  shots: [
      { shot:'远景 WIDE',  desc:'巨额融资拉开序幕，行业全景铺陈。' },
      { shot:'中景 MID',   desc:'头部玩家聚焦，赛道格局成形。' },
      { shot:'近景 CU',    desc:'单笔交易细节，估值与轮次。' },
      { shot:'特写 ECU',   desc:'关键数字定格，结论呼之欲出。' },
      { shot:'过肩 OTS',   desc:'投资人视角，风险与回报权衡。' },
      { shot:'空镜 INSERT',desc:'尾声留白，留给下一年的悬念。' },
    ],
};

function SlideStoryboard(props){
  useDeckStyles(props.theme);
  const T = (deckTheme ? deckTheme(props.theme) : {});
  const ACC = T.accent || '#46e3c6';
  const BLUE = T.blue || '#4a86ff';
  const navy = T.navy900 || '#050b22';

  const {
    imgCount, showFlow, showDesc, focus, focusIndex, labelType, head,
    shots,
  } = { ...defaultProps, ...props };

  const n = Math.max(3, Math.min(imgCount, 6));
  const data = shots.slice(0, n);
  const fIdx = Math.max(0, Math.min(focusIndex, n - 1));
  const lbl = (i)=> deckLabel(labelType, i, { keyword:'SH' });
  const singleRow = n <= 4;

  const Panel = ({ s, i, grid })=>{
    const hot = focus && i===fIdx;
    return (
      <div style={{flex: singleRow?'1 1 0':'none', ...(grid?{height:'100%'}:{}), display:'flex', flexDirection:'column', minWidth:0, minHeight:0,
            borderRadius:14, overflow:'hidden', background:'rgba(8,16,42,.5)',
            border:`1px solid ${hot?ACC:'rgba(255,255,255,.14)'}`,
            boxShadow: hot ? `0 26px 60px ${hexA(ACC,.28)}, 0 0 0 2px ${ACC}` : '0 18px 44px rgba(3,8,30,.46)'}}>
        {/* 镜头条 */}
        <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', padding:'9px 14px',
              background: hot?hexA(ACC,.16):'rgba(3,8,28,.55)', borderBottom:`1px solid ${hot?hexA(ACC,.5):'rgba(255,255,255,.1)'}`}}>
          <span style={{fontFamily:'var(--font-display)', fontWeight:900, fontSize:15, minWidth:30, height:30, padding:'0 8px', borderRadius:8,
              display:'inline-flex', alignItems:'center', justifyContent:'center',
              color: hot?navy:ACC, background: hot?ACC:hexA(ACC,.14), border:`1px solid ${hexA(ACC,.5)}`}}>{lbl(i)}</span>
          <span style={{fontFamily:'var(--font-mono)', fontSize:13, letterSpacing:'.08em', color: hot?ACC:'var(--ink-dim)'}}>{s.shot}</span>
        </div>
        {/* 16:9 画面（单排定比；双排时填充剩余高度，绝不溢出） */}
        <div style={{position:'relative', width:'100%', ...(grid?{flex:'1 1 0', minHeight:0}:{aspectRatio:'16 / 9'}), background:'#02050f'}}>
          <FillSlot idPrefix="storyboard" idx={i} placeholder={'镜头 '+(i+1)} accent={ACC} theme={props.theme} />
        </div>
        {/* 调度说明 */}
        {showDesc && (
          <div style={{padding:'12px 16px', borderTop:'1px solid rgba(255,255,255,.08)', flex: grid?'0 0 auto':'1 1 auto', display:'flex', alignItems:'center'}}>
            <p style={{fontFamily:'var(--font-cn)', fontSize:18, lineHeight:1.4, color:'rgba(255,255,255,.82)', textWrap:'pretty'}}>{s.desc}</p>
          </div>
        )}
      </div>
    );
  };

  const Arrow = ()=> (
    <div style={{flexShrink:0, alignSelf:'center', display:'flex', alignItems:'center', justifyContent:'center',
          width:38, height:38, borderRadius:'50%', color:ACC, fontSize:20, fontWeight:900,
          border:`1px solid ${hexA(ACC,.4)}`, background:hexA(ACC,.08)}}>→</div>
  );

  return (
    <SlideShell orbs={[{ w:520, h:520, left:-170, bottom:-180,
        color:`radial-gradient(circle at 50% 50%, ${hexA(BLUE,.18)}, ${hexA(BLUE,0)} 70%)` }]}>
      <SlideHead no={head.no} en={head.en} cn={head.cn}
        badge={labelType==='keyword'?'CUTS':labelType==='symbol'?'▲':head.no} />

      <div className="dk-anim d1" style={{flex:'1 1 0', minHeight:0, marginTop:30, display:'flex', alignItems: singleRow?'center':'stretch'}}>
        {singleRow ? (
          <div style={{display:'flex', gap: showFlow?16:18, alignItems:'stretch', width:'100%'}}>
            {data.map((s,i)=>(
              <React.Fragment key={i}>
                <Panel s={s} i={i} />
                {showFlow && i<data.length-1 && <Arrow/>}
              </React.Fragment>
            ))}
          </div>
        ) : (
          <div style={{display:'grid', gridTemplateColumns:'repeat(3,1fr)', gridTemplateRows:'1fr 1fr', gap:20, width:'100%', height:'100%'}}>
            {data.map((s,i)=> <Panel key={i} s={s} i={i} grid />)}
          </div>
        )}
      </div>
    </SlideShell>
  );

  function hexA(hex, a){
    if(!hex || hex[0] !== '#') return hex;
    const x = hex.slice(1); const f = x.length===3 ? x.split('').map(c=>c+c).join('') : x;
    return `rgba(${parseInt(f.slice(0,2),16)},${parseInt(f.slice(2,4),16)},${parseInt(f.slice(4,6),16)},${a})`;
  }
}

export default SlideStoryboard;

/* ── 模板参数 schema（自描述 · 迁移即带控件；Tweaks 由此自动生成） ── */
export const slideSpec = { defaults: defaultProps, slot:'storyboard', name:'分镜脚本 · Storyboard', controls:[
  { prop:'imgCount', type:'slider', label:'图片槽数量', default:4, min:3, max:6, step:1 },
  { prop:'showFlow', type:'toggle', label:'装饰文案', default:true, desc:'单排流向箭头' },
  { prop:'showDesc', type:'toggle', label:'镜头说明', default:true },
  { prop:'labelType', type:'labelType', label:'标签类型', default:'数字' },
  { prop:'focus', type:'focus', label:'重点信息 Focus', default:true },
  { prop:'focusIndex', type:'slider', label:'焦点序号', default:0, min:0, max:(p)=>p.imgCount-1, maxFromKey:'imgCount', maxFromKeyOffset:-1, displayOffset:1, step:1, showIf:(p)=>p.focus },
]};
