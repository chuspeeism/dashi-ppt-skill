/* ============================================================================
   SlideZine — 杂志跨页（编辑式拼版 · 左竖长图 + 标题/正文 + 双小图 + 抽言）
   标准 ES Module。图片用 FillSlot（满版裁切，固定画框铺满）。
   与 Mosaic（接触印相）、Feature（图说列）、Cases（数据卡）刻意区分：非对称「杂志
   跨页」——主图竖排、右上标题正文、右下双小图与一条抽言，混合图大小的版面节奏。

   ── 可调参数（Props） ──────────────────────────────────────────────────────
   | prop      | 类型                          | 默认值 | 说明                              |
   | imgCount  | number (1–3)                  | 3      | 图片槽数量（1 主图 + 至多 2 小图）|
   | layout    | '图左文右'|'图右文左'         | 图左文右 | 左右布局                          |
   | showPull  | boolean                       | true   | 抽言条（装饰文案）                |
   | focus     | boolean                       | true   | 强调（主图描边 + 抽言上色）       |
   | body      | string[]                      | 见下   | 正文段落                          |
   | kicker/headline/headlineEN/pull/captions : 文案                            |
   | badge     | string                        | '03'   | 顶部编号徽标                      |
   | theme     | Partial<DeckTheme>            | —      | 设计令牌覆盖                      |
   ========================================================================== */
import { useDeckStyles, deckTheme, SlideShell } from './DeckKit.jsx';
import { FillSlot } from './ImageStrip.jsx';

/* ── 页面属性契约 · defaultProps ──────────────────────────────────────────
   本页全部可见文案 / 数据 / 图片槽默认值集中于此，直接编辑即可换内容；
   组件内部以 { ...defaultProps, ...props } 合并，外部传同名 props 逐项覆盖。 */
export const defaultProps = {
  imgCount: 3,
  layout: '图左文右',
  showPull: true,
  focus: true,
  badge: '03',
  kicker: 'FEATURE · 跨页报道',
  headline: '钱、算力与叙事的合流',
  headlineEN: 'Money, Compute & Narrative',
  body: [
      '2024 年，资本以前所未有的密度涌向少数能讲好 AGI 故事的团队 —— 单笔金额节节攀升，年末进入白热化。',
      '与此同时，算力与数据的中游率先兑现现金流，成为更稳的下注；垂直应用则在「能否拿到续约」中被重新定价。',
    ],
  pull: '在这一年，每一笔大额融资，都是一次对方向的押注。',
  captions: ['主图 / hero', '细节 / detail', '场景 / scene'],
};

