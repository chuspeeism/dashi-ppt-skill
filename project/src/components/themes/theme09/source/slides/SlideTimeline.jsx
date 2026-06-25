import { Fragment } from 'react';
import { useDeckStyles, deckTheme, deckLabel, SlideShell, SlideHead } from './DeckKit.jsx';
import ImageStrip from './ImageStrip.jsx';
/* ============================================================================
   SlideTimeline — 年度大事记（里程碑时间轴 · 横/纵向 + 自适应图片槽）
   独立组件：仅靠 props 控制内容与样式；render 时自注入 DeckKit 基座样式。
   图片槽依赖 ImageStrip.jsx（imgCount>0 时）：用户上传后按真实比例自适应。

   ── 可调参数（Props） ──────────────────────────────────────────────────────
   | prop        | 类型                          | 默认值 | 说明                              |
   | events      | Event[]                       | 见下   | 里程碑数据源（按时间顺序）        |
   | itemCount   | number (3–8)                  | 6      | 实际展示的节点数（截取）          |
   | orientation | '横向' | '纵向'                | '横向' | 时间轴方向                        |
   | focus       | boolean                       | true   | 是否高亮某节点                    |
   | focusIndex  | number (0-based)              | 4      | 高亮第几个节点                    |
   | labelType   | 'number'|'symbol'|'keyword'   | number | 节点徽标（数字=月份/符号/关键词） |
   | imgCount    | number (0–4)                  | 0      | 图片槽数量（按图比例自适应）      |
   | showAside   | boolean                       | true   | 是否显示「节奏解读」装饰条        |
   | badge       | string                        | '08'   | 页眉编号徽标                      |
   | theme       | Partial<DeckTheme>            | —      | 设计令牌覆盖                      |
   Event = { mark, date, name, text, tag }   // mark 用作 number 模式的徽标（如月份）
   ========================================================================== */
/* ── 页面属性契约 · defaultProps ──────────────────────────────────────────
   本页全部可见文案 / 数据 / 图片槽默认值集中于此，直接编辑即可换内容；
   组件内部以 { ...defaultProps, ...props } 合并，外部传同名 props 逐项覆盖。 */
export const defaultProps = {
  itemCount: 6,
  orientation: '横向',
  focus: true,
  focusIndex: 4,
  labelType: 'number',
  imgCount: 0,
  showAside: true,
  badge: '08',
  events: [
      { mark:'02', date:'2024 · 02', name:'OpenAI',     text:'二级市场要约收购，估值升至约 860 亿美元', tag:'大模型' },
      { mark:'05', date:'2024 · 05', name:'xAI',        text:'B 轮募资 60 亿美元，投后估值 240 亿', tag:'大模型' },
      { mark:'06', date:'2024 · 06', name:'Anthropic',  text:'获亚马逊追加战略投资，加码 Claude 训练', tag:'大模型' },
      { mark:'09', date:'2024 · 09', name:'Databricks', text:'J 轮融资约 100 亿美元，估值冲上 620 亿', tag:'基础设施' },
      { mark:'10', date:'2024 · 10', name:'OpenAI',     text:'新一轮 66 亿美元落定，估值跃至 1570 亿', tag:'大模型' },
      { mark:'11', date:'2024 · 11', name:'xAI',        text:'追加募资推进，年内估值再度翻倍', tag:'大模型' },
      { mark:'12', date:'2024 · 12', name:'Safe SI',    text:'种子轮即募 10 亿美元，AGI 叙事白热化', tag:'大模型' },
      { mark:'12', date:'2024 · 12', name:'Glean',      text:'E 轮 2.6 亿美元，企业搜索估值破 46 亿', tag:'垂直应用' },
    ],
};

