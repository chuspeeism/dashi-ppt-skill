import { useDeckStyles, deckTheme, SlideShell, SlideHead } from './DeckKit.jsx';
import ImageStrip from './ImageStrip.jsx';
/* ============================================================================
   SlideTeam — 研究团队与致谢（成员网格 + 自适应肖像图片槽 + 致谢）
   独立组件：仅靠 props 控制内容与样式；render 时自注入 DeckKit 基座样式。
   非图表内容页 · 通用版式「人物 / 致谢」（肖像槽按真实比例自适应，数量 0–n）。

   ── 可调参数（Props） ──────────────────────────────────────────────────────
   | prop        | 类型                          | 默认值 | 说明                          |
   | members     | Member[]                      | 见下   | 成员数据源                    |
   | memberCount | number (2–6)                  | 4      | 展示的成员数（截取 members）  |
   | columns     | number (2–4)                  | 4      | 成员网格列数                  |
   | focus       | boolean                       | true   | 是否高亮某位成员              |
   | focusIndex  | number (0-based)              | 0      | 高亮第几位                    |
   | imgCount    | number (0–6)                  | 4      | 肖像图片槽数量（自适应比例）  |
   | showAside   | boolean                       | true   | 是否显示「致谢」面板          |
   | note        | string                        | 见下   | 致谢文案                      |
   | head        | {no,en,cn}                    | 见下   | 页眉编号 / 英文 / 中文标题    |
   | theme       | Partial<DeckTheme>            | —      | 设计令牌覆盖                  |
   Member = { name:string, role:string, en:string }
   ========================================================================== */
/* ── 页面属性契约 · defaultProps ──────────────────────────────────────────
   本页全部可见文案 / 数据 / 图片槽默认值集中于此，直接编辑即可换内容；
   组件内部以 { ...defaultProps, ...props } 合并，外部传同名 props 逐项覆盖。 */
export const defaultProps = {
  memberCount: 4,
  columns: 4,
  focus: true,
  focusIndex: 0,
  imgCount: 4,
  showAside: true,
  head: { no:'16', en:'Team & Credits', cn:'研究团队与致谢' },
  note: '感谢所有公开披露数据的机构与受访者。本报告基于公开信息整理与研究性推演，不构成任何投资建议。',
  members: [
      { name:'林知远', role:'首席研究员', en:'Lead Analyst' },
      { name:'苏砚',   role:'数据负责人', en:'Data Lead' },
      { name:'江临',   role:'行业研究',   en:'Sector Research' },
      { name:'周遇',   role:'可视化设计', en:'Visual Design' },
      { name:'何屿',   role:'编辑校对',   en:'Editing' },
      { name:'温岚',   role:'对外沟通',   en:'Communications' },
    ],
};

