import { useDeckStyles, deckTheme, deckLabel, SlideShell } from './DeckKit.jsx';
import { FillSlot } from './ImageStrip.jsx';
import UnicornBackground, { UNICORN_BACKGROUND_CONTROL, createUnicornSceneControl } from '../../../unicorn-background.jsx';
/* ============================================================================
   SlideCoverStory — 杂志封面（满幅主图 + 叠印刊头 / 封面线 / 竖排书脊）
   标准 ES Module。主图用 FillSlot 满版裁切铺满全屏；可选侧栏小图条。
   与 Immersive（底部玻璃浮层）、OverlayCards（多张裁切卡）刻意区分：本页是单张
   主视觉「封面」—— 顶部刊头条 + 左下封面线堆叠 + 竖排书脊编号 + 角标。

   ── 可调参数（Props） ──────────────────────────────────────────────────────
   | prop         | 类型                          | 默认值 | 说明                              |
   | imgCount     | number (1–4)                  | 3      | 图片槽数量（1=纯满幅；>1 加侧栏小图条）|
   | textPos      | 'left' | 'right'              | left   | 封面线所在侧                      |
   | showMasthead | boolean                       | true   | 顶部刊头条（装饰文案）            |
   | tagCount     | number (0–4)                  | 3      | 封面线标签数                      |
   | focus        | boolean                       | true   | 高亮主标题（强调色）              |
   | labelType    | 'number'|'symbol'|'keyword'   | number | 期号徽标样式                      |
   | masthead/issue/kicker/title/sub/tags/credit : 文案（见下）                  |
   | theme        | Partial<DeckTheme>            | —      | 设计令牌覆盖                      |
   ========================================================================== */
/* ── 页面属性契约 · defaultProps ──────────────────────────────────────────
   本页全部可见文案 / 数据 / 图片槽默认值集中于此，直接编辑即可换内容；
   组件内部以 { ...defaultProps, ...props } 合并，外部传同名 props 逐项覆盖。 */
export const defaultProps = {
  imgCount: 3,
  backgroundMode: 'unicorn',
  unicornScene: 'tech',
  textPos: 'left',
  showMasthead: true,
  tagCount: 3,
  focus: true,
  labelType: 'number',
  masthead: 'AI CAPITAL',
  issue: 'VOL.2024 · ANNUAL',
  kicker: '封面故事 · COVER STORY',
  title: ['资本', '巨浪'],
  sub: '970 亿美元如何重塑美国 AI 版图',
  tags: ['大模型', '算力基建', '垂直应用', '安全对齐'],
  credit: 'AInsight 研究院 · 2024 年度影像',
};

