import { useDeckStyles } from './DeckKit.jsx';
/* SlideOverview — 报告摘要 (About-me 风格)
   Props:
     heading   : string   中文大标题
     subEN     : string   英文小标题
     pill      : string   胶囊标签文字
     summary   : string   摘要正文
     bars      : {label,pct,color}[]   赛道占比迷你条（右上玻璃卡）
     stats     : {value,unit,label}[]  底部深色指标条（数量驱动）
     tags      : string[] 关键词标签
     labelType : 'number'|'symbol'|'keyword'  指标前缀徽标类型
     focus     : bool     高亮头条指标
*/
/* ── 页面属性契约 · defaultProps ──────────────────────────────────────────
   本页全部可见文案 / 数据 / 图片槽默认值集中于此，直接编辑即可换内容；
   组件内部以 { ...defaultProps, ...props } 合并，外部传同名 props 逐项覆盖。 */
export const defaultProps = {
  heading: '报告摘要',
  subEN: 'Report Overview',
  pill: '2024 全年 · 资本大年',
  summary: '2024 年是美国 AI 产业的「资本大年」。全年 AI 初创公司吸纳风险投资约 970 亿美元，创历史新高，占全美风投近三分之一；单笔 ≥1 亿美元 的大额融资事件达 97 笔。',
  bars: [
      { label: '通用大模型', pct: 43.3, color: 'var(--blue-bright)' },
      { label: '垂直应用',   pct: 25.3, color: 'var(--mint)' },
      { label: 'AI 基础设施', pct: 16.3, color: '#7aa0ff' },
      { label: 'AI 芯片',     pct: 10.0, color: '#9f7bff' },
    ],
  stats: [
      { value: '970', unit: '亿美元', label: '全年 AI 风投' },
      { value: '97',  unit: '笔',     label: '≥1亿融资事件' },
      { value: '10',  unit: '亿元',  label: '平均单笔规模' },
      { value: '63.9',unit: '%',      label: '湾区资金占比' },
    ],
  tags: ['赢家通吃', 'AGI 叙事', '地理护城河', '估值泡沫', '退潮看兑现'],
  labelType: 'number',
  focus: true,
  focusIndex: 0,
};

