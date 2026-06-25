import { useDeckStyles, deckTheme, deckLabel, SlideShell, SlideHead } from './DeckKit.jsx';
/* ============================================================================
   SlideRanking — 资本排行榜（头部玩家横向条形榜单）
   独立组件：仅靠 props 控制内容与样式；render 时自注入 DeckKit 基座样式。

   ── 可调参数（Props） ──────────────────────────────────────────────────────
   | prop        | 类型                          | 默认值 | 说明                              |
   | items       | RankItem[]                    | 见下   | 榜单数据源                        |
   | itemCount   | number (3–8)                  | 6      | 实际展示的条目数（截取）          |
   | sort        | '降序' | '升序' | '原序'       | '降序' | 按数值排序方式                    |
   | focus       | boolean                       | true   | 是否高亮某条目                    |
   | focusIndex  | number (0-based, 排序后)       | 0      | 高亮第几名                        |
   | labelType   | 'number'|'symbol'|'keyword'   | number | 名次徽标（数字=名次/符号/关键词） |
   | showValue   | boolean                       | true   | 是否在条形末端显示数值            |
   | showAside   | boolean                       | true   | 是否显示「集中度」装饰条          |
   | unit        | string                        | '亿美元' | 数值单位                        |
   | badge       | string                        | '08'   | 页眉编号徽标                      |
   | theme       | Partial<DeckTheme>            | —      | 设计令牌覆盖                      |
   RankItem = { name, en, value:number, meta, tag }
   ========================================================================== */
/* ── 页面属性契约 · defaultProps ──────────────────────────────────────────
   本页全部可见文案 / 数据 / 图片槽默认值集中于此，直接编辑即可换内容；
   组件内部以 { ...defaultProps, ...props } 合并，外部传同名 props 逐项覆盖。 */
export const defaultProps = {
  itemCount: 6,
  sort: '降序',
  focus: true,
  focusIndex: 0,
  labelType: 'number',
  showValue: true,
  showAside: true,
  unit: '亿美元',
  badge: '08',
  items: [
      { name:'OpenAI',      en:'Foundation Model',   value:118, meta:'未披露轮', tag:'大模型' },
      { name:'xAI',         en:'Foundation Model',   value:110, meta:'B 轮',     tag:'大模型' },
      { name:'Databricks',  en:'Data + AI 平台',     value:100, meta:'J 轮',     tag:'基础设施' },
      { name:'Anthropic',   en:'Foundation Model',   value:95,  meta:'D 轮+',    tag:'大模型' },
      { name:'Safe Superintelligence', en:'AGI 研究', value:50, meta:'种子轮',   tag:'大模型' },
      { name:'Scale AI',    en:'数据基础设施',        value:38,  meta:'F 轮',     tag:'基础设施' },
      { name:'Glean',       en:'企业搜索',            value:26,  meta:'E 轮',     tag:'垂直应用' },
      { name:'Harvey',      en:'法律 AI',             value:15,  meta:'C 轮',     tag:'垂直应用' },
    ],
};

