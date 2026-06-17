export const theme = {
  "key": "theme09",
  "displayName": "深蓝杂志风",
  "label": "深蓝杂志风",
  "name": "深蓝杂志风",
  "scenario": "品牌故事、人物访谈、企业形象册、深度专题",
  "audience": "公关团队、媒体编辑、创始人、企业品牌部",
  "mode": "new"
};
export const pages = [
  {
    "key": "theme09_page001",
    "themeKey": "theme09",
    "pageNumber": 1,
    "layout": "THEME09-001",
    "slot": "covermast",
    "label": "封面A 刊头",
    "bgClass": "bg-deep",
    "controls": [
      {
        "key": "metaCount",
        "prop": "metaCount",
        "label": "元信息数量",
        "type": "slider",
        "default": 4,
        "min": 1,
        "max": 4,
        "step": 1,
        "publicKey": "metaCount",
        "publicLabel": "元信息数量"
      },
      {
        "key": "showRule",
        "prop": "showRule",
        "label": "刊头分隔线",
        "type": "toggle",
        "default": true,
        "desc": "装饰",
        "publicKey": "showRule",
        "publicLabel": "刊头分隔线",
        "description": "装饰"
      },
      {
        "key": "showGhostYear",
        "prop": "showGhostYear",
        "label": "幽灵年份",
        "type": "toggle",
        "default": true,
        "desc": "装饰",
        "publicKey": "showGhostYear",
        "publicLabel": "幽灵年份",
        "description": "装饰"
      },
      {
        "key": "showChip",
        "prop": "showChip",
        "label": "质感方块",
        "type": "toggle",
        "default": true,
        "desc": "玻璃芯片装饰",
        "publicKey": "showChip",
        "publicLabel": "质感方块",
        "description": "玻璃芯片装饰"
      },
      {
        "key": "focus",
        "prop": "focus",
        "label": "重点信息 Focus",
        "type": "focus",
        "default": true,
        "publicKey": "focus",
        "publicLabel": "重点信息 Focus"
      },
      {
        "key": "focusIndex",
        "prop": "focusIndex",
        "label": "焦点序号",
        "type": "slider",
        "default": 0,
        "min": 0,
        "step": 1,
        "publicKey": "focusIndex",
        "publicLabel": "焦点序号"
      }
    ],
    "defaultProps": {
      "kicker": "AI CAPITAL LAB · INVESTMENT RESEARCH",
      "year": "2024",
      "titleLines": [
        "美国大额融资",
        "AI 公司调研报告"
      ],
      "edition": [
        {
          "label": "EDITION",
          "value": "VOL.01"
        },
        {
          "label": "ISSUED",
          "value": "2026 · 06"
        }
      ],
      "meta": [
        {
          "k": "数据口径",
          "v": "≥ 1 亿美元"
        },
        {
          "k": "样本区间",
          "v": "2024 全年"
        },
        {
          "k": "分析框架",
          "v": "横纵分析法"
        },
        {
          "k": "事件总量",
          "v": "120+ 笔"
        }
      ],
      "metaCount": 4,
      "showRule": true,
      "showGhostYear": true,
      "showChip": true,
      "focus": true,
      "focusIndex": 0
    }
  },
  {
    "key": "theme09_page002",
    "themeKey": "theme09",
    "pageNumber": 2,
    "layout": "THEME09-002",
    "slot": "coverdiag",
    "label": "封面C 斜切",
    "bgClass": "bg-night",
    "controls": [
      {
        "key": "indexCount",
        "prop": "indexCount",
        "label": "篇章索引数量",
        "type": "slider",
        "default": 5,
        "min": 0,
        "max": 6,
        "step": 1,
        "publicKey": "indexCount",
        "publicLabel": "篇章索引数量"
      },
      {
        "key": "splitDir",
        "prop": "splitDir",
        "label": "斜切方向",
        "type": "radio",
        "default": "右",
        "options": [
          "右",
          "左"
        ],
        "publicKey": "splitDir",
        "publicLabel": "斜切方向"
      },
      {
        "key": "showSpine",
        "prop": "showSpine",
        "label": "竖排书脊",
        "type": "toggle",
        "default": true,
        "desc": "装饰",
        "publicKey": "showSpine",
        "publicLabel": "竖排书脊",
        "description": "装饰"
      },
      {
        "key": "showSeam",
        "prop": "showSeam",
        "label": "斜边亮线",
        "type": "toggle",
        "default": true,
        "desc": "装饰",
        "publicKey": "showSeam",
        "publicLabel": "斜边亮线",
        "description": "装饰"
      },
      {
        "key": "showChip",
        "prop": "showChip",
        "label": "质感方块",
        "type": "toggle",
        "default": true,
        "desc": "玻璃芯片装饰",
        "publicKey": "showChip",
        "publicLabel": "质感方块",
        "description": "玻璃芯片装饰"
      },
      {
        "key": "focus",
        "prop": "focus",
        "label": "重点信息 Focus",
        "type": "focus",
        "default": true,
        "publicKey": "focus",
        "publicLabel": "重点信息 Focus"
      },
      {
        "key": "focusIndex",
        "prop": "focusIndex",
        "label": "焦点序号",
        "type": "slider",
        "default": 0,
        "min": 0,
        "step": 1,
        "publicKey": "focusIndex",
        "publicLabel": "焦点序号"
      }
    ],
    "defaultProps": {
      "brand": "AI CAPITAL LAB",
      "kicker": "ANNUAL RESEARCH REPORT",
      "year": "2024",
      "titleLines": [
        "美国大额融资",
        "AI 公司",
        "调研报告"
      ],
      "index": [
        {
          "no": "01",
          "t": "研究方法"
        },
        {
          "no": "02",
          "t": "市场全景"
        },
        {
          "no": "03",
          "t": "横向透视"
        },
        {
          "no": "04",
          "t": "产业链分层"
        },
        {
          "no": "05",
          "t": "典型案例"
        },
        {
          "no": "06",
          "t": "风险与展望"
        }
      ],
      "indexCount": 5,
      "splitDir": "右",
      "showSpine": true,
      "showSeam": true,
      "showChip": true,
      "focus": true,
      "focusIndex": 0
    }
  },
  {
    "key": "theme09_page003",
    "themeKey": "theme09",
    "pageNumber": 3,
    "layout": "THEME09-003",
    "slot": "coverdossier",
    "label": "封面D 卷宗",
    "bgClass": "bg-electric",
    "controls": [
      {
        "key": "fieldCount",
        "prop": "fieldCount",
        "label": "档案字段数量",
        "type": "slider",
        "default": 6,
        "min": 2,
        "max": 6,
        "step": 1,
        "publicKey": "fieldCount",
        "publicLabel": "档案字段数量"
      },
      {
        "key": "showFrame",
        "prop": "showFrame",
        "label": "内框定位标",
        "type": "toggle",
        "default": true,
        "desc": "装饰",
        "publicKey": "showFrame",
        "publicLabel": "内框定位标",
        "description": "装饰"
      },
      {
        "key": "showBarcode",
        "prop": "showBarcode",
        "label": "条形码",
        "type": "toggle",
        "default": true,
        "desc": "装饰",
        "publicKey": "showBarcode",
        "publicLabel": "条形码",
        "description": "装饰"
      },
      {
        "key": "showStamp",
        "prop": "showStamp",
        "label": "钢印章",
        "type": "toggle",
        "default": true,
        "desc": "装饰",
        "publicKey": "showStamp",
        "publicLabel": "钢印章",
        "description": "装饰"
      },
      {
        "key": "showChip",
        "prop": "showChip",
        "label": "质感方块",
        "type": "toggle",
        "default": true,
        "desc": "玻璃芯片装饰",
        "publicKey": "showChip",
        "publicLabel": "质感方块",
        "description": "玻璃芯片装饰"
      },
      {
        "key": "focus",
        "prop": "focus",
        "label": "重点信息 Focus",
        "type": "focus",
        "default": true,
        "publicKey": "focus",
        "publicLabel": "重点信息 Focus"
      },
      {
        "key": "focusIndex",
        "prop": "focusIndex",
        "label": "焦点序号",
        "type": "slider",
        "default": 0,
        "min": 0,
        "step": 1,
        "publicKey": "focusIndex",
        "publicLabel": "焦点序号"
      }
    ],
    "defaultProps": {
      "classification": "RESEARCH DOSSIER · 投资研究卷宗",
      "docNo": "DOC · AICL-2024-001",
      "year": "2024",
      "titleLines": [
        "美国大额融资",
        "AI 公司调研报告"
      ],
      "fields": [
        {
          "k": "CATEGORY 类别",
          "v": "一级市场 · 股权融资"
        },
        {
          "k": "THRESHOLD 口径",
          "v": "单笔 ≥ 1 亿美元"
        },
        {
          "k": "PERIOD 区间",
          "v": "2024.01 – 2024.12"
        },
        {
          "k": "SAMPLE 样本",
          "v": "120+ 融资事件"
        },
        {
          "k": "METHOD 方法",
          "v": "横纵分析法"
        },
        {
          "k": "STATUS 状态",
          "v": "已编制 · 待评审"
        }
      ],
      "fieldCount": 6,
      "showFrame": true,
      "showBarcode": true,
      "showStamp": true,
      "showChip": true,
      "code": "AICL · 2024 · CONFIDENTIAL · VOL.01",
      "stamp": "VERIFIED",
      "focus": true,
      "focusIndex": 0
    }
  },
  {
    "key": "theme09_page004",
    "themeKey": "theme09",
    "pageNumber": 4,
    "layout": "THEME09-004",
    "slot": "coverstrata",
    "label": "封面E 光带",
    "bgClass": "bg-blue",
    "controls": [
      {
        "key": "bandCount",
        "prop": "bandCount",
        "label": "层带数量",
        "type": "slider",
        "default": 5,
        "min": 3,
        "max": 6,
        "step": 1,
        "publicKey": "bandCount",
        "publicLabel": "层带数量"
      },
      {
        "key": "showLabels",
        "prop": "showLabels",
        "label": "篇章刻度",
        "type": "toggle",
        "default": true,
        "desc": "装饰",
        "publicKey": "showLabels",
        "publicLabel": "篇章刻度",
        "description": "装饰"
      },
      {
        "key": "showChip",
        "prop": "showChip",
        "label": "质感方块",
        "type": "toggle",
        "default": true,
        "desc": "玻璃芯片装饰",
        "publicKey": "showChip",
        "publicLabel": "质感方块",
        "description": "玻璃芯片装饰"
      },
      {
        "key": "focus",
        "prop": "focus",
        "label": "重点信息 Focus",
        "type": "focus",
        "default": true,
        "publicKey": "focus",
        "publicLabel": "重点信息 Focus"
      },
      {
        "key": "focusIndex",
        "prop": "focusIndex",
        "label": "焦点序号",
        "type": "slider",
        "default": 2,
        "min": 0,
        "step": 1,
        "publicKey": "focusIndex",
        "publicLabel": "焦点序号"
      }
    ],
    "defaultProps": {
      "kicker": "AI CAPITAL LAB · INVESTMENT RESEARCH",
      "year": "2024",
      "titleLines": [
        "美国大额融资",
        "AI 公司调研报告"
      ],
      "bands": [
        {
          "no": "01",
          "t": "市场全景"
        },
        {
          "no": "02",
          "t": "行业分布"
        },
        {
          "no": "03",
          "t": "产业链分层"
        },
        {
          "no": "04",
          "t": "典型案例"
        },
        {
          "no": "05",
          "t": "风险与展望"
        },
        {
          "no": "06",
          "t": "投资展望"
        }
      ],
      "bandCount": 5,
      "showLabels": true,
      "showChip": true,
      "footnote": "聚焦 2024 年单笔 ≥ 1 亿美元的大额融资事件 · 横纵分析法",
      "focus": true,
      "focusIndex": 2
    }
  },
  {
    "key": "theme09_page005",
    "themeKey": "theme09",
    "pageNumber": 5,
    "layout": "THEME09-005",
    "slot": "coveraperture",
    "label": "封面F 光圈",
    "bgClass": "bg-deep",
    "controls": [
      {
        "key": "ringCount",
        "prop": "ringCount",
        "label": "同心环数量",
        "type": "slider",
        "default": 4,
        "min": 2,
        "max": 5,
        "step": 1,
        "publicKey": "ringCount",
        "publicLabel": "同心环数量"
      },
      {
        "key": "showBlades",
        "prop": "showBlades",
        "label": "光圈刀叶",
        "type": "toggle",
        "default": true,
        "desc": "装饰",
        "publicKey": "showBlades",
        "publicLabel": "光圈刀叶",
        "description": "装饰"
      },
      {
        "key": "showGlow",
        "prop": "showGlow",
        "label": "圆心辉光",
        "type": "toggle",
        "default": true,
        "desc": "装饰",
        "publicKey": "showGlow",
        "publicLabel": "圆心辉光",
        "description": "装饰"
      },
      {
        "key": "showChip",
        "prop": "showChip",
        "label": "质感方块",
        "type": "toggle",
        "default": true,
        "desc": "玻璃芯片装饰",
        "publicKey": "showChip",
        "publicLabel": "质感方块",
        "description": "玻璃芯片装饰"
      },
      {
        "key": "focus",
        "prop": "focus",
        "label": "重点信息 Focus",
        "type": "focus",
        "default": true,
        "publicKey": "focus",
        "publicLabel": "重点信息 Focus"
      }
    ],
    "defaultProps": {
      "kicker": "ANNUAL RESEARCH REPORT",
      "year": "2024",
      "titleLines": [
        "美国大额融资",
        "AI 公司",
        "调研报告"
      ],
      "sub": "以横纵分析法聚焦单笔 ≥ 1 亿美元的大额融资事件",
      "ringCount": 4,
      "showBlades": true,
      "showGlow": true,
      "showChip": true,
      "focus": true
    }
  },
  {
    "key": "theme09_page006",
    "themeKey": "theme09",
    "pageNumber": 6,
    "layout": "THEME09-006",
    "slot": "coverterminal",
    "label": "封面G 终端",
    "bgClass": "bg-night",
    "controls": [
      {
        "key": "tickerCount",
        "prop": "tickerCount",
        "label": "Ticker 数量",
        "type": "slider",
        "default": 5,
        "min": 2,
        "max": 6,
        "step": 1,
        "publicKey": "tickerCount",
        "publicLabel": "Ticker 数量"
      },
      {
        "key": "showGrid",
        "prop": "showGrid",
        "label": "终端网格",
        "type": "toggle",
        "default": true,
        "desc": "装饰",
        "publicKey": "showGrid",
        "publicLabel": "终端网格",
        "description": "装饰"
      },
      {
        "key": "showCaret",
        "prop": "showCaret",
        "label": "光标块",
        "type": "toggle",
        "default": true,
        "desc": "装饰",
        "publicKey": "showCaret",
        "publicLabel": "光标块",
        "description": "装饰"
      },
      {
        "key": "showChip",
        "prop": "showChip",
        "label": "质感方块",
        "type": "toggle",
        "default": true,
        "desc": "玻璃芯片装饰",
        "publicKey": "showChip",
        "publicLabel": "质感方块",
        "description": "玻璃芯片装饰"
      },
      {
        "key": "focus",
        "prop": "focus",
        "label": "重点信息 Focus",
        "type": "focus",
        "default": true,
        "publicKey": "focus",
        "publicLabel": "重点信息 Focus"
      },
      {
        "key": "focusIndex",
        "prop": "focusIndex",
        "label": "焦点序号",
        "type": "slider",
        "default": 0,
        "min": 0,
        "step": 1,
        "publicKey": "focusIndex",
        "publicLabel": "焦点序号"
      }
    ],
    "defaultProps": {
      "prompt": "// 2024 美国大额融资 AI · 年度调研",
      "year": "2024",
      "titleLines": [
        "美国大额融资",
        "AI 公司调研报告"
      ],
      "tickers": [
        {
          "k": "AI FUNDING",
          "v": "$97B",
          "d": "▲"
        },
        {
          "k": "MEGA DEALS",
          "v": "97",
          "d": "▲"
        },
        {
          "k": "AVG ROUND",
          "v": "$1.0B",
          "d": "▲"
        },
        {
          "k": "VC SHARE",
          "v": "33%",
          "d": "▲"
        },
        {
          "k": "YOY",
          "v": "+58%",
          "d": "▲"
        },
        {
          "k": "LATE STAGE",
          "v": "62%",
          "d": "▼"
        }
      ],
      "tickerCount": 5,
      "showGrid": true,
      "showCaret": true,
      "showChip": true,
      "status": "AI CAPITAL LAB · 数据口径 ≥ 1 亿美元 · 2024 全年",
      "focus": true,
      "focusIndex": 0
    }
  },
  {
    "key": "theme09_page007",
    "themeKey": "theme09",
    "pageNumber": 7,
    "layout": "THEME09-007",
    "slot": "cover",
    "label": "Cover",
    "bgClass": "bg-blue",
    "controls": [
      {
        "key": "focus",
        "prop": "focus",
        "label": "重点信息 Focus",
        "type": "focus",
        "default": true,
        "desc": "年号选择框高亮开关",
        "publicKey": "focus",
        "publicLabel": "重点信息 Focus",
        "description": "年号选择框高亮开关"
      },
      {
        "key": "focusIndex",
        "prop": "focusIndex",
        "label": "焦点序号",
        "type": "slider",
        "default": 0,
        "min": 0,
        "max": 1,
        "step": 1,
        "desc": "高亮第几条出处信息",
        "publicKey": "focusIndex",
        "publicLabel": "焦点序号",
        "description": "高亮第几条出处信息"
      }
    ],
    "defaultProps": {
      "year": "2024",
      "titleLines": [
        "美国大额融资",
        "AI 公司调研报告"
      ],
      "brand": "AI CAPITAL LAB",
      "quote": [
        "在资本与算力的浪潮里，",
        "每一笔融资都是一次方向的押注。"
      ],
      "signature": "AInsight",
      "contact": [
        {
          "label": "数据口径",
          "value": "≥1亿美元 · 2024 全年"
        },
        {
          "label": "编制日期",
          "value": "2026 · 06 · 03"
        }
      ],
      "showOrnament": true,
      "focus": true,
      "focusIndex": 0
    }
  },
  {
    "key": "theme09_page008",
    "themeKey": "theme09",
    "pageNumber": 8,
    "layout": "THEME09-008",
    "slot": "overview",
    "label": "报告摘要",
    "bgClass": "bg-blue",
    "controls": [
      {
        "key": "statCount",
        "prop": "statCount",
        "label": "数量",
        "type": "slider",
        "default": 4,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "底部指标块数量",
        "publicKey": "statCount",
        "publicLabel": "数量",
        "description": "底部指标块数量"
      },
      {
        "key": "labelType",
        "prop": "labelType",
        "label": "标签类型",
        "type": "labelType",
        "default": "数字",
        "publicKey": "labelType",
        "publicLabel": "标签类型"
      },
      {
        "key": "focus",
        "prop": "focus",
        "label": "重点信息 Focus",
        "type": "focus",
        "default": true,
        "publicKey": "focus",
        "publicLabel": "重点信息 Focus"
      },
      {
        "key": "focusIndex",
        "prop": "focusIndex",
        "label": "焦点序号",
        "type": "slider",
        "default": 0,
        "min": 0,
        "step": 1,
        "publicKey": "focusIndex",
        "publicLabel": "焦点序号"
      }
    ],
    "defaultProps": {
      "heading": "报告摘要",
      "subEN": "Report Overview",
      "pill": "2024 全年 · 资本大年",
      "summary": "2024 年是美国 AI 产业的「资本大年」。全年 AI 初创公司吸纳风险投资约 970 亿美元，创历史新高，占全美风投近三分之一；单笔 ≥1 亿美元 的大额融资事件达 97 笔。",
      "bars": [
        {
          "label": "通用大模型",
          "pct": 43.3,
          "color": "var(--blue-bright)"
        },
        {
          "label": "垂直应用",
          "pct": 25.3,
          "color": "var(--mint)"
        },
        {
          "label": "AI 基础设施",
          "pct": 16.3,
          "color": "#7aa0ff"
        },
        {
          "label": "AI 芯片",
          "pct": 10,
          "color": "#9f7bff"
        }
      ],
      "stats": [
        {
          "value": "970",
          "unit": "亿美元",
          "label": "全年 AI 风投"
        },
        {
          "value": "97",
          "unit": "笔",
          "label": "≥1亿融资事件"
        },
        {
          "value": "10",
          "unit": "亿元",
          "label": "平均单笔规模"
        },
        {
          "value": "63.9",
          "unit": "%",
          "label": "湾区资金占比"
        }
      ],
      "tags": [
        "赢家通吃",
        "AGI 叙事",
        "地理护城河",
        "估值泡沫",
        "退潮看兑现"
      ],
      "labelType": "number",
      "focus": true,
      "focusIndex": 0,
      "statCount": 4
    }
  },
  {
    "key": "theme09_page009",
    "themeKey": "theme09",
    "pageNumber": 9,
    "layout": "THEME09-009",
    "slot": "dotfield",
    "label": "点阵计数",
    "bgClass": "bg-deep",
    "controls": [
      {
        "key": "total",
        "prop": "total",
        "label": "总单元数",
        "type": "slider",
        "default": 97,
        "min": 20,
        "max": 140,
        "step": 1,
        "publicKey": "total",
        "publicLabel": "总单元数"
      },
      {
        "key": "active",
        "prop": "active",
        "label": "点亮数量",
        "type": "slider",
        "default": 42,
        "min": 0,
        "step": 1,
        "publicKey": "active",
        "publicLabel": "点亮数量"
      },
      {
        "key": "columns",
        "prop": "columns",
        "label": "每行数量",
        "type": "slider",
        "default": 14,
        "min": 8,
        "max": 16,
        "step": 1,
        "publicKey": "columns",
        "publicLabel": "每行数量"
      },
      {
        "key": "dotShape",
        "prop": "dotShape",
        "label": "颗粒形状",
        "type": "radio",
        "default": "圆",
        "options": [
          "圆",
          "方",
          "菱"
        ],
        "publicKey": "dotShape",
        "publicLabel": "颗粒形状"
      },
      {
        "key": "showLegend",
        "prop": "showLegend",
        "label": "装饰文案",
        "type": "toggle",
        "default": true,
        "desc": "图例",
        "publicKey": "showLegend",
        "publicLabel": "装饰文案",
        "description": "图例"
      },
      {
        "key": "focus",
        "prop": "focus",
        "label": "重点信息 Focus",
        "type": "focus",
        "default": true,
        "publicKey": "focus",
        "publicLabel": "重点信息 Focus"
      }
    ],
    "defaultProps": {
      "total": 97,
      "active": 42,
      "columns": 14,
      "dotShape": "圆",
      "showLegend": true,
      "focus": true,
      "kicker": "COUNTING · 一格一笔",
      "readout": {
        "value": "97",
        "unit": "笔"
      },
      "caption": "2024 年单笔 ≥ 1 亿美元的融资事件，\n其中点亮者为大模型与基础设施赛道。",
      "legend": {
        "on": "大模型 / 基础设施",
        "off": "其他赛道"
      }
    }
  },
  {
    "key": "theme09_page010",
    "themeKey": "theme09",
    "pageNumber": 10,
    "layout": "THEME09-010",
    "slot": "contents",
    "label": "目录",
    "bgClass": "bg-blue",
    "controls": [
      {
        "key": "cardCount",
        "prop": "cardCount",
        "label": "卡片数量",
        "type": "slider",
        "default": 4,
        "min": 2,
        "max": 7,
        "step": 1,
        "publicKey": "cardCount",
        "publicLabel": "卡片数量"
      },
      {
        "key": "labelType",
        "prop": "labelType",
        "label": "标签类型",
        "type": "labelType",
        "default": "数字",
        "publicKey": "labelType",
        "publicLabel": "标签类型"
      },
      {
        "key": "focus",
        "prop": "focus",
        "label": "重点信息 Focus",
        "type": "focus",
        "default": true,
        "publicKey": "focus",
        "publicLabel": "重点信息 Focus"
      },
      {
        "key": "focusIndex",
        "prop": "focusIndex",
        "label": "焦点序号",
        "type": "slider",
        "default": 1,
        "min": 0,
        "step": 1,
        "publicKey": "focusIndex",
        "publicLabel": "焦点序号"
      }
    ],
    "defaultProps": {
      "bigWord": "CONTENTS",
      "subCN": "报告结构 · Structure",
      "cards": [
        {
          "cn": "研究方法",
          "en": "Methodology",
          "color": "linear-gradient(160deg,#3f78ff,#1d49d6)",
          "dark": false
        },
        {
          "cn": "市场全景",
          "en": "Market Panorama",
          "color": "linear-gradient(160deg,#5af0d4,#1fb89b)",
          "dark": true
        },
        {
          "cn": "横向透视",
          "en": "Cross-Section",
          "color": "linear-gradient(160deg,#0c1430,#070d22)",
          "dark": false
        },
        {
          "cn": "产业链分层",
          "en": "Value Chain",
          "color": "linear-gradient(160deg,#eef2ff,#cdd8f5)",
          "dark": true
        },
        {
          "cn": "典型案例",
          "en": "Case Studies",
          "color": "linear-gradient(160deg,#7a5aff,#4a2fd6)",
          "dark": false
        },
        {
          "cn": "风险展望",
          "en": "Risk & Outlook",
          "color": "linear-gradient(160deg,#3f78ff,#1d49d6)",
          "dark": false
        },
        {
          "cn": "结论",
          "en": "Conclusion",
          "color": "linear-gradient(160deg,#5af0d4,#1fb89b)",
          "dark": true
        }
      ],
      "cardCount": 4,
      "labelType": "number",
      "focus": true,
      "focusIndex": 1
    }
  },
  {
    "key": "theme09_page011",
    "themeKey": "theme09",
    "pageNumber": 11,
    "layout": "THEME09-011",
    "slot": "section",
    "label": "01 研究方法",
    "bgClass": "bg-deep",
    "controls": [
      {
        "key": "stackCount",
        "prop": "stackCount",
        "label": "堆叠数量",
        "type": "slider",
        "default": 5,
        "min": 2,
        "max": 6,
        "step": 1,
        "desc": "背后叠层玻璃卡数量",
        "publicKey": "stackCount",
        "publicLabel": "堆叠数量",
        "description": "背后叠层玻璃卡数量"
      },
      {
        "key": "labelType",
        "prop": "labelType",
        "label": "标签类型",
        "type": "labelType",
        "default": "数字",
        "publicKey": "labelType",
        "publicLabel": "标签类型"
      },
      {
        "key": "focus",
        "prop": "focus",
        "label": "重点信息 Focus",
        "type": "focus",
        "default": true,
        "publicKey": "focus",
        "publicLabel": "重点信息 Focus"
      },
      {
        "key": "focusIndex",
        "prop": "focusIndex",
        "label": "焦点序号",
        "type": "slider",
        "default": 0,
        "min": 0,
        "max": 2,
        "step": 1,
        "publicKey": "focusIndex",
        "publicLabel": "焦点序号"
      }
    ],
    "defaultProps": {
      "sectionNo": "01",
      "titleCN": "研究方法",
      "titleEN": "Methodology",
      "bubbleText": "横纵分析法",
      "bubbleColor": "linear-gradient(180deg, #165FE7 0%, #0E58DE 100%)",
      "bubbleTail": [
        "#0E58DE",
        "#0C51D2"
      ],
      "stackLabels": [
        "Causal Mapping",
        "Value Chain",
        "Market Panorama",
        "Cross-Section",
        "Time Axis"
      ],
      "stackCount": 5,
      "items": [
        {
          "label": "横向 · 空间维度",
          "sub": "同一截面对比公司 / 赛道"
        },
        {
          "label": "纵向 · 时间维度",
          "sub": "沿时间轴追踪指标演化与拐点"
        },
        {
          "label": "交叉 · 层级结构",
          "sub": "识别产业链分层与因果传导关系"
        }
      ],
      "labelType": "number",
      "focus": true,
      "focusIndex": 0
    }
  },
  {
    "key": "theme09_page012",
    "themeKey": "theme09",
    "pageNumber": 12,
    "layout": "THEME09-012",
    "slot": "market",
    "label": "02 市场全景",
    "bgClass": "bg-blue",
    "controls": [
      {
        "key": "granularity",
        "prop": "granularity",
        "label": "数据粒度",
        "type": "radio",
        "default": "季度",
        "options": [
          "时间段",
          "月度"
        ],
        "publicKey": "granularity",
        "publicLabel": "数据粒度"
      },
      {
        "key": "chartType",
        "prop": "chartType",
        "label": "图表类型",
        "type": "radio",
        "default": "面积",
        "options": [
          "面积",
          "折线",
          "柱状"
        ],
        "publicKey": "chartType",
        "publicLabel": "图表类型"
      },
      {
        "key": "showCount",
        "prop": "showCount",
        "label": "副指标线",
        "type": "toggle",
        "default": true,
        "publicKey": "showCount",
        "publicLabel": "副指标线"
      },
      {
        "key": "callout",
        "prop": "callout",
        "label": "解读卡",
        "type": "toggle",
        "default": true,
        "publicKey": "callout",
        "publicLabel": "解读卡"
      },
      {
        "key": "labelType",
        "prop": "labelType",
        "label": "标签类型",
        "type": "labelType",
        "default": "数字",
        "publicKey": "labelType",
        "publicLabel": "标签类型"
      },
      {
        "key": "focus",
        "prop": "focus",
        "label": "重点信息 Focus",
        "type": "focus",
        "default": true,
        "publicKey": "focus",
        "publicLabel": "重点信息 Focus"
      },
      {
        "key": "focusIndex",
        "prop": "focusIndex",
        "label": "焦点序号",
        "type": "slider",
        "default": 2,
        "min": 0,
        "step": 1,
        "publicKey": "focusIndex",
        "publicLabel": "焦点序号"
      }
    ],
    "defaultProps": {
      "granularity": "季度",
      "chartType": "面积",
      "showCount": true,
      "callout": true,
      "labelType": "number",
      "focus": true,
      "quarter": [
        {
          "label": "Q1",
          "amt": 162,
          "cnt": 18
        },
        {
          "label": "Q2",
          "amt": 284,
          "cnt": 26
        },
        {
          "label": "Q3",
          "amt": 318,
          "cnt": 31
        },
        {
          "label": "Q4",
          "amt": 206,
          "cnt": 22
        }
      ],
      "month": [
        {
          "label": "1月",
          "amt": 45
        },
        {
          "label": "2月",
          "amt": 58
        },
        {
          "label": "3月",
          "amt": 59
        },
        {
          "label": "4月",
          "amt": 86
        },
        {
          "label": "5月",
          "amt": 105
        },
        {
          "label": "6月",
          "amt": 93
        },
        {
          "label": "7月",
          "amt": 92
        },
        {
          "label": "8月",
          "amt": 118
        },
        {
          "label": "9月",
          "amt": 108
        },
        {
          "label": "10月",
          "amt": 73
        },
        {
          "label": "11月",
          "amt": 81
        },
        {
          "label": "12月",
          "amt": 52
        }
      ],
      "focusIndex": 2
    }
  },
  {
    "key": "theme09_page013",
    "themeKey": "theme09",
    "pageNumber": 13,
    "layout": "THEME09-013",
    "slot": "stream",
    "label": "季度资金之流",
    "bgClass": "bg-deep",
    "controls": [
      {
        "key": "seriesCount",
        "prop": "seriesCount",
        "label": "数量",
        "type": "slider",
        "default": 5,
        "min": 2,
        "max": 5,
        "step": 1,
        "desc": "序列数",
        "publicKey": "seriesCount",
        "publicLabel": "数量",
        "description": "序列数"
      },
      {
        "key": "offset",
        "prop": "offset",
        "label": "图表类型",
        "type": "radio",
        "default": "居中",
        "options": [
          "居中",
          "基线"
        ],
        "publicKey": "offset",
        "publicLabel": "图表类型"
      },
      {
        "key": "showLegend",
        "prop": "showLegend",
        "label": "图例",
        "type": "toggle",
        "default": true,
        "publicKey": "showLegend",
        "publicLabel": "图例"
      },
      {
        "key": "showAside",
        "prop": "showAside",
        "label": "装饰文案",
        "type": "toggle",
        "default": true,
        "desc": "读图条",
        "publicKey": "showAside",
        "publicLabel": "装饰文案",
        "description": "读图条"
      },
      {
        "key": "labelType",
        "prop": "labelType",
        "label": "标签类型",
        "type": "labelType",
        "default": "数字",
        "publicKey": "labelType",
        "publicLabel": "标签类型"
      },
      {
        "key": "focus",
        "prop": "focus",
        "label": "重点信息 Focus",
        "type": "focus",
        "default": true,
        "publicKey": "focus",
        "publicLabel": "重点信息 Focus"
      },
      {
        "key": "focusIndex",
        "prop": "focusIndex",
        "label": "焦点序号",
        "type": "slider",
        "default": 0,
        "min": 0,
        "step": 1,
        "publicKey": "focusIndex",
        "publicLabel": "焦点序号"
      }
    ],
    "defaultProps": {
      "periods": [
        "Q1·23",
        "Q2",
        "Q3",
        "Q4",
        "Q1·24",
        "Q2",
        "Q3",
        "Q4"
      ],
      "seriesCount": 5,
      "offset": "居中",
      "showLegend": true,
      "focus": true,
      "focusIndex": 0,
      "labelType": "number",
      "showAside": true,
      "head": {
        "no": "02",
        "en": "Streamgraph · Flow",
        "cn": "季度资金 · 结构之流"
      },
      "series": [
        {
          "label": "大模型",
          "sub": "Foundation",
          "vals": [
            42,
            58,
            96,
            150,
            188,
            232,
            290,
            360
          ]
        },
        {
          "label": "算力基建",
          "sub": "Compute",
          "vals": [
            30,
            44,
            66,
            92,
            120,
            150,
            176,
            210
          ]
        },
        {
          "label": "应用层",
          "sub": "Apps",
          "vals": [
            26,
            36,
            50,
            70,
            92,
            110,
            132,
            160
          ]
        },
        {
          "label": "企业服务",
          "sub": "Enterprise",
          "vals": [
            20,
            28,
            40,
            54,
            68,
            82,
            96,
            118
          ]
        },
        {
          "label": "其他",
          "sub": "Others",
          "vals": [
            18,
            24,
            32,
            44,
            56,
            66,
            78,
            92
          ]
        }
      ]
    }
  },
  {
    "key": "theme09_page014",
    "themeKey": "theme09",
    "pageNumber": 14,
    "layout": "THEME09-014",
    "slot": "panorama",
    "label": "全景横幅",
    "bgClass": "bg-night",
    "controls": [
      {
        "key": "imgCount",
        "prop": "imgCount",
        "label": "图片槽数量",
        "type": "slider",
        "default": 1,
        "min": 1,
        "max": 3,
        "step": 1,
        "publicKey": "imgCount",
        "publicLabel": "图片槽数量"
      },
      {
        "key": "tickCount",
        "prop": "tickCount",
        "label": "装饰文案",
        "type": "slider",
        "default": 5,
        "min": 0,
        "max": 6,
        "step": 1,
        "desc": "底部走马灯刻度数",
        "publicKey": "tickCount",
        "publicLabel": "装饰文案",
        "description": "底部走马灯刻度数"
      },
      {
        "key": "showLetterbox",
        "prop": "showLetterbox",
        "label": "影院黑边",
        "type": "toggle",
        "default": false,
        "publicKey": "showLetterbox",
        "publicLabel": "影院黑边"
      },
      {
        "key": "labelType",
        "prop": "labelType",
        "label": "标签类型",
        "type": "labelType",
        "default": "数字",
        "publicKey": "labelType",
        "publicLabel": "标签类型"
      },
      {
        "key": "focus",
        "prop": "focus",
        "label": "重点信息 Focus",
        "type": "focus",
        "default": true,
        "publicKey": "focus",
        "publicLabel": "重点信息 Focus"
      },
      {
        "key": "focusIndex",
        "prop": "focusIndex",
        "label": "焦点序号",
        "type": "slider",
        "default": 0,
        "min": 0,
        "step": 1,
        "publicKey": "focusIndex",
        "publicLabel": "焦点序号"
      }
    ],
    "defaultProps": {
      "imgCount": 1,
      "tickCount": 5,
      "showLetterbox": false,
      "focus": true,
      "focusIndex": 0,
      "labelType": "number",
      "kicker": "PANORAMA · 全景影像",
      "title": "资本浪潮下的产业全景",
      "titleEN": "The Capital Landscape, End to End",
      "ticks": [
        {
          "k": "PANEL",
          "v": "2.39 : 1"
        },
        {
          "k": "湾区占比",
          "v": "63.9%"
        },
        {
          "k": "大模型",
          "v": "43.3%"
        },
        {
          "k": "单笔均值",
          "v": "≈$10亿"
        },
        {
          "k": "≥$1亿",
          "v": "97 笔"
        },
        {
          "k": "全年",
          "v": "$970亿"
        }
      ]
    }
  },
  {
    "key": "theme09_page015",
    "themeKey": "theme09",
    "pageNumber": 15,
    "layout": "THEME09-015",
    "slot": "stage",
    "label": "焦点舞台",
    "bgClass": "bg-deep",
    "controls": [
      {
        "key": "imgCount",
        "prop": "imgCount",
        "label": "图片槽数量",
        "type": "slider",
        "default": 1,
        "min": 1,
        "max": 3,
        "step": 1,
        "publicKey": "imgCount",
        "publicLabel": "图片槽数量"
      },
      {
        "key": "chipCount",
        "prop": "chipCount",
        "label": "数量",
        "type": "slider",
        "default": 3,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "浮动标注片",
        "publicKey": "chipCount",
        "publicLabel": "数量",
        "description": "浮动标注片"
      },
      {
        "key": "showSpotlight",
        "prop": "showSpotlight",
        "label": "装饰文案",
        "type": "toggle",
        "default": true,
        "desc": "聚光 + 倒影",
        "publicKey": "showSpotlight",
        "publicLabel": "装饰文案",
        "description": "聚光 + 倒影"
      },
      {
        "key": "labelType",
        "prop": "labelType",
        "label": "标签类型",
        "type": "labelType",
        "default": "数字",
        "publicKey": "labelType",
        "publicLabel": "标签类型"
      },
      {
        "key": "focus",
        "prop": "focus",
        "label": "重点信息 Focus",
        "type": "focus",
        "default": true,
        "publicKey": "focus",
        "publicLabel": "重点信息 Focus"
      },
      {
        "key": "focusIndex",
        "prop": "focusIndex",
        "label": "焦点序号",
        "type": "slider",
        "default": 0,
        "min": 0,
        "step": 1,
        "publicKey": "focusIndex",
        "publicLabel": "焦点序号"
      }
    ],
    "defaultProps": {
      "imgCount": 1,
      "chipCount": 3,
      "showSpotlight": true,
      "focus": true,
      "focusIndex": 0,
      "labelType": "number",
      "badge": "05",
      "kicker": "SPOTLIGHT · 年度焦点",
      "title": "年度焦点标的",
      "titleEN": "Company of the Year",
      "chips": [
        {
          "label": "最新估值",
          "value": "1570 亿$"
        },
        {
          "label": "年内轮次",
          "value": "2 轮加注"
        },
        {
          "label": "赛道",
          "value": "大模型"
        },
        {
          "label": "关键词",
          "value": "AGI 叙事"
        }
      ]
    }
  },
  {
    "key": "theme09_page016",
    "themeKey": "theme09",
    "pageNumber": 16,
    "layout": "THEME09-016",
    "slot": "cross",
    "label": "03 横向透视",
    "bgClass": "bg-blue",
    "controls": [
      {
        "key": "segCount",
        "prop": "segCount",
        "label": "数量",
        "type": "slider",
        "default": 5,
        "min": 2,
        "max": 5,
        "step": 1,
        "publicKey": "segCount",
        "publicLabel": "数量"
      },
      {
        "key": "shape",
        "prop": "shape",
        "label": "图形",
        "type": "radio",
        "default": "环形",
        "options": [
          "环形",
          "饼图"
        ],
        "publicKey": "shape",
        "publicLabel": "图形"
      },
      {
        "key": "showRounds",
        "prop": "showRounds",
        "label": "结构面板",
        "type": "toggle",
        "default": true,
        "publicKey": "showRounds",
        "publicLabel": "结构面板"
      },
      {
        "key": "roundCount",
        "prop": "roundCount",
        "label": "结构条目数",
        "type": "slider",
        "default": 6,
        "min": 2,
        "max": 6,
        "step": 1,
        "publicKey": "itemCount",
        "publicLabel": "结构条目数"
      },
      {
        "key": "callout",
        "prop": "callout",
        "label": "解读卡",
        "type": "toggle",
        "default": true,
        "publicKey": "callout",
        "publicLabel": "解读卡"
      },
      {
        "key": "labelType",
        "prop": "labelType",
        "label": "标签类型",
        "type": "labelType",
        "default": "数字",
        "publicKey": "labelType",
        "publicLabel": "标签类型"
      },
      {
        "key": "focus",
        "prop": "focus",
        "label": "重点信息 Focus",
        "type": "focus",
        "default": true,
        "publicKey": "focus",
        "publicLabel": "重点信息 Focus"
      },
      {
        "key": "focusIndex",
        "prop": "focusIndex",
        "label": "焦点序号",
        "type": "slider",
        "default": 0,
        "min": 0,
        "step": 1,
        "publicKey": "focusIndex",
        "publicLabel": "焦点序号"
      }
    ],
    "defaultProps": {
      "segCount": 5,
      "shape": "环形",
      "showRounds": true,
      "roundCount": 6,
      "callout": true,
      "labelType": "number",
      "focus": true,
      "focusIndex": 0,
      "segs": [
        {
          "cn": "通用大模型",
          "en": "Foundation Model",
          "amt": 420,
          "pct": 43.3,
          "color": "#4a86ff"
        },
        {
          "cn": "垂直应用",
          "en": "Vertical AI",
          "amt": 245,
          "pct": 25.3,
          "color": "#46e3c6"
        },
        {
          "cn": "AI 基础设施",
          "en": "Infrastructure",
          "amt": 158,
          "pct": 16.3,
          "color": "#7aa0ff"
        },
        {
          "cn": "AI 芯片",
          "en": "Hardware",
          "amt": 97,
          "pct": 10,
          "color": "#9f7bff"
        },
        {
          "cn": "其他",
          "en": "Tooling · Safety",
          "amt": 50,
          "pct": 5.1,
          "color": "#5b6b9a"
        }
      ],
      "rounds": [
        {
          "lb": "Seed",
          "n": 8,
          "avg": 1.2
        },
        {
          "lb": "A",
          "n": 12,
          "avg": 1.8
        },
        {
          "lb": "B",
          "n": 18,
          "avg": 3.5
        },
        {
          "lb": "C",
          "n": 15,
          "avg": 6.8
        },
        {
          "lb": "D+",
          "n": 22,
          "avg": 15.2
        },
        {
          "lb": "未标明",
          "n": 22,
          "avg": 18.6
        }
      ]
    }
  },
  {
    "key": "theme09_page017",
    "themeKey": "theme09",
    "pageNumber": 17,
    "layout": "THEME09-017",
    "slot": "chord",
    "label": "板块联投",
    "bgClass": "bg-deep",
    "controls": [
      {
        "key": "itemCount",
        "prop": "itemCount",
        "label": "数量",
        "type": "slider",
        "default": 6,
        "min": 3,
        "max": 6,
        "step": 1,
        "desc": "板块数",
        "publicKey": "itemCount",
        "publicLabel": "数量",
        "description": "板块数"
      },
      {
        "key": "showRibbon",
        "prop": "showRibbon",
        "label": "联投环带",
        "type": "toggle",
        "default": true,
        "publicKey": "showRibbon",
        "publicLabel": "联投环带"
      },
      {
        "key": "showValue",
        "prop": "showValue",
        "label": "强度数值",
        "type": "toggle",
        "default": true,
        "publicKey": "showValueLabels",
        "publicLabel": "强度数值"
      },
      {
        "key": "showAside",
        "prop": "showAside",
        "label": "装饰文案",
        "type": "toggle",
        "default": true,
        "desc": "圆心读数",
        "publicKey": "showAside",
        "publicLabel": "装饰文案",
        "description": "圆心读数"
      },
      {
        "key": "labelType",
        "prop": "labelType",
        "label": "标签类型",
        "type": "labelType",
        "default": "数字",
        "publicKey": "labelType",
        "publicLabel": "标签类型"
      },
      {
        "key": "focus",
        "prop": "focus",
        "label": "重点信息 Focus",
        "type": "focus",
        "default": true,
        "publicKey": "focus",
        "publicLabel": "重点信息 Focus"
      },
      {
        "key": "focusIndex",
        "prop": "focusIndex",
        "label": "焦点序号",
        "type": "slider",
        "default": 0,
        "min": 0,
        "step": 1,
        "publicKey": "focusIndex",
        "publicLabel": "焦点序号"
      }
    ],
    "defaultProps": {
      "itemCount": 6,
      "showRibbon": true,
      "showValue": true,
      "focus": true,
      "focusIndex": 0,
      "labelType": "number",
      "showAside": true,
      "head": {
        "no": "03",
        "en": "Chord · Co-investment",
        "cn": "板块联投 · 弦图"
      },
      "nodes": [
        {
          "label": "大模型",
          "sub": "Foundation"
        },
        {
          "label": "算力基建",
          "sub": "Compute"
        },
        {
          "label": "企业应用",
          "sub": "Enterprise"
        },
        {
          "label": "数据平台",
          "sub": "Data"
        },
        {
          "label": "机器人",
          "sub": "Robotics"
        },
        {
          "label": "医疗 AI",
          "sub": "Health"
        }
      ],
      "links": [
        {
          "i": 0,
          "j": 1,
          "v": 38
        },
        {
          "i": 0,
          "j": 2,
          "v": 22
        },
        {
          "i": 0,
          "j": 3,
          "v": 18
        },
        {
          "i": 1,
          "j": 3,
          "v": 16
        },
        {
          "i": 1,
          "j": 4,
          "v": 12
        },
        {
          "i": 2,
          "j": 3,
          "v": 14
        },
        {
          "i": 2,
          "j": 5,
          "v": 9
        },
        {
          "i": 3,
          "j": 4,
          "v": 8
        },
        {
          "i": 4,
          "j": 5,
          "v": 7
        },
        {
          "i": 0,
          "j": 4,
          "v": 11
        }
      ]
    }
  },
  {
    "key": "theme09_page018",
    "themeKey": "theme09",
    "pageNumber": 18,
    "layout": "THEME09-018",
    "slot": "sunburst",
    "label": "层级旭日",
    "bgClass": "bg-deep",
    "controls": [
      {
        "key": "itemCount",
        "prop": "itemCount",
        "label": "数量",
        "type": "slider",
        "default": 5,
        "min": 3,
        "max": 5,
        "step": 1,
        "desc": "大类数",
        "publicKey": "itemCount",
        "publicLabel": "数量",
        "description": "大类数"
      },
      {
        "key": "showOuter",
        "prop": "showOuter",
        "label": "外环细分",
        "type": "toggle",
        "default": true,
        "publicKey": "showOuter",
        "publicLabel": "外环细分"
      },
      {
        "key": "showLabels",
        "prop": "showLabels",
        "label": "弧上标注",
        "type": "toggle",
        "default": true,
        "publicKey": "showLabels",
        "publicLabel": "弧上标注"
      },
      {
        "key": "showAside",
        "prop": "showAside",
        "label": "装饰文案",
        "type": "toggle",
        "default": true,
        "desc": "圆心读数",
        "publicKey": "showAside",
        "publicLabel": "装饰文案",
        "description": "圆心读数"
      },
      {
        "key": "labelType",
        "prop": "labelType",
        "label": "标签类型",
        "type": "labelType",
        "default": "数字",
        "publicKey": "labelType",
        "publicLabel": "标签类型"
      },
      {
        "key": "focus",
        "prop": "focus",
        "label": "重点信息 Focus",
        "type": "focus",
        "default": true,
        "publicKey": "focus",
        "publicLabel": "重点信息 Focus"
      },
      {
        "key": "focusIndex",
        "prop": "focusIndex",
        "label": "焦点序号",
        "type": "slider",
        "default": 0,
        "min": 0,
        "step": 1,
        "publicKey": "focusIndex",
        "publicLabel": "焦点序号"
      }
    ],
    "defaultProps": {
      "itemCount": 5,
      "showOuter": true,
      "showLabels": true,
      "focus": true,
      "focusIndex": 0,
      "labelType": "number",
      "showAside": true,
      "head": {
        "no": "03",
        "en": "Sunburst · Hierarchy",
        "cn": "资本构成 · 两级层级"
      },
      "groups": [
        {
          "label": "大模型",
          "sub": "Foundation",
          "value": 43.3,
          "children": [
            {
              "label": "基础模型",
              "value": 28
            },
            {
              "label": "多模态",
              "value": 9
            },
            {
              "label": "智能体",
              "value": 6.3
            }
          ]
        },
        {
          "label": "算力基建",
          "sub": "Compute",
          "value": 18,
          "children": [
            {
              "label": "芯片",
              "value": 8
            },
            {
              "label": "云 / 数据中心",
              "value": 7
            },
            {
              "label": "网络",
              "value": 3
            }
          ]
        },
        {
          "label": "应用层",
          "sub": "Applications",
          "value": 16,
          "children": [
            {
              "label": "企业应用",
              "value": 7
            },
            {
              "label": "消费",
              "value": 5
            },
            {
              "label": "行业垂直",
              "value": 4
            }
          ]
        },
        {
          "label": "企业服务",
          "sub": "Enterprise",
          "value": 12,
          "children": [
            {
              "label": "安全",
              "value": 5
            },
            {
              "label": "数据",
              "value": 4
            },
            {
              "label": "运维",
              "value": 3
            }
          ]
        },
        {
          "label": "其他赛道",
          "sub": "Others",
          "value": 10.7,
          "children": [
            {
              "label": "机器人",
              "value": 4
            },
            {
              "label": "医疗 AI",
              "value": 3.7
            },
            {
              "label": "自动驾驶",
              "value": 3
            }
          ]
        }
      ]
    }
  },
  {
    "key": "theme09_page019",
    "themeKey": "theme09",
    "pageNumber": 19,
    "layout": "THEME09-019",
    "slot": "thesis",
    "label": "论点推演",
    "bgClass": "bg-deep",
    "controls": [
      {
        "key": "itemCount",
        "prop": "itemCount",
        "label": "数量",
        "type": "slider",
        "default": 4,
        "min": 2,
        "max": 5,
        "step": 1,
        "publicKey": "itemCount",
        "publicLabel": "数量"
      },
      {
        "key": "showAside",
        "prop": "showAside",
        "label": "装饰文案",
        "type": "toggle",
        "default": true,
        "publicKey": "showAside",
        "publicLabel": "装饰文案"
      },
      {
        "key": "showConclusion",
        "prop": "showConclusion",
        "label": "推论块",
        "type": "toggle",
        "default": true,
        "publicKey": "showConclusion",
        "publicLabel": "推论块"
      },
      {
        "key": "labelType",
        "prop": "labelType",
        "label": "标签类型",
        "type": "labelType",
        "default": "数字",
        "publicKey": "labelType",
        "publicLabel": "标签类型"
      },
      {
        "key": "focus",
        "prop": "focus",
        "label": "重点信息 Focus",
        "type": "focus",
        "default": true,
        "publicKey": "focus",
        "publicLabel": "重点信息 Focus"
      },
      {
        "key": "focusIndex",
        "prop": "focusIndex",
        "label": "焦点序号",
        "type": "slider",
        "default": 1,
        "min": 0,
        "step": 1,
        "publicKey": "focusIndex",
        "publicLabel": "焦点序号"
      }
    ],
    "defaultProps": {
      "itemCount": 4,
      "focus": true,
      "focusIndex": 1,
      "labelType": "number",
      "showAside": true,
      "showConclusion": true,
      "head": {
        "no": "论纲",
        "en": "The Argument",
        "cn": "一笔钱，三层判断"
      },
      "thesis": {
        "tag": "核心命题",
        "text": "2024 年的 AI 融资热，本质是一次结构性的资本再分配，而非一场普涨。"
      },
      "conclusion": {
        "tag": "推论",
        "text": "因此，押注「结构」比押注「个体」更接近长期胜算——确定性藏在卖铲子的环节里。"
      },
      "premises": [
        {
          "lead": "前提一",
          "text": "总量创下历史新高，但增量高度集中——大模型一条赛道吞下逾四成资金。"
        },
        {
          "lead": "前提二",
          "text": "头部公司估值领先收入数个身位，繁荣的兑现压力被推迟，而非消除。"
        },
        {
          "lead": "前提三",
          "text": "算力、数据与云等基础设施环节，无论谁胜出都稳定收取过路费。"
        },
        {
          "lead": "前提四",
          "text": "应用层两极分化，有真实 PMF 的产品跑出，纯叙事项目开始退潮。"
        },
        {
          "lead": "前提五",
          "text": "退出通道收窄，一级估值与二级定价之间的剪刀差，正在重新定价风险。"
        }
      ]
    }
  },
  {
    "key": "theme09_page020",
    "themeKey": "theme09",
    "pageNumber": 20,
    "layout": "THEME09-020",
    "slot": "ribbon",
    "label": "全幅比例带",
    "bgClass": "bg-blue",
    "controls": [
      {
        "key": "itemCount",
        "prop": "itemCount",
        "label": "分段数量",
        "type": "slider",
        "default": 4,
        "min": 2,
        "max": 6,
        "step": 1,
        "publicKey": "itemCount",
        "publicLabel": "分段数量"
      },
      {
        "key": "showPct",
        "prop": "showPct",
        "label": "段内占比",
        "type": "toggle",
        "default": true,
        "publicKey": "showPct",
        "publicLabel": "段内占比"
      },
      {
        "key": "showScale",
        "prop": "showScale",
        "label": "装饰文案",
        "type": "toggle",
        "default": true,
        "desc": "刻度基线",
        "publicKey": "showScale",
        "publicLabel": "装饰文案",
        "description": "刻度基线"
      },
      {
        "key": "labelType",
        "prop": "labelType",
        "label": "标签类型",
        "type": "labelType",
        "default": "数字",
        "publicKey": "labelType",
        "publicLabel": "标签类型"
      },
      {
        "key": "focus",
        "prop": "focus",
        "label": "重点信息 Focus",
        "type": "focus",
        "default": true,
        "publicKey": "focus",
        "publicLabel": "重点信息 Focus"
      },
      {
        "key": "focusIndex",
        "prop": "focusIndex",
        "label": "焦点序号",
        "type": "slider",
        "default": 0,
        "min": 0,
        "step": 1,
        "publicKey": "focusIndex",
        "publicLabel": "焦点序号"
      }
    ],
    "defaultProps": {
      "itemCount": 4,
      "showPct": true,
      "showScale": true,
      "focus": true,
      "focusIndex": 0,
      "labelType": "number",
      "head": {
        "no": "占比",
        "en": "Share of Capital",
        "cn": "资金都流向了哪条赛道"
      },
      "items": [
        {
          "label": "大模型 / 基础模型",
          "pct": 43.3,
          "note": "一条赛道吞下逾四成资金",
          "color": "#4a86ff"
        },
        {
          "label": "AI 基础设施 / 算力",
          "pct": 24.6,
          "note": "卖铲子环节稳收过路费",
          "color": "#46e3c6"
        },
        {
          "label": "应用层 / 垂直场景",
          "pct": 21.1,
          "note": "两极分化，PMF 者跑出",
          "color": "#9f7bff"
        },
        {
          "label": "其他 / 早期探索",
          "pct": 11,
          "note": "长尾叙事开始退潮",
          "color": "#ffb27a"
        },
        {
          "label": "机器人 / 具身智能",
          "pct": 8.2,
          "note": "硬件长周期，资本谨慎试水",
          "color": "#6fd3ff"
        },
        {
          "label": "安全 / 对齐",
          "pct": 5,
          "note": "政策驱动的新兴小赛道",
          "color": "#ff9bb6"
        }
      ]
    }
  },
  {
    "key": "theme09_page021",
    "themeKey": "theme09",
    "pageNumber": 21,
    "layout": "THEME09-021",
    "slot": "chain",
    "label": "04 产业链分层",
    "bgClass": "bg-deep",
    "controls": [
      {
        "key": "layers",
        "prop": "layers",
        "label": "层级数量",
        "type": "slider",
        "default": 3,
        "min": 1,
        "max": 3,
        "step": 1,
        "publicKey": "layers",
        "publicLabel": "层级数量"
      },
      {
        "key": "perLayer",
        "prop": "perLayer",
        "label": "每层数量",
        "type": "slider",
        "default": 4,
        "min": 1,
        "max": 5,
        "step": 1,
        "publicKey": "perLayer",
        "publicLabel": "每层数量"
      },
      {
        "key": "showGeo",
        "prop": "showGeo",
        "label": "分布面板",
        "type": "toggle",
        "default": true,
        "publicKey": "showGeo",
        "publicLabel": "分布面板"
      },
      {
        "key": "callout",
        "prop": "callout",
        "label": "解读卡",
        "type": "toggle",
        "default": true,
        "publicKey": "callout",
        "publicLabel": "解读卡"
      },
      {
        "key": "labelType",
        "prop": "labelType",
        "label": "标签类型",
        "type": "labelType",
        "default": "数字",
        "publicKey": "labelType",
        "publicLabel": "标签类型"
      },
      {
        "key": "focus",
        "prop": "focus",
        "label": "重点信息 Focus",
        "type": "focus",
        "default": true,
        "publicKey": "focus",
        "publicLabel": "重点信息 Focus"
      },
      {
        "key": "focusIndex",
        "prop": "focusIndex",
        "label": "焦点序号",
        "type": "slider",
        "default": 1,
        "min": 0,
        "step": 1,
        "publicKey": "focusIndex",
        "publicLabel": "焦点序号"
      }
    ],
    "defaultProps": {
      "layers": 3,
      "perLayer": 4,
      "showGeo": true,
      "callout": true,
      "labelType": "number",
      "focus": true,
      "focusIndex": 1,
      "tiers": [
        {
          "tier": "上游",
          "name": "基础设施",
          "en": "Infrastructure",
          "desc": "算力 · 芯片 · 数据",
          "companies": [
            "Cerebras",
            "Groq",
            "CoreWeave",
            "Scale AI"
          ],
          "color": "#4a86ff",
          "spine": "linear-gradient(180deg,#5a8dff,#1d49d6)"
        },
        {
          "tier": "中游",
          "name": "模型层",
          "en": "Model Layer",
          "desc": "通用大模型 · 开源 / 专用",
          "companies": [
            "OpenAI",
            "Anthropic",
            "xAI",
            "Mistral",
            "SSI"
          ],
          "color": "#46e3c6",
          "spine": "linear-gradient(180deg,#5af0d4,#1fb89b)"
        },
        {
          "tier": "下游",
          "name": "应用层",
          "en": "Application",
          "desc": "生产力 · 搜索 · 具身智能",
          "companies": [
            "Glean",
            "Databricks",
            "Perplexity AI",
            "Figure AI"
          ],
          "color": "#9f7bff",
          "spine": "linear-gradient(180deg,#a98bff,#5a2fd6)"
        }
      ],
      "geo": [
        {
          "lb": "旧金山湾区",
          "amt": 620,
          "pct": 63.9
        },
        {
          "lb": "纽约",
          "amt": 120,
          "pct": 12.4
        },
        {
          "lb": "西雅图",
          "amt": 95,
          "pct": 9.8
        },
        {
          "lb": "波士顿",
          "amt": 75,
          "pct": 7.7
        },
        {
          "lb": "其他地区",
          "amt": 60,
          "pct": 6.2
        }
      ]
    }
  },
  {
    "key": "theme09_page022",
    "themeKey": "theme09",
    "pageNumber": 22,
    "layout": "THEME09-022",
    "slot": "cases",
    "label": "05 典型案例",
    "bgClass": "bg-blue",
    "controls": [
      {
        "key": "caseCount",
        "prop": "caseCount",
        "label": "数量",
        "type": "slider",
        "default": 3,
        "min": 1,
        "max": 3,
        "step": 1,
        "publicKey": "caseCount",
        "publicLabel": "数量"
      },
      {
        "key": "imgCount",
        "prop": "imgCount",
        "label": "图片槽数量",
        "type": "slider",
        "default": 3,
        "min": 0,
        "max": 4,
        "step": 1,
        "publicKey": "imgCount",
        "publicLabel": "图片槽数量"
      },
      {
        "key": "quote",
        "prop": "quote",
        "label": "引用",
        "type": "toggle",
        "default": true,
        "publicKey": "quote",
        "publicLabel": "引用"
      },
      {
        "key": "labelType",
        "prop": "labelType",
        "label": "标签类型",
        "type": "labelType",
        "default": "数字",
        "publicKey": "labelType",
        "publicLabel": "标签类型"
      },
      {
        "key": "focus",
        "prop": "focus",
        "label": "重点信息 Focus",
        "type": "focus",
        "default": true,
        "publicKey": "focus",
        "publicLabel": "重点信息 Focus"
      },
      {
        "key": "focusIndex",
        "prop": "focusIndex",
        "label": "焦点序号",
        "type": "slider",
        "default": 0,
        "min": 0,
        "step": 1,
        "publicKey": "focusIndex",
        "publicLabel": "焦点序号"
      }
    ],
    "defaultProps": {
      "caseCount": 3,
      "imgCount": 3,
      "quote": true,
      "labelType": "number",
      "focus": true,
      "focusIndex": 0,
      "cases": [
        {
          "cn": "Anthropic",
          "en": "从追赶到反超",
          "val": "9650",
          "fund": "650+",
          "meta": "三轮 · 5/8/11月",
          "tags": [
            "Constitutional AI",
            "安全对齐",
            "Claude"
          ],
          "accent": "#46e3c6",
          "quote": "通过可解释、可控的系统构建 AI，比单纯追求规模更符合长远利益。",
          "who": "Dario Amodei · CEO"
        },
        {
          "cn": "xAI",
          "en": "马斯克的第三次创业",
          "val": "500",
          "fund": "50",
          "meta": "18 个月跻身头部",
          "tags": [
            "实时数据",
            "多模态",
            "Grok"
          ],
          "accent": "#7aa0ff",
          "quote": "背靠 X 平台海量实时数据，与特斯拉自动驾驶协同。",
          "who": "Grok · 实时 · 差异化"
        },
        {
          "cn": "CoreWeave",
          "en": "卖铲子的人也赚翻了",
          "val": "190",
          "fund": "110",
          "meta": "加密挖矿转型算力云",
          "tags": [
            "卖铲子",
            "NVIDIA 长约",
            "H100 / H200"
          ],
          "accent": "#9f7bff",
          "quote": "淘金热中卖铲子——提前锁定算力的基础设施商成为稀缺标的。",
          "who": "CoreWeave · 算力云"
        }
      ]
    }
  },
  {
    "key": "theme09_page023",
    "themeKey": "theme09",
    "pageNumber": 23,
    "layout": "THEME09-023",
    "slot": "split",
    "label": "斜切分屏",
    "bgClass": "bg-deep",
    "controls": [
      {
        "key": "supportCount",
        "prop": "supportCount",
        "label": "支撑指标数量",
        "type": "slider",
        "default": 3,
        "min": 0,
        "max": 4,
        "step": 1,
        "publicKey": "supportCount",
        "publicLabel": "支撑指标数量"
      },
      {
        "key": "splitDir",
        "prop": "splitDir",
        "label": "斜切方向",
        "type": "radio",
        "default": "左下",
        "options": [
          "左下",
          "右下"
        ],
        "publicKey": "splitDir",
        "publicLabel": "斜切方向"
      },
      {
        "key": "showGhost",
        "prop": "showGhost",
        "label": "装饰文案",
        "type": "toggle",
        "default": true,
        "desc": "幽灵大字",
        "publicKey": "showGhost",
        "publicLabel": "装饰文案",
        "description": "幽灵大字"
      },
      {
        "key": "labelType",
        "prop": "labelType",
        "label": "标签类型",
        "type": "labelType",
        "default": "数字",
        "publicKey": "labelType",
        "publicLabel": "标签类型"
      },
      {
        "key": "focus",
        "prop": "focus",
        "label": "重点信息 Focus",
        "type": "focus",
        "default": true,
        "publicKey": "focus",
        "publicLabel": "重点信息 Focus"
      },
      {
        "key": "focusIndex",
        "prop": "focusIndex",
        "label": "焦点序号",
        "type": "slider",
        "default": 0,
        "min": 0,
        "step": 1,
        "publicKey": "focusIndex",
        "publicLabel": "焦点序号"
      }
    ],
    "defaultProps": {
      "supportCount": 3,
      "splitDir": "左下",
      "showGhost": true,
      "focus": true,
      "focusIndex": 0,
      "kicker": "FY2024 · 资本总量",
      "statement": "全年流入创历史新高，\nAI 成为美元风投的主航道。",
      "bigValue": "970",
      "unit": "亿美元",
      "ghost": "CAPITAL",
      "supports": [
        {
          "label": "占美国 VC 总额",
          "value": "≈ 1/3"
        },
        {
          "label": "≥1 亿美元事件",
          "value": "97 笔"
        },
        {
          "label": "平均单笔规模",
          "value": "≈ 10 亿"
        },
        {
          "label": "同比",
          "value": "+ 显著"
        }
      ]
    }
  },
  {
    "key": "theme09_page024",
    "themeKey": "theme09",
    "pageNumber": 24,
    "layout": "THEME09-024",
    "slot": "storyboard",
    "label": "分镜脚本",
    "bgClass": "bg-blue",
    "controls": [
      {
        "key": "imgCount",
        "prop": "imgCount",
        "label": "图片槽数量",
        "type": "slider",
        "default": 4,
        "min": 3,
        "max": 6,
        "step": 1,
        "publicKey": "imgCount",
        "publicLabel": "图片槽数量"
      },
      {
        "key": "showFlow",
        "prop": "showFlow",
        "label": "装饰文案",
        "type": "toggle",
        "default": true,
        "desc": "单排流向箭头",
        "publicKey": "showFlow",
        "publicLabel": "装饰文案",
        "description": "单排流向箭头"
      },
      {
        "key": "showDesc",
        "prop": "showDesc",
        "label": "镜头说明",
        "type": "toggle",
        "default": true,
        "publicKey": "showDesc",
        "publicLabel": "镜头说明"
      },
      {
        "key": "labelType",
        "prop": "labelType",
        "label": "标签类型",
        "type": "labelType",
        "default": "数字",
        "publicKey": "labelType",
        "publicLabel": "标签类型"
      },
      {
        "key": "focus",
        "prop": "focus",
        "label": "重点信息 Focus",
        "type": "focus",
        "default": true,
        "publicKey": "focus",
        "publicLabel": "重点信息 Focus"
      },
      {
        "key": "focusIndex",
        "prop": "focusIndex",
        "label": "焦点序号",
        "type": "slider",
        "default": 0,
        "min": 0,
        "step": 1,
        "publicKey": "focusIndex",
        "publicLabel": "焦点序号"
      }
    ],
    "defaultProps": {
      "imgCount": 4,
      "showFlow": true,
      "showDesc": true,
      "focus": true,
      "focusIndex": 0,
      "labelType": "number",
      "head": {
        "no": "分镜",
        "en": "Storyboard · Shot Sequence",
        "cn": "资本叙事 · 分镜脚本"
      },
      "shots": [
        {
          "shot": "远景 WIDE",
          "desc": "巨额融资拉开序幕，行业全景铺陈。"
        },
        {
          "shot": "中景 MID",
          "desc": "头部玩家聚焦，赛道格局成形。"
        },
        {
          "shot": "近景 CU",
          "desc": "单笔交易细节，估值与轮次。"
        },
        {
          "shot": "特写 ECU",
          "desc": "关键数字定格，结论呼之欲出。"
        },
        {
          "shot": "过肩 OTS",
          "desc": "投资人视角，风险与回报权衡。"
        },
        {
          "shot": "空镜 INSERT",
          "desc": "尾声留白，留给下一年的悬念。"
        }
      ]
    }
  },
  {
    "key": "theme09_page025",
    "themeKey": "theme09",
    "pageNumber": 25,
    "layout": "THEME09-025",
    "slot": "feature",
    "label": "图说特写",
    "bgClass": "bg-deep",
    "controls": [
      {
        "key": "imgCount",
        "prop": "imgCount",
        "label": "图片槽数量",
        "type": "slider",
        "default": 1,
        "min": 1,
        "max": 4,
        "step": 1,
        "publicKey": "imgCount",
        "publicLabel": "图片槽数量"
      },
      {
        "key": "imgSide",
        "prop": "imgSide",
        "label": "图片位置",
        "type": "radio",
        "default": "左",
        "options": [
          "左",
          "右"
        ],
        "publicKey": "imgSide",
        "publicLabel": "图片位置"
      },
      {
        "key": "pointCount",
        "prop": "pointCount",
        "label": "数量",
        "type": "slider",
        "default": 3,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "图说条数",
        "publicKey": "pointCount",
        "publicLabel": "数量",
        "description": "图说条数"
      },
      {
        "key": "showCaption",
        "prop": "showCaption",
        "label": "装饰文案",
        "type": "toggle",
        "default": true,
        "desc": "图底字幕条",
        "publicKey": "showCaption",
        "publicLabel": "装饰文案",
        "description": "图底字幕条"
      },
      {
        "key": "labelType",
        "prop": "labelType",
        "label": "标签类型",
        "type": "labelType",
        "default": "数字",
        "publicKey": "labelType",
        "publicLabel": "标签类型"
      },
      {
        "key": "focus",
        "prop": "focus",
        "label": "重点信息 Focus",
        "type": "focus",
        "default": true,
        "publicKey": "focus",
        "publicLabel": "重点信息 Focus"
      },
      {
        "key": "focusIndex",
        "prop": "focusIndex",
        "label": "焦点序号",
        "type": "slider",
        "default": 0,
        "min": 0,
        "step": 1,
        "publicKey": "focusIndex",
        "publicLabel": "焦点序号"
      }
    ],
    "defaultProps": {
      "imgCount": 1,
      "imgSide": "left",
      "pointCount": 3,
      "focus": true,
      "focusIndex": 0,
      "labelType": "number",
      "showCaption": true,
      "badge": "05",
      "kicker": "IN FOCUS · 特写",
      "title": "Anthropic",
      "titleEN": "从追赶者到反超者",
      "paragraph": "以「可解释、可控」的安全路线切入，三轮密集融资把估值推上新台阶 —— 在头部大模型的竞速里，叙事与对齐能力同样是稀缺资产。",
      "points": [
        {
          "label": "累计融资",
          "value": "650+ 亿$",
          "caption": "2024 年内三轮密集关账，资本高速加注"
        },
        {
          "label": "最新估值",
          "value": "9650 亿$",
          "caption": "跻身全球大模型第一梯队的估值水位"
        },
        {
          "label": "核心标签",
          "value": "安全对齐 · Claude",
          "caption": "Constitutional AI 路线构筑差异化护城河"
        },
        {
          "label": "战略支点",
          "value": "云厂商深绑",
          "caption": "获超大规模算力与渠道的长期承诺"
        }
      ]
    }
  },
  {
    "key": "theme09_page026",
    "themeKey": "theme09",
    "pageNumber": 26,
    "layout": "THEME09-026",
    "slot": "polaroid",
    "label": "影像速写",
    "bgClass": "bg-blue",
    "controls": [
      {
        "key": "imgCount",
        "prop": "imgCount",
        "label": "图片槽数量",
        "type": "slider",
        "default": 4,
        "min": 0,
        "max": 5,
        "step": 1,
        "publicKey": "imgCount",
        "publicLabel": "图片槽数量"
      },
      {
        "key": "scatter",
        "prop": "scatter",
        "label": "散落排布",
        "type": "toggle",
        "default": true,
        "publicKey": "scatter",
        "publicLabel": "散落排布"
      },
      {
        "key": "showTape",
        "prop": "showTape",
        "label": "装饰文案",
        "type": "toggle",
        "default": true,
        "desc": "胶带装饰",
        "publicKey": "showTape",
        "publicLabel": "装饰文案",
        "description": "胶带装饰"
      },
      {
        "key": "labelType",
        "prop": "labelType",
        "label": "标签类型",
        "type": "labelType",
        "default": "数字",
        "publicKey": "labelType",
        "publicLabel": "标签类型"
      },
      {
        "key": "focus",
        "prop": "focus",
        "label": "重点信息 Focus",
        "type": "focus",
        "default": true,
        "publicKey": "focus",
        "publicLabel": "重点信息 Focus"
      },
      {
        "key": "focusIndex",
        "prop": "focusIndex",
        "label": "焦点序号",
        "type": "slider",
        "default": 0,
        "min": 0,
        "step": 1,
        "publicKey": "focusIndex",
        "publicLabel": "焦点序号"
      }
    ],
    "defaultProps": {
      "imgCount": 4,
      "scatter": true,
      "showTape": true,
      "focus": true,
      "focusIndex": 0,
      "labelType": "number",
      "badge": "05",
      "kicker": "FIELD NOTES · 影像速写",
      "title": "一年间的影像速写",
      "titleEN": "Snapshots · 2024",
      "shots": [
        {
          "caption": "路演现场 · 资本与团队的初次握手"
        },
        {
          "caption": "签约时刻 · 大额轮次落定"
        },
        {
          "caption": "机房一隅 · 算力即护城河"
        },
        {
          "caption": "白板之上 · 模型路线之争"
        },
        {
          "caption": "庆功之夜 · 估值再创新高"
        }
      ]
    }
  },
  {
    "key": "theme09_page027",
    "themeKey": "theme09",
    "pageNumber": 27,
    "layout": "THEME09-027",
    "slot": "risk",
    "label": "06 风险研判",
    "bgClass": "bg-deep",
    "controls": [
      {
        "key": "itemCount",
        "prop": "itemCount",
        "label": "条目数量",
        "type": "slider",
        "default": 4,
        "min": 1,
        "max": 4,
        "step": 1,
        "publicKey": "itemCount",
        "publicLabel": "条目数量"
      },
      {
        "key": "variant",
        "prop": "variant",
        "label": "布局方式",
        "type": "radio",
        "default": "网格",
        "options": [
          "网格",
          "列表"
        ],
        "publicKey": "variant",
        "publicLabel": "布局方式"
      },
      {
        "key": "showAside",
        "prop": "showAside",
        "label": "装饰文案",
        "type": "toggle",
        "default": true,
        "publicKey": "showAside",
        "publicLabel": "装饰文案"
      },
      {
        "key": "labelType",
        "prop": "labelType",
        "label": "标签类型",
        "type": "labelType",
        "default": "数字",
        "publicKey": "labelType",
        "publicLabel": "标签类型"
      },
      {
        "key": "focus",
        "prop": "focus",
        "label": "重点信息 Focus",
        "type": "focus",
        "default": true,
        "publicKey": "focus",
        "publicLabel": "重点信息 Focus"
      },
      {
        "key": "focusIndex",
        "prop": "focusIndex",
        "label": "焦点序号",
        "type": "slider",
        "default": 1,
        "min": 0,
        "step": 1,
        "publicKey": "focusIndex",
        "publicLabel": "焦点序号"
      }
    ],
    "defaultProps": {
      "itemCount": 4,
      "variant": "网格",
      "focus": true,
      "focusIndex": 0,
      "labelType": "number",
      "showAside": true,
      "accent": "#ffb27a",
      "items": [
        {
          "title": "估值泡沫与盈利困境",
          "en": "Valuation",
          "metric": {
            "v": "1000",
            "u": "×+",
            "l": "P/S 市销率"
          },
          "desc": "估值多建立在「未来市值」而非当前收入，宏观一旦收紧，高位回调难免。"
        },
        {
          "title": "监管压力加大",
          "en": "Regulation",
          "metric": {
            "v": "EU",
            "u": "AI Act",
            "l": "合规成本"
          },
          "desc": "欧盟 AI Act、美国各州隐私法案相继生效，合规成本与法律风险持续上升。"
        },
        {
          "title": "大厂挤压与开源冲击",
          "en": "Incumbents",
          "metric": {
            "v": "3",
            "u": "巨头",
            "l": "自研降维"
          },
          "desc": "Google / Meta / Microsoft 自研模型降维打击；开源性能逼近闭源，削弱付费壁垒。"
        },
        {
          "title": "算力供应链「卡脖子」",
          "en": "Compute",
          "metric": {
            "v": "GPU",
            "u": "紧张",
            "l": "出口管制"
          },
          "desc": "NVIDIA GPU 供应紧张、对华出口管制加码，算力成本居高，中小公司难撑烧钱。"
        }
      ],
      "chain": [
        "估值高企",
        "宏观收紧",
        "估值回调",
        "行业洗牌"
      ]
    }
  },
  {
    "key": "theme09_page028",
    "themeKey": "theme09",
    "pageNumber": 28,
    "layout": "THEME09-028",
    "slot": "outlook",
    "label": "06 投资展望",
    "bgClass": "bg-blue",
    "controls": [
      {
        "key": "itemCount",
        "prop": "itemCount",
        "label": "数量",
        "type": "slider",
        "default": 3,
        "min": 1,
        "max": 3,
        "step": 1,
        "desc": "每组条目数",
        "publicKey": "itemCount",
        "publicLabel": "数量",
        "description": "每组条目数"
      },
      {
        "key": "showAside",
        "prop": "showAside",
        "label": "时间轴",
        "type": "toggle",
        "default": true,
        "publicKey": "showAside",
        "publicLabel": "时间轴"
      },
      {
        "key": "labelType",
        "prop": "labelType",
        "label": "标签类型",
        "type": "labelType",
        "default": "数字",
        "publicKey": "labelType",
        "publicLabel": "标签类型"
      },
      {
        "key": "focus",
        "prop": "focus",
        "label": "重点信息 Focus",
        "type": "focus",
        "default": true,
        "publicKey": "focus",
        "publicLabel": "重点信息 Focus"
      },
      {
        "key": "focusIndex",
        "prop": "focusIndex",
        "label": "焦点分组",
        "type": "radio",
        "default": "左侧",
        "options": [
          "左侧",
          "右侧"
        ],
        "publicKey": "focusIndex",
        "publicLabel": "焦点分组"
      }
    ],
    "defaultProps": {
      "itemCount": 3,
      "focus": true,
      "focusIndex": 0,
      "labelType": "symbol",
      "showAside": true,
      "groups": [
        {
          "title": "看好方向",
          "en": "Bullish",
          "tone": "positive",
          "sign": "✓",
          "items": [
            {
              "label": "垂直应用",
              "note": "清晰商业模式、已验证 PMF（Glean、Harvey）"
            },
            {
              "label": "基础设施中游",
              "note": "数据标注、向量数据库等「卖铲子」环节"
            },
            {
              "label": "具身智能",
              "note": "人形机器人、自动驾驶等长周期硬科技"
            }
          ]
        },
        {
          "title": "谨慎对待",
          "en": "Caution",
          "tone": "caution",
          "sign": "!",
          "items": [
            {
              "label": "高估值无收入纯模型",
              "note": "烧钱快、壁垒低、泡沫大"
            },
            {
              "label": "跟风「AI 包装」项目",
              "note": "仅叠一层 LLM 调用，无壁垒"
            },
            {
              "label": "缺数据护城河消费应用",
              "note": "迁移成本低，易被大厂复制"
            }
          ]
        }
      ],
      "phases": [
        {
          "time": "2025 – 2026",
          "text": "观察头部公司 IPO 表现，若 Anthropic / OpenAI 破发，警惕全行业估值回调"
        },
        {
          "time": "2026 – 2027",
          "text": "关注垂直应用收入曲线，优选 ARR ≥ 1 亿、续约率 > 120% 的标的"
        },
        {
          "time": "2027 年后",
          "text": "若 AGI 突破未兑现，行业进入洗牌期，可抄底被低估的技术资产"
        }
      ]
    }
  },
  {
    "key": "theme09_page029",
    "themeKey": "theme09",
    "pageNumber": 29,
    "layout": "THEME09-029",
    "slot": "conclusion",
    "label": "07 核心结论",
    "bgClass": "bg-deep",
    "controls": [
      {
        "key": "itemCount",
        "prop": "itemCount",
        "label": "条目数量",
        "type": "slider",
        "default": 3,
        "min": 1,
        "max": 3,
        "step": 1,
        "publicKey": "itemCount",
        "publicLabel": "条目数量"
      },
      {
        "key": "showAside",
        "prop": "showAside",
        "label": "装饰文案",
        "type": "toggle",
        "default": true,
        "publicKey": "showAside",
        "publicLabel": "装饰文案"
      },
      {
        "key": "labelType",
        "prop": "labelType",
        "label": "标签类型",
        "type": "labelType",
        "default": "数字",
        "publicKey": "labelType",
        "publicLabel": "标签类型"
      },
      {
        "key": "focus",
        "prop": "focus",
        "label": "重点信息 Focus",
        "type": "focus",
        "default": true,
        "publicKey": "focus",
        "publicLabel": "重点信息 Focus"
      },
      {
        "key": "focusIndex",
        "prop": "focusIndex",
        "label": "焦点序号",
        "type": "slider",
        "default": 0,
        "min": 0,
        "step": 1,
        "publicKey": "focusIndex",
        "publicLabel": "焦点序号"
      }
    ],
    "defaultProps": {
      "itemCount": 3,
      "focus": true,
      "focusIndex": 0,
      "labelType": "number",
      "showAside": true,
      "items": [
        {
          "dim": "横向",
          "title": "看集中",
          "en": "Concentration",
          "desc": "资金高度向头部公司、通用大模型、旧金山湾区集中，「赢家通吃」格局确立。"
        },
        {
          "dim": "纵向",
          "title": "看节奏",
          "en": "Rhythm",
          "desc": "全年「前高后稳」，Q2–Q3 达峰后理性回落，市场从狂热转向分化。"
        },
        {
          "dim": "结构",
          "title": "看分层",
          "en": "Structure",
          "desc": "上游确定性最强、中游竞争最激烈、下游潜力最大但尚需时间验证。"
        }
      ],
      "summary": {
        "tag": "一句话总结",
        "text": "AI 融资盛宴仍在继续，但音乐的节奏正在变化——资本的下一阶段将从「赌叙事」转向「看兑现」，能把技术转化为可持续收入的公司，才能在退潮后留在牌桌上。"
      }
    }
  },
  {
    "key": "theme09_page030",
    "themeKey": "theme09",
    "pageNumber": 30,
    "layout": "THEME09-030",
    "slot": "divider",
    "label": "附录 · 透视",
    "bgClass": "bg-blue",
    "controls": [
      {
        "key": "itemCount",
        "prop": "itemCount",
        "label": "数量",
        "type": "slider",
        "default": 4,
        "min": 1,
        "max": 6,
        "step": 1,
        "desc": "主题索引条目数",
        "publicKey": "itemCount",
        "publicLabel": "数量",
        "description": "主题索引条目数"
      },
      {
        "key": "align",
        "prop": "align",
        "label": "对齐",
        "type": "radio",
        "default": "居左",
        "options": [
          "居左",
          "居中"
        ],
        "publicKey": "align",
        "publicLabel": "对齐"
      },
      {
        "key": "showIndex",
        "prop": "showIndex",
        "label": "装饰文案",
        "type": "toggle",
        "default": true,
        "desc": "底部主题索引",
        "publicKey": "showIndex",
        "publicLabel": "装饰文案",
        "description": "底部主题索引"
      },
      {
        "key": "labelType",
        "prop": "labelType",
        "label": "标签类型",
        "type": "labelType",
        "default": "数字",
        "publicKey": "labelType",
        "publicLabel": "标签类型"
      },
      {
        "key": "focus",
        "prop": "focus",
        "label": "重点信息 Focus",
        "type": "focus",
        "default": true,
        "publicKey": "focus",
        "publicLabel": "重点信息 Focus"
      },
      {
        "key": "focusIndex",
        "prop": "focusIndex",
        "label": "焦点序号",
        "type": "slider",
        "default": 0,
        "min": 0,
        "step": 1,
        "publicKey": "focusIndex",
        "publicLabel": "焦点序号"
      }
    ],
    "defaultProps": {
      "sectionNo": "08",
      "titleCN": "深度数据透视",
      "titleEN": "Deep Data Perspectives",
      "kicker": "PART · APPENDIX",
      "itemCount": 4,
      "align": "居左",
      "showIndex": true,
      "focus": true,
      "focusIndex": 0,
      "labelType": "number",
      "topics": [
        {
          "no": "A",
          "label": "轮次结构与资本节奏"
        },
        {
          "no": "B",
          "label": "估值梯队与集中度"
        },
        {
          "no": "C",
          "label": "赛道渗透与版图"
        },
        {
          "no": "D",
          "label": "走势演变与景气度"
        },
        {
          "no": "E",
          "label": "风险信号与拐点"
        },
        {
          "no": "F",
          "label": "综合评分与排序"
        }
      ]
    }
  },
  {
    "key": "theme09_page031",
    "themeKey": "theme09",
    "pageNumber": 31,
    "layout": "THEME09-031",
    "slot": "epigraph",
    "label": "卷首题词",
    "bgClass": "bg-deep",
    "controls": [
      {
        "key": "itemCount",
        "prop": "itemCount",
        "label": "数量",
        "type": "slider",
        "default": 1,
        "min": 1,
        "max": 2,
        "step": 1,
        "publicKey": "itemCount",
        "publicLabel": "数量"
      },
      {
        "key": "align",
        "prop": "align",
        "label": "对齐",
        "type": "radio",
        "default": "居中",
        "options": [
          "居中",
          "居左"
        ],
        "publicKey": "align",
        "publicLabel": "对齐"
      },
      {
        "key": "scale",
        "prop": "scale",
        "label": "主题词字号",
        "type": "slider",
        "default": 58,
        "min": 44,
        "max": 72,
        "step": 2,
        "publicKey": "scale",
        "publicLabel": "主题词字号"
      },
      {
        "key": "showMark",
        "prop": "showMark",
        "label": "幽灵引号",
        "type": "toggle",
        "default": true,
        "publicKey": "showMark",
        "publicLabel": "幽灵引号"
      },
      {
        "key": "showRule",
        "prop": "showRule",
        "label": "装饰文案",
        "type": "toggle",
        "default": true,
        "desc": "上下花线",
        "publicKey": "showRule",
        "publicLabel": "装饰文案",
        "description": "上下花线"
      },
      {
        "key": "focus",
        "prop": "focus",
        "label": "重点信息 Focus",
        "type": "focus",
        "default": true,
        "publicKey": "focus",
        "publicLabel": "重点信息 Focus"
      }
    ],
    "defaultProps": {
      "itemCount": 1,
      "align": "居中",
      "scale": 58,
      "showMark": true,
      "showRule": true,
      "focus": true,
      "kicker": "EPIGRAPH · 卷首题词",
      "epigraphs": [
        {
          "text": "资本从不预测未来，它只是把赌注，押在它愿意相信的未来之上。",
          "by": "本报告",
          "work": "代序",
          "year": "2024"
        },
        {
          "text": "潮水退去时，沙滩上留下的名字，才是这一年真正写下的答案。",
          "by": "研究室",
          "work": "后记",
          "year": "2024"
        }
      ]
    }
  },
  {
    "key": "theme09_page032",
    "themeKey": "theme09",
    "pageNumber": 32,
    "layout": "THEME09-032",
    "slot": "bracket",
    "label": "归纳括弧",
    "bgClass": "bg-blue",
    "controls": [
      {
        "key": "itemCount",
        "prop": "itemCount",
        "label": "数量",
        "type": "slider",
        "default": 4,
        "min": 2,
        "max": 5,
        "step": 1,
        "publicKey": "itemCount",
        "publicLabel": "数量"
      },
      {
        "key": "side",
        "prop": "side",
        "label": "收敛方向",
        "type": "radio",
        "default": "左归右",
        "options": [
          "左归右",
          "右归左"
        ],
        "publicKey": "side",
        "publicLabel": "收敛方向"
      },
      {
        "key": "showBrace",
        "prop": "showBrace",
        "label": "装饰文案",
        "type": "toggle",
        "default": true,
        "desc": "中缝花括号",
        "publicKey": "showBrace",
        "publicLabel": "装饰文案",
        "description": "中缝花括号"
      },
      {
        "key": "labelType",
        "prop": "labelType",
        "label": "标签类型",
        "type": "labelType",
        "default": "数字",
        "publicKey": "labelType",
        "publicLabel": "标签类型"
      },
      {
        "key": "focus",
        "prop": "focus",
        "label": "重点信息 Focus",
        "type": "focus",
        "default": true,
        "publicKey": "focus",
        "publicLabel": "重点信息 Focus"
      },
      {
        "key": "focusIndex",
        "prop": "focusIndex",
        "label": "焦点序号",
        "type": "slider",
        "default": 0,
        "min": 0,
        "step": 1,
        "publicKey": "focusIndex",
        "publicLabel": "焦点序号"
      }
    ],
    "defaultProps": {
      "itemCount": 4,
      "side": "左归右",
      "showBrace": true,
      "focus": true,
      "focusIndex": 0,
      "labelType": "number",
      "head": {
        "no": "归纳",
        "en": "Convergence",
        "cn": "四股力，归于一个判断"
      },
      "items": [
        {
          "text": "总量创新高，但增量高度集中"
        },
        {
          "text": "头部估值远跑赢收入兑现"
        },
        {
          "text": "基础设施环节稳收过路费"
        },
        {
          "text": "应用层两极分化，叙事退潮"
        },
        {
          "text": "监管与算力约束逐步抬头"
        }
      ],
      "conclusion": {
        "tag": "归纳结论",
        "text": "押注「结构」\n胜过押注「个体」。",
        "note": "确定性藏在卖铲子的环节里。"
      }
    }
  },
  {
    "key": "theme09_page033",
    "themeKey": "theme09",
    "pageNumber": 33,
    "layout": "THEME09-033",
    "slot": "coverstory",
    "label": "封面影像",
    "bgClass": "bg-deep",
    "controls": [
      {
        "key": "backgroundMode",
        "label": "背景替换",
        "type": "segment",
        "default": "unicorn",
        "def": "unicorn",
        "options": [
          {
            "value": "unicorn",
            "label": "动态"
          },
          {
            "value": "media",
            "label": "上传"
          }
        ],
        "desc": "动态 shader 或自定义背景媒体",
        "publicKey": "backgroundMode",
        "publicLabel": "背景替换",
        "description": "动态 shader 或自定义背景媒体"
      },
      {
        "key": "unicornScene",
        "label": "动态场景",
        "type": "segment",
        "default": "tech",
        "def": "tech",
        "options": [
          {
            "value": "tech",
            "label": "科技"
          },
          {
            "value": "automations",
            "label": "自动化"
          },
          {
            "value": "moving",
            "label": "流动"
          },
          {
            "value": "goey",
            "label": "黏球"
          }
        ],
        "dependsOn": "backgroundMode",
        "dependsOnValue": "unicorn",
        "desc": "选择固定 Unicorn shader 场景",
        "publicKey": "dynamicVisual",
        "publicLabel": "动态场景",
        "description": "选择固定 Unicorn shader 场景"
      },
      {
        "key": "imgCount",
        "prop": "imgCount",
        "label": "图片槽数量",
        "type": "slider",
        "default": 3,
        "min": 1,
        "max": 4,
        "step": 1,
        "desc": "1=纯满幅；>1 加侧栏小图",
        "publicKey": "imgCount",
        "publicLabel": "图片槽数量",
        "description": "1=纯满幅；>1 加侧栏小图"
      },
      {
        "key": "textPos",
        "prop": "textPos",
        "label": "文字位置",
        "type": "radio",
        "default": "左",
        "options": [
          "左",
          "右"
        ],
        "publicKey": "textPos",
        "publicLabel": "文字位置"
      },
      {
        "key": "tagCount",
        "prop": "tagCount",
        "label": "标签数量",
        "type": "slider",
        "default": 3,
        "min": 0,
        "max": 4,
        "step": 1,
        "publicKey": "tagCount",
        "publicLabel": "标签数量"
      },
      {
        "key": "showMasthead",
        "prop": "showMasthead",
        "label": "装饰文案",
        "type": "toggle",
        "default": true,
        "desc": "顶部刊头条",
        "publicKey": "showMasthead",
        "publicLabel": "装饰文案",
        "description": "顶部刊头条"
      },
      {
        "key": "labelType",
        "prop": "labelType",
        "label": "标签类型",
        "type": "labelType",
        "default": "数字",
        "publicKey": "labelType",
        "publicLabel": "标签类型"
      },
      {
        "key": "focus",
        "prop": "focus",
        "label": "重点信息 Focus",
        "type": "focus",
        "default": true,
        "publicKey": "focus",
        "publicLabel": "重点信息 Focus"
      }
    ],
    "defaultProps": {
      "imgCount": 3,
      "backgroundMode": "unicorn",
      "unicornScene": "tech",
      "textPos": "left",
      "showMasthead": true,
      "tagCount": 3,
      "focus": true,
      "labelType": "number",
      "masthead": "AI CAPITAL",
      "issue": "VOL.2024 · ANNUAL",
      "kicker": "封面故事 · COVER STORY",
      "title": [
        "资本",
        "巨浪"
      ],
      "sub": "970 亿美元如何重塑美国 AI 版图",
      "tags": [
        "大模型",
        "算力基建",
        "垂直应用",
        "安全对齐"
      ],
      "credit": "AInsight 研究院 · 2024 年度影像"
    }
  },
  {
    "key": "theme09_page034",
    "themeKey": "theme09",
    "pageNumber": 34,
    "layout": "THEME09-034",
    "slot": "rounds",
    "label": "08 轮次结构",
    "bgClass": "bg-blue",
    "controls": [
      {
        "key": "itemCount",
        "prop": "itemCount",
        "label": "条目数量",
        "type": "slider",
        "default": 6,
        "min": 2,
        "max": 24,
        "step": 1,
        "publicKey": "itemCount",
        "publicLabel": "条目数量"
      },
      {
        "key": "chartType",
        "prop": "chartType",
        "label": "图表类型",
        "type": "radio",
        "default": "柱状",
        "options": [
          "柱状",
          "折线",
          "面积"
        ],
        "publicKey": "chartType",
        "publicLabel": "图表类型"
      },
      {
        "key": "metric",
        "prop": "metric",
        "label": "展示指标",
        "type": "radio",
        "default": "双指标",
        "options": [
          "主指标",
          "次指标",
          "双指标"
        ],
        "publicKey": "metric",
        "publicLabel": "展示指标"
      },
      {
        "key": "showAside",
        "prop": "showAside",
        "label": "装饰文案",
        "type": "toggle",
        "default": true,
        "publicKey": "showAside",
        "publicLabel": "装饰文案"
      },
      {
        "key": "labelType",
        "prop": "labelType",
        "label": "标签类型",
        "type": "labelType",
        "default": "数字",
        "publicKey": "labelType",
        "publicLabel": "标签类型"
      },
      {
        "key": "focus",
        "prop": "focus",
        "label": "重点信息 Focus",
        "type": "focus",
        "default": true,
        "publicKey": "focus",
        "publicLabel": "重点信息 Focus"
      },
      {
        "key": "focusIndex",
        "prop": "focusIndex",
        "label": "焦点序号",
        "type": "slider",
        "default": 4,
        "min": 0,
        "step": 1,
        "publicKey": "focusIndex",
        "publicLabel": "焦点序号"
      }
    ],
    "defaultProps": {
      "itemCount": 6,
      "chartType": "柱状",
      "metric": "双指标",
      "focus": true,
      "focusIndex": 4,
      "labelType": "number",
      "showAside": true,
      "badge": "08",
      "primaryMeta": {
        "label": "事件笔数",
        "unit": "笔"
      },
      "secondaryMeta": {
        "label": "平均单笔",
        "unit": "亿美元"
      },
      "items": [
        {
          "key": "Seed",
          "cn": "种子轮",
          "en": "Seed",
          "primary": 8,
          "secondary": 1.2
        },
        {
          "key": "A",
          "cn": "A 轮",
          "en": "Series A",
          "primary": 12,
          "secondary": 1.8
        },
        {
          "key": "B",
          "cn": "B 轮",
          "en": "Series B",
          "primary": 18,
          "secondary": 3.5
        },
        {
          "key": "C",
          "cn": "C 轮",
          "en": "Series C",
          "primary": 15,
          "secondary": 6.8
        },
        {
          "key": "D+",
          "cn": "D 轮及以后",
          "en": "Series D+",
          "primary": 22,
          "secondary": 15.2
        },
        {
          "key": "—",
          "cn": "未披露",
          "en": "Undisclosed",
          "primary": 22,
          "secondary": 18.6
        }
      ]
    }
  },
  {
    "key": "theme09_page035",
    "themeKey": "theme09",
    "pageNumber": 35,
    "layout": "THEME09-035",
    "slot": "ranking",
    "label": "08 资本排行",
    "bgClass": "bg-deep",
    "controls": [
      {
        "key": "itemCount",
        "prop": "itemCount",
        "label": "条目数量",
        "type": "slider",
        "default": 6,
        "min": 3,
        "max": 8,
        "step": 1,
        "publicKey": "itemCount",
        "publicLabel": "条目数量"
      },
      {
        "key": "sort",
        "prop": "sort",
        "label": "排序方式",
        "type": "radio",
        "default": "降序",
        "options": [
          "降序",
          "升序",
          "原序"
        ],
        "publicKey": "sort",
        "publicLabel": "排序方式"
      },
      {
        "key": "showValue",
        "prop": "showValue",
        "label": "数值显示",
        "type": "toggle",
        "default": true,
        "publicKey": "showValueLabels",
        "publicLabel": "数值显示"
      },
      {
        "key": "showAside",
        "prop": "showAside",
        "label": "装饰文案",
        "type": "toggle",
        "default": true,
        "publicKey": "showAside",
        "publicLabel": "装饰文案"
      },
      {
        "key": "labelType",
        "prop": "labelType",
        "label": "标签类型",
        "type": "labelType",
        "default": "数字",
        "publicKey": "labelType",
        "publicLabel": "标签类型"
      },
      {
        "key": "focus",
        "prop": "focus",
        "label": "重点信息 Focus",
        "type": "focus",
        "default": true,
        "publicKey": "focus",
        "publicLabel": "重点信息 Focus"
      },
      {
        "key": "focusIndex",
        "prop": "focusIndex",
        "label": "焦点序号",
        "type": "slider",
        "default": 0,
        "min": 0,
        "step": 1,
        "publicKey": "focusIndex",
        "publicLabel": "焦点序号"
      }
    ],
    "defaultProps": {
      "itemCount": 6,
      "sort": "降序",
      "focus": true,
      "focusIndex": 0,
      "labelType": "number",
      "showValue": true,
      "showAside": true,
      "unit": "亿美元",
      "badge": "08",
      "items": [
        {
          "name": "OpenAI",
          "en": "Foundation Model",
          "value": 118,
          "meta": "未披露轮",
          "tag": "大模型"
        },
        {
          "name": "xAI",
          "en": "Foundation Model",
          "value": 110,
          "meta": "B 轮",
          "tag": "大模型"
        },
        {
          "name": "Databricks",
          "en": "Data + AI 平台",
          "value": 100,
          "meta": "J 轮",
          "tag": "基础设施"
        },
        {
          "name": "Anthropic",
          "en": "Foundation Model",
          "value": 95,
          "meta": "D 轮+",
          "tag": "大模型"
        },
        {
          "name": "Safe Superintelligence",
          "en": "AGI 研究",
          "value": 50,
          "meta": "种子轮",
          "tag": "大模型"
        },
        {
          "name": "Scale AI",
          "en": "数据基础设施",
          "value": 38,
          "meta": "F 轮",
          "tag": "基础设施"
        },
        {
          "name": "Glean",
          "en": "企业搜索",
          "value": 26,
          "meta": "E 轮",
          "tag": "垂直应用"
        },
        {
          "name": "Harvey",
          "en": "法律 AI",
          "value": 15,
          "meta": "C 轮",
          "tag": "垂直应用"
        }
      ]
    }
  },
  {
    "key": "theme09_page036",
    "themeKey": "theme09",
    "pageNumber": 36,
    "layout": "THEME09-036",
    "slot": "bump",
    "label": "赛道名次",
    "bgClass": "bg-blue",
    "controls": [
      {
        "key": "itemCount",
        "prop": "itemCount",
        "label": "数量",
        "type": "slider",
        "default": 7,
        "min": 4,
        "max": 8,
        "step": 1,
        "desc": "分类数",
        "publicKey": "categoryCount",
        "publicLabel": "数量",
        "description": "分类数"
      },
      {
        "key": "periodCount",
        "prop": "periodCount",
        "label": "列数量",
        "type": "slider",
        "default": 5,
        "min": 3,
        "max": 6,
        "step": 1,
        "desc": "时期数",
        "publicKey": "periodCount",
        "publicLabel": "列数量",
        "description": "时期数"
      },
      {
        "key": "showBadge",
        "prop": "showBadge",
        "label": "名次徽标",
        "type": "toggle",
        "default": true,
        "publicKey": "showBadge",
        "publicLabel": "名次徽标"
      },
      {
        "key": "showAside",
        "prop": "showAside",
        "label": "装饰文案",
        "type": "toggle",
        "default": true,
        "desc": "升降解读",
        "publicKey": "showAside",
        "publicLabel": "装饰文案",
        "description": "升降解读"
      },
      {
        "key": "labelType",
        "prop": "labelType",
        "label": "标签类型",
        "type": "labelType",
        "default": "数字",
        "publicKey": "labelType",
        "publicLabel": "标签类型"
      },
      {
        "key": "focus",
        "prop": "focus",
        "label": "重点信息 Focus",
        "type": "focus",
        "default": true,
        "publicKey": "focus",
        "publicLabel": "重点信息 Focus"
      },
      {
        "key": "focusIndex",
        "prop": "focusIndex",
        "label": "焦点序号",
        "type": "slider",
        "default": 0,
        "min": 0,
        "step": 1,
        "publicKey": "focusIndex",
        "publicLabel": "焦点序号"
      }
    ],
    "defaultProps": {
      "itemCount": 7,
      "periodCount": 5,
      "showBadge": true,
      "focus": true,
      "focusIndex": 0,
      "labelType": "number",
      "showAside": true,
      "head": {
        "no": "08",
        "en": "Bump · Rank Trajectory",
        "cn": "赛道名次 · 多期轨迹"
      },
      "periods": [
        "2020",
        "2021",
        "2022",
        "2023",
        "2024",
        "2025"
      ],
      "series": [
        {
          "label": "大模型",
          "ranks": [
            3,
            2,
            1,
            1,
            1,
            1
          ]
        },
        {
          "label": "算力基建",
          "ranks": [
            5,
            4,
            3,
            2,
            2,
            2
          ]
        },
        {
          "label": "企业应用",
          "ranks": [
            2,
            3,
            4,
            4,
            3,
            3
          ]
        },
        {
          "label": "自动驾驶",
          "ranks": [
            1,
            1,
            2,
            3,
            5,
            6
          ]
        },
        {
          "label": "数据平台",
          "ranks": [
            6,
            5,
            5,
            5,
            4,
            4
          ]
        },
        {
          "label": "医疗 AI",
          "ranks": [
            7,
            7,
            6,
            6,
            6,
            5
          ]
        },
        {
          "label": "机器人",
          "ranks": [
            4,
            6,
            7,
            7,
            7,
            7
          ]
        }
      ]
    }
  },
  {
    "key": "theme09_page037",
    "themeKey": "theme09",
    "pageNumber": 37,
    "layout": "THEME09-037",
    "slot": "tornado",
    "label": "同比对望",
    "bgClass": "bg-blue",
    "controls": [
      {
        "key": "itemCount",
        "prop": "itemCount",
        "label": "行数量",
        "type": "slider",
        "default": 7,
        "min": 3,
        "max": 7,
        "step": 1,
        "publicKey": "itemCount",
        "publicLabel": "行数量"
      },
      {
        "key": "sort",
        "prop": "sort",
        "label": "排序",
        "type": "radio",
        "default": "合计",
        "options": [
          "合计",
          "右值",
          "原序"
        ],
        "publicKey": "sort",
        "publicLabel": "排序"
      },
      {
        "key": "showValue",
        "prop": "showValue",
        "label": "条末读数",
        "type": "toggle",
        "default": true,
        "publicKey": "showValue",
        "publicLabel": "条末读数"
      },
      {
        "key": "showAside",
        "prop": "showAside",
        "label": "装饰文案",
        "type": "toggle",
        "default": true,
        "desc": "读图条",
        "publicKey": "showAside",
        "publicLabel": "装饰文案",
        "description": "读图条"
      },
      {
        "key": "labelType",
        "prop": "labelType",
        "label": "标签类型",
        "type": "labelType",
        "default": "数字",
        "publicKey": "labelType",
        "publicLabel": "标签类型"
      },
      {
        "key": "focus",
        "prop": "focus",
        "label": "重点信息 Focus",
        "type": "focus",
        "default": true,
        "publicKey": "focus",
        "publicLabel": "重点信息 Focus"
      },
      {
        "key": "focusIndex",
        "prop": "focusIndex",
        "label": "焦点序号",
        "type": "slider",
        "default": 0,
        "min": 0,
        "step": 1,
        "publicKey": "focusIndex",
        "publicLabel": "焦点序号"
      }
    ],
    "defaultProps": {
      "itemCount": 7,
      "endLabels": [
        "2023",
        "2024"
      ],
      "sort": "合计",
      "showValue": true,
      "focus": true,
      "focusIndex": 0,
      "labelType": "number",
      "showAside": true,
      "unit": "亿$",
      "head": {
        "no": "08",
        "en": "Tornado · Diverge",
        "cn": "同比对望 · 赛道增势"
      },
      "items": [
        {
          "label": "大模型",
          "sub": "Foundation",
          "left": 210,
          "right": 610
        },
        {
          "label": "算力基建",
          "sub": "Compute",
          "left": 130,
          "right": 370
        },
        {
          "label": "应用层",
          "sub": "Apps",
          "left": 90,
          "right": 190
        },
        {
          "label": "企业服务",
          "sub": "Enterprise",
          "left": 60,
          "right": 120
        },
        {
          "label": "数据 / 安全",
          "sub": "Data",
          "left": 48,
          "right": 96
        },
        {
          "label": "医疗 AI",
          "sub": "Health",
          "left": 42,
          "right": 74
        },
        {
          "label": "机器人",
          "sub": "Robotics",
          "left": 70,
          "right": 55
        }
      ]
    }
  },
  {
    "key": "theme09_page038",
    "themeKey": "theme09",
    "pageNumber": 38,
    "layout": "THEME09-038",
    "slot": "hero",
    "label": "核心数字",
    "bgClass": "bg-blue",
    "controls": [
      {
        "key": "supportCount",
        "prop": "supportCount",
        "label": "数量",
        "type": "slider",
        "default": 3,
        "min": 0,
        "max": 3,
        "step": 1,
        "desc": "底部支撑指标数",
        "publicKey": "supportCount",
        "publicLabel": "数量",
        "description": "底部支撑指标数"
      },
      {
        "key": "accentNumber",
        "prop": "accentNumber",
        "label": "强调主数字",
        "type": "toggle",
        "default": true,
        "desc": "关则金属字",
        "publicKey": "accentNumber",
        "publicLabel": "强调主数字",
        "description": "关则金属字"
      },
      {
        "key": "showGhost",
        "prop": "showGhost",
        "label": "装饰文案",
        "type": "toggle",
        "default": true,
        "desc": "背景巨号幽灵数字",
        "publicKey": "showGhost",
        "publicLabel": "装饰文案",
        "description": "背景巨号幽灵数字"
      },
      {
        "key": "labelType",
        "prop": "labelType",
        "label": "标签类型",
        "type": "labelType",
        "default": "数字",
        "publicKey": "labelType",
        "publicLabel": "标签类型"
      },
      {
        "key": "focus",
        "prop": "focus",
        "label": "重点信息 Focus",
        "type": "focus",
        "default": true,
        "publicKey": "focus",
        "publicLabel": "重点信息 Focus"
      },
      {
        "key": "focusIndex",
        "prop": "focusIndex",
        "label": "焦点序号",
        "type": "slider",
        "default": 0,
        "min": 0,
        "step": 1,
        "publicKey": "focusIndex",
        "publicLabel": "焦点序号"
      }
    ],
    "defaultProps": {
      "value": "970",
      "unit": "亿$",
      "label": "2024 全年 AI 风投总额",
      "statement": "相当于美国全年风险投资的近三分之一 —— 资本以前所未有的密度，押注少数能讲好 AGI 故事的团队。",
      "supportCount": 3,
      "accentNumber": true,
      "showGhost": true,
      "focus": true,
      "focusIndex": 0,
      "labelType": "number",
      "badge": "08",
      "kicker": "HEADLINE FIGURE",
      "supports": [
        {
          "value": "97",
          "unit": "笔",
          "label": "单笔≥1亿美元事件"
        },
        {
          "value": "43.3",
          "unit": "%",
          "label": "大模型赛道占比"
        },
        {
          "value": "63.9",
          "unit": "%",
          "label": "旧金山湾区集中度"
        }
      ]
    }
  },
  {
    "key": "theme09_page039",
    "themeKey": "theme09",
    "pageNumber": 39,
    "layout": "THEME09-039",
    "slot": "bento",
    "label": "影像便当",
    "bgClass": "bg-deep",
    "controls": [
      {
        "key": "imgCount",
        "prop": "imgCount",
        "label": "图片槽数量",
        "type": "slider",
        "default": 5,
        "min": 3,
        "max": 6,
        "step": 1,
        "publicKey": "imgCount",
        "publicLabel": "图片槽数量"
      },
      {
        "key": "showCaption",
        "prop": "showCaption",
        "label": "装饰文案",
        "type": "toggle",
        "default": true,
        "desc": "叠印图说",
        "publicKey": "showCaption",
        "publicLabel": "装饰文案",
        "description": "叠印图说"
      },
      {
        "key": "labelType",
        "prop": "labelType",
        "label": "标签类型",
        "type": "labelType",
        "default": "数字",
        "publicKey": "labelType",
        "publicLabel": "标签类型"
      },
      {
        "key": "focus",
        "prop": "focus",
        "label": "重点信息 Focus",
        "type": "focus",
        "default": true,
        "publicKey": "focus",
        "publicLabel": "重点信息 Focus"
      },
      {
        "key": "focusIndex",
        "prop": "focusIndex",
        "label": "焦点序号",
        "type": "slider",
        "default": 0,
        "min": 0,
        "step": 1,
        "publicKey": "focusIndex",
        "publicLabel": "焦点序号"
      }
    ],
    "defaultProps": {
      "imgCount": 5,
      "showCaption": true,
      "focus": true,
      "focusIndex": 0,
      "labelType": "number",
      "head": {
        "no": "05",
        "en": "Bento · Visual Grid",
        "cn": "影像便当 · 版图拼贴"
      },
      "items": [
        {
          "label": "总部园区",
          "sub": "HQ campus"
        },
        {
          "label": "核心团队",
          "sub": "core team"
        },
        {
          "label": "产品界面",
          "sub": "product UI"
        },
        {
          "label": "算力机房",
          "sub": "compute"
        },
        {
          "label": "融资现场",
          "sub": "deal room"
        },
        {
          "label": "路演现场",
          "sub": "demo day"
        }
      ]
    }
  },
  {
    "key": "theme09_page040",
    "themeKey": "theme09",
    "pageNumber": 40,
    "layout": "THEME09-040",
    "slot": "matrix",
    "label": "08 估值矩阵",
    "bgClass": "bg-blue",
    "controls": [
      {
        "key": "rowCount",
        "prop": "rowCount",
        "label": "行数量",
        "type": "slider",
        "default": 6,
        "min": 2,
        "max": 6,
        "step": 1,
        "publicKey": "rowCount",
        "publicLabel": "行数量"
      },
      {
        "key": "colCount",
        "prop": "colCount",
        "label": "列数量",
        "type": "slider",
        "default": 5,
        "min": 2,
        "max": 6,
        "step": 1,
        "publicKey": "colCount",
        "publicLabel": "列数量"
      },
      {
        "key": "heat",
        "prop": "heat",
        "label": "热力着色",
        "type": "toggle",
        "default": true,
        "publicKey": "heat",
        "publicLabel": "热力着色"
      },
      {
        "key": "highlightCol",
        "prop": "highlightCol",
        "label": "高亮列 (-1 关闭)",
        "type": "slider",
        "default": 0,
        "min": -1,
        "step": 1,
        "publicKey": "highlightCol",
        "publicLabel": "高亮列 (-1 关闭)"
      },
      {
        "key": "showAside",
        "prop": "showAside",
        "label": "装饰文案",
        "type": "toggle",
        "default": true,
        "publicKey": "showAside",
        "publicLabel": "装饰文案"
      },
      {
        "key": "labelType",
        "prop": "labelType",
        "label": "标签类型",
        "type": "labelType",
        "default": "数字",
        "publicKey": "labelType",
        "publicLabel": "标签类型"
      },
      {
        "key": "focus",
        "prop": "focus",
        "label": "重点信息 Focus",
        "type": "focus",
        "default": true,
        "publicKey": "focus",
        "publicLabel": "重点信息 Focus"
      },
      {
        "key": "focusIndex",
        "prop": "focusIndex",
        "label": "焦点序号",
        "type": "slider",
        "default": 0,
        "min": 0,
        "step": 1,
        "publicKey": "focusIndex",
        "publicLabel": "焦点序号"
      }
    ],
    "defaultProps": {
      "rowCount": 6,
      "colCount": 5,
      "focus": true,
      "focusIndex": 0,
      "highlightCol": 0,
      "heat": true,
      "labelType": "number",
      "showAside": true,
      "badge": "08",
      "columns": [
        {
          "key": "value",
          "label": "融资额",
          "unit": "亿$",
          "heatKey": true
        },
        {
          "key": "valuation",
          "label": "投后估值",
          "unit": "亿$"
        },
        {
          "key": "round",
          "label": "最新轮次"
        },
        {
          "key": "seg",
          "label": "赛道"
        },
        {
          "key": "ps",
          "label": "P/S 倍数"
        },
        {
          "key": "geo",
          "label": "总部"
        }
      ],
      "rows": [
        {
          "name": "OpenAI",
          "en": "Foundation",
          "value": 118,
          "valuation": 1570,
          "round": "未披露",
          "seg": "大模型",
          "ps": "40×",
          "geo": "旧金山",
          "heat": 1
        },
        {
          "name": "Anthropic",
          "en": "Foundation",
          "value": 95,
          "valuation": 600,
          "round": "D 轮+",
          "seg": "大模型",
          "ps": "35×",
          "geo": "旧金山",
          "heat": 0.78
        },
        {
          "name": "xAI",
          "en": "Foundation",
          "value": 110,
          "valuation": 500,
          "round": "B 轮",
          "seg": "大模型",
          "ps": "—",
          "geo": "湾区",
          "heat": 0.86
        },
        {
          "name": "Databricks",
          "en": "Data + AI",
          "value": 100,
          "valuation": 620,
          "round": "J 轮",
          "seg": "基础设施",
          "ps": "28×",
          "geo": "旧金山",
          "heat": 0.72
        },
        {
          "name": "Scale AI",
          "en": "Data Infra",
          "value": 38,
          "valuation": 138,
          "round": "F 轮",
          "seg": "基础设施",
          "ps": "22×",
          "geo": "旧金山",
          "heat": 0.48
        },
        {
          "name": "Glean",
          "en": "Search",
          "value": 26,
          "valuation": 46,
          "round": "E 轮",
          "seg": "垂直应用",
          "ps": "18×",
          "geo": "帕洛阿尔托",
          "heat": 0.36
        }
      ]
    }
  },
  {
    "key": "theme09_page041",
    "themeKey": "theme09",
    "pageNumber": 41,
    "layout": "THEME09-041",
    "slot": "versus",
    "label": "数字对决",
    "bgClass": "bg-deep",
    "controls": [
      {
        "key": "pivot",
        "prop": "pivot",
        "label": "中枢符",
        "type": "radio",
        "default": "VS",
        "options": [
          "VS",
          "÷",
          "→",
          "/"
        ],
        "publicKey": "pivot",
        "publicLabel": "中枢符"
      },
      {
        "key": "showBar",
        "prop": "showBar",
        "label": "对比条",
        "type": "toggle",
        "default": true,
        "publicKey": "showBar",
        "publicLabel": "对比条"
      },
      {
        "key": "showNote",
        "prop": "showNote",
        "label": "装饰文案",
        "type": "toggle",
        "default": true,
        "desc": "底部结论",
        "publicKey": "showNote",
        "publicLabel": "装饰文案",
        "description": "底部结论"
      },
      {
        "key": "focus",
        "prop": "focus",
        "label": "重点信息 Focus",
        "type": "focus",
        "default": true,
        "publicKey": "focus",
        "publicLabel": "重点信息 Focus"
      },
      {
        "key": "focusIndex",
        "prop": "focusIndex",
        "label": "焦点序号",
        "type": "slider",
        "default": 0,
        "min": 0,
        "max": 1,
        "step": 1,
        "publicKey": "focusIndex",
        "publicLabel": "焦点序号"
      }
    ],
    "defaultProps": {
      "pivot": "VS",
      "showBar": true,
      "showNote": true,
      "note": "近三分之一的美国风险投资流向 AI —— 资本天平正以肉眼可见的速度向少数赢家倾斜。",
      "focus": true,
      "focusIndex": 0,
      "badge": "09",
      "kicker": "HEAD TO HEAD",
      "left": {
        "value": "970",
        "unit": "亿$",
        "label": "2024 AI 风投",
        "desc": "全年流入 AI 的风险资本",
        "bar": 32,
        "color": null
      },
      "right": {
        "value": "1/3",
        "unit": "",
        "label": "占全美 VC",
        "desc": "AI 吸纳的美国风投份额",
        "bar": 33,
        "color": null
      }
    }
  },
  {
    "key": "theme09_page042",
    "themeKey": "theme09",
    "pageNumber": 42,
    "layout": "THEME09-042",
    "slot": "typeriver",
    "label": "标语字阵",
    "bgClass": "bg-blue",
    "controls": [
      {
        "key": "wordCount",
        "prop": "wordCount",
        "label": "数量",
        "type": "slider",
        "default": 5,
        "min": 3,
        "max": 6,
        "step": 1,
        "publicKey": "wordCount",
        "publicLabel": "数量"
      },
      {
        "key": "align",
        "prop": "align",
        "label": "对齐",
        "type": "radio",
        "default": "居左",
        "options": [
          "居左",
          "居中"
        ],
        "publicKey": "align",
        "publicLabel": "对齐"
      },
      {
        "key": "showAxis",
        "prop": "showAxis",
        "label": "装饰文案",
        "type": "toggle",
        "default": true,
        "desc": "左侧竖轴",
        "publicKey": "showAxis",
        "publicLabel": "装饰文案",
        "description": "左侧竖轴"
      },
      {
        "key": "showLead",
        "prop": "showLead",
        "label": "导语小标",
        "type": "toggle",
        "default": true,
        "publicKey": "showLead",
        "publicLabel": "导语小标"
      },
      {
        "key": "focus",
        "prop": "focus",
        "label": "重点信息 Focus",
        "type": "focus",
        "default": true,
        "publicKey": "focus",
        "publicLabel": "重点信息 Focus"
      },
      {
        "key": "focusIndex",
        "prop": "focusIndex",
        "label": "焦点序号",
        "type": "slider",
        "default": 1,
        "min": 0,
        "step": 1,
        "publicKey": "focusIndex",
        "publicLabel": "焦点序号"
      }
    ],
    "defaultProps": {
      "wordCount": 5,
      "align": "居左",
      "focusIndex": 1,
      "showAxis": true,
      "showLead": true,
      "focus": true,
      "lead": {
        "tag": "KEYWORDS · 2024",
        "text": "如果只用几个词，\n概括这一年的 AI 资本——"
      },
      "words": [
        {
          "text": "集中",
          "en": "CONCENTRATION"
        },
        {
          "text": "分化",
          "en": "DIVERGENCE"
        },
        {
          "text": "押注",
          "en": "BIG BETS"
        },
        {
          "text": "兑现",
          "en": "DELIVERY"
        },
        {
          "text": "退潮",
          "en": "EBB TIDE"
        },
        {
          "text": "重估",
          "en": "REPRICING"
        }
      ]
    }
  },
  {
    "key": "theme09_page043",
    "themeKey": "theme09",
    "pageNumber": 43,
    "layout": "THEME09-043",
    "slot": "timeline",
    "label": "08 年度大事记",
    "bgClass": "bg-deep",
    "controls": [
      {
        "key": "itemCount",
        "prop": "itemCount",
        "label": "数量",
        "type": "slider",
        "default": 6,
        "min": 3,
        "max": 8,
        "step": 1,
        "desc": "节点数",
        "publicKey": "itemCount",
        "publicLabel": "数量",
        "description": "节点数"
      },
      {
        "key": "orientation",
        "prop": "orientation",
        "label": "方向",
        "type": "radio",
        "default": "横向",
        "options": [
          "横向",
          "纵向"
        ],
        "publicKey": "orientation",
        "publicLabel": "方向"
      },
      {
        "key": "imgCount",
        "prop": "imgCount",
        "label": "图片槽数量",
        "type": "slider",
        "default": 0,
        "min": 0,
        "max": 4,
        "step": 1,
        "publicKey": "imgCount",
        "publicLabel": "图片槽数量"
      },
      {
        "key": "showAside",
        "prop": "showAside",
        "label": "装饰文案",
        "type": "toggle",
        "default": true,
        "publicKey": "showAside",
        "publicLabel": "装饰文案"
      },
      {
        "key": "labelType",
        "prop": "labelType",
        "label": "标签类型",
        "type": "labelType",
        "default": "数字",
        "publicKey": "labelType",
        "publicLabel": "标签类型"
      },
      {
        "key": "focus",
        "prop": "focus",
        "label": "重点信息 Focus",
        "type": "focus",
        "default": true,
        "publicKey": "focus",
        "publicLabel": "重点信息 Focus"
      },
      {
        "key": "focusIndex",
        "prop": "focusIndex",
        "label": "焦点序号",
        "type": "slider",
        "default": 4,
        "min": 0,
        "step": 1,
        "publicKey": "focusIndex",
        "publicLabel": "焦点序号"
      }
    ],
    "defaultProps": {
      "itemCount": 6,
      "orientation": "横向",
      "focus": true,
      "focusIndex": 4,
      "labelType": "number",
      "imgCount": 0,
      "showAside": true,
      "badge": "08",
      "events": [
        {
          "mark": "02",
          "date": "2024 · 02",
          "name": "OpenAI",
          "text": "二级市场要约收购，估值升至约 860 亿美元",
          "tag": "大模型"
        },
        {
          "mark": "05",
          "date": "2024 · 05",
          "name": "xAI",
          "text": "B 轮募资 60 亿美元，投后估值 240 亿",
          "tag": "大模型"
        },
        {
          "mark": "06",
          "date": "2024 · 06",
          "name": "Anthropic",
          "text": "获亚马逊追加战略投资，加码 Claude 训练",
          "tag": "大模型"
        },
        {
          "mark": "09",
          "date": "2024 · 09",
          "name": "Databricks",
          "text": "J 轮融资约 100 亿美元，估值冲上 620 亿",
          "tag": "基础设施"
        },
        {
          "mark": "10",
          "date": "2024 · 10",
          "name": "OpenAI",
          "text": "新一轮 66 亿美元落定，估值跃至 1570 亿",
          "tag": "大模型"
        },
        {
          "mark": "11",
          "date": "2024 · 11",
          "name": "xAI",
          "text": "追加募资推进，年内估值再度翻倍",
          "tag": "大模型"
        },
        {
          "mark": "12",
          "date": "2024 · 12",
          "name": "Safe SI",
          "text": "种子轮即募 10 亿美元，AGI 叙事白热化",
          "tag": "大模型"
        },
        {
          "mark": "12",
          "date": "2024 · 12",
          "name": "Glean",
          "text": "E 轮 2.6 亿美元，企业搜索估值破 46 亿",
          "tag": "垂直应用"
        }
      ]
    }
  },
  {
    "key": "theme09_page044",
    "themeKey": "theme09",
    "pageNumber": 44,
    "layout": "THEME09-044",
    "slot": "spiral",
    "label": "螺旋纪程",
    "bgClass": "bg-blue",
    "controls": [
      {
        "key": "itemCount",
        "prop": "itemCount",
        "label": "数量",
        "type": "slider",
        "default": 7,
        "min": 4,
        "max": 8,
        "step": 1,
        "desc": "节点数",
        "publicKey": "itemCount",
        "publicLabel": "数量",
        "description": "节点数"
      },
      {
        "key": "showSpine",
        "prop": "showSpine",
        "label": "装饰文案",
        "type": "toggle",
        "default": true,
        "desc": "螺线轨迹",
        "publicKey": "showSpine",
        "publicLabel": "装饰文案",
        "description": "螺线轨迹"
      },
      {
        "key": "showValue",
        "prop": "showValue",
        "label": "节点说明",
        "type": "toggle",
        "default": true,
        "publicKey": "showValue",
        "publicLabel": "节点说明"
      },
      {
        "key": "showAside",
        "prop": "showAside",
        "label": "枢轴文案",
        "type": "toggle",
        "default": true,
        "publicKey": "showAside",
        "publicLabel": "枢轴文案"
      },
      {
        "key": "labelType",
        "prop": "labelType",
        "label": "标签类型",
        "type": "labelType",
        "default": "数字",
        "publicKey": "labelType",
        "publicLabel": "标签类型"
      },
      {
        "key": "focus",
        "prop": "focus",
        "label": "重点信息 Focus",
        "type": "focus",
        "default": true,
        "publicKey": "focus",
        "publicLabel": "重点信息 Focus"
      },
      {
        "key": "focusIndex",
        "prop": "focusIndex",
        "label": "焦点序号",
        "type": "slider",
        "default": 0,
        "min": 0,
        "step": 1,
        "publicKey": "focusIndex",
        "publicLabel": "焦点序号"
      }
    ],
    "defaultProps": {
      "itemCount": 7,
      "showSpine": true,
      "showValue": true,
      "focus": true,
      "focusIndex": 0,
      "labelType": "number",
      "showAside": true,
      "hubText": {
        "big": "2024",
        "sub": "资本纪程"
      },
      "head": {
        "no": "08",
        "en": "Spiral · Timeline",
        "cn": "螺旋纪程 · 盘旋递进"
      },
      "events": [
        {
          "date": "02",
          "title": "要约收购",
          "text": "OpenAI 早期股东要约 · ≈860 亿$",
          "tone": "blue"
        },
        {
          "date": "05",
          "title": "xAI B 轮",
          "text": "募资 60 亿$ · 投后 240 亿$",
          "tone": "acc"
        },
        {
          "date": "06",
          "title": "战略加注",
          "text": "Anthropic 获亚马逊追加投资",
          "tone": "violet"
        },
        {
          "date": "09",
          "title": "Databricks",
          "text": "J 轮 ≈100 亿$ · 估值 620 亿$",
          "tone": "acc"
        },
        {
          "date": "10",
          "title": "OpenAI 新轮",
          "text": "66 亿$ · 估值跃至 1570 亿$",
          "tone": "blue"
        },
        {
          "date": "12",
          "title": "Safe SI",
          "text": "种子轮即募 10 亿$",
          "tone": "warn"
        },
        {
          "date": "年末",
          "title": "结构跃迁",
          "text": "全年 ≥1 亿$ 事件 97 笔",
          "tone": "acc"
        },
        {
          "date": "展望",
          "title": "2025 续力",
          "text": "资本向头部进一步收敛",
          "tone": "violet"
        }
      ]
    }
  },
  {
    "key": "theme09_page045",
    "themeKey": "theme09",
    "pageNumber": 45,
    "layout": "THEME09-045",
    "slot": "quadrant",
    "label": "09 定位矩阵",
    "bgClass": "bg-blue",
    "controls": [
      {
        "key": "itemCount",
        "prop": "itemCount",
        "label": "数量",
        "type": "slider",
        "default": 8,
        "min": 3,
        "max": 8,
        "step": 1,
        "publicKey": "itemCount",
        "publicLabel": "数量"
      },
      {
        "key": "showZones",
        "prop": "showZones",
        "label": "区域底色",
        "type": "toggle",
        "default": true,
        "publicKey": "showZones",
        "publicLabel": "区域底色"
      },
      {
        "key": "showAside",
        "prop": "showAside",
        "label": "装饰文案",
        "type": "toggle",
        "default": true,
        "publicKey": "showAside",
        "publicLabel": "装饰文案"
      },
      {
        "key": "labelType",
        "prop": "labelType",
        "label": "标签类型",
        "type": "labelType",
        "default": "数字",
        "publicKey": "labelType",
        "publicLabel": "标签类型"
      },
      {
        "key": "focus",
        "prop": "focus",
        "label": "重点信息 Focus",
        "type": "focus",
        "default": true,
        "publicKey": "focus",
        "publicLabel": "重点信息 Focus"
      },
      {
        "key": "focusIndex",
        "prop": "focusIndex",
        "label": "焦点序号",
        "type": "slider",
        "default": 0,
        "min": 0,
        "step": 1,
        "publicKey": "focusIndex",
        "publicLabel": "焦点序号"
      }
    ],
    "defaultProps": {
      "itemCount": 8,
      "focus": true,
      "focusIndex": 0,
      "labelType": "number",
      "showZones": true,
      "axis": {
        "x": [
          "商业化成熟度 低",
          "高"
        ],
        "y": [
          "估值水平 低",
          "高"
        ]
      },
      "zones": [
        "早期种子",
        "价值洼地",
        "叙事驱动",
        "双高龙头"
      ],
      "showAside": true,
      "badge": "09",
      "points": [
        {
          "name": "OpenAI",
          "x": 86,
          "y": 97,
          "size": 1,
          "tag": "大模型"
        },
        {
          "name": "Databricks",
          "x": 90,
          "y": 82,
          "size": 0.9,
          "tag": "基础设施"
        },
        {
          "name": "Anthropic",
          "x": 68,
          "y": 80,
          "size": 0.85,
          "tag": "大模型"
        },
        {
          "name": "xAI",
          "x": 54,
          "y": 74,
          "size": 0.8,
          "tag": "大模型"
        },
        {
          "name": "Safe SI",
          "x": 18,
          "y": 68,
          "size": 0.6,
          "tag": "大模型"
        },
        {
          "name": "Scale AI",
          "x": 80,
          "y": 52,
          "size": 0.6,
          "tag": "基础设施"
        },
        {
          "name": "Glean",
          "x": 86,
          "y": 38,
          "size": 0.5,
          "tag": "垂直应用"
        },
        {
          "name": "Harvey",
          "x": 80,
          "y": 28,
          "size": 0.45,
          "tag": "垂直应用"
        }
      ]
    }
  },
  {
    "key": "theme09_page046",
    "themeKey": "theme09",
    "pageNumber": 46,
    "layout": "THEME09-046",
    "slot": "bubble",
    "label": "体量聚类",
    "bgClass": "bg-deep",
    "controls": [
      {
        "key": "itemCount",
        "prop": "itemCount",
        "label": "数量",
        "type": "slider",
        "default": 8,
        "min": 4,
        "max": 8,
        "step": 1,
        "desc": "气泡数",
        "publicKey": "itemCount",
        "publicLabel": "数量",
        "description": "气泡数"
      },
      {
        "key": "sort",
        "prop": "sort",
        "label": "排序",
        "type": "radio",
        "default": "降序",
        "options": [
          "降序",
          "原序"
        ],
        "publicKey": "sort",
        "publicLabel": "排序"
      },
      {
        "key": "showValue",
        "prop": "showValue",
        "label": "泡内数值",
        "type": "toggle",
        "default": true,
        "publicKey": "showValueLabels",
        "publicLabel": "泡内数值"
      },
      {
        "key": "showAside",
        "prop": "showAside",
        "label": "装饰文案",
        "type": "toggle",
        "default": true,
        "desc": "读图条",
        "publicKey": "showAside",
        "publicLabel": "装饰文案",
        "description": "读图条"
      },
      {
        "key": "labelType",
        "prop": "labelType",
        "label": "标签类型",
        "type": "labelType",
        "default": "数字",
        "publicKey": "labelType",
        "publicLabel": "标签类型"
      },
      {
        "key": "focus",
        "prop": "focus",
        "label": "重点信息 Focus",
        "type": "focus",
        "default": true,
        "publicKey": "focus",
        "publicLabel": "重点信息 Focus"
      },
      {
        "key": "focusIndex",
        "prop": "focusIndex",
        "label": "焦点序号",
        "type": "slider",
        "default": 0,
        "min": 0,
        "step": 1,
        "publicKey": "focusIndex",
        "publicLabel": "焦点序号"
      }
    ],
    "defaultProps": {
      "itemCount": 8,
      "sort": "降序",
      "showValue": true,
      "focus": true,
      "focusIndex": 0,
      "labelType": "number",
      "showAside": true,
      "unit": "亿$",
      "head": {
        "no": "09",
        "en": "Bubble · Pack",
        "cn": "体量聚类 · 资本抱团"
      },
      "items": [
        {
          "label": "OpenAI",
          "sub": "Foundation",
          "value": 157,
          "tone": "acc"
        },
        {
          "label": "Databricks",
          "sub": "Data/AI",
          "value": 62,
          "tone": "blue"
        },
        {
          "label": "xAI",
          "sub": "Foundation",
          "value": 50,
          "tone": "violet"
        },
        {
          "label": "Anthropic",
          "sub": "Foundation",
          "value": 40,
          "tone": "acc"
        },
        {
          "label": "Anysphere",
          "sub": "Dev Tools",
          "value": 25,
          "tone": "blue"
        },
        {
          "label": "Scale AI",
          "sub": "Data",
          "value": 14,
          "tone": "warn"
        },
        {
          "label": "Glean",
          "sub": "Enterprise",
          "value": 9,
          "tone": "blue"
        },
        {
          "label": "Safe SI",
          "sub": "Safety",
          "value": 10,
          "tone": "violet"
        }
      ]
    }
  },
  {
    "key": "theme09_page047",
    "themeKey": "theme09",
    "pageNumber": 47,
    "layout": "THEME09-047",
    "slot": "funnel",
    "label": "09 资本漏斗",
    "bgClass": "bg-deep",
    "controls": [
      {
        "key": "itemCount",
        "prop": "itemCount",
        "label": "数量",
        "type": "slider",
        "default": 5,
        "min": 3,
        "max": 6,
        "step": 1,
        "desc": "漏斗层数",
        "publicKey": "itemCount",
        "publicLabel": "数量",
        "description": "漏斗层数"
      },
      {
        "key": "orientation",
        "prop": "orientation",
        "label": "方向",
        "type": "radio",
        "default": "纵向",
        "options": [
          "纵向",
          "横向"
        ],
        "publicKey": "orientation",
        "publicLabel": "方向"
      },
      {
        "key": "showRate",
        "prop": "showRate",
        "label": "转化率",
        "type": "toggle",
        "default": true,
        "publicKey": "showRate",
        "publicLabel": "转化率"
      },
      {
        "key": "showAside",
        "prop": "showAside",
        "label": "装饰文案",
        "type": "toggle",
        "default": true,
        "publicKey": "showAside",
        "publicLabel": "装饰文案"
      },
      {
        "key": "labelType",
        "prop": "labelType",
        "label": "标签类型",
        "type": "labelType",
        "default": "数字",
        "publicKey": "labelType",
        "publicLabel": "标签类型"
      },
      {
        "key": "focus",
        "prop": "focus",
        "label": "重点信息 Focus",
        "type": "focus",
        "default": true,
        "publicKey": "focus",
        "publicLabel": "重点信息 Focus"
      },
      {
        "key": "focusIndex",
        "prop": "focusIndex",
        "label": "焦点序号",
        "type": "slider",
        "default": 3,
        "min": 0,
        "step": 1,
        "publicKey": "focusIndex",
        "publicLabel": "焦点序号"
      }
    ],
    "defaultProps": {
      "itemCount": 5,
      "orientation": "纵向",
      "focus": true,
      "focusIndex": 3,
      "labelType": "number",
      "showRate": true,
      "showAside": true,
      "badge": "09",
      "stages": [
        {
          "label": "候选标的",
          "en": "Pipeline",
          "value": 1200,
          "note": "年内进入观察池的 AI 公司"
        },
        {
          "label": "立项跟进",
          "en": "Sourced",
          "value": 360,
          "note": "通过初筛、建立接触"
        },
        {
          "label": "尽职调查",
          "en": "Due Dilig.",
          "value": 120,
          "note": "进入实质性尽调阶段"
        },
        {
          "label": "投资决策",
          "en": "Committed",
          "value": 48,
          "note": "过投决会、签署条款"
        },
        {
          "label": "大额落地",
          "en": "Mega Deal",
          "value": 22,
          "note": "单笔 ≥1 亿美元成交"
        }
      ]
    }
  },
  {
    "key": "theme09_page048",
    "themeKey": "theme09",
    "pageNumber": 48,
    "layout": "THEME09-048",
    "slot": "marimekko",
    "label": "市占矩形",
    "bgClass": "bg-blue",
    "controls": [
      {
        "key": "catCount",
        "prop": "catCount",
        "label": "列数量",
        "type": "slider",
        "default": 5,
        "min": 3,
        "max": 6,
        "step": 1,
        "publicKey": "catCount",
        "publicLabel": "列数量"
      },
      {
        "key": "segCount",
        "prop": "segCount",
        "label": "分段数量",
        "type": "slider",
        "default": 4,
        "min": 2,
        "max": 5,
        "step": 1,
        "publicKey": "segCount",
        "publicLabel": "分段数量"
      },
      {
        "key": "showSegPct",
        "prop": "showSegPct",
        "label": "段内占比",
        "type": "toggle",
        "default": true,
        "publicKey": "showSegPct",
        "publicLabel": "段内占比"
      },
      {
        "key": "showAside",
        "prop": "showAside",
        "label": "装饰文案",
        "type": "toggle",
        "default": true,
        "desc": "读图条",
        "publicKey": "showAside",
        "publicLabel": "装饰文案",
        "description": "读图条"
      },
      {
        "key": "labelType",
        "prop": "labelType",
        "label": "标签类型",
        "type": "labelType",
        "default": "数字",
        "publicKey": "labelType",
        "publicLabel": "标签类型"
      },
      {
        "key": "focus",
        "prop": "focus",
        "label": "重点信息 Focus",
        "type": "focus",
        "default": true,
        "publicKey": "focus",
        "publicLabel": "重点信息 Focus"
      },
      {
        "key": "focusIndex",
        "prop": "focusIndex",
        "label": "焦点序号",
        "type": "slider",
        "default": 0,
        "min": 0,
        "step": 1,
        "publicKey": "focusIndex",
        "publicLabel": "焦点序号"
      }
    ],
    "defaultProps": {
      "catCount": 5,
      "segCount": 4,
      "showSegPct": true,
      "focus": true,
      "focusIndex": 0,
      "labelType": "number",
      "showAside": true,
      "unit": "亿$",
      "head": {
        "no": "08",
        "en": "Marimekko · Share × Mix",
        "cn": "市占矩形 · 规模 × 构成"
      },
      "segs": [
        "种子 / A 轮",
        "B / C 轮",
        "成长期",
        "后期 / Pre-IPO",
        "战略 / 并购"
      ],
      "cats": [
        {
          "label": "大模型",
          "vals": [
            60,
            120,
            200,
            230,
            90
          ]
        },
        {
          "label": "算力基建",
          "vals": [
            30,
            70,
            130,
            140,
            60
          ]
        },
        {
          "label": "应用层",
          "vals": [
            55,
            60,
            50,
            25,
            18
          ]
        },
        {
          "label": "企业服务",
          "vals": [
            35,
            45,
            38,
            22,
            14
          ]
        },
        {
          "label": "其它赛道",
          "vals": [
            40,
            30,
            28,
            20,
            12
          ]
        },
        {
          "label": "机器人",
          "vals": [
            28,
            34,
            30,
            16,
            10
          ]
        }
      ]
    }
  },
  {
    "key": "theme09_page049",
    "themeKey": "theme09",
    "pageNumber": 49,
    "layout": "THEME09-049",
    "slot": "meter",
    "label": "计量条",
    "bgClass": "bg-deep",
    "controls": [
      {
        "key": "itemCount",
        "prop": "itemCount",
        "label": "数量",
        "type": "slider",
        "default": 4,
        "min": 2,
        "max": 6,
        "step": 1,
        "publicKey": "itemCount",
        "publicLabel": "数量"
      },
      {
        "key": "showTarget",
        "prop": "showTarget",
        "label": "装饰文案",
        "type": "toggle",
        "default": true,
        "desc": "目标刻度线",
        "publicKey": "showTarget",
        "publicLabel": "装饰文案",
        "description": "目标刻度线"
      },
      {
        "key": "showValue",
        "prop": "showValue",
        "label": "末端读数",
        "type": "toggle",
        "default": true,
        "publicKey": "showValue",
        "publicLabel": "末端读数"
      },
      {
        "key": "labelType",
        "prop": "labelType",
        "label": "标签类型",
        "type": "labelType",
        "default": "数字",
        "publicKey": "labelType",
        "publicLabel": "标签类型"
      },
      {
        "key": "focus",
        "prop": "focus",
        "label": "重点信息 Focus",
        "type": "focus",
        "default": true,
        "publicKey": "focus",
        "publicLabel": "重点信息 Focus"
      },
      {
        "key": "focusIndex",
        "prop": "focusIndex",
        "label": "焦点序号",
        "type": "slider",
        "default": 0,
        "min": 0,
        "step": 1,
        "publicKey": "focusIndex",
        "publicLabel": "焦点序号"
      }
    ],
    "defaultProps": {
      "itemCount": 4,
      "showTarget": true,
      "showValue": true,
      "focus": true,
      "focusIndex": 0,
      "labelType": "number",
      "head": {
        "no": "计量",
        "en": "Key Gauges",
        "cn": "四项关键指标的达成度"
      },
      "items": [
        {
          "label": "大模型赛道资金占比",
          "value": 43.3,
          "target": 35,
          "unit": "%",
          "tone": "up"
        },
        {
          "label": "旧金山湾区地理集中度",
          "value": 63.9,
          "target": 55,
          "unit": "%",
          "tone": "up"
        },
        {
          "label": "≥1 亿美元事件占比",
          "value": 78,
          "target": 60,
          "unit": "%",
          "tone": "up"
        },
        {
          "label": "头部估值 / 收入倍数（归一）",
          "value": 88,
          "target": 50,
          "unit": "",
          "tone": "warn"
        },
        {
          "label": "应用层有效 PMF 比例",
          "value": 34,
          "target": 50,
          "unit": "%",
          "tone": "down"
        },
        {
          "label": "早期项目存活率（归一）",
          "value": 46,
          "target": 60,
          "unit": "%",
          "tone": "down"
        }
      ]
    }
  },
  {
    "key": "theme09_page050",
    "themeKey": "theme09",
    "pageNumber": 50,
    "layout": "THEME09-050",
    "slot": "stat",
    "label": "09 关键指标",
    "bgClass": "bg-blue",
    "controls": [
      {
        "key": "itemCount",
        "prop": "itemCount",
        "label": "数量",
        "type": "slider",
        "default": 6,
        "min": 2,
        "max": 6,
        "step": 1,
        "publicKey": "itemCount",
        "publicLabel": "数量"
      },
      {
        "key": "columns",
        "prop": "columns",
        "label": "每行数量",
        "type": "slider",
        "default": 3,
        "min": 2,
        "max": 3,
        "step": 1,
        "publicKey": "columns",
        "publicLabel": "每行数量"
      },
      {
        "key": "miniChart",
        "prop": "miniChart",
        "label": "迷你图",
        "type": "radio",
        "default": "迷你柱",
        "options": [
          "无",
          "迷你环",
          "迷你柱",
          "迷你线"
        ],
        "publicKey": "miniChart",
        "publicLabel": "迷你图"
      },
      {
        "key": "showAside",
        "prop": "showAside",
        "label": "装饰文案",
        "type": "toggle",
        "default": true,
        "publicKey": "showAside",
        "publicLabel": "装饰文案"
      },
      {
        "key": "labelType",
        "prop": "labelType",
        "label": "标签类型",
        "type": "labelType",
        "default": "数字",
        "publicKey": "labelType",
        "publicLabel": "标签类型"
      },
      {
        "key": "focus",
        "prop": "focus",
        "label": "重点信息 Focus",
        "type": "focus",
        "default": true,
        "publicKey": "focus",
        "publicLabel": "重点信息 Focus"
      },
      {
        "key": "focusIndex",
        "prop": "focusIndex",
        "label": "焦点序号",
        "type": "slider",
        "default": 0,
        "min": 0,
        "step": 1,
        "publicKey": "focusIndex",
        "publicLabel": "焦点序号"
      }
    ],
    "defaultProps": {
      "itemCount": 6,
      "columns": 3,
      "miniChart": "迷你柱",
      "focus": true,
      "focusIndex": 0,
      "labelType": "number",
      "showAside": true,
      "badge": "09",
      "stats": [
        {
          "value": "970",
          "unit": "亿$",
          "label": "全年融资总额",
          "en": "Total Funding",
          "pct": 100,
          "spark": [
            162,
            284,
            318,
            206
          ],
          "delta": "历史新高"
        },
        {
          "value": "97",
          "unit": "笔",
          "label": "大额事件数",
          "en": "Mega Rounds",
          "pct": 62,
          "spark": [
            18,
            26,
            31,
            22
          ],
          "delta": "≥1 亿美元"
        },
        {
          "value": "10.0",
          "unit": "亿$",
          "label": "平均单笔",
          "en": "Avg Ticket",
          "pct": 48,
          "spark": [
            1.2,
            1.8,
            3.5,
            6.8,
            15.2
          ],
          "delta": "轮次越后越大"
        },
        {
          "value": "43.3",
          "unit": "%",
          "label": "大模型占比",
          "en": "Foundation",
          "pct": 43,
          "spark": [
            420,
            245,
            158,
            97,
            50
          ],
          "delta": "近半壁江山"
        },
        {
          "value": "63.9",
          "unit": "%",
          "label": "湾区集中度",
          "en": "Bay Area",
          "pct": 64,
          "spark": [
            64,
            18,
            10,
            8
          ],
          "delta": "地理高度集中"
        },
        {
          "value": "1570",
          "unit": "亿$",
          "label": "最高单体估值",
          "en": "Top Valuation",
          "pct": 88,
          "spark": [
            860,
            1000,
            1570
          ],
          "delta": "OpenAI 年末"
        }
      ]
    }
  },
  {
    "key": "theme09_page051",
    "themeKey": "theme09",
    "pageNumber": 51,
    "layout": "THEME09-051",
    "slot": "crosstab",
    "label": "交叉透视",
    "bgClass": "bg-deep",
    "controls": [
      {
        "key": "rowCount",
        "prop": "rowCount",
        "label": "行数量",
        "type": "slider",
        "default": 6,
        "min": 2,
        "max": 6,
        "step": 1,
        "publicKey": "rowCount",
        "publicLabel": "行数量"
      },
      {
        "key": "colCount",
        "prop": "colCount",
        "label": "列数量",
        "type": "slider",
        "default": 4,
        "min": 2,
        "max": 4,
        "step": 1,
        "publicKey": "colCount",
        "publicLabel": "列数量"
      },
      {
        "key": "highlightCol",
        "prop": "highlightCol",
        "label": "高亮列 (-1 关闭)",
        "type": "slider",
        "default": -1,
        "min": -1,
        "step": 1,
        "publicKey": "highlightCol",
        "publicLabel": "高亮列 (-1 关闭)"
      },
      {
        "key": "heat",
        "prop": "heat",
        "label": "热力着色",
        "type": "toggle",
        "default": true,
        "publicKey": "heat",
        "publicLabel": "热力着色"
      },
      {
        "key": "showTotals",
        "prop": "showTotals",
        "label": "边际合计",
        "type": "toggle",
        "default": true,
        "publicKey": "showTotals",
        "publicLabel": "边际合计"
      },
      {
        "key": "showAside",
        "prop": "showAside",
        "label": "装饰文案",
        "type": "toggle",
        "default": true,
        "desc": "读表提示",
        "publicKey": "showAside",
        "publicLabel": "装饰文案",
        "description": "读表提示"
      },
      {
        "key": "labelType",
        "prop": "labelType",
        "label": "标签类型",
        "type": "labelType",
        "default": "数字",
        "publicKey": "labelType",
        "publicLabel": "标签类型"
      },
      {
        "key": "focus",
        "prop": "focus",
        "label": "重点信息 Focus",
        "type": "focus",
        "default": true,
        "publicKey": "focus",
        "publicLabel": "重点信息 Focus"
      },
      {
        "key": "focusIndex",
        "prop": "focusIndex",
        "label": "焦点序号",
        "type": "slider",
        "default": 0,
        "min": 0,
        "step": 1,
        "publicKey": "focusIndex",
        "publicLabel": "焦点序号"
      }
    ],
    "defaultProps": {
      "rowCount": 6,
      "colCount": 4,
      "heat": true,
      "showTotals": true,
      "focus": true,
      "focusIndex": 0,
      "highlightCol": -1,
      "labelType": "number",
      "showAside": true,
      "rowHeader": "赛道 \\ 季度",
      "unit": "笔",
      "note": "单元格为各赛道在各季度的 ≥1 亿美元融资笔数；右侧与底部为边际合计，右下角为全年总笔数。数据为调研整理，仅供研究参考。",
      "head": {
        "no": "08",
        "en": "Cross-Tab · Pivot",
        "cn": "交叉透视 · 笔数列联表"
      },
      "columns": [
        "一季度",
        "二季度",
        "三季度",
        "四季度"
      ],
      "rows": [
        {
          "label": "大模型",
          "sub": "Foundation",
          "values": [
            9,
            11,
            13,
            9
          ]
        },
        {
          "label": "算力基建",
          "sub": "Compute",
          "values": [
            6,
            7,
            9,
            8
          ]
        },
        {
          "label": "垂直应用",
          "sub": "Vertical",
          "values": [
            5,
            6,
            7,
            6
          ]
        },
        {
          "label": "数据与工具",
          "sub": "Data/Tool",
          "values": [
            3,
            4,
            5,
            4
          ]
        },
        {
          "label": "安全对齐",
          "sub": "Safety",
          "values": [
            2,
            3,
            3,
            3
          ]
        },
        {
          "label": "端侧硬件",
          "sub": "Edge/HW",
          "values": [
            2,
            2,
            3,
            2
          ]
        }
      ]
    }
  },
  {
    "key": "theme09_page052",
    "themeKey": "theme09",
    "pageNumber": 52,
    "layout": "THEME09-052",
    "slot": "quote",
    "label": "09 观点引述",
    "bgClass": "bg-deep",
    "controls": [
      {
        "key": "itemCount",
        "prop": "itemCount",
        "label": "数量",
        "type": "slider",
        "default": 4,
        "min": 1,
        "max": 4,
        "step": 1,
        "publicKey": "itemCount",
        "publicLabel": "数量"
      },
      {
        "key": "imgCount",
        "prop": "imgCount",
        "label": "图片槽数量",
        "type": "slider",
        "default": 0,
        "min": 0,
        "max": 4,
        "step": 1,
        "publicKey": "imgCount",
        "publicLabel": "图片槽数量"
      },
      {
        "key": "showSource",
        "prop": "showSource",
        "label": "署名",
        "type": "toggle",
        "default": true,
        "publicKey": "showSource",
        "publicLabel": "署名"
      },
      {
        "key": "showAside",
        "prop": "showAside",
        "label": "装饰文案",
        "type": "toggle",
        "default": true,
        "publicKey": "showAside",
        "publicLabel": "装饰文案"
      },
      {
        "key": "labelType",
        "prop": "labelType",
        "label": "标签类型",
        "type": "labelType",
        "default": "数字",
        "publicKey": "labelType",
        "publicLabel": "标签类型"
      },
      {
        "key": "focus",
        "prop": "focus",
        "label": "重点信息 Focus",
        "type": "focus",
        "default": true,
        "publicKey": "focus",
        "publicLabel": "重点信息 Focus"
      },
      {
        "key": "focusIndex",
        "prop": "focusIndex",
        "label": "焦点序号",
        "type": "slider",
        "default": 0,
        "min": 0,
        "step": 1,
        "publicKey": "focusIndex",
        "publicLabel": "焦点序号"
      }
    ],
    "defaultProps": {
      "itemCount": 4,
      "focus": true,
      "focusIndex": 0,
      "labelType": "symbol",
      "showSource": true,
      "imgCount": 0,
      "showAside": true,
      "badge": "09",
      "quotes": [
        {
          "text": "2024 是 AI 的「资本大年」—— 资金以前所未有的密度涌向少数能讲好 AGI 故事的团队，赢家通吃成为常态。",
          "name": "某顶级 VC",
          "role": "成长期基金 合伙人",
          "tone": "看好"
        },
        {
          "text": "估值建立在未来市值而非当期收入上，一旦宏观收紧，高位的回调几乎不可避免。",
          "name": "二级市场",
          "role": "科技板块 分析师",
          "tone": "谨慎"
        },
        {
          "text": "真正稀缺的不是模型，而是能把模型嵌进工作流、拿到续约的垂直应用。",
          "name": "产业基金",
          "role": "企业服务 MD",
          "tone": "看好"
        },
        {
          "text": "卖铲子的人最先赚钱 —— 算力、数据与工具链的中游，是更稳的下注。",
          "name": "早期机构",
          "role": "基础设施 投资人",
          "tone": "中性"
        }
      ]
    }
  },
  {
    "key": "theme09_page053",
    "themeKey": "theme09",
    "pageNumber": 53,
    "layout": "THEME09-053",
    "slot": "manifesto",
    "label": "金句主张",
    "bgClass": "bg-blue",
    "controls": [
      {
        "key": "align",
        "prop": "align",
        "label": "对齐",
        "type": "radio",
        "default": "居中",
        "options": [
          "居中",
          "居左"
        ],
        "publicKey": "align",
        "publicLabel": "对齐"
      },
      {
        "key": "scale",
        "prop": "scale",
        "label": "字号",
        "type": "slider",
        "default": 64,
        "min": 40,
        "max": 80,
        "step": 2,
        "publicKey": "scale",
        "publicLabel": "字号"
      },
      {
        "key": "showMark",
        "prop": "showMark",
        "label": "引号装饰",
        "type": "toggle",
        "default": true,
        "publicKey": "showMark",
        "publicLabel": "引号装饰"
      },
      {
        "key": "showRule",
        "prop": "showRule",
        "label": "装饰文案",
        "type": "toggle",
        "default": true,
        "desc": "上下贯通细线",
        "publicKey": "showRule",
        "publicLabel": "装饰文案",
        "description": "上下贯通细线"
      },
      {
        "key": "focus",
        "prop": "focus",
        "label": "重点信息 Focus",
        "type": "focus",
        "default": true,
        "publicKey": "focus",
        "publicLabel": "重点信息 Focus"
      }
    ],
    "defaultProps": {
      "name": "本报告 · 编委观点",
      "role": "AI CAPITAL LAB · 研究组",
      "tag": "STATEMENT",
      "align": "居中",
      "showMark": true,
      "showRule": true,
      "focus": true,
      "scale": 64,
      "badge": "—",
      "segments": [
        {
          "text": "2024 不是泡沫，而是一次"
        },
        {
          "text": "方向的押注",
          "em": true
        },
        {
          "text": "—— 资本以前所未有的密度涌向少数团队，"
        },
        {
          "text": "赢家通吃",
          "em": true
        },
        {
          "text": "正在成为这个时代的资本常态。"
        }
      ]
    }
  },
  {
    "key": "theme09_page054",
    "themeKey": "theme09",
    "pageNumber": 54,
    "layout": "THEME09-054",
    "slot": "annotated",
    "label": "批注精读",
    "bgClass": "bg-deep",
    "controls": [
      {
        "key": "noteCount",
        "prop": "noteCount",
        "label": "数量",
        "type": "slider",
        "default": 3,
        "min": 2,
        "max": 4,
        "step": 1,
        "publicKey": "noteCount",
        "publicLabel": "数量"
      },
      {
        "key": "showConnector",
        "prop": "showConnector",
        "label": "装饰文案",
        "type": "toggle",
        "default": true,
        "publicKey": "showConnector",
        "publicLabel": "装饰文案"
      },
      {
        "key": "showAside",
        "prop": "showAside",
        "label": "题注条",
        "type": "toggle",
        "default": true,
        "publicKey": "showAside",
        "publicLabel": "题注条"
      },
      {
        "key": "labelType",
        "prop": "labelType",
        "label": "标签类型",
        "type": "labelType",
        "default": "数字",
        "publicKey": "labelType",
        "publicLabel": "标签类型"
      },
      {
        "key": "focus",
        "prop": "focus",
        "label": "重点信息 Focus",
        "type": "focus",
        "default": true,
        "publicKey": "focus",
        "publicLabel": "重点信息 Focus"
      },
      {
        "key": "focusIndex",
        "prop": "focusIndex",
        "label": "焦点序号",
        "type": "slider",
        "default": 0,
        "min": 0,
        "step": 1,
        "publicKey": "focusIndex",
        "publicLabel": "焦点序号"
      }
    ],
    "defaultProps": {
      "noteCount": 3,
      "focus": true,
      "focusIndex": 0,
      "labelType": "number",
      "showConnector": true,
      "showAside": true,
      "head": {
        "no": "精读",
        "en": "Close Reading",
        "cn": "一句话里的三个伏笔"
      },
      "aside": {
        "tag": "核心陈述",
        "note": "划线处皆有出处，下附批注。"
      },
      "segments": [
        {
          "text": "2024 年，约 "
        },
        {
          "text": "970 亿美元",
          "note": true
        },
        {
          "text": " 涌入 AI，其中 "
        },
        {
          "text": "逾四成",
          "note": true
        },
        {
          "text": " 押注大模型，而 "
        },
        {
          "text": "近六成",
          "note": true
        },
        {
          "text": " 资本聚集在旧金山湾区。"
        }
      ],
      "notes": [
        {
          "lead": "总量",
          "text": "约占全美创投总额三分之一，刷新历史纪录；单笔过亿事件 97 起。"
        },
        {
          "lead": "集中",
          "text": "大模型一条赛道吞下逾四成资金，资本向头部高速集中。"
        },
        {
          "lead": "地域",
          "text": "湾区占比逼近 64%，人才与资本的飞轮短期难以逆转。"
        },
        {
          "lead": "兑现",
          "text": "估值领先收入数个身位，繁荣的兑现压力被推迟而非消除。"
        }
      ]
    }
  },
  {
    "key": "theme09_page055",
    "themeKey": "theme09",
    "pageNumber": 55,
    "layout": "THEME09-055",
    "slot": "flow",
    "label": "10 资金流向",
    "bgClass": "bg-blue",
    "controls": [
      {
        "key": "itemCount",
        "prop": "itemCount",
        "label": "数量",
        "type": "slider",
        "default": 4,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "来源数",
        "publicKey": "itemCount",
        "publicLabel": "数量",
        "description": "来源数"
      },
      {
        "key": "showAside",
        "prop": "showAside",
        "label": "装饰文案",
        "type": "toggle",
        "default": true,
        "publicKey": "showAside",
        "publicLabel": "装饰文案"
      },
      {
        "key": "labelType",
        "prop": "labelType",
        "label": "标签类型",
        "type": "labelType",
        "default": "数字",
        "publicKey": "labelType",
        "publicLabel": "标签类型"
      },
      {
        "key": "focus",
        "prop": "focus",
        "label": "重点信息 Focus",
        "type": "focus",
        "default": true,
        "publicKey": "focus",
        "publicLabel": "重点信息 Focus"
      },
      {
        "key": "focusIndex",
        "prop": "focusIndex",
        "label": "焦点序号",
        "type": "slider",
        "default": 0,
        "min": 0,
        "step": 1,
        "publicKey": "focusIndex",
        "publicLabel": "焦点序号"
      }
    ],
    "defaultProps": {
      "itemCount": 4,
      "focus": true,
      "focusIndex": 0,
      "labelType": "number",
      "showAside": true,
      "badge": "10",
      "sources": [
        {
          "name": "风险资本",
          "en": "Venture Capital"
        },
        {
          "name": "企业战投",
          "en": "Corp. Strategic"
        },
        {
          "name": "主权 / 养老",
          "en": "Sovereign & Pension"
        },
        {
          "name": "对冲 / 共同",
          "en": "Hedge & Mutual"
        }
      ],
      "sectors": [
        {
          "name": "基础大模型",
          "en": "Foundation"
        },
        {
          "name": "AI 基础设施",
          "en": "Infrastructure"
        },
        {
          "name": "应用层",
          "en": "Applications"
        },
        {
          "name": "数据与安全",
          "en": "Data & Safety"
        }
      ],
      "matrix": [
        [
          186,
          98,
          126,
          60
        ],
        [
          120,
          72,
          18,
          10
        ],
        [
          86,
          62,
          6,
          6
        ],
        [
          38,
          46,
          24,
          12
        ]
      ]
    }
  },
  {
    "key": "theme09_page056",
    "themeKey": "theme09",
    "pageNumber": 56,
    "layout": "THEME09-056",
    "slot": "arc",
    "label": "资本弧网",
    "bgClass": "bg-deep",
    "controls": [
      {
        "key": "itemCount",
        "prop": "itemCount",
        "label": "数量",
        "type": "slider",
        "default": 7,
        "min": 4,
        "max": 8,
        "step": 1,
        "desc": "节点数",
        "publicKey": "itemCount",
        "publicLabel": "数量",
        "description": "节点数"
      },
      {
        "key": "showArc",
        "prop": "showArc",
        "label": "连弧",
        "type": "toggle",
        "default": true,
        "publicKey": "showArc",
        "publicLabel": "连弧"
      },
      {
        "key": "showValue",
        "prop": "showValue",
        "label": "体量数值",
        "type": "toggle",
        "default": true,
        "publicKey": "showValueLabels",
        "publicLabel": "体量数值"
      },
      {
        "key": "showAside",
        "prop": "showAside",
        "label": "装饰文案",
        "type": "toggle",
        "default": true,
        "desc": "关联解读",
        "publicKey": "showAside",
        "publicLabel": "装饰文案",
        "description": "关联解读"
      },
      {
        "key": "labelType",
        "prop": "labelType",
        "label": "标签类型",
        "type": "labelType",
        "default": "数字",
        "publicKey": "labelType",
        "publicLabel": "标签类型"
      },
      {
        "key": "focus",
        "prop": "focus",
        "label": "重点信息 Focus",
        "type": "focus",
        "default": true,
        "publicKey": "focus",
        "publicLabel": "重点信息 Focus"
      },
      {
        "key": "focusIndex",
        "prop": "focusIndex",
        "label": "焦点序号",
        "type": "slider",
        "default": 0,
        "min": 0,
        "step": 1,
        "publicKey": "focusIndex",
        "publicLabel": "焦点序号"
      }
    ],
    "defaultProps": {
      "itemCount": 7,
      "showArc": true,
      "showValue": true,
      "focus": true,
      "focusIndex": 0,
      "labelType": "number",
      "showAside": true,
      "unit": "亿$",
      "head": {
        "no": "10",
        "en": "Arc · Co-investment",
        "cn": "资本弧网 · 共投连线"
      },
      "nodes": [
        {
          "label": "红杉资本",
          "sub": "Sequoia",
          "value": 120
        },
        {
          "label": "a16z",
          "sub": "Andreessen",
          "value": 98
        },
        {
          "label": "Thrive",
          "sub": "Thrive",
          "value": 64
        },
        {
          "label": "微软",
          "sub": "Microsoft",
          "value": 150
        },
        {
          "label": "英伟达",
          "sub": "NVIDIA",
          "value": 88
        },
        {
          "label": "老虎环球",
          "sub": "Tiger",
          "value": 52
        },
        {
          "label": "Coatue",
          "sub": "Coatue",
          "value": 46
        },
        {
          "label": "软银愿景",
          "sub": "SoftBank",
          "value": 70
        }
      ],
      "links": [
        {
          "i": 0,
          "j": 3,
          "v": 9
        },
        {
          "i": 1,
          "j": 3,
          "v": 7
        },
        {
          "i": 3,
          "j": 4,
          "v": 8
        },
        {
          "i": 0,
          "j": 1,
          "v": 6
        },
        {
          "i": 2,
          "j": 4,
          "v": 5
        },
        {
          "i": 1,
          "j": 4,
          "v": 6
        },
        {
          "i": 5,
          "j": 6,
          "v": 4
        },
        {
          "i": 0,
          "j": 5,
          "v": 3
        },
        {
          "i": 3,
          "j": 7,
          "v": 5
        },
        {
          "i": 4,
          "j": 7,
          "v": 4
        }
      ]
    }
  },
  {
    "key": "theme09_page057",
    "themeKey": "theme09",
    "pageNumber": 57,
    "layout": "THEME09-057",
    "slot": "network",
    "label": "资本网络",
    "bgClass": "bg-night",
    "controls": [
      {
        "key": "itemCount",
        "prop": "itemCount",
        "label": "数量",
        "type": "slider",
        "default": 7,
        "min": 4,
        "max": 8,
        "step": 1,
        "desc": "节点数",
        "publicKey": "itemCount",
        "publicLabel": "数量",
        "description": "节点数"
      },
      {
        "key": "showCrossLinks",
        "prop": "showCrossLinks",
        "label": "交叉关联",
        "type": "toggle",
        "default": true,
        "publicKey": "showCrossLinks",
        "publicLabel": "交叉关联"
      },
      {
        "key": "showValue",
        "prop": "showValue",
        "label": "节点数值",
        "type": "toggle",
        "default": true,
        "publicKey": "showValueLabels",
        "publicLabel": "节点数值"
      },
      {
        "key": "showAside",
        "prop": "showAside",
        "label": "装饰文案",
        "type": "toggle",
        "default": true,
        "desc": "读图条",
        "publicKey": "showAside",
        "publicLabel": "装饰文案",
        "description": "读图条"
      },
      {
        "key": "labelType",
        "prop": "labelType",
        "label": "标签类型",
        "type": "labelType",
        "default": "数字",
        "publicKey": "labelType",
        "publicLabel": "标签类型"
      },
      {
        "key": "focus",
        "prop": "focus",
        "label": "重点信息 Focus",
        "type": "focus",
        "default": true,
        "publicKey": "focus",
        "publicLabel": "重点信息 Focus"
      },
      {
        "key": "focusIndex",
        "prop": "focusIndex",
        "label": "焦点序号",
        "type": "slider",
        "default": 0,
        "min": 0,
        "step": 1,
        "publicKey": "focusIndex",
        "publicLabel": "焦点序号"
      }
    ],
    "defaultProps": {
      "itemCount": 7,
      "hub": {
        "label": "资本",
        "sub": "$97B Capital"
      },
      "showCrossLinks": true,
      "showValue": true,
      "focus": true,
      "focusIndex": 0,
      "labelType": "number",
      "showAside": true,
      "head": {
        "no": "10",
        "en": "Network · Graph",
        "cn": "资本网络 · 赛道关联"
      },
      "nodes": [
        {
          "label": "大模型",
          "sub": "Foundation",
          "value": 610,
          "tone": "acc"
        },
        {
          "label": "算力",
          "sub": "Compute",
          "value": 370,
          "tone": "blue"
        },
        {
          "label": "应用层",
          "sub": "Apps",
          "value": 190,
          "tone": "violet"
        },
        {
          "label": "企业服务",
          "sub": "Enterprise",
          "value": 120,
          "tone": "blue"
        },
        {
          "label": "数据",
          "sub": "Data",
          "value": 96,
          "tone": "acc"
        },
        {
          "label": "安全",
          "sub": "Safety",
          "value": 74,
          "tone": "warn"
        },
        {
          "label": "机器人",
          "sub": "Robotics",
          "value": 55,
          "tone": "violet"
        },
        {
          "label": "医疗 AI",
          "sub": "Health",
          "value": 48,
          "tone": "blue"
        }
      ],
      "crossLinks": [
        [
          0,
          1
        ],
        [
          0,
          2
        ],
        [
          1,
          4
        ],
        [
          2,
          3
        ],
        [
          3,
          7
        ],
        [
          0,
          5
        ]
      ]
    }
  },
  {
    "key": "theme09_page058",
    "themeKey": "theme09",
    "pageNumber": 58,
    "layout": "THEME09-058",
    "slot": "tier",
    "label": "10 估值梯队",
    "bgClass": "bg-deep",
    "controls": [
      {
        "key": "itemCount",
        "prop": "itemCount",
        "label": "数量",
        "type": "slider",
        "default": 5,
        "min": 3,
        "max": 5,
        "step": 1,
        "desc": "梯队层数",
        "publicKey": "itemCount",
        "publicLabel": "数量",
        "description": "梯队层数"
      },
      {
        "key": "showAside",
        "prop": "showAside",
        "label": "装饰文案",
        "type": "toggle",
        "default": true,
        "publicKey": "showAside",
        "publicLabel": "装饰文案"
      },
      {
        "key": "labelType",
        "prop": "labelType",
        "label": "标签类型",
        "type": "labelType",
        "default": "数字",
        "publicKey": "labelType",
        "publicLabel": "标签类型"
      },
      {
        "key": "focus",
        "prop": "focus",
        "label": "重点信息 Focus",
        "type": "focus",
        "default": true,
        "publicKey": "focus",
        "publicLabel": "重点信息 Focus"
      },
      {
        "key": "focusIndex",
        "prop": "focusIndex",
        "label": "焦点序号",
        "type": "slider",
        "default": 0,
        "min": 0,
        "step": 1,
        "publicKey": "focusIndex",
        "publicLabel": "焦点序号"
      }
    ],
    "defaultProps": {
      "itemCount": 5,
      "focus": true,
      "focusIndex": 0,
      "labelType": "number",
      "showAside": true,
      "badge": "10",
      "tiers": [
        {
          "band": "超级梯队",
          "en": "Super League",
          "count": 2,
          "range": "估值 > 1500 亿$",
          "reps": [
            "OpenAI",
            "xAI"
          ]
        },
        {
          "band": "巨型独角兽",
          "en": "Decacorn+",
          "count": 7,
          "range": "300 – 1500 亿$",
          "reps": [
            "Anthropic",
            "Databricks",
            "Safe Superint."
          ]
        },
        {
          "band": "大型独角兽",
          "en": "Large Unicorn",
          "count": 16,
          "range": "80 – 300 亿$",
          "reps": [
            "Perplexity",
            "Glean",
            "Figure AI"
          ]
        },
        {
          "band": "成长独角兽",
          "en": "Growth Unicorn",
          "count": 34,
          "range": "20 – 80 亿$",
          "reps": [
            "Cursor",
            "ElevenLabs",
            "Sierra"
          ]
        },
        {
          "band": "新晋独角兽",
          "en": "New Unicorn",
          "count": 48,
          "range": "10 – 20 亿$",
          "reps": [
            "Decagon",
            "Mercor",
            "+45 家"
          ]
        }
      ]
    }
  },
  {
    "key": "theme09_page059",
    "themeKey": "theme09",
    "pageNumber": 59,
    "layout": "THEME09-059",
    "slot": "ledger",
    "label": "数据台账",
    "bgClass": "bg-blue",
    "controls": [
      {
        "key": "rowCount",
        "prop": "rowCount",
        "label": "行数量",
        "type": "slider",
        "default": 6,
        "min": 3,
        "max": 8,
        "step": 1,
        "publicKey": "rowCount",
        "publicLabel": "行数量"
      },
      {
        "key": "colCount",
        "prop": "colCount",
        "label": "列数量",
        "type": "slider",
        "default": 4,
        "min": 2,
        "max": 4,
        "step": 1,
        "publicKey": "colCount",
        "publicLabel": "列数量"
      },
      {
        "key": "sort",
        "prop": "sort",
        "label": "排序",
        "type": "radio",
        "default": "降序",
        "options": [
          "降序",
          "升序",
          "原序"
        ],
        "publicKey": "sort",
        "publicLabel": "排序"
      },
      {
        "key": "highlightCol",
        "prop": "highlightCol",
        "label": "高亮列 (-1 关闭)",
        "type": "slider",
        "default": -1,
        "min": -1,
        "step": 1,
        "publicKey": "highlightCol",
        "publicLabel": "高亮列 (-1 关闭)"
      },
      {
        "key": "showBar",
        "prop": "showBar",
        "label": "行内比例条",
        "type": "toggle",
        "default": true,
        "publicKey": "showBar",
        "publicLabel": "行内比例条"
      },
      {
        "key": "showTotal",
        "prop": "showTotal",
        "label": "装饰文案",
        "type": "toggle",
        "default": true,
        "desc": "合计/均值行",
        "publicKey": "showTotal",
        "publicLabel": "装饰文案",
        "description": "合计/均值行"
      },
      {
        "key": "labelType",
        "prop": "labelType",
        "label": "标签类型",
        "type": "labelType",
        "default": "数字",
        "publicKey": "labelType",
        "publicLabel": "标签类型"
      },
      {
        "key": "focus",
        "prop": "focus",
        "label": "重点信息 Focus",
        "type": "focus",
        "default": true,
        "publicKey": "focus",
        "publicLabel": "重点信息 Focus"
      },
      {
        "key": "focusIndex",
        "prop": "focusIndex",
        "label": "焦点序号",
        "type": "slider",
        "default": 0,
        "min": 0,
        "step": 1,
        "publicKey": "focusIndex",
        "publicLabel": "焦点序号"
      }
    ],
    "defaultProps": {
      "rowCount": 6,
      "colCount": 4,
      "sort": "降序",
      "showBar": true,
      "showTotal": true,
      "focus": true,
      "focusIndex": 0,
      "highlightCol": -1,
      "labelType": "number",
      "rowHeader": "公司 / 赛道",
      "note": "金额单位：亿美元；同比为相对上一年披露口径的变化，仅供研究参考。",
      "head": {
        "no": "08",
        "en": "Ledger",
        "cn": "资本台账 · 量化一览"
      },
      "columns": [
        {
          "label": "融资额",
          "unit": "亿$",
          "type": "bar"
        },
        {
          "label": "估值",
          "unit": "亿$",
          "type": "num"
        },
        {
          "label": "轮次",
          "unit": "次",
          "type": "num"
        },
        {
          "label": "同比",
          "unit": "%",
          "type": "delta"
        }
      ],
      "rows": [
        {
          "label": "OpenAI",
          "sub": "大模型",
          "vals": [
            66,
            1570,
            2,
            82
          ]
        },
        {
          "label": "xAI",
          "sub": "大模型",
          "vals": [
            60,
            450,
            2,
            120
          ]
        },
        {
          "label": "Anthropic",
          "sub": "大模型",
          "vals": [
            40,
            965,
            3,
            95
          ]
        },
        {
          "label": "Databricks",
          "sub": "基础设施",
          "vals": [
            100,
            620,
            1,
            48
          ]
        },
        {
          "label": "CoreWeave",
          "sub": "算力云",
          "vals": [
            110,
            190,
            2,
            160
          ]
        },
        {
          "label": "Glean",
          "sub": "垂直应用",
          "vals": [
            2.6,
            46,
            1,
            34
          ]
        },
        {
          "label": "Safe SI",
          "sub": "大模型",
          "vals": [
            10,
            50,
            1,
            0
          ]
        },
        {
          "label": "Scale AI",
          "sub": "数据标注",
          "vals": [
            10,
            138,
            1,
            28
          ]
        }
      ]
    }
  },
  {
    "key": "theme09_page060",
    "themeKey": "theme09",
    "pageNumber": 60,
    "layout": "THEME09-060",
    "slot": "diptych",
    "label": "双联对照",
    "bgClass": "bg-deep",
    "controls": [
      {
        "key": "panelCount",
        "prop": "panelCount",
        "label": "图片槽数量",
        "type": "slider",
        "default": 2,
        "min": 2,
        "max": 3,
        "step": 1,
        "desc": "联数",
        "publicKey": "panelCount",
        "publicLabel": "图片槽数量",
        "description": "联数"
      },
      {
        "key": "pivot",
        "prop": "pivot",
        "label": "中缝枢标",
        "type": "radio",
        "default": "对照",
        "options": [
          "对照",
          "前后",
          "VS",
          "/"
        ],
        "publicKey": "pivot",
        "publicLabel": "中缝枢标"
      },
      {
        "key": "showSeam",
        "prop": "showSeam",
        "label": "中缝枢标显隐",
        "type": "toggle",
        "default": true,
        "publicKey": "showSeam",
        "publicLabel": "中缝枢标显隐"
      },
      {
        "key": "showCaption",
        "prop": "showCaption",
        "label": "装饰文案",
        "type": "toggle",
        "default": true,
        "desc": "各联图说",
        "publicKey": "showCaption",
        "publicLabel": "装饰文案",
        "description": "各联图说"
      },
      {
        "key": "labelType",
        "prop": "labelType",
        "label": "标签类型",
        "type": "labelType",
        "default": "数字",
        "publicKey": "labelType",
        "publicLabel": "标签类型"
      },
      {
        "key": "focus",
        "prop": "focus",
        "label": "重点信息 Focus",
        "type": "focus",
        "default": true,
        "publicKey": "focus",
        "publicLabel": "重点信息 Focus"
      },
      {
        "key": "focusIndex",
        "prop": "focusIndex",
        "label": "焦点序号",
        "type": "slider",
        "default": 0,
        "min": 0,
        "step": 1,
        "publicKey": "focusIndex",
        "publicLabel": "焦点序号"
      }
    ],
    "defaultProps": {
      "panelCount": 2,
      "pivot": "对照",
      "showSeam": true,
      "showCaption": true,
      "focus": true,
      "focusIndex": 0,
      "labelType": "number",
      "head": {
        "no": "10",
        "en": "Side by Side",
        "cn": "双联对照 · 影像比较"
      },
      "panels": [
        {
          "title": "卖铲子的人",
          "sub": "算力基础设施",
          "caption": "锁定长约与稀缺算力 —— 现金流确定、估值更稳的中游赢家。",
          "ratio": 1.34,
          "label": "基础设施 / infra"
        },
        {
          "title": "淘金的人",
          "sub": "头部大模型",
          "caption": "估值建立在未来市值上 —— 想象空间巨大，回撤风险同样显著。",
          "ratio": 1.34,
          "label": "大模型 / model"
        },
        {
          "title": "卖水的人",
          "sub": "数据与工具",
          "caption": "嵌入工作流、拿到续约的垂直应用，是更隐蔽的稳健下注。",
          "ratio": 1.34,
          "label": "应用 / vertical"
        }
      ]
    }
  },
  {
    "key": "theme09_page061",
    "themeKey": "theme09",
    "pageNumber": 61,
    "layout": "THEME09-061",
    "slot": "alloc",
    "label": "10 资金用途",
    "bgClass": "bg-blue",
    "controls": [
      {
        "key": "itemCount",
        "prop": "itemCount",
        "label": "数量",
        "type": "slider",
        "default": 5,
        "min": 3,
        "max": 5,
        "step": 1,
        "desc": "用途项数",
        "publicKey": "itemCount",
        "publicLabel": "数量",
        "description": "用途项数"
      },
      {
        "key": "showAside",
        "prop": "showAside",
        "label": "装饰文案",
        "type": "toggle",
        "default": true,
        "publicKey": "showAside",
        "publicLabel": "装饰文案"
      },
      {
        "key": "labelType",
        "prop": "labelType",
        "label": "标签类型",
        "type": "labelType",
        "default": "数字",
        "publicKey": "labelType",
        "publicLabel": "标签类型"
      },
      {
        "key": "focus",
        "prop": "focus",
        "label": "重点信息 Focus",
        "type": "focus",
        "default": true,
        "publicKey": "focus",
        "publicLabel": "重点信息 Focus"
      },
      {
        "key": "focusIndex",
        "prop": "focusIndex",
        "label": "焦点序号",
        "type": "slider",
        "default": 0,
        "min": 0,
        "step": 1,
        "publicKey": "focusIndex",
        "publicLabel": "焦点序号"
      }
    ],
    "defaultProps": {
      "itemCount": 5,
      "focus": true,
      "focusIndex": 0,
      "labelType": "number",
      "showAside": true,
      "badge": "10",
      "items": [
        {
          "name": "算力与芯片",
          "en": "Compute & Chips",
          "pct": 44,
          "note": "GPU 集群、云算力长约、自研芯片"
        },
        {
          "name": "人才与薪酬",
          "en": "Talent",
          "pct": 24,
          "note": "核心研究员、工程团队扩张"
        },
        {
          "name": "研发与数据",
          "en": "R&D & Data",
          "pct": 17,
          "note": "模型训练、数据采买与标注"
        },
        {
          "name": "市场与拓展",
          "en": "Go-to-Market",
          "pct": 10,
          "note": "商业化、企业销售、生态合作"
        },
        {
          "name": "合规与其他",
          "en": "Ops & Other",
          "pct": 5,
          "note": "安全合规、行政与储备金"
        }
      ]
    }
  },
  {
    "key": "theme09_page062",
    "themeKey": "theme09",
    "pageNumber": 62,
    "layout": "THEME09-062",
    "slot": "rose",
    "label": "资金玫瑰",
    "bgClass": "bg-deep",
    "controls": [
      {
        "key": "itemCount",
        "prop": "itemCount",
        "label": "数量",
        "type": "slider",
        "default": 8,
        "min": 4,
        "max": 8,
        "step": 1,
        "desc": "扇瓣数",
        "publicKey": "itemCount",
        "publicLabel": "数量",
        "description": "扇瓣数"
      },
      {
        "key": "areaTrue",
        "prop": "areaTrue",
        "label": "面积真实",
        "type": "toggle",
        "default": true,
        "desc": "半径∝√值",
        "publicKey": "areaTrue",
        "publicLabel": "面积真实",
        "description": "半径∝√值"
      },
      {
        "key": "showScale",
        "prop": "showScale",
        "label": "刻度环",
        "type": "toggle",
        "default": true,
        "publicKey": "showScale",
        "publicLabel": "刻度环"
      },
      {
        "key": "showAside",
        "prop": "showAside",
        "label": "装饰文案",
        "type": "toggle",
        "default": true,
        "desc": "圆心读数",
        "publicKey": "showAside",
        "publicLabel": "装饰文案",
        "description": "圆心读数"
      },
      {
        "key": "labelType",
        "prop": "labelType",
        "label": "标签类型",
        "type": "labelType",
        "default": "数字",
        "publicKey": "labelType",
        "publicLabel": "标签类型"
      },
      {
        "key": "focus",
        "prop": "focus",
        "label": "重点信息 Focus",
        "type": "focus",
        "default": true,
        "publicKey": "focus",
        "publicLabel": "重点信息 Focus"
      },
      {
        "key": "focusIndex",
        "prop": "focusIndex",
        "label": "焦点序号",
        "type": "slider",
        "default": 0,
        "min": 0,
        "step": 1,
        "publicKey": "focusIndex",
        "publicLabel": "焦点序号"
      }
    ],
    "defaultProps": {
      "itemCount": 8,
      "areaTrue": true,
      "showScale": true,
      "focus": true,
      "focusIndex": 0,
      "labelType": "number",
      "showAside": true,
      "unit": "亿$",
      "head": {
        "no": "10",
        "en": "Rose · Polar Area",
        "cn": "资金玫瑰 · 极区分布"
      },
      "items": [
        {
          "label": "大模型",
          "sub": "Foundation",
          "value": 420
        },
        {
          "label": "算力基建",
          "sub": "Compute",
          "value": 180
        },
        {
          "label": "企业应用",
          "sub": "Enterprise",
          "value": 150
        },
        {
          "label": "自动驾驶",
          "sub": "Autonomy",
          "value": 120
        },
        {
          "label": "数据平台",
          "sub": "Data",
          "value": 90
        },
        {
          "label": "医疗 AI",
          "sub": "Health",
          "value": 88
        },
        {
          "label": "机器人",
          "sub": "Robotics",
          "value": 70
        },
        {
          "label": "安全合规",
          "sub": "Security",
          "value": 52
        }
      ]
    }
  },
  {
    "key": "theme09_page063",
    "themeKey": "theme09",
    "pageNumber": 63,
    "layout": "THEME09-063",
    "slot": "orbit",
    "label": "环形纪程",
    "bgClass": "bg-deep",
    "controls": [
      {
        "key": "itemCount",
        "prop": "itemCount",
        "label": "数量",
        "type": "slider",
        "default": 6,
        "min": 3,
        "max": 7,
        "step": 1,
        "desc": "节点数",
        "publicKey": "itemCount",
        "publicLabel": "数量",
        "description": "节点数"
      },
      {
        "key": "chartType",
        "prop": "chartType",
        "label": "图表类型",
        "type": "radio",
        "default": "扇形",
        "options": [
          "扇形",
          "整环"
        ],
        "publicKey": "chartType",
        "publicLabel": "图表类型"
      },
      {
        "key": "showSpokes",
        "prop": "showSpokes",
        "label": "辐条连线",
        "type": "toggle",
        "default": true,
        "publicKey": "showSpokes",
        "publicLabel": "辐条连线"
      },
      {
        "key": "showAside",
        "prop": "showAside",
        "label": "装饰文案",
        "type": "toggle",
        "default": true,
        "desc": "枢轴文案",
        "publicKey": "showAside",
        "publicLabel": "装饰文案",
        "description": "枢轴文案"
      },
      {
        "key": "labelType",
        "prop": "labelType",
        "label": "标签类型",
        "type": "labelType",
        "default": "数字",
        "publicKey": "labelType",
        "publicLabel": "标签类型"
      },
      {
        "key": "focus",
        "prop": "focus",
        "label": "重点信息 Focus",
        "type": "focus",
        "default": true,
        "publicKey": "focus",
        "publicLabel": "重点信息 Focus"
      },
      {
        "key": "focusIndex",
        "prop": "focusIndex",
        "label": "焦点序号",
        "type": "slider",
        "default": 0,
        "min": 0,
        "step": 1,
        "publicKey": "focusIndex",
        "publicLabel": "焦点序号"
      }
    ],
    "defaultProps": {
      "itemCount": 6,
      "chartType": "扇形",
      "showSpokes": true,
      "focus": true,
      "focusIndex": 0,
      "labelType": "number",
      "showAside": true,
      "hubText": {
        "big": "2024",
        "sub": "年度纪程"
      },
      "head": {
        "no": "08",
        "en": "Orbit · Milestones",
        "cn": "环形纪程 · 资本年轮"
      },
      "events": [
        {
          "date": "02",
          "title": "要约收购",
          "text": "OpenAI 早期股东要约，估值约 860 亿$",
          "tone": "blue"
        },
        {
          "date": "05",
          "title": "xAI B 轮",
          "text": "募资 60 亿$，投后约 240 亿$",
          "tone": "acc"
        },
        {
          "date": "06",
          "title": "战略加注",
          "text": "Anthropic 获亚马逊追加投资",
          "tone": "violet"
        },
        {
          "date": "09",
          "title": "Databricks",
          "text": "J 轮约 100 亿$，估值 620 亿$",
          "tone": "acc"
        },
        {
          "date": "10",
          "title": "OpenAI 新轮",
          "text": "66 亿$，估值跃至 1570 亿$",
          "tone": "blue"
        },
        {
          "date": "12",
          "title": "Safe SI",
          "text": "种子轮即募 10 亿$",
          "tone": "warn"
        },
        {
          "date": "年末",
          "title": "结构跃迁",
          "text": "全年 ≥1 亿$ 事件 97 笔",
          "tone": "acc"
        }
      ]
    }
  },
  {
    "key": "theme09_page064",
    "themeKey": "theme09",
    "pageNumber": 64,
    "layout": "THEME09-064",
    "slot": "mega",
    "label": "数字海报",
    "bgClass": "bg-deep",
    "controls": [
      {
        "key": "tickerCount",
        "prop": "tickerCount",
        "label": "数量",
        "type": "slider",
        "default": 4,
        "min": 0,
        "max": 6,
        "step": 1,
        "desc": "数据带条目",
        "publicKey": "itemCount",
        "publicLabel": "数量",
        "description": "数据带条目"
      },
      {
        "key": "accentNumber",
        "prop": "accentNumber",
        "label": "强调主数字",
        "type": "toggle",
        "default": true,
        "desc": "关则金属字",
        "publicKey": "accentNumber",
        "publicLabel": "强调主数字",
        "description": "关则金属字"
      },
      {
        "key": "showTag",
        "prop": "showTag",
        "label": "装饰文案",
        "type": "toggle",
        "default": true,
        "desc": "旋转贴标",
        "publicKey": "showTag",
        "publicLabel": "装饰文案",
        "description": "旋转贴标"
      },
      {
        "key": "focus",
        "prop": "focus",
        "label": "重点信息 Focus",
        "type": "focus",
        "default": true,
        "publicKey": "focus",
        "publicLabel": "重点信息 Focus"
      },
      {
        "key": "focusIndex",
        "prop": "focusIndex",
        "label": "焦点序号",
        "type": "slider",
        "default": 0,
        "min": 0,
        "step": 1,
        "publicKey": "focusIndex",
        "publicLabel": "焦点序号"
      }
    ],
    "defaultProps": {
      "value": "97",
      "unit": "笔",
      "lines": [
        "单笔 ≥ 1 亿美元的",
        "大额融资事件"
      ],
      "tag": "资本大年",
      "tickerCount": 4,
      "accentNumber": true,
      "showTag": true,
      "focus": true,
      "focusIndex": 0,
      "badge": "08",
      "kicker": "POSTER FIGURE",
      "ticker": [
        "970 亿$ 全年总额",
        "10 亿$ 平均单笔",
        "43.3% 大模型占比",
        "63.9% 湾区集中",
        "1570 亿$ 最高估值",
        "×3 头部翻倍"
      ]
    }
  },
  {
    "key": "theme09_page065",
    "themeKey": "theme09",
    "pageNumber": 65,
    "layout": "THEME09-065",
    "slot": "radar",
    "label": "10 全球格局",
    "bgClass": "bg-deep",
    "controls": [
      {
        "key": "itemCount",
        "prop": "itemCount",
        "label": "数量",
        "type": "slider",
        "default": 3,
        "min": 1,
        "max": 3,
        "step": 1,
        "desc": "区域数",
        "publicKey": "itemCount",
        "publicLabel": "数量",
        "description": "区域数"
      },
      {
        "key": "showAside",
        "prop": "showAside",
        "label": "装饰文案",
        "type": "toggle",
        "default": true,
        "publicKey": "showAside",
        "publicLabel": "装饰文案"
      },
      {
        "key": "labelType",
        "prop": "labelType",
        "label": "标签类型",
        "type": "labelType",
        "default": "数字",
        "publicKey": "labelType",
        "publicLabel": "标签类型"
      },
      {
        "key": "focus",
        "prop": "focus",
        "label": "重点信息 Focus",
        "type": "focus",
        "default": true,
        "publicKey": "focus",
        "publicLabel": "重点信息 Focus"
      },
      {
        "key": "focusIndex",
        "prop": "focusIndex",
        "label": "焦点序号",
        "type": "slider",
        "default": 0,
        "min": 0,
        "step": 1,
        "publicKey": "focusIndex",
        "publicLabel": "焦点序号"
      }
    ],
    "defaultProps": {
      "itemCount": 3,
      "focus": true,
      "focusIndex": 0,
      "labelType": "number",
      "showAside": true,
      "badge": "10",
      "axes": [
        "融资规模",
        "大模型实力",
        "算力供给",
        "人才密度",
        "政策支持",
        "应用生态"
      ],
      "regions": [
        {
          "name": "美国",
          "en": "United States",
          "color": "#46e3c6",
          "scores": [
            98,
            96,
            94,
            92,
            70,
            88
          ]
        },
        {
          "name": "中国",
          "en": "China",
          "color": "#ffb27a",
          "scores": [
            62,
            78,
            66,
            80,
            90,
            84
          ]
        },
        {
          "name": "欧洲",
          "en": "Europe",
          "color": "#9f7bff",
          "scores": [
            44,
            58,
            40,
            64,
            76,
            60
          ]
        }
      ]
    }
  },
  {
    "key": "theme09_page066",
    "themeKey": "theme09",
    "pageNumber": 66,
    "layout": "THEME09-066",
    "slot": "parallel",
    "label": "区域画像",
    "bgClass": "bg-blue",
    "controls": [
      {
        "key": "itemCount",
        "prop": "itemCount",
        "label": "数量",
        "type": "slider",
        "default": 6,
        "min": 3,
        "max": 7,
        "step": 1,
        "desc": "对象数",
        "publicKey": "itemCount",
        "publicLabel": "数量",
        "description": "对象数"
      },
      {
        "key": "axisCount",
        "prop": "axisCount",
        "label": "列数量",
        "type": "slider",
        "default": 5,
        "min": 3,
        "max": 5,
        "step": 1,
        "desc": "维度数",
        "publicKey": "axisCount",
        "publicLabel": "列数量",
        "description": "维度数"
      },
      {
        "key": "showDots",
        "prop": "showDots",
        "label": "轴上节点",
        "type": "toggle",
        "default": true,
        "publicKey": "showDots",
        "publicLabel": "轴上节点"
      },
      {
        "key": "showAside",
        "prop": "showAside",
        "label": "装饰文案",
        "type": "toggle",
        "default": true,
        "desc": "画像解读",
        "publicKey": "showAside",
        "publicLabel": "装饰文案",
        "description": "画像解读"
      },
      {
        "key": "labelType",
        "prop": "labelType",
        "label": "标签类型",
        "type": "labelType",
        "default": "数字",
        "publicKey": "labelType",
        "publicLabel": "标签类型"
      },
      {
        "key": "focus",
        "prop": "focus",
        "label": "重点信息 Focus",
        "type": "focus",
        "default": true,
        "publicKey": "focus",
        "publicLabel": "重点信息 Focus"
      },
      {
        "key": "focusIndex",
        "prop": "focusIndex",
        "label": "焦点序号",
        "type": "slider",
        "default": 0,
        "min": 0,
        "step": 1,
        "publicKey": "focusIndex",
        "publicLabel": "焦点序号"
      }
    ],
    "defaultProps": {
      "itemCount": 6,
      "axisCount": 5,
      "showDots": true,
      "focus": true,
      "focusIndex": 0,
      "labelType": "number",
      "showAside": true,
      "head": {
        "no": "10",
        "en": "Parallel · Multivariate",
        "cn": "区域画像 · 平行坐标"
      },
      "axes": [
        {
          "label": "融资额",
          "max": 500,
          "unit": "亿$"
        },
        {
          "label": "交易数",
          "max": 120,
          "unit": "笔"
        },
        {
          "label": "平均单笔",
          "max": 15,
          "unit": "亿$"
        },
        {
          "label": "估值倍数",
          "max": 40,
          "unit": "×"
        },
        {
          "label": "人才密度",
          "max": 100,
          "unit": "指数"
        }
      ],
      "objects": [
        {
          "label": "旧金山湾区",
          "vals": [
            480,
            110,
            12,
            36,
            95
          ]
        },
        {
          "label": "纽约",
          "vals": [
            180,
            64,
            6,
            24,
            72
          ]
        },
        {
          "label": "波士顿",
          "vals": [
            120,
            38,
            5,
            20,
            80
          ]
        },
        {
          "label": "西雅图",
          "vals": [
            90,
            30,
            4.5,
            18,
            68
          ]
        },
        {
          "label": "洛杉矶",
          "vals": [
            70,
            28,
            3.8,
            15,
            55
          ]
        },
        {
          "label": "奥斯汀",
          "vals": [
            55,
            22,
            3.2,
            14,
            50
          ]
        }
      ]
    }
  },
  {
    "key": "theme09_page067",
    "themeKey": "theme09",
    "pageNumber": 67,
    "layout": "THEME09-067",
    "slot": "grade",
    "label": "评级矩阵",
    "bgClass": "bg-blue",
    "controls": [
      {
        "key": "rowCount",
        "prop": "rowCount",
        "label": "行数量",
        "type": "slider",
        "default": 6,
        "min": 3,
        "max": 8,
        "step": 1,
        "publicKey": "rowCount",
        "publicLabel": "行数量"
      },
      {
        "key": "colCount",
        "prop": "colCount",
        "label": "列数量",
        "type": "slider",
        "default": 5,
        "min": 2,
        "max": 6,
        "step": 1,
        "publicKey": "colCount",
        "publicLabel": "列数量"
      },
      {
        "key": "highlightCol",
        "prop": "highlightCol",
        "label": "高亮列 (-1 关闭)",
        "type": "slider",
        "default": -1,
        "min": -1,
        "step": 1,
        "publicKey": "highlightCol",
        "publicLabel": "高亮列 (-1 关闭)"
      },
      {
        "key": "showComposite",
        "prop": "showComposite",
        "label": "综合评级",
        "type": "toggle",
        "default": true,
        "publicKey": "showComposite",
        "publicLabel": "综合评级"
      },
      {
        "key": "showAside",
        "prop": "showAside",
        "label": "装饰文案",
        "type": "toggle",
        "default": true,
        "desc": "等级图例",
        "publicKey": "showAside",
        "publicLabel": "装饰文案",
        "description": "等级图例"
      },
      {
        "key": "labelType",
        "prop": "labelType",
        "label": "标签类型",
        "type": "labelType",
        "default": "数字",
        "publicKey": "labelType",
        "publicLabel": "标签类型"
      },
      {
        "key": "focus",
        "prop": "focus",
        "label": "重点信息 Focus",
        "type": "focus",
        "default": true,
        "publicKey": "focus",
        "publicLabel": "重点信息 Focus"
      },
      {
        "key": "focusIndex",
        "prop": "focusIndex",
        "label": "焦点序号",
        "type": "slider",
        "default": 0,
        "min": 0,
        "step": 1,
        "publicKey": "focusIndex",
        "publicLabel": "焦点序号"
      }
    ],
    "defaultProps": {
      "rowCount": 6,
      "colCount": 5,
      "showComposite": true,
      "focus": true,
      "focusIndex": 0,
      "highlightCol": -1,
      "labelType": "number",
      "showAside": true,
      "rowHeader": "赛道 / 投资原型",
      "note": "等级为研究性主观判断：S 卓越 · A 优 · B 良 · C 中 · D 弱；综合为各维度等级的加权折算。",
      "head": {
        "no": "10",
        "en": "Grading Matrix",
        "cn": "赛道评级矩阵"
      },
      "criteria": [
        "资本热度",
        "护城河",
        "现金流",
        "成长性",
        "泡沫风险",
        "落地确定"
      ],
      "rows": [
        {
          "label": "算力基础设施",
          "sub": "Infra",
          "grades": [
            "S",
            "A",
            "A",
            "B",
            "B",
            "S"
          ]
        },
        {
          "label": "头部大模型",
          "sub": "Foundation",
          "grades": [
            "S",
            "S",
            "C",
            "S",
            "D",
            "B"
          ]
        },
        {
          "label": "垂直行业应用",
          "sub": "Vertical",
          "grades": [
            "A",
            "B",
            "B",
            "A",
            "C",
            "A"
          ]
        },
        {
          "label": "工具与中间件",
          "sub": "Tooling",
          "grades": [
            "B",
            "C",
            "B",
            "B",
            "C",
            "B"
          ]
        },
        {
          "label": "数据与标注",
          "sub": "Data Layer",
          "grades": [
            "A",
            "B",
            "A",
            "B",
            "B",
            "A"
          ]
        },
        {
          "label": "概念叙事项目",
          "sub": "Narrative",
          "grades": [
            "B",
            "D",
            "D",
            "C",
            "S",
            "D"
          ]
        },
        {
          "label": "安全与对齐",
          "sub": "Safety",
          "grades": [
            "A",
            "A",
            "C",
            "A",
            "C",
            "B"
          ]
        },
        {
          "label": "端侧与硬件",
          "sub": "Edge / HW",
          "grades": [
            "B",
            "B",
            "B",
            "B",
            "C",
            "C"
          ]
        }
      ]
    }
  },
  {
    "key": "theme09_page068",
    "themeKey": "theme09",
    "pageNumber": 68,
    "layout": "THEME09-068",
    "slot": "venn",
    "label": "交集视图",
    "bgClass": "bg-deep",
    "controls": [
      {
        "key": "setCount",
        "prop": "setCount",
        "label": "集合数量",
        "type": "slider",
        "default": 3,
        "min": 2,
        "max": 3,
        "step": 1,
        "publicKey": "setCount",
        "publicLabel": "集合数量"
      },
      {
        "key": "showCore",
        "prop": "showCore",
        "label": "交集结论",
        "type": "toggle",
        "default": true,
        "publicKey": "showCore",
        "publicLabel": "交集结论"
      },
      {
        "key": "showAside",
        "prop": "showAside",
        "label": "装饰文案",
        "type": "toggle",
        "default": true,
        "desc": "右侧导读",
        "publicKey": "showAside",
        "publicLabel": "装饰文案",
        "description": "右侧导读"
      },
      {
        "key": "focus",
        "prop": "focus",
        "label": "重点信息 Focus",
        "type": "focus",
        "default": true,
        "publicKey": "focus",
        "publicLabel": "重点信息 Focus"
      },
      {
        "key": "focusIndex",
        "prop": "focusIndex",
        "label": "焦点序号",
        "type": "slider",
        "default": 0,
        "min": 0,
        "step": 1,
        "publicKey": "focusIndex",
        "publicLabel": "焦点序号"
      }
    ],
    "defaultProps": {
      "setCount": 3,
      "showCore": true,
      "showAside": true,
      "focus": true,
      "focusIndex": 0,
      "head": {
        "no": "交集",
        "en": "The Intersection",
        "cn": "谁能同时握住三件事"
      },
      "sets": [
        {
          "label": "算力",
          "desc": "稳定的 GPU 与云供给",
          "color": "#4a86ff"
        },
        {
          "label": "数据",
          "desc": "独占且高质的语料壁垒",
          "color": "#46e3c6"
        },
        {
          "label": "资本",
          "desc": "可持续的大额弹药",
          "color": "#9f7bff"
        }
      ],
      "core": {
        "tag": "交集 = 胜出位",
        "text": "三者同时具备者，\n才是这轮押注的安全区。"
      },
      "aside": {
        "tag": "READING · 导读",
        "text": "圆越叠合，确定性越高——单点优势难以独自跑赢，结构性的交集才是壁垒。"
      }
    }
  },
  {
    "key": "theme09_page069",
    "themeKey": "theme09",
    "pageNumber": 69,
    "layout": "THEME09-069",
    "slot": "vertical",
    "label": "10 应用落地",
    "bgClass": "bg-blue",
    "controls": [
      {
        "key": "itemCount",
        "prop": "itemCount",
        "label": "数量",
        "type": "slider",
        "default": 8,
        "min": 4,
        "max": 8,
        "step": 1,
        "desc": "分类数",
        "publicKey": "categoryCount",
        "publicLabel": "数量",
        "description": "分类数"
      },
      {
        "key": "columns",
        "prop": "columns",
        "label": "每行数量",
        "type": "slider",
        "default": 4,
        "min": 3,
        "max": 4,
        "step": 1,
        "publicKey": "columns",
        "publicLabel": "每行数量"
      },
      {
        "key": "showAside",
        "prop": "showAside",
        "label": "装饰文案",
        "type": "toggle",
        "default": true,
        "publicKey": "showAside",
        "publicLabel": "装饰文案"
      },
      {
        "key": "labelType",
        "prop": "labelType",
        "label": "标签类型",
        "type": "labelType",
        "default": "数字",
        "publicKey": "labelType",
        "publicLabel": "标签类型"
      },
      {
        "key": "focus",
        "prop": "focus",
        "label": "重点信息 Focus",
        "type": "focus",
        "default": true,
        "publicKey": "focus",
        "publicLabel": "重点信息 Focus"
      },
      {
        "key": "focusIndex",
        "prop": "focusIndex",
        "label": "焦点序号",
        "type": "slider",
        "default": 0,
        "min": 0,
        "step": 1,
        "publicKey": "focusIndex",
        "publicLabel": "焦点序号"
      }
    ],
    "defaultProps": {
      "itemCount": 8,
      "columns": 4,
      "focus": true,
      "focusIndex": 0,
      "labelType": "number",
      "showAside": true,
      "badge": "10",
      "items": [
        {
          "name": "编程开发",
          "en": "Code",
          "pct": 82,
          "value": "212",
          "unit": "亿$",
          "delta": "最快兑现"
        },
        {
          "name": "客服营销",
          "en": "CX & Mktg",
          "pct": 71,
          "value": "168",
          "unit": "亿$",
          "delta": "规模落地"
        },
        {
          "name": "金融科技",
          "en": "Fintech",
          "pct": 58,
          "value": "120",
          "unit": "亿$",
          "delta": "高客单价"
        },
        {
          "name": "医疗健康",
          "en": "Healthcare",
          "pct": 49,
          "value": "96",
          "unit": "亿$",
          "delta": "壁垒深"
        },
        {
          "name": "法律合规",
          "en": "Legal",
          "pct": 44,
          "value": "58",
          "unit": "亿$",
          "delta": "刚需明确"
        },
        {
          "name": "设计创意",
          "en": "Creative",
          "pct": 63,
          "value": "88",
          "unit": "亿$",
          "delta": "生成式红利"
        },
        {
          "name": "教育科研",
          "en": "Education",
          "pct": 38,
          "value": "42",
          "unit": "亿$",
          "delta": "渗透中"
        },
        {
          "name": "工业制造",
          "en": "Industrial",
          "pct": 31,
          "value": "36",
          "unit": "亿$",
          "delta": "早期"
        }
      ]
    }
  },
  {
    "key": "theme09_page070",
    "themeKey": "theme09",
    "pageNumber": 70,
    "layout": "THEME09-070",
    "slot": "mosaic",
    "label": "影像拼贴",
    "bgClass": "bg-deep",
    "controls": [
      {
        "key": "imgCount",
        "prop": "imgCount",
        "label": "图片槽数量",
        "type": "slider",
        "default": 5,
        "min": 0,
        "max": 6,
        "step": 1,
        "publicKey": "imgCount",
        "publicLabel": "图片槽数量"
      },
      {
        "key": "maxH",
        "prop": "maxH",
        "label": "拼贴最大高",
        "type": "slider",
        "default": 540,
        "min": 360,
        "max": 640,
        "step": 20,
        "publicKey": "maxH",
        "publicLabel": "拼贴最大高"
      },
      {
        "key": "layout",
        "prop": "layout",
        "label": "排布",
        "type": "radio",
        "default": "双排",
        "options": [
          "单排",
          "双排"
        ],
        "publicKey": "layout",
        "publicLabel": "排布"
      },
      {
        "key": "tagCount",
        "prop": "tagCount",
        "label": "数量",
        "type": "slider",
        "default": 4,
        "min": 0,
        "max": 6,
        "step": 1,
        "desc": "标签数",
        "publicKey": "tagCount",
        "publicLabel": "数量",
        "description": "标签数"
      },
      {
        "key": "showFrame",
        "prop": "showFrame",
        "label": "裁切角框",
        "type": "toggle",
        "default": true,
        "publicKey": "showFrame",
        "publicLabel": "裁切角框"
      },
      {
        "key": "showMeta",
        "prop": "showMeta",
        "label": "装饰文案",
        "type": "toggle",
        "default": true,
        "desc": "元信息 + 标签",
        "publicKey": "showMeta",
        "publicLabel": "装饰文案",
        "description": "元信息 + 标签"
      },
      {
        "key": "focus",
        "prop": "focus",
        "label": "重点信息 Focus",
        "type": "focus",
        "default": true,
        "publicKey": "focus",
        "publicLabel": "重点信息 Focus"
      },
      {
        "key": "focusIndex",
        "prop": "focusIndex",
        "label": "焦点序号",
        "type": "slider",
        "default": 0,
        "min": 0,
        "step": 1,
        "publicKey": "focusIndex",
        "publicLabel": "焦点序号"
      }
    ],
    "defaultProps": {
      "imgCount": 5,
      "layout": "双排",
      "maxH": 540,
      "showFrame": true,
      "showMeta": true,
      "tagCount": 4,
      "focus": true,
      "focusIndex": 0,
      "kicker": "CONTACT SHEET · 影像",
      "title": "代表企业影像志",
      "titleEN": "Selected · 2024",
      "serial": "ROLL 024 · AI CAPITAL",
      "tags": [
        "大模型",
        "算力基础设施",
        "垂直应用",
        "工具与中间件",
        "数据与标注",
        "安全与对齐"
      ]
    }
  },
  {
    "key": "theme09_page071",
    "themeKey": "theme09",
    "pageNumber": 71,
    "layout": "THEME09-071",
    "slot": "radialbar",
    "label": "径向透视",
    "bgClass": "bg-blue",
    "controls": [
      {
        "key": "itemCount",
        "prop": "itemCount",
        "label": "数量",
        "type": "slider",
        "default": 5,
        "min": 2,
        "max": 6,
        "step": 1,
        "publicKey": "itemCount",
        "publicLabel": "数量"
      },
      {
        "key": "chartType",
        "prop": "chartType",
        "label": "图表类型",
        "type": "radio",
        "default": "径向条",
        "options": [
          "径向条",
          "极柱"
        ],
        "publicKey": "chartType",
        "publicLabel": "图表类型"
      },
      {
        "key": "showScale",
        "prop": "showScale",
        "label": "刻度网格",
        "type": "toggle",
        "default": true,
        "desc": "装饰",
        "publicKey": "showScale",
        "publicLabel": "刻度网格",
        "description": "装饰"
      },
      {
        "key": "showAside",
        "prop": "showAside",
        "label": "装饰文案",
        "type": "toggle",
        "default": true,
        "desc": "口径说明",
        "publicKey": "showAside",
        "publicLabel": "装饰文案",
        "description": "口径说明"
      },
      {
        "key": "labelType",
        "prop": "labelType",
        "label": "标签类型",
        "type": "labelType",
        "default": "数字",
        "publicKey": "labelType",
        "publicLabel": "标签类型"
      },
      {
        "key": "focus",
        "prop": "focus",
        "label": "重点信息 Focus",
        "type": "focus",
        "default": true,
        "publicKey": "focus",
        "publicLabel": "重点信息 Focus"
      },
      {
        "key": "focusIndex",
        "prop": "focusIndex",
        "label": "焦点序号",
        "type": "slider",
        "default": 0,
        "min": 0,
        "step": 1,
        "publicKey": "focusIndex",
        "publicLabel": "焦点序号"
      }
    ],
    "defaultProps": {
      "itemCount": 5,
      "chartType": "径向条",
      "showScale": true,
      "focus": true,
      "focusIndex": 0,
      "labelType": "number",
      "showAside": true,
      "head": {
        "no": "10",
        "en": "Radial Bars",
        "cn": "径向透视 · 赛道热度"
      },
      "note": "数值经标准化后映射到极坐标半径；刻度环为 0 / 50 / 100 参考线。各赛道热度由融资笔数、金额与增速综合测算，仅供研究参考。",
      "items": [
        {
          "cn": "大模型",
          "en": "Foundation",
          "value": 92,
          "unit": "热度",
          "tone": "acc"
        },
        {
          "cn": "算力基建",
          "en": "Compute",
          "value": 78,
          "unit": "热度",
          "tone": "blue"
        },
        {
          "cn": "垂直应用",
          "en": "Vertical",
          "value": 64,
          "unit": "热度",
          "tone": "violet"
        },
        {
          "cn": "数据与工具",
          "en": "Data/Tool",
          "value": 51,
          "unit": "热度",
          "tone": "acc"
        },
        {
          "cn": "安全对齐",
          "en": "Safety",
          "value": 43,
          "unit": "热度",
          "tone": "blue"
        },
        {
          "cn": "端侧硬件",
          "en": "Edge/HW",
          "value": 36,
          "unit": "热度",
          "tone": "warn"
        }
      ]
    }
  },
  {
    "key": "theme09_page072",
    "themeKey": "theme09",
    "pageNumber": 72,
    "layout": "THEME09-072",
    "slot": "treemap",
    "label": "10 公司版图",
    "bgClass": "bg-deep",
    "controls": [
      {
        "key": "itemCount",
        "prop": "itemCount",
        "label": "数量",
        "type": "slider",
        "default": 12,
        "min": 5,
        "max": 12,
        "step": 1,
        "publicKey": "itemCount",
        "publicLabel": "数量"
      },
      {
        "key": "showAside",
        "prop": "showAside",
        "label": "装饰文案",
        "type": "toggle",
        "default": true,
        "publicKey": "showAside",
        "publicLabel": "装饰文案"
      },
      {
        "key": "labelType",
        "prop": "labelType",
        "label": "标签类型",
        "type": "labelType",
        "default": "数字",
        "publicKey": "labelType",
        "publicLabel": "标签类型"
      },
      {
        "key": "focus",
        "prop": "focus",
        "label": "重点信息 Focus",
        "type": "focus",
        "default": true,
        "publicKey": "focus",
        "publicLabel": "重点信息 Focus"
      },
      {
        "key": "focusIndex",
        "prop": "focusIndex",
        "label": "焦点序号",
        "type": "slider",
        "default": 0,
        "min": 0,
        "step": 1,
        "publicKey": "focusIndex",
        "publicLabel": "焦点序号"
      }
    ],
    "defaultProps": {
      "itemCount": 12,
      "focus": true,
      "focusIndex": 0,
      "labelType": "number",
      "showAside": true,
      "badge": "10",
      "items": [
        {
          "name": "OpenAI",
          "sector": "基础模型",
          "val": 1570,
          "round": "Series · 年末"
        },
        {
          "name": "Anthropic",
          "sector": "基础模型",
          "val": 615,
          "round": "Series F"
        },
        {
          "name": "xAI",
          "sector": "基础模型",
          "val": 500,
          "round": "Series C"
        },
        {
          "name": "Databricks",
          "sector": "数据平台",
          "val": 620,
          "round": "Series J"
        },
        {
          "name": "Safe Superint.",
          "sector": "基础模型",
          "val": 320,
          "round": "Series A"
        },
        {
          "name": "Perplexity",
          "sector": "应用层",
          "val": 90,
          "round": "Series · 后期"
        },
        {
          "name": "Anysphere",
          "sector": "应用层",
          "val": 96,
          "round": "Series C"
        },
        {
          "name": "Glean",
          "sector": "应用层",
          "val": 72,
          "round": "Series F"
        },
        {
          "name": "Figure AI",
          "sector": "机器人",
          "val": 260,
          "round": "Series C"
        },
        {
          "name": "Scale AI",
          "sector": "数据平台",
          "val": 138,
          "round": "战略融资"
        },
        {
          "name": "ElevenLabs",
          "sector": "应用层",
          "val": 66,
          "round": "Series C"
        },
        {
          "name": "Sierra",
          "sector": "应用层",
          "val": 100,
          "round": "Series · 后期"
        }
      ]
    }
  },
  {
    "key": "theme09_page073",
    "themeKey": "theme09",
    "pageNumber": 73,
    "layout": "THEME09-073",
    "slot": "icicle",
    "label": "层级冰柱",
    "bgClass": "bg-blue",
    "controls": [
      {
        "key": "itemCount",
        "prop": "itemCount",
        "label": "数量",
        "type": "slider",
        "default": 5,
        "min": 3,
        "max": 5,
        "step": 1,
        "desc": "大类数",
        "publicKey": "itemCount",
        "publicLabel": "数量",
        "description": "大类数"
      },
      {
        "key": "showChildren",
        "prop": "showChildren",
        "label": "子项列",
        "type": "toggle",
        "default": true,
        "publicKey": "showChildren",
        "publicLabel": "子项列"
      },
      {
        "key": "showValue",
        "prop": "showValue",
        "label": "数值标注",
        "type": "toggle",
        "default": true,
        "publicKey": "showValueLabels",
        "publicLabel": "数值标注"
      },
      {
        "key": "showAside",
        "prop": "showAside",
        "label": "装饰文案",
        "type": "toggle",
        "default": true,
        "desc": "根列读数",
        "publicKey": "showAside",
        "publicLabel": "装饰文案",
        "description": "根列读数"
      },
      {
        "key": "labelType",
        "prop": "labelType",
        "label": "标签类型",
        "type": "labelType",
        "default": "数字",
        "publicKey": "labelType",
        "publicLabel": "标签类型"
      },
      {
        "key": "focus",
        "prop": "focus",
        "label": "重点信息 Focus",
        "type": "focus",
        "default": true,
        "publicKey": "focus",
        "publicLabel": "重点信息 Focus"
      },
      {
        "key": "focusIndex",
        "prop": "focusIndex",
        "label": "焦点序号",
        "type": "slider",
        "default": 0,
        "min": 0,
        "step": 1,
        "publicKey": "focusIndex",
        "publicLabel": "焦点序号"
      }
    ],
    "defaultProps": {
      "itemCount": 5,
      "showChildren": true,
      "showValue": true,
      "focus": true,
      "focusIndex": 0,
      "labelType": "number",
      "showAside": true,
      "rootLabel": "全年总额",
      "rootValue": "970",
      "unit": "亿$",
      "head": {
        "no": "10",
        "en": "Icicle · Hierarchy",
        "cn": "公司版图 · 层级冰柱"
      },
      "groups": [
        {
          "label": "大模型",
          "sub": "Foundation",
          "value": 43.3,
          "children": [
            {
              "label": "基础模型",
              "value": 24
            },
            {
              "label": "多模态",
              "value": 11.3
            },
            {
              "label": "智能体",
              "value": 8
            }
          ]
        },
        {
          "label": "算力基建",
          "sub": "Compute",
          "value": 18,
          "children": [
            {
              "label": "芯片",
              "value": 8
            },
            {
              "label": "云/数据中心",
              "value": 7
            },
            {
              "label": "网络",
              "value": 3
            }
          ]
        },
        {
          "label": "应用层",
          "sub": "Applications",
          "value": 16,
          "children": [
            {
              "label": "企业应用",
              "value": 7
            },
            {
              "label": "消费",
              "value": 5
            },
            {
              "label": "行业垂直",
              "value": 4
            }
          ]
        },
        {
          "label": "企业服务",
          "sub": "Enterprise",
          "value": 12,
          "children": [
            {
              "label": "安全",
              "value": 5
            },
            {
              "label": "数据",
              "value": 4
            },
            {
              "label": "运维",
              "value": 3
            }
          ]
        },
        {
          "label": "其他赛道",
          "sub": "Others",
          "value": 10.7,
          "children": [
            {
              "label": "机器人",
              "value": 4
            },
            {
              "label": "医疗 AI",
              "value": 3.7
            },
            {
              "label": "自动驾驶",
              "value": 3
            }
          ]
        }
      ]
    }
  },
  {
    "key": "theme09_page074",
    "themeKey": "theme09",
    "pageNumber": 74,
    "layout": "THEME09-074",
    "slot": "exhibit",
    "label": "陈列墙",
    "bgClass": "bg-blue",
    "controls": [
      {
        "key": "imgCount",
        "prop": "imgCount",
        "label": "图片槽数量",
        "type": "slider",
        "default": 3,
        "min": 2,
        "max": 4,
        "step": 1,
        "publicKey": "imgCount",
        "publicLabel": "图片槽数量"
      },
      {
        "key": "matStyle",
        "prop": "matStyle",
        "label": "裱衬色",
        "type": "radio",
        "default": "浅裱",
        "options": [
          "浅裱",
          "深裱"
        ],
        "publicKey": "matStyle",
        "publicLabel": "裱衬色"
      },
      {
        "key": "showPlacard",
        "prop": "showPlacard",
        "label": "装饰文案",
        "type": "toggle",
        "default": true,
        "desc": "展签牌",
        "publicKey": "showPlacard",
        "publicLabel": "装饰文案",
        "description": "展签牌"
      },
      {
        "key": "labelType",
        "prop": "labelType",
        "label": "标签类型",
        "type": "labelType",
        "default": "数字",
        "publicKey": "labelType",
        "publicLabel": "标签类型"
      },
      {
        "key": "focus",
        "prop": "focus",
        "label": "重点信息 Focus",
        "type": "focus",
        "default": true,
        "publicKey": "focus",
        "publicLabel": "重点信息 Focus"
      },
      {
        "key": "focusIndex",
        "prop": "focusIndex",
        "label": "焦点序号",
        "type": "slider",
        "default": 0,
        "min": 0,
        "step": 1,
        "publicKey": "focusIndex",
        "publicLabel": "焦点序号"
      }
    ],
    "defaultProps": {
      "imgCount": 3,
      "matStyle": "浅裱",
      "showPlacard": true,
      "focus": true,
      "focusIndex": 0,
      "labelType": "number",
      "head": {
        "no": "陈列",
        "en": "Exhibit · Gallery Wall",
        "cn": "代表企业陈列墙"
      },
      "works": [
        {
          "title": "前沿大模型",
          "medium": "Foundation Model · 旗舰"
        },
        {
          "title": "算力基础设施",
          "medium": "Compute Infrastructure"
        },
        {
          "title": "垂直应用层",
          "medium": "Vertical Applications"
        },
        {
          "title": "企业级服务",
          "medium": "Enterprise Software"
        }
      ]
    }
  },
  {
    "key": "theme09_page075",
    "themeKey": "theme09",
    "pageNumber": 75,
    "layout": "THEME09-075",
    "slot": "filmstrip",
    "label": "影像长卷",
    "bgClass": "bg-night",
    "controls": [
      {
        "key": "imgCount",
        "prop": "imgCount",
        "label": "图片槽数量",
        "type": "slider",
        "default": 5,
        "min": 0,
        "max": 6,
        "step": 1,
        "publicKey": "imgCount",
        "publicLabel": "图片槽数量"
      },
      {
        "key": "tagCount",
        "prop": "tagCount",
        "label": "数量",
        "type": "slider",
        "default": 3,
        "min": 0,
        "max": 5,
        "step": 1,
        "desc": "走带标签",
        "publicKey": "tagCount",
        "publicLabel": "数量",
        "description": "走带标签"
      },
      {
        "key": "showSprockets",
        "prop": "showSprockets",
        "label": "齿孔带",
        "type": "toggle",
        "default": true,
        "publicKey": "showSprockets",
        "publicLabel": "齿孔带"
      },
      {
        "key": "showCaption",
        "prop": "showCaption",
        "label": "装饰文案",
        "type": "toggle",
        "default": true,
        "desc": "帧号 + 标签",
        "publicKey": "showCaption",
        "publicLabel": "装饰文案",
        "description": "帧号 + 标签"
      },
      {
        "key": "focus",
        "prop": "focus",
        "label": "重点信息 Focus",
        "type": "focus",
        "default": true,
        "publicKey": "focus",
        "publicLabel": "重点信息 Focus"
      },
      {
        "key": "focusIndex",
        "prop": "focusIndex",
        "label": "焦点序号",
        "type": "slider",
        "default": 0,
        "min": 0,
        "step": 1,
        "publicKey": "focusIndex",
        "publicLabel": "焦点序号"
      }
    ],
    "defaultProps": {
      "imgCount": 5,
      "maxH": 520,
      "showSprockets": true,
      "showCaption": true,
      "tagCount": 3,
      "focus": true,
      "focusIndex": 0,
      "kicker": "REEL · 影像走带",
      "title": "年度影像长卷",
      "titleEN": "The 2024 Reel",
      "reel": "REEL 2024 · 24 FPS · AI CAPITAL",
      "tags": [
        "启动",
        "加速",
        "竞速",
        "收束",
        "回望"
      ]
    }
  },
  {
    "key": "theme09_page076",
    "themeKey": "theme09",
    "pageNumber": 76,
    "layout": "THEME09-076",
    "slot": "waterfall",
    "label": "10 资金瀑布",
    "bgClass": "bg-blue",
    "controls": [
      {
        "key": "itemCount",
        "prop": "itemCount",
        "label": "数量",
        "type": "slider",
        "default": 6,
        "min": 3,
        "max": 6,
        "step": 1,
        "publicKey": "itemCount",
        "publicLabel": "数量"
      },
      {
        "key": "showConnector",
        "prop": "showConnector",
        "label": "连接线",
        "type": "toggle",
        "default": true,
        "publicKey": "showConnector",
        "publicLabel": "连接线"
      },
      {
        "key": "showTotal",
        "prop": "showTotal",
        "label": "合计柱",
        "type": "toggle",
        "default": true,
        "publicKey": "showTotal",
        "publicLabel": "合计柱"
      },
      {
        "key": "showAside",
        "prop": "showAside",
        "label": "装饰文案",
        "type": "toggle",
        "default": true,
        "publicKey": "showAside",
        "publicLabel": "装饰文案"
      },
      {
        "key": "labelType",
        "prop": "labelType",
        "label": "标签类型",
        "type": "labelType",
        "default": "数字",
        "publicKey": "labelType",
        "publicLabel": "标签类型"
      },
      {
        "key": "focus",
        "prop": "focus",
        "label": "重点信息 Focus",
        "type": "focus",
        "default": true,
        "publicKey": "focus",
        "publicLabel": "重点信息 Focus"
      },
      {
        "key": "focusIndex",
        "prop": "focusIndex",
        "label": "焦点序号",
        "type": "slider",
        "default": 0,
        "min": 0,
        "step": 1,
        "publicKey": "focusIndex",
        "publicLabel": "焦点序号"
      }
    ],
    "defaultProps": {
      "itemCount": 6,
      "showConnector": true,
      "showTotal": true,
      "focus": true,
      "focusIndex": 0,
      "labelType": "number",
      "showAside": true,
      "badge": "10",
      "unit": "亿美元",
      "items": [
        {
          "cn": "大模型",
          "en": "Foundation",
          "value": 380
        },
        {
          "cn": "AI 基础设施",
          "en": "Infra",
          "value": 170
        },
        {
          "cn": "应用层",
          "en": "Application",
          "value": 150
        },
        {
          "cn": "企业服务",
          "en": "Enterprise",
          "value": 110
        },
        {
          "cn": "数据与算力",
          "en": "Data/Compute",
          "value": 90
        },
        {
          "cn": "其它赛道",
          "en": "Others",
          "value": 70
        }
      ]
    }
  },
  {
    "key": "theme09_page077",
    "themeKey": "theme09",
    "pageNumber": 77,
    "layout": "THEME09-077",
    "slot": "heatmap",
    "label": "10 月度热力",
    "bgClass": "bg-deep",
    "controls": [
      {
        "key": "rowCount",
        "prop": "rowCount",
        "label": "行数量",
        "type": "slider",
        "default": 6,
        "min": 2,
        "max": 6,
        "step": 1,
        "publicKey": "rowCount",
        "publicLabel": "行数量"
      },
      {
        "key": "colCount",
        "prop": "colCount",
        "label": "列数量",
        "type": "slider",
        "default": 12,
        "min": 6,
        "max": 12,
        "step": 1,
        "publicKey": "colCount",
        "publicLabel": "列数量"
      },
      {
        "key": "highlightCol",
        "prop": "highlightCol",
        "label": "高亮列（-1关）",
        "type": "slider",
        "default": -1,
        "min": -1,
        "step": 1,
        "publicKey": "highlightCol",
        "publicLabel": "高亮列（-1关）"
      },
      {
        "key": "showScale",
        "prop": "showScale",
        "label": "色阶图例",
        "type": "toggle",
        "default": true,
        "publicKey": "showScale",
        "publicLabel": "色阶图例"
      },
      {
        "key": "showAside",
        "prop": "showAside",
        "label": "装饰文案",
        "type": "toggle",
        "default": true,
        "publicKey": "showAside",
        "publicLabel": "装饰文案"
      },
      {
        "key": "labelType",
        "prop": "labelType",
        "label": "标签类型",
        "type": "labelType",
        "default": "数字",
        "publicKey": "labelType",
        "publicLabel": "标签类型"
      },
      {
        "key": "focus",
        "prop": "focus",
        "label": "重点信息 Focus",
        "type": "focus",
        "default": true,
        "publicKey": "focus",
        "publicLabel": "重点信息 Focus"
      },
      {
        "key": "focusIndex",
        "prop": "focusIndex",
        "label": "焦点序号",
        "type": "slider",
        "default": 0,
        "min": 0,
        "step": 1,
        "publicKey": "focusIndex",
        "publicLabel": "焦点序号"
      }
    ],
    "defaultProps": {
      "rowCount": 6,
      "colCount": 12,
      "focus": true,
      "focusIndex": 0,
      "highlightCol": -1,
      "showScale": true,
      "labelType": "number",
      "showAside": true,
      "badge": "10",
      "rows": [
        {
          "cn": "大模型",
          "vals": [
            38,
            52,
            60,
            74,
            88,
            92,
            96,
            82,
            70,
            56,
            48,
            40
          ]
        },
        {
          "cn": "AI 基础设施",
          "vals": [
            44,
            50,
            58,
            66,
            72,
            78,
            84,
            80,
            76,
            64,
            58,
            52
          ]
        },
        {
          "cn": "应用层",
          "vals": [
            20,
            28,
            34,
            42,
            55,
            62,
            70,
            66,
            58,
            46,
            38,
            30
          ]
        },
        {
          "cn": "企业服务",
          "vals": [
            30,
            34,
            40,
            46,
            50,
            54,
            58,
            56,
            52,
            48,
            44,
            40
          ]
        },
        {
          "cn": "数据与算力",
          "vals": [
            26,
            30,
            38,
            44,
            48,
            56,
            62,
            60,
            54,
            46,
            40,
            34
          ]
        },
        {
          "cn": "医疗与生物",
          "vals": [
            18,
            22,
            26,
            32,
            38,
            44,
            50,
            48,
            44,
            38,
            32,
            28
          ]
        }
      ]
    }
  },
  {
    "key": "theme09_page078",
    "themeKey": "theme09",
    "pageNumber": 78,
    "layout": "THEME09-078",
    "slot": "calendar",
    "label": "投资日历",
    "bgClass": "bg-blue",
    "controls": [
      {
        "key": "seed",
        "prop": "seed",
        "label": "分布种子",
        "type": "slider",
        "default": 7,
        "min": 1,
        "max": 40,
        "step": 1,
        "desc": "确定性逐日强度",
        "publicKey": "seed",
        "publicLabel": "分布种子",
        "description": "确定性逐日强度"
      },
      {
        "key": "showMonths",
        "prop": "showMonths",
        "label": "月名标注",
        "type": "toggle",
        "default": true,
        "publicKey": "showMonths",
        "publicLabel": "月名标注"
      },
      {
        "key": "showLegend",
        "prop": "showLegend",
        "label": "色阶图例",
        "type": "toggle",
        "default": true,
        "publicKey": "showLegend",
        "publicLabel": "色阶图例"
      },
      {
        "key": "showAside",
        "prop": "showAside",
        "label": "装饰文案",
        "type": "toggle",
        "default": true,
        "desc": "读数面板",
        "publicKey": "showAside",
        "publicLabel": "装饰文案",
        "description": "读数面板"
      },
      {
        "key": "focus",
        "prop": "focus",
        "label": "重点信息 Focus",
        "type": "focus",
        "default": true,
        "publicKey": "focus",
        "publicLabel": "重点信息 Focus"
      },
      {
        "key": "focusIndex",
        "prop": "focusIndex",
        "label": "焦点序号",
        "type": "slider",
        "default": 2,
        "min": 0,
        "max": 11,
        "step": 1,
        "desc": "高亮月份",
        "publicKey": "focusIndex",
        "publicLabel": "焦点序号",
        "description": "高亮月份"
      }
    ],
    "defaultProps": {
      "monthWeight": [
        0.45,
        0.5,
        0.78,
        0.6,
        0.55,
        0.7,
        0.5,
        0.62,
        0.85,
        0.72,
        0.6,
        0.92
      ],
      "seed": 7,
      "year": "2024",
      "showMonths": true,
      "showLegend": true,
      "focus": true,
      "focusIndex": 2,
      "showAside": true,
      "head": {
        "no": "02",
        "en": "Calendar · Deal Heatmap",
        "cn": "投资日历 · 全年逐日热力"
      }
    }
  },
  {
    "key": "theme09_page079",
    "themeKey": "theme09",
    "pageNumber": 79,
    "layout": "THEME09-079",
    "slot": "honeycomb",
    "label": "赛道蜂巢",
    "bgClass": "bg-blue",
    "controls": [
      {
        "key": "itemCount",
        "prop": "itemCount",
        "label": "数量",
        "type": "slider",
        "default": 9,
        "min": 4,
        "max": 10,
        "step": 1,
        "desc": "蜂格数",
        "publicKey": "itemCount",
        "publicLabel": "数量",
        "description": "蜂格数"
      },
      {
        "key": "sort",
        "prop": "sort",
        "label": "排序",
        "type": "radio",
        "default": "降序",
        "options": [
          "降序",
          "原序"
        ],
        "publicKey": "sort",
        "publicLabel": "排序"
      },
      {
        "key": "showValue",
        "prop": "showValue",
        "label": "格内数值",
        "type": "toggle",
        "default": true,
        "publicKey": "showValueLabels",
        "publicLabel": "格内数值"
      },
      {
        "key": "showScale",
        "prop": "showScale",
        "label": "装饰文案",
        "type": "toggle",
        "default": true,
        "desc": "热力色阶",
        "publicKey": "showScale",
        "publicLabel": "装饰文案",
        "description": "热力色阶"
      },
      {
        "key": "showAside",
        "prop": "showAside",
        "label": "读图条",
        "type": "toggle",
        "default": true,
        "publicKey": "showAside",
        "publicLabel": "读图条"
      },
      {
        "key": "labelType",
        "prop": "labelType",
        "label": "标签类型",
        "type": "labelType",
        "default": "数字",
        "publicKey": "labelType",
        "publicLabel": "标签类型"
      },
      {
        "key": "focus",
        "prop": "focus",
        "label": "重点信息 Focus",
        "type": "focus",
        "default": true,
        "publicKey": "focus",
        "publicLabel": "重点信息 Focus"
      },
      {
        "key": "focusIndex",
        "prop": "focusIndex",
        "label": "焦点序号",
        "type": "slider",
        "default": 0,
        "min": 0,
        "step": 1,
        "publicKey": "focusIndex",
        "publicLabel": "焦点序号"
      }
    ],
    "defaultProps": {
      "itemCount": 9,
      "sort": "降序",
      "showValue": true,
      "showScale": true,
      "focus": true,
      "focusIndex": 0,
      "labelType": "number",
      "showAside": true,
      "head": {
        "no": "10",
        "en": "Honeycomb · Cells",
        "cn": "赛道蜂巢 · 热度分布"
      },
      "items": [
        {
          "label": "大模型",
          "sub": "Foundation",
          "value": 43.3,
          "unit": "%"
        },
        {
          "label": "算力",
          "sub": "Compute",
          "value": 18,
          "unit": "%"
        },
        {
          "label": "应用层",
          "sub": "Apps",
          "value": 16,
          "unit": "%"
        },
        {
          "label": "企业服务",
          "sub": "Enterprise",
          "value": 12,
          "unit": "%"
        },
        {
          "label": "机器人",
          "sub": "Robotics",
          "value": 4,
          "unit": "%"
        },
        {
          "label": "医疗 AI",
          "sub": "Health",
          "value": 3.7,
          "unit": "%"
        },
        {
          "label": "自动驾驶",
          "sub": "AV",
          "value": 3,
          "unit": "%"
        },
        {
          "label": "数据",
          "sub": "Data",
          "value": 2.5,
          "unit": "%"
        },
        {
          "label": "安全",
          "sub": "Safety",
          "value": 2,
          "unit": "%"
        },
        {
          "label": "边缘",
          "sub": "Edge",
          "value": 1.5,
          "unit": "%"
        }
      ]
    }
  },
  {
    "key": "theme09_page080",
    "themeKey": "theme09",
    "pageNumber": 80,
    "layout": "THEME09-080",
    "slot": "masonry",
    "label": "瀑布影像",
    "bgClass": "bg-blue",
    "controls": [
      {
        "key": "imgCount",
        "prop": "imgCount",
        "label": "图片槽数量",
        "type": "slider",
        "default": 6,
        "min": 3,
        "max": 8,
        "step": 1,
        "publicKey": "imgCount",
        "publicLabel": "图片槽数量"
      },
      {
        "key": "columns",
        "prop": "columns",
        "label": "列数量",
        "type": "slider",
        "default": 3,
        "min": 2,
        "max": 4,
        "step": 1,
        "publicKey": "columns",
        "publicLabel": "列数量"
      },
      {
        "key": "showCaption",
        "prop": "showCaption",
        "label": "装饰文案",
        "type": "toggle",
        "default": true,
        "desc": "叠印图说",
        "publicKey": "showCaption",
        "publicLabel": "装饰文案",
        "description": "叠印图说"
      },
      {
        "key": "labelType",
        "prop": "labelType",
        "label": "标签类型",
        "type": "labelType",
        "default": "数字",
        "publicKey": "labelType",
        "publicLabel": "标签类型"
      },
      {
        "key": "focus",
        "prop": "focus",
        "label": "重点信息 Focus",
        "type": "focus",
        "default": true,
        "publicKey": "focus",
        "publicLabel": "重点信息 Focus"
      },
      {
        "key": "focusIndex",
        "prop": "focusIndex",
        "label": "焦点序号",
        "type": "slider",
        "default": 0,
        "min": 0,
        "step": 1,
        "publicKey": "focusIndex",
        "publicLabel": "焦点序号"
      }
    ],
    "defaultProps": {
      "imgCount": 6,
      "columns": 3,
      "showCaption": true,
      "focus": true,
      "focusIndex": 0,
      "labelType": "number",
      "head": {
        "no": "10",
        "en": "Masonry · Visual Wall",
        "cn": "瀑布影像 · 群像墙"
      },
      "items": [
        {
          "label": "发布会",
          "sub": "launch"
        },
        {
          "label": "实验室",
          "sub": "lab"
        },
        {
          "label": "创始团队",
          "sub": "founders"
        },
        {
          "label": "数据中心",
          "sub": "data center"
        },
        {
          "label": "用户现场",
          "sub": "on-site"
        },
        {
          "label": "城市夜景",
          "sub": "skyline"
        },
        {
          "label": "路演",
          "sub": "pitch"
        },
        {
          "label": "签约",
          "sub": "signing"
        }
      ]
    }
  },
  {
    "key": "theme09_page081",
    "themeKey": "theme09",
    "pageNumber": 81,
    "layout": "THEME09-081",
    "slot": "phases",
    "label": "阶段时序",
    "bgClass": "bg-blue",
    "controls": [
      {
        "key": "itemCount",
        "prop": "itemCount",
        "label": "数量",
        "type": "slider",
        "default": 6,
        "min": 3,
        "max": 8,
        "step": 1,
        "desc": "阶段数",
        "publicKey": "itemCount",
        "publicLabel": "数量",
        "description": "阶段数"
      },
      {
        "key": "axis",
        "prop": "axis",
        "label": "图表类型",
        "type": "radio",
        "default": "季度",
        "options": [
          "时间段",
          "月度"
        ],
        "publicKey": "axis",
        "publicLabel": "图表类型"
      },
      {
        "key": "showAxis",
        "prop": "showAxis",
        "label": "轴线网格",
        "type": "toggle",
        "default": true,
        "publicKey": "showAxis",
        "publicLabel": "轴线网格"
      },
      {
        "key": "showMilestone",
        "prop": "showMilestone",
        "label": "装饰文案",
        "type": "toggle",
        "default": true,
        "desc": "里程碑菱标",
        "publicKey": "showMilestone",
        "publicLabel": "装饰文案",
        "description": "里程碑菱标"
      },
      {
        "key": "labelType",
        "prop": "labelType",
        "label": "标签类型",
        "type": "labelType",
        "default": "数字",
        "publicKey": "labelType",
        "publicLabel": "标签类型"
      },
      {
        "key": "focus",
        "prop": "focus",
        "label": "重点信息 Focus",
        "type": "focus",
        "default": true,
        "publicKey": "focus",
        "publicLabel": "重点信息 Focus"
      },
      {
        "key": "focusIndex",
        "prop": "focusIndex",
        "label": "焦点序号",
        "type": "slider",
        "default": 0,
        "min": 0,
        "step": 1,
        "publicKey": "focusIndex",
        "publicLabel": "焦点序号"
      }
    ],
    "defaultProps": {
      "itemCount": 6,
      "axis": "季度",
      "showAxis": true,
      "showMilestone": true,
      "focus": true,
      "focusIndex": 0,
      "labelType": "number",
      "head": {
        "no": "08",
        "en": "Phases · 2024",
        "cn": "阶段时序 · 资本节奏"
      },
      "phases": [
        {
          "name": "蓄势观望",
          "sub": "估值消化 · 谨慎",
          "start": 0,
          "end": 3,
          "metric": "低密度"
        },
        {
          "name": "信心修复",
          "sub": "头部率先关账",
          "start": 2,
          "end": 6,
          "metric": "回暖"
        },
        {
          "name": "加速关账",
          "sub": "大额事件密集",
          "start": 5,
          "end": 9,
          "metric": "提速"
        },
        {
          "name": "巅峰竞速",
          "sub": "估值水位抬升",
          "start": 8,
          "end": 12,
          "metric": "白热化"
        },
        {
          "name": "基建并行",
          "sub": "算力长约绑定",
          "start": 4,
          "end": 11,
          "metric": "贯穿全年"
        },
        {
          "name": "垂直崛起",
          "sub": "应用层估值兑现",
          "start": 7,
          "end": 12,
          "metric": "结构性"
        },
        {
          "name": "数据补强",
          "sub": "标注与数据层",
          "start": 3,
          "end": 8,
          "metric": "稳步"
        },
        {
          "name": "安全对齐",
          "sub": "监管与对齐叙事",
          "start": 6,
          "end": 12,
          "metric": "升温"
        }
      ],
      "milestones": [
        {
          "at": 2,
          "text": "OpenAI 要约 · 860 亿$"
        },
        {
          "at": 6,
          "text": "年中信心拐点"
        },
        {
          "at": 10,
          "text": "OpenAI 66 亿$ · 1570 亿估值"
        }
      ]
    }
  },
  {
    "key": "theme09_page082",
    "themeKey": "theme09",
    "pageNumber": 82,
    "layout": "THEME09-082",
    "slot": "journey",
    "label": "影像纪程",
    "bgClass": "bg-deep",
    "controls": [
      {
        "key": "imgCount",
        "prop": "imgCount",
        "label": "图片槽数量",
        "type": "slider",
        "default": 5,
        "min": 3,
        "max": 6,
        "step": 1,
        "desc": "节点数",
        "publicKey": "imgCount",
        "publicLabel": "图片槽数量",
        "description": "节点数"
      },
      {
        "key": "showAxis",
        "prop": "showAxis",
        "label": "装饰文案",
        "type": "toggle",
        "default": true,
        "desc": "轴线 + 节点",
        "publicKey": "showAxis",
        "publicLabel": "装饰文案",
        "description": "轴线 + 节点"
      },
      {
        "key": "labelType",
        "prop": "labelType",
        "label": "标签类型",
        "type": "labelType",
        "default": "数字",
        "publicKey": "labelType",
        "publicLabel": "标签类型"
      },
      {
        "key": "focus",
        "prop": "focus",
        "label": "重点信息 Focus",
        "type": "focus",
        "default": true,
        "publicKey": "focus",
        "publicLabel": "重点信息 Focus"
      },
      {
        "key": "focusIndex",
        "prop": "focusIndex",
        "label": "焦点序号",
        "type": "slider",
        "default": 0,
        "min": 0,
        "step": 1,
        "publicKey": "focusIndex",
        "publicLabel": "焦点序号"
      }
    ],
    "defaultProps": {
      "imgCount": 5,
      "showAxis": true,
      "focus": true,
      "focusIndex": 0,
      "labelType": "number",
      "head": {
        "no": "08",
        "en": "Photo Journey · 2024",
        "cn": "影像纪程 · 资本之年"
      },
      "nodes": [
        {
          "date": "02",
          "caption": "OpenAI 要约收购 · 估值约 860 亿$"
        },
        {
          "date": "05",
          "caption": "xAI B 轮 60 亿$ · 投后 240 亿"
        },
        {
          "date": "06",
          "caption": "Anthropic 获亚马逊追加战略投资"
        },
        {
          "date": "09",
          "caption": "Databricks J 轮约 100 亿$"
        },
        {
          "date": "10",
          "caption": "OpenAI 新一轮 66 亿$ · 估值 1570 亿"
        },
        {
          "date": "12",
          "caption": "Safe SI 种子轮即募 10 亿$"
        }
      ]
    }
  },
  {
    "key": "theme09_page083",
    "themeKey": "theme09",
    "pageNumber": 83,
    "layout": "THEME09-083",
    "slot": "slope",
    "label": "10 排名变迁",
    "bgClass": "bg-blue",
    "controls": [
      {
        "key": "itemCount",
        "prop": "itemCount",
        "label": "数量",
        "type": "slider",
        "default": 8,
        "min": 3,
        "max": 8,
        "step": 1,
        "publicKey": "itemCount",
        "publicLabel": "数量"
      },
      {
        "key": "showValue",
        "prop": "showValue",
        "label": "数值标签",
        "type": "toggle",
        "default": true,
        "publicKey": "showValueLabels",
        "publicLabel": "数值标签"
      },
      {
        "key": "showAside",
        "prop": "showAside",
        "label": "装饰文案",
        "type": "toggle",
        "default": true,
        "publicKey": "showAside",
        "publicLabel": "装饰文案"
      },
      {
        "key": "labelType",
        "prop": "labelType",
        "label": "标签类型",
        "type": "labelType",
        "default": "数字",
        "publicKey": "labelType",
        "publicLabel": "标签类型"
      },
      {
        "key": "focus",
        "prop": "focus",
        "label": "重点信息 Focus",
        "type": "focus",
        "default": true,
        "publicKey": "focus",
        "publicLabel": "重点信息 Focus"
      },
      {
        "key": "focusIndex",
        "prop": "focusIndex",
        "label": "焦点序号",
        "type": "slider",
        "default": 0,
        "min": 0,
        "step": 1,
        "publicKey": "focusIndex",
        "publicLabel": "焦点序号"
      }
    ],
    "defaultProps": {
      "itemCount": 8,
      "showValue": true,
      "focus": true,
      "focusIndex": 0,
      "labelType": "number",
      "showAside": true,
      "periodLeft": "2023",
      "periodRight": "2024",
      "unit": "亿$",
      "badge": "10",
      "items": [
        {
          "cn": "大模型",
          "left": 210,
          "right": 420
        },
        {
          "cn": "AI 基础设施",
          "left": 95,
          "right": 180
        },
        {
          "cn": "应用层",
          "left": 60,
          "right": 150
        },
        {
          "cn": "企业服务",
          "left": 88,
          "right": 110
        },
        {
          "cn": "数据与算力",
          "left": 55,
          "right": 90
        },
        {
          "cn": "自动驾驶",
          "left": 120,
          "right": 75
        },
        {
          "cn": "医疗与生物",
          "left": 70,
          "right": 88
        },
        {
          "cn": "机器人",
          "left": 25,
          "right": 70
        }
      ]
    }
  },
  {
    "key": "theme09_page084",
    "themeKey": "theme09",
    "pageNumber": 84,
    "layout": "THEME09-084",
    "slot": "dumbbell",
    "label": "区间对比",
    "bgClass": "bg-deep",
    "controls": [
      {
        "key": "itemCount",
        "prop": "itemCount",
        "label": "行数量",
        "type": "slider",
        "default": 6,
        "min": 3,
        "max": 7,
        "step": 1,
        "publicKey": "itemCount",
        "publicLabel": "行数量"
      },
      {
        "key": "sort",
        "prop": "sort",
        "label": "排序",
        "type": "radio",
        "default": "跨度",
        "options": [
          "跨度",
          "止点",
          "原序"
        ],
        "publicKey": "sort",
        "publicLabel": "排序"
      },
      {
        "key": "showValue",
        "prop": "showValue",
        "label": "端点数值",
        "type": "toggle",
        "default": true,
        "publicKey": "showValueLabels",
        "publicLabel": "端点数值"
      },
      {
        "key": "showAside",
        "prop": "showAside",
        "label": "装饰文案",
        "type": "toggle",
        "default": true,
        "desc": "读图条",
        "publicKey": "showAside",
        "publicLabel": "装饰文案",
        "description": "读图条"
      },
      {
        "key": "labelType",
        "prop": "labelType",
        "label": "标签类型",
        "type": "labelType",
        "default": "数字",
        "publicKey": "labelType",
        "publicLabel": "标签类型"
      },
      {
        "key": "focus",
        "prop": "focus",
        "label": "重点信息 Focus",
        "type": "focus",
        "default": true,
        "publicKey": "focus",
        "publicLabel": "重点信息 Focus"
      },
      {
        "key": "focusIndex",
        "prop": "focusIndex",
        "label": "焦点序号",
        "type": "slider",
        "default": 0,
        "min": 0,
        "step": 1,
        "publicKey": "focusIndex",
        "publicLabel": "焦点序号"
      }
    ],
    "defaultProps": {
      "itemCount": 6,
      "endLabels": [
        "2023",
        "2024"
      ],
      "sort": "跨度",
      "showValue": true,
      "focus": true,
      "focusIndex": 0,
      "labelType": "number",
      "showAside": true,
      "unit": "亿$",
      "head": {
        "no": "08",
        "en": "Dumbbell · Range",
        "cn": "融资区间 · 同比跨度"
      },
      "items": [
        {
          "label": "大模型",
          "a": 210,
          "b": 610,
          "sub": "Foundation"
        },
        {
          "label": "算力基建",
          "a": 130,
          "b": 370,
          "sub": "Compute"
        },
        {
          "label": "应用层",
          "a": 90,
          "b": 190,
          "sub": "Apps"
        },
        {
          "label": "企业服务",
          "a": 60,
          "b": 120,
          "sub": "Enterprise"
        },
        {
          "label": "数据 / 安全",
          "a": 48,
          "b": 96,
          "sub": "Data & Safety"
        },
        {
          "label": "机器人",
          "a": 70,
          "b": 55,
          "sub": "Robotics"
        },
        {
          "label": "医疗 AI",
          "a": 42,
          "b": 74,
          "sub": "Health"
        }
      ]
    }
  },
  {
    "key": "theme09_page085",
    "themeKey": "theme09",
    "pageNumber": 85,
    "layout": "THEME09-085",
    "slot": "gauge",
    "label": "10 景气仪表",
    "bgClass": "bg-deep",
    "controls": [
      {
        "key": "itemCount",
        "prop": "itemCount",
        "label": "数量",
        "type": "slider",
        "default": 4,
        "min": 2,
        "max": 4,
        "step": 1,
        "publicKey": "itemCount",
        "publicLabel": "数量"
      },
      {
        "key": "gaugeStyle",
        "prop": "gaugeStyle",
        "label": "图表类型",
        "type": "radio",
        "default": "半环",
        "options": [
          "半环",
          "整环"
        ],
        "publicKey": "gaugeStyle",
        "publicLabel": "图表类型"
      },
      {
        "key": "showAside",
        "prop": "showAside",
        "label": "装饰文案",
        "type": "toggle",
        "default": true,
        "publicKey": "showAside",
        "publicLabel": "装饰文案"
      },
      {
        "key": "labelType",
        "prop": "labelType",
        "label": "标签类型",
        "type": "labelType",
        "default": "数字",
        "publicKey": "labelType",
        "publicLabel": "标签类型"
      },
      {
        "key": "focus",
        "prop": "focus",
        "label": "重点信息 Focus",
        "type": "focus",
        "default": true,
        "publicKey": "focus",
        "publicLabel": "重点信息 Focus"
      },
      {
        "key": "focusIndex",
        "prop": "focusIndex",
        "label": "焦点序号",
        "type": "slider",
        "default": 0,
        "min": 0,
        "step": 1,
        "publicKey": "focusIndex",
        "publicLabel": "焦点序号"
      }
    ],
    "defaultProps": {
      "itemCount": 4,
      "gaugeStyle": "半环",
      "focus": true,
      "focusIndex": 0,
      "labelType": "number",
      "showAside": true,
      "badge": "10",
      "items": [
        {
          "cn": "市场景气度",
          "en": "Sentiment",
          "value": 78,
          "note": "资本情绪偏热",
          "tone": "acc"
        },
        {
          "cn": "资本活跃度",
          "en": "Activity",
          "value": 86,
          "note": "交易频次创高",
          "tone": "acc"
        },
        {
          "cn": "估值泡沫度",
          "en": "Valuation",
          "value": 64,
          "note": "需警惕回调",
          "tone": "warn"
        },
        {
          "cn": "退出预期",
          "en": "Exit Window",
          "value": 52,
          "note": "IPO 窗口临近",
          "tone": "acc"
        }
      ]
    }
  },
  {
    "key": "theme09_page086",
    "themeKey": "theme09",
    "pageNumber": 86,
    "layout": "THEME09-086",
    "slot": "scoreboard",
    "label": "年度计分榜",
    "bgClass": "bg-blue",
    "controls": [
      {
        "key": "itemCount",
        "prop": "itemCount",
        "label": "数量",
        "type": "slider",
        "default": 4,
        "min": 2,
        "max": 5,
        "step": 1,
        "publicKey": "itemCount",
        "publicLabel": "数量"
      },
      {
        "key": "showDelta",
        "prop": "showDelta",
        "label": "同比片",
        "type": "toggle",
        "default": true,
        "publicKey": "showDelta",
        "publicLabel": "同比片"
      },
      {
        "key": "showScan",
        "prop": "showScan",
        "label": "装饰文案",
        "type": "toggle",
        "default": true,
        "desc": "LED 扫描线质感",
        "publicKey": "showScan",
        "publicLabel": "装饰文案",
        "description": "LED 扫描线质感"
      },
      {
        "key": "labelType",
        "prop": "labelType",
        "label": "标签类型",
        "type": "labelType",
        "default": "数字",
        "publicKey": "labelType",
        "publicLabel": "标签类型"
      },
      {
        "key": "focus",
        "prop": "focus",
        "label": "重点信息 Focus",
        "type": "focus",
        "default": true,
        "publicKey": "focus",
        "publicLabel": "重点信息 Focus"
      },
      {
        "key": "focusIndex",
        "prop": "focusIndex",
        "label": "焦点序号",
        "type": "slider",
        "default": 0,
        "min": 0,
        "step": 1,
        "publicKey": "focusIndex",
        "publicLabel": "焦点序号"
      }
    ],
    "defaultProps": {
      "itemCount": 4,
      "showDelta": true,
      "showScan": true,
      "focus": true,
      "focusIndex": 0,
      "labelType": "number",
      "banner": {
        "tag": "SEASON 2024",
        "title": "资本计分榜 · 关键指标终盘"
      },
      "head": {
        "no": "数字",
        "en": "Scoreboard · Final Tally",
        "cn": "年度计分榜"
      },
      "stats": [
        {
          "value": "970",
          "unit": "亿$",
          "label": "全年 AI 风投",
          "sub": "历史新高",
          "delta": "+71%"
        },
        {
          "value": "97",
          "unit": "笔",
          "label": "≥1 亿美元事件",
          "sub": "mega-rounds",
          "delta": "+38%"
        },
        {
          "value": "43.3",
          "unit": "%",
          "label": "大模型赛道占比",
          "sub": "最大权重",
          "delta": "+9.1pt"
        },
        {
          "value": "63.9",
          "unit": "%",
          "label": "旧金山湾区占比",
          "sub": "地理集中",
          "delta": "+4.4pt"
        },
        {
          "value": "10",
          "unit": "亿$",
          "label": "单笔平均规模",
          "sub": "avg / deal",
          "delta": "+22%"
        }
      ]
    }
  },
  {
    "key": "theme09_page087",
    "themeKey": "theme09",
    "pageNumber": 87,
    "layout": "THEME09-087",
    "slot": "cards",
    "label": "影像卡集",
    "bgClass": "bg-blue",
    "controls": [
      {
        "key": "cardCount",
        "prop": "cardCount",
        "label": "图片槽数量",
        "type": "slider",
        "default": 3,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "图卡数",
        "publicKey": "cardCount",
        "publicLabel": "图片槽数量",
        "description": "图卡数"
      },
      {
        "key": "showCaption",
        "prop": "showCaption",
        "label": "装饰文案",
        "type": "toggle",
        "default": true,
        "desc": "卡面叠印标题/图说",
        "publicKey": "showCaption",
        "publicLabel": "装饰文案",
        "description": "卡面叠印标题/图说"
      },
      {
        "key": "labelType",
        "prop": "labelType",
        "label": "标签类型",
        "type": "labelType",
        "default": "数字",
        "publicKey": "labelType",
        "publicLabel": "标签类型"
      },
      {
        "key": "focus",
        "prop": "focus",
        "label": "重点信息 Focus",
        "type": "focus",
        "default": true,
        "publicKey": "focus",
        "publicLabel": "重点信息 Focus"
      },
      {
        "key": "focusIndex",
        "prop": "focusIndex",
        "label": "焦点序号",
        "type": "slider",
        "default": 0,
        "min": 0,
        "step": 1,
        "publicKey": "focusIndex",
        "publicLabel": "焦点序号"
      }
    ],
    "defaultProps": {
      "cardCount": 3,
      "showCaption": true,
      "focus": true,
      "focusIndex": 0,
      "labelType": "number",
      "head": {
        "no": "10",
        "en": "Image Cards",
        "cn": "影像卡集 · 赛道掠影"
      },
      "cards": [
        {
          "title": "算力基建",
          "caption": "卖铲子的人 —— 锁定长约与稀缺算力的中游赢家"
        },
        {
          "title": "头部大模型",
          "caption": "淘金的人 —— 估值押注未来，想象与风险并存"
        },
        {
          "title": "垂直应用",
          "caption": "卖水的人 —— 嵌入工作流、拿到续约的稳健下注"
        },
        {
          "title": "数据与工具",
          "caption": "修路的人 —— 支撑模型迭代的隐形基础层"
        }
      ]
    }
  },
  {
    "key": "theme09_page088",
    "themeKey": "theme09",
    "pageNumber": 88,
    "layout": "THEME09-088",
    "slot": "halfhero",
    "label": "跨栏图景",
    "bgClass": "bg-deep",
    "controls": [
      {
        "key": "colCount",
        "prop": "colCount",
        "label": "数量",
        "type": "slider",
        "default": 3,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "下半栏列数",
        "publicKey": "colCount",
        "publicLabel": "数量",
        "description": "下半栏列数"
      },
      {
        "key": "titlePos",
        "prop": "titlePos",
        "label": "图片位置",
        "type": "radio",
        "default": "左",
        "options": [
          "左",
          "居中"
        ],
        "desc": "大图上标题位置",
        "publicKey": "titlePos",
        "publicLabel": "图片位置",
        "description": "大图上标题位置"
      },
      {
        "key": "showScrim",
        "prop": "showScrim",
        "label": "装饰文案",
        "type": "toggle",
        "default": true,
        "desc": "大图压暗层",
        "publicKey": "showScrim",
        "publicLabel": "装饰文案",
        "description": "大图压暗层"
      },
      {
        "key": "labelType",
        "prop": "labelType",
        "label": "标签类型",
        "type": "labelType",
        "default": "数字",
        "publicKey": "labelType",
        "publicLabel": "标签类型"
      },
      {
        "key": "focus",
        "prop": "focus",
        "label": "重点信息 Focus",
        "type": "focus",
        "default": true,
        "publicKey": "focus",
        "publicLabel": "重点信息 Focus"
      },
      {
        "key": "focusIndex",
        "prop": "focusIndex",
        "label": "焦点序号",
        "type": "slider",
        "default": 0,
        "min": 0,
        "step": 1,
        "publicKey": "focusIndex",
        "publicLabel": "焦点序号"
      }
    ],
    "defaultProps": {
      "colCount": 3,
      "titlePos": "左",
      "showScrim": true,
      "focus": true,
      "focusIndex": 0,
      "labelType": "number",
      "badge": "02",
      "kicker": "COVER STORY · 跨栏",
      "title": "资本涌向算力与模型",
      "titleEN": "Where the money went",
      "cols": [
        {
          "label": "大模型",
          "text": "占全年大额融资约 43.3%，单笔金额屡创新高，赢家通吃。"
        },
        {
          "label": "基础设施",
          "text": "算力与数据中游率先兑现现金流，成为更稳的下注。"
        },
        {
          "label": "垂直应用",
          "text": "能嵌入工作流、拿到续约的应用层，估值开始被重估。"
        },
        {
          "label": "安全对齐",
          "text": "监管与对齐叙事升温，安全成为稀缺的差异化资产。"
        }
      ]
    }
  },
  {
    "key": "theme09_page089",
    "themeKey": "theme09",
    "pageNumber": 89,
    "layout": "THEME09-089",
    "slot": "trend",
    "label": "10 季度走势",
    "bgClass": "bg-blue",
    "controls": [
      {
        "key": "seriesCount",
        "prop": "seriesCount",
        "label": "数量",
        "type": "slider",
        "default": 4,
        "min": 2,
        "max": 4,
        "step": 1,
        "publicKey": "seriesCount",
        "publicLabel": "数量"
      },
      {
        "key": "chartType",
        "prop": "chartType",
        "label": "图表类型",
        "type": "radio",
        "default": "折线",
        "options": [
          "折线",
          "面积"
        ],
        "publicKey": "chartType",
        "publicLabel": "图表类型"
      },
      {
        "key": "showLegend",
        "prop": "showLegend",
        "label": "图例",
        "type": "toggle",
        "default": true,
        "publicKey": "showLegend",
        "publicLabel": "图例"
      },
      {
        "key": "showAside",
        "prop": "showAside",
        "label": "装饰文案",
        "type": "toggle",
        "default": true,
        "publicKey": "showAside",
        "publicLabel": "装饰文案"
      },
      {
        "key": "labelType",
        "prop": "labelType",
        "label": "标签类型",
        "type": "labelType",
        "default": "数字",
        "publicKey": "labelType",
        "publicLabel": "标签类型"
      },
      {
        "key": "focus",
        "prop": "focus",
        "label": "重点信息 Focus",
        "type": "focus",
        "default": true,
        "publicKey": "focus",
        "publicLabel": "重点信息 Focus"
      },
      {
        "key": "focusIndex",
        "prop": "focusIndex",
        "label": "焦点序号",
        "type": "slider",
        "default": 0,
        "min": 0,
        "step": 1,
        "publicKey": "focusIndex",
        "publicLabel": "焦点序号"
      }
    ],
    "defaultProps": {
      "seriesCount": 4,
      "chartType": "折线",
      "showLegend": true,
      "focus": true,
      "focusIndex": 0,
      "labelType": "number",
      "showAside": true,
      "badge": "10",
      "unit": "亿$",
      "xLabels": [
        "23Q1",
        "23Q2",
        "23Q3",
        "23Q4",
        "24Q1",
        "24Q2",
        "24Q3",
        "24Q4"
      ],
      "series": [
        {
          "cn": "大模型",
          "vals": [
            42,
            55,
            68,
            75,
            96,
            118,
            132,
            128
          ]
        },
        {
          "cn": "AI 基础设施",
          "vals": [
            30,
            36,
            44,
            48,
            58,
            66,
            74,
            78
          ]
        },
        {
          "cn": "应用层",
          "vals": [
            14,
            20,
            26,
            30,
            40,
            52,
            60,
            58
          ]
        },
        {
          "cn": "企业服务",
          "vals": [
            22,
            26,
            30,
            33,
            38,
            42,
            46,
            44
          ]
        }
      ]
    }
  },
  {
    "key": "theme09_page090",
    "themeKey": "theme09",
    "pageNumber": 90,
    "layout": "THEME09-090",
    "slot": "ridge",
    "label": "单笔分布",
    "bgClass": "bg-deep",
    "controls": [
      {
        "key": "itemCount",
        "prop": "itemCount",
        "label": "数量",
        "type": "slider",
        "default": 8,
        "min": 4,
        "max": 8,
        "step": 1,
        "desc": "行数",
        "publicKey": "itemCount",
        "publicLabel": "数量",
        "description": "行数"
      },
      {
        "key": "bins",
        "prop": "bins",
        "label": "采样点数",
        "type": "slider",
        "default": 15,
        "min": 11,
        "max": 19,
        "step": 2,
        "desc": "曲线平滑度",
        "publicKey": "bins",
        "publicLabel": "采样点数",
        "description": "曲线平滑度"
      },
      {
        "key": "seed",
        "prop": "seed",
        "label": "形态种子",
        "type": "slider",
        "default": 5,
        "min": 1,
        "max": 30,
        "step": 1,
        "publicKey": "seed",
        "publicLabel": "形态种子"
      },
      {
        "key": "showAxis",
        "prop": "showAxis",
        "label": "横轴刻度",
        "type": "toggle",
        "default": true,
        "publicKey": "showAxis",
        "publicLabel": "横轴刻度"
      },
      {
        "key": "showAside",
        "prop": "showAside",
        "label": "装饰文案",
        "type": "toggle",
        "default": true,
        "desc": "演进解读",
        "publicKey": "showAside",
        "publicLabel": "装饰文案",
        "description": "演进解读"
      },
      {
        "key": "labelType",
        "prop": "labelType",
        "label": "标签类型",
        "type": "labelType",
        "default": "数字",
        "publicKey": "labelType",
        "publicLabel": "标签类型"
      },
      {
        "key": "focus",
        "prop": "focus",
        "label": "重点信息 Focus",
        "type": "focus",
        "default": true,
        "publicKey": "focus",
        "publicLabel": "重点信息 Focus"
      },
      {
        "key": "focusIndex",
        "prop": "focusIndex",
        "label": "焦点序号",
        "type": "slider",
        "default": 7,
        "min": 0,
        "step": 1,
        "publicKey": "focusIndex",
        "publicLabel": "焦点序号"
      }
    ],
    "defaultProps": {
      "itemCount": 8,
      "bins": 15,
      "seed": 5,
      "showAxis": true,
      "focus": true,
      "focusIndex": 7,
      "labelType": "number",
      "showAside": true,
      "head": {
        "no": "10",
        "en": "Ridgeline · Distribution",
        "cn": "单笔分布 · 山脊演进"
      },
      "axisTicks": [
        "$0.5亿",
        "$1亿",
        "$2亿",
        "$5亿",
        "$10亿",
        "$20亿",
        "≥$30亿"
      ],
      "rows": [
        {
          "label": "23 Q1",
          "peak": 0.28,
          "amp": 0.62
        },
        {
          "label": "23 Q2",
          "peak": 0.34,
          "amp": 0.66
        },
        {
          "label": "23 Q3",
          "peak": 0.4,
          "amp": 0.7
        },
        {
          "label": "23 Q4",
          "peak": 0.46,
          "amp": 0.74
        },
        {
          "label": "24 Q1",
          "peak": 0.54,
          "amp": 0.8
        },
        {
          "label": "24 Q2",
          "peak": 0.6,
          "amp": 0.86
        },
        {
          "label": "24 Q3",
          "peak": 0.66,
          "amp": 0.92
        },
        {
          "label": "24 Q4",
          "peak": 0.72,
          "amp": 1
        }
      ]
    }
  },
  {
    "key": "theme09_page091",
    "themeKey": "theme09",
    "pageNumber": 91,
    "layout": "THEME09-091",
    "slot": "fan",
    "label": "预测扇形",
    "bgClass": "bg-deep",
    "controls": [
      {
        "key": "showBand",
        "prop": "showBand",
        "label": "置信带",
        "type": "toggle",
        "default": true,
        "publicKey": "showBand",
        "publicLabel": "置信带"
      },
      {
        "key": "showMedian",
        "prop": "showMedian",
        "label": "预测中值",
        "type": "toggle",
        "default": true,
        "publicKey": "showMedian",
        "publicLabel": "预测中值"
      },
      {
        "key": "showGrid",
        "prop": "showGrid",
        "label": "网格刻度",
        "type": "toggle",
        "default": true,
        "publicKey": "showGrid",
        "publicLabel": "网格刻度"
      },
      {
        "key": "showAside",
        "prop": "showAside",
        "label": "装饰文案",
        "type": "toggle",
        "default": true,
        "desc": "读图条",
        "publicKey": "showAside",
        "publicLabel": "装饰文案",
        "description": "读图条"
      },
      {
        "key": "focus",
        "prop": "focus",
        "label": "重点信息 Focus",
        "type": "focus",
        "default": true,
        "publicKey": "focus",
        "publicLabel": "重点信息 Focus"
      },
      {
        "key": "focusIndex",
        "prop": "focusIndex",
        "label": "焦点序号",
        "type": "slider",
        "default": 2,
        "min": 0,
        "max": 2,
        "step": 1,
        "desc": "标注第几个预测年",
        "publicKey": "focusIndex",
        "publicLabel": "焦点序号",
        "description": "标注第几个预测年"
      }
    ],
    "defaultProps": {
      "showBand": true,
      "showMedian": true,
      "showGrid": true,
      "focus": true,
      "focusIndex": 2,
      "showAside": true,
      "unit": "亿$",
      "head": {
        "no": "07",
        "en": "Fan · Forecast",
        "cn": "资本展望 · 不确定性锥"
      },
      "hist": [
        {
          "x": "2019",
          "v": 120
        },
        {
          "x": "2020",
          "v": 180
        },
        {
          "x": "2021",
          "v": 340
        },
        {
          "x": "2022",
          "v": 300
        },
        {
          "x": "2023",
          "v": 560
        },
        {
          "x": "2024",
          "v": 970
        }
      ],
      "forecast": [
        {
          "x": "2025",
          "mid": 1180,
          "lo": 1040,
          "hi": 1340
        },
        {
          "x": "2026",
          "mid": 1380,
          "lo": 1080,
          "hi": 1720
        },
        {
          "x": "2027",
          "mid": 1560,
          "lo": 1100,
          "hi": 2080
        }
      ]
    }
  },
  {
    "key": "theme09_page092",
    "themeKey": "theme09",
    "pageNumber": 92,
    "layout": "THEME09-092",
    "slot": "plans",
    "label": "方案对照",
    "bgClass": "bg-deep",
    "controls": [
      {
        "key": "planCount",
        "prop": "planCount",
        "label": "列数量",
        "type": "slider",
        "default": 3,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "方案数",
        "publicKey": "planCount",
        "publicLabel": "列数量",
        "description": "方案数"
      },
      {
        "key": "rowCount",
        "prop": "rowCount",
        "label": "行数量",
        "type": "slider",
        "default": 5,
        "min": 2,
        "max": 6,
        "step": 1,
        "desc": "维度数",
        "publicKey": "rowCount",
        "publicLabel": "行数量",
        "description": "维度数"
      },
      {
        "key": "showBadge",
        "prop": "showBadge",
        "label": "装饰文案",
        "type": "toggle",
        "default": true,
        "desc": "推荐徽标",
        "publicKey": "showBadge",
        "publicLabel": "装饰文案",
        "description": "推荐徽标"
      },
      {
        "key": "focus",
        "prop": "focus",
        "label": "重点信息 Focus",
        "type": "focus",
        "default": true,
        "publicKey": "focus",
        "publicLabel": "重点信息 Focus"
      },
      {
        "key": "focusIndex",
        "prop": "focusIndex",
        "label": "焦点序号",
        "type": "slider",
        "default": 0,
        "min": 0,
        "step": 1,
        "publicKey": "focusIndex",
        "publicLabel": "焦点序号"
      }
    ],
    "defaultProps": {
      "planCount": 3,
      "rowCount": 5,
      "showBadge": true,
      "focus": true,
      "focusIndex": 0,
      "rowHeader": "对照维度",
      "note": "为研究性主观判断；「推荐」指在当前风险偏好下的相对优选，不构成投资建议。",
      "head": {
        "no": "13",
        "en": "Options",
        "cn": "配置方案对照"
      },
      "attributes": [
        {
          "label": "现金流确定性"
        },
        {
          "label": "成长空间"
        },
        {
          "label": "估值泡沫"
        },
        {
          "label": "已验证 PMF"
        },
        {
          "label": "流动性"
        },
        {
          "label": "适配风险偏好"
        }
      ],
      "plans": [
        {
          "name": "稳健配置",
          "sub": "Infra-led",
          "tag": "低波动",
          "cells": [
            "高",
            "中",
            "低",
            "yes",
            "高",
            "保守"
          ]
        },
        {
          "name": "均衡配置",
          "sub": "Balanced",
          "tag": "攻守兼备",
          "cells": [
            "中",
            "高",
            "中",
            "yes",
            "中",
            "中性"
          ]
        },
        {
          "name": "进取配置",
          "sub": "Model-led",
          "tag": "高弹性",
          "cells": [
            "低",
            "极高",
            "高",
            "no",
            "中",
            "激进"
          ]
        },
        {
          "name": "主题配置",
          "sub": "Thematic",
          "tag": "叙事驱动",
          "cells": [
            "低",
            "高",
            "极高",
            "no",
            "低",
            "投机"
          ]
        }
      ]
    }
  },
  {
    "key": "theme09_page093",
    "themeKey": "theme09",
    "pageNumber": 93,
    "layout": "THEME09-093",
    "slot": "stair",
    "label": "阶梯递进",
    "bgClass": "bg-blue",
    "controls": [
      {
        "key": "stepCount",
        "prop": "stepCount",
        "label": "数量",
        "type": "slider",
        "default": 5,
        "min": 3,
        "max": 6,
        "step": 1,
        "publicKey": "stepCount",
        "publicLabel": "数量"
      },
      {
        "key": "direction",
        "prop": "direction",
        "label": "排序",
        "type": "radio",
        "default": "升序",
        "options": [
          "升序",
          "原序"
        ],
        "publicKey": "direction",
        "publicLabel": "排序"
      },
      {
        "key": "showRidge",
        "prop": "showRidge",
        "label": "装饰文案",
        "type": "toggle",
        "default": true,
        "desc": "上升轮廓线",
        "publicKey": "showRidge",
        "publicLabel": "装饰文案",
        "description": "上升轮廓线"
      },
      {
        "key": "showValue",
        "prop": "showValue",
        "label": "阶面数值",
        "type": "toggle",
        "default": true,
        "publicKey": "showValueLabels",
        "publicLabel": "阶面数值"
      },
      {
        "key": "labelType",
        "prop": "labelType",
        "label": "标签类型",
        "type": "labelType",
        "default": "数字",
        "publicKey": "labelType",
        "publicLabel": "标签类型"
      },
      {
        "key": "focus",
        "prop": "focus",
        "label": "重点信息 Focus",
        "type": "focus",
        "default": true,
        "publicKey": "focus",
        "publicLabel": "重点信息 Focus"
      },
      {
        "key": "focusIndex",
        "prop": "focusIndex",
        "label": "焦点序号",
        "type": "slider",
        "default": 4,
        "min": 0,
        "step": 1,
        "publicKey": "focusIndex",
        "publicLabel": "焦点序号"
      }
    ],
    "defaultProps": {
      "stepCount": 5,
      "direction": "升序",
      "showRidge": true,
      "showValue": true,
      "focus": true,
      "focusIndex": 4,
      "labelType": "number",
      "head": {
        "no": "递进",
        "en": "Stepping Up",
        "cn": "融资规模，一级一级抬升"
      },
      "steps": [
        {
          "label": "种子 / 天使",
          "value": 18,
          "sub": "数百万"
        },
        {
          "label": "A 轮",
          "value": 36,
          "sub": "千万级"
        },
        {
          "label": "B–C 轮",
          "value": 58,
          "sub": "数千万–亿"
        },
        {
          "label": "成长期",
          "value": 78,
          "sub": "数亿"
        },
        {
          "label": "大额融资",
          "value": 100,
          "sub": "≥10 亿"
        },
        {
          "label": "超级轮",
          "value": 118,
          "sub": "数十亿"
        }
      ]
    }
  },
  {
    "key": "theme09_page094",
    "themeKey": "theme09",
    "pageNumber": 94,
    "layout": "THEME09-094",
    "slot": "stacked",
    "label": "10 结构演变",
    "bgClass": "bg-deep",
    "controls": [
      {
        "key": "itemCount",
        "prop": "itemCount",
        "label": "列数量",
        "type": "slider",
        "default": 5,
        "min": 3,
        "max": 5,
        "step": 1,
        "publicKey": "itemCount",
        "publicLabel": "列数量"
      },
      {
        "key": "segCount",
        "prop": "segCount",
        "label": "分段数量",
        "type": "slider",
        "default": 5,
        "min": 2,
        "max": 5,
        "step": 1,
        "publicKey": "segCount",
        "publicLabel": "分段数量"
      },
      {
        "key": "mode",
        "prop": "mode",
        "label": "图表类型",
        "type": "radio",
        "default": "占比",
        "options": [
          "占比",
          "绝对值"
        ],
        "publicKey": "mode",
        "publicLabel": "图表类型"
      },
      {
        "key": "showAside",
        "prop": "showAside",
        "label": "装饰文案",
        "type": "toggle",
        "default": true,
        "publicKey": "showAside",
        "publicLabel": "装饰文案"
      },
      {
        "key": "labelType",
        "prop": "labelType",
        "label": "标签类型",
        "type": "labelType",
        "default": "数字",
        "publicKey": "labelType",
        "publicLabel": "标签类型"
      },
      {
        "key": "focus",
        "prop": "focus",
        "label": "重点信息 Focus",
        "type": "focus",
        "default": true,
        "publicKey": "focus",
        "publicLabel": "重点信息 Focus"
      },
      {
        "key": "focusIndex",
        "prop": "focusIndex",
        "label": "焦点序号",
        "type": "slider",
        "default": 4,
        "min": 0,
        "step": 1,
        "publicKey": "focusIndex",
        "publicLabel": "焦点序号"
      }
    ],
    "defaultProps": {
      "itemCount": 5,
      "segCount": 5,
      "mode": "占比",
      "focus": true,
      "focusIndex": 4,
      "labelType": "number",
      "showAside": true,
      "badge": "10",
      "unit": "亿$",
      "segs": [
        "大模型",
        "AI 基础设施",
        "应用层",
        "企业服务",
        "其它赛道"
      ],
      "periods": [
        {
          "label": "2020",
          "vals": [
            40,
            30,
            20,
            15,
            10
          ]
        },
        {
          "label": "2021",
          "vals": [
            80,
            55,
            35,
            25,
            18
          ]
        },
        {
          "label": "2022",
          "vals": [
            120,
            90,
            55,
            40,
            28
          ]
        },
        {
          "label": "2023",
          "vals": [
            210,
            130,
            90,
            60,
            45
          ]
        },
        {
          "label": "2024",
          "vals": [
            380,
            170,
            150,
            110,
            160
          ]
        }
      ]
    }
  },
  {
    "key": "theme09_page095",
    "themeKey": "theme09",
    "pageNumber": 95,
    "layout": "THEME09-095",
    "slot": "era",
    "label": "编年纪事",
    "bgClass": "bg-blue",
    "controls": [
      {
        "key": "itemCount",
        "prop": "itemCount",
        "label": "数量",
        "type": "slider",
        "default": 4,
        "min": 2,
        "max": 5,
        "step": 1,
        "desc": "分期数",
        "publicKey": "itemCount",
        "publicLabel": "数量",
        "description": "分期数"
      },
      {
        "key": "showConnector",
        "prop": "showConnector",
        "label": "脊柱连线",
        "type": "toggle",
        "default": true,
        "publicKey": "showConnector",
        "publicLabel": "脊柱连线"
      },
      {
        "key": "showAside",
        "prop": "showAside",
        "label": "装饰文案",
        "type": "toggle",
        "default": true,
        "desc": "节奏解读",
        "publicKey": "showAside",
        "publicLabel": "装饰文案",
        "description": "节奏解读"
      },
      {
        "key": "labelType",
        "prop": "labelType",
        "label": "标签类型",
        "type": "labelType",
        "default": "数字",
        "publicKey": "labelType",
        "publicLabel": "标签类型"
      },
      {
        "key": "focus",
        "prop": "focus",
        "label": "重点信息 Focus",
        "type": "focus",
        "default": true,
        "publicKey": "focus",
        "publicLabel": "重点信息 Focus"
      },
      {
        "key": "focusIndex",
        "prop": "focusIndex",
        "label": "焦点序号",
        "type": "slider",
        "default": 0,
        "min": 0,
        "step": 1,
        "publicKey": "focusIndex",
        "publicLabel": "焦点序号"
      }
    ],
    "defaultProps": {
      "itemCount": 4,
      "showConnector": true,
      "showAside": true,
      "focus": true,
      "focusIndex": 0,
      "labelType": "number",
      "note": "全年呈「蓄势 → 修复 → 加速 → 竞速」四段递进 —— 资本信心自年中拐点后持续升温，至年末进入白热化。",
      "head": {
        "no": "08",
        "en": "Chronicle · 2024",
        "cn": "编年纪事 · 资本分期"
      },
      "eras": [
        {
          "period": "Q1 · 年初",
          "name": "蓄势观望",
          "sub": "估值消化 · 谨慎试探",
          "events": [
            {
              "date": "01–02",
              "text": "市场延续上年谨慎，资金多观望"
            },
            {
              "date": "02",
              "text": "OpenAI 要约收购，估值约 860 亿$"
            }
          ]
        },
        {
          "period": "Q2 · 年中",
          "name": "信心修复",
          "sub": "头部率先关账",
          "events": [
            {
              "date": "05",
              "text": "xAI B 轮 60 亿$，投后 240 亿"
            },
            {
              "date": "06",
              "text": "Anthropic 获亚马逊追加战略投资"
            }
          ]
        },
        {
          "period": "Q3 · 下半年",
          "name": "加速关账",
          "sub": "大额事件密集",
          "events": [
            {
              "date": "09",
              "text": "Databricks J 轮约 100 亿$，估值 620 亿"
            },
            {
              "date": "09",
              "text": "多笔基础设施长约落定"
            }
          ]
        },
        {
          "period": "Q4 · 年末",
          "name": "巅峰竞速",
          "sub": "估值水位抬升",
          "events": [
            {
              "date": "10",
              "text": "OpenAI 新一轮 66 亿$，估值 1570 亿"
            },
            {
              "date": "12",
              "text": "Safe SI 种子轮即募 10 亿$"
            }
          ]
        },
        {
          "period": "全年",
          "name": "结构跃迁",
          "sub": "赢家通吃成型",
          "events": [
            {
              "date": "2024",
              "text": "≥1 亿$ 事件 97 笔，总额 970 亿$"
            }
          ]
        }
      ]
    }
  },
  {
    "key": "theme09_page096",
    "themeKey": "theme09",
    "pageNumber": 96,
    "layout": "THEME09-096",
    "slot": "zine",
    "label": "杂志跨页",
    "bgClass": "bg-deep",
    "controls": [
      {
        "key": "imgCount",
        "prop": "imgCount",
        "label": "图片槽数量",
        "type": "slider",
        "default": 3,
        "min": 1,
        "max": 3,
        "step": 1,
        "publicKey": "imgCount",
        "publicLabel": "图片槽数量"
      },
      {
        "key": "showPull",
        "prop": "showPull",
        "label": "装饰文案",
        "type": "toggle",
        "default": true,
        "desc": "抽言条",
        "publicKey": "showPull",
        "publicLabel": "装饰文案",
        "description": "抽言条"
      },
      {
        "key": "focus",
        "prop": "focus",
        "label": "重点信息 Focus",
        "type": "focus",
        "default": true,
        "publicKey": "focus",
        "publicLabel": "重点信息 Focus"
      }
    ],
    "defaultProps": {
      "imgCount": 3,
      "showPull": true,
      "focus": true,
      "badge": "03",
      "kicker": "FEATURE · 跨页报道",
      "headline": "钱、算力与叙事的合流",
      "headlineEN": "Money, Compute & Narrative",
      "body": [
        "2024 年，资本以前所未有的密度涌向少数能讲好 AGI 故事的团队 —— 单笔金额节节攀升，年末进入白热化。",
        "与此同时，算力与数据的中游率先兑现现金流，成为更稳的下注；垂直应用则在「能否拿到续约」中被重新定价。"
      ],
      "pull": "在这一年，每一笔大额融资，都是一次对方向的押注。",
      "captions": [
        "主图 / hero",
        "细节 / detail",
        "场景 / scene"
      ]
    }
  },
  {
    "key": "theme09_page097",
    "themeKey": "theme09",
    "pageNumber": 97,
    "layout": "THEME09-097",
    "slot": "immersive",
    "label": "全幅图景",
    "bgClass": "bg-night",
    "controls": [
      {
        "key": "backgroundMode",
        "label": "背景替换",
        "type": "segment",
        "default": "unicorn",
        "def": "unicorn",
        "options": [
          {
            "value": "unicorn",
            "label": "动态"
          },
          {
            "value": "media",
            "label": "上传"
          }
        ],
        "desc": "动态 shader 或自定义背景媒体",
        "publicKey": "backgroundMode",
        "publicLabel": "背景替换",
        "description": "动态 shader 或自定义背景媒体"
      },
      {
        "key": "unicornScene",
        "label": "动态场景",
        "type": "segment",
        "default": "moving",
        "def": "moving",
        "options": [
          {
            "value": "tech",
            "label": "科技"
          },
          {
            "value": "automations",
            "label": "自动化"
          },
          {
            "value": "moving",
            "label": "流动"
          },
          {
            "value": "goey",
            "label": "黏球"
          }
        ],
        "dependsOn": "backgroundMode",
        "dependsOnValue": "unicorn",
        "desc": "选择固定 Unicorn shader 场景",
        "publicKey": "dynamicVisual",
        "publicLabel": "动态场景",
        "description": "选择固定 Unicorn shader 场景"
      },
      {
        "key": "imgCount",
        "prop": "imgCount",
        "label": "图片槽数量",
        "type": "slider",
        "default": 1,
        "min": 1,
        "max": 4,
        "step": 1,
        "publicKey": "imgCount",
        "publicLabel": "图片槽数量"
      },
      {
        "key": "textPos",
        "prop": "textPos",
        "label": "图片位置",
        "type": "radio",
        "default": "左下",
        "options": [
          "左下",
          "右下",
          "居中"
        ],
        "publicKey": "textPos",
        "publicLabel": "图片位置"
      },
      {
        "key": "tagCount",
        "prop": "tagCount",
        "label": "数量",
        "type": "slider",
        "default": 2,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "浮板标签数",
        "publicKey": "tagCount",
        "publicLabel": "数量",
        "description": "浮板标签数"
      },
      {
        "key": "showScrim",
        "prop": "showScrim",
        "label": "压暗层",
        "type": "toggle",
        "default": true,
        "publicKey": "showScrim",
        "publicLabel": "压暗层"
      },
      {
        "key": "showRail",
        "prop": "showRail",
        "label": "装饰文案",
        "type": "toggle",
        "default": true,
        "desc": "底部缩略轨",
        "publicKey": "showRail",
        "publicLabel": "装饰文案",
        "description": "底部缩略轨"
      },
      {
        "key": "focus",
        "prop": "focus",
        "label": "重点信息 Focus",
        "type": "focus",
        "default": true,
        "publicKey": "focus",
        "publicLabel": "重点信息 Focus"
      }
    ],
    "defaultProps": {
      "imgCount": 1,
      "backgroundMode": "unicorn",
      "unicornScene": "moving",
      "textPos": "左下",
      "showScrim": true,
      "showRail": true,
      "tagCount": 2,
      "focus": true,
      "badge": "10",
      "kicker": "CHAPTER · 视觉",
      "title": "资本与算力的浪潮",
      "titleEN": "Capital × Compute",
      "paragraph": "在这一年，资金以前所未有的密度涌向少数团队 —— 每一笔大额融资，都是一次对方向的押注。",
      "tags": [
        "2024 · 资本大年",
        "湾区 63.9%",
        "大模型 43.3%",
        "≥1 亿美元"
      ]
    }
  },
  {
    "key": "theme09_page098",
    "themeKey": "theme09",
    "pageNumber": 98,
    "layout": "THEME09-098",
    "slot": "roadmap",
    "label": "10 布局路线",
    "bgClass": "bg-blue",
    "controls": [
      {
        "key": "laneCount",
        "prop": "laneCount",
        "label": "行数量",
        "type": "slider",
        "default": 4,
        "min": 2,
        "max": 4,
        "step": 1,
        "publicKey": "laneCount",
        "publicLabel": "行数量"
      },
      {
        "key": "phaseCount",
        "prop": "phaseCount",
        "label": "列数量",
        "type": "slider",
        "default": 6,
        "min": 3,
        "max": 6,
        "step": 1,
        "publicKey": "phaseCount",
        "publicLabel": "列数量"
      },
      {
        "key": "showMilestone",
        "prop": "showMilestone",
        "label": "里程碑标记",
        "type": "toggle",
        "default": true,
        "publicKey": "showMilestone",
        "publicLabel": "里程碑标记"
      },
      {
        "key": "showAside",
        "prop": "showAside",
        "label": "装饰文案",
        "type": "toggle",
        "default": true,
        "publicKey": "showAside",
        "publicLabel": "装饰文案"
      },
      {
        "key": "labelType",
        "prop": "labelType",
        "label": "标签类型",
        "type": "labelType",
        "default": "数字",
        "publicKey": "labelType",
        "publicLabel": "标签类型"
      },
      {
        "key": "focus",
        "prop": "focus",
        "label": "重点信息 Focus",
        "type": "focus",
        "default": true,
        "publicKey": "focus",
        "publicLabel": "重点信息 Focus"
      },
      {
        "key": "focusIndex",
        "prop": "focusIndex",
        "label": "焦点序号",
        "type": "slider",
        "default": 0,
        "min": 0,
        "step": 1,
        "publicKey": "focusIndex",
        "publicLabel": "焦点序号"
      }
    ],
    "defaultProps": {
      "laneCount": 4,
      "phaseCount": 6,
      "showMilestone": true,
      "focus": true,
      "focusIndex": 0,
      "labelType": "number",
      "showAside": true,
      "badge": "10",
      "phases": [
        "24Q1",
        "24Q2",
        "24Q3",
        "24Q4",
        "25Q1",
        "25Q2"
      ],
      "milestones": [
        {
          "at": 1,
          "text": "估值峰值"
        },
        {
          "at": 3,
          "text": "头部 IPO 窗口"
        },
        {
          "at": 5,
          "text": "并购升温"
        }
      ],
      "lanes": [
        {
          "cn": "资本布局",
          "items": [
            "超大轮密集",
            "估值再创高",
            "结构性分化",
            "IPO 预热",
            "二级映射",
            "并购升温"
          ]
        },
        {
          "cn": "技术演进",
          "items": [
            "多模态成熟",
            "推理成本骤降",
            "Agent 兴起",
            "长上下文",
            "端侧模型",
            "自主体系"
          ]
        },
        {
          "cn": "应用落地",
          "items": [
            "Copilot 普及",
            "企业级试点",
            "垂直 PMF",
            "规模化付费",
            "行业纵深",
            "生态闭环"
          ]
        },
        {
          "cn": "生态与政策",
          "items": [
            "算力争夺",
            "数据合规",
            "安全框架",
            "监管落地",
            "标准统一",
            "全球协同"
          ]
        }
      ]
    }
  },
  {
    "key": "theme09_page099",
    "themeKey": "theme09",
    "pageNumber": 99,
    "layout": "THEME09-099",
    "slot": "score",
    "label": "10 赛道评分",
    "bgClass": "bg-deep",
    "controls": [
      {
        "key": "itemCount",
        "prop": "itemCount",
        "label": "数量",
        "type": "slider",
        "default": 4,
        "min": 2,
        "max": 5,
        "step": 1,
        "publicKey": "itemCount",
        "publicLabel": "数量"
      },
      {
        "key": "criteriaCount",
        "prop": "criteriaCount",
        "label": "行数量",
        "type": "slider",
        "default": 6,
        "min": 3,
        "max": 6,
        "step": 1,
        "publicKey": "criteriaCount",
        "publicLabel": "行数量"
      },
      {
        "key": "sort",
        "prop": "sort",
        "label": "排序",
        "type": "radio",
        "default": "降序",
        "options": [
          "降序",
          "原序"
        ],
        "publicKey": "sort",
        "publicLabel": "排序"
      },
      {
        "key": "showComposite",
        "prop": "showComposite",
        "label": "综合分环",
        "type": "toggle",
        "default": true,
        "publicKey": "showComposite",
        "publicLabel": "综合分环"
      },
      {
        "key": "showAside",
        "prop": "showAside",
        "label": "装饰文案",
        "type": "toggle",
        "default": true,
        "publicKey": "showAside",
        "publicLabel": "装饰文案"
      },
      {
        "key": "labelType",
        "prop": "labelType",
        "label": "标签类型",
        "type": "labelType",
        "default": "数字",
        "publicKey": "labelType",
        "publicLabel": "标签类型"
      },
      {
        "key": "focus",
        "prop": "focus",
        "label": "重点信息 Focus",
        "type": "focus",
        "default": true,
        "publicKey": "focus",
        "publicLabel": "重点信息 Focus"
      },
      {
        "key": "focusIndex",
        "prop": "focusIndex",
        "label": "焦点序号",
        "type": "slider",
        "default": 0,
        "min": 0,
        "step": 1,
        "publicKey": "focusIndex",
        "publicLabel": "焦点序号"
      }
    ],
    "defaultProps": {
      "itemCount": 4,
      "criteriaCount": 6,
      "sort": "降序",
      "showComposite": true,
      "focus": true,
      "focusIndex": 0,
      "labelType": "number",
      "showAside": true,
      "badge": "10",
      "criteria": [
        "资本热度",
        "收入兑现",
        "技术壁垒",
        "竞争格局",
        "政策友好",
        "退出预期"
      ],
      "objects": [
        {
          "cn": "大模型",
          "en": "Foundation",
          "scores": [
            95,
            60,
            88,
            50,
            70,
            82
          ]
        },
        {
          "cn": "AI 基础设施",
          "en": "Infra",
          "scores": [
            85,
            82,
            90,
            65,
            80,
            76
          ]
        },
        {
          "cn": "企业服务",
          "en": "Enterprise",
          "scores": [
            70,
            85,
            72,
            80,
            85,
            70
          ]
        },
        {
          "cn": "应用层",
          "en": "Application",
          "scores": [
            78,
            70,
            60,
            45,
            75,
            66
          ]
        },
        {
          "cn": "医疗与生物",
          "en": "BioHealth",
          "scores": [
            55,
            58,
            80,
            75,
            60,
            54
          ]
        }
      ]
    }
  },
  {
    "key": "theme09_page100",
    "themeKey": "theme09",
    "pageNumber": 100,
    "layout": "THEME09-100",
    "slot": "testimonial",
    "label": "人物证言",
    "bgClass": "bg-blue",
    "controls": [
      {
        "key": "imgSide",
        "prop": "imgSide",
        "label": "图片位置",
        "type": "radio",
        "default": "左",
        "options": [
          "左",
          "右"
        ],
        "publicKey": "imgSide",
        "publicLabel": "图片位置"
      },
      {
        "key": "credCount",
        "prop": "credCount",
        "label": "数量",
        "type": "slider",
        "default": 3,
        "min": 0,
        "max": 3,
        "step": 1,
        "desc": "资历标签数",
        "publicKey": "credCount",
        "publicLabel": "数量",
        "description": "资历标签数"
      },
      {
        "key": "showMark",
        "prop": "showMark",
        "label": "引号装饰",
        "type": "toggle",
        "default": true,
        "publicKey": "showMark",
        "publicLabel": "引号装饰"
      },
      {
        "key": "focus",
        "prop": "focus",
        "label": "重点信息 Focus",
        "type": "focus",
        "default": true,
        "publicKey": "focus",
        "publicLabel": "重点信息 Focus"
      }
    ],
    "defaultProps": {
      "imgSide": "left",
      "quote": "真正稀缺的不是模型，而是能把模型嵌进工作流、拿到续约的垂直应用 —— 卖铲子的人最先赚钱，而修路的人走得最远。",
      "name": "某产业基金",
      "role": "企业服务 合伙人",
      "org": "Enterprise Fund",
      "credCount": 3,
      "showMark": true,
      "focus": true,
      "badge": "09",
      "kicker": "TESTIMONIAL · 证言",
      "creds": [
        "深度参与 12 笔大额轮次",
        "专注企业级 AI 落地",
        "管理规模 30 亿美元+"
      ]
    }
  },
  {
    "key": "theme09_page101",
    "themeKey": "theme09",
    "pageNumber": 101,
    "layout": "THEME09-101",
    "slot": "chapter",
    "label": "篇章卡",
    "bgClass": "bg-deep",
    "controls": [
      {
        "key": "itemCount",
        "prop": "itemCount",
        "label": "数量",
        "type": "slider",
        "default": 4,
        "min": 1,
        "max": 6,
        "step": 1,
        "desc": "议程小节数",
        "publicKey": "itemCount",
        "publicLabel": "数量",
        "description": "议程小节数"
      },
      {
        "key": "showProgress",
        "prop": "showProgress",
        "label": "装饰文案",
        "type": "toggle",
        "default": true,
        "desc": "进度点",
        "publicKey": "showProgress",
        "publicLabel": "装饰文案",
        "description": "进度点"
      },
      {
        "key": "labelType",
        "prop": "labelType",
        "label": "标签类型",
        "type": "labelType",
        "default": "数字",
        "publicKey": "labelType",
        "publicLabel": "标签类型"
      },
      {
        "key": "focus",
        "prop": "focus",
        "label": "重点信息 Focus",
        "type": "focus",
        "default": true,
        "publicKey": "focus",
        "publicLabel": "重点信息 Focus"
      },
      {
        "key": "focusIndex",
        "prop": "focusIndex",
        "label": "焦点序号",
        "type": "slider",
        "default": 0,
        "min": 0,
        "step": 1,
        "publicKey": "focusIndex",
        "publicLabel": "焦点序号"
      }
    ],
    "defaultProps": {
      "itemCount": 4,
      "showProgress": true,
      "focus": true,
      "focusIndex": 0,
      "labelType": "number",
      "chapterNo": "03",
      "titleCN": "横向透视",
      "titleEN": "Cross-Section",
      "lead": "在同一时间截面上对比公司与赛道 —— 看清资本在结构上的偏好与集中度。",
      "items": [
        {
          "label": "赛道资金分布",
          "sub": "大模型 / 基建 / 应用 占比"
        },
        {
          "label": "地理集中度",
          "sub": "湾区与非湾区的此消彼长"
        },
        {
          "label": "轮次结构",
          "sub": "越往后轮，单笔越大"
        },
        {
          "label": "投资人画像",
          "sub": "谁在主导大额关账"
        },
        {
          "label": "估值分层",
          "sub": "独角兽到超级独角兽"
        },
        {
          "label": "退出预期",
          "sub": "一级与二级的预期差"
        }
      ]
    }
  },
  {
    "key": "theme09_page102",
    "themeKey": "theme09",
    "pageNumber": 102,
    "layout": "THEME09-102",
    "slot": "takeaway",
    "label": "11 核心要点",
    "bgClass": "bg-blue",
    "controls": [
      {
        "key": "itemCount",
        "prop": "itemCount",
        "label": "数量",
        "type": "slider",
        "default": 5,
        "min": 3,
        "max": 6,
        "step": 1,
        "publicKey": "itemCount",
        "publicLabel": "数量"
      },
      {
        "key": "showAside",
        "prop": "showAside",
        "label": "装饰文案",
        "type": "toggle",
        "default": true,
        "publicKey": "showAside",
        "publicLabel": "装饰文案"
      },
      {
        "key": "labelType",
        "prop": "labelType",
        "label": "标签类型",
        "type": "labelType",
        "default": "数字",
        "publicKey": "labelType",
        "publicLabel": "标签类型"
      },
      {
        "key": "focus",
        "prop": "focus",
        "label": "重点信息 Focus",
        "type": "focus",
        "default": true,
        "publicKey": "focus",
        "publicLabel": "重点信息 Focus"
      },
      {
        "key": "focusIndex",
        "prop": "focusIndex",
        "label": "焦点序号",
        "type": "slider",
        "default": 1,
        "min": 0,
        "step": 1,
        "publicKey": "focusIndex",
        "publicLabel": "焦点序号"
      }
    ],
    "defaultProps": {
      "itemCount": 5,
      "focus": true,
      "focusIndex": 1,
      "labelType": "number",
      "showAside": true,
      "head": {
        "no": "11",
        "en": "Key Takeaways",
        "cn": "核心要点速览"
      },
      "lead": {
        "tag": "全局判断",
        "text": "2024 是 AI 融资的资本大年，但繁荣之下结构正在分化——读懂以下要点，便读懂了这轮周期的方向。"
      },
      "items": [
        {
          "title": "资本向头部集中",
          "desc": "大模型与头部公司吸走过半资金，长尾募资难度显著上升。"
        },
        {
          "title": "估值与收入背离",
          "desc": "明星公司估值领先收入数个身位，兑现压力持续累积。"
        },
        {
          "title": "基础设施先行",
          "desc": "算力、数据、云服务等「卖铲子」环节确定性最高。"
        },
        {
          "title": "应用层开始分化",
          "desc": "有 PMF 的垂直应用跑出，纯叙事项目逐步退潮。"
        },
        {
          "title": "地域高度集聚",
          "desc": "旧金山湾区继续虹吸全球顶尖人才与资本。"
        },
        {
          "title": "退出窗口临近",
          "desc": "头部公司 IPO 表现，将重新校准全行业估值锚。"
        }
      ]
    }
  },
  {
    "key": "theme09_page103",
    "themeKey": "theme09",
    "pageNumber": 103,
    "layout": "THEME09-103",
    "slot": "compare",
    "label": "12 多维对比",
    "bgClass": "bg-deep",
    "controls": [
      {
        "key": "rowCount",
        "prop": "rowCount",
        "label": "行数量",
        "type": "slider",
        "default": 5,
        "min": 2,
        "max": 6,
        "step": 1,
        "publicKey": "rowCount",
        "publicLabel": "行数量"
      },
      {
        "key": "columnCount",
        "prop": "columnCount",
        "label": "列数量",
        "type": "slider",
        "default": 5,
        "min": 2,
        "max": 5,
        "step": 1,
        "publicKey": "columnCount",
        "publicLabel": "列数量"
      },
      {
        "key": "highlightCol",
        "prop": "highlightCol",
        "label": "高亮列 (-1 关闭)",
        "type": "slider",
        "default": -1,
        "min": -1,
        "step": 1,
        "publicKey": "highlightCol",
        "publicLabel": "高亮列 (-1 关闭)"
      },
      {
        "key": "showAside",
        "prop": "showAside",
        "label": "装饰文案",
        "type": "toggle",
        "default": true,
        "publicKey": "showAside",
        "publicLabel": "装饰文案"
      },
      {
        "key": "labelType",
        "prop": "labelType",
        "label": "标签类型",
        "type": "labelType",
        "default": "数字",
        "publicKey": "labelType",
        "publicLabel": "标签类型"
      },
      {
        "key": "focus",
        "prop": "focus",
        "label": "重点信息 Focus",
        "type": "focus",
        "default": true,
        "publicKey": "focus",
        "publicLabel": "重点信息 Focus"
      },
      {
        "key": "focusIndex",
        "prop": "focusIndex",
        "label": "焦点序号",
        "type": "slider",
        "default": 0,
        "min": 0,
        "step": 1,
        "publicKey": "focusIndex",
        "publicLabel": "焦点序号"
      }
    ],
    "defaultProps": {
      "rowCount": 5,
      "columnCount": 4,
      "focus": true,
      "focusIndex": 0,
      "highlightCol": -1,
      "ratingMax": 5,
      "labelType": "number",
      "showAside": true,
      "rowHeader": "投资原型",
      "note": "评级为研究性主观判断，○ 至 ● 表示由弱到强；判定列 ✓ / ◐ / ✕ 表示满足 / 部分 / 不满足。",
      "head": {
        "no": "12",
        "en": "Comparison",
        "cn": "多维对比一览"
      },
      "columns": [
        {
          "label": "现金流确定性",
          "type": "rating"
        },
        {
          "label": "护城河强度",
          "type": "rating"
        },
        {
          "label": "估值泡沫风险",
          "type": "rating"
        },
        {
          "label": "已验证 PMF",
          "type": "check"
        },
        {
          "label": "配置建议",
          "type": "tag"
        }
      ],
      "rows": [
        {
          "label": "算力基础设施",
          "sub": "Infra · 卖铲子",
          "cells": [
            5,
            4,
            2,
            "yes",
            "超配"
          ]
        },
        {
          "label": "头部大模型",
          "sub": "Foundation",
          "cells": [
            3,
            5,
            5,
            "yes",
            "标配"
          ]
        },
        {
          "label": "垂直行业应用",
          "sub": "Vertical Apps",
          "cells": [
            4,
            3,
            3,
            "mid",
            "精选"
          ]
        },
        {
          "label": "工具与中间件",
          "sub": "Tooling",
          "cells": [
            3,
            2,
            3,
            "mid",
            "低配"
          ]
        },
        {
          "label": "概念叙事项目",
          "sub": "Narrative",
          "cells": [
            1,
            1,
            5,
            "no",
            "回避"
          ]
        },
        {
          "label": "数据与标注",
          "sub": "Data Layer",
          "cells": [
            4,
            3,
            2,
            "yes",
            "标配"
          ]
        }
      ]
    }
  },
  {
    "key": "theme09_page104",
    "themeKey": "theme09",
    "pageNumber": 104,
    "layout": "THEME09-104",
    "slot": "process",
    "label": "13 实施路径",
    "bgClass": "bg-blue",
    "controls": [
      {
        "key": "stepCount",
        "prop": "stepCount",
        "label": "数量",
        "type": "slider",
        "default": 4,
        "min": 2,
        "max": 6,
        "step": 1,
        "desc": "步骤数",
        "publicKey": "stepCount",
        "publicLabel": "数量",
        "description": "步骤数"
      },
      {
        "key": "showAside",
        "prop": "showAside",
        "label": "装饰文案",
        "type": "toggle",
        "default": true,
        "publicKey": "showAside",
        "publicLabel": "装饰文案"
      },
      {
        "key": "labelType",
        "prop": "labelType",
        "label": "标签类型",
        "type": "labelType",
        "default": "数字",
        "publicKey": "labelType",
        "publicLabel": "标签类型"
      },
      {
        "key": "focus",
        "prop": "focus",
        "label": "重点信息 Focus",
        "type": "focus",
        "default": true,
        "publicKey": "focus",
        "publicLabel": "重点信息 Focus"
      },
      {
        "key": "focusIndex",
        "prop": "focusIndex",
        "label": "焦点序号",
        "type": "slider",
        "default": 0,
        "min": 0,
        "step": 1,
        "publicKey": "focusIndex",
        "publicLabel": "焦点序号"
      }
    ],
    "defaultProps": {
      "stepCount": 4,
      "focus": true,
      "focusIndex": 0,
      "labelType": "number",
      "showAside": true,
      "head": {
        "no": "13",
        "en": "Process",
        "cn": "落地实施路径"
      },
      "outcome": {
        "tag": "闭环",
        "text": "四步形成可复用的投资决策闭环——从机会发现到复盘迭代，持续校准。"
      },
      "steps": [
        {
          "title": "识别机会",
          "desc": "扫描赛道与早期信号，建立候选标的清单。"
        },
        {
          "title": "尽调验证",
          "desc": "核验收入、留存与现金流，剔除纯叙事项目。"
        },
        {
          "title": "配置布局",
          "desc": "按确定性分层下注，预留周期回调的弹药。"
        },
        {
          "title": "跟踪复盘",
          "desc": "定期复盘兑现进度，动态调整持仓权重。"
        },
        {
          "title": "退出兑现",
          "desc": "把握 IPO / 并购窗口，分批锁定收益。"
        },
        {
          "title": "迭代沉淀",
          "desc": "沉淀方法论，反哺下一轮决策模型。"
        }
      ]
    }
  },
  {
    "key": "theme09_page105",
    "themeKey": "theme09",
    "pageNumber": 105,
    "layout": "THEME09-105",
    "slot": "faq",
    "label": "14 关键问答",
    "bgClass": "bg-deep",
    "controls": [
      {
        "key": "itemCount",
        "prop": "itemCount",
        "label": "数量",
        "type": "slider",
        "default": 4,
        "min": 3,
        "max": 6,
        "step": 1,
        "publicKey": "itemCount",
        "publicLabel": "数量"
      },
      {
        "key": "columns",
        "prop": "columns",
        "label": "每行数量",
        "type": "slider",
        "default": 2,
        "min": 1,
        "max": 2,
        "step": 1,
        "publicKey": "columns",
        "publicLabel": "每行数量"
      },
      {
        "key": "showAside",
        "prop": "showAside",
        "label": "装饰文案",
        "type": "toggle",
        "default": true,
        "publicKey": "showAside",
        "publicLabel": "装饰文案"
      },
      {
        "key": "labelType",
        "prop": "labelType",
        "label": "标签类型",
        "type": "labelType",
        "default": "数字",
        "publicKey": "labelType",
        "publicLabel": "标签类型"
      },
      {
        "key": "focus",
        "prop": "focus",
        "label": "重点信息 Focus",
        "type": "focus",
        "default": true,
        "publicKey": "focus",
        "publicLabel": "重点信息 Focus"
      },
      {
        "key": "focusIndex",
        "prop": "focusIndex",
        "label": "焦点序号",
        "type": "slider",
        "default": 0,
        "min": 0,
        "step": 1,
        "publicKey": "focusIndex",
        "publicLabel": "焦点序号"
      }
    ],
    "defaultProps": {
      "itemCount": 4,
      "columns": 2,
      "focus": true,
      "focusIndex": 0,
      "labelType": "number",
      "showAside": true,
      "head": {
        "no": "14",
        "en": "Q&A",
        "cn": "关键问答"
      },
      "intro": "面对这轮 AI 融资热，最常被问到的六个问题，我们用一句话给出研究视角的回答。",
      "items": [
        {
          "q": "这轮 AI 融资是泡沫吗？",
          "a": "局部泡沫明显，但基础设施与有收入的应用具备坚实支撑，不宜一概而论。"
        },
        {
          "q": "资金最终流向了哪里？",
          "a": "过半流入通用大模型与算力基础设施，旧金山湾区吸走逾六成。"
        },
        {
          "q": "普通公司还有机会吗？",
          "a": "有——在垂直场景做深数据护城河，比追逐通用大模型更现实可行。"
        },
        {
          "q": "什么时候会洗牌？",
          "a": "头部公司 IPO 表现是关键信号，若破发将触发全行业估值回调。"
        },
        {
          "q": "如何判断公司是否健康？",
          "a": "看收入兑现速度、续约率与现金跑道，而非单看融资估值。"
        },
        {
          "q": "下一阶段的主线是什么？",
          "a": "从「赌叙事」转向「看兑现」，能把技术变成收入的公司将胜出。"
        }
      ]
    }
  },
  {
    "key": "theme09_page106",
    "themeKey": "theme09",
    "pageNumber": 106,
    "layout": "THEME09-106",
    "slot": "spotlight",
    "label": "15 专题洞察",
    "bgClass": "bg-blue",
    "controls": [
      {
        "key": "imgCount",
        "prop": "imgCount",
        "label": "图片槽数量",
        "type": "slider",
        "default": 2,
        "min": 0,
        "max": 4,
        "step": 1,
        "publicKey": "imgCount",
        "publicLabel": "图片槽数量"
      },
      {
        "key": "imgSide",
        "prop": "imgSide",
        "label": "图片位置",
        "type": "radio",
        "default": "左",
        "options": [
          "左",
          "右"
        ],
        "publicKey": "imgSide",
        "publicLabel": "图片位置"
      },
      {
        "key": "statCount",
        "prop": "statCount",
        "label": "数量",
        "type": "slider",
        "default": 3,
        "min": 0,
        "max": 3,
        "step": 1,
        "desc": "关键数字数",
        "publicKey": "statCount",
        "publicLabel": "数量",
        "description": "关键数字数"
      },
      {
        "key": "showAside",
        "prop": "showAside",
        "label": "装饰文案",
        "type": "toggle",
        "default": true,
        "publicKey": "showAside",
        "publicLabel": "装饰文案"
      },
      {
        "key": "focus",
        "prop": "focus",
        "label": "重点信息 Focus",
        "type": "focus",
        "default": true,
        "publicKey": "focus",
        "publicLabel": "重点信息 Focus"
      },
      {
        "key": "focusIndex",
        "prop": "focusIndex",
        "label": "焦点序号",
        "type": "slider",
        "default": 0,
        "min": 0,
        "step": 1,
        "publicKey": "focusIndex",
        "publicLabel": "焦点序号"
      }
    ],
    "defaultProps": {
      "kicker": "专题洞察",
      "title": "算力，是这轮周期的硬通货",
      "titleEN": "Compute is the hard currency",
      "paragraphs": [
        "当模型参数与训练规模演变为军备竞赛，谁锁定了算力，谁就锁定了入场券。",
        "2024 年，提前签下长期 GPU 供给的基础设施商，成为一级市场最稀缺、也最受追捧的标的——「卖铲子的人」率先赚到了确定性的钱。"
      ],
      "stats": [
        {
          "value": "110",
          "unit": "亿美元",
          "label": "头部算力云累计融资"
        },
        {
          "value": "63.9",
          "unit": "%",
          "label": "资金集中于旧金山湾区"
        },
        {
          "value": "43.3",
          "unit": "%",
          "label": "大模型赛道资金占比"
        }
      ],
      "statCount": 3,
      "focus": true,
      "focusIndex": 0,
      "showAside": true,
      "imgCount": 2,
      "imgSide": "left",
      "head": {
        "no": "15",
        "en": "Spotlight",
        "cn": "专题洞察"
      }
    }
  },
  {
    "key": "theme09_page107",
    "themeKey": "theme09",
    "pageNumber": 107,
    "layout": "THEME09-107",
    "slot": "team",
    "label": "16 研究团队",
    "bgClass": "bg-deep",
    "controls": [
      {
        "key": "memberCount",
        "prop": "memberCount",
        "label": "数量",
        "type": "slider",
        "default": 4,
        "min": 2,
        "max": 6,
        "step": 1,
        "publicKey": "memberCount",
        "publicLabel": "数量"
      },
      {
        "key": "columns",
        "prop": "columns",
        "label": "每行数量",
        "type": "slider",
        "default": 4,
        "min": 2,
        "max": 4,
        "step": 1,
        "publicKey": "columns",
        "publicLabel": "每行数量"
      },
      {
        "key": "imgCount",
        "prop": "imgCount",
        "label": "图片槽数量",
        "type": "slider",
        "default": 4,
        "min": 0,
        "max": 6,
        "step": 1,
        "publicKey": "imgCount",
        "publicLabel": "图片槽数量"
      },
      {
        "key": "showAside",
        "prop": "showAside",
        "label": "装饰文案",
        "type": "toggle",
        "default": true,
        "publicKey": "showAside",
        "publicLabel": "装饰文案"
      },
      {
        "key": "focus",
        "prop": "focus",
        "label": "重点信息 Focus",
        "type": "focus",
        "default": true,
        "publicKey": "focus",
        "publicLabel": "重点信息 Focus"
      },
      {
        "key": "focusIndex",
        "prop": "focusIndex",
        "label": "焦点序号",
        "type": "slider",
        "default": 0,
        "min": 0,
        "step": 1,
        "publicKey": "focusIndex",
        "publicLabel": "焦点序号"
      }
    ],
    "defaultProps": {
      "memberCount": 4,
      "columns": 4,
      "focus": true,
      "focusIndex": 0,
      "imgCount": 4,
      "showAside": true,
      "head": {
        "no": "16",
        "en": "Team & Credits",
        "cn": "研究团队与致谢"
      },
      "note": "感谢所有公开披露数据的机构与受访者。本报告基于公开信息整理与研究性推演，不构成任何投资建议。",
      "members": [
        {
          "name": "林知远",
          "role": "首席研究员",
          "en": "Lead Analyst"
        },
        {
          "name": "苏砚",
          "role": "数据负责人",
          "en": "Data Lead"
        },
        {
          "name": "江临",
          "role": "行业研究",
          "en": "Sector Research"
        },
        {
          "name": "周遇",
          "role": "可视化设计",
          "en": "Visual Design"
        },
        {
          "name": "何屿",
          "role": "编辑校对",
          "en": "Editing"
        },
        {
          "name": "温岚",
          "role": "对外沟通",
          "en": "Communications"
        }
      ]
    }
  },
  {
    "key": "theme09_page108",
    "themeKey": "theme09",
    "pageNumber": 108,
    "layout": "THEME09-108",
    "slot": "ring",
    "label": "圆窗影像",
    "bgClass": "bg-blue",
    "controls": [
      {
        "key": "imgCount",
        "prop": "imgCount",
        "label": "图片槽数量",
        "type": "slider",
        "default": 4,
        "min": 2,
        "max": 5,
        "step": 1,
        "publicKey": "imgCount",
        "publicLabel": "图片槽数量"
      },
      {
        "key": "arc",
        "prop": "arc",
        "label": "弧形排列",
        "type": "toggle",
        "default": true,
        "publicKey": "arc",
        "publicLabel": "弧形排列"
      },
      {
        "key": "labelType",
        "prop": "labelType",
        "label": "标签类型",
        "type": "labelType",
        "default": "数字",
        "publicKey": "labelType",
        "publicLabel": "标签类型"
      },
      {
        "key": "focus",
        "prop": "focus",
        "label": "重点信息 Focus",
        "type": "focus",
        "default": true,
        "publicKey": "focus",
        "publicLabel": "重点信息 Focus"
      },
      {
        "key": "focusIndex",
        "prop": "focusIndex",
        "label": "焦点序号",
        "type": "slider",
        "default": 0,
        "min": 0,
        "step": 1,
        "publicKey": "focusIndex",
        "publicLabel": "焦点序号"
      }
    ],
    "defaultProps": {
      "imgCount": 4,
      "arc": true,
      "focus": true,
      "focusIndex": 0,
      "labelType": "number",
      "head": {
        "no": "05",
        "en": "Portraits · Windows",
        "cn": "圆窗影像 · 群像"
      },
      "items": [
        {
          "label": "OpenAI",
          "sub": "大模型 · 1570 亿$"
        },
        {
          "label": "Anthropic",
          "sub": "大模型 · 965 亿$"
        },
        {
          "label": "xAI",
          "sub": "大模型 · 450 亿$"
        },
        {
          "label": "Databricks",
          "sub": "基础设施 · 620 亿$"
        },
        {
          "label": "CoreWeave",
          "sub": "算力云 · 190 亿$"
        }
      ]
    }
  },
  {
    "key": "theme09_page109",
    "themeKey": "theme09",
    "pageNumber": 109,
    "layout": "THEME09-109",
    "slot": "pf-profile",
    "label": "关于我们",
    "bgClass": "bg-electric",
    "controls": [
      {
        "key": "expCount",
        "prop": "expCount",
        "label": "经历条数",
        "type": "slider",
        "default": 2,
        "min": 1,
        "max": 3,
        "step": 1,
        "publicKey": "expCount",
        "publicLabel": "经历条数"
      },
      {
        "key": "statCount",
        "prop": "statCount",
        "label": "数据条数",
        "type": "slider",
        "default": 4,
        "min": 0,
        "max": 4,
        "step": 1,
        "publicKey": "statCount",
        "publicLabel": "数据条数"
      },
      {
        "key": "skillCount",
        "prop": "skillCount",
        "label": "能力条数",
        "type": "slider",
        "default": 4,
        "min": 0,
        "max": 5,
        "step": 1,
        "publicKey": "skillCount",
        "publicLabel": "能力条数"
      },
      {
        "key": "infoCount",
        "prop": "infoCount",
        "label": "信息条数",
        "type": "slider",
        "default": 3,
        "min": 0,
        "max": 4,
        "step": 1,
        "publicKey": "infoCount",
        "publicLabel": "信息条数"
      },
      {
        "key": "pillCount",
        "prop": "pillCount",
        "label": "标签数量",
        "type": "slider",
        "default": 6,
        "min": 0,
        "max": 8,
        "step": 1,
        "publicKey": "pillCount",
        "publicLabel": "标签数量"
      },
      {
        "key": "imgCount",
        "prop": "imgCount",
        "label": "图片槽数量",
        "type": "slider",
        "default": 1,
        "min": 0,
        "max": 2,
        "step": 1,
        "publicKey": "imgCount",
        "publicLabel": "图片槽数量"
      },
      {
        "key": "showBarcode",
        "prop": "showBarcode",
        "label": "条形码装饰",
        "type": "toggle",
        "default": true,
        "publicKey": "showBarcode",
        "publicLabel": "条形码装饰"
      },
      {
        "key": "focus",
        "prop": "focus",
        "label": "重点信息 Focus",
        "type": "focus",
        "default": true,
        "publicKey": "focus",
        "publicLabel": "重点信息 Focus"
      },
      {
        "key": "focusIndex",
        "prop": "focusIndex",
        "label": "焦点序号",
        "type": "slider",
        "default": 0,
        "min": 0,
        "step": 1,
        "publicKey": "focusIndex",
        "publicLabel": "焦点序号"
      }
    ],
    "defaultProps": {
      "title": "About us",
      "name": "AI Capital Lab",
      "nameEN": "资本研究室",
      "code": "AI CAPITAL LAB · 2024",
      "experiences": [
        {
          "period": "2024.01 – 2024.12",
          "org": "2024 大额融资全景追踪",
          "role": "年度旗舰",
          "desc": "系统追踪美国 AI 产业单笔亿美元以上的大额融资事件，构建结构化数据库与可视化图谱。"
        },
        {
          "period": "2021 – 2023",
          "org": "AI 一级市场连续观察",
          "role": "长期研究",
          "desc": "连续三年覆盖全球 AI 投融资动态，沉淀可复用的「横纵分析法」研究框架。"
        },
        {
          "period": "2018 – 2020",
          "org": "前沿科技投研起步",
          "role": "方法奠基",
          "desc": "建立赛道分层与估值对照框架，形成研究底层方法论。"
        }
      ],
      "expCount": 2,
      "stats": [
        {
          "value": "970",
          "unit": "亿$",
          "label": "全年总融资"
        },
        {
          "value": "240",
          "unit": "+",
          "label": "大额事件"
        },
        {
          "value": "12",
          "unit": "类",
          "label": "赛道覆盖"
        },
        {
          "value": "63.9",
          "unit": "%",
          "label": "湾区集中"
        }
      ],
      "statCount": 4,
      "skills": [
        {
          "label": "一级市场数据",
          "level": 5,
          "tag": "Db"
        },
        {
          "label": "估值与建模",
          "level": 5,
          "tag": "Va"
        },
        {
          "label": "赛道结构研究",
          "level": 4,
          "tag": "Se"
        },
        {
          "label": "数据可视化",
          "level": 4,
          "tag": "Vz"
        },
        {
          "label": "政策与合规",
          "level": 3,
          "tag": "Po"
        }
      ],
      "skillCount": 4,
      "infoList": [
        {
          "label": "口径",
          "value": "≥ 1 亿美元"
        },
        {
          "label": "周期",
          "value": "季度更新"
        },
        {
          "label": "区域",
          "value": "美国为主"
        },
        {
          "label": "来源",
          "value": "公开披露"
        }
      ],
      "infoCount": 3,
      "pills": [
        "大模型",
        "算力基础设施",
        "垂直应用",
        "数据与标注",
        "投融资",
        "估值研究",
        "政策合规",
        "退出路径"
      ],
      "pillCount": 6,
      "imgCount": 1,
      "showBarcode": true,
      "focus": true,
      "focusIndex": 0
    }
  },
  {
    "key": "theme09_page110",
    "themeKey": "theme09",
    "pageNumber": 110,
    "layout": "THEME09-110",
    "slot": "pf-gallery",
    "label": "企业掘影",
    "bgClass": "bg-electric",
    "controls": [
      {
        "key": "imgCount",
        "prop": "imgCount",
        "label": "图片槽数量",
        "type": "slider",
        "default": 3,
        "min": 0,
        "max": 6,
        "step": 1,
        "publicKey": "imgCount",
        "publicLabel": "图片槽数量"
      },
      {
        "key": "tagCount",
        "prop": "tagCount",
        "label": "标签数量",
        "type": "slider",
        "default": 4,
        "min": 0,
        "max": 6,
        "step": 1,
        "publicKey": "tagCount",
        "publicLabel": "标签数量"
      },
      {
        "key": "showMeta",
        "prop": "showMeta",
        "label": "说明与标签",
        "type": "toggle",
        "default": true,
        "publicKey": "showMeta",
        "publicLabel": "说明与标签"
      },
      {
        "key": "focus",
        "prop": "focus",
        "label": "重点信息 Focus",
        "type": "focus",
        "default": true,
        "publicKey": "focus",
        "publicLabel": "重点信息 Focus"
      },
      {
        "key": "focusIndex",
        "prop": "focusIndex",
        "label": "焦点序号",
        "type": "slider",
        "default": 0,
        "min": 0,
        "step": 1,
        "publicKey": "focusIndex",
        "publicLabel": "焦点序号"
      }
    ],
    "defaultProps": {
      "kicker": "Featured Companies",
      "title": "代表企业掠影",
      "titleEN": "Company Gallery",
      "caption": "拖入代表性 AI 公司的产品、团队或场景图片，画廊按图片真实比例自适应排布——任意数量都保持齐整美观的构图。",
      "imgCount": 3,
      "maxH": 560,
      "tags": [
        "大模型",
        "算力基础设施",
        "垂直应用",
        "数据层",
        "工具链",
        "退出案例"
      ],
      "tagCount": 4,
      "showMeta": true,
      "focus": true,
      "focusIndex": 0
    }
  },
  {
    "key": "theme09_page111",
    "themeKey": "theme09",
    "pageNumber": 111,
    "layout": "THEME09-111",
    "slot": "closing",
    "label": "结语",
    "bgClass": "bg-blue",
    "controls": [
      {
        "key": "imgCount",
        "prop": "imgCount",
        "label": "图片槽数量",
        "type": "slider",
        "default": 0,
        "min": 0,
        "max": 4,
        "step": 1,
        "publicKey": "imgCount",
        "publicLabel": "图片槽数量"
      },
      {
        "key": "showAside",
        "prop": "showAside",
        "label": "附属面板",
        "type": "toggle",
        "default": true,
        "desc": "数据来源面板",
        "publicKey": "showAside",
        "publicLabel": "附属面板",
        "description": "数据来源面板"
      },
      {
        "key": "showOrnament",
        "prop": "showOrnament",
        "label": "装饰图形",
        "type": "toggle",
        "default": true,
        "publicKey": "showOrnament",
        "publicLabel": "装饰图形"
      },
      {
        "key": "focus",
        "prop": "focus",
        "label": "重点信息 Focus",
        "type": "focus",
        "default": true,
        "publicKey": "focus",
        "publicLabel": "重点信息 Focus"
      }
    ],
    "defaultProps": {
      "brand": "AI CAPITAL LAB",
      "headline": "结语",
      "headlineEN": "Closing · Thank You",
      "statement": "资本的下一阶段，将从「赌叙事」转向「看兑现」。能把技术沉淀为可持续收入的公司，才能在退潮后留在牌桌上。",
      "signature": "AInsight",
      "contact": [
        {
          "label": "数据口径",
          "value": "≥1亿美元 · 2024 全年"
        },
        {
          "label": "编制日期",
          "value": "2026 · 06 · 03"
        }
      ],
      "showAside": true,
      "sources": [
        "公开披露的一级市场融资事件（≥1 亿美元）",
        "主流创投数据库与公司官方公告整理",
        "部分数值经研究性推演 · 仅供研究参考"
      ],
      "imgCount": 0,
      "showOrnament": true,
      "focus": true
    }
  }
];
