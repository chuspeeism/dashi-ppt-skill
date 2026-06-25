import { useDeckStyles, SlideHead } from './DeckKit.jsx';
import ImageStrip from './ImageStrip.jsx';
/* SlideCases — 05 典型案例深度剖析（含自适应图片槽）
   模板参数：
     caseCount  : number 1–3  案例卡数量
     imgCount   : number 0–4  图片槽数量（自适应比例 justified 画廊）
     quote      : bool  焦点案例引用显隐
     labelType  : 'number'|'symbol'|'keyword'  排名徽标
     focus      : bool  高亮 Anthropic
*/

/* ── 页面属性契约 · defaultProps ──────────────────────────────────────────
   本页全部可见文案 / 数据 / 图片槽默认值集中于此，直接编辑即可换内容；
   组件内部以 { ...defaultProps, ...props } 合并，外部传同名 props 逐项覆盖。 */
export const defaultProps = {
  caseCount: 3,
  imgCount: 3,
  quote: true,
  labelType: 'number',
  focus: true,
  focusIndex: 0,
  cases: [
    { cn:'Anthropic', en:'从追赶到反超', val:'9650', fund:'650+', meta:'三轮 · 5/8/11月',
      tags:['Constitutional AI','安全对齐','Claude'], accent:'#46e3c6',
      quote:'通过可解释、可控的系统构建 AI，比单纯追求规模更符合长远利益。', who:'Dario Amodei · CEO' },
    { cn:'xAI', en:'马斯克的第三次创业', val:'500', fund:'50', meta:'18 个月跻身头部',
      tags:['实时数据','多模态','Grok'], accent:'#7aa0ff',
      quote:'背靠 X 平台海量实时数据，与特斯拉自动驾驶协同。', who:'Grok · 实时 · 差异化' },
    { cn:'CoreWeave', en:'卖铲子的人也赚翻了', val:'190', fund:'110', meta:'加密挖矿转型算力云',
      tags:['卖铲子','NVIDIA 长约','H100 / H200'], accent:'#9f7bff',
      quote:'淘金热中卖铲子——提前锁定算力的基础设施商成为稀缺标的。', who:'CoreWeave · 算力云' },
  ],
};