function SlideRanking(props){
  useDeckStyles(props.theme);
  const T = (deckTheme ? deckTheme(props.theme) : {});
  const ACC = T.accent || '#46e3c6';
  const BLUE = T.blue || '#4a86ff';
  const VIO = T.violet || '#9f7bff';

  const {
    itemCount, sort, focus, focusIndex, labelType, showValue, showAside,
    unit, badge, items,
  } = { ...defaultProps, ...props };

  const tagColor = (tag)=> tag==='大模型'?BLUE : tag==='基础设施'?ACC : tag==='垂直应用'?VIO : 'rgba(255,255,255,.5)';

  let rows = items.slice();
  if(sort === '降序') rows.sort((a,b)=> b.value - a.value);
  else if(sort === '升序') rows.sort((a,b)=> a.value - b.value);
  rows = rows.slice(0, Math.max(3, Math.min(itemCount, items.length)));
  const fIdx = Math.max(0, Math.min(focusIndex, rows.length - 1));
  const maxV = Math.max(...rows.map(r=>r.value));
  // 随名次数量自适应字号，避免多条目时文字撞太满
  const n = rows.length;
  const nameSize = n<=5?40 : n<=6?34 : n===7?30 : 27;
  const valSize  = n<=5?54 : n<=6?48 : n===7?44 : 40;
  const rankSize = labelType==='number' ? (n<=5?56 : n<=6?48 : 42) : (n<=6?40:34);
  const spineH   = n<=6?46 : 38;

  const rankBadge = (i)=> deckLabel(labelType, i, { keyword:'TOP', number:'#'+(i+1) });

  return (
    <SlideShell orbs={[{ w:520, h:520, right:-170, top:-160,
        color:`radial-gradient(circle at 50% 50%, ${hexA(VIO,.18)}, ${hexA(VIO,0)} 70%)` }]}>
      <SlideHead no={badge} en="Capital Leaderboard" cn="资本排行榜 · 头部玩家"
        badge={labelType==='keyword'?'RANK':labelType==='symbol'?'◆':badge} />

      <div style={{flex:'1 1 0', minHeight:0, display:'flex', flexDirection:'column', marginTop:28}}>
        <div style={{flex:'1 1 0', minHeight:0, display:'flex', flexDirection:'column', gap:14}}>
          {rows.map((r,i)=>{
            const hot = focus && i===fIdx;
            const c = tagColor(r.tag);
            const pct = Math.max(8, (r.value/maxV)*100);
            return (
              <div key={i} className={'dk-anim d'+Math.min(i+1,6)} style={{flex:'1 1 0', minHeight:0,
                    display:'flex', alignItems:'stretch', gap:20}}>
                {/* 名次徽标 */}
                <div style={{flex:'0 0 96px', display:'flex', alignItems:'center', justifyContent:'center'}}>
                  <span style={{fontFamily:'var(--font-display)', fontWeight:900,
                      fontSize: rankSize, lineHeight:.9,
                      color: hot?ACC:'rgba(255,255,255,.34)',
                      textShadow: hot?`0 0 24px ${hexA(ACC,.5)}`:'none'}}>{rankBadge(i)}</span>
                </div>

                {/* 条形主体 */}
                <div style={{flex:'1 1 0', minWidth:0, position:'relative', borderRadius:'var(--dk-radius)', overflow:'hidden',
                      display:'flex', alignItems:'center', padding:'0 30px',
                      background: hot ? `linear-gradient(150deg, ${hexA(ACC,.18)}, ${hexA(ACC,.05)})` : 'linear-gradient(150deg, rgba(255,255,255,.10), rgba(255,255,255,.035))',
                      border:`1px solid ${hot?ACC:'var(--dk-glass-line)'}`,
                      boxShadow: hot ? `0 26px 64px ${hexA(ACC,.26)}` : '0 18px 44px rgba(3,8,30,.36)'}}>
                  {/* 数值充能条（底层） */}
                  <div style={{position:'absolute', left:0, top:0, bottom:0, width:`${pct}%`,
                      background:`linear-gradient(90deg, ${hexA(c,.34)}, ${hexA(c,.06)})`,
                      borderRight:`2px solid ${hexA(c,.5)}`}}></div>

                  <div style={{position:'relative', display:'flex', alignItems:'center', gap:18, flex:1, minWidth:0}}>
                    <span style={{flexShrink:0, width:12, height:spineH+'px', borderRadius:6, background:c, boxShadow:`0 0 16px ${hexA(c,.6)}`}}></span>
                    <div style={{minWidth:0}}>
                      <div style={{fontFamily:'var(--font-cn)', fontWeight:900, fontSize:nameSize, lineHeight:1.05,
                          color: hot?'#fff':'rgba(255,255,255,.94)', whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis'}}>{r.name}</div>
                      <div style={{display:'flex', alignItems:'center', gap:14, marginTop:4}}>
                        <span style={{fontFamily:'var(--font-mono)', fontSize:14, letterSpacing:'.04em', color:'var(--ink-faint)'}}>{r.en}</span>
                        <span style={{fontSize:13, padding:'3px 11px', borderRadius:999, color:c,
                            background:hexA(c,.14), border:`1px solid ${hexA(c,.4)}`}}>{r.tag}</span>
                        <span style={{fontSize:13, color:'var(--ink-faint)'}}>{r.meta}</span>
                      </div>
                    </div>
                  </div>

                  {/* 数值 */}
                  {showValue && (
                    <div style={{position:'relative', flexShrink:0, display:'flex', alignItems:'baseline', gap:7, marginLeft:18}}>
                      <span style={{fontFamily:'var(--font-display)', fontWeight:900, fontSize:valSize, lineHeight:.85,
                          color: hot?ACC:'#fff', textShadow: hot?`0 0 22px ${hexA(ACC,.5)}`:'none'}}>{r.value}</span>
                      <span style={{fontSize:'var(--type-tiny)', color:'var(--ink-dim)', fontWeight:600}}>{unit}</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* 集中度装饰条 */}
        {showAside && (()=>{
          const top3 = rows.slice(0,3).reduce((a,b)=>a+b.value,0);
          const all = rows.reduce((a,b)=>a+b.value,0) || 1;
          const share = Math.round(top3/all*100);
          return (
            <div className="dk-glass-dark dk-anim d5" style={{marginTop:16, flexShrink:0, borderRadius:20, padding:'16px 30px',
                  display:'flex', alignItems:'center', gap:26, flexWrap:'wrap'}}>
              <span style={{flexShrink:0, fontFamily:'var(--font-mono)', fontSize:14, letterSpacing:'.12em', color:ACC}}>头部集中度</span>
              <div style={{display:'flex', alignItems:'baseline', gap:8}}>
                <span style={{fontFamily:'var(--font-display)', fontWeight:900, fontSize:40, lineHeight:.9, color:'#fff'}}>{share}%</span>
                <span style={{fontSize:'var(--type-tiny)', color:'var(--ink-dim)'}}>资本流向榜单前三</span>
              </div>
              <p style={{flex:'1 1 320px', fontSize:'var(--type-tiny)', lineHeight:1.5, color:'var(--ink-dim)', textWrap:'pretty', minWidth:0}}>
                融资额呈现极端「马太效应」—— 少数大模型与数据平台公司虹吸了绝大多数资金，长尾标的获取资本难度显著上升。
              </p>
            </div>
          );
        })()}
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

export default SlideRanking;

/* ── 模板参数 schema（自描述 · 迁移即带控件；Tweaks 由此自动生成） ── */
export const slideSpec = { defaults: defaultProps, slot:'ranking', name:'资本排行 · Ranking', controls:[
  { prop:'itemCount', type:'slider', label:'条目数量', default:6, min:3, max:8, step:1 },
  { prop:'sort', type:'radio', label:'排序方式', default:'降序', options:['降序','升序','原序'] },
  { prop:'showValue', type:'toggle', label:'数值显示', default:true },
  { prop:'showAside', type:'toggle', label:'装饰文案', default:true },
  { prop:'labelType', type:'labelType', label:'标签类型', default:'数字' },
  { prop:'focus', type:'focus', label:'重点信息 Focus', default:true },
  { prop:'focusIndex', type:'slider', label:'焦点序号', default:0, min:0, max:(p)=>p.itemCount-1, maxFromKey:'itemCount', maxFromKeyOffset:-1, displayOffset:1, step:1, showIf:(p)=>p.focus },
]};
