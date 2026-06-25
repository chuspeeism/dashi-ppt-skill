import { useDeckStyles, deckTheme, deckLabel, SlideShell, SlideHead } from './DeckKit.jsx';
/* ============================================================================
   SlideIcicle — 冰柱图（icicle · 横向层级分区）
   独立组件：仅靠 props 控制内容与样式；render 时自注入 DeckKit 基座样式。
   与 Treemap（嵌套矩形装箱）、Sunburst（放射两环）、Marimekko（变宽堆叠）刻意区分：
   本页是「冰柱图」—— 自左向右分三列：根(全年总额) → 大类(高度 ∝ 占比) → 子项(在父级
   纵向带内再分)，同层等宽、子项紧贴父级右侧并在其纵段内对齐，像层层下挂的冰柱读「整体→
   分类→细分」的层级与权重。

   ── 可调参数（Props） ──────────────────────────────────────────────────────
   | prop        | 类型                          | 默认值 | 说明                          |
   | groups      | Group[]                       | 见下   | 数据源（大类含 children 子项）|
   | itemCount   | number (3–6)                  | 5      | 展示大类数（截取）            |
   | showChildren| boolean                       | true   | 第三列（子项细分）显隐        |
   | showValue   | boolean                       | true   | 块内数值显隐                  |
   | focus       | boolean                       | false  | 高亮某一大类整行              |
   | focusIndex  | number (0-based)              | 0      | 高亮第几个大类                |
   | labelType   | 'number'|'symbol'|'keyword'   | number | 大类徽标样式                  |
   | showAside   | boolean                       | true   | 根列读数（装饰）              |
   | head        | …                             | 见下   | 页眉文案                      |
   Group = { label, sub, value, children:[{label,value}] }
   ========================================================================== */
/* ── 页面属性契约 · defaultProps ──────────────────────────────────────────
   本页全部可见文案 / 数据 / 图片槽默认值集中于此，直接编辑即可换内容；
   组件内部以 { ...defaultProps, ...props } 合并，外部传同名 props 逐项覆盖。 */
export const defaultProps = {
  itemCount: 5,
  showChildren: true,
  showValue: true,
  focus: false,
  focusIndex: 0,
  labelType: 'number',
  showAside: true,
  rootLabel: '全年总额',
  rootValue: '970',
  unit: '亿$',
  head: { no:'10', en:'Icicle · Hierarchy', cn:'公司版图 · 层级冰柱' },
  groups: [
      { label:'大模型',   sub:'Foundation', value:43.3, children:[ {label:'基础模型',value:24}, {label:'多模态',value:11.3}, {label:'智能体',value:8} ] },
      { label:'算力基建', sub:'Compute',    value:18,   children:[ {label:'芯片',value:8}, {label:'云/数据中心',value:7}, {label:'网络',value:3} ] },
      { label:'应用层',   sub:'Applications',value:16,  children:[ {label:'企业应用',value:7}, {label:'消费',value:5}, {label:'行业垂直',value:4} ] },
      { label:'企业服务', sub:'Enterprise', value:12,   children:[ {label:'安全',value:5}, {label:'数据',value:4}, {label:'运维',value:3} ] },
      { label:'其他赛道', sub:'Others',     value:10.7, children:[ {label:'机器人',value:4}, {label:'医疗 AI',value:3.7}, {label:'自动驾驶',value:3} ] },
    ],
};

