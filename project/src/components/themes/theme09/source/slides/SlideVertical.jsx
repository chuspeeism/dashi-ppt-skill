import { useDeckStyles, deckTheme, deckLabel, SlideShell, SlideHead } from './DeckKit.jsx';
/* ============================================================================
   SlideVertical — 应用落地（垂直行业渗透 · 进度环网格）
   独立组件：仅靠 props 控制内容与样式；render 时自注入 DeckKit 基座样式。

   ── 可调参数（Props） ──────────────────────────────────────────────────────
   | prop        | 类型                          | 默认值 | 说明                              |
   | items       | Vert[]                        | 见下   | 行业数据源                        |
   | itemCount   | number (4–8)                  | 8      | 实际展示的行业数（截取）          |
   | columns     | number (3–4)                  | 4      | 每行块数                          |
   | focus       | boolean                       | true   | 是否高亮某行业                    |
   | focusIndex  | number (0-based)              | 0      | 高亮第几块                        |
   | labelType   | 'number'|'symbol'|'keyword'   | number | 块角标样式                        |
   | showAside   | boolean                       | true   | 是否显示「落地观察」装饰条        |
   | badge       | string                        | '10'   | 页眉编号徽标                      |
   | theme       | Partial<DeckTheme>            | —      | 设计令牌覆盖                      |
   Vert = { name, en, pct, value, unit, delta }  // pct = 渗透/资金占比 0–100
   ========================================================================== */
/* ── 页面属性契约 · defaultProps ──────────────────────────────────────────
   本页全部可见文案 / 数据 / 图片槽默认值集中于此，直接编辑即可换内容；
   组件内部以 { ...defaultProps, ...props } 合并，外部传同名 props 逐项覆盖。 */
export const defaultProps = {
  itemCount: 8,
  columns: 4,
  focus: true,
  focusIndex: 0,
  labelType: 'number',
  showAside: true,
  badge: '10',
  items: [
      { name:'编程开发', en:'Code', pct:82, value:'212', unit:'亿$', delta:'最快兑现' },
      { name:'客服营销', en:'CX & Mktg', pct:71, value:'168', unit:'亿$', delta:'规模落地' },
      { name:'金融科技', en:'Fintech', pct:58, value:'120', unit:'亿$', delta:'高客单价' },
      { name:'医疗健康', en:'Healthcare', pct:49, value:'96', unit:'亿$', delta:'壁垒深' },
      { name:'法律合规', en:'Legal', pct:44, value:'58', unit:'亿$', delta:'刚需明确' },
      { name:'设计创意', en:'Creative', pct:63, value:'88', unit:'亿$', delta:'生成式红利' },
      { name:'教育科研', en:'Education', pct:38, value:'42', unit:'亿$', delta:'渗透中' },
      { name:'工业制造', en:'Industrial', pct:31, value:'36', unit:'亿$', delta:'早期' },
    ],
};