function SlideOverview(props){
  useDeckStyles(props.theme);
  const {
    heading, subEN, pill, summary, bars, stats, tags,
    labelType, focus, focusIndex, statCount,
  } = { ...defaultProps, ...props };

  const shownStats = statCount ? stats.slice(0, statCount) : stats;
  const fIdx = Math.max(0, Math.min(focusIndex, shownStats.length - 1));

  const badge = (i)=>{
    if(labelType === 'symbol') return ['◆','▲','●','■','★'][i%5];
    if(labelType === 'keyword') return 'KPI';
    return String(i+1).padStart(2,'0');
  };

  return (
    <div style={{position:'relative', width:'100%', height:'100%', padding:'var(--pad-y) var(--pad-x)'}}>
      <div className="dk-orb" style={{width:460, height:460, right:-120, top:-140, background:'radial-gradient(circle at 50% 50%, rgba(70,227,198,.22), rgba(70,227,198,0) 70%)'}}></div>

      {/* header */}
      <div className="dk-anim" style={{display:'flex', alignItems:'flex-end', gap:28}}>
        <h2 className="dk-ink-grad" style={{fontFamily:'var(--font-cn)', fontWeight:900, fontSize:'var(--type-h2)', letterSpacing:'.02em'}}>{heading}</h2>
        <span style={{fontFamily:'var(--font-display)', fontWeight:600, fontSize:'var(--type-small)', color:'var(--ink-faint)', paddingBottom:10}}>{subEN}</span>
        <span className="dk-glass" style={{marginLeft:'auto', display:'inline-flex', alignItems:'center', gap:14, padding:'12px 26px', borderRadius:999, fontSize:'var(--type-small)', fontWeight:600}}>
          {pill}
          <span style={{display:'inline-flex', width:34, height:34, borderRadius:'50%', background:'var(--blue-electric)', alignItems:'center', justifyContent:'center'}}>→</span>
        </span>
      </div>

      {/* two column body */}
      <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:40, marginTop:42, height:600}}>
        {/* left: summary */}
        <div className="dk-glass dk-anim d1" style={{borderRadius:32, padding:'44px 48px', position:'relative', overflow:'hidden'}}>
          <div style={{fontFamily:'var(--font-display)', fontSize:88, lineHeight:.5, color:'var(--ink-faint)', height:40}}>“</div>
          <p style={{fontSize:'var(--type-body)', lineHeight:1.75, fontWeight:400, color:'rgba(255,255,255,.9)', marginTop:6}}>{summary}</p>
          <div style={{display:'flex', flexWrap:'wrap', gap:12, marginTop:34}}>
            {tags.map((t,i)=>(
              <span key={i} className="dk-glass" style={{padding:'9px 18px', borderRadius:999, fontSize:'var(--type-small)', fontWeight:500, whiteSpace:'nowrap', color:i===0&&focus?'var(--navy-900)':'#fff', background:i===0&&focus?'var(--mint)':undefined}}>{t}</span>
            ))}
          </div>
        </div>

        {/* right: bars */}
        <div className="dk-glass dk-anim d2" style={{borderRadius:32, padding:'42px 48px'}}>
          <div style={{display:'flex', justifyContent:'space-between', alignItems:'baseline', marginBottom:30}}>
            <span style={{fontSize:'var(--type-sub)', fontWeight:700}}>赛道融资额占比</span>
            <span style={{fontFamily:'var(--font-mono)', fontSize:'var(--type-tiny)', color:'var(--ink-faint)'}}>$970亿 · 100%</span>
          </div>
          <div style={{display:'flex', flexDirection:'column', gap:26}}>
            {bars.map((b,i)=>(
              <div key={i}>
                <div style={{display:'flex', justifyContent:'space-between', fontSize:'var(--type-small)', fontWeight:600, marginBottom:10, whiteSpace:'nowrap', gap:16}}>
                  <span>{b.label}</span>
                  <span style={{fontFamily:'var(--font-mono)'}}>{b.pct}%</span>
                </div>
                <div style={{height:14, borderRadius:999, background:'rgba(255,255,255,.12)', overflow:'hidden'}}>
                  <div style={{height:'100%', width:b.pct*2+'%', borderRadius:999, background:b.color, boxShadow:`0 0 18px ${b.color}`}}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* bottom: dark stat strip */}
      <div className="dk-glass-dark dk-anim d3" style={{position:'absolute', left:'var(--pad-x)', right:'var(--pad-x)', bottom:'var(--pad-y)', borderRadius:28, padding:'34px 50px', display:'grid', gridTemplateColumns:`repeat(${shownStats.length},1fr)`, gap:30}}>
        {shownStats.map((s,i)=>{
          const hot = focus && i===fIdx;
          return (
            <div key={i} style={{display:'flex', flexDirection:'column', gap:8, borderLeft:i?'1px solid rgba(255,255,255,.12)':'none', paddingLeft:i?34:0}}>
              <span style={{fontFamily:'var(--font-mono)', fontSize:16, letterSpacing:'.1em', color: hot?'var(--mint)':'var(--ink-faint)'}}>{badge(i)}</span>
              <div style={{display:'flex', alignItems:'baseline', gap:8, whiteSpace:'nowrap'}}>
                <span style={{fontFamily:'var(--font-display)', fontWeight:900, fontSize: hot?86:72, lineHeight:.9, color: hot?'#fff':'#fff', textShadow: hot?'0 0 30px rgba(70,227,198,.5)':'none'}}>{s.value}</span>
                <span style={{fontSize:'var(--type-small)', fontWeight:600, flexShrink:0, color: hot?'var(--mint)':'var(--ink-dim)'}}>{s.unit}</span>
              </div>
              <span style={{fontSize:'var(--type-tiny)', color:'var(--ink-dim)'}}>{s.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SlideOverview;

/* ── 模板参数 schema（自描述 · 迁移即带控件；Tweaks 由此自动生成） ── */
export const slideSpec = { defaults: defaultProps, slot:'overview', name:'报告摘要 · Overview', controls:[
  { prop:'statCount', type:'slider', label:'数量', default:4, min:2, max:4, step:1, desc:'底部指标块数量' },
  { prop:'labelType', type:'labelType', label:'标签类型', default:'number', options:[['number','数字'],['symbol','符号'],['keyword','关键词']] },
  { prop:'focus', type:'focus', label:'重点信息 Focus', default:true },
  { prop:'focusIndex', type:'slider', label:'焦点序号', default:0, min:0, max:(p)=>p.statCount-1, maxFromKey:'statCount', maxFromKeyOffset:-1, displayOffset:1, step:1, showIf:(p)=>p.focus },
]};