function SlideTeam(props){
  useDeckStyles(props.theme);
  const T = (deckTheme ? deckTheme(props.theme) : {});
  const ACC = T.accent || '#46e3c6';

  const {
    memberCount, columns, focus, focusIndex, imgCount, showAside, head,
    note, members,
  } = { ...defaultProps, ...props };

  const cols = Math.max(2, Math.min(columns, 4));
  const shown = members.slice(0, Math.max(2, Math.min(memberCount, members.length)));
  const fIdx = Math.max(0, Math.min(focusIndex, shown.length - 1));
  const hasImg = imgCount > 0;
  // 行数越多越拥挤：自适应收紧卡片内边距 / 字号 / 肖像条高度，避免成员文字被裁切
  const rows = Math.ceil(shown.length / cols);
  const dense = rows >= 3;
  const cardPad = dense ? '14px 24px' : '24px 28px';
  const nameFs = dense ? 30 : 'var(--type-sub)';
  const roleMt = dense ? 5 : 10;
  const gridGap = dense ? 14 : 18;
  const portraitMaxH = dense ? 162 : 216;

  return (
    <SlideShell orbs={[{ w:520, h:520, left:-160, bottom:-180,
        color:'radial-gradient(circle at 50% 50%, rgba(70,227,198,.18), rgba(70,227,198,0) 70%)' }]}>
      <SlideHead no={head.no} en={head.en} cn={head.cn} badge={head.no} />

      <div style={{flex:'1 1 0', minHeight:0, display:'flex', flexDirection:'column', marginTop:28, gap:22}}>
        {/* 肖像图片槽（自适应比例 · 数量 0–n） */}
        {hasImg && (
          <div className="dk-anim d1" style={{flexShrink:0}}>
            <div style={{display:'flex', alignItems:'center', gap:16, marginBottom:16}}>
              <span style={{fontFamily:'var(--font-mono)', fontSize:14, letterSpacing:'.14em', color:'var(--ink-faint)', textTransform:'uppercase'}}>Portraits</span>
              <span style={{height:1, flex:1, background:'rgba(255,255,255,.14)'}}></span>
              <span style={{fontSize:'var(--type-tiny)', color:'var(--ink-faint)'}}>肖像为示意 · 槽位按图片比例自适应</span>
            </div>
            {ImageStrip &&
              <ImageStrip idPrefix="team" count={imgCount} width={1700} maxH={portraitMaxH} gap={20}
                placeholders={[
                  { ratio:0.82, label:'成员 / portrait' },
                  { ratio:0.82, label:'成员 / portrait' },
                  { ratio:0.82, label:'成员 / portrait' },
                  { ratio:0.82, label:'成员 / portrait' },
                  { ratio:0.82, label:'成员 / portrait' },
                  { ratio:0.82, label:'成员 / portrait' },
                ]} />}
          </div>
        )}

        {/* 成员网格 */}
        <div className="dk-anim d2" style={{flex:'1 1 0', minHeight:0, display:'grid',
              gridTemplateColumns:`repeat(${cols}, 1fr)`, gridAutoRows:'minmax(0,1fr)', gap:gridGap}}>
          {shown.map((m,i)=>{
            const hot = focus && i===fIdx;
            return (
              <div key={i} style={{minHeight:0, display:'flex', flexDirection:'column', justifyContent:'center',
                  borderRadius:'var(--dk-radius)', padding:cardPad, overflow:'hidden',
                  background: hot ? 'linear-gradient(135deg, '+hexA(ACC,.13)+', rgba(255,255,255,.03))' : 'rgba(255,255,255,.035)',
                  border:`1px solid ${hot ? hexA(ACC,.45) : 'rgba(255,255,255,.10)'}`,
                  boxShadow: hot ? `0 24px 60px ${hexA(ACC,.20)}` : 'none'}}>
                <div style={{fontFamily:'var(--font-cn)', fontWeight:900, fontSize:nameFs,
                    color: hot ? ACC : '#fff', lineHeight:1}}>{m.name}</div>
                <div style={{fontSize:'var(--type-small)', fontWeight:600, color:'rgba(255,255,255,.82)', marginTop:roleMt}}>{m.role}</div>
                <div style={{fontFamily:'var(--font-mono)', fontSize:14, letterSpacing:'.06em', color:'var(--ink-faint)', marginTop:4}}>{m.en}</div>
              </div>
            );
          })}
        </div>

        {/* 致谢 */}
        {showAside && note && (
          <div className="dk-glass dk-anim d3" style={{flexShrink:0, borderRadius:'var(--dk-radius)', padding:'24px 36px',
              display:'flex', alignItems:'center', gap:26, position:'relative', overflow:'hidden',
              boxShadow:`0 22px 56px ${hexA(ACC,.16)}, 0 0 0 1px ${hexA(ACC,.3)}`}}>
            <span style={{flexShrink:0, fontFamily:'var(--font-mono)', fontSize:14, letterSpacing:'.14em',
                color:ACC, writingMode:'vertical-rl', textOrientation:'upright'}}>致谢</span>
            <span style={{width:1, alignSelf:'stretch', background:'rgba(255,255,255,.16)'}}></span>
            <p style={{fontSize:'var(--type-small)', lineHeight:1.5, color:'rgba(255,255,255,.88)', textWrap:'pretty'}}>{note}</p>
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

export default SlideTeam;

/* ── 模板参数 schema（自描述 · 迁移即带控件；Tweaks 由此自动生成） ── */
export const slideSpec = { defaults: defaultProps, slot:'team', name:'研究团队 · Team', controls:[
  { prop:'memberCount', type:'slider', label:'数量', default:4, min:2, max:6, step:1 },
  { prop:'columns', type:'slider', label:'每行数量', default:4, min:2, max:4, step:1 },
  { prop:'imgCount', type:'slider', label:'图片槽数量', default:4, min:0, max:6, step:1 },
  { prop:'showAside', type:'toggle', label:'装饰文案', default:true },
  { prop:'focus', type:'focus', label:'重点信息 Focus', default:true },
  { prop:'focusIndex', type:'slider', label:'焦点序号', default:0, min:0, max:(p)=>p.memberCount-1, maxFromKey:'memberCount', maxFromKeyOffset:-1, displayOffset:1, step:1, showIf:(p)=>p.focus },
]};
