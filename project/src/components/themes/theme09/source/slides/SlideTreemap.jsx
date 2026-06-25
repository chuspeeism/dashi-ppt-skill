import { useDeckStyles, deckTheme, SlideShell, SlideHead } from './DeckKit.jsx';
/* ============================================================================
   SlideTreemap — 公司版图（头部公司估值 · 矩形树图）
   独立组件：仅靠 props 控制内容与样式；render 时自注入 DeckKit 基座样式。
   方块面积 ∝ 估值；squarified 算法按容器真实比例铺排，方块接近正方形。

   ── 可调参数（Props） ──────────────────────────────────────────────────────
   | prop        | 类型                          | 默认值 | 说明                              |
   | items       | Co[]                          | 见下   | 公司数据源（按估值降序）          |
   | itemCount   | number (5–12)                 | 12     | 实际展示的公司数（截取）          |
   | focus       | boolean                       | true   | 是否高亮某公司                    |
   | focusIndex  | number (0-based)              | 0      | 高亮第几家                        |
   | labelType   | 'number'|'symbol'|'keyword'   | number | （保留：影响焦点卡角标）          |
   | showAside   | boolean                       | true   | 是否显示「版图读法」装饰条        |
   | badge       | string                        | '10'   | 页眉编号徽标                      |
   | theme       | Partial<DeckTheme>            | —      | 设计令牌覆盖                      |
   Co = { name, sector, val, round }   // val = 估值（亿$）
   ========================================================================== */
/* ── 页面属性契约 · defaultProps ──────────────────────────────────────────
   本页全部可见文案 / 数据 / 图片槽默认值集中于此，直接编辑即可换内容；
   组件内部以 { ...defaultProps, ...props } 合并，外部传同名 props 逐项覆盖。 */
export const defaultProps = {
  itemCount: 12,
  focus: true,
  focusIndex: 0,
  labelType: 'number',
  showAside: true,
  badge: '10',
  items: [
      { name:'OpenAI',          sector:'基础模型', val:1570, round:'Series · 年末' },
      { name:'Anthropic',       sector:'基础模型', val:615,  round:'Series F' },
      { name:'xAI',             sector:'基础模型', val:500,  round:'Series C' },
      { name:'Databricks',      sector:'数据平台', val:620,  round:'Series J' },
      { name:'Safe Superint.',  sector:'基础模型', val:320,  round:'Series A' },
      { name:'Perplexity',      sector:'应用层',   val:90,   round:'Series · 后期' },
      { name:'Anysphere',       sector:'应用层',   val:96,   round:'Series C' },
      { name:'Glean',           sector:'应用层',   val:72,   round:'Series F' },
      { name:'Figure AI',       sector:'机器人',   val:260,  round:'Series C' },
      { name:'Scale AI',        sector:'数据平台', val:138,  round:'战略融资' },
      { name:'ElevenLabs',      sector:'应用层',   val:66,   round:'Series C' },
      { name:'Sierra',          sector:'应用层',   val:100,  round:'Series · 后期' },
    ],
};

