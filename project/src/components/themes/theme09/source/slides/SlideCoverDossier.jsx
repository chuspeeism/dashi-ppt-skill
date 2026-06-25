import { useDeckStyles, deckTheme } from './DeckKit.jsx';
/* ============================================================================
   SlideCoverDossier — 封面 D · 档案/索引型（Research Dossier）
   独立组件：仅靠 props 控制内容与样式；render 时自注入 DeckKit 基座样式。
   以「技术档案封面」为构图主装置：贯通内框 + 四角定位标记 + 顶部密级条带 →
   左侧巨幅标题与年份 → 右侧等宽 key/value 档案字段栅格 → 底部条形码 + 文号 + 钢印章。

   ── 区别于既有封面 ──────────────────────────────────────────────────────
   SlideCover（签名社论）、Mast（刊头排版）、Numeral（居中巨号）、Diagonal（斜切目录）→
   本页是「机要档案／卷宗」气质：框线 + 定位标 + 字段台账 + 条形码 + 印章，强档案感。

   ── 可调参数（Props） ──────────────────────────────────────────────────────
   | prop        | 类型           | 默认 | 说明                              |
   | fieldCount  | number (2–6)   | 6    | 档案字段数（截取 fields）         |
   | showFrame   | boolean        | true | 内框 + 四角定位标（装饰）         |
   | showBarcode | boolean        | true | 底部条形码（装饰）                |
   | showStamp   | boolean        | true | 右下钢印章（装饰）                |
   | focus       | boolean        | true | 高亮强调                          |
   | focusIndex  | number         | 0    | 高亮第几条字段                    |
   | classification/docNo/year/titleLines/fields/stamp/code | … | — | 文案 |
   ========================================================================== */
/* ── 页面属性契约 · defaultProps ──────────────────────────────────────────
   本页全部可见文案 / 数据 / 图片槽默认值集中于此，直接编辑即可换内容；
   组件内部以 { ...defaultProps, ...props } 合并，外部传同名 props 逐项覆盖。 */
export const defaultProps = {
  classification: 'RESEARCH DOSSIER · 投资研究卷宗',
  docNo: 'DOC · AICL-2024-001',
  year: '2024',
  titleLines: ['美国大额融资', 'AI 公司调研报告'],
  fields: [
      { k:'CATEGORY 类别', v:'一级市场 · 股权融资' },
      { k:'THRESHOLD 口径', v:'单笔 ≥ 1 亿美元' },
      { k:'PERIOD 区间', v:'2024.01 – 2024.12' },
      { k:'SAMPLE 样本', v:'120+ 融资事件' },
      { k:'METHOD 方法', v:'横纵分析法' },
      { k:'STATUS 状态', v:'已编制 · 待评审' },
    ],
  fieldCount: 6,
  showFrame: true,
  showBarcode: true,
  showStamp: true,
  showChip: true,
  code: 'AICL · 2024 · CONFIDENTIAL · VOL.01',
  stamp: 'VERIFIED',
  focus: true,
  focusIndex: 0,
};

