// SlidePhaseRoadmap.jsx — 阶段性路线图 / phased strategy roadmap.
// Migration-safe: default export + defaultProps + controls; props-only; aip- scope.
// Visual: a left→right "track" of phase stations. Each phase rides a glowing
// rail with a big period stamp, a glass body of action points, and a sticker
// verdict chip. One phase can be lifted into a fluorescent "now / focus" state.
import React from 'react';
import { SlideFrame, SlideHead, MonoCaption, hexA } from './SlideKit.jsx';

export const defaultProps = {
  kicker: '# 投资展望',
  title: '阶段性策略 · 三步走路线图',
  en: 'Phased Strategy Roadmap',
  cn: '从观察到优选，再到逆周期布局',
  phases: [
    {
      period: '2025 — 2026', step: 'STEP 01', heading: '观察 · IPO 体检',
      points: ['持续跟踪头部公司 IPO 表现', '若 Anthropic / OpenAI 破发，警惕全行业估值回调'],
      verdict: '保持观望', color: '#5b8def',
    },
    {
      period: '2026 — 2027', step: 'STEP 02', heading: '优选 · 看收入兑现',
      points: ['关注垂直应用的收入增长曲线', '优选 ARR ≥ 1 亿美元、续约率 > 120% 的标的'],
      verdict: '精选加仓', color: '#46b083',
    },
    {
      period: '2027 年后', step: 'STEP 03', heading: '布局 · 洗牌期抄底',
      points: ['若 AGI 突破未兑现，行业进入洗牌期', '逆周期抄底被低估的优质技术资产'],
      verdict: '逆周期布局', color: '#7a5ae0',
    },
    {
      period: '退出窗口', step: 'STEP 04', heading: '退出 · 政策定价',
      points: ['跟踪监管框架与并购窗口变化', '在流动性改善时分批兑现头部仓位'],
      verdict: '动态兑现', color: '#e0a23a',
    },
  ],
  caption: '路线图 · 不同阶段，资本动作各不相同',
  // tweakable
  itemCount: 3,
  highlight: true,
  highlightIndex: 1,
  accentColor: '#46b083',
  showRail: true,
  showVerdict: true,
  showCaption: true,
};

export const controls = [
  { key: 'itemCount', label: '阶段数量', type: 'number', default: 3, min: 2, max: 4, step: 1, unit: ' 段',
    description: '路线图展示的阶段数量。' },
  { key: 'highlight', label: '重点强调', type: 'boolean', default: true,
    description: '是否把其中一个阶段渲染成荧光「当前焦点」款。' },
  { key: 'highlightIndex', label: '强调第几段', type: 'number', default: 1, min: 0, max: 3, step: 1,
    description: '被强调的阶段序号（从 0 开始）。' },
  { key: 'accentColor', label: '强调色', type: 'color', default: '#46b083',
    options: ['#46b083', '#5b8def', '#e0a23a', '#e8503a', '#7a5ae0'],
    description: '被强调阶段与轨道高亮的颜色。' },
  { key: 'showRail', label: '贯穿轨道', type: 'boolean', default: true,
    description: '是否显示贯穿各阶段的轨道与站点圆点。' },
  { key: 'showVerdict', label: '结论贴纸', type: 'boolean', default: true,
    description: '是否显示每个阶段底部的动作结论贴纸。' },
  { key: 'showCaption', label: '装饰文案', type: 'boolean', default: true,
    description: '底部 */ … /* 说明文案的显示。' },
];

function readableOn(hex) {
  const h = String(hex).replace('#', '');
  const x = h.length === 3 ? h.replace(/./g, (c) => c + c) : h;
  const n = parseInt(x, 16);
  const lum = (0.299 * ((n >> 16) & 255) + 0.587 * ((n >> 8) & 255) + 0.114 * (n & 255)) / 255;
  return lum > 0.62 ? '#23232a' : '#ffffff';
}

