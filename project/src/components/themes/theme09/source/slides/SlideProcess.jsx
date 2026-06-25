import { useDeckStyles, deckTheme, deckLabel, SlideShell, SlideHead } from './DeckKit.jsx';
/* ============================================================================
   SlideProcess — 实施路径（横向编号步骤流程 + 连接轨道）
   独立组件：仅靠 props 控制内容与样式；render 时自注入 DeckKit 基座样式。
   非图表内容页 · 通用版式「流程 / 步骤」（横向 N 步，节点 + 连接线 + 卡片）。

   ── 可调参数（Props） ──────────────────────────────────────────────────────
   | prop        | 类型                          | 默认值 | 说明                          |
   | steps       | Step[]                        | 见下   | 步骤数据源                    |
   | stepCount   | number (2–6)                  | 4      | 展示的步骤数（截取 steps）    |
   | focus       | boolean                       | true   | 是否高亮某一步                |
   | focusIndex  | number (0-based)              | 0      | 高亮第几步                    |
   | labelType   | 'number'|'symbol'|'keyword'   | number | 节点编号样式                  |
   | showAside   | boolean                       | true   | 是否显示底部「成果」横幅      |
   | outcome     | {tag,text}                    | 见下   | 成果横幅内容                  |
   | head        | {no,en,cn}                    | 见下   | 页眉编号 / 英文 / 中文标题    |
   | theme       | Partial<DeckTheme>            | —      | 设计令牌覆盖                  |
   Step = { title:string, desc:string }
   ========================================================================== */
/* ── 页面属性契约 · defaultProps ──────────────────────────────────────────
   本页全部可见文案 / 数据 / 图片槽默认值集中于此，直接编辑即可换内容；
   组件内部以 { ...defaultProps, ...props } 合并，外部传同名 props 逐项覆盖。 */
export const defaultProps = {
  stepCount: 4,
  focus: true,
  focusIndex: 0,
  labelType: 'number',
  showAside: true,
  head: { no:'13', en:'Process', cn:'落地实施路径' },
  outcome: { tag:'闭环', text:'四步形成可复用的投资决策闭环——从机会发现到复盘迭代，持续校准。' },
  steps: [
      { title:'识别机会', desc:'扫描赛道与早期信号，建立候选标的清单。' },
      { title:'尽调验证', desc:'核验收入、留存与现金流，剔除纯叙事项目。' },
      { title:'配置布局', desc:'按确定性分层下注，预留周期回调的弹药。' },
      { title:'跟踪复盘', desc:'定期复盘兑现进度，动态调整持仓权重。' },
      { title:'退出兑现', desc:'把握 IPO / 并购窗口，分批锁定收益。' },
      { title:'迭代沉淀', desc:'沉淀方法论，反哺下一轮决策模型。' },
    ],
};

