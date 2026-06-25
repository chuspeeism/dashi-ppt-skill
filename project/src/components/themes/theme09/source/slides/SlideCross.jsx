import { useDeckStyles, SlideHead } from './DeckKit.jsx';
/* SlideCross — 03 横向透视 · 行业赛道与轮次
   模板参数：
     segCount   : number 2–5  显示赛道数量
     shape      : '环形' | '饼图'
     showRounds : bool  轮次结构面板显隐
     roundCount : number 2–12  轮次结构柱数量
     callout    : bool  核心发现装饰卡显隐
     labelType  : 'number'|'symbol'|'keyword'  图例徽标
     focus      : bool  高亮某赛道
     focusIndex : number  高亮第几个赛道（默认最大）
*/

/* ── 页面属性契约 · defaultProps ──────────────────────────────────────────
   本页全部可见文案 / 数据 / 图片槽默认值集中于此，直接编辑即可换内容；
   组件内部以 { ...defaultProps, ...props } 合并，外部传同名 props 逐项覆盖。 */
export const defaultProps = {
  segCount: 5,
  shape: '环形',
  showRounds: true,
  roundCount: 6,
  callout: true,
  labelType: 'number',
  focus: true,
  focusIndex: 0,
  segs: [
    { cn:'通用大模型', en:'Foundation Model', amt:420, pct:43.3, color:'#4a86ff' },
    { cn:'垂直应用',   en:'Vertical AI',      amt:245, pct:25.3, color:'#46e3c6' },
    { cn:'AI 基础设施', en:'Infrastructure',   amt:158, pct:16.3, color:'#7aa0ff' },
    { cn:'AI 芯片',     en:'Hardware',         amt:97,  pct:10.0, color:'#9f7bff' },
    { cn:'其他',        en:'Tooling · Safety', amt:50,  pct:5.1,  color:'#5b6b9a' },
  ],
  rounds: [
    { lb:'Pre', n:5, avg:0.8 }, { lb:'Seed', n:8, avg:1.2 }, { lb:'A', n:12, avg:1.8 },
    { lb:'B', n:18, avg:3.5 }, { lb:'C', n:15, avg:6.8 }, { lb:'D', n:13, avg:10.4 },
    { lb:'E', n:9, avg:14.6 }, { lb:'F', n:6, avg:18.2 }, { lb:'Growth', n:7, avg:20.5 },
    { lb:'Debt', n:5, avg:12.8 }, { lb:'M&A', n:4, avg:16.4 }, { lb:'未标明', n:22, avg:18.6 },
  ],
};

