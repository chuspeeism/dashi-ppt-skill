import { useDeckStyles, deckTheme, deckLabel, SlideShell, SlideHead } from './DeckKit.jsx';
/* ============================================================================
   SlideHeatmap — 月度热力网格（行=赛道 × 列=月份，按强度着色）
   独立组件：仅靠 props 控制内容与样式；render 时自注入 DeckKit 基座样式。

   ── 可调参数（Props） ──────────────────────────────────────────────────────
   | prop         | 类型                         | 默认值 | 说明                            |
   | rows         | Row[]                        | 见下   | 数据源（每行一个类别 + 12 月值）|
   | rowCount     | number (2–6)                 | 6      | 展示行数（截取）                |
   | colCount     | number (6–12)                | 12     | 展示列数（截取月份）            |
   | focus        | boolean                      | true   | 是否高亮某一行                  |
   | focusIndex   | number (0-based)             | 0      | 高亮第几行                      |
   | highlightCol | number (-1=关)               | -1     | 高亮第几列                      |
   | showScale    | boolean                      | true   | 是否显示色阶图例                |
   | labelType    | 'number'|'symbol'|'keyword'  | number | 行首角标样式                    |
   | showAside    | boolean                      | true   | 是否显示「读图提示」装饰条      |
   | badge        | string                       | '10'   | 页眉编号徽标                    |
   Row = { cn:string, vals:number[] }   vals 为 0–100 强度
   ========================================================================== */
/* ── 页面属性契约 · defaultProps ──────────────────────────────────────────
   本页全部可见文案 / 数据 / 图片槽默认值集中于此，直接编辑即可换内容；
   组件内部以 { ...defaultProps, ...props } 合并，外部传同名 props 逐项覆盖。 */
export const defaultProps = {
  rowCount: 6,
  colCount: 12,
  focus: true,
  focusIndex: 0,
  highlightCol: -1,
  showScale: true,
  labelType: 'number',
  showAside: true,
  badge: '10',
  rows: [
      { cn:'大模型',     vals:[38,52,60,74,88,92,96,82,70,56,48,40] },
      { cn:'AI 基础设施', vals:[44,50,58,66,72,78,84,80,76,64,58,52] },
      { cn:'应用层',     vals:[20,28,34,42,55,62,70,66,58,46,38,30] },
      { cn:'企业服务',   vals:[30,34,40,46,50,54,58,56,52,48,44,40] },
      { cn:'数据与算力', vals:[26,30,38,44,48,56,62,60,54,46,40,34] },
      { cn:'医疗与生物', vals:[18,22,26,32,38,44,50,48,44,38,32,28] },
    ],
};

