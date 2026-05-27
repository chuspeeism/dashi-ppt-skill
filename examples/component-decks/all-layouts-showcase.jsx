import React from 'react';
import { Chrome, SlideShell } from '../../src/components/shell/index.jsx';

export default {
  style: 'swiss',
  theme: process.env.GUIZANG_THEME || 'ikb',
  fontSet: process.env.GUIZANG_FONT || 'editorial',
  title: 'Layout Sandbox',
  slides: [
    <SlideShell key="sandbox" layout="SANDBOX" tone="light" animate="cascade" className="canvas-slide">
      <div className="canvas-card">
        <Chrome left="LAYOUT SANDBOX" right="NO REGISTERED LAYOUTS" variant="min" />
        <div style={{ marginTop: 'auto', marginBottom: '12vh', maxWidth: '58vw' }}>
          <div className="t-meta">EMPTY REGISTRY</div>
          <h1 className="h-xl-zh" style={{ marginTop: '2vh' }}>旧布局已清空</h1>
          <p className="lead" style={{ marginTop: '3vh' }}>从这里开始登记新的布局组件。</p>
        </div>
      </div>
    </SlideShell>,
  ],
};