function SlideCross(props){
  useDeckStyles(props.theme);
  const {
    segCount, shape, showRounds, roundCount, callout, labelType, focus,
    focusIndex, segs: all, rounds,
  } = { ...defaultProps, ...props };

  const segs = all.slice(0, Math.max(2, Math.min(segCount, all.length)));
  const total = segs.reduce((a,b)=>a+b.amt, 0);
  const big = segs.reduce((p,s,i)=> s.amt>segs[p].amt?i:p, 0);
  const fIdx = focus ? Math.max(0, Math.min(focusIndex, segs.length-1)) : big;

  const shownRounds = rounds.slice(0, Math.max(2, Math.min(roundCount, rounds.length, 12)));
  const maxN = Math.max(...shownRounds.map(r=>r.n));
  const compactRounds = shownRounds.length > 8;
  const denseRounds = shownRounds.length > 6;

  // conic-gradient 扇区
  let acc = 0; const stops = [];
  segs.forEach(s=>{ const a0=acc/total*360; acc+=s.amt; const a1=acc/total*360; stops.push(`${s.color} ${a0}deg ${a1}deg`); });
  const donut = `conic-gradient(${stops.join(',')})`;
  const hole = shape === '环形';
  const cur = segs[fIdx];

  const badge = (i)=> labelType==='symbol' ? ['◆','▲','●','■','★'][i%5]
    : labelType==='keyword' ? 'SEG' : String(i+1).padStart(2,'0');

  // 图例随数量自适应间距
  const legendGap = segs.length <= 3 ? 22 : segs.length === 4 ? 18 : 14;

  return (
    <div style={{position:'relative', width:'100%', height:'100%', padding:'var(--pad-y) var(--pad-x)', display:'flex', flexDirection:'column'}}>
      <div className="dk-orb" style={{width:460, height:460, left:-160, bottom:-160, background:'radial-gradient(circle at 50% 50%, rgba(90,150,255,.32), rgba(40,90,230,0) 70%)'}}></div>

      <SlideHead no="03" en="Cross-Section" cn="横向透视 · 赛道与轮次" badge={labelType==='keyword'?'CROSS':labelType==='symbol'?'◆':'03'} />

      <div style={{flex:'1 1 0', minHeight:0, display:'flex', flexDirection:'column', marginTop:28, gap:22}}>
        {/* 上半：环形图 + 图例 */}
        <div style={{flex:'1 1 0', minHeight:0, display:'grid', gridTemplateColumns:'440px 1fr', gap:50, alignItems:'center'}}>
          {/* donut */}
          <div className="dk-anim d1" style={{position:'relative', width:400, height:400, justifySelf:'center'}}>
            <div style={{position:'absolute', inset:0, borderRadius:'50%', background:donut,
                         boxShadow:'0 30px 80px rgba(3,8,30,.5)'}}></div>
            {hole && (
              <div style={{position:'absolute', inset:'23%', borderRadius:'50%', background:'var(--navy-card)',
                           display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center',
                           padding:18, textAlign:'center', boxShadow:'inset 0 2px 14px rgba(0,0,0,.5)'}}>
                {focus ? (
                  <>
                    <span style={{fontFamily:'var(--font-display)', fontWeight:900, fontSize:62, lineHeight:.9,
                                  color:'var(--mint)', whiteSpace:'nowrap'}}>{cur.pct}<span style={{fontSize:28, marginLeft:2}}>%</span></span>
                    <span style={{fontSize:'var(--type-tiny)', color:'var(--ink-dim)', marginTop:8, lineHeight:1.2,
                                  maxWidth:180, whiteSpace:'nowrap'}}>{cur.cn}</span>
                  </>
                ) : (
                  <>
                    <span style={{fontFamily:'var(--font-display)', fontWeight:900, fontSize:62, lineHeight:.9, color:'#fff'}}>{total}</span>
                    <span style={{fontSize:'var(--type-tiny)', color:'var(--ink-dim)', marginTop:8, lineHeight:1.2}}>融资额合计 ($亿)</span>
                  </>
                )}
              </div>
            )}
            {focus && hole && (
              <div style={{position:'absolute', inset:-10, borderRadius:'50%', border:'2px solid var(--mint)', opacity:.5}}></div>
            )}
          </div>

          {/* legend */}
          <div className="dk-anim d2" style={{display:'flex', flexDirection:'column', gap:legendGap, minWidth:0}}>
            {segs.map((s,i)=>{
              const hot = focus && i===fIdx;
              return (
                <div key={i} style={{display:'flex', alignItems:'center', gap:18}}>
                  <span style={{flexShrink:0, width:42, height:42, borderRadius:12, background:s.color,
                                display:'inline-flex', alignItems:'center', justifyContent:'center',
                                fontFamily:'var(--font-mono)', fontSize:15, color:'#08123a', fontWeight:700,
                                boxShadow: hot?`0 0 22px ${s.color}`:'none'}}>{badge(i)}</span>
                  <div style={{flex:1, minWidth:0}}>
                    <div style={{display:'flex', justifyContent:'space-between', alignItems:'baseline', marginBottom:8, gap:16}}>
                      <span style={{fontSize:'var(--type-body)', fontWeight:700, whiteSpace:'nowrap'}}>{s.cn}
                        <span style={{fontFamily:'var(--font-display)', fontWeight:500, fontSize:'var(--type-tiny)', color:'var(--ink-faint)', marginLeft:12}}>{s.en}</span></span>
                      <span style={{fontFamily:'var(--font-mono)', fontSize:'var(--type-small)', fontWeight:700, color: hot?'var(--mint)':'#fff'}}>{s.pct}%</span>
                    </div>
                    <div style={{height:12, borderRadius:999, background:'rgba(255,255,255,.1)', overflow:'hidden'}}>
                      <div style={{height:'100%', width:s.pct+'%', borderRadius:999, background:s.color, boxShadow:`0 0 14px ${s.color}`}}></div>
                    </div>
                  </div>
                </div>
              );
            })}
            {callout && (
              <div className="dk-glass-dark" style={{marginTop:6, borderRadius:18, padding:'16px 24px', fontSize:'var(--type-tiny)', lineHeight:1.55, color:'rgba(255,255,255,.84)'}}>
                <b style={{color:'var(--mint)'}}>核心发现 · </b>通用大模型占近半壁江山，押注「AGI 叙事」；基础设施与芯片合计超四分之一，上游热度不减。
              </div>
            )}
          </div>
        </div>

        {/* rounds panel */}
        {showRounds && (
          <div className="dk-glass dk-anim d3" style={{flexShrink:0, borderRadius:26, padding:compactRounds?'16px 30px 18px':'22px 40px 26px'}}>
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'baseline', marginBottom:compactRounds?10:16}}>
              <span style={{fontSize:compactRounds?'var(--type-body)':'var(--type-sub)', fontWeight:700}}>融资轮次结构</span>
              <span style={{fontFamily:'var(--font-mono)', fontSize:'var(--type-tiny)', color:'var(--ink-faint)'}}>柱高 · 事件笔数　数字 · 平均单笔($亿)</span>
            </div>
            <div style={{display:'flex', alignItems:'flex-end', gap:compactRounds?12:(denseRounds?18:30), height:compactRounds?122:140}}>
              {shownRounds.map((r,i)=>(
                <div key={i} style={{flex:'1 1 0', minWidth:0, display:'flex', flexDirection:'column', alignItems:'center', gap:compactRounds?6:10, height:'100%', justifyContent:'flex-end'}}>
                  <span style={{fontFamily:'var(--font-display)', fontWeight:900, fontSize:compactRounds?18:24, lineHeight:1, color: r.avg>=15?'var(--mint)':'#cfe0ff'}}>{r.avg}</span>
                  <div style={{width:'100%', maxWidth:compactRounds?58:(denseRounds?72:90), height:(r.n/maxN*(compactRounds?72:88))+'px', borderRadius:'8px 8px 0 0',
                               background: r.avg>=15?'linear-gradient(180deg,#46e3c6,#1fb89b)':'linear-gradient(180deg,#5a8dff,#1d49d6)'}}></div>
                  <span style={{fontSize:compactRounds?16:'var(--type-tiny)', lineHeight:1, color:'var(--ink-dim)', fontWeight:600, whiteSpace:'nowrap'}}>{r.lb}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SlideCross;

/* ── 模板参数 schema（自描述 · 迁移即带控件；Tweaks 由此自动生成） ── */
export const slideSpec = { defaults: defaultProps, slot:'cross', name:'横向透视 · Cross', controls:[
  { prop:'segCount', type:'slider', label:'数量', default:5, min:2, max:5, step:1 },
  { prop:'shape', type:'radio', label:'图形', default:'环形', options:['环形','饼图'] },
  { prop:'showRounds', type:'toggle', label:'结构面板', default:true },
  { prop:'roundCount', type:'slider', label:'结构条目数', default:6, min:2, max:12, step:1, showIf:(p)=>p.showRounds },
  { prop:'callout', type:'toggle', label:'解读卡', default:true },
  { prop:'labelType', type:'labelType', label:'标签类型', default:'数字' },
  { prop:'focus', type:'focus', label:'重点信息 Focus', default:true },
  { prop:'focusIndex', type:'slider', label:'焦点序号', default:0, min:0, max:(p)=>p.segCount-1, maxFromKey:'segCount', maxFromKeyOffset:-1, displayOffset:1, step:1, showIf:(p)=>p.focus },
]};
