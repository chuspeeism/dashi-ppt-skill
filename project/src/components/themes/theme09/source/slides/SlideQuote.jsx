import { useDeckStyles, deckTheme, deckLabel, SlideShell, SlideHead } from './DeckKit.jsx';
import ImageStrip from './ImageStrip.jsx';
/* ============================================================================
   SlideQuote — 观点引述（金句墙 · 焦点大引 + 辅引 + 可选头像槽）
   独立组件：仅靠 props 控制内容与样式；render 时自注入 DeckKit 基座样式。
   头像槽依赖 ImageStrip.jsx（imgCount>0 时）：用户上传后按真实比例自适应。

   ── 可调参数（Props） ──────────────────────────────────────────────────────
   | prop          | 类型                        | 默认值 | 说明                            |
   | quotes        | Quote[]                     | 见下   | 引述数据源                      |
   | itemCount     | number (1–4)                | 4      | 实际展示的引述数（截取）        |
   | focus         | boolean                     | true   | 是否突出某条为「大引」          |
   | focusIndex    | number (0-based)            | 0      | 突出第几条                      |
   | labelType     | 'number'|'symbol'|'keyword' | symbol | 引述徽标样式                    |
   | showSource    | boolean                     | true   | 是否显示署名 / 角色             |
   | imgCount      | number (0–4)                | 0      | 头像图片槽数量（按图比例自适应）|
   | showAside     | boolean                     | true   | 是否显示「立场分布」装饰条      |
   | badge         | string                      | '09'   | 页眉编号徽标                    |
   | theme         | Partial<DeckTheme>          | —      | 设计令牌覆盖                    |
   Quote = { text, name, role, tone:'看好'|'谨慎'|'中性' }
   ========================================================================== */
/* ── 页面属性契约 · defaultProps ──────────────────────────────────────────
   本页全部可见文案 / 数据 / 图片槽默认值集中于此，直接编辑即可换内容；
   组件内部以 { ...defaultProps, ...props } 合并，外部传同名 props 逐项覆盖。 */
export const defaultProps = {
  itemCount: 4,
  focus: true,
  focusIndex: 0,
  labelType: 'symbol',
  showSource: true,
  imgCount: 0,
  showAside: true,
  badge: '09',
  quotes: [
      { text:'2024 是 AI 的「资本大年」—— 资金以前所未有的密度涌向少数能讲好 AGI 故事的团队，赢家通吃成为常态。', name:'某顶级 VC', role:'成长期基金 合伙人', tone:'看好' },
      { text:'估值建立在未来市值而非当期收入上，一旦宏观收紧，高位的回调几乎不可避免。', name:'二级市场', role:'科技板块 分析师', tone:'谨慎' },
      { text:'真正稀缺的不是模型，而是能把模型嵌进工作流、拿到续约的垂直应用。', name:'产业基金', role:'企业服务 MD', tone:'看好' },
      { text:'卖铲子的人最先赚钱 —— 算力、数据与工具链的中游，是更稳的下注。', name:'早期机构', role:'基础设施 投资人', tone:'中性' },
    ],
};

