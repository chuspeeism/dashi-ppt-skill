import { useDeckStyles, deckTheme, deckLabel, SlideShell, SlideHead } from './DeckKit.jsx';
/* ============================================================================
   SlidePhases — 阶段时序（甘特式时序条 · 季度/月度轴 + 跨度条 + 里程碑菱标）
   独立组件：仅靠 props 控制内容与样式；render 时自注入 DeckKit 基座样式。
   与 Timeline（轴上节点 + 上下错位卡）、Process（编号步骤胶囊 + 箭头）、Roadmap
   （泳道×阶段方格）刻意区分：本页以「连续时间轴 + 任意跨度的甘特条 + 里程碑菱标」
   呈现一年内各阶段的起止与重叠，强调时间跨度而非离散节点。

   ── 可调参数（Props） ──────────────────────────────────────────────────────
   | prop          | 类型                          | 默认值 | 说明                              |
   | phases        | Phase[]                       | 见下   | 阶段数据源（start/end 单位=月 0–12）|
   | itemCount     | number (3–8)                  | 6      | 展示阶段数（截取）                |
   | axis          | '季度'|'月度'                 | '季度' | 时间轴刻度密度                    |
   | showAxis      | boolean                       | true   | 轴线网格 + 刻度标签               |
   | showMilestone | boolean                       | true   | 顶部里程碑菱标（装饰文案）        |
   | milestones    | {at,text}[]                   | 见下   | 里程碑数据源（at 单位=月）        |
   | focus         | boolean                       | true   | 高亮某条阶段                      |
   | focusIndex    | number (0-based)              | 0      | 高亮第几条                        |
   | labelType     | 'number'|'symbol'|'keyword'   | number | 阶段徽标样式                      |
   | head          | {no,en,cn}                    | 见下   | 页眉                              |
   | theme         | Partial<DeckTheme>            | —      | 设计令牌覆盖                      |
   Phase = { name, sub, start, end, metric }
   ========================================================================== */
/* ── 页面属性契约 · defaultProps ──────────────────────────────────────────
   本页全部可见文案 / 数据 / 图片槽默认值集中于此，直接编辑即可换内容；
   组件内部以 { ...defaultProps, ...props } 合并，外部传同名 props 逐项覆盖。 */
export const defaultProps = {
  itemCount: 6,
  axis: '季度',
  showAxis: true,
  showMilestone: true,
  focus: true,
  focusIndex: 0,
  labelType: 'number',
  head: { no:'08', en:'Phases · 2024', cn:'阶段时序 · 资本节奏' },
  phases: [
      { name:'蓄势观望',   sub:'估值消化 · 谨慎', start:0,  end:3,  metric:'低密度' },
      { name:'信心修复',   sub:'头部率先关账',     start:2,  end:6,  metric:'回暖' },
      { name:'加速关账',   sub:'大额事件密集',     start:5,  end:9,  metric:'提速' },
      { name:'巅峰竞速',   sub:'估值水位抬升',     start:8,  end:12, metric:'白热化' },
      { name:'基建并行',   sub:'算力长约绑定',     start:4,  end:11, metric:'贯穿全年' },
      { name:'垂直崛起',   sub:'应用层估值兑现',   start:7,  end:12, metric:'结构性' },
      { name:'数据补强',   sub:'标注与数据层',     start:3,  end:8,  metric:'稳步' },
      { name:'安全对齐',   sub:'监管与对齐叙事',   start:6,  end:12, metric:'升温' },
    ],
  milestones: [
      { at:2,  text:'OpenAI 要约 · 860 亿$' },
      { at:6,  text:'年中信心拐点' },
      { at:10, text:'OpenAI 66 亿$ · 1570 亿估值' },
    ],
};

