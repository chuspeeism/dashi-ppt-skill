import { useDeckStyles, deckTheme, deckLabel, SlideHead } from './DeckKit.jsx';
/* ============================================================================
   SlideStaircase — 阶梯递进（实体台阶块 · 递进量级 · 信息图 · 低卡片）
   独立组件：仅靠 props 控制内容与样式；render 时自注入 DeckKit 基座样式。
   非卡片 · 把一组量级画成一排自低向高的「实体台阶」：每级一块带顶面高光的踏步，
   阶面落数值、踏步立面落名目，台阶顶端用一条折线连成上升轮廓。表达「逐级抬升」。

   ── 区别于同类既有页 ──────────────────────────────────────────────────────
   Waterfall(浮动增量+连接线+合计柱)、Funnel(逐层收窄)、Roadmap(泳道格) →
   本页是「实体台阶」：等宽踏步、阶高∝量级、顶面高光 + 上升轮廓线，强调单调抬升。

   ── 可调参数（Props） ──────────────────────────────────────────────────────
   | prop        | 类型                   | 默认 | 说明                          |
   | stepCount   | number (3–6)           | 5    | 台阶数量（截取 steps）        |
   | direction   | '升序'|'原序'          | '升序' | 是否按量级升序                |
   | showRidge   | boolean                | true | 顶端上升轮廓线（装饰）        |
   | showValue   | boolean                | true | 阶面数值                      |
   | focus       | boolean                | true | 高亮某级                      |
   | focusIndex  | number                 | 4    | 高亮第几级                    |
   | labelType   | number|symbol|keyword  | number | 踏步编号样式                |
   | head/steps  | …                      | —    | 文案（默认=融资规模分级）     |
   ========================================================================== */
/* ── 页面属性契约 · defaultProps ──────────────────────────────────────────
   本页全部可见文案 / 数据 / 图片槽默认值集中于此，直接编辑即可换内容；
   组件内部以 { ...defaultProps, ...props } 合并，外部传同名 props 逐项覆盖。 */
export const defaultProps = {
  stepCount: 5,
  direction: '升序',
  showRidge: true,
  showValue: true,
  focus: true,
  focusIndex: 4,
  labelType: 'number',
  head: { no:'递进', en:'Stepping Up', cn:'融资规模，一级一级抬升' },
  steps: [
      { label:'种子 / 天使', value:18, sub:'数百万' },
      { label:'A 轮', value:36, sub:'千万级' },
      { label:'B–C 轮', value:58, sub:'数千万–亿' },
      { label:'成长期', value:78, sub:'数亿' },
      { label:'大额融资', value:100, sub:'≥10 亿' },
      { label:'超级轮', value:118, sub:'数十亿' },
    ],
};

