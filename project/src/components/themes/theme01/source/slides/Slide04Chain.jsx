// Slide04Chain.jsx — 产业链分层 / Industry-chain layers.
import React from 'react';
import { SlideFrame, SlideHead, MonoCaption, hexA } from './SlideKit.jsx';

export const defaultProps = {
  kicker: '# 横向透视',
  title: '产业链分层透视',
  en: 'Industry-Chain Layers',
  cn: '上游 — 中游 — 下游 的层级结构',
  layers: [
    { name: '上游 · 基础设施', en: 'UPSTREAM · INFRASTRUCTURE', segments: [
      { label: 'AI 芯片', items: ['Cerebras', 'Groq', 'SambaNova', 'Tenstorrent'] },
      { label: '算力云 / 数据', items: ['CoreWeave', 'Scale AI', 'Lambda', 'Together AI'] },
    ] },
    { name: '中游 · 模型层', en: 'MIDSTREAM · MODEL LAYER', segments: [
      { label: '通用大模型', items: ['OpenAI', 'Anthropic', 'xAI', 'SSI'] },
      { label: '开源 / 专用', items: ['Mistral', 'Cohere', 'Adept', 'Runway'] },
    ] },
    { name: '下游 · 应用层', en: 'DOWNSTREAM · APPLICATION', segments: [
      { label: '企业生产力', items: ['Glean', 'Databricks', 'Harvey', 'Writer'] },
      { label: '消费 / 搜索', items: ['Perplexity', 'Character AI', 'Suno', 'Midjourney'] },
      { label: '具身智能', items: ['Figure AI', 'Physical Intelligence', 'Skild AI', 'Covariant'] },
    ] },
  ],
  caption: '缩进层级可直接转换为树状图 / Treemap · 上游确定性最强，中游竞争最激烈，下游潜力最大',
  // tweakable
  palette: ['#5b8def', '#46b083', '#e0a23a'],
  groupCount: 3,
  itemsPerGroup: 4,
  showSubLabel: true,
  perspective: true,
  highlight: false,
  highlightIndex: 0,
  showCaption: true,
};

export const controls = [
  { key: 'palette', label: '分层配色', type: 'palette', default: ['#5b8def', '#46b083', '#e0a23a'],
    options: [
      ['#5b8def', '#46b083', '#e0a23a'], ['#7a5ae0', '#5b8def', '#46b083'],
      ['#e8503a', '#e0a23a', '#46b083'], ['#3a3a42', '#6b6b78', '#a0a0ad'],
    ], description: '各层级的配色方案。' },
  { key: 'groupCount', label: '层级数量', type: 'number', default: 3, min: 1, max: 3, step: 1, unit: ' 层',
    description: '展示的产业链层级数量。' },
  { key: 'itemsPerGroup', label: '每格公司数', type: 'number', default: 4, min: 1, max: 4, step: 1, unit: ' 个',
    description: '每个细分环节最多展示的公司数量。' },
  { key: 'showSubLabel', label: '英文标签', type: 'boolean', default: true,
    description: '是否显示各层级的英文副标题。' },
  { key: 'perspective', label: '等距视角', type: 'boolean', default: true,
    description: '是否对层级堆叠应用轻微的等距透视。' },
  { key: 'highlight', label: '重点强调', type: 'boolean', default: false,
    description: '是否高亮强调其中某一层。' },
  { key: 'highlightIndex', label: '强调第几层', type: 'number', default: 0, min: 0, max: 2, step: 1,
    description: '被强调的层级序号（从 0 开始）。' },
  { key: 'showCaption', label: '装饰文案', type: 'boolean', default: true,
    description: '是否显示底部说明文案。' },
];

export default function Slide04Chain(props) {
  const p = { ...defaultProps, ...props };
  const layers = p.layers.slice(0, Math.max(1, Math.min(3, p.groupCount)));

  return (
    <SlideFrame bg="a">
      <SlideHead kicker={p.kicker} tone="amber" title={p.title} en={p.en} cn={p.cn} />

      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{
          display: 'flex', flexDirection: 'column', gap: 22, width: '100%',
          transform: p.perspective ? 'perspective(2200px) rotateX(7deg)' : 'none',
          transformOrigin: 'center top',
        }}>
          {layers.map((layer, i) => {
            const color = p.palette[i % p.palette.length];
            const on = p.highlight && i === p.highlightIndex;
            const dim = p.highlight && !on;
            return (
              <div key={i} style={{
                display: 'flex', alignItems: 'stretch', borderRadius: 20, overflow: 'hidden', opacity: dim ? 0.55 : 1,
                background: `linear-gradient(120deg, ${hexA(color, 0.18)}, ${hexA(color, 0.06)})`,
                border: on ? `2px solid ${color}` : `1px solid ${hexA(color, 0.30)}`,
                boxShadow: `0 1px 0 rgba(255,255,255,.7) inset, 0 ${18 + i * 6}px ${40 + i * 8}px ${hexA(color, on ? 0.34 : 0.18)}`,
                backdropFilter: 'blur(18px)', transition: 'all .3s ease',
              }}>
                <div style={{
                  flex: '0 0 360px', padding: '26px 32px', display: 'flex', flexDirection: 'column',
                  justifyContent: 'center', background: `linear-gradient(150deg, ${color}, ${hexA(color, 0.82)})`, color: '#fff',
                }}>
                  <div style={{ fontSize: 38, fontWeight: 900, letterSpacing: '.01em' }}>{layer.name}</div>
                  {p.showSubLabel && (
                    <div style={{ marginTop: 8, fontFamily: 'Space Mono, monospace', fontSize: 24, letterSpacing: '.06em', opacity: 0.85 }}>{layer.en}</div>
                  )}
                </div>
                <div style={{ flex: 1, display: 'flex', alignItems: 'stretch' }}>
                  {layer.segments.map((seg, j) => (
                    <div key={j} style={{
                      flex: 1, padding: '24px 28px',
                      borderLeft: j === 0 ? 'none' : `1px dashed ${hexA(color, 0.35)}`,
                      display: 'flex', flexDirection: 'column', gap: 14,
                    }}>
                      <div style={{ fontSize: 27, fontWeight: 700, color: '#33333a' }}>{seg.label}</div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                        {seg.items.slice(0, p.itemsPerGroup).map((it, k) => (
                          <div key={k} style={{
                            padding: '7px 16px', borderRadius: 999, background: 'rgba(255,255,255,.72)',
                            border: `1px solid ${hexA(color, 0.4)}`, color: '#3a3a42', fontSize: 24,
                            fontWeight: 500, whiteSpace: 'nowrap', boxShadow: '0 2px 6px rgba(80,80,110,.08)',
                          }}>{it}</div>
                        ))}
                      </div>
                    </div>
                  ))}
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