function SlideTreemap(props){
  useDeckStyles(props.theme);
  const T = (deckTheme ? deckTheme(props.theme) : {});
  const ACC = T.accent || '#46e3c6';
  const BLUE = T.blue || '#4a86ff';

  const {
    itemCount, focus, focusIndex, labelType, showAside, badge, items,
  } = { ...defaultProps, ...props };

  const data = items.slice(0, Math.max(5, Math.min(itemCount, items.length)));
  const fIdx = Math.max(0, Math.min(focusIndex, data.length - 1));
  const totalVal = data.reduce((a, c) => a + (c.val || 0), 0);

  const wrapRef = React.useRef(null);
  const [size, setSize] = React.useState({ w: 1180, h: 540 });
  React.useLayoutEffect(() => {
    const el = wrapRef.current; if (!el) return;
    // clientWidth/Height are layout px — unaffected by ancestor CSS transform
    // (deck-stage scales the canvas), unlike getBoundingClientRect.
    const read = () => { const w = el.clientWidth, h = el.clientHeight; if (w > 4 && h > 4) setSize({ w, h }); };
    read();
    const ro = new ResizeObserver(read); ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const cells = squarify(data.map(c => ({ value: Math.max(1, c.val || 1), c })), 0, 0, size.w, size.h);

  // 色：按估值大小在 蓝→薄荷 区间渐变
  const maxV = Math.max(...data.map(c => c.val || 0)) || 1;

  return (
    <SlideShell orbs={[{ w:520, h:520, right:-170, bottom:-180,
        color:`radial-gradient(circle at 50% 50%, ${hexA(ACC,.16)}, ${hexA(ACC,0)} 70%)` }]}>
      <SlideHead no={badge} en="Company Map" cn="公司版图 · 估值占位"
        badge={labelType==='keyword'?'MAP':labelType==='symbol'?'◆':badge} />

      <div style={{flex:'1 1 0', minHeight:0, display:'flex', marginTop:20, gap:26}}>
        {/* 树图 */}
        <div ref={wrapRef} className="dk-anim d1" style={{flex:'1 1 0', minWidth:0, position:'relative', borderRadius:'var(--dk-radius)', overflow:'hidden'}}>
          {cells.map((cell, idx) => {
            const co = cell.c.c;
            const i = data.indexOf(co);
            const hot = focus && i === fIdx;
            const t = (co.val || 0) / maxV;
            const base = mix(BLUE, ACC, t);
            const big = cell.w > 110 && cell.h > 78;
            const mid = cell.w > 64 && cell.h > 44;
            const fitFs = (txt, max, min)=> Math.max(min, Math.min(max, Math.floor((cell.w - 24) / Math.max(3, (txt||'').length) / 0.68)));
            const nameFs = fitFs(co.name, big?28:19, big?13:9);
            const valFs = big ? 40 : mid ? Math.max(16, Math.min(26, Math.floor(cell.w/5.2))) : 15;
            const smallNameFs = fitFs(co.name, 14, 9);
            return (
              <div key={idx} style={{position:'absolute', left:`${cell.x/size.w*100}%`, top:`${cell.y/size.h*100}%`, width:`${cell.w/size.w*100}%`, height:`${cell.h/size.h*100}%`, padding:3, boxSizing:'border-box'}}>
                <div style={{width:'100%', height:'100%', borderRadius:13, padding: big?'12px 14px':'7px 9px', overflow:'hidden', position:'relative',
                      display:'flex', flexDirection:'column', justifyContent:'space-between',
                      background: hot
                        ? `linear-gradient(150deg, ${hexA(ACC,.5)}, ${hexA(ACC,.18)})`
                        : `linear-gradient(150deg, ${hexA(base,.34)}, ${hexA(base,.1)})`,
                      border:`1.5px solid ${hot ? ACC : hexA(base,.5)}`,
                      boxShadow: hot ? `inset 0 0 0 1.5px ${ACC}, 0 20px 50px ${hexA(ACC,.3)}` : 'inset 0 1px 0 rgba(255,255,255,.14)'}}>
                  {mid && <div style={{fontFamily:'var(--font-cn)', fontWeight:900, fontSize: nameFs, lineHeight:1.04,
                      color:'#fff', overflow:'hidden', wordBreak:'break-word'}}>{co.name}</div>}
                  {big && <div style={{fontFamily:'var(--font-mono)', fontSize:13, letterSpacing:'.04em', color:'rgba(255,255,255,.78)'}}>{co.sector}</div>}
                  <div style={{display:'flex', alignItems:'baseline', gap:4, marginTop:'auto', whiteSpace:'nowrap'}}>
                    <span style={{fontFamily:'var(--font-display)', fontWeight:900, fontSize: valFs, lineHeight:.85,
                        color: hot?'#fff':'#eaf1ff'}}>{co.val}</span>
                    {mid && <span style={{fontFamily:'var(--font-cn)', fontSize: big?15:12, color:'rgba(255,255,255,.7)'}}>亿$</span>}
                  </div>
                  {!mid && <div style={{position:'absolute', inset:0, display:'flex', alignItems:'center', justifyContent:'center',
                      fontFamily:'var(--font-cn)', fontWeight:800, fontSize: smallNameFs, color:'#fff', textAlign:'center', padding:2, lineHeight:1.05, wordBreak:'break-word'}}>{co.name}</div>}
                </div>
              </div>
            );
          })}
        </div>

        {/* 焦点卡 */}
        <div className="dk-glass dk-anim d2" style={{flex:'0 0 350px', borderRadius:'var(--dk-radius)', padding:'30px 32px',
              display:'flex', flexDirection:'column', justifyContent:'center', gap:18, boxShadow:`0 0 0 2px ${hexA(ACC,.45)}`}}>
          <span style={{fontFamily:'var(--font-mono)', fontSize:13, letterSpacing:'.12em', color:ACC}}>FOCUS · 焦点公司</span>
          <div>
            <div style={{fontFamily:'var(--font-cn)', fontWeight:900, fontSize:52, lineHeight:1, color:'#fff'}}>{data[fIdx].name}</div>
            <div style={{fontFamily:'var(--font-mono)', fontSize:15, color:'var(--ink-dim)', marginTop:8}}>{data[fIdx].sector} · {data[fIdx].round}</div>
          </div>
          <div style={{display:'flex', alignItems:'baseline', gap:8, whiteSpace:'nowrap'}}>
            <span style={{fontFamily:'var(--font-display)', fontWeight:900, fontSize:88, lineHeight:.8, color:ACC, textShadow:`0 0 30px ${hexA(ACC,.45)}`}}>{data[fIdx].val}</span>
            <span style={{fontFamily:'var(--font-cn)', fontWeight:700, fontSize:'var(--type-sub)', color:'var(--ink-dim)'}}>亿$</span>
          </div>
          <div style={{height:1, background:'rgba(255,255,255,.12)'}}></div>
          <div style={{display:'flex', alignItems:'baseline', justifyContent:'space-between'}}>
            <span style={{fontSize:'var(--type-tiny)', color:'var(--ink-dim)'}}>占样本总估值</span>
            <span style={{fontFamily:'var(--font-display)', fontWeight:900, fontSize:34, color:'#fff'}}>{Math.round((data[fIdx].val||0)/totalVal*100)}%</span>
          </div>
        </div>
      </div>

      {showAside && (
        <div className="dk-glass-dark dk-anim d5" style={{marginTop:16, flexShrink:0, borderRadius:20, padding:'15px 30px',
              display:'flex', alignItems:'center', gap:22, flexWrap:'wrap'}}>
          <span style={{flexShrink:0, fontFamily:'var(--font-mono)', fontSize:14, letterSpacing:'.12em', color:ACC}}>版图读法</span>
          <p style={{flex:'1 1 300px', fontSize:'var(--type-tiny)', lineHeight:1.5, color:'var(--ink-dim)', textWrap:'pretty', minWidth:0}}>
            方块面积代表估值体量 —— 少数<b style={{color:'#fff'}}>基础模型与数据平台</b>公司几乎占满整张版图，应用层公司数量多但单体面积小，「头部吞噬版图」的格局一目了然。估值取年内最新公开口径。
          </p>
        </div>
      )}
    </SlideShell>
  );

  // ---- squarified treemap ----
  function squarify(children, x, y, w, h){
    const out = [];
    const total = children.reduce((s, c) => s + c.value, 0) || 1;
    const scale = (w * h) / total;
    const areas = children.map(c => ({ c, a: c.value * scale }));
    let X = x, Y = y, W = w, H = h;
    let row = [], ri = 0;

    const worst = (rw, side) => {
      const s = rw.reduce((acc, r) => acc + r.a, 0);
      let mx = -Infinity, mn = Infinity;
      for (const r of rw){ if (r.a > mx) mx = r.a; if (r.a < mn) mn = r.a; }
      return Math.max((side * side * mx) / (s * s), (s * s) / (side * side * mn));
    };
    const flush = (rw) => {
      const s = rw.reduce((acc, r) => acc + r.a, 0);
      if (W >= H){
        const strip = s / H; let cy = Y;
        for (const r of rw){ const rh = r.a / strip; out.push({ x:X, y:cy, w:strip, h:rh, c:r.c }); cy += rh; }
        X += strip; W -= strip;
      } else {
        const strip = s / W; let cx = X;
        for (const r of rw){ const rw2 = r.a / strip; out.push({ x:cx, y:Y, w:rw2, h:strip, c:r.c }); cx += rw2; }
        Y += strip; H -= strip;
      }
    };

    while (ri < areas.length){
      const nx = areas[ri];
      const side = Math.min(W, H) || 1;
      if (row.length === 0){ row.push(nx); ri++; continue; }
      if (worst(row.concat(nx), side) <= worst(row, side)){ row.push(nx); ri++; }
      else { flush(row); row = []; }
    }
    if (row.length) flush(row);
    return out;
  }

  function mix(a, b, t){
    const pa=hx(a), pb=hx(b);
    return `rgb(${Math.round(pa[0]+(pb[0]-pa[0])*t)},${Math.round(pa[1]+(pb[1]-pa[1])*t)},${Math.round(pa[2]+(pb[2]-pa[2])*t)})`;
  }
  function hx(hex){ const x=hex.slice(1); const f=x.length===3?x.split('').map(c=>c+c).join(''):x;
    return [parseInt(f.slice(0,2),16),parseInt(f.slice(2,4),16),parseInt(f.slice(4,6),16)]; }
  function hexA(hex, a){
    if(!hex || hex[0] !== '#') return hex;
    const f = hx(hex); return `rgba(${f[0]},${f[1]},${f[2]},${a})`;
  }
}

export default SlideTreemap;

/* ── 模板参数 schema（自描述 · 迁移即带控件；Tweaks 由此自动生成） ── */
export const slideSpec = { defaults: defaultProps, slot:'treemap', name:'公司版图 · Treemap', controls:[
  { prop:'itemCount', type:'slider', label:'数量', default:12, min:5, max:12, step:1 },
  { prop:'showAside', type:'toggle', label:'装饰文案', default:true },
  { prop:'labelType', type:'labelType', label:'标签类型', default:'数字' },
  { prop:'focus', type:'focus', label:'重点信息 Focus', default:true },
  { prop:'focusIndex', type:'slider', label:'焦点序号', default:0, min:0, max:(p)=>p.itemCount-1, maxFromKey:'itemCount', maxFromKeyOffset:-1, displayOffset:1, step:1, showIf:(p)=>p.focus },
]};
