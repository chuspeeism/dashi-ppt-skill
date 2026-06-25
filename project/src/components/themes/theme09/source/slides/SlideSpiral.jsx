import { Fragment } from 'react';
import { useDeckStyles, deckTheme, deckLabel, SlideShell, SlideHead } from './DeckKit.jsx';
/* ============================================================================
   SlideSpiral — 螺旋时间轴（阿基米德螺线 · 自内向外的纪程）
   独立组件：仅靠 props 控制内容与样式；render 时自注入 DeckKit 基座样式。
   与 Timeline（水平直轴错位卡）、Orbit（极坐标辐射）、Era（左脊柱分期簇）、
   Journey（照片钉轴）、Phases（甘特跨度条）刻意区分：本页是「阿基米德螺线」——
   时序节点自圆心向外盘旋展开，越外圈越晚近，引线连向各自卡片，读「时间盘旋递进」。

   ── 可调参数（Props） ──────────────────────────────────────────────────────
   | prop        | 类型                          | 默认值 | 说明                          |
   | events      | Event[]                       | 见下   | 里程碑数据源（按时序）        |
   | itemCount   | number (4–8)                  | 7      | 展示节点数（截取）            |
   | showSpine   | boolean                       | true   | 螺线轨迹（装饰）              |
   | showValue   | boolean                       | true   | 节点旁数值/规模               |
   | focus       | boolean                       | true   | 高亮某一节点                  |
   | focusIndex  | number (0-based)              | 0      | 高亮第几个                    |
   | labelType   | 'number'|'symbol'|'keyword'   | number | 节点徽标样式                  |
   | showAside   | boolean                       | true   | 圆心枢轴文案（装饰）          |
   Event = { date, title, text, tone:'acc'|'blue'|'violet'|'warn' }
   ========================================================================== */
/* ── 页面属性契约 · defaultProps ──────────────────────────────────────────
   本页全部可见文案 / 数据 / 图片槽默认值集中于此，直接编辑即可换内容；
   组件内部以 { ...defaultProps, ...props } 合并，外部传同名 props 逐项覆盖。 */
export const defaultProps = {
  itemCount: 7,
  showSpine: true,
  showValue: true,
  focus: true,
  focusIndex: 0,
  labelType: 'number',
  showAside: true,
  hubText: { big:'2024', sub:'资本纪程' },
  head: { no:'08', en:'Spiral · Timeline', cn:'螺旋纪程 · 盘旋递进' },
  events: [
      { date:'02', title:'要约收购',  text:'OpenAI 早期股东要约 · ≈860 亿$', tone:'blue' },
      { date:'05', title:'xAI B 轮',  text:'募资 60 亿$ · 投后 240 亿$',      tone:'acc' },
      { date:'06', title:'战略加注',  text:'Anthropic 获亚马逊追加投资',       tone:'violet' },
      { date:'09', title:'Databricks',text:'J 轮 ≈100 亿$ · 估值 620 亿$',     tone:'acc' },
      { date:'10', title:'OpenAI 新轮',text:'66 亿$ · 估值跃至 1570 亿$',      tone:'blue' },
      { date:'12', title:'Safe SI',   text:'种子轮即募 10 亿$',               tone:'warn' },
      { date:'年末',title:'结构跃迁',  text:'全年 ≥1 亿$ 事件 97 笔',          tone:'acc' },
      { date:'展望',title:'2025 续力', text:'资本向头部进一步收敛',            tone:'violet' },
    ],
};

