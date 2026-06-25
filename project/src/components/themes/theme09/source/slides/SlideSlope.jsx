import { useDeckStyles, deckTheme, deckLabel, SlideShell, SlideHead } from './DeckKit.jsx';
/* ============================================================================
   SlideSlope — 排名变迁斜率图（两期对比 · 升降一目了然）
   独立组件：仅靠 props 控制内容与样式；render 时自注入 DeckKit 基座样式。

   ── 可调参数（Props） ──────────────────────────────────────────────────────
   | prop        | 类型                          | 默认值 | 说明                            |
   | items       | Item[]                        | 见下   | 数据源（每条 = 一个类别两期值） |
   | itemCount   | number (3–8)                  | 8      | 展示条目数（截取）              |
   | showValue   | boolean                       | true   | 是否在端点显示数值              |
   | focus       | boolean                       | true   | 是否高亮某一条                  |
   | focusIndex  | number (0-based)              | 0      | 高亮第几条                      |
   | labelType   | 'number'|'symbol'|'keyword'   | number | 端点角标样式                    |
   | showAside   | boolean                       | true   | 是否显示「迁移解读」装饰条      |
   | periodLeft / periodRight | string             | 见下   | 两期标题（文本，非参数调节）    |
   | badge       | string                        | '10'   | 页眉编号徽标                    |
   Item = { cn:string, left:number, right:number }
   ========================================================================== */
/* ── 页面属性契约 · defaultProps ──────────────────────────────────────────
   本页全部可见文案 / 数据 / 图片槽默认值集中于此，直接编辑即可换内容；
   组件内部以 { ...defaultProps, ...props } 合并，外部传同名 props 逐项覆盖。 */
export const defaultProps = {
  itemCount: 8,
  showValue: true,
  focus: true,
  focusIndex: 0,
  labelType: 'number',
  showAside: true,
  periodLeft: '2023',
  periodRight: '2024',
  unit: '亿$',
  badge: '10',
  items: [
      { cn:'大模型',     left:210, right:420 },
      { cn:'AI 基础设施', left:95,  right:180 },
      { cn:'应用层',     left:60,  right:150 },
      { cn:'企业服务',   left:88,  right:110 },
      { cn:'数据与算力', left:55,  right:90  },
      { cn:'自动驾驶',   left:120, right:75  },
      { cn:'医疗与生物', left:70,  right:88  },
      { cn:'机器人',     left:25,  right:70  },
    ],
};

