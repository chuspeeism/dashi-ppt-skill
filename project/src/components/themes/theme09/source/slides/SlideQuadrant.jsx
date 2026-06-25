import { useDeckStyles, deckTheme, deckLabel, SlideShell, SlideHead } from './DeckKit.jsx';
/* ============================================================================
   SlideQuadrant — 定位矩阵（2×2 散点定位图）
   独立组件：仅靠 props 控制内容与样式；render 时自注入 DeckKit 基座样式。

   ── 可调参数（Props） ──────────────────────────────────────────────────────
   | prop        | 类型                          | 默认值 | 说明                              |
   | points      | Point[]                       | 见下   | 散点数据源                        |
   | itemCount   | number (3–8)                  | 8      | 实际展示的点数（截取）            |
   | focus       | boolean                       | true   | 是否高亮某个点                    |
   | focusIndex  | number (0-based)              | 0      | 高亮第几个点                      |
   | labelType   | 'number'|'symbol'|'keyword'   | number | 点徽标样式                        |
   | showZones   | boolean                       | true   | 是否显示四象限底色 + 象限名        |
   | axis        | {x:[低,高], y:[低,高]}         | 见下   | 轴向语义标签                      |
   | zones       | string[4]                     | 见下   | 四象限名（左下→右下→左上→右上）   |
   | showAside   | boolean                       | true   | 是否显示「读图提示」装饰条        |
   | badge       | string                        | '09'   | 页眉编号徽标                      |
   | theme       | Partial<DeckTheme>            | —      | 设计令牌覆盖                      |
   Point = { name, x:0–100, y:0–100, size?:0–1, tag }
   ========================================================================== */
/* ── 页面属性契约 · defaultProps ──────────────────────────────────────────
   本页全部可见文案 / 数据 / 图片槽默认值集中于此，直接编辑即可换内容；
   组件内部以 { ...defaultProps, ...props } 合并，外部传同名 props 逐项覆盖。 */
export const defaultProps = {
  itemCount: 8,
  focus: true,
  focusIndex: 0,
  labelType: 'number',
  showZones: true,
  axis: { x:['商业化成熟度 低','高'], y:['估值水平 低','高'] },
  zones: ['早期种子', '价值洼地', '叙事驱动', '双高龙头'],
  // 左下, 右下, 左上, 右上
  showAside: true,
  badge: '09',
  points: [
      { name:'OpenAI',     x:86, y:97, size:1.0, tag:'大模型' },
      { name:'Databricks', x:90, y:82, size:0.9, tag:'基础设施' },
      { name:'Anthropic',  x:68, y:80, size:0.85, tag:'大模型' },
      { name:'xAI',        x:54, y:74, size:0.8, tag:'大模型' },
      { name:'Safe SI',    x:18, y:68, size:0.6, tag:'大模型' },
      { name:'Scale AI',   x:80, y:52, size:0.6, tag:'基础设施' },
      { name:'Glean',      x:86, y:38, size:0.5, tag:'垂直应用' },
      { name:'Harvey',     x:80, y:28, size:0.45, tag:'垂直应用' },
    ],
};

