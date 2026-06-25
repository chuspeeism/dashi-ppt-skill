import { useDeckStyles, deckTheme, deckLabel, SlideShell, SlideHead } from './DeckKit.jsx';
/* ============================================================================
   SlideRoadmap — 泳道路线图（多泳道 × 多阶段，按期推进）
   独立组件：仅靠 props 控制内容与样式；render 时自注入 DeckKit 基座样式。

   ── 可调参数（Props） ──────────────────────────────────────────────────────
   | prop         | 类型                         | 默认值 | 说明                            |
   | lanes        | Lane[]                       | 见下   | 数据源（每条 = 一条泳道）       |
   | phases       | string[]                     | 见下   | 阶段列标题                      |
   | laneCount    | number (2–4)                 | 4      | 展示泳道数（截取行）            |
   | phaseCount   | number (3–6)                 | 6      | 展示阶段数（截取列）            |
   | showMilestone| boolean                      | true   | 是否显示顶部里程碑标记          |
   | focus        | boolean                      | true   | 是否高亮某一泳道                |
   | focusIndex   | number (0-based)             | 0      | 高亮第几条泳道                  |
   | labelType    | 'number'|'symbol'|'keyword'  | number | 泳道角标样式                    |
   | showAside    | boolean                      | true   | 是否显示「路径解读」装饰条      |
   | badge        | string                       | '10'   | 页眉编号徽标                    |
   Lane = { cn:string, items:string[] }          milestones = { at:number, text:string }[]
   ========================================================================== */
/* ── 页面属性契约 · defaultProps ──────────────────────────────────────────
   本页全部可见文案 / 数据 / 图片槽默认值集中于此，直接编辑即可换内容；
   组件内部以 { ...defaultProps, ...props } 合并，外部传同名 props 逐项覆盖。 */
export const defaultProps = {
  laneCount: 4,
  phaseCount: 6,
  showMilestone: true,
  focus: true,
  focusIndex: 0,
  labelType: 'number',
  showAside: true,
  badge: '10',
  phases: ['24Q1','24Q2','24Q3','24Q4','25Q1','25Q2'],
  milestones: [
      { at:1, text:'估值峰值' },
      { at:3, text:'头部 IPO 窗口' },
      { at:5, text:'并购升温' },
    ],
  lanes: [
      { cn:'资本布局',  items:['超大轮密集','估值再创高','结构性分化','IPO 预热','二级映射','并购升温'] },
      { cn:'技术演进',  items:['多模态成熟','推理成本骤降','Agent 兴起','长上下文','端侧模型','自主体系'] },
      { cn:'应用落地',  items:['Copilot 普及','企业级试点','垂直 PMF','规模化付费','行业纵深','生态闭环'] },
      { cn:'生态与政策',items:['算力争夺','数据合规','安全框架','监管落地','标准统一','全球协同'] },
    ],
};

