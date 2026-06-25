import { useDeckStyles, deckTheme, deckLabel, SlideShell, SlideHead } from './DeckKit.jsx';
/* ============================================================================
   SlideFlow — 资金流向（来源 → 赛道 · Sankey 流向图）
   独立组件：仅靠 props 控制内容与样式；render 时自注入 DeckKit 基座样式。

   ── 可调参数（Props） ──────────────────────────────────────────────────────
   | prop        | 类型                          | 默认值 | 说明                              |
   | sources     | Node[]                        | 见下   | 左列：资金来源                    |
   | sectors     | Node[]                        | 见下   | 右列：资金去向赛道                |
   | matrix      | number[][]                    | 见下   | sources×sectors 流量矩阵          |
   | itemCount   | number (2–4)                  | 4      | 展示的来源数（截取并按子集重算）  |
   | focus       | boolean                       | true   | 是否高亮某来源的流向              |
   | focusIndex  | number (0-based)              | 0      | 高亮第几个来源                    |
   | labelType   | 'number'|'symbol'|'keyword'   | number | 来源徽标样式                      |
   | showAside   | boolean                       | true   | 是否显示「流向洞察」装饰条        |
   | badge       | string                        | '10'   | 页眉编号徽标                      |
   | theme       | Partial<DeckTheme>            | —      | 设计令牌覆盖                      |
   Node = { name, en }   matrix[i][j] = 来源 i 流入赛道 j 的金额（亿$）
   ========================================================================== */
/* ── 页面属性契约 · defaultProps ──────────────────────────────────────────
   本页全部可见文案 / 数据 / 图片槽默认值集中于此，直接编辑即可换内容；
   组件内部以 { ...defaultProps, ...props } 合并，外部传同名 props 逐项覆盖。 */
export const defaultProps = {
  itemCount: 4,
  focus: true,
  focusIndex: 0,
  labelType: 'number',
  showAside: true,
  badge: '10',
  sources: [
      { name:'风险资本', en:'Venture Capital' },
      { name:'企业战投', en:'Corp. Strategic' },
      { name:'主权 / 养老', en:'Sovereign & Pension' },
      { name:'对冲 / 共同', en:'Hedge & Mutual' },
    ],
  sectors: [
      { name:'基础大模型', en:'Foundation' },
      { name:'AI 基础设施', en:'Infrastructure' },
      { name:'应用层', en:'Applications' },
      { name:'数据与安全', en:'Data & Safety' },
    ],
  matrix: [
      [186,  98,  126,  60],   // 风险资本
      [120,  72,   18,  10],   // 企业战投
      [ 86,  62,    6,   6],   // 主权 / 养老
      [ 38,  46,   24,  12],   // 对冲 / 共同
    ],
};

