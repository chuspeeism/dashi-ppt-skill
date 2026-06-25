import { useDeckStyles, deckTheme, deckLabel, SlideShell, SlideHead } from './DeckKit.jsx';
import ImageStrip from './ImageStrip.jsx';
/* ============================================================================
   SlideDiptych — 双联对照（并置图框 · 2–3 联 + 中缝枢标 + 各自图说）
   独立组件：仅靠 props 控制内容与样式；render 时自注入 DeckKit 基座样式。
   图片依赖 ImageStrip.jsx：每联各一槽，按真实比例自适应（居中于框内）。
   与 Gallery（单行多图 + 行下说明）、Mosaic（接触印相拼贴）刻意区分：本页为「并置
   对照」——等高画框两/三联，中缝一枚枢标，每联图下独立图说，强调横向比较关系。

   ── 可调参数（Props） ──────────────────────────────────────────────────────
   | prop       | 类型                          | 默认值 | 说明                              |
   | panels     | Panel[]                       | 见下   | 各联数据源（标题/图说/比例占位）  |
   | panelCount | number (2–3)                  | 2      | 展示联数（截取）                  |
   | pivot      | '对照'|'前后'|'VS'|'/'        | '对照' | 中缝枢标文字                      |
   | showSeam   | boolean                       | true   | 中缝枢标                          |
   | showCaption| boolean                       | true   | 各联图说（装饰文案）              |
   | focus      | boolean                       | true   | 高亮某一联                        |
   | focusIndex | number (0-based)              | 0      | 高亮第几联                        |
   | labelType  | 'number'|'symbol'|'keyword'   | number | 联序徽标样式                      |
   | head       | {no,en,cn}                    | 见下   | 页眉                              |
   | theme      | Partial<DeckTheme>            | —      | 设计令牌覆盖                      |
   Panel = { title, sub, caption, ratio, label }
   ========================================================================== */
/* ── 页面属性契约 · defaultProps ──────────────────────────────────────────
   本页全部可见文案 / 数据 / 图片槽默认值集中于此，直接编辑即可换内容；
   组件内部以 { ...defaultProps, ...props } 合并，外部传同名 props 逐项覆盖。 */
export const defaultProps = {
  panelCount: 2,
  pivot: '对照',
  showSeam: true,
  showCaption: true,
  focus: true,
  focusIndex: 0,
  labelType: 'number',
  head: { no:'10', en:'Side by Side', cn:'双联对照 · 影像比较' },
  panels: [
      { title:'卖铲子的人', sub:'算力基础设施', caption:'锁定长约与稀缺算力 —— 现金流确定、估值更稳的中游赢家。', ratio:1.34, label:'基础设施 / infra' },
      { title:'淘金的人',   sub:'头部大模型',   caption:'估值建立在未来市值上 —— 想象空间巨大，回撤风险同样显著。', ratio:1.34, label:'大模型 / model' },
      { title:'卖水的人',   sub:'数据与工具',   caption:'嵌入工作流、拿到续约的垂直应用，是更隐蔽的稳健下注。', ratio:1.34, label:'应用 / vertical' },
    ],
};