function SlideCases(props){
  useDeckStyles(props.theme);
  const {
    caseCount, imgCount, quote, labelType, focus, focusIndex, cases,
  } = { ...defaultProps, ...props };

  const shown = cases.slice(0, Math.max(1, Math.min(caseCount, cases.length)));
  const fIdx = Math.max(0, Math.min(focusIndex, shown.length - 1));
  const hasImg = imgCount > 0;
  const badge = (i)=> labelType==='symbol' ? ['◆','▲','●'][i%3]
    : labelType==='keyword' ? 'CASE' : 'No.'+String(i+1).padStart(2,'0');

  return (
    <div style={{position:'relative', width:'100%', height:'100%', padding:'var(--pad-y) var(--pad-x)', display:'flex', flexDirection:'column'}}>
      <div className="dk-orb" style={{width:460, height:460, left:-150, top:-160, background:'radial-gradient(circle at 50% 50%, rgba(90,150,255,.3), rgba(40,90,230,0) 70%)'}}></div>

      <SlideHead no="05" en="Case Studies" cn="典型案例深度剖析" badge={labelType==='keyword'?'CASE':labelType==='symbol'?'◆':'05'} />

      {/* case cards */}
      <div style={{display:'grid', gridTemplateColumns:`repeat(${shown.length},minmax(0,1fr))`, gap:26, marginTop:30,
                   flex: hasImg?'0 0 auto':'1 1 0', height: hasImg?470:'auto'}}>
        {shown.map((c,i)=>{
          const hot = focus && i===fIdx;
          return (
            <div key={i} className={'dk-glass dk-anim d'+(i+1)} style={{
              position:'relative', borderRadius:30, padding:'24px 28px', display:'flex', flexDirection:'column', overflow:'hidden',
              marginTop: hot?-16:0,
              boxShadow: hot ? '0 40px 90px rgba(70,227,198,.32), 0 0 0 2px var(--mint)' : '0 26px 60px rgba(3,8,30,.45)',
            }}>
              <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:14}}>
                <span style={{fontFamily:'var(--font-mono)', fontSize:'var(--type-tiny)', letterSpacing:'.08em', color:c.accent}}>{badge(i)}</span>
                <span style={{width:38, height:38, borderRadius:'50%', border:'1.5px solid rgba(255,255,255,.4)', display:'inline-flex', alignItems:'center', justifyContent:'center', fontSize:18}}>↗</span>
              </div>

              <div style={{fontFamily:'var(--font-display)', fontWeight:900, fontSize:42, lineHeight:1, color:'#fff'}}>{c.cn}</div>
              <div style={{fontSize:'var(--type-tiny)', color:'var(--ink-dim)', marginTop:6, marginBottom:16}}>{c.en}</div>

              <div style={{display:'flex', alignItems:'baseline', gap:10}}>
                <span style={{fontFamily:'var(--font-display)', fontWeight:900, fontSize:60, lineHeight:.85, color: hot?'var(--mint)':'#fff', textShadow: hot?'0 0 30px rgba(70,227,198,.5)':'none'}}>{c.val}</span>
                <span style={{fontSize:'var(--type-tiny)', fontWeight:700, color:'var(--ink-dim)'}}>亿美元 · 估值</span>
              </div>

              <div style={{display:'flex', gap:30, marginTop:14, paddingTop:14, borderTop:'1px solid rgba(255,255,255,.12)'}}>
                <div><div style={{fontFamily:'var(--font-display)', fontWeight:800, fontSize:28}}>{c.fund}<span style={{fontSize:15, color:'var(--ink-dim)', marginLeft:4}}>亿</span></div><div style={{fontSize:'var(--type-tiny)', color:'var(--ink-faint)', marginTop:2}}>累计融资</div></div>
                <div style={{flex:1}}><div style={{fontSize:'var(--type-tiny)', fontWeight:600, color:'rgba(255,255,255,.8)', lineHeight:1.4, marginTop:4}}>{c.meta}</div></div>
              </div>

              <div style={{display:'flex', flexWrap:'wrap', gap:8, marginTop:16}}>
                {c.tags.map((t,j)=>(
                  <span key={j} style={{padding:'6px 13px', borderRadius:999, fontSize:'var(--type-tiny)', fontWeight:600,
                    background:j===0&&hot?'var(--mint)':'rgba(255,255,255,.1)', color:j===0&&hot?'var(--navy-900)':'#fff',
                    border:'1px solid rgba(255,255,255,.16)'}}>{t}</span>
                ))}
              </div>

              {quote && hot && (
                <div style={{marginTop:'auto', paddingTop:16}}>
                  <p style={{fontSize:'var(--type-tiny)', lineHeight:1.45, color:'rgba(255,255,255,.86)', fontStyle:'italic'}}>“{c.quote}”</p>
                  <div style={{fontFamily:'var(--font-mono)', fontSize:13, color:'var(--ink-faint)', marginTop:8}}>— {c.who}</div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* adaptive image gallery */}
      {hasImg && (
        <div className="dk-anim d3" style={{marginTop:'auto', paddingTop:26}}>
          <div style={{display:'flex', alignItems:'center', gap:16, marginBottom:18}}>
            <span style={{fontFamily:'var(--font-mono)', fontSize:14, letterSpacing:'.14em', color:'var(--ink-faint)', textTransform:'uppercase'}}>Visuals</span>
            <span style={{height:1, flex:1, background:'rgba(255,255,255,.14)'}}></span>
            <span style={{fontSize:'var(--type-tiny)', color:'var(--ink-faint)'}}>图片为示意 · 槽位按图片比例自适应</span>
          </div>
          <ImageStrip idPrefix="cases" count={imgCount} width={1700} maxH={185} />
        </div>
      )}
    </div>
  );
}

export default SlideCases;

/* ── 模板参数 schema（自描述 · 迁移即带控件；Tweaks 由此自动生成） ── */
export const slideSpec = { defaults: defaultProps, slot:'cases', name:'典型案例 · Cases', controls:[
  { prop:'caseCount', type:'slider', label:'数量', default:3, min:1, max:3, step:1 },
  { prop:'imgCount', type:'slider', label:'图片槽数量', default:3, min:0, max:4, step:1 },
  { prop:'quote', type:'toggle', label:'引用', default:true },
  { prop:'labelType', type:'labelType', label:'标签类型', default:'数字' },
  { prop:'focus', type:'focus', label:'重点信息 Focus', default:true },
  { prop:'focusIndex', type:'slider', label:'焦点序号', default:0, min:0, max:(p)=>p.caseCount-1, maxFromKey:'caseCount', maxFromKeyOffset:-1, displayOffset:1, step:1, showIf:(p)=>p.focus },
]};
