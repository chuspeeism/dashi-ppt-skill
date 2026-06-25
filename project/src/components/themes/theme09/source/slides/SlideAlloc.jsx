import { useDeckStyles, deckTheme, deckLabel, SlideShell, SlideHead } from './DeckKit.jsx';
/* ============================================================================
   SlideAlloc — 资金用途（募集资金去向 · 堆叠环图 + 图例）
   独立组件：仅靠 props 控制内容与样式；render 时自注入 DeckKit 基座样式。

   ── 可调参数（Props） ──────────────────────────────────────────────────────
   | prop        | 类型                          | 默认值 | 说明                              |
   | items       | Use[]                         | 见下   | 用途数据源（占比之和=100）        |
   | itemCount   | number (3–5)                  | 5      | 实际展示的用途数（截取并归一）    |
   | focus       | boolean                       | true   | 是否高亮某用途                    |
   | focusIndex  | number (0-based)              | 0      | 高亮第几项                        |
   | labelType   | 'number'|'symbol'|'keyword'   | number | 图例徽标样式                      |
   | showAside   | boolean                       | true   | 是否显示「口径说明」装饰条        |
   | badge       | string                        | '10'   | 页眉编号徽标                      |
   | theme       | Partial<DeckTheme>            | —      | 设计令牌覆盖                      |
   Use = { name, en, pct, note }
   ========================================================================== */
/* ── 页面属性契约 · defaultProps ──────────────────────────────────────────
   本页全部可见文案 / 数据 / 图片槽默认值集中于此，直接编辑即可换内容；
   组件内部以 { ...defaultProps, ...props } 合并，外部传同名 props 逐项覆盖。 */
export const defaultProps = {
  itemCount: 5,
  focus: true,
  focusIndex: 0,
  labelType: 'number',
  showAside: true,
  badge: '10',
  items: [
      { name:'算力与芯片', en:'Compute & Chips', pct:44, note:'GPU 集群、云算力长约、自研芯片' },
      { name:'人才与薪酬', en:'Talent',          pct:24, note:'核心研究员、工程团队扩张' },
      { name:'研发与数据', en:'R&D & Data',      pct:17, note:'模型训练、数据采买与标注' },
      { name:'市场与拓展', en:'Go-to-Market',    pct:10, note:'商业化、企业销售、生态合作' },
      { name:'合规与其他', en:'Ops & Other',     pct:5,  note:'安全合规、行政与储备金' },
    ],
};