function SlideDiptych(props){
  useDeckStyles(props.theme);
  const T = (deckTheme ? deckTheme(props.theme) : {});
  const ACC = T.accent || '#46e3c6';
  const BLUE = T.blue || '#4a86ff';
  const navy = T.navy900 || '#050b22';

  const {
    panelCount, pivot, showSeam, showCaption, focus, focusIndex, labelType,
    head, panels,
  } = { ...defaultProps, ...props };

  const data = panels.slice(0, Math.max(2, Math.min(panelCount, panels.length)));
  const fIdx = Math.max(0, Math.min(focusIndex, data.length - 1));
  const lbl = (i)=> deckLabel(labelType, i, { keyword:'P' });

  return (
    <SlideShell orbs={[{ w:520, h:520, right:-160, top:-150,
        color:`radial-gradient(circle at 50% 50%, ${hexA(BLUE,.18)}, ${hexA(BLUE,0)} 70%)` }]}>
      <SlideHead no={head.no} en={head.en} cn={head.cn} badge={head.no} />

      <div style={{flex:'1 1 0', minHeight:0, display:'flex', alignItems:'stretch', gap:0, marginTop:26}}>
        {data.map((p,i)=>{
          const hot = focus && i===fIdx;
          return (
            <React.Fragment key={i}>
              {i>0 && showSeam && (
                <div style={{flexShrink:0, width:84, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:12}}>
                  <span style={{width:2, flex:1, background:'linear-gradient(180deg, rgba(255,255,255,0), rgba(255,255,255,.25))'}}></span>
                  <span className="dk-anim d2" style={{width:64, height:64, borderRadius:'50%', flexShrink:0, display:'inline-flex', alignItems:'center', justifyContent:'center',
                      fontFamily:'var(--font-cn)', fontWeight:900, fontSize:pivot.length>2?20:24, color:'#fff',
                      background:'linear-gradient(150deg, rgba(255,255,255,.16), rgba(255,255,255,.04))',
                      border:'1px solid rgba(255,255,255,.3)', boxShadow:'0 16px 40px rgba(3,8,30,.5)'}}>{pivot}</span>
                  <span style={{width:2, flex:1, background:'linear-gradient(180deg, rgba(255,255,255,.25), rgba(255,255,255,0))'}}></span>
                </div>
              )}
              <div className={'dk-anim d'+Math.min(i+1,6)} style={{flex:'1 1 0', minWidth:0, display:'flex', flexDirection:'column', gap:18}}>
                {/* 联标题 */}
                <div style={{display:'flex', alignItems:'center', gap:14, flexShrink:0}}>
                  <span style={{flexShrink:0, width:42, height:42, borderRadius:11, display:'inline-flex', alignItems:'center', justifyContent:'center',
                      fontFamily:'var(--font-display)', fontWeight:900, fontSize:18, color: hot?navy:ACC,
                      background: hot?ACC:hexA(ACC,.14), border:`1px solid ${hexA(ACC,.55)}`}}>{lbl(i)}</span>
                  <div>
                    <div style={{fontFamily:'var(--font-cn)', fontWeight:900, fontSize:'var(--type-sub)', color: hot?'#fff':'rgba(255,255,255,.94)', lineHeight:1.05}}>{p.title}</div>
                    <div style={{fontFamily:'var(--font-mono)', fontSize:13, letterSpacing:'.06em', color:'var(--ink-faint)', marginTop:2}}>{p.sub}</div>
                  </div>
                </div>
                {/* 画框 */}
                <div style={{flex:'1 1 0', minHeight:0, position:'relative', borderRadius:18, overflow:'hidden',
                      display:'flex', alignItems:'center', justifyContent:'center',
                      boxShadow: hot?`0 26px 60px ${hexA(ACC,.28)}, 0 0 0 2px ${ACC}`:'0 20px 48px rgba(3,8,30,.45)'}}>
                  {ImageStrip && (
                    <ImageStrip idPrefix={'diptych-'+i} count={1} width={820} maxH={520} theme={props.theme}
                      placeholders={[{ ratio:p.ratio||1.34, label:p.label||'影像 / image' }]} />
                  )}
                </div>
                {/* 图说 */}
                {showCaption && (
                  <p style={{flexShrink:0, fontSize:'var(--type-tiny)', lineHeight:1.5, color:'var(--ink-dim)', textWrap:'pretty',
                      borderLeft:`3px solid ${hot?ACC:'rgba(255,255,255,.18)'}`, paddingLeft:14, margin:0}}>{p.caption}</p>
                )}
              </div>
            </React.Fragment>
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

export default SlideDiptych;

/* ── 模板参数 schema（自描述 · 迁移即带控件；Tweaks 由此自动生成） ── */
export const slideSpec = { defaults: defaultProps, slot:'diptych', name:'双联对照 · Diptych', controls:[
  { prop:'panelCount', type:'slider', label:'图片槽数量', default:2, min:2, max:3, step:1, desc:'联数' },
  { prop:'pivot', type:'radio', label:'中缝枢标', default:'对照', options:['对照','前后','VS','/'] },
  { prop:'showSeam', type:'toggle', label:'中缝枢标显隐', default:true },
  { prop:'showCaption', type:'toggle', label:'装饰文案', default:true, desc:'各联图说' },
  { prop:'labelType', type:'labelType', label:'标签类型', default:'数字' },
  { prop:'focus', type:'focus', label:'重点信息 Focus', default:true },
  { prop:'focusIndex', type:'slider', label:'焦点序号', default:0, min:0, max:(p)=>p.panelCount-1, maxFromKey:'panelCount', maxFromKeyOffset:-1, displayOffset:1, step:1, showIf:(p)=>p.focus },
]};