function SlideSpiral(props){
  useDeckStyles(props.theme);
  const T = (deckTheme ? deckTheme(props.theme) : {});
  const ACC = T.accent || '#46e3c6';
  const BLUE = T.blue || '#4a86ff';
  const VIO = T.violet || '#9f7bff';
  const WARN = T.warn || '#ffb27a';
  const navy = T.navy900 || '#050b22';
  const TONE = { acc:ACC, blue:BLUE, violet:VIO, warn:WARN };

  const {
    itemCount, showSpine, showValue, focus, focusIndex, labelType, showAside,
    hubText, head, events,
  } = { ...defaultProps, ...props };

  const data = events.slice(0, Math.max(4, Math.min(itemCount, events.length)));
  const n = data.length;
  const fIdx = Math.max(0, Math.min(focusIndex, n - 1));
  const lbl = (i)=> deckLabel(labelType, i, { keyword:'E' });

  const W = 1620, H = 760, cx = W*0.25, cy = H*0.5, listX = W*0.52;
  const r0 = 86, growth = 116;                 // 阿基米德：r = r0 + growth*θ（放大以填满）
  const turns = 2.15;                          // 总圈数
  const thetaStart = 0.55*Math.PI;
  const thetaEnd = thetaStart + turns*2*Math.PI;
  const thetaAt = (i)=> thetaStart + (thetaEnd-thetaStart)*(i/(Math.max(1,n-1)));
  const rAt = (th)=> r0 + growth*(th/(2*Math.PI));
  const ptAt = (th)=>{ const r=rAt(th); return [cx + r*Math.cos(th), cy + r*Math.sin(th)]; };

  // 螺线轨迹采样
  let spinePath = '';
  { const N=240; for(let k=0;k<=N;k++){ const th=thetaStart+(thetaEnd-thetaStart)*(k/N)+0.0; const [x,y]=ptAt(th); spinePath += (k===0?`M${x.toFixed(1)},${y.toFixed(1)}`:` L${x.toFixed(1)},${y.toFixed(1)}`);} }

  return (
    <SlideShell orbs={[{ w:560, h:560, left:`${(cx-280)/W*100}%`, top:'50%',
        color:`radial-gradient(circle at 50% 50%, ${hexA(VIO,.16)}, ${hexA(VIO,0)} 66%)` }]}>
      <SlideHead no={head.no} en={head.en} cn={head.cn} badge={head.no} />

      <div className="dk-anim d1" style={{flex:'1 1 0', minHeight:0, position:'relative', marginTop:6}}>
        <div style={{position:'absolute', left:0, top:'50%', transform:'translateY(-50%)', width:W, height:H}}>
          <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} style={{position:'absolute', inset:0}}>
            <defs>
              <linearGradient id="spiGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor={hexA(ACC,1)} /><stop offset=".6" stopColor={hexA(BLUE,.92)} /><stop offset="1" stopColor={hexA(VIO,.88)} />
              </linearGradient>
            </defs>
            {showSpine && <path data-dashi-theme09-spiral-spine="true" d={spinePath} fill="none" stroke="url(#spiGrad)" strokeWidth="5"
              strokeLinecap="round" strokeDasharray="5 9" opacity="1" />}
            {/* 节点 + 引线到卡片 */}
            {data.map((e,i)=>{
              const th=thetaAt(i); const [nx,ny]=ptAt(th); const col=TONE[e.tone]||ACC;
              const hot = focus && i===fIdx, dim = focus && i!==fIdx;
              return (
                <g key={i} opacity={dim?0.5:1}>
                  <circle data-dashi-theme09-spiral-node="true" cx={nx} cy={ny} r={hot?18:13} fill={hot?col:hexA(col,.34)} stroke={col} strokeWidth={hot?3.6:3.4}
                    style={{filter: hot?`drop-shadow(0 0 16px ${hexA(col,.8)})`:`drop-shadow(0 0 10px ${hexA(col,.5)})`}} />
                  <text x={nx} y={ny+(hot?6:5)} textAnchor="middle" fontFamily="var(--font-display)" fontWeight="900" fontSize={hot?16:12} fill={hot?navy:'#fff'}>{lbl(i)}</text>
                </g>
              );
            })}
            {/* 圆心枢轴 */}
            <circle cx={cx} cy={cy} r="62" fill="rgba(5,11,34,.9)" stroke={hexA(ACC,.82)} strokeWidth="2" />
            {showAside
              ? (<g>
                  <text x={cx} y={cy-4} textAnchor="middle" fontFamily="var(--font-display)" fontWeight="900" fontSize="40" fill="#fff">{hubText.big}</text>
                  <text x={cx} y={cy+28} textAnchor="middle" fontFamily="var(--font-cn)" fontWeight="700" fontSize="18" fill={ACC}>{hubText.sub}</text>
                </g>)
              : <text x={cx} y={cy+12} textAnchor="middle" fontFamily="var(--font-display)" fontWeight="900" fontSize="34" fill={ACC}>↻</text>}
          </svg>

          {/* 事件卡：右侧纵列，按时序，左缘引线锚到节点 */}
          {(()=>{
            const cardW = W - listX - 40, listTop = 18, gap = (H-44)/n;
            const cTitleFs = n>=7 ? 28 : n>=6 ? 33 : 'var(--type-sub)';
            const cTextFs  = n>=7 ? 19 : n>=6 ? 22 : 'var(--type-small)';
            const cPad     = n>=7 ? '7px 16px' : '10px 18px';
            const cBadge   = n>=7 ? 40 : 46;
            return data.map((e,i)=>{
              const th=thetaAt(i); const [nx,ny]=ptAt(th); const col=TONE[e.tone]||ACC;
              const hot = focus && i===fIdx, dim = focus && i!==fIdx;
              const cardY = listTop + gap*i, cardMidY = cardY + gap/2;
              return (
                <Fragment key={i}>
                  <svg style={{position:'absolute', inset:0, pointerEvents:'none'}} width={W} height={H} viewBox={`0 0 ${W} ${H}`}>
                    <path data-dashi-theme09-spiral-link="true" d={`M${nx},${ny} C${(nx+listX)/2},${ny} ${listX-70},${cardMidY} ${listX-8},${cardMidY}`}
                      fill="none" stroke={hot?col:hexA(col,.62)} strokeWidth={hot?2.8:2.1} opacity={dim?0.5:hot?1:0.9} />
                    <circle cx={listX-8} cy={cardMidY} r="4.5" fill={hot?col:hexA(col,.84)} opacity={dim?0.58:1} />
                  </svg>
                  <div style={{position:'absolute', left:listX, top:cardY, width:cardW, height:gap-12, display:'flex', alignItems:'center', opacity:dim?0.56:1, transition:'opacity .2s'}}>
                    <div data-dashi-theme09-spiral-card="true" style={{display:'flex', alignItems:'center', gap:14, padding:cPad, borderRadius:14, width:'100%',
                        background: hot?hexA(col,.2):'rgba(42,91,210,.18)', border:`1px solid ${hot?col:'rgba(164,196,255,.34)'}`,
                        boxShadow: hot?`0 12px 30px ${hexA(col,.28)}`:'inset 0 1px 0 rgba(255,255,255,.08)'}}>
                      <span style={{flexShrink:0, width:cBadge, height:cBadge, borderRadius:12, display:'grid', placeItems:'center',
                          fontFamily:'var(--font-mono)', fontWeight:700, fontSize:15, color:hot?navy:'#fff',
                          background:hot?col:hexA(col,.24), border:`1px solid ${hexA(col,.72)}`}}>{e.date}</span>
                      <div style={{minWidth:0}}>
                        <div style={{fontFamily:'var(--font-cn)', fontWeight:900, fontSize:cTitleFs, color:'#fff', lineHeight:1.1, whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis'}}>{e.title}</div>
                        {showValue && <div style={{fontSize:cTextFs, color:'rgba(229,239,255,.82)', lineHeight:1.3, marginTop:3, whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis'}}>{e.text}</div>}
                      </div>
                    </div>
                  </div>
                </Fragment>
              );
            });
          })()}
        </div>
      </div>
    </SlideShell>
  );

  function hexA(hex, a){
    if(!hex || hex[0] !== '#') return hex;
    const x = hex.slice(1); const f = x.length===3 ? x.split('').map(c=>c+c).join('') : x;
    return `rgba(${parseInt(f.slice(0,2),16)},${parseInt(f.slice(2,4),16)},${parseInt(f.slice(4,6),16)},${a})`;
  }
}

export default SlideSpiral;

/* ── 模板参数 schema（自描述 · 迁移即带控件；Tweaks 由此自动生成） ── */
export const slideSpec = { defaults: defaultProps, slot:'spiral', name:'螺旋纪程 · Spiral', controls:[
  { prop:'itemCount', type:'slider', label:'数量', default:7, min:4, max:8, step:1, desc:'节点数' },
  { prop:'showSpine', type:'toggle', label:'装饰文案', default:true, desc:'螺线轨迹' },
  { prop:'showValue', type:'toggle', label:'节点说明', default:true },
  { prop:'showAside', type:'toggle', label:'枢轴文案', default:true },
  { prop:'labelType', type:'labelType', label:'标签类型', default:'数字' },
  { prop:'focus', type:'focus', label:'重点信息 Focus', default:true },
  { prop:'focusIndex', type:'slider', label:'焦点序号', default:0, min:0, max:(p)=>p.itemCount-1, maxFromKey:'itemCount', maxFromKeyOffset:-1, displayOffset:1, step:1, showIf:(p)=>p.focus },
]};
