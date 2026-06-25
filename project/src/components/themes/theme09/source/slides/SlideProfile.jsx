import { useDeckStyles, deckTheme, SlideShell } from './DeckKit.jsx';
import ImageStrip from './ImageStrip.jsx';
/* ============================================================================
   作品集模板组 · Showcase / SlideProfile — 机构 / 个人简介（About）
   独立组件：仅靠 props 控制内容与样式；render 时自注入 DeckKit 基座样式。
   含自适应肖像图片槽（ImageStrip，比例自适应、数量 0–2）。
   * 本 deck 内承载「关于研究机构」内容，沿用报告主题（可经 props 改作任意 About 页）。

   ── 可调参数（Props） ──────────────────────────────────────────────────────
   | prop         | 类型              | 默认值        | 说明                              |
   | title        | string            | 'About me'    | 页首英文标题                      |
   | name         | string            | '王浩宇'      | 姓名                              |
   | nameEN       | string            | 'WangHaoyu'   | 姓名英文                          |
   | experiences  | Exp[]             | 见下          | 经历条目                          |
   | expCount     | number (1–3)      | 2             | 展示的经历条数                    |
   | stats        | Stat[]            | 见下          | 底部数据                          |
   | statCount    | number (0–4)      | 4             | 展示的数据条数                    |
   | skills       | Skill[]           | 见下          | 技能评级                          |
   | skillCount   | number (0–5)      | 4             | 展示的技能条数                    |
   | infoList     | Info[]            | 见下          | 基本信息                          |
   | infoCount    | number (0–4)      | 3             | 展示的信息条数                    |
   | pills        | string[]          | 见下          | 标签药丸                          |
   | pillCount    | number (0–8)      | 6             | 展示的标签数                      |
   | imgCount     | number (0–2)      | 1             | 肖像图片槽数量（比例自适应）      |
   | showBarcode  | boolean           | true          | 条形码装饰                        |
   | focus        | boolean           | true          | 是否高亮某条技能                  |
   | focusIndex   | number (0-based)  | 0             | 高亮第几条技能                    |
   | theme        | Partial<DeckTheme>| —             | 设计令牌覆盖                      |
   Exp={period,org,role,desc} · Stat={value,unit,label} · Skill={label,level(0–5),tag?} · Info={label,value}
   ========================================================================== */
/* ── 页面属性契约 · defaultProps ──────────────────────────────────────────
   本页全部可见文案 / 数据 / 图片槽默认值集中于此，直接编辑即可换内容；
   组件内部以 { ...defaultProps, ...props } 合并，外部传同名 props 逐项覆盖。 */
export const defaultProps = {
  title: 'About us',
  name: 'AI Capital Lab',
  nameEN: '资本研究室',
  code: 'AI CAPITAL LAB · 2024',
  experiences: [
      { period:'2024.01 – 2024.12', org:'2024 大额融资全景追踪', role:'年度旗舰',
        desc:'系统追踪美国 AI 产业单笔亿美元以上的大额融资事件，构建结构化数据库与可视化图谱。' },
      { period:'2021 – 2023', org:'AI 一级市场连续观察', role:'长期研究',
        desc:'连续三年覆盖全球 AI 投融资动态，沉淀可复用的「横纵分析法」研究框架。' },
      { period:'2018 – 2020', org:'前沿科技投研起步', role:'方法奠基',
        desc:'建立赛道分层与估值对照框架，形成研究底层方法论。' },
    ],
  expCount: 2,
  stats: [
      { value:'970',  unit:'亿$', label:'全年总融资' },
      { value:'240',  unit:'+',   label:'大额事件' },
      { value:'12',   unit:'类',  label:'赛道覆盖' },
      { value:'63.9', unit:'%',   label:'湾区集中' },
    ],
  statCount: 4,
  skills: [
      { label:'一级市场数据', level:5, tag:'Db' },
      { label:'估值与建模',   level:5, tag:'Va' },
      { label:'赛道结构研究', level:4, tag:'Se' },
      { label:'数据可视化',   level:4, tag:'Vz' },
      { label:'政策与合规',   level:3, tag:'Po' },
    ],
  skillCount: 4,
  infoList: [
      { label:'口径', value:'≥ 1 亿美元' },
      { label:'周期', value:'季度更新' },
      { label:'区域', value:'美国为主' },
      { label:'来源', value:'公开披露' },
    ],
  infoCount: 3,
  pills: ['大模型','算力基础设施','垂直应用','数据与标注','投融资','估值研究','政策合规','退出路径'],
  pillCount: 6,
  imgCount: 1,
  showBarcode: true,
  focus: true,
  focusIndex: 0,
};

