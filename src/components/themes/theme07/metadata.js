export const theme = {
  "key": "theme07",
  "displayName": "冷白调研风",
  "label": "冷白调研风",
  "name": "冷白调研风",
  "scenario": "调研报告、白皮书、竞品分析、学术/政策型表达",
  "audience": "研究机构、咨询团队、政府/高校/智库、B2B 团队",
  "mode": "replace"
};
export const pages = [
  {
    "key": "theme07_page001",
    "themeKey": "theme07",
    "pageNumber": 1,
    "layout": "THEME07-001",
    "slot": "cover-lean-page",
    "label": "01 封面 01 · 精益智造",
    "bgClass": "",
    "controls": [
      {
        "key": "showSweep",
        "label": "光晕扫光",
        "type": "toggle",
        "default": true,
        "desc": "右上角放射光晕与透镜光斑装饰的显隐。",
        "publicKey": "showSweep",
        "publicLabel": "光晕扫光",
        "description": "右上角放射光晕与透镜光斑装饰的显隐。"
      },
      {
        "key": "showTags",
        "label": "关键词标签",
        "type": "toggle",
        "default": true,
        "desc": "底部关键词标签行（降本 / 提效 …）的显隐。",
        "publicKey": "showTags",
        "publicLabel": "关键词标签",
        "description": "底部关键词标签行（降本 / 提效 …）的显隐。"
      },
      {
        "key": "showBars",
        "label": "条码图形",
        "type": "toggle",
        "default": true,
        "desc": "底部绿 / 琥珀 / 红条码图形的显隐。",
        "publicKey": "showBars",
        "publicLabel": "条码图形",
        "description": "底部绿 / 琥珀 / 红条码图形的显隐。"
      },
      {
        "key": "accentColor",
        "label": "主题色",
        "type": "color",
        "default": "#8FD400",
        "options": [
          "#8FD400",
          "#23C76A",
          "#2F7BFF",
          "#F2A93B",
          "#0D100A"
        ],
        "desc": "品牌强调色（作用于 Logo、条码与高亮）。",
        "publicKey": "accentColor",
        "publicLabel": "主题色",
        "description": "品牌强调色（作用于 Logo、条码与高亮）。"
      }
    ],
    "defaultProps": {
      "logo": "智 造 集 团",
      "phase": "实施方案 · IMPLEMENTATION",
      "kicker": "SMART · MANUFACTURING",
      "titleL1": "精益智造",
      "titleL2": "提质增效",
      "year": "2026",
      "sub": "生产基地智能化改造实施方案",
      "tags": [
        "降本",
        "提效",
        "革新",
        "突围"
      ],
      "showSweep": true,
      "showBars": true,
      "showTags": true,
      "accentColor": "#8FD400"
    }
  },
  {
    "key": "theme07_page002",
    "themeKey": "theme07",
    "pageNumber": 2,
    "layout": "THEME07-002",
    "slot": "cover-supply-chain-page",
    "label": "02 封面 03 · 链通全国",
    "bgClass": "",
    "controls": [
      {
        "key": "showTimeline",
        "label": "年份时间轴",
        "type": "toggle",
        "default": true,
        "desc": "正文下方 2026—2028 三年时间轴的显隐。",
        "publicKey": "showTimeline",
        "publicLabel": "年份时间轴",
        "description": "正文下方 2026—2028 三年时间轴的显隐。"
      },
      {
        "key": "showLenses",
        "label": "透镜光斑",
        "type": "toggle",
        "default": true,
        "desc": "右侧绿色面板上的透镜光斑装饰显隐。",
        "publicKey": "showLenses",
        "publicLabel": "透镜光斑",
        "description": "右侧绿色面板上的透镜光斑装饰显隐。"
      },
      {
        "key": "accentColor",
        "label": "主题色",
        "type": "color",
        "default": "#8FD400",
        "options": [
          "#8FD400",
          "#23C76A",
          "#2F7BFF",
          "#F2A93B",
          "#0D100A"
        ],
        "desc": "品牌强调色（作用于结语短条与高亮）。",
        "publicKey": "accentColor",
        "publicLabel": "主题色",
        "description": "品牌强调色（作用于结语短条与高亮）。"
      }
    ],
    "defaultProps": {
      "phaseLeft": "Supply Chain Strategy",
      "phaseRight": "2026—2028",
      "kicker": "THREE-YEAR · STRATEGY",
      "titleL1": "链通全国",
      "titleL2": "高效履约",
      "subPre": "集团供应链体系三年（",
      "years": "2026-2028",
      "subPost": "）发展战略",
      "summary": "打通物流脉络，构筑产业护城河",
      "logo": "集 团 供 应 链",
      "photoLabel": "[ 物流网络 / 配送图景 ]",
      "timeline": [
        "2026",
        "2027",
        "2028"
      ],
      "showTimeline": true,
      "showLenses": true,
      "accentColor": "#8FD400",
      "renderSlot": null
    }
  },
  {
    "key": "theme07_page003",
    "themeKey": "theme07",
    "pageNumber": 3,
    "layout": "THEME07-003",
    "slot": "cover-retail-trend-page",
    "label": "03 封面 04 · 把握趋势",
    "bgClass": "",
    "controls": [
      {
        "key": "showCrumbs",
        "label": "面包屑标签",
        "type": "toggle",
        "default": true,
        "desc": "标题上方 RETAIL · OPERATION · GROWTH 面包屑显隐。",
        "publicKey": "showCrumbs",
        "publicLabel": "面包屑标签",
        "description": "标题上方 RETAIL · OPERATION · GROWTH 面包屑显隐。"
      },
      {
        "key": "showSlogan",
        "label": "口号胶囊",
        "type": "toggle",
        "default": true,
        "desc": "深色口号胶囊条的显隐。",
        "publicKey": "showSlogan",
        "publicLabel": "口号胶囊",
        "description": "深色口号胶囊条的显隐。"
      },
      {
        "key": "showBase",
        "label": "底部弧形",
        "type": "toggle",
        "default": true,
        "desc": "底部绿色弧形台座（含透镜与条码）的显隐。",
        "publicKey": "showBase",
        "publicLabel": "底部弧形",
        "description": "底部绿色弧形台座（含透镜与条码）的显隐。"
      },
      {
        "key": "accentColor",
        "label": "主题色",
        "type": "color",
        "default": "#8FD400",
        "options": [
          "#8FD400",
          "#23C76A",
          "#2F7BFF",
          "#F2A93B",
          "#0D100A"
        ],
        "desc": "品牌强调色（作用于分隔点与底部台座）。",
        "publicKey": "accentColor",
        "publicLabel": "主题色",
        "description": "品牌强调色（作用于分隔点与底部台座）。"
      }
    ],
    "defaultProps": {
      "logo": "零 售 运 营 学 院",
      "phase": "实战培训 · TRAINING",
      "crumbs": [
        "RETAIL",
        "OPERATION",
        "GROWTH"
      ],
      "titleL1": "把握消费趋势",
      "titleL2": "激活终端潜力",
      "sub": "全国零售门店运营管理暨营销实战培训",
      "slogan": "用心服务客户，实干创造业绩",
      "showCrumbs": true,
      "showSlogan": true,
      "showBase": true,
      "accentColor": "#8FD400"
    }
  },
  {
    "key": "theme07_page004",
    "themeKey": "theme07",
    "pageNumber": 4,
    "layout": "THEME07-004",
    "slot": "cover-supply-strategy-page",
    "label": "04 封面 07 · 供应链战略",
    "bgClass": "",
    "controls": [
      {
        "key": "showNetwork",
        "label": "关系网络图",
        "type": "toggle",
        "default": true,
        "desc": "右侧关系节点网络 SVG 装饰的显隐。",
        "publicKey": "showNetwork",
        "publicLabel": "关系网络图",
        "description": "右侧关系节点网络 SVG 装饰的显隐。"
      },
      {
        "key": "showFrame",
        "label": "内描边框",
        "type": "toggle",
        "default": true,
        "desc": "高级感内描边框的显隐。",
        "publicKey": "showFrame",
        "publicLabel": "内描边框",
        "description": "高级感内描边框的显隐。"
      },
      {
        "key": "accentColor",
        "label": "主题色",
        "type": "color",
        "default": "#8FE327",
        "options": [
          "#8FE327",
          "#23C76A",
          "#2F7BFF",
          "#F5A623",
          "#FFFFFF"
        ],
        "desc": "品牌强调色（作用于网络节点、高亮词与短条）。",
        "publicKey": "accentColor",
        "publicLabel": "主题色",
        "description": "品牌强调色（作用于网络节点、高亮词与短条）。"
      }
    ],
    "defaultProps": {
      "markCn": "链通集团",
      "markEn": "LIANTONG GROUP",
      "pageno": "03 / 04",
      "pill": "集团供应链体系 · 三年发展战略",
      "eyebrow": "2026 – 2028 Supply Chain Strategy",
      "titleL1": "链通全国",
      "titleL2": "高效履约",
      "summary": "打通物流脉络，构筑产业护城河",
      "footEn": "3-Year Roadmap",
      "showNetwork": true,
      "showFrame": true,
      "accentColor": "#8FE327"
    }
  },
  {
    "key": "theme07_page005",
    "themeKey": "theme07",
    "pageNumber": 5,
    "layout": "THEME07-005",
    "slot": "cover-page",
    "label": "09 01",
    "bgClass": "",
    "controls": [
      {
        "key": "backgroundVariant",
        "label": "背景风格",
        "type": "radio",
        "default": "gradient",
        "options": [
          {
            "value": "gradient",
            "label": "光晕"
          },
          {
            "value": "solid",
            "label": "纯色"
          },
          {
            "value": "dark",
            "label": "深色"
          }
        ],
        "desc": "封面底色与氛围：浅色 + 渐变光晕 / 纯净浅色 / 深色反白。",
        "publicKey": "backgroundVariant",
        "publicLabel": "背景风格",
        "description": "封面底色与氛围：浅色 + 渐变光晕 / 纯净浅色 / 深色反白。"
      },
      {
        "key": "heroMotif",
        "label": "主视觉",
        "type": "radio",
        "default": "both",
        "options": [
          {
            "value": "lens",
            "label": "透镜"
          },
          {
            "value": "number",
            "label": "数字"
          },
          {
            "value": "both",
            "label": "组合"
          }
        ],
        "desc": "右侧主视觉：品牌透镜光斑 / 大号焦点数字 / 两者组合。",
        "publicKey": "heroMotif",
        "publicLabel": "主视觉",
        "description": "右侧主视觉：品牌透镜光斑 / 大号焦点数字 / 两者组合。"
      },
      {
        "key": "numberSlant",
        "label": "数字倾斜",
        "type": "toggle",
        "default": true,
        "desc": "大号数字采用品牌标志性的倾斜处理。",
        "publicKey": "numberSlant",
        "publicLabel": "数字倾斜",
        "description": "大号数字采用品牌标志性的倾斜处理。"
      },
      {
        "key": "showDecorations",
        "label": "装饰元素",
        "type": "toggle",
        "default": true,
        "desc": "顶部标签、底部热力条与角落光晕等装饰细节的显隐。",
        "publicKey": "showDecorations",
        "publicLabel": "装饰元素",
        "description": "顶部标签、底部热力条与角落光晕等装饰细节的显隐。"
      },
      {
        "key": "accentColor",
        "label": "主题色",
        "type": "color",
        "default": "#86D62B",
        "options": [
          "#86D62B",
          "#23C76A",
          "#2F7BFF",
          "#F2A93B",
          "#0E110B"
        ],
        "desc": "品牌强调色，作用于渐变、透镜、数字与高亮。",
        "publicKey": "accentColor",
        "publicLabel": "主题色",
        "description": "品牌强调色，作用于渐变、透镜、数字与高亮。"
      }
    ],
    "defaultProps": {
      "eyebrow": "AI CAPITAL LAB · 2024",
      "reportTag": "2024 · 调研报告",
      "titleL1": "美国大额融资",
      "titleL2": "AI 公司调研报告",
      "sub": "数据口径：2024 全年 · 单笔 ≥ 1 亿美元",
      "thesis": "在资本与算力的浪潮里，每一笔融资都是一次方向的押注。",
      "closing": "从资本流向，看 AI 产业下一阶段的真实重心。",
      "featureNumber": "2024",
      "featureLabel": "DATA YEAR",
      "specs": [
        [
          "年份",
          "2024"
        ],
        [
          "口径",
          "≥ 1 亿美元"
        ],
        [
          "日期",
          "2026.06"
        ],
        [
          "主题",
          "美国 AI 大额融资"
        ]
      ],
      "backgroundVariant": "gradient",
      "heroMotif": "both",
      "numberSlant": true,
      "showDecorations": true,
      "accentColor": "#86D62B"
    }
  },
  {
    "key": "theme07_page006",
    "themeKey": "theme07",
    "pageNumber": 6,
    "layout": "THEME07-006",
    "slot": "summary-page",
    "label": "10 02",
    "bgClass": "",
    "controls": [
      {
        "key": "cardCount",
        "label": "指标卡数量",
        "type": "slider",
        "default": 4,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "底部核心指标卡的数量（2–4）。",
        "publicKey": "cardCount",
        "publicLabel": "指标卡数量",
        "description": "底部核心指标卡的数量（2–4）。"
      },
      {
        "key": "focusEnabled",
        "label": "重点信息",
        "type": "toggle",
        "default": true,
        "desc": "是否高亮其中一张指标卡作为视觉重点。",
        "publicKey": "focusEnabled",
        "publicLabel": "重点信息",
        "description": "是否高亮其中一张指标卡作为视觉重点。"
      },
      {
        "key": "focusIndex",
        "label": "重点元素",
        "type": "select",
        "default": 0,
        "options": [
          {
            "value": 0,
            "label": "第 1 个"
          },
          {
            "value": 1,
            "label": "第 2 个"
          },
          {
            "value": 2,
            "label": "第 3 个"
          },
          {
            "value": 3,
            "label": "第 4 个"
          }
        ],
        "desc": "选择被高亮的指标卡。",
        "publicKey": "focusIndex",
        "publicLabel": "重点元素",
        "description": "选择被高亮的指标卡。"
      },
      {
        "key": "chartType",
        "label": "图表类型",
        "type": "radio",
        "default": "bars",
        "options": [
          {
            "value": "bars",
            "label": "占比条"
          },
          {
            "value": "donut",
            "label": "环形图"
          }
        ],
        "desc": "右侧分类占比的呈现方式。",
        "publicKey": "chartType",
        "publicLabel": "图表类型",
        "description": "右侧分类占比的呈现方式。"
      },
      {
        "key": "showDecorations",
        "label": "装饰文案",
        "type": "toggle",
        "default": true,
        "desc": "关键词标签与背景光晕等装饰的显隐。",
        "publicKey": "showDecorations",
        "publicLabel": "装饰文案",
        "description": "关键词标签与背景光晕等装饰的显隐。"
      },
      {
        "key": "accentColor",
        "label": "主题色",
        "type": "color",
        "default": "#86D62B",
        "options": [
          "#86D62B",
          "#23C76A",
          "#2F7BFF",
          "#F2A93B",
          "#0E110B"
        ],
        "desc": "品牌强调色。",
        "publicKey": "accentColor",
        "publicLabel": "主题色",
        "description": "品牌强调色。"
      }
    ],
    "defaultProps": {
      "eyebrow": "Report Overview",
      "title": "报告摘要",
      "sub": "2024 全年 · 资本大年",
      "lead": [
        "2024 年美国 AI 初创公司吸纳约 ",
        "970 亿美元",
        " 风险投资，单笔 ≥ 1 亿美元的大额融资事件达 ",
        "97 笔",
        "。"
      ],
      "keywords": [
        "赢家通吃",
        "AGI 叙事",
        "地理护城河",
        "估值泡沫",
        "退潮看兑现"
      ],
      "closing": "资本仍在涌入 AI，但下一阶段会从赌叙事转向看兑现。",
      "chartTitle": "赛道融资占比",
      "tracks": [
        {
          "label": "通用大模型",
          "pct": 43.3
        },
        {
          "label": "垂直应用",
          "pct": 25.3
        },
        {
          "label": "基础设施",
          "pct": 16.3
        },
        {
          "label": "AI 芯片",
          "pct": 10
        },
        {
          "label": "其他",
          "pct": 5.1
        }
      ],
      "metrics": [
        {
          "label": "全年融资",
          "lead": "970",
          "tail": "",
          "unit": "亿美元"
        },
        {
          "label": "大额事件",
          "lead": "97",
          "tail": "",
          "unit": "笔"
        },
        {
          "label": "平均单笔",
          "lead": "10",
          "tail": "",
          "unit": "亿美元"
        },
        {
          "label": "湾区占比",
          "lead": "63",
          "tail": ".9",
          "unit": "%"
        }
      ],
      "cardCount": 4,
      "focusEnabled": true,
      "focusIndex": 0,
      "chartType": "bars",
      "showDecorations": true,
      "accentColor": "#86D62B"
    }
  },
  {
    "key": "theme07_page007",
    "themeKey": "theme07",
    "pageNumber": 7,
    "layout": "THEME07-007",
    "slot": "contents-page",
    "label": "11 03",
    "bgClass": "",
    "controls": [
      {
        "key": "cardCount",
        "label": "章节卡数量",
        "type": "slider",
        "default": 7,
        "min": 3,
        "max": 7,
        "step": 1,
        "desc": "展示的章节卡数量（3–7）。",
        "publicKey": "cardCount",
        "publicLabel": "章节卡数量",
        "description": "展示的章节卡数量（3–7）。"
      },
      {
        "key": "columns",
        "label": "每行列数",
        "type": "radio",
        "default": 4,
        "options": [
          {
            "value": 3,
            "label": "3 列"
          },
          {
            "value": 4,
            "label": "4 列"
          }
        ],
        "desc": "章节卡的网格列数，影响排布节奏。",
        "publicKey": "columns",
        "publicLabel": "每行列数",
        "description": "章节卡的网格列数，影响排布节奏。"
      },
      {
        "key": "focusEnabled",
        "label": "重点信息",
        "type": "toggle",
        "default": true,
        "desc": "是否高亮某一章节卡作为阅读重点。",
        "publicKey": "focusEnabled",
        "publicLabel": "重点信息",
        "description": "是否高亮某一章节卡作为阅读重点。"
      },
      {
        "key": "focusIndex",
        "label": "重点元素",
        "type": "select",
        "default": 1,
        "options": [
          {
            "value": 0,
            "label": "第 1 个"
          },
          {
            "value": 1,
            "label": "第 2 个"
          },
          {
            "value": 2,
            "label": "第 3 个"
          },
          {
            "value": 3,
            "label": "第 4 个"
          },
          {
            "value": 4,
            "label": "第 5 个"
          },
          {
            "value": 5,
            "label": "第 6 个"
          },
          {
            "value": 6,
            "label": "第 7 个"
          }
        ],
        "desc": "选择被高亮的章节卡。",
        "publicKey": "focusIndex",
        "publicLabel": "重点元素",
        "description": "选择被高亮的章节卡。"
      },
      {
        "key": "showDecorations",
        "label": "装饰文案",
        "type": "toggle",
        "default": true,
        "desc": "序号水印与条码等装饰的显隐。",
        "publicKey": "showDecorations",
        "publicLabel": "装饰文案",
        "description": "序号水印与条码等装饰的显隐。"
      },
      {
        "key": "accentColor",
        "label": "主题色",
        "type": "color",
        "default": "#86D62B",
        "options": [
          "#86D62B",
          "#23C76A",
          "#2F7BFF",
          "#F2A93B",
          "#0E110B"
        ],
        "desc": "品牌强调色。",
        "publicKey": "accentColor",
        "publicLabel": "主题色",
        "description": "品牌强调色。"
      }
    ],
    "defaultProps": {
      "eyebrow": "Structure",
      "title": "报告结构",
      "sub": "从方法到结论的阅读路径",
      "lead": "整份报告按研究方法、市场全景、横向透视、产业链、典型案例、风险展望和结论展开。",
      "closing": "先建立框架，再进入数据和判断。",
      "chapters": [
        {
          "no": "01",
          "zh": "研究方法",
          "en": "Methodology"
        },
        {
          "no": "02",
          "zh": "市场全景",
          "en": "Market Panorama"
        },
        {
          "no": "03",
          "zh": "横向透视",
          "en": "Cross Section"
        },
        {
          "no": "04",
          "zh": "产业链条",
          "en": "Value Chain"
        },
        {
          "no": "05",
          "zh": "典型案例",
          "en": "Case Studies"
        },
        {
          "no": "06",
          "zh": "风险展望",
          "en": "Risk & Outlook"
        },
        {
          "no": "07",
          "zh": "结论判断",
          "en": "Conclusion"
        }
      ],
      "cardCount": 7,
      "focusEnabled": true,
      "focusIndex": 1,
      "columns": 4,
      "showDecorations": true,
      "accentColor": "#86D62B"
    }
  },
  {
    "key": "theme07_page008",
    "themeKey": "theme07",
    "pageNumber": 8,
    "layout": "THEME07-008",
    "slot": "method-page",
    "label": "12 04",
    "bgClass": "",
    "controls": [
      {
        "key": "cardCount",
        "label": "方法卡数量",
        "type": "slider",
        "default": 3,
        "min": 1,
        "max": 3,
        "step": 1,
        "desc": "展示的方法层数量（1–3）。",
        "publicKey": "cardCount",
        "publicLabel": "方法卡数量",
        "description": "展示的方法层数量（1–3）。"
      },
      {
        "key": "layout",
        "label": "排布方式",
        "type": "radio",
        "default": "stack",
        "options": [
          {
            "value": "stack",
            "label": "堆叠"
          },
          {
            "value": "row",
            "label": "并排"
          }
        ],
        "desc": "方法卡的排布：纵向堆叠或横向并排。",
        "publicKey": "layout",
        "publicLabel": "排布方式",
        "description": "方法卡的排布：纵向堆叠或横向并排。"
      },
      {
        "key": "focusEnabled",
        "label": "重点信息",
        "type": "toggle",
        "default": true,
        "desc": "是否高亮某一方法层作为重点。",
        "publicKey": "focusEnabled",
        "publicLabel": "重点信息",
        "description": "是否高亮某一方法层作为重点。"
      },
      {
        "key": "focusIndex",
        "label": "重点元素",
        "type": "select",
        "default": 2,
        "options": [
          {
            "value": 0,
            "label": "第 1 个"
          },
          {
            "value": 1,
            "label": "第 2 个"
          },
          {
            "value": 2,
            "label": "第 3 个"
          }
        ],
        "desc": "选择被高亮的方法卡。",
        "publicKey": "focusIndex",
        "publicLabel": "重点元素",
        "description": "选择被高亮的方法卡。"
      },
      {
        "key": "showDecorations",
        "label": "装饰文案",
        "type": "toggle",
        "default": true,
        "desc": "底部方法链与条码等装饰的显隐。",
        "publicKey": "showDecorations",
        "publicLabel": "装饰文案",
        "description": "底部方法链与条码等装饰的显隐。"
      },
      {
        "key": "accentColor",
        "label": "主题色",
        "type": "color",
        "default": "#86D62B",
        "options": [
          "#86D62B",
          "#23C76A",
          "#2F7BFF",
          "#F2A93B",
          "#0E110B"
        ],
        "desc": "品牌强调色。",
        "publicKey": "accentColor",
        "publicLabel": "主题色",
        "description": "品牌强调色。"
      }
    ],
    "defaultProps": {
      "eyebrow": "Methodology",
      "title": "研究方法",
      "sub": "横纵分析法",
      "lead": "横向看同一时间截面的公司、赛道、轮次和地区；纵向看融资额、事件数和市场节奏的变化。",
      "closing": "不是罗列融资新闻，而是把融资数据变成结构化判断。",
      "layers": [
        {
          "no": "H",
          "zh": "横向分析",
          "en": "Horizontal",
          "desc": "同一时间截面下，对比公司、赛道、轮次与地区的资本分布。",
          "q": "钱流向了哪里？"
        },
        {
          "no": "V",
          "zh": "纵向分析",
          "en": "Vertical",
          "desc": "沿时间轴观察融资额、事件数与市场节奏的演化。",
          "q": "热度如何变化？"
        },
        {
          "no": "X",
          "zh": "交叉判断",
          "en": "Cross",
          "desc": "横纵交叉、产业分层，判断哪些方向真正能够兑现。",
          "q": "哪些方向能兑现？"
        }
      ],
      "steps": [
        [
          "空间对比",
          "横向"
        ],
        [
          "时间演化",
          "纵向"
        ],
        [
          "产业分层",
          "交叉"
        ],
        [
          "资本流向",
          "目标"
        ]
      ],
      "cardCount": 3,
      "focusEnabled": true,
      "focusIndex": 2,
      "layout": "stack",
      "showDecorations": true,
      "accentColor": "#86D62B"
    }
  },
  {
    "key": "theme07_page009",
    "themeKey": "theme07",
    "pageNumber": 9,
    "layout": "THEME07-009",
    "slot": "case-page",
    "label": "16 08",
    "bgClass": "",
    "controls": [
      {
        "key": "cardCount",
        "label": "卡片数量",
        "type": "slider",
        "default": 3,
        "min": 1,
        "max": 3,
        "step": 1,
        "desc": "展示的案例卡数量（1–3）。",
        "publicKey": "cardCount",
        "publicLabel": "卡片数量",
        "description": "展示的案例卡数量（1–3）。"
      },
      {
        "key": "imageCount",
        "label": "图片数量",
        "type": "slider",
        "default": 3,
        "min": 0,
        "max": 3,
        "step": 1,
        "desc": "带图片槽的卡片数量（0–n）；其余卡片以品牌图形填充，保持构图完整。",
        "publicKey": "imageCount",
        "publicLabel": "图片数量",
        "description": "带图片槽的卡片数量（0–n）；其余卡片以品牌图形填充，保持构图完整。"
      },
      {
        "key": "imageRatio",
        "label": "图片比例",
        "type": "radio",
        "default": "portrait",
        "options": [
          {
            "value": "portrait",
            "label": "竖图"
          },
          {
            "value": "landscape",
            "label": "横图"
          },
          {
            "value": "square",
            "label": "方形"
          },
          {
            "value": "auto",
            "label": "自适应"
          }
        ],
        "desc": "图片槽的比例；自适应会跟随用户上传图片的原始比例。",
        "publicKey": "imageRatio",
        "publicLabel": "图片比例",
        "description": "图片槽的比例；自适应会跟随用户上传图片的原始比例。"
      },
      {
        "key": "focusEnabled",
        "label": "重点信息",
        "type": "toggle",
        "default": true,
        "desc": "是否高亮某一张案例卡作为视觉重点。",
        "publicKey": "focusEnabled",
        "publicLabel": "重点信息",
        "description": "是否高亮某一张案例卡作为视觉重点。"
      },
      {
        "key": "focusIndex",
        "label": "重点元素",
        "type": "select",
        "default": 0,
        "options": [
          {
            "value": 0,
            "label": "第 1 个"
          },
          {
            "value": 1,
            "label": "第 2 个"
          },
          {
            "value": 2,
            "label": "第 3 个"
          }
        ],
        "desc": "选择被高亮的案例卡。",
        "publicKey": "focusIndex",
        "publicLabel": "重点元素",
        "description": "选择被高亮的案例卡。"
      },
      {
        "key": "showDecorations",
        "label": "装饰文案",
        "type": "toggle",
        "default": true,
        "desc": "重点标签、背景光晕与条码等装饰的显隐。",
        "publicKey": "showDecorations",
        "publicLabel": "装饰文案",
        "description": "重点标签、背景光晕与条码等装饰的显隐。"
      },
      {
        "key": "accentColor",
        "label": "主题色",
        "type": "color",
        "default": "#86D62B",
        "options": [
          "#86D62B",
          "#23C76A",
          "#2F7BFF",
          "#F2A93B",
          "#0E110B"
        ],
        "desc": "品牌强调色。",
        "publicKey": "accentColor",
        "publicLabel": "主题色",
        "description": "品牌强调色。"
      }
    ],
    "defaultProps": {
      "eyebrow": "Case Studies",
      "title": "典型案例",
      "titleTail": "深度剖析",
      "sub": "三类资本逻辑的代表公司",
      "lead": "Anthropic、xAI 和 CoreWeave 分别代表安全模型、实时数据生态和算力基础设施三类资本逻辑。",
      "closing": "不同案例共同指向同一个问题：技术优势能否转成可持续收入。",
      "cases": [
        {
          "logic": "安全模型逻辑",
          "en": "Anthropic",
          "zh": "安全可靠模型",
          "chips": [
            "安全对齐",
            "Claude"
          ],
          "lead": "650",
          "plus": true,
          "unit": "亿美元",
          "metricLabel": "累计融资"
        },
        {
          "logic": "实时数据逻辑",
          "en": "xAI",
          "zh": "实时数据生态",
          "chips": [
            "实时数据",
            "多模态"
          ],
          "lead": "50",
          "unit": "亿美元",
          "metricLabel": "单笔融资"
        },
        {
          "logic": "算力设施逻辑",
          "en": "CoreWeave",
          "zh": "算力基础设施",
          "chips": [
            "GPU 云",
            "算力资源"
          ],
          "lead": "110",
          "unit": "亿美元",
          "metricLabel": "融资额"
        }
      ],
      "cardCount": 3,
      "imageCount": 3,
      "imageRatio": "portrait",
      "focusEnabled": true,
      "focusIndex": 0,
      "showDecorations": true,
      "accentColor": "#86D62B",
      "renderSlot": null
    }
  },
  {
    "key": "theme07_page010",
    "themeKey": "theme07",
    "pageNumber": 10,
    "layout": "THEME07-010",
    "slot": "monthly-page",
    "label": "17 09",
    "bgClass": "",
    "controls": [
      {
        "key": "chartType",
        "label": "图表类型",
        "type": "radio",
        "default": "bars",
        "options": [
          {
            "value": "bars",
            "label": "热力柱"
          },
          {
            "value": "grid",
            "label": "热力格"
          }
        ],
        "desc": "月度热度的呈现方式：竖向热力柱 / 方格热力图。",
        "publicKey": "chartType",
        "publicLabel": "图表类型",
        "description": "月度热度的呈现方式：竖向热力柱 / 方格热力图。"
      },
      {
        "key": "showSecondary",
        "label": "辅助序列",
        "type": "toggle",
        "default": true,
        "desc": "叠加月度均值参考线。",
        "publicKey": "showSecondary",
        "publicLabel": "辅助序列",
        "description": "叠加月度均值参考线。"
      },
      {
        "key": "focusEnabled",
        "label": "重点信息",
        "type": "toggle",
        "default": true,
        "desc": "是否高亮某一个月作为视觉重点。",
        "publicKey": "focusEnabled",
        "publicLabel": "重点信息",
        "description": "是否高亮某一个月作为视觉重点。"
      },
      {
        "key": "focusIndex",
        "label": "重点元素",
        "type": "select",
        "default": 7,
        "options": [
          {
            "value": 0,
            "label": "1 月"
          },
          {
            "value": 1,
            "label": "2 月"
          },
          {
            "value": 2,
            "label": "3 月"
          },
          {
            "value": 3,
            "label": "4 月"
          },
          {
            "value": 4,
            "label": "5 月"
          },
          {
            "value": 5,
            "label": "6 月"
          },
          {
            "value": 6,
            "label": "7 月"
          },
          {
            "value": 7,
            "label": "8 月"
          },
          {
            "value": 8,
            "label": "9 月"
          },
          {
            "value": 9,
            "label": "10 月"
          },
          {
            "value": 10,
            "label": "11 月"
          },
          {
            "value": 11,
            "label": "12 月"
          }
        ],
        "desc": "选择被高亮的月份。",
        "publicKey": "focusIndex",
        "publicLabel": "重点元素",
        "description": "选择被高亮的月份。"
      },
      {
        "key": "showDecorations",
        "label": "装饰文案",
        "type": "toggle",
        "default": true,
        "desc": "峰值标记、背景光晕与底部条码等装饰的显隐。",
        "publicKey": "showDecorations",
        "publicLabel": "装饰文案",
        "description": "峰值标记、背景光晕与底部条码等装饰的显隐。"
      },
      {
        "key": "accentColor",
        "label": "主题色",
        "type": "color",
        "default": "#86D62B",
        "options": [
          "#86D62B",
          "#23C76A",
          "#2F7BFF",
          "#F2A93B",
          "#0E110B"
        ],
        "desc": "品牌强调色，作用于热度配色与高亮。",
        "publicKey": "accentColor",
        "publicLabel": "主题色",
        "description": "品牌强调色，作用于热度配色与高亮。"
      }
    ],
    "defaultProps": {
      "eyebrow": "Monthly Heatmap",
      "title": "市场月度热力",
      "sub": "12 个月融资节奏",
      "lead": "月度数据展示全年热度并非均匀释放，而是由 5 月、8 月、9 月等峰值月份拉高。",
      "anchorLead": "118",
      "anchorUnit": "亿美元",
      "anchorNote": "全年峰值 · 8 月单月最高，9 月、5 月紧随其后",
      "closing": "融资节奏的核心不是平均值，而是峰值背后的超级交易。",
      "axisLabel": "月度融资额 / 亿美元",
      "months": [
        45,
        58,
        59,
        86,
        105,
        93,
        92,
        118,
        108,
        73,
        81,
        52
      ],
      "peaks": [
        4,
        7,
        8
      ],
      "avg": 80.8,
      "chartType": "bars",
      "focusEnabled": true,
      "focusIndex": 7,
      "showSecondary": true,
      "showDecorations": true,
      "accentColor": "#86D62B"
    }
  },
  {
    "key": "theme07_page011",
    "themeKey": "theme07",
    "pageNumber": 11,
    "layout": "THEME07-011",
    "slot": "ranking-page",
    "label": "18 10",
    "bgClass": "",
    "controls": [
      {
        "key": "rowCount",
        "label": "公司数量",
        "type": "slider",
        "default": 10,
        "min": 5,
        "max": 10,
        "step": 1,
        "desc": "榜单展示的公司数量（5–10）。",
        "publicKey": "rowCount",
        "publicLabel": "公司数量",
        "description": "榜单展示的公司数量（5–10）。"
      },
      {
        "key": "focusEnabled",
        "label": "重点信息",
        "type": "toggle",
        "default": true,
        "desc": "是否高亮榜单前列作为视觉重点。",
        "publicKey": "focusEnabled",
        "publicLabel": "重点信息",
        "description": "是否高亮榜单前列作为视觉重点。"
      },
      {
        "key": "focusCount",
        "label": "重点数量",
        "type": "slider",
        "default": 3,
        "min": 1,
        "max": 3,
        "step": 1,
        "desc": "高亮的前列条目数量（前 N 名）。",
        "publicKey": "itemCount",
        "publicLabel": "重点数量",
        "description": "高亮的前列条目数量（前 N 名）。"
      },
      {
        "key": "showSecondary",
        "label": "分类配色",
        "type": "toggle",
        "default": true,
        "desc": "按分类为条形与圆点配色；关闭后为单色。",
        "publicKey": "showSecondary",
        "publicLabel": "分类配色",
        "description": "按分类为条形与圆点配色；关闭后为单色。"
      },
      {
        "key": "showDecorations",
        "label": "装饰文案",
        "type": "toggle",
        "default": true,
        "desc": "分类图例、背景光晕与条码等装饰的显隐。",
        "publicKey": "showDecorations",
        "publicLabel": "装饰文案",
        "description": "分类图例、背景光晕与条码等装饰的显隐。"
      },
      {
        "key": "accentColor",
        "label": "主题色",
        "type": "color",
        "default": "#86D62B",
        "options": [
          "#86D62B",
          "#23C76A",
          "#2F7BFF",
          "#F2A93B",
          "#0E110B"
        ],
        "desc": "品牌强调色。",
        "publicKey": "accentColor",
        "publicLabel": "主题色",
        "description": "品牌强调色。"
      }
    ],
    "defaultProps": {
      "eyebrow": "Top Funded Companies",
      "title": "Top 10 融资公司",
      "sub": "头部玩家资金排名",
      "lead": "头部公司融资额显著领先，通用大模型占据榜单上方位置。",
      "note": "口径：以最大单笔融资计 · 单位 亿美元",
      "closing": "头部融资规模既反映技术叙事，也反映资源绑定能力。",
      "companies": [
        {
          "name": "OpenAI",
          "amount": 66,
          "track": "通用大模型"
        },
        {
          "name": "Anthropic",
          "amount": 65,
          "track": "通用大模型"
        },
        {
          "name": "xAI",
          "amount": 50,
          "track": "通用大模型"
        },
        {
          "name": "CoreWeave",
          "amount": 11,
          "track": "基础设施"
        },
        {
          "name": "SSI",
          "amount": 10,
          "track": "通用大模型"
        },
        {
          "name": "Scale AI",
          "amount": 10,
          "track": "基础设施"
        },
        {
          "name": "Figure AI",
          "amount": 6.8,
          "track": "具身智能"
        },
        {
          "name": "Perplexity",
          "amount": 5.2,
          "track": "垂直应用"
        },
        {
          "name": "Databricks",
          "amount": 5,
          "track": "基础设施"
        },
        {
          "name": "Glean",
          "amount": 2.6,
          "track": "垂直应用"
        }
      ],
      "rowCount": 10,
      "focusEnabled": true,
      "focusCount": 3,
      "showSecondary": true,
      "showDecorations": true,
      "accentColor": "#86D62B"
    }
  },
  {
    "key": "theme07_page012",
    "themeKey": "theme07",
    "pageNumber": 12,
    "layout": "THEME07-012",
    "slot": "matrix-page",
    "label": "19 11",
    "bgClass": "",
    "controls": [
      {
        "key": "focusEnabled",
        "label": "重点信息",
        "type": "toggle",
        "default": true,
        "desc": "是否高亮某一象限作为视觉重点。",
        "publicKey": "focusEnabled",
        "publicLabel": "重点信息",
        "description": "是否高亮某一象限作为视觉重点。"
      },
      {
        "key": "focusIndex",
        "label": "重点元素",
        "type": "select",
        "default": 0,
        "options": [
          {
            "value": 0,
            "label": "明星兑现"
          },
          {
            "value": 1,
            "label": "叙事泡沫"
          },
          {
            "value": 2,
            "label": "隐形价值"
          },
          {
            "value": 3,
            "label": "等待验证"
          }
        ],
        "desc": "选择被高亮的象限。",
        "publicKey": "focusIndex",
        "publicLabel": "重点元素",
        "description": "选择被高亮的象限。"
      },
      {
        "key": "showSecondary",
        "label": "辅助信息",
        "type": "toggle",
        "default": true,
        "desc": "各象限代表方向标签的显隐。",
        "publicKey": "showSecondary",
        "publicLabel": "辅助信息",
        "description": "各象限代表方向标签的显隐。"
      },
      {
        "key": "showDecorations",
        "label": "装饰文案",
        "type": "toggle",
        "default": true,
        "desc": "坐标轴标签、箭头与背景光晕等装饰的显隐。",
        "publicKey": "showDecorations",
        "publicLabel": "装饰文案",
        "description": "坐标轴标签、箭头与背景光晕等装饰的显隐。"
      },
      {
        "key": "accentColor",
        "label": "主题色",
        "type": "color",
        "default": "#86D62B",
        "options": [
          "#86D62B",
          "#23C76A",
          "#2F7BFF",
          "#F2A93B",
          "#0E110B"
        ],
        "desc": "品牌强调色。",
        "publicKey": "accentColor",
        "publicLabel": "主题色",
        "description": "品牌强调色。"
      }
    ],
    "defaultProps": {
      "eyebrow": "Heat vs. Monetization",
      "title": "资本热度 × 商业兑现",
      "sub": "四象限机会判断",
      "lead": "把资本热度和商业兑现度交叉，可以区分明星兑现、叙事泡沫、隐形价值和等待验证四类机会。",
      "closing": "资本正在从叙事驱动转向兑现驱动。",
      "axisX": "商业兑现度",
      "axisY": "资本热度",
      "quadrants": [
        {
          "name": "明星兑现",
          "pos": "高热度 · 高兑现",
          "dirs": [
            "基础设施",
            "数据平台"
          ],
          "tone": "accent",
          "col": 2,
          "row": 1
        },
        {
          "name": "叙事泡沫",
          "pos": "高热度 · 低兑现",
          "dirs": [
            "通用模型",
            "AGI 实验室"
          ],
          "tone": "warn",
          "col": 1,
          "row": 1
        },
        {
          "name": "隐形价值",
          "pos": "低热度 · 高兑现",
          "dirs": [
            "垂直应用",
            "企业搜索"
          ],
          "tone": "ink",
          "col": 2,
          "row": 2
        },
        {
          "name": "等待验证",
          "pos": "低热度 · 低兑现",
          "dirs": [
            "长尾工具",
            "安全",
            "早期硬件"
          ],
          "tone": "faint",
          "col": 1,
          "row": 2
        }
      ],
      "focusEnabled": true,
      "focusIndex": 0,
      "showSecondary": true,
      "showDecorations": true,
      "accentColor": "#86D62B"
    }
  },
  {
    "key": "theme07_page013",
    "themeKey": "theme07",
    "pageNumber": 13,
    "layout": "THEME07-013",
    "slot": "risk-page",
    "label": "20 12",
    "bgClass": "",
    "controls": [
      {
        "key": "cardCount",
        "label": "卡片数量",
        "type": "slider",
        "default": 5,
        "min": 2,
        "max": 5,
        "step": 1,
        "desc": "展示的状态卡数量（2–5）。",
        "publicKey": "cardCount",
        "publicLabel": "卡片数量",
        "description": "展示的状态卡数量（2–5）。"
      },
      {
        "key": "imageCount",
        "label": "图片数量",
        "type": "slider",
        "default": 1,
        "min": 0,
        "max": 1,
        "step": 1,
        "desc": "主视觉图片槽数量（0–1）；为 0 时状态卡占据整页宽度。图片以裁切填充侧栏，可双击重新取景。",
        "publicKey": "imageCount",
        "publicLabel": "图片数量",
        "description": "主视觉图片槽数量（0–1）；为 0 时状态卡占据整页宽度。图片以裁切填充侧栏，可双击重新取景。"
      },
      {
        "key": "showSecondary",
        "label": "辅助信息",
        "type": "toggle",
        "default": true,
        "desc": "顶部状态传导链的显隐。",
        "publicKey": "showSecondary",
        "publicLabel": "辅助信息",
        "description": "顶部状态传导链的显隐。"
      },
      {
        "key": "focusEnabled",
        "label": "重点信息",
        "type": "toggle",
        "default": true,
        "desc": "是否高亮某一项状态作为视觉重点。",
        "publicKey": "focusEnabled",
        "publicLabel": "重点信息",
        "description": "是否高亮某一项状态作为视觉重点。"
      },
      {
        "key": "focusIndex",
        "label": "重点元素",
        "type": "select",
        "default": 0,
        "options": [
          {
            "value": 0,
            "label": "第 1 个"
          },
          {
            "value": 1,
            "label": "第 2 个"
          },
          {
            "value": 2,
            "label": "第 3 个"
          },
          {
            "value": 3,
            "label": "第 4 个"
          },
          {
            "value": 4,
            "label": "第 5 个"
          }
        ],
        "desc": "选择被高亮的状态卡。",
        "publicKey": "focusIndex",
        "publicLabel": "重点元素",
        "description": "选择被高亮的状态卡。"
      },
      {
        "key": "showDecorations",
        "label": "装饰文案",
        "type": "toggle",
        "default": true,
        "desc": "警示标记、背景光晕与条码等装饰的显隐。",
        "publicKey": "showDecorations",
        "publicLabel": "装饰文案",
        "description": "警示标记、背景光晕与条码等装饰的显隐。"
      },
      {
        "key": "accentColor",
        "label": "主题色",
        "type": "color",
        "default": "#86D62B",
        "options": [
          "#86D62B",
          "#23C76A",
          "#2F7BFF",
          "#F2A93B",
          "#0E110B"
        ],
        "desc": "品牌强调色。",
        "publicKey": "accentColor",
        "publicLabel": "主题色",
        "description": "品牌强调色。"
      }
    ],
    "defaultProps": {
      "eyebrow": "Risk Assessment",
      "title": "风险研判",
      "sub": "资本大年背后的下行因素",
      "lead": "高估值、盈利验证、监管压力、大厂竞争和算力成本共同构成风险链条。",
      "chainTitle": "风险传导链",
      "closing": "下一阶段会淘汰只会讲故事的公司。",
      "risks": [
        {
          "node": "高估值",
          "title": "估值泡沫",
          "desc": "一级估值透支远期增长预期"
        },
        {
          "node": "盈利验证",
          "title": "盈利模式未验证",
          "desc": "试点难以转化为稳定订阅收入"
        },
        {
          "node": "监管压力",
          "title": "监管成本上升",
          "desc": "隐私、版权与合规推高交付成本"
        },
        {
          "node": "大厂竞争",
          "title": "开源与大厂挤压",
          "desc": "开源逼近能力，大厂压缩独立空间"
        },
        {
          "node": "算力成本",
          "title": "算力供应链卡脖子",
          "desc": "推理成本居高不下，吞噬毛利"
        }
      ],
      "cardCount": 5,
      "imageCount": 1,
      "imageRatio": "portrait",
      "focusEnabled": true,
      "focusIndex": 0,
      "showSecondary": true,
      "showDecorations": true,
      "accentColor": "#86D62B",
      "renderSlot": null
    }
  },
  {
    "key": "theme07_page014",
    "themeKey": "theme07",
    "pageNumber": 14,
    "layout": "THEME07-014",
    "slot": "outlook-page",
    "label": "21 13",
    "bgClass": "",
    "controls": [
      {
        "key": "columnCount",
        "label": "对比栏数量",
        "type": "slider",
        "default": 2,
        "min": 1,
        "max": 2,
        "step": 1,
        "desc": "并排对比栏数量（1–2）；为 1 时单栏占据整行。",
        "publicKey": "columnCount",
        "publicLabel": "对比栏数量",
        "description": "并排对比栏数量（1–2）；为 1 时单栏占据整行。"
      },
      {
        "key": "itemCount",
        "label": "条目数量",
        "type": "slider",
        "default": 3,
        "min": 1,
        "max": 3,
        "step": 1,
        "desc": "每个对比栏内的方向条目数量（1–3）。",
        "publicKey": "itemCount",
        "publicLabel": "条目数量",
        "description": "每个对比栏内的方向条目数量（1–3）。"
      },
      {
        "key": "focusEnabled",
        "label": "重点信息",
        "type": "toggle",
        "default": true,
        "desc": "是否高亮某一个对比栏作为视觉重点。",
        "publicKey": "focusEnabled",
        "publicLabel": "重点信息",
        "description": "是否高亮某一个对比栏作为视觉重点。"
      },
      {
        "key": "focusIndex",
        "label": "重点元素",
        "type": "select",
        "default": 0,
        "options": [
          {
            "value": 0,
            "label": "第 1 栏"
          },
          {
            "value": 1,
            "label": "第 2 栏"
          }
        ],
        "desc": "选择被高亮的对比栏。",
        "publicKey": "focusIndex",
        "publicLabel": "重点元素",
        "description": "选择被高亮的对比栏。"
      },
      {
        "key": "showTimeline",
        "label": "阶段时间轴",
        "type": "toggle",
        "default": true,
        "desc": "底部阶段性时间轴的显隐。",
        "publicKey": "showTimeline",
        "publicLabel": "阶段时间轴",
        "description": "底部阶段性时间轴的显隐。"
      },
      {
        "key": "nodeCount",
        "label": "节点数量",
        "type": "slider",
        "default": 3,
        "min": 2,
        "max": 3,
        "step": 1,
        "desc": "时间轴上的阶段节点数量（2–3）。",
        "publicKey": "nodeCount",
        "publicLabel": "节点数量",
        "description": "时间轴上的阶段节点数量（2–3）。"
      },
      {
        "key": "showDecorations",
        "label": "装饰文案",
        "type": "toggle",
        "default": true,
        "desc": "背景光晕与条码等装饰的显隐。",
        "publicKey": "showDecorations",
        "publicLabel": "装饰文案",
        "description": "背景光晕与条码等装饰的显隐。"
      },
      {
        "key": "accentColor",
        "label": "主题色",
        "type": "color",
        "default": "#86D62B",
        "options": [
          "#86D62B",
          "#23C76A",
          "#2F7BFF",
          "#F2A93B",
          "#0E110B"
        ],
        "desc": "品牌强调色。",
        "publicKey": "accentColor",
        "publicLabel": "主题色",
        "description": "品牌强调色。"
      }
    ],
    "defaultProps": {
      "eyebrow": "Investment Outlook",
      "title": "投资建议与阶段性策略",
      "sub": "看好方向与谨慎方向",
      "lead": "后续观察应围绕收入兑现、基础设施确定性和垂直应用 PMF 展开。",
      "closing": "看融资只是起点，看兑现才是判断。",
      "timelineLabel": "阶段性观察 · 2025 — 2027",
      "columns": [
        {
          "kind": "看好方向",
          "en": "Conviction",
          "tone": "accent",
          "items": [
            {
              "name": "垂直应用",
              "note": "嵌入刚性工作流，验证 PMF"
            },
            {
              "name": "基础设施",
              "note": "GPU 云与数据平台，刚性预算"
            },
            {
              "name": "具身智能",
              "note": "软件能力延伸到物理场景"
            }
          ]
        },
        {
          "kind": "谨慎方向",
          "en": "Caution",
          "tone": "neg",
          "items": [
            {
              "name": "高估值纯模型",
              "note": "叙事透支远期增长预期"
            },
            {
              "name": "AI 包装项目",
              "note": "缺乏壁垒，易被快速替代"
            },
            {
              "name": "低壁垒消费应用",
              "note": "留存与付费意愿不足"
            }
          ]
        }
      ],
      "nodes": [
        {
          "year": "2025",
          "title": "收入兑现",
          "note": "看试点能否转为稳定订阅"
        },
        {
          "year": "2026",
          "title": "IPO 窗口",
          "note": "头部上市重定价估值锚"
        },
        {
          "year": "2027",
          "title": "商业闭环",
          "note": "能形成闭环的方向胜出"
        }
      ],
      "columnCount": 2,
      "itemCount": 3,
      "focusEnabled": true,
      "focusIndex": 0,
      "showTimeline": true,
      "nodeCount": 3,
      "showDecorations": true,
      "accentColor": "#86D62B"
    }
  },
  {
    "key": "theme07_page015",
    "themeKey": "theme07",
    "pageNumber": 15,
    "layout": "THEME07-015",
    "slot": "quote-page",
    "label": "22 14",
    "bgClass": "",
    "controls": [
      {
        "key": "align",
        "label": "对齐方式",
        "type": "radio",
        "default": "center",
        "options": [
          {
            "value": "center",
            "label": "居中"
          },
          {
            "value": "left",
            "label": "左对齐"
          }
        ],
        "desc": "金句与辅助信息的整体对齐方式。",
        "publicKey": "align",
        "publicLabel": "对齐方式",
        "description": "金句与辅助信息的整体对齐方式。"
      },
      {
        "key": "showConclusions",
        "label": "辅助信息",
        "type": "toggle",
        "default": true,
        "desc": "底部核心结论行的显隐。",
        "publicKey": "showConclusions",
        "publicLabel": "辅助信息",
        "description": "底部核心结论行的显隐。"
      },
      {
        "key": "conclusionCount",
        "label": "结论数量",
        "type": "slider",
        "default": 3,
        "min": 0,
        "max": 3,
        "step": 1,
        "desc": "展示的核心结论条目数量（0–3）。",
        "publicKey": "itemCount",
        "publicLabel": "结论数量",
        "description": "展示的核心结论条目数量（0–3）。"
      },
      {
        "key": "showQuoteMark",
        "label": "引号装饰",
        "type": "toggle",
        "default": true,
        "desc": "超大引号装饰符号的显隐。",
        "publicKey": "showQuoteMark",
        "publicLabel": "引号装饰",
        "description": "超大引号装饰符号的显隐。"
      },
      {
        "key": "showSource",
        "label": "数据来源",
        "type": "toggle",
        "default": true,
        "desc": "底部数据来源说明行的显隐。",
        "publicKey": "showSource",
        "publicLabel": "数据来源",
        "description": "底部数据来源说明行的显隐。"
      },
      {
        "key": "showDecorations",
        "label": "装饰文案",
        "type": "toggle",
        "default": true,
        "desc": "背景光晕、镜头光斑与条码等装饰的显隐。",
        "publicKey": "showDecorations",
        "publicLabel": "装饰文案",
        "description": "背景光晕、镜头光斑与条码等装饰的显隐。"
      },
      {
        "key": "accentColor",
        "label": "主题色",
        "type": "color",
        "default": "#86D62B",
        "options": [
          "#86D62B",
          "#23C76A",
          "#2F7BFF",
          "#F2A93B",
          "#0E110B"
        ],
        "desc": "品牌强调色，作用于金句重点词与装饰。",
        "publicKey": "accentColor",
        "publicLabel": "主题色",
        "description": "品牌强调色，作用于金句重点词与装饰。"
      }
    ],
    "defaultProps": {
      "eyebrow": "Conclusion",
      "kicker": "结论与数据来源",
      "quoteLead": "资本下一阶段，将从",
      "quoteEm1": "赌叙事",
      "quoteMid": "转向",
      "quoteEm2": "看兑现",
      "quoteTail": "。",
      "conclusions": [
        {
          "idx": "01",
          "title": "头部集中",
          "note": "少数超级交易决定年度曲线与市场情绪"
        },
        {
          "idx": "02",
          "title": "地理护城河",
          "note": "湾区集聚人才、资本与算力，短期难以撼动"
        },
        {
          "idx": "03",
          "title": "兑现为王",
          "note": "能形成商业闭环的方向才会穿越退潮"
        }
      ],
      "source": "数据来源 · AI Capital Lab 自建数据库 / 公开融资披露 · 2024 全年口径 ≥1 亿美元",
      "align": "center",
      "showConclusions": true,
      "conclusionCount": 3,
      "showQuoteMark": true,
      "showSource": true,
      "showDecorations": true,
      "accentColor": "#86D62B"
    }
  },
  {
    "key": "theme07_page016",
    "themeKey": "theme07",
    "pageNumber": 16,
    "layout": "THEME07-016",
    "slot": "chapter-page",
    "label": "23 15",
    "bgClass": "",
    "controls": [
      {
        "key": "backgroundVariant",
        "label": "背景风格",
        "type": "radio",
        "default": "dark",
        "options": [
          {
            "value": "dark",
            "label": "深色"
          },
          {
            "value": "paper",
            "label": "浅色"
          }
        ],
        "desc": "章节页背景：深色（强换气节奏）/ 浅色（与正文统一）。",
        "publicKey": "backgroundVariant",
        "publicLabel": "背景风格",
        "description": "章节页背景：深色（强换气节奏）/ 浅色（与正文统一）。"
      },
      {
        "key": "layout",
        "label": "排版",
        "type": "radio",
        "default": "left",
        "options": [
          {
            "value": "left",
            "label": "左对齐"
          },
          {
            "value": "center",
            "label": "居中"
          }
        ],
        "desc": "标题与关键词的整体排布方式。",
        "publicKey": "layout",
        "publicLabel": "排版",
        "description": "标题与关键词的整体排布方式。"
      },
      {
        "key": "showIndex",
        "label": "章节序号",
        "type": "toggle",
        "default": true,
        "desc": "超大章节编号水印的显隐。",
        "publicKey": "showIndex",
        "publicLabel": "章节序号",
        "description": "超大章节编号水印的显隐。"
      },
      {
        "key": "showKeywords",
        "label": "关键词",
        "type": "toggle",
        "default": true,
        "desc": "本章关键词标签行的显隐。",
        "publicKey": "showKeywords",
        "publicLabel": "关键词",
        "description": "本章关键词标签行的显隐。"
      },
      {
        "key": "keywordCount",
        "label": "关键词数量",
        "type": "slider",
        "default": 4,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "展示的关键词数量（2–4）。",
        "publicKey": "keywordCount",
        "publicLabel": "关键词数量",
        "description": "展示的关键词数量（2–4）。"
      },
      {
        "key": "showDecorations",
        "label": "装饰文案",
        "type": "toggle",
        "default": true,
        "desc": "镜头光斑、背景光晕与条码等装饰的显隐。",
        "publicKey": "showDecorations",
        "publicLabel": "装饰文案",
        "description": "镜头光斑、背景光晕与条码等装饰的显隐。"
      },
      {
        "key": "accentColor",
        "label": "主题色",
        "type": "color",
        "default": "#86D62B",
        "options": [
          "#86D62B",
          "#23C76A",
          "#2F7BFF",
          "#F2A93B",
          "#0E110B"
        ],
        "desc": "品牌强调色。",
        "publicKey": "accentColor",
        "publicLabel": "主题色",
        "description": "品牌强调色。"
      }
    ],
    "defaultProps": {
      "eyebrow": "Chapter",
      "index": "02",
      "title": "市场数据深拆",
      "sub": "融资节奏、集中度与交易规模",
      "lead": "从本章开始进入市场数据扩展部分，围绕融资集中度、季度节奏和金额区间展开。",
      "closing": "下一组页面进入更细的拆解。",
      "keywords": [
        "集中度",
        "季度节奏",
        "峰谷对比",
        "资金贡献"
      ],
      "backgroundVariant": "dark",
      "layout": "left",
      "showIndex": true,
      "showKeywords": true,
      "keywordCount": 4,
      "showDecorations": true,
      "accentColor": "#86D62B"
    }
  },
  {
    "key": "theme07_page017",
    "themeKey": "theme07",
    "pageNumber": 17,
    "layout": "THEME07-017",
    "slot": "deal-map-page",
    "label": "24 16",
    "bgClass": "",
    "controls": [
      {
        "key": "viewMode",
        "label": "图表类型",
        "type": "radio",
        "default": "scatter",
        "options": [
          {
            "value": "scatter",
            "label": "散点"
          },
          {
            "value": "cluster",
            "label": "聚合气泡"
          }
        ],
        "desc": "散点：逐笔交易点阵；聚合气泡：每个区间汇总为一个气泡。",
        "publicKey": "viewMode",
        "publicLabel": "图表类型",
        "description": "散点：逐笔交易点阵；聚合气泡：每个区间汇总为一个气泡。"
      },
      {
        "key": "bandCount",
        "label": "分组数量",
        "type": "slider",
        "default": 4,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "数值区间分组数量（2–4）。",
        "publicKey": "bandCount",
        "publicLabel": "分组数量",
        "description": "数值区间分组数量（2–4）。"
      },
      {
        "key": "bubbleScale",
        "label": "气泡大小",
        "type": "slider",
        "default": 1,
        "min": 0.6,
        "max": 1.4,
        "step": 0.1,
        "desc": "气泡整体大小比例。",
        "publicKey": "bubbleScale",
        "publicLabel": "气泡大小",
        "description": "气泡整体大小比例。"
      },
      {
        "key": "focusEnabled",
        "label": "重点信息",
        "type": "toggle",
        "default": true,
        "desc": "是否高亮某一数值区间作为视觉重点。",
        "publicKey": "focusEnabled",
        "publicLabel": "重点信息",
        "description": "是否高亮某一数值区间作为视觉重点。"
      },
      {
        "key": "focusIndex",
        "label": "重点元素",
        "type": "select",
        "default": 3,
        "options": [
          {
            "value": 0,
            "label": "第 1 组"
          },
          {
            "value": 1,
            "label": "第 2 组"
          },
          {
            "value": 2,
            "label": "第 3 组"
          },
          {
            "value": 3,
            "label": "第 4 组"
          }
        ],
        "desc": "选择被高亮的数值区间。",
        "publicKey": "focusIndex",
        "publicLabel": "重点元素",
        "description": "选择被高亮的数值区间。"
      },
      {
        "key": "showLegend",
        "label": "图例",
        "type": "toggle",
        "default": true,
        "desc": "分类颜色图例的显隐。",
        "publicKey": "showLegend",
        "publicLabel": "图例",
        "description": "分类颜色图例的显隐。"
      },
      {
        "key": "showDecorations",
        "label": "装饰文案",
        "type": "toggle",
        "default": true,
        "desc": "背景光晕与条码等装饰的显隐。",
        "publicKey": "showDecorations",
        "publicLabel": "装饰文案",
        "description": "背景光晕与条码等装饰的显隐。"
      },
      {
        "key": "accentColor",
        "label": "主题色",
        "type": "color",
        "default": "#86D62B",
        "options": [
          "#86D62B",
          "#23C76A",
          "#2F7BFF",
          "#F2A93B",
          "#0E110B"
        ],
        "desc": "品牌强调色。",
        "publicKey": "accentColor",
        "publicLabel": "主题色",
        "description": "品牌强调色。"
      }
    ],
    "defaultProps": {
      "eyebrow": "Deal Map",
      "title": "融资事件规模分层",
      "sub": "大额融资事件地图",
      "lead": "97 笔大额融资可以按金额区间拆成四组，少数超级交易贡献主要融资额。",
      "anchorLead": "97",
      "anchorUnit": "笔",
      "anchorNote": "全年大额事件 · 单笔 ≥1 亿美元",
      "closing": "数量最多的不一定最重要，影响最大的往往是巨额交易。",
      "legendLabel": "气泡大小 = 单笔金额 · 颜色 = 赛道",
      "bands": [
        {
          "range": "1–2 亿",
          "count": 41,
          "mid": 1.5,
          "total": 58
        },
        {
          "range": "2–5 亿",
          "count": 29,
          "mid": 3.5,
          "total": 91
        },
        {
          "range": "5–10 亿",
          "count": 15,
          "mid": 7.5,
          "total": 103
        },
        {
          "range": "≥10 亿",
          "count": 12,
          "mid": 18,
          "total": 718
        }
      ],
      "tracks": [
        {
          "name": "通用大模型",
          "tone": "accent"
        },
        {
          "name": "垂直应用",
          "tone": "ink"
        },
        {
          "name": "基础设施",
          "tone": "pos"
        },
        {
          "name": "AI 芯片",
          "tone": "warn"
        }
      ],
      "viewMode": "scatter",
      "bandCount": 4,
      "bubbleScale": 1,
      "focusEnabled": true,
      "focusIndex": 3,
      "showLegend": true,
      "showDecorations": true,
      "accentColor": "#86D62B"
    }
  },
  {
    "key": "theme07_page018",
    "themeKey": "theme07",
    "pageNumber": 18,
    "layout": "THEME07-018",
    "slot": "cold-start-page",
    "label": "25 17",
    "bgClass": "",
    "controls": [
      {
        "key": "chartType",
        "label": "图表类型",
        "type": "radio",
        "default": "bars",
        "options": [
          {
            "value": "bars",
            "label": "柱状"
          },
          {
            "value": "line",
            "label": "折线"
          },
          {
            "value": "area",
            "label": "面积"
          }
        ],
        "desc": "主图表（月度序列）的呈现方式：柱状 / 折线 / 面积。",
        "publicKey": "chartType",
        "publicLabel": "图表类型",
        "description": "主图表（月度序列）的呈现方式：柱状 / 折线 / 面积。"
      },
      {
        "key": "metricCount",
        "label": "卡片数量",
        "type": "slider",
        "default": 4,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "指标卡数量（2–4）；自动重排为完整网格。",
        "publicKey": "metricCount",
        "publicLabel": "卡片数量",
        "description": "指标卡数量（2–4）；自动重排为完整网格。"
      },
      {
        "key": "focusEnabled",
        "label": "重点信息",
        "type": "toggle",
        "default": true,
        "desc": "是否高亮某一张指标卡作为视觉重点。",
        "publicKey": "focusEnabled",
        "publicLabel": "重点信息",
        "description": "是否高亮某一张指标卡作为视觉重点。"
      },
      {
        "key": "focusIndex",
        "label": "重点元素",
        "type": "select",
        "default": 0,
        "options": [
          {
            "value": 0,
            "label": "第 1 个"
          },
          {
            "value": 1,
            "label": "第 2 个"
          },
          {
            "value": 2,
            "label": "第 3 个"
          },
          {
            "value": 3,
            "label": "第 4 个"
          }
        ],
        "desc": "选择被高亮的指标卡。",
        "publicKey": "focusIndex",
        "publicLabel": "重点元素",
        "description": "选择被高亮的指标卡。"
      },
      {
        "key": "showContext",
        "label": "背景对比",
        "type": "toggle",
        "default": true,
        "desc": "全年时间段对比条的显隐，用于交代当前时间段在全年中的位置。",
        "publicKey": "showContext",
        "publicLabel": "背景对比",
        "description": "全年时间段对比条的显隐，用于交代当前时间段在全年中的位置。"
      },
      {
        "key": "showDecorations",
        "label": "装饰文案",
        "type": "toggle",
        "default": true,
        "desc": "背景光晕与条码等装饰的显隐。",
        "publicKey": "showDecorations",
        "publicLabel": "装饰文案",
        "description": "背景光晕与条码等装饰的显隐。"
      },
      {
        "key": "accentColor",
        "label": "主题色",
        "type": "color",
        "default": "#86D62B",
        "options": [
          "#86D62B",
          "#23C76A",
          "#2F7BFF",
          "#F2A93B",
          "#0E110B"
        ],
        "desc": "品牌强调色，作用于图表、时间段标记与高亮卡。",
        "publicKey": "accentColor",
        "publicLabel": "主题色",
        "description": "品牌强调色，作用于图表、时间段标记与高亮卡。"
      }
    ],
    "defaultProps": {
      "eyebrow": "Quarter Breakdown",
      "marker": "Q1",
      "season": "2024 第一季度 · 起步",
      "title": "冷启动季度",
      "titleTail": "Q1 融资拆解",
      "lead": "Q1 交易数量稳定，但整体金额尚未进入全年高峰，更像上一年度项目延续，市场仍在等待新一轮验证。",
      "closing": "全年热度从保守启动开始。",
      "chartLabel": "月度融资额 / 亿美元",
      "months": [
        {
          "m": "1月",
          "amount": 45
        },
        {
          "m": "2月",
          "amount": 58
        },
        {
          "m": "3月",
          "amount": 59
        }
      ],
      "context": [
        {
          "q": "Q1",
          "amount": 162
        },
        {
          "q": "Q2",
          "amount": 284
        },
        {
          "q": "Q3",
          "amount": 318
        },
        {
          "q": "Q4",
          "amount": 206
        }
      ],
      "contextActive": 0,
      "contextLabel": "全年季度对比",
      "metrics": [
        {
          "label": "融资额",
          "value": "162",
          "unit": "亿美元"
        },
        {
          "label": "事件数",
          "value": "18",
          "unit": "笔"
        },
        {
          "label": "平均单笔",
          "value": "9.0",
          "unit": "亿美元"
        },
        {
          "label": "最大单笔",
          "value": "32",
          "unit": "亿美元"
        }
      ],
      "chartType": "bars",
      "metricCount": 4,
      "focusEnabled": true,
      "focusIndex": 0,
      "showContext": true,
      "showDecorations": true,
      "accentColor": "#86D62B"
    }
  },
  {
    "key": "theme07_page019",
    "themeKey": "theme07",
    "pageNumber": 19,
    "layout": "THEME07-019",
    "slot": "accelerate-page",
    "label": "26 18",
    "bgClass": "",
    "controls": [
      {
        "key": "rowCount",
        "label": "行数量",
        "type": "slider",
        "default": 4,
        "min": 3,
        "max": 5,
        "step": 1,
        "desc": "表格展示的行数量（3–5）。",
        "publicKey": "rowCount",
        "publicLabel": "行数量",
        "description": "表格展示的行数量（3–5）。"
      },
      {
        "key": "showChange",
        "label": "环比列",
        "type": "toggle",
        "default": true,
        "desc": "环比变化列（涨跌徽标）的显隐。",
        "publicKey": "showChange",
        "publicLabel": "环比列",
        "description": "环比变化列（涨跌徽标）的显隐。"
      },
      {
        "key": "showJudgment",
        "label": "判断列",
        "type": "toggle",
        "default": true,
        "desc": "信号判断列的显隐；关闭后表格更紧凑。",
        "publicKey": "showJudgment",
        "publicLabel": "判断列",
        "description": "信号判断列的显隐；关闭后表格更紧凑。"
      },
      {
        "key": "focusEnabled",
        "label": "重点信息",
        "type": "toggle",
        "default": true,
        "desc": "是否高亮某一行作为视觉重点。",
        "publicKey": "focusEnabled",
        "publicLabel": "重点信息",
        "description": "是否高亮某一行作为视觉重点。"
      },
      {
        "key": "focusIndex",
        "label": "重点元素",
        "type": "select",
        "default": 0,
        "options": [
          {
            "value": 0,
            "label": "第 1 行"
          },
          {
            "value": 1,
            "label": "第 2 行"
          },
          {
            "value": 2,
            "label": "第 3 行"
          },
          {
            "value": 3,
            "label": "第 4 行"
          },
          {
            "value": 4,
            "label": "第 5 行"
          }
        ],
        "desc": "选择被高亮的行。",
        "publicKey": "focusIndex",
        "publicLabel": "重点元素",
        "description": "选择被高亮的行。"
      },
      {
        "key": "showDecorations",
        "label": "装饰文案",
        "type": "toggle",
        "default": true,
        "desc": "背景光晕与条码等装饰的显隐。",
        "publicKey": "showDecorations",
        "publicLabel": "装饰文案",
        "description": "背景光晕与条码等装饰的显隐。"
      },
      {
        "key": "accentColor",
        "label": "主题色",
        "type": "color",
        "default": "#86D62B",
        "options": [
          "#86D62B",
          "#23C76A",
          "#2F7BFF",
          "#F2A93B",
          "#0E110B"
        ],
        "desc": "品牌强调色，作用于时间段标记、高亮行与锚点数字。",
        "publicKey": "accentColor",
        "publicLabel": "主题色",
        "description": "品牌强调色，作用于时间段标记、高亮行与锚点数字。"
      }
    ],
    "defaultProps": {
      "eyebrow": "Quarter Breakdown",
      "marker": "Q2",
      "season": "2024 第二季度 · 加速",
      "title": "加速季度",
      "titleTail": "Q2 融资拆解",
      "lead": "Q2 进入明显加速期，模型、应用和基础设施同步升温，资本从模型叙事扩散到应用和基础设施。",
      "statLine": "Q2 融资额 284 亿美元 · 26 笔事件 · 平均单笔 10.9 亿美元",
      "anchorValue": "+75.3%",
      "anchorLabel": "季度融资额环比增长",
      "closing": "Q2 是融资窗口打开的关键节点。",
      "colHeads": {
        "dim": "赛道方向",
        "val": "Q2 融资额",
        "chg": "环比",
        "note": "加速信号"
      },
      "rows": [
        {
          "dim": "通用大模型",
          "val": "120",
          "unit": "亿美元",
          "chg": "+66.0%",
          "note": "头部融资集中释放"
        },
        {
          "dim": "垂直应用",
          "val": "74",
          "unit": "亿美元",
          "chg": "+88.0%",
          "note": "应用侧需求加速"
        },
        {
          "dim": "基础设施",
          "val": "54",
          "unit": "亿美元",
          "chg": "+69.0%",
          "note": "算力需求拉动"
        },
        {
          "dim": "AI 芯片",
          "val": "22",
          "unit": "亿美元",
          "chg": "+41.0%",
          "note": "硬件稳步跟进"
        },
        {
          "dim": "安全与数据",
          "val": "14",
          "unit": "亿美元",
          "chg": "+33.0%",
          "note": "配套设施补位"
        }
      ],
      "rowCount": 4,
      "showChange": true,
      "showJudgment": true,
      "focusEnabled": true,
      "focusIndex": 0,
      "showDecorations": true,
      "accentColor": "#86D62B"
    }
  },
  {
    "key": "theme07_page020",
    "themeKey": "theme07",
    "pageNumber": 20,
    "layout": "THEME07-020",
    "slot": "peak-page",
    "label": "27 19",
    "bgClass": "",
    "controls": [
      {
        "key": "chartType",
        "label": "图表类型",
        "type": "radio",
        "default": "area",
        "options": [
          {
            "value": "area",
            "label": "面积图"
          },
          {
            "value": "bars",
            "label": "柱状图"
          }
        ],
        "desc": "主视觉信息图表样式：高亮面积图 / 月度柱状图。",
        "publicKey": "chartType",
        "publicLabel": "图表类型",
        "description": "主视觉信息图表样式：高亮面积图 / 月度柱状图。"
      },
      {
        "key": "metricCount",
        "label": "卡片数量",
        "type": "slider",
        "default": 4,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "峰值指标卡数量（2–4）。",
        "publicKey": "metricCount",
        "publicLabel": "卡片数量",
        "description": "峰值指标卡数量（2–4）。"
      },
      {
        "key": "focusEnabled",
        "label": "重点信息",
        "type": "toggle",
        "default": true,
        "desc": "是否高亮某一张指标卡作为视觉重点。",
        "publicKey": "focusEnabled",
        "publicLabel": "重点信息",
        "description": "是否高亮某一张指标卡作为视觉重点。"
      },
      {
        "key": "focusIndex",
        "label": "重点元素",
        "type": "select",
        "default": 0,
        "options": [
          {
            "value": 0,
            "label": "第 1 个"
          },
          {
            "value": 1,
            "label": "第 2 个"
          },
          {
            "value": 2,
            "label": "第 3 个"
          },
          {
            "value": 3,
            "label": "第 4 个"
          }
        ],
        "desc": "选择被高亮的指标卡。",
        "publicKey": "focusIndex",
        "publicLabel": "重点元素",
        "description": "选择被高亮的指标卡。"
      },
      {
        "key": "showPeakMarker",
        "label": "峰值标记",
        "type": "toggle",
        "default": true,
        "desc": "图表上峰值月份的标记与数值气泡的显隐。",
        "publicKey": "showValueLabels",
        "publicLabel": "峰值标记",
        "description": "图表上峰值月份的标记与数值气泡的显隐。"
      },
      {
        "key": "showAverage",
        "label": "均值线",
        "type": "toggle",
        "default": true,
        "desc": "全年月度均值参考线的显隐。",
        "publicKey": "showAverage",
        "publicLabel": "均值线",
        "description": "全年月度均值参考线的显隐。"
      },
      {
        "key": "showQuarterBand",
        "label": "区间高亮",
        "type": "toggle",
        "default": true,
        "desc": "当前时间段（Q3 · 7—9 月）高亮背景带的显隐。",
        "publicKey": "showQuarterBand",
        "publicLabel": "区间高亮",
        "description": "当前时间段（Q3 · 7—9 月）高亮背景带的显隐。"
      },
      {
        "key": "showDecorations",
        "label": "装饰文案",
        "type": "toggle",
        "default": true,
        "desc": "背景光晕与条码等装饰的显隐。",
        "publicKey": "showDecorations",
        "publicLabel": "装饰文案",
        "description": "背景光晕与条码等装饰的显隐。"
      },
      {
        "key": "accentColor",
        "label": "主题色",
        "type": "color",
        "default": "#86D62B",
        "options": [
          "#86D62B",
          "#23C76A",
          "#2F7BFF",
          "#F2A93B",
          "#0E110B"
        ],
        "desc": "品牌强调色，作用于时间段标记、图表与高亮卡。",
        "publicKey": "accentColor",
        "publicLabel": "主题色",
        "description": "品牌强调色，作用于时间段标记、图表与高亮卡。"
      }
    ],
    "defaultProps": {
      "eyebrow": "Quarter Breakdown",
      "marker": "Q3",
      "season": "2024 第三季度 · 峰值",
      "title": "全年峰值季度",
      "titleTail": "Q3 融资拆解",
      "lead": "Q3 融资额和事件数均达到全年最高，是市场情绪高点，强度来自头部公司融资和多赛道同时活跃。",
      "closing": "高峰之后，市场开始从热度转向筛选。",
      "chartLabel": "全年月度融资额 / 亿美元",
      "peakTag": "全年峰值",
      "avgLabel": "月度均值 80.8",
      "metrics": [
        {
          "label": "融资额",
          "value": "318",
          "unit": "亿美元"
        },
        {
          "label": "事件数",
          "value": "31",
          "unit": "笔"
        },
        {
          "label": "平均单笔",
          "value": "10.3",
          "unit": "亿美元"
        },
        {
          "label": "峰值月份",
          "value": "8",
          "unit": "月"
        }
      ],
      "months": [
        45,
        58,
        59,
        86,
        105,
        93,
        92,
        118,
        108,
        73,
        81,
        52
      ],
      "monthLabels": [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12"
      ],
      "peakIndex": 7,
      "avg": 80.8,
      "q3Range": [
        6,
        8
      ],
      "chartType": "area",
      "metricCount": 4,
      "focusEnabled": true,
      "focusIndex": 0,
      "showPeakMarker": true,
      "showAverage": true,
      "showQuarterBand": true,
      "showDecorations": true,
      "accentColor": "#86D62B"
    }
  },
  {
    "key": "theme07_page021",
    "themeKey": "theme07",
    "pageNumber": 21,
    "layout": "THEME07-021",
    "slot": "cooldown-page",
    "label": "28 20",
    "bgClass": "",
    "controls": [
      {
        "key": "nodeCount",
        "label": "节点数量",
        "type": "slider",
        "default": 4,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "时间轴 / 曲线上的阶段节点数量（2–4）。",
        "publicKey": "nodeCount",
        "publicLabel": "节点数量",
        "description": "时间轴 / 曲线上的阶段节点数量（2–4）。"
      },
      {
        "key": "metricCount",
        "label": "卡片数量",
        "type": "slider",
        "default": 4,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "指标卡数量（2–4）。",
        "publicKey": "metricCount",
        "publicLabel": "卡片数量",
        "description": "指标卡数量（2–4）。"
      },
      {
        "key": "focusEnabled",
        "label": "重点信息",
        "type": "toggle",
        "default": true,
        "desc": "是否高亮某一个时间轴节点作为视觉重点。",
        "publicKey": "focusEnabled",
        "publicLabel": "重点信息",
        "description": "是否高亮某一个时间轴节点作为视觉重点。"
      },
      {
        "key": "focusIndex",
        "label": "重点元素",
        "type": "select",
        "default": 3,
        "options": [
          {
            "value": 0,
            "label": "第 1 个"
          },
          {
            "value": 1,
            "label": "第 2 个"
          },
          {
            "value": 2,
            "label": "第 3 个"
          },
          {
            "value": 3,
            "label": "第 4 个"
          }
        ],
        "desc": "选择被高亮的节点。",
        "publicKey": "focusIndex",
        "publicLabel": "重点元素",
        "description": "选择被高亮的节点。"
      },
      {
        "key": "showCurve",
        "label": "趋势曲线",
        "type": "toggle",
        "default": true,
        "desc": "年度回落曲线（面积 + 折线）的显隐。",
        "publicKey": "showCurve",
        "publicLabel": "趋势曲线",
        "description": "年度回落曲线（面积 + 折线）的显隐。"
      },
      {
        "key": "showBaseline",
        "label": "基准参考线",
        "type": "toggle",
        "default": true,
        "desc": "年初水平虚线参考线的显隐，用于交代“仍处高位”。",
        "publicKey": "showBaseline",
        "publicLabel": "基准参考线",
        "description": "年初水平虚线参考线的显隐，用于交代“仍处高位”。"
      },
      {
        "key": "showDecorations",
        "label": "装饰文案",
        "type": "toggle",
        "default": true,
        "desc": "背景光晕与条码等装饰的显隐。",
        "publicKey": "showDecorations",
        "publicLabel": "装饰文案",
        "description": "背景光晕与条码等装饰的显隐。"
      },
      {
        "key": "accentColor",
        "label": "主题色",
        "type": "color",
        "default": "#86D62B",
        "options": [
          "#86D62B",
          "#23C76A",
          "#2F7BFF",
          "#F2A93B",
          "#0E110B"
        ],
        "desc": "品牌强调色，作用于曲线、高亮节点与指标卡。",
        "publicKey": "accentColor",
        "publicLabel": "主题色",
        "description": "品牌强调色，作用于曲线、高亮节点与指标卡。"
      }
    ],
    "defaultProps": {
      "eyebrow": "Quarter Breakdown",
      "marker": "Q4",
      "season": "2024 第四季度 · 回落",
      "title": "理性回落季度",
      "titleTail": "Q4 融资拆解",
      "lead": "Q4 较 Q3 回落，但仍高于年初水平，说明资金并未完全撤离，资本开始挑选确定性更高的标的。",
      "closing": "回落不是终点，而是分化的开始。",
      "baselineLabel": "年初水平 · 162",
      "chartLabel": "全年季度融资额 / 亿美元",
      "declineLabel": "较 Q3",
      "declineValue": "-35.2%",
      "nodes": [
        {
          "q": "Q1",
          "amount": 162,
          "phase": "起步",
          "note": "保守启动"
        },
        {
          "q": "Q2",
          "amount": 284,
          "phase": "加速",
          "note": "窗口打开"
        },
        {
          "q": "Q3",
          "amount": 318,
          "phase": "峰值",
          "note": "情绪高点"
        },
        {
          "q": "Q4",
          "amount": 206,
          "phase": "回落",
          "note": "理性筛选"
        }
      ],
      "activeIndex": 3,
      "metrics": [
        {
          "label": "融资额",
          "value": "206",
          "unit": "亿美元"
        },
        {
          "label": "事件数",
          "value": "22",
          "unit": "笔"
        },
        {
          "label": "平均单笔",
          "value": "9.4",
          "unit": "亿美元"
        },
        {
          "label": "较 Q3",
          "value": "-35.2%",
          "unit": "",
          "badge": true
        }
      ],
      "nodeCount": 4,
      "metricCount": 4,
      "focusEnabled": true,
      "focusIndex": 3,
      "showCurve": true,
      "showBaseline": true,
      "showDecorations": true,
      "accentColor": "#86D62B"
    }
  },
  {
    "key": "theme07_page022",
    "themeKey": "theme07",
    "pageNumber": 22,
    "layout": "THEME07-022",
    "slot": "peak-trough-page",
    "label": "29 21",
    "bgClass": "",
    "controls": [
      {
        "key": "chartType",
        "label": "图表类型",
        "type": "radio",
        "default": "bars",
        "options": [
          {
            "value": "bars",
            "label": "柱状"
          },
          {
            "value": "lollipop",
            "label": "棒点"
          }
        ],
        "desc": "主图表样式：实心柱状 / 棒棒糖（细杆 + 圆点）。",
        "publicKey": "chartType",
        "publicLabel": "图表类型",
        "description": "主图表样式：实心柱状 / 棒棒糖（细杆 + 圆点）。"
      },
      {
        "key": "barCount",
        "label": "柱子数量",
        "type": "slider",
        "default": 12,
        "min": 6,
        "max": 12,
        "step": 1,
        "desc": "展示的月份数量（6–12），自右向左裁剪。",
        "publicKey": "barCount",
        "publicLabel": "柱子数量",
        "description": "展示的月份数量（6–12），自右向左裁剪。"
      },
      {
        "key": "highlightExtremes",
        "label": "峰谷高亮",
        "type": "toggle",
        "default": true,
        "desc": "是否用强调色 / 警示色区分峰值与低位月份。",
        "publicKey": "highlightExtremes",
        "publicLabel": "峰谷高亮",
        "description": "是否用强调色 / 警示色区分峰值与低位月份。"
      },
      {
        "key": "showAverage",
        "label": "均值参考线",
        "type": "toggle",
        "default": true,
        "desc": "全年平均水平虚线参考线的显隐。",
        "publicKey": "showAverage",
        "publicLabel": "均值参考线",
        "description": "全年平均水平虚线参考线的显隐。"
      },
      {
        "key": "calloutCount",
        "label": "卡片数量",
        "type": "slider",
        "default": 3,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "峰谷信息卡数量（0–4）；为 0 时仅保留图表。",
        "publicKey": "calloutCount",
        "publicLabel": "卡片数量",
        "description": "峰谷信息卡数量（0–4）；为 0 时仅保留图表。"
      },
      {
        "key": "focusEnabled",
        "label": "重点信息",
        "type": "toggle",
        "default": true,
        "desc": "是否高亮某一张峰谷信息卡。",
        "publicKey": "focusEnabled",
        "publicLabel": "重点信息",
        "description": "是否高亮某一张峰谷信息卡。"
      },
      {
        "key": "focusIndex",
        "label": "重点元素",
        "type": "select",
        "default": 0,
        "options": [
          {
            "value": 0,
            "label": "第 1 个"
          },
          {
            "value": 1,
            "label": "第 2 个"
          },
          {
            "value": 2,
            "label": "第 3 个"
          },
          {
            "value": 3,
            "label": "第 4 个"
          }
        ],
        "desc": "选择被高亮的信息卡。",
        "publicKey": "focusIndex",
        "publicLabel": "重点元素",
        "description": "选择被高亮的信息卡。"
      },
      {
        "key": "showDecorations",
        "label": "装饰文案",
        "type": "toggle",
        "default": true,
        "desc": "背景光晕与条码等装饰的显隐。",
        "publicKey": "showDecorations",
        "publicLabel": "装饰文案",
        "description": "背景光晕与条码等装饰的显隐。"
      },
      {
        "key": "accentColor",
        "label": "主题色",
        "type": "color",
        "default": "#86D62B",
        "options": [
          "#86D62B",
          "#23C76A",
          "#2F7BFF",
          "#F2A93B",
          "#0E110B"
        ],
        "desc": "品牌强调色，作用于峰值柱、均值线与高亮卡。",
        "publicKey": "accentColor",
        "publicLabel": "主题色",
        "description": "品牌强调色，作用于峰值柱、均值线与高亮卡。"
      }
    ],
    "defaultProps": {
      "eyebrow": "Peak and Trough",
      "title": "峰值与低位",
      "sub": "月度峰谷对比",
      "lead": "8 月为全年峰值，1 月为低位，峰谷差体现交易集中度。",
      "closing": "月度波动背后是头部交易节奏。",
      "chartLabel": "月度融资额 / 亿美元",
      "avgLabel": "全年均值",
      "months": [
        {
          "m": "1",
          "amount": 45,
          "kind": "trough"
        },
        {
          "m": "2",
          "amount": 58,
          "kind": "normal"
        },
        {
          "m": "3",
          "amount": 59,
          "kind": "normal"
        },
        {
          "m": "4",
          "amount": 86,
          "kind": "normal"
        },
        {
          "m": "5",
          "amount": 105,
          "kind": "peak"
        },
        {
          "m": "6",
          "amount": 93,
          "kind": "normal"
        },
        {
          "m": "7",
          "amount": 92,
          "kind": "normal"
        },
        {
          "m": "8",
          "amount": 118,
          "kind": "peak"
        },
        {
          "m": "9",
          "amount": 108,
          "kind": "peak"
        },
        {
          "m": "10",
          "amount": 73,
          "kind": "normal"
        },
        {
          "m": "11",
          "amount": 81,
          "kind": "normal"
        },
        {
          "m": "12",
          "amount": 52,
          "kind": "trough"
        }
      ],
      "extremes": [
        {
          "tag": "峰值",
          "m": "8 月",
          "value": "118",
          "unit": "亿美元",
          "dir": "peak"
        },
        {
          "tag": "次高",
          "m": "9 月",
          "value": "108",
          "unit": "亿美元",
          "dir": "peak"
        },
        {
          "tag": "低位",
          "m": "1 月",
          "value": "45",
          "unit": "亿美元",
          "dir": "trough"
        },
        {
          "tag": "年末",
          "m": "12 月",
          "value": "52",
          "unit": "亿美元",
          "dir": "trough"
        }
      ],
      "chartType": "bars",
      "barCount": 12,
      "highlightExtremes": true,
      "showAverage": true,
      "calloutCount": 3,
      "focusEnabled": true,
      "focusIndex": 0,
      "showDecorations": true,
      "accentColor": "#86D62B"
    }
  },
  {
    "key": "theme07_page023",
    "themeKey": "theme07",
    "pageNumber": 23,
    "layout": "THEME07-023",
    "slot": "waterfall-page",
    "label": "30 22",
    "bgClass": "",
    "controls": [
      {
        "key": "stepCount",
        "label": "台阶数量",
        "type": "slider",
        "default": 5,
        "min": 3,
        "max": 5,
        "step": 1,
        "desc": "瀑布图的贡献台阶数量（3–5）；合计自动重算。",
        "publicKey": "stepCount",
        "publicLabel": "台阶数量",
        "description": "瀑布图的贡献台阶数量（3–5）；合计自动重算。"
      },
      {
        "key": "showTotal",
        "label": "合计列",
        "type": "toggle",
        "default": true,
        "desc": "末尾全年合计落地柱的显隐。",
        "publicKey": "showTotal",
        "publicLabel": "合计列",
        "description": "末尾全年合计落地柱的显隐。"
      },
      {
        "key": "showConnectors",
        "label": "连接线",
        "type": "toggle",
        "default": true,
        "desc": "台阶之间的虚线连接线的显隐。",
        "publicKey": "showConnectors",
        "publicLabel": "连接线",
        "description": "台阶之间的虚线连接线的显隐。"
      },
      {
        "key": "showValues",
        "label": "数值标签",
        "type": "toggle",
        "default": true,
        "desc": "每个台阶上方增量数值的显隐。",
        "publicKey": "showValueLabels",
        "publicLabel": "数值标签",
        "description": "每个台阶上方增量数值的显隐。"
      },
      {
        "key": "focusEnabled",
        "label": "重点信息",
        "type": "toggle",
        "default": true,
        "desc": "是否高亮某一个贡献台阶作为视觉重点。",
        "publicKey": "focusEnabled",
        "publicLabel": "重点信息",
        "description": "是否高亮某一个贡献台阶作为视觉重点。"
      },
      {
        "key": "focusIndex",
        "label": "重点元素",
        "type": "select",
        "default": 0,
        "options": [
          {
            "value": 0,
            "label": "第 1 个"
          },
          {
            "value": 1,
            "label": "第 2 个"
          },
          {
            "value": 2,
            "label": "第 3 个"
          },
          {
            "value": 3,
            "label": "第 4 个"
          },
          {
            "value": 4,
            "label": "第 5 个"
          }
        ],
        "desc": "选择被高亮的台阶。",
        "publicKey": "focusIndex",
        "publicLabel": "重点元素",
        "description": "选择被高亮的台阶。"
      },
      {
        "key": "showDecorations",
        "label": "装饰文案",
        "type": "toggle",
        "default": true,
        "desc": "背景光晕与条码等装饰的显隐。",
        "publicKey": "showDecorations",
        "publicLabel": "装饰文案",
        "description": "背景光晕与条码等装饰的显隐。"
      },
      {
        "key": "accentColor",
        "label": "主题色",
        "type": "color",
        "default": "#86D62B",
        "options": [
          "#86D62B",
          "#23C76A",
          "#2F7BFF",
          "#F2A93B",
          "#0E110B"
        ],
        "desc": "品牌强调色，作用于高亮台阶、合计柱与连接线。",
        "publicKey": "accentColor",
        "publicLabel": "主题色",
        "description": "品牌强调色，作用于高亮台阶、合计柱与连接线。"
      }
    ],
    "defaultProps": {
      "eyebrow": "Funding Waterfall",
      "title": "赛道贡献拆分",
      "sub": "融资额贡献瀑布",
      "lead": "全年 970 亿美元由模型、应用、基础设施、芯片和其他方向共同构成。",
      "closing": "大模型制造热度，基础设施和应用承接兑现。",
      "chartLabel": "各赛道累计贡献 / 亿美元",
      "totalLabel": "全年合计",
      "totalUnit": "亿美元",
      "steps": [
        {
          "name": "通用大模型",
          "value": 420,
          "note": "模型层"
        },
        {
          "name": "垂直应用",
          "value": 245,
          "note": "应用层"
        },
        {
          "name": "基础设施",
          "value": 158,
          "note": "基建层"
        },
        {
          "name": "AI 芯片",
          "value": 97,
          "note": "硬件层"
        },
        {
          "name": "其他",
          "value": 50,
          "note": "其他"
        }
      ],
      "stepCount": 5,
      "showTotal": true,
      "showConnectors": true,
      "showValues": true,
      "focusEnabled": true,
      "focusIndex": 0,
      "showDecorations": true,
      "accentColor": "#86D62B"
    }
  },
  {
    "key": "theme07_page024",
    "themeKey": "theme07",
    "pageNumber": 24,
    "layout": "THEME07-024",
    "slot": "deal-size-page",
    "label": "31 23",
    "bgClass": "",
    "controls": [
      {
        "key": "rowCount",
        "label": "行数量",
        "type": "slider",
        "default": 4,
        "min": 3,
        "max": 4,
        "step": 1,
        "desc": "数值区间分组数量（3–4）。",
        "publicKey": "rowCount",
        "publicLabel": "行数量",
        "description": "数值区间分组数量（3–4）。"
      },
      {
        "key": "metricMode",
        "label": "图表类型",
        "type": "radio",
        "default": "both",
        "options": [
          {
            "value": "both",
            "label": "双维"
          },
          {
            "value": "count",
            "label": "仅数量"
          },
          {
            "value": "amount",
            "label": "仅数值"
          }
        ],
        "desc": "展示维度：数量 + 数值对照 / 仅数量 / 仅数值。",
        "publicKey": "metricMode",
        "publicLabel": "图表类型",
        "description": "展示维度：数量 + 数值对照 / 仅数量 / 仅数值。"
      },
      {
        "key": "showValues",
        "label": "数值标签",
        "type": "toggle",
        "default": true,
        "desc": "条形末端数值标签的显隐。",
        "publicKey": "showValueLabels",
        "publicLabel": "数值标签",
        "description": "条形末端数值标签的显隐。"
      },
      {
        "key": "focusEnabled",
        "label": "重点信息",
        "type": "toggle",
        "default": true,
        "desc": "是否高亮某一个数值区间作为视觉重点。",
        "publicKey": "focusEnabled",
        "publicLabel": "重点信息",
        "description": "是否高亮某一个数值区间作为视觉重点。"
      },
      {
        "key": "focusIndex",
        "label": "重点元素",
        "type": "select",
        "default": 3,
        "options": [
          {
            "value": 0,
            "label": "第 1 个"
          },
          {
            "value": 1,
            "label": "第 2 个"
          },
          {
            "value": 2,
            "label": "第 3 个"
          },
          {
            "value": 3,
            "label": "第 4 个"
          }
        ],
        "desc": "选择被高亮的区间。",
        "publicKey": "focusIndex",
        "publicLabel": "重点元素",
        "description": "选择被高亮的区间。"
      },
      {
        "key": "showDecorations",
        "label": "装饰文案",
        "type": "toggle",
        "default": true,
        "desc": "背景光晕与条码等装饰的显隐。",
        "publicKey": "showDecorations",
        "publicLabel": "装饰文案",
        "description": "背景光晕与条码等装饰的显隐。"
      },
      {
        "key": "accentColor",
        "label": "主题色",
        "type": "color",
        "default": "#86D62B",
        "options": [
          "#86D62B",
          "#23C76A",
          "#2F7BFF",
          "#F2A93B",
          "#0E110B"
        ],
        "desc": "品牌强调色，作用于数值条与高亮区间。",
        "publicKey": "accentColor",
        "publicLabel": "主题色",
        "description": "品牌强调色，作用于数值条与高亮区间。"
      }
    ],
    "defaultProps": {
      "eyebrow": "Deal Size Split",
      "title": "金额区间结构",
      "sub": "交易规模分布",
      "lead": "大额融资内部仍有层级，低金额段贡献数量，高金额段贡献市场记忆。",
      "closing": "市场被少数超级交易重新定价。",
      "countLabel": "交易数量 / 笔",
      "amountLabel": "融资金额 / 亿美元",
      "rows": [
        {
          "band": "1 — 2 亿美元",
          "count": 41,
          "amount": 58
        },
        {
          "band": "2 — 5 亿美元",
          "count": 29,
          "amount": 91
        },
        {
          "band": "5 — 10 亿美元",
          "count": 15,
          "amount": 103
        },
        {
          "band": "10 亿美元以上",
          "count": 12,
          "amount": 718
        }
      ],
      "rowCount": 4,
      "metricMode": "both",
      "showValues": true,
      "focusEnabled": true,
      "focusIndex": 3,
      "showDecorations": true,
      "accentColor": "#86D62B"
    }
  },
  {
    "key": "theme07_page025",
    "themeKey": "theme07",
    "pageNumber": 25,
    "layout": "THEME07-025",
    "slot": "avg-ticket-page",
    "label": "32 24",
    "bgClass": "",
    "controls": [
      {
        "key": "numberSlant",
        "label": "数字倾斜",
        "type": "toggle",
        "default": true,
        "desc": "主数字是否应用品牌斜切（italic-slant）效果。",
        "publicKey": "numberSlant",
        "publicLabel": "数字倾斜",
        "description": "主数字是否应用品牌斜切（italic-slant）效果。"
      },
      {
        "key": "auxCount",
        "label": "卡片数量",
        "type": "slider",
        "default": 3,
        "min": 0,
        "max": 3,
        "step": 1,
        "desc": "辅助指标数量（0–3）；为 0 时只保留主数字。",
        "publicKey": "auxCount",
        "publicLabel": "卡片数量",
        "description": "辅助指标数量（0–3）；为 0 时只保留主数字。"
      },
      {
        "key": "showCaption",
        "label": "说明文案",
        "type": "toggle",
        "default": true,
        "desc": "主数字下方解释性说明的显隐。",
        "publicKey": "showCaption",
        "publicLabel": "说明文案",
        "description": "主数字下方解释性说明的显隐。"
      },
      {
        "key": "showNote",
        "label": "辅助注释",
        "type": "toggle",
        "default": true,
        "desc": "底部补充注释的显隐。",
        "publicKey": "showNote",
        "publicLabel": "辅助注释",
        "description": "底部补充注释的显隐。"
      },
      {
        "key": "showLens",
        "label": "品牌图形",
        "type": "toggle",
        "default": true,
        "desc": "品牌透镜图形（焦点圆盘）的显隐。",
        "publicKey": "showLens",
        "publicLabel": "品牌图形",
        "description": "品牌透镜图形（焦点圆盘）的显隐。"
      },
      {
        "key": "showDecorations",
        "label": "装饰文案",
        "type": "toggle",
        "default": true,
        "desc": "背景光晕与条码等装饰的显隐。",
        "publicKey": "showDecorations",
        "publicLabel": "装饰文案",
        "description": "背景光晕与条码等装饰的显隐。"
      },
      {
        "key": "accentColor",
        "label": "主题色",
        "type": "color",
        "default": "#86D62B",
        "options": [
          "#86D62B",
          "#23C76A",
          "#2F7BFF",
          "#F2A93B",
          "#0E110B"
        ],
        "desc": "品牌强调色，作用于主数字下划线、品牌图形与点缀。",
        "publicKey": "accentColor",
        "publicLabel": "主题色",
        "description": "品牌强调色，作用于主数字下划线、品牌图形与点缀。"
      }
    ],
    "defaultProps": {
      "eyebrow": "Average Ticket",
      "title": "赛道平均融资额",
      "sub": "平均单笔规模",
      "numLead": "10",
      "numTail": "",
      "numUnit": "亿美元",
      "numCaption": "全年平均单笔融资规模",
      "note": "垂直应用不应只用融资规模评价，更要看收入效率。",
      "closing": "融资规模越大，后续兑现压力越高。",
      "aux": [
        {
          "label": "总事件数",
          "value": "97",
          "unit": "笔"
        },
        {
          "label": "全年融资额",
          "value": "970",
          "unit": "亿美元"
        },
        {
          "label": "最高单笔",
          "value": "64",
          "unit": "亿美元"
        }
      ],
      "numberSlant": true,
      "auxCount": 3,
      "showCaption": true,
      "showNote": true,
      "showLens": true,
      "showDecorations": true,
      "accentColor": "#86D62B"
    }
  },
  {
    "key": "theme07_page026",
    "themeKey": "theme07",
    "pageNumber": 26,
    "layout": "THEME07-026",
    "slot": "investor-page",
    "label": "33 25",
    "bgClass": "",
    "controls": [
      {
        "key": "imageCount",
        "label": "图片数量",
        "type": "slider",
        "default": 3,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "图片墙的图片槽数量（0–4）；为 0 时以品牌图形填充，构图保持完整。",
        "publicKey": "imageCount",
        "publicLabel": "图片数量",
        "description": "图片墙的图片槽数量（0–4）；为 0 时以品牌图形填充，构图保持完整。"
      },
      {
        "key": "imageRatio",
        "label": "图片比例",
        "type": "radio",
        "default": "portrait",
        "options": [
          {
            "value": "portrait",
            "label": "竖图"
          },
          {
            "value": "landscape",
            "label": "横图"
          },
          {
            "value": "square",
            "label": "方形"
          },
          {
            "value": "auto",
            "label": "自适应"
          }
        ],
        "desc": "图片槽比例；自适应会跟随用户上传图片的原始比例并自动居中排布。",
        "publicKey": "imageRatio",
        "publicLabel": "图片比例",
        "description": "图片槽比例；自适应会跟随用户上传图片的原始比例并自动居中排布。"
      },
      {
        "key": "showLabels",
        "label": "说明文案",
        "type": "toggle",
        "default": true,
        "desc": "每张图片上叠加的机构名称 / 角色标签的显隐。",
        "publicKey": "showLabels",
        "publicLabel": "说明文案",
        "description": "每张图片上叠加的机构名称 / 角色标签的显隐。"
      },
      {
        "key": "focusEnabled",
        "label": "重点信息",
        "type": "toggle",
        "default": true,
        "desc": "是否高亮某一张图片作为视觉重点。",
        "publicKey": "focusEnabled",
        "publicLabel": "重点信息",
        "description": "是否高亮某一张图片作为视觉重点。"
      },
      {
        "key": "focusIndex",
        "label": "重点元素",
        "type": "select",
        "default": 0,
        "options": [
          {
            "value": 0,
            "label": "第 1 个"
          },
          {
            "value": 1,
            "label": "第 2 个"
          },
          {
            "value": 2,
            "label": "第 3 个"
          },
          {
            "value": 3,
            "label": "第 4 个"
          }
        ],
        "desc": "选择被高亮的图片。",
        "publicKey": "focusIndex",
        "publicLabel": "重点元素",
        "description": "选择被高亮的图片。"
      },
      {
        "key": "showAnchor",
        "label": "重点数字",
        "type": "toggle",
        "default": true,
        "desc": "右上锚点数字（活跃机构数量）的显隐。",
        "publicKey": "showAnchor",
        "publicLabel": "重点数字",
        "description": "右上锚点数字（活跃机构数量）的显隐。"
      },
      {
        "key": "showDecorations",
        "label": "装饰文案",
        "type": "toggle",
        "default": true,
        "desc": "背景光晕与条码等装饰的显隐。",
        "publicKey": "showDecorations",
        "publicLabel": "装饰文案",
        "description": "背景光晕与条码等装饰的显隐。"
      },
      {
        "key": "accentColor",
        "label": "主题色",
        "type": "color",
        "default": "#86D62B",
        "options": [
          "#86D62B",
          "#23C76A",
          "#2F7BFF",
          "#F2A93B",
          "#0E110B"
        ],
        "desc": "品牌强调色，作用于高亮图片框、机构标签与锚点数字。",
        "publicKey": "accentColor",
        "publicLabel": "主题色",
        "description": "品牌强调色，作用于高亮图片框、机构标签与锚点数字。"
      }
    ],
    "defaultProps": {
      "eyebrow": "Capital Lens",
      "title": "活跃资本图谱",
      "titleTail": "头部投资机构",
      "lead": "大额融资背后是一批高频出手的头部机构，资本正从广撒网转向对头部资产的集中下注。",
      "anchorLead": "48",
      "anchorUnit": "家",
      "anchorNote": "全年参与大额轮次的活跃机构",
      "closing": "钱多不稀缺，稀缺的是愿意下重注的确定性。",
      "slots": [
        {
          "name": "Aperture Ventures",
          "role": "领投 9 笔 · 偏好通用大模型"
        },
        {
          "name": "Northgate Capital",
          "role": "参投 14 笔 · 全赛道布局"
        },
        {
          "name": "Vertex Growth",
          "role": "领投 7 笔 · 押注基础设施"
        },
        {
          "name": "Lumen Partners",
          "role": "参投 11 笔 · 应用层为主"
        }
      ],
      "imageCount": 3,
      "imageRatio": "portrait",
      "showLabels": true,
      "focusEnabled": true,
      "focusIndex": 0,
      "showAnchor": true,
      "showDecorations": true,
      "accentColor": "#86D62B",
      "renderSlot": null
    }
  },
  {
    "key": "theme07_page027",
    "themeKey": "theme07",
    "pageNumber": 27,
    "layout": "THEME07-027",
    "slot": "active-capital-page",
    "label": "34 26",
    "bgClass": "",
    "controls": [
      {
        "key": "rowCount",
        "label": "卡片数量",
        "type": "slider",
        "default": 6,
        "min": 4,
        "max": 7,
        "step": 1,
        "desc": "排行榜展示的机构行数量（4–7）。",
        "publicKey": "rowCount",
        "publicLabel": "卡片数量",
        "description": "排行榜展示的机构行数量（4–7）。"
      },
      {
        "key": "chartType",
        "label": "图表类型",
        "type": "radio",
        "default": "bars",
        "options": [
          {
            "value": "bars",
            "label": "条形"
          },
          {
            "value": "lollipop",
            "label": "棒点"
          }
        ],
        "desc": "排名条的呈现方式：实心条形 / 棒点（lollipop）。",
        "publicKey": "chartType",
        "publicLabel": "图表类型",
        "description": "排名条的呈现方式：实心条形 / 棒点（lollipop）。"
      },
      {
        "key": "showValues",
        "label": "数值标签",
        "type": "toggle",
        "default": true,
        "desc": "每条排名条末端的数值标签显隐。",
        "publicKey": "showValueLabels",
        "publicLabel": "数值标签",
        "description": "每条排名条末端的数值标签显隐。"
      },
      {
        "key": "showTags",
        "label": "说明文案",
        "type": "toggle",
        "default": true,
        "desc": "每家机构的偏好分类标签显隐。",
        "publicKey": "showTags",
        "publicLabel": "说明文案",
        "description": "每家机构的偏好分类标签显隐。"
      },
      {
        "key": "focusEnabled",
        "label": "重点信息",
        "type": "toggle",
        "default": true,
        "desc": "是否高亮某一行作为视觉重点。",
        "publicKey": "focusEnabled",
        "publicLabel": "重点信息",
        "description": "是否高亮某一行作为视觉重点。"
      },
      {
        "key": "focusIndex",
        "label": "重点元素",
        "type": "select",
        "default": 0,
        "options": [
          {
            "value": 0,
            "label": "第 1 名"
          },
          {
            "value": 1,
            "label": "第 2 名"
          },
          {
            "value": 2,
            "label": "第 3 名"
          },
          {
            "value": 3,
            "label": "第 4 名"
          },
          {
            "value": 4,
            "label": "第 5 名"
          },
          {
            "value": 5,
            "label": "第 6 名"
          },
          {
            "value": 6,
            "label": "第 7 名"
          }
        ],
        "desc": "选择被高亮的机构行。",
        "publicKey": "focusIndex",
        "publicLabel": "重点元素",
        "description": "选择被高亮的机构行。"
      },
      {
        "key": "showAnchor",
        "label": "重点数字",
        "type": "toggle",
        "default": true,
        "desc": "左侧锚点数字（头部机构覆盖占比）的显隐。",
        "publicKey": "showAnchor",
        "publicLabel": "重点数字",
        "description": "左侧锚点数字（头部机构覆盖占比）的显隐。"
      },
      {
        "key": "showDecorations",
        "label": "装饰文案",
        "type": "toggle",
        "default": true,
        "desc": "背景光晕与条码等装饰的显隐。",
        "publicKey": "showDecorations",
        "publicLabel": "装饰文案",
        "description": "背景光晕与条码等装饰的显隐。"
      },
      {
        "key": "accentColor",
        "label": "主题色",
        "type": "color",
        "default": "#86D62B",
        "options": [
          "#86D62B",
          "#23C76A",
          "#2F7BFF",
          "#F2A93B",
          "#0E110B"
        ],
        "desc": "品牌强调色，作用于高亮行、排名条与锚点数字。",
        "publicKey": "accentColor",
        "publicLabel": "主题色",
        "description": "品牌强调色，作用于高亮行、排名条与锚点数字。"
      }
    ],
    "defaultProps": {
      "eyebrow": "Active Capital",
      "title": "最活跃投资机构",
      "titleTail": "出手次数 Top",
      "lead": "头部机构的出手频次远高于市场平均，少数几家几乎参与了全年所有标志性轮次。",
      "anchorLead": "38%",
      "anchorNote": "前 6 家机构覆盖的大额轮次占比",
      "closing": "出手越密集，越能定义下一轮叙事。",
      "axisLabel": "参与大额轮次 / 笔",
      "rows": [
        {
          "name": "Northgate Capital",
          "tag": "全赛道布局",
          "val": 14
        },
        {
          "name": "Lumen Partners",
          "tag": "应用层为主",
          "val": 11
        },
        {
          "name": "Aperture Ventures",
          "tag": "通用大模型",
          "val": 9
        },
        {
          "name": "Vertex Growth",
          "tag": "基础设施",
          "val": 7
        },
        {
          "name": "Meridian Fund",
          "tag": "安全与数据",
          "val": 6
        },
        {
          "name": "Cobalt Equity",
          "tag": "AI 芯片",
          "val": 5
        },
        {
          "name": "Harbor Lane",
          "tag": "早期种子",
          "val": 4
        }
      ],
      "rowCount": 6,
      "chartType": "bars",
      "showValues": true,
      "showTags": true,
      "focusEnabled": true,
      "focusIndex": 0,
      "showAnchor": true,
      "showDecorations": true,
      "accentColor": "#86D62B"
    }
  },
  {
    "key": "theme07_page028",
    "themeKey": "theme07",
    "pageNumber": 28,
    "layout": "THEME07-028",
    "slot": "concentration-page",
    "label": "35 28",
    "bgClass": "",
    "controls": [
      {
        "key": "numberSlant",
        "label": "数字倾斜",
        "type": "toggle",
        "default": true,
        "desc": "主数字是否应用品牌斜切（italic-slant）效果。",
        "publicKey": "numberSlant",
        "publicLabel": "数字倾斜",
        "description": "主数字是否应用品牌斜切（italic-slant）效果。"
      },
      {
        "key": "tierCount",
        "label": "卡片数量",
        "type": "slider",
        "default": 3,
        "min": 2,
        "max": 3,
        "step": 1,
        "desc": "份额条中显式展示的头部分层数量（2–3）；剩余自动并入「其他」。",
        "publicKey": "tierCount",
        "publicLabel": "卡片数量",
        "description": "份额条中显式展示的头部分层数量（2–3）；剩余自动并入「其他」。"
      },
      {
        "key": "showRemainder",
        "label": "其他分段",
        "type": "toggle",
        "default": true,
        "desc": "是否在份额条末尾补上「其他机构」剩余分段。",
        "publicKey": "showRemainder",
        "publicLabel": "其他分段",
        "description": "是否在份额条末尾补上「其他机构」剩余分段。"
      },
      {
        "key": "showShareBar",
        "label": "份额图表",
        "type": "toggle",
        "default": true,
        "desc": "堆叠份额条（按机构排名分层）的显隐。",
        "publicKey": "showShareBar",
        "publicLabel": "份额图表",
        "description": "堆叠份额条（按机构排名分层）的显隐。"
      },
      {
        "key": "auxCount",
        "label": "辅助数量",
        "type": "slider",
        "default": 3,
        "min": 0,
        "max": 3,
        "step": 1,
        "desc": "辅助指标数量（0–3）；为 0 时只保留主数字。",
        "publicKey": "auxCount",
        "publicLabel": "辅助数量",
        "description": "辅助指标数量（0–3）；为 0 时只保留主数字。"
      },
      {
        "key": "showNote",
        "label": "辅助注释",
        "type": "toggle",
        "default": true,
        "desc": "底部补充注释的显隐。",
        "publicKey": "showNote",
        "publicLabel": "辅助注释",
        "description": "底部补充注释的显隐。"
      },
      {
        "key": "showLens",
        "label": "品牌图形",
        "type": "toggle",
        "default": true,
        "desc": "品牌透镜图形（焦点圆盘）的显隐。",
        "publicKey": "showLens",
        "publicLabel": "品牌图形",
        "description": "品牌透镜图形（焦点圆盘）的显隐。"
      },
      {
        "key": "showDecorations",
        "label": "装饰文案",
        "type": "toggle",
        "default": true,
        "desc": "背景光晕与条码等装饰的显隐。",
        "publicKey": "showDecorations",
        "publicLabel": "装饰文案",
        "description": "背景光晕与条码等装饰的显隐。"
      },
      {
        "key": "accentColor",
        "label": "主题色",
        "type": "color",
        "default": "#86D62B",
        "options": [
          "#86D62B",
          "#23C76A",
          "#2F7BFF",
          "#F2A93B",
          "#0E110B"
        ],
        "desc": "品牌强调色，作用于主数字下划线、份额条与品牌图形。",
        "publicKey": "accentColor",
        "publicLabel": "主题色",
        "description": "品牌强调色，作用于主数字下划线、份额条与品牌图形。"
      }
    ],
    "defaultProps": {
      "eyebrow": "Capital Concentration",
      "title": "资本集中度",
      "sub": "头部集中",
      "numLead": "42",
      "numTail": "%",
      "numCaption": "全年大额融资中，由 Top 10 机构主导轮次贡献的比例",
      "note": "集中不是终点，而是下一轮分化的起点。",
      "closing": "当资本向头部聚拢，中长尾的窗口正在收窄。",
      "barTitle": "融资额份额 · 按机构排名分层",
      "tiers": [
        {
          "label": "Top 3 机构",
          "v": 22
        },
        {
          "label": "第 4–6 名",
          "v": 11
        },
        {
          "label": "第 7–10 名",
          "v": 9
        }
      ],
      "remainderLabel": "其他机构",
      "aux": [
        {
          "label": "活跃机构",
          "value": "48",
          "unit": "家"
        },
        {
          "label": "Top10 覆盖轮次",
          "value": "37",
          "unit": "笔"
        },
        {
          "label": "平均领投规模",
          "value": "14",
          "unit": "亿美元"
        }
      ],
      "numberSlant": true,
      "tierCount": 3,
      "showRemainder": true,
      "showShareBar": true,
      "auxCount": 3,
      "showNote": true,
      "showLens": true,
      "showDecorations": true,
      "accentColor": "#86D62B"
    }
  },
  {
    "key": "theme07_page029",
    "themeKey": "theme07",
    "pageNumber": 29,
    "layout": "THEME07-029",
    "slot": "syndicate-page",
    "label": "36 27",
    "bgClass": "",
    "controls": [
      {
        "key": "rowCount",
        "label": "行数量",
        "type": "slider",
        "default": 5,
        "min": 3,
        "max": 6,
        "step": 1,
        "desc": "表格展示的行数量（3–6）。",
        "publicKey": "rowCount",
        "publicLabel": "行数量",
        "description": "表格展示的行数量（3–6）。"
      },
      {
        "key": "showRound",
        "label": "阶段列",
        "type": "toggle",
        "default": true,
        "desc": "数值阶段列的显隐。",
        "publicKey": "showStage",
        "publicLabel": "阶段列",
        "description": "数值阶段列的显隐。"
      },
      {
        "key": "showSyndicate",
        "label": "阵容列",
        "type": "toggle",
        "default": true,
        "desc": "领投 / 跟投阵容列（机构缩写徽标）的显隐；关闭后表格更紧凑。",
        "publicKey": "showSyndicate",
        "publicLabel": "阵容列",
        "description": "领投 / 跟投阵容列（机构缩写徽标）的显隐；关闭后表格更紧凑。"
      },
      {
        "key": "focusEnabled",
        "label": "重点信息",
        "type": "toggle",
        "default": true,
        "desc": "是否高亮某一行作为视觉重点。",
        "publicKey": "focusEnabled",
        "publicLabel": "重点信息",
        "description": "是否高亮某一行作为视觉重点。"
      },
      {
        "key": "focusIndex",
        "label": "重点元素",
        "type": "select",
        "default": 0,
        "options": [
          {
            "value": 0,
            "label": "第 1 行"
          },
          {
            "value": 1,
            "label": "第 2 行"
          },
          {
            "value": 2,
            "label": "第 3 行"
          },
          {
            "value": 3,
            "label": "第 4 行"
          },
          {
            "value": 4,
            "label": "第 5 行"
          },
          {
            "value": 5,
            "label": "第 6 行"
          }
        ],
        "desc": "选择被高亮的行。",
        "publicKey": "focusIndex",
        "publicLabel": "重点元素",
        "description": "选择被高亮的行。"
      },
      {
        "key": "showStatLine",
        "label": "说明文案",
        "type": "toggle",
        "default": true,
        "desc": "标题下方汇总统计行的显隐。",
        "publicKey": "showStatLine",
        "publicLabel": "说明文案",
        "description": "标题下方汇总统计行的显隐。"
      },
      {
        "key": "showDecorations",
        "label": "装饰文案",
        "type": "toggle",
        "default": true,
        "desc": "背景光晕与条码等装饰的显隐。",
        "publicKey": "showDecorations",
        "publicLabel": "装饰文案",
        "description": "背景光晕与条码等装饰的显隐。"
      },
      {
        "key": "accentColor",
        "label": "主题色",
        "type": "color",
        "default": "#86D62B",
        "options": [
          "#86D62B",
          "#23C76A",
          "#2F7BFF",
          "#F2A93B",
          "#0E110B"
        ],
        "desc": "品牌强调色，作用于高亮行、阵容徽标与点缀。",
        "publicKey": "accentColor",
        "publicLabel": "主题色",
        "description": "品牌强调色，作用于高亮行、阵容徽标与点缀。"
      }
    ],
    "defaultProps": {
      "eyebrow": "Notable Deals",
      "title": "代表性交易",
      "titleTail": "领投阵容",
      "lead": "少数几笔超大额轮次几乎定义了全年节奏，背后是稳定复现的领投与跟投组合。",
      "statLine": "Top 6 交易合计 412 亿美元 · 占全年大额融资的 42%",
      "colHeads": {
        "co": "公司",
        "dim": "赛道",
        "val": "融资额",
        "round": "轮次",
        "syn": "领投 / 跟投阵容"
      },
      "rows": [
        {
          "co": "Helix AI",
          "dim": "通用大模型",
          "val": "64",
          "unit": "亿美元",
          "round": "F 轮",
          "syn": [
            "NG",
            "AP",
            "VG"
          ]
        },
        {
          "co": "Cortex Labs",
          "dim": "基础设施",
          "val": "58",
          "unit": "亿美元",
          "round": "E 轮",
          "syn": [
            "VG",
            "NG",
            "CO"
          ]
        },
        {
          "co": "Lumina",
          "dim": "垂直应用",
          "val": "47",
          "unit": "亿美元",
          "round": "D 轮",
          "syn": [
            "LP",
            "NG",
            "ME"
          ]
        },
        {
          "co": "Synapse",
          "dim": "AI 芯片",
          "val": "36",
          "unit": "亿美元",
          "round": "D 轮",
          "syn": [
            "CO",
            "VG",
            "AP"
          ]
        },
        {
          "co": "Verda",
          "dim": "安全与数据",
          "val": "24",
          "unit": "亿美元",
          "round": "C 轮",
          "syn": [
            "ME",
            "LP",
            "HL"
          ]
        },
        {
          "co": "Atlas Mind",
          "dim": "通用大模型",
          "val": "18",
          "unit": "亿美元",
          "round": "C 轮",
          "syn": [
            "AP",
            "NG",
            "HL"
          ]
        }
      ],
      "rowCount": 5,
      "showRound": true,
      "showSyndicate": true,
      "focusEnabled": true,
      "focusIndex": 0,
      "showStatLine": true,
      "showDecorations": true,
      "accentColor": "#86D62B"
    }
  },
  {
    "key": "theme07_page030",
    "themeKey": "theme07",
    "pageNumber": 30,
    "layout": "THEME07-030",
    "slot": "knowledge-page",
    "label": "37 29",
    "bgClass": "",
    "controls": [
      {
        "key": "imageCount",
        "label": "图片数量",
        "type": "slider",
        "default": 1,
        "min": 0,
        "max": 2,
        "step": 1,
        "desc": "主视觉区图片槽数量（0–2）；为 0 时以品牌图形填充，构图保持完整。",
        "publicKey": "imageCount",
        "publicLabel": "图片数量",
        "description": "主视觉区图片槽数量（0–2）；为 0 时以品牌图形填充，构图保持完整。"
      },
      {
        "key": "imageRatio",
        "label": "图片比例",
        "type": "radio",
        "default": "portrait",
        "options": [
          {
            "value": "portrait",
            "label": "竖图"
          },
          {
            "value": "landscape",
            "label": "横图"
          },
          {
            "value": "square",
            "label": "方形"
          },
          {
            "value": "auto",
            "label": "自适应"
          }
        ],
        "desc": "图片槽比例；自适应会跟随用户上传图片的原始比例并自动居中排布。",
        "publicKey": "imageRatio",
        "publicLabel": "图片比例",
        "description": "图片槽比例；自适应会跟随用户上传图片的原始比例并自动居中排布。"
      },
      {
        "key": "metricCount",
        "label": "卡片数量",
        "type": "slider",
        "default": 4,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "指标栏条目数量（2–4）。",
        "publicKey": "itemCount",
        "publicLabel": "卡片数量",
        "description": "指标栏条目数量（2–4）。"
      },
      {
        "key": "focusEnabled",
        "label": "重点信息",
        "type": "toggle",
        "default": true,
        "desc": "是否高亮某一条指标作为视觉重点。",
        "publicKey": "focusEnabled",
        "publicLabel": "重点信息",
        "description": "是否高亮某一条指标作为视觉重点。"
      },
      {
        "key": "focusIndex",
        "label": "重点元素",
        "type": "select",
        "default": 0,
        "options": [
          {
            "value": 0,
            "label": "第 1 个"
          },
          {
            "value": 1,
            "label": "第 2 个"
          },
          {
            "value": 2,
            "label": "第 3 个"
          },
          {
            "value": 3,
            "label": "第 4 个"
          }
        ],
        "desc": "选择被高亮的指标。",
        "publicKey": "focusIndex",
        "publicLabel": "重点元素",
        "description": "选择被高亮的指标。"
      },
      {
        "key": "showProgress",
        "label": "进度指标",
        "type": "toggle",
        "default": true,
        "desc": "底部渗透 / 采用率进度条的显隐。",
        "publicKey": "showProgress",
        "publicLabel": "进度指标",
        "description": "底部渗透 / 采用率进度条的显隐。"
      },
      {
        "key": "showDecorations",
        "label": "装饰文案",
        "type": "toggle",
        "default": true,
        "desc": "背景光晕、图片角标与条码等装饰的显隐。",
        "publicKey": "showDecorations",
        "publicLabel": "装饰文案",
        "description": "背景光晕、图片角标与条码等装饰的显隐。"
      },
      {
        "key": "accentColor",
        "label": "主题色",
        "type": "color",
        "default": "#86D62B",
        "options": [
          "#86D62B",
          "#23C76A",
          "#2F7BFF",
          "#F2A93B",
          "#0E110B"
        ],
        "desc": "品牌强调色，作用于分类标记、高亮指标与进度条。",
        "publicKey": "accentColor",
        "publicLabel": "主题色",
        "description": "品牌强调色，作用于分类标记、高亮指标与进度条。"
      }
    ],
    "defaultProps": {
      "eyebrow": "Enterprise Search",
      "segment": "企业搜索赛道",
      "title": "知识入口机会",
      "titleTail": "企业搜索赛道",
      "lead": "企业搜索是较早形成明确付费场景的应用方向；接入内部知识后，企业搜索具备高频使用场景，成为 AI 应用的重要落地点。",
      "closing": "企业知识入口是 AI 应用的重要落地点。",
      "badge": "企业搜索",
      "metrics": [
        {
          "label": "融资额",
          "value": "38",
          "unit": "亿美元"
        },
        {
          "label": "事件数",
          "value": "9",
          "unit": "笔"
        },
        {
          "label": "平均单笔",
          "value": "4.2",
          "unit": "亿美元"
        },
        {
          "label": "付费客户中位数",
          "value": "620",
          "unit": "家"
        }
      ],
      "progress": {
        "label": "接入内部知识库后的高频检索渗透",
        "value": 58,
        "display": "58%"
      },
      "imageCount": 1,
      "imageRatio": "portrait",
      "metricCount": 4,
      "focusEnabled": true,
      "focusIndex": 0,
      "showProgress": true,
      "showDecorations": true,
      "accentColor": "#86D62B",
      "renderSlot": null
    }
  },
  {
    "key": "theme07_page031",
    "themeKey": "theme07",
    "pageNumber": 31,
    "layout": "THEME07-031",
    "slot": "legal-page",
    "label": "38 30",
    "bgClass": "",
    "controls": [
      {
        "key": "rowCount",
        "label": "行数量",
        "type": "slider",
        "default": 5,
        "min": 3,
        "max": 5,
        "step": 1,
        "desc": "场景表格展示的行数量（3–5）。",
        "publicKey": "rowCount",
        "publicLabel": "行数量",
        "description": "场景表格展示的行数量（3–5）。"
      },
      {
        "key": "showShare",
        "label": "占比列",
        "type": "toggle",
        "default": true,
        "desc": "场景占比列（迷你条 + 数值）的显隐。",
        "publicKey": "showValueLabels",
        "publicLabel": "占比列",
        "description": "场景占比列（迷你条 + 数值）的显隐。"
      },
      {
        "key": "showFlow",
        "label": "流程图",
        "type": "toggle",
        "default": true,
        "desc": "底部横向工作流程条的显隐。",
        "publicKey": "showFlow",
        "publicLabel": "流程图",
        "description": "底部横向工作流程条的显隐。"
      },
      {
        "key": "flowStepCount",
        "label": "流程数量",
        "type": "slider",
        "default": 4,
        "min": 3,
        "max": 5,
        "step": 1,
        "desc": "流程节点数量（3–5）。",
        "publicKey": "flowStepCount",
        "publicLabel": "流程数量",
        "description": "流程节点数量（3–5）。"
      },
      {
        "key": "focusEnabled",
        "label": "重点信息",
        "type": "toggle",
        "default": true,
        "desc": "是否高亮某一行作为视觉重点。",
        "publicKey": "focusEnabled",
        "publicLabel": "重点信息",
        "description": "是否高亮某一行作为视觉重点。"
      },
      {
        "key": "focusIndex",
        "label": "重点元素",
        "type": "select",
        "default": 0,
        "options": [
          {
            "value": 0,
            "label": "第 1 行"
          },
          {
            "value": 1,
            "label": "第 2 行"
          },
          {
            "value": 2,
            "label": "第 3 行"
          },
          {
            "value": 3,
            "label": "第 4 行"
          },
          {
            "value": 4,
            "label": "第 5 行"
          }
        ],
        "desc": "选择被高亮的行。",
        "publicKey": "focusIndex",
        "publicLabel": "重点元素",
        "description": "选择被高亮的行。"
      },
      {
        "key": "showDecorations",
        "label": "装饰文案",
        "type": "toggle",
        "default": true,
        "desc": "背景光晕与条码等装饰的显隐。",
        "publicKey": "showDecorations",
        "publicLabel": "装饰文案",
        "description": "背景光晕与条码等装饰的显隐。"
      },
      {
        "key": "accentColor",
        "label": "主题色",
        "type": "color",
        "default": "#86D62B",
        "options": [
          "#86D62B",
          "#23C76A",
          "#2F7BFF",
          "#F2A93B",
          "#0E110B"
        ],
        "desc": "品牌强调色，作用于分类标记、占比条、高亮行与流程节点。",
        "publicKey": "accentColor",
        "publicLabel": "主题色",
        "description": "品牌强调色，作用于分类标记、占比条、高亮行与流程节点。"
      }
    ],
    "defaultProps": {
      "eyebrow": "Legal AI",
      "marker": "法律 AI",
      "segment": "专业服务 · 法律",
      "title": "专业服务高客单价",
      "titleTail": "法律 AI 赛道",
      "lead": "法律 AI 具备高客单价、强专业壁垒和明确效率提升空间；专业服务行业愿意为准确性和审计链路付费。",
      "statLine": "融资额 26 亿美元 · 6 笔事件 · 平均单笔 4.3 亿美元",
      "anchorValue": "46%",
      "anchorLabel": "合同审查占场景比例",
      "closing": "法律 AI 是垂直应用商业化样本。",
      "colHeads": {
        "dim": "场景方向",
        "share": "场景占比",
        "note": "能力说明"
      },
      "rows": [
        {
          "dim": "合同审查",
          "share": 46,
          "note": "条款抽取、风险标注与版本比对"
        },
        {
          "dim": "法律检索",
          "share": 22,
          "note": "判例、法规与内部知识检索"
        },
        {
          "dim": "尽职调查",
          "share": 14,
          "note": "数据室文档批量解析与摘要"
        },
        {
          "dim": "合规审查",
          "share": 11,
          "note": "政策对照、留痕与审计链路"
        },
        {
          "dim": "文书起草",
          "share": 7,
          "note": "模板生成与草拟辅助"
        }
      ],
      "flowTitle": "法律工作流",
      "flow": [
        "文档摄入",
        "条款抽取",
        "风险标注",
        "审查输出",
        "交付归档"
      ],
      "rowCount": 5,
      "showShare": true,
      "showFlow": true,
      "flowStepCount": 4,
      "focusEnabled": true,
      "focusIndex": 0,
      "showDecorations": true,
      "accentColor": "#86D62B"
    }
  },
  {
    "key": "theme07_page032",
    "themeKey": "theme07",
    "pageNumber": 32,
    "layout": "THEME07-032",
    "slot": "healthcare-page",
    "label": "39 31",
    "bgClass": "",
    "controls": [
      {
        "key": "imageCount",
        "label": "图片数量",
        "type": "slider",
        "default": 1,
        "min": 0,
        "max": 2,
        "step": 1,
        "desc": "主视觉区图片槽数量（0–2）；为 0 时以品牌图形填充，构图保持完整。",
        "publicKey": "imageCount",
        "publicLabel": "图片数量",
        "description": "主视觉区图片槽数量（0–2）；为 0 时以品牌图形填充，构图保持完整。"
      },
      {
        "key": "imageRatio",
        "label": "图片比例",
        "type": "radio",
        "default": "landscape",
        "options": [
          {
            "value": "landscape",
            "label": "横图"
          },
          {
            "value": "portrait",
            "label": "竖图"
          },
          {
            "value": "square",
            "label": "方形"
          },
          {
            "value": "auto",
            "label": "自适应"
          }
        ],
        "desc": "图片槽比例；自适应会跟随用户上传图片的原始比例并自动居中排布。",
        "publicKey": "imageRatio",
        "publicLabel": "图片比例",
        "description": "图片槽比例；自适应会跟随用户上传图片的原始比例并自动居中排布。"
      },
      {
        "key": "branchCount",
        "label": "卡片数量",
        "type": "slider",
        "default": 3,
        "min": 2,
        "max": 3,
        "step": 1,
        "desc": "数值分布分支数量（2–3）。",
        "publicKey": "branchCount",
        "publicLabel": "卡片数量",
        "description": "数值分布分支数量（2–3）。"
      },
      {
        "key": "focusEnabled",
        "label": "重点信息",
        "type": "toggle",
        "default": true,
        "desc": "是否高亮某一个分支作为视觉重点。",
        "publicKey": "focusEnabled",
        "publicLabel": "重点信息",
        "description": "是否高亮某一个分支作为视觉重点。"
      },
      {
        "key": "focusIndex",
        "label": "重点元素",
        "type": "select",
        "default": 1,
        "options": [
          {
            "value": 0,
            "label": "第 1 个"
          },
          {
            "value": 1,
            "label": "第 2 个"
          },
          {
            "value": 2,
            "label": "第 3 个"
          }
        ],
        "desc": "选择被高亮的分支。",
        "publicKey": "focusIndex",
        "publicLabel": "重点元素",
        "description": "选择被高亮的分支。"
      },
      {
        "key": "showValues",
        "label": "数值标签",
        "type": "toggle",
        "default": true,
        "desc": "分支柱顶部数值标签的显隐。",
        "publicKey": "showValueLabels",
        "publicLabel": "数值标签",
        "description": "分支柱顶部数值标签的显隐。"
      },
      {
        "key": "showDecorations",
        "label": "装饰文案",
        "type": "toggle",
        "default": true,
        "desc": "背景光晕、图片角标与条码等装饰的显隐。",
        "publicKey": "showDecorations",
        "publicLabel": "装饰文案",
        "description": "背景光晕、图片角标与条码等装饰的显隐。"
      },
      {
        "key": "accentColor",
        "label": "主题色",
        "type": "color",
        "default": "#86D62B",
        "options": [
          "#86D62B",
          "#23C76A",
          "#2F7BFF",
          "#F2A93B",
          "#0E110B"
        ],
        "desc": "品牌强调色，作用于分类标记、高亮分支与柱形。",
        "publicKey": "accentColor",
        "publicLabel": "主题色",
        "description": "品牌强调色，作用于分类标记、高亮分支与柱形。"
      }
    ],
    "defaultProps": {
      "eyebrow": "Healthcare AI",
      "segment": "医疗 AI 赛道",
      "title": "慢变量高壁垒",
      "titleTail": "医疗 AI 赛道",
      "lead": "医疗 AI 集中在影像、药物发现和临床文书自动化；验证周期长，但进入流程后的壁垒更强。",
      "statLine": "融资额 34 亿美元 · 8 笔事件",
      "closing": "慢场景不代表低价值。",
      "badge": "医疗 AI",
      "panelTitle": "三大方向 · 融资分布 / 亿美元",
      "branches": [
        {
          "name": "影像诊断",
          "value": 11,
          "note": "放射影像识别与分诊"
        },
        {
          "name": "药物发现",
          "value": 14,
          "note": "靶点发现与分子生成"
        },
        {
          "name": "临床文书",
          "value": 9,
          "note": "病历与文书自动化"
        }
      ],
      "imageCount": 1,
      "imageRatio": "landscape",
      "branchCount": 3,
      "focusEnabled": true,
      "focusIndex": 1,
      "showValues": true,
      "showDecorations": true,
      "accentColor": "#86D62B",
      "renderSlot": null
    }
  },
  {
    "key": "theme07_page033",
    "themeKey": "theme07",
    "pageNumber": 33,
    "layout": "THEME07-033",
    "slot": "finance-page",
    "label": "40 32",
    "bgClass": "",
    "controls": [
      {
        "key": "imageCount",
        "label": "图片数量",
        "type": "slider",
        "default": 1,
        "min": 0,
        "max": 2,
        "step": 1,
        "desc": "主视觉区图片槽数量（0–2）；为 0 时以品牌图形填充，构图保持完整。",
        "publicKey": "imageCount",
        "publicLabel": "图片数量",
        "description": "主视觉区图片槽数量（0–2）；为 0 时以品牌图形填充，构图保持完整。"
      },
      {
        "key": "imageRatio",
        "label": "图片比例",
        "type": "radio",
        "default": "portrait",
        "options": [
          {
            "value": "portrait",
            "label": "竖图"
          },
          {
            "value": "landscape",
            "label": "横图"
          },
          {
            "value": "square",
            "label": "方形"
          },
          {
            "value": "auto",
            "label": "自适应"
          }
        ],
        "desc": "图片槽比例；自适应会跟随用户上传图片的原始比例并自动居中排布。",
        "publicKey": "imageRatio",
        "publicLabel": "图片比例",
        "description": "图片槽比例；自适应会跟随用户上传图片的原始比例并自动居中排布。"
      },
      {
        "key": "chartType",
        "label": "图表类型",
        "type": "radio",
        "default": "donut",
        "options": [
          {
            "value": "donut",
            "label": "环形图"
          },
          {
            "value": "bars",
            "label": "占比条"
          }
        ],
        "desc": "场景占比图表样式：环形图 / 占比条。",
        "publicKey": "chartType",
        "publicLabel": "图表类型",
        "description": "场景占比图表样式：环形图 / 占比条。"
      },
      {
        "key": "segmentCount",
        "label": "卡片数量",
        "type": "slider",
        "default": 4,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "场景占比分段数量（2–4）。",
        "publicKey": "segmentCount",
        "publicLabel": "卡片数量",
        "description": "场景占比分段数量（2–4）。"
      },
      {
        "key": "focusEnabled",
        "label": "重点信息",
        "type": "toggle",
        "default": true,
        "desc": "是否高亮某一个场景作为视觉重点。",
        "publicKey": "focusEnabled",
        "publicLabel": "重点信息",
        "description": "是否高亮某一个场景作为视觉重点。"
      },
      {
        "key": "focusIndex",
        "label": "重点元素",
        "type": "select",
        "default": 0,
        "options": [
          {
            "value": 0,
            "label": "第 1 个"
          },
          {
            "value": 1,
            "label": "第 2 个"
          },
          {
            "value": 2,
            "label": "第 3 个"
          },
          {
            "value": 3,
            "label": "第 4 个"
          }
        ],
        "desc": "选择被高亮的场景。",
        "publicKey": "focusIndex",
        "publicLabel": "重点元素",
        "description": "选择被高亮的场景。"
      },
      {
        "key": "showLegend",
        "label": "图例",
        "type": "toggle",
        "default": true,
        "desc": "环形图右侧图例列表的显隐。",
        "publicKey": "showLegend",
        "publicLabel": "图例",
        "description": "环形图右侧图例列表的显隐。"
      },
      {
        "key": "showDecorations",
        "label": "装饰文案",
        "type": "toggle",
        "default": true,
        "desc": "背景光晕、图片角标与条码等装饰的显隐。",
        "publicKey": "showDecorations",
        "publicLabel": "装饰文案",
        "description": "背景光晕、图片角标与条码等装饰的显隐。"
      },
      {
        "key": "accentColor",
        "label": "主题色",
        "type": "color",
        "default": "#86D62B",
        "options": [
          "#86D62B",
          "#23C76A",
          "#2F7BFF",
          "#F2A93B",
          "#0E110B"
        ],
        "desc": "品牌强调色，作用于分类标记、图表与高亮场景。",
        "publicKey": "accentColor",
        "publicLabel": "主题色",
        "description": "品牌强调色，作用于分类标记、图表与高亮场景。"
      }
    ],
    "defaultProps": {
      "eyebrow": "Finance AI",
      "segment": "金融 AI 赛道",
      "title": "投研、风控与合规",
      "titleTail": "金融 AI 赛道",
      "lead": "金融 AI 聚焦投研、风控、合规和客户服务；金融行业付费能力强，但监管和准确率门槛更高。",
      "statLine": "融资额 22 亿美元 · 7 笔事件",
      "closing": "高价值行业需要更强可信度。",
      "badge": "金融 AI",
      "panelTitle": "场景占比",
      "segments": [
        {
          "label": "投研",
          "value": 31,
          "note": "研报与因子挖掘"
        },
        {
          "label": "合规",
          "value": 28,
          "note": "政策对照与留痕"
        },
        {
          "label": "风控",
          "value": 24,
          "note": "反欺诈与信用评估"
        },
        {
          "label": "客户服务",
          "value": 17,
          "note": "智能投顾与问答"
        }
      ],
      "imageCount": 1,
      "imageRatio": "portrait",
      "chartType": "donut",
      "segmentCount": 4,
      "focusEnabled": true,
      "focusIndex": 0,
      "showLegend": true,
      "showDecorations": true,
      "accentColor": "#86D62B",
      "renderSlot": null
    }
  },
  {
    "key": "theme07_page034",
    "themeKey": "theme07",
    "pageNumber": 34,
    "layout": "THEME07-034",
    "slot": "compute-page",
    "label": "41 33",
    "bgClass": "",
    "controls": [
      {
        "key": "chartType",
        "label": "图表类型",
        "type": "radio",
        "default": "cluster",
        "options": [
          {
            "value": "cluster",
            "label": "集群网格"
          },
          {
            "value": "bars",
            "label": "占比条"
          }
        ],
        "desc": "主图表样式：算力集群热力网格 / 资源占比条。",
        "publicKey": "chartType",
        "publicLabel": "图表类型",
        "description": "主图表样式：算力集群热力网格 / 资源占比条。"
      },
      {
        "key": "gridDensity",
        "label": "图表密度",
        "type": "slider",
        "default": 12,
        "min": 8,
        "max": 16,
        "step": 1,
        "desc": "集群网格的列密度（8–16）；行数自动推导。",
        "publicKey": "gridDensity",
        "publicLabel": "图表密度",
        "description": "集群网格的列密度（8–16）；行数自动推导。"
      },
      {
        "key": "metricCount",
        "label": "卡片数量",
        "type": "slider",
        "default": 4,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "左侧指标卡数量（2–4）。",
        "publicKey": "metricCount",
        "publicLabel": "卡片数量",
        "description": "左侧指标卡数量（2–4）。"
      },
      {
        "key": "focusEnabled",
        "label": "重点信息",
        "type": "toggle",
        "default": true,
        "desc": "是否高亮某一张指标卡作为视觉重点。",
        "publicKey": "focusEnabled",
        "publicLabel": "重点信息",
        "description": "是否高亮某一张指标卡作为视觉重点。"
      },
      {
        "key": "focusIndex",
        "label": "重点元素",
        "type": "select",
        "default": 0,
        "options": [
          {
            "value": 0,
            "label": "第 1 张"
          },
          {
            "value": 1,
            "label": "第 2 张"
          },
          {
            "value": 2,
            "label": "第 3 张"
          },
          {
            "value": 3,
            "label": "第 4 张"
          }
        ],
        "desc": "选择被高亮的指标卡。",
        "publicKey": "focusIndex",
        "publicLabel": "重点元素",
        "description": "选择被高亮的指标卡。"
      },
      {
        "key": "showSplit",
        "label": "占比图",
        "type": "toggle",
        "default": true,
        "desc": "资源构成占比（网格上方条带 / 占比条）的显隐。",
        "publicKey": "showSplit",
        "publicLabel": "占比图",
        "description": "资源构成占比（网格上方条带 / 占比条）的显隐。"
      },
      {
        "key": "showDecorations",
        "label": "装饰文案",
        "type": "toggle",
        "default": true,
        "desc": "背景光晕与条码等装饰的显隐。",
        "publicKey": "showDecorations",
        "publicLabel": "装饰文案",
        "description": "背景光晕与条码等装饰的显隐。"
      },
      {
        "key": "accentColor",
        "label": "主题色",
        "type": "color",
        "default": "#86D62B",
        "options": [
          "#86D62B",
          "#23C76A",
          "#2F7BFF",
          "#F2A93B",
          "#0E110B"
        ],
        "desc": "品牌强调色，作用于分类标记、集群高负载单元与高亮卡。",
        "publicKey": "accentColor",
        "publicLabel": "主题色",
        "description": "品牌强调色，作用于分类标记、集群高负载单元与高亮卡。"
      }
    ],
    "defaultProps": {
      "eyebrow": "GPU Cloud",
      "segment": "GPU 云与算力租赁",
      "title": "算力供给稀缺",
      "titleTail": "GPU 云与算力租赁",
      "lead": "GPU 云公司受益于训练和推理双重需求；壁垒来自供给锁定、客户绑定和资本开支效率。",
      "closing": "算力是 AI 时代最直接的硬资源。",
      "chartTitle": "算力集群 · 资源利用",
      "splitTitle": "资源构成 / 占比",
      "metrics": [
        {
          "lbl": "融资额",
          "val": "64",
          "unit": "亿美元"
        },
        {
          "lbl": "事件数",
          "val": "9",
          "unit": "笔"
        },
        {
          "lbl": "平均单笔",
          "val": "7.1",
          "unit": "亿美元"
        },
        {
          "lbl": "H100/H200 占比",
          "val": "58",
          "unit": "%"
        }
      ],
      "split": [
        {
          "label": "H100 / H200",
          "value": 58,
          "note": "新一代训练算力"
        },
        {
          "label": "A100 及以下",
          "value": 30,
          "note": "存量推理算力"
        },
        {
          "label": "弹性 / 其他",
          "value": 12,
          "note": "按需与异构资源"
        }
      ],
      "chartType": "cluster",
      "gridDensity": 12,
      "metricCount": 4,
      "focusEnabled": true,
      "focusIndex": 0,
      "showSplit": true,
      "showDecorations": true,
      "accentColor": "#86D62B"
    }
  },
  {
    "key": "theme07_page035",
    "themeKey": "theme07",
    "pageNumber": 35,
    "layout": "THEME07-035",
    "slot": "chip-page",
    "label": "42 34",
    "bgClass": "",
    "controls": [
      {
        "key": "rowCount",
        "label": "行数量",
        "type": "slider",
        "default": 4,
        "min": 3,
        "max": 5,
        "step": 1,
        "desc": "表格展示的行数量（3–5）。",
        "publicKey": "rowCount",
        "publicLabel": "行数量",
        "description": "表格展示的行数量（3–5）。"
      },
      {
        "key": "showShare",
        "label": "占比列",
        "type": "toggle",
        "default": true,
        "desc": "资金拆分列（迷你占比条）的显隐。",
        "publicKey": "showShare",
        "publicLabel": "占比列",
        "description": "资金拆分列（迷你占比条）的显隐。"
      },
      {
        "key": "showJudgment",
        "label": "判断列",
        "type": "toggle",
        "default": true,
        "desc": "判断列的显隐；关闭后表格更紧凑。",
        "publicKey": "showJudgment",
        "publicLabel": "判断列",
        "description": "判断列的显隐；关闭后表格更紧凑。"
      },
      {
        "key": "focusEnabled",
        "label": "重点信息",
        "type": "toggle",
        "default": true,
        "desc": "是否高亮某一行作为视觉重点。",
        "publicKey": "focusEnabled",
        "publicLabel": "重点信息",
        "description": "是否高亮某一行作为视觉重点。"
      },
      {
        "key": "focusIndex",
        "label": "重点元素",
        "type": "select",
        "default": 0,
        "options": [
          {
            "value": 0,
            "label": "第 1 行"
          },
          {
            "value": 1,
            "label": "第 2 行"
          },
          {
            "value": 2,
            "label": "第 3 行"
          },
          {
            "value": 3,
            "label": "第 4 行"
          },
          {
            "value": 4,
            "label": "第 5 行"
          }
        ],
        "desc": "选择被高亮的行。",
        "publicKey": "focusIndex",
        "publicLabel": "重点元素",
        "description": "选择被高亮的行。"
      },
      {
        "key": "showDecorations",
        "label": "装饰文案",
        "type": "toggle",
        "default": true,
        "desc": "背景光晕与条码等装饰的显隐。",
        "publicKey": "showDecorations",
        "publicLabel": "装饰文案",
        "description": "背景光晕与条码等装饰的显隐。"
      },
      {
        "key": "accentColor",
        "label": "主题色",
        "type": "color",
        "default": "#86D62B",
        "options": [
          "#86D62B",
          "#23C76A",
          "#2F7BFF",
          "#F2A93B",
          "#0E110B"
        ],
        "desc": "品牌强调色，作用于层级标记、高亮行与总额数字。",
        "publicKey": "accentColor",
        "publicLabel": "主题色",
        "description": "品牌强调色，作用于层级标记、高亮行与总额数字。"
      }
    ],
    "defaultProps": {
      "eyebrow": "AI Chips",
      "marker": "硬件",
      "segment": "AI 芯片赛道",
      "title": "训练与推理硬件",
      "titleTail": "AI 芯片赛道",
      "lead": "AI 芯片融资集中在训练加速器、推理芯片和边缘 AI；芯片周期长，但一旦形成供应链优势，壁垒极高。",
      "statLine": "主力三大方向合计 · 训练 46 · 推理 32 · 边缘 19（亿美元）",
      "anchorValue": "97",
      "anchorUnit": "亿美元",
      "anchorLabel": "全年融资额 · 13 笔事件",
      "closing": "硬件方向看长期确定性。",
      "colHeads": {
        "dim": "芯片方向",
        "val": "融资额",
        "share": "资金拆分",
        "note": "判断"
      },
      "rows": [
        {
          "dim": "训练加速器",
          "tier": "训练",
          "val": "46",
          "note": "大模型训练算力，供给紧俏"
        },
        {
          "dim": "推理芯片",
          "tier": "推理",
          "val": "32",
          "note": "推理成本与能效优化"
        },
        {
          "dim": "边缘 AI 芯片",
          "tier": "边缘",
          "val": "19",
          "note": "端侧与设备端智能"
        },
        {
          "dim": "互联与先进封装",
          "tier": "孵化",
          "val": "8",
          "note": "Chiplet 与高带宽互联"
        },
        {
          "dim": "光子 / 前沿架构",
          "tier": "孵化",
          "val": "5",
          "note": "存算一体与光计算探索"
        }
      ],
      "rowCount": 4,
      "showShare": true,
      "showJudgment": true,
      "focusEnabled": true,
      "focusIndex": 0,
      "showDecorations": true,
      "accentColor": "#86D62B"
    }
  },
  {
    "key": "theme07_page036",
    "themeKey": "theme07",
    "pageNumber": 36,
    "layout": "THEME07-036",
    "slot": "robotics-page",
    "label": "43 35",
    "bgClass": "",
    "controls": [
      {
        "key": "imageCount",
        "label": "图片数量",
        "type": "slider",
        "default": 1,
        "min": 0,
        "max": 2,
        "step": 1,
        "desc": "主视觉区图片槽数量（0–2）；为 0 时以品牌图形填充，构图保持完整。",
        "publicKey": "imageCount",
        "publicLabel": "图片数量",
        "description": "主视觉区图片槽数量（0–2）；为 0 时以品牌图形填充，构图保持完整。"
      },
      {
        "key": "imageRatio",
        "label": "图片比例",
        "type": "radio",
        "default": "landscape",
        "options": [
          {
            "value": "landscape",
            "label": "横图"
          },
          {
            "value": "portrait",
            "label": "竖图"
          },
          {
            "value": "square",
            "label": "方形"
          },
          {
            "value": "auto",
            "label": "自适应"
          }
        ],
        "desc": "图片槽比例；自适应会跟随用户上传图片的原始比例并自动居中排布。",
        "publicKey": "imageRatio",
        "publicLabel": "图片比例",
        "description": "图片槽比例；自适应会跟随用户上传图片的原始比例并自动居中排布。"
      },
      {
        "key": "segmentCount",
        "label": "卡片数量",
        "type": "slider",
        "default": 3,
        "min": 2,
        "max": 3,
        "step": 1,
        "desc": "应用方向分布数量（2–3）。",
        "publicKey": "segmentCount",
        "publicLabel": "卡片数量",
        "description": "应用方向分布数量（2–3）。"
      },
      {
        "key": "focusEnabled",
        "label": "重点信息",
        "type": "toggle",
        "default": true,
        "desc": "是否高亮某一个应用方向作为视觉重点。",
        "publicKey": "focusEnabled",
        "publicLabel": "重点信息",
        "description": "是否高亮某一个应用方向作为视觉重点。"
      },
      {
        "key": "focusIndex",
        "label": "重点元素",
        "type": "select",
        "default": 0,
        "options": [
          {
            "value": 0,
            "label": "第 1 个"
          },
          {
            "value": 1,
            "label": "第 2 个"
          },
          {
            "value": 2,
            "label": "第 3 个"
          }
        ],
        "desc": "选择被高亮的应用方向。",
        "publicKey": "focusIndex",
        "publicLabel": "重点元素",
        "description": "选择被高亮的应用方向。"
      },
      {
        "key": "showValues",
        "label": "数值标签",
        "type": "toggle",
        "default": true,
        "desc": "应用柱顶部数值标签的显隐。",
        "publicKey": "showValueLabels",
        "publicLabel": "数值标签",
        "description": "应用柱顶部数值标签的显隐。"
      },
      {
        "key": "showDecorations",
        "label": "装饰文案",
        "type": "toggle",
        "default": true,
        "desc": "背景光晕、图片角标与条码等装饰的显隐。",
        "publicKey": "showDecorations",
        "publicLabel": "装饰文案",
        "description": "背景光晕、图片角标与条码等装饰的显隐。"
      },
      {
        "key": "accentColor",
        "label": "主题色",
        "type": "color",
        "default": "#86D62B",
        "options": [
          "#86D62B",
          "#23C76A",
          "#2F7BFF",
          "#F2A93B",
          "#0E110B"
        ],
        "desc": "品牌强调色，作用于分类标记、高亮应用与柱形。",
        "publicKey": "accentColor",
        "publicLabel": "主题色",
        "description": "品牌强调色，作用于分类标记、高亮应用与柱形。"
      }
    ],
    "defaultProps": {
      "eyebrow": "Embodied AI",
      "segment": "机器人与具身智能",
      "title": "从软件走向物理世界",
      "titleTail": "机器人与具身智能",
      "lead": "具身智能成为 AI 从软件能力延伸到物理场景的重要方向；它更像硬科技投资，验证周期更长。",
      "statLine": "融资额 41 亿美元 · 7 笔事件",
      "closing": "长周期赛道需要看供应链和量产能力。",
      "badge": "具身智能",
      "panelTitle": "应用分布 · 融资 / 亿美元",
      "segments": [
        {
          "name": "人形机器人",
          "value": 21,
          "note": "通用操作与服务场景"
        },
        {
          "name": "工业自动化",
          "value": 11,
          "note": "柔性产线与质检"
        },
        {
          "name": "仓储机器人",
          "value": 9,
          "note": "拣选与物流搬运"
        }
      ],
      "imageCount": 1,
      "imageRatio": "landscape",
      "segmentCount": 3,
      "focusEnabled": true,
      "focusIndex": 0,
      "showValues": true,
      "showDecorations": true,
      "accentColor": "#86D62B",
      "renderSlot": null
    }
  },
  {
    "key": "theme07_page037",
    "themeKey": "theme07",
    "pageNumber": 37,
    "layout": "THEME07-037",
    "slot": "autonomy-page",
    "label": "44 36",
    "bgClass": "",
    "controls": [
      {
        "key": "imageCount",
        "label": "图片数量",
        "type": "slider",
        "default": 1,
        "min": 0,
        "max": 2,
        "step": 1,
        "desc": "主视觉区图片槽数量（0–2）；为 0 时以品牌图形填充，构图保持完整。",
        "publicKey": "imageCount",
        "publicLabel": "图片数量",
        "description": "主视觉区图片槽数量（0–2）；为 0 时以品牌图形填充，构图保持完整。"
      },
      {
        "key": "imageRatio",
        "label": "图片比例",
        "type": "radio",
        "default": "portrait",
        "options": [
          {
            "value": "portrait",
            "label": "竖图"
          },
          {
            "value": "landscape",
            "label": "横图"
          },
          {
            "value": "square",
            "label": "方形"
          },
          {
            "value": "auto",
            "label": "自适应"
          }
        ],
        "desc": "图片槽比例；自适应会跟随用户上传图片的原始比例并自动居中排布。",
        "publicKey": "imageRatio",
        "publicLabel": "图片比例",
        "description": "图片槽比例；自适应会跟随用户上传图片的原始比例并自动居中排布。"
      },
      {
        "key": "chartType",
        "label": "图表类型",
        "type": "radio",
        "default": "bars",
        "options": [
          {
            "value": "bars",
            "label": "占比条"
          },
          {
            "value": "donut",
            "label": "环形图"
          }
        ],
        "desc": "场景拆分图表样式：占比条 / 环形图。",
        "publicKey": "chartType",
        "publicLabel": "图表类型",
        "description": "场景拆分图表样式：占比条 / 环形图。"
      },
      {
        "key": "segmentCount",
        "label": "卡片数量",
        "type": "slider",
        "default": 3,
        "min": 2,
        "max": 3,
        "step": 1,
        "desc": "场景拆分分段数量（2–3）。",
        "publicKey": "segmentCount",
        "publicLabel": "卡片数量",
        "description": "场景拆分分段数量（2–3）。"
      },
      {
        "key": "focusEnabled",
        "label": "重点信息",
        "type": "toggle",
        "default": true,
        "desc": "是否高亮某一个场景作为视觉重点。",
        "publicKey": "focusEnabled",
        "publicLabel": "重点信息",
        "description": "是否高亮某一个场景作为视觉重点。"
      },
      {
        "key": "focusIndex",
        "label": "重点元素",
        "type": "select",
        "default": 0,
        "options": [
          {
            "value": 0,
            "label": "第 1 个"
          },
          {
            "value": 1,
            "label": "第 2 个"
          },
          {
            "value": 2,
            "label": "第 3 个"
          }
        ],
        "desc": "选择被高亮的场景。",
        "publicKey": "focusIndex",
        "publicLabel": "重点元素",
        "description": "选择被高亮的场景。"
      },
      {
        "key": "showArch",
        "label": "装饰图示",
        "type": "toggle",
        "default": true,
        "desc": "车载 AI 架构层级条（感知 → 决策 → 控制 → 座舱）的显隐。",
        "publicKey": "showArch",
        "publicLabel": "装饰图示",
        "description": "车载 AI 架构层级条（感知 → 决策 → 控制 → 座舱）的显隐。"
      },
      {
        "key": "showLegend",
        "label": "图例",
        "type": "toggle",
        "default": true,
        "desc": "环形图右侧图例列表的显隐。",
        "publicKey": "showLegend",
        "publicLabel": "图例",
        "description": "环形图右侧图例列表的显隐。"
      },
      {
        "key": "showDecorations",
        "label": "装饰文案",
        "type": "toggle",
        "default": true,
        "desc": "背景光晕、图片角标与条码等装饰的显隐。",
        "publicKey": "showDecorations",
        "publicLabel": "装饰文案",
        "description": "背景光晕、图片角标与条码等装饰的显隐。"
      },
      {
        "key": "accentColor",
        "label": "主题色",
        "type": "color",
        "default": "#86D62B",
        "options": [
          "#86D62B",
          "#23C76A",
          "#2F7BFF",
          "#F2A93B",
          "#0E110B"
        ],
        "desc": "品牌强调色，作用于分类标记、架构条、图表与高亮场景。",
        "publicKey": "accentColor",
        "publicLabel": "主题色",
        "description": "品牌强调色，作用于分类标记、架构条、图表与高亮场景。"
      }
    ],
    "defaultProps": {
      "eyebrow": "Autonomous AI",
      "segment": "自动驾驶与车载 AI",
      "title": "车载模型升级",
      "titleTail": "自动驾驶与车载 AI",
      "lead": "车载 AI 从感知模块转向端到端模型和座舱智能；资本更关注数据闭环和量产路径。",
      "statLine": "融资额 29 亿美元 · 6 笔事件",
      "closing": "自动驾驶回暖，但更看重工程兑现。",
      "badge": "车载 AI",
      "panelTitle": "场景拆分 / 亿美元",
      "archTitle": "车载 AI 架构",
      "arch": [
        "环境感知",
        "决策规划",
        "执行控制",
        "座舱交互"
      ],
      "segments": [
        {
          "label": "端到端驾驶",
          "value": 13,
          "note": "感知到控制一体化"
        },
        {
          "label": "仿真平台",
          "value": 9,
          "note": "数据闭环与虚拟测试"
        },
        {
          "label": "车载助手",
          "value": 7,
          "note": "座舱交互与语音"
        }
      ],
      "imageCount": 1,
      "imageRatio": "portrait",
      "chartType": "bars",
      "segmentCount": 3,
      "focusEnabled": true,
      "focusIndex": 0,
      "showArch": true,
      "showLegend": true,
      "showDecorations": true,
      "accentColor": "#86D62B",
      "renderSlot": null
    }
  },
  {
    "key": "theme07_page038",
    "themeKey": "theme07",
    "pageNumber": 38,
    "layout": "THEME07-038",
    "slot": "safety-page",
    "label": "45 37",
    "bgClass": "",
    "controls": [
      {
        "key": "chartType",
        "label": "图表类型",
        "type": "radio",
        "default": "layers",
        "options": [
          {
            "value": "layers",
            "label": "防线分层"
          },
          {
            "value": "bars",
            "label": "占比条"
          }
        ],
        "desc": "主图表样式：分层防线堆叠 / 资金占比条。",
        "publicKey": "chartType",
        "publicLabel": "图表类型",
        "description": "主图表样式：分层防线堆叠 / 资金占比条。"
      },
      {
        "key": "layerCount",
        "label": "分项数量",
        "type": "slider",
        "default": 3,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "安全防线分层 / 占比条的数量（2–4）。",
        "publicKey": "layerCount",
        "publicLabel": "分项数量",
        "description": "安全防线分层 / 占比条的数量（2–4）。"
      },
      {
        "key": "metricCount",
        "label": "卡片数量",
        "type": "slider",
        "default": 4,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "左侧指标卡数量（2–4）。",
        "publicKey": "metricCount",
        "publicLabel": "卡片数量",
        "description": "左侧指标卡数量（2–4）。"
      },
      {
        "key": "focusEnabled",
        "label": "重点信息",
        "type": "toggle",
        "default": true,
        "desc": "是否高亮某一张指标卡作为视觉重点。",
        "publicKey": "focusEnabled",
        "publicLabel": "重点信息",
        "description": "是否高亮某一张指标卡作为视觉重点。"
      },
      {
        "key": "focusIndex",
        "label": "重点元素",
        "type": "select",
        "default": 0,
        "options": [
          {
            "value": 0,
            "label": "第 1 张"
          },
          {
            "value": 1,
            "label": "第 2 张"
          },
          {
            "value": 2,
            "label": "第 3 张"
          },
          {
            "value": 3,
            "label": "第 4 张"
          }
        ],
        "desc": "选择被高亮的指标卡。",
        "publicKey": "focusIndex",
        "publicLabel": "重点元素",
        "description": "选择被高亮的指标卡。"
      },
      {
        "key": "showStrip",
        "label": "示意条带",
        "type": "toggle",
        "default": true,
        "desc": "防线上方状态拦截示意条带的显隐。",
        "publicKey": "showStrip",
        "publicLabel": "示意条带",
        "description": "防线上方状态拦截示意条带的显隐。"
      },
      {
        "key": "showDecorations",
        "label": "装饰文案",
        "type": "toggle",
        "default": true,
        "desc": "背景光晕与条码等装饰的显隐。",
        "publicKey": "showDecorations",
        "publicLabel": "装饰文案",
        "description": "背景光晕与条码等装饰的显隐。"
      },
      {
        "key": "accentColor",
        "label": "主题色",
        "type": "color",
        "default": "#86D62B",
        "options": [
          "#86D62B",
          "#23C76A",
          "#2F7BFF",
          "#F2A93B",
          "#0E110B"
        ],
        "desc": "品牌强调色，作用于分类标记、防线层级与高亮卡。",
        "publicKey": "accentColor",
        "publicLabel": "主题色",
        "description": "品牌强调色，作用于分类标记、防线层级与高亮卡。"
      }
    ],
    "defaultProps": {
      "eyebrow": "AI Safety",
      "segment": "AI 安全赛道",
      "title": "评测、红队与合规",
      "titleTail": "AI 安全赛道",
      "lead": "AI 安全覆盖模型评测、红队测试、内容安全和合规监测；监管收紧会把它从可选预算变成刚性预算。",
      "closing": "安全能力会成为企业采购门槛。",
      "chartTitle": "安全防线 · 资金 / 亿美元",
      "splitTitle": "防线资金占比",
      "stripTitle": "风险拦截示意",
      "metrics": [
        {
          "lbl": "融资额",
          "val": "16",
          "unit": "亿美元"
        },
        {
          "lbl": "事件数",
          "val": "8",
          "unit": "笔"
        },
        {
          "lbl": "模型评测",
          "val": "6",
          "unit": "亿美元"
        },
        {
          "lbl": "合规监测",
          "val": "5",
          "unit": "亿美元"
        }
      ],
      "layers": [
        {
          "tier": "L1",
          "name": "模型评测",
          "value": 6,
          "note": "能力与风险基准测试"
        },
        {
          "tier": "L2",
          "name": "内容安全",
          "value": 5,
          "note": "有害内容识别与过滤"
        },
        {
          "tier": "L3",
          "name": "合规监测",
          "value": 5,
          "note": "审计链路与监管对齐"
        },
        {
          "tier": "L4",
          "name": "红队测试",
          "value": 4,
          "note": "对抗攻击与越狱探测"
        }
      ],
      "chartType": "layers",
      "layerCount": 3,
      "metricCount": 4,
      "focusEnabled": true,
      "focusIndex": 0,
      "showStrip": true,
      "showDecorations": true,
      "accentColor": "#86D62B"
    }
  },
  {
    "key": "theme07_page039",
    "themeKey": "theme07",
    "pageNumber": 39,
    "layout": "THEME07-039",
    "slot": "content-gen-page",
    "label": "46 38",
    "bgClass": "",
    "controls": [
      {
        "key": "imageCount",
        "label": "图片数量",
        "type": "slider",
        "default": 1,
        "min": 0,
        "max": 2,
        "step": 1,
        "desc": "主视觉区图片槽数量（0–2）；为 0 时以品牌图形填充，构图保持完整。",
        "publicKey": "imageCount",
        "publicLabel": "图片数量",
        "description": "主视觉区图片槽数量（0–2）；为 0 时以品牌图形填充，构图保持完整。"
      },
      {
        "key": "imageRatio",
        "label": "图片比例",
        "type": "radio",
        "default": "landscape",
        "options": [
          {
            "value": "landscape",
            "label": "横图"
          },
          {
            "value": "portrait",
            "label": "竖图"
          },
          {
            "value": "square",
            "label": "方形"
          },
          {
            "value": "auto",
            "label": "自适应"
          }
        ],
        "desc": "图片槽比例；自适应会跟随用户上传图片的原始比例并自动居中排布。",
        "publicKey": "imageRatio",
        "publicLabel": "图片比例",
        "description": "图片槽比例；自适应会跟随用户上传图片的原始比例并自动居中排布。"
      },
      {
        "key": "segmentCount",
        "label": "卡片数量",
        "type": "slider",
        "default": 3,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "媒介方向分布数量（2–4）。",
        "publicKey": "segmentCount",
        "publicLabel": "卡片数量",
        "description": "媒介方向分布数量（2–4）。"
      },
      {
        "key": "focusEnabled",
        "label": "重点信息",
        "type": "toggle",
        "default": true,
        "desc": "是否高亮某一个媒介方向作为视觉重点。",
        "publicKey": "focusEnabled",
        "publicLabel": "重点信息",
        "description": "是否高亮某一个媒介方向作为视觉重点。"
      },
      {
        "key": "focusIndex",
        "label": "重点元素",
        "type": "select",
        "default": 0,
        "options": [
          {
            "value": 0,
            "label": "第 1 个"
          },
          {
            "value": 1,
            "label": "第 2 个"
          },
          {
            "value": 2,
            "label": "第 3 个"
          },
          {
            "value": 3,
            "label": "第 4 个"
          }
        ],
        "desc": "选择被高亮的媒介方向。",
        "publicKey": "focusIndex",
        "publicLabel": "重点元素",
        "description": "选择被高亮的媒介方向。"
      },
      {
        "key": "showValues",
        "label": "数值标签",
        "type": "toggle",
        "default": true,
        "desc": "分布行末端数值标签的显隐。",
        "publicKey": "showValueLabels",
        "publicLabel": "数值标签",
        "description": "分布行末端数值标签的显隐。"
      },
      {
        "key": "showDecorations",
        "label": "装饰文案",
        "type": "toggle",
        "default": true,
        "desc": "背景光晕、图片角标与条码等装饰的显隐。",
        "publicKey": "showDecorations",
        "publicLabel": "装饰文案",
        "description": "背景光晕、图片角标与条码等装饰的显隐。"
      },
      {
        "key": "accentColor",
        "label": "主题色",
        "type": "color",
        "default": "#86D62B",
        "options": [
          "#86D62B",
          "#23C76A",
          "#2F7BFF",
          "#F2A93B",
          "#0E110B"
        ],
        "desc": "品牌强调色，作用于分类标记、高亮媒介与分布条。",
        "publicKey": "accentColor",
        "publicLabel": "主题色",
        "description": "品牌强调色，作用于分类标记、高亮媒介与分布条。"
      }
    ],
    "defaultProps": {
      "eyebrow": "Generative Content",
      "segment": "内容生成赛道",
      "title": "图像、视频与创意",
      "titleTail": "内容生成赛道",
      "lead": "内容生成继续保持融资热度，但也面临版权和留存问题；长期价值取决于付费意愿与版权处理。",
      "statLine": "融资额 31 亿美元 · 11 笔事件",
      "closing": "流量热度不等于商业壁垒。",
      "badge": "内容生成",
      "panelTitle": "媒介分布 · 融资 / 亿美元",
      "segments": [
        {
          "name": "视频生成",
          "value": 14,
          "note": "文生视频与镜头控制"
        },
        {
          "name": "广告创意",
          "value": 8,
          "note": "营销素材批量生成"
        },
        {
          "name": "图像生成",
          "value": 5,
          "note": "品牌视觉与设计辅助"
        },
        {
          "name": "音乐音频",
          "value": 4,
          "note": "配乐与语音合成"
        }
      ],
      "imageCount": 1,
      "imageRatio": "landscape",
      "segmentCount": 3,
      "focusEnabled": true,
      "focusIndex": 0,
      "showValues": true,
      "showDecorations": true,
      "accentColor": "#86D62B",
      "renderSlot": null
    }
  },
  {
    "key": "theme07_page040",
    "themeKey": "theme07",
    "pageNumber": 40,
    "layout": "THEME07-040",
    "slot": "education-page",
    "label": "47 39",
    "bgClass": "",
    "controls": [
      {
        "key": "imageCount",
        "label": "图片数量",
        "type": "slider",
        "default": 1,
        "min": 0,
        "max": 2,
        "step": 1,
        "desc": "主视觉区图片槽数量（0–2）；为 0 时以品牌图形填充，构图保持完整。",
        "publicKey": "imageCount",
        "publicLabel": "图片数量",
        "description": "主视觉区图片槽数量（0–2）；为 0 时以品牌图形填充，构图保持完整。"
      },
      {
        "key": "imageRatio",
        "label": "图片比例",
        "type": "radio",
        "default": "portrait",
        "options": [
          {
            "value": "portrait",
            "label": "竖图"
          },
          {
            "value": "landscape",
            "label": "横图"
          },
          {
            "value": "square",
            "label": "方形"
          },
          {
            "value": "auto",
            "label": "自适应"
          }
        ],
        "desc": "图片槽比例；自适应会跟随用户上传图片的原始比例并自动居中排布。",
        "publicKey": "imageRatio",
        "publicLabel": "图片比例",
        "description": "图片槽比例；自适应会跟随用户上传图片的原始比例并自动居中排布。"
      },
      {
        "key": "segmentCount",
        "label": "卡片数量",
        "type": "slider",
        "default": 3,
        "min": 2,
        "max": 3,
        "step": 1,
        "desc": "学习路径阶段数量（2–3）。",
        "publicKey": "segmentCount",
        "publicLabel": "卡片数量",
        "description": "学习路径阶段数量（2–3）。"
      },
      {
        "key": "focusEnabled",
        "label": "重点信息",
        "type": "toggle",
        "default": true,
        "desc": "是否高亮某一个学习阶段作为视觉重点。",
        "publicKey": "focusEnabled",
        "publicLabel": "重点信息",
        "description": "是否高亮某一个学习阶段作为视觉重点。"
      },
      {
        "key": "focusIndex",
        "label": "重点元素",
        "type": "select",
        "default": 0,
        "options": [
          {
            "value": 0,
            "label": "第 1 个"
          },
          {
            "value": 1,
            "label": "第 2 个"
          },
          {
            "value": 2,
            "label": "第 3 个"
          }
        ],
        "desc": "选择被高亮的学习阶段。",
        "publicKey": "focusIndex",
        "publicLabel": "重点元素",
        "description": "选择被高亮的学习阶段。"
      },
      {
        "key": "showValues",
        "label": "数值标签",
        "type": "toggle",
        "default": true,
        "desc": "阶段节点内数值标签的显隐。",
        "publicKey": "showValueLabels",
        "publicLabel": "数值标签",
        "description": "阶段节点内数值标签的显隐。"
      },
      {
        "key": "showDecorations",
        "label": "装饰文案",
        "type": "toggle",
        "default": true,
        "desc": "背景光晕、图片角标与条码等装饰的显隐。",
        "publicKey": "showDecorations",
        "publicLabel": "装饰文案",
        "description": "背景光晕、图片角标与条码等装饰的显隐。"
      },
      {
        "key": "accentColor",
        "label": "主题色",
        "type": "color",
        "default": "#86D62B",
        "options": [
          "#86D62B",
          "#23C76A",
          "#2F7BFF",
          "#F2A93B",
          "#0E110B"
        ],
        "desc": "品牌强调色，作用于分类标记、高亮阶段与路径节点。",
        "publicKey": "accentColor",
        "publicLabel": "主题色",
        "description": "品牌强调色，作用于分类标记、高亮阶段与路径节点。"
      }
    ],
    "defaultProps": {
      "eyebrow": "Education AI",
      "segment": "教育 AI 赛道",
      "title": "个性化学习与教师工具",
      "titleTail": "教育 AI 赛道",
      "lead": "教育 AI 从通用答疑转向个性化辅导和教师工作台；难点不是生成答案，而是证明学习效果和付费意愿。",
      "statLine": "融资额 14 亿美元 · 5 笔事件",
      "closing": "教育 AI 需要用结果证明价值。",
      "badge": "教育 AI",
      "panelTitle": "学习路径 · 融资 / 亿美元",
      "segments": [
        {
          "name": "K12 辅导",
          "value": 6,
          "note": "个性化习题与答疑"
        },
        {
          "name": "企业培训",
          "value": 5,
          "note": "岗位技能与上岗考核"
        },
        {
          "name": "教师工具",
          "value": 3,
          "note": "备课、批改与学情分析"
        }
      ],
      "imageCount": 1,
      "imageRatio": "portrait",
      "segmentCount": 3,
      "focusEnabled": true,
      "focusIndex": 0,
      "showValues": true,
      "showDecorations": true,
      "accentColor": "#86D62B",
      "renderSlot": null
    }
  },
  {
    "key": "theme07_page041",
    "themeKey": "theme07",
    "pageNumber": 41,
    "layout": "THEME07-041",
    "slot": "support-page",
    "label": "48 40",
    "bgClass": "",
    "controls": [
      {
        "key": "rowCount",
        "label": "行数量",
        "type": "slider",
        "default": 4,
        "min": 3,
        "max": 5,
        "step": 1,
        "desc": "表格展示的行数量（3–5）。",
        "publicKey": "rowCount",
        "publicLabel": "行数量",
        "description": "表格展示的行数量（3–5）。"
      },
      {
        "key": "showShare",
        "label": "占比列",
        "type": "toggle",
        "default": true,
        "desc": "降本贡献列（迷你占比条）的显隐。",
        "publicKey": "showShare",
        "publicLabel": "占比列",
        "description": "降本贡献列（迷你占比条）的显隐。"
      },
      {
        "key": "showJudgment",
        "label": "判断列",
        "type": "toggle",
        "default": true,
        "desc": "判断列的显隐；关闭后表格更紧凑。",
        "publicKey": "showJudgment",
        "publicLabel": "判断列",
        "description": "判断列的显隐；关闭后表格更紧凑。"
      },
      {
        "key": "focusEnabled",
        "label": "重点信息",
        "type": "toggle",
        "default": true,
        "desc": "是否高亮某一行作为视觉重点。",
        "publicKey": "focusEnabled",
        "publicLabel": "重点信息",
        "description": "是否高亮某一行作为视觉重点。"
      },
      {
        "key": "focusIndex",
        "label": "重点元素",
        "type": "select",
        "default": 0,
        "options": [
          {
            "value": 0,
            "label": "第 1 行"
          },
          {
            "value": 1,
            "label": "第 2 行"
          },
          {
            "value": 2,
            "label": "第 3 行"
          },
          {
            "value": 3,
            "label": "第 4 行"
          },
          {
            "value": 4,
            "label": "第 5 行"
          }
        ],
        "desc": "选择被高亮的行。",
        "publicKey": "focusIndex",
        "publicLabel": "重点元素",
        "description": "选择被高亮的行。"
      },
      {
        "key": "showDecorations",
        "label": "装饰文案",
        "type": "toggle",
        "default": true,
        "desc": "背景光晕与条码等装饰的显隐。",
        "publicKey": "showDecorations",
        "publicLabel": "装饰文案",
        "description": "背景光晕与条码等装饰的显隐。"
      },
      {
        "key": "accentColor",
        "label": "主题色",
        "type": "color",
        "default": "#86D62B",
        "options": [
          "#86D62B",
          "#23C76A",
          "#2F7BFF",
          "#F2A93B",
          "#0E110B"
        ],
        "desc": "品牌强调色，作用于角色标记、高亮行与总额数字。",
        "publicKey": "accentColor",
        "publicLabel": "主题色",
        "description": "品牌强调色，作用于角色标记、高亮行与总额数字。"
      }
    ],
    "defaultProps": {
      "eyebrow": "Customer Support AI",
      "segment": "客服 AI 赛道",
      "title": "可量化降本场景",
      "titleTail": "客服 AI 赛道",
      "lead": "客服 AI 是最容易量化 ROI 的垂直应用之一；商业化看降本效果、接入成本和复杂问题升级率。",
      "statLine": "平均替代率 32% · 工单时长下降 41% · 9 笔事件",
      "anchorValue": "27",
      "anchorUnit": "亿美元",
      "anchorLabel": "全年融资额 · 9 笔事件",
      "closing": "能量化 ROI 的场景更容易获得预算。",
      "colHeads": {
        "dim": "降本场景",
        "val": "自动化率",
        "share": "降本贡献",
        "note": "判断"
      },
      "rows": [
        {
          "dim": "工单自动应答",
          "tier": "替代",
          "val": "48",
          "note": "高频简单问题直接闭环"
        },
        {
          "dim": "知识库检索",
          "tier": "辅助",
          "val": "31",
          "note": "坐席实时调取标准答案"
        },
        {
          "dim": "情绪与升级",
          "tier": "辅助",
          "val": "22",
          "note": "识别复杂问题转人工"
        },
        {
          "dim": "多语言支持",
          "tier": "扩展",
          "val": "18",
          "note": "跨区域统一服务覆盖"
        },
        {
          "dim": "质检与培训",
          "tier": "扩展",
          "val": "15",
          "note": "全量对话质检与复盘"
        }
      ],
      "rowCount": 4,
      "showShare": true,
      "showJudgment": true,
      "focusEnabled": true,
      "focusIndex": 0,
      "showDecorations": true,
      "accentColor": "#86D62B"
    }
  },
  {
    "key": "theme07_page042",
    "themeKey": "theme07",
    "pageNumber": 42,
    "layout": "THEME07-042",
    "slot": "sales-page",
    "label": "49 41",
    "bgClass": "",
    "controls": [
      {
        "key": "imageCount",
        "label": "图片数量",
        "type": "slider",
        "default": 1,
        "min": 0,
        "max": 2,
        "step": 1,
        "desc": "主视觉区图片槽数量（0–2）；为 0 时以品牌图形填充，构图保持完整。",
        "publicKey": "imageCount",
        "publicLabel": "图片数量",
        "description": "主视觉区图片槽数量（0–2）；为 0 时以品牌图形填充，构图保持完整。"
      },
      {
        "key": "imageRatio",
        "label": "图片比例",
        "type": "radio",
        "default": "landscape",
        "options": [
          {
            "value": "landscape",
            "label": "横图"
          },
          {
            "value": "portrait",
            "label": "竖图"
          },
          {
            "value": "square",
            "label": "方形"
          },
          {
            "value": "auto",
            "label": "自适应"
          }
        ],
        "desc": "图片槽比例；自适应会跟随用户上传图片的原始比例并自动居中排布。",
        "publicKey": "imageRatio",
        "publicLabel": "图片比例",
        "description": "图片槽比例；自适应会跟随用户上传图片的原始比例并自动居中排布。"
      },
      {
        "key": "segmentCount",
        "label": "卡片数量",
        "type": "slider",
        "default": 3,
        "min": 2,
        "max": 3,
        "step": 1,
        "desc": "漏斗阶段数量（2–3）。",
        "publicKey": "segmentCount",
        "publicLabel": "卡片数量",
        "description": "漏斗阶段数量（2–3）。"
      },
      {
        "key": "focusEnabled",
        "label": "重点信息",
        "type": "toggle",
        "default": true,
        "desc": "是否高亮某一个漏斗阶段作为视觉重点。",
        "publicKey": "focusEnabled",
        "publicLabel": "重点信息",
        "description": "是否高亮某一个漏斗阶段作为视觉重点。"
      },
      {
        "key": "focusIndex",
        "label": "重点元素",
        "type": "select",
        "default": 0,
        "options": [
          {
            "value": 0,
            "label": "第 1 个"
          },
          {
            "value": 1,
            "label": "第 2 个"
          },
          {
            "value": 2,
            "label": "第 3 个"
          }
        ],
        "desc": "选择被高亮的漏斗阶段。",
        "publicKey": "focusIndex",
        "publicLabel": "重点元素",
        "description": "选择被高亮的漏斗阶段。"
      },
      {
        "key": "showValues",
        "label": "数值标签",
        "type": "toggle",
        "default": true,
        "desc": "漏斗阶段内数值标签的显隐。",
        "publicKey": "showValueLabels",
        "publicLabel": "数值标签",
        "description": "漏斗阶段内数值标签的显隐。"
      },
      {
        "key": "showDecorations",
        "label": "装饰文案",
        "type": "toggle",
        "default": true,
        "desc": "背景光晕、图片角标与条码等装饰的显隐。",
        "publicKey": "showDecorations",
        "publicLabel": "装饰文案",
        "description": "背景光晕、图片角标与条码等装饰的显隐。"
      },
      {
        "key": "accentColor",
        "label": "主题色",
        "type": "color",
        "default": "#86D62B",
        "options": [
          "#86D62B",
          "#23C76A",
          "#2F7BFF",
          "#F2A93B",
          "#0E110B"
        ],
        "desc": "品牌强调色，作用于分类标记、高亮阶段与漏斗。",
        "publicKey": "accentColor",
        "publicLabel": "主题色",
        "description": "品牌强调色，作用于分类标记、高亮阶段与漏斗。"
      }
    ],
    "defaultProps": {
      "eyebrow": "Sales & Marketing AI",
      "segment": "销售与营销 AI",
      "title": "增长效率工具",
      "titleTail": "销售与营销 AI",
      "lead": "销售与营销 AI 集中在线索评分、自动外呼、邮件和广告创意；短期转化快，但同质化竞争也更明显。",
      "statLine": "融资额 24 亿美元 · 10 笔事件",
      "closing": "营销 AI 要用转化率证明自己。",
      "badge": "销售营销",
      "panelTitle": "增长漏斗 · 融资 / 亿美元",
      "segments": [
        {
          "name": "广告创意",
          "value": 8,
          "note": "获客 · 营销素材批量生成"
        },
        {
          "name": "线索评分",
          "value": 7,
          "note": "筛选 · 意向预测与排序"
        },
        {
          "name": "自动外呼",
          "value": 6,
          "note": "转化 · 邮件与语音触达"
        }
      ],
      "imageCount": 1,
      "imageRatio": "landscape",
      "segmentCount": 3,
      "focusEnabled": true,
      "focusIndex": 0,
      "showValues": true,
      "showDecorations": true,
      "accentColor": "#86D62B",
      "renderSlot": null
    }
  },
  {
    "key": "theme07_page043",
    "themeKey": "theme07",
    "pageNumber": 43,
    "layout": "THEME07-043",
    "slot": "low-code-page",
    "label": "50 42",
    "bgClass": "",
    "controls": [
      {
        "key": "imageCount",
        "label": "图片数量",
        "type": "slider",
        "default": 1,
        "min": 0,
        "max": 2,
        "step": 1,
        "desc": "主视觉区图片槽数量（0–2）；为 0 时以品牌图形填充，构图保持完整。",
        "publicKey": "imageCount",
        "publicLabel": "图片数量",
        "description": "主视觉区图片槽数量（0–2）；为 0 时以品牌图形填充，构图保持完整。"
      },
      {
        "key": "imageRatio",
        "label": "图片比例",
        "type": "radio",
        "default": "portrait",
        "options": [
          {
            "value": "portrait",
            "label": "竖图"
          },
          {
            "value": "landscape",
            "label": "横图"
          },
          {
            "value": "square",
            "label": "方形"
          },
          {
            "value": "auto",
            "label": "自适应"
          }
        ],
        "desc": "图片槽比例；自适应会跟随用户上传图片的原始比例并自动居中排布。",
        "publicKey": "imageRatio",
        "publicLabel": "图片比例",
        "description": "图片槽比例；自适应会跟随用户上传图片的原始比例并自动居中排布。"
      },
      {
        "key": "stepCount",
        "label": "卡片数量",
        "type": "slider",
        "default": 4,
        "min": 3,
        "max": 5,
        "step": 1,
        "desc": "流程编排节点数量（3–5）。",
        "publicKey": "stepCount",
        "publicLabel": "卡片数量",
        "description": "流程编排节点数量（3–5）。"
      },
      {
        "key": "metricCount",
        "label": "指标数量",
        "type": "slider",
        "default": 2,
        "min": 1,
        "max": 2,
        "step": 1,
        "desc": "客户与留存指标盘数量（1–2）。",
        "publicKey": "metricCount",
        "publicLabel": "指标数量",
        "description": "客户与留存指标盘数量（1–2）。"
      },
      {
        "key": "focusEnabled",
        "label": "重点信息",
        "type": "toggle",
        "default": true,
        "desc": "是否高亮某一个流程节点作为视觉重点。",
        "publicKey": "focusEnabled",
        "publicLabel": "重点信息",
        "description": "是否高亮某一个流程节点作为视觉重点。"
      },
      {
        "key": "focusIndex",
        "label": "重点元素",
        "type": "select",
        "default": 2,
        "options": [
          {
            "value": 0,
            "label": "第 1 个"
          },
          {
            "value": 1,
            "label": "第 2 个"
          },
          {
            "value": 2,
            "label": "第 3 个"
          },
          {
            "value": 3,
            "label": "第 4 个"
          },
          {
            "value": 4,
            "label": "第 5 个"
          }
        ],
        "desc": "选择被高亮的流程节点。",
        "publicKey": "focusIndex",
        "publicLabel": "重点元素",
        "description": "选择被高亮的流程节点。"
      },
      {
        "key": "showMetrics",
        "label": "留存面板",
        "type": "toggle",
        "default": true,
        "desc": "底部客户与留存指标盘的显隐。",
        "publicKey": "showMetrics",
        "publicLabel": "留存面板",
        "description": "底部客户与留存指标盘的显隐。"
      },
      {
        "key": "showValues",
        "label": "数值标签",
        "type": "toggle",
        "default": true,
        "desc": "指标盘内数值标签的显隐。",
        "publicKey": "showValueLabels",
        "publicLabel": "数值标签",
        "description": "指标盘内数值标签的显隐。"
      },
      {
        "key": "showDecorations",
        "label": "装饰文案",
        "type": "toggle",
        "default": true,
        "desc": "背景光晕、图片角标与条码等装饰的显隐。",
        "publicKey": "showDecorations",
        "publicLabel": "装饰文案",
        "description": "背景光晕、图片角标与条码等装饰的显隐。"
      },
      {
        "key": "accentColor",
        "label": "主题色",
        "type": "color",
        "default": "#86D62B",
        "options": [
          "#86D62B",
          "#23C76A",
          "#2F7BFF",
          "#F2A93B",
          "#0E110B"
        ],
        "desc": "品牌强调色，作用于分类标记、高亮节点与指标盘。",
        "publicKey": "accentColor",
        "publicLabel": "主题色",
        "description": "品牌强调色，作用于分类标记、高亮节点与指标盘。"
      }
    ],
    "defaultProps": {
      "eyebrow": "Low-Code AI",
      "segment": "低代码 AI 平台",
      "title": "企业流程嵌入",
      "titleTail": "低代码 AI 平台",
      "lead": "低代码 AI 平台帮助企业把模型能力嵌入内部流程；关键不是模型能力，而是交付速度和治理能力。",
      "statLine": "融资额 19 亿美元 · 6 笔事件",
      "closing": "能被业务团队使用的平台更容易扩散。",
      "badge": "低代码",
      "flowTitle": "流程编排 · Orchestration",
      "metricTitle": "客户与留存 · Retention",
      "steps": [
        {
          "name": "连接数据",
          "note": "系统与知识源"
        },
        {
          "name": "编排流程",
          "note": "可视化拖拽"
        },
        {
          "name": "嵌入业务",
          "note": "触点与审批"
        },
        {
          "name": "治理监控",
          "note": "权限与审计"
        },
        {
          "name": "复用沉淀",
          "note": "模板与资产"
        }
      ],
      "metrics": [
        {
          "label": "净收入留存",
          "value": "118",
          "unit": "%",
          "pct": 0.88,
          "note": "席位扩张驱动"
        },
        {
          "label": "企业客户中位数",
          "value": "430",
          "unit": "家",
          "pct": 0.62,
          "note": "部门级渗透"
        }
      ],
      "imageCount": 1,
      "imageRatio": "portrait",
      "stepCount": 4,
      "metricCount": 2,
      "focusEnabled": true,
      "focusIndex": 2,
      "showMetrics": true,
      "showValues": true,
      "showDecorations": true,
      "accentColor": "#86D62B",
      "renderSlot": null
    }
  },
  {
    "key": "theme07_page044",
    "themeKey": "theme07",
    "pageNumber": 44,
    "layout": "THEME07-044",
    "slot": "open-source-page",
    "label": "51 43",
    "bgClass": "",
    "controls": [
      {
        "key": "imageCount",
        "label": "图片数量",
        "type": "slider",
        "default": 1,
        "min": 0,
        "max": 2,
        "step": 1,
        "desc": "主视觉区图片槽数量（0–2）；为 0 时以品牌图形填充，构图保持完整。",
        "publicKey": "imageCount",
        "publicLabel": "图片数量",
        "description": "主视觉区图片槽数量（0–2）；为 0 时以品牌图形填充，构图保持完整。"
      },
      {
        "key": "imageRatio",
        "label": "图片比例",
        "type": "radio",
        "default": "landscape",
        "options": [
          {
            "value": "landscape",
            "label": "横图"
          },
          {
            "value": "portrait",
            "label": "竖图"
          },
          {
            "value": "square",
            "label": "方形"
          },
          {
            "value": "auto",
            "label": "自适应"
          }
        ],
        "desc": "图片槽比例；自适应会跟随用户上传图片的原始比例并自动居中排布。",
        "publicKey": "imageRatio",
        "publicLabel": "图片比例",
        "description": "图片槽比例；自适应会跟随用户上传图片的原始比例并自动居中排布。"
      },
      {
        "key": "chartType",
        "label": "图表类型",
        "type": "radio",
        "default": "ring",
        "options": [
          {
            "value": "ring",
            "label": "环形"
          },
          {
            "value": "bar",
            "label": "占比条"
          }
        ],
        "desc": "企业服务收入占比的呈现方式：环形图 / 占比条。",
        "publicKey": "chartType",
        "publicLabel": "图表类型",
        "description": "企业服务收入占比的呈现方式：环形图 / 占比条。"
      },
      {
        "key": "focusEnabled",
        "label": "重点信息",
        "type": "toggle",
        "default": true,
        "desc": "是否高亮转化路径的某一端作为视觉重点。",
        "publicKey": "focusEnabled",
        "publicLabel": "重点信息",
        "description": "是否高亮转化路径的某一端作为视觉重点。"
      },
      {
        "key": "focusIndex",
        "label": "重点元素",
        "type": "select",
        "default": 1,
        "options": [
          {
            "value": 0,
            "label": "社区影响力"
          },
          {
            "value": 1,
            "label": "企业服务"
          }
        ],
        "desc": "选择被高亮的转化节点。",
        "publicKey": "focusIndex",
        "publicLabel": "重点元素",
        "description": "选择被高亮的转化节点。"
      },
      {
        "key": "showBridge",
        "label": "转化连接",
        "type": "toggle",
        "default": true,
        "desc": "两节点之间的渐缩转化连接带的显隐。",
        "publicKey": "showBridge",
        "publicLabel": "转化连接",
        "description": "两节点之间的渐缩转化连接带的显隐。"
      },
      {
        "key": "showValues",
        "label": "数值标签",
        "type": "toggle",
        "default": true,
        "desc": "转化节点内数值标签的显隐。",
        "publicKey": "showValueLabels",
        "publicLabel": "数值标签",
        "description": "转化节点内数值标签的显隐。"
      },
      {
        "key": "showDecorations",
        "label": "装饰文案",
        "type": "toggle",
        "default": true,
        "desc": "背景光晕、图片角标与条码等装饰的显隐。",
        "publicKey": "showDecorations",
        "publicLabel": "装饰文案",
        "description": "背景光晕、图片角标与条码等装饰的显隐。"
      },
      {
        "key": "accentColor",
        "label": "主题色",
        "type": "color",
        "default": "#86D62B",
        "options": [
          "#86D62B",
          "#23C76A",
          "#2F7BFF",
          "#F2A93B",
          "#0E110B"
        ],
        "desc": "品牌强调色，作用于分类标记、高亮节点与转化连接带。",
        "publicKey": "accentColor",
        "publicLabel": "主题色",
        "description": "品牌强调色，作用于分类标记、高亮节点与转化连接带。"
      }
    ],
    "defaultProps": {
      "eyebrow": "Open-Source Models",
      "segment": "开源模型公司",
      "title": "社区影响力变现",
      "titleTail": "开源模型公司",
      "lead": "开源模型公司通过社区影响力、托管服务和企业支持变现；开源能快速获得开发者，但商业化仍需要企业级能力。",
      "statLine": "融资额 28 亿美元 · 7 笔事件",
      "closing": "开源是入口，不是完整商业模式。",
      "badge": "开源模型",
      "bridgeTitle": "影响力到收入 · 转化路径",
      "source": {
        "kicker": "社区影响力",
        "value": "2.8",
        "unit": "亿次",
        "caption": "累计模型下载量",
        "tag": "开发者入口"
      },
      "target": {
        "kicker": "企业服务",
        "pct": 37,
        "display": "37",
        "unit": "%",
        "caption": "企业服务收入占比",
        "tag": "商业化兑现"
      },
      "ribbonLabel": "影响力 → 收入",
      "imageCount": 1,
      "imageRatio": "landscape",
      "chartType": "ring",
      "focusEnabled": true,
      "focusIndex": 1,
      "showBridge": true,
      "showValues": true,
      "showDecorations": true,
      "accentColor": "#86D62B",
      "renderSlot": null
    }
  },
  {
    "key": "theme07_page045",
    "themeKey": "theme07",
    "pageNumber": 45,
    "layout": "THEME07-045",
    "slot": "alignment-page",
    "label": "52 44",
    "bgClass": "",
    "controls": [
      {
        "key": "imageCount",
        "label": "图片数量",
        "type": "slider",
        "default": 1,
        "min": 0,
        "max": 2,
        "step": 1,
        "desc": "主视觉区图片槽数量（0–2）；为 0 时以品牌图形填充，构图保持完整。",
        "publicKey": "imageCount",
        "publicLabel": "图片数量",
        "description": "主视觉区图片槽数量（0–2）；为 0 时以品牌图形填充，构图保持完整。"
      },
      {
        "key": "imageRatio",
        "label": "图片比例",
        "type": "radio",
        "default": "portrait",
        "options": [
          {
            "value": "portrait",
            "label": "竖图"
          },
          {
            "value": "landscape",
            "label": "横图"
          },
          {
            "value": "square",
            "label": "方形"
          },
          {
            "value": "auto",
            "label": "自适应"
          }
        ],
        "desc": "图片槽比例；自适应会跟随用户上传图片的原始比例并自动居中排布。",
        "publicKey": "imageRatio",
        "publicLabel": "图片比例",
        "description": "图片槽比例；自适应会跟随用户上传图片的原始比例并自动居中排布。"
      },
      {
        "key": "segmentCount",
        "label": "卡片数量",
        "type": "slider",
        "default": 3,
        "min": 2,
        "max": 3,
        "step": 1,
        "desc": "安全防线分项数量（2–3）。",
        "publicKey": "segmentCount",
        "publicLabel": "卡片数量",
        "description": "安全防线分项数量（2–3）。"
      },
      {
        "key": "focusEnabled",
        "label": "重点信息",
        "type": "toggle",
        "default": true,
        "desc": "是否高亮某一个防线分项作为视觉重点。",
        "publicKey": "focusEnabled",
        "publicLabel": "重点信息",
        "description": "是否高亮某一个防线分项作为视觉重点。"
      },
      {
        "key": "focusIndex",
        "label": "重点元素",
        "type": "select",
        "default": 0,
        "options": [
          {
            "value": 0,
            "label": "第 1 个"
          },
          {
            "value": 1,
            "label": "第 2 个"
          },
          {
            "value": 2,
            "label": "第 3 个"
          }
        ],
        "desc": "选择被高亮的防线分项。",
        "publicKey": "focusIndex",
        "publicLabel": "重点元素",
        "description": "选择被高亮的防线分项。"
      },
      {
        "key": "showShield",
        "label": "防线装饰",
        "type": "toggle",
        "default": true,
        "desc": "防线上方的防护弧线装饰的显隐。",
        "publicKey": "showShield",
        "publicLabel": "防线装饰",
        "description": "防线上方的防护弧线装饰的显隐。"
      },
      {
        "key": "showValues",
        "label": "数值标签",
        "type": "toggle",
        "default": true,
        "desc": "防线柱内数值标签的显隐。",
        "publicKey": "showValueLabels",
        "publicLabel": "数值标签",
        "description": "防线柱内数值标签的显隐。"
      },
      {
        "key": "showDecorations",
        "label": "装饰文案",
        "type": "toggle",
        "default": true,
        "desc": "背景光晕、图片角标与条码等装饰的显隐。",
        "publicKey": "showDecorations",
        "publicLabel": "装饰文案",
        "description": "背景光晕、图片角标与条码等装饰的显隐。"
      },
      {
        "key": "accentColor",
        "label": "主题色",
        "type": "color",
        "default": "#86D62B",
        "options": [
          "#86D62B",
          "#23C76A",
          "#2F7BFF",
          "#F2A93B",
          "#0E110B"
        ],
        "desc": "品牌强调色，作用于分类标记、高亮防线与防护弧线。",
        "publicKey": "accentColor",
        "publicLabel": "主题色",
        "description": "品牌强调色，作用于分类标记、高亮防线与防护弧线。"
      }
    ],
    "defaultProps": {
      "eyebrow": "Model Alignment",
      "segment": "模型安全公司",
      "title": "安全与对齐工具",
      "titleTail": "模型安全公司",
      "lead": "模型安全和对齐公司吸引长期资本关注；安全对齐既是技术壁垒，也是大客户信任入口。",
      "statLine": "融资额 21 亿美元 · 5 笔事件",
      "closing": "可信 AI 会成为企业级 AI 的基础设施。",
      "badge": "安全对齐",
      "panelTitle": "安全防线 · 融资 / 亿美元",
      "shieldLabel": "可信 AI 防线",
      "segments": [
        {
          "name": "评测平台",
          "value": 8,
          "note": "能力与风险基准"
        },
        {
          "name": "对齐工具",
          "value": 7,
          "note": "价值对齐与约束"
        },
        {
          "name": "红队服务",
          "value": 6,
          "note": "攻击与漏洞挖掘"
        }
      ],
      "imageCount": 1,
      "imageRatio": "portrait",
      "segmentCount": 3,
      "focusEnabled": true,
      "focusIndex": 0,
      "showShield": true,
      "showValues": true,
      "showDecorations": true,
      "accentColor": "#86D62B",
      "renderSlot": null
    }
  },
  {
    "key": "theme07_page046",
    "themeKey": "theme07",
    "pageNumber": 46,
    "layout": "THEME07-046",
    "slot": "capital-chapter-page",
    "label": "53 45",
    "bgClass": "",
    "controls": [
      {
        "key": "backgroundVariant",
        "label": "背景风格",
        "type": "radio",
        "default": "dark",
        "options": [
          {
            "value": "dark",
            "label": "深色"
          },
          {
            "value": "paper",
            "label": "浅色"
          }
        ],
        "desc": "章节页背景：深色（强换气节奏）/ 浅色（与正文统一）。",
        "publicKey": "backgroundVariant",
        "publicLabel": "背景风格",
        "description": "章节页背景：深色（强换气节奏）/ 浅色（与正文统一）。"
      },
      {
        "key": "layout",
        "label": "排版",
        "type": "radio",
        "default": "left",
        "options": [
          {
            "value": "left",
            "label": "左对齐"
          },
          {
            "value": "center",
            "label": "居中"
          }
        ],
        "desc": "标题与关键词的整体排布方式；居中时隐藏右侧集群图。",
        "publicKey": "layout",
        "publicLabel": "排版",
        "description": "标题与关键词的整体排布方式；居中时隐藏右侧集群图。"
      },
      {
        "key": "showIndex",
        "label": "章节序号",
        "type": "toggle",
        "default": true,
        "desc": "超大章节编号水印的显隐。",
        "publicKey": "showIndex",
        "publicLabel": "章节序号",
        "description": "超大章节编号水印的显隐。"
      },
      {
        "key": "showKeywords",
        "label": "关键词",
        "type": "toggle",
        "default": true,
        "desc": "本章关键词标签行的显隐。",
        "publicKey": "showKeywords",
        "publicLabel": "关键词",
        "description": "本章关键词标签行的显隐。"
      },
      {
        "key": "keywordCount",
        "label": "关键词数量",
        "type": "slider",
        "default": 6,
        "min": 3,
        "max": 6,
        "step": 1,
        "desc": "展示的关键词数量（3–6）。",
        "publicKey": "keywordCount",
        "publicLabel": "关键词数量",
        "description": "展示的关键词数量（3–6）。"
      },
      {
        "key": "showCluster",
        "label": "地理集群图",
        "type": "toggle",
        "default": true,
        "desc": "右侧地理集群气泡图的显隐（仅左对齐排版生效）。",
        "publicKey": "showCluster",
        "publicLabel": "地理集群图",
        "description": "右侧地理集群气泡图的显隐（仅左对齐排版生效）。"
      },
      {
        "key": "hubCount",
        "label": "集群节点数量",
        "type": "slider",
        "default": 5,
        "min": 3,
        "max": 5,
        "step": 1,
        "desc": "地理集群展示的城市节点数量（3–5）。",
        "publicKey": "hubCount",
        "publicLabel": "集群节点数量",
        "description": "地理集群展示的城市节点数量（3–5）。"
      },
      {
        "key": "showDecorations",
        "label": "装饰文案",
        "type": "toggle",
        "default": true,
        "desc": "背景光晕与条码等装饰的显隐。",
        "publicKey": "showDecorations",
        "publicLabel": "装饰文案",
        "description": "背景光晕与条码等装饰的显隐。"
      },
      {
        "key": "accentColor",
        "label": "主题色",
        "type": "color",
        "default": "#86D62B",
        "options": [
          "#86D62B",
          "#23C76A",
          "#2F7BFF",
          "#F2A93B",
          "#0E110B"
        ],
        "desc": "品牌强调色。",
        "publicKey": "accentColor",
        "publicLabel": "主题色",
        "description": "品牌强调色。"
      }
    ],
    "defaultProps": {
      "eyebrow": "Chapter",
      "index": "04",
      "title": "资本与地区结构",
      "sub": "轮次、投资人和地理集群",
      "lead": "本章进入资本结构部分，拆解轮次、投资人、云厂商、NVIDIA 生态和地理分布。",
      "closing": "下一组页面进入更细的拆解。",
      "keywords": [
        "后期轮",
        "战略投资",
        "云资源",
        "湾区",
        "纽约",
        "西雅图"
      ],
      "clusterTitle": "地理集群 · 资本份额",
      "hubs": [
        {
          "label": "旧金山湾区",
          "en": "Bay Area",
          "pct": 63.9,
          "x": 36,
          "y": 46,
          "d": 60
        },
        {
          "label": "纽约",
          "en": "New York",
          "pct": 12.4,
          "x": 74,
          "y": 30,
          "d": 31
        },
        {
          "label": "西雅图",
          "en": "Seattle",
          "pct": 9.8,
          "x": 78,
          "y": 70,
          "d": 27
        },
        {
          "label": "波士顿",
          "en": "Boston",
          "pct": 7.7,
          "x": 24,
          "y": 82,
          "d": 23
        },
        {
          "label": "其他地区",
          "en": "Others",
          "pct": 6.2,
          "x": 56,
          "y": 84,
          "d": 19
        }
      ],
      "backgroundVariant": "dark",
      "layout": "left",
      "showIndex": true,
      "showKeywords": true,
      "keywordCount": 6,
      "showCluster": true,
      "hubCount": 5,
      "showDecorations": true,
      "accentColor": "#86D62B"
    }
  },
  {
    "key": "theme07_page047",
    "themeKey": "theme07",
    "pageNumber": 47,
    "layout": "THEME07-047",
    "slot": "early-stage-page",
    "label": "54 46",
    "bgClass": "",
    "controls": [
      {
        "key": "rowCount",
        "label": "行数量",
        "type": "slider",
        "default": 4,
        "min": 3,
        "max": 4,
        "step": 1,
        "desc": "表格展示的阶段行数量（3–4）。",
        "publicKey": "rowCount",
        "publicLabel": "行数量",
        "description": "表格展示的阶段行数量（3–4）。"
      },
      {
        "key": "showBubble",
        "label": "气泡列",
        "type": "toggle",
        "default": true,
        "desc": "平均单笔气泡列（气泡大小=平均单笔规模）的显隐。",
        "publicKey": "showBubble",
        "publicLabel": "气泡列",
        "description": "平均单笔气泡列（气泡大小=平均单笔规模）的显隐。"
      },
      {
        "key": "showThemes",
        "label": "主题标签列",
        "type": "toggle",
        "default": true,
        "desc": "萌芽主题标签列的显隐。",
        "publicKey": "showThemes",
        "publicLabel": "主题标签列",
        "description": "萌芽主题标签列的显隐。"
      },
      {
        "key": "showSignal",
        "label": "信号列",
        "type": "toggle",
        "default": true,
        "desc": "信号判断列的显隐；关闭后表格更紧凑。",
        "publicKey": "showSignal",
        "publicLabel": "信号列",
        "description": "信号判断列的显隐；关闭后表格更紧凑。"
      },
      {
        "key": "focusEnabled",
        "label": "重点信息",
        "type": "toggle",
        "default": true,
        "desc": "是否高亮某一行作为视觉重点。",
        "publicKey": "focusEnabled",
        "publicLabel": "重点信息",
        "description": "是否高亮某一行作为视觉重点。"
      },
      {
        "key": "focusIndex",
        "label": "重点元素",
        "type": "select",
        "default": 0,
        "options": [
          {
            "value": 0,
            "label": "第 1 行"
          },
          {
            "value": 1,
            "label": "第 2 行"
          },
          {
            "value": 2,
            "label": "第 3 行"
          },
          {
            "value": 3,
            "label": "第 4 行"
          }
        ],
        "desc": "选择被高亮的行。",
        "publicKey": "focusIndex",
        "publicLabel": "重点元素",
        "description": "选择被高亮的行。"
      },
      {
        "key": "showDecorations",
        "label": "装饰文案",
        "type": "toggle",
        "default": true,
        "desc": "背景光晕与条码等装饰的显隐。",
        "publicKey": "showDecorations",
        "publicLabel": "装饰文案",
        "description": "背景光晕与条码等装饰的显隐。"
      },
      {
        "key": "accentColor",
        "label": "主题色",
        "type": "color",
        "default": "#86D62B",
        "options": [
          "#86D62B",
          "#23C76A",
          "#2F7BFF",
          "#F2A93B",
          "#0E110B"
        ],
        "desc": "品牌强调色，作用于阶段标记、气泡、高亮行与锚点数字。",
        "publicKey": "accentColor",
        "publicLabel": "主题色",
        "description": "品牌强调色，作用于阶段标记、气泡、高亮行与锚点数字。"
      }
    ],
    "defaultProps": {
      "eyebrow": "Early Stage Signal",
      "marker": "Seed → B",
      "season": "早期轮 · 主题萌芽",
      "title": "新主题萌芽",
      "titleTail": "早期轮信号",
      "lead": "Seed 和 A 轮金额较小，但代表新主题正在形成；早期机会集中在 Agent、安全、具身智能和行业专用模型。",
      "statLine": "种子轮 8 笔 / 1.2 亿美元 · A 轮 12 笔 / 1.8 亿美元",
      "anchorValue": "20.6%",
      "anchorLabel": "早期轮占全年事件数",
      "closing": "小金额交易往往藏着下一轮主题。",
      "colHeads": {
        "dim": "轮次",
        "events": "事件数",
        "amount": "融资额",
        "bubble": "平均单笔",
        "themes": "萌芽主题",
        "note": "信号"
      },
      "rows": [
        {
          "dim": "种子轮",
          "en": "Seed",
          "events": "8",
          "amount": "1.2",
          "avg": 0.15,
          "themes": [
            "Agent",
            "安全"
          ],
          "note": "主题验证期"
        },
        {
          "dim": "A 轮",
          "en": "Series A",
          "events": "12",
          "amount": "1.8",
          "avg": 0.15,
          "themes": [
            "具身智能",
            "行业模型"
          ],
          "note": "场景打磨期"
        },
        {
          "dim": "B 轮",
          "en": "Series B",
          "events": "6",
          "amount": "3.4",
          "avg": 0.57,
          "themes": [
            "企业应用",
            "数据闭环"
          ],
          "note": "规模化前夜"
        },
        {
          "dim": "早期战略",
          "en": "Strategic",
          "events": "4",
          "amount": "2.1",
          "avg": 0.53,
          "themes": [
            "云资源",
            "平台卡位"
          ],
          "note": "生态绑定"
        }
      ],
      "rowCount": 4,
      "showBubble": true,
      "showThemes": true,
      "showSignal": true,
      "focusEnabled": true,
      "focusIndex": 0,
      "showDecorations": true,
      "accentColor": "#86D62B"
    }
  },
  {
    "key": "theme07_page048",
    "themeKey": "theme07",
    "pageNumber": 48,
    "layout": "THEME07-048",
    "slot": "deal-structure-page",
    "label": "55 47",
    "bgClass": "",
    "controls": [
      {
        "key": "componentCount",
        "label": "卡片数量",
        "type": "slider",
        "default": 4,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "交易结构构成项数量（2–4）。",
        "publicKey": "componentCount",
        "publicLabel": "卡片数量",
        "description": "交易结构构成项数量（2–4）。"
      },
      {
        "key": "chartType",
        "label": "图表类型",
        "type": "radio",
        "default": "stack",
        "options": [
          {
            "value": "stack",
            "label": "堆叠条"
          },
          {
            "value": "donut",
            "label": "环形图"
          }
        ],
        "desc": "构成占比图表样式：堆叠条 / 环形图。",
        "publicKey": "chartType",
        "publicLabel": "图表类型",
        "description": "构成占比图表样式：堆叠条 / 环形图。"
      },
      {
        "key": "showStats",
        "label": "锚点指标",
        "type": "toggle",
        "default": true,
        "desc": "左侧事件数与平均单笔锚点指标的显隐。",
        "publicKey": "showStats",
        "publicLabel": "锚点指标",
        "description": "左侧事件数与平均单笔锚点指标的显隐。"
      },
      {
        "key": "focusEnabled",
        "label": "重点信息",
        "type": "toggle",
        "default": true,
        "desc": "是否高亮某一个构成项作为视觉重点。",
        "publicKey": "focusEnabled",
        "publicLabel": "重点信息",
        "description": "是否高亮某一个构成项作为视觉重点。"
      },
      {
        "key": "focusIndex",
        "label": "重点元素",
        "type": "select",
        "default": 0,
        "options": [
          {
            "value": 0,
            "label": "第 1 个"
          },
          {
            "value": 1,
            "label": "第 2 个"
          },
          {
            "value": 2,
            "label": "第 3 个"
          },
          {
            "value": 3,
            "label": "第 4 个"
          }
        ],
        "desc": "选择被高亮的构成项。",
        "publicKey": "focusIndex",
        "publicLabel": "重点元素",
        "description": "选择被高亮的构成项。"
      },
      {
        "key": "showDecorations",
        "label": "装饰文案",
        "type": "toggle",
        "default": true,
        "desc": "背景光晕与条码等装饰的显隐。",
        "publicKey": "showDecorations",
        "publicLabel": "装饰文案",
        "description": "背景光晕与条码等装饰的显隐。"
      },
      {
        "key": "accentColor",
        "label": "主题色",
        "type": "color",
        "default": "#86D62B",
        "options": [
          "#86D62B",
          "#23C76A",
          "#2F7BFF",
          "#F2A93B",
          "#0E110B"
        ],
        "desc": "品牌强调色，作用于图表、锚点数字与高亮构成项。",
        "publicKey": "accentColor",
        "publicLabel": "主题色",
        "description": "品牌强调色，作用于图表、锚点数字与高亮构成项。"
      }
    ],
    "defaultProps": {
      "eyebrow": "Undisclosed Mega Rounds",
      "title": "复杂交易结构",
      "titleTail": "未披露巨额轮次",
      "sub": "未披露巨额轮次",
      "lead": "未披露轮次常对应战略投资、债务组合或云资源置换；不披露不代表信息不足，而是交易结构更复杂。",
      "closing": "AI 融资越来越像资源组合交易。",
      "panelTitle": "单笔交易结构拆解 · 构成占比",
      "stats": [
        {
          "value": "22",
          "unit": "笔",
          "label": "未披露巨额轮次"
        },
        {
          "value": "18.6",
          "unit": "亿美元",
          "label": "平均单笔规模"
        }
      ],
      "components": [
        {
          "name": "云资源置换",
          "en": "Cloud Credits",
          "pct": 39,
          "note": "以算力额度换取股权或优先供给"
        },
        {
          "name": "战略投资",
          "en": "Strategic",
          "pct": 31,
          "note": "产业方与大厂的战略持股"
        },
        {
          "name": "债务组合",
          "en": "Debt / Convertible",
          "pct": 18,
          "note": "债务与可转债等结构化融资"
        },
        {
          "name": "纯股权",
          "en": "Pure Equity",
          "pct": 12,
          "note": "传统现金对价的股权部分"
        }
      ],
      "componentCount": 4,
      "chartType": "stack",
      "showStats": true,
      "focusEnabled": true,
      "focusIndex": 0,
      "showDecorations": true,
      "accentColor": "#86D62B"
    }
  },
  {
    "key": "theme07_page049",
    "themeKey": "theme07",
    "pageNumber": 49,
    "layout": "THEME07-049",
    "slot": "investor-mix-page",
    "label": "56 48",
    "bgClass": "",
    "controls": [
      {
        "key": "chartType",
        "label": "图表类型",
        "type": "radio",
        "default": "donut",
        "options": [
          {
            "value": "donut",
            "label": "环形图"
          },
          {
            "value": "bars",
            "label": "占比条"
          }
        ],
        "desc": "分类占比图表样式：环形图 / 占比条。",
        "publicKey": "chartType",
        "publicLabel": "图表类型",
        "description": "分类占比图表样式：环形图 / 占比条。"
      },
      {
        "key": "segmentCount",
        "label": "卡片数量",
        "type": "slider",
        "default": 4,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "分类类型分段数量（2–4）。",
        "publicKey": "categoryCount",
        "publicLabel": "卡片数量",
        "description": "分类类型分段数量（2–4）。"
      },
      {
        "key": "focusEnabled",
        "label": "重点信息",
        "type": "toggle",
        "default": true,
        "desc": "是否高亮某一类角色作为视觉重点。",
        "publicKey": "focusEnabled",
        "publicLabel": "重点信息",
        "description": "是否高亮某一类角色作为视觉重点。"
      },
      {
        "key": "focusIndex",
        "label": "重点元素",
        "type": "select",
        "default": 0,
        "options": [
          {
            "value": 0,
            "label": "第 1 个"
          },
          {
            "value": 1,
            "label": "第 2 个"
          },
          {
            "value": 2,
            "label": "第 3 个"
          },
          {
            "value": 3,
            "label": "第 4 个"
          }
        ],
        "desc": "选择被高亮的分类类型。",
        "publicKey": "focusIndex",
        "publicLabel": "重点元素",
        "description": "选择被高亮的分类类型。"
      },
      {
        "key": "showLegend",
        "label": "图例",
        "type": "toggle",
        "default": true,
        "desc": "环形图右侧图例列表的显隐。",
        "publicKey": "showLegend",
        "publicLabel": "图例",
        "description": "环形图右侧图例列表的显隐。"
      },
      {
        "key": "showTimeline",
        "label": "阶段时间轴",
        "type": "toggle",
        "default": true,
        "desc": "底部来源演进时间轴的显隐。",
        "publicKey": "showTimeline",
        "publicLabel": "阶段时间轴",
        "description": "底部来源演进时间轴的显隐。"
      },
      {
        "key": "nodeCount",
        "label": "节点数量",
        "type": "slider",
        "default": 3,
        "min": 2,
        "max": 3,
        "step": 1,
        "desc": "时间轴上的阶段节点数量（2–3）。",
        "publicKey": "nodeCount",
        "publicLabel": "节点数量",
        "description": "时间轴上的阶段节点数量（2–3）。"
      },
      {
        "key": "showDecorations",
        "label": "装饰文案",
        "type": "toggle",
        "default": true,
        "desc": "背景光晕与条码等装饰的显隐。",
        "publicKey": "showDecorations",
        "publicLabel": "装饰文案",
        "description": "背景光晕与条码等装饰的显隐。"
      },
      {
        "key": "accentColor",
        "label": "主题色",
        "type": "color",
        "default": "#86D62B",
        "options": [
          "#86D62B",
          "#23C76A",
          "#2F7BFF",
          "#F2A93B",
          "#0E110B"
        ],
        "desc": "品牌强调色，作用于图表、高亮分类类型与时间轴节点。",
        "publicKey": "accentColor",
        "publicLabel": "主题色",
        "description": "品牌强调色，作用于图表、高亮分类类型与时间轴节点。"
      }
    ],
    "defaultProps": {
      "eyebrow": "Investor Mix",
      "title": "资本来源结构",
      "titleTail": "投资人类型分布",
      "sub": "投资人类型分布",
      "marker": "投资人类型",
      "lead": "传统 VC、企业战略投资者、成长基金和云厂商共同推动 AI 大额融资；AI 融资已经从纯 VC 交易转向产业资本混合交易。",
      "closing": "钱的来源本身也是产业结构信号。",
      "panelTitle": "投资人类型占比",
      "timelineLabel": "资本来源演进 · 2020 — 2024",
      "segments": [
        {
          "label": "传统 VC",
          "value": 42,
          "note": "经典风险投资基金"
        },
        {
          "label": "企业战略",
          "value": 27,
          "note": "产业方战略投资者"
        },
        {
          "label": "成长基金",
          "value": 18,
          "note": "后期成长与跨界基金"
        },
        {
          "label": "云厂商相关",
          "value": 13,
          "note": "云厂商及关联资本"
        }
      ],
      "nodes": [
        {
          "year": "2020 — 22",
          "title": "VC 主导",
          "note": "经典风险投资定义估值锚"
        },
        {
          "year": "2023",
          "title": "战略资本进入",
          "note": "大厂与产业方开始战略持股"
        },
        {
          "year": "2024",
          "title": "产业资本混合",
          "note": "VC 与产业资本共同主导大额轮"
        }
      ],
      "chartType": "donut",
      "segmentCount": 4,
      "focusEnabled": true,
      "focusIndex": 0,
      "showLegend": true,
      "showTimeline": true,
      "nodeCount": 3,
      "showDecorations": true,
      "accentColor": "#86D62B"
    }
  },
  {
    "key": "theme07_page050",
    "themeKey": "theme07",
    "pageNumber": 50,
    "layout": "THEME07-050",
    "slot": "resource-page",
    "label": "57 49",
    "bgClass": "",
    "controls": [
      {
        "key": "imageCount",
        "label": "图片数量",
        "type": "slider",
        "default": 1,
        "min": 0,
        "max": 2,
        "step": 1,
        "desc": "主视觉区图片槽数量（0–2）；为 0 时以品牌图形填充，构图保持完整。",
        "publicKey": "imageCount",
        "publicLabel": "图片数量",
        "description": "主视觉区图片槽数量（0–2）；为 0 时以品牌图形填充，构图保持完整。"
      },
      {
        "key": "imageRatio",
        "label": "图片比例",
        "type": "radio",
        "default": "landscape",
        "options": [
          {
            "value": "landscape",
            "label": "横图"
          },
          {
            "value": "portrait",
            "label": "竖图"
          },
          {
            "value": "square",
            "label": "方形"
          },
          {
            "value": "auto",
            "label": "自适应"
          }
        ],
        "desc": "图片槽比例；自适应会跟随用户上传图片的原始比例并自动居中排布。",
        "publicKey": "imageRatio",
        "publicLabel": "图片比例",
        "description": "图片槽比例；自适应会跟随用户上传图片的原始比例并自动居中排布。"
      },
      {
        "key": "cardCount",
        "label": "卡片数量",
        "type": "slider",
        "default": 4,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "资源类型卡数量（2–4）。",
        "publicKey": "cardCount",
        "publicLabel": "卡片数量",
        "description": "资源类型卡数量（2–4）。"
      },
      {
        "key": "focusEnabled",
        "label": "重点信息",
        "type": "toggle",
        "default": true,
        "desc": "是否高亮某一张资源卡作为视觉重点。",
        "publicKey": "focusEnabled",
        "publicLabel": "重点信息",
        "description": "是否高亮某一张资源卡作为视觉重点。"
      },
      {
        "key": "focusIndex",
        "label": "重点元素",
        "type": "select",
        "default": 0,
        "options": [
          {
            "value": 0,
            "label": "第 1 张"
          },
          {
            "value": 1,
            "label": "第 2 张"
          },
          {
            "value": 2,
            "label": "第 3 张"
          },
          {
            "value": 3,
            "label": "第 4 张"
          }
        ],
        "desc": "选择被高亮的资源卡。",
        "publicKey": "focusIndex",
        "publicLabel": "重点元素",
        "description": "选择被高亮的资源卡。"
      },
      {
        "key": "showMeter",
        "label": "强度条",
        "type": "toggle",
        "default": true,
        "desc": "资源卡底部资源强度示意条的显隐。",
        "publicKey": "showMeter",
        "publicLabel": "强度条",
        "description": "资源卡底部资源强度示意条的显隐。"
      },
      {
        "key": "showDecorations",
        "label": "装饰文案",
        "type": "toggle",
        "default": true,
        "desc": "背景光晕、图片角标与条码等装饰的显隐。",
        "publicKey": "showDecorations",
        "publicLabel": "装饰文案",
        "description": "背景光晕、图片角标与条码等装饰的显隐。"
      },
      {
        "key": "accentColor",
        "label": "主题色",
        "type": "color",
        "default": "#86D62B",
        "options": [
          "#86D62B",
          "#23C76A",
          "#2F7BFF",
          "#F2A93B",
          "#0E110B"
        ],
        "desc": "品牌强调色，作用于资源标记、强度条与高亮卡。",
        "publicKey": "accentColor",
        "publicLabel": "主题色",
        "description": "品牌强调色，作用于资源标记、强度条与高亮卡。"
      }
    ],
    "defaultProps": {
      "eyebrow": "Strategic Investors",
      "segment": "战略投资者角色",
      "title": "钱以外的资源",
      "titleTail": "战略投资者角色",
      "lead": "战略投资者提供渠道、云资源、芯片供应和客户入口；交易真正价值经常不只在现金，而在关键资源绑定。",
      "statLine": "资源绑定是大额融资的隐性条款",
      "closing": "AI 公司融资是在锁定未来资源。",
      "badge": "战略资源",
      "panelTitle": "战略资源构成",
      "cards": [
        {
          "glyph": "云",
          "label": "云资源授信",
          "value": "118",
          "unit": "亿美元",
          "note": "云算力额度与折扣承诺",
          "w": 1
        },
        {
          "glyph": "销",
          "label": "联合销售",
          "value": "36",
          "unit": "起",
          "note": "战略客户渠道与转介",
          "w": 0.62
        },
        {
          "glyph": "芯",
          "label": "芯片供应承诺",
          "value": "22",
          "unit": "起",
          "note": "GPU / 加速卡优先供给",
          "w": 0.46
        },
        {
          "glyph": "数",
          "label": "数据合作",
          "value": "17",
          "unit": "起",
          "note": "训练与评测数据互通",
          "w": 0.38
        }
      ],
      "imageCount": 1,
      "imageRatio": "landscape",
      "cardCount": 4,
      "focusEnabled": true,
      "focusIndex": 0,
      "showMeter": true,
      "showDecorations": true,
      "accentColor": "#86D62B",
      "renderSlot": null
    }
  },
  {
    "key": "theme07_page051",
    "themeKey": "theme07",
    "pageNumber": 51,
    "layout": "THEME07-051",
    "slot": "alliance-page",
    "label": "58 50",
    "bgClass": "",
    "controls": [
      {
        "key": "providerCount",
        "label": "卡片数量",
        "type": "slider",
        "default": 4,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "云厂商节点数量（2–4）。",
        "publicKey": "providerCount",
        "publicLabel": "卡片数量",
        "description": "云厂商节点数量（2–4）。"
      },
      {
        "key": "chartType",
        "label": "图表类型",
        "type": "radio",
        "default": "map",
        "options": [
          {
            "value": "map",
            "label": "关系图"
          },
          {
            "value": "bars",
            "label": "占比条"
          }
        ],
        "desc": "主图表样式：联盟关系图 / 投资占比条。",
        "publicKey": "chartType",
        "publicLabel": "图表类型",
        "description": "主图表样式：联盟关系图 / 投资占比条。"
      },
      {
        "key": "focusEnabled",
        "label": "重点信息",
        "type": "toggle",
        "default": true,
        "desc": "是否高亮某一个云厂商作为视觉重点。",
        "publicKey": "focusEnabled",
        "publicLabel": "重点信息",
        "description": "是否高亮某一个云厂商作为视觉重点。"
      },
      {
        "key": "focusIndex",
        "label": "重点元素",
        "type": "select",
        "default": 0,
        "options": [
          {
            "value": 0,
            "label": "第 1 个"
          },
          {
            "value": 1,
            "label": "第 2 个"
          },
          {
            "value": 2,
            "label": "第 3 个"
          },
          {
            "value": 3,
            "label": "第 4 个"
          }
        ],
        "desc": "选择被高亮的云厂商。",
        "publicKey": "focusIndex",
        "publicLabel": "重点元素",
        "description": "选择被高亮的云厂商。"
      },
      {
        "key": "showLoop",
        "label": "回路标识",
        "type": "toggle",
        "default": true,
        "desc": "算力消费回收的回路连接与闭环说明显隐。",
        "publicKey": "showLoop",
        "publicLabel": "回路标识",
        "description": "算力消费回收的回路连接与闭环说明显隐。"
      },
      {
        "key": "showValues",
        "label": "数值标签",
        "type": "toggle",
        "default": true,
        "desc": "节点 / 连接上的投资数值标签显隐。",
        "publicKey": "showValueLabels",
        "publicLabel": "数值标签",
        "description": "节点 / 连接上的投资数值标签显隐。"
      },
      {
        "key": "showDecorations",
        "label": "装饰文案",
        "type": "toggle",
        "default": true,
        "desc": "背景光晕与条码等装饰的显隐。",
        "publicKey": "showDecorations",
        "publicLabel": "装饰文案",
        "description": "背景光晕与条码等装饰的显隐。"
      },
      {
        "key": "accentColor",
        "label": "主题色",
        "type": "color",
        "default": "#86D62B",
        "options": [
          "#86D62B",
          "#23C76A",
          "#2F7BFF",
          "#F2A93B",
          "#0E110B"
        ],
        "desc": "品牌强调色，作用于厂商节点、投资连接与高亮节点。",
        "publicKey": "accentColor",
        "publicLabel": "主题色",
        "description": "品牌强调色，作用于厂商节点、投资连接与高亮节点。"
      }
    ],
    "defaultProps": {
      "eyebrow": "Cloud Alliances",
      "segment": "云厂商联盟",
      "title": "投资与算力消费闭环",
      "titleTail": "云厂商联盟",
      "lead": "云厂商投资 AI 公司，并通过算力消费回收价值；云投资本质上是在锁定未来算力需求。",
      "closing": "云资源正在成为融资交易的一部分。",
      "chartTitle": "云厂商 · 模型公司联盟",
      "barsTitle": "云厂商相关投资 / 占比",
      "totalVal": "252",
      "totalUnit": "亿美元",
      "totalLbl": "云厂商相关投资合计",
      "hub": {
        "lead": "AI 模型公司",
        "sub": "算力需求方"
      },
      "cycle": [
        "资本投资",
        "算力授信",
        "消费回收"
      ],
      "legendInvest": "资本投资",
      "legendReturn": "算力消费回收",
      "providers": [
        {
          "label": "Azure",
          "value": 88,
          "note": "Microsoft 云"
        },
        {
          "label": "AWS",
          "value": 74,
          "note": "Amazon 云"
        },
        {
          "label": "Google Cloud",
          "value": 69,
          "note": "Google 云"
        },
        {
          "label": "Oracle Cloud",
          "value": 21,
          "note": "Oracle 云"
        }
      ],
      "providerCount": 4,
      "chartType": "map",
      "focusEnabled": true,
      "focusIndex": 0,
      "showLoop": true,
      "showValues": true,
      "showDecorations": true,
      "accentColor": "#86D62B"
    }
  },
  {
    "key": "theme07_page052",
    "themeKey": "theme07",
    "pageNumber": 52,
    "layout": "THEME07-052",
    "slot": "ecosystem-page",
    "label": "59 51",
    "bgClass": "",
    "controls": [
      {
        "key": "imageCount",
        "label": "图片数量",
        "type": "slider",
        "default": 1,
        "min": 0,
        "max": 2,
        "step": 1,
        "desc": "主视觉区图片槽数量（0–2）；为 0 时以品牌图形填充，构图保持完整。",
        "publicKey": "imageCount",
        "publicLabel": "图片数量",
        "description": "主视觉区图片槽数量（0–2）；为 0 时以品牌图形填充，构图保持完整。"
      },
      {
        "key": "imageRatio",
        "label": "图片比例",
        "type": "radio",
        "default": "portrait",
        "options": [
          {
            "value": "portrait",
            "label": "竖图"
          },
          {
            "value": "landscape",
            "label": "横图"
          },
          {
            "value": "square",
            "label": "方形"
          },
          {
            "value": "auto",
            "label": "自适应"
          }
        ],
        "desc": "图片槽比例；自适应会跟随用户上传图片的原始比例并自动居中排布。",
        "publicKey": "imageRatio",
        "publicLabel": "图片比例",
        "description": "图片槽比例；自适应会跟随用户上传图片的原始比例并自动居中排布。"
      },
      {
        "key": "segmentCount",
        "label": "卡片数量",
        "type": "slider",
        "default": 4,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "生态环上的节点数量（2–4）。",
        "publicKey": "segmentCount",
        "publicLabel": "卡片数量",
        "description": "生态环上的节点数量（2–4）。"
      },
      {
        "key": "focusEnabled",
        "label": "重点信息",
        "type": "toggle",
        "default": true,
        "desc": "是否高亮某一个生态节点作为视觉重点。",
        "publicKey": "focusEnabled",
        "publicLabel": "重点信息",
        "description": "是否高亮某一个生态节点作为视觉重点。"
      },
      {
        "key": "focusIndex",
        "label": "重点元素",
        "type": "select",
        "default": 0,
        "options": [
          {
            "value": 0,
            "label": "第 1 个"
          },
          {
            "value": 1,
            "label": "第 2 个"
          },
          {
            "value": 2,
            "label": "第 3 个"
          },
          {
            "value": 3,
            "label": "第 4 个"
          }
        ],
        "desc": "选择被高亮的生态节点。",
        "publicKey": "focusIndex",
        "publicLabel": "重点元素",
        "description": "选择被高亮的生态节点。"
      },
      {
        "key": "showSpokes",
        "label": "连接线",
        "type": "toggle",
        "default": true,
        "desc": "中心 GPU 节点到各生态节点的连接线显隐。",
        "publicKey": "showSpokes",
        "publicLabel": "连接线",
        "description": "中心 GPU 节点到各生态节点的连接线显隐。"
      },
      {
        "key": "showValues",
        "label": "数值标签",
        "type": "toggle",
        "default": true,
        "desc": "节点内数值标签的显隐。",
        "publicKey": "showValueLabels",
        "publicLabel": "数值标签",
        "description": "节点内数值标签的显隐。"
      },
      {
        "key": "showDecorations",
        "label": "装饰文案",
        "type": "toggle",
        "default": true,
        "desc": "背景光晕、图片角标与条码等装饰的显隐。",
        "publicKey": "showDecorations",
        "publicLabel": "装饰文案",
        "description": "背景光晕、图片角标与条码等装饰的显隐。"
      },
      {
        "key": "accentColor",
        "label": "主题色",
        "type": "color",
        "default": "#86D62B",
        "options": [
          "#86D62B",
          "#23C76A",
          "#2F7BFF",
          "#F2A93B",
          "#0E110B"
        ],
        "desc": "品牌强调色，作用于生态节点、连接线与高亮节点。",
        "publicKey": "accentColor",
        "publicLabel": "主题色",
        "description": "品牌强调色，作用于生态节点、连接线与高亮节点。"
      }
    ],
    "defaultProps": {
      "eyebrow": "NVIDIA Ecosystem",
      "segment": "NVIDIA 生态",
      "title": "GPU 资源链条",
      "titleTail": "NVIDIA 生态",
      "lead": "NVIDIA 生态内融资围绕 GPU、网络、集群运维和推理优化展开；谁能稳定拿到算力，谁就更容易获得下一轮资本。",
      "statLine": "以 GPU 为中心的资源链条",
      "closing": "算力供给能力正在变成融资能力。",
      "badge": "GPU 生态",
      "panelTitle": "生态融资分布",
      "hub": {
        "lead": "GPU",
        "sub": "NVIDIA 生态"
      },
      "legend": "节点大小 · 数值 = 融资额（亿美元）",
      "nodes": [
        {
          "label": "GPU 云",
          "value": 64
        },
        {
          "label": "集群管理",
          "value": 12
        },
        {
          "label": "推理优化",
          "value": 9
        },
        {
          "label": "芯片互联",
          "value": 7
        }
      ],
      "imageCount": 1,
      "imageRatio": "portrait",
      "segmentCount": 4,
      "focusEnabled": true,
      "focusIndex": 0,
      "showSpokes": true,
      "showValues": true,
      "showDecorations": true,
      "accentColor": "#86D62B",
      "renderSlot": null
    }
  },
  {
    "key": "theme07_page053",
    "themeKey": "theme07",
    "pageNumber": 53,
    "layout": "THEME07-053",
    "slot": "geo-center-page",
    "label": "60 52",
    "bgClass": "",
    "controls": [
      {
        "key": "numberSlant",
        "label": "数字倾斜",
        "type": "toggle",
        "default": true,
        "desc": "主数字是否应用品牌斜切（italic-slant）效果。",
        "publicKey": "numberSlant",
        "publicLabel": "数字倾斜",
        "description": "主数字是否应用品牌斜切（italic-slant）效果。"
      },
      {
        "key": "auxCount",
        "label": "卡片数量",
        "type": "slider",
        "default": 3,
        "min": 0,
        "max": 3,
        "step": 1,
        "desc": "辅助指标数量（0–3）；为 0 时只保留主数字。",
        "publicKey": "auxCount",
        "publicLabel": "卡片数量",
        "description": "辅助指标数量（0–3）；为 0 时只保留主数字。"
      },
      {
        "key": "showCaption",
        "label": "说明文案",
        "type": "toggle",
        "default": true,
        "desc": "主数字下方解释性说明的显隐。",
        "publicKey": "showCaption",
        "publicLabel": "说明文案",
        "description": "主数字下方解释性说明的显隐。"
      },
      {
        "key": "showNote",
        "label": "辅助注释",
        "type": "toggle",
        "default": true,
        "desc": "底部补充注释的显隐。",
        "publicKey": "showNote",
        "publicLabel": "辅助注释",
        "description": "底部补充注释的显隐。"
      },
      {
        "key": "showLens",
        "label": "品牌图形",
        "type": "toggle",
        "default": true,
        "desc": "品牌透镜图形（焦点圆盘）的显隐。",
        "publicKey": "showLens",
        "publicLabel": "品牌图形",
        "description": "品牌透镜图形（焦点圆盘）的显隐。"
      },
      {
        "key": "showDecorations",
        "label": "装饰文案",
        "type": "toggle",
        "default": true,
        "desc": "背景光晕与条码等装饰的显隐。",
        "publicKey": "showDecorations",
        "publicLabel": "装饰文案",
        "description": "背景光晕与条码等装饰的显隐。"
      },
      {
        "key": "accentColor",
        "label": "主题色",
        "type": "color",
        "default": "#86D62B",
        "options": [
          "#86D62B",
          "#23C76A",
          "#2F7BFF",
          "#F2A93B",
          "#0E110B"
        ],
        "desc": "品牌强调色，作用于主数字点缀、品牌图形与高亮。",
        "publicKey": "accentColor",
        "publicLabel": "主题色",
        "description": "品牌强调色，作用于主数字点缀、品牌图形与高亮。"
      }
    ],
    "defaultProps": {
      "eyebrow": "Bay Area Cluster",
      "title": "最大地理中心",
      "sub": "旧金山湾区集群",
      "numLead": "63",
      "numTail": ".9",
      "numUnit": "%",
      "numCaption": "旧金山湾区融资额占比",
      "note": "优势来自人才密度、资本网络、云厂商和模型实验室邻近。",
      "closing": "湾区仍是 AI 资本重力中心。",
      "aux": [
        {
          "label": "区域融资额",
          "value": "620",
          "unit": "亿美元"
        },
        {
          "label": "区域事件数",
          "value": "62",
          "unit": "笔"
        },
        {
          "label": "平均单笔",
          "value": "10.0",
          "unit": "亿美元"
        }
      ],
      "numberSlant": true,
      "auxCount": 3,
      "showCaption": true,
      "showNote": true,
      "showLens": true,
      "showDecorations": true,
      "accentColor": "#86D62B"
    }
  },
  {
    "key": "theme07_page054",
    "themeKey": "theme07",
    "pageNumber": 54,
    "layout": "THEME07-054",
    "slot": "region-cluster-page",
    "label": "61 53",
    "bgClass": "",
    "controls": [
      {
        "key": "region",
        "label": "地区",
        "type": "select",
        "default": 0,
        "options": [
          {
            "value": 0,
            "label": "纽约"
          },
          {
            "value": 1,
            "label": "西雅图"
          },
          {
            "value": 2,
            "label": "波士顿"
          },
          {
            "value": 3,
            "label": "其他地区"
          }
        ],
        "desc": "切换展示的地区集群（纽约 / 西雅图 / 波士顿 / 其他地区），整页内容随之更新。",
        "publicKey": "region",
        "publicLabel": "地区",
        "description": "切换展示的地区集群（纽约 / 西雅图 / 波士顿 / 其他地区），整页内容随之更新。"
      },
      {
        "key": "imageCount",
        "label": "图片数量",
        "type": "slider",
        "default": 1,
        "min": 0,
        "max": 2,
        "step": 1,
        "desc": "主视觉区图片槽数量（0–2）；为 0 时以品牌图形填充，构图保持完整。",
        "publicKey": "imageCount",
        "publicLabel": "图片数量",
        "description": "主视觉区图片槽数量（0–2）；为 0 时以品牌图形填充，构图保持完整。"
      },
      {
        "key": "imageRatio",
        "label": "图片比例",
        "type": "radio",
        "default": "portrait",
        "options": [
          {
            "value": "portrait",
            "label": "竖图"
          },
          {
            "value": "landscape",
            "label": "横图"
          },
          {
            "value": "square",
            "label": "方形"
          },
          {
            "value": "auto",
            "label": "自适应"
          }
        ],
        "desc": "图片槽比例；自适应会跟随用户上传图片的原始比例并自动居中排布。",
        "publicKey": "imageRatio",
        "publicLabel": "图片比例",
        "description": "图片槽比例；自适应会跟随用户上传图片的原始比例并自动居中排布。"
      },
      {
        "key": "showShare",
        "label": "占比图表",
        "type": "toggle",
        "default": true,
        "desc": "区域全美占比图表模块的显隐。",
        "publicKey": "showShare",
        "publicLabel": "占比图表",
        "description": "区域全美占比图表模块的显隐。"
      },
      {
        "key": "chartType",
        "label": "图表类型",
        "type": "radio",
        "default": "bar",
        "options": [
          {
            "value": "bar",
            "label": "占比条"
          },
          {
            "value": "donut",
            "label": "环形图"
          }
        ],
        "desc": "占比图表样式：百分百堆叠占比条 / 环形图。",
        "publicKey": "chartType",
        "publicLabel": "图表类型",
        "description": "占比图表样式：百分百堆叠占比条 / 环形图。"
      },
      {
        "key": "tagCount",
        "label": "标签数量",
        "type": "slider",
        "default": 4,
        "min": 2,
        "max": 5,
        "step": 1,
        "desc": "分类标签数量（2–5）。",
        "publicKey": "categoryCount",
        "publicLabel": "标签数量",
        "description": "分类标签数量（2–5）。"
      },
      {
        "key": "metricCount",
        "label": "卡片数量",
        "type": "slider",
        "default": 4,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "指标卡数量（2–4）。",
        "publicKey": "metricCount",
        "publicLabel": "卡片数量",
        "description": "指标卡数量（2–4）。"
      },
      {
        "key": "focusEnabled",
        "label": "重点信息",
        "type": "toggle",
        "default": true,
        "desc": "是否高亮某一张指标卡作为视觉重点。",
        "publicKey": "focusEnabled",
        "publicLabel": "重点信息",
        "description": "是否高亮某一张指标卡作为视觉重点。"
      },
      {
        "key": "focusIndex",
        "label": "重点元素",
        "type": "select",
        "default": 0,
        "options": [
          {
            "value": 0,
            "label": "第 1 张"
          },
          {
            "value": 1,
            "label": "第 2 张"
          },
          {
            "value": 2,
            "label": "第 3 张"
          },
          {
            "value": 3,
            "label": "第 4 张"
          }
        ],
        "desc": "选择被高亮的指标卡。",
        "publicKey": "focusIndex",
        "publicLabel": "重点元素",
        "description": "选择被高亮的指标卡。"
      },
      {
        "key": "showDecorations",
        "label": "装饰文案",
        "type": "toggle",
        "default": true,
        "desc": "背景光晕、图片角标、排名标记与条码等装饰的显隐。",
        "publicKey": "showDecorations",
        "publicLabel": "装饰文案",
        "description": "背景光晕、图片角标、排名标记与条码等装饰的显隐。"
      },
      {
        "key": "accentColor",
        "label": "主题色",
        "type": "color",
        "default": "#86D62B",
        "options": [
          "#86D62B",
          "#23C76A",
          "#2F7BFF",
          "#F2A93B",
          "#0E110B"
        ],
        "desc": "品牌强调色，作用于占比高亮、标签、强调卡与图形。",
        "publicKey": "accentColor",
        "publicLabel": "主题色",
        "description": "品牌强调色，作用于占比高亮、标签、强调卡与图形。"
      }
    ],
    "defaultProps": {
      "share": [
        {
          "k": "湾区",
          "v": 63.9
        },
        {
          "k": "纽约",
          "v": 12.4
        },
        {
          "k": "西雅图",
          "v": 9.8
        },
        {
          "k": "波士顿",
          "v": 7.7
        },
        {
          "k": "其他",
          "v": 6.2
        }
      ],
      "regions": [
        {
          "eyebrow": "New York Cluster",
          "enName": "NEW YORK",
          "segment": "纽约集群",
          "badge": "纽约集群",
          "shareIdx": 1,
          "rank": 2,
          "title": "行业客户优势",
          "titleTail": "纽约集群",
          "lead": "纽约 AI 融资以金融、媒体、企业服务和法律 AI 为主；优势不在基础模型，而在高价值行业客户。",
          "closing": "行业客户密度决定垂直应用机会。",
          "tags": [
            "金融",
            "媒体",
            "企业服务",
            "法律 AI",
            "投研"
          ],
          "metrics": [
            {
              "label": "区域融资额",
              "value": "120",
              "unit": "亿美元"
            },
            {
              "label": "全美占比",
              "value": "12.4",
              "unit": "%"
            },
            {
              "label": "区域事件数",
              "value": "14",
              "unit": "笔"
            },
            {
              "label": "平均单笔",
              "value": "8.6",
              "unit": "亿美元"
            }
          ]
        },
        {
          "eyebrow": "Seattle Cluster",
          "enName": "SEATTLE",
          "segment": "西雅图集群",
          "badge": "西雅图集群",
          "shareIdx": 2,
          "rank": 3,
          "title": "云计算人才外溢",
          "titleTail": "西雅图集群",
          "lead": "西雅图受益于云计算生态和大厂工程人才外溢；更适合孕育基础设施、开发者工具和企业 AI。",
          "closing": "云计算底座带来 AI 基础设施机会。",
          "tags": [
            "基础设施",
            "开发者工具",
            "企业 AI",
            "云服务",
            "数据平台"
          ],
          "metrics": [
            {
              "label": "区域融资额",
              "value": "95",
              "unit": "亿美元"
            },
            {
              "label": "全美占比",
              "value": "9.8",
              "unit": "%"
            },
            {
              "label": "区域事件数",
              "value": "10",
              "unit": "笔"
            },
            {
              "label": "平均单笔",
              "value": "9.5",
              "unit": "亿美元"
            }
          ]
        },
        {
          "eyebrow": "Boston Cluster",
          "enName": "BOSTON",
          "segment": "波士顿集群",
          "badge": "波士顿集群",
          "shareIdx": 3,
          "rank": 4,
          "title": "科研与硬科技",
          "titleTail": "波士顿集群",
          "lead": "波士顿集中在医疗 AI、机器人和硬科技方向；高校科研和硬科技转化构成其长期优势。",
          "closing": "科研城市更适合长周期技术资产。",
          "tags": [
            "医疗 AI",
            "机器人",
            "硬科技",
            "生物科技",
            "科研转化"
          ],
          "metrics": [
            {
              "label": "区域融资额",
              "value": "75",
              "unit": "亿美元"
            },
            {
              "label": "全美占比",
              "value": "7.7",
              "unit": "%"
            },
            {
              "label": "区域事件数",
              "value": "8",
              "unit": "笔"
            },
            {
              "label": "平均单笔",
              "value": "9.4",
              "unit": "亿美元"
            }
          ]
        },
        {
          "eyebrow": "Other Regions",
          "enName": "OTHER REGIONS",
          "segment": "其他地区",
          "badge": "其他地区",
          "shareIdx": 4,
          "rank": 5,
          "title": "分散型应用落地",
          "titleTail": "其他地区",
          "lead": "其他地区融资规模较小，但出现行业专用模型和本地化应用机会；更适合做行业落地而非通用模型。",
          "closing": "本地行业资源也能形成应用机会。",
          "tags": [
            "行业模型",
            "本地化应用",
            "垂直 SaaS",
            "制造 AI",
            "政企服务"
          ],
          "metrics": [
            {
              "label": "区域融资额",
              "value": "60",
              "unit": "亿美元"
            },
            {
              "label": "全美占比",
              "value": "6.2",
              "unit": "%"
            },
            {
              "label": "区域事件数",
              "value": "11",
              "unit": "笔"
            },
            {
              "label": "平均单笔",
              "value": "5.5",
              "unit": "亿美元"
            }
          ]
        }
      ],
      "rankTotal": 5,
      "shareTitle": "全美融资额占比",
      "region": 0,
      "imageCount": 1,
      "imageRatio": "portrait",
      "showShare": true,
      "chartType": "bar",
      "tagCount": 4,
      "metricCount": 4,
      "focusEnabled": true,
      "focusIndex": 0,
      "showDecorations": true,
      "accentColor": "#86D62B",
      "renderSlot": null
    }
  },
  {
    "key": "theme07_page055",
    "themeKey": "theme07",
    "pageNumber": 55,
    "layout": "THEME07-055",
    "slot": "resource-triad-page",
    "label": "62 54",
    "bgClass": "",
    "controls": [
      {
        "key": "align",
        "label": "对齐方式",
        "type": "radio",
        "default": "center",
        "options": [
          {
            "value": "center",
            "label": "居中"
          },
          {
            "value": "left",
            "label": "左对齐"
          }
        ],
        "desc": "金句与三角资源的整体对齐方式。",
        "publicKey": "align",
        "publicLabel": "对齐方式",
        "description": "金句与三角资源的整体对齐方式。"
      },
      {
        "key": "showPillars",
        "label": "辅助信息",
        "type": "toggle",
        "default": true,
        "desc": "底部三类关键资源支柱行的显隐。",
        "publicKey": "showPillars",
        "publicLabel": "辅助信息",
        "description": "底部三类关键资源支柱行的显隐。"
      },
      {
        "key": "pillarCount",
        "label": "卡片数量",
        "type": "slider",
        "default": 3,
        "min": 2,
        "max": 3,
        "step": 1,
        "desc": "展示的资源支柱数量（2–3）。",
        "publicKey": "pillarCount",
        "publicLabel": "卡片数量",
        "description": "展示的资源支柱数量（2–3）。"
      },
      {
        "key": "focusEnabled",
        "label": "重点信息",
        "type": "toggle",
        "default": true,
        "desc": "是否高亮某一类资源支柱作为视觉重点。",
        "publicKey": "focusEnabled",
        "publicLabel": "重点信息",
        "description": "是否高亮某一类资源支柱作为视觉重点。"
      },
      {
        "key": "focusIndex",
        "label": "重点元素",
        "type": "select",
        "default": 0,
        "options": [
          {
            "value": 0,
            "label": "第 1 个"
          },
          {
            "value": 1,
            "label": "第 2 个"
          },
          {
            "value": 2,
            "label": "第 3 个"
          }
        ],
        "desc": "选择被高亮的资源支柱。",
        "publicKey": "focusIndex",
        "publicLabel": "重点元素",
        "description": "选择被高亮的资源支柱。"
      },
      {
        "key": "showQuoteMark",
        "label": "引号装饰",
        "type": "toggle",
        "default": true,
        "desc": "超大引号装饰符号的显隐。",
        "publicKey": "showQuoteMark",
        "publicLabel": "引号装饰",
        "description": "超大引号装饰符号的显隐。"
      },
      {
        "key": "showSource",
        "label": "数据来源",
        "type": "toggle",
        "default": true,
        "desc": "底部数据来源说明行的显隐。",
        "publicKey": "showSource",
        "publicLabel": "数据来源",
        "description": "底部数据来源说明行的显隐。"
      },
      {
        "key": "showDecorations",
        "label": "装饰文案",
        "type": "toggle",
        "default": true,
        "desc": "背景光晕、镜头光斑与条码等装饰的显隐。",
        "publicKey": "showDecorations",
        "publicLabel": "装饰文案",
        "description": "背景光晕、镜头光斑与条码等装饰的显隐。"
      },
      {
        "key": "accentColor",
        "label": "主题色",
        "type": "color",
        "default": "#86D62B",
        "options": [
          "#86D62B",
          "#23C76A",
          "#2F7BFF",
          "#F2A93B",
          "#0E110B"
        ],
        "desc": "品牌强调色，作用于金句重点词与支柱高亮。",
        "publicKey": "accentColor",
        "publicLabel": "主题色",
        "description": "品牌强调色，作用于金句重点词与支柱高亮。"
      }
    ],
    "defaultProps": {
      "eyebrow": "Talent · Capital · Compute",
      "kicker": "人才 · 资本 · 算力三角",
      "quoteLead": "AI 竞争，首先是",
      "quoteEm": "资源组织能力",
      "quoteTail": "的竞争。",
      "pillars": [
        {
          "glyph": "circle",
          "zh": "人才",
          "en": "Talent",
          "note": "顶尖研究员与工程团队的密度"
        },
        {
          "glyph": "diamond",
          "zh": "资本",
          "en": "Capital",
          "note": "持续的大额融资与战略资金"
        },
        {
          "glyph": "square",
          "zh": "算力",
          "en": "Compute",
          "note": "GPU 集群与云资源的稳定供给"
        }
      ],
      "source": "数据来源 · AI Capital Lab 自建数据库 / 公开融资披露 · 2024 全年口径 ≥1 亿美元",
      "align": "center",
      "showPillars": true,
      "pillarCount": 3,
      "focusEnabled": true,
      "focusIndex": 0,
      "showQuoteMark": true,
      "showSource": true,
      "showDecorations": true,
      "accentColor": "#86D62B"
    }
  },
  {
    "key": "theme07_page056",
    "themeKey": "theme07",
    "pageNumber": 56,
    "layout": "THEME07-056",
    "slot": "open-aicase-page",
    "label": "63 55",
    "bgClass": "",
    "controls": [
      {
        "key": "imageCount",
        "label": "图片数量",
        "type": "slider",
        "default": 1,
        "min": 0,
        "max": 2,
        "step": 1,
        "desc": "主视觉区图片槽数量（0–2）；为 0 时以品牌图形填充，构图保持完整。",
        "publicKey": "imageCount",
        "publicLabel": "图片数量",
        "description": "主视觉区图片槽数量（0–2）；为 0 时以品牌图形填充，构图保持完整。"
      },
      {
        "key": "imageRatio",
        "label": "图片比例",
        "type": "radio",
        "default": "portrait",
        "options": [
          {
            "value": "portrait",
            "label": "竖图"
          },
          {
            "value": "landscape",
            "label": "横图"
          },
          {
            "value": "square",
            "label": "方形"
          },
          {
            "value": "auto",
            "label": "自适应"
          }
        ],
        "desc": "图片槽比例；自适应会跟随用户上传图片的原始比例并自动居中排布。",
        "publicKey": "imageRatio",
        "publicLabel": "图片比例",
        "description": "图片槽比例；自适应会跟随用户上传图片的原始比例并自动居中排布。"
      },
      {
        "key": "metricCount",
        "label": "卡片数量",
        "type": "slider",
        "default": 3,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "展示的指标卡数量（2–4）。",
        "publicKey": "metricCount",
        "publicLabel": "卡片数量",
        "description": "展示的指标卡数量（2–4）。"
      },
      {
        "key": "focusEnabled",
        "label": "重点信息",
        "type": "toggle",
        "default": true,
        "desc": "是否高亮某一张指标卡作为视觉重点。",
        "publicKey": "focusEnabled",
        "publicLabel": "重点信息",
        "description": "是否高亮某一张指标卡作为视觉重点。"
      },
      {
        "key": "focusIndex",
        "label": "重点元素",
        "type": "select",
        "default": 0,
        "options": [
          {
            "value": 0,
            "label": "第 1 张"
          },
          {
            "value": 1,
            "label": "第 2 张"
          },
          {
            "value": 2,
            "label": "第 3 张"
          },
          {
            "value": 3,
            "label": "第 4 张"
          }
        ],
        "desc": "选择被高亮的指标卡。",
        "publicKey": "focusIndex",
        "publicLabel": "重点元素",
        "description": "选择被高亮的指标卡。"
      },
      {
        "key": "showTags",
        "label": "标签文案",
        "type": "toggle",
        "default": true,
        "desc": "定位标签行的显隐。",
        "publicKey": "showTags",
        "publicLabel": "标签文案",
        "description": "定位标签行的显隐。"
      },
      {
        "key": "tagCount",
        "label": "标签数量",
        "type": "slider",
        "default": 3,
        "min": 2,
        "max": 3,
        "step": 1,
        "desc": "定位标签数量（2–3）。",
        "publicKey": "tagCount",
        "publicLabel": "标签数量",
        "description": "定位标签数量（2–3）。"
      },
      {
        "key": "showDecorations",
        "label": "装饰文案",
        "type": "toggle",
        "default": true,
        "desc": "背景光晕、图片角标、公司名压底与条码等装饰的显隐。",
        "publicKey": "showDecorations",
        "publicLabel": "装饰文案",
        "description": "背景光晕、图片角标、公司名压底与条码等装饰的显隐。"
      },
      {
        "key": "accentColor",
        "label": "主题色",
        "type": "color",
        "default": "#86D62B",
        "options": [
          "#86D62B",
          "#23C76A",
          "#2F7BFF",
          "#F2A93B",
          "#0E110B"
        ],
        "desc": "品牌强调色，作用于强调卡、标签与图形。",
        "publicKey": "accentColor",
        "publicLabel": "主题色",
        "description": "品牌强调色，作用于强调卡、标签与图形。"
      }
    ],
    "defaultProps": {
      "eyebrow": "OpenAI Case",
      "title": "商业化标杆",
      "titleTail": "OpenAI 案例页",
      "logic": "通用大模型逻辑",
      "company": "OpenAI",
      "enName": "OPENAI",
      "badge": "商业化标杆",
      "lead": "OpenAI 仍是通用大模型商业化的标杆样本；看点是模型能力、生态入口与企业商业化能否同时领先。",
      "closing": "模型能力必须转成生态和收入。",
      "metrics": [
        {
          "label": "最大单笔融资",
          "value": "66",
          "unit": "亿美元",
          "num": true
        },
        {
          "label": "企业客户",
          "value": "9.4",
          "unit": "万家",
          "num": true
        },
        {
          "label": "年度化收入",
          "value": "38",
          "unit": "亿美元",
          "num": true
        },
        {
          "label": "核心赛道",
          "value": "通用大模型",
          "num": false
        }
      ],
      "tags": [
        "通用大模型",
        "生态入口",
        "企业商业化"
      ],
      "imageCount": 1,
      "imageRatio": "portrait",
      "metricCount": 3,
      "focusEnabled": true,
      "focusIndex": 0,
      "showTags": true,
      "tagCount": 3,
      "showDecorations": true,
      "accentColor": "#86D62B",
      "renderSlot": null
    }
  },
  {
    "key": "theme07_page057",
    "themeKey": "theme07",
    "pageNumber": 57,
    "layout": "THEME07-057",
    "slot": "figure-case-page",
    "label": "64 59",
    "bgClass": "",
    "controls": [
      {
        "key": "numberSlant",
        "label": "数字倾斜",
        "type": "toggle",
        "default": true,
        "desc": "主数字是否应用品牌斜切（italic-slant）效果。",
        "publicKey": "numberSlant",
        "publicLabel": "数字倾斜",
        "description": "主数字是否应用品牌斜切（italic-slant）效果。"
      },
      {
        "key": "auxCount",
        "label": "卡片数量",
        "type": "slider",
        "default": 3,
        "min": 0,
        "max": 3,
        "step": 1,
        "desc": "辅助指标数量（0–3）；为 0 时只保留主数字。",
        "publicKey": "auxCount",
        "publicLabel": "卡片数量",
        "description": "辅助指标数量（0–3）；为 0 时只保留主数字。"
      },
      {
        "key": "showCaption",
        "label": "说明文案",
        "type": "toggle",
        "default": true,
        "desc": "主数字下方解释性说明的显隐。",
        "publicKey": "showCaption",
        "publicLabel": "说明文案",
        "description": "主数字下方解释性说明的显隐。"
      },
      {
        "key": "showNote",
        "label": "辅助注释",
        "type": "toggle",
        "default": true,
        "desc": "底部补充注释的显隐。",
        "publicKey": "showNote",
        "publicLabel": "辅助注释",
        "description": "底部补充注释的显隐。"
      },
      {
        "key": "showGhost",
        "label": "背景大字",
        "type": "toggle",
        "default": true,
        "desc": "主数字背后的超大描边数字水印的显隐。",
        "publicKey": "showGhost",
        "publicLabel": "背景大字",
        "description": "主数字背后的超大描边数字水印的显隐。"
      },
      {
        "key": "showLens",
        "label": "品牌图形",
        "type": "toggle",
        "default": true,
        "desc": "品牌透镜图形（焦点圆盘）的显隐。",
        "publicKey": "showLens",
        "publicLabel": "品牌图形",
        "description": "品牌透镜图形（焦点圆盘）的显隐。"
      },
      {
        "key": "showDecorations",
        "label": "装饰文案",
        "type": "toggle",
        "default": true,
        "desc": "背景光晕与条码等装饰的显隐。",
        "publicKey": "showDecorations",
        "publicLabel": "装饰文案",
        "description": "背景光晕与条码等装饰的显隐。"
      },
      {
        "key": "accentColor",
        "label": "主题色",
        "type": "color",
        "default": "#86D62B",
        "options": [
          "#86D62B",
          "#23C76A",
          "#2F7BFF",
          "#F2A93B",
          "#0E110B"
        ],
        "desc": "品牌强调色，作用于主数字点缀、品牌图形与高亮。",
        "publicKey": "accentColor",
        "publicLabel": "主题色",
        "description": "品牌强调色，作用于主数字点缀、品牌图形与高亮。"
      }
    ],
    "defaultProps": {
      "eyebrow": "Figure AI Case",
      "title": "人形机器人",
      "sub": "Figure AI 案例页",
      "kicker": "最大单笔融资",
      "numLead": "6",
      "numTail": ".8",
      "numUnit": "亿美元",
      "ghost": "6.8",
      "numCaption": "Figure AI 最大单笔融资",
      "note": "关键不只是 demo，而是供应链、可靠性和量产成本。",
      "closing": "硬件 AI 要用量产证明自己。",
      "aux": [
        {
          "label": "投后估值",
          "value": "26",
          "unit": "亿美元"
        },
        {
          "label": "融资轮次",
          "value": "B 轮",
          "unit": ""
        },
        {
          "label": "赛道方向",
          "value": "人形机器人",
          "unit": ""
        }
      ],
      "numberSlant": true,
      "auxCount": 3,
      "showCaption": true,
      "showNote": true,
      "showGhost": true,
      "showLens": true,
      "showDecorations": true,
      "accentColor": "#86D62B"
    }
  },
  {
    "key": "theme07_page058",
    "themeKey": "theme07",
    "pageNumber": 58,
    "layout": "THEME07-058",
    "slot": "ssicase-page",
    "label": "65 60",
    "bgClass": "",
    "controls": [
      {
        "key": "imageCount",
        "label": "图片数量",
        "type": "slider",
        "default": 1,
        "min": 0,
        "max": 2,
        "step": 1,
        "desc": "主视觉区图片槽数量（0–2）；为 0 时以品牌图形填充，构图保持完整。",
        "publicKey": "imageCount",
        "publicLabel": "图片数量",
        "description": "主视觉区图片槽数量（0–2）；为 0 时以品牌图形填充，构图保持完整。"
      },
      {
        "key": "imageRatio",
        "label": "图片比例",
        "type": "radio",
        "default": "portrait",
        "options": [
          {
            "value": "portrait",
            "label": "竖图"
          },
          {
            "value": "landscape",
            "label": "横图"
          },
          {
            "value": "square",
            "label": "方形"
          },
          {
            "value": "auto",
            "label": "自适应"
          }
        ],
        "desc": "图片槽比例；自适应会跟随用户上传图片的原始比例并自动居中排布。",
        "publicKey": "imageRatio",
        "publicLabel": "图片比例",
        "description": "图片槽比例；自适应会跟随用户上传图片的原始比例并自动居中排布。"
      },
      {
        "key": "metricCount",
        "label": "卡片数量",
        "type": "slider",
        "default": 4,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "展示的指标卡数量（2–4）。",
        "publicKey": "metricCount",
        "publicLabel": "卡片数量",
        "description": "展示的指标卡数量（2–4）。"
      },
      {
        "key": "focusEnabled",
        "label": "重点信息",
        "type": "toggle",
        "default": true,
        "desc": "是否高亮某一张指标卡作为视觉重点。",
        "publicKey": "focusEnabled",
        "publicLabel": "重点信息",
        "description": "是否高亮某一张指标卡作为视觉重点。"
      },
      {
        "key": "focusIndex",
        "label": "重点元素",
        "type": "select",
        "default": 0,
        "options": [
          {
            "value": 0,
            "label": "第 1 张"
          },
          {
            "value": 1,
            "label": "第 2 张"
          },
          {
            "value": 2,
            "label": "第 3 张"
          },
          {
            "value": 3,
            "label": "第 4 张"
          }
        ],
        "desc": "选择被高亮的指标卡。",
        "publicKey": "focusIndex",
        "publicLabel": "重点元素",
        "description": "选择被高亮的指标卡。"
      },
      {
        "key": "showTags",
        "label": "标签文案",
        "type": "toggle",
        "default": true,
        "desc": "定位标签行的显隐。",
        "publicKey": "showTags",
        "publicLabel": "标签文案",
        "description": "定位标签行的显隐。"
      },
      {
        "key": "tagCount",
        "label": "标签数量",
        "type": "slider",
        "default": 3,
        "min": 2,
        "max": 3,
        "step": 1,
        "desc": "定位标签数量（2–3）。",
        "publicKey": "tagCount",
        "publicLabel": "标签数量",
        "description": "定位标签数量（2–3）。"
      },
      {
        "key": "showDecorations",
        "label": "装饰文案",
        "type": "toggle",
        "default": true,
        "desc": "背景光晕、图片角标、公司名压底与条码等装饰的显隐。",
        "publicKey": "showDecorations",
        "publicLabel": "装饰文案",
        "description": "背景光晕、图片角标、公司名压底与条码等装饰的显隐。"
      },
      {
        "key": "accentColor",
        "label": "主题色",
        "type": "color",
        "default": "#86D62B",
        "options": [
          "#86D62B",
          "#23C76A",
          "#2F7BFF",
          "#F2A93B",
          "#0E110B"
        ],
        "desc": "品牌强调色，作用于强调卡、标签与图形。",
        "publicKey": "accentColor",
        "publicLabel": "主题色",
        "description": "品牌强调色，作用于强调卡、标签与图形。"
      }
    ],
    "defaultProps": {
      "eyebrow": "SSI Case",
      "title": "强叙事模型实验室",
      "titleTail": "SSI 案例页",
      "logic": "强叙事逻辑",
      "company": "SSI",
      "enName": "SAFE SUPERINTELLIGENCE",
      "badge": "安全智能",
      "lead": "SSI 代表强团队、强叙事、弱商业化验证的模型实验室；短期难以用收入评价，价值建立在长期技术想象上。",
      "closing": "强叙事需要更长时间兑现。",
      "metrics": [
        {
          "label": "最大单笔融资",
          "value": "10",
          "unit": "亿美元",
          "num": true
        },
        {
          "label": "产品收入",
          "value": "0",
          "unit": "",
          "num": true
        },
        {
          "label": "团队规模",
          "value": "85",
          "unit": "人",
          "num": true
        },
        {
          "label": "赛道方向",
          "value": "安全智能",
          "num": false
        }
      ],
      "tags": [
        "强团队",
        "强叙事",
        "长期技术"
      ],
      "imageCount": 1,
      "imageRatio": "portrait",
      "metricCount": 4,
      "focusEnabled": true,
      "focusIndex": 0,
      "showTags": true,
      "tagCount": 3,
      "showDecorations": true,
      "accentColor": "#86D62B",
      "renderSlot": null
    }
  },
  {
    "key": "theme07_page059",
    "themeKey": "theme07",
    "pageNumber": 59,
    "layout": "THEME07-059",
    "slot": "risk-chapter-page",
    "label": "66 61",
    "bgClass": "",
    "controls": [
      {
        "key": "backgroundVariant",
        "label": "背景风格",
        "type": "radio",
        "default": "dark",
        "options": [
          {
            "value": "dark",
            "label": "深色"
          },
          {
            "value": "paper",
            "label": "浅色"
          }
        ],
        "desc": "章节页背景：深色（强换气节奏）/ 浅色（与正文统一）。",
        "publicKey": "backgroundVariant",
        "publicLabel": "背景风格",
        "description": "章节页背景：深色（强换气节奏）/ 浅色（与正文统一）。"
      },
      {
        "key": "layout",
        "label": "排版",
        "type": "radio",
        "default": "left",
        "options": [
          {
            "value": "left",
            "label": "左对齐"
          },
          {
            "value": "center",
            "label": "居中"
          }
        ],
        "desc": "标题与关键词的整体排布方式。",
        "publicKey": "layout",
        "publicLabel": "排版",
        "description": "标题与关键词的整体排布方式。"
      },
      {
        "key": "showIndex",
        "label": "章节序号",
        "type": "toggle",
        "default": true,
        "desc": "超大章节编号水印的显隐。",
        "publicKey": "showIndex",
        "publicLabel": "章节序号",
        "description": "超大章节编号水印的显隐。"
      },
      {
        "key": "showKeywords",
        "label": "关键词",
        "type": "toggle",
        "default": true,
        "desc": "本章关键词标签行的显隐。",
        "publicKey": "showKeywords",
        "publicLabel": "关键词",
        "description": "本章关键词标签行的显隐。"
      },
      {
        "key": "keywordCount",
        "label": "关键词数量",
        "type": "slider",
        "default": 5,
        "min": 3,
        "max": 5,
        "step": 1,
        "desc": "展示的关键词数量（3–5）。",
        "publicKey": "keywordCount",
        "publicLabel": "关键词数量",
        "description": "展示的关键词数量（3–5）。"
      },
      {
        "key": "showDecorations",
        "label": "装饰文案",
        "type": "toggle",
        "default": true,
        "desc": "镜头光斑、背景光晕与条码等装饰的显隐。",
        "publicKey": "showDecorations",
        "publicLabel": "装饰文案",
        "description": "镜头光斑、背景光晕与条码等装饰的显隐。"
      },
      {
        "key": "accentColor",
        "label": "主题色",
        "type": "color",
        "default": "#86D62B",
        "options": [
          "#86D62B",
          "#23C76A",
          "#2F7BFF",
          "#F2A93B",
          "#0E110B"
        ],
        "desc": "品牌强调色。",
        "publicKey": "accentColor",
        "publicLabel": "主题色",
        "description": "品牌强调色。"
      }
    ],
    "defaultProps": {
      "eyebrow": "Chapter",
      "index": "05",
      "title": "风险与策略",
      "sub": "从估值压力到投资筛选",
      "lead": "从本章开始进入风险与策略部分，集中呈现估值、收入、监管、算力和竞争压力。",
      "closing": "下一组页面进入更细的拆解。",
      "keywords": [
        "估值泡沫",
        "收入验证",
        "合规",
        "算力成本",
        "垂直应用筛选"
      ],
      "backgroundVariant": "dark",
      "layout": "left",
      "showIndex": true,
      "showKeywords": true,
      "keywordCount": 5,
      "showDecorations": true,
      "accentColor": "#86D62B"
    }
  },
  {
    "key": "theme07_page060",
    "themeKey": "theme07",
    "pageNumber": 60,
    "layout": "THEME07-060",
    "slot": "revenue-page",
    "label": "67 62",
    "bgClass": "",
    "controls": [
      {
        "key": "stageCount",
        "label": "阶段数量",
        "type": "slider",
        "default": 3,
        "min": 2,
        "max": 3,
        "step": 1,
        "desc": "转化漏斗的阶段数量（2–3）。",
        "publicKey": "stageCount",
        "publicLabel": "阶段数量",
        "description": "转化漏斗的阶段数量（2–3）。"
      },
      {
        "key": "metricCount",
        "label": "卡片数量",
        "type": "slider",
        "default": 4,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "底部指标卡数量（2–4）。",
        "publicKey": "metricCount",
        "publicLabel": "卡片数量",
        "description": "底部指标卡数量（2–4）。"
      },
      {
        "key": "focusEnabled",
        "label": "重点信息",
        "type": "toggle",
        "default": true,
        "desc": "是否高亮某一张指标卡作为视觉重点。",
        "publicKey": "focusEnabled",
        "publicLabel": "重点信息",
        "description": "是否高亮某一张指标卡作为视觉重点。"
      },
      {
        "key": "focusIndex",
        "label": "重点元素",
        "type": "select",
        "default": 0,
        "options": [
          {
            "value": 0,
            "label": "第 1 张"
          },
          {
            "value": 1,
            "label": "第 2 张"
          },
          {
            "value": 2,
            "label": "第 3 张"
          },
          {
            "value": 3,
            "label": "第 4 张"
          }
        ],
        "desc": "选择被高亮的指标卡。",
        "publicKey": "focusIndex",
        "publicLabel": "重点元素",
        "description": "选择被高亮的指标卡。"
      },
      {
        "key": "showValues",
        "label": "数值标签",
        "type": "toggle",
        "default": true,
        "desc": "漏斗阶段数值与转化率标签的显隐。",
        "publicKey": "showValueLabels",
        "publicLabel": "数值标签",
        "description": "漏斗阶段数值与转化率标签的显隐。"
      },
      {
        "key": "showDecorations",
        "label": "装饰文案",
        "type": "toggle",
        "default": true,
        "desc": "背景光晕与条码等装饰的显隐。",
        "publicKey": "showDecorations",
        "publicLabel": "装饰文案",
        "description": "背景光晕与条码等装饰的显隐。"
      },
      {
        "key": "accentColor",
        "label": "主题色",
        "type": "color",
        "default": "#86D62B",
        "options": [
          "#86D62B",
          "#23C76A",
          "#2F7BFF",
          "#F2A93B",
          "#0E110B"
        ],
        "desc": "品牌强调色，作用于漏斗、转化率与高亮卡。",
        "publicKey": "accentColor",
        "publicLabel": "主题色",
        "description": "品牌强调色，作用于漏斗、转化率与高亮卡。"
      }
    ],
    "defaultProps": {
      "eyebrow": "Revenue Risk",
      "marker": "收入验证",
      "segment": "风险 · 收入验证",
      "title": "从试点到稳定收入",
      "titleTail": "风险 · 收入验证",
      "lead": "多数 AI 公司需要证明自己能从试点项目转向稳定订阅收入；收入验证要看留存、毛利和客户扩张，而不是只看 Logo。",
      "statLine": "试点转付费率 28% · 企业年流失率 17%",
      "closing": "客户试点不等于商业化成功。",
      "funnelTitle": "试点 → 付费 → 稳定收入 · 转化漏斗",
      "stages": [
        {
          "name": "试点项目",
          "value": 100,
          "note": "免费 / 低价试用",
          "conv": null
        },
        {
          "name": "付费转化",
          "value": 28,
          "note": "签约进入付费",
          "conv": "28% 转付费"
        },
        {
          "name": "稳定订阅",
          "value": 23,
          "note": "续约留存收入",
          "conv": "83% 留存"
        }
      ],
      "metrics": [
        {
          "lbl": "试点转付费率",
          "val": "28",
          "unit": "%"
        },
        {
          "lbl": "企业年流失率",
          "val": "17",
          "unit": "%"
        },
        {
          "lbl": "毛利率中位数",
          "val": "54",
          "unit": "%"
        },
        {
          "lbl": "推理成本占收入",
          "val": "31",
          "unit": "%"
        }
      ],
      "stageCount": 3,
      "metricCount": 4,
      "focusEnabled": true,
      "focusIndex": 0,
      "showValues": true,
      "showDecorations": true,
      "accentColor": "#86D62B"
    }
  },
  {
    "key": "theme07_page061",
    "themeKey": "theme07",
    "pageNumber": 61,
    "layout": "THEME07-061",
    "slot": "compliance-page",
    "label": "68 63",
    "bgClass": "",
    "controls": [
      {
        "key": "rowCount",
        "label": "行数量",
        "type": "slider",
        "default": 5,
        "min": 3,
        "max": 5,
        "step": 1,
        "desc": "状态表格展示的行数量（3–5）。",
        "publicKey": "rowCount",
        "publicLabel": "行数量",
        "description": "状态表格展示的行数量（3–5）。"
      },
      {
        "key": "showLevel",
        "label": "强度列",
        "type": "toggle",
        "default": true,
        "desc": "状态强度列（强度条 + 数值）的显隐。",
        "publicKey": "showStatusLevel",
        "publicLabel": "强度列",
        "description": "状态强度列（强度条 + 数值）的显隐。"
      },
      {
        "key": "showFlow",
        "label": "流程图",
        "type": "toggle",
        "default": true,
        "desc": "底部横向状态流程条的显隐。",
        "publicKey": "showFlow",
        "publicLabel": "流程图",
        "description": "底部横向状态流程条的显隐。"
      },
      {
        "key": "flowStepCount",
        "label": "流程数量",
        "type": "slider",
        "default": 5,
        "min": 3,
        "max": 5,
        "step": 1,
        "desc": "流程节点数量（3–5）。",
        "publicKey": "flowStepCount",
        "publicLabel": "流程数量",
        "description": "流程节点数量（3–5）。"
      },
      {
        "key": "focusEnabled",
        "label": "重点信息",
        "type": "toggle",
        "default": true,
        "desc": "是否高亮某一行作为视觉重点。",
        "publicKey": "focusEnabled",
        "publicLabel": "重点信息",
        "description": "是否高亮某一行作为视觉重点。"
      },
      {
        "key": "focusIndex",
        "label": "重点元素",
        "type": "select",
        "default": 0,
        "options": [
          {
            "value": 0,
            "label": "第 1 行"
          },
          {
            "value": 1,
            "label": "第 2 行"
          },
          {
            "value": 2,
            "label": "第 3 行"
          },
          {
            "value": 3,
            "label": "第 4 行"
          },
          {
            "value": 4,
            "label": "第 5 行"
          }
        ],
        "desc": "选择被高亮的行。",
        "publicKey": "focusIndex",
        "publicLabel": "重点元素",
        "description": "选择被高亮的行。"
      },
      {
        "key": "showDecorations",
        "label": "装饰文案",
        "type": "toggle",
        "default": true,
        "desc": "背景光晕与条码等装饰的显隐。",
        "publicKey": "showDecorations",
        "publicLabel": "装饰文案",
        "description": "背景光晕与条码等装饰的显隐。"
      },
      {
        "key": "accentColor",
        "label": "主题色",
        "type": "color",
        "default": "#86D62B",
        "options": [
          "#86D62B",
          "#23C76A",
          "#2F7BFF",
          "#F2A93B",
          "#0E110B"
        ],
        "desc": "品牌强调色，作用于分类标记、高亮行与流程节点。",
        "publicKey": "accentColor",
        "publicLabel": "主题色",
        "description": "品牌强调色，作用于分类标记、高亮行与流程节点。"
      }
    ],
    "defaultProps": {
      "eyebrow": "Regulation Risk",
      "marker": "监管合规",
      "segment": "风险 · 监管合规",
      "title": "隐私、版权与安全",
      "titleTail": "风险 · 监管合规",
      "lead": "隐私、版权、安全和行业监管会增加交付成本；监管会挤出缺乏治理能力的公司。",
      "statLine": "合规团队增长 +42% · 采购审查周期 +36% · 版权风险事件 19 起",
      "anchorValue": "58%",
      "anchorLabel": "客户要求数据隔离占比",
      "closing": "合规能力会成为企业采购门槛。",
      "colHeads": {
        "dim": "风险维度",
        "level": "风险强度",
        "note": "成本与影响"
      },
      "rows": [
        {
          "dim": "隐私合规",
          "level": 88,
          "note": "GDPR / CCPA、数据最小化与脱敏要求"
        },
        {
          "dim": "版权风险",
          "level": 76,
          "note": "训练语料与生成内容的版权追溯"
        },
        {
          "dim": "数据安全",
          "level": 70,
          "note": "数据隔离、加密与访问权限控制"
        },
        {
          "dim": "行业监管",
          "level": 58,
          "note": "金融、医疗等行业的准入与审计"
        },
        {
          "dim": "内容安全",
          "level": 44,
          "note": "有害内容过滤与生成留痕"
        }
      ],
      "flowTitle": "合规交付流程",
      "flow": [
        "数据接入",
        "隐私脱敏",
        "合规审查",
        "审计留痕",
        "安全交付"
      ],
      "rowCount": 5,
      "showLevel": true,
      "showFlow": true,
      "flowStepCount": 5,
      "focusEnabled": true,
      "focusIndex": 0,
      "showDecorations": true,
      "accentColor": "#86D62B"
    }
  },
  {
    "key": "theme07_page062",
    "themeKey": "theme07",
    "pageNumber": 62,
    "layout": "THEME07-062",
    "slot": "margin-page",
    "label": "69 64",
    "bgClass": "",
    "controls": [
      {
        "key": "numberSlant",
        "label": "数字倾斜",
        "type": "toggle",
        "default": true,
        "desc": "主数字是否应用品牌斜切（italic-slant）效果。",
        "publicKey": "numberSlant",
        "publicLabel": "数字倾斜",
        "description": "主数字是否应用品牌斜切（italic-slant）效果。"
      },
      {
        "key": "auxCount",
        "label": "卡片数量",
        "type": "slider",
        "default": 3,
        "min": 0,
        "max": 3,
        "step": 1,
        "desc": "辅助指标数量（0–3）；为 0 时只保留主数字。",
        "publicKey": "auxCount",
        "publicLabel": "卡片数量",
        "description": "辅助指标数量（0–3）；为 0 时只保留主数字。"
      },
      {
        "key": "showCaption",
        "label": "说明文案",
        "type": "toggle",
        "default": true,
        "desc": "主数字下方解释性说明的显隐。",
        "publicKey": "showCaption",
        "publicLabel": "说明文案",
        "description": "主数字下方解释性说明的显隐。"
      },
      {
        "key": "showGauge",
        "label": "示意图形",
        "type": "toggle",
        "default": true,
        "desc": "成本 / 毛利构成的天花板示意条的显隐。",
        "publicKey": "showGauge",
        "publicLabel": "示意图形",
        "description": "成本 / 毛利构成的天花板示意条的显隐。"
      },
      {
        "key": "showNote",
        "label": "辅助注释",
        "type": "toggle",
        "default": true,
        "desc": "底部补充注释的显隐。",
        "publicKey": "showNote",
        "publicLabel": "辅助注释",
        "description": "底部补充注释的显隐。"
      },
      {
        "key": "showLens",
        "label": "品牌图形",
        "type": "toggle",
        "default": true,
        "desc": "品牌透镜图形（焦点圆盘）的显隐。",
        "publicKey": "showLens",
        "publicLabel": "品牌图形",
        "description": "品牌透镜图形（焦点圆盘）的显隐。"
      },
      {
        "key": "showDecorations",
        "label": "装饰文案",
        "type": "toggle",
        "default": true,
        "desc": "背景光晕与条码等装饰的显隐。",
        "publicKey": "showDecorations",
        "publicLabel": "装饰文案",
        "description": "背景光晕与条码等装饰的显隐。"
      },
      {
        "key": "accentColor",
        "label": "主题色",
        "type": "color",
        "default": "#86D62B",
        "options": [
          "#86D62B",
          "#23C76A",
          "#2F7BFF",
          "#F2A93B",
          "#0E110B"
        ],
        "desc": "品牌强调色，作用于主数字点缀、毛利段与品牌图形。",
        "publicKey": "accentColor",
        "publicLabel": "主题色",
        "description": "品牌强调色，作用于主数字点缀、毛利段与品牌图形。"
      }
    ],
    "defaultProps": {
      "eyebrow": "Compute Cost Risk",
      "title": "毛利天花板",
      "sub": "风险 · 算力成本",
      "kicker": "训练预算压力",
      "numLead": "61",
      "numTail": "",
      "numUnit": "%",
      "numCaption": "训练预算模拟增长幅度",
      "ceilingLabel": "毛利天花板",
      "gaugeCap": "每 1 元收入的成本构成",
      "gauge": [
        {
          "label": "算力成本",
          "value": 31,
          "tone": "neg"
        },
        {
          "label": "其他成本",
          "value": 15,
          "tone": "faint"
        },
        {
          "label": "可分配毛利",
          "value": 54,
          "tone": "accent"
        }
      ],
      "note": "如果推理成本降不下来，收入增长会被毛利吞掉。",
      "closing": "算力成本是模型商业化的硬约束。",
      "aux": [
        {
          "label": "推理成本占收入",
          "value": "31",
          "unit": "%"
        },
        {
          "label": "毛利率中位数",
          "value": "54",
          "unit": "%"
        },
        {
          "label": "单位推理成本",
          "value": "-19",
          "unit": "%"
        }
      ],
      "numberSlant": true,
      "auxCount": 3,
      "showCaption": true,
      "showGauge": true,
      "showNote": true,
      "showLens": true,
      "showDecorations": true,
      "accentColor": "#86D62B"
    }
  },
  {
    "key": "theme07_page063",
    "themeKey": "theme07",
    "pageNumber": 63,
    "layout": "THEME07-063",
    "slot": "moat-page",
    "label": "70 65",
    "bgClass": "",
    "controls": [
      {
        "key": "chartType",
        "label": "图表类型",
        "type": "radio",
        "default": "pressure",
        "options": [
          {
            "value": "pressure",
            "label": "压力计"
          },
          {
            "value": "bars",
            "label": "占比条"
          }
        ],
        "desc": "主图表样式：逼近壁垒线的压力计 / 资金占比条。",
        "publicKey": "chartType",
        "publicLabel": "图表类型",
        "description": "主图表样式：逼近壁垒线的压力计 / 资金占比条。"
      },
      {
        "key": "segmentCount",
        "label": "卡片数量",
        "type": "slider",
        "default": 3,
        "min": 2,
        "max": 3,
        "step": 1,
        "desc": "竞争压力指标数量（2–3）。",
        "publicKey": "segmentCount",
        "publicLabel": "卡片数量",
        "description": "竞争压力指标数量（2–3）。"
      },
      {
        "key": "focusEnabled",
        "label": "重点信息",
        "type": "toggle",
        "default": true,
        "desc": "是否高亮某一个压力指标作为视觉重点。",
        "publicKey": "focusEnabled",
        "publicLabel": "重点信息",
        "description": "是否高亮某一个压力指标作为视觉重点。"
      },
      {
        "key": "focusIndex",
        "label": "重点元素",
        "type": "select",
        "default": 0,
        "options": [
          {
            "value": 0,
            "label": "第 1 个"
          },
          {
            "value": 1,
            "label": "第 2 个"
          },
          {
            "value": 2,
            "label": "第 3 个"
          }
        ],
        "desc": "选择被高亮的压力指标。",
        "publicKey": "focusIndex",
        "publicLabel": "重点元素",
        "description": "选择被高亮的压力指标。"
      },
      {
        "key": "showBand",
        "label": "示意图形",
        "type": "toggle",
        "default": true,
        "desc": "上方“独立空间被压缩”示意带的显隐。",
        "publicKey": "showBand",
        "publicLabel": "示意图形",
        "description": "上方“独立空间被压缩”示意带的显隐。"
      },
      {
        "key": "showValues",
        "label": "数值标签",
        "type": "toggle",
        "default": true,
        "desc": "压力指标数值标签的显隐。",
        "publicKey": "showValueLabels",
        "publicLabel": "数值标签",
        "description": "压力指标数值标签的显隐。"
      },
      {
        "key": "showDecorations",
        "label": "装饰文案",
        "type": "toggle",
        "default": true,
        "desc": "背景光晕与条码等装饰的显隐。",
        "publicKey": "showDecorations",
        "publicLabel": "装饰文案",
        "description": "背景光晕与条码等装饰的显隐。"
      },
      {
        "key": "accentColor",
        "label": "主题色",
        "type": "color",
        "default": "#86D62B",
        "options": [
          "#86D62B",
          "#23C76A",
          "#2F7BFF",
          "#F2A93B",
          "#0E110B"
        ],
        "desc": "品牌强调色，作用于分类标记、剩余壁垒与高亮指标。",
        "publicKey": "accentColor",
        "publicLabel": "主题色",
        "description": "品牌强调色，作用于分类标记、剩余壁垒与高亮指标。"
      }
    ],
    "defaultProps": {
      "eyebrow": "Open Source Risk",
      "marker": "开源与大厂竞争",
      "segment": "风险 · 开源与大厂竞争",
      "title": "壁垒被压缩",
      "titleTail": "风险 · 开源与大厂竞争",
      "lead": "开源模型降低能力门槛，大厂生态压缩初创公司的独立空间；初创公司必须找到数据、工作流或行业入口壁垒。",
      "closing": "没有壁垒的模型能力会迅速商品化。",
      "bandTitle": "初创公司独立空间 · 被两侧压缩",
      "bandLeft": "开源可替代",
      "bandRight": "大厂生态覆盖",
      "bandCore": "剩余壁垒",
      "bandCoreSub": "数据 · 工作流 · 行业入口",
      "metersTitle": "竞争压力 · 逼近壁垒线",
      "threshold": 60,
      "indicators": [
        {
          "name": "开源模型性能逼近",
          "value": 86,
          "note": "能力差距快速收窄"
        },
        {
          "name": "大厂产品覆盖",
          "value": 72,
          "note": "原生集成挤压入口"
        },
        {
          "name": "企业自建意愿",
          "value": 34,
          "note": "内部团队替代采购"
        }
      ],
      "chartType": "pressure",
      "segmentCount": 3,
      "focusEnabled": true,
      "focusIndex": 0,
      "showBand": true,
      "showValues": true,
      "showDecorations": true,
      "accentColor": "#86D62B"
    }
  },
  {
    "key": "theme07_page064",
    "themeKey": "theme07",
    "pageNumber": 64,
    "layout": "THEME07-064",
    "slot": "strategy-infra-page",
    "label": "71 66",
    "bgClass": "",
    "controls": [
      {
        "key": "cardCount",
        "label": "卡片数量",
        "type": "slider",
        "default": 4,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "推荐方向卡数量（2–4）。",
        "publicKey": "cardCount",
        "publicLabel": "卡片数量",
        "description": "推荐方向卡数量（2–4）。"
      },
      {
        "key": "columns",
        "label": "每行列数",
        "type": "radio",
        "default": 2,
        "options": [
          {
            "value": 1,
            "label": "1 列"
          },
          {
            "value": 2,
            "label": "2 列"
          }
        ],
        "desc": "卡片网格每行的列数。",
        "publicKey": "columns",
        "publicLabel": "每行列数",
        "description": "卡片网格每行的列数。"
      },
      {
        "key": "criteriaCount",
        "label": "清单条目",
        "type": "slider",
        "default": 4,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "左侧筛选指标清单的条目数量（2–4）。",
        "publicKey": "itemCount",
        "publicLabel": "清单条目",
        "description": "左侧筛选指标清单的条目数量（2–4）。"
      },
      {
        "key": "focusEnabled",
        "label": "重点信息",
        "type": "toggle",
        "default": true,
        "desc": "是否高亮某一张推荐方向卡作为视觉重点。",
        "publicKey": "focusEnabled",
        "publicLabel": "重点信息",
        "description": "是否高亮某一张推荐方向卡作为视觉重点。"
      },
      {
        "key": "focusIndex",
        "label": "重点元素",
        "type": "select",
        "default": 0,
        "options": [
          {
            "value": 0,
            "label": "第 1 张"
          },
          {
            "value": 1,
            "label": "第 2 张"
          },
          {
            "value": 2,
            "label": "第 3 张"
          },
          {
            "value": 3,
            "label": "第 4 张"
          }
        ],
        "desc": "选择被高亮的方向卡。",
        "publicKey": "focusIndex",
        "publicLabel": "重点元素",
        "description": "选择被高亮的方向卡。"
      },
      {
        "key": "showMeter",
        "label": "示意图形",
        "type": "toggle",
        "default": true,
        "desc": "卡片上的确定性强度条显隐。",
        "publicKey": "showMeter",
        "publicLabel": "示意图形",
        "description": "卡片上的确定性强度条显隐。"
      },
      {
        "key": "showDecorations",
        "label": "装饰文案",
        "type": "toggle",
        "default": true,
        "desc": "背景光晕与条码等装饰的显隐。",
        "publicKey": "showDecorations",
        "publicLabel": "装饰文案",
        "description": "背景光晕与条码等装饰的显隐。"
      },
      {
        "key": "accentColor",
        "label": "主题色",
        "type": "color",
        "default": "#86D62B",
        "options": [
          "#86D62B",
          "#23C76A",
          "#2F7BFF",
          "#F2A93B",
          "#0E110B"
        ],
        "desc": "品牌强调色，作用于强度条、高亮卡与序号。",
        "publicKey": "accentColor",
        "publicLabel": "主题色",
        "description": "品牌强调色，作用于强度条、高亮卡与序号。"
      }
    ],
    "defaultProps": {
      "eyebrow": "Infrastructure Strategy",
      "segment": "策略 · 优先基础设施",
      "title": "确定性预算",
      "titleTail": "策略 · 优先基础设施",
      "lead": "基础设施公司更接近刚性预算，收入确定性相对更强；模型胜负未定时，卖铲子仍是更稳的资本逻辑。",
      "closing": "优先看能支撑全行业增长的基础设施。",
      "criteriaTitle": "筛选指标 · Screening",
      "criteria": [
        {
          "name": "收入增速",
          "note": "是否有刚性放量需求"
        },
        {
          "name": "毛利率",
          "note": "成本结构是否健康"
        },
        {
          "name": "客户集中度",
          "note": "收入是否过度依赖少数客户"
        },
        {
          "name": "资源锁定",
          "note": "是否绑定算力 / 数据资源"
        }
      ],
      "cardsTitle": "推荐方向 · Infrastructure",
      "cards": [
        {
          "name": "GPU 云",
          "en": "Compute Cloud",
          "note": "刚性算力预算，最接近行业级基础需求。",
          "certainty": 92
        },
        {
          "name": "数据平台",
          "en": "Data Platform",
          "note": "训练与评测的数据底座，复用性强。",
          "certainty": 84
        },
        {
          "name": "推理优化",
          "en": "Inference Opt.",
          "note": "直接压低单位推理成本，刚需且可量化。",
          "certainty": 80
        },
        {
          "name": "评测工具",
          "en": "Eval & Bench",
          "note": "模型选型的度量入口，绑定决策链路。",
          "certainty": 74
        }
      ],
      "cardCount": 4,
      "columns": 2,
      "criteriaCount": 4,
      "focusEnabled": true,
      "focusIndex": 0,
      "showMeter": true,
      "showDecorations": true,
      "accentColor": "#86D62B"
    }
  },
  {
    "key": "theme07_page065",
    "themeKey": "theme07",
    "pageNumber": 65,
    "layout": "THEME07-065",
    "slot": "strategy-vertical-page",
    "label": "72 67",
    "bgClass": "",
    "controls": [
      {
        "key": "stepCount",
        "label": "流程节点",
        "type": "slider",
        "default": 5,
        "min": 3,
        "max": 5,
        "step": 1,
        "desc": "工作流链路的节点数量（3–5）。",
        "publicKey": "stepCount",
        "publicLabel": "流程节点",
        "description": "工作流链路的节点数量（3–5）。"
      },
      {
        "key": "focusEnabled",
        "label": "重点信息",
        "type": "toggle",
        "default": true,
        "desc": "是否高亮工作流中的 AI 嵌入节点。",
        "publicKey": "focusEnabled",
        "publicLabel": "重点信息",
        "description": "是否高亮工作流中的 AI 嵌入节点。"
      },
      {
        "key": "focusIndex",
        "label": "重点元素",
        "type": "select",
        "default": 2,
        "options": [
          {
            "value": 0,
            "label": "第 1 个"
          },
          {
            "value": 1,
            "label": "第 2 个"
          },
          {
            "value": 2,
            "label": "第 3 个"
          },
          {
            "value": 3,
            "label": "第 4 个"
          },
          {
            "value": 4,
            "label": "第 5 个"
          }
        ],
        "desc": "选择被高亮的嵌入节点。",
        "publicKey": "focusIndex",
        "publicLabel": "重点元素",
        "description": "选择被高亮的嵌入节点。"
      },
      {
        "key": "cardCount",
        "label": "卡片数量",
        "type": "slider",
        "default": 4,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "底部筛选维度卡数量（2–4）。",
        "publicKey": "cardCount",
        "publicLabel": "卡片数量",
        "description": "底部筛选维度卡数量（2–4）。"
      },
      {
        "key": "showTags",
        "label": "标签行",
        "type": "toggle",
        "default": true,
        "desc": "底部落地场景标签行的显隐。",
        "publicKey": "showTags",
        "publicLabel": "标签行",
        "description": "底部落地场景标签行的显隐。"
      },
      {
        "key": "tagCount",
        "label": "标签数量",
        "type": "slider",
        "default": 5,
        "min": 2,
        "max": 5,
        "step": 1,
        "desc": "展示的场景标签数量（2–5）。",
        "publicKey": "tagCount",
        "publicLabel": "标签数量",
        "description": "展示的场景标签数量（2–5）。"
      },
      {
        "key": "showDecorations",
        "label": "装饰文案",
        "type": "toggle",
        "default": true,
        "desc": "背景光晕与条码等装饰的显隐。",
        "publicKey": "showDecorations",
        "publicLabel": "装饰文案",
        "description": "背景光晕与条码等装饰的显隐。"
      },
      {
        "key": "accentColor",
        "label": "主题色",
        "type": "color",
        "default": "#86D62B",
        "options": [
          "#86D62B",
          "#23C76A",
          "#2F7BFF",
          "#F2A93B",
          "#0E110B"
        ],
        "desc": "品牌强调色，作用于嵌入节点、连接线与标签。",
        "publicKey": "accentColor",
        "publicLabel": "主题色",
        "description": "品牌强调色，作用于嵌入节点、连接线与标签。"
      }
    ],
    "defaultProps": {
      "eyebrow": "Vertical Strategy",
      "segment": "策略 · 筛选垂直应用",
      "title": "嵌入工作流",
      "titleTail": "策略 · 筛选垂直应用",
      "lead": "垂直应用要看是否嵌入刚性流程，而不是只看生成效果；好的垂直 AI 应用应该成为工作流的一部分。",
      "closing": "应用价值来自流程位置。",
      "flowTitle": "业务工作流 · AI 嵌入位置",
      "steps": [
        {
          "name": "业务触发",
          "en": "Trigger",
          "note": "真实工作请求进入"
        },
        {
          "name": "数据准备",
          "en": "Context",
          "note": "上下文与资料汇集"
        },
        {
          "name": "AI 处理",
          "en": "AI Embed",
          "note": "嵌入式生成与决策",
          "embed": true
        },
        {
          "name": "人工复核",
          "en": "Review",
          "note": "专家确认与修订"
        },
        {
          "name": "结果交付",
          "en": "Deliver",
          "note": "回写至业务系统"
        }
      ],
      "cardsTitle": "筛选维度 · Retention",
      "cards": [
        {
          "name": "付费留存",
          "en": "Retention",
          "note": "续费率能否穿越预算周期"
        },
        {
          "name": "使用频次",
          "en": "Frequency",
          "note": "是否进入高频日常动作"
        },
        {
          "name": "席位扩张",
          "en": "Seat Growth",
          "note": "团队内部能否自然扩散"
        },
        {
          "name": "净收入留存",
          "en": "NRR",
          "note": "老客户是否持续增购"
        }
      ],
      "tagsTitle": "落地场景",
      "tags": [
        "法律",
        "医疗",
        "客服",
        "企业搜索",
        "开发者工具"
      ],
      "stepCount": 5,
      "focusEnabled": true,
      "focusIndex": 2,
      "cardCount": 4,
      "showTags": true,
      "tagCount": 5,
      "showDecorations": true,
      "accentColor": "#86D62B"
    }
  },
  {
    "key": "theme07_page066",
    "themeKey": "theme07",
    "pageNumber": 66,
    "layout": "THEME07-066",
    "slot": "repricing-page",
    "label": "73 68",
    "bgClass": "",
    "controls": [
      {
        "key": "nodeCount",
        "label": "节点数量",
        "type": "slider",
        "default": 4,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "时间轴上的观察公司节点数量（2–4）。",
        "publicKey": "nodeCount",
        "publicLabel": "节点数量",
        "description": "时间轴上的观察公司节点数量（2–4）。"
      },
      {
        "key": "focusEnabled",
        "label": "重点信息",
        "type": "toggle",
        "default": true,
        "desc": "是否高亮某一家观察公司作为视觉重点。",
        "publicKey": "focusEnabled",
        "publicLabel": "重点信息",
        "description": "是否高亮某一家观察公司作为视觉重点。"
      },
      {
        "key": "focusIndex",
        "label": "重点元素",
        "type": "select",
        "default": 0,
        "options": [
          {
            "value": 0,
            "label": "第 1 个"
          },
          {
            "value": 1,
            "label": "第 2 个"
          },
          {
            "value": 2,
            "label": "第 3 个"
          },
          {
            "value": 3,
            "label": "第 4 个"
          }
        ],
        "desc": "选择被高亮的观察公司。",
        "publicKey": "focusIndex",
        "publicLabel": "重点元素",
        "description": "选择被高亮的观察公司。"
      },
      {
        "key": "showMetrics",
        "label": "指标行",
        "type": "toggle",
        "default": true,
        "desc": "底部观察指标行的显隐。",
        "publicKey": "showMetrics",
        "publicLabel": "指标行",
        "description": "底部观察指标行的显隐。"
      },
      {
        "key": "metricCount",
        "label": "指标数量",
        "type": "slider",
        "default": 4,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "展示的观察指标数量（2–4）。",
        "publicKey": "metricCount",
        "publicLabel": "指标数量",
        "description": "展示的观察指标数量（2–4）。"
      },
      {
        "key": "showDecorations",
        "label": "装饰文案",
        "type": "toggle",
        "default": true,
        "desc": "背景光晕与条码等装饰的显隐。",
        "publicKey": "showDecorations",
        "publicLabel": "装饰文案",
        "description": "背景光晕与条码等装饰的显隐。"
      },
      {
        "key": "accentColor",
        "label": "主题色",
        "type": "color",
        "default": "#86D62B",
        "options": [
          "#86D62B",
          "#23C76A",
          "#2F7BFF",
          "#F2A93B",
          "#0E110B"
        ],
        "desc": "品牌强调色，作用于时间轴节点与高亮公司。",
        "publicKey": "accentColor",
        "publicLabel": "主题色",
        "description": "品牌强调色，作用于时间轴节点与高亮公司。"
      }
    ],
    "defaultProps": {
      "eyebrow": "IPO Watch",
      "segment": "策略 · 观察 IPO 窗口",
      "title": "估值锚重定价",
      "titleTail": "策略 · 观察 IPO 窗口",
      "lead": "头部公司 IPO 表现会影响整个 AI 一级市场估值锚；如果头部上市后估值承压，一级市场会同步下修预期。",
      "closing": "公开市场会重新定价 AI 叙事。",
      "axisLabel": "IPO 观察序列 · 估值锚定者",
      "nodes": [
        {
          "name": "OpenAI",
          "sector": "通用大模型",
          "note": "体量决定市场情绪基准"
        },
        {
          "name": "Anthropic",
          "sector": "安全模型",
          "note": "增速验证叙事可持续性"
        },
        {
          "name": "Databricks",
          "sector": "数据平台",
          "note": "老牌营收验证 AI 溢价"
        },
        {
          "name": "CoreWeave",
          "sector": "算力基础设施",
          "note": "云成本与毛利率受考验"
        }
      ],
      "metricsTitle": "观察指标 · Signals",
      "metrics": [
        {
          "name": "上市表现",
          "note": "首日与解禁后定价"
        },
        {
          "name": "收入增速",
          "note": "能否支撑高估值"
        },
        {
          "name": "毛利率",
          "note": "盈利模型是否成立"
        },
        {
          "name": "云成本占比",
          "note": "算力侵蚀利润程度"
        }
      ],
      "nodeCount": 4,
      "focusEnabled": true,
      "focusIndex": 0,
      "showMetrics": true,
      "metricCount": 4,
      "showDecorations": true,
      "accentColor": "#86D62B"
    }
  },
  {
    "key": "theme07_page067",
    "themeKey": "theme07",
    "pageNumber": 67,
    "layout": "THEME07-067",
    "slot": "closing-page",
    "label": "74 69",
    "bgClass": "",
    "controls": [
      {
        "key": "align",
        "label": "对齐方式",
        "type": "radio",
        "default": "center",
        "options": [
          {
            "value": "center",
            "label": "居中"
          },
          {
            "value": "left",
            "label": "左对齐"
          }
        ],
        "desc": "金句与辅助信息的整体对齐方式。",
        "publicKey": "align",
        "publicLabel": "对齐方式",
        "description": "金句与辅助信息的整体对齐方式。"
      },
      {
        "key": "backgroundVariant",
        "label": "背景风格",
        "type": "radio",
        "default": "paper",
        "options": [
          {
            "value": "paper",
            "label": "浅色"
          },
          {
            "value": "dark",
            "label": "深色"
          }
        ],
        "desc": "收尾背景：浅色统一 / 深色换气强调。",
        "publicKey": "backgroundVariant",
        "publicLabel": "背景风格",
        "description": "收尾背景：浅色统一 / 深色换气强调。"
      },
      {
        "key": "showKicker",
        "label": "标题标签",
        "type": "toggle",
        "default": true,
        "desc": "顶部“最终判断”标签行的显隐。",
        "publicKey": "showKicker",
        "publicLabel": "标题标签",
        "description": "顶部“最终判断”标签行的显隐。"
      },
      {
        "key": "showQuoteMark",
        "label": "引号装饰",
        "type": "toggle",
        "default": true,
        "desc": "超大引号装饰符号的显隐。",
        "publicKey": "showQuoteMark",
        "publicLabel": "引号装饰",
        "description": "超大引号装饰符号的显隐。"
      },
      {
        "key": "showTagline",
        "label": "辅助信息",
        "type": "toggle",
        "default": true,
        "desc": "金句下方单行收束语的显隐。",
        "publicKey": "showTagline",
        "publicLabel": "辅助信息",
        "description": "金句下方单行收束语的显隐。"
      },
      {
        "key": "showBrand",
        "label": "品牌签名",
        "type": "toggle",
        "default": true,
        "desc": "左下角品牌标识的显隐。",
        "publicKey": "showBrand",
        "publicLabel": "品牌签名",
        "description": "左下角品牌标识的显隐。"
      },
      {
        "key": "showDecorations",
        "label": "装饰文案",
        "type": "toggle",
        "default": true,
        "desc": "背景光晕、镜头光斑与条码等装饰的显隐。",
        "publicKey": "showDecorations",
        "publicLabel": "装饰文案",
        "description": "背景光晕、镜头光斑与条码等装饰的显隐。"
      },
      {
        "key": "accentColor",
        "label": "主题色",
        "type": "color",
        "default": "#86D62B",
        "options": [
          "#86D62B",
          "#23C76A",
          "#2F7BFF",
          "#F2A93B",
          "#0E110B"
        ],
        "desc": "品牌强调色，作用于金句重点词与装饰。",
        "publicKey": "accentColor",
        "publicLabel": "主题色",
        "description": "品牌强调色，作用于金句重点词与装饰。"
      }
    ],
    "defaultProps": {
      "eyebrow": "Closing",
      "kicker": "最终判断",
      "quoteLead": "融资盛宴之后，",
      "quoteEm": "真正的竞争",
      "quoteTail": "才刚开始。",
      "tagline": "从资本流向，看 AI 产业下一阶段的真实重心。",
      "brandLabel": "AI CAPITAL LAB",
      "brandSub": "FUNDING INTELLIGENCE",
      "align": "center",
      "backgroundVariant": "paper",
      "showKicker": true,
      "showQuoteMark": true,
      "showTagline": true,
      "showBrand": true,
      "showDecorations": true,
      "accentColor": "#86D62B"
    }
  },
  {
    "key": "theme07_page068",
    "themeKey": "theme07",
    "pageNumber": 68,
    "layout": "THEME07-068",
    "slot": "appendix-chapter-page",
    "label": "75 70",
    "bgClass": "",
    "controls": [
      {
        "key": "backgroundVariant",
        "label": "背景风格",
        "type": "radio",
        "default": "dark",
        "options": [
          {
            "value": "dark",
            "label": "深色"
          },
          {
            "value": "paper",
            "label": "浅色"
          }
        ],
        "desc": "章节页背景：深色（强换气节奏）/ 浅色（与正文统一）。",
        "publicKey": "backgroundVariant",
        "publicLabel": "背景风格",
        "description": "章节页背景：深色（强换气节奏）/ 浅色（与正文统一）。"
      },
      {
        "key": "layout",
        "label": "排版",
        "type": "radio",
        "default": "left",
        "options": [
          {
            "value": "left",
            "label": "左对齐"
          },
          {
            "value": "center",
            "label": "居中"
          }
        ],
        "desc": "标题与关键词的整体排布方式。",
        "publicKey": "layout",
        "publicLabel": "排版",
        "description": "标题与关键词的整体排布方式。"
      },
      {
        "key": "showIndex",
        "label": "章节序号",
        "type": "toggle",
        "default": true,
        "desc": "超大章节编号水印的显隐。",
        "publicKey": "showIndex",
        "publicLabel": "章节序号",
        "description": "超大章节编号水印的显隐。"
      },
      {
        "key": "showKeywords",
        "label": "关键词",
        "type": "toggle",
        "default": true,
        "desc": "本章关键词标签行的显隐。",
        "publicKey": "showKeywords",
        "publicLabel": "关键词",
        "description": "本章关键词标签行的显隐。"
      },
      {
        "key": "keywordCount",
        "label": "关键词数量",
        "type": "slider",
        "default": 4,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "展示的关键词数量（2–4）。",
        "publicKey": "keywordCount",
        "publicLabel": "关键词数量",
        "description": "展示的关键词数量（2–4）。"
      },
      {
        "key": "showDecorations",
        "label": "装饰文案",
        "type": "toggle",
        "default": true,
        "desc": "镜头光斑、背景光晕与条码等装饰的显隐。",
        "publicKey": "showDecorations",
        "publicLabel": "装饰文案",
        "description": "镜头光斑、背景光晕与条码等装饰的显隐。"
      },
      {
        "key": "accentColor",
        "label": "主题色",
        "type": "color",
        "default": "#86D62B",
        "options": [
          "#86D62B",
          "#23C76A",
          "#2F7BFF",
          "#F2A93B",
          "#0E110B"
        ],
        "desc": "品牌强调色。",
        "publicKey": "accentColor",
        "publicLabel": "主题色",
        "description": "品牌强调色。"
      }
    ],
    "defaultProps": {
      "eyebrow": "Appendix",
      "index": "06",
      "title": "附录与延展",
      "sub": "数据来源、前瞻指标与研究团队",
      "lead": "正文之外，补充本报告的研究口径、数据来源、2025 年前瞻观察指标，以及研究团队信息，便于复核与延展阅读。",
      "closing": "数据可复核，判断可延展。",
      "keywords": [
        "研究口径",
        "数据来源",
        "前瞻指标",
        "关于团队"
      ],
      "backgroundVariant": "dark",
      "layout": "left",
      "showIndex": true,
      "showKeywords": true,
      "keywordCount": 4,
      "showDecorations": true,
      "accentColor": "#86D62B"
    }
  },
  {
    "key": "theme07_page069",
    "themeKey": "theme07",
    "pageNumber": 69,
    "layout": "THEME07-069",
    "slot": "forward-page",
    "label": "76 71",
    "bgClass": "",
    "controls": [
      {
        "key": "chartType",
        "label": "图表类型",
        "type": "radio",
        "default": "slope",
        "options": [
          {
            "value": "slope",
            "label": "推演线"
          },
          {
            "value": "bars",
            "label": "偏离条"
          }
        ],
        "desc": "前瞻图表样式：2024→2025E 推演线（扇形）/ 围绕基线的偏离条。",
        "publicKey": "chartType",
        "publicLabel": "图表类型",
        "description": "前瞻图表样式：2024→2025E 推演线（扇形）/ 围绕基线的偏离条。"
      },
      {
        "key": "metricCount",
        "label": "卡片数量",
        "type": "slider",
        "default": 5,
        "min": 3,
        "max": 5,
        "step": 1,
        "desc": "展示的前瞻指标数量（3–5）。",
        "publicKey": "metricCount",
        "publicLabel": "卡片数量",
        "description": "展示的前瞻指标数量（3–5）。"
      },
      {
        "key": "focusEnabled",
        "label": "重点信息",
        "type": "toggle",
        "default": true,
        "desc": "是否高亮某一个指标作为视觉重点。",
        "publicKey": "focusEnabled",
        "publicLabel": "重点信息",
        "description": "是否高亮某一个指标作为视觉重点。"
      },
      {
        "key": "focusIndex",
        "label": "重点元素",
        "type": "select",
        "default": 0,
        "options": [
          {
            "value": 0,
            "label": "第 1 个"
          },
          {
            "value": 1,
            "label": "第 2 个"
          },
          {
            "value": 2,
            "label": "第 3 个"
          },
          {
            "value": 3,
            "label": "第 4 个"
          },
          {
            "value": 4,
            "label": "第 5 个"
          }
        ],
        "desc": "选择被高亮的指标。",
        "publicKey": "focusIndex",
        "publicLabel": "重点元素",
        "description": "选择被高亮的指标。"
      },
      {
        "key": "showValues",
        "label": "数值标签",
        "type": "toggle",
        "default": true,
        "desc": "指标 2025E 指数与变化徽标的显隐。",
        "publicKey": "showValueLabels",
        "publicLabel": "数值标签",
        "description": "指标 2025E 指数与变化徽标的显隐。"
      },
      {
        "key": "showBand",
        "label": "情景区间",
        "type": "toggle",
        "default": true,
        "desc": "推演线的情景区间扇形带的显隐。",
        "publicKey": "showBand",
        "publicLabel": "情景区间",
        "description": "推演线的情景区间扇形带的显隐。"
      },
      {
        "key": "showDecorations",
        "label": "装饰文案",
        "type": "toggle",
        "default": true,
        "desc": "背景光晕与条码等装饰的显隐。",
        "publicKey": "showDecorations",
        "publicLabel": "装饰文案",
        "description": "背景光晕与条码等装饰的显隐。"
      },
      {
        "key": "accentColor",
        "label": "主题色",
        "type": "color",
        "default": "#86D62B",
        "options": [
          "#86D62B",
          "#23C76A",
          "#2F7BFF",
          "#F2A93B",
          "#0E110B"
        ],
        "desc": "品牌强调色，作用于上行指标、推演线与高亮元素。",
        "publicKey": "accentColor",
        "publicLabel": "主题色",
        "description": "品牌强调色，作用于上行指标、推演线与高亮元素。"
      }
    ],
    "defaultProps": {
      "eyebrow": "Forward View · 2025",
      "title": "2025 前瞻",
      "titleTail": "关键指标与观察信号",
      "lead": "将 2024 的结构外推到 2025：资本可能从规模扩张转向效率验证，少数确定性方向继续获得资本，叙事型估值面临重定价。",
      "anchorValue": "+38%",
      "anchorLabel": "垂直应用收入兑现 · 2025E 情景增速",
      "scenarioTag": "情景推演 · 2024 = 100",
      "closing": "增量来自兑现，而非叙事。",
      "panelTitle": "2024 → 2025E 指标推演（指数，2024 = 100）",
      "baselineLabel": "2024 基线 · 100",
      "axisFrom": "2024",
      "axisTo": "2025E",
      "metrics": [
        {
          "label": "垂直应用收入兑现",
          "value": 138,
          "note": "付费留存与席位扩张"
        },
        {
          "label": "基础设施资本确定性",
          "value": 124,
          "note": "GPU 云与数据平台"
        },
        {
          "label": "平均单笔规模",
          "value": 105,
          "note": "头部集中度提升"
        },
        {
          "label": "全年大额事件数",
          "value": 88,
          "note": "事件数量理性回落"
        },
        {
          "label": "叙事型估值",
          "value": 82,
          "note": "面临公开市场重定价"
        }
      ],
      "chartType": "slope",
      "metricCount": 5,
      "focusEnabled": true,
      "focusIndex": 0,
      "showValues": true,
      "showBand": true,
      "showDecorations": true,
      "accentColor": "#86D62B"
    }
  },
  {
    "key": "theme07_page070",
    "themeKey": "theme07",
    "pageNumber": 70,
    "layout": "THEME07-070",
    "slot": "sources-page",
    "label": "77 72",
    "bgClass": "",
    "controls": [
      {
        "key": "rowCount",
        "label": "行数量",
        "type": "slider",
        "default": 6,
        "min": 4,
        "max": 6,
        "step": 1,
        "desc": "口径表格展示的行数量（4–6）。",
        "publicKey": "rowCount",
        "publicLabel": "行数量",
        "description": "口径表格展示的行数量（4–6）。"
      },
      {
        "key": "showLevel",
        "label": "强度列",
        "type": "toggle",
        "default": true,
        "desc": "可信度列（强度条 + 数值）的显隐。",
        "publicKey": "showStatusLevel",
        "publicLabel": "强度列",
        "description": "可信度列（强度条 + 数值）的显隐。"
      },
      {
        "key": "showFlow",
        "label": "流程图",
        "type": "toggle",
        "default": true,
        "desc": "底部横向口径处理流程条的显隐。",
        "publicKey": "showFlow",
        "publicLabel": "流程图",
        "description": "底部横向口径处理流程条的显隐。"
      },
      {
        "key": "flowStepCount",
        "label": "流程数量",
        "type": "slider",
        "default": 5,
        "min": 3,
        "max": 5,
        "step": 1,
        "desc": "流程节点数量（3–5）。",
        "publicKey": "flowStepCount",
        "publicLabel": "流程数量",
        "description": "流程节点数量（3–5）。"
      },
      {
        "key": "focusEnabled",
        "label": "重点信息",
        "type": "toggle",
        "default": true,
        "desc": "是否高亮某一行作为视觉重点。",
        "publicKey": "focusEnabled",
        "publicLabel": "重点信息",
        "description": "是否高亮某一行作为视觉重点。"
      },
      {
        "key": "focusIndex",
        "label": "重点元素",
        "type": "select",
        "default": 0,
        "options": [
          {
            "value": 0,
            "label": "第 1 行"
          },
          {
            "value": 1,
            "label": "第 2 行"
          },
          {
            "value": 2,
            "label": "第 3 行"
          },
          {
            "value": 3,
            "label": "第 4 行"
          },
          {
            "value": 4,
            "label": "第 5 行"
          },
          {
            "value": 5,
            "label": "第 6 行"
          }
        ],
        "desc": "选择被高亮的行。",
        "publicKey": "focusIndex",
        "publicLabel": "重点元素",
        "description": "选择被高亮的行。"
      },
      {
        "key": "showDecorations",
        "label": "装饰文案",
        "type": "toggle",
        "default": true,
        "desc": "背景光晕与条码等装饰的显隐。",
        "publicKey": "showDecorations",
        "publicLabel": "装饰文案",
        "description": "背景光晕与条码等装饰的显隐。"
      },
      {
        "key": "accentColor",
        "label": "主题色",
        "type": "color",
        "default": "#86D62B",
        "options": [
          "#86D62B",
          "#23C76A",
          "#2F7BFF",
          "#F2A93B",
          "#0E110B"
        ],
        "desc": "品牌强调色，作用于维度标记、高亮行与流程节点。",
        "publicKey": "accentColor",
        "publicLabel": "主题色",
        "description": "品牌强调色，作用于维度标记、高亮行与流程节点。"
      }
    ],
    "defaultProps": {
      "eyebrow": "Data & Methodology",
      "marker": "研究口径",
      "segment": "附录 · 口径与来源",
      "title": "数据来源与口径",
      "titleTail": "附录 · 口径与来源",
      "lead": "本报告以公开披露的 2024 年美国 AI 大额融资事件为样本，统一口径后进行结构化分析；以下为关键口径与数据来源说明。",
      "statLine": "样本 97 笔 · 单笔 ≥1 亿美元 · 截至 2024 全年",
      "anchorValue": "97",
      "anchorLabel": "大额融资事件样本量 / 笔",
      "closing": "口径透明，结论才可被检验。",
      "colHeads": {
        "dim": "口径维度",
        "level": "可信度",
        "note": "口径定义与来源"
      },
      "rows": [
        {
          "dim": "融资口径",
          "level": 95,
          "note": "单笔 ≥1 亿美元股权融资，剔除二级交易与并购"
        },
        {
          "dim": "时间范围",
          "level": 92,
          "note": "2024-01 至 2024-12，按融资公告日归属季度"
        },
        {
          "dim": "地域范围",
          "level": 90,
          "note": "总部位于美国的 AI 公司，以注册地为准"
        },
        {
          "dim": "数据来源",
          "level": 85,
          "note": "公开新闻、公司公告与行业数据库多源交叉"
        },
        {
          "dim": "汇率与单位",
          "level": 88,
          "note": "统一折算为美元，以「亿美元」为展示单位"
        },
        {
          "dim": "赛道划分",
          "level": 78,
          "note": "模型 / 应用 / 基础设施 / 硬件 / 安全 五类，按主营归类"
        }
      ],
      "flowTitle": "口径处理流程",
      "flow": [
        "数据采集",
        "去重核对",
        "口径统一",
        "结构化",
        "交叉复核"
      ],
      "rowCount": 6,
      "showLevel": true,
      "showFlow": true,
      "flowStepCount": 5,
      "focusEnabled": true,
      "focusIndex": 0,
      "showDecorations": true,
      "accentColor": "#86D62B"
    }
  },
  {
    "key": "theme07_page071",
    "themeKey": "theme07",
    "pageNumber": 71,
    "layout": "THEME07-071",
    "slot": "about-lab-page",
    "label": "78 73",
    "bgClass": "",
    "controls": [
      {
        "key": "imageCount",
        "label": "图片数量",
        "type": "slider",
        "default": 2,
        "min": 0,
        "max": 3,
        "step": 1,
        "desc": "主视觉区图片槽数量（0–3）；为 0 时以品牌图形填充，1 张可跟随原图比例，多张自动排成画廊。",
        "publicKey": "imageCount",
        "publicLabel": "图片数量",
        "description": "主视觉区图片槽数量（0–3）；为 0 时以品牌图形填充，1 张可跟随原图比例，多张自动排成画廊。"
      },
      {
        "key": "imageRatio",
        "label": "图片比例",
        "type": "radio",
        "default": "auto",
        "options": [
          {
            "value": "portrait",
            "label": "竖图"
          },
          {
            "value": "landscape",
            "label": "横图"
          },
          {
            "value": "square",
            "label": "方形"
          },
          {
            "value": "auto",
            "label": "自适应"
          }
        ],
        "desc": "图片槽比例；自适应会跟随用户上传图片的原始比例（单图自然排布，多图统一为画廊墙）。",
        "publicKey": "imageRatio",
        "publicLabel": "图片比例",
        "description": "图片槽比例；自适应会跟随用户上传图片的原始比例（单图自然排布，多图统一为画廊墙）。"
      },
      {
        "key": "cardCount",
        "label": "卡片数量",
        "type": "slider",
        "default": 4,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "左侧能力说明卡数量（2–4）。",
        "publicKey": "cardCount",
        "publicLabel": "卡片数量",
        "description": "左侧能力说明卡数量（2–4）。"
      },
      {
        "key": "focusEnabled",
        "label": "重点信息",
        "type": "toggle",
        "default": true,
        "desc": "是否高亮某一张能力卡作为视觉重点。",
        "publicKey": "focusEnabled",
        "publicLabel": "重点信息",
        "description": "是否高亮某一张能力卡作为视觉重点。"
      },
      {
        "key": "focusIndex",
        "label": "重点元素",
        "type": "select",
        "default": 0,
        "options": [
          {
            "value": 0,
            "label": "第 1 个"
          },
          {
            "value": 1,
            "label": "第 2 个"
          },
          {
            "value": 2,
            "label": "第 3 个"
          },
          {
            "value": 3,
            "label": "第 4 个"
          }
        ],
        "desc": "选择被高亮的能力卡。",
        "publicKey": "focusIndex",
        "publicLabel": "重点元素",
        "description": "选择被高亮的能力卡。"
      },
      {
        "key": "showContact",
        "label": "联系信息",
        "type": "toggle",
        "default": true,
        "desc": "底部联系信息行的显隐。",
        "publicKey": "showContact",
        "publicLabel": "联系信息",
        "description": "底部联系信息行的显隐。"
      },
      {
        "key": "showDecorations",
        "label": "装饰文案",
        "type": "toggle",
        "default": true,
        "desc": "背景光晕、图片角标与条码等装饰的显隐。",
        "publicKey": "showDecorations",
        "publicLabel": "装饰文案",
        "description": "背景光晕、图片角标与条码等装饰的显隐。"
      },
      {
        "key": "accentColor",
        "label": "主题色",
        "type": "color",
        "default": "#86D62B",
        "options": [
          "#86D62B",
          "#23C76A",
          "#2F7BFF",
          "#F2A93B",
          "#0E110B"
        ],
        "desc": "品牌强调色，作用于序号、高亮卡与装饰。",
        "publicKey": "accentColor",
        "publicLabel": "主题色",
        "description": "品牌强调色，作用于序号、高亮卡与装饰。"
      }
    ],
    "defaultProps": {
      "eyebrow": "About the Lab",
      "segment": "研究团队与方法",
      "title": "关于 AI Capital Lab",
      "titleTail": "研究团队与方法",
      "lead": "AI Capital Lab 专注于 AI 产业的资本流向研究，用横纵分析法把融资数据转化为结构化判断，服务投资人、创业者与产业研究者。",
      "statLine": "横纵分析法 · 多源交叉 · 持续追踪",
      "closing": "从资本流向，看 AI 产业的真实重心。",
      "badge": "研究团队",
      "listTitle": "我们做什么",
      "cards": [
        {
          "label": "资本流向研究",
          "note": "追踪大额融资事件与赛道结构变化"
        },
        {
          "label": "横纵分析方法",
          "note": "空间对比 × 时间演化 × 产业分层"
        },
        {
          "label": "多源数据核对",
          "note": "公开披露交叉验证，口径透明可复核"
        },
        {
          "label": "前瞻信号追踪",
          "note": "收入兑现、IPO 窗口与算力成本观察"
        }
      ],
      "contactTitle": "联系",
      "contacts": [
        "research@aicapitallab.example",
        "AI Capital Lab · 行业研究"
      ],
      "imageCount": 2,
      "imageRatio": "auto",
      "cardCount": 4,
      "focusEnabled": true,
      "focusIndex": 0,
      "showContact": true,
      "showDecorations": true,
      "accentColor": "#86D62B",
      "renderSlot": null
    }
  }
];