function SlideProcess(props){
  useDeckStyles(props.theme);
  const T = (deckTheme ? deckTheme(props.theme) : {});
  const ACC = T.accent || '#46e3c6';
  const navy = T.navy900 || '#050b22';

  const {
    stepCount, focus, focusIndex, labelType, showAside, head, outcome,
    steps,
  } = { ...defaultProps, ...props };

  const shown = steps.slice(0, Math.max(2, Math.min(stepCount, steps.length)));
  const fIdx = Math.max(0, Math.min(focusIndex, shown.length - 1));
  const num = (i)=> deckLabel(labelType, i, { keyword:'STEP' });

  return (
    <SlideShell orbs={[{ w:520, h:520, right:-170, top:-150,
        color:'radial-gradient(circle at 50% 50%, rgba(90,150,255,.28), rgba(40,90,230,0) 70%)' }]}>
      <SlideHead no={head.no} en={head.en} cn={head.cn}
        badge={labelType==='keyword'?'STEP':labelType==='symbol'?'◆':head.no} />

      <div style={{flex:'1 1 0', minHeight:0, display:'flex', flexDirection:'column', justifyContent:'center', marginTop:24}}>
        {/* 步骤轨道 */}
        <div style={{position:'relative', display:'grid', gridTemplateColumns:`repeat(${shown.length}, 1fr)`, gap:26}}>
          {/* 背景连接线 */}
          <div aria-hidden="true" style={{position:'absolute', top:42, left:`${50/shown.length}%`, right:`${50/shown.length}%`,
              height:3, background:`linear-gradient(90deg, ${hexA(ACC,.15)}, ${hexA(ACC,.55)}, ${hexA(ACC,.15)})`, borderRadius:2}}></div>

          {shown.map((s,i)=>{
            const hot = focus && i===fIdx;
            return (
              <div key={i} className={'dk-anim d'+Math.min(i+1,5)} style={{position:'relative', display:'flex', flexDirection:'column', alignItems:'center'}}>
                {/* 节点 */}
                <div style={{position:'relative', zIndex:1, width:86, height:86, borderRadius:'50%',
                    display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0,
                    fontFamily:'var(--font-display)', fontWeight:900, fontSize:34,
                    color: hot ? '#04121a' : '#fff',
                    backdropFilter: hot ? undefined : 'blur(11px)', WebkitBackdropFilter: hot ? undefined : 'blur(11px)',
                    background: hot ? ACC : `linear-gradient(150deg, rgba(255,255,255,.18), rgba(255,255,255,.06)), ${hexA(navy,.86)}`,
                    border:`2px solid ${hot ? ACC : hexA(ACC,.45)}`,
                    boxShadow: hot ? `0 0 0 8px ${hexA(ACC,.16)}, 0 24px 50px ${hexA(ACC,.4)}` : '0 16px 34px rgba(3,8,30,.5)'}}>
                  {num(i)}
                </div>
                {/* 连接竖线 */}
                <div style={{width:2, height:26, background: hot ? ACC : 'rgba(255,255,255,.2)'}}></div>
                {/* 卡片 */}
                <div className={hot?'dk-glass':''} style={{width:'100%', borderRadius:'var(--dk-radius)', padding:'26px 26px',
                    textAlign:'center', background: hot ? undefined : 'linear-gradient(150deg, rgba(255,255,255,.09), rgba(255,255,255,.035))',
                    backdropFilter: hot ? undefined : 'blur(9px)', WebkitBackdropFilter: hot ? undefined : 'blur(9px)',
                    border:`1px solid ${hot ? hexA(ACC,.5) : 'rgba(255,255,255,.12)'}`,
                    boxShadow: hot ? `0 26px 60px ${hexA(ACC,.22)}` : 'inset 0 1px 0 rgba(255,255,255,.14)'}}>
                  <div style={{fontFamily:'var(--font-mono)', fontSize:14, letterSpacing:'.14em',
                      color: hot ? ACC : 'var(--ink-faint)', textTransform:'uppercase', marginBottom:10}}>{'PHASE '+String(i+1).padStart(2,'0')}</div>
                  <div style={{fontFamily:'var(--font-cn)', fontWeight:900, fontSize:'var(--type-sub)',
                      color: hot ? ACC : '#fff', lineHeight:1.1, marginBottom:12}}>{s.title}</div>
                  <p style={{fontSize:'var(--type-small)', lineHeight:1.45, color:'var(--ink-dim)', textWrap:'pretty'}}>{s.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* 成果横幅 */}
        {showAside && outcome && (
          <div className="dk-anim d5" style={{marginTop:42, display:'flex', alignItems:'center', gap:24, alignSelf:'center',
              maxWidth:1500, borderRadius:'var(--dk-radius)', padding:'22px 40px',
              background:'linear-gradient(120deg, '+hexA(ACC,.12)+', rgba(255,255,255,.03))',
              border:`1px solid ${hexA(ACC,.4)}`, boxShadow:`0 0 0 2px ${hexA(ACC,.3)}`}}>
            <span style={{flexShrink:0, fontFamily:'var(--font-mono)', fontSize:15, letterSpacing:'.14em', color:ACC,
                writingMode:'vertical-rl', textOrientation:'upright'}}>{outcome.tag}</span>
            <span style={{width:1, height:30, background:'rgba(255,255,255,.2)'}}></span>
            <p style={{fontSize:'var(--type-sub)', fontWeight:700, lineHeight:1.4, color:'#fff', textWrap:'pretty'}}>{outcome.text}</p>
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

export default SlideProcess;

/* ── 模板参数 schema（自描述 · 迁移即带控件；Tweaks 由此自动生成） ── */
export const slideSpec = { defaults: defaultProps, slot:'process', name:'实施路径 · Process', controls:[
  { prop:'stepCount', type:'slider', label:'数量', default:4, min:2, max:6, step:1, desc:'步骤数' },
  { prop:'showAside', type:'toggle', label:'装饰文案', default:true },
  { prop:'labelType', type:'labelType', label:'标签类型', default:'数字' },
  { prop:'focus', type:'focus', label:'重点信息 Focus', default:true },
  { prop:'focusIndex', type:'slider', label:'焦点序号', default:0, min:0, max:(p)=>p.stepCount-1, maxFromKey:'stepCount', maxFromKeyOffset:-1, displayOffset:1, step:1, showIf:(p)=>p.focus },
]};
