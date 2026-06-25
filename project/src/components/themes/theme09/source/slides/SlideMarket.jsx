import { useDeckStyles, SlideHead } from './DeckKit.jsx';
/* SlideMarket — 02 市场全景 · 纵向趋势
   模板参数：
     granularity : '季度' | '月度'  数据粒度（驱动数据点数量）
     chartType   : '面积' | '折线' | '柱状'
     showCount   : bool  叠加事件笔数副线
     callout     : bool  趋势解读装饰卡显隐
     labelType   : 'number'|'symbol'|'keyword'  指标徽标
     focus       : bool  高亮峰值数据点
*/

/* ── 页面属性契约 · defaultProps ──────────────────────────────────────────
   本页全部可见文案 / 数据 / 图片槽默认值集中于此，直接编辑即可换内容；
   组件内部以 { ...defaultProps, ...props } 合并，外部传同名 props 逐项覆盖。 */
export const defaultProps = {
  granularity: '季度',
  chartType: '面积',
  showCount: true,
  callout: true,
  labelType: 'number',
  focus: true,
  quarter: [
    { label:'Q1', amt:162, cnt:18 }, { label:'Q2', amt:284, cnt:26 },
    { label:'Q3', amt:318, cnt:31 }, { label:'Q4', amt:206, cnt:22 },
  ],
  month: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
    .map((m,i)=>({ label:m, amt:[45,58,59,86,105,93,92,118,108,73,81,52][i], cnt:[4,5,6,8,10,9,9,12,11,8,9,6][i] })),
};