function SlideStaircase(props){
  useDeckStyles(props.theme);
  const T = (deckTheme ? deckTheme(props.theme) : {});
  const ACC = T.accent || '#46e3c6';
  const BLUE = T.blue || '#4a86ff';

  const {
    stepCount, direction, showRidge, showValue, focus, focusIndex, labelType,
    head, steps,
  } = { ...defaultProps, ...props };

  let shown = steps.slice(0, Math.max(3, Math.min(stepCount, steps.length)));
  if (direction === '升序') shown = [...shown].sort((a,b)=>a.value-b.value);
  const fIdx = Math.max(0, Math.min(focusIndex, shown.length - 1));
  const maxV = Math.max(...shown.map(s=>s.value)) || 1;
  const num = (i)=> deckLabel(labelType, i, { keyword:'LV' });

  return (
    <div style={{position:'relative', width:'100%', height:'100%', overflow:'hidden',
          padding:'var(--pad-y) var(--pad-x)', display:'flex', flexDirection:'column'}}>
      <div className="dk-orb" style={{width:560, height:560, right:-170, top:-160,
          background:`radial-gradient(circle at 50% 50%, ${hexA(BLUE,.16)}, ${hexA(BLUE,0)} 70%)`}}></div>

      <SlideHead no="递进" en={head.en} cn={head.cn} badge="⌐" />

      <div style={{flex:'1 1 0', minHeight:0, position:'relative', display:'flex',
            alignItems:'flex-end', gap:'min(1.6vw,22px)', marginTop:30, paddingBottom:8}}>
        {/* 上升轮廓折线 */}
        {showRidge && (<>
          <svg viewBox="0 0 1000 600" preserveAspectRatio="none" style={{position:'absolute', inset:0, width:'100%', height:'100%', pointerEvents:'none', zIndex:3}}>
            <polyline fill="none" stroke={hexA(ACC,.7)} strokeWidth="2.5" strokeLinejoin="round"
              points={shown.map((s,i)=>{
                const x = ((i+0.5)/shown.length)*1000;
                const y = 600 - (s.value/maxV)*540 - 6;
                return `${x},${y}`;
              }).join(' ')} />
          </svg>
          {/* 圆点改用 HTML 叠层，避免 SVG preserveAspectRatio=none 把圆压扁成椭圆 */}
          <div style={{position:'absolute', inset:0, pointerEvents:'none', zIndex:4}}>
            {shown.map((s,i)=>{
              const hot = focus&&i===fIdx;
              const xp = ((i+0.5)/shown.length)*100;
              const yp = (600 - (s.value/maxV)*540 - 6)/600*100;
              const sz = hot?16:11;
              return <span key={i} style={{position:'absolute', left:xp+'%', top:yp+'%', width:sz, height:sz,
                  transform:'translate(-50%,-50%)', borderRadius:'50%', background: hot?'#fff':ACC,
                  boxShadow: hot?`0 0 12px ${hexA(ACC,.85)}`:'none'}}></span>;
            })}
          </div>
        </>)}

        {shown.map((s,i)=>{
          const hot = focus && i===fIdx;
          const h = 12 + (s.value/maxV)*82; // 百分比高度
          return (
            <div key={i} className={'dk-anim d'+Math.min(i+1,6)} style={{flex:'1 1 0', height:h+'%',
                  position:'relative', borderRadius:'10px 10px 0 0',
                  background: hot
                    ? `linear-gradient(180deg, ${hexA(ACC,.42)}, ${hexA(ACC,.86)})`
                    : `linear-gradient(180deg, ${hexA(BLUE,.30)}, ${hexA('#0a1230',.62)})`,
                  border:`1px solid ${hexA(hot?ACC:'#ffffff',hot?.7:.14)}`,
                  borderBottom:'none',
                  boxShadow: hot?`0 -8px 40px ${hexA(ACC,.35)}`:'none',
                  display:'flex', flexDirection:'column', alignItems:'center'}}>
              {/* 顶面高光 */}
              <div style={{position:'absolute', top:0, left:0, right:0, height:6, borderRadius:'10px 10px 0 0',
                  background: hot?hexA('#fff',.85):hexA(ACC,.55)}}></div>
              {/* 阶面数值 */}
              {showValue && (
                <div style={{marginTop:18, fontFamily:'var(--font-display)', fontWeight:900,
                    fontSize: hot?56:42, lineHeight:.9, color: hot?'#fff':'rgba(255,255,255,.86)'}}>{s.value}</div>
              )}
              <div style={{fontFamily:'var(--font-mono)', fontSize:13, letterSpacing:'.1em', color: hot?'#04122e':ACC,
                  background: hot?hexA('#fff',.85):'transparent', padding: hot?'1px 8px':'0', borderRadius:20, marginTop:6}}>{num(i)}</div>
              {/* 踏步立面名目 */}
              <div style={{position:'absolute', bottom:14, left:0, right:0, textAlign:'center', padding:'0 6px'}}>
                <div style={{fontFamily:'var(--font-cn)', fontWeight:800, fontSize:'var(--type-small)',
                    color: hot?'#04122e':'#fff', textShadow: hot?'none':'0 1px 6px rgba(2,6,24,.5)'}}>{s.label}</div>
                <div style={{fontFamily:'var(--font-cn)', fontSize:15, color: hot?hexA('#04122e',.7):'var(--ink-faint)', marginTop:2}}>{s.sub}</div>
              </div>
            </div>
          );
        })}
      </div>
      {/* 地基线 */}
      <div style={{height:3, background:`linear-gradient(90deg, ${hexA(ACC,.5)}, ${hexA('#fff',.08)})`, borderRadius:2}}></div>
    </div>
  );

  function hexA(hex, a){
    if(!hex || hex[0] !== '#') return hex;
    const x = hex.slice(1); const f = x.length===3 ? x.split('').map(c=>c+c).join('') : x;
    return `rgba(${parseInt(f.slice(0,2),16)},${parseInt(f.slice(2,4),16)},${parseInt(f.slice(4,6),16)},${a})`;
  }
}

export default SlideStaircase;

/* ── 模板参数 schema（自描述 · 迁移即带控件；Tweaks 由此自动生成） ── */
export const slideSpec = { defaults: defaultProps, slot:'stair', name:'阶梯递进 · Staircase', controls:[
  { prop:'stepCount', type:'slider', label:'数量', default:5, min:3, max:6, step:1 },
  { prop:'direction', type:'radio', label:'排序', default:'升序', options:['升序','原序'] },
  { prop:'showRidge', type:'toggle', label:'装饰线', default:true, desc:'上升轮廓线' },
  { prop:'showValue', type:'toggle', label:'阶面数值', default:true },
  { prop:'labelType', type:'labelType', label:'标签类型', default:'数字' },
  { prop:'focus', type:'focus', label:'重点信息 Focus', default:true },
  { prop:'focusIndex', type:'slider', label:'焦点序号', default:4, min:0, max:(p)=>p.stepCount-1, maxFromKey:'stepCount', maxFromKeyOffset:-1, displayOffset:1, step:1, showIf:(p)=>p.focus },
]};
