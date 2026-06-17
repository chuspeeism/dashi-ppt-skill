export const theme = {
  "key": "theme06",
  "displayName": "深色图谱风",
  "label": "深色图谱风",
  "name": "深色图谱风",
  "scenario": "高密度数据展示、战略分析、科技/金融/产业报告",
  "audience": "战略团队、投资人、产业研究团队、高管汇报者",
  "mode": "new"
};
export const pages = [
  {
    "key": "theme06_page001",
    "themeKey": "theme06",
    "pageNumber": 1,
    "layout": "THEME06-001",
    "slot": "coverA",
    "label": "封面A · 智联万物 / PRODUCT LAUNCH",
    "bgClass": "",
    "controls": [
      {
        "key": "showMidBtn",
        "label": "连接按钮",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏中部的圆形 ↗ 连接按钮",
        "publicKey": "showMidBtn",
        "publicLabel": "连接按钮",
        "description": "显示/隐藏中部的圆形 ↗ 连接按钮"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#d2fb30",
        "options": [
          "#d2fb30",
          "#ff5a3c",
          "#3ca0ff",
          "#ffd23c"
        ],
        "desc": "主强调色（影响荧光绿元素）",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "主强调色（影响荧光绿元素）"
      }
    ],
    "defaultProps": {
      "kicker": "01 · PRODUCT LAUNCH",
      "titleLine1": "智联万物",
      "titleLine2Pre": "重构",
      "titleLine2Em": "体验",
      "lede": [
        "2026 全新产品体系发布暨技术路演。",
        "以技术突破，定义下一代数字生活。"
      ],
      "footV": "智联",
      "footText": "全新产品体系发布 · 技术路演",
      "footEn": "IoT × EXPERIENCE",
      "card1Label": "万物互联 · IoT",
      "card1Title": "全域智联",
      "card1Sub": [
        "设备 · 数据 · 服务",
        "一体贯通的数字底座"
      ],
      "card2Label": "技术突破 · Tech",
      "card2Title": "体验重构",
      "card2Sub": [
        "以技术突破，",
        "定义下一代数字生活"
      ],
      "accent": "#d2fb30",
      "showMidBtn": true
    }
  },
  {
    "key": "theme06_page002",
    "themeKey": "theme06",
    "pageNumber": 2,
    "layout": "THEME06-002",
    "slot": "coverB",
    "label": "封面B · 新机遇 / BUSINESS PLAN",
    "bgClass": "",
    "controls": [
      {
        "key": "showHaze",
        "label": "顶部光晕",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏顶部径向光晕装饰",
        "publicKey": "showHaze",
        "publicLabel": "顶部光晕",
        "description": "显示/隐藏顶部径向光晕装饰"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#d2fb30",
        "options": [
          "#d2fb30",
          "#ff5a3c",
          "#3ca0ff",
          "#ffd23c"
        ],
        "desc": "主强调色（影响荧光绿元素）",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "主强调色（影响荧光绿元素）"
      }
    ],
    "defaultProps": {
      "kicker": "BUSINESS PLAN · 商业计划书",
      "docId": "CONFIDENTIAL / 03",
      "titleLine1": "精准布局",
      "titleLine2": "与时代红利同行",
      "sub": "XX 金融项目商业计划书 · 新机遇 · 新赛道 · 新价值",
      "note": "面向机构投资人专属方案",
      "stats": [
        {
          "sv": "新机遇",
          "sl": "New Opportunity"
        },
        {
          "sv": "新赛道",
          "sl": "New Track"
        },
        {
          "sv": "新价值",
          "sl": "New Value"
        }
      ],
      "accent": "#d2fb30",
      "showHaze": true
    }
  },
  {
    "key": "theme06_page003",
    "themeKey": "theme06",
    "pageNumber": 3,
    "layout": "THEME06-003",
    "slot": "coverC",
    "label": "封面C · 精益智造 / LEAN MFG",
    "bgClass": "",
    "controls": [
      {
        "key": "activeStep",
        "label": "高亮第几步",
        "type": "number",
        "default": 2,
        "min": 0,
        "max": 3,
        "desc": "被高亮的步骤行序号（从 0 开始）",
        "publicKey": "activeStep",
        "publicLabel": "高亮第几步",
        "description": "被高亮的步骤行序号（从 0 开始）"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#d2fb30",
        "options": [
          "#d2fb30",
          "#ff5a3c",
          "#3ca0ff",
          "#ffd23c"
        ],
        "desc": "主强调色（影响荧光绿元素）",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "主强调色（影响荧光绿元素）"
      }
    ],
    "defaultProps": {
      "kicker": "05 · LEAN MANUFACTURING",
      "titleLine1": "精益智造",
      "titleLine2Pre": "提质",
      "titleLine2Em": "增效",
      "lede": [
        "2026 生产基地智能化改造实施方案。",
        "以数字化重构制造流程，让每一道工序更轻。"
      ],
      "footV": "智造",
      "footText": "生产基地智能化改造 · 实施方案",
      "footEn": "PLAN / 2026",
      "steps": [
        {
          "si": "01",
          "st": "降本",
          "sen": "Cost Down"
        },
        {
          "si": "02",
          "st": "提效",
          "sen": "Efficiency"
        },
        {
          "si": "03",
          "st": "革新",
          "sen": "Innovation"
        },
        {
          "si": "04",
          "st": "突围",
          "sen": "Breakthrough"
        }
      ],
      "accent": "#d2fb30",
      "activeStep": 2
    }
  },
  {
    "key": "theme06_page004",
    "themeKey": "theme06",
    "pageNumber": 4,
    "layout": "THEME06-004",
    "slot": "coverD",
    "label": "封面D · 品牌整合营销 / BRAND MKT",
    "bgClass": "",
    "controls": [
      {
        "key": "showWatermark",
        "label": "背景大字",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏右侧巨型年份水印字",
        "publicKey": "showWatermark",
        "publicLabel": "背景大字",
        "description": "显示/隐藏右侧巨型年份水印字"
      },
      {
        "key": "showGlow",
        "label": "底部光晕",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏左下角强调色光晕",
        "publicKey": "showGlow",
        "publicLabel": "底部光晕",
        "description": "显示/隐藏左下角强调色光晕"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#d2fb30",
        "options": [
          "#d2fb30",
          "#ff5a3c",
          "#3ca0ff",
          "#ffd23c"
        ],
        "desc": "主强调色（影响荧光绿元素）",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "主强调色（影响荧光绿元素）"
      }
    ],
    "defaultProps": {
      "kicker": "06 · BRAND MARKETING",
      "docId": "FY2026 / FULL-FUNNEL",
      "watermark": "2026",
      "formal": "2026 年度全平台品牌整合营销方案 · 覆盖内容、投放、私域与活动的全链路打法。",
      "titleLine1": "内容驱动传播",
      "titleLine2Pre": "创意",
      "titleLine2Em": "引爆",
      "titleLine2Suf": "市场",
      "tags": [
        {
          "t": "全平台整合"
        },
        {
          "t": "内容驱动"
        },
        {
          "t": "创意引爆",
          "solid": true
        }
      ],
      "accent": "#d2fb30",
      "showWatermark": true,
      "showGlow": true
    }
  },
  {
    "key": "theme06_page005",
    "themeKey": "theme06",
    "pageNumber": 5,
    "layout": "THEME06-005",
    "slot": "cover",
    "label": "01 · 封面 / COVER",
    "bgClass": "",
    "controls": [
      {
        "key": "showWatermark",
        "label": "背景大字",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏背景的巨型水印字（装饰文案）",
        "publicKey": "showWatermark",
        "publicLabel": "背景大字",
        "description": "显示/隐藏背景的巨型水印字（装饰文案）"
      },
      {
        "key": "mediaSlotCount",
        "label": "媒体占位数量",
        "type": "number",
        "default": 1,
        "min": 0,
        "max": 1,
        "desc": "右侧主视觉图片槽数量（0 隐藏；上传后按图片比例自适应）",
        "publicKey": "mediaSlotCount",
        "publicLabel": "媒体占位数量",
        "description": "右侧主视觉图片槽数量（0 隐藏；上传后按图片比例自适应）"
      },
      {
        "key": "focusEnabled",
        "label": "重点信息高亮",
        "type": "toggle",
        "default": true,
        "desc": "是否高亮一条口径信息",
        "publicKey": "focusEnabled",
        "publicLabel": "重点信息高亮",
        "description": "是否高亮一条口径信息"
      },
      {
        "key": "focusIndex",
        "label": "高亮第几条",
        "type": "number",
        "default": 1,
        "min": 0,
        "max": 3,
        "desc": "被高亮的口径行序号",
        "publicKey": "focusIndex",
        "publicLabel": "高亮第几条",
        "description": "被高亮的口径行序号"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#c8f135",
        "options": [
          "#c8f135",
          "#ff5a3c",
          "#3ca0ff",
          "#ffd23c"
        ],
        "desc": "主强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "主强调色"
      }
    ],
    "defaultProps": {
      "eyebrowId": "01",
      "eyebrowLabel": "COVER",
      "wordmark": "AI CAPITAL LAB",
      "statusCenter": "US AI MEGA-FUNDING",
      "statusRight": "DATA ≥ $100M",
      "year": "2024",
      "titleLines": [
        "美国大额融资",
        "AI 公司调研报告"
      ],
      "subhead": "数据口径：2024 全年 · 单笔 ≥ 1 亿美元",
      "phrase": "在资本与算力的浪潮里，每一笔融资都是一次方向的押注。",
      "closing": "从资本流向，看 AI 产业下一阶段的真实重心。",
      "watermark": "CAPITAL",
      "data": [
        {
          "label": "年份 / YEAR",
          "value": "2024"
        },
        {
          "label": "口径 / SCOPE",
          "value": "≥ $100M"
        },
        {
          "label": "日期 / DATE",
          "value": "2026.06"
        },
        {
          "label": "主题 / TOPIC",
          "value": "美国 AI 大额融资"
        }
      ],
      "showWatermark": true,
      "mediaSlotCount": 1,
      "focusEnabled": true,
      "focusIndex": 1,
      "accent": "#c8f135"
    }
  },
  {
    "key": "theme06_page006",
    "themeKey": "theme06",
    "pageNumber": 6,
    "layout": "THEME06-006",
    "slot": "summary",
    "label": "02 · 报告摘要 / OVERVIEW",
    "bgClass": "",
    "controls": [
      {
        "key": "metricCount",
        "label": "指标卡数量",
        "type": "number",
        "default": 4,
        "min": 2,
        "max": 4,
        "desc": "底部核心指标卡的数量",
        "publicKey": "metricCount",
        "publicLabel": "指标卡数量",
        "description": "底部核心指标卡的数量"
      },
      {
        "key": "focusEnabled",
        "label": "指标重点高亮",
        "type": "toggle",
        "default": true,
        "desc": "是否高亮一张指标卡",
        "publicKey": "focusEnabled",
        "publicLabel": "指标重点高亮",
        "description": "是否高亮一张指标卡"
      },
      {
        "key": "focusIndex",
        "label": "高亮第几张",
        "type": "number",
        "default": 0,
        "min": 0,
        "max": 3,
        "desc": "被高亮的指标卡序号",
        "publicKey": "focusIndex",
        "publicLabel": "高亮第几张",
        "description": "被高亮的指标卡序号"
      },
      {
        "key": "chartType",
        "label": "占比图表类型",
        "type": "select",
        "default": "bars",
        "options": [
          [
            "bars",
            "条形"
          ],
          [
            "stack",
            "堆叠条"
          ],
          [
            "dots",
            "点阵"
          ]
        ],
        "desc": "右侧分类占比图表的呈现形式",
        "publicKey": "chartType",
        "publicLabel": "占比图表类型",
        "description": "右侧分类占比图表的呈现形式"
      },
      {
        "key": "showCaption",
        "label": "装饰文案",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏关键词与底部说明（装饰文案）",
        "publicKey": "showCaption",
        "publicLabel": "装饰文案",
        "description": "显示/隐藏关键词与底部说明（装饰文案）"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#c8f135",
        "options": [
          "#c8f135",
          "#ff5a3c",
          "#3ca0ff",
          "#ffd23c"
        ],
        "desc": "主强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "主强调色"
      }
    ],
    "defaultProps": {
      "eyebrowId": "02",
      "eyebrowLabel": "OVERVIEW",
      "title": "报告摘要",
      "subhead": "2024 全年 · 资本大年",
      "summary": "2024 年美国 AI 初创公司吸纳约 <b>970 亿美元</b> 风险投资，单笔 ≥ 1 亿美元的大额融资事件达 <b>97 笔</b>。",
      "closing": "资本仍在涌入 AI，但下一阶段会从赌叙事转向看兑现。",
      "shares": [
        {
          "name": "通用大模型",
          "v": 43.3
        },
        {
          "name": "垂直应用",
          "v": 25.3
        },
        {
          "name": "基础设施",
          "v": 16.3
        },
        {
          "name": "AI 芯片",
          "v": 10
        },
        {
          "name": "其他",
          "v": 5.1
        }
      ],
      "metrics": [
        {
          "n": "$97B",
          "c": "全年融资 / TOTAL"
        },
        {
          "n": "97",
          "c": "大额事件 / DEALS ≥$100M"
        },
        {
          "n": "$1.0B",
          "c": "平均单笔 / AVG TICKET"
        },
        {
          "n": "63.9%",
          "c": "湾区占比 / BAY AREA"
        }
      ],
      "keywords": [
        "赢家通吃",
        "AGI 叙事",
        "地理护城河",
        "估值泡沫",
        "退潮看兑现"
      ],
      "metricCount": 4,
      "focusEnabled": true,
      "focusIndex": 0,
      "chartType": "bars",
      "showCaption": true,
      "accent": "#c8f135"
    }
  },
  {
    "key": "theme06_page007",
    "themeKey": "theme06",
    "pageNumber": 7,
    "layout": "THEME06-007",
    "slot": "contents",
    "label": "03 · 报告结构 / STRUCTURE",
    "bgClass": "",
    "controls": [
      {
        "key": "cardCount",
        "label": "章节卡数量",
        "type": "number",
        "default": 7,
        "min": 3,
        "max": 7,
        "desc": "展示的章节数量",
        "publicKey": "cardCount",
        "publicLabel": "章节卡数量",
        "description": "展示的章节数量"
      },
      {
        "key": "layout",
        "label": "排布方式",
        "type": "select",
        "default": "rows",
        "options": [
          [
            "rows",
            "列表"
          ],
          [
            "grid",
            "网格"
          ]
        ],
        "desc": "章节的排布形式",
        "publicKey": "layout",
        "publicLabel": "排布方式",
        "description": "章节的排布形式"
      },
      {
        "key": "focusEnabled",
        "label": "重点章节高亮",
        "type": "toggle",
        "default": true,
        "desc": "是否突出某一章节",
        "publicKey": "focusEnabled",
        "publicLabel": "重点章节高亮",
        "description": "是否突出某一章节"
      },
      {
        "key": "focusIndex",
        "label": "高亮第几章",
        "type": "number",
        "default": 1,
        "min": 0,
        "max": 6,
        "desc": "被突出的章节序号",
        "publicKey": "focusIndex",
        "publicLabel": "高亮第几章",
        "description": "被突出的章节序号"
      },
      {
        "key": "showColumnHeaders",
        "label": "装饰列头",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏列表的列头标签（装饰文案，仅列表布局）",
        "publicKey": "showColumnHeaders",
        "publicLabel": "装饰列头",
        "description": "显示/隐藏列表的列头标签（装饰文案，仅列表布局）"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#c8f135",
        "options": [
          "#c8f135",
          "#ff5a3c",
          "#3ca0ff",
          "#ffd23c"
        ],
        "desc": "主强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "主强调色"
      }
    ],
    "defaultProps": {
      "eyebrowId": "03",
      "eyebrowLabel": "STRUCTURE",
      "title": "报告结构",
      "subhead": "从方法到结论的阅读路径",
      "closing": "先建立框架，再进入数据和判断。",
      "items": [
        {
          "name": "研究方法",
          "en": "Methodology",
          "scope": "横纵分析法 · 数据口径"
        },
        {
          "name": "市场全景",
          "en": "Market Panorama",
          "scope": "融资规模 · 季度节奏"
        },
        {
          "name": "横向透视",
          "en": "Cross-Section",
          "scope": "赛道 · 轮次 · 地区"
        },
        {
          "name": "产业链分层",
          "en": "Value Chain",
          "scope": "上游 · 中游 · 下游"
        },
        {
          "name": "典型案例",
          "en": "Case Studies",
          "scope": "模型 · 生态 · 算力"
        },
        {
          "name": "风险研判",
          "en": "Risk & Outlook",
          "scope": "估值 · 监管 · 兑现"
        },
        {
          "name": "结论判断",
          "en": "Conclusion",
          "scope": "投资策略 · 数据来源"
        }
      ],
      "cardCount": 7,
      "focusEnabled": true,
      "focusIndex": 1,
      "layout": "rows",
      "showColumnHeaders": true,
      "accent": "#c8f135"
    }
  },
  {
    "key": "theme06_page008",
    "themeKey": "theme06",
    "pageNumber": 8,
    "layout": "THEME06-008",
    "slot": "method",
    "label": "04 · 研究方法 / METHODOLOGY",
    "bgClass": "",
    "controls": [
      {
        "key": "cardCount",
        "label": "方法卡数量",
        "type": "number",
        "default": 3,
        "min": 2,
        "max": 3,
        "desc": "方法层级的数量",
        "publicKey": "cardCount",
        "publicLabel": "方法卡数量",
        "description": "方法层级的数量"
      },
      {
        "key": "stackStyle",
        "label": "卡片样式",
        "type": "select",
        "default": "stack",
        "options": [
          [
            "stack",
            "堆叠"
          ],
          [
            "list",
            "列表"
          ]
        ],
        "desc": "左侧方法卡的排布形式",
        "publicKey": "stackStyle",
        "publicLabel": "卡片样式",
        "description": "左侧方法卡的排布形式"
      },
      {
        "key": "focusEnabled",
        "label": "重点层高亮",
        "type": "toggle",
        "default": true,
        "desc": "是否突出某一方法层",
        "publicKey": "focusEnabled",
        "publicLabel": "重点层高亮",
        "description": "是否突出某一方法层"
      },
      {
        "key": "focusIndex",
        "label": "高亮第几层",
        "type": "number",
        "default": 2,
        "min": 0,
        "max": 2,
        "desc": "被突出的方法层序号",
        "publicKey": "focusIndex",
        "publicLabel": "高亮第几层",
        "description": "被突出的方法层序号"
      },
      {
        "key": "showDecor",
        "label": "装饰编号",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏卡片上的大号标记与轴线编号（装饰文案）",
        "publicKey": "showDecor",
        "publicLabel": "装饰编号",
        "description": "显示/隐藏卡片上的大号标记与轴线编号（装饰文案）"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#c8f135",
        "options": [
          "#c8f135",
          "#ff5a3c",
          "#3ca0ff",
          "#ffd23c"
        ],
        "desc": "主强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "主强调色"
      }
    ],
    "defaultProps": {
      "eyebrowId": "04",
      "eyebrowLabel": "METHODOLOGY",
      "title": "研究方法",
      "subhead": "横纵分析法",
      "goal": "目标：把融资数据变成 <b>结构化判断</b>",
      "closing": "不是罗列融资新闻，而是看清资本流向。",
      "layers": [
        {
          "name": "横向",
          "en": "HORIZONTAL",
          "axis": "空间对比",
          "desc": "同一时间截面下，对比公司、赛道、轮次与地区——回答「钱流向哪里」。"
        },
        {
          "name": "纵向",
          "en": "VERTICAL",
          "axis": "时间演化",
          "desc": "沿时间轴观察融资额、事件数与市场节奏的变化——回答「热度如何变化」。"
        },
        {
          "name": "交叉",
          "en": "CROSS",
          "axis": "产业分层",
          "desc": "横纵交叉叠加产业链分层，判断哪些方向能够真正兑现。"
        }
      ],
      "cardCount": 3,
      "focusEnabled": true,
      "focusIndex": 2,
      "stackStyle": "stack",
      "showDecor": true,
      "accent": "#c8f135"
    }
  },
  {
    "key": "theme06_page009",
    "themeKey": "theme06",
    "pageNumber": 9,
    "layout": "THEME06-009",
    "slot": "trend",
    "label": "05 · 市场全景 / TREND",
    "bgClass": "",
    "controls": [
      {
        "key": "chartType",
        "label": "图表类型",
        "type": "select",
        "default": "area",
        "options": [
          [
            "area",
            "面积"
          ],
          [
            "bars",
            "柱状"
          ],
          [
            "line",
            "折线"
          ]
        ],
        "desc": "主视觉图表的呈现形式",
        "publicKey": "chartType",
        "publicLabel": "图表类型",
        "description": "主视觉图表的呈现形式"
      },
      {
        "key": "metricCount",
        "label": "指标卡数量",
        "type": "number",
        "default": 4,
        "min": 2,
        "max": 6,
        "desc": "底部数据卡的数量（按数据点截取）",
        "publicKey": "metricCount",
        "publicLabel": "指标卡数量",
        "description": "底部数据卡的数量（按数据点截取）"
      },
      {
        "key": "focusEnabled",
        "label": "峰值高亮",
        "type": "toggle",
        "default": true,
        "desc": "是否高亮某个数据点（峰值）",
        "publicKey": "focusEnabled",
        "publicLabel": "峰值高亮",
        "description": "是否高亮某个数据点（峰值）"
      },
      {
        "key": "focusIndex",
        "label": "高亮第几个",
        "type": "number",
        "default": 2,
        "min": 0,
        "max": 5,
        "desc": "被高亮的数据点序号",
        "publicKey": "focusIndex",
        "publicLabel": "高亮第几个",
        "description": "被高亮的数据点序号"
      },
      {
        "key": "showDecor",
        "label": "装饰网格 / 峰值标",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏基准网格线与峰值标记（装饰）",
        "publicKey": "showDecor",
        "publicLabel": "装饰网格 / 峰值标",
        "description": "显示/隐藏基准网格线与峰值标记（装饰）"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#c8f135",
        "options": [
          "#c8f135",
          "#ff5a3c",
          "#3ca0ff",
          "#ffd23c"
        ],
        "desc": "主强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "主强调色"
      }
    ],
    "defaultProps": {
      "eyebrowId": "05",
      "eyebrowLabel": "MARKET PANORAMA",
      "year": "2024",
      "title": "市场全景 · 纵向趋势",
      "subhead": "逐季度融资额走势 / $B",
      "closing": "高峰过后不是崩塌，而是市场开始筛选。",
      "unit": "",
      "series": [
        {
          "label": "Q1",
          "value": 162,
          "sub": "18 笔"
        },
        {
          "label": "Q2",
          "value": 284,
          "sub": "26 笔"
        },
        {
          "label": "Q3",
          "value": 318,
          "sub": "31 笔"
        },
        {
          "label": "Q4",
          "value": 206,
          "sub": "22 笔"
        }
      ],
      "metricCount": 4,
      "focusEnabled": true,
      "focusIndex": 2,
      "chartType": "area",
      "showDecor": true,
      "accent": "#c8f135"
    }
  },
  {
    "key": "theme06_page010",
    "themeKey": "theme06",
    "pageNumber": 10,
    "layout": "THEME06-010",
    "slot": "chapter",
    "label": "06 · 市场数据深拆 / CHAPTER",
    "bgClass": "",
    "controls": [
      {
        "key": "background",
        "label": "背景形态",
        "type": "select",
        "default": "glow",
        "options": [
          [
            "glow",
            "光晕"
          ],
          [
            "solid",
            "纯色"
          ],
          [
            "panel",
            "色块"
          ]
        ],
        "desc": "分隔页背景的呈现形式",
        "publicKey": "background",
        "publicLabel": "背景形态",
        "description": "分隔页背景的呈现形式"
      },
      {
        "key": "showIndex",
        "label": "大号章节号",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏超大章节编号",
        "publicKey": "showIndex",
        "publicLabel": "大号章节号",
        "description": "显示/隐藏超大章节编号"
      },
      {
        "key": "keywordCount",
        "label": "关键词数量",
        "type": "number",
        "default": 4,
        "min": 0,
        "max": 6,
        "desc": "底部关键词标签数量（0 隐藏）",
        "publicKey": "keywordCount",
        "publicLabel": "关键词数量",
        "description": "底部关键词标签数量（0 隐藏）"
      },
      {
        "key": "focusEnabled",
        "label": "关键词高亮",
        "type": "toggle",
        "default": false,
        "desc": "是否高亮某个关键词标签",
        "publicKey": "focusEnabled",
        "publicLabel": "关键词高亮",
        "description": "是否高亮某个关键词标签"
      },
      {
        "key": "focusIndex",
        "label": "高亮第几个",
        "type": "number",
        "default": 0,
        "min": 0,
        "max": 5,
        "desc": "被高亮的关键词序号",
        "publicKey": "focusIndex",
        "publicLabel": "高亮第几个",
        "description": "被高亮的关键词序号"
      },
      {
        "key": "showWatermark",
        "label": "背景大字",
        "type": "toggle",
        "default": false,
        "desc": "显示/隐藏背景巨型水印字（装饰）",
        "publicKey": "showWatermark",
        "publicLabel": "背景大字",
        "description": "显示/隐藏背景巨型水印字（装饰）"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#c8f135",
        "options": [
          "#c8f135",
          "#ff5a3c",
          "#3ca0ff",
          "#ffd23c"
        ],
        "desc": "主强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "主强调色"
      }
    ],
    "defaultProps": {
      "eyebrowId": "CH",
      "eyebrowLabel": "CHAPTER 02",
      "chapterNo": "02",
      "title": "市场数据深拆",
      "subhead": "融资节奏 · 集中度 · 交易规模 / MARKET DATA DEEP-DIVE",
      "closing": "下一组页面进入更细的拆解。",
      "keywords": [
        "集中度",
        "季度节奏",
        "峰谷对比",
        "资金贡献"
      ],
      "watermark": "02",
      "showIndex": true,
      "keywordCount": 4,
      "focusEnabled": false,
      "focusIndex": 0,
      "background": "glow",
      "showWatermark": false,
      "accent": "#c8f135"
    }
  },
  {
    "key": "theme06_page011",
    "themeKey": "theme06",
    "pageNumber": 11,
    "layout": "THEME06-011",
    "slot": "dealmap",
    "label": "07 · 规模分层 / DEAL MAP",
    "bgClass": "",
    "controls": [
      {
        "key": "chartType",
        "label": "图表类型",
        "type": "select",
        "default": "bubbles",
        "options": [
          [
            "bubbles",
            "气泡"
          ],
          [
            "dots",
            "点阵"
          ],
          [
            "bars",
            "条形"
          ]
        ],
        "desc": "规模分层的可视化形式",
        "publicKey": "chartType",
        "publicLabel": "图表类型",
        "description": "规模分层的可视化形式"
      },
      {
        "key": "tierCount",
        "label": "分层数量",
        "type": "number",
        "default": 4,
        "min": 2,
        "max": 4,
        "desc": "展示的数值区间层数",
        "publicKey": "tierCount",
        "publicLabel": "分层数量",
        "description": "展示的数值区间层数"
      },
      {
        "key": "focusEnabled",
        "label": "重点分层高亮",
        "type": "toggle",
        "default": true,
        "desc": "是否突出某一数值区间",
        "publicKey": "focusEnabled",
        "publicLabel": "重点分层高亮",
        "description": "是否突出某一数值区间"
      },
      {
        "key": "focusIndex",
        "label": "高亮第几层",
        "type": "number",
        "default": 3,
        "min": 0,
        "max": 3,
        "desc": "被突出的区间序号（默认巨额交易层）",
        "publicKey": "focusIndex",
        "publicLabel": "高亮第几层",
        "description": "被突出的区间序号（默认巨额交易层）"
      },
      {
        "key": "showValueLabels",
        "label": "数值标签",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏每层的笔数与数值标签（装饰数据）",
        "publicKey": "showValueLabels",
        "publicLabel": "数值标签",
        "description": "显示/隐藏每层的笔数与数值标签（装饰数据）"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#c8f135",
        "options": [
          "#c8f135",
          "#ff5a3c",
          "#3ca0ff",
          "#ffd23c"
        ],
        "desc": "主强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "主强调色"
      }
    ],
    "defaultProps": {
      "eyebrowId": "16",
      "eyebrowLabel": "DEAL MAP",
      "title": "融资事件规模分层",
      "subhead": "大额融资事件地图 / 金额 $B",
      "closing": "影响最大的往往是少数巨额交易。",
      "unit": "亿",
      "tiers": [
        {
          "range": "1–2亿",
          "en": "1–2 · 41 DEALS",
          "count": 41,
          "amount": 58
        },
        {
          "range": "2–5亿",
          "en": "2–5 · 29 DEALS",
          "count": 29,
          "amount": 91
        },
        {
          "range": "5–10亿",
          "en": "5–10 · 15 DEALS",
          "count": 15,
          "amount": 103
        },
        {
          "range": "10亿+",
          "en": "10+ · MEGA",
          "count": 12,
          "amount": 718
        }
      ],
      "chartType": "bubbles",
      "tierCount": 4,
      "focusEnabled": true,
      "focusIndex": 3,
      "showValueLabels": true,
      "accent": "#c8f135"
    }
  },
  {
    "key": "theme06_page012",
    "themeKey": "theme06",
    "pageNumber": 12,
    "layout": "THEME06-012",
    "slot": "q1",
    "label": "08 · 冷启动季度 / Q1 BREAKDOWN",
    "bgClass": "",
    "controls": [
      {
        "key": "layout",
        "label": "指标呈现",
        "type": "select",
        "default": "chart",
        "options": [
          [
            "chart",
            "图表卡"
          ],
          [
            "table",
            "表格"
          ]
        ],
        "desc": "右侧指标的呈现形式",
        "publicKey": "layout",
        "publicLabel": "指标呈现",
        "description": "右侧指标的呈现形式"
      },
      {
        "key": "metricCount",
        "label": "指标数量",
        "type": "number",
        "default": 3,
        "min": 2,
        "max": 4,
        "desc": "辅助指标的数量",
        "publicKey": "metricCount",
        "publicLabel": "指标数量",
        "description": "辅助指标的数量"
      },
      {
        "key": "showTrend",
        "label": "全年对照图",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏底部同侪期对照迷你图",
        "publicKey": "showTrend",
        "publicLabel": "全年对照图",
        "description": "显示/隐藏底部同侪期对照迷你图"
      },
      {
        "key": "showDelta",
        "label": "环比标签",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏环比变化标签（装饰数据）",
        "publicKey": "showDelta",
        "publicLabel": "环比标签",
        "description": "显示/隐藏环比变化标签（装饰数据）"
      },
      {
        "key": "focusEnabled",
        "label": "本期高亮",
        "type": "toggle",
        "default": true,
        "desc": "是否在对照图中高亮本期",
        "publicKey": "focusEnabled",
        "publicLabel": "本期高亮",
        "description": "是否在对照图中高亮本期"
      },
      {
        "key": "focusIndex",
        "label": "高亮第几期",
        "type": "number",
        "default": 0,
        "min": 0,
        "max": 3,
        "desc": "被高亮的对照期序号",
        "publicKey": "focusIndex",
        "publicLabel": "高亮第几期",
        "description": "被高亮的对照期序号"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#c8f135",
        "options": [
          "#c8f135",
          "#ff5a3c",
          "#3ca0ff",
          "#ffd23c"
        ],
        "desc": "主强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "主强调色"
      }
    ],
    "defaultProps": {
      "eyebrowId": "17",
      "eyebrowLabel": "QUARTER BREAKDOWN",
      "title": "冷启动季度",
      "subhead": "Q1 融资拆解 / COLD START",
      "closing": "全年热度从保守启动开始。",
      "periodLabel": "Q1",
      "periodCaption": "全年起步阶段 / FIRST QUARTER",
      "hero": {
        "value": "162",
        "unit": "亿$",
        "label": "Q1 融资额 / FUNDING"
      },
      "delta": {
        "value": "—",
        "dir": "flat",
        "label": "环比 / QoQ"
      },
      "metrics": [
        {
          "k": "事件数 / DEALS",
          "v": "18 笔"
        },
        {
          "k": "平均单笔 / AVG",
          "v": "9.0 亿"
        },
        {
          "k": "最大单笔 / MAX",
          "v": "32 亿"
        }
      ],
      "context": [
        {
          "label": "Q1",
          "value": 162
        },
        {
          "label": "Q2",
          "value": 284
        },
        {
          "label": "Q3",
          "value": 318
        },
        {
          "label": "Q4",
          "value": 206
        }
      ],
      "layout": "chart",
      "metricCount": 3,
      "showTrend": true,
      "showDelta": true,
      "focusEnabled": true,
      "focusIndex": 0,
      "accent": "#c8f135"
    }
  },
  {
    "key": "theme06_page013",
    "themeKey": "theme06",
    "pageNumber": 13,
    "layout": "THEME06-013",
    "slot": "q2",
    "label": "09 · 加速季度 / Q2 BREAKDOWN",
    "bgClass": "",
    "controls": [
      {
        "key": "layout",
        "label": "指标呈现",
        "type": "select",
        "default": "chart",
        "options": [
          [
            "chart",
            "图表卡"
          ],
          [
            "table",
            "表格"
          ]
        ],
        "desc": "右侧指标的呈现形式",
        "publicKey": "layout",
        "publicLabel": "指标呈现",
        "description": "右侧指标的呈现形式"
      },
      {
        "key": "metricCount",
        "label": "指标数量",
        "type": "number",
        "default": 3,
        "min": 2,
        "max": 4,
        "desc": "辅助指标的数量",
        "publicKey": "metricCount",
        "publicLabel": "指标数量",
        "description": "辅助指标的数量"
      },
      {
        "key": "showTrend",
        "label": "全年对照图",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏底部同侪期对照迷你图",
        "publicKey": "showTrend",
        "publicLabel": "全年对照图",
        "description": "显示/隐藏底部同侪期对照迷你图"
      },
      {
        "key": "showDelta",
        "label": "环比标签",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏环比变化标签（装饰数据）",
        "publicKey": "showDelta",
        "publicLabel": "环比标签",
        "description": "显示/隐藏环比变化标签（装饰数据）"
      },
      {
        "key": "focusEnabled",
        "label": "本期高亮",
        "type": "toggle",
        "default": true,
        "desc": "是否在对照图中高亮本期",
        "publicKey": "focusEnabled",
        "publicLabel": "本期高亮",
        "description": "是否在对照图中高亮本期"
      },
      {
        "key": "focusIndex",
        "label": "高亮第几期",
        "type": "number",
        "default": 0,
        "min": 0,
        "max": 3,
        "desc": "被高亮的对照期序号",
        "publicKey": "focusIndex",
        "publicLabel": "高亮第几期",
        "description": "被高亮的对照期序号"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#c8f135",
        "options": [
          "#c8f135",
          "#ff5a3c",
          "#3ca0ff",
          "#ffd23c"
        ],
        "desc": "主强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "主强调色"
      }
    ],
    "defaultProps": {
      "eyebrowId": "18",
      "eyebrowLabel": "QUARTER BREAKDOWN",
      "title": "加速季度",
      "subhead": "Q2 融资拆解 / ACCELERATION",
      "closing": "Q2 是融资窗口打开的关键节点。",
      "periodLabel": "Q2",
      "periodCaption": "融资窗口打开 / SECOND QUARTER",
      "hero": {
        "value": "284",
        "unit": "亿$",
        "label": "Q2 融资额 / FUNDING"
      },
      "delta": {
        "value": "+75.3%",
        "dir": "up",
        "label": "环比 / QoQ"
      },
      "metrics": [
        {
          "k": "事件数 / DEALS",
          "v": "26 笔"
        },
        {
          "k": "平均单笔 / AVG",
          "v": "10.9 亿"
        },
        {
          "k": "环比增长 / QoQ",
          "v": "+75.3%"
        }
      ],
      "context": [
        {
          "label": "Q1",
          "value": 162
        },
        {
          "label": "Q2",
          "value": 284
        },
        {
          "label": "Q3",
          "value": 318
        },
        {
          "label": "Q4",
          "value": 206
        }
      ],
      "layout": "table",
      "metricCount": 3,
      "showTrend": true,
      "showDelta": true,
      "focusEnabled": true,
      "focusIndex": 1,
      "accent": "#c8f135"
    }
  },
  {
    "key": "theme06_page014",
    "themeKey": "theme06",
    "pageNumber": 14,
    "layout": "THEME06-014",
    "slot": "q3",
    "label": "10 · 峰值季度 / Q3 PEAK",
    "bgClass": "",
    "controls": [
      {
        "key": "mediaSlotCount",
        "label": "图片槽数量",
        "type": "number",
        "default": 1,
        "min": 0,
        "max": 2,
        "desc": "右侧自适应图片槽数量（0 改为峰值曲线面板；上传后按图片比例自适应，构图随数量重排）",
        "publicKey": "mediaSlotCount",
        "publicLabel": "图片槽数量",
        "description": "右侧自适应图片槽数量（0 改为峰值曲线面板；上传后按图片比例自适应，构图随数量重排）"
      },
      {
        "key": "metricCount",
        "label": "指标数量",
        "type": "number",
        "default": 3,
        "min": 2,
        "max": 3,
        "desc": "辅助指标的数量",
        "publicKey": "metricCount",
        "publicLabel": "指标数量",
        "description": "辅助指标的数量"
      },
      {
        "key": "focusEnabled",
        "label": "重点指标高亮",
        "type": "toggle",
        "default": true,
        "desc": "是否突出某一指标",
        "publicKey": "focusEnabled",
        "publicLabel": "重点指标高亮",
        "description": "是否突出某一指标"
      },
      {
        "key": "focusIndex",
        "label": "高亮第几个",
        "type": "number",
        "default": 2,
        "min": 0,
        "max": 2,
        "desc": "被突出的指标序号",
        "publicKey": "focusIndex",
        "publicLabel": "高亮第几个",
        "description": "被突出的指标序号"
      },
      {
        "key": "showPeakBadge",
        "label": "峰值徽标",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏左上角峰值徽标（装饰）",
        "publicKey": "showPeakBadge",
        "publicLabel": "峰值徽标",
        "description": "显示/隐藏左上角峰值徽标（装饰）"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#c8f135",
        "options": [
          "#c8f135",
          "#ff5a3c",
          "#3ca0ff",
          "#ffd23c"
        ],
        "desc": "主强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "主强调色"
      }
    ],
    "defaultProps": {
      "eyebrowId": "19",
      "eyebrowLabel": "QUARTER BREAKDOWN",
      "title": "全年峰值季度",
      "subhead": "Q3 融资拆解 / PEAK QUARTER",
      "closing": "高峰之后，市场开始从热度转向筛选。",
      "periodLabel": "Q3",
      "periodCaption": "市场情绪高点 / THIRD QUARTER",
      "peakTag": "全年峰值 / PEAK",
      "hero": {
        "value": "318",
        "unit": "亿$",
        "label": "Q3 融资额 / FUNDING"
      },
      "metrics": [
        {
          "k": "事件数 / DEALS",
          "v": "31 笔"
        },
        {
          "k": "平均单笔 / AVG",
          "v": "10.3 亿"
        },
        {
          "k": "峰值月份 / PEAK",
          "v": "8 月"
        }
      ],
      "mediaSlotCount": 1,
      "metricCount": 3,
      "focusEnabled": true,
      "focusIndex": 2,
      "showPeakBadge": true,
      "accent": "#c8f135"
    }
  },
  {
    "key": "theme06_page015",
    "themeKey": "theme06",
    "pageNumber": 15,
    "layout": "THEME06-015",
    "slot": "q4",
    "label": "11 · 回落季度 / Q4 PULLBACK",
    "bgClass": "",
    "controls": [
      {
        "key": "nodeCount",
        "label": "阶段节点数",
        "type": "number",
        "default": 4,
        "min": 2,
        "max": 4,
        "desc": "横向阶段轴上的节点数量",
        "publicKey": "nodeCount",
        "publicLabel": "阶段节点数",
        "description": "横向阶段轴上的节点数量"
      },
      {
        "key": "metricCount",
        "label": "指标数量",
        "type": "number",
        "default": 2,
        "min": 1,
        "max": 2,
        "desc": "左侧辅助指标数量",
        "publicKey": "metricCount",
        "publicLabel": "指标数量",
        "description": "左侧辅助指标数量"
      },
      {
        "key": "showTrack",
        "label": "阶段数值条",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏每个节点的数值条与连接轴",
        "publicKey": "showGuide",
        "publicLabel": "阶段数值条",
        "description": "显示/隐藏每个节点的数值条与连接轴"
      },
      {
        "key": "showDelta",
        "label": "变化标签",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏方向变化标签（装饰数据）",
        "publicKey": "showDelta",
        "publicLabel": "变化标签",
        "description": "显示/隐藏方向变化标签（装饰数据）"
      },
      {
        "key": "focusEnabled",
        "label": "本期高亮",
        "type": "toggle",
        "default": true,
        "desc": "是否在阶段轴中高亮本期",
        "publicKey": "focusEnabled",
        "publicLabel": "本期高亮",
        "description": "是否在阶段轴中高亮本期"
      },
      {
        "key": "focusIndex",
        "label": "高亮第几阶段",
        "type": "number",
        "default": 3,
        "min": 0,
        "max": 3,
        "desc": "被高亮的节点序号",
        "publicKey": "focusIndex",
        "publicLabel": "高亮第几阶段",
        "description": "被高亮的节点序号"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#c8f135",
        "options": [
          "#c8f135",
          "#ff5a3c",
          "#3ca0ff",
          "#ffd23c"
        ],
        "desc": "主强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "主强调色"
      }
    ],
    "defaultProps": {
      "eyebrowId": "20",
      "eyebrowLabel": "QUARTER BREAKDOWN",
      "title": "理性回落季度",
      "subhead": "Q4 融资拆解 / RATIONAL PULLBACK",
      "closing": "回落不是终点，而是分化的开始。",
      "periodLabel": "Q4",
      "periodCaption": "资金挑选确定性 / FOURTH QUARTER",
      "hero": {
        "value": "206",
        "unit": "亿$",
        "label": "Q4 融资额 / FUNDING"
      },
      "delta": {
        "value": "−35.2%",
        "dir": "down",
        "label": "较 Q3 / vs Q3"
      },
      "metrics": [
        {
          "k": "事件数 / DEALS",
          "v": "22 笔"
        },
        {
          "k": "平均单笔 / AVG",
          "v": "9.4 亿"
        }
      ],
      "nodes": [
        {
          "when": "Q1",
          "value": 162,
          "name": "冷启动 / COLD START",
          "note": "市场保守启动，资金谨慎。"
        },
        {
          "when": "Q2",
          "value": 284,
          "name": "加速 / ACCELERATION",
          "note": "融资窗口打开，节奏加快。"
        },
        {
          "when": "Q3",
          "value": 318,
          "name": "峰值 / PEAK",
          "note": "情绪高点，多赛道同时活跃。"
        },
        {
          "when": "Q4",
          "value": 206,
          "name": "回落 / PULLBACK",
          "note": "回落但仍高于年初，资金转向筛选。"
        }
      ],
      "nodeCount": 4,
      "metricCount": 2,
      "showDelta": true,
      "showTrack": true,
      "focusEnabled": true,
      "focusIndex": 3,
      "accent": "#c8f135"
    }
  },
  {
    "key": "theme06_page016",
    "themeKey": "theme06",
    "pageNumber": 16,
    "layout": "THEME06-016",
    "slot": "peaktrough",
    "label": "12 · 峰值与低位 / PEAK & TROUGH",
    "bgClass": "",
    "controls": [
      {
        "key": "chartType",
        "label": "图表类型",
        "type": "select",
        "default": "columns",
        "options": [
          [
            "columns",
            "柱状"
          ],
          [
            "lollipop",
            "棒棒糖"
          ],
          [
            "dots",
            "点阵"
          ]
        ],
        "desc": "峰谷对比的可视化形式",
        "publicKey": "chartType",
        "publicLabel": "图表类型",
        "description": "峰谷对比的可视化形式"
      },
      {
        "key": "pointCount",
        "label": "数据点数量",
        "type": "number",
        "default": 5,
        "min": 3,
        "max": 5,
        "desc": "展示的月份/数据点数量",
        "publicKey": "pointCount",
        "publicLabel": "数据点数量",
        "description": "展示的月份/数据点数量"
      },
      {
        "key": "markExtremes",
        "label": "标记峰谷",
        "type": "toggle",
        "default": true,
        "desc": "是否用不同颜色标记最高/最低点",
        "publicKey": "markExtremes",
        "publicLabel": "标记峰谷",
        "description": "是否用不同颜色标记最高/最低点"
      },
      {
        "key": "showValueLabels",
        "label": "数值标签",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏每个数据点的数值（装饰数据）",
        "publicKey": "showValueLabels",
        "publicLabel": "数值标签",
        "description": "显示/隐藏每个数据点的数值（装饰数据）"
      },
      {
        "key": "showBaseline",
        "label": "均值基准线",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏平均值基准线（装饰）",
        "publicKey": "showBaseline",
        "publicLabel": "均值基准线",
        "description": "显示/隐藏平均值基准线（装饰）"
      },
      {
        "key": "focusEnabled",
        "label": "重点点位高亮",
        "type": "toggle",
        "default": true,
        "desc": "是否用描边突出某一数据点",
        "publicKey": "focusEnabled",
        "publicLabel": "重点点位高亮",
        "description": "是否用描边突出某一数据点"
      },
      {
        "key": "focusIndex",
        "label": "高亮第几个",
        "type": "number",
        "default": 0,
        "min": 0,
        "max": 4,
        "desc": "被突出的数据点序号",
        "publicKey": "focusIndex",
        "publicLabel": "高亮第几个",
        "description": "被突出的数据点序号"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#c8f135",
        "options": [
          "#c8f135",
          "#ff5a3c",
          "#3ca0ff",
          "#ffd23c"
        ],
        "desc": "主强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "主强调色"
      }
    ],
    "defaultProps": {
      "eyebrowId": "21",
      "eyebrowLabel": "PEAK & TROUGH",
      "title": "峰值与低位",
      "subhead": "月度峰谷对比 / MONTHLY SPREAD",
      "closing": "月度波动背后是头部交易节奏。",
      "unit": "亿",
      "points": [
        {
          "label": "8月",
          "value": 118,
          "sub": "AUG · 峰值"
        },
        {
          "label": "9月",
          "value": 108,
          "sub": "SEP"
        },
        {
          "label": "5月",
          "value": 105,
          "sub": "MAY"
        },
        {
          "label": "12月",
          "value": 52,
          "sub": "DEC"
        },
        {
          "label": "1月",
          "value": 45,
          "sub": "JAN · 低位"
        }
      ],
      "spread": [
        {
          "k": "峰值月份 / PEAK",
          "v": "118 亿"
        },
        {
          "k": "低位月份 / TROUGH",
          "v": "45 亿"
        },
        {
          "k": "峰谷差 / GAP",
          "v": "73 亿"
        }
      ],
      "chartType": "columns",
      "pointCount": 5,
      "markExtremes": true,
      "showValueLabels": true,
      "showBaseline": true,
      "focusEnabled": true,
      "focusIndex": 0,
      "accent": "#c8f135"
    }
  },
  {
    "key": "theme06_page017",
    "themeKey": "theme06",
    "pageNumber": 17,
    "layout": "THEME06-017",
    "slot": "waterfall",
    "label": "13 · 赛道贡献 / WATERFALL",
    "bgClass": "",
    "controls": [
      {
        "key": "chartType",
        "label": "图表类型",
        "type": "select",
        "default": "waterfall",
        "options": [
          [
            "waterfall",
            "瀑布"
          ],
          [
            "stack",
            "堆叠条"
          ],
          [
            "bars",
            "条形"
          ]
        ],
        "desc": "贡献拆分的可视化形式",
        "publicKey": "chartType",
        "publicLabel": "图表类型",
        "description": "贡献拆分的可视化形式"
      },
      {
        "key": "segmentCount",
        "label": "分类数量",
        "type": "number",
        "default": 5,
        "min": 3,
        "max": 5,
        "desc": "展示的分类/贡献项数量",
        "publicKey": "categoryCount",
        "publicLabel": "分类数量",
        "description": "展示的分类/贡献项数量"
      },
      {
        "key": "showTotal",
        "label": "合计柱",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏累计合计柱（仅瀑布有效）",
        "publicKey": "showTotal",
        "publicLabel": "合计柱",
        "description": "显示/隐藏累计合计柱（仅瀑布有效）"
      },
      {
        "key": "showConnectors",
        "label": "阶梯连接线",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏瀑布阶梯连接线（装饰，仅瀑布有效）",
        "publicKey": "showConnectors",
        "publicLabel": "阶梯连接线",
        "description": "显示/隐藏瀑布阶梯连接线（装饰，仅瀑布有效）"
      },
      {
        "key": "showValueLabels",
        "label": "数值标签",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏每项数值（装饰数据）",
        "publicKey": "showValueLabels",
        "publicLabel": "数值标签",
        "description": "显示/隐藏每项数值（装饰数据）"
      },
      {
        "key": "focusEnabled",
        "label": "重点分类高亮",
        "type": "toggle",
        "default": true,
        "desc": "是否突出某一分类",
        "publicKey": "focusEnabled",
        "publicLabel": "重点分类高亮",
        "description": "是否突出某一分类"
      },
      {
        "key": "focusIndex",
        "label": "高亮第几个",
        "type": "number",
        "default": 0,
        "min": 0,
        "max": 4,
        "desc": "被突出的分类序号",
        "publicKey": "focusIndex",
        "publicLabel": "高亮第几个",
        "description": "被突出的分类序号"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#c8f135",
        "options": [
          "#c8f135",
          "#ff5a3c",
          "#3ca0ff",
          "#ffd23c"
        ],
        "desc": "主强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "主强调色"
      }
    ],
    "defaultProps": {
      "eyebrowId": "22",
      "eyebrowLabel": "FUNDING WATERFALL",
      "title": "赛道贡献拆分",
      "subhead": "融资额贡献瀑布 / CONTRIBUTION",
      "unit": "亿",
      "closing": "大模型制造热度，基础设施和应用承接兑现。",
      "totalLabel": "全年合计",
      "segments": [
        {
          "name": "通用大模型",
          "en": "FOUNDATION MODELS",
          "value": 420
        },
        {
          "name": "垂直应用",
          "en": "VERTICAL APPS",
          "value": 245
        },
        {
          "name": "基础设施",
          "en": "INFRASTRUCTURE",
          "value": 158
        },
        {
          "name": "AI 芯片",
          "en": "AI CHIPS",
          "value": 97
        },
        {
          "name": "其他",
          "en": "OTHERS",
          "value": 50
        }
      ],
      "chartType": "waterfall",
      "segmentCount": 5,
      "showTotal": true,
      "showValueLabels": true,
      "showConnectors": true,
      "focusEnabled": true,
      "focusIndex": 0,
      "accent": "#c8f135"
    }
  },
  {
    "key": "theme06_page018",
    "themeKey": "theme06",
    "pageNumber": 18,
    "layout": "THEME06-018",
    "slot": "sizesplit",
    "label": "14 · 金额区间结构 / SIZE SPLIT",
    "bgClass": "",
    "controls": [
      {
        "key": "chartType",
        "label": "图表类型",
        "type": "select",
        "default": "diverging",
        "options": [
          [
            "diverging",
            "双向对比"
          ],
          [
            "grouped",
            "分组柱"
          ],
          [
            "stacked",
            "百分比堆叠"
          ]
        ],
        "desc": "数量×数值双维度的可视化形式",
        "publicKey": "chartType",
        "publicLabel": "图表类型",
        "description": "数量×数值双维度的可视化形式"
      },
      {
        "key": "tierCount",
        "label": "区间数量",
        "type": "number",
        "default": 4,
        "min": 2,
        "max": 4,
        "desc": "展示的数值区间层数",
        "publicKey": "tierCount",
        "publicLabel": "区间数量",
        "description": "展示的数值区间层数"
      },
      {
        "key": "focusEnabled",
        "label": "重点区间高亮",
        "type": "toggle",
        "default": true,
        "desc": "是否突出某一数值区间",
        "publicKey": "focusEnabled",
        "publicLabel": "重点区间高亮",
        "description": "是否突出某一数值区间"
      },
      {
        "key": "focusIndex",
        "label": "高亮第几层",
        "type": "number",
        "default": 3,
        "min": 0,
        "max": 3,
        "desc": "被突出的区间序号（默认巨额交易层）",
        "publicKey": "focusIndex",
        "publicLabel": "高亮第几层",
        "description": "被突出的区间序号（默认巨额交易层）"
      },
      {
        "key": "showValueLabels",
        "label": "数值标签",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏笔数与数值标签（装饰数据）",
        "publicKey": "showValueLabels",
        "publicLabel": "数值标签",
        "description": "显示/隐藏笔数与数值标签（装饰数据）"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#c8f135",
        "options": [
          "#c8f135",
          "#ff5a3c",
          "#3ca0ff",
          "#ffd23c"
        ],
        "desc": "主强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "主强调色"
      }
    ],
    "defaultProps": {
      "eyebrowId": "23",
      "eyebrowLabel": "DEAL SIZE SPLIT",
      "title": "金额区间结构",
      "subhead": "交易规模分布 / SIZE DISTRIBUTION",
      "closing": "市场被少数超级交易重新定价。",
      "leftLabel": "笔数",
      "rightLabel": "金额",
      "unitLeft": " 笔",
      "unitRight": " 亿",
      "tiers": [
        {
          "range": "1–2亿",
          "en": "1–2B USD",
          "count": 41,
          "amount": 58
        },
        {
          "range": "2–5亿",
          "en": "2–5B USD",
          "count": 29,
          "amount": 91
        },
        {
          "range": "5–10亿",
          "en": "5–10B USD",
          "count": 15,
          "amount": 103
        },
        {
          "range": "10亿+",
          "en": "10B+ MEGA",
          "count": 12,
          "amount": 718
        }
      ],
      "chartType": "diverging",
      "tierCount": 4,
      "focusEnabled": true,
      "focusIndex": 3,
      "showValueLabels": true,
      "accent": "#c8f135"
    }
  },
  {
    "key": "theme06_page019",
    "themeKey": "theme06",
    "pageNumber": 19,
    "layout": "THEME06-019",
    "slot": "avgticket",
    "label": "15 · 赛道平均融资额 / AVG TICKET",
    "bgClass": "",
    "controls": [
      {
        "key": "metricCount",
        "label": "辅助指标数量",
        "type": "number",
        "default": 3,
        "min": 0,
        "max": 3,
        "desc": "大数字下方的辅助指标数量（0 隐藏）",
        "publicKey": "metricCount",
        "publicLabel": "辅助指标数量",
        "description": "大数字下方的辅助指标数量（0 隐藏）"
      },
      {
        "key": "align",
        "label": "对齐方式",
        "type": "select",
        "default": "left",
        "options": [
          [
            "left",
            "左对齐"
          ],
          [
            "center",
            "居中"
          ]
        ],
        "desc": "主数字区域的对齐方式",
        "publicKey": "align",
        "publicLabel": "对齐方式",
        "description": "主数字区域的对齐方式"
      },
      {
        "key": "showWatermark",
        "label": "背景大字",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏背景水印字（装饰）",
        "publicKey": "showWatermark",
        "publicLabel": "背景大字",
        "description": "显示/隐藏背景水印字（装饰）"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#c8f135",
        "options": [
          "#c8f135",
          "#ff5a3c",
          "#3ca0ff",
          "#ffd23c"
        ],
        "desc": "主强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "主强调色"
      }
    ],
    "defaultProps": {
      "eyebrowId": "24",
      "eyebrowLabel": "AVERAGE TICKET",
      "kicker": "把全年融资换算成单笔，才能看清资本的下注密度。",
      "figure": "$1.0",
      "unit": "B",
      "explain": "全年大额融资的 <b>平均单笔规模</b>——但垂直应用不应只用融资规模评价，更要看收入效率。",
      "closing": "融资规模越大，后续兑现压力越高。",
      "watermark": "TICKET",
      "metrics": [
        {
          "k": "全年融资 / TOTAL",
          "v": "$97B"
        },
        {
          "k": "大额事件 / DEALS",
          "v": "97 笔"
        },
        {
          "k": "最大单笔 / MAX",
          "v": "$50B"
        }
      ],
      "metricCount": 3,
      "align": "center",
      "showWatermark": true,
      "accent": "#c8f135"
    }
  },
  {
    "key": "theme06_page020",
    "themeKey": "theme06",
    "pageNumber": 20,
    "layout": "THEME06-020",
    "slot": "cumulative",
    "label": "16 · 累计资金分布 / CAPITAL CURVE",
    "bgClass": "",
    "controls": [
      {
        "key": "chartType",
        "label": "图表类型",
        "type": "select",
        "default": "area",
        "options": [
          [
            "area",
            "面积"
          ],
          [
            "line",
            "折线"
          ],
          [
            "steps",
            "阶梯"
          ]
        ],
        "desc": "累计曲线的可视化形式",
        "publicKey": "chartType",
        "publicLabel": "图表类型",
        "description": "累计曲线的可视化形式"
      },
      {
        "key": "stageCount",
        "label": "档位数量",
        "type": "number",
        "default": 4,
        "min": 2,
        "max": 4,
        "desc": "累计占比的档位数量",
        "publicKey": "stageCount",
        "publicLabel": "档位数量",
        "description": "累计占比的档位数量"
      },
      {
        "key": "showEquality",
        "label": "均衡参考线",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏均匀分布参考线（装饰，对比集中度）",
        "publicKey": "showEquality",
        "publicLabel": "均衡参考线",
        "description": "显示/隐藏均匀分布参考线（装饰，对比集中度）"
      },
      {
        "key": "showGrid",
        "label": "坐标网格",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏横向网格与刻度（装饰）",
        "publicKey": "showGrid",
        "publicLabel": "坐标网格",
        "description": "显示/隐藏横向网格与刻度（装饰）"
      },
      {
        "key": "showValueLabels",
        "label": "数值标签",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏各点占比标签（装饰数据）",
        "publicKey": "showValueLabels",
        "publicLabel": "数值标签",
        "description": "显示/隐藏各点占比标签（装饰数据）"
      },
      {
        "key": "focusEnabled",
        "label": "重点档位高亮",
        "type": "toggle",
        "default": true,
        "desc": "是否用竖向引导线突出某一档位",
        "publicKey": "focusEnabled",
        "publicLabel": "重点档位高亮",
        "description": "是否用竖向引导线突出某一档位"
      },
      {
        "key": "focusIndex",
        "label": "高亮第几档",
        "type": "number",
        "default": 3,
        "min": 0,
        "max": 3,
        "desc": "被突出的档位序号（默认末档）",
        "publicKey": "focusIndex",
        "publicLabel": "高亮第几档",
        "description": "被突出的档位序号（默认末档）"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#c8f135",
        "options": [
          "#c8f135",
          "#ff5a3c",
          "#3ca0ff",
          "#ffd23c"
        ],
        "desc": "主强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "主强调色"
      }
    ],
    "defaultProps": {
      "eyebrowId": "25",
      "eyebrowLabel": "CAPITAL CURVE",
      "title": "累计资金分布",
      "subhead": "资本集中曲线 / CONCENTRATION",
      "closing": "集中度本身就是市场结构。",
      "unit": "%",
      "hero": {
        "value": 71.2,
        "label": "累计占比 / CUMULATIVE"
      },
      "stages": [
        {
          "label": "Top 3",
          "en": "前 3 家",
          "value": 18.7
        },
        {
          "label": "Top 10",
          "en": "前 10 家",
          "value": 23.8
        },
        {
          "label": "Top 25",
          "en": "前 25 家",
          "value": 48.5
        },
        {
          "label": "Top 50",
          "en": "前 50 家",
          "value": 71.2
        }
      ],
      "chartType": "area",
      "stageCount": 4,
      "showEquality": true,
      "showGrid": true,
      "showValueLabels": true,
      "focusEnabled": true,
      "focusIndex": 3,
      "accent": "#c8f135"
    }
  },
  {
    "key": "theme06_page021",
    "themeKey": "theme06",
    "pageNumber": 21,
    "layout": "THEME06-021",
    "slot": "ch03",
    "label": "17 · 赛道结构细分 / CHAPTER 03",
    "bgClass": "",
    "controls": [
      {
        "key": "background",
        "label": "背景形态",
        "type": "select",
        "default": "glow",
        "options": [
          [
            "glow",
            "光晕"
          ],
          [
            "solid",
            "纯色"
          ],
          [
            "panel",
            "色块"
          ]
        ],
        "desc": "分隔页背景的呈现形式",
        "publicKey": "background",
        "publicLabel": "背景形态",
        "description": "分隔页背景的呈现形式"
      },
      {
        "key": "showIndex",
        "label": "大号章节号",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏超大章节编号",
        "publicKey": "showIndex",
        "publicLabel": "大号章节号",
        "description": "显示/隐藏超大章节编号"
      },
      {
        "key": "keywordCount",
        "label": "关键词数量",
        "type": "number",
        "default": 4,
        "min": 0,
        "max": 6,
        "desc": "底部关键词标签数量（0 隐藏）",
        "publicKey": "keywordCount",
        "publicLabel": "关键词数量",
        "description": "底部关键词标签数量（0 隐藏）"
      },
      {
        "key": "focusEnabled",
        "label": "关键词高亮",
        "type": "toggle",
        "default": false,
        "desc": "是否高亮某个关键词标签",
        "publicKey": "focusEnabled",
        "publicLabel": "关键词高亮",
        "description": "是否高亮某个关键词标签"
      },
      {
        "key": "focusIndex",
        "label": "高亮第几个",
        "type": "number",
        "default": 0,
        "min": 0,
        "max": 5,
        "desc": "被高亮的关键词序号",
        "publicKey": "focusIndex",
        "publicLabel": "高亮第几个",
        "description": "被高亮的关键词序号"
      },
      {
        "key": "showWatermark",
        "label": "背景大字",
        "type": "toggle",
        "default": false,
        "desc": "显示/隐藏背景巨型水印字（装饰）",
        "publicKey": "showWatermark",
        "publicLabel": "背景大字",
        "description": "显示/隐藏背景巨型水印字（装饰）"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#c8f135",
        "options": [
          "#c8f135",
          "#ff5a3c",
          "#3ca0ff",
          "#ffd23c"
        ],
        "desc": "主强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "主强调色"
      }
    ],
    "defaultProps": {
      "eyebrowId": "CH",
      "eyebrowLabel": "CHAPTER 03",
      "chapterNo": "03",
      "title": "赛道结构细分",
      "subhead": "从大模型到垂直应用 / SECTOR BREAKDOWN",
      "closing": "下一组页面进入更细的赛道拆解。",
      "keywords": [
        "通用模型",
        "Agent",
        "企业搜索",
        "医疗",
        "金融",
        "开发者工具"
      ],
      "watermark": "03",
      "showIndex": true,
      "keywordCount": 6,
      "focusEnabled": false,
      "focusIndex": 0,
      "background": "glow",
      "showWatermark": false,
      "accent": "#c8f135"
    }
  },
  {
    "key": "theme06_page022",
    "themeKey": "theme06",
    "pageNumber": 22,
    "layout": "THEME06-022",
    "slot": "radar",
    "label": "18 · 模型实验室竞争 / MODEL LAB RACE",
    "bgClass": "",
    "controls": [
      {
        "key": "chartType",
        "label": "图表类型",
        "type": "select",
        "default": "radar",
        "options": [
          [
            "radar",
            "雷达"
          ],
          [
            "bars",
            "柱状"
          ],
          [
            "dots",
            "点阵"
          ]
        ],
        "desc": "多维能力的可视化形式",
        "publicKey": "chartType",
        "publicLabel": "图表类型",
        "description": "多维能力的可视化形式"
      },
      {
        "key": "axisCount",
        "label": "维度数量",
        "type": "number",
        "default": 4,
        "min": 3,
        "max": 6,
        "desc": "展示的能力维度数量",
        "publicKey": "axisCount",
        "publicLabel": "维度数量",
        "description": "展示的能力维度数量"
      },
      {
        "key": "showGrid",
        "label": "网格刻度",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏雷达环线或柱状基准（装饰）",
        "publicKey": "showGrid",
        "publicLabel": "网格刻度",
        "description": "显示/隐藏雷达环线或柱状基准（装饰）"
      },
      {
        "key": "showCompare",
        "label": "基准对照",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏参考基准多边形 / 基准线（装饰数据）",
        "publicKey": "showCompare",
        "publicLabel": "基准对照",
        "description": "显示/隐藏参考基准多边形 / 基准线（装饰数据）"
      },
      {
        "key": "showValueLabels",
        "label": "数值标签",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏各维度数值标签（装饰数据）",
        "publicKey": "showValueLabels",
        "publicLabel": "数值标签",
        "description": "显示/隐藏各维度数值标签（装饰数据）"
      },
      {
        "key": "focusEnabled",
        "label": "重点维度高亮",
        "type": "toggle",
        "default": true,
        "desc": "是否突出某一能力维度",
        "publicKey": "focusEnabled",
        "publicLabel": "重点维度高亮",
        "description": "是否突出某一能力维度"
      },
      {
        "key": "focusIndex",
        "label": "高亮第几维",
        "type": "number",
        "default": 0,
        "min": 0,
        "max": 5,
        "desc": "被突出的维度序号",
        "publicKey": "focusIndex",
        "publicLabel": "高亮第几维",
        "description": "被突出的维度序号"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#c8f135",
        "options": [
          "#c8f135",
          "#ff5a3c",
          "#3ca0ff",
          "#ffd23c"
        ],
        "desc": "主强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "主强调色"
      }
    ],
    "defaultProps": {
      "eyebrowId": "27",
      "eyebrowLabel": "MODEL LAB RACE",
      "title": "算力、数据、人才与渠道",
      "subhead": "模型实验室竞争 / RESOURCE EDGE",
      "closing": "模型能力只是入口，交付能力才是商业化。",
      "footRight": "同比变化 / YoY",
      "axes": [
        {
          "k": "算力预算 / COMPUTE",
          "en": "TRAINING BUDGET",
          "v": "+64%",
          "mag": 86,
          "base": 52
        },
        {
          "k": "企业 API 客户 / CLIENTS",
          "en": "ENTERPRISE API",
          "v": "+52%",
          "mag": 78,
          "base": 50
        },
        {
          "k": "研究团队 / TEAM",
          "en": "RESEARCH HEADCOUNT",
          "v": "+38%",
          "mag": 64,
          "base": 48
        },
        {
          "k": "推理成本 / COST",
          "en": "INFERENCE COST",
          "v": "-21%",
          "mag": 58,
          "base": 54
        }
      ],
      "chartType": "radar",
      "axisCount": 4,
      "showGrid": true,
      "showCompare": true,
      "showValueLabels": true,
      "focusEnabled": true,
      "focusIndex": 0,
      "accent": "#c8f135"
    }
  },
  {
    "key": "theme06_page023",
    "themeKey": "theme06",
    "pageNumber": 23,
    "layout": "THEME06-023",
    "slot": "agent",
    "label": "19 · 工作流自动化 / AI AGENTS",
    "bgClass": "",
    "controls": [
      {
        "key": "layout",
        "label": "布局形式",
        "type": "select",
        "default": "media",
        "options": [
          [
            "media",
            "图文"
          ],
          [
            "table",
            "表格"
          ]
        ],
        "desc": "右栏的呈现形式：图片主导 / 场景占比表",
        "publicKey": "layout",
        "publicLabel": "布局形式",
        "description": "右栏的呈现形式：图片主导 / 场景占比表"
      },
      {
        "key": "mediaSlotCount",
        "label": "图片槽数量",
        "type": "number",
        "default": 1,
        "min": 0,
        "max": 2,
        "desc": "右侧自适应图片槽数量（0 改为场景占比面板；上传后按图片比例自适应，构图随数量重排）",
        "publicKey": "mediaSlotCount",
        "publicLabel": "图片槽数量",
        "description": "右侧自适应图片槽数量（0 改为场景占比面板；上传后按图片比例自适应，构图随数量重排）"
      },
      {
        "key": "metricCount",
        "label": "指标数量",
        "type": "number",
        "default": 3,
        "min": 2,
        "max": 4,
        "desc": "左侧辅助指标卡数量",
        "publicKey": "metricCount",
        "publicLabel": "指标数量",
        "description": "左侧辅助指标卡数量"
      },
      {
        "key": "splitCount",
        "label": "场景档数",
        "type": "number",
        "default": 3,
        "min": 2,
        "max": 4,
        "desc": "场景占比行数（表格或 0 图片面板时生效）",
        "publicKey": "splitCount",
        "publicLabel": "场景档数",
        "description": "场景占比行数（表格或 0 图片面板时生效）"
      },
      {
        "key": "focusEnabled",
        "label": "重点指标高亮",
        "type": "toggle",
        "default": true,
        "desc": "是否突出某一指标卡",
        "publicKey": "focusEnabled",
        "publicLabel": "重点指标高亮",
        "description": "是否突出某一指标卡"
      },
      {
        "key": "focusIndex",
        "label": "高亮第几个",
        "type": "number",
        "default": 2,
        "min": 0,
        "max": 3,
        "desc": "被突出的指标序号",
        "publicKey": "focusIndex",
        "publicLabel": "高亮第几个",
        "description": "被突出的指标序号"
      },
      {
        "key": "showTagBadge",
        "label": "分类徽标",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏左上角分类徽标（装饰）",
        "publicKey": "showTagBadge",
        "publicLabel": "分类徽标",
        "description": "显示/隐藏左上角分类徽标（装饰）"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#c8f135",
        "options": [
          "#c8f135",
          "#ff5a3c",
          "#3ca0ff",
          "#ffd23c"
        ],
        "desc": "主强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "主强调色"
      }
    ],
    "defaultProps": {
      "eyebrowId": "28",
      "eyebrowLabel": "AI AGENTS",
      "title": "工作流自动化机会",
      "subhead": "AI Agent 赛道 / WORKFLOW AUTOMATION",
      "closing": "能进入工作流的 Agent 才有长期价值。",
      "segTag": "AI AGENT 赛道 / AGENTS",
      "hero": {
        "value": "72",
        "unit": "亿$",
        "label": "赛道融资额 / FUNDING"
      },
      "metrics": [
        {
          "k": "事件数 / DEALS",
          "v": "16 笔"
        },
        {
          "k": "平均单笔 / AVG",
          "v": "4.5 亿"
        },
        {
          "k": "ARR 中位数 / ARR",
          "v": "4200 万"
        }
      ],
      "splits": [
        {
          "name": "任务执行",
          "en": "TASK EXECUTION",
          "value": 44,
          "unit": "%"
        },
        {
          "name": "工作流编排",
          "en": "ORCHESTRATION",
          "value": 33,
          "unit": "%"
        },
        {
          "name": "系统集成",
          "en": "INTEGRATION",
          "value": 23,
          "unit": "%"
        }
      ],
      "mediaPlaceholder": "Agent 工作流示意 / DROP IMAGE",
      "layout": "media",
      "mediaSlotCount": 1,
      "metricCount": 3,
      "splitCount": 3,
      "focusEnabled": true,
      "focusIndex": 2,
      "showTagBadge": true,
      "accent": "#c8f135"
    }
  },
  {
    "key": "theme06_page024",
    "themeKey": "theme06",
    "pageNumber": 24,
    "layout": "THEME06-024",
    "slot": "search",
    "label": "20 · 知识入口 / ENTERPRISE SEARCH",
    "bgClass": "",
    "controls": [
      {
        "key": "layout",
        "label": "布局形式",
        "type": "select",
        "default": "media",
        "options": [
          [
            "media",
            "图文"
          ],
          [
            "table",
            "表格"
          ]
        ],
        "desc": "右栏的呈现形式：图片主导 / 场景占比表",
        "publicKey": "layout",
        "publicLabel": "布局形式",
        "description": "右栏的呈现形式：图片主导 / 场景占比表"
      },
      {
        "key": "mediaSlotCount",
        "label": "图片槽数量",
        "type": "number",
        "default": 1,
        "min": 0,
        "max": 2,
        "desc": "右侧自适应图片槽数量（0 改为场景占比面板；上传后按图片比例自适应，构图随数量重排）",
        "publicKey": "mediaSlotCount",
        "publicLabel": "图片槽数量",
        "description": "右侧自适应图片槽数量（0 改为场景占比面板；上传后按图片比例自适应，构图随数量重排）"
      },
      {
        "key": "metricCount",
        "label": "指标数量",
        "type": "number",
        "default": 3,
        "min": 2,
        "max": 4,
        "desc": "左侧辅助指标卡数量",
        "publicKey": "metricCount",
        "publicLabel": "指标数量",
        "description": "左侧辅助指标卡数量"
      },
      {
        "key": "splitCount",
        "label": "场景档数",
        "type": "number",
        "default": 3,
        "min": 2,
        "max": 4,
        "desc": "场景占比行数（表格或 0 图片面板时生效）",
        "publicKey": "splitCount",
        "publicLabel": "场景档数",
        "description": "场景占比行数（表格或 0 图片面板时生效）"
      },
      {
        "key": "focusEnabled",
        "label": "重点指标高亮",
        "type": "toggle",
        "default": true,
        "desc": "是否突出某一指标卡",
        "publicKey": "focusEnabled",
        "publicLabel": "重点指标高亮",
        "description": "是否突出某一指标卡"
      },
      {
        "key": "focusIndex",
        "label": "高亮第几个",
        "type": "number",
        "default": 2,
        "min": 0,
        "max": 3,
        "desc": "被突出的指标序号",
        "publicKey": "focusIndex",
        "publicLabel": "高亮第几个",
        "description": "被突出的指标序号"
      },
      {
        "key": "showTagBadge",
        "label": "分类徽标",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏左上角分类徽标（装饰）",
        "publicKey": "showTagBadge",
        "publicLabel": "分类徽标",
        "description": "显示/隐藏左上角分类徽标（装饰）"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#c8f135",
        "options": [
          "#c8f135",
          "#ff5a3c",
          "#3ca0ff",
          "#ffd23c"
        ],
        "desc": "主强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "主强调色"
      }
    ],
    "defaultProps": {
      "eyebrowId": "29",
      "eyebrowLabel": "ENTERPRISE SEARCH",
      "title": "知识入口机会",
      "subhead": "企业搜索赛道 / KNOWLEDGE ENTRY",
      "closing": "企业知识入口是 AI 应用的重要落地点。",
      "segTag": "企业搜索赛道 / SEARCH",
      "hero": {
        "value": "38",
        "unit": "亿$",
        "label": "赛道融资额 / FUNDING"
      },
      "metrics": [
        {
          "k": "事件数 / DEALS",
          "v": "9 笔"
        },
        {
          "k": "平均单笔 / AVG",
          "v": "4.2 亿"
        },
        {
          "k": "付费客户中位数 / CLIENTS",
          "v": "620 家"
        }
      ],
      "splits": [
        {
          "name": "内部知识库",
          "en": "KNOWLEDGE BASE",
          "value": 48,
          "unit": "%"
        },
        {
          "name": "客服支持",
          "en": "SUPPORT",
          "value": 29,
          "unit": "%"
        },
        {
          "name": "研发文档",
          "en": "DEV DOCS",
          "value": 23,
          "unit": "%"
        }
      ],
      "mediaPlaceholder": "知识库入口图 / DROP IMAGE",
      "layout": "media",
      "mediaSlotCount": 1,
      "metricCount": 3,
      "splitCount": 3,
      "focusEnabled": true,
      "focusIndex": 2,
      "showTagBadge": true,
      "accent": "#c8f135"
    }
  },
  {
    "key": "theme06_page025",
    "themeKey": "theme06",
    "pageNumber": 25,
    "layout": "THEME06-025",
    "slot": "legal",
    "label": "21 · 专业服务 / LEGAL AI",
    "bgClass": "",
    "controls": [
      {
        "key": "layout",
        "label": "布局形式",
        "type": "select",
        "default": "media",
        "options": [
          [
            "media",
            "图文"
          ],
          [
            "table",
            "表格"
          ]
        ],
        "desc": "右栏的呈现形式：图片主导 / 场景占比表",
        "publicKey": "layout",
        "publicLabel": "布局形式",
        "description": "右栏的呈现形式：图片主导 / 场景占比表"
      },
      {
        "key": "mediaSlotCount",
        "label": "图片槽数量",
        "type": "number",
        "default": 1,
        "min": 0,
        "max": 2,
        "desc": "右侧自适应图片槽数量（0 改为场景占比面板；上传后按图片比例自适应，构图随数量重排）",
        "publicKey": "mediaSlotCount",
        "publicLabel": "图片槽数量",
        "description": "右侧自适应图片槽数量（0 改为场景占比面板；上传后按图片比例自适应，构图随数量重排）"
      },
      {
        "key": "metricCount",
        "label": "指标数量",
        "type": "number",
        "default": 3,
        "min": 2,
        "max": 4,
        "desc": "左侧辅助指标卡数量",
        "publicKey": "metricCount",
        "publicLabel": "指标数量",
        "description": "左侧辅助指标卡数量"
      },
      {
        "key": "splitCount",
        "label": "场景档数",
        "type": "number",
        "default": 3,
        "min": 2,
        "max": 4,
        "desc": "场景占比行数（表格或 0 图片面板时生效）",
        "publicKey": "splitCount",
        "publicLabel": "场景档数",
        "description": "场景占比行数（表格或 0 图片面板时生效）"
      },
      {
        "key": "focusEnabled",
        "label": "重点指标高亮",
        "type": "toggle",
        "default": true,
        "desc": "是否突出某一指标卡",
        "publicKey": "focusEnabled",
        "publicLabel": "重点指标高亮",
        "description": "是否突出某一指标卡"
      },
      {
        "key": "focusIndex",
        "label": "高亮第几个",
        "type": "number",
        "default": 2,
        "min": 0,
        "max": 3,
        "desc": "被突出的指标序号",
        "publicKey": "focusIndex",
        "publicLabel": "高亮第几个",
        "description": "被突出的指标序号"
      },
      {
        "key": "showTagBadge",
        "label": "分类徽标",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏左上角分类徽标（装饰）",
        "publicKey": "showTagBadge",
        "publicLabel": "分类徽标",
        "description": "显示/隐藏左上角分类徽标（装饰）"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#c8f135",
        "options": [
          "#c8f135",
          "#ff5a3c",
          "#3ca0ff",
          "#ffd23c"
        ],
        "desc": "主强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "主强调色"
      }
    ],
    "defaultProps": {
      "eyebrowId": "30",
      "eyebrowLabel": "LEGAL AI",
      "title": "专业服务高客单价",
      "subhead": "法律 AI 赛道 / LEGAL SERVICES",
      "closing": "法律 AI 是垂直应用商业化样本。",
      "segTag": "法律 AI 赛道 / LEGAL",
      "hero": {
        "value": "26",
        "unit": "亿$",
        "label": "赛道融资额 / FUNDING"
      },
      "metrics": [
        {
          "k": "事件数 / DEALS",
          "v": "6 笔"
        },
        {
          "k": "平均单笔 / AVG",
          "v": "4.3 亿"
        },
        {
          "k": "合同审查占比 / REVIEW",
          "v": "46%"
        }
      ],
      "splits": [
        {
          "name": "合同审查",
          "en": "CONTRACT REVIEW",
          "value": 46,
          "unit": "%"
        },
        {
          "name": "合规审查",
          "en": "COMPLIANCE",
          "value": 24,
          "unit": "%"
        },
        {
          "name": "诉讼支持",
          "en": "LITIGATION",
          "value": 18,
          "unit": "%"
        },
        {
          "name": "法律检索",
          "en": "LEGAL RESEARCH",
          "value": 12,
          "unit": "%"
        }
      ],
      "mediaPlaceholder": "法律流程图 / DROP IMAGE",
      "layout": "table",
      "mediaSlotCount": 1,
      "metricCount": 3,
      "splitCount": 4,
      "focusEnabled": true,
      "focusIndex": 2,
      "showTagBadge": true,
      "accent": "#c8f135"
    }
  },
  {
    "key": "theme06_page026",
    "themeKey": "theme06",
    "pageNumber": 26,
    "layout": "THEME06-026",
    "slot": "ranking",
    "label": "22 · 融资排名 / RANKING",
    "bgClass": "",
    "controls": [
      {
        "key": "rowCount",
        "label": "展示条目数",
        "type": "number",
        "default": 8,
        "min": 5,
        "max": 10,
        "desc": "排行榜显示的条目数量",
        "publicKey": "itemCount",
        "publicLabel": "展示条目数",
        "description": "排行榜显示的条目数量"
      },
      {
        "key": "focusCount",
        "label": "高亮前 N 名",
        "type": "number",
        "default": 3,
        "min": 0,
        "max": 3,
        "desc": "高亮排名靠前的条目数量（0 关闭）",
        "publicKey": "itemCount2",
        "publicLabel": "高亮前 N 名",
        "description": "高亮排名靠前的条目数量（0 关闭）"
      },
      {
        "key": "chartType",
        "label": "图形类型",
        "type": "select",
        "default": "bars",
        "options": [
          [
            "bars",
            "条形"
          ],
          [
            "dots",
            "点阵"
          ]
        ],
        "desc": "数值的可视化形式",
        "publicKey": "chartType",
        "publicLabel": "图形类型",
        "description": "数值的可视化形式"
      },
      {
        "key": "showValueLabels",
        "label": "数值标签",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏每行末尾的数值（装饰）",
        "publicKey": "showValueLabels",
        "publicLabel": "数值标签",
        "description": "显示/隐藏每行末尾的数值（装饰）"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#c8f135",
        "options": [
          "#c8f135",
          "#ff5a3c",
          "#3ca0ff",
          "#ffd23c"
        ],
        "desc": "主强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "主强调色"
      }
    ],
    "defaultProps": {
      "eyebrowId": "06",
      "eyebrowLabel": "TOP FUNDED",
      "unit": "B",
      "title": "Top 10 融资公司",
      "subhead": "头部玩家资金排名 / 最大单笔",
      "closing": "头部规模既反映技术叙事，也反映资源绑定能力。",
      "rows": [
        {
          "name": "OpenAI",
          "tag": "通用大模型 / LLM",
          "value": 66
        },
        {
          "name": "Anthropic",
          "tag": "安全模型 / SAFETY",
          "value": 65
        },
        {
          "name": "xAI",
          "tag": "实时数据 / MULTIMODAL",
          "value": 50
        },
        {
          "name": "CoreWeave",
          "tag": "算力基础设施 / GPU CLOUD",
          "value": 11
        },
        {
          "name": "SSI",
          "tag": "安全智能 / RESEARCH",
          "value": 10
        },
        {
          "name": "Scale AI",
          "tag": "数据基础设施 / DATA",
          "value": 10
        },
        {
          "name": "Figure AI",
          "tag": "具身智能 / ROBOTICS",
          "value": 6.8
        },
        {
          "name": "Perplexity",
          "tag": "AI 搜索 / SEARCH",
          "value": 5.2
        },
        {
          "name": "Databricks",
          "tag": "数据平台 / PLATFORM",
          "value": 5
        },
        {
          "name": "Glean",
          "tag": "企业搜索 / ENTERPRISE",
          "value": 2.6
        }
      ],
      "rowCount": 8,
      "focusCount": 3,
      "chartType": "bars",
      "showValueLabels": true,
      "accent": "#c8f135"
    }
  },
  {
    "key": "theme06_page027",
    "themeKey": "theme06",
    "pageNumber": 27,
    "layout": "THEME06-027",
    "slot": "chain",
    "label": "23 · 产业链分层 / VALUE CHAIN",
    "bgClass": "",
    "controls": [
      {
        "key": "layerCount",
        "label": "产业层数量",
        "type": "number",
        "default": 3,
        "min": 2,
        "max": 3,
        "desc": "展示的产业链层级数量",
        "publicKey": "layerCount",
        "publicLabel": "产业层数量",
        "description": "展示的产业链层级数量"
      },
      {
        "key": "layout",
        "label": "排布方式",
        "type": "select",
        "default": "stack",
        "options": [
          [
            "stack",
            "堆叠"
          ],
          [
            "columns",
            "并列"
          ]
        ],
        "desc": "层级的排布形式",
        "publicKey": "layout",
        "publicLabel": "排布方式",
        "description": "层级的排布形式"
      },
      {
        "key": "focusEnabled",
        "label": "重点层高亮",
        "type": "toggle",
        "default": true,
        "desc": "是否突出某一产业层",
        "publicKey": "focusEnabled",
        "publicLabel": "重点层高亮",
        "description": "是否突出某一产业层"
      },
      {
        "key": "focusIndex",
        "label": "高亮第几层",
        "type": "number",
        "default": 1,
        "min": 0,
        "max": 2,
        "desc": "被突出的产业层序号",
        "publicKey": "focusIndex",
        "publicLabel": "高亮第几层",
        "description": "被突出的产业层序号"
      },
      {
        "key": "showRegion",
        "label": "地区分布面板",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏右侧地区分布面板",
        "publicKey": "showRegion",
        "publicLabel": "地区分布面板",
        "description": "显示/隐藏右侧地区分布面板"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#c8f135",
        "options": [
          "#c8f135",
          "#ff5a3c",
          "#3ca0ff",
          "#ffd23c"
        ],
        "desc": "主强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "主强调色"
      }
    ],
    "defaultProps": {
      "eyebrowId": "07",
      "eyebrowLabel": "VALUE CHAIN",
      "title": "产业链分层透视",
      "subhead": "上游、中游、下游的资本位置",
      "closing": "产业链分层决定了资本确定性与商业风险的不同位置。",
      "layers": [
        {
          "tier": "上游 / UPSTREAM",
          "name": "基础设施层",
          "en": "Infrastructure",
          "items": [
            "算力",
            "AI 芯片",
            "数据"
          ]
        },
        {
          "tier": "中游 / MIDSTREAM",
          "name": "模型层",
          "en": "Model Layer",
          "items": [
            "通用模型",
            "专用模型",
            "安全对齐"
          ]
        },
        {
          "tier": "下游 / DOWNSTREAM",
          "name": "应用层",
          "en": "Application",
          "items": [
            "企业应用",
            "搜索",
            "机器人"
          ]
        }
      ],
      "regions": [
        {
          "name": "旧金山湾区",
          "v": 63.9
        },
        {
          "name": "纽约",
          "v": 12.4
        },
        {
          "name": "西雅图",
          "v": 9.8
        },
        {
          "name": "波士顿",
          "v": 7.7
        },
        {
          "name": "其他",
          "v": 6.2
        }
      ],
      "layerCount": 3,
      "focusEnabled": true,
      "focusIndex": 1,
      "layout": "stack",
      "showRegion": true,
      "accent": "#c8f135"
    }
  },
  {
    "key": "theme06_page028",
    "themeKey": "theme06",
    "pageNumber": 28,
    "layout": "THEME06-028",
    "slot": "cases",
    "label": "24 · 典型案例 / CASE STUDIES",
    "bgClass": "",
    "controls": [
      {
        "key": "cardCount",
        "label": "案例卡数量",
        "type": "number",
        "default": 3,
        "min": 1,
        "max": 3,
        "desc": "案例卡数量（同时决定图片槽数量；1 张时为横向大卡）",
        "publicKey": "cardCount",
        "publicLabel": "案例卡数量",
        "description": "案例卡数量（同时决定图片槽数量；1 张时为横向大卡）"
      },
      {
        "key": "showImage",
        "label": "图片槽",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏案例配图槽（上传后按图片比例自适应）",
        "publicKey": "showImage",
        "publicLabel": "图片槽",
        "description": "显示/隐藏案例配图槽（上传后按图片比例自适应）"
      },
      {
        "key": "metricCount",
        "label": "每卡指标数",
        "type": "number",
        "default": 3,
        "min": 1,
        "max": 3,
        "desc": "每张卡展示的指标条数",
        "publicKey": "metricCount",
        "publicLabel": "每卡指标数",
        "description": "每张卡展示的指标条数"
      },
      {
        "key": "focusEnabled",
        "label": "重点案例高亮",
        "type": "toggle",
        "default": true,
        "desc": "是否突出某一案例卡",
        "publicKey": "focusEnabled",
        "publicLabel": "重点案例高亮",
        "description": "是否突出某一案例卡"
      },
      {
        "key": "focusIndex",
        "label": "高亮第几个",
        "type": "number",
        "default": 0,
        "min": 0,
        "max": 2,
        "desc": "被突出的案例卡序号",
        "publicKey": "focusIndex",
        "publicLabel": "高亮第几个",
        "description": "被突出的案例卡序号"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#c8f135",
        "options": [
          "#c8f135",
          "#ff5a3c",
          "#3ca0ff",
          "#ffd23c"
        ],
        "desc": "主强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "主强调色"
      }
    ],
    "defaultProps": {
      "eyebrowId": "08",
      "eyebrowLabel": "CASE STUDIES",
      "title": "典型案例深度剖析",
      "subhead": "三类资本逻辑的代表公司",
      "closing": "不同案例共同指向：技术优势能否转成可持续收入。",
      "cases": [
        {
          "name": "Anthropic",
          "en": "SAFETY MODEL",
          "tag": "安全对齐 / Claude / 长上下文",
          "metrics": [
            {
              "k": "累计融资",
              "v": "$65B+"
            },
            {
              "k": "定位",
              "v": "企业级可信"
            },
            {
              "k": "客户",
              "v": "云 · 金融"
            }
          ]
        },
        {
          "name": "xAI",
          "en": "REALTIME DATA",
          "tag": "实时数据 / 多模态 / X 平台",
          "metrics": [
            {
              "k": "单笔融资",
              "v": "$50B"
            },
            {
              "k": "数据入口",
              "v": "X 平台"
            },
            {
              "k": "协同",
              "v": "特斯拉"
            }
          ]
        },
        {
          "name": "CoreWeave",
          "en": "GPU CLOUD",
          "tag": "GPU 云 / 算力资源 / 推理",
          "metrics": [
            {
              "k": "融资额",
              "v": "$11B"
            },
            {
              "k": "GPU 资源",
              "v": "7.8 万张"
            },
            {
              "k": "客户",
              "v": "模型公司"
            }
          ]
        }
      ],
      "cardCount": 3,
      "focusEnabled": true,
      "focusIndex": 0,
      "showImage": true,
      "metricCount": 3,
      "accent": "#c8f135"
    }
  },
  {
    "key": "theme06_page029",
    "themeKey": "theme06",
    "pageNumber": 29,
    "layout": "THEME06-029",
    "slot": "quadrant",
    "label": "25 · 机会矩阵 / QUADRANT",
    "bgClass": "",
    "controls": [
      {
        "key": "focusEnabled",
        "label": "重点象限高亮",
        "type": "toggle",
        "default": true,
        "desc": "是否突出某一象限",
        "publicKey": "focusEnabled",
        "publicLabel": "重点象限高亮",
        "description": "是否突出某一象限"
      },
      {
        "key": "focusIndex",
        "label": "高亮第几象限",
        "type": "number",
        "default": 1,
        "min": 0,
        "max": 3,
        "desc": "被突出的象限序号（左上→右上→左下→右下）",
        "publicKey": "focusIndex",
        "publicLabel": "高亮第几象限",
        "description": "被突出的象限序号（左上→右上→左下→右下）"
      },
      {
        "key": "showAxis",
        "label": "坐标轴标签",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏坐标轴标签（装饰）",
        "publicKey": "showAxis",
        "publicLabel": "坐标轴标签",
        "description": "显示/隐藏坐标轴标签（装饰）"
      },
      {
        "key": "showDecor",
        "label": "散点装饰",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏象限内的散点装饰",
        "publicKey": "showDecor",
        "publicLabel": "散点装饰",
        "description": "显示/隐藏象限内的散点装饰"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#c8f135",
        "options": [
          "#c8f135",
          "#ff5a3c",
          "#3ca0ff",
          "#ffd23c"
        ],
        "desc": "主强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "主强调色"
      }
    ],
    "defaultProps": {
      "eyebrowId": "09",
      "eyebrowLabel": "OPPORTUNITY MAP",
      "title": "资本热度 × 商业兑现",
      "subhead": "四象限机会判断",
      "closing": "资本正在从叙事驱动转向兑现驱动。",
      "axisX": {
        "label": "资本热度",
        "low": "低热度",
        "high": "高热度"
      },
      "axisY": {
        "label": "商业兑现",
        "low": "弱兑现",
        "high": "强兑现"
      },
      "quadrants": [
        {
          "name": "隐形价值",
          "en": "HIDDEN VALUE",
          "examples": [
            "垂直应用",
            "企业搜索"
          ]
        },
        {
          "name": "明星兑现",
          "en": "STAR DELIVERY",
          "examples": [
            "基础设施",
            "数据平台"
          ]
        },
        {
          "name": "等待验证",
          "en": "TO BE PROVEN",
          "examples": [
            "长尾工具",
            "安全",
            "早期硬件"
          ]
        },
        {
          "name": "叙事泡沫",
          "en": "NARRATIVE BUBBLE",
          "examples": [
            "通用模型",
            "AGI 实验室"
          ]
        }
      ],
      "focusEnabled": true,
      "focusIndex": 1,
      "showAxis": true,
      "showDecor": true,
      "accent": "#c8f135"
    }
  },
  {
    "key": "theme06_page030",
    "themeKey": "theme06",
    "pageNumber": 30,
    "layout": "THEME06-030",
    "slot": "risk",
    "label": "26 · 风险研判 / RISK",
    "bgClass": "",
    "controls": [
      {
        "key": "cardCount",
        "label": "状态链节数量",
        "type": "number",
        "default": 5,
        "min": 3,
        "max": 5,
        "desc": "展示的状态链节数量",
        "publicKey": "cardCount",
        "publicLabel": "状态链节数量",
        "description": "展示的状态链节数量"
      },
      {
        "key": "mediaSlotCount",
        "label": "媒体占位数量",
        "type": "number",
        "default": 1,
        "min": 0,
        "max": 2,
        "desc": "右侧图片槽数量（0 时改为摘要面板；上传后按图片比例自适应，布局随数量重排）",
        "publicKey": "mediaSlotCount",
        "publicLabel": "媒体占位数量",
        "description": "右侧图片槽数量（0 时改为摘要面板；上传后按图片比例自适应，布局随数量重排）"
      },
      {
        "key": "focusEnabled",
        "label": "重点项高亮",
        "type": "toggle",
        "default": true,
        "desc": "是否突出某一状态链节",
        "publicKey": "focusEnabled",
        "publicLabel": "重点项高亮",
        "description": "是否突出某一状态链节"
      },
      {
        "key": "focusIndex",
        "label": "高亮第几项",
        "type": "number",
        "default": 0,
        "min": 0,
        "max": 4,
        "desc": "被突出的状态链节序号",
        "publicKey": "focusIndex",
        "publicLabel": "高亮第几项",
        "description": "被突出的状态链节序号"
      },
      {
        "key": "showConnectors",
        "label": "链条连接线",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏链节之间的传导连接线（装饰）",
        "publicKey": "showConnectors",
        "publicLabel": "链条连接线",
        "description": "显示/隐藏链节之间的传导连接线（装饰）"
      },
      {
        "key": "showLevel",
        "label": "状态强度条",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏每项的状态强度条（装饰数据）",
        "publicKey": "showStatusLevel",
        "publicLabel": "状态强度条",
        "description": "显示/隐藏每项的状态强度条（装饰数据）"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#c8f135",
        "options": [
          "#c8f135",
          "#ff5a3c",
          "#3ca0ff",
          "#ffd23c"
        ],
        "desc": "主强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "主强调色"
      }
    ],
    "defaultProps": {
      "eyebrowId": "10",
      "eyebrowLabel": "RISK ASSESSMENT",
      "title": "风险研判",
      "subhead": "资本大年背后的下行因素",
      "summary": "高估值、盈利验证、监管压力、大厂竞争与算力成本，构成一条<b>互相传导的风险链条</b>。",
      "railCaption": "风险传导 / TRANSMISSION",
      "closing": "下一阶段会淘汰只会讲故事的公司。",
      "risks": [
        {
          "name": "估值泡沫",
          "en": "VALUATION",
          "level": 0.9,
          "desc": "一级市场估值透支，二级承压后将向上游传导。"
        },
        {
          "name": "盈利验证",
          "en": "MONETIZATION",
          "level": 0.78,
          "desc": "试点难转稳定订阅收入，毛利与留存仍待验证。"
        },
        {
          "name": "监管合规",
          "en": "REGULATION",
          "level": 0.62,
          "desc": "隐私、版权与安全审查抬高交付与采购成本。"
        },
        {
          "name": "大厂挤压",
          "en": "BIG TECH",
          "level": 0.7,
          "desc": "开源与平台生态压缩初创公司的独立空间。"
        },
        {
          "name": "算力成本",
          "en": "COMPUTE",
          "level": 0.85,
          "desc": "训练与推理成本卡住模型商业化的毛利天花板。"
        }
      ],
      "cardCount": 5,
      "focusEnabled": true,
      "focusIndex": 0,
      "mediaSlotCount": 1,
      "showConnectors": true,
      "showLevel": true,
      "accent": "#c8f135"
    }
  },
  {
    "key": "theme06_page031",
    "themeKey": "theme06",
    "pageNumber": 31,
    "layout": "THEME06-031",
    "slot": "outlook",
    "label": "27 · 投资建议 / OUTLOOK",
    "bgClass": "",
    "controls": [
      {
        "key": "itemCount",
        "label": "每栏方向数量",
        "type": "number",
        "default": 3,
        "min": 2,
        "max": 4,
        "desc": "每个对比栏展示的方向条数",
        "publicKey": "itemCount",
        "publicLabel": "每栏方向数量",
        "description": "每个对比栏展示的方向条数"
      },
      {
        "key": "emphasis",
        "label": "对比侧重",
        "type": "select",
        "default": "left",
        "options": [
          [
            "none",
            "均衡"
          ],
          [
            "left",
            "左栏"
          ],
          [
            "right",
            "右栏"
          ]
        ],
        "desc": "突出哪一侧对比栏（另一侧弱化）",
        "publicKey": "emphasis",
        "publicLabel": "对比侧重",
        "description": "突出哪一侧对比栏（另一侧弱化）"
      },
      {
        "key": "showTimeline",
        "label": "阶段时间轴",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏底部的阶段性时间轴",
        "publicKey": "showTimeline",
        "publicLabel": "阶段时间轴",
        "description": "显示/隐藏底部的阶段性时间轴"
      },
      {
        "key": "timelineCount",
        "label": "阶段节点数",
        "type": "number",
        "default": 3,
        "min": 2,
        "max": 4,
        "desc": "时间轴上的阶段节点数量",
        "publicKey": "timelineCount",
        "publicLabel": "阶段节点数",
        "description": "时间轴上的阶段节点数量"
      },
      {
        "key": "focusEnabled",
        "label": "重点阶段高亮",
        "type": "toggle",
        "default": true,
        "desc": "是否突出某一阶段节点",
        "publicKey": "focusEnabled",
        "publicLabel": "重点阶段高亮",
        "description": "是否突出某一阶段节点"
      },
      {
        "key": "focusIndex",
        "label": "高亮第几阶段",
        "type": "number",
        "default": 2,
        "min": 0,
        "max": 3,
        "desc": "被突出的阶段节点序号",
        "publicKey": "focusIndex",
        "publicLabel": "高亮第几阶段",
        "description": "被突出的阶段节点序号"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#c8f135",
        "options": [
          "#c8f135",
          "#ff5a3c",
          "#3ca0ff",
          "#ffd23c"
        ],
        "desc": "主强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "主强调色"
      }
    ],
    "defaultProps": {
      "eyebrowId": "11",
      "eyebrowLabel": "INVESTMENT OUTLOOK",
      "title": "投资建议与阶段性策略",
      "subhead": "看好方向与谨慎方向",
      "closing": "看融资只是起点，看兑现才是判断。",
      "columns": [
        {
          "title": "看好方向",
          "en": "BULLISH",
          "tone": "bull",
          "items": [
            {
              "name": "垂直应用",
              "en": "VERTICAL APPS",
              "note": "嵌入刚性工作流，看付费留存与净收入留存。"
            },
            {
              "name": "基础设施",
              "en": "INFRASTRUCTURE",
              "note": "接近企业刚性预算，收入确定性相对更强。"
            },
            {
              "name": "具身智能",
              "en": "EMBODIED AI",
              "note": "长周期硬科技，关注供应链与量产能力。"
            },
            {
              "name": "数据底座",
              "en": "DATA STACK",
              "note": "承接训练、RAG 与知识管理的刚需。"
            }
          ]
        },
        {
          "title": "谨慎方向",
          "en": "CAUTIOUS",
          "tone": "caut",
          "items": [
            {
              "name": "高估值纯模型",
              "en": "PURE MODELS",
              "note": "估值透支，缺乏数据与工作流护城河。"
            },
            {
              "name": "AI 包装项目",
              "en": "AI WRAPPERS",
              "note": "无壁垒，易被平台与开源能力替代。"
            },
            {
              "name": "低壁垒消费应用",
              "en": "THIN CONSUMER",
              "note": "留存弱、同质化竞争，付费意愿不稳。"
            },
            {
              "name": "纯演示硬件",
              "en": "DEMO HARDWARE",
              "note": "缺乏量产与成本验证，兑现周期长。"
            }
          ]
        }
      ],
      "phases": [
        {
          "when": "2025",
          "name": "观察期",
          "note": "关注 IPO 窗口与头部公司收入曲线。"
        },
        {
          "when": "2026",
          "name": "分化期",
          "note": "兑现能力开始拉开公司之间的差距。"
        },
        {
          "when": "2027",
          "name": "重定价",
          "note": "公开市场重定 AI 一级市场估值锚。"
        },
        {
          "when": "2028",
          "name": "再配置",
          "note": "资本向已验证商业闭环的方向集中。"
        }
      ],
      "itemCount": 3,
      "emphasis": "left",
      "showTimeline": true,
      "timelineCount": 3,
      "focusEnabled": true,
      "focusIndex": 2,
      "accent": "#c8f135"
    }
  },
  {
    "key": "theme06_page032",
    "themeKey": "theme06",
    "pageNumber": 32,
    "layout": "THEME06-032",
    "slot": "big",
    "label": "28 · 大数字 / BIG NUMBER",
    "bgClass": "",
    "controls": [
      {
        "key": "metricCount",
        "label": "辅助指标数量",
        "type": "number",
        "default": 3,
        "min": 0,
        "max": 3,
        "desc": "大数字下方的辅助指标数量（0 隐藏）",
        "publicKey": "metricCount",
        "publicLabel": "辅助指标数量",
        "description": "大数字下方的辅助指标数量（0 隐藏）"
      },
      {
        "key": "align",
        "label": "对齐方式",
        "type": "select",
        "default": "left",
        "options": [
          [
            "left",
            "左对齐"
          ],
          [
            "center",
            "居中"
          ]
        ],
        "desc": "主数字区域的对齐方式",
        "publicKey": "align",
        "publicLabel": "对齐方式",
        "description": "主数字区域的对齐方式"
      },
      {
        "key": "showWatermark",
        "label": "背景大字",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏背景水印字（装饰）",
        "publicKey": "showWatermark",
        "publicLabel": "背景大字",
        "description": "显示/隐藏背景水印字（装饰）"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#c8f135",
        "options": [
          "#c8f135",
          "#ff5a3c",
          "#3ca0ff",
          "#ffd23c"
        ],
        "desc": "主强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "主强调色"
      }
    ],
    "defaultProps": {
      "eyebrowId": "12",
      "eyebrowLabel": "AVERAGE TICKET",
      "kicker": "把规模换算成单笔，更能看清资本的下注密度。",
      "figure": "$1.0",
      "unit": "B",
      "explain": "全年大额融资的 <b>平均单笔规模</b>——融资规模越大，后续兑现压力越高。",
      "closing": "融资规模越大，后续兑现压力越高。",
      "watermark": "AVG",
      "metrics": [
        {
          "k": "全年融资 / TOTAL",
          "v": "$97B"
        },
        {
          "k": "大额事件 / DEALS",
          "v": "97"
        },
        {
          "k": "湾区占比 / BAY AREA",
          "v": "63.9%"
        }
      ],
      "metricCount": 3,
      "align": "left",
      "showWatermark": true,
      "accent": "#c8f135"
    }
  },
  {
    "key": "theme06_page033",
    "themeKey": "theme06",
    "pageNumber": 33,
    "layout": "THEME06-033",
    "slot": "health",
    "label": "29 · 慢变量高壁垒 / HEALTHCARE AI",
    "bgClass": "",
    "controls": [
      {
        "key": "branchCount",
        "label": "分支数量",
        "type": "number",
        "default": 3,
        "min": 2,
        "max": 4,
        "desc": "结构图的分支节点数量",
        "publicKey": "branchCount",
        "publicLabel": "分支数量",
        "description": "结构图的分支节点数量"
      },
      {
        "key": "mediaSlotCount",
        "label": "图片槽数量",
        "type": "number",
        "default": 1,
        "min": 0,
        "max": 2,
        "desc": "右侧自适应图片槽数量（0 时分支列加宽；上传后按图片比例自适应，构图随数量重排）",
        "publicKey": "mediaSlotCount",
        "publicLabel": "图片槽数量",
        "description": "右侧自适应图片槽数量（0 时分支列加宽；上传后按图片比例自适应，构图随数量重排）"
      },
      {
        "key": "metricCount",
        "label": "指标数量",
        "type": "number",
        "default": 2,
        "min": 1,
        "max": 3,
        "desc": "根节点下方辅助指标数量",
        "publicKey": "metricCount",
        "publicLabel": "指标数量",
        "description": "根节点下方辅助指标数量"
      },
      {
        "key": "focusEnabled",
        "label": "重点分支高亮",
        "type": "toggle",
        "default": true,
        "desc": "是否突出某一分支节点",
        "publicKey": "focusEnabled",
        "publicLabel": "重点分支高亮",
        "description": "是否突出某一分支节点"
      },
      {
        "key": "focusIndex",
        "label": "高亮第几支",
        "type": "number",
        "default": 0,
        "min": 0,
        "max": 3,
        "desc": "被突出的分支序号",
        "publicKey": "focusIndex",
        "publicLabel": "高亮第几支",
        "description": "被突出的分支序号"
      },
      {
        "key": "showTrunk",
        "label": "连接主干",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏连接主干与节点圆点（装饰）",
        "publicKey": "showTrunk",
        "publicLabel": "连接主干",
        "description": "显示/隐藏连接主干与节点圆点（装饰）"
      },
      {
        "key": "showValueBars",
        "label": "数值条",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏每支数值条（装饰数据）",
        "publicKey": "showValueLabels",
        "publicLabel": "数值条",
        "description": "显示/隐藏每支数值条（装饰数据）"
      },
      {
        "key": "showRootBadge",
        "label": "分类徽标",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏左上角分类徽标（装饰）",
        "publicKey": "showRootBadge",
        "publicLabel": "分类徽标",
        "description": "显示/隐藏左上角分类徽标（装饰）"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#c8f135",
        "options": [
          "#c8f135",
          "#ff5a3c",
          "#3ca0ff",
          "#ffd23c"
        ],
        "desc": "主强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "主强调色"
      }
    ],
    "defaultProps": {
      "eyebrowId": "31",
      "eyebrowLabel": "HEALTHCARE AI",
      "title": "慢变量高壁垒",
      "subhead": "医疗 AI 赛道 / HEALTHCARE AI",
      "closing": "慢场景不代表低价值。",
      "rootTag": "医疗 AI 赛道 / HEALTH",
      "hero": {
        "value": "34",
        "unit": "亿$",
        "label": "赛道融资额 / FUNDING"
      },
      "metrics": [
        {
          "k": "事件数 / DEALS",
          "v": "8 笔"
        },
        {
          "k": "平均单笔 / AVG",
          "v": "4.3 亿"
        }
      ],
      "branches": [
        {
          "name": "药物发现",
          "en": "DRUG DISCOVERY",
          "value": 14,
          "unit": " 亿"
        },
        {
          "name": "影像诊断",
          "en": "MEDICAL IMAGING",
          "value": 11,
          "unit": " 亿"
        },
        {
          "name": "临床文书",
          "en": "CLINICAL DOCS",
          "value": 9,
          "unit": " 亿"
        }
      ],
      "mediaPlaceholder": "三分支结构图 / DROP IMAGE",
      "branchCount": 3,
      "mediaSlotCount": 1,
      "metricCount": 2,
      "focusEnabled": true,
      "focusIndex": 0,
      "showTrunk": true,
      "showValueBars": true,
      "showRootBadge": true,
      "accent": "#c8f135"
    }
  },
  {
    "key": "theme06_page034",
    "themeKey": "theme06",
    "pageNumber": 34,
    "layout": "THEME06-034",
    "slot": "finance",
    "label": "30 · 投研风控合规 / FINANCE AI",
    "bgClass": "",
    "controls": [
      {
        "key": "chartType",
        "label": "图表类型",
        "type": "select",
        "default": "donut",
        "options": [
          [
            "donut",
            "环形"
          ],
          [
            "ring",
            "细环"
          ],
          [
            "bars",
            "条形"
          ]
        ],
        "desc": "占比的可视化形式",
        "publicKey": "chartType",
        "publicLabel": "图表类型",
        "description": "占比的可视化形式"
      },
      {
        "key": "segmentCount",
        "label": "占比项数",
        "type": "number",
        "default": 4,
        "min": 2,
        "max": 4,
        "desc": "展示的占比项数量",
        "publicKey": "segmentCount",
        "publicLabel": "占比项数",
        "description": "展示的占比项数量"
      },
      {
        "key": "showCenter",
        "label": "中心数字",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏圆环中心的主数字（装饰，仅环形）",
        "publicKey": "showCenter",
        "publicLabel": "中心数字",
        "description": "显示/隐藏圆环中心的主数字（装饰，仅环形）"
      },
      {
        "key": "showValueLabels",
        "label": "数值标签",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏各项占比标签（装饰数据）",
        "publicKey": "showValueLabels",
        "publicLabel": "数值标签",
        "description": "显示/隐藏各项占比标签（装饰数据）"
      },
      {
        "key": "focusEnabled",
        "label": "重点占比高亮",
        "type": "toggle",
        "default": true,
        "desc": "是否拉出并突出某一占比项",
        "publicKey": "focusEnabled",
        "publicLabel": "重点占比高亮",
        "description": "是否拉出并突出某一占比项"
      },
      {
        "key": "focusIndex",
        "label": "高亮第几项",
        "type": "number",
        "default": 0,
        "min": 0,
        "max": 3,
        "desc": "被突出的占比序号",
        "publicKey": "focusIndex",
        "publicLabel": "高亮第几项",
        "description": "被突出的占比序号"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#c8f135",
        "options": [
          "#c8f135",
          "#ff5a3c",
          "#3ca0ff",
          "#ffd23c"
        ],
        "desc": "主强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "主强调色"
      }
    ],
    "defaultProps": {
      "eyebrowId": "32",
      "eyebrowLabel": "FINANCE AI",
      "title": "投研、风控与合规",
      "subhead": "金融 AI 赛道 / FINANCE AI",
      "unit": "%",
      "closing": "高价值行业需要更强可信度。",
      "hero": {
        "value": "22",
        "unit": "亿$",
        "label": "赛道融资额 / FUNDING"
      },
      "segments": [
        {
          "name": "投研",
          "en": "RESEARCH",
          "value": 31
        },
        {
          "name": "合规",
          "en": "COMPLIANCE",
          "value": 28
        },
        {
          "name": "风控",
          "en": "RISK CONTROL",
          "value": 24
        },
        {
          "name": "客户服务",
          "en": "SERVICE",
          "value": 17
        }
      ],
      "metrics": [
        {
          "k": "事件数 / DEALS",
          "v": "7 笔"
        },
        {
          "k": "平均单笔 / AVG",
          "v": "3.1 亿"
        }
      ],
      "chartType": "donut",
      "segmentCount": 4,
      "showCenter": true,
      "showValueLabels": true,
      "focusEnabled": true,
      "focusIndex": 0,
      "accent": "#c8f135"
    }
  },
  {
    "key": "theme06_page035",
    "themeKey": "theme06",
    "pageNumber": 35,
    "layout": "THEME06-035",
    "slot": "dev",
    "label": "31 · 研发效率提升 / DEV TOOLS",
    "bgClass": "",
    "controls": [
      {
        "key": "showMeta",
        "label": "结论卡",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏底部的支撑结论卡",
        "publicKey": "showMeta",
        "publicLabel": "结论卡",
        "description": "显示/隐藏底部的支撑结论卡"
      },
      {
        "key": "metaCount",
        "label": "结论卡数量",
        "type": "number",
        "default": 3,
        "min": 0,
        "max": 3,
        "desc": "底部结论卡数量",
        "publicKey": "metaCount",
        "publicLabel": "结论卡数量",
        "description": "底部结论卡数量"
      },
      {
        "key": "align",
        "label": "对齐方式",
        "type": "select",
        "default": "left",
        "options": [
          [
            "left",
            "左对齐"
          ],
          [
            "center",
            "居中"
          ]
        ],
        "desc": "金句区域的对齐方式",
        "publicKey": "align",
        "publicLabel": "对齐方式",
        "description": "金句区域的对齐方式"
      },
      {
        "key": "showWatermark",
        "label": "背景大字",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏背景水印字（装饰）",
        "publicKey": "showWatermark",
        "publicLabel": "背景大字",
        "description": "显示/隐藏背景水印字（装饰）"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#c8f135",
        "options": [
          "#c8f135",
          "#ff5a3c",
          "#3ca0ff",
          "#ffd23c"
        ],
        "desc": "主强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "主强调色"
      }
    ],
    "defaultProps": {
      "eyebrowId": "33",
      "eyebrowLabel": "DEVELOPER TOOLS",
      "kicker": "研发效率提升 / Developer Tools",
      "quote": "研发效率，是企业<b>最直接</b>的 AI <b>预算入口</b>之一。",
      "source": "AI CAPITAL LAB · 2024 调研",
      "watermark": "DEV",
      "meta": [
        {
          "k": "01 / 嵌入",
          "v": "代码补全与评审嵌入 IDE 流水线，使用频次高。"
        },
        {
          "k": "02 / 预算",
          "v": "研发效率是企业最容易立项的 AI 预算入口。"
        },
        {
          "k": "03 / 留存",
          "v": "一旦进入工作流，迁移成本与续费随之上升。"
        }
      ],
      "showMeta": true,
      "metaCount": 3,
      "align": "left",
      "showWatermark": true,
      "accent": "#c8f135"
    }
  },
  {
    "key": "theme06_page036",
    "themeKey": "theme06",
    "pageNumber": 36,
    "layout": "THEME06-036",
    "slot": "datainfra",
    "label": "32 · 企业 AI 底座 / DATA INFRA",
    "bgClass": "",
    "controls": [
      {
        "key": "chartType",
        "label": "图表类型",
        "type": "select",
        "default": "flow",
        "options": [
          [
            "flow",
            "横向流程"
          ],
          [
            "steps",
            "纵向步骤"
          ]
        ],
        "desc": "数据流的可视化形式",
        "publicKey": "chartType",
        "publicLabel": "图表类型",
        "description": "数据流的可视化形式"
      },
      {
        "key": "stageCount",
        "label": "环节数量",
        "type": "number",
        "default": 4,
        "min": 3,
        "max": 5,
        "desc": "流程环节节点数量",
        "publicKey": "stageCount",
        "publicLabel": "环节数量",
        "description": "流程环节节点数量"
      },
      {
        "key": "metricCount",
        "label": "指标数量",
        "type": "number",
        "default": 2,
        "min": 2,
        "max": 3,
        "desc": "底部辅助指标卡数量",
        "publicKey": "metricCount",
        "publicLabel": "指标数量",
        "description": "底部辅助指标卡数量"
      },
      {
        "key": "focusEnabled",
        "label": "重点环节高亮",
        "type": "toggle",
        "default": true,
        "desc": "是否突出某一流程环节",
        "publicKey": "focusEnabled",
        "publicLabel": "重点环节高亮",
        "description": "是否突出某一流程环节"
      },
      {
        "key": "focusIndex",
        "label": "高亮第几环",
        "type": "number",
        "default": 1,
        "min": 0,
        "max": 4,
        "desc": "被突出的环节序号",
        "publicKey": "focusIndex",
        "publicLabel": "高亮第几环",
        "description": "被突出的环节序号"
      },
      {
        "key": "showConnectors",
        "label": "连接箭头",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏环节之间的连接箭头（装饰，仅横向流程）",
        "publicKey": "showConnectors",
        "publicLabel": "连接箭头",
        "description": "显示/隐藏环节之间的连接箭头（装饰，仅横向流程）"
      },
      {
        "key": "showGrowth",
        "label": "增长指标",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏底部增长指标卡（装饰数据）",
        "publicKey": "showGrowth",
        "publicLabel": "增长指标",
        "description": "显示/隐藏底部增长指标卡（装饰数据）"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#c8f135",
        "options": [
          "#c8f135",
          "#ff5a3c",
          "#3ca0ff",
          "#ffd23c"
        ],
        "desc": "主强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "主强调色"
      }
    ],
    "defaultProps": {
      "eyebrowId": "34",
      "eyebrowLabel": "DATA INFRASTRUCTURE",
      "title": "企业 AI 底座",
      "subhead": "数据基础设施 / DATA INFRASTRUCTURE",
      "closing": "没有数据底座，AI 应用很难稳定落地。",
      "stages": [
        {
          "name": "数据接入",
          "en": "DATA INGEST",
          "tag": "多源采集"
        },
        {
          "name": "向量化存储",
          "en": "VECTOR STORE",
          "tag": "索引 / 检索"
        },
        {
          "name": "训练 / RAG",
          "en": "TRAIN & RAG",
          "tag": "模型对接"
        },
        {
          "name": "企业应用",
          "en": "APPLICATIONS",
          "tag": "业务落地"
        }
      ],
      "hero": {
        "value": "61",
        "unit": "亿$",
        "label": "赛道融资额 / FUNDING"
      },
      "growth": {
        "value": "+47%",
        "label": "企业客户增长 / GROWTH"
      },
      "metrics": [
        {
          "k": "事件数 / DEALS",
          "v": "12 笔"
        },
        {
          "k": "平均单笔 / AVG",
          "v": "5.1 亿"
        }
      ],
      "chartType": "flow",
      "stageCount": 4,
      "metricCount": 2,
      "focusEnabled": true,
      "focusIndex": 1,
      "showConnectors": true,
      "showGrowth": true,
      "accent": "#c8f135"
    }
  },
  {
    "key": "theme06_page037",
    "themeKey": "theme06",
    "pageNumber": 37,
    "layout": "THEME06-037",
    "slot": "growth",
    "label": "33 · 增长效率工具 / GROWTH",
    "bgClass": "",
    "controls": [
      {
        "key": "chartType",
        "label": "图表类型",
        "type": "select",
        "default": "funnel",
        "options": [
          [
            "funnel",
            "漏斗"
          ],
          [
            "bars",
            "条形"
          ],
          [
            "steps",
            "步骤"
          ]
        ],
        "desc": "增长场景的可视化形式",
        "publicKey": "chartType",
        "publicLabel": "图表类型",
        "description": "增长场景的可视化形式"
      },
      {
        "key": "tierCount",
        "label": "层级数量",
        "type": "number",
        "default": 4,
        "min": 3,
        "max": 5,
        "desc": "漏斗层级数量",
        "publicKey": "tierCount",
        "publicLabel": "层级数量",
        "description": "漏斗层级数量"
      },
      {
        "key": "metricCount",
        "label": "指标数量",
        "type": "number",
        "default": 2,
        "min": 1,
        "max": 3,
        "desc": "左侧辅助指标数量",
        "publicKey": "metricCount",
        "publicLabel": "指标数量",
        "description": "左侧辅助指标数量"
      },
      {
        "key": "showRate",
        "label": "转化率",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏层级间转化率（装饰数据，仅漏斗）",
        "publicKey": "showRate",
        "publicLabel": "转化率",
        "description": "显示/隐藏层级间转化率（装饰数据，仅漏斗）"
      },
      {
        "key": "showValueLabels",
        "label": "数值标签",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏各层数值标签（装饰数据）",
        "publicKey": "showValueLabels",
        "publicLabel": "数值标签",
        "description": "显示/隐藏各层数值标签（装饰数据）"
      },
      {
        "key": "focusEnabled",
        "label": "重点层级高亮",
        "type": "toggle",
        "default": true,
        "desc": "是否突出某一层级",
        "publicKey": "focusEnabled",
        "publicLabel": "重点层级高亮",
        "description": "是否突出某一层级"
      },
      {
        "key": "focusIndex",
        "label": "高亮第几层",
        "type": "number",
        "default": 0,
        "min": 0,
        "max": 4,
        "desc": "被突出的层级序号",
        "publicKey": "focusIndex",
        "publicLabel": "高亮第几层",
        "description": "被突出的层级序号"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#c8f135",
        "options": [
          "#c8f135",
          "#ff5a3c",
          "#3ca0ff",
          "#ffd23c"
        ],
        "desc": "主强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "主强调色"
      }
    ],
    "defaultProps": {
      "eyebrowId": "45",
      "eyebrowLabel": "SALES & MARKETING AI",
      "title": "增长效率工具",
      "subhead": "销售与营销 AI / GROWTH TOOLS",
      "unit": " 亿",
      "closing": "营销 AI 要用转化率证明自己。",
      "hero": {
        "value": "24",
        "unit": "亿$",
        "label": "赛道融资额 / FUNDING"
      },
      "metrics": [
        {
          "k": "事件数 / DEALS",
          "v": "10 笔"
        },
        {
          "k": "平均单笔 / AVG",
          "v": "2.4 亿"
        }
      ],
      "tiers": [
        {
          "name": "广告创意",
          "en": "AD CREATIVE",
          "value": 8,
          "unit": " 亿"
        },
        {
          "name": "线索评分",
          "en": "LEAD SCORING",
          "value": 7,
          "unit": " 亿"
        },
        {
          "name": "自动外呼",
          "en": "AUTO OUTREACH",
          "value": 6,
          "unit": " 亿"
        },
        {
          "name": "邮件触达",
          "en": "EMAIL OUTREACH",
          "value": 4,
          "unit": " 亿"
        }
      ],
      "chartType": "funnel",
      "tierCount": 4,
      "metricCount": 2,
      "showRate": true,
      "showValueLabels": true,
      "focusEnabled": true,
      "focusIndex": 0,
      "accent": "#c8f135"
    }
  },
  {
    "key": "theme06_page038",
    "themeKey": "theme06",
    "pageNumber": 38,
    "layout": "THEME06-038",
    "slot": "lowcode",
    "label": "34 · 企业流程嵌入 / LOW CODE",
    "bgClass": "",
    "controls": [
      {
        "key": "layout",
        "label": "布局形式",
        "type": "select",
        "default": "media",
        "options": [
          [
            "media",
            "图文"
          ],
          [
            "table",
            "表格"
          ]
        ],
        "desc": "右栏的呈现形式：图片主导 / 场景占比表",
        "publicKey": "layout",
        "publicLabel": "布局形式",
        "description": "右栏的呈现形式：图片主导 / 场景占比表"
      },
      {
        "key": "mediaSlotCount",
        "label": "图片槽数量",
        "type": "number",
        "default": 1,
        "min": 0,
        "max": 2,
        "desc": "右侧自适应图片槽数量（0 改为场景占比面板；上传后按图片比例自适应，构图随数量重排）",
        "publicKey": "mediaSlotCount",
        "publicLabel": "图片槽数量",
        "description": "右侧自适应图片槽数量（0 改为场景占比面板；上传后按图片比例自适应，构图随数量重排）"
      },
      {
        "key": "metricCount",
        "label": "指标数量",
        "type": "number",
        "default": 3,
        "min": 2,
        "max": 4,
        "desc": "左侧辅助指标卡数量",
        "publicKey": "metricCount",
        "publicLabel": "指标数量",
        "description": "左侧辅助指标卡数量"
      },
      {
        "key": "splitCount",
        "label": "场景档数",
        "type": "number",
        "default": 3,
        "min": 2,
        "max": 4,
        "desc": "场景占比行数（表格或 0 图片面板时生效）",
        "publicKey": "splitCount",
        "publicLabel": "场景档数",
        "description": "场景占比行数（表格或 0 图片面板时生效）"
      },
      {
        "key": "focusEnabled",
        "label": "重点指标高亮",
        "type": "toggle",
        "default": true,
        "desc": "是否突出某一指标卡",
        "publicKey": "focusEnabled",
        "publicLabel": "重点指标高亮",
        "description": "是否突出某一指标卡"
      },
      {
        "key": "focusIndex",
        "label": "高亮第几个",
        "type": "number",
        "default": 2,
        "min": 0,
        "max": 3,
        "desc": "被突出的指标序号",
        "publicKey": "focusIndex",
        "publicLabel": "高亮第几个",
        "description": "被突出的指标序号"
      },
      {
        "key": "showTagBadge",
        "label": "分类徽标",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏左上角分类徽标（装饰）",
        "publicKey": "showTagBadge",
        "publicLabel": "分类徽标",
        "description": "显示/隐藏左上角分类徽标（装饰）"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#c8f135",
        "options": [
          "#c8f135",
          "#ff5a3c",
          "#3ca0ff",
          "#ffd23c"
        ],
        "desc": "主强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "主强调色"
      }
    ],
    "defaultProps": {
      "eyebrowId": "46",
      "eyebrowLabel": "LOW CODE AI",
      "title": "企业流程嵌入",
      "subhead": "低代码 AI 平台 / LOW CODE",
      "closing": "能被业务团队使用的平台更容易扩散。",
      "segTag": "低代码 AI 赛道 / LOW CODE",
      "hero": {
        "value": "19",
        "unit": "亿$",
        "label": "赛道融资额 / FUNDING"
      },
      "metrics": [
        {
          "k": "事件数 / DEALS",
          "v": "6 笔"
        },
        {
          "k": "企业客户中位数 / CLIENTS",
          "v": "430 家"
        },
        {
          "k": "净收入留存 / NRR",
          "v": "118%"
        }
      ],
      "splits": [
        {
          "name": "流程编排",
          "en": "ORCHESTRATION",
          "value": 41,
          "unit": "%"
        },
        {
          "name": "模型接入",
          "en": "MODEL CONNECT",
          "value": 33,
          "unit": "%"
        },
        {
          "name": "治理审计",
          "en": "GOVERNANCE",
          "value": 26,
          "unit": "%"
        }
      ],
      "mediaPlaceholder": "流程编排图 / DROP IMAGE",
      "layout": "media",
      "mediaSlotCount": 1,
      "metricCount": 3,
      "splitCount": 3,
      "focusEnabled": true,
      "focusIndex": 2,
      "showTagBadge": true,
      "accent": "#c8f135"
    }
  },
  {
    "key": "theme06_page039",
    "themeKey": "theme06",
    "pageNumber": 39,
    "layout": "THEME06-039",
    "slot": "opensource",
    "label": "35 · 社区影响力变现 / OPEN SOURCE",
    "bgClass": "",
    "controls": [
      {
        "key": "mediaSlotCount",
        "label": "图片槽数量",
        "type": "number",
        "default": 1,
        "min": 0,
        "max": 2,
        "desc": "右侧自适应图片槽数量（0 时转化列加宽；上传后按图片比例自适应，构图随数量重排）",
        "publicKey": "mediaSlotCount",
        "publicLabel": "图片槽数量",
        "description": "右侧自适应图片槽数量（0 时转化列加宽；上传后按图片比例自适应，构图随数量重排）"
      },
      {
        "key": "metricCount",
        "label": "指标数量",
        "type": "number",
        "default": 2,
        "min": 1,
        "max": 3,
        "desc": "左侧辅助指标数量",
        "publicKey": "metricCount",
        "publicLabel": "指标数量",
        "description": "左侧辅助指标数量"
      },
      {
        "key": "focusEnabled",
        "label": "重点极点高亮",
        "type": "toggle",
        "default": true,
        "desc": "是否突出某一极点（影响力 / 兑现）",
        "publicKey": "focusEnabled",
        "publicLabel": "重点极点高亮",
        "description": "是否突出某一极点（影响力 / 兑现）"
      },
      {
        "key": "focusIndex",
        "label": "高亮第几极",
        "type": "number",
        "default": 1,
        "min": 0,
        "max": 1,
        "desc": "被突出的极点（0 影响力 / 1 兑现）",
        "publicKey": "focusIndex",
        "publicLabel": "高亮第几极",
        "description": "被突出的极点（0 影响力 / 1 兑现）"
      },
      {
        "key": "showRate",
        "label": "转化率桥接",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏两极之间的转化率桥接（装饰数据）",
        "publicKey": "showRate",
        "publicLabel": "转化率桥接",
        "description": "显示/隐藏两极之间的转化率桥接（装饰数据）"
      },
      {
        "key": "showBars",
        "label": "量级条",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏每极量级条（装饰）",
        "publicKey": "showBars",
        "publicLabel": "量级条",
        "description": "显示/隐藏每极量级条（装饰）"
      },
      {
        "key": "showBadge",
        "label": "分类徽标",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏左上角分类徽标（装饰）",
        "publicKey": "showBadge",
        "publicLabel": "分类徽标",
        "description": "显示/隐藏左上角分类徽标（装饰）"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#c8f135",
        "options": [
          "#c8f135",
          "#ff5a3c",
          "#3ca0ff",
          "#ffd23c"
        ],
        "desc": "主强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "主强调色"
      }
    ],
    "defaultProps": {
      "eyebrowId": "47",
      "eyebrowLabel": "OPEN SOURCE MODELS",
      "title": "社区影响力变现",
      "subhead": "开源模型公司 / OPEN SOURCE",
      "closing": "开源是入口，不是完整商业模式。",
      "convTag": "开源模型赛道 / OSS",
      "hero": {
        "value": "28",
        "unit": "亿$",
        "label": "赛道融资额 / FUNDING"
      },
      "metrics": [
        {
          "k": "事件数 / DEALS",
          "v": "7 笔"
        },
        {
          "k": "平均单笔 / AVG",
          "v": "4.0 亿"
        }
      ],
      "poles": [
        {
          "label": "社区影响力 / REACH",
          "en": "COMMUNITY",
          "value": "2.8亿次",
          "sub": "社区下载量 / DOWNLOADS"
        },
        {
          "label": "商业兑现 / MONETIZED",
          "en": "REVENUE",
          "value": "37%",
          "sub": "企业服务收入占比 / SHARE"
        }
      ],
      "rate": {
        "value": "37%",
        "label": "转化为企业收入 / CONVERT"
      },
      "mediaPlaceholder": "社区到企业转化图 / DROP IMAGE",
      "mediaSlotCount": 1,
      "metricCount": 2,
      "focusEnabled": true,
      "focusIndex": 1,
      "showRate": true,
      "showBars": true,
      "showBadge": true,
      "accent": "#c8f135"
    }
  },
  {
    "key": "theme06_page040",
    "themeKey": "theme06",
    "pageNumber": 40,
    "layout": "THEME06-040",
    "slot": "safety",
    "label": "36 · 安全与对齐工具 / ALIGNMENT",
    "bgClass": "",
    "controls": [
      {
        "key": "chartType",
        "label": "图表类型",
        "type": "select",
        "default": "flow",
        "options": [
          [
            "flow",
            "横向流程"
          ],
          [
            "steps",
            "纵向步骤"
          ]
        ],
        "desc": "数据流的可视化形式",
        "publicKey": "chartType",
        "publicLabel": "图表类型",
        "description": "数据流的可视化形式"
      },
      {
        "key": "stageCount",
        "label": "环节数量",
        "type": "number",
        "default": 4,
        "min": 3,
        "max": 5,
        "desc": "流程环节节点数量",
        "publicKey": "stageCount",
        "publicLabel": "环节数量",
        "description": "流程环节节点数量"
      },
      {
        "key": "metricCount",
        "label": "指标数量",
        "type": "number",
        "default": 2,
        "min": 2,
        "max": 3,
        "desc": "底部辅助指标卡数量",
        "publicKey": "metricCount",
        "publicLabel": "指标数量",
        "description": "底部辅助指标卡数量"
      },
      {
        "key": "focusEnabled",
        "label": "重点环节高亮",
        "type": "toggle",
        "default": true,
        "desc": "是否突出某一流程环节",
        "publicKey": "focusEnabled",
        "publicLabel": "重点环节高亮",
        "description": "是否突出某一流程环节"
      },
      {
        "key": "focusIndex",
        "label": "高亮第几环",
        "type": "number",
        "default": 1,
        "min": 0,
        "max": 4,
        "desc": "被突出的环节序号",
        "publicKey": "focusIndex",
        "publicLabel": "高亮第几环",
        "description": "被突出的环节序号"
      },
      {
        "key": "showConnectors",
        "label": "连接箭头",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏环节之间的连接箭头（装饰，仅横向流程）",
        "publicKey": "showConnectors",
        "publicLabel": "连接箭头",
        "description": "显示/隐藏环节之间的连接箭头（装饰，仅横向流程）"
      },
      {
        "key": "showGrowth",
        "label": "增长指标",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏底部增长指标卡（装饰数据）",
        "publicKey": "showGrowth",
        "publicLabel": "增长指标",
        "description": "显示/隐藏底部增长指标卡（装饰数据）"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#c8f135",
        "options": [
          "#c8f135",
          "#ff5a3c",
          "#3ca0ff",
          "#ffd23c"
        ],
        "desc": "主强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "主强调色"
      }
    ],
    "defaultProps": {
      "eyebrowId": "48",
      "eyebrowLabel": "MODEL ALIGNMENT",
      "title": "安全与对齐工具",
      "subhead": "模型安全公司 / MODEL ALIGNMENT",
      "closing": "可信 AI 会成为企业级 AI 的基础设施。",
      "stages": [
        {
          "name": "模型评测",
          "en": "EVALUATION",
          "tag": "基准 / 8 亿"
        },
        {
          "name": "对齐工具",
          "en": "ALIGNMENT",
          "tag": "价值对齐 / 7 亿"
        },
        {
          "name": "红队测试",
          "en": "RED TEAM",
          "tag": "对抗探测 / 6 亿"
        },
        {
          "name": "合规监测",
          "en": "COMPLIANCE",
          "tag": "持续监控"
        }
      ],
      "hero": {
        "value": "21",
        "unit": "亿$",
        "label": "赛道融资额 / FUNDING"
      },
      "growth": {
        "value": "+0",
        "label": "—"
      },
      "metrics": [
        {
          "k": "事件数 / DEALS",
          "v": "5 笔"
        },
        {
          "k": "平均单笔 / AVG",
          "v": "4.2 亿"
        },
        {
          "k": "评测平台 / EVAL",
          "v": "8 亿"
        }
      ],
      "chartType": "flow",
      "stageCount": 4,
      "metricCount": 3,
      "focusEnabled": true,
      "focusIndex": 1,
      "showConnectors": true,
      "showGrowth": false,
      "accent": "#c8f135"
    }
  },
  {
    "key": "theme06_page041",
    "themeKey": "theme06",
    "pageNumber": 41,
    "layout": "THEME06-041",
    "slot": "ch04",
    "label": "37 · 资本与地区结构 / CHAPTER 04",
    "bgClass": "",
    "controls": [
      {
        "key": "background",
        "label": "背景形态",
        "type": "select",
        "default": "glow",
        "options": [
          [
            "glow",
            "光晕"
          ],
          [
            "solid",
            "纯色"
          ],
          [
            "panel",
            "色块"
          ]
        ],
        "desc": "分隔页背景的呈现形式",
        "publicKey": "background",
        "publicLabel": "背景形态",
        "description": "分隔页背景的呈现形式"
      },
      {
        "key": "showIndex",
        "label": "大号章节号",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏超大章节编号",
        "publicKey": "showIndex",
        "publicLabel": "大号章节号",
        "description": "显示/隐藏超大章节编号"
      },
      {
        "key": "keywordCount",
        "label": "关键词数量",
        "type": "number",
        "default": 4,
        "min": 0,
        "max": 6,
        "desc": "底部关键词标签数量（0 隐藏）",
        "publicKey": "keywordCount",
        "publicLabel": "关键词数量",
        "description": "底部关键词标签数量（0 隐藏）"
      },
      {
        "key": "focusEnabled",
        "label": "关键词高亮",
        "type": "toggle",
        "default": false,
        "desc": "是否高亮某个关键词标签",
        "publicKey": "focusEnabled",
        "publicLabel": "关键词高亮",
        "description": "是否高亮某个关键词标签"
      },
      {
        "key": "focusIndex",
        "label": "高亮第几个",
        "type": "number",
        "default": 0,
        "min": 0,
        "max": 5,
        "desc": "被高亮的关键词序号",
        "publicKey": "focusIndex",
        "publicLabel": "高亮第几个",
        "description": "被高亮的关键词序号"
      },
      {
        "key": "showWatermark",
        "label": "背景大字",
        "type": "toggle",
        "default": false,
        "desc": "显示/隐藏背景巨型水印字（装饰）",
        "publicKey": "showWatermark",
        "publicLabel": "背景大字",
        "description": "显示/隐藏背景巨型水印字（装饰）"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#c8f135",
        "options": [
          "#c8f135",
          "#ff5a3c",
          "#3ca0ff",
          "#ffd23c"
        ],
        "desc": "主强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "主强调色"
      }
    ],
    "defaultProps": {
      "eyebrowId": "CH",
      "eyebrowLabel": "CHAPTER 04",
      "chapterNo": "04",
      "title": "资本与地区结构",
      "subhead": "轮次 · 投资人 · 地理集群 / CAPITAL & GEOGRAPHY",
      "closing": "下一组页面进入资本结构的拆解。",
      "keywords": [
        "后期轮",
        "战略投资",
        "云资源",
        "湾区",
        "纽约",
        "西雅图"
      ],
      "watermark": "04",
      "showIndex": true,
      "keywordCount": 6,
      "focusEnabled": false,
      "focusIndex": 0,
      "background": "glow",
      "showWatermark": false,
      "accent": "#c8f135"
    }
  },
  {
    "key": "theme06_page042",
    "themeKey": "theme06",
    "pageNumber": 42,
    "layout": "THEME06-042",
    "slot": "rounds",
    "label": "38 · 新主题萌芽 / EARLY-STAGE SIGNAL",
    "bgClass": "",
    "controls": [
      {
        "key": "chartType",
        "label": "规模可视化",
        "type": "select",
        "default": "bubbles",
        "options": [
          [
            "bubbles",
            "气泡"
          ],
          [
            "bars",
            "条形"
          ],
          [
            "dots",
            "点阵"
          ]
        ],
        "desc": "阶段相对规模的可视化形式",
        "publicKey": "chartType",
        "publicLabel": "规模可视化",
        "description": "阶段相对规模的可视化形式"
      },
      {
        "key": "rowCount",
        "label": "阶段数量",
        "type": "number",
        "default": 4,
        "min": 2,
        "max": 4,
        "desc": "展示的阶段行数",
        "publicKey": "rowCount",
        "publicLabel": "阶段数量",
        "description": "展示的阶段行数"
      },
      {
        "key": "tagCount",
        "label": "主题标签数",
        "type": "number",
        "default": 4,
        "min": 0,
        "max": 6,
        "desc": "右栏萌芽主题标签数量（0 隐藏）",
        "publicKey": "tagCount",
        "publicLabel": "主题标签数",
        "description": "右栏萌芽主题标签数量（0 隐藏）"
      },
      {
        "key": "showShare",
        "label": "重点占比",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏右栏重点占比大数字（装饰锚点）",
        "publicKey": "showShare",
        "publicLabel": "重点占比",
        "description": "显示/隐藏右栏重点占比大数字（装饰锚点）"
      },
      {
        "key": "showValueLabels",
        "label": "数值标签",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏笔数 / 数值 / 平均标签（装饰数据）",
        "publicKey": "showValueLabels",
        "publicLabel": "数值标签",
        "description": "显示/隐藏笔数 / 数值 / 平均标签（装饰数据）"
      },
      {
        "key": "focusEnabled",
        "label": "重点行高亮",
        "type": "toggle",
        "default": true,
        "desc": "是否突出某一阶段行",
        "publicKey": "focusEnabled",
        "publicLabel": "重点行高亮",
        "description": "是否突出某一阶段行"
      },
      {
        "key": "focusIndex",
        "label": "高亮第几行",
        "type": "number",
        "default": 2,
        "min": 0,
        "max": 3,
        "desc": "被突出的阶段序号",
        "publicKey": "focusIndex",
        "publicLabel": "高亮第几行",
        "description": "被突出的阶段序号"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#c8f135",
        "options": [
          "#c8f135",
          "#ff5a3c",
          "#3ca0ff",
          "#ffd23c"
        ],
        "desc": "主强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "主强调色"
      }
    ],
    "defaultProps": {
      "eyebrowId": "50",
      "eyebrowLabel": "EARLY-STAGE SIGNAL",
      "title": "新主题萌芽",
      "subhead": "早期轮信号 / EARLY-STAGE SIGNAL",
      "closing": "小金额交易往往藏着下一轮主题。",
      "unitCount": " 笔",
      "unitAmount": " 亿",
      "rounds": [
        {
          "name": "Pre-Seed",
          "en": "PRE-SEED",
          "count": 5,
          "amount": 0.6
        },
        {
          "name": "Seed",
          "en": "SEED ROUND",
          "count": 8,
          "amount": 1.2
        },
        {
          "name": "A 轮",
          "en": "SERIES A",
          "count": 12,
          "amount": 1.8
        },
        {
          "name": "B 轮",
          "en": "SERIES B",
          "count": 9,
          "amount": 3.4
        }
      ],
      "share": {
        "value": "20.6",
        "unit": "%",
        "label": "早期轮占事件数 / OF ALL DEALS"
      },
      "tags": [
        "Agent",
        "安全对齐",
        "具身智能",
        "行业专用模型",
        "推理优化",
        "数据合成"
      ],
      "railCaption": "信号读数 / SIGNAL",
      "chartType": "bubbles",
      "rowCount": 4,
      "tagCount": 4,
      "showShare": true,
      "showValueLabels": true,
      "focusEnabled": true,
      "focusIndex": 2,
      "accent": "#c8f135"
    }
  },
  {
    "key": "theme06_page043",
    "themeKey": "theme06",
    "pageNumber": 43,
    "layout": "THEME06-043",
    "slot": "dealstruct",
    "label": "39 · 复杂交易结构 / DEAL STRUCTURE",
    "bgClass": "",
    "controls": [
      {
        "key": "chartType",
        "label": "结构形态",
        "type": "select",
        "default": "stacked",
        "options": [
          [
            "stacked",
            "堆叠列"
          ],
          [
            "bars",
            "条形"
          ],
          [
            "segments",
            "卡片"
          ]
        ],
        "desc": "交易结构拆解的可视化形式",
        "publicKey": "chartType",
        "publicLabel": "结构形态",
        "description": "交易结构拆解的可视化形式"
      },
      {
        "key": "partCount",
        "label": "结构项数",
        "type": "number",
        "default": 4,
        "min": 2,
        "max": 4,
        "desc": "展示的结构组成项数量",
        "publicKey": "partCount",
        "publicLabel": "结构项数",
        "description": "展示的结构组成项数量"
      },
      {
        "key": "mediaSlotCount",
        "label": "图片槽数量",
        "type": "number",
        "default": 1,
        "min": 0,
        "max": 2,
        "desc": "右侧自适应图片槽数量（0 时结构列加宽；上传后按图片比例自适应，构图随数量重排）",
        "publicKey": "mediaSlotCount",
        "publicLabel": "图片槽数量",
        "description": "右侧自适应图片槽数量（0 时结构列加宽；上传后按图片比例自适应，构图随数量重排）"
      },
      {
        "key": "metricCount",
        "label": "指标数量",
        "type": "number",
        "default": 2,
        "min": 1,
        "max": 3,
        "desc": "左侧辅助指标数量",
        "publicKey": "metricCount",
        "publicLabel": "指标数量",
        "description": "左侧辅助指标数量"
      },
      {
        "key": "focusEnabled",
        "label": "重点结构高亮",
        "type": "toggle",
        "default": true,
        "desc": "是否突出某一结构组成项",
        "publicKey": "focusEnabled",
        "publicLabel": "重点结构高亮",
        "description": "是否突出某一结构组成项"
      },
      {
        "key": "focusIndex",
        "label": "高亮第几项",
        "type": "number",
        "default": 0,
        "min": 0,
        "max": 3,
        "desc": "被突出的结构序号",
        "publicKey": "focusIndex",
        "publicLabel": "高亮第几项",
        "description": "被突出的结构序号"
      },
      {
        "key": "showConnectors",
        "label": "刻度合计",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏结构合计刻度（装饰）",
        "publicKey": "showConnectors",
        "publicLabel": "刻度合计",
        "description": "显示/隐藏结构合计刻度（装饰）"
      },
      {
        "key": "showValueLabels",
        "label": "数值标签",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏各结构项占比标签（装饰数据）",
        "publicKey": "showValueLabels",
        "publicLabel": "数值标签",
        "description": "显示/隐藏各结构项占比标签（装饰数据）"
      },
      {
        "key": "showBadge",
        "label": "结构徽标",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏左上角结构徽标（装饰）",
        "publicKey": "showBadge",
        "publicLabel": "结构徽标",
        "description": "显示/隐藏左上角结构徽标（装饰）"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#c8f135",
        "options": [
          "#c8f135",
          "#ff5a3c",
          "#3ca0ff",
          "#ffd23c"
        ],
        "desc": "主强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "主强调色"
      }
    ],
    "defaultProps": {
      "eyebrowId": "51",
      "eyebrowLabel": "UNDISCLOSED MEGA",
      "title": "复杂交易结构",
      "subhead": "未披露巨额轮次 / UNDISCLOSED MEGA ROUNDS",
      "closing": "AI 融资越来越像资源组合交易。",
      "structTag": "未披露轮次 / UNDISCLOSED",
      "hero": {
        "value": "18.6",
        "unit": "亿$",
        "label": "平均单笔规模 / AVG TICKET"
      },
      "metrics": [
        {
          "k": "事件数 / DEALS",
          "v": "22 笔"
        },
        {
          "k": "云资源绑定 / CLOUD",
          "v": "39%"
        },
        {
          "k": "战略投资 / STRATEGIC",
          "v": "31%"
        }
      ],
      "parts": [
        {
          "name": "云资源置换",
          "en": "CLOUD CREDITS",
          "value": 39
        },
        {
          "name": "战略投资",
          "en": "STRATEGIC",
          "value": 31
        },
        {
          "name": "现金对价",
          "en": "CASH",
          "value": 18
        },
        {
          "name": "债务组合",
          "en": "DEBT MIX",
          "value": 12
        }
      ],
      "mediaPlaceholder": "交易结构示意 / DROP IMAGE",
      "railCaption": "交易结构拆解 / STRUCTURE",
      "chartType": "stacked",
      "partCount": 4,
      "mediaSlotCount": 1,
      "metricCount": 2,
      "focusEnabled": true,
      "focusIndex": 0,
      "showConnectors": true,
      "showValueLabels": true,
      "showBadge": true,
      "accent": "#c8f135"
    }
  },
  {
    "key": "theme06_page044",
    "themeKey": "theme06",
    "pageNumber": 44,
    "layout": "THEME06-044",
    "slot": "investor",
    "label": "40 · 资本来源结构 / INVESTOR MIX",
    "bgClass": "",
    "controls": [
      {
        "key": "chartType",
        "label": "图表类型",
        "type": "select",
        "default": "donut",
        "options": [
          [
            "donut",
            "环形"
          ],
          [
            "ring",
            "细环"
          ],
          [
            "bars",
            "条形"
          ]
        ],
        "desc": "占比的可视化形式",
        "publicKey": "chartType",
        "publicLabel": "图表类型",
        "description": "占比的可视化形式"
      },
      {
        "key": "segmentCount",
        "label": "占比项数",
        "type": "number",
        "default": 4,
        "min": 2,
        "max": 4,
        "desc": "展示的占比项数量",
        "publicKey": "segmentCount",
        "publicLabel": "占比项数",
        "description": "展示的占比项数量"
      },
      {
        "key": "showCenter",
        "label": "中心数字",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏圆环中心的主数字（装饰，仅环形）",
        "publicKey": "showCenter",
        "publicLabel": "中心数字",
        "description": "显示/隐藏圆环中心的主数字（装饰，仅环形）"
      },
      {
        "key": "showValueLabels",
        "label": "数值标签",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏各项占比标签（装饰数据）",
        "publicKey": "showValueLabels",
        "publicLabel": "数值标签",
        "description": "显示/隐藏各项占比标签（装饰数据）"
      },
      {
        "key": "focusEnabled",
        "label": "重点占比高亮",
        "type": "toggle",
        "default": true,
        "desc": "是否拉出并突出某一占比项",
        "publicKey": "focusEnabled",
        "publicLabel": "重点占比高亮",
        "description": "是否拉出并突出某一占比项"
      },
      {
        "key": "focusIndex",
        "label": "高亮第几项",
        "type": "number",
        "default": 0,
        "min": 0,
        "max": 3,
        "desc": "被突出的占比序号",
        "publicKey": "focusIndex",
        "publicLabel": "高亮第几项",
        "description": "被突出的占比序号"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#c8f135",
        "options": [
          "#c8f135",
          "#ff5a3c",
          "#3ca0ff",
          "#ffd23c"
        ],
        "desc": "主强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "主强调色"
      }
    ],
    "defaultProps": {
      "eyebrowId": "52",
      "eyebrowLabel": "INVESTOR MIX",
      "title": "资本来源结构",
      "subhead": "投资人类型分布 / INVESTOR MIX",
      "unit": "%",
      "closing": "钱的来源本身也是产业结构信号。",
      "hero": {
        "value": "40",
        "unit": "%",
        "label": "产业资本合计 / STRATEGIC CAPITAL"
      },
      "segments": [
        {
          "name": "传统 VC",
          "en": "VENTURE CAPITAL",
          "value": 42
        },
        {
          "name": "企业战略",
          "en": "CORPORATE",
          "value": 27
        },
        {
          "name": "成长基金",
          "en": "GROWTH FUND",
          "value": 18
        },
        {
          "name": "云厂商相关",
          "en": "CLOUD-LINKED",
          "value": 13
        }
      ],
      "metrics": [
        {
          "k": "覆盖事件 / DEALS",
          "v": "97 笔"
        },
        {
          "k": "产业资本占比 / STRATEGIC",
          "v": "40%"
        }
      ],
      "chartType": "donut",
      "segmentCount": 4,
      "showCenter": true,
      "showValueLabels": true,
      "focusEnabled": true,
      "focusIndex": 1,
      "accent": "#c8f135"
    }
  },
  {
    "key": "theme06_page045",
    "themeKey": "theme06",
    "pageNumber": 45,
    "layout": "THEME06-045",
    "slot": "resource",
    "label": "41 · 钱以外的资源 / STRATEGIC RESOURCES",
    "bgClass": "",
    "controls": [
      {
        "key": "cardCount",
        "label": "资源卡数量",
        "type": "number",
        "default": 4,
        "min": 2,
        "max": 4,
        "desc": "展示的资源类型卡数量",
        "publicKey": "cardCount",
        "publicLabel": "资源卡数量",
        "description": "展示的资源类型卡数量"
      },
      {
        "key": "layout",
        "label": "卡片排布",
        "type": "select",
        "default": "grid",
        "options": [
          [
            "grid",
            "网格"
          ],
          [
            "rows",
            "列表"
          ]
        ],
        "desc": "资源卡的排列方式",
        "publicKey": "layout",
        "publicLabel": "卡片排布",
        "description": "资源卡的排列方式"
      },
      {
        "key": "mediaSlotCount",
        "label": "图片槽数量",
        "type": "number",
        "default": 1,
        "min": 0,
        "max": 2,
        "desc": "右侧自适应图片槽数量（0 时卡片占满整宽；上传后按图片比例自适应，构图随数量重排）",
        "publicKey": "mediaSlotCount",
        "publicLabel": "图片槽数量",
        "description": "右侧自适应图片槽数量（0 时卡片占满整宽；上传后按图片比例自适应，构图随数量重排）"
      },
      {
        "key": "focusEnabled",
        "label": "重点卡高亮",
        "type": "toggle",
        "default": true,
        "desc": "是否突出某一资源卡",
        "publicKey": "focusEnabled",
        "publicLabel": "重点卡高亮",
        "description": "是否突出某一资源卡"
      },
      {
        "key": "focusIndex",
        "label": "高亮第几张",
        "type": "number",
        "default": 0,
        "min": 0,
        "max": 3,
        "desc": "被突出的资源卡序号",
        "publicKey": "focusIndex",
        "publicLabel": "高亮第几张",
        "description": "被突出的资源卡序号"
      },
      {
        "key": "showKind",
        "label": "类型标签",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏每张卡的类型标签（装饰）",
        "publicKey": "showKind",
        "publicLabel": "类型标签",
        "description": "显示/隐藏每张卡的类型标签（装饰）"
      },
      {
        "key": "showBadge",
        "label": "资源徽标",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏卡片区徽标（装饰）",
        "publicKey": "showBadge",
        "publicLabel": "资源徽标",
        "description": "显示/隐藏卡片区徽标（装饰）"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#c8f135",
        "options": [
          "#c8f135",
          "#ff5a3c",
          "#3ca0ff",
          "#ffd23c"
        ],
        "desc": "主强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "主强调色"
      }
    ],
    "defaultProps": {
      "eyebrowId": "53",
      "eyebrowLabel": "STRATEGIC INVESTORS",
      "title": "钱以外的资源",
      "subhead": "战略投资者角色 / BEYOND CAPITAL",
      "closing": "AI 公司融资是在锁定未来资源。",
      "resTag": "战略资源 / RESOURCES",
      "railCaption": "资源类型 / RESOURCE TYPES",
      "resources": [
        {
          "kind": "授信",
          "name": "云资源授信",
          "en": "CLOUD CREDIT LINE",
          "value": "118",
          "unit": "亿$"
        },
        {
          "kind": "渠道",
          "name": "联合销售",
          "en": "CO-SELL DEALS",
          "value": "36",
          "unit": "起"
        },
        {
          "kind": "供应",
          "name": "芯片供应承诺",
          "en": "CHIP SUPPLY",
          "value": "22",
          "unit": "起"
        },
        {
          "kind": "数据",
          "name": "数据合作",
          "en": "DATA PARTNERSHIP",
          "value": "17",
          "unit": "起"
        }
      ],
      "mediaPlaceholder": "资源类型示意 / DROP IMAGE",
      "cardCount": 4,
      "layout": "grid",
      "mediaSlotCount": 1,
      "focusEnabled": true,
      "focusIndex": 0,
      "showKind": true,
      "showBadge": true,
      "accent": "#c8f135"
    }
  },
  {
    "key": "theme06_page046",
    "themeKey": "theme06",
    "pageNumber": 46,
    "layout": "THEME06-046",
    "slot": "alliance",
    "label": "42 · 投资与算力消费闭环 / CLOUD ALLIANCES",
    "bgClass": "",
    "controls": [
      {
        "key": "chartType",
        "label": "图表类型",
        "type": "select",
        "default": "flow",
        "options": [
          [
            "flow",
            "关系流"
          ],
          [
            "bars",
            "条形"
          ],
          [
            "dots",
            "点阵"
          ]
        ],
        "desc": "云厂商联盟的可视化形式",
        "publicKey": "chartType",
        "publicLabel": "图表类型",
        "description": "云厂商联盟的可视化形式"
      },
      {
        "key": "providerCount",
        "label": "云厂商数量",
        "type": "number",
        "default": 4,
        "min": 2,
        "max": 4,
        "desc": "展示的云厂商节点数量",
        "publicKey": "providerCount",
        "publicLabel": "云厂商数量",
        "description": "展示的云厂商节点数量"
      },
      {
        "key": "showLoop",
        "label": "闭环条",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏底部投资—消费闭环条（装饰）",
        "publicKey": "showLoop",
        "publicLabel": "闭环条",
        "description": "显示/隐藏底部投资—消费闭环条（装饰）"
      },
      {
        "key": "showValueLabels",
        "label": "数值标签",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏各云厂商数值标签（装饰数据）",
        "publicKey": "showValueLabels",
        "publicLabel": "数值标签",
        "description": "显示/隐藏各云厂商数值标签（装饰数据）"
      },
      {
        "key": "showHub",
        "label": "汇聚总额",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏汇聚节点总额（装饰，仅关系流）",
        "publicKey": "showHub",
        "publicLabel": "汇聚总额",
        "description": "显示/隐藏汇聚节点总额（装饰，仅关系流）"
      },
      {
        "key": "focusEnabled",
        "label": "重点云厂商高亮",
        "type": "toggle",
        "default": true,
        "desc": "是否突出某一云厂商流",
        "publicKey": "focusEnabled",
        "publicLabel": "重点云厂商高亮",
        "description": "是否突出某一云厂商流"
      },
      {
        "key": "focusIndex",
        "label": "高亮第几家",
        "type": "number",
        "default": 0,
        "min": 0,
        "max": 3,
        "desc": "被突出的云厂商序号",
        "publicKey": "focusIndex",
        "publicLabel": "高亮第几家",
        "description": "被突出的云厂商序号"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#c8f135",
        "options": [
          "#c8f135",
          "#ff5a3c",
          "#3ca0ff",
          "#ffd23c"
        ],
        "desc": "主强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "主强调色"
      }
    ],
    "defaultProps": {
      "eyebrowId": "54",
      "eyebrowLabel": "CLOUD ALLIANCES",
      "title": "投资与算力消费闭环",
      "subhead": "云厂商联盟 / CLOUD ALLIANCES",
      "unit": "亿$",
      "closing": "云资源正在成为融资交易的一部分。",
      "providers": [
        {
          "name": "Azure",
          "en": "MICROSOFT",
          "value": 88
        },
        {
          "name": "AWS",
          "en": "AMAZON",
          "value": 74
        },
        {
          "name": "Google Cloud",
          "en": "ALPHABET",
          "value": 69
        },
        {
          "name": "Oracle Cloud",
          "en": "ORACLE",
          "value": 21
        }
      ],
      "hub": {
        "name": "AI 模型公司",
        "en": "AI MODEL CO.",
        "label": "算力消费需求 / COMPUTE DEMAND"
      },
      "loop": {
        "a": "云厂商",
        "fwd": "资本投资 INVEST",
        "b": "AI 公司",
        "back": "算力消费 CONSUME"
      },
      "chartType": "flow",
      "providerCount": 4,
      "showLoop": true,
      "showValueLabels": true,
      "showHub": true,
      "focusEnabled": true,
      "focusIndex": 0,
      "accent": "#c8f135"
    }
  },
  {
    "key": "theme06_page047",
    "themeKey": "theme06",
    "pageNumber": 47,
    "layout": "THEME06-047",
    "slot": "gpu",
    "label": "43 · GPU 资源链条 / NVIDIA ECOSYSTEM",
    "bgClass": "",
    "controls": [
      {
        "key": "branchCount",
        "label": "分支数量",
        "type": "number",
        "default": 3,
        "min": 2,
        "max": 4,
        "desc": "结构图的分支节点数量",
        "publicKey": "branchCount",
        "publicLabel": "分支数量",
        "description": "结构图的分支节点数量"
      },
      {
        "key": "mediaSlotCount",
        "label": "图片槽数量",
        "type": "number",
        "default": 1,
        "min": 0,
        "max": 2,
        "desc": "右侧自适应图片槽数量（0 时分支列加宽；上传后按图片比例自适应，构图随数量重排）",
        "publicKey": "mediaSlotCount",
        "publicLabel": "图片槽数量",
        "description": "右侧自适应图片槽数量（0 时分支列加宽；上传后按图片比例自适应，构图随数量重排）"
      },
      {
        "key": "metricCount",
        "label": "指标数量",
        "type": "number",
        "default": 2,
        "min": 1,
        "max": 3,
        "desc": "根节点下方辅助指标数量",
        "publicKey": "metricCount",
        "publicLabel": "指标数量",
        "description": "根节点下方辅助指标数量"
      },
      {
        "key": "focusEnabled",
        "label": "重点分支高亮",
        "type": "toggle",
        "default": true,
        "desc": "是否突出某一分支节点",
        "publicKey": "focusEnabled",
        "publicLabel": "重点分支高亮",
        "description": "是否突出某一分支节点"
      },
      {
        "key": "focusIndex",
        "label": "高亮第几支",
        "type": "number",
        "default": 0,
        "min": 0,
        "max": 3,
        "desc": "被突出的分支序号",
        "publicKey": "focusIndex",
        "publicLabel": "高亮第几支",
        "description": "被突出的分支序号"
      },
      {
        "key": "showTrunk",
        "label": "连接主干",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏连接主干与节点圆点（装饰）",
        "publicKey": "showTrunk",
        "publicLabel": "连接主干",
        "description": "显示/隐藏连接主干与节点圆点（装饰）"
      },
      {
        "key": "showValueBars",
        "label": "数值条",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏每支数值条（装饰数据）",
        "publicKey": "showValueLabels",
        "publicLabel": "数值条",
        "description": "显示/隐藏每支数值条（装饰数据）"
      },
      {
        "key": "showRootBadge",
        "label": "分类徽标",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏左上角分类徽标（装饰）",
        "publicKey": "showRootBadge",
        "publicLabel": "分类徽标",
        "description": "显示/隐藏左上角分类徽标（装饰）"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#c8f135",
        "options": [
          "#c8f135",
          "#ff5a3c",
          "#3ca0ff",
          "#ffd23c"
        ],
        "desc": "主强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "主强调色"
      }
    ],
    "defaultProps": {
      "eyebrowId": "55",
      "eyebrowLabel": "NVIDIA ECOSYSTEM",
      "title": "GPU 资源链条",
      "subhead": "NVIDIA 生态 / NVIDIA ECOSYSTEM",
      "closing": "算力供给能力正在变成融资能力。",
      "rootTag": "NVIDIA 生态 / GPU",
      "hero": {
        "value": "92",
        "unit": "亿$",
        "label": "生态融资额 / ECOSYSTEM FUNDING"
      },
      "metrics": [
        {
          "k": "GPU 云占比 / GPU CLOUD",
          "v": "70%"
        },
        {
          "k": "核心环节 / NODES",
          "v": "4 类"
        }
      ],
      "branches": [
        {
          "name": "GPU 云",
          "en": "GPU CLOUD",
          "value": 64,
          "unit": " 亿"
        },
        {
          "name": "集群管理",
          "en": "CLUSTER OPS",
          "value": 12,
          "unit": " 亿"
        },
        {
          "name": "推理优化",
          "en": "INFERENCE OPT",
          "value": 9,
          "unit": " 亿"
        },
        {
          "name": "芯片互联",
          "en": "INTERCONNECT",
          "value": 7,
          "unit": " 亿"
        }
      ],
      "mediaPlaceholder": "GPU 为中心的生态环图 / DROP IMAGE",
      "branchCount": 4,
      "mediaSlotCount": 1,
      "metricCount": 2,
      "focusEnabled": true,
      "focusIndex": 0,
      "showTrunk": true,
      "showValueBars": true,
      "showRootBadge": true,
      "accent": "#c8f135"
    }
  },
  {
    "key": "theme06_page048",
    "themeKey": "theme06",
    "pageNumber": 48,
    "layout": "THEME06-048",
    "slot": "bay",
    "label": "44 · 最大地理中心 / BAY AREA",
    "bgClass": "",
    "controls": [
      {
        "key": "metricCount",
        "label": "辅助指标数量",
        "type": "number",
        "default": 3,
        "min": 0,
        "max": 3,
        "desc": "大数字下方的辅助指标数量（0 隐藏）",
        "publicKey": "metricCount",
        "publicLabel": "辅助指标数量",
        "description": "大数字下方的辅助指标数量（0 隐藏）"
      },
      {
        "key": "align",
        "label": "对齐方式",
        "type": "select",
        "default": "left",
        "options": [
          [
            "left",
            "左对齐"
          ],
          [
            "center",
            "居中"
          ]
        ],
        "desc": "主数字区域的对齐方式",
        "publicKey": "align",
        "publicLabel": "对齐方式",
        "description": "主数字区域的对齐方式"
      },
      {
        "key": "showWatermark",
        "label": "背景大字",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏背景水印字（装饰）",
        "publicKey": "showWatermark",
        "publicLabel": "背景大字",
        "description": "显示/隐藏背景水印字（装饰）"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#c8f135",
        "options": [
          "#c8f135",
          "#ff5a3c",
          "#3ca0ff",
          "#ffd23c"
        ],
        "desc": "主强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "主强调色"
      }
    ],
    "defaultProps": {
      "eyebrowId": "56",
      "eyebrowLabel": "BAY AREA CLUSTER",
      "kicker": "一个城市群，吸走了全美 AI 大额融资的大半。",
      "figure": "63.9",
      "unit": "%",
      "explain": "<b>旧金山湾区</b> 融资额占比——优势来自人才密度、资本网络、云厂商与模型实验室邻近。",
      "closing": "湾区仍是 AI 资本重力中心。",
      "watermark": "BAY",
      "metrics": [
        {
          "k": "全年融资 / TOTAL",
          "v": "$97B"
        },
        {
          "k": "大额事件 / DEALS",
          "v": "97 笔"
        },
        {
          "k": "次位·纽约 / NEXT",
          "v": "12.4%"
        }
      ],
      "metricCount": 3,
      "align": "center",
      "showWatermark": true,
      "accent": "#c8f135"
    }
  },
  {
    "key": "theme06_page049",
    "themeKey": "theme06",
    "pageNumber": 49,
    "layout": "THEME06-049",
    "slot": "nyc",
    "label": "45 · 行业客户优势 / NEW YORK",
    "bgClass": "",
    "controls": [
      {
        "key": "layout",
        "label": "右栏形式",
        "type": "select",
        "default": "media",
        "options": [
          [
            "media",
            "图文"
          ],
          [
            "map",
            "分布气泡"
          ]
        ],
        "desc": "右栏的呈现形式：集群图片主导 / 地区占比气泡图",
        "publicKey": "layout",
        "publicLabel": "右栏形式",
        "description": "右栏的呈现形式：集群图片主导 / 地区占比气泡图"
      },
      {
        "key": "mediaSlotCount",
        "label": "图片槽数量",
        "type": "number",
        "default": 1,
        "min": 0,
        "max": 2,
        "desc": "右侧自适应图片槽数量（0 改为地区分布面板；上传后按图片比例自适应，构图随数量重排）",
        "publicKey": "mediaSlotCount",
        "publicLabel": "图片槽数量",
        "description": "右侧自适应图片槽数量（0 改为地区分布面板；上传后按图片比例自适应，构图随数量重排）"
      },
      {
        "key": "regionCount",
        "label": "气泡地区数",
        "type": "number",
        "default": 5,
        "min": 3,
        "max": 5,
        "desc": "气泡图中展示的地区数量",
        "publicKey": "regionCount",
        "publicLabel": "气泡地区数",
        "description": "气泡图中展示的地区数量"
      },
      {
        "key": "metricCount",
        "label": "指标数量",
        "type": "number",
        "default": 3,
        "min": 2,
        "max": 3,
        "desc": "左侧辅助指标卡数量",
        "publicKey": "metricCount",
        "publicLabel": "指标数量",
        "description": "左侧辅助指标卡数量"
      },
      {
        "key": "tagCount",
        "label": "分类标签数",
        "type": "number",
        "default": 4,
        "min": 0,
        "max": 6,
        "desc": "左下分类标签芯片数量（0 隐藏整行）",
        "publicKey": "categoryCount",
        "publicLabel": "分类标签数",
        "description": "左下分类标签芯片数量（0 隐藏整行）"
      },
      {
        "key": "focusEnabled",
        "label": "重点指标高亮",
        "type": "toggle",
        "default": true,
        "desc": "是否突出某一指标卡",
        "publicKey": "focusEnabled",
        "publicLabel": "重点指标高亮",
        "description": "是否突出某一指标卡"
      },
      {
        "key": "focusIndex",
        "label": "高亮第几个",
        "type": "number",
        "default": 0,
        "min": 0,
        "max": 2,
        "desc": "被突出的指标序号",
        "publicKey": "focusIndex",
        "publicLabel": "高亮第几个",
        "description": "被突出的指标序号"
      },
      {
        "key": "showShareBar",
        "label": "占比对照条",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏占全国数值对照条（装饰数据）",
        "publicKey": "showValueLabels",
        "publicLabel": "占比对照条",
        "description": "显示/隐藏占全国数值对照条（装饰数据）"
      },
      {
        "key": "showTagBadge",
        "label": "集群徽标",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏左上角集群徽标（装饰）",
        "publicKey": "showTagBadge",
        "publicLabel": "集群徽标",
        "description": "显示/隐藏左上角集群徽标（装饰）"
      },
      {
        "key": "showNote",
        "label": "一句话判断",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏左下一句话判断（装饰文案）",
        "publicKey": "showNote",
        "publicLabel": "一句话判断",
        "description": "显示/隐藏左下一句话判断（装饰文案）"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#c8f135",
        "options": [
          "#c8f135",
          "#ff5a3c",
          "#3ca0ff",
          "#ffd23c"
        ],
        "desc": "主强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "主强调色"
      }
    ],
    "defaultProps": {
      "eyebrowId": "57",
      "eyebrowLabel": "NEW YORK CLUSTER",
      "title": "行业客户优势",
      "subhead": "纽约集群 / NEW YORK",
      "closing": "行业客户密度决定垂直应用机会。",
      "clusterTag": "纽约集群 / NYC",
      "hero": {
        "value": "12.4",
        "unit": "%",
        "label": "占全国融资额 / SHARE OF TOTAL"
      },
      "metrics": [
        {
          "k": "融资额 / FUNDING",
          "v": "120 亿$"
        },
        {
          "k": "事件数 / DEALS",
          "v": "14 笔"
        },
        {
          "k": "平均单笔 / AVG",
          "v": "8.6 亿$"
        }
      ],
      "tags": [
        "金融 / FINANCE",
        "媒体 / MEDIA",
        "企业服务 / ENTERPRISE",
        "法律 AI / LEGAL"
      ],
      "note": "纽约的优势不在基础模型，而在高价值行业客户——行业客户密度决定垂直应用机会。",
      "regions": [
        {
          "name": "旧金山湾区",
          "en": "BAY AREA",
          "value": 63.9
        },
        {
          "name": "纽约",
          "en": "NEW YORK",
          "value": 12.4
        },
        {
          "name": "西雅图",
          "en": "SEATTLE",
          "value": 9.8
        },
        {
          "name": "波士顿",
          "en": "BOSTON",
          "value": 7.7
        },
        {
          "name": "其他地区",
          "en": "OTHER REGIONS",
          "value": 6.2
        }
      ],
      "activeRegion": 1,
      "mediaPlaceholder": "纽约城市/行业客户主视觉 / DROP IMAGE",
      "layout": "media",
      "mediaSlotCount": 1,
      "metricCount": 3,
      "tagCount": 4,
      "regionCount": 5,
      "focusEnabled": true,
      "focusIndex": 0,
      "showShareBar": true,
      "showTagBadge": true,
      "showNote": true,
      "accent": "#c8f135"
    }
  },
  {
    "key": "theme06_page050",
    "themeKey": "theme06",
    "pageNumber": 50,
    "layout": "THEME06-050",
    "slot": "seattle",
    "label": "46 · 云计算人才外溢 / SEATTLE",
    "bgClass": "",
    "controls": [
      {
        "key": "layout",
        "label": "右栏形式",
        "type": "select",
        "default": "media",
        "options": [
          [
            "media",
            "图文"
          ],
          [
            "map",
            "分布气泡"
          ]
        ],
        "desc": "右栏的呈现形式：集群图片主导 / 地区占比气泡图",
        "publicKey": "layout",
        "publicLabel": "右栏形式",
        "description": "右栏的呈现形式：集群图片主导 / 地区占比气泡图"
      },
      {
        "key": "mediaSlotCount",
        "label": "图片槽数量",
        "type": "number",
        "default": 1,
        "min": 0,
        "max": 2,
        "desc": "右侧自适应图片槽数量（0 改为地区分布面板；上传后按图片比例自适应，构图随数量重排）",
        "publicKey": "mediaSlotCount",
        "publicLabel": "图片槽数量",
        "description": "右侧自适应图片槽数量（0 改为地区分布面板；上传后按图片比例自适应，构图随数量重排）"
      },
      {
        "key": "regionCount",
        "label": "气泡地区数",
        "type": "number",
        "default": 5,
        "min": 3,
        "max": 5,
        "desc": "气泡图中展示的地区数量",
        "publicKey": "regionCount",
        "publicLabel": "气泡地区数",
        "description": "气泡图中展示的地区数量"
      },
      {
        "key": "metricCount",
        "label": "指标数量",
        "type": "number",
        "default": 3,
        "min": 2,
        "max": 3,
        "desc": "左侧辅助指标卡数量",
        "publicKey": "metricCount",
        "publicLabel": "指标数量",
        "description": "左侧辅助指标卡数量"
      },
      {
        "key": "tagCount",
        "label": "分类标签数",
        "type": "number",
        "default": 4,
        "min": 0,
        "max": 6,
        "desc": "左下分类标签芯片数量（0 隐藏整行）",
        "publicKey": "categoryCount",
        "publicLabel": "分类标签数",
        "description": "左下分类标签芯片数量（0 隐藏整行）"
      },
      {
        "key": "focusEnabled",
        "label": "重点指标高亮",
        "type": "toggle",
        "default": true,
        "desc": "是否突出某一指标卡",
        "publicKey": "focusEnabled",
        "publicLabel": "重点指标高亮",
        "description": "是否突出某一指标卡"
      },
      {
        "key": "focusIndex",
        "label": "高亮第几个",
        "type": "number",
        "default": 0,
        "min": 0,
        "max": 2,
        "desc": "被突出的指标序号",
        "publicKey": "focusIndex",
        "publicLabel": "高亮第几个",
        "description": "被突出的指标序号"
      },
      {
        "key": "showShareBar",
        "label": "占比对照条",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏占全国数值对照条（装饰数据）",
        "publicKey": "showValueLabels",
        "publicLabel": "占比对照条",
        "description": "显示/隐藏占全国数值对照条（装饰数据）"
      },
      {
        "key": "showTagBadge",
        "label": "集群徽标",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏左上角集群徽标（装饰）",
        "publicKey": "showTagBadge",
        "publicLabel": "集群徽标",
        "description": "显示/隐藏左上角集群徽标（装饰）"
      },
      {
        "key": "showNote",
        "label": "一句话判断",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏左下一句话判断（装饰文案）",
        "publicKey": "showNote",
        "publicLabel": "一句话判断",
        "description": "显示/隐藏左下一句话判断（装饰文案）"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#c8f135",
        "options": [
          "#c8f135",
          "#ff5a3c",
          "#3ca0ff",
          "#ffd23c"
        ],
        "desc": "主强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "主强调色"
      }
    ],
    "defaultProps": {
      "eyebrowId": "58",
      "eyebrowLabel": "SEATTLE CLUSTER",
      "title": "云计算人才外溢",
      "subhead": "西雅图集群 / SEATTLE",
      "closing": "云计算底座带来 AI 基础设施机会。",
      "clusterTag": "西雅图集群 / SEA",
      "hero": {
        "value": "9.8",
        "unit": "%",
        "label": "占全国融资额 / SHARE OF TOTAL"
      },
      "metrics": [
        {
          "k": "融资额 / FUNDING",
          "v": "95 亿$"
        },
        {
          "k": "事件数 / DEALS",
          "v": "10 笔"
        },
        {
          "k": "平均单笔 / AVG",
          "v": "9.5 亿$"
        }
      ],
      "tags": [
        "云生态 / CLOUD",
        "基础设施 / INFRA",
        "开发者工具 / DEVTOOLS",
        "企业 AI / ENTERPRISE"
      ],
      "note": "西雅图受益于云计算生态和大厂工程人才外溢，更适合孕育基础设施、开发者工具和企业 AI。",
      "regions": [
        {
          "name": "旧金山湾区",
          "en": "BAY AREA",
          "value": 63.9
        },
        {
          "name": "纽约",
          "en": "NEW YORK",
          "value": 12.4
        },
        {
          "name": "西雅图",
          "en": "SEATTLE",
          "value": 9.8
        },
        {
          "name": "波士顿",
          "en": "BOSTON",
          "value": 7.7
        },
        {
          "name": "其他地区",
          "en": "OTHER REGIONS",
          "value": 6.2
        }
      ],
      "activeRegion": 2,
      "mediaPlaceholder": "西雅图云生态主视觉 / DROP IMAGE",
      "layout": "media",
      "mediaSlotCount": 1,
      "metricCount": 3,
      "tagCount": 4,
      "regionCount": 5,
      "focusEnabled": true,
      "focusIndex": 0,
      "showShareBar": true,
      "showTagBadge": true,
      "showNote": true,
      "accent": "#c8f135"
    }
  },
  {
    "key": "theme06_page051",
    "themeKey": "theme06",
    "pageNumber": 51,
    "layout": "THEME06-051",
    "slot": "boston",
    "label": "47 · 科研与硬科技 / BOSTON",
    "bgClass": "",
    "controls": [
      {
        "key": "layout",
        "label": "右栏形式",
        "type": "select",
        "default": "media",
        "options": [
          [
            "media",
            "图文"
          ],
          [
            "map",
            "分布气泡"
          ]
        ],
        "desc": "右栏的呈现形式：集群图片主导 / 地区占比气泡图",
        "publicKey": "layout",
        "publicLabel": "右栏形式",
        "description": "右栏的呈现形式：集群图片主导 / 地区占比气泡图"
      },
      {
        "key": "mediaSlotCount",
        "label": "图片槽数量",
        "type": "number",
        "default": 1,
        "min": 0,
        "max": 2,
        "desc": "右侧自适应图片槽数量（0 改为地区分布面板；上传后按图片比例自适应，构图随数量重排）",
        "publicKey": "mediaSlotCount",
        "publicLabel": "图片槽数量",
        "description": "右侧自适应图片槽数量（0 改为地区分布面板；上传后按图片比例自适应，构图随数量重排）"
      },
      {
        "key": "regionCount",
        "label": "气泡地区数",
        "type": "number",
        "default": 5,
        "min": 3,
        "max": 5,
        "desc": "气泡图中展示的地区数量",
        "publicKey": "regionCount",
        "publicLabel": "气泡地区数",
        "description": "气泡图中展示的地区数量"
      },
      {
        "key": "metricCount",
        "label": "指标数量",
        "type": "number",
        "default": 3,
        "min": 2,
        "max": 3,
        "desc": "左侧辅助指标卡数量",
        "publicKey": "metricCount",
        "publicLabel": "指标数量",
        "description": "左侧辅助指标卡数量"
      },
      {
        "key": "tagCount",
        "label": "分类标签数",
        "type": "number",
        "default": 4,
        "min": 0,
        "max": 6,
        "desc": "左下分类标签芯片数量（0 隐藏整行）",
        "publicKey": "categoryCount",
        "publicLabel": "分类标签数",
        "description": "左下分类标签芯片数量（0 隐藏整行）"
      },
      {
        "key": "focusEnabled",
        "label": "重点指标高亮",
        "type": "toggle",
        "default": true,
        "desc": "是否突出某一指标卡",
        "publicKey": "focusEnabled",
        "publicLabel": "重点指标高亮",
        "description": "是否突出某一指标卡"
      },
      {
        "key": "focusIndex",
        "label": "高亮第几个",
        "type": "number",
        "default": 0,
        "min": 0,
        "max": 2,
        "desc": "被突出的指标序号",
        "publicKey": "focusIndex",
        "publicLabel": "高亮第几个",
        "description": "被突出的指标序号"
      },
      {
        "key": "showShareBar",
        "label": "占比对照条",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏占全国数值对照条（装饰数据）",
        "publicKey": "showValueLabels",
        "publicLabel": "占比对照条",
        "description": "显示/隐藏占全国数值对照条（装饰数据）"
      },
      {
        "key": "showTagBadge",
        "label": "集群徽标",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏左上角集群徽标（装饰）",
        "publicKey": "showTagBadge",
        "publicLabel": "集群徽标",
        "description": "显示/隐藏左上角集群徽标（装饰）"
      },
      {
        "key": "showNote",
        "label": "一句话判断",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏左下一句话判断（装饰文案）",
        "publicKey": "showNote",
        "publicLabel": "一句话判断",
        "description": "显示/隐藏左下一句话判断（装饰文案）"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#c8f135",
        "options": [
          "#c8f135",
          "#ff5a3c",
          "#3ca0ff",
          "#ffd23c"
        ],
        "desc": "主强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "主强调色"
      }
    ],
    "defaultProps": {
      "eyebrowId": "59",
      "eyebrowLabel": "BOSTON CLUSTER",
      "title": "科研与硬科技",
      "subhead": "波士顿集群 / BOSTON",
      "closing": "科研城市更适合长周期技术资产。",
      "clusterTag": "波士顿集群 / BOS",
      "hero": {
        "value": "7.7",
        "unit": "%",
        "label": "占全国融资额 / SHARE OF TOTAL"
      },
      "metrics": [
        {
          "k": "融资额 / FUNDING",
          "v": "75 亿$"
        },
        {
          "k": "事件数 / DEALS",
          "v": "8 笔"
        },
        {
          "k": "平均单笔 / AVG",
          "v": "9.4 亿$"
        }
      ],
      "tags": [
        "医疗 AI / HEALTH",
        "机器人 / ROBOTICS",
        "硬科技 / DEEP TECH",
        "高校科研 / RESEARCH"
      ],
      "note": "波士顿集中在医疗 AI、机器人和硬科技方向，高校科研和硬科技转化构成其优势。",
      "regions": [
        {
          "name": "旧金山湾区",
          "en": "BAY AREA",
          "value": 63.9
        },
        {
          "name": "纽约",
          "en": "NEW YORK",
          "value": 12.4
        },
        {
          "name": "西雅图",
          "en": "SEATTLE",
          "value": 9.8
        },
        {
          "name": "波士顿",
          "en": "BOSTON",
          "value": 7.7
        },
        {
          "name": "其他地区",
          "en": "OTHER REGIONS",
          "value": 6.2
        }
      ],
      "activeRegion": 3,
      "mediaPlaceholder": "波士顿科研/硬科技主视觉 / DROP IMAGE",
      "layout": "media",
      "mediaSlotCount": 1,
      "metricCount": 3,
      "tagCount": 4,
      "regionCount": 5,
      "focusEnabled": true,
      "focusIndex": 0,
      "showShareBar": true,
      "showTagBadge": true,
      "showNote": true,
      "accent": "#c8f135"
    }
  },
  {
    "key": "theme06_page052",
    "themeKey": "theme06",
    "pageNumber": 52,
    "layout": "THEME06-052",
    "slot": "other",
    "label": "48 · 分散型应用落地 / OTHER REGIONS",
    "bgClass": "",
    "controls": [
      {
        "key": "layout",
        "label": "右栏形式",
        "type": "select",
        "default": "media",
        "options": [
          [
            "media",
            "图文"
          ],
          [
            "map",
            "分布气泡"
          ]
        ],
        "desc": "右栏的呈现形式：集群图片主导 / 地区占比气泡图",
        "publicKey": "layout",
        "publicLabel": "右栏形式",
        "description": "右栏的呈现形式：集群图片主导 / 地区占比气泡图"
      },
      {
        "key": "mediaSlotCount",
        "label": "图片槽数量",
        "type": "number",
        "default": 1,
        "min": 0,
        "max": 2,
        "desc": "右侧自适应图片槽数量（0 改为地区分布面板；上传后按图片比例自适应，构图随数量重排）",
        "publicKey": "mediaSlotCount",
        "publicLabel": "图片槽数量",
        "description": "右侧自适应图片槽数量（0 改为地区分布面板；上传后按图片比例自适应，构图随数量重排）"
      },
      {
        "key": "regionCount",
        "label": "气泡地区数",
        "type": "number",
        "default": 5,
        "min": 3,
        "max": 5,
        "desc": "气泡图中展示的地区数量",
        "publicKey": "regionCount",
        "publicLabel": "气泡地区数",
        "description": "气泡图中展示的地区数量"
      },
      {
        "key": "metricCount",
        "label": "指标数量",
        "type": "number",
        "default": 3,
        "min": 2,
        "max": 3,
        "desc": "左侧辅助指标卡数量",
        "publicKey": "metricCount",
        "publicLabel": "指标数量",
        "description": "左侧辅助指标卡数量"
      },
      {
        "key": "tagCount",
        "label": "分类标签数",
        "type": "number",
        "default": 4,
        "min": 0,
        "max": 6,
        "desc": "左下分类标签芯片数量（0 隐藏整行）",
        "publicKey": "categoryCount",
        "publicLabel": "分类标签数",
        "description": "左下分类标签芯片数量（0 隐藏整行）"
      },
      {
        "key": "focusEnabled",
        "label": "重点指标高亮",
        "type": "toggle",
        "default": true,
        "desc": "是否突出某一指标卡",
        "publicKey": "focusEnabled",
        "publicLabel": "重点指标高亮",
        "description": "是否突出某一指标卡"
      },
      {
        "key": "focusIndex",
        "label": "高亮第几个",
        "type": "number",
        "default": 0,
        "min": 0,
        "max": 2,
        "desc": "被突出的指标序号",
        "publicKey": "focusIndex",
        "publicLabel": "高亮第几个",
        "description": "被突出的指标序号"
      },
      {
        "key": "showShareBar",
        "label": "占比对照条",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏占全国数值对照条（装饰数据）",
        "publicKey": "showValueLabels",
        "publicLabel": "占比对照条",
        "description": "显示/隐藏占全国数值对照条（装饰数据）"
      },
      {
        "key": "showTagBadge",
        "label": "集群徽标",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏左上角集群徽标（装饰）",
        "publicKey": "showTagBadge",
        "publicLabel": "集群徽标",
        "description": "显示/隐藏左上角集群徽标（装饰）"
      },
      {
        "key": "showNote",
        "label": "一句话判断",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏左下一句话判断（装饰文案）",
        "publicKey": "showNote",
        "publicLabel": "一句话判断",
        "description": "显示/隐藏左下一句话判断（装饰文案）"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#c8f135",
        "options": [
          "#c8f135",
          "#ff5a3c",
          "#3ca0ff",
          "#ffd23c"
        ],
        "desc": "主强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "主强调色"
      }
    ],
    "defaultProps": {
      "eyebrowId": "60",
      "eyebrowLabel": "OTHER REGIONS",
      "title": "分散型应用落地",
      "subhead": "其他地区机会 / DISTRIBUTED",
      "closing": "本地行业资源也能形成应用机会。",
      "clusterTag": "其他地区 / OTHER",
      "hero": {
        "value": "6.2",
        "unit": "%",
        "label": "占全国融资额 / SHARE OF TOTAL"
      },
      "metrics": [
        {
          "k": "融资额 / FUNDING",
          "v": "60 亿$"
        },
        {
          "k": "事件数 / DEALS",
          "v": "11 笔"
        },
        {
          "k": "平均单笔 / AVG",
          "v": "5.5 亿$"
        }
      ],
      "tags": [
        "行业模型 / VERTICAL",
        "本地化 / LOCAL",
        "垂直应用 / APPS"
      ],
      "note": "其他地区融资规模较小，但出现行业专用模型和本地化应用机会——非核心区域更适合做行业落地。",
      "regions": [
        {
          "name": "旧金山湾区",
          "en": "BAY AREA",
          "value": 63.9
        },
        {
          "name": "纽约",
          "en": "NEW YORK",
          "value": 12.4
        },
        {
          "name": "西雅图",
          "en": "SEATTLE",
          "value": 9.8
        },
        {
          "name": "波士顿",
          "en": "BOSTON",
          "value": 7.7
        },
        {
          "name": "其他地区",
          "en": "OTHER REGIONS",
          "value": 6.2
        }
      ],
      "activeRegion": 4,
      "mediaPlaceholder": "区域点阵分布 / DROP IMAGE",
      "layout": "map",
      "mediaSlotCount": 1,
      "metricCount": 3,
      "tagCount": 3,
      "regionCount": 5,
      "focusEnabled": true,
      "focusIndex": 0,
      "showShareBar": true,
      "showTagBadge": true,
      "showNote": true,
      "accent": "#c8f135"
    }
  },
  {
    "key": "theme06_page053",
    "themeKey": "theme06",
    "pageNumber": 53,
    "layout": "THEME06-053",
    "slot": "triad",
    "label": "49 · 三类关键资源 / TALENT·CAPITAL·COMPUTE",
    "bgClass": "",
    "controls": [
      {
        "key": "showMeta",
        "label": "结论卡",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏底部的支撑结论卡",
        "publicKey": "showMeta",
        "publicLabel": "结论卡",
        "description": "显示/隐藏底部的支撑结论卡"
      },
      {
        "key": "metaCount",
        "label": "结论卡数量",
        "type": "number",
        "default": 3,
        "min": 0,
        "max": 3,
        "desc": "底部结论卡数量",
        "publicKey": "metaCount",
        "publicLabel": "结论卡数量",
        "description": "底部结论卡数量"
      },
      {
        "key": "align",
        "label": "对齐方式",
        "type": "select",
        "default": "left",
        "options": [
          [
            "left",
            "左对齐"
          ],
          [
            "center",
            "居中"
          ]
        ],
        "desc": "金句区域的对齐方式",
        "publicKey": "align",
        "publicLabel": "对齐方式",
        "description": "金句区域的对齐方式"
      },
      {
        "key": "showWatermark",
        "label": "背景大字",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏背景水印字（装饰）",
        "publicKey": "showWatermark",
        "publicLabel": "背景大字",
        "description": "显示/隐藏背景水印字（装饰）"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#c8f135",
        "options": [
          "#c8f135",
          "#ff5a3c",
          "#3ca0ff",
          "#ffd23c"
        ],
        "desc": "主强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "主强调色"
      }
    ],
    "defaultProps": {
      "eyebrowId": "61",
      "eyebrowLabel": "TALENT · CAPITAL · COMPUTE",
      "kicker": "三类关键资源 / 人才 · 资本 · 算力三角",
      "quote": "AI 竞争首先是一场<b>资源组织能力</b>的竞争。",
      "source": "AI CAPITAL LAB · 2024 调研",
      "watermark": "TRIAD",
      "meta": [
        {
          "k": "人才 / TALENT",
          "v": "顶尖研究员与工程团队的密度，决定模型上限。"
        },
        {
          "k": "资本 / CAPITAL",
          "v": "持续的大额融资能力，支撑长周期的算力与试错。"
        },
        {
          "k": "算力 / COMPUTE",
          "v": "稳定的 GPU 供给与云资源，是规模化的硬约束。"
        }
      ],
      "showMeta": true,
      "metaCount": 3,
      "align": "center",
      "showWatermark": true,
      "accent": "#c8f135"
    }
  },
  {
    "key": "theme06_page054",
    "themeKey": "theme06",
    "pageNumber": 54,
    "layout": "THEME06-054",
    "slot": "openai",
    "label": "50 · 商业化标杆 / OPENAI",
    "bgClass": "",
    "controls": [
      {
        "key": "mediaSlotCount",
        "label": "图片槽数量",
        "type": "number",
        "default": 1,
        "min": 0,
        "max": 2,
        "desc": "右侧自适应图片槽数量（0 改为关键数据卡阵；上传后按图片比例自适应，构图随数量重排）",
        "publicKey": "mediaSlotCount",
        "publicLabel": "图片槽数量",
        "description": "右侧自适应图片槽数量（0 改为关键数据卡阵；上传后按图片比例自适应，构图随数量重排）"
      },
      {
        "key": "metricCount",
        "label": "指标数量",
        "type": "number",
        "default": 3,
        "min": 2,
        "max": 4,
        "desc": "左侧辅助指标卡数量",
        "publicKey": "metricCount",
        "publicLabel": "指标数量",
        "description": "左侧辅助指标卡数量"
      },
      {
        "key": "tagCount",
        "label": "关键词数量",
        "type": "number",
        "default": 3,
        "min": 0,
        "max": 6,
        "desc": "左侧关键词芯片数量（0 隐藏整行）",
        "publicKey": "tagCount",
        "publicLabel": "关键词数量",
        "description": "左侧关键词芯片数量（0 隐藏整行）"
      },
      {
        "key": "focusEnabled",
        "label": "重点指标高亮",
        "type": "toggle",
        "default": true,
        "desc": "是否突出某一指标卡",
        "publicKey": "focusEnabled",
        "publicLabel": "重点指标高亮",
        "description": "是否突出某一指标卡"
      },
      {
        "key": "focusIndex",
        "label": "高亮第几个",
        "type": "number",
        "default": 1,
        "min": 0,
        "max": 3,
        "desc": "被突出的指标序号",
        "publicKey": "focusIndex",
        "publicLabel": "高亮第几个",
        "description": "被突出的指标序号"
      },
      {
        "key": "showHero",
        "label": "重点大数字",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏左栏主标数字（装饰锚点）",
        "publicKey": "showHero",
        "publicLabel": "重点大数字",
        "description": "显示/隐藏左栏主标数字（装饰锚点）"
      },
      {
        "key": "showCaseIndex",
        "label": "案例编号",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏右上角 CASE 编号（装饰）",
        "publicKey": "showCaseIndex",
        "publicLabel": "案例编号",
        "description": "显示/隐藏右上角 CASE 编号（装饰）"
      },
      {
        "key": "showTagBadge",
        "label": "案例徽标",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏左上角案例徽标（装饰）",
        "publicKey": "showTagBadge",
        "publicLabel": "案例徽标",
        "description": "显示/隐藏左上角案例徽标（装饰）"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#c8f135",
        "options": [
          "#c8f135",
          "#ff5a3c",
          "#3ca0ff",
          "#ffd23c"
        ],
        "desc": "主强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "主强调色"
      }
    ],
    "defaultProps": {
      "eyebrowId": "62",
      "eyebrowLabel": "OPENAI CASE",
      "title": "商业化标杆",
      "subhead": "OpenAI 案例 / GENERAL MODELS",
      "closing": "模型能力必须转成生态和收入。",
      "company": "OpenAI",
      "caseIndex": 1,
      "caseTotal": 9,
      "caseTag": "CASE · OPENAI",
      "positioning": "看点是模型能力、生态入口和企业商业化能否同时领先——OpenAI 仍是通用大模型商业化的标杆样本。",
      "hero": {
        "value": "66",
        "unit": "亿$",
        "label": "最大单笔融资 / LARGEST ROUND"
      },
      "metrics": [
        {
          "k": "企业客户 / ENTERPRISE",
          "v": "9.4 万家"
        },
        {
          "k": "年度化收入 / ARR",
          "v": "38 亿$"
        },
        {
          "k": "赛道 / SEGMENT",
          "v": "通用大模型"
        }
      ],
      "tags": [
        "通用大模型 / FRONTIER",
        "生态入口 / PLATFORM",
        "企业商业化 / GTM"
      ],
      "mediaPlaceholder": "OpenAI 公司卡主视觉 / DROP IMAGE",
      "mediaSlotCount": 1,
      "metricCount": 3,
      "tagCount": 3,
      "focusEnabled": true,
      "focusIndex": 1,
      "showHero": true,
      "showCaseIndex": true,
      "showTagBadge": true,
      "accent": "#c8f135"
    }
  },
  {
    "key": "theme06_page055",
    "themeKey": "theme06",
    "pageNumber": 55,
    "layout": "THEME06-055",
    "slot": "anthropic",
    "label": "51 · 安全可靠模型 / ANTHROPIC",
    "bgClass": "",
    "controls": [
      {
        "key": "mediaSlotCount",
        "label": "图片槽数量",
        "type": "number",
        "default": 1,
        "min": 0,
        "max": 2,
        "desc": "右侧自适应图片槽数量（0 改为关键数据卡阵；上传后按图片比例自适应，构图随数量重排）",
        "publicKey": "mediaSlotCount",
        "publicLabel": "图片槽数量",
        "description": "右侧自适应图片槽数量（0 改为关键数据卡阵；上传后按图片比例自适应，构图随数量重排）"
      },
      {
        "key": "metricCount",
        "label": "指标数量",
        "type": "number",
        "default": 3,
        "min": 2,
        "max": 4,
        "desc": "左侧辅助指标卡数量",
        "publicKey": "metricCount",
        "publicLabel": "指标数量",
        "description": "左侧辅助指标卡数量"
      },
      {
        "key": "tagCount",
        "label": "关键词数量",
        "type": "number",
        "default": 3,
        "min": 0,
        "max": 6,
        "desc": "左侧关键词芯片数量（0 隐藏整行）",
        "publicKey": "tagCount",
        "publicLabel": "关键词数量",
        "description": "左侧关键词芯片数量（0 隐藏整行）"
      },
      {
        "key": "focusEnabled",
        "label": "重点指标高亮",
        "type": "toggle",
        "default": true,
        "desc": "是否突出某一指标卡",
        "publicKey": "focusEnabled",
        "publicLabel": "重点指标高亮",
        "description": "是否突出某一指标卡"
      },
      {
        "key": "focusIndex",
        "label": "高亮第几个",
        "type": "number",
        "default": 1,
        "min": 0,
        "max": 3,
        "desc": "被突出的指标序号",
        "publicKey": "focusIndex",
        "publicLabel": "高亮第几个",
        "description": "被突出的指标序号"
      },
      {
        "key": "showHero",
        "label": "重点大数字",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏左栏主标数字（装饰锚点）",
        "publicKey": "showHero",
        "publicLabel": "重点大数字",
        "description": "显示/隐藏左栏主标数字（装饰锚点）"
      },
      {
        "key": "showCaseIndex",
        "label": "案例编号",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏右上角 CASE 编号（装饰）",
        "publicKey": "showCaseIndex",
        "publicLabel": "案例编号",
        "description": "显示/隐藏右上角 CASE 编号（装饰）"
      },
      {
        "key": "showTagBadge",
        "label": "案例徽标",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏左上角案例徽标（装饰）",
        "publicKey": "showTagBadge",
        "publicLabel": "案例徽标",
        "description": "显示/隐藏左上角案例徽标（装饰）"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#c8f135",
        "options": [
          "#c8f135",
          "#ff5a3c",
          "#3ca0ff",
          "#ffd23c"
        ],
        "desc": "主强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "主强调色"
      }
    ],
    "defaultProps": {
      "eyebrowId": "63",
      "eyebrowLabel": "ANTHROPIC CASE",
      "title": "安全可靠模型",
      "subhead": "Anthropic 案例 / SAFE & RELIABLE",
      "closing": "可信度本身可以成为商业壁垒。",
      "company": "Anthropic",
      "caseIndex": 2,
      "caseTotal": 9,
      "caseTag": "CASE · ANTHROPIC",
      "positioning": "Anthropic 的核心定位是安全、可靠和企业级模型能力——优势不是更激进的叙事，而是更可信的企业采用。",
      "hero": {
        "value": "650",
        "unit": "亿$+",
        "label": "累计融资 / TOTAL RAISED"
      },
      "metrics": [
        {
          "k": "估值 / VALUATION",
          "v": "9650 亿$"
        },
        {
          "k": "产品 / PRODUCT",
          "v": "Claude"
        },
        {
          "k": "客户群 / CUSTOMERS",
          "v": "云 · 金融 · 专业服务"
        }
      ],
      "tags": [
        "Claude",
        "安全对齐 / ALIGNMENT",
        "长上下文 / LONG CTX",
        "企业采用 / ENTERPRISE"
      ],
      "mediaPlaceholder": "Anthropic 公司卡主视觉 / DROP IMAGE",
      "mediaSlotCount": 1,
      "metricCount": 3,
      "tagCount": 4,
      "focusEnabled": true,
      "focusIndex": 0,
      "showHero": true,
      "showCaseIndex": true,
      "showTagBadge": true,
      "accent": "#c8f135"
    }
  },
  {
    "key": "theme06_page056",
    "themeKey": "theme06",
    "pageNumber": 56,
    "layout": "THEME06-056",
    "slot": "xai",
    "label": "52 · 实时数据生态 / XAI",
    "bgClass": "",
    "controls": [
      {
        "key": "mediaSlotCount",
        "label": "图片槽数量",
        "type": "number",
        "default": 1,
        "min": 0,
        "max": 2,
        "desc": "右侧自适应图片槽数量（0 改为关键数据卡阵；上传后按图片比例自适应，构图随数量重排）",
        "publicKey": "mediaSlotCount",
        "publicLabel": "图片槽数量",
        "description": "右侧自适应图片槽数量（0 改为关键数据卡阵；上传后按图片比例自适应，构图随数量重排）"
      },
      {
        "key": "metricCount",
        "label": "指标数量",
        "type": "number",
        "default": 3,
        "min": 2,
        "max": 4,
        "desc": "左侧辅助指标卡数量",
        "publicKey": "metricCount",
        "publicLabel": "指标数量",
        "description": "左侧辅助指标卡数量"
      },
      {
        "key": "tagCount",
        "label": "关键词数量",
        "type": "number",
        "default": 3,
        "min": 0,
        "max": 6,
        "desc": "左侧关键词芯片数量（0 隐藏整行）",
        "publicKey": "tagCount",
        "publicLabel": "关键词数量",
        "description": "左侧关键词芯片数量（0 隐藏整行）"
      },
      {
        "key": "focusEnabled",
        "label": "重点指标高亮",
        "type": "toggle",
        "default": true,
        "desc": "是否突出某一指标卡",
        "publicKey": "focusEnabled",
        "publicLabel": "重点指标高亮",
        "description": "是否突出某一指标卡"
      },
      {
        "key": "focusIndex",
        "label": "高亮第几个",
        "type": "number",
        "default": 1,
        "min": 0,
        "max": 3,
        "desc": "被突出的指标序号",
        "publicKey": "focusIndex",
        "publicLabel": "高亮第几个",
        "description": "被突出的指标序号"
      },
      {
        "key": "showHero",
        "label": "重点大数字",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏左栏主标数字（装饰锚点）",
        "publicKey": "showHero",
        "publicLabel": "重点大数字",
        "description": "显示/隐藏左栏主标数字（装饰锚点）"
      },
      {
        "key": "showCaseIndex",
        "label": "案例编号",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏右上角 CASE 编号（装饰）",
        "publicKey": "showCaseIndex",
        "publicLabel": "案例编号",
        "description": "显示/隐藏右上角 CASE 编号（装饰）"
      },
      {
        "key": "showTagBadge",
        "label": "案例徽标",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏左上角案例徽标（装饰）",
        "publicKey": "showTagBadge",
        "publicLabel": "案例徽标",
        "description": "显示/隐藏左上角案例徽标（装饰）"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#c8f135",
        "options": [
          "#c8f135",
          "#ff5a3c",
          "#3ca0ff",
          "#ffd23c"
        ],
        "desc": "主强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "主强调色"
      }
    ],
    "defaultProps": {
      "eyebrowId": "64",
      "eyebrowLabel": "XAI CASE",
      "title": "实时数据生态",
      "subhead": "xAI 案例 / REAL-TIME DATA",
      "closing": "独特数据入口可以成为模型差异化。",
      "company": "xAI",
      "caseIndex": 3,
      "caseTotal": 9,
      "caseTag": "CASE · XAI",
      "positioning": "xAI 以实时数据和马斯克生态作为差异化——核心资产不是模型本身，而是实时数据和生态流量。",
      "hero": {
        "value": "50",
        "unit": "亿$",
        "label": "单笔融资 / SINGLE ROUND"
      },
      "metrics": [
        {
          "k": "估值 / VALUATION",
          "v": "500 亿$"
        },
        {
          "k": "数据入口 / DATA",
          "v": "X 平台"
        },
        {
          "k": "协同 / SYNERGY",
          "v": "特斯拉 · 多模态"
        }
      ],
      "tags": [
        "实时数据 / REAL-TIME",
        "X 平台 / PLATFORM",
        "多模态 / MULTIMODAL",
        "实时搜索 / SEARCH"
      ],
      "mediaPlaceholder": "xAI 生态连接主视觉 / DROP IMAGE",
      "mediaSlotCount": 1,
      "metricCount": 3,
      "tagCount": 4,
      "focusEnabled": true,
      "focusIndex": 1,
      "showHero": true,
      "showCaseIndex": true,
      "showTagBadge": true,
      "accent": "#c8f135"
    }
  },
  {
    "key": "theme06_page057",
    "themeKey": "theme06",
    "pageNumber": 57,
    "layout": "THEME06-057",
    "slot": "coreweave",
    "label": "53 · 算力基础设施 / COREWEAVE",
    "bgClass": "",
    "controls": [
      {
        "key": "mediaSlotCount",
        "label": "图片槽数量",
        "type": "number",
        "default": 1,
        "min": 0,
        "max": 2,
        "desc": "右侧自适应图片槽数量（0 改为关键数据卡阵；上传后按图片比例自适应，构图随数量重排）",
        "publicKey": "mediaSlotCount",
        "publicLabel": "图片槽数量",
        "description": "右侧自适应图片槽数量（0 改为关键数据卡阵；上传后按图片比例自适应，构图随数量重排）"
      },
      {
        "key": "metricCount",
        "label": "指标数量",
        "type": "number",
        "default": 3,
        "min": 2,
        "max": 4,
        "desc": "左侧辅助指标卡数量",
        "publicKey": "metricCount",
        "publicLabel": "指标数量",
        "description": "左侧辅助指标卡数量"
      },
      {
        "key": "tagCount",
        "label": "关键词数量",
        "type": "number",
        "default": 3,
        "min": 0,
        "max": 6,
        "desc": "左侧关键词芯片数量（0 隐藏整行）",
        "publicKey": "tagCount",
        "publicLabel": "关键词数量",
        "description": "左侧关键词芯片数量（0 隐藏整行）"
      },
      {
        "key": "focusEnabled",
        "label": "重点指标高亮",
        "type": "toggle",
        "default": true,
        "desc": "是否突出某一指标卡",
        "publicKey": "focusEnabled",
        "publicLabel": "重点指标高亮",
        "description": "是否突出某一指标卡"
      },
      {
        "key": "focusIndex",
        "label": "高亮第几个",
        "type": "number",
        "default": 1,
        "min": 0,
        "max": 3,
        "desc": "被突出的指标序号",
        "publicKey": "focusIndex",
        "publicLabel": "高亮第几个",
        "description": "被突出的指标序号"
      },
      {
        "key": "showHero",
        "label": "重点大数字",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏左栏主标数字（装饰锚点）",
        "publicKey": "showHero",
        "publicLabel": "重点大数字",
        "description": "显示/隐藏左栏主标数字（装饰锚点）"
      },
      {
        "key": "showCaseIndex",
        "label": "案例编号",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏右上角 CASE 编号（装饰）",
        "publicKey": "showCaseIndex",
        "publicLabel": "案例编号",
        "description": "显示/隐藏右上角 CASE 编号（装饰）"
      },
      {
        "key": "showTagBadge",
        "label": "案例徽标",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏左上角案例徽标（装饰）",
        "publicKey": "showTagBadge",
        "publicLabel": "案例徽标",
        "description": "显示/隐藏左上角案例徽标（装饰）"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#c8f135",
        "options": [
          "#c8f135",
          "#ff5a3c",
          "#3ca0ff",
          "#ffd23c"
        ],
        "desc": "主强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "主强调色"
      }
    ],
    "defaultProps": {
      "eyebrowId": "65",
      "eyebrowLabel": "COREWEAVE CASE",
      "title": "算力基础设施",
      "subhead": "CoreWeave 案例 / COMPUTE INFRA",
      "closing": "卖铲子的人也能成为核心资产。",
      "company": "CoreWeave",
      "caseIndex": 4,
      "caseTotal": 9,
      "caseTag": "CASE · COREWEAVE",
      "positioning": "当模型公司都在抢 GPU，算力供应商获得资本溢价——CoreWeave 代表算力基础设施的确定性机会。",
      "hero": {
        "value": "110",
        "unit": "亿$",
        "label": "融资额 / TOTAL RAISED"
      },
      "metrics": [
        {
          "k": "估值 / VALUATION",
          "v": "190 亿$"
        },
        {
          "k": "GPU 资源 / GPU FLEET",
          "v": "7.8 万张"
        },
        {
          "k": "客户 / CUSTOMERS",
          "v": "模型 · 生成式 · 推理"
        }
      ],
      "tags": [
        "GPU 云 / GPU CLOUD",
        "算力供应 / COMPUTE",
        "资本溢价 / PREMIUM",
        "企业推理 / INFERENCE"
      ],
      "mediaPlaceholder": "CoreWeave GPU 集群主视觉 / DROP IMAGE",
      "mediaSlotCount": 1,
      "metricCount": 3,
      "tagCount": 4,
      "focusEnabled": true,
      "focusIndex": 1,
      "showHero": true,
      "showCaseIndex": true,
      "showTagBadge": true,
      "accent": "#c8f135"
    }
  },
  {
    "key": "theme06_page058",
    "themeKey": "theme06",
    "pageNumber": 58,
    "layout": "THEME06-058",
    "slot": "scaleai",
    "label": "54 · 数据基础设施 / SCALE AI · TABLE",
    "bgClass": "",
    "controls": [
      {
        "key": "rowCount",
        "label": "行数",
        "type": "number",
        "default": 4,
        "min": 3,
        "max": 5,
        "desc": "展示的维度行数（按数据截取）",
        "publicKey": "rowCount",
        "publicLabel": "行数",
        "description": "展示的维度行数（按数据截取）"
      },
      {
        "key": "columnCount",
        "label": "列数",
        "type": "number",
        "default": 4,
        "min": 3,
        "max": 4,
        "desc": "展示的列数（维度列恒显，3 时省略中间列）",
        "publicKey": "columnCount",
        "publicLabel": "列数",
        "description": "展示的列数（维度列恒显，3 时省略中间列）"
      },
      {
        "key": "focusEnabled",
        "label": "重点行高亮",
        "type": "toggle",
        "default": true,
        "desc": "是否把某一行拉成整条强调行",
        "publicKey": "focusEnabled",
        "publicLabel": "重点行高亮",
        "description": "是否把某一行拉成整条强调行"
      },
      {
        "key": "focusIndex",
        "label": "高亮第几行",
        "type": "number",
        "default": 3,
        "min": 0,
        "max": 4,
        "desc": "被强调的行序号",
        "publicKey": "focusIndex",
        "publicLabel": "高亮第几行",
        "description": "被强调的行序号"
      },
      {
        "key": "showFigures",
        "label": "关键数字带",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏顶部关键数字带（装饰锚点）",
        "publicKey": "showFigures",
        "publicLabel": "关键数字带",
        "description": "显示/隐藏顶部关键数字带（装饰锚点）"
      },
      {
        "key": "showIndex",
        "label": "行编号",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏行首序号（装饰）",
        "publicKey": "showIndex",
        "publicLabel": "行编号",
        "description": "显示/隐藏行首序号（装饰）"
      },
      {
        "key": "showCaseIndex",
        "label": "案例编号",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏右上角 CASE 编号（装饰）",
        "publicKey": "showCaseIndex",
        "publicLabel": "案例编号",
        "description": "显示/隐藏右上角 CASE 编号（装饰）"
      },
      {
        "key": "showTagBadge",
        "label": "案例徽标",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏案例徽标占位（装饰）",
        "publicKey": "showTagBadge",
        "publicLabel": "案例徽标",
        "description": "显示/隐藏案例徽标占位（装饰）"
      },
      {
        "key": "zebra",
        "label": "隔行底色",
        "type": "toggle",
        "default": true,
        "desc": "表格隔行浅底（通用表格样式）",
        "publicKey": "zebra",
        "publicLabel": "隔行底色",
        "description": "表格隔行浅底（通用表格样式）"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#c8f135",
        "options": [
          "#c8f135",
          "#ff5a3c",
          "#3ca0ff",
          "#ffd23c"
        ],
        "desc": "主强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "主强调色"
      }
    ],
    "defaultProps": {
      "eyebrowId": "66",
      "eyebrowLabel": "SCALE AI CASE",
      "title": "数据基础设施",
      "subhead": "Scale AI 案例 / DATA INFRASTRUCTURE",
      "closing": "数据质量是模型竞争的底层变量。",
      "company": "Scale AI",
      "caseIndex": 5,
      "caseTotal": 9,
      "caseTag": "CASE · SCALE AI",
      "figures": [
        {
          "v": "10 亿$",
          "k": "最大单笔融资 / LARGEST ROUND"
        },
        {
          "v": "1200 家",
          "k": "企业客户 / ENTERPRISE"
        },
        {
          "v": "18%",
          "k": "政府客户占比 / GOV SHARE"
        },
        {
          "v": "3 类",
          "k": "核心业务 / CORE LINES"
        }
      ],
      "columns": [
        {
          "k": "维度",
          "en": "DIMENSION"
        },
        {
          "k": "模拟数据",
          "en": "FIGURE"
        },
        {
          "k": "代表对象",
          "en": "EXAMPLE"
        },
        {
          "k": "判断",
          "en": "VERDICT"
        }
      ],
      "rows": [
        {
          "no": 1,
          "dim": "数据标注",
          "en": "DATA LABELING",
          "cells": [
            "1200 家",
            "头部模型公司",
            "高质量训练数据的主入口"
          ]
        },
        {
          "no": 2,
          "dim": "人类反馈",
          "en": "RLHF",
          "cells": [
            "主营业务",
            "前沿实验室",
            "对齐质量的关键供给侧"
          ]
        },
        {
          "no": 3,
          "dim": "模型评测",
          "en": "EVALUATION",
          "cells": [
            "18% 政府",
            "标准机构 · 监管",
            "能力验证的客观标尺"
          ]
        },
        {
          "no": 4,
          "dim": "数据飞轮",
          "en": "DATA FLYWHEEL",
          "cells": [
            "10 亿$",
            "企业推理客户",
            "越用越强的数据护城河"
          ]
        }
      ],
      "footRight": "4 DIM × 4 COL / TABLE",
      "rowCount": 4,
      "columnCount": 4,
      "focusEnabled": true,
      "focusIndex": 3,
      "showFigures": true,
      "showIndex": true,
      "showCaseIndex": true,
      "showTagBadge": true,
      "zebra": true,
      "accent": "#c8f135"
    }
  },
  {
    "key": "theme06_page059",
    "themeKey": "theme06",
    "pageNumber": 59,
    "layout": "THEME06-059",
    "slot": "perplexity",
    "label": "55 · AI 搜索入口 / PERPLEXITY",
    "bgClass": "",
    "controls": [
      {
        "key": "mediaSlotCount",
        "label": "图片槽数量",
        "type": "number",
        "default": 1,
        "min": 0,
        "max": 2,
        "desc": "右侧自适应图片槽数量（0 改为关键数据卡阵；上传后按图片比例自适应，构图随数量重排）",
        "publicKey": "mediaSlotCount",
        "publicLabel": "图片槽数量",
        "description": "右侧自适应图片槽数量（0 改为关键数据卡阵；上传后按图片比例自适应，构图随数量重排）"
      },
      {
        "key": "metricCount",
        "label": "指标数量",
        "type": "number",
        "default": 3,
        "min": 2,
        "max": 4,
        "desc": "辅助指标卡数量",
        "publicKey": "metricCount",
        "publicLabel": "指标数量",
        "description": "辅助指标卡数量"
      },
      {
        "key": "tagCount",
        "label": "关键词数量",
        "type": "number",
        "default": 4,
        "min": 0,
        "max": 6,
        "desc": "关键词芯片数量（0 隐藏整行）",
        "publicKey": "tagCount",
        "publicLabel": "关键词数量",
        "description": "关键词芯片数量（0 隐藏整行）"
      },
      {
        "key": "focusEnabled",
        "label": "重点指标高亮",
        "type": "toggle",
        "default": true,
        "desc": "是否突出某一指标卡",
        "publicKey": "focusEnabled",
        "publicLabel": "重点指标高亮",
        "description": "是否突出某一指标卡"
      },
      {
        "key": "focusIndex",
        "label": "高亮第几个",
        "type": "number",
        "default": 0,
        "min": 0,
        "max": 3,
        "desc": "被突出的指标序号",
        "publicKey": "focusIndex",
        "publicLabel": "高亮第几个",
        "description": "被突出的指标序号"
      },
      {
        "key": "showHero",
        "label": "标志数字卡",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏左栏标志数字卡（装饰锚点）",
        "publicKey": "showHero",
        "publicLabel": "标志数字卡",
        "description": "显示/隐藏左栏标志数字卡（装饰锚点）"
      },
      {
        "key": "showCaseIndex",
        "label": "案例编号",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏右上角 CASE 编号（装饰）",
        "publicKey": "showCaseIndex",
        "publicLabel": "案例编号",
        "description": "显示/隐藏右上角 CASE 编号（装饰）"
      },
      {
        "key": "showTagBadge",
        "label": "案例徽标",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏左上角案例徽标（装饰）",
        "publicKey": "showTagBadge",
        "publicLabel": "案例徽标",
        "description": "显示/隐藏左上角案例徽标（装饰）"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#c8f135",
        "options": [
          "#c8f135",
          "#ff5a3c",
          "#3ca0ff",
          "#ffd23c"
        ],
        "desc": "主强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "主强调色"
      }
    ],
    "defaultProps": {
      "eyebrowId": "67",
      "eyebrowLabel": "PERPLEXITY CASE",
      "title": "AI 搜索入口",
      "subhead": "Perplexity 案例 / AI SEARCH",
      "closing": "新入口要用留存证明价值。",
      "company": "Perplexity",
      "caseIndex": 6,
      "caseTotal": 9,
      "caseTag": "CASE · PERPLEXITY",
      "sigLabel": "标志数字 / SIGNATURE",
      "positioning": "机会在于重构信息入口，挑战是内容版权和用户留存——Perplexity 代表 AI 搜索与答案引擎方向。",
      "hero": {
        "value": "5.2",
        "unit": "亿$",
        "label": "最大单笔融资 / LARGEST ROUND"
      },
      "metrics": [
        {
          "k": "月活用户 / MAU",
          "v": "4800 万"
        },
        {
          "k": "订阅转化率 / PAID",
          "v": "5.8%"
        },
        {
          "k": "赛道 / SEGMENT",
          "v": "AI 搜索"
        }
      ],
      "tags": [
        "AI 搜索 / SEARCH",
        "答案引擎 / ANSWER",
        "信息入口 / GATEWAY",
        "用户留存 / RETENTION"
      ],
      "mediaPlaceholder": "Perplexity 搜索入口主视觉 / DROP IMAGE",
      "mediaSlotCount": 1,
      "metricCount": 3,
      "tagCount": 4,
      "focusEnabled": true,
      "focusIndex": 0,
      "showHero": true,
      "showCaseIndex": true,
      "showTagBadge": true,
      "accent": "#c8f135"
    }
  },
  {
    "key": "theme06_page060",
    "themeKey": "theme06",
    "pageNumber": 60,
    "layout": "THEME06-060",
    "slot": "databricks",
    "label": "56 · 数据平台延展 / DATABRICKS",
    "bgClass": "",
    "controls": [
      {
        "key": "mediaSlotCount",
        "label": "图片槽数量",
        "type": "number",
        "default": 1,
        "min": 0,
        "max": 2,
        "desc": "右侧自适应图片槽数量（0 改为关键数据卡阵；上传后按图片比例自适应，构图随数量重排）",
        "publicKey": "mediaSlotCount",
        "publicLabel": "图片槽数量",
        "description": "右侧自适应图片槽数量（0 改为关键数据卡阵；上传后按图片比例自适应，构图随数量重排）"
      },
      {
        "key": "metricCount",
        "label": "指标数量",
        "type": "number",
        "default": 3,
        "min": 2,
        "max": 4,
        "desc": "辅助指标卡数量",
        "publicKey": "metricCount",
        "publicLabel": "指标数量",
        "description": "辅助指标卡数量"
      },
      {
        "key": "tagCount",
        "label": "关键词数量",
        "type": "number",
        "default": 4,
        "min": 0,
        "max": 6,
        "desc": "关键词芯片数量（0 隐藏整行）",
        "publicKey": "tagCount",
        "publicLabel": "关键词数量",
        "description": "关键词芯片数量（0 隐藏整行）"
      },
      {
        "key": "focusEnabled",
        "label": "重点指标高亮",
        "type": "toggle",
        "default": true,
        "desc": "是否突出某一指标卡",
        "publicKey": "focusEnabled",
        "publicLabel": "重点指标高亮",
        "description": "是否突出某一指标卡"
      },
      {
        "key": "focusIndex",
        "label": "高亮第几个",
        "type": "number",
        "default": 0,
        "min": 0,
        "max": 3,
        "desc": "被突出的指标序号",
        "publicKey": "focusIndex",
        "publicLabel": "高亮第几个",
        "description": "被突出的指标序号"
      },
      {
        "key": "showHero",
        "label": "标志数字卡",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏左栏标志数字卡（装饰锚点）",
        "publicKey": "showHero",
        "publicLabel": "标志数字卡",
        "description": "显示/隐藏左栏标志数字卡（装饰锚点）"
      },
      {
        "key": "showCaseIndex",
        "label": "案例编号",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏右上角 CASE 编号（装饰）",
        "publicKey": "showCaseIndex",
        "publicLabel": "案例编号",
        "description": "显示/隐藏右上角 CASE 编号（装饰）"
      },
      {
        "key": "showTagBadge",
        "label": "案例徽标",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏左上角案例徽标（装饰）",
        "publicKey": "showTagBadge",
        "publicLabel": "案例徽标",
        "description": "显示/隐藏左上角案例徽标（装饰）"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#c8f135",
        "options": [
          "#c8f135",
          "#ff5a3c",
          "#3ca0ff",
          "#ffd23c"
        ],
        "desc": "主强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "主强调色"
      }
    ],
    "defaultProps": {
      "eyebrowId": "68",
      "eyebrowLabel": "DATABRICKS CASE",
      "title": "数据平台延展",
      "subhead": "Databricks 案例 / DATA PLATFORM",
      "closing": "存量客户基础是 AI 商业化捷径。",
      "company": "Databricks",
      "caseIndex": 7,
      "caseTotal": 9,
      "caseTag": "CASE · DATABRICKS",
      "sigLabel": "标志数字 / SIGNATURE",
      "positioning": "已有数据平台更容易把 AI 能力卖给现有企业客户——Databricks 是数据平台向 AI 平台延展的典型公司。",
      "hero": {
        "value": "5.0",
        "unit": "亿$",
        "label": "最大单笔融资 / LARGEST ROUND"
      },
      "metrics": [
        {
          "k": "企业客户 / ENTERPRISE",
          "v": "1.1 万家"
        },
        {
          "k": "净收入留存 / NRR",
          "v": "132%"
        },
        {
          "k": "赛道 / SEGMENT",
          "v": "数据平台"
        }
      ],
      "tags": [
        "数据平台 / DATA",
        "AI 平台 / AI PLATFORM",
        "存量客户 / INSTALLED",
        "高留存 / NRR"
      ],
      "mediaPlaceholder": "Databricks 平台架构主视觉 / DROP IMAGE",
      "mediaSlotCount": 0,
      "metricCount": 3,
      "tagCount": 4,
      "focusEnabled": true,
      "focusIndex": 1,
      "showHero": true,
      "showCaseIndex": true,
      "showTagBadge": true,
      "accent": "#c8f135"
    }
  },
  {
    "key": "theme06_page061",
    "themeKey": "theme06",
    "pageNumber": 61,
    "layout": "THEME06-061",
    "slot": "glean",
    "label": "57 · 企业知识入口 / GLEAN",
    "bgClass": "",
    "controls": [
      {
        "key": "mediaSlotCount",
        "label": "图片槽数量",
        "type": "number",
        "default": 1,
        "min": 0,
        "max": 2,
        "desc": "右侧自适应图片槽数量（0 改为关键数据卡阵；上传后按图片比例自适应，构图随数量重排）",
        "publicKey": "mediaSlotCount",
        "publicLabel": "图片槽数量",
        "description": "右侧自适应图片槽数量（0 改为关键数据卡阵；上传后按图片比例自适应，构图随数量重排）"
      },
      {
        "key": "metricCount",
        "label": "指标数量",
        "type": "number",
        "default": 3,
        "min": 2,
        "max": 4,
        "desc": "辅助指标卡数量",
        "publicKey": "metricCount",
        "publicLabel": "指标数量",
        "description": "辅助指标卡数量"
      },
      {
        "key": "tagCount",
        "label": "关键词数量",
        "type": "number",
        "default": 4,
        "min": 0,
        "max": 6,
        "desc": "关键词芯片数量（0 隐藏整行）",
        "publicKey": "tagCount",
        "publicLabel": "关键词数量",
        "description": "关键词芯片数量（0 隐藏整行）"
      },
      {
        "key": "focusEnabled",
        "label": "重点指标高亮",
        "type": "toggle",
        "default": true,
        "desc": "是否突出某一指标卡",
        "publicKey": "focusEnabled",
        "publicLabel": "重点指标高亮",
        "description": "是否突出某一指标卡"
      },
      {
        "key": "focusIndex",
        "label": "高亮第几个",
        "type": "number",
        "default": 0,
        "min": 0,
        "max": 3,
        "desc": "被突出的指标序号",
        "publicKey": "focusIndex",
        "publicLabel": "高亮第几个",
        "description": "被突出的指标序号"
      },
      {
        "key": "showHero",
        "label": "标志数字卡",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏左栏标志数字卡（装饰锚点）",
        "publicKey": "showHero",
        "publicLabel": "标志数字卡",
        "description": "显示/隐藏左栏标志数字卡（装饰锚点）"
      },
      {
        "key": "showCaseIndex",
        "label": "案例编号",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏右上角 CASE 编号（装饰）",
        "publicKey": "showCaseIndex",
        "publicLabel": "案例编号",
        "description": "显示/隐藏右上角 CASE 编号（装饰）"
      },
      {
        "key": "showTagBadge",
        "label": "案例徽标",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏左上角案例徽标（装饰）",
        "publicKey": "showTagBadge",
        "publicLabel": "案例徽标",
        "description": "显示/隐藏左上角案例徽标（装饰）"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#c8f135",
        "options": [
          "#c8f135",
          "#ff5a3c",
          "#3ca0ff",
          "#ffd23c"
        ],
        "desc": "主强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "主强调色"
      }
    ],
    "defaultProps": {
      "eyebrowId": "69",
      "eyebrowLabel": "GLEAN CASE",
      "title": "企业知识入口",
      "subhead": "Glean 案例 / ENTERPRISE SEARCH",
      "closing": "窄场景也能产生高价值。",
      "company": "Glean",
      "caseIndex": 8,
      "caseTotal": 9,
      "caseTag": "CASE · GLEAN",
      "sigLabel": "标志数字 / SIGNATURE",
      "positioning": "接入知识库后，企业搜索会成为高频工作入口——Glean 代表企业搜索和知识工作流自动化。",
      "hero": {
        "value": "2.6",
        "unit": "亿$",
        "label": "最大单笔融资 / LARGEST ROUND"
      },
      "metrics": [
        {
          "k": "付费客户 / PAID",
          "v": "780 家"
        },
        {
          "k": "续约率 / RENEWAL",
          "v": "91%"
        },
        {
          "k": "赛道 / SEGMENT",
          "v": "企业搜索"
        }
      ],
      "tags": [
        "企业搜索 / SEARCH",
        "知识工作流 / WORKFLOW",
        "高频入口 / DAILY",
        "高续约 / RENEWAL"
      ],
      "mediaPlaceholder": "Glean 知识库入口主视觉 / DROP IMAGE",
      "mediaSlotCount": 1,
      "metricCount": 3,
      "tagCount": 4,
      "focusEnabled": true,
      "focusIndex": 1,
      "showHero": true,
      "showCaseIndex": true,
      "showTagBadge": true,
      "accent": "#c8f135"
    }
  },
  {
    "key": "theme06_page062",
    "themeKey": "theme06",
    "pageNumber": 62,
    "layout": "THEME06-062",
    "slot": "figure",
    "label": "58 · 人形机器人 / FIGURE AI",
    "bgClass": "",
    "controls": [
      {
        "key": "metricCount",
        "label": "辅助指标数量",
        "type": "number",
        "default": 3,
        "min": 0,
        "max": 3,
        "desc": "大数字下方的辅助指标数量（0 隐藏）",
        "publicKey": "metricCount",
        "publicLabel": "辅助指标数量",
        "description": "大数字下方的辅助指标数量（0 隐藏）"
      },
      {
        "key": "align",
        "label": "对齐方式",
        "type": "select",
        "default": "left",
        "options": [
          [
            "left",
            "左对齐"
          ],
          [
            "center",
            "居中"
          ]
        ],
        "desc": "主数字区域的对齐方式",
        "publicKey": "align",
        "publicLabel": "对齐方式",
        "description": "主数字区域的对齐方式"
      },
      {
        "key": "showWatermark",
        "label": "背景大字",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏背景水印字（装饰）",
        "publicKey": "showWatermark",
        "publicLabel": "背景大字",
        "description": "显示/隐藏背景水印字（装饰）"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#c8f135",
        "options": [
          "#c8f135",
          "#ff5a3c",
          "#3ca0ff",
          "#ffd23c"
        ],
        "desc": "主强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "主强调色"
      }
    ],
    "defaultProps": {
      "eyebrowId": "70",
      "eyebrowLabel": "FIGURE AI CASE",
      "kicker": "demo 之外，硬件 AI 真正的考验是量产。",
      "figure": "6.8",
      "unit": "亿$",
      "explain": "<b>Figure AI</b> 最大单笔融资——关键不只是 demo，而是供应链、可靠性和量产成本。",
      "closing": "硬件 AI 要用量产证明自己。",
      "watermark": "FIGURE",
      "metrics": [
        {
          "k": "赛道 / SEGMENT",
          "v": "人形机器人"
        },
        {
          "k": "方向 / FOCUS",
          "v": "具身智能"
        },
        {
          "k": "关键 / KEY",
          "v": "量产成本"
        }
      ],
      "metricCount": 3,
      "align": "center",
      "showWatermark": true,
      "accent": "#c8f135"
    }
  },
  {
    "key": "theme06_page063",
    "themeKey": "theme06",
    "pageNumber": 63,
    "layout": "THEME06-063",
    "slot": "ssi",
    "label": "59 · 强叙事模型实验室 / SSI",
    "bgClass": "",
    "controls": [
      {
        "key": "mediaSlotCount",
        "label": "图片槽数量",
        "type": "number",
        "default": 1,
        "min": 0,
        "max": 2,
        "desc": "右侧自适应图片槽数量（0 改为关键数据卡阵；上传后按图片比例自适应，构图随数量重排）",
        "publicKey": "mediaSlotCount",
        "publicLabel": "图片槽数量",
        "description": "右侧自适应图片槽数量（0 改为关键数据卡阵；上传后按图片比例自适应，构图随数量重排）"
      },
      {
        "key": "metricCount",
        "label": "指标数量",
        "type": "number",
        "default": 3,
        "min": 2,
        "max": 4,
        "desc": "辅助指标卡数量",
        "publicKey": "metricCount",
        "publicLabel": "指标数量",
        "description": "辅助指标卡数量"
      },
      {
        "key": "tagCount",
        "label": "关键词数量",
        "type": "number",
        "default": 4,
        "min": 0,
        "max": 6,
        "desc": "关键词芯片数量（0 隐藏整行）",
        "publicKey": "tagCount",
        "publicLabel": "关键词数量",
        "description": "关键词芯片数量（0 隐藏整行）"
      },
      {
        "key": "focusEnabled",
        "label": "重点指标高亮",
        "type": "toggle",
        "default": true,
        "desc": "是否突出某一指标卡",
        "publicKey": "focusEnabled",
        "publicLabel": "重点指标高亮",
        "description": "是否突出某一指标卡"
      },
      {
        "key": "focusIndex",
        "label": "高亮第几个",
        "type": "number",
        "default": 0,
        "min": 0,
        "max": 3,
        "desc": "被突出的指标序号",
        "publicKey": "focusIndex",
        "publicLabel": "高亮第几个",
        "description": "被突出的指标序号"
      },
      {
        "key": "showHero",
        "label": "标志数字卡",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏左栏标志数字卡（装饰锚点）",
        "publicKey": "showHero",
        "publicLabel": "标志数字卡",
        "description": "显示/隐藏左栏标志数字卡（装饰锚点）"
      },
      {
        "key": "showCaseIndex",
        "label": "案例编号",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏右上角 CASE 编号（装饰）",
        "publicKey": "showCaseIndex",
        "publicLabel": "案例编号",
        "description": "显示/隐藏右上角 CASE 编号（装饰）"
      },
      {
        "key": "showTagBadge",
        "label": "案例徽标",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏左上角案例徽标（装饰）",
        "publicKey": "showTagBadge",
        "publicLabel": "案例徽标",
        "description": "显示/隐藏左上角案例徽标（装饰）"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#c8f135",
        "options": [
          "#c8f135",
          "#ff5a3c",
          "#3ca0ff",
          "#ffd23c"
        ],
        "desc": "主强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "主强调色"
      }
    ],
    "defaultProps": {
      "eyebrowId": "71",
      "eyebrowLabel": "SSI CASE",
      "title": "强叙事模型实验室",
      "subhead": "SSI 案例 / SAFE SUPERINTELLIGENCE",
      "closing": "强叙事需要更长时间兑现。",
      "company": "SSI",
      "caseIndex": 9,
      "caseTotal": 9,
      "caseTag": "CASE · SSI",
      "sigLabel": "标志数字 / SIGNATURE",
      "positioning": "短期难以用收入评价，价值建立在长期技术想象上——SSI 代表强团队、强叙事、弱商业化验证的模型实验室。",
      "hero": {
        "value": "10",
        "unit": "亿$",
        "label": "最大单笔融资 / LARGEST ROUND"
      },
      "metrics": [
        {
          "k": "产品收入 / REVENUE",
          "v": "0"
        },
        {
          "k": "团队规模 / TEAM",
          "v": "85 人"
        },
        {
          "k": "赛道 / SEGMENT",
          "v": "安全智能"
        }
      ],
      "tags": [
        "安全智能 / SAFE SI",
        "强团队 / TEAM",
        "强叙事 / NARRATIVE",
        "长期兑现 / LONG-TERM"
      ],
      "mediaPlaceholder": "SSI 抽象技术主视觉 / DROP IMAGE",
      "mediaSlotCount": 1,
      "metricCount": 3,
      "tagCount": 4,
      "focusEnabled": true,
      "focusIndex": 0,
      "showHero": true,
      "showCaseIndex": true,
      "showTagBadge": true,
      "accent": "#c8f135"
    }
  },
  {
    "key": "theme06_page064",
    "themeKey": "theme06",
    "pageNumber": 64,
    "layout": "THEME06-064",
    "slot": "ch05",
    "label": "60 · 风险与策略 / CHAPTER 05",
    "bgClass": "",
    "controls": [
      {
        "key": "background",
        "label": "背景形态",
        "type": "select",
        "default": "glow",
        "options": [
          [
            "glow",
            "光晕"
          ],
          [
            "solid",
            "纯色"
          ],
          [
            "panel",
            "色块"
          ]
        ],
        "desc": "分隔页背景的呈现形式",
        "publicKey": "background",
        "publicLabel": "背景形态",
        "description": "分隔页背景的呈现形式"
      },
      {
        "key": "showIndex",
        "label": "大号章节号",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏超大章节编号",
        "publicKey": "showIndex",
        "publicLabel": "大号章节号",
        "description": "显示/隐藏超大章节编号"
      },
      {
        "key": "keywordCount",
        "label": "关键词数量",
        "type": "number",
        "default": 4,
        "min": 0,
        "max": 6,
        "desc": "底部关键词标签数量（0 隐藏）",
        "publicKey": "keywordCount",
        "publicLabel": "关键词数量",
        "description": "底部关键词标签数量（0 隐藏）"
      },
      {
        "key": "focusEnabled",
        "label": "关键词高亮",
        "type": "toggle",
        "default": false,
        "desc": "是否高亮某个关键词标签",
        "publicKey": "focusEnabled",
        "publicLabel": "关键词高亮",
        "description": "是否高亮某个关键词标签"
      },
      {
        "key": "focusIndex",
        "label": "高亮第几个",
        "type": "number",
        "default": 0,
        "min": 0,
        "max": 5,
        "desc": "被高亮的关键词序号",
        "publicKey": "focusIndex",
        "publicLabel": "高亮第几个",
        "description": "被高亮的关键词序号"
      },
      {
        "key": "showWatermark",
        "label": "背景大字",
        "type": "toggle",
        "default": false,
        "desc": "显示/隐藏背景巨型水印字（装饰）",
        "publicKey": "showWatermark",
        "publicLabel": "背景大字",
        "description": "显示/隐藏背景巨型水印字（装饰）"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#c8f135",
        "options": [
          "#c8f135",
          "#ff5a3c",
          "#3ca0ff",
          "#ffd23c"
        ],
        "desc": "主强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "主强调色"
      }
    ],
    "defaultProps": {
      "eyebrowId": "CH",
      "eyebrowLabel": "CHAPTER 05",
      "chapterNo": "05",
      "title": "风险与策略",
      "subhead": "从估值压力到投资筛选 / RISK & STRATEGY",
      "closing": "下一组页面进入风险与策略的拆解。",
      "keywords": [
        "估值泡沫",
        "收入验证",
        "合规",
        "算力成本",
        "垂直应用筛选"
      ],
      "watermark": "05",
      "showIndex": true,
      "keywordCount": 5,
      "focusEnabled": false,
      "focusIndex": 0,
      "background": "glow",
      "showWatermark": false,
      "accent": "#c8f135"
    }
  },
  {
    "key": "theme06_page065",
    "themeKey": "theme06",
    "pageNumber": 65,
    "layout": "THEME06-065",
    "slot": "revrisk",
    "label": "61 · 从试点到稳定收入 / REVENUE RISK",
    "bgClass": "",
    "controls": [
      {
        "key": "chartType",
        "label": "图表类型",
        "type": "select",
        "default": "meters",
        "options": [
          [
            "meters",
            "进度条"
          ],
          [
            "columns",
            "纵向柱"
          ],
          [
            "dots",
            "点阵刻度"
          ]
        ],
        "desc": "同一组比率的可视化形式",
        "publicKey": "chartType",
        "publicLabel": "图表类型",
        "description": "同一组比率的可视化形式"
      },
      {
        "key": "meterCount",
        "label": "指标数量",
        "type": "number",
        "default": 4,
        "min": 2,
        "max": 4,
        "desc": "展示的比率读数数量",
        "publicKey": "meterCount",
        "publicLabel": "指标数量",
        "description": "展示的比率读数数量"
      },
      {
        "key": "showThesis",
        "label": "左侧论点栏",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏左侧论点 + 判断栏（装饰框架）",
        "publicKey": "showThesis",
        "publicLabel": "左侧论点栏",
        "description": "显示/隐藏左侧论点 + 判断栏（装饰框架）"
      },
      {
        "key": "showTrack",
        "label": "剩余轨道",
        "type": "toggle",
        "default": true,
        "desc": "进度条剩余部分的斜纹轨道（装饰，仅进度条）",
        "publicKey": "showGuide",
        "publicLabel": "剩余轨道",
        "description": "进度条剩余部分的斜纹轨道（装饰，仅进度条）"
      },
      {
        "key": "showValueLabels",
        "label": "数值标签",
        "type": "toggle",
        "default": true,
        "desc": "各读数的大号数字（装饰数据）",
        "publicKey": "showValueLabels",
        "publicLabel": "数值标签",
        "description": "各读数的大号数字（装饰数据）"
      },
      {
        "key": "showNote",
        "label": "读数注解",
        "type": "toggle",
        "default": true,
        "desc": "每条读数的限定语（装饰文案，仅进度条/点阵）",
        "publicKey": "showNote",
        "publicLabel": "读数注解",
        "description": "每条读数的限定语（装饰文案，仅进度条/点阵）"
      },
      {
        "key": "focusEnabled",
        "label": "重点读数高亮",
        "type": "toggle",
        "default": true,
        "desc": "是否突出某一读数",
        "publicKey": "focusEnabled",
        "publicLabel": "重点读数高亮",
        "description": "是否突出某一读数"
      },
      {
        "key": "focusIndex",
        "label": "高亮第几个",
        "type": "number",
        "default": 0,
        "min": 0,
        "max": 3,
        "desc": "被突出的读数序号",
        "publicKey": "focusIndex",
        "publicLabel": "高亮第几个",
        "description": "被突出的读数序号"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#c8f135",
        "options": [
          "#c8f135",
          "#ff5a3c",
          "#3ca0ff",
          "#ffd23c"
        ],
        "desc": "主强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "主强调色"
      }
    ],
    "defaultProps": {
      "eyebrowId": "73",
      "eyebrowLabel": "REVENUE RISK",
      "title": "从试点到稳定收入",
      "subhead": "风险 · 收入验证 / REVENUE VALIDATION",
      "closing": "客户试点不等于商业化成功。",
      "tagLabel": "RISK · 收入验证",
      "kicker": "多数 AI 公司需要证明自己能从 <b>试点项目</b> 转向 <b>稳定订阅收入</b>。",
      "verdict": {
        "label": "判断 / VERDICT",
        "note": "收入验证要看留存、毛利和客户扩张，而不是只看 Logo。"
      },
      "meters": [
        {
          "name": "试点转付费率",
          "en": "PILOT → PAID",
          "value": "28",
          "unit": "%",
          "note": "多数试点止步于概念验证，未进入预算"
        },
        {
          "name": "企业年流失率",
          "en": "ANNUAL CHURN",
          "value": "17",
          "unit": "%",
          "note": "流失高于健康 SaaS，留存仍待夯实"
        },
        {
          "name": "毛利率中位数",
          "en": "GROSS MARGIN",
          "value": "54",
          "unit": "%",
          "note": "被推理成本压制，低于传统软件"
        },
        {
          "name": "推理成本占收入",
          "en": "INFERENCE COST",
          "value": "31",
          "unit": "%",
          "note": "成本曲线决定毛利天花板"
        }
      ],
      "maxValue": 100,
      "footRight": "4 READINGS / METERS",
      "chartType": "meters",
      "meterCount": 4,
      "showTrack": true,
      "showValueLabels": true,
      "showNote": true,
      "showThesis": true,
      "focusEnabled": true,
      "focusIndex": 0,
      "accent": "#c8f135"
    }
  },
  {
    "key": "theme06_page066",
    "themeKey": "theme06",
    "pageNumber": 66,
    "layout": "THEME06-066",
    "slot": "regrisk",
    "label": "62 · 隐私版权与安全 / REGULATION · TABLE",
    "bgClass": "",
    "controls": [
      {
        "key": "rowCount",
        "label": "行数",
        "type": "number",
        "default": 4,
        "min": 3,
        "max": 5,
        "desc": "展示的维度行数（按数据截取）",
        "publicKey": "rowCount",
        "publicLabel": "行数",
        "description": "展示的维度行数（按数据截取）"
      },
      {
        "key": "columnCount",
        "label": "列数",
        "type": "number",
        "default": 4,
        "min": 3,
        "max": 4,
        "desc": "展示的列数（维度列恒显，3 时省略中间列）",
        "publicKey": "columnCount",
        "publicLabel": "列数",
        "description": "展示的列数（维度列恒显，3 时省略中间列）"
      },
      {
        "key": "focusEnabled",
        "label": "重点行高亮",
        "type": "toggle",
        "default": true,
        "desc": "是否把某一行拉成整条强调行",
        "publicKey": "focusEnabled",
        "publicLabel": "重点行高亮",
        "description": "是否把某一行拉成整条强调行"
      },
      {
        "key": "focusIndex",
        "label": "高亮第几行",
        "type": "number",
        "default": 3,
        "min": 0,
        "max": 4,
        "desc": "被强调的行序号",
        "publicKey": "focusIndex",
        "publicLabel": "高亮第几行",
        "description": "被强调的行序号"
      },
      {
        "key": "showFigures",
        "label": "关键数字带",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏顶部关键数字带（装饰锚点）",
        "publicKey": "showFigures",
        "publicLabel": "关键数字带",
        "description": "显示/隐藏顶部关键数字带（装饰锚点）"
      },
      {
        "key": "showIndex",
        "label": "行编号",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏行首序号（装饰）",
        "publicKey": "showIndex",
        "publicLabel": "行编号",
        "description": "显示/隐藏行首序号（装饰）"
      },
      {
        "key": "showCaseIndex",
        "label": "案例编号",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏右上角 CASE 编号（装饰）",
        "publicKey": "showCaseIndex",
        "publicLabel": "案例编号",
        "description": "显示/隐藏右上角 CASE 编号（装饰）"
      },
      {
        "key": "showTagBadge",
        "label": "案例徽标",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏案例徽标占位（装饰）",
        "publicKey": "showTagBadge",
        "publicLabel": "案例徽标",
        "description": "显示/隐藏案例徽标占位（装饰）"
      },
      {
        "key": "zebra",
        "label": "隔行底色",
        "type": "toggle",
        "default": true,
        "desc": "表格隔行浅底（通用表格样式）",
        "publicKey": "zebra",
        "publicLabel": "隔行底色",
        "description": "表格隔行浅底（通用表格样式）"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#c8f135",
        "options": [
          "#c8f135",
          "#ff5a3c",
          "#3ca0ff",
          "#ffd23c"
        ],
        "desc": "主强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "主强调色"
      }
    ],
    "defaultProps": {
      "eyebrowId": "74",
      "eyebrowLabel": "REGULATION RISK",
      "title": "隐私、版权与安全",
      "subhead": "风险 · 监管合规 / COMPLIANCE",
      "closing": "合规能力会成为企业采购门槛。",
      "company": "RISK",
      "caseIndex": 2,
      "caseTotal": 5,
      "caseTag": "RISK · 合规",
      "figures": [
        {
          "v": "+42%",
          "k": "合规团队增长 / COMPLIANCE TEAM"
        },
        {
          "v": "+36%",
          "k": "采购审查周期 / REVIEW CYCLE"
        },
        {
          "v": "58%",
          "k": "数据隔离需求 / ISOLATION"
        },
        {
          "v": "19 起",
          "k": "版权风险事件 / IP EVENTS"
        }
      ],
      "columns": [
        {
          "k": "维度",
          "en": "DIMENSION"
        },
        {
          "k": "模拟数据",
          "en": "FIGURE"
        },
        {
          "k": "代表对象",
          "en": "EXAMPLE"
        },
        {
          "k": "判断",
          "en": "VERDICT"
        }
      ],
      "rows": [
        {
          "no": 1,
          "dim": "隐私合规",
          "en": "PRIVACY",
          "cells": [
            "+42%",
            "金融 · 医疗客户",
            "数据治理成为采购前置门槛"
          ]
        },
        {
          "no": 2,
          "dim": "采购审查",
          "en": "PROCUREMENT",
          "cells": [
            "+36%",
            "大型企业 IT",
            "审查周期拉长交付与回款"
          ]
        },
        {
          "no": 3,
          "dim": "数据隔离",
          "en": "ISOLATION",
          "cells": [
            "58%",
            "受监管行业",
            "私有化/隔离部署推高成本"
          ]
        },
        {
          "no": 4,
          "dim": "版权风险",
          "en": "COPYRIGHT",
          "cells": [
            "19 起",
            "内容生成公司",
            "训练数据来源的法律敞口"
          ]
        }
      ],
      "footRight": "4 DIM × 4 COL / TABLE",
      "rowCount": 4,
      "columnCount": 4,
      "focusEnabled": true,
      "focusIndex": 2,
      "showFigures": true,
      "showIndex": true,
      "showCaseIndex": false,
      "showTagBadge": true,
      "zebra": true,
      "accent": "#c8f135"
    }
  },
  {
    "key": "theme06_page067",
    "themeKey": "theme06",
    "pageNumber": 67,
    "layout": "THEME06-067",
    "slot": "compute",
    "label": "63 · 毛利天花板 / COMPUTE COST",
    "bgClass": "",
    "controls": [
      {
        "key": "metricCount",
        "label": "辅助指标数量",
        "type": "number",
        "default": 3,
        "min": 0,
        "max": 3,
        "desc": "大数字下方的辅助指标数量（0 隐藏）",
        "publicKey": "metricCount",
        "publicLabel": "辅助指标数量",
        "description": "大数字下方的辅助指标数量（0 隐藏）"
      },
      {
        "key": "align",
        "label": "对齐方式",
        "type": "select",
        "default": "left",
        "options": [
          [
            "left",
            "左对齐"
          ],
          [
            "center",
            "居中"
          ]
        ],
        "desc": "主数字区域的对齐方式",
        "publicKey": "align",
        "publicLabel": "对齐方式",
        "description": "主数字区域的对齐方式"
      },
      {
        "key": "showWatermark",
        "label": "背景大字",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏背景水印字（装饰）",
        "publicKey": "showWatermark",
        "publicLabel": "背景大字",
        "description": "显示/隐藏背景水印字（装饰）"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#c8f135",
        "options": [
          "#c8f135",
          "#ff5a3c",
          "#3ca0ff",
          "#ffd23c"
        ],
        "desc": "主强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "主强调色"
      }
    ],
    "defaultProps": {
      "eyebrowId": "75",
      "eyebrowLabel": "COMPUTE COST RISK",
      "kicker": "收入还没跑起来，算力账单已经在涨。",
      "figure": "61",
      "unit": "%",
      "explain": "头部模型公司 <b>训练预算的模拟年增幅</b>——如果推理成本降不下来，收入增长会被毛利吞掉。",
      "closing": "算力成本是模型商业化的硬约束。",
      "watermark": "COMPUTE",
      "metrics": [
        {
          "k": "毛利率中位数 / MARGIN",
          "v": "54%"
        },
        {
          "k": "推理成本占收入 / COST",
          "v": "31%"
        },
        {
          "k": "风险 / RISK",
          "v": "算力成本"
        }
      ],
      "metricCount": 3,
      "align": "center",
      "showWatermark": true,
      "accent": "#c8f135"
    }
  },
  {
    "key": "theme06_page068",
    "themeKey": "theme06",
    "pageNumber": 68,
    "layout": "THEME06-068",
    "slot": "openrisk",
    "label": "64 · 壁垒被压缩 / OPEN SOURCE RISK",
    "bgClass": "",
    "controls": [
      {
        "key": "chartType",
        "label": "图表类型",
        "type": "select",
        "default": "meters",
        "options": [
          [
            "meters",
            "进度条"
          ],
          [
            "columns",
            "纵向柱"
          ],
          [
            "dots",
            "点阵刻度"
          ]
        ],
        "desc": "同一组比率的可视化形式",
        "publicKey": "chartType",
        "publicLabel": "图表类型",
        "description": "同一组比率的可视化形式"
      },
      {
        "key": "meterCount",
        "label": "指标数量",
        "type": "number",
        "default": 4,
        "min": 2,
        "max": 4,
        "desc": "展示的比率读数数量",
        "publicKey": "meterCount",
        "publicLabel": "指标数量",
        "description": "展示的比率读数数量"
      },
      {
        "key": "showThesis",
        "label": "左侧论点栏",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏左侧论点 + 判断栏（装饰框架）",
        "publicKey": "showThesis",
        "publicLabel": "左侧论点栏",
        "description": "显示/隐藏左侧论点 + 判断栏（装饰框架）"
      },
      {
        "key": "showTrack",
        "label": "剩余轨道",
        "type": "toggle",
        "default": true,
        "desc": "进度条剩余部分的斜纹轨道（装饰，仅进度条）",
        "publicKey": "showGuide",
        "publicLabel": "剩余轨道",
        "description": "进度条剩余部分的斜纹轨道（装饰，仅进度条）"
      },
      {
        "key": "showValueLabels",
        "label": "数值标签",
        "type": "toggle",
        "default": true,
        "desc": "各读数的大号数字（装饰数据）",
        "publicKey": "showValueLabels",
        "publicLabel": "数值标签",
        "description": "各读数的大号数字（装饰数据）"
      },
      {
        "key": "showNote",
        "label": "读数注解",
        "type": "toggle",
        "default": true,
        "desc": "每条读数的限定语（装饰文案，仅进度条/点阵）",
        "publicKey": "showNote",
        "publicLabel": "读数注解",
        "description": "每条读数的限定语（装饰文案，仅进度条/点阵）"
      },
      {
        "key": "focusEnabled",
        "label": "重点读数高亮",
        "type": "toggle",
        "default": true,
        "desc": "是否突出某一读数",
        "publicKey": "focusEnabled",
        "publicLabel": "重点读数高亮",
        "description": "是否突出某一读数"
      },
      {
        "key": "focusIndex",
        "label": "高亮第几个",
        "type": "number",
        "default": 0,
        "min": 0,
        "max": 3,
        "desc": "被突出的读数序号",
        "publicKey": "focusIndex",
        "publicLabel": "高亮第几个",
        "description": "被突出的读数序号"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#c8f135",
        "options": [
          "#c8f135",
          "#ff5a3c",
          "#3ca0ff",
          "#ffd23c"
        ],
        "desc": "主强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "主强调色"
      }
    ],
    "defaultProps": {
      "eyebrowId": "76",
      "eyebrowLabel": "OPEN SOURCE RISK",
      "title": "壁垒被压缩",
      "subhead": "风险 · 开源与大厂竞争 / COMMODITIZATION",
      "closing": "没有壁垒的模型能力会迅速商品化。",
      "tagLabel": "RISK · 竞争压力",
      "kicker": "开源模型降低能力门槛，<b>大厂生态</b> 压缩初创公司的独立空间。",
      "verdict": {
        "label": "判断 / VERDICT",
        "note": "初创公司必须找到数据、工作流或行业入口壁垒。"
      },
      "meters": [
        {
          "name": "开源模型性能逼近",
          "en": "OSS PARITY",
          "value": "86",
          "unit": "%",
          "note": "开源与闭源能力差距快速收敛"
        },
        {
          "name": "大厂产品覆盖",
          "en": "INCUMBENT COVERAGE",
          "value": "72",
          "unit": "%",
          "note": "云与办公巨头已自带同类能力"
        },
        {
          "name": "企业自建意愿",
          "en": "BUILD-IN-HOUSE",
          "value": "34",
          "unit": "%",
          "note": "部分大客户转向自建替代采购"
        }
      ],
      "maxValue": 100,
      "footRight": "3 READINGS / METERS",
      "chartType": "meters",
      "meterCount": 3,
      "showTrack": true,
      "showValueLabels": true,
      "showNote": true,
      "showThesis": true,
      "focusEnabled": true,
      "focusIndex": 0,
      "accent": "#c8f135"
    }
  },
  {
    "key": "theme06_page069",
    "themeKey": "theme06",
    "pageNumber": 69,
    "layout": "THEME06-069",
    "slot": "infra",
    "label": "65 · 确定性预算 / INFRA STRATEGY",
    "bgClass": "",
    "controls": [
      {
        "key": "cardCount",
        "label": "方向数量",
        "type": "number",
        "default": 4,
        "min": 2,
        "max": 5,
        "desc": "展示的推荐方向数量",
        "publicKey": "cardCount",
        "publicLabel": "方向数量",
        "description": "展示的推荐方向数量"
      },
      {
        "key": "layout",
        "label": "方向排布",
        "type": "select",
        "default": "cards",
        "options": [
          [
            "cards",
            "方向卡"
          ],
          [
            "rows",
            "列表行"
          ]
        ],
        "desc": "推荐方向的呈现形式（有图片时自动转列表行）",
        "publicKey": "layout",
        "publicLabel": "方向排布",
        "description": "推荐方向的呈现形式（有图片时自动转列表行）"
      },
      {
        "key": "mediaSlotCount",
        "label": "图片槽数量",
        "type": "number",
        "default": 0,
        "min": 0,
        "max": 2,
        "desc": "右侧自适应图片槽数量（0 时方向卡占满；上传后按图片比例自适应，构图随数量重排）",
        "publicKey": "mediaSlotCount",
        "publicLabel": "图片槽数量",
        "description": "右侧自适应图片槽数量（0 时方向卡占满；上传后按图片比例自适应，构图随数量重排）"
      },
      {
        "key": "watchCount",
        "label": "筛选清单条数",
        "type": "number",
        "default": 4,
        "min": 0,
        "max": 4,
        "desc": "左侧筛选指标清单条数（0 隐藏整列）",
        "publicKey": "watchCount",
        "publicLabel": "筛选清单条数",
        "description": "左侧筛选指标清单条数（0 隐藏整列）"
      },
      {
        "key": "focusEnabled",
        "label": "重点方向高亮",
        "type": "toggle",
        "default": true,
        "desc": "是否把某一方向拉成实心强调（最优先推荐）",
        "publicKey": "focusEnabled",
        "publicLabel": "重点方向高亮",
        "description": "是否把某一方向拉成实心强调（最优先推荐）"
      },
      {
        "key": "focusIndex",
        "label": "高亮第几个",
        "type": "number",
        "default": 0,
        "min": 0,
        "max": 4,
        "desc": "被突出的方向序号",
        "publicKey": "focusIndex",
        "publicLabel": "高亮第几个",
        "description": "被突出的方向序号"
      },
      {
        "key": "showTag",
        "label": "方向标签",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏每个方向的标签芯片（装饰）",
        "publicKey": "showTag",
        "publicLabel": "方向标签",
        "description": "显示/隐藏每个方向的标签芯片（装饰）"
      },
      {
        "key": "showBadge",
        "label": "区块徽标",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏策略 / 方向区徽标（装饰）",
        "publicKey": "showBadge",
        "publicLabel": "区块徽标",
        "description": "显示/隐藏策略 / 方向区徽标（装饰）"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#c8f135",
        "options": [
          "#c8f135",
          "#ff5a3c",
          "#3ca0ff",
          "#ffd23c"
        ],
        "desc": "主强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "主强调色"
      }
    ],
    "defaultProps": {
      "eyebrowId": "77",
      "eyebrowLabel": "INFRASTRUCTURE STRATEGY",
      "title": "确定性预算",
      "subhead": "策略 · 优先基础设施 / PRIORITIZE INFRA",
      "closing": "优先看能支撑全行业增长的基础设施。",
      "stanceTag": "STRATEGY · 优先基础设施",
      "dirTag": "PICKS",
      "thesis": "基础设施公司更接近 <b>刚性预算</b>，收入确定性相对更强——模型胜负未定时，卖铲子仍是更稳的资本逻辑。",
      "watchCaption": "关注指标 / WHAT TO WATCH",
      "watch": [
        {
          "k": "收入增速",
          "en": "REVENUE GROWTH"
        },
        {
          "k": "毛利率",
          "en": "GROSS MARGIN"
        },
        {
          "k": "客户集中度",
          "en": "CONCENTRATION"
        },
        {
          "k": "资源锁定",
          "en": "RESOURCE LOCK-IN"
        }
      ],
      "railCaption": "推荐方向 / RECOMMENDED",
      "directions": [
        {
          "name": "GPU 云",
          "en": "GPU CLOUD",
          "tag": "算力供给"
        },
        {
          "name": "数据平台",
          "en": "DATA PLATFORM",
          "tag": "企业刚需"
        },
        {
          "name": "评测工具",
          "en": "EVAL TOOLING",
          "tag": "合规门槛"
        },
        {
          "name": "推理优化",
          "en": "INFERENCE OPT",
          "tag": "成本曲线"
        }
      ],
      "mediaPlaceholder": "基础设施示意 / DROP IMAGE",
      "footRight": "4 方向 · FULL",
      "cardCount": 4,
      "layout": "cards",
      "mediaSlotCount": 0,
      "watchCount": 4,
      "focusEnabled": true,
      "focusIndex": 0,
      "showTag": true,
      "showBadge": true,
      "accent": "#c8f135"
    }
  },
  {
    "key": "theme06_page070",
    "themeKey": "theme06",
    "pageNumber": 70,
    "layout": "THEME06-070",
    "slot": "vertical",
    "label": "66 · 嵌入工作流 / VERTICAL STRATEGY",
    "bgClass": "",
    "controls": [
      {
        "key": "cardCount",
        "label": "方向数量",
        "type": "number",
        "default": 4,
        "min": 2,
        "max": 5,
        "desc": "展示的推荐方向数量",
        "publicKey": "cardCount",
        "publicLabel": "方向数量",
        "description": "展示的推荐方向数量"
      },
      {
        "key": "layout",
        "label": "方向排布",
        "type": "select",
        "default": "cards",
        "options": [
          [
            "cards",
            "方向卡"
          ],
          [
            "rows",
            "列表行"
          ]
        ],
        "desc": "推荐方向的呈现形式（有图片时自动转列表行）",
        "publicKey": "layout",
        "publicLabel": "方向排布",
        "description": "推荐方向的呈现形式（有图片时自动转列表行）"
      },
      {
        "key": "mediaSlotCount",
        "label": "图片槽数量",
        "type": "number",
        "default": 0,
        "min": 0,
        "max": 2,
        "desc": "右侧自适应图片槽数量（0 时方向卡占满；上传后按图片比例自适应，构图随数量重排）",
        "publicKey": "mediaSlotCount",
        "publicLabel": "图片槽数量",
        "description": "右侧自适应图片槽数量（0 时方向卡占满；上传后按图片比例自适应，构图随数量重排）"
      },
      {
        "key": "watchCount",
        "label": "筛选清单条数",
        "type": "number",
        "default": 4,
        "min": 0,
        "max": 4,
        "desc": "左侧筛选指标清单条数（0 隐藏整列）",
        "publicKey": "watchCount",
        "publicLabel": "筛选清单条数",
        "description": "左侧筛选指标清单条数（0 隐藏整列）"
      },
      {
        "key": "focusEnabled",
        "label": "重点方向高亮",
        "type": "toggle",
        "default": true,
        "desc": "是否把某一方向拉成实心强调（最优先推荐）",
        "publicKey": "focusEnabled",
        "publicLabel": "重点方向高亮",
        "description": "是否把某一方向拉成实心强调（最优先推荐）"
      },
      {
        "key": "focusIndex",
        "label": "高亮第几个",
        "type": "number",
        "default": 0,
        "min": 0,
        "max": 4,
        "desc": "被突出的方向序号",
        "publicKey": "focusIndex",
        "publicLabel": "高亮第几个",
        "description": "被突出的方向序号"
      },
      {
        "key": "showTag",
        "label": "方向标签",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏每个方向的标签芯片（装饰）",
        "publicKey": "showTag",
        "publicLabel": "方向标签",
        "description": "显示/隐藏每个方向的标签芯片（装饰）"
      },
      {
        "key": "showBadge",
        "label": "区块徽标",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏策略 / 方向区徽标（装饰）",
        "publicKey": "showBadge",
        "publicLabel": "区块徽标",
        "description": "显示/隐藏策略 / 方向区徽标（装饰）"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#c8f135",
        "options": [
          "#c8f135",
          "#ff5a3c",
          "#3ca0ff",
          "#ffd23c"
        ],
        "desc": "主强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "主强调色"
      }
    ],
    "defaultProps": {
      "eyebrowId": "78",
      "eyebrowLabel": "VERTICAL STRATEGY",
      "title": "嵌入工作流",
      "subhead": "策略 · 筛选垂直应用 / EMBED IN WORKFLOW",
      "closing": "应用价值来自流程位置。",
      "stanceTag": "STRATEGY · 筛选垂直应用",
      "dirTag": "SCENES",
      "thesis": "垂直应用要看是否 <b>嵌入刚性流程</b>，而不是只看生成效果——能成为工作流一部分的应用才有长期价值。",
      "watchCaption": "关注指标 / WHAT TO WATCH",
      "watch": [
        {
          "k": "付费留存",
          "en": "PAID RETENTION"
        },
        {
          "k": "使用频次",
          "en": "USAGE FREQUENCY"
        },
        {
          "k": "席位扩张",
          "en": "SEAT EXPANSION"
        },
        {
          "k": "净收入留存",
          "en": "NET REVENUE RET."
        }
      ],
      "railCaption": "重点场景 / KEY SCENES",
      "directions": [
        {
          "name": "法律",
          "en": "LEGAL",
          "tag": "高客单价"
        },
        {
          "name": "医疗",
          "en": "HEALTHCARE",
          "tag": "高壁垒"
        },
        {
          "name": "客服",
          "en": "SUPPORT",
          "tag": "可量化 ROI"
        },
        {
          "name": "企业搜索",
          "en": "ENTERPRISE SEARCH",
          "tag": "高频入口"
        },
        {
          "name": "开发者工具",
          "en": "DEV TOOLS",
          "tag": "刚性预算"
        }
      ],
      "mediaPlaceholder": "工作流嵌入示意 / DROP IMAGE",
      "footRight": "5 场景 · 1 IMG",
      "cardCount": 5,
      "layout": "rows",
      "mediaSlotCount": 1,
      "watchCount": 4,
      "focusEnabled": true,
      "focusIndex": 2,
      "showTag": true,
      "showBadge": true,
      "accent": "#c8f135"
    }
  },
  {
    "key": "theme06_page071",
    "themeKey": "theme06",
    "pageNumber": 71,
    "layout": "THEME06-071",
    "slot": "quote",
    "label": "67 · 结论 / CONCLUSION",
    "bgClass": "",
    "controls": [
      {
        "key": "showMeta",
        "label": "结论卡",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏底部的支撑结论卡",
        "publicKey": "showMeta",
        "publicLabel": "结论卡",
        "description": "显示/隐藏底部的支撑结论卡"
      },
      {
        "key": "metaCount",
        "label": "结论卡数量",
        "type": "number",
        "default": 3,
        "min": 0,
        "max": 3,
        "desc": "底部结论卡数量",
        "publicKey": "metaCount",
        "publicLabel": "结论卡数量",
        "description": "底部结论卡数量"
      },
      {
        "key": "align",
        "label": "对齐方式",
        "type": "select",
        "default": "left",
        "options": [
          [
            "left",
            "左对齐"
          ],
          [
            "center",
            "居中"
          ]
        ],
        "desc": "金句区域的对齐方式",
        "publicKey": "align",
        "publicLabel": "对齐方式",
        "description": "金句区域的对齐方式"
      },
      {
        "key": "showWatermark",
        "label": "背景大字",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏背景水印字（装饰）",
        "publicKey": "showWatermark",
        "publicLabel": "背景大字",
        "description": "显示/隐藏背景水印字（装饰）"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#c8f135",
        "options": [
          "#c8f135",
          "#ff5a3c",
          "#3ca0ff",
          "#ffd23c"
        ],
        "desc": "主强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "主强调色"
      }
    ],
    "defaultProps": {
      "eyebrowId": "13",
      "eyebrowLabel": "CONCLUSION",
      "kicker": "看融资只是起点，看兑现才是判断。",
      "quote": "资本下一阶段，将从<b>赌叙事</b>转向<b>看兑现</b>。",
      "source": "AI CAPITAL LAB · 2024 调研",
      "watermark": "END",
      "meta": [
        {
          "k": "01 / 集中",
          "v": "资金高度向头部集中，赢家通吃趋势加强。"
        },
        {
          "k": "02 / 兑现",
          "v": "热度从 AGI 叙事转向收入与毛利的兑现。"
        },
        {
          "k": "03 / 筛选",
          "v": "下一阶段淘汰只会讲故事、缺乏壁垒的公司。"
        }
      ],
      "showMeta": true,
      "metaCount": 3,
      "align": "left",
      "showWatermark": true,
      "accent": "#c8f135"
    }
  },
  {
    "key": "theme06_page072",
    "themeKey": "theme06",
    "pageNumber": 72,
    "layout": "THEME06-072",
    "slot": "ipowatch",
    "label": "68 · 估值锚重定价 / IPO WATCH",
    "bgClass": "",
    "controls": [
      {
        "key": "phaseCount",
        "label": "阶段数量",
        "type": "number",
        "default": 4,
        "min": 3,
        "max": 5,
        "desc": "时间轴阶段节点数量",
        "publicKey": "phaseCount",
        "publicLabel": "阶段数量",
        "description": "时间轴阶段节点数量"
      },
      {
        "key": "layout",
        "label": "时间轴形态",
        "type": "select",
        "default": "timeline",
        "options": [
          [
            "timeline",
            "横向轴"
          ],
          [
            "stack",
            "纵向步骤"
          ]
        ],
        "desc": "同一组阶段：横向时间轴 / 纵向编号步骤",
        "publicKey": "layout",
        "publicLabel": "时间轴形态",
        "description": "同一组阶段：横向时间轴 / 纵向编号步骤"
      },
      {
        "key": "watchCount",
        "label": "观察对象数量",
        "type": "number",
        "default": 4,
        "min": 0,
        "max": 4,
        "desc": "底部观察对象芯片数量（0 隐藏整列）",
        "publicKey": "watchCount",
        "publicLabel": "观察对象数量",
        "description": "底部观察对象芯片数量（0 隐藏整列）"
      },
      {
        "key": "metricCount",
        "label": "观察指标数量",
        "type": "number",
        "default": 4,
        "min": 0,
        "max": 4,
        "desc": "底部观察指标标签数量（0 隐藏整列）",
        "publicKey": "metricCount",
        "publicLabel": "观察指标数量",
        "description": "底部观察指标标签数量（0 隐藏整列）"
      },
      {
        "key": "focusEnabled",
        "label": "重点阶段高亮",
        "type": "toggle",
        "default": true,
        "desc": "是否把某一阶段拉成 lime 强调",
        "publicKey": "focusEnabled",
        "publicLabel": "重点阶段高亮",
        "description": "是否把某一阶段拉成 lime 强调"
      },
      {
        "key": "focusIndex",
        "label": "高亮第几个",
        "type": "number",
        "default": 2,
        "min": 0,
        "max": 4,
        "desc": "被突出的阶段序号",
        "publicKey": "focusIndex",
        "publicLabel": "高亮第几个",
        "description": "被突出的阶段序号"
      },
      {
        "key": "showAxis",
        "label": "连接轴线",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏连接轴线与节点圆点（装饰，仅横向轴）",
        "publicKey": "showAxis",
        "publicLabel": "连接轴线",
        "description": "显示/隐藏连接轴线与节点圆点（装饰，仅横向轴）"
      },
      {
        "key": "showMarkers",
        "label": "阶段大号编号",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏每个阶段背景的大号编号（装饰，仅横向轴）",
        "publicKey": "showMarkers",
        "publicLabel": "阶段大号编号",
        "description": "显示/隐藏每个阶段背景的大号编号（装饰，仅横向轴）"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#c8f135",
        "options": [
          "#c8f135",
          "#ff5a3c",
          "#3ca0ff",
          "#ffd23c"
        ],
        "desc": "主强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "主强调色"
      }
    ],
    "defaultProps": {
      "eyebrowId": "79",
      "eyebrowLabel": "IPO WATCH",
      "title": "估值锚重定价",
      "subhead": "策略 · 观察 IPO 窗口 / IPO WINDOW",
      "closing": "公开市场会重新定价 AI 叙事。",
      "watchTag": "STRATEGY · IPO 观察",
      "thesis": "头部公司的 IPO 表现，将重新定价整个 AI <b>一级市场的估值锚</b>——上市后承压，预期会同步下修。",
      "railCaption": "IPO 观察时间轴 / WATCH TIMELINE",
      "phases": [
        {
          "when": "2025 H1",
          "name": "窗口试探",
          "en": "WINDOW TEST",
          "note": "头部公司启动上市筹备，测试公开市场情绪。"
        },
        {
          "when": "2025 H2",
          "name": "首批挂牌",
          "en": "FIRST LISTINGS",
          "note": "基础设施类标的率先挂牌，估值锚初步形成。"
        },
        {
          "when": "2026",
          "name": "集中上市",
          "en": "IPO WAVE",
          "note": "模型与数据平台公司密集进入公开市场。"
        },
        {
          "when": "2027",
          "name": "估值回归",
          "en": "REPRICE",
          "note": "一级市场对标公开估值，叙事溢价被重新定价。"
        }
      ],
      "watchCaption": "观察对象 / WATCH-LIST",
      "watchList": [
        {
          "name": "OpenAI",
          "tag": "通用模型"
        },
        {
          "name": "Anthropic",
          "tag": "安全模型"
        },
        {
          "name": "Databricks",
          "tag": "数据平台"
        },
        {
          "name": "CoreWeave",
          "tag": "GPU 云"
        }
      ],
      "metricCaption": "观察指标 / WATCH METRICS",
      "metrics": [
        {
          "k": "上市表现 / DEBUT",
          "v": "锚"
        },
        {
          "k": "收入增速 / GROWTH",
          "v": "↑"
        },
        {
          "k": "毛利率 / MARGIN",
          "v": "%"
        },
        {
          "k": "云成本占比 / COMPUTE",
          "v": "↓"
        }
      ],
      "footRight": "4 PHASES · TIMELINE",
      "phaseCount": 4,
      "layout": "timeline",
      "watchCount": 4,
      "metricCount": 4,
      "focusEnabled": true,
      "focusIndex": 2,
      "showAxis": true,
      "showMarkers": true,
      "accent": "#c8f135"
    }
  },
  {
    "key": "theme06_page073",
    "themeKey": "theme06",
    "pageNumber": 73,
    "layout": "THEME06-073",
    "slot": "ch06",
    "label": "69 · 数据附录精读 / CHAPTER 06",
    "bgClass": "",
    "controls": [
      {
        "key": "background",
        "label": "背景形态",
        "type": "select",
        "default": "glow",
        "options": [
          [
            "glow",
            "光晕"
          ],
          [
            "solid",
            "纯色"
          ],
          [
            "panel",
            "色块"
          ]
        ],
        "desc": "分隔页背景的呈现形式",
        "publicKey": "background",
        "publicLabel": "背景形态",
        "description": "分隔页背景的呈现形式"
      },
      {
        "key": "showIndex",
        "label": "大号章节号",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏超大章节编号",
        "publicKey": "showIndex",
        "publicLabel": "大号章节号",
        "description": "显示/隐藏超大章节编号"
      },
      {
        "key": "keywordCount",
        "label": "关键词数量",
        "type": "number",
        "default": 4,
        "min": 0,
        "max": 6,
        "desc": "底部关键词标签数量（0 隐藏）",
        "publicKey": "keywordCount",
        "publicLabel": "关键词数量",
        "description": "底部关键词标签数量（0 隐藏）"
      },
      {
        "key": "focusEnabled",
        "label": "关键词高亮",
        "type": "toggle",
        "default": false,
        "desc": "是否高亮某个关键词标签",
        "publicKey": "focusEnabled",
        "publicLabel": "关键词高亮",
        "description": "是否高亮某个关键词标签"
      },
      {
        "key": "focusIndex",
        "label": "高亮第几个",
        "type": "number",
        "default": 0,
        "min": 0,
        "max": 5,
        "desc": "被高亮的关键词序号",
        "publicKey": "focusIndex",
        "publicLabel": "高亮第几个",
        "description": "被高亮的关键词序号"
      },
      {
        "key": "showWatermark",
        "label": "背景大字",
        "type": "toggle",
        "default": false,
        "desc": "显示/隐藏背景巨型水印字（装饰）",
        "publicKey": "showWatermark",
        "publicLabel": "背景大字",
        "description": "显示/隐藏背景巨型水印字（装饰）"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#c8f135",
        "options": [
          "#c8f135",
          "#ff5a3c",
          "#3ca0ff",
          "#ffd23c"
        ],
        "desc": "主强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "主强调色"
      }
    ],
    "defaultProps": {
      "eyebrowId": "CH",
      "eyebrowLabel": "CHAPTER 06",
      "chapterNo": "06",
      "title": "数据附录精读",
      "subhead": "月度热力 · 超级交易 · 头部集中 / DATA APPENDIX",
      "closing": "用数据回看，再做最终判断。",
      "keywords": [
        "月度节奏",
        "超级交易",
        "头部集中",
        "口径回看"
      ],
      "watermark": "06",
      "showIndex": true,
      "keywordCount": 4,
      "focusEnabled": false,
      "focusIndex": 0,
      "background": "glow",
      "showWatermark": false,
      "accent": "#c8f135"
    }
  },
  {
    "key": "theme06_page074",
    "themeKey": "theme06",
    "pageNumber": 74,
    "layout": "THEME06-074",
    "slot": "heatmap",
    "label": "70 · 全年月度热力 / MONTHLY HEAT",
    "bgClass": "",
    "controls": [
      {
        "key": "chartType",
        "label": "图表类型",
        "type": "select",
        "default": "grid",
        "options": [
          [
            "grid",
            "热力格"
          ],
          [
            "columns",
            "纵向柱"
          ],
          [
            "dots",
            "点阵"
          ]
        ],
        "desc": "同一组节奏数据的可视化形式",
        "publicKey": "chartType",
        "publicLabel": "图表类型",
        "description": "同一组节奏数据的可视化形式"
      },
      {
        "key": "periodCount",
        "label": "周期数量",
        "type": "number",
        "default": 12,
        "min": 6,
        "max": 12,
        "desc": "展示的周期（月份）数量",
        "publicKey": "periodCount",
        "publicLabel": "周期数量",
        "description": "展示的周期（月份）数量"
      },
      {
        "key": "focusEnabled",
        "label": "重点周期高亮",
        "type": "toggle",
        "default": true,
        "desc": "是否突出某一周期",
        "publicKey": "focusEnabled",
        "publicLabel": "重点周期高亮",
        "description": "是否突出某一周期"
      },
      {
        "key": "focusIndex",
        "label": "高亮第几个",
        "type": "number",
        "default": 7,
        "min": 0,
        "max": 11,
        "desc": "被突出的周期序号（默认峰值月）",
        "publicKey": "focusIndex",
        "publicLabel": "高亮第几个",
        "description": "被突出的周期序号（默认峰值月）"
      },
      {
        "key": "showPeakMark",
        "label": "峰谷读数带",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏顶部峰值/低位/合计读数（装饰锚点）",
        "publicKey": "showPeakMark",
        "publicLabel": "峰谷读数带",
        "description": "显示/隐藏顶部峰值/低位/合计读数（装饰锚点）"
      },
      {
        "key": "showValueLabels",
        "label": "数值标签",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏每格的数值数字（装饰数据）",
        "publicKey": "showValueLabels",
        "publicLabel": "数值标签",
        "description": "显示/隐藏每格的数值数字（装饰数据）"
      },
      {
        "key": "showScale",
        "label": "强度图例",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏底部低→高强度图例（装饰）",
        "publicKey": "showScale",
        "publicLabel": "强度图例",
        "description": "显示/隐藏底部低→高强度图例（装饰）"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#c8f135",
        "options": [
          "#c8f135",
          "#ff5a3c",
          "#3ca0ff",
          "#ffd23c"
        ],
        "desc": "主强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "主强调色"
      }
    ],
    "defaultProps": {
      "eyebrowId": "84",
      "eyebrowLabel": "MONTHLY HEAT",
      "title": "全年月度热力",
      "subhead": "12 个月融资节奏 / 金额 亿$",
      "closing": "融资节奏的核心不是均值，而是峰值背后的超级交易。",
      "unit": "亿",
      "total": "970亿",
      "footRight": "12 MONTHS · PEAK AUG",
      "periods": [
        {
          "m": "1月",
          "en": "JAN",
          "v": 45
        },
        {
          "m": "2月",
          "en": "FEB",
          "v": 58
        },
        {
          "m": "3月",
          "en": "MAR",
          "v": 59
        },
        {
          "m": "4月",
          "en": "APR",
          "v": 86
        },
        {
          "m": "5月",
          "en": "MAY",
          "v": 105
        },
        {
          "m": "6月",
          "en": "JUN",
          "v": 93
        },
        {
          "m": "7月",
          "en": "JUL",
          "v": 92
        },
        {
          "m": "8月",
          "en": "AUG",
          "v": 118
        },
        {
          "m": "9月",
          "en": "SEP",
          "v": 108
        },
        {
          "m": "10月",
          "en": "OCT",
          "v": 73
        },
        {
          "m": "11月",
          "en": "NOV",
          "v": 81
        },
        {
          "m": "12月",
          "en": "DEC",
          "v": 52
        }
      ],
      "chartType": "grid",
      "periodCount": 12,
      "focusEnabled": true,
      "focusIndex": 7,
      "showScale": true,
      "showValueLabels": true,
      "showPeakMark": true,
      "accent": "#c8f135"
    }
  },
  {
    "key": "theme06_page075",
    "themeKey": "theme06",
    "pageNumber": 75,
    "layout": "THEME06-075",
    "slot": "megadeals",
    "label": "71 · 超级交易画像 / MEGA DEALS",
    "bgClass": "",
    "controls": [
      {
        "key": "mediaSlotCount",
        "label": "图片槽数量",
        "type": "number",
        "default": 2,
        "min": 0,
        "max": 3,
        "desc": "右侧自适应图片槽数量（0 改为超级交易墙；上传后按图片比例自适应，构图随数量重排）",
        "publicKey": "mediaSlotCount",
        "publicLabel": "图片槽数量",
        "description": "右侧自适应图片槽数量（0 改为超级交易墙；上传后按图片比例自适应，构图随数量重排）"
      },
      {
        "key": "metricCount",
        "label": "指标数量",
        "type": "number",
        "default": 3,
        "min": 2,
        "max": 4,
        "desc": "左栏辅助指标卡数量",
        "publicKey": "metricCount",
        "publicLabel": "指标数量",
        "description": "左栏辅助指标卡数量"
      },
      {
        "key": "tagCount",
        "label": "关键词数量",
        "type": "number",
        "default": 3,
        "min": 0,
        "max": 6,
        "desc": "左栏关键词芯片数量（0 隐藏整行）",
        "publicKey": "tagCount",
        "publicLabel": "关键词数量",
        "description": "左栏关键词芯片数量（0 隐藏整行）"
      },
      {
        "key": "focusEnabled",
        "label": "重点指标高亮",
        "type": "toggle",
        "default": true,
        "desc": "是否突出某一指标（0 图片时突出交易墙某行）",
        "publicKey": "focusEnabled",
        "publicLabel": "重点指标高亮",
        "description": "是否突出某一指标（0 图片时突出交易墙某行）"
      },
      {
        "key": "focusIndex",
        "label": "高亮第几个",
        "type": "number",
        "default": 1,
        "min": 0,
        "max": 3,
        "desc": "被突出的指标序号",
        "publicKey": "focusIndex",
        "publicLabel": "高亮第几个",
        "description": "被突出的指标序号"
      },
      {
        "key": "showHero",
        "label": "主数字",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏左栏主数字（装饰锚点）",
        "publicKey": "showHero",
        "publicLabel": "主数字",
        "description": "显示/隐藏左栏主数字（装饰锚点）"
      },
      {
        "key": "showTagBadge",
        "label": "角标徽标",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏左上角徽标（装饰）",
        "publicKey": "showTagBadge",
        "publicLabel": "角标徽标",
        "description": "显示/隐藏左上角徽标（装饰）"
      },
      {
        "key": "showCaption",
        "label": "画廊说明",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏画廊顶部说明条（装饰）",
        "publicKey": "showCaption",
        "publicLabel": "画廊说明",
        "description": "显示/隐藏画廊顶部说明条（装饰）"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#c8f135",
        "options": [
          "#c8f135",
          "#ff5a3c",
          "#3ca0ff",
          "#ffd23c"
        ],
        "desc": "主强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "主强调色"
      }
    ],
    "defaultProps": {
      "eyebrowId": "85",
      "eyebrowLabel": "MEGA DEALS",
      "title": "超级交易画像",
      "subhead": "10 亿美元以上交易层 / MEGA-DEAL TIER",
      "closing": "市场被少数超级交易重新定价。",
      "galleryTag": "超级交易 / MEGA",
      "hero": {
        "value": "718",
        "unit": "亿$",
        "label": "10 亿+ 交易层合计 / TIER TOTAL"
      },
      "metrics": [
        {
          "k": "交易笔数 / DEALS",
          "v": "12 笔"
        },
        {
          "k": "占全年 / SHARE",
          "v": "74%"
        },
        {
          "k": "平均单笔 / AVG",
          "v": "59.8 亿"
        },
        {
          "k": "最大单笔 / MAX",
          "v": "66 亿"
        }
      ],
      "tags": [
        "通用大模型",
        "算力基础设施",
        "安全智能",
        "实时数据"
      ],
      "wall": [
        {
          "name": "OpenAI",
          "v": 66
        },
        {
          "name": "Anthropic",
          "v": 65
        },
        {
          "name": "xAI",
          "v": 50
        },
        {
          "name": "CoreWeave",
          "v": 11
        },
        {
          "name": "SSI",
          "v": 10
        },
        {
          "name": "Scale AI",
          "v": 10
        }
      ],
      "caption": "超级交易画像",
      "railCaption": "MEGA TIER",
      "mediaSlotCount": 2,
      "metricCount": 3,
      "tagCount": 3,
      "focusEnabled": true,
      "focusIndex": 1,
      "showHero": true,
      "showTagBadge": true,
      "showCaption": true,
      "accent": "#c8f135"
    }
  },
  {
    "key": "theme06_page076",
    "themeKey": "theme06",
    "pageNumber": 76,
    "layout": "THEME06-076",
    "slot": "megabig",
    "label": "72 · 超级交易均值 / MEGA AVG",
    "bgClass": "",
    "controls": [
      {
        "key": "metricCount",
        "label": "辅助指标数量",
        "type": "number",
        "default": 3,
        "min": 0,
        "max": 3,
        "desc": "大数字下方的辅助指标数量（0 隐藏）",
        "publicKey": "metricCount",
        "publicLabel": "辅助指标数量",
        "description": "大数字下方的辅助指标数量（0 隐藏）"
      },
      {
        "key": "align",
        "label": "对齐方式",
        "type": "select",
        "default": "left",
        "options": [
          [
            "left",
            "左对齐"
          ],
          [
            "center",
            "居中"
          ]
        ],
        "desc": "主数字区域的对齐方式",
        "publicKey": "align",
        "publicLabel": "对齐方式",
        "description": "主数字区域的对齐方式"
      },
      {
        "key": "showWatermark",
        "label": "背景大字",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏背景水印字（装饰）",
        "publicKey": "showWatermark",
        "publicLabel": "背景大字",
        "description": "显示/隐藏背景水印字（装饰）"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#c8f135",
        "options": [
          "#c8f135",
          "#ff5a3c",
          "#3ca0ff",
          "#ffd23c"
        ],
        "desc": "主强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "主强调色"
      }
    ],
    "defaultProps": {
      "eyebrowId": "86",
      "eyebrowLabel": "MEGA-DEAL AVERAGE",
      "kicker": "少数几笔交易，重画了全年的融资曲线。",
      "figure": "59.8",
      "unit": "亿$",
      "explain": "<b>头部 12 笔超级交易</b> 的平均单笔规模——合计 718 亿美元，约占全年大额融资的四分之三。",
      "closing": "市场被少数超级交易重新定价。",
      "watermark": "MEGA",
      "metrics": [
        {
          "k": "超级交易 / DEALS",
          "v": "12 笔"
        },
        {
          "k": "合计金额 / TOTAL",
          "v": "$718亿"
        },
        {
          "k": "占全年 / SHARE",
          "v": "74%"
        }
      ],
      "metricCount": 3,
      "align": "center",
      "showWatermark": true,
      "accent": "#c8f135"
    }
  },
  {
    "key": "theme06_page077",
    "themeKey": "theme06",
    "pageNumber": 77,
    "layout": "THEME06-077",
    "slot": "recap",
    "label": "73 · 全景速览 / YEAR IN ONE VIEW",
    "bgClass": "",
    "controls": [
      {
        "key": "statCount",
        "label": "数字数量",
        "type": "number",
        "default": 4,
        "min": 2,
        "max": 5,
        "desc": "展示的大数字单元数量",
        "publicKey": "statCount",
        "publicLabel": "数字数量",
        "description": "展示的大数字单元数量"
      },
      {
        "key": "layout",
        "label": "排布形态",
        "type": "select",
        "default": "hero",
        "options": [
          [
            "hero",
            "主数字 + 阵列"
          ],
          [
            "grid",
            "均分网格"
          ],
          [
            "row",
            "单行数字带"
          ]
        ],
        "desc": "大数字墙的版式",
        "publicKey": "layout",
        "publicLabel": "排布形态",
        "description": "大数字墙的版式"
      },
      {
        "key": "focusEnabled",
        "label": "主数字高亮",
        "type": "toggle",
        "default": true,
        "desc": "是否把某个数字拉成 lime 主数字（hero 时即左侧大格）",
        "publicKey": "focusEnabled",
        "publicLabel": "主数字高亮",
        "description": "是否把某个数字拉成 lime 主数字（hero 时即左侧大格）"
      },
      {
        "key": "focusIndex",
        "label": "主数字第几个",
        "type": "number",
        "default": 0,
        "min": 0,
        "max": 4,
        "desc": "作为主数字/强调的序号",
        "publicKey": "focusIndex",
        "publicLabel": "主数字第几个",
        "description": "作为主数字/强调的序号"
      },
      {
        "key": "showWatermark",
        "label": "背景大字",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏背景水印字（装饰）",
        "publicKey": "showWatermark",
        "publicLabel": "背景大字",
        "description": "显示/隐藏背景水印字（装饰）"
      },
      {
        "key": "showThesis",
        "label": "引导句",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏顶部一句话引导（装饰文案）",
        "publicKey": "showThesis",
        "publicLabel": "引导句",
        "description": "显示/隐藏顶部一句话引导（装饰文案）"
      },
      {
        "key": "showCaption",
        "label": "英文小注",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏每个数字的英文小注（装饰）",
        "publicKey": "showCaption",
        "publicLabel": "英文小注",
        "description": "显示/隐藏每个数字的英文小注（装饰）"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#c8f135",
        "options": [
          "#c8f135",
          "#ff5a3c",
          "#3ca0ff",
          "#ffd23c"
        ],
        "desc": "主强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "主强调色"
      }
    ],
    "defaultProps": {
      "eyebrowId": "81",
      "eyebrowLabel": "YEAR IN REVIEW",
      "title": "全景速览",
      "subhead": "2024 · 一年回望 / YEAR IN ONE VIEW",
      "closing": "资本仍在涌入，但下一阶段只认兑现。",
      "watermark": "2024",
      "thesis": "一年 <b>970 亿美元</b> 涌入美国 AI，<b>97 笔</b> 大额交易，重新定义了资本的重心。",
      "stats": [
        {
          "v": "970亿$",
          "k": "全年融资",
          "en": "2024 VC INTO US AI"
        },
        {
          "v": "97 笔",
          "k": "大额事件",
          "en": "ROUNDS ≥ $100M"
        },
        {
          "v": "10亿$",
          "k": "平均单笔",
          "en": "PER MEGA DEAL"
        },
        {
          "v": "63.9%",
          "k": "湾区占比",
          "en": "BAY AREA SHARE"
        },
        {
          "v": "71.2%",
          "k": "Top-50 集中度",
          "en": "CAPITAL CONCENTRATION"
        }
      ],
      "footRight": "4 STATS · RECAP",
      "statCount": 4,
      "layout": "hero",
      "focusEnabled": true,
      "focusIndex": 0,
      "showWatermark": true,
      "showThesis": true,
      "showCaption": true,
      "accent": "#c8f135"
    }
  },
  {
    "key": "theme06_page078",
    "themeKey": "theme06",
    "pageNumber": 78,
    "layout": "THEME06-078",
    "slot": "sources",
    "label": "74 · 数据来源与口径 / SOURCES",
    "bgClass": "",
    "controls": [
      {
        "key": "rowCount",
        "label": "行数",
        "type": "number",
        "default": 4,
        "min": 3,
        "max": 5,
        "desc": "展示的维度行数（按数据截取）",
        "publicKey": "rowCount",
        "publicLabel": "行数",
        "description": "展示的维度行数（按数据截取）"
      },
      {
        "key": "columnCount",
        "label": "列数",
        "type": "number",
        "default": 4,
        "min": 3,
        "max": 4,
        "desc": "展示的列数（维度列恒显，3 时省略中间列）",
        "publicKey": "columnCount",
        "publicLabel": "列数",
        "description": "展示的列数（维度列恒显，3 时省略中间列）"
      },
      {
        "key": "focusEnabled",
        "label": "重点行高亮",
        "type": "toggle",
        "default": true,
        "desc": "是否把某一行拉成整条强调行",
        "publicKey": "focusEnabled",
        "publicLabel": "重点行高亮",
        "description": "是否把某一行拉成整条强调行"
      },
      {
        "key": "focusIndex",
        "label": "高亮第几行",
        "type": "number",
        "default": 3,
        "min": 0,
        "max": 4,
        "desc": "被强调的行序号",
        "publicKey": "focusIndex",
        "publicLabel": "高亮第几行",
        "description": "被强调的行序号"
      },
      {
        "key": "showFigures",
        "label": "关键数字带",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏顶部关键数字带（装饰锚点）",
        "publicKey": "showFigures",
        "publicLabel": "关键数字带",
        "description": "显示/隐藏顶部关键数字带（装饰锚点）"
      },
      {
        "key": "showIndex",
        "label": "行编号",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏行首序号（装饰）",
        "publicKey": "showIndex",
        "publicLabel": "行编号",
        "description": "显示/隐藏行首序号（装饰）"
      },
      {
        "key": "showCaseIndex",
        "label": "案例编号",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏右上角 CASE 编号（装饰）",
        "publicKey": "showCaseIndex",
        "publicLabel": "案例编号",
        "description": "显示/隐藏右上角 CASE 编号（装饰）"
      },
      {
        "key": "showTagBadge",
        "label": "案例徽标",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏案例徽标占位（装饰）",
        "publicKey": "showTagBadge",
        "publicLabel": "案例徽标",
        "description": "显示/隐藏案例徽标占位（装饰）"
      },
      {
        "key": "zebra",
        "label": "隔行底色",
        "type": "toggle",
        "default": true,
        "desc": "表格隔行浅底（通用表格样式）",
        "publicKey": "zebra",
        "publicLabel": "隔行底色",
        "description": "表格隔行浅底（通用表格样式）"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#c8f135",
        "options": [
          "#c8f135",
          "#ff5a3c",
          "#3ca0ff",
          "#ffd23c"
        ],
        "desc": "主强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "主强调色"
      }
    ],
    "defaultProps": {
      "eyebrowId": "82",
      "eyebrowLabel": "SOURCES & SCOPE",
      "title": "数据来源与口径",
      "subhead": "附录 · 口径说明 / SOURCES & SCOPE",
      "closing": "数据为研究估算，引用请注明口径。",
      "company": "SOURCES",
      "caseIndex": 1,
      "caseTotal": 4,
      "caseTag": "APPENDIX",
      "figures": [
        {
          "v": "2024",
          "k": "数据区间 / PERIOD"
        },
        {
          "v": "≥1 亿$",
          "k": "纳入门槛 / THRESHOLD"
        },
        {
          "v": "97 笔",
          "k": "样本规模 / SAMPLE"
        },
        {
          "v": "9 类",
          "k": "赛道划分 / SEGMENTS"
        }
      ],
      "columns": [
        {
          "k": "来源类型",
          "en": "SOURCE"
        },
        {
          "k": "覆盖",
          "en": "COVERAGE"
        },
        {
          "k": "代表来源",
          "en": "EXAMPLE"
        },
        {
          "k": "口径说明",
          "en": "SCOPE NOTE"
        }
      ],
      "rows": [
        {
          "no": 1,
          "dim": "融资事件库",
          "en": "DEAL DATABASE",
          "cells": [
            "97 笔",
            "一级市场数据库",
            "单笔 ≥1 亿美元为纳入门槛"
          ]
        },
        {
          "no": 2,
          "dim": "公司披露",
          "en": "COMPANY FILINGS",
          "cells": [
            "头部 12 家",
            "官方公告 · 新闻稿",
            "以最大单笔融资作为排名口径"
          ]
        },
        {
          "no": 3,
          "dim": "行业研究",
          "en": "MARKET RESEARCH",
          "cells": [
            "赛道 9 类",
            "第三方研究 · 投行报告",
            "赛道占比为模拟估算值"
          ]
        },
        {
          "no": 4,
          "dim": "公开报道",
          "en": "PUBLIC PRESS",
          "cells": [
            "2024 全年",
            "主流科技与财经媒体",
            "未披露轮次按区间中值估计"
          ]
        }
      ],
      "footRight": "4 SRC × 4 COL / APPENDIX",
      "rowCount": 4,
      "columnCount": 4,
      "focusEnabled": true,
      "focusIndex": 0,
      "showFigures": true,
      "showIndex": true,
      "showCaseIndex": false,
      "showTagBadge": true,
      "zebra": true,
      "accent": "#c8f135"
    }
  },
  {
    "key": "theme06_page079",
    "themeKey": "theme06",
    "pageNumber": 79,
    "layout": "THEME06-079",
    "slot": "closing",
    "label": "75 · 最终判断 / FINAL VERDICT",
    "bgClass": "",
    "controls": [
      {
        "key": "showMeta",
        "label": "结论卡",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏底部的支撑结论卡",
        "publicKey": "showMeta",
        "publicLabel": "结论卡",
        "description": "显示/隐藏底部的支撑结论卡"
      },
      {
        "key": "metaCount",
        "label": "结论卡数量",
        "type": "number",
        "default": 3,
        "min": 0,
        "max": 3,
        "desc": "底部结论卡数量",
        "publicKey": "metaCount",
        "publicLabel": "结论卡数量",
        "description": "底部结论卡数量"
      },
      {
        "key": "align",
        "label": "对齐方式",
        "type": "select",
        "default": "left",
        "options": [
          [
            "left",
            "左对齐"
          ],
          [
            "center",
            "居中"
          ]
        ],
        "desc": "金句区域的对齐方式",
        "publicKey": "align",
        "publicLabel": "对齐方式",
        "description": "金句区域的对齐方式"
      },
      {
        "key": "showWatermark",
        "label": "背景大字",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏背景水印字（装饰）",
        "publicKey": "showWatermark",
        "publicLabel": "背景大字",
        "description": "显示/隐藏背景水印字（装饰）"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#c8f135",
        "options": [
          "#c8f135",
          "#ff5a3c",
          "#3ca0ff",
          "#ffd23c"
        ],
        "desc": "主强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "主强调色"
      }
    ],
    "defaultProps": {
      "eyebrowId": "80",
      "eyebrowLabel": "CLOSING",
      "kicker": "最终判断 / 收尾页",
      "quote": "融资盛宴之后，真正的<b>竞争</b>才刚刚开始。",
      "source": "AI CAPITAL LAB · 2024 调研",
      "watermark": "THE END",
      "meta": [
        {
          "k": "叙事 → 兑现",
          "v": "资本下一阶段从赌叙事转向看兑现，收入与毛利成为试金石。"
        },
        {
          "k": "集中 → 筛选",
          "v": "资金高度集中于头部，市场进入残酷的筛选周期。"
        },
        {
          "k": "热度 → 壁垒",
          "v": "没有数据、流程或资源壁垒的公司将被迅速商品化。"
        }
      ],
      "showMeta": true,
      "metaCount": 3,
      "align": "center",
      "showWatermark": true,
      "accent": "#c8f135"
    }
  },
  {
    "key": "theme06_page080",
    "themeKey": "theme06",
    "pageNumber": 80,
    "layout": "THEME06-080",
    "slot": "ch07",
    "label": "76 · 前瞻信号 / CHAPTER 07",
    "bgClass": "",
    "controls": [
      {
        "key": "background",
        "label": "背景形态",
        "type": "select",
        "default": "glow",
        "options": [
          [
            "glow",
            "光晕"
          ],
          [
            "solid",
            "纯色"
          ],
          [
            "panel",
            "色块"
          ]
        ],
        "desc": "分隔页背景的呈现形式",
        "publicKey": "background",
        "publicLabel": "背景形态",
        "description": "分隔页背景的呈现形式"
      },
      {
        "key": "showIndex",
        "label": "大号章节号",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏超大章节编号",
        "publicKey": "showIndex",
        "publicLabel": "大号章节号",
        "description": "显示/隐藏超大章节编号"
      },
      {
        "key": "keywordCount",
        "label": "关键词数量",
        "type": "number",
        "default": 4,
        "min": 0,
        "max": 6,
        "desc": "底部关键词标签数量（0 隐藏）",
        "publicKey": "keywordCount",
        "publicLabel": "关键词数量",
        "description": "底部关键词标签数量（0 隐藏）"
      },
      {
        "key": "focusEnabled",
        "label": "关键词高亮",
        "type": "toggle",
        "default": false,
        "desc": "是否高亮某个关键词标签",
        "publicKey": "focusEnabled",
        "publicLabel": "关键词高亮",
        "description": "是否高亮某个关键词标签"
      },
      {
        "key": "focusIndex",
        "label": "高亮第几个",
        "type": "number",
        "default": 0,
        "min": 0,
        "max": 5,
        "desc": "被高亮的关键词序号",
        "publicKey": "focusIndex",
        "publicLabel": "高亮第几个",
        "description": "被高亮的关键词序号"
      },
      {
        "key": "showWatermark",
        "label": "背景大字",
        "type": "toggle",
        "default": false,
        "desc": "显示/隐藏背景巨型水印字（装饰）",
        "publicKey": "showWatermark",
        "publicLabel": "背景大字",
        "description": "显示/隐藏背景巨型水印字（装饰）"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#c8f135",
        "options": [
          "#c8f135",
          "#ff5a3c",
          "#3ca0ff",
          "#ffd23c"
        ],
        "desc": "主强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "主强调色"
      }
    ],
    "defaultProps": {
      "eyebrowId": "CH",
      "eyebrowLabel": "CHAPTER 07",
      "chapterNo": "07",
      "title": "前瞻信号",
      "subhead": "2025 年的观察坐标 / FORWARD SIGNALS 2025",
      "closing": "附录：用前瞻信号校准下一年的判断。",
      "keywords": [
        "资本流向",
        "收入兑现",
        "算力成本",
        "估值重定",
        "里程碑节奏"
      ],
      "watermark": "07",
      "showIndex": true,
      "keywordCount": 5,
      "focusEnabled": false,
      "focusIndex": 0,
      "background": "glow",
      "showWatermark": false,
      "accent": "#c8f135"
    }
  },
  {
    "key": "theme06_page081",
    "themeKey": "theme06",
    "pageNumber": 81,
    "layout": "THEME06-081",
    "slot": "capflow",
    "label": "77 · 资本流向预测 / CAPITAL FLOW",
    "bgClass": "",
    "controls": [
      {
        "key": "chartType",
        "label": "图表形态",
        "type": "select",
        "default": "treemap",
        "options": [
          [
            "treemap",
            "面积块"
          ],
          [
            "bars",
            "条形"
          ],
          [
            "grid",
            "网格"
          ]
        ],
        "desc": "同一组份额：面积treemap / 条形 / 网格",
        "publicKey": "chartType",
        "publicLabel": "图表形态",
        "description": "同一组份额：面积treemap / 条形 / 网格"
      },
      {
        "key": "blockCount",
        "label": "区块数量",
        "type": "number",
        "default": 6,
        "min": 3,
        "max": 6,
        "desc": "展示的份额区块数量",
        "publicKey": "blockCount",
        "publicLabel": "区块数量",
        "description": "展示的份额区块数量"
      },
      {
        "key": "focusEnabled",
        "label": "重点区块高亮",
        "type": "toggle",
        "default": true,
        "desc": "是否把某一区块拉成 lime 焦点块",
        "publicKey": "focusEnabled",
        "publicLabel": "重点区块高亮",
        "description": "是否把某一区块拉成 lime 焦点块"
      },
      {
        "key": "focusIndex",
        "label": "高亮第几个",
        "type": "number",
        "default": 0,
        "min": 0,
        "max": 5,
        "desc": "被突出的区块序号",
        "publicKey": "focusIndex",
        "publicLabel": "高亮第几个",
        "description": "被突出的区块序号"
      },
      {
        "key": "showValueLabels",
        "label": "份额数字",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏每块份额数字（装饰数据）",
        "publicKey": "showValueLabels",
        "publicLabel": "份额数字",
        "description": "显示/隐藏每块份额数字（装饰数据）"
      },
      {
        "key": "showHero",
        "label": "顶部锚点数字",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏右上角锚点数字（装饰）",
        "publicKey": "showHero",
        "publicLabel": "顶部锚点数字",
        "description": "显示/隐藏右上角锚点数字（装饰）"
      },
      {
        "key": "showNote",
        "label": "区块小注",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏较大区块上的说明（装饰文案，仅面积块）",
        "publicKey": "showNote",
        "publicLabel": "区块小注",
        "description": "显示/隐藏较大区块上的说明（装饰文案，仅面积块）"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#c8f135",
        "options": [
          "#c8f135",
          "#ff5a3c",
          "#3ca0ff",
          "#ffd23c"
        ],
        "desc": "主强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "主强调色"
      }
    ],
    "defaultProps": {
      "eyebrowId": "88",
      "eyebrowLabel": "CAPITAL FLOW",
      "title": "2025 资本流向预测",
      "subhead": "按赛道的份额结构 / FORECAST CAPITAL ALLOCATION",
      "closing": "钱往模型与算力两端继续集中。",
      "unit": "%",
      "hero": {
        "value": "62",
        "unit": "%",
        "label": "模型+算力合计 / MODEL + COMPUTE"
      },
      "blocks": [
        {
          "name": "通用大模型",
          "en": "FOUNDATION MODELS",
          "value": 38,
          "note": "少数前沿实验室继续吸走最大份额，单笔规模抬升。"
        },
        {
          "name": "算力基础设施",
          "en": "COMPUTE INFRA",
          "value": 24,
          "note": "GPU 云与数据中心承接模型训练的确定性预算。"
        },
        {
          "name": "企业应用",
          "en": "ENTERPRISE APPS",
          "value": 16,
          "note": "从试点走向稳定收入的应用层获得加注。"
        },
        {
          "name": "垂直行业",
          "en": "VERTICAL AI",
          "value": 11,
          "note": "医疗、金融、法律等高客单价场景。"
        },
        {
          "name": "安全与对齐",
          "en": "SAFETY",
          "value": 6,
          "note": "评测、对齐与合规工具受监管驱动。"
        },
        {
          "name": "数据与工具",
          "en": "DATA & TOOLS",
          "value": 5,
          "note": "数据标注、可观测与开发者工具。"
        }
      ],
      "footRight": "FORECAST · SHARE",
      "chartType": "treemap",
      "blockCount": 6,
      "focusEnabled": true,
      "focusIndex": 0,
      "showValueLabels": true,
      "showHero": true,
      "showNote": true,
      "accent": "#c8f135"
    }
  },
  {
    "key": "theme06_page082",
    "themeKey": "theme06",
    "pageNumber": 82,
    "layout": "THEME06-082",
    "slot": "statement",
    "label": "78 · 前瞻主题 / FORWARD STATEMENT",
    "bgClass": "",
    "controls": [
      {
        "key": "mediaSlotCount",
        "label": "图片槽数量",
        "type": "number",
        "default": 1,
        "min": 0,
        "max": 2,
        "desc": "右侧自适应图片槽数量（0 时主张文案占满整版；上传后按图片比例自适应，构图随数量重排）",
        "publicKey": "mediaSlotCount",
        "publicLabel": "图片槽数量",
        "description": "右侧自适应图片槽数量（0 时主张文案占满整版；上传后按图片比例自适应，构图随数量重排）"
      },
      {
        "key": "statCount",
        "label": "锚点指标数量",
        "type": "number",
        "default": 3,
        "min": 0,
        "max": 3,
        "desc": "底部锚点指标卡数量（0 隐藏整行）",
        "publicKey": "statCount",
        "publicLabel": "锚点指标数量",
        "description": "底部锚点指标卡数量（0 隐藏整行）"
      },
      {
        "key": "focusEnabled",
        "label": "重点指标高亮",
        "type": "toggle",
        "default": true,
        "desc": "是否突出某一锚点指标卡",
        "publicKey": "focusEnabled",
        "publicLabel": "重点指标高亮",
        "description": "是否突出某一锚点指标卡"
      },
      {
        "key": "focusIndex",
        "label": "高亮第几个",
        "type": "number",
        "default": 0,
        "min": 0,
        "max": 2,
        "desc": "被突出的指标序号",
        "publicKey": "focusIndex",
        "publicLabel": "高亮第几个",
        "description": "被突出的指标序号"
      },
      {
        "key": "showKicker",
        "label": "前置小标",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏主张上方的 mono 小标（装饰）",
        "publicKey": "showKicker",
        "publicLabel": "前置小标",
        "description": "显示/隐藏主张上方的 mono 小标（装饰）"
      },
      {
        "key": "showGlow",
        "label": "顶部光晕",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏顶部聚光光晕（装饰）",
        "publicKey": "showGlow",
        "publicLabel": "顶部光晕",
        "description": "显示/隐藏顶部聚光光晕（装饰）"
      },
      {
        "key": "showBadge",
        "label": "角标徽标",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏右上角徽标（装饰）",
        "publicKey": "showBadge",
        "publicLabel": "角标徽标",
        "description": "显示/隐藏右上角徽标（装饰）"
      },
      {
        "key": "showLead",
        "label": "引导段落",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏主张下方的引导段（装饰文案）",
        "publicKey": "showLead",
        "publicLabel": "引导段落",
        "description": "显示/隐藏主张下方的引导段（装饰文案）"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#c8f135",
        "options": [
          "#c8f135",
          "#ff5a3c",
          "#3ca0ff",
          "#ffd23c"
        ],
        "desc": "主强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "主强调色"
      }
    ],
    "defaultProps": {
      "eyebrowId": "89",
      "eyebrowLabel": "FORWARD VIEW",
      "kicker": "前瞻判断 / FORWARD STATEMENT",
      "statement": "融资盛宴退潮后，<span class=\"kx-mk\"></span> 真正的护城河来自<b>稳定收入与确定性算力</b>，而非估值叙事。",
      "lead": "叙事可以一次性融到大钱，但只有持续兑现的收入与可控的算力成本，才会在 2025 年被公开市场重新定价为壁垒。",
      "closing": "把注意力从融资额转向兑现能力。",
      "footRight": "FORWARD VIEW",
      "statTag": "前瞻 / OUTLOOK",
      "stats": [
        {
          "k": "收入兑现 / REVENUE",
          "v": "稳"
        },
        {
          "k": "算力成本 / COMPUTE",
          "v": "降"
        },
        {
          "k": "估值锚 / VALUATION",
          "v": "重定"
        }
      ],
      "mediaPlaceholder": "前瞻主视觉 / DROP IMAGE",
      "mediaSlotCount": 1,
      "statCount": 3,
      "focusEnabled": true,
      "focusIndex": 0,
      "showKicker": true,
      "showGlow": true,
      "showBadge": true,
      "showLead": true,
      "accent": "#c8f135"
    }
  },
  {
    "key": "theme06_page083",
    "themeKey": "theme06",
    "pageNumber": 83,
    "layout": "THEME06-083",
    "slot": "milestones",
    "label": "79 · 里程碑节奏 / MILESTONES 2025",
    "bgClass": "",
    "controls": [
      {
        "key": "phaseCount",
        "label": "阶段数量",
        "type": "number",
        "default": 4,
        "min": 3,
        "max": 5,
        "desc": "时间轴阶段节点数量",
        "publicKey": "phaseCount",
        "publicLabel": "阶段数量",
        "description": "时间轴阶段节点数量"
      },
      {
        "key": "layout",
        "label": "时间轴形态",
        "type": "select",
        "default": "timeline",
        "options": [
          [
            "timeline",
            "横向轴"
          ],
          [
            "stack",
            "纵向步骤"
          ]
        ],
        "desc": "同一组阶段：横向时间轴 / 纵向编号步骤",
        "publicKey": "layout",
        "publicLabel": "时间轴形态",
        "description": "同一组阶段：横向时间轴 / 纵向编号步骤"
      },
      {
        "key": "watchCount",
        "label": "观察对象数量",
        "type": "number",
        "default": 4,
        "min": 0,
        "max": 4,
        "desc": "底部观察对象芯片数量（0 隐藏整列）",
        "publicKey": "watchCount",
        "publicLabel": "观察对象数量",
        "description": "底部观察对象芯片数量（0 隐藏整列）"
      },
      {
        "key": "metricCount",
        "label": "观察指标数量",
        "type": "number",
        "default": 4,
        "min": 0,
        "max": 4,
        "desc": "底部观察指标标签数量（0 隐藏整列）",
        "publicKey": "metricCount",
        "publicLabel": "观察指标数量",
        "description": "底部观察指标标签数量（0 隐藏整列）"
      },
      {
        "key": "focusEnabled",
        "label": "重点阶段高亮",
        "type": "toggle",
        "default": true,
        "desc": "是否把某一阶段拉成 lime 强调",
        "publicKey": "focusEnabled",
        "publicLabel": "重点阶段高亮",
        "description": "是否把某一阶段拉成 lime 强调"
      },
      {
        "key": "focusIndex",
        "label": "高亮第几个",
        "type": "number",
        "default": 2,
        "min": 0,
        "max": 4,
        "desc": "被突出的阶段序号",
        "publicKey": "focusIndex",
        "publicLabel": "高亮第几个",
        "description": "被突出的阶段序号"
      },
      {
        "key": "showAxis",
        "label": "连接轴线",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏连接轴线与节点圆点（装饰，仅横向轴）",
        "publicKey": "showAxis",
        "publicLabel": "连接轴线",
        "description": "显示/隐藏连接轴线与节点圆点（装饰，仅横向轴）"
      },
      {
        "key": "showMarkers",
        "label": "阶段大号编号",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏每个阶段背景的大号编号（装饰，仅横向轴）",
        "publicKey": "showMarkers",
        "publicLabel": "阶段大号编号",
        "description": "显示/隐藏每个阶段背景的大号编号（装饰，仅横向轴）"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#c8f135",
        "options": [
          "#c8f135",
          "#ff5a3c",
          "#3ca0ff",
          "#ffd23c"
        ],
        "desc": "主强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "主强调色"
      }
    ],
    "defaultProps": {
      "eyebrowId": "90",
      "eyebrowLabel": "MILESTONES 2025",
      "title": "2025 里程碑节奏",
      "subhead": "前瞻 · 按季度的关键节点 / KEY MILESTONES",
      "closing": "按节点跟踪，而不是按头条跟踪。",
      "watchTag": "OUTLOOK · 节点节奏",
      "thesis": "把 2025 拆成四个可验证的节点——每个节点都对应一次<b>叙事被收入与算力检验</b>的时刻。",
      "railCaption": "里程碑时间轴 / MILESTONE TIMELINE",
      "phases": [
        {
          "when": "2025 Q1",
          "name": "预算落地",
          "en": "BUDGETS SET",
          "note": "企业 AI 预算定档，确定性算力支出开始释放。"
        },
        {
          "when": "2025 Q2",
          "name": "收入验证",
          "en": "REVENUE PROOF",
          "note": "应用层公布留存与续约，试点能否转稳定收入见分晓。"
        },
        {
          "when": "2025 H2",
          "name": "上市试探",
          "en": "IPO TEST",
          "note": "头部标的试探公开市场，估值锚开始形成。"
        },
        {
          "when": "2026E",
          "name": "壁垒分化",
          "en": "MOATS DIVERGE",
          "note": "有兑现的与靠叙事的公司在融资难度上明显分层。"
        }
      ],
      "watchCaption": "观察对象 / WATCH-LIST",
      "watchList": [
        {
          "name": "OpenAI",
          "tag": "通用模型"
        },
        {
          "name": "Anthropic",
          "tag": "安全模型"
        },
        {
          "name": "CoreWeave",
          "tag": "GPU 云"
        },
        {
          "name": "Databricks",
          "tag": "数据平台"
        }
      ],
      "metricCaption": "观察指标 / WATCH METRICS",
      "metrics": [
        {
          "k": "续约率 / RENEWAL",
          "v": "↑"
        },
        {
          "k": "净留存 / NRR",
          "v": "%"
        },
        {
          "k": "算力占比 / COMPUTE",
          "v": "↓"
        },
        {
          "k": "上市表现 / DEBUT",
          "v": "锚"
        }
      ],
      "footRight": "4 MILESTONES · 2025",
      "phaseCount": 4,
      "layout": "timeline",
      "watchCount": 4,
      "metricCount": 4,
      "focusEnabled": true,
      "focusIndex": 1,
      "showAxis": true,
      "showMarkers": true,
      "accent": "#c8f135"
    }
  }
];