function SlideHeatmap(props){
  useDeckStyles(props.theme);
  const T = (deckTheme ? deckTheme(props.theme) : {});
  const ACC = T.accent || '#46e3c6';
  const BLUE = T.blue || '#4a86ff';

  const MONTHS = ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'];
  const {
    rowCount, colCount, focus, focusIndex, highlightCol, showScale, labelType,
    showAside, badge, rows,
  } = { ...defaultProps, ...props };

  const rc = Math.max(2, Math.min(rowCount, rows.length));
  const cc = Math.max(6, Math.min(colCount, 12));
  const shown = rows.slice(0, rc).map(r=>({ ...r, vals:r.vals.slice(0,cc) }));
  const months = MONTHS.slice(0, cc);
  const fIdx = Math.max(0, Math.min(focusIndex, shown.length - 1));
  const lbl = (i)=> deckLabel(labelType, i, { keyword:'SEG' });

  // 色阶：低→蓝(半透) 高→薄荷(亮)，alpha 随强度提升
  const cellColor = (v)=>{
    const t = Math.max(0, Math.min(v,100))/100;
    const c = mix(BLUE, ACC, t);
    return hexA(c, 0.16 + 0.78*t);
  };
  const peak = (()=>{ let best={r:0,c:0,v:-1}; shown.forEach((r,ri)=>r.vals.forEach((v,ci)=>{ if(v>best.v) best={r:ri,c:ci,v}; })); return best; })();

  return (
    <SlideShell orbs={[{ w:520, h:520, right:-160, top:-150,
        color:`radial-gradient(circle at 50% 50%, ${hexA(ACC,.16)}, ${hexA(ACC,0)} 70%)` }]}>
      <SlideHead no={badge} en="Activity Heatmap" cn="月度热力 · 节奏分布"
        badge={labelType==='keyword'?'HEAT':labelType==='symbol'?'◆':badge} />

      <div style={{flex:'1 1 0', minHeight:0, display:'flex', flexDirection:'column', marginTop:26}}>
        <div className="dk-glass dk-anim d1" style={{flex:'1 1 0', minHeight:0, borderRadius:'var(--dk-radius)',
              padding:'26px 36px', display:'flex', flexDirection:'column'}}>
          {/* 月份表头 */}
          <div style={{display:'grid', gridTemplateColumns:`240px repeat(${cc}, minmax(0,1fr))`, gap:8, alignItems:'end', marginBottom:8}}>
            <span style={{fontFamily:'var(--font-mono)', fontSize:14, color:'var(--ink-faint)', letterSpacing:'.08em'}}>赛道 ＼ 月份</span>
            {months.map((m,ci)=>(
              <span key={ci} style={{textAlign:'center', fontFamily:'var(--font-cn)', fontWeight:600, fontSize:cc<=8?20:16,
                color: ci===highlightCol?ACC:(ci===peak.c?'#fff':'var(--ink-dim)')}}>{m}</span>
            ))}
          </div>

          {/* 行 */}
          <div style={{flex:'1 1 0', minHeight:0, display:'grid', gridTemplateRows:`repeat(${rc}, 1fr)`, gap:8}}>
            {shown.map((r,ri)=>{
              const hot = focus && ri===fIdx;
              return (
                <div key={ri} className={'dk-anim d'+Math.min(ri+1,6)} style={{display:'grid',
                    gridTemplateColumns:`240px repeat(${cc}, minmax(0,1fr))`, gap:8, alignItems:'stretch',
                    borderRadius:14, padding: hot?'4px':'0',
                    background: hot?hexA(ACC,.06):'transparent', outline: hot?`1px solid ${hexA(ACC,.4)}`:'none'}}>
                  <div style={{display:'flex', alignItems:'center', gap:12, minWidth:0}}>
                    <span style={{flexShrink:0, fontFamily:'var(--font-mono)', fontSize:13, color: hot?ACC:'var(--ink-faint)',
                        border:`1px solid ${hot?hexA(ACC,.5):'rgba(255,255,255,.16)'}`, borderRadius:7, padding:'2px 9px'}}>{lbl(ri)}</span>
                    <span style={{fontFamily:'var(--font-cn)', fontWeight:hot?800:600, fontSize:cc<=8?24:21,
                        color: hot?ACC:'#fff', whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis'}}>{r.cn}</span>
                  </div>
                  {r.vals.map((v,ci)=>{
                    const isPeak = ri===peak.r && ci===peak.c;
                    const colHot = ci===highlightCol;
                    return (
                      <div key={ci} style={{position:'relative', borderRadius:9, background:cellColor(v),
                          border: isPeak?`2px solid #fff`:(colHot?`2px solid ${hexA(ACC,.7)}`:'1px solid rgba(255,255,255,.06)'),
                          display:'flex', alignItems:'center', justifyContent:'center',
                          boxShadow: isPeak?`0 0 22px ${hexA(ACC,.5)}`:'none'}}>
                        {cc<=10 && <span style={{fontFamily:'var(--font-display)', fontWeight:700, fontSize:cc<=8?20:16,
                          color: v>62?'#04122e':'rgba(255,255,255,.82)'}}>{v}</span>}
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>

        {/* 底部：色阶图例 + 解读条 */}
        <div style={{display:'flex', gap:22, marginTop:18, alignItems:'stretch'}}>
          {showScale && (
            <div className="dk-glass dk-anim d3" style={{flex:'0 0 360px', borderRadius:22, padding:'18px 26px', display:'flex', flexDirection:'column', justifyContent:'center', gap:12}}>
              <span style={{fontFamily:'var(--font-mono)', fontSize:13, letterSpacing:'.1em', color:'var(--ink-faint)'}}>强度色阶 · 0 → 100</span>
              <div style={{height:16, borderRadius:8, background:`linear-gradient(90deg, ${hexA(BLUE,.18)}, ${hexA(mix(BLUE,ACC,.5),.6)}, ${ACC})`}}></div>
              <div style={{display:'flex', justifyContent:'space-between', fontFamily:'var(--font-mono)', fontSize:13, color:'var(--ink-dim)'}}>
                <span>低</span><span>中</span><span>高</span>
              </div>
            </div>
          )}
          {showAside && (
            <div className="dk-glass-dark dk-anim d2" style={{flex:'1 1 0', borderRadius:22, padding:'22px 30px', display:'flex', gap:22, alignItems:'center'}}>
              <span style={{flexShrink:0, fontFamily:'var(--font-mono)', fontSize:14, letterSpacing:'.12em', color:ACC, writingMode:'vertical-rl', textOrientation:'upright'}}>节奏</span>
              <p style={{fontSize:'var(--type-small)', lineHeight:1.55, color:'rgba(255,255,255,.86)', textWrap:'pretty'}}>
                融资热度在 <b style={{color:'#fff'}}>{months[peak.c]}</b> 触顶，<b style={{color:ACC}}>{shown[peak.r].cn}</b> 全年最为活跃；
                夏季为投放高峰，年末随窗口收紧整体回落。
              </p>
            </div>
          )}
        </div>
      </div>
    </SlideShell>
  );

  function mix(a, b, t){
    const pa=hex2rgb(a), pb=hex2rgb(b);
    const r=Math.round(pa[0]+(pb[0]-pa[0])*t), g=Math.round(pa[1]+(pb[1]-pa[1])*t), bl=Math.round(pa[2]+(pb[2]-pa[2])*t);
    return `#${[r,g,bl].map(x=>x.toString(16).padStart(2,'0')).join('')}`;
  }
  function hex2rgb(hex){ const n=hex.slice(1); const f=n.length===3?n.split('').map(c=>c+c).join(''):n; return [parseInt(f.slice(0,2),16),parseInt(f.slice(2,4),16),parseInt(f.slice(4,6),16)]; }
  function hexA(hex, a){
    if(!hex || hex[0] !== '#') return hex;
    const [r,g,b]=hex2rgb(hex); return `rgba(${r},${g},${b},${a})`;
  }
}

export default SlideHeatmap;

/* ── 模板参数 schema（自描述 · 迁移即带控件；Tweaks 由此自动生成） ── */
export const slideSpec = { defaults: defaultProps, slot:'heatmap', name:'月度热力 · Heatmap', controls:[
  { prop:'rowCount', type:'slider', label:'行数量', default:6, min:2, max:6, step:1 },
  { prop:'colCount', type:'slider', label:'列数量', default:12, min:6, max:12, step:1 },
  { prop:'highlightCol', type:'slider', label:'高亮列（-1关）', default:-1, min:-1, max:(p)=>p.colCount-1, maxFromKey:'colCount', maxFromKeyOffset:-1, step:1 },
  { prop:'showScale', type:'toggle', label:'色阶图例', default:true },
  { prop:'showAside', type:'toggle', label:'装饰文案', default:true },
  { prop:'labelType', type:'labelType', label:'标签类型', default:'数字' },
  { prop:'focus', type:'focus', label:'重点信息 Focus', default:true },
  { prop:'focusIndex', type:'slider', label:'焦点序号', default:0, min:0, max:(p)=>p.rowCount-1, maxFromKey:'rowCount', maxFromKeyOffset:-1, displayOffset:1, step:1, showIf:(p)=>p.focus },
]};