function SlideCoverDossier(props){
  useDeckStyles(props.theme);
  const T = (deckTheme ? deckTheme(props.theme) : {});
  const ACC = T.accent || '#46e3c6';
  const BLUE = T.blue || '#4a86ff';

  const {
    classification, docNo, year, titleLines, fields, fieldCount, showFrame,
    showBarcode, showStamp, showChip, code, stamp, focus, focusIndex,
  } = { ...defaultProps, ...props };

  const items = fields.slice(0, Math.max(2, Math.min(fieldCount, fields.length)));
  const fIdx = Math.max(0, Math.min(focusIndex, items.length - 1));
  // 确定性条形码宽度
  const bars = Array.from({length:64}, (_,i)=> 2 + ((i*37+11)%5));

  return (
    <div style={{position:'relative', width:'100%', height:'100%', overflow:'hidden'}}>
      <div className="dk-orb" style={{width:520, height:520, right:-140, bottom:-160, background:`radial-gradient(circle at 50% 50%, ${hexA(BLUE,.4)}, ${hexA(BLUE,0)} 70%)`}}></div>
      {/* 质感玻璃小方块（取自原封面） */}
      {showChip && <>
        <div className="dk-anim d3" style={{position:'absolute', width:92, height:92, right:60, top:'46%', marginTop:-46, zIndex:1}}>
          <div className="dk-glass-chip" style={{width:'100%', height:'100%', transform:'rotate(18deg)'}}></div>
        </div>
        <div className="dk-anim d4" style={{position:'absolute', width:54, height:54, left:62, bottom:'30%', zIndex:1}}>
          <div className="dk-glass-chip" style={{width:'100%', height:'100%', transform:'rotate(-12deg)'}}></div>
        </div>
      </>}

      {/* 内框 + 四角定位标 */}
      {showFrame && (
        <div className="dk-anim" style={{position:'absolute', inset:'56px', border:`1px solid ${hexA('#fff',.22)}`, pointerEvents:'none'}}>
          {[['-1px','-1px','none','none','RT'],['-1px','','none','none','RB'],['','','none','none','LT'],['','-1px','none','none','LB']].map((c,i)=>{
            const pos = [{top:-1,left:-1,borderRight:'none',borderBottom:'none'},{top:-1,right:-1,borderLeft:'none',borderBottom:'none'},{bottom:-1,left:-1,borderRight:'none',borderTop:'none'},{bottom:-1,right:-1,borderLeft:'none',borderTop:'none'}][i];
            return <span key={i} style={{position:'absolute', width:26, height:26, border:`2px solid ${ACC}`, ...pos}}></span>;
          })}
        </div>
      )}

      <div style={{position:'absolute', inset:0, padding:'118px 132px', zIndex:2, display:'flex', flexDirection:'column'}}>
        {/* 密级条带 */}
        <div className="dk-anim" style={{display:'flex', justifyContent:'space-between', alignItems:'center',
              borderBottom:`1px solid ${hexA('#fff',.18)}`, paddingBottom:20}}>
          <div style={{display:'flex', alignItems:'center', gap:14}}>
            <span style={{width:11, height:11, background:ACC, boxShadow:`0 0 12px ${hexA(ACC,.8)}`}}></span>
            <span style={{fontFamily:'var(--font-mono)', fontSize:'var(--type-tiny)', letterSpacing:'.26em', color:'var(--ink-dim)', textTransform:'uppercase'}}>{classification}</span>
          </div>
          <span style={{fontFamily:'var(--font-mono)', fontSize:16, letterSpacing:'.18em', color:'var(--ink-faint)'}}>{docNo}</span>
        </div>

        {/* 主体：左标题 / 右字段 */}
        <div style={{flex:'1 1 0', minHeight:0, display:'flex', alignItems:'center', gap:80, paddingTop:30}}>
          {/* 左标题 */}
          <div style={{flex:'0 0 50%'}}>
            <div style={{position:'relative', display:'inline-block'}}>
              <div className="dk-anim d2" style={{fontFamily:'var(--font-display)', fontWeight:900, fontSize:112,
                  letterSpacing:'.02em', color: focus?ACC:'#fff', lineHeight:.9,
                  textShadow: focus?`0 0 50px ${hexA(ACC,.35)}`:'none'}}>{year}</div>
              {focus && <SelBox color={ACC} inset="-16px -16px" size={20} />}
            </div>
            <h1 className="dk-chrome dk-anim d3" style={{fontFamily:'var(--font-cn)', fontWeight:900,
                fontSize:96, lineHeight:1.04, letterSpacing:'.01em', margin:'22px 0 0'}}>
              {titleLines.map((t,i)=><div key={i}>{t}</div>)}
            </h1>
          </div>

          {/* 右字段栅格 */}
          <div style={{flex:1, display:'flex', flexDirection:'column', gap:0, borderLeft:`1px solid ${hexA('#fff',.16)}`, paddingLeft:56}}>
            {items.map((m,i)=>{
              const hot = focus && i===fIdx;
              return (
                <div key={i} className={`dk-anim d${Math.min(2+i,6)}`} style={{display:'flex', justifyContent:'space-between', alignItems:'baseline',
                      gap:30, padding:'18px 0', borderBottom:`1px dashed ${hexA('#fff',.14)}`}}>
                  <span style={{fontFamily:'var(--font-mono)', fontSize:15, letterSpacing:'.10em', color: hot?ACC:'var(--ink-faint)', textTransform:'uppercase', whiteSpace:'nowrap'}}>{m.k}</span>
                  <span style={{fontFamily:'var(--font-cn)', fontWeight:hot?800:600, fontSize:'var(--type-small)', color: hot?'#fff':'rgba(255,255,255,.84)', textAlign:'right'}}>{m.v}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* 底部：条形码 + 文号 + 印章 */}
        <div className="dk-anim d5" style={{display:'flex', justifyContent:'space-between', alignItems:'flex-end',
              borderTop:`1px solid ${hexA('#fff',.18)}`, paddingTop:22}}>
          <div>
            {showBarcode && (
              <div style={{display:'flex', alignItems:'flex-end', gap:2, height:48, marginBottom:10}}>
                {bars.map((w,i)=><span key={i} style={{width:w, height: i%7===0?48:36, background: i%9===0?ACC:hexA('#fff',.78)}}></span>)}
              </div>
            )}
            <span style={{fontFamily:'var(--font-mono)', fontSize:14, letterSpacing:'.22em', color:'var(--ink-faint)'}}>{code}</span>
          </div>
          {showStamp && (
            <div style={{display:'inline-flex', alignItems:'center', justifyContent:'center', padding:'12px 28px',
                border:`2px solid ${hexA(ACC,.7)}`, borderRadius:6, transform:'rotate(-7deg)',
                fontFamily:'var(--font-display)', fontWeight:900, fontSize:34, letterSpacing:'.2em', color:ACC,
                boxShadow:`0 0 24px ${hexA(ACC,.2)}, inset 0 0 16px ${hexA(ACC,.12)}`, textTransform:'uppercase'}}>{stamp}</div>
          )}
        </div>
      </div>
    </div>
  );

  function hexA(hex, a){
    if(!hex || hex[0] !== '#') return hex;
    const x = hex.slice(1); const f = x.length===3 ? x.split('').map(c=>c+c).join('') : x;
    return `rgba(${parseInt(f.slice(0,2),16)},${parseInt(f.slice(2,4),16)},${parseInt(f.slice(4,6),16)},${a})`;
  }
}

export default SlideCoverDossier;

/* 角标选择框（取自原封面 SelectionBox：mint 四角刻线 + 细边框） */
function SelBox({ color = '#46e3c6', inset = '-14px -12px', size = 18 }){
  const tick = (s) => <span style={{position:'absolute', width:size, height:size, border:`3px solid ${color}`, ...s}}></span>;
  return (
    <span style={{position:'absolute', inset, border:`2px solid ${color}`, pointerEvents:'none'}}>
      {tick({top:-9, left:-9, borderRight:'none', borderBottom:'none'})}
      {tick({top:-9, right:-9, borderLeft:'none', borderBottom:'none'})}
      {tick({bottom:-9, left:-9, borderRight:'none', borderTop:'none'})}
      {tick({bottom:-9, right:-9, borderLeft:'none', borderTop:'none'})}
    </span>
  );
}

/* ── 模板参数 schema（自描述 · 迁移即带控件；Tweaks 由此自动生成） ── */
export const slideSpec = { defaults: defaultProps, slot:'coverdossier', name:'封面D · 档案卷宗', controls:[
  { prop:'fieldCount', type:'slider', label:'档案字段数量', default:6, min:2, max:6, step:1 },
  { prop:'showFrame', type:'toggle', label:'内框定位标', default:true, desc:'装饰' },
  { prop:'showBarcode', type:'toggle', label:'条形码', default:true, desc:'装饰' },
  { prop:'showStamp', type:'toggle', label:'钢印章', default:true, desc:'装饰' },
  { prop:'showChip', type:'toggle', label:'质感方块', default:true, desc:'玻璃芯片装饰' },
  { prop:'focus', type:'focus', label:'重点信息 Focus', default:true },
  { prop:'focusIndex', type:'slider', label:'焦点序号', default:0, min:0, max:(p)=>Math.max(0,p.fieldCount-1), maxFromKey:'fieldCount', maxFromKeyOffset:-1, displayOffset:1, step:1, showIf:(p)=>p.focus },
]};
