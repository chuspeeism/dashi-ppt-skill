import { useDeckStyles, deckTheme, deckLabel, SlideShell, SlideHead } from './DeckKit.jsx';
/* ============================================================================
   SlideRadar — 全球格局（区域竞争力 · 雷达图对比）
   独立组件：仅靠 props 控制内容与样式；render 时自注入 DeckKit 基座样式。

   ── 可调参数（Props） ──────────────────────────────────────────────────────
   | prop        | 类型                          | 默认值 | 说明                              |
   | axes        | string[]                      | 见下   | 雷达维度（建议 5–6 个）           |
   | regions     | Region[]                      | 见下   | 区域系列（含各维度 0–100 分）     |
   | itemCount   | number (1–3)                  | 3      | 展示的区域数（截取）              |
   | focus       | boolean                       | true   | 是否高亮某区域                    |
   | focusIndex  | number (0-based)              | 0      | 高亮第几个区域                    |
   | labelType   | 'number'|'symbol'|'keyword'   | number | 图例徽标样式                      |
   | showAside   | boolean                       | true   | 是否显示「格局解读」装饰条        |
   | badge       | string                        | '10'   | 页眉编号徽标                      |
   | theme       | Partial<DeckTheme>            | —      | 设计令牌覆盖                      |
   Region = { name, en, color?, scores:number[] }  // scores 对齐 axes，0–100
   ========================================================================== */
/* ── 页面属性契约 · defaultProps ──────────────────────────────────────────
   本页全部可见文案 / 数据 / 图片槽默认值集中于此，直接编辑即可换内容；
   组件内部以 { ...defaultProps, ...props } 合并，外部传同名 props 逐项覆盖。 */
export const defaultProps = {
  itemCount: 3,
  focus: true,
  focusIndex: 0,
  labelType: 'number',
  showAside: true,
  badge: '10',
  axes: ['融资规模','大模型实力','算力供给','人才密度','政策支持','应用生态'],
  regions: [
      { name:'美国', en:'United States', color:'#46e3c6', scores:[98, 96, 94, 92, 70, 88] },
      { name:'中国', en:'China',         color:'#ffb27a', scores:[62, 78, 66, 80, 90, 84] },
      { name:'欧洲', en:'Europe',        color:'#9f7bff', scores:[44, 58, 40, 64, 76, 60] },
    ],
};

