export const theme = {
  "key": "theme05",
  "displayName": "色谱图表风",
  "label": "色谱图表风",
  "name": "色谱图表风",
  "scenario": "数据报告、市场分析、KPI 复盘、行业研究",
  "audience": "数据分析师、咨询顾问、研究员、业务负责人",
  "mode": "new"
};
export const pages = [
  {
    "key": "theme05_page001",
    "themeKey": "theme05",
    "pageNumber": 1,
    "layout": "THEME05-001",
    "slot": "excover1",
    "label": "封面 精益智造",
    "bgClass": "",
    "controls": [
      {
        "key": "accentColor",
        "label": "强调色",
        "type": "color",
        "default": "#E0301E",
        "options": [
          "#E0301E",
          "#E8741C",
          "#F2C00C",
          "#2F9450",
          "#2742C2"
        ],
        "publicKey": "accentColor",
        "publicLabel": "强调色"
      },
      {
        "key": "showRail",
        "label": "右侧指标栏",
        "type": "toggle",
        "default": true,
        "publicKey": "showRail",
        "publicLabel": "右侧指标栏"
      },
      {
        "key": "specCount",
        "label": "指标行数",
        "type": "slider",
        "default": 4,
        "min": 1,
        "max": 4,
        "step": 1,
        "publicKey": "specCount",
        "publicLabel": "指标行数"
      },
      {
        "key": "showSwatch",
        "label": "色卡",
        "type": "toggle",
        "default": true,
        "publicKey": "showSwatch",
        "publicLabel": "色卡"
      },
      {
        "key": "showFooter",
        "label": "底部色谱条",
        "type": "toggle",
        "default": true,
        "publicKey": "showFooter",
        "publicLabel": "底部色谱条"
      }
    ],
    "defaultProps": {
      "accentColor": "#E0301E",
      "showRail": true,
      "specCount": 4,
      "showSwatch": true,
      "showFooter": true,
      "copy": {
        "brand": "智造",
        "brandEn": "SMARTWORKS",
        "meta": [
          "INDUSTRY 4.0",
          "2026 — 2027",
          "COMPUTER INTEGRATED"
        ],
        "kicker": "智能化改造实施方案 · Implementation Plan",
        "titleTop": "精益智造",
        "titleBottom": "提质增效",
        "subtitle": "2026 生产基地智能化改造实施方案",
        "subtitleEn": "Lean Manufacturing · Quality & Efficiency Upgrade",
        "railHead": "PROGRAM",
        "specs": [
          {
            "k": "指标 01",
            "v": "降本",
            "vn": "Cost Down"
          },
          {
            "k": "指标 02",
            "v": "提效",
            "vn": "Efficiency"
          },
          {
            "k": "指标 03",
            "v": "革新",
            "vn": "Innovation"
          },
          {
            "k": "指标 04",
            "v": "突围",
            "vn": "Breakthrough"
          }
        ],
        "footer": "FILE · LEAN-2026 / REV.A"
      }
    }
  },
  {
    "key": "theme05_page002",
    "themeKey": "theme05",
    "pageNumber": 2,
    "layout": "THEME05-002",
    "slot": "excover2",
    "label": "封面 创意破圈",
    "bgClass": "",
    "controls": [
      {
        "key": "showTopRule",
        "label": "顶部分隔线",
        "type": "toggle",
        "default": true,
        "publicKey": "showTopRule",
        "publicLabel": "顶部分隔线"
      },
      {
        "key": "showNumber",
        "label": "编号徽标",
        "type": "toggle",
        "default": true,
        "publicKey": "showNumber",
        "publicLabel": "编号徽标"
      },
      {
        "key": "chipCount",
        "label": "色块数量",
        "type": "slider",
        "default": 5,
        "min": 1,
        "max": 5,
        "step": 1,
        "publicKey": "chipCount",
        "publicLabel": "色块数量"
      },
      {
        "key": "showBanner",
        "label": "底部标语条",
        "type": "toggle",
        "default": true,
        "publicKey": "showBanner",
        "publicLabel": "底部标语条"
      }
    ],
    "defaultProps": {
      "showTopRule": true,
      "showNumber": true,
      "chipCount": 5,
      "showBanner": true,
      "copy": {
        "top": "PULSE® BRAND LAB · FULL-FUNNEL MARKETING",
        "number": "NO. 02",
        "caption": "2026 年度全平台品牌整合营销方案",
        "titleTop": "创意破圈",
        "titleBottom": "流量赋能",
        "banner": "内容驱动传播 · 创意引爆市场",
        "bannerEn": "Content Drives Reach · Idea Ignites Market"
      }
    }
  },
  {
    "key": "theme05_page003",
    "themeKey": "theme05",
    "pageNumber": 3,
    "layout": "THEME05-003",
    "slot": "excover3",
    "label": "封面 链通全国",
    "bgClass": "",
    "controls": [
      {
        "key": "accentColor",
        "label": "强调色",
        "type": "color",
        "default": "#E8741C",
        "options": [
          "#E8741C",
          "#E0301E",
          "#F2C00C",
          "#2F9450",
          "#2742C2"
        ],
        "publicKey": "accentColor",
        "publicLabel": "强调色"
      },
      {
        "key": "showYear",
        "label": "年份水印",
        "type": "toggle",
        "default": true,
        "publicKey": "showYear",
        "publicLabel": "年份水印"
      },
      {
        "key": "showSummary",
        "label": "右上摘要",
        "type": "toggle",
        "default": true,
        "publicKey": "showSummary",
        "publicLabel": "右上摘要"
      },
      {
        "key": "showBotBand",
        "label": "底部色谱条",
        "type": "toggle",
        "default": true,
        "publicKey": "showBotBand",
        "publicLabel": "底部色谱条"
      }
    ],
    "defaultProps": {
      "accentColor": "#E8741C",
      "showYear": true,
      "showSummary": true,
      "showBotBand": true,
      "copy": {
        "brand": "链网",
        "brandEn": "SUPPLY-NET",
        "meta": "GROUP SUPPLY CHAIN · STRATEGY 03 / 04",
        "year": "2026—2028",
        "summary": "打通物流脉络 构筑产业护城河",
        "summaryEn": "Connect The Network · Build The Moat",
        "kicker": "集团供应链体系三年发展战略",
        "titleTop": "链通全国",
        "titleBottom": "高效履约",
        "subtitle": "Three-Year Supply Chain Development Strategy"
      }
    }
  },
  {
    "key": "theme05_page004",
    "themeKey": "theme05",
    "pageNumber": 4,
    "layout": "THEME05-004",
    "slot": "excover4",
    "label": "封面 把握消费趋势",
    "bgClass": "",
    "controls": [
      {
        "key": "accentColor",
        "label": "高亮色",
        "type": "color",
        "default": "#E0301E",
        "options": [
          "#E0301E",
          "#E8741C",
          "#F2C00C",
          "#2F9450",
          "#7A3C9A"
        ],
        "publicKey": "accentColor",
        "publicLabel": "高亮色"
      },
      {
        "key": "showFrame",
        "label": "内边框",
        "type": "toggle",
        "default": true,
        "publicKey": "showFrame",
        "publicLabel": "内边框"
      },
      {
        "key": "menuCount",
        "label": "菜单行数",
        "type": "slider",
        "default": 4,
        "min": 1,
        "max": 4,
        "step": 1,
        "publicKey": "menuCount",
        "publicLabel": "菜单行数"
      },
      {
        "key": "showFoot",
        "label": "底部标语",
        "type": "toggle",
        "default": true,
        "publicKey": "showFoot",
        "publicLabel": "底部标语"
      }
    ],
    "defaultProps": {
      "accentColor": "#E0301E",
      "showFrame": true,
      "menuCount": 4,
      "showFoot": true,
      "copy": {
        "setup": "SETUP · RETAIL OPS",
        "cornerLeft": "门店运营培训",
        "cornerRight": "SHEET 04 / 04",
        "titleTop": "把握消费趋势",
        "titleBottom": "激活终端潜力",
        "subtitle": "全国零售门店运营管理暨营销实战培训",
        "menu": [
          {
            "label": "消费趋势 TREND SENSING",
            "tag": "ON"
          },
          {
            "label": "终端潜力 STORE POTENTIAL",
            "tag": "ON"
          },
          {
            "label": "运营管理 OPS MANAGEMENT",
            "tag": "16TH"
          },
          {
            "label": "营销实战 FIELD MARKETING",
            "tag": "+6 DB"
          }
        ],
        "slogan": "用心服务客户，实干创造业绩",
        "foot": "PRESS (MENU) TO BEGIN · SERVE WITH HEART, ACHIEVE BY ACTION"
      }
    }
  },
  {
    "key": "theme05_page005",
    "themeKey": "theme05",
    "pageNumber": 5,
    "layout": "THEME05-005",
    "slot": "cover",
    "label": "封面 Cover",
    "bgClass": "",
    "controls": [
      {
        "key": "accentColor",
        "label": "强调色",
        "type": "color",
        "default": "#d8402e",
        "options": [
          "#d8402e",
          "#e2742c",
          "#efbe2e",
          "#3c9a52",
          "#4da0c6",
          "#2c44a0",
          "#7a3c90"
        ],
        "desc": "眉标与装饰条的强调色，取自色谱。",
        "publicKey": "accentColor",
        "publicLabel": "强调色",
        "description": "眉标与装饰条的强调色，取自色谱。"
      },
      {
        "key": "showSidePanel",
        "label": "侧栏参数面板",
        "type": "toggle",
        "default": true,
        "desc": "显示右侧规格参数面板。",
        "publicKey": "showSidePanel",
        "publicLabel": "侧栏参数面板",
        "description": "显示右侧规格参数面板。"
      },
      {
        "key": "sidePanelTheme",
        "label": "侧栏主题",
        "type": "radio",
        "default": "dark",
        "options": [
          "dark",
          "light"
        ],
        "desc": "侧栏深色 / 浅色两种配色。",
        "publicKey": "sidePanelTheme",
        "publicLabel": "侧栏主题",
        "description": "侧栏深色 / 浅色两种配色。"
      },
      {
        "key": "metaCount",
        "label": "参数行数",
        "type": "slider",
        "default": 4,
        "min": 1,
        "max": 5,
        "step": 1,
        "desc": "侧栏展示的规格行数量。",
        "publicKey": "metaCount",
        "publicLabel": "参数行数",
        "description": "侧栏展示的规格行数量。"
      },
      {
        "key": "showSwatches",
        "label": "色谱色卡",
        "type": "toggle",
        "default": true,
        "desc": "侧栏底部的七色色谱色卡。",
        "publicKey": "showSwatches",
        "publicLabel": "色谱色卡",
        "description": "侧栏底部的七色色谱色卡。"
      },
      {
        "key": "showColorBand",
        "label": "底部色谱条",
        "type": "toggle",
        "default": true,
        "desc": "页面底部贯穿的色谱条带。",
        "publicKey": "showColorBand",
        "publicLabel": "底部色谱条",
        "description": "页面底部贯穿的色谱条带。"
      },
      {
        "key": "showTagline",
        "label": "装饰标语",
        "type": "toggle",
        "default": true,
        "desc": "左下角的一句装饰性结语。",
        "publicKey": "showTagline",
        "publicLabel": "装饰标语",
        "description": "左下角的一句装饰性结语。"
      }
    ],
    "defaultProps": {
      "accentColor": "#d8402e",
      "showSidePanel": true,
      "sidePanelTheme": "dark",
      "metaCount": 4,
      "showSwatches": true,
      "showColorBand": true,
      "showTagline": true,
      "copy": {
        "brand": "AICL",
        "meta": [
          "UNITED STATES · AI",
          "2024 FY",
          "DEALS ≥ $100M"
        ],
        "eyebrow": "美国 AI 大额融资 · RESEARCH",
        "display": "2024",
        "titleLines": [
          "美国大额融资",
          "AI 公司调研报告"
        ],
        "sub": "数据口径：2024 全年 · 单笔 ≥ 1 亿美元",
        "tagline": "从资本流向，看 AI 产业下一阶段的真实重心。",
        "panelHead": "SPECIFICATION",
        "specs": [
          {
            "k": "数据口径",
            "v": "≥ $100M"
          },
          {
            "k": "大额事件",
            "v": "97 笔"
          },
          {
            "k": "研究主题",
            "v": "美国 AI"
          },
          {
            "k": "报告日期",
            "v": "2026.06"
          },
          {
            "k": "报告篇幅",
            "v": "14 页"
          }
        ]
      }
    }
  },
  {
    "key": "theme05_page006",
    "themeKey": "theme05",
    "pageNumber": 6,
    "layout": "THEME05-006",
    "slot": "spec",
    "label": "摘要 Overview",
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
        "desc": "左侧图示槽位数量（0–2），图片按上传比例自适应。",
        "publicKey": "imageCount",
        "publicLabel": "图片数量",
        "description": "左侧图示槽位数量（0–2），图片按上传比例自适应。"
      },
      {
        "key": "specRowCount",
        "label": "指标行数",
        "type": "slider",
        "default": 4,
        "min": 2,
        "max": 5,
        "step": 1,
        "desc": "右侧规格指标表的行数。",
        "publicKey": "specRowCount",
        "publicLabel": "指标行数",
        "description": "右侧规格指标表的行数。"
      },
      {
        "key": "showHighlight",
        "label": "关键数据高亮",
        "type": "toggle",
        "default": true,
        "desc": "正文中关键数字使用强调色高亮。",
        "publicKey": "showHighlight",
        "publicLabel": "关键数据高亮",
        "description": "正文中关键数字使用强调色高亮。"
      },
      {
        "key": "accentColor",
        "label": "强调色",
        "type": "color",
        "default": "#2c44a0",
        "options": [
          "#d8402e",
          "#e2742c",
          "#efbe2e",
          "#3c9a52",
          "#4da0c6",
          "#2c44a0",
          "#7a3c90"
        ],
        "desc": "正文高亮使用的强调色。",
        "publicKey": "accentColor",
        "publicLabel": "强调色",
        "description": "正文高亮使用的强调色。"
      },
      {
        "key": "chartType",
        "label": "占比图样式",
        "type": "radio",
        "default": "bar",
        "options": [
          "bar",
          "cells"
        ],
        "desc": "占比可视化：整条堆叠 (bar) 或分段色块 (cells)。",
        "publicKey": "chartType",
        "publicLabel": "占比图样式",
        "description": "占比可视化：整条堆叠 (bar) 或分段色块 (cells)。"
      },
      {
        "key": "showProportionBar",
        "label": "底部占比图",
        "type": "toggle",
        "default": true,
        "desc": "显示底部分类占比可视化。",
        "publicKey": "showProportionBar",
        "publicLabel": "底部占比图",
        "description": "显示底部分类占比可视化。"
      },
      {
        "key": "showSheetLabel",
        "label": "页码标签",
        "type": "toggle",
        "default": true,
        "desc": "右上角的页码 / 章节标签。",
        "publicKey": "showSheetLabel",
        "publicLabel": "页码标签",
        "description": "右上角的页码 / 章节标签。"
      }
    ],
    "defaultProps": {
      "imageCount": 1,
      "specRowCount": 4,
      "showHighlight": true,
      "accentColor": "#2c44a0",
      "chartType": "bar",
      "showProportionBar": true,
      "showSheetLabel": true,
      "copy": {
        "title": "报告摘要",
        "sheet": "OVERVIEW · 02 / 32",
        "figCap": "FIG.1 — 资本流向全景",
        "figMono": "97 DEALS · 16 SECTORS · 4 QUARTERS",
        "leadPre": "2024 年美国 AI 初创公司吸纳约 ",
        "leadHL1": "970 亿美元",
        "leadMid": " 风险投资，单笔 ≥ 1 亿美元的大额融资事件达 ",
        "leadHL2": "97 笔",
        "leadPost": "，资本向头部高度集中。",
        "specs": [
          {
            "k": "全年融资",
            "v": "970 亿美元"
          },
          {
            "k": "大额事件",
            "v": "97 笔"
          },
          {
            "k": "平均单笔",
            "v": "10 亿美元"
          },
          {
            "k": "湾区占比",
            "v": "63.9%"
          },
          {
            "k": "Top10 集中",
            "v": "23.8%"
          }
        ],
        "propTitle": "赛道融资占比",
        "props": [
          {
            "name": "通用大模型",
            "v": 43.3,
            "c": "#d8402e"
          },
          {
            "name": "垂直应用",
            "v": 25.3,
            "c": "#e2742c"
          },
          {
            "name": "基础设施",
            "v": 16.3,
            "c": "#4da0c6"
          },
          {
            "name": "AI 芯片",
            "v": 10,
            "c": "#2c44a0"
          },
          {
            "name": "其他",
            "v": 5.1,
            "c": "#3c9a52"
          }
        ]
      }
    }
  },
  {
    "key": "theme05_page007",
    "themeKey": "theme05",
    "pageNumber": 7,
    "layout": "THEME05-007",
    "slot": "grid",
    "label": "结构 Contents",
    "bgClass": "",
    "controls": [
      {
        "key": "cardCount",
        "label": "卡片数量",
        "type": "slider",
        "default": 7,
        "min": 1,
        "max": 8,
        "step": 1,
        "desc": "展示的章节卡数量。",
        "publicKey": "cardCount",
        "publicLabel": "卡片数量",
        "description": "展示的章节卡数量。"
      },
      {
        "key": "columns",
        "label": "列数",
        "type": "slider",
        "default": 4,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "网格列数，行数自动换行。",
        "publicKey": "columns",
        "publicLabel": "列数",
        "description": "网格列数，行数自动换行。"
      },
      {
        "key": "focusEnabled",
        "label": "重点卡",
        "type": "toggle",
        "default": true,
        "desc": "是否突出显示某一张卡片。",
        "publicKey": "focusEnabled",
        "publicLabel": "重点卡",
        "description": "是否突出显示某一张卡片。"
      },
      {
        "key": "focusIndex",
        "label": "重点卡序号",
        "type": "slider",
        "default": 2,
        "min": 1,
        "max": 8,
        "step": 1,
        "desc": "被突出显示的卡片序号（从 1 起）。",
        "publicKey": "focusIndex",
        "publicLabel": "重点卡序号",
        "description": "被突出显示的卡片序号（从 1 起）。"
      },
      {
        "key": "showCardGraphic",
        "label": "色块图形",
        "type": "toggle",
        "default": true,
        "desc": "卡片内的抽象色块构图。",
        "publicKey": "showCardGraphic",
        "publicLabel": "色块图形",
        "description": "卡片内的抽象色块构图。"
      },
      {
        "key": "showCardIndex",
        "label": "序号",
        "type": "toggle",
        "default": true,
        "desc": "卡片右上角的两位序号。",
        "publicKey": "showCardIndex",
        "publicLabel": "序号",
        "description": "卡片右上角的两位序号。"
      },
      {
        "key": "showCardCode",
        "label": "卡片代号",
        "type": "toggle",
        "default": true,
        "desc": "卡片右下角的大号代号。",
        "publicKey": "showCardCode",
        "publicLabel": "卡片代号",
        "description": "卡片右下角的大号代号。"
      },
      {
        "key": "showNote",
        "label": "装饰注释",
        "type": "toggle",
        "default": true,
        "desc": "标题右侧的装饰性说明文字。",
        "publicKey": "showNote",
        "publicLabel": "装饰注释",
        "description": "标题右侧的装饰性说明文字。"
      }
    ],
    "defaultProps": {
      "cardCount": 7,
      "columns": 4,
      "focusEnabled": true,
      "focusIndex": 2,
      "showCardGraphic": true,
      "showCardIndex": true,
      "showCardCode": true,
      "showNote": true,
      "copy": {
        "title": "报告结构",
        "note": [
          "07 章 · 横纵分析",
          "FROM METHOD TO OUTLOOK"
        ],
        "chapters": [
          {
            "zh": "研究方法",
            "en": "METHODOLOGY",
            "code": "MT"
          },
          {
            "zh": "市场全景",
            "en": "MARKET PANORAMA",
            "code": "MK"
          },
          {
            "zh": "横向透视",
            "en": "CROSS-SECTION",
            "code": "CS"
          },
          {
            "zh": "产业链分层",
            "en": "VALUE CHAIN",
            "code": "VC"
          },
          {
            "zh": "典型案例",
            "en": "CASE STUDIES",
            "code": "CA"
          },
          {
            "zh": "风险研判",
            "en": "RISK ASSESSMENT",
            "code": "RK"
          },
          {
            "zh": "结论展望",
            "en": "OUTLOOK",
            "code": "OL"
          },
          {
            "zh": "附录数据",
            "en": "APPENDIX",
            "code": "AP"
          }
        ],
        "skins": [
          {
            "bg": "#d8402e",
            "fg": "#fff",
            "blocks": [
              [
                2,
                42,
                40,
                58,
                "#efbe2e"
              ],
              [
                34,
                8,
                34,
                54,
                "#e2742c"
              ],
              [
                64,
                30,
                34,
                70,
                "#f2efe4"
              ]
            ]
          },
          {
            "bg": "#f2efe4",
            "fg": "#1a1814",
            "blocks": [
              [
                2,
                30,
                30,
                70,
                "#d8402e"
              ],
              [
                30,
                55,
                34,
                45,
                "#2c44a0"
              ],
              [
                62,
                18,
                36,
                82,
                "#efbe2e"
              ]
            ]
          },
          {
            "bg": "#3c9a52",
            "fg": "#fff",
            "blocks": [
              [
                0,
                20,
                46,
                40,
                "#efbe2e"
              ],
              [
                40,
                48,
                38,
                52,
                "#4da0c6"
              ],
              [
                70,
                6,
                30,
                46,
                "#f2efe4"
              ]
            ]
          },
          {
            "bg": "#2c44a0",
            "fg": "#fff",
            "blocks": [
              [
                2,
                48,
                36,
                52,
                "#4da0c6"
              ],
              [
                30,
                12,
                36,
                46,
                "#d8402e"
              ],
              [
                62,
                40,
                36,
                60,
                "#efbe2e"
              ]
            ]
          },
          {
            "bg": "#efbe2e",
            "fg": "#1a1814",
            "blocks": [
              [
                0,
                30,
                42,
                50,
                "#d8402e"
              ],
              [
                38,
                10,
                30,
                64,
                "#2c44a0"
              ],
              [
                64,
                46,
                36,
                54,
                "#3c9a52"
              ]
            ]
          },
          {
            "bg": "#1a1814",
            "fg": "#f2efe4",
            "blocks": [
              [
                2,
                24,
                32,
                54,
                "#3c9a52"
              ],
              [
                32,
                46,
                34,
                54,
                "#e2742c"
              ],
              [
                62,
                16,
                36,
                62,
                "#4da0c6"
              ]
            ]
          },
          {
            "bg": "#4da0c6",
            "fg": "#fff",
            "blocks": [
              [
                0,
                40,
                40,
                60,
                "#2c44a0"
              ],
              [
                34,
                14,
                34,
                50,
                "#efbe2e"
              ],
              [
                64,
                34,
                36,
                66,
                "#d8402e"
              ]
            ]
          },
          {
            "bg": "#7a3c90",
            "fg": "#fff",
            "blocks": [
              [
                2,
                30,
                36,
                62,
                "#efbe2e"
              ],
              [
                32,
                54,
                34,
                46,
                "#4da0c6"
              ],
              [
                62,
                12,
                36,
                60,
                "#e2742c"
              ]
            ]
          }
        ]
      }
    }
  },
  {
    "key": "theme05_page008",
    "themeKey": "theme05",
    "pageNumber": 8,
    "layout": "THEME05-008",
    "slot": "split",
    "label": "方法 Methodology",
    "bgClass": "",
    "controls": [
      {
        "key": "menuItemCount",
        "label": "菜单项数量",
        "type": "slider",
        "default": 6,
        "min": 2,
        "max": 6,
        "step": 1,
        "desc": "右侧控制菜单的行数。",
        "publicKey": "menuItemCount",
        "publicLabel": "菜单项数量",
        "description": "右侧控制菜单的行数。"
      },
      {
        "key": "focusEnabled",
        "label": "高亮项",
        "type": "toggle",
        "default": true,
        "desc": "是否高亮某一条菜单项。",
        "publicKey": "focusEnabled",
        "publicLabel": "高亮项",
        "description": "是否高亮某一条菜单项。"
      },
      {
        "key": "focusIndex",
        "label": "高亮项序号",
        "type": "slider",
        "default": 1,
        "min": 1,
        "max": 6,
        "step": 1,
        "desc": "被高亮的菜单项序号（从 1 起）。",
        "publicKey": "focusIndex",
        "publicLabel": "高亮项序号",
        "description": "被高亮的菜单项序号（从 1 起）。"
      },
      {
        "key": "panelColor",
        "label": "面板色",
        "type": "color",
        "default": "#2c44a0",
        "options": [
          "#2c44a0",
          "#7a3c90",
          "#3c9a52",
          "#d8402e",
          "#1a1814"
        ],
        "desc": "右侧菜单面板背景色（取深色保证文字可读）。",
        "publicKey": "panelColor",
        "publicLabel": "面板色",
        "description": "右侧菜单面板背景色（取深色保证文字可读）。"
      },
      {
        "key": "accentColor",
        "label": "强调色",
        "type": "color",
        "default": "#d8402e",
        "options": [
          "#d8402e",
          "#e2742c",
          "#efbe2e",
          "#3c9a52",
          "#4da0c6",
          "#2c44a0",
          "#7a3c90"
        ],
        "desc": "左侧眉标的强调色。",
        "publicKey": "accentColor",
        "publicLabel": "强调色",
        "description": "左侧眉标的强调色。"
      },
      {
        "key": "specRowCount",
        "label": "左侧条目数",
        "type": "slider",
        "default": 4,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "左侧方法说明的条目数量。",
        "publicKey": "itemCount",
        "publicLabel": "左侧条目数",
        "description": "左侧方法说明的条目数量。"
      },
      {
        "key": "showColorBand",
        "label": "色谱条",
        "type": "toggle",
        "default": true,
        "desc": "左下角的小色谱条带。",
        "publicKey": "showColorBand",
        "publicLabel": "色谱条",
        "description": "左下角的小色谱条带。"
      },
      {
        "key": "showWordmark",
        "label": "标识",
        "type": "toggle",
        "default": true,
        "desc": "左下角的品牌标识。",
        "publicKey": "showWordmark",
        "publicLabel": "标识",
        "description": "左下角的品牌标识。"
      }
    ],
    "defaultProps": {
      "menuItemCount": 6,
      "focusEnabled": true,
      "focusIndex": 1,
      "panelColor": "#2c44a0",
      "accentColor": "#d8402e",
      "specRowCount": 4,
      "showColorBand": true,
      "showWordmark": true,
      "copy": {
        "eyebrow": "METHODOLOGY",
        "title": "横纵分析法",
        "sub": "横向看空间对比，纵向看时间演化，交叉锁定资本流向。",
        "specs": [
          {
            "k": "横向 / Horizontal",
            "v": "空间对比"
          },
          {
            "k": "纵向 / Vertical",
            "v": "时间演化"
          },
          {
            "k": "交叉 / Cross",
            "v": "产业分层"
          },
          {
            "k": "目标 / Output",
            "v": "资本流向"
          }
        ],
        "brand": "AICL",
        "panelHead": "分析框架 · METHOD",
        "menu": [
          {
            "k": "横向分析",
            "v": "空间"
          },
          {
            "k": "纵向分析",
            "v": "时间"
          },
          {
            "k": "交叉分析",
            "v": "分层"
          },
          {
            "k": "数据口径",
            "v": "≥ $100M"
          },
          {
            "k": "样本规模",
            "v": "97 笔"
          },
          {
            "k": "输出结论",
            "v": "投资判断"
          }
        ],
        "panelFoot": "SELECT WITH (▲ ▼) · 横纵交叉定位资本流向"
      }
    }
  },
  {
    "key": "theme05_page009",
    "themeKey": "theme05",
    "pageNumber": 9,
    "layout": "THEME05-009",
    "slot": "trend",
    "label": "趋势 Trend",
    "bgClass": "",
    "controls": [
      {
        "key": "chartType",
        "label": "图表类型",
        "type": "radio",
        "default": "bar",
        "options": [
          {
            "value": "bar",
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
        "desc": "主图表呈现方式：柱状 / 折线 / 面积。",
        "publicKey": "chartType",
        "publicLabel": "图表类型",
        "description": "主图表呈现方式：柱状 / 折线 / 面积。"
      },
      {
        "key": "pointCount",
        "label": "数据点数量",
        "type": "slider",
        "default": 4,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "图表与指标列表展示的数据点（时间截面）数量。",
        "publicKey": "pointCount",
        "publicLabel": "数据点数量",
        "description": "图表与指标列表展示的数据点（时间截面）数量。"
      },
      {
        "key": "focusEnabled",
        "label": "重点标注",
        "type": "toggle",
        "default": true,
        "desc": "是否突出某一个数据点（峰值 / 关键截面）。",
        "publicKey": "focusEnabled",
        "publicLabel": "重点标注",
        "description": "是否突出某一个数据点（峰值 / 关键截面）。"
      },
      {
        "key": "focusIndex",
        "label": "重点数据点",
        "type": "slider",
        "default": 3,
        "min": 1,
        "max": 4,
        "step": 1,
        "desc": "被突出的数据点序号（从 1 起）。",
        "publicKey": "focusIndex",
        "publicLabel": "重点数据点",
        "description": "被突出的数据点序号（从 1 起）。"
      },
      {
        "key": "showSecondary",
        "label": "副数据系列",
        "type": "toggle",
        "default": true,
        "desc": "叠加第二条数据系列（虚线）。",
        "publicKey": "showSecondary",
        "publicLabel": "副数据系列",
        "description": "叠加第二条数据系列（虚线）。"
      },
      {
        "key": "showMetrics",
        "label": "指标列表",
        "type": "toggle",
        "default": true,
        "desc": "右侧的逐项数据指标列表。",
        "publicKey": "showMetrics",
        "publicLabel": "指标列表",
        "description": "右侧的逐项数据指标列表。"
      },
      {
        "key": "accentColor",
        "label": "强调色",
        "type": "color",
        "default": "#d8402e",
        "options": [
          "#d8402e",
          "#e2742c",
          "#efbe2e",
          "#3c9a52",
          "#4da0c6",
          "#2c44a0",
          "#7a3c90"
        ],
        "desc": "重点标注与眉标的强调色。",
        "publicKey": "accentColor",
        "publicLabel": "强调色",
        "description": "重点标注与眉标的强调色。"
      },
      {
        "key": "showConclusion",
        "label": "结论文案",
        "type": "toggle",
        "default": true,
        "desc": "右下角的一句装饰性结论。",
        "publicKey": "showConclusion",
        "publicLabel": "结论文案",
        "description": "右下角的一句装饰性结论。"
      },
      {
        "key": "showSheetLabel",
        "label": "页码标签",
        "type": "toggle",
        "default": true,
        "desc": "右上角的页码 / 章节标签。",
        "publicKey": "showSheetLabel",
        "publicLabel": "页码标签",
        "description": "右上角的页码 / 章节标签。"
      }
    ],
    "defaultProps": {
      "chartType": "bar",
      "pointCount": 4,
      "focusEnabled": true,
      "focusIndex": 3,
      "showSecondary": true,
      "showMetrics": true,
      "accentColor": "#d8402e",
      "showConclusion": true,
      "showSheetLabel": true,
      "copy": {
        "eyebrow": "MARKET PANORAMA",
        "title": "市场全景 · 纵向趋势",
        "sub": "逐季度融资额走势",
        "sheet": "TREND · 05 / 32",
        "primaryName": "融资额（亿美元）",
        "secondaryName": "事件数（笔）",
        "points": [
          {
            "axis": "Q1",
            "v": 162,
            "s": 18
          },
          {
            "axis": "Q2",
            "v": 284,
            "s": 26
          },
          {
            "axis": "Q3",
            "v": 318,
            "s": 31
          },
          {
            "axis": "Q4",
            "v": 206,
            "s": 22
          }
        ],
        "conclusion": "高峰过后不是崩塌，而是市场开始筛选。"
      }
    }
  },
  {
    "key": "theme05_page010",
    "themeKey": "theme05",
    "pageNumber": 10,
    "layout": "THEME05-010",
    "slot": "share",
    "label": "占比 Share",
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
            "label": "环形"
          },
          {
            "value": "bar",
            "label": "条形"
          },
          {
            "value": "stack",
            "label": "堆叠"
          }
        ],
        "desc": "占比图呈现方式：环形 / 条形 / 堆叠。",
        "publicKey": "chartType",
        "publicLabel": "图表类型",
        "description": "占比图呈现方式：环形 / 条形 / 堆叠。"
      },
      {
        "key": "segmentCount",
        "label": "分段数量",
        "type": "slider",
        "default": 5,
        "min": 3,
        "max": 5,
        "step": 1,
        "desc": "参与占比拆分的分段数量。",
        "publicKey": "segmentCount",
        "publicLabel": "分段数量",
        "description": "参与占比拆分的分段数量。"
      },
      {
        "key": "focusEnabled",
        "label": "重点分段",
        "type": "toggle",
        "default": true,
        "desc": "是否突出某一个分段（环形居中显示该项）。",
        "publicKey": "focusEnabled",
        "publicLabel": "重点分段",
        "description": "是否突出某一个分段（环形居中显示该项）。"
      },
      {
        "key": "focusIndex",
        "label": "重点分段序号",
        "type": "slider",
        "default": 1,
        "min": 1,
        "max": 5,
        "step": 1,
        "desc": "被突出的分段序号（从 1 起）。",
        "publicKey": "focusIndex",
        "publicLabel": "重点分段序号",
        "description": "被突出的分段序号（从 1 起）。"
      },
      {
        "key": "showLegend",
        "label": "图例列表",
        "type": "toggle",
        "default": true,
        "desc": "右侧带数值的图例列表。",
        "publicKey": "showValueLabels",
        "publicLabel": "图例列表",
        "description": "右侧带数值的图例列表。"
      },
      {
        "key": "showConclusion",
        "label": "结论文案",
        "type": "toggle",
        "default": true,
        "desc": "图例下方的一句装饰性结论。",
        "publicKey": "showConclusion",
        "publicLabel": "结论文案",
        "description": "图例下方的一句装饰性结论。"
      },
      {
        "key": "accentColor",
        "label": "强调色",
        "type": "color",
        "default": "#d8402e",
        "options": [
          "#d8402e",
          "#e2742c",
          "#efbe2e",
          "#3c9a52",
          "#4da0c6",
          "#2c44a0",
          "#7a3c90"
        ],
        "desc": "眉标与重点项的强调色。",
        "publicKey": "accentColor",
        "publicLabel": "强调色",
        "description": "眉标与重点项的强调色。"
      },
      {
        "key": "showSheetLabel",
        "label": "页码标签",
        "type": "toggle",
        "default": true,
        "desc": "右上角的页码 / 章节标签。",
        "publicKey": "showSheetLabel",
        "publicLabel": "页码标签",
        "description": "右上角的页码 / 章节标签。"
      }
    ],
    "defaultProps": {
      "chartType": "donut",
      "segmentCount": 5,
      "focusEnabled": true,
      "focusIndex": 1,
      "showLegend": true,
      "showConclusion": true,
      "accentColor": "#d8402e",
      "showSheetLabel": true,
      "copy": {
        "eyebrow": "CROSS-SECTION",
        "title": "横向透视 · 赛道占比",
        "sub": "钱流向哪些赛道",
        "sheet": "SHARE · 06 / 32",
        "unit": "SHARE OF $97B",
        "segments": [
          {
            "name": "通用大模型",
            "v": 43.3,
            "c": "#d8402e"
          },
          {
            "name": "垂直应用",
            "v": 25.3,
            "c": "#e2742c"
          },
          {
            "name": "基础设施",
            "v": 16.3,
            "c": "#4da0c6"
          },
          {
            "name": "AI 芯片",
            "v": 10,
            "c": "#2c44a0"
          },
          {
            "name": "其他",
            "v": 5.1,
            "c": "#3c9a52"
          }
        ],
        "conclusion": "融资额排名背后，是资本对叙事和兑现的双重押注。"
      }
    }
  },
  {
    "key": "theme05_page011",
    "themeKey": "theme05",
    "pageNumber": 11,
    "layout": "THEME05-011",
    "slot": "chain",
    "label": "产业链 Value Chain",
    "bgClass": "",
    "controls": [
      {
        "key": "layerCount",
        "label": "层级数量",
        "type": "slider",
        "default": 3,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "纵向堆叠的结构层级数量。",
        "publicKey": "layerCount",
        "publicLabel": "层级数量",
        "description": "纵向堆叠的结构层级数量。"
      },
      {
        "key": "focusEnabled",
        "label": "重点层级",
        "type": "toggle",
        "default": true,
        "desc": "是否突出某一层级。",
        "publicKey": "focusEnabled",
        "publicLabel": "重点层级",
        "description": "是否突出某一层级。"
      },
      {
        "key": "focusIndex",
        "label": "重点层级序号",
        "type": "slider",
        "default": 2,
        "min": 1,
        "max": 4,
        "step": 1,
        "desc": "被突出的层级序号（从 1 起）。",
        "publicKey": "focusIndex",
        "publicLabel": "重点层级序号",
        "description": "被突出的层级序号（从 1 起）。"
      },
      {
        "key": "showItems",
        "label": "层级标签",
        "type": "toggle",
        "default": true,
        "desc": "每个层级内部的要素标签。",
        "publicKey": "showItems",
        "publicLabel": "层级标签",
        "description": "每个层级内部的要素标签。"
      },
      {
        "key": "showSidePanel",
        "label": "侧栏分布",
        "type": "toggle",
        "default": true,
        "desc": "右侧的分布占比面板。",
        "publicKey": "showSidePanel",
        "publicLabel": "侧栏分布",
        "description": "右侧的分布占比面板。"
      },
      {
        "key": "accentColor",
        "label": "强调色",
        "type": "color",
        "default": "#d8402e",
        "options": [
          "#d8402e",
          "#e2742c",
          "#efbe2e",
          "#3c9a52",
          "#4da0c6",
          "#2c44a0",
          "#7a3c90"
        ],
        "desc": "眉标与重点层级标记的强调色。",
        "publicKey": "accentColor",
        "publicLabel": "强调色",
        "description": "眉标与重点层级标记的强调色。"
      },
      {
        "key": "showConclusion",
        "label": "结论文案",
        "type": "toggle",
        "default": true,
        "desc": "侧栏底部的一句装饰性结论。",
        "publicKey": "showConclusion",
        "publicLabel": "结论文案",
        "description": "侧栏底部的一句装饰性结论。"
      },
      {
        "key": "showSheetLabel",
        "label": "页码标签",
        "type": "toggle",
        "default": true,
        "desc": "右上角的页码 / 章节标签。",
        "publicKey": "showSheetLabel",
        "publicLabel": "页码标签",
        "description": "右上角的页码 / 章节标签。"
      }
    ],
    "defaultProps": {
      "layerCount": 3,
      "focusEnabled": true,
      "focusIndex": 2,
      "showItems": true,
      "showSidePanel": true,
      "accentColor": "#d8402e",
      "showConclusion": true,
      "showSheetLabel": true,
      "copy": {
        "eyebrow": "VALUE CHAIN",
        "title": "产业链分层透视",
        "sub": "上游、中游、下游的资本位置",
        "sheet": "CHAIN · 07 / 32",
        "layers": [
          {
            "zh": "上游",
            "en": "UPSTREAM",
            "c": "#4da0c6",
            "items": [
              "算力",
              "芯片",
              "数据"
            ]
          },
          {
            "zh": "中游",
            "en": "MIDSTREAM",
            "c": "#2c44a0",
            "items": [
              "通用模型",
              "专用模型"
            ]
          },
          {
            "zh": "下游",
            "en": "DOWNSTREAM",
            "c": "#3c9a52",
            "items": [
              "企业应用",
              "搜索",
              "机器人"
            ]
          },
          {
            "zh": "支撑",
            "en": "ENABLERS",
            "c": "#7a3c90",
            "items": [
              "安全",
              "评测",
              "数据标注"
            ]
          }
        ],
        "sideHead": "地区分布",
        "sideUnit": "GEO SHARE",
        "dist": [
          {
            "name": "旧金山湾区",
            "v": 63.9,
            "c": "#d8402e"
          },
          {
            "name": "纽约",
            "v": 12.4,
            "c": "#e2742c"
          },
          {
            "name": "西雅图",
            "v": 9.8,
            "c": "#efbe2e"
          },
          {
            "name": "波士顿",
            "v": 7.7,
            "c": "#3c9a52"
          }
        ],
        "conclusion": "产业链分层决定了资本确定性与商业风险的不同位置。"
      }
    }
  },
  {
    "key": "theme05_page012",
    "themeKey": "theme05",
    "pageNumber": 12,
    "layout": "THEME05-012",
    "slot": "cases",
    "label": "案例 Cases",
    "bgClass": "",
    "controls": [
      {
        "key": "cardCount",
        "label": "案例卡数量",
        "type": "slider",
        "default": 3,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "横向排列的案例卡数量。",
        "publicKey": "cardCount",
        "publicLabel": "案例卡数量",
        "description": "横向排列的案例卡数量。"
      },
      {
        "key": "focusEnabled",
        "label": "重点卡",
        "type": "toggle",
        "default": true,
        "desc": "是否突出某一张案例卡。",
        "publicKey": "focusEnabled",
        "publicLabel": "重点卡",
        "description": "是否突出某一张案例卡。"
      },
      {
        "key": "focusIndex",
        "label": "重点卡序号",
        "type": "slider",
        "default": 1,
        "min": 1,
        "max": 4,
        "step": 1,
        "desc": "被突出的案例卡序号（从 1 起）。",
        "publicKey": "focusIndex",
        "publicLabel": "重点卡序号",
        "description": "被突出的案例卡序号（从 1 起）。"
      },
      {
        "key": "imageCount",
        "label": "图片槽数量",
        "type": "slider",
        "default": 2,
        "min": 0,
        "max": 3,
        "step": 1,
        "desc": "底部图片槽数量（0–3）；按各图比例自适应排布，构图自动均衡。",
        "publicKey": "imageCount",
        "publicLabel": "图片槽数量",
        "description": "底部图片槽数量（0–3）；按各图比例自适应排布，构图自动均衡。"
      },
      {
        "key": "showMetrics",
        "label": "卡内指标",
        "type": "toggle",
        "default": true,
        "desc": "案例卡内部的指标列表。",
        "publicKey": "showMetrics",
        "publicLabel": "卡内指标",
        "description": "案例卡内部的指标列表。"
      },
      {
        "key": "showGalleryCaption",
        "label": "图注",
        "type": "toggle",
        "default": true,
        "desc": "图片区上方的装饰性图注。",
        "publicKey": "showGalleryCaption",
        "publicLabel": "图注",
        "description": "图片区上方的装饰性图注。"
      },
      {
        "key": "accentColor",
        "label": "强调色",
        "type": "color",
        "default": "#d8402e",
        "options": [
          "#d8402e",
          "#e2742c",
          "#efbe2e",
          "#3c9a52",
          "#4da0c6",
          "#2c44a0",
          "#7a3c90"
        ],
        "desc": "眉标的强调色。",
        "publicKey": "accentColor",
        "publicLabel": "强调色",
        "description": "眉标的强调色。"
      },
      {
        "key": "showSheetLabel",
        "label": "页码标签",
        "type": "toggle",
        "default": true,
        "desc": "右上角的页码 / 章节标签。",
        "publicKey": "showSheetLabel",
        "publicLabel": "页码标签",
        "description": "右上角的页码 / 章节标签。"
      }
    ],
    "defaultProps": {
      "cardCount": 3,
      "focusEnabled": true,
      "focusIndex": 1,
      "imageCount": 2,
      "showMetrics": true,
      "showGalleryCaption": true,
      "accentColor": "#d8402e",
      "showSheetLabel": true,
      "copy": {
        "eyebrow": "CASE STUDIES",
        "title": "典型案例深度剖析",
        "sub": "三类资本逻辑的代表公司",
        "sheet": "CASES · 08 / 32",
        "cards": [
          {
            "en": "ANTHROPIC",
            "zh": "安全可靠模型",
            "c": "#d8402e",
            "fg": "#fff",
            "metrics": [
              [
                "融资",
                "650 亿+"
              ],
              [
                "方向",
                "安全对齐"
              ],
              [
                "产品",
                "Claude"
              ]
            ]
          },
          {
            "en": "XAI",
            "zh": "实时数据生态",
            "c": "#2c44a0",
            "fg": "#fff",
            "metrics": [
              [
                "融资",
                "50 亿"
              ],
              [
                "数据",
                "X 平台"
              ],
              [
                "方向",
                "多模态"
              ]
            ]
          },
          {
            "en": "COREWEAVE",
            "zh": "算力基础设施",
            "c": "#3c9a52",
            "fg": "#fff",
            "metrics": [
              [
                "融资",
                "110 亿"
              ],
              [
                "GPU",
                "7.8 万张"
              ],
              [
                "方向",
                "算力云"
              ]
            ]
          },
          {
            "en": "OPENAI",
            "zh": "商业化标杆",
            "c": "#7a3c90",
            "fg": "#fff",
            "metrics": [
              [
                "融资",
                "66 亿"
              ],
              [
                "客户",
                "9.4 万家"
              ],
              [
                "方向",
                "通用模型"
              ]
            ]
          }
        ],
        "galleryCap": "案例图示",
        "galleryUnit": "DROP IMAGES"
      }
    }
  },
  {
    "key": "theme05_page013",
    "themeKey": "theme05",
    "pageNumber": 13,
    "layout": "THEME05-013",
    "slot": "heat",
    "label": "热力 Heatmap",
    "bgClass": "",
    "controls": [
      {
        "key": "cellCount",
        "label": "数据格数量",
        "type": "slider",
        "default": 12,
        "min": 6,
        "max": 12,
        "step": 1,
        "desc": "参与展示的周期格（月份）数量。",
        "publicKey": "cellCount",
        "publicLabel": "数据格数量",
        "description": "参与展示的周期格（月份）数量。"
      },
      {
        "key": "columns",
        "label": "网格列数",
        "type": "slider",
        "default": 4,
        "min": 2,
        "max": 6,
        "step": 1,
        "desc": "热力网格的列数，决定排布形状。",
        "publicKey": "columns",
        "publicLabel": "网格列数",
        "description": "热力网格的列数，决定排布形状。"
      },
      {
        "key": "colorScale",
        "label": "色阶模式",
        "type": "radio",
        "default": "warm",
        "options": [
          {
            "value": "warm",
            "label": "暖色"
          },
          {
            "value": "cool",
            "label": "冷色"
          },
          {
            "value": "mono",
            "label": "单色"
          }
        ],
        "desc": "数值映射到颜色的色阶：暖色 / 冷色 / 单色。",
        "publicKey": "colorScale",
        "publicLabel": "色阶模式",
        "description": "数值映射到颜色的色阶：暖色 / 冷色 / 单色。"
      },
      {
        "key": "focusEnabled",
        "label": "突出极值",
        "type": "toggle",
        "default": true,
        "desc": "是否在网格上标记数值最高的若干格。",
        "publicKey": "focusEnabled",
        "publicLabel": "突出极值",
        "description": "是否在网格上标记数值最高的若干格。"
      },
      {
        "key": "focusCount",
        "label": "极值数量",
        "type": "slider",
        "default": 2,
        "min": 1,
        "max": 4,
        "step": 1,
        "desc": "被标记 / 列出的峰值格数量（取最大的前 N 个）。",
        "publicKey": "focusCount",
        "publicLabel": "极值数量",
        "description": "被标记 / 列出的峰值格数量（取最大的前 N 个）。"
      },
      {
        "key": "showValues",
        "label": "显示数值",
        "type": "toggle",
        "default": true,
        "desc": "在每个格内显示数值。",
        "publicKey": "showValueLabels",
        "publicLabel": "显示数值",
        "description": "在每个格内显示数值。"
      },
      {
        "key": "showPeakList",
        "label": "峰值列表",
        "type": "toggle",
        "default": true,
        "desc": "右侧按数值排序的峰值列表。",
        "publicKey": "showValueLabels2",
        "publicLabel": "峰值列表",
        "description": "右侧按数值排序的峰值列表。"
      },
      {
        "key": "showScaleLegend",
        "label": "色阶图例",
        "type": "toggle",
        "default": true,
        "desc": "右侧的色阶渐变图例条。",
        "publicKey": "showScaleLegend",
        "publicLabel": "色阶图例",
        "description": "右侧的色阶渐变图例条。"
      },
      {
        "key": "accentColor",
        "label": "强调色",
        "type": "color",
        "default": "#d8402e",
        "options": [
          "#d8402e",
          "#e2742c",
          "#efbe2e",
          "#3c9a52",
          "#4da0c6",
          "#2c44a0",
          "#7a3c90"
        ],
        "desc": "峰值标记与眉标的强调色。",
        "publicKey": "accentColor",
        "publicLabel": "强调色",
        "description": "峰值标记与眉标的强调色。"
      },
      {
        "key": "showConclusion",
        "label": "结论文案",
        "type": "toggle",
        "default": true,
        "desc": "右下角的一句装饰性结论。",
        "publicKey": "showConclusion",
        "publicLabel": "结论文案",
        "description": "右下角的一句装饰性结论。"
      },
      {
        "key": "showSheetLabel",
        "label": "页码标签",
        "type": "toggle",
        "default": true,
        "desc": "右上角的页码 / 章节标签。",
        "publicKey": "showSheetLabel",
        "publicLabel": "页码标签",
        "description": "右上角的页码 / 章节标签。"
      }
    ],
    "defaultProps": {
      "cellCount": 12,
      "columns": 4,
      "colorScale": "warm",
      "focusEnabled": true,
      "focusCount": 2,
      "showValues": true,
      "showPeakList": true,
      "showScaleLegend": true,
      "accentColor": "#d8402e",
      "showConclusion": true,
      "showSheetLabel": true,
      "copy": {
        "eyebrow": "MONTHLY HEATMAP",
        "title": "市场月度热力",
        "sub": "12 个月融资节奏",
        "sheet": "DETAIL · 09 / 32",
        "unit": "亿美元 / 月",
        "cells": [
          {
            "k": "1月",
            "v": 45
          },
          {
            "k": "2月",
            "v": 58
          },
          {
            "k": "3月",
            "v": 59
          },
          {
            "k": "4月",
            "v": 86
          },
          {
            "k": "5月",
            "v": 105
          },
          {
            "k": "6月",
            "v": 93
          },
          {
            "k": "7月",
            "v": 92
          },
          {
            "k": "8月",
            "v": 118
          },
          {
            "k": "9月",
            "v": 108
          },
          {
            "k": "10月",
            "v": 73
          },
          {
            "k": "11月",
            "v": 81
          },
          {
            "k": "12月",
            "v": 52
          }
        ],
        "conclusion": "融资节奏的核心不是平均值，而是峰值背后的超级交易。"
      }
    }
  },
  {
    "key": "theme05_page014",
    "themeKey": "theme05",
    "pageNumber": 14,
    "layout": "THEME05-014",
    "slot": "rank",
    "label": "排名 Ranking",
    "bgClass": "",
    "controls": [
      {
        "key": "rowCount",
        "label": "排名条目数",
        "type": "slider",
        "default": 10,
        "min": 3,
        "max": 10,
        "step": 1,
        "desc": "榜单展示的条目数量（按数值从高到低）。",
        "publicKey": "itemCount",
        "publicLabel": "排名条目数",
        "description": "榜单展示的条目数量（按数值从高到低）。"
      },
      {
        "key": "focusEnabled",
        "label": "突出榜首",
        "type": "toggle",
        "default": true,
        "desc": "是否突出排名靠前的若干条目。",
        "publicKey": "focusEnabled",
        "publicLabel": "突出榜首",
        "description": "是否突出排名靠前的若干条目。"
      },
      {
        "key": "focusCount",
        "label": "突出数量",
        "type": "slider",
        "default": 3,
        "min": 1,
        "max": 3,
        "step": 1,
        "desc": "被突出的头部条目数量（前 N 名）。",
        "publicKey": "itemCount2",
        "publicLabel": "突出数量",
        "description": "被突出的头部条目数量（前 N 名）。"
      },
      {
        "key": "colorMode",
        "label": "配色模式",
        "type": "radio",
        "default": "category",
        "options": [
          {
            "value": "category",
            "label": "按类别"
          },
          {
            "value": "accent",
            "label": "强调色"
          },
          {
            "value": "mono",
            "label": "单色"
          }
        ],
        "desc": "条形配色：按类别 / 统一强调色 / 单色。",
        "publicKey": "colorMode",
        "publicLabel": "配色模式",
        "description": "条形配色：按类别 / 统一强调色 / 单色。"
      },
      {
        "key": "showRankNumber",
        "label": "排名序号",
        "type": "toggle",
        "default": true,
        "desc": "每行左侧的两位排名序号。",
        "publicKey": "showRankNumber",
        "publicLabel": "排名序号",
        "description": "每行左侧的两位排名序号。"
      },
      {
        "key": "showTag",
        "label": "类别标签",
        "type": "toggle",
        "default": true,
        "desc": "名称下方的类别 / 分类标签。",
        "publicKey": "showTag",
        "publicLabel": "类别标签",
        "description": "名称下方的类别 / 分类标签。"
      },
      {
        "key": "showValue",
        "label": "数值标注",
        "type": "toggle",
        "default": true,
        "desc": "每行右侧的数值标注。",
        "publicKey": "showValueLabels",
        "publicLabel": "数值标注",
        "description": "每行右侧的数值标注。"
      },
      {
        "key": "accentColor",
        "label": "强调色",
        "type": "color",
        "default": "#d8402e",
        "options": [
          "#d8402e",
          "#e2742c",
          "#efbe2e",
          "#3c9a52",
          "#4da0c6",
          "#2c44a0",
          "#7a3c90"
        ],
        "desc": "突出条目与眉标的强调色。",
        "publicKey": "accentColor",
        "publicLabel": "强调色",
        "description": "突出条目与眉标的强调色。"
      },
      {
        "key": "showConclusion",
        "label": "结论文案",
        "type": "toggle",
        "default": true,
        "desc": "底部的一句装饰性结论。",
        "publicKey": "showConclusion",
        "publicLabel": "结论文案",
        "description": "底部的一句装饰性结论。"
      },
      {
        "key": "showSheetLabel",
        "label": "页码标签",
        "type": "toggle",
        "default": true,
        "desc": "右上角的页码 / 章节标签。",
        "publicKey": "showSheetLabel",
        "publicLabel": "页码标签",
        "description": "右上角的页码 / 章节标签。"
      }
    ],
    "defaultProps": {
      "rowCount": 10,
      "focusEnabled": true,
      "focusCount": 3,
      "colorMode": "category",
      "showRankNumber": true,
      "showTag": true,
      "showValue": true,
      "accentColor": "#d8402e",
      "showConclusion": true,
      "showSheetLabel": true,
      "copy": {
        "eyebrow": "TOP FUNDED COMPANIES",
        "title": "Top 10 融资公司",
        "sub": "头部玩家资金排名",
        "sheet": "RANKING · 10 / 32",
        "unit": "最大单笔 · 亿美元",
        "rows": [
          {
            "name": "OpenAI",
            "cat": "通用大模型",
            "v": 66
          },
          {
            "name": "Anthropic",
            "cat": "通用大模型",
            "v": 65
          },
          {
            "name": "xAI",
            "cat": "通用大模型",
            "v": 50
          },
          {
            "name": "CoreWeave",
            "cat": "算力基础设施",
            "v": 11
          },
          {
            "name": "SSI",
            "cat": "安全智能",
            "v": 10
          },
          {
            "name": "Scale AI",
            "cat": "数据基础设施",
            "v": 10
          },
          {
            "name": "Figure AI",
            "cat": "具身智能",
            "v": 6.8
          },
          {
            "name": "Perplexity",
            "cat": "AI 搜索",
            "v": 5.2
          },
          {
            "name": "Databricks",
            "cat": "数据平台",
            "v": 5
          },
          {
            "name": "Glean",
            "cat": "企业搜索",
            "v": 2.6
          }
        ],
        "conclusion": "头部融资规模既反映技术叙事，也反映资源绑定能力。"
      }
    }
  },
  {
    "key": "theme05_page015",
    "themeKey": "theme05",
    "pageNumber": 15,
    "layout": "THEME05-015",
    "slot": "quad",
    "label": "象限 Quadrant",
    "bgClass": "",
    "controls": [
      {
        "key": "focusEnabled",
        "label": "突出象限",
        "type": "toggle",
        "default": true,
        "desc": "是否突出某一个象限。",
        "publicKey": "focusEnabled",
        "publicLabel": "突出象限",
        "description": "是否突出某一个象限。"
      },
      {
        "key": "focusIndex",
        "label": "重点象限",
        "type": "slider",
        "default": 1,
        "min": 1,
        "max": 4,
        "step": 1,
        "desc": "被突出的象限序号（1 明星兑现 / 2 叙事泡沫 / 3 隐形价值 / 4 等待验证）。",
        "publicKey": "focusIndex",
        "publicLabel": "重点象限",
        "description": "被突出的象限序号（1 明星兑现 / 2 叙事泡沫 / 3 隐形价值 / 4 等待验证）。"
      },
      {
        "key": "quadrantTint",
        "label": "象限底色",
        "type": "toggle",
        "default": false,
        "desc": "是否为四个象限填充类别底色（关闭则为线框留白风格）。",
        "publicKey": "quadrantTint",
        "publicLabel": "象限底色",
        "description": "是否为四个象限填充类别底色（关闭则为线框留白风格）。"
      },
      {
        "key": "showItems",
        "label": "代表方向",
        "type": "toggle",
        "default": true,
        "desc": "每个象限内的代表方向标签。",
        "publicKey": "showItems",
        "publicLabel": "代表方向",
        "description": "每个象限内的代表方向标签。"
      },
      {
        "key": "showScatter",
        "label": "散点标记",
        "type": "toggle",
        "default": true,
        "desc": "象限内装饰性散点（代表落点公司）。",
        "publicKey": "showScatter",
        "publicLabel": "散点标记",
        "description": "象限内装饰性散点（代表落点公司）。"
      },
      {
        "key": "showAxisLabels",
        "label": "坐标轴标签",
        "type": "toggle",
        "default": true,
        "desc": "矩阵外侧的两条坐标轴标签。",
        "publicKey": "showAxisLabels",
        "publicLabel": "坐标轴标签",
        "description": "矩阵外侧的两条坐标轴标签。"
      },
      {
        "key": "accentColor",
        "label": "强调色",
        "type": "color",
        "default": "#d8402e",
        "options": [
          "#d8402e",
          "#e2742c",
          "#efbe2e",
          "#3c9a52",
          "#4da0c6",
          "#2c44a0",
          "#7a3c90"
        ],
        "desc": "重点象限标记与眉标的强调色。",
        "publicKey": "accentColor",
        "publicLabel": "强调色",
        "description": "重点象限标记与眉标的强调色。"
      },
      {
        "key": "showConclusion",
        "label": "结论文案",
        "type": "toggle",
        "default": true,
        "desc": "底部的一句装饰性结论。",
        "publicKey": "showConclusion",
        "publicLabel": "结论文案",
        "description": "底部的一句装饰性结论。"
      },
      {
        "key": "showSheetLabel",
        "label": "页码标签",
        "type": "toggle",
        "default": true,
        "desc": "右上角的页码 / 章节标签。",
        "publicKey": "showSheetLabel",
        "publicLabel": "页码标签",
        "description": "右上角的页码 / 章节标签。"
      }
    ],
    "defaultProps": {
      "focusEnabled": true,
      "focusIndex": 1,
      "quadrantTint": false,
      "showItems": true,
      "showScatter": true,
      "showAxisLabels": true,
      "accentColor": "#d8402e",
      "showConclusion": true,
      "showSheetLabel": true,
      "copy": {
        "eyebrow": "HEAT vs. MONETIZATION",
        "title": "资本热度 × 商业兑现",
        "sub": "四象限机会判断",
        "sheet": "OPPORTUNITY · 11 / 32",
        "axisX": "商业兑现",
        "axisY": "资本热度",
        "quads": [
          {
            "zh": "明星兑现",
            "en": "STAR DELIVERY",
            "c": "#3c9a52",
            "area": "tr",
            "note": "高热度 · 高兑现",
            "items": [
              "基础设施",
              "数据平台"
            ],
            "dots": [
              [
                30,
                38
              ],
              [
                58,
                26
              ],
              [
                72,
                60
              ]
            ]
          },
          {
            "zh": "叙事泡沫",
            "en": "NARRATIVE BUBBLE",
            "c": "#d8402e",
            "area": "tl",
            "note": "高热度 · 低兑现",
            "items": [
              "通用模型",
              "AGI 实验室"
            ],
            "dots": [
              [
                40,
                30
              ],
              [
                64,
                52
              ],
              [
                28,
                64
              ]
            ]
          },
          {
            "zh": "隐形价值",
            "en": "HIDDEN VALUE",
            "c": "#2c44a0",
            "area": "br",
            "note": "低热度 · 高兑现",
            "items": [
              "垂直应用",
              "企业搜索"
            ],
            "dots": [
              [
                34,
                44
              ],
              [
                60,
                34
              ],
              [
                50,
                66
              ]
            ]
          },
          {
            "zh": "等待验证",
            "en": "TO BE PROVEN",
            "c": "#e2742c",
            "area": "bl",
            "note": "低热度 · 低兑现",
            "items": [
              "长尾工具",
              "安全",
              "早期硬件"
            ],
            "dots": [
              [
                36,
                40
              ],
              [
                58,
                58
              ],
              [
                70,
                30
              ]
            ]
          }
        ],
        "conclusion": "资本正在从叙事驱动转向兑现驱动。"
      }
    }
  },
  {
    "key": "theme05_page016",
    "themeKey": "theme05",
    "pageNumber": 16,
    "layout": "THEME05-016",
    "slot": "risk",
    "label": "风险 Risk",
    "bgClass": "",
    "controls": [
      {
        "key": "chainCount",
        "label": "传导链节点",
        "type": "slider",
        "default": 4,
        "min": 3,
        "max": 5,
        "step": 1,
        "desc": "顶部状态传导链的节点数量。",
        "publicKey": "chainCount",
        "publicLabel": "传导链节点",
        "description": "顶部状态传导链的节点数量。"
      },
      {
        "key": "cardCount",
        "label": "状态卡数量",
        "type": "slider",
        "default": 4,
        "min": 2,
        "max": 5,
        "step": 1,
        "desc": "状态因素卡片数量（网格列数随之变化）。",
        "publicKey": "cardCount",
        "publicLabel": "状态卡数量",
        "description": "状态因素卡片数量（网格列数随之变化）。"
      },
      {
        "key": "focusEnabled",
        "label": "突出项",
        "type": "toggle",
        "default": true,
        "desc": "是否突出某一张状态卡。",
        "publicKey": "focusEnabled",
        "publicLabel": "突出项",
        "description": "是否突出某一张状态卡。"
      },
      {
        "key": "focusIndex",
        "label": "重点状态卡",
        "type": "slider",
        "default": 1,
        "min": 1,
        "max": 5,
        "step": 1,
        "desc": "被突出的状态卡序号（从 1 起）。",
        "publicKey": "focusIndex",
        "publicLabel": "重点状态卡",
        "description": "被突出的状态卡序号（从 1 起）。"
      },
      {
        "key": "imageCount",
        "label": "图片槽数量",
        "type": "slider",
        "default": 1,
        "min": 0,
        "max": 2,
        "step": 1,
        "desc": "底部图片槽数量（0–2）；按各图比例自适应排布，构图自动均衡。",
        "publicKey": "imageCount",
        "publicLabel": "图片槽数量",
        "description": "底部图片槽数量（0–2）；按各图比例自适应排布，构图自动均衡。"
      },
      {
        "key": "showChain",
        "label": "传导链",
        "type": "toggle",
        "default": true,
        "desc": "顶部的状态传导链。",
        "publicKey": "showChain",
        "publicLabel": "传导链",
        "description": "顶部的状态传导链。"
      },
      {
        "key": "showLevel",
        "label": "状态等级",
        "type": "toggle",
        "default": true,
        "desc": "卡片内的状态等级标识（高 / 中 / 低）。",
        "publicKey": "showStatusLevel",
        "publicLabel": "状态等级",
        "description": "卡片内的状态等级标识（高 / 中 / 低）。"
      },
      {
        "key": "showGalleryCaption",
        "label": "图注",
        "type": "toggle",
        "default": true,
        "desc": "图片区上方的装饰性图注。",
        "publicKey": "showGalleryCaption",
        "publicLabel": "图注",
        "description": "图片区上方的装饰性图注。"
      },
      {
        "key": "accentColor",
        "label": "强调色",
        "type": "color",
        "default": "#d8402e",
        "options": [
          "#d8402e",
          "#e2742c",
          "#efbe2e",
          "#3c9a52",
          "#4da0c6",
          "#2c44a0",
          "#7a3c90"
        ],
        "desc": "眉标的强调色。",
        "publicKey": "accentColor",
        "publicLabel": "强调色",
        "description": "眉标的强调色。"
      },
      {
        "key": "showConclusion",
        "label": "结论文案",
        "type": "toggle",
        "default": true,
        "desc": "底部的一句装饰性结论。",
        "publicKey": "showConclusion",
        "publicLabel": "结论文案",
        "description": "底部的一句装饰性结论。"
      },
      {
        "key": "showSheetLabel",
        "label": "页码标签",
        "type": "toggle",
        "default": true,
        "desc": "右上角的页码 / 章节标签。",
        "publicKey": "showSheetLabel",
        "publicLabel": "页码标签",
        "description": "右上角的页码 / 章节标签。"
      }
    ],
    "defaultProps": {
      "chainCount": 4,
      "cardCount": 4,
      "focusEnabled": true,
      "focusIndex": 1,
      "imageCount": 1,
      "showChain": true,
      "showLevel": true,
      "showGalleryCaption": true,
      "accentColor": "#d8402e",
      "showConclusion": true,
      "showSheetLabel": true,
      "copy": {
        "eyebrow": "RISK ASSESSMENT",
        "title": "风险研判",
        "sub": "资本大年背后的下行因素",
        "sheet": "RISK · 12 / 32",
        "chain": [
          "高估值预期",
          "盈利兑现承压",
          "算力成本攀升",
          "资本转向观望",
          "估值锚重定价"
        ],
        "cards": [
          {
            "en": "VALUATION",
            "zh": "估值泡沫",
            "c": "#d8402e",
            "level": "高",
            "note": "一级估值远超当期收入支撑"
          },
          {
            "en": "REVENUE",
            "zh": "盈利模式未验证",
            "c": "#2c44a0",
            "level": "高",
            "note": "多数公司仍停留在试点阶段"
          },
          {
            "en": "REGULATION",
            "zh": "监管成本上升",
            "c": "#e2742c",
            "level": "中",
            "note": "隐私、版权与合规推高交付成本"
          },
          {
            "en": "COMPETITION",
            "zh": "开源与大厂挤压",
            "c": "#7a3c90",
            "level": "中",
            "note": "模型能力被快速商品化"
          },
          {
            "en": "COMPUTE",
            "zh": "算力供应链卡脖子",
            "c": "#3c9a52",
            "level": "高",
            "note": "GPU 供给与成本约束毛利"
          }
        ],
        "galleryCap": "风险示意",
        "galleryUnit": "DROP IMAGES",
        "conclusion": "下一阶段会淘汰只会讲故事的公司。"
      }
    }
  },
  {
    "key": "theme05_page017",
    "themeKey": "theme05",
    "pageNumber": 17,
    "layout": "THEME05-017",
    "slot": "outlook",
    "label": "策略 Outlook",
    "bgClass": "",
    "controls": [
      {
        "key": "listItemCount",
        "label": "每栏条目数",
        "type": "slider",
        "default": 3,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "左右对比栏各自显示的条目数量。",
        "publicKey": "itemCount",
        "publicLabel": "每栏条目数",
        "description": "左右对比栏各自显示的条目数量。"
      },
      {
        "key": "showTimeline",
        "label": "阶段时间轴",
        "type": "toggle",
        "default": true,
        "desc": "是否显示底部的横向阶段时间轴。",
        "publicKey": "showTimeline",
        "publicLabel": "阶段时间轴",
        "description": "是否显示底部的横向阶段时间轴。"
      },
      {
        "key": "timelineNodeCount",
        "label": "时间轴节点数",
        "type": "slider",
        "default": 4,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "时间轴上的阶段节点数量。",
        "publicKey": "timelineNodeCount",
        "publicLabel": "时间轴节点数",
        "description": "时间轴上的阶段节点数量。"
      },
      {
        "key": "focusEnabled",
        "label": "重点节点",
        "type": "toggle",
        "default": true,
        "desc": "是否突出某一个时间轴节点。",
        "publicKey": "focusEnabled",
        "publicLabel": "重点节点",
        "description": "是否突出某一个时间轴节点。"
      },
      {
        "key": "focusIndex",
        "label": "重点节点序号",
        "type": "slider",
        "default": 2,
        "min": 1,
        "max": 4,
        "step": 1,
        "desc": "被突出的时间轴节点序号（从 1 起）。",
        "publicKey": "focusIndex",
        "publicLabel": "重点节点序号",
        "description": "被突出的时间轴节点序号（从 1 起）。"
      },
      {
        "key": "leftColor",
        "label": "左栏色",
        "type": "color",
        "default": "#3c9a52",
        "options": [
          "#d8402e",
          "#e2742c",
          "#efbe2e",
          "#3c9a52",
          "#4da0c6",
          "#2c44a0",
          "#7a3c90"
        ],
        "desc": "左侧对比栏的标题条颜色。",
        "publicKey": "leftColor",
        "publicLabel": "左栏色",
        "description": "左侧对比栏的标题条颜色。"
      },
      {
        "key": "rightColor",
        "label": "右栏色",
        "type": "color",
        "default": "#d8402e",
        "options": [
          "#d8402e",
          "#e2742c",
          "#efbe2e",
          "#3c9a52",
          "#4da0c6",
          "#2c44a0",
          "#7a3c90"
        ],
        "desc": "右侧对比栏的标题条颜色。",
        "publicKey": "rightColor",
        "publicLabel": "右栏色",
        "description": "右侧对比栏的标题条颜色。"
      },
      {
        "key": "accentColor",
        "label": "强调色",
        "type": "color",
        "default": "#d8402e",
        "options": [
          "#d8402e",
          "#e2742c",
          "#efbe2e",
          "#3c9a52",
          "#4da0c6",
          "#2c44a0",
          "#7a3c90"
        ],
        "desc": "眉标与时间轴重点节点的强调色。",
        "publicKey": "accentColor",
        "publicLabel": "强调色",
        "description": "眉标与时间轴重点节点的强调色。"
      },
      {
        "key": "showConclusion",
        "label": "结论文案",
        "type": "toggle",
        "default": true,
        "desc": "底部的一句装饰性结论。",
        "publicKey": "showConclusion",
        "publicLabel": "结论文案",
        "description": "底部的一句装饰性结论。"
      },
      {
        "key": "showSheetLabel",
        "label": "页码标签",
        "type": "toggle",
        "default": true,
        "desc": "右上角的页码 / 章节标签。",
        "publicKey": "showSheetLabel",
        "publicLabel": "页码标签",
        "description": "右上角的页码 / 章节标签。"
      }
    ],
    "defaultProps": {
      "listItemCount": 3,
      "showTimeline": true,
      "timelineNodeCount": 4,
      "focusEnabled": true,
      "focusIndex": 2,
      "leftColor": "#3c9a52",
      "rightColor": "#d8402e",
      "accentColor": "#d8402e",
      "showConclusion": true,
      "showSheetLabel": true,
      "copy": {
        "eyebrow": "INVESTMENT OUTLOOK",
        "title": "投资建议与阶段性策略",
        "sheet": "OUTLOOK · 13 / 32",
        "columns": [
          {
            "zh": "看好方向",
            "en": "OVERWEIGHT",
            "sign": "＋",
            "items": [
              {
                "name": "垂直应用",
                "note": "嵌入刚性工作流，看付费留存与席位扩张"
              },
              {
                "name": "基础设施",
                "note": "GPU 云与数据底座，最接近刚性预算"
              },
              {
                "name": "具身智能",
                "note": "长周期硬科技，看供应链与量产能力"
              },
              {
                "name": "数据平台",
                "note": "存量客户优势，商业化路径更短"
              }
            ]
          },
          {
            "zh": "谨慎方向",
            "en": "UNDERWEIGHT",
            "sign": "－",
            "items": [
              {
                "name": "高估值纯模型",
                "note": "叙事先行，后续兑现压力较高"
              },
              {
                "name": "AI 包装项目",
                "note": "缺乏数据与工作流壁垒，易被商品化"
              },
              {
                "name": "低壁垒消费应用",
                "note": "留存与付费意愿仍待长期验证"
              },
              {
                "name": "同质化工具",
                "note": "竞争拥挤，差异化与定价权不足"
              }
            ]
          }
        ],
        "timelineCap": "阶段性观察 · 2024 → 2027",
        "timeline": [
          {
            "year": "2024",
            "label": "资本大年",
            "note": "970 亿美元 · 97 笔"
          },
          {
            "year": "2025",
            "label": "观察兑现",
            "note": "IPO 窗口逐步开启"
          },
          {
            "year": "2026",
            "label": "收入验证",
            "note": "看收入与毛利曲线"
          },
          {
            "year": "2027",
            "label": "格局定型",
            "note": "兑现分化决定胜负"
          }
        ],
        "conclusion": "看融资只是起点，看兑现才是判断。"
      }
    }
  },
  {
    "key": "theme05_page018",
    "themeKey": "theme05",
    "pageNumber": 18,
    "layout": "THEME05-018",
    "slot": "quote",
    "label": "结论 Conclusion",
    "bgClass": "",
    "controls": [
      {
        "key": "theme",
        "label": "背景主题",
        "type": "radio",
        "default": "paper",
        "options": [
          {
            "value": "paper",
            "label": "纸色"
          },
          {
            "value": "dark",
            "label": "深色"
          }
        ],
        "desc": "页面整体明 / 暗背景。",
        "publicKey": "theme",
        "publicLabel": "背景主题",
        "description": "页面整体明 / 暗背景。"
      },
      {
        "key": "quoteAlign",
        "label": "金句对齐",
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
        "desc": "金句的对齐方式。",
        "publicKey": "quoteAlign",
        "publicLabel": "金句对齐",
        "description": "金句的对齐方式。"
      },
      {
        "key": "conclusionCount",
        "label": "结论点数量",
        "type": "slider",
        "default": 3,
        "min": 0,
        "max": 3,
        "step": 1,
        "desc": "金句下方的支撑结论点数量（0 隐藏）。",
        "publicKey": "conclusionCount",
        "publicLabel": "结论点数量",
        "description": "金句下方的支撑结论点数量（0 隐藏）。"
      },
      {
        "key": "showQuoteMark",
        "label": "引号装饰",
        "type": "toggle",
        "default": true,
        "desc": "金句上方的大号装饰引号。",
        "publicKey": "showQuoteMark",
        "publicLabel": "引号装饰",
        "description": "金句上方的大号装饰引号。"
      },
      {
        "key": "accentColor",
        "label": "强调色",
        "type": "color",
        "default": "#d8402e",
        "options": [
          "#d8402e",
          "#e2742c",
          "#efbe2e",
          "#3c9a52",
          "#4da0c6",
          "#2c44a0",
          "#7a3c90"
        ],
        "desc": "眉标、引号与金句重点词的强调色。",
        "publicKey": "accentColor",
        "publicLabel": "强调色",
        "description": "眉标、引号与金句重点词的强调色。"
      },
      {
        "key": "showSource",
        "label": "数据来源",
        "type": "toggle",
        "default": true,
        "desc": "底部的数据口径 / 来源说明。",
        "publicKey": "showSource",
        "publicLabel": "数据来源",
        "description": "底部的数据口径 / 来源说明。"
      },
      {
        "key": "showColorBand",
        "label": "色谱条",
        "type": "toggle",
        "default": true,
        "desc": "右下角的小色谱条带。",
        "publicKey": "showColorBand",
        "publicLabel": "色谱条",
        "description": "右下角的小色谱条带。"
      },
      {
        "key": "showSheetLabel",
        "label": "页码标签",
        "type": "toggle",
        "default": true,
        "desc": "右上角的页码 / 章节标签。",
        "publicKey": "showSheetLabel",
        "publicLabel": "页码标签",
        "description": "右上角的页码 / 章节标签。"
      }
    ],
    "defaultProps": {
      "theme": "paper",
      "quoteAlign": "left",
      "conclusionCount": 3,
      "showQuoteMark": true,
      "accentColor": "#d8402e",
      "showSource": true,
      "showColorBand": true,
      "showSheetLabel": true,
      "copy": {
        "eyebrow": "CONCLUSION",
        "sheet": "CONCLUSION · 14 / 32",
        "quote": {
          "key": null,
          "ref": null,
          "props": {
            "children": [
              "资本下一阶段，将从",
              {
                "type": "span",
                "key": null,
                "ref": null,
                "props": {
                  "className": "mute",
                  "children": "赌叙事"
                },
                "_owner": null,
                "_store": {}
              },
              "，",
              {
                "type": "br",
                "key": null,
                "ref": null,
                "props": {},
                "_owner": null,
                "_store": {}
              },
              "转向",
              {
                "type": "span",
                "key": null,
                "ref": null,
                "props": {
                  "className": "hl",
                  "children": "看兑现"
                },
                "_owner": null,
                "_store": {}
              },
              "。"
            ]
          },
          "_owner": null,
          "_store": {}
        },
        "sub": "三条核心结论",
        "points": [
          {
            "n": "01",
            "t": "头部集中",
            "d": "资金高度向头部公司集中，赢家通吃格局确立。"
          },
          {
            "n": "02",
            "t": "兑现为王",
            "d": "估值锚从叙事转向收入、毛利与客户留存。"
          },
          {
            "n": "03",
            "t": "底座确定",
            "d": "算力与数据基础设施最接近企业刚性预算。"
          }
        ],
        "source": "数据口径：2024 全年 · 单笔 ≥1 亿美元 · 样本 97 笔"
      }
    }
  },
  {
    "key": "theme05_page019",
    "themeKey": "theme05",
    "pageNumber": 19,
    "layout": "THEME05-019",
    "slot": "chapter",
    "label": "章节 Chapter",
    "bgClass": "",
    "controls": [
      {
        "key": "theme",
        "label": "背景主题",
        "type": "radio",
        "default": "dark",
        "options": [
          {
            "value": "dark",
            "label": "深色"
          },
          {
            "value": "paper",
            "label": "纸色"
          },
          {
            "value": "color",
            "label": "色块"
          }
        ],
        "desc": "章节页背景：深色 / 纸色 / 整页色块。",
        "publicKey": "theme",
        "publicLabel": "背景主题",
        "description": "章节页背景：深色 / 纸色 / 整页色块。"
      },
      {
        "key": "bgColor",
        "label": "色块背景",
        "type": "color",
        "default": "#2c44a0",
        "options": [
          "#d8402e",
          "#e2742c",
          "#efbe2e",
          "#3c9a52",
          "#4da0c6",
          "#2c44a0",
          "#7a3c90"
        ],
        "desc": "「色块」主题下的整页背景色。",
        "publicKey": "bgColor",
        "publicLabel": "色块背景",
        "description": "「色块」主题下的整页背景色。"
      },
      {
        "key": "showBigNumber",
        "label": "大号章节号",
        "type": "toggle",
        "default": true,
        "desc": "右侧的超大章节编号。",
        "publicKey": "showBigNumber",
        "publicLabel": "大号章节号",
        "description": "右侧的超大章节编号。"
      },
      {
        "key": "keywordCount",
        "label": "关键词数量",
        "type": "slider",
        "default": 4,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "底部关键词标签数量（0 隐藏）。",
        "publicKey": "keywordCount",
        "publicLabel": "关键词数量",
        "description": "底部关键词标签数量（0 隐藏）。"
      },
      {
        "key": "accentColor",
        "label": "强调色",
        "type": "color",
        "default": "#d8402e",
        "options": [
          "#d8402e",
          "#e2742c",
          "#efbe2e",
          "#3c9a52",
          "#4da0c6",
          "#2c44a0",
          "#7a3c90"
        ],
        "desc": "眉标与章节编号的强调色（色块主题除外）。",
        "publicKey": "accentColor",
        "publicLabel": "强调色",
        "description": "眉标与章节编号的强调色（色块主题除外）。"
      },
      {
        "key": "showColorBand",
        "label": "色谱条",
        "type": "toggle",
        "default": true,
        "desc": "底部的色谱条带。",
        "publicKey": "showColorBand",
        "publicLabel": "色谱条",
        "description": "底部的色谱条带。"
      },
      {
        "key": "showWordmark",
        "label": "品牌标识",
        "type": "toggle",
        "default": true,
        "desc": "左上角的品牌标识。",
        "publicKey": "showWordmark",
        "publicLabel": "品牌标识",
        "description": "左上角的品牌标识。"
      },
      {
        "key": "showSheetLabel",
        "label": "页码标签",
        "type": "toggle",
        "default": true,
        "desc": "右上角的章节 / 页码标签。",
        "publicKey": "showSheetLabel",
        "publicLabel": "页码标签",
        "description": "右上角的章节 / 页码标签。"
      }
    ],
    "defaultProps": {
      "theme": "dark",
      "bgColor": "#2c44a0",
      "showBigNumber": true,
      "keywordCount": 4,
      "accentColor": "#d8402e",
      "showColorBand": true,
      "showWordmark": true,
      "showSheetLabel": true,
      "copy": {
        "brand": "AICL",
        "barMeta": "SECTION DIVIDER",
        "eyebrow": "CHAPTER 02",
        "num": "02",
        "title": "市场数据深拆",
        "sub": "融资节奏、集中度与交易规模",
        "sheet": "15 / 32",
        "keywords": [
          "集中度",
          "季度节奏",
          "峰谷对比",
          "资金贡献"
        ]
      }
    }
  },
  {
    "key": "theme05_page020",
    "themeKey": "theme05",
    "pageNumber": 20,
    "layout": "THEME05-020",
    "slot": "bubble",
    "label": "气泡 Deal Map",
    "bgClass": "",
    "controls": [
      {
        "key": "tierCount",
        "label": "数值分层数",
        "type": "slider",
        "default": 4,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "展示的数值区间（气泡分组）数量。",
        "publicKey": "tierCount",
        "publicLabel": "数值分层数",
        "description": "展示的数值区间（气泡分组）数量。"
      },
      {
        "key": "bubbleScale",
        "label": "气泡大小",
        "type": "slider",
        "default": 1,
        "min": 0.6,
        "max": 1.6,
        "step": 0.1,
        "desc": "气泡整体大小的缩放系数。",
        "publicKey": "bubbleScale",
        "publicLabel": "气泡大小",
        "description": "气泡整体大小的缩放系数。"
      },
      {
        "key": "focusEnabled",
        "label": "重点分层",
        "type": "toggle",
        "default": true,
        "desc": "是否突出某一数值区间（其余气泡淡出）。",
        "publicKey": "focusEnabled",
        "publicLabel": "重点分层",
        "description": "是否突出某一数值区间（其余气泡淡出）。"
      },
      {
        "key": "focusIndex",
        "label": "重点分层序号",
        "type": "slider",
        "default": 4,
        "min": 1,
        "max": 4,
        "step": 1,
        "desc": "被突出的数值区间序号（从 1 起，小额→大额）。",
        "publicKey": "focusIndex",
        "publicLabel": "重点分层序号",
        "description": "被突出的数值区间序号（从 1 起，小额→大额）。"
      },
      {
        "key": "colorMode",
        "label": "配色方式",
        "type": "radio",
        "default": "category",
        "options": [
          {
            "value": "category",
            "label": "按类别"
          },
          {
            "value": "accent",
            "label": "强调色"
          },
          {
            "value": "mono",
            "label": "单色"
          }
        ],
        "desc": "气泡配色：按分类类别 / 单一强调色 / 单色。",
        "publicKey": "colorMode",
        "publicLabel": "配色方式",
        "description": "气泡配色：按分类类别 / 单一强调色 / 单色。"
      },
      {
        "key": "showGrid",
        "label": "网格背景",
        "type": "toggle",
        "default": true,
        "desc": "气泡区域的背景网格线。",
        "publicKey": "showGrid",
        "publicLabel": "网格背景",
        "description": "气泡区域的背景网格线。"
      },
      {
        "key": "showLegend",
        "label": "图例",
        "type": "toggle",
        "default": true,
        "desc": "右侧的数值区间图例（含笔数与合计）。",
        "publicKey": "showValueLabels",
        "publicLabel": "图例",
        "description": "右侧的数值区间图例（含笔数与合计）。"
      },
      {
        "key": "accentColor",
        "label": "强调色",
        "type": "color",
        "default": "#d8402e",
        "options": [
          "#d8402e",
          "#e2742c",
          "#efbe2e",
          "#3c9a52",
          "#4da0c6",
          "#2c44a0",
          "#7a3c90"
        ],
        "desc": "眉标的强调色（强调色配色模式下也用于气泡）。",
        "publicKey": "accentColor",
        "publicLabel": "强调色",
        "description": "眉标的强调色（强调色配色模式下也用于气泡）。"
      },
      {
        "key": "showConclusion",
        "label": "结论文案",
        "type": "toggle",
        "default": true,
        "desc": "右下角的一句装饰性结论。",
        "publicKey": "showConclusion",
        "publicLabel": "结论文案",
        "description": "右下角的一句装饰性结论。"
      },
      {
        "key": "showSheetLabel",
        "label": "页码标签",
        "type": "toggle",
        "default": true,
        "desc": "右上角的页码 / 章节标签。",
        "publicKey": "showSheetLabel",
        "publicLabel": "页码标签",
        "description": "右上角的页码 / 章节标签。"
      }
    ],
    "defaultProps": {
      "tierCount": 4,
      "bubbleScale": 1,
      "focusEnabled": true,
      "focusIndex": 4,
      "colorMode": "category",
      "showGrid": true,
      "showLegend": true,
      "accentColor": "#d8402e",
      "showConclusion": true,
      "showSheetLabel": true,
      "copy": {
        "eyebrow": "DEAL MAP",
        "title": "融资事件规模分层",
        "sub": "大额融资事件地图 · 气泡 = 单笔金额",
        "sheet": "DEAL MAP · 16 / 32",
        "plotNote": "BUBBLE = AMOUNT · COLOR = SECTOR · 97 DEALS",
        "tiers": [
          {
            "range": "1–2 亿美元",
            "count": 41,
            "sum": "58 亿",
            "rep": 1.5
          },
          {
            "range": "2–5 亿美元",
            "count": 29,
            "sum": "91 亿",
            "rep": 3.5
          },
          {
            "range": "5–10 亿美元",
            "count": 15,
            "sum": "103 亿",
            "rep": 7.5
          },
          {
            "range": "10 亿美元以上",
            "count": 12,
            "sum": "718 亿",
            "rep": 30
          }
        ],
        "conclusion": "数量最多的不一定最重要，影响最大的往往是巨额交易。"
      }
    }
  },
  {
    "key": "theme05_page021",
    "themeKey": "theme05",
    "pageNumber": 21,
    "layout": "THEME05-021",
    "slot": "snapshot",
    "label": "季度快照 Snapshot",
    "bgClass": "",
    "controls": [
      {
        "key": "chartType",
        "label": "图表类型",
        "type": "radio",
        "default": "bar",
        "options": [
          {
            "value": "bar",
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
        "desc": "右侧证据图表的呈现方式：柱状 / 折线 / 面积。",
        "publicKey": "chartType",
        "publicLabel": "图表类型",
        "description": "右侧证据图表的呈现方式：柱状 / 折线 / 面积。"
      },
      {
        "key": "pointCount",
        "label": "数据点数量",
        "type": "slider",
        "default": 3,
        "min": 2,
        "max": 3,
        "step": 1,
        "desc": "证据图表展示的数据点（时间截面）数量。",
        "publicKey": "pointCount",
        "publicLabel": "数据点数量",
        "description": "证据图表展示的数据点（时间截面）数量。"
      },
      {
        "key": "focusEnabled",
        "label": "重点标注",
        "type": "toggle",
        "default": true,
        "desc": "是否突出某一个数据点（峰值 / 关键截面）。",
        "publicKey": "focusEnabled",
        "publicLabel": "重点标注",
        "description": "是否突出某一个数据点（峰值 / 关键截面）。"
      },
      {
        "key": "focusIndex",
        "label": "重点数据点",
        "type": "slider",
        "default": 3,
        "min": 1,
        "max": 3,
        "step": 1,
        "desc": "被突出的数据点序号（从 1 起）。",
        "publicKey": "focusIndex",
        "publicLabel": "重点数据点",
        "description": "被突出的数据点序号（从 1 起）。"
      },
      {
        "key": "metricCount",
        "label": "指标行数",
        "type": "slider",
        "default": 4,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "左侧主体卡的指标行数量。",
        "publicKey": "metricCount",
        "publicLabel": "指标行数",
        "description": "左侧主体卡的指标行数量。"
      },
      {
        "key": "showSwatches",
        "label": "色谱色卡",
        "type": "toggle",
        "default": true,
        "desc": "左下角的装饰性色谱色卡。",
        "publicKey": "showSwatches",
        "publicLabel": "色谱色卡",
        "description": "左下角的装饰性色谱色卡。"
      },
      {
        "key": "accentColor",
        "label": "强调色",
        "type": "color",
        "default": "#2c44a0",
        "options": [
          "#d8402e",
          "#e2742c",
          "#efbe2e",
          "#3c9a52",
          "#4da0c6",
          "#2c44a0",
          "#7a3c90"
        ],
        "desc": "主体字形 / 重点标注 / 眉标的强调色。",
        "publicKey": "accentColor",
        "publicLabel": "强调色",
        "description": "主体字形 / 重点标注 / 眉标的强调色。"
      },
      {
        "key": "showConclusion",
        "label": "结论文案",
        "type": "toggle",
        "default": true,
        "desc": "面板下方的一句装饰性结论。",
        "publicKey": "showConclusion",
        "publicLabel": "结论文案",
        "description": "面板下方的一句装饰性结论。"
      },
      {
        "key": "showSheetLabel",
        "label": "页码标签",
        "type": "toggle",
        "default": true,
        "desc": "右上角的页码 / 章节标签。",
        "publicKey": "showSheetLabel",
        "publicLabel": "页码标签",
        "description": "右上角的页码 / 章节标签。"
      }
    ],
    "defaultProps": {
      "chartType": "bar",
      "pointCount": 3,
      "focusEnabled": true,
      "focusIndex": 3,
      "metricCount": 4,
      "showSwatches": true,
      "accentColor": "#2c44a0",
      "showConclusion": true,
      "showSheetLabel": true,
      "copy": {
        "eyebrow": "QUARTER BREAKDOWN",
        "title": "冷启动季度",
        "sub": "Q1 融资拆解",
        "sheet": "Q1 · 17 / 32",
        "glyph": "Q1",
        "name": "Q1 融资拆解 · 起步阶段",
        "metrics": [
          {
            "k": "融资额",
            "v": "162",
            "u": "亿美元"
          },
          {
            "k": "事件数",
            "v": "18",
            "u": "笔"
          },
          {
            "k": "平均单笔",
            "v": "9.0",
            "u": "亿美元"
          },
          {
            "k": "最大单笔",
            "v": "32",
            "u": "亿美元"
          }
        ],
        "panelTitle": "月度拆解",
        "panelNote": "MONTHLY · Q1",
        "unit": "亿美元 / 月",
        "points": [
          {
            "axis": "1月",
            "v": 45
          },
          {
            "axis": "2月",
            "v": 58
          },
          {
            "axis": "3月",
            "v": 59
          }
        ],
        "conclusion": "全年热度从保守启动开始。"
      }
    }
  },
  {
    "key": "theme05_page022",
    "themeKey": "theme05",
    "pageNumber": 22,
    "layout": "THEME05-022",
    "slot": "delta",
    "label": "环比对比 Delta",
    "bgClass": "",
    "controls": [
      {
        "key": "rowCount",
        "label": "对比行数",
        "type": "slider",
        "default": 3,
        "min": 2,
        "max": 3,
        "step": 1,
        "desc": "下方分段（子周期）条形的数量。",
        "publicKey": "rowCount",
        "publicLabel": "对比行数",
        "description": "下方分段（子周期）条形的数量。"
      },
      {
        "key": "focusEnabled",
        "label": "重点标注",
        "type": "toggle",
        "default": true,
        "desc": "是否突出某一条分段（峰值 / 关键项）。",
        "publicKey": "focusEnabled",
        "publicLabel": "重点标注",
        "description": "是否突出某一条分段（峰值 / 关键项）。"
      },
      {
        "key": "focusIndex",
        "label": "重点分段",
        "type": "slider",
        "default": 2,
        "min": 1,
        "max": 3,
        "step": 1,
        "desc": "被突出的分段序号（从 1 起）。",
        "publicKey": "focusIndex",
        "publicLabel": "重点分段",
        "description": "被突出的分段序号（从 1 起）。"
      },
      {
        "key": "showDelta",
        "label": "变化量标注",
        "type": "toggle",
        "default": true,
        "desc": "顶部的大号环比变化量（箭头 + 百分比）。",
        "publicKey": "showDelta",
        "publicLabel": "变化量标注",
        "description": "顶部的大号环比变化量（箭头 + 百分比）。"
      },
      {
        "key": "showCompare",
        "label": "前后对比",
        "type": "toggle",
        "default": true,
        "desc": "变化量右侧的前 / 后两段对比柱。",
        "publicKey": "showCompare",
        "publicLabel": "前后对比",
        "description": "变化量右侧的前 / 后两段对比柱。"
      },
      {
        "key": "showArrow",
        "label": "趋势箭头",
        "type": "toggle",
        "default": true,
        "desc": "变化量左侧的趋势方向箭头。",
        "publicKey": "showArrow",
        "publicLabel": "趋势箭头",
        "description": "变化量左侧的趋势方向箭头。"
      },
      {
        "key": "metricCount",
        "label": "指标行数",
        "type": "slider",
        "default": 4,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "左侧主体卡的指标行数量。",
        "publicKey": "metricCount",
        "publicLabel": "指标行数",
        "description": "左侧主体卡的指标行数量。"
      },
      {
        "key": "showSwatches",
        "label": "色谱色卡",
        "type": "toggle",
        "default": true,
        "desc": "左下角的装饰性色谱色卡。",
        "publicKey": "showSwatches",
        "publicLabel": "色谱色卡",
        "description": "左下角的装饰性色谱色卡。"
      },
      {
        "key": "accentColor",
        "label": "强调色",
        "type": "color",
        "default": "#e2742c",
        "options": [
          "#d8402e",
          "#e2742c",
          "#efbe2e",
          "#3c9a52",
          "#4da0c6",
          "#2c44a0",
          "#7a3c90"
        ],
        "desc": "主体字形 / 变化量 / 重点标注的强调色。",
        "publicKey": "accentColor",
        "publicLabel": "强调色",
        "description": "主体字形 / 变化量 / 重点标注的强调色。"
      },
      {
        "key": "showConclusion",
        "label": "结论文案",
        "type": "toggle",
        "default": true,
        "desc": "面板下方的一句装饰性结论。",
        "publicKey": "showConclusion",
        "publicLabel": "结论文案",
        "description": "面板下方的一句装饰性结论。"
      },
      {
        "key": "showSheetLabel",
        "label": "页码标签",
        "type": "toggle",
        "default": true,
        "desc": "右上角的页码 / 章节标签。",
        "publicKey": "showSheetLabel",
        "publicLabel": "页码标签",
        "description": "右上角的页码 / 章节标签。"
      }
    ],
    "defaultProps": {
      "rowCount": 3,
      "focusEnabled": true,
      "focusIndex": 2,
      "showDelta": true,
      "showCompare": true,
      "showArrow": true,
      "metricCount": 4,
      "showSwatches": true,
      "accentColor": "#e2742c",
      "showConclusion": true,
      "showSheetLabel": true,
      "copy": {
        "eyebrow": "QUARTER BREAKDOWN",
        "title": "加速季度",
        "sub": "Q2 融资拆解",
        "sheet": "Q2 · 18 / 32",
        "glyph": "Q2",
        "name": "Q2 融资拆解 · 加速阶段",
        "metrics": [
          {
            "k": "融资额",
            "v": "284",
            "u": "亿美元"
          },
          {
            "k": "事件数",
            "v": "26",
            "u": "笔"
          },
          {
            "k": "平均单笔",
            "v": "10.9",
            "u": "亿美元"
          },
          {
            "k": "环比增长",
            "v": "75.3",
            "u": "%"
          }
        ],
        "panelTitle": "环比对比",
        "panelNote": "QoQ · Q1 → Q2",
        "delta": {
          "sign": "+",
          "value": "75.3%",
          "cap": "对比 Q1：162 → 284 亿美元"
        },
        "compare": [
          {
            "axis": "Q1",
            "v": 162
          },
          {
            "axis": "Q2",
            "v": 284
          }
        ],
        "unit": "亿美元 / 月",
        "rows": [
          {
            "axis": "4月",
            "v": 86
          },
          {
            "axis": "5月",
            "v": 105
          },
          {
            "axis": "6月",
            "v": 93
          }
        ],
        "conclusion": "Q2 是融资窗口打开的关键节点。"
      }
    }
  },
  {
    "key": "theme05_page023",
    "themeKey": "theme05",
    "pageNumber": 23,
    "layout": "THEME05-023",
    "slot": "peak",
    "label": "峰值图文 Peak",
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
            "label": "面积"
          },
          {
            "value": "bar",
            "label": "柱状"
          },
          {
            "value": "line",
            "label": "折线"
          }
        ],
        "desc": "峰值证据图表的呈现方式：面积 / 柱状 / 折线。",
        "publicKey": "chartType",
        "publicLabel": "图表类型",
        "description": "峰值证据图表的呈现方式：面积 / 柱状 / 折线。"
      },
      {
        "key": "pointCount",
        "label": "数据点数量",
        "type": "slider",
        "default": 3,
        "min": 2,
        "max": 3,
        "step": 1,
        "desc": "图表展示的数据点（时间截面）数量。",
        "publicKey": "pointCount",
        "publicLabel": "数据点数量",
        "description": "图表展示的数据点（时间截面）数量。"
      },
      {
        "key": "focusEnabled",
        "label": "峰值标记",
        "type": "toggle",
        "default": true,
        "desc": "是否标记峰值数据点（关闭时自动取最大值）。",
        "publicKey": "focusEnabled",
        "publicLabel": "峰值标记",
        "description": "是否标记峰值数据点（关闭时自动取最大值）。"
      },
      {
        "key": "focusIndex",
        "label": "峰值数据点",
        "type": "slider",
        "default": 2,
        "min": 1,
        "max": 3,
        "step": 1,
        "desc": "被标记为峰值的数据点序号（从 1 起）。",
        "publicKey": "focusIndex",
        "publicLabel": "峰值数据点",
        "description": "被标记为峰值的数据点序号（从 1 起）。"
      },
      {
        "key": "imageCount",
        "label": "图片槽数量",
        "type": "slider",
        "default": 1,
        "min": 0,
        "max": 3,
        "step": 1,
        "desc": "面板下方图片槽数量（0–3）；按各图比例自适应排布，构图自动均衡。",
        "publicKey": "imageCount",
        "publicLabel": "图片槽数量",
        "description": "面板下方图片槽数量（0–3）；按各图比例自适应排布，构图自动均衡。"
      },
      {
        "key": "showPeakBadge",
        "label": "峰值徽标",
        "type": "toggle",
        "default": true,
        "desc": "面板右上角的峰值徽标（关闭时显示单位说明）。",
        "publicKey": "showPeakBadge",
        "publicLabel": "峰值徽标",
        "description": "面板右上角的峰值徽标（关闭时显示单位说明）。"
      },
      {
        "key": "showGalleryCaption",
        "label": "图注",
        "type": "toggle",
        "default": true,
        "desc": "图片区上方的装饰性图注。",
        "publicKey": "showGalleryCaption",
        "publicLabel": "图注",
        "description": "图片区上方的装饰性图注。"
      },
      {
        "key": "metricCount",
        "label": "指标行数",
        "type": "slider",
        "default": 4,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "左侧主体卡的指标行数量。",
        "publicKey": "metricCount",
        "publicLabel": "指标行数",
        "description": "左侧主体卡的指标行数量。"
      },
      {
        "key": "showSwatches",
        "label": "色谱色卡",
        "type": "toggle",
        "default": true,
        "desc": "左下角的装饰性色谱色卡。",
        "publicKey": "showSwatches",
        "publicLabel": "色谱色卡",
        "description": "左下角的装饰性色谱色卡。"
      },
      {
        "key": "accentColor",
        "label": "强调色",
        "type": "color",
        "default": "#d8402e",
        "options": [
          "#d8402e",
          "#e2742c",
          "#efbe2e",
          "#3c9a52",
          "#4da0c6",
          "#2c44a0",
          "#7a3c90"
        ],
        "desc": "主体字形 / 峰值标记 / 眉标的强调色。",
        "publicKey": "accentColor",
        "publicLabel": "强调色",
        "description": "主体字形 / 峰值标记 / 眉标的强调色。"
      },
      {
        "key": "showConclusion",
        "label": "结论文案",
        "type": "toggle",
        "default": true,
        "desc": "面板下方的一句装饰性结论。",
        "publicKey": "showConclusion",
        "publicLabel": "结论文案",
        "description": "面板下方的一句装饰性结论。"
      },
      {
        "key": "showSheetLabel",
        "label": "页码标签",
        "type": "toggle",
        "default": true,
        "desc": "右上角的页码 / 章节标签。",
        "publicKey": "showSheetLabel",
        "publicLabel": "页码标签",
        "description": "右上角的页码 / 章节标签。"
      }
    ],
    "defaultProps": {
      "chartType": "area",
      "pointCount": 3,
      "focusEnabled": true,
      "focusIndex": 2,
      "imageCount": 1,
      "showPeakBadge": true,
      "showGalleryCaption": true,
      "metricCount": 4,
      "showSwatches": true,
      "accentColor": "#d8402e",
      "showConclusion": true,
      "showSheetLabel": true,
      "copy": {
        "eyebrow": "QUARTER BREAKDOWN",
        "title": "全年峰值季度",
        "sub": "Q3 融资拆解",
        "sheet": "Q3 · 19 / 32",
        "glyph": "Q3",
        "name": "Q3 融资拆解 · 全年高点",
        "metrics": [
          {
            "k": "融资额",
            "v": "318",
            "u": "亿美元"
          },
          {
            "k": "事件数",
            "v": "31",
            "u": "笔"
          },
          {
            "k": "平均单笔",
            "v": "10.3",
            "u": "亿美元"
          },
          {
            "k": "峰值月份",
            "v": "8",
            "u": "月"
          }
        ],
        "panelTitle": "峰值月度",
        "unit": "亿美元 / 月",
        "points": [
          {
            "axis": "7月",
            "v": 92
          },
          {
            "axis": "8月",
            "v": 118
          },
          {
            "axis": "9月",
            "v": 108
          }
        ],
        "galleryCap": "峰值示意",
        "galleryUnit": "DROP IMAGES",
        "conclusion": "高峰之后，市场开始从热度转向筛选。"
      }
    }
  },
  {
    "key": "theme05_page024",
    "themeKey": "theme05",
    "pageNumber": 24,
    "layout": "THEME05-024",
    "slot": "curve",
    "label": "走势曲线 Curve",
    "bgClass": "",
    "controls": [
      {
        "key": "chartType",
        "label": "曲线类型",
        "type": "radio",
        "default": "area",
        "options": [
          {
            "value": "area",
            "label": "面积"
          },
          {
            "value": "line",
            "label": "折线"
          }
        ],
        "desc": "走势曲线的呈现方式：面积 / 折线。",
        "publicKey": "chartType",
        "publicLabel": "曲线类型",
        "description": "走势曲线的呈现方式：面积 / 折线。"
      },
      {
        "key": "scope",
        "label": "数据范围",
        "type": "radio",
        "default": "year",
        "options": [
          {
            "value": "year",
            "label": "全程"
          },
          {
            "value": "month",
            "label": "本段"
          }
        ],
        "desc": "曲线绘制全程（各分段）还是仅当前子周期。",
        "publicKey": "scope",
        "publicLabel": "数据范围",
        "description": "曲线绘制全程（各分段）还是仅当前子周期。"
      },
      {
        "key": "focusEnabled",
        "label": "重点标注",
        "type": "toggle",
        "default": true,
        "desc": "是否突出某一个数据点（终点 / 关键截面）。",
        "publicKey": "focusEnabled",
        "publicLabel": "重点标注",
        "description": "是否突出某一个数据点（终点 / 关键截面）。"
      },
      {
        "key": "focusIndex",
        "label": "重点数据点",
        "type": "slider",
        "default": 4,
        "min": 1,
        "max": 4,
        "step": 1,
        "desc": "被突出的数据点序号（从 1 起；超出范围自动收敛到末点）。",
        "publicKey": "focusIndex",
        "publicLabel": "重点数据点",
        "description": "被突出的数据点序号（从 1 起；超出范围自动收敛到末点）。"
      },
      {
        "key": "showBaseline",
        "label": "基准参考线",
        "type": "toggle",
        "default": true,
        "desc": "起点水平的虚线参考线，用于对比当前是否仍高于起点。",
        "publicKey": "showBaseline",
        "publicLabel": "基准参考线",
        "description": "起点水平的虚线参考线，用于对比当前是否仍高于起点。"
      },
      {
        "key": "showDeltaBadge",
        "label": "变化量标注",
        "type": "toggle",
        "default": true,
        "desc": "面板右上角的变化量徽标（关闭时显示单位说明）。",
        "publicKey": "showDeltaBadge",
        "publicLabel": "变化量标注",
        "description": "面板右上角的变化量徽标（关闭时显示单位说明）。"
      },
      {
        "key": "metricCount",
        "label": "指标行数",
        "type": "slider",
        "default": 4,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "左侧主体卡的指标行数量。",
        "publicKey": "metricCount",
        "publicLabel": "指标行数",
        "description": "左侧主体卡的指标行数量。"
      },
      {
        "key": "showSwatches",
        "label": "色谱色卡",
        "type": "toggle",
        "default": true,
        "desc": "左下角的装饰性色谱色卡。",
        "publicKey": "showSwatches",
        "publicLabel": "色谱色卡",
        "description": "左下角的装饰性色谱色卡。"
      },
      {
        "key": "accentColor",
        "label": "强调色",
        "type": "color",
        "default": "#4da0c6",
        "options": [
          "#d8402e",
          "#e2742c",
          "#efbe2e",
          "#3c9a52",
          "#4da0c6",
          "#2c44a0",
          "#7a3c90"
        ],
        "desc": "主体字形 / 曲线 / 重点标注的强调色。",
        "publicKey": "accentColor",
        "publicLabel": "强调色",
        "description": "主体字形 / 曲线 / 重点标注的强调色。"
      },
      {
        "key": "showConclusion",
        "label": "结论文案",
        "type": "toggle",
        "default": true,
        "desc": "面板下方的一句装饰性结论。",
        "publicKey": "showConclusion",
        "publicLabel": "结论文案",
        "description": "面板下方的一句装饰性结论。"
      },
      {
        "key": "showSheetLabel",
        "label": "页码标签",
        "type": "toggle",
        "default": true,
        "desc": "右上角的页码 / 章节标签。",
        "publicKey": "showSheetLabel",
        "publicLabel": "页码标签",
        "description": "右上角的页码 / 章节标签。"
      }
    ],
    "defaultProps": {
      "chartType": "area",
      "scope": "year",
      "focusEnabled": true,
      "focusIndex": 4,
      "showBaseline": true,
      "showDeltaBadge": true,
      "metricCount": 4,
      "showSwatches": true,
      "accentColor": "#4da0c6",
      "showConclusion": true,
      "showSheetLabel": true,
      "copy": {
        "eyebrow": "QUARTER BREAKDOWN",
        "title": "理性回落季度",
        "sub": "Q4 融资拆解",
        "sheet": "Q4 · 20 / 32",
        "glyph": "Q4",
        "name": "Q4 融资拆解 · 回落但仍高位",
        "metrics": [
          {
            "k": "融资额",
            "v": "206",
            "u": "亿美元"
          },
          {
            "k": "事件数",
            "v": "22",
            "u": "笔"
          },
          {
            "k": "平均单笔",
            "v": "9.4",
            "u": "亿美元"
          },
          {
            "k": "较 Q3 下降",
            "v": "35.2",
            "u": "%"
          }
        ],
        "panelTitle": "走势回落",
        "deltaBadge": "较 Q3 −35.2%",
        "unit": "亿美元",
        "year": [
          {
            "axis": "Q1",
            "v": 162
          },
          {
            "axis": "Q2",
            "v": 284
          },
          {
            "axis": "Q3",
            "v": 318
          },
          {
            "axis": "Q4",
            "v": 206
          }
        ],
        "month": [
          {
            "axis": "10月",
            "v": 73
          },
          {
            "axis": "11月",
            "v": 81
          },
          {
            "axis": "12月",
            "v": 52
          }
        ],
        "conclusion": "回落不是终点，而是分化的开始。"
      }
    }
  },
  {
    "key": "theme05_page025",
    "themeKey": "theme05",
    "pageNumber": 25,
    "layout": "THEME05-025",
    "slot": "peaktrough",
    "label": "峰谷 Peak/Trough",
    "bgClass": "",
    "controls": [
      {
        "key": "pointCount",
        "label": "数据点数量",
        "type": "slider",
        "default": 5,
        "min": 3,
        "max": 5,
        "step": 1,
        "desc": "参与峰谷对比的柱子（数据点）数量。",
        "publicKey": "pointCount",
        "publicLabel": "数据点数量",
        "description": "参与峰谷对比的柱子（数据点）数量。"
      },
      {
        "key": "highBandCount",
        "label": "高位数量",
        "type": "slider",
        "default": 3,
        "min": 1,
        "max": 4,
        "step": 1,
        "desc": "归入“高位”色组的前 N 个数据点，其余归入“低位”（自动不超过总数-1）。",
        "publicKey": "highBandCount",
        "publicLabel": "高位数量",
        "description": "归入“高位”色组的前 N 个数据点，其余归入“低位”（自动不超过总数-1）。"
      },
      {
        "key": "focusEnabled",
        "label": "重点标注",
        "type": "toggle",
        "default": true,
        "desc": "是否突出某一个数据点（极值 / 关键截面）。",
        "publicKey": "focusEnabled",
        "publicLabel": "重点标注",
        "description": "是否突出某一个数据点（极值 / 关键截面）。"
      },
      {
        "key": "focusIndex",
        "label": "重点数据点",
        "type": "slider",
        "default": 1,
        "min": 1,
        "max": 5,
        "step": 1,
        "desc": "被突出的数据点序号（从 1 起，按数值由高到低排列）。",
        "publicKey": "focusIndex",
        "publicLabel": "重点数据点",
        "description": "被突出的数据点序号（从 1 起，按数值由高到低排列）。"
      },
      {
        "key": "showBaseline",
        "label": "均值参考线",
        "type": "toggle",
        "default": true,
        "desc": "叠加一条数据均值的水平虚线参考线。",
        "publicKey": "showBaseline",
        "publicLabel": "均值参考线",
        "description": "叠加一条数据均值的水平虚线参考线。"
      },
      {
        "key": "showValue",
        "label": "数值显示",
        "type": "toggle",
        "default": true,
        "desc": "柱顶显示数值。",
        "publicKey": "showValueLabels",
        "publicLabel": "数值显示",
        "description": "柱顶显示数值。"
      },
      {
        "key": "showMetrics",
        "label": "指标列表",
        "type": "toggle",
        "default": true,
        "desc": "右侧带高位 / 低位标签的逐项列表。",
        "publicKey": "showMetrics",
        "publicLabel": "指标列表",
        "description": "右侧带高位 / 低位标签的逐项列表。"
      },
      {
        "key": "highColor",
        "label": "高位色",
        "type": "color",
        "default": "#d8402e",
        "options": [
          "#d8402e",
          "#e2742c",
          "#efbe2e",
          "#3c9a52",
          "#4da0c6",
          "#2c44a0",
          "#7a3c90"
        ],
        "desc": "高位色组的柱体颜色。",
        "publicKey": "highColor",
        "publicLabel": "高位色",
        "description": "高位色组的柱体颜色。"
      },
      {
        "key": "lowColor",
        "label": "低位色",
        "type": "color",
        "default": "#4da0c6",
        "options": [
          "#d8402e",
          "#e2742c",
          "#efbe2e",
          "#3c9a52",
          "#4da0c6",
          "#2c44a0",
          "#7a3c90"
        ],
        "desc": "低位色组的柱体颜色。",
        "publicKey": "lowColor",
        "publicLabel": "低位色",
        "description": "低位色组的柱体颜色。"
      },
      {
        "key": "accentColor",
        "label": "强调色",
        "type": "color",
        "default": "#d8402e",
        "options": [
          "#d8402e",
          "#e2742c",
          "#efbe2e",
          "#3c9a52",
          "#4da0c6",
          "#2c44a0",
          "#7a3c90"
        ],
        "desc": "眉标与重点标注的强调色。",
        "publicKey": "accentColor",
        "publicLabel": "强调色",
        "description": "眉标与重点标注的强调色。"
      },
      {
        "key": "showConclusion",
        "label": "结论文案",
        "type": "toggle",
        "default": true,
        "desc": "右下角的一句装饰性结论。",
        "publicKey": "showConclusion",
        "publicLabel": "结论文案",
        "description": "右下角的一句装饰性结论。"
      },
      {
        "key": "showSheetLabel",
        "label": "页码标签",
        "type": "toggle",
        "default": true,
        "desc": "右上角的页码 / 章节标签。",
        "publicKey": "showSheetLabel",
        "publicLabel": "页码标签",
        "description": "右上角的页码 / 章节标签。"
      }
    ],
    "defaultProps": {
      "pointCount": 5,
      "highBandCount": 3,
      "focusEnabled": true,
      "focusIndex": 1,
      "showBaseline": true,
      "showValue": true,
      "showMetrics": true,
      "highColor": "#d8402e",
      "lowColor": "#4da0c6",
      "accentColor": "#d8402e",
      "showConclusion": true,
      "showSheetLabel": true,
      "copy": {
        "eyebrow": "PEAK AND TROUGH",
        "title": "峰值与低位",
        "sub": "月度峰谷对比",
        "sheet": "PEAK · 21 / 32",
        "unit": "亿美元 / 月",
        "highLabel": "高位",
        "lowLabel": "低位",
        "points": [
          {
            "axis": "8 月",
            "v": 118
          },
          {
            "axis": "9 月",
            "v": 108
          },
          {
            "axis": "5 月",
            "v": 105
          },
          {
            "axis": "12 月",
            "v": 52
          },
          {
            "axis": "1 月",
            "v": 45
          }
        ],
        "conclusion": "月度波动背后是头部交易节奏。"
      }
    }
  },
  {
    "key": "theme05_page026",
    "themeKey": "theme05",
    "pageNumber": 26,
    "layout": "THEME05-026",
    "slot": "waterfall",
    "label": "瀑布 Waterfall",
    "bgClass": "",
    "controls": [
      {
        "key": "stepCount",
        "label": "分段数量",
        "type": "slider",
        "default": 5,
        "min": 3,
        "max": 5,
        "step": 1,
        "desc": "参与累计贡献的分段（瀑布台阶）数量。",
        "publicKey": "stepCount",
        "publicLabel": "分段数量",
        "description": "参与累计贡献的分段（瀑布台阶）数量。"
      },
      {
        "key": "showTotal",
        "label": "合计列",
        "type": "toggle",
        "default": true,
        "desc": "末尾的累计合计柱与图例合计行。",
        "publicKey": "showTotal",
        "publicLabel": "合计列",
        "description": "末尾的累计合计柱与图例合计行。"
      },
      {
        "key": "showConnectors",
        "label": "连接线",
        "type": "toggle",
        "default": true,
        "desc": "相邻台阶之间的累计水平虚线连接线。",
        "publicKey": "showConnectors",
        "publicLabel": "连接线",
        "description": "相邻台阶之间的累计水平虚线连接线。"
      },
      {
        "key": "focusEnabled",
        "label": "重点分段",
        "type": "toggle",
        "default": true,
        "desc": "是否突出某一个分段（贡献台阶）。",
        "publicKey": "focusEnabled",
        "publicLabel": "重点分段",
        "description": "是否突出某一个分段（贡献台阶）。"
      },
      {
        "key": "focusIndex",
        "label": "重点分段序号",
        "type": "slider",
        "default": 1,
        "min": 1,
        "max": 5,
        "step": 1,
        "desc": "被突出的分段序号（从 1 起）。",
        "publicKey": "focusIndex",
        "publicLabel": "重点分段序号",
        "description": "被突出的分段序号（从 1 起）。"
      },
      {
        "key": "showValue",
        "label": "数值显示",
        "type": "toggle",
        "default": true,
        "desc": "柱顶显示数值。",
        "publicKey": "showValueLabels",
        "publicLabel": "数值显示",
        "description": "柱顶显示数值。"
      },
      {
        "key": "colorMode",
        "label": "配色方式",
        "type": "radio",
        "default": "category",
        "options": [
          {
            "value": "category",
            "label": "按类别"
          },
          {
            "value": "accent",
            "label": "强调色"
          },
          {
            "value": "mono",
            "label": "单色"
          }
        ],
        "desc": "台阶配色：按类别 / 统一强调色 / 单色。",
        "publicKey": "colorMode",
        "publicLabel": "配色方式",
        "description": "台阶配色：按类别 / 统一强调色 / 单色。"
      },
      {
        "key": "showLegend",
        "label": "图例列表",
        "type": "toggle",
        "default": true,
        "desc": "右侧带数值与占比的明细列表。",
        "publicKey": "showValueLabels2",
        "publicLabel": "图例列表",
        "description": "右侧带数值与占比的明细列表。"
      },
      {
        "key": "accentColor",
        "label": "强调色",
        "type": "color",
        "default": "#d8402e",
        "options": [
          "#d8402e",
          "#e2742c",
          "#efbe2e",
          "#3c9a52",
          "#4da0c6",
          "#2c44a0",
          "#7a3c90"
        ],
        "desc": "眉标与重点项的强调色（强调色配色下也用于台阶）。",
        "publicKey": "accentColor",
        "publicLabel": "强调色",
        "description": "眉标与重点项的强调色（强调色配色下也用于台阶）。"
      },
      {
        "key": "showConclusion",
        "label": "结论文案",
        "type": "toggle",
        "default": true,
        "desc": "右下角的一句装饰性结论。",
        "publicKey": "showConclusion",
        "publicLabel": "结论文案",
        "description": "右下角的一句装饰性结论。"
      },
      {
        "key": "showSheetLabel",
        "label": "页码标签",
        "type": "toggle",
        "default": true,
        "desc": "右上角的页码 / 章节标签。",
        "publicKey": "showSheetLabel",
        "publicLabel": "页码标签",
        "description": "右上角的页码 / 章节标签。"
      }
    ],
    "defaultProps": {
      "stepCount": 5,
      "showTotal": true,
      "showConnectors": true,
      "focusEnabled": true,
      "focusIndex": 1,
      "showValue": true,
      "colorMode": "category",
      "showLegend": true,
      "accentColor": "#d8402e",
      "showConclusion": true,
      "showSheetLabel": true,
      "copy": {
        "eyebrow": "FUNDING WATERFALL",
        "title": "赛道贡献拆分",
        "sub": "融资额贡献瀑布",
        "sheet": "WATERFALL · 22 / 32",
        "unit": "亿美元",
        "totalLabel": "全年合计",
        "steps": [
          {
            "name": "通用大模型",
            "v": 420,
            "c": "#d8402e"
          },
          {
            "name": "垂直应用",
            "v": 245,
            "c": "#e2742c"
          },
          {
            "name": "基础设施",
            "v": 158,
            "c": "#4da0c6"
          },
          {
            "name": "AI 芯片",
            "v": 97,
            "c": "#2c44a0"
          },
          {
            "name": "其他",
            "v": 50,
            "c": "#3c9a52"
          }
        ],
        "conclusion": "大模型制造热度，基础设施和应用承接兑现。"
      }
    }
  },
  {
    "key": "theme05_page027",
    "themeKey": "theme05",
    "pageNumber": 27,
    "layout": "THEME05-027",
    "slot": "stacked",
    "label": "双维堆叠 Split",
    "bgClass": "",
    "controls": [
      {
        "key": "segmentCount",
        "label": "分段数量",
        "type": "slider",
        "default": 4,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "参与拆分的分段（数值区间）数量。",
        "publicKey": "segmentCount",
        "publicLabel": "分段数量",
        "description": "参与拆分的分段（数值区间）数量。"
      },
      {
        "key": "showSecondDimension",
        "label": "第二维度",
        "type": "toggle",
        "default": true,
        "desc": "是否显示第二条维度堆叠条（关闭则仅显示第一维度）。",
        "publicKey": "showSecondDimension",
        "publicLabel": "第二维度",
        "description": "是否显示第二条维度堆叠条（关闭则仅显示第一维度）。"
      },
      {
        "key": "focusEnabled",
        "label": "重点分段",
        "type": "toggle",
        "default": true,
        "desc": "是否突出某一个分段（其余分段淡出）。",
        "publicKey": "focusEnabled",
        "publicLabel": "重点分段",
        "description": "是否突出某一个分段（其余分段淡出）。"
      },
      {
        "key": "focusIndex",
        "label": "重点分段序号",
        "type": "slider",
        "default": 4,
        "min": 1,
        "max": 4,
        "step": 1,
        "desc": "被突出的分段序号（从 1 起）。",
        "publicKey": "focusIndex",
        "publicLabel": "重点分段序号",
        "description": "被突出的分段序号（从 1 起）。"
      },
      {
        "key": "showValue",
        "label": "数值显示",
        "type": "toggle",
        "default": true,
        "desc": "在足够宽的色块内显示数值与占比。",
        "publicKey": "showValueLabels",
        "publicLabel": "数值显示",
        "description": "在足够宽的色块内显示数值与占比。"
      },
      {
        "key": "showLegend",
        "label": "图例列表",
        "type": "toggle",
        "default": true,
        "desc": "右侧带两个维度数值的明细列表。",
        "publicKey": "showValueLabels2",
        "publicLabel": "图例列表",
        "description": "右侧带两个维度数值的明细列表。"
      },
      {
        "key": "accentColor",
        "label": "强调色",
        "type": "color",
        "default": "#d8402e",
        "options": [
          "#d8402e",
          "#e2742c",
          "#efbe2e",
          "#3c9a52",
          "#4da0c6",
          "#2c44a0",
          "#7a3c90"
        ],
        "desc": "眉标的强调色。",
        "publicKey": "accentColor",
        "publicLabel": "强调色",
        "description": "眉标的强调色。"
      },
      {
        "key": "showConclusion",
        "label": "结论文案",
        "type": "toggle",
        "default": true,
        "desc": "右下角的一句装饰性结论。",
        "publicKey": "showConclusion",
        "publicLabel": "结论文案",
        "description": "右下角的一句装饰性结论。"
      },
      {
        "key": "showSheetLabel",
        "label": "页码标签",
        "type": "toggle",
        "default": true,
        "desc": "右上角的页码 / 章节标签。",
        "publicKey": "showSheetLabel",
        "publicLabel": "页码标签",
        "description": "右上角的页码 / 章节标签。"
      }
    ],
    "defaultProps": {
      "segmentCount": 4,
      "showSecondDimension": true,
      "focusEnabled": true,
      "focusIndex": 4,
      "showValue": true,
      "showLegend": true,
      "accentColor": "#d8402e",
      "showConclusion": true,
      "showSheetLabel": true,
      "copy": {
        "eyebrow": "DEAL SIZE SPLIT",
        "title": "金额区间结构",
        "sub": "交易规模分布",
        "sheet": "SPLIT · 23 / 32",
        "measureA": {
          "name": "笔数",
          "unit": "笔"
        },
        "measureB": {
          "name": "金额",
          "unit": "亿美元"
        },
        "segments": [
          {
            "name": "1–2 亿美元",
            "a": 41,
            "b": 58,
            "c": "#3c9a52"
          },
          {
            "name": "2–5 亿美元",
            "a": 29,
            "b": 91,
            "c": "#4da0c6"
          },
          {
            "name": "5–10 亿美元",
            "a": 15,
            "b": 103,
            "c": "#e2742c"
          },
          {
            "name": "10 亿以上",
            "a": 12,
            "b": 718,
            "c": "#d8402e"
          }
        ],
        "conclusion": "市场被少数超级交易重新定价。"
      }
    }
  },
  {
    "key": "theme05_page028",
    "themeKey": "theme05",
    "pageNumber": 28,
    "layout": "THEME05-028",
    "slot": "bignumber",
    "label": "大数字 Big Number",
    "bgClass": "",
    "controls": [
      {
        "key": "auxCount",
        "label": "辅助指标数量",
        "type": "slider",
        "default": 3,
        "min": 0,
        "max": 3,
        "step": 1,
        "desc": "底部支撑指标的数量（0 隐藏整行）。",
        "publicKey": "auxCount",
        "publicLabel": "辅助指标数量",
        "description": "底部支撑指标的数量（0 隐藏整行）。"
      },
      {
        "key": "numberAlign",
        "label": "主数字对齐",
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
        "desc": "主数字与说明文字的对齐方式。",
        "publicKey": "numberAlign",
        "publicLabel": "主数字对齐",
        "description": "主数字与说明文字的对齐方式。"
      },
      {
        "key": "showUnit",
        "label": "单位显示",
        "type": "toggle",
        "default": true,
        "desc": "主数字后的单位后缀。",
        "publicKey": "showUnit",
        "publicLabel": "单位显示",
        "description": "主数字后的单位后缀。"
      },
      {
        "key": "showCaption",
        "label": "解释说明",
        "type": "toggle",
        "default": true,
        "desc": "主数字下方的一句解释说明。",
        "publicKey": "showCaption",
        "publicLabel": "解释说明",
        "description": "主数字下方的一句解释说明。"
      },
      {
        "key": "showMessage",
        "label": "支撑文案",
        "type": "toggle",
        "default": true,
        "desc": "解释下方的一句支撑性文案。",
        "publicKey": "showMessage",
        "publicLabel": "支撑文案",
        "description": "解释下方的一句支撑性文案。"
      },
      {
        "key": "accentColor",
        "label": "强调色",
        "type": "color",
        "default": "#2c44a0",
        "options": [
          "#d8402e",
          "#e2742c",
          "#efbe2e",
          "#3c9a52",
          "#4da0c6",
          "#2c44a0",
          "#7a3c90"
        ],
        "desc": "主数字与眉标的强调色。",
        "publicKey": "accentColor",
        "publicLabel": "强调色",
        "description": "主数字与眉标的强调色。"
      },
      {
        "key": "showWordmark",
        "label": "品牌标识",
        "type": "toggle",
        "default": true,
        "desc": "左下角的品牌标识。",
        "publicKey": "showWordmark",
        "publicLabel": "品牌标识",
        "description": "左下角的品牌标识。"
      },
      {
        "key": "showColorBand",
        "label": "色谱条",
        "type": "toggle",
        "default": true,
        "desc": "右下角的装饰色谱条。",
        "publicKey": "showColorBand",
        "publicLabel": "色谱条",
        "description": "右下角的装饰色谱条。"
      },
      {
        "key": "showSheetLabel",
        "label": "页码标签",
        "type": "toggle",
        "default": true,
        "desc": "右上角的页码 / 章节标签。",
        "publicKey": "showSheetLabel",
        "publicLabel": "页码标签",
        "description": "右上角的页码 / 章节标签。"
      }
    ],
    "defaultProps": {
      "auxCount": 3,
      "numberAlign": "left",
      "showUnit": true,
      "showCaption": true,
      "showMessage": true,
      "accentColor": "#2c44a0",
      "showWordmark": true,
      "showColorBand": true,
      "showSheetLabel": true,
      "copy": {
        "eyebrow": "AVERAGE TICKET",
        "title": "赛道平均融资额",
        "sub": "平均单笔规模",
        "sheet": "AVERAGE · 24 / 32",
        "number": "10",
        "unit": "亿美元",
        "caption": "全年单笔大额融资的平均规模。",
        "message": "融资规模越大，后续兑现压力越高。",
        "aux": [
          {
            "k": "大额事件",
            "v": "97",
            "u": "笔"
          },
          {
            "k": "全年融资",
            "v": "970",
            "u": "亿美元"
          },
          {
            "k": "最大单笔",
            "v": "66",
            "u": "亿美元"
          }
        ]
      }
    }
  },
  {
    "key": "theme05_page029",
    "themeKey": "theme05",
    "pageNumber": 29,
    "layout": "THEME05-029",
    "slot": "cumulative",
    "label": "累计曲线 Cumulative",
    "bgClass": "",
    "controls": [
      {
        "key": "chartType",
        "label": "曲线类型",
        "type": "radio",
        "default": "area",
        "options": [
          {
            "value": "area",
            "label": "面积"
          },
          {
            "value": "line",
            "label": "折线"
          }
        ],
        "desc": "累计曲线呈现方式：面积 / 折线。",
        "publicKey": "chartType",
        "publicLabel": "曲线类型",
        "description": "累计曲线呈现方式：面积 / 折线。"
      },
      {
        "key": "nodeCount",
        "label": "节点数量",
        "type": "slider",
        "default": 4,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "累计曲线的分位节点（Top-N 档位）数量。",
        "publicKey": "nodeCount",
        "publicLabel": "节点数量",
        "description": "累计曲线的分位节点（Top-N 档位）数量。"
      },
      {
        "key": "focusEnabled",
        "label": "重点节点",
        "type": "toggle",
        "default": true,
        "desc": "是否突出某一个分位节点。",
        "publicKey": "focusEnabled",
        "publicLabel": "重点节点",
        "description": "是否突出某一个分位节点。"
      },
      {
        "key": "focusIndex",
        "label": "重点节点序号",
        "type": "slider",
        "default": 4,
        "min": 1,
        "max": 4,
        "step": 1,
        "desc": "被突出的节点序号（从 1 起）。",
        "publicKey": "focusIndex",
        "publicLabel": "重点节点序号",
        "description": "被突出的节点序号（从 1 起）。"
      },
      {
        "key": "showStageLabels",
        "label": "阶段占比标签",
        "type": "toggle",
        "default": true,
        "desc": "各节点上方的累计占比标签。",
        "publicKey": "showStageLabels",
        "publicLabel": "阶段占比标签",
        "description": "各节点上方的累计占比标签。"
      },
      {
        "key": "showMetrics",
        "label": "指标列表",
        "type": "toggle",
        "default": true,
        "desc": "右侧带累计值与边际增量的列表。",
        "publicKey": "showMetrics",
        "publicLabel": "指标列表",
        "description": "右侧带累计值与边际增量的列表。"
      },
      {
        "key": "accentColor",
        "label": "强调色",
        "type": "color",
        "default": "#7a3c90",
        "options": [
          "#d8402e",
          "#e2742c",
          "#efbe2e",
          "#3c9a52",
          "#4da0c6",
          "#2c44a0",
          "#7a3c90"
        ],
        "desc": "重点标注与眉标的强调色。",
        "publicKey": "accentColor",
        "publicLabel": "强调色",
        "description": "重点标注与眉标的强调色。"
      },
      {
        "key": "showConclusion",
        "label": "结论文案",
        "type": "toggle",
        "default": true,
        "desc": "右下角的一句装饰性结论。",
        "publicKey": "showConclusion",
        "publicLabel": "结论文案",
        "description": "右下角的一句装饰性结论。"
      },
      {
        "key": "showSheetLabel",
        "label": "页码标签",
        "type": "toggle",
        "default": true,
        "desc": "右上角的页码 / 章节标签。",
        "publicKey": "showSheetLabel",
        "publicLabel": "页码标签",
        "description": "右上角的页码 / 章节标签。"
      }
    ],
    "defaultProps": {
      "chartType": "area",
      "nodeCount": 4,
      "focusEnabled": true,
      "focusIndex": 4,
      "showStageLabels": true,
      "showMetrics": true,
      "accentColor": "#7a3c90",
      "showConclusion": true,
      "showSheetLabel": true,
      "copy": {
        "eyebrow": "CAPITAL CURVE",
        "title": "累计资金分布",
        "sub": "资本集中曲线",
        "sheet": "CURVE · 25 / 32",
        "unit": "累计资金占比 %",
        "nodes": [
          {
            "axis": "Top 3",
            "v": 18.7
          },
          {
            "axis": "Top 10",
            "v": 23.8
          },
          {
            "axis": "Top 25",
            "v": 48.5
          },
          {
            "axis": "Top 50",
            "v": 71.2
          }
        ],
        "conclusion": "集中度本身就是市场结构。"
      }
    }
  },
  {
    "key": "theme05_page030",
    "themeKey": "theme05",
    "pageNumber": 30,
    "layout": "THEME05-030",
    "slot": "chapter3",
    "label": "章节 Chapter 03",
    "bgClass": "",
    "controls": [
      {
        "key": "theme",
        "label": "背景主题",
        "type": "radio",
        "default": "color",
        "options": [
          {
            "value": "dark",
            "label": "深色"
          },
          {
            "value": "paper",
            "label": "纸色"
          },
          {
            "value": "color",
            "label": "色块"
          }
        ],
        "desc": "章节页背景：深色 / 纸色 / 整页色块。",
        "publicKey": "theme",
        "publicLabel": "背景主题",
        "description": "章节页背景：深色 / 纸色 / 整页色块。"
      },
      {
        "key": "bgColor",
        "label": "色块背景",
        "type": "color",
        "default": "#d8402e",
        "options": [
          "#d8402e",
          "#e2742c",
          "#efbe2e",
          "#3c9a52",
          "#4da0c6",
          "#2c44a0",
          "#7a3c90"
        ],
        "desc": "「色块」主题下的整页背景色。",
        "publicKey": "bgColor",
        "publicLabel": "色块背景",
        "description": "「色块」主题下的整页背景色。"
      },
      {
        "key": "showBigNumber",
        "label": "大号章节号",
        "type": "toggle",
        "default": true,
        "desc": "右侧的超大章节编号。",
        "publicKey": "showBigNumber",
        "publicLabel": "大号章节号",
        "description": "右侧的超大章节编号。"
      },
      {
        "key": "keywordCount",
        "label": "关键词数量",
        "type": "slider",
        "default": 4,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "底部关键词标签数量（0 隐藏）。",
        "publicKey": "keywordCount",
        "publicLabel": "关键词数量",
        "description": "底部关键词标签数量（0 隐藏）。"
      },
      {
        "key": "accentColor",
        "label": "强调色",
        "type": "color",
        "default": "#d8402e",
        "options": [
          "#d8402e",
          "#e2742c",
          "#efbe2e",
          "#3c9a52",
          "#4da0c6",
          "#2c44a0",
          "#7a3c90"
        ],
        "desc": "眉标与章节编号的强调色（色块主题除外）。",
        "publicKey": "accentColor",
        "publicLabel": "强调色",
        "description": "眉标与章节编号的强调色（色块主题除外）。"
      },
      {
        "key": "showColorBand",
        "label": "色谱条",
        "type": "toggle",
        "default": true,
        "desc": "底部的色谱条带。",
        "publicKey": "showColorBand",
        "publicLabel": "色谱条",
        "description": "底部的色谱条带。"
      },
      {
        "key": "showWordmark",
        "label": "品牌标识",
        "type": "toggle",
        "default": true,
        "desc": "左上角的品牌标识。",
        "publicKey": "showWordmark",
        "publicLabel": "品牌标识",
        "description": "左上角的品牌标识。"
      },
      {
        "key": "showSheetLabel",
        "label": "页码标签",
        "type": "toggle",
        "default": true,
        "desc": "右上角的章节 / 页码标签。",
        "publicKey": "showSheetLabel",
        "publicLabel": "页码标签",
        "description": "右上角的章节 / 页码标签。"
      }
    ],
    "defaultProps": {
      "theme": "color",
      "bgColor": "#d8402e",
      "showBigNumber": true,
      "keywordCount": 4,
      "accentColor": "#d8402e",
      "showColorBand": true,
      "showWordmark": true,
      "showSheetLabel": true,
      "copy": {
        "brand": "AICL",
        "barMeta": "SECTION DIVIDER",
        "eyebrow": "CHAPTER 03",
        "num": "03",
        "title": "赛道结构细分",
        "sub": "从大模型到垂直应用",
        "sheet": "26 / 32",
        "keywords": [
          "通用模型",
          "Agent",
          "企业搜索",
          "开发者工具"
        ]
      }
    }
  },
  {
    "key": "theme05_page031",
    "themeKey": "theme05",
    "pageNumber": 31,
    "layout": "THEME05-031",
    "slot": "radar",
    "label": "雷达 Radar",
    "bgClass": "",
    "controls": [
      {
        "key": "axisCount",
        "label": "维度数量",
        "type": "slider",
        "default": 4,
        "min": 3,
        "max": 4,
        "step": 1,
        "desc": "雷达图的能力维度（轴）数量（雷达至少 3 维）。",
        "publicKey": "axisCount",
        "publicLabel": "维度数量",
        "description": "雷达图的能力维度（轴）数量（雷达至少 3 维）。"
      },
      {
        "key": "fillShape",
        "label": "填充形态",
        "type": "toggle",
        "default": true,
        "desc": "数据多边形填充（开）或仅描边（关）。",
        "publicKey": "fillShape",
        "publicLabel": "填充形态",
        "description": "数据多边形填充（开）或仅描边（关）。"
      },
      {
        "key": "showGrid",
        "label": "网格刻度",
        "type": "toggle",
        "default": true,
        "desc": "同心环刻度与放射轴线。",
        "publicKey": "showGrid",
        "publicLabel": "网格刻度",
        "description": "同心环刻度与放射轴线。"
      },
      {
        "key": "showLabels",
        "label": "维度标签",
        "type": "toggle",
        "default": true,
        "desc": "各轴外侧的维度名称与数值标签。",
        "publicKey": "showValueLabels",
        "publicLabel": "维度标签",
        "description": "各轴外侧的维度名称与数值标签。"
      },
      {
        "key": "focusEnabled",
        "label": "重点维度",
        "type": "toggle",
        "default": true,
        "desc": "是否突出某一个维度。",
        "publicKey": "focusEnabled",
        "publicLabel": "重点维度",
        "description": "是否突出某一个维度。"
      },
      {
        "key": "focusIndex",
        "label": "重点维度序号",
        "type": "slider",
        "default": 1,
        "min": 1,
        "max": 4,
        "step": 1,
        "desc": "被突出的维度序号（从 1 起）。",
        "publicKey": "focusIndex",
        "publicLabel": "重点维度序号",
        "description": "被突出的维度序号（从 1 起）。"
      },
      {
        "key": "showMetrics",
        "label": "指标列表",
        "type": "toggle",
        "default": true,
        "desc": "右侧的逐维数值列表。",
        "publicKey": "showValueLabels2",
        "publicLabel": "指标列表",
        "description": "右侧的逐维数值列表。"
      },
      {
        "key": "accentColor",
        "label": "强调色",
        "type": "color",
        "default": "#3c9a52",
        "options": [
          "#d8402e",
          "#e2742c",
          "#efbe2e",
          "#3c9a52",
          "#4da0c6",
          "#2c44a0",
          "#7a3c90"
        ],
        "desc": "数据多边形与重点 / 眉标的强调色。",
        "publicKey": "accentColor",
        "publicLabel": "强调色",
        "description": "数据多边形与重点 / 眉标的强调色。"
      },
      {
        "key": "showConclusion",
        "label": "结论文案",
        "type": "toggle",
        "default": true,
        "desc": "右下角的一句装饰性结论。",
        "publicKey": "showConclusion",
        "publicLabel": "结论文案",
        "description": "右下角的一句装饰性结论。"
      },
      {
        "key": "showSheetLabel",
        "label": "页码标签",
        "type": "toggle",
        "default": true,
        "desc": "右上角的页码 / 章节标签。",
        "publicKey": "showSheetLabel",
        "publicLabel": "页码标签",
        "description": "右上角的页码 / 章节标签。"
      }
    ],
    "defaultProps": {
      "axisCount": 4,
      "fillShape": true,
      "showGrid": true,
      "showLabels": true,
      "focusEnabled": true,
      "focusIndex": 1,
      "showMetrics": true,
      "accentColor": "#3c9a52",
      "showConclusion": true,
      "showSheetLabel": true,
      "copy": {
        "eyebrow": "MODEL LAB RACE",
        "title": "算力、数据、人才与渠道",
        "sub": "模型实验室竞争",
        "sheet": "RADAR · 27 / 32",
        "unit": "同比变化 %",
        "axes": [
          {
            "k": "算力预算",
            "v": 64
          },
          {
            "k": "研究团队",
            "v": 38
          },
          {
            "k": "企业 API 客户",
            "v": 52
          },
          {
            "k": "推理成本",
            "v": -21
          }
        ],
        "conclusion": "模型能力只是入口，交付能力才是商业化。"
      }
    }
  },
  {
    "key": "theme05_page032",
    "themeKey": "theme05",
    "pageNumber": 32,
    "layout": "THEME05-032",
    "slot": "segment",
    "label": "赛道剖析 Segment",
    "bgClass": "",
    "controls": [
      {
        "key": "imageCount",
        "label": "图片槽数量",
        "type": "slider",
        "default": 2,
        "min": 0,
        "max": 3,
        "step": 1,
        "desc": "图片槽数量（0–3）；按各图比例自适应排布。为 0 时主体卡自动铺满整幅。",
        "publicKey": "imageCount",
        "publicLabel": "图片槽数量",
        "description": "图片槽数量（0–3）；按各图比例自适应排布。为 0 时主体卡自动铺满整幅。"
      },
      {
        "key": "metricCount",
        "label": "指标行数",
        "type": "slider",
        "default": 4,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "主体卡内的指标行数。",
        "publicKey": "metricCount",
        "publicLabel": "指标行数",
        "description": "主体卡内的指标行数。"
      },
      {
        "key": "cardTheme",
        "label": "主体卡主题",
        "type": "radio",
        "default": "color",
        "options": [
          {
            "value": "color",
            "label": "色块"
          },
          {
            "value": "dark",
            "label": "深色"
          },
          {
            "value": "paper",
            "label": "纸色"
          }
        ],
        "desc": "主体卡背景：强调色块 / 深色 / 纸色。",
        "publicKey": "cardTheme",
        "publicLabel": "主体卡主题",
        "description": "主体卡背景：强调色块 / 深色 / 纸色。"
      },
      {
        "key": "showGalleryCaption",
        "label": "图注",
        "type": "toggle",
        "default": true,
        "desc": "图片区上方的装饰性图注。",
        "publicKey": "showGalleryCaption",
        "publicLabel": "图注",
        "description": "图片区上方的装饰性图注。"
      },
      {
        "key": "accentColor",
        "label": "强调色",
        "type": "color",
        "default": "#2c44a0",
        "options": [
          "#d8402e",
          "#e2742c",
          "#efbe2e",
          "#3c9a52",
          "#4da0c6",
          "#2c44a0",
          "#7a3c90"
        ],
        "desc": "眉标与「色块」主题下主体卡的颜色。",
        "publicKey": "accentColor",
        "publicLabel": "强调色",
        "description": "眉标与「色块」主题下主体卡的颜色。"
      },
      {
        "key": "showConclusion",
        "label": "结论文案",
        "type": "toggle",
        "default": true,
        "desc": "底部的一句装饰性结论。",
        "publicKey": "showConclusion",
        "publicLabel": "结论文案",
        "description": "底部的一句装饰性结论。"
      },
      {
        "key": "showSheetLabel",
        "label": "页码标签",
        "type": "toggle",
        "default": true,
        "desc": "右上角的页码 / 章节标签。",
        "publicKey": "showSheetLabel",
        "publicLabel": "页码标签",
        "description": "右上角的页码 / 章节标签。"
      }
    ],
    "defaultProps": {
      "imageCount": 2,
      "metricCount": 4,
      "cardTheme": "color",
      "showGalleryCaption": true,
      "accentColor": "#2c44a0",
      "showConclusion": true,
      "showSheetLabel": true,
      "copy": {
        "eyebrow": "SEGMENT PROFILE",
        "en": "AI AGENTS",
        "title": "工作流自动化机会",
        "sub": "AI Agent 赛道",
        "sheet": "SEGMENT · 28 / 32",
        "metrics": [
          [
            "融资额",
            "72",
            "亿美元"
          ],
          [
            "事件数",
            "16",
            "笔"
          ],
          [
            "平均单笔",
            "4.5",
            "亿美元"
          ],
          [
            "样本 ARR 中位数",
            "4200",
            "万美元"
          ]
        ],
        "galleryCap": "赛道图示",
        "galleryUnit": "DROP IMAGES",
        "conclusion": "能进入工作流的 Agent 才有长期价值。"
      }
    }
  },
  {
    "key": "theme05_page033",
    "themeKey": "theme05",
    "pageNumber": 33,
    "layout": "THEME05-033",
    "slot": "spotlight",
    "label": "赛道聚焦 Spotlight",
    "bgClass": "",
    "controls": [
      {
        "key": "imageCount",
        "label": "图片槽数量",
        "type": "slider",
        "default": 1,
        "min": 0,
        "max": 2,
        "step": 1,
        "desc": "主视觉图片槽数量（0–2）；按比例自适应。为 0 时文本卡铺满整幅、指标转两列。",
        "publicKey": "imageCount",
        "publicLabel": "图片槽数量",
        "description": "主视觉图片槽数量（0–2）；按比例自适应。为 0 时文本卡铺满整幅、指标转两列。"
      },
      {
        "key": "imageSide",
        "label": "图片位置",
        "type": "radio",
        "default": "right",
        "options": [
          {
            "value": "right",
            "label": "右侧"
          },
          {
            "value": "left",
            "label": "左侧"
          }
        ],
        "desc": "图片相对文本卡的位置（仅在有图片时生效）。",
        "publicKey": "imageSide",
        "publicLabel": "图片位置",
        "description": "图片相对文本卡的位置（仅在有图片时生效）。"
      },
      {
        "key": "metricCount",
        "label": "指标行数",
        "type": "slider",
        "default": 4,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "文本卡内的指标行数。",
        "publicKey": "metricCount",
        "publicLabel": "指标行数",
        "description": "文本卡内的指标行数。"
      },
      {
        "key": "cardTheme",
        "label": "文本卡主题",
        "type": "radio",
        "default": "color",
        "options": [
          {
            "value": "color",
            "label": "色块"
          },
          {
            "value": "dark",
            "label": "深色"
          },
          {
            "value": "paper",
            "label": "纸色"
          }
        ],
        "desc": "文本卡背景：强调色块 / 深色 / 纸色。",
        "publicKey": "cardTheme",
        "publicLabel": "文本卡主题",
        "description": "文本卡背景：强调色块 / 深色 / 纸色。"
      },
      {
        "key": "focusEnabled",
        "label": "重点指标",
        "type": "toggle",
        "default": false,
        "desc": "是否突出某一条指标。",
        "publicKey": "focusEnabled",
        "publicLabel": "重点指标",
        "description": "是否突出某一条指标。"
      },
      {
        "key": "focusIndex",
        "label": "重点指标序号",
        "type": "slider",
        "default": 1,
        "min": 1,
        "max": 4,
        "step": 1,
        "desc": "被突出的指标序号（从 1 起）。",
        "publicKey": "focusIndex",
        "publicLabel": "重点指标序号",
        "description": "被突出的指标序号（从 1 起）。"
      },
      {
        "key": "showLead",
        "label": "引导文案",
        "type": "toggle",
        "default": true,
        "desc": "标题下方的一段引导说明。",
        "publicKey": "showLead",
        "publicLabel": "引导文案",
        "description": "标题下方的一段引导说明。"
      },
      {
        "key": "showMediaCaption",
        "label": "图注",
        "type": "toggle",
        "default": true,
        "desc": "图片区上方的装饰性图注。",
        "publicKey": "showMediaCaption",
        "publicLabel": "图注",
        "description": "图片区上方的装饰性图注。"
      },
      {
        "key": "accentColor",
        "label": "强调色",
        "type": "color",
        "default": "#efbe2e",
        "options": [
          "#d8402e",
          "#e2742c",
          "#efbe2e",
          "#3c9a52",
          "#4da0c6",
          "#2c44a0",
          "#7a3c90"
        ],
        "desc": "眉标与「色块」主题下文本卡的颜色。",
        "publicKey": "accentColor",
        "publicLabel": "强调色",
        "description": "眉标与「色块」主题下文本卡的颜色。"
      },
      {
        "key": "showConclusion",
        "label": "结论文案",
        "type": "toggle",
        "default": true,
        "desc": "底部的一句装饰性结论。",
        "publicKey": "showConclusion",
        "publicLabel": "结论文案",
        "description": "底部的一句装饰性结论。"
      },
      {
        "key": "showSheetLabel",
        "label": "页码标签",
        "type": "toggle",
        "default": true,
        "desc": "右上角的页码 / 章节标签。",
        "publicKey": "showSheetLabel",
        "publicLabel": "页码标签",
        "description": "右上角的页码 / 章节标签。"
      }
    ],
    "defaultProps": {
      "imageCount": 1,
      "imageSide": "right",
      "metricCount": 4,
      "cardTheme": "color",
      "focusEnabled": false,
      "focusIndex": 1,
      "showLead": true,
      "showMediaCaption": true,
      "accentColor": "#efbe2e",
      "showConclusion": true,
      "showSheetLabel": true,
      "copy": {
        "eyebrow": "ENTERPRISE SEARCH",
        "en": "ENTERPRISE SEARCH",
        "title": "知识入口机会",
        "sub": "企业搜索赛道",
        "sheet": "SEGMENT · 29 / 32",
        "lead": "企业搜索是较早形成明确付费场景的应用方向；接入内部知识后具备高频使用场景。",
        "metrics": [
          [
            "融资额",
            "38",
            "亿美元"
          ],
          [
            "事件数",
            "9",
            "笔"
          ],
          [
            "平均单笔",
            "4.2",
            "亿美元"
          ],
          [
            "付费客户中位数",
            "620",
            "家"
          ]
        ],
        "mediaCap": "赛道主视觉",
        "mediaUnit": "DROP IMAGE",
        "conclusion": "企业知识入口是 AI 应用的重要落地点。"
      }
    }
  },
  {
    "key": "theme05_page034",
    "themeKey": "theme05",
    "pageNumber": 34,
    "layout": "THEME05-034",
    "slot": "matrix",
    "label": "对照表 Matrix",
    "bgClass": "",
    "controls": [
      {
        "key": "rowCount",
        "label": "数据行数",
        "type": "slider",
        "default": 4,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "表格的数据行数量。",
        "publicKey": "rowCount",
        "publicLabel": "数据行数",
        "description": "表格的数据行数量。"
      },
      {
        "key": "showVerdict",
        "label": "判断列",
        "type": "toggle",
        "default": true,
        "desc": "是否显示末尾的「判断」标签列（关闭则为三列表）。",
        "publicKey": "showVerdict",
        "publicLabel": "判断列",
        "description": "是否显示末尾的「判断」标签列（关闭则为三列表）。"
      },
      {
        "key": "zebra",
        "label": "斑马纹",
        "type": "toggle",
        "default": false,
        "desc": "隔行底色，便于横向读取。",
        "publicKey": "zebra",
        "publicLabel": "斑马纹",
        "description": "隔行底色，便于横向读取。"
      },
      {
        "key": "focusEnabled",
        "label": "重点行",
        "type": "toggle",
        "default": true,
        "desc": "是否突出某一行。",
        "publicKey": "focusEnabled",
        "publicLabel": "重点行",
        "description": "是否突出某一行。"
      },
      {
        "key": "focusIndex",
        "label": "重点行序号",
        "type": "slider",
        "default": 1,
        "min": 1,
        "max": 4,
        "step": 1,
        "desc": "被突出的行序号（从 1 起）。",
        "publicKey": "focusIndex",
        "publicLabel": "重点行序号",
        "description": "被突出的行序号（从 1 起）。"
      },
      {
        "key": "showIntro",
        "label": "引导栏",
        "type": "toggle",
        "default": true,
        "desc": "表格上方的引导文案与维度说明。",
        "publicKey": "showIntro",
        "publicLabel": "引导栏",
        "description": "表格上方的引导文案与维度说明。"
      },
      {
        "key": "accentColor",
        "label": "强调色",
        "type": "color",
        "default": "#2c44a0",
        "options": [
          "#d8402e",
          "#e2742c",
          "#efbe2e",
          "#3c9a52",
          "#4da0c6",
          "#2c44a0",
          "#7a3c90"
        ],
        "desc": "眉标与重点行的强调色。",
        "publicKey": "accentColor",
        "publicLabel": "强调色",
        "description": "眉标与重点行的强调色。"
      },
      {
        "key": "showConclusion",
        "label": "结论文案",
        "type": "toggle",
        "default": true,
        "desc": "表格下方的一句装饰性结论。",
        "publicKey": "showConclusion",
        "publicLabel": "结论文案",
        "description": "表格下方的一句装饰性结论。"
      },
      {
        "key": "showSheetLabel",
        "label": "页码标签",
        "type": "toggle",
        "default": true,
        "desc": "右上角的页码 / 章节标签。",
        "publicKey": "showSheetLabel",
        "publicLabel": "页码标签",
        "description": "右上角的页码 / 章节标签。"
      }
    ],
    "defaultProps": {
      "rowCount": 4,
      "showVerdict": true,
      "zebra": false,
      "focusEnabled": true,
      "focusIndex": 1,
      "showIntro": true,
      "accentColor": "#2c44a0",
      "showConclusion": true,
      "showSheetLabel": true,
      "copy": {
        "eyebrow": "LEGAL AI",
        "title": "专业服务高客单价",
        "sub": "法律 AI 赛道",
        "sheet": "MATRIX · 30 / 32",
        "lead": "法律 AI 具备高客单价、强专业壁垒和明确效率提升空间。",
        "tag": "维度 × 模拟数据 × 代表场景 × 判断",
        "headers": [
          "维度",
          "模拟数据",
          "代表场景",
          "判断"
        ],
        "rows": [
          {
            "k": "合同审查",
            "sub": "Contract Review",
            "num": "46",
            "unit": "% 场景占比",
            "ex": "条款比对 · 风险标注",
            "chip": "高频",
            "c": "#d8402e"
          },
          {
            "k": "尽职调查",
            "sub": "Due Diligence",
            "num": "12",
            "unit": "亿美元",
            "ex": "文档归集 · 引用核验",
            "chip": "高值",
            "c": "#2c44a0"
          },
          {
            "k": "法律检索",
            "sub": "Legal Research",
            "num": "4.3",
            "unit": "亿美元/笔",
            "ex": "判例检索 · 摘要生成",
            "chip": "成熟",
            "c": "#3c9a52"
          },
          {
            "k": "合规问答",
            "sub": "Compliance Q&A",
            "num": "6",
            "unit": "笔事件",
            "ex": "政策解读 · 审计链路",
            "chip": "壁垒",
            "c": "#4da0c6"
          }
        ],
        "conclusion": "法律 AI 是垂直应用商业化样本。"
      }
    }
  },
  {
    "key": "theme05_page035",
    "themeKey": "theme05",
    "pageNumber": 35,
    "layout": "THEME05-035",
    "slot": "breakdown",
    "label": "子项拆分 Breakdown",
    "bgClass": "",
    "controls": [
      {
        "key": "itemCount",
        "label": "子项数量",
        "type": "slider",
        "default": 3,
        "min": 2,
        "max": 3,
        "step": 1,
        "desc": "子项拆分的横条数量。",
        "publicKey": "itemCount",
        "publicLabel": "子项数量",
        "description": "子项拆分的横条数量。"
      },
      {
        "key": "imageCount",
        "label": "图片槽数量",
        "type": "slider",
        "default": 0,
        "min": 0,
        "max": 3,
        "step": 1,
        "desc": "底部图片槽数量（0–3），按比例自适应；为 0 时隐藏整条图片带。",
        "publicKey": "imageCount",
        "publicLabel": "图片槽数量",
        "description": "底部图片槽数量（0–3），按比例自适应；为 0 时隐藏整条图片带。"
      },
      {
        "key": "sortDescending",
        "label": "按值降序",
        "type": "toggle",
        "default": true,
        "desc": "横条是否按数值由大到小排序。",
        "publicKey": "sortDescending",
        "publicLabel": "按值降序",
        "description": "横条是否按数值由大到小排序。"
      },
      {
        "key": "focusEnabled",
        "label": "重点子项",
        "type": "toggle",
        "default": true,
        "desc": "是否突出某一个子项。",
        "publicKey": "focusEnabled",
        "publicLabel": "重点子项",
        "description": "是否突出某一个子项。"
      },
      {
        "key": "focusIndex",
        "label": "重点子项序号",
        "type": "slider",
        "default": 1,
        "min": 1,
        "max": 3,
        "step": 1,
        "desc": "被突出的子项序号（按原始顺序，从 1 起）。",
        "publicKey": "focusIndex",
        "publicLabel": "重点子项序号",
        "description": "被突出的子项序号（按原始顺序，从 1 起）。"
      },
      {
        "key": "colorMode",
        "label": "配色方式",
        "type": "radio",
        "default": "category",
        "options": [
          {
            "value": "category",
            "label": "按类别"
          },
          {
            "value": "accent",
            "label": "强调色"
          },
          {
            "value": "mono",
            "label": "单色"
          }
        ],
        "desc": "横条配色：按类别 / 统一强调色 / 单色。",
        "publicKey": "colorMode",
        "publicLabel": "配色方式",
        "description": "横条配色：按类别 / 统一强调色 / 单色。"
      },
      {
        "key": "cardTheme",
        "label": "主体卡主题",
        "type": "radio",
        "default": "color",
        "options": [
          {
            "value": "color",
            "label": "色块"
          },
          {
            "value": "dark",
            "label": "深色"
          },
          {
            "value": "paper",
            "label": "纸色"
          }
        ],
        "desc": "主体卡背景：强调色块 / 深色 / 纸色。",
        "publicKey": "cardTheme",
        "publicLabel": "主体卡主题",
        "description": "主体卡背景：强调色块 / 深色 / 纸色。"
      },
      {
        "key": "showTotal",
        "label": "合计区",
        "type": "toggle",
        "default": true,
        "desc": "主体卡底部的分类合计数值。",
        "publicKey": "showValueLabels",
        "publicLabel": "合计区",
        "description": "主体卡底部的分类合计数值。"
      },
      {
        "key": "accentColor",
        "label": "强调色",
        "type": "color",
        "default": "#2c44a0",
        "options": [
          "#d8402e",
          "#e2742c",
          "#efbe2e",
          "#3c9a52",
          "#4da0c6",
          "#2c44a0",
          "#7a3c90"
        ],
        "desc": "眉标 /「色块」主题主体卡 / 重点项的强调色。",
        "publicKey": "accentColor",
        "publicLabel": "强调色",
        "description": "眉标 /「色块」主题主体卡 / 重点项的强调色。"
      },
      {
        "key": "showConclusion",
        "label": "结论文案",
        "type": "toggle",
        "default": true,
        "desc": "底部的一句装饰性结论。",
        "publicKey": "showConclusion",
        "publicLabel": "结论文案",
        "description": "底部的一句装饰性结论。"
      },
      {
        "key": "showSheetLabel",
        "label": "页码标签",
        "type": "toggle",
        "default": true,
        "desc": "右上角的页码 / 章节标签。",
        "publicKey": "showSheetLabel",
        "publicLabel": "页码标签",
        "description": "右上角的页码 / 章节标签。"
      }
    ],
    "defaultProps": {
      "itemCount": 3,
      "imageCount": 0,
      "sortDescending": true,
      "focusEnabled": true,
      "focusIndex": 1,
      "colorMode": "category",
      "cardTheme": "color",
      "showTotal": true,
      "accentColor": "#2c44a0",
      "showConclusion": true,
      "showSheetLabel": true,
      "copy": {
        "eyebrow": "HEALTHCARE AI",
        "en": "HEALTHCARE AI",
        "title": "慢变量高壁垒",
        "sub": "医疗 AI 赛道",
        "sheet": "BREAKDOWN · 31 / 32",
        "totalK": "赛道融资额",
        "totalV": "34",
        "totalUnit": "亿美元 · 8 笔",
        "unit": "亿美元",
        "items": [
          {
            "name": "药物发现",
            "v": 14,
            "c": "#2c44a0"
          },
          {
            "name": "影像诊断",
            "v": 11,
            "c": "#d8402e"
          },
          {
            "name": "临床文书",
            "v": 9,
            "c": "#3c9a52"
          }
        ],
        "mediaCap": "赛道图示",
        "mediaUnit": "DROP IMAGES",
        "conclusion": "慢场景不代表低价值。"
      }
    }
  },
  {
    "key": "theme05_page036",
    "themeKey": "theme05",
    "pageNumber": 36,
    "layout": "THEME05-036",
    "slot": "scene",
    "label": "场景占比 Scene",
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
            "label": "环形"
          },
          {
            "value": "pie",
            "label": "饼图"
          }
        ],
        "desc": "占比图呈现方式：环形（中心显示重点）/ 饼图。",
        "publicKey": "chartType",
        "publicLabel": "图表类型",
        "description": "占比图呈现方式：环形（中心显示重点）/ 饼图。"
      },
      {
        "key": "sceneCount",
        "label": "场景数量",
        "type": "slider",
        "default": 4,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "参与占比拆分的场景数量。",
        "publicKey": "contentItemCount",
        "publicLabel": "场景数量",
        "description": "参与占比拆分的场景数量。"
      },
      {
        "key": "imageCount",
        "label": "图片槽数量",
        "type": "slider",
        "default": 0,
        "min": 0,
        "max": 1,
        "step": 1,
        "desc": "环图下方的图片槽（0–1），按比例自适应；为 0 时隐藏。",
        "publicKey": "imageCount",
        "publicLabel": "图片槽数量",
        "description": "环图下方的图片槽（0–1），按比例自适应；为 0 时隐藏。"
      },
      {
        "key": "focusEnabled",
        "label": "重点场景",
        "type": "toggle",
        "default": true,
        "desc": "是否突出某一个场景（环形中心显示该项）。",
        "publicKey": "focusEnabled",
        "publicLabel": "重点场景",
        "description": "是否突出某一个场景（环形中心显示该项）。"
      },
      {
        "key": "focusIndex",
        "label": "重点场景序号",
        "type": "slider",
        "default": 1,
        "min": 1,
        "max": 4,
        "step": 1,
        "desc": "被突出的场景序号（从 1 起）。",
        "publicKey": "focusIndex",
        "publicLabel": "重点场景序号",
        "description": "被突出的场景序号（从 1 起）。"
      },
      {
        "key": "showLegend",
        "label": "图例列表",
        "type": "toggle",
        "default": true,
        "desc": "右侧带占比的场景图例。",
        "publicKey": "showLegend",
        "publicLabel": "图例列表",
        "description": "右侧带占比的场景图例。"
      },
      {
        "key": "accentColor",
        "label": "强调色",
        "type": "color",
        "default": "#2c44a0",
        "options": [
          "#d8402e",
          "#e2742c",
          "#efbe2e",
          "#3c9a52",
          "#4da0c6",
          "#2c44a0",
          "#7a3c90"
        ],
        "desc": "眉标与环形中心数字的强调色。",
        "publicKey": "accentColor",
        "publicLabel": "强调色",
        "description": "眉标与环形中心数字的强调色。"
      },
      {
        "key": "showConclusion",
        "label": "结论文案",
        "type": "toggle",
        "default": true,
        "desc": "右下角的一句装饰性结论。",
        "publicKey": "showConclusion",
        "publicLabel": "结论文案",
        "description": "右下角的一句装饰性结论。"
      },
      {
        "key": "showSheetLabel",
        "label": "页码标签",
        "type": "toggle",
        "default": true,
        "desc": "右上角的页码 / 章节标签。",
        "publicKey": "showSheetLabel",
        "publicLabel": "页码标签",
        "description": "右上角的页码 / 章节标签。"
      }
    ],
    "defaultProps": {
      "chartType": "donut",
      "sceneCount": 4,
      "imageCount": 0,
      "focusEnabled": true,
      "focusIndex": 1,
      "showLegend": true,
      "accentColor": "#2c44a0",
      "showConclusion": true,
      "showSheetLabel": true,
      "copy": {
        "eyebrow": "FINANCE AI",
        "en": "FINANCE AI",
        "title": "投研、风控与合规",
        "sub": "金融 AI 赛道",
        "sheet": "SCENE · 32 / 32",
        "unit": "SCENE SHARE",
        "scenes": [
          {
            "name": "投研",
            "v": 31,
            "c": "#2c44a0"
          },
          {
            "name": "合规",
            "v": 28,
            "c": "#d8402e"
          },
          {
            "name": "风控",
            "v": 24,
            "c": "#3c9a52"
          },
          {
            "name": "客服",
            "v": 17,
            "c": "#e2742c"
          }
        ],
        "mediaUnit": "DROP IMAGE",
        "conclusion": "高价值行业需要更强可信度。"
      }
    }
  },
  {
    "key": "theme05_page037",
    "themeKey": "theme05",
    "pageNumber": 37,
    "layout": "THEME05-037",
    "slot": "statement",
    "label": "金句 Statement",
    "bgClass": "",
    "controls": [
      {
        "key": "theme",
        "label": "背景主题",
        "type": "radio",
        "default": "dark",
        "options": [
          {
            "value": "paper",
            "label": "纸色"
          },
          {
            "value": "dark",
            "label": "深色"
          },
          {
            "value": "color",
            "label": "色块"
          }
        ],
        "desc": "页面背景：纸色 / 深色 / 整页强调色块。",
        "publicKey": "theme",
        "publicLabel": "背景主题",
        "description": "页面背景：纸色 / 深色 / 整页强调色块。"
      },
      {
        "key": "bgColor",
        "label": "色块背景",
        "type": "color",
        "default": "#2c44a0",
        "options": [
          "#d8402e",
          "#e2742c",
          "#efbe2e",
          "#3c9a52",
          "#4da0c6",
          "#2c44a0",
          "#7a3c90"
        ],
        "desc": "「色块」主题下的整页背景色（其它主题忽略）。",
        "publicKey": "bgColor",
        "publicLabel": "色块背景",
        "description": "「色块」主题下的整页背景色（其它主题忽略）。"
      },
      {
        "key": "align",
        "label": "对齐方式",
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
        "desc": "金句与辅助信息的对齐方式。",
        "publicKey": "align",
        "publicLabel": "对齐方式",
        "description": "金句与辅助信息的对齐方式。"
      },
      {
        "key": "showIndex",
        "label": "装饰大号数字",
        "type": "toggle",
        "default": true,
        "desc": "背景中的超大半透明序号（装饰）。",
        "publicKey": "showIndex",
        "publicLabel": "装饰大号数字",
        "description": "背景中的超大半透明序号（装饰）。"
      },
      {
        "key": "emphasis",
        "label": "重点词高亮",
        "type": "toggle",
        "default": true,
        "desc": "是否用强调色高亮金句中的关键词。",
        "publicKey": "emphasis",
        "publicLabel": "重点词高亮",
        "description": "是否用强调色高亮金句中的关键词。"
      },
      {
        "key": "keywordCount",
        "label": "关键词数量",
        "type": "slider",
        "default": 3,
        "min": 0,
        "max": 3,
        "step": 1,
        "desc": "底部装饰关键词标签数量（0 隐藏整行）。",
        "publicKey": "keywordCount",
        "publicLabel": "关键词数量",
        "description": "底部装饰关键词标签数量（0 隐藏整行）。"
      },
      {
        "key": "showSub",
        "label": "辅助说明",
        "type": "toggle",
        "default": true,
        "desc": "金句下方的一行辅助说明文字。",
        "publicKey": "showSub",
        "publicLabel": "辅助说明",
        "description": "金句下方的一行辅助说明文字。"
      },
      {
        "key": "accentColor",
        "label": "强调色",
        "type": "color",
        "default": "#efbe2e",
        "options": [
          "#d8402e",
          "#e2742c",
          "#efbe2e",
          "#3c9a52",
          "#4da0c6",
          "#2c44a0",
          "#7a3c90"
        ],
        "desc": "眉标 / 重点词 / 装饰数字的强调色。",
        "publicKey": "accentColor",
        "publicLabel": "强调色",
        "description": "眉标 / 重点词 / 装饰数字的强调色。"
      },
      {
        "key": "showColorBand",
        "label": "色谱条",
        "type": "toggle",
        "default": true,
        "desc": "右下角的小色谱条带。",
        "publicKey": "showColorBand",
        "publicLabel": "色谱条",
        "description": "右下角的小色谱条带。"
      },
      {
        "key": "showSheetLabel",
        "label": "页码标签",
        "type": "toggle",
        "default": true,
        "desc": "右上角的页码 / 章节标签。",
        "publicKey": "showSheetLabel",
        "publicLabel": "页码标签",
        "description": "右上角的页码 / 章节标签。"
      }
    ],
    "defaultProps": {
      "theme": "dark",
      "bgColor": "#2c44a0",
      "align": "left",
      "showIndex": true,
      "emphasis": true,
      "keywordCount": 3,
      "showSub": true,
      "accentColor": "#efbe2e",
      "showColorBand": true,
      "showSheetLabel": true,
      "copy": {
        "kicker": "DEVELOPER TOOLS · 开发者工具赛道",
        "index": "33",
        "sheet": "STATEMENT · 33 / 80",
        "quote": {
          "key": null,
          "ref": null,
          "props": {
            "children": [
              "研发效率，是企业",
              {
                "type": "br",
                "key": null,
                "ref": null,
                "props": {},
                "_owner": null,
                "_store": {}
              },
              {
                "type": "span",
                "key": null,
                "ref": null,
                "props": {
                  "className": "hl",
                  "children": "最直接"
                },
                "_owner": null,
                "_store": {}
              },
              "的 AI ",
              {
                "type": "span",
                "key": null,
                "ref": null,
                "props": {
                  "className": "mute",
                  "children": "预算入口"
                },
                "_owner": null,
                "_store": {}
              },
              "之一。"
            ]
          },
          "_owner": null,
          "_store": {}
        },
        "sub": "效率工具最贴近开发团队的日常，预算决策链路短、落地周期快。",
        "keywords": [
          "一句话判断",
          "信息密度 · 低",
          "阶段性收束"
        ]
      }
    }
  },
  {
    "key": "theme05_page038",
    "themeKey": "theme05",
    "pageNumber": 38,
    "layout": "THEME05-038",
    "slot": "flow",
    "label": "流程增长 Flow",
    "bgClass": "",
    "controls": [
      {
        "key": "nodeCount",
        "label": "流程节点数量",
        "type": "slider",
        "default": 4,
        "min": 3,
        "max": 5,
        "step": 1,
        "desc": "主视觉管线的阶段（节点）数量。",
        "publicKey": "nodeCount",
        "publicLabel": "流程节点数量",
        "description": "主视觉管线的阶段（节点）数量。"
      },
      {
        "key": "focusEnabled",
        "label": "重点节点",
        "type": "toggle",
        "default": true,
        "desc": "是否突出某一阶段（其余阶段淡出）。",
        "publicKey": "focusEnabled",
        "publicLabel": "重点节点",
        "description": "是否突出某一阶段（其余阶段淡出）。"
      },
      {
        "key": "focusIndex",
        "label": "重点节点序号",
        "type": "slider",
        "default": 4,
        "min": 1,
        "max": 5,
        "step": 1,
        "desc": "被突出的阶段序号（从 1 起；超出节点数自动收敛到末段）。",
        "publicKey": "focusIndex",
        "publicLabel": "重点节点序号",
        "description": "被突出的阶段序号（从 1 起；超出节点数自动收敛到末段）。"
      },
      {
        "key": "showGrowth",
        "label": "增长指标面板",
        "type": "toggle",
        "default": true,
        "desc": "右下深色面板：巨号增长数字 + 迷你图表。",
        "publicKey": "showGrowth",
        "publicLabel": "增长指标面板",
        "description": "右下深色面板：巨号增长数字 + 迷你图表。"
      },
      {
        "key": "chartType",
        "label": "图表类型",
        "type": "radio",
        "default": "bar",
        "options": [
          {
            "value": "bar",
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
        "desc": "增长面板内迷你图表的呈现方式。",
        "publicKey": "chartType",
        "publicLabel": "图表类型",
        "description": "增长面板内迷你图表的呈现方式。"
      },
      {
        "key": "pointCount",
        "label": "数据点数量",
        "type": "slider",
        "default": 3,
        "min": 2,
        "max": 3,
        "step": 1,
        "desc": "增长迷你图表的数据点（时间截面）数量。",
        "publicKey": "pointCount",
        "publicLabel": "数据点数量",
        "description": "增长迷你图表的数据点（时间截面）数量。"
      },
      {
        "key": "metricCount",
        "label": "指标行数",
        "type": "slider",
        "default": 3,
        "min": 2,
        "max": 3,
        "step": 1,
        "desc": "右上指标卡的指标行数。",
        "publicKey": "metricCount",
        "publicLabel": "指标行数",
        "description": "右上指标卡的指标行数。"
      },
      {
        "key": "showFlowCaption",
        "label": "管线图注",
        "type": "toggle",
        "default": true,
        "desc": "主视觉上方的装饰性图注。",
        "publicKey": "showFlowCaption",
        "publicLabel": "管线图注",
        "description": "主视觉上方的装饰性图注。"
      },
      {
        "key": "accentColor",
        "label": "强调色",
        "type": "color",
        "default": "#3c9a52",
        "options": [
          "#d8402e",
          "#e2742c",
          "#efbe2e",
          "#3c9a52",
          "#4da0c6",
          "#2c44a0",
          "#7a3c90"
        ],
        "desc": "眉标 / 增长数字 / 指标卡的强调色。",
        "publicKey": "accentColor",
        "publicLabel": "强调色",
        "description": "眉标 / 增长数字 / 指标卡的强调色。"
      },
      {
        "key": "showConclusion",
        "label": "结论文案",
        "type": "toggle",
        "default": true,
        "desc": "底部的一句装饰性结论。",
        "publicKey": "showConclusion",
        "publicLabel": "结论文案",
        "description": "底部的一句装饰性结论。"
      },
      {
        "key": "showSheetLabel",
        "label": "页码标签",
        "type": "toggle",
        "default": true,
        "desc": "右上角的页码 / 章节标签。",
        "publicKey": "showSheetLabel",
        "publicLabel": "页码标签",
        "description": "右上角的页码 / 章节标签。"
      }
    ],
    "defaultProps": {
      "nodeCount": 4,
      "focusEnabled": true,
      "focusIndex": 4,
      "showGrowth": true,
      "chartType": "bar",
      "pointCount": 3,
      "metricCount": 3,
      "showFlowCaption": true,
      "accentColor": "#3c9a52",
      "showConclusion": true,
      "showSheetLabel": true,
      "copy": {
        "eyebrow": "DATA INFRASTRUCTURE",
        "title": "企业 AI 底座",
        "sheet": "FLOW · 34 / 80",
        "flowCap": "数据流转管线",
        "flowUnit": "INGEST → SERVE",
        "stages": [
          {
            "en": "INGEST",
            "zh": "数据采集",
            "note": "多源接入",
            "color": "#2c44a0"
          },
          {
            "en": "CLEAN",
            "zh": "清洗治理",
            "note": "质量校验",
            "color": "#4da0c6"
          },
          {
            "en": "INDEX",
            "zh": "向量索引",
            "note": "RAG 检索",
            "color": "#3c9a52"
          },
          {
            "en": "SERVE",
            "zh": "服务编排",
            "note": "应用调用",
            "color": "#d8402e"
          },
          {
            "en": "GOVERN",
            "zh": "监控治理",
            "note": "权限审计",
            "color": "#7a3c90"
          }
        ],
        "metrics": [
          [
            "融资额",
            "61",
            "亿美元"
          ],
          [
            "事件数",
            "12",
            "笔"
          ],
          [
            "平均单笔",
            "5.1",
            "亿美元"
          ]
        ],
        "growthValue": "+47",
        "growthUnit": "%",
        "growthLabel": "企业客户同比增长",
        "growthSeries": [
          {
            "axis": "Q1",
            "v": 100
          },
          {
            "axis": "Q2",
            "v": 126
          },
          {
            "axis": "Q3",
            "v": 147
          }
        ],
        "conclusion": "没有数据底座，AI 应用很难稳定落地。"
      }
    }
  },
  {
    "key": "theme05_page039",
    "themeKey": "theme05",
    "pageNumber": 39,
    "layout": "THEME05-039",
    "slot": "diagram",
    "label": "图示规格 Diagram",
    "bgClass": "",
    "controls": [
      {
        "key": "imageCount",
        "label": "图片槽数量",
        "type": "slider",
        "default": 1,
        "min": 0,
        "max": 2,
        "step": 1,
        "desc": "主视觉图片槽数量（0–2）；按各图比例自适应。为 0 时规格卡铺满整幅、指标转两列。",
        "publicKey": "imageCount",
        "publicLabel": "图片槽数量",
        "description": "主视觉图片槽数量（0–2）；按各图比例自适应。为 0 时规格卡铺满整幅、指标转两列。"
      },
      {
        "key": "imageSide",
        "label": "图片位置",
        "type": "radio",
        "default": "left",
        "options": [
          {
            "value": "left",
            "label": "左侧"
          },
          {
            "value": "right",
            "label": "右侧"
          }
        ],
        "desc": "图片相对规格卡的位置（有图片时生效）。",
        "publicKey": "imageSide",
        "publicLabel": "图片位置",
        "description": "图片相对规格卡的位置（有图片时生效）。"
      },
      {
        "key": "metricCount",
        "label": "指标行数",
        "type": "slider",
        "default": 4,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "规格卡内的指标行数。",
        "publicKey": "metricCount",
        "publicLabel": "指标行数",
        "description": "规格卡内的指标行数。"
      },
      {
        "key": "cardTheme",
        "label": "规格卡主题",
        "type": "radio",
        "default": "dark",
        "options": [
          {
            "value": "color",
            "label": "色块"
          },
          {
            "value": "dark",
            "label": "深色"
          },
          {
            "value": "paper",
            "label": "纸色"
          }
        ],
        "desc": "规格卡背景：强调色块 / 深色 / 纸色。",
        "publicKey": "cardTheme",
        "publicLabel": "规格卡主题",
        "description": "规格卡背景：强调色块 / 深色 / 纸色。"
      },
      {
        "key": "showLead",
        "label": "引导文案",
        "type": "toggle",
        "default": true,
        "desc": "标题下方的一段引导说明。",
        "publicKey": "showLead",
        "publicLabel": "引导文案",
        "description": "标题下方的一段引导说明。"
      },
      {
        "key": "showMediaCaption",
        "label": "图注",
        "type": "toggle",
        "default": true,
        "desc": "图片区上方的装饰性图注。",
        "publicKey": "showMediaCaption",
        "publicLabel": "图注",
        "description": "图片区上方的装饰性图注。"
      },
      {
        "key": "accentColor",
        "label": "强调色",
        "type": "color",
        "default": "#4da0c6",
        "options": [
          "#d8402e",
          "#e2742c",
          "#efbe2e",
          "#3c9a52",
          "#4da0c6",
          "#2c44a0",
          "#7a3c90"
        ],
        "desc": "眉标 / 卡内强调条 /「色块」主题下规格卡的颜色。",
        "publicKey": "accentColor",
        "publicLabel": "强调色",
        "description": "眉标 / 卡内强调条 /「色块」主题下规格卡的颜色。"
      },
      {
        "key": "showConclusion",
        "label": "结论文案",
        "type": "toggle",
        "default": true,
        "desc": "底部的一句装饰性结论。",
        "publicKey": "showConclusion",
        "publicLabel": "结论文案",
        "description": "底部的一句装饰性结论。"
      },
      {
        "key": "showSheetLabel",
        "label": "页码标签",
        "type": "toggle",
        "default": true,
        "desc": "右上角的页码 / 章节标签。",
        "publicKey": "showSheetLabel",
        "publicLabel": "页码标签",
        "description": "右上角的页码 / 章节标签。"
      }
    ],
    "defaultProps": {
      "imageCount": 1,
      "imageSide": "left",
      "metricCount": 4,
      "cardTheme": "dark",
      "showLead": true,
      "showMediaCaption": true,
      "accentColor": "#4da0c6",
      "showConclusion": true,
      "showSheetLabel": true,
      "copy": {
        "eyebrow": "VECTOR DATABASE",
        "title": "RAG 基础组件",
        "sheet": "DIAGRAM · 35 / 80",
        "en": "VECTOR DATABASE",
        "zh": "RAG 基础组件",
        "lead": "向量数据库从概念热度，进入企业部署的竞争阶段。",
        "metrics": [
          [
            "融资额",
            "18",
            "亿美元"
          ],
          [
            "事件数",
            "5",
            "笔"
          ],
          [
            "平均单笔",
            "3.6",
            "亿美元"
          ],
          [
            "付费客户中位数",
            "620",
            "家"
          ]
        ],
        "mediaCap": "RAG 架构图",
        "mediaUnit": "DROP DIAGRAM",
        "conclusion": "基础组件的胜负，取决于企业级可靠性。"
      }
    }
  },
  {
    "key": "theme05_page040",
    "themeKey": "theme05",
    "pageNumber": 40,
    "layout": "THEME05-040",
    "slot": "mix",
    "label": "构成占比 Mix",
    "bgClass": "",
    "controls": [
      {
        "key": "imageCount",
        "label": "图片槽数量",
        "type": "slider",
        "default": 1,
        "min": 0,
        "max": 2,
        "step": 1,
        "desc": "主视觉图片槽数量（0–2）；按各图比例自适应。为 0 时卡片铺满整幅。",
        "publicKey": "imageCount",
        "publicLabel": "图片槽数量",
        "description": "主视觉图片槽数量（0–2）；按各图比例自适应。为 0 时卡片铺满整幅。"
      },
      {
        "key": "imageSide",
        "label": "图片位置",
        "type": "radio",
        "default": "right",
        "options": [
          {
            "value": "right",
            "label": "右侧"
          },
          {
            "value": "left",
            "label": "左侧"
          }
        ],
        "desc": "图片相对卡片的位置（有图片时生效）。",
        "publicKey": "imageSide",
        "publicLabel": "图片位置",
        "description": "图片相对卡片的位置（有图片时生效）。"
      },
      {
        "key": "barCount",
        "label": "占比条数量",
        "type": "slider",
        "default": 3,
        "min": 2,
        "max": 3,
        "step": 1,
        "desc": "构成区横向占比条的数量。",
        "publicKey": "barCount",
        "publicLabel": "占比条数量",
        "description": "构成区横向占比条的数量。"
      },
      {
        "key": "sortDescending",
        "label": "按占比降序",
        "type": "toggle",
        "default": true,
        "desc": "占比条是否按数值由大到小排序。",
        "publicKey": "sortDescending",
        "publicLabel": "按占比降序",
        "description": "占比条是否按数值由大到小排序。"
      },
      {
        "key": "colorMode",
        "label": "占比条配色",
        "type": "radio",
        "default": "category",
        "options": [
          {
            "value": "category",
            "label": "按类别"
          },
          {
            "value": "accent",
            "label": "强调色"
          },
          {
            "value": "mono",
            "label": "单色"
          }
        ],
        "desc": "占比条的配色方式：按类别 / 统一强调色 / 单色阶。",
        "publicKey": "colorMode",
        "publicLabel": "占比条配色",
        "description": "占比条的配色方式：按类别 / 统一强调色 / 单色阶。"
      },
      {
        "key": "focusEnabled",
        "label": "重点占比条",
        "type": "toggle",
        "default": true,
        "desc": "是否突出某一条占比。",
        "publicKey": "focusEnabled",
        "publicLabel": "重点占比条",
        "description": "是否突出某一条占比。"
      },
      {
        "key": "focusIndex",
        "label": "重点条序号",
        "type": "slider",
        "default": 1,
        "min": 1,
        "max": 3,
        "step": 1,
        "desc": "被突出的占比条序号（按当前排序后顺序）。",
        "publicKey": "focusIndex",
        "publicLabel": "重点条序号",
        "description": "被突出的占比条序号（按当前排序后顺序）。"
      },
      {
        "key": "showMetrics",
        "label": "指标对",
        "type": "toggle",
        "default": true,
        "desc": "卡片上半部分的一对关键指标。",
        "publicKey": "showMetrics",
        "publicLabel": "指标对",
        "description": "卡片上半部分的一对关键指标。"
      },
      {
        "key": "accentColor",
        "label": "强调色",
        "type": "color",
        "default": "#e2742c",
        "options": [
          "#d8402e",
          "#e2742c",
          "#efbe2e",
          "#3c9a52",
          "#4da0c6",
          "#2c44a0",
          "#7a3c90"
        ],
        "desc": "眉标 / 重点条 /「强调色」配色模式下占比条的颜色。",
        "publicKey": "accentColor",
        "publicLabel": "强调色",
        "description": "眉标 / 重点条 /「强调色」配色模式下占比条的颜色。"
      },
      {
        "key": "showConclusion",
        "label": "结论文案",
        "type": "toggle",
        "default": true,
        "desc": "底部的一句装饰性结论。",
        "publicKey": "showConclusion",
        "publicLabel": "结论文案",
        "description": "底部的一句装饰性结论。"
      },
      {
        "key": "showSheetLabel",
        "label": "页码标签",
        "type": "toggle",
        "default": true,
        "desc": "右上角的页码 / 章节标签。",
        "publicKey": "showSheetLabel",
        "publicLabel": "页码标签",
        "description": "右上角的页码 / 章节标签。"
      }
    ],
    "defaultProps": {
      "imageCount": 1,
      "imageSide": "right",
      "barCount": 3,
      "sortDescending": true,
      "colorMode": "category",
      "focusEnabled": true,
      "focusIndex": 1,
      "showMetrics": true,
      "accentColor": "#e2742c",
      "showConclusion": true,
      "showSheetLabel": true,
      "copy": {
        "eyebrow": "DATA LABELING",
        "title": "高质量数据供给",
        "sheet": "MIX · 36 / 80",
        "en": "DATA LABELING",
        "zh": "数据标注与合成数据",
        "metrics": [
          [
            "融资额",
            "33",
            "亿美元"
          ],
          [
            "事件数",
            "6",
            "笔"
          ]
        ],
        "splitCap": "训练数据构成",
        "splitUnit": "DATA MIX",
        "bars": [
          {
            "name": "合成数据",
            "v": 42,
            "color": "#d8402e"
          },
          {
            "name": "人类反馈数据",
            "v": 35,
            "color": "#3c9a52"
          },
          {
            "name": "真实采集",
            "v": 23,
            "color": "#2c44a0"
          }
        ],
        "conclusion": "数据越稀缺，数据基础设施越有价值。"
      }
    }
  },
  {
    "key": "theme05_page041",
    "themeKey": "theme05",
    "pageNumber": 41,
    "layout": "THEME05-041",
    "slot": "capacity",
    "label": "容量栅格 Capacity",
    "bgClass": "",
    "controls": [
      {
        "key": "unitCount",
        "label": "容量单元数",
        "type": "slider",
        "default": 32,
        "min": 16,
        "max": 48,
        "step": 1,
        "desc": "占用栅格的单元（算力节点）总数。",
        "publicKey": "unitCount",
        "publicLabel": "容量单元数",
        "description": "占用栅格的单元（算力节点）总数。"
      },
      {
        "key": "columns",
        "label": "栅格列数",
        "type": "slider",
        "default": 8,
        "min": 4,
        "max": 10,
        "step": 1,
        "desc": "占用栅格的列数。",
        "publicKey": "columns",
        "publicLabel": "栅格列数",
        "description": "占用栅格的列数。"
      },
      {
        "key": "fillPercent",
        "label": "占用率(%)",
        "type": "slider",
        "default": 58,
        "min": 30,
        "max": 95,
        "step": 1,
        "desc": "被占用单元的比例（同时作为占用率读数）。",
        "publicKey": "fillPercent",
        "publicLabel": "占用率(%)",
        "description": "被占用单元的比例（同时作为占用率读数）。"
      },
      {
        "key": "showUtil",
        "label": "占用率读数",
        "type": "toggle",
        "default": true,
        "desc": "栅格上方的巨号占用率百分比。",
        "publicKey": "showUtil",
        "publicLabel": "占用率读数",
        "description": "栅格上方的巨号占用率百分比。"
      },
      {
        "key": "chartType",
        "label": "资源构成图表",
        "type": "radio",
        "default": "bar",
        "options": [
          {
            "value": "bar",
            "label": "条形"
          },
          {
            "value": "stack",
            "label": "堆叠"
          }
        ],
        "desc": "资源构成的呈现方式：逐项条形 / 单条堆叠。",
        "publicKey": "chartType",
        "publicLabel": "资源构成图表",
        "description": "资源构成的呈现方式：逐项条形 / 单条堆叠。"
      },
      {
        "key": "shareCount",
        "label": "资源构成项数",
        "type": "slider",
        "default": 4,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "资源构成（部分-整体）的分项数量。",
        "publicKey": "shareCount",
        "publicLabel": "资源构成项数",
        "description": "资源构成（部分-整体）的分项数量。"
      },
      {
        "key": "focusEnabled",
        "label": "重点构成项",
        "type": "toggle",
        "default": true,
        "desc": "是否突出某一资源构成分项。",
        "publicKey": "focusEnabled",
        "publicLabel": "重点构成项",
        "description": "是否突出某一资源构成分项。"
      },
      {
        "key": "focusIndex",
        "label": "重点构成序号",
        "type": "slider",
        "default": 1,
        "min": 1,
        "max": 4,
        "step": 1,
        "desc": "被突出的资源构成分项序号（从 1 起）。",
        "publicKey": "focusIndex",
        "publicLabel": "重点构成序号",
        "description": "被突出的资源构成分项序号（从 1 起）。"
      },
      {
        "key": "showShare",
        "label": "资源构成块",
        "type": "toggle",
        "default": true,
        "desc": "右下的资源构成（部分-整体）模块。",
        "publicKey": "showShare",
        "publicLabel": "资源构成块",
        "description": "右下的资源构成（部分-整体）模块。"
      },
      {
        "key": "metricCount",
        "label": "指标行数",
        "type": "slider",
        "default": 4,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "右上指标卡的指标行数。",
        "publicKey": "metricCount",
        "publicLabel": "指标行数",
        "description": "右上指标卡的指标行数。"
      },
      {
        "key": "accentColor",
        "label": "强调色",
        "type": "color",
        "default": "#d8402e",
        "options": [
          "#d8402e",
          "#e2742c",
          "#efbe2e",
          "#3c9a52",
          "#4da0c6",
          "#2c44a0",
          "#7a3c90"
        ],
        "desc": "眉标 / 占用单元 / 指标卡的强调色。",
        "publicKey": "accentColor",
        "publicLabel": "强调色",
        "description": "眉标 / 占用单元 / 指标卡的强调色。"
      },
      {
        "key": "showConclusion",
        "label": "结论文案",
        "type": "toggle",
        "default": true,
        "desc": "底部的一句装饰性结论。",
        "publicKey": "showConclusion",
        "publicLabel": "结论文案",
        "description": "底部的一句装饰性结论。"
      },
      {
        "key": "showSheetLabel",
        "label": "页码标签",
        "type": "toggle",
        "default": true,
        "desc": "右上角的页码 / 章节标签。",
        "publicKey": "showSheetLabel",
        "publicLabel": "页码标签",
        "description": "右上角的页码 / 章节标签。"
      }
    ],
    "defaultProps": {
      "unitCount": 32,
      "columns": 8,
      "fillPercent": 58,
      "showUtil": true,
      "chartType": "bar",
      "shareCount": 4,
      "focusEnabled": true,
      "focusIndex": 1,
      "showShare": true,
      "metricCount": 4,
      "accentColor": "#d8402e",
      "showConclusion": true,
      "showSheetLabel": true,
      "copy": {
        "eyebrow": "GPU CLOUD",
        "title": "算力供给稀缺",
        "sheet": "CHART · 37 / 80",
        "gridCap": "算力集群占用示意",
        "gridUnit": "CLUSTER LOAD",
        "utilLabel": "高端算力占用率",
        "metrics": [
          [
            "融资额",
            "64",
            "亿美元"
          ],
          [
            "事件数",
            "9",
            "笔"
          ],
          [
            "平均单笔",
            "7.1",
            "亿美元"
          ],
          [
            "H100/H200 占比",
            "58",
            "%"
          ]
        ],
        "shareCap": "资源构成",
        "shareUnit": "BY CHIP",
        "shares": [
          {
            "k": "H100",
            "v": 38,
            "c": "#d8402e"
          },
          {
            "k": "H200",
            "v": 20,
            "c": "#e2742c"
          },
          {
            "k": "A100",
            "v": 27,
            "c": "#4da0c6"
          },
          {
            "k": "其他",
            "v": 15,
            "c": "#7a3c90"
          }
        ],
        "conclusion": "算力是 AI 时代最直接的硬资源。"
      }
    }
  },
  {
    "key": "theme05_page042",
    "themeKey": "theme05",
    "pageNumber": 42,
    "layout": "THEME05-042",
    "slot": "ledger",
    "label": "结构表 Ledger",
    "bgClass": "",
    "controls": [
      {
        "key": "rowCount",
        "label": "数据行数",
        "type": "slider",
        "default": 3,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "表格的数据行数量。",
        "publicKey": "rowCount",
        "publicLabel": "数据行数",
        "description": "表格的数据行数量。"
      },
      {
        "key": "showBar",
        "label": "内联占比条",
        "type": "toggle",
        "default": true,
        "desc": "「资金占比」列内的水平占比条（数据条表）。",
        "publicKey": "showBar",
        "publicLabel": "内联占比条",
        "description": "「资金占比」列内的水平占比条（数据条表）。"
      },
      {
        "key": "showTotal",
        "label": "合计行",
        "type": "toggle",
        "default": true,
        "desc": "末尾按当前行自动汇总的合计行。",
        "publicKey": "showTotal",
        "publicLabel": "合计行",
        "description": "末尾按当前行自动汇总的合计行。"
      },
      {
        "key": "showVerdict",
        "label": "判断列",
        "type": "toggle",
        "default": true,
        "desc": "末列的「判断」标签 chip（关闭则收起该列）。",
        "publicKey": "showVerdict",
        "publicLabel": "判断列",
        "description": "末列的「判断」标签 chip（关闭则收起该列）。"
      },
      {
        "key": "zebra",
        "label": "斑马纹",
        "type": "toggle",
        "default": false,
        "desc": "隔行底色，便于横向读取。",
        "publicKey": "zebra",
        "publicLabel": "斑马纹",
        "description": "隔行底色，便于横向读取。"
      },
      {
        "key": "focusEnabled",
        "label": "重点行",
        "type": "toggle",
        "default": true,
        "desc": "是否突出某一行。",
        "publicKey": "focusEnabled",
        "publicLabel": "重点行",
        "description": "是否突出某一行。"
      },
      {
        "key": "focusIndex",
        "label": "重点行序号",
        "type": "slider",
        "default": 1,
        "min": 1,
        "max": 4,
        "step": 1,
        "desc": "被突出的行序号（从 1 起）。",
        "publicKey": "focusIndex",
        "publicLabel": "重点行序号",
        "description": "被突出的行序号（从 1 起）。"
      },
      {
        "key": "colorMode",
        "label": "占比条配色",
        "type": "radio",
        "default": "category",
        "options": [
          {
            "value": "category",
            "label": "按类别"
          },
          {
            "value": "accent",
            "label": "强调色"
          },
          {
            "value": "mono",
            "label": "单色"
          }
        ],
        "desc": "内联占比条的配色方式。",
        "publicKey": "colorMode",
        "publicLabel": "占比条配色",
        "description": "内联占比条的配色方式。"
      },
      {
        "key": "showIntro",
        "label": "引导栏",
        "type": "toggle",
        "default": true,
        "desc": "表格上方的引导文案与维度说明。",
        "publicKey": "showIntro",
        "publicLabel": "引导栏",
        "description": "表格上方的引导文案与维度说明。"
      },
      {
        "key": "accentColor",
        "label": "强调色",
        "type": "color",
        "default": "#2c44a0",
        "options": [
          "#d8402e",
          "#e2742c",
          "#efbe2e",
          "#3c9a52",
          "#4da0c6",
          "#2c44a0",
          "#7a3c90"
        ],
        "desc": "眉标 / 重点行 / 合计行的强调色。",
        "publicKey": "accentColor",
        "publicLabel": "强调色",
        "description": "眉标 / 重点行 / 合计行的强调色。"
      },
      {
        "key": "showConclusion",
        "label": "结论文案",
        "type": "toggle",
        "default": true,
        "desc": "表格下方的一句装饰性结论。",
        "publicKey": "showConclusion",
        "publicLabel": "结论文案",
        "description": "表格下方的一句装饰性结论。"
      },
      {
        "key": "showSheetLabel",
        "label": "页码标签",
        "type": "toggle",
        "default": true,
        "desc": "右上角的页码 / 章节标签。",
        "publicKey": "showSheetLabel",
        "publicLabel": "页码标签",
        "description": "右上角的页码 / 章节标签。"
      }
    ],
    "defaultProps": {
      "rowCount": 3,
      "showBar": true,
      "showTotal": true,
      "showVerdict": true,
      "zebra": false,
      "focusEnabled": true,
      "focusIndex": 1,
      "colorMode": "category",
      "showIntro": true,
      "accentColor": "#2c44a0",
      "showConclusion": true,
      "showSheetLabel": true,
      "copy": {
        "eyebrow": "AI CHIPS",
        "title": "训练与推理硬件",
        "sheet": "TABLE · 38 / 80",
        "lead": "AI 芯片融资集中在训练加速器、推理芯片与边缘 AI。",
        "tag": "层级 × 资金规模 × 资金占比 × 判断",
        "unit": "亿美元",
        "totalLabel": "合计",
        "totalEn": "TOTAL FUNDING",
        "headers": [
          "层级",
          "资金规模",
          "资金占比",
          "判断"
        ],
        "rows": [
          {
            "k": "训练芯片",
            "en": "Training Accelerator",
            "v": 46,
            "chip": "高资本",
            "c": "#d8402e"
          },
          {
            "k": "推理芯片",
            "en": "Inference Chip",
            "v": 32,
            "chip": "放量",
            "c": "#2c44a0"
          },
          {
            "k": "边缘 AI",
            "en": "Edge AI",
            "v": 19,
            "chip": "早期",
            "c": "#3c9a52"
          },
          {
            "k": "封装互联",
            "en": "Packaging / Interconnect",
            "v": 12,
            "chip": "壁垒",
            "c": "#4da0c6"
          }
        ],
        "conclusion": "硬件方向看长期确定性。"
      }
    }
  },
  {
    "key": "theme05_page043",
    "themeKey": "theme05",
    "pageNumber": 43,
    "layout": "THEME05-043",
    "slot": "showcase",
    "label": "图像主视觉 Showcase",
    "bgClass": "",
    "controls": [
      {
        "key": "imageCount",
        "label": "图片槽数量",
        "type": "slider",
        "default": 1,
        "min": 0,
        "max": 2,
        "step": 1,
        "desc": "主视觉图片槽数量（0–2）；按各图比例自适应。为 0 时身份卡铺满整幅、指标转两列。",
        "publicKey": "imageCount",
        "publicLabel": "图片槽数量",
        "description": "主视觉图片槽数量（0–2）；按各图比例自适应。为 0 时身份卡铺满整幅、指标转两列。"
      },
      {
        "key": "imageSide",
        "label": "图片位置",
        "type": "radio",
        "default": "left",
        "options": [
          {
            "value": "left",
            "label": "左侧"
          },
          {
            "value": "right",
            "label": "右侧"
          }
        ],
        "desc": "图片相对身份卡的位置（有图片时生效）。",
        "publicKey": "imageSide",
        "publicLabel": "图片位置",
        "description": "图片相对身份卡的位置（有图片时生效）。"
      },
      {
        "key": "cardTheme",
        "label": "身份卡主题",
        "type": "radio",
        "default": "color",
        "options": [
          {
            "value": "color",
            "label": "色块"
          },
          {
            "value": "dark",
            "label": "深色"
          },
          {
            "value": "paper",
            "label": "纸色"
          }
        ],
        "desc": "身份卡背景：强调色块 / 深色 / 纸色。",
        "publicKey": "cardTheme",
        "publicLabel": "身份卡主题",
        "description": "身份卡背景：强调色块 / 深色 / 纸色。"
      },
      {
        "key": "metricCount",
        "label": "指标行数",
        "type": "slider",
        "default": 3,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "身份卡内的指标行数。",
        "publicKey": "metricCount",
        "publicLabel": "指标行数",
        "description": "身份卡内的指标行数。"
      },
      {
        "key": "distCount",
        "label": "分布项数",
        "type": "slider",
        "default": 3,
        "min": 2,
        "max": 3,
        "step": 1,
        "desc": "底部应用分布带的分项数量。",
        "publicKey": "distCount",
        "publicLabel": "分布项数",
        "description": "底部应用分布带的分项数量。"
      },
      {
        "key": "showDistribution",
        "label": "应用分布带",
        "type": "toggle",
        "default": true,
        "desc": "底部全宽的应用分布带（单条 100% 分段 + 图例）。",
        "publicKey": "showDistribution",
        "publicLabel": "应用分布带",
        "description": "底部全宽的应用分布带（单条 100% 分段 + 图例）。"
      },
      {
        "key": "focusEnabled",
        "label": "重点分布项",
        "type": "toggle",
        "default": false,
        "desc": "是否突出某一分布分项（其余淡出）。",
        "publicKey": "focusEnabled",
        "publicLabel": "重点分布项",
        "description": "是否突出某一分布分项（其余淡出）。"
      },
      {
        "key": "focusIndex",
        "label": "重点分布序号",
        "type": "slider",
        "default": 1,
        "min": 1,
        "max": 3,
        "step": 1,
        "desc": "被突出的分布分项序号（从 1 起）。",
        "publicKey": "focusIndex",
        "publicLabel": "重点分布序号",
        "description": "被突出的分布分项序号（从 1 起）。"
      },
      {
        "key": "showLead",
        "label": "引导文案",
        "type": "toggle",
        "default": true,
        "desc": "标题下方的一段引导说明。",
        "publicKey": "showLead",
        "publicLabel": "引导文案",
        "description": "标题下方的一段引导说明。"
      },
      {
        "key": "showMediaCaption",
        "label": "图注",
        "type": "toggle",
        "default": true,
        "desc": "图片区上方的装饰性图注。",
        "publicKey": "showMediaCaption",
        "publicLabel": "图注",
        "description": "图片区上方的装饰性图注。"
      },
      {
        "key": "accentColor",
        "label": "强调色",
        "type": "color",
        "default": "#d8402e",
        "options": [
          "#d8402e",
          "#e2742c",
          "#efbe2e",
          "#3c9a52",
          "#4da0c6",
          "#2c44a0",
          "#7a3c90"
        ],
        "desc": "眉标 /「色块」主题身份卡的颜色。",
        "publicKey": "accentColor",
        "publicLabel": "强调色",
        "description": "眉标 /「色块」主题身份卡的颜色。"
      },
      {
        "key": "showConclusion",
        "label": "结论文案",
        "type": "toggle",
        "default": true,
        "desc": "底部的一句装饰性结论。",
        "publicKey": "showConclusion",
        "publicLabel": "结论文案",
        "description": "底部的一句装饰性结论。"
      },
      {
        "key": "showSheetLabel",
        "label": "页码标签",
        "type": "toggle",
        "default": true,
        "desc": "右上角的页码 / 章节标签。",
        "publicKey": "showSheetLabel",
        "publicLabel": "页码标签",
        "description": "右上角的页码 / 章节标签。"
      }
    ],
    "defaultProps": {
      "imageCount": 1,
      "imageSide": "left",
      "cardTheme": "color",
      "metricCount": 3,
      "distCount": 3,
      "showDistribution": true,
      "focusEnabled": false,
      "focusIndex": 1,
      "showLead": true,
      "showMediaCaption": true,
      "accentColor": "#d8402e",
      "showConclusion": true,
      "showSheetLabel": true,
      "copy": {
        "eyebrow": "EMBODIED AI",
        "title": "从软件走向物理世界",
        "en": "EMBODIED AI",
        "zh": "机器人与具身智能",
        "sheet": "IMAGE · 39 / 80",
        "lead": "具身智能成为 AI 从软件能力延伸到物理场景的重要方向。",
        "metrics": [
          [
            "融资额",
            "41",
            "亿美元"
          ],
          [
            "事件数",
            "7",
            "笔"
          ],
          [
            "平均单笔",
            "5.9",
            "亿美元"
          ],
          [
            "人形机器人占比",
            "51",
            "%"
          ]
        ],
        "mediaCap": "机器人场景",
        "mediaUnit": "DROP IMAGE",
        "distCap": "应用分布",
        "distUnit": "BY APPLICATION",
        "dist": [
          {
            "k": "人形机器人",
            "v": 21,
            "c": "#d8402e"
          },
          {
            "k": "工业自动化",
            "v": 11,
            "c": "#2c44a0"
          },
          {
            "k": "仓储机器人",
            "v": 9,
            "c": "#3c9a52"
          }
        ],
        "conclusion": "长周期赛道需要看供应链和量产能力。"
      }
    }
  },
  {
    "key": "theme05_page044",
    "themeKey": "theme05",
    "pageNumber": 44,
    "layout": "THEME05-044",
    "slot": "atlas",
    "label": "架构图 Atlas",
    "bgClass": "",
    "controls": [
      {
        "key": "imageCount",
        "label": "图片槽数量",
        "type": "slider",
        "default": 1,
        "min": 0,
        "max": 2,
        "step": 1,
        "desc": "主视觉图片槽数量（0–2）；按各图比例自适应。为 0 时身份卡铺满整幅、指标转两列。",
        "publicKey": "imageCount",
        "publicLabel": "图片槽数量",
        "description": "主视觉图片槽数量（0–2）；按各图比例自适应。为 0 时身份卡铺满整幅、指标转两列。"
      },
      {
        "key": "imageSide",
        "label": "图片位置",
        "type": "radio",
        "default": "right",
        "options": [
          {
            "value": "left",
            "label": "左侧"
          },
          {
            "value": "right",
            "label": "右侧"
          }
        ],
        "desc": "图片相对身份卡的位置（有图片时生效）。",
        "publicKey": "imageSide",
        "publicLabel": "图片位置",
        "description": "图片相对身份卡的位置（有图片时生效）。"
      },
      {
        "key": "cardTheme",
        "label": "身份卡主题",
        "type": "radio",
        "default": "dark",
        "options": [
          {
            "value": "color",
            "label": "色块"
          },
          {
            "value": "dark",
            "label": "深色"
          },
          {
            "value": "paper",
            "label": "纸色"
          }
        ],
        "desc": "身份卡背景：强调色块 / 深色 / 纸色。",
        "publicKey": "cardTheme",
        "publicLabel": "身份卡主题",
        "description": "身份卡背景：强调色块 / 深色 / 纸色。"
      },
      {
        "key": "metricCount",
        "label": "指标行数",
        "type": "slider",
        "default": 3,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "身份卡内的指标行数。",
        "publicKey": "metricCount",
        "publicLabel": "指标行数",
        "description": "身份卡内的指标行数。"
      },
      {
        "key": "sceneCount",
        "label": "场景块数",
        "type": "slider",
        "default": 3,
        "min": 2,
        "max": 3,
        "step": 1,
        "desc": "底部场景拆分带的 stat 块数量。",
        "publicKey": "contentItemCount",
        "publicLabel": "场景块数",
        "description": "底部场景拆分带的 stat 块数量。"
      },
      {
        "key": "showScenes",
        "label": "场景拆分带",
        "type": "toggle",
        "default": true,
        "desc": "底部全宽的场景拆分带（离散 stat 块）。",
        "publicKey": "showItemTags",
        "publicLabel": "场景拆分带",
        "description": "底部全宽的场景拆分带（离散 stat 块）。"
      },
      {
        "key": "focusEnabled",
        "label": "重点场景块",
        "type": "toggle",
        "default": true,
        "desc": "是否突出某一场景块（其余淡出）。",
        "publicKey": "focusEnabled",
        "publicLabel": "重点场景块",
        "description": "是否突出某一场景块（其余淡出）。"
      },
      {
        "key": "focusIndex",
        "label": "重点场景序号",
        "type": "slider",
        "default": 1,
        "min": 1,
        "max": 3,
        "step": 1,
        "desc": "被突出的场景块序号（从 1 起）。",
        "publicKey": "focusIndex",
        "publicLabel": "重点场景序号",
        "description": "被突出的场景块序号（从 1 起）。"
      },
      {
        "key": "showLead",
        "label": "引导文案",
        "type": "toggle",
        "default": true,
        "desc": "标题下方的一段引导说明。",
        "publicKey": "showLead",
        "publicLabel": "引导文案",
        "description": "标题下方的一段引导说明。"
      },
      {
        "key": "showMediaCaption",
        "label": "图注",
        "type": "toggle",
        "default": true,
        "desc": "图片区上方的装饰性图注。",
        "publicKey": "showMediaCaption",
        "publicLabel": "图注",
        "description": "图片区上方的装饰性图注。"
      },
      {
        "key": "accentColor",
        "label": "强调色",
        "type": "color",
        "default": "#4da0c6",
        "options": [
          "#d8402e",
          "#e2742c",
          "#efbe2e",
          "#3c9a52",
          "#4da0c6",
          "#2c44a0",
          "#7a3c90"
        ],
        "desc": "眉标 / 卡内强调条 /「色块」主题身份卡的颜色。",
        "publicKey": "accentColor",
        "publicLabel": "强调色",
        "description": "眉标 / 卡内强调条 /「色块」主题身份卡的颜色。"
      },
      {
        "key": "showConclusion",
        "label": "结论文案",
        "type": "toggle",
        "default": true,
        "desc": "底部的一句装饰性结论。",
        "publicKey": "showConclusion",
        "publicLabel": "结论文案",
        "description": "底部的一句装饰性结论。"
      },
      {
        "key": "showSheetLabel",
        "label": "页码标签",
        "type": "toggle",
        "default": true,
        "desc": "右上角的页码 / 章节标签。",
        "publicKey": "showSheetLabel",
        "publicLabel": "页码标签",
        "description": "右上角的页码 / 章节标签。"
      }
    ],
    "defaultProps": {
      "imageCount": 1,
      "imageSide": "right",
      "cardTheme": "dark",
      "metricCount": 3,
      "sceneCount": 3,
      "showScenes": true,
      "focusEnabled": true,
      "focusIndex": 1,
      "showLead": true,
      "showMediaCaption": true,
      "accentColor": "#4da0c6",
      "showConclusion": true,
      "showSheetLabel": true,
      "copy": {
        "eyebrow": "AUTONOMOUS AI",
        "title": "车载模型升级",
        "en": "AUTONOMOUS AI",
        "zh": "自动驾驶与车载 AI",
        "sheet": "IMAGE · 40 / 80",
        "lead": "车载 AI 从感知模块转向端到端模型和座舱智能。",
        "metrics": [
          [
            "融资额",
            "29",
            "亿美元"
          ],
          [
            "事件数",
            "6",
            "笔"
          ],
          [
            "平均单笔",
            "4.8",
            "亿美元"
          ],
          [
            "端到端占比",
            "45",
            "%"
          ]
        ],
        "mediaCap": "车载 AI 架构",
        "mediaUnit": "DROP DIAGRAM",
        "sceneCap": "场景拆分",
        "sceneUnit": "BY SCENE",
        "scenes": [
          {
            "en": "END-TO-END",
            "zh": "端到端驾驶",
            "num": "13",
            "unit": "亿美元",
            "c": "#2c44a0"
          },
          {
            "en": "SIMULATION",
            "zh": "仿真平台",
            "num": "9",
            "unit": "亿美元",
            "c": "#3c9a52"
          },
          {
            "en": "IN-CAR COPILOT",
            "zh": "车载助手",
            "num": "7",
            "unit": "亿美元",
            "c": "#e2742c"
          }
        ],
        "conclusion": "自动驾驶回暖，但更看重工程兑现。"
      }
    }
  },
  {
    "key": "theme05_page045",
    "themeKey": "theme05",
    "pageNumber": 45,
    "layout": "THEME05-045",
    "slot": "gate",
    "label": "分层防线 Gate",
    "bgClass": "",
    "controls": [
      {
        "key": "layerCount",
        "label": "防线层数",
        "type": "slider",
        "default": 4,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "纵向堆叠的防线（分层）数量。",
        "publicKey": "layerCount",
        "publicLabel": "防线层数",
        "description": "纵向堆叠的防线（分层）数量。"
      },
      {
        "key": "chartType",
        "label": "防线图样式",
        "type": "radio",
        "default": "nested",
        "options": [
          {
            "value": "nested",
            "label": "嵌套"
          },
          {
            "value": "bar",
            "label": "条形"
          }
        ],
        "desc": "分层呈现方式：居中嵌套塔 / 左对齐横向条形。",
        "publicKey": "chartType",
        "publicLabel": "防线图样式",
        "description": "分层呈现方式：居中嵌套塔 / 左对齐横向条形。"
      },
      {
        "key": "focusEnabled",
        "label": "重点防线",
        "type": "toggle",
        "default": true,
        "desc": "是否突出某一层（其余淡出）。",
        "publicKey": "focusEnabled",
        "publicLabel": "重点防线",
        "description": "是否突出某一层（其余淡出）。"
      },
      {
        "key": "focusIndex",
        "label": "重点防线序号",
        "type": "slider",
        "default": 1,
        "min": 1,
        "max": 4,
        "step": 1,
        "desc": "被突出的防线序号（从 1 起）。",
        "publicKey": "focusIndex",
        "publicLabel": "重点防线序号",
        "description": "被突出的防线序号（从 1 起）。"
      },
      {
        "key": "showValue",
        "label": "防线数值",
        "type": "toggle",
        "default": true,
        "desc": "各层右侧的数值标注。",
        "publicKey": "showValueLabels",
        "publicLabel": "防线数值",
        "description": "各层右侧的数值标注。"
      },
      {
        "key": "showMetricCard",
        "label": "侧栏指标卡",
        "type": "toggle",
        "default": true,
        "desc": "右侧的彩色指标规格卡。",
        "publicKey": "showMetricCard",
        "publicLabel": "侧栏指标卡",
        "description": "右侧的彩色指标规格卡。"
      },
      {
        "key": "metricCount",
        "label": "指标行数",
        "type": "slider",
        "default": 4,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "侧栏指标卡的指标行数。",
        "publicKey": "metricCount",
        "publicLabel": "指标行数",
        "description": "侧栏指标卡的指标行数。"
      },
      {
        "key": "showNote",
        "label": "侧栏说明",
        "type": "toggle",
        "default": true,
        "desc": "侧栏底部的一段说明文案。",
        "publicKey": "showNote",
        "publicLabel": "侧栏说明",
        "description": "侧栏底部的一段说明文案。"
      },
      {
        "key": "accentColor",
        "label": "强调色",
        "type": "color",
        "default": "#2c44a0",
        "options": [
          "#d8402e",
          "#e2742c",
          "#efbe2e",
          "#3c9a52",
          "#4da0c6",
          "#2c44a0",
          "#7a3c90"
        ],
        "desc": "眉标 / 指标卡 / 重点标记的强调色。",
        "publicKey": "accentColor",
        "publicLabel": "强调色",
        "description": "眉标 / 指标卡 / 重点标记的强调色。"
      },
      {
        "key": "showConclusion",
        "label": "结论文案",
        "type": "toggle",
        "default": true,
        "desc": "底部的一句装饰性结论。",
        "publicKey": "showConclusion",
        "publicLabel": "结论文案",
        "description": "底部的一句装饰性结论。"
      },
      {
        "key": "showSheetLabel",
        "label": "页码标签",
        "type": "toggle",
        "default": true,
        "desc": "右上角的页码 / 章节标签。",
        "publicKey": "showSheetLabel",
        "publicLabel": "页码标签",
        "description": "右上角的页码 / 章节标签。"
      }
    ],
    "defaultProps": {
      "layerCount": 4,
      "chartType": "nested",
      "focusEnabled": true,
      "focusIndex": 1,
      "showValue": true,
      "showMetricCard": true,
      "metricCount": 4,
      "showNote": true,
      "accentColor": "#2c44a0",
      "showConclusion": true,
      "showSheetLabel": true,
      "copy": {
        "eyebrow": "AI SAFETY",
        "title": "评测、红队与合规",
        "sheet": "CHART · 41 / 80",
        "layerCap": "安全防线分层",
        "layerUnit": "DEFENSE LAYERS",
        "layers": [
          {
            "en": "EVALUATION",
            "zh": "模型评测",
            "v": 6,
            "c": "#2c44a0"
          },
          {
            "en": "RED TEAM",
            "zh": "红队测试",
            "v": 4,
            "c": "#d8402e"
          },
          {
            "en": "CONTENT",
            "zh": "内容安全",
            "v": 5,
            "c": "#e2742c"
          },
          {
            "en": "COMPLIANCE",
            "zh": "合规监测",
            "v": 5,
            "c": "#3c9a52"
          }
        ],
        "metricCap": "赛道指标",
        "metricUnit": "BY SEGMENT",
        "metrics": [
          [
            "融资额",
            "16",
            "亿美元"
          ],
          [
            "事件数",
            "8",
            "笔"
          ],
          [
            "平均单笔",
            "2.0",
            "亿美元"
          ],
          [
            "预算属性",
            "刚性",
            ""
          ]
        ],
        "note": "监管收紧会把 AI 安全从可选预算变成刚性预算。",
        "conclusion": "安全能力会成为企业采购门槛。"
      }
    }
  },
  {
    "key": "theme05_page046",
    "themeKey": "theme05",
    "pageNumber": 46,
    "layout": "THEME05-046",
    "slot": "catalog",
    "label": "图像型录 Catalog",
    "bgClass": "",
    "controls": [
      {
        "key": "cardCount",
        "label": "型录卡数量",
        "type": "slider",
        "default": 4,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "类型卡（型录单元）的数量。",
        "publicKey": "cardCount",
        "publicLabel": "型录卡数量",
        "description": "类型卡（型录单元）的数量。"
      },
      {
        "key": "imageCount",
        "label": "图片槽数量",
        "type": "slider",
        "default": 2,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "前 N 张卡作为图片槽（按比例填充）；其余卡为纯色型录块。",
        "publicKey": "imageCount",
        "publicLabel": "图片槽数量",
        "description": "前 N 张卡作为图片槽（按比例填充）；其余卡为纯色型录块。"
      },
      {
        "key": "widthByValue",
        "label": "按数值定宽",
        "type": "toggle",
        "default": true,
        "desc": "卡片宽度按数值分配（整行即一条资金分布）；关闭则等宽。",
        "publicKey": "widthByValue",
        "publicLabel": "按数值定宽",
        "description": "卡片宽度按数值分配（整行即一条资金分布）；关闭则等宽。"
      },
      {
        "key": "showCode",
        "label": "卡片代号",
        "type": "toggle",
        "default": true,
        "desc": "卡片角上的两字母代号。",
        "publicKey": "showCode",
        "publicLabel": "卡片代号",
        "description": "卡片角上的两字母代号。"
      },
      {
        "key": "showValue",
        "label": "卡片数值",
        "type": "toggle",
        "default": true,
        "desc": "卡片底部的数值标注。",
        "publicKey": "showValueLabels",
        "publicLabel": "卡片数值",
        "description": "卡片底部的数值标注。"
      },
      {
        "key": "focusEnabled",
        "label": "重点卡片",
        "type": "toggle",
        "default": false,
        "desc": "是否突出某一张卡（其余淡出）。",
        "publicKey": "focusEnabled",
        "publicLabel": "重点卡片",
        "description": "是否突出某一张卡（其余淡出）。"
      },
      {
        "key": "focusIndex",
        "label": "重点卡序号",
        "type": "slider",
        "default": 1,
        "min": 1,
        "max": 4,
        "step": 1,
        "desc": "被突出的卡片序号（从 1 起）。",
        "publicKey": "focusIndex",
        "publicLabel": "重点卡序号",
        "description": "被突出的卡片序号（从 1 起）。"
      },
      {
        "key": "showHeadline",
        "label": "指标条",
        "type": "toggle",
        "default": true,
        "desc": "型录上方的标题指标条。",
        "publicKey": "showHeadline",
        "publicLabel": "指标条",
        "description": "型录上方的标题指标条。"
      },
      {
        "key": "showGalleryCaption",
        "label": "图注",
        "type": "toggle",
        "default": true,
        "desc": "型录区上方的装饰性图注。",
        "publicKey": "showGalleryCaption",
        "publicLabel": "图注",
        "description": "型录区上方的装饰性图注。"
      },
      {
        "key": "accentColor",
        "label": "强调色",
        "type": "color",
        "default": "#d8402e",
        "options": [
          "#d8402e",
          "#e2742c",
          "#efbe2e",
          "#3c9a52",
          "#4da0c6",
          "#2c44a0",
          "#7a3c90"
        ],
        "desc": "眉标 / 指标条强调色。",
        "publicKey": "accentColor",
        "publicLabel": "强调色",
        "description": "眉标 / 指标条强调色。"
      },
      {
        "key": "showConclusion",
        "label": "结论文案",
        "type": "toggle",
        "default": true,
        "desc": "底部的一句装饰性结论。",
        "publicKey": "showConclusion",
        "publicLabel": "结论文案",
        "description": "底部的一句装饰性结论。"
      },
      {
        "key": "showSheetLabel",
        "label": "页码标签",
        "type": "toggle",
        "default": true,
        "desc": "右上角的页码 / 章节标签。",
        "publicKey": "showSheetLabel",
        "publicLabel": "页码标签",
        "description": "右上角的页码 / 章节标签。"
      }
    ],
    "defaultProps": {
      "cardCount": 4,
      "imageCount": 2,
      "widthByValue": true,
      "showCode": true,
      "showValue": true,
      "focusEnabled": false,
      "focusIndex": 1,
      "showHeadline": true,
      "showGalleryCaption": true,
      "accentColor": "#d8402e",
      "showConclusion": true,
      "showSheetLabel": true,
      "copy": {
        "eyebrow": "GENERATIVE CONTENT",
        "title": "图像、视频与创意",
        "sub": "内容生成赛道",
        "sheet": "IMAGE · 42 / 80",
        "metrics": [
          [
            "融资额",
            "31",
            "亿美元"
          ],
          [
            "事件数",
            "11",
            "笔"
          ],
          [
            "平均单笔",
            "2.8",
            "亿美元"
          ]
        ],
        "galleryCap": "内容类型型录",
        "galleryUnit": "DROP IMAGES",
        "cards": [
          {
            "en": "VIDEO",
            "zh": "视频生成",
            "code": "VG",
            "v": 14,
            "unit": "亿美元",
            "c": "#d8402e"
          },
          {
            "en": "ADS",
            "zh": "广告创意",
            "code": "AD",
            "v": 8,
            "unit": "亿美元",
            "c": "#efbe2e"
          },
          {
            "en": "IMAGE",
            "zh": "图像生成",
            "code": "IM",
            "v": 5,
            "unit": "亿美元",
            "c": "#2c44a0"
          },
          {
            "en": "AUDIO",
            "zh": "音乐音频",
            "code": "AU",
            "v": 4,
            "unit": "亿美元",
            "c": "#4da0c6"
          }
        ],
        "conclusion": "流量热度不等于商业壁垒。"
      }
    }
  },
  {
    "key": "theme05_page047",
    "themeKey": "theme05",
    "pageNumber": 47,
    "layout": "THEME05-047",
    "slot": "path",
    "label": "学习路径 Path",
    "bgClass": "",
    "controls": [
      {
        "key": "nodeCount",
        "label": "路径节点数",
        "type": "slider",
        "default": 4,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "学习路径的阶段（节点）数量。",
        "publicKey": "nodeCount",
        "publicLabel": "路径节点数",
        "description": "学习路径的阶段（节点）数量。"
      },
      {
        "key": "imageCount",
        "label": "图片槽数量",
        "type": "slider",
        "default": 1,
        "min": 0,
        "max": 3,
        "step": 1,
        "desc": "图片槽数量（0–3）；按各图比例自适应排布。为 0 时路径铺满整幅。",
        "publicKey": "imageCount",
        "publicLabel": "图片槽数量",
        "description": "图片槽数量（0–3）；按各图比例自适应排布。为 0 时路径铺满整幅。"
      },
      {
        "key": "imageSide",
        "label": "图片位置",
        "type": "radio",
        "default": "right",
        "options": [
          {
            "value": "left",
            "label": "左侧"
          },
          {
            "value": "right",
            "label": "右侧"
          }
        ],
        "desc": "图片相对路径的位置（有图片时生效）。",
        "publicKey": "imageSide",
        "publicLabel": "图片位置",
        "description": "图片相对路径的位置（有图片时生效）。"
      },
      {
        "key": "focusEnabled",
        "label": "重点节点",
        "type": "toggle",
        "default": true,
        "desc": "是否突出某一路径节点。",
        "publicKey": "focusEnabled",
        "publicLabel": "重点节点",
        "description": "是否突出某一路径节点。"
      },
      {
        "key": "focusIndex",
        "label": "重点节点序号",
        "type": "slider",
        "default": 2,
        "min": 1,
        "max": 4,
        "step": 1,
        "desc": "被突出的节点序号（从 1 起）。",
        "publicKey": "focusIndex",
        "publicLabel": "重点节点序号",
        "description": "被突出的节点序号（从 1 起）。"
      },
      {
        "key": "sceneCount",
        "label": "场景卡数量",
        "type": "slider",
        "default": 3,
        "min": 2,
        "max": 3,
        "step": 1,
        "desc": "底部场景拆分带的卡片数量。",
        "publicKey": "contentItemCount",
        "publicLabel": "场景卡数量",
        "description": "底部场景拆分带的卡片数量。"
      },
      {
        "key": "showScenes",
        "label": "场景拆分带",
        "type": "toggle",
        "default": true,
        "desc": "底部全宽的场景拆分带。",
        "publicKey": "showItemTags",
        "publicLabel": "场景拆分带",
        "description": "底部全宽的场景拆分带。"
      },
      {
        "key": "showLead",
        "label": "引导文案",
        "type": "toggle",
        "default": true,
        "desc": "标题下方的一段引导说明。",
        "publicKey": "showLead",
        "publicLabel": "引导文案",
        "description": "标题下方的一段引导说明。"
      },
      {
        "key": "showMetrics",
        "label": "指标对",
        "type": "toggle",
        "default": true,
        "desc": "引导文案右侧的一对关键指标。",
        "publicKey": "showMetrics",
        "publicLabel": "指标对",
        "description": "引导文案右侧的一对关键指标。"
      },
      {
        "key": "showGalleryCaption",
        "label": "图注",
        "type": "toggle",
        "default": true,
        "desc": "图片区上方的装饰性图注。",
        "publicKey": "showGalleryCaption",
        "publicLabel": "图注",
        "description": "图片区上方的装饰性图注。"
      },
      {
        "key": "accentColor",
        "label": "强调色",
        "type": "color",
        "default": "#3c9a52",
        "options": [
          "#d8402e",
          "#e2742c",
          "#efbe2e",
          "#3c9a52",
          "#4da0c6",
          "#2c44a0",
          "#7a3c90"
        ],
        "desc": "眉标 / 重点节点 / 指标的强调色。",
        "publicKey": "accentColor",
        "publicLabel": "强调色",
        "description": "眉标 / 重点节点 / 指标的强调色。"
      },
      {
        "key": "showConclusion",
        "label": "结论文案",
        "type": "toggle",
        "default": true,
        "desc": "底部的一句装饰性结论。",
        "publicKey": "showConclusion",
        "publicLabel": "结论文案",
        "description": "底部的一句装饰性结论。"
      },
      {
        "key": "showSheetLabel",
        "label": "页码标签",
        "type": "toggle",
        "default": true,
        "desc": "右上角的页码 / 章节标签。",
        "publicKey": "showSheetLabel",
        "publicLabel": "页码标签",
        "description": "右上角的页码 / 章节标签。"
      }
    ],
    "defaultProps": {
      "nodeCount": 4,
      "imageCount": 1,
      "imageSide": "right",
      "focusEnabled": true,
      "focusIndex": 2,
      "sceneCount": 3,
      "showScenes": true,
      "showLead": true,
      "showMetrics": true,
      "showGalleryCaption": true,
      "accentColor": "#3c9a52",
      "showConclusion": true,
      "showSheetLabel": true,
      "copy": {
        "eyebrow": "EDUCATION AI",
        "title": "个性化学习与教师工具",
        "sheet": "IMAGE · 43 / 80",
        "lead": "教育 AI 从通用答疑转向个性化辅导和教师工作台。",
        "metrics": [
          [
            "融资额",
            "14",
            "亿美元"
          ],
          [
            "事件数",
            "5",
            "笔"
          ]
        ],
        "pathCap": "学习路径",
        "pathUnit": "LEARNING PATH",
        "stages": [
          {
            "en": "Q&A",
            "zh": "通用答疑",
            "d": "标准化问答与作业批改"
          },
          {
            "en": "ADAPTIVE",
            "zh": "个性化辅导",
            "d": "按能力分层的自适应练习"
          },
          {
            "en": "PLANNING",
            "zh": "路径规划",
            "d": "学习目标与节奏编排"
          },
          {
            "en": "TEACHER",
            "zh": "教师工作台",
            "d": "备课、评估与学情看板"
          }
        ],
        "galleryCap": "场景图示",
        "galleryUnit": "DROP IMAGES",
        "sceneCap": "场景拆分",
        "sceneUnit": "BY SCENE",
        "scenes": [
          {
            "en": "K12",
            "zh": "K12 辅导",
            "v": "6",
            "unit": "亿美元",
            "c": "#3c9a52"
          },
          {
            "en": "ENTERPRISE",
            "zh": "企业培训",
            "v": "5",
            "unit": "亿美元",
            "c": "#e2742c"
          },
          {
            "en": "TEACHER",
            "zh": "教师工具",
            "v": "3",
            "unit": "亿美元",
            "c": "#2c44a0"
          }
        ],
        "conclusion": "教育 AI 需要用结果证明价值。"
      }
    }
  },
  {
    "key": "theme05_page048",
    "themeKey": "theme05",
    "pageNumber": 48,
    "layout": "THEME05-048",
    "slot": "meter",
    "label": "指标仪表 Meter",
    "bgClass": "",
    "controls": [
      {
        "key": "rowCount",
        "label": "指标行数",
        "type": "slider",
        "default": 4,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "表格的指标行数量。",
        "publicKey": "rowCount",
        "publicLabel": "指标行数",
        "description": "表格的指标行数量。"
      },
      {
        "key": "showGauge",
        "label": "仪表列",
        "type": "toggle",
        "default": true,
        "desc": "0–100 的指标仪表条列（关闭则收起该列）。",
        "publicKey": "showGauge",
        "publicLabel": "仪表列",
        "description": "0–100 的指标仪表条列（关闭则收起该列）。"
      },
      {
        "key": "showBenchmark",
        "label": "参考基准标记",
        "type": "toggle",
        "default": true,
        "desc": "仪表条上的参考基准刻度与差值。",
        "publicKey": "showBenchmark",
        "publicLabel": "参考基准标记",
        "description": "仪表条上的参考基准刻度与差值。"
      },
      {
        "key": "showVerdict",
        "label": "判断列",
        "type": "toggle",
        "default": true,
        "desc": "末尾的「判断」标签列（关闭则收起该列）。",
        "publicKey": "showVerdict",
        "publicLabel": "判断列",
        "description": "末尾的「判断」标签列（关闭则收起该列）。"
      },
      {
        "key": "zebra",
        "label": "斑马纹",
        "type": "toggle",
        "default": false,
        "desc": "隔行底色，便于横向读取。",
        "publicKey": "zebra",
        "publicLabel": "斑马纹",
        "description": "隔行底色，便于横向读取。"
      },
      {
        "key": "focusEnabled",
        "label": "重点行",
        "type": "toggle",
        "default": true,
        "desc": "是否突出某一行。",
        "publicKey": "focusEnabled",
        "publicLabel": "重点行",
        "description": "是否突出某一行。"
      },
      {
        "key": "focusIndex",
        "label": "重点行序号",
        "type": "slider",
        "default": 2,
        "min": 1,
        "max": 4,
        "step": 1,
        "desc": "被突出的行序号（从 1 起）。",
        "publicKey": "focusIndex",
        "publicLabel": "重点行序号",
        "description": "被突出的行序号（从 1 起）。"
      },
      {
        "key": "showProcess",
        "label": "流程条",
        "type": "toggle",
        "default": true,
        "desc": "表格上方的工单流程节点条。",
        "publicKey": "showProcess",
        "publicLabel": "流程条",
        "description": "表格上方的工单流程节点条。"
      },
      {
        "key": "processNodeCount",
        "label": "流程节点数",
        "type": "slider",
        "default": 4,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "流程条的节点数量。",
        "publicKey": "processNodeCount",
        "publicLabel": "流程节点数",
        "description": "流程条的节点数量。"
      },
      {
        "key": "showIntro",
        "label": "引导栏",
        "type": "toggle",
        "default": true,
        "desc": "表格上方的引导文案、维度说明与指标对。",
        "publicKey": "showIntro",
        "publicLabel": "引导栏",
        "description": "表格上方的引导文案、维度说明与指标对。"
      },
      {
        "key": "accentColor",
        "label": "强调色",
        "type": "color",
        "default": "#d8402e",
        "options": [
          "#d8402e",
          "#e2742c",
          "#efbe2e",
          "#3c9a52",
          "#4da0c6",
          "#2c44a0",
          "#7a3c90"
        ],
        "desc": "眉标 / 重点行 / 仪表填充的强调色。",
        "publicKey": "accentColor",
        "publicLabel": "强调色",
        "description": "眉标 / 重点行 / 仪表填充的强调色。"
      },
      {
        "key": "showConclusion",
        "label": "结论文案",
        "type": "toggle",
        "default": true,
        "desc": "表格下方的一句装饰性结论。",
        "publicKey": "showConclusion",
        "publicLabel": "结论文案",
        "description": "表格下方的一句装饰性结论。"
      },
      {
        "key": "showSheetLabel",
        "label": "页码标签",
        "type": "toggle",
        "default": true,
        "desc": "右上角的页码 / 章节标签。",
        "publicKey": "showSheetLabel",
        "publicLabel": "页码标签",
        "description": "右上角的页码 / 章节标签。"
      }
    ],
    "defaultProps": {
      "rowCount": 4,
      "showGauge": true,
      "showBenchmark": true,
      "showVerdict": true,
      "zebra": false,
      "focusEnabled": true,
      "focusIndex": 2,
      "showProcess": true,
      "processNodeCount": 4,
      "showIntro": true,
      "accentColor": "#d8402e",
      "showConclusion": true,
      "showSheetLabel": true,
      "copy": {
        "eyebrow": "CUSTOMER SUPPORT AI",
        "title": "可量化降本场景",
        "sub": "客服 AI 赛道",
        "sheet": "TABLE · 44 / 80",
        "lead": "客服 AI 是最容易量化 ROI 的垂直应用之一。",
        "tag": "指标 × 当前值 × 行业基准 × 判断",
        "metrics": [
          [
            "融资额",
            "27",
            "亿美元"
          ],
          [
            "事件数",
            "9",
            "笔"
          ]
        ],
        "process": [
          {
            "zh": "受理",
            "en": "INTAKE"
          },
          {
            "zh": "自动分流",
            "en": "ROUTE"
          },
          {
            "zh": "AI 回复",
            "en": "AI REPLY"
          },
          {
            "zh": "人工升级",
            "en": "ESCALATE"
          }
        ],
        "headers": [
          "指标",
          "当前值",
          "对比行业基准",
          "判断"
        ],
        "rows": [
          {
            "k": "对话替代率",
            "en": "Deflection Rate",
            "val": 32,
            "unit": "%",
            "base": 20,
            "chip": "可量化",
            "c": "#d8402e"
          },
          {
            "k": "工单时长下降",
            "en": "Handle Time",
            "val": 41,
            "unit": "%",
            "base": 25,
            "chip": "高 ROI",
            "c": "#3c9a52"
          },
          {
            "k": "首次解决率",
            "en": "First Contact",
            "val": 68,
            "unit": "%",
            "base": 55,
            "chip": "稳健",
            "c": "#2c44a0"
          },
          {
            "k": "客户满意度",
            "en": "CSAT",
            "val": 88,
            "unit": "%",
            "base": 80,
            "chip": "正向",
            "c": "#4da0c6"
          }
        ],
        "conclusion": "能量化 ROI 的场景更容易获得预算。"
      }
    }
  },
  {
    "key": "theme05_page049",
    "themeKey": "theme05",
    "pageNumber": 49,
    "layout": "THEME05-049",
    "slot": "funnel",
    "label": "增长漏斗 Funnel",
    "bgClass": "",
    "controls": [
      {
        "key": "tierCount",
        "label": "漏斗层数",
        "type": "slider",
        "default": 4,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "漏斗的层级（阶段）数量。",
        "publicKey": "tierCount",
        "publicLabel": "漏斗层数",
        "description": "漏斗的层级（阶段）数量。"
      },
      {
        "key": "imageCount",
        "label": "图片槽数量",
        "type": "slider",
        "default": 1,
        "min": 0,
        "max": 3,
        "step": 1,
        "desc": "图片槽数量（0–3）；按各图比例自适应。为 0 时漏斗铺满整幅。",
        "publicKey": "imageCount",
        "publicLabel": "图片槽数量",
        "description": "图片槽数量（0–3）；按各图比例自适应。为 0 时漏斗铺满整幅。"
      },
      {
        "key": "imageSide",
        "label": "图片位置",
        "type": "radio",
        "default": "right",
        "options": [
          {
            "value": "left",
            "label": "左侧"
          },
          {
            "value": "right",
            "label": "右侧"
          }
        ],
        "desc": "图片相对漏斗的位置（有图片时生效）。",
        "publicKey": "imageSide",
        "publicLabel": "图片位置",
        "description": "图片相对漏斗的位置（有图片时生效）。"
      },
      {
        "key": "focusEnabled",
        "label": "重点层",
        "type": "toggle",
        "default": false,
        "desc": "是否突出某一漏斗层（其余淡出）。",
        "publicKey": "focusEnabled",
        "publicLabel": "重点层",
        "description": "是否突出某一漏斗层（其余淡出）。"
      },
      {
        "key": "focusIndex",
        "label": "重点层序号",
        "type": "slider",
        "default": 1,
        "min": 1,
        "max": 4,
        "step": 1,
        "desc": "被突出的漏斗层序号（从 1 起）。",
        "publicKey": "focusIndex",
        "publicLabel": "重点层序号",
        "description": "被突出的漏斗层序号（从 1 起）。"
      },
      {
        "key": "showValue",
        "label": "层数值",
        "type": "toggle",
        "default": true,
        "desc": "各层右侧的数值标注。",
        "publicKey": "showValueLabels",
        "publicLabel": "层数值",
        "description": "各层右侧的数值标注。"
      },
      {
        "key": "showMetrics",
        "label": "指标对",
        "type": "toggle",
        "default": true,
        "desc": "引导文案右侧的一对关键指标。",
        "publicKey": "showMetrics",
        "publicLabel": "指标对",
        "description": "引导文案右侧的一对关键指标。"
      },
      {
        "key": "showLead",
        "label": "引导文案",
        "type": "toggle",
        "default": true,
        "desc": "标题下方的一段引导说明。",
        "publicKey": "showLead",
        "publicLabel": "引导文案",
        "description": "标题下方的一段引导说明。"
      },
      {
        "key": "showGalleryCaption",
        "label": "图注",
        "type": "toggle",
        "default": true,
        "desc": "图片区上方的装饰性图注。",
        "publicKey": "showGalleryCaption",
        "publicLabel": "图注",
        "description": "图片区上方的装饰性图注。"
      },
      {
        "key": "accentColor",
        "label": "强调色",
        "type": "color",
        "default": "#e2742c",
        "options": [
          "#d8402e",
          "#e2742c",
          "#efbe2e",
          "#3c9a52",
          "#4da0c6",
          "#2c44a0",
          "#7a3c90"
        ],
        "desc": "眉标 / 指标 / 重点层的强调色。",
        "publicKey": "accentColor",
        "publicLabel": "强调色",
        "description": "眉标 / 指标 / 重点层的强调色。"
      },
      {
        "key": "showConclusion",
        "label": "结论文案",
        "type": "toggle",
        "default": true,
        "desc": "底部的一句装饰性结论。",
        "publicKey": "showConclusion",
        "publicLabel": "结论文案",
        "description": "底部的一句装饰性结论。"
      },
      {
        "key": "showSheetLabel",
        "label": "页码标签",
        "type": "toggle",
        "default": true,
        "desc": "右上角的页码 / 章节标签。",
        "publicKey": "showSheetLabel",
        "publicLabel": "页码标签",
        "description": "右上角的页码 / 章节标签。"
      }
    ],
    "defaultProps": {
      "tierCount": 4,
      "imageCount": 1,
      "imageSide": "right",
      "focusEnabled": false,
      "focusIndex": 1,
      "showValue": true,
      "showMetrics": true,
      "showLead": true,
      "showGalleryCaption": true,
      "accentColor": "#e2742c",
      "showConclusion": true,
      "showSheetLabel": true,
      "copy": {
        "eyebrow": "SALES & MARKETING AI",
        "title": "增长效率工具",
        "sheet": "IMAGE · 45 / 80",
        "lead": "销售与营销 AI 集中在线索评分、自动外呼、邮件和广告创意。",
        "metrics": [
          [
            "融资额",
            "24",
            "亿美元"
          ],
          [
            "事件数",
            "10",
            "笔"
          ]
        ],
        "funnelCap": "增长漏斗",
        "funnelUnit": "GROWTH FUNNEL",
        "tiers": [
          {
            "en": "REACH",
            "zh": "广告创意",
            "v": 8,
            "c": "#efbe2e"
          },
          {
            "en": "LEAD",
            "zh": "线索评分",
            "v": 7,
            "c": "#d8402e"
          },
          {
            "en": "OUTREACH",
            "zh": "自动外呼",
            "v": 6,
            "c": "#2c44a0"
          },
          {
            "en": "CONVERT",
            "zh": "转化成交",
            "v": 4,
            "c": "#3c9a52"
          }
        ],
        "galleryCap": "场景图示",
        "galleryUnit": "DROP IMAGES",
        "conclusion": "营销 AI 要用转化率证明自己。"
      }
    }
  },
  {
    "key": "theme05_page050",
    "themeKey": "theme05",
    "pageNumber": 50,
    "layout": "THEME05-050",
    "slot": "hero",
    "label": "大数字 Hero",
    "bgClass": "",
    "controls": [
      {
        "key": "imageCount",
        "label": "图片槽数量",
        "type": "slider",
        "default": 1,
        "min": 0,
        "max": 2,
        "step": 1,
        "desc": "图片槽数量（0–2）；按各图比例自适应。为 0 时主数字块铺满整幅。",
        "publicKey": "imageCount",
        "publicLabel": "图片槽数量",
        "description": "图片槽数量（0–2）；按各图比例自适应。为 0 时主数字块铺满整幅。"
      },
      {
        "key": "imageSide",
        "label": "图片位置",
        "type": "radio",
        "default": "right",
        "options": [
          {
            "value": "left",
            "label": "左侧"
          },
          {
            "value": "right",
            "label": "右侧"
          }
        ],
        "desc": "图片相对主数字块的位置（有图片时生效）。",
        "publicKey": "imageSide",
        "publicLabel": "图片位置",
        "description": "图片相对主数字块的位置（有图片时生效）。"
      },
      {
        "key": "auxCount",
        "label": "辅助指标数",
        "type": "slider",
        "default": 3,
        "min": 0,
        "max": 3,
        "step": 1,
        "desc": "主数字下方的支撑指标数量（0 隐藏整行）。",
        "publicKey": "auxCount",
        "publicLabel": "辅助指标数",
        "description": "主数字下方的支撑指标数量（0 隐藏整行）。"
      },
      {
        "key": "showUnit",
        "label": "数字单位",
        "type": "toggle",
        "default": true,
        "desc": "主数字后的单位后缀。",
        "publicKey": "showUnit",
        "publicLabel": "数字单位",
        "description": "主数字后的单位后缀。"
      },
      {
        "key": "showCaption",
        "label": "数字说明",
        "type": "toggle",
        "default": true,
        "desc": "主数字下方的解释说明。",
        "publicKey": "showCaption",
        "publicLabel": "数字说明",
        "description": "主数字下方的解释说明。"
      },
      {
        "key": "showMessage",
        "label": "支撑文案",
        "type": "toggle",
        "default": true,
        "desc": "说明下方的一段支撑性文案。",
        "publicKey": "showMessage",
        "publicLabel": "支撑文案",
        "description": "说明下方的一段支撑性文案。"
      },
      {
        "key": "showGalleryCaption",
        "label": "图注",
        "type": "toggle",
        "default": true,
        "desc": "图片区上方的装饰性图注。",
        "publicKey": "showGalleryCaption",
        "publicLabel": "图注",
        "description": "图片区上方的装饰性图注。"
      },
      {
        "key": "accentColor",
        "label": "强调色",
        "type": "color",
        "default": "#3c9a52",
        "options": [
          "#d8402e",
          "#e2742c",
          "#efbe2e",
          "#3c9a52",
          "#4da0c6",
          "#2c44a0",
          "#7a3c90"
        ],
        "desc": "主数字 / 眉标 / 辅助指标的强调色。",
        "publicKey": "accentColor",
        "publicLabel": "强调色",
        "description": "主数字 / 眉标 / 辅助指标的强调色。"
      },
      {
        "key": "showConclusion",
        "label": "结论文案",
        "type": "toggle",
        "default": true,
        "desc": "底部的一句装饰性结论。",
        "publicKey": "showConclusion",
        "publicLabel": "结论文案",
        "description": "底部的一句装饰性结论。"
      },
      {
        "key": "showSheetLabel",
        "label": "页码标签",
        "type": "toggle",
        "default": true,
        "desc": "右上角的页码 / 章节标签。",
        "publicKey": "showSheetLabel",
        "publicLabel": "页码标签",
        "description": "右上角的页码 / 章节标签。"
      }
    ],
    "defaultProps": {
      "imageCount": 1,
      "imageSide": "right",
      "auxCount": 3,
      "showUnit": true,
      "showCaption": true,
      "showMessage": true,
      "showGalleryCaption": true,
      "accentColor": "#3c9a52",
      "showConclusion": true,
      "showSheetLabel": true,
      "copy": {
        "eyebrow": "LOW-CODE AI",
        "title": "企业流程嵌入",
        "sheet": "BIG NUMBER · 46 / 80",
        "number": "118",
        "unit": "%",
        "caption": "净收入留存 · NRR",
        "message": "低代码 AI 平台帮助企业把模型能力嵌入内部流程。",
        "aux": [
          [
            "融资额",
            "19",
            "亿美元"
          ],
          [
            "事件数",
            "6",
            "笔"
          ],
          [
            "企业客户中位数",
            "430",
            "家"
          ]
        ],
        "galleryCap": "平台图示",
        "galleryUnit": "DROP IMAGES",
        "conclusion": "能被业务团队使用的平台更容易扩散。"
      }
    }
  },
  {
    "key": "theme05_page051",
    "themeKey": "theme05",
    "pageNumber": 51,
    "layout": "THEME05-051",
    "slot": "flux",
    "label": "转化通道 Flux",
    "bgClass": "",
    "controls": [
      {
        "key": "imageCount",
        "label": "图片槽数量",
        "type": "slider",
        "default": 1,
        "min": 0,
        "max": 3,
        "step": 1,
        "desc": "图片槽数量（0–3）；按各图比例自适应。为 0 时转化通道铺满整幅。",
        "publicKey": "imageCount",
        "publicLabel": "图片槽数量",
        "description": "图片槽数量（0–3）；按各图比例自适应。为 0 时转化通道铺满整幅。"
      },
      {
        "key": "imageSide",
        "label": "图片位置",
        "type": "radio",
        "default": "right",
        "options": [
          {
            "value": "left",
            "label": "左侧"
          },
          {
            "value": "right",
            "label": "右侧"
          }
        ],
        "desc": "图片相对转化通道的位置（有图片时生效）。",
        "publicKey": "imageSide",
        "publicLabel": "图片位置",
        "description": "图片相对转化通道的位置（有图片时生效）。"
      },
      {
        "key": "showTransfer",
        "label": "转化连接带",
        "type": "toggle",
        "default": true,
        "desc": "两个池之间的转化连接带与说明。",
        "publicKey": "showTransfer",
        "publicLabel": "转化连接带",
        "description": "两个池之间的转化连接带与说明。"
      },
      {
        "key": "emphasize",
        "label": "强调端",
        "type": "radio",
        "default": "dest",
        "options": [
          {
            "value": "source",
            "label": "源头"
          },
          {
            "value": "dest",
            "label": "终点"
          }
        ],
        "desc": "用强调色着重的一端（源头社区 / 终点企业）。",
        "publicKey": "emphasize",
        "publicLabel": "强调端",
        "description": "用强调色着重的一端（源头社区 / 终点企业）。"
      },
      {
        "key": "showMetrics",
        "label": "指标对",
        "type": "toggle",
        "default": true,
        "desc": "引导文案右侧的一对关键指标。",
        "publicKey": "showMetrics",
        "publicLabel": "指标对",
        "description": "引导文案右侧的一对关键指标。"
      },
      {
        "key": "showLead",
        "label": "引导文案",
        "type": "toggle",
        "default": true,
        "desc": "标题下方的一段引导说明。",
        "publicKey": "showLead",
        "publicLabel": "引导文案",
        "description": "标题下方的一段引导说明。"
      },
      {
        "key": "showGalleryCaption",
        "label": "图注",
        "type": "toggle",
        "default": true,
        "desc": "图片区上方的装饰性图注。",
        "publicKey": "showGalleryCaption",
        "publicLabel": "图注",
        "description": "图片区上方的装饰性图注。"
      },
      {
        "key": "accentColor",
        "label": "强调色",
        "type": "color",
        "default": "#7a3c90",
        "options": [
          "#d8402e",
          "#e2742c",
          "#efbe2e",
          "#3c9a52",
          "#4da0c6",
          "#2c44a0",
          "#7a3c90"
        ],
        "desc": "眉标 / 指标 / 强调端的颜色。",
        "publicKey": "accentColor",
        "publicLabel": "强调色",
        "description": "眉标 / 指标 / 强调端的颜色。"
      },
      {
        "key": "showConclusion",
        "label": "结论文案",
        "type": "toggle",
        "default": true,
        "desc": "底部的一句装饰性结论。",
        "publicKey": "showConclusion",
        "publicLabel": "结论文案",
        "description": "底部的一句装饰性结论。"
      },
      {
        "key": "showSheetLabel",
        "label": "页码标签",
        "type": "toggle",
        "default": true,
        "desc": "右上角的页码 / 章节标签。",
        "publicKey": "showSheetLabel",
        "publicLabel": "页码标签",
        "description": "右上角的页码 / 章节标签。"
      }
    ],
    "defaultProps": {
      "imageCount": 1,
      "imageSide": "right",
      "showTransfer": true,
      "emphasize": "dest",
      "showMetrics": true,
      "showLead": true,
      "showGalleryCaption": true,
      "accentColor": "#7a3c90",
      "showConclusion": true,
      "showSheetLabel": true,
      "copy": {
        "eyebrow": "OPEN-SOURCE MODELS",
        "title": "社区影响力变现",
        "sheet": "IMAGE · 47 / 80",
        "lead": "开源模型公司通过社区影响力、托管服务和企业支持变现。",
        "metrics": [
          [
            "融资额",
            "28",
            "亿美元"
          ],
          [
            "事件数",
            "7",
            "笔"
          ]
        ],
        "fluxCap": "影响力变现路径",
        "fluxUnit": "COMMUNITY → REVENUE",
        "transfer": "托管服务 · 企业支持",
        "source": {
          "en": "COMMUNITY",
          "zh": "开源社区",
          "num": "2.8",
          "unit": "亿次",
          "cap": "社区下载量"
        },
        "dest": {
          "en": "ENTERPRISE",
          "zh": "企业服务",
          "num": "37",
          "unit": "%",
          "cap": "企业服务收入占比"
        },
        "galleryCap": "场景图示",
        "galleryUnit": "DROP IMAGES",
        "conclusion": "开源是入口，不是完整商业模式。"
      }
    }
  },
  {
    "key": "theme05_page052",
    "themeKey": "theme05",
    "pageNumber": 52,
    "layout": "THEME05-052",
    "slot": "shield",
    "label": "评测流程 Shield",
    "bgClass": "",
    "controls": [
      {
        "key": "stageCount",
        "label": "流程节点数",
        "type": "slider",
        "default": 3,
        "min": 2,
        "max": 3,
        "step": 1,
        "desc": "评测流程的阶段（节点）数量。",
        "publicKey": "stageCount",
        "publicLabel": "流程节点数",
        "description": "评测流程的阶段（节点）数量。"
      },
      {
        "key": "focusEnabled",
        "label": "重点节点",
        "type": "toggle",
        "default": true,
        "desc": "是否突出某一节点（其余淡出）。",
        "publicKey": "focusEnabled",
        "publicLabel": "重点节点",
        "description": "是否突出某一节点（其余淡出）。"
      },
      {
        "key": "focusIndex",
        "label": "重点节点序号",
        "type": "slider",
        "default": 1,
        "min": 1,
        "max": 3,
        "step": 1,
        "desc": "被突出的节点序号（从 1 起）。",
        "publicKey": "focusIndex",
        "publicLabel": "重点节点序号",
        "description": "被突出的节点序号（从 1 起）。"
      },
      {
        "key": "showValue",
        "label": "节点数值",
        "type": "toggle",
        "default": true,
        "desc": "各节点柱顶的数值标注。",
        "publicKey": "showValueLabels",
        "publicLabel": "节点数值",
        "description": "各节点柱顶的数值标注。"
      },
      {
        "key": "showArrows",
        "label": "流程箭头",
        "type": "toggle",
        "default": true,
        "desc": "相邻节点间的流向箭头。",
        "publicKey": "showArrows",
        "publicLabel": "流程箭头",
        "description": "相邻节点间的流向箭头。"
      },
      {
        "key": "showMetricCard",
        "label": "侧栏指标卡",
        "type": "toggle",
        "default": true,
        "desc": "右侧的彩色指标规格卡。",
        "publicKey": "showMetricCard",
        "publicLabel": "侧栏指标卡",
        "description": "右侧的彩色指标规格卡。"
      },
      {
        "key": "metricCount",
        "label": "指标行数",
        "type": "slider",
        "default": 3,
        "min": 2,
        "max": 3,
        "step": 1,
        "desc": "侧栏指标卡的指标行数。",
        "publicKey": "metricCount",
        "publicLabel": "指标行数",
        "description": "侧栏指标卡的指标行数。"
      },
      {
        "key": "showNote",
        "label": "侧栏说明",
        "type": "toggle",
        "default": true,
        "desc": "侧栏底部的一段说明文案。",
        "publicKey": "showNote",
        "publicLabel": "侧栏说明",
        "description": "侧栏底部的一段说明文案。"
      },
      {
        "key": "accentColor",
        "label": "强调色",
        "type": "color",
        "default": "#2c44a0",
        "options": [
          "#d8402e",
          "#e2742c",
          "#efbe2e",
          "#3c9a52",
          "#4da0c6",
          "#2c44a0",
          "#7a3c90"
        ],
        "desc": "眉标 / 指标卡 / 重点标记的强调色。",
        "publicKey": "accentColor",
        "publicLabel": "强调色",
        "description": "眉标 / 指标卡 / 重点标记的强调色。"
      },
      {
        "key": "showConclusion",
        "label": "结论文案",
        "type": "toggle",
        "default": true,
        "desc": "底部的一句装饰性结论。",
        "publicKey": "showConclusion",
        "publicLabel": "结论文案",
        "description": "底部的一句装饰性结论。"
      },
      {
        "key": "showSheetLabel",
        "label": "页码标签",
        "type": "toggle",
        "default": true,
        "desc": "右上角的页码 / 章节标签。",
        "publicKey": "showSheetLabel",
        "publicLabel": "页码标签",
        "description": "右上角的页码 / 章节标签。"
      }
    ],
    "defaultProps": {
      "stageCount": 3,
      "focusEnabled": true,
      "focusIndex": 1,
      "showValue": true,
      "showArrows": true,
      "showMetricCard": true,
      "metricCount": 3,
      "showNote": true,
      "accentColor": "#2c44a0",
      "showConclusion": true,
      "showSheetLabel": true,
      "copy": {
        "eyebrow": "MODEL ALIGNMENT",
        "title": "安全与对齐工具",
        "sheet": "CHART · 48 / 80",
        "lead": "模型安全和对齐公司吸引长期资本关注。",
        "pipeCap": "安全评测流程",
        "pipeUnit": "EVAL PIPELINE",
        "stages": [
          {
            "en": "EVALUATION",
            "zh": "评测平台",
            "v": 8,
            "c": "#2c44a0"
          },
          {
            "en": "ALIGNMENT",
            "zh": "对齐工具",
            "v": 7,
            "c": "#3c9a52"
          },
          {
            "en": "RED TEAM",
            "zh": "红队服务",
            "v": 6,
            "c": "#d8402e"
          }
        ],
        "metricCap": "赛道指标",
        "metricUnit": "BY SEGMENT",
        "metrics": [
          [
            "融资额",
            "21",
            "亿美元"
          ],
          [
            "事件数",
            "5",
            "笔"
          ],
          [
            "平均单笔",
            "4.2",
            "亿美元"
          ]
        ],
        "note": "安全对齐既是技术壁垒，也是大客户信任入口。",
        "conclusion": "可信 AI 会成为企业级 AI 的基础设施。"
      }
    }
  },
  {
    "key": "theme05_page053",
    "themeKey": "theme05",
    "pageNumber": 53,
    "layout": "THEME05-053",
    "slot": "chapter4",
    "label": "章节 Chapter 04",
    "bgClass": "",
    "controls": [
      {
        "key": "theme",
        "label": "背景主题",
        "type": "radio",
        "default": "color",
        "options": [
          {
            "value": "dark",
            "label": "深色"
          },
          {
            "value": "paper",
            "label": "纸色"
          },
          {
            "value": "color",
            "label": "色块"
          }
        ],
        "desc": "章节页背景：深色 / 纸色 / 整页色块。",
        "publicKey": "theme",
        "publicLabel": "背景主题",
        "description": "章节页背景：深色 / 纸色 / 整页色块。"
      },
      {
        "key": "bgColor",
        "label": "色块背景",
        "type": "color",
        "default": "#2c44a0",
        "options": [
          "#d8402e",
          "#e2742c",
          "#efbe2e",
          "#3c9a52",
          "#4da0c6",
          "#2c44a0",
          "#7a3c90"
        ],
        "desc": "「色块」主题下的整页背景色。",
        "publicKey": "bgColor",
        "publicLabel": "色块背景",
        "description": "「色块」主题下的整页背景色。"
      },
      {
        "key": "showBigNumber",
        "label": "大号章节号",
        "type": "toggle",
        "default": true,
        "desc": "右侧的超大章节编号。",
        "publicKey": "showBigNumber",
        "publicLabel": "大号章节号",
        "description": "右侧的超大章节编号。"
      },
      {
        "key": "keywordCount",
        "label": "关键词数量",
        "type": "slider",
        "default": 4,
        "min": 0,
        "max": 6,
        "step": 1,
        "desc": "底部关键词标签数量（0 隐藏）。",
        "publicKey": "keywordCount",
        "publicLabel": "关键词数量",
        "description": "底部关键词标签数量（0 隐藏）。"
      },
      {
        "key": "accentColor",
        "label": "强调色",
        "type": "color",
        "default": "#2c44a0",
        "options": [
          "#d8402e",
          "#e2742c",
          "#efbe2e",
          "#3c9a52",
          "#4da0c6",
          "#2c44a0",
          "#7a3c90"
        ],
        "desc": "眉标与章节编号的强调色（色块主题除外）。",
        "publicKey": "accentColor",
        "publicLabel": "强调色",
        "description": "眉标与章节编号的强调色（色块主题除外）。"
      },
      {
        "key": "showColorBand",
        "label": "色谱条",
        "type": "toggle",
        "default": true,
        "desc": "底部的色谱条带。",
        "publicKey": "showColorBand",
        "publicLabel": "色谱条",
        "description": "底部的色谱条带。"
      },
      {
        "key": "showWordmark",
        "label": "品牌标识",
        "type": "toggle",
        "default": true,
        "desc": "左上角的品牌标识。",
        "publicKey": "showWordmark",
        "publicLabel": "品牌标识",
        "description": "左上角的品牌标识。"
      },
      {
        "key": "showSheetLabel",
        "label": "页码标签",
        "type": "toggle",
        "default": true,
        "desc": "右上角的章节 / 页码标签。",
        "publicKey": "showSheetLabel",
        "publicLabel": "页码标签",
        "description": "右上角的章节 / 页码标签。"
      }
    ],
    "defaultProps": {
      "theme": "color",
      "bgColor": "#2c44a0",
      "showBigNumber": true,
      "keywordCount": 4,
      "accentColor": "#2c44a0",
      "showColorBand": true,
      "showWordmark": true,
      "showSheetLabel": true,
      "copy": {
        "brand": "AICL",
        "barMeta": "SECTION DIVIDER",
        "eyebrow": "CHAPTER 04",
        "num": "04",
        "title": "资本与地区结构",
        "sub": "轮次、投资人和地理集群",
        "sheet": "49 / 80",
        "keywords": [
          "后期轮",
          "战略投资",
          "云资源",
          "湾区",
          "纽约",
          "西雅图"
        ]
      }
    }
  },
  {
    "key": "theme05_page054",
    "themeKey": "theme05",
    "pageNumber": 54,
    "layout": "THEME05-054",
    "slot": "signal",
    "label": "早期信号表 Signal",
    "bgClass": "",
    "controls": [
      {
        "key": "rowCount",
        "label": "数据行数",
        "type": "slider",
        "default": 4,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "表格的数据行数量。",
        "publicKey": "rowCount",
        "publicLabel": "数据行数",
        "description": "表格的数据行数量。"
      },
      {
        "key": "showSignal",
        "label": "信号强度列",
        "type": "toggle",
        "default": true,
        "desc": "末尾的信号强度点阵列（关闭则收起该列）。",
        "publicKey": "showSignal",
        "publicLabel": "信号强度列",
        "description": "末尾的信号强度点阵列（关闭则收起该列）。"
      },
      {
        "key": "scaleMax",
        "label": "信号刻度上限",
        "type": "slider",
        "default": 5,
        "min": 3,
        "max": 5,
        "step": 1,
        "desc": "信号点阵的总刻度数（点的总个数）。",
        "publicKey": "scaleMax",
        "publicLabel": "信号刻度上限",
        "description": "信号点阵的总刻度数（点的总个数）。"
      },
      {
        "key": "sortDescending",
        "label": "按信号降序",
        "type": "toggle",
        "default": true,
        "desc": "是否按信号强度由高到低排序行。",
        "publicKey": "sortDescending",
        "publicLabel": "按信号降序",
        "description": "是否按信号强度由高到低排序行。"
      },
      {
        "key": "zebra",
        "label": "斑马纹",
        "type": "toggle",
        "default": false,
        "desc": "隔行底色，便于横向读取。",
        "publicKey": "zebra",
        "publicLabel": "斑马纹",
        "description": "隔行底色，便于横向读取。"
      },
      {
        "key": "focusEnabled",
        "label": "重点行",
        "type": "toggle",
        "default": true,
        "desc": "是否突出某一行。",
        "publicKey": "focusEnabled",
        "publicLabel": "重点行",
        "description": "是否突出某一行。"
      },
      {
        "key": "focusIndex",
        "label": "重点行序号",
        "type": "slider",
        "default": 1,
        "min": 1,
        "max": 4,
        "step": 1,
        "desc": "被突出的行序号（按当前排序后顺序，从 1 起）。",
        "publicKey": "focusIndex",
        "publicLabel": "重点行序号",
        "description": "被突出的行序号（按当前排序后顺序，从 1 起）。"
      },
      {
        "key": "showIntro",
        "label": "引导栏",
        "type": "toggle",
        "default": true,
        "desc": "表格上方的引导文案与一对头部指标。",
        "publicKey": "showIntro",
        "publicLabel": "引导栏",
        "description": "表格上方的引导文案与一对头部指标。"
      },
      {
        "key": "accentColor",
        "label": "强调色",
        "type": "color",
        "default": "#efbe2e",
        "options": [
          "#d8402e",
          "#e2742c",
          "#efbe2e",
          "#3c9a52",
          "#4da0c6",
          "#2c44a0",
          "#7a3c90"
        ],
        "desc": "眉标 / 头部指标 / 重点行 / 信号点的强调色。",
        "publicKey": "accentColor",
        "publicLabel": "强调色",
        "description": "眉标 / 头部指标 / 重点行 / 信号点的强调色。"
      },
      {
        "key": "showConclusion",
        "label": "结论文案",
        "type": "toggle",
        "default": true,
        "desc": "表格下方的一句装饰性结论。",
        "publicKey": "showConclusion",
        "publicLabel": "结论文案",
        "description": "表格下方的一句装饰性结论。"
      },
      {
        "key": "showSheetLabel",
        "label": "页码标签",
        "type": "toggle",
        "default": true,
        "desc": "右上角的页码 / 章节标签。",
        "publicKey": "showSheetLabel",
        "publicLabel": "页码标签",
        "description": "右上角的页码 / 章节标签。"
      }
    ],
    "defaultProps": {
      "rowCount": 4,
      "showSignal": true,
      "scaleMax": 5,
      "sortDescending": true,
      "zebra": false,
      "focusEnabled": true,
      "focusIndex": 1,
      "showIntro": true,
      "accentColor": "#efbe2e",
      "showConclusion": true,
      "showSheetLabel": true,
      "copy": {
        "eyebrow": "EARLY STAGE SIGNAL",
        "title": "新主题萌芽",
        "sheet": "SIGNAL · 50 / 80",
        "lead": "Seed 和 A 轮金额较小，但代表新主题正在形成。",
        "headlines": [
          [
            "早期轮占事件数",
            "20.6",
            "%"
          ],
          [
            "Seed + A 轮事件",
            "20",
            "笔"
          ]
        ],
        "headers": [
          "早期主题",
          "早期轮数据",
          "代表方向",
          "信号强度"
        ],
        "signalHead": "SIGNAL",
        "rows": [
          {
            "k": "智能体",
            "en": "Agents",
            "count": "12",
            "unit": "笔",
            "amt": "1.8 亿美元",
            "dir": "任务编排 · 工具调用",
            "sig": 4
          },
          {
            "k": "安全对齐",
            "en": "Safety",
            "count": "8",
            "unit": "笔",
            "amt": "1.2 亿美元",
            "dir": "评测 · 对齐 · 红队",
            "sig": 3
          },
          {
            "k": "具身智能",
            "en": "Embodied",
            "count": "6",
            "unit": "笔",
            "amt": "0.9 亿美元",
            "dir": "操作策略 · 机器人",
            "sig": 3
          },
          {
            "k": "行业模型",
            "en": "Vertical",
            "count": "5",
            "unit": "笔",
            "amt": "0.7 亿美元",
            "dir": "法律 · 医疗 · 金融",
            "sig": 2
          }
        ],
        "conclusion": "小金额交易往往藏着下一轮主题。"
      }
    }
  },
  {
    "key": "theme05_page055",
    "themeKey": "theme05",
    "pageNumber": 55,
    "layout": "THEME05-055",
    "slot": "composite",
    "label": "结构拆解 Composite",
    "bgClass": "",
    "controls": [
      {
        "key": "partCount",
        "label": "构成分项数",
        "type": "slider",
        "default": 4,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "交易结构的构成分项数量。",
        "publicKey": "partCount",
        "publicLabel": "构成分项数",
        "description": "交易结构的构成分项数量。"
      },
      {
        "key": "chartType",
        "label": "图表类型",
        "type": "radio",
        "default": "bars",
        "options": [
          {
            "value": "bars",
            "label": "分项条"
          },
          {
            "value": "stack",
            "label": "百分比堆叠"
          }
        ],
        "desc": "构成呈现方式：逐项横向条 / 单条 100% 堆叠。",
        "publicKey": "chartType",
        "publicLabel": "图表类型",
        "description": "构成呈现方式：逐项横向条 / 单条 100% 堆叠。"
      },
      {
        "key": "showAnchor",
        "label": "主体锚点卡",
        "type": "toggle",
        "default": true,
        "desc": "左侧的深色主体卡（巨号读数）。",
        "publicKey": "showAnchor",
        "publicLabel": "主体锚点卡",
        "description": "左侧的深色主体卡（巨号读数）。"
      },
      {
        "key": "focusEnabled",
        "label": "重点分项",
        "type": "toggle",
        "default": false,
        "desc": "是否突出某一分项（其余淡出）。",
        "publicKey": "focusEnabled",
        "publicLabel": "重点分项",
        "description": "是否突出某一分项（其余淡出）。"
      },
      {
        "key": "focusIndex",
        "label": "重点分项序号",
        "type": "slider",
        "default": 1,
        "min": 1,
        "max": 4,
        "step": 1,
        "desc": "被突出的分项序号（从 1 起）。",
        "publicKey": "focusIndex",
        "publicLabel": "重点分项序号",
        "description": "被突出的分项序号（从 1 起）。"
      },
      {
        "key": "showValue",
        "label": "分项数值",
        "type": "toggle",
        "default": true,
        "desc": "各分项的百分比数值标注。",
        "publicKey": "showValueLabels",
        "publicLabel": "分项数值",
        "description": "各分项的百分比数值标注。"
      },
      {
        "key": "showLegend",
        "label": "图例",
        "type": "toggle",
        "default": true,
        "desc": "100% 堆叠模式下方的分项图例。",
        "publicKey": "showLegend",
        "publicLabel": "图例",
        "description": "100% 堆叠模式下方的分项图例。"
      },
      {
        "key": "accentColor",
        "label": "强调色",
        "type": "color",
        "default": "#4da0c6",
        "options": [
          "#d8402e",
          "#e2742c",
          "#efbe2e",
          "#3c9a52",
          "#4da0c6",
          "#2c44a0",
          "#7a3c90"
        ],
        "desc": "眉标 / 主体卡巨号读数的强调色。",
        "publicKey": "accentColor",
        "publicLabel": "强调色",
        "description": "眉标 / 主体卡巨号读数的强调色。"
      },
      {
        "key": "showConclusion",
        "label": "结论文案",
        "type": "toggle",
        "default": true,
        "desc": "底部的一句装饰性结论。",
        "publicKey": "showConclusion",
        "publicLabel": "结论文案",
        "description": "底部的一句装饰性结论。"
      },
      {
        "key": "showSheetLabel",
        "label": "页码标签",
        "type": "toggle",
        "default": true,
        "desc": "右上角的页码 / 章节标签。",
        "publicKey": "showSheetLabel",
        "publicLabel": "页码标签",
        "description": "右上角的页码 / 章节标签。"
      }
    ],
    "defaultProps": {
      "partCount": 4,
      "chartType": "bars",
      "showAnchor": true,
      "focusEnabled": false,
      "focusIndex": 1,
      "showValue": true,
      "showLegend": true,
      "accentColor": "#4da0c6",
      "showConclusion": true,
      "showSheetLabel": true,
      "copy": {
        "eyebrow": "UNDISCLOSED MEGA ROUNDS",
        "title": "复杂交易结构",
        "sheet": "STRUCTURE · 51 / 80",
        "lead": "未披露轮次常对应战略投资、债务组合或云资源置换。",
        "cap": "交易结构拆解",
        "capUnit": "DEAL STRUCTURE",
        "anchor": {
          "en": "UNDISCLOSED ROUND",
          "zh": "未披露巨额轮",
          "num": "18.6",
          "unit": "亿美元",
          "sub": "平均单笔 · 22 笔事件"
        },
        "parts": [
          {
            "k": "云资源置换",
            "en": "Cloud Credits",
            "v": 39,
            "c": "#4da0c6"
          },
          {
            "k": "战略投资",
            "en": "Strategic",
            "v": 31,
            "c": "#2c44a0"
          },
          {
            "k": "债务组合",
            "en": "Debt",
            "v": 18,
            "c": "#7a3c90"
          },
          {
            "k": "普通股权",
            "en": "Equity",
            "v": 12,
            "c": "#3c9a52"
          }
        ],
        "conclusion": "AI 融资越来越像资源组合交易。"
      }
    }
  },
  {
    "key": "theme05_page056",
    "themeKey": "theme05",
    "pageNumber": 56,
    "layout": "THEME05-056",
    "slot": "source",
    "label": "资本来源 Source",
    "bgClass": "",
    "controls": [
      {
        "key": "typeCount",
        "label": "分类数量",
        "type": "slider",
        "default": 4,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "分类类型环图的分段数量。",
        "publicKey": "categoryCount",
        "publicLabel": "分类数量",
        "description": "分类类型环图的分段数量。"
      },
      {
        "key": "chartType",
        "label": "图表类型",
        "type": "radio",
        "default": "donut",
        "options": [
          {
            "value": "donut",
            "label": "环形"
          },
          {
            "value": "pie",
            "label": "饼图"
          }
        ],
        "desc": "占比图呈现方式：环形（中心显示重点）/ 饼图。",
        "publicKey": "chartType",
        "publicLabel": "图表类型",
        "description": "占比图呈现方式：环形（中心显示重点）/ 饼图。"
      },
      {
        "key": "focusEnabled",
        "label": "重点类型",
        "type": "toggle",
        "default": true,
        "desc": "是否突出某一类型（环形中心显示该项）。",
        "publicKey": "focusEnabled",
        "publicLabel": "重点类型",
        "description": "是否突出某一类型（环形中心显示该项）。"
      },
      {
        "key": "focusIndex",
        "label": "重点类型序号",
        "type": "slider",
        "default": 1,
        "min": 1,
        "max": 4,
        "step": 1,
        "desc": "被突出的分类类型序号（从 1 起）。",
        "publicKey": "focusIndex",
        "publicLabel": "重点类型序号",
        "description": "被突出的分类类型序号（从 1 起）。"
      },
      {
        "key": "showLegend",
        "label": "类型图例",
        "type": "toggle",
        "default": true,
        "desc": "环图右侧带占比的类型图例。",
        "publicKey": "showLegend",
        "publicLabel": "类型图例",
        "description": "环图右侧带占比的类型图例。"
      },
      {
        "key": "showTimeline",
        "label": "演进时间轴",
        "type": "toggle",
        "default": true,
        "desc": "底部的横向来源演进时间轴。",
        "publicKey": "showTimeline",
        "publicLabel": "演进时间轴",
        "description": "底部的横向来源演进时间轴。"
      },
      {
        "key": "nodeCount",
        "label": "时间轴节点数",
        "type": "slider",
        "default": 4,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "演进时间轴的节点数量。",
        "publicKey": "nodeCount",
        "publicLabel": "时间轴节点数",
        "description": "演进时间轴的节点数量。"
      },
      {
        "key": "timelineFocus",
        "label": "重点节点序号",
        "type": "slider",
        "default": 4,
        "min": 1,
        "max": 4,
        "step": 1,
        "desc": "被突出的时间轴节点序号（从 1 起）。",
        "publicKey": "timelineFocus",
        "publicLabel": "重点节点序号",
        "description": "被突出的时间轴节点序号（从 1 起）。"
      },
      {
        "key": "accentColor",
        "label": "强调色",
        "type": "color",
        "default": "#2c44a0",
        "options": [
          "#d8402e",
          "#e2742c",
          "#efbe2e",
          "#3c9a52",
          "#4da0c6",
          "#2c44a0",
          "#7a3c90"
        ],
        "desc": "眉标 / 环心数字 / 重点节点的强调色。",
        "publicKey": "accentColor",
        "publicLabel": "强调色",
        "description": "眉标 / 环心数字 / 重点节点的强调色。"
      },
      {
        "key": "showConclusion",
        "label": "结论文案",
        "type": "toggle",
        "default": true,
        "desc": "底部的一句装饰性结论。",
        "publicKey": "showConclusion",
        "publicLabel": "结论文案",
        "description": "底部的一句装饰性结论。"
      },
      {
        "key": "showSheetLabel",
        "label": "页码标签",
        "type": "toggle",
        "default": true,
        "desc": "右上角的页码 / 章节标签。",
        "publicKey": "showSheetLabel",
        "publicLabel": "页码标签",
        "description": "右上角的页码 / 章节标签。"
      }
    ],
    "defaultProps": {
      "typeCount": 4,
      "chartType": "donut",
      "focusEnabled": true,
      "focusIndex": 1,
      "showLegend": true,
      "showTimeline": true,
      "nodeCount": 4,
      "timelineFocus": 4,
      "accentColor": "#2c44a0",
      "showConclusion": true,
      "showSheetLabel": true,
      "copy": {
        "eyebrow": "INVESTOR MIX",
        "title": "资本来源结构",
        "sheet": "TIMELINE · 52 / 80",
        "lead": "传统 VC、企业战略投资者、成长基金和云厂商共同推动 AI 大额融资。",
        "shareCap": "投资人类型分布",
        "shareUnit": "BY TYPE",
        "types": [
          {
            "name": "传统 VC",
            "en": "Venture",
            "v": 42,
            "c": "#2c44a0"
          },
          {
            "name": "企业战略",
            "en": "Strategic",
            "v": 27,
            "c": "#d8402e"
          },
          {
            "name": "成长基金",
            "en": "Growth",
            "v": 18,
            "c": "#3c9a52"
          },
          {
            "name": "云厂商相关",
            "en": "Cloud",
            "v": 13,
            "c": "#e2742c"
          }
        ],
        "timeCap": "资本来源演进",
        "timeUnit": "CAPITAL EVOLUTION",
        "nodes": [
          {
            "i": "STAGE 01",
            "t": "纯 VC 主导",
            "d": "早期由传统风险资本独立定价。"
          },
          {
            "i": "STAGE 02",
            "t": "战略资本进入",
            "d": "云厂商与大厂以资源换股权。"
          },
          {
            "i": "STAGE 03",
            "t": "成长基金加注",
            "d": "后期成长基金主导大额轮次。"
          },
          {
            "i": "STAGE 04",
            "t": "产业混合交易",
            "d": "VC + 产业 + 债务的混合结构。"
          }
        ],
        "conclusion": "钱的来源本身也是产业结构信号。"
      }
    }
  },
  {
    "key": "theme05_page057",
    "themeKey": "theme05",
    "pageNumber": 57,
    "layout": "THEME05-057",
    "slot": "resource",
    "label": "资源类型 Resource",
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
        "desc": "资源类型卡数量（2–4）。",
        "publicKey": "cardCount",
        "publicLabel": "卡片数量",
        "description": "资源类型卡数量（2–4）。"
      },
      {
        "key": "imageCount",
        "label": "图片槽数量",
        "type": "slider",
        "default": 1,
        "min": 0,
        "max": 3,
        "step": 1,
        "desc": "主视觉图片槽数量（0–3），按各图比例自适应。为 0 时卡片自动转两列网格、铺满整幅。",
        "publicKey": "imageCount",
        "publicLabel": "图片槽数量",
        "description": "主视觉图片槽数量（0–3），按各图比例自适应。为 0 时卡片自动转两列网格、铺满整幅。"
      },
      {
        "key": "imageSide",
        "label": "图片位置",
        "type": "radio",
        "default": "right",
        "options": [
          {
            "value": "right",
            "label": "右侧"
          },
          {
            "value": "left",
            "label": "左侧"
          }
        ],
        "desc": "图片相对资源卡的位置（有图片时生效）。",
        "publicKey": "imageSide",
        "publicLabel": "图片位置",
        "description": "图片相对资源卡的位置（有图片时生效）。"
      },
      {
        "key": "showValue",
        "label": "卡内数值",
        "type": "toggle",
        "default": true,
        "desc": "各资源卡内的大号数值与单位。",
        "publicKey": "showValueLabels",
        "publicLabel": "卡内数值",
        "description": "各资源卡内的大号数值与单位。"
      },
      {
        "key": "focusEnabled",
        "label": "重点卡片",
        "type": "toggle",
        "default": true,
        "desc": "是否突出某一张资源卡（其余淡出）。",
        "publicKey": "focusEnabled",
        "publicLabel": "重点卡片",
        "description": "是否突出某一张资源卡（其余淡出）。"
      },
      {
        "key": "focusIndex",
        "label": "重点卡序号",
        "type": "slider",
        "default": 1,
        "min": 1,
        "max": 4,
        "step": 1,
        "desc": "被突出的资源卡序号（从 1 起）。",
        "publicKey": "focusIndex",
        "publicLabel": "重点卡序号",
        "description": "被突出的资源卡序号（从 1 起）。"
      },
      {
        "key": "showLead",
        "label": "引导文案",
        "type": "toggle",
        "default": true,
        "desc": "标题下方的一段引导说明。",
        "publicKey": "showLead",
        "publicLabel": "引导文案",
        "description": "标题下方的一段引导说明。"
      },
      {
        "key": "showMediaCaption",
        "label": "图注",
        "type": "toggle",
        "default": true,
        "desc": "图片区上方的装饰性图注。",
        "publicKey": "showMediaCaption",
        "publicLabel": "图注",
        "description": "图片区上方的装饰性图注。"
      },
      {
        "key": "accentColor",
        "label": "强调色",
        "type": "color",
        "default": "#d8402e",
        "options": [
          "#d8402e",
          "#e2742c",
          "#efbe2e",
          "#3c9a52",
          "#4da0c6",
          "#2c44a0",
          "#7a3c90"
        ],
        "desc": "眉标 / 重点标记的强调色。",
        "publicKey": "accentColor",
        "publicLabel": "强调色",
        "description": "眉标 / 重点标记的强调色。"
      },
      {
        "key": "showConclusion",
        "label": "结论文案",
        "type": "toggle",
        "default": true,
        "desc": "底部的一句装饰性结论。",
        "publicKey": "showConclusion",
        "publicLabel": "结论文案",
        "description": "底部的一句装饰性结论。"
      },
      {
        "key": "showSheetLabel",
        "label": "页码标签",
        "type": "toggle",
        "default": true,
        "desc": "右上角的页码 / 章节标签。",
        "publicKey": "showSheetLabel",
        "publicLabel": "页码标签",
        "description": "右上角的页码 / 章节标签。"
      }
    ],
    "defaultProps": {
      "cardCount": 4,
      "imageCount": 1,
      "imageSide": "right",
      "showValue": true,
      "focusEnabled": true,
      "focusIndex": 1,
      "showLead": true,
      "showMediaCaption": true,
      "accentColor": "#d8402e",
      "showConclusion": true,
      "showSheetLabel": true,
      "copy": {
        "eyebrow": "STRATEGIC INVESTORS",
        "title": "钱以外的资源",
        "sheet": "IMAGE · 53 / 80",
        "lead": "战略投资者提供渠道、云资源、芯片供应和客户入口 —— 交易真正价值经常不只在现金，而在关键资源绑定。",
        "tiles": [
          {
            "en": "CLOUD CREDIT",
            "zh": "云资源授信",
            "v": "118",
            "unit": "亿美元",
            "c": "#2c44a0"
          },
          {
            "en": "CO-SELLING",
            "zh": "联合销售",
            "v": "36",
            "unit": "起",
            "c": "#d8402e"
          },
          {
            "en": "CHIP SUPPLY",
            "zh": "芯片供应",
            "v": "22",
            "unit": "起",
            "c": "#3c9a52"
          },
          {
            "en": "DATA PARTNERSHIP",
            "zh": "数据合作",
            "v": "17",
            "unit": "起",
            "c": "#e2742c"
          }
        ],
        "mediaCap": "资源绑定",
        "mediaUnit": "DROP IMAGE",
        "conclusion": "AI 公司融资是在锁定未来资源。"
      }
    }
  },
  {
    "key": "theme05_page058",
    "themeKey": "theme05",
    "pageNumber": 58,
    "layout": "THEME05-058",
    "slot": "loop",
    "label": "投资闭环 Loop",
    "bgClass": "",
    "controls": [
      {
        "key": "nodeCount",
        "label": "联盟节点数",
        "type": "slider",
        "default": 4,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "云厂商联盟条形的数量（2–4）。",
        "publicKey": "nodeCount",
        "publicLabel": "联盟节点数",
        "description": "云厂商联盟条形的数量（2–4）。"
      },
      {
        "key": "focusEnabled",
        "label": "重点节点",
        "type": "toggle",
        "default": true,
        "desc": "是否突出某一条联盟条（其余淡出）。",
        "publicKey": "focusEnabled",
        "publicLabel": "重点节点",
        "description": "是否突出某一条联盟条（其余淡出）。"
      },
      {
        "key": "focusIndex",
        "label": "重点节点序号",
        "type": "slider",
        "default": 1,
        "min": 1,
        "max": 4,
        "step": 1,
        "desc": "被突出的联盟条序号（按数值由高到低，从 1 起）。",
        "publicKey": "focusIndex",
        "publicLabel": "重点节点序号",
        "description": "被突出的联盟条序号（按数值由高到低，从 1 起）。"
      },
      {
        "key": "showValue",
        "label": "条形数值",
        "type": "toggle",
        "default": true,
        "desc": "各联盟条末端的数值标注。",
        "publicKey": "showValueLabels",
        "publicLabel": "条形数值",
        "description": "各联盟条末端的数值标注。"
      },
      {
        "key": "showLoop",
        "label": "闭环面板",
        "type": "toggle",
        "default": true,
        "desc": "右侧的资金—算力闭环面板（阶段 + 回流箭头）。",
        "publicKey": "showLoop",
        "publicLabel": "闭环面板",
        "description": "右侧的资金—算力闭环面板（阶段 + 回流箭头）。"
      },
      {
        "key": "stageCount",
        "label": "闭环阶段数",
        "type": "slider",
        "default": 3,
        "min": 2,
        "max": 3,
        "step": 1,
        "desc": "闭环面板内的阶段数量（2–3）。",
        "publicKey": "stageCount",
        "publicLabel": "闭环阶段数",
        "description": "闭环面板内的阶段数量（2–3）。"
      },
      {
        "key": "showReturn",
        "label": "回流箭头",
        "type": "toggle",
        "default": true,
        "desc": "闭环面板的「价值回流」回路箭头（构成可见闭环）。",
        "publicKey": "showReturn",
        "publicLabel": "回流箭头",
        "description": "闭环面板的「价值回流」回路箭头（构成可见闭环）。"
      },
      {
        "key": "accentColor",
        "label": "强调色",
        "type": "color",
        "default": "#e2742c",
        "options": [
          "#d8402e",
          "#e2742c",
          "#efbe2e",
          "#3c9a52",
          "#4da0c6",
          "#2c44a0",
          "#7a3c90"
        ],
        "desc": "眉标 / 重点条 / 闭环面板的强调色。",
        "publicKey": "accentColor",
        "publicLabel": "强调色",
        "description": "眉标 / 重点条 / 闭环面板的强调色。"
      },
      {
        "key": "showConclusion",
        "label": "结论文案",
        "type": "toggle",
        "default": true,
        "desc": "底部的一句装饰性结论。",
        "publicKey": "showConclusion",
        "publicLabel": "结论文案",
        "description": "底部的一句装饰性结论。"
      },
      {
        "key": "showSheetLabel",
        "label": "页码标签",
        "type": "toggle",
        "default": true,
        "desc": "右上角的页码 / 章节标签。",
        "publicKey": "showSheetLabel",
        "publicLabel": "页码标签",
        "description": "右上角的页码 / 章节标签。"
      }
    ],
    "defaultProps": {
      "nodeCount": 4,
      "focusEnabled": true,
      "focusIndex": 1,
      "showValue": true,
      "showLoop": true,
      "stageCount": 3,
      "showReturn": true,
      "accentColor": "#e2742c",
      "showConclusion": true,
      "showSheetLabel": true,
      "copy": {
        "eyebrow": "CLOUD ALLIANCES",
        "title": "投资与算力消费闭环",
        "sheet": "CHART · 54 / 80",
        "lead": "云厂商投资 AI 公司，并通过算力消费回收价值 —— 云投资本质上是在锁定未来算力需求。",
        "barCap": "云厂商联盟",
        "barUnit": "BY VENDOR · 亿美元",
        "vendors": [
          {
            "en": "AZURE",
            "zh": "Azure 相关",
            "v": 88,
            "c": "#3c9a52"
          },
          {
            "en": "AWS",
            "zh": "AWS 相关",
            "v": 74,
            "c": "#e2742c"
          },
          {
            "en": "GOOGLE CLOUD",
            "zh": "Google Cloud 相关",
            "v": 69,
            "c": "#2c44a0"
          },
          {
            "en": "ORACLE CLOUD",
            "zh": "Oracle Cloud 相关",
            "v": 21,
            "c": "#d8402e"
          }
        ],
        "loopCap": "资金—算力闭环",
        "loopUnit": "CLOSED LOOP",
        "stages": [
          {
            "i": "01",
            "t": "资本投入",
            "d": "云厂商以现金 + 信用入股模型公司。"
          },
          {
            "i": "02",
            "t": "算力消费",
            "d": "融资被投回云上训练与推理。"
          },
          {
            "i": "03",
            "t": "价值回收",
            "d": "云收入与算力需求被同步锁定。"
          }
        ],
        "returnLabel": "价值回流",
        "conclusion": "云资源正在成为融资交易的一部分。"
      }
    }
  },
  {
    "key": "theme05_page059",
    "themeKey": "theme05",
    "pageNumber": 59,
    "layout": "THEME05-059",
    "slot": "orbit",
    "label": "生态环图 Orbit",
    "bgClass": "",
    "controls": [
      {
        "key": "nodeCount",
        "label": "卫星节点数",
        "type": "slider",
        "default": 4,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "围绕核心的生态节点数量（2–4）。",
        "publicKey": "nodeCount",
        "publicLabel": "卫星节点数",
        "description": "围绕核心的生态节点数量（2–4）。"
      },
      {
        "key": "imageCount",
        "label": "图片槽数量",
        "type": "slider",
        "default": 1,
        "min": 0,
        "max": 3,
        "step": 1,
        "desc": "主视觉图片槽数量（0–3），按各图比例自适应。为 0 时环图铺满整幅并显示侧栏图例。",
        "publicKey": "imageCount",
        "publicLabel": "图片槽数量",
        "description": "主视觉图片槽数量（0–3），按各图比例自适应。为 0 时环图铺满整幅并显示侧栏图例。"
      },
      {
        "key": "imageSide",
        "label": "图片位置",
        "type": "radio",
        "default": "right",
        "options": [
          {
            "value": "right",
            "label": "右侧"
          },
          {
            "value": "left",
            "label": "左侧"
          }
        ],
        "desc": "图片相对环图的位置（有图片时生效）。",
        "publicKey": "imageSide",
        "publicLabel": "图片位置",
        "description": "图片相对环图的位置（有图片时生效）。"
      },
      {
        "key": "showSpokes",
        "label": "连接轨道",
        "type": "toggle",
        "default": true,
        "desc": "核心到各节点的放射连线与同心轨道环。",
        "publicKey": "showSpokes",
        "publicLabel": "连接轨道",
        "description": "核心到各节点的放射连线与同心轨道环。"
      },
      {
        "key": "showValue",
        "label": "节点数值",
        "type": "toggle",
        "default": true,
        "desc": "各节点内的数值标注（节点尺寸已按数值缩放）。",
        "publicKey": "showValueLabels",
        "publicLabel": "节点数值",
        "description": "各节点内的数值标注（节点尺寸已按数值缩放）。"
      },
      {
        "key": "focusEnabled",
        "label": "重点节点",
        "type": "toggle",
        "default": true,
        "desc": "是否突出某一个节点（其余淡出）。",
        "publicKey": "focusEnabled",
        "publicLabel": "重点节点",
        "description": "是否突出某一个节点（其余淡出）。"
      },
      {
        "key": "focusIndex",
        "label": "重点节点序号",
        "type": "slider",
        "default": 1,
        "min": 1,
        "max": 4,
        "step": 1,
        "desc": "被突出的节点序号（从 1 起）。",
        "publicKey": "focusIndex",
        "publicLabel": "重点节点序号",
        "description": "被突出的节点序号（从 1 起）。"
      },
      {
        "key": "showMediaCaption",
        "label": "图注",
        "type": "toggle",
        "default": true,
        "desc": "图片区上方的装饰性图注。",
        "publicKey": "showMediaCaption",
        "publicLabel": "图注",
        "description": "图片区上方的装饰性图注。"
      },
      {
        "key": "accentColor",
        "label": "强调色",
        "type": "color",
        "default": "#3c9a52",
        "options": [
          "#d8402e",
          "#e2742c",
          "#efbe2e",
          "#3c9a52",
          "#4da0c6",
          "#2c44a0",
          "#7a3c90"
        ],
        "desc": "眉标 / 核心 / 重点节点的强调色。",
        "publicKey": "accentColor",
        "publicLabel": "强调色",
        "description": "眉标 / 核心 / 重点节点的强调色。"
      },
      {
        "key": "showConclusion",
        "label": "结论文案",
        "type": "toggle",
        "default": true,
        "desc": "底部的一句装饰性结论。",
        "publicKey": "showConclusion",
        "publicLabel": "结论文案",
        "description": "底部的一句装饰性结论。"
      },
      {
        "key": "showSheetLabel",
        "label": "页码标签",
        "type": "toggle",
        "default": true,
        "desc": "右上角的页码 / 章节标签。",
        "publicKey": "showSheetLabel",
        "publicLabel": "页码标签",
        "description": "右上角的页码 / 章节标签。"
      }
    ],
    "defaultProps": {
      "nodeCount": 4,
      "imageCount": 1,
      "imageSide": "right",
      "showSpokes": true,
      "showValue": true,
      "focusEnabled": true,
      "focusIndex": 1,
      "showMediaCaption": true,
      "accentColor": "#3c9a52",
      "showConclusion": true,
      "showSheetLabel": true,
      "copy": {
        "eyebrow": "NVIDIA ECOSYSTEM",
        "title": "GPU 资源链条",
        "sheet": "IMAGE · 55 / 80",
        "lead": "NVIDIA 生态内融资围绕 GPU、网络、集群运维和推理优化展开。",
        "hub": {
          "en": "GPU",
          "zh": "算力核心"
        },
        "nodes": [
          {
            "en": "GPU CLOUD",
            "zh": "GPU 云",
            "v": 64,
            "c": "#3c9a52"
          },
          {
            "en": "CLUSTER OPS",
            "zh": "集群管理",
            "v": 12,
            "c": "#2c44a0"
          },
          {
            "en": "INFERENCE",
            "zh": "推理优化",
            "v": 9,
            "c": "#e2742c"
          },
          {
            "en": "INTERCONNECT",
            "zh": "芯片互联",
            "v": 7,
            "c": "#d8402e"
          }
        ],
        "mediaCap": "GPU 生态",
        "mediaUnit": "DROP IMAGE",
        "conclusion": "算力供给能力正在变成融资能力。"
      }
    }
  },
  {
    "key": "theme05_page060",
    "themeKey": "theme05",
    "pageNumber": 60,
    "layout": "THEME05-060",
    "slot": "dominance",
    "label": "占比大数字 Dominance",
    "bgClass": "",
    "controls": [
      {
        "key": "showGauge",
        "label": "份额量规",
        "type": "toggle",
        "default": true,
        "desc": "右侧把主数字渲染成「部分-整体」的占比量规。",
        "publicKey": "showGauge",
        "publicLabel": "份额量规",
        "description": "右侧把主数字渲染成「部分-整体」的占比量规。"
      },
      {
        "key": "gaugeStyle",
        "label": "量规样式",
        "type": "radio",
        "default": "bar",
        "options": [
          {
            "value": "bar",
            "label": "竖向占比"
          },
          {
            "value": "grid",
            "label": "点阵"
          }
        ],
        "desc": "占比量规呈现：竖向填充条 / 10×10 点阵。",
        "publicKey": "gaugeStyle",
        "publicLabel": "量规样式",
        "description": "占比量规呈现：竖向填充条 / 10×10 点阵。"
      },
      {
        "key": "numberAlign",
        "label": "数字对齐",
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
        "desc": "主数字块的对齐方式（关闭量规时整幅居中更佳）。",
        "publicKey": "numberAlign",
        "publicLabel": "数字对齐",
        "description": "主数字块的对齐方式（关闭量规时整幅居中更佳）。"
      },
      {
        "key": "auxCount",
        "label": "辅助指标数",
        "type": "slider",
        "default": 3,
        "min": 0,
        "max": 3,
        "step": 1,
        "desc": "主数字下方的支撑指标数量（0 隐藏整行）。",
        "publicKey": "auxCount",
        "publicLabel": "辅助指标数",
        "description": "主数字下方的支撑指标数量（0 隐藏整行）。"
      },
      {
        "key": "showUnit",
        "label": "数字单位",
        "type": "toggle",
        "default": true,
        "desc": "主数字后的单位后缀。",
        "publicKey": "showUnit",
        "publicLabel": "数字单位",
        "description": "主数字后的单位后缀。"
      },
      {
        "key": "showCaption",
        "label": "数字说明",
        "type": "toggle",
        "default": true,
        "desc": "主数字下方的解释说明。",
        "publicKey": "showCaption",
        "publicLabel": "数字说明",
        "description": "主数字下方的解释说明。"
      },
      {
        "key": "showMessage",
        "label": "支撑文案",
        "type": "toggle",
        "default": true,
        "desc": "说明下方的一段支撑性文案。",
        "publicKey": "showMessage",
        "publicLabel": "支撑文案",
        "description": "说明下方的一段支撑性文案。"
      },
      {
        "key": "accentColor",
        "label": "强调色",
        "type": "color",
        "default": "#2c44a0",
        "options": [
          "#d8402e",
          "#e2742c",
          "#efbe2e",
          "#3c9a52",
          "#4da0c6",
          "#2c44a0",
          "#7a3c90"
        ],
        "desc": "主数字 / 眉标 / 量规填充的强调色。",
        "publicKey": "accentColor",
        "publicLabel": "强调色",
        "description": "主数字 / 眉标 / 量规填充的强调色。"
      },
      {
        "key": "showWordmark",
        "label": "品牌标识",
        "type": "toggle",
        "default": true,
        "desc": "左下角的 PULSE 品牌标识。",
        "publicKey": "showWordmark",
        "publicLabel": "品牌标识",
        "description": "左下角的 PULSE 品牌标识。"
      },
      {
        "key": "showColorBand",
        "label": "装饰色谱条",
        "type": "toggle",
        "default": true,
        "desc": "右下角的装饰性 TR-808 色谱条。",
        "publicKey": "showColorBand",
        "publicLabel": "装饰色谱条",
        "description": "右下角的装饰性 TR-808 色谱条。"
      },
      {
        "key": "showSheetLabel",
        "label": "页码标签",
        "type": "toggle",
        "default": true,
        "desc": "右上角的页码 / 章节标签。",
        "publicKey": "showSheetLabel",
        "publicLabel": "页码标签",
        "description": "右上角的页码 / 章节标签。"
      }
    ],
    "defaultProps": {
      "showGauge": true,
      "gaugeStyle": "bar",
      "numberAlign": "left",
      "auxCount": 3,
      "showUnit": true,
      "showCaption": true,
      "showMessage": true,
      "accentColor": "#2c44a0",
      "showWordmark": true,
      "showColorBand": true,
      "showSheetLabel": true,
      "copy": {
        "eyebrow": "BAY AREA CLUSTER",
        "title": "最大地理中心",
        "sheet": "BIG NUMBER · 56 / 80",
        "number": "63.9",
        "unit": "%",
        "pct": 63.9,
        "caption": "旧金山湾区融资额占比",
        "message": "优势来自人才密度、资本网络、云厂商和模型实验室邻近。",
        "shareLabel": "湾区",
        "restLabel": "其余地区",
        "aux": [
          [
            "其余地区合计",
            "36.1",
            "%"
          ],
          [
            "枢纽城市",
            "旧金山",
            ""
          ],
          [
            "集中度排名",
            "TOP 1",
            ""
          ]
        ],
        "conclusion": "湾区仍是 AI 资本重力中心。"
      }
    }
  },
  {
    "key": "theme05_page061",
    "themeKey": "theme05",
    "pageNumber": 61,
    "layout": "THEME05-061",
    "slot": "region",
    "label": "地理身份 Region",
    "bgClass": "",
    "controls": [
      {
        "key": "imageCount",
        "label": "图片槽数量",
        "type": "slider",
        "default": 1,
        "min": 0,
        "max": 3,
        "step": 1,
        "desc": "主视觉图片槽数量（0–3），按各图比例自适应。为 0 时身份卡铺满整幅、指标转两列。",
        "publicKey": "imageCount",
        "publicLabel": "图片槽数量",
        "description": "主视觉图片槽数量（0–3），按各图比例自适应。为 0 时身份卡铺满整幅、指标转两列。"
      },
      {
        "key": "imageSide",
        "label": "图片位置",
        "type": "radio",
        "default": "right",
        "options": [
          {
            "value": "right",
            "label": "右侧"
          },
          {
            "value": "left",
            "label": "左侧"
          }
        ],
        "desc": "图片相对身份卡的位置（有图片时生效）。",
        "publicKey": "imageSide",
        "publicLabel": "图片位置",
        "description": "图片相对身份卡的位置（有图片时生效）。"
      },
      {
        "key": "cardTheme",
        "label": "身份卡主题",
        "type": "radio",
        "default": "paper",
        "options": [
          {
            "value": "paper",
            "label": "纸色"
          },
          {
            "value": "dark",
            "label": "深色"
          },
          {
            "value": "color",
            "label": "色块"
          }
        ],
        "desc": "身份卡背景：纸色 / 深色 / 强调色块。",
        "publicKey": "cardTheme",
        "publicLabel": "身份卡主题",
        "description": "身份卡背景：纸色 / 深色 / 强调色块。"
      },
      {
        "key": "metricCount",
        "label": "指标行数",
        "type": "slider",
        "default": 4,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "身份卡内的指标行数。",
        "publicKey": "metricCount",
        "publicLabel": "指标行数",
        "description": "身份卡内的指标行数。"
      },
      {
        "key": "tagCount",
        "label": "标签数量",
        "type": "slider",
        "default": 4,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "分类 / 主题标签 chip 数量（0 隐藏整行）。",
        "publicKey": "categoryCount",
        "publicLabel": "标签数量",
        "description": "分类 / 主题标签 chip 数量（0 隐藏整行）。"
      },
      {
        "key": "showLocator",
        "label": "定位标签",
        "type": "toggle",
        "default": true,
        "desc": "地名下方的方位 / 坐标定位标签。",
        "publicKey": "showLocator",
        "publicLabel": "定位标签",
        "description": "地名下方的方位 / 坐标定位标签。"
      },
      {
        "key": "focusEnabled",
        "label": "重点指标",
        "type": "toggle",
        "default": false,
        "desc": "是否突出某一条指标行。",
        "publicKey": "focusEnabled",
        "publicLabel": "重点指标",
        "description": "是否突出某一条指标行。"
      },
      {
        "key": "focusIndex",
        "label": "重点指标序号",
        "type": "slider",
        "default": 1,
        "min": 1,
        "max": 4,
        "step": 1,
        "desc": "被突出的指标行序号（从 1 起）。",
        "publicKey": "focusIndex",
        "publicLabel": "重点指标序号",
        "description": "被突出的指标行序号（从 1 起）。"
      },
      {
        "key": "showLead",
        "label": "引导文案",
        "type": "toggle",
        "default": true,
        "desc": "地名下方的一段引导说明。",
        "publicKey": "showLead",
        "publicLabel": "引导文案",
        "description": "地名下方的一段引导说明。"
      },
      {
        "key": "showMediaCaption",
        "label": "图注",
        "type": "toggle",
        "default": true,
        "desc": "图片区上方的装饰性图注。",
        "publicKey": "showMediaCaption",
        "publicLabel": "图注",
        "description": "图片区上方的装饰性图注。"
      },
      {
        "key": "accentColor",
        "label": "强调色",
        "type": "color",
        "default": "#2c44a0",
        "options": [
          "#d8402e",
          "#e2742c",
          "#efbe2e",
          "#3c9a52",
          "#4da0c6",
          "#2c44a0",
          "#7a3c90"
        ],
        "desc": "眉标 / 强调条 /「色块」主题身份卡的颜色。",
        "publicKey": "accentColor",
        "publicLabel": "强调色",
        "description": "眉标 / 强调条 /「色块」主题身份卡的颜色。"
      },
      {
        "key": "showConclusion",
        "label": "结论文案",
        "type": "toggle",
        "default": true,
        "desc": "底部的一句装饰性结论。",
        "publicKey": "showConclusion",
        "publicLabel": "结论文案",
        "description": "底部的一句装饰性结论。"
      },
      {
        "key": "showSheetLabel",
        "label": "页码标签",
        "type": "toggle",
        "default": true,
        "desc": "右上角的页码 / 章节标签。",
        "publicKey": "showSheetLabel",
        "publicLabel": "页码标签",
        "description": "右上角的页码 / 章节标签。"
      }
    ],
    "defaultProps": {
      "imageCount": 1,
      "imageSide": "right",
      "cardTheme": "paper",
      "metricCount": 4,
      "tagCount": 4,
      "showLocator": true,
      "focusEnabled": false,
      "focusIndex": 1,
      "showLead": true,
      "showMediaCaption": true,
      "accentColor": "#2c44a0",
      "showConclusion": true,
      "showSheetLabel": true,
      "copy": {
        "eyebrow": "NEW YORK CLUSTER",
        "title": "行业客户优势",
        "sheet": "IMAGE · 57 / 80",
        "cluster": "NEW YORK",
        "locale": "纽约集群",
        "locator": "EAST · 40.7°N",
        "lead": "纽约 AI 融资以金融、媒体、企业服务和法律 AI 为主 —— 优势不在基础模型，而在高价值行业客户。",
        "tags": [
          "金融",
          "媒体",
          "企业服务",
          "法律 AI"
        ],
        "metrics": [
          [
            "融资额",
            "120",
            "亿美元"
          ],
          [
            "市场占比",
            "12.4",
            "%"
          ],
          [
            "事件数",
            "14",
            "笔"
          ],
          [
            "平均单笔",
            "8.6",
            "亿美元"
          ]
        ],
        "mediaCap": "城市场景",
        "mediaUnit": "DROP IMAGE",
        "conclusion": "行业客户密度决定垂直应用机会。"
      }
    }
  },
  {
    "key": "theme05_page062",
    "themeKey": "theme05",
    "pageNumber": 62,
    "layout": "THEME05-062",
    "slot": "locale",
    "label": "区域定位 Locale",
    "bgClass": "",
    "controls": [
      {
        "key": "imageCount",
        "label": "图片槽数量",
        "type": "slider",
        "default": 1,
        "min": 0,
        "max": 3,
        "step": 1,
        "desc": "主视觉图片槽数量（0–3），按各图比例自适应。为 0 时定位图铺满整幅并显示侧栏图例。",
        "publicKey": "imageCount",
        "publicLabel": "图片槽数量",
        "description": "主视觉图片槽数量（0–3），按各图比例自适应。为 0 时定位图铺满整幅并显示侧栏图例。"
      },
      {
        "key": "imageSide",
        "label": "图片位置",
        "type": "radio",
        "default": "left",
        "options": [
          {
            "value": "right",
            "label": "右侧"
          },
          {
            "value": "left",
            "label": "左侧"
          }
        ],
        "desc": "图片相对定位图的位置（有图片时生效）。",
        "publicKey": "imageSide",
        "publicLabel": "图片位置",
        "description": "图片相对定位图的位置（有图片时生效）。"
      },
      {
        "key": "mosaicCols",
        "label": "网格列数",
        "type": "slider",
        "default": 7,
        "min": 5,
        "max": 9,
        "step": 1,
        "desc": "定位图的网格列数。",
        "publicKey": "mosaicCols",
        "publicLabel": "网格列数",
        "description": "定位图的网格列数。"
      },
      {
        "key": "mosaicRows",
        "label": "网格行数",
        "type": "slider",
        "default": 4,
        "min": 3,
        "max": 6,
        "step": 1,
        "desc": "定位图的网格行数。",
        "publicKey": "mosaicRows",
        "publicLabel": "网格行数",
        "description": "定位图的网格行数。"
      },
      {
        "key": "markerIndex",
        "label": "定位格序号",
        "type": "slider",
        "default": 4,
        "min": 1,
        "max": 54,
        "step": 1,
        "desc": "被标记为本集群的网格单元序号（按行优先，自动收敛到网格范围内）。",
        "publicKey": "markerIndex",
        "publicLabel": "定位格序号",
        "description": "被标记为本集群的网格单元序号（按行优先，自动收敛到网格范围内）。"
      },
      {
        "key": "showPeers",
        "label": "邻近区域",
        "type": "toggle",
        "default": true,
        "desc": "网格内装饰性的邻近区域 tinted 单元。",
        "publicKey": "showPeers",
        "publicLabel": "邻近区域",
        "description": "网格内装饰性的邻近区域 tinted 单元。"
      },
      {
        "key": "peerCount",
        "label": "邻近区域数",
        "type": "slider",
        "default": 6,
        "min": 0,
        "max": 10,
        "step": 1,
        "desc": "邻近区域 tinted 单元的数量。",
        "publicKey": "peerCount",
        "publicLabel": "邻近区域数",
        "description": "邻近区域 tinted 单元的数量。"
      },
      {
        "key": "metricCount",
        "label": "指标项数",
        "type": "slider",
        "default": 4,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "顶部指标条的指标数量。",
        "publicKey": "metricCount",
        "publicLabel": "指标项数",
        "description": "顶部指标条的指标数量。"
      },
      {
        "key": "tagCount",
        "label": "标签数量",
        "type": "slider",
        "default": 4,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "主题标签 chip 数量（0 隐藏整行）。",
        "publicKey": "tagCount",
        "publicLabel": "标签数量",
        "description": "主题标签 chip 数量（0 隐藏整行）。"
      },
      {
        "key": "showLead",
        "label": "引导文案",
        "type": "toggle",
        "default": true,
        "desc": "标题下方的一段引导说明。",
        "publicKey": "showLead",
        "publicLabel": "引导文案",
        "description": "标题下方的一段引导说明。"
      },
      {
        "key": "showMediaCaption",
        "label": "图注",
        "type": "toggle",
        "default": true,
        "desc": "图片区上方的装饰性图注。",
        "publicKey": "showMediaCaption",
        "publicLabel": "图注",
        "description": "图片区上方的装饰性图注。"
      },
      {
        "key": "accentColor",
        "label": "强调色",
        "type": "color",
        "default": "#4da0c6",
        "options": [
          "#d8402e",
          "#e2742c",
          "#efbe2e",
          "#3c9a52",
          "#4da0c6",
          "#2c44a0",
          "#7a3c90"
        ],
        "desc": "眉标 / 定位格 / 指标的强调色。",
        "publicKey": "accentColor",
        "publicLabel": "强调色",
        "description": "眉标 / 定位格 / 指标的强调色。"
      },
      {
        "key": "showConclusion",
        "label": "结论文案",
        "type": "toggle",
        "default": true,
        "desc": "底部的一句装饰性结论。",
        "publicKey": "showConclusion",
        "publicLabel": "结论文案",
        "description": "底部的一句装饰性结论。"
      },
      {
        "key": "showSheetLabel",
        "label": "页码标签",
        "type": "toggle",
        "default": true,
        "desc": "右上角的页码 / 章节标签。",
        "publicKey": "showSheetLabel",
        "publicLabel": "页码标签",
        "description": "右上角的页码 / 章节标签。"
      }
    ],
    "defaultProps": {
      "imageCount": 1,
      "imageSide": "left",
      "mosaicCols": 7,
      "mosaicRows": 4,
      "markerIndex": 4,
      "showPeers": true,
      "peerCount": 6,
      "metricCount": 4,
      "tagCount": 4,
      "showLead": true,
      "showMediaCaption": true,
      "accentColor": "#4da0c6",
      "showConclusion": true,
      "showSheetLabel": true,
      "copy": {
        "eyebrow": "SEATTLE CLUSTER",
        "title": "云计算人才外溢",
        "sheet": "IMAGE · 58 / 80",
        "marker": "SEATTLE",
        "locale": "西雅图集群",
        "lead": "西雅图受益于云计算生态和大厂工程人才外溢，更适合孕育基础设施、开发者工具和企业 AI。",
        "tags": [
          "云基础设施",
          "开发者工具",
          "企业 AI",
          "工程人才"
        ],
        "metrics": [
          [
            "融资额",
            "95",
            "亿美元"
          ],
          [
            "市场占比",
            "9.8",
            "%"
          ],
          [
            "事件数",
            "10",
            "笔"
          ],
          [
            "平均单笔",
            "9.5",
            "亿美元"
          ]
        ],
        "mediaCap": "云生态场景",
        "mediaUnit": "DROP IMAGE",
        "mosaicCap": "区域定位",
        "mosaicUnit": "TERRITORY MAP",
        "conclusion": "云计算底座带来 AI 基础设施机会。"
      }
    }
  },
  {
    "key": "theme05_page063",
    "themeKey": "theme05",
    "pageNumber": 63,
    "layout": "THEME05-063",
    "slot": "profile",
    "label": "图像主视觉 Profile",
    "bgClass": "",
    "controls": [
      {
        "key": "imageCount",
        "label": "图片槽数量",
        "type": "slider",
        "default": 1,
        "min": 0,
        "max": 3,
        "step": 1,
        "desc": "主视觉图片槽数量（0–3），按各图比例自适应。为 0 时数据列铺满整幅、主指标放大。",
        "publicKey": "imageCount",
        "publicLabel": "图片槽数量",
        "description": "主视觉图片槽数量（0–3），按各图比例自适应。为 0 时数据列铺满整幅、主指标放大。"
      },
      {
        "key": "imageSide",
        "label": "图片位置",
        "type": "radio",
        "default": "left",
        "options": [
          {
            "value": "left",
            "label": "左侧"
          },
          {
            "value": "right",
            "label": "右侧"
          }
        ],
        "desc": "图片相对数据列的位置（有图片时生效）。",
        "publicKey": "imageSide",
        "publicLabel": "图片位置",
        "description": "图片相对数据列的位置（有图片时生效）。"
      },
      {
        "key": "heroIndex",
        "label": "主指标序号",
        "type": "slider",
        "default": 1,
        "min": 1,
        "max": 4,
        "step": 1,
        "desc": "作为巨号主指标突出显示的指标序号（从 1 起）。",
        "publicKey": "heroIndex",
        "publicLabel": "主指标序号",
        "description": "作为巨号主指标突出显示的指标序号（从 1 起）。"
      },
      {
        "key": "metricCount",
        "label": "指标项数",
        "type": "slider",
        "default": 4,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "参与显示的指标数量（主指标 + 阶梯）。",
        "publicKey": "metricCount",
        "publicLabel": "指标项数",
        "description": "参与显示的指标数量（主指标 + 阶梯）。"
      },
      {
        "key": "showLadderIndex",
        "label": "阶梯序号",
        "type": "toggle",
        "default": true,
        "desc": "阶梯指标行左侧的两位序号。",
        "publicKey": "showLadderIndex",
        "publicLabel": "阶梯序号",
        "description": "阶梯指标行左侧的两位序号。"
      },
      {
        "key": "tagCount",
        "label": "标签数量",
        "type": "slider",
        "default": 4,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "主题标签 chip 数量（0 隐藏整行）。",
        "publicKey": "tagCount",
        "publicLabel": "标签数量",
        "description": "主题标签 chip 数量（0 隐藏整行）。"
      },
      {
        "key": "showLead",
        "label": "引导文案",
        "type": "toggle",
        "default": true,
        "desc": "地名下方的一段引导说明。",
        "publicKey": "showLead",
        "publicLabel": "引导文案",
        "description": "地名下方的一段引导说明。"
      },
      {
        "key": "showMediaCaption",
        "label": "图注",
        "type": "toggle",
        "default": true,
        "desc": "图片区上方的装饰性图注。",
        "publicKey": "showMediaCaption",
        "publicLabel": "图注",
        "description": "图片区上方的装饰性图注。"
      },
      {
        "key": "accentColor",
        "label": "强调色",
        "type": "color",
        "default": "#7a3c90",
        "options": [
          "#d8402e",
          "#e2742c",
          "#efbe2e",
          "#3c9a52",
          "#4da0c6",
          "#2c44a0",
          "#7a3c90"
        ],
        "desc": "眉标 / 主指标 / 强调条的强调色。",
        "publicKey": "accentColor",
        "publicLabel": "强调色",
        "description": "眉标 / 主指标 / 强调条的强调色。"
      },
      {
        "key": "showConclusion",
        "label": "结论文案",
        "type": "toggle",
        "default": true,
        "desc": "底部的一句装饰性结论。",
        "publicKey": "showConclusion",
        "publicLabel": "结论文案",
        "description": "底部的一句装饰性结论。"
      },
      {
        "key": "showSheetLabel",
        "label": "页码标签",
        "type": "toggle",
        "default": true,
        "desc": "右上角的页码 / 章节标签。",
        "publicKey": "showSheetLabel",
        "publicLabel": "页码标签",
        "description": "右上角的页码 / 章节标签。"
      }
    ],
    "defaultProps": {
      "imageCount": 1,
      "imageSide": "left",
      "heroIndex": 1,
      "metricCount": 4,
      "showLadderIndex": true,
      "tagCount": 4,
      "showLead": true,
      "showMediaCaption": true,
      "accentColor": "#7a3c90",
      "showConclusion": true,
      "showSheetLabel": true,
      "copy": {
        "eyebrow": "BOSTON CLUSTER",
        "title": "科研与硬科技",
        "sheet": "IMAGE · 59 / 80",
        "cluster": "BOSTON",
        "locale": "波士顿集群",
        "lead": "波士顿集中在医疗 AI、机器人和硬科技方向 —— 高校科研与硬科技转化构成其优势。",
        "metrics": [
          [
            "融资额",
            "75",
            "亿美元"
          ],
          [
            "市场占比",
            "7.7",
            "%"
          ],
          [
            "事件数",
            "8",
            "笔"
          ],
          [
            "平均单笔",
            "9.4",
            "亿美元"
          ]
        ],
        "tags": [
          "医疗 AI",
          "机器人",
          "硬科技",
          "高校科研"
        ],
        "mediaCap": "科研场景",
        "mediaUnit": "DROP IMAGE",
        "conclusion": "科研城市更适合长周期技术资产。"
      }
    }
  },
  {
    "key": "theme05_page064",
    "themeKey": "theme05",
    "pageNumber": 64,
    "layout": "THEME05-064",
    "slot": "spread",
    "label": "区域分布 Spread",
    "bgClass": "",
    "controls": [
      {
        "key": "cols",
        "label": "网格列数",
        "type": "slider",
        "default": 12,
        "min": 8,
        "max": 16,
        "step": 1,
        "desc": "分布点阵的列数。",
        "publicKey": "cols",
        "publicLabel": "网格列数",
        "description": "分布点阵的列数。"
      },
      {
        "key": "rows",
        "label": "网格行数",
        "type": "slider",
        "default": 6,
        "min": 4,
        "max": 8,
        "step": 1,
        "desc": "分布点阵的行数。",
        "publicKey": "rows",
        "publicLabel": "网格行数",
        "description": "分布点阵的行数。"
      },
      {
        "key": "activeCount",
        "label": "活跃单元数",
        "type": "slider",
        "default": 26,
        "min": 6,
        "max": 60,
        "step": 1,
        "desc": "被点亮（有落地）的单元数量，散布呈现分散度（自动收敛到网格容量内）。",
        "publicKey": "activeCount",
        "publicLabel": "活跃单元数",
        "description": "被点亮（有落地）的单元数量，散布呈现分散度（自动收敛到网格容量内）。"
      },
      {
        "key": "categoryCount",
        "label": "类别数量",
        "type": "slider",
        "default": 4,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "活跃单元的类别（配色 / 图例）数量。",
        "publicKey": "categoryCount",
        "publicLabel": "类别数量",
        "description": "活跃单元的类别（配色 / 图例）数量。"
      },
      {
        "key": "focusEnabled",
        "label": "重点类别",
        "type": "toggle",
        "default": false,
        "desc": "是否突出某一类别（其余单元淡出）。",
        "publicKey": "focusEnabled",
        "publicLabel": "重点类别",
        "description": "是否突出某一类别（其余单元淡出）。"
      },
      {
        "key": "focusIndex",
        "label": "重点类别序号",
        "type": "slider",
        "default": 1,
        "min": 1,
        "max": 4,
        "step": 1,
        "desc": "被突出的类别序号（从 1 起）。",
        "publicKey": "focusIndex",
        "publicLabel": "重点类别序号",
        "description": "被突出的类别序号（从 1 起）。"
      },
      {
        "key": "showLegend",
        "label": "类别图例",
        "type": "toggle",
        "default": true,
        "desc": "右侧带单元计数的类别图例。",
        "publicKey": "showLegend",
        "publicLabel": "类别图例",
        "description": "右侧带单元计数的类别图例。"
      },
      {
        "key": "showCounts",
        "label": "图例计数",
        "type": "toggle",
        "default": true,
        "desc": "图例中各类别的活跃单元计数。",
        "publicKey": "showCounts",
        "publicLabel": "图例计数",
        "description": "图例中各类别的活跃单元计数。"
      },
      {
        "key": "showMetrics",
        "label": "头部指标",
        "type": "toggle",
        "default": true,
        "desc": "引导文案右侧的一对头部指标。",
        "publicKey": "showMetrics",
        "publicLabel": "头部指标",
        "description": "引导文案右侧的一对头部指标。"
      },
      {
        "key": "imageCount",
        "label": "图片槽数量",
        "type": "slider",
        "default": 0,
        "min": 0,
        "max": 2,
        "step": 1,
        "desc": "可选图片槽数量（0–2），按比例自适应；为 0 时不显示图片。",
        "publicKey": "imageCount",
        "publicLabel": "图片槽数量",
        "description": "可选图片槽数量（0–2），按比例自适应；为 0 时不显示图片。"
      },
      {
        "key": "accentColor",
        "label": "强调色",
        "type": "color",
        "default": "#e2742c",
        "options": [
          "#d8402e",
          "#e2742c",
          "#efbe2e",
          "#3c9a52",
          "#4da0c6",
          "#2c44a0",
          "#7a3c90"
        ],
        "desc": "眉标 / 头部指标的强调色。",
        "publicKey": "accentColor",
        "publicLabel": "强调色",
        "description": "眉标 / 头部指标的强调色。"
      },
      {
        "key": "showConclusion",
        "label": "结论文案",
        "type": "toggle",
        "default": true,
        "desc": "底部的一句装饰性结论。",
        "publicKey": "showConclusion",
        "publicLabel": "结论文案",
        "description": "底部的一句装饰性结论。"
      },
      {
        "key": "showSheetLabel",
        "label": "页码标签",
        "type": "toggle",
        "default": true,
        "desc": "右上角的页码 / 章节标签。",
        "publicKey": "showSheetLabel",
        "publicLabel": "页码标签",
        "description": "右上角的页码 / 章节标签。"
      }
    ],
    "defaultProps": {
      "cols": 12,
      "rows": 6,
      "activeCount": 26,
      "categoryCount": 4,
      "focusEnabled": false,
      "focusIndex": 1,
      "showLegend": true,
      "showCounts": true,
      "showMetrics": true,
      "imageCount": 0,
      "accentColor": "#e2742c",
      "showConclusion": true,
      "showSheetLabel": true,
      "copy": {
        "eyebrow": "OTHER REGIONS",
        "title": "分散型应用落地",
        "sheet": "CHART · 60 / 80",
        "locale": "其他地区机会",
        "lead": "其他地区融资规模较小，但出现行业专用模型和本地化应用机会 —— 更适合做行业落地，而非争夺通用模型。",
        "metrics": [
          [
            "融资额",
            "60",
            "亿美元"
          ],
          [
            "市场占比",
            "6.2",
            "%"
          ]
        ],
        "matrixNote": "事件数 11 笔 · 平均单笔 5.5 亿美元",
        "matrixCap": "区域分布",
        "matrixUnit": "DISPERSED FOOTPRINT",
        "categories": [
          {
            "name": "行业专用模型",
            "en": "VERTICAL MODELS",
            "c": "#d8402e"
          },
          {
            "name": "本地化应用",
            "en": "LOCALIZED APPS",
            "c": "#3c9a52"
          },
          {
            "name": "垂直 SaaS",
            "en": "VERTICAL SAAS",
            "c": "#2c44a0"
          },
          {
            "name": "区域服务",
            "en": "REGIONAL OPS",
            "c": "#e2742c"
          }
        ],
        "legendCap": "落地方向",
        "legendUnit": "BY THEME",
        "mediaCap": "落地场景",
        "mediaUnit": "DROP IMAGE",
        "conclusion": "本地行业资源也能形成应用机会。"
      }
    }
  },
  {
    "key": "theme05_page065",
    "themeKey": "theme05",
    "pageNumber": 65,
    "layout": "THEME05-065",
    "slot": "triad",
    "label": "三类资源 Triad",
    "bgClass": "",
    "controls": [
      {
        "key": "theme",
        "label": "页面主题",
        "type": "radio",
        "default": "paper",
        "options": [
          {
            "value": "paper",
            "label": "纸色"
          },
          {
            "value": "dark",
            "label": "深色"
          },
          {
            "value": "color",
            "label": "色块"
          }
        ],
        "desc": "整页背景：纸色 / 深色 / 整页强调色块。",
        "publicKey": "theme",
        "publicLabel": "页面主题",
        "description": "整页背景：纸色 / 深色 / 整页强调色块。"
      },
      {
        "key": "bgColor",
        "label": "色块背景",
        "type": "color",
        "default": "#2c44a0",
        "options": [
          "#d8402e",
          "#e2742c",
          "#efbe2e",
          "#3c9a52",
          "#4da0c6",
          "#2c44a0",
          "#7a3c90"
        ],
        "desc": "「色块」主题下的整页背景色。",
        "publicKey": "bgColor",
        "publicLabel": "色块背景",
        "description": "「色块」主题下的整页背景色。"
      },
      {
        "key": "pillarCount",
        "label": "支柱数量",
        "type": "slider",
        "default": 3,
        "min": 2,
        "max": 3,
        "step": 1,
        "desc": "底部概念支柱块的数量（2–3）。",
        "publicKey": "pillarCount",
        "publicLabel": "支柱数量",
        "description": "底部概念支柱块的数量（2–3）。"
      },
      {
        "key": "focusEnabled",
        "label": "重点支柱",
        "type": "toggle",
        "default": false,
        "desc": "是否突出某一支柱（其余淡出）。",
        "publicKey": "focusEnabled",
        "publicLabel": "重点支柱",
        "description": "是否突出某一支柱（其余淡出）。"
      },
      {
        "key": "focusIndex",
        "label": "重点支柱序号",
        "type": "slider",
        "default": 1,
        "min": 1,
        "max": 3,
        "step": 1,
        "desc": "被突出的支柱序号（从 1 起）。",
        "publicKey": "focusIndex",
        "publicLabel": "重点支柱序号",
        "description": "被突出的支柱序号（从 1 起）。"
      },
      {
        "key": "showRoman",
        "label": "支柱编号",
        "type": "toggle",
        "default": true,
        "desc": "各支柱角上的罗马数字编号。",
        "publicKey": "showRoman",
        "publicLabel": "支柱编号",
        "description": "各支柱角上的罗马数字编号。"
      },
      {
        "key": "showGhost",
        "label": "装饰数字",
        "type": "toggle",
        "default": true,
        "desc": "背景超大半透明装饰数字。",
        "publicKey": "showGhost",
        "publicLabel": "装饰数字",
        "description": "背景超大半透明装饰数字。"
      },
      {
        "key": "emphasis",
        "label": "关键词高亮",
        "type": "toggle",
        "default": true,
        "desc": "金句中关键词的强调色高亮。",
        "publicKey": "emphasis",
        "publicLabel": "关键词高亮",
        "description": "金句中关键词的强调色高亮。"
      },
      {
        "key": "accentColor",
        "label": "强调色",
        "type": "color",
        "default": "#d8402e",
        "options": [
          "#d8402e",
          "#e2742c",
          "#efbe2e",
          "#3c9a52",
          "#4da0c6",
          "#2c44a0",
          "#7a3c90"
        ],
        "desc": "眉标 / 关键词 / 装饰数字的强调色。",
        "publicKey": "accentColor",
        "publicLabel": "强调色",
        "description": "眉标 / 关键词 / 装饰数字的强调色。"
      },
      {
        "key": "showSub",
        "label": "辅助说明",
        "type": "toggle",
        "default": true,
        "desc": "金句下方的一句辅助说明。",
        "publicKey": "showSub",
        "publicLabel": "辅助说明",
        "description": "金句下方的一句辅助说明。"
      },
      {
        "key": "showColorBand",
        "label": "色谱条",
        "type": "toggle",
        "default": true,
        "desc": "右下角的小色谱条。",
        "publicKey": "showColorBand",
        "publicLabel": "色谱条",
        "description": "右下角的小色谱条。"
      },
      {
        "key": "showSheetLabel",
        "label": "页码标签",
        "type": "toggle",
        "default": true,
        "desc": "右上角的页码 / 章节标签。",
        "publicKey": "showSheetLabel",
        "publicLabel": "页码标签",
        "description": "右上角的页码 / 章节标签。"
      }
    ],
    "defaultProps": {
      "theme": "paper",
      "bgColor": "#2c44a0",
      "pillarCount": 3,
      "focusEnabled": false,
      "focusIndex": 1,
      "showRoman": true,
      "showGhost": true,
      "emphasis": true,
      "accentColor": "#d8402e",
      "showSub": true,
      "showColorBand": true,
      "showSheetLabel": true,
      "copy": {
        "kicker": "TALENT · CAPITAL · COMPUTE",
        "lead": "三类关键资源",
        "leadSub": "人才 · 资本 · 算力",
        "quote": "AI 竞争首先是{资源组织能力}竞争。",
        "sub": "谁能把人才、资本与算力组织进同一张网，谁就掌握了下一阶段的主动权。",
        "railCap": "资源三角",
        "railUnit": "RESOURCE TRIANGLE",
        "op": "+",
        "pillars": [
          {
            "en": "TALENT",
            "zh": "人才",
            "note": "顶尖研究员与工程团队的密度",
            "c": "#d8402e"
          },
          {
            "en": "CAPITAL",
            "zh": "资本",
            "note": "持续、巨额且有耐心的资金",
            "c": "#2c44a0"
          },
          {
            "en": "COMPUTE",
            "zh": "算力",
            "note": "可调度的大规模训练与推理",
            "c": "#3c9a52"
          }
        ],
        "src": "EXPANDED SLIDE · P61",
        "sheet": "QUOTE · 61 / 80"
      }
    }
  },
  {
    "key": "theme05_page066",
    "themeKey": "theme05",
    "pageNumber": 66,
    "layout": "THEME05-066",
    "slot": "benchmark",
    "label": "标杆案例 Benchmark",
    "bgClass": "",
    "controls": [
      {
        "key": "imageCount",
        "label": "图片槽数量",
        "type": "slider",
        "default": 1,
        "min": 0,
        "max": 2,
        "step": 1,
        "desc": "图片槽数量（0–2），按各图比例自适应排布；为 0 时主体卡铺满整幅、指标转两列。",
        "publicKey": "imageCount",
        "publicLabel": "图片槽数量",
        "description": "图片槽数量（0–2），按各图比例自适应排布；为 0 时主体卡铺满整幅、指标转两列。"
      },
      {
        "key": "imageSide",
        "label": "图片位置",
        "type": "radio",
        "default": "right",
        "options": [
          {
            "value": "right",
            "label": "右侧"
          },
          {
            "value": "left",
            "label": "左侧"
          }
        ],
        "desc": "图片相对主体卡的位置（有图片时生效）。",
        "publicKey": "imageSide",
        "publicLabel": "图片位置",
        "description": "图片相对主体卡的位置（有图片时生效）。"
      },
      {
        "key": "metricCount",
        "label": "指标行数",
        "type": "slider",
        "default": 3,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "主体卡内的大号指标行数。",
        "publicKey": "metricCount",
        "publicLabel": "指标行数",
        "description": "主体卡内的大号指标行数。"
      },
      {
        "key": "cardTheme",
        "label": "主体卡主题",
        "type": "radio",
        "default": "color",
        "options": [
          {
            "value": "color",
            "label": "色块"
          },
          {
            "value": "dark",
            "label": "深色"
          },
          {
            "value": "paper",
            "label": "纸色"
          }
        ],
        "desc": "主体卡背景：强调色块 / 深色 / 纸色。",
        "publicKey": "cardTheme",
        "publicLabel": "主体卡主题",
        "description": "主体卡背景：强调色块 / 深色 / 纸色。"
      },
      {
        "key": "showBadge",
        "label": "角标",
        "type": "toggle",
        "default": true,
        "desc": "主体卡右上角的标杆角标。",
        "publicKey": "showBadge",
        "publicLabel": "角标",
        "description": "主体卡右上角的标杆角标。"
      },
      {
        "key": "showLead",
        "label": "引导说明",
        "type": "toggle",
        "default": true,
        "desc": "标题下方的一句引导说明。",
        "publicKey": "showLead",
        "publicLabel": "引导说明",
        "description": "标题下方的一句引导说明。"
      },
      {
        "key": "showGalleryCaption",
        "label": "图注",
        "type": "toggle",
        "default": true,
        "desc": "图片区上方的装饰性图注。",
        "publicKey": "showGalleryCaption",
        "publicLabel": "图注",
        "description": "图片区上方的装饰性图注。"
      },
      {
        "key": "accentColor",
        "label": "强调色",
        "type": "color",
        "default": "#3c9a52",
        "options": [
          "#d8402e",
          "#e2742c",
          "#efbe2e",
          "#3c9a52",
          "#4da0c6",
          "#2c44a0",
          "#7a3c90"
        ],
        "desc": "眉标 / 角标 /「色块」主题下主体卡的颜色。",
        "publicKey": "accentColor",
        "publicLabel": "强调色",
        "description": "眉标 / 角标 /「色块」主题下主体卡的颜色。"
      },
      {
        "key": "showConclusion",
        "label": "结论文案",
        "type": "toggle",
        "default": true,
        "desc": "底部的一句装饰性结论。",
        "publicKey": "showConclusion",
        "publicLabel": "结论文案",
        "description": "底部的一句装饰性结论。"
      },
      {
        "key": "showSheetLabel",
        "label": "页码标签",
        "type": "toggle",
        "default": true,
        "desc": "右上角的页码 / 章节标签。",
        "publicKey": "showSheetLabel",
        "publicLabel": "页码标签",
        "description": "右上角的页码 / 章节标签。"
      }
    ],
    "defaultProps": {
      "imageCount": 1,
      "imageSide": "right",
      "metricCount": 3,
      "cardTheme": "color",
      "showBadge": true,
      "showLead": true,
      "showGalleryCaption": true,
      "accentColor": "#3c9a52",
      "showConclusion": true,
      "showSheetLabel": true,
      "copy": {
        "eyebrow": "BENCHMARK CASE",
        "title": "商业化标杆",
        "sheet": "CASE · 62 / 80",
        "en": "OPENAI",
        "zh": "通用大模型样本",
        "sub": "OpenAI 案例",
        "lead": "模型能力、生态入口与企业商业化能否同时领先，是衡量这一阶段标杆的核心标尺。",
        "badge": "BENCHMARK",
        "kpis": [
          [
            "最大单笔融资",
            "66",
            "亿美元"
          ],
          [
            "企业客户",
            "9.4",
            "万家"
          ],
          [
            "年度化收入",
            "38",
            "亿美元"
          ],
          [
            "赛道",
            "通用大模型",
            ""
          ]
        ],
        "galleryCap": "案例主视觉",
        "galleryUnit": "DROP IMAGES",
        "conclusion": "模型能力必须转成生态和收入。"
      }
    }
  },
  {
    "key": "theme05_page067",
    "themeKey": "theme05",
    "pageNumber": 67,
    "layout": "THEME05-067",
    "slot": "dossier",
    "label": "档案卡 Dossier",
    "bgClass": "",
    "controls": [
      {
        "key": "imageCount",
        "label": "图片槽数量",
        "type": "slider",
        "default": 1,
        "min": 0,
        "max": 2,
        "step": 1,
        "desc": "图片槽数量（0–2），按各图比例自适应排布；为 0 时主体卡铺满整幅、明细转两列。",
        "publicKey": "imageCount",
        "publicLabel": "图片槽数量",
        "description": "图片槽数量（0–2），按各图比例自适应排布；为 0 时主体卡铺满整幅、明细转两列。"
      },
      {
        "key": "imageSide",
        "label": "图片位置",
        "type": "radio",
        "default": "right",
        "options": [
          {
            "value": "right",
            "label": "右侧"
          },
          {
            "value": "left",
            "label": "左侧"
          }
        ],
        "desc": "图片相对主体卡的位置（有图片时生效）。",
        "publicKey": "imageSide",
        "publicLabel": "图片位置",
        "description": "图片相对主体卡的位置（有图片时生效）。"
      },
      {
        "key": "tagCount",
        "label": "标签数量",
        "type": "slider",
        "default": 3,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "关键词标签 chip 数量（0 隐藏整条）。",
        "publicKey": "tagCount",
        "publicLabel": "标签数量",
        "description": "关键词标签 chip 数量（0 隐藏整条）。"
      },
      {
        "key": "metricCount",
        "label": "明细行数",
        "type": "slider",
        "default": 4,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "主体卡内的指标明细行数。",
        "publicKey": "metricCount",
        "publicLabel": "明细行数",
        "description": "主体卡内的指标明细行数。"
      },
      {
        "key": "cardTheme",
        "label": "主体卡主题",
        "type": "radio",
        "default": "dark",
        "options": [
          {
            "value": "dark",
            "label": "深色"
          },
          {
            "value": "color",
            "label": "色块"
          },
          {
            "value": "paper",
            "label": "纸色"
          }
        ],
        "desc": "主体卡背景：深色 / 强调色块 / 纸色。",
        "publicKey": "cardTheme",
        "publicLabel": "主体卡主题",
        "description": "主体卡背景：深色 / 强调色块 / 纸色。"
      },
      {
        "key": "focusEnabled",
        "label": "重点明细",
        "type": "toggle",
        "default": false,
        "desc": "是否突出某一条明细行。",
        "publicKey": "focusEnabled",
        "publicLabel": "重点明细",
        "description": "是否突出某一条明细行。"
      },
      {
        "key": "focusIndex",
        "label": "重点行序号",
        "type": "slider",
        "default": 1,
        "min": 1,
        "max": 4,
        "step": 1,
        "desc": "被突出的明细行序号（从 1 起）。",
        "publicKey": "focusIndex",
        "publicLabel": "重点行序号",
        "description": "被突出的明细行序号（从 1 起）。"
      },
      {
        "key": "showLead",
        "label": "引导说明",
        "type": "toggle",
        "default": true,
        "desc": "标题下方的一句引导说明。",
        "publicKey": "showLead",
        "publicLabel": "引导说明",
        "description": "标题下方的一句引导说明。"
      },
      {
        "key": "showGalleryCaption",
        "label": "图注",
        "type": "toggle",
        "default": true,
        "desc": "图片区上方的装饰性图注。",
        "publicKey": "showGalleryCaption",
        "publicLabel": "图注",
        "description": "图片区上方的装饰性图注。"
      },
      {
        "key": "accentColor",
        "label": "强调色",
        "type": "color",
        "default": "#efbe2e",
        "options": [
          "#d8402e",
          "#e2742c",
          "#efbe2e",
          "#3c9a52",
          "#4da0c6",
          "#2c44a0",
          "#7a3c90"
        ],
        "desc": "眉标 /「色块」主题下主体卡的颜色。",
        "publicKey": "accentColor",
        "publicLabel": "强调色",
        "description": "眉标 /「色块」主题下主体卡的颜色。"
      },
      {
        "key": "showConclusion",
        "label": "结论文案",
        "type": "toggle",
        "default": true,
        "desc": "底部的一句装饰性结论。",
        "publicKey": "showConclusion",
        "publicLabel": "结论文案",
        "description": "底部的一句装饰性结论。"
      },
      {
        "key": "showSheetLabel",
        "label": "页码标签",
        "type": "toggle",
        "default": true,
        "desc": "右上角的页码 / 章节标签。",
        "publicKey": "showSheetLabel",
        "publicLabel": "页码标签",
        "description": "右上角的页码 / 章节标签。"
      }
    ],
    "defaultProps": {
      "imageCount": 1,
      "imageSide": "right",
      "tagCount": 3,
      "metricCount": 4,
      "cardTheme": "dark",
      "focusEnabled": false,
      "focusIndex": 1,
      "showLead": true,
      "showGalleryCaption": true,
      "accentColor": "#efbe2e",
      "showConclusion": true,
      "showSheetLabel": true,
      "copy": {
        "eyebrow": "TRUST DOSSIER",
        "title": "安全可靠模型",
        "sheet": "CASE · 63 / 80",
        "filing": "FILE · A-02 · ENTERPRISE",
        "en": "ANTHROPIC",
        "zh": "企业级可信模型",
        "sub": "安全与可靠的定位",
        "lead": "优势不是更激进的叙事，而是更可信的企业采用 —— 安全、对齐与稳定本身构成壁垒。",
        "tags": [
          "安全对齐",
          "长上下文",
          "企业采用",
          "可信交付"
        ],
        "ledger": [
          [
            "累计融资",
            "650+",
            "亿美元"
          ],
          [
            "估值",
            "9650",
            "亿美元"
          ],
          [
            "核心客户",
            "云 / 金融 / 专业服务",
            ""
          ],
          [
            "关键能力",
            "安全 · 长上下文",
            ""
          ]
        ],
        "galleryCap": "案例主视觉",
        "galleryUnit": "DROP IMAGES",
        "conclusion": "可信度本身可以成为商业壁垒。"
      }
    }
  },
  {
    "key": "theme05_page068",
    "themeKey": "theme05",
    "pageNumber": 68,
    "layout": "THEME05-068",
    "slot": "nexus",
    "label": "生态连接 Nexus",
    "bgClass": "",
    "controls": [
      {
        "key": "imageCount",
        "label": "图片槽数量",
        "type": "slider",
        "default": 1,
        "min": 0,
        "max": 2,
        "step": 1,
        "desc": "图片槽数量（0–2），按各图比例自适应排布；为 0 时主体卡铺满整幅。",
        "publicKey": "imageCount",
        "publicLabel": "图片槽数量",
        "description": "图片槽数量（0–2），按各图比例自适应排布；为 0 时主体卡铺满整幅。"
      },
      {
        "key": "imageSide",
        "label": "图片位置",
        "type": "radio",
        "default": "right",
        "options": [
          {
            "value": "right",
            "label": "右侧"
          },
          {
            "value": "left",
            "label": "左侧"
          }
        ],
        "desc": "图片相对主体卡的位置（有图片时生效）。",
        "publicKey": "imageSide",
        "publicLabel": "图片位置",
        "description": "图片相对主体卡的位置（有图片时生效）。"
      },
      {
        "key": "nodeCount",
        "label": "生态节点数",
        "type": "slider",
        "default": 4,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "连接带中围绕中枢的生态节点数量。",
        "publicKey": "nodeCount",
        "publicLabel": "生态节点数",
        "description": "连接带中围绕中枢的生态节点数量。"
      },
      {
        "key": "showSpokes",
        "label": "连接连线",
        "type": "toggle",
        "default": true,
        "desc": "中枢到各节点的放射连线。",
        "publicKey": "showSpokes",
        "publicLabel": "连接连线",
        "description": "中枢到各节点的放射连线。"
      },
      {
        "key": "focusEnabled",
        "label": "重点节点",
        "type": "toggle",
        "default": false,
        "desc": "是否突出某一节点（其余淡出）。",
        "publicKey": "focusEnabled",
        "publicLabel": "重点节点",
        "description": "是否突出某一节点（其余淡出）。"
      },
      {
        "key": "focusIndex",
        "label": "重点节点序号",
        "type": "slider",
        "default": 1,
        "min": 1,
        "max": 4,
        "step": 1,
        "desc": "被突出的节点序号（从 1 起）。",
        "publicKey": "focusIndex",
        "publicLabel": "重点节点序号",
        "description": "被突出的节点序号（从 1 起）。"
      },
      {
        "key": "metricCount",
        "label": "指标数量",
        "type": "slider",
        "default": 2,
        "min": 1,
        "max": 2,
        "step": 1,
        "desc": "主体卡内的关键指标对数量。",
        "publicKey": "metricCount",
        "publicLabel": "指标数量",
        "description": "主体卡内的关键指标对数量。"
      },
      {
        "key": "cardTheme",
        "label": "主体卡主题",
        "type": "radio",
        "default": "color",
        "options": [
          {
            "value": "color",
            "label": "色块"
          },
          {
            "value": "dark",
            "label": "深色"
          },
          {
            "value": "paper",
            "label": "纸色"
          }
        ],
        "desc": "主体卡背景：强调色块 / 深色 / 纸色。",
        "publicKey": "cardTheme",
        "publicLabel": "主体卡主题",
        "description": "主体卡背景：强调色块 / 深色 / 纸色。"
      },
      {
        "key": "showLead",
        "label": "引导说明",
        "type": "toggle",
        "default": true,
        "desc": "标题下方的一句引导说明。",
        "publicKey": "showLead",
        "publicLabel": "引导说明",
        "description": "标题下方的一句引导说明。"
      },
      {
        "key": "showGalleryCaption",
        "label": "图注",
        "type": "toggle",
        "default": true,
        "desc": "图片区上方的装饰性图注。",
        "publicKey": "showGalleryCaption",
        "publicLabel": "图注",
        "description": "图片区上方的装饰性图注。"
      },
      {
        "key": "accentColor",
        "label": "强调色",
        "type": "color",
        "default": "#4da0c6",
        "options": [
          "#d8402e",
          "#e2742c",
          "#efbe2e",
          "#3c9a52",
          "#4da0c6",
          "#2c44a0",
          "#7a3c90"
        ],
        "desc": "眉标 / 重点节点 /「色块」主题下主体卡的颜色。",
        "publicKey": "accentColor",
        "publicLabel": "强调色",
        "description": "眉标 / 重点节点 /「色块」主题下主体卡的颜色。"
      },
      {
        "key": "showConclusion",
        "label": "结论文案",
        "type": "toggle",
        "default": true,
        "desc": "底部的一句装饰性结论。",
        "publicKey": "showConclusion",
        "publicLabel": "结论文案",
        "description": "底部的一句装饰性结论。"
      },
      {
        "key": "showSheetLabel",
        "label": "页码标签",
        "type": "toggle",
        "default": true,
        "desc": "右上角的页码 / 章节标签。",
        "publicKey": "showSheetLabel",
        "publicLabel": "页码标签",
        "description": "右上角的页码 / 章节标签。"
      }
    ],
    "defaultProps": {
      "imageCount": 1,
      "imageSide": "right",
      "nodeCount": 4,
      "showSpokes": true,
      "focusEnabled": false,
      "focusIndex": 1,
      "metricCount": 2,
      "cardTheme": "color",
      "showLead": true,
      "showGalleryCaption": true,
      "accentColor": "#4da0c6",
      "showConclusion": true,
      "showSheetLabel": true,
      "copy": {
        "eyebrow": "ECOSYSTEM NEXUS",
        "title": "实时数据生态",
        "sheet": "CASE · 64 / 80",
        "en": "XAI",
        "zh": "实时数据差异化",
        "sub": "xAI 案例",
        "lead": "核心资产不是模型本身，而是实时数据与生态流量 —— 独特的数据入口构成模型差异化。",
        "metrics": [
          [
            "单笔融资",
            "50",
            "亿美元"
          ],
          [
            "估值",
            "500",
            "亿美元"
          ]
        ],
        "galleryCap": "案例主视觉",
        "galleryUnit": "DROP IMAGES",
        "netCap": "生态连接",
        "netUnit": "DATA + ECOSYSTEM",
        "hubEn": "XAI",
        "hubZh": "实时数据内核",
        "hubNote": "以实时数据与马斯克生态为差异化中枢",
        "nodes": [
          {
            "zh": "X 平台",
            "en": "DATA GATEWAY",
            "role": "数据入口",
            "c": "#d8402e"
          },
          {
            "zh": "特斯拉",
            "en": "FLEET SIGNALS",
            "role": "协同",
            "c": "#2c44a0"
          },
          {
            "zh": "多模态",
            "en": "MULTIMODAL",
            "role": "能力",
            "c": "#3c9a52"
          },
          {
            "zh": "实时搜索",
            "en": "LIVE SEARCH",
            "role": "场景",
            "c": "#4da0c6"
          }
        ],
        "conclusion": "独特数据入口可以成为模型差异化。"
      }
    }
  },
  {
    "key": "theme05_page069",
    "themeKey": "theme05",
    "pageNumber": 69,
    "layout": "THEME05-069",
    "slot": "foundry",
    "label": "算力集群 Foundry",
    "bgClass": "",
    "controls": [
      {
        "key": "imageCount",
        "label": "图片槽数量",
        "type": "slider",
        "default": 1,
        "min": 0,
        "max": 3,
        "step": 1,
        "desc": "图片槽数量（0–3），按各图比例自适应排布；为 0 时主体卡铺满整幅、指标转两列。",
        "publicKey": "imageCount",
        "publicLabel": "图片槽数量",
        "description": "图片槽数量（0–3），按各图比例自适应排布；为 0 时主体卡铺满整幅、指标转两列。"
      },
      {
        "key": "imageSide",
        "label": "图片位置",
        "type": "radio",
        "default": "right",
        "options": [
          {
            "value": "right",
            "label": "右侧"
          },
          {
            "value": "left",
            "label": "左侧"
          }
        ],
        "desc": "图片相对主体卡的位置（有图片时生效）。",
        "publicKey": "imageSide",
        "publicLabel": "图片位置",
        "description": "图片相对主体卡的位置（有图片时生效）。"
      },
      {
        "key": "metricCount",
        "label": "指标行数",
        "type": "slider",
        "default": 4,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "主体卡内的大号指标行数。",
        "publicKey": "metricCount",
        "publicLabel": "指标行数",
        "description": "主体卡内的大号指标行数。"
      },
      {
        "key": "cardTheme",
        "label": "主体卡主题",
        "type": "radio",
        "default": "dark",
        "options": [
          {
            "value": "dark",
            "label": "深色"
          },
          {
            "value": "color",
            "label": "色块"
          },
          {
            "value": "paper",
            "label": "纸色"
          }
        ],
        "desc": "主体卡背景：深色 / 强调色块 / 纸色。",
        "publicKey": "cardTheme",
        "publicLabel": "主体卡主题",
        "description": "主体卡背景：深色 / 强调色块 / 纸色。"
      },
      {
        "key": "showRack",
        "label": "集群栅格",
        "type": "toggle",
        "default": true,
        "desc": "底部 GPU 集群占用栅格带（关闭则隐藏整条）。",
        "publicKey": "showRack",
        "publicLabel": "集群栅格",
        "description": "底部 GPU 集群占用栅格带（关闭则隐藏整条）。"
      },
      {
        "key": "rackColumnCount",
        "label": "集群列数",
        "type": "slider",
        "default": 8,
        "min": 4,
        "max": 14,
        "step": 1,
        "desc": "集群栅格的列（机柜）数量。",
        "publicKey": "rackColumnCount",
        "publicLabel": "集群列数",
        "description": "集群栅格的列（机柜）数量。"
      },
      {
        "key": "rackFill",
        "label": "占用率",
        "type": "slider",
        "default": 72,
        "min": 20,
        "max": 100,
        "step": 1,
        "desc": "被占用单元比例（同时作为巨号占用率读数）。",
        "publicKey": "rackFill",
        "publicLabel": "占用率",
        "description": "被占用单元比例（同时作为巨号占用率读数）。"
      },
      {
        "key": "focusEnabled",
        "label": "重点列",
        "type": "toggle",
        "default": true,
        "desc": "是否突出某一列（满载并以强调色着色）。",
        "publicKey": "focusEnabled",
        "publicLabel": "重点列",
        "description": "是否突出某一列（满载并以强调色着色）。"
      },
      {
        "key": "focusIndex",
        "label": "重点列序号",
        "type": "slider",
        "default": 3,
        "min": 1,
        "max": 14,
        "step": 1,
        "desc": "被突出的集群列序号（从 1 起）。",
        "publicKey": "focusIndex",
        "publicLabel": "重点列序号",
        "description": "被突出的集群列序号（从 1 起）。"
      },
      {
        "key": "showLead",
        "label": "引导说明",
        "type": "toggle",
        "default": true,
        "desc": "标题下方的一句引导说明。",
        "publicKey": "showLead",
        "publicLabel": "引导说明",
        "description": "标题下方的一句引导说明。"
      },
      {
        "key": "showGalleryCaption",
        "label": "图注",
        "type": "toggle",
        "default": true,
        "desc": "图片区上方的装饰性图注。",
        "publicKey": "showGalleryCaption",
        "publicLabel": "图注",
        "description": "图片区上方的装饰性图注。"
      },
      {
        "key": "accentColor",
        "label": "强调色",
        "type": "color",
        "default": "#d8402e",
        "options": [
          "#d8402e",
          "#e2742c",
          "#efbe2e",
          "#3c9a52",
          "#4da0c6",
          "#2c44a0",
          "#7a3c90"
        ],
        "desc": "眉标 / 占用单元 /「色块」主题下主体卡的颜色。",
        "publicKey": "accentColor",
        "publicLabel": "强调色",
        "description": "眉标 / 占用单元 /「色块」主题下主体卡的颜色。"
      },
      {
        "key": "showConclusion",
        "label": "结论文案",
        "type": "toggle",
        "default": true,
        "desc": "底部的一句装饰性结论。",
        "publicKey": "showConclusion",
        "publicLabel": "结论文案",
        "description": "底部的一句装饰性结论。"
      },
      {
        "key": "showSheetLabel",
        "label": "页码标签",
        "type": "toggle",
        "default": true,
        "desc": "右上角的页码 / 章节标签。",
        "publicKey": "showSheetLabel",
        "publicLabel": "页码标签",
        "description": "右上角的页码 / 章节标签。"
      }
    ],
    "defaultProps": {
      "imageCount": 1,
      "imageSide": "right",
      "metricCount": 4,
      "cardTheme": "dark",
      "showRack": true,
      "rackColumnCount": 8,
      "rackFill": 72,
      "focusEnabled": true,
      "focusIndex": 3,
      "showLead": true,
      "showGalleryCaption": true,
      "accentColor": "#d8402e",
      "showConclusion": true,
      "showSheetLabel": true,
      "copy": {
        "eyebrow": "COREWEAVE CASE",
        "title": "算力基础设施",
        "sheet": "CASE · 65 / 80",
        "en": "COREWEAVE",
        "zh": "GPU 云算力供应",
        "sub": "CoreWeave 案例",
        "lead": "当模型公司都在抢 GPU，算力供应商获得资本溢价 —— 确定性需求叠加稀缺供给。",
        "kpis": [
          [
            "融资额",
            "110",
            "亿美元"
          ],
          [
            "估值",
            "190",
            "亿美元"
          ],
          [
            "GPU 资源",
            "7.8",
            "万张"
          ],
          [
            "核心客户",
            "模型 · 内容 · 推理",
            ""
          ]
        ],
        "galleryCap": "案例主视觉",
        "galleryUnit": "DROP IMAGES",
        "rackCap": "GPU 集群",
        "rackUnit": "CLUSTER UTILIZATION",
        "rackReadK": "在网算力占用",
        "conclusion": "卖铲子的人也能成为核心资产。"
      }
    }
  },
  {
    "key": "theme05_page070",
    "themeKey": "theme05",
    "pageNumber": 70,
    "layout": "THEME05-070",
    "slot": "process",
    "label": "流程表 Process",
    "bgClass": "",
    "controls": [
      {
        "key": "rowCount",
        "label": "数据行数",
        "type": "slider",
        "default": 4,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "表格的数据行数量。",
        "publicKey": "rowCount",
        "publicLabel": "数据行数",
        "description": "表格的数据行数量。"
      },
      {
        "key": "showProcess",
        "label": "流程带",
        "type": "toggle",
        "default": true,
        "desc": "表格上方的数据流程管线带（关闭则隐藏整条）。",
        "publicKey": "showProcess",
        "publicLabel": "流程带",
        "description": "表格上方的数据流程管线带（关闭则隐藏整条）。"
      },
      {
        "key": "stageCount",
        "label": "流程节点数",
        "type": "slider",
        "default": 4,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "流程管线的阶段（节点）数量。",
        "publicKey": "stageCount",
        "publicLabel": "流程节点数",
        "description": "流程管线的阶段（节点）数量。"
      },
      {
        "key": "stageFocus",
        "label": "重点节点",
        "type": "slider",
        "default": 2,
        "min": 1,
        "max": 4,
        "step": 1,
        "desc": "被突出的流程节点序号（从 1 起）。",
        "publicKey": "stageFocus",
        "publicLabel": "重点节点",
        "description": "被突出的流程节点序号（从 1 起）。"
      },
      {
        "key": "showStageTag",
        "label": "阶段标签列",
        "type": "toggle",
        "default": true,
        "desc": "维度列内的彩色阶段标签（与流程带对应）。",
        "publicKey": "showStageTag",
        "publicLabel": "阶段标签列",
        "description": "维度列内的彩色阶段标签（与流程带对应）。"
      },
      {
        "key": "showVerdict",
        "label": "判断列",
        "type": "toggle",
        "default": true,
        "desc": "末尾「判断」标签列（关闭则为三列表）。",
        "publicKey": "showVerdict",
        "publicLabel": "判断列",
        "description": "末尾「判断」标签列（关闭则为三列表）。"
      },
      {
        "key": "zebra",
        "label": "斑马纹",
        "type": "toggle",
        "default": false,
        "desc": "隔行底色，便于横向读取。",
        "publicKey": "zebra",
        "publicLabel": "斑马纹",
        "description": "隔行底色，便于横向读取。"
      },
      {
        "key": "focusEnabled",
        "label": "重点行",
        "type": "toggle",
        "default": true,
        "desc": "是否突出某一行。",
        "publicKey": "focusEnabled",
        "publicLabel": "重点行",
        "description": "是否突出某一行。"
      },
      {
        "key": "focusIndex",
        "label": "重点行序号",
        "type": "slider",
        "default": 1,
        "min": 1,
        "max": 4,
        "step": 1,
        "desc": "被突出的行序号（从 1 起）。",
        "publicKey": "focusIndex",
        "publicLabel": "重点行序号",
        "description": "被突出的行序号（从 1 起）。"
      },
      {
        "key": "showIntro",
        "label": "引导栏",
        "type": "toggle",
        "default": true,
        "desc": "流程带上方的引导文案与一对头部指标。",
        "publicKey": "showIntro",
        "publicLabel": "引导栏",
        "description": "流程带上方的引导文案与一对头部指标。"
      },
      {
        "key": "accentColor",
        "label": "强调色",
        "type": "color",
        "default": "#4da0c6",
        "options": [
          "#d8402e",
          "#e2742c",
          "#efbe2e",
          "#3c9a52",
          "#4da0c6",
          "#2c44a0",
          "#7a3c90"
        ],
        "desc": "眉标 / 头部指标 / 重点行的强调色。",
        "publicKey": "accentColor",
        "publicLabel": "强调色",
        "description": "眉标 / 头部指标 / 重点行的强调色。"
      },
      {
        "key": "showConclusion",
        "label": "结论文案",
        "type": "toggle",
        "default": true,
        "desc": "表格下方的一句装饰性结论。",
        "publicKey": "showConclusion",
        "publicLabel": "结论文案",
        "description": "表格下方的一句装饰性结论。"
      },
      {
        "key": "showSheetLabel",
        "label": "页码标签",
        "type": "toggle",
        "default": true,
        "desc": "右上角的页码 / 章节标签。",
        "publicKey": "showSheetLabel",
        "publicLabel": "页码标签",
        "description": "右上角的页码 / 章节标签。"
      }
    ],
    "defaultProps": {
      "rowCount": 4,
      "showProcess": true,
      "stageCount": 4,
      "stageFocus": 2,
      "showStageTag": true,
      "showVerdict": true,
      "zebra": false,
      "focusEnabled": true,
      "focusIndex": 1,
      "showIntro": true,
      "accentColor": "#4da0c6",
      "showConclusion": true,
      "showSheetLabel": true,
      "copy": {
        "eyebrow": "SCALE AI CASE",
        "title": "数据基础设施",
        "sheet": "CASE · 66 / 80",
        "lead": "Scale AI 代表数据标注、RLHF 和评测数据需求 —— 模型越依赖高质量数据，数据层越有价值。",
        "headlines": [
          [
            "最大单笔融资",
            "10",
            "亿美元"
          ],
          [
            "企业客户",
            "1200",
            "家"
          ]
        ],
        "stages": [
          {
            "zh": "数据采集",
            "en": "COLLECT"
          },
          {
            "zh": "人工标注",
            "en": "LABEL"
          },
          {
            "zh": "RLHF 反馈",
            "en": "FEEDBACK"
          },
          {
            "zh": "模型评测",
            "en": "EVALUATE"
          }
        ],
        "headers": [
          "业务维度",
          "模拟数据",
          "代表对象",
          "判断"
        ],
        "rows": [
          {
            "stage": 1,
            "k": "数据标注",
            "en": "Annotation",
            "data": "1200 家企业客户",
            "rep": "标注 · 质检 · 数据集",
            "v": "核心"
          },
          {
            "stage": 2,
            "k": "人类反馈",
            "en": "RLHF",
            "data": "偏好对齐数据",
            "rep": "奖励建模 · 偏好",
            "v": "关键"
          },
          {
            "stage": 3,
            "k": "模型评测",
            "en": "Evaluation",
            "data": "政府客户 18%",
            "rep": "安全 · 合规 · 红队",
            "v": "高价值"
          },
          {
            "stage": 0,
            "k": "规模交付",
            "en": "Operations",
            "data": "10 亿美元单笔",
            "rep": "众包 · 流水线",
            "v": "壁垒"
          }
        ],
        "conclusion": "数据质量是模型竞争的底层变量。"
      }
    }
  },
  {
    "key": "theme05_page071",
    "themeKey": "theme05",
    "pageNumber": 71,
    "layout": "THEME05-071",
    "slot": "gateway",
    "label": "转化漏斗 Gateway",
    "bgClass": "",
    "controls": [
      {
        "key": "imageCount",
        "label": "图片槽数量",
        "type": "slider",
        "default": 1,
        "min": 0,
        "max": 2,
        "step": 1,
        "desc": "图片槽数量（0–2），按各图比例自适应排布；为 0 时主体卡铺满整幅、指标转两列。",
        "publicKey": "imageCount",
        "publicLabel": "图片槽数量",
        "description": "图片槽数量（0–2），按各图比例自适应排布；为 0 时主体卡铺满整幅、指标转两列。"
      },
      {
        "key": "imageSide",
        "label": "图片位置",
        "type": "radio",
        "default": "right",
        "options": [
          {
            "value": "right",
            "label": "右侧"
          },
          {
            "value": "left",
            "label": "左侧"
          }
        ],
        "desc": "图片相对主体卡的位置（有图片时生效）。",
        "publicKey": "imageSide",
        "publicLabel": "图片位置",
        "description": "图片相对主体卡的位置（有图片时生效）。"
      },
      {
        "key": "metricCount",
        "label": "指标行数",
        "type": "slider",
        "default": 3,
        "min": 2,
        "max": 3,
        "step": 1,
        "desc": "主体卡内的指标行数。",
        "publicKey": "metricCount",
        "publicLabel": "指标行数",
        "description": "主体卡内的指标行数。"
      },
      {
        "key": "cardTheme",
        "label": "主体卡主题",
        "type": "radio",
        "default": "color",
        "options": [
          {
            "value": "color",
            "label": "色块"
          },
          {
            "value": "dark",
            "label": "深色"
          },
          {
            "value": "paper",
            "label": "纸色"
          }
        ],
        "desc": "主体卡背景：强调色块 / 深色 / 纸色。",
        "publicKey": "cardTheme",
        "publicLabel": "主体卡主题",
        "description": "主体卡背景：强调色块 / 深色 / 纸色。"
      },
      {
        "key": "showLadder",
        "label": "转化漏斗",
        "type": "toggle",
        "default": true,
        "desc": "底部用户漏斗 / 转化阶梯带（关闭则隐藏整条）。",
        "publicKey": "showLadder",
        "publicLabel": "转化漏斗",
        "description": "底部用户漏斗 / 转化阶梯带（关闭则隐藏整条）。"
      },
      {
        "key": "stepCount",
        "label": "漏斗层数",
        "type": "slider",
        "default": 3,
        "min": 2,
        "max": 3,
        "step": 1,
        "desc": "转化阶梯的层级（阶段）数量。",
        "publicKey": "stepCount",
        "publicLabel": "漏斗层数",
        "description": "转化阶梯的层级（阶段）数量。"
      },
      {
        "key": "showRate",
        "label": "转化率标注",
        "type": "toggle",
        "default": true,
        "desc": "相邻层之间的转化率百分比标注。",
        "publicKey": "showRate",
        "publicLabel": "转化率标注",
        "description": "相邻层之间的转化率百分比标注。"
      },
      {
        "key": "focusEnabled",
        "label": "重点层",
        "type": "toggle",
        "default": true,
        "desc": "是否突出某一层（其余淡出）。",
        "publicKey": "focusEnabled",
        "publicLabel": "重点层",
        "description": "是否突出某一层（其余淡出）。"
      },
      {
        "key": "focusIndex",
        "label": "重点层序号",
        "type": "slider",
        "default": 3,
        "min": 1,
        "max": 3,
        "step": 1,
        "desc": "被突出的层序号（从 1 起）。",
        "publicKey": "focusIndex",
        "publicLabel": "重点层序号",
        "description": "被突出的层序号（从 1 起）。"
      },
      {
        "key": "showLead",
        "label": "引导说明",
        "type": "toggle",
        "default": true,
        "desc": "标题下方的一句引导说明。",
        "publicKey": "showLead",
        "publicLabel": "引导说明",
        "description": "标题下方的一句引导说明。"
      },
      {
        "key": "showGalleryCaption",
        "label": "图注",
        "type": "toggle",
        "default": true,
        "desc": "图片区上方的装饰性图注。",
        "publicKey": "showGalleryCaption",
        "publicLabel": "图注",
        "description": "图片区上方的装饰性图注。"
      },
      {
        "key": "accentColor",
        "label": "强调色",
        "type": "color",
        "default": "#7a3c90",
        "options": [
          "#d8402e",
          "#e2742c",
          "#efbe2e",
          "#3c9a52",
          "#4da0c6",
          "#2c44a0",
          "#7a3c90"
        ],
        "desc": "眉标 / 漏斗终点 /「色块」主题下主体卡的颜色。",
        "publicKey": "accentColor",
        "publicLabel": "强调色",
        "description": "眉标 / 漏斗终点 /「色块」主题下主体卡的颜色。"
      },
      {
        "key": "showConclusion",
        "label": "结论文案",
        "type": "toggle",
        "default": true,
        "desc": "底部的一句装饰性结论。",
        "publicKey": "showConclusion",
        "publicLabel": "结论文案",
        "description": "底部的一句装饰性结论。"
      },
      {
        "key": "showSheetLabel",
        "label": "页码标签",
        "type": "toggle",
        "default": true,
        "desc": "右上角的页码 / 章节标签。",
        "publicKey": "showSheetLabel",
        "publicLabel": "页码标签",
        "description": "右上角的页码 / 章节标签。"
      }
    ],
    "defaultProps": {
      "imageCount": 1,
      "imageSide": "right",
      "metricCount": 3,
      "cardTheme": "color",
      "showLadder": true,
      "stepCount": 3,
      "showRate": true,
      "focusEnabled": true,
      "focusIndex": 3,
      "showLead": true,
      "showGalleryCaption": true,
      "accentColor": "#7a3c90",
      "showConclusion": true,
      "showSheetLabel": true,
      "copy": {
        "eyebrow": "PERPLEXITY CASE",
        "title": "AI 搜索入口",
        "sheet": "CASE · 67 / 80",
        "en": "PERPLEXITY",
        "zh": "答案引擎 · 信息入口",
        "sub": "Perplexity AI 案例",
        "lead": "机会在于重构信息入口，挑战是内容版权和用户留存 —— 新入口要用留存证明价值。",
        "kpis": [
          [
            "最大单笔融资",
            "5.2",
            "亿美元"
          ],
          [
            "月活用户",
            "4800",
            "万"
          ],
          [
            "赛道",
            "AI 搜索",
            ""
          ]
        ],
        "galleryCap": "案例主视觉",
        "galleryUnit": "DROP IMAGES",
        "ladderCap": "用户漏斗",
        "ladderUnit": "REACH → SUBSCRIBER",
        "ladder": [
          {
            "k": "月活用户",
            "en": "MONTHLY ACTIVE",
            "v": "4800",
            "unit": "万",
            "w": 100
          },
          {
            "k": "活跃互动",
            "en": "ENGAGED",
            "v": "1800",
            "unit": "万",
            "w": 56,
            "rate": "37.5%"
          },
          {
            "k": "付费订阅",
            "en": "SUBSCRIBER",
            "v": "278",
            "unit": "万",
            "w": 18,
            "rate": "5.8%"
          }
        ],
        "conclusion": "新入口要用留存证明价值。"
      }
    }
  },
  {
    "key": "theme05_page072",
    "themeKey": "theme05",
    "pageNumber": 72,
    "layout": "THEME05-072",
    "slot": "stack",
    "label": "架构栈 Stack",
    "bgClass": "",
    "controls": [
      {
        "key": "tierCount",
        "label": "架构层数",
        "type": "slider",
        "default": 4,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "平台架构的层级（tier）数量。",
        "publicKey": "tierCount",
        "publicLabel": "架构层数",
        "description": "平台架构的层级（tier）数量。"
      },
      {
        "key": "focusEnabled",
        "label": "突出层",
        "type": "toggle",
        "default": true,
        "desc": "是否突出某一层（作为「AI 延展层」以强调色着色）。",
        "publicKey": "focusEnabled",
        "publicLabel": "突出层",
        "description": "是否突出某一层（作为「AI 延展层」以强调色着色）。"
      },
      {
        "key": "focusIndex",
        "label": "突出层序号",
        "type": "slider",
        "default": 2,
        "min": 1,
        "max": 4,
        "step": 1,
        "desc": "被突出的层序号（自顶向下，从 1 起）。",
        "publicKey": "focusIndex",
        "publicLabel": "突出层序号",
        "description": "被突出的层序号（自顶向下，从 1 起）。"
      },
      {
        "key": "showItems",
        "label": "能力标签",
        "type": "toggle",
        "default": true,
        "desc": "各层右侧的能力 chip 标签。",
        "publicKey": "showItems",
        "publicLabel": "能力标签",
        "description": "各层右侧的能力 chip 标签。"
      },
      {
        "key": "showExpand",
        "label": "扩张读数",
        "type": "toggle",
        "default": true,
        "desc": "架构带顶部的净收入留存扩张读数。",
        "publicKey": "showExpand",
        "publicLabel": "扩张读数",
        "description": "架构带顶部的净收入留存扩张读数。"
      },
      {
        "key": "cardTheme",
        "label": "主体卡主题",
        "type": "radio",
        "default": "dark",
        "options": [
          {
            "value": "dark",
            "label": "深色"
          },
          {
            "value": "color",
            "label": "色块"
          },
          {
            "value": "paper",
            "label": "纸色"
          }
        ],
        "desc": "主体卡背景：深色 / 强调色块 / 纸色。",
        "publicKey": "cardTheme",
        "publicLabel": "主体卡主题",
        "description": "主体卡背景：深色 / 强调色块 / 纸色。"
      },
      {
        "key": "metricCount",
        "label": "明细行数",
        "type": "slider",
        "default": 4,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "主体卡内的指标明细行数。",
        "publicKey": "metricCount",
        "publicLabel": "明细行数",
        "description": "主体卡内的指标明细行数。"
      },
      {
        "key": "showLead",
        "label": "引导说明",
        "type": "toggle",
        "default": true,
        "desc": "标题下方的一句引导说明。",
        "publicKey": "showLead",
        "publicLabel": "引导说明",
        "description": "标题下方的一句引导说明。"
      },
      {
        "key": "accentColor",
        "label": "强调色",
        "type": "color",
        "default": "#d8402e",
        "options": [
          "#d8402e",
          "#e2742c",
          "#efbe2e",
          "#3c9a52",
          "#4da0c6",
          "#2c44a0",
          "#7a3c90"
        ],
        "desc": "眉标 / 延展层 /「色块」主题下主体卡的颜色。",
        "publicKey": "accentColor",
        "publicLabel": "强调色",
        "description": "眉标 / 延展层 /「色块」主题下主体卡的颜色。"
      },
      {
        "key": "showConclusion",
        "label": "结论文案",
        "type": "toggle",
        "default": true,
        "desc": "底部的一句装饰性结论。",
        "publicKey": "showConclusion",
        "publicLabel": "结论文案",
        "description": "底部的一句装饰性结论。"
      },
      {
        "key": "showSheetLabel",
        "label": "页码标签",
        "type": "toggle",
        "default": true,
        "desc": "右上角的页码 / 章节标签。",
        "publicKey": "showSheetLabel",
        "publicLabel": "页码标签",
        "description": "右上角的页码 / 章节标签。"
      }
    ],
    "defaultProps": {
      "tierCount": 4,
      "focusEnabled": true,
      "focusIndex": 2,
      "showItems": true,
      "showExpand": true,
      "cardTheme": "dark",
      "metricCount": 4,
      "showLead": true,
      "accentColor": "#d8402e",
      "showConclusion": true,
      "showSheetLabel": true,
      "copy": {
        "eyebrow": "DATABRICKS CASE",
        "title": "数据平台延展",
        "sheet": "CASE · 68 / 80",
        "en": "DATABRICKS",
        "zh": "数据平台 → AI 平台",
        "sub": "Databricks 案例",
        "lead": "已有数据平台更容易把 AI 能力卖给现有企业客户 —— 存量客户基础是 AI 商业化捷径。",
        "ledger": [
          [
            "最大单笔融资",
            "5.0",
            "亿美元"
          ],
          [
            "企业客户",
            "1.1",
            "万家"
          ],
          [
            "净收入留存",
            "132",
            "%"
          ],
          [
            "赛道",
            "数据平台",
            ""
          ]
        ],
        "stackCap": "平台架构",
        "stackUnit": "DATA → AI EXTENSION",
        "tiers": [
          {
            "zh": "智能应用",
            "en": "AI APPS",
            "items": [
              "助手",
              "检索增强",
              "智能决策"
            ]
          },
          {
            "zh": "ML / AI 平台",
            "en": "ML PLATFORM",
            "items": [
              "模型训练",
              "特征工程",
              "MLOps"
            ]
          },
          {
            "zh": "计算引擎",
            "en": "COMPUTE",
            "items": [
              "Spark",
              "SQL 引擎",
              "流批一体"
            ]
          },
          {
            "zh": "数据湖仓",
            "en": "LAKEHOUSE",
            "items": [
              "统一存储",
              "数据治理",
              "开放表格式"
            ]
          }
        ],
        "expandK": "净收入留存",
        "expandNote": "存量客户向 AI 层扩张",
        "conclusion": "存量客户基础是 AI 商业化捷径。"
      }
    }
  },
  {
    "key": "theme05_page073",
    "themeKey": "theme05",
    "pageNumber": 73,
    "layout": "THEME05-073",
    "slot": "index",
    "label": "知识索引 Index",
    "bgClass": "",
    "controls": [
      {
        "key": "imageCount",
        "label": "图片槽数量",
        "type": "slider",
        "default": 1,
        "min": 0,
        "max": 3,
        "step": 1,
        "desc": "图片槽数量（0–3），按各图比例自适应排布；为 0 时主体卡铺满整幅、指标转两列。",
        "publicKey": "imageCount",
        "publicLabel": "图片槽数量",
        "description": "图片槽数量（0–3），按各图比例自适应排布；为 0 时主体卡铺满整幅、指标转两列。"
      },
      {
        "key": "imageSide",
        "label": "图片位置",
        "type": "radio",
        "default": "right",
        "options": [
          {
            "value": "right",
            "label": "右侧"
          },
          {
            "value": "left",
            "label": "左侧"
          }
        ],
        "desc": "图片相对主体卡的位置（有图片时生效）。",
        "publicKey": "imageSide",
        "publicLabel": "图片位置",
        "description": "图片相对主体卡的位置（有图片时生效）。"
      },
      {
        "key": "metricCount",
        "label": "指标行数",
        "type": "slider",
        "default": 3,
        "min": 2,
        "max": 3,
        "step": 1,
        "desc": "主体卡内的指标行数。",
        "publicKey": "metricCount",
        "publicLabel": "指标行数",
        "description": "主体卡内的指标行数。"
      },
      {
        "key": "cardTheme",
        "label": "主体卡主题",
        "type": "radio",
        "default": "dark",
        "options": [
          {
            "value": "dark",
            "label": "深色"
          },
          {
            "value": "color",
            "label": "色块"
          },
          {
            "value": "paper",
            "label": "纸色"
          }
        ],
        "desc": "主体卡背景：深色 / 强调色块 / 纸色。",
        "publicKey": "cardTheme",
        "publicLabel": "主体卡主题",
        "description": "主体卡背景：深色 / 强调色块 / 纸色。"
      },
      {
        "key": "showDirectory",
        "label": "来源索引",
        "type": "toggle",
        "default": true,
        "desc": "底部知识来源索引目录（关闭则隐藏整条）。",
        "publicKey": "showDirectory",
        "publicLabel": "来源索引",
        "description": "底部知识来源索引目录（关闭则隐藏整条）。"
      },
      {
        "key": "sourceCount",
        "label": "索引条数",
        "type": "slider",
        "default": 4,
        "min": 2,
        "max": 5,
        "step": 1,
        "desc": "知识来源目录的行数。",
        "publicKey": "sourceCount",
        "publicLabel": "索引条数",
        "description": "知识来源目录的行数。"
      },
      {
        "key": "showCoverage",
        "label": "覆盖度条",
        "type": "toggle",
        "default": true,
        "desc": "各来源右侧的覆盖度比例条。",
        "publicKey": "showCoverage",
        "publicLabel": "覆盖度条",
        "description": "各来源右侧的覆盖度比例条。"
      },
      {
        "key": "focusEnabled",
        "label": "重点来源",
        "type": "toggle",
        "default": true,
        "desc": "是否突出某一条来源（以强调色着色）。",
        "publicKey": "focusEnabled",
        "publicLabel": "重点来源",
        "description": "是否突出某一条来源（以强调色着色）。"
      },
      {
        "key": "focusIndex",
        "label": "重点条序号",
        "type": "slider",
        "default": 1,
        "min": 1,
        "max": 5,
        "step": 1,
        "desc": "被突出的来源序号（从 1 起）。",
        "publicKey": "focusIndex",
        "publicLabel": "重点条序号",
        "description": "被突出的来源序号（从 1 起）。"
      },
      {
        "key": "showRing",
        "label": "续约环",
        "type": "toggle",
        "default": true,
        "desc": "索引末端的环形续约率读数。",
        "publicKey": "showRing",
        "publicLabel": "续约环",
        "description": "索引末端的环形续约率读数。"
      },
      {
        "key": "showLead",
        "label": "引导说明",
        "type": "toggle",
        "default": true,
        "desc": "标题下方的一句引导说明。",
        "publicKey": "showLead",
        "publicLabel": "引导说明",
        "description": "标题下方的一句引导说明。"
      },
      {
        "key": "showGalleryCaption",
        "label": "图注",
        "type": "toggle",
        "default": true,
        "desc": "图片区上方的装饰性图注。",
        "publicKey": "showGalleryCaption",
        "publicLabel": "图注",
        "description": "图片区上方的装饰性图注。"
      },
      {
        "key": "accentColor",
        "label": "强调色",
        "type": "color",
        "default": "#3c9a52",
        "options": [
          "#d8402e",
          "#e2742c",
          "#efbe2e",
          "#3c9a52",
          "#4da0c6",
          "#2c44a0",
          "#7a3c90"
        ],
        "desc": "眉标 / 重点来源 / 续约环 /「色块」主题主体卡的颜色。",
        "publicKey": "accentColor",
        "publicLabel": "强调色",
        "description": "眉标 / 重点来源 / 续约环 /「色块」主题主体卡的颜色。"
      },
      {
        "key": "showConclusion",
        "label": "结论文案",
        "type": "toggle",
        "default": true,
        "desc": "底部的一句装饰性结论。",
        "publicKey": "showConclusion",
        "publicLabel": "结论文案",
        "description": "底部的一句装饰性结论。"
      },
      {
        "key": "showSheetLabel",
        "label": "页码标签",
        "type": "toggle",
        "default": true,
        "desc": "右上角的页码 / 章节标签。",
        "publicKey": "showSheetLabel",
        "publicLabel": "页码标签",
        "description": "右上角的页码 / 章节标签。"
      }
    ],
    "defaultProps": {
      "imageCount": 1,
      "imageSide": "right",
      "metricCount": 3,
      "cardTheme": "dark",
      "showDirectory": true,
      "sourceCount": 4,
      "showCoverage": true,
      "focusEnabled": true,
      "focusIndex": 1,
      "showRing": true,
      "showLead": true,
      "showGalleryCaption": true,
      "accentColor": "#3c9a52",
      "showConclusion": true,
      "showSheetLabel": true,
      "copy": {
        "eyebrow": "GLEAN CASE",
        "title": "企业知识入口",
        "sheet": "CASE · 69 / 80",
        "en": "GLEAN",
        "zh": "企业搜索 · 知识工作流",
        "sub": "Glean 案例",
        "lead": "接入知识库后，企业搜索会成为高频工作入口 —— 窄场景也能产生高价值。",
        "kpis": [
          [
            "最大单笔融资",
            "2.6",
            "亿美元"
          ],
          [
            "付费客户",
            "780",
            "家"
          ],
          [
            "赛道",
            "企业搜索",
            ""
          ]
        ],
        "galleryCap": "案例主视觉",
        "galleryUnit": "DROP IMAGES",
        "dirCap": "知识来源索引",
        "dirUnit": "INDEXED SOURCES",
        "sources": [
          {
            "k": "文档与云盘",
            "en": "DOCS · DRIVE",
            "w": 92
          },
          {
            "k": "工单与邮件",
            "en": "TICKETS · MAIL",
            "w": 74
          },
          {
            "k": "代码与知识库",
            "en": "CODE · WIKI",
            "w": 61
          },
          {
            "k": "会话与日历",
            "en": "CHAT · CAL",
            "w": 48
          },
          {
            "k": "数据看板",
            "en": "DASHBOARDS",
            "w": 35
          }
        ],
        "ringCap": "续约率",
        "ringValue": 91,
        "ringNote": "高留存验证入口价值",
        "conclusion": "窄场景也能产生高价值。"
      }
    }
  },
  {
    "key": "theme05_page074",
    "themeKey": "theme05",
    "pageNumber": 74,
    "layout": "THEME05-074",
    "slot": "monolith",
    "label": "大数字 Monolith",
    "bgClass": "",
    "controls": [
      {
        "key": "showMeter",
        "label": "色阶量表",
        "type": "toggle",
        "default": true,
        "desc": "主数字旁的竖向色阶量表（关闭则数字占满）。",
        "publicKey": "showMeter",
        "publicLabel": "色阶量表",
        "description": "主数字旁的竖向色阶量表（关闭则数字占满）。"
      },
      {
        "key": "meterSegments",
        "label": "色阶段数",
        "type": "slider",
        "default": 7,
        "min": 3,
        "max": 7,
        "step": 1,
        "desc": "竖向量表的色块段数。",
        "publicKey": "meterSegments",
        "publicLabel": "色阶段数",
        "description": "竖向量表的色块段数。"
      },
      {
        "key": "meterLevel",
        "label": "点亮段数",
        "type": "slider",
        "default": 4,
        "min": 1,
        "max": 7,
        "step": 1,
        "desc": "量表自下而上点亮的段数。",
        "publicKey": "meterLevel",
        "publicLabel": "点亮段数",
        "description": "量表自下而上点亮的段数。"
      },
      {
        "key": "focusEnabled",
        "label": "重点段",
        "type": "toggle",
        "default": true,
        "desc": "是否突出某一段（描边强调）。",
        "publicKey": "focusEnabled",
        "publicLabel": "重点段",
        "description": "是否突出某一段（描边强调）。"
      },
      {
        "key": "focusIndex",
        "label": "重点段序号",
        "type": "slider",
        "default": 4,
        "min": 1,
        "max": 7,
        "step": 1,
        "desc": "被突出的色阶段序号（自下而上，从 1 起）。",
        "publicKey": "focusIndex",
        "publicLabel": "重点段序号",
        "description": "被突出的色阶段序号（自下而上，从 1 起）。"
      },
      {
        "key": "auxCount",
        "label": "辅助指标数量",
        "type": "slider",
        "default": 3,
        "min": 0,
        "max": 3,
        "step": 1,
        "desc": "右侧支撑指标的数量（0 隐藏整列）。",
        "publicKey": "auxCount",
        "publicLabel": "辅助指标数量",
        "description": "右侧支撑指标的数量（0 隐藏整列）。"
      },
      {
        "key": "showCaption",
        "label": "解释说明",
        "type": "toggle",
        "default": true,
        "desc": "主数字下方的一句解释说明。",
        "publicKey": "showCaption",
        "publicLabel": "解释说明",
        "description": "主数字下方的一句解释说明。"
      },
      {
        "key": "showMessage",
        "label": "支撑文案",
        "type": "toggle",
        "default": true,
        "desc": "解释下方的一句支撑性文案。",
        "publicKey": "showMessage",
        "publicLabel": "支撑文案",
        "description": "解释下方的一句支撑性文案。"
      },
      {
        "key": "accentColor",
        "label": "强调色",
        "type": "color",
        "default": "#efbe2e",
        "options": [
          "#d8402e",
          "#e2742c",
          "#efbe2e",
          "#3c9a52",
          "#4da0c6",
          "#2c44a0",
          "#7a3c90"
        ],
        "desc": "主数字 / 眉标 / 重点段的强调色。",
        "publicKey": "accentColor",
        "publicLabel": "强调色",
        "description": "主数字 / 眉标 / 重点段的强调色。"
      },
      {
        "key": "showConclusion",
        "label": "结论文案",
        "type": "toggle",
        "default": true,
        "desc": "底部的一句装饰性结论。",
        "publicKey": "showConclusion",
        "publicLabel": "结论文案",
        "description": "底部的一句装饰性结论。"
      },
      {
        "key": "showSheetLabel",
        "label": "页码标签",
        "type": "toggle",
        "default": true,
        "desc": "右上角的页码 / 章节标签。",
        "publicKey": "showSheetLabel",
        "publicLabel": "页码标签",
        "description": "右上角的页码 / 章节标签。"
      }
    ],
    "defaultProps": {
      "showMeter": true,
      "meterSegments": 7,
      "meterLevel": 4,
      "focusEnabled": true,
      "focusIndex": 4,
      "auxCount": 3,
      "showCaption": true,
      "showMessage": true,
      "accentColor": "#efbe2e",
      "showConclusion": true,
      "showSheetLabel": true,
      "copy": {
        "eyebrow": "FIGURE AI CASE",
        "title": "人形机器人",
        "sheet": "CASE · 70 / 80",
        "number": "6.8",
        "unit": "亿美元",
        "caption": "Figure AI 最大单笔融资。",
        "message": "关键不只是 demo，而是供应链、可靠性和量产成本。",
        "meterCap": "量产就绪度",
        "meterUnit": "READINESS LEVEL",
        "aux": [
          {
            "k": "硬件迭代",
            "v": "3",
            "u": "代"
          },
          {
            "k": "合作产线",
            "v": "2",
            "u": "条"
          },
          {
            "k": "赛道",
            "v": "人形机器人",
            "u": ""
          }
        ],
        "conclusion": "硬件 AI 要用量产证明自己。"
      }
    }
  },
  {
    "key": "theme05_page075",
    "themeKey": "theme05",
    "pageNumber": 75,
    "layout": "THEME05-075",
    "slot": "horizon",
    "label": "兑现轨迹 Horizon",
    "bgClass": "",
    "controls": [
      {
        "key": "imageCount",
        "label": "图片槽数量",
        "type": "slider",
        "default": 1,
        "min": 0,
        "max": 2,
        "step": 1,
        "desc": "图片槽数量（0–2），按各图比例自适应排布；为 0 时主体卡铺满整幅、指标转两列。",
        "publicKey": "imageCount",
        "publicLabel": "图片槽数量",
        "description": "图片槽数量（0–2），按各图比例自适应排布；为 0 时主体卡铺满整幅、指标转两列。"
      },
      {
        "key": "imageSide",
        "label": "图片位置",
        "type": "radio",
        "default": "right",
        "options": [
          {
            "value": "right",
            "label": "右侧"
          },
          {
            "value": "left",
            "label": "左侧"
          }
        ],
        "desc": "图片相对主体卡的位置（有图片时生效）。",
        "publicKey": "imageSide",
        "publicLabel": "图片位置",
        "description": "图片相对主体卡的位置（有图片时生效）。"
      },
      {
        "key": "metricCount",
        "label": "指标行数",
        "type": "slider",
        "default": 4,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "主体卡内的指标行数。",
        "publicKey": "metricCount",
        "publicLabel": "指标行数",
        "description": "主体卡内的指标行数。"
      },
      {
        "key": "cardTheme",
        "label": "主体卡主题",
        "type": "radio",
        "default": "dark",
        "options": [
          {
            "value": "dark",
            "label": "深色"
          },
          {
            "value": "color",
            "label": "色块"
          },
          {
            "value": "paper",
            "label": "纸色"
          }
        ],
        "desc": "主体卡背景：深色 / 强调色块 / 纸色。",
        "publicKey": "cardTheme",
        "publicLabel": "主体卡主题",
        "description": "主体卡背景：深色 / 强调色块 / 纸色。"
      },
      {
        "key": "showHorizon",
        "label": "兑现轨迹",
        "type": "toggle",
        "default": true,
        "desc": "底部「现在 → 远期」的兑现轨迹带（关闭则隐藏整条）。",
        "publicKey": "showHorizon",
        "publicLabel": "兑现轨迹",
        "description": "底部「现在 → 远期」的兑现轨迹带（关闭则隐藏整条）。"
      },
      {
        "key": "milestoneCount",
        "label": "里程碑数",
        "type": "slider",
        "default": 3,
        "min": 1,
        "max": 3,
        "step": 1,
        "desc": "轨迹上的里程碑节点数量。",
        "publicKey": "milestoneCount",
        "publicLabel": "里程碑数",
        "description": "轨迹上的里程碑节点数量。"
      },
      {
        "key": "curveStyle",
        "label": "轨迹线型",
        "type": "radio",
        "default": "dashed",
        "options": [
          {
            "value": "dashed",
            "label": "虚线"
          },
          {
            "value": "solid",
            "label": "实线"
          }
        ],
        "desc": "兑现轨迹的线型（虚线 = 不确定的远期）。",
        "publicKey": "curveStyle",
        "publicLabel": "轨迹线型",
        "description": "兑现轨迹的线型（虚线 = 不确定的远期）。"
      },
      {
        "key": "focusEnabled",
        "label": "重点里程碑",
        "type": "toggle",
        "default": true,
        "desc": "是否突出某一里程碑节点。",
        "publicKey": "focusEnabled",
        "publicLabel": "重点里程碑",
        "description": "是否突出某一里程碑节点。"
      },
      {
        "key": "focusIndex",
        "label": "重点节点序号",
        "type": "slider",
        "default": 3,
        "min": 1,
        "max": 3,
        "step": 1,
        "desc": "被突出的里程碑序号（从 1 起）。",
        "publicKey": "focusIndex",
        "publicLabel": "重点节点序号",
        "description": "被突出的里程碑序号（从 1 起）。"
      },
      {
        "key": "showLead",
        "label": "引导说明",
        "type": "toggle",
        "default": true,
        "desc": "标题下方的一句引导说明。",
        "publicKey": "showLead",
        "publicLabel": "引导说明",
        "description": "标题下方的一句引导说明。"
      },
      {
        "key": "showGalleryCaption",
        "label": "图注",
        "type": "toggle",
        "default": true,
        "desc": "图片区上方的装饰性图注。",
        "publicKey": "showGalleryCaption",
        "publicLabel": "图注",
        "description": "图片区上方的装饰性图注。"
      },
      {
        "key": "accentColor",
        "label": "强调色",
        "type": "color",
        "default": "#2c44a0",
        "options": [
          "#d8402e",
          "#e2742c",
          "#efbe2e",
          "#3c9a52",
          "#4da0c6",
          "#2c44a0",
          "#7a3c90"
        ],
        "desc": "眉标 / 轨迹 / 重点节点 /「色块」主题主体卡的颜色。",
        "publicKey": "accentColor",
        "publicLabel": "强调色",
        "description": "眉标 / 轨迹 / 重点节点 /「色块」主题主体卡的颜色。"
      },
      {
        "key": "showConclusion",
        "label": "结论文案",
        "type": "toggle",
        "default": true,
        "desc": "底部的一句装饰性结论。",
        "publicKey": "showConclusion",
        "publicLabel": "结论文案",
        "description": "底部的一句装饰性结论。"
      },
      {
        "key": "showSheetLabel",
        "label": "页码标签",
        "type": "toggle",
        "default": true,
        "desc": "右上角的页码 / 章节标签。",
        "publicKey": "showSheetLabel",
        "publicLabel": "页码标签",
        "description": "右上角的页码 / 章节标签。"
      }
    ],
    "defaultProps": {
      "imageCount": 1,
      "imageSide": "right",
      "metricCount": 4,
      "cardTheme": "dark",
      "showHorizon": true,
      "milestoneCount": 3,
      "curveStyle": "dashed",
      "focusEnabled": true,
      "focusIndex": 3,
      "showLead": true,
      "showGalleryCaption": true,
      "accentColor": "#2c44a0",
      "showConclusion": true,
      "showSheetLabel": true,
      "copy": {
        "eyebrow": "SSI CASE",
        "title": "强叙事模型实验室",
        "sheet": "CASE · 71 / 80",
        "en": "SSI",
        "zh": "安全智能 · 长期技术",
        "sub": "SSI 案例",
        "lead": "强团队、强叙事、弱商业化验证 —— 短期难以用收入评价，价值建立在长期技术想象上。",
        "kpis": [
          [
            "最大单笔融资",
            "10",
            "亿美元"
          ],
          [
            "产品收入",
            "0",
            ""
          ],
          [
            "团队规模",
            "85",
            "人"
          ],
          [
            "赛道",
            "安全智能",
            ""
          ]
        ],
        "galleryCap": "案例主视觉",
        "galleryUnit": "DROP IMAGES",
        "horizonCap": "兑现周期",
        "horizonUnit": "NOW → HORIZON",
        "startLabel": "现在 · 收入 0",
        "endLabel": "长期技术兑现",
        "milestones": [
          {
            "t": 0.3,
            "k": "研究突破",
            "en": "RESEARCH"
          },
          {
            "t": 0.55,
            "k": "原型验证",
            "en": "PROTOTYPE"
          },
          {
            "t": 0.78,
            "k": "商业化",
            "en": "COMMERCIAL"
          }
        ],
        "conclusion": "强叙事需要更长时间兑现。"
      }
    }
  },
  {
    "key": "theme05_page076",
    "themeKey": "theme05",
    "pageNumber": 76,
    "layout": "THEME05-076",
    "slot": "chapter5",
    "label": "章节 Chapter 05",
    "bgClass": "",
    "controls": [
      {
        "key": "theme",
        "label": "背景主题",
        "type": "radio",
        "default": "dark",
        "options": [
          {
            "value": "dark",
            "label": "深色"
          },
          {
            "value": "paper",
            "label": "纸色"
          },
          {
            "value": "color",
            "label": "色块"
          }
        ],
        "desc": "章节页背景：深色 / 纸色 / 整页色块。",
        "publicKey": "theme",
        "publicLabel": "背景主题",
        "description": "章节页背景：深色 / 纸色 / 整页色块。"
      },
      {
        "key": "bgColor",
        "label": "色块背景",
        "type": "color",
        "default": "#2c44a0",
        "options": [
          "#d8402e",
          "#e2742c",
          "#efbe2e",
          "#3c9a52",
          "#4da0c6",
          "#2c44a0",
          "#7a3c90"
        ],
        "desc": "「色块」主题下的整页背景色。",
        "publicKey": "bgColor",
        "publicLabel": "色块背景",
        "description": "「色块」主题下的整页背景色。"
      },
      {
        "key": "showBigNumber",
        "label": "大号编号",
        "type": "toggle",
        "default": true,
        "desc": "右上的大号章节「站台」编号。",
        "publicKey": "showBigNumber",
        "publicLabel": "大号编号",
        "description": "右上的大号章节「站台」编号。"
      },
      {
        "key": "rowCount",
        "label": "列表行数",
        "type": "slider",
        "default": 5,
        "min": 2,
        "max": 5,
        "step": 1,
        "desc": "出发列表的关键词行数。",
        "publicKey": "rowCount",
        "publicLabel": "列表行数",
        "description": "出发列表的关键词行数。"
      },
      {
        "key": "showStatus",
        "label": "状态灯",
        "type": "toggle",
        "default": true,
        "desc": "各行右侧的状态指示灯。",
        "publicKey": "showStatus",
        "publicLabel": "状态灯",
        "description": "各行右侧的状态指示灯。"
      },
      {
        "key": "showGloss",
        "label": "英文注",
        "type": "toggle",
        "default": true,
        "desc": "各行关键词的英文注释列。",
        "publicKey": "showGloss",
        "publicLabel": "英文注",
        "description": "各行关键词的英文注释列。"
      },
      {
        "key": "focusEnabled",
        "label": "高亮行",
        "type": "toggle",
        "default": true,
        "desc": "是否高亮某一行（作为「下一站」）。",
        "publicKey": "focusEnabled",
        "publicLabel": "高亮行",
        "description": "是否高亮某一行（作为「下一站」）。"
      },
      {
        "key": "focusIndex",
        "label": "高亮行序号",
        "type": "slider",
        "default": 1,
        "min": 1,
        "max": 5,
        "step": 1,
        "desc": "被高亮的列表行序号（从 1 起）。",
        "publicKey": "focusIndex",
        "publicLabel": "高亮行序号",
        "description": "被高亮的列表行序号（从 1 起）。"
      },
      {
        "key": "accentColor",
        "label": "强调色",
        "type": "color",
        "default": "#d8402e",
        "options": [
          "#d8402e",
          "#e2742c",
          "#efbe2e",
          "#3c9a52",
          "#4da0c6",
          "#2c44a0",
          "#7a3c90"
        ],
        "desc": "眉标 / 大号编号 / 高亮行 / 状态灯的强调色。",
        "publicKey": "accentColor",
        "publicLabel": "强调色",
        "description": "眉标 / 大号编号 / 高亮行 / 状态灯的强调色。"
      },
      {
        "key": "showColorBand",
        "label": "色谱条",
        "type": "toggle",
        "default": true,
        "desc": "底部的色谱条带。",
        "publicKey": "showColorBand",
        "publicLabel": "色谱条",
        "description": "底部的色谱条带。"
      },
      {
        "key": "showWordmark",
        "label": "品牌标识",
        "type": "toggle",
        "default": true,
        "desc": "左上角的品牌标识。",
        "publicKey": "showWordmark",
        "publicLabel": "品牌标识",
        "description": "左上角的品牌标识。"
      },
      {
        "key": "showSheetLabel",
        "label": "页码标签",
        "type": "toggle",
        "default": true,
        "desc": "右上角的章节 / 页码标签。",
        "publicKey": "showSheetLabel",
        "publicLabel": "页码标签",
        "description": "右上角的章节 / 页码标签。"
      }
    ],
    "defaultProps": {
      "theme": "dark",
      "bgColor": "#2c44a0",
      "showBigNumber": true,
      "rowCount": 5,
      "showStatus": true,
      "showGloss": true,
      "focusEnabled": true,
      "focusIndex": 1,
      "accentColor": "#d8402e",
      "showColorBand": true,
      "showWordmark": true,
      "showSheetLabel": true,
      "copy": {
        "brand": "AICL",
        "boardMeta": "SECTION DIVIDER",
        "eyebrow": "CHAPTER 05",
        "num": "05",
        "title": "风险与策略",
        "sub": "从估值压力到投资筛选",
        "sheet": "72 / 80",
        "platformLabel": "CHAPTER",
        "rows": [
          {
            "code": "05·1",
            "k": "估值泡沫",
            "en": "VALUATION"
          },
          {
            "code": "05·2",
            "k": "收入验证",
            "en": "REVENUE"
          },
          {
            "code": "05·3",
            "k": "合规监管",
            "en": "COMPLIANCE"
          },
          {
            "code": "05·4",
            "k": "算力成本",
            "en": "COMPUTE COST"
          },
          {
            "code": "05·5",
            "k": "垂直应用筛选",
            "en": "VERTICAL PICK"
          }
        ]
      }
    }
  },
  {
    "key": "theme05_page077",
    "themeKey": "theme05",
    "pageNumber": 77,
    "layout": "THEME05-077",
    "slot": "ladder",
    "label": "转化阶梯 Ladder",
    "bgClass": "",
    "controls": [
      {
        "key": "stageCount",
        "label": "阶段数量",
        "type": "slider",
        "default": 4,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "转化阶梯的阶段（台阶）数量。",
        "publicKey": "stageCount",
        "publicLabel": "阶段数量",
        "description": "转化阶梯的阶段（台阶）数量。"
      },
      {
        "key": "chartType",
        "label": "阶梯样式",
        "type": "radio",
        "default": "ladder",
        "options": [
          {
            "value": "ladder",
            "label": "居中收窄"
          },
          {
            "value": "bars",
            "label": "左对齐条"
          }
        ],
        "desc": "阶梯呈现：居中收窄（漏斗感）/ 左对齐横向条。",
        "publicKey": "chartType",
        "publicLabel": "阶梯样式",
        "description": "阶梯呈现：居中收窄（漏斗感）/ 左对齐横向条。"
      },
      {
        "key": "focusEnabled",
        "label": "重点阶段",
        "type": "toggle",
        "default": true,
        "desc": "是否突出某一阶段（其余淡出）。",
        "publicKey": "focusEnabled",
        "publicLabel": "重点阶段",
        "description": "是否突出某一阶段（其余淡出）。"
      },
      {
        "key": "focusIndex",
        "label": "重点阶段序号",
        "type": "slider",
        "default": 2,
        "min": 1,
        "max": 4,
        "step": 1,
        "desc": "被突出的阶段序号（从 1 起）。",
        "publicKey": "focusIndex",
        "publicLabel": "重点阶段序号",
        "description": "被突出的阶段序号（从 1 起）。"
      },
      {
        "key": "showDropoff",
        "label": "流失标注",
        "type": "toggle",
        "default": true,
        "desc": "相邻阶段之间的流失（drop-off）标注。",
        "publicKey": "showDropoff",
        "publicLabel": "流失标注",
        "description": "相邻阶段之间的流失（drop-off）标注。"
      },
      {
        "key": "showValue",
        "label": "数值标注",
        "type": "toggle",
        "default": true,
        "desc": "各阶段的占比数值标注。",
        "publicKey": "showValueLabels",
        "publicLabel": "数值标注",
        "description": "各阶段的占比数值标注。"
      },
      {
        "key": "showMetricCard",
        "label": "指标卡",
        "type": "toggle",
        "default": true,
        "desc": "右侧的「状态卡」指标卡（关闭则阶梯铺满整幅）。",
        "publicKey": "showMetricCard",
        "publicLabel": "指标卡",
        "description": "右侧的「状态卡」指标卡（关闭则阶梯铺满整幅）。"
      },
      {
        "key": "metricCount",
        "label": "指标行数",
        "type": "slider",
        "default": 4,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "指标卡内的指标行数。",
        "publicKey": "metricCount",
        "publicLabel": "指标行数",
        "description": "指标卡内的指标行数。"
      },
      {
        "key": "cardTheme",
        "label": "指标卡主题",
        "type": "radio",
        "default": "dark",
        "options": [
          {
            "value": "dark",
            "label": "深色"
          },
          {
            "value": "color",
            "label": "色块"
          },
          {
            "value": "paper",
            "label": "纸色"
          }
        ],
        "desc": "指标卡背景：深色 / 强调色块 / 纸色。",
        "publicKey": "cardTheme",
        "publicLabel": "指标卡主题",
        "description": "指标卡背景：深色 / 强调色块 / 纸色。"
      },
      {
        "key": "showLead",
        "label": "引导说明",
        "type": "toggle",
        "default": true,
        "desc": "标题下方的一句引导说明。",
        "publicKey": "showLead",
        "publicLabel": "引导说明",
        "description": "标题下方的一句引导说明。"
      },
      {
        "key": "accentColor",
        "label": "强调色",
        "type": "color",
        "default": "#d8402e",
        "options": [
          "#d8402e",
          "#e2742c",
          "#efbe2e",
          "#3c9a52",
          "#4da0c6",
          "#2c44a0",
          "#7a3c90"
        ],
        "desc": "眉标 / 重点阶段 /「色块」主题指标卡的颜色。",
        "publicKey": "accentColor",
        "publicLabel": "强调色",
        "description": "眉标 / 重点阶段 /「色块」主题指标卡的颜色。"
      },
      {
        "key": "showConclusion",
        "label": "结论文案",
        "type": "toggle",
        "default": true,
        "desc": "底部的一句装饰性结论。",
        "publicKey": "showConclusion",
        "publicLabel": "结论文案",
        "description": "底部的一句装饰性结论。"
      },
      {
        "key": "showSheetLabel",
        "label": "页码标签",
        "type": "toggle",
        "default": true,
        "desc": "右上角的页码 / 章节标签。",
        "publicKey": "showSheetLabel",
        "publicLabel": "页码标签",
        "description": "右上角的页码 / 章节标签。"
      }
    ],
    "defaultProps": {
      "stageCount": 4,
      "chartType": "ladder",
      "focusEnabled": true,
      "focusIndex": 2,
      "showDropoff": true,
      "showValue": true,
      "showMetricCard": true,
      "metricCount": 4,
      "cardTheme": "dark",
      "showLead": true,
      "accentColor": "#d8402e",
      "showConclusion": true,
      "showSheetLabel": true,
      "copy": {
        "eyebrow": "REVENUE RISK",
        "title": "从试点到稳定收入",
        "sheet": "RISK · 73 / 80",
        "lead": "多数 AI 公司需要证明自己能从试点项目转向稳定订阅收入。",
        "stageCap": "试点 → 收入 转化阶梯",
        "stageUnit": "PILOT → REVENUE",
        "stages": [
          {
            "k": "试点客户",
            "en": "PILOT",
            "v": 100
          },
          {
            "k": "付费转化",
            "en": "PAID",
            "v": 28
          },
          {
            "k": "12 个月留存",
            "en": "RETAINED",
            "v": 23
          },
          {
            "k": "营收扩张",
            "en": "EXPANSION",
            "v": 11
          }
        ],
        "cardTitle": "收入验证",
        "cardEn": "REVENUE VALIDATION",
        "cardLead": "收入验证要看留存、毛利和客户扩张，而不是只看 Logo。",
        "kpis": [
          [
            "试点转付费率",
            "28",
            "%"
          ],
          [
            "企业年流失率",
            "17",
            "%"
          ],
          [
            "毛利率中位数",
            "54",
            "%"
          ],
          [
            "推理成本占收入",
            "31",
            "%"
          ]
        ],
        "conclusion": "客户试点不等于商业化成功。"
      }
    }
  },
  {
    "key": "theme05_page078",
    "themeKey": "theme05",
    "pageNumber": 78,
    "layout": "THEME05-078",
    "slot": "register",
    "label": "风险登记表 Register",
    "bgClass": "",
    "controls": [
      {
        "key": "rowCount",
        "label": "数据行数",
        "type": "slider",
        "default": 4,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "表格的数据行数量。",
        "publicKey": "rowCount",
        "publicLabel": "数据行数",
        "description": "表格的数据行数量。"
      },
      {
        "key": "showExposure",
        "label": "严重度带",
        "type": "toggle",
        "default": true,
        "desc": "末尾的严重度暴露带列（green→red 色阶，关闭则收起该列）。",
        "publicKey": "showExposure",
        "publicLabel": "严重度带",
        "description": "末尾的严重度暴露带列（green→red 色阶，关闭则收起该列）。"
      },
      {
        "key": "scaleMax",
        "label": "严重度刻度",
        "type": "slider",
        "default": 5,
        "min": 3,
        "max": 5,
        "step": 1,
        "desc": "严重度暴露带的总刻度段数。",
        "publicKey": "scaleMax",
        "publicLabel": "严重度刻度",
        "description": "严重度暴露带的总刻度段数。"
      },
      {
        "key": "showVerdict",
        "label": "判断标签",
        "type": "toggle",
        "default": true,
        "desc": "严重度带旁的「低 / 中 / 高」判断 chip。",
        "publicKey": "showVerdict",
        "publicLabel": "判断标签",
        "description": "严重度带旁的「低 / 中 / 高」判断 chip。"
      },
      {
        "key": "sortDescending",
        "label": "按严重度降序",
        "type": "toggle",
        "default": true,
        "desc": "是否按严重度由高到低排序行。",
        "publicKey": "sortDescending",
        "publicLabel": "按严重度降序",
        "description": "是否按严重度由高到低排序行。"
      },
      {
        "key": "zebra",
        "label": "斑马纹",
        "type": "toggle",
        "default": false,
        "desc": "隔行底色，便于横向读取。",
        "publicKey": "zebra",
        "publicLabel": "斑马纹",
        "description": "隔行底色，便于横向读取。"
      },
      {
        "key": "focusEnabled",
        "label": "重点行",
        "type": "toggle",
        "default": true,
        "desc": "是否突出某一行。",
        "publicKey": "focusEnabled",
        "publicLabel": "重点行",
        "description": "是否突出某一行。"
      },
      {
        "key": "focusIndex",
        "label": "重点行序号",
        "type": "slider",
        "default": 1,
        "min": 1,
        "max": 4,
        "step": 1,
        "desc": "被突出的行序号（按当前排序后顺序，从 1 起）。",
        "publicKey": "focusIndex",
        "publicLabel": "重点行序号",
        "description": "被突出的行序号（按当前排序后顺序，从 1 起）。"
      },
      {
        "key": "showIntro",
        "label": "引导栏",
        "type": "toggle",
        "default": true,
        "desc": "表格上方的引导文案与一对头部指标。",
        "publicKey": "showIntro",
        "publicLabel": "引导栏",
        "description": "表格上方的引导文案与一对头部指标。"
      },
      {
        "key": "accentColor",
        "label": "强调色",
        "type": "color",
        "default": "#d8402e",
        "options": [
          "#d8402e",
          "#e2742c",
          "#efbe2e",
          "#3c9a52",
          "#4da0c6",
          "#2c44a0",
          "#7a3c90"
        ],
        "desc": "眉标 / 头部指标 / 重点行的强调色（严重度带用独立色阶）。",
        "publicKey": "accentColor",
        "publicLabel": "强调色",
        "description": "眉标 / 头部指标 / 重点行的强调色（严重度带用独立色阶）。"
      },
      {
        "key": "showConclusion",
        "label": "结论文案",
        "type": "toggle",
        "default": true,
        "desc": "表格下方的一句装饰性结论。",
        "publicKey": "showConclusion",
        "publicLabel": "结论文案",
        "description": "表格下方的一句装饰性结论。"
      },
      {
        "key": "showSheetLabel",
        "label": "页码标签",
        "type": "toggle",
        "default": true,
        "desc": "右上角的页码 / 章节标签。",
        "publicKey": "showSheetLabel",
        "publicLabel": "页码标签",
        "description": "右上角的页码 / 章节标签。"
      }
    ],
    "defaultProps": {
      "rowCount": 4,
      "showExposure": true,
      "scaleMax": 5,
      "showVerdict": true,
      "sortDescending": true,
      "zebra": false,
      "focusEnabled": true,
      "focusIndex": 1,
      "showIntro": true,
      "accentColor": "#d8402e",
      "showConclusion": true,
      "showSheetLabel": true,
      "copy": {
        "eyebrow": "REGULATION RISK",
        "title": "隐私、版权与安全",
        "sheet": "RISK · 74 / 80",
        "lead": "隐私、版权、安全和行业监管会增加交付成本。",
        "headlines": [
          [
            "合规团队增长",
            "+42",
            "%"
          ],
          [
            "采购审查周期",
            "+36",
            "%"
          ]
        ],
        "headers": [
          "维度",
          "模拟数据",
          "代表对象",
          "严重度"
        ],
        "sevHead": "SEVERITY",
        "rows": [
          {
            "k": "数据隐私",
            "en": "Privacy",
            "num": "58",
            "unit": "%",
            "sub": "数据隔离需求",
            "rep": "医疗 · 金融客户",
            "level": 5
          },
          {
            "k": "版权合规",
            "en": "Copyright",
            "num": "19",
            "unit": "起",
            "sub": "版权风险事件",
            "rep": "图像 · 视频生成",
            "level": 4
          },
          {
            "k": "模型安全",
            "en": "Safety",
            "num": "+42",
            "unit": "%",
            "sub": "合规团队增长",
            "rep": "通用大模型",
            "level": 3
          },
          {
            "k": "行业监管",
            "en": "Regulation",
            "num": "+36",
            "unit": "%",
            "sub": "采购审查周期",
            "rep": "受监管行业",
            "level": 3
          }
        ],
        "conclusion": "合规能力会成为企业采购门槛。"
      }
    }
  },
  {
    "key": "theme05_page079",
    "themeKey": "theme05",
    "pageNumber": 79,
    "layout": "THEME05-079",
    "slot": "ceiling",
    "label": "毛利天花板 Ceiling",
    "bgClass": "",
    "controls": [
      {
        "key": "showGauge",
        "label": "压力量表",
        "type": "toggle",
        "default": true,
        "desc": "主数字旁的竖向压力量表（关闭则数字占满）。",
        "publicKey": "showGauge",
        "publicLabel": "压力量表",
        "description": "主数字旁的竖向压力量表（关闭则数字占满）。"
      },
      {
        "key": "gaugeValue",
        "label": "压力水位",
        "type": "slider",
        "default": 61,
        "min": 0,
        "max": 100,
        "step": 1,
        "desc": "量表自下而上的填充比例（0–100，天花板线随之移动）。",
        "publicKey": "gaugeValue",
        "publicLabel": "压力水位",
        "description": "量表自下而上的填充比例（0–100，天花板线随之移动）。"
      },
      {
        "key": "showThresholdLine",
        "label": "天花板线",
        "type": "toggle",
        "default": true,
        "desc": "填充顶部的天花板阈值线与上方剖面网纹。",
        "publicKey": "showThresholdLine",
        "publicLabel": "天花板线",
        "description": "填充顶部的天花板阈值线与上方剖面网纹。"
      },
      {
        "key": "auxCount",
        "label": "辅助指标数量",
        "type": "slider",
        "default": 3,
        "min": 0,
        "max": 3,
        "step": 1,
        "desc": "右侧支撑指标的数量（0 隐藏整列）。",
        "publicKey": "auxCount",
        "publicLabel": "辅助指标数量",
        "description": "右侧支撑指标的数量（0 隐藏整列）。"
      },
      {
        "key": "numberAlign",
        "label": "主数字对齐",
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
        "desc": "主数字与说明的对齐方式。",
        "publicKey": "numberAlign",
        "publicLabel": "主数字对齐",
        "description": "主数字与说明的对齐方式。"
      },
      {
        "key": "showCaption",
        "label": "解释说明",
        "type": "toggle",
        "default": true,
        "desc": "主数字下方的一句解释说明。",
        "publicKey": "showCaption",
        "publicLabel": "解释说明",
        "description": "主数字下方的一句解释说明。"
      },
      {
        "key": "showMessage",
        "label": "支撑文案",
        "type": "toggle",
        "default": true,
        "desc": "解释下方的一句支撑性文案。",
        "publicKey": "showMessage",
        "publicLabel": "支撑文案",
        "description": "解释下方的一句支撑性文案。"
      },
      {
        "key": "accentColor",
        "label": "强调色",
        "type": "color",
        "default": "#d8402e",
        "options": [
          "#d8402e",
          "#e2742c",
          "#efbe2e",
          "#3c9a52",
          "#4da0c6",
          "#2c44a0",
          "#7a3c90"
        ],
        "desc": "主数字 / 眉标 / 压力填充的强调色。",
        "publicKey": "accentColor",
        "publicLabel": "强调色",
        "description": "主数字 / 眉标 / 压力填充的强调色。"
      },
      {
        "key": "showConclusion",
        "label": "结论文案",
        "type": "toggle",
        "default": true,
        "desc": "底部的一句装饰性结论。",
        "publicKey": "showConclusion",
        "publicLabel": "结论文案",
        "description": "底部的一句装饰性结论。"
      },
      {
        "key": "showSheetLabel",
        "label": "页码标签",
        "type": "toggle",
        "default": true,
        "desc": "右上角的页码 / 章节标签。",
        "publicKey": "showSheetLabel",
        "publicLabel": "页码标签",
        "description": "右上角的页码 / 章节标签。"
      }
    ],
    "defaultProps": {
      "showGauge": true,
      "gaugeValue": 61,
      "showThresholdLine": true,
      "auxCount": 3,
      "numberAlign": "left",
      "showCaption": true,
      "showMessage": true,
      "accentColor": "#d8402e",
      "showConclusion": true,
      "showSheetLabel": true,
      "copy": {
        "eyebrow": "COMPUTE COST RISK",
        "title": "毛利天花板",
        "sheet": "RISK · 75 / 80",
        "number": "61",
        "unit": "%",
        "caption": "训练预算模拟增长幅度。",
        "message": "如果推理成本降不下来，收入增长会被毛利吞掉。",
        "gaugeCap": "成本压力线",
        "gaugeUnit": "COST PRESSURE",
        "ceilingLabel": "毛利天花板",
        "floorLabel": "收入基线",
        "aux": [
          {
            "k": "推理成本占收入",
            "v": "31",
            "u": "%"
          },
          {
            "k": "毛利率中位数",
            "v": "54",
            "u": "%"
          },
          {
            "k": "风险",
            "v": "算力成本",
            "u": ""
          }
        ],
        "conclusion": "算力成本是模型商业化的硬约束。"
      }
    }
  },
  {
    "key": "theme05_page080",
    "themeKey": "theme05",
    "pageNumber": 80,
    "layout": "THEME05-080",
    "slot": "squeeze",
    "label": "壁垒压缩 Squeeze",
    "bgClass": "",
    "controls": [
      {
        "key": "itemCount",
        "label": "压力维度数量",
        "type": "slider",
        "default": 3,
        "min": 2,
        "max": 3,
        "step": 1,
        "desc": "参与压缩的压力维度（行）数量。",
        "publicKey": "itemCount",
        "publicLabel": "压力维度数量",
        "description": "参与压缩的压力维度（行）数量。"
      },
      {
        "key": "chartType",
        "label": "图表样式",
        "type": "radio",
        "default": "pincer",
        "options": [
          {
            "value": "pincer",
            "label": "夹击残余"
          },
          {
            "value": "bars",
            "label": "普通条形"
          }
        ],
        "desc": "夹击残余（侵蚀+残余壁垒+箭头）/ 普通左对齐条形。",
        "publicKey": "chartType",
        "publicLabel": "图表样式",
        "description": "夹击残余（侵蚀+残余壁垒+箭头）/ 普通左对齐条形。"
      },
      {
        "key": "focusEnabled",
        "label": "重点维度",
        "type": "toggle",
        "default": true,
        "desc": "是否突出某一压力维度（其余淡出）。",
        "publicKey": "focusEnabled",
        "publicLabel": "重点维度",
        "description": "是否突出某一压力维度（其余淡出）。"
      },
      {
        "key": "focusIndex",
        "label": "重点维度序号",
        "type": "slider",
        "default": 1,
        "min": 1,
        "max": 3,
        "step": 1,
        "desc": "被突出的压力维度序号（从 1 起）。",
        "publicKey": "focusIndex",
        "publicLabel": "重点维度序号",
        "description": "被突出的压力维度序号（从 1 起）。"
      },
      {
        "key": "showResidual",
        "label": "残余壁垒",
        "type": "toggle",
        "default": true,
        "desc": "右侧深色「残余壁垒空间」段与数值（pincer 样式下生效）。",
        "publicKey": "showValueLabels",
        "publicLabel": "残余壁垒",
        "description": "右侧深色「残余壁垒空间」段与数值（pincer 样式下生效）。"
      },
      {
        "key": "showArrow",
        "label": "夹击箭头",
        "type": "toggle",
        "default": true,
        "desc": "侵蚀段前缘指向壁垒墙的夹击箭头。",
        "publicKey": "showArrow",
        "publicLabel": "夹击箭头",
        "description": "侵蚀段前缘指向壁垒墙的夹击箭头。"
      },
      {
        "key": "showValue",
        "label": "数值标注",
        "type": "toggle",
        "default": true,
        "desc": "各压力维度的侵蚀百分比标注。",
        "publicKey": "showValueLabels2",
        "publicLabel": "数值标注",
        "description": "各压力维度的侵蚀百分比标注。"
      },
      {
        "key": "showAnchor",
        "label": "残余锚点卡",
        "type": "toggle",
        "default": true,
        "desc": "右侧深色残余壁垒锚点卡（巨号读数 + 说明）。",
        "publicKey": "showAnchor",
        "publicLabel": "残余锚点卡",
        "description": "右侧深色残余壁垒锚点卡（巨号读数 + 说明）。"
      },
      {
        "key": "showLead",
        "label": "引导说明",
        "type": "toggle",
        "default": true,
        "desc": "标题下方的一句引导说明。",
        "publicKey": "showLead",
        "publicLabel": "引导说明",
        "description": "标题下方的一句引导说明。"
      },
      {
        "key": "accentColor",
        "label": "强调色",
        "type": "color",
        "default": "#7a3c90",
        "options": [
          "#d8402e",
          "#e2742c",
          "#efbe2e",
          "#3c9a52",
          "#4da0c6",
          "#2c44a0",
          "#7a3c90"
        ],
        "desc": "眉标 / 锚点卡巨号 / 重点维度的强调色。",
        "publicKey": "accentColor",
        "publicLabel": "强调色",
        "description": "眉标 / 锚点卡巨号 / 重点维度的强调色。"
      },
      {
        "key": "showConclusion",
        "label": "结论文案",
        "type": "toggle",
        "default": true,
        "desc": "底部的一句装饰性结论。",
        "publicKey": "showConclusion",
        "publicLabel": "结论文案",
        "description": "底部的一句装饰性结论。"
      },
      {
        "key": "showSheetLabel",
        "label": "页码标签",
        "type": "toggle",
        "default": true,
        "desc": "右上角的页码 / 章节标签。",
        "publicKey": "showSheetLabel",
        "publicLabel": "页码标签",
        "description": "右上角的页码 / 章节标签。"
      }
    ],
    "defaultProps": {
      "itemCount": 3,
      "chartType": "pincer",
      "focusEnabled": true,
      "focusIndex": 1,
      "showResidual": true,
      "showArrow": true,
      "showValue": true,
      "showAnchor": true,
      "showLead": true,
      "accentColor": "#7a3c90",
      "showConclusion": true,
      "showSheetLabel": true,
      "copy": {
        "eyebrow": "OPEN SOURCE RISK",
        "title": "壁垒被压缩",
        "sheet": "RISK · 76 / 80",
        "lead": "开源模型降低能力门槛，大厂生态压缩初创公司的独立空间。",
        "plotCap": "竞争格局 · 壁垒侵蚀",
        "plotUnit": "PRESSURE → MOAT",
        "pressures": [
          {
            "k": "开源模型性能逼近",
            "en": "OPEN SOURCE",
            "p": 86,
            "color": "#d8402e"
          },
          {
            "k": "大厂产品覆盖",
            "en": "PLATFORM",
            "p": 72,
            "color": "#2c44a0"
          },
          {
            "k": "企业自建意愿",
            "en": "IN-HOUSE",
            "p": 34,
            "color": "#3c9a52"
          }
        ],
        "wallLabel": "壁垒墙",
        "anchorNum": "14",
        "anchorUnit": "%",
        "anchorLabel": "剩余独立壁垒空间",
        "anchorNote": "初创公司必须找到数据、工作流或行业入口壁垒。",
        "conclusion": "没有壁垒的模型能力会迅速商品化。"
      }
    }
  },
  {
    "key": "theme05_page081",
    "themeKey": "theme05",
    "pageNumber": 81,
    "layout": "THEME05-081",
    "slot": "slate",
    "label": "策略推荐 Slate",
    "bgClass": "",
    "controls": [
      {
        "key": "cardCount",
        "label": "方向卡数量",
        "type": "slider",
        "default": 4,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "推荐方向卡的数量。",
        "publicKey": "cardCount",
        "publicLabel": "方向卡数量",
        "description": "推荐方向卡的数量。"
      },
      {
        "key": "columns",
        "label": "网格列数",
        "type": "slider",
        "default": 2,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "方向卡网格的列数。",
        "publicKey": "columns",
        "publicLabel": "网格列数",
        "description": "方向卡网格的列数。"
      },
      {
        "key": "focusEnabled",
        "label": "重点方向",
        "type": "toggle",
        "default": true,
        "desc": "是否突出某一张方向卡（其余淡出）。",
        "publicKey": "focusEnabled",
        "publicLabel": "重点方向",
        "description": "是否突出某一张方向卡（其余淡出）。"
      },
      {
        "key": "focusIndex",
        "label": "重点方向序号",
        "type": "slider",
        "default": 1,
        "min": 1,
        "max": 4,
        "step": 1,
        "desc": "被突出的方向卡序号（从 1 起）。",
        "publicKey": "focusIndex",
        "publicLabel": "重点方向序号",
        "description": "被突出的方向卡序号（从 1 起）。"
      },
      {
        "key": "showCardCode",
        "label": "卡片代号",
        "type": "toggle",
        "default": true,
        "desc": "方向卡上的英文代号。",
        "publicKey": "showCardCode",
        "publicLabel": "卡片代号",
        "description": "方向卡上的英文代号。"
      },
      {
        "key": "showCardTag",
        "label": "卡片说明",
        "type": "toggle",
        "default": true,
        "desc": "方向卡底部的一行说明标签。",
        "publicKey": "showCardTag",
        "publicLabel": "卡片说明",
        "description": "方向卡底部的一行说明标签。"
      },
      {
        "key": "showCriteria",
        "label": "筛选面板",
        "type": "toggle",
        "default": true,
        "desc": "右侧的筛选指标面板（关闭则方向卡铺满整幅）。",
        "publicKey": "showCriteria",
        "publicLabel": "筛选面板",
        "description": "右侧的筛选指标面板（关闭则方向卡铺满整幅）。"
      },
      {
        "key": "criteriaCount",
        "label": "筛选项数量",
        "type": "slider",
        "default": 4,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "筛选指标清单的条目数量。",
        "publicKey": "itemCount",
        "publicLabel": "筛选项数量",
        "description": "筛选指标清单的条目数量。"
      },
      {
        "key": "panelTheme",
        "label": "面板主题",
        "type": "radio",
        "default": "dark",
        "options": [
          {
            "value": "dark",
            "label": "深色"
          },
          {
            "value": "color",
            "label": "色块"
          },
          {
            "value": "paper",
            "label": "纸色"
          }
        ],
        "desc": "筛选面板背景：深色 / 强调色块 / 纸色。",
        "publicKey": "panelTheme",
        "publicLabel": "面板主题",
        "description": "筛选面板背景：深色 / 强调色块 / 纸色。"
      },
      {
        "key": "showLead",
        "label": "引导说明",
        "type": "toggle",
        "default": true,
        "desc": "标题下方的一句引导说明。",
        "publicKey": "showLead",
        "publicLabel": "引导说明",
        "description": "标题下方的一句引导说明。"
      },
      {
        "key": "accentColor",
        "label": "强调色",
        "type": "color",
        "default": "#2c44a0",
        "options": [
          "#d8402e",
          "#e2742c",
          "#efbe2e",
          "#3c9a52",
          "#4da0c6",
          "#2c44a0",
          "#7a3c90"
        ],
        "desc": "眉标 / 重点方向 /「色块」主题面板 / 筛选标记的颜色。",
        "publicKey": "accentColor",
        "publicLabel": "强调色",
        "description": "眉标 / 重点方向 /「色块」主题面板 / 筛选标记的颜色。"
      },
      {
        "key": "showConclusion",
        "label": "结论文案",
        "type": "toggle",
        "default": true,
        "desc": "底部的一句装饰性结论。",
        "publicKey": "showConclusion",
        "publicLabel": "结论文案",
        "description": "底部的一句装饰性结论。"
      },
      {
        "key": "showSheetLabel",
        "label": "页码标签",
        "type": "toggle",
        "default": true,
        "desc": "右上角的页码 / 章节标签。",
        "publicKey": "showSheetLabel",
        "publicLabel": "页码标签",
        "description": "右上角的页码 / 章节标签。"
      }
    ],
    "defaultProps": {
      "cardCount": 4,
      "columns": 2,
      "focusEnabled": true,
      "focusIndex": 1,
      "showCardCode": true,
      "showCardTag": true,
      "showCriteria": true,
      "criteriaCount": 4,
      "panelTheme": "dark",
      "showLead": true,
      "accentColor": "#2c44a0",
      "showConclusion": true,
      "showSheetLabel": true,
      "copy": {
        "eyebrow": "INFRASTRUCTURE STRATEGY · 策略：优先基础设施",
        "title": "确定性预算",
        "sheet": "STRATEGY · 77 / 80",
        "lead": "基础设施公司更接近刚性预算，收入确定性相对更强。",
        "boardCap": "推荐方向",
        "boardUnit": "RECOMMENDED",
        "cards": [
          {
            "en": "CLOUD",
            "k": "GPU 云",
            "tag": "算力供给 · 刚性预算",
            "color": "#d8402e"
          },
          {
            "en": "DATA",
            "k": "数据平台",
            "tag": "数据治理 · 长期锁定",
            "color": "#2c44a0"
          },
          {
            "en": "EVAL",
            "k": "评测工具",
            "tag": "合规评测 · 采购门槛",
            "color": "#3c9a52"
          },
          {
            "en": "INFER",
            "k": "推理优化",
            "tag": "降本增效 · 全行业需求",
            "color": "#e2742c"
          }
        ],
        "criteriaCap": "筛选指标",
        "criteriaUnit": "SCREEN BY",
        "criteria": [
          {
            "k": "收入增速",
            "en": "GROWTH"
          },
          {
            "k": "毛利率",
            "en": "MARGIN"
          },
          {
            "k": "客户集中度",
            "en": "CONCENTRATION"
          },
          {
            "k": "资源锁定",
            "en": "LOCK-IN"
          }
        ],
        "criteriaNote": "模型胜负未定时，卖铲子仍是更稳的资本逻辑。",
        "conclusion": "优先看能支撑全行业增长的基础设施。"
      }
    }
  },
  {
    "key": "theme05_page082",
    "themeKey": "theme05",
    "pageNumber": 82,
    "layout": "THEME05-082",
    "slot": "embed",
    "label": "工作流嵌入 Embed",
    "bgClass": "",
    "controls": [
      {
        "key": "nodeCount",
        "label": "流程阶段数",
        "type": "slider",
        "default": 4,
        "min": 3,
        "max": 5,
        "step": 1,
        "desc": "宿主工作流的阶段（节点）数量。",
        "publicKey": "nodeCount",
        "publicLabel": "流程阶段数",
        "description": "宿主工作流的阶段（节点）数量。"
      },
      {
        "key": "focusEnabled",
        "label": "嵌入标记",
        "type": "toggle",
        "default": true,
        "desc": "是否在某一阶段显示「AI 嵌入」标记（嵌入点）。",
        "publicKey": "focusEnabled",
        "publicLabel": "嵌入标记",
        "description": "是否在某一阶段显示「AI 嵌入」标记（嵌入点）。"
      },
      {
        "key": "focusIndex",
        "label": "嵌入点序号",
        "type": "slider",
        "default": 2,
        "min": 1,
        "max": 5,
        "step": 1,
        "desc": "AI 嵌入所在的阶段序号（从 1 起）。",
        "publicKey": "focusIndex",
        "publicLabel": "嵌入点序号",
        "description": "AI 嵌入所在的阶段序号（从 1 起）。"
      },
      {
        "key": "showConnectors",
        "label": "流向箭头",
        "type": "toggle",
        "default": true,
        "desc": "相邻阶段之间的流向箭头。",
        "publicKey": "showConnectors",
        "publicLabel": "流向箭头",
        "description": "相邻阶段之间的流向箭头。"
      },
      {
        "key": "showMetrics",
        "label": "指标面板",
        "type": "toggle",
        "default": true,
        "desc": "右侧的关注指标面板（关闭则工作流铺满整幅）。",
        "publicKey": "showMetrics",
        "publicLabel": "指标面板",
        "description": "右侧的关注指标面板（关闭则工作流铺满整幅）。"
      },
      {
        "key": "metricCount",
        "label": "指标项数量",
        "type": "slider",
        "default": 4,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "关注指标清单的条目数量。",
        "publicKey": "itemCount",
        "publicLabel": "指标项数量",
        "description": "关注指标清单的条目数量。"
      },
      {
        "key": "panelTheme",
        "label": "面板主题",
        "type": "radio",
        "default": "dark",
        "options": [
          {
            "value": "dark",
            "label": "深色"
          },
          {
            "value": "color",
            "label": "色块"
          },
          {
            "value": "paper",
            "label": "纸色"
          }
        ],
        "desc": "指标面板背景：深色 / 强调色块 / 纸色。",
        "publicKey": "panelTheme",
        "publicLabel": "面板主题",
        "description": "指标面板背景：深色 / 强调色块 / 纸色。"
      },
      {
        "key": "showScenes",
        "label": "场景带",
        "type": "toggle",
        "default": true,
        "desc": "底部的全宽落地场景标签带。",
        "publicKey": "showItemTags",
        "publicLabel": "场景带",
        "description": "底部的全宽落地场景标签带。"
      },
      {
        "key": "sceneCount",
        "label": "场景数量",
        "type": "slider",
        "default": 5,
        "min": 2,
        "max": 5,
        "step": 1,
        "desc": "落地场景标签的数量。",
        "publicKey": "contentItemCount",
        "publicLabel": "场景数量",
        "description": "落地场景标签的数量。"
      },
      {
        "key": "showLead",
        "label": "引导说明",
        "type": "toggle",
        "default": true,
        "desc": "标题下方的一句引导说明。",
        "publicKey": "showLead",
        "publicLabel": "引导说明",
        "description": "标题下方的一句引导说明。"
      },
      {
        "key": "accentColor",
        "label": "强调色",
        "type": "color",
        "default": "#e2742c",
        "options": [
          "#d8402e",
          "#e2742c",
          "#efbe2e",
          "#3c9a52",
          "#4da0c6",
          "#2c44a0",
          "#7a3c90"
        ],
        "desc": "眉标 / 嵌入节点 /「色块」主题面板 / 标记的颜色。",
        "publicKey": "accentColor",
        "publicLabel": "强调色",
        "description": "眉标 / 嵌入节点 /「色块」主题面板 / 标记的颜色。"
      },
      {
        "key": "showConclusion",
        "label": "结论文案",
        "type": "toggle",
        "default": true,
        "desc": "底部的一句装饰性结论。",
        "publicKey": "showConclusion",
        "publicLabel": "结论文案",
        "description": "底部的一句装饰性结论。"
      },
      {
        "key": "showSheetLabel",
        "label": "页码标签",
        "type": "toggle",
        "default": true,
        "desc": "右上角的页码 / 章节标签。",
        "publicKey": "showSheetLabel",
        "publicLabel": "页码标签",
        "description": "右上角的页码 / 章节标签。"
      }
    ],
    "defaultProps": {
      "nodeCount": 4,
      "focusEnabled": true,
      "focusIndex": 2,
      "showConnectors": true,
      "showMetrics": true,
      "metricCount": 4,
      "panelTheme": "dark",
      "showScenes": true,
      "sceneCount": 5,
      "showLead": true,
      "accentColor": "#e2742c",
      "showConclusion": true,
      "showSheetLabel": true,
      "copy": {
        "eyebrow": "VERTICAL STRATEGY · 策略：筛选垂直应用",
        "title": "嵌入工作流",
        "sheet": "STRATEGY · 78 / 80",
        "lead": "垂直应用要看是否嵌入刚性流程，而不是只看生成效果。",
        "flowCap": "工作流嵌入点",
        "flowUnit": "EMBED IN PROCESS",
        "embedBadge": "AI 嵌入",
        "stages": [
          {
            "k": "业务输入",
            "en": "INPUT"
          },
          {
            "k": "流程处理",
            "en": "PROCESS"
          },
          {
            "k": "决策审批",
            "en": "DECISION"
          },
          {
            "k": "结果交付",
            "en": "DELIVERY"
          }
        ],
        "metricCap": "关注指标",
        "metricUnit": "WATCH",
        "metrics": [
          {
            "k": "付费留存",
            "en": "RETENTION"
          },
          {
            "k": "使用频次",
            "en": "FREQUENCY"
          },
          {
            "k": "席位扩张",
            "en": "SEATS"
          },
          {
            "k": "净收入留存",
            "en": "NRR"
          }
        ],
        "metricNote": "好的垂直 AI 应用应该成为工作流的一部分。",
        "sceneCap": "落地场景",
        "scenes": [
          "法律",
          "医疗",
          "客服",
          "企业搜索",
          "开发者工具"
        ],
        "conclusion": "应用价值来自流程位置。"
      }
    }
  },
  {
    "key": "theme05_page083",
    "themeKey": "theme05",
    "pageNumber": 83,
    "layout": "THEME05-083",
    "slot": "beacon",
    "label": "估值锚 Re-anchor",
    "bgClass": "",
    "controls": [
      {
        "key": "nodeCount",
        "label": "阶段节点数",
        "type": "slider",
        "default": 4,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "时间轴的阶段（节点）数量。",
        "publicKey": "nodeCount",
        "publicLabel": "阶段节点数",
        "description": "时间轴的阶段（节点）数量。"
      },
      {
        "key": "focusEnabled",
        "label": "重点节点",
        "type": "toggle",
        "default": true,
        "desc": "是否突出某一个时间轴节点。",
        "publicKey": "focusEnabled",
        "publicLabel": "重点节点",
        "description": "是否突出某一个时间轴节点。"
      },
      {
        "key": "focusIndex",
        "label": "重点节点序号",
        "type": "slider",
        "default": 2,
        "min": 1,
        "max": 4,
        "step": 1,
        "desc": "被突出的节点序号（同时决定窗口进度的终点，从 1 起）。",
        "publicKey": "focusIndex",
        "publicLabel": "重点节点序号",
        "description": "被突出的节点序号（同时决定窗口进度的终点，从 1 起）。"
      },
      {
        "key": "showWindowFill",
        "label": "窗口进度",
        "type": "toggle",
        "default": true,
        "desc": "轴线上从起点到重点节点的强调色进度叠层（已进入的观察窗口）。",
        "publicKey": "showWindowFill",
        "publicLabel": "窗口进度",
        "description": "轴线上从起点到重点节点的强调色进度叠层（已进入的观察窗口）。"
      },
      {
        "key": "showWatchlist",
        "label": "观察对象带",
        "type": "toggle",
        "default": true,
        "desc": "顶部的观察对象标签带（关闭则隐藏整条）。",
        "publicKey": "showWatchlist",
        "publicLabel": "观察对象带",
        "description": "顶部的观察对象标签带（关闭则隐藏整条）。"
      },
      {
        "key": "watchCount",
        "label": "观察对象数",
        "type": "slider",
        "default": 4,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "观察对象标签的数量。",
        "publicKey": "watchCount",
        "publicLabel": "观察对象数",
        "description": "观察对象标签的数量。"
      },
      {
        "key": "showIndicators",
        "label": "指标面板",
        "type": "toggle",
        "default": true,
        "desc": "底部的观察指标面板（关闭则时间轴铺满整幅）。",
        "publicKey": "showIndicators",
        "publicLabel": "指标面板",
        "description": "底部的观察指标面板（关闭则时间轴铺满整幅）。"
      },
      {
        "key": "indicatorCount",
        "label": "指标项数量",
        "type": "slider",
        "default": 4,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "观察指标的条目数量。",
        "publicKey": "itemCount",
        "publicLabel": "指标项数量",
        "description": "观察指标的条目数量。"
      },
      {
        "key": "panelTheme",
        "label": "面板主题",
        "type": "radio",
        "default": "dark",
        "options": [
          {
            "value": "dark",
            "label": "深色"
          },
          {
            "value": "color",
            "label": "色块"
          },
          {
            "value": "paper",
            "label": "纸色"
          }
        ],
        "desc": "指标面板背景：深色 / 强调色块 / 纸色。",
        "publicKey": "panelTheme",
        "publicLabel": "面板主题",
        "description": "指标面板背景：深色 / 强调色块 / 纸色。"
      },
      {
        "key": "showLead",
        "label": "引导说明",
        "type": "toggle",
        "default": true,
        "desc": "标题下方的一句引导说明。",
        "publicKey": "showLead",
        "publicLabel": "引导说明",
        "description": "标题下方的一句引导说明。"
      },
      {
        "key": "accentColor",
        "label": "强调色",
        "type": "color",
        "default": "#2c44a0",
        "options": [
          "#d8402e",
          "#e2742c",
          "#efbe2e",
          "#3c9a52",
          "#4da0c6",
          "#2c44a0",
          "#7a3c90"
        ],
        "desc": "眉标 / 重点节点 / 窗口进度 /「色块」主题面板的颜色。",
        "publicKey": "accentColor",
        "publicLabel": "强调色",
        "description": "眉标 / 重点节点 / 窗口进度 /「色块」主题面板的颜色。"
      },
      {
        "key": "showConclusion",
        "label": "结论文案",
        "type": "toggle",
        "default": true,
        "desc": "底部的一句装饰性结论。",
        "publicKey": "showConclusion",
        "publicLabel": "结论文案",
        "description": "底部的一句装饰性结论。"
      },
      {
        "key": "showSheetLabel",
        "label": "页码标签",
        "type": "toggle",
        "default": true,
        "desc": "右上角的页码 / 章节标签。",
        "publicKey": "showSheetLabel",
        "publicLabel": "页码标签",
        "description": "右上角的页码 / 章节标签。"
      }
    ],
    "defaultProps": {
      "nodeCount": 4,
      "focusEnabled": true,
      "focusIndex": 2,
      "showWindowFill": true,
      "showWatchlist": true,
      "watchCount": 4,
      "showIndicators": true,
      "indicatorCount": 4,
      "panelTheme": "dark",
      "showLead": true,
      "accentColor": "#2c44a0",
      "showConclusion": true,
      "showSheetLabel": true,
      "copy": {
        "eyebrow": "IPO WATCH · 策略：观察 IPO 窗口",
        "title": "估值锚重定价",
        "sheet": "TIMELINE · 79 / 80",
        "lead": "头部公司 IPO 表现会影响整个 AI 一级市场估值锚。",
        "watchCap": "观察对象",
        "watchUnit": "WATCHLIST",
        "watch": [
          "OpenAI",
          "Anthropic",
          "Databricks",
          "CoreWeave"
        ],
        "timeCap": "IPO 观察窗口",
        "timeUnit": "IPO WINDOW",
        "nodes": [
          {
            "i": "PHASE 01",
            "t": "窗口开启",
            "d": "头部公司启动上市筹备，开始路演与定价。"
          },
          {
            "i": "PHASE 02",
            "t": "首日表现",
            "d": "挂牌首日股价表现给出第一个公开锚点。"
          },
          {
            "i": "PHASE 03",
            "t": "季度兑现",
            "d": "上市后季报检验收入增速与毛利率。"
          },
          {
            "i": "PHASE 04",
            "t": "估值回传",
            "d": "公开市场定价回传一级市场预期。"
          }
        ],
        "indCap": "观察指标",
        "indUnit": "INDICATORS",
        "indicators": [
          {
            "k": "上市表现",
            "en": "IPO PERF"
          },
          {
            "k": "收入增速",
            "en": "REV GROWTH"
          },
          {
            "k": "毛利率",
            "en": "GROSS MARGIN"
          },
          {
            "k": "云成本占比",
            "en": "CLOUD COST"
          }
        ],
        "note": "如果头部公司上市后估值承压，一级市场会同步下修预期。",
        "conclusion": "公开市场会重新定价 AI 叙事。"
      }
    }
  },
  {
    "key": "theme05_page084",
    "themeKey": "theme05",
    "pageNumber": 84,
    "layout": "THEME05-084",
    "slot": "verdict",
    "label": "最终判断 Verdict",
    "bgClass": "",
    "controls": [
      {
        "key": "theme",
        "label": "背景主题",
        "type": "radio",
        "default": "dark",
        "options": [
          {
            "value": "paper",
            "label": "纸色"
          },
          {
            "value": "dark",
            "label": "深色"
          },
          {
            "value": "color",
            "label": "色块"
          }
        ],
        "desc": "页面背景：纸色 / 深色 / 整页强调色块。",
        "publicKey": "theme",
        "publicLabel": "背景主题",
        "description": "页面背景：纸色 / 深色 / 整页强调色块。"
      },
      {
        "key": "bgColor",
        "label": "色块背景",
        "type": "color",
        "default": "#d8402e",
        "options": [
          "#d8402e",
          "#e2742c",
          "#efbe2e",
          "#3c9a52",
          "#4da0c6",
          "#2c44a0",
          "#7a3c90"
        ],
        "desc": "「色块」主题下的整页背景色（其它主题忽略）。",
        "publicKey": "bgColor",
        "publicLabel": "色块背景",
        "description": "「色块」主题下的整页背景色（其它主题忽略）。"
      },
      {
        "key": "align",
        "label": "对齐方式",
        "type": "radio",
        "default": "center",
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
        "desc": "金句与辅助信息的对齐方式。",
        "publicKey": "align",
        "publicLabel": "对齐方式",
        "description": "金句与辅助信息的对齐方式。"
      },
      {
        "key": "emphasis",
        "label": "重点词高亮",
        "type": "toggle",
        "default": true,
        "desc": "是否用强调色高亮金句中的关键词。",
        "publicKey": "emphasis",
        "publicLabel": "重点词高亮",
        "description": "是否用强调色高亮金句中的关键词。"
      },
      {
        "key": "showTag",
        "label": "判断标签",
        "type": "toggle",
        "default": true,
        "desc": "金句上方的「最终判断」标签。",
        "publicKey": "showTag",
        "publicLabel": "判断标签",
        "description": "金句上方的「最终判断」标签。"
      },
      {
        "key": "showSub",
        "label": "辅助说明",
        "type": "toggle",
        "default": true,
        "desc": "金句下方的一行辅助说明文字。",
        "publicKey": "showSub",
        "publicLabel": "辅助说明",
        "description": "金句下方的一行辅助说明文字。"
      },
      {
        "key": "showMarker",
        "label": "收尾标记",
        "type": "toggle",
        "default": true,
        "desc": "右下角的「完 / END」收尾装饰标记。",
        "publicKey": "showMarker",
        "publicLabel": "收尾标记",
        "description": "右下角的「完 / END」收尾装饰标记。"
      },
      {
        "key": "showFooter",
        "label": "页脚署名",
        "type": "toggle",
        "default": true,
        "desc": "底部品牌标识与报告署名（与封面呼应）。",
        "publicKey": "showFooter",
        "publicLabel": "页脚署名",
        "description": "底部品牌标识与报告署名（与封面呼应）。"
      },
      {
        "key": "showColorBand",
        "label": "色谱条",
        "type": "toggle",
        "default": true,
        "desc": "页脚处的小色谱条带。",
        "publicKey": "showColorBand",
        "publicLabel": "色谱条",
        "description": "页脚处的小色谱条带。"
      },
      {
        "key": "accentColor",
        "label": "强调色",
        "type": "color",
        "default": "#d8402e",
        "options": [
          "#d8402e",
          "#e2742c",
          "#efbe2e",
          "#3c9a52",
          "#4da0c6",
          "#2c44a0",
          "#7a3c90"
        ],
        "desc": "标签 / 重点词 / 收尾标记的强调色。",
        "publicKey": "accentColor",
        "publicLabel": "强调色",
        "description": "标签 / 重点词 / 收尾标记的强调色。"
      },
      {
        "key": "showSheetLabel",
        "label": "页码标签",
        "type": "toggle",
        "default": true,
        "desc": "右上角的页码 / 章节标签。",
        "publicKey": "showSheetLabel",
        "publicLabel": "页码标签",
        "description": "右上角的页码 / 章节标签。"
      }
    ],
    "defaultProps": {
      "theme": "dark",
      "bgColor": "#d8402e",
      "align": "center",
      "emphasis": true,
      "showTag": true,
      "showSub": true,
      "showMarker": true,
      "showFooter": true,
      "showColorBand": true,
      "accentColor": "#d8402e",
      "showSheetLabel": true,
      "copy": {
        "kicker": "CLOSING · 收尾页",
        "sheet": "VERDICT · 80 / 80",
        "tag": "最终判断",
        "tagEn": "FINAL VERDICT",
        "quote": {
          "key": null,
          "ref": null,
          "props": {
            "children": [
              "融资盛宴之后，",
              {
                "type": "br",
                "key": null,
                "ref": null,
                "props": {},
                "_owner": null,
                "_store": {}
              },
              {
                "type": "span",
                "key": null,
                "ref": null,
                "props": {
                  "className": "hl",
                  "children": "真正的竞争"
                },
                "_owner": null,
                "_store": {}
              },
              "才刚开始。"
            ]
          },
          "_owner": null,
          "_store": {}
        },
        "quotePlain": {
          "key": null,
          "ref": null,
          "props": {
            "children": [
              "融资盛宴之后，",
              {
                "type": "br",
                "key": null,
                "ref": null,
                "props": {},
                "_owner": null,
                "_store": {}
              },
              "真正的竞争才刚开始。"
            ]
          },
          "_owner": null,
          "_store": {}
        },
        "sub": "下一阶段比拼的不再是融资规模，而是把叙事兑现为收入的能力。",
        "marker": "完",
        "markerEn": "END",
        "brand": "AICL",
        "ref": "美国大额融资 AI 公司调研报告 · 2024"
      }
    }
  },
  {
    "key": "theme05_page085",
    "themeKey": "theme05",
    "pageNumber": 85,
    "layout": "THEME05-085",
    "slot": "slope",
    "label": "排名变迁 Slope",
    "bgClass": "",
    "controls": [
      {
        "key": "itemCount",
        "label": "条目数量",
        "type": "slider",
        "default": 6,
        "min": 4,
        "max": 7,
        "step": 1,
        "desc": "参与排名对比的条目数量（4–7）。两侧排名按各自周期分值自动计算。",
        "publicKey": "itemCount",
        "publicLabel": "条目数量",
        "description": "参与排名对比的条目数量（4–7）。两侧排名按各自周期分值自动计算。"
      },
      {
        "key": "colorMode",
        "label": "连线配色",
        "type": "radio",
        "default": "change",
        "options": [
          {
            "value": "change",
            "label": "涨跌"
          },
          {
            "value": "category",
            "label": "类别"
          },
          {
            "value": "mono",
            "label": "单色"
          }
        ],
        "desc": "连线着色：按排名涨跌（升绿/降红/平墨）/ 按类别色谱 / 单色。",
        "publicKey": "colorMode",
        "publicLabel": "连线配色",
        "description": "连线着色：按排名涨跌（升绿/降红/平墨）/ 按类别色谱 / 单色。"
      },
      {
        "key": "focusEnabled",
        "label": "重点条目",
        "type": "toggle",
        "default": true,
        "desc": "是否突出某一条目（其余连线淡出）。",
        "publicKey": "focusEnabled",
        "publicLabel": "重点条目",
        "description": "是否突出某一条目（其余连线淡出）。"
      },
      {
        "key": "focusIndex",
        "label": "重点序号",
        "type": "slider",
        "default": 1,
        "min": 1,
        "max": 7,
        "step": 1,
        "desc": "重点条目序号（按本周期排名）。",
        "publicKey": "focusIndex",
        "publicLabel": "重点序号",
        "description": "重点条目序号（按本周期排名）。"
      },
      {
        "key": "showRankNumber",
        "label": "排名序号",
        "type": "toggle",
        "default": true,
        "desc": "两侧的大号排名序号。",
        "publicKey": "showRankNumber",
        "publicLabel": "排名序号",
        "description": "两侧的大号排名序号。"
      },
      {
        "key": "showValue",
        "label": "数值标注",
        "type": "toggle",
        "default": true,
        "desc": "条目名称旁的本期数值。",
        "publicKey": "showValueLabels",
        "publicLabel": "数值标注",
        "description": "条目名称旁的本期数值。"
      },
      {
        "key": "showDelta",
        "label": "升降标记",
        "type": "toggle",
        "default": true,
        "desc": "右侧的排名升降量（▲/▼）标记。",
        "publicKey": "showDelta",
        "publicLabel": "升降标记",
        "description": "右侧的排名升降量（▲/▼）标记。"
      },
      {
        "key": "accentColor",
        "label": "强调色",
        "type": "color",
        "default": "#d8402e",
        "options": [
          "#d8402e",
          "#e2742c",
          "#efbe2e",
          "#3c9a52",
          "#4da0c6",
          "#2c44a0",
          "#7a3c90"
        ],
        "desc": "眉标 / 重点连线 / 标记的强调色。",
        "publicKey": "accentColor",
        "publicLabel": "强调色",
        "description": "眉标 / 重点连线 / 标记的强调色。"
      },
      {
        "key": "showConclusion",
        "label": "结论文案",
        "type": "toggle",
        "default": true,
        "desc": "底部的一句装饰性结论。",
        "publicKey": "showConclusion",
        "publicLabel": "结论文案",
        "description": "底部的一句装饰性结论。"
      },
      {
        "key": "showSheetLabel",
        "label": "页码标签",
        "type": "toggle",
        "default": true,
        "desc": "右上角的页码 / 章节标签。",
        "publicKey": "showSheetLabel",
        "publicLabel": "页码标签",
        "description": "右上角的页码 / 章节标签。"
      }
    ],
    "defaultProps": {
      "itemCount": 6,
      "colorMode": "change",
      "focusEnabled": true,
      "focusIndex": 1,
      "showRankNumber": true,
      "showValue": true,
      "showDelta": true,
      "accentColor": "#d8402e",
      "showConclusion": true,
      "showSheetLabel": true,
      "copy": {
        "eyebrow": "Ranking Shift",
        "title": "赛道排名变迁",
        "sheet": "CHART · 83 / 86",
        "fromLabel": "2023",
        "toLabel": "2024",
        "fromCap": "上一周期排名",
        "toCap": "本周期排名",
        "unit": "亿美元",
        "items": [
          {
            "name": "大模型基础设施",
            "en": "Foundation",
            "prev": 58,
            "now": 182,
            "cat": 0
          },
          {
            "name": "AI 应用层",
            "en": "Applications",
            "prev": 96,
            "now": 121,
            "cat": 3
          },
          {
            "name": "算力与芯片",
            "en": "Compute",
            "prev": 74,
            "now": 110,
            "cat": 5
          },
          {
            "name": "企业服务",
            "en": "Enterprise",
            "prev": 88,
            "now": 64,
            "cat": 4
          },
          {
            "name": "数据与安全",
            "en": "Data & Safety",
            "prev": 41,
            "now": 58,
            "cat": 6
          },
          {
            "name": "医疗 AI",
            "en": "Healthcare",
            "prev": 63,
            "now": 47,
            "cat": 1
          },
          {
            "name": "机器人与具身",
            "en": "Robotics",
            "prev": 22,
            "now": 39,
            "cat": 2
          }
        ],
        "conclusion": "基础设施一年内跃居首位，资本重心由应用回流底层。"
      }
    }
  },
  {
    "key": "theme05_page086",
    "themeKey": "theme05",
    "pageNumber": 86,
    "layout": "THEME05-086",
    "slot": "scorecard",
    "label": "综合评分 Scorecard",
    "bgClass": "",
    "controls": [
      {
        "key": "rowCount",
        "label": "评分主体数",
        "type": "slider",
        "default": 5,
        "min": 3,
        "max": 6,
        "step": 1,
        "desc": "参与评分的主体（行）数量（3–6）。",
        "publicKey": "rowCount",
        "publicLabel": "评分主体数",
        "description": "参与评分的主体（行）数量（3–6）。"
      },
      {
        "key": "colCount",
        "label": "评分维度数",
        "type": "slider",
        "default": 4,
        "min": 3,
        "max": 5,
        "step": 1,
        "desc": "评分维度（列）数量（3–5）。",
        "publicKey": "colCount",
        "publicLabel": "评分维度数",
        "description": "评分维度（列）数量（3–5）。"
      },
      {
        "key": "gradeStyle",
        "label": "单元样式",
        "type": "radio",
        "default": "letter",
        "options": [
          {
            "value": "letter",
            "label": "等级"
          },
          {
            "value": "score",
            "label": "分值"
          },
          {
            "value": "dot",
            "label": "点阵"
          }
        ],
        "desc": "单元格内容：字母等级 / 0–100 分值 / 五点评级。",
        "publicKey": "gradeStyle",
        "publicLabel": "单元样式",
        "description": "单元格内容：字母等级 / 0–100 分值 / 五点评级。"
      },
      {
        "key": "colorScale",
        "label": "色阶",
        "type": "radio",
        "default": "heat",
        "options": [
          {
            "value": "heat",
            "label": "热力"
          },
          {
            "value": "accent",
            "label": "强调"
          },
          {
            "value": "mono",
            "label": "单色"
          }
        ],
        "desc": "单元格底色映射：热力色阶 / 强调色深浅 / 单色深浅。",
        "publicKey": "colorScale",
        "publicLabel": "色阶",
        "description": "单元格底色映射：热力色阶 / 强调色深浅 / 单色深浅。"
      },
      {
        "key": "showOverall",
        "label": "综合列",
        "type": "toggle",
        "default": true,
        "desc": "末尾加权综合分列（强调显示）。",
        "publicKey": "showOverall",
        "publicLabel": "综合列",
        "description": "末尾加权综合分列（强调显示）。"
      },
      {
        "key": "focusEnabled",
        "label": "重点行",
        "type": "toggle",
        "default": true,
        "desc": "是否突出某一行（整行描边）。",
        "publicKey": "focusEnabled",
        "publicLabel": "重点行",
        "description": "是否突出某一行（整行描边）。"
      },
      {
        "key": "focusIndex",
        "label": "重点序号",
        "type": "slider",
        "default": 1,
        "min": 1,
        "max": 6,
        "step": 1,
        "desc": "重点行序号。",
        "publicKey": "focusIndex",
        "publicLabel": "重点序号",
        "description": "重点行序号。"
      },
      {
        "key": "zebra",
        "label": "隔行底色",
        "type": "toggle",
        "default": false,
        "desc": "行名称列的斑马纹底色。",
        "publicKey": "zebra",
        "publicLabel": "隔行底色",
        "description": "行名称列的斑马纹底色。"
      },
      {
        "key": "showIntro",
        "label": "引导文案",
        "type": "toggle",
        "default": true,
        "desc": "表格上方的引导说明。",
        "publicKey": "showIntro",
        "publicLabel": "引导文案",
        "description": "表格上方的引导说明。"
      },
      {
        "key": "accentColor",
        "label": "强调色",
        "type": "color",
        "default": "#2c44a0",
        "options": [
          "#d8402e",
          "#e2742c",
          "#efbe2e",
          "#3c9a52",
          "#4da0c6",
          "#2c44a0",
          "#7a3c90"
        ],
        "desc": "眉标 / 表头 / 重点行 / 综合列的强调色。",
        "publicKey": "accentColor",
        "publicLabel": "强调色",
        "description": "眉标 / 表头 / 重点行 / 综合列的强调色。"
      },
      {
        "key": "showConclusion",
        "label": "结论文案",
        "type": "toggle",
        "default": true,
        "desc": "表格下方的一句装饰性结论。",
        "publicKey": "showConclusion",
        "publicLabel": "结论文案",
        "description": "表格下方的一句装饰性结论。"
      },
      {
        "key": "showSheetLabel",
        "label": "页码标签",
        "type": "toggle",
        "default": true,
        "desc": "右上角的页码 / 章节标签。",
        "publicKey": "showSheetLabel",
        "publicLabel": "页码标签",
        "description": "右上角的页码 / 章节标签。"
      }
    ],
    "defaultProps": {
      "rowCount": 5,
      "colCount": 4,
      "gradeStyle": "letter",
      "colorScale": "heat",
      "showOverall": true,
      "focusEnabled": true,
      "focusIndex": 1,
      "zebra": false,
      "showIntro": true,
      "accentColor": "#2c44a0",
      "showConclusion": true,
      "showSheetLabel": true,
      "copy": {
        "eyebrow": "Composite Scorecard",
        "title": "赛道综合评分",
        "sheet": "TABLE · 84 / 86",
        "intro": "六条评分维度按 0–100 标准化，综合分加权汇总，用于横向比较各赛道当前的投资性价比。",
        "subjectHead": "赛道 / Segment",
        "overallHead": "综合",
        "cols": [
          {
            "name": "融资热度",
            "en": "Heat"
          },
          {
            "name": "商业兑现",
            "en": "Revenue"
          },
          {
            "name": "技术壁垒",
            "en": "Moat"
          },
          {
            "name": "风险控制",
            "en": "Risk"
          },
          {
            "name": "退出预期",
            "en": "Exit"
          }
        ],
        "rows": [
          {
            "name": "大模型基础设施",
            "en": "Foundation",
            "scores": [
              96,
              71,
              92,
              64,
              78
            ],
            "overall": 84
          },
          {
            "name": "AI 应用层",
            "en": "Applications",
            "scores": [
              88,
              83,
              58,
              72,
              80
            ],
            "overall": 78
          },
          {
            "name": "算力与芯片",
            "en": "Compute",
            "scores": [
              82,
              66,
              88,
              60,
              70
            ],
            "overall": 75
          },
          {
            "name": "企业服务",
            "en": "Enterprise",
            "scores": [
              70,
              86,
              62,
              81,
              74
            ],
            "overall": 74
          },
          {
            "name": "医疗 AI",
            "en": "Healthcare",
            "scores": [
              61,
              54,
              79,
              58,
              56
            ],
            "overall": 62
          },
          {
            "name": "机器人与具身",
            "en": "Robotics",
            "scores": [
              74,
              41,
              70,
              47,
              52
            ],
            "overall": 55
          }
        ],
        "conclusion": "基础设施综合分领先，应用层胜在兑现与退出预期均衡。"
      }
    }
  },
  {
    "key": "theme05_page087",
    "themeKey": "theme05",
    "pageNumber": 87,
    "layout": "THEME05-087",
    "slot": "era",
    "label": "周期里程 Era",
    "bgClass": "",
    "controls": [
      {
        "key": "nodeCount",
        "label": "节点数量",
        "type": "slider",
        "default": 5,
        "min": 3,
        "max": 6,
        "step": 1,
        "desc": "时间轴里程碑节点数量（3–6）。",
        "publicKey": "nodeCount",
        "publicLabel": "节点数量",
        "description": "时间轴里程碑节点数量（3–6）。"
      },
      {
        "key": "layout",
        "label": "卡片排布",
        "type": "radio",
        "default": "alternate",
        "options": [
          {
            "value": "alternate",
            "label": "上下交错"
          },
          {
            "value": "below",
            "label": "全部在下"
          }
        ],
        "desc": "节点卡片相对轴线的位置：上下交错 / 全部在轴线下方。",
        "publicKey": "layout",
        "publicLabel": "卡片排布",
        "description": "节点卡片相对轴线的位置：上下交错 / 全部在轴线下方。"
      },
      {
        "key": "focusEnabled",
        "label": "重点节点",
        "type": "toggle",
        "default": true,
        "desc": "是否突出某一节点（放大 + 强调色）。",
        "publicKey": "focusEnabled",
        "publicLabel": "重点节点",
        "description": "是否突出某一节点（放大 + 强调色）。"
      },
      {
        "key": "focusIndex",
        "label": "重点序号",
        "type": "slider",
        "default": 4,
        "min": 1,
        "max": 6,
        "step": 1,
        "desc": "重点节点序号。",
        "publicKey": "focusIndex",
        "publicLabel": "重点序号",
        "description": "重点节点序号。"
      },
      {
        "key": "showValue",
        "label": "节点数值",
        "type": "toggle",
        "default": true,
        "desc": "每个节点的巨号数值（如时间段数值）。",
        "publicKey": "showValueLabels",
        "publicLabel": "节点数值",
        "description": "每个节点的巨号数值（如时间段数值）。"
      },
      {
        "key": "showNote",
        "label": "节点说明",
        "type": "toggle",
        "default": true,
        "desc": "每个节点卡片内的一句说明。",
        "publicKey": "showNote",
        "publicLabel": "节点说明",
        "description": "每个节点卡片内的一句说明。"
      },
      {
        "key": "showAxisCaps",
        "label": "轴端标签",
        "type": "toggle",
        "default": true,
        "desc": "轴线两端的「起点 / 当前」标签。",
        "publicKey": "showAxisCaps",
        "publicLabel": "轴端标签",
        "description": "轴线两端的「起点 / 当前」标签。"
      },
      {
        "key": "accentColor",
        "label": "强调色",
        "type": "color",
        "default": "#2c44a0",
        "options": [
          "#d8402e",
          "#e2742c",
          "#efbe2e",
          "#3c9a52",
          "#4da0c6",
          "#2c44a0",
          "#7a3c90"
        ],
        "desc": "眉标 / 轴线 / 重点节点的强调色。",
        "publicKey": "accentColor",
        "publicLabel": "强调色",
        "description": "眉标 / 轴线 / 重点节点的强调色。"
      },
      {
        "key": "showConclusion",
        "label": "结论文案",
        "type": "toggle",
        "default": true,
        "desc": "底部的一句装饰性结论。",
        "publicKey": "showConclusion",
        "publicLabel": "结论文案",
        "description": "底部的一句装饰性结论。"
      },
      {
        "key": "showSheetLabel",
        "label": "页码标签",
        "type": "toggle",
        "default": true,
        "desc": "右上角的页码 / 章节标签。",
        "publicKey": "showSheetLabel",
        "publicLabel": "页码标签",
        "description": "右上角的页码 / 章节标签。"
      }
    ],
    "defaultProps": {
      "nodeCount": 5,
      "layout": "alternate",
      "focusEnabled": true,
      "focusIndex": 4,
      "showValue": true,
      "showNote": true,
      "showAxisCaps": true,
      "accentColor": "#2c44a0",
      "showConclusion": true,
      "showSheetLabel": true,
      "copy": {
        "eyebrow": "Capital Cycle",
        "title": "资本周期回顾",
        "sheet": "TIMELINE · 85 / 86",
        "startCap": "周期起点",
        "endCap": "当前位置",
        "nodes": [
          {
            "time": "23 Q4",
            "title": "叙事启动",
            "note": "大模型热度点燃一级市场，资金开始排队入场。",
            "value": "58",
            "unit": "亿美元"
          },
          {
            "time": "24 Q1",
            "title": "冷启动",
            "note": "大额事件稀少，资本观望，估值预期重新校准。",
            "value": "41",
            "unit": "亿美元"
          },
          {
            "time": "24 Q2",
            "title": "加速",
            "note": "基础设施轮次集中落地，单笔金额快速抬升。",
            "value": "96",
            "unit": "亿美元"
          },
          {
            "time": "24 Q3",
            "title": "峰值",
            "note": "全年峰值季度，头部公司吸走绝大部分资金。",
            "value": "182",
            "unit": "亿美元"
          },
          {
            "time": "24 Q4",
            "title": "理性回落",
            "note": "热度由叙事转向兑现，资金更挑剔、更集中。",
            "value": "121",
            "unit": "亿美元"
          },
          {
            "time": "25 H1",
            "title": "结构分化",
            "note": "底层与应用分道，壁垒清晰者获得溢价。",
            "value": "—",
            "unit": "展望"
          }
        ],
        "conclusion": "一个完整周期里，资本从赌叙事走向看兑现。"
      }
    }
  },
  {
    "key": "theme05_page088",
    "themeKey": "theme05",
    "pageNumber": 88,
    "layout": "THEME05-088",
    "slot": "mosaic",
    "label": "影像档案 Mosaic",
    "bgClass": "",
    "controls": [
      {
        "key": "imageCount",
        "label": "图片槽数量",
        "type": "slider",
        "default": 3,
        "min": 0,
        "max": 5,
        "step": 1,
        "desc": "图片槽数量（0–5），按各图比例自适应均衡排布。为 0 时身份列铺满整幅、媒体侧转为色谱占位。",
        "publicKey": "imageCount",
        "publicLabel": "图片槽数量",
        "description": "图片槽数量（0–5），按各图比例自适应均衡排布。为 0 时身份列铺满整幅、媒体侧转为色谱占位。"
      },
      {
        "key": "imageSide",
        "label": "图片位置",
        "type": "radio",
        "default": "right",
        "options": [
          {
            "value": "right",
            "label": "右侧"
          },
          {
            "value": "left",
            "label": "左侧"
          }
        ],
        "desc": "图片区相对身份列的位置（有图片时生效）。",
        "publicKey": "imageSide",
        "publicLabel": "图片位置",
        "description": "图片区相对身份列的位置（有图片时生效）。"
      },
      {
        "key": "heroWeight",
        "label": "首图主图",
        "type": "toggle",
        "default": true,
        "desc": "首张图片额外加宽，作为视觉主图锚定构图。",
        "publicKey": "heroWeight",
        "publicLabel": "首图主图",
        "description": "首张图片额外加宽，作为视觉主图锚定构图。"
      },
      {
        "key": "showDisplay",
        "label": "巨号字标",
        "type": "toggle",
        "default": true,
        "desc": "身份列的巨号数字字标与说明。",
        "publicKey": "showDisplay",
        "publicLabel": "巨号字标",
        "description": "身份列的巨号数字字标与说明。"
      },
      {
        "key": "showIndex",
        "label": "图片编号",
        "type": "toggle",
        "default": true,
        "desc": "各图角上的序号标签。",
        "publicKey": "showIndex",
        "publicLabel": "图片编号",
        "description": "各图角上的序号标签。"
      },
      {
        "key": "tagCount",
        "label": "标签数量",
        "type": "slider",
        "default": 4,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "主题标签 chip 数量（0 隐藏整行）。",
        "publicKey": "tagCount",
        "publicLabel": "标签数量",
        "description": "主题标签 chip 数量（0 隐藏整行）。"
      },
      {
        "key": "showLead",
        "label": "引导文案",
        "type": "toggle",
        "default": true,
        "desc": "标题下方的一段引导说明。",
        "publicKey": "showLead",
        "publicLabel": "引导文案",
        "description": "标题下方的一段引导说明。"
      },
      {
        "key": "showMediaCaption",
        "label": "图注",
        "type": "toggle",
        "default": true,
        "desc": "图片区上方的装饰性图注。",
        "publicKey": "showMediaCaption",
        "publicLabel": "图注",
        "description": "图片区上方的装饰性图注。"
      },
      {
        "key": "accentColor",
        "label": "强调色",
        "type": "color",
        "default": "#d8402e",
        "options": [
          "#d8402e",
          "#e2742c",
          "#efbe2e",
          "#3c9a52",
          "#4da0c6",
          "#2c44a0",
          "#7a3c90"
        ],
        "desc": "眉标 / 巨号字标 / 强调条的强调色。",
        "publicKey": "accentColor",
        "publicLabel": "强调色",
        "description": "眉标 / 巨号字标 / 强调条的强调色。"
      },
      {
        "key": "showConclusion",
        "label": "结论文案",
        "type": "toggle",
        "default": true,
        "desc": "底部的一句装饰性结论。",
        "publicKey": "showConclusion",
        "publicLabel": "结论文案",
        "description": "底部的一句装饰性结论。"
      },
      {
        "key": "showSheetLabel",
        "label": "页码标签",
        "type": "toggle",
        "default": true,
        "desc": "右上角的页码 / 章节标签。",
        "publicKey": "showSheetLabel",
        "publicLabel": "页码标签",
        "description": "右上角的页码 / 章节标签。"
      }
    ],
    "defaultProps": {
      "imageCount": 3,
      "imageSide": "right",
      "heroWeight": true,
      "showDisplay": true,
      "showIndex": true,
      "tagCount": 4,
      "showLead": true,
      "showMediaCaption": true,
      "accentColor": "#d8402e",
      "showConclusion": true,
      "showSheetLabel": true,
      "copy": {
        "eyebrow": "Visual Field Notes",
        "title": "代表企业影像",
        "sheet": "IMAGE · 86 / 86",
        "display": "97",
        "displayCap": "笔大额事件 · 影像档案",
        "lead": "用一组现场影像收束报告 —— 实验室、数据中心、路演与产品现场，构成 2024 美国 AI 资本最直观的注脚。",
        "tags": [
          "大模型",
          "算力集群",
          "机器人",
          "医疗 AI"
        ],
        "mediaCap": "影像档案",
        "mediaUnit": "DROP IMAGE",
        "conclusion": "数字之外，是一群正在把资本变成产品的人。"
      }
    }
  },
  {
    "key": "theme05_page089",
    "themeKey": "theme05",
    "pageNumber": 89,
    "layout": "THEME05-089",
    "slot": "plate",
    "label": "全幅影像 Plate",
    "bgClass": "",
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
        "default": "goey",
        "def": "goey",
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
        "key": "imageCount",
        "label": "图片槽数量",
        "type": "slider",
        "default": 1,
        "min": 0,
        "max": 3,
        "step": 1,
        "dependsOn": "backgroundMode",
        "dependsOnValue": "media",
        "desc": "全幅图片槽数量（0–3）。1 张铺满整幅；多张按比例自适应分列；为 0 时显示色谱占位。",
        "publicKey": "imageCount",
        "publicLabel": "图片槽数量",
        "description": "全幅图片槽数量（0–3）。1 张铺满整幅；多张按比例自适应分列；为 0 时显示色谱占位。"
      },
      {
        "key": "panelPosition",
        "label": "标题位置",
        "type": "radio",
        "default": "tl",
        "options": [
          {
            "value": "tl",
            "label": "左上"
          },
          {
            "value": "tr",
            "label": "右上"
          },
          {
            "value": "bl",
            "label": "左下"
          }
        ],
        "desc": "标题面板的锚定位置（左下时自动隐藏底部指标条以避免重叠）。",
        "publicKey": "panelPosition",
        "publicLabel": "标题位置",
        "description": "标题面板的锚定位置（左下时自动隐藏底部指标条以避免重叠）。"
      },
      {
        "key": "panelTheme",
        "label": "面板主题",
        "type": "radio",
        "default": "ink",
        "options": [
          {
            "value": "ink",
            "label": "墨色"
          },
          {
            "value": "paper",
            "label": "纸色"
          },
          {
            "value": "color",
            "label": "色块"
          }
        ],
        "desc": "标题面板背景：墨色 / 纸色 / 强调色块（保证压在图片上的可读性）。",
        "publicKey": "panelTheme",
        "publicLabel": "面板主题",
        "description": "标题面板背景：墨色 / 纸色 / 强调色块（保证压在图片上的可读性）。"
      },
      {
        "key": "showKicker",
        "label": "引导文案",
        "type": "toggle",
        "default": true,
        "desc": "标题面板内的一句引导说明。",
        "publicKey": "showKicker",
        "publicLabel": "引导文案",
        "description": "标题面板内的一句引导说明。"
      },
      {
        "key": "showTicker",
        "label": "指标条",
        "type": "toggle",
        "default": true,
        "desc": "底部贯穿的指标 ticker（左下标题时自动隐藏）。",
        "publicKey": "showTicker",
        "publicLabel": "指标条",
        "description": "底部贯穿的指标 ticker（左下标题时自动隐藏）。"
      },
      {
        "key": "tickerCount",
        "label": "指标条目数",
        "type": "slider",
        "default": 4,
        "min": 1,
        "max": 4,
        "step": 1,
        "desc": "底部指标条的条目数量。",
        "publicKey": "itemCount",
        "publicLabel": "指标条目数",
        "description": "底部指标条的条目数量。"
      },
      {
        "key": "showScrim",
        "label": "压暗蒙层",
        "type": "toggle",
        "default": true,
        "desc": "图片上的渐变压暗蒙层（提升叠字可读性）。",
        "publicKey": "showScrim",
        "publicLabel": "压暗蒙层",
        "description": "图片上的渐变压暗蒙层（提升叠字可读性）。"
      },
      {
        "key": "showMediaCaption",
        "label": "图注",
        "type": "toggle",
        "default": true,
        "desc": "图片角上的装饰性图注。",
        "publicKey": "showMediaCaption",
        "publicLabel": "图注",
        "description": "图片角上的装饰性图注。"
      },
      {
        "key": "accentColor",
        "label": "强调色",
        "type": "color",
        "default": "#d8402e",
        "options": [
          "#d8402e",
          "#e2742c",
          "#efbe2e",
          "#3c9a52",
          "#4da0c6",
          "#2c44a0",
          "#7a3c90"
        ],
        "desc": "眉标 / 色块面板 / 指标条强调色。",
        "publicKey": "accentColor",
        "publicLabel": "强调色",
        "description": "眉标 / 色块面板 / 指标条强调色。"
      },
      {
        "key": "showSheetLabel",
        "label": "页码标签",
        "type": "toggle",
        "default": true,
        "desc": "角上的页码 / 章节标签。",
        "publicKey": "showSheetLabel",
        "publicLabel": "页码标签",
        "description": "角上的页码 / 章节标签。"
      }
    ],
    "defaultProps": {
      "backgroundMode": "unicorn",
      "unicornScene": "goey",
      "imageCount": 1,
      "panelPosition": "tl",
      "panelTheme": "ink",
      "showKicker": true,
      "showTicker": true,
      "tickerCount": 4,
      "showScrim": true,
      "showMediaCaption": true,
      "accentColor": "#d8402e",
      "showSheetLabel": true,
      "copy": {
        "eyebrow": "Field · 现场",
        "title": "硅谷的一天",
        "sheet": "IMAGE · 87 / 90",
        "kicker": "湾区是美国 AI 资本最密集的现场 —— 实验室、机房与路演同时运转。",
        "ticker": [
          [
            "集群占比",
            "41%"
          ],
          [
            "大额事件",
            "39 笔"
          ],
          [
            "平均单笔",
            "11.6 亿美元"
          ],
          [
            "头部公司",
            "OpenAI · Anthropic"
          ]
        ],
        "mediaCap": "现场影像",
        "mediaUnit": "DROP IMAGE"
      }
    }
  },
  {
    "key": "theme05_page090",
    "themeKey": "theme05",
    "pageNumber": 90,
    "layout": "THEME05-090",
    "slot": "mekko",
    "label": "变宽堆叠 Mekko",
    "bgClass": "",
    "controls": [
      {
        "key": "colCount",
        "label": "列数量",
        "type": "slider",
        "default": 4,
        "min": 2,
        "max": 5,
        "step": 1,
        "desc": "变宽列的数量（2–5）。列宽按各列体量自动分配。",
        "publicKey": "colCount",
        "publicLabel": "列数量",
        "description": "变宽列的数量（2–5）。列宽按各列体量自动分配。"
      },
      {
        "key": "segmentCount",
        "label": "分段数量",
        "type": "slider",
        "default": 4,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "每列内堆叠分段的数量（2–4）。列高按所选分段求和归一。",
        "publicKey": "segmentCount",
        "publicLabel": "分段数量",
        "description": "每列内堆叠分段的数量（2–4）。列高按所选分段求和归一。"
      },
      {
        "key": "focusEnabled",
        "label": "重点列",
        "type": "toggle",
        "default": true,
        "desc": "是否突出某一列（其余列淡出）。",
        "publicKey": "focusEnabled",
        "publicLabel": "重点列",
        "description": "是否突出某一列（其余列淡出）。"
      },
      {
        "key": "focusIndex",
        "label": "重点序号",
        "type": "slider",
        "default": 1,
        "min": 1,
        "max": 5,
        "step": 1,
        "desc": "重点列序号（按当前列顺序）。",
        "publicKey": "focusIndex",
        "publicLabel": "重点序号",
        "description": "重点列序号（按当前列顺序）。"
      },
      {
        "key": "showSegValue",
        "label": "分段占比",
        "type": "toggle",
        "default": true,
        "desc": "足够高的分段内显示其列内占比 %。",
        "publicKey": "showSegValue",
        "publicLabel": "分段占比",
        "description": "足够高的分段内显示其列内占比 %。"
      },
      {
        "key": "showColTotal",
        "label": "列体量标注",
        "type": "toggle",
        "default": true,
        "desc": "各列下方的体量数值与整体占比。",
        "publicKey": "showValueLabels",
        "publicLabel": "列体量标注",
        "description": "各列下方的体量数值与整体占比。"
      },
      {
        "key": "showLegend",
        "label": "分段图例",
        "type": "toggle",
        "default": true,
        "desc": "顶部的分段类别图例。",
        "publicKey": "showLegend",
        "publicLabel": "分段图例",
        "description": "顶部的分段类别图例。"
      },
      {
        "key": "accentColor",
        "label": "强调色",
        "type": "color",
        "default": "#d8402e",
        "options": [
          "#d8402e",
          "#e2742c",
          "#efbe2e",
          "#3c9a52",
          "#4da0c6",
          "#2c44a0",
          "#7a3c90"
        ],
        "desc": "眉标 / 重点列标记强调色。",
        "publicKey": "accentColor",
        "publicLabel": "强调色",
        "description": "眉标 / 重点列标记强调色。"
      },
      {
        "key": "showConclusion",
        "label": "结论文案",
        "type": "toggle",
        "default": true,
        "desc": "底部的一句装饰性结论。",
        "publicKey": "showConclusion",
        "publicLabel": "结论文案",
        "description": "底部的一句装饰性结论。"
      },
      {
        "key": "showSheetLabel",
        "label": "页码标签",
        "type": "toggle",
        "default": true,
        "desc": "右上角的页码 / 章节标签。",
        "publicKey": "showSheetLabel",
        "publicLabel": "页码标签",
        "description": "右上角的页码 / 章节标签。"
      }
    ],
    "defaultProps": {
      "colCount": 4,
      "segmentCount": 4,
      "focusEnabled": true,
      "focusIndex": 1,
      "showSegValue": true,
      "showColTotal": true,
      "showLegend": true,
      "accentColor": "#d8402e",
      "showConclusion": true,
      "showSheetLabel": true,
      "copy": {
        "eyebrow": "Size × Composition",
        "title": "赛道规模 × 轮次构成",
        "sheet": "CHART · 88 / 90",
        "intro": "列宽 = 赛道融资体量，列内分段 = 该赛道各轮次占比 —— 一张图同时读出「谁更大」与「钱在哪个阶段」。",
        "unit": "亿美元",
        "segs": [
          {
            "name": "早期"
          },
          {
            "name": "成长期"
          },
          {
            "name": "后期"
          },
          {
            "name": "并购/上市"
          }
        ],
        "cols": [
          {
            "name": "基础设施",
            "en": "Infra",
            "total": 182,
            "parts": [
              28,
              64,
              70,
              20
            ]
          },
          {
            "name": "应用层",
            "en": "Apps",
            "total": 121,
            "parts": [
              52,
              44,
              18,
              7
            ]
          },
          {
            "name": "算力芯片",
            "en": "Compute",
            "total": 110,
            "parts": [
              16,
              38,
              40,
              16
            ]
          },
          {
            "name": "企业服务",
            "en": "Enterprise",
            "total": 64,
            "parts": [
              22,
              26,
              12,
              4
            ]
          },
          {
            "name": "医疗 AI",
            "en": "Health",
            "total": 47,
            "parts": [
              20,
              17,
              8,
              2
            ]
          }
        ],
        "conclusion": "基础设施不仅最大，且资金集中在后期 —— 兑现压力最高。"
      }
    }
  },
  {
    "key": "theme05_page091",
    "themeKey": "theme05",
    "pageNumber": 91,
    "layout": "THEME05-091",
    "slot": "versus",
    "label": "对比大数字 Versus",
    "bgClass": "",
    "controls": [
      {
        "key": "operator",
        "label": "对比符号",
        "type": "radio",
        "default": "ratio",
        "options": [
          {
            "value": "ratio",
            "label": "∶"
          },
          {
            "value": "times",
            "label": "×"
          },
          {
            "value": "arrow",
            "label": "→"
          }
        ],
        "desc": "两个数字之间的运算 / 关系符号。",
        "publicKey": "operator",
        "publicLabel": "对比符号",
        "description": "两个数字之间的运算 / 关系符号。"
      },
      {
        "key": "emphasize",
        "label": "强调侧",
        "type": "radio",
        "default": "left",
        "options": [
          {
            "value": "left",
            "label": "左"
          },
          {
            "value": "right",
            "label": "右"
          },
          {
            "value": "both",
            "label": "两侧"
          }
        ],
        "desc": "用强调色着重的一侧数字。",
        "publicKey": "emphasize",
        "publicLabel": "强调侧",
        "description": "用强调色着重的一侧数字。"
      },
      {
        "key": "showBadge",
        "label": "倍数徽标",
        "type": "toggle",
        "default": true,
        "desc": "中心的比值 / 倍数徽标。",
        "publicKey": "showBadge",
        "publicLabel": "倍数徽标",
        "description": "中心的比值 / 倍数徽标。"
      },
      {
        "key": "showCaption",
        "label": "数字说明",
        "type": "toggle",
        "default": true,
        "desc": "每个数字下方的一句说明。",
        "publicKey": "showCaption",
        "publicLabel": "数字说明",
        "description": "每个数字下方的一句说明。"
      },
      {
        "key": "auxCount",
        "label": "辅助指标数",
        "type": "slider",
        "default": 3,
        "min": 0,
        "max": 3,
        "step": 1,
        "desc": "底部支撑指标的数量（0 隐藏整行）。",
        "publicKey": "auxCount",
        "publicLabel": "辅助指标数",
        "description": "底部支撑指标的数量（0 隐藏整行）。"
      },
      {
        "key": "showClosing",
        "label": "结语文案",
        "type": "toggle",
        "default": true,
        "desc": "底部的一句结语。",
        "publicKey": "showClosing",
        "publicLabel": "结语文案",
        "description": "底部的一句结语。"
      },
      {
        "key": "accentColor",
        "label": "强调色",
        "type": "color",
        "default": "#d8402e",
        "options": [
          "#d8402e",
          "#e2742c",
          "#efbe2e",
          "#3c9a52",
          "#4da0c6",
          "#2c44a0",
          "#7a3c90"
        ],
        "desc": "眉标 / 强调侧数字 / 徽标的强调色。",
        "publicKey": "accentColor",
        "publicLabel": "强调色",
        "description": "眉标 / 强调侧数字 / 徽标的强调色。"
      },
      {
        "key": "showWordmark",
        "label": "品牌标识",
        "type": "toggle",
        "default": true,
        "desc": "左下角的品牌标识。",
        "publicKey": "showWordmark",
        "publicLabel": "品牌标识",
        "description": "左下角的品牌标识。"
      },
      {
        "key": "showColorBand",
        "label": "色谱条",
        "type": "toggle",
        "default": true,
        "desc": "右下角的装饰色谱条。",
        "publicKey": "showColorBand",
        "publicLabel": "色谱条",
        "description": "右下角的装饰色谱条。"
      },
      {
        "key": "showSheetLabel",
        "label": "页码标签",
        "type": "toggle",
        "default": true,
        "desc": "右上角的页码 / 章节标签。",
        "publicKey": "showSheetLabel",
        "publicLabel": "页码标签",
        "description": "右上角的页码 / 章节标签。"
      }
    ],
    "defaultProps": {
      "operator": "ratio",
      "emphasize": "left",
      "showBadge": true,
      "showCaption": true,
      "auxCount": 3,
      "showClosing": true,
      "accentColor": "#d8402e",
      "showWordmark": true,
      "showColorBand": true,
      "showSheetLabel": true,
      "copy": {
        "eyebrow": "Concentration",
        "title": "头部与长尾",
        "sheet": "BIG NUMBER · 89 / 90",
        "left": {
          "label": "TOP 5 公司",
          "value": "63",
          "unit": "%",
          "caption": "拿走全年大额融资的六成以上。"
        },
        "right": {
          "label": "其余 90+ 公司",
          "value": "37",
          "unit": "%",
          "caption": "分食剩下的不到四成资金。"
        },
        "badge": {
          "value": "1.7×",
          "note": "头部 / 长尾 倍差"
        },
        "aux": [
          [
            "大额事件",
            "97",
            "笔"
          ],
          [
            "头部均单笔",
            "24",
            "亿美元"
          ],
          [
            "长尾均单笔",
            "3.1",
            "亿美元"
          ]
        ],
        "wordmark": "AICL",
        "closing": "资本高度向头部集中，长尾的窗口正在收窄。"
      }
    }
  },
  {
    "key": "theme05_page092",
    "themeKey": "theme05",
    "pageNumber": 92,
    "layout": "THEME05-092",
    "slot": "lede",
    "label": "金句 Lede",
    "bgClass": "",
    "controls": [
      {
        "key": "theme",
        "label": "背景主题",
        "type": "radio",
        "default": "paper",
        "options": [
          {
            "value": "paper",
            "label": "纸色"
          },
          {
            "value": "dark",
            "label": "深色"
          },
          {
            "value": "color",
            "label": "色块"
          }
        ],
        "desc": "页面背景：纸色 / 深色 / 整页强调色块。",
        "publicKey": "theme",
        "publicLabel": "背景主题",
        "description": "页面背景：纸色 / 深色 / 整页强调色块。"
      },
      {
        "key": "bgColor",
        "label": "色块背景",
        "type": "color",
        "default": "#2c44a0",
        "options": [
          "#d8402e",
          "#e2742c",
          "#efbe2e",
          "#3c9a52",
          "#4da0c6",
          "#2c44a0",
          "#7a3c90"
        ],
        "desc": "「色块」主题下的整页背景色（其它主题忽略）。",
        "publicKey": "bgColor",
        "publicLabel": "色块背景",
        "description": "「色块」主题下的整页背景色（其它主题忽略）。"
      },
      {
        "key": "align",
        "label": "对齐",
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
        "desc": "金句对齐方式（左对齐时启用首字下沉）。",
        "publicKey": "align",
        "publicLabel": "对齐",
        "description": "金句对齐方式（左对齐时启用首字下沉）。"
      },
      {
        "key": "showInitial",
        "label": "首字下沉",
        "type": "toggle",
        "default": true,
        "desc": "句首的巨号下沉首字（仅左对齐生效）。",
        "publicKey": "showInitial",
        "publicLabel": "首字下沉",
        "description": "句首的巨号下沉首字（仅左对齐生效）。"
      },
      {
        "key": "emphasis",
        "label": "关键词强调",
        "type": "toggle",
        "default": true,
        "desc": "用强调色高亮句中的关键词。",
        "publicKey": "emphasis",
        "publicLabel": "关键词强调",
        "description": "用强调色高亮句中的关键词。"
      },
      {
        "key": "showSource",
        "label": "来源署名",
        "type": "toggle",
        "default": true,
        "desc": "金句下方的来源 / 署名行。",
        "publicKey": "showSource",
        "publicLabel": "来源署名",
        "description": "金句下方的来源 / 署名行。"
      },
      {
        "key": "showTag",
        "label": "主题标签",
        "type": "toggle",
        "default": true,
        "desc": "顶部的一枚主题标签。",
        "publicKey": "showTag",
        "publicLabel": "主题标签",
        "description": "顶部的一枚主题标签。"
      },
      {
        "key": "accentColor",
        "label": "强调色",
        "type": "color",
        "default": "#d8402e",
        "options": [
          "#d8402e",
          "#e2742c",
          "#efbe2e",
          "#3c9a52",
          "#4da0c6",
          "#2c44a0",
          "#7a3c90"
        ],
        "desc": "眉标 / 首字 / 关键词强调色。",
        "publicKey": "accentColor",
        "publicLabel": "强调色",
        "description": "眉标 / 首字 / 关键词强调色。"
      },
      {
        "key": "showColorBand",
        "label": "色谱条",
        "type": "toggle",
        "default": true,
        "desc": "底部贯穿的色谱条带。",
        "publicKey": "showColorBand",
        "publicLabel": "色谱条",
        "description": "底部贯穿的色谱条带。"
      },
      {
        "key": "showSheetLabel",
        "label": "页码标签",
        "type": "toggle",
        "default": true,
        "desc": "右上角的页码 / 章节标签。",
        "publicKey": "showSheetLabel",
        "publicLabel": "页码标签",
        "description": "右上角的页码 / 章节标签。"
      }
    ],
    "defaultProps": {
      "theme": "paper",
      "bgColor": "#2c44a0",
      "align": "left",
      "showInitial": true,
      "emphasis": true,
      "showSource": true,
      "showTag": true,
      "accentColor": "#d8402e",
      "showColorBand": true,
      "showSheetLabel": true,
      "copy": {
        "eyebrow": "Editorial · 收束",
        "sheet": "QUOTE · 90 / 90",
        "lead": "当资本不再为故事付费，AI 公司必须用收入证明自己配得上这个价格。",
        "hot": "用收入证明",
        "source": "— 美国大额融资 AI 公司调研报告 · 结语",
        "tag": "RE-ANCHORING VALUE"
      }
    }
  },
  {
    "key": "theme05_page093",
    "themeKey": "theme05",
    "pageNumber": 93,
    "layout": "THEME05-093",
    "slot": "colophon",
    "label": "数据来源 Appendix",
    "bgClass": "",
    "controls": [
      {
        "key": "sourceCount",
        "label": "来源条目数",
        "type": "slider",
        "default": 4,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "数据来源台账的条目数量。",
        "publicKey": "itemCount",
        "publicLabel": "来源条目数",
        "description": "数据来源台账的条目数量。"
      },
      {
        "key": "columns",
        "label": "来源列数",
        "type": "slider",
        "default": 2,
        "min": 1,
        "max": 2,
        "step": 1,
        "desc": "数据来源台账的排布列数。",
        "publicKey": "columns",
        "publicLabel": "来源列数",
        "description": "数据来源台账的排布列数。"
      },
      {
        "key": "showScopePanel",
        "label": "口径面板",
        "type": "toggle",
        "default": true,
        "desc": "左侧的研究口径面板（关闭则来源台账铺满整幅）。",
        "publicKey": "showScopePanel",
        "publicLabel": "口径面板",
        "description": "左侧的研究口径面板（关闭则来源台账铺满整幅）。"
      },
      {
        "key": "specRowCount",
        "label": "口径行数",
        "type": "slider",
        "default": 5,
        "min": 2,
        "max": 5,
        "step": 1,
        "desc": "研究口径面板的行数。",
        "publicKey": "specRowCount",
        "publicLabel": "口径行数",
        "description": "研究口径面板的行数。"
      },
      {
        "key": "panelTheme",
        "label": "面板主题",
        "type": "radio",
        "default": "dark",
        "options": [
          {
            "value": "dark",
            "label": "深色"
          },
          {
            "value": "color",
            "label": "色块"
          },
          {
            "value": "paper",
            "label": "纸色"
          }
        ],
        "desc": "口径面板背景：深色 / 强调色块 / 纸色。",
        "publicKey": "panelTheme",
        "publicLabel": "面板主题",
        "description": "口径面板背景：深色 / 强调色块 / 纸色。"
      },
      {
        "key": "focusEnabled",
        "label": "重点来源",
        "type": "toggle",
        "default": false,
        "desc": "是否突出某一条数据来源。",
        "publicKey": "focusEnabled",
        "publicLabel": "重点来源",
        "description": "是否突出某一条数据来源。"
      },
      {
        "key": "focusIndex",
        "label": "重点来源序号",
        "type": "slider",
        "default": 1,
        "min": 1,
        "max": 4,
        "step": 1,
        "desc": "被突出的来源序号（从 1 起）。",
        "publicKey": "focusIndex",
        "publicLabel": "重点来源序号",
        "description": "被突出的来源序号（从 1 起）。"
      },
      {
        "key": "showMethodChips",
        "label": "方法标签带",
        "type": "toggle",
        "default": true,
        "desc": "底部的方法说明标签带。",
        "publicKey": "showMethodChips",
        "publicLabel": "方法标签带",
        "description": "底部的方法说明标签带。"
      },
      {
        "key": "methodCount",
        "label": "方法标签数",
        "type": "slider",
        "default": 4,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "方法说明标签的数量。",
        "publicKey": "methodCount",
        "publicLabel": "方法标签数",
        "description": "方法说明标签的数量。"
      },
      {
        "key": "showLead",
        "label": "引导说明",
        "type": "toggle",
        "default": true,
        "desc": "标题下方的一句引导说明。",
        "publicKey": "showLead",
        "publicLabel": "引导说明",
        "description": "标题下方的一句引导说明。"
      },
      {
        "key": "accentColor",
        "label": "强调色",
        "type": "color",
        "default": "#4da0c6",
        "options": [
          "#d8402e",
          "#e2742c",
          "#efbe2e",
          "#3c9a52",
          "#4da0c6",
          "#2c44a0",
          "#7a3c90"
        ],
        "desc": "眉标 / 来源序号 /「色块」主题面板 / 重点项的颜色。",
        "publicKey": "accentColor",
        "publicLabel": "强调色",
        "description": "眉标 / 来源序号 /「色块」主题面板 / 重点项的颜色。"
      },
      {
        "key": "showConclusion",
        "label": "结论文案",
        "type": "toggle",
        "default": true,
        "desc": "底部的一句装饰性结论。",
        "publicKey": "showConclusion",
        "publicLabel": "结论文案",
        "description": "底部的一句装饰性结论。"
      },
      {
        "key": "showSheetLabel",
        "label": "页码标签",
        "type": "toggle",
        "default": true,
        "desc": "右上角的页码 / 章节标签。",
        "publicKey": "showSheetLabel",
        "publicLabel": "页码标签",
        "description": "右上角的页码 / 章节标签。"
      }
    ],
    "defaultProps": {
      "sourceCount": 4,
      "columns": 2,
      "showScopePanel": true,
      "specRowCount": 5,
      "panelTheme": "dark",
      "focusEnabled": false,
      "focusIndex": 1,
      "showMethodChips": true,
      "methodCount": 4,
      "showLead": true,
      "accentColor": "#4da0c6",
      "showConclusion": true,
      "showSheetLabel": true,
      "copy": {
        "eyebrow": "APPENDIX · 数据来源与研究方法",
        "title": "数据来源与研究方法",
        "sheet": "APPENDIX · A1",
        "lead": "本报告基于公开融资数据与行业访谈交叉验证，统一口径后汇总。",
        "scopeCap": "研究口径",
        "scopeUnit": "SCOPE",
        "scope": [
          {
            "k": "数据口径",
            "v": "≥ $100M"
          },
          {
            "k": "时间范围",
            "v": "2024 FY"
          },
          {
            "k": "样本规模",
            "v": "97 笔"
          },
          {
            "k": "覆盖地区",
            "v": "美国"
          },
          {
            "k": "货币单位",
            "v": "美元"
          }
        ],
        "sourceCap": "数据来源",
        "sourceUnit": "SOURCES",
        "sources": [
          {
            "name": "公开融资数据库",
            "en": "FUNDING DB",
            "d": "一级市场融资事件、金额与轮次记录。"
          },
          {
            "name": "公司公告与新闻稿",
            "en": "FILINGS",
            "d": "官方融资公告、估值与投资人披露。"
          },
          {
            "name": "行业访谈",
            "en": "INTERVIEWS",
            "d": "投资人与从业者的定性交叉验证。"
          },
          {
            "name": "第三方研究报告",
            "en": "RESEARCH",
            "d": "赛道规模与趋势的外部参照。"
          }
        ],
        "methodCap": "方法说明",
        "methods": [
          "口径统一",
          "事件去重",
          "区间分层",
          "汇率折算"
        ],
        "conclusion": "口径与方法决定结论的可比性。"
      }
    }
  },
  {
    "key": "theme05_page094",
    "themeKey": "theme05",
    "pageNumber": 94,
    "layout": "THEME05-094",
    "slot": "endcap",
    "label": "封底 Back Cover",
    "bgClass": "",
    "controls": [
      {
        "key": "theme",
        "label": "背景主题",
        "type": "radio",
        "default": "dark",
        "options": [
          {
            "value": "dark",
            "label": "深色"
          },
          {
            "value": "paper",
            "label": "纸色"
          },
          {
            "value": "color",
            "label": "色块"
          }
        ],
        "desc": "页面背景：深色 / 纸色 / 整页强调色块。",
        "publicKey": "theme",
        "publicLabel": "背景主题",
        "description": "页面背景：深色 / 纸色 / 整页强调色块。"
      },
      {
        "key": "bgColor",
        "label": "色块背景",
        "type": "color",
        "default": "#2c44a0",
        "options": [
          "#d8402e",
          "#e2742c",
          "#efbe2e",
          "#3c9a52",
          "#4da0c6",
          "#2c44a0",
          "#7a3c90"
        ],
        "desc": "「色块」主题下的整页背景色（其它主题忽略）。",
        "publicKey": "bgColor",
        "publicLabel": "色块背景",
        "description": "「色块」主题下的整页背景色（其它主题忽略）。"
      },
      {
        "key": "layout",
        "label": "构图方式",
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
        "desc": "大字与信息的整体构图：左对齐（带侧栏面板）/ 居中。",
        "publicKey": "layout",
        "publicLabel": "构图方式",
        "description": "大字与信息的整体构图：左对齐（带侧栏面板）/ 居中。"
      },
      {
        "key": "showMetaBar",
        "label": "顶部品牌条",
        "type": "toggle",
        "default": true,
        "desc": "顶部的品牌标识与元信息条。",
        "publicKey": "showMetaBar",
        "publicLabel": "顶部品牌条",
        "description": "顶部的品牌标识与元信息条。"
      },
      {
        "key": "showPanel",
        "label": "版本信息面板",
        "type": "toggle",
        "default": true,
        "desc": "右侧 COLOPHON 版本信息面板（居中构图时转为底部信息行）。",
        "publicKey": "showPanel",
        "publicLabel": "版本信息面板",
        "description": "右侧 COLOPHON 版本信息面板（居中构图时转为底部信息行）。"
      },
      {
        "key": "specRowCount",
        "label": "信息行数",
        "type": "slider",
        "default": 4,
        "min": 1,
        "max": 4,
        "step": 1,
        "desc": "版本信息面板的行数。",
        "publicKey": "specRowCount",
        "publicLabel": "信息行数",
        "description": "版本信息面板的行数。"
      },
      {
        "key": "showClosing",
        "label": "结语标语",
        "type": "toggle",
        "default": true,
        "desc": "大字下方的一句结语标语。",
        "publicKey": "showClosing",
        "publicLabel": "结语标语",
        "description": "大字下方的一句结语标语。"
      },
      {
        "key": "showSwatches",
        "label": "色谱色卡",
        "type": "toggle",
        "default": true,
        "desc": "面板内的七色色谱色卡。",
        "publicKey": "showSwatches",
        "publicLabel": "色谱色卡",
        "description": "面板内的七色色谱色卡。"
      },
      {
        "key": "showColorBand",
        "label": "底部色谱条",
        "type": "toggle",
        "default": true,
        "desc": "页面底部贯穿的色谱条带。",
        "publicKey": "showColorBand",
        "publicLabel": "底部色谱条",
        "description": "页面底部贯穿的色谱条带。"
      },
      {
        "key": "accentColor",
        "label": "强调色",
        "type": "color",
        "default": "#d8402e",
        "options": [
          "#d8402e",
          "#e2742c",
          "#efbe2e",
          "#3c9a52",
          "#4da0c6",
          "#2c44a0",
          "#7a3c90"
        ],
        "desc": "眉标 / 大字强调的颜色。",
        "publicKey": "accentColor",
        "publicLabel": "强调色",
        "description": "眉标 / 大字强调的颜色。"
      },
      {
        "key": "showSheetLabel",
        "label": "页码标签",
        "type": "toggle",
        "default": false,
        "desc": "右上角的封底标签（封底默认隐藏）。",
        "publicKey": "showSheetLabel",
        "publicLabel": "页码标签",
        "description": "右上角的封底标签（封底默认隐藏）。"
      }
    ],
    "defaultProps": {
      "theme": "dark",
      "bgColor": "#2c44a0",
      "layout": "left",
      "showMetaBar": true,
      "showPanel": true,
      "specRowCount": 4,
      "showClosing": true,
      "showSwatches": true,
      "showColorBand": true,
      "accentColor": "#d8402e",
      "showSheetLabel": false,
      "copy": {
        "brand": "AICL",
        "meta": [
          "UNITED STATES · AI",
          "2024 FY",
          "DEALS ≥ $100M"
        ],
        "eyebrow": "THANK YOU · 感谢阅读",
        "display": "感谢阅读",
        "titleRecap": "美国大额融资 AI 公司调研报告",
        "closing": "从资本流向，看 AI 产业下一阶段的真实重心。",
        "panelHead": "COLOPHON",
        "specs": [
          {
            "k": "研究主题",
            "v": "美国 AI"
          },
          {
            "k": "数据口径",
            "v": "≥ $100M"
          },
          {
            "k": "大额事件",
            "v": "97 笔"
          },
          {
            "k": "报告日期",
            "v": "2026.06"
          }
        ],
        "sheet": "BACK COVER"
      }
    }
  }
];