function SlideSlope(props){
  useDeckStyles(props.theme);
  const T = (deckTheme ? deckTheme(props.theme) : {});
  const ACC = T.accent || '#46e3c6';
  const WARN = T.warn || '#ffb27a';
  const BLUE = T.blue || '#4a86ff';

  const {
    itemCount, showValue, focus, focusIndex, labelType, showAside, periodLeft,
    periodRight, unit, badge, items,
  } = { ...defaultProps, ...props };

  const shown = items.slice(0, Math.max(3, Math.min(itemCount, items.length)));
  const fIdx = Math.max(0, Math.min(focusIndex, shown.length - 1));
  const lbl = (i)=> deckLabel(labelType, i, { keyword:'SEG' });
  const n = shown.length;

  // 排名定位（bump chart）：按两期数值各自排名纵向均匀铺开，
  // 避免数值相近时点位挤在一起、标签互相叠压。
  const leftRank = {}, rightRank = {};
  shown.map((d,i)=>({i,v:d.left})).sort((a,b)=>b.v-a.v).forEach((o,r)=>{ leftRank[o.i]=r; });
  shown.map((d,i)=>({i,v:d.right})).sort((a,b)=>b.v-a.v).forEach((o,r)=>{ rightRank[o.i]=r; });

  const W = 1660, H = 470, padT = 72, padB = 54;
  const plotH = H - padT - padB;
  const leftX = 420, rightX = W-420;
  const yRank = (r)=> padT + (n<=1 ? plotH/2 : (r/(n-1))*plotH);

  return (
    <SlideShell orbs={[{ w:520, h:520, left:-160, top:-150,
        color:`radial-gradient(circle at 50% 50%, ${hexA(BLUE,.20)}, ${hexA(BLUE,0)} 70%)` }]}>
      <SlideHead no={badge} en="Rank Migration" cn="排名变迁 · 两期对比"
        badge={labelType==='keyword'?'SHIFT':labelType==='symbol'?'◆':badge} />

      <div style={{flex:'1 1 0', minHeight:0, display:'flex', flexDirection:'column', marginTop:26}}>
        <div className="dk-glass dk-anim d1" style={{flex:'1 1 0', minHeight:0, borderRadius:'var(--dk-radius)',
              padding:'22px 30px 14px', position:'relative', display:'flex', flexDirection:'column'}}>
          <div style={{position:'relative', flex:'1 1 0', minHeight:0, display:'flex'}}>
          <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" style={{width:'100%', flex:'1 1 0', minHeight:0, display:'block'}}>
            {/* 两期轴 */}
            <line x1={leftX} y1={padT-16} x2={leftX} y2={padT+plotH} stroke="rgba(255,255,255,.16)" strokeWidth="2" />
            <line x1={rightX} y1={padT-16} x2={rightX} y2={padT+plotH} stroke="rgba(255,255,255,.16)" strokeWidth="2" />
            <text x={leftX} y={padT-28} textAnchor="middle" fontFamily="var(--font-display)" fontWeight="900" fontSize="30" fill="var(--ink-dim)">{periodLeft}</text>
            <text x={rightX} y={padT-28} textAnchor="middle" fontFamily="var(--font-display)" fontWeight="900" fontSize="30" fill="#fff">{periodRight}</text>

            {/* 斜线（按排名定位 · 纵向均匀铺开） */}
            {shown.map((d,i)=>{
              const rl=leftRank[i], rr=rightRank[i];
              const up = rr < rl, flat = rr === rl;
              const hot = focus && i===fIdx;
              const col = hot ? ACC : (flat ? hexA(BLUE,.6) : up ? hexA(ACC,.62) : hexA(WARN,.62));
              const yL=yRank(rl), yR=yRank(rr);
              return (<g key={i} opacity={focus && !hot ? .42 : 1}>
                <line x1={leftX} y1={yL} x2={rightX} y2={yR} stroke={col} strokeWidth={hot?7:4} strokeLinecap="round"
                  style={{filter: hot?`drop-shadow(0 0 14px ${hexA(ACC,.7)})`:'none'}} />
                {/* 端点圆改用 HTML 叠层（带背景模糊，且不被 preserveAspectRatio=none 压扁） */}
                {/* 左端标签 */}
                <text x={leftX-26} y={yL+8} textAnchor="end" fontFamily="var(--font-cn)" fontWeight={hot?800:600} fontSize="24"
                  fill={hot?ACC:'rgba(255,255,255,.82)'}>{d.cn}{showValue?`　${d.left}`:''}</text>
                {/* 右端标签 */}
                <text x={rightX+26} y={yR+8} textAnchor="start" fontFamily="var(--font-cn)" fontWeight={hot?800:600} fontSize="24"
                  fill={hot?ACC:'#fff'}>{showValue?`${d.right}　`:''}{d.cn}</text>
              </g>);
            })}
            {/* 焦点变化标注（顶层绘制） */}
            {focus && (()=>{ const rl=leftRank[fIdx], rr=rightRank[fIdx]; const up=rr<rl, flat=rr===rl;
              const yL=yRank(rl), yR=yRank(rr); const dv=shown[fIdx].right-shown[fIdx].left;
              return <text x={(leftX+rightX)/2} y={(yL+yR)/2-16} textAnchor="middle" fontFamily="var(--font-display)" fontWeight="900" fontSize="28"
                fill={flat?BLUE:up?ACC:WARN}>{flat?'＝':up?'▲':'▼'} {dv>=0?'+':''}{dv} {unit}</text>;
            })()}
          </svg>
          {/* 端点圆：HTML 叠层 · 圆形 + 背景模糊（虚化身后斜线，与圆点拉开层次） */}
          <div style={{position:'absolute', inset:0, pointerEvents:'none'}}>
            {shown.flatMap((d,i)=>{
              const rl=leftRank[i], rr=rightRank[i];
              const up=rr<rl, flat=rr===rl, hot=focus&&i===fIdx;
              const yL=(yRank(rl)/H)*100, yR=(yRank(rr)/H)*100;
              const colL = hot?ACC:'#cfe0ff';
              const colR = hot?ACC:(flat?'#cfe0ff':up?ACC:WARN);
              const sz = hot?30:21;
              const dot=(xp,yp,col,k)=>(
                <span key={k} style={{position:'absolute', left:xp+'%', top:yp+'%', width:sz, height:sz,
                    transform:'translate(-50%,-50%)', borderRadius:'50%',
                    background:`radial-gradient(circle at 35% 30%, ${hexA('#ffffff',.34)}, ${hexA('#ffffff',0)} 62%), ${hexA(col,.86)}`,
                    backdropFilter:'blur(8px)', WebkitBackdropFilter:'blur(8px)',
                    border:`2px solid ${col}`, boxShadow: hot?`0 0 18px ${hexA(col,.65)}`:'0 3px 10px rgba(3,8,30,.55)',
                    opacity: focus&&!hot?.5:1}}></span>);
              return [dot(25.301,yL,colL,'L'+i), dot(74.699,yR,colR,'R'+i)];
            })}
          </div>
          </div>
          <div style={{display:'flex', gap:30, padding:'2px 20px 0', fontSize:'var(--type-tiny)', color:'var(--ink-dim)'}}>
            <span style={{display:'inline-flex', alignItems:'center', gap:10}}><i style={{width:22, height:0, borderTop:`4px solid ${ACC}`}}></i>上升</span>
            <span style={{display:'inline-flex', alignItems:'center', gap:10}}><i style={{width:22, height:0, borderTop:`4px solid ${WARN}`}}></i>回落</span>
            <span style={{marginLeft:'auto', fontFamily:'var(--font-mono)', color:'var(--ink-faint)'}}>单位 · {unit}</span>
          </div>
        </div>

        {/* 底部：解读条 + 头条 */}
        <div style={{display:'flex', gap:22, marginTop:18, alignItems:'stretch'}}>
          {showAside && (()=>{ const d=shown[fIdx]; const up=d.right>=d.left; return (
            <div className="dk-glass-dark dk-anim d2" style={{flex:'1 1 0', borderRadius:22, padding:'22px 30px', display:'flex', gap:22, alignItems:'center'}}>
              <span style={{flexShrink:0, fontFamily:'var(--font-mono)', fontSize:14, letterSpacing:'.12em', color:ACC, writingMode:'vertical-rl', textOrientation:'upright'}}>迁移</span>
              <p style={{fontSize:'var(--type-small)', lineHeight:1.55, color:'rgba(255,255,255,.86)', textWrap:'pretty'}}>
                <b style={{color:'#fff'}}>{d.cn}</b> 由 {d.left} {up?'升至':'降至'} <b style={{color:up?ACC:WARN}}>{d.right} {unit}</b>
                （{up?'+':''}{d.right-d.left}）；资金加速向头部赛道集中，部分前期热门方向理性退潮。
              </p>
            </div>
          );})()}
          {[{v:'+'+(shown[fIdx].right-shown[fIdx].left),u:unit,l:shown[fIdx].cn+' 变化'},{v:shown.filter(d=>d.right>=d.left).length+'/'+shown.length,u:'',l:'上升赛道占比'}].map((s,i)=>(
            <div key={i} className="dk-glass dk-anim d3" style={{flex: showAside?'0 0 280px':'1 1 0', borderRadius:22, padding:'18px 26px', display:'flex', flexDirection:'column', justifyContent:'center'}}>
              <div style={{display:'flex', alignItems:'baseline', gap:8, whiteSpace:'nowrap'}}>
                <span style={{fontFamily:'var(--font-display)', fontWeight:900, fontSize:48, lineHeight:.9}}>{s.v}</span>
                <span style={{fontSize:'var(--type-tiny)', color:'var(--ink-dim)', fontWeight:600}}>{s.u}</span>
              </div>
              <span style={{fontSize:'var(--type-tiny)', color:'var(--ink-faint)', marginTop:6}}>{s.l}</span>
            </div>
          ))}
        </div>
      </div>
    </SlideShell>
  );

  function niceMax(v){ if(v<=0) return 1; const p=Math.pow(10,Math.floor(Math.log10(v))); const n=v/p; const s=n<=1?1:n<=2?2:n<=5?5:10; return s*p; }
  function hexA(hex, a){
    if(!hex || hex[0] !== '#') return hex;
    const n = hex.slice(1);
    const f = n.length===3 ? n.split('').map(c=>c+c).join('') : n;
    const r = parseInt(f.slice(0,2),16), g = parseInt(f.slice(2,4),16), b = parseInt(f.slice(4,6),16);
    return `rgba(${r},${g},${b},${a})`;
  }
}

export default SlideSlope;

/* ── 模板参数 schema（自描述 · 迁移即带控件；Tweaks 由此自动生成） ── */
export const slideSpec = { defaults: defaultProps, slot:'slope', name:'排名变迁 · Slope', controls:[
  { prop:'itemCount', type:'slider', label:'数量', default:8, min:3, max:8, step:1 },
  { prop:'showValue', type:'toggle', label:'数值标签', default:true },
  { prop:'showAside', type:'toggle', label:'装饰文案', default:true },
  { prop:'labelType', type:'labelType', label:'标签类型', default:'数字' },
  { prop:'focus', type:'focus', label:'重点信息 Focus', default:true },
  { prop:'focusIndex', type:'slider', label:'焦点序号', default:0, min:0, max:(p)=>p.itemCount-1, maxFromKey:'itemCount', maxFromKeyOffset:-1, displayOffset:1, step:1, showIf:(p)=>p.focus },
]};