function SlideMarket(props){
  useDeckStyles(props.theme);
  const {
    granularity, chartType, showCount, callout, labelType, focus, focusIndex,
    quarter, month,
  } = { ...defaultProps, ...props };

  const isQ = granularity === '季度';
  const data = isQ ? quarter : month;
  const peak = data.reduce((p,d,i)=> d.amt > data[p].amt ? i : p, 0);
  const fIdx = (focusIndex!=null && focusIndex>=0) ? Math.max(0, Math.min(focusIndex, data.length-1)) : peak;

  const badge = ()=> labelType === 'symbol' ? '◆' : labelType === 'keyword' ? 'TREND' : '02';

  // chart geometry
  const W = 1660, H = 430, padL = 70, padR = 40, padT = 34, padB = 50;
  const plotW = W - padL - padR, plotH = H - padT - padB;
  const maxAmt = isQ ? 350 : 130;
  const maxCnt = isQ ? 36 : 14;
  const xAt = (i)=> padL + (data.length===1 ? plotW/2 : (i/(data.length-1))*plotW);
  const yAt = (v)=> padT + plotH - (v/maxAmt)*plotH;
  const yCnt = (v)=> padT + plotH - (v/maxCnt)*plotH;

  const linePath = data.map((d,i)=> `${i?'L':'M'} ${xAt(i)} ${yAt(d.amt)}`).join(' ');
  const areaPath = `${linePath} L ${xAt(data.length-1)} ${padT+plotH} L ${xAt(0)} ${padT+plotH} Z`;
  const cntPath = data.map((d,i)=> `${i?'L':'M'} ${xAt(i)} ${yCnt(d.cnt)}`).join(' ');
  const barW = Math.min(64, (plotW/data.length)*0.42);

  return (
    <div style={{position:'relative', width:'100%', height:'100%', padding:'var(--pad-y) var(--pad-x)'}}>
      <div className="dk-orb" style={{width:480, height:480, right:-140, top:-160, background:'radial-gradient(circle at 50% 50%, rgba(70,227,198,.20), rgba(70,227,198,0) 70%)'}}></div>

      {/* header */}
      <SlideHead no="02" en="Market Panorama" cn="市场全景 · 纵向趋势" badge={badge()} />

      {/* chart card */}
      <div className="dk-glass dk-anim d1" style={{marginTop:28, borderRadius:32, padding:'26px 40px 12px', position:'relative'}}>
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'baseline', marginBottom:6, padding:'0 30px'}}>
          <span style={{fontSize:'var(--type-sub)', fontWeight:700}}>{isQ?'逐季度':'逐月'}融资额走势</span>
          <span style={{fontFamily:'var(--font-mono)', fontSize:'var(--type-tiny)', color:'var(--ink-faint)'}}>单位 · 亿美元　全年 $970亿</span>
        </div>

        <svg viewBox={`0 0 ${W} ${H}`} style={{width:'100%', height:H+'px', maxHeight:440, display:'block'}}>
          <defs>
            <linearGradient id="areaFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#4a86ff" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#4a86ff" stopOpacity="0.02" />
            </linearGradient>
          </defs>

          {/* gridlines */}
          {[0,0.25,0.5,0.75,1].map((g,i)=>{
            const y = padT + plotH - g*plotH;
            return (<g key={i}>
              <line x1={padL} y1={y} x2={W-padR} y2={y} stroke="rgba(255,255,255,.1)" strokeWidth="1" />
              <text x={padL-16} y={y+6} textAnchor="end" fontFamily="var(--font-mono)" fontSize="20" fill="rgba(255,255,255,.4)">{Math.round(g*maxAmt)}</text>
            </g>);
          })}

          {/* series */}
          {chartType === '柱状' && data.map((d,i)=>{
            const hot = focus && i===fIdx;
            return <rect key={i} x={xAt(i)-barW/2} y={yAt(d.amt)} width={barW} height={padT+plotH-yAt(d.amt)}
              rx="8" fill={hot?'var(--mint)':'#4a86ff'} opacity={hot?1:.85}
              style={{filter: hot?'drop-shadow(0 0 20px rgba(70,227,198,.6))':'none'}} />;
          })}
          {chartType === '面积' && <path d={areaPath} fill="url(#areaFill)" />}
          {chartType !== '柱状' && <path d={linePath} fill="none" stroke="#6ea0ff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />}

          {/* count secondary line */}
          {showCount && <>
            <path d={cntPath} fill="none" stroke="var(--mint)" strokeWidth="3" strokeDasharray="3 8" strokeLinecap="round" />
            {data.map((d,i)=><circle key={i} cx={xAt(i)} cy={yCnt(d.cnt)} r="5" fill="var(--mint)" />)}
          </>}

          {/* points + peak focus */}
          {chartType !== '柱状' && data.map((d,i)=>{
            const hot = focus && i===fIdx;
            return <circle key={i} cx={xAt(i)} cy={yAt(d.amt)} r={hot?11:6}
              fill={hot?'var(--mint)':'#cfe0ff'} stroke="#0a1230" strokeWidth={hot?3:2}
              style={{filter: hot?'drop-shadow(0 0 16px rgba(70,227,198,.8))':'none'}} />;
          })}
          {focus && (()=>{ const d=data[fIdx]; return (
            <g>
              <text x={xAt(fIdx)} y={yAt(d.amt)-26} textAnchor="middle" fontFamily="var(--font-display)" fontWeight="900" fontSize="30" fill="#fff">{d.amt}</text>
            </g>);})()}

          {/* x labels */}
          {data.map((d,i)=>(
            <text key={i} x={xAt(i)} y={padT+plotH+34} textAnchor="middle" fontFamily="var(--font-cn)" fontWeight="600" fontSize="22"
              fill={focus&&i===fIdx?'var(--mint)':'rgba(255,255,255,.66)'}>{d.label}</text>
          ))}
        </svg>

        {showCount && (
          <div style={{display:'flex', gap:30, padding:'0 30px 6px', fontSize:'var(--type-tiny)', color:'var(--ink-dim)'}}>
            <span style={{display:'inline-flex', alignItems:'center', gap:10}}><i style={{width:24, height:5, borderRadius:3, background:'#6ea0ff'}}></i>融资总额</span>
            <span style={{display:'inline-flex', alignItems:'center', gap:10}}><i style={{width:24, height:0, borderTop:'3px dashed var(--mint)'}}></i>事件笔数</span>
          </div>
        )}
      </div>

      {/* bottom strip: callout + headline figures */}
      <div style={{display:'flex', gap:24, marginTop:20, alignItems:'stretch'}}>
        {callout && (
          <div className="dk-glass-dark dk-anim d2" style={{flex:'1 1 0', borderRadius:24, padding:'26px 34px', display:'flex', gap:24, alignItems:'center'}}>
            <span style={{flexShrink:0, fontFamily:'var(--font-mono)', fontSize:16, letterSpacing:'.1em', color:'var(--mint)', writingMode:'vertical-rl', textOrientation:'upright'}}>趋势</span>
            <p style={{fontSize:'var(--type-small)', lineHeight:1.6, color:'rgba(255,255,255,.86)'}}>
              Q2、Q3 为融资高峰，进入 Q4 理性回落但仍处高位；<b style={{color:'#fff'}}>平均单笔约 10 亿美元</b>，市场对头部标的高度追捧。
            </p>
          </div>
        )}
        {[{v:'970',u:'亿美元',l:'全年合计'},{v:'318',u:'亿美元',l:'Q3 峰值'},{v:'97',u:'笔',l:'大额事件'}].map((s,i)=>(
          <div key={i} className="dk-glass dk-anim d3" style={{flex: callout?'0 0 230px':'1 1 0', borderRadius:24, padding:'20px 26px', display:'flex', flexDirection:'column', justifyContent:'center'}}>
            <div style={{display:'flex', alignItems:'baseline', gap:8, whiteSpace:'nowrap'}}>
              <span style={{fontFamily:'var(--font-display)', fontWeight:900, fontSize:52, lineHeight:.9}}>{s.v}</span>
              <span style={{fontSize:'var(--type-tiny)', color:'var(--ink-dim)', fontWeight:600}}>{s.u}</span>
            </div>
            <span style={{fontSize:'var(--type-tiny)', color:'var(--ink-faint)', marginTop:6}}>{s.l}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SlideMarket;

/* ── 模板参数 schema（自描述 · 迁移即带控件；Tweaks 由此自动生成） ── */
export const slideSpec = { defaults: defaultProps, slot:'market', name:'市场全景 · Trend', controls:[
  { prop:'granularity', type:'radio', label:'数据粒度', default:'季度', options:['季度','月度'] },
  { prop:'chartType', type:'radio', label:'图表类型', default:'面积', options:['面积','折线','柱状'] },
  { prop:'showCount', type:'toggle', label:'副指标线', default:true },
  { prop:'callout', type:'toggle', label:'解读卡', default:true },
  { prop:'labelType', type:'labelType', label:'标签类型', default:'数字' },
  { prop:'focus', type:'focus', label:'重点信息 Focus', default:true },
  { prop:'focusIndex', type:'slider', label:'焦点序号', default:2, min:0, max:(p)=>p.granularity==='季度'?3:11, maxByKey:'granularity', maxByValue:{ '季度':3, '月度':11 }, displayOffset:1, step:1, showIf:(p)=>p.focus },
]};
