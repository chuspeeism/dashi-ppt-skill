export const theme = {
  "key": "theme08",
  "displayName": "黑金实验风",
  "label": "黑金实验风",
  "name": "黑金实验风",
  "scenario": "高端发布、品牌提案、实验性概念、奢华科技叙事",
  "audience": "高端品牌、创意总监、科技品牌、发布会策划团队",
  "mode": "replace"
};
export const pages = [
  {
    "key": "theme08_page001",
    "themeKey": "theme08",
    "pageNumber": 1,
    "layout": "THEME08-001",
    "slot": "sup1",
    "label": "补充封面-① 智联万物",
    "bgClass": "",
    "controls": [
      {
        "key": "backgroundTheme",
        "label": "背景主题",
        "type": "enum",
        "default": "primary",
        "options": [
          "primary",
          "muted"
        ],
        "desc": "主色(渐变) 或 次色(淡紫灰) 底色",
        "publicKey": "backgroundTheme",
        "publicLabel": "背景主题",
        "description": "主色(渐变) 或 次色(淡紫灰) 底色"
      },
      {
        "key": "mediaCount",
        "label": "图片数量",
        "type": "number",
        "default": 3,
        "min": 0,
        "max": 3,
        "step": 1,
        "desc": "右侧拼贴照片槽数量（0–3）",
        "publicKey": "mediaCount",
        "publicLabel": "图片数量",
        "description": "右侧拼贴照片槽数量（0–3）"
      },
      {
        "key": "showDecor",
        "label": "装饰元素",
        "type": "boolean",
        "default": true,
        "desc": "手绘箭头、火花与批注文案的显示/隐藏",
        "publicKey": "showDecor",
        "publicLabel": "装饰元素",
        "description": "手绘箭头、火花与批注文案的显示/隐藏"
      },
      {
        "key": "showIndex",
        "label": "页码角标",
        "type": "boolean",
        "default": true,
        "desc": "右下角 01 / 03 索引角标的显示/隐藏",
        "publicKey": "showIndex",
        "publicLabel": "页码角标",
        "description": "右下角 01 / 03 索引角标的显示/隐藏"
      }
    ],
    "defaultProps": {
      "backgroundTheme": "primary",
      "mediaCount": 3,
      "showDecor": true,
      "showIndex": true,
      "eyebrow": "TECH KEYNOTE",
      "yearTag": "2026",
      "headlineLine1": "智联万物",
      "headlineHl": "重构",
      "headlineTail": "体验",
      "subtitle": "2026 全新产品体系发布暨技术路演",
      "goldenLine": "以技术突破，定义下一代数字生活",
      "handNote": "NEXT-GEN DIGITAL LIFE",
      "indexNum": "01",
      "indexTotal": "03",
      "photos": [
        {
          "placeholder": "旗舰新品实拍",
          "caption": "旗舰新品",
          "capClass": "supp-pink"
        },
        {
          "placeholder": "发布会现场",
          "caption": "技术路演",
          "capClass": ""
        },
        {
          "placeholder": "产品细节",
          "caption": "NEXT-GEN",
          "capClass": "supp-ink"
        }
      ]
    }
  },
  {
    "key": "theme08_page002",
    "themeKey": "theme08",
    "pageNumber": 2,
    "layout": "THEME08-002",
    "slot": "sup2",
    "label": "补充封面-② 深耕教学",
    "bgClass": "",
    "controls": [
      {
        "key": "backgroundTheme",
        "label": "背景主题",
        "type": "enum",
        "default": "primary",
        "options": [
          "primary",
          "muted"
        ],
        "desc": "主色(电光黄) 或 次色(淡紫灰) 底色",
        "publicKey": "backgroundTheme",
        "publicLabel": "背景主题",
        "description": "主色(电光黄) 或 次色(淡紫灰) 底色"
      },
      {
        "key": "showDecor",
        "label": "装饰元素",
        "type": "boolean",
        "default": true,
        "desc": "四角批注、手绘箭头与火花的显示/隐藏",
        "publicKey": "showDecor",
        "publicLabel": "装饰元素",
        "description": "四角批注、手绘箭头与火花的显示/隐藏"
      },
      {
        "key": "showIndex",
        "label": "页码角标",
        "type": "boolean",
        "default": true,
        "desc": "右下角 02 / 03 索引角标的显示/隐藏",
        "publicKey": "showIndex",
        "publicLabel": "页码角标",
        "description": "右下角 02 / 03 索引角标的显示/隐藏"
      }
    ],
    "defaultProps": {
      "backgroundTheme": "primary",
      "showDecor": true,
      "showIndex": true,
      "kicker": "2025—2026 学年工作总结",
      "headlineL1Pre": "深耕",
      "headlineHl1": "教学",
      "headlineL2Pre": "聚力",
      "headlineHl2": "成长",
      "subtitle": "全域工作复盘 & 6 大提升行动规划",
      "tags": [
        "夯实教学根基",
        "拓宽育人边界"
      ],
      "handNoteTL": "复盘 · review",
      "handNoteTR": "规划 2026 →",
      "handNoteBL": "GROW TOGETHER",
      "indexNum": "02",
      "indexTotal": "03"
    }
  },
  {
    "key": "theme08_page003",
    "themeKey": "theme08",
    "pageNumber": 3,
    "layout": "THEME08-003",
    "slot": "sup3",
    "label": "补充封面-③ 新机遇新赛道",
    "bgClass": "",
    "controls": [
      {
        "key": "backgroundTheme",
        "label": "背景主题",
        "type": "enum",
        "default": "muted",
        "options": [
          "primary",
          "muted"
        ],
        "desc": "主色(电光黄) 或 次色(淡紫灰，默认) 底色",
        "publicKey": "backgroundTheme",
        "publicLabel": "背景主题",
        "description": "主色(电光黄) 或 次色(淡紫灰，默认) 底色"
      },
      {
        "key": "mediaCount",
        "label": "图片数量",
        "type": "number",
        "default": 2,
        "min": 0,
        "max": 2,
        "step": 1,
        "desc": "右侧照片点缀数量（0–2）",
        "publicKey": "mediaCount",
        "publicLabel": "图片数量",
        "description": "右侧照片点缀数量（0–2）"
      },
      {
        "key": "showDecor",
        "label": "装饰元素",
        "type": "boolean",
        "default": true,
        "desc": "手绘箭头、火花与批注文案的显示/隐藏",
        "publicKey": "showDecor",
        "publicLabel": "装饰元素",
        "description": "手绘箭头、火花与批注文案的显示/隐藏"
      },
      {
        "key": "showIndex",
        "label": "页码角标",
        "type": "boolean",
        "default": true,
        "desc": "右下角 03 / 03 索引角标的显示/隐藏",
        "publicKey": "showIndex",
        "publicLabel": "页码角标",
        "description": "右下角 03 / 03 索引角标的显示/隐藏"
      }
    ],
    "defaultProps": {
      "backgroundTheme": "muted",
      "mediaCount": 2,
      "showDecor": true,
      "showIndex": true,
      "eyebrow": "BUSINESS PLAN",
      "tag": "XX 金融项目",
      "terms": [
        "新机遇",
        "新赛道",
        "新价值"
      ],
      "sloganLine1": "精准布局",
      "sloganLine2": "与时代红利同行",
      "standoutTag": "面向机构投资人专属方案",
      "handNote": "for investors",
      "indexNum": "03",
      "indexTotal": "03",
      "photos": [
        {
          "placeholder": "团队 / 路演",
          "caption": "核心团队",
          "capClass": "supp-pink"
        },
        {
          "placeholder": "市场 / 数据",
          "caption": "市场洞察",
          "capClass": "supp-ink"
        }
      ]
    }
  },
  {
    "key": "theme08_page004",
    "themeKey": "theme08",
    "pageNumber": 4,
    "layout": "THEME08-004",
    "slot": "cv2c",
    "label": "封面2-③ 链通全国",
    "bgClass": "",
    "controls": [
      {
        "key": "backgroundTheme",
        "label": "背景主题",
        "type": "enum",
        "default": "muted",
        "options": [
          "primary",
          "muted"
        ],
        "desc": "主色(电光黄) 或 次色(纸灰，默认) 底色",
        "publicKey": "backgroundTheme",
        "publicLabel": "背景主题",
        "description": "主色(电光黄) 或 次色(纸灰，默认) 底色"
      },
      {
        "key": "mediaCount",
        "label": "图片数量",
        "type": "number",
        "default": 4,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "四周漂浮照片卡数量（0–4）",
        "publicKey": "mediaCount",
        "publicLabel": "图片数量",
        "description": "四周漂浮照片卡数量（0–4）"
      },
      {
        "key": "showDecor",
        "label": "装饰元素",
        "type": "boolean",
        "default": true,
        "desc": "手绘箭头与火花的显示/隐藏",
        "publicKey": "showDecor",
        "publicLabel": "装饰元素",
        "description": "手绘箭头与火花的显示/隐藏"
      }
    ],
    "defaultProps": {
      "backgroundTheme": "muted",
      "mediaCount": 4,
      "showDecor": true,
      "eyebrow": "XX 集团供应链 · STRATEGY 2026–2028",
      "kickerPre": "链通全国",
      "kickerPost": "高效履约",
      "sloganLine1": "打通物流脉络",
      "sloganHl": "构筑产业护城河",
      "sticker": "集团供应链体系三年发展战略",
      "photos": [
        {
          "placeholder": "物流枢纽",
          "tag": "全国网络"
        },
        {
          "placeholder": "干线运输",
          "tag": ""
        },
        {
          "placeholder": "智能仓",
          "tag": "高效履约"
        },
        {
          "placeholder": "履约现场",
          "tag": ""
        }
      ]
    }
  },
  {
    "key": "theme08_page005",
    "themeKey": "theme08",
    "pageNumber": 5,
    "layout": "THEME08-005",
    "slot": "p1",
    "label": "① 封面 · Cover",
    "bgClass": "",
    "controls": [
      {
        "key": "backgroundTheme",
        "label": "背景主题",
        "type": "enum",
        "default": "primary",
        "options": [
          "primary",
          "muted"
        ],
        "desc": "主色(电光黄) 或 次色(淡紫灰) 底色",
        "publicKey": "backgroundTheme",
        "publicLabel": "背景主题",
        "description": "主色(电光黄) 或 次色(淡紫灰) 底色"
      },
      {
        "key": "mediaCount",
        "label": "图片数量",
        "type": "number",
        "default": 3,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "拼贴照片槽数量；布局随数量自动平衡，每个槽按上传图片比例自适应",
        "publicKey": "mediaCount",
        "publicLabel": "图片数量",
        "description": "拼贴照片槽数量；布局随数量自动平衡，每个槽按上传图片比例自适应"
      },
      {
        "key": "showDecor",
        "label": "装饰元素",
        "type": "boolean",
        "default": true,
        "desc": "手绘箭头、火花与批注文案的显示/隐藏",
        "publicKey": "showDecor",
        "publicLabel": "装饰元素",
        "description": "手绘箭头、火花与批注文案的显示/隐藏"
      },
      {
        "key": "showMeta",
        "label": "底部信息",
        "type": "boolean",
        "default": true,
        "desc": "底部数据标签行的显示/隐藏",
        "publicKey": "showMeta",
        "publicLabel": "底部信息",
        "description": "底部数据标签行的显示/隐藏"
      }
    ],
    "defaultProps": {
      "backgroundTheme": "primary",
      "mediaCount": 3,
      "showDecor": true,
      "showMeta": true,
      "eyebrow": "AI CAPITAL LAB · 2024",
      "year": "2024",
      "headlineLines": [
        "美国大额融资",
        "AI 公司调研报告"
      ],
      "subheadline": "数据口径：2024 全年 · 单笔 ≥ 1 亿美元",
      "subheadMark": "≥ 1 亿美元",
      "closingLine": "从资本流向，看 AI 产业下一阶段的真实重心。",
      "meta": [
        {
          "k": "Year",
          "v": "2024"
        },
        {
          "k": "Cut",
          "v": "≥1 亿美元"
        },
        {
          "k": "Date",
          "v": "2026.06"
        }
      ],
      "decorTexts": [
        "横纵分析法",
        "每一笔都是一次押注"
      ],
      "collage": {
        "0": [],
        "1": [
          {
            "l": 200,
            "t": 150,
            "box": 460,
            "r": -3,
            "ratio": 0.82,
            "accent": "var(--acl-paper)",
            "ph": "主图",
            "st": {
              "label": "FIG.01",
              "sub": "现场",
              "color": "var(--acl-yellow)",
              "subColor": "var(--acl-pink)",
              "rotate": -4
            }
          }
        ],
        "2": [
          {
            "l": 70,
            "t": 70,
            "box": 360,
            "r": -4,
            "ratio": 0.8,
            "accent": "var(--acl-paper)",
            "ph": "图片",
            "st": {
              "label": "FIG.01",
              "sub": "现场",
              "color": "var(--acl-yellow)",
              "subColor": "var(--acl-pink)",
              "rotate": -4
            }
          },
          {
            "l": 360,
            "t": 360,
            "box": 340,
            "r": 4,
            "ratio": 1.25,
            "accent": "var(--acl-paper)",
            "ph": "图片",
            "st": {
              "label": "FIG.02",
              "color": "var(--acl-blue)",
              "rotate": 3
            }
          }
        ],
        "3": [
          {
            "l": 330,
            "t": 40,
            "box": 350,
            "r": 3,
            "ratio": 0.84,
            "accent": "var(--acl-paper)",
            "ph": "图片",
            "st": {
              "label": "FIG.01",
              "sub": "现场",
              "color": "var(--acl-yellow)",
              "subColor": "var(--acl-pink)",
              "rotate": -4
            }
          },
          {
            "l": 40,
            "t": 300,
            "box": 300,
            "r": -5,
            "ratio": 1.2,
            "accent": "var(--acl-paper)",
            "ph": "图片",
            "st": {
              "label": "FIG.02",
              "color": "var(--acl-blue)",
              "rotate": 4
            }
          },
          {
            "l": 420,
            "t": 430,
            "box": 250,
            "r": 6,
            "ratio": 0.78,
            "accent": "var(--acl-paper)",
            "ph": "图片",
            "st": {
              "label": "FIG.03",
              "color": "var(--acl-pink)",
              "rotate": -3
            }
          }
        ],
        "4": [
          {
            "l": 360,
            "t": 20,
            "box": 300,
            "r": 3,
            "ratio": 0.82,
            "accent": "var(--acl-paper)",
            "ph": "图片",
            "st": {
              "label": "FIG.01",
              "sub": "现场",
              "color": "var(--acl-yellow)",
              "subColor": "var(--acl-pink)",
              "rotate": -4
            }
          },
          {
            "l": 50,
            "t": 130,
            "box": 250,
            "r": -5,
            "ratio": 0.9,
            "accent": "var(--acl-paper)",
            "ph": "图片",
            "st": {
              "label": "FIG.02",
              "color": "var(--acl-blue)",
              "rotate": 4
            }
          },
          {
            "l": 140,
            "t": 430,
            "box": 270,
            "r": 4,
            "ratio": 1.15,
            "accent": "var(--acl-paper)",
            "ph": "图片",
            "st": {
              "label": "FIG.03",
              "color": "var(--acl-pink)",
              "rotate": -3
            }
          },
          {
            "l": 500,
            "t": 400,
            "box": 240,
            "r": -4,
            "ratio": 0.8,
            "accent": "var(--acl-paper)",
            "ph": "图片",
            "st": {
              "label": "FIG.04",
              "color": "var(--acl-yellow)",
              "rotate": 5
            }
          }
        ]
      }
    }
  },
  {
    "key": "theme08_page006",
    "themeKey": "theme08",
    "pageNumber": 6,
    "layout": "THEME08-006",
    "slot": "p2",
    "label": "② 摘要 · Overview",
    "bgClass": "",
    "controls": [
      {
        "key": "backgroundTheme",
        "label": "背景主题",
        "type": "enum",
        "default": "muted",
        "options": [
          "primary",
          "muted"
        ],
        "desc": "主色(电光黄) 或 次色(淡紫灰) 底色",
        "publicKey": "backgroundTheme",
        "publicLabel": "背景主题",
        "description": "主色(电光黄) 或 次色(淡紫灰) 底色"
      },
      {
        "key": "cardCount",
        "label": "指标卡数量",
        "type": "number",
        "default": 4,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "底部核心指标卡的数量",
        "publicKey": "cardCount",
        "publicLabel": "指标卡数量",
        "description": "底部核心指标卡的数量"
      },
      {
        "key": "focusEnabled",
        "label": "重点强调",
        "type": "boolean",
        "default": true,
        "desc": "是否高亮某一张指标卡",
        "publicKey": "focusEnabled",
        "publicLabel": "重点强调",
        "description": "是否高亮某一张指标卡"
      },
      {
        "key": "focusIndex",
        "label": "重点对象",
        "type": "number",
        "default": 3,
        "min": 0,
        "max": 3,
        "step": 1,
        "desc": "被高亮的指标卡序号(从 0 起)",
        "publicKey": "focusIndex",
        "publicLabel": "重点对象",
        "description": "被高亮的指标卡序号(从 0 起)"
      },
      {
        "key": "chartType",
        "label": "图表类型",
        "type": "enum",
        "default": "bars",
        "options": [
          "bars",
          "donut",
          null
        ],
        "desc": "占比模块的呈现方式：条形 / 环形 / 隐藏",
        "publicKey": "chartType",
        "publicLabel": "图表类型",
        "description": "占比模块的呈现方式：条形 / 环形 / 隐藏"
      },
      {
        "key": "showDecor",
        "label": "装饰元素",
        "type": "boolean",
        "default": true,
        "desc": "手绘装饰与标签的显示/隐藏",
        "publicKey": "showDecor",
        "publicLabel": "装饰元素",
        "description": "手绘装饰与标签的显示/隐藏"
      }
    ],
    "defaultProps": {
      "backgroundTheme": "muted",
      "cardCount": 4,
      "focusEnabled": true,
      "focusIndex": 3,
      "chartType": "bars",
      "showDecor": true,
      "eyebrow": "Report Overview",
      "headline": "报告摘要",
      "subheadline": "2024 全年 · 资本大年",
      "summary": "2024 年美国 AI 初创公司吸纳约 970 亿美元风险投资，单笔 ≥ 1 亿美元的大额融资事件达 97 笔。",
      "metrics": [
        {
          "value": "970",
          "unit": "亿美元",
          "label": "全年融资总额"
        },
        {
          "value": "97",
          "unit": "笔",
          "label": "大额融资事件"
        },
        {
          "value": "10",
          "unit": "亿美元",
          "label": "平均单笔规模"
        },
        {
          "value": "63.9",
          "unit": "%",
          "label": "湾区融资占比"
        }
      ],
      "trackTitle": "赛道融资占比",
      "trackData": [
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
      "closingLine": "资本仍在涌入 AI，但下一阶段会从赌叙事转向看兑现。"
    }
  },
  {
    "key": "theme08_page007",
    "themeKey": "theme08",
    "pageNumber": 7,
    "layout": "THEME08-007",
    "slot": "p3",
    "label": "③ 结构 · Contents",
    "bgClass": "",
    "controls": [
      {
        "key": "backgroundTheme",
        "label": "背景主题",
        "type": "enum",
        "default": "primary",
        "options": [
          "primary",
          "muted"
        ],
        "desc": "主色(电光黄) 或 次色(淡紫灰) 底色",
        "publicKey": "backgroundTheme",
        "publicLabel": "背景主题",
        "description": "主色(电光黄) 或 次色(淡紫灰) 底色"
      },
      {
        "key": "cardCount",
        "label": "章节卡数量",
        "type": "number",
        "default": 7,
        "min": 3,
        "max": 7,
        "step": 1,
        "desc": "横向章节卡的数量",
        "publicKey": "cardCount",
        "publicLabel": "章节卡数量",
        "description": "横向章节卡的数量"
      },
      {
        "key": "focusEnabled",
        "label": "重点强调",
        "type": "boolean",
        "default": true,
        "desc": "是否突出某一张章节卡",
        "publicKey": "focusEnabled",
        "publicLabel": "重点强调",
        "description": "是否突出某一张章节卡"
      },
      {
        "key": "focusIndex",
        "label": "重点对象",
        "type": "number",
        "default": 1,
        "min": 0,
        "max": 6,
        "step": 1,
        "desc": "被突出的章节序号(从 0 起)",
        "publicKey": "focusIndex",
        "publicLabel": "重点对象",
        "description": "被突出的章节序号(从 0 起)"
      },
      {
        "key": "showDecor",
        "label": "装饰元素",
        "type": "boolean",
        "default": true,
        "desc": "手绘装饰与标签的显示/隐藏",
        "publicKey": "showDecor",
        "publicLabel": "装饰元素",
        "description": "手绘装饰与标签的显示/隐藏"
      }
    ],
    "defaultProps": {
      "backgroundTheme": "primary",
      "cardCount": 7,
      "focusEnabled": true,
      "focusIndex": 1,
      "showDecor": true,
      "eyebrow": "Structure",
      "headline": "报告结构",
      "subheadline": "从方法到结论的阅读路径",
      "chapters": [
        {
          "name": "研究方法",
          "en": "Methodology"
        },
        {
          "name": "市场全景",
          "en": "Market Panorama"
        },
        {
          "name": "横向透视",
          "en": "Cross-Section"
        },
        {
          "name": "产业链",
          "en": "Value Chain"
        },
        {
          "name": "典型案例",
          "en": "Case Studies"
        },
        {
          "name": "风险展望",
          "en": "Risk & Outlook"
        },
        {
          "name": "结论判断",
          "en": "Conclusion"
        }
      ],
      "closingLine": "先建立框架，再进入数据和判断。"
    }
  },
  {
    "key": "theme08_page008",
    "themeKey": "theme08",
    "pageNumber": 8,
    "layout": "THEME08-008",
    "slot": "p5",
    "label": "⑤ 趋势 · Trend",
    "bgClass": "",
    "controls": [
      {
        "key": "backgroundTheme",
        "label": "背景主题",
        "type": "enum",
        "default": "primary",
        "options": [
          "primary",
          "muted"
        ],
        "desc": "主色(电光黄) 或 次色(淡紫灰) 底色",
        "publicKey": "backgroundTheme",
        "publicLabel": "背景主题",
        "description": "主色(电光黄) 或 次色(淡紫灰) 底色"
      },
      {
        "key": "chartType",
        "label": "图表类型",
        "type": "enum",
        "default": "column",
        "options": [
          "column",
          "area",
          "line"
        ],
        "desc": "主数据系列的呈现：柱状 / 面积 / 折线",
        "publicKey": "chartType",
        "publicLabel": "图表类型",
        "description": "主数据系列的呈现：柱状 / 面积 / 折线"
      },
      {
        "key": "showTrendLine",
        "label": "副线(事件数)",
        "type": "boolean",
        "default": true,
        "desc": "叠加第二条趋势线及节点",
        "publicKey": "showTrendLine",
        "publicLabel": "副线(事件数)",
        "description": "叠加第二条趋势线及节点"
      },
      {
        "key": "showValueLabels",
        "label": "数值标签",
        "type": "boolean",
        "default": true,
        "desc": "在数据点上显示数值",
        "publicKey": "showValueLabels",
        "publicLabel": "数值标签",
        "description": "在数据点上显示数值"
      },
      {
        "key": "focusEnabled",
        "label": "重点强调",
        "type": "boolean",
        "default": true,
        "desc": "是否高亮某个数据点(峰值)",
        "publicKey": "focusEnabled",
        "publicLabel": "重点强调",
        "description": "是否高亮某个数据点(峰值)"
      },
      {
        "key": "focusIndex",
        "label": "重点对象",
        "type": "number",
        "default": 2,
        "min": 0,
        "max": 3,
        "step": 1,
        "desc": "被高亮的数据点序号(从 0 起)",
        "publicKey": "focusIndex",
        "publicLabel": "重点对象",
        "description": "被高亮的数据点序号(从 0 起)"
      },
      {
        "key": "showDecor",
        "label": "装饰元素",
        "type": "boolean",
        "default": true,
        "desc": "手绘装饰与标签的显示/隐藏",
        "publicKey": "showDecor",
        "publicLabel": "装饰元素",
        "description": "手绘装饰与标签的显示/隐藏"
      }
    ],
    "defaultProps": {
      "backgroundTheme": "primary",
      "chartType": "column",
      "focusEnabled": true,
      "focusIndex": 2,
      "showTrendLine": true,
      "showValueLabels": true,
      "showDecor": true,
      "eyebrow": "Market Panorama",
      "headline": "市场全景 · 纵向趋势",
      "subheadline": "逐季度融资额走势",
      "summary": "热度在 <b>Q2 与 Q3 达峰</b>，Q4 理性回落但仍处高位。",
      "points": [
        {
          "label": "Q1",
          "sub": "Jan–Mar",
          "amount": 162,
          "count": 18
        },
        {
          "label": "Q2",
          "sub": "Apr–Jun",
          "amount": 284,
          "count": 26
        },
        {
          "label": "Q3",
          "sub": "Jul–Sep",
          "amount": 318,
          "count": 31
        },
        {
          "label": "Q4",
          "sub": "Oct–Dec",
          "amount": 206,
          "count": 22
        }
      ],
      "amountUnit": "亿美元",
      "countUnit": "笔",
      "peakNote": "全年最高点 →",
      "trendNote": "事件数同步走高",
      "closingLine": "高峰过后不是崩塌，而是市场开始筛选。"
    }
  },
  {
    "key": "theme08_page009",
    "themeKey": "theme08",
    "pageNumber": 9,
    "layout": "THEME08-009",
    "slot": "p6",
    "label": "⑥ 透视 · Cross",
    "bgClass": "",
    "controls": [
      {
        "key": "backgroundTheme",
        "label": "背景主题",
        "type": "enum",
        "default": "muted",
        "options": [
          "primary",
          "muted"
        ],
        "desc": "主色(电光黄) 或 次色(淡紫灰) 底色",
        "publicKey": "backgroundTheme",
        "publicLabel": "背景主题",
        "description": "主色(电光黄) 或 次色(淡紫灰) 底色"
      },
      {
        "key": "chartType",
        "label": "图表类型",
        "type": "enum",
        "default": "donut",
        "options": [
          "donut",
          "bars"
        ],
        "desc": "占比模块的呈现：环形 / 条形",
        "publicKey": "chartType",
        "publicLabel": "图表类型",
        "description": "占比模块的呈现：环形 / 条形"
      },
      {
        "key": "segmentCount",
        "label": "分段数量",
        "type": "number",
        "default": 5,
        "min": 3,
        "max": 5,
        "step": 1,
        "desc": "占比分段(分类)的数量",
        "publicKey": "categoryCount",
        "publicLabel": "分段数量",
        "description": "占比分段(分类)的数量"
      },
      {
        "key": "showRounds",
        "label": "副面板(阶段)",
        "type": "boolean",
        "default": true,
        "desc": "右侧阶段结构面板的显示/隐藏",
        "publicKey": "showRounds",
        "publicLabel": "副面板(阶段)",
        "description": "右侧阶段结构面板的显示/隐藏"
      },
      {
        "key": "focusEnabled",
        "label": "重点强调",
        "type": "boolean",
        "default": true,
        "desc": "是否高亮某一个分段",
        "publicKey": "focusEnabled",
        "publicLabel": "重点强调",
        "description": "是否高亮某一个分段"
      },
      {
        "key": "focusIndex",
        "label": "重点对象",
        "type": "number",
        "default": 0,
        "min": 0,
        "step": 1,
        "desc": "被高亮的分段序号(从 0 起)",
        "publicKey": "focusIndex",
        "publicLabel": "重点对象",
        "description": "被高亮的分段序号(从 0 起)"
      },
      {
        "key": "showDecor",
        "label": "装饰元素",
        "type": "boolean",
        "default": true,
        "desc": "手绘装饰与标签的显示/隐藏",
        "publicKey": "showDecor",
        "publicLabel": "装饰元素",
        "description": "手绘装饰与标签的显示/隐藏"
      }
    ],
    "defaultProps": {
      "backgroundTheme": "muted",
      "chartType": "donut",
      "segmentCount": 5,
      "focusEnabled": true,
      "focusIndex": 0,
      "showRounds": true,
      "showDecor": true,
      "eyebrow": "Cross-Section",
      "headline": "横向透视 · 赛道与轮次",
      "subheadline": "钱流向哪些赛道和阶段",
      "summary": "通用大模型仍是<b>最大吸金赛道</b>，后期轮与未披露轮体现头部赢家通吃。",
      "shareTitle": "赛道融资占比",
      "segments": [
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
      "roundsTitle": "轮次结构",
      "rounds": [
        {
          "label": "后期轮 D+",
          "pct": 38,
          "note": "avg 18.6 亿美元",
          "focus": true
        },
        {
          "label": "未披露轮",
          "pct": 26,
          "note": "战略 / 资源置换"
        },
        {
          "label": "B / C 轮",
          "pct": 24,
          "note": "加速扩张"
        },
        {
          "label": "早期 Seed / A",
          "pct": 12,
          "note": "新主题萌芽"
        }
      ],
      "closingLine": "融资额排名背后，是资本对叙事与兑现的双重押注。"
    }
  },
  {
    "key": "theme08_page010",
    "themeKey": "theme08",
    "pageNumber": 10,
    "layout": "THEME08-010",
    "slot": "p7",
    "label": "⑦ 产业链 · Chain",
    "bgClass": "",
    "controls": [
      {
        "key": "backgroundTheme",
        "label": "背景主题",
        "type": "enum",
        "default": "primary",
        "options": [
          "primary",
          "muted"
        ],
        "desc": "主色(电光黄) 或 次色(淡紫灰) 底色",
        "publicKey": "backgroundTheme",
        "publicLabel": "背景主题",
        "description": "主色(电光黄) 或 次色(淡紫灰) 底色"
      },
      {
        "key": "layerCount",
        "label": "分层数量",
        "type": "number",
        "default": 3,
        "min": 2,
        "max": 3,
        "step": 1,
        "desc": "产业链层数(上/中/下游)",
        "publicKey": "layerCount",
        "publicLabel": "分层数量",
        "description": "产业链层数(上/中/下游)"
      },
      {
        "key": "showRegion",
        "label": "副面板(地区)",
        "type": "boolean",
        "default": true,
        "desc": "右侧地区分布面板的显示/隐藏",
        "publicKey": "showRegion",
        "publicLabel": "副面板(地区)",
        "description": "右侧地区分布面板的显示/隐藏"
      },
      {
        "key": "regionCount",
        "label": "地区数量",
        "type": "number",
        "default": 5,
        "min": 3,
        "max": 5,
        "step": 1,
        "desc": "地区分布条的数量",
        "publicKey": "regionCount",
        "publicLabel": "地区数量",
        "description": "地区分布条的数量"
      },
      {
        "key": "focusEnabled",
        "label": "重点强调",
        "type": "boolean",
        "default": true,
        "desc": "是否突出某一层",
        "publicKey": "focusEnabled",
        "publicLabel": "重点强调",
        "description": "是否突出某一层"
      },
      {
        "key": "focusIndex",
        "label": "重点对象",
        "type": "number",
        "default": 1,
        "min": 0,
        "step": 1,
        "desc": "被突出的分层序号(从 0 起)",
        "publicKey": "focusIndex",
        "publicLabel": "重点对象",
        "description": "被突出的分层序号(从 0 起)"
      },
      {
        "key": "showDecor",
        "label": "装饰元素",
        "type": "boolean",
        "default": true,
        "desc": "手绘装饰与标签的显示/隐藏",
        "publicKey": "showDecor",
        "publicLabel": "装饰元素",
        "description": "手绘装饰与标签的显示/隐藏"
      }
    ],
    "defaultProps": {
      "backgroundTheme": "primary",
      "layerCount": 3,
      "focusEnabled": true,
      "focusIndex": 1,
      "showRegion": true,
      "regionCount": 5,
      "showDecor": true,
      "eyebrow": "Value Chain",
      "headline": "产业链分层透视",
      "subheadline": "上游、中游、下游的资本位置",
      "summary": "AI 融资沿基础设施、模型与应用<b>三层展开</b>，地区上高度集中于湾区。",
      "layers": [
        {
          "axis": "上",
          "name": "上游 · 基础设施",
          "en": "Infrastructure",
          "items": [
            "算力",
            "AI 芯片",
            "数据"
          ],
          "note": "资本确定性最高"
        },
        {
          "axis": "中",
          "name": "中游 · 模型层",
          "en": "Model Layer",
          "items": [
            "通用模型",
            "专用模型"
          ],
          "note": "叙事与估值集中"
        },
        {
          "axis": "下",
          "name": "下游 · 应用层",
          "en": "Application",
          "items": [
            "企业应用",
            "AI 搜索",
            "机器人"
          ],
          "note": "商业兑现待验证"
        }
      ],
      "regionTitle": "地区分布",
      "regions": [
        {
          "label": "旧金山湾区",
          "pct": 63.9,
          "focus": true
        },
        {
          "label": "纽约",
          "pct": 12.4
        },
        {
          "label": "西雅图",
          "pct": 9.8
        },
        {
          "label": "波士顿",
          "pct": 7.7
        },
        {
          "label": "其他地区",
          "pct": 6.2
        }
      ],
      "closingLine": "产业链分层，决定了资本确定性与商业风险的不同位置。"
    }
  },
  {
    "key": "theme08_page011",
    "themeKey": "theme08",
    "pageNumber": 11,
    "layout": "THEME08-011",
    "slot": "p8",
    "label": "⑧ 案例 · Cases",
    "bgClass": "",
    "controls": [
      {
        "key": "backgroundTheme",
        "label": "背景主题",
        "type": "enum",
        "default": "muted",
        "options": [
          "primary",
          "muted"
        ],
        "desc": "主色(电光黄) 或 次色(淡紫灰) 底色",
        "publicKey": "backgroundTheme",
        "publicLabel": "背景主题",
        "description": "主色(电光黄) 或 次色(淡紫灰) 底色"
      },
      {
        "key": "mediaCount",
        "label": "图片数量",
        "type": "number",
        "default": 3,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "拼贴图片槽数量(0–4)；布局随数量自动平衡，每槽按上传图片比例自适应",
        "publicKey": "mediaCount",
        "publicLabel": "图片数量",
        "description": "拼贴图片槽数量(0–4)；布局随数量自动平衡，每槽按上传图片比例自适应"
      },
      {
        "key": "showStats",
        "label": "案例指标",
        "type": "boolean",
        "default": true,
        "desc": "案例行右侧的关键指标显示/隐藏",
        "publicKey": "showStats",
        "publicLabel": "案例指标",
        "description": "案例行右侧的关键指标显示/隐藏"
      },
      {
        "key": "focusEnabled",
        "label": "重点强调",
        "type": "boolean",
        "default": true,
        "desc": "是否突出某一个案例",
        "publicKey": "focusEnabled",
        "publicLabel": "重点强调",
        "description": "是否突出某一个案例"
      },
      {
        "key": "focusIndex",
        "label": "重点对象",
        "type": "number",
        "default": 0,
        "min": 0,
        "max": 2,
        "step": 1,
        "desc": "被突出的案例序号(从 0 起)",
        "publicKey": "focusIndex",
        "publicLabel": "重点对象",
        "description": "被突出的案例序号(从 0 起)"
      },
      {
        "key": "showDecor",
        "label": "装饰元素",
        "type": "boolean",
        "default": true,
        "desc": "手绘装饰与标签的显示/隐藏",
        "publicKey": "showDecor",
        "publicLabel": "装饰元素",
        "description": "手绘装饰与标签的显示/隐藏"
      }
    ],
    "defaultProps": {
      "backgroundTheme": "muted",
      "mediaCount": 3,
      "focusEnabled": true,
      "focusIndex": 0,
      "showStats": true,
      "showDecor": true,
      "eyebrow": "Case Studies",
      "headline": "典型案例深度剖析",
      "subheadline": "三类资本逻辑的代表公司",
      "summary": "Anthropic、xAI 与 CoreWeave 分别代表<b>安全模型、实时数据生态与算力基础设施</b>三类资本逻辑。",
      "cases": [
        {
          "company": "Anthropic",
          "tag": "模型公司",
          "logic": "安全对齐 · 可信企业级模型",
          "metrics": [
            {
              "k": "累计融资",
              "v": "650亿"
            },
            {
              "k": "方向",
              "v": "Claude"
            }
          ]
        },
        {
          "company": "xAI",
          "tag": "生态公司",
          "logic": "实时数据 · 多模态生态",
          "metrics": [
            {
              "k": "单笔融资",
              "v": "50亿"
            },
            {
              "k": "入口",
              "v": "X"
            }
          ]
        },
        {
          "company": "CoreWeave",
          "tag": "基础设施",
          "logic": "GPU 云 · 算力资源稀缺",
          "metrics": [
            {
              "k": "融资额",
              "v": "110亿"
            },
            {
              "k": "GPU",
              "v": "7.8万"
            }
          ]
        }
      ],
      "collage": {
        "0": [],
        "1": [
          {
            "l": 220,
            "t": 120,
            "box": 460,
            "r": -3,
            "ratio": 1.2,
            "sr": -4,
            "color": "var(--acl-yellow)"
          }
        ],
        "2": [
          {
            "l": 70,
            "t": 60,
            "box": 380,
            "r": -4,
            "ratio": 1.2,
            "sr": -4,
            "color": "var(--acl-yellow)"
          },
          {
            "l": 430,
            "t": 350,
            "box": 360,
            "r": 4,
            "ratio": 0.82,
            "sr": 3,
            "color": "var(--acl-blue)"
          }
        ],
        "3": [
          {
            "l": 320,
            "t": 20,
            "box": 360,
            "r": 3,
            "ratio": 0.84,
            "sr": -4,
            "color": "var(--acl-yellow)"
          },
          {
            "l": 30,
            "t": 250,
            "box": 320,
            "r": -5,
            "ratio": 1.22,
            "sr": 4,
            "color": "var(--acl-blue)"
          },
          {
            "l": 470,
            "t": 400,
            "box": 280,
            "r": 5,
            "ratio": 0.8,
            "sr": -3,
            "color": "var(--acl-pink)"
          }
        ],
        "4": [
          {
            "l": 360,
            "t": 0,
            "box": 300,
            "r": 3,
            "ratio": 0.84,
            "sr": -4,
            "color": "var(--acl-yellow)"
          },
          {
            "l": 40,
            "t": 110,
            "box": 270,
            "r": -5,
            "ratio": 0.9,
            "sr": 4,
            "color": "var(--acl-blue)"
          },
          {
            "l": 160,
            "t": 420,
            "box": 290,
            "r": 4,
            "ratio": 1.2,
            "sr": -3,
            "color": "var(--acl-pink)"
          },
          {
            "l": 540,
            "t": 360,
            "box": 260,
            "r": -4,
            "ratio": 0.82,
            "sr": 5,
            "color": "var(--acl-red)"
          }
        ]
      },
      "closingLine": "不同案例指向同一个问题：技术优势能否转成可持续收入。"
    }
  },
  {
    "key": "theme08_page012",
    "themeKey": "theme08",
    "pageNumber": 12,
    "layout": "THEME08-012",
    "slot": "p9",
    "label": "⑨ 热力 · Heatmap",
    "bgClass": "",
    "controls": [
      {
        "key": "backgroundTheme",
        "label": "背景主题",
        "type": "enum",
        "default": "primary",
        "options": [
          "primary",
          "muted"
        ],
        "desc": "主色(电光黄) 或 次色(淡紫灰) 底色",
        "publicKey": "backgroundTheme",
        "publicLabel": "背景主题",
        "description": "主色(电光黄) 或 次色(淡紫灰) 底色"
      },
      {
        "key": "columnCount",
        "label": "网格列数",
        "type": "enum",
        "default": 6,
        "options": [
          4,
          6
        ],
        "desc": "热力格每行单元数：4 列(3 行) 或 6 列(2 行)",
        "publicKey": "columnCount",
        "publicLabel": "网格列数",
        "description": "热力格每行单元数：4 列(3 行) 或 6 列(2 行)"
      },
      {
        "key": "showValueLabels",
        "label": "数值标签",
        "type": "boolean",
        "default": true,
        "desc": "在每个单元中显示数值",
        "publicKey": "showValueLabels",
        "publicLabel": "数值标签",
        "description": "在每个单元中显示数值"
      },
      {
        "key": "highlightCount",
        "label": "峰值强调",
        "type": "number",
        "default": 3,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "按数值高低强调的峰值单元数量(0–4)",
        "publicKey": "highlightCount",
        "publicLabel": "峰值强调",
        "description": "按数值高低强调的峰值单元数量(0–4)"
      },
      {
        "key": "showScale",
        "label": "色阶图例",
        "type": "boolean",
        "default": true,
        "desc": "底部冷→热色阶图例的显示/隐藏",
        "publicKey": "showScale",
        "publicLabel": "色阶图例",
        "description": "底部冷→热色阶图例的显示/隐藏"
      },
      {
        "key": "showDecor",
        "label": "装饰元素",
        "type": "boolean",
        "default": true,
        "desc": "手绘装饰与标签的显示/隐藏",
        "publicKey": "showDecor",
        "publicLabel": "装饰元素",
        "description": "手绘装饰与标签的显示/隐藏"
      }
    ],
    "defaultProps": {
      "backgroundTheme": "primary",
      "columnCount": 6,
      "showValueLabels": true,
      "highlightCount": 3,
      "showScale": true,
      "showDecor": true,
      "eyebrow": "Monthly Heatmap",
      "headline": "市场月度热力",
      "subheadline": "12 个月融资节奏",
      "summary": "全年热度并非均匀释放，而是由 <b>5 月、8 月、9 月</b> 等峰值月份拉高。",
      "cells": [
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
      "unit": "亿美元",
      "peakNote": "峰值",
      "closingLine": "融资节奏的核心不是平均值，而是峰值背后的超级交易。"
    }
  },
  {
    "key": "theme08_page013",
    "themeKey": "theme08",
    "pageNumber": 13,
    "layout": "THEME08-013",
    "slot": "p10",
    "label": "⑩ 排名 · Ranking",
    "bgClass": "",
    "controls": [
      {
        "key": "backgroundTheme",
        "label": "背景主题",
        "type": "enum",
        "default": "muted",
        "options": [
          "primary",
          "muted"
        ],
        "desc": "主色(电光黄) 或 次色(淡紫灰) 底色",
        "publicKey": "backgroundTheme",
        "publicLabel": "背景主题",
        "description": "主色(电光黄) 或 次色(淡紫灰) 底色"
      },
      {
        "key": "rowCount",
        "label": "行数",
        "type": "number",
        "default": 8,
        "min": 3,
        "max": 10,
        "step": 1,
        "desc": "展示的排名行数(3–10)",
        "publicKey": "rowCount",
        "publicLabel": "行数",
        "description": "展示的排名行数(3–10)"
      },
      {
        "key": "showBars",
        "label": "数据条",
        "type": "boolean",
        "default": true,
        "desc": "在数值列显示横向比例条",
        "publicKey": "showValueLabels",
        "publicLabel": "数据条",
        "description": "在数值列显示横向比例条"
      },
      {
        "key": "colorByCategory",
        "label": "按类别配色",
        "type": "boolean",
        "default": true,
        "desc": "按分类为序号/标签/数据条着色",
        "publicKey": "colorByCategory",
        "publicLabel": "按类别配色",
        "description": "按分类为序号/标签/数据条着色"
      },
      {
        "key": "focusEnabled",
        "label": "重点强调",
        "type": "boolean",
        "default": true,
        "desc": "是否高亮某一行",
        "publicKey": "focusEnabled",
        "publicLabel": "重点强调",
        "description": "是否高亮某一行"
      },
      {
        "key": "focusIndex",
        "label": "重点对象",
        "type": "number",
        "default": 0,
        "min": 0,
        "max": 9,
        "step": 1,
        "desc": "被高亮的行序号(从 0 起)",
        "publicKey": "focusIndex",
        "publicLabel": "重点对象",
        "description": "被高亮的行序号(从 0 起)"
      },
      {
        "key": "showDecor",
        "label": "装饰元素",
        "type": "boolean",
        "default": true,
        "desc": "手绘装饰与标签的显示/隐藏",
        "publicKey": "showDecor",
        "publicLabel": "装饰元素",
        "description": "手绘装饰与标签的显示/隐藏"
      }
    ],
    "defaultProps": {
      "backgroundTheme": "muted",
      "rowCount": 8,
      "showBars": true,
      "colorByCategory": true,
      "focusEnabled": true,
      "focusIndex": 0,
      "showDecor": true,
      "eyebrow": "Top Funded Companies",
      "headline": "Top 10 融资公司",
      "subheadline": "头部玩家资金排名",
      "summary": "头部公司融资额显著领先，<b>通用大模型</b> 占据榜单上方位置。",
      "columnLabels": [
        "排名",
        "公司",
        "赛道",
        "最大单笔"
      ],
      "rows": [
        {
          "name": "OpenAI",
          "cat": "模型",
          "v": 66
        },
        {
          "name": "Anthropic",
          "cat": "模型",
          "v": 65
        },
        {
          "name": "xAI",
          "cat": "模型",
          "v": 50
        },
        {
          "name": "CoreWeave",
          "cat": "基础设施",
          "v": 11
        },
        {
          "name": "SSI",
          "cat": "模型",
          "v": 10
        },
        {
          "name": "Scale AI",
          "cat": "基础设施",
          "v": 10
        },
        {
          "name": "Figure AI",
          "cat": "具身",
          "v": 6.8
        },
        {
          "name": "Perplexity",
          "cat": "应用",
          "v": 5.2
        },
        {
          "name": "Databricks",
          "cat": "应用",
          "v": 5
        },
        {
          "name": "Glean",
          "cat": "应用",
          "v": 2.6
        }
      ],
      "unit": "亿美元",
      "closingLine": "头部融资规模既反映技术叙事，也反映资源绑定能力。"
    }
  },
  {
    "key": "theme08_page014",
    "themeKey": "theme08",
    "pageNumber": 14,
    "layout": "THEME08-014",
    "slot": "p11",
    "label": "⑪ 象限 · Quadrant",
    "bgClass": "",
    "controls": [
      {
        "key": "backgroundTheme",
        "label": "背景主题",
        "type": "enum",
        "default": "primary",
        "options": [
          "primary",
          "muted"
        ],
        "desc": "主色(电光黄) 或 次色(淡紫灰) 底色",
        "publicKey": "backgroundTheme",
        "publicLabel": "背景主题",
        "description": "主色(电光黄) 或 次色(淡紫灰) 底色"
      },
      {
        "key": "focusEnabled",
        "label": "重点强调",
        "type": "boolean",
        "default": true,
        "desc": "是否突出某一个象限",
        "publicKey": "focusEnabled",
        "publicLabel": "重点强调",
        "description": "是否突出某一个象限"
      },
      {
        "key": "focusIndex",
        "label": "重点对象",
        "type": "number",
        "default": 1,
        "min": 0,
        "max": 3,
        "step": 1,
        "desc": "被突出的象限序号(0=左上 1=右上 2=左下 3=右下)",
        "publicKey": "focusIndex",
        "publicLabel": "重点对象",
        "description": "被突出的象限序号(0=左上 1=右上 2=左下 3=右下)"
      },
      {
        "key": "showItems",
        "label": "代表项",
        "type": "boolean",
        "default": true,
        "desc": "象限内代表方向/对象标签的显示/隐藏",
        "publicKey": "showItems",
        "publicLabel": "代表项",
        "description": "象限内代表方向/对象标签的显示/隐藏"
      },
      {
        "key": "showAxisLabels",
        "label": "坐标轴标签",
        "type": "boolean",
        "default": true,
        "desc": "两条坐标轴说明文字的显示/隐藏",
        "publicKey": "showAxisLabels",
        "publicLabel": "坐标轴标签",
        "description": "两条坐标轴说明文字的显示/隐藏"
      },
      {
        "key": "showDecor",
        "label": "装饰元素",
        "type": "boolean",
        "default": true,
        "desc": "手绘装饰与标签的显示/隐藏",
        "publicKey": "showDecor",
        "publicLabel": "装饰元素",
        "description": "手绘装饰与标签的显示/隐藏"
      }
    ],
    "defaultProps": {
      "backgroundTheme": "primary",
      "focusEnabled": true,
      "focusIndex": 1,
      "showItems": true,
      "showAxisLabels": true,
      "showDecor": true,
      "eyebrow": "Heat vs. Monetization",
      "headline": "资本热度 × 商业兑现",
      "subheadline": "四象限机会判断",
      "summary": "把资本热度与商业兑现交叉，可区分 <b>明星兑现、叙事泡沫、隐形价值与等待验证</b> 四类机会。",
      "axisX": "商业兑现度",
      "axisY": "资本热度",
      "quadrants": [
        {
          "en": "Hype Bubble",
          "name": "叙事泡沫",
          "accent": "var(--acl-red)",
          "items": [
            "通用大模型",
            "AGI 实验室"
          ]
        },
        {
          "en": "Proven Stars",
          "name": "明星兑现",
          "accent": "var(--acl-yellow)",
          "badge": "看好象限",
          "items": [
            "基础设施",
            "数据平台"
          ]
        },
        {
          "en": "Wait & Verify",
          "name": "等待验证",
          "accent": "var(--acl-blue)",
          "items": [
            "长尾工具",
            "AI 安全",
            "早期硬件"
          ]
        },
        {
          "en": "Hidden Value",
          "name": "隐形价值",
          "accent": "var(--acl-pink)",
          "items": [
            "垂直应用",
            "企业搜索"
          ]
        }
      ],
      "closingLine": "资本正在从叙事驱动转向兑现驱动。"
    }
  },
  {
    "key": "theme08_page015",
    "themeKey": "theme08",
    "pageNumber": 15,
    "layout": "THEME08-015",
    "slot": "p13",
    "label": "⑬ 策略 · Strategy",
    "bgClass": "",
    "controls": [
      {
        "key": "backgroundTheme",
        "label": "背景主题",
        "type": "enum",
        "default": "primary",
        "options": [
          "primary",
          "muted"
        ],
        "desc": "主色(电光黄) 或 次色(淡紫灰) 底色",
        "publicKey": "backgroundTheme",
        "publicLabel": "背景主题",
        "description": "主色(电光黄) 或 次色(淡紫灰) 底色"
      },
      {
        "key": "showCompare",
        "label": "对比双栏",
        "type": "boolean",
        "default": true,
        "desc": "顶部\"看好 / 谨慎\"对比栏的显示/隐藏",
        "publicKey": "showCompare",
        "publicLabel": "对比双栏",
        "description": "顶部\"看好 / 谨慎\"对比栏的显示/隐藏"
      },
      {
        "key": "groupItemCount",
        "label": "每栏条目数",
        "type": "number",
        "default": 3,
        "min": 1,
        "max": 3,
        "step": 1,
        "desc": "每个对比栏展示的方向条目数(1–3)",
        "publicKey": "itemCount",
        "publicLabel": "每栏条目数",
        "description": "每个对比栏展示的方向条目数(1–3)"
      },
      {
        "key": "milestoneCount",
        "label": "时间轴节点数",
        "type": "number",
        "default": 3,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "底部阶段时间轴的节点数量(2–4)",
        "publicKey": "milestoneCount",
        "publicLabel": "时间轴节点数",
        "description": "底部阶段时间轴的节点数量(2–4)"
      },
      {
        "key": "focusEnabled",
        "label": "重点强调",
        "type": "boolean",
        "default": true,
        "desc": "是否高亮某个时间轴节点",
        "publicKey": "focusEnabled",
        "publicLabel": "重点强调",
        "description": "是否高亮某个时间轴节点"
      },
      {
        "key": "focusIndex",
        "label": "重点对象",
        "type": "number",
        "default": 1,
        "min": 0,
        "max": 3,
        "step": 1,
        "desc": "被高亮的时间轴节点序号(从 0 起)",
        "publicKey": "focusIndex",
        "publicLabel": "重点对象",
        "description": "被高亮的时间轴节点序号(从 0 起)"
      },
      {
        "key": "showDecor",
        "label": "装饰元素",
        "type": "boolean",
        "default": true,
        "desc": "手绘装饰、VS 徽标与标签的显示/隐藏",
        "publicKey": "showDecor",
        "publicLabel": "装饰元素",
        "description": "手绘装饰、VS 徽标与标签的显示/隐藏"
      }
    ],
    "defaultProps": {
      "backgroundTheme": "primary",
      "showCompare": true,
      "groupItemCount": 3,
      "milestoneCount": 3,
      "focusEnabled": true,
      "focusIndex": 1,
      "showDecor": true,
      "eyebrow": "Investment Outlook",
      "headline": "投资建议与阶段性策略",
      "subheadline": "看好方向与谨慎方向",
      "summary": "观察应围绕 <b>收入兑现</b>、基础设施确定性与垂直应用 PMF 展开。",
      "positive": {
        "title": "看好方向",
        "en": "Conviction",
        "items": [
          {
            "name": "垂直应用",
            "note": "嵌入刚性流程、可量化 ROI"
          },
          {
            "name": "基础设施",
            "note": "算力、数据平台、推理优化"
          },
          {
            "name": "具身智能",
            "note": "长周期硬科技、量产兑现"
          }
        ]
      },
      "negative": {
        "title": "谨慎方向",
        "en": "Caution",
        "items": [
          {
            "name": "高估值纯模型",
            "note": "叙事强、兑现弱、估值承压"
          },
          {
            "name": "AI 包装项目",
            "note": "缺壁垒、易被大厂挤压"
          },
          {
            "name": "低壁垒消费应用",
            "note": "留存差、同质化竞争"
          }
        ]
      },
      "milestones": [
        {
          "year": "2025",
          "title": "IPO 窗口开启",
          "note": "头部公司启动上市，估值锚开始重定价"
        },
        {
          "year": "2026",
          "title": "收入曲线验证",
          "note": "试点转付费率成为分水岭"
        },
        {
          "year": "2027",
          "title": "兑现分化定型",
          "note": "能形成商业闭环者跑出"
        },
        {
          "year": "持续",
          "title": "资源绑定深化",
          "note": "云资源与算力锁定成融资能力"
        }
      ],
      "closingLine": "看融资只是起点，看兑现才是判断。"
    }
  },
  {
    "key": "theme08_page016",
    "themeKey": "theme08",
    "pageNumber": 16,
    "layout": "THEME08-016",
    "slot": "p14",
    "label": "⑭ 金句 · Quote",
    "bgClass": "",
    "controls": [
      {
        "key": "backgroundTheme",
        "label": "背景主题",
        "type": "enum",
        "default": "ink",
        "options": [
          "primary",
          "muted",
          "ink"
        ],
        "desc": "主色(电光黄) / 次色(淡紫灰) / 深色(高反差金句)",
        "publicKey": "backgroundTheme",
        "publicLabel": "背景主题",
        "description": "主色(电光黄) / 次色(淡紫灰) / 深色(高反差金句)"
      },
      {
        "key": "showSupports",
        "label": "支撑要点",
        "type": "boolean",
        "default": true,
        "desc": "底部要点行的显示/隐藏",
        "publicKey": "showSupports",
        "publicLabel": "支撑要点",
        "description": "底部要点行的显示/隐藏"
      },
      {
        "key": "supportCount",
        "label": "要点数量",
        "type": "number",
        "default": 3,
        "min": 0,
        "max": 3,
        "step": 1,
        "desc": "展示的支撑要点数量(0–3)",
        "publicKey": "supportCount",
        "publicLabel": "要点数量",
        "description": "展示的支撑要点数量(0–3)"
      },
      {
        "key": "showQuoteMark",
        "label": "大引号",
        "type": "boolean",
        "default": true,
        "desc": "背景大号引号装饰的显示/隐藏",
        "publicKey": "showQuoteMark",
        "publicLabel": "大引号",
        "description": "背景大号引号装饰的显示/隐藏"
      },
      {
        "key": "showDecor",
        "label": "装饰元素",
        "type": "boolean",
        "default": true,
        "desc": "手绘火花与贴纸标签的显示/隐藏",
        "publicKey": "showDecor",
        "publicLabel": "装饰元素",
        "description": "手绘火花与贴纸标签的显示/隐藏"
      }
    ],
    "defaultProps": {
      "backgroundTheme": "ink",
      "showSupports": true,
      "supportCount": 3,
      "showQuoteMark": true,
      "showDecor": true,
      "eyebrow": "Conclusion · 结论与数据来源",
      "kicker": "金句页",
      "headline": "三条核心结论 · 一句话判断",
      "quote": "资本下一阶段，将从 <b>赌叙事</b> 转向 <b>看兑现</b>。",
      "supports": [
        "资本仍在涌入 AI，但开始挑选确定性更高的标的。",
        "头部集中度本身就是市场结构，长尾被超级交易重新定价。",
        "兑现能力正取代叙事，成为衡量公司价值的新标尺。"
      ],
      "source": "数据口径：2024 全年 · 单笔 ≥1 亿美元 · AI CAPITAL LAB"
    }
  },
  {
    "key": "theme08_page017",
    "themeKey": "theme08",
    "pageNumber": 17,
    "layout": "THEME08-017",
    "slot": "p15",
    "label": "⑮ 章节 · Chapter",
    "bgClass": "",
    "controls": [
      {
        "key": "backgroundTheme",
        "label": "背景主题",
        "type": "enum",
        "default": "muted",
        "options": [
          "primary",
          "muted",
          "ink"
        ],
        "desc": "主色(电光黄) / 次色(淡紫灰) / 深色(高反差章节页)",
        "publicKey": "backgroundTheme",
        "publicLabel": "背景主题",
        "description": "主色(电光黄) / 次色(淡紫灰) / 深色(高反差章节页)"
      },
      {
        "key": "showIndex",
        "label": "大章节号",
        "type": "boolean",
        "default": true,
        "desc": "巨型章节编号(及背景幽灵数字)的显示/隐藏",
        "publicKey": "showIndex",
        "publicLabel": "大章节号",
        "description": "巨型章节编号(及背景幽灵数字)的显示/隐藏"
      },
      {
        "key": "keywordCount",
        "label": "关键词数量",
        "type": "number",
        "default": 4,
        "min": 0,
        "max": 6,
        "step": 1,
        "desc": "本章关键词标签的数量(0–6)",
        "publicKey": "keywordCount",
        "publicLabel": "关键词数量",
        "description": "本章关键词标签的数量(0–6)"
      },
      {
        "key": "showDecor",
        "label": "装饰元素",
        "type": "boolean",
        "default": true,
        "desc": "手绘装饰与贴纸标签的显示/隐藏",
        "publicKey": "showDecor",
        "publicLabel": "装饰元素",
        "description": "手绘装饰与贴纸标签的显示/隐藏"
      }
    ],
    "defaultProps": {
      "backgroundTheme": "muted",
      "showIndex": true,
      "keywordCount": 4,
      "showDecor": true,
      "eyebrow": "Chapter 02",
      "indexLabel": "02",
      "headline": "市场数据深拆",
      "subheadline": "融资节奏、集中度与交易规模",
      "keywords": [
        "集中度",
        "季度节奏",
        "峰谷对比",
        "资金贡献",
        "金额区间",
        "累计曲线"
      ],
      "closingLine": "下一组页面进入更细的拆解。"
    }
  },
  {
    "key": "theme08_page018",
    "themeKey": "theme08",
    "pageNumber": 18,
    "layout": "THEME08-018",
    "slot": "p16",
    "label": "⑯ 气泡图 · Deal Map",
    "bgClass": "",
    "controls": [
      {
        "key": "backgroundTheme",
        "label": "背景主题",
        "type": "enum",
        "default": "primary",
        "options": [
          "primary",
          "muted"
        ],
        "desc": "主色(电光黄) 或 次色(淡紫灰) 底色",
        "publicKey": "backgroundTheme",
        "publicLabel": "背景主题",
        "description": "主色(电光黄) 或 次色(淡紫灰) 底色"
      },
      {
        "key": "bandCount",
        "label": "规模分组数",
        "type": "number",
        "default": 4,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "数值区间分组的数量(2–4)",
        "publicKey": "bandCount",
        "publicLabel": "规模分组数",
        "description": "数值区间分组的数量(2–4)"
      },
      {
        "key": "colorByCategory",
        "label": "按类别配色",
        "type": "boolean",
        "default": true,
        "desc": "气泡是否按分类着色(关闭则统一墨色)",
        "publicKey": "colorByCategory",
        "publicLabel": "按类别配色",
        "description": "气泡是否按分类着色(关闭则统一墨色)"
      },
      {
        "key": "showValueLabels",
        "label": "数值标签",
        "type": "boolean",
        "default": true,
        "desc": "每组下方的笔数与数值标签",
        "publicKey": "showValueLabels",
        "publicLabel": "数值标签",
        "description": "每组下方的笔数与数值标签"
      },
      {
        "key": "showLegend",
        "label": "图例",
        "type": "boolean",
        "default": true,
        "desc": "顶部分类色标与气泡大小说明",
        "publicKey": "showLegend",
        "publicLabel": "图例",
        "description": "顶部分类色标与气泡大小说明"
      },
      {
        "key": "focusEnabled",
        "label": "重点强调",
        "type": "boolean",
        "default": true,
        "desc": "是否高亮某个数值分组(其余淡化)",
        "publicKey": "focusEnabled",
        "publicLabel": "重点强调",
        "description": "是否高亮某个数值分组(其余淡化)"
      },
      {
        "key": "focusIndex",
        "label": "重点对象",
        "type": "number",
        "default": 3,
        "min": 0,
        "max": 3,
        "step": 1,
        "desc": "被高亮的数值分组序号(从 0 起)",
        "publicKey": "focusIndex",
        "publicLabel": "重点对象",
        "description": "被高亮的数值分组序号(从 0 起)"
      },
      {
        "key": "showDecor",
        "label": "装饰元素",
        "type": "boolean",
        "default": true,
        "desc": "手绘装饰与贴纸标签的显示/隐藏",
        "publicKey": "showDecor",
        "publicLabel": "装饰元素",
        "description": "手绘装饰与贴纸标签的显示/隐藏"
      }
    ],
    "defaultProps": {
      "backgroundTheme": "primary",
      "bandCount": 4,
      "colorByCategory": true,
      "showValueLabels": true,
      "showLegend": true,
      "focusEnabled": true,
      "focusIndex": 3,
      "showDecor": true,
      "eyebrow": "Deal Map",
      "headline": "融资事件规模分层",
      "subheadline": "大额融资事件地图",
      "summary": "97 笔大额融资按金额分四组，<b>少数超级交易</b> 贡献主要融资额。",
      "bands": [
        {
          "label": "1–2 亿",
          "range": "$100–200M",
          "count": 41,
          "amount": 58
        },
        {
          "label": "2–5 亿",
          "range": "$200–500M",
          "count": 29,
          "amount": 91
        },
        {
          "label": "5–10 亿",
          "range": "$500M–1B",
          "count": 15,
          "amount": 103
        },
        {
          "label": "10 亿+",
          "range": "$1B 以上",
          "count": 12,
          "amount": 718
        }
      ],
      "weights": [
        34,
        25,
        16,
        10,
        15
      ],
      "countUnit": "笔",
      "amountUnit": "亿美元",
      "closingLine": "数量最多的不一定最重要，影响最大的往往是巨额交易。"
    }
  },
  {
    "key": "theme08_page019",
    "themeKey": "theme08",
    "pageNumber": 19,
    "layout": "THEME08-019",
    "slot": "p17",
    "label": "⑰ 季度聚焦 · Spotlight",
    "bgClass": "",
    "controls": [
      {
        "key": "backgroundTheme",
        "label": "背景主题",
        "type": "enum",
        "default": "primary",
        "options": [
          "primary",
          "muted"
        ],
        "desc": "主色(电光黄) 或 次色(淡紫灰) 底色",
        "publicKey": "backgroundTheme",
        "publicLabel": "背景主题",
        "description": "主色(电光黄) 或 次色(淡紫灰) 底色"
      },
      {
        "key": "metricCount",
        "label": "指标数量",
        "type": "number",
        "default": 3,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "主卡内支撑指标格数量(2–4)",
        "publicKey": "metricCount",
        "publicLabel": "指标数量",
        "description": "主卡内支撑指标格数量(2–4)"
      },
      {
        "key": "chartType",
        "label": "图表类型",
        "type": "enum",
        "default": "column",
        "options": [
          "column",
          "area",
          "line"
        ],
        "desc": "右侧序列迷你图：柱状 / 面积 / 折线",
        "publicKey": "chartType",
        "publicLabel": "图表类型",
        "description": "右侧序列迷你图：柱状 / 面积 / 折线"
      },
      {
        "key": "showValueLabels",
        "label": "数值标签",
        "type": "boolean",
        "default": true,
        "desc": "迷你图数据点上的数值显示/隐藏",
        "publicKey": "showValueLabels",
        "publicLabel": "数值标签",
        "description": "迷你图数据点上的数值显示/隐藏"
      },
      {
        "key": "focusEnabled",
        "label": "重点强调",
        "type": "boolean",
        "default": true,
        "desc": "是否在序列中高亮某个点(本期)",
        "publicKey": "focusEnabled",
        "publicLabel": "重点强调",
        "description": "是否在序列中高亮某个点(本期)"
      },
      {
        "key": "focusIndex",
        "label": "重点对象",
        "type": "number",
        "default": 0,
        "min": 0,
        "max": 3,
        "step": 1,
        "desc": "被高亮的序列点序号(从 0 起)",
        "publicKey": "focusIndex",
        "publicLabel": "重点对象",
        "description": "被高亮的序列点序号(从 0 起)"
      },
      {
        "key": "showDecor",
        "label": "装饰元素",
        "type": "boolean",
        "default": true,
        "desc": "手绘装饰与批注的显示/隐藏",
        "publicKey": "showDecor",
        "publicLabel": "装饰元素",
        "description": "手绘装饰与批注的显示/隐藏"
      }
    ],
    "defaultProps": {
      "backgroundTheme": "primary",
      "metricCount": 3,
      "chartType": "column",
      "focusEnabled": true,
      "focusIndex": 0,
      "showValueLabels": true,
      "showDecor": true,
      "eyebrow": "Quarter Breakdown",
      "headline": "冷启动季度",
      "subheadline": "Q1 融资拆解",
      "summary": "Q1 交易数量稳定，但整体金额<b>尚未进入全年高峰</b>。",
      "badge": "Q1",
      "hero": {
        "tag": "Q1 · Jan–Mar",
        "label": "季度融资额",
        "value": "162",
        "unit": "亿美元"
      },
      "metrics": [
        {
          "k": "事件数",
          "v": "18",
          "unit": "笔"
        },
        {
          "k": "平均单笔",
          "v": "9.0",
          "unit": "亿"
        },
        {
          "k": "最大单笔",
          "v": "32",
          "unit": "亿"
        },
        {
          "k": "占全年",
          "v": "16.7",
          "unit": "%"
        }
      ],
      "series": [
        {
          "label": "Q1",
          "v": 162
        },
        {
          "label": "Q2",
          "v": 284
        },
        {
          "label": "Q3",
          "v": 318
        },
        {
          "label": "Q4",
          "v": 206
        }
      ],
      "seriesUnit": "亿美元",
      "seriesNote": "全年季度走势",
      "chartCaption": "起步阶段，曲线尚未抬头",
      "closingLine": "全年热度从保守启动开始。"
    }
  },
  {
    "key": "theme08_page020",
    "themeKey": "theme08",
    "pageNumber": 20,
    "layout": "THEME08-020",
    "slot": "p18",
    "label": "⑱ 指标对比 · Delta",
    "bgClass": "",
    "controls": [
      {
        "key": "backgroundTheme",
        "label": "背景主题",
        "type": "enum",
        "default": "muted",
        "options": [
          "primary",
          "muted"
        ],
        "desc": "主色(电光黄) 或 次色(淡紫灰) 底色",
        "publicKey": "backgroundTheme",
        "publicLabel": "背景主题",
        "description": "主色(电光黄) 或 次色(淡紫灰) 底色"
      },
      {
        "key": "rowCount",
        "label": "行数",
        "type": "number",
        "default": 4,
        "min": 2,
        "max": 5,
        "step": 1,
        "desc": "展示的指标行数(2–5)",
        "publicKey": "rowCount",
        "publicLabel": "行数",
        "description": "展示的指标行数(2–5)"
      },
      {
        "key": "showDelta",
        "label": "环比列",
        "type": "boolean",
        "default": true,
        "desc": "环比变化徽标列的显示/隐藏",
        "publicKey": "showDelta",
        "publicLabel": "环比列",
        "description": "环比变化徽标列的显示/隐藏"
      },
      {
        "key": "showSpark",
        "label": "趋势列",
        "type": "boolean",
        "default": true,
        "desc": "每行迷你趋势曲线列的显示/隐藏",
        "publicKey": "showSpark",
        "publicLabel": "趋势列",
        "description": "每行迷你趋势曲线列的显示/隐藏"
      },
      {
        "key": "colorByTrend",
        "label": "按涨跌配色",
        "type": "boolean",
        "default": true,
        "desc": "按上升/下降为徽标与曲线着色",
        "publicKey": "colorByTrend",
        "publicLabel": "按涨跌配色",
        "description": "按上升/下降为徽标与曲线着色"
      },
      {
        "key": "focusEnabled",
        "label": "重点强调",
        "type": "boolean",
        "default": true,
        "desc": "是否高亮某一行",
        "publicKey": "focusEnabled",
        "publicLabel": "重点强调",
        "description": "是否高亮某一行"
      },
      {
        "key": "focusIndex",
        "label": "重点对象",
        "type": "number",
        "default": 0,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "被高亮的行序号(从 0 起)",
        "publicKey": "focusIndex",
        "publicLabel": "重点对象",
        "description": "被高亮的行序号(从 0 起)"
      },
      {
        "key": "showDecor",
        "label": "装饰元素",
        "type": "boolean",
        "default": true,
        "desc": "手绘装饰与标签的显示/隐藏",
        "publicKey": "showDecor",
        "publicLabel": "装饰元素",
        "description": "手绘装饰与标签的显示/隐藏"
      }
    ],
    "defaultProps": {
      "backgroundTheme": "muted",
      "rowCount": 4,
      "showDelta": true,
      "showSpark": true,
      "colorByTrend": true,
      "focusEnabled": true,
      "focusIndex": 0,
      "showDecor": true,
      "eyebrow": "Quarter Breakdown",
      "headline": "加速季度",
      "subheadline": "Q2 融资拆解",
      "summary": "Q2 进入明显加速期，模型、应用与基础设施<b>同步升温</b>。",
      "columnLabels": [
        "维度",
        "本期值",
        "环比",
        "趋势"
      ],
      "rows": [
        {
          "dim": "融资额",
          "en": "Funding",
          "value": "284",
          "unit": "亿",
          "delta": 75.3,
          "spark": [
            120,
            162,
            210,
            284
          ]
        },
        {
          "dim": "事件数",
          "en": "Deals",
          "value": "26",
          "unit": "笔",
          "delta": 44.4,
          "spark": [
            15,
            18,
            21,
            26
          ]
        },
        {
          "dim": "平均单笔",
          "en": "Avg Ticket",
          "value": "10.9",
          "unit": "亿",
          "delta": 21.1,
          "spark": [
            8.4,
            9,
            9.8,
            10.9
          ]
        },
        {
          "dim": "最大单笔",
          "en": "Max Ticket",
          "value": "38",
          "unit": "亿",
          "delta": 18.8,
          "spark": [
            26,
            32,
            34,
            38
          ]
        },
        {
          "dim": "头部集中度",
          "en": "Concentration",
          "value": "58",
          "unit": "%",
          "delta": -4.2,
          "spark": [
            64,
            62,
            60,
            58
          ]
        }
      ],
      "closingLine": "Q2 是融资窗口打开的关键节点。"
    }
  },
  {
    "key": "theme08_page021",
    "themeKey": "theme08",
    "pageNumber": 21,
    "layout": "THEME08-021",
    "slot": "p19",
    "label": "⑲ 峰值聚焦 · Peak",
    "bgClass": "",
    "controls": [
      {
        "key": "backgroundTheme",
        "label": "背景主题",
        "type": "enum",
        "default": "primary",
        "options": [
          "primary",
          "muted"
        ],
        "desc": "主色(电光黄) 或 次色(淡紫灰) 底色",
        "publicKey": "backgroundTheme",
        "publicLabel": "背景主题",
        "description": "主色(电光黄) 或 次色(淡紫灰) 底色"
      },
      {
        "key": "mediaCount",
        "label": "图片数量",
        "type": "number",
        "default": 2,
        "min": 0,
        "max": 3,
        "step": 1,
        "desc": "拼贴图片槽数量(0–3)；布局随数量自动平衡，每槽按上传图片比例自适应",
        "publicKey": "mediaCount",
        "publicLabel": "图片数量",
        "description": "拼贴图片槽数量(0–3)；布局随数量自动平衡，每槽按上传图片比例自适应"
      },
      {
        "key": "metricCount",
        "label": "指标数量",
        "type": "number",
        "default": 3,
        "min": 2,
        "max": 3,
        "step": 1,
        "desc": "主卡内支撑指标格数量(2–3)",
        "publicKey": "metricCount",
        "publicLabel": "指标数量",
        "description": "主卡内支撑指标格数量(2–3)"
      },
      {
        "key": "showPeakMark",
        "label": "峰值标记",
        "type": "boolean",
        "default": true,
        "desc": "面积图上的峰值点与标签的显示/隐藏",
        "publicKey": "showPeakMark",
        "publicLabel": "峰值标记",
        "description": "面积图上的峰值点与标签的显示/隐藏"
      },
      {
        "key": "focusEnabled",
        "label": "重点强调",
        "type": "boolean",
        "default": true,
        "desc": "是否高亮某个支撑指标",
        "publicKey": "focusEnabled",
        "publicLabel": "重点强调",
        "description": "是否高亮某个支撑指标"
      },
      {
        "key": "focusIndex",
        "label": "重点对象",
        "type": "number",
        "default": 0,
        "min": 0,
        "max": 2,
        "step": 1,
        "desc": "被高亮的指标序号(从 0 起)",
        "publicKey": "focusIndex",
        "publicLabel": "重点对象",
        "description": "被高亮的指标序号(从 0 起)"
      },
      {
        "key": "showDecor",
        "label": "装饰元素",
        "type": "boolean",
        "default": true,
        "desc": "手绘装饰与标签的显示/隐藏",
        "publicKey": "showDecor",
        "publicLabel": "装饰元素",
        "description": "手绘装饰与标签的显示/隐藏"
      }
    ],
    "defaultProps": {
      "backgroundTheme": "primary",
      "mediaCount": 2,
      "metricCount": 3,
      "showPeakMark": true,
      "focusEnabled": true,
      "focusIndex": 0,
      "showDecor": true,
      "eyebrow": "Quarter Breakdown",
      "headline": "全年峰值季度",
      "subheadline": "Q3 融资拆解",
      "summary": "Q3 融资额与事件数均达<b>全年最高</b>，是市场情绪高点。",
      "badge": "Q3 · 全年峰值",
      "hero": {
        "label": "季度融资额",
        "value": "318",
        "unit": "亿美元"
      },
      "metrics": [
        {
          "k": "事件数",
          "v": "31",
          "unit": "笔"
        },
        {
          "k": "平均单笔",
          "v": "10.3",
          "unit": "亿"
        },
        {
          "k": "峰值月份",
          "v": "8",
          "unit": "月"
        }
      ],
      "curve": [
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
      "curveUnit": "亿美元",
      "peakIndex": 7,
      "peakNote": "8 月峰值",
      "collage": {
        "0": [],
        "1": [
          {
            "l": 200,
            "t": 70,
            "box": 540,
            "r": -3,
            "ratio": 1.2,
            "sr": -4,
            "color": "var(--acl-yellow)",
            "label": "峰值现场",
            "sub": "Q3"
          }
        ],
        "2": [
          {
            "l": 16,
            "t": 4,
            "box": 470,
            "r": -4,
            "ratio": 1.18,
            "sr": -4,
            "color": "var(--acl-yellow)",
            "label": "峰值现场",
            "sub": "Q3"
          },
          {
            "l": 440,
            "t": 286,
            "box": 452,
            "r": 4,
            "ratio": 0.84,
            "sr": 3,
            "color": "var(--acl-blue)",
            "label": "高点交易",
            "sub": "8月"
          }
        ],
        "3": [
          {
            "l": 250,
            "t": 0,
            "box": 400,
            "r": 3,
            "ratio": 0.92,
            "sr": -4,
            "color": "var(--acl-yellow)",
            "label": "峰值现场",
            "sub": "Q3"
          },
          {
            "l": 0,
            "t": 244,
            "box": 366,
            "r": -5,
            "ratio": 1.2,
            "sr": 4,
            "color": "var(--acl-blue)",
            "label": "高点交易",
            "sub": "8月"
          },
          {
            "l": 470,
            "t": 400,
            "box": 348,
            "r": 5,
            "ratio": 0.82,
            "sr": -3,
            "color": "var(--acl-pink)",
            "label": "超级交易",
            "sub": "Top"
          }
        ]
      },
      "closingLine": "高峰之后，市场开始从热度转向筛选。"
    }
  },
  {
    "key": "theme08_page022",
    "themeKey": "theme08",
    "pageNumber": 22,
    "layout": "THEME08-022",
    "slot": "p20",
    "label": "⑳ 回落时间轴 · Pullback",
    "bgClass": "",
    "controls": [
      {
        "key": "backgroundTheme",
        "label": "背景主题",
        "type": "enum",
        "default": "muted",
        "options": [
          "primary",
          "muted"
        ],
        "desc": "主色(电光黄) 或 次色(淡紫灰) 底色",
        "publicKey": "backgroundTheme",
        "publicLabel": "背景主题",
        "description": "主色(电光黄) 或 次色(淡紫灰) 底色"
      },
      {
        "key": "nodeCount",
        "label": "节点数量",
        "type": "number",
        "default": 4,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "时间轴上的节点数量(2–4)",
        "publicKey": "nodeCount",
        "publicLabel": "节点数量",
        "description": "时间轴上的节点数量(2–4)"
      },
      {
        "key": "showCurve",
        "label": "趋势曲线",
        "type": "boolean",
        "default": true,
        "desc": "连接各节点的升降曲线与面积的显示/隐藏",
        "publicKey": "showCurve",
        "publicLabel": "趋势曲线",
        "description": "连接各节点的升降曲线与面积的显示/隐藏"
      },
      {
        "key": "showValueLabels",
        "label": "数值标签",
        "type": "boolean",
        "default": true,
        "desc": "各节点上方的数值显示/隐藏",
        "publicKey": "showValueLabels",
        "publicLabel": "数值标签",
        "description": "各节点上方的数值显示/隐藏"
      },
      {
        "key": "showDelta",
        "label": "环比徽标",
        "type": "boolean",
        "default": true,
        "desc": "重点节点的环比变化徽标显示/隐藏",
        "publicKey": "showDelta",
        "publicLabel": "环比徽标",
        "description": "重点节点的环比变化徽标显示/隐藏"
      },
      {
        "key": "focusEnabled",
        "label": "重点强调",
        "type": "boolean",
        "default": true,
        "desc": "是否高亮某个节点",
        "publicKey": "focusEnabled",
        "publicLabel": "重点强调",
        "description": "是否高亮某个节点"
      },
      {
        "key": "focusIndex",
        "label": "重点对象",
        "type": "number",
        "default": 3,
        "min": 0,
        "max": 3,
        "step": 1,
        "desc": "被高亮的节点序号(从 0 起)",
        "publicKey": "focusIndex",
        "publicLabel": "重点对象",
        "description": "被高亮的节点序号(从 0 起)"
      },
      {
        "key": "showDecor",
        "label": "装饰元素",
        "type": "boolean",
        "default": true,
        "desc": "手绘装饰与标签的显示/隐藏",
        "publicKey": "showDecor",
        "publicLabel": "装饰元素",
        "description": "手绘装饰与标签的显示/隐藏"
      }
    ],
    "defaultProps": {
      "backgroundTheme": "muted",
      "nodeCount": 4,
      "showCurve": true,
      "showValueLabels": true,
      "showDelta": true,
      "focusEnabled": true,
      "focusIndex": 3,
      "showDecor": true,
      "eyebrow": "Quarter Breakdown",
      "headline": "理性回落季度",
      "subheadline": "Q4 融资拆解",
      "summary": "Q4 较 Q3 回落，但<b>仍高于年初水平</b>，资金并未完全撤离。",
      "nodes": [
        {
          "label": "Q1",
          "note": "冷启动",
          "v": 162,
          "delta": null
        },
        {
          "label": "Q2",
          "note": "加速",
          "v": 284,
          "delta": 75.3
        },
        {
          "label": "Q3",
          "note": "峰值",
          "v": 318,
          "delta": 12
        },
        {
          "label": "Q4",
          "note": "理性回落",
          "v": 206,
          "delta": 35.2
        }
      ],
      "unit": "亿",
      "deckNote": "仍处高位",
      "closingLine": "回落不是终点，而是分化的开始。"
    }
  },
  {
    "key": "theme08_page023",
    "themeKey": "theme08",
    "pageNumber": 23,
    "layout": "THEME08-023",
    "slot": "p21",
    "label": "㉑ 峰谷对比 · Peak/Trough",
    "bgClass": "",
    "controls": [
      {
        "key": "backgroundTheme",
        "label": "背景主题",
        "type": "enum",
        "default": "primary",
        "options": [
          "primary",
          "muted"
        ],
        "desc": "主色(电光黄) 或 次色(淡紫灰) 底色",
        "publicKey": "backgroundTheme",
        "publicLabel": "背景主题",
        "description": "主色(电光黄) 或 次色(淡紫灰) 底色"
      },
      {
        "key": "chartType",
        "label": "图表类型",
        "type": "enum",
        "default": "column",
        "options": [
          "column",
          "lollipop"
        ],
        "desc": "序列呈现：柱状 / 棒棒糖（细茎圆点）",
        "publicKey": "chartType",
        "publicLabel": "图表类型",
        "description": "序列呈现：柱状 / 棒棒糖（细茎圆点）"
      },
      {
        "key": "barCount",
        "label": "数据点数",
        "type": "number",
        "default": 12,
        "min": 4,
        "max": 12,
        "step": 1,
        "desc": "展示的序列点数量(4–12)",
        "publicKey": "barCount",
        "publicLabel": "数据点数",
        "description": "展示的序列点数量(4–12)"
      },
      {
        "key": "highlightHighCount",
        "label": "高点标注",
        "type": "number",
        "default": 2,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "强调为峰值的最高 N 个点(0–4)",
        "publicKey": "highlightHighCount",
        "publicLabel": "高点标注",
        "description": "强调为峰值的最高 N 个点(0–4)"
      },
      {
        "key": "highlightLowCount",
        "label": "低点标注",
        "type": "number",
        "default": 2,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "强调为低位的最低 N 个点(0–4)",
        "publicKey": "highlightLowCount",
        "publicLabel": "低点标注",
        "description": "强调为低位的最低 N 个点(0–4)"
      },
      {
        "key": "showBaseline",
        "label": "均值基线",
        "type": "boolean",
        "default": true,
        "desc": "横跨图表的平均值参考线 显隐",
        "publicKey": "showBaseline",
        "publicLabel": "均值基线",
        "description": "横跨图表的平均值参考线 显隐"
      },
      {
        "key": "showValueLabels",
        "label": "数值标签",
        "type": "boolean",
        "default": true,
        "desc": "各数据点上的数值 显隐",
        "publicKey": "showValueLabels",
        "publicLabel": "数值标签",
        "description": "各数据点上的数值 显隐"
      },
      {
        "key": "showDecor",
        "label": "装饰元素",
        "type": "boolean",
        "default": true,
        "desc": "手绘批注、贴纸与极值旗标 显隐",
        "publicKey": "showDecor",
        "publicLabel": "装饰元素",
        "description": "手绘批注、贴纸与极值旗标 显隐"
      }
    ],
    "defaultProps": {
      "backgroundTheme": "primary",
      "chartType": "column",
      "barCount": 12,
      "highlightHighCount": 2,
      "highlightLowCount": 2,
      "showBaseline": true,
      "showValueLabels": true,
      "showDecor": true,
      "eyebrow": "Peak & Trough",
      "headline": "峰值与低位",
      "subheadline": "月度峰谷对比",
      "summary": "8 月为全年峰值，1 月为低位，<b>峰谷差体现交易集中度</b>。",
      "unit": "亿美元",
      "series": [
        {
          "label": "1月",
          "v": 45
        },
        {
          "label": "2月",
          "v": 58
        },
        {
          "label": "3月",
          "v": 59
        },
        {
          "label": "4月",
          "v": 86
        },
        {
          "label": "5月",
          "v": 105
        },
        {
          "label": "6月",
          "v": 93
        },
        {
          "label": "7月",
          "v": 92
        },
        {
          "label": "8月",
          "v": 118
        },
        {
          "label": "9月",
          "v": 108
        },
        {
          "label": "10月",
          "v": 73
        },
        {
          "label": "11月",
          "v": 81
        },
        {
          "label": "12月",
          "v": 52
        }
      ],
      "peakNote": "高点",
      "troughNote": "低点",
      "closingLine": "月度波动背后，是头部交易的释放节奏。"
    }
  },
  {
    "key": "theme08_page024",
    "themeKey": "theme08",
    "pageNumber": 24,
    "layout": "THEME08-024",
    "slot": "p22",
    "label": "㉒ 贡献瀑布 · Waterfall",
    "bgClass": "",
    "controls": [
      {
        "key": "backgroundTheme",
        "label": "背景主题",
        "type": "enum",
        "default": "primary",
        "options": [
          "primary",
          "muted"
        ],
        "desc": "主色(电光黄) 或 次色(淡紫灰) 底色",
        "publicKey": "backgroundTheme",
        "publicLabel": "背景主题",
        "description": "主色(电光黄) 或 次色(淡紫灰) 底色"
      },
      {
        "key": "stepCount",
        "label": "分段数量",
        "type": "number",
        "default": 5,
        "min": 2,
        "max": 5,
        "step": 1,
        "desc": "瀑布累计的贡献分段数量(2–5)",
        "publicKey": "stepCount",
        "publicLabel": "分段数量",
        "description": "瀑布累计的贡献分段数量(2–5)"
      },
      {
        "key": "showTotal",
        "label": "合计列",
        "type": "boolean",
        "default": true,
        "desc": "末尾累计合计柱 显隐",
        "publicKey": "showTotal",
        "publicLabel": "合计列",
        "description": "末尾累计合计柱 显隐"
      },
      {
        "key": "focusEnabled",
        "label": "重点强调",
        "type": "boolean",
        "default": true,
        "desc": "是否高亮某一分段(其余淡化)",
        "publicKey": "focusEnabled",
        "publicLabel": "重点强调",
        "description": "是否高亮某一分段(其余淡化)"
      },
      {
        "key": "focusIndex",
        "label": "重点对象",
        "type": "number",
        "default": 0,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "被强调的分段序号(从 0 起)",
        "publicKey": "focusIndex",
        "publicLabel": "重点对象",
        "description": "被强调的分段序号(从 0 起)"
      },
      {
        "key": "showValueLabels",
        "label": "数值标签",
        "type": "boolean",
        "default": true,
        "desc": "各分段顶部数值 显隐",
        "publicKey": "showValueLabels",
        "publicLabel": "数值标签",
        "description": "各分段顶部数值 显隐"
      },
      {
        "key": "showConnectors",
        "label": "连接线",
        "type": "boolean",
        "default": true,
        "desc": "分段之间的虚线连接 显隐",
        "publicKey": "showConnectors",
        "publicLabel": "连接线",
        "description": "分段之间的虚线连接 显隐"
      },
      {
        "key": "showDecor",
        "label": "装饰元素",
        "type": "boolean",
        "default": true,
        "desc": "手绘批注与贴纸标签 显隐",
        "publicKey": "showDecor",
        "publicLabel": "装饰元素",
        "description": "手绘批注与贴纸标签 显隐"
      }
    ],
    "defaultProps": {
      "backgroundTheme": "primary",
      "stepCount": 5,
      "showTotal": true,
      "focusEnabled": true,
      "focusIndex": 0,
      "showValueLabels": true,
      "showConnectors": true,
      "showDecor": true,
      "eyebrow": "Funding Waterfall",
      "headline": "赛道贡献拆分",
      "subheadline": "融资额贡献瀑布",
      "summary": "全年 970 亿美元，由模型、应用、基础设施、芯片与其他<b>共同构成</b>。",
      "unit": "亿美元",
      "steps": [
        {
          "label": "通用大模型",
          "en": "Foundation",
          "v": 420
        },
        {
          "label": "垂直应用",
          "en": "Vertical",
          "v": 245
        },
        {
          "label": "基础设施",
          "en": "Infra",
          "v": 158
        },
        {
          "label": "AI 芯片",
          "en": "Chips",
          "v": 97
        },
        {
          "label": "其他",
          "en": "Others",
          "v": 50
        }
      ],
      "totalLabel": "亿美元 · 全年",
      "closingLine": "大模型制造热度，基础设施与应用承接兑现。"
    }
  },
  {
    "key": "theme08_page025",
    "themeKey": "theme08",
    "pageNumber": 25,
    "layout": "THEME08-025",
    "slot": "p23",
    "label": "㉓ 区间结构 · Size Split",
    "bgClass": "",
    "controls": [
      {
        "key": "backgroundTheme",
        "label": "背景主题",
        "type": "enum",
        "default": "muted",
        "options": [
          "primary",
          "muted"
        ],
        "desc": "主色(电光黄) 或 次色(淡紫灰) 底色",
        "publicKey": "backgroundTheme",
        "publicLabel": "背景主题",
        "description": "主色(电光黄) 或 次色(淡紫灰) 底色"
      },
      {
        "key": "chartType",
        "label": "图表类型",
        "type": "enum",
        "default": "mirror",
        "options": [
          "mirror",
          "grouped"
        ],
        "desc": "双维呈现：镜像对比(背向) / 成组并列",
        "publicKey": "chartType",
        "publicLabel": "图表类型",
        "description": "双维呈现：镜像对比(背向) / 成组并列"
      },
      {
        "key": "bandCount",
        "label": "区间数量",
        "type": "number",
        "default": 4,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "有序区间(行)的数量(2–4)",
        "publicKey": "bandCount",
        "publicLabel": "区间数量",
        "description": "有序区间(行)的数量(2–4)"
      },
      {
        "key": "focusEnabled",
        "label": "重点强调",
        "type": "boolean",
        "default": true,
        "desc": "是否高亮某个区间(其余淡化)",
        "publicKey": "focusEnabled",
        "publicLabel": "重点强调",
        "description": "是否高亮某个区间(其余淡化)"
      },
      {
        "key": "focusIndex",
        "label": "重点对象",
        "type": "number",
        "default": 3,
        "min": 0,
        "max": 3,
        "step": 1,
        "desc": "被强调的区间序号(从 0 起)",
        "publicKey": "focusIndex",
        "publicLabel": "重点对象",
        "description": "被强调的区间序号(从 0 起)"
      },
      {
        "key": "showValueLabels",
        "label": "数值标签",
        "type": "boolean",
        "default": true,
        "desc": "各条形上的数值 显隐",
        "publicKey": "showValueLabels",
        "publicLabel": "数值标签",
        "description": "各条形上的数值 显隐"
      },
      {
        "key": "showDecor",
        "label": "装饰元素",
        "type": "boolean",
        "default": true,
        "desc": "手绘批注与贴纸标签 显隐",
        "publicKey": "showDecor",
        "publicLabel": "装饰元素",
        "description": "手绘批注与贴纸标签 显隐"
      }
    ],
    "defaultProps": {
      "backgroundTheme": "muted",
      "chartType": "mirror",
      "bandCount": 4,
      "focusEnabled": true,
      "focusIndex": 3,
      "showValueLabels": true,
      "showDecor": true,
      "eyebrow": "Deal Size Split",
      "headline": "金额区间结构",
      "subheadline": "交易规模分布",
      "summary": "低金额段贡献数量，高金额段<b>贡献市场记忆</b>。",
      "countLabel": "交易笔数",
      "valueLabel": "融资金额",
      "countUnit": "笔",
      "valueUnit": "亿",
      "bands": [
        {
          "label": "1–2 亿",
          "en": "$100–200M",
          "count": 41,
          "value": 58
        },
        {
          "label": "2–5 亿",
          "en": "$200–500M",
          "count": 29,
          "value": 91
        },
        {
          "label": "5–10 亿",
          "en": "$500M–1B",
          "count": 15,
          "value": 103
        },
        {
          "label": "10 亿 +",
          "en": "$1B+",
          "count": 12,
          "value": 718
        }
      ],
      "closingLine": "市场，被少数超级交易重新定价。"
    }
  },
  {
    "key": "theme08_page026",
    "themeKey": "theme08",
    "pageNumber": 26,
    "layout": "THEME08-026",
    "slot": "p24",
    "label": "㉔ 大数字 · Big Number",
    "bgClass": "",
    "controls": [
      {
        "key": "backgroundTheme",
        "label": "背景主题",
        "type": "enum",
        "default": "primary",
        "options": [
          "primary",
          "muted",
          "ink"
        ],
        "desc": "主色(电光黄) / 次色(淡紫灰) / 深色(高反差大数字)",
        "publicKey": "backgroundTheme",
        "publicLabel": "背景主题",
        "description": "主色(电光黄) / 次色(淡紫灰) / 深色(高反差大数字)"
      },
      {
        "key": "mediaCount",
        "label": "图片数量",
        "type": "number",
        "default": 2,
        "min": 0,
        "max": 3,
        "step": 1,
        "desc": "配图槽数量(0–3)；布局随数量自动平衡，每槽按上传图片比例自适应",
        "publicKey": "mediaCount",
        "publicLabel": "图片数量",
        "description": "配图槽数量(0–3)；布局随数量自动平衡，每槽按上传图片比例自适应"
      },
      {
        "key": "metricCount",
        "label": "指标数量",
        "type": "number",
        "default": 3,
        "min": 2,
        "max": 3,
        "step": 1,
        "desc": "主数字下方支撑指标格数量(2–3)",
        "publicKey": "metricCount",
        "publicLabel": "指标数量",
        "description": "主数字下方支撑指标格数量(2–3)"
      },
      {
        "key": "showDecor",
        "label": "装饰元素",
        "type": "boolean",
        "default": true,
        "desc": "手绘箭头、火花与贴纸标签 显隐",
        "publicKey": "showDecor",
        "publicLabel": "装饰元素",
        "description": "手绘箭头、火花与贴纸标签 显隐"
      }
    ],
    "defaultProps": {
      "backgroundTheme": "primary",
      "mediaCount": 2,
      "metricCount": 3,
      "showDecor": true,
      "eyebrow": "Average Ticket · 平均单笔",
      "kicker": "大数字",
      "headline": "全年平均单笔融资规模",
      "subheadline": "Avg / Deal",
      "bigNumber": "10",
      "bigUnit": "亿美元",
      "caption": "把 970 亿美元摊到 97 笔大额交易上，<b>平均每笔约 10 亿美元</b>——规模越大，后续兑现压力越高。",
      "metrics": [
        {
          "k": "全年融资",
          "v": "970",
          "unit": "亿"
        },
        {
          "k": "大额事件",
          "v": "97",
          "unit": "笔"
        },
        {
          "k": "最大单笔",
          "v": "66",
          "unit": "亿"
        }
      ],
      "collage": {
        "0": [],
        "1": [
          {
            "l": 60,
            "t": 70,
            "box": 420,
            "r": -3,
            "ratio": 0.84,
            "accent": "var(--acl-paper)",
            "ph": "配图",
            "st": {
              "label": "FIG.01",
              "color": "var(--acl-yellow)",
              "subColor": "var(--acl-pink)",
              "sub": "现场",
              "rotate": -4
            }
          }
        ],
        "2": [
          {
            "l": 40,
            "t": 30,
            "box": 320,
            "r": -4,
            "ratio": 0.82,
            "accent": "var(--acl-paper)",
            "ph": "配图",
            "st": {
              "label": "FIG.01",
              "color": "var(--acl-yellow)",
              "subColor": "var(--acl-pink)",
              "sub": "现场",
              "rotate": -4
            }
          },
          {
            "l": 260,
            "t": 330,
            "box": 280,
            "r": 5,
            "ratio": 1.2,
            "accent": "var(--acl-paper)",
            "ph": "配图",
            "st": {
              "label": "FIG.02",
              "color": "var(--acl-blue)",
              "rotate": 4
            }
          }
        ],
        "3": [
          {
            "l": 30,
            "t": 0,
            "box": 280,
            "r": -4,
            "ratio": 0.82,
            "accent": "var(--acl-paper)",
            "ph": "配图",
            "st": {
              "label": "FIG.01",
              "color": "var(--acl-yellow)",
              "subColor": "var(--acl-pink)",
              "sub": "现场",
              "rotate": -4
            }
          },
          {
            "l": 290,
            "t": 220,
            "box": 250,
            "r": 5,
            "ratio": 1.18,
            "accent": "var(--acl-paper)",
            "ph": "配图",
            "st": {
              "label": "FIG.02",
              "color": "var(--acl-blue)",
              "rotate": 4
            }
          },
          {
            "l": 60,
            "t": 430,
            "box": 220,
            "r": 3,
            "ratio": 0.9,
            "accent": "var(--acl-paper)",
            "ph": "配图",
            "st": {
              "label": "FIG.03",
              "color": "var(--acl-pink)",
              "rotate": -3
            }
          }
        ]
      },
      "closingLine": "一个数字，先把整页钉在观众脑子里。"
    }
  },
  {
    "key": "theme08_page027",
    "themeKey": "theme08",
    "pageNumber": 27,
    "layout": "THEME08-027",
    "slot": "p25",
    "label": "㉕ 累计曲线 · Capital Curve",
    "bgClass": "",
    "controls": [
      {
        "key": "backgroundTheme",
        "label": "背景主题",
        "type": "enum",
        "default": "primary",
        "options": [
          "primary",
          "muted"
        ],
        "desc": "主色(电光黄) 或 次色(淡紫灰) 底色",
        "publicKey": "backgroundTheme",
        "publicLabel": "背景主题",
        "description": "主色(电光黄) 或 次色(淡紫灰) 底色"
      },
      {
        "key": "chartType",
        "label": "图表类型",
        "type": "enum",
        "default": "area",
        "options": [
          "area",
          "line",
          "step"
        ],
        "desc": "累计曲线的呈现：面积 / 折线 / 阶梯",
        "publicKey": "chartType",
        "publicLabel": "图表类型",
        "description": "累计曲线的呈现：面积 / 折线 / 阶梯"
      },
      {
        "key": "nodeCount",
        "label": "节点数量",
        "type": "number",
        "default": 4,
        "min": 2,
        "max": 5,
        "step": 1,
        "desc": "累计曲线上的阶段节点数量(2–5)",
        "publicKey": "nodeCount",
        "publicLabel": "节点数量",
        "description": "累计曲线上的阶段节点数量(2–5)"
      },
      {
        "key": "showBaseline",
        "label": "参考基线",
        "type": "boolean",
        "default": true,
        "desc": "均匀分布(对角)参考线的显示/隐藏",
        "publicKey": "showBaseline",
        "publicLabel": "参考基线",
        "description": "均匀分布(对角)参考线的显示/隐藏"
      },
      {
        "key": "showValueLabels",
        "label": "数值标签",
        "type": "boolean",
        "default": true,
        "desc": "在各节点上显示数值",
        "publicKey": "showValueLabels",
        "publicLabel": "数值标签",
        "description": "在各节点上显示数值"
      },
      {
        "key": "focusEnabled",
        "label": "重点强调",
        "type": "boolean",
        "default": true,
        "desc": "是否高亮某个阶段节点",
        "publicKey": "focusEnabled",
        "publicLabel": "重点强调",
        "description": "是否高亮某个阶段节点"
      },
      {
        "key": "focusIndex",
        "label": "重点对象",
        "type": "number",
        "default": 3,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "被高亮的节点序号(从 0 起)",
        "publicKey": "focusIndex",
        "publicLabel": "重点对象",
        "description": "被高亮的节点序号(从 0 起)"
      },
      {
        "key": "showDecor",
        "label": "装饰元素",
        "type": "boolean",
        "default": true,
        "desc": "手绘装饰与标签的显示/隐藏",
        "publicKey": "showDecor",
        "publicLabel": "装饰元素",
        "description": "手绘装饰与标签的显示/隐藏"
      }
    ],
    "defaultProps": {
      "backgroundTheme": "primary",
      "chartType": "area",
      "nodeCount": 4,
      "showBaseline": true,
      "showValueLabels": true,
      "focusEnabled": true,
      "focusIndex": 3,
      "showDecor": true,
      "eyebrow": "Capital Curve",
      "headline": "累计资金分布",
      "subheadline": "资本集中曲线",
      "summary": "资金高度向头部集中——<b>少数公司吸走大部分融资</b>。",
      "nodes": [
        {
          "label": "Top 3",
          "sub": "头部",
          "x": 0.031,
          "v": 18.7
        },
        {
          "label": "Top 10",
          "sub": "前十",
          "x": 0.103,
          "v": 23.8
        },
        {
          "label": "Top 25",
          "sub": "前廿五",
          "x": 0.258,
          "v": 48.5
        },
        {
          "label": "Top 50",
          "sub": "过半",
          "x": 0.515,
          "v": 71.2
        },
        {
          "label": "全部",
          "sub": "97 笔",
          "x": 1,
          "v": 100
        }
      ],
      "axisXLabel": "公司数量（由多到少）",
      "axisYLabel": "累计资金占比 %",
      "valueUnit": "%",
      "focusNote": "过半公司 ≈ 七成资金",
      "closingLine": "集中度本身就是市场结构。"
    }
  },
  {
    "key": "theme08_page028",
    "themeKey": "theme08",
    "pageNumber": 28,
    "layout": "THEME08-028",
    "slot": "p26",
    "label": "㉖ 章节 · Chapter",
    "bgClass": "",
    "controls": [
      {
        "key": "backgroundTheme",
        "label": "背景主题",
        "type": "enum",
        "default": "primary",
        "options": [
          "primary",
          "muted",
          "ink"
        ],
        "desc": "主色(电光黄) / 次色(淡紫灰) / 深色(高反差章节页)",
        "publicKey": "backgroundTheme",
        "publicLabel": "背景主题",
        "description": "主色(电光黄) / 次色(淡紫灰) / 深色(高反差章节页)"
      },
      {
        "key": "showIndex",
        "label": "大章节号",
        "type": "boolean",
        "default": true,
        "desc": "侧栏巨型章节编号的显示/隐藏",
        "publicKey": "showIndex",
        "publicLabel": "大章节号",
        "description": "侧栏巨型章节编号的显示/隐藏"
      },
      {
        "key": "keywordCount",
        "label": "关键词数量",
        "type": "number",
        "default": 4,
        "min": 0,
        "max": 6,
        "step": 1,
        "desc": "本章关键词行的数量(0–6)",
        "publicKey": "keywordCount",
        "publicLabel": "关键词数量",
        "description": "本章关键词行的数量(0–6)"
      },
      {
        "key": "showDecor",
        "label": "装饰元素",
        "type": "boolean",
        "default": true,
        "desc": "手绘装饰与贴纸标签的显示/隐藏",
        "publicKey": "showDecor",
        "publicLabel": "装饰元素",
        "description": "手绘装饰与贴纸标签的显示/隐藏"
      }
    ],
    "defaultProps": {
      "backgroundTheme": "primary",
      "showIndex": true,
      "keywordCount": 4,
      "showDecor": true,
      "eyebrow": "Chapter 03",
      "indexLabel": "03",
      "headline": "赛道结构细分",
      "subheadline": "从大模型到垂直应用",
      "keywords": [
        "通用模型",
        "Agent",
        "企业搜索",
        "医疗 · 金融",
        "开发者工具",
        "安全对齐"
      ],
      "closingLine": "下一组页面进入更细的拆解。"
    }
  },
  {
    "key": "theme08_page029",
    "themeKey": "theme08",
    "pageNumber": 29,
    "layout": "THEME08-029",
    "slot": "p27",
    "label": "㉗ 雷达图 · Radar",
    "bgClass": "",
    "controls": [
      {
        "key": "backgroundTheme",
        "label": "背景主题",
        "type": "enum",
        "default": "primary",
        "options": [
          "primary",
          "muted"
        ],
        "desc": "主色(电光黄) 或 次色(淡紫灰) 底色",
        "publicKey": "backgroundTheme",
        "publicLabel": "背景主题",
        "description": "主色(电光黄) 或 次色(淡紫灰) 底色"
      },
      {
        "key": "dimensionCount",
        "label": "维度数量",
        "type": "number",
        "default": 5,
        "min": 4,
        "max": 6,
        "step": 1,
        "desc": "雷达图坐标轴(维度)数量(4–6)",
        "publicKey": "dimensionCount",
        "publicLabel": "维度数量",
        "description": "雷达图坐标轴(维度)数量(4–6)"
      },
      {
        "key": "showCompare",
        "label": "对比系列",
        "type": "boolean",
        "default": true,
        "desc": "叠加第二条基准系列(分类均值)多边形",
        "publicKey": "showCompare",
        "publicLabel": "对比系列",
        "description": "叠加第二条基准系列(分类均值)多边形"
      },
      {
        "key": "showValueLabels",
        "label": "数值标签",
        "type": "boolean",
        "default": true,
        "desc": "在主系列各顶点显示数值",
        "publicKey": "showValueLabels",
        "publicLabel": "数值标签",
        "description": "在主系列各顶点显示数值"
      },
      {
        "key": "focusEnabled",
        "label": "重点强调",
        "type": "boolean",
        "default": true,
        "desc": "是否高亮某一条维度坐标轴",
        "publicKey": "focusEnabled",
        "publicLabel": "重点强调",
        "description": "是否高亮某一条维度坐标轴"
      },
      {
        "key": "focusIndex",
        "label": "重点对象",
        "type": "number",
        "default": 0,
        "min": 0,
        "max": 5,
        "step": 1,
        "desc": "被高亮的维度序号(从 0 起)",
        "publicKey": "focusIndex",
        "publicLabel": "重点对象",
        "description": "被高亮的维度序号(从 0 起)"
      },
      {
        "key": "showDecor",
        "label": "装饰元素",
        "type": "boolean",
        "default": true,
        "desc": "手绘装饰与标签的显示/隐藏",
        "publicKey": "showDecor",
        "publicLabel": "装饰元素",
        "description": "手绘装饰与标签的显示/隐藏"
      }
    ],
    "defaultProps": {
      "backgroundTheme": "primary",
      "dimensionCount": 5,
      "showCompare": true,
      "showValueLabels": true,
      "focusEnabled": true,
      "focusIndex": 0,
      "showDecor": true,
      "eyebrow": "Model Lab Race",
      "headline": "算力、数据、人才与渠道",
      "subheadline": "模型实验室竞争",
      "summary": "模型实验室竞争不只看模型指标，更看<b>资源整合能力</b>。",
      "dims": [
        {
          "label": "算力",
          "note": "Compute",
          "a": 92,
          "b": 58
        },
        {
          "label": "数据",
          "note": "Data",
          "a": 84,
          "b": 55
        },
        {
          "label": "人才",
          "note": "Talent",
          "a": 88,
          "b": 60
        },
        {
          "label": "渠道",
          "note": "Channel",
          "a": 80,
          "b": 48
        },
        {
          "label": "模型",
          "note": "Model",
          "a": 90,
          "b": 62
        },
        {
          "label": "资本",
          "note": "Capital",
          "a": 86,
          "b": 50
        }
      ],
      "seriesA": "头部实验室",
      "seriesB": "行业均值",
      "metrics": [
        {
          "k": "算力预算",
          "sub": "Compute budget",
          "v": "64",
          "dir": "up"
        },
        {
          "k": "研究团队",
          "sub": "Research team",
          "v": "38",
          "dir": "up"
        },
        {
          "k": "企业 API 客户",
          "sub": "Enterprise API",
          "v": "52",
          "dir": "up"
        },
        {
          "k": "推理成本",
          "sub": "Inference cost",
          "v": "21",
          "dir": "down"
        }
      ],
      "closingLine": "模型能力只是入口，交付能力才是商业化。"
    }
  },
  {
    "key": "theme08_page030",
    "themeKey": "theme08",
    "pageNumber": 30,
    "layout": "THEME08-030",
    "slot": "p28",
    "label": "㉘ 赛道卡 · Segment",
    "bgClass": "",
    "controls": [
      {
        "key": "backgroundTheme",
        "label": "背景主题",
        "type": "enum",
        "default": "muted",
        "options": [
          "primary",
          "muted"
        ],
        "desc": "主色(电光黄) 或 次色(淡紫灰) 底色",
        "publicKey": "backgroundTheme",
        "publicLabel": "背景主题",
        "description": "主色(电光黄) 或 次色(淡紫灰) 底色"
      },
      {
        "key": "mediaCount",
        "label": "图片数量",
        "type": "number",
        "default": 2,
        "min": 0,
        "max": 3,
        "step": 1,
        "desc": "拼贴图片槽数量(0–3)；布局随数量自动平衡，每槽按上传图片比例自适应",
        "publicKey": "mediaCount",
        "publicLabel": "图片数量",
        "description": "拼贴图片槽数量(0–3)；布局随数量自动平衡，每槽按上传图片比例自适应"
      },
      {
        "key": "metricCount",
        "label": "指标数量",
        "type": "number",
        "default": 3,
        "min": 2,
        "max": 3,
        "step": 1,
        "desc": "主卡内支撑指标格数量(2–3)",
        "publicKey": "metricCount",
        "publicLabel": "指标数量",
        "description": "主卡内支撑指标格数量(2–3)"
      },
      {
        "key": "showFlow",
        "label": "流程示意",
        "type": "boolean",
        "default": true,
        "desc": "底部工作流步骤条的显示/隐藏",
        "publicKey": "showFlow",
        "publicLabel": "流程示意",
        "description": "底部工作流步骤条的显示/隐藏"
      },
      {
        "key": "focusEnabled",
        "label": "重点强调",
        "type": "boolean",
        "default": true,
        "desc": "是否高亮某个支撑指标",
        "publicKey": "focusEnabled",
        "publicLabel": "重点强调",
        "description": "是否高亮某个支撑指标"
      },
      {
        "key": "focusIndex",
        "label": "重点对象",
        "type": "number",
        "default": 2,
        "min": 0,
        "max": 2,
        "step": 1,
        "desc": "被高亮的指标序号(从 0 起)",
        "publicKey": "focusIndex",
        "publicLabel": "重点对象",
        "description": "被高亮的指标序号(从 0 起)"
      },
      {
        "key": "showDecor",
        "label": "装饰元素",
        "type": "boolean",
        "default": true,
        "desc": "手绘装饰与标签的显示/隐藏",
        "publicKey": "showDecor",
        "publicLabel": "装饰元素",
        "description": "手绘装饰与标签的显示/隐藏"
      }
    ],
    "defaultProps": {
      "backgroundTheme": "muted",
      "mediaCount": 2,
      "metricCount": 3,
      "showFlow": true,
      "focusEnabled": true,
      "focusIndex": 2,
      "showDecor": true,
      "eyebrow": "AI Agents",
      "headline": "工作流自动化机会",
      "subheadline": "AI Agent 赛道",
      "summary": "Agent 公司以<b>任务执行与工作流自动化</b>作为核心卖点。",
      "badge": "AI Agents · 工作流自动化",
      "hero": {
        "label": "赛道融资额",
        "value": "72",
        "unit": "亿美元"
      },
      "metrics": [
        {
          "k": "事件数",
          "v": "16",
          "unit": "笔"
        },
        {
          "k": "平均单笔",
          "v": "4.5",
          "unit": "亿"
        },
        {
          "k": "ARR 中位数",
          "v": "4200",
          "unit": "万"
        }
      ],
      "flow": [
        {
          "t": "接收任务",
          "s": "Intake"
        },
        {
          "t": "规划",
          "s": "Plan"
        },
        {
          "t": "调用工具",
          "s": "Tools"
        },
        {
          "t": "执行交付",
          "s": "Deliver"
        }
      ],
      "collage": {
        "0": [],
        "1": [
          {
            "l": 210,
            "t": 70,
            "box": 540,
            "r": -3,
            "ratio": 1.25,
            "sr": -4,
            "color": "var(--acl-yellow)",
            "label": "Agent 场景",
            "sub": "DEMO"
          }
        ],
        "2": [
          {
            "l": 14,
            "t": 6,
            "box": 470,
            "r": -4,
            "ratio": 1.2,
            "sr": -4,
            "color": "var(--acl-yellow)",
            "label": "Agent 场景",
            "sub": "DEMO"
          },
          {
            "l": 438,
            "t": 288,
            "box": 452,
            "r": 4,
            "ratio": 0.82,
            "sr": 3,
            "color": "var(--acl-blue)",
            "label": "工作流",
            "sub": "FLOW"
          }
        ],
        "3": [
          {
            "l": 252,
            "t": 0,
            "box": 398,
            "r": 3,
            "ratio": 0.9,
            "sr": -4,
            "color": "var(--acl-yellow)",
            "label": "Agent 场景",
            "sub": "DEMO"
          },
          {
            "l": 0,
            "t": 246,
            "box": 364,
            "r": -5,
            "ratio": 1.22,
            "sr": 4,
            "color": "var(--acl-blue)",
            "label": "工作流",
            "sub": "FLOW"
          },
          {
            "l": 472,
            "t": 402,
            "box": 346,
            "r": 5,
            "ratio": 0.82,
            "sr": -3,
            "color": "var(--acl-pink)",
            "label": "可计费",
            "sub": "ARR"
          }
        ]
      },
      "closingLine": "能进入工作流的 Agent 才有长期价值。"
    }
  },
  {
    "key": "theme08_page031",
    "themeKey": "theme08",
    "pageNumber": 31,
    "layout": "THEME08-031",
    "slot": "p29",
    "label": "㉙ 知识入口 · Portal",
    "bgClass": "",
    "controls": [
      {
        "key": "backgroundTheme",
        "label": "背景主题",
        "type": "enum",
        "default": "primary",
        "options": [
          "primary",
          "muted"
        ],
        "desc": "主色(电光黄) 或 次色(淡紫灰) 底色",
        "publicKey": "backgroundTheme",
        "publicLabel": "背景主题",
        "description": "主色(电光黄) 或 次色(淡紫灰) 底色"
      },
      {
        "key": "mediaCount",
        "label": "图片数量",
        "type": "number",
        "default": 3,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "拼贴图片槽数量(0–4)；布局随数量自动平衡，每槽按上传图片比例自适应",
        "publicKey": "mediaCount",
        "publicLabel": "图片数量",
        "description": "拼贴图片槽数量(0–4)；布局随数量自动平衡，每槽按上传图片比例自适应"
      },
      {
        "key": "metricCount",
        "label": "指标数量",
        "type": "number",
        "default": 3,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "右侧编辑式指标行数量(2–4)",
        "publicKey": "metricCount",
        "publicLabel": "指标数量",
        "description": "右侧编辑式指标行数量(2–4)"
      },
      {
        "key": "showMeter",
        "label": "比例条",
        "type": "boolean",
        "default": true,
        "desc": "底部比例/采用率进度条的显示/隐藏",
        "publicKey": "showMeter",
        "publicLabel": "比例条",
        "description": "底部比例/采用率进度条的显示/隐藏"
      },
      {
        "key": "focusEnabled",
        "label": "重点强调",
        "type": "boolean",
        "default": true,
        "desc": "是否高亮某一条指标行",
        "publicKey": "focusEnabled",
        "publicLabel": "重点强调",
        "description": "是否高亮某一条指标行"
      },
      {
        "key": "focusIndex",
        "label": "重点对象",
        "type": "number",
        "default": 2,
        "min": 0,
        "max": 3,
        "step": 1,
        "desc": "被高亮的指标行序号(从 0 起)",
        "publicKey": "focusIndex",
        "publicLabel": "重点对象",
        "description": "被高亮的指标行序号(从 0 起)"
      },
      {
        "key": "showDecor",
        "label": "装饰元素",
        "type": "boolean",
        "default": true,
        "desc": "手绘装饰与标签的显示/隐藏",
        "publicKey": "showDecor",
        "publicLabel": "装饰元素",
        "description": "手绘装饰与标签的显示/隐藏"
      }
    ],
    "defaultProps": {
      "backgroundTheme": "primary",
      "mediaCount": 3,
      "metricCount": 3,
      "showMeter": true,
      "focusEnabled": true,
      "focusIndex": 2,
      "showDecor": true,
      "eyebrow": "Enterprise Search",
      "headline": "知识入口机会",
      "subheadline": "企业搜索赛道",
      "summary": "企业搜索是较早形成<b>明确付费场景</b>的应用方向。",
      "hero": {
        "label": "赛道融资额",
        "value": "38",
        "unit": "亿美元"
      },
      "metrics": [
        {
          "k": "事件数",
          "en": "Deals",
          "v": "9",
          "unit": "笔"
        },
        {
          "k": "平均单笔",
          "en": "Avg Ticket",
          "v": "4.2",
          "unit": "亿"
        },
        {
          "k": "付费客户中位数",
          "en": "Median Paid",
          "v": "620",
          "unit": "家"
        }
      ],
      "meter": {
        "label": "内部知识接入采用率",
        "value": 72
      },
      "collage": {
        "0": [],
        "1": [
          {
            "l": 200,
            "t": 60,
            "box": 620,
            "r": -3,
            "ratio": 1.2,
            "sr": -4,
            "color": "var(--acl-yellow)",
            "label": "知识库入口",
            "sub": "SEARCH"
          }
        ],
        "2": [
          {
            "l": 20,
            "t": 10,
            "box": 540,
            "r": -4,
            "ratio": 1.15,
            "sr": -4,
            "color": "var(--acl-yellow)",
            "label": "知识库入口",
            "sub": "SEARCH"
          },
          {
            "l": 500,
            "t": 320,
            "box": 470,
            "r": 4,
            "ratio": 0.82,
            "sr": 3,
            "color": "var(--acl-blue)",
            "label": "检索结果",
            "sub": "RESULT"
          }
        ],
        "3": [
          {
            "l": 250,
            "t": 0,
            "box": 430,
            "r": 3,
            "ratio": 0.92,
            "sr": -4,
            "color": "var(--acl-yellow)",
            "label": "知识库入口",
            "sub": "SEARCH"
          },
          {
            "l": 0,
            "t": 248,
            "box": 392,
            "r": -5,
            "ratio": 1.2,
            "sr": 4,
            "color": "var(--acl-blue)",
            "label": "检索结果",
            "sub": "RESULT"
          },
          {
            "l": 470,
            "t": 372,
            "box": 372,
            "r": 5,
            "ratio": 0.84,
            "sr": -3,
            "color": "var(--acl-pink)",
            "label": "采用率",
            "sub": "ADOPT"
          }
        ],
        "4": [
          {
            "l": 6,
            "t": 8,
            "box": 380,
            "r": -4,
            "ratio": 0.96,
            "sr": -4,
            "color": "var(--acl-yellow)",
            "label": "知识库入口",
            "sub": "SEARCH"
          },
          {
            "l": 412,
            "t": 30,
            "box": 340,
            "r": 4,
            "ratio": 1.15,
            "sr": 3,
            "color": "var(--acl-blue)",
            "label": "检索结果",
            "sub": "RESULT"
          },
          {
            "l": 110,
            "t": 380,
            "box": 352,
            "r": 4,
            "ratio": 1.1,
            "sr": -3,
            "color": "var(--acl-pink)",
            "label": "采用率",
            "sub": "ADOPT"
          },
          {
            "l": 540,
            "t": 388,
            "box": 336,
            "r": -4,
            "ratio": 0.82,
            "sr": 4,
            "color": "var(--acl-paper)",
            "label": "企业部署",
            "sub": "DEPLOY"
          }
        ]
      },
      "closingLine": "企业知识入口是 AI 应用的重要落地点。"
    }
  },
  {
    "key": "theme08_page032",
    "themeKey": "theme08",
    "pageNumber": 32,
    "layout": "THEME08-032",
    "slot": "p30",
    "label": "㉚ 场景矩阵 · Matrix",
    "bgClass": "",
    "controls": [
      {
        "key": "backgroundTheme",
        "label": "背景主题",
        "type": "enum",
        "default": "muted",
        "options": [
          "primary",
          "muted"
        ],
        "desc": "主色(电光黄) 或 次色(淡紫灰) 底色",
        "publicKey": "backgroundTheme",
        "publicLabel": "背景主题",
        "description": "主色(电光黄) 或 次色(淡紫灰) 底色"
      },
      {
        "key": "rowCount",
        "label": "行数",
        "type": "number",
        "default": 4,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "展示的场景行数(2–4)",
        "publicKey": "rowCount",
        "publicLabel": "行数",
        "description": "展示的场景行数(2–4)"
      },
      {
        "key": "showBars",
        "label": "占比条",
        "type": "boolean",
        "default": true,
        "desc": "占比列横向比例条的显示/隐藏",
        "publicKey": "showBars",
        "publicLabel": "占比条",
        "description": "占比列横向比例条的显示/隐藏"
      },
      {
        "key": "showRepCol",
        "label": "能力列",
        "type": "boolean",
        "default": true,
        "desc": "「代表能力」列的显示/隐藏",
        "publicKey": "showRepCol",
        "publicLabel": "能力列",
        "description": "「代表能力」列的显示/隐藏"
      },
      {
        "key": "showRating",
        "label": "判断列",
        "type": "boolean",
        "default": true,
        "desc": "「判断」评级圆点与标签列的显示/隐藏",
        "publicKey": "showStatusRating",
        "publicLabel": "判断列",
        "description": "「判断」评级圆点与标签列的显示/隐藏"
      },
      {
        "key": "focusEnabled",
        "label": "重点强调",
        "type": "boolean",
        "default": true,
        "desc": "是否高亮某一行",
        "publicKey": "focusEnabled",
        "publicLabel": "重点强调",
        "description": "是否高亮某一行"
      },
      {
        "key": "focusIndex",
        "label": "重点对象",
        "type": "number",
        "default": 0,
        "min": 0,
        "max": 3,
        "step": 1,
        "desc": "被高亮的行序号(从 0 起)",
        "publicKey": "focusIndex",
        "publicLabel": "重点对象",
        "description": "被高亮的行序号(从 0 起)"
      },
      {
        "key": "showDecor",
        "label": "装饰元素",
        "type": "boolean",
        "default": true,
        "desc": "手绘装饰与标签的显示/隐藏",
        "publicKey": "showDecor",
        "publicLabel": "装饰元素",
        "description": "手绘装饰与标签的显示/隐藏"
      }
    ],
    "defaultProps": {
      "backgroundTheme": "muted",
      "rowCount": 4,
      "showBars": true,
      "showRepCol": true,
      "showRating": true,
      "focusEnabled": true,
      "focusIndex": 0,
      "showDecor": true,
      "eyebrow": "Legal AI",
      "headline": "专业服务高客单价",
      "subheadline": "法律 AI 赛道",
      "summary": "法律 AI 具备<b>高客单价、强专业壁垒</b>和明确效率提升空间。",
      "kpis": [
        {
          "k": "赛道融资额",
          "v": "26",
          "unit": "亿"
        },
        {
          "k": "事件数",
          "v": "6",
          "unit": "笔"
        },
        {
          "k": "平均单笔",
          "v": "4.3",
          "unit": "亿"
        },
        {
          "k": "合同审查占比",
          "v": "46",
          "unit": "%"
        }
      ],
      "columnLabels": [
        "场景",
        "场景占比",
        "代表能力",
        "判断"
      ],
      "rows": [
        {
          "scn": "合同审查",
          "en": "Contract Review",
          "share": 46,
          "rep": "审查 / 比对引擎",
          "repEn": "Review Engine",
          "rating": 4,
          "verdict": "高频刚需"
        },
        {
          "scn": "法务检索",
          "en": "Legal Research",
          "share": 22,
          "rep": "案例 / 法规检索",
          "repEn": "Case Search",
          "rating": 3,
          "verdict": "专业壁垒"
        },
        {
          "scn": "合规监控",
          "en": "Compliance",
          "share": 18,
          "rep": "实时风险监控",
          "repEn": "Monitoring",
          "rating": 3,
          "verdict": "监管驱动"
        },
        {
          "scn": "文书起草",
          "en": "Drafting",
          "share": 14,
          "rep": "模板智能生成",
          "repEn": "Drafting",
          "rating": 2,
          "verdict": "效率提升"
        }
      ],
      "closingLine": "法律 AI 是垂直应用商业化样本。"
    }
  },
  {
    "key": "theme08_page033",
    "themeKey": "theme08",
    "pageNumber": 33,
    "layout": "THEME08-033",
    "slot": "p31",
    "label": "㉛ 分支三联 · Triptych",
    "bgClass": "",
    "controls": [
      {
        "key": "backgroundTheme",
        "label": "背景主题",
        "type": "enum",
        "default": "muted",
        "options": [
          "primary",
          "muted"
        ],
        "desc": "主色(电光黄) 或 次色(淡紫灰) 底色",
        "publicKey": "backgroundTheme",
        "publicLabel": "背景主题",
        "description": "主色(电光黄) 或 次色(淡紫灰) 底色"
      },
      {
        "key": "cardCount",
        "label": "分支数量",
        "type": "number",
        "default": 3,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "分支卡数量(0–4)；每卡含一个图片槽，布局随数量自动平衡，每槽按上传图片比例自适应",
        "publicKey": "cardCount",
        "publicLabel": "分支数量",
        "description": "分支卡数量(0–4)；每卡含一个图片槽，布局随数量自动平衡，每槽按上传图片比例自适应"
      },
      {
        "key": "showValue",
        "label": "数值",
        "type": "boolean",
        "default": true,
        "desc": "每张分支卡的大号数值的显示/隐藏",
        "publicKey": "showValueLabels",
        "publicLabel": "数值",
        "description": "每张分支卡的大号数值的显示/隐藏"
      },
      {
        "key": "showStrip",
        "label": "信息条",
        "type": "boolean",
        "default": true,
        "desc": "底部分类汇总信息条的显示/隐藏",
        "publicKey": "showStrip",
        "publicLabel": "信息条",
        "description": "底部分类汇总信息条的显示/隐藏"
      },
      {
        "key": "focusEnabled",
        "label": "重点强调",
        "type": "boolean",
        "default": true,
        "desc": "是否突出某张分支卡",
        "publicKey": "focusEnabled",
        "publicLabel": "重点强调",
        "description": "是否突出某张分支卡"
      },
      {
        "key": "focusIndex",
        "label": "重点对象",
        "type": "number",
        "default": 1,
        "min": 0,
        "max": 3,
        "step": 1,
        "desc": "被突出的分支卡序号(从 0 起)",
        "publicKey": "focusIndex",
        "publicLabel": "重点对象",
        "description": "被突出的分支卡序号(从 0 起)"
      },
      {
        "key": "showDecor",
        "label": "装饰元素",
        "type": "boolean",
        "default": true,
        "desc": "手绘装饰与标签的显示/隐藏",
        "publicKey": "showDecor",
        "publicLabel": "装饰元素",
        "description": "手绘装饰与标签的显示/隐藏"
      }
    ],
    "defaultProps": {
      "backgroundTheme": "muted",
      "cardCount": 3,
      "showValue": true,
      "showStrip": true,
      "focusEnabled": true,
      "focusIndex": 1,
      "showDecor": true,
      "eyebrow": "Healthcare AI",
      "headline": "慢变量高壁垒",
      "subheadline": "医疗 AI 赛道",
      "summary": "医疗 AI 集中在<b>影像、药物发现和临床文书</b>自动化。",
      "branches": [
        {
          "name": "影像诊断",
          "en": "Imaging",
          "value": "11",
          "unit": "亿",
          "tag": "诊断",
          "note": "FDA 审批 · 高门槛"
        },
        {
          "name": "药物发现",
          "en": "Drug Discovery",
          "value": "14",
          "unit": "亿",
          "tag": "研发",
          "note": "验证周期长 · 强壁垒"
        },
        {
          "name": "临床文书",
          "en": "Clinical Notes",
          "value": "9",
          "unit": "亿",
          "tag": "文书",
          "note": "高频刚需 · 快落地"
        },
        {
          "name": "远程监护",
          "en": "Remote Care",
          "value": "6",
          "unit": "亿",
          "tag": "监护",
          "note": "设备绑定 · 数据沉淀"
        }
      ],
      "strip": [
        {
          "k": "赛道融资额",
          "v": "34 亿美元"
        },
        {
          "k": "事件数",
          "v": "8 笔"
        },
        {
          "k": "验证周期",
          "v": "长"
        },
        {
          "k": "进入壁垒",
          "v": "高"
        }
      ],
      "closingLine": "慢场景不代表低价值。"
    }
  },
  {
    "key": "theme08_page034",
    "themeKey": "theme08",
    "pageNumber": 34,
    "layout": "THEME08-034",
    "slot": "p32",
    "label": "㉜ 场景占比 · Scene Split",
    "bgClass": "",
    "controls": [
      {
        "key": "backgroundTheme",
        "label": "背景主题",
        "type": "enum",
        "default": "primary",
        "options": [
          "primary",
          "muted"
        ],
        "desc": "主色(电光黄) 或 次色(淡紫灰) 底色",
        "publicKey": "backgroundTheme",
        "publicLabel": "背景主题",
        "description": "主色(电光黄) 或 次色(淡紫灰) 底色"
      },
      {
        "key": "mediaCount",
        "label": "图片数量",
        "type": "number",
        "default": 2,
        "min": 0,
        "max": 3,
        "step": 1,
        "desc": "拼贴图片槽数量(0–3)；布局随数量自动平衡，每槽按上传图片比例自适应",
        "publicKey": "mediaCount",
        "publicLabel": "图片数量",
        "description": "拼贴图片槽数量(0–3)；布局随数量自动平衡，每槽按上传图片比例自适应"
      },
      {
        "key": "chartType",
        "label": "图表类型",
        "type": "enum",
        "default": "donut",
        "options": [
          "donut",
          "bars"
        ],
        "desc": "占比图：环形 / 条形",
        "publicKey": "chartType",
        "publicLabel": "图表类型",
        "description": "占比图：环形 / 条形"
      },
      {
        "key": "segmentCount",
        "label": "分段数量",
        "type": "number",
        "default": 4,
        "min": 3,
        "max": 4,
        "step": 1,
        "desc": "场景占比分段数量(3–4)",
        "publicKey": "segmentCount",
        "publicLabel": "分段数量",
        "description": "场景占比分段数量(3–4)"
      },
      {
        "key": "showValueLabels",
        "label": "数值标签",
        "type": "boolean",
        "default": true,
        "desc": "各分段百分比标签的显示/隐藏",
        "publicKey": "showValueLabels",
        "publicLabel": "数值标签",
        "description": "各分段百分比标签的显示/隐藏"
      },
      {
        "key": "focusEnabled",
        "label": "重点强调",
        "type": "boolean",
        "default": true,
        "desc": "是否高亮某个分段(其余淡化)",
        "publicKey": "focusEnabled",
        "publicLabel": "重点强调",
        "description": "是否高亮某个分段(其余淡化)"
      },
      {
        "key": "focusIndex",
        "label": "重点对象",
        "type": "number",
        "default": 0,
        "min": 0,
        "max": 3,
        "step": 1,
        "desc": "被高亮的分段序号(从 0 起)",
        "publicKey": "focusIndex",
        "publicLabel": "重点对象",
        "description": "被高亮的分段序号(从 0 起)"
      },
      {
        "key": "showDecor",
        "label": "装饰元素",
        "type": "boolean",
        "default": true,
        "desc": "手绘装饰与标签的显示/隐藏",
        "publicKey": "showDecor",
        "publicLabel": "装饰元素",
        "description": "手绘装饰与标签的显示/隐藏"
      }
    ],
    "defaultProps": {
      "backgroundTheme": "primary",
      "mediaCount": 2,
      "chartType": "donut",
      "segmentCount": 4,
      "showValueLabels": true,
      "focusEnabled": true,
      "focusIndex": 0,
      "showDecor": true,
      "eyebrow": "Finance AI",
      "headline": "投研、风控与合规",
      "subheadline": "金融 AI 赛道",
      "summary": "金融 AI 聚焦<b>投研、风控、合规</b>和客户服务。",
      "hero": {
        "badge": "场景占比 · Scene Split",
        "label": "赛道融资额",
        "value": "22",
        "unit": "亿美元"
      },
      "segments": [
        {
          "k": "投研",
          "en": "Research",
          "v": 31
        },
        {
          "k": "合规",
          "en": "Compliance",
          "v": 28
        },
        {
          "k": "风控",
          "en": "Risk Control",
          "v": 24
        },
        {
          "k": "客户服务",
          "en": "Service",
          "v": 17
        }
      ],
      "collage": {
        "0": [],
        "1": [
          {
            "l": 200,
            "t": 70,
            "box": 540,
            "r": -3,
            "ratio": 1.2,
            "sr": -4,
            "color": "var(--acl-yellow)",
            "label": "金融场景",
            "sub": "DESK"
          }
        ],
        "2": [
          {
            "l": 16,
            "t": 6,
            "box": 470,
            "r": -4,
            "ratio": 1.18,
            "sr": -4,
            "color": "var(--acl-yellow)",
            "label": "投研场景",
            "sub": "DESK"
          },
          {
            "l": 440,
            "t": 288,
            "box": 452,
            "r": 4,
            "ratio": 0.84,
            "sr": 3,
            "color": "var(--acl-blue)",
            "label": "风控看板",
            "sub": "RISK"
          }
        ],
        "3": [
          {
            "l": 250,
            "t": 0,
            "box": 400,
            "r": 3,
            "ratio": 0.92,
            "sr": -4,
            "color": "var(--acl-yellow)",
            "label": "投研场景",
            "sub": "DESK"
          },
          {
            "l": 0,
            "t": 244,
            "box": 366,
            "r": -5,
            "ratio": 1.2,
            "sr": 4,
            "color": "var(--acl-blue)",
            "label": "风控看板",
            "sub": "RISK"
          },
          {
            "l": 470,
            "t": 400,
            "box": 348,
            "r": 5,
            "ratio": 0.82,
            "sr": -3,
            "color": "var(--acl-pink)",
            "label": "合规流程",
            "sub": "COMPLY"
          }
        ]
      },
      "closingLine": "高价值行业需要更强可信度。"
    }
  },
  {
    "key": "theme08_page035",
    "themeKey": "theme08",
    "pageNumber": 35,
    "layout": "THEME08-035",
    "slot": "p33",
    "label": "㉝ 金句 · Statement",
    "bgClass": "",
    "controls": [
      {
        "key": "backgroundTheme",
        "label": "背景主题",
        "type": "enum",
        "default": "primary",
        "options": [
          "primary",
          "muted",
          "ink"
        ],
        "desc": "主色(电光黄) / 次色(淡紫灰) / 深色(高反差金句)",
        "publicKey": "backgroundTheme",
        "publicLabel": "背景主题",
        "description": "主色(电光黄) / 次色(淡紫灰) / 深色(高反差金句)"
      },
      {
        "key": "showSupports",
        "label": "支撑要点",
        "type": "boolean",
        "default": true,
        "desc": "右侧要点列的显示/隐藏",
        "publicKey": "showSupports",
        "publicLabel": "支撑要点",
        "description": "右侧要点列的显示/隐藏"
      },
      {
        "key": "supportCount",
        "label": "要点数量",
        "type": "number",
        "default": 3,
        "min": 0,
        "max": 3,
        "step": 1,
        "desc": "展示的支撑要点数量(0–3)",
        "publicKey": "supportCount",
        "publicLabel": "要点数量",
        "description": "展示的支撑要点数量(0–3)"
      },
      {
        "key": "showBackdrop",
        "label": "背景大字",
        "type": "boolean",
        "default": true,
        "desc": "倾斜大号背景装饰字的显示/隐藏",
        "publicKey": "showBackdrop",
        "publicLabel": "背景大字",
        "description": "倾斜大号背景装饰字的显示/隐藏"
      },
      {
        "key": "showDecor",
        "label": "装饰元素",
        "type": "boolean",
        "default": true,
        "desc": "手绘火花与贴纸标签的显示/隐藏",
        "publicKey": "showDecor",
        "publicLabel": "装饰元素",
        "description": "手绘火花与贴纸标签的显示/隐藏"
      }
    ],
    "defaultProps": {
      "backgroundTheme": "primary",
      "showSupports": true,
      "supportCount": 3,
      "showBackdrop": true,
      "showDecor": true,
      "eyebrow": "Developer Tools · 开发者工具赛道",
      "kicker": "金句页",
      "label": "一句话判断",
      "statement": "研发效率，是企业最直接的 <b>AI 预算入口</b> 之一。",
      "backdrop": "DEV",
      "supports": [
        "代码补全与评审已成为团队级刚需，付费意愿明确。",
        "价值不在炫技 Demo，而在嵌入真实研发流水线。",
        "能被工程团队日常使用的工具，才有复利式留存。"
      ],
      "source": "数据口径：2024 全年 · 单笔 ≥1 亿美元 · AI CAPITAL LAB"
    }
  },
  {
    "key": "theme08_page036",
    "themeKey": "theme08",
    "pageNumber": 36,
    "layout": "THEME08-036",
    "slot": "p34",
    "label": "㉞ 数据底座 · Pipeline",
    "bgClass": "",
    "controls": [
      {
        "key": "backgroundTheme",
        "label": "背景主题",
        "type": "enum",
        "default": "primary",
        "options": [
          "primary",
          "muted"
        ],
        "desc": "主色(电光黄) 或 次色(淡紫灰) 底色",
        "publicKey": "backgroundTheme",
        "publicLabel": "背景主题",
        "description": "主色(电光黄) 或 次色(淡紫灰) 底色"
      },
      {
        "key": "stageCount",
        "label": "流程阶段",
        "type": "number",
        "default": 5,
        "min": 3,
        "max": 5,
        "step": 1,
        "desc": "数据流水线的阶段数量(3–5)",
        "publicKey": "stageCount",
        "publicLabel": "流程阶段",
        "description": "数据流水线的阶段数量(3–5)"
      },
      {
        "key": "chartType",
        "label": "图表类型",
        "type": "enum",
        "default": "area",
        "options": [
          "column",
          "area",
          "line"
        ],
        "desc": "增长趋势迷你图：柱状 / 面积 / 折线",
        "publicKey": "chartType",
        "publicLabel": "图表类型",
        "description": "增长趋势迷你图：柱状 / 面积 / 折线"
      },
      {
        "key": "showValueLabels",
        "label": "数值标签",
        "type": "boolean",
        "default": true,
        "desc": "增长趋势图数值标签的显示/隐藏",
        "publicKey": "showValueLabels",
        "publicLabel": "数值标签",
        "description": "增长趋势图数值标签的显示/隐藏"
      },
      {
        "key": "metricCount",
        "label": "指标数量",
        "type": "number",
        "default": 3,
        "min": 2,
        "max": 3,
        "step": 1,
        "desc": "主数字旁的支撑指标格数量(2–3)",
        "publicKey": "metricCount",
        "publicLabel": "指标数量",
        "description": "主数字旁的支撑指标格数量(2–3)"
      },
      {
        "key": "focusEnabled",
        "label": "重点强调",
        "type": "boolean",
        "default": true,
        "desc": "是否高亮某个流程阶段(其余淡化)",
        "publicKey": "focusEnabled",
        "publicLabel": "重点强调",
        "description": "是否高亮某个流程阶段(其余淡化)"
      },
      {
        "key": "focusIndex",
        "label": "重点对象",
        "type": "number",
        "default": 2,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "被高亮的流程阶段序号(从 0 起)",
        "publicKey": "focusIndex",
        "publicLabel": "重点对象",
        "description": "被高亮的流程阶段序号(从 0 起)"
      },
      {
        "key": "showDecor",
        "label": "装饰元素",
        "type": "boolean",
        "default": true,
        "desc": "手绘装饰与标签的显示/隐藏",
        "publicKey": "showDecor",
        "publicLabel": "装饰元素",
        "description": "手绘装饰与标签的显示/隐藏"
      }
    ],
    "defaultProps": {
      "backgroundTheme": "primary",
      "stageCount": 5,
      "chartType": "area",
      "showValueLabels": true,
      "metricCount": 3,
      "focusEnabled": true,
      "focusIndex": 2,
      "showDecor": true,
      "eyebrow": "Data Infrastructure",
      "headline": "企业 AI 底座",
      "subheadline": "数据基础设施",
      "summary": "数据基础设施承接<b>模型训练、RAG 与知识管理</b>需求。",
      "badge": "Data Infra · 企业 AI 底座",
      "stages": [
        {
          "t": "数据接入",
          "s": "Ingest"
        },
        {
          "t": "清洗治理",
          "s": "Govern"
        },
        {
          "t": "向量索引",
          "s": "Index"
        },
        {
          "t": "检索增强",
          "s": "Retrieve"
        },
        {
          "t": "应用交付",
          "s": "Serve"
        }
      ],
      "growthTitle": "企业客户增长",
      "growth": [
        {
          "label": "Q1",
          "v": 100
        },
        {
          "label": "Q2",
          "v": 118
        },
        {
          "label": "Q3",
          "v": 132
        },
        {
          "label": "Q4",
          "v": 147
        }
      ],
      "growthUnit": "指数",
      "hero": {
        "label": "赛道融资额",
        "value": "61",
        "unit": "亿美元",
        "growth": "+47"
      },
      "metrics": [
        {
          "k": "事件数",
          "v": "12",
          "unit": "笔"
        },
        {
          "k": "平均单笔",
          "v": "5.1",
          "unit": "亿"
        },
        {
          "k": "客户增长",
          "v": "+47",
          "unit": "%"
        }
      ],
      "closingLine": "没有数据底座，AI 应用很难稳定落地。"
    }
  },
  {
    "key": "theme08_page037",
    "themeKey": "theme08",
    "pageNumber": 37,
    "layout": "THEME08-037",
    "slot": "p35",
    "label": "㉟ 架构 · Architecture",
    "bgClass": "",
    "controls": [
      {
        "key": "backgroundTheme",
        "label": "背景主题",
        "type": "enum",
        "default": "muted",
        "options": [
          "primary",
          "muted"
        ],
        "desc": "主色(电光黄) 或 次色(淡紫灰) 底色",
        "publicKey": "backgroundTheme",
        "publicLabel": "背景主题",
        "description": "主色(电光黄) 或 次色(淡紫灰) 底色"
      },
      {
        "key": "mediaCount",
        "label": "图片数量",
        "type": "number",
        "default": 3,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "拼贴图片槽数量(0–4)；布局随数量自动平衡，每槽按上传图片比例自适应",
        "publicKey": "mediaCount",
        "publicLabel": "图片数量",
        "description": "拼贴图片槽数量(0–4)；布局随数量自动平衡，每槽按上传图片比例自适应"
      },
      {
        "key": "layerCount",
        "label": "架构层数",
        "type": "number",
        "default": 5,
        "min": 3,
        "max": 5,
        "step": 1,
        "desc": "架构栈的层数(3–5)",
        "publicKey": "layerCount",
        "publicLabel": "架构层数",
        "description": "架构栈的层数(3–5)"
      },
      {
        "key": "metricCount",
        "label": "指标数量",
        "type": "number",
        "default": 3,
        "min": 2,
        "max": 3,
        "step": 1,
        "desc": "主数字下方支撑指标格数量(2–3)",
        "publicKey": "metricCount",
        "publicLabel": "指标数量",
        "description": "主数字下方支撑指标格数量(2–3)"
      },
      {
        "key": "showArch",
        "label": "架构栈",
        "type": "boolean",
        "default": true,
        "desc": "右侧组件架构栈的显示/隐藏",
        "publicKey": "showArch",
        "publicLabel": "架构栈",
        "description": "右侧组件架构栈的显示/隐藏"
      },
      {
        "key": "focusEnabled",
        "label": "重点强调",
        "type": "boolean",
        "default": true,
        "desc": "是否高亮某一架构层",
        "publicKey": "focusEnabled",
        "publicLabel": "重点强调",
        "description": "是否高亮某一架构层"
      },
      {
        "key": "focusIndex",
        "label": "重点对象",
        "type": "number",
        "default": 2,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "被高亮的架构层序号(从 0 起)",
        "publicKey": "focusIndex",
        "publicLabel": "重点对象",
        "description": "被高亮的架构层序号(从 0 起)"
      },
      {
        "key": "showDecor",
        "label": "装饰元素",
        "type": "boolean",
        "default": true,
        "desc": "手绘装饰与标签的显示/隐藏",
        "publicKey": "showDecor",
        "publicLabel": "装饰元素",
        "description": "手绘装饰与标签的显示/隐藏"
      }
    ],
    "defaultProps": {
      "backgroundTheme": "muted",
      "mediaCount": 3,
      "layerCount": 5,
      "metricCount": 3,
      "showArch": true,
      "focusEnabled": true,
      "focusIndex": 2,
      "showDecor": true,
      "eyebrow": "Vector Database",
      "headline": "RAG 基础组件",
      "subheadline": "向量数据库",
      "summary": "向量数据库从概念热度进入<b>企业部署竞争</b>阶段。",
      "badge": "Vector DB · RAG 基础组件",
      "hero": {
        "label": "赛道融资额",
        "value": "18",
        "unit": "亿美元"
      },
      "layers": [
        {
          "t": "应用查询",
          "s": "Query",
          "v": "高频",
          "unit": ""
        },
        {
          "t": "嵌入编码",
          "s": "Embedding",
          "v": "多模",
          "unit": "态"
        },
        {
          "t": "向量库",
          "s": "Vector Store",
          "v": "亿级",
          "unit": "维"
        },
        {
          "t": "检索召回",
          "s": "Retrieval",
          "v": "低延",
          "unit": "迟"
        },
        {
          "t": "生成增强",
          "s": "Generation",
          "v": "可溯",
          "unit": "源"
        }
      ],
      "metrics": [
        {
          "k": "事件数",
          "v": "5",
          "unit": "笔"
        },
        {
          "k": "平均单笔",
          "v": "3.6",
          "unit": "亿"
        },
        {
          "k": "付费客户",
          "v": "620",
          "unit": "家"
        }
      ],
      "collage": {
        "0": [],
        "1": [
          {
            "l": 150,
            "t": 70,
            "box": 540,
            "r": -3,
            "ratio": 1.2,
            "sr": -4,
            "color": "var(--acl-yellow)",
            "label": "架构示意",
            "sub": "RAG"
          }
        ],
        "2": [
          {
            "l": 6,
            "t": 8,
            "box": 462,
            "r": -4,
            "ratio": 1.18,
            "sr": -4,
            "color": "var(--acl-yellow)",
            "label": "检索流程",
            "sub": "RAG"
          },
          {
            "l": 400,
            "t": 290,
            "box": 444,
            "r": 4,
            "ratio": 0.82,
            "sr": 3,
            "color": "var(--acl-blue)",
            "label": "向量库",
            "sub": "STORE"
          }
        ],
        "3": [
          {
            "l": 226,
            "t": 0,
            "box": 392,
            "r": 3,
            "ratio": 0.9,
            "sr": -4,
            "color": "var(--acl-yellow)",
            "label": "检索流程",
            "sub": "RAG"
          },
          {
            "l": 0,
            "t": 240,
            "box": 356,
            "r": -5,
            "ratio": 1.2,
            "sr": 4,
            "color": "var(--acl-blue)",
            "label": "向量库",
            "sub": "STORE"
          },
          {
            "l": 430,
            "t": 392,
            "box": 338,
            "r": 5,
            "ratio": 0.82,
            "sr": -3,
            "color": "var(--acl-pink)",
            "label": "部署看板",
            "sub": "DEPLOY"
          }
        ],
        "4": [
          {
            "l": 8,
            "t": 0,
            "box": 332,
            "r": -4,
            "ratio": 0.92,
            "sr": -4,
            "color": "var(--acl-yellow)",
            "label": "检索流程",
            "sub": "RAG"
          },
          {
            "l": 372,
            "t": 30,
            "box": 314,
            "r": 4,
            "ratio": 1.2,
            "sr": 3,
            "color": "var(--acl-blue)",
            "label": "向量库",
            "sub": "STORE"
          },
          {
            "l": 40,
            "t": 360,
            "box": 320,
            "r": 5,
            "ratio": 1.16,
            "sr": 4,
            "color": "var(--acl-pink)",
            "label": "部署看板",
            "sub": "DEPLOY"
          },
          {
            "l": 410,
            "t": 396,
            "box": 318,
            "r": -4,
            "ratio": 0.82,
            "sr": -3,
            "color": "var(--acl-paper)",
            "label": "集成生态",
            "sub": "INTEG"
          }
        ]
      },
      "closingLine": "基础组件的胜负取决于企业级可靠性。"
    }
  },
  {
    "key": "theme08_page038",
    "themeKey": "theme08",
    "pageNumber": 38,
    "layout": "THEME08-038",
    "slot": "p36",
    "label": "㊱ 供应链 · Supply",
    "bgClass": "",
    "controls": [
      {
        "key": "backgroundTheme",
        "label": "背景主题",
        "type": "enum",
        "default": "primary",
        "options": [
          "primary",
          "muted"
        ],
        "desc": "主色(电光黄) 或 次色(淡紫灰) 底色",
        "publicKey": "backgroundTheme",
        "publicLabel": "背景主题",
        "description": "主色(电光黄) 或 次色(淡紫灰) 底色"
      },
      {
        "key": "mediaCount",
        "label": "图片数量",
        "type": "number",
        "default": 2,
        "min": 0,
        "max": 3,
        "step": 1,
        "desc": "拼贴图片槽数量(0–3)；布局随数量自动平衡，每槽按上传图片比例自适应",
        "publicKey": "mediaCount",
        "publicLabel": "图片数量",
        "description": "拼贴图片槽数量(0–3)；布局随数量自动平衡，每槽按上传图片比例自适应"
      },
      {
        "key": "chainCount",
        "label": "关系节点",
        "type": "number",
        "default": 5,
        "min": 3,
        "max": 5,
        "step": 1,
        "desc": "数据关系链的节点数量(3–5)",
        "publicKey": "chainCount",
        "publicLabel": "关系节点",
        "description": "数据关系链的节点数量(3–5)"
      },
      {
        "key": "shareCount",
        "label": "占比卡数量",
        "type": "number",
        "default": 2,
        "min": 2,
        "max": 3,
        "step": 1,
        "desc": "占比环卡数量(2–3)",
        "publicKey": "shareCount",
        "publicLabel": "占比卡数量",
        "description": "占比环卡数量(2–3)"
      },
      {
        "key": "showChain",
        "label": "关系链",
        "type": "boolean",
        "default": true,
        "desc": "顶部数据关系链的显示/隐藏",
        "publicKey": "showChain",
        "publicLabel": "关系链",
        "description": "顶部数据关系链的显示/隐藏"
      },
      {
        "key": "showValueLabels",
        "label": "数值标签",
        "type": "boolean",
        "default": true,
        "desc": "占比环卡中心百分比的显示/隐藏",
        "publicKey": "showValueLabels",
        "publicLabel": "数值标签",
        "description": "占比环卡中心百分比的显示/隐藏"
      },
      {
        "key": "focusEnabled",
        "label": "重点强调",
        "type": "boolean",
        "default": true,
        "desc": "是否高亮某个关系节点(其余淡化)",
        "publicKey": "focusEnabled",
        "publicLabel": "重点强调",
        "description": "是否高亮某个关系节点(其余淡化)"
      },
      {
        "key": "focusIndex",
        "label": "重点对象",
        "type": "number",
        "default": 3,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "被高亮的关系节点序号(从 0 起)",
        "publicKey": "focusIndex",
        "publicLabel": "重点对象",
        "description": "被高亮的关系节点序号(从 0 起)"
      },
      {
        "key": "showDecor",
        "label": "装饰元素",
        "type": "boolean",
        "default": true,
        "desc": "手绘装饰与标签的显示/隐藏",
        "publicKey": "showDecor",
        "publicLabel": "装饰元素",
        "description": "手绘装饰与标签的显示/隐藏"
      }
    ],
    "defaultProps": {
      "backgroundTheme": "primary",
      "mediaCount": 2,
      "chainCount": 5,
      "shareCount": 2,
      "showChain": true,
      "showValueLabels": true,
      "focusEnabled": true,
      "focusIndex": 3,
      "showDecor": true,
      "eyebrow": "Data Labeling",
      "headline": "高质量数据供给",
      "subheadline": "数据标注与合成数据",
      "summary": "高质量训练与反馈数据，仍是模型能力提升的<b>关键瓶颈</b>。",
      "chain": [
        {
          "t": "数据采集",
          "s": "Collect"
        },
        {
          "t": "清洗治理",
          "s": "Clean"
        },
        {
          "t": "人工标注",
          "s": "Label"
        },
        {
          "t": "合成数据",
          "s": "Synthetic"
        },
        {
          "t": "反馈回流",
          "s": "Feedback"
        }
      ],
      "shares": [
        {
          "k": "合成数据",
          "en": "Synthetic Data",
          "v": 42,
          "desc": "规模化、低成本扩充训练样本。"
        },
        {
          "k": "人类反馈数据",
          "en": "Human Feedback",
          "v": 35,
          "desc": "RLHF 对齐与质量校准的核心来源。"
        },
        {
          "k": "第三方采购",
          "en": "Third-party",
          "v": 23,
          "desc": "行业语料与许可数据补充。"
        }
      ],
      "collage": {
        "0": [],
        "1": [
          {
            "l": 120,
            "t": 24,
            "box": 440,
            "r": -3,
            "ratio": 1.3,
            "sr": -4,
            "color": "var(--acl-yellow)",
            "label": "标注场景",
            "sub": "LABEL"
          }
        ],
        "2": [
          {
            "l": 6,
            "t": 0,
            "box": 380,
            "r": -4,
            "ratio": 1.22,
            "sr": -4,
            "color": "var(--acl-yellow)",
            "label": "标注场景",
            "sub": "LABEL"
          },
          {
            "l": 360,
            "t": 138,
            "box": 372,
            "r": 4,
            "ratio": 0.86,
            "sr": 3,
            "color": "var(--acl-blue)",
            "label": "合成流水",
            "sub": "SYNTH"
          }
        ],
        "3": [
          {
            "l": 178,
            "t": 0,
            "box": 332,
            "r": 3,
            "ratio": 0.94,
            "sr": -4,
            "color": "var(--acl-yellow)",
            "label": "标注场景",
            "sub": "LABEL"
          },
          {
            "l": 0,
            "t": 168,
            "box": 300,
            "r": -5,
            "ratio": 1.22,
            "sr": 4,
            "color": "var(--acl-blue)",
            "label": "合成流水",
            "sub": "SYNTH"
          },
          {
            "l": 350,
            "t": 196,
            "box": 300,
            "r": 5,
            "ratio": 0.84,
            "sr": -3,
            "color": "var(--acl-pink)",
            "label": "反馈回流",
            "sub": "RLHF"
          }
        ]
      },
      "closingLine": "数据越稀缺，数据基础设施越有价值。"
    }
  },
  {
    "key": "theme08_page039",
    "themeKey": "theme08",
    "pageNumber": 39,
    "layout": "THEME08-039",
    "slot": "p37",
    "label": "㊲ 算力网格 · Compute",
    "bgClass": "",
    "controls": [
      {
        "key": "backgroundTheme",
        "label": "背景主题",
        "type": "enum",
        "default": "primary",
        "options": [
          "primary",
          "muted"
        ],
        "desc": "主色(电光黄) 或 次色(淡紫灰) 底色",
        "publicKey": "backgroundTheme",
        "publicLabel": "背景主题",
        "description": "主色(电光黄) 或 次色(淡紫灰) 底色"
      },
      {
        "key": "chartType",
        "label": "图表类型",
        "type": "enum",
        "default": "grid",
        "options": [
          "grid",
          "bars"
        ],
        "desc": "占用呈现：算力网格 / 资源条形",
        "publicKey": "chartType",
        "publicLabel": "图表类型",
        "description": "占用呈现：算力网格 / 资源条形"
      },
      {
        "key": "segmentCount",
        "label": "资源分组",
        "type": "number",
        "default": 4,
        "min": 3,
        "max": 5,
        "step": 1,
        "desc": "资源占比分段数量(3–5)",
        "publicKey": "segmentCount",
        "publicLabel": "资源分组",
        "description": "资源占比分段数量(3–5)"
      },
      {
        "key": "showValueLabels",
        "label": "数值标签",
        "type": "boolean",
        "default": true,
        "desc": "资源占比百分比标签的显示/隐藏",
        "publicKey": "showValueLabels",
        "publicLabel": "数值标签",
        "description": "资源占比百分比标签的显示/隐藏"
      },
      {
        "key": "metricCount",
        "label": "指标数量",
        "type": "number",
        "default": 3,
        "min": 2,
        "max": 3,
        "step": 1,
        "desc": "主数字旁的支撑指标格数量(2–3)",
        "publicKey": "metricCount",
        "publicLabel": "指标数量",
        "description": "主数字旁的支撑指标格数量(2–3)"
      },
      {
        "key": "focusEnabled",
        "label": "重点强调",
        "type": "boolean",
        "default": true,
        "desc": "是否高亮某个资源分组(其余淡化)",
        "publicKey": "focusEnabled",
        "publicLabel": "重点强调",
        "description": "是否高亮某个资源分组(其余淡化)"
      },
      {
        "key": "focusIndex",
        "label": "重点对象",
        "type": "number",
        "default": 0,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "被高亮的资源分组序号(从 0 起)",
        "publicKey": "focusIndex",
        "publicLabel": "重点对象",
        "description": "被高亮的资源分组序号(从 0 起)"
      },
      {
        "key": "showDecor",
        "label": "装饰元素",
        "type": "boolean",
        "default": true,
        "desc": "手绘装饰与标签的显示/隐藏",
        "publicKey": "showDecor",
        "publicLabel": "装饰元素",
        "description": "手绘装饰与标签的显示/隐藏"
      }
    ],
    "defaultProps": {
      "backgroundTheme": "primary",
      "chartType": "grid",
      "segmentCount": 4,
      "showValueLabels": true,
      "metricCount": 3,
      "focusEnabled": true,
      "focusIndex": 0,
      "showDecor": true,
      "eyebrow": "GPU Cloud",
      "headline": "算力供给稀缺",
      "subheadline": "GPU 云与算力租赁",
      "summary": "GPU 云公司受益于<b>训练与推理双重需求</b>，供给持续偏紧。",
      "badge": "GPU Cloud · 算力租赁",
      "hero": {
        "label": "赛道融资额",
        "value": "64",
        "unit": "亿美元"
      },
      "metrics": [
        {
          "k": "事件数",
          "v": "9",
          "unit": "笔"
        },
        {
          "k": "平均单笔",
          "v": "7.1",
          "unit": "亿"
        },
        {
          "k": "资源占比",
          "v": "58",
          "unit": "%"
        }
      ],
      "utilization": 58,
      "gridCols": 12,
      "gridRows": 7,
      "segments": [
        {
          "k": "H100 / H200",
          "en": "Hopper",
          "v": 58
        },
        {
          "k": "A100 集群",
          "en": "Ampere",
          "v": 24
        },
        {
          "k": "推理加速卡",
          "en": "Inference",
          "v": 12
        },
        {
          "k": "其他 / 自研",
          "en": "Others",
          "v": 6
        }
      ],
      "closingLine": "算力是 AI 时代最直接的硬资源。"
    }
  },
  {
    "key": "theme08_page040",
    "themeKey": "theme08",
    "pageNumber": 40,
    "layout": "THEME08-040",
    "slot": "p38",
    "label": "㊳ 芯片层级 · Chip Tiers",
    "bgClass": "",
    "controls": [
      {
        "key": "backgroundTheme",
        "label": "背景主题",
        "type": "enum",
        "default": "muted",
        "options": [
          "primary",
          "muted"
        ],
        "desc": "主色(电光黄) 或 次色(淡紫灰) 底色",
        "publicKey": "backgroundTheme",
        "publicLabel": "背景主题",
        "description": "主色(电光黄) 或 次色(淡紫灰) 底色"
      },
      {
        "key": "rowCount",
        "label": "行数",
        "type": "number",
        "default": 3,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "展示的芯片层级行数(2–4)",
        "publicKey": "rowCount",
        "publicLabel": "行数",
        "description": "展示的芯片层级行数(2–4)"
      },
      {
        "key": "showBars",
        "label": "占比条",
        "type": "boolean",
        "default": true,
        "desc": "资金占比列横向比例条的显示/隐藏",
        "publicKey": "showBars",
        "publicLabel": "占比条",
        "description": "资金占比列横向比例条的显示/隐藏"
      },
      {
        "key": "showRepCol",
        "label": "方向列",
        "type": "boolean",
        "default": true,
        "desc": "「代表方向」列的显示/隐藏",
        "publicKey": "showRepCol",
        "publicLabel": "方向列",
        "description": "「代表方向」列的显示/隐藏"
      },
      {
        "key": "focusEnabled",
        "label": "重点强调",
        "type": "boolean",
        "default": true,
        "desc": "是否高亮某一行",
        "publicKey": "focusEnabled",
        "publicLabel": "重点强调",
        "description": "是否高亮某一行"
      },
      {
        "key": "focusIndex",
        "label": "重点对象",
        "type": "number",
        "default": 0,
        "min": 0,
        "max": 3,
        "step": 1,
        "desc": "被高亮的行序号(从 0 起)",
        "publicKey": "focusIndex",
        "publicLabel": "重点对象",
        "description": "被高亮的行序号(从 0 起)"
      },
      {
        "key": "showDecor",
        "label": "装饰元素",
        "type": "boolean",
        "default": true,
        "desc": "手绘装饰与标签的显示/隐藏",
        "publicKey": "showDecor",
        "publicLabel": "装饰元素",
        "description": "手绘装饰与标签的显示/隐藏"
      }
    ],
    "defaultProps": {
      "backgroundTheme": "muted",
      "rowCount": 3,
      "showBars": true,
      "showRepCol": true,
      "focusEnabled": true,
      "focusIndex": 0,
      "showDecor": true,
      "eyebrow": "AI Chips",
      "headline": "训练与推理硬件",
      "subheadline": "AI 芯片赛道",
      "summary": "AI 芯片融资集中在<b>训练加速器、推理芯片与边缘 AI</b>。",
      "kpis": [
        {
          "k": "赛道融资额",
          "v": "97",
          "unit": "亿"
        },
        {
          "k": "事件数",
          "v": "13",
          "unit": "笔"
        },
        {
          "k": "平均单笔",
          "v": "7.5",
          "unit": "亿"
        },
        {
          "k": "训练芯片占比",
          "v": "47",
          "unit": "%"
        }
      ],
      "columnLabels": [
        "芯片层级",
        "融资额",
        "资金占比",
        "代表方向"
      ],
      "valueUnit": "亿",
      "rows": [
        {
          "tier": "训练芯片",
          "en": "Training Accelerator",
          "v": 46,
          "rep": "大规模训练加速器",
          "repEn": "Accelerator"
        },
        {
          "tier": "推理芯片",
          "en": "Inference Chip",
          "v": 32,
          "rep": "低延迟推理 / 能效",
          "repEn": "Inference"
        },
        {
          "tier": "边缘 AI",
          "en": "Edge AI",
          "v": 19,
          "rep": "端侧 / 嵌入式算力",
          "repEn": "Edge"
        },
        {
          "tier": "芯片互联",
          "en": "Interconnect",
          "v": 11,
          "rep": "高速互联 / 封装",
          "repEn": "Interconnect"
        }
      ],
      "closingLine": "硬件方向看长期确定性。"
    }
  },
  {
    "key": "theme08_page041",
    "themeKey": "theme08",
    "pageNumber": 41,
    "layout": "THEME08-041",
    "slot": "p39",
    "label": "㊴ 具身智能 · Embodied",
    "bgClass": "",
    "controls": [
      {
        "key": "backgroundTheme",
        "label": "背景主题",
        "type": "enum",
        "default": "muted",
        "options": [
          "primary",
          "muted"
        ],
        "desc": "主色(电光黄) 或 次色(淡紫灰) 底色",
        "publicKey": "backgroundTheme",
        "publicLabel": "背景主题",
        "description": "主色(电光黄) 或 次色(淡紫灰) 底色"
      },
      {
        "key": "mediaCount",
        "label": "图片数量",
        "type": "number",
        "default": 2,
        "min": 0,
        "max": 3,
        "step": 1,
        "desc": "拼贴图片槽数量(0–3)；布局随数量自动平衡，每槽按上传图片比例自适应",
        "publicKey": "mediaCount",
        "publicLabel": "图片数量",
        "description": "拼贴图片槽数量(0–3)；布局随数量自动平衡，每槽按上传图片比例自适应"
      },
      {
        "key": "splitStyle",
        "label": "分布样式",
        "type": "enum",
        "default": "stack",
        "options": [
          "stack",
          "bars"
        ],
        "desc": "应用分布呈现：堆叠条 / 分组柱",
        "publicKey": "splitStyle",
        "publicLabel": "分布样式",
        "description": "应用分布呈现：堆叠条 / 分组柱"
      },
      {
        "key": "segmentCount",
        "label": "应用方向",
        "type": "number",
        "default": 3,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "应用分布的方向数量(2–4)",
        "publicKey": "segmentCount",
        "publicLabel": "应用方向",
        "description": "应用分布的方向数量(2–4)"
      },
      {
        "key": "showValueLabels",
        "label": "数值标签",
        "type": "boolean",
        "default": true,
        "desc": "应用分布数值标签的显示/隐藏",
        "publicKey": "showValueLabels",
        "publicLabel": "数值标签",
        "description": "应用分布数值标签的显示/隐藏"
      },
      {
        "key": "metricCount",
        "label": "指标数量",
        "type": "number",
        "default": 2,
        "min": 2,
        "max": 3,
        "step": 1,
        "desc": "主卡内支撑指标格数量(2–3)",
        "publicKey": "metricCount",
        "publicLabel": "指标数量",
        "description": "主卡内支撑指标格数量(2–3)"
      },
      {
        "key": "focusEnabled",
        "label": "重点强调",
        "type": "boolean",
        "default": true,
        "desc": "是否高亮某个应用方向(其余淡化)",
        "publicKey": "focusEnabled",
        "publicLabel": "重点强调",
        "description": "是否高亮某个应用方向(其余淡化)"
      },
      {
        "key": "focusIndex",
        "label": "重点对象",
        "type": "number",
        "default": 0,
        "min": 0,
        "max": 3,
        "step": 1,
        "desc": "被高亮的应用方向序号(从 0 起)",
        "publicKey": "focusIndex",
        "publicLabel": "重点对象",
        "description": "被高亮的应用方向序号(从 0 起)"
      },
      {
        "key": "showDecor",
        "label": "装饰元素",
        "type": "boolean",
        "default": true,
        "desc": "手绘装饰与标签的显示/隐藏",
        "publicKey": "showDecor",
        "publicLabel": "装饰元素",
        "description": "手绘装饰与标签的显示/隐藏"
      }
    ],
    "defaultProps": {
      "backgroundTheme": "muted",
      "mediaCount": 2,
      "splitStyle": "stack",
      "segmentCount": 3,
      "showValueLabels": true,
      "metricCount": 2,
      "focusEnabled": true,
      "focusIndex": 0,
      "showDecor": true,
      "eyebrow": "Embodied AI",
      "headline": "从软件走向物理世界",
      "subheadline": "机器人与具身智能",
      "summary": "具身智能是 AI 从软件能力延伸到<b>物理场景</b>的重要方向。",
      "badge": "Embodied · 具身智能",
      "hero": {
        "label": "赛道融资额",
        "value": "41",
        "unit": "亿美元"
      },
      "metrics": [
        {
          "k": "事件数",
          "v": "7",
          "unit": "笔"
        },
        {
          "k": "平均单笔",
          "v": "5.9",
          "unit": "亿"
        },
        {
          "k": "人形占比",
          "v": "51",
          "unit": "%"
        }
      ],
      "splitTitle": "应用分布",
      "valueUnit": "亿",
      "segments": [
        {
          "k": "人形机器人",
          "en": "Humanoid",
          "v": 21
        },
        {
          "k": "工业自动化",
          "en": "Industrial",
          "v": 11
        },
        {
          "k": "仓储机器人",
          "en": "Warehouse",
          "v": 9
        },
        {
          "k": "服务机器人",
          "en": "Service",
          "v": 5
        }
      ],
      "collage": {
        "0": [],
        "1": [
          {
            "l": 240,
            "t": 16,
            "box": 470,
            "r": -3,
            "ratio": 1.4,
            "sr": -4,
            "color": "var(--acl-yellow)",
            "label": "机器人场景",
            "sub": "ROBOT"
          }
        ],
        "2": [
          {
            "l": 20,
            "t": 0,
            "box": 432,
            "r": -4,
            "ratio": 1.3,
            "sr": -4,
            "color": "var(--acl-yellow)",
            "label": "人形场景",
            "sub": "HUMANOID"
          },
          {
            "l": 470,
            "t": 130,
            "box": 408,
            "r": 4,
            "ratio": 0.86,
            "sr": 3,
            "color": "var(--acl-blue)",
            "label": "工业场景",
            "sub": "INDUSTRY"
          }
        ],
        "3": [
          {
            "l": 250,
            "t": 0,
            "box": 348,
            "r": 3,
            "ratio": 0.96,
            "sr": -4,
            "color": "var(--acl-yellow)",
            "label": "人形场景",
            "sub": "HUMANOID"
          },
          {
            "l": 0,
            "t": 150,
            "box": 322,
            "r": -5,
            "ratio": 1.3,
            "sr": 4,
            "color": "var(--acl-blue)",
            "label": "工业场景",
            "sub": "INDUSTRY"
          },
          {
            "l": 562,
            "t": 178,
            "box": 330,
            "r": 5,
            "ratio": 0.86,
            "sr": -3,
            "color": "var(--acl-pink)",
            "label": "仓储场景",
            "sub": "WAREHOUSE"
          }
        ]
      },
      "closingLine": "长周期赛道需要看供应链和量产能力。"
    }
  },
  {
    "key": "theme08_page042",
    "themeKey": "theme08",
    "pageNumber": 42,
    "layout": "THEME08-042",
    "slot": "p41",
    "label": "㊶ 安全防线 · Safety",
    "bgClass": "",
    "controls": [
      {
        "key": "backgroundTheme",
        "label": "背景主题",
        "type": "enum",
        "default": "primary",
        "options": [
          "primary",
          "muted"
        ],
        "desc": "主色(电光黄) 或 次色(淡紫灰) 底色",
        "publicKey": "backgroundTheme",
        "publicLabel": "背景主题",
        "description": "主色(电光黄) 或 次色(淡紫灰) 底色"
      },
      {
        "key": "chartType",
        "label": "图表类型",
        "type": "enum",
        "default": "pie",
        "options": [
          "pie",
          "gate"
        ],
        "desc": "安全模块占比：饱图(pie) / 关卡漏斗(gate)",
        "publicKey": "chartType",
        "publicLabel": "图表类型",
        "description": "安全模块占比：饱图(pie) / 关卡漏斗(gate)"
      },
      {
        "key": "segmentCount",
        "label": "模块数量",
        "type": "number",
        "default": 4,
        "min": 3,
        "max": 5,
        "step": 1,
        "desc": "安全模块 / 防线层数(3–5)",
        "publicKey": "segmentCount",
        "publicLabel": "模块数量",
        "description": "安全模块 / 防线层数(3–5)"
      },
      {
        "key": "showValueLabels",
        "label": "数值标签",
        "type": "boolean",
        "default": true,
        "desc": "各模块数值的显示/隐藏",
        "publicKey": "showValueLabels",
        "publicLabel": "数值标签",
        "description": "各模块数值的显示/隐藏"
      },
      {
        "key": "metricCount",
        "label": "指标数量",
        "type": "number",
        "default": 3,
        "min": 2,
        "max": 3,
        "step": 1,
        "desc": "面板内支撑指标格数量(2–3)",
        "publicKey": "metricCount",
        "publicLabel": "指标数量",
        "description": "面板内支撑指标格数量(2–3)"
      },
      {
        "key": "focusEnabled",
        "label": "重点强调",
        "type": "boolean",
        "default": true,
        "desc": "是否高亮某个安全模块(其余淡化)",
        "publicKey": "focusEnabled",
        "publicLabel": "重点强调",
        "description": "是否高亮某个安全模块(其余淡化)"
      },
      {
        "key": "focusIndex",
        "label": "重点对象",
        "type": "number",
        "default": 0,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "被高亮的安全模块序号(从 0 起)",
        "publicKey": "focusIndex",
        "publicLabel": "重点对象",
        "description": "被高亮的安全模块序号(从 0 起)"
      },
      {
        "key": "showDecor",
        "label": "装饰元素",
        "type": "boolean",
        "default": true,
        "desc": "手绘装饰与标签的显示/隐藏",
        "publicKey": "showDecor",
        "publicLabel": "装饰元素",
        "description": "手绘装饰与标签的显示/隐藏"
      }
    ],
    "defaultProps": {
      "backgroundTheme": "primary",
      "chartType": "pie",
      "segmentCount": 4,
      "showValueLabels": true,
      "metricCount": 3,
      "focusEnabled": true,
      "focusIndex": 0,
      "showDecor": true,
      "eyebrow": "AI Safety",
      "headline": "评测、红队与合规",
      "subheadline": "AI 安全赛道",
      "summary": "AI 安全覆盖<b>模型评测、红队测试、内容安全与合规监测</b>。",
      "badge": "AI Safety · 安全防线",
      "hero": {
        "label": "赛道融资额",
        "value": "16",
        "unit": "亿"
      },
      "metrics": [
        {
          "k": "事件数",
          "v": "8",
          "unit": "笔"
        },
        {
          "k": "平均单笔",
          "v": "2.0",
          "unit": "亿"
        },
        {
          "k": "评测占比",
          "v": "38",
          "unit": "%"
        }
      ],
      "segments": [
        {
          "k": "模型评测",
          "en": "Evaluation",
          "v": 6
        },
        {
          "k": "内容安全",
          "en": "Content Safety",
          "v": 5
        },
        {
          "k": "合规监测",
          "en": "Compliance",
          "v": 5
        },
        {
          "k": "红队测试",
          "en": "Red Teaming",
          "v": 4
        },
        {
          "k": "审计追溯",
          "en": "Audit Trail",
          "v": 3
        }
      ],
      "valueUnit": "亿",
      "closingLine": "安全能力会成为企业采购门槛。"
    }
  },
  {
    "key": "theme08_page043",
    "themeKey": "theme08",
    "pageNumber": 43,
    "layout": "THEME08-043",
    "slot": "p42",
    "label": "㊷ 内容生成 · Generative",
    "bgClass": "",
    "controls": [
      {
        "key": "backgroundTheme",
        "label": "背景主题",
        "type": "enum",
        "default": "muted",
        "options": [
          "primary",
          "muted"
        ],
        "desc": "主色(电光黄) 或 次色(淡紫灰) 底色",
        "publicKey": "backgroundTheme",
        "publicLabel": "背景主题",
        "description": "主色(电光黄) 或 次色(淡紫灰) 底色"
      },
      {
        "key": "mediaCount",
        "label": "图片数量",
        "type": "number",
        "default": 3,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "胶片图片槽数量(0–4)；布局随数量自动平衡，每槽按上传图片比例自适应",
        "publicKey": "mediaCount",
        "publicLabel": "图片数量",
        "description": "胶片图片槽数量(0–4)；布局随数量自动平衡，每槽按上传图片比例自适应"
      },
      {
        "key": "chartType",
        "label": "图表类型",
        "type": "enum",
        "default": "bars",
        "options": [
          "bars",
          "donut"
        ],
        "desc": "资金分布呈现：条形 / 环形",
        "publicKey": "chartType",
        "publicLabel": "图表类型",
        "description": "资金分布呈现：条形 / 环形"
      },
      {
        "key": "segmentCount",
        "label": "类型数量",
        "type": "number",
        "default": 3,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "内容类型分段数量(2–4)",
        "publicKey": "segmentCount",
        "publicLabel": "类型数量",
        "description": "内容类型分段数量(2–4)"
      },
      {
        "key": "showValueLabels",
        "label": "数值标签",
        "type": "boolean",
        "default": true,
        "desc": "资金分布数值标签的显示/隐藏",
        "publicKey": "showValueLabels",
        "publicLabel": "数值标签",
        "description": "资金分布数值标签的显示/隐藏"
      },
      {
        "key": "metricCount",
        "label": "指标数量",
        "type": "number",
        "default": 2,
        "min": 2,
        "max": 3,
        "step": 1,
        "desc": "主数字旁支撑指标格数量(2–3)",
        "publicKey": "metricCount",
        "publicLabel": "指标数量",
        "description": "主数字旁支撑指标格数量(2–3)"
      },
      {
        "key": "focusEnabled",
        "label": "重点强调",
        "type": "boolean",
        "default": true,
        "desc": "是否高亮某个内容类型(其余淡化)",
        "publicKey": "focusEnabled",
        "publicLabel": "重点强调",
        "description": "是否高亮某个内容类型(其余淡化)"
      },
      {
        "key": "focusIndex",
        "label": "重点对象",
        "type": "number",
        "default": 0,
        "min": 0,
        "max": 3,
        "step": 1,
        "desc": "被高亮的内容类型序号(从 0 起)",
        "publicKey": "focusIndex",
        "publicLabel": "重点对象",
        "description": "被高亮的内容类型序号(从 0 起)"
      },
      {
        "key": "showDecor",
        "label": "装饰元素",
        "type": "boolean",
        "default": true,
        "desc": "手绘装饰与标签的显示/隐藏",
        "publicKey": "showDecor",
        "publicLabel": "装饰元素",
        "description": "手绘装饰与标签的显示/隐藏"
      }
    ],
    "defaultProps": {
      "backgroundTheme": "muted",
      "mediaCount": 3,
      "chartType": "bars",
      "segmentCount": 3,
      "showValueLabels": true,
      "metricCount": 2,
      "focusEnabled": true,
      "focusIndex": 0,
      "showDecor": true,
      "eyebrow": "Generative Content",
      "headline": "图像、视频与创意",
      "subheadline": "内容生成赛道",
      "summary": "内容生成继续保持融资热度，但也面临<b>版权与留存</b>问题。",
      "hero": {
        "label": "赛道融资额",
        "value": "31",
        "unit": "亿"
      },
      "metrics": [
        {
          "k": "事件数",
          "v": "11",
          "unit": "笔"
        },
        {
          "k": "平均单笔",
          "v": "2.8",
          "unit": "亿"
        },
        {
          "k": "视频占比",
          "v": "45",
          "unit": "%"
        }
      ],
      "splitTitle": "资金分布",
      "valueUnit": "亿",
      "segments": [
        {
          "k": "视频生成",
          "en": "Video",
          "v": 14
        },
        {
          "k": "广告创意",
          "en": "Ad Creative",
          "v": 8
        },
        {
          "k": "音乐音频",
          "en": "Audio",
          "v": 4
        },
        {
          "k": "图像生成",
          "en": "Image",
          "v": 5
        }
      ],
      "frames": [
        {
          "name": "视频片段",
          "tag": "视频",
          "sub": "VIDEO",
          "color": "var(--acl-pink)",
          "r": -2,
          "sr": -3,
          "ratio": 1.4
        },
        {
          "name": "广告创意",
          "tag": "创意",
          "sub": "AD",
          "color": "var(--acl-blue)",
          "r": 2,
          "sr": 3,
          "ratio": 0.9
        },
        {
          "name": "音乐音频",
          "tag": "音频",
          "sub": "AUDIO",
          "color": "var(--acl-yellow)",
          "r": -2,
          "sr": -3,
          "ratio": 1
        },
        {
          "name": "图像生成",
          "tag": "图像",
          "sub": "IMAGE",
          "color": "var(--acl-paper)",
          "r": 2,
          "sr": 3,
          "ratio": 1.2
        }
      ],
      "closingLine": "流量热度不等于商业壁垒。"
    }
  },
  {
    "key": "theme08_page044",
    "themeKey": "theme08",
    "pageNumber": 44,
    "layout": "THEME08-044",
    "slot": "p43",
    "label": "㊸ 学习路径 · Education",
    "bgClass": "",
    "controls": [
      {
        "key": "backgroundTheme",
        "label": "背景主题",
        "type": "enum",
        "default": "muted",
        "options": [
          "primary",
          "muted"
        ],
        "desc": "主色(电光黄) 或 次色(淡紫灰) 底色",
        "publicKey": "backgroundTheme",
        "publicLabel": "背景主题",
        "description": "主色(电光黄) 或 次色(淡紫灰) 底色"
      },
      {
        "key": "cardCount",
        "label": "场景数量",
        "type": "number",
        "default": 3,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "学习路径场景卡数量(0–4)；每卡含一个图片槽，布局随数量自动平衡，每槽按上传图片比例自适应",
        "publicKey": "cardCount",
        "publicLabel": "场景数量",
        "description": "学习路径场景卡数量(0–4)；每卡含一个图片槽，布局随数量自动平衡，每槽按上传图片比例自适应"
      },
      {
        "key": "showPath",
        "label": "路径连线",
        "type": "boolean",
        "default": true,
        "desc": "场景之间手绘路径箭头的显示/隐藏",
        "publicKey": "showPath",
        "publicLabel": "路径连线",
        "description": "场景之间手绘路径箭头的显示/隐藏"
      },
      {
        "key": "showValue",
        "label": "数值",
        "type": "boolean",
        "default": true,
        "desc": "每张场景卡的大号数值的显示/隐藏",
        "publicKey": "showValueLabels",
        "publicLabel": "数值",
        "description": "每张场景卡的大号数值的显示/隐藏"
      },
      {
        "key": "metricCount",
        "label": "指标数量",
        "type": "number",
        "default": 3,
        "min": 2,
        "max": 3,
        "step": 1,
        "desc": "主卡内支撑指标格数量(2–3)",
        "publicKey": "metricCount",
        "publicLabel": "指标数量",
        "description": "主卡内支撑指标格数量(2–3)"
      },
      {
        "key": "focusEnabled",
        "label": "重点强调",
        "type": "boolean",
        "default": true,
        "desc": "是否突出某张场景卡",
        "publicKey": "focusEnabled",
        "publicLabel": "重点强调",
        "description": "是否突出某张场景卡"
      },
      {
        "key": "focusIndex",
        "label": "重点对象",
        "type": "number",
        "default": 0,
        "min": 0,
        "max": 3,
        "step": 1,
        "desc": "被突出的场景卡序号(从 0 起)",
        "publicKey": "focusIndex",
        "publicLabel": "重点对象",
        "description": "被突出的场景卡序号(从 0 起)"
      },
      {
        "key": "showDecor",
        "label": "装饰元素",
        "type": "boolean",
        "default": true,
        "desc": "手绘装饰与标签的显示/隐藏",
        "publicKey": "showDecor",
        "publicLabel": "装饰元素",
        "description": "手绘装饰与标签的显示/隐藏"
      }
    ],
    "defaultProps": {
      "backgroundTheme": "muted",
      "cardCount": 3,
      "showPath": true,
      "showValue": true,
      "metricCount": 3,
      "focusEnabled": true,
      "focusIndex": 0,
      "showDecor": true,
      "eyebrow": "Education AI",
      "headline": "个性化学习与教师工具",
      "subheadline": "教育 AI 赛道",
      "summary": "教育 AI 从通用答疑转向<b>个性化辅导与教师工作台</b>。",
      "badge": "Education · 教育 AI",
      "hero": {
        "label": "赛道融资额",
        "value": "14",
        "unit": "亿"
      },
      "metrics": [
        {
          "k": "事件数",
          "v": "5",
          "unit": "笔"
        },
        {
          "k": "平均单笔",
          "v": "2.8",
          "unit": "亿"
        },
        {
          "k": "K12 占比",
          "v": "43",
          "unit": "%"
        }
      ],
      "scenes": [
        {
          "name": "K12 辅导",
          "en": "K12 Tutoring",
          "tag": "辅导",
          "value": "6",
          "ratio": 0.95
        },
        {
          "name": "企业培训",
          "en": "Corporate Training",
          "tag": "培训",
          "value": "5",
          "ratio": 1.2
        },
        {
          "name": "教师工具",
          "en": "Teacher Tools",
          "tag": "工具",
          "value": "3",
          "ratio": 0.9
        },
        {
          "name": "备考提分",
          "en": "Test Prep",
          "tag": "备考",
          "value": "2",
          "ratio": 1.05
        }
      ],
      "valueUnit": "亿",
      "closingLine": "教育 AI 需要用结果证明价值。"
    }
  },
  {
    "key": "theme08_page045",
    "themeKey": "theme08",
    "pageNumber": 45,
    "layout": "THEME08-045",
    "slot": "p44",
    "label": "㊹ 降本场景 · Support",
    "bgClass": "",
    "controls": [
      {
        "key": "backgroundTheme",
        "label": "背景主题",
        "type": "enum",
        "default": "muted",
        "options": [
          "primary",
          "muted"
        ],
        "desc": "主色(电光黄) 或 次色(淡紫灰) 底色",
        "publicKey": "backgroundTheme",
        "publicLabel": "背景主题",
        "description": "主色(电光黄) 或 次色(淡紫灰) 底色"
      },
      {
        "key": "showFunnel",
        "label": "流程漏斗",
        "type": "boolean",
        "default": true,
        "desc": "顶部工单流程漏斗带的显示/隐藏",
        "publicKey": "showFunnel",
        "publicLabel": "流程漏斗",
        "description": "顶部工单流程漏斗带的显示/隐藏"
      },
      {
        "key": "funnelStageCount",
        "label": "流程阶段",
        "type": "number",
        "default": 4,
        "min": 3,
        "max": 5,
        "step": 1,
        "desc": "工单流程漏斗的阶段数量(3–5)",
        "publicKey": "funnelStageCount",
        "publicLabel": "流程阶段",
        "description": "工单流程漏斗的阶段数量(3–5)"
      },
      {
        "key": "rowCount",
        "label": "行数",
        "type": "number",
        "default": 4,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "展示的降本场景行数(2–4)",
        "publicKey": "rowCount",
        "publicLabel": "行数",
        "description": "展示的降本场景行数(2–4)"
      },
      {
        "key": "showBars",
        "label": "占比条",
        "type": "boolean",
        "default": true,
        "desc": "采用占比列横向比例条的显示/隐藏",
        "publicKey": "showBars",
        "publicLabel": "占比条",
        "description": "采用占比列横向比例条的显示/隐藏"
      },
      {
        "key": "showRating",
        "label": "判断列",
        "type": "boolean",
        "default": true,
        "desc": "「ROI 判断」评级圆点列的显示/隐藏",
        "publicKey": "showStatusRating",
        "publicLabel": "判断列",
        "description": "「ROI 判断」评级圆点列的显示/隐藏"
      },
      {
        "key": "focusEnabled",
        "label": "重点强调",
        "type": "boolean",
        "default": true,
        "desc": "是否高亮某一行",
        "publicKey": "focusEnabled",
        "publicLabel": "重点强调",
        "description": "是否高亮某一行"
      },
      {
        "key": "focusIndex",
        "label": "重点对象",
        "type": "number",
        "default": 0,
        "min": 0,
        "max": 3,
        "step": 1,
        "desc": "被高亮的行序号(从 0 起)",
        "publicKey": "focusIndex",
        "publicLabel": "重点对象",
        "description": "被高亮的行序号(从 0 起)"
      },
      {
        "key": "showDecor",
        "label": "装饰元素",
        "type": "boolean",
        "default": true,
        "desc": "手绘装饰与标签的显示/隐藏",
        "publicKey": "showDecor",
        "publicLabel": "装饰元素",
        "description": "手绘装饰与标签的显示/隐藏"
      }
    ],
    "defaultProps": {
      "backgroundTheme": "muted",
      "showFunnel": true,
      "funnelStageCount": 4,
      "rowCount": 4,
      "showBars": true,
      "showRating": true,
      "focusEnabled": true,
      "focusIndex": 0,
      "showDecor": true,
      "eyebrow": "Customer Support AI",
      "headline": "可量化降本场景",
      "subheadline": "客服 AI 赛道",
      "summary": "客服 AI 是最容易<b>量化 ROI</b> 的垂直应用之一。",
      "kpis": [
        {
          "k": "赛道融资额",
          "v": "27",
          "unit": "亿"
        },
        {
          "k": "事件数",
          "v": "9",
          "unit": "笔"
        },
        {
          "k": "平均替代率",
          "v": "32",
          "unit": "%"
        },
        {
          "k": "工单时长下降",
          "v": "41",
          "unit": "%"
        }
      ],
      "funnelTitle": "工单流程",
      "funnel": [
        {
          "k": "工单接入",
          "en": "Intake",
          "pct": 100
        },
        {
          "k": "智能分类",
          "en": "Triage",
          "pct": 78
        },
        {
          "k": "自动解决",
          "en": "Auto-Resolve",
          "pct": 54
        },
        {
          "k": "人工升级",
          "en": "Escalation",
          "pct": 18
        },
        {
          "k": "满意回收",
          "en": "CSAT",
          "pct": 11
        }
      ],
      "columnLabels": [
        "降本场景",
        "关键指标",
        "采用占比",
        "ROI 判断"
      ],
      "rows": [
        {
          "scn": "自动应答",
          "en": "Auto Reply",
          "fig": "32",
          "unit": "%",
          "figNote": "工单替代率",
          "share": 38,
          "rate": 3,
          "rateLabel": "高"
        },
        {
          "scn": "智能分流",
          "en": "Smart Routing",
          "fig": "41",
          "unit": "%",
          "figNote": "工单时长下降",
          "share": 26,
          "rate": 3,
          "rateLabel": "高"
        },
        {
          "scn": "知识库自助",
          "en": "Self-Service",
          "fig": "28",
          "unit": "%",
          "figNote": "自助解决率",
          "share": 21,
          "rate": 2,
          "rateLabel": "中"
        },
        {
          "scn": "坐席辅助",
          "en": "Agent Assist",
          "fig": "19",
          "unit": "%",
          "figNote": "坐席提效",
          "share": 15,
          "rate": 2,
          "rateLabel": "中"
        }
      ],
      "closingLine": "能量化 ROI 的场景更容易获得预算。"
    }
  },
  {
    "key": "theme08_page046",
    "themeKey": "theme08",
    "pageNumber": 46,
    "layout": "THEME08-046",
    "slot": "p46",
    "label": "㊻ 流程嵌入 · Low Code",
    "bgClass": "",
    "controls": [
      {
        "key": "backgroundTheme",
        "label": "背景主题",
        "type": "enum",
        "default": "muted",
        "options": [
          "primary",
          "muted"
        ],
        "desc": "主色(电光黄) 或 次色(淡紫灰) 底色",
        "publicKey": "backgroundTheme",
        "publicLabel": "背景主题",
        "description": "主色(电光黄) 或 次色(淡紫灰) 底色"
      },
      {
        "key": "layerCount",
        "label": "层级数量",
        "type": "number",
        "default": 4,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "流程编排的层级带数量(2–4)",
        "publicKey": "layerCount",
        "publicLabel": "层级数量",
        "description": "流程编排的层级带数量(2–4)"
      },
      {
        "key": "mediaCount",
        "label": "图片数量",
        "type": "number",
        "default": 2,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "带图片缩略图的层级数(0–4，超出层数自动按层数封顶)；每槽按上传图片比例自适应，无图层显示序号块",
        "publicKey": "mediaCount",
        "publicLabel": "图片数量",
        "description": "带图片缩略图的层级数(0–4，超出层数自动按层数封顶)；每槽按上传图片比例自适应，无图层显示序号块"
      },
      {
        "key": "showIndent",
        "label": "层级缩进",
        "type": "boolean",
        "default": true,
        "desc": "逐层递进缩进(嵌入深度感) 显隐",
        "publicKey": "showIndent",
        "publicLabel": "层级缩进",
        "description": "逐层递进缩进(嵌入深度感) 显隐"
      },
      {
        "key": "metricCount",
        "label": "指标数量",
        "type": "number",
        "default": 2,
        "min": 2,
        "max": 3,
        "step": 1,
        "desc": "右栏支撑指标格数量(2–3)",
        "publicKey": "metricCount",
        "publicLabel": "指标数量",
        "description": "右栏支撑指标格数量(2–3)"
      },
      {
        "key": "focusEnabled",
        "label": "重点强调",
        "type": "boolean",
        "default": true,
        "desc": "是否突出某一层级(其余淡化)",
        "publicKey": "focusEnabled",
        "publicLabel": "重点强调",
        "description": "是否突出某一层级(其余淡化)"
      },
      {
        "key": "focusIndex",
        "label": "重点对象",
        "type": "number",
        "default": 1,
        "min": 0,
        "max": 3,
        "step": 1,
        "desc": "被突出的层级序号(从 0 起)",
        "publicKey": "focusIndex",
        "publicLabel": "重点对象",
        "description": "被突出的层级序号(从 0 起)"
      },
      {
        "key": "showDecor",
        "label": "装饰元素",
        "type": "boolean",
        "default": true,
        "desc": "手绘装饰与标签的显示/隐藏",
        "publicKey": "showDecor",
        "publicLabel": "装饰元素",
        "description": "手绘装饰与标签的显示/隐藏"
      }
    ],
    "defaultProps": {
      "backgroundTheme": "muted",
      "layerCount": 4,
      "mediaCount": 2,
      "showIndent": true,
      "metricCount": 2,
      "focusEnabled": true,
      "focusIndex": 1,
      "showDecor": true,
      "eyebrow": "Low Code AI",
      "headline": "企业流程嵌入",
      "subheadline": "低代码 AI 平台",
      "summary": "低代码平台把模型能力<b>嵌入企业内部流程</b>。",
      "badge": "Low Code · 流程编排",
      "hero": {
        "label": "赛道融资额",
        "value": "19",
        "unit": "亿"
      },
      "retention": {
        "label": "净收入留存",
        "en": "Net Revenue Retention",
        "value": "118",
        "unit": "%"
      },
      "metrics": [
        {
          "k": "事件数",
          "v": "6",
          "unit": "笔"
        },
        {
          "k": "企业客户中位数",
          "v": "430",
          "unit": "家"
        },
        {
          "k": "平均单笔",
          "v": "3.2",
          "unit": "亿"
        }
      ],
      "strataTitle": "流程编排",
      "layers": [
        {
          "k": "数据接入",
          "en": "Data Connect",
          "desc": "统一接入企业数据源与权限",
          "ratio": 1.2
        },
        {
          "k": "流程编排",
          "en": "Orchestration",
          "desc": "可视化拖拽编排模型与规则",
          "ratio": 0.95
        },
        {
          "k": "模型嵌入",
          "en": "Model Embed",
          "desc": "把模型能力嵌入业务节点",
          "ratio": 1.1
        },
        {
          "k": "治理监测",
          "en": "Governance",
          "desc": "审计、留存与合规监测",
          "ratio": 1
        }
      ],
      "closingLine": "能被业务团队使用的平台更容易扩散。"
    }
  },
  {
    "key": "theme08_page047",
    "themeKey": "theme08",
    "pageNumber": 47,
    "layout": "THEME08-047",
    "slot": "p47",
    "label": "㊼ 社区变现 · Open Source",
    "bgClass": "",
    "controls": [
      {
        "key": "backgroundTheme",
        "label": "背景主题",
        "type": "enum",
        "default": "muted",
        "options": [
          "primary",
          "muted"
        ],
        "desc": "主色(电光黄) 或 次色(淡紫灰) 底色",
        "publicKey": "backgroundTheme",
        "publicLabel": "背景主题",
        "description": "主色(电光黄) 或 次色(淡紫灰) 底色"
      },
      {
        "key": "mediaCount",
        "label": "图片数量",
        "type": "number",
        "default": 3,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "散落的社区成员图片卡数量(0–4)；布局随数量自动平衡，每槽按上传图片比例自适应",
        "publicKey": "mediaCount",
        "publicLabel": "图片数量",
        "description": "散落的社区成员图片卡数量(0–4)；布局随数量自动平衡，每槽按上传图片比例自适应"
      },
      {
        "key": "showChain",
        "label": "指向连线",
        "type": "boolean",
        "default": true,
        "desc": "由图片群指向数据的手绘箭头 显隐",
        "publicKey": "showChain",
        "publicLabel": "指向连线",
        "description": "由图片群指向数据的手绘箭头 显隐"
      },
      {
        "key": "segmentCount",
        "label": "环节数量",
        "type": "number",
        "default": 3,
        "min": 2,
        "max": 3,
        "step": 1,
        "desc": "变现路径的环节数量(2–3)",
        "publicKey": "segmentCount",
        "publicLabel": "环节数量",
        "description": "变现路径的环节数量(2–3)"
      },
      {
        "key": "showValueLabels",
        "label": "数值标签",
        "type": "boolean",
        "default": true,
        "desc": "变现路径环节上的数值 显隐",
        "publicKey": "showValueLabels",
        "publicLabel": "数值标签",
        "description": "变现路径环节上的数值 显隐"
      },
      {
        "key": "metricCount",
        "label": "指标数量",
        "type": "number",
        "default": 2,
        "min": 2,
        "max": 3,
        "step": 1,
        "desc": "左侧支撑指标格数量(2–3)",
        "publicKey": "metricCount",
        "publicLabel": "指标数量",
        "description": "左侧支撑指标格数量(2–3)"
      },
      {
        "key": "focusEnabled",
        "label": "重点强调",
        "type": "boolean",
        "default": true,
        "desc": "是否高亮某个变现环节(其余淡化)",
        "publicKey": "focusEnabled",
        "publicLabel": "重点强调",
        "description": "是否高亮某个变现环节(其余淡化)"
      },
      {
        "key": "focusIndex",
        "label": "重点对象",
        "type": "number",
        "default": 2,
        "min": 0,
        "max": 2,
        "step": 1,
        "desc": "被高亮的变现环节序号(从 0 起)",
        "publicKey": "focusIndex",
        "publicLabel": "重点对象",
        "description": "被高亮的变现环节序号(从 0 起)"
      },
      {
        "key": "showDecor",
        "label": "装饰元素",
        "type": "boolean",
        "default": true,
        "desc": "手绘装饰与标签的显示/隐藏",
        "publicKey": "showDecor",
        "publicLabel": "装饰元素",
        "description": "手绘装饰与标签的显示/隐藏"
      }
    ],
    "defaultProps": {
      "backgroundTheme": "muted",
      "mediaCount": 3,
      "showChain": true,
      "segmentCount": 3,
      "showValueLabels": true,
      "metricCount": 2,
      "focusEnabled": true,
      "focusIndex": 2,
      "showDecor": true,
      "eyebrow": "Open Source Models",
      "headline": "社区影响力变现",
      "subheadline": "开源模型公司",
      "summary": "开源公司靠<b>社区影响力、托管服务与企业支持</b>变现。",
      "badge": "Open Source · 变现路径",
      "bigStat": {
        "label": "社区下载量",
        "value": "2.8",
        "unit": "亿次",
        "note": "通过社区影响力沉淀开发者，再向托管服务与企业支持转化。"
      },
      "chainTitle": "变现路径",
      "stages": [
        {
          "k": "社区影响力",
          "en": "Community",
          "v": "2.8",
          "unit": "亿"
        },
        {
          "k": "托管服务",
          "en": "Hosting",
          "v": "40",
          "unit": "%"
        },
        {
          "k": "企业支持",
          "en": "Enterprise",
          "v": "37",
          "unit": "%"
        }
      ],
      "metrics": [
        {
          "k": "赛道融资额",
          "v": "28",
          "unit": "亿"
        },
        {
          "k": "事件数",
          "v": "7",
          "unit": "笔"
        },
        {
          "k": "企业服务占比",
          "v": "37",
          "unit": "%"
        }
      ],
      "cluster": {
        "0": [],
        "1": [
          {
            "l": 240,
            "t": 120,
            "box": 440,
            "r": -3,
            "ratio": 1.2,
            "sr": 4,
            "label": "社区成员",
            "sub": "DEV"
          }
        ],
        "2": [
          {
            "l": 60,
            "t": 40,
            "box": 360,
            "r": -4,
            "ratio": 1,
            "sr": -4,
            "label": "开发者",
            "sub": "DEV"
          },
          {
            "l": 430,
            "t": 320,
            "box": 360,
            "r": 4,
            "ratio": 1.1,
            "sr": 4,
            "label": "企业用户",
            "sub": "ENT"
          }
        ],
        "3": [
          {
            "l": 40,
            "t": 16,
            "box": 320,
            "r": -5,
            "ratio": 0.95,
            "sr": -4,
            "label": "开发者",
            "sub": "DEV"
          },
          {
            "l": 470,
            "t": 60,
            "box": 300,
            "r": 5,
            "ratio": 1.05,
            "sr": 4,
            "label": "贡献者",
            "sub": "OSS"
          },
          {
            "l": 220,
            "t": 400,
            "box": 320,
            "r": -3,
            "ratio": 1.25,
            "sr": 3,
            "label": "企业用户",
            "sub": "ENT"
          }
        ],
        "4": [
          {
            "l": 30,
            "t": 6,
            "box": 280,
            "r": -5,
            "ratio": 0.92,
            "sr": -4,
            "label": "开发者",
            "sub": "DEV"
          },
          {
            "l": 510,
            "t": 24,
            "box": 270,
            "r": 5,
            "ratio": 1,
            "sr": 4,
            "label": "贡献者",
            "sub": "OSS"
          },
          {
            "l": 70,
            "t": 380,
            "box": 280,
            "r": 4,
            "ratio": 1.15,
            "sr": 3,
            "label": "企业用户",
            "sub": "ENT"
          },
          {
            "l": 530,
            "t": 410,
            "box": 270,
            "r": -4,
            "ratio": 0.95,
            "sr": -3,
            "label": "合作伙伴",
            "sub": "PARTNER"
          }
        ]
      },
      "closingLine": "开源是入口，不是完整商业模式。"
    }
  },
  {
    "key": "theme08_page048",
    "themeKey": "theme08",
    "pageNumber": 48,
    "layout": "THEME08-048",
    "slot": "p48",
    "label": "㊽ 安全对齐 · Alignment",
    "bgClass": "",
    "controls": [
      {
        "key": "backgroundTheme",
        "label": "背景主题",
        "type": "enum",
        "default": "muted",
        "options": [
          "primary",
          "muted"
        ],
        "desc": "主色(电光黄) 或 次色(淡紫灰) 底色",
        "publicKey": "backgroundTheme",
        "publicLabel": "背景主题",
        "description": "主色(电光黄) 或 次色(淡紫灰) 底色"
      },
      {
        "key": "mediaCount",
        "label": "图片数量",
        "type": "number",
        "default": 2,
        "min": 0,
        "max": 3,
        "step": 1,
        "desc": "特写图片数量(0–3，1 主图 + 至多 2 张嵌套图)；每张按上传图片比例自适应",
        "publicKey": "mediaCount",
        "publicLabel": "图片数量",
        "description": "特写图片数量(0–3，1 主图 + 至多 2 张嵌套图)；每张按上传图片比例自适应"
      },
      {
        "key": "posterStamp",
        "label": "海报印章",
        "type": "boolean",
        "default": true,
        "desc": "海报上「长期支撑」印章贴纸 显隐",
        "publicKey": "posterStamp",
        "publicLabel": "海报印章",
        "description": "海报上「长期支撑」印章贴纸 显隐"
      },
      {
        "key": "rowCount",
        "label": "行数",
        "type": "number",
        "default": 3,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "安全能力台账行数(2–4)",
        "publicKey": "rowCount",
        "publicLabel": "行数",
        "description": "安全能力台账行数(2–4)"
      },
      {
        "key": "showRating",
        "label": "强度列",
        "type": "boolean",
        "default": true,
        "desc": "能力强度评级圆点列 显隐",
        "publicKey": "showStatusRating",
        "publicLabel": "强度列",
        "description": "能力强度评级圆点列 显隐"
      },
      {
        "key": "metricCount",
        "label": "指标数量",
        "type": "number",
        "default": 2,
        "min": 2,
        "max": 3,
        "step": 1,
        "desc": "台账底部支撑指标格数量(2–3)",
        "publicKey": "metricCount",
        "publicLabel": "指标数量",
        "description": "台账底部支撑指标格数量(2–3)"
      },
      {
        "key": "focusEnabled",
        "label": "重点强调",
        "type": "boolean",
        "default": true,
        "desc": "是否高亮某一行",
        "publicKey": "focusEnabled",
        "publicLabel": "重点强调",
        "description": "是否高亮某一行"
      },
      {
        "key": "focusIndex",
        "label": "重点对象",
        "type": "number",
        "default": 0,
        "min": 0,
        "max": 3,
        "step": 1,
        "desc": "被高亮的行序号(从 0 起)",
        "publicKey": "focusIndex",
        "publicLabel": "重点对象",
        "description": "被高亮的行序号(从 0 起)"
      },
      {
        "key": "showDecor",
        "label": "装饰元素",
        "type": "boolean",
        "default": true,
        "desc": "手绘装饰与标签的显示/隐藏",
        "publicKey": "showDecor",
        "publicLabel": "装饰元素",
        "description": "手绘装饰与标签的显示/隐藏"
      }
    ],
    "defaultProps": {
      "backgroundTheme": "muted",
      "mediaCount": 2,
      "posterStamp": true,
      "rowCount": 3,
      "showRating": true,
      "metricCount": 2,
      "focusEnabled": true,
      "focusIndex": 0,
      "showDecor": true,
      "eyebrow": "Model Alignment",
      "headline": "安全与对齐工具",
      "subheadline": "模型安全公司",
      "summary": "模型安全与对齐公司吸引<b>长期资本</b>关注。",
      "badge": "Alignment · 安全台账",
      "posterWord": "SAFE",
      "hero": {
        "label": "赛道融资额",
        "value": "21",
        "unit": "亿"
      },
      "ledgerTitle": "安全能力",
      "valueUnit": "亿",
      "rows": [
        {
          "k": "评测平台",
          "en": "Evaluation",
          "v": 8,
          "rate": 3
        },
        {
          "k": "对齐工具",
          "en": "Alignment",
          "v": 7,
          "rate": 3
        },
        {
          "k": "红队服务",
          "en": "Red Teaming",
          "v": 6,
          "rate": 2
        },
        {
          "k": "审计追溯",
          "en": "Audit Trail",
          "v": 3,
          "rate": 2
        }
      ],
      "metrics": [
        {
          "k": "事件数",
          "v": "5",
          "unit": "笔"
        },
        {
          "k": "平均单笔",
          "v": "4.2",
          "unit": "亿"
        },
        {
          "k": "评测占比",
          "v": "38",
          "unit": "%"
        }
      ],
      "feature": {
        "0": [],
        "1": [
          {
            "box": 600,
            "r": -2,
            "ratio": 1.1
          }
        ],
        "2": [
          {
            "box": 560,
            "r": -2,
            "ratio": 1.05
          },
          {
            "l": 600,
            "t": 430,
            "box": 240,
            "r": 5,
            "ratio": 0.85,
            "sr": 4,
            "color": "var(--acl-blue)",
            "label": "对齐"
          }
        ],
        "3": [
          {
            "box": 520,
            "r": -2,
            "ratio": 1
          },
          {
            "l": 30,
            "t": 30,
            "box": 220,
            "r": -5,
            "ratio": 0.82,
            "sr": -4,
            "color": "var(--acl-blue)",
            "label": "对齐"
          },
          {
            "l": 600,
            "t": 450,
            "box": 220,
            "r": 5,
            "ratio": 1,
            "sr": 4,
            "color": "var(--acl-pink)",
            "label": "红队"
          }
        ]
      },
      "closingLine": "可信 AI 会成为企业级 AI 的基础设施。"
    }
  },
  {
    "key": "theme08_page049",
    "themeKey": "theme08",
    "pageNumber": 49,
    "layout": "THEME08-049",
    "slot": "p49",
    "label": "㊾ 章节 · Chapter",
    "bgClass": "",
    "controls": [
      {
        "key": "backgroundTheme",
        "label": "背景主题",
        "type": "enum",
        "default": "ink",
        "options": [
          "primary",
          "muted",
          "ink"
        ],
        "desc": "主色(电光黄) / 次色(淡紫灰) / 深色(高反差章节页)",
        "publicKey": "backgroundTheme",
        "publicLabel": "背景主题",
        "description": "主色(电光黄) / 次色(淡紫灰) / 深色(高反差章节页)"
      },
      {
        "key": "showIndex",
        "label": "大章节号",
        "type": "boolean",
        "default": true,
        "desc": "右侧巨型描边章节编号的显示/隐藏",
        "publicKey": "showIndex",
        "publicLabel": "大章节号",
        "description": "右侧巨型描边章节编号的显示/隐藏"
      },
      {
        "key": "keywordCount",
        "label": "关键词数量",
        "type": "number",
        "default": 6,
        "min": 0,
        "max": 6,
        "step": 1,
        "desc": "本章关键词胶片格的数量(0–6)",
        "publicKey": "keywordCount",
        "publicLabel": "关键词数量",
        "description": "本章关键词胶片格的数量(0–6)"
      },
      {
        "key": "focusEnabled",
        "label": "重点强调",
        "type": "boolean",
        "default": true,
        "desc": "是否高亮某一个关键词格",
        "publicKey": "focusEnabled",
        "publicLabel": "重点强调",
        "description": "是否高亮某一个关键词格"
      },
      {
        "key": "focusIndex",
        "label": "重点对象",
        "type": "number",
        "default": 0,
        "min": 0,
        "step": 1,
        "desc": "被高亮的关键词序号(从 0 起)",
        "publicKey": "focusIndex",
        "publicLabel": "重点对象",
        "description": "被高亮的关键词序号(从 0 起)"
      },
      {
        "key": "showDecor",
        "label": "装饰元素",
        "type": "boolean",
        "default": true,
        "desc": "手绘装饰与贴纸标签的显示/隐藏",
        "publicKey": "showDecor",
        "publicLabel": "装饰元素",
        "description": "手绘装饰与贴纸标签的显示/隐藏"
      }
    ],
    "defaultProps": {
      "backgroundTheme": "ink",
      "showIndex": true,
      "keywordCount": 6,
      "focusEnabled": true,
      "focusIndex": 0,
      "showDecor": true,
      "eyebrow": "Chapter 04",
      "indexLabel": "04",
      "headlineLines": [
        "资本与",
        "地区结构"
      ],
      "subheadline": "轮次、投资人和地理集群",
      "kicker": "钱从哪来，又流向哪里",
      "keywords": [
        "后期轮",
        "战略投资",
        "云资源",
        "湾区",
        "纽约",
        "西雅图"
      ],
      "closingLine": "下一组页面进入更细的拆解。"
    }
  },
  {
    "key": "theme08_page050",
    "themeKey": "theme08",
    "pageNumber": 50,
    "layout": "THEME08-050",
    "slot": "p50",
    "label": "㊿ 早期轮 · Early Stage",
    "bgClass": "",
    "controls": [
      {
        "key": "backgroundTheme",
        "label": "背景主题",
        "type": "enum",
        "default": "muted",
        "options": [
          "primary",
          "muted"
        ],
        "desc": "主色(电光黄) 或 次色(淡紫灰) 底色",
        "publicKey": "backgroundTheme",
        "publicLabel": "背景主题",
        "description": "主色(电光黄) 或 次色(淡紫灰) 底色"
      },
      {
        "key": "rowCount",
        "label": "行数",
        "type": "number",
        "default": 3,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "展示的阶段行数(2–4)",
        "publicKey": "rowCount",
        "publicLabel": "行数",
        "description": "展示的阶段行数(2–4)"
      },
      {
        "key": "showCountDots",
        "label": "数量点阵",
        "type": "boolean",
        "default": true,
        "desc": "事件数的气泡点阵显示/隐藏",
        "publicKey": "showCountDots",
        "publicLabel": "数量点阵",
        "description": "事件数的气泡点阵显示/隐藏"
      },
      {
        "key": "showBars",
        "label": "数据条",
        "type": "boolean",
        "default": true,
        "desc": "数值列的横向比例条显示/隐藏",
        "publicKey": "showValueLabels",
        "publicLabel": "数据条",
        "description": "数值列的横向比例条显示/隐藏"
      },
      {
        "key": "showRating",
        "label": "信号评级",
        "type": "boolean",
        "default": true,
        "desc": "信号强度的菱形评级显示/隐藏",
        "publicKey": "showStatusRating",
        "publicLabel": "信号评级",
        "description": "信号强度的菱形评级显示/隐藏"
      },
      {
        "key": "focusEnabled",
        "label": "重点强调",
        "type": "boolean",
        "default": true,
        "desc": "是否高亮某一行",
        "publicKey": "focusEnabled",
        "publicLabel": "重点强调",
        "description": "是否高亮某一行"
      },
      {
        "key": "focusIndex",
        "label": "重点对象",
        "type": "number",
        "default": 1,
        "min": 0,
        "step": 1,
        "desc": "被高亮的行序号(从 0 起)",
        "publicKey": "focusIndex",
        "publicLabel": "重点对象",
        "description": "被高亮的行序号(从 0 起)"
      },
      {
        "key": "showStat",
        "label": "底部统计",
        "type": "boolean",
        "default": true,
        "desc": "右下角统计徽标的显示/隐藏",
        "publicKey": "showStat",
        "publicLabel": "底部统计",
        "description": "右下角统计徽标的显示/隐藏"
      },
      {
        "key": "showDecor",
        "label": "装饰元素",
        "type": "boolean",
        "default": true,
        "desc": "手绘装饰与标签的显示/隐藏",
        "publicKey": "showDecor",
        "publicLabel": "装饰元素",
        "description": "手绘装饰与标签的显示/隐藏"
      }
    ],
    "defaultProps": {
      "backgroundTheme": "muted",
      "rowCount": 3,
      "showCountDots": true,
      "showBars": true,
      "showRating": true,
      "focusEnabled": true,
      "focusIndex": 1,
      "showStat": true,
      "showDecor": true,
      "eyebrow": "Early Stage Signal",
      "headline": "新主题萌芽",
      "subheadline": "早期轮信号",
      "summary": "Seed 与 A 轮金额虽小，却<b>藏着下一轮主题</b>的方向。",
      "columnLabels": [
        "轮次",
        "事件数",
        "平均金额",
        "代表主题",
        "信号强度"
      ],
      "amountUnit": "亿美元",
      "rows": [
        {
          "round": "种子轮 Seed",
          "tag": "Seed",
          "count": 8,
          "amount": 1.2,
          "themes": [
            "Agent",
            "安全"
          ],
          "signal": 1,
          "note": "主题萌芽"
        },
        {
          "round": "A 轮",
          "tag": "Series A",
          "count": 12,
          "amount": 1.8,
          "themes": [
            "具身智能",
            "行业模型"
          ],
          "signal": 2,
          "note": "快速形成"
        },
        {
          "round": "A+ / 扩展",
          "tag": "Series A+",
          "count": 6,
          "amount": 1.4,
          "themes": [
            "企业搜索"
          ],
          "signal": 2,
          "note": "初步验证"
        },
        {
          "round": "天使 / Pre-Seed",
          "tag": "Pre-Seed",
          "count": 5,
          "amount": 0.6,
          "themes": [
            "工具链"
          ],
          "signal": 1,
          "note": "极早期"
        }
      ],
      "stat": {
        "value": "20.6%",
        "label": "早期轮占全年事件数"
      },
      "closingLine": "小金额交易往往藏着下一轮主题。"
    }
  },
  {
    "key": "theme08_page051",
    "themeKey": "theme08",
    "pageNumber": 51,
    "layout": "THEME08-051",
    "slot": "p52",
    "label": "(52) 资本来源 · Investor Mix",
    "bgClass": "",
    "controls": [
      {
        "key": "backgroundTheme",
        "label": "背景主题",
        "type": "enum",
        "default": "primary",
        "options": [
          "primary",
          "muted"
        ],
        "desc": "主色(电光黄) 或 次色(淡紫灰) 底色",
        "publicKey": "backgroundTheme",
        "publicLabel": "背景主题",
        "description": "主色(电光黄) 或 次色(淡紫灰) 底色"
      },
      {
        "key": "chartType",
        "label": "图表类型",
        "type": "enum",
        "default": "donut",
        "options": [
          "donut",
          "bars"
        ],
        "desc": "占比模块的呈现：环形 / 条形",
        "publicKey": "chartType",
        "publicLabel": "图表类型",
        "description": "占比模块的呈现：环形 / 条形"
      },
      {
        "key": "segmentCount",
        "label": "分段数量",
        "type": "number",
        "default": 4,
        "min": 3,
        "max": 4,
        "step": 1,
        "desc": "分类类型分段的数量(3–4)",
        "publicKey": "categoryCount",
        "publicLabel": "分段数量",
        "description": "分类类型分段的数量(3–4)"
      },
      {
        "key": "focusEnabled",
        "label": "重点强调",
        "type": "boolean",
        "default": true,
        "desc": "是否高亮某一个分段",
        "publicKey": "focusEnabled",
        "publicLabel": "重点强调",
        "description": "是否高亮某一个分段"
      },
      {
        "key": "focusIndex",
        "label": "重点对象",
        "type": "number",
        "default": 1,
        "min": 0,
        "step": 1,
        "desc": "被高亮的分段序号(从 0 起)",
        "publicKey": "focusIndex",
        "publicLabel": "重点对象",
        "description": "被高亮的分段序号(从 0 起)"
      },
      {
        "key": "showValueLabels",
        "label": "数值标签",
        "type": "boolean",
        "default": true,
        "desc": "各分段百分比标签的显示/隐藏",
        "publicKey": "showValueLabels",
        "publicLabel": "数值标签",
        "description": "各分段百分比标签的显示/隐藏"
      },
      {
        "key": "showTimeline",
        "label": "演进时间轴",
        "type": "boolean",
        "default": true,
        "desc": "右侧来源演进轴的显示/隐藏",
        "publicKey": "showTimeline",
        "publicLabel": "演进时间轴",
        "description": "右侧来源演进轴的显示/隐藏"
      },
      {
        "key": "stageCount",
        "label": "阶段数量",
        "type": "number",
        "default": 3,
        "min": 2,
        "max": 3,
        "step": 1,
        "desc": "演进时间轴的阶段数量(2–3)",
        "publicKey": "stageCount",
        "publicLabel": "阶段数量",
        "description": "演进时间轴的阶段数量(2–3)"
      },
      {
        "key": "showDecor",
        "label": "装饰元素",
        "type": "boolean",
        "default": true,
        "desc": "手绘装饰与标签的显示/隐藏",
        "publicKey": "showDecor",
        "publicLabel": "装饰元素",
        "description": "手绘装饰与标签的显示/隐藏"
      }
    ],
    "defaultProps": {
      "backgroundTheme": "primary",
      "chartType": "donut",
      "segmentCount": 4,
      "focusEnabled": true,
      "focusIndex": 1,
      "showValueLabels": true,
      "showTimeline": true,
      "stageCount": 3,
      "showDecor": true,
      "eyebrow": "Investor Mix",
      "headline": "资本来源结构",
      "subheadline": "投资人类型分布",
      "summary": "AI 融资已从纯 VC 交易，转向<b>产业资本混合</b>交易。",
      "shareTitle": "投资人类型占比",
      "segments": [
        {
          "label": "传统 VC",
          "pct": 42
        },
        {
          "label": "企业战略",
          "pct": 27
        },
        {
          "label": "成长基金",
          "pct": 18
        },
        {
          "label": "云厂商相关",
          "pct": 13
        }
      ],
      "timelineTitle": "资本来源的演进",
      "stages": [
        {
          "phase": "Phase 01 · 早期",
          "title": "纯 VC 主导",
          "note": "财务投资人主导，关注估值与回报倍数。"
        },
        {
          "phase": "Phase 02 · 当下",
          "title": "产业资本入场",
          "note": "企业战略与成长基金加入，绑定业务与资源。"
        },
        {
          "phase": "Phase 03 · 趋势",
          "title": "云厂商深度绑定",
          "note": "算力与渠道成为出资筹码，资本即资源。"
        }
      ],
      "closingLine": "钱的来源本身，也是产业结构信号。"
    }
  },
  {
    "key": "theme08_page052",
    "themeKey": "theme08",
    "pageNumber": 52,
    "layout": "THEME08-052",
    "slot": "p53",
    "label": "(53) 资源绑定 · Resource Map",
    "bgClass": "",
    "controls": [
      {
        "key": "backgroundTheme",
        "label": "背景主题",
        "type": "enum",
        "default": "muted",
        "options": [
          "primary",
          "muted"
        ],
        "desc": "主色(电光黄) 或 次色(淡紫灰) 底色",
        "publicKey": "backgroundTheme",
        "publicLabel": "背景主题",
        "description": "主色(电光黄) 或 次色(淡紫灰) 底色"
      },
      {
        "key": "mediaCount",
        "label": "图片数量",
        "type": "number",
        "default": 2,
        "min": 0,
        "max": 3,
        "step": 1,
        "desc": "拼贴照片槽数量；布局随数量自动平衡，每个槽按上传图片比例自适应",
        "publicKey": "mediaCount",
        "publicLabel": "图片数量",
        "description": "拼贴照片槽数量；布局随数量自动平衡，每个槽按上传图片比例自适应"
      },
      {
        "key": "cardCount",
        "label": "卡片数量",
        "type": "number",
        "default": 4,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "资源绑定卡的数量(2–4)",
        "publicKey": "cardCount",
        "publicLabel": "卡片数量",
        "description": "资源绑定卡的数量(2–4)"
      },
      {
        "key": "focusEnabled",
        "label": "重点强调",
        "type": "boolean",
        "default": true,
        "desc": "是否高亮某一张资源卡",
        "publicKey": "focusEnabled",
        "publicLabel": "重点强调",
        "description": "是否高亮某一张资源卡"
      },
      {
        "key": "focusIndex",
        "label": "重点对象",
        "type": "number",
        "default": 0,
        "min": 0,
        "step": 1,
        "desc": "被高亮的资源卡序号(从 0 起)",
        "publicKey": "focusIndex",
        "publicLabel": "重点对象",
        "description": "被高亮的资源卡序号(从 0 起)"
      },
      {
        "key": "showValueLabels",
        "label": "数值标签",
        "type": "boolean",
        "default": true,
        "desc": "各资源卡的数量数值 显隐",
        "publicKey": "showValueLabels",
        "publicLabel": "数值标签",
        "description": "各资源卡的数量数值 显隐"
      },
      {
        "key": "showDecor",
        "label": "装饰元素",
        "type": "boolean",
        "default": true,
        "desc": "手绘装饰与标签的显示/隐藏",
        "publicKey": "showDecor",
        "publicLabel": "装饰元素",
        "description": "手绘装饰与标签的显示/隐藏"
      }
    ],
    "defaultProps": {
      "backgroundTheme": "muted",
      "mediaCount": 2,
      "cardCount": 4,
      "focusEnabled": true,
      "focusIndex": 0,
      "showValueLabels": true,
      "showDecor": true,
      "eyebrow": "Strategic Investors",
      "headline": "钱以外的资源",
      "subheadline": "战略投资者角色",
      "summary": "战略投资者带来渠道、云资源、芯片供应和客户入口——<b>钱只是其中一部分</b>。",
      "cardsTitle": "被绑定的关键资源",
      "cards": [
        {
          "label": "云资源授信",
          "value": "118",
          "unit": "亿美元",
          "note": "GPU / 算力额度换取股权与优先权",
          "w": 100
        },
        {
          "label": "联合销售",
          "value": "36",
          "unit": "起",
          "note": "产业方渠道直达企业客户",
          "w": 64
        },
        {
          "label": "芯片供应承诺",
          "value": "22",
          "unit": "起",
          "note": "锁定先进制程与交付优先级",
          "w": 46
        },
        {
          "label": "数据合作",
          "value": "17",
          "unit": "起",
          "note": "行业数据回流强化模型壁垒",
          "w": 34
        }
      ],
      "collage": {
        "0": [],
        "1": [
          {
            "l": 120,
            "t": 60,
            "box": 560,
            "r": -3,
            "ratio": 0.95,
            "accent": "var(--acl-paper)",
            "ph": "资源现场",
            "st": {
              "label": "RES.01",
              "sub": "资源",
              "color": "var(--acl-yellow)",
              "subColor": "var(--acl-pink)",
              "rotate": -4
            }
          }
        ],
        "2": [
          {
            "l": 30,
            "t": 24,
            "box": 420,
            "r": -4,
            "ratio": 0.86,
            "accent": "var(--acl-paper)",
            "ph": "资源现场",
            "st": {
              "label": "RES.01",
              "sub": "资源",
              "color": "var(--acl-yellow)",
              "subColor": "var(--acl-pink)",
              "rotate": -4
            }
          },
          {
            "l": 360,
            "t": 340,
            "box": 360,
            "r": 4,
            "ratio": 1.18,
            "accent": "var(--acl-paper)",
            "ph": "资源现场",
            "st": {
              "label": "RES.02",
              "color": "var(--acl-blue)",
              "rotate": 3
            }
          }
        ],
        "3": [
          {
            "l": 40,
            "t": 0,
            "box": 360,
            "r": 3,
            "ratio": 0.9,
            "accent": "var(--acl-paper)",
            "ph": "图片",
            "st": {
              "label": "RES.01",
              "sub": "资源",
              "color": "var(--acl-yellow)",
              "subColor": "var(--acl-pink)",
              "rotate": -4
            }
          },
          {
            "l": 10,
            "t": 360,
            "box": 300,
            "r": -5,
            "ratio": 1.2,
            "accent": "var(--acl-paper)",
            "ph": "图片",
            "st": {
              "label": "RES.02",
              "color": "var(--acl-blue)",
              "rotate": 4
            }
          },
          {
            "l": 360,
            "t": 270,
            "box": 340,
            "r": 5,
            "ratio": 0.84,
            "accent": "var(--acl-paper)",
            "ph": "图片",
            "st": {
              "label": "RES.03",
              "color": "var(--acl-pink)",
              "rotate": -3
            }
          }
        ]
      },
      "closingLine": "AI 公司融资，是在锁定未来资源。"
    }
  },
  {
    "key": "theme08_page053",
    "themeKey": "theme08",
    "pageNumber": 53,
    "layout": "THEME08-053",
    "slot": "p54",
    "label": "(54) 算力闭环 · Closed Loop",
    "bgClass": "",
    "controls": [
      {
        "key": "backgroundTheme",
        "label": "背景主题",
        "type": "enum",
        "default": "primary",
        "options": [
          "primary",
          "muted"
        ],
        "desc": "主色(电光黄) 或 次色(淡紫灰) 底色",
        "publicKey": "backgroundTheme",
        "publicLabel": "背景主题",
        "description": "主色(电光黄) 或 次色(淡紫灰) 底色"
      },
      {
        "key": "chartType",
        "label": "图表类型",
        "type": "enum",
        "default": "donut",
        "options": [
          "donut",
          "bars"
        ],
        "desc": "占比模块的呈现：环形 / 条形",
        "publicKey": "chartType",
        "publicLabel": "图表类型",
        "description": "占比模块的呈现：环形 / 条形"
      },
      {
        "key": "segmentCount",
        "label": "分段数量",
        "type": "number",
        "default": 4,
        "min": 3,
        "max": 4,
        "step": 1,
        "desc": "占比分段(厂商)的数量(3–4)",
        "publicKey": "segmentCount",
        "publicLabel": "分段数量",
        "description": "占比分段(厂商)的数量(3–4)"
      },
      {
        "key": "stageCount",
        "label": "环节数量",
        "type": "number",
        "default": 4,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "闭环上的节点数量(2–4)",
        "publicKey": "stageCount",
        "publicLabel": "环节数量",
        "description": "闭环上的节点数量(2–4)"
      },
      {
        "key": "focusEnabled",
        "label": "重点强调",
        "type": "boolean",
        "default": true,
        "desc": "是否高亮某一个占比分段",
        "publicKey": "focusEnabled",
        "publicLabel": "重点强调",
        "description": "是否高亮某一个占比分段"
      },
      {
        "key": "focusIndex",
        "label": "重点对象",
        "type": "number",
        "default": 2,
        "min": 0,
        "step": 1,
        "desc": "被高亮的分段序号(从 0 起)",
        "publicKey": "focusIndex",
        "publicLabel": "重点对象",
        "description": "被高亮的分段序号(从 0 起)"
      },
      {
        "key": "showValueLabels",
        "label": "数值标签",
        "type": "boolean",
        "default": true,
        "desc": "各分段数值标签的显示/隐藏",
        "publicKey": "showValueLabels",
        "publicLabel": "数值标签",
        "description": "各分段数值标签的显示/隐藏"
      },
      {
        "key": "showDecor",
        "label": "装饰元素",
        "type": "boolean",
        "default": true,
        "desc": "手绘装饰与标签的显示/隐藏",
        "publicKey": "showDecor",
        "publicLabel": "装饰元素",
        "description": "手绘装饰与标签的显示/隐藏"
      }
    ],
    "defaultProps": {
      "backgroundTheme": "primary",
      "chartType": "donut",
      "segmentCount": 4,
      "stageCount": 4,
      "focusEnabled": true,
      "focusIndex": 2,
      "showValueLabels": true,
      "showDecor": true,
      "eyebrow": "Cloud Alliances",
      "headline": "投资与算力消费闭环",
      "subheadline": "云厂商联盟",
      "summary": "云厂商投资 AI 公司，再通过算力消费<b>把价值收回来</b>。",
      "loopTitle": "资本—算力闭环",
      "hubLabel": "闭环",
      "hubSub": "Closed Loop",
      "stages": [
        {
          "label": "云厂商出资",
          "note": "入股 / 授信模型公司"
        },
        {
          "label": "资金转算力",
          "note": "融资变成 GPU 订单"
        },
        {
          "label": "算力消费",
          "note": "回购云厂商算力时长"
        },
        {
          "label": "价值回收",
          "note": "收入回流，再投资"
        }
      ],
      "shareTitle": "云厂商相关融资",
      "segments": [
        {
          "label": "AWS 相关",
          "val": 74
        },
        {
          "label": "Google Cloud",
          "val": 69
        },
        {
          "label": "Azure 相关",
          "val": 88
        },
        {
          "label": "Oracle Cloud",
          "val": 21
        }
      ],
      "closingLine": "云资源，正在成为融资交易的一部分。"
    }
  },
  {
    "key": "theme08_page054",
    "themeKey": "theme08",
    "pageNumber": 54,
    "layout": "THEME08-054",
    "slot": "p55",
    "label": "(55) GPU 生态 · Ecosystem",
    "bgClass": "",
    "controls": [
      {
        "key": "backgroundTheme",
        "label": "背景主题",
        "type": "enum",
        "default": "primary",
        "options": [
          "primary",
          "muted"
        ],
        "desc": "主色(电光黄) 或 次色(淡紫灰) 底色",
        "publicKey": "backgroundTheme",
        "publicLabel": "背景主题",
        "description": "主色(电光黄) 或 次色(淡紫灰) 底色"
      },
      {
        "key": "segmentCount",
        "label": "节点数量",
        "type": "number",
        "default": 4,
        "min": 3,
        "max": 4,
        "step": 1,
        "desc": "生态环上的节点数量(3–4)",
        "publicKey": "segmentCount",
        "publicLabel": "节点数量",
        "description": "生态环上的节点数量(3–4)"
      },
      {
        "key": "mediaCount",
        "label": "图片数量",
        "type": "number",
        "default": 2,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "前 N 个节点改为承载图片(0–4，超过节点数自动封顶)；每张按上传图片比例自适应",
        "publicKey": "mediaCount",
        "publicLabel": "图片数量",
        "description": "前 N 个节点改为承载图片(0–4，超过节点数自动封顶)；每张按上传图片比例自适应"
      },
      {
        "key": "focusEnabled",
        "label": "重点强调",
        "type": "boolean",
        "default": true,
        "desc": "是否高亮某一个生态节点",
        "publicKey": "focusEnabled",
        "publicLabel": "重点强调",
        "description": "是否高亮某一个生态节点"
      },
      {
        "key": "focusIndex",
        "label": "重点对象",
        "type": "number",
        "default": 0,
        "min": 0,
        "step": 1,
        "desc": "被高亮的节点序号(从 0 起)",
        "publicKey": "focusIndex",
        "publicLabel": "重点对象",
        "description": "被高亮的节点序号(从 0 起)"
      },
      {
        "key": "showValueLabels",
        "label": "数值标签",
        "type": "boolean",
        "default": true,
        "desc": "各节点数值 显隐",
        "publicKey": "showValueLabels",
        "publicLabel": "数值标签",
        "description": "各节点数值 显隐"
      },
      {
        "key": "showDecor",
        "label": "装饰元素",
        "type": "boolean",
        "default": true,
        "desc": "手绘装饰与标签的显示/隐藏",
        "publicKey": "showDecor",
        "publicLabel": "装饰元素",
        "description": "手绘装饰与标签的显示/隐藏"
      }
    ],
    "defaultProps": {
      "backgroundTheme": "primary",
      "segmentCount": 4,
      "mediaCount": 2,
      "focusEnabled": true,
      "focusIndex": 0,
      "showValueLabels": true,
      "showDecor": true,
      "eyebrow": "NVIDIA Ecosystem",
      "headline": "GPU 资源链条",
      "subheadline": "NVIDIA 生态",
      "summary": "NVIDIA 生态内的融资，围绕 GPU、网络、集群与推理<b>层层展开</b>。",
      "hubLabel": "GPU",
      "hubValue": "92 亿",
      "hubSub": "Ecosystem core · 生态核心",
      "segments": [
        {
          "label": "GPU 云",
          "value": "64"
        },
        {
          "label": "集群管理",
          "value": "12"
        },
        {
          "label": "推理优化",
          "value": "9"
        },
        {
          "label": "芯片互联",
          "value": "7"
        }
      ],
      "closingLine": "算力供给能力，正在变成融资能力。"
    }
  },
  {
    "key": "theme08_page055",
    "themeKey": "theme08",
    "pageNumber": 55,
    "layout": "THEME08-055",
    "slot": "p56",
    "label": "(56) 大数字 · Geo Anchor",
    "bgClass": "",
    "controls": [
      {
        "key": "backgroundTheme",
        "label": "背景主题",
        "type": "enum",
        "default": "primary",
        "options": [
          "primary",
          "muted",
          "ink"
        ],
        "desc": "主色(电光黄) / 次色(淡紫灰) / 深色(高反差大数字)",
        "publicKey": "backgroundTheme",
        "publicLabel": "背景主题",
        "description": "主色(电光黄) / 次色(淡紫灰) / 深色(高反差大数字)"
      },
      {
        "key": "factorCount",
        "label": "要素数量",
        "type": "number",
        "default": 4,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "左侧优势要素行数量(2–4)",
        "publicKey": "factorCount",
        "publicLabel": "要素数量",
        "description": "左侧优势要素行数量(2–4)"
      },
      {
        "key": "metricCount",
        "label": "指标数量",
        "type": "number",
        "default": 3,
        "min": 2,
        "max": 3,
        "step": 1,
        "desc": "大数字下方支撑指标格数量(2–3)",
        "publicKey": "metricCount",
        "publicLabel": "指标数量",
        "description": "大数字下方支撑指标格数量(2–3)"
      },
      {
        "key": "focusEnabled",
        "label": "重点强调",
        "type": "boolean",
        "default": true,
        "desc": "是否高亮某一条优势要素",
        "publicKey": "focusEnabled",
        "publicLabel": "重点强调",
        "description": "是否高亮某一条优势要素"
      },
      {
        "key": "focusIndex",
        "label": "重点对象",
        "type": "number",
        "default": 0,
        "min": 0,
        "step": 1,
        "desc": "被高亮的优势要素序号(从 0 起)",
        "publicKey": "focusIndex",
        "publicLabel": "重点对象",
        "description": "被高亮的优势要素序号(从 0 起)"
      },
      {
        "key": "showDecor",
        "label": "装饰元素",
        "type": "boolean",
        "default": true,
        "desc": "手绘箭头、火花与贴纸标签 显隐",
        "publicKey": "showDecor",
        "publicLabel": "装饰元素",
        "description": "手绘箭头、火花与贴纸标签 显隐"
      }
    ],
    "defaultProps": {
      "backgroundTheme": "primary",
      "factorCount": 4,
      "metricCount": 3,
      "focusEnabled": true,
      "focusIndex": 0,
      "showDecor": true,
      "eyebrow": "Bay Area Cluster",
      "kicker": "大数字",
      "headline": "最大地理中心",
      "subheadline": "SF Bay Area",
      "bigNumber": "63.9",
      "bigUnit": "%",
      "caption": "旧金山湾区吃下全美 <b>63.9% 的 AI 融资额</b>——资本、人才与算力在同一片街区里彼此循环。",
      "factorsTitle": "为什么仍是湾区",
      "factors": [
        {
          "label": "人才密度",
          "note": "顶尖研究者与工程师高度聚集"
        },
        {
          "label": "资本网络",
          "note": "头部基金与天使就在隔壁街区"
        },
        {
          "label": "云厂商邻近",
          "note": "算力与基础设施触手可及"
        },
        {
          "label": "模型实验室",
          "note": "前沿实验室扎堆，外溢效应强"
        }
      ],
      "metrics": [
        {
          "k": "第二大中心",
          "v": "11.2",
          "unit": "%"
        },
        {
          "k": "头部实验室",
          "v": "8/10",
          "unit": "在湾区"
        },
        {
          "k": "平均单笔",
          "v": "14",
          "unit": "亿"
        }
      ],
      "closingLine": "湾区，仍是 AI 资本的重力中心。"
    }
  },
  {
    "key": "theme08_page056",
    "themeKey": "theme08",
    "pageNumber": 56,
    "layout": "THEME08-056",
    "slot": "p57",
    "label": "(57) 地理卡 · New York",
    "bgClass": "",
    "controls": [
      {
        "key": "backgroundTheme",
        "label": "背景主题",
        "type": "enum",
        "default": "muted",
        "options": [
          "primary",
          "muted"
        ],
        "desc": "主色(电光黄) 或 次色(淡紫灰) 底色",
        "publicKey": "backgroundTheme",
        "publicLabel": "背景主题",
        "description": "主色(电光黄) 或 次色(淡紫灰) 底色"
      },
      {
        "key": "mediaCount",
        "label": "图片数量",
        "type": "number",
        "default": 3,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "拼贴图片槽数量(0–4)；布局随数量自动平衡，每槽按上传图片比例自适应",
        "publicKey": "mediaCount",
        "publicLabel": "图片数量",
        "description": "拼贴图片槽数量(0–4)；布局随数量自动平衡，每槽按上传图片比例自适应"
      },
      {
        "key": "tagCount",
        "label": "标签数量",
        "type": "number",
        "default": 4,
        "min": 2,
        "max": 5,
        "step": 1,
        "desc": "分类方向标签数量(2–5)",
        "publicKey": "categoryCount",
        "publicLabel": "标签数量",
        "description": "分类方向标签数量(2–5)"
      },
      {
        "key": "metricCount",
        "label": "指标数量",
        "type": "number",
        "default": 4,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "底部支撑指标格数量(2–4)",
        "publicKey": "metricCount",
        "publicLabel": "指标数量",
        "description": "底部支撑指标格数量(2–4)"
      },
      {
        "key": "showShare",
        "label": "占比徽标",
        "type": "boolean",
        "default": true,
        "desc": "拼贴中的大号占比徽标 显隐",
        "publicKey": "showShare",
        "publicLabel": "占比徽标",
        "description": "拼贴中的大号占比徽标 显隐"
      },
      {
        "key": "focusEnabled",
        "label": "重点强调",
        "type": "boolean",
        "default": true,
        "desc": "是否突出某一个分类标签",
        "publicKey": "focusEnabled",
        "publicLabel": "重点强调",
        "description": "是否突出某一个分类标签"
      },
      {
        "key": "focusIndex",
        "label": "重点对象",
        "type": "number",
        "default": 0,
        "min": 0,
        "step": 1,
        "desc": "被突出的标签序号(从 0 起)",
        "publicKey": "focusIndex",
        "publicLabel": "重点对象",
        "description": "被突出的标签序号(从 0 起)"
      },
      {
        "key": "showDecor",
        "label": "装饰元素",
        "type": "boolean",
        "default": true,
        "desc": "手绘装饰与贴纸标签 显隐",
        "publicKey": "showDecor",
        "publicLabel": "装饰元素",
        "description": "手绘装饰与贴纸标签 显隐"
      }
    ],
    "defaultProps": {
      "backgroundTheme": "muted",
      "mediaCount": 3,
      "tagCount": 4,
      "metricCount": 4,
      "showShare": true,
      "focusEnabled": true,
      "focusIndex": 0,
      "showDecor": true,
      "eyebrow": "New York Cluster",
      "kicker": "城市卡",
      "headline": "行业客户优势",
      "place": "纽约集群 · NEW YORK",
      "caption": "纽约的 AI 融资以 <b>金融、媒体、企业服务与法律 AI</b> 为主——它的护城河不在基础模型，而在高价值行业客户的密度。",
      "tagsTitle": "主要行业方向",
      "tags": [
        "金融科技",
        "媒体内容",
        "企业服务",
        "法律 AI",
        "广告营销"
      ],
      "shareValue": "12.4%",
      "shareLabel": "Share of US",
      "metrics": [
        {
          "k": "融资额",
          "v": "120",
          "unit": "亿"
        },
        {
          "k": "占比",
          "v": "12.4",
          "unit": "%"
        },
        {
          "k": "事件数",
          "v": "14",
          "unit": "笔"
        },
        {
          "k": "平均单笔",
          "v": "8.6",
          "unit": "亿"
        }
      ],
      "collage": {
        "0": [],
        "1": [
          {
            "l": 150,
            "t": 150,
            "box": 470,
            "r": -3,
            "ratio": 1.25,
            "sr": -4,
            "color": "var(--acl-yellow)"
          }
        ],
        "2": [
          {
            "l": 40,
            "t": 70,
            "box": 400,
            "r": -4,
            "ratio": 1.2,
            "sr": -4,
            "color": "var(--acl-yellow)"
          },
          {
            "l": 420,
            "t": 360,
            "box": 380,
            "r": 4,
            "ratio": 0.82,
            "sr": 4,
            "color": "var(--acl-blue)"
          }
        ],
        "3": [
          {
            "l": 20,
            "t": 30,
            "box": 360,
            "r": -4,
            "ratio": 1.2,
            "sr": -4,
            "color": "var(--acl-yellow)"
          },
          {
            "l": 470,
            "t": 230,
            "box": 320,
            "r": 4,
            "ratio": 0.84,
            "sr": 4,
            "color": "var(--acl-blue)"
          },
          {
            "l": 120,
            "t": 470,
            "box": 300,
            "r": 3,
            "ratio": 1.1,
            "sr": -3,
            "color": "var(--acl-pink)"
          }
        ],
        "4": [
          {
            "l": 20,
            "t": 30,
            "box": 320,
            "r": -4,
            "ratio": 1.18,
            "sr": -4,
            "color": "var(--acl-yellow)"
          },
          {
            "l": 410,
            "t": 220,
            "box": 290,
            "r": 4,
            "ratio": 0.84,
            "sr": 4,
            "color": "var(--acl-blue)"
          },
          {
            "l": 150,
            "t": 420,
            "box": 280,
            "r": 3,
            "ratio": 1.12,
            "sr": -3,
            "color": "var(--acl-pink)"
          },
          {
            "l": 540,
            "t": 480,
            "box": 240,
            "r": -3,
            "ratio": 0.86,
            "sr": 5,
            "color": "var(--acl-red)"
          }
        ]
      },
      "sharePos": {
        "0": {
          "l": "32%",
          "t": "34%"
        },
        "1": {
          "l": "50%",
          "t": "2%"
        },
        "2": {
          "l": "4%",
          "t": "60%"
        },
        "3": {
          "l": "62%",
          "t": "2%"
        },
        "4": {
          "l": "60%",
          "t": "4%"
        }
      },
      "closingLine": "行业客户密度，决定垂直应用的落地机会。"
    }
  },
  {
    "key": "theme08_page057",
    "themeKey": "theme08",
    "pageNumber": 57,
    "layout": "THEME08-057",
    "slot": "p58",
    "label": "(58) 地理卡 · Seattle",
    "bgClass": "",
    "controls": [
      {
        "key": "backgroundTheme",
        "label": "背景主题",
        "type": "enum",
        "default": "primary",
        "options": [
          "primary",
          "muted"
        ],
        "desc": "主色(电光黄) 或 次色(淡紫灰) 底色",
        "publicKey": "backgroundTheme",
        "publicLabel": "背景主题",
        "description": "主色(电光黄) 或 次色(淡紫灰) 底色"
      },
      {
        "key": "mediaCount",
        "label": "图片数量",
        "type": "number",
        "default": 2,
        "min": 0,
        "max": 3,
        "step": 1,
        "desc": "左侧堆叠图片槽数量(0–3)；布局随数量自动平衡，每槽按上传图片比例自适应",
        "publicKey": "mediaCount",
        "publicLabel": "图片数量",
        "description": "左侧堆叠图片槽数量(0–3)；布局随数量自动平衡，每槽按上传图片比例自适应"
      },
      {
        "key": "tagCount",
        "label": "标签数量",
        "type": "number",
        "default": 4,
        "min": 2,
        "max": 5,
        "step": 1,
        "desc": "云生态方向行数量(2–5)",
        "publicKey": "tagCount",
        "publicLabel": "标签数量",
        "description": "云生态方向行数量(2–5)"
      },
      {
        "key": "metricCount",
        "label": "指标数量",
        "type": "number",
        "default": 4,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "底部支撑指标格数量(2–4)",
        "publicKey": "metricCount",
        "publicLabel": "指标数量",
        "description": "底部支撑指标格数量(2–4)"
      },
      {
        "key": "showShare",
        "label": "占比大数字",
        "type": "boolean",
        "default": true,
        "desc": "右侧大号占比数字 显隐",
        "publicKey": "showShare",
        "publicLabel": "占比大数字",
        "description": "右侧大号占比数字 显隐"
      },
      {
        "key": "focusEnabled",
        "label": "重点强调",
        "type": "boolean",
        "default": true,
        "desc": "是否突出某一个方向行",
        "publicKey": "focusEnabled",
        "publicLabel": "重点强调",
        "description": "是否突出某一个方向行"
      },
      {
        "key": "focusIndex",
        "label": "重点对象",
        "type": "number",
        "default": 0,
        "min": 0,
        "step": 1,
        "desc": "被突出的方向行序号(从 0 起)",
        "publicKey": "focusIndex",
        "publicLabel": "重点对象",
        "description": "被突出的方向行序号(从 0 起)"
      },
      {
        "key": "showDecor",
        "label": "装饰元素",
        "type": "boolean",
        "default": true,
        "desc": "手绘装饰与贴纸标签 显隐",
        "publicKey": "showDecor",
        "publicLabel": "装饰元素",
        "description": "手绘装饰与贴纸标签 显隐"
      }
    ],
    "defaultProps": {
      "backgroundTheme": "primary",
      "mediaCount": 2,
      "tagCount": 4,
      "metricCount": 4,
      "showShare": true,
      "focusEnabled": true,
      "focusIndex": 0,
      "showDecor": true,
      "eyebrow": "Seattle Cluster",
      "kicker": "城市卡",
      "headline": "云计算人才外溢",
      "place": "西雅图集群 · SEATTLE",
      "caption": "西雅图受益于 <b>云计算生态与大厂工程人才外溢</b>，更适合孕育基础设施、开发者工具与企业 AI。",
      "tagsTitle": "主要云生态方向",
      "tags": [
        {
          "label": "云基础设施",
          "note": "算力 · 存储 · 网络"
        },
        {
          "label": "开发者工具",
          "note": "研发效率提升"
        },
        {
          "label": "企业 AI",
          "note": "内部流程嵌入"
        },
        {
          "label": "数据平台",
          "note": "RAG · 知识管理"
        },
        {
          "label": "推理优化",
          "note": "成本与时延"
        }
      ],
      "shareValue": "9.8",
      "shareUnit": "%",
      "shareLabel": "全美融资额占比",
      "metrics": [
        {
          "k": "融资额",
          "v": "95",
          "unit": "亿"
        },
        {
          "k": "占比",
          "v": "9.8",
          "unit": "%"
        },
        {
          "k": "事件数",
          "v": "10",
          "unit": "笔"
        },
        {
          "k": "平均单笔",
          "v": "9.5",
          "unit": "亿"
        }
      ],
      "rail": {
        "0": [],
        "1": [
          {
            "l": 150,
            "t": 300,
            "box": 470,
            "r": -3,
            "ratio": 1.2,
            "sr": -4,
            "color": "var(--acl-yellow)"
          }
        ],
        "2": [
          {
            "l": 90,
            "t": 150,
            "box": 400,
            "r": -4,
            "ratio": 1.18,
            "sr": -4,
            "color": "var(--acl-yellow)"
          },
          {
            "l": 300,
            "t": 560,
            "box": 360,
            "r": 4,
            "ratio": 0.84,
            "sr": 4,
            "color": "var(--acl-blue)"
          }
        ],
        "3": [
          {
            "l": 70,
            "t": 110,
            "box": 330,
            "r": -5,
            "ratio": 1.16,
            "sr": -4,
            "color": "var(--acl-yellow)"
          },
          {
            "l": 360,
            "t": 400,
            "box": 320,
            "r": 4,
            "ratio": 0.85,
            "sr": 4,
            "color": "var(--acl-blue)"
          },
          {
            "l": 120,
            "t": 700,
            "box": 300,
            "r": -3,
            "ratio": 1.3,
            "sr": -3,
            "color": "var(--acl-pink)"
          }
        ]
      },
      "closingLine": "云计算底座，带来 AI 基础设施机会。"
    }
  },
  {
    "key": "theme08_page058",
    "themeKey": "theme08",
    "pageNumber": 58,
    "layout": "THEME08-058",
    "slot": "p59",
    "label": "(59) 地理卡 · Boston",
    "bgClass": "",
    "controls": [
      {
        "key": "backgroundTheme",
        "label": "背景主题",
        "type": "enum",
        "default": "muted",
        "options": [
          "primary",
          "muted",
          "ink"
        ],
        "desc": "主色(电光黄) / 次色(淡紫灰) / 深色(杂志海报)",
        "publicKey": "backgroundTheme",
        "publicLabel": "背景主题",
        "description": "主色(电光黄) / 次色(淡紫灰) / 深色(杂志海报)"
      },
      {
        "key": "mediaCount",
        "label": "图片数量",
        "type": "number",
        "default": 2,
        "min": 0,
        "max": 3,
        "step": 1,
        "desc": "特写图片数量(0–3：1 主视觉 + 至多 2 张嵌套)；每张按上传图片比例自适应",
        "publicKey": "mediaCount",
        "publicLabel": "图片数量",
        "description": "特写图片数量(0–3：1 主视觉 + 至多 2 张嵌套)；每张按上传图片比例自适应"
      },
      {
        "key": "tagCount",
        "label": "标签数量",
        "type": "number",
        "default": 4,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "科研方向票根数量(2–4)",
        "publicKey": "tagCount",
        "publicLabel": "标签数量",
        "description": "科研方向票根数量(2–4)"
      },
      {
        "key": "metricCount",
        "label": "指标数量",
        "type": "number",
        "default": 4,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "底部支撑指标格数量(2–4)",
        "publicKey": "metricCount",
        "publicLabel": "指标数量",
        "description": "底部支撑指标格数量(2–4)"
      },
      {
        "key": "showStamp",
        "label": "占比印章",
        "type": "boolean",
        "default": true,
        "desc": "特写上的圆形占比印章 显隐",
        "publicKey": "showStamp",
        "publicLabel": "占比印章",
        "description": "特写上的圆形占比印章 显隐"
      },
      {
        "key": "focusEnabled",
        "label": "重点强调",
        "type": "boolean",
        "default": true,
        "desc": "是否突出某一个方向票根",
        "publicKey": "focusEnabled",
        "publicLabel": "重点强调",
        "description": "是否突出某一个方向票根"
      },
      {
        "key": "focusIndex",
        "label": "重点对象",
        "type": "number",
        "default": 0,
        "min": 0,
        "step": 1,
        "desc": "被突出的票根序号(从 0 起)",
        "publicKey": "focusIndex",
        "publicLabel": "重点对象",
        "description": "被突出的票根序号(从 0 起)"
      },
      {
        "key": "showDecor",
        "label": "装饰元素",
        "type": "boolean",
        "default": true,
        "desc": "手绘装饰与贴纸标签 显隐",
        "publicKey": "showDecor",
        "publicLabel": "装饰元素",
        "description": "手绘装饰与贴纸标签 显隐"
      }
    ],
    "defaultProps": {
      "backgroundTheme": "muted",
      "mediaCount": 2,
      "tagCount": 4,
      "metricCount": 4,
      "showStamp": true,
      "focusEnabled": true,
      "focusIndex": 0,
      "showDecor": true,
      "eyebrow": "Boston Cluster",
      "kicker": "城市卡",
      "headline": "科研与硬科技",
      "place": "波士顿集群 · BOSTON",
      "caption": "波士顿集中在 <b>医疗 AI、机器人与硬科技</b> 方向——高校科研与硬科技转化，构成它独特的长周期资产优势。",
      "tagsTitle": "主要科研方向",
      "tags": [
        {
          "label": "医疗 AI",
          "note": "影像 · 诊断"
        },
        {
          "label": "机器人",
          "note": "具身 · 工业"
        },
        {
          "label": "药物发现",
          "note": "生物计算"
        },
        {
          "label": "硬科技",
          "note": "材料 · 量子"
        }
      ],
      "shareValue": "7.7%",
      "shareLabel": "Share of US",
      "metrics": [
        {
          "k": "融资额",
          "v": "75",
          "unit": "亿"
        },
        {
          "k": "占比",
          "v": "7.7",
          "unit": "%"
        },
        {
          "k": "事件数",
          "v": "8",
          "unit": "笔"
        },
        {
          "k": "平均单笔",
          "v": "9.4",
          "unit": "亿"
        }
      ],
      "hero": {
        "0": [],
        "1": [
          {
            "l": 100,
            "t": 90,
            "box": 540,
            "r": -2,
            "ratio": 1.18,
            "sr": -3,
            "color": "var(--acl-yellow)"
          }
        ],
        "2": [
          {
            "l": 70,
            "t": 70,
            "box": 520,
            "r": -2,
            "ratio": 1.2,
            "sr": -3,
            "color": "var(--acl-yellow)"
          },
          {
            "l": 470,
            "t": 420,
            "box": 250,
            "r": 5,
            "ratio": 0.82,
            "sr": 5,
            "color": "var(--acl-blue)"
          }
        ],
        "3": [
          {
            "l": 50,
            "t": 50,
            "box": 480,
            "r": -2,
            "ratio": 1.2,
            "sr": -3,
            "color": "var(--acl-yellow)"
          },
          {
            "l": 440,
            "t": 400,
            "box": 240,
            "r": 5,
            "ratio": 0.82,
            "sr": 5,
            "color": "var(--acl-blue)"
          },
          {
            "l": 100,
            "t": 470,
            "box": 210,
            "r": -5,
            "ratio": 1.05,
            "sr": -4,
            "color": "var(--acl-pink)"
          }
        ]
      },
      "closingLine": "科研城市，更适合长周期技术资产。"
    }
  },
  {
    "key": "theme08_page059",
    "themeKey": "theme08",
    "pageNumber": 59,
    "layout": "THEME08-059",
    "slot": "p60",
    "label": "(60) 点阵图 · Other Regions",
    "bgClass": "",
    "controls": [
      {
        "key": "backgroundTheme",
        "label": "背景主题",
        "type": "enum",
        "default": "primary",
        "options": [
          "primary",
          "muted"
        ],
        "desc": "主色(电光黄) 或 次色(淡紫灰) 底色",
        "publicKey": "backgroundTheme",
        "publicLabel": "背景主题",
        "description": "主色(电光黄) 或 次色(淡紫灰) 底色"
      },
      {
        "key": "nodeCount",
        "label": "节点数量",
        "type": "number",
        "default": 6,
        "min": 3,
        "max": 8,
        "step": 1,
        "desc": "散点地图上的区域节点数量(3–8)",
        "publicKey": "nodeCount",
        "publicLabel": "节点数量",
        "description": "散点地图上的区域节点数量(3–8)"
      },
      {
        "key": "mediaCount",
        "label": "图片数量",
        "type": "number",
        "default": 2,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "前 N 个节点改为承载图片(0–4，超过节点数自动封顶)；每张按上传图片比例自适应",
        "publicKey": "mediaCount",
        "publicLabel": "图片数量",
        "description": "前 N 个节点改为承载图片(0–4，超过节点数自动封顶)；每张按上传图片比例自适应"
      },
      {
        "key": "tagCount",
        "label": "标签数量",
        "type": "number",
        "default": 4,
        "min": 2,
        "max": 5,
        "step": 1,
        "desc": "落地方向标签数量(2–5)",
        "publicKey": "tagCount",
        "publicLabel": "标签数量",
        "description": "落地方向标签数量(2–5)"
      },
      {
        "key": "metricCount",
        "label": "指标数量",
        "type": "number",
        "default": 4,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "底部支撑指标格数量(2–4)",
        "publicKey": "metricCount",
        "publicLabel": "指标数量",
        "description": "底部支撑指标格数量(2–4)"
      },
      {
        "key": "showValueLabels",
        "label": "数值标签",
        "type": "boolean",
        "default": true,
        "desc": "各节点的数值 显隐",
        "publicKey": "showValueLabels",
        "publicLabel": "数值标签",
        "description": "各节点的数值 显隐"
      },
      {
        "key": "focusEnabled",
        "label": "重点强调",
        "type": "boolean",
        "default": true,
        "desc": "是否突出某一个区域节点",
        "publicKey": "focusEnabled",
        "publicLabel": "重点强调",
        "description": "是否突出某一个区域节点"
      },
      {
        "key": "focusIndex",
        "label": "重点对象",
        "type": "number",
        "default": 0,
        "min": 0,
        "step": 1,
        "desc": "被突出的节点序号(从 0 起)",
        "publicKey": "focusIndex",
        "publicLabel": "重点对象",
        "description": "被突出的节点序号(从 0 起)"
      },
      {
        "key": "showDecor",
        "label": "装饰元素",
        "type": "boolean",
        "default": true,
        "desc": "手绘装饰与贴纸标签 显隐",
        "publicKey": "showDecor",
        "publicLabel": "装饰元素",
        "description": "手绘装饰与贴纸标签 显隐"
      }
    ],
    "defaultProps": {
      "backgroundTheme": "primary",
      "nodeCount": 6,
      "mediaCount": 2,
      "tagCount": 4,
      "metricCount": 4,
      "showValueLabels": true,
      "focusEnabled": true,
      "focusIndex": 0,
      "showDecor": true,
      "eyebrow": "Other Regions",
      "kicker": "区域点阵",
      "headline": "分散型应用落地",
      "place": "其他地区 · DISPERSED",
      "caption": "其他地区融资规模较小，但出现 <b>行业专用模型与本地化应用</b> 机会——非核心区域更适合做行业落地，而非争夺通用模型。",
      "hubValue": "6.2%",
      "hubLabel": "其他地区合计",
      "tagsTitle": "主要落地方向",
      "tags": [
        "行业专用模型",
        "本地化应用",
        "制造 AI",
        "政企服务",
        "农业科技"
      ],
      "metrics": [
        {
          "k": "融资额",
          "v": "60",
          "unit": "亿"
        },
        {
          "k": "占比",
          "v": "6.2",
          "unit": "%"
        },
        {
          "k": "事件数",
          "v": "11",
          "unit": "笔"
        },
        {
          "k": "平均单笔",
          "v": "5.5",
          "unit": "亿"
        }
      ],
      "nodes": [
        {
          "region": "奥斯汀",
          "value": 14,
          "l": "17%",
          "t": "24%",
          "size": 128
        },
        {
          "region": "丹佛",
          "value": 11,
          "l": "79%",
          "t": "22%",
          "size": 116
        },
        {
          "region": "亚特兰大",
          "value": 9,
          "l": "30%",
          "t": "74%",
          "size": 106
        },
        {
          "region": "芝加哥",
          "value": 8,
          "l": "70%",
          "t": "76%",
          "size": 100
        },
        {
          "region": "圣地亚哥",
          "value": 7,
          "l": "9%",
          "t": "58%",
          "size": 92
        },
        {
          "region": "迈阿密",
          "value": 5,
          "l": "90%",
          "t": "56%",
          "size": 82
        },
        {
          "region": "匹兹堡",
          "value": 4,
          "l": "46%",
          "t": "11%",
          "size": 74
        },
        {
          "region": "纳什维尔",
          "value": 2,
          "l": "55%",
          "t": "90%",
          "size": 64
        }
      ],
      "closingLine": "本地行业资源，也能形成应用机会。"
    }
  },
  {
    "key": "theme08_page060",
    "themeKey": "theme08",
    "pageNumber": 60,
    "layout": "THEME08-060",
    "slot": "p61",
    "label": "(61) 金句 · Resources",
    "bgClass": "",
    "controls": [
      {
        "key": "backgroundTheme",
        "label": "背景主题",
        "type": "enum",
        "default": "ink",
        "options": [
          "primary",
          "muted",
          "ink"
        ],
        "desc": "主色(电光黄) / 次色(淡紫灰) / 深色(高反差金句)",
        "publicKey": "backgroundTheme",
        "publicLabel": "背景主题",
        "description": "主色(电光黄) / 次色(淡紫灰) / 深色(高反差金句)"
      },
      {
        "key": "showPillars",
        "label": "要素卡",
        "type": "boolean",
        "default": true,
        "desc": "底部资源要素卡的显示/隐藏",
        "publicKey": "showPillars",
        "publicLabel": "要素卡",
        "description": "底部资源要素卡的显示/隐藏"
      },
      {
        "key": "pillarCount",
        "label": "要素数量",
        "type": "number",
        "default": 3,
        "min": 2,
        "max": 3,
        "step": 1,
        "desc": "资源要素卡数量(2–3)",
        "publicKey": "pillarCount",
        "publicLabel": "要素数量",
        "description": "资源要素卡数量(2–3)"
      },
      {
        "key": "showBackdrop",
        "label": "背景大字",
        "type": "boolean",
        "default": true,
        "desc": "倾斜大号背景装饰字的显示/隐藏",
        "publicKey": "showBackdrop",
        "publicLabel": "背景大字",
        "description": "倾斜大号背景装饰字的显示/隐藏"
      },
      {
        "key": "focusEnabled",
        "label": "重点强调",
        "type": "boolean",
        "default": true,
        "desc": "是否突出某一张要素卡",
        "publicKey": "focusEnabled",
        "publicLabel": "重点强调",
        "description": "是否突出某一张要素卡"
      },
      {
        "key": "focusIndex",
        "label": "重点对象",
        "type": "number",
        "default": 2,
        "min": 0,
        "step": 1,
        "desc": "被突出的要素卡序号(从 0 起)",
        "publicKey": "focusIndex",
        "publicLabel": "重点对象",
        "description": "被突出的要素卡序号(从 0 起)"
      },
      {
        "key": "showDecor",
        "label": "装饰元素",
        "type": "boolean",
        "default": true,
        "desc": "手绘火花与贴纸标签的显示/隐藏",
        "publicKey": "showDecor",
        "publicLabel": "装饰元素",
        "description": "手绘火花与贴纸标签的显示/隐藏"
      }
    ],
    "defaultProps": {
      "backgroundTheme": "ink",
      "showPillars": true,
      "pillarCount": 3,
      "showBackdrop": true,
      "focusEnabled": true,
      "focusIndex": 2,
      "showDecor": true,
      "eyebrow": "Talent · Capital · Compute",
      "kicker": "金句页",
      "headline": "三类关键资源 · 人才 / 资本 / 算力",
      "quote": "AI 竞争，首先是一场 <b>资源组织能力</b> 的竞争。",
      "backdropWord": "RESOURCE",
      "pillars": [
        {
          "title": "人才",
          "note": "顶级研究员与工程团队，决定模型上限与迭代速度。"
        },
        {
          "title": "资本",
          "note": "长期、深口袋的资金，支撑漫长的训练与商业化周期。"
        },
        {
          "title": "算力",
          "note": "GPU 与云资源的稳定供给，是一切训练与推理的底座。"
        }
      ],
      "source": "数据口径：2024 全年 · 单笔 ≥1 亿美元 · AI CAPITAL LAB"
    }
  },
  {
    "key": "theme08_page061",
    "themeKey": "theme08",
    "pageNumber": 61,
    "layout": "THEME08-061",
    "slot": "p64",
    "label": "(64) 案例卡 · xAI",
    "bgClass": "",
    "controls": [
      {
        "key": "backgroundTheme",
        "label": "背景主题",
        "type": "enum",
        "default": "primary",
        "options": [
          "primary",
          "muted"
        ],
        "desc": "主色(电光黄) 或 次色(淡紫灰) 底色",
        "publicKey": "backgroundTheme",
        "publicLabel": "背景主题",
        "description": "主色(电光黄) 或 次色(淡紫灰) 底色"
      },
      {
        "key": "nodeCount",
        "label": "节点数量",
        "type": "number",
        "default": 4,
        "min": 3,
        "max": 5,
        "step": 1,
        "desc": "生态连接节点数量(3–5)",
        "publicKey": "nodeCount",
        "publicLabel": "节点数量",
        "description": "生态连接节点数量(3–5)"
      },
      {
        "key": "mediaCount",
        "label": "图片数量",
        "type": "number",
        "default": 2,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "前 N 个节点改为承载图片(0–4，超过节点数自动封顶)；每张按上传图片比例自适应",
        "publicKey": "mediaCount",
        "publicLabel": "图片数量",
        "description": "前 N 个节点改为承载图片(0–4，超过节点数自动封顶)；每张按上传图片比例自适应"
      },
      {
        "key": "metricCount",
        "label": "指标数量",
        "type": "number",
        "default": 2,
        "min": 2,
        "max": 3,
        "step": 1,
        "desc": "左侧大号支撑指标格数量(2–3)",
        "publicKey": "metricCount",
        "publicLabel": "指标数量",
        "description": "左侧大号支撑指标格数量(2–3)"
      },
      {
        "key": "showValueLabels",
        "label": "节点标注",
        "type": "boolean",
        "default": true,
        "desc": "各节点的角色标注 显隐",
        "publicKey": "showValueLabels",
        "publicLabel": "节点标注",
        "description": "各节点的角色标注 显隐"
      },
      {
        "key": "focusEnabled",
        "label": "重点强调",
        "type": "boolean",
        "default": true,
        "desc": "是否高亮某一个生态节点",
        "publicKey": "focusEnabled",
        "publicLabel": "重点强调",
        "description": "是否高亮某一个生态节点"
      },
      {
        "key": "focusIndex",
        "label": "重点对象",
        "type": "number",
        "default": 0,
        "min": 0,
        "step": 1,
        "desc": "被高亮的节点序号(从 0 起)",
        "publicKey": "focusIndex",
        "publicLabel": "重点对象",
        "description": "被高亮的节点序号(从 0 起)"
      },
      {
        "key": "showDecor",
        "label": "装饰元素",
        "type": "boolean",
        "default": true,
        "desc": "手绘装饰与贴纸标签的显示/隐藏",
        "publicKey": "showDecor",
        "publicLabel": "装饰元素",
        "description": "手绘装饰与贴纸标签的显示/隐藏"
      }
    ],
    "defaultProps": {
      "backgroundTheme": "primary",
      "nodeCount": 4,
      "mediaCount": 2,
      "metricCount": 2,
      "showValueLabels": true,
      "focusEnabled": true,
      "focusIndex": 0,
      "showDecor": true,
      "eyebrow": "xAI Case",
      "kicker": "案例卡",
      "headline": "实时数据生态",
      "company": "xAI",
      "caption": "xAI 以 <b>实时数据与马斯克生态</b> 作为差异化——核心资产不是模型本身，而是实时数据与生态流量。",
      "hubLabel": "xAI",
      "hubSub": "Ecosystem hub · 生态中枢",
      "nodes": [
        {
          "label": "X 平台",
          "note": "实时数据入口"
        },
        {
          "label": "特斯拉",
          "note": "算力与场景"
        },
        {
          "label": "多模态",
          "note": "模型能力"
        },
        {
          "label": "实时搜索",
          "note": "检索与分发"
        },
        {
          "label": "开发者",
          "note": "API 生态"
        }
      ],
      "layout": {
        "3": [
          {
            "x": 58,
            "y": 16
          },
          {
            "x": 74,
            "y": 52
          },
          {
            "x": 56,
            "y": 86
          }
        ],
        "4": [
          {
            "x": 54,
            "y": 14
          },
          {
            "x": 80,
            "y": 38
          },
          {
            "x": 74,
            "y": 74
          },
          {
            "x": 50,
            "y": 88
          }
        ],
        "5": [
          {
            "x": 50,
            "y": 10
          },
          {
            "x": 76,
            "y": 26
          },
          {
            "x": 84,
            "y": 56
          },
          {
            "x": 70,
            "y": 84
          },
          {
            "x": 48,
            "y": 92
          }
        ]
      },
      "metrics": [
        {
          "k": "单笔融资",
          "v": "50",
          "unit": "亿"
        },
        {
          "k": "估值",
          "v": "500",
          "unit": "亿"
        },
        {
          "k": "数据入口",
          "v": "X 平台"
        }
      ],
      "closingLine": "独特的数据入口，可以成为模型的差异化。"
    }
  },
  {
    "key": "theme08_page062",
    "themeKey": "theme08",
    "pageNumber": 62,
    "layout": "THEME08-062",
    "slot": "p65",
    "label": "(65) 案例卡 · CoreWeave",
    "bgClass": "",
    "controls": [
      {
        "key": "backgroundTheme",
        "label": "背景主题",
        "type": "enum",
        "default": "primary",
        "options": [
          "primary",
          "muted"
        ],
        "desc": "主色(电光黄) 或 次色(淡紫灰) 底色",
        "publicKey": "backgroundTheme",
        "publicLabel": "背景主题",
        "description": "主色(电光黄) 或 次色(淡紫灰) 底色"
      },
      {
        "key": "mediaCount",
        "label": "图片数量",
        "type": "number",
        "default": 3,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "左侧竖向堆叠图片槽数量(0–4)；布局随数量自动平衡，每槽按上传图片比例自适应",
        "publicKey": "mediaCount",
        "publicLabel": "图片数量",
        "description": "左侧竖向堆叠图片槽数量(0–4)；布局随数量自动平衡，每槽按上传图片比例自适应"
      },
      {
        "key": "metricCount",
        "label": "指标数量",
        "type": "number",
        "default": 2,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "右侧指标阶梯行数量(2–4)",
        "publicKey": "metricCount",
        "publicLabel": "指标数量",
        "description": "右侧指标阶梯行数量(2–4)"
      },
      {
        "key": "tagCount",
        "label": "标签数量",
        "type": "number",
        "default": 3,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "底部客户标签数量(2–4)",
        "publicKey": "tagCount",
        "publicLabel": "标签数量",
        "description": "底部客户标签数量(2–4)"
      },
      {
        "key": "showMeter",
        "label": "容量计量",
        "type": "boolean",
        "default": true,
        "desc": "资源容量计量条(单元格 + 大数字) 显隐",
        "publicKey": "showMeter",
        "publicLabel": "容量计量",
        "description": "资源容量计量条(单元格 + 大数字) 显隐"
      },
      {
        "key": "focusEnabled",
        "label": "重点强调",
        "type": "boolean",
        "default": true,
        "desc": "是否突出某一条指标行",
        "publicKey": "focusEnabled",
        "publicLabel": "重点强调",
        "description": "是否突出某一条指标行"
      },
      {
        "key": "focusIndex",
        "label": "重点对象",
        "type": "number",
        "default": 0,
        "min": 0,
        "step": 1,
        "desc": "被突出的指标行序号(从 0 起)",
        "publicKey": "focusIndex",
        "publicLabel": "重点对象",
        "description": "被突出的指标行序号(从 0 起)"
      },
      {
        "key": "showDecor",
        "label": "装饰元素",
        "type": "boolean",
        "default": true,
        "desc": "手绘装饰与贴纸标签的显示/隐藏",
        "publicKey": "showDecor",
        "publicLabel": "装饰元素",
        "description": "手绘装饰与贴纸标签的显示/隐藏"
      }
    ],
    "defaultProps": {
      "backgroundTheme": "primary",
      "mediaCount": 3,
      "metricCount": 2,
      "tagCount": 3,
      "showMeter": true,
      "focusEnabled": true,
      "focusIndex": 0,
      "showDecor": true,
      "eyebrow": "CoreWeave Case",
      "kicker": "案例卡",
      "headline": "算力基础设施",
      "company": "CoreWeave",
      "tag": "GPU 云",
      "caption": "CoreWeave 代表算力基础设施的 <b>确定性机会</b>——当模型公司都在抢 GPU，算力供应商获得资本溢价。",
      "meterLabel": "GPU 资源储备",
      "meterValue": "7.8",
      "meterUnit": "万张",
      "meterFill": 0.78,
      "meterUnits": 48,
      "metrics": [
        {
          "k": "最大单笔融资",
          "v": "110",
          "unit": "亿"
        },
        {
          "k": "估值",
          "v": "190",
          "unit": "亿"
        },
        {
          "k": "在管集群",
          "v": "32",
          "unit": "座"
        }
      ],
      "clientsTitle": "主要客户",
      "clients": [
        "模型公司",
        "生成式内容",
        "企业推理",
        "研究机构"
      ],
      "closingLine": "卖铲子的人，也能成为核心资产。"
    }
  },
  {
    "key": "theme08_page063",
    "themeKey": "theme08",
    "pageNumber": 63,
    "layout": "THEME08-063",
    "slot": "p66",
    "label": "(66) 案例表 · Scale AI",
    "bgClass": "",
    "controls": [
      {
        "key": "backgroundTheme",
        "label": "背景主题",
        "type": "enum",
        "default": "muted",
        "options": [
          "primary",
          "muted"
        ],
        "desc": "主色(电光黄) 或 次色(淡紫灰) 底色",
        "publicKey": "backgroundTheme",
        "publicLabel": "背景主题",
        "description": "主色(电光黄) 或 次色(淡紫灰) 底色"
      },
      {
        "key": "rowCount",
        "label": "行数",
        "type": "number",
        "default": 4,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "展示的业务线行数(2–4)",
        "publicKey": "rowCount",
        "publicLabel": "行数",
        "description": "展示的业务线行数(2–4)"
      },
      {
        "key": "metricCount",
        "label": "指标数量",
        "type": "number",
        "default": 3,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "顶部铭牌带的指标格数量(2–4)",
        "publicKey": "metricCount",
        "publicLabel": "指标数量",
        "description": "顶部铭牌带的指标格数量(2–4)"
      },
      {
        "key": "showBars",
        "label": "数据条",
        "type": "boolean",
        "default": true,
        "desc": "占比列的横向比例条 显隐",
        "publicKey": "showBars",
        "publicLabel": "数据条",
        "description": "占比列的横向比例条 显隐"
      },
      {
        "key": "showRepCol",
        "label": "代表列",
        "type": "boolean",
        "default": true,
        "desc": "「代表客户」列 显隐",
        "publicKey": "showRepCol",
        "publicLabel": "代表列",
        "description": "「代表客户」列 显隐"
      },
      {
        "key": "showRating",
        "label": "判断评级",
        "type": "boolean",
        "default": true,
        "desc": "「判断」评级圆点列 显隐",
        "publicKey": "showStatusRating",
        "publicLabel": "判断评级",
        "description": "「判断」评级圆点列 显隐"
      },
      {
        "key": "focusEnabled",
        "label": "重点强调",
        "type": "boolean",
        "default": true,
        "desc": "是否高亮某一行",
        "publicKey": "focusEnabled",
        "publicLabel": "重点强调",
        "description": "是否高亮某一行"
      },
      {
        "key": "focusIndex",
        "label": "重点对象",
        "type": "number",
        "default": 0,
        "min": 0,
        "step": 1,
        "desc": "被高亮的行序号(从 0 起)",
        "publicKey": "focusIndex",
        "publicLabel": "重点对象",
        "description": "被高亮的行序号(从 0 起)"
      },
      {
        "key": "showDecor",
        "label": "装饰元素",
        "type": "boolean",
        "default": true,
        "desc": "手绘装饰与贴纸标签的显示/隐藏",
        "publicKey": "showDecor",
        "publicLabel": "装饰元素",
        "description": "手绘装饰与贴纸标签的显示/隐藏"
      }
    ],
    "defaultProps": {
      "backgroundTheme": "muted",
      "rowCount": 4,
      "metricCount": 3,
      "showBars": true,
      "showRepCol": true,
      "showRating": true,
      "focusEnabled": true,
      "focusIndex": 0,
      "showDecor": true,
      "eyebrow": "Scale AI Case",
      "kicker": "案例卡",
      "headline": "数据基础设施",
      "company": "Scale AI",
      "tag": "数据标注",
      "summary": "Scale AI 代表标注、RLHF 与评测数据需求——<b>数据质量是模型竞争的底层变量</b>。",
      "metrics": [
        {
          "k": "最大单笔融资",
          "v": "10",
          "unit": "亿"
        },
        {
          "k": "企业客户",
          "v": "1200",
          "unit": "家"
        },
        {
          "k": "政府客户占比",
          "v": "18",
          "unit": "%"
        }
      ],
      "columnLabels": [
        "业务线",
        "营收占比",
        "代表客户",
        "判断"
      ],
      "shareUnit": "%",
      "rows": [
        {
          "line": "数据标注",
          "en": "Data Labeling",
          "share": 38,
          "rep": "模型实验室",
          "repEn": "Model Labs",
          "rating": 3,
          "verdict": "刚性需求"
        },
        {
          "line": "人类反馈",
          "en": "RLHF",
          "share": 27,
          "rep": "头部大模型",
          "repEn": "Frontier Labs",
          "rating": 3,
          "verdict": "核心壁垒"
        },
        {
          "line": "模型评测",
          "en": "Evaluation",
          "share": 20,
          "rep": "企业 / 政府",
          "repEn": "Enterprise / Gov",
          "rating": 2,
          "verdict": "快速增长"
        },
        {
          "line": "合成数据",
          "en": "Synthetic",
          "share": 15,
          "rep": "研究机构",
          "repEn": "Research",
          "rating": 2,
          "verdict": "新兴方向"
        }
      ],
      "closingLine": "数据质量，是模型竞争的底层变量。"
    }
  },
  {
    "key": "theme08_page064",
    "themeKey": "theme08",
    "pageNumber": 64,
    "layout": "THEME08-064",
    "slot": "p67",
    "label": "(67) 案例卡 · Perplexity",
    "bgClass": "",
    "controls": [
      {
        "key": "backgroundTheme",
        "label": "背景主题",
        "type": "enum",
        "default": "primary",
        "options": [
          "primary",
          "muted"
        ],
        "desc": "主色(电光黄) 或 次色(淡紫灰) 底色",
        "publicKey": "backgroundTheme",
        "publicLabel": "背景主题",
        "description": "主色(电光黄) 或 次色(淡紫灰) 底色"
      },
      {
        "key": "mediaCount",
        "label": "图片数量",
        "type": "number",
        "default": 2,
        "min": 0,
        "max": 3,
        "step": 1,
        "desc": "特写图片数量(0–3)：1 主视觉 + 至多 2 张嵌套；每张按上传图片比例自适应",
        "publicKey": "mediaCount",
        "publicLabel": "图片数量",
        "description": "特写图片数量(0–3)：1 主视觉 + 至多 2 张嵌套；每张按上传图片比例自适应"
      },
      {
        "key": "stageCount",
        "label": "漏斗阶段",
        "type": "number",
        "default": 3,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "转化漏斗的阶段数量(2–4)",
        "publicKey": "stageCount",
        "publicLabel": "漏斗阶段",
        "description": "转化漏斗的阶段数量(2–4)"
      },
      {
        "key": "metricCount",
        "label": "指标数量",
        "type": "number",
        "default": 2,
        "min": 2,
        "max": 3,
        "step": 1,
        "desc": "底部支撑指标格数量(2–3)",
        "publicKey": "metricCount",
        "publicLabel": "指标数量",
        "description": "底部支撑指标格数量(2–3)"
      },
      {
        "key": "showValueLabels",
        "label": "数值标签",
        "type": "boolean",
        "default": true,
        "desc": "漏斗各阶段的数值标签 显隐",
        "publicKey": "showValueLabels",
        "publicLabel": "数值标签",
        "description": "漏斗各阶段的数值标签 显隐"
      },
      {
        "key": "showBadge",
        "label": "高亮徽标",
        "type": "boolean",
        "default": true,
        "desc": "主视觉上的大号高亮数字徽标 显隐",
        "publicKey": "showBadge",
        "publicLabel": "高亮徽标",
        "description": "主视觉上的大号高亮数字徽标 显隐"
      },
      {
        "key": "focusEnabled",
        "label": "重点强调",
        "type": "boolean",
        "default": true,
        "desc": "是否突出某一个漏斗阶段",
        "publicKey": "focusEnabled",
        "publicLabel": "重点强调",
        "description": "是否突出某一个漏斗阶段"
      },
      {
        "key": "focusIndex",
        "label": "重点对象",
        "type": "number",
        "default": 2,
        "min": 0,
        "step": 1,
        "desc": "被突出的漏斗阶段序号(从 0 起)",
        "publicKey": "focusIndex",
        "publicLabel": "重点对象",
        "description": "被突出的漏斗阶段序号(从 0 起)"
      },
      {
        "key": "showDecor",
        "label": "装饰元素",
        "type": "boolean",
        "default": true,
        "desc": "手绘装饰与贴纸标签的显示/隐藏",
        "publicKey": "showDecor",
        "publicLabel": "装饰元素",
        "description": "手绘装饰与贴纸标签的显示/隐藏"
      }
    ],
    "defaultProps": {
      "backgroundTheme": "primary",
      "mediaCount": 2,
      "stageCount": 3,
      "metricCount": 2,
      "showValueLabels": true,
      "showBadge": true,
      "focusEnabled": true,
      "focusIndex": 2,
      "showDecor": true,
      "eyebrow": "Perplexity Case",
      "kicker": "案例卡",
      "headline": "AI 搜索入口",
      "company": "Perplexity",
      "tag": "AI 搜索",
      "caption": "Perplexity 代表 AI 搜索与答案引擎方向——机会在于 <b>重构信息入口</b>，挑战是内容版权与用户留存。",
      "funnelTitle": "从流量到订阅的转化漏斗",
      "badgeValue": "4800万",
      "badgeLabel": "Monthly Active Users",
      "stages": [
        {
          "k": "月活用户",
          "note": "Monthly Active",
          "v": "4800",
          "unit": "万",
          "w": 100
        },
        {
          "k": "高频提问",
          "note": "High-intent",
          "v": "58",
          "unit": "%",
          "w": 64
        },
        {
          "k": "订阅转化",
          "note": "Paid Conversion",
          "v": "5.8",
          "unit": "%",
          "w": 34
        },
        {
          "k": "年度续订",
          "note": "Renewal",
          "v": "74",
          "unit": "%",
          "w": 22
        }
      ],
      "hero": {
        "0": [],
        "1": [
          {
            "l": 90,
            "t": 50,
            "box": 540,
            "r": -2,
            "ratio": 1.2,
            "sr": -4,
            "z": 1,
            "color": "var(--acl-yellow)"
          }
        ],
        "2": [
          {
            "l": 40,
            "t": 20,
            "box": 500,
            "r": -3,
            "ratio": 1.12,
            "sr": -4,
            "z": 1,
            "color": "var(--acl-yellow)"
          },
          {
            "l": 410,
            "t": 380,
            "box": 300,
            "r": 5,
            "ratio": 0.82,
            "sr": 4,
            "z": 2,
            "color": "var(--acl-blue)"
          }
        ],
        "3": [
          {
            "l": 30,
            "t": 0,
            "box": 470,
            "r": -3,
            "ratio": 1.08,
            "sr": -4,
            "z": 1,
            "color": "var(--acl-yellow)"
          },
          {
            "l": 430,
            "t": 50,
            "box": 250,
            "r": 5,
            "ratio": 0.8,
            "sr": 4,
            "z": 2,
            "color": "var(--acl-blue)"
          },
          {
            "l": 400,
            "t": 400,
            "box": 280,
            "r": 4,
            "ratio": 1.05,
            "sr": -3,
            "z": 3,
            "color": "var(--acl-pink)"
          }
        ]
      },
      "metrics": [
        {
          "k": "最大单笔融资",
          "v": "5.2",
          "unit": "亿"
        },
        {
          "k": "赛道",
          "v": "AI 搜索"
        },
        {
          "k": "订阅转化率",
          "v": "5.8",
          "unit": "%"
        }
      ],
      "closingLine": "新入口，要用留存证明价值。"
    }
  },
  {
    "key": "theme08_page065",
    "themeKey": "theme08",
    "pageNumber": 65,
    "layout": "THEME08-065",
    "slot": "p68",
    "label": "(68) 案例卡 · Databricks",
    "bgClass": "",
    "controls": [
      {
        "key": "backgroundTheme",
        "label": "背景主题",
        "type": "enum",
        "default": "primary",
        "options": [
          "primary",
          "muted"
        ],
        "desc": "主色(电光黄) 或 次色(淡紫灰) 底色",
        "publicKey": "backgroundTheme",
        "publicLabel": "背景主题",
        "description": "主色(电光黄) 或 次色(淡紫灰) 底色"
      },
      {
        "key": "layerCount",
        "label": "层级数量",
        "type": "number",
        "default": 4,
        "min": 2,
        "max": 5,
        "step": 1,
        "desc": "平台层带数量(2–5)",
        "publicKey": "layerCount",
        "publicLabel": "层级数量",
        "description": "平台层带数量(2–5)"
      },
      {
        "key": "mediaCount",
        "label": "图片数量",
        "type": "number",
        "default": 2,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "前 N 个层带改为承载图片缩略图(0–4，超过层数自动封顶)；每张按上传图片比例自适应",
        "publicKey": "mediaCount",
        "publicLabel": "图片数量",
        "description": "前 N 个层带改为承载图片缩略图(0–4，超过层数自动封顶)；每张按上传图片比例自适应"
      },
      {
        "key": "showMeter",
        "label": "占用计量",
        "type": "boolean",
        "default": true,
        "desc": "各层带的采用率/占用比例条 显隐",
        "publicKey": "showMeter",
        "publicLabel": "占用计量",
        "description": "各层带的采用率/占用比例条 显隐"
      },
      {
        "key": "metricCount",
        "label": "指标数量",
        "type": "number",
        "default": 3,
        "min": 2,
        "max": 3,
        "step": 1,
        "desc": "左侧大数字下方支撑指标格数量(2–3)",
        "publicKey": "metricCount",
        "publicLabel": "指标数量",
        "description": "左侧大数字下方支撑指标格数量(2–3)"
      },
      {
        "key": "focusEnabled",
        "label": "重点强调",
        "type": "boolean",
        "default": true,
        "desc": "是否突出某一个平台层带",
        "publicKey": "focusEnabled",
        "publicLabel": "重点强调",
        "description": "是否突出某一个平台层带"
      },
      {
        "key": "focusIndex",
        "label": "重点对象",
        "type": "number",
        "default": 3,
        "min": 0,
        "step": 1,
        "desc": "被突出的层带序号(从 0 起)",
        "publicKey": "focusIndex",
        "publicLabel": "重点对象",
        "description": "被突出的层带序号(从 0 起)"
      },
      {
        "key": "showDecor",
        "label": "装饰元素",
        "type": "boolean",
        "default": true,
        "desc": "手绘装饰与贴纸标签的显示/隐藏",
        "publicKey": "showDecor",
        "publicLabel": "装饰元素",
        "description": "手绘装饰与贴纸标签的显示/隐藏"
      }
    ],
    "defaultProps": {
      "backgroundTheme": "primary",
      "layerCount": 4,
      "mediaCount": 2,
      "showMeter": true,
      "metricCount": 3,
      "focusEnabled": true,
      "focusIndex": 3,
      "showDecor": true,
      "eyebrow": "Databricks Case",
      "kicker": "案例卡",
      "headline": "数据平台延展",
      "company": "Databricks",
      "tag": "数据平台",
      "caption": "Databricks 是数据平台向 AI 平台延展的典型——<b>存量客户基础</b>是 AI 商业化的捷径。",
      "bigLabel": "净收入留存 NRR",
      "bigNumber": "132",
      "bigUnit": "%",
      "metrics": [
        {
          "k": "最大单笔融资",
          "v": "5.0",
          "unit": "亿"
        },
        {
          "k": "企业客户",
          "v": "1.1",
          "unit": "万家"
        },
        {
          "k": "赛道",
          "v": "数据平台"
        }
      ],
      "layersTitle": "从数据平台到 AI 平台",
      "layers": [
        {
          "label": "数据湖仓",
          "en": "Lakehouse",
          "meter": 96,
          "value": "底座",
          "unit": ""
        },
        {
          "label": "数据治理",
          "en": "Governance",
          "meter": 82,
          "value": "82",
          "unit": "%"
        },
        {
          "label": "机器学习平台",
          "en": "ML Platform",
          "meter": 68,
          "value": "68",
          "unit": "%"
        },
        {
          "label": "生成式 AI",
          "en": "Mosaic AI",
          "meter": 54,
          "value": "54",
          "unit": "%"
        },
        {
          "label": "应用与智能体",
          "en": "Apps & Agents",
          "meter": 31,
          "value": "31",
          "unit": "%"
        }
      ],
      "closingLine": "存量客户基础，是 AI 商业化的捷径。"
    }
  },
  {
    "key": "theme08_page066",
    "themeKey": "theme08",
    "pageNumber": 66,
    "layout": "THEME08-066",
    "slot": "p69",
    "label": "(69) 案例卡 · Glean",
    "bgClass": "",
    "controls": [
      {
        "key": "backgroundTheme",
        "label": "背景主题",
        "type": "enum",
        "default": "primary",
        "options": [
          "primary",
          "muted"
        ],
        "desc": "主色(电光黄) 或 次色(淡紫灰) 底色",
        "publicKey": "backgroundTheme",
        "publicLabel": "背景主题",
        "description": "主色(电光黄) 或 次色(淡紫灰) 底色"
      },
      {
        "key": "mediaCount",
        "label": "图片数量",
        "type": "number",
        "default": 2,
        "min": 0,
        "max": 3,
        "step": 1,
        "desc": "特写图片数量(0–3)：1 主视觉 + 至多 2 张嵌套；每张按上传图片比例自适应",
        "publicKey": "mediaCount",
        "publicLabel": "图片数量",
        "description": "特写图片数量(0–3)：1 主视觉 + 至多 2 张嵌套；每张按上传图片比例自适应"
      },
      {
        "key": "sourceCount",
        "label": "来源数量",
        "type": "number",
        "default": 5,
        "min": 2,
        "max": 5,
        "step": 1,
        "desc": "左侧被汇聚的来源卡数量(2–5)",
        "publicKey": "sourceCount",
        "publicLabel": "来源数量",
        "description": "左侧被汇聚的来源卡数量(2–5)"
      },
      {
        "key": "metricCount",
        "label": "指标数量",
        "type": "number",
        "default": 3,
        "min": 2,
        "max": 3,
        "step": 1,
        "desc": "底部支撑指标格数量(2–3)",
        "publicKey": "metricCount",
        "publicLabel": "指标数量",
        "description": "底部支撑指标格数量(2–3)"
      },
      {
        "key": "showValueLabels",
        "label": "数值标签",
        "type": "boolean",
        "default": true,
        "desc": "来源卡占比数值与比例条 显隐",
        "publicKey": "showValueLabels",
        "publicLabel": "数值标签",
        "description": "来源卡占比数值与比例条 显隐"
      },
      {
        "key": "showBadge",
        "label": "高亮徽标",
        "type": "boolean",
        "default": true,
        "desc": "主视觉上的大号高亮数字徽标 显隐",
        "publicKey": "showBadge",
        "publicLabel": "高亮徽标",
        "description": "主视觉上的大号高亮数字徽标 显隐"
      },
      {
        "key": "showConverge",
        "label": "汇聚箭头",
        "type": "boolean",
        "default": true,
        "desc": "由来源指向主视觉的手绘汇聚箭头 显隐",
        "publicKey": "showConverge",
        "publicLabel": "汇聚箭头",
        "description": "由来源指向主视觉的手绘汇聚箭头 显隐"
      },
      {
        "key": "focusEnabled",
        "label": "重点强调",
        "type": "boolean",
        "default": true,
        "desc": "是否突出某一张来源卡",
        "publicKey": "focusEnabled",
        "publicLabel": "重点强调",
        "description": "是否突出某一张来源卡"
      },
      {
        "key": "focusIndex",
        "label": "重点对象",
        "type": "number",
        "default": 0,
        "min": 0,
        "step": 1,
        "desc": "被突出的来源卡序号(从 0 起)",
        "publicKey": "focusIndex",
        "publicLabel": "重点对象",
        "description": "被突出的来源卡序号(从 0 起)"
      },
      {
        "key": "showDecor",
        "label": "装饰元素",
        "type": "boolean",
        "default": true,
        "desc": "手绘装饰与贴纸标签的显示/隐藏",
        "publicKey": "showDecor",
        "publicLabel": "装饰元素",
        "description": "手绘装饰与贴纸标签的显示/隐藏"
      }
    ],
    "defaultProps": {
      "backgroundTheme": "primary",
      "mediaCount": 2,
      "sourceCount": 5,
      "metricCount": 3,
      "showValueLabels": true,
      "showBadge": true,
      "showConverge": true,
      "focusEnabled": true,
      "focusIndex": 0,
      "showDecor": true,
      "eyebrow": "Glean Case",
      "kicker": "案例卡",
      "headline": "企业知识入口",
      "company": "Glean",
      "tag": "企业搜索",
      "caption": "Glean 把散落在各系统里的知识，<b>汇聚成一个统一入口</b>——接入知识库后，企业搜索会成为高频工作入口。",
      "sourcesTitle": "被汇聚的知识来源",
      "badgeValue": "780",
      "badgeUnit": "家",
      "badgeLabel": "Paying Customers",
      "sources": [
        {
          "label": "文档与云盘",
          "note": "Docs & Drive",
          "v": 34,
          "unit": "%"
        },
        {
          "label": "邮件与日历",
          "note": "Mail & Calendar",
          "v": 22,
          "unit": "%"
        },
        {
          "label": "IM 与会议",
          "note": "Chat & Meetings",
          "v": 19,
          "unit": "%"
        },
        {
          "label": "工单与项目",
          "note": "Tickets & Tasks",
          "v": 15,
          "unit": "%"
        },
        {
          "label": "代码与知识库",
          "note": "Code & Wiki",
          "v": 10,
          "unit": "%"
        }
      ],
      "hero": {
        "0": [],
        "1": [
          {
            "l": 70,
            "t": 30,
            "box": 520,
            "r": -2,
            "ratio": 1.18,
            "sr": -4,
            "z": 1,
            "color": "var(--acl-yellow)"
          }
        ],
        "2": [
          {
            "l": 24,
            "t": 0,
            "box": 450,
            "r": -3,
            "ratio": 1.12,
            "sr": -4,
            "z": 1,
            "color": "var(--acl-yellow)"
          },
          {
            "l": 360,
            "t": 290,
            "box": 280,
            "r": 5,
            "ratio": 0.85,
            "sr": 4,
            "z": 2,
            "color": "var(--acl-blue)"
          }
        ],
        "3": [
          {
            "l": 18,
            "t": 0,
            "box": 410,
            "r": -3,
            "ratio": 1.06,
            "sr": -4,
            "z": 1,
            "color": "var(--acl-yellow)"
          },
          {
            "l": 388,
            "t": 16,
            "box": 230,
            "r": 5,
            "ratio": 0.8,
            "sr": 4,
            "z": 2,
            "color": "var(--acl-blue)"
          },
          {
            "l": 350,
            "t": 300,
            "box": 270,
            "r": 4,
            "ratio": 1.02,
            "sr": -3,
            "z": 3,
            "color": "var(--acl-pink)"
          }
        ]
      },
      "metrics": [
        {
          "k": "最大单笔融资",
          "v": "2.6",
          "unit": "亿"
        },
        {
          "k": "续约率",
          "v": "91",
          "unit": "%"
        },
        {
          "k": "赛道",
          "v": "企业搜索"
        }
      ],
      "closingLine": "窄场景也能产生高价值。"
    }
  },
  {
    "key": "theme08_page067",
    "themeKey": "theme08",
    "pageNumber": 67,
    "layout": "THEME08-067",
    "slot": "p71",
    "label": "(71) 案例卡 · SSI",
    "bgClass": "",
    "controls": [
      {
        "key": "backgroundTheme",
        "label": "背景主题",
        "type": "enum",
        "default": "muted",
        "options": [
          "primary",
          "muted"
        ],
        "desc": "主色(电光黄) 或 次色(淡紫灰) 底色",
        "publicKey": "backgroundTheme",
        "publicLabel": "背景主题",
        "description": "主色(电光黄) 或 次色(淡紫灰) 底色"
      },
      {
        "key": "mediaCount",
        "label": "图片数量",
        "type": "number",
        "default": 2,
        "min": 0,
        "max": 2,
        "step": 1,
        "desc": "特写图片数量(0–2)：1 主视觉 + 至多 1 张嵌套；为 0 时显示抽象意象占位，每张按上传图片比例自适应",
        "publicKey": "mediaCount",
        "publicLabel": "图片数量",
        "description": "特写图片数量(0–2)：1 主视觉 + 至多 1 张嵌套；为 0 时显示抽象意象占位，每张按上传图片比例自适应"
      },
      {
        "key": "gaugeCount",
        "label": "量表数量",
        "type": "number",
        "default": 4,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "右侧强弱量表数量(2–4)",
        "publicKey": "gaugeCount",
        "publicLabel": "量表数量",
        "description": "右侧强弱量表数量(2–4)"
      },
      {
        "key": "metricCount",
        "label": "指标数量",
        "type": "number",
        "default": 3,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "底部支撑指标格数量(2–4)",
        "publicKey": "metricCount",
        "publicLabel": "指标数量",
        "description": "底部支撑指标格数量(2–4)"
      },
      {
        "key": "showValueLabels",
        "label": "数值标签",
        "type": "boolean",
        "default": true,
        "desc": "量表右侧百分比数值 显隐",
        "publicKey": "showValueLabels",
        "publicLabel": "数值标签",
        "description": "量表右侧百分比数值 显隐"
      },
      {
        "key": "focusEnabled",
        "label": "重点强调",
        "type": "boolean",
        "default": true,
        "desc": "是否突出某一条量表",
        "publicKey": "focusEnabled",
        "publicLabel": "重点强调",
        "description": "是否突出某一条量表"
      },
      {
        "key": "focusIndex",
        "label": "重点对象",
        "type": "number",
        "default": 2,
        "min": 0,
        "step": 1,
        "desc": "被突出的量表序号(从 0 起)",
        "publicKey": "focusIndex",
        "publicLabel": "重点对象",
        "description": "被突出的量表序号(从 0 起)"
      },
      {
        "key": "showDecor",
        "label": "装饰元素",
        "type": "boolean",
        "default": true,
        "desc": "手绘装饰与贴纸标签的显示/隐藏",
        "publicKey": "showDecor",
        "publicLabel": "装饰元素",
        "description": "手绘装饰与贴纸标签的显示/隐藏"
      }
    ],
    "defaultProps": {
      "backgroundTheme": "muted",
      "mediaCount": 2,
      "gaugeCount": 4,
      "metricCount": 3,
      "showValueLabels": true,
      "focusEnabled": true,
      "focusIndex": 2,
      "showDecor": true,
      "eyebrow": "SSI Case",
      "kicker": "案例卡",
      "headline": "强叙事模型实验室",
      "company": "SSI",
      "tag": "安全智能",
      "caption": "SSI 代表强团队、强叙事、弱商业化验证的模型实验室——短期难以用收入评价，价值建立在 <b>长期技术想象</b> 上。",
      "gaugesTitle": "强在哪里 · 缺在哪里",
      "gauges": [
        {
          "label": "团队与人才",
          "note": "Team & Talent",
          "fill": 92,
          "tone": "high"
        },
        {
          "label": "技术叙事",
          "note": "Narrative",
          "fill": 88,
          "tone": "high"
        },
        {
          "label": "商业化兑现",
          "note": "Revenue Proof",
          "fill": 6,
          "tone": "low"
        },
        {
          "label": "产品落地",
          "note": "Product Shipped",
          "fill": 14,
          "tone": "low"
        }
      ],
      "hero": {
        "0": [],
        "1": [
          {
            "l": 60,
            "t": 40,
            "box": 480,
            "r": -2,
            "ratio": 1.08,
            "sr": -4,
            "z": 2,
            "color": "var(--acl-yellow)"
          }
        ],
        "2": [
          {
            "l": 20,
            "t": 10,
            "box": 420,
            "r": -3,
            "ratio": 1,
            "sr": -4,
            "z": 2,
            "color": "var(--acl-yellow)"
          },
          {
            "l": 330,
            "t": 300,
            "box": 260,
            "r": 5,
            "ratio": 0.86,
            "sr": 4,
            "z": 3,
            "color": "var(--acl-pink)"
          }
        ]
      },
      "metrics": [
        {
          "k": "最大单笔融资",
          "v": "10",
          "unit": "亿"
        },
        {
          "k": "产品收入",
          "v": "0"
        },
        {
          "k": "团队规模",
          "v": "85",
          "unit": "人"
        },
        {
          "k": "赛道",
          "v": "安全智能"
        }
      ],
      "closingLine": "强叙事，需要更长时间兑现。"
    }
  },
  {
    "key": "theme08_page068",
    "themeKey": "theme08",
    "pageNumber": 68,
    "layout": "THEME08-068",
    "slot": "p73",
    "label": "(73) 收入兑现 · Revenue",
    "bgClass": "",
    "controls": [
      {
        "key": "backgroundTheme",
        "label": "背景主题",
        "type": "enum",
        "default": "primary",
        "options": [
          "primary",
          "muted"
        ],
        "desc": "主色(电光黄) 或 次色(淡紫灰) 底色",
        "publicKey": "backgroundTheme",
        "publicLabel": "背景主题",
        "description": "主色(电光黄) 或 次色(淡紫灰) 底色"
      },
      {
        "key": "chartType",
        "label": "图表类型",
        "type": "enum",
        "default": "funnel",
        "options": [
          "funnel",
          "bars"
        ],
        "desc": "阶梯呈现：几何收窄漏斗(funnel) / 按数值缩放条(bars)",
        "publicKey": "chartType",
        "publicLabel": "图表类型",
        "description": "阶梯呈现：几何收窄漏斗(funnel) / 按数值缩放条(bars)"
      },
      {
        "key": "stageCount",
        "label": "阶段数量",
        "type": "number",
        "default": 4,
        "min": 3,
        "max": 5,
        "step": 1,
        "desc": "收入兑现路径的阶段数量(3–5)",
        "publicKey": "stageCount",
        "publicLabel": "阶段数量",
        "description": "收入兑现路径的阶段数量(3–5)"
      },
      {
        "key": "mediaCount",
        "label": "图片数量",
        "type": "number",
        "default": 1,
        "min": 0,
        "max": 2,
        "step": 1,
        "desc": "左侧配图槽数量(0–2)；为 0 时自动收起，每张按上传图片比例自适应",
        "publicKey": "mediaCount",
        "publicLabel": "图片数量",
        "description": "左侧配图槽数量(0–2)；为 0 时自动收起，每张按上传图片比例自适应"
      },
      {
        "key": "showValueLabels",
        "label": "数值标签",
        "type": "boolean",
        "default": true,
        "desc": "阶段转化率与成本结构百分比的显示/隐藏",
        "publicKey": "showValueLabels",
        "publicLabel": "数值标签",
        "description": "阶段转化率与成本结构百分比的显示/隐藏"
      },
      {
        "key": "metricCount",
        "label": "指标数量",
        "type": "number",
        "default": 3,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "面板底部支撑指标格数量(2–4)",
        "publicKey": "metricCount",
        "publicLabel": "指标数量",
        "description": "面板底部支撑指标格数量(2–4)"
      },
      {
        "key": "focusEnabled",
        "label": "重点强调",
        "type": "boolean",
        "default": true,
        "desc": "是否高亮某个转化阶段(其余淡化)",
        "publicKey": "focusEnabled",
        "publicLabel": "重点强调",
        "description": "是否高亮某个转化阶段(其余淡化)"
      },
      {
        "key": "focusIndex",
        "label": "重点对象",
        "type": "number",
        "default": 2,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "被高亮的阶段序号(从 0 起)",
        "publicKey": "focusIndex",
        "publicLabel": "重点对象",
        "description": "被高亮的阶段序号(从 0 起)"
      },
      {
        "key": "showDecor",
        "label": "装饰元素",
        "type": "boolean",
        "default": true,
        "desc": "手绘箭头、火花与贴纸标签 显隐",
        "publicKey": "showDecor",
        "publicLabel": "装饰元素",
        "description": "手绘箭头、火花与贴纸标签 显隐"
      }
    ],
    "defaultProps": {
      "backgroundTheme": "primary",
      "chartType": "funnel",
      "stageCount": 4,
      "mediaCount": 1,
      "showValueLabels": true,
      "metricCount": 3,
      "focusEnabled": true,
      "focusIndex": 2,
      "showDecor": true,
      "eyebrow": "Revenue Risk",
      "headline": "从试点到稳定收入",
      "subheadline": "风险：收入验证",
      "summary": "多数 AI 公司需要证明能从试点项目<b>转向稳定订阅收入</b>。",
      "ladderTitle": "收入兑现路径",
      "stages": [
        {
          "k": "试点接入",
          "en": "Pilot",
          "pct": 100,
          "drop": "POC 启动"
        },
        {
          "k": "完成验证",
          "en": "Validated",
          "pct": 62,
          "drop": "验证流失 38%"
        },
        {
          "k": "付费转化",
          "en": "Paid",
          "pct": 28,
          "drop": "仅 28% 转付费"
        },
        {
          "k": "年度留存",
          "en": "Retention",
          "pct": 83,
          "drop": "年流失 17%"
        },
        {
          "k": "席位扩张",
          "en": "Expansion",
          "pct": 112,
          "drop": ""
        }
      ],
      "marginTitle": "毛利体检",
      "marginHero": {
        "label": "毛利率中位数",
        "value": "54",
        "unit": "%"
      },
      "costBar": {
        "title": "收入结构拆解 · 推理成本侵蚀",
        "segments": [
          {
            "k": "毛利",
            "v": 54,
            "color": "var(--acl-yellow)"
          },
          {
            "k": "推理成本",
            "v": 31,
            "color": "var(--acl-pink)"
          },
          {
            "k": "其他成本",
            "v": 15,
            "color": "var(--acl-blue)"
          }
        ]
      },
      "metrics": [
        {
          "k": "试点转付费率",
          "v": "28",
          "unit": "%"
        },
        {
          "k": "企业年流失率",
          "v": "17",
          "unit": "%"
        },
        {
          "k": "推理成本占收入",
          "v": "31",
          "unit": "%"
        },
        {
          "k": "毛利率中位数",
          "v": "54",
          "unit": "%"
        }
      ],
      "mediaRail": {
        "0": [],
        "1": [
          {
            "box": 320,
            "r": -3,
            "ratio": 0.82,
            "sr": -4
          }
        ],
        "2": [
          {
            "box": 250,
            "r": -3,
            "ratio": 0.82,
            "sr": -4
          },
          {
            "box": 220,
            "r": 4,
            "ratio": 1.18,
            "sr": 4
          }
        ]
      },
      "closingLine": "客户试点不等于商业化成功。"
    }
  },
  {
    "key": "theme08_page069",
    "themeKey": "theme08",
    "pageNumber": 69,
    "layout": "THEME08-069",
    "slot": "p74",
    "label": "(74) 合规台账 · Regulation",
    "bgClass": "",
    "controls": [
      {
        "key": "backgroundTheme",
        "label": "背景主题",
        "type": "enum",
        "default": "muted",
        "options": [
          "primary",
          "muted"
        ],
        "desc": "主色(电光黄) 或 次色(淡紫灰) 底色",
        "publicKey": "backgroundTheme",
        "publicLabel": "背景主题",
        "description": "主色(电光黄) 或 次色(淡紫灰) 底色"
      },
      {
        "key": "showFlow",
        "label": "流程链",
        "type": "boolean",
        "default": true,
        "desc": "顶部交付链流程带的显示/隐藏",
        "publicKey": "showFlow",
        "publicLabel": "流程链",
        "description": "顶部交付链流程带的显示/隐藏"
      },
      {
        "key": "flowStageCount",
        "label": "流程阶段",
        "type": "number",
        "default": 5,
        "min": 3,
        "max": 5,
        "step": 1,
        "desc": "交付链的阶段数量(3–5)",
        "publicKey": "stepCount",
        "publicLabel": "流程阶段",
        "description": "交付链的阶段数量(3–5)"
      },
      {
        "key": "rowCount",
        "label": "行数",
        "type": "number",
        "default": 4,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "展示的状态维度行数(2–4)",
        "publicKey": "rowCount",
        "publicLabel": "行数",
        "description": "展示的状态维度行数(2–4)"
      },
      {
        "key": "showDelta",
        "label": "趋势列",
        "type": "boolean",
        "default": true,
        "desc": "上升/下降趋势徽标列的显示/隐藏",
        "publicKey": "showDelta",
        "publicLabel": "趋势列",
        "description": "上升/下降趋势徽标列的显示/隐藏"
      },
      {
        "key": "showRating",
        "label": "状态等级",
        "type": "boolean",
        "default": true,
        "desc": "状态等级菱形评级列的显示/隐藏",
        "publicKey": "showStatusRating",
        "publicLabel": "状态等级",
        "description": "状态等级菱形评级列的显示/隐藏"
      },
      {
        "key": "focusEnabled",
        "label": "重点强调",
        "type": "boolean",
        "default": true,
        "desc": "是否高亮某一行",
        "publicKey": "focusEnabled",
        "publicLabel": "重点强调",
        "description": "是否高亮某一行"
      },
      {
        "key": "focusIndex",
        "label": "重点对象",
        "type": "number",
        "default": 2,
        "min": 0,
        "max": 3,
        "step": 1,
        "desc": "被高亮的行序号(从 0 起)",
        "publicKey": "focusIndex",
        "publicLabel": "重点对象",
        "description": "被高亮的行序号(从 0 起)"
      },
      {
        "key": "showDecor",
        "label": "装饰元素",
        "type": "boolean",
        "default": true,
        "desc": "手绘装饰与贴纸标签 显隐",
        "publicKey": "showDecor",
        "publicLabel": "装饰元素",
        "description": "手绘装饰与贴纸标签 显隐"
      }
    ],
    "defaultProps": {
      "backgroundTheme": "muted",
      "showFlow": true,
      "flowStageCount": 5,
      "rowCount": 4,
      "showDelta": true,
      "showRating": true,
      "focusEnabled": true,
      "focusIndex": 2,
      "showDecor": true,
      "eyebrow": "Regulation Risk",
      "headline": "隐私、版权与安全",
      "subheadline": "风险：监管合规",
      "summary": "隐私、版权、安全与行业监管会<b>增加交付成本</b>。",
      "kpis": [
        {
          "k": "合规团队增长",
          "v": "+42",
          "unit": "%"
        },
        {
          "k": "采购审查周期",
          "v": "+36",
          "unit": "%"
        },
        {
          "k": "数据隔离需求",
          "v": "58",
          "unit": "%"
        },
        {
          "k": "版权风险事件",
          "v": "19",
          "unit": "起"
        }
      ],
      "flowTitle": "合规交付链",
      "flow": [
        {
          "k": "数据采集",
          "en": "Ingest"
        },
        {
          "k": "隐私隔离",
          "en": "Isolation"
        },
        {
          "k": "版权审查",
          "en": "IP Review"
        },
        {
          "k": "安全合规",
          "en": "Compliance"
        },
        {
          "k": "审计追溯",
          "en": "Audit"
        }
      ],
      "tags": [
        "隐私",
        "版权",
        "内容安全",
        "行业监管",
        "数据驻留"
      ],
      "columnLabels": [
        "风险维度",
        "模拟数据",
        "趋势",
        "风险等级"
      ],
      "rows": [
        {
          "dim": "合规团队",
          "en": "Compliance Team",
          "fig": "42",
          "unit": "%",
          "up": true,
          "delta": "+42%",
          "rate": 3,
          "rateLabel": "高"
        },
        {
          "dim": "采购审查",
          "en": "Procurement",
          "fig": "36",
          "unit": "%",
          "up": true,
          "delta": "+36%",
          "rate": 3,
          "rateLabel": "高"
        },
        {
          "dim": "数据隔离需求",
          "en": "Data Isolation",
          "fig": "58",
          "unit": "%",
          "up": true,
          "delta": "+58%",
          "rate": 3,
          "rateLabel": "高"
        },
        {
          "dim": "版权风险事件",
          "en": "IP Incidents",
          "fig": "19",
          "unit": "起",
          "up": true,
          "delta": "↑ 同比",
          "rate": 2,
          "rateLabel": "中"
        }
      ],
      "closingLine": "合规能力会成为企业采购门槛。"
    }
  },
  {
    "key": "theme08_page070",
    "themeKey": "theme08",
    "pageNumber": 70,
    "layout": "THEME08-070",
    "slot": "p76",
    "label": "(76) 壁垒压缩 · Squeeze",
    "bgClass": "",
    "controls": [
      {
        "key": "backgroundTheme",
        "label": "背景主题",
        "type": "enum",
        "default": "primary",
        "options": [
          "primary",
          "muted"
        ],
        "desc": "主色(电光黄) 或 次色(淡紫灰) 底色",
        "publicKey": "backgroundTheme",
        "publicLabel": "背景主题",
        "description": "主色(电光黄) 或 次色(淡紫灰) 底色"
      },
      {
        "key": "chartType",
        "label": "图表类型",
        "type": "enum",
        "default": "pincer",
        "options": [
          "pincer",
          "bars"
        ],
        "desc": "竞争格局：夹击压缩(pincer) / 压力指标条(bars)",
        "publicKey": "chartType",
        "publicLabel": "图表类型",
        "description": "竞争格局：夹击压缩(pincer) / 压力指标条(bars)"
      },
      {
        "key": "segmentCount",
        "label": "指标数量",
        "type": "number",
        "default": 3,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "压力指标数量(2–4)",
        "publicKey": "segmentCount",
        "publicLabel": "指标数量",
        "description": "压力指标数量(2–4)"
      },
      {
        "key": "showThreshold",
        "label": "临界线",
        "type": "boolean",
        "default": true,
        "desc": "压力条上的临界阈值虚线 显隐",
        "publicKey": "showThreshold",
        "publicLabel": "临界线",
        "description": "压力条上的临界阈值虚线 显隐"
      },
      {
        "key": "showValueLabels",
        "label": "数值标签",
        "type": "boolean",
        "default": true,
        "desc": "各压力指标百分比标签 显隐",
        "publicKey": "showValueLabels",
        "publicLabel": "数值标签",
        "description": "各压力指标百分比标签 显隐"
      },
      {
        "key": "metricCount",
        "label": "指标数量",
        "type": "number",
        "default": 3,
        "min": 2,
        "max": 3,
        "step": 1,
        "desc": "面板底部支撑指标格数量(2–3)",
        "publicKey": "metricCount",
        "publicLabel": "指标数量",
        "description": "面板底部支撑指标格数量(2–3)"
      },
      {
        "key": "focusEnabled",
        "label": "重点强调",
        "type": "boolean",
        "default": true,
        "desc": "是否高亮某个压力指标(其余淡化)",
        "publicKey": "focusEnabled",
        "publicLabel": "重点强调",
        "description": "是否高亮某个压力指标(其余淡化)"
      },
      {
        "key": "focusIndex",
        "label": "重点对象",
        "type": "number",
        "default": 0,
        "min": 0,
        "max": 3,
        "step": 1,
        "desc": "被高亮的压力指标序号(从 0 起)",
        "publicKey": "focusIndex",
        "publicLabel": "重点对象",
        "description": "被高亮的压力指标序号(从 0 起)"
      },
      {
        "key": "showDecor",
        "label": "装饰元素",
        "type": "boolean",
        "default": true,
        "desc": "手绘装饰与贴纸标签 显隐",
        "publicKey": "showDecor",
        "publicLabel": "装饰元素",
        "description": "手绘装饰与贴纸标签 显隐"
      }
    ],
    "defaultProps": {
      "backgroundTheme": "primary",
      "chartType": "pincer",
      "segmentCount": 3,
      "showThreshold": true,
      "showValueLabels": true,
      "metricCount": 3,
      "focusEnabled": true,
      "focusIndex": 0,
      "showDecor": true,
      "eyebrow": "Open Source Risk",
      "headline": "壁垒被压缩",
      "subheadline": "风险：开源与大厂竞争",
      "summary": "开源模型降低能力门槛，大厂生态<b>压缩初创独立空间</b>。",
      "leftWall": {
        "tag": "Open Source",
        "name": "开源社区",
        "v": 86
      },
      "rightWall": {
        "tag": "Incumbents",
        "name": "大厂生态",
        "v": 72
      },
      "coreLabel": "被夹击的",
      "coreValue": 34,
      "threshold": 75,
      "pressures": [
        {
          "k": "开源性能逼近",
          "en": "OSS Parity",
          "v": 86
        },
        {
          "k": "大厂产品覆盖",
          "en": "Incumbent Coverage",
          "v": 72
        },
        {
          "k": "企业自建意愿",
          "en": "Build In-House",
          "v": 34
        },
        {
          "k": "价格战压力",
          "en": "Price Pressure",
          "v": 58
        }
      ],
      "metrics": [
        {
          "k": "开源性能逼近",
          "v": "86",
          "unit": "%"
        },
        {
          "k": "大厂产品覆盖",
          "v": "72",
          "unit": "%"
        },
        {
          "k": "企业自建意愿",
          "v": "34",
          "unit": "%"
        }
      ],
      "closingLine": "没有壁垒的模型能力会迅速商品化。"
    }
  },
  {
    "key": "theme08_page071",
    "themeKey": "theme08",
    "pageNumber": 71,
    "layout": "THEME08-071",
    "slot": "p77",
    "label": "(77) 策略卡 · Budget",
    "bgClass": "",
    "controls": [
      {
        "key": "backgroundTheme",
        "label": "背景主题",
        "type": "enum",
        "default": "primary",
        "options": [
          "primary",
          "muted"
        ],
        "desc": "主色(电光黄) 或 次色(淡紫灰) 底色",
        "publicKey": "backgroundTheme",
        "publicLabel": "背景主题",
        "description": "主色(电光黄) 或 次色(淡紫灰) 底色"
      },
      {
        "key": "cardCount",
        "label": "方向卡数量",
        "type": "number",
        "default": 4,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "推荐方向卡数量(2–4)，网格随数量自动布局",
        "publicKey": "cardCount",
        "publicLabel": "方向卡数量",
        "description": "推荐方向卡数量(2–4)，网格随数量自动布局"
      },
      {
        "key": "showChecklist",
        "label": "筛选面板",
        "type": "boolean",
        "default": true,
        "desc": "左侧筛选指标清单面板 显隐",
        "publicKey": "showChecklist",
        "publicLabel": "筛选面板",
        "description": "左侧筛选指标清单面板 显隐"
      },
      {
        "key": "criteriaCount",
        "label": "筛选指标数",
        "type": "number",
        "default": 4,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "筛选清单行数(2–4)",
        "publicKey": "criteriaCount",
        "publicLabel": "筛选指标数",
        "description": "筛选清单行数(2–4)"
      },
      {
        "key": "focusEnabled",
        "label": "重点强调",
        "type": "boolean",
        "default": true,
        "desc": "是否突出某一张方向卡(其余淡化)",
        "publicKey": "focusEnabled",
        "publicLabel": "重点强调",
        "description": "是否突出某一张方向卡(其余淡化)"
      },
      {
        "key": "focusIndex",
        "label": "重点对象",
        "type": "number",
        "default": 0,
        "min": 0,
        "max": 3,
        "step": 1,
        "desc": "被突出的方向卡序号(从 0 起)",
        "publicKey": "focusIndex",
        "publicLabel": "重点对象",
        "description": "被突出的方向卡序号(从 0 起)"
      },
      {
        "key": "showDecor",
        "label": "装饰元素",
        "type": "boolean",
        "default": true,
        "desc": "手绘装饰与贴纸标签 显隐",
        "publicKey": "showDecor",
        "publicLabel": "装饰元素",
        "description": "手绘装饰与贴纸标签 显隐"
      }
    ],
    "defaultProps": {
      "backgroundTheme": "primary",
      "cardCount": 4,
      "criteriaCount": 4,
      "showChecklist": true,
      "focusEnabled": true,
      "focusIndex": 0,
      "showDecor": true,
      "eyebrow": "Infrastructure Strategy",
      "headline": "确定性预算",
      "subheadline": "策略 · 优先基础设施",
      "summary": "基础设施更接近 <b>刚性预算</b>，收入确定性相对更强。",
      "checklistTitle": "筛选指标 · Screening",
      "criteria": [
        {
          "name": "收入增速",
          "en": "Revenue Growth"
        },
        {
          "name": "毛利率",
          "en": "Gross Margin"
        },
        {
          "name": "客户集中度",
          "en": "Concentration"
        },
        {
          "name": "资源锁定",
          "en": "Resource Lock-in"
        }
      ],
      "directions": [
        {
          "title": "GPU 云",
          "en": "GPU Cloud",
          "note": "训练与推理双重需求，资源锁定即护城河。"
        },
        {
          "title": "数据平台",
          "en": "Data Platform",
          "note": "最接近企业刚性预算，存量客户可复用。"
        },
        {
          "title": "评测工具",
          "en": "Eval & Trust",
          "note": "监管收紧把安全从可选预算变成刚需。"
        },
        {
          "title": "推理优化",
          "en": "Inference",
          "note": "抬高毛利天花板，决定单位经济模型。"
        }
      ],
      "closingLine": "优先看能支撑全行业增长的基础设施。"
    }
  },
  {
    "key": "theme08_page072",
    "themeKey": "theme08",
    "pageNumber": 72,
    "layout": "THEME08-072",
    "slot": "p78",
    "label": "(78) 嵌入流程 · Workflow",
    "bgClass": "",
    "controls": [
      {
        "key": "backgroundTheme",
        "label": "背景主题",
        "type": "enum",
        "default": "muted",
        "options": [
          "primary",
          "muted"
        ],
        "desc": "主色(电光黄) 或 次色(淡紫灰) 底色",
        "publicKey": "backgroundTheme",
        "publicLabel": "背景主题",
        "description": "主色(电光黄) 或 次色(淡紫灰) 底色"
      },
      {
        "key": "stageCount",
        "label": "流程阶段数",
        "type": "number",
        "default": 4,
        "min": 3,
        "max": 5,
        "step": 1,
        "desc": "左侧刚性流程的阶段数量(3–5)",
        "publicKey": "stageCount",
        "publicLabel": "流程阶段数",
        "description": "左侧刚性流程的阶段数量(3–5)"
      },
      {
        "key": "mediaCount",
        "label": "图片数量",
        "type": "number",
        "default": 2,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "场景拼贴图片槽数量(0–4)；布局随数量自动平衡，每槽按上传图片比例自适应",
        "publicKey": "mediaCount",
        "publicLabel": "图片数量",
        "description": "场景拼贴图片槽数量(0–4)；布局随数量自动平衡，每槽按上传图片比例自适应"
      },
      {
        "key": "showScenes",
        "label": "场景标签",
        "type": "boolean",
        "default": true,
        "desc": "右上方落地场景标签行 显隐",
        "publicKey": "showItemTags",
        "publicLabel": "场景标签",
        "description": "右上方落地场景标签行 显隐"
      },
      {
        "key": "sceneCount",
        "label": "场景数量",
        "type": "number",
        "default": 5,
        "min": 2,
        "max": 5,
        "step": 1,
        "desc": "落地场景标签数量(2–5)",
        "publicKey": "contentItemCount",
        "publicLabel": "场景数量",
        "description": "落地场景标签数量(2–5)"
      },
      {
        "key": "metricCount",
        "label": "关注指标数",
        "type": "number",
        "default": 4,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "底部关注指标清单数量(2–4)",
        "publicKey": "metricCount",
        "publicLabel": "关注指标数",
        "description": "底部关注指标清单数量(2–4)"
      },
      {
        "key": "focusEnabled",
        "label": "重点强调",
        "type": "boolean",
        "default": true,
        "desc": "是否突出某一流程阶段为 AI 嵌入点",
        "publicKey": "focusEnabled",
        "publicLabel": "重点强调",
        "description": "是否突出某一流程阶段为 AI 嵌入点"
      },
      {
        "key": "focusIndex",
        "label": "重点对象",
        "type": "number",
        "default": 1,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "被标记为 AI 嵌入点的阶段序号(从 0 起)",
        "publicKey": "focusIndex",
        "publicLabel": "重点对象",
        "description": "被标记为 AI 嵌入点的阶段序号(从 0 起)"
      },
      {
        "key": "showDecor",
        "label": "装饰元素",
        "type": "boolean",
        "default": true,
        "desc": "手绘装饰与贴纸标签 显隐",
        "publicKey": "showDecor",
        "publicLabel": "装饰元素",
        "description": "手绘装饰与贴纸标签 显隐"
      }
    ],
    "defaultProps": {
      "backgroundTheme": "muted",
      "stageCount": 4,
      "mediaCount": 2,
      "sceneCount": 5,
      "metricCount": 4,
      "showScenes": true,
      "focusEnabled": true,
      "focusIndex": 1,
      "showDecor": true,
      "eyebrow": "Vertical Strategy",
      "headline": "嵌入工作流",
      "subheadline": "策略 · 筛选垂直应用",
      "summary": "应用要看是否嵌入 <b>刚性流程</b>，而非只看生成效果。",
      "railTitle": "刚性流程 · Workflow",
      "stages": [
        {
          "name": "数据接入",
          "en": "Intake"
        },
        {
          "name": "流程处理",
          "en": "Process"
        },
        {
          "name": "结果交付",
          "en": "Deliver"
        },
        {
          "name": "计费结算",
          "en": "Billing"
        },
        {
          "name": "复盘优化",
          "en": "Review"
        }
      ],
      "scenes": [
        "法律",
        "医疗",
        "客服",
        "企业搜索",
        "开发者工具"
      ],
      "metrics": [
        {
          "name": "付费留存",
          "en": "Retention"
        },
        {
          "name": "使用频次",
          "en": "Frequency"
        },
        {
          "name": "席位扩张",
          "en": "Seat Expansion"
        },
        {
          "name": "净收入留存",
          "en": "NRR"
        }
      ],
      "collage": {
        "0": [],
        "1": [
          {
            "l": 250,
            "t": 30,
            "box": 400,
            "r": -3,
            "ratio": 1.35,
            "accent": "var(--acl-paper)",
            "ph": "场景图"
          }
        ],
        "2": [
          {
            "l": 40,
            "t": 20,
            "box": 380,
            "r": -4,
            "ratio": 1.3,
            "accent": "var(--acl-paper)",
            "ph": "场景图"
          },
          {
            "l": 470,
            "t": 130,
            "box": 340,
            "r": 4,
            "ratio": 0.92,
            "accent": "var(--acl-paper)",
            "ph": "场景图"
          }
        ],
        "3": [
          {
            "l": 20,
            "t": 10,
            "box": 320,
            "r": -4,
            "ratio": 1.2,
            "accent": "var(--acl-paper)",
            "ph": "场景图"
          },
          {
            "l": 380,
            "t": 90,
            "box": 280,
            "r": 4,
            "ratio": 0.92,
            "accent": "var(--acl-paper)",
            "ph": "场景图"
          },
          {
            "l": 660,
            "t": 30,
            "box": 270,
            "r": -3,
            "ratio": 1.1,
            "accent": "var(--acl-paper)",
            "ph": "场景图"
          }
        ],
        "4": [
          {
            "l": 10,
            "t": 4,
            "box": 280,
            "r": -4,
            "ratio": 1.18,
            "accent": "var(--acl-paper)",
            "ph": "场景图"
          },
          {
            "l": 320,
            "t": 96,
            "box": 250,
            "r": 4,
            "ratio": 0.92,
            "accent": "var(--acl-paper)",
            "ph": "场景图"
          },
          {
            "l": 590,
            "t": 18,
            "box": 250,
            "r": -3,
            "ratio": 1.12,
            "accent": "var(--acl-paper)",
            "ph": "场景图"
          },
          {
            "l": 700,
            "t": 220,
            "box": 220,
            "r": 5,
            "ratio": 0.86,
            "accent": "var(--acl-paper)",
            "ph": "场景图"
          }
        ]
      },
      "closingLine": "应用价值来自它在流程里的位置。"
    }
  },
  {
    "key": "theme08_page073",
    "themeKey": "theme08",
    "pageNumber": 73,
    "layout": "THEME08-073",
    "slot": "p79",
    "label": "(79) 时间轴 · Repricing",
    "bgClass": "",
    "controls": [
      {
        "key": "backgroundTheme",
        "label": "背景主题",
        "type": "enum",
        "default": "primary",
        "options": [
          "primary",
          "muted"
        ],
        "desc": "主色(电光黄) 或 次色(淡紫灰) 底色",
        "publicKey": "backgroundTheme",
        "publicLabel": "背景主题",
        "description": "主色(电光黄) 或 次色(淡紫灰) 底色"
      },
      {
        "key": "nodeCount",
        "label": "观察对象数",
        "type": "number",
        "default": 4,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "时间轴上的观察对象节点数量(2–4)，沿轴上下交错排布",
        "publicKey": "nodeCount",
        "publicLabel": "观察对象数",
        "description": "时间轴上的观察对象节点数量(2–4)，沿轴上下交错排布"
      },
      {
        "key": "showBaseline",
        "label": "参考锚基线",
        "type": "boolean",
        "default": true,
        "desc": "中央虚线基线 + 两端窗口标注 显隐",
        "publicKey": "showBaseline",
        "publicLabel": "参考锚基线",
        "description": "中央虚线基线 + 两端窗口标注 显隐"
      },
      {
        "key": "showValueLabels",
        "label": "重定价徽标",
        "type": "boolean",
        "default": true,
        "desc": "各节点上的 ↑/↓ 重定价方向徽标 显隐",
        "publicKey": "showValueLabels",
        "publicLabel": "重定价徽标",
        "description": "各节点上的 ↑/↓ 重定价方向徽标 显隐"
      },
      {
        "key": "showMetrics",
        "label": "观察指标",
        "type": "boolean",
        "default": true,
        "desc": "底部观察指标行 显隐",
        "publicKey": "showMetrics",
        "publicLabel": "观察指标",
        "description": "底部观察指标行 显隐"
      },
      {
        "key": "metricCount",
        "label": "指标数量",
        "type": "number",
        "default": 4,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "底部观察指标数量(2–4)",
        "publicKey": "metricCount",
        "publicLabel": "指标数量",
        "description": "底部观察指标数量(2–4)"
      },
      {
        "key": "focusEnabled",
        "label": "重点强调",
        "type": "boolean",
        "default": true,
        "desc": "是否高亮某一个观察对象(其余淡化)",
        "publicKey": "focusEnabled",
        "publicLabel": "重点强调",
        "description": "是否高亮某一个观察对象(其余淡化)"
      },
      {
        "key": "focusIndex",
        "label": "重点对象",
        "type": "number",
        "default": 0,
        "min": 0,
        "max": 3,
        "step": 1,
        "desc": "被高亮的观察对象序号(从 0 起)",
        "publicKey": "focusIndex",
        "publicLabel": "重点对象",
        "description": "被高亮的观察对象序号(从 0 起)"
      },
      {
        "key": "showDecor",
        "label": "装饰元素",
        "type": "boolean",
        "default": true,
        "desc": "手绘装饰与贴纸标签 显隐",
        "publicKey": "showDecor",
        "publicLabel": "装饰元素",
        "description": "手绘装饰与贴纸标签 显隐"
      }
    ],
    "defaultProps": {
      "backgroundTheme": "primary",
      "nodeCount": 4,
      "showBaseline": true,
      "showValueLabels": true,
      "showMetrics": true,
      "metricCount": 4,
      "focusEnabled": true,
      "focusIndex": 0,
      "showDecor": true,
      "eyebrow": "IPO Watch",
      "headline": "估值锚重定价",
      "subheadline": "策略 · 观察 IPO 窗口",
      "summary": "头部 IPO 表现会重定价整个 <b>一级市场估值锚</b>。",
      "axisStart": "窗口开启",
      "axisEnd": "重定价",
      "baseLabel": "估值锚基线 · Valuation Anchor",
      "watchlist": [
        {
          "name": "OpenAI",
          "role": "通用大模型",
          "note": "估值锚顶端，收入增速定全行业基调。",
          "dir": "up",
          "tag": "收入定基调"
        },
        {
          "name": "Anthropic",
          "role": "安全可靠模型",
          "note": "企业采用兑现，估值待公开市场验证。",
          "dir": "up",
          "tag": "采用兑现"
        },
        {
          "name": "Databricks",
          "role": "数据平台",
          "note": "存量客户复用，毛利结构相对更稳。",
          "dir": "up",
          "tag": "毛利更稳"
        },
        {
          "name": "CoreWeave",
          "role": "算力基础设施",
          "note": "云成本占比高，毛利弹性持续承压。",
          "dir": "down",
          "tag": "弹性承压"
        }
      ],
      "metrics": [
        {
          "name": "上市表现",
          "en": "IPO Print"
        },
        {
          "name": "收入增速",
          "en": "Rev. Growth"
        },
        {
          "name": "毛利率",
          "en": "Gross Margin"
        },
        {
          "name": "云成本占比",
          "en": "Cloud Cost"
        }
      ],
      "closingLine": "公开市场会重新定价 AI 叙事。"
    }
  },
  {
    "key": "theme08_page074",
    "themeKey": "theme08",
    "pageNumber": 74,
    "layout": "THEME08-074",
    "slot": "p80",
    "label": "(80) 金句 · Verdict",
    "bgClass": "",
    "controls": [
      {
        "key": "backgroundTheme",
        "label": "背景主题",
        "type": "enum",
        "default": "ink",
        "options": [
          "primary",
          "muted",
          "ink"
        ],
        "desc": "主色(电光黄) / 次色(淡紫灰) / 深色(高反差金句)",
        "publicKey": "backgroundTheme",
        "publicLabel": "背景主题",
        "description": "主色(电光黄) / 次色(淡紫灰) / 深色(高反差金句)"
      },
      {
        "key": "emphasisStyle",
        "label": "强调样式",
        "type": "enum",
        "default": "band",
        "options": [
          "band",
          "underline"
        ],
        "desc": "重点句强调方式：倾斜填充色块 / 手绘下划线",
        "publicKey": "emphasisStyle",
        "publicLabel": "强调样式",
        "description": "重点句强调方式：倾斜填充色块 / 手绘下划线"
      },
      {
        "key": "showSeal",
        "label": "判定印章",
        "type": "boolean",
        "default": true,
        "desc": "右上角旋转的圆形判定印章 显隐",
        "publicKey": "showSeal",
        "publicLabel": "判定印章",
        "description": "右上角旋转的圆形判定印章 显隐"
      },
      {
        "key": "showQuoteMark",
        "label": "大引号",
        "type": "boolean",
        "default": true,
        "desc": "背景大号收尾引号装饰 显隐",
        "publicKey": "showQuoteMark",
        "publicLabel": "大引号",
        "description": "背景大号收尾引号装饰 显隐"
      },
      {
        "key": "showSupports",
        "label": "支撑要点",
        "type": "boolean",
        "default": true,
        "desc": "底部支撑要点条 显隐",
        "publicKey": "showSupports",
        "publicLabel": "支撑要点",
        "description": "底部支撑要点条 显隐"
      },
      {
        "key": "supportCount",
        "label": "要点数量",
        "type": "number",
        "default": 3,
        "min": 0,
        "max": 3,
        "step": 1,
        "desc": "展示的支撑要点数量(0–3)",
        "publicKey": "supportCount",
        "publicLabel": "要点数量",
        "description": "展示的支撑要点数量(0–3)"
      },
      {
        "key": "focusEnabled",
        "label": "重点强调",
        "type": "boolean",
        "default": true,
        "desc": "是否突出某一行金句（作为重点句加强调样式）",
        "publicKey": "focusEnabled",
        "publicLabel": "重点强调",
        "description": "是否突出某一行金句（作为重点句加强调样式）"
      },
      {
        "key": "focusIndex",
        "label": "重点行",
        "type": "number",
        "default": 1,
        "min": 0,
        "max": 1,
        "step": 1,
        "desc": "被强调为重点句的行序号(从 0 起)",
        "publicKey": "focusIndex",
        "publicLabel": "重点行",
        "description": "被强调为重点句的行序号(从 0 起)"
      },
      {
        "key": "showDecor",
        "label": "装饰元素",
        "type": "boolean",
        "default": true,
        "desc": "手绘火花、星标与贴纸标签 显隐",
        "publicKey": "showDecor",
        "publicLabel": "装饰元素",
        "description": "手绘火花、星标与贴纸标签 显隐"
      }
    ],
    "defaultProps": {
      "backgroundTheme": "ink",
      "emphasisStyle": "band",
      "showSeal": true,
      "showQuoteMark": true,
      "showSupports": true,
      "supportCount": 3,
      "focusEnabled": true,
      "focusIndex": 1,
      "showDecor": true,
      "eyebrow": "Closing",
      "kicker": "收尾页",
      "label": "最终判断 · Final Call",
      "lines": [
        "融资盛宴之后，",
        "真正的竞争才刚开始。"
      ],
      "supports": [
        {
          "name": "一句话判断",
          "en": "One-line Verdict"
        },
        {
          "name": "低信息密度",
          "en": "Low Density"
        },
        {
          "name": "阶段性收束",
          "en": "Section Closer"
        }
      ],
      "sealTop": "最终\n判断",
      "sealBottom": "Final Call · 2024",
      "source": "AI CAPITAL LAB · 全年调研收束"
    }
  },
  {
    "key": "theme08_page075",
    "themeKey": "theme08",
    "pageNumber": 75,
    "layout": "THEME08-075",
    "slot": "p81",
    "label": "(81) 展望主线 · Mainlines",
    "bgClass": "",
    "controls": [
      {
        "key": "backgroundTheme",
        "label": "背景主题",
        "type": "enum",
        "default": "primary",
        "options": [
          "primary",
          "muted"
        ],
        "desc": "主色(电光黄) 或 次色(淡紫灰) 底色",
        "publicKey": "backgroundTheme",
        "publicLabel": "背景主题",
        "description": "主色(电光黄) 或 次色(淡紫灰) 底色"
      },
      {
        "key": "mediaCount",
        "label": "图片数量",
        "type": "number",
        "default": 3,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "顶部横幅拼贴图片槽数量(0–4)；布局随数量自动平衡，每槽按上传图片比例自适应",
        "publicKey": "mediaCount",
        "publicLabel": "图片数量",
        "description": "顶部横幅拼贴图片槽数量(0–4)；布局随数量自动平衡，每槽按上传图片比例自适应"
      },
      {
        "key": "lineCount",
        "label": "主线数量",
        "type": "number",
        "default": 3,
        "min": 1,
        "max": 4,
        "step": 1,
        "desc": "底部主线卡数量(1–4)",
        "publicKey": "lineCount",
        "publicLabel": "主线数量",
        "description": "底部主线卡数量(1–4)"
      },
      {
        "key": "showValueLabels",
        "label": "数值标签",
        "type": "boolean",
        "default": true,
        "desc": "主线卡的大号数值 显隐",
        "publicKey": "showValueLabels",
        "publicLabel": "数值标签",
        "description": "主线卡的大号数值 显隐"
      },
      {
        "key": "focusEnabled",
        "label": "重点强调",
        "type": "boolean",
        "default": true,
        "desc": "是否突出某一条主线",
        "publicKey": "focusEnabled",
        "publicLabel": "重点强调",
        "description": "是否突出某一条主线"
      },
      {
        "key": "focusIndex",
        "label": "重点对象",
        "type": "number",
        "default": 0,
        "min": 0,
        "max": 3,
        "step": 1,
        "desc": "被突出的主线序号(从 0 起)",
        "publicKey": "focusIndex",
        "publicLabel": "重点对象",
        "description": "被突出的主线序号(从 0 起)"
      },
      {
        "key": "showDecor",
        "label": "装饰元素",
        "type": "boolean",
        "default": true,
        "desc": "手绘装饰与贴纸标签 显隐",
        "publicKey": "showDecor",
        "publicLabel": "装饰元素",
        "description": "手绘装饰与贴纸标签 显隐"
      }
    ],
    "defaultProps": {
      "backgroundTheme": "primary",
      "mediaCount": 3,
      "lineCount": 3,
      "showValueLabels": true,
      "focusEnabled": true,
      "focusIndex": 0,
      "showDecor": true,
      "eyebrow": "2025 Outlook · Mainlines",
      "headline": "明年的三条主线",
      "subheadline": "展望主线",
      "summary": "明年的资金不会平均下注，而会沿 <b>少数几条主线</b> 集中加注。",
      "tiles": [
        {
          "name": "基础设施现场",
          "ratio": 1.4
        },
        {
          "name": "应用落地场景",
          "ratio": 1.2
        },
        {
          "name": "团队与发布",
          "ratio": 1.5
        },
        {
          "name": "硬件与算力",
          "ratio": 1.3
        }
      ],
      "lines": [
        {
          "name": "基础设施兑现",
          "tag": "Infrastructure",
          "desc": "算力、数据与平台从烧钱转向计费交付。",
          "value": "1240",
          "unit": "亿投入"
        },
        {
          "name": "应用层收敛",
          "tag": "Applications",
          "desc": "能接管可计费流程的垂直应用胜出。",
          "value": "38",
          "unit": "% 净留存"
        },
        {
          "name": "具身与物理 AI",
          "tag": "Embodied",
          "desc": "从软件走向硬件，机器人与车载提速。",
          "value": "3.4",
          "unit": "× 增速"
        },
        {
          "name": "安全与合规",
          "tag": "Safety",
          "desc": "评测、对齐与合规成为交付前置条件。",
          "value": "92",
          "unit": "亿新增"
        }
      ],
      "closingLine": "看清主线，比押中单点更重要。"
    }
  },
  {
    "key": "theme08_page076",
    "themeKey": "theme08",
    "pageNumber": 76,
    "layout": "THEME08-076",
    "slot": "p82",
    "label": "(82) 迁移图 · Migration",
    "bgClass": "",
    "controls": [
      {
        "key": "backgroundTheme",
        "label": "背景主题",
        "type": "enum",
        "default": "muted",
        "options": [
          "primary",
          "muted"
        ],
        "desc": "主色(电光黄) 或 次色(淡紫灰) 底色",
        "publicKey": "backgroundTheme",
        "publicLabel": "背景主题",
        "description": "主色(电光黄) 或 次色(淡紫灰) 底色"
      },
      {
        "key": "chartType",
        "label": "图表类型",
        "type": "enum",
        "default": "slope",
        "options": [
          "slope",
          "bars"
        ],
        "desc": "迁移呈现：斜率连线(排名迁移) / 成对条形(两期对比)",
        "publicKey": "chartType",
        "publicLabel": "图表类型",
        "description": "迁移呈现：斜率连线(排名迁移) / 成对条形(两期对比)"
      },
      {
        "key": "segmentCount",
        "label": "条目数量",
        "type": "number",
        "default": 5,
        "min": 3,
        "max": 6,
        "step": 1,
        "desc": "参与排名迁移的分类数量(3–6)",
        "publicKey": "categoryCount",
        "publicLabel": "条目数量",
        "description": "参与排名迁移的分类数量(3–6)"
      },
      {
        "key": "showDelta",
        "label": "变化徽标",
        "type": "boolean",
        "default": true,
        "desc": "右侧排名升降徽标 显隐",
        "publicKey": "showDelta",
        "publicLabel": "变化徽标",
        "description": "右侧排名升降徽标 显隐"
      },
      {
        "key": "showValueLabels",
        "label": "数值标签",
        "type": "boolean",
        "default": true,
        "desc": "两端的热度分值 显隐",
        "publicKey": "showValueLabels",
        "publicLabel": "数值标签",
        "description": "两端的热度分值 显隐"
      },
      {
        "key": "focusEnabled",
        "label": "重点强调",
        "type": "boolean",
        "default": true,
        "desc": "是否高亮某一条迁移轨迹(其余淡化)",
        "publicKey": "focusEnabled",
        "publicLabel": "重点强调",
        "description": "是否高亮某一条迁移轨迹(其余淡化)"
      },
      {
        "key": "focusIndex",
        "label": "重点对象",
        "type": "number",
        "default": 0,
        "min": 0,
        "max": 5,
        "step": 1,
        "desc": "被高亮的条目序号(从 0 起，按内容顺序)",
        "publicKey": "focusIndex",
        "publicLabel": "重点对象",
        "description": "被高亮的条目序号(从 0 起，按内容顺序)"
      },
      {
        "key": "showDecor",
        "label": "装饰元素",
        "type": "boolean",
        "default": true,
        "desc": "手绘装饰与标签的显示/隐藏",
        "publicKey": "showDecor",
        "publicLabel": "装饰元素",
        "description": "手绘装饰与标签的显示/隐藏"
      }
    ],
    "defaultProps": {
      "backgroundTheme": "muted",
      "chartType": "slope",
      "segmentCount": 5,
      "focusEnabled": true,
      "focusIndex": 0,
      "showDelta": true,
      "showValueLabels": true,
      "showDecor": true,
      "eyebrow": "Heat Migration",
      "headline": "赛道热度迁移",
      "subheadline": "2024 → 2025E 关注度排名",
      "summary": "资金关注度从 <b>纯叙事</b> 向 <b>能兑现的基础设施与应用</b> 迁移。",
      "colA": {
        "num": "2024",
        "label": "实际排名"
      },
      "colB": {
        "num": "2025E",
        "label": "预期排名"
      },
      "valueUnit": "分",
      "items": [
        {
          "name": "通用大模型",
          "rankA": 1,
          "rankB": 3,
          "valA": 95,
          "valB": 78
        },
        {
          "name": "基础设施",
          "rankA": 3,
          "rankB": 1,
          "valA": 74,
          "valB": 91
        },
        {
          "name": "垂直应用",
          "rankA": 4,
          "rankB": 2,
          "valA": 66,
          "valB": 85
        },
        {
          "name": "AI 芯片",
          "rankA": 2,
          "rankB": 4,
          "valA": 80,
          "valB": 70
        },
        {
          "name": "具身智能",
          "rankA": 6,
          "rankB": 5,
          "valA": 41,
          "valB": 58
        },
        {
          "name": "内容生成",
          "rankA": 5,
          "rankB": 6,
          "valA": 52,
          "valB": 44
        }
      ],
      "closingLine": "排名的交叉点，就是资本叙事换挡的位置。"
    }
  },
  {
    "key": "theme08_page077",
    "themeKey": "theme08",
    "pageNumber": 77,
    "layout": "THEME08-077",
    "slot": "p83",
    "label": "(83) 样板 · Playbooks",
    "bgClass": "",
    "controls": [
      {
        "key": "backgroundTheme",
        "label": "背景主题",
        "type": "enum",
        "default": "muted",
        "options": [
          "primary",
          "muted"
        ],
        "desc": "主色(电光黄) 或 次色(淡紫灰) 底色",
        "publicKey": "backgroundTheme",
        "publicLabel": "背景主题",
        "description": "主色(电光黄) 或 次色(淡紫灰) 底色"
      },
      {
        "key": "cardCount",
        "label": "海报数量",
        "type": "number",
        "default": 3,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "竖向海报列数量(0–4)；每列含一个图片槽，列宽随数量自动平衡，每槽按上传图片比例自适应",
        "publicKey": "cardCount",
        "publicLabel": "海报数量",
        "description": "竖向海报列数量(0–4)；每列含一个图片槽，列宽随数量自动平衡，每槽按上传图片比例自适应"
      },
      {
        "key": "showValue",
        "label": "数值标签",
        "type": "boolean",
        "default": true,
        "desc": "每张海报底牌的大号数值 显隐",
        "publicKey": "showValueLabels",
        "publicLabel": "数值标签",
        "description": "每张海报底牌的大号数值 显隐"
      },
      {
        "key": "showTag",
        "label": "类型标签",
        "type": "boolean",
        "default": true,
        "desc": "每张海报的类型标签 显隐",
        "publicKey": "showTag",
        "publicLabel": "类型标签",
        "description": "每张海报的类型标签 显隐"
      },
      {
        "key": "focusEnabled",
        "label": "重点强调",
        "type": "boolean",
        "default": true,
        "desc": "是否突出某一张海报",
        "publicKey": "focusEnabled",
        "publicLabel": "重点强调",
        "description": "是否突出某一张海报"
      },
      {
        "key": "focusIndex",
        "label": "重点对象",
        "type": "number",
        "default": 1,
        "min": 0,
        "max": 3,
        "step": 1,
        "desc": "被突出的海报序号(从 0 起)",
        "publicKey": "focusIndex",
        "publicLabel": "重点对象",
        "description": "被突出的海报序号(从 0 起)"
      },
      {
        "key": "showDecor",
        "label": "装饰元素",
        "type": "boolean",
        "default": true,
        "desc": "手绘装饰与标签的显示/隐藏",
        "publicKey": "showDecor",
        "publicLabel": "装饰元素",
        "description": "手绘装饰与标签的显示/隐藏"
      }
    ],
    "defaultProps": {
      "backgroundTheme": "muted",
      "cardCount": 3,
      "focusEnabled": true,
      "focusIndex": 1,
      "showValue": true,
      "showTag": true,
      "showDecor": true,
      "eyebrow": "2025 Playbooks · How It Lands",
      "headline": "落地样板间",
      "subheadline": "三类可复制路径",
      "summary": "能被复制的不是叙事，而是 <b>可交付、可计费、可留存</b> 的落地路径。",
      "cards": [
        {
          "name": "嵌入工作流",
          "tag": "Workflow",
          "desc": "接管可计费流程，而不是停在对话框。",
          "value": "118",
          "unit": "% 净留存"
        },
        {
          "name": "量化降本",
          "tag": "ROI",
          "desc": "工单时长与人力成本可被直接量化。",
          "value": "41",
          "unit": "% 时长↓"
        },
        {
          "name": "资源绑定",
          "tag": "Resource",
          "desc": "云额度、芯片与渠道一并锁定。",
          "value": "118",
          "unit": "亿授信"
        },
        {
          "name": "存量延展",
          "tag": "Expansion",
          "desc": "把 AI 能力卖给已有企业客户。",
          "value": "132",
          "unit": "% 净留存"
        }
      ],
      "closingLine": "可复制的路径，才是模板的价值所在。"
    }
  },
  {
    "key": "theme08_page078",
    "themeKey": "theme08",
    "pageNumber": 78,
    "layout": "THEME08-078",
    "slot": "p84",
    "label": "(84) 大数字 · Gauge",
    "bgClass": "",
    "controls": [
      {
        "key": "backgroundTheme",
        "label": "背景主题",
        "type": "enum",
        "default": "ink",
        "options": [
          "primary",
          "muted",
          "ink"
        ],
        "desc": "主色(电光黄) / 次色(淡紫灰) / 深色(高反差大数字)",
        "publicKey": "backgroundTheme",
        "publicLabel": "背景主题",
        "description": "主色(电光黄) / 次色(淡紫灰) / 深色(高反差大数字)"
      },
      {
        "key": "numberStyle",
        "label": "数字样式",
        "type": "enum",
        "default": "solid",
        "options": [
          "solid",
          "outline"
        ],
        "desc": "巨型数字：实心(带投影) / 描边(空心轮廓)",
        "publicKey": "numberStyle",
        "publicLabel": "数字样式",
        "description": "巨型数字：实心(带投影) / 描边(空心轮廓)"
      },
      {
        "key": "showRing",
        "label": "环形仪表",
        "type": "boolean",
        "default": true,
        "desc": "数字外圈的环形进度仪表 显隐",
        "publicKey": "showRing",
        "publicLabel": "环形仪表",
        "description": "数字外圈的环形进度仪表 显隐"
      },
      {
        "key": "gaugePct",
        "label": "仪表百分比",
        "type": "number",
        "default": 67,
        "min": 0,
        "max": 100,
        "step": 1,
        "desc": "环形仪表扫过的百分比（主数字带 % 时会自动跟随主数字，此值作为后备）",
        "publicKey": "gaugePct",
        "publicLabel": "仪表百分比",
        "description": "环形仪表扫过的百分比（主数字带 % 时会自动跟随主数字，此值作为后备）"
      },
      {
        "key": "metricCount",
        "label": "指标数量",
        "type": "number",
        "default": 3,
        "min": 2,
        "max": 3,
        "step": 1,
        "desc": "底部支撑指标格数量(2–3)",
        "publicKey": "metricCount",
        "publicLabel": "指标数量",
        "description": "底部支撑指标格数量(2–3)"
      },
      {
        "key": "showDecor",
        "label": "装饰元素",
        "type": "boolean",
        "default": true,
        "desc": "手绘箭头、火花与贴纸标签 显隐",
        "publicKey": "showDecor",
        "publicLabel": "装饰元素",
        "description": "手绘箭头、火花与贴纸标签 显隐"
      }
    ],
    "defaultProps": {
      "backgroundTheme": "ink",
      "numberStyle": "solid",
      "showRing": true,
      "gaugePct": 67,
      "metricCount": 3,
      "showDecor": true,
      "eyebrow": "One Number · 2025 展望",
      "kicker": "大数字",
      "label": "资本向应用层迁移的比例",
      "bigNumber": "67",
      "bigUnit": "%",
      "caption": "2025 年新增 AI 资本预计有 <b>三分之二</b> 流向能直接计费的应用与垂直层。",
      "metrics": [
        {
          "k": "应用层占比",
          "v": "67",
          "unit": "%"
        },
        {
          "k": "基础设施",
          "v": "24",
          "unit": "%"
        },
        {
          "k": "模型层",
          "v": "9",
          "unit": "%"
        }
      ],
      "source": "数据口径：2025 资本流向模拟 · AI CAPITAL LAB"
    }
  },
  {
    "key": "theme08_page079",
    "themeKey": "theme08",
    "pageNumber": 79,
    "layout": "THEME08-079",
    "slot": "p85",
    "label": "(85) 跨页 · Hero Split",
    "bgClass": "",
    "controls": [
      {
        "key": "backgroundTheme",
        "label": "背景主题",
        "type": "enum",
        "default": "muted",
        "options": [
          "primary",
          "muted"
        ],
        "desc": "主色(电光黄) 或 次色(淡紫灰) 底色",
        "publicKey": "backgroundTheme",
        "publicLabel": "背景主题",
        "description": "主色(电光黄) 或 次色(淡紫灰) 底色"
      },
      {
        "key": "mediaCount",
        "label": "图片数量",
        "type": "number",
        "default": 3,
        "min": 0,
        "max": 3,
        "step": 1,
        "desc": "主视觉+裁切配图槽数量(0–3)；布局随数量自动平衡，每槽按上传图片比例自适应",
        "publicKey": "mediaCount",
        "publicLabel": "图片数量",
        "description": "主视觉+裁切配图槽数量(0–3)；布局随数量自动平衡，每槽按上传图片比例自适应"
      },
      {
        "key": "tagCount",
        "label": "要点标签数量",
        "type": "number",
        "default": 4,
        "min": 2,
        "max": 5,
        "step": 1,
        "desc": "左栏要点标签数量(2–5)",
        "publicKey": "tagCount",
        "publicLabel": "要点标签数量",
        "description": "左栏要点标签数量(2–5)"
      },
      {
        "key": "metricCount",
        "label": "指标数量",
        "type": "number",
        "default": 3,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "左栏底部支撑指标格数量(2–4)",
        "publicKey": "metricCount",
        "publicLabel": "指标数量",
        "description": "左栏底部支撑指标格数量(2–4)"
      },
      {
        "key": "focusEnabled",
        "label": "重点强调",
        "type": "boolean",
        "default": true,
        "desc": "是否突出某一个要点标签",
        "publicKey": "focusEnabled",
        "publicLabel": "重点强调",
        "description": "是否突出某一个要点标签"
      },
      {
        "key": "focusIndex",
        "label": "重点对象",
        "type": "number",
        "default": 0,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "被突出的标签序号(从 0 起)",
        "publicKey": "focusIndex",
        "publicLabel": "重点对象",
        "description": "被突出的标签序号(从 0 起)"
      },
      {
        "key": "showDecor",
        "label": "装饰元素",
        "type": "boolean",
        "default": true,
        "desc": "手绘装饰与标签的显示/隐藏",
        "publicKey": "showDecor",
        "publicLabel": "装饰元素",
        "description": "手绘装饰与标签的显示/隐藏"
      }
    ],
    "defaultProps": {
      "backgroundTheme": "muted",
      "mediaCount": 3,
      "tagCount": 4,
      "metricCount": 3,
      "focusEnabled": true,
      "focusIndex": 0,
      "showDecor": true,
      "eyebrow": "Field Guide · 2025",
      "subheadline": "How to Enter",
      "headline": "进入 AI 资本市场",
      "lead": "不再是「投不投」，而是<b>怎么进、何时进、绑定什么资源</b>——入场方式比方向更决定回报。",
      "tags": [
        "看兑现而非叙事",
        "绑定算力与渠道",
        "阶段错位布局",
        "盯紧毛利结构",
        "关注退出路径"
      ],
      "metrics": [
        {
          "k": "可入场窗口",
          "v": "18",
          "unit": "个月"
        },
        {
          "k": "建议配置",
          "v": "60",
          "unit": "% 兑现"
        },
        {
          "k": "观察赛道",
          "v": "12",
          "unit": "类"
        }
      ],
      "collage": {
        "0": [],
        "1": [
          {
            "l": 60,
            "t": 70,
            "box": 600,
            "r": -2,
            "ratio": 0.92,
            "z": 2,
            "cap": "主视觉",
            "color": "var(--acl-yellow)"
          }
        ],
        "2": [
          {
            "l": 90,
            "t": 20,
            "box": 540,
            "r": -2,
            "ratio": 0.96,
            "z": 2,
            "cap": "主视觉",
            "color": "var(--acl-yellow)"
          },
          {
            "l": 8,
            "t": 470,
            "box": 300,
            "r": 4,
            "ratio": 1.2,
            "z": 3,
            "cap": "场景",
            "color": "var(--acl-blue)"
          }
        ],
        "3": [
          {
            "l": 150,
            "t": 0,
            "box": 520,
            "r": -2,
            "ratio": 0.96,
            "z": 2,
            "cap": "主视觉",
            "color": "var(--acl-yellow)"
          },
          {
            "l": 0,
            "t": 380,
            "box": 290,
            "r": 4,
            "ratio": 1.18,
            "z": 3,
            "cap": "场景",
            "color": "var(--acl-blue)"
          },
          {
            "l": 470,
            "t": 500,
            "box": 250,
            "r": -5,
            "ratio": 0.82,
            "z": 3,
            "cap": "团队",
            "color": "var(--acl-pink)"
          }
        ]
      },
      "closingLine": "入场方式，本身就是一种判断。"
    }
  },
  {
    "key": "theme08_page080",
    "themeKey": "theme08",
    "pageNumber": 80,
    "layout": "THEME08-080",
    "slot": "p86",
    "label": "(86) 哑铃图 · Range",
    "bgClass": "",
    "controls": [
      {
        "key": "backgroundTheme",
        "label": "背景主题",
        "type": "enum",
        "default": "primary",
        "options": [
          "primary",
          "muted"
        ],
        "desc": "主色(电光黄) 或 次色(淡紫灰) 底色",
        "publicKey": "backgroundTheme",
        "publicLabel": "背景主题",
        "description": "主色(电光黄) 或 次色(淡紫灰) 底色"
      },
      {
        "key": "chartType",
        "label": "图表类型",
        "type": "enum",
        "default": "dumbbell",
        "options": [
          "dumbbell",
          "bars"
        ],
        "desc": "区间呈现：哑铃(下限→上限连点) / 成对条形",
        "publicKey": "chartType",
        "publicLabel": "图表类型",
        "description": "区间呈现：哑铃(下限→上限连点) / 成对条形"
      },
      {
        "key": "segmentCount",
        "label": "条目数量",
        "type": "number",
        "default": 5,
        "min": 3,
        "max": 6,
        "step": 1,
        "desc": "参与对比的分类(行)数量(3–6)",
        "publicKey": "categoryCount",
        "publicLabel": "条目数量",
        "description": "参与对比的分类(行)数量(3–6)"
      },
      {
        "key": "showBaseline",
        "label": "参考线",
        "type": "boolean",
        "default": true,
        "desc": "横跨图表的中位/参考竖线 显隐",
        "publicKey": "showBaseline",
        "publicLabel": "参考线",
        "description": "横跨图表的中位/参考竖线 显隐"
      },
      {
        "key": "showValueLabels",
        "label": "数值标签",
        "type": "boolean",
        "default": true,
        "desc": "区间两端数值 显隐",
        "publicKey": "showValueLabels",
        "publicLabel": "数值标签",
        "description": "区间两端数值 显隐"
      },
      {
        "key": "showDelta",
        "label": "跨度徽标",
        "type": "boolean",
        "default": true,
        "desc": "每行右侧区间跨度倍数 显隐",
        "publicKey": "showDelta",
        "publicLabel": "跨度徽标",
        "description": "每行右侧区间跨度倍数 显隐"
      },
      {
        "key": "focusEnabled",
        "label": "重点强调",
        "type": "boolean",
        "default": true,
        "desc": "是否高亮某一行(其余淡化)",
        "publicKey": "focusEnabled",
        "publicLabel": "重点强调",
        "description": "是否高亮某一行(其余淡化)"
      },
      {
        "key": "focusIndex",
        "label": "重点对象",
        "type": "number",
        "default": 1,
        "min": 0,
        "max": 5,
        "step": 1,
        "desc": "被高亮的条目序号(从 0 起)",
        "publicKey": "focusIndex",
        "publicLabel": "重点对象",
        "description": "被高亮的条目序号(从 0 起)"
      },
      {
        "key": "showDecor",
        "label": "装饰元素",
        "type": "boolean",
        "default": true,
        "desc": "手绘装饰与标签的显示/隐藏",
        "publicKey": "showDecor",
        "publicLabel": "装饰元素",
        "description": "手绘装饰与标签的显示/隐藏"
      }
    ],
    "defaultProps": {
      "backgroundTheme": "primary",
      "chartType": "dumbbell",
      "segmentCount": 5,
      "showBaseline": true,
      "showValueLabels": true,
      "showDelta": true,
      "focusEnabled": true,
      "focusIndex": 1,
      "showDecor": true,
      "eyebrow": "Deal Size Range",
      "headline": "单笔融资区间分化",
      "subheadline": "2024 · 各赛道下限 → 上限",
      "summary": "同一赛道里，<b>头部与长尾的单笔规模差距</b>正在被持续拉大。",
      "lowLabel": "区间下限",
      "highLabel": "区间上限",
      "valueUnit": "亿",
      "refValue": 30,
      "refLabel": "全市场中位",
      "items": [
        {
          "name": "通用大模型",
          "note": "Foundation",
          "low": 20,
          "high": 95
        },
        {
          "name": "算力基础设施",
          "note": "Compute",
          "low": 15,
          "high": 78
        },
        {
          "name": "垂直应用",
          "note": "Vertical Apps",
          "low": 5,
          "high": 42
        },
        {
          "name": "AI 芯片",
          "note": "Silicon",
          "low": 12,
          "high": 60
        },
        {
          "name": "具身智能",
          "note": "Embodied",
          "low": 4,
          "high": 28
        },
        {
          "name": "内容生成",
          "note": "Generative",
          "low": 3,
          "high": 22
        }
      ],
      "closingLine": "区间的宽度，决定了你在这条赛道里能站到哪一段。"
    }
  },
  {
    "key": "theme08_page081",
    "themeKey": "theme08",
    "pageNumber": 81,
    "layout": "THEME08-081",
    "slot": "p87",
    "label": "(87) 路线图 · Roadmap",
    "bgClass": "",
    "controls": [
      {
        "key": "backgroundTheme",
        "label": "背景主题",
        "type": "enum",
        "default": "muted",
        "options": [
          "primary",
          "muted"
        ],
        "desc": "主色(电光黄) 或 次色(淡紫灰) 底色",
        "publicKey": "backgroundTheme",
        "publicLabel": "背景主题",
        "description": "主色(电光黄) 或 次色(淡紫灰) 底色"
      },
      {
        "key": "nodeCount",
        "label": "节点数量",
        "type": "number",
        "default": 4,
        "min": 2,
        "max": 5,
        "step": 1,
        "desc": "路线图里程碑数量(2–5)；卡片左右交替排布",
        "publicKey": "nodeCount",
        "publicLabel": "节点数量",
        "description": "路线图里程碑数量(2–5)；卡片左右交替排布"
      },
      {
        "key": "showConnector",
        "label": "连接轴线",
        "type": "boolean",
        "default": true,
        "desc": "中央时间轴脊线与连接臂 显隐",
        "publicKey": "showConnector",
        "publicLabel": "连接轴线",
        "description": "中央时间轴脊线与连接臂 显隐"
      },
      {
        "key": "showValueLabels",
        "label": "数值标签",
        "type": "boolean",
        "default": true,
        "desc": "每张卡片的大号数值 显隐",
        "publicKey": "showValueLabels",
        "publicLabel": "数值标签",
        "description": "每张卡片的大号数值 显隐"
      },
      {
        "key": "focusEnabled",
        "label": "重点强调",
        "type": "boolean",
        "default": true,
        "desc": "是否高亮某一个节点",
        "publicKey": "focusEnabled",
        "publicLabel": "重点强调",
        "description": "是否高亮某一个节点"
      },
      {
        "key": "focusIndex",
        "label": "重点对象",
        "type": "number",
        "default": 1,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "被高亮的节点序号(从 0 起)",
        "publicKey": "focusIndex",
        "publicLabel": "重点对象",
        "description": "被高亮的节点序号(从 0 起)"
      },
      {
        "key": "showDecor",
        "label": "装饰元素",
        "type": "boolean",
        "default": true,
        "desc": "手绘装饰与标签的显示/隐藏",
        "publicKey": "showDecor",
        "publicLabel": "装饰元素",
        "description": "手绘装饰与标签的显示/隐藏"
      }
    ],
    "defaultProps": {
      "backgroundTheme": "muted",
      "nodeCount": 4,
      "showConnector": true,
      "showValueLabels": true,
      "focusEnabled": true,
      "focusIndex": 1,
      "showDecor": true,
      "eyebrow": "Roadmap · Next 18 Months",
      "headline": "未来 18 个月路线图",
      "subheadline": "资本节奏 4 个关键节点",
      "summary": "从「拼算力」到「拼兑现」，每个节点都是一次<b>资金重新定价</b>的机会。",
      "nodes": [
        {
          "phase": "Q1–Q2 2025",
          "title": "收入验证窗口",
          "desc": "头部公司披露首批可计费收入，叙事估值开始分层。",
          "value": "40",
          "unit": "% 兑现"
        },
        {
          "phase": "Q3 2025",
          "title": "算力成本拐点",
          "desc": "推理成本下行，毛利结构首次成为定价主线。",
          "value": "−18",
          "unit": "pt 成本"
        },
        {
          "phase": "Q4 2025",
          "title": "并购与整合",
          "desc": "长尾项目被基础设施方与大厂吸收整合。",
          "value": "2.3",
          "unit": "x 集中"
        },
        {
          "phase": "2026E",
          "title": "退出通道重开",
          "desc": "少数已兑现公司率先打开 IPO 与二级流动性。",
          "value": "6",
          "unit": "家候选"
        },
        {
          "phase": "2026H2",
          "title": "新主题萌芽",
          "desc": "具身与科学计算接棒成为下一轮叙事入口。",
          "value": "+12",
          "unit": "类"
        }
      ],
      "closingLine": "路线图不是预测，而是提前站位的坐标。"
    }
  },
  {
    "key": "theme08_page082",
    "themeKey": "theme08",
    "pageNumber": 82,
    "layout": "THEME08-082",
    "slot": "p88",
    "label": "(88) 照片墙 · Photo Wall",
    "bgClass": "",
    "controls": [
      {
        "key": "backgroundTheme",
        "label": "背景主题",
        "type": "enum",
        "default": "primary",
        "options": [
          "primary",
          "muted"
        ],
        "desc": "主色(电光黄) 或 次色(淡紫灰) 底色",
        "publicKey": "backgroundTheme",
        "publicLabel": "背景主题",
        "description": "主色(电光黄) 或 次色(淡紫灰) 底色"
      },
      {
        "key": "mediaCount",
        "label": "图片数量",
        "type": "number",
        "default": 5,
        "min": 0,
        "max": 6,
        "step": 1,
        "desc": "照片墙图片槽数量(0–6)；布局随数量自动平衡，每槽按上传图片比例自适应",
        "publicKey": "mediaCount",
        "publicLabel": "图片数量",
        "description": "照片墙图片槽数量(0–6)；布局随数量自动平衡，每槽按上传图片比例自适应"
      },
      {
        "key": "showCaptions",
        "label": "照片标签",
        "type": "boolean",
        "default": true,
        "desc": "每张照片的贴纸标签 显隐",
        "publicKey": "showCaptions",
        "publicLabel": "照片标签",
        "description": "每张照片的贴纸标签 显隐"
      },
      {
        "key": "showStat",
        "label": "统计徽标",
        "type": "boolean",
        "default": true,
        "desc": "右下角统计数字徽标 显隐",
        "publicKey": "showStat",
        "publicLabel": "统计徽标",
        "description": "右下角统计数字徽标 显隐"
      },
      {
        "key": "focusEnabled",
        "label": "重点强调",
        "type": "boolean",
        "default": true,
        "desc": "是否放大突出某一张照片",
        "publicKey": "focusEnabled",
        "publicLabel": "重点强调",
        "description": "是否放大突出某一张照片"
      },
      {
        "key": "focusIndex",
        "label": "重点对象",
        "type": "number",
        "default": 0,
        "min": 0,
        "max": 5,
        "step": 1,
        "desc": "被放大突出的照片序号(从 0 起)",
        "publicKey": "focusIndex",
        "publicLabel": "重点对象",
        "description": "被放大突出的照片序号(从 0 起)"
      },
      {
        "key": "showDecor",
        "label": "装饰元素",
        "type": "boolean",
        "default": true,
        "desc": "手绘装饰与贴纸标签 显隐",
        "publicKey": "showDecor",
        "publicLabel": "装饰元素",
        "description": "手绘装饰与贴纸标签 显隐"
      }
    ],
    "defaultProps": {
      "backgroundTheme": "primary",
      "mediaCount": 5,
      "showCaptions": true,
      "showStat": true,
      "focusEnabled": true,
      "focusIndex": 0,
      "showDecor": true,
      "eyebrow": "Coverage · 覆盖群像",
      "headline": "一年内的高光现场",
      "subheadline": "照片墙",
      "summary": "把分散的现场拼成一面墙，<b>密度本身</b>就是叙事。",
      "tiles": [
        {
          "name": "发布现场",
          "tag": "Launch",
          "ratio": 0.82
        },
        {
          "name": "团队群像",
          "tag": "Team",
          "ratio": 1.2
        },
        {
          "name": "数据中心",
          "tag": "Infra",
          "ratio": 1.34
        },
        {
          "name": "路演瞬间",
          "tag": "Pitch",
          "ratio": 0.78
        },
        {
          "name": "签约时刻",
          "tag": "Deal",
          "ratio": 1.1
        },
        {
          "name": "产品特写",
          "tag": "Product",
          "ratio": 0.9
        }
      ],
      "stat": {
        "value": "97",
        "label": "高光事件",
        "en": "Highlight Events"
      },
      "closingLine": "把一年的现场，钉成一面可记忆的墙。"
    }
  },
  {
    "key": "theme08_page083",
    "themeKey": "theme08",
    "pageNumber": 83,
    "layout": "THEME08-083",
    "slot": "p90",
    "label": "(90) 记分卡 · Scorecard",
    "bgClass": "",
    "controls": [
      {
        "key": "backgroundTheme",
        "label": "背景主题",
        "type": "enum",
        "default": "muted",
        "options": [
          "primary",
          "muted"
        ],
        "desc": "主色(电光黄) 或 次色(淡紫灰) 底色",
        "publicKey": "backgroundTheme",
        "publicLabel": "背景主题",
        "description": "主色(电光黄) 或 次色(淡紫灰) 底色"
      },
      {
        "key": "columnCount",
        "label": "对比项数量",
        "type": "number",
        "default": 3,
        "min": 2,
        "max": 3,
        "step": 1,
        "desc": "参与对比的选项(列)数量(2–3)",
        "publicKey": "columnCount",
        "publicLabel": "对比项数量",
        "description": "参与对比的选项(列)数量(2–3)"
      },
      {
        "key": "rowCount",
        "label": "评估维度数量",
        "type": "number",
        "default": 4,
        "min": 3,
        "max": 5,
        "step": 1,
        "desc": "评估维度(行)数量(3–5)",
        "publicKey": "rowCount",
        "publicLabel": "评估维度数量",
        "description": "评估维度(行)数量(3–5)"
      },
      {
        "key": "showRating",
        "label": "评级圆点",
        "type": "boolean",
        "default": true,
        "desc": "每格的评级圆点计量 显隐",
        "publicKey": "showStatusRating",
        "publicLabel": "评级圆点",
        "description": "每格的评级圆点计量 显隐"
      },
      {
        "key": "showValueLabels",
        "label": "数值标签",
        "type": "boolean",
        "default": true,
        "desc": "评级下方的简短数值 显隐",
        "publicKey": "showValueLabels",
        "publicLabel": "数值标签",
        "description": "评级下方的简短数值 显隐"
      },
      {
        "key": "showVerdict",
        "label": "综合判断行",
        "type": "boolean",
        "default": true,
        "desc": "底部综合判断行 显隐",
        "publicKey": "showVerdict",
        "publicLabel": "综合判断行",
        "description": "底部综合判断行 显隐"
      },
      {
        "key": "focusEnabled",
        "label": "重点强调",
        "type": "boolean",
        "default": true,
        "desc": "是否整列高亮某一个对比项",
        "publicKey": "focusEnabled",
        "publicLabel": "重点强调",
        "description": "是否整列高亮某一个对比项"
      },
      {
        "key": "focusIndex",
        "label": "重点对象",
        "type": "number",
        "default": 0,
        "min": 0,
        "max": 2,
        "step": 1,
        "desc": "被高亮的对比项序号(从 0 起)",
        "publicKey": "focusIndex",
        "publicLabel": "重点对象",
        "description": "被高亮的对比项序号(从 0 起)"
      },
      {
        "key": "showDecor",
        "label": "装饰元素",
        "type": "boolean",
        "default": true,
        "desc": "手绘装饰与标签的显示/隐藏",
        "publicKey": "showDecor",
        "publicLabel": "装饰元素",
        "description": "手绘装饰与标签的显示/隐藏"
      }
    ],
    "defaultProps": {
      "backgroundTheme": "muted",
      "columnCount": 3,
      "rowCount": 4,
      "showRating": true,
      "showValueLabels": true,
      "showVerdict": true,
      "focusEnabled": true,
      "focusIndex": 0,
      "showDecor": true,
      "ratingMax": 5,
      "eyebrow": "Scorecard · Side by Side",
      "headline": "三条路径对比",
      "subheadline": "同一张记分卡",
      "summary": "把不同落地路径放进<b>同一套标准</b>，差距才看得清。",
      "options": [
        {
          "name": "嵌入工作流",
          "tag": "Workflow",
          "verdict": "可计费 · 高留存"
        },
        {
          "name": "量化降本",
          "tag": "ROI",
          "verdict": "易验证 · 中壁垒"
        },
        {
          "name": "资源绑定",
          "tag": "Resource",
          "verdict": "高门槛 · 难复制"
        }
      ],
      "criteria": [
        {
          "name": "可计费性",
          "note": "Billable",
          "cells": [
            {
              "rating": 5,
              "value": "高"
            },
            {
              "rating": 3,
              "value": "中"
            },
            {
              "rating": 4,
              "value": "中高"
            }
          ]
        },
        {
          "name": "净留存",
          "note": "NRR",
          "cells": [
            {
              "rating": 5,
              "value": "132",
              "unit": "%"
            },
            {
              "rating": 3,
              "value": "108",
              "unit": "%"
            },
            {
              "rating": 4,
              "value": "121",
              "unit": "%"
            }
          ]
        },
        {
          "name": "壁垒强度",
          "note": "Moat",
          "cells": [
            {
              "rating": 3,
              "value": "中"
            },
            {
              "rating": 2,
              "value": "低"
            },
            {
              "rating": 5,
              "value": "高"
            }
          ]
        },
        {
          "name": "复制成本",
          "note": "Replicable",
          "cells": [
            {
              "rating": 4,
              "value": "低"
            },
            {
              "rating": 5,
              "value": "很低"
            },
            {
              "rating": 2,
              "value": "高"
            }
          ]
        },
        {
          "name": "回报周期",
          "note": "Payback",
          "cells": [
            {
              "rating": 4,
              "value": "12",
              "unit": "月"
            },
            {
              "rating": 5,
              "value": "8",
              "unit": "月"
            },
            {
              "rating": 2,
              "value": "24",
              "unit": "月"
            }
          ]
        }
      ],
      "closingLine": "没有最好的路径，只有最适配你资源的那一条。"
    }
  },
  {
    "key": "theme08_page084",
    "themeKey": "theme08",
    "pageNumber": 84,
    "layout": "THEME08-084",
    "slot": "p91",
    "label": "(91) 金句 · Two-Field",
    "bgClass": "",
    "controls": [
      {
        "key": "backgroundTheme",
        "label": "背景主题",
        "type": "enum",
        "default": "primary",
        "options": [
          "primary",
          "muted",
          "ink"
        ],
        "desc": "主色(电光黄) / 次色(淡紫灰) / 深色(高反差金句)",
        "publicKey": "backgroundTheme",
        "publicLabel": "背景主题",
        "description": "主色(电光黄) / 次色(淡紫灰) / 深色(高反差金句)"
      },
      {
        "key": "showQuoteMark",
        "label": "大引号",
        "type": "boolean",
        "default": true,
        "desc": "背景大号引号 显隐",
        "publicKey": "showQuoteMark",
        "publicLabel": "大引号",
        "description": "背景大号引号 显隐"
      },
      {
        "key": "showSupports",
        "label": "支撑要点",
        "type": "boolean",
        "default": true,
        "desc": "底部支撑要点 显隐",
        "publicKey": "showSupports",
        "publicLabel": "支撑要点",
        "description": "底部支撑要点 显隐"
      },
      {
        "key": "supportCount",
        "label": "要点数量",
        "type": "number",
        "default": 3,
        "min": 0,
        "max": 3,
        "step": 1,
        "desc": "展示的支撑要点数量(0–3)",
        "publicKey": "supportCount",
        "publicLabel": "要点数量",
        "description": "展示的支撑要点数量(0–3)"
      },
      {
        "key": "focusEnabled",
        "label": "重点强调",
        "type": "boolean",
        "default": true,
        "desc": "是否突出某一行金句（及对应支撑要点）",
        "publicKey": "focusEnabled",
        "publicLabel": "重点强调",
        "description": "是否突出某一行金句（及对应支撑要点）"
      },
      {
        "key": "focusIndex",
        "label": "重点行",
        "type": "number",
        "default": 0,
        "min": 0,
        "max": 2,
        "step": 1,
        "desc": "作为重点强调场的行序号(从 0 起)",
        "publicKey": "focusIndex",
        "publicLabel": "重点行",
        "description": "作为重点强调场的行序号(从 0 起)"
      },
      {
        "key": "showDecor",
        "label": "装饰元素",
        "type": "boolean",
        "default": true,
        "desc": "手绘火花与贴纸标签 显隐",
        "publicKey": "showDecor",
        "publicLabel": "装饰元素",
        "description": "手绘火花与贴纸标签 显隐"
      }
    ],
    "defaultProps": {
      "backgroundTheme": "primary",
      "showQuoteMark": true,
      "showSupports": true,
      "supportCount": 3,
      "focusEnabled": true,
      "focusIndex": 0,
      "showDecor": true,
      "eyebrow": "Summary · 总结一句",
      "kicker": "金句页",
      "label": "一句话收束",
      "lines": [
        "资本可以催熟赛道，",
        "但只有现金流",
        "能决定谁活到最后。"
      ],
      "supports": [
        "叙事负责融资，留存负责生存。",
        "可计费的价值，胜过漂亮的演示。",
        "穿越周期的，从来是现金流而非估值。"
      ],
      "source": "AI CAPITAL LAB · 全年调研总结"
    }
  }
];