function SlideRoadmap(props){
  useDeckStyles(props.theme);
  const T = (deckTheme ? deckTheme(props.theme) : {});
  const ACC = T.accent || '#46e3c6';
  const BLUE = T.blue || '#4a86ff';
  const VIO = T.violet || '#9f7bff';
  const WARN = T.warn || '#ffb27a';
  const LANEC = [BLUE, ACC, VIO, WARN];

  const {
    laneCount, phaseCount, showMilestone, focus, focusIndex, labelType, showAside,
    badge, phases, milestones, lanes,
  } = { ...defaultProps, ...props };

  const lc = Math.max(2, Math.min(laneCount, lanes.length));
  const pc = Math.max(3, Math.min(phaseCount, phases.length));
  const ph = phases.slice(0, pc);
  const shown = lanes.slice(0, lc).map(l=>({ ...l, items:l.items.slice(0,pc) }));
  const fIdx = Math.max(0, Math.min(focusIndex, shown.length - 1));
  const lbl = (i)=> deckLabel(labelType, i, { keyword:'LANE' });
  const mile = (milestones||[]).filter(m=>m.at < pc);

  return (
    <SlideShell orbs={[{ w:520, h:520, right:-160, top:-150,
        color:`radial-gradient(circle at 50% 50%, ${hexA(VIO,.18)}, ${hexA(VIO,0)} 70%)` }]}>
      <SlideHead no={badge} en="Roadmap" cn="布局路线 · 阶段推进"
        badge={labelType==='keyword'?'PLAN':labelType==='symbol'?'◆':badge} />

      <div style={{flex:'1 1 0', minHeight:0, display:'flex', flexDirection:'column', marginTop:26}}>
        <div className="dk-glass dk-anim d1" style={{flex:'1 1 0', minHeight:0, borderRadius:'var(--dk-radius)',
              padding:'24px 36px 28px', display:'flex', flexDirection:'column'}}>

          {/* 阶段表头 + 里程碑 */}
          <div style={{display:'grid', gridTemplateColumns:`220px repeat(${pc}, minmax(0,1fr))`, gap:14, alignItems:'end'}}>
            <span style={{fontFamily:'var(--font-mono)', fontSize:14, color:'var(--ink-faint)', letterSpacing:'.08em'}}>泳道 ＼ 阶段</span>
            {ph.map((p,ci)=>(
              <div key={ci} style={{textAlign:'center'}}>
                {showMilestone && mile.some(m=>m.at===ci) && (
                  <div style={{marginBottom:8, display:'inline-flex', alignItems:'center', gap:6, padding:'3px 12px', borderRadius:999,
                      background:hexA(ACC,.14), border:`1px solid ${hexA(ACC,.5)}`, color:ACC, fontFamily:'var(--font-mono)', fontSize:13, whiteSpace:'nowrap'}}>
                    ◆ {mile.find(m=>m.at===ci).text}
                  </div>
                )}
                <div style={{fontFamily:'var(--font-display)', fontWeight:800, fontSize:24, color:'#fff'}}>{p}</div>
              </div>
            ))}
          </div>

          {/* 时间轴线 */}
          <div style={{display:'grid', gridTemplateColumns:`220px 1fr`, alignItems:'center', margin:'14px 0 18px'}}>
            <span></span>
            <div style={{height:3, borderRadius:2, background:`linear-gradient(90deg, ${hexA(BLUE,.2)}, ${hexA(ACC,.6)})`, position:'relative'}}>
              {ph.map((_,ci)=><span key={ci} style={{position:'absolute', top:-3, left:`${(ci+0.5)/pc*100}%`, transform:'translateX(-50%)', width:9, height:9, borderRadius:'50%', background:'#cfe0ff'}}></span>)}
            </div>
          </div>

          {/* 泳道行 */}
          <div style={{flex:'1 1 0', minHeight:0, display:'grid', gridTemplateRows:`repeat(${lc}, 1fr)`, gap:14}}>
            {shown.map((lane,li)=>{
              const col = LANEC[li % LANEC.length];
              const hot = focus && li===fIdx;
              return (
                <div key={li} className={'dk-anim d'+Math.min(li+1,6)} style={{display:'grid',
                    gridTemplateColumns:`220px repeat(${pc}, minmax(0,1fr))`, gap:14, alignItems:'stretch',
                    opacity: focus&&!hot?.5:1}}>
                  {/* 泳道名 */}
                  <div style={{display:'flex', alignItems:'center', gap:12, borderRadius:14, padding:'0 16px',
                      background:hexA(col,hot?.2:.1), borderLeft:`5px solid ${col}`}}>
                    <span style={{flexShrink:0, fontFamily:'var(--font-mono)', fontSize:13, color:col,
                        border:`1px solid ${hexA(col,.5)}`, borderRadius:7, padding:'2px 9px'}}>{lbl(li)}</span>
                    <span style={{fontFamily:'var(--font-cn)', fontWeight:800, fontSize:24, color:'#fff'}}>{lane.cn}</span>
                  </div>
                  {/* 阶段卡 */}
                  {lane.items.map((it,ci)=>(
                    <div key={ci} style={{borderRadius:13, padding:'10px 14px', display:'flex', alignItems:'center', justifyContent:'center', textAlign:'center',
                        background: hot?hexA(col,.16):'rgba(255,255,255,.045)', border:`1px solid ${hot?hexA(col,.45):'rgba(255,255,255,.1)'}`,
                        fontFamily:'var(--font-cn)', fontWeight:600, fontSize:pc<=4?22:19, color: hot?'#fff':'var(--ink-dim)', lineHeight:1.3, textWrap:'pretty'}}>
                      {it}
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
        </div>

        {/* 底部解读 */}
        {showAside && (
          <div className="dk-glass-dark dk-anim d2" style={{marginTop:18, flexShrink:0, borderRadius:20, padding:'18px 30px', display:'flex', alignItems:'center', gap:22}}>
            <span style={{flexShrink:0, fontFamily:'var(--font-mono)', fontSize:14, letterSpacing:'.12em', color:ACC}}>路径</span>
            <p style={{fontSize:'var(--type-small)', lineHeight:1.5, color:'rgba(255,255,255,.86)', textWrap:'pretty'}}>
              <b style={{color:'#fff'}}>{shown[fIdx].cn}</b>泳道贯穿全周期：由 <b style={{color:ACC}}>{shown[fIdx].items[0]}</b> 起步，
              在 {ph[Math.min(3,pc-1)]} 前后迎来关键节点；四条泳道并行推进，节奏彼此咬合。
            </p>
          </div>
        )}
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

export default SlideRoadmap;

/* ── 模板参数 schema（自描述 · 迁移即带控件；Tweaks 由此自动生成） ── */
export const slideSpec = { defaults: defaultProps, slot:'roadmap', name:'布局路线 · Roadmap', controls:[
  { prop:'laneCount', type:'slider', label:'行数量', default:4, min:2, max:4, step:1 },
  { prop:'phaseCount', type:'slider', label:'列数量', default:6, min:3, max:6, step:1 },
  { prop:'showMilestone', type:'toggle', label:'里程碑标记', default:true },
  { prop:'showAside', type:'toggle', label:'装饰文案', default:true },
  { prop:'labelType', type:'labelType', label:'标签类型', default:'数字' },
  { prop:'focus', type:'focus', label:'重点信息 Focus', default:true },
  { prop:'focusIndex', type:'slider', label:'焦点序号', default:0, min:0, max:(p)=>p.laneCount-1, maxFromKey:'laneCount', maxFromKeyOffset:-1, displayOffset:1, step:1, showIf:(p)=>p.focus },
]};