function SlidePhases(props){
  useDeckStyles(props.theme);
  const T = (deckTheme ? deckTheme(props.theme) : {});
  const ACC = T.accent || '#46e3c6';
  const BLUE = T.blue || '#4a86ff';
  const VIO = T.violet || '#9f7bff';
  const navy = T.navy900 || '#050b22';

  const {
    itemCount, axis, showAxis, showMilestone, focus, focusIndex, labelType,
    head, phases, milestones,
  } = { ...defaultProps, ...props };

  const data = phases.slice(0, Math.max(3, Math.min(itemCount, phases.length)));
  const fIdx = Math.max(0, Math.min(focusIndex, data.length - 1));
  const PALETTE = [ACC, BLUE, VIO, '#5ad1ff', '#ffb27a', '#7af0c6', '#8fa6ff', '#c79bff'];
  const lbl = (i)=> deckLabel(labelType, i, { keyword:'PH' });

  const TOTAL = 12;
  const ticks = axis === '月度'
    ? Array.from({length:12}, (_,i)=>({ at:i+1, label:String(i+1)+'月' }))
    : [{at:3,label:'Q1'},{at:6,label:'Q2'},{at:9,label:'Q3'},{at:12,label:'Q4'}];
  const pct = (m)=> (Math.max(0, Math.min(m, TOTAL))/TOTAL)*100;

  return (
    <SlideShell orbs={[{ w:520, h:520, left:-160, bottom:-180,
        color:`radial-gradient(circle at 50% 50%, ${hexA(BLUE,.2)}, ${hexA(BLUE,0)} 70%)` }]}>
      <SlideHead no={head.no} en={head.en} cn={head.cn} badge={head.no} />

      <div style={{flex:'1 1 0', minHeight:0, display:'flex', flexDirection:'column', marginTop:26}}>
        {/* 轴线区域：左侧标签列 + 右侧时间轴 */}
        <div style={{flex:'1 1 0', minHeight:0, display:'grid', gridTemplateColumns:'300px 1fr',
              gridTemplateRows:`${showMilestone?56:24}px 1fr`, columnGap:0}}>
          {/* 顶部里程碑带（跨整行，仅时间轴侧） */}
          <div></div>
          <div style={{position:'relative', height: showMilestone?56:24}}>
            {showMilestone && milestones.map((m,i)=>(
              <div key={i} className={'dk-anim d'+Math.min(i+1,6)} style={{position:'absolute', left:`calc(${pct(m.at)}% )`, top:0,
                    transform:'translateX(-50%)', display:'flex', flexDirection:'column', alignItems:'center', gap:5, maxWidth:240}}>
                <span style={{fontFamily:'var(--font-mono)', fontSize:13, color:'var(--ink-dim)', whiteSpace:'nowrap',
                    background:hexA(navy,.5), padding:'2px 8px', borderRadius:6, textWrap:'pretty', textAlign:'center'}}>{m.text}</span>
                <span style={{width:12, height:12, transform:'rotate(45deg)', background:ACC, boxShadow:`0 0 12px ${hexA(ACC,.7)}`}}></span>
              </div>
            ))}
          </div>

          {/* 阶段标签列 */}
          <div style={{minHeight:0, display:'flex', flexDirection:'column', justifyContent:'space-around', paddingRight:24, paddingBottom:26, gap:8}}>
            {data.map((p,i)=>{
              const hot = focus && i===fIdx;
              const c = PALETTE[i % PALETTE.length];
              return (
                <div key={i} className={'dk-anim d'+Math.min(i+1,6)} style={{display:'flex', alignItems:'center', gap:14, minWidth:0}}>
                  <span style={{flexShrink:0, width:40, height:40, borderRadius:11, display:'inline-flex', alignItems:'center',
                      justifyContent:'center', fontFamily:'var(--font-display)', fontWeight:900, fontSize:17,
                      color: hot?navy:c, background: hot?c:hexA(c,.14), border:`1px solid ${hexA(c,.55)}`}}>{lbl(i)}</span>
                  <div style={{minWidth:0}}>
                    <div style={{fontFamily:'var(--font-cn)', fontWeight:800, fontSize:'var(--type-small)', color: hot?'#fff':'rgba(255,255,255,.92)', whiteSpace:'nowrap'}}>{p.name}</div>
                    <div style={{fontFamily:'var(--font-mono)', fontSize:12, color:'var(--ink-faint)', whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis'}}>{p.sub}</div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* 时间轴 + 甘特条 */}
          <div style={{position:'relative'}}>
            {/* 网格线 */}
            {showAxis && ticks.map((t,i)=>(
              <div key={i} style={{position:'absolute', left:`calc(${pct(t.at)}% )`, top:0, bottom:26, width:1,
                  background: t.label.startsWith('Q')||axis==='月度' ? 'rgba(255,255,255,.1)':'rgba(255,255,255,.1)'}}></div>
            ))}
            <div style={{position:'absolute', left:0, top:0, bottom:26, width:1, background:'rgba(255,255,255,.18)'}}></div>

            {/* 甘特条 */}
            <div style={{position:'absolute', left:0, right:0, top:0, bottom:26, display:'flex', flexDirection:'column', justifyContent:'space-around', gap:8}}>
              {data.map((p,i)=>{
                const hot = focus && i===fIdx;
                const c = PALETTE[i % PALETTE.length];
                const L = pct(p.start), W = Math.max(3, pct(p.end)-pct(p.start));
                return (
                  <div key={i} className={'dk-anim d'+Math.min(i+1,6)} style={{position:'relative', height:'100%', display:'flex', alignItems:'center'}}>
                    <div style={{position:'absolute', left:L+'%', width:W+'%', height:'62%', minHeight:30, borderRadius:999,
                        background: hot?`linear-gradient(90deg, ${c}, ${hexA(c,.7)})`:`linear-gradient(90deg, ${hexA(c,.8)}, ${hexA(c,.4)})`,
                        border:`1px solid ${hexA(c, hot?.9:.5)}`,
                        boxShadow: hot?`0 12px 34px ${hexA(c,.45)}, 0 0 0 2px ${hexA(c,.5)}`:'0 8px 22px rgba(3,8,30,.35)',
                        display:'flex', alignItems:'center', justifyContent:'space-between', padding:'0 16px', overflow:'hidden'}}>
                      <span style={{fontFamily:'var(--font-mono)', fontSize:13, fontWeight:700, color: hot?navy:'#fff', whiteSpace:'nowrap', opacity:.92}}>
                        {p.start>0?'M'+p.start:'年初'} → {p.end>=12?'年末':'M'+p.end}
                      </span>
                      <span style={{fontFamily:'var(--font-cn)', fontSize:13, fontWeight:800, color: hot?navy:'#fff', whiteSpace:'nowrap', flexShrink:0}}>{p.metric}</span>
                    </div>
                    {/* 终点里程碑菱标 */}
                    <span style={{position:'absolute', left:`calc(${pct(p.end)}% )`, transform:'translateX(-50%) rotate(45deg)',
                        width: hot?14:10, height: hot?14:10, background:'#fff', border:`2px solid ${c}`,
                        boxShadow: hot?`0 0 14px ${hexA(c,.8)}`:'none'}}></span>
                  </div>
                );
              })}
            </div>

            {/* 刻度标签 */}
            {showAxis && (
              <div style={{position:'absolute', left:0, right:0, bottom:0, height:22}}>
                {ticks.map((t,i)=>(
                  <span key={i} style={{position:'absolute', left:`calc(${pct(t.at)}% )`, transform:'translateX(-50%)',
                      fontFamily:'var(--font-mono)', fontSize:13, color:'var(--ink-faint)'}}>{t.label}</span>
                ))}
              </div>
            )}
          </div>
        </div>
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

export default SlidePhases;

/* ── 模板参数 schema（自描述 · 迁移即带控件；Tweaks 由此自动生成） ── */
export const slideSpec = { defaults: defaultProps, slot:'phases', name:'阶段时序 · Phases', controls:[
  { prop:'itemCount', type:'slider', label:'数量', default:6, min:3, max:8, step:1, desc:'阶段数' },
  { prop:'axis', type:'radio', label:'图表类型', default:'季度', options:['季度','月度'] },
  { prop:'showAxis', type:'toggle', label:'轴线网格', default:true },
  { prop:'showMilestone', type:'toggle', label:'装饰文案', default:true, desc:'里程碑菱标' },
  { prop:'labelType', type:'labelType', label:'标签类型', default:'数字' },
  { prop:'focus', type:'focus', label:'重点信息 Focus', default:true },
  { prop:'focusIndex', type:'slider', label:'焦点序号', default:0, min:0, max:(p)=>p.itemCount-1, maxFromKey:'itemCount', maxFromKeyOffset:-1, displayOffset:1, step:1, showIf:(p)=>p.focus },
]};