function SlideQuadrant(props){
  useDeckStyles(props.theme);
  const T = (deckTheme ? deckTheme(props.theme) : {});
  const ACC = T.accent || '#46e3c6';
  const BLUE = T.blue || '#4a86ff';
  const VIO = T.violet || '#9f7bff';

  const {
    itemCount, focus, focusIndex, labelType, showZones, axis, zones,
    showAside, badge, points,
  } = { ...defaultProps, ...props };

  const tagColor = (tag)=> tag==='大模型'?BLUE : tag==='基础设施'?ACC : tag==='垂直应用'?VIO : '#cfe0ff';
  const data = points.slice(0, Math.max(3, Math.min(itemCount, points.length)));
  const fIdx = Math.max(0, Math.min(focusIndex, data.length - 1));
  const lbl = (i)=> deckLabel(labelType, i, { keyword:'P' });

  // 几何
  const W = 1500, H = 640, m = 64;
  const plotW = W - m*2, plotH = H - m*2;
  const px = (x)=> m + (x/100)*plotW;
  const py = (y)=> m + plotH - (y/100)*plotH;
  const cx0 = m + plotW/2, cy0 = m + plotH/2;

  return (
    <SlideShell orbs={[{ w:520, h:520, right:-170, bottom:-160,
        color:`radial-gradient(circle at 50% 50%, ${hexA(VIO,.16)}, ${hexA(VIO,0)} 70%)` }]}>
      <SlideHead no={badge} en="Positioning Map" cn="定位矩阵 · 估值象限"
        badge={labelType==='keyword'?'MAP':labelType==='symbol'?'◆':badge} />

      <div style={{flex:'1 1 0', minHeight:0, display:'flex', gap:28, marginTop:24}}>
        {/* 散点图卡 */}
        <div className="dk-glass dk-anim d1" style={{flex:'1 1 0', minWidth:0, borderRadius:'var(--dk-radius)', padding:'18px 20px', display:'flex'}}>
          <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="xMidYMid meet" style={{width:'100%', height:'auto', display:'block', maxHeight:'100%'}}>
            {/* 象限底色 */}
            {showZones && <>
              <rect x={cx0} y={m} width={plotW/2} height={plotH/2} fill={hexA(ACC,.07)} />
              <rect x={m} y={m} width={plotW/2} height={plotH/2} fill={hexA(BLUE,.05)} />
              {[[m+plotW*0.25, m+plotH*0.75, zones[0]],
                [m+plotW*0.75, m+plotH*0.75, zones[1]],
                [m+plotW*0.25, m+plotH*0.25, zones[2]],
                [m+plotW*0.75, m+plotH*0.25, zones[3]]].map((z,i)=>(
                <text key={i} x={z[0]} y={z[1]} textAnchor="middle" fontFamily="var(--font-cn)" fontWeight="700"
                  fontSize="26" fill="rgba(255,255,255,.16)" letterSpacing="0.1em">{z[2]}</text>
              ))}
            </>}

            {/* 中轴 */}
            <line x1={cx0} y1={m} x2={cx0} y2={m+plotH} stroke="rgba(255,255,255,.18)" strokeWidth="1.5" strokeDasharray="2 7" />
            <line x1={m} y1={cy0} x2={m+plotW} y2={cy0} stroke="rgba(255,255,255,.18)" strokeWidth="1.5" strokeDasharray="2 7" />
            {/* 边框 */}
            <rect x={m} y={m} width={plotW} height={plotH} fill="none" stroke="rgba(255,255,255,.22)" strokeWidth="1.5" rx="8" />

            {/* 轴标签 */}
            <text x={m} y={m+plotH+40} fontFamily="var(--font-mono)" fontSize="20" fill="var(--ink-faint)">{axis.x[0]}</text>
            <text x={m+plotW} y={m+plotH+40} textAnchor="end" fontFamily="var(--font-mono)" fontSize="20" fill="var(--ink-faint)">→ {axis.x[1]}</text>
            <text x={m-14} y={m+plotH} textAnchor="end" fontFamily="var(--font-mono)" fontSize="20" fill="var(--ink-faint)">{axis.y[0]}</text>
            <text x={m-14} y={m+14} textAnchor="end" fontFamily="var(--font-mono)" fontSize="20" fill="var(--ink-faint)">↑ {axis.y[1]}</text>

            {/* 散点 */}
            {data.map((p,i)=>{
              const hot = focus && i===fIdx;
              const c = tagColor(p.tag);
              const r = 18 + (p.size==null?0.6:p.size)*26;
              return (
                <g key={i}>
                  {hot && <circle cx={px(p.x)} cy={py(p.y)} r={r+12} fill="none" stroke={ACC} strokeWidth="2.5" opacity=".8" />}
                  <circle data-dashi-theme09-quadrant-node={hot?'focus':'normal'} cx={px(p.x)} cy={py(p.y)} r={r}
                    fill={hot?c:hexA(c,.28)} stroke={hot?'#fff':c} strokeWidth={hot?3.4:2}
                    style={{filter: hot?`drop-shadow(0 0 22px ${hexA(c,.78)})`:'none'}} />
                  <text x={px(p.x)} y={py(p.y)+1} textAnchor="middle" dominantBaseline="middle"
                    fontFamily="var(--font-display)" fontWeight="900" fontSize={labelType==='number'?22:18}
                    data-dashi-theme09-quadrant-label={hot?'focus':'normal'} fill="#fff"
                    stroke={hot?'rgba(5,11,34,.55)':'none'} strokeWidth={hot?3:0} paintOrder="stroke">{lbl(i)}</text>
                  <text x={px(p.x)} y={py(p.y)+r+24} textAnchor="middle" fontFamily="var(--font-cn)" fontWeight="700"
                    data-dashi-theme09-quadrant-name={hot?'focus':'normal'} fontSize="20" fill={hot?'#fff':'rgba(255,255,255,.82)'}
                    stroke={hot?'rgba(5,11,34,.45)':'none'} strokeWidth={hot?4:0} paintOrder="stroke">{p.name}</text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* 右侧图例 / 焦点卡 */}
        <div style={{flex:'0 0 360px', display:'flex', flexDirection:'column', gap:16, minHeight:0}}>
          <div className="dk-glass dk-anim d2" style={{flex: focus?'0 0 auto':'1 1 0', minHeight:0, borderRadius:22, padding:'24px 28px'}}>
            <div style={{fontFamily:'var(--font-mono)', fontSize:14, letterSpacing:'.12em', color:'var(--ink-faint)', marginBottom:16}}>赛道图例 · Legend</div>
            {[['大模型',BLUE],['基础设施',ACC],['垂直应用',VIO]].map((g,i)=>(
              <div key={i} style={{display:'flex', alignItems:'center', gap:14, marginBottom:i<2?14:0}}>
                <span style={{width:20, height:20, borderRadius:'50%', flexShrink:0, background:hexA(g[1],.3), border:`2px solid ${g[1]}`}}></span>
                <span style={{fontSize:'var(--type-small)', color:'#fff', fontWeight:600}}>{g[0]}</span>
              </div>
            ))}
            <div style={{height:1, background:'rgba(255,255,255,.12)', margin:'18px 0'}}></div>
            <p style={{fontSize:'var(--type-tiny)', lineHeight:1.5, color:'var(--ink-dim)', textWrap:'pretty'}}>
              气泡大小 ∝ <b style={{color:'#fff'}}>融资规模</b>；横轴为商业化成熟度，纵轴为估值水平。
            </p>
          </div>

          {focus && (()=>{ const p=data[fIdx]; return (
            <div className="dk-glass dk-anim d3" style={{flex:1, minHeight:0, borderRadius:22, padding:'24px 28px',
                  boxShadow:`0 26px 60px ${hexA(ACC,.24)}, 0 0 0 1.5px ${ACC}`, display:'flex', flexDirection:'column', justifyContent:'center'}}>
              <div style={{fontFamily:'var(--font-mono)', fontSize:13, letterSpacing:'.12em', color:ACC, marginBottom:8}}>FOCUS · 焦点标的</div>
              <div style={{fontFamily:'var(--font-cn)', fontWeight:900, fontSize:'var(--type-h2)', lineHeight:1, color:'#fff'}}>{p.name}</div>
              <div style={{display:'flex', gap:24, marginTop:18}}>
                <div><div style={{fontFamily:'var(--font-display)', fontWeight:900, fontSize:40, color:ACC}}>{p.y}</div><div style={{fontSize:13, color:'var(--ink-faint)', fontFamily:'var(--font-mono)'}}>估值水平</div></div>
                <div><div style={{fontFamily:'var(--font-display)', fontWeight:900, fontSize:40, color:'#fff'}}>{p.x}</div><div style={{fontSize:13, color:'var(--ink-faint)', fontFamily:'var(--font-mono)'}}>成熟度</div></div>
              </div>
            </div>
          );})()}
        </div>
      </div>

      {showAside && (
        <div className="dk-glass-dark dk-anim d4" style={{marginTop:18, flexShrink:0, borderRadius:20, padding:'15px 30px',
              display:'flex', alignItems:'center', gap:22}}>
          <span style={{flexShrink:0, fontFamily:'var(--font-mono)', fontSize:14, letterSpacing:'.12em', color:ACC}}>读图提示</span>
          <p style={{fontSize:'var(--type-small)', lineHeight:1.5, color:'rgba(255,255,255,.86)', textWrap:'pretty'}}>
            「<b style={{color:'#fff'}}>双高龙头</b>」象限聚集了估值与成熟度双高的头部公司；而「叙事驱动」象限里高估值低收入的标的，正是泡沫风险的集中区。
          </p>
        </div>
      )}
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

export default SlideQuadrant;

/* ── 模板参数 schema（自描述 · 迁移即带控件；Tweaks 由此自动生成） ── */
export const slideSpec = { defaults: defaultProps, slot:'quadrant', name:'定位矩阵 · Quadrant', controls:[
  { prop:'itemCount', type:'slider', label:'数量', default:8, min:3, max:8, step:1 },
  { prop:'showZones', type:'toggle', label:'区域底色', default:true },
  { prop:'showAside', type:'toggle', label:'装饰文案', default:true },
  { prop:'labelType', type:'labelType', label:'标签类型', default:'数字' },
  { prop:'focus', type:'focus', label:'重点信息 Focus', default:true },
  { prop:'focusIndex', type:'slider', label:'焦点序号', default:0, min:0, max:(p)=>p.itemCount-1, maxFromKey:'itemCount', maxFromKeyOffset:-1, displayOffset:1, step:1, showIf:(p)=>p.focus },
]};