function SlideIcicle(props){
  useDeckStyles(props.theme);
  const T = (deckTheme ? deckTheme(props.theme) : {});
  const ACC = T.accent || '#46e3c6';
  const BLUE = T.blue || '#4a86ff';
  const VIO = T.violet || '#9f7bff';
  const WARN = T.warn || '#ffb27a';
  const navy = T.navy900 || '#050b22';
  const PAL = [ACC, BLUE, VIO, WARN, '#6fd3ff', '#ff9bb6'];

  const {
    itemCount, showChildren, showValue, focus, focusIndex, labelType, showAside,
    rootLabel, rootValue, unit, head, groups,
  } = { ...defaultProps, ...props };

  const data = groups.slice(0, Math.max(3, Math.min(itemCount, groups.length))).map((g,i)=>({ ...g, col:PAL[i%PAL.length], idx:i }));
  const fIdx = Math.max(0, Math.min(focusIndex, data.length-1));
  const lbl = (i)=> deckLabel(labelType, i, { keyword:'C' });
  const total = data.reduce((a,b)=>a+b.value,0);
  const categoryColFlex = showChildren ? '0 0 480px' : '1 1 0';

  // 自适应：测量大类列实际高度，按各行 value 占比推导字号，避免小行文字被裁
  const colRef = React.useRef(null);
  const [colH, setColH] = React.useState(560);
  React.useLayoutEffect(()=>{
    const el = colRef.current; if(!el) return;
    const read = ()=>{ const h = el.clientHeight; if(h>20) setColH(h); };
    read(); const ro = new ResizeObserver(read); ro.observe(el); return ()=>ro.disconnect();
  }, []);
  const gapPx = 8;
  const rowHOf = (v)=> (v/total) * (colH - gapPx*(data.length-1));
  const clamp = (x,lo,hi)=> Math.max(lo, Math.min(x, hi));

  return (
    <SlideShell orbs={[{ w:520, h:520, right:-150, bottom:-160,
        color:`radial-gradient(circle at 50% 50%, ${hexA(BLUE,.16)}, ${hexA(BLUE,0)} 70%)` }]}>
      <SlideHead no={head.no} en={head.en} cn={head.cn} badge={head.no} />

      <div className="dk-anim d1" style={{flex:'1 1 0', minHeight:0, display:'flex', gap:10, marginTop:24}}>
        {/* 列头标尺 */}
        <div style={{display:'flex', flexDirection:'column', justifyContent:'flex-start', gap:0, width:0}}></div>

        {/* 根列 */}
        <div style={{flex:'0 0 200px', display:'flex'}}>
          <div className="dk-glass-dark" style={{flex:'1 1 0', borderRadius:18, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:14, border:`1px solid ${hexA(ACC,.3)}`, position:'relative', overflow:'hidden'}}>
            <span style={{position:'absolute', left:0, top:0, bottom:0, width:6, background:ACC}}></span>
            <span style={{fontFamily:'var(--font-mono)', fontSize:'var(--type-tiny)', color:'var(--ink-dim)', letterSpacing:'.1em'}}>{rootLabel}</span>
            {showAside && (<>
              <span className="dk-ink-grad" style={{fontFamily:'var(--font-display)', fontWeight:900, fontSize:64, lineHeight:.9}}>{rootValue}</span>
              <span style={{fontFamily:'var(--font-cn)', fontWeight:700, fontSize:'var(--type-small)', color:ACC}}>{unit}</span>
            </>)}
            <span style={{writingMode:'vertical-rl', fontFamily:'var(--font-mono)', fontSize:12, color:'var(--ink-faint)', letterSpacing:'.2em', marginTop:8}}>ROOT · 100%</span>
          </div>
        </div>

        {/* 大类列 */}
        <div ref={colRef} data-dashi-theme09-icicle-category-col="true" style={{flex:categoryColFlex, minWidth:0, display:'flex', flexDirection:'column', gap:8}}>
          {data.map((g)=>{
            const hot = focus && g.idx===fIdx;
            const rowH = rowHOf(g.value);
            const nameFs = clamp(rowH*0.34, 18, 40);
            const pctFs = clamp(rowH*0.62, 26, 64);
            const iconSz = clamp(rowH*0.40, 26, 42);
            const subShow = rowH > 66;
            return (
              <div key={g.idx} style={{flex:`${g.value} 1 0`, minHeight:0, display:'flex', alignItems:'center', gap:14,
                    borderRadius:16, padding:'0 22px', position:'relative', overflow:'hidden',
                    background:hexA(g.col, hot?0.92:0.72), opacity:focus&&!hot?.5:1, transition:'opacity .2s',
                    boxShadow: hot?`0 0 22px ${hexA(g.col,.55)}`:'none'}}>
                <span style={{flexShrink:0, width:iconSz, height:iconSz, borderRadius:11, display:'grid', placeItems:'center',
                    fontFamily:'var(--font-display)', fontWeight:900, fontSize:clamp(iconSz*0.42,13,18), color:g.col, background:hexA(navy,.55)}}>{lbl(g.idx)}</span>
                <div style={{minWidth:0, flex:'1 1 0'}}>
                  <div style={{fontFamily:'var(--font-cn)', fontWeight:900, fontSize:nameFs, color:'#fff', lineHeight:1.05, whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis', textShadow:`0 1px 10px ${hexA(navy,.45)}`}}>{g.label}</div>
                  {subShow && <div style={{fontFamily:'var(--font-mono)', fontSize:13, color:hexA('#ffffff',.82), letterSpacing:'.05em'}}>{g.sub}</div>}
                </div>
                {showValue && <span style={{flexShrink:0, fontFamily:'var(--font-display)', fontWeight:900, fontSize:pctFs, color:'#fff', lineHeight:.9, textShadow:`0 1px 12px ${hexA(navy,.5)}`}}>{g.value}<span style={{fontSize:pctFs*0.4}}>%</span></span>}
              </div>
            );
          })}
        </div>

        {/* 子项列 */}
        {showChildren && (
          <div data-dashi-theme09-icicle-children-col="true" style={{flex:'1 1 0', minWidth:0, display:'flex', flexDirection:'column', gap:8}}>
            {data.map((g)=>{
              const hot = focus && g.idx===fIdx;
              const ct = (g.children||[]).reduce((a,b)=>a+b.value,0)||1;
              const rowH = rowHOf(g.value);
              return (
                <div key={g.idx} style={{flex:`${g.value} 1 0`, minHeight:0, display:'flex', flexDirection:'column', gap:3,
                      opacity:focus&&!hot?.45:1, transition:'opacity .2s'}}>
                  {(g.children||[]).map((c,ci)=>{
                    const childH = (c.value/ct)*rowH;
                    const cFs = clamp(childH*0.5, 12, 26);
                    return (
                    <div key={ci} style={{flex:`${c.value} 1 0`, minHeight:0, display:'flex', alignItems:'center', justifyContent:'space-between', gap:10,
                          borderRadius:11, padding:'0 16px', overflow:'hidden',
                          background:hexA(g.col, ci%2? 0.2 : 0.32), borderLeft:`3px solid ${hexA(g.col,.7)}`}}>
                      <span style={{fontFamily:'var(--font-cn)', fontWeight:600, fontSize:cFs, color:'#fff', whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis'}}>{c.label}</span>
                      {showValue && <span style={{flexShrink:0, fontFamily:'var(--font-mono)', fontWeight:700, fontSize:cFs, color:hexA('#ffffff',.82)}}>{((c.value/ct)*g.value).toFixed(1)}%</span>}
                    </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* 列轴标注 */}
      <div style={{display:'flex', gap:10, marginTop:12, fontFamily:'var(--font-mono)', fontSize:13, color:'var(--ink-faint)', letterSpacing:'.08em'}}>
        <span style={{flex:'0 0 200px', textAlign:'center'}}>L0 · 总量</span>
        <span data-dashi-theme09-icicle-category-axis="true" style={{flex:categoryColFlex, minWidth:0, textAlign:'center'}}>L1 · 大类（高度 ∝ 占比）</span>
        {showChildren && <span style={{flex:'1 1 0', textAlign:'center'}}>L2 · 子项细分</span>}
      </div>
    </SlideShell>
  );

  function hexA(hex, a){
    if(!hex || hex[0] !== '#') return hex;
    const x = hex.slice(1); const f = x.length===3 ? x.split('').map(c=>c+c).join('') : x;
    return `rgba(${parseInt(f.slice(0,2),16)},${parseInt(f.slice(2,4),16)},${parseInt(f.slice(4,6),16)},${a})`;
  }
}

export default SlideIcicle;

/* ── 模板参数 schema（自描述 · 迁移即带控件；Tweaks 由此自动生成） ── */
export const slideSpec = { defaults: defaultProps, slot:'icicle', name:'层级冰柱 · Icicle', controls:[
  { prop:'itemCount', type:'slider', label:'数量', default:5, min:3, max:5, step:1, desc:'大类数' },
  { prop:'showChildren', type:'toggle', label:'子项列', default:true },
  { prop:'showValue', type:'toggle', label:'数值标注', default:true },
  { prop:'showAside', type:'toggle', label:'装饰文案', default:true, desc:'根列读数' },
  { prop:'labelType', type:'labelType', label:'标签类型', default:'数字' },
  { prop:'focus', type:'focus', label:'重点信息 Focus', default:false },
  { prop:'focusIndex', type:'slider', label:'焦点序号', default:0, min:0, max:(p)=>p.itemCount-1, maxFromKey:'itemCount', maxFromKeyOffset:-1, displayOffset:1, step:1, showIf:(p)=>p.focus },
]};