function SlideProfile(props){
  useDeckStyles(props.theme);
  const T = (deckTheme ? deckTheme(props.theme) : {});
  const ACC = T.accent || '#46e3c6';

  const {
    title, name, nameEN, code, experiences, expCount, stats,
    statCount, skills, skillCount, infoList, infoCount, pills, pillCount,
    imgCount, showBarcode, focus, focusIndex,
  } = { ...defaultProps, ...props };

  const exps = experiences.slice(0, Math.max(1, Math.min(expCount, experiences.length)));
  const sts  = stats.slice(0, Math.max(0, Math.min(statCount, stats.length)));
  const sks  = skills.slice(0, Math.max(0, Math.min(skillCount, skills.length)));
  const infos= infoList.slice(0, Math.max(0, Math.min(infoCount, infoList.length)));
  const pls  = pills.slice(0, Math.max(0, Math.min(pillCount, pills.length)));
  const fIdx = Math.max(0, Math.min(focusIndex, Math.max(0, sks.length - 1)));

  return (
    <SlideShell orbs={[{ w:520, h:520, right:-150, top:-150,
        color:'radial-gradient(circle at 50% 50%, rgba(120,170,255,.34), rgba(40,90,230,0) 70%)' }]}>
      {/* 标题 + 姓名胶囊 */}
      <div className="dk-anim" style={{flexShrink:0, display:'flex', alignItems:'center', gap:28, zIndex:2}}>
        <h2 style={{fontFamily:'var(--font-display)', fontWeight:900, fontSize:'var(--type-h2)', color:'#fff', letterSpacing:'.01em'}}>{title}</h2>
        <div style={{display:'inline-flex', alignItems:'center', gap:16, padding:'10px 12px 10px 24px', borderRadius:999,
            background:'rgba(255,255,255,.06)', border:'1px solid rgba(255,255,255,.16)'}}>
          <span style={{fontFamily:'var(--font-cn)', fontWeight:900, fontSize:'var(--type-sub)', color:'#fff'}}>{name}</span>
          <span style={{fontFamily:'var(--font-mono)', fontSize:'var(--type-tiny)', color:'var(--ink-dim)'}}>{nameEN}</span>
          <span style={{width:44, height:44, borderRadius:'50%', background:ACC, color:'#04121a', display:'inline-flex',
              alignItems:'center', justifyContent:'center', fontSize:22, fontWeight:800}}>→</span>
        </div>
      </div>

      {/* 主体两栏 */}
      <div style={{flex:'1 1 0', minHeight:0, marginTop:28, display:'grid', gridTemplateColumns:'0.92fr 1.08fr', gap:30, zIndex:2}}>

        {/* 左：经历 + 数据 */}
        <div className="dk-glass-dark dk-anim d1" style={{borderRadius:'var(--dk-radius)', padding:'34px 36px',
            display:'flex', flexDirection:'column', minHeight:0}}>
          <div style={{flex:'1 1 0', minHeight:0, display:'flex', flexDirection:'column', gap:22, overflow:'hidden'}}>
            {exps.map((e,i)=>(
              <div key={i} style={{display:'flex', flexDirection:'column', gap:7, paddingLeft:22, position:'relative'}}>
                <span style={{position:'absolute', left:0, top:6, width:11, height:11, borderRadius:'50%', background:ACC, boxShadow:`0 0 10px ${hexA(ACC,.7)}`}}></span>
                {i<exps.length-1 && <span style={{position:'absolute', left:5, top:18, bottom:-22, width:1, background:'rgba(255,255,255,.16)'}}></span>}
                <div style={{display:'flex', justifyContent:'space-between', alignItems:'baseline', gap:14}}>
                  <span style={{fontFamily:'var(--font-cn)', fontWeight:900, fontSize:'var(--type-sub)', color:'#fff', lineHeight:1.1}}>{e.org}</span>
                  <span style={{flexShrink:0, padding:'4px 14px', borderRadius:999, background:hexA(ACC,.14), border:`1px solid ${hexA(ACC,.4)}`,
                      fontFamily:'var(--font-cn)', fontWeight:700, fontSize:'var(--type-tiny)', color:ACC}}>{e.role}</span>
                </div>
                <span style={{fontFamily:'var(--font-mono)', fontSize:'var(--type-tiny)', color:'var(--ink-faint)', letterSpacing:'.03em'}}>{e.period}</span>
                <p style={{fontSize:'var(--type-small)', lineHeight:1.5, color:'var(--ink-dim)', textWrap:'pretty', marginTop:2}}>{e.desc}</p>
              </div>
            ))}
          </div>
          {sts.length>0 && (
            <div style={{flexShrink:0, marginTop:24, paddingTop:24, borderTop:'1px solid rgba(255,255,255,.12)',
                display:'grid', gridTemplateColumns:`repeat(${sts.length}, 1fr)`, gap:14}}>
              {sts.map((s,i)=>(
                <div key={i}>
                  <div style={{display:'flex', alignItems:'baseline', gap:3}}>
                    <span style={{fontFamily:'var(--font-display)', fontWeight:900, fontSize:48, color:'#fff', lineHeight:.85}}>{s.value}</span>
                    <span style={{fontSize:'var(--type-tiny)', fontWeight:700, color:ACC}}>{s.unit}</span>
                  </div>
                  <div style={{fontSize:'var(--type-tiny)', color:'var(--ink-faint)', marginTop:6}}>{s.label}</div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* 右：肖像/信息 + 技能 + 标签 */}
        <div style={{display:'flex', flexDirection:'column', gap:20, minHeight:0}}>
          {/* 肖像 + 基本信息 */}
          <div className="dk-anim d2" style={{flexShrink:0, display:'flex', gap:24, alignItems:'stretch'}}>
            {imgCount>0 && ImageStrip && (
              <div style={{flexShrink:0}}>
                <ImageStrip idPrefix="profile" count={imgCount} width={imgCount>1?420:220} maxH={200} gap={14}
                  placeholders={[{ ratio:0.86, label:'肖像 / portrait' },{ ratio:0.86, label:'肖像 / portrait' }]} />
              </div>
            )}
            {infos.length>0 && (
              <div className="dk-glass" style={{flex:1, borderRadius:20, padding:'20px 26px', display:'flex',
                  flexDirection:'column', justifyContent:'center', gap:14}}>
                {infos.map((it,i)=>(
                  <div key={i} style={{display:'flex', alignItems:'baseline', gap:14}}>
                    <span style={{flexShrink:0, width:54, fontFamily:'var(--font-mono)', fontSize:'var(--type-tiny)', color:'var(--ink-faint)'}}>{it.label}</span>
                    <span style={{fontFamily:'var(--font-cn)', fontWeight:700, fontSize:'var(--type-small)', color:'#fff'}}>{it.value}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* 技能评级 */}
          {sks.length>0 && (
            <div className="dk-anim d3" style={{flex:'1 1 0', minHeight:0, display:'grid',
                gridTemplateColumns:'1fr 1fr', gridAutoRows:'minmax(0,1fr)', gap:14}}>
              {sks.map((s,i)=>{
                const hot = focus && i===fIdx;
                return (
                  <div key={i} style={{minHeight:0, display:'flex', alignItems:'center', gap:16, borderRadius:16, padding:'0 20px',
                      background: hot ? 'linear-gradient(120deg, '+hexA(ACC,.14)+', rgba(255,255,255,.03))' : 'rgba(255,255,255,.04)',
                      border:`1px solid ${hot?hexA(ACC,.45):'rgba(255,255,255,.1)'}`}}>
                    <span style={{flexShrink:0, width:48, height:48, borderRadius:13, display:'inline-flex', alignItems:'center', justifyContent:'center',
                        fontFamily:'var(--font-display)', fontWeight:800, fontSize:20, color:hot?'#04121a':'#fff',
                        background: hot?ACC:'rgba(255,255,255,.08)', border:`1px solid ${hot?ACC:'rgba(255,255,255,.16)'}`}}>{s.tag||(i+1)}</span>
                    <div style={{minWidth:0, flex:1}}>
                      <div style={{fontFamily:'var(--font-cn)', fontWeight:800, fontSize:'var(--type-small)', color: hot?ACC:'#fff'}}>{s.label}</div>
                      <div style={{display:'flex', gap:4, marginTop:6}}>
                        {Array.from({length:5}).map((_,k)=>(
                          <span key={k} style={{width:14, height:6, borderRadius:3,
                            background: k<s.level ? (hot?ACC:'rgba(255,255,255,.8)') : 'rgba(255,255,255,.16)'}}></span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* 标签 + 条形码 */}
          <div className="dk-anim d4" style={{flexShrink:0, display:'flex', gap:16, alignItems:'flex-end'}}>
            {pls.length>0 && (
              <div style={{flex:1, display:'flex', flexWrap:'wrap', gap:10}}>
                {pls.map((p,i)=>(
                  <span key={i} style={{padding:'9px 18px', borderRadius:999, fontFamily:'var(--font-cn)', fontWeight:600,
                      fontSize:'var(--type-tiny)', color:'rgba(255,255,255,.86)', background:'rgba(255,255,255,.05)',
                      border:'1px solid rgba(255,255,255,.14)'}}>{p}</span>
                ))}
              </div>
            )}
            {showBarcode && (
              <div style={{flexShrink:0, display:'flex', flexDirection:'column', alignItems:'flex-end', gap:6}}>
                <div style={{display:'flex', gap:2, height:46, alignItems:'stretch'}}>
                  {Array.from({length:34}).map((_,i)=>(
                    <span key={i} style={{width:(i*7%3)+1.5, background: i%5===0?'#fff':'rgba(255,255,255,.7)'}}></span>
                  ))}
                </div>
                <span style={{fontFamily:'var(--font-mono)', fontSize:12, letterSpacing:'.3em', color:'var(--ink-faint)'}}>{code}</span>
              </div>
            )}
          </div>
        </div>
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

export default SlideProfile;

/* ── 模板参数 schema（自描述 · 迁移即带控件；Tweaks 由此自动生成） ── */
export const slideSpec = { defaults: defaultProps, slot:'pf-profile', name:'关于我们 · About', controls:[
  { prop:'expCount', type:'slider', label:'经历条数', default:2, min:1, max:3, step:1 },
  { prop:'statCount', type:'slider', label:'数据条数', default:4, min:0, max:4, step:1 },
  { prop:'skillCount', type:'slider', label:'能力条数', default:4, min:0, max:5, step:1 },
  { prop:'infoCount', type:'slider', label:'信息条数', default:3, min:0, max:4, step:1 },
  { prop:'pillCount', type:'slider', label:'标签数量', default:6, min:0, max:8, step:1 },
  { prop:'imgCount', type:'slider', label:'图片槽数量', default:1, min:0, max:2, step:1 },
  { prop:'showBarcode', type:'toggle', label:'条形码装饰', default:true },
  { prop:'focus', type:'focus', label:'重点信息 Focus', default:true },
  { prop:'focusIndex', type:'slider', label:'焦点序号', default:0, min:0, max:(p)=>p.skillCount-1, maxFromKey:'skillCount', maxFromKeyOffset:-1, displayOffset:1, step:1, showIf:(p)=>p.focus&&p.skillCount>0 },
]};