function SlideAlloc(props){
  useDeckStyles(props.theme);
  const T = (deckTheme ? deckTheme(props.theme) : {});
  const ACC = T.accent || '#46e3c6';
  const BLUE = T.blue || '#4a86ff';
  const VIO = T.violet || '#9f7bff';
  const WARN = T.warn || '#ffb27a';

  const {
    itemCount, focus, focusIndex, labelType, showAside, badge, items,
  } = { ...defaultProps, ...props };

  const raw = items.slice(0, Math.max(3, Math.min(itemCount, items.length)));
  const sum = raw.reduce((a, x) => a + (x.pct || 0), 0) || 1;
  const data = raw.map(x => ({ ...x, p: (x.pct || 0) / sum * 100 }));
  const fIdx = Math.max(0, Math.min(focusIndex, data.length - 1));
  const colors = [ACC, BLUE, VIO, WARN, '#7fd4ff'];
  const lbl = (i)=> deckLabel(labelType, i, { keyword:'USE' });

  // 环图
  const R = 150, SW = 46, C = 2 * Math.PI * R, GAPDEG = 2;
  let acc = 0;
  const arcs = data.map((d, i) => {
    const len = d.p / 100 * C;
    const gap = (GAPDEG / 360) * C;
    const seg = { i, dash:`${Math.max(0, len - gap)} ${C - Math.max(0, len - gap)}`, offset:-acc, color:colors[i % colors.length] };
    acc += len;
    return seg;
  });

  return (
    <SlideShell orbs={[{ w:520, h:520, left:-160, bottom:-180,
        color:`radial-gradient(circle at 50% 50%, ${hexA(VIO,.18)}, ${hexA(VIO,0)} 70%)` }]}>
      <SlideHead no={badge} en="Use of Proceeds" cn="资金用途 · 钱花在哪"
        badge={labelType==='keyword'?'USE':labelType==='symbol'?'◆':badge} />

      <div style={{flex:'1 1 0', minHeight:0, display:'flex', alignItems:'stretch', marginTop:18, gap:60}}>
        {/* 环图 */}
        <div className="dk-anim d1" style={{flex:'0 0 440px', display:'flex', alignItems:'center', justifyContent:'center', position:'relative'}}>
          <svg viewBox="0 0 380 380" style={{width:420, maxWidth:'100%'}}>
            <circle cx="190" cy="190" r={R} fill="none" stroke="rgba(255,255,255,.06)" strokeWidth={SW} />
            <g transform="rotate(-90 190 190)">
              {arcs.map((a, i) => {
                const hot = focus && i === fIdx, dim = focus && i !== fIdx;
                return <circle key={i} cx="190" cy="190" r={R} fill="none" stroke={a.color}
                  strokeWidth={hot ? SW + 10 : SW} strokeDasharray={a.dash} strokeDashoffset={a.offset}
                  opacity={dim ? .32 : 1} style={{transition:'all .25s'}} />;
              })}
            </g>
            <text x="190" y="172" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="15" letterSpacing="2" fill="var(--ink-faint)">FOCUS</text>
            <text x="190" y="214" textAnchor="middle" fontFamily="var(--font-display)" fontWeight="900" fontSize="66" fill={ACC}>{Math.round(data[fIdx].p)}<tspan fontSize="30" fill="#fff">%</tspan></text>
            <text x="190" y="246" textAnchor="middle" fontFamily="var(--font-cn)" fontWeight="800" fontSize="22" fill="#fff">{data[fIdx].name}</text>
          </svg>
        </div>

        {/* 图例 */}
        <div style={{flex:'1 1 0', minWidth:0, display:'flex', flexDirection:'column', gap:12}}>
          {data.map((d, i) => {
            const hot = focus && i === fIdx, c = colors[i % colors.length];
            return (
              <div key={i} className={'dk-anim d'+Math.min(i+1,6)} style={{flex:'1 1 0', minHeight:0, display:'flex', alignItems:'center', gap:20,
                    borderRadius:16, padding:'0 26px', position:'relative', overflow:'hidden',
                    background: hot ? `linear-gradient(120deg, ${hexA(c,.16)}, rgba(255,255,255,.02))` : 'rgba(255,255,255,.03)',
                    border:`1px solid ${hot ? hexA(c,.55) : 'rgba(255,255,255,.10)'}`,
                    boxShadow: hot ? `0 22px 54px ${hexA(c,.22)}` : 'none'}}>
                <span style={{flexShrink:0, width:14, height:14, borderRadius:4, background:c, boxShadow:`0 0 14px ${hexA(c,.6)}`}}></span>
                <span style={{flexShrink:0, fontFamily:'var(--font-mono)', fontSize:13, color: hot?c:'var(--ink-faint)',
                    border:`1px solid ${hot?hexA(c,.5):'rgba(255,255,255,.16)'}`, borderRadius:7, padding:'2px 9px'}}>{lbl(i)}</span>
                <div style={{flex:1, minWidth:0}}>
                  <div style={{fontFamily:'var(--font-cn)', fontWeight:800, fontSize:'var(--type-sub)', color: hot?'#fff':'rgba(255,255,255,.9)', lineHeight:1}}>{d.name}</div>
                  <div style={{fontSize:13, color:'var(--ink-faint)', marginTop:3, textWrap:'pretty'}}>{d.note}</div>
                </div>
                <div style={{flexShrink:0, display:'flex', alignItems:'baseline', gap:3}}>
                  <span style={{fontFamily:'var(--font-display)', fontWeight:900, fontSize:46, lineHeight:.8, color: hot?c:'#fff'}}>{Math.round(d.p)}</span>
                  <span style={{fontFamily:'var(--font-display)', fontWeight:700, fontSize:20, color:'var(--ink-dim)'}}>%</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {showAside && (
        <div className="dk-glass-dark dk-anim d5" style={{marginTop:16, flexShrink:0, borderRadius:20, padding:'15px 30px',
              display:'flex', alignItems:'center', gap:22, flexWrap:'wrap'}}>
          <span style={{flexShrink:0, fontFamily:'var(--font-mono)', fontSize:14, letterSpacing:'.12em', color:ACC}}>口径说明</span>
          <p style={{flex:'1 1 300px', fontSize:'var(--type-tiny)', lineHeight:1.5, color:'var(--ink-dim)', textWrap:'pretty', minWidth:0}}>
            基于头部公司公开募资说明与访谈估算的<b style={{color:'#fff'}}>典型资金用途结构</b>：算力是绝对大头，近七成资金最终流向「算力 + 人才」两项 —— 这也是当下 AI 公司高烧钱率的根源。比例为加权平均，单家差异较大。
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

export default SlideAlloc;

/* ── 模板参数 schema（自描述 · 迁移即带控件；Tweaks 由此自动生成） ── */
export const slideSpec = { defaults: defaultProps, slot:'alloc', name:'资金用途 · Alloc', controls:[
  { prop:'itemCount', type:'slider', label:'数量', default:5, min:3, max:5, step:1, desc:'用途项数' },
  { prop:'showAside', type:'toggle', label:'装饰文案', default:true },
  { prop:'labelType', type:'labelType', label:'标签类型', default:'数字' },
  { prop:'focus', type:'focus', label:'重点信息 Focus', default:true },
  { prop:'focusIndex', type:'slider', label:'焦点序号', default:0, min:0, max:(p)=>p.itemCount-1, maxFromKey:'itemCount', maxFromKeyOffset:-1, displayOffset:1, step:1, showIf:(p)=>p.focus },
]};