function SlideFlow(props){
  useDeckStyles(props.theme);
  const T = (deckTheme ? deckTheme(props.theme) : {});
  const ACC = T.accent || '#46e3c6';
  const BLUE = T.blue || '#4a86ff';
  const VIO = T.violet || '#9f7bff';
  const WARN = T.warn || '#ffb27a';

  const {
    itemCount, focus, focusIndex, labelType, showAside, badge, sources,
    sectors, matrix,
  } = { ...defaultProps, ...props };

  const n = Math.max(2, Math.min(itemCount, sources.length));
  const srcs = sources.slice(0, n);
  const mtx  = matrix.slice(0, n);
  const m = sectors.length;
  const fIdx = Math.max(0, Math.min(focusIndex, n - 1));

  const srcVal = srcs.map((_, i) => mtx[i].reduce((a, b) => a + (b || 0), 0));
  const secVal = sectors.map((_, j) => mtx.reduce((a, row) => a + (row[j] || 0), 0));
  const total  = srcVal.reduce((a, b) => a + b, 0) || 1;
  const srcColor = [ACC, BLUE, VIO, WARN];

  // ---- Sankey 布局 ----
  const VBW = 1180, VBH = 540, nodeW = 22, gap = 22;
  const colTotal = (vals) => vals.reduce((a, b) => a + b, 0);
  const scaleFor = (count, vals) => (VBH - gap * (count - 1)) / (colTotal(vals) || 1);
  const scaleL = scaleFor(n, srcVal);
  const scaleR = scaleFor(m, secVal);

  const leftY = []; { let y = 0; for (let i = 0; i < n; i++){ leftY[i] = y; y += srcVal[i] * scaleL + gap; } }
  const rightY = []; { let y = 0; for (let j = 0; j < m; j++){ rightY[j] = y; y += secVal[j] * scaleR + gap; } }

  const srcOff = srcVal.map((_, i) => leftY[i]);
  const secOff = secVal.map((_, j) => rightY[j]);
  const x1 = nodeW, x2 = VBW - nodeW, cx = (x1 + x2) / 2;

  const ribbons = [];
  for (let i = 0; i < n; i++){
    for (let j = 0; j < m; j++){
      const f = mtx[i][j] || 0;
      if (f <= 0) continue;
      const wL = f * scaleL, wR = f * scaleR;
      const aL = srcOff[i], aR = secOff[j];
      srcOff[i] += wL; secOff[j] += wR;
      ribbons.push({ i, j, f,
        d:`M ${x1} ${aL} C ${cx} ${aL}, ${cx} ${aR}, ${x2} ${aR} L ${x2} ${aR + wR} C ${cx} ${aR + wR}, ${cx} ${aL + wL}, ${x1} ${aL + wL} Z` });
    }
  }

  const lbl = (i) => deckLabel(labelType, i, { keyword:'SRC' });
  const topShare = Math.round(srcVal[fIdx] / total * 100);

  return (
    <SlideShell orbs={[{ w:540, h:540, left:-180, top:-150,
        color:`radial-gradient(circle at 50% 50%, ${hexA(BLUE,.18)}, ${hexA(BLUE,0)} 70%)` }]}>
      <SlideHead no={badge} en="Capital Flow" cn="资金流向 · 来源到赛道"
        badge={labelType==='keyword'?'FLOW':labelType==='symbol'?'◆':badge} />

      <div style={{flex:'1 1 0', minHeight:0, display:'flex', marginTop:18, gap:30}}>
        {/* Sankey 主体 */}
        <div className="dk-anim d1" style={{flex:'1 1 0', minWidth:0, position:'relative', display:'flex', flexDirection:'column'}}>
          {/* 列标题 */}
          <div style={{display:'flex', justifyContent:'space-between', marginBottom:10, flexShrink:0}}>
            <span style={{fontFamily:'var(--font-mono)', fontSize:14, letterSpacing:'.16em', color:'var(--ink-faint)'}}>资金来源 · SOURCE</span>
            <span style={{fontFamily:'var(--font-mono)', fontSize:14, letterSpacing:'.16em', color:'var(--ink-faint)'}}>SECTOR · 流入赛道</span>
          </div>
          <svg viewBox={`0 0 ${VBW} ${VBH}`} preserveAspectRatio="none" style={{flex:'1 1 0', width:'100%', minHeight:0, overflow:'visible'}}>
            {/* 流量带 */}
            {ribbons.map((r, k) => {
              const hot = focus && r.i === fIdx;
              const dim = focus && r.i !== fIdx;
              return <path key={k} d={r.d} fill={hexA(srcColor[r.i % srcColor.length], hot ? .6 : dim ? .07 : .26)}
                style={{transition:'fill .2s'}} />;
            })}
            {/* 左节点 */}
            {srcs.map((s, i) => {
              const h = srcVal[i] * scaleL, hot = focus && i === fIdx, c = srcColor[i % srcColor.length];
              return <g key={'l'+i}>
                <rect x="0" y={leftY[i]} width={nodeW} height={Math.max(2, h)} rx="4"
                  fill={c} opacity={focus && !hot ? .5 : 1} />
                {hot && <rect x="-3" y={leftY[i]-3} width={nodeW+6} height={Math.max(2,h)+6} rx="6" fill="none" stroke={ACC} strokeWidth="2" />}
              </g>;
            })}
            {/* 右节点 */}
            {sectors.map((s, j) => {
              const h = secVal[j] * scaleR;
              return <rect key={'r'+j} x={VBW-nodeW} y={rightY[j]} width={nodeW} height={Math.max(2, h)} rx="4"
                fill="rgba(255,255,255,.5)" />;
            })}
          </svg>
          {/* 左右标签 浮层 */}
          <div style={{position:'absolute', inset:'34px 0 0 0', pointerEvents:'none'}}>
            {srcs.map((s, i) => {
              const h = srcVal[i] * scaleL, hot = focus && i === fIdx;
              const top = leftY[i] / VBH * 100, ht = h / VBH * 100;
              return <div key={'ll'+i} style={{position:'absolute', left:nodeW+12, top:`calc(${top}% + ${ht/2}%)`, transform:'translateY(-50%)'}}>
                <div style={{display:'flex', alignItems:'center', gap:9}}>
                  <span style={{fontFamily:'var(--font-mono)', fontSize:12, color: hot?ACC:'var(--ink-faint)',
                    border:`1px solid ${hot?hexA(ACC,.5):'rgba(255,255,255,.16)'}`, borderRadius:6, padding:'1px 7px'}}>{lbl(i)}</span>
                  <div>
                    <div style={{fontFamily:'var(--font-cn)', fontWeight:800, fontSize:22, color: hot?'#fff':'rgba(255,255,255,.86)', lineHeight:1.1}}>{s.name}</div>
                    <div style={{fontFamily:'var(--font-mono)', fontSize:12, color: hot?ACC:'var(--ink-faint)'}}>{srcVal[i]} 亿$ · {Math.round(srcVal[i]/total*100)}%</div>
                  </div>
                </div>
              </div>;
            })}
            {sectors.map((s, j) => {
              const h = secVal[j] * scaleR;
              const top = rightY[j] / VBH * 100, ht = h / VBH * 100;
              return <div key={'rr'+j} style={{position:'absolute', right:nodeW+12, top:`calc(${top}% + ${ht/2}%)`, transform:'translateY(-50%)', textAlign:'right'}}>
                <div style={{fontFamily:'var(--font-cn)', fontWeight:800, fontSize:22, color:'rgba(255,255,255,.9)', lineHeight:1.1}}>{s.name}</div>
                <div style={{fontFamily:'var(--font-mono)', fontSize:12, color:'var(--ink-faint)'}}>{secVal[j]} 亿$ · {Math.round(secVal[j]/total*100)}%</div>
              </div>;
            })}
          </div>
        </div>
      </div>

      {showAside && (
        <div className="dk-glass-dark dk-anim d5" style={{marginTop:16, flexShrink:0, borderRadius:20, padding:'15px 30px',
              display:'flex', alignItems:'center', gap:22, flexWrap:'wrap'}}>
          <span style={{flexShrink:0, fontFamily:'var(--font-mono)', fontSize:14, letterSpacing:'.12em', color:ACC}}>流向洞察</span>
          <div style={{display:'flex', alignItems:'baseline', gap:8}}>
            <span style={{fontFamily:'var(--font-display)', fontWeight:900, fontSize:38, lineHeight:.9, color:'#fff'}}>{topShare}%</span>
            <span style={{fontSize:'var(--type-tiny)', color:'var(--ink-dim)'}}>由「{srcs[fIdx].name}」注入</span>
          </div>
          <p style={{flex:'1 1 300px', fontSize:'var(--type-tiny)', lineHeight:1.5, color:'var(--ink-dim)', textWrap:'pretty', minWidth:0}}>
            资金主干仍由传统风险资本主导，但企业战投与主权基金的入场显著抬高了单笔规模 —— 钱越来越集中地流向<b style={{color:'#fff'}}>基础大模型与算力基础设施</b>两条主干。
          </p>
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

export default SlideFlow;

/* ── 模板参数 schema（自描述 · 迁移即带控件；Tweaks 由此自动生成） ── */
export const slideSpec = { defaults: defaultProps, slot:'flow', name:'资金流向 · Flow', controls:[
  { prop:'itemCount', type:'slider', label:'数量', default:4, min:2, max:4, step:1, desc:'来源数' },
  { prop:'showAside', type:'toggle', label:'装饰文案', default:true },
  { prop:'labelType', type:'labelType', label:'标签类型', default:'数字' },
  { prop:'focus', type:'focus', label:'重点信息 Focus', default:true },
  { prop:'focusIndex', type:'slider', label:'焦点序号', default:0, min:0, max:(p)=>p.itemCount-1, maxFromKey:'itemCount', maxFromKeyOffset:-1, displayOffset:1, step:1, showIf:(p)=>p.focus },
]};