function SlideTimeline(props){
  useDeckStyles(props.theme);
  const T = (deckTheme ? deckTheme(props.theme) : {});
  const ACC = T.accent || '#46e3c6';
  const BLUE = T.blue || '#4a86ff';

  const {
    itemCount, orientation, focus, focusIndex, labelType, imgCount, showAside,
    badge, events,
  } = { ...defaultProps, ...props };

  const data = events.slice(0, Math.max(3, Math.min(itemCount, events.length)));
  const fIdx = Math.max(0, Math.min(focusIndex, data.length - 1));
  const isH = orientation === '横向';
  const nImg = Math.max(0, Math.min(imgCount, 4));
  const vDense = !isH && data.length >= 6;   // 纵向且节点多时进入紧凑排版
  const hCompact = isH && (data.length >= 7 || nImg > 0);
  const hAxisGap = hCompact ? 14 : 24;
  const mark = (e,i)=> deckLabel(labelType, i, { keyword:'KEY', number:e.mark });

  return (
    <SlideShell orbs={[{ w:520, h:520, right:-160, top:-150,
        color:`radial-gradient(circle at 50% 50%, ${hexA(BLUE,.18)}, ${hexA(BLUE,0)} 70%)` }]}>
      <SlideHead no={badge} en="Milestones · 2024" cn="年度大事记 · 资本节点"
        badge={labelType==='keyword'?'TIME':labelType==='symbol'?'◆':badge} />

      <div style={{flex:'1 1 0', minHeight:0, display:'flex', flexDirection:'column', marginTop:26}}>
        {/* 可选图片槽（自适应比例，数量 0–4） */}
        {nImg > 0 && ImageStrip && (
          <div className="dk-anim d1" style={{marginBottom:24, flexShrink:0}}>
            <ImageStrip idPrefix="tl-img" count={nImg} width={1700} maxH={isH?300:(data.length>=7?120:160)} theme={props.theme}
              placeholders={[
                { ratio:1.5,  label:'现场 / scene' },
                { ratio:1.33, label:'签约 / deal' },
                { ratio:0.78, label:'人物 / portrait' },
                { ratio:1.62, label:'产品 / product' },
              ]} />
          </div>
        )}

        {/* 横向时间轴 */}
        {isH && (
          <div data-dashi-theme09-timeline-horizontal="true" style={{flex:'1 1 0', minHeight:0, position:'relative',
                display:'grid', gridTemplateColumns:`repeat(${data.length}, minmax(0, 1fr))`, gridTemplateRows:'minmax(0, 1fr) 42px minmax(0, 1fr)',
                columnGap:16, alignItems:'stretch'}}>
            <div data-dashi-theme09-timeline-axis="true" style={{gridColumn:'1 / -1', gridRow:2, alignSelf:'center', height:3,
                background:'linear-gradient(90deg, rgba(255,255,255,.06), rgba(255,255,255,.28), rgba(255,255,255,.06))'}}></div>
            {data.map((e,i)=>{
              const hot = focus && i===fIdx;
              const up = i % 2 === 0;
              return (
                <Fragment key={i}>
                  <div className={'dk-anim d'+Math.min(i+1,6)} data-dashi-theme09-timeline-card-slot={up?'top':'bottom'}
                    style={{gridColumn:i+1, gridRow:up?1:3, minHeight:0, display:'flex', alignItems:up?'flex-end':'flex-start',
                      justifyContent:'center', padding:up?`0 0 ${hAxisGap}px`:`${hAxisGap}px 0 0`, zIndex:2, overflow:'visible'}}>
                    <TimelineCard e={e} hot={hot} mark={mark(e,i)} ACC={ACC} hexA={hexA} compact={hCompact} />
                  </div>
                  <span data-dashi-theme09-timeline-node="true" data-dashi-theme09-timeline-index={i}
                    style={{gridColumn:i+1, gridRow:2, alignSelf:'center', justifySelf:'center', width:hot?26:18, height:hot?26:18,
                      borderRadius:'50%', zIndex:3, background: hot?ACC:'#cfe0ff', border:'3px solid #0a1230',
                      boxShadow: hot?`0 0 22px ${hexA(ACC,.8)}`:'0 0 0 4px rgba(255,255,255,.06)'}}></span>
                </Fragment>
              );
            })}
          </div>
        )}

        {/* 纵向时间轴 */}
        {!isH && (
          <div style={{flex:'1 1 0', minHeight:0, position:'relative', display:'flex', flexDirection:'column', gap: vDense?8:12, paddingLeft:30}}>
            <div style={{position:'absolute', left:38, top:8, bottom:8, width:3,
                background:'linear-gradient(180deg, rgba(255,255,255,.06), rgba(255,255,255,.28), rgba(255,255,255,.06))'}}></div>
            {data.map((e,i)=>{
              const hot = focus && i===fIdx;
              return (
                <div key={i} className={'dk-anim d'+Math.min(i+1,6)} style={{flex:'1 1 0', minHeight:0, display:'flex', alignItems:'center', gap:26, position:'relative', overflow:'visible'}}>
                  <span style={{flexShrink:0, width:hot?24:16, height:hot?24:16, borderRadius:'50%', marginLeft:hot?-4:0, zIndex:2,
                      background: hot?ACC:'#cfe0ff', border:'3px solid #0a1230',
                      boxShadow: hot?`0 0 22px ${hexA(ACC,.8)}`:'0 0 0 4px rgba(255,255,255,.06)'}}></span>
                  <div style={{flex:1, minWidth:0}}>
                    <TimelineCard e={e} hot={hot} mark={mark(e,i)} ACC={ACC} hexA={hexA} wide dense={vDense} />
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* 节奏解读 */}
        {showAside && (
          <div className="dk-glass-dark dk-anim d5" style={{marginTop:18, flexShrink:0, borderRadius:20, padding:'15px 30px',
                display:'flex', alignItems:'center', gap:24, flexWrap:'wrap'}}>
            <span style={{flexShrink:0, fontFamily:'var(--font-mono)', fontSize:14, letterSpacing:'.12em', color:ACC}}>节奏解读</span>
            <p style={{flex:'1 1 300px', fontSize:'var(--type-small)', lineHeight:1.5, color:'rgba(255,255,255,.86)', textWrap:'pretty', minWidth:0}}>
              超大额事件高度集中在<b style={{color:'#fff'}}>下半年</b> —— 头部公司在年末密集关账，单笔金额节节走高，
              将全年融资推向 <b style={{color:ACC}}>970 亿美元</b> 的历史峰值。
            </p>
          </div>
        )}
      </div>
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

/* 时间轴卡片（横向上下错位 / 纵向右侧；dense=纵向密排紧凑态） */
function TimelineCard({ e, hot, mark, ACC, hexA, wide, dense, compact }){
  const badgeSz = wide ? (dense?38:54) : (compact?36:44);
  const nameSz  = wide ? (dense?22:'var(--type-sub)') : (compact?22:28);
  const textSz  = wide ? (dense?14:'var(--type-tiny)') : (compact?13:16);
  const pad     = wide ? (dense?'7px 20px':'16px 26px') : (compact?'10px 14px':'15px 20px');
  const rowGap  = wide ? (dense?16:22) : (compact?6:8);
  const clamp   = dense || compact ? {display:'-webkit-box', WebkitBoxOrient:'vertical', WebkitLineClamp:compact?2:1, overflow:'hidden'} : {};
  return (
    <div className="dk-glass" data-dashi-theme09-timeline-card="true" style={{borderRadius: dense?14:18, padding: pad, width:'100%', maxWidth: wide?'none':(compact?230:280),
          boxShadow: hot?`0 26px 60px ${hexA(ACC,.26)}, 0 0 0 1.5px ${ACC}`:'0 18px 44px rgba(3,8,30,.4)',
          display:'flex', flexDirection: wide?'row':'column', alignItems: wide?'center':'flex-start', gap: rowGap}}>
      <div style={{flexShrink:0, display:'flex', alignItems:'center', gap:dense?10:12}}>
        <span style={{width:badgeSz, height:badgeSz, borderRadius:dense?11:13, flexShrink:0, display:'inline-flex', alignItems:'center', justifyContent:'center',
            fontFamily:'var(--font-display)', fontWeight:900, fontSize:wide?(dense?18:24):(compact?17:20),
            background: hot?hexA(ACC,.18):'rgba(255,255,255,.08)', border:`1px solid ${hot?ACC:'rgba(255,255,255,.18)'}`,
            color: hot?ACC:'#fff'}}>{mark}</span>
        <div>
          <div style={{fontFamily:'var(--font-cn)', fontWeight:900, fontSize:nameSz, lineHeight:1.05, color: hot?'#fff':'rgba(255,255,255,.94)', whiteSpace:'nowrap'}}>{e.name}</div>
          <div style={{fontFamily:'var(--font-mono)', fontSize:13, color:'var(--ink-faint)', marginTop:2}}>{e.date}</div>
        </div>
      </div>
      <p style={{fontSize: textSz, lineHeight:1.4, color:'var(--ink-dim)', textWrap:'pretty', margin:0,
            flex: wide?'1 1 0':'none', minWidth:0, ...clamp}}>{e.text}</p>
    </div>
  );
}

export default SlideTimeline;

/* ── 模板参数 schema（自描述 · 迁移即带控件；Tweaks 由此自动生成） ── */
export const slideSpec = { defaults: defaultProps, slot:'timeline', name:'年度大事记 · Timeline', controls:[
  { prop:'itemCount', type:'slider', label:'数量', default:6, min:3, max:8, step:1, desc:'节点数' },
  { prop:'orientation', type:'radio', label:'方向', default:'横向', options:['横向','纵向'] },
  { prop:'imgCount', type:'slider', label:'图片槽数量', default:0, min:0, max:4, step:1 },
  { prop:'showAside', type:'toggle', label:'装饰文案', default:true },
  { prop:'labelType', type:'labelType', label:'标签类型', default:'数字' },
  { prop:'focus', type:'focus', label:'重点信息 Focus', default:true },
  { prop:'focusIndex', type:'slider', label:'焦点序号', default:4, min:0, max:(p)=>p.itemCount-1, maxFromKey:'itemCount', maxFromKeyOffset:-1, displayOffset:1, step:1, showIf:(p)=>p.focus },
]};