function SlideCoverStory(props){
  useDeckStyles(props.theme);
  const T = (deckTheme ? deckTheme(props.theme) : {});
  const ACC = T.accent || '#46e3c6';
  const navy = T.navy900 || '#050b22';

  const {
    imgCount, textPos, showMasthead, tagCount, focus, labelType, masthead,
    issue, kicker, title, sub, tags, credit, backgroundMode, unicornScene,
  } = { ...defaultProps, ...props };

  const useUnicorn = backgroundMode === 'unicorn';
  const insets = Math.max(0, Math.min(imgCount - 1, 3)); // 侧栏小图数量
  const tagN = Math.max(0, Math.min(tagCount, tags.length));
  const textSide = textPos === '右' || textPos === 'right' ? 'right' : 'left';
  const left = textSide === 'left';
  const lbl = deckLabel(labelType, 0, { keyword:'VOL', number:'01' });

  return (
    <SlideShell pad={false}>
      {/* 满幅主图 */}
      <div style={{position:'absolute', inset:0}}>
        {useUnicorn
          ? <UnicornBackground scene={unicornScene} accent={ACC} />
          : <FillSlot idPrefix="coverstory" idx={0} placeholder="封面主视觉 / cover image" accent={ACC} theme={props.theme} />}
      </div>
      {/* 压暗渐变（朝封面线一侧加深，保证文字可读） */}
      <div style={{position:'absolute', inset:0, pointerEvents:'none',
          background: left
            ? 'linear-gradient(105deg, rgba(3,7,24,.86) 0%, rgba(3,7,24,.5) 34%, rgba(3,7,24,.08) 60%, rgba(3,7,24,.42) 100%)'
            : 'linear-gradient(255deg, rgba(3,7,24,.86) 0%, rgba(3,7,24,.5) 34%, rgba(3,7,24,.08) 60%, rgba(3,7,24,.42) 100%)'}}>
      </div>

      {/* 顶部刊头条 */}
      {showMasthead && (
        <div className="dk-anim" style={{position:'absolute', top:0, left:0, right:0, zIndex:3,
            padding:'40px 90px 0', display:'flex', alignItems:'baseline', justifyContent:'space-between', gap:30}}>
          <div className="dk-chrome" style={{fontFamily:'var(--font-display)', fontWeight:900, fontSize:96, letterSpacing:'-.02em', lineHeight:1.04}}>{masthead}</div>
          <div style={{fontFamily:'var(--font-mono)', fontSize:18, letterSpacing:'.12em', color:'var(--ink-dim)', whiteSpace:'nowrap'}}>{issue}</div>
        </div>
      )}
      {showMasthead && (
        <div style={{position:'absolute', top:152, left:90, right:90, height:2, zIndex:3,
            background:`linear-gradient(90deg, ${ACC}, ${hexA(ACC,0)})`}}></div>
      )}

      {/* 竖排书脊编号 */}
      <div data-dashi-theme09-coverstory-spine={left ? 'right' : 'left'} style={{position:'absolute', top:0, bottom:0, [left?'right':'left']:34, zIndex:3,
          display:'flex', alignItems:'center'}}>
        <div style={{fontFamily:'var(--font-mono)', fontSize:17, letterSpacing:'.42em', color:'var(--ink-faint)',
            writingMode:'vertical-rl', textOrientation:'mixed'}}>
          {credit} · NO.{lbl}
        </div>
      </div>

      {/* 封面线堆叠 */}
      <div data-dashi-theme09-coverstory-copy={textSide} className="dk-anim d2" style={{position:'absolute', bottom:0, [left?'left':'right']:90, zIndex:3,
          maxWidth:'56%', textAlign: left?'left':'right', padding:'0 0 84px'}}>
        <div style={{fontFamily:'var(--font-mono)', fontSize:18, letterSpacing:'.2em', color:ACC, marginBottom:18}}>{kicker}</div>
        <h1 style={{fontFamily:'var(--font-cn)', fontWeight:900, fontSize:200, lineHeight:1.05, letterSpacing:'.01em', margin:0}}>
          {title.map((ln,i)=>(
            <span key={i} className=""
                  style={{display:'block', color: (focus && i===title.length-1)?ACC:'#ffffff',
                          textShadow:(focus && i===title.length-1)?`0 10px 40px ${hexA(ACC,.45)}`:'0 10px 40px rgba(2,6,22,.6)'}}>{ln}</span>
          ))}
        </h1>
        <p style={{fontFamily:'var(--font-cn)', fontWeight:500, fontSize:'var(--type-sub)', color:'rgba(255,255,255,.92)',
            marginTop:24, lineHeight:1.3, textWrap:'pretty'}}>{sub}</p>
        {tagN>0 && (
          <div style={{display:'flex', gap:12, flexWrap:'wrap', marginTop:26, justifyContent: left?'flex-start':'flex-end'}}>
            {tags.slice(0,tagN).map((t,i)=>(
              <span key={i} className="dk-glass" style={{padding:'9px 20px', borderRadius:999,
                  fontFamily:'var(--font-cn)', fontWeight:700, fontSize:'var(--type-tiny)', color:'#fff'}}>{t}</span>
            ))}
          </div>
        )}
      </div>

      {/* 侧栏小图条（imgCount>1 时） */}
      {insets>0 && (
        <div className="dk-anim d3" style={{position:'absolute', zIndex:3, top:'50%', transform:'translateY(-50%)',
            [left?'right':'left']:96, display:'flex', flexDirection:'column', gap:16}}>
          {Array.from({length:insets}).map((_,i)=>(
            <div key={i} style={{position:'relative', width:188, height:128, borderRadius:14, overflow:'hidden',
                boxShadow:'0 18px 44px rgba(3,8,30,.55), 0 0 0 1px rgba(255,255,255,.14)'}}>
              <FillSlot idPrefix="coverstory" idx={i+1} placeholder={'插图 / '+(i+1)} accent={ACC} radius={14} theme={props.theme} />
              <span style={{position:'absolute', top:8, left:8, zIndex:4, fontFamily:'var(--font-mono)', fontSize:12,
                  color:'#fff', background:'rgba(5,11,34,.6)', padding:'2px 8px', borderRadius:6, pointerEvents:'none'}}>0{i+2}</span>
            </div>
          ))}
        </div>
      )}
    </SlideShell>
  );

  function hexA(hex, a){
    if(!hex || hex[0] !== '#') return hex;
    const x = hex.slice(1); const f = x.length===3 ? x.split('').map(c=>c+c).join('') : x;
    return `rgba(${parseInt(f.slice(0,2),16)},${parseInt(f.slice(2,4),16)},${parseInt(f.slice(4,6),16)},${a})`;
  }
}

export default SlideCoverStory;

/* ── 模板参数 schema（自描述 · 迁移即带控件；Tweaks 由此自动生成） ── */
export const slideSpec = { defaults: defaultProps, slot:'coverstory', name:'杂志封面 · CoverStory', controls:[
  UNICORN_BACKGROUND_CONTROL,
  createUnicornSceneControl(defaultProps.unicornScene),
  { prop:'imgCount', type:'slider', label:'图片槽数量', default:3, min:1, max:4, step:1, desc:'1=纯满幅；>1 加侧栏小图' },
  { prop:'textPos', type:'radio', label:'文字位置', default:'左', options:['左','右'], map:(v)=> v==='右'?'right':'left' },
  { prop:'tagCount', type:'slider', label:'标签数量', default:3, min:0, max:4, step:1 },
  { prop:'showMasthead', type:'toggle', label:'装饰文案', default:true, desc:'顶部刊头条' },
  { prop:'labelType', type:'labelType', label:'标签类型', default:'数字' },
  { prop:'focus', type:'focus', label:'重点信息 Focus', default:true },
]};