function SlideRadar(props){
  useDeckStyles(props.theme);
  const T = (deckTheme ? deckTheme(props.theme) : {});
  const ACC = T.accent || '#46e3c6';
  const BLUE = T.blue || '#4a86ff';
  const WARN = T.warn || '#ffb27a';

  const {
    itemCount, focus, focusIndex, labelType, showAside, badge, axes,
    regions,
  } = { ...defaultProps, ...props };

  const A = axes.length;
  const regs = regions.slice(0, Math.max(1, Math.min(itemCount, regions.length)));
  const fIdx = Math.max(0, Math.min(focusIndex, regs.length - 1));
  const lbl = (i)=> deckLabel(labelType, i, { keyword:'R' });

  const CX = 280, CY = 280, RAD = 210;
  const ang = (k) => (-90 + k * 360 / A) * Math.PI / 180;
  const pt = (k, r) => [CX + Math.cos(ang(k)) * r, CY + Math.sin(ang(k)) * r];
  const polyPoints = (scores) => scores.map((s, k) => pt(k, RAD * Math.max(0, Math.min(s, 100)) / 100).join(',')).join(' ');
  const rings = [0.25, 0.5, 0.75, 1];

  return (
    <SlideShell orbs={[{ w:540, h:540, right:-180, bottom:-180,
        color:`radial-gradient(circle at 50% 50%, ${hexA(BLUE,.16)}, ${hexA(BLUE,0)} 70%)` }]}>
      <SlideHead no={badge} en="Global Landscape" cn="全球格局 · 区域竞争力"
        badge={labelType==='keyword'?'GEO':labelType==='symbol'?'◆':badge} />

      <div style={{flex:'1 1 0', minHeight:0, display:'flex', alignItems:'center', marginTop:18, gap:54}}>
        {/* 雷达 */}
        <div className="dk-anim d1" style={{flex:'0 0 640px', maxWidth:'58%', display:'flex', justifyContent:'center'}}>
          <svg viewBox="-90 0 740 560" style={{width:680, maxWidth:'100%'}}>
            {/* 网格环 */}
            {rings.map((r, ri) => (
              <polygon key={ri} points={axes.map((_, k) => pt(k, RAD * r).join(',')).join(' ')}
                fill={ri===rings.length-1 ? 'rgba(255,255,255,.02)' : 'none'} stroke="rgba(255,255,255,.12)" strokeWidth="1" />
            ))}
            {/* 轴线 + 维度名 */}
            {axes.map((ax, k) => {
              const [ex, ey] = pt(k, RAD);
              const [lx, ly] = pt(k, RAD + 36);
              const anchor = Math.abs(lx - CX) < 6 ? 'middle' : (lx > CX ? 'start' : 'end');
              return <g key={k}>
                <line x1={CX} y1={CY} x2={ex} y2={ey} stroke="rgba(255,255,255,.10)" strokeWidth="1" />
                <text x={lx} y={ly+5} textAnchor={anchor} fontFamily="var(--font-cn)" fontWeight="700" fontSize="20" fill="rgba(255,255,255,.78)">{ax}</text>
              </g>;
            })}
            {/* 区域多边形（焦点最后绘制置顶） */}
            {regs.map((r, i) => ({ r, i })).sort((a, b) => (a.i===fIdx?1:0) - (b.i===fIdx?1:0)).map(({ r, i }) => {
              const hot = focus && i === fIdx, dim = focus && i !== fIdx, c = r.color || ACC;
              return <g key={i} opacity={dim ? .4 : 1} style={{transition:'opacity .2s'}}>
                <polygon points={polyPoints(r.scores)} fill={hexA(c, hot ? .26 : .12)}
                  stroke={c} strokeWidth={hot ? 3.5 : 2} strokeLinejoin="round" />
                {hot && r.scores.map((s, k) => { const [x, y] = pt(k, RAD * Math.max(0,Math.min(s,100)) / 100);
                  return <circle key={k} cx={x} cy={y} r="5" fill={c} stroke="#0a1230" strokeWidth="2" />; })}
              </g>;
            })}
          </svg>
        </div>

        {/* 图例 + 焦点维度评分 */}
        <div style={{flex:'1 1 0', minWidth:0, display:'flex', flexDirection:'column', gap:14}}>
          {regs.map((r, i) => {
            const hot = focus && i === fIdx, c = r.color || ACC;
            const avg = Math.round(r.scores.reduce((a,b)=>a+b,0) / r.scores.length);
            return (
              <div key={i} className={'dk-anim d'+Math.min(i+2,6)} style={{display:'flex', alignItems:'center', gap:18,
                    borderRadius:16, padding:'16px 24px',
                    background: hot ? `linear-gradient(120deg, ${hexA(c,.16)}, rgba(255,255,255,.02))` : 'rgba(255,255,255,.03)',
                    border:`1px solid ${hot ? hexA(c,.55) : 'rgba(255,255,255,.10)'}`}}>
                <span style={{flexShrink:0, width:16, height:16, borderRadius:5, background:c, boxShadow:`0 0 14px ${hexA(c,.6)}`}}></span>
                <div style={{flex:1, minWidth:0}}>
                  <div style={{display:'flex', alignItems:'baseline', gap:10}}>
                    <span style={{fontFamily:'var(--font-cn)', fontWeight:900, fontSize:'var(--type-sub)', color: hot?'#fff':'rgba(255,255,255,.9)', lineHeight:1}}>{r.name}</span>
                    <span style={{fontFamily:'var(--font-mono)', fontSize:13, letterSpacing:'.06em', color: hot?c:'var(--ink-faint)'}}>{r.en}</span>
                  </div>
                </div>
                <div style={{flexShrink:0, display:'flex', alignItems:'baseline', gap:5}}>
                  <span style={{fontFamily:'var(--font-display)', fontWeight:900, fontSize:48, lineHeight:.8, color: hot?c:'#fff'}}>{avg}</span>
                  <span style={{fontFamily:'var(--font-mono)', fontSize:13, color:'var(--ink-faint)'}}>综合分</span>
                </div>
              </div>
            );
          })}
          {/* 焦点维度明细 */}
          <div className="dk-glass dk-anim d5" style={{borderRadius:16, padding:'14px 22px', display:'flex', flexWrap:'wrap', gap:'8px 18px'}}>
            {axes.map((ax, k) => (
              <div key={k} style={{display:'flex', alignItems:'center', gap:8, fontFamily:'var(--font-cn)', fontSize:15}}>
                <span style={{color:'var(--ink-faint)'}}>{ax}</span>
                <span style={{fontFamily:'var(--font-display)', fontWeight:800, fontSize:18, color: (regs[fIdx].color||ACC)}}>{regs[fIdx].scores[k]}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {showAside && (
        <div className="dk-glass-dark dk-anim d5" style={{marginTop:16, flexShrink:0, borderRadius:20, padding:'15px 30px',
              display:'flex', alignItems:'center', gap:22, flexWrap:'wrap'}}>
          <span style={{flexShrink:0, fontFamily:'var(--font-mono)', fontSize:14, letterSpacing:'.12em', color:ACC}}>格局解读</span>
          <p style={{flex:'1 1 300px', fontSize:'var(--type-tiny)', lineHeight:1.5, color:'var(--ink-dim)', textWrap:'pretty', minWidth:0}}>
            美国在<b style={{color:'#fff'}}>融资规模、算力与人才</b>三轴上几乎拉满，是全球 AI 资本的绝对中心；其它区域各有结构性长板，但在「资金 × 算力」这条主轴上仍存在代际差距。评分为相对量化，仅供研究参考。
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

export default SlideRadar;

/* ── 模板参数 schema（自描述 · 迁移即带控件；Tweaks 由此自动生成） ── */
export const slideSpec = { defaults: defaultProps, slot:'radar', name:'全球格局 · Radar', controls:[
  { prop:'itemCount', type:'slider', label:'数量', default:3, min:1, max:3, step:1, desc:'区域数' },
  { prop:'showAside', type:'toggle', label:'装饰文案', default:true },
  { prop:'labelType', type:'labelType', label:'标签类型', default:'数字' },
  { prop:'focus', type:'focus', label:'重点信息 Focus', default:true },
  { prop:'focusIndex', type:'slider', label:'焦点序号', default:0, min:0, max:(p)=>p.itemCount-1, maxFromKey:'itemCount', maxFromKeyOffset:-1, displayOffset:1, step:1, showIf:(p)=>p.focus },
]};