function SlideQuote(props){
  useDeckStyles(props.theme);
  const T = (deckTheme ? deckTheme(props.theme) : {});
  const ACC = T.accent || '#46e3c6';
  const WARN = T.warn || '#ffb27a';

  const {
    itemCount, focus, focusIndex, labelType, showSource, imgCount, showAside,
    badge, quotes,
  } = { ...defaultProps, ...props };

  const data = quotes.slice(0, Math.max(1, Math.min(itemCount, quotes.length)));
  const fIdx = Math.max(0, Math.min(focusIndex, data.length - 1));
  const nImg = Math.max(0, Math.min(imgCount, 4));
  const toneColor = (t)=> t==='谨慎'?WARN : t==='看好'?ACC : 'rgba(255,255,255,.5)';
  const mark = (i)=> deckLabel(labelType, i, { keyword:'Q' });

  // 焦点条放第一位作大引，其余为辅引
  const lead = focus ? data[fIdx] : data[0];
  const leadIdx = focus ? fIdx : 0;
  const rest = data.map((q,i)=>({q,i})).filter(o=>o.i!==leadIdx);
  // 辅引随数量 / 署名自适应：限制行数与字号，避免右侧撞太满（含图时再收紧一行 + 压低图条）
  const imgSqueeze = nImg>0 ? 1 : 0;
  const crowded = rest.length>=3;
  const restClamp = Math.max(1, (crowded ? (showSource?3:4) : rest.length===2 ? (showSource?4:5) : 7) - imgSqueeze);
  const restFont  = crowded ? 'var(--type-tiny)' : 'var(--type-small)';
  const restPad   = crowded ? (nImg>0?'12px 22px':'16px 24px') : '22px 26px';
  const restSrcMt = crowded ? 9 : 14;
  const imgMaxH   = crowded ? 148 : 188;

  return (
    <SlideShell orbs={[{ w:520, h:520, left:-170, bottom:-160,
        color:`radial-gradient(circle at 50% 50%, ${hexA(ACC,.16)}, ${hexA(ACC,0)} 70%)` }]}>
      <SlideHead no={badge} en="Voices · Perspectives" cn="观点引述 · 资本众声"
        badge={labelType==='keyword'?'SAY':labelType==='symbol'?'◆':badge} />

      <div style={{flex:'1 1 0', minHeight:0, display:'flex', flexDirection:'column', marginTop:24}}>
        {nImg > 0 && ImageStrip && (
          <div className="dk-anim d1" style={{marginBottom:22, flexShrink:0}}>
            <ImageStrip idPrefix="quote-img" count={nImg} width={1700} maxH={imgMaxH} theme={props.theme}
              placeholders={[
                { ratio:1.0,  label:'头像 / portrait' },
                { ratio:1.0,  label:'头像 / portrait' },
                { ratio:1.33, label:'机构 / logo' },
                { ratio:1.0,  label:'头像 / portrait' },
              ]} />
          </div>
        )}

        <div style={{flex:'1 1 0', minHeight:0, display:'grid', gridTemplateColumns: rest.length? '1.55fr 1fr':'1fr', gap:26}}>
          {/* 大引 */}
          <div className="dk-glass dk-anim d2" style={{borderRadius:'var(--dk-radius)', padding:'46px 48px', position:'relative', overflow:'hidden',
                display:'flex', flexDirection:'column', justifyContent:'center',
                boxShadow:`0 30px 70px ${hexA(toneColor(lead.tone),.22)}, 0 0 0 1.5px ${hexA(toneColor(lead.tone),.6)}`}}>
            <span style={{position:'absolute', top:-30, left:30, fontFamily:'Archivo, serif', fontWeight:900, fontSize:300,
                lineHeight:1, color:hexA(toneColor(lead.tone),.1), pointerEvents:'none'}}>“</span>
            <p style={{position:'relative', fontFamily:'var(--font-cn)', fontWeight:700, fontSize:46, lineHeight:1.42,
                color:'#fff', textWrap:'pretty', margin:0}}>{lead.text}</p>
            {showSource && (
              <div style={{position:'relative', display:'flex', alignItems:'center', gap:16, marginTop:34}}>
                <span style={{width:54, height:54, borderRadius:14, flexShrink:0, display:'inline-flex', alignItems:'center', justifyContent:'center',
                    fontFamily:'var(--font-display)', fontWeight:900, fontSize:22,
                    background:hexA(toneColor(lead.tone),.18), border:`1.5px solid ${toneColor(lead.tone)}`, color:toneColor(lead.tone)}}>{mark(leadIdx)}</span>
                <div>
                  <div style={{fontFamily:'var(--font-cn)', fontWeight:800, fontSize:'var(--type-sub)', color:'#fff'}}>{lead.name}</div>
                  <div style={{fontSize:'var(--type-tiny)', color:'var(--ink-dim)', marginTop:2}}>{lead.role}</div>
                </div>
                <span style={{marginLeft:'auto', fontSize:14, padding:'6px 14px', borderRadius:999, color:toneColor(lead.tone),
                    background:hexA(toneColor(lead.tone),.14), border:`1px solid ${hexA(toneColor(lead.tone),.45)}`, fontWeight:700}}>{lead.tone}</span>
              </div>
            )}
          </div>

          {/* 辅引 */}
          {rest.length>0 && (
            <div style={{display:'flex', flexDirection:'column', gap:18, minHeight:0}}>
              {rest.map(({q,i},k)=>{
                const c = toneColor(q.tone);
                return (
                  <div key={i} className={'dk-glass-dark dk-anim d'+Math.min(k+3,6)} style={{flex:'1 1 0', minHeight:0, borderRadius:20, padding:restPad,
                        display:'flex', flexDirection:'column', justifyContent:'center', borderLeft:`4px solid ${c}`, overflow:'hidden'}}>
                    <p style={{fontSize:restFont, lineHeight:1.5, color:'rgba(255,255,255,.9)', textWrap:'pretty', margin:0,
                          display:'-webkit-box', WebkitBoxOrient:'vertical', WebkitLineClamp:restClamp, overflow:'hidden'}}>{q.text}</p>
                    {showSource && (
                      <div style={{display:'flex', alignItems:'center', gap:10, marginTop:restSrcMt}}>
                        <span style={{fontFamily:'var(--font-mono)', fontSize:13, color:c, fontWeight:700}}>{mark(i)}</span>
                        <span style={{fontSize:'var(--type-tiny)', fontWeight:700, color:'#fff'}}>{q.name}</span>
                        <span style={{fontSize:13, color:'var(--ink-faint)'}}>· {q.role}</span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {showAside && (()=>{
          const cnt = { 看好:0, 谨慎:0, 中性:0 };
          data.forEach(q=> cnt[q.tone]!=null && cnt[q.tone]++);
          return (
            <div className="dk-anim d5" style={{marginTop:18, flexShrink:0, display:'flex', alignItems:'center', gap:18}}>
              <span style={{flexShrink:0, fontFamily:'var(--font-mono)', fontSize:14, letterSpacing:'.12em', color:'var(--ink-faint)'}}>立场分布</span>
              <div style={{flex:1, display:'flex', gap:14}}>
                {[['看好',ACC],['谨慎',WARN],['中性','rgba(255,255,255,.4)']].map((g,i)=>(
                  <div key={i} style={{flex:cnt[g[0]]||0.001, display: cnt[g[0]]?'flex':'none', alignItems:'center', gap:10, padding:'10px 18px', borderRadius:12,
                        background:hexA(g[1],.12), border:`1px solid ${hexA(g[1],.4)}`}}>
                    <span style={{width:10, height:10, borderRadius:'50%', background:g[1], flexShrink:0}}></span>
                    <span style={{fontSize:'var(--type-tiny)', color:'#fff', fontWeight:600, whiteSpace:'nowrap'}}>{g[0]} · {cnt[g[0]]}</span>
                  </div>
                ))}
              </div>
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

export default SlideQuote;

/* ── 模板参数 schema（自描述 · 迁移即带控件；Tweaks 由此自动生成） ── */
export const slideSpec = { defaults: defaultProps, slot:'quote', name:'观点引述 · Quote', controls:[
  { prop:'itemCount', type:'slider', label:'数量', default:4, min:1, max:4, step:1 },
  { prop:'imgCount', type:'slider', label:'图片槽数量', default:0, min:0, max:4, step:1 },
  { prop:'showSource', type:'toggle', label:'署名', default:true },
  { prop:'showAside', type:'toggle', label:'装饰文案', default:true },
  { prop:'labelType', type:'labelType', label:'标签类型', default:'数字' },
  { prop:'focus', type:'focus', label:'重点信息 Focus', default:true },
  { prop:'focusIndex', type:'slider', label:'焦点序号', default:0, min:0, max:(p)=>p.itemCount-1, maxFromKey:'itemCount', maxFromKeyOffset:-1, displayOffset:1, step:1, showIf:(p)=>p.focus },
]};