function SlideVertical(props){
  useDeckStyles(props.theme);
  const T = (deckTheme ? deckTheme(props.theme) : {});
  const ACC = T.accent || '#46e3c6';
  const BLUE = T.blue || '#4a86ff';

  const {
    itemCount, columns, focus, focusIndex, labelType, showAside, badge,
    items,
  } = { ...defaultProps, ...props };

  const data = items.slice(0, Math.max(4, Math.min(itemCount, items.length)));
  const cols = Math.max(3, Math.min(columns, 4));
  const fIdx = Math.max(0, Math.min(focusIndex, data.length - 1));
  const lbl = (i)=> deckLabel(labelType, i, { keyword:'APP' });
  const rows = Math.ceil(data.length / cols);
  const compact = rows >= 3;
  const ringSize = compact ? 72 : 128;
  const pctFs = compact ? 24 : 38;
  const nameFs = compact ? 'var(--type-small)' : 'var(--type-sub)';
  const cardPad = compact ? '10px 16px 10px' : '22px 22px 18px';
  const valFs = compact ? 20 : 26;
  const showEn = !compact;

  const R = 50, SW = 11, CIRC = 2 * Math.PI * R;

  return (
    <SlideShell orbs={[{ w:520, h:520, left:-160, top:-150,
        color:`radial-gradient(circle at 50% 50%, ${hexA(ACC,.16)}, ${hexA(ACC,0)} 70%)` }]}>
      <SlideHead no={badge} en="Vertical Adoption" cn="应用落地 · 垂直行业渗透"
        badge={labelType==='keyword'?'APP':labelType==='symbol'?'◆':badge} />

      <div style={{flex:'1 1 0', minHeight:0, display:'grid', marginTop:24,
            gridTemplateColumns:`repeat(${cols}, minmax(0,1fr))`, gridAutoRows:'1fr', gap:20}}>
        {data.map((v, i) => {
          const hot = focus && i === fIdx;
          const c = hot ? ACC : mix(BLUE, ACC, Math.max(0, Math.min((v.pct||0)/100, 1)));
          const p = Math.max(0, Math.min(v.pct || 0, 100)) / 100;
          return (
            <div key={i} className={'dk-glass dk-anim d'+Math.min(i+1,6)} style={{minHeight:0, borderRadius:'var(--dk-radius)',
                  padding:cardPad, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'space-between',
                  position:'relative', overflow:'hidden',
                  boxShadow: hot ? `0 32px 76px ${hexA(ACC,.26)}, 0 0 0 2px ${ACC}` : '0 20px 50px rgba(3,8,30,.4)'}}>
              <span style={{position:'absolute', top:14, left:16, fontFamily:'var(--font-mono)', fontSize:12, fontWeight:700,
                  color: hot?ACC:'var(--ink-faint)', border:`1px solid ${hot?hexA(ACC,.5):'rgba(255,255,255,.16)'}`, borderRadius:6, padding:'1px 8px'}}>{lbl(i)}</span>
              {/* 进度环 */}
              <div style={{position:'relative', width:ringSize, height:ringSize, marginTop:compact?2:6}}>
                <svg viewBox="0 0 128 128" style={{width:'100%', height:'100%'}}>
                  <circle cx="64" cy="64" r={R} fill="none" stroke="rgba(255,255,255,.10)" strokeWidth={SW} />
                  <circle cx="64" cy="64" r={R} fill="none" stroke={c} strokeWidth={SW} strokeLinecap="round"
                    strokeDasharray={`${CIRC*p} ${CIRC}`} transform="rotate(-90 64 64)"
                    style={{filter: hot?`drop-shadow(0 0 8px ${hexA(ACC,.6)})`:'none', transition:'stroke-dasharray .4s'}} />
                </svg>
                <div style={{position:'absolute', inset:0, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
                  <span style={{fontFamily:'var(--font-display)', fontWeight:900, fontSize:pctFs, lineHeight:.8, color: hot?ACC:'#fff'}}>{v.pct}</span>
                  <span style={{fontFamily:'var(--font-mono)', fontSize:12, color:'var(--ink-faint)'}}>渗透 %</span>
                </div>
              </div>
              {/* 文本 */}
              <div style={{textAlign:'center'}}>
                <div style={{fontFamily:'var(--font-cn)', fontWeight:900, fontSize:nameFs, color:'#fff', lineHeight:1, whiteSpace:'nowrap'}}>{v.name}</div>
                {showEn && <div style={{fontFamily:'var(--font-mono)', fontSize:12, letterSpacing:'.06em', color:'var(--ink-faint)', marginTop:4}}>{v.en}</div>}
              </div>
              {/* 资金 + delta */}
              <div style={{width:'100%', display:'flex', alignItems:'center', justifyContent:'space-between', gap:8, paddingTop:compact?6:12, borderTop:'1px solid rgba(255,255,255,.10)'}}>
                <span style={{display:'flex', alignItems:'baseline', gap:3}}>
                  <span style={{fontFamily:'var(--font-display)', fontWeight:900, fontSize:valFs, color: hot?ACC:'#fff'}}>{v.value}</span>
                  <span style={{fontFamily:'var(--font-cn)', fontSize:14, color:'var(--ink-dim)'}}>{v.unit}</span>
                </span>
                <span style={{fontFamily:'var(--font-cn)', fontSize:13, color:'var(--ink-dim)', display:'inline-flex', alignItems:'center', gap:6}}>
                  <span style={{width:6, height:6, borderRadius:'50%', background:c}}></span>{v.delta}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {showAside && (
        <div className="dk-glass-dark dk-anim d5" style={{marginTop:18, flexShrink:0, borderRadius:20, padding:'15px 30px',
              display:'flex', alignItems:'center', gap:22, flexWrap:'wrap'}}>
          <span style={{flexShrink:0, fontFamily:'var(--font-mono)', fontSize:14, letterSpacing:'.12em', color:ACC}}>落地观察</span>
          <p style={{flex:'1 1 300px', fontSize:'var(--type-tiny)', lineHeight:1.5, color:'var(--ink-dim)', textWrap:'pretty', minWidth:0}}>
            渗透最快的仍是<b style={{color:'#fff'}}>编程、客服与创意</b>这类「文本/代码即产出」的场景；医疗、工业等强壁垒行业资金可观但兑现更慢。渗透率为资金加权的相对估计，仅供研究参考。
          </p>
        </div>
      )}
    </SlideShell>
  );

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

export default SlideVertical;

/* ── 模板参数 schema（自描述 · 迁移即带控件；Tweaks 由此自动生成） ── */
export const slideSpec = { defaults: defaultProps, slot:'vertical', name:'应用落地 · Vertical', controls:[
  { prop:'itemCount', type:'slider', label:'数量', default:8, min:4, max:8, step:1, desc:'行业数' },
  { prop:'columns', type:'slider', label:'每行数量', default:4, min:3, max:4, step:1 },
  { prop:'showAside', type:'toggle', label:'装饰文案', default:true },
  { prop:'labelType', type:'labelType', label:'标签类型', default:'数字' },
  { prop:'focus', type:'focus', label:'重点信息 Focus', default:true },
  { prop:'focusIndex', type:'slider', label:'焦点序号', default:0, min:0, max:(p)=>p.itemCount-1, maxFromKey:'itemCount', maxFromKeyOffset:-1, displayOffset:1, step:1, showIf:(p)=>p.focus },
]};