function SlideZine(props){
  useDeckStyles(props.theme);
  const T = (deckTheme ? deckTheme(props.theme) : {});
  const ACC = T.accent || '#46e3c6';
  const BLUE = T.blue || '#4a86ff';

  const {
    imgCount, layout, showPull, focus, badge, kicker, headline, headlineEN,
    body, pull, captions,
  } = { ...defaultProps, ...props };

  const n = Math.max(1, Math.min(imgCount, 3));
  const imageFirst = layout !== '图右文左';

  return (
    <SlideShell orbs={[{ w:520, h:520, right:-160, top:-150,
        color:`radial-gradient(circle at 50% 50%, ${hexA(BLUE,.18)}, ${hexA(BLUE,0)} 70%)` }]}>
      <div
        data-dashi-theme09-zine-layout={imageFirst ? 'left' : 'right'}
        style={{flex:'1 1 0', minHeight:0, display:'flex', flexDirection:imageFirst?'row':'row-reverse', gap:44}}
      >
        {/* 左：竖长主图 */}
        <div
          className="dk-anim d1"
          data-dashi-theme09-zine-slot="0"
          data-dashi-theme09-zine-visible="true"
          style={{flex:'0.92 1 0', minWidth:0, position:'relative', borderRadius:'var(--dk-radius)', overflow:'hidden',
              boxShadow: focus?`0 28px 64px ${hexA(ACC,.24)}, 0 0 0 2px ${hexA(ACC,.7)}`:'0 24px 56px rgba(3,8,30,.5)'}}>
          <FillSlot idPrefix="zine" idx={0} placeholder={captions[0]} accent={ACC} theme={props.theme} />
          <span style={{position:'absolute', left:18, bottom:18, zIndex:3, fontFamily:'var(--font-mono)', fontSize:13, letterSpacing:'.1em',
              color:'#fff', background:'rgba(5,11,34,.5)', padding:'6px 12px', borderRadius:8, backdropFilter:'blur(4px)'}}>FIG.01</span>
        </div>

        {/* 右：标题 + 正文 + 小图 + 抽言 */}
        <div style={{flex:'1.05 1 0', minWidth:0, display:'flex', flexDirection:'column'}}>
          <div className="dk-anim" style={{display:'flex', alignItems:'center', gap:14, marginBottom:14}}>
            <span style={{fontFamily:'var(--font-display)', fontWeight:900, fontSize:'var(--type-sub)', color:ACC}}>{badge}</span>
            <span style={{fontFamily:'var(--font-mono)', fontSize:14, letterSpacing:'.2em', color:'var(--ink-dim)'}}>{kicker}</span>
          </div>
          <h2 className="dk-chrome dk-anim d1" style={{fontFamily:'var(--font-cn)', fontWeight:900, fontSize:74, lineHeight:1.02, letterSpacing:'.02em'}}>{headline}</h2>
          <div className="dk-anim d2" style={{fontFamily:'var(--font-display)', fontWeight:600, fontSize:'var(--type-small)', letterSpacing:'.06em', color:'var(--ink-dim)', marginTop:8}}>{headlineEN}</div>

          {/* 正文（首字下沉） */}
          <div className="dk-anim d2" style={{marginTop:20, columnGap:36, fontSize:'var(--type-body)', lineHeight:1.6, color:'var(--ink-dim)'}}>
            {body.map((p,i)=>(
              <p key={i} style={{margin:i?'12px 0 0':0, textWrap:'pretty'}}>
                {i===0 ? <span style={{float:'left', fontFamily:'var(--font-display)', fontWeight:900, fontSize:84, lineHeight:.82,
                    color:ACC, marginRight:12, marginTop:6}}>{p.slice(0,1)}</span> : null}
                {i===0 ? p.slice(1) : p}
              </p>
            ))}
          </div>

          {/* 右下：小图 + 抽言 */}
          <div style={{marginTop:'auto', paddingTop:22, display:'flex', gap:20, alignItems:'stretch'}}>
            {[1, 2].map((slotIdx)=>(
              <div
                key={slotIdx}
                className={'dk-anim d'+Math.min(slotIdx+2,6)}
                data-dashi-theme09-zine-slot={slotIdx}
                data-dashi-theme09-zine-visible={slotIdx < n ? 'true' : 'false'}
                style={{display:slotIdx < n?'block':'none', flex:'0 0 26%', position:'relative', minWidth:0, height:200,
                    borderRadius:16, overflow:'hidden', boxShadow:'0 18px 44px rgba(3,8,30,.45)'}}
              >
                <FillSlot idPrefix="zine" idx={slotIdx} placeholder={captions[slotIdx]||'图 / image'} accent={ACC} theme={props.theme} />
              </div>
            ))}
            {showPull && (
              <div className="dk-anim d4" style={{flex:'1 1 0', minWidth:0, display:'flex', alignItems:'center',
                    borderLeft:`4px solid ${focus?ACC:'rgba(255,255,255,.2)'}`, paddingLeft:22}}>
                <p style={{fontFamily:'var(--font-cn)', fontWeight:800, fontSize:32, lineHeight:1.35, textWrap:'pretty', margin:0,
                    color: focus?ACC:'#fff'}}>「{pull}」</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </SlideShell>
  );

  function hexA(hex, a){
    if(!hex || hex[0] !== '#') return hex;
    const x = hex.slice(1); const f = x.length===3 ? x.split('').map(c=>c+c).join('') : x;
    return `rgba(${parseInt(f.slice(0,2),16)},${parseInt(f.slice(2,4),16)},${parseInt(f.slice(4,6),16)},${a})`;
  }
}

export default SlideZine;

export const slideSpec = { defaults: defaultProps, slot:'zine', name:'杂志跨页 · Zine', controls:[
  { prop:'imgCount', type:'slider', label:'图片槽数量', default:3, min:1, max:3, step:1 },
  { prop:'layout', type:'radio', label:'左右布局', default:'图左文右', options:['图左文右','图右文左'] },
  { prop:'showPull', type:'toggle', label:'装饰文案', default:true, desc:'抽言条' },
  { prop:'focus', type:'focus', label:'重点信息 Focus', default:true },
]};