export default function SlidePhaseRoadmap(props) {
  const p = { ...defaultProps, ...props };
  const ac = p.accentColor;
  const phases = p.phases.slice(0, Math.max(2, Math.min(4, p.itemCount)));
  const compact = phases.length >= 4;

  return (
    <SlideFrame bg="b">
      <SlideHead kicker={p.kicker} tone="green" title={p.title} en={p.en} cn={p.cn} />

      <div style={{ flex: 1, display: 'flex', alignItems: 'center', minHeight: 0, marginTop: 8 }}>
        <div style={{ position: 'relative', width: '100%', display: 'flex', gap: compact ? 20 : 30, alignItems: 'stretch' }}>
          {/* glowing rail behind the stations */}
          {p.showRail && (
            <div style={{ position: 'absolute', left: 12, right: 12, top: 38, height: 8, borderRadius: 4,
              background: `linear-gradient(90deg, ${hexA(phases[0].color, 0.35)}, ${hexA(ac, 0.55)}, ${hexA(phases[phases.length - 1].color, 0.35)})`,
              boxShadow: `0 8px 22px ${hexA(ac, 0.25)}`, zIndex: 0 }} />
          )}

          {phases.map((ph, i) => {
            const on = p.highlight && i === p.highlightIndex;
            const c = on ? ac : ph.color;
            const vfg = readableOn(c);
            return (
              <div key={i} style={{ flex: 1, position: 'relative', zIndex: 1, display: 'flex',
                flexDirection: 'column', alignItems: 'center' }}>

                {/* station dot on the rail */}
                {p.showRail && (
                  <span style={{ width: on ? 34 : 26, height: on ? 34 : 26, borderRadius: '50%',
                    background: c, border: '5px solid #fff', boxShadow: `0 8px 20px ${hexA(c, 0.5)}`,
                    marginBottom: 26 }} />
                )}

                {/* period stamp */}
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 12, padding: '10px 22px',
                  borderRadius: 13, background: '#23232a', color: '#fff', fontFamily: "'Space Mono', monospace",
                  fontSize: 27, fontWeight: 700, letterSpacing: '.02em', whiteSpace: 'nowrap',
                  boxShadow: '0 14px 30px rgba(20,20,28,.28)', transform: `rotate(${on ? 0 : (i % 2 ? 1.4 : -1.4)}deg)` }}>
                  <span style={{ width: 12, height: 12, borderRadius: 4, background: c }} />{ph.period}
                </div>

                {/* body card */}
                <div style={{ marginTop: compact ? 18 : 22, width: '100%', flex: 1, padding: on ? (compact ? '24px 22px' : '30px 30px') : (compact ? '22px 20px' : '28px 28px'),
                  borderRadius: 24, display: 'flex', flexDirection: 'column', gap: compact ? 12 : 16,
                  background: on ? `linear-gradient(160deg, ${hexA(ac, 0.16)}, ${hexA(ac, 0.05)})` : 'rgba(255,255,255,.55)',
                  border: `1px solid ${on ? hexA(ac, 0.5) : 'rgba(255,255,255,.8)'}`,
                  backdropFilter: 'blur(22px)', WebkitBackdropFilter: 'blur(22px)',
                  boxShadow: on ? `0 28px 60px ${hexA(ac, 0.26)}, 0 1px 0 rgba(255,255,255,.7) inset`
                    : '0 1px 0 rgba(255,255,255,.7) inset, 0 20px 46px rgba(70,72,100,.13)' }}>

                  <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 24, letterSpacing: '.16em',
                    fontWeight: 700, color: hexA(c, 0.95) }}>{ph.step}</div>
                  <div style={{ fontSize: compact ? 32 : 38, fontWeight: 900, color: 'var(--aip-ink)', lineHeight: 1.1, letterSpacing: '.01em' }}>{ph.heading}</div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: compact ? 9 : 12, marginTop: 2 }}>
                    {ph.points.map((pt, j) => (
                      <div key={j} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                        <span style={{ flex: '0 0 auto', width: 11, height: 11, borderRadius: 3, marginTop: 12, background: c }} />
                        <span style={{ fontSize: compact ? 23 : 26, lineHeight: 1.45, color: 'var(--aip-ink-2)', fontWeight: 500, textWrap: 'pretty' }}>{pt}</span>
                      </div>
                    ))}
                  </div>

                  {p.showVerdict && (
                    <div style={{ marginTop: 'auto', paddingTop: 6 }}>
                      <span style={{ display: 'inline-block', padding: '10px 22px', borderRadius: 13,
                        fontSize: 27, fontWeight: 900, letterSpacing: '.02em',
                        background: c, color: vfg, transform: `rotate(${on ? -2 : (i % 2 ? 1.5 : -1.5)}deg)`,
                        boxShadow: `0 16px 34px ${hexA(c, 0.38)}` }}>{ph.verdict}</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <MonoCaption show={p.showCaption}>{p.caption}</MonoCaption>
    </SlideFrame>
  );
}
