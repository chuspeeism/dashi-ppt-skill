export const theme = {
  "key": "theme01",
  "displayName": "轻拟态风",
  "label": "轻拟态风",
  "name": "轻拟态风",
  "scenario": "产品介绍、企业汇报、方案说明、轻量级发布",
  "audience": "创业团队、产品经理、销售顾问、企业内部汇报者",
  "mode": "replace"
};
export const pages = [
  {
    "key": "theme01_page001",
    "themeKey": "theme01",
    "pageNumber": 1,
    "layout": "THEME01-001",
    "slot": "cover-editorial",
    "label": "封面 · 编辑式双栏",
    "bgClass": "",
    "controls": [
      {
        "key": "metaCount",
        "label": "元信息行数",
        "type": "number",
        "default": 3,
        "min": 1,
        "max": 3,
        "step": 1,
        "desc": "右侧玻璃面板中竖排元信息的行数。",
        "publicKey": "metaCount",
        "publicLabel": "元信息行数",
        "description": "右侧玻璃面板中竖排元信息的行数。"
      },
      {
        "key": "chipCount",
        "label": "关键词贴纸",
        "type": "number",
        "default": 3,
        "min": 0,
        "max": 3,
        "step": 1,
        "desc": "导语下方贴纸化关键词的数量。",
        "publicKey": "chipCount",
        "publicLabel": "关键词贴纸",
        "description": "导语下方贴纸化关键词的数量。"
      },
      {
        "key": "showLead",
        "label": "导语",
        "type": "boolean",
        "default": true,
        "desc": "标题下方一句话导语的显示。",
        "publicKey": "showLead",
        "publicLabel": "导语",
        "description": "标题下方一句话导语的显示。"
      },
      {
        "key": "showBokeh",
        "label": "柔光光斑",
        "type": "boolean",
        "default": true,
        "desc": "背景柔光 bokeh 光斑的显示。",
        "publicKey": "showBokeh",
        "publicLabel": "柔光光斑",
        "description": "背景柔光 bokeh 光斑的显示。"
      },
      {
        "key": "accentColor",
        "label": "主题色",
        "type": "color",
        "default": "#5b8def",
        "options": [
          "#5b8def",
          "#46b083",
          "#e0a23a",
          "#e8503a",
          "#7a5ae0"
        ],
        "desc": "kicker、荧光高亮、光球与面板序号的主题色。",
        "publicKey": "accentColor",
        "publicLabel": "主题色",
        "description": "kicker、荧光高亮、光球与面板序号的主题色。"
      },
      {
        "key": "showCaption",
        "label": "脚注说明",
        "type": "boolean",
        "default": true,
        "desc": "底部 */ … /* mono 脚注的显示。",
        "publicKey": "showCaption",
        "publicLabel": "脚注说明",
        "description": "底部 */ … /* mono 脚注的显示。"
      }
    ],
    "defaultProps": {
      "kicker": "年度报告 · VOL.07",
      "titleTop": "新消费趋势",
      "titleBottom": "年度报告",
      "en": "Annual Consumer Trends Report",
      "lead": "横纵双维，解码一年的消费迁徙与品牌机会。",
      "chips": [
        "消费迁徙",
        "品牌机会",
        "增长信号"
      ],
      "panelIndex": "07",
      "panelEn": "REPORT · 2026",
      "meta": [
        {
          "label": "EDITION",
          "value": "Vol. 07"
        },
        {
          "label": "RELEASE",
          "value": "2026 · 06"
        },
        {
          "label": "ISSUED BY",
          "value": "灯塔研究院"
        }
      ],
      "footnote": "灯塔研究院 · 横纵双维洞察 · 2026 编制",
      "metaCount": 3,
      "chipCount": 3,
      "showLead": true,
      "showBokeh": true,
      "accentColor": "#5b8def",
      "showCaption": true
    }
  },
  {
    "key": "theme01_page002",
    "themeKey": "theme01",
    "pageNumber": 2,
    "layout": "THEME01-002",
    "slot": "cover-minimal",
    "label": "封面 · 居中极简",
    "bgClass": "",
    "controls": [
      {
        "key": "pillCount",
        "label": "关键词药丸",
        "type": "number",
        "default": 3,
        "min": 0,
        "max": 3,
        "step": 1,
        "desc": "副标下方贴纸化关键词药丸的数量。",
        "publicKey": "pillCount",
        "publicLabel": "关键词药丸",
        "description": "副标下方贴纸化关键词药丸的数量。"
      },
      {
        "key": "showOrb",
        "label": "玻璃光球",
        "type": "boolean",
        "default": true,
        "desc": "标题上方招牌玻璃高光球体的显示。",
        "publicKey": "showOrb",
        "publicLabel": "玻璃光球",
        "description": "标题上方招牌玻璃高光球体的显示。"
      },
      {
        "key": "showSubtitle",
        "label": "副标题",
        "type": "boolean",
        "default": true,
        "desc": "主标题下方副标题的显示。",
        "publicKey": "showSubtitle",
        "publicLabel": "副标题",
        "description": "主标题下方副标题的显示。"
      },
      {
        "key": "showBokeh",
        "label": "柔光光斑",
        "type": "boolean",
        "default": true,
        "desc": "四角散落柔光 bokeh 光斑的显示。",
        "publicKey": "showBokeh",
        "publicLabel": "柔光光斑",
        "description": "四角散落柔光 bokeh 光斑的显示。"
      },
      {
        "key": "accentColor",
        "label": "主题色",
        "type": "color",
        "default": "#46b083",
        "options": [
          "#46b083",
          "#5b8def",
          "#e0a23a",
          "#e8503a",
          "#7a5ae0"
        ],
        "desc": "光球、荧光高亮、光斑与首枚药丸的主题色。",
        "publicKey": "accentColor",
        "publicLabel": "主题色",
        "description": "光球、荧光高亮、光斑与首枚药丸的主题色。"
      },
      {
        "key": "showCaption",
        "label": "脚注说明",
        "type": "boolean",
        "default": true,
        "desc": "底部 */ … /* mono 脚注的显示。",
        "publicKey": "showCaption",
        "publicLabel": "脚注说明",
        "description": "底部 */ … /* mono 脚注的显示。"
      }
    ],
    "defaultProps": {
      "enKicker": "GLOBAL BRAND GROWTH",
      "titleTop": "全球品牌",
      "titleBottom": "增长白皮书",
      "subtitle": "从规模扩张到价值深耕",
      "pills": [
        "增长飞轮",
        "价值复利",
        "长期主义"
      ],
      "meta": "2026 年度版 · 灯塔研究院",
      "footnote": "灯塔研究院 · 全球品牌增长研究 · 2026",
      "pillCount": 3,
      "showOrb": true,
      "showSubtitle": true,
      "showBokeh": true,
      "accentColor": "#46b083",
      "showCaption": true
    }
  },
  {
    "key": "theme01_page003",
    "themeKey": "theme01",
    "pageNumber": 3,
    "layout": "THEME01-003",
    "slot": "cover-bento",
    "label": "封面 · 模块化便当格",
    "bgClass": "",
    "controls": [
      {
        "key": "tileCount",
        "label": "元信息瓦",
        "type": "number",
        "default": 3,
        "min": 1,
        "max": 3,
        "step": 1,
        "desc": "底排元信息瓦片的数量（自动均分宽度）。",
        "publicKey": "tileCount",
        "publicLabel": "元信息瓦",
        "description": "底排元信息瓦片的数量（自动均分宽度）。"
      },
      {
        "key": "showBigTile",
        "label": "数字瓦",
        "type": "boolean",
        "default": true,
        "desc": "右上 accent 数字瓦的显示；关闭时标题瓦横向铺满。",
        "publicKey": "showBigTile",
        "publicLabel": "数字瓦",
        "description": "右上 accent 数字瓦的显示；关闭时标题瓦横向铺满。"
      },
      {
        "key": "accentColor",
        "label": "主题色",
        "type": "color",
        "default": "#e0a23a",
        "options": [
          "#e0a23a",
          "#5b8def",
          "#46b083",
          "#e8503a",
          "#7a5ae0"
        ],
        "desc": "kicker、数字瓦与徽章的主题色。",
        "publicKey": "accentColor",
        "publicLabel": "主题色",
        "description": "kicker、数字瓦与徽章的主题色。"
      },
      {
        "key": "showCaption",
        "label": "脚注说明",
        "type": "boolean",
        "default": true,
        "desc": "底部 */ … /* mono 脚注的显示。",
        "publicKey": "showCaption",
        "publicLabel": "脚注说明",
        "description": "底部 */ … /* mono 脚注的显示。"
      }
    ],
    "defaultProps": {
      "kicker": "行动指南 · 2026",
      "titleTop": "数字化转型",
      "titleBottom": "行动指南",
      "en": "Digital Transformation Playbook",
      "bigNumber": "36",
      "bigLabel": "套可落地方法",
      "tiles": [
        {
          "label": "RELEASE",
          "value": "2026 · 06"
        },
        {
          "label": "EDITION",
          "value": "Vol. 07"
        },
        {
          "label": "FORMAT",
          "value": "实战图谱版"
        }
      ],
      "footnote": "灯塔研究院 · 数字化转型研究 · 2026",
      "tileCount": 3,
      "showBigTile": true,
      "accentColor": "#e0a23a",
      "showCaption": true
    }
  },
  {
    "key": "theme01_page004",
    "themeKey": "theme01",
    "pageNumber": 4,
    "layout": "THEME01-004",
    "slot": "cover-masthead",
    "label": "封面 · 磨砂玻璃刊头",
    "bgClass": "",
    "controls": [
      {
        "key": "statCount",
        "label": "规格指标",
        "type": "number",
        "default": 3,
        "min": 1,
        "max": 3,
        "step": 1,
        "desc": "刊头牌底部内嵌规格指标条的项数（自动均分）。",
        "publicKey": "statCount",
        "publicLabel": "规格指标",
        "description": "刊头牌底部内嵌规格指标条的项数（自动均分）。"
      },
      {
        "key": "showSticker",
        "label": "贴纸标签",
        "type": "boolean",
        "default": true,
        "desc": "刊头牌右上角贴纸化标签的显示。",
        "publicKey": "showSticker",
        "publicLabel": "贴纸标签",
        "description": "刊头牌右上角贴纸化标签的显示。"
      },
      {
        "key": "showBokeh",
        "label": "柔光光斑",
        "type": "boolean",
        "default": true,
        "desc": "牌体背后满版柔光 bokeh 光斑的显示。",
        "publicKey": "showBokeh",
        "publicLabel": "柔光光斑",
        "description": "牌体背后满版柔光 bokeh 光斑的显示。"
      },
      {
        "key": "accentColor",
        "label": "主题色",
        "type": "color",
        "default": "#7a5ae0",
        "options": [
          "#7a5ae0",
          "#5b8def",
          "#46b083",
          "#e0a23a",
          "#e8503a"
        ],
        "desc": "kicker、荧光高亮、贴纸与首项指标的主题色。",
        "publicKey": "accentColor",
        "publicLabel": "主题色",
        "description": "kicker、荧光高亮、贴纸与首项指标的主题色。"
      },
      {
        "key": "showCaption",
        "label": "脚注说明",
        "type": "boolean",
        "default": true,
        "desc": "底部 */ … /* mono 脚注的显示。",
        "publicKey": "showCaption",
        "publicLabel": "脚注说明",
        "description": "底部 */ … /* mono 脚注的显示。"
      }
    ],
    "defaultProps": {
      "kicker": "年度旗舰 · 2026",
      "issue": "VOL.07 · 2026.06",
      "overline": "ANNUAL MARKET INSIGHT",
      "titleTop": "年度市场",
      "titleBottom": "洞察报告",
      "subtitle": "横纵双维，十二大主题深度透视。",
      "sticker": "年度旗舰",
      "stats": [
        {
          "value": "12 大",
          "label": "研究主题"
        },
        {
          "value": "240+",
          "label": "关键数据点"
        },
        {
          "value": "18 个",
          "label": "覆盖行业"
        }
      ],
      "footnote": "灯塔研究院 · 年度市场洞察 · 2026",
      "statCount": 3,
      "showSticker": true,
      "showBokeh": true,
      "accentColor": "#7a5ae0",
      "showCaption": true
    }
  },
  {
    "key": "theme01_page005",
    "themeKey": "theme01",
    "pageNumber": 5,
    "layout": "THEME01-005",
    "slot": "cover",
    "label": "封面",
    "bgClass": "",
    "controls": [
      {
        "key": "statCount",
        "label": "指标卡数量",
        "type": "number",
        "default": 3,
        "min": 1,
        "max": 3,
        "step": 1,
        "desc": "封面展示的关键指标卡片数量。",
        "publicKey": "statCount",
        "publicLabel": "指标卡数量",
        "description": "封面展示的关键指标卡片数量。"
      },
      {
        "key": "highlight",
        "label": "重点强调",
        "type": "boolean",
        "default": false,
        "desc": "是否高亮强调其中某一张指标卡。",
        "publicKey": "highlight",
        "publicLabel": "重点强调",
        "description": "是否高亮强调其中某一张指标卡。"
      },
      {
        "key": "highlightIndex",
        "label": "强调第几张",
        "type": "number",
        "default": 0,
        "min": 0,
        "max": 2,
        "step": 1,
        "desc": "被强调的指标卡序号（从 0 开始），仅在「重点强调」开启时生效。",
        "publicKey": "highlightIndex",
        "publicLabel": "强调第几张",
        "description": "被强调的指标卡序号（从 0 开始），仅在「重点强调」开启时生效。"
      },
      {
        "key": "accentColor",
        "label": "主题色",
        "type": "color",
        "default": "#5b8def",
        "options": [
          "#5b8def",
          "#46b083",
          "#e0a23a",
          "#e8503a",
          "#7a5ae0"
        ],
        "desc": "光球与强调卡片的主题色。",
        "publicKey": "accentColor",
        "publicLabel": "主题色",
        "description": "光球与强调卡片的主题色。"
      },
      {
        "key": "showCaption",
        "label": "脚注说明",
        "type": "boolean",
        "default": true,
        "desc": "是否显示底部数据口径脚注。",
        "publicKey": "showCaption",
        "publicLabel": "脚注说明",
        "description": "是否显示底部数据口径脚注。"
      }
    ],
    "defaultProps": {
      "eyebrow": "2024 · United States · Venture Capital",
      "titleTop": "美国大额融资 AI 公司",
      "titleBottom": "调研报告",
      "enSubtitle": "US AI Mega-Funding Research Report",
      "stats": [
        {
          "value": "970",
          "unit": "亿美元",
          "caption": "全年 AI 风投吸纳 · 创历史新高"
        },
        {
          "value": "97",
          "unit": "笔",
          "caption": "单笔 ≥ 1 亿美元的融资事件"
        },
        {
          "value": "≈1/3",
          "unit": "",
          "caption": "占全美全部风险投资的份额"
        }
      ],
      "footnote": "数据口径：2024 全年公开披露的 ≥1 亿美元融资事件 · 编制 2026-06-03",
      "statCount": 3,
      "highlight": false,
      "highlightIndex": 0,
      "accentColor": "#5b8def",
      "showCaption": true
    }
  },
  {
    "key": "theme01_page006",
    "themeKey": "theme01",
    "pageNumber": 6,
    "layout": "THEME01-006",
    "slot": "bignum",
    "label": "大数字 · 资本体量",
    "bgClass": "",
    "controls": [
      {
        "key": "secondaryCount",
        "label": "副指标数量",
        "type": "number",
        "default": 3,
        "min": 0,
        "max": 3,
        "step": 1,
        "desc": "主数字下方的副统计卡数量。",
        "publicKey": "secondaryCount",
        "publicLabel": "副指标数量",
        "description": "主数字下方的副统计卡数量。"
      },
      {
        "key": "accentColor",
        "label": "主题色",
        "type": "color",
        "default": "#e8503a",
        "options": [
          "#e8503a",
          "#5b8def",
          "#46b083",
          "#e0a23a",
          "#7a5ae0"
        ],
        "desc": "主数字与荧光高亮的颜色。",
        "publicKey": "accentColor",
        "publicLabel": "主题色",
        "description": "主数字与荧光高亮的颜色。"
      },
      {
        "key": "showHighlighter",
        "label": "荧光高亮",
        "type": "boolean",
        "default": true,
        "desc": "是否给说明句中的关键词加荧光底纹。",
        "publicKey": "showHighlighter",
        "publicLabel": "荧光高亮",
        "description": "是否给说明句中的关键词加荧光底纹。"
      },
      {
        "key": "highlight",
        "label": "重点强调",
        "type": "boolean",
        "default": true,
        "desc": "是否高亮其中一个副指标。",
        "publicKey": "highlight",
        "publicLabel": "重点强调",
        "description": "是否高亮其中一个副指标。"
      },
      {
        "key": "highlightIndex",
        "label": "强调第几个",
        "type": "number",
        "default": 0,
        "min": 0,
        "max": 2,
        "step": 1,
        "desc": "被强调的副指标序号（从 0 开始）。",
        "publicKey": "highlightIndex",
        "publicLabel": "强调第几个",
        "description": "被强调的副指标序号（从 0 开始）。"
      },
      {
        "key": "align",
        "label": "对齐方式",
        "type": "select",
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
        "desc": "整页内容的对齐方式。",
        "publicKey": "align",
        "publicLabel": "对齐方式",
        "description": "整页内容的对齐方式。"
      },
      {
        "key": "showCaption",
        "label": "装饰文案",
        "type": "boolean",
        "default": true,
        "desc": "底部 */ … /* 说明文案的显示。",
        "publicKey": "showCaption",
        "publicLabel": "装饰文案",
        "description": "底部 */ … /* 说明文案的显示。"
      }
    ],
    "defaultProps": {
      "kicker": "2024 全年 · 美国 AI 风险投资",
      "value": "970",
      "unit": "亿美元",
      "sub": "创历史新高，占全美风险投资近三分之一。",
      "highlightWord": "近三分之一",
      "secondaries": [
        {
          "value": "97",
          "unit": " 笔",
          "label": "单笔 ≥ 1 亿美元事件"
        },
        {
          "value": "≈10",
          "unit": " 亿",
          "label": "平均单笔融资额"
        },
        {
          "value": "43.3",
          "unit": "%",
          "label": "通用大模型赛道占比"
        }
      ],
      "caption": "大数字 · 一眼看清资本体量",
      "secondaryCount": 3,
      "accentColor": "#e8503a",
      "showHighlighter": true,
      "highlight": true,
      "highlightIndex": 0,
      "align": "center",
      "showCaption": true
    }
  },
  {
    "key": "theme01_page007",
    "themeKey": "theme01",
    "pageNumber": 7,
    "layout": "THEME01-007",
    "slot": "statgrid",
    "label": "关键数字一览",
    "bgClass": "",
    "controls": [
      {
        "key": "itemCount",
        "label": "数字卡数量",
        "type": "number",
        "default": 4,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "展示的关键数字卡数量。",
        "publicKey": "itemCount",
        "publicLabel": "数字卡数量",
        "description": "展示的关键数字卡数量。"
      },
      {
        "key": "columns",
        "label": "每行列数",
        "type": "select",
        "default": 2,
        "options": [
          {
            "value": 2,
            "label": "两列"
          },
          {
            "value": 4,
            "label": "一行排开"
          }
        ],
        "desc": "数字卡的网格列数。",
        "publicKey": "columns",
        "publicLabel": "每行列数",
        "description": "数字卡的网格列数。"
      },
      {
        "key": "highlight",
        "label": "重点强调",
        "type": "boolean",
        "default": true,
        "desc": "是否把其中一个数字卡渲染成荧光「印章」贴纸。",
        "publicKey": "highlight",
        "publicLabel": "重点强调",
        "description": "是否把其中一个数字卡渲染成荧光「印章」贴纸。"
      },
      {
        "key": "highlightIndex",
        "label": "强调第几个",
        "type": "number",
        "default": 3,
        "min": 0,
        "max": 3,
        "step": 1,
        "desc": "被强调的数字卡序号（从 0 开始）。",
        "publicKey": "highlightIndex",
        "publicLabel": "强调第几个",
        "description": "被强调的数字卡序号（从 0 开始）。"
      },
      {
        "key": "accentColor",
        "label": "强调色",
        "type": "color",
        "default": "#e8503a",
        "options": [
          "#e8503a",
          "#5b8def",
          "#46b083",
          "#e0a23a",
          "#7a5ae0",
          "#c9f24d"
        ],
        "desc": "被强调数字卡的荧光贴纸颜色。",
        "publicKey": "accentColor",
        "publicLabel": "强调色",
        "description": "被强调数字卡的荧光贴纸颜色。"
      },
      {
        "key": "showCaption",
        "label": "装饰文案",
        "type": "boolean",
        "default": true,
        "desc": "底部 */ … /* 说明文案的显示。",
        "publicKey": "showCaption",
        "publicLabel": "装饰文案",
        "description": "底部 */ … /* 说明文案的显示。"
      }
    ],
    "defaultProps": {
      "kicker": "市场速览",
      "title": "关键数字一览",
      "en": "The Year in Numbers",
      "cn": "一屏读懂 2024 美国 AI 资本体量",
      "stats": [
        {
          "value": "970",
          "unit": "亿美元",
          "label": "全年 AI 风险投资",
          "sub": "创历史新高",
          "color": "#5b8def"
        },
        {
          "value": "≈1/3",
          "unit": "",
          "label": "占全美风险投资",
          "sub": "近三分之一流向 AI",
          "color": "#46b083"
        },
        {
          "value": "97",
          "unit": "笔",
          "label": "单笔 ≥ 1 亿美元事件",
          "sub": "平均约 10 亿 / 笔",
          "color": "#e0a23a"
        },
        {
          "value": "9650",
          "unit": "亿美元",
          "label": "Anthropic 估值",
          "sub": "全球估值最高 AI 初创",
          "color": "#e8503a"
        }
      ],
      "caption": "大数字 · 资本体量的四个坐标",
      "itemCount": 4,
      "columns": 2,
      "highlight": true,
      "highlightIndex": 3,
      "accentColor": "#e8503a",
      "showCaption": true
    }
  },
  {
    "key": "theme01_page008",
    "themeKey": "theme01",
    "pageNumber": 8,
    "layout": "THEME01-008",
    "slot": "bento",
    "label": "便当速览 · 一图读懂",
    "bgClass": "",
    "controls": [
      {
        "key": "imageSlotCount",
        "label": "图片数量",
        "type": "number",
        "default": 2,
        "min": 0,
        "max": 3,
        "step": 1,
        "desc": "右侧影像区图片数（0 数据区铺满 / 1 满版 / 2 上下 / 3 一大两小），按比例自适应。",
        "publicKey": "imageSlotCount",
        "publicLabel": "图片数量",
        "description": "右侧影像区图片数（0 数据区铺满 / 1 满版 / 2 上下 / 3 一大两小），按比例自适应。"
      },
      {
        "key": "imageFit",
        "label": "图片填充",
        "type": "select",
        "default": "cover",
        "options": [
          {
            "value": "cover",
            "label": "裁剪填满"
          },
          {
            "value": "contain",
            "label": "完整自适应"
          }
        ],
        "desc": "裁剪填满铺满拼块，或完整自适应按原始比例显示。",
        "publicKey": "imageFit",
        "publicLabel": "图片填充",
        "description": "裁剪填满铺满拼块，或完整自适应按原始比例显示。"
      },
      {
        "key": "images",
        "label": "图片",
        "type": "images",
        "countKey": "imageSlotCount",
        "desc": "上传影像，槽位自适应图片比例。",
        "publicKey": "images",
        "publicLabel": "图片",
        "description": "上传影像，槽位自适应图片比例。"
      },
      {
        "key": "listCount",
        "label": "榜单条目",
        "type": "number",
        "default": 3,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "榜单拼块展示的条目数量。",
        "publicKey": "itemCount",
        "publicLabel": "榜单条目",
        "description": "榜单拼块展示的条目数量。"
      },
      {
        "key": "showRatio",
        "label": "占比环块",
        "type": "boolean",
        "default": true,
        "desc": "集中度占比环形拼块的显示。",
        "publicKey": "showRatio",
        "publicLabel": "占比环块",
        "description": "集中度占比环形拼块的显示。"
      },
      {
        "key": "showQuote",
        "label": "金句块",
        "type": "boolean",
        "default": true,
        "desc": "底部金句拼块的显示。",
        "publicKey": "showQuote",
        "publicLabel": "金句块",
        "description": "底部金句拼块的显示。"
      },
      {
        "key": "accentColor",
        "label": "主题色",
        "type": "color",
        "default": "#46b083",
        "options": [
          "#46b083",
          "#5b8def",
          "#e0a23a",
          "#e8503a",
          "#7a5ae0",
          "#c9f24d"
        ],
        "desc": "荧光、占比环与强调元素的颜色。",
        "publicKey": "accentColor",
        "publicLabel": "主题色",
        "description": "荧光、占比环与强调元素的颜色。"
      },
      {
        "key": "showCaption",
        "label": "装饰文案",
        "type": "boolean",
        "default": true,
        "desc": "底部 */ … /* 说明文案的显示。",
        "publicKey": "showCaption",
        "publicLabel": "装饰文案",
        "description": "底部 */ … /* 说明文案的显示。"
      }
    ],
    "defaultProps": {
      "kicker": "速览 · 一图读懂",
      "tone": "green",
      "title": "一图读懂 · 2024 AI 融资全景",
      "en": "The Year in One Frame",
      "cn": "总量、头部、集中度与拐点",
      "hero": {
        "value": "700",
        "unit": "亿",
        "label": "2024 美国 AI 大额融资总额 · 美元",
        "sub": "单笔 ≥ 1 亿美元口径"
      },
      "listTitle": "单笔融资 Top 3",
      "list": [
        {
          "name": "OpenAI",
          "value": "66",
          "unit": "亿"
        },
        {
          "name": "Anthropic",
          "value": "65",
          "unit": "亿"
        },
        {
          "name": "xAI",
          "value": "50",
          "unit": "亿"
        }
      ],
      "ratio": {
        "value": 63.9,
        "unit": "%",
        "label": "旧金山湾区占比"
      },
      "quote": {
        "text": "资本正从「赌叙事」转向「看兑现」。",
        "mark": "看兑现"
      },
      "images": [
        "",
        "",
        ""
      ],
      "caption": "便当速览 · 把一年的资本故事压进一屏",
      "imageSlotCount": 2,
      "imageFit": "cover",
      "listCount": 3,
      "showRatio": true,
      "showQuote": true,
      "accentColor": "#46b083",
      "showCaption": true
    }
  },
  {
    "key": "theme01_page009",
    "themeKey": "theme01",
    "pageNumber": 9,
    "layout": "THEME01-009",
    "slot": "contents",
    "label": "报告导览 · 目录",
    "bgClass": "",
    "controls": [
      {
        "key": "chapterCount",
        "label": "章节数量",
        "type": "number",
        "default": 7,
        "min": 3,
        "max": 7,
        "step": 1,
        "desc": "目录展示的章节卡数量。",
        "publicKey": "chapterCount",
        "publicLabel": "章节数量",
        "description": "目录展示的章节卡数量。"
      },
      {
        "key": "highlight",
        "label": "重点强调",
        "type": "boolean",
        "default": false,
        "desc": "是否高亮强调其中一个章节（如「当前所在」）。",
        "publicKey": "highlight",
        "publicLabel": "重点强调",
        "description": "是否高亮强调其中一个章节（如「当前所在」）。"
      },
      {
        "key": "highlightIndex",
        "label": "强调第几章",
        "type": "number",
        "default": 0,
        "min": 0,
        "max": 6,
        "step": 1,
        "desc": "被强调的章节序号（从 0 开始）。",
        "publicKey": "highlightIndex",
        "publicLabel": "强调第几章",
        "description": "被强调的章节序号（从 0 开始）。"
      },
      {
        "key": "accentColor",
        "label": "主题色",
        "type": "color",
        "default": "#5b8def",
        "options": [
          "#5b8def",
          "#46b083",
          "#e0a23a",
          "#e8503a",
          "#7a5ae0"
        ],
        "desc": "序号与高亮的统一强调色。",
        "publicKey": "accentColor",
        "publicLabel": "主题色",
        "description": "序号与高亮的统一强调色。"
      },
      {
        "key": "showDesc",
        "label": "章节简介",
        "type": "boolean",
        "default": true,
        "desc": "是否在每张卡上显示一句话简介。",
        "publicKey": "showDesc",
        "publicLabel": "章节简介",
        "description": "是否在每张卡上显示一句话简介。"
      },
      {
        "key": "showCaption",
        "label": "装饰文案",
        "type": "boolean",
        "default": true,
        "desc": "底部 */ … /* 说明文案的显示。",
        "publicKey": "showCaption",
        "publicLabel": "装饰文案",
        "description": "底部 */ … /* 说明文案的显示。"
      }
    ],
    "defaultProps": {
      "kicker": "# 报告导览",
      "title": "目录 · 七个章节",
      "en": "Contents",
      "cn": "横纵分析法贯穿全篇",
      "chapters": [
        {
          "no": "01",
          "label": "研究方法",
          "en": "Methodology",
          "desc": "横纵两维切入同一组数据，互为补充"
        },
        {
          "no": "02",
          "label": "市场全景",
          "en": "Market Overview",
          "desc": "逐季度 / 月度融资走势与节奏"
        },
        {
          "no": "03",
          "label": "横向透视",
          "en": "Horizontal View",
          "desc": "赛道、轮次、头部玩家与地区分布"
        },
        {
          "no": "04",
          "label": "产业链分层",
          "en": "Industry Chain",
          "desc": "上游 — 中游 — 下游的层级结构"
        },
        {
          "no": "05",
          "label": "典型案例",
          "en": "Case Studies",
          "desc": "Anthropic / xAI / CoreWeave 深度剖析"
        },
        {
          "no": "06",
          "label": "风险与展望",
          "en": "Risks & Outlook",
          "desc": "四重风险传导 + 阶段性策略"
        },
        {
          "no": "07",
          "label": "结论",
          "en": "Conclusion",
          "desc": "横向集中 · 纵向节奏 · 结构分层"
        }
      ],
      "caption": "导览 · 全篇结构一览",
      "chapterCount": 7,
      "highlight": false,
      "highlightIndex": 0,
      "accentColor": "#5b8def",
      "showDesc": true,
      "showCaption": true
    }
  },
  {
    "key": "theme01_page010",
    "themeKey": "theme01",
    "pageNumber": 10,
    "layout": "THEME01-010",
    "slot": "method",
    "label": "横纵分析法",
    "bgClass": "",
    "controls": [
      {
        "key": "colorA",
        "label": "横向 颜色",
        "type": "color",
        "default": "#5b8def",
        "options": [
          "#5b8def",
          "#7a5ae0",
          "#46b083",
          "#e8503a"
        ],
        "desc": "横向（空间维度）卡片配色。",
        "publicKey": "colorA",
        "publicLabel": "横向 颜色",
        "description": "横向（空间维度）卡片配色。"
      },
      {
        "key": "colorB",
        "label": "纵向 颜色",
        "type": "color",
        "default": "#46b083",
        "options": [
          "#46b083",
          "#5b8def",
          "#e0a23a",
          "#e8503a"
        ],
        "desc": "纵向（时间维度）卡片配色。",
        "publicKey": "colorB",
        "publicLabel": "纵向 颜色",
        "description": "纵向（时间维度）卡片配色。"
      },
      {
        "key": "accentColor",
        "label": "交叉 强调色",
        "type": "color",
        "default": "#e8503a",
        "options": [
          "#e8503a",
          "#e0a23a",
          "#7a5ae0",
          "#5b8def"
        ],
        "desc": "交叉节点与结果条的强调色。",
        "publicKey": "accentColor",
        "publicLabel": "交叉 强调色",
        "description": "交叉节点与结果条的强调色。"
      },
      {
        "key": "operator",
        "label": "交叉符号",
        "type": "select",
        "default": "×",
        "options": [
          {
            "value": "×",
            "label": "×"
          },
          {
            "value": "+",
            "label": "+"
          },
          {
            "value": "⊗",
            "label": "⊗"
          }
        ],
        "desc": "两个维度之间的运算符号。",
        "publicKey": "operator",
        "publicLabel": "交叉符号",
        "description": "两个维度之间的运算符号。"
      },
      {
        "key": "tiltAngle",
        "label": "倾斜角度",
        "type": "number",
        "default": 10,
        "min": 0,
        "max": 24,
        "step": 1,
        "desc": "两张卡片向中心汇聚的 3D 倾斜角度（左卡向右、右卡向左）；0° 为平面。",
        "publicKey": "tiltAngle",
        "publicLabel": "倾斜角度",
        "description": "两张卡片向中心汇聚的 3D 倾斜角度（左卡向右、右卡向左）；0° 为平面。"
      },
      {
        "key": "showCaption",
        "label": "装饰文案",
        "type": "boolean",
        "default": true,
        "desc": "是否显示底部说明文案。",
        "publicKey": "showCaption",
        "publicLabel": "装饰文案",
        "description": "是否显示底部说明文案。"
      }
    ],
    "defaultProps": {
      "kicker": "# 研究方法",
      "title": "横纵分析法",
      "en": "Horizontal & Vertical Analysis",
      "cn": "从两个正交维度切入同一组数据",
      "axisA": {
        "tag": "横向",
        "title": "空间维度",
        "en": "HORIZONTAL",
        "desc": "同一时间截面上，对公司、赛道、轮次、地区横向对比——谁更大、谁更密集、资源集中在哪里。"
      },
      "axisB": {
        "tag": "纵向",
        "title": "时间维度",
        "en": "VERTICAL",
        "desc": "沿时间轴追踪同一指标的演化——趋势向上还是向下、拐点在何处、节奏是否可持续。"
      },
      "result": "产业链层级结构 · 因果传导关系",
      "caption": "两个维度交叉后，可进一步识别产业链的层级结构与因果传导关系",
      "colorA": "#5b8def",
      "colorB": "#46b083",
      "accentColor": "#e8503a",
      "operator": "×",
      "tiltAngle": 10,
      "showCaption": true
    }
  },
  {
    "key": "theme01_page011",
    "themeKey": "theme01",
    "pageNumber": 11,
    "layout": "THEME01-011",
    "slot": "chapter-market",
    "label": "章节 · 市场全景",
    "bgClass": "",
    "controls": [
      {
        "key": "topicCount",
        "label": "主线数量",
        "type": "number",
        "default": 4,
        "min": 0,
        "max": 5,
        "step": 1,
        "desc": "展示的分主题贴纸数量（0 时只显示标题）。",
        "publicKey": "topicCount",
        "publicLabel": "主线数量",
        "description": "展示的分主题贴纸数量（0 时只显示标题）。"
      },
      {
        "key": "highlight",
        "label": "重点强调",
        "type": "boolean",
        "default": true,
        "desc": "是否高亮其中一条主线贴纸。",
        "publicKey": "highlight",
        "publicLabel": "重点强调",
        "description": "是否高亮其中一条主线贴纸。"
      },
      {
        "key": "highlightIndex",
        "label": "强调第几条",
        "type": "number",
        "default": 0,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "被强调的主线序号（从 0 开始）。",
        "publicKey": "highlightIndex",
        "publicLabel": "强调第几条",
        "description": "被强调的主线序号（从 0 开始）。"
      },
      {
        "key": "showGhost",
        "label": "背景巨字",
        "type": "boolean",
        "default": true,
        "desc": "是否显示背景的超大序号（无图片时生效）。",
        "publicKey": "showGhost",
        "publicLabel": "背景巨字",
        "description": "是否显示背景的超大序号（无图片时生效）。"
      },
      {
        "key": "accentColor",
        "label": "主题色",
        "type": "color",
        "default": "#5b8def",
        "options": [
          "#5b8def",
          "#46b083",
          "#e0a23a",
          "#e8503a",
          "#7a5ae0"
        ],
        "desc": "本章主题色（序号、贴纸、高亮）。",
        "publicKey": "accentColor",
        "publicLabel": "主题色",
        "description": "本章主题色（序号、贴纸、高亮）。"
      },
      {
        "key": "imageSlotCount",
        "label": "图片数量",
        "type": "number",
        "default": 0,
        "min": 0,
        "max": 2,
        "step": 1,
        "desc": "右侧图片槽数量（0 时背景巨字铺满，布局自动适配）。",
        "publicKey": "imageSlotCount",
        "publicLabel": "图片数量",
        "description": "右侧图片槽数量（0 时背景巨字铺满，布局自动适配）。"
      },
      {
        "key": "imageFit",
        "label": "图片填充",
        "type": "select",
        "default": "cover",
        "options": [
          {
            "value": "cover",
            "label": "裁剪填满"
          },
          {
            "value": "contain",
            "label": "完整自适应"
          }
        ],
        "desc": "图片填充方式。",
        "publicKey": "imageFit",
        "publicLabel": "图片填充",
        "description": "图片填充方式。"
      },
      {
        "key": "images",
        "label": "图片",
        "type": "images",
        "countKey": "imageSlotCount",
        "desc": "上传图片（数量由「图片数量」控制），槽位自适应图片比例。",
        "publicKey": "images",
        "publicLabel": "图片",
        "description": "上传图片（数量由「图片数量」控制），槽位自适应图片比例。"
      },
      {
        "key": "showCaption",
        "label": "装饰文案",
        "type": "boolean",
        "default": true,
        "desc": "底部 */ … /* 说明文案的显示。",
        "publicKey": "showCaption",
        "publicLabel": "装饰文案",
        "description": "底部 */ … /* 说明文案的显示。"
      }
    ],
    "defaultProps": {
      "kicker": "章节",
      "partLabel": "PART 02",
      "index": "02",
      "title": "市场全景",
      "en": "Market Overview",
      "desc": "沿时间轴追踪同一指标的演化——趋势向上还是向下、拐点在何处、节奏是否可持续。",
      "topics": [
        {
          "label": "逐季度走势"
        },
        {
          "label": "逐月热度"
        },
        {
          "label": "融资节奏"
        }
      ],
      "caption": "章节导航 · 纵向看市场节奏",
      "topicCount": 3,
      "highlight": true,
      "highlightIndex": 0,
      "showGhost": true,
      "accentColor": "#5b8def",
      "imageSlotCount": 0,
      "imageFit": "cover",
      "images": [
        "",
        ""
      ],
      "showCaption": true
    }
  },
  {
    "key": "theme01_page012",
    "themeKey": "theme01",
    "pageNumber": 12,
    "layout": "THEME01-012",
    "slot": "trend",
    "label": "纵向趋势",
    "bgClass": "",
    "controls": [
      {
        "key": "chartType",
        "label": "图表类型",
        "type": "select",
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
        "desc": "时间段走势的图表呈现形式。",
        "publicKey": "chartType",
        "publicLabel": "图表类型",
        "description": "时间段走势的图表呈现形式。"
      },
      {
        "key": "highlight",
        "label": "重点强调",
        "type": "boolean",
        "default": true,
        "desc": "是否高亮强调某一个时间段（如峰值）。",
        "publicKey": "highlight",
        "publicLabel": "重点强调",
        "description": "是否高亮强调某一个时间段（如峰值）。"
      },
      {
        "key": "highlightIndex",
        "label": "强调第几个",
        "type": "number",
        "default": 2,
        "min": 0,
        "max": 3,
        "step": 1,
        "desc": "被强调的时间段序号（从 0 开始）。",
        "publicKey": "highlightIndex",
        "publicLabel": "强调第几个",
        "description": "被强调的时间段序号（从 0 开始）。"
      },
      {
        "key": "showSummary",
        "label": "汇总面板",
        "type": "boolean",
        "default": true,
        "desc": "是否显示右侧全年汇总玻璃卡。",
        "publicKey": "showSummary",
        "publicLabel": "汇总面板",
        "description": "是否显示右侧全年汇总玻璃卡。"
      },
      {
        "key": "showCaption",
        "label": "装饰文案",
        "type": "boolean",
        "default": true,
        "desc": "是否显示底部说明文案。",
        "publicKey": "showCaption",
        "publicLabel": "装饰文案",
        "description": "是否显示底部说明文案。"
      },
      {
        "key": "evil",
        "label": "evilcharts 模式",
        "type": "boolean",
        "default": false,
        "desc": "切换为 evilcharts 风格：点阵底纹 + 柱面 45° 斜纹 + 霓虹辉光（折线/面积为发光线）。",
        "publicKey": "evil",
        "publicLabel": "evilcharts 模式",
        "description": "切换为 evilcharts 风格：点阵底纹 + 柱面 45° 斜纹 + 霓虹辉光（折线/面积为发光线）。"
      }
    ],
    "defaultProps": {
      "kicker": "# 市场全景",
      "title": "纵向趋势 · 逐季度融资走势",
      "en": "Vertical Trend — Quarterly Funding",
      "quarters": [
        {
          "label": "Q1",
          "amount": 162,
          "deals": 18,
          "note": "18 笔",
          "color": "#5b8def"
        },
        {
          "label": "Q2",
          "amount": 284,
          "deals": 26,
          "note": "26 笔",
          "color": "#46b083"
        },
        {
          "label": "Q3",
          "amount": 318,
          "deals": 31,
          "note": "31 笔 · 峰值",
          "color": "#e8503a"
        },
        {
          "label": "Q4",
          "amount": 206,
          "deals": 22,
          "note": "22 笔",
          "color": "#e0a23a"
        }
      ],
      "unit": "亿",
      "summary": {
        "total": "970",
        "totalUnit": "亿美元",
        "en": "Full-Year Total · 97 Deals",
        "rows": [
          {
            "k": "事件笔数",
            "v": "97 笔"
          },
          {
            "k": "平均单笔",
            "v": "≈10 亿"
          }
        ],
        "tag": "Q2–Q3 为融资高峰"
      },
      "caption": "Q2、Q3 达峰后于 Q4 理性回落但仍处高位 · 市场对头部标的高度追捧",
      "chartType": "bar",
      "highlight": true,
      "highlightIndex": 2,
      "showSummary": true,
      "showCaption": true,
      "evil": false
    }
  },
  {
    "key": "theme01_page013",
    "themeKey": "theme01",
    "pageNumber": 13,
    "layout": "THEME01-013",
    "slot": "chapter",
    "label": "章节 · 横向透视",
    "bgClass": "",
    "controls": [
      {
        "key": "topicCount",
        "label": "主线数量",
        "type": "number",
        "default": 4,
        "min": 0,
        "max": 5,
        "step": 1,
        "desc": "展示的分主题贴纸数量（0 时只显示标题）。",
        "publicKey": "topicCount",
        "publicLabel": "主线数量",
        "description": "展示的分主题贴纸数量（0 时只显示标题）。"
      },
      {
        "key": "highlight",
        "label": "重点强调",
        "type": "boolean",
        "default": true,
        "desc": "是否高亮其中一条主线贴纸。",
        "publicKey": "highlight",
        "publicLabel": "重点强调",
        "description": "是否高亮其中一条主线贴纸。"
      },
      {
        "key": "highlightIndex",
        "label": "强调第几条",
        "type": "number",
        "default": 0,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "被强调的主线序号（从 0 开始）。",
        "publicKey": "highlightIndex",
        "publicLabel": "强调第几条",
        "description": "被强调的主线序号（从 0 开始）。"
      },
      {
        "key": "showGhost",
        "label": "背景巨字",
        "type": "boolean",
        "default": true,
        "desc": "是否显示背景的超大序号（无图片时生效）。",
        "publicKey": "showGhost",
        "publicLabel": "背景巨字",
        "description": "是否显示背景的超大序号（无图片时生效）。"
      },
      {
        "key": "accentColor",
        "label": "主题色",
        "type": "color",
        "default": "#5b8def",
        "options": [
          "#5b8def",
          "#46b083",
          "#e0a23a",
          "#e8503a",
          "#7a5ae0"
        ],
        "desc": "本章主题色（序号、贴纸、高亮）。",
        "publicKey": "accentColor",
        "publicLabel": "主题色",
        "description": "本章主题色（序号、贴纸、高亮）。"
      },
      {
        "key": "imageSlotCount",
        "label": "图片数量",
        "type": "number",
        "default": 0,
        "min": 0,
        "max": 2,
        "step": 1,
        "desc": "右侧图片槽数量（0 时背景巨字铺满，布局自动适配）。",
        "publicKey": "imageSlotCount",
        "publicLabel": "图片数量",
        "description": "右侧图片槽数量（0 时背景巨字铺满，布局自动适配）。"
      },
      {
        "key": "imageFit",
        "label": "图片填充",
        "type": "select",
        "default": "cover",
        "options": [
          {
            "value": "cover",
            "label": "裁剪填满"
          },
          {
            "value": "contain",
            "label": "完整自适应"
          }
        ],
        "desc": "图片填充方式。",
        "publicKey": "imageFit",
        "publicLabel": "图片填充",
        "description": "图片填充方式。"
      },
      {
        "key": "images",
        "label": "图片",
        "type": "images",
        "countKey": "imageSlotCount",
        "desc": "上传图片（数量由「图片数量」控制），槽位自适应图片比例。",
        "publicKey": "images",
        "publicLabel": "图片",
        "description": "上传图片（数量由「图片数量」控制），槽位自适应图片比例。"
      },
      {
        "key": "showCaption",
        "label": "装饰文案",
        "type": "boolean",
        "default": true,
        "desc": "底部 */ … /* 说明文案的显示。",
        "publicKey": "showCaption",
        "publicLabel": "装饰文案",
        "description": "底部 */ … /* 说明文案的显示。"
      }
    ],
    "defaultProps": {
      "kicker": "章节",
      "partLabel": "PART 03",
      "index": "03",
      "title": "横向透视",
      "en": "Horizontal Perspective",
      "desc": "在同一时间截面上，横向对比公司、赛道、轮次与地区——谁更大、谁更密集、资源集中在哪里。",
      "topics": [
        {
          "label": "行业赛道"
        },
        {
          "label": "轮次结构"
        },
        {
          "label": "头部玩家"
        },
        {
          "label": "地区分布"
        },
        {
          "label": "资本四象限"
        }
      ],
      "caption": "章节导航 · 横向透视的四条主线",
      "topicCount": 4,
      "highlight": true,
      "highlightIndex": 0,
      "showGhost": true,
      "accentColor": "#5b8def",
      "imageSlotCount": 0,
      "imageFit": "cover",
      "images": [
        "",
        ""
      ],
      "showCaption": true
    }
  },
  {
    "key": "theme01_page014",
    "themeKey": "theme01",
    "pageNumber": 14,
    "layout": "THEME01-014",
    "slot": "chain",
    "label": "产业链分层",
    "bgClass": "",
    "controls": [
      {
        "key": "palette",
        "label": "分层配色",
        "type": "palette",
        "default": [
          "#5b8def",
          "#46b083",
          "#e0a23a"
        ],
        "options": [
          [
            "#5b8def",
            "#46b083",
            "#e0a23a"
          ],
          [
            "#7a5ae0",
            "#5b8def",
            "#46b083"
          ],
          [
            "#e8503a",
            "#e0a23a",
            "#46b083"
          ],
          [
            "#3a3a42",
            "#6b6b78",
            "#a0a0ad"
          ]
        ],
        "desc": "各层级的配色方案。",
        "publicKey": "palette",
        "publicLabel": "分层配色",
        "description": "各层级的配色方案。"
      },
      {
        "key": "groupCount",
        "label": "层级数量",
        "type": "number",
        "default": 3,
        "min": 1,
        "max": 3,
        "step": 1,
        "desc": "展示的产业链层级数量。",
        "publicKey": "groupCount",
        "publicLabel": "层级数量",
        "description": "展示的产业链层级数量。"
      },
      {
        "key": "itemsPerGroup",
        "label": "每格公司数",
        "type": "number",
        "default": 4,
        "min": 1,
        "max": 4,
        "step": 1,
        "desc": "每个细分环节最多展示的公司数量。",
        "publicKey": "itemsPerGroup",
        "publicLabel": "每格公司数",
        "description": "每个细分环节最多展示的公司数量。"
      },
      {
        "key": "showSubLabel",
        "label": "英文标签",
        "type": "boolean",
        "default": true,
        "desc": "是否显示各层级的英文副标题。",
        "publicKey": "showSubLabel",
        "publicLabel": "英文标签",
        "description": "是否显示各层级的英文副标题。"
      },
      {
        "key": "perspective",
        "label": "等距视角",
        "type": "boolean",
        "default": true,
        "desc": "是否对层级堆叠应用轻微的等距透视。",
        "publicKey": "perspective",
        "publicLabel": "等距视角",
        "description": "是否对层级堆叠应用轻微的等距透视。"
      },
      {
        "key": "highlight",
        "label": "重点强调",
        "type": "boolean",
        "default": false,
        "desc": "是否高亮强调其中某一层。",
        "publicKey": "highlight",
        "publicLabel": "重点强调",
        "description": "是否高亮强调其中某一层。"
      },
      {
        "key": "highlightIndex",
        "label": "强调第几层",
        "type": "number",
        "default": 0,
        "min": 0,
        "max": 2,
        "step": 1,
        "desc": "被强调的层级序号（从 0 开始）。",
        "publicKey": "highlightIndex",
        "publicLabel": "强调第几层",
        "description": "被强调的层级序号（从 0 开始）。"
      },
      {
        "key": "showCaption",
        "label": "装饰文案",
        "type": "boolean",
        "default": true,
        "desc": "是否显示底部说明文案。",
        "publicKey": "showCaption",
        "publicLabel": "装饰文案",
        "description": "是否显示底部说明文案。"
      }
    ],
    "defaultProps": {
      "kicker": "# 横向透视",
      "title": "产业链分层透视",
      "en": "Industry-Chain Layers",
      "cn": "上游 — 中游 — 下游 的层级结构",
      "layers": [
        {
          "name": "上游 · 基础设施",
          "en": "UPSTREAM · INFRASTRUCTURE",
          "segments": [
            {
              "label": "AI 芯片",
              "items": [
                "Cerebras",
                "Groq"
              ]
            },
            {
              "label": "算力云 / 数据",
              "items": [
                "CoreWeave",
                "Scale AI"
              ]
            }
          ]
        },
        {
          "name": "中游 · 模型层",
          "en": "MIDSTREAM · MODEL LAYER",
          "segments": [
            {
              "label": "通用大模型",
              "items": [
                "OpenAI",
                "Anthropic",
                "xAI"
              ]
            },
            {
              "label": "开源 / 专用",
              "items": [
                "Mistral",
                "SSI"
              ]
            }
          ]
        },
        {
          "name": "下游 · 应用层",
          "en": "DOWNSTREAM · APPLICATION",
          "segments": [
            {
              "label": "企业生产力",
              "items": [
                "Glean",
                "Databricks"
              ]
            },
            {
              "label": "消费 / 搜索",
              "items": [
                "Perplexity"
              ]
            },
            {
              "label": "具身智能",
              "items": [
                "Figure AI"
              ]
            }
          ]
        }
      ],
      "caption": "缩进层级可直接转换为树状图 / Treemap · 上游确定性最强，中游竞争最激烈，下游潜力最大",
      "palette": [
        "#5b8def",
        "#46b083",
        "#e0a23a"
      ],
      "groupCount": 3,
      "itemsPerGroup": 4,
      "showSubLabel": true,
      "perspective": true,
      "highlight": false,
      "highlightIndex": 0,
      "showCaption": true
    }
  },
  {
    "key": "theme01_page015",
    "themeKey": "theme01",
    "pageNumber": 15,
    "layout": "THEME01-015",
    "slot": "compute",
    "label": "算力上游 · 卖铲子",
    "bgClass": "",
    "controls": [
      {
        "key": "imageSlotCount",
        "label": "图片数量",
        "type": "number",
        "default": 1,
        "min": 0,
        "max": 3,
        "step": 1,
        "desc": "特写图片槽数量（0 时自动切换为纯文字大留白构图）；叠放拼贴版式下 2–3 张会互相叠压。",
        "publicKey": "imageSlotCount",
        "publicLabel": "图片数量",
        "description": "特写图片槽数量（0 时自动切换为纯文字大留白构图）；叠放拼贴版式下 2–3 张会互相叠压。"
      },
      {
        "key": "imageFit",
        "label": "图片填充",
        "type": "select",
        "default": "cover",
        "options": [
          {
            "value": "cover",
            "label": "裁剪填满"
          },
          {
            "value": "contain",
            "label": "完整自适应"
          }
        ],
        "desc": "图片填充方式：裁剪填满铺满版面，完整自适应按原始比例显示。",
        "publicKey": "imageFit",
        "publicLabel": "图片填充",
        "description": "图片填充方式：裁剪填满铺满版面，完整自适应按原始比例显示。"
      },
      {
        "key": "imageLayout",
        "label": "图片版式",
        "type": "select",
        "default": "normal",
        "options": [
          {
            "value": "normal",
            "label": "常规特写"
          },
          {
            "value": "collage",
            "label": "叠放拼贴"
          }
        ],
        "desc": "常规：单张特写（含满版叠字）；叠放拼贴：多张图片倾斜叠压、白边浮起的拼贴效果。",
        "publicKey": "imageLayout",
        "publicLabel": "图片版式",
        "description": "常规：单张特写（含满版叠字）；叠放拼贴：多张图片倾斜叠压、白边浮起的拼贴效果。"
      },
      {
        "key": "images",
        "label": "图片",
        "type": "images",
        "countKey": "imageSlotCount",
        "desc": "上传特写图片，槽位自适应图片比例不变形。",
        "publicKey": "images",
        "publicLabel": "图片",
        "description": "上传特写图片，槽位自适应图片比例不变形。"
      },
      {
        "key": "layout",
        "label": "版式",
        "type": "select",
        "default": "split-right",
        "options": [
          {
            "value": "split-right",
            "label": "图右文左"
          },
          {
            "value": "split-left",
            "label": "图左文右"
          },
          {
            "value": "overlay",
            "label": "满版叠字"
          }
        ],
        "desc": "图文版式：左右分栏或满版图片叠加文字。",
        "publicKey": "layout",
        "publicLabel": "版式",
        "description": "图文版式：左右分栏或满版图片叠加文字。"
      },
      {
        "key": "statCount",
        "label": "副指标数量",
        "type": "number",
        "default": 3,
        "min": 0,
        "max": 3,
        "step": 1,
        "desc": "主数字下方的副统计贴纸数量。",
        "publicKey": "statCount",
        "publicLabel": "副指标数量",
        "description": "主数字下方的副统计贴纸数量。"
      },
      {
        "key": "highlight",
        "label": "主数字强调",
        "type": "boolean",
        "default": true,
        "desc": "是否给主数字加荧光描边强调。",
        "publicKey": "highlight",
        "publicLabel": "主数字强调",
        "description": "是否给主数字加荧光描边强调。"
      },
      {
        "key": "showHighlighter",
        "label": "荧光高亮",
        "type": "boolean",
        "default": true,
        "desc": "是否给说明句关键词加荧光底纹。",
        "publicKey": "showHighlighter",
        "publicLabel": "荧光高亮",
        "description": "是否给说明句关键词加荧光底纹。"
      },
      {
        "key": "accentColor",
        "label": "主题色",
        "type": "color",
        "default": "#5b8def",
        "options": [
          "#5b8def",
          "#46b083",
          "#e0a23a",
          "#e8503a",
          "#7a5ae0",
          "#c9f24d"
        ],
        "desc": "主数字、荧光与强调描边的颜色。",
        "publicKey": "accentColor",
        "publicLabel": "主题色",
        "description": "主数字、荧光与强调描边的颜色。"
      },
      {
        "key": "showCaption",
        "label": "装饰文案",
        "type": "boolean",
        "default": true,
        "desc": "底部 */ … /* 说明文案的显示。",
        "publicKey": "showCaption",
        "publicLabel": "装饰文案",
        "description": "底部 */ … /* 说明文案的显示。"
      }
    ],
    "defaultProps": {
      "kicker": "横向透视 · 产业链上游",
      "title": "算力「卖铲子」",
      "en": "Picks & Shovels of the AI Rush",
      "lead": "当所有模型公司都在抢 GPU，提前锁定算力的基础设施商反而成为稀缺标的——淘金热里卖铲子的人也赚翻了。",
      "highlightWord": "稀缺标的",
      "bigStat": {
        "value": "255",
        "unit": "亿",
        "label": "上游芯片 + 基础设施吸纳资金"
      },
      "stats": [
        {
          "value": "97",
          "unit": "亿",
          "label": "AI 芯片"
        },
        {
          "value": "158",
          "unit": "亿",
          "label": "算力 / 基础设施"
        },
        {
          "value": "190",
          "unit": "亿",
          "label": "CoreWeave 估值"
        }
      ],
      "images": [
        "",
        "",
        ""
      ],
      "caption": "图片特写 · 上游算力为何最确定",
      "imageSlotCount": 1,
      "imageFit": "cover",
      "imageLayout": "normal",
      "layout": "split-right",
      "statCount": 3,
      "highlight": true,
      "showHighlighter": true,
      "accentColor": "#e0a23a",
      "showCaption": true
    }
  },
  {
    "key": "theme01_page016",
    "themeKey": "theme01",
    "pageNumber": 16,
    "layout": "THEME01-016",
    "slot": "sector",
    "label": "赛道分布 · 融资额占比",
    "bgClass": "",
    "controls": [
      {
        "key": "chartType",
        "label": "图表类型",
        "type": "select",
        "default": "donut",
        "options": [
          {
            "value": "donut",
            "label": "环形"
          },
          {
            "value": "pie",
            "label": "饼图"
          },
          {
            "value": "bar",
            "label": "条形"
          }
        ],
        "desc": "分类占比的图表呈现形式。",
        "publicKey": "chartType",
        "publicLabel": "图表类型",
        "description": "分类占比的图表呈现形式。"
      },
      {
        "key": "segmentCount",
        "label": "分类数量",
        "type": "number",
        "default": 5,
        "min": 3,
        "max": 5,
        "step": 1,
        "desc": "展示的分类数量（其余并入末项）。",
        "publicKey": "categoryCount",
        "publicLabel": "分类数量",
        "description": "展示的分类数量（其余并入末项）。"
      },
      {
        "key": "highlight",
        "label": "重点强调",
        "type": "boolean",
        "default": true,
        "desc": "是否高亮强调其中一个分类。",
        "publicKey": "highlight",
        "publicLabel": "重点强调",
        "description": "是否高亮强调其中一个分类。"
      },
      {
        "key": "highlightIndex",
        "label": "强调第几类",
        "type": "number",
        "default": 0,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "被强调的分类序号（从 0 开始）。",
        "publicKey": "highlightIndex",
        "publicLabel": "强调第几类",
        "description": "被强调的分类序号（从 0 开始）。"
      },
      {
        "key": "showCenterTotal",
        "label": "环形中心合计",
        "type": "boolean",
        "default": true,
        "desc": "环形图中心是否显示合计数值（仅环形模式）。",
        "publicKey": "showValueLabels",
        "publicLabel": "环形中心合计",
        "description": "环形图中心是否显示合计数值（仅环形模式）。"
      },
      {
        "key": "tiltAngle",
        "label": "倾斜角度",
        "type": "number",
        "default": 12,
        "min": 0,
        "max": 24,
        "step": 1,
        "desc": "图表向右的 3D 倾斜角度（仅环形/饼图模式）；0° 为平面。",
        "publicKey": "tiltAngle",
        "publicLabel": "倾斜角度",
        "description": "图表向右的 3D 倾斜角度（仅环形/饼图模式）；0° 为平面。"
      },
      {
        "key": "cornerRadius",
        "label": "扇段圆角",
        "type": "number",
        "default": 14,
        "min": 0,
        "max": 40,
        "step": 1,
        "desc": "环形/饼图扇段的圆角半径，evilcharts 圆角扇段观感（仅环形/饼图模式）。",
        "publicKey": "cornerRadius",
        "publicLabel": "扇段圆角",
        "description": "环形/饼图扇段的圆角半径，evilcharts 圆角扇段观感（仅环形/饼图模式）。"
      },
      {
        "key": "paddingAngle",
        "label": "扇段间隙",
        "type": "number",
        "default": 3,
        "min": 0,
        "max": 8,
        "step": 1,
        "desc": "相邻扇段之间的留白角度（仅环形/饼图模式）。",
        "publicKey": "paddingAngle",
        "publicLabel": "扇段间隙",
        "description": "相邻扇段之间的留白角度（仅环形/饼图模式）。"
      },
      {
        "key": "showCaption",
        "label": "装饰文案",
        "type": "boolean",
        "default": true,
        "desc": "是否显示底部说明文案。",
        "publicKey": "showCaption",
        "publicLabel": "装饰文案",
        "description": "是否显示底部说明文案。"
      },
      {
        "key": "evil",
        "label": "霓虹辉光增强",
        "type": "boolean",
        "default": false,
        "desc": "增强高亮扇段的霓虹辉光强度；条形模式下叠加 45° 斜纹纹理。",
        "publicKey": "evil",
        "publicLabel": "霓虹辉光增强",
        "description": "增强高亮扇段的霓虹辉光强度；条形模式下叠加 45° 斜纹纹理。"
      }
    ],
    "defaultProps": {
      "kicker": "# 横向透视",
      "title": "赛道分布 · 融资额占比",
      "en": "Funding by Sector",
      "cn": "97 笔大额融资的赛道归类",
      "segments": [
        {
          "label": "通用大模型",
          "en": "Foundation Model",
          "value": 420,
          "pct": "43.3%",
          "color": "#5b8def"
        },
        {
          "label": "垂直应用",
          "en": "Vertical AI",
          "value": 245,
          "pct": "25.3%",
          "color": "#46b083"
        },
        {
          "label": "AI 基础设施",
          "en": "Infrastructure",
          "value": 158,
          "pct": "16.3%",
          "color": "#e0a23a"
        },
        {
          "label": "AI 芯片",
          "en": "Hardware",
          "value": 97,
          "pct": "10.0%",
          "color": "#e8503a"
        },
        {
          "label": "其他",
          "en": "Tooling / Safety",
          "value": 50,
          "pct": "5.1%",
          "color": "#7a5ae0"
        }
      ],
      "centerValue": "970",
      "centerUnit": "亿美元",
      "centerLabel": "全年合计",
      "caption": "通用大模型占据近半壁江山，反映对 AGI 叙事的押注；基础设施与芯片合计超四分之一",
      "chartType": "donut",
      "segmentCount": 5,
      "highlight": true,
      "highlightIndex": 0,
      "showCenterTotal": true,
      "tiltAngle": 12,
      "cornerRadius": 14,
      "paddingAngle": 3,
      "showCaption": true,
      "evil": false
    }
  },
  {
    "key": "theme01_page017",
    "themeKey": "theme01",
    "pageNumber": 17,
    "layout": "THEME01-017",
    "slot": "treemap",
    "label": "赛道资金 · 矩形树图",
    "bgClass": "",
    "controls": [
      {
        "key": "itemCount",
        "label": "板块数量",
        "type": "number",
        "default": 5,
        "min": 2,
        "max": 6,
        "step": 1,
        "desc": "参与树图的板块数量；布局会按数量自动平铺，2–6 块都保持美观。",
        "publicKey": "itemCount",
        "publicLabel": "板块数量",
        "description": "参与树图的板块数量；布局会按数量自动平铺，2–6 块都保持美观。"
      },
      {
        "key": "highlight",
        "label": "重点强调",
        "type": "boolean",
        "default": true,
        "desc": "是否强调其中一个板块（上浮 + 阴影，其余板块转为浅色）。",
        "publicKey": "highlight",
        "publicLabel": "重点强调",
        "description": "是否强调其中一个板块（上浮 + 阴影，其余板块转为浅色）。"
      },
      {
        "key": "highlightIndex",
        "label": "强调第几个",
        "type": "number",
        "default": 0,
        "min": 0,
        "max": 5,
        "step": 1,
        "desc": "被强调的板块序号（从 0 开始，按原始数据顺序）。",
        "publicKey": "highlightIndex",
        "publicLabel": "强调第几个",
        "description": "被强调的板块序号（从 0 开始，按原始数据顺序）。"
      },
      {
        "key": "showPercent",
        "label": "占比数字",
        "type": "boolean",
        "default": true,
        "desc": "是否在板块中显示百分比。",
        "publicKey": "showPercent",
        "publicLabel": "占比数字",
        "description": "是否在板块中显示百分比。"
      },
      {
        "key": "showAmount",
        "label": "数值标注",
        "type": "boolean",
        "default": true,
        "desc": "是否在板块中显示数值。",
        "publicKey": "showValueLabels",
        "publicLabel": "数值标注",
        "description": "是否在板块中显示数值。"
      },
      {
        "key": "showCaption",
        "label": "装饰文案",
        "type": "boolean",
        "default": true,
        "desc": "底部 */ … /* 说明文案的显示。",
        "publicKey": "showCaption",
        "publicLabel": "装饰文案",
        "description": "底部 */ … /* 说明文案的显示。"
      }
    ],
    "defaultProps": {
      "kicker": "# 横向透视",
      "title": "赛道资金 · 矩形树图",
      "en": "Funding by Sector — Treemap",
      "cn": "",
      "items": [
        {
          "label": "通用大模型",
          "en": "Foundation Model",
          "v": 420,
          "amount": "420 亿",
          "color": "#5b8def"
        },
        {
          "label": "垂直应用",
          "en": "Vertical AI",
          "v": 245,
          "amount": "245 亿",
          "color": "#46b083"
        },
        {
          "label": "AI 基础设施",
          "en": "Infrastructure",
          "v": 158,
          "amount": "158 亿",
          "color": "#e0a23a"
        },
        {
          "label": "AI 芯片",
          "en": "Hardware",
          "v": 97,
          "amount": "97 亿",
          "color": "#e8503a"
        },
        {
          "label": "其他 · 工具链/安全",
          "en": "Others",
          "v": 50,
          "amount": "50 亿",
          "color": "#7a5ae0"
        }
      ],
      "caption": "矩形树图 · 通用大模型独占近半壁江山",
      "itemCount": 5,
      "highlight": true,
      "highlightIndex": 0,
      "showPercent": true,
      "showAmount": true,
      "showCaption": true
    }
  },
  {
    "key": "theme01_page018",
    "themeKey": "theme01",
    "pageNumber": 18,
    "layout": "THEME01-018",
    "slot": "sankey",
    "label": "资金流向 · 桑基图",
    "bgClass": "",
    "controls": [
      {
        "key": "sourceCount",
        "label": "来源数量",
        "type": "number",
        "default": 4,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "左侧来源节点数量；去向占比按保留的流量自动重算。",
        "publicKey": "sourceCount",
        "publicLabel": "来源数量",
        "description": "左侧来源节点数量；去向占比按保留的流量自动重算。"
      },
      {
        "key": "highlight",
        "label": "重点强调",
        "type": "boolean",
        "default": true,
        "desc": "是否把某一类来源点亮成荧光主线、其余淡出。",
        "publicKey": "highlight",
        "publicLabel": "重点强调",
        "description": "是否把某一类来源点亮成荧光主线、其余淡出。"
      },
      {
        "key": "highlightIndex",
        "label": "强调第几类",
        "type": "number",
        "default": 0,
        "min": 0,
        "max": 3,
        "step": 1,
        "desc": "被点亮的来源序号（从 0 开始）。",
        "publicKey": "highlightIndex",
        "publicLabel": "强调第几类",
        "description": "被点亮的来源序号（从 0 开始）。"
      },
      {
        "key": "showValues",
        "label": "数值标签",
        "type": "boolean",
        "default": true,
        "desc": "节点上的数值标签显示。",
        "publicKey": "showValueLabels",
        "publicLabel": "数值标签",
        "description": "节点上的数值标签显示。"
      },
      {
        "key": "accentColor",
        "label": "强调色",
        "type": "color",
        "default": "#7a5ae0",
        "options": [
          "#7a5ae0",
          "#5b8def",
          "#46b083",
          "#e0a23a",
          "#e8503a",
          "#c9f24d"
        ],
        "desc": "荧光主线的颜色。",
        "publicKey": "accentColor",
        "publicLabel": "强调色",
        "description": "荧光主线的颜色。"
      },
      {
        "key": "showCaption",
        "label": "装饰文案",
        "type": "boolean",
        "default": true,
        "desc": "底部 */ … /* 说明文案的显示。",
        "publicKey": "showCaption",
        "publicLabel": "装饰文案",
        "description": "底部 */ … /* 说明文案的显示。"
      }
    ],
    "defaultProps": {
      "kicker": "市场全景",
      "title": "资金流向 · 谁出钱，钱去哪",
      "en": "Capital Flow — Sources → Sectors",
      "cn": "一张桑基图看清资本的来路与去向",
      "unit": "亿",
      "sources": [
        {
          "name": "科技巨头",
          "en": "STRATEGIC",
          "value": 370,
          "color": "#7a5ae0"
        },
        {
          "name": "风险投资",
          "en": "VC",
          "value": 330,
          "color": "#5b8def"
        },
        {
          "name": "主权 / 私募",
          "en": "SOVEREIGN · PE",
          "value": 175,
          "color": "#46b083"
        },
        {
          "name": "企业风投",
          "en": "CVC",
          "value": 95,
          "color": "#e0a23a"
        }
      ],
      "targets": [
        {
          "name": "通用大模型",
          "en": "FOUNDATION",
          "color": "#5b8def"
        },
        {
          "name": "AI 基础设施",
          "en": "INFRA · COMPUTE",
          "color": "#46b083"
        },
        {
          "name": "垂直应用",
          "en": "APPLICATIONS",
          "color": "#e0a23a"
        },
        {
          "name": "AI 硬件 · 机器人",
          "en": "HARDWARE",
          "color": "#e8503a"
        }
      ],
      "flows": [
        [
          0,
          0,
          230
        ],
        [
          0,
          1,
          120
        ],
        [
          0,
          3,
          20
        ],
        [
          1,
          0,
          120
        ],
        [
          1,
          1,
          70
        ],
        [
          1,
          2,
          110
        ],
        [
          1,
          3,
          30
        ],
        [
          2,
          0,
          80
        ],
        [
          2,
          1,
          70
        ],
        [
          2,
          3,
          25
        ],
        [
          3,
          0,
          16
        ],
        [
          3,
          1,
          2
        ],
        [
          3,
          2,
          65
        ],
        [
          3,
          3,
          12
        ]
      ],
      "caption": "桑基图 · 战略资本主攻大模型，VC 更广撒于应用",
      "sourceCount": 4,
      "highlight": true,
      "highlightIndex": 0,
      "showValues": true,
      "accentColor": "#7a5ae0",
      "showCaption": true
    }
  },
  {
    "key": "theme01_page019",
    "themeKey": "theme01",
    "pageNumber": 19,
    "layout": "THEME01-019",
    "slot": "ranking",
    "label": "头部玩家",
    "bgClass": "",
    "controls": [
      {
        "key": "itemCount",
        "label": "展示数量",
        "type": "number",
        "default": 10,
        "min": 3,
        "max": 10,
        "step": 1,
        "desc": "榜单展示的公司数量。",
        "publicKey": "itemCount",
        "publicLabel": "展示数量",
        "description": "榜单展示的公司数量。"
      },
      {
        "key": "highlight",
        "label": "重点强调",
        "type": "boolean",
        "default": true,
        "desc": "是否高亮强调其中一名（如榜首）。",
        "publicKey": "highlight",
        "publicLabel": "重点强调",
        "description": "是否高亮强调其中一名（如榜首）。"
      },
      {
        "key": "highlightIndex",
        "label": "强调第几名",
        "type": "number",
        "default": 0,
        "min": 0,
        "max": 9,
        "step": 1,
        "desc": "被强调的公司排名序号（从 0 开始）。",
        "publicKey": "highlightIndex",
        "publicLabel": "强调第几名",
        "description": "被强调的公司排名序号（从 0 开始）。"
      },
      {
        "key": "showValues",
        "label": "数值标签",
        "type": "boolean",
        "default": true,
        "desc": "是否在条形末端显示数值指标。",
        "publicKey": "showValueLabels",
        "publicLabel": "数值标签",
        "description": "是否在条形末端显示数值指标。"
      },
      {
        "key": "showCaption",
        "label": "装饰文案",
        "type": "boolean",
        "default": true,
        "desc": "是否显示底部说明文案。",
        "publicKey": "showCaption",
        "publicLabel": "装饰文案",
        "description": "是否显示底部说明文案。"
      },
      {
        "key": "evil",
        "label": "evilcharts 模式",
        "type": "boolean",
        "default": false,
        "desc": "切换为 evilcharts 风格：点阵底纹绘图区 + 条面 45° 斜纹 + 条形霓虹辉光。",
        "publicKey": "evil",
        "publicLabel": "evilcharts 模式",
        "description": "切换为 evilcharts 风格：点阵底纹绘图区 + 条面 45° 斜纹 + 条形霓虹辉光。"
      }
    ],
    "defaultProps": {
      "kicker": "# 横向透视",
      "title": "头部玩家 · 单笔融资 Top 10",
      "en": "Top 10 Single Rounds",
      "cn": "2024 年单笔融资额最大的公司",
      "companies": [
        {
          "name": "OpenAI",
          "value": 66,
          "sector": "通用大模型"
        },
        {
          "name": "Anthropic",
          "value": 65,
          "sector": "通用大模型"
        },
        {
          "name": "xAI",
          "value": 50,
          "sector": "通用大模型"
        },
        {
          "name": "CoreWeave",
          "value": 11,
          "sector": "AI 基础设施"
        },
        {
          "name": "Safe Superintelligence",
          "value": 10,
          "sector": "通用大模型"
        },
        {
          "name": "Scale AI",
          "value": 10,
          "sector": "AI 基础设施"
        },
        {
          "name": "Figure AI",
          "value": 6.8,
          "sector": "AI 硬件"
        },
        {
          "name": "Perplexity AI",
          "value": 5.2,
          "sector": "垂直应用"
        },
        {
          "name": "Databricks",
          "value": 5,
          "sector": "AI 基础设施"
        },
        {
          "name": "Glean",
          "value": 2.6,
          "sector": "垂直应用"
        }
      ],
      "unit": "亿美元",
      "caption": "部分公司当年有多轮融资，此处仅列其最大单笔 · 头部三家通用大模型公司断层领先",
      "itemCount": 10,
      "highlight": true,
      "highlightIndex": 0,
      "showValues": true,
      "showCaption": true,
      "evil": false
    }
  },
  {
    "key": "theme01_page020",
    "themeKey": "theme01",
    "pageNumber": 20,
    "layout": "THEME01-020",
    "slot": "gallery",
    "label": "头部玩家掠影",
    "bgClass": "",
    "controls": [
      {
        "key": "imageSlotCount",
        "label": "图片数量",
        "type": "number",
        "default": 3,
        "min": 1,
        "max": 5,
        "step": 1,
        "desc": "图片槽数量；构图会按数量自动重排，1–5 张都保持美观。",
        "publicKey": "imageSlotCount",
        "publicLabel": "图片数量",
        "description": "图片槽数量；构图会按数量自动重排，1–5 张都保持美观。"
      },
      {
        "key": "imageFit",
        "label": "图片填充",
        "type": "select",
        "default": "cover",
        "options": [
          {
            "value": "cover",
            "label": "裁剪填满"
          },
          {
            "value": "contain",
            "label": "完整自适应"
          }
        ],
        "desc": "图片填充方式：裁剪填满构图统一，完整自适应按原始比例显示不裁切。",
        "publicKey": "imageFit",
        "publicLabel": "图片填充",
        "description": "图片填充方式：裁剪填满构图统一，完整自适应按原始比例显示不裁切。"
      },
      {
        "key": "imageLayout",
        "label": "图片版式",
        "type": "select",
        "default": "normal",
        "options": [
          {
            "value": "normal",
            "label": "整齐拼图"
          },
          {
            "value": "collage",
            "label": "叠放拼贴"
          }
        ],
        "desc": "整齐：网格拼图；叠放拼贴：图片倾斜叠压、白边浮起的拼贴效果。",
        "publicKey": "imageLayout",
        "publicLabel": "图片版式",
        "description": "整齐：网格拼图；叠放拼贴：图片倾斜叠压、白边浮起的拼贴效果。"
      },
      {
        "key": "images",
        "label": "图片",
        "type": "images",
        "countKey": "imageSlotCount",
        "desc": "上传图片（数量由「图片数量」控制），槽位自适应图片比例。",
        "publicKey": "images",
        "publicLabel": "图片",
        "description": "上传图片（数量由「图片数量」控制），槽位自适应图片比例。"
      },
      {
        "key": "showCaptions",
        "label": "贴纸标签",
        "type": "boolean",
        "default": true,
        "desc": "是否在每张图片上叠加「名称 + 数值」贴纸标签。",
        "publicKey": "showValueLabels",
        "publicLabel": "贴纸标签",
        "description": "是否在每张图片上叠加「名称 + 数值」贴纸标签。"
      },
      {
        "key": "highlight",
        "label": "重点强调",
        "type": "boolean",
        "default": true,
        "desc": "是否给其中一个槽位加荧光描边强调。",
        "publicKey": "highlight",
        "publicLabel": "重点强调",
        "description": "是否给其中一个槽位加荧光描边强调。"
      },
      {
        "key": "highlightIndex",
        "label": "强调第几个",
        "type": "number",
        "default": 0,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "被强调的槽位序号（从 0 开始）。",
        "publicKey": "highlightIndex",
        "publicLabel": "强调第几个",
        "description": "被强调的槽位序号（从 0 开始）。"
      },
      {
        "key": "accentColor",
        "label": "荧光色",
        "type": "color",
        "default": "#c9f24d",
        "options": [
          "#c9f24d",
          "#46b083",
          "#5b8def",
          "#e0a23a",
          "#e8503a",
          "#7a5ae0"
        ],
        "desc": "强调描边与数值贴纸的荧光色。",
        "publicKey": "accentColor",
        "publicLabel": "荧光色",
        "description": "强调描边与数值贴纸的荧光色。"
      },
      {
        "key": "showCaption",
        "label": "装饰文案",
        "type": "boolean",
        "default": true,
        "desc": "底部 */ … /* 说明文案的显示。",
        "publicKey": "showCaption",
        "publicLabel": "装饰文案",
        "description": "底部 */ … /* 说明文案的显示。"
      }
    ],
    "defaultProps": {
      "kicker": "# 横向透视",
      "title": "头部玩家掠影",
      "en": "Top Players at a Glance",
      "cn": "2024 年单笔融资最大的几家公司",
      "items": [
        {
          "label": "OpenAI",
          "sub": "通用大模型",
          "amount": "66 亿",
          "tone": "blue"
        },
        {
          "label": "Anthropic",
          "sub": "通用大模型",
          "amount": "65 亿",
          "tone": "violet"
        },
        {
          "label": "xAI",
          "sub": "通用大模型",
          "amount": "50 亿",
          "tone": "green"
        },
        {
          "label": "CoreWeave",
          "sub": "AI 基础设施",
          "amount": "11 亿",
          "tone": "amber"
        },
        {
          "label": "Figure AI",
          "sub": "AI 硬件 · 人形机器人",
          "amount": "6.8 亿",
          "tone": "red"
        }
      ],
      "images": [
        "",
        "",
        "",
        "",
        ""
      ],
      "caption": "图集 · 一屏看清头部阵容",
      "imageSlotCount": 3,
      "imageFit": "cover",
      "imageLayout": "normal",
      "showCaptions": true,
      "highlight": true,
      "highlightIndex": 0,
      "accentColor": "#c9f24d",
      "showCaption": true
    }
  },
  {
    "key": "theme01_page021",
    "themeKey": "theme01",
    "pageNumber": 21,
    "layout": "THEME01-021",
    "slot": "table-top10",
    "label": "表格 · Top 10",
    "bgClass": "",
    "controls": [
      {
        "key": "rowCount",
        "label": "数据行数",
        "type": "number",
        "default": 6,
        "min": 1,
        "max": 10,
        "step": 1,
        "desc": "展示的数据行数量（不含表头与合计行）；行高随行数自适应，不会溢出。",
        "publicKey": "rowCount",
        "publicLabel": "数据行数",
        "description": "展示的数据行数量（不含表头与合计行）；行高随行数自适应，不会溢出。"
      },
      {
        "key": "emphasizeCol",
        "label": "强调列",
        "type": "select",
        "default": 2,
        "options": [
          {
            "value": -1,
            "label": "无"
          },
          {
            "value": 1,
            "label": "第 2 列"
          },
          {
            "value": 2,
            "label": "第 3 列"
          }
        ],
        "desc": "被着重显示的数值列（着色，可叠加迷你条）。",
        "publicKey": "emphasizeCol",
        "publicLabel": "强调列",
        "description": "被着重显示的数值列（着色，可叠加迷你条）。"
      },
      {
        "key": "showBars",
        "label": "迷你条形",
        "type": "boolean",
        "default": true,
        "desc": "是否在强调列的单元格内叠加比例条。",
        "publicKey": "showBars",
        "publicLabel": "迷你条形",
        "description": "是否在强调列的单元格内叠加比例条。"
      },
      {
        "key": "highlight",
        "label": "重点强调",
        "type": "boolean",
        "default": true,
        "desc": "是否高亮其中一行。",
        "publicKey": "highlight",
        "publicLabel": "重点强调",
        "description": "是否高亮其中一行。"
      },
      {
        "key": "highlightIndex",
        "label": "强调第几行",
        "type": "number",
        "default": 4,
        "min": 0,
        "max": 9,
        "step": 1,
        "desc": "被强调的数据行序号（从 0 开始）。",
        "publicKey": "highlightIndex",
        "publicLabel": "强调第几行",
        "description": "被强调的数据行序号（从 0 开始）。"
      },
      {
        "key": "striped",
        "label": "斑马纹",
        "type": "boolean",
        "default": true,
        "desc": "隔行底色，便于横向阅读。",
        "publicKey": "striped",
        "publicLabel": "斑马纹",
        "description": "隔行底色，便于横向阅读。"
      },
      {
        "key": "showFooter",
        "label": "合计行",
        "type": "boolean",
        "default": true,
        "desc": "是否显示底部合计 / 汇总行。",
        "publicKey": "showFooter",
        "publicLabel": "合计行",
        "description": "是否显示底部合计 / 汇总行。"
      },
      {
        "key": "accentColor",
        "label": "主题色",
        "type": "color",
        "default": "#5b8def",
        "options": [
          "#5b8def",
          "#46b083",
          "#e0a23a",
          "#e8503a",
          "#7a5ae0"
        ],
        "desc": "表头、强调列与高亮行的颜色。",
        "publicKey": "accentColor",
        "publicLabel": "主题色",
        "description": "表头、强调列与高亮行的颜色。"
      },
      {
        "key": "showCaption",
        "label": "装饰文案",
        "type": "boolean",
        "default": true,
        "desc": "底部 */ … /* 说明文案的显示。",
        "publicKey": "showCaption",
        "publicLabel": "装饰文案",
        "description": "底部 */ … /* 说明文案的显示。"
      }
    ],
    "defaultProps": {
      "kicker": "# 横向透视",
      "title": "头部玩家 · 单笔融资 Top 10",
      "en": "Top 10 Single Rounds",
      "cn": "单笔融资额最大的 10 家公司",
      "columns": [
        "排名 · 公司",
        "主营赛道",
        "融资额 / 亿美元"
      ],
      "textCols": [
        1
      ],
      "rows": [
        [
          "1 · OpenAI",
          "通用大模型",
          "66"
        ],
        [
          "2 · Anthropic",
          "通用大模型",
          "65"
        ],
        [
          "3 · xAI",
          "通用大模型",
          "50"
        ],
        [
          "5 · CoreWeave",
          "AI 基础设施",
          "11"
        ],
        [
          "7 · Scale AI",
          "AI 基础设施",
          "10"
        ],
        [
          "4 · Safe Superintelligence",
          "通用大模型",
          "10"
        ],
        [
          "6 · Figure AI",
          "AI 硬件 · 机器人",
          "6.8"
        ],
        [
          "8 · Perplexity AI",
          "垂直应用 · 搜索",
          "5.2"
        ],
        [
          "9 · Databricks",
          "AI 基础设施",
          "5.0"
        ],
        [
          "10 · Glean",
          "垂直应用 · 企业搜索",
          "2.6"
        ]
      ],
      "footer": null,
      "caption": "表格 · 前三均为通用大模型，单笔规模断层领先",
      "rowCount": 10,
      "emphasizeCol": 2,
      "showBars": true,
      "highlight": true,
      "highlightIndex": 0,
      "striped": true,
      "showFooter": false,
      "accentColor": "#46b083",
      "showCaption": true
    }
  },
  {
    "key": "theme01_page022",
    "themeKey": "theme01",
    "pageNumber": 22,
    "layout": "THEME01-022",
    "slot": "funnel",
    "label": "资金集中度 · 漏斗",
    "bgClass": "",
    "controls": [
      {
        "key": "itemCount",
        "label": "漏斗层数",
        "type": "number",
        "default": 4,
        "min": 3,
        "max": 4,
        "step": 1,
        "desc": "漏斗自上而下展示的收口层数。",
        "publicKey": "itemCount",
        "publicLabel": "漏斗层数",
        "description": "漏斗自上而下展示的收口层数。"
      },
      {
        "key": "highlight",
        "label": "重点强调",
        "type": "boolean",
        "default": true,
        "desc": "是否把其中一层渲染成实色荧光「印章」。",
        "publicKey": "highlight",
        "publicLabel": "重点强调",
        "description": "是否把其中一层渲染成实色荧光「印章」。"
      },
      {
        "key": "highlightIndex",
        "label": "强调第几层",
        "type": "number",
        "default": 1,
        "min": 0,
        "max": 3,
        "step": 1,
        "desc": "被强调的漏斗层序号（从 0 开始）。",
        "publicKey": "highlightIndex",
        "publicLabel": "强调第几层",
        "description": "被强调的漏斗层序号（从 0 开始）。"
      },
      {
        "key": "showValues",
        "label": "占比标签",
        "type": "boolean",
        "default": true,
        "desc": "每层右侧的占比胶囊标签的显示。",
        "publicKey": "showValues",
        "publicLabel": "占比标签",
        "description": "每层右侧的占比胶囊标签的显示。"
      },
      {
        "key": "showInsight",
        "label": "解读面板",
        "type": "boolean",
        "default": true,
        "desc": "右侧磨砂玻璃「集中度」解读面板的显示。",
        "publicKey": "showInsight",
        "publicLabel": "解读面板",
        "description": "右侧磨砂玻璃「集中度」解读面板的显示。"
      },
      {
        "key": "accentColor",
        "label": "主题色",
        "type": "color",
        "default": "#5b8def",
        "options": [
          "#5b8def",
          "#46b083",
          "#e0a23a",
          "#e8503a",
          "#7a5ae0",
          "#c9f24d"
        ],
        "desc": "漏斗与强调印章的主题色（单一色家族，逐层递减透明度）。",
        "publicKey": "accentColor",
        "publicLabel": "主题色",
        "description": "漏斗与强调印章的主题色（单一色家族，逐层递减透明度）。"
      },
      {
        "key": "showCaption",
        "label": "装饰文案",
        "type": "boolean",
        "default": true,
        "desc": "底部 */ … /* 说明文案的显示。",
        "publicKey": "showCaption",
        "publicLabel": "装饰文案",
        "description": "底部 */ … /* 说明文案的显示。"
      }
    ],
    "defaultProps": {
      "kicker": "横向透视 · 市场集中度",
      "tone": "blue",
      "title": "资金集中度 · 赢家通吃",
      "en": "Winner Takes All",
      "cn": "资金如何向头部集中",
      "stages": [
        {
          "label": "全年单笔大额融资",
          "value": "970",
          "unit": "亿",
          "meta": "97 笔 · 单笔超 1 亿美元",
          "pct": "100%"
        },
        {
          "label": "Top 10 公司单笔",
          "value": "232",
          "unit": "亿",
          "meta": "前十大单笔合计",
          "pct": "24%"
        },
        {
          "label": "Top 3 公司单笔",
          "value": "181",
          "unit": "亿",
          "meta": "OpenAI · Anthropic · xAI",
          "pct": "19%"
        },
        {
          "label": "榜首 · OpenAI",
          "value": "66",
          "unit": "亿",
          "meta": "单笔规模最大",
          "pct": "7%"
        }
      ],
      "insight": {
        "stat": "24%",
        "head": "头部 10 家 = 全市场近 1/4",
        "body": "少数独角兽反复获得巨额追加投资，单笔大额融资额高度向金字塔尖收口——“赢家通吃”格局已然确立。"
      },
      "caption": "漏斗图 · 资金逐层向头部集中",
      "itemCount": 4,
      "highlight": true,
      "highlightIndex": 1,
      "showValues": true,
      "showInsight": true,
      "accentColor": "#5b8def",
      "showCaption": true
    }
  },
  {
    "key": "theme01_page023",
    "themeKey": "theme01",
    "pageNumber": 23,
    "layout": "THEME01-023",
    "slot": "tier-pyramid",
    "label": "估值梯队 · 金字塔",
    "bgClass": "",
    "controls": [
      {
        "key": "tierCount",
        "label": "梯队层数",
        "type": "number",
        "default": 4,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "展示的指标梯队层数（从顶端起）。",
        "publicKey": "tierCount",
        "publicLabel": "梯队层数",
        "description": "展示的指标梯队层数（从顶端起）。"
      },
      {
        "key": "highlight",
        "label": "重点强调",
        "type": "boolean",
        "default": true,
        "desc": "是否把某一层渲染成荧光「印章」。",
        "publicKey": "highlight",
        "publicLabel": "重点强调",
        "description": "是否把某一层渲染成荧光「印章」。"
      },
      {
        "key": "highlightIndex",
        "label": "强调第几层",
        "type": "number",
        "default": 0,
        "min": 0,
        "max": 3,
        "step": 1,
        "desc": "被强调的梯队序号（0 = 顶端）。",
        "publicKey": "highlightIndex",
        "publicLabel": "强调第几层",
        "description": "被强调的梯队序号（0 = 顶端）。"
      },
      {
        "key": "showExamples",
        "label": "代表公司",
        "type": "boolean",
        "default": true,
        "desc": "右侧每层的代表公司贴纸显示。",
        "publicKey": "showExamples",
        "publicLabel": "代表公司",
        "description": "右侧每层的代表公司贴纸显示。"
      },
      {
        "key": "accentColor",
        "label": "强调色",
        "type": "color",
        "default": "#7a5ae0",
        "options": [
          "#7a5ae0",
          "#5b8def",
          "#46b083",
          "#e0a23a",
          "#e8503a",
          "#c9f24d"
        ],
        "desc": "被强调层的荧光颜色。",
        "publicKey": "accentColor",
        "publicLabel": "强调色",
        "description": "被强调层的荧光颜色。"
      },
      {
        "key": "showCaption",
        "label": "装饰文案",
        "type": "boolean",
        "default": true,
        "desc": "底部 */ … /* 说明文案的显示。",
        "publicKey": "showCaption",
        "publicLabel": "装饰文案",
        "description": "底部 */ … /* 说明文案的显示。"
      }
    ],
    "defaultProps": {
      "kicker": "横向透视",
      "title": "估值梯队 · 金字塔",
      "en": "Valuation Tiers",
      "cn": "极少数公司吃掉绝大多数估值",
      "tiers": [
        {
          "band": "≥ 1000 亿美元",
          "en": "DECACORN+",
          "count": "3",
          "unit": "家",
          "desc": "通用大模型三巨头，估值断层领先",
          "examples": [
            "OpenAI",
            "Anthropic",
            "xAI"
          ],
          "color": "#7a5ae0"
        },
        {
          "band": "100 – 1000 亿",
          "en": "GIANT",
          "count": "9",
          "unit": "家",
          "desc": "基建与应用龙头，紧追第一梯队",
          "examples": [
            "Databricks",
            "CoreWeave",
            "SSI",
            "Perplexity"
          ],
          "color": "#5b8def"
        },
        {
          "band": "10 – 100 亿",
          "en": "UNICORN",
          "count": "34",
          "unit": "家",
          "desc": "细分赛道独角兽，估值快速爬升",
          "examples": [
            "Figure AI",
            "Scale AI",
            "Glean"
          ],
          "color": "#46b083"
        },
        {
          "band": "< 10 亿",
          "en": "EMERGING",
          "count": "200+",
          "unit": "家",
          "desc": "早期种子 / A 轮新锐，长尾基本盘",
          "examples": [
            "种子轮",
            "A 轮",
            "早期"
          ],
          "color": "#e0a23a"
        }
      ],
      "caption": "金字塔 · 顶端三家公司的估值合计超过其后数十家之和",
      "tierCount": 4,
      "highlight": true,
      "highlightIndex": 0,
      "showExamples": true,
      "accentColor": "#7a5ae0",
      "showCaption": true
    }
  },
  {
    "key": "theme01_page024",
    "themeKey": "theme01",
    "pageNumber": 24,
    "layout": "THEME01-024",
    "slot": "chapter-case",
    "label": "章节 · 典型案例",
    "bgClass": "",
    "controls": [
      {
        "key": "topicCount",
        "label": "主线数量",
        "type": "number",
        "default": 4,
        "min": 0,
        "max": 5,
        "step": 1,
        "desc": "展示的分主题贴纸数量（0 时只显示标题）。",
        "publicKey": "topicCount",
        "publicLabel": "主线数量",
        "description": "展示的分主题贴纸数量（0 时只显示标题）。"
      },
      {
        "key": "highlight",
        "label": "重点强调",
        "type": "boolean",
        "default": true,
        "desc": "是否高亮其中一条主线贴纸。",
        "publicKey": "highlight",
        "publicLabel": "重点强调",
        "description": "是否高亮其中一条主线贴纸。"
      },
      {
        "key": "highlightIndex",
        "label": "强调第几条",
        "type": "number",
        "default": 0,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "被强调的主线序号（从 0 开始）。",
        "publicKey": "highlightIndex",
        "publicLabel": "强调第几条",
        "description": "被强调的主线序号（从 0 开始）。"
      },
      {
        "key": "showGhost",
        "label": "背景巨字",
        "type": "boolean",
        "default": true,
        "desc": "是否显示背景的超大序号（无图片时生效）。",
        "publicKey": "showGhost",
        "publicLabel": "背景巨字",
        "description": "是否显示背景的超大序号（无图片时生效）。"
      },
      {
        "key": "accentColor",
        "label": "主题色",
        "type": "color",
        "default": "#5b8def",
        "options": [
          "#5b8def",
          "#46b083",
          "#e0a23a",
          "#e8503a",
          "#7a5ae0"
        ],
        "desc": "本章主题色（序号、贴纸、高亮）。",
        "publicKey": "accentColor",
        "publicLabel": "主题色",
        "description": "本章主题色（序号、贴纸、高亮）。"
      },
      {
        "key": "imageSlotCount",
        "label": "图片数量",
        "type": "number",
        "default": 0,
        "min": 0,
        "max": 2,
        "step": 1,
        "desc": "右侧图片槽数量（0 时背景巨字铺满，布局自动适配）。",
        "publicKey": "imageSlotCount",
        "publicLabel": "图片数量",
        "description": "右侧图片槽数量（0 时背景巨字铺满，布局自动适配）。"
      },
      {
        "key": "imageFit",
        "label": "图片填充",
        "type": "select",
        "default": "cover",
        "options": [
          {
            "value": "cover",
            "label": "裁剪填满"
          },
          {
            "value": "contain",
            "label": "完整自适应"
          }
        ],
        "desc": "图片填充方式。",
        "publicKey": "imageFit",
        "publicLabel": "图片填充",
        "description": "图片填充方式。"
      },
      {
        "key": "images",
        "label": "图片",
        "type": "images",
        "countKey": "imageSlotCount",
        "desc": "上传图片（数量由「图片数量」控制），槽位自适应图片比例。",
        "publicKey": "images",
        "publicLabel": "图片",
        "description": "上传图片（数量由「图片数量」控制），槽位自适应图片比例。"
      },
      {
        "key": "showCaption",
        "label": "装饰文案",
        "type": "boolean",
        "default": true,
        "desc": "底部 */ … /* 说明文案的显示。",
        "publicKey": "showCaption",
        "publicLabel": "装饰文案",
        "description": "底部 */ … /* 说明文案的显示。"
      }
    ],
    "defaultProps": {
      "kicker": "章节",
      "partLabel": "PART 05",
      "index": "05",
      "title": "典型案例",
      "en": "Deep-Dive Case Studies",
      "desc": "从追赶到反超、从挑战者到“卖铲人”——用三个标杆案例，拆解资本为何下注、又如何兼现。",
      "topics": [
        {
          "label": "Anthropic"
        },
        {
          "label": "xAI"
        },
        {
          "label": "CoreWeave"
        }
      ],
      "caption": "章节导航 · 三个标杆案例",
      "topicCount": 3,
      "highlight": true,
      "highlightIndex": 0,
      "showGhost": true,
      "accentColor": "#7a5ae0",
      "imageSlotCount": 0,
      "imageFit": "cover",
      "images": [
        "",
        ""
      ],
      "showCaption": true
    }
  },
  {
    "key": "theme01_page025",
    "themeKey": "theme01",
    "pageNumber": 25,
    "layout": "THEME01-025",
    "slot": "versus",
    "label": "三强横向对比",
    "bgClass": "",
    "controls": [
      {
        "key": "itemCount",
        "label": "对比对象数量",
        "type": "number",
        "default": 3,
        "min": 2,
        "max": 3,
        "step": 1,
        "desc": "参与横向对比的对象（公司）数量。",
        "publicKey": "itemCount",
        "publicLabel": "对比对象数量",
        "description": "参与横向对比的对象（公司）数量。"
      },
      {
        "key": "rowCount",
        "label": "对比维度数量",
        "type": "number",
        "default": 4,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "对比的属性行数量。",
        "publicKey": "rowCount",
        "publicLabel": "对比维度数量",
        "description": "对比的属性行数量。"
      },
      {
        "key": "highlight",
        "label": "重点强调",
        "type": "boolean",
        "default": true,
        "desc": "是否高亮强调其中一个对象（整列着色）。",
        "publicKey": "highlight",
        "publicLabel": "重点强调",
        "description": "是否高亮强调其中一个对象（整列着色）。"
      },
      {
        "key": "highlightIndex",
        "label": "强调第几个",
        "type": "number",
        "default": 1,
        "min": 0,
        "max": 2,
        "step": 1,
        "desc": "被强调的对象序号（从 0 开始）。",
        "publicKey": "highlightIndex",
        "publicLabel": "强调第几个",
        "description": "被强调的对象序号（从 0 开始）。"
      },
      {
        "key": "accentColor",
        "label": "强调色",
        "type": "color",
        "default": "#46b083",
        "options": [
          "#46b083",
          "#5b8def",
          "#e0a23a",
          "#e8503a",
          "#7a5ae0"
        ],
        "desc": "被强调列的着色。",
        "publicKey": "accentColor",
        "publicLabel": "强调色",
        "description": "被强调列的着色。"
      },
      {
        "key": "imageSlotCount",
        "label": "Logo 数量",
        "type": "number",
        "default": 0,
        "min": 0,
        "max": 3,
        "step": 1,
        "desc": "表头 logo 图片槽数量（0 时用首字母色块代替）。",
        "publicKey": "imageSlotCount",
        "publicLabel": "Logo 数量",
        "description": "表头 logo 图片槽数量（0 时用首字母色块代替）。"
      },
      {
        "key": "imageFit",
        "label": "图片填充",
        "type": "select",
        "default": "contain",
        "options": [
          {
            "value": "contain",
            "label": "完整自适应"
          },
          {
            "value": "cover",
            "label": "裁剪填满"
          }
        ],
        "desc": "logo 填充方式（通常用「完整自适应」避免裁切）。",
        "publicKey": "imageFit",
        "publicLabel": "图片填充",
        "description": "logo 填充方式（通常用「完整自适应」避免裁切）。"
      },
      {
        "key": "images",
        "label": "Logo 图片",
        "type": "images",
        "countKey": "imageSlotCount",
        "desc": "上传各对象的 logo，槽位自适应比例不变形。",
        "publicKey": "images",
        "publicLabel": "Logo 图片",
        "description": "上传各对象的 logo，槽位自适应比例不变形。"
      },
      {
        "key": "showCaption",
        "label": "装饰文案",
        "type": "boolean",
        "default": true,
        "desc": "底部 */ … /* 说明文案的显示。",
        "publicKey": "showCaption",
        "publicLabel": "装饰文案",
        "description": "底部 */ … /* 说明文案的显示。"
      }
    ],
    "defaultProps": {
      "kicker": "# 典型案例",
      "title": "通用大模型三强 · 横向对比",
      "en": "Foundation-Model Leaders, Head to Head",
      "cn": "OpenAI × Anthropic × xAI",
      "companies": [
        {
          "name": "OpenAI",
          "role": "先行者 · 规模领先",
          "color": "#5b8def"
        },
        {
          "name": "Anthropic",
          "role": "宪法式 AI · 企业信任",
          "color": "#46b083"
        },
        {
          "name": "xAI",
          "role": "X 实时数据 · Grok",
          "color": "#7a5ae0"
        }
      ],
      "attributes": [
        {
          "label": "单笔最大融资",
          "values": [
            "66 亿",
            "65 亿",
            "50 亿"
          ]
        },
        {
          "label": "成立年份",
          "values": [
            "2015",
            "2021",
            "2023"
          ]
        },
        {
          "label": "差异化定位",
          "values": [
            "通用 AGI · 生态先发",
            "安全对齐 · 云巨头绑定",
            "实时社交数据 · 无审查"
          ]
        },
        {
          "label": "资本看点",
          "values": [
            "收入与算力成本博弈",
            "估值 9650 亿 · 已递交 IPO",
            "18 个月跻身头部梯队"
          ]
        }
      ],
      "images": [
        "",
        "",
        ""
      ],
      "caption": "横向对比 · 三强同台，路径各异（融资单位：亿美元）",
      "itemCount": 3,
      "rowCount": 4,
      "highlight": true,
      "highlightIndex": 1,
      "accentColor": "#46b083",
      "imageSlotCount": 0,
      "imageFit": "contain",
      "showCaption": true
    }
  },
  {
    "key": "theme01_page026",
    "themeKey": "theme01",
    "pageNumber": 26,
    "layout": "THEME01-026",
    "slot": "case",
    "label": "典型案例",
    "bgClass": "",
    "controls": [
      {
        "key": "milestoneCount",
        "label": "里程碑数量",
        "type": "number",
        "default": 4,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "展示的里程碑卡片数量。",
        "publicKey": "milestoneCount",
        "publicLabel": "里程碑数量",
        "description": "展示的里程碑卡片数量。"
      },
      {
        "key": "highlight",
        "label": "重点强调",
        "type": "boolean",
        "default": true,
        "desc": "是否高亮强调其中一个里程碑。",
        "publicKey": "highlight",
        "publicLabel": "重点强调",
        "description": "是否高亮强调其中一个里程碑。"
      },
      {
        "key": "highlightIndex",
        "label": "强调第几项",
        "type": "number",
        "default": 2,
        "min": 0,
        "max": 3,
        "step": 1,
        "desc": "被强调的里程碑序号（从 0 开始）。",
        "publicKey": "highlightIndex",
        "publicLabel": "强调第几项",
        "description": "被强调的里程碑序号（从 0 开始）。"
      },
      {
        "key": "imageSlotCount",
        "label": "图片数量",
        "type": "number",
        "default": 2,
        "min": 0,
        "max": 3,
        "step": 1,
        "desc": "右侧图片槽数量（0 时文字占满整页，布局自动适配）。",
        "publicKey": "imageSlotCount",
        "publicLabel": "图片数量",
        "description": "右侧图片槽数量（0 时文字占满整页，布局自动适配）。"
      },
      {
        "key": "imageFit",
        "label": "图片填充",
        "type": "select",
        "default": "cover",
        "options": [
          {
            "value": "cover",
            "label": "裁剪填满"
          },
          {
            "value": "contain",
            "label": "完整自适应"
          }
        ],
        "desc": "图片填充方式：裁剪填满构图统一，完整自适应按原始比例显示。",
        "publicKey": "imageFit",
        "publicLabel": "图片填充",
        "description": "图片填充方式：裁剪填满构图统一，完整自适应按原始比例显示。"
      },
      {
        "key": "imageLayout",
        "label": "图片版式",
        "type": "select",
        "default": "normal",
        "options": [
          {
            "value": "normal",
            "label": "常规排布"
          },
          {
            "value": "collage",
            "label": "叠放拼贴"
          }
        ],
        "desc": "常规：整齐排布；叠放拼贴：图片倾斜叠压、白边浮起的拼贴效果。",
        "publicKey": "imageLayout",
        "publicLabel": "图片版式",
        "description": "常规：整齐排布；叠放拼贴：图片倾斜叠压、白边浮起的拼贴效果。"
      },
      {
        "key": "images",
        "label": "图片",
        "type": "images",
        "countKey": "imageSlotCount",
        "desc": "上传图片（数量由「图片数量」控制），槽位会自适应图片比例。",
        "publicKey": "images",
        "publicLabel": "图片",
        "description": "上传图片（数量由「图片数量」控制），槽位会自适应图片比例。"
      },
      {
        "key": "showQuote",
        "label": "引言",
        "type": "boolean",
        "default": true,
        "desc": "是否显示角色引言。",
        "publicKey": "showQuote",
        "publicLabel": "引言",
        "description": "是否显示角色引言。"
      }
    ],
    "defaultProps": {
      "kicker": "# 典型案例",
      "title": "典型案例 · Anthropic",
      "en": "From Challenger to Frontrunner",
      "intro": "2021 年由 OpenAI 前研究副总裁 Dario Amodei 创立。2024 年连续完成三轮大额融资，累计超 650 亿美元，估值突破 9650 亿美元，超越 OpenAI 成为全球估值最高的 AI 初创企业。",
      "milestones": [
        {
          "date": "2024 · 05",
          "round": "Series G",
          "amount": "280 亿",
          "note": "估值 600 亿",
          "color": "#5b8def"
        },
        {
          "date": "2024 · 08",
          "round": "Series H 首轮",
          "amount": "180 亿",
          "note": "估值 830 亿",
          "color": "#46b083"
        },
        {
          "date": "2024 · 11",
          "round": "Series H 扩轮",
          "amount": "190 亿",
          "note": "估值 9650 亿",
          "color": "#e8503a"
        },
        {
          "date": "2026 · 06",
          "round": "递交 IPO 申请",
          "amount": "预计年内上市",
          "note": "全球估值最高 AI 初创",
          "color": "#7a5ae0"
        }
      ],
      "quote": "通过 Constitutional AI 等方法构建可解释、可控的系统，比单纯追求规模更符合长远利益。",
      "quoteBy": "Dario Amodei · CEO",
      "images": [
        "",
        "",
        ""
      ],
      "milestoneCount": 4,
      "highlight": true,
      "highlightIndex": 2,
      "imageSlotCount": 2,
      "imageFit": "cover",
      "imageLayout": "normal",
      "showQuote": true
    }
  },
  {
    "key": "theme01_page027",
    "themeKey": "theme01",
    "pageNumber": 27,
    "layout": "THEME01-027",
    "slot": "quote-dario",
    "label": "金句 · CEO 视角",
    "bgClass": "",
    "controls": [
      {
        "key": "accentColor",
        "label": "荧光色",
        "type": "color",
        "default": "#c9f24d",
        "options": [
          "#c9f24d",
          "#46b083",
          "#5b8def",
          "#e0a23a",
          "#e8503a",
          "#7a5ae0"
        ],
        "desc": "荧光贴纸与高亮的颜色（参考图的荧光高亮）。",
        "publicKey": "accentColor",
        "publicLabel": "荧光色",
        "description": "荧光贴纸与高亮的颜色（参考图的荧光高亮）。"
      },
      {
        "key": "noteCount",
        "label": "便签贴纸",
        "type": "number",
        "default": 2,
        "min": 0,
        "max": 3,
        "step": 1,
        "desc": "右上角倾斜便签贴纸的数量（装饰性回声标签）。",
        "publicKey": "noteCount",
        "publicLabel": "便签贴纸",
        "description": "右上角倾斜便签贴纸的数量（装饰性回声标签）。"
      },
      {
        "key": "showHighlighter",
        "label": "关键词贴纸",
        "type": "boolean",
        "default": true,
        "desc": "是否把金句中的对立关键词渲染成「黑色印章 + 荧光」贴纸。",
        "publicKey": "showHighlighter",
        "publicLabel": "关键词贴纸",
        "description": "是否把金句中的对立关键词渲染成「黑色印章 + 荧光」贴纸。"
      },
      {
        "key": "showQuoteMark",
        "label": "巨型引号",
        "type": "boolean",
        "default": true,
        "desc": "是否显示背景的超大引号。",
        "publicKey": "showQuoteMark",
        "publicLabel": "巨型引号",
        "description": "是否显示背景的超大引号。"
      },
      {
        "key": "showAttribution",
        "label": "署名",
        "type": "boolean",
        "default": true,
        "desc": "是否显示出处 / 署名。",
        "publicKey": "showAttribution",
        "publicLabel": "署名",
        "description": "是否显示出处 / 署名。"
      },
      {
        "key": "align",
        "label": "对齐方式",
        "type": "select",
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
        "desc": "整页内容的对齐方式。",
        "publicKey": "align",
        "publicLabel": "对齐方式",
        "description": "整页内容的对齐方式。"
      },
      {
        "key": "showCaption",
        "label": "装饰文案",
        "type": "boolean",
        "default": true,
        "desc": "底部 */ … /* 说明文案的显示。",
        "publicKey": "showCaption",
        "publicLabel": "装饰文案",
        "description": "底部 */ … /* 说明文案的显示。"
      }
    ],
    "defaultProps": {
      "kicker": "CEO 视角 · Anthropic",
      "quote": "我们相信，通过「Constitutional AI」等方法构建可解释、可控的系统，比单纯追求规模更符合长远利益。",
      "contrastWord": "单纯追求规模",
      "highlightWord": "可解释、可控",
      "attribution": "Dario Amodei · Anthropic CEO",
      "caption": "金句 · 安全对齐，是 Anthropic 的护城河",
      "notes": [
        {
          "label": "安全对齐",
          "tone": "accent"
        },
        {
          "label": "长远利益",
          "tone": "muted"
        }
      ],
      "accentColor": "#c9f24d",
      "noteCount": 2,
      "showQuoteMark": true,
      "showHighlighter": true,
      "showAttribution": true,
      "align": "left",
      "showCaption": true
    }
  },
  {
    "key": "theme01_page028",
    "themeKey": "theme01",
    "pageNumber": 28,
    "layout": "THEME01-028",
    "slot": "timeline",
    "label": "里程碑时间轴",
    "bgClass": "",
    "controls": [
      {
        "key": "itemCount",
        "label": "节点数量",
        "type": "number",
        "default": 4,
        "min": 2,
        "max": 5,
        "step": 1,
        "desc": "时间轴上展示的节点数量。",
        "publicKey": "itemCount",
        "publicLabel": "节点数量",
        "description": "时间轴上展示的节点数量。"
      },
      {
        "key": "highlight",
        "label": "重点强调",
        "type": "boolean",
        "default": true,
        "desc": "是否把其中一个节点渲染成荧光「印章」贴纸。",
        "publicKey": "highlight",
        "publicLabel": "重点强调",
        "description": "是否把其中一个节点渲染成荧光「印章」贴纸。"
      },
      {
        "key": "highlightIndex",
        "label": "强调第几个",
        "type": "number",
        "default": 2,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "被强调的节点序号（从 0 开始）。",
        "publicKey": "highlightIndex",
        "publicLabel": "强调第几个",
        "description": "被强调的节点序号（从 0 开始）。"
      },
      {
        "key": "accentColor",
        "label": "强调色",
        "type": "color",
        "default": "#e8503a",
        "options": [
          "#e8503a",
          "#5b8def",
          "#46b083",
          "#e0a23a",
          "#7a5ae0",
          "#c9f24d"
        ],
        "desc": "被强调节点的荧光贴纸颜色。",
        "publicKey": "accentColor",
        "publicLabel": "强调色",
        "description": "被强调节点的荧光贴纸颜色。"
      },
      {
        "key": "layout",
        "label": "节点排布",
        "type": "select",
        "default": "zigzag",
        "options": [
          {
            "value": "zigzag",
            "label": "上下交错"
          },
          {
            "value": "below",
            "label": "全部在下"
          }
        ],
        "desc": "节点相对中轴线的排布方式。",
        "publicKey": "layout",
        "publicLabel": "节点排布",
        "description": "节点相对中轴线的排布方式。"
      },
      {
        "key": "showConnector",
        "label": "连接轴线",
        "type": "boolean",
        "default": true,
        "desc": "是否显示贯穿的中轴线与节点圆点。",
        "publicKey": "showConnector",
        "publicLabel": "连接轴线",
        "description": "是否显示贯穿的中轴线与节点圆点。"
      },
      {
        "key": "showCaption",
        "label": "装饰文案",
        "type": "boolean",
        "default": true,
        "desc": "底部 */ … /* 说明文案的显示。",
        "publicKey": "showCaption",
        "publicLabel": "装饰文案",
        "description": "底部 */ … /* 说明文案的显示。"
      }
    ],
    "defaultProps": {
      "kicker": "# 典型案例",
      "title": "里程碑 · Anthropic 2024 融资节奏",
      "en": "Funding Milestones",
      "cn": "一年三轮 · 估值 16 倍跃迁",
      "events": [
        {
          "date": "2024 · 05",
          "round": "Series G",
          "amount": "280",
          "unit": "亿",
          "note": "估值 600 亿",
          "color": "#5b8def"
        },
        {
          "date": "2024 · 08",
          "round": "Series H · 首轮",
          "amount": "180",
          "unit": "亿",
          "note": "估值 830 亿",
          "color": "#46b083"
        },
        {
          "date": "2024 · 11",
          "round": "Series H · 扩轮",
          "amount": "190",
          "unit": "亿",
          "note": "估值 9650 亿",
          "color": "#e8503a"
        },
        {
          "date": "2026 · 06",
          "round": "递交 IPO 申请",
          "amount": "上市",
          "unit": "",
          "note": "全球估值最高 AI 初创",
          "color": "#7a5ae0"
        }
      ],
      "caption": "时间轴 · 资本如何在一年内重写估值",
      "itemCount": 4,
      "highlight": true,
      "highlightIndex": 2,
      "accentColor": "#e8503a",
      "layout": "zigzag",
      "showConnector": true,
      "showCaption": true
    }
  },
  {
    "key": "theme01_page029",
    "themeKey": "theme01",
    "pageNumber": 29,
    "layout": "THEME01-029",
    "slot": "case-strength",
    "label": "核心竞争力",
    "bgClass": "",
    "controls": [
      {
        "key": "pointCount",
        "label": "要点数量",
        "type": "number",
        "default": 3,
        "min": 1,
        "max": 4,
        "step": 1,
        "desc": "展示的要点卡数量。",
        "publicKey": "pointCount",
        "publicLabel": "要点数量",
        "description": "展示的要点卡数量。"
      },
      {
        "key": "highlight",
        "label": "重点强调",
        "type": "boolean",
        "default": true,
        "desc": "是否高亮强调其中一条要点。",
        "publicKey": "highlight",
        "publicLabel": "重点强调",
        "description": "是否高亮强调其中一条要点。"
      },
      {
        "key": "highlightIndex",
        "label": "强调第几条",
        "type": "number",
        "default": 0,
        "min": 0,
        "max": 3,
        "step": 1,
        "desc": "被强调的要点序号（从 0 开始）。",
        "publicKey": "highlightIndex",
        "publicLabel": "强调第几条",
        "description": "被强调的要点序号（从 0 开始）。"
      },
      {
        "key": "imageSlotCount",
        "label": "图片数量",
        "type": "number",
        "default": 1,
        "min": 0,
        "max": 2,
        "step": 1,
        "desc": "图片槽数量（0 时要点占满整页，布局自动适配）。",
        "publicKey": "imageSlotCount",
        "publicLabel": "图片数量",
        "description": "图片槽数量（0 时要点占满整页，布局自动适配）。"
      },
      {
        "key": "imageFit",
        "label": "图片填充",
        "type": "select",
        "default": "cover",
        "options": [
          {
            "value": "cover",
            "label": "裁剪填满"
          },
          {
            "value": "contain",
            "label": "完整自适应"
          }
        ],
        "desc": "图片填充方式：裁剪填满构图统一，完整自适应按原始比例显示。",
        "publicKey": "imageFit",
        "publicLabel": "图片填充",
        "description": "图片填充方式：裁剪填满构图统一，完整自适应按原始比例显示。"
      },
      {
        "key": "images",
        "label": "图片",
        "type": "images",
        "countKey": "imageSlotCount",
        "desc": "上传图片（数量由「图片数量」控制），槽位自适应图片比例。",
        "publicKey": "images",
        "publicLabel": "图片",
        "description": "上传图片（数量由「图片数量」控制），槽位自适应图片比例。"
      },
      {
        "key": "imageSide",
        "label": "图片位置",
        "type": "select",
        "default": "left",
        "options": [
          {
            "value": "left",
            "label": "图左文右"
          },
          {
            "value": "right",
            "label": "图右文左"
          }
        ],
        "desc": "图片相对要点的位置。",
        "publicKey": "imageSide",
        "publicLabel": "图片位置",
        "description": "图片相对要点的位置。"
      },
      {
        "key": "imageLayout",
        "label": "图片版式",
        "type": "select",
        "default": "normal",
        "options": [
          {
            "value": "normal",
            "label": "常规排布"
          },
          {
            "value": "collage",
            "label": "叠放拼贴"
          }
        ],
        "desc": "常规：整齐排布；叠放拼贴：图片倾斜叠压、白边浮起的拼贴效果。",
        "publicKey": "imageLayout",
        "publicLabel": "图片版式",
        "description": "常规：整齐排布；叠放拼贴：图片倾斜叠压、白边浮起的拼贴效果。"
      },
      {
        "key": "accentColor",
        "label": "主题色",
        "type": "color",
        "default": "#7a5ae0",
        "options": [
          "#7a5ae0",
          "#5b8def",
          "#46b083",
          "#e0a23a",
          "#e8503a"
        ],
        "desc": "序号徽标与强调要点的颜色。",
        "publicKey": "accentColor",
        "publicLabel": "主题色",
        "description": "序号徽标与强调要点的颜色。"
      },
      {
        "key": "showCaption",
        "label": "装饰文案",
        "type": "boolean",
        "default": true,
        "desc": "底部 */ … /* 说明文案的显示。",
        "publicKey": "showCaption",
        "publicLabel": "装饰文案",
        "description": "底部 */ … /* 说明文案的显示。"
      }
    ],
    "defaultProps": {
      "kicker": "# 典型案例",
      "title": "核心竞争力 · Anthropic",
      "en": "What Sets It Apart",
      "cn": "为何能从追赶到反超",
      "points": [
        {
          "h": "安全对齐 · 信任壁垒",
          "d": "技术路线聚焦「安全对齐」，在企业客户中建立长期信任优势。",
          "color": "#5b8def"
        },
        {
          "h": "Claude 模型能力",
          "d": "Claude 系列在代码生成、长文本理解等任务上表现突出。",
          "color": "#46b083"
        },
        {
          "h": "云巨头深度合作",
          "d": "与 Amazon、Google 等云巨头深度绑定，渠道覆盖迅速。",
          "color": "#e0a23a"
        }
      ],
      "images": [
        "",
        ""
      ],
      "caption": "要点 · 三条护城河支撑估值反超",
      "pointCount": 3,
      "highlight": true,
      "highlightIndex": 0,
      "imageSlotCount": 1,
      "imageFit": "cover",
      "imageLayout": "normal",
      "imageSide": "left",
      "accentColor": "#7a5ae0",
      "showCaption": true
    }
  },
  {
    "key": "theme01_page030",
    "themeKey": "theme01",
    "pageNumber": 30,
    "layout": "THEME01-030",
    "slot": "banner-embodied",
    "label": "前沿赛道 · 具身智能",
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
        "key": "imageSlotCount",
        "label": "图片数量",
        "type": "number",
        "default": 1,
        "min": 0,
        "max": 2,
        "step": 1,
        "desc": "满版图片槽数量：0 显示条纹占位、1 单张满版、2 左右双图（各自按比例自适应，不变形）。",
        "publicKey": "imageSlotCount",
        "publicLabel": "图片数量",
        "description": "满版图片槽数量：0 显示条纹占位、1 单张满版、2 左右双图（各自按比例自适应，不变形）。"
      },
      {
        "key": "imageFit",
        "label": "图片填充",
        "type": "select",
        "default": "cover",
        "options": [
          {
            "value": "cover",
            "label": "裁剪填满"
          },
          {
            "value": "contain",
            "label": "完整自适应"
          }
        ],
        "desc": "图片填充方式：裁剪填满铺满版面，完整自适应按原始比例显示。",
        "publicKey": "imageFit",
        "publicLabel": "图片填充",
        "description": "图片填充方式：裁剪填满铺满版面，完整自适应按原始比例显示。"
      },
      {
        "key": "images",
        "label": "图片",
        "type": "images",
        "countKey": "imageSlotCount",
        "desc": "上传满版图片，槽位自适应图片比例不变形。",
        "publicKey": "images",
        "publicLabel": "图片",
        "description": "上传满版图片，槽位自适应图片比例不变形。"
      },
      {
        "key": "plate",
        "label": "信息卡位置",
        "type": "select",
        "default": "bottom-left",
        "options": [
          {
            "value": "bottom-left",
            "label": "左下"
          },
          {
            "value": "bottom-right",
            "label": "右下"
          },
          {
            "value": "center-left",
            "label": "左侧居中"
          }
        ],
        "desc": "浮层玻璃信息卡在画面中的落位。",
        "publicKey": "plate",
        "publicLabel": "信息卡位置",
        "description": "浮层玻璃信息卡在画面中的落位。"
      },
      {
        "key": "statCount",
        "label": "指标数量",
        "type": "number",
        "default": 3,
        "min": 0,
        "max": 3,
        "step": 1,
        "desc": "信息卡底部统计胶囊的数量。",
        "publicKey": "statCount",
        "publicLabel": "指标数量",
        "description": "信息卡底部统计胶囊的数量。"
      },
      {
        "key": "highlight",
        "label": "重点强调",
        "type": "boolean",
        "default": true,
        "desc": "是否把其中一个指标渲染成实色荧光「印章」胶囊。",
        "publicKey": "highlight",
        "publicLabel": "重点强调",
        "description": "是否把其中一个指标渲染成实色荧光「印章」胶囊。"
      },
      {
        "key": "highlightIndex",
        "label": "强调第几个",
        "type": "number",
        "default": 0,
        "min": 0,
        "max": 2,
        "step": 1,
        "desc": "被强调的指标序号（从 0 开始）。",
        "publicKey": "highlightIndex",
        "publicLabel": "强调第几个",
        "description": "被强调的指标序号（从 0 开始）。"
      },
      {
        "key": "showHighlighter",
        "label": "荧光高亮",
        "type": "boolean",
        "default": true,
        "desc": "是否给说明句关键词加荧光底纹。",
        "publicKey": "showHighlighter",
        "publicLabel": "荧光高亮",
        "description": "是否给说明句关键词加荧光底纹。"
      },
      {
        "key": "accentColor",
        "label": "主题色",
        "type": "color",
        "default": "#7a5ae0",
        "options": [
          "#7a5ae0",
          "#5b8def",
          "#46b083",
          "#e0a23a",
          "#e8503a",
          "#c9f24d"
        ],
        "desc": "信息卡强调元素与荧光的颜色。",
        "publicKey": "accentColor",
        "publicLabel": "主题色",
        "description": "信息卡强调元素与荧光的颜色。"
      },
      {
        "key": "showCaption",
        "label": "装饰文案",
        "type": "boolean",
        "default": true,
        "desc": "底部 */ … /* 说明文案的显示。",
        "publicKey": "showCaption",
        "publicLabel": "装饰文案",
        "description": "底部 */ … /* 说明文案的显示。"
      }
    ],
    "defaultProps": {
      "kicker": "前沿赛道 · 具身智能",
      "title": "从模型，走向物理世界",
      "en": "Embodied AI",
      "cn": "AI 的下一个战场：让智能拥有身体",
      "lead": "当大模型在屏幕里日趋成熟，资本开始押注「具身智能」——人形机器人把算法装进可以行动的躯体。",
      "highlightWord": "具身智能",
      "stats": [
        {
          "value": "6.8",
          "unit": "亿",
          "label": "Figure AI 单笔融资"
        },
        {
          "value": "Top 6",
          "unit": "",
          "label": "跻身年度单笔前六"
        },
        {
          "value": "硬科技",
          "unit": "",
          "label": "需长周期技术积累"
        }
      ],
      "images": [
        "",
        ""
      ],
      "caption": "满版图片 · 资本下注的下一个战场",
      "imageSlotCount": 1,
      "imageFit": "cover",
      "backgroundMode": "unicorn",
      "unicornScene": "tech",
      "plate": "bottom-left",
      "statCount": 3,
      "highlight": true,
      "highlightIndex": 0,
      "showHighlighter": true,
      "accentColor": "#7a5ae0",
      "showCaption": true
    }
  },
  {
    "key": "theme01_page031",
    "themeKey": "theme01",
    "pageNumber": 31,
    "layout": "THEME01-031",
    "slot": "quadrant",
    "label": "资本四象限",
    "bgClass": "",
    "controls": [
      {
        "key": "highlight",
        "label": "重点强调",
        "type": "boolean",
        "default": true,
        "desc": "是否高亮强调其中一个象限。",
        "publicKey": "highlight",
        "publicLabel": "重点强调",
        "description": "是否高亮强调其中一个象限。"
      },
      {
        "key": "highlightIndex",
        "label": "强调第几象限",
        "type": "number",
        "default": 1,
        "min": 0,
        "max": 3,
        "step": 1,
        "desc": "被强调的象限序号（阅读顺序：左上 0 / 右上 1 / 左下 2 / 右下 3）。",
        "publicKey": "highlightIndex",
        "publicLabel": "强调第几象限",
        "description": "被强调的象限序号（阅读顺序：左上 0 / 右上 1 / 左下 2 / 右下 3）。"
      },
      {
        "key": "showAxisLabels",
        "label": "坐标轴标签",
        "type": "boolean",
        "default": true,
        "desc": "是否显示横纵坐标轴的高低标签。",
        "publicKey": "showAxisLabels",
        "publicLabel": "坐标轴标签",
        "description": "是否显示横纵坐标轴的高低标签。"
      },
      {
        "key": "chipCount",
        "label": "每象限公司数",
        "type": "number",
        "default": 4,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "每个象限展示的对象标签数量（0 时仅显示文字描述）。",
        "publicKey": "chipCount",
        "publicLabel": "每象限公司数",
        "description": "每个象限展示的对象标签数量（0 时仅显示文字描述）。"
      },
      {
        "key": "showCaption",
        "label": "装饰文案",
        "type": "boolean",
        "default": true,
        "desc": "是否显示底部说明文案。",
        "publicKey": "showCaption",
        "publicLabel": "装饰文案",
        "description": "是否显示底部说明文案。"
      }
    ],
    "defaultProps": {
      "kicker": "# 选题主线",
      "title": "资本四象限 · 热度 × 兑现",
      "en": "Capital Heat × Commercial Delivery",
      "cn": "资本正从叙事驱动转向兑现驱动",
      "quadrants": [
        {
          "title": "叙事泡沫区",
          "en": "NARRATIVE BUBBLE",
          "tone": "red",
          "desc": "通用大模型 / AGI 实验室获巨额融资，但兑现受算力成本、差异化与付费转化约束。",
          "chips": [
            "OpenAI",
            "Anthropic",
            "xAI",
            "SSI"
          ]
        },
        {
          "title": "明星兑现区",
          "en": "PROVEN STARS",
          "tone": "green",
          "desc": "算力云、数据平台兼具融资热度与收入确定性，“卖铲子”逻辑，需求来自训练与企业 AI 化。",
          "chips": [
            "CoreWeave",
            "Databricks",
            "Scale AI"
          ]
        },
        {
          "title": "等待验证区",
          "en": "TO BE PROVEN",
          "tone": "amber",
          "desc": "长尾工具链、安全、早期硬件与应用，概念成立但规模未证，作为风险与边缘变量观察。",
          "chips": [
            "工具链",
            "安全",
            "早期应用"
          ]
        },
        {
          "title": "隐形价值区",
          "en": "HIDDEN VALUE",
          "tone": "blue",
          "desc": "垂直应用、企业搜索、工作流自动化单笔不一定最大，但落地路径清晰，看付费留存与续约。",
          "chips": [
            "Glean",
            "Perplexity"
          ]
        }
      ],
      "axisY": {
        "high": "资本热度 高",
        "low": "资本热度 低"
      },
      "axisX": {
        "low": "商业兑现度 低",
        "high": "商业兑现度 高"
      },
      "caption": "热度看融资额、轮次与头部集中度；兑现看收入确定性、客户留存、成本结构与商业闭环",
      "highlight": true,
      "highlightIndex": 1,
      "showAxisLabels": true,
      "chipCount": 4,
      "showCaption": true
    }
  },
  {
    "key": "theme01_page032",
    "themeKey": "theme01",
    "pageNumber": 32,
    "layout": "THEME01-032",
    "slot": "rounds",
    "label": "轮次结构",
    "bgClass": "",
    "controls": [
      {
        "key": "highlight",
        "label": "重点强调",
        "type": "boolean",
        "default": true,
        "desc": "是否高亮强调其中一个阶段。",
        "publicKey": "highlight",
        "publicLabel": "重点强调",
        "description": "是否高亮强调其中一个阶段。"
      },
      {
        "key": "highlightIndex",
        "label": "强调第几个",
        "type": "number",
        "default": 5,
        "min": 0,
        "max": 5,
        "step": 1,
        "desc": "被强调的阶段序号（从 0 开始）。",
        "publicKey": "highlightIndex",
        "publicLabel": "强调第几个",
        "description": "被强调的阶段序号（从 0 开始）。"
      },
      {
        "key": "showSecondary",
        "label": "平均单笔曲线",
        "type": "boolean",
        "default": true,
        "desc": "是否叠加“平均单笔数值”折线（次坐标）。",
        "publicKey": "showValueLabels",
        "publicLabel": "平均单笔曲线",
        "description": "是否叠加“平均单笔数值”折线（次坐标）。"
      },
      {
        "key": "barColor",
        "label": "柱状颜色",
        "type": "color",
        "default": "#5b8def",
        "options": [
          "#5b8def",
          "#46b083",
          "#7a5ae0",
          "#e0a23a"
        ],
        "desc": "事件笔数柱状的颜色。",
        "publicKey": "barColor",
        "publicLabel": "柱状颜色",
        "description": "事件笔数柱状的颜色。"
      },
      {
        "key": "lineColor",
        "label": "折线颜色",
        "type": "color",
        "default": "#e8503a",
        "options": [
          "#e8503a",
          "#e0a23a",
          "#7a5ae0",
          "#46b083"
        ],
        "desc": "平均单笔折线的颜色。",
        "publicKey": "lineColor",
        "publicLabel": "折线颜色",
        "description": "平均单笔折线的颜色。"
      },
      {
        "key": "showCaption",
        "label": "装饰文案",
        "type": "boolean",
        "default": true,
        "desc": "是否显示底部说明文案。",
        "publicKey": "showCaption",
        "publicLabel": "装饰文案",
        "description": "是否显示底部说明文案。"
      },
      {
        "key": "evil",
        "label": "evilcharts 模式",
        "type": "boolean",
        "default": false,
        "desc": "切换为 evilcharts 风格：点阵底纹绘图区 + 柱面 45° 斜纹 + 柱/线霓虹辉光。",
        "publicKey": "evil",
        "publicLabel": "evilcharts 模式",
        "description": "切换为 evilcharts 风格：点阵底纹绘图区 + 柱面 45° 斜纹 + 柱/线霓虹辉光。"
      }
    ],
    "defaultProps": {
      "kicker": "# 横向透视",
      "title": "轮次结构 · 笔数与单笔",
      "en": "Rounds — Count vs Avg Ticket",
      "cn": "不同轮次的事件笔数与平均单笔",
      "rounds": [
        {
          "label": "种子轮",
          "en": "Seed",
          "deals": 8,
          "avg": 1.2
        },
        {
          "label": "A 轮",
          "en": "Series A",
          "deals": 12,
          "avg": 1.8
        },
        {
          "label": "B 轮",
          "en": "Series B",
          "deals": 18,
          "avg": 3.5
        },
        {
          "label": "C 轮",
          "en": "Series C",
          "deals": 15,
          "avg": 6.8
        },
        {
          "label": "D 轮+",
          "en": "Series D+",
          "deals": 22,
          "avg": 15.2
        },
        {
          "label": "未标明",
          "en": "Undisclosed",
          "deals": 22,
          "avg": 18.6
        }
      ],
      "barColor": "#5b8def",
      "lineColor": "#e8503a",
      "caption": "“D 轮及以后”与“未标明轮次”合计过半，平均单笔超 15 亿 · 头部公司“赢家通吃”",
      "highlight": true,
      "highlightIndex": 5,
      "showSecondary": true,
      "showCaption": true,
      "evil": false
    }
  },
  {
    "key": "theme01_page033",
    "themeKey": "theme01",
    "pageNumber": 33,
    "layout": "THEME01-033",
    "slot": "table",
    "label": "表格 · 轮次明细",
    "bgClass": "",
    "controls": [
      {
        "key": "rowCount",
        "label": "数据行数",
        "type": "number",
        "default": 6,
        "min": 1,
        "max": 10,
        "step": 1,
        "desc": "展示的数据行数量（不含表头与合计行）；行高随行数自适应，不会溢出。",
        "publicKey": "rowCount",
        "publicLabel": "数据行数",
        "description": "展示的数据行数量（不含表头与合计行）；行高随行数自适应，不会溢出。"
      },
      {
        "key": "emphasizeCol",
        "label": "强调列",
        "type": "select",
        "default": 2,
        "options": [
          {
            "value": -1,
            "label": "无"
          },
          {
            "value": 1,
            "label": "第 2 列"
          },
          {
            "value": 2,
            "label": "第 3 列"
          }
        ],
        "desc": "被着重显示的数值列（着色，可叠加迷你条）。",
        "publicKey": "emphasizeCol",
        "publicLabel": "强调列",
        "description": "被着重显示的数值列（着色，可叠加迷你条）。"
      },
      {
        "key": "showBars",
        "label": "迷你条形",
        "type": "boolean",
        "default": true,
        "desc": "是否在强调列的单元格内叠加比例条。",
        "publicKey": "showBars",
        "publicLabel": "迷你条形",
        "description": "是否在强调列的单元格内叠加比例条。"
      },
      {
        "key": "highlight",
        "label": "重点强调",
        "type": "boolean",
        "default": true,
        "desc": "是否高亮其中一行。",
        "publicKey": "highlight",
        "publicLabel": "重点强调",
        "description": "是否高亮其中一行。"
      },
      {
        "key": "highlightIndex",
        "label": "强调第几行",
        "type": "number",
        "default": 4,
        "min": 0,
        "max": 9,
        "step": 1,
        "desc": "被强调的数据行序号（从 0 开始）。",
        "publicKey": "highlightIndex",
        "publicLabel": "强调第几行",
        "description": "被强调的数据行序号（从 0 开始）。"
      },
      {
        "key": "striped",
        "label": "斑马纹",
        "type": "boolean",
        "default": true,
        "desc": "隔行底色，便于横向阅读。",
        "publicKey": "striped",
        "publicLabel": "斑马纹",
        "description": "隔行底色，便于横向阅读。"
      },
      {
        "key": "showFooter",
        "label": "合计行",
        "type": "boolean",
        "default": true,
        "desc": "是否显示底部合计 / 汇总行。",
        "publicKey": "showFooter",
        "publicLabel": "合计行",
        "description": "是否显示底部合计 / 汇总行。"
      },
      {
        "key": "accentColor",
        "label": "主题色",
        "type": "color",
        "default": "#5b8def",
        "options": [
          "#5b8def",
          "#46b083",
          "#e0a23a",
          "#e8503a",
          "#7a5ae0"
        ],
        "desc": "表头、强调列与高亮行的颜色。",
        "publicKey": "accentColor",
        "publicLabel": "主题色",
        "description": "表头、强调列与高亮行的颜色。"
      },
      {
        "key": "showCaption",
        "label": "装饰文案",
        "type": "boolean",
        "default": true,
        "desc": "底部 */ … /* 说明文案的显示。",
        "publicKey": "showCaption",
        "publicLabel": "装饰文案",
        "description": "底部 */ … /* 说明文案的显示。"
      }
    ],
    "defaultProps": {
      "kicker": "# 横向透视",
      "title": "轮次结构 · 笔数与单笔明细",
      "en": "Funding Rounds — Count & Avg Ticket",
      "cn": "不同轮次的事件笔数与平均单笔",
      "columns": [
        "融资轮次",
        "事件笔数",
        "平均单笔 / 亿美元"
      ],
      "rows": [
        [
          "种子轮 Seed",
          "8",
          "1.2"
        ],
        [
          "A 轮 Series A",
          "12",
          "1.8"
        ],
        [
          "B 轮 Series B",
          "18",
          "3.5"
        ],
        [
          "C 轮 Series C",
          "15",
          "6.8"
        ],
        [
          "D 轮及以后 Series D+",
          "22",
          "15.2"
        ],
        [
          "未标明轮次 Undisclosed",
          "22",
          "18.6"
        ]
      ],
      "footer": [
        "全年合计",
        "97",
        "10.0"
      ],
      "textCols": [],
      "caption": "表格 · 越到后轮，单笔越大——“赢家通吃”",
      "rowCount": 6,
      "emphasizeCol": 2,
      "showBars": true,
      "highlight": true,
      "highlightIndex": 4,
      "striped": true,
      "showFooter": true,
      "accentColor": "#5b8def",
      "showCaption": true
    }
  },
  {
    "key": "theme01_page034",
    "themeKey": "theme01",
    "pageNumber": 34,
    "layout": "THEME01-034",
    "slot": "region",
    "label": "地区分布",
    "bgClass": "",
    "controls": [
      {
        "key": "segmentCount",
        "label": "地区数量",
        "type": "number",
        "default": 5,
        "min": 3,
        "max": 5,
        "step": 1,
        "desc": "展示的地区数量（其余并入末项）。",
        "publicKey": "segmentCount",
        "publicLabel": "地区数量",
        "description": "展示的地区数量（其余并入末项）。"
      },
      {
        "key": "highlight",
        "label": "重点强调",
        "type": "boolean",
        "default": true,
        "desc": "是否高亮强调其中一个地区。",
        "publicKey": "highlight",
        "publicLabel": "重点强调",
        "description": "是否高亮强调其中一个地区。"
      },
      {
        "key": "highlightIndex",
        "label": "强调第几个",
        "type": "number",
        "default": 0,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "被强调的地区序号（从 0 开始）。",
        "publicKey": "highlightIndex",
        "publicLabel": "强调第几个",
        "description": "被强调的地区序号（从 0 开始）。"
      },
      {
        "key": "showCallout",
        "label": "集聚度卡片",
        "type": "boolean",
        "default": true,
        "desc": "是否显示左侧集聚度大数字卡片。",
        "publicKey": "showCallout",
        "publicLabel": "集聚度卡片",
        "description": "是否显示左侧集聚度大数字卡片。"
      },
      {
        "key": "showCaption",
        "label": "装饰文案",
        "type": "boolean",
        "default": true,
        "desc": "是否显示底部说明文案。",
        "publicKey": "showCaption",
        "publicLabel": "装饰文案",
        "description": "是否显示底部说明文案。"
      }
    ],
    "defaultProps": {
      "kicker": "# 横向透视",
      "title": "地区分布 · 高度集聚",
      "en": "Funding by Region",
      "cn": "融资高度集中在少数科技枢纽",
      "regions": [
        {
          "label": "旧金山湾区",
          "en": "SF Bay Area",
          "value": 620,
          "share": 63.9,
          "color": "#5b8def"
        },
        {
          "label": "纽约",
          "en": "New York",
          "value": 120,
          "share": 12.4,
          "color": "#46b083"
        },
        {
          "label": "西雅图",
          "en": "Seattle",
          "value": 95,
          "share": 9.8,
          "color": "#e0a23a"
        },
        {
          "label": "波士顿",
          "en": "Boston",
          "value": 75,
          "share": 7.7,
          "color": "#e8503a"
        },
        {
          "label": "其他地区",
          "en": "Others",
          "value": 60,
          "share": 6.2,
          "color": "#7a5ae0"
        }
      ],
      "callout": {
        "value": "63.9%",
        "label": "旧金山湾区",
        "note": "独占六成以上 · 人才、资本、算力虹吸效应进一步强化"
      },
      "caption": "“地理护城河”短期内难以撼动 · 旧金山湾区独占六成以上份额",
      "segmentCount": 5,
      "highlight": true,
      "highlightIndex": 0,
      "showCallout": true,
      "showCaption": true
    }
  },
  {
    "key": "theme01_page035",
    "themeKey": "theme01",
    "pageNumber": 35,
    "layout": "THEME01-035",
    "slot": "feature-region",
    "label": "湾区 · 地理护城河",
    "bgClass": "",
    "controls": [
      {
        "key": "imageSlotCount",
        "label": "图片数量",
        "type": "number",
        "default": 1,
        "min": 0,
        "max": 3,
        "step": 1,
        "desc": "特写图片槽数量（0 时自动切换为纯文字大留白构图）；叠放拼贴版式下 2–3 张会互相叠压。",
        "publicKey": "imageSlotCount",
        "publicLabel": "图片数量",
        "description": "特写图片槽数量（0 时自动切换为纯文字大留白构图）；叠放拼贴版式下 2–3 张会互相叠压。"
      },
      {
        "key": "imageFit",
        "label": "图片填充",
        "type": "select",
        "default": "cover",
        "options": [
          {
            "value": "cover",
            "label": "裁剪填满"
          },
          {
            "value": "contain",
            "label": "完整自适应"
          }
        ],
        "desc": "图片填充方式：裁剪填满铺满版面，完整自适应按原始比例显示。",
        "publicKey": "imageFit",
        "publicLabel": "图片填充",
        "description": "图片填充方式：裁剪填满铺满版面，完整自适应按原始比例显示。"
      },
      {
        "key": "imageLayout",
        "label": "图片版式",
        "type": "select",
        "default": "normal",
        "options": [
          {
            "value": "normal",
            "label": "常规特写"
          },
          {
            "value": "collage",
            "label": "叠放拼贴"
          }
        ],
        "desc": "常规：单张特写（含满版叠字）；叠放拼贴：多张图片倾斜叠压、白边浮起的拼贴效果。",
        "publicKey": "imageLayout",
        "publicLabel": "图片版式",
        "description": "常规：单张特写（含满版叠字）；叠放拼贴：多张图片倾斜叠压、白边浮起的拼贴效果。"
      },
      {
        "key": "images",
        "label": "图片",
        "type": "images",
        "countKey": "imageSlotCount",
        "desc": "上传特写图片，槽位自适应图片比例不变形。",
        "publicKey": "images",
        "publicLabel": "图片",
        "description": "上传特写图片，槽位自适应图片比例不变形。"
      },
      {
        "key": "layout",
        "label": "版式",
        "type": "select",
        "default": "split-right",
        "options": [
          {
            "value": "split-right",
            "label": "图右文左"
          },
          {
            "value": "split-left",
            "label": "图左文右"
          },
          {
            "value": "overlay",
            "label": "满版叠字"
          }
        ],
        "desc": "图文版式：左右分栏或满版图片叠加文字。",
        "publicKey": "layout",
        "publicLabel": "版式",
        "description": "图文版式：左右分栏或满版图片叠加文字。"
      },
      {
        "key": "statCount",
        "label": "副指标数量",
        "type": "number",
        "default": 3,
        "min": 0,
        "max": 3,
        "step": 1,
        "desc": "主数字下方的副统计贴纸数量。",
        "publicKey": "statCount",
        "publicLabel": "副指标数量",
        "description": "主数字下方的副统计贴纸数量。"
      },
      {
        "key": "highlight",
        "label": "主数字强调",
        "type": "boolean",
        "default": true,
        "desc": "是否给主数字加荧光描边强调。",
        "publicKey": "highlight",
        "publicLabel": "主数字强调",
        "description": "是否给主数字加荧光描边强调。"
      },
      {
        "key": "showHighlighter",
        "label": "荧光高亮",
        "type": "boolean",
        "default": true,
        "desc": "是否给说明句关键词加荧光底纹。",
        "publicKey": "showHighlighter",
        "publicLabel": "荧光高亮",
        "description": "是否给说明句关键词加荧光底纹。"
      },
      {
        "key": "accentColor",
        "label": "主题色",
        "type": "color",
        "default": "#5b8def",
        "options": [
          "#5b8def",
          "#46b083",
          "#e0a23a",
          "#e8503a",
          "#7a5ae0",
          "#c9f24d"
        ],
        "desc": "主数字、荧光与强调描边的颜色。",
        "publicKey": "accentColor",
        "publicLabel": "主题色",
        "description": "主数字、荧光与强调描边的颜色。"
      },
      {
        "key": "showCaption",
        "label": "装饰文案",
        "type": "boolean",
        "default": true,
        "desc": "底部 */ … /* 说明文案的显示。",
        "publicKey": "showCaption",
        "publicLabel": "装饰文案",
        "description": "底部 */ … /* 说明文案的显示。"
      }
    ],
    "defaultProps": {
      "kicker": "横向透视 · 地区分布",
      "title": "旧金山湾区地理城河",
      "en": "The Geographic Moat",
      "lead": "人才、资本与算力的虹吸效应不断自我强化，短期内难以撼动。",
      "highlightWord": "虹吸效应",
      "bigStat": {
        "value": "63.9",
        "unit": "%",
        "label": "湾区占全美 AI 大额融资"
      },
      "stats": [
        {
          "value": "12.4",
          "unit": "%",
          "label": "纽约"
        },
        {
          "value": "9.8",
          "unit": "%",
          "label": "西雅图"
        },
        {
          "value": "7.7",
          "unit": "%",
          "label": "波士顿"
        }
      ],
      "images": [
        "",
        "",
        ""
      ],
      "caption": "图片特写 · 资本为何如此集中",
      "imageSlotCount": 1,
      "imageFit": "cover",
      "imageLayout": "normal",
      "layout": "split-right",
      "statCount": 3,
      "highlight": true,
      "showHighlighter": true,
      "accentColor": "#5b8def",
      "showCaption": true
    }
  },
  {
    "key": "theme01_page036",
    "themeKey": "theme01",
    "pageNumber": 36,
    "layout": "THEME01-036",
    "slot": "chapter-risk",
    "label": "章节 · 风险与展望",
    "bgClass": "",
    "controls": [
      {
        "key": "topicCount",
        "label": "主线数量",
        "type": "number",
        "default": 4,
        "min": 0,
        "max": 5,
        "step": 1,
        "desc": "展示的分主题贴纸数量（0 时只显示标题）。",
        "publicKey": "topicCount",
        "publicLabel": "主线数量",
        "description": "展示的分主题贴纸数量（0 时只显示标题）。"
      },
      {
        "key": "highlight",
        "label": "重点强调",
        "type": "boolean",
        "default": true,
        "desc": "是否高亮其中一条主线贴纸。",
        "publicKey": "highlight",
        "publicLabel": "重点强调",
        "description": "是否高亮其中一条主线贴纸。"
      },
      {
        "key": "highlightIndex",
        "label": "强调第几条",
        "type": "number",
        "default": 0,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "被强调的主线序号（从 0 开始）。",
        "publicKey": "highlightIndex",
        "publicLabel": "强调第几条",
        "description": "被强调的主线序号（从 0 开始）。"
      },
      {
        "key": "showGhost",
        "label": "背景巨字",
        "type": "boolean",
        "default": true,
        "desc": "是否显示背景的超大序号（无图片时生效）。",
        "publicKey": "showGhost",
        "publicLabel": "背景巨字",
        "description": "是否显示背景的超大序号（无图片时生效）。"
      },
      {
        "key": "accentColor",
        "label": "主题色",
        "type": "color",
        "default": "#5b8def",
        "options": [
          "#5b8def",
          "#46b083",
          "#e0a23a",
          "#e8503a",
          "#7a5ae0"
        ],
        "desc": "本章主题色（序号、贴纸、高亮）。",
        "publicKey": "accentColor",
        "publicLabel": "主题色",
        "description": "本章主题色（序号、贴纸、高亮）。"
      },
      {
        "key": "imageSlotCount",
        "label": "图片数量",
        "type": "number",
        "default": 0,
        "min": 0,
        "max": 2,
        "step": 1,
        "desc": "右侧图片槽数量（0 时背景巨字铺满，布局自动适配）。",
        "publicKey": "imageSlotCount",
        "publicLabel": "图片数量",
        "description": "右侧图片槽数量（0 时背景巨字铺满，布局自动适配）。"
      },
      {
        "key": "imageFit",
        "label": "图片填充",
        "type": "select",
        "default": "cover",
        "options": [
          {
            "value": "cover",
            "label": "裁剪填满"
          },
          {
            "value": "contain",
            "label": "完整自适应"
          }
        ],
        "desc": "图片填充方式。",
        "publicKey": "imageFit",
        "publicLabel": "图片填充",
        "description": "图片填充方式。"
      },
      {
        "key": "images",
        "label": "图片",
        "type": "images",
        "countKey": "imageSlotCount",
        "desc": "上传图片（数量由「图片数量」控制），槽位自适应图片比例。",
        "publicKey": "images",
        "publicLabel": "图片",
        "description": "上传图片（数量由「图片数量」控制），槽位自适应图片比例。"
      },
      {
        "key": "showCaption",
        "label": "装饰文案",
        "type": "boolean",
        "default": true,
        "desc": "底部 */ … /* 说明文案的显示。",
        "publicKey": "showCaption",
        "publicLabel": "装饰文案",
        "description": "底部 */ … /* 说明文案的显示。"
      }
    ],
    "defaultProps": {
      "kicker": "章节",
      "partLabel": "PART 06",
      "index": "06",
      "title": "风险与展望",
      "en": "Risks & Outlook",
      "desc": "纪录之下，泡沫、监管、巨头挤压与算力卡脖子四重信号并存。资本的下一阶段，将从「赌叙事」转向「看兑现」。",
      "topics": [
        {
          "label": "估值泡沫"
        },
        {
          "label": "风险研判"
        },
        {
          "label": "投资展望"
        },
        {
          "label": "阶段策略"
        }
      ],
      "caption": "章节导航 · 从风险信号到阶段策略",
      "topicCount": 4,
      "highlight": true,
      "highlightIndex": 0,
      "showGhost": true,
      "accentColor": "#e8503a",
      "imageSlotCount": 0,
      "imageFit": "cover",
      "images": [
        "",
        ""
      ],
      "showCaption": true
    }
  },
  {
    "key": "theme01_page037",
    "themeKey": "theme01",
    "pageNumber": 37,
    "layout": "THEME01-037",
    "slot": "sticker-bubble",
    "label": "大数字 · 估值泡沫",
    "bgClass": "",
    "controls": [
      {
        "key": "stickerCount",
        "label": "贴纸数量",
        "type": "number",
        "default": 4,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "主数字四周的贴纸标签数量（0 时只显示主数字）。",
        "publicKey": "stickerCount",
        "publicLabel": "贴纸数量",
        "description": "主数字四周的贴纸标签数量（0 时只显示主数字）。"
      },
      {
        "key": "highlight",
        "label": "重点强调",
        "type": "boolean",
        "default": true,
        "desc": "是否把其中一张贴纸渲染成荧光强调款。",
        "publicKey": "highlight",
        "publicLabel": "重点强调",
        "description": "是否把其中一张贴纸渲染成荧光强调款。"
      },
      {
        "key": "highlightIndex",
        "label": "强调第几张",
        "type": "number",
        "default": 3,
        "min": 0,
        "max": 3,
        "step": 1,
        "desc": "被强调的贴纸序号（从 0 开始）。",
        "publicKey": "highlightIndex",
        "publicLabel": "强调第几张",
        "description": "被强调的贴纸序号（从 0 开始）。"
      },
      {
        "key": "accentColor",
        "label": "主题色",
        "type": "color",
        "default": "#e8503a",
        "options": [
          "#e8503a",
          "#5b8def",
          "#46b083",
          "#e0a23a",
          "#7a5ae0"
        ],
        "desc": "主数字、荧光高亮与强调贴纸的颜色。",
        "publicKey": "accentColor",
        "publicLabel": "主题色",
        "description": "主数字、荧光高亮与强调贴纸的颜色。"
      },
      {
        "key": "showHighlighter",
        "label": "荧光高亮",
        "type": "boolean",
        "default": true,
        "desc": "是否给标题关键词加荧光底纹。",
        "publicKey": "showHighlighter",
        "publicLabel": "荧光高亮",
        "description": "是否给标题关键词加荧光底纹。"
      },
      {
        "key": "showCaption",
        "label": "装饰文案",
        "type": "boolean",
        "default": true,
        "desc": "底部 */ … /* 说明文案的显示。",
        "publicKey": "showCaption",
        "publicLabel": "装饰文案",
        "description": "底部 */ … /* 说明文案的显示。"
      }
    ],
    "defaultProps": {
      "eyebrow": "风险信号 · 估值泡沫",
      "value": "1000",
      "prefix": "",
      "suffix": "×+",
      "unitLabel": "P / S 市销率",
      "headline": "估值跑在收入前面",
      "highlightWord": "估值",
      "sub": "Anthropic 9650 亿美元估值，对应 2024 年预计收入约 8 亿美元——市销率超千倍，一旦宏观收紧，估值回调难以避免。",
      "stickers": [
        {
          "label": "9650 亿 估值",
          "tone": "violet"
        },
        {
          "label": "≈ 8 亿 收入",
          "tone": "blue"
        },
        {
          "label": "建立在「未来市值」",
          "tone": "amber"
        },
        {
          "label": "收紧 → 估值回调",
          "tone": "red"
        }
      ],
      "caption": "大数字 · 纪录之下，泡沫信号不容忽视",
      "stickerCount": 4,
      "highlight": true,
      "highlightIndex": 3,
      "accentColor": "#e8503a",
      "showHighlighter": true,
      "showCaption": true
    }
  },
  {
    "key": "theme01_page038",
    "themeKey": "theme01",
    "pageNumber": 38,
    "layout": "THEME01-038",
    "slot": "risk",
    "label": "风险研判",
    "bgClass": "",
    "controls": [
      {
        "key": "cardCount",
        "label": "状态卡数量",
        "type": "number",
        "default": 4,
        "min": 1,
        "max": 4,
        "step": 1,
        "desc": "展示的状态主题卡片数量。",
        "publicKey": "cardCount",
        "publicLabel": "状态卡数量",
        "description": "展示的状态主题卡片数量。"
      },
      {
        "key": "highlight",
        "label": "重点强调",
        "type": "boolean",
        "default": false,
        "desc": "是否高亮强调其中一张状态卡。",
        "publicKey": "highlight",
        "publicLabel": "重点强调",
        "description": "是否高亮强调其中一张状态卡。"
      },
      {
        "key": "highlightIndex",
        "label": "强调第几张",
        "type": "number",
        "default": 0,
        "min": 0,
        "max": 3,
        "step": 1,
        "desc": "被强调的状态卡序号（从 0 开始）。",
        "publicKey": "highlightIndex",
        "publicLabel": "强调第几张",
        "description": "被强调的状态卡序号（从 0 开始）。"
      },
      {
        "key": "showChain",
        "label": "传导链",
        "type": "boolean",
        "default": true,
        "desc": "是否显示每张卡的状态传导链（关闭则仅显示结论）。",
        "publicKey": "showChain",
        "publicLabel": "传导链",
        "description": "是否显示每张卡的状态传导链（关闭则仅显示结论）。"
      },
      {
        "key": "showCaption",
        "label": "装饰文案",
        "type": "boolean",
        "default": true,
        "desc": "是否显示底部说明文案。",
        "publicKey": "showCaption",
        "publicLabel": "装饰文案",
        "description": "是否显示底部说明文案。"
      }
    ],
    "defaultProps": {
      "kicker": "# 风险研判",
      "title": "风险研判 · 四条传导链",
      "en": "Key Risks & Transmission",
      "cn": "纪录之下，多重风险信号不容忽视",
      "risks": [
        {
          "title": "估值泡沫与盈利困境",
          "en": "VALUATION BUBBLE",
          "tone": "red",
          "chain": [
            "高估值泡沫",
            "盈利未验证",
            "烧钱过快",
            "估值回调"
          ],
          "impact": "Anthropic 估值对应收入 P/S 超千倍，宏观收紧时回调难免。"
        },
        {
          "title": "监管压力加大",
          "en": "REGULATION",
          "tone": "amber",
          "chain": [
            "监管收紧",
            "AI 安全法案",
            "合规成本激增"
          ],
          "impact": "欧盟 AI Act、美国各州隐私法相继生效，技术标准尚未统一。"
        },
        {
          "title": "大厂挤压与开源冲击",
          "en": "BIG-TECH & OSS",
          "tone": "violet",
          "chain": [
            "大厂自研",
            "开源逼近闭源",
            "商业壁垒降低"
          ],
          "impact": "Google / Meta / Microsoft 降维打击，Llama / Mistral 削弱 API 收费。"
        },
        {
          "title": "算力供应链卡脖子",
          "en": "COMPUTE SUPPLY",
          "tone": "blue",
          "chain": [
            "GPU 供应紧张",
            "出口管制加码",
            "算力成本高企"
          ],
          "impact": "NVIDIA 供应紧张叠加对华出口管制，中小公司难承受长期烧钱。"
        }
      ],
      "caption": "估值、监管、竞争、算力四条风险链相互叠加 · 退潮后能把技术转化为收入者方能留在牌桌",
      "cardCount": 4,
      "highlight": false,
      "highlightIndex": 0,
      "showChain": true,
      "showCaption": true
    }
  },
  {
    "key": "theme01_page039",
    "themeKey": "theme01",
    "pageNumber": 39,
    "layout": "THEME01-039",
    "slot": "outlook",
    "label": "投资展望",
    "bgClass": "",
    "controls": [
      {
        "key": "itemCount",
        "label": "每栏条目数",
        "type": "number",
        "default": 3,
        "min": 1,
        "max": 3,
        "step": 1,
        "desc": "“看好”与“谨慎”每栏展示的条目数量。",
        "publicKey": "itemCount",
        "publicLabel": "每栏条目数",
        "description": "“看好”与“谨慎”每栏展示的条目数量。"
      },
      {
        "key": "highlightColumn",
        "label": "重点强调",
        "type": "select",
        "default": "none",
        "options": [
          {
            "value": "none",
            "label": "均衡"
          },
          {
            "value": "bullish",
            "label": "看好"
          },
          {
            "value": "cautious",
            "label": "谨慎"
          }
        ],
        "desc": "强调“看好”或“谨慎”某一栏（另一栏淡化）。",
        "publicKey": "highlightColumn",
        "publicLabel": "重点强调",
        "description": "强调“看好”或“谨慎”某一栏（另一栏淡化）。"
      },
      {
        "key": "showTimeline",
        "label": "阶段时间轴",
        "type": "boolean",
        "default": true,
        "desc": "是否显示底部的阶段性策略时间轴。",
        "publicKey": "showTimeline",
        "publicLabel": "阶段时间轴",
        "description": "是否显示底部的阶段性策略时间轴。"
      },
      {
        "key": "showCaption",
        "label": "装饰文案",
        "type": "boolean",
        "default": true,
        "desc": "是否显示底部一句话总结。",
        "publicKey": "showCaption",
        "publicLabel": "装饰文案",
        "description": "是否显示底部一句话总结。"
      }
    ],
    "defaultProps": {
      "kicker": "# 投资展望",
      "title": "投资展望 · 从赌叙事到看兑现",
      "en": "Outlook — Narrative to Delivery",
      "cn": "资本下一阶段的方向与节奏",
      "bullish": {
        "label": "看好方向",
        "en": "BULLISH",
        "color": "#46b083",
        "items": [
          {
            "h": "垂直应用",
            "d": "有清晰商业模式、已验证 PMF（Glean、Harvey）"
          },
          {
            "h": "基础设施中游",
            "d": "数据标注（Scale AI）、向量数据库（Pinecone）等“卖铲子”环节"
          },
          {
            "h": "具身智能",
            "d": "人形机器人（Figure AI）、自动驾驶等长周期硬科技"
          }
        ]
      },
      "cautious": {
        "label": "谨慎对待",
        "en": "CAUTIOUS",
        "color": "#e8503a",
        "items": [
          {
            "h": "高估值无收入纯模型公司",
            "d": "烧钱快、竞争壁垒低、估值泡沫大"
          },
          {
            "h": "跟风“AI 包装”项目",
            "d": "仅在传统业务上加一层 LLM 调用，无核心技术壁垒"
          },
          {
            "h": "缺乏数据护城河的消费应用",
            "d": "用户迁移成本低，易被大厂复制"
          }
        ]
      },
      "timeline": [
        {
          "period": "2025 – 2026",
          "text": "观察头部公司 IPO，若 Anthropic / OpenAI 破发，警惕全行业估值回调"
        },
        {
          "period": "2026 – 2027",
          "text": "优选已达 ARR 1 亿美元以上、续约率 > 120% 的垂直应用标的"
        },
        {
          "period": "2027 后",
          "text": "若 AGI 突破未兑现进入洗牌期，可抄底被低估的技术资产"
        }
      ],
      "caption": "能把技术转化为可持续收入的公司，才能在退潮后留在牌桌上",
      "itemCount": 3,
      "highlightColumn": "none",
      "showTimeline": true,
      "showCaption": true
    }
  },
  {
    "key": "theme01_page040",
    "themeKey": "theme01",
    "pageNumber": 40,
    "layout": "THEME01-040",
    "slot": "roadmap",
    "label": "阶段性策略路线图",
    "bgClass": "",
    "controls": [
      {
        "key": "itemCount",
        "label": "阶段数量",
        "type": "number",
        "default": 3,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "路线图展示的阶段数量。",
        "publicKey": "itemCount",
        "publicLabel": "阶段数量",
        "description": "路线图展示的阶段数量。"
      },
      {
        "key": "highlight",
        "label": "重点强调",
        "type": "boolean",
        "default": true,
        "desc": "是否把其中一个阶段渲染成荧光「当前焦点」款。",
        "publicKey": "highlight",
        "publicLabel": "重点强调",
        "description": "是否把其中一个阶段渲染成荧光「当前焦点」款。"
      },
      {
        "key": "highlightIndex",
        "label": "强调第几段",
        "type": "number",
        "default": 1,
        "min": 0,
        "max": 3,
        "step": 1,
        "desc": "被强调的阶段序号（从 0 开始）。",
        "publicKey": "highlightIndex",
        "publicLabel": "强调第几段",
        "description": "被强调的阶段序号（从 0 开始）。"
      },
      {
        "key": "accentColor",
        "label": "强调色",
        "type": "color",
        "default": "#46b083",
        "options": [
          "#46b083",
          "#5b8def",
          "#e0a23a",
          "#e8503a",
          "#7a5ae0"
        ],
        "desc": "被强调阶段与轨道高亮的颜色。",
        "publicKey": "accentColor",
        "publicLabel": "强调色",
        "description": "被强调阶段与轨道高亮的颜色。"
      },
      {
        "key": "showRail",
        "label": "贯穿轨道",
        "type": "boolean",
        "default": true,
        "desc": "是否显示贯穿各阶段的轨道与站点圆点。",
        "publicKey": "showRail",
        "publicLabel": "贯穿轨道",
        "description": "是否显示贯穿各阶段的轨道与站点圆点。"
      },
      {
        "key": "showVerdict",
        "label": "结论贴纸",
        "type": "boolean",
        "default": true,
        "desc": "是否显示每个阶段底部的动作结论贴纸。",
        "publicKey": "showVerdict",
        "publicLabel": "结论贴纸",
        "description": "是否显示每个阶段底部的动作结论贴纸。"
      },
      {
        "key": "showCaption",
        "label": "装饰文案",
        "type": "boolean",
        "default": true,
        "desc": "底部 */ … /* 说明文案的显示。",
        "publicKey": "showCaption",
        "publicLabel": "装饰文案",
        "description": "底部 */ … /* 说明文案的显示。"
      }
    ],
    "defaultProps": {
      "kicker": "# 投资展望",
      "title": "阶段性策略 · 三步走路线图",
      "en": "Phased Strategy Roadmap",
      "cn": "从观察到优选，再到逆周期布局",
      "phases": [
        {
          "period": "2025 — 2026",
          "step": "STEP 01",
          "heading": "观察 · IPO 体检",
          "points": [
            "持续跟踪头部公司 IPO 表现",
            "若 Anthropic / OpenAI 破发，警惕全行业估值回调"
          ],
          "verdict": "保持观望",
          "color": "#5b8def"
        },
        {
          "period": "2026 — 2027",
          "step": "STEP 02",
          "heading": "优选 · 看收入兑现",
          "points": [
            "关注垂直应用的收入增长曲线",
            "优选 ARR ≥ 1 亿美元、续约率 > 120% 的标的"
          ],
          "verdict": "精选加仓",
          "color": "#46b083"
        },
        {
          "period": "2027 年后",
          "step": "STEP 03",
          "heading": "布局 · 洗牌期抄底",
          "points": [
            "若 AGI 突破未兑现，行业进入洗牌期",
            "逆周期抄底被低估的优质技术资产"
          ],
          "verdict": "逆周期布局",
          "color": "#7a5ae0"
        }
      ],
      "caption": "路线图 · 不同阶段，资本动作各不相同",
      "itemCount": 3,
      "highlight": true,
      "highlightIndex": 1,
      "accentColor": "#46b083",
      "showRail": true,
      "showVerdict": true,
      "showCaption": true
    }
  },
  {
    "key": "theme01_page041",
    "themeKey": "theme01",
    "pageNumber": 41,
    "layout": "THEME01-041",
    "slot": "banner-ipo",
    "label": "满版图片 · IPO 退出窗口",
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
        "key": "imageSlotCount",
        "label": "图片数量",
        "type": "number",
        "default": 1,
        "min": 0,
        "max": 2,
        "step": 1,
        "desc": "满版图片槽数量：0 显示条纹占位、1 单张满版、2 左右双图（各自按比例自适应，不变形）。",
        "publicKey": "imageSlotCount",
        "publicLabel": "图片数量",
        "description": "满版图片槽数量：0 显示条纹占位、1 单张满版、2 左右双图（各自按比例自适应，不变形）。"
      },
      {
        "key": "imageFit",
        "label": "图片填充",
        "type": "select",
        "default": "cover",
        "options": [
          {
            "value": "cover",
            "label": "裁剪填满"
          },
          {
            "value": "contain",
            "label": "完整自适应"
          }
        ],
        "desc": "图片填充方式：裁剪填满铺满版面，完整自适应按原始比例显示。",
        "publicKey": "imageFit",
        "publicLabel": "图片填充",
        "description": "图片填充方式：裁剪填满铺满版面，完整自适应按原始比例显示。"
      },
      {
        "key": "images",
        "label": "图片",
        "type": "images",
        "countKey": "imageSlotCount",
        "desc": "上传满版图片，槽位自适应图片比例不变形。",
        "publicKey": "images",
        "publicLabel": "图片",
        "description": "上传满版图片，槽位自适应图片比例不变形。"
      },
      {
        "key": "plate",
        "label": "信息卡位置",
        "type": "select",
        "default": "bottom-left",
        "options": [
          {
            "value": "bottom-left",
            "label": "左下"
          },
          {
            "value": "bottom-right",
            "label": "右下"
          },
          {
            "value": "center-left",
            "label": "左侧居中"
          }
        ],
        "desc": "浮层玻璃信息卡在画面中的落位。",
        "publicKey": "plate",
        "publicLabel": "信息卡位置",
        "description": "浮层玻璃信息卡在画面中的落位。"
      },
      {
        "key": "statCount",
        "label": "指标数量",
        "type": "number",
        "default": 3,
        "min": 0,
        "max": 3,
        "step": 1,
        "desc": "信息卡底部统计胶囊的数量。",
        "publicKey": "statCount",
        "publicLabel": "指标数量",
        "description": "信息卡底部统计胶囊的数量。"
      },
      {
        "key": "highlight",
        "label": "重点强调",
        "type": "boolean",
        "default": true,
        "desc": "是否把其中一个指标渲染成实色荧光「印章」胶囊。",
        "publicKey": "highlight",
        "publicLabel": "重点强调",
        "description": "是否把其中一个指标渲染成实色荧光「印章」胶囊。"
      },
      {
        "key": "highlightIndex",
        "label": "强调第几个",
        "type": "number",
        "default": 0,
        "min": 0,
        "max": 2,
        "step": 1,
        "desc": "被强调的指标序号（从 0 开始）。",
        "publicKey": "highlightIndex",
        "publicLabel": "强调第几个",
        "description": "被强调的指标序号（从 0 开始）。"
      },
      {
        "key": "showHighlighter",
        "label": "荧光高亮",
        "type": "boolean",
        "default": true,
        "desc": "是否给说明句关键词加荧光底纹。",
        "publicKey": "showHighlighter",
        "publicLabel": "荧光高亮",
        "description": "是否给说明句关键词加荧光底纹。"
      },
      {
        "key": "accentColor",
        "label": "主题色",
        "type": "color",
        "default": "#7a5ae0",
        "options": [
          "#7a5ae0",
          "#5b8def",
          "#46b083",
          "#e0a23a",
          "#e8503a",
          "#c9f24d"
        ],
        "desc": "信息卡强调元素与荧光的颜色。",
        "publicKey": "accentColor",
        "publicLabel": "主题色",
        "description": "信息卡强调元素与荧光的颜色。"
      },
      {
        "key": "showCaption",
        "label": "装饰文案",
        "type": "boolean",
        "default": true,
        "desc": "底部 */ … /* 说明文案的显示。",
        "publicKey": "showCaption",
        "publicLabel": "装饰文案",
        "description": "底部 */ … /* 说明文案的显示。"
      }
    ],
    "defaultProps": {
      "kicker": "2026 · 资本退出",
      "title": "IPO 临近，进入兑现期",
      "en": "The Exit Window Opens",
      "cn": "头部公司排队上市，市场迎来定价时刻",
      "lead": "Anthropic 已于 2026 年 6 月递交 IPO 申请、预计年内上市。一级市场的天价估值，即将在二级市场接受真金白银的检验。",
      "highlightWord": "真金白银",
      "stats": [
        {
          "value": "2026",
          "unit": "",
          "label": "Anthropic 递交 IPO"
        },
        {
          "value": "9650",
          "unit": "亿",
          "label": "最新估值 · 美元"
        },
        {
          "value": ">1000",
          "unit": "×",
          "label": "估值 / 收入倍数"
        }
      ],
      "images": [
        "",
        ""
      ],
      "caption": "满版图片 · 退出窗口开启，估值迎来定价时刻",
      "imageSlotCount": 1,
      "imageFit": "cover",
      "backgroundMode": "unicorn",
      "unicornScene": "tech",
      "plate": "bottom-right",
      "statCount": 3,
      "highlight": true,
      "highlightIndex": 2,
      "showHighlighter": true,
      "accentColor": "#e8503a",
      "showCaption": true
    }
  },
  {
    "key": "theme01_page042",
    "themeKey": "theme01",
    "pageNumber": 42,
    "layout": "THEME01-042",
    "slot": "evil-trio",
    "label": "三个数字 · 资本格局",
    "bgClass": "",
    "controls": [
      {
        "key": "cardCount",
        "label": "卡片数量",
        "type": "number",
        "default": 3,
        "min": 2,
        "max": 3,
        "step": 1,
        "desc": "并排展示的数字卡片数量。",
        "publicKey": "cardCount",
        "publicLabel": "卡片数量",
        "description": "并排展示的数字卡片数量。"
      },
      {
        "key": "highlight",
        "label": "重点强调",
        "type": "boolean",
        "default": true,
        "desc": "是否把其中一张卡片抬升为发光强调卡。",
        "publicKey": "highlight",
        "publicLabel": "重点强调",
        "description": "是否把其中一张卡片抬升为发光强调卡。"
      },
      {
        "key": "highlightIndex",
        "label": "强调第几张",
        "type": "number",
        "default": 2,
        "min": 0,
        "max": 2,
        "step": 1,
        "desc": "被强调的卡片序号（从 0 开始）。",
        "publicKey": "highlightIndex",
        "publicLabel": "强调第几张",
        "description": "被强调的卡片序号（从 0 开始）。"
      },
      {
        "key": "showDots",
        "label": "点阵底纹",
        "type": "boolean",
        "default": false,
        "desc": "evilcharts 标志性的点阵网格背景（默认关闭，净色图表）。",
        "publicKey": "showDots",
        "publicLabel": "点阵底纹",
        "description": "evilcharts 标志性的点阵网格背景（默认关闭，净色图表）。"
      },
      {
        "key": "showGrid",
        "label": "参考网格",
        "type": "boolean",
        "default": true,
        "desc": "绘图区参考线 / 刻度的显示。",
        "publicKey": "showGrid",
        "publicLabel": "参考网格",
        "description": "绘图区参考线 / 刻度的显示。"
      },
      {
        "key": "showTrend",
        "label": "趋势角标",
        "type": "boolean",
        "default": true,
        "desc": "每张卡片底部趋势胶囊角标的显示。",
        "publicKey": "showTrend",
        "publicLabel": "趋势角标",
        "description": "每张卡片底部趋势胶囊角标的显示。"
      },
      {
        "key": "palette",
        "label": "三卡配色",
        "type": "palette",
        "default": [
          "#5b8def",
          "#46b083",
          "#7a5ae0"
        ],
        "options": [
          [
            "#5b8def",
            "#46b083",
            "#7a5ae0"
          ],
          [
            "#7a5ae0",
            "#5b8def",
            "#46b083"
          ],
          [
            "#e8503a",
            "#e0a23a",
            "#46b083"
          ],
          [
            "#5b8def",
            "#46b083",
            "#e0a23a"
          ]
        ],
        "desc": "三张卡片的主题色（依次对应）。",
        "publicKey": "palette",
        "publicLabel": "三卡配色",
        "description": "三张卡片的主题色（依次对应）。"
      },
      {
        "key": "showCaption",
        "label": "装饰文案",
        "type": "boolean",
        "default": true,
        "desc": "底部 */ … /* 说明文案的显示。",
        "publicKey": "showCaption",
        "publicLabel": "装饰文案",
        "description": "底部 */ … /* 说明文案的显示。"
      }
    ],
    "defaultProps": {
      "kicker": "# 横向透视 · 资本格局",
      "tone": "blue",
      "title": "三个数字，看清资本格局",
      "en": "Three Numbers, One Map of Capital",
      "cn": "行业 · 赛道 · 地理 —— 资本同时向头部收口",
      "cards": [
        {
          "tag": "行业层面",
          "tagTone": "blue",
          "label": "AI 占全美风险投资",
          "en": "Share of All US VC",
          "value": 33,
          "unit": "%",
          "chartType": "bars",
          "trend": "三分天下有其一",
          "bars": [
            {
              "l": "AI",
              "v": 33,
              "hot": true
            },
            {
              "l": "医药",
              "v": 14
            },
            {
              "l": "金融",
              "v": 11
            },
            {
              "l": "软件",
              "v": 10
            },
            {
              "l": "能源",
              "v": 8
            }
          ]
        },
        {
          "tag": "赛道层面",
          "tagTone": "green",
          "label": "大模型独占 AI 融资",
          "en": "Foundation-Model Layer",
          "value": 43,
          "unit": "%",
          "chartType": "radial",
          "trend": "模型层最吸金",
          "restLabel": "其余赛道",
          "restValue": 57
        },
        {
          "tag": "地理层面",
          "tagTone": "violet",
          "label": "资金虹吸旧金山湾区",
          "en": "Siphoned to the Bay Area",
          "value": 64,
          "unit": "%",
          "chartType": "area",
          "trend": "虹吸效应持续强化",
          "points": [
            {
              "x": "Q1",
              "v": 52
            },
            {
              "x": "Q2",
              "v": 56
            },
            {
              "x": "Q3",
              "v": 59
            },
            {
              "x": "Q4",
              "v": 64
            }
          ]
        }
      ],
      "caption": "三图 · evilcharts 风格 · 行业 / 赛道 / 地理三处同时收口",
      "cardCount": 3,
      "highlight": true,
      "highlightIndex": 2,
      "showDots": false,
      "showGrid": true,
      "showTrend": true,
      "palette": [
        "#5b8def",
        "#46b083",
        "#7a5ae0"
      ],
      "showCaption": true
    }
  },
  {
    "key": "theme01_page043",
    "themeKey": "theme01",
    "pageNumber": 43,
    "layout": "THEME01-043",
    "slot": "split-diptych",
    "label": "满版对比 · 双联画面",
    "bgClass": "",
    "controls": [
      {
        "key": "imageSlotCount",
        "label": "图片槽数量",
        "type": "number",
        "default": 2,
        "min": 0,
        "max": 2,
        "step": 1,
        "desc": "0 = 双占位 · 1 = 左图 + 右占位 · 2 = 双图。两侧均按上传图比例自适应。",
        "publicKey": "imageSlotCount",
        "publicLabel": "图片槽数量",
        "description": "0 = 双占位 · 1 = 左图 + 右占位 · 2 = 双图。两侧均按上传图比例自适应。"
      },
      {
        "key": "imageFit",
        "label": "图片裁切",
        "type": "select",
        "default": "cover",
        "options": [
          {
            "value": "cover",
            "label": "裁剪填满"
          },
          {
            "value": "contain",
            "label": "完整自适应"
          }
        ],
        "desc": "上传图按裁剪填满或保留完整画面。",
        "publicKey": "imageFit",
        "publicLabel": "图片裁切",
        "description": "上传图按裁剪填满或保留完整画面。"
      },
      {
        "key": "images",
        "label": "上传图片",
        "type": "images",
        "countKey": "imageSlotCount",
        "desc": "左 / 右两侧的画面。",
        "publicKey": "images",
        "publicLabel": "上传图片",
        "description": "左 / 右两侧的画面。"
      },
      {
        "key": "showTags",
        "label": "角标贴纸",
        "type": "boolean",
        "default": true,
        "desc": "两侧角标贴纸的显示。",
        "publicKey": "showTags",
        "publicLabel": "角标贴纸",
        "description": "两侧角标贴纸的显示。"
      },
      {
        "key": "showPlate",
        "label": "中央断言卡",
        "type": "boolean",
        "default": true,
        "desc": "横跨接缝的中央玻璃断言卡显示。",
        "publicKey": "showPlate",
        "publicLabel": "中央断言卡",
        "description": "横跨接缝的中央玻璃断言卡显示。"
      },
      {
        "key": "showStats",
        "label": "对比数字",
        "type": "boolean",
        "default": true,
        "desc": "断言卡上的左右对比数字显示。",
        "publicKey": "showStats",
        "publicLabel": "对比数字",
        "description": "断言卡上的左右对比数字显示。"
      },
      {
        "key": "highlightSide",
        "label": "点亮一侧",
        "type": "select",
        "default": "right",
        "options": [
          {
            "value": "left",
            "label": "左侧"
          },
          {
            "value": "right",
            "label": "右侧"
          },
          {
            "value": "none",
            "label": "不强调"
          }
        ],
        "desc": "哪一侧的对比数字渲染成荧光强调。",
        "publicKey": "highlightSide",
        "publicLabel": "点亮一侧",
        "description": "哪一侧的对比数字渲染成荧光强调。"
      },
      {
        "key": "accentColor",
        "label": "强调色",
        "type": "color",
        "default": "#e8503a",
        "options": [
          "#e8503a",
          "#5b8def",
          "#46b083",
          "#e0a23a",
          "#7a5ae0",
          "#c9f24d"
        ],
        "desc": "中央卡 kicker 与荧光数字的颜色。",
        "publicKey": "accentColor",
        "publicLabel": "强调色",
        "description": "中央卡 kicker 与荧光数字的颜色。"
      },
      {
        "key": "showCaption",
        "label": "装饰文案",
        "type": "boolean",
        "default": true,
        "desc": "底部 */ … /* 说明文案的显示。",
        "publicKey": "showCaption",
        "publicLabel": "装饰文案",
        "description": "底部 */ … /* 说明文案的显示。"
      }
    ],
    "defaultProps": {
      "kicker": "风险与展望",
      "title": "一半繁荣，一半审视",
      "en": "Boom on One Side, Scrutiny on the Other",
      "left": {
        "tag": "叙事估值",
        "en": "THE NARRATIVE",
        "stat": "1000",
        "unit": "×",
        "statLabel": "头部估值 / 收入倍数",
        "placeholder": "繁荣现场 · 发布会 / 融资",
        "color": "#e0a23a"
      },
      "right": {
        "tag": "真实兑现",
        "en": "THE DELIVERY",
        "stat": "< 5",
        "unit": "%",
        "statLabel": "实现收入的公司占比",
        "placeholder": "审视时刻 · 财报 / 算力账单",
        "color": "#5b8def"
      },
      "verdict": "资本的下一阶段，从「赌叙事」转向「看兑现」。",
      "caption": "满版双联 · 估值的天平，正在向真金白银倾斜",
      "images": [
        "",
        ""
      ],
      "imageSlotCount": 2,
      "imageFit": "cover",
      "showTags": true,
      "showPlate": true,
      "showStats": true,
      "highlightSide": "right",
      "accentColor": "#e8503a",
      "showCaption": true
    }
  },
  {
    "key": "theme01_page044",
    "themeKey": "theme01",
    "pageNumber": 44,
    "layout": "THEME01-044",
    "slot": "monthly",
    "label": "月度节奏",
    "bgClass": "",
    "controls": [
      {
        "key": "chartType",
        "label": "图表类型",
        "type": "select",
        "default": "heatmap",
        "options": [
          {
            "value": "heatmap",
            "label": "热力"
          },
          {
            "value": "bar",
            "label": "柱状"
          },
          {
            "value": "area",
            "label": "面积"
          }
        ],
        "desc": "逐月数据的呈现形式：热力色块 / 柱状 / 面积折线。",
        "publicKey": "chartType",
        "publicLabel": "图表类型",
        "description": "逐月数据的呈现形式：热力色块 / 柱状 / 面积折线。"
      },
      {
        "key": "highlight",
        "label": "重点强调",
        "type": "boolean",
        "default": true,
        "desc": "是否高亮强调某一个月份（如峰值）。",
        "publicKey": "highlight",
        "publicLabel": "重点强调",
        "description": "是否高亮强调某一个月份（如峰值）。"
      },
      {
        "key": "highlightIndex",
        "label": "强调第几个",
        "type": "number",
        "default": 7,
        "min": 0,
        "max": 11,
        "step": 1,
        "desc": "被强调的月份序号（0 = 1 月，11 = 12 月）。",
        "publicKey": "highlightIndex",
        "publicLabel": "强调第几个",
        "description": "被强调的月份序号（0 = 1 月，11 = 12 月）。"
      },
      {
        "key": "showStats",
        "label": "数据摘要面板",
        "type": "boolean",
        "default": true,
        "desc": "是否显示右侧峰值 / 低谷 / 月均摘要卡。",
        "publicKey": "showStats",
        "publicLabel": "数据摘要面板",
        "description": "是否显示右侧峰值 / 低谷 / 月均摘要卡。"
      },
      {
        "key": "showCaption",
        "label": "装饰文案",
        "type": "boolean",
        "default": true,
        "desc": "是否显示底部说明文案。",
        "publicKey": "showCaption",
        "publicLabel": "装饰文案",
        "description": "是否显示底部说明文案。"
      },
      {
        "key": "evil",
        "label": "evilcharts 模式",
        "type": "boolean",
        "default": false,
        "desc": "切换为 evilcharts 风格：点阵底纹 + 柱/格面 45° 斜纹 + 霓虹辉光（面积图为点阵底 + 发光折线）。",
        "publicKey": "evil",
        "publicLabel": "evilcharts 模式",
        "description": "切换为 evilcharts 风格：点阵底纹 + 柱/格面 45° 斜纹 + 霓虹辉光（面积图为点阵底 + 发光折线）。"
      }
    ],
    "defaultProps": {
      "kicker": "# 市场全景",
      "title": "月度节奏 · 逐月融资强度",
      "en": "Vertical Trend — Monthly Cadence",
      "months": [
        {
          "label": "1 月",
          "value": 45
        },
        {
          "label": "2 月",
          "value": 58
        },
        {
          "label": "3 月",
          "value": 59
        },
        {
          "label": "4 月",
          "value": 86
        },
        {
          "label": "5 月",
          "value": 105
        },
        {
          "label": "6 月",
          "value": 93
        },
        {
          "label": "7 月",
          "value": 92
        },
        {
          "label": "8 月",
          "value": 118
        },
        {
          "label": "9 月",
          "value": 108
        },
        {
          "label": "10 月",
          "value": 73
        },
        {
          "label": "11 月",
          "value": 81
        },
        {
          "label": "12 月",
          "value": 52
        }
      ],
      "unit": "亿",
      "accentColor": "#5b8def",
      "stats": {
        "en": "Monthly Distribution",
        "rows": [
          {
            "k": "峰值",
            "v": "118 亿",
            "note": "8 月"
          },
          {
            "k": "低谷",
            "v": "45 亿",
            "note": "1 月"
          },
          {
            "k": "月均",
            "v": "≈ 80.8 亿",
            "note": "全年 12 个月"
          }
        ],
        "tag": "5 月、8 月双峰"
      },
      "caption": "5 月、8 月形成两次峰值 · 与多家头部公司集中关账的节奏吻合",
      "chartType": "heatmap",
      "highlight": true,
      "highlightIndex": 7,
      "showStats": true,
      "showCaption": true,
      "evil": false
    }
  },
  {
    "key": "theme01_page045",
    "themeKey": "theme01",
    "pageNumber": 45,
    "layout": "THEME01-045",
    "slot": "case-xai",
    "label": "典型案例 · xAI",
    "bgClass": "",
    "controls": [
      {
        "key": "statCount",
        "label": "指标卡数量",
        "type": "number",
        "default": 3,
        "min": 0,
        "max": 3,
        "step": 1,
        "desc": "顶部关键指标卡的数量（0 时隐藏整行）。",
        "publicKey": "statCount",
        "publicLabel": "指标卡数量",
        "description": "顶部关键指标卡的数量（0 时隐藏整行）。"
      },
      {
        "key": "pointCount",
        "label": "要点卡数量",
        "type": "number",
        "default": 3,
        "min": 1,
        "max": 3,
        "step": 1,
        "desc": "核心优势要点卡的数量。",
        "publicKey": "pointCount",
        "publicLabel": "要点卡数量",
        "description": "核心优势要点卡的数量。"
      },
      {
        "key": "highlight",
        "label": "重点强调",
        "type": "boolean",
        "default": true,
        "desc": "是否高亮强调其中一个要点。",
        "publicKey": "highlight",
        "publicLabel": "重点强调",
        "description": "是否高亮强调其中一个要点。"
      },
      {
        "key": "highlightIndex",
        "label": "强调第几项",
        "type": "number",
        "default": 0,
        "min": 0,
        "max": 2,
        "step": 1,
        "desc": "被强调的要点序号（从 0 开始）。",
        "publicKey": "highlightIndex",
        "publicLabel": "强调第几项",
        "description": "被强调的要点序号（从 0 开始）。"
      },
      {
        "key": "imageSlotCount",
        "label": "图片数量",
        "type": "number",
        "default": 1,
        "min": 0,
        "max": 3,
        "step": 1,
        "desc": "右侧图片槽数量（0 时文字占满整页，布局自动适配）。",
        "publicKey": "imageSlotCount",
        "publicLabel": "图片数量",
        "description": "右侧图片槽数量（0 时文字占满整页，布局自动适配）。"
      },
      {
        "key": "imageFit",
        "label": "图片填充",
        "type": "select",
        "default": "cover",
        "options": [
          {
            "value": "cover",
            "label": "裁剪填满"
          },
          {
            "value": "contain",
            "label": "完整自适应"
          }
        ],
        "desc": "图片填充方式：裁剪填满构图统一，完整自适应按原始比例显示。",
        "publicKey": "imageFit",
        "publicLabel": "图片填充",
        "description": "图片填充方式：裁剪填满构图统一，完整自适应按原始比例显示。"
      },
      {
        "key": "imageLayout",
        "label": "图片版式",
        "type": "select",
        "default": "normal",
        "options": [
          {
            "value": "normal",
            "label": "常规排布"
          },
          {
            "value": "collage",
            "label": "叠放拼贴"
          }
        ],
        "desc": "常规：整齐排布；叠放拼贴：图片倾斜叠压、白边浮起的拼贴效果。",
        "publicKey": "imageLayout",
        "publicLabel": "图片版式",
        "description": "常规：整齐排布；叠放拼贴：图片倾斜叠压、白边浮起的拼贴效果。"
      },
      {
        "key": "images",
        "label": "图片",
        "type": "images",
        "countKey": "imageSlotCount",
        "desc": "上传图片（数量由「图片数量」控制），槽位会自适应图片比例。",
        "publicKey": "images",
        "publicLabel": "图片",
        "description": "上传图片（数量由「图片数量」控制），槽位会自适应图片比例。"
      },
      {
        "key": "showCaption",
        "label": "装饰文案",
        "type": "boolean",
        "default": true,
        "desc": "是否显示底部说明文案。",
        "publicKey": "showCaption",
        "publicLabel": "装饰文案",
        "description": "是否显示底部说明文案。"
      }
    ],
    "defaultProps": {
      "kicker": "# 典型案例",
      "tone": "blue",
      "accentColor": "#5b8def",
      "title": "xAI · 马斯克的第三次创业",
      "en": "Musk's Third Venture",
      "intro": "由埃隆·马斯克于 2023 年创立的 xAI，在 2024 年 11 月完成 50 亿美元融资，估值达 500 亿美元。体量虽不及 OpenAI / Anthropic，但增速惊人——从成立到跻身头部梯队仅用 18 个月。",
      "stats": [
        {
          "value": "50",
          "unit": "亿美元",
          "label": "单轮融资"
        },
        {
          "value": "500",
          "unit": "亿美元",
          "label": "投后估值"
        },
        {
          "value": "18",
          "unit": "个月",
          "label": "跻身头部"
        }
      ],
      "points": [
        {
          "h": "X 平台数据",
          "d": "背靠 X（原 Twitter），拥有海量实时社交数据"
        },
        {
          "h": "特斯拉协同",
          "d": "与自动驾驶团队协同，多模态感知积累深厚"
        },
        {
          "h": "Grok 差异化",
          "d": "主打「幽默、实时、无审查」，定位鲜明"
        }
      ],
      "images": [
        "",
        "",
        ""
      ],
      "caption": "体量不及头部，但增速惊人 · 差异化定位形成独特护城河",
      "statCount": 3,
      "pointCount": 3,
      "highlight": true,
      "highlightIndex": 0,
      "imageSlotCount": 1,
      "imageFit": "cover",
      "imageLayout": "normal",
      "showCaption": true
    }
  },
  {
    "key": "theme01_page046",
    "themeKey": "theme01",
    "pageNumber": 46,
    "layout": "THEME01-046",
    "slot": "case-coreweave",
    "label": "典型案例 · CoreWeave",
    "bgClass": "",
    "controls": [
      {
        "key": "statCount",
        "label": "指标卡数量",
        "type": "number",
        "default": 3,
        "min": 0,
        "max": 3,
        "step": 1,
        "desc": "顶部关键指标卡的数量（0 时隐藏整行）。",
        "publicKey": "statCount",
        "publicLabel": "指标卡数量",
        "description": "顶部关键指标卡的数量（0 时隐藏整行）。"
      },
      {
        "key": "pointCount",
        "label": "要点卡数量",
        "type": "number",
        "default": 3,
        "min": 1,
        "max": 3,
        "step": 1,
        "desc": "核心优势要点卡的数量。",
        "publicKey": "pointCount",
        "publicLabel": "要点卡数量",
        "description": "核心优势要点卡的数量。"
      },
      {
        "key": "highlight",
        "label": "重点强调",
        "type": "boolean",
        "default": true,
        "desc": "是否高亮强调其中一个要点。",
        "publicKey": "highlight",
        "publicLabel": "重点强调",
        "description": "是否高亮强调其中一个要点。"
      },
      {
        "key": "highlightIndex",
        "label": "强调第几项",
        "type": "number",
        "default": 0,
        "min": 0,
        "max": 2,
        "step": 1,
        "desc": "被强调的要点序号（从 0 开始）。",
        "publicKey": "highlightIndex",
        "publicLabel": "强调第几项",
        "description": "被强调的要点序号（从 0 开始）。"
      },
      {
        "key": "imageSlotCount",
        "label": "图片数量",
        "type": "number",
        "default": 1,
        "min": 0,
        "max": 3,
        "step": 1,
        "desc": "右侧图片槽数量（0 时文字占满整页，布局自动适配）。",
        "publicKey": "imageSlotCount",
        "publicLabel": "图片数量",
        "description": "右侧图片槽数量（0 时文字占满整页，布局自动适配）。"
      },
      {
        "key": "imageFit",
        "label": "图片填充",
        "type": "select",
        "default": "cover",
        "options": [
          {
            "value": "cover",
            "label": "裁剪填满"
          },
          {
            "value": "contain",
            "label": "完整自适应"
          }
        ],
        "desc": "图片填充方式：裁剪填满构图统一，完整自适应按原始比例显示。",
        "publicKey": "imageFit",
        "publicLabel": "图片填充",
        "description": "图片填充方式：裁剪填满构图统一，完整自适应按原始比例显示。"
      },
      {
        "key": "imageLayout",
        "label": "图片版式",
        "type": "select",
        "default": "normal",
        "options": [
          {
            "value": "normal",
            "label": "常规排布"
          },
          {
            "value": "collage",
            "label": "叠放拼贴"
          }
        ],
        "desc": "常规：整齐排布；叠放拼贴：图片倾斜叠压、白边浮起的拼贴效果。",
        "publicKey": "imageLayout",
        "publicLabel": "图片版式",
        "description": "常规：整齐排布；叠放拼贴：图片倾斜叠压、白边浮起的拼贴效果。"
      },
      {
        "key": "images",
        "label": "图片",
        "type": "images",
        "countKey": "imageSlotCount",
        "desc": "上传图片（数量由「图片数量」控制），槽位会自适应图片比例。",
        "publicKey": "images",
        "publicLabel": "图片",
        "description": "上传图片（数量由「图片数量」控制），槽位会自适应图片比例。"
      },
      {
        "key": "showCaption",
        "label": "装饰文案",
        "type": "boolean",
        "default": true,
        "desc": "是否显示底部说明文案。",
        "publicKey": "showCaption",
        "publicLabel": "装饰文案",
        "description": "是否显示底部说明文案。"
      }
    ],
    "defaultProps": {
      "kicker": "# 典型案例",
      "tone": "green",
      "accentColor": "#46b083",
      "title": "CoreWeave · 卖铲子的人也赚翻了",
      "en": "Selling Shovels in the Gold Rush",
      "intro": "原本是一家加密货币挖矿公司，2023 年转型为 AI 算力云服务商。2024 年完成 110 亿美元融资，估值超 190 亿美元——印证了「淘金热中卖铲子」的商业逻辑。",
      "stats": [
        {
          "value": "110",
          "unit": "亿美元",
          "label": "年度融资"
        },
        {
          "value": "190",
          "unit": "亿美元",
          "label": "投后估值"
        },
        {
          "value": "2023",
          "unit": "转型",
          "label": "挖矿→算力云"
        }
      ],
      "points": [
        {
          "h": "NVIDIA 长约",
          "d": "签订长期供应协议，锁定数万张 H100/H200 GPU"
        },
        {
          "h": "稀缺算力",
          "d": "提前锁定 GPU 资源，反成稀缺标的"
        },
        {
          "h": "核心供应商",
          "d": "OpenAI、Stability AI 等公司的算力供应方"
        }
      ],
      "images": [
        "",
        "",
        ""
      ],
      "caption": "当所有模型公司都在抢 GPU，提前锁定算力者反成赢家",
      "statCount": 3,
      "pointCount": 3,
      "highlight": true,
      "highlightIndex": 0,
      "imageSlotCount": 1,
      "imageFit": "cover",
      "imageLayout": "normal",
      "showCaption": true
    }
  },
  {
    "key": "theme01_page047",
    "themeKey": "theme01",
    "pageNumber": 47,
    "layout": "THEME01-047",
    "slot": "quote",
    "label": "金句 · 一句话总结",
    "bgClass": "",
    "controls": [
      {
        "key": "accentColor",
        "label": "荧光色",
        "type": "color",
        "default": "#c9f24d",
        "options": [
          "#c9f24d",
          "#46b083",
          "#5b8def",
          "#e0a23a",
          "#e8503a",
          "#7a5ae0"
        ],
        "desc": "荧光贴纸与高亮的颜色（参考图的荧光高亮）。",
        "publicKey": "accentColor",
        "publicLabel": "荧光色",
        "description": "荧光贴纸与高亮的颜色（参考图的荧光高亮）。"
      },
      {
        "key": "noteCount",
        "label": "便签贴纸",
        "type": "number",
        "default": 2,
        "min": 0,
        "max": 3,
        "step": 1,
        "desc": "右上角倾斜便签贴纸的数量（装饰性回声标签）。",
        "publicKey": "noteCount",
        "publicLabel": "便签贴纸",
        "description": "右上角倾斜便签贴纸的数量（装饰性回声标签）。"
      },
      {
        "key": "showHighlighter",
        "label": "关键词贴纸",
        "type": "boolean",
        "default": true,
        "desc": "是否把金句中的对立关键词渲染成「黑色印章 + 荧光」贴纸。",
        "publicKey": "showHighlighter",
        "publicLabel": "关键词贴纸",
        "description": "是否把金句中的对立关键词渲染成「黑色印章 + 荧光」贴纸。"
      },
      {
        "key": "showQuoteMark",
        "label": "巨型引号",
        "type": "boolean",
        "default": true,
        "desc": "是否显示背景的超大引号。",
        "publicKey": "showQuoteMark",
        "publicLabel": "巨型引号",
        "description": "是否显示背景的超大引号。"
      },
      {
        "key": "showAttribution",
        "label": "署名",
        "type": "boolean",
        "default": true,
        "desc": "是否显示出处 / 署名。",
        "publicKey": "showAttribution",
        "publicLabel": "署名",
        "description": "是否显示出处 / 署名。"
      },
      {
        "key": "align",
        "label": "对齐方式",
        "type": "select",
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
        "desc": "整页内容的对齐方式。",
        "publicKey": "align",
        "publicLabel": "对齐方式",
        "description": "整页内容的对齐方式。"
      },
      {
        "key": "showCaption",
        "label": "装饰文案",
        "type": "boolean",
        "default": true,
        "desc": "底部 */ … /* 说明文案的显示。",
        "publicKey": "showCaption",
        "publicLabel": "装饰文案",
        "description": "底部 */ … /* 说明文案的显示。"
      }
    ],
    "defaultProps": {
      "kicker": "一句话总结",
      "quote": "AI 融资盛宴仍在继续，但音乐的节奏正在变化——资本的下一阶段，将从「赌叙事」转向「看兑现」。",
      "contrastWord": "「赌叙事」",
      "highlightWord": "「看兑现」",
      "attribution": "本报告 · 结论",
      "caption": "金句 · 一句话记住核心判断",
      "notes": [
        {
          "label": "叙事驱动",
          "tone": "muted"
        },
        {
          "label": "兑现驱动",
          "tone": "accent"
        }
      ],
      "accentColor": "#c9f24d",
      "noteCount": 2,
      "showQuoteMark": true,
      "showHighlighter": true,
      "showAttribution": true,
      "align": "left",
      "showCaption": true
    }
  },
  {
    "key": "theme01_page048",
    "themeKey": "theme01",
    "pageNumber": 48,
    "layout": "THEME01-048",
    "slot": "global-split",
    "label": "全球版图 · 资金分布",
    "bgClass": "",
    "controls": [
      {
        "key": "itemCount",
        "label": "地区数量",
        "type": "number",
        "default": 4,
        "min": 2,
        "max": 5,
        "step": 1,
        "desc": "参与堆叠与卡片展示的地区数量。",
        "publicKey": "itemCount",
        "publicLabel": "地区数量",
        "description": "参与堆叠与卡片展示的地区数量。"
      },
      {
        "key": "highlight",
        "label": "重点强调",
        "type": "boolean",
        "default": true,
        "desc": "是否高亮强调其中一个地区（描边卡片 + 加粗段）。",
        "publicKey": "highlight",
        "publicLabel": "重点强调",
        "description": "是否高亮强调其中一个地区（描边卡片 + 加粗段）。"
      },
      {
        "key": "highlightIndex",
        "label": "强调第几个",
        "type": "number",
        "default": 0,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "被强调的地区序号（从 0 开始）。",
        "publicKey": "highlightIndex",
        "publicLabel": "强调第几个",
        "description": "被强调的地区序号（从 0 开始）。"
      },
      {
        "key": "showBar",
        "label": "堆叠条",
        "type": "boolean",
        "default": true,
        "desc": "顶部 100% 堆叠占比条的显示。",
        "publicKey": "showBar",
        "publicLabel": "堆叠条",
        "description": "顶部 100% 堆叠占比条的显示。"
      },
      {
        "key": "showAmounts",
        "label": "数值数字",
        "type": "boolean",
        "default": true,
        "desc": "卡片上数值数字的显示（关闭则只看占比）。",
        "publicKey": "showValueLabels",
        "publicLabel": "数值数字",
        "description": "卡片上数值数字的显示（关闭则只看占比）。"
      },
      {
        "key": "showTotal",
        "label": "总额徽标",
        "type": "boolean",
        "default": true,
        "desc": "右上角全球总额胶囊徽标的显示。",
        "publicKey": "showTotal",
        "publicLabel": "总额徽标",
        "description": "右上角全球总额胶囊徽标的显示。"
      },
      {
        "key": "accentColor",
        "label": "主题色",
        "type": "color",
        "default": "#5b8def",
        "options": [
          "#5b8def",
          "#e8503a",
          "#46b083",
          "#e0a23a",
          "#7a5ae0"
        ],
        "desc": "标题荧光与强调地区的颜色。",
        "publicKey": "accentColor",
        "publicLabel": "主题色",
        "description": "标题荧光与强调地区的颜色。"
      },
      {
        "key": "showCaption",
        "label": "装饰文案",
        "type": "boolean",
        "default": true,
        "desc": "底部 */ … /* 说明文案的显示。",
        "publicKey": "showCaption",
        "publicLabel": "装饰文案",
        "description": "底部 */ … /* 说明文案的显示。"
      }
    ],
    "defaultProps": {
      "kicker": "市场全景 · 全球版图",
      "tone": "blue",
      "title": "资金版图：一极独大",
      "en": "Global Funding Map",
      "cn": "美国虹吸全球过半 AI 资本",
      "totalLabel": "全球 AI 融资总额",
      "totalValue": "970",
      "totalUnit": "亿美元",
      "regions": [
        {
          "name": "美国",
          "en": "United States",
          "share": 64,
          "amount": "620",
          "tone": "blue",
          "note": "湾区为核心，模型与算力双轮驱动"
        },
        {
          "name": "中国",
          "en": "China",
          "share": 22,
          "amount": "213",
          "tone": "red",
          "note": "大模型与应用并进，政策与算力受限"
        },
        {
          "name": "欧洲",
          "en": "Europe",
          "share": 9,
          "amount": "87",
          "tone": "amber",
          "note": "Mistral 领衔，监管先行"
        },
        {
          "name": "其他",
          "en": "Rest of World",
          "share": 5,
          "amount": "50",
          "tone": "green",
          "note": "中东主权基金加速入场"
        }
      ],
      "caption": "全球版图 · 美国独占六成以上，资本高度集中于单一枢纽",
      "itemCount": 4,
      "highlight": true,
      "highlightIndex": 0,
      "showBar": true,
      "showAmounts": true,
      "showTotal": true,
      "accentColor": "#5b8def",
      "showCaption": true
    }
  },
  {
    "key": "theme01_page049",
    "themeKey": "theme01",
    "pageNumber": 49,
    "layout": "THEME01-049",
    "slot": "investors",
    "label": "活跃投资机构榜",
    "bgClass": "",
    "controls": [
      {
        "key": "itemCount",
        "label": "机构数量",
        "type": "number",
        "default": 6,
        "min": 2,
        "max": 6,
        "step": 1,
        "desc": "榜单中展示的机构卡片数量。",
        "publicKey": "itemCount",
        "publicLabel": "机构数量",
        "description": "榜单中展示的机构卡片数量。"
      },
      {
        "key": "highlight",
        "label": "重点强调",
        "type": "boolean",
        "default": true,
        "desc": "是否高亮强调榜首/某家机构（描边 + 实色徽章）。",
        "publicKey": "highlight",
        "publicLabel": "重点强调",
        "description": "是否高亮强调榜首/某家机构（描边 + 实色徽章）。"
      },
      {
        "key": "highlightIndex",
        "label": "强调第几家",
        "type": "number",
        "default": 0,
        "min": 0,
        "max": 5,
        "step": 1,
        "desc": "被强调的机构序号（从 0 开始）。",
        "publicKey": "highlightIndex",
        "publicLabel": "强调第几家",
        "description": "被强调的机构序号（从 0 开始）。"
      },
      {
        "key": "showBars",
        "label": "活跃度条",
        "type": "boolean",
        "default": true,
        "desc": "出手次数比例微条的显示。",
        "publicKey": "showBars",
        "publicLabel": "活跃度条",
        "description": "出手次数比例微条的显示。"
      },
      {
        "key": "showDeals",
        "label": "代表项目",
        "type": "boolean",
        "default": true,
        "desc": "代表投资项目贴纸标签的显示。",
        "publicKey": "showExamples",
        "publicLabel": "代表项目",
        "description": "代表投资项目贴纸标签的显示。"
      },
      {
        "key": "accentColor",
        "label": "主题色",
        "type": "color",
        "default": "#7a5ae0",
        "options": [
          "#7a5ae0",
          "#5b8def",
          "#46b083",
          "#e0a23a",
          "#e8503a"
        ],
        "desc": "标题荧光与强调机构卡片的颜色。",
        "publicKey": "accentColor",
        "publicLabel": "主题色",
        "description": "标题荧光与强调机构卡片的颜色。"
      },
      {
        "key": "showCaption",
        "label": "装饰文案",
        "type": "boolean",
        "default": true,
        "desc": "底部 */ … /* 说明文案的显示。",
        "publicKey": "showCaption",
        "publicLabel": "装饰文案",
        "description": "底部 */ … /* 说明文案的显示。"
      }
    ],
    "defaultProps": {
      "kicker": "横向透视 · 资金来源",
      "tone": "violet",
      "title": "谁在写下支票",
      "en": "Who Writes the Checks",
      "cn": "最活跃的一线机构与主权资本",
      "metricLabel": "年内出手",
      "metricUnit": "笔",
      "investors": [
        {
          "name": "a16z",
          "en": "Andreessen Horowitz",
          "tier": "风投",
          "metric": 28,
          "deals": [
            "OpenAI",
            "Mistral",
            "xAI"
          ],
          "tone": "violet"
        },
        {
          "name": "Sequoia",
          "en": "Sequoia Capital",
          "tier": "风投",
          "metric": 24,
          "deals": [
            "OpenAI",
            "Glean"
          ],
          "tone": "blue"
        },
        {
          "name": "Thrive",
          "en": "Thrive Capital",
          "tier": "成长基金",
          "metric": 17,
          "deals": [
            "OpenAI",
            "Anthropic"
          ],
          "tone": "green"
        },
        {
          "name": "Microsoft",
          "en": "Strategic / CVC",
          "tier": "战略投资",
          "metric": 14,
          "deals": [
            "OpenAI",
            "CoreWeave"
          ],
          "tone": "amber"
        },
        {
          "name": "MGX",
          "en": "Abu Dhabi Fund",
          "tier": "主权基金",
          "metric": 11,
          "deals": [
            "xAI",
            "Anthropic"
          ],
          "tone": "red"
        },
        {
          "name": "Nvidia",
          "en": "Strategic / CVC",
          "tier": "战略投资",
          "metric": 10,
          "deals": [
            "CoreWeave",
            "Figure"
          ],
          "tone": "green"
        }
      ],
      "caption": "投资机构榜 · 一线风投、战略 CVC 与主权资本三股力量主导大额融资",
      "itemCount": 6,
      "highlight": true,
      "highlightIndex": 0,
      "showBars": true,
      "showDeals": true,
      "accentColor": "#7a5ae0",
      "showCaption": true
    }
  },
  {
    "key": "theme01_page050",
    "themeKey": "theme01",
    "pageNumber": 50,
    "layout": "THEME01-050",
    "slot": "scorecard",
    "label": "标的评分卡 · 尽调五维",
    "bgClass": "",
    "controls": [
      {
        "key": "criterionCount",
        "label": "评分维度数量",
        "type": "number",
        "default": 5,
        "min": 3,
        "max": 5,
        "step": 1,
        "desc": "展示的尽调评分维度数量。",
        "publicKey": "criterionCount",
        "publicLabel": "评分维度数量",
        "description": "展示的尽调评分维度数量。"
      },
      {
        "key": "highlight",
        "label": "重点强调",
        "type": "boolean",
        "default": true,
        "desc": "是否把某一行（短板）点亮成荧光。",
        "publicKey": "highlight",
        "publicLabel": "重点强调",
        "description": "是否把某一行（短板）点亮成荧光。"
      },
      {
        "key": "highlightIndex",
        "label": "强调第几项",
        "type": "number",
        "default": 4,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "被强调的评分维度序号（从 0 开始）。",
        "publicKey": "highlightIndex",
        "publicLabel": "强调第几项",
        "description": "被强调的评分维度序号（从 0 开始）。"
      },
      {
        "key": "showBars",
        "label": "分数条",
        "type": "boolean",
        "default": true,
        "desc": "每项的荧光分数条显示（关闭则仅留分数与评级）。",
        "publicKey": "showBars",
        "publicLabel": "分数条",
        "description": "每项的荧光分数条显示（关闭则仅留分数与评级）。"
      },
      {
        "key": "showGrade",
        "label": "总评印章",
        "type": "boolean",
        "default": true,
        "desc": "左侧巨型总评等级印章的显示。",
        "publicKey": "showGrade",
        "publicLabel": "总评印章",
        "description": "左侧巨型总评等级印章的显示。"
      },
      {
        "key": "accentColor",
        "label": "强调色",
        "type": "color",
        "default": "#e8503a",
        "options": [
          "#e8503a",
          "#5b8def",
          "#46b083",
          "#e0a23a",
          "#7a5ae0",
          "#c9f24d"
        ],
        "desc": "荧光强调行与印章的颜色。",
        "publicKey": "accentColor",
        "publicLabel": "强调色",
        "description": "荧光强调行与印章的颜色。"
      },
      {
        "key": "showCaption",
        "label": "装饰文案",
        "type": "boolean",
        "default": true,
        "desc": "底部 */ … /* 说明文案的显示。",
        "publicKey": "showCaption",
        "publicLabel": "装饰文案",
        "description": "底部 */ … /* 说明文案的显示。"
      }
    ],
    "defaultProps": {
      "kicker": "横向透视",
      "title": "标的评分卡 · 尽调五维",
      "en": "Due-Diligence Scorecard",
      "cn": "以头部大模型公司为样本的打分框架",
      "subject": "通用大模型 · 头部梯队",
      "grade": "A−",
      "gradeNote": "加权总分 81 / 100",
      "criteria": [
        {
          "name": "团队与履历",
          "en": "TEAM",
          "score": 92,
          "verdict": "优",
          "color": "#5b8def"
        },
        {
          "name": "技术壁垒",
          "en": "MOAT",
          "score": 88,
          "verdict": "优",
          "color": "#46b083"
        },
        {
          "name": "算力储备",
          "en": "COMPUTE",
          "score": 95,
          "verdict": "优",
          "color": "#7a5ae0"
        },
        {
          "name": "商业化进度",
          "en": "MONETIZATION",
          "score": 72,
          "verdict": "良",
          "color": "#e0a23a"
        },
        {
          "name": "估值合理性",
          "en": "VALUATION",
          "score": 54,
          "verdict": "弱",
          "color": "#e8503a"
        }
      ],
      "caption": "评分卡 · 强在团队与算力，弱在估值，与全篇风险判断一致",
      "criterionCount": 5,
      "highlight": true,
      "highlightIndex": 4,
      "showBars": true,
      "showGrade": true,
      "accentColor": "#e8503a",
      "showCaption": true
    }
  },
  {
    "key": "theme01_page051",
    "themeKey": "theme01",
    "pageNumber": 51,
    "layout": "THEME01-051",
    "slot": "bubble-scatter",
    "label": "市销率天梯 · 估值 vs 收入",
    "bgClass": "",
    "controls": [
      {
        "key": "itemCount",
        "label": "公司数量",
        "type": "number",
        "default": 6,
        "min": 3,
        "max": 6,
        "step": 1,
        "desc": "天梯中展示的公司数量。",
        "publicKey": "itemCount",
        "publicLabel": "公司数量",
        "description": "天梯中展示的公司数量。"
      },
      {
        "key": "highlight",
        "label": "重点强调",
        "type": "boolean",
        "default": true,
        "desc": "是否高亮强调其中一行（描边 + 发光）。",
        "publicKey": "highlight",
        "publicLabel": "重点强调",
        "description": "是否高亮强调其中一行（描边 + 发光）。"
      },
      {
        "key": "highlightIndex",
        "label": "强调第几行",
        "type": "number",
        "default": 0,
        "min": 0,
        "max": 5,
        "step": 1,
        "desc": "被强调的行序号（按倍数从高到低排序，从 0 开始）。",
        "publicKey": "highlightIndex",
        "publicLabel": "强调第几行",
        "description": "被强调的行序号（按倍数从高到低排序，从 0 开始）。"
      },
      {
        "key": "refMultiple",
        "label": "参考倍数",
        "type": "number",
        "default": 20,
        "min": 5,
        "max": 60,
        "step": 5,
        "desc": "合理指标的市销率参考倍数。",
        "publicKey": "refMultiple",
        "publicLabel": "参考倍数",
        "description": "合理指标的市销率参考倍数。"
      },
      {
        "key": "showRefLine",
        "label": "参考线",
        "type": "boolean",
        "default": true,
        "desc": "市销率参考竖线的显示。",
        "publicKey": "showRefLine",
        "publicLabel": "参考线",
        "description": "市销率参考竖线的显示。"
      },
      {
        "key": "showZones",
        "label": "区间底色",
        "type": "boolean",
        "default": true,
        "desc": "合理区 / 泡沫区 背景色带的显示。",
        "publicKey": "showZones",
        "publicLabel": "区间底色",
        "description": "合理区 / 泡沫区 背景色带的显示。"
      },
      {
        "key": "showFigures",
        "label": "指标数值",
        "type": "boolean",
        "default": true,
        "desc": "左侧「指标 / 收入」数字的显示。",
        "publicKey": "showValueLabels",
        "publicLabel": "指标数值",
        "description": "左侧「指标 / 收入」数字的显示。"
      },
      {
        "key": "accentColor",
        "label": "主题色",
        "type": "color",
        "default": "#e8503a",
        "options": [
          "#e8503a",
          "#5b8def",
          "#46b083",
          "#e0a23a",
          "#7a5ae0"
        ],
        "desc": "标题荧光、参考线与泡沫区的主题色。",
        "publicKey": "accentColor",
        "publicLabel": "主题色",
        "description": "标题荧光、参考线与泡沫区的主题色。"
      },
      {
        "key": "showCaption",
        "label": "装饰文案",
        "type": "boolean",
        "default": true,
        "desc": "底部 */ … /* 说明文案的显示。",
        "publicKey": "showCaption",
        "publicLabel": "装饰文案",
        "description": "底部 */ … /* 说明文案的显示。"
      }
    ],
    "defaultProps": {
      "kicker": "风险研判 · 估值 vs 收入",
      "tone": "red",
      "title": "估值跑在收入前面",
      "en": "Valuation Outruns Revenue",
      "cn": "市销率天梯 · 倍数越高，估值越悬空",
      "refMultiple": 20,
      "refLabel": "20× 合理参考",
      "unit": "亿",
      "items": [
        {
          "name": "OpenAI",
          "sector": "GEN-AI",
          "val": 1570,
          "rev": 37,
          "tone": "blue"
        },
        {
          "name": "Anthropic",
          "sector": "GEN-AI",
          "val": 615,
          "rev": 8,
          "tone": "violet"
        },
        {
          "name": "xAI",
          "sector": "GEN-AI",
          "val": 500,
          "rev": 2,
          "tone": "red"
        },
        {
          "name": "CoreWeave",
          "sector": "INFRA",
          "val": 190,
          "rev": 19,
          "tone": "green"
        },
        {
          "name": "Scale AI",
          "sector": "INFRA",
          "val": 138,
          "rev": 7,
          "tone": "amber"
        },
        {
          "name": "Perplexity",
          "sector": "APP",
          "val": 90,
          "rev": 1,
          "tone": "blue"
        }
      ],
      "insightTitle": "泡沫信号",
      "insight": "通用大模型集体悬于参考线之上，估值建立在「未来市值」；唯算力基础设施 CoreWeave 贴近合理区间。",
      "caption": "市销率天梯 · 多数公司估值远超 20× 收入，唯算力「卖铲」贴近合理区间",
      "itemCount": 6,
      "highlight": true,
      "highlightIndex": 0,
      "showRefLine": true,
      "showZones": true,
      "showFigures": true,
      "accentColor": "#e8503a",
      "showCaption": true
    }
  },
  {
    "key": "theme01_page052",
    "themeKey": "theme01",
    "pageNumber": 52,
    "layout": "THEME01-052",
    "slot": "collage-frontier",
    "label": "贴纸拼贴 · 前沿掠影",
    "bgClass": "",
    "controls": [
      {
        "key": "imageSlotCount",
        "label": "图片数量",
        "type": "number",
        "default": 3,
        "min": 0,
        "max": 5,
        "step": 1,
        "desc": "右侧拼贴的图片张数（0–5，构图自动适配数量与比例）。",
        "publicKey": "imageSlotCount",
        "publicLabel": "图片数量",
        "description": "右侧拼贴的图片张数（0–5，构图自动适配数量与比例）。"
      },
      {
        "key": "images",
        "label": "图片",
        "type": "images",
        "countKey": "imageSlotCount",
        "desc": "上传拼贴图片，槽位自适应图片比例不变形（cover/contain）。",
        "publicKey": "images",
        "publicLabel": "图片",
        "description": "上传拼贴图片，槽位自适应图片比例不变形（cover/contain）。"
      },
      {
        "key": "imageFit",
        "label": "图片裁剪",
        "type": "select",
        "default": "cover",
        "options": [
          "cover",
          "contain"
        ],
        "desc": "cover 裁剪填满 · contain 完整留白，均不变形。",
        "publicKey": "imageFit",
        "publicLabel": "图片裁剪",
        "description": "cover 裁剪填满 · contain 完整留白，均不变形。"
      },
      {
        "key": "tagCount",
        "label": "标签数量",
        "type": "number",
        "default": 4,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "散落贴纸标签的数量。",
        "publicKey": "tagCount",
        "publicLabel": "标签数量",
        "description": "散落贴纸标签的数量。"
      },
      {
        "key": "highlight",
        "label": "重点强调",
        "type": "boolean",
        "default": true,
        "desc": "是否高亮强调其中一个散落标签。",
        "publicKey": "highlight",
        "publicLabel": "重点强调",
        "description": "是否高亮强调其中一个散落标签。"
      },
      {
        "key": "highlightIndex",
        "label": "强调第几个",
        "type": "number",
        "default": 0,
        "min": 0,
        "max": 3,
        "step": 1,
        "desc": "被强调的标签序号（从 0 开始）。",
        "publicKey": "highlightIndex",
        "publicLabel": "强调第几个",
        "description": "被强调的标签序号（从 0 开始）。"
      },
      {
        "key": "showLead",
        "label": "引导段落",
        "type": "boolean",
        "default": true,
        "desc": "标题下方引导文案的显示。",
        "publicKey": "showLead",
        "publicLabel": "引导段落",
        "description": "标题下方引导文案的显示。"
      },
      {
        "key": "accentColor",
        "label": "主题色",
        "type": "color",
        "default": "#7a5ae0",
        "options": [
          "#7a5ae0",
          "#5b8def",
          "#46b083",
          "#e0a23a",
          "#e8503a"
        ],
        "desc": "荧光强调字块与拼贴前景框的颜色。",
        "publicKey": "accentColor",
        "publicLabel": "主题色",
        "description": "荧光强调字块与拼贴前景框的颜色。"
      },
      {
        "key": "showCaption",
        "label": "装饰文案",
        "type": "boolean",
        "default": true,
        "desc": "底部 */ … /* 说明文案的显示。",
        "publicKey": "showCaption",
        "publicLabel": "装饰文案",
        "description": "底部 */ … /* 说明文案的显示。"
      }
    ],
    "defaultProps": {
      "eyebrow": "前沿掠影 · 2026",
      "titleLines": [
        {
          "text": "下一个",
          "kind": "outline"
        },
        {
          "text": "浪潮",
          "kind": "accent"
        },
        {
          "text": "正在成形",
          "kind": "dark"
        }
      ],
      "lead": "当大模型的叙事进入兑现期，资本的目光正越过屏幕，投向能感知、行动、改写物理世界的下一代系统。",
      "tags": [
        {
          "label": "具身智能",
          "tone": "blue"
        },
        {
          "label": "AI Agent",
          "tone": "green"
        },
        {
          "label": "世界模型",
          "tone": "amber"
        },
        {
          "label": "AI 芯片",
          "tone": "red"
        }
      ],
      "images": [
        "",
        "",
        ""
      ],
      "caption": "贴纸拼贴 · 越过屏幕，投向能改写物理世界的下一代系统",
      "imageSlotCount": 3,
      "imageFit": "cover",
      "tagCount": 4,
      "highlight": true,
      "highlightIndex": 0,
      "showLead": true,
      "accentColor": "#7a5ae0",
      "showCaption": true
    }
  },
  {
    "key": "theme01_page053",
    "themeKey": "theme01",
    "pageNumber": 53,
    "layout": "THEME01-053",
    "slot": "heatmap",
    "label": "资金热力矩阵",
    "bgClass": "",
    "controls": [
      {
        "key": "rowCount",
        "label": "分类行数",
        "type": "number",
        "default": 5,
        "min": 3,
        "max": 5,
        "step": 1,
        "desc": "矩阵展示的分类（行）数量。",
        "publicKey": "categoryCount",
        "publicLabel": "分类行数",
        "description": "矩阵展示的分类（行）数量。"
      },
      {
        "key": "highlight",
        "label": "重点强调",
        "type": "boolean",
        "default": true,
        "desc": "是否把数值最高的单元格渲染成荧光「印章」。",
        "publicKey": "highlight",
        "publicLabel": "重点强调",
        "description": "是否把数值最高的单元格渲染成荧光「印章」。"
      },
      {
        "key": "showTotals",
        "label": "合计列",
        "type": "boolean",
        "default": true,
        "desc": "右侧每行合计列的显示。",
        "publicKey": "showTotals",
        "publicLabel": "合计列",
        "description": "右侧每行合计列的显示。"
      },
      {
        "key": "showLegend",
        "label": "热度图例",
        "type": "boolean",
        "default": true,
        "desc": "底部「低 → 高」热度渐变图例的显示。",
        "publicKey": "showLegend",
        "publicLabel": "热度图例",
        "description": "底部「低 → 高」热度渐变图例的显示。"
      },
      {
        "key": "accentColor",
        "label": "主题色",
        "type": "color",
        "default": "#5b8def",
        "options": [
          "#5b8def",
          "#46b083",
          "#e0a23a",
          "#e8503a",
          "#7a5ae0"
        ],
        "desc": "热度单一色家族与强调印章的颜色。",
        "publicKey": "accentColor",
        "publicLabel": "主题色",
        "description": "热度单一色家族与强调印章的颜色。"
      },
      {
        "key": "evil",
        "label": "evilcharts 模式",
        "type": "boolean",
        "default": false,
        "desc": "切换为 evilcharts 风格：点阵底纹绘图区 + 单元格 45° 斜纹 + 按热度递增的霓虹辉光（最热格最亮）。",
        "publicKey": "evil",
        "publicLabel": "evilcharts 模式",
        "description": "切换为 evilcharts 风格：点阵底纹绘图区 + 单元格 45° 斜纹 + 按热度递增的霓虹辉光（最热格最亮）。"
      },
      {
        "key": "showCaption",
        "label": "装饰文案",
        "type": "boolean",
        "default": true,
        "desc": "底部 */ … /* 说明文案的显示。",
        "publicKey": "showCaption",
        "publicLabel": "装饰文案",
        "description": "底部 */ … /* 说明文案的显示。"
      }
    ],
    "defaultProps": {
      "kicker": "市场全景 · 热度分布",
      "tone": "blue",
      "title": "资金热力矩阵",
      "en": "Where The Money Flowed",
      "cn": "赛道 × 季度 · 单笔大额融资额（亿美元）",
      "colLabels": [
        "Q1",
        "Q2",
        "Q3",
        "Q4"
      ],
      "rows": [
        {
          "label": "通用大模型",
          "cells": [
            88,
            96,
            110,
            126
          ]
        },
        {
          "label": "AI 基础设施 / 算力",
          "cells": [
            42,
            51,
            63,
            92
          ]
        },
        {
          "label": "垂直应用",
          "cells": [
            21,
            28,
            34,
            39
          ]
        },
        {
          "label": "AI 硬件 · 机器人",
          "cells": [
            9,
            14,
            22,
            31
          ]
        },
        {
          "label": "企业 AI 服务",
          "cells": [
            12,
            16,
            19,
            24
          ]
        }
      ],
      "unit": "亿",
      "caption": "热力矩阵 · 资金向大模型与算力、向下半年同时收口",
      "rowCount": 5,
      "highlight": true,
      "showTotals": true,
      "showLegend": true,
      "accentColor": "#5b8def",
      "evil": false,
      "showCaption": true
    }
  },
  {
    "key": "theme01_page054",
    "themeKey": "theme01",
    "pageNumber": 54,
    "layout": "THEME01-054",
    "slot": "growth-bars",
    "label": "增速排行 · 条形图",
    "bgClass": "",
    "controls": [
      {
        "key": "itemCount",
        "label": "条目数量",
        "type": "number",
        "default": 6,
        "min": 4,
        "max": 6,
        "step": 1,
        "desc": "排行榜展示的分类条数。",
        "publicKey": "categoryCount",
        "publicLabel": "条目数量",
        "description": "排行榜展示的分类条数。"
      },
      {
        "key": "highlight",
        "label": "重点强调",
        "type": "boolean",
        "default": true,
        "desc": "是否把其中一条渲染成荧光强调条。",
        "publicKey": "highlight",
        "publicLabel": "重点强调",
        "description": "是否把其中一条渲染成荧光强调条。"
      },
      {
        "key": "highlightIndex",
        "label": "强调第几条",
        "type": "number",
        "default": 0,
        "min": 0,
        "max": 5,
        "step": 1,
        "desc": "被强调的条目序号（按当前排序后从 0 开始）。",
        "publicKey": "highlightIndex",
        "publicLabel": "强调第几条",
        "description": "被强调的条目序号（按当前排序后从 0 开始）。"
      },
      {
        "key": "showValues",
        "label": "数值标签",
        "type": "boolean",
        "default": true,
        "desc": "每条末端数值胶囊的显示。",
        "publicKey": "showValueLabels",
        "publicLabel": "数值标签",
        "description": "每条末端数值胶囊的显示。"
      },
      {
        "key": "showMeta",
        "label": "副标说明",
        "type": "boolean",
        "default": true,
        "desc": "每条标签下方代表公司 / 说明的显示。",
        "publicKey": "showMeta",
        "publicLabel": "副标说明",
        "description": "每条标签下方代表公司 / 说明的显示。"
      },
      {
        "key": "sortDesc",
        "label": "降序排列",
        "type": "boolean",
        "default": true,
        "desc": "是否按数值从高到低排序（关闭则保留原始顺序）。",
        "publicKey": "sortDesc",
        "publicLabel": "降序排列",
        "description": "是否按数值从高到低排序（关闭则保留原始顺序）。"
      },
      {
        "key": "accentColor",
        "label": "主题色",
        "type": "color",
        "default": "#46b083",
        "options": [
          "#46b083",
          "#5b8def",
          "#e0a23a",
          "#e8503a",
          "#7a5ae0"
        ],
        "desc": "条形与强调条的主题色（单一色家族，逐条递减透明度）。",
        "publicKey": "accentColor",
        "publicLabel": "主题色",
        "description": "条形与强调条的主题色（单一色家族，逐条递减透明度）。"
      },
      {
        "key": "evil",
        "label": "evilcharts 模式",
        "type": "boolean",
        "default": false,
        "desc": "切换为 evilcharts 风格：点阵底纹绘图区 + 条面 45° 斜纹 + 条形霓虹辉光。",
        "publicKey": "evil",
        "publicLabel": "evilcharts 模式",
        "description": "切换为 evilcharts 风格：点阵底纹绘图区 + 条面 45° 斜纹 + 条形霓虹辉光。"
      },
      {
        "key": "showCaption",
        "label": "装饰文案",
        "type": "boolean",
        "default": true,
        "desc": "底部 */ … /* 说明文案的显示。",
        "publicKey": "showCaption",
        "publicLabel": "装饰文案",
        "description": "底部 */ … /* 说明文案的显示。"
      }
    ],
    "defaultProps": {
      "kicker": "横向透视 · 增长动能",
      "tone": "green",
      "title": "增长最快的赛道",
      "en": "Fastest-Growing Tracks",
      "cn": "按年同比融资增速排序（2024 vs 2023）",
      "unit": "%",
      "prefix": "+",
      "items": [
        {
          "label": "具身智能 · 机器人",
          "value": 312,
          "meta": "Figure / 通用机器人"
        },
        {
          "label": "AI 编程 · Agent",
          "value": 245,
          "meta": "Coding Copilot"
        },
        {
          "label": "AI 基础设施 · 算力",
          "value": 180,
          "meta": "CoreWeave / Scale"
        },
        {
          "label": "企业 AI 应用",
          "value": 120,
          "meta": "Enterprise Copilot"
        },
        {
          "label": "AI 搜索 · 问答",
          "value": 95,
          "meta": "Perplexity / Glean"
        },
        {
          "label": "自动驾驶",
          "value": 60,
          "meta": "Robotaxi"
        }
      ],
      "caption": "条形图 · 具身智能与 AI 编程，是增速最猛的两条新赛道",
      "itemCount": 6,
      "highlight": true,
      "highlightIndex": 0,
      "showValues": true,
      "showMeta": true,
      "sortDesc": true,
      "accentColor": "#46b083",
      "evil": false,
      "showCaption": true
    }
  },
  {
    "key": "theme01_page055",
    "themeKey": "theme01",
    "pageNumber": 55,
    "layout": "THEME01-055",
    "slot": "lollipop",
    "label": "吸金力排行 · 棒棒糖图",
    "bgClass": "",
    "controls": [
      {
        "key": "itemCount",
        "label": "条目数量",
        "type": "number",
        "default": 6,
        "min": 4,
        "max": 7,
        "step": 1,
        "desc": "棒棒糖排行展示的分类条数。",
        "publicKey": "categoryCount",
        "publicLabel": "条目数量",
        "description": "棒棒糖排行展示的分类条数。"
      },
      {
        "key": "highlight",
        "label": "重点强调",
        "type": "boolean",
        "default": true,
        "desc": "是否把其中一条渲染成荧光放大的强调棒。",
        "publicKey": "highlight",
        "publicLabel": "重点强调",
        "description": "是否把其中一条渲染成荧光放大的强调棒。"
      },
      {
        "key": "highlightIndex",
        "label": "强调第几条",
        "type": "number",
        "default": 0,
        "min": 0,
        "max": 6,
        "step": 1,
        "desc": "被强调的条目序号（按当前排序后从 0 开始）。",
        "publicKey": "highlightIndex",
        "publicLabel": "强调第几条",
        "description": "被强调的条目序号（按当前排序后从 0 开始）。"
      },
      {
        "key": "showValues",
        "label": "数值标签",
        "type": "boolean",
        "default": true,
        "desc": "圆盘上数值的显示。",
        "publicKey": "showValueLabels",
        "publicLabel": "数值标签",
        "description": "圆盘上数值的显示。"
      },
      {
        "key": "showMeta",
        "label": "副标说明",
        "type": "boolean",
        "default": true,
        "desc": "每条标签下方代表公司 / 说明的显示。",
        "publicKey": "showMeta",
        "publicLabel": "副标说明",
        "description": "每条标签下方代表公司 / 说明的显示。"
      },
      {
        "key": "showStem",
        "label": "连接棒",
        "type": "boolean",
        "default": true,
        "desc": "从左轴到圆盘的连接细棒的显示（关闭则只剩圆盘）。",
        "publicKey": "showStem",
        "publicLabel": "连接棒",
        "description": "从左轴到圆盘的连接细棒的显示（关闭则只剩圆盘）。"
      },
      {
        "key": "sortDesc",
        "label": "降序排列",
        "type": "boolean",
        "default": true,
        "desc": "是否按数值从高到低排序（关闭则保留原始顺序）。",
        "publicKey": "sortDesc",
        "publicLabel": "降序排列",
        "description": "是否按数值从高到低排序（关闭则保留原始顺序）。"
      },
      {
        "key": "accentColor",
        "label": "主题色",
        "type": "color",
        "default": "#5b8def",
        "options": [
          "#5b8def",
          "#46b083",
          "#e0a23a",
          "#e8503a",
          "#7a5ae0"
        ],
        "desc": "棒与圆盘的主题色（单一色家族，逐条递减透明度）。",
        "publicKey": "accentColor",
        "publicLabel": "主题色",
        "description": "棒与圆盘的主题色（单一色家族，逐条递减透明度）。"
      },
      {
        "key": "showNote",
        "label": "口径说明",
        "type": "boolean",
        "default": true,
        "desc": "底部口径小字说明的显示。",
        "publicKey": "showNote",
        "publicLabel": "口径说明",
        "description": "底部口径小字说明的显示。"
      },
      {
        "key": "showCaption",
        "label": "装饰文案",
        "type": "boolean",
        "default": true,
        "desc": "底部 */ … /* 说明文案的显示。",
        "publicKey": "showCaption",
        "publicLabel": "装饰文案",
        "description": "底部 */ … /* 说明文案的显示。"
      }
    ],
    "defaultProps": {
      "kicker": "横向透视 · 吸金力",
      "tone": "blue",
      "title": "哪条赛道最吸金",
      "en": "Capital Magnetism by Track",
      "cn": "按赛道平均单笔融资额排序（亿美元）",
      "unit": "亿",
      "items": [
        {
          "label": "通用大模型",
          "value": 18.4,
          "meta": "OpenAI / Anthropic / xAI"
        },
        {
          "label": "AI 基础设施 · 算力",
          "value": 11.2,
          "meta": "CoreWeave / Scale"
        },
        {
          "label": "具身智能 · 机器人",
          "value": 6.8,
          "meta": "Figure / 通用机器人"
        },
        {
          "label": "AI 芯片",
          "value": 5.6,
          "meta": "推理 / 训练芯片"
        },
        {
          "label": "企业 AI 应用",
          "value": 3.4,
          "meta": "Enterprise Copilot"
        },
        {
          "label": "AI 搜索 · 问答",
          "value": 2.6,
          "meta": "Perplexity / Glean"
        }
      ],
      "note": "平均单笔 = 该赛道大额融资总额 / 笔数",
      "caption": "棒棒糖图 · 通用大模型单笔吸金力断层领先",
      "itemCount": 6,
      "highlight": true,
      "highlightIndex": 0,
      "showValues": true,
      "showMeta": true,
      "showStem": true,
      "sortDesc": true,
      "accentColor": "#5b8def",
      "showNote": true,
      "showCaption": true
    }
  },
  {
    "key": "theme01_page056",
    "themeKey": "theme01",
    "pageNumber": 56,
    "layout": "THEME01-056",
    "slot": "slope",
    "label": "资金迁移 · 斜率图",
    "bgClass": "",
    "controls": [
      {
        "key": "itemCount",
        "label": "系列数量",
        "type": "number",
        "default": 5,
        "min": 2,
        "max": 6,
        "step": 1,
        "desc": "斜率图展示的分类系列数量。",
        "publicKey": "categoryCount",
        "publicLabel": "系列数量",
        "description": "斜率图展示的分类系列数量。"
      },
      {
        "key": "highlight",
        "label": "聚焦某条",
        "type": "boolean",
        "default": true,
        "desc": "是否点亮其中一条系列（其余淡为灰线），追踪单一迁移。",
        "publicKey": "highlight",
        "publicLabel": "聚焦某条",
        "description": "是否点亮其中一条系列（其余淡为灰线），追踪单一迁移。"
      },
      {
        "key": "highlightIndex",
        "label": "聚焦第几条",
        "type": "number",
        "default": 0,
        "min": 0,
        "max": 5,
        "step": 1,
        "desc": "被聚焦的系列序号（从 0 开始）。",
        "publicKey": "highlightIndex",
        "publicLabel": "聚焦第几条",
        "description": "被聚焦的系列序号（从 0 开始）。"
      },
      {
        "key": "showValues",
        "label": "两端数值",
        "type": "boolean",
        "default": true,
        "desc": "左右两端节点数值的显示。",
        "publicKey": "showValueLabels",
        "publicLabel": "两端数值",
        "description": "左右两端节点数值的显示。"
      },
      {
        "key": "showDelta",
        "label": "变化量胶囊",
        "type": "boolean",
        "default": true,
        "desc": "右端 Δ 增减胶囊的显示。",
        "publicKey": "showDelta",
        "publicLabel": "变化量胶囊",
        "description": "右端 Δ 增减胶囊的显示。"
      },
      {
        "key": "showGrid",
        "label": "两端基准线",
        "type": "boolean",
        "default": true,
        "desc": "左右两条期次基准竖线与表头的显示。",
        "publicKey": "showGrid",
        "publicLabel": "两端基准线",
        "description": "左右两条期次基准竖线与表头的显示。"
      },
      {
        "key": "accentColor",
        "label": "聚焦色",
        "type": "color",
        "default": "#7a5ae0",
        "options": [
          "#7a5ae0",
          "#5b8def",
          "#46b083",
          "#e0a23a",
          "#e8503a"
        ],
        "desc": "被聚焦系列与标题点的颜色（不改其余系列自身配色）。",
        "publicKey": "accentColor",
        "publicLabel": "聚焦色",
        "description": "被聚焦系列与标题点的颜色（不改其余系列自身配色）。"
      },
      {
        "key": "showNote",
        "label": "口径说明",
        "type": "boolean",
        "default": true,
        "desc": "底部口径小字说明的显示。",
        "publicKey": "showNote",
        "publicLabel": "口径说明",
        "description": "底部口径小字说明的显示。"
      },
      {
        "key": "showCaption",
        "label": "装饰文案",
        "type": "boolean",
        "default": true,
        "desc": "底部 */ … /* 说明文案的显示。",
        "publicKey": "showCaption",
        "publicLabel": "装饰文案",
        "description": "底部 */ … /* 说明文案的显示。"
      }
    ],
    "defaultProps": {
      "kicker": "市场全景 · 结构变迁",
      "tone": "violet",
      "title": "资金版图的重新洗牌",
      "en": "Where the Money Migrated",
      "cn": "各赛道大额融资额：2023 → 2024（亿美元）",
      "leftLabel": "2023",
      "rightLabel": "2024",
      "unit": "亿",
      "series": [
        {
          "label": "通用大模型",
          "from": 95,
          "to": 248,
          "color": "#5b8def"
        },
        {
          "label": "AI 基础设施 · 算力",
          "from": 78,
          "to": 175,
          "color": "#46b083"
        },
        {
          "label": "AI 芯片",
          "from": 41,
          "to": 128,
          "color": "#7a5ae0"
        },
        {
          "label": "具身智能 · 机器人",
          "from": 14,
          "to": 96,
          "color": "#e0a23a"
        },
        {
          "label": "垂直应用层",
          "from": 62,
          "to": 70,
          "color": "#e8503a"
        }
      ],
      "note": "口径为公开披露的单笔 ≥1 亿美元融资合计",
      "caption": "斜率图 · 大模型与算力陡升，应用层相对走平",
      "itemCount": 5,
      "highlight": true,
      "highlightIndex": 0,
      "showValues": true,
      "showDelta": true,
      "showGrid": true,
      "accentColor": "#7a5ae0",
      "showNote": true,
      "showCaption": true
    }
  },
  {
    "key": "theme01_page057",
    "themeKey": "theme01",
    "pageNumber": 57,
    "layout": "THEME01-057",
    "slot": "spotlight-tags",
    "label": "标签化特写 · 前沿掠影",
    "bgClass": "",
    "controls": [
      {
        "key": "imageSlotCount",
        "label": "图片数量",
        "type": "number",
        "default": 1,
        "min": 0,
        "max": 1,
        "step": 1,
        "desc": "特写图片槽（0 时切换为纯文字 + 标签的大留白构图）。",
        "publicKey": "imageSlotCount",
        "publicLabel": "图片数量",
        "description": "特写图片槽（0 时切换为纯文字 + 标签的大留白构图）。"
      },
      {
        "key": "imageFit",
        "label": "图片填充",
        "type": "select",
        "default": "cover",
        "options": [
          {
            "value": "cover",
            "label": "裁剪填满"
          },
          {
            "value": "contain",
            "label": "完整自适应"
          }
        ],
        "desc": "图片填充方式：裁剪填满铺满版面，完整自适应按原始比例显示不变形。",
        "publicKey": "imageFit",
        "publicLabel": "图片填充",
        "description": "图片填充方式：裁剪填满铺满版面，完整自适应按原始比例显示不变形。"
      },
      {
        "key": "images",
        "label": "图片",
        "type": "images",
        "countKey": "imageSlotCount",
        "desc": "上传特写图片，槽位自适应图片比例。",
        "publicKey": "images",
        "publicLabel": "图片",
        "description": "上传特写图片，槽位自适应图片比例。"
      },
      {
        "key": "imageSide",
        "label": "图片位置",
        "type": "select",
        "default": "right",
        "options": [
          {
            "value": "right",
            "label": "图右文左"
          },
          {
            "value": "left",
            "label": "图左文右"
          }
        ],
        "desc": "特写图片在左还是在右（标签贴纸自动贴向接缝一侧）。",
        "publicKey": "imageSide",
        "publicLabel": "图片位置",
        "description": "特写图片在左还是在右（标签贴纸自动贴向接缝一侧）。"
      },
      {
        "key": "tagCount",
        "label": "标签数量",
        "type": "number",
        "default": 5,
        "min": 0,
        "max": 6,
        "step": 1,
        "desc": "贴在接缝上的标签贴纸数量。",
        "publicKey": "tagCount",
        "publicLabel": "标签数量",
        "description": "贴在接缝上的标签贴纸数量。"
      },
      {
        "key": "highlight",
        "label": "荧光标签",
        "type": "boolean",
        "default": true,
        "desc": "是否把其中一个标签点亮成荧光强调贴纸。",
        "publicKey": "highlight",
        "publicLabel": "荧光标签",
        "description": "是否把其中一个标签点亮成荧光强调贴纸。"
      },
      {
        "key": "highlightIndex",
        "label": "强调第几个",
        "type": "number",
        "default": 0,
        "min": 0,
        "max": 5,
        "step": 1,
        "desc": "被荧光强调的标签序号（从 0 开始；也可在标签数据里以 tone:accent 指定）。",
        "publicKey": "highlightIndex",
        "publicLabel": "强调第几个",
        "description": "被荧光强调的标签序号（从 0 开始；也可在标签数据里以 tone:accent 指定）。"
      },
      {
        "key": "showStat",
        "label": "主数字",
        "type": "boolean",
        "default": true,
        "desc": "文字栏底部主数字贴纸的显示。",
        "publicKey": "showStat",
        "publicLabel": "主数字",
        "description": "文字栏底部主数字贴纸的显示。"
      },
      {
        "key": "showHighlighter",
        "label": "关键词荧光",
        "type": "boolean",
        "default": true,
        "desc": "说明句关键词荧光底纹的显示。",
        "publicKey": "showHighlighter",
        "publicLabel": "关键词荧光",
        "description": "说明句关键词荧光底纹的显示。"
      },
      {
        "key": "accentColor",
        "label": "主题色",
        "type": "color",
        "default": "#c9f24d",
        "options": [
          "#c9f24d",
          "#5b8def",
          "#46b083",
          "#e0a23a",
          "#e8503a",
          "#7a5ae0"
        ],
        "desc": "荧光标签、主数字与强调描边的颜色。",
        "publicKey": "accentColor",
        "publicLabel": "主题色",
        "description": "荧光标签、主数字与强调描边的颜色。"
      },
      {
        "key": "showCaption",
        "label": "装饰文案",
        "type": "boolean",
        "default": true,
        "desc": "底部 */ … /* 说明文案的显示。",
        "publicKey": "showCaption",
        "publicLabel": "装饰文案",
        "description": "底部 */ … /* 说明文案的显示。"
      }
    ],
    "defaultProps": {
      "kicker": "典型案例 · 前沿掠影",
      "title": "安全对齐的领跑者",
      "en": "The Alignment-First Frontier",
      "lead": "当同行比拼参数与算力，它把可解释、可控当作护城河——用安全叙事撬动了一级市场最贵的估值之一。",
      "highlightWord": "护城河",
      "namePlate": {
        "name": "Anthropic",
        "role": "通用大模型 · 旧金山"
      },
      "bigStat": {
        "value": "9650",
        "unit": "亿",
        "label": "最新估值 · 美元"
      },
      "tags": [
        {
          "label": "Constitutional AI",
          "tone": "accent"
        },
        {
          "label": "企业级 Claude"
        },
        {
          "label": "安全对齐"
        },
        {
          "label": "2026 递交 IPO"
        },
        {
          "label": "亚马逊 / 谷歌加持"
        }
      ],
      "images": [
        ""
      ],
      "caption": "图片特写 · 标签化拆解一家公司的标签",
      "imageSlotCount": 1,
      "imageFit": "cover",
      "imageSide": "right",
      "tagCount": 5,
      "highlight": true,
      "highlightIndex": 0,
      "showStat": true,
      "showHighlighter": true,
      "accentColor": "#c9f24d",
      "showCaption": true
    }
  },
  {
    "key": "theme01_page058",
    "themeKey": "theme01",
    "pageNumber": 58,
    "layout": "THEME01-058",
    "slot": "zigzag-timeline",
    "label": "年度关键节点 · 纵向时间线",
    "bgClass": "",
    "controls": [
      {
        "key": "itemCount",
        "label": "节点数量",
        "type": "number",
        "default": 5,
        "min": 3,
        "max": 6,
        "step": 1,
        "desc": "时间线展示的事件节点数量。",
        "publicKey": "itemCount",
        "publicLabel": "节点数量",
        "description": "时间线展示的事件节点数量。"
      },
      {
        "key": "highlight",
        "label": "重点强调",
        "type": "boolean",
        "default": true,
        "desc": "是否把其中一个节点 + 卡片渲染成荧光强调。",
        "publicKey": "highlight",
        "publicLabel": "重点强调",
        "description": "是否把其中一个节点 + 卡片渲染成荧光强调。"
      },
      {
        "key": "highlightIndex",
        "label": "强调第几个",
        "type": "number",
        "default": 2,
        "min": 0,
        "max": 5,
        "step": 1,
        "desc": "被强调的节点序号（从 0 开始）。",
        "publicKey": "highlightIndex",
        "publicLabel": "强调第几个",
        "description": "被强调的节点序号（从 0 开始）。"
      },
      {
        "key": "showSpine",
        "label": "中轴脊线",
        "type": "boolean",
        "default": true,
        "desc": "中央竖向脊线的显示。",
        "publicKey": "showSpine",
        "publicLabel": "中轴脊线",
        "description": "中央竖向脊线的显示。"
      },
      {
        "key": "alternate",
        "label": "左右交错",
        "type": "boolean",
        "default": true,
        "desc": "卡片左右交错排布（关闭则全部排在右侧，节点靠左成竖排清单）。",
        "publicKey": "alternate",
        "publicLabel": "左右交错",
        "description": "卡片左右交错排布（关闭则全部排在右侧，节点靠左成竖排清单）。"
      },
      {
        "key": "accentColor",
        "label": "主题色",
        "type": "color",
        "default": "#e0a23a",
        "options": [
          "#e0a23a",
          "#5b8def",
          "#46b083",
          "#e8503a",
          "#7a5ae0"
        ],
        "desc": "脊线、节点与强调卡片的主题色。",
        "publicKey": "accentColor",
        "publicLabel": "主题色",
        "description": "脊线、节点与强调卡片的主题色。"
      },
      {
        "key": "showNote",
        "label": "口径说明",
        "type": "boolean",
        "default": true,
        "desc": "底部口径小字说明的显示。",
        "publicKey": "showNote",
        "publicLabel": "口径说明",
        "description": "底部口径小字说明的显示。"
      },
      {
        "key": "showCaption",
        "label": "装饰文案",
        "type": "boolean",
        "default": true,
        "desc": "底部 */ … /* 说明文案的显示。",
        "publicKey": "showCaption",
        "publicLabel": "装饰文案",
        "description": "底部 */ … /* 说明文案的显示。"
      }
    ],
    "defaultProps": {
      "kicker": "市场全景 · 时间线",
      "tone": "amber",
      "title": "2024：改写纪录的一年",
      "en": "A Year That Reset the Record",
      "cn": "大额融资与里程碑的关键节点",
      "events": [
        {
          "date": "02月",
          "title": "Figure AI 完成 6.8 亿融资",
          "desc": "具身智能成为新风口，估值一年内翻数倍。"
        },
        {
          "date": "05月",
          "title": "xAI 募资 60 亿美元",
          "desc": "挑战者强势补位，单轮规模直逼头部。"
        },
        {
          "date": "09月",
          "title": "OpenAI 66 亿创纪录",
          "desc": "刷新单轮融资上限，估值站上 1570 亿美元。"
        },
        {
          "date": "11月",
          "title": "Anthropic 加注 40 亿",
          "desc": "亚马逊追投，安全叙事持续吸金。"
        },
        {
          "date": "12月",
          "title": "全年大额融资破千亿",
          "desc": "美国 AI 一级市场吸纳资金创历史新高。"
        }
      ],
      "note": "节点为公开披露的代表性事件，非完整清单",
      "caption": "时间轴 · 一年之内，纪录被反复刷新",
      "itemCount": 5,
      "highlight": true,
      "highlightIndex": 2,
      "showSpine": true,
      "alternate": true,
      "accentColor": "#e0a23a",
      "showNote": true,
      "showCaption": true
    }
  },
  {
    "key": "theme01_page059",
    "themeKey": "theme01",
    "pageNumber": 59,
    "layout": "THEME01-059",
    "slot": "stream-area",
    "label": "流式面积图 · 构成演变",
    "bgClass": "",
    "controls": [
      {
        "key": "itemCount",
        "label": "分类层数",
        "type": "number",
        "default": 5,
        "min": 3,
        "max": 5,
        "step": 1,
        "desc": "堆叠的分类层数；少于总数时其余并入「其它」。",
        "publicKey": "categoryCount",
        "publicLabel": "分类层数",
        "description": "堆叠的分类层数；少于总数时其余并入「其它」。"
      },
      {
        "key": "highlight",
        "label": "重点强调",
        "type": "boolean",
        "default": true,
        "desc": "是否把某一层渲染成荧光主层（提亮 + 顶缘发光）。",
        "publicKey": "highlight",
        "publicLabel": "重点强调",
        "description": "是否把某一层渲染成荧光主层（提亮 + 顶缘发光）。"
      },
      {
        "key": "highlightIndex",
        "label": "强调第几层",
        "type": "number",
        "default": 0,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "被强调的分类层序号（从下往上、0 基）。",
        "publicKey": "highlightIndex",
        "publicLabel": "强调第几层",
        "description": "被强调的分类层序号（从下往上、0 基）。"
      },
      {
        "key": "smooth",
        "label": "平滑曲线",
        "type": "boolean",
        "default": true,
        "desc": "层与层边界用平滑曲线（关闭则折线）。",
        "publicKey": "smooth",
        "publicLabel": "平滑曲线",
        "description": "层与层边界用平滑曲线（关闭则折线）。"
      },
      {
        "key": "showDots",
        "label": "数据点",
        "type": "boolean",
        "default": false,
        "desc": "主层顶缘各时间段数据点的显示。",
        "publicKey": "showDots",
        "publicLabel": "数据点",
        "description": "主层顶缘各时间段数据点的显示。"
      },
      {
        "key": "showGrid",
        "label": "网格基线",
        "type": "boolean",
        "default": true,
        "desc": "横向网格与时间刻度的显示。",
        "publicKey": "showGrid",
        "publicLabel": "网格基线",
        "description": "横向网格与时间刻度的显示。"
      },
      {
        "key": "showPeak",
        "label": "峰值标注",
        "type": "boolean",
        "default": true,
        "desc": "末期总额峰值气泡的显示。",
        "publicKey": "showPeak",
        "publicLabel": "峰值标注",
        "description": "末期总额峰值气泡的显示。"
      },
      {
        "key": "showNote",
        "label": "核心发现",
        "type": "boolean",
        "default": true,
        "desc": "底部「核心发现」说明卡的显示。",
        "publicKey": "showNote",
        "publicLabel": "核心发现",
        "description": "底部「核心发现」说明卡的显示。"
      },
      {
        "key": "accentColor",
        "label": "主题色",
        "type": "color",
        "default": "#5b8def",
        "options": [
          "#5b8def",
          "#46b083",
          "#e0a23a",
          "#e8503a",
          "#7a5ae0"
        ],
        "desc": "标签、峰值与核心发现卡的主题色（不影响各层固有配色）。",
        "publicKey": "accentColor",
        "publicLabel": "主题色",
        "description": "标签、峰值与核心发现卡的主题色（不影响各层固有配色）。"
      },
      {
        "key": "showCaption",
        "label": "装饰文案",
        "type": "boolean",
        "default": true,
        "desc": "底部 */ … /* 说明文案的显示。",
        "publicKey": "showCaption",
        "publicLabel": "装饰文案",
        "description": "底部 */ … /* 说明文案的显示。"
      }
    ],
    "defaultProps": {
      "kicker": "市场全景 · 构成演变",
      "tone": "blue",
      "title": "资金河流 · 赛道构成的此消彼长",
      "en": "How the Capital Mix Shifts",
      "cn": "逐季度看各赛道吸纳资金的堆叠演变",
      "unit": "亿",
      "periods": [
        "24Q1",
        "24Q2",
        "24Q3",
        "24Q4",
        "25Q1",
        "25Q2",
        "25Q3",
        "25Q4"
      ],
      "series": [
        {
          "label": "通用大模型",
          "en": "Foundation Models",
          "values": [
            38,
            52,
            66,
            88,
            132,
            168,
            196,
            240
          ]
        },
        {
          "label": "AI 基础设施 · 算力",
          "en": "Infra & Compute",
          "values": [
            22,
            30,
            41,
            58,
            84,
            96,
            118,
            140
          ]
        },
        {
          "label": "具身智能 · 机器人",
          "en": "Embodied AI",
          "values": [
            8,
            11,
            14,
            20,
            28,
            34,
            44,
            58
          ]
        },
        {
          "label": "AI 芯片",
          "en": "AI Silicon",
          "values": [
            14,
            16,
            19,
            24,
            31,
            36,
            42,
            50
          ]
        },
        {
          "label": "企业 AI 应用",
          "en": "Enterprise Apps",
          "values": [
            10,
            13,
            17,
            21,
            26,
            30,
            35,
            41
          ]
        }
      ],
      "note": "通用大模型这条「主河道」逐季拓宽，到 25Q4 已占全部增量的近半——资金正加速向最上层的基座模型汇聚。",
      "itemCount": 5,
      "highlight": true,
      "highlightIndex": 0,
      "smooth": true,
      "showDots": false,
      "showGrid": true,
      "showPeak": true,
      "showNote": true,
      "accentColor": "#5b8def",
      "showCaption": true,
      "caption": "流式面积图 · 基座模型这条主河道持续拓宽"
    }
  },
  {
    "key": "theme01_page060",
    "themeKey": "theme01",
    "pageNumber": 60,
    "layout": "THEME01-060",
    "slot": "bullet",
    "label": "子弹图 · 目标达成度",
    "bgClass": "",
    "controls": [
      {
        "key": "itemCount",
        "label": "指标条数",
        "type": "number",
        "default": 5,
        "min": 3,
        "max": 6,
        "step": 1,
        "desc": "展示的目标指标条数。",
        "publicKey": "itemCount",
        "publicLabel": "指标条数",
        "description": "展示的目标指标条数。"
      },
      {
        "key": "highlight",
        "label": "重点强调",
        "type": "boolean",
        "default": true,
        "desc": "是否把某一条渲染成荧光主条（加粗 + 发光）。",
        "publicKey": "highlight",
        "publicLabel": "重点强调",
        "description": "是否把某一条渲染成荧光主条（加粗 + 发光）。"
      },
      {
        "key": "highlightIndex",
        "label": "强调第几条",
        "type": "number",
        "default": 3,
        "min": 0,
        "max": 5,
        "step": 1,
        "desc": "被强调的指标序号（0 基）。",
        "publicKey": "highlightIndex",
        "publicLabel": "强调第几条",
        "description": "被强调的指标序号（0 基）。"
      },
      {
        "key": "showTarget",
        "label": "目标标尺",
        "type": "boolean",
        "default": true,
        "desc": "竖向目标线与「目标」标注的显示。",
        "publicKey": "showTarget",
        "publicLabel": "目标标尺",
        "description": "竖向目标线与「目标」标注的显示。"
      },
      {
        "key": "showBands",
        "label": "区间色带",
        "type": "boolean",
        "default": true,
        "desc": "差 / 良 / 优三段定性背景色带的显示。",
        "publicKey": "showBands",
        "publicLabel": "区间色带",
        "description": "差 / 良 / 优三段定性背景色带的显示。"
      },
      {
        "key": "showRate",
        "label": "达成率徽标",
        "type": "boolean",
        "default": true,
        "desc": "右侧达成率（当前 / 目标）徽标的显示。",
        "publicKey": "showRate",
        "publicLabel": "达成率徽标",
        "description": "右侧达成率（当前 / 目标）徽标的显示。"
      },
      {
        "key": "showMeta",
        "label": "副标说明",
        "type": "boolean",
        "default": true,
        "desc": "每条标签下方口径说明的显示。",
        "publicKey": "showMeta",
        "publicLabel": "副标说明",
        "description": "每条标签下方口径说明的显示。"
      },
      {
        "key": "showNote",
        "label": "核心发现",
        "type": "boolean",
        "default": true,
        "desc": "底部「核心发现」说明卡的显示。",
        "publicKey": "showNote",
        "publicLabel": "核心发现",
        "description": "底部「核心发现」说明卡的显示。"
      },
      {
        "key": "accentColor",
        "label": "主题色",
        "type": "color",
        "default": "#46b083",
        "options": [
          "#46b083",
          "#5b8def",
          "#e0a23a",
          "#e8503a",
          "#7a5ae0"
        ],
        "desc": "测量条与达成率徽标的主题色。",
        "publicKey": "accentColor",
        "publicLabel": "主题色",
        "description": "测量条与达成率徽标的主题色。"
      },
      {
        "key": "showCaption",
        "label": "装饰文案",
        "type": "boolean",
        "default": true,
        "desc": "底部 */ … /* 说明文案的显示。",
        "publicKey": "showCaption",
        "publicLabel": "装饰文案",
        "description": "底部 */ … /* 说明文案的显示。"
      }
    ],
    "defaultProps": {
      "kicker": "风险与展望 · 兑现度",
      "tone": "green",
      "title": "叙事 vs 兑现 · 2026 目标达成度",
      "en": "Progress Against 2026 Targets",
      "cn": "当前进度对照年度目标，差距一目了然",
      "unit": "亿",
      "items": [
        {
          "label": "基座模型 · 年化收入",
          "en": "Foundation Revenue",
          "value": 86,
          "target": 120,
          "max": 150,
          "meta": "OpenAI + Anthropic 合计"
        },
        {
          "label": "算力交付 · GW 装机",
          "en": "Compute Delivered",
          "value": 64,
          "target": 80,
          "max": 100,
          "meta": "在建 + 已投产"
        },
        {
          "label": "企业付费渗透率",
          "en": "Enterprise Adoption",
          "value": 41,
          "target": 60,
          "max": 100,
          "meta": "财富 500 强采用占比"
        },
        {
          "label": "具身智能 · 量产台数",
          "en": "Robots Shipped",
          "value": 18,
          "target": 50,
          "max": 60,
          "meta": "人形机器人累计交付"
        },
        {
          "label": "AI 芯片 · 国产替代",
          "en": "Domestic Silicon",
          "value": 12,
          "target": 35,
          "max": 50,
          "meta": "训练芯片自给率"
        }
      ],
      "note": "收入与算力两项进度过半、最接近达标；而具身量产与芯片自给仍不足目标的四成——叙事最性感的赛道，恰恰是兑现差距最大的地方。",
      "itemCount": 5,
      "highlight": true,
      "highlightIndex": 3,
      "showTarget": true,
      "showBands": true,
      "showRate": true,
      "showMeta": true,
      "showNote": true,
      "accentColor": "#46b083",
      "showCaption": true,
      "caption": "子弹图 · 越性感的叙事，兑现差距越大"
    }
  },
  {
    "key": "theme01_page061",
    "themeKey": "theme01",
    "pageNumber": 61,
    "layout": "THEME01-061",
    "slot": "gantt",
    "label": "甘特排期 · IPO 上市窗口",
    "bgClass": "",
    "controls": [
      {
        "key": "itemCount",
        "label": "公司条数",
        "type": "number",
        "default": 6,
        "min": 3,
        "max": 6,
        "step": 1,
        "desc": "时间表上展示的公司条数。",
        "publicKey": "itemCount",
        "publicLabel": "公司条数",
        "description": "时间表上展示的公司条数。"
      },
      {
        "key": "highlight",
        "label": "重点强调",
        "type": "boolean",
        "default": true,
        "desc": "是否把某一条渲染成荧光主条（加粗 + 发光）。",
        "publicKey": "highlight",
        "publicLabel": "重点强调",
        "description": "是否把某一条渲染成荧光主条（加粗 + 发光）。"
      },
      {
        "key": "highlightIndex",
        "label": "强调第几条",
        "type": "number",
        "default": 1,
        "min": 0,
        "max": 5,
        "step": 1,
        "desc": "被强调的公司序号（0 基）。",
        "publicKey": "highlightIndex",
        "publicLabel": "强调第几条",
        "description": "被强调的公司序号（0 基）。"
      },
      {
        "key": "showNow",
        "label": "「今天」竖线",
        "type": "boolean",
        "default": true,
        "desc": "贯穿全图的「今天」分隔竖线的显示。",
        "publicKey": "showNow",
        "publicLabel": "「今天」竖线",
        "description": "贯穿全图的「今天」分隔竖线的显示。"
      },
      {
        "key": "showGrid",
        "label": "时间网格",
        "type": "boolean",
        "default": true,
        "desc": "纵向时间段分隔网格的显示。",
        "publicKey": "showGrid",
        "publicLabel": "时间网格",
        "description": "纵向时间段分隔网格的显示。"
      },
      {
        "key": "showMeta",
        "label": "副标说明",
        "type": "boolean",
        "default": true,
        "desc": "每条标签下方分类 / 说明的显示。",
        "publicKey": "showMeta",
        "publicLabel": "副标说明",
        "description": "每条标签下方分类 / 说明的显示。"
      },
      {
        "key": "showMilestone",
        "label": "里程碑徽标",
        "type": "boolean",
        "default": true,
        "desc": "条末里程碑圆点与事件标签的显示。",
        "publicKey": "showMilestone",
        "publicLabel": "里程碑徽标",
        "description": "条末里程碑圆点与事件标签的显示。"
      },
      {
        "key": "showNote",
        "label": "核心发现",
        "type": "boolean",
        "default": true,
        "desc": "底部「核心发现」说明卡的显示。",
        "publicKey": "showNote",
        "publicLabel": "核心发现",
        "description": "底部「核心发现」说明卡的显示。"
      },
      {
        "key": "accentColor",
        "label": "主题色",
        "type": "color",
        "default": "#e8503a",
        "options": [
          "#e8503a",
          "#5b8def",
          "#46b083",
          "#e0a23a",
          "#7a5ae0"
        ],
        "desc": "「今天」竖线、强调条与核心发现卡的主题色。",
        "publicKey": "accentColor",
        "publicLabel": "主题色",
        "description": "「今天」竖线、强调条与核心发现卡的主题色。"
      },
      {
        "key": "showCaption",
        "label": "装饰文案",
        "type": "boolean",
        "default": true,
        "desc": "底部 */ … /* 说明文案的显示。",
        "publicKey": "showCaption",
        "publicLabel": "装饰文案",
        "description": "底部 */ … /* 说明文案的显示。"
      }
    ],
    "defaultProps": {
      "kicker": "风险与展望 · 退出排期",
      "tone": "red",
      "title": "IPO 上市窗口 · 排队时刻表",
      "en": "The Exit Window, Quarter by Quarter",
      "cn": "头部公司从递表到挂牌的预计窗口",
      "periods": [
        "25Q3",
        "25Q4",
        "26Q1",
        "26Q2",
        "26Q3",
        "26Q4",
        "27Q1",
        "27Q2"
      ],
      "bars": [
        {
          "label": "CoreWeave",
          "en": "AI 基础设施",
          "start": 0,
          "span": 2,
          "status": "done",
          "milestone": "已挂牌",
          "meta": "算力租赁 · 首个上市"
        },
        {
          "label": "Anthropic",
          "en": "通用大模型",
          "start": 1,
          "span": 4,
          "status": "active",
          "milestone": "递表→上市",
          "meta": "已递交 S-1"
        },
        {
          "label": "Databricks",
          "en": "AI 基础设施",
          "start": 2,
          "span": 3,
          "status": "active",
          "milestone": "预计挂牌",
          "meta": "数据 + AI 平台"
        },
        {
          "label": "xAI",
          "en": "通用大模型",
          "start": 3,
          "span": 4,
          "status": "planned",
          "milestone": "筹备中",
          "meta": "估值待二级检验"
        },
        {
          "label": "Perplexity",
          "en": "AI 搜索",
          "start": 4,
          "span": 3,
          "status": "planned",
          "milestone": "观望窗口",
          "meta": "收入兑现待验"
        },
        {
          "label": "Figure AI",
          "en": "具身智能",
          "start": 5,
          "span": 3,
          "status": "planned",
          "milestone": "远期候选",
          "meta": "量产决定节奏"
        }
      ],
      "nowIndex": 2,
      "note": "2026 全年是退出窗口最密集的一段——一级市场的天价估值，正排队接受二级市场真金白银的检验。",
      "itemCount": 6,
      "highlight": true,
      "highlightIndex": 1,
      "showNow": true,
      "showGrid": true,
      "showMeta": true,
      "showMilestone": true,
      "showNote": true,
      "accentColor": "#e8503a",
      "showCaption": true,
      "caption": "甘特排期 · 2026 退出窗口最密集"
    }
  },
  {
    "key": "theme01_page062",
    "themeKey": "theme01",
    "pageNumber": 62,
    "layout": "THEME01-062",
    "slot": "hero-compute",
    "label": "满版图片 · 算力新基建",
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
        "default": "automations",
        "def": "automations",
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
        "key": "imageSlotCount",
        "label": "图片数量",
        "type": "number",
        "default": 1,
        "min": 0,
        "max": 1,
        "step": 1,
        "countKey": "imageSlotCount",
        "desc": "满版背景图数量（0 时显示柔光 bokeh 背景）。",
        "publicKey": "imageSlotCount",
        "publicLabel": "图片数量",
        "description": "满版背景图数量（0 时显示柔光 bokeh 背景）。"
      },
      {
        "key": "images",
        "label": "上传图片",
        "type": "images",
        "countKey": "imageSlotCount",
        "desc": "满版背景图，按图片比例自适应填满（cover / contain）。",
        "publicKey": "images",
        "publicLabel": "上传图片",
        "description": "满版背景图，按图片比例自适应填满（cover / contain）。"
      },
      {
        "key": "imageFit",
        "label": "图片适配",
        "type": "select",
        "default": "cover",
        "options": [
          {
            "value": "cover",
            "label": "裁剪填满"
          },
          {
            "value": "contain",
            "label": "完整显示"
          }
        ],
        "desc": "cover 裁剪铺满、contain 完整不裁切。",
        "publicKey": "imageFit",
        "publicLabel": "图片适配",
        "description": "cover 裁剪铺满、contain 完整不裁切。"
      },
      {
        "key": "statCount",
        "label": "指标卡片数",
        "type": "number",
        "default": 3,
        "min": 0,
        "max": 3,
        "step": 1,
        "desc": "玻璃浮层底部指标卡片的数量。",
        "publicKey": "statCount",
        "publicLabel": "指标卡片数",
        "description": "玻璃浮层底部指标卡片的数量。"
      },
      {
        "key": "highlight",
        "label": "重点强调",
        "type": "boolean",
        "default": true,
        "desc": "是否把其中一个指标卡片渲染成荧光强调款。",
        "publicKey": "highlight",
        "publicLabel": "重点强调",
        "description": "是否把其中一个指标卡片渲染成荧光强调款。"
      },
      {
        "key": "highlightIndex",
        "label": "强调第几个",
        "type": "number",
        "default": 1,
        "min": 0,
        "max": 2,
        "step": 1,
        "desc": "被强调的指标卡片序号（从 0 开始）。",
        "publicKey": "highlightIndex",
        "publicLabel": "强调第几个",
        "description": "被强调的指标卡片序号（从 0 开始）。"
      },
      {
        "key": "showHighlighter",
        "label": "荧光高亮",
        "type": "boolean",
        "default": true,
        "desc": "是否给标题关键词加荧光底纹。",
        "publicKey": "showHighlighter",
        "publicLabel": "荧光高亮",
        "description": "是否给标题关键词加荧光底纹。"
      },
      {
        "key": "accentColor",
        "label": "主题色",
        "type": "color",
        "default": "#e0a23a",
        "options": [
          "#e0a23a",
          "#5b8def",
          "#46b083",
          "#e8503a",
          "#7a5ae0"
        ],
        "desc": "荧光高亮与强调芯片的颜色。",
        "publicKey": "accentColor",
        "publicLabel": "主题色",
        "description": "荧光高亮与强调芯片的颜色。"
      },
      {
        "key": "showCaption",
        "label": "装饰文案",
        "type": "boolean",
        "default": true,
        "desc": "底部 */ … /* 说明文案的显示。",
        "publicKey": "showCaption",
        "publicLabel": "装饰文案",
        "description": "底部 */ … /* 说明文案的显示。"
      }
    ],
    "defaultProps": {
      "kicker": "前沿 · 新基建",
      "title": "算力，就是新的资本",
      "highlightWord": "新的资本",
      "en": "Compute Is The New Capital",
      "lead": "GPU 集群与数据中心成为这轮 AI 竞赛的硬通货——谁锁定算力，谁就握住了估值的底层叙事。",
      "stats": [
        {
          "value": "158",
          "unit": "亿",
          "label": "算力 / 基础设施融资"
        },
        {
          "value": "190",
          "unit": "亿",
          "label": "CoreWeave 估值"
        },
        {
          "value": "63",
          "unit": "%",
          "label": "资金集中于湾区"
        }
      ],
      "images": [
        ""
      ],
      "caption": "满版图片 · 数据中心，资本的新战场",
      "imageSlotCount": 1,
      "imageFit": "cover",
      "backgroundMode": "unicorn",
      "unicornScene": "automations",
      "statCount": 3,
      "highlight": true,
      "highlightIndex": 1,
      "showHighlighter": true,
      "accentColor": "#e0a23a",
      "showCaption": true
    }
  },
  {
    "key": "theme01_page063",
    "themeKey": "theme01",
    "pageNumber": 63,
    "layout": "THEME01-063",
    "slot": "mag-cover",
    "label": "杂志封面 · 算力军备竞赛",
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
        "key": "imageSlotCount",
        "label": "图片数量",
        "type": "number",
        "default": 1,
        "min": 0,
        "max": 2,
        "step": 1,
        "desc": "满版影像槽：0 纯色封面 / 1 满版 / 2 左右分屏，均按比例自适应不变形。",
        "publicKey": "imageSlotCount",
        "publicLabel": "图片数量",
        "description": "满版影像槽：0 纯色封面 / 1 满版 / 2 左右分屏，均按比例自适应不变形。"
      },
      {
        "key": "imageFit",
        "label": "图片填充",
        "type": "select",
        "default": "cover",
        "options": [
          {
            "value": "cover",
            "label": "裁剪填满"
          },
          {
            "value": "contain",
            "label": "完整自适应"
          }
        ],
        "desc": "裁剪填满铺满版面，或完整自适应按原始比例显示。",
        "publicKey": "imageFit",
        "publicLabel": "图片填充",
        "description": "裁剪填满铺满版面，或完整自适应按原始比例显示。"
      },
      {
        "key": "images",
        "label": "图片",
        "type": "images",
        "countKey": "imageSlotCount",
        "desc": "上传封面影像，槽位自适应图片比例。",
        "publicKey": "images",
        "publicLabel": "图片",
        "description": "上传封面影像，槽位自适应图片比例。"
      },
      {
        "key": "titleLineCount",
        "label": "标题行数",
        "type": "number",
        "default": 3,
        "min": 1,
        "max": 3,
        "step": 1,
        "desc": "标题贴纸的行数（黑 / 白 / 荧光交替）。",
        "publicKey": "titleLineCount",
        "publicLabel": "标题行数",
        "description": "标题贴纸的行数（黑 / 白 / 荧光交替）。"
      },
      {
        "key": "noteCount",
        "label": "批注贴纸",
        "type": "number",
        "default": 3,
        "min": 0,
        "max": 3,
        "step": 1,
        "desc": "四角手写感批注贴纸的数量。",
        "publicKey": "noteCount",
        "publicLabel": "批注贴纸",
        "description": "四角手写感批注贴纸的数量。"
      },
      {
        "key": "showBigStat",
        "label": "大数字贴纸",
        "type": "boolean",
        "default": true,
        "desc": "底部大数字贴纸的显示。",
        "publicKey": "showBigStat",
        "publicLabel": "大数字贴纸",
        "description": "底部大数字贴纸的显示。"
      },
      {
        "key": "showEn",
        "label": "英文副标",
        "type": "boolean",
        "default": true,
        "desc": "标题下方英文副标的显示。",
        "publicKey": "showEn",
        "publicLabel": "英文副标",
        "description": "标题下方英文副标的显示。"
      },
      {
        "key": "accentColor",
        "label": "荧光色",
        "type": "color",
        "default": "#c9f24d",
        "options": [
          "#c9f24d",
          "#5b8def",
          "#46b083",
          "#e0a23a",
          "#e8503a",
          "#7a5ae0"
        ],
        "desc": "荧光贴纸与强调元素的颜色。",
        "publicKey": "accentColor",
        "publicLabel": "荧光色",
        "description": "荧光贴纸与强调元素的颜色。"
      },
      {
        "key": "showCaption",
        "label": "装饰文案",
        "type": "boolean",
        "default": true,
        "desc": "底部 */ … /* 说明文案的显示。",
        "publicKey": "showCaption",
        "publicLabel": "装饰文案",
        "description": "底部 */ … /* 说明文案的显示。"
      }
    ],
    "defaultProps": {
      "kicker": "封面故事 · 算力",
      "titleLines": [
        {
          "text": "算力即权力",
          "fill": "dark"
        },
        {
          "text": "一场资本",
          "fill": "light"
        },
        {
          "text": "军备竞赛",
          "fill": "accent"
        }
      ],
      "en": "The Compute Arms Race",
      "bigStat": {
        "value": "255",
        "unit": "亿",
        "label": "上游芯片 + 基础设施吸金"
      },
      "notes": [
        {
          "text": "GPU 一卡难求",
          "pos": "tl",
          "rot": -5
        },
        {
          "text": "CoreWeave ↑ 190 亿",
          "pos": "tr",
          "rot": 4.5
        },
        {
          "text": "谁囤算力，谁定价",
          "pos": "bl",
          "rot": 4
        }
      ],
      "images": [
        "",
        ""
      ],
      "caption": "杂志封面 · 算力成为这场竞赛最确定的底层资产",
      "imageSlotCount": 1,
      "imageFit": "cover",
      "backgroundMode": "unicorn",
      "unicornScene": "moving",
      "titleLineCount": 3,
      "noteCount": 3,
      "showBigStat": true,
      "showEn": true,
      "accentColor": "#c9f24d",
      "showCaption": true
    }
  },
  {
    "key": "theme01_page064",
    "themeKey": "theme01",
    "pageNumber": 64,
    "layout": "THEME01-064",
    "slot": "kpi-dial",
    "label": "关键占比 · 柱状图",
    "bgClass": "",
    "controls": [
      {
        "key": "itemCount",
        "label": "柱子数量",
        "type": "number",
        "default": 4,
        "min": 3,
        "max": 4,
        "step": 1,
        "desc": "图表展示的柱子数量。",
        "publicKey": "itemCount",
        "publicLabel": "柱子数量",
        "description": "图表展示的柱子数量。"
      },
      {
        "key": "highlight",
        "label": "重点强调",
        "type": "boolean",
        "default": true,
        "desc": "是否把其中一根柱子渲染成发光强调柱（带聚光）。",
        "publicKey": "highlight",
        "publicLabel": "重点强调",
        "description": "是否把其中一根柱子渲染成发光强调柱（带聚光）。"
      },
      {
        "key": "highlightIndex",
        "label": "强调第几根",
        "type": "number",
        "default": 2,
        "min": 0,
        "max": 3,
        "step": 1,
        "desc": "被强调的柱子序号（从 0 开始）。",
        "publicKey": "highlightIndex",
        "publicLabel": "强调第几根",
        "description": "被强调的柱子序号（从 0 开始）。"
      },
      {
        "key": "showDots",
        "label": "点阵底纹",
        "type": "boolean",
        "default": false,
        "desc": "evilcharts 标志性的点阵网格背景的显示（默认关闭，净色柱状图）。",
        "publicKey": "showDots",
        "publicLabel": "点阵底纹",
        "description": "evilcharts 标志性的点阵网格背景的显示（默认关闭，净色柱状图）。"
      },
      {
        "key": "showGrid",
        "label": "横向网格",
        "type": "boolean",
        "default": true,
        "desc": "绘图区横向参考线的显示。",
        "publicKey": "showGrid",
        "publicLabel": "横向网格",
        "description": "绘图区横向参考线的显示。"
      },
      {
        "key": "showBadge",
        "label": "趋势角标",
        "type": "boolean",
        "default": true,
        "desc": "右上角趋势胶囊角标的显示。",
        "publicKey": "showBadge",
        "publicLabel": "趋势角标",
        "description": "右上角趋势胶囊角标的显示。"
      },
      {
        "key": "accentColor",
        "label": "主题色",
        "type": "color",
        "default": "#7a5ae0",
        "options": [
          "#7a5ae0",
          "#5b8def",
          "#46b083",
          "#e0a23a",
          "#e8503a",
          "#c9f24d"
        ],
        "desc": "渐变柱与发光强调柱的主题色（单一色家族，渐变 + 发光）。",
        "publicKey": "accentColor",
        "publicLabel": "主题色",
        "description": "渐变柱与发光强调柱的主题色（单一色家族，渐变 + 发光）。"
      },
      {
        "key": "showCaption",
        "label": "装饰文案",
        "type": "boolean",
        "default": true,
        "desc": "底部 */ … /* 说明文案的显示。",
        "publicKey": "showCaption",
        "publicLabel": "装饰文案",
        "description": "底部 */ … /* 说明文案的显示。"
      }
    ],
    "defaultProps": {
      "kicker": "结论 · 占比一览",
      "tone": "violet",
      "title": "四个关键占比",
      "en": "Four Ratios That Matter",
      "cn": "一屏看清资本向何处集中",
      "chartTitle": "资本集中度 · 占比",
      "chartDesc": "行业 / 赛道 / 地理 / 头部，四处同时收口",
      "trend": "集中度持续走高",
      "unit": "%",
      "bars": [
        {
          "label": "AI 占全美 VC",
          "value": 33,
          "sub": "行业层面"
        },
        {
          "label": "大模型占 AI 融资",
          "value": 43,
          "sub": "赛道层面"
        },
        {
          "label": "资金集中于湾区",
          "value": 64,
          "sub": "地理层面"
        },
        {
          "label": "Top 10 集中度",
          "value": 24,
          "sub": "头部层面"
        }
      ],
      "caption": "柱状图 · evilcharts 风格 · 四个维度的集中度",
      "itemCount": 4,
      "highlight": true,
      "highlightIndex": 2,
      "showDots": false,
      "showGrid": true,
      "showBadge": true,
      "accentColor": "#7a5ae0",
      "showCaption": true
    }
  },
  {
    "key": "theme01_page065",
    "themeKey": "theme01",
    "pageNumber": 65,
    "layout": "THEME01-065",
    "slot": "radar",
    "label": "三强能力雷达",
    "bgClass": "",
    "controls": [
      {
        "key": "itemCount",
        "label": "对比对象数",
        "type": "number",
        "default": 3,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "同时叠加在雷达上的系列数量。",
        "publicKey": "itemCount",
        "publicLabel": "对比对象数",
        "description": "同时叠加在雷达上的系列数量。"
      },
      {
        "key": "axisCount",
        "label": "维度数量",
        "type": "number",
        "default": 6,
        "min": 4,
        "max": 6,
        "step": 1,
        "desc": "雷达的轴（评估维度）数量。",
        "publicKey": "axisCount",
        "publicLabel": "维度数量",
        "description": "雷达的轴（评估维度）数量。"
      },
      {
        "key": "highlight",
        "label": "高亮系列",
        "type": "boolean",
        "default": true,
        "desc": "是否突出其中一个系列（加粗描边 + 提亮，其余淡化）。",
        "publicKey": "highlight",
        "publicLabel": "高亮系列",
        "description": "是否突出其中一个系列（加粗描边 + 提亮，其余淡化）。"
      },
      {
        "key": "highlightIndex",
        "label": "高亮第几个",
        "type": "number",
        "default": 0,
        "min": 0,
        "max": 3,
        "step": 1,
        "desc": "被高亮的系列序号（从 0 开始）。",
        "publicKey": "highlightIndex",
        "publicLabel": "高亮第几个",
        "description": "被高亮的系列序号（从 0 开始）。"
      },
      {
        "key": "showRings",
        "label": "刻度环",
        "type": "boolean",
        "default": true,
        "desc": "同心刻度参考环与轴线的显示。",
        "publicKey": "showRings",
        "publicLabel": "刻度环",
        "description": "同心刻度参考环与轴线的显示。"
      },
      {
        "key": "showDots",
        "label": "顶点圆点",
        "type": "boolean",
        "default": true,
        "desc": "每个系列在各轴上的顶点圆点。",
        "publicKey": "showDots",
        "publicLabel": "顶点圆点",
        "description": "每个系列在各轴上的顶点圆点。"
      },
      {
        "key": "showLead",
        "label": "领先读数",
        "type": "boolean",
        "default": true,
        "desc": "右侧「维度领先」逐项对照表的显示。",
        "publicKey": "showLead",
        "publicLabel": "领先读数",
        "description": "右侧「维度领先」逐项对照表的显示。"
      },
      {
        "key": "fillOpacity",
        "label": "填充浓度",
        "type": "number",
        "default": 18,
        "min": 6,
        "max": 34,
        "step": 2,
        "desc": "系列多边形的半透明填充浓度。",
        "publicKey": "fillOpacity",
        "publicLabel": "填充浓度",
        "description": "系列多边形的半透明填充浓度。"
      },
      {
        "key": "accentColor",
        "label": "主题色",
        "type": "color",
        "default": "#7a5ae0",
        "options": [
          "#7a5ae0",
          "#5b8def",
          "#46b083",
          "#e0a23a",
          "#e8503a"
        ],
        "desc": "卡片标题点 / 刻度强调的主题色（不改系列自身配色）。",
        "publicKey": "accentColor",
        "publicLabel": "主题色",
        "description": "卡片标题点 / 刻度强调的主题色（不改系列自身配色）。"
      },
      {
        "key": "showCaption",
        "label": "装饰文案",
        "type": "boolean",
        "default": true,
        "desc": "底部 */ … /* 说明文案的显示。",
        "publicKey": "showCaption",
        "publicLabel": "装饰文案",
        "description": "底部 */ … /* 说明文案的显示。"
      }
    ],
    "defaultProps": {
      "kicker": "典型案例 · 三强横评",
      "tone": "violet",
      "title": "三强能力雷达",
      "en": "Capability Radar · Big Three",
      "cn": "六个维度，一眼看清各自的长板与短板",
      "axes": [
        "估值规模",
        "年度收入",
        "算力储备",
        "模型能力",
        "融资能力",
        "人才密度"
      ],
      "series": [
        {
          "name": "OpenAI",
          "color": "#5b8def",
          "values": [
            100,
            100,
            86,
            96,
            95,
            98
          ]
        },
        {
          "name": "Anthropic",
          "color": "#46b083",
          "values": [
            72,
            64,
            70,
            92,
            86,
            90
          ]
        },
        {
          "name": "xAI",
          "color": "#e0a23a",
          "values": [
            76,
            30,
            92,
            80,
            82,
            70
          ]
        }
      ],
      "leadLabel": "维度领先",
      "scaleNote": "0–100 相对分 · 非绝对金额",
      "caption": "雷达图 · OpenAI 全维领跑，Anthropic 胜在模型，xAI 强于算力",
      "itemCount": 3,
      "axisCount": 6,
      "highlight": true,
      "highlightIndex": 0,
      "showRings": true,
      "showDots": true,
      "showLead": true,
      "fillOpacity": 18,
      "accentColor": "#7a5ae0",
      "showCaption": true
    }
  },
  {
    "key": "theme01_page066",
    "themeKey": "theme01",
    "pageNumber": 66,
    "layout": "THEME01-066",
    "slot": "matrix",
    "label": "能力对比矩阵",
    "bgClass": "",
    "controls": [
      {
        "key": "rowCount",
        "label": "公司数量",
        "type": "number",
        "default": 5,
        "min": 3,
        "max": 5,
        "step": 1,
        "desc": "参与对比的公司（行）数量。",
        "publicKey": "rowCount",
        "publicLabel": "公司数量",
        "description": "参与对比的公司（行）数量。"
      },
      {
        "key": "dimCount",
        "label": "维度数量",
        "type": "number",
        "default": 5,
        "min": 3,
        "max": 5,
        "step": 1,
        "desc": "对比维度（列）数量。",
        "publicKey": "dimCount",
        "publicLabel": "维度数量",
        "description": "对比维度（列）数量。"
      },
      {
        "key": "highlight",
        "label": "重点强调",
        "type": "boolean",
        "default": true,
        "desc": "是否高亮某一行（抬升 + 描边发光）。",
        "publicKey": "highlight",
        "publicLabel": "重点强调",
        "description": "是否高亮某一行（抬升 + 描边发光）。"
      },
      {
        "key": "highlightIndex",
        "label": "强调第几行",
        "type": "number",
        "default": 0,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "被强调的公司序号（0 基）。",
        "publicKey": "highlightIndex",
        "publicLabel": "强调第几行",
        "description": "被强调的公司序号（0 基）。"
      },
      {
        "key": "showScoreNum",
        "label": "数字评分",
        "type": "boolean",
        "default": false,
        "desc": "在评分点下方叠加 0–3 数字（关闭则纯点阵）。",
        "publicKey": "showScoreNum",
        "publicLabel": "数字评分",
        "description": "在评分点下方叠加 0–3 数字（关闭则纯点阵）。"
      },
      {
        "key": "showLegend",
        "label": "点级图例",
        "type": "boolean",
        "default": true,
        "desc": "底部点级含义图例的显示。",
        "publicKey": "showLegend",
        "publicLabel": "点级图例",
        "description": "底部点级含义图例的显示。"
      },
      {
        "key": "accentColor",
        "label": "主题色",
        "type": "color",
        "default": "#5b8def",
        "options": [
          "#5b8def",
          "#46b083",
          "#e0a23a",
          "#e8503a",
          "#7a5ae0"
        ],
        "desc": "表头、评分点与高亮行的主题色。",
        "publicKey": "accentColor",
        "publicLabel": "主题色",
        "description": "表头、评分点与高亮行的主题色。"
      },
      {
        "key": "showCaption",
        "label": "装饰文案",
        "type": "boolean",
        "default": true,
        "desc": "底部 */ … /* 说明文案的显示。",
        "publicKey": "showCaption",
        "publicLabel": "装饰文案",
        "description": "底部 */ … /* 说明文案的显示。"
      }
    ],
    "defaultProps": {
      "kicker": "横向透视 · 能力对比",
      "tone": "blue",
      "title": "头部玩家 · 能力对比矩阵",
      "en": "Capability Matrix",
      "cn": "五个维度，谁是六边形战士",
      "dims": [
        "模型能力",
        "算力储备",
        "商业化",
        "资本厚度",
        "生态绑定"
      ],
      "rows": [
        {
          "name": "OpenAI",
          "tag": "通用大模型",
          "scores": [
            3,
            3,
            2,
            3,
            3
          ]
        },
        {
          "name": "Anthropic",
          "tag": "通用大模型",
          "scores": [
            3,
            2,
            2,
            3,
            2
          ]
        },
        {
          "name": "xAI",
          "tag": "通用大模型",
          "scores": [
            2,
            3,
            1,
            3,
            2
          ]
        },
        {
          "name": "CoreWeave",
          "tag": "AI 基础设施",
          "scores": [
            1,
            3,
            3,
            2,
            3
          ]
        },
        {
          "name": "Scale AI",
          "tag": "AI 基础设施",
          "scores": [
            1,
            1,
            3,
            2,
            3
          ]
        }
      ],
      "legend": [
        "○ 起步",
        "◔ 一般",
        "◑ 较强",
        "● 领先"
      ],
      "rowCount": 5,
      "dimCount": 5,
      "highlight": true,
      "highlightIndex": 0,
      "showScoreNum": false,
      "showLegend": true,
      "accentColor": "#5b8def",
      "showCaption": true,
      "caption": "能力矩阵 · OpenAI 维度最均衡，基础设施厂在「算力 + 商业化」单点突出"
    }
  },
  {
    "key": "theme01_page067",
    "themeKey": "theme01",
    "pageNumber": 67,
    "layout": "THEME01-067",
    "slot": "waterfall",
    "label": "资金瀑布 · 构成",
    "bgClass": "",
    "controls": [
      {
        "key": "itemCount",
        "label": "分类步数",
        "type": "number",
        "default": 5,
        "min": 3,
        "max": 5,
        "step": 1,
        "desc": "参与叠加的分类（瀑布步骤）数量，末尾自动追加「合计」列。",
        "publicKey": "categoryCount",
        "publicLabel": "分类步数",
        "description": "参与叠加的分类（瀑布步骤）数量，末尾自动追加「合计」列。"
      },
      {
        "key": "highlight",
        "label": "高亮最大项",
        "type": "boolean",
        "default": true,
        "desc": "是否把贡献最大的分类渲染成强调色。",
        "publicKey": "highlight",
        "publicLabel": "高亮最大项",
        "description": "是否把贡献最大的分类渲染成强调色。"
      },
      {
        "key": "showConnectors",
        "label": "连接虚线",
        "type": "boolean",
        "default": true,
        "desc": "步骤之间承接累计高度的虚线连接。",
        "publicKey": "showConnectors",
        "publicLabel": "连接虚线",
        "description": "步骤之间承接累计高度的虚线连接。"
      },
      {
        "key": "showRun",
        "label": "累计读数",
        "type": "boolean",
        "default": true,
        "desc": "每根浮动柱上方的「累计达成」小读数。",
        "publicKey": "showRun",
        "publicLabel": "累计读数",
        "description": "每根浮动柱上方的「累计达成」小读数。"
      },
      {
        "key": "showGrid",
        "label": "横向网格",
        "type": "boolean",
        "default": true,
        "desc": "绘图区横向参考线的显示。",
        "publicKey": "showGrid",
        "publicLabel": "横向网格",
        "description": "绘图区横向参考线的显示。"
      },
      {
        "key": "accentColor",
        "label": "分类色",
        "type": "color",
        "default": "#46b083",
        "options": [
          "#46b083",
          "#5b8def",
          "#e0a23a",
          "#7a5ae0",
          "#e8503a"
        ],
        "desc": "浮动分类柱的渐变主题色。",
        "publicKey": "accentColor",
        "publicLabel": "分类色",
        "description": "浮动分类柱的渐变主题色。"
      },
      {
        "key": "totalColor",
        "label": "合计柱色",
        "type": "color",
        "default": "#2b2b30",
        "options": [
          "#2b2b30",
          "#5b8def",
          "#46b083",
          "#e0a23a",
          "#7a5ae0",
          "#e8503a"
        ],
        "desc": "末尾「合计」实心柱的颜色。",
        "publicKey": "totalColor",
        "publicLabel": "合计柱色",
        "description": "末尾「合计」实心柱的颜色。"
      },
      {
        "key": "showCaption",
        "label": "装饰文案",
        "type": "boolean",
        "default": true,
        "desc": "底部 */ … /* 说明文案的显示。",
        "publicKey": "showCaption",
        "publicLabel": "装饰文案",
        "description": "底部 */ … /* 说明文案的显示。"
      }
    ],
    "defaultProps": {
      "kicker": "市场全景 · 资金构成",
      "tone": "green",
      "title": "资金如何累积成 937 亿",
      "en": "Funding Build-Up · Waterfall",
      "cn": "逐赛道叠加，看清这一年的钱从哪儿堆出来",
      "steps": [
        {
          "label": "通用大模型",
          "value": 420
        },
        {
          "label": "AI 基础设施",
          "value": 248
        },
        {
          "label": "垂直应用",
          "value": 122
        },
        {
          "label": "AI 硬件 · 机器人",
          "value": 76
        },
        {
          "label": "企业 AI 服务",
          "value": 71
        }
      ],
      "totalLabel": "全年合计",
      "unit": "亿",
      "runLabel": "累计达成",
      "caption": "瀑布图 · 通用大模型一项即贡献近半，奠定全年基本盘",
      "itemCount": 5,
      "highlight": true,
      "showConnectors": true,
      "showRun": true,
      "showGrid": true,
      "accentColor": "#46b083",
      "totalColor": "#2b2b30",
      "showCaption": true
    }
  },
  {
    "key": "theme01_page068",
    "themeKey": "theme01",
    "pageNumber": 68,
    "layout": "THEME01-068",
    "slot": "dumbbell",
    "label": "估值跃迁 · 哑铃图",
    "bgClass": "",
    "controls": [
      {
        "key": "itemCount",
        "label": "公司行数",
        "type": "number",
        "default": 5,
        "min": 3,
        "max": 5,
        "step": 1,
        "desc": "展示的公司（哑铃行）数量。",
        "publicKey": "itemCount",
        "publicLabel": "公司行数",
        "description": "展示的公司（哑铃行）数量。"
      },
      {
        "key": "highlight",
        "label": "高亮某行",
        "type": "boolean",
        "default": true,
        "desc": "是否突出其中一行（提亮 + 放大端点）。",
        "publicKey": "highlight",
        "publicLabel": "高亮某行",
        "description": "是否突出其中一行（提亮 + 放大端点）。"
      },
      {
        "key": "highlightIndex",
        "label": "高亮第几行",
        "type": "number",
        "default": 2,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "被高亮的行序号（从 0 开始）。",
        "publicKey": "highlightIndex",
        "publicLabel": "高亮第几行",
        "description": "被高亮的行序号（从 0 开始）。"
      },
      {
        "key": "showAxis",
        "label": "坐标刻度",
        "type": "boolean",
        "default": true,
        "desc": "底部数值刻度与纵向参考线的显示。",
        "publicKey": "showValueLabels",
        "publicLabel": "坐标刻度",
        "description": "底部数值刻度与纵向参考线的显示。"
      },
      {
        "key": "showDelta",
        "label": "倍数角标",
        "type": "boolean",
        "default": true,
        "desc": "右侧 ×倍 跃迁角标的显示。",
        "publicKey": "showDelta",
        "publicLabel": "倍数角标",
        "description": "右侧 ×倍 跃迁角标的显示。"
      },
      {
        "key": "showStartDot",
        "label": "年初端点",
        "type": "boolean",
        "default": true,
        "desc": "空心「年初」端点与其数值标签的显示。",
        "publicKey": "showValueLabels2",
        "publicLabel": "年初端点",
        "description": "空心「年初」端点与其数值标签的显示。"
      },
      {
        "key": "accentColor",
        "label": "终点色",
        "type": "color",
        "default": "#e8503a",
        "options": [
          "#e8503a",
          "#e0a23a",
          "#7a5ae0",
          "#5b8def",
          "#46b083"
        ],
        "desc": "「最新」端点与连杆的强调色。",
        "publicKey": "accentColor",
        "publicLabel": "终点色",
        "description": "「最新」端点与连杆的强调色。"
      },
      {
        "key": "startColor",
        "label": "起点色",
        "type": "color",
        "default": "#9a9ba4",
        "options": [
          "#9a9ba4",
          "#5b8def",
          "#46b083",
          "#e0a23a",
          "#7a5ae0"
        ],
        "desc": "「年初」空心端点的颜色。",
        "publicKey": "startColor",
        "publicLabel": "起点色",
        "description": "「年初」空心端点的颜色。"
      },
      {
        "key": "showCaption",
        "label": "装饰文案",
        "type": "boolean",
        "default": true,
        "desc": "底部 */ … /* 说明文案的显示。",
        "publicKey": "showCaption",
        "publicLabel": "装饰文案",
        "description": "底部 */ … /* 说明文案的显示。"
      }
    ],
    "defaultProps": {
      "kicker": "风险与展望 · 估值",
      "tone": "red",
      "title": "一年之间，估值翻了几番",
      "en": "Valuation Leap · Dumbbell",
      "cn": "年初 → 最新，谁的跃迁最猛",
      "unit": "亿",
      "startLabel": "年初",
      "endLabel": "最新",
      "rows": [
        {
          "name": "OpenAI",
          "sub": "通用大模型",
          "start": 1570,
          "end": 5000
        },
        {
          "name": "Anthropic",
          "sub": "通用大模型",
          "start": 615,
          "end": 1830
        },
        {
          "name": "xAI",
          "sub": "通用大模型",
          "start": 240,
          "end": 2000
        },
        {
          "name": "Safe Superintelligence",
          "sub": "通用大模型",
          "start": 50,
          "end": 320
        },
        {
          "name": "Mistral AI",
          "sub": "开源大模型",
          "start": 60,
          "end": 140
        }
      ],
      "axisMax": 5500,
      "axisTicks": [
        0,
        1000,
        2000,
        3000,
        4000,
        5000
      ],
      "caption": "哑铃图 · xAI 一年 8 倍领跑，泡沫与机会同在一条轴上",
      "itemCount": 5,
      "highlight": true,
      "highlightIndex": 2,
      "showAxis": true,
      "showDelta": true,
      "showStartDot": true,
      "accentColor": "#e8503a",
      "startColor": "#9a9ba4",
      "showCaption": true
    }
  },
  {
    "key": "theme01_page069",
    "themeKey": "theme01",
    "pageNumber": 69,
    "layout": "THEME01-069",
    "slot": "sticker-wall",
    "label": "年度热词 · 标签墙",
    "bgClass": "",
    "controls": [
      {
        "key": "itemCount",
        "label": "标签数量",
        "type": "number",
        "default": 10,
        "min": 6,
        "max": 12,
        "step": 1,
        "desc": "标签墙上展示的热词数量（自动保持错落构图）。",
        "publicKey": "itemCount",
        "publicLabel": "标签数量",
        "description": "标签墙上展示的热词数量（自动保持错落构图）。"
      },
      {
        "key": "highlight",
        "label": "高亮标签",
        "type": "boolean",
        "default": true,
        "desc": "是否放大并发光强调其中一个标签。",
        "publicKey": "highlight",
        "publicLabel": "高亮标签",
        "description": "是否放大并发光强调其中一个标签。"
      },
      {
        "key": "highlightIndex",
        "label": "高亮第几个",
        "type": "number",
        "default": 0,
        "min": 0,
        "max": 11,
        "step": 1,
        "desc": "被强调的标签序号（从 0 开始）。",
        "publicKey": "highlightIndex",
        "publicLabel": "高亮第几个",
        "description": "被强调的标签序号（从 0 开始）。"
      },
      {
        "key": "headTilt",
        "label": "标题倾斜",
        "type": "number",
        "default": -3,
        "min": -8,
        "max": 8,
        "step": 1,
        "desc": "顶部贴纸标题的整体旋转角度。",
        "publicKey": "headTilt",
        "publicLabel": "标题倾斜",
        "description": "顶部贴纸标题的整体旋转角度。"
      },
      {
        "key": "showSub",
        "label": "副标题",
        "type": "boolean",
        "default": true,
        "desc": "标题下方说明副标题的显示。",
        "publicKey": "showSub",
        "publicLabel": "副标题",
        "description": "标题下方说明副标题的显示。"
      },
      {
        "key": "showTakeaway",
        "label": "底部金句",
        "type": "boolean",
        "default": true,
        "desc": "底部荧光高亮金句贴纸的显示。",
        "publicKey": "showTakeaway",
        "publicLabel": "底部金句",
        "description": "底部荧光高亮金句贴纸的显示。"
      },
      {
        "key": "accentColor",
        "label": "荧光色",
        "type": "color",
        "default": "#c9f24d",
        "options": [
          "#c9f24d",
          "#46b083",
          "#5b8def",
          "#e0a23a",
          "#e8503a",
          "#7a5ae0"
        ],
        "desc": "荧光高亮贴纸 / 高光的主题色。",
        "publicKey": "accentColor",
        "publicLabel": "荧光色",
        "description": "荧光高亮贴纸 / 高光的主题色。"
      },
      {
        "key": "showCaption",
        "label": "装饰文案",
        "type": "boolean",
        "default": true,
        "desc": "底部 */ … /* 说明文案的显示。",
        "publicKey": "showCaption",
        "publicLabel": "装饰文案",
        "description": "底部 */ … /* 说明文案的显示。"
      }
    ],
    "defaultProps": {
      "kicker": "ANNUAL · 关键词",
      "headChunks": [
        {
          "text": "资本",
          "tone": "dark"
        },
        {
          "text": "年度",
          "tone": "glow"
        },
        {
          "text": "热词",
          "tone": "light"
        }
      ],
      "sub": "十二个词，复盘这一年 AI 融资的全部叙事",
      "meta": "2025 · WORD WALL",
      "tags": [
        {
          "term": "AGI 叙事",
          "note": "The AGI Bet",
          "tone": "glow",
          "big": true
        },
        {
          "term": "卖铲子",
          "note": "Picks & Shovels",
          "tone": "dark"
        },
        {
          "term": "算力卡脖子",
          "note": "Compute Crunch",
          "tone": "light"
        },
        {
          "term": "估值泡沫",
          "note": "Bubble Watch",
          "tone": "dark",
          "big": true
        },
        {
          "term": "湾区集中",
          "note": "Bay Area",
          "tone": "light"
        },
        {
          "term": "千倍 PS",
          "note": "1000× Revenue",
          "tone": "glow"
        },
        {
          "term": "IPO 退出",
          "note": "Exit Window",
          "tone": "dark"
        },
        {
          "term": "具身智能",
          "note": "Embodied AI",
          "tone": "light",
          "big": true
        },
        {
          "term": "Constitutional AI",
          "note": "安全对齐",
          "tone": "dark"
        },
        {
          "term": "Token 经济",
          "note": "Token Economy",
          "tone": "light"
        },
        {
          "term": "大模型断层",
          "note": "Foundation Gap",
          "tone": "glow"
        },
        {
          "term": "头部通吃",
          "note": "Winner-Takes-Most",
          "tone": "dark"
        }
      ],
      "takeaway": "一句话 —— 钱，正在向少数共识快速收口。",
      "takeawayHighlight": "少数共识",
      "caption": "标签墙 · 十二个热词，一页复盘全年叙事",
      "itemCount": 10,
      "highlight": true,
      "highlightIndex": 0,
      "headTilt": -3,
      "showSub": true,
      "showTakeaway": true,
      "accentColor": "#c9f24d",
      "showCaption": true
    }
  },
  {
    "key": "theme01_page070",
    "themeKey": "theme01",
    "pageNumber": 70,
    "layout": "THEME01-070",
    "slot": "bump-rank",
    "label": "排位赛 · 座次变化",
    "bgClass": "",
    "controls": [
      {
        "key": "itemCount",
        "label": "玩家数量",
        "type": "number",
        "default": 6,
        "min": 3,
        "max": 6,
        "step": 1,
        "desc": "同时追踪排名变化的玩家数量。",
        "publicKey": "itemCount",
        "publicLabel": "玩家数量",
        "description": "同时追踪排名变化的玩家数量。"
      },
      {
        "key": "periodCount",
        "label": "时间节点",
        "type": "number",
        "default": 3,
        "min": 2,
        "max": 3,
        "step": 1,
        "desc": "横轴上的时间节点数量（取每位玩家 ranks 的前 N 个）。",
        "publicKey": "periodCount",
        "publicLabel": "时间节点",
        "description": "横轴上的时间节点数量（取每位玩家 ranks 的前 N 个）。"
      },
      {
        "key": "highlight",
        "label": "高亮玩家",
        "type": "boolean",
        "default": true,
        "desc": "是否突出其中一位玩家（加粗发光，其余淡化）。",
        "publicKey": "highlight",
        "publicLabel": "高亮玩家",
        "description": "是否突出其中一位玩家（加粗发光，其余淡化）。"
      },
      {
        "key": "highlightIndex",
        "label": "高亮第几位",
        "type": "number",
        "default": 2,
        "min": 0,
        "max": 5,
        "step": 1,
        "desc": "被高亮的玩家序号（从 0 开始）。",
        "publicKey": "highlightIndex",
        "publicLabel": "高亮第几位",
        "description": "被高亮的玩家序号（从 0 开始）。"
      },
      {
        "key": "showNodes",
        "label": "排名节点",
        "type": "boolean",
        "default": true,
        "desc": "每个时间节点上的排名圆点（含名次数字）。",
        "publicKey": "showNodes",
        "publicLabel": "排名节点",
        "description": "每个时间节点上的排名圆点（含名次数字）。"
      },
      {
        "key": "showEndPills",
        "label": "两端名牌",
        "type": "boolean",
        "default": true,
        "desc": "折线两端显示玩家名称的名牌。",
        "publicKey": "showEndPills",
        "publicLabel": "两端名牌",
        "description": "折线两端显示玩家名称的名牌。"
      },
      {
        "key": "showNote",
        "label": "口径说明",
        "type": "boolean",
        "default": true,
        "desc": "图表底部排名口径小字说明的显示。",
        "publicKey": "showNote",
        "publicLabel": "口径说明",
        "description": "图表底部排名口径小字说明的显示。"
      },
      {
        "key": "accentColor",
        "label": "主题色",
        "type": "color",
        "default": "#5b8def",
        "options": [
          "#5b8def",
          "#46b083",
          "#e0a23a",
          "#e8503a",
          "#7a5ae0"
        ],
        "desc": "标题点与高亮发光的主题色（不改各玩家自身配色）。",
        "publicKey": "accentColor",
        "publicLabel": "主题色",
        "description": "标题点与高亮发光的主题色（不改各玩家自身配色）。"
      },
      {
        "key": "showCaption",
        "label": "装饰文案",
        "type": "boolean",
        "default": true,
        "desc": "底部 */ … /* 说明文案的显示。",
        "publicKey": "showCaption",
        "publicLabel": "装饰文案",
        "description": "底部 */ … /* 说明文案的显示。"
      }
    ],
    "defaultProps": {
      "kicker": "市场全景 · 座次变化",
      "tone": "blue",
      "title": "排位赛 · 一年内座次重排",
      "en": "The Reshuffle",
      "cn": "按估值排名追踪头部玩家，谁在上位、谁被反超",
      "periods": [
        "2023",
        "2024 上半年",
        "2024 下半年"
      ],
      "series": [
        {
          "name": "OpenAI",
          "color": "#5b8def",
          "ranks": [
            1,
            1,
            1
          ]
        },
        {
          "name": "Anthropic",
          "color": "#46b083",
          "ranks": [
            4,
            3,
            2
          ]
        },
        {
          "name": "xAI",
          "color": "#e0a23a",
          "ranks": [
            6,
            4,
            3
          ]
        },
        {
          "name": "CoreWeave",
          "color": "#7a5ae0",
          "ranks": [
            5,
            5,
            4
          ]
        },
        {
          "name": "Databricks",
          "color": "#9aa0ad",
          "ranks": [
            2,
            2,
            5
          ]
        },
        {
          "name": "Scale AI",
          "color": "#e8503a",
          "ranks": [
            3,
            6,
            6
          ]
        }
      ],
      "rankNote": "排名按公开披露估值口径 · 1 = 最高",
      "caption": "排位图 · OpenAI 稳居榜首，xAI 与 Anthropic 强势上位",
      "itemCount": 6,
      "periodCount": 3,
      "highlight": true,
      "highlightIndex": 2,
      "showNodes": true,
      "showEndPills": true,
      "showNote": true,
      "accentColor": "#5b8def",
      "showCaption": true
    }
  },
  {
    "key": "theme01_page071",
    "themeKey": "theme01",
    "pageNumber": 71,
    "layout": "THEME01-071",
    "slot": "stacked-mix",
    "label": "构成演变 · 百分比堆叠",
    "bgClass": "",
    "controls": [
      {
        "key": "itemCount",
        "label": "时间条数",
        "type": "number",
        "default": 4,
        "min": 2,
        "max": 5,
        "step": 1,
        "desc": "展示的时间周期（堆叠条）数量。",
        "publicKey": "itemCount",
        "publicLabel": "时间条数",
        "description": "展示的时间周期（堆叠条）数量。"
      },
      {
        "key": "segmentCount",
        "label": "分段数量",
        "type": "number",
        "default": 4,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "每条堆叠的分段（类别）数量。",
        "publicKey": "segmentCount",
        "publicLabel": "分段数量",
        "description": "每条堆叠的分段（类别）数量。"
      },
      {
        "key": "highlight",
        "label": "聚焦某段",
        "type": "boolean",
        "default": true,
        "desc": "是否在所有条上点亮同一分段（其余淡化），追踪单一趋势。",
        "publicKey": "highlight",
        "publicLabel": "聚焦某段",
        "description": "是否在所有条上点亮同一分段（其余淡化），追踪单一趋势。"
      },
      {
        "key": "highlightIndex",
        "label": "聚焦第几段",
        "type": "number",
        "default": 0,
        "min": 0,
        "max": 3,
        "step": 1,
        "desc": "被聚焦的分段序号（从 0 开始）。",
        "publicKey": "highlightIndex",
        "publicLabel": "聚焦第几段",
        "description": "被聚焦的分段序号（从 0 开始）。"
      },
      {
        "key": "showValues",
        "label": "段内数值",
        "type": "boolean",
        "default": true,
        "desc": "各分段内百分比数值的显示（过窄的段自动隐藏）。",
        "publicKey": "showValueLabels",
        "publicLabel": "段内数值",
        "description": "各分段内百分比数值的显示（过窄的段自动隐藏）。"
      },
      {
        "key": "showLegend",
        "label": "顶部图例",
        "type": "boolean",
        "default": true,
        "desc": "顶部分段图例的显示。",
        "publicKey": "showLegend",
        "publicLabel": "顶部图例",
        "description": "顶部分段图例的显示。"
      },
      {
        "key": "showNote",
        "label": "口径说明",
        "type": "boolean",
        "default": true,
        "desc": "底部口径小字说明的显示。",
        "publicKey": "showNote",
        "publicLabel": "口径说明",
        "description": "底部口径小字说明的显示。"
      },
      {
        "key": "accentColor",
        "label": "主题色",
        "type": "color",
        "default": "#46b083",
        "options": [
          "#46b083",
          "#5b8def",
          "#e0a23a",
          "#e8503a",
          "#7a5ae0"
        ],
        "desc": "标题点的主题色（不改各分段自身配色）。",
        "publicKey": "accentColor",
        "publicLabel": "主题色",
        "description": "标题点的主题色（不改各分段自身配色）。"
      },
      {
        "key": "showCaption",
        "label": "装饰文案",
        "type": "boolean",
        "default": true,
        "desc": "底部 */ … /* 说明文案的显示。",
        "publicKey": "showCaption",
        "publicLabel": "装饰文案",
        "description": "底部 */ … /* 说明文案的显示。"
      }
    ],
    "defaultProps": {
      "kicker": "市场全景 · 结构变迁",
      "tone": "green",
      "title": "资金流向的此消彼长",
      "en": "How the Mix Shifted",
      "cn": "把每年大额融资归一为 100%，看构成如何演变",
      "segments": [
        {
          "label": "通用大模型",
          "color": "#5b8def"
        },
        {
          "label": "AI 基础设施 · 算力",
          "color": "#46b083"
        },
        {
          "label": "垂直应用层",
          "color": "#e0a23a"
        },
        {
          "label": "其他",
          "color": "#9aa0ad"
        }
      ],
      "rows": [
        {
          "period": "2021",
          "shares": [
            30,
            20,
            35,
            15
          ]
        },
        {
          "period": "2022",
          "shares": [
            38,
            22,
            28,
            12
          ]
        },
        {
          "period": "2023",
          "shares": [
            44,
            26,
            22,
            8
          ]
        },
        {
          "period": "2024",
          "shares": [
            48,
            28,
            18,
            6
          ]
        }
      ],
      "note": "占比按当年大额融资金额归一计算",
      "caption": "堆叠图 · 大模型与算力持续扩张，应用层占比逐年收缩",
      "itemCount": 4,
      "segmentCount": 4,
      "highlight": true,
      "highlightIndex": 0,
      "showValues": true,
      "showLegend": true,
      "showNote": true,
      "accentColor": "#46b083",
      "showCaption": true
    }
  },
  {
    "key": "theme01_page072",
    "themeKey": "theme01",
    "pageNumber": 72,
    "layout": "THEME01-072",
    "slot": "waffle",
    "label": "像形方格图 · 资金去向",
    "bgClass": "",
    "controls": [
      {
        "key": "itemCount",
        "label": "类别数量",
        "type": "number",
        "default": 5,
        "min": 2,
        "max": 5,
        "step": 1,
        "desc": "参与拼格的类别数量（不足 100 的格子留作底色空格）。",
        "publicKey": "itemCount",
        "publicLabel": "类别数量",
        "description": "参与拼格的类别数量（不足 100 的格子留作底色空格）。"
      },
      {
        "key": "highlight",
        "label": "聚焦某类",
        "type": "boolean",
        "default": false,
        "desc": "是否只点亮其中一类（其余格子与图例淡化）。",
        "publicKey": "highlight",
        "publicLabel": "聚焦某类",
        "description": "是否只点亮其中一类（其余格子与图例淡化）。"
      },
      {
        "key": "highlightIndex",
        "label": "聚焦第几类",
        "type": "number",
        "default": 0,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "被聚焦的类别序号（从 0 开始）。",
        "publicKey": "highlightIndex",
        "publicLabel": "聚焦第几类",
        "description": "被聚焦的类别序号（从 0 开始）。"
      },
      {
        "key": "showLegend",
        "label": "右侧图例",
        "type": "boolean",
        "default": true,
        "desc": "右侧类别图例 / 占比读数的显示。",
        "publicKey": "showLegend",
        "publicLabel": "右侧图例",
        "description": "右侧类别图例 / 占比读数的显示。"
      },
      {
        "key": "showMeta",
        "label": "副标说明",
        "type": "boolean",
        "default": true,
        "desc": "图例中代表公司 / 说明小字的显示。",
        "publicKey": "showMeta",
        "publicLabel": "副标说明",
        "description": "图例中代表公司 / 说明小字的显示。"
      },
      {
        "key": "showPercent",
        "label": "占比数值",
        "type": "boolean",
        "default": true,
        "desc": "图例右侧百分比大数字的显示。",
        "publicKey": "showValueLabels",
        "publicLabel": "占比数值",
        "description": "图例右侧百分比大数字的显示。"
      },
      {
        "key": "cellGap",
        "label": "格子间距",
        "type": "number",
        "default": 8,
        "min": 3,
        "max": 14,
        "step": 1,
        "desc": "方格之间的间隙大小。",
        "publicKey": "cellGap",
        "publicLabel": "格子间距",
        "description": "方格之间的间隙大小。"
      },
      {
        "key": "accentColor",
        "label": "主题色",
        "type": "color",
        "default": "#7a5ae0",
        "options": [
          "#7a5ae0",
          "#5b8def",
          "#46b083",
          "#e0a23a",
          "#e8503a"
        ],
        "desc": "标题点 / 聚焦描边的主题色（不改各类别自身配色）。",
        "publicKey": "accentColor",
        "publicLabel": "主题色",
        "description": "标题点 / 聚焦描边的主题色（不改各类别自身配色）。"
      },
      {
        "key": "showCaption",
        "label": "装饰文案",
        "type": "boolean",
        "default": true,
        "desc": "底部 */ … /* 说明文案的显示。",
        "publicKey": "showCaption",
        "publicLabel": "装饰文案",
        "description": "底部 */ … /* 说明文案的显示。"
      }
    ],
    "defaultProps": {
      "kicker": "横向透视 · 资金去向",
      "tone": "violet",
      "title": "100 美元，流向何处",
      "en": "Where Every Dollar Goes",
      "cn": "把全年大额融资视作 100 份，看资金如何分配",
      "unitNote": "每格 = 全年大额融资的 1%",
      "items": [
        {
          "label": "通用大模型",
          "value": 45,
          "color": "#5b8def",
          "meta": "OpenAI / Anthropic / xAI"
        },
        {
          "label": "AI 基础设施 · 算力",
          "value": 24,
          "color": "#46b083",
          "meta": "CoreWeave / Scale"
        },
        {
          "label": "垂直应用层",
          "value": 16,
          "color": "#e0a23a",
          "meta": "Copilot / 搜索 / Agent"
        },
        {
          "label": "AI 芯片",
          "value": 9,
          "color": "#7a5ae0",
          "meta": "Groq / 定制算力"
        },
        {
          "label": "具身智能 · 机器人",
          "value": 6,
          "color": "#e8503a",
          "meta": "Figure / 通用机器人"
        }
      ],
      "caption": "像形图 · 近七成资金集中在大模型与算力两端",
      "itemCount": 5,
      "highlight": false,
      "highlightIndex": 0,
      "showLegend": true,
      "showMeta": true,
      "showPercent": true,
      "cellGap": 8,
      "accentColor": "#7a5ae0",
      "showCaption": true
    }
  },
  {
    "key": "theme01_page073",
    "themeKey": "theme01",
    "pageNumber": 73,
    "layout": "THEME01-073",
    "slot": "editorial",
    "label": "专题特写 · AI Agent",
    "bgClass": "",
    "controls": [
      {
        "key": "imageSide",
        "label": "图片位置",
        "type": "select",
        "default": "right",
        "options": [
          {
            "value": "right",
            "label": "图右文左"
          },
          {
            "value": "left",
            "label": "图左文右"
          }
        ],
        "desc": "图片栏放在左侧还是右侧。",
        "publicKey": "imageSide",
        "publicLabel": "图片位置",
        "description": "图片栏放在左侧还是右侧。"
      },
      {
        "key": "imageSlotCount",
        "label": "图片数量",
        "type": "number",
        "default": 2,
        "min": 0,
        "max": 3,
        "step": 1,
        "desc": "图片槽数量：1 张为单图特写，2–3 张为倾斜叠压拼贴，0 张为纯文字大留白。",
        "publicKey": "imageSlotCount",
        "publicLabel": "图片数量",
        "description": "图片槽数量：1 张为单图特写，2–3 张为倾斜叠压拼贴，0 张为纯文字大留白。"
      },
      {
        "key": "imageFit",
        "label": "图片填充",
        "type": "select",
        "default": "cover",
        "options": [
          {
            "value": "cover",
            "label": "裁剪填满"
          },
          {
            "value": "contain",
            "label": "完整自适应"
          }
        ],
        "desc": "图片填充方式：裁剪填满铺满版面，完整自适应按原始比例显示。",
        "publicKey": "imageFit",
        "publicLabel": "图片填充",
        "description": "图片填充方式：裁剪填满铺满版面，完整自适应按原始比例显示。"
      },
      {
        "key": "images",
        "label": "图片",
        "type": "images",
        "countKey": "imageSlotCount",
        "desc": "上传专题图片，槽位自适应图片比例不变形。",
        "publicKey": "images",
        "publicLabel": "图片",
        "description": "上传专题图片，槽位自适应图片比例不变形。"
      },
      {
        "key": "statCount",
        "label": "数据贴纸",
        "type": "number",
        "default": 2,
        "min": 0,
        "max": 2,
        "step": 1,
        "desc": "正文下方倾斜数据贴纸的数量。",
        "publicKey": "statCount",
        "publicLabel": "数据贴纸",
        "description": "正文下方倾斜数据贴纸的数量。"
      },
      {
        "key": "showQuote",
        "label": "引述金句",
        "type": "boolean",
        "default": true,
        "desc": "正文与数据之间引述金句条的显示。",
        "publicKey": "showQuote",
        "publicLabel": "引述金句",
        "description": "正文与数据之间引述金句条的显示。"
      },
      {
        "key": "showGhost",
        "label": "巨型刊号",
        "type": "boolean",
        "default": true,
        "desc": "文字栏背后超大幽灵刊号数字的显示。",
        "publicKey": "showGhost",
        "publicLabel": "巨型刊号",
        "description": "文字栏背后超大幽灵刊号数字的显示。"
      },
      {
        "key": "showHighlighter",
        "label": "荧光高亮",
        "type": "boolean",
        "default": true,
        "desc": "是否给导语关键词加荧光底纹。",
        "publicKey": "showHighlighter",
        "publicLabel": "荧光高亮",
        "description": "是否给导语关键词加荧光底纹。"
      },
      {
        "key": "accentColor",
        "label": "主题色",
        "type": "color",
        "default": "#46b083",
        "options": [
          "#46b083",
          "#5b8def",
          "#e0a23a",
          "#e8503a",
          "#7a5ae0"
        ],
        "desc": "刊号、荧光、引述竖条与图片边框的主题色。",
        "publicKey": "accentColor",
        "publicLabel": "主题色",
        "description": "刊号、荧光、引述竖条与图片边框的主题色。"
      },
      {
        "key": "showCaption",
        "label": "装饰文案",
        "type": "boolean",
        "default": true,
        "desc": "底部 */ … /* 说明文案的显示。",
        "publicKey": "showCaption",
        "publicLabel": "装饰文案",
        "description": "底部 */ … /* 说明文案的显示。"
      }
    ],
    "defaultProps": {
      "index": "04",
      "kicker": "前沿专题 · AI Agent",
      "title": "软件正在长出手脚",
      "en": "The Agentic Turn",
      "lead": "从「回答问题」到「替你完成任务」，自主智能体让软件第一次能够调用工具、连续决策——资本正把它当作应用层的下一个入口。",
      "highlightWord": "下一个入口",
      "pullQuote": "会用工具的 AI，才真正开始改变工作方式。",
      "stats": [
        {
          "value": "38",
          "unit": "亿",
          "label": "Agent 赛道年度融资"
        },
        {
          "value": "4.1",
          "unit": "×",
          "label": "同比融资增速"
        }
      ],
      "images": [
        "",
        "",
        ""
      ],
      "imgCaption": "专题图片 · 自主智能体如何重塑软件",
      "imageSide": "right",
      "imageSlotCount": 2,
      "imageFit": "cover",
      "statCount": 2,
      "showQuote": true,
      "showGhost": true,
      "showHighlighter": true,
      "accentColor": "#46b083",
      "showCaption": true
    }
  },
  {
    "key": "theme01_page074",
    "themeKey": "theme01",
    "pageNumber": 74,
    "layout": "THEME01-074",
    "slot": "arc-gauges",
    "label": "环形仪表 · 关键比率",
    "bgClass": "",
    "controls": [
      {
        "key": "itemCount",
        "label": "仪表数量",
        "type": "number",
        "default": 3,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "一行并排的环形仪表数量。",
        "publicKey": "itemCount",
        "publicLabel": "仪表数量",
        "description": "一行并排的环形仪表数量。"
      },
      {
        "key": "highlight",
        "label": "重点强调",
        "type": "boolean",
        "default": true,
        "desc": "是否把其中一个仪表渲染成发光强调款（其余柔化）。",
        "publicKey": "highlight",
        "publicLabel": "重点强调",
        "description": "是否把其中一个仪表渲染成发光强调款（其余柔化）。"
      },
      {
        "key": "highlightIndex",
        "label": "强调第几个",
        "type": "number",
        "default": 0,
        "min": 0,
        "max": 3,
        "step": 1,
        "desc": "被强调的仪表序号（从 0 开始）。",
        "publicKey": "highlightIndex",
        "publicLabel": "强调第几个",
        "description": "被强调的仪表序号（从 0 开始）。"
      },
      {
        "key": "showTrack",
        "label": "底环轨道",
        "type": "boolean",
        "default": true,
        "desc": "环形底部灰色轨道的显示。",
        "publicKey": "showGuide",
        "publicLabel": "底环轨道",
        "description": "环形底部灰色轨道的显示。"
      },
      {
        "key": "arcWidth",
        "label": "环线粗细",
        "type": "number",
        "default": 24,
        "min": 14,
        "max": 34,
        "step": 2,
        "desc": "仪表环线的粗细。",
        "publicKey": "arcWidth",
        "publicLabel": "环线粗细",
        "description": "仪表环线的粗细。"
      },
      {
        "key": "accentColor",
        "label": "主题色",
        "type": "color",
        "default": "#5b8def",
        "options": [
          "#5b8def",
          "#46b083",
          "#e0a23a",
          "#e8503a",
          "#7a5ae0"
        ],
        "desc": "标题点与强调发光的主题色（不改各仪表自身配色）。",
        "publicKey": "accentColor",
        "publicLabel": "主题色",
        "description": "标题点与强调发光的主题色（不改各仪表自身配色）。"
      },
      {
        "key": "showCaption",
        "label": "装饰文案",
        "type": "boolean",
        "default": true,
        "desc": "底部 */ … /* 说明文案的显示。",
        "publicKey": "showCaption",
        "publicLabel": "装饰文案",
        "description": "底部 */ … /* 说明文案的显示。"
      }
    ],
    "defaultProps": {
      "kicker": "横向透视 · 关键比率",
      "tone": "blue",
      "title": "三个数字，看清资本格局",
      "en": "Key Ratios at a Glance",
      "cn": "集中度、赛道与地理，一组环形仪表读懂结构",
      "gauges": [
        {
          "value": 78,
          "label": "资金集中度",
          "sub": "Top 10 占全年融资",
          "color": "#5b8def"
        },
        {
          "value": 45,
          "label": "大模型占比",
          "sub": "通用大模型 / 全赛道",
          "color": "#46b083"
        },
        {
          "value": 64,
          "label": "地理集中",
          "sub": "旧金山湾区占比",
          "color": "#e0a23a"
        }
      ],
      "unit": "%",
      "caption": "环形仪表 · 资金高度集中，结构性特征鲜明",
      "itemCount": 3,
      "highlight": true,
      "highlightIndex": 0,
      "showTrack": true,
      "arcWidth": 24,
      "accentColor": "#5b8def",
      "showCaption": true
    }
  },
  {
    "key": "theme01_page075",
    "themeKey": "theme01",
    "pageNumber": 75,
    "layout": "THEME01-075",
    "slot": "grouped-columns",
    "label": "同比对比 · 分组柱状图",
    "bgClass": "",
    "controls": [
      {
        "key": "itemCount",
        "label": "类别数量",
        "type": "number",
        "default": 5,
        "min": 3,
        "max": 5,
        "step": 1,
        "desc": "横轴上的类别（柱组）数量。",
        "publicKey": "itemCount",
        "publicLabel": "类别数量",
        "description": "横轴上的类别（柱组）数量。"
      },
      {
        "key": "seriesCount",
        "label": "系列数量",
        "type": "number",
        "default": 2,
        "min": 1,
        "max": 2,
        "step": 1,
        "desc": "每个类别并排的柱子数量（1 = 仅最新年，2 = 同比对比）。",
        "publicKey": "seriesCount",
        "publicLabel": "系列数量",
        "description": "每个类别并排的柱子数量（1 = 仅最新年，2 = 同比对比）。"
      },
      {
        "key": "showValues",
        "label": "数值标签",
        "type": "boolean",
        "default": true,
        "desc": "每根柱顶数值胶囊的显示。",
        "publicKey": "showValueLabels",
        "publicLabel": "数值标签",
        "description": "每根柱顶数值胶囊的显示。"
      },
      {
        "key": "showGrid",
        "label": "网格刻度",
        "type": "boolean",
        "default": true,
        "desc": "绘图区水平网格线与左侧刻度的显示。",
        "publicKey": "showGrid",
        "publicLabel": "网格刻度",
        "description": "绘图区水平网格线与左侧刻度的显示。"
      },
      {
        "key": "showLegend",
        "label": "顶部图例",
        "type": "boolean",
        "default": true,
        "desc": "顶部系列图例的显示。",
        "publicKey": "showLegend",
        "publicLabel": "顶部图例",
        "description": "顶部系列图例的显示。"
      },
      {
        "key": "accentColor",
        "label": "主题色",
        "type": "color",
        "default": "#46b083",
        "options": [
          "#46b083",
          "#5b8def",
          "#e0a23a",
          "#e8503a",
          "#7a5ae0"
        ],
        "desc": "最新系列柱子与标题点的主题色（早期系列保持灰调）。",
        "publicKey": "accentColor",
        "publicLabel": "主题色",
        "description": "最新系列柱子与标题点的主题色（早期系列保持灰调）。"
      },
      {
        "key": "showCaption",
        "label": "装饰文案",
        "type": "boolean",
        "default": true,
        "desc": "底部 */ … /* 说明文案的显示。",
        "publicKey": "showCaption",
        "publicLabel": "装饰文案",
        "description": "底部 */ … /* 说明文案的显示。"
      }
    ],
    "defaultProps": {
      "kicker": "市场全景 · 同比对比",
      "tone": "green",
      "title": "一年之间，赛道翻倍",
      "en": "Year-over-Year by Track",
      "cn": "各赛道 2023 与 2024 大额融资额对比（亿美元）",
      "series": [
        {
          "name": "2023",
          "color": "#9aa0ad"
        },
        {
          "name": "2024",
          "color": "#46b083"
        }
      ],
      "categories": [
        {
          "label": "通用大模型",
          "values": [
            230,
            420
          ]
        },
        {
          "label": "基础设施 · 算力",
          "values": [
            120,
            255
          ]
        },
        {
          "label": "垂直应用",
          "values": [
            95,
            150
          ]
        },
        {
          "label": "AI 芯片",
          "values": [
            60,
            97
          ]
        },
        {
          "label": "具身 · 机器人",
          "values": [
            18,
            70
          ]
        }
      ],
      "unit": "亿",
      "axisMax": 450,
      "tickStep": 150,
      "caption": "柱状图 · 五大赛道全线放量，大模型与算力增量最猛",
      "itemCount": 5,
      "seriesCount": 2,
      "showValues": true,
      "showGrid": true,
      "showLegend": true,
      "accentColor": "#46b083",
      "showCaption": true
    }
  },
  {
    "key": "theme01_page076",
    "themeKey": "theme01",
    "pageNumber": 76,
    "layout": "THEME01-076",
    "slot": "filmstrip",
    "label": "影像长卷 · 关键时刻",
    "bgClass": "",
    "controls": [
      {
        "key": "imageSlotCount",
        "label": "画面数量",
        "type": "number",
        "default": 4,
        "min": 2,
        "max": 5,
        "step": 1,
        "desc": "长卷中并排的画面（图片帧）数量。",
        "publicKey": "imageSlotCount",
        "publicLabel": "画面数量",
        "description": "长卷中并排的画面（图片帧）数量。"
      },
      {
        "key": "imageFit",
        "label": "图片填充",
        "type": "select",
        "default": "cover",
        "options": [
          {
            "value": "cover",
            "label": "裁剪填满"
          },
          {
            "value": "contain",
            "label": "完整自适应"
          }
        ],
        "desc": "图片填充方式：裁剪填满铺满画面，完整自适应按原始比例显示。",
        "publicKey": "imageFit",
        "publicLabel": "图片填充",
        "description": "图片填充方式：裁剪填满铺满画面，完整自适应按原始比例显示。"
      },
      {
        "key": "images",
        "label": "图片",
        "type": "images",
        "countKey": "imageSlotCount",
        "desc": "上传画面图片，槽位自适应图片比例不变形。",
        "publicKey": "images",
        "publicLabel": "图片",
        "description": "上传画面图片，槽位自适应图片比例不变形。"
      },
      {
        "key": "highlight",
        "label": "主画面",
        "type": "boolean",
        "default": true,
        "desc": "是否把其中一帧加宽并以主题色描边，作为主画面。",
        "publicKey": "highlight",
        "publicLabel": "主画面",
        "description": "是否把其中一帧加宽并以主题色描边，作为主画面。"
      },
      {
        "key": "highlightIndex",
        "label": "主画面第几帧",
        "type": "number",
        "default": 0,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "被加宽强调的主画面序号（从 0 开始）。",
        "publicKey": "highlightIndex",
        "publicLabel": "主画面第几帧",
        "description": "被加宽强调的主画面序号（从 0 开始）。"
      },
      {
        "key": "showIndex",
        "label": "编号角标",
        "type": "boolean",
        "default": true,
        "desc": "每帧左上角 01 / 02 编号角标的显示。",
        "publicKey": "showIndex",
        "publicLabel": "编号角标",
        "description": "每帧左上角 01 / 02 编号角标的显示。"
      },
      {
        "key": "showFrameCaption",
        "label": "画面说明",
        "type": "boolean",
        "default": true,
        "desc": "每帧底部说明条 / 标签的显示。",
        "publicKey": "showFrameCaption",
        "publicLabel": "画面说明",
        "description": "每帧底部说明条 / 标签的显示。"
      },
      {
        "key": "accentColor",
        "label": "主题色",
        "type": "color",
        "default": "#7a5ae0",
        "options": [
          "#7a5ae0",
          "#5b8def",
          "#46b083",
          "#e0a23a",
          "#e8503a"
        ],
        "desc": "编号角标、标签与主画面描边的主题色。",
        "publicKey": "accentColor",
        "publicLabel": "主题色",
        "description": "编号角标、标签与主画面描边的主题色。"
      },
      {
        "key": "showCaption",
        "label": "装饰文案",
        "type": "boolean",
        "default": true,
        "desc": "底部 */ … /* 说明文案的显示。",
        "publicKey": "showCaption",
        "publicLabel": "装饰文案",
        "description": "底部 */ … /* 说明文案的显示。"
      }
    ],
    "defaultProps": {
      "kicker": "典型案例 · 影像长卷",
      "tone": "violet",
      "title": "2024，被资本改写的一年",
      "en": "The Year in Frames",
      "cn": "四个关键场景，串起全年最受瞩目的融资时刻",
      "frames": [
        {
          "caption": "OpenAI · 660 亿美元新一轮",
          "tag": "通用大模型"
        },
        {
          "caption": "Anthropic · 安全对齐的押注",
          "tag": "通用大模型"
        },
        {
          "caption": "xAI · 算力军备竞赛",
          "tag": "算力"
        },
        {
          "caption": "CoreWeave · 卖铲子的人",
          "tag": "基础设施"
        }
      ],
      "images": [
        "",
        "",
        "",
        "",
        ""
      ],
      "caption": "影像长卷 · 一帧一事件，串起全年资本主线",
      "imageSlotCount": 4,
      "imageFit": "cover",
      "highlight": true,
      "highlightIndex": 0,
      "showIndex": true,
      "showFrameCaption": true,
      "accentColor": "#7a5ae0",
      "showCaption": true
    }
  },
  {
    "key": "theme01_page077",
    "themeKey": "theme01",
    "pageNumber": 77,
    "layout": "THEME01-077",
    "slot": "diverging",
    "label": "多空信号 · 双向条形",
    "bgClass": "",
    "controls": [
      {
        "key": "itemCount",
        "label": "因子数量",
        "type": "number",
        "default": 6,
        "min": 4,
        "max": 6,
        "step": 1,
        "desc": "参与多空对比的因子数量。",
        "publicKey": "itemCount",
        "publicLabel": "因子数量",
        "description": "参与多空对比的因子数量。"
      },
      {
        "key": "sortDesc",
        "label": "按强度排序",
        "type": "boolean",
        "default": true,
        "desc": "是否从最强推力到最强阻力排序（关闭则保留原始顺序）。",
        "publicKey": "sortDesc",
        "publicLabel": "按强度排序",
        "description": "是否从最强推力到最强阻力排序（关闭则保留原始顺序）。"
      },
      {
        "key": "showValues",
        "label": "强度数值",
        "type": "boolean",
        "default": true,
        "desc": "每根条上强度数值胶囊的显示。",
        "publicKey": "showValueLabels",
        "publicLabel": "强度数值",
        "description": "每根条上强度数值胶囊的显示。"
      },
      {
        "key": "showNote",
        "label": "副标说明",
        "type": "boolean",
        "default": true,
        "desc": "每项因子名称下方说明小字的显示。",
        "publicKey": "showNote",
        "publicLabel": "副标说明",
        "description": "每项因子名称下方说明小字的显示。"
      },
      {
        "key": "highlight",
        "label": "重点强调",
        "type": "boolean",
        "default": true,
        "desc": "是否把其中一项渲染成发光强调条。",
        "publicKey": "highlight",
        "publicLabel": "重点强调",
        "description": "是否把其中一项渲染成发光强调条。"
      },
      {
        "key": "highlightIndex",
        "label": "强调第几项",
        "type": "number",
        "default": 5,
        "min": 0,
        "max": 5,
        "step": 1,
        "desc": "被强调的因子序号（按当前排序后从 0 开始）。",
        "publicKey": "highlightIndex",
        "publicLabel": "强调第几项",
        "description": "被强调的因子序号（按当前排序后从 0 开始）。"
      },
      {
        "key": "showCaption",
        "label": "装饰文案",
        "type": "boolean",
        "default": true,
        "desc": "底部 */ … /* 说明文案的显示。",
        "publicKey": "showCaption",
        "publicLabel": "装饰文案",
        "description": "底部 */ … /* 说明文案的显示。"
      }
    ],
    "defaultProps": {
      "kicker": "风险与展望 · 多空信号",
      "tone": "red",
      "title": "推力与阻力，谁占上风",
      "en": "Tailwinds vs Headwinds",
      "cn": "把驱动与风险放在同一根轴上，看资本天平的倾斜",
      "leftLabel": "阻力 · 利空",
      "rightLabel": "推力 · 利好",
      "posColor": "#46b083",
      "negColor": "#e8503a",
      "factors": [
        {
          "label": "算力需求爆发",
          "value": 88,
          "note": "基建与芯片确定性强"
        },
        {
          "label": "企业 AI 预算上行",
          "value": 72,
          "note": "Copilot / Agent 渗透"
        },
        {
          "label": "IPO 退出窗口临近",
          "value": 55,
          "note": "一级估值待二级检验"
        },
        {
          "label": "巨头资源挤压",
          "value": -46,
          "note": "通用大模型马太效应"
        },
        {
          "label": "监管不确定性",
          "value": -58,
          "note": "安全 / 出口管制"
        },
        {
          "label": "估值泡沫高企",
          "value": -80,
          "note": "市销率超千倍"
        }
      ],
      "axisMax": 100,
      "caption": "双向条形 · 短期推力更强，但泡沫与监管是最大变量",
      "itemCount": 6,
      "sortDesc": true,
      "showValues": true,
      "showNote": true,
      "highlight": true,
      "highlightIndex": 5,
      "showCaption": true
    }
  },
  {
    "key": "theme01_page078",
    "themeKey": "theme01",
    "pageNumber": 78,
    "layout": "THEME01-078",
    "slot": "polar-rose",
    "label": "玫瑰图 · 赛道占比",
    "bgClass": "",
    "controls": [
      {
        "key": "itemCount",
        "label": "花瓣数量",
        "type": "number",
        "default": 5,
        "min": 3,
        "max": 5,
        "step": 1,
        "desc": "参与玫瑰图的分类数量（其余并入末项）。",
        "publicKey": "categoryCount",
        "publicLabel": "花瓣数量",
        "description": "参与玫瑰图的分类数量（其余并入末项）。"
      },
      {
        "key": "radiusScale",
        "label": "半径标度",
        "type": "select",
        "default": "area",
        "options": [
          {
            "value": "area",
            "label": "面积正比"
          },
          {
            "value": "linear",
            "label": "半径正比"
          }
        ],
        "desc": "面积正比（半径取平方根，弱化巨头）或半径正比（直接线性，放大差距）。",
        "publicKey": "radiusScale",
        "publicLabel": "半径标度",
        "description": "面积正比（半径取平方根，弱化巨头）或半径正比（直接线性，放大差距）。"
      },
      {
        "key": "highlight",
        "label": "重点强调",
        "type": "boolean",
        "default": true,
        "desc": "是否高亮其中一瓣（放大 + 辉光，其余淡出）。",
        "publicKey": "highlight",
        "publicLabel": "重点强调",
        "description": "是否高亮其中一瓣（放大 + 辉光，其余淡出）。"
      },
      {
        "key": "highlightIndex",
        "label": "强调第几瓣",
        "type": "number",
        "default": 0,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "被强调的分类序号（从 0 开始）。",
        "publicKey": "highlightIndex",
        "publicLabel": "强调第几瓣",
        "description": "被强调的分类序号（从 0 开始）。"
      },
      {
        "key": "showRings",
        "label": "刻度环",
        "type": "boolean",
        "default": true,
        "desc": "同心刻度圆环与数值刻度的显示。",
        "publicKey": "showValueLabels",
        "publicLabel": "刻度环",
        "description": "同心刻度圆环与数值刻度的显示。"
      },
      {
        "key": "showValues",
        "label": "花瓣数值",
        "type": "boolean",
        "default": true,
        "desc": "每瓣尖端数值胶囊的显示。",
        "publicKey": "showValueLabels2",
        "publicLabel": "花瓣数值",
        "description": "每瓣尖端数值胶囊的显示。"
      },
      {
        "key": "showCaption",
        "label": "装饰文案",
        "type": "boolean",
        "default": true,
        "desc": "底部 */ … /* 说明文案的显示。",
        "publicKey": "showCaption",
        "publicLabel": "装饰文案",
        "description": "底部 */ … /* 说明文案的显示。"
      }
    ],
    "defaultProps": {
      "kicker": "# 横向透视",
      "tone": "blue",
      "title": "赛道分布 · 玫瑰图",
      "en": "Funding by Sector · Rose",
      "cn": "以花瓣半径丈量各赛道吸金体量",
      "segments": [
        {
          "label": "通用大模型",
          "en": "Foundation Model",
          "value": 420,
          "color": "#5b8def"
        },
        {
          "label": "垂直应用",
          "en": "Vertical AI",
          "value": 245,
          "color": "#46b083"
        },
        {
          "label": "AI 基础设施",
          "en": "Infrastructure",
          "value": 158,
          "color": "#e0a23a"
        },
        {
          "label": "AI 芯片",
          "en": "Hardware",
          "value": 97,
          "color": "#e8503a"
        },
        {
          "label": "工具 / 安全",
          "en": "Tooling / Safety",
          "value": 50,
          "color": "#7a5ae0"
        }
      ],
      "unit": "亿",
      "caption": "玫瑰图 · 半径越长越吸金，通用大模型的花瓣一枝独秀",
      "itemCount": 5,
      "radiusScale": "area",
      "highlight": true,
      "highlightIndex": 0,
      "showRings": true,
      "showValues": true,
      "showCaption": true
    }
  },
  {
    "key": "theme01_page079",
    "themeKey": "theme01",
    "pageNumber": 79,
    "layout": "THEME01-079",
    "slot": "donut",
    "label": "甜甜圈 · 资金来源占比",
    "bgClass": "",
    "controls": [
      {
        "key": "chartType",
        "label": "图表类型",
        "type": "select",
        "default": "donut",
        "options": [
          {
            "value": "donut",
            "label": "甜甜圈"
          },
          {
            "value": "pie",
            "label": "饼图"
          }
        ],
        "desc": "甜甜圈（圆环 + 环心标注）或实心饼图。",
        "publicKey": "chartType",
        "publicLabel": "图表类型",
        "description": "甜甜圈（圆环 + 环心标注）或实心饼图。"
      },
      {
        "key": "itemCount",
        "label": "类目数量",
        "type": "number",
        "default": 5,
        "min": 3,
        "max": 5,
        "step": 1,
        "desc": "展示的类目数；少于总数时其余并入「其它」。",
        "publicKey": "itemCount",
        "publicLabel": "类目数量",
        "description": "展示的类目数；少于总数时其余并入「其它」。"
      },
      {
        "key": "highlight",
        "label": "重点强调",
        "type": "boolean",
        "default": true,
        "desc": "是否高亮某一扇段（外扩 + 发光）。",
        "publicKey": "highlight",
        "publicLabel": "重点强调",
        "description": "是否高亮某一扇段（外扩 + 发光）。"
      },
      {
        "key": "highlightIndex",
        "label": "强调第几个",
        "type": "number",
        "default": 1,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "被强调的类目序号（0 基）。",
        "publicKey": "highlightIndex",
        "publicLabel": "强调第几个",
        "description": "被强调的类目序号（0 基）。"
      },
      {
        "key": "gapAngle",
        "label": "扇段间隙",
        "type": "number",
        "default": 2,
        "min": 0,
        "max": 6,
        "step": 1,
        "desc": "相邻扇段之间的留白角度。",
        "publicKey": "gapAngle",
        "publicLabel": "扇段间隙",
        "description": "相邻扇段之间的留白角度。"
      },
      {
        "key": "showValues",
        "label": "图例数值",
        "type": "boolean",
        "default": true,
        "desc": "图例行右侧数值与占比条的显示。",
        "publicKey": "showValueLabels",
        "publicLabel": "图例数值",
        "description": "图例行右侧数值与占比条的显示。"
      },
      {
        "key": "showNote",
        "label": "核心发现",
        "type": "boolean",
        "default": true,
        "desc": "底部「核心发现」说明卡的显示。",
        "publicKey": "showNote",
        "publicLabel": "核心发现",
        "description": "底部「核心发现」说明卡的显示。"
      },
      {
        "key": "accentColor",
        "label": "主题色",
        "type": "color",
        "default": "#7a5ae0",
        "options": [
          "#7a5ae0",
          "#5b8def",
          "#46b083",
          "#e0a23a",
          "#e8503a"
        ],
        "desc": "标签、环心与核心发现卡的主题色（不影响各扇段固有配色）。",
        "publicKey": "accentColor",
        "publicLabel": "主题色",
        "description": "标签、环心与核心发现卡的主题色（不影响各扇段固有配色）。"
      },
      {
        "key": "showCaption",
        "label": "装饰文案",
        "type": "boolean",
        "default": true,
        "desc": "底部 */ … /* 说明文案的显示。",
        "publicKey": "showCaption",
        "publicLabel": "装饰文案",
        "description": "底部 */ … /* 说明文案的显示。"
      }
    ],
    "defaultProps": {
      "kicker": "市场全景 · 资金来源",
      "tone": "violet",
      "title": "钱从哪里来 · 投资方类型占比",
      "en": "Capital by Investor Type",
      "cn": "巨额资金背后，谁在下注",
      "unit": "亿",
      "segments": [
        {
          "label": "风险投资 VC",
          "en": "Venture Capital",
          "value": 268
        },
        {
          "label": "企业战投 CVC",
          "en": "Corporate",
          "value": 196
        },
        {
          "label": "主权 / 政府基金",
          "en": "Sovereign",
          "value": 118
        },
        {
          "label": "对冲基金 / 资管",
          "en": "Hedge & AM",
          "value": 84
        },
        {
          "label": "家族办公室 · 个人",
          "en": "Family Office",
          "value": 42
        }
      ],
      "centerLabel": "资金合计",
      "note": "企业战投（微软、英伟达、亚马逊）首次逼近传统 VC——巨头用资本+算力换股权，把生态绑定在自己的云上。",
      "chartType": "donut",
      "itemCount": 5,
      "highlight": true,
      "highlightIndex": 1,
      "gapAngle": 2,
      "showValues": true,
      "showNote": true,
      "accentColor": "#7a5ae0",
      "showCaption": true,
      "caption": "甜甜圈 · 企业战投逼近 VC，资本与算力深度绑定"
    }
  },
  {
    "key": "theme01_page080",
    "themeKey": "theme01",
    "pageNumber": 80,
    "layout": "THEME01-080",
    "slot": "mekko",
    "label": "赛道 × 阶段 · 可变宽堆叠",
    "bgClass": "",
    "controls": [
      {
        "key": "itemCount",
        "label": "列数量",
        "type": "number",
        "default": 5,
        "min": 3,
        "max": 5,
        "step": 1,
        "desc": "参与对比的分类列数量（其余略去）。",
        "publicKey": "categoryCount",
        "publicLabel": "列数量",
        "description": "参与对比的分类列数量（其余略去）。"
      },
      {
        "key": "highlight",
        "label": "重点强调",
        "type": "boolean",
        "default": true,
        "desc": "是否高亮其中一列（描边 + 抬升，其余淡出）。",
        "publicKey": "highlight",
        "publicLabel": "重点强调",
        "description": "是否高亮其中一列（描边 + 抬升，其余淡出）。"
      },
      {
        "key": "highlightIndex",
        "label": "强调第几列",
        "type": "number",
        "default": 0,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "被强调的分类列序号（从 0 开始）。",
        "publicKey": "highlightIndex",
        "publicLabel": "强调第几列",
        "description": "被强调的分类列序号（从 0 开始）。"
      },
      {
        "key": "showCellPct",
        "label": "分段占比",
        "type": "boolean",
        "default": true,
        "desc": "每个色块内阶段占比数字的显示。",
        "publicKey": "showCellPct",
        "publicLabel": "分段占比",
        "description": "每个色块内阶段占比数字的显示。"
      },
      {
        "key": "showAxis",
        "label": "左侧百分轴",
        "type": "boolean",
        "default": true,
        "desc": "左侧 0–100% 纵轴刻度的显示。",
        "publicKey": "showAxis",
        "publicLabel": "左侧百分轴",
        "description": "左侧 0–100% 纵轴刻度的显示。"
      },
      {
        "key": "palette",
        "label": "阶段配色",
        "type": "palette",
        "default": [
          "#5b8def",
          "#46b083",
          "#e0a23a"
        ],
        "options": [
          [
            "#5b8def",
            "#46b083",
            "#e0a23a"
          ],
          [
            "#7a5ae0",
            "#5b8def",
            "#46b083"
          ],
          [
            "#e8503a",
            "#e0a23a",
            "#46b083"
          ],
          [
            "#2b2b30",
            "#5b8def",
            "#9aa0ad"
          ]
        ],
        "desc": "三个阶段（后期 / 成长 / 早期）的色序。",
        "publicKey": "palette",
        "publicLabel": "阶段配色",
        "description": "三个阶段（后期 / 成长 / 早期）的色序。"
      },
      {
        "key": "showCaption",
        "label": "装饰文案",
        "type": "boolean",
        "default": true,
        "desc": "底部 */ … /* 说明文案的显示。",
        "publicKey": "showCaption",
        "publicLabel": "装饰文案",
        "description": "底部 */ … /* 说明文案的显示。"
      }
    ],
    "defaultProps": {
      "kicker": "# 横向透视",
      "tone": "blue",
      "title": "赛道 × 阶段 · 可变宽堆叠",
      "en": "Sector × Stage · Marimekko",
      "cn": "列宽看体量，分段看轮次结构",
      "stages": [
        "后期 · Pre-IPO",
        "成长期",
        "早期 · 种子"
      ],
      "categories": [
        {
          "label": "通用大模型",
          "total": 420,
          "parts": [
            62,
            30,
            8
          ]
        },
        {
          "label": "垂直应用",
          "total": 245,
          "parts": [
            28,
            46,
            26
          ]
        },
        {
          "label": "AI 基础设施",
          "total": 158,
          "parts": [
            52,
            36,
            12
          ]
        },
        {
          "label": "AI 芯片",
          "total": 97,
          "parts": [
            44,
            40,
            16
          ]
        },
        {
          "label": "工具 / 安全",
          "total": 50,
          "parts": [
            18,
            40,
            42
          ]
        }
      ],
      "palette": [
        "#5b8def",
        "#46b083",
        "#e0a23a"
      ],
      "caption": "可变宽堆叠 · 大模型不仅最吸金，且资金高度押注后期；越垂直，越早期",
      "itemCount": 5,
      "highlight": true,
      "highlightIndex": 0,
      "showCellPct": true,
      "showAxis": true,
      "showCaption": true
    }
  },
  {
    "key": "theme01_page081",
    "themeKey": "theme01",
    "pageNumber": 81,
    "layout": "THEME01-081",
    "slot": "triptych",
    "label": "满版影像 · 三联现场",
    "bgClass": "",
    "controls": [
      {
        "key": "imageSlotCount",
        "label": "画面数量",
        "type": "number",
        "default": 3,
        "min": 1,
        "max": 3,
        "step": 1,
        "desc": "满版画面联数（1 单幅 / 2 双联 / 3 三联），每幅自适应所配图片比例。",
        "publicKey": "imageSlotCount",
        "publicLabel": "画面数量",
        "description": "满版画面联数（1 单幅 / 2 双联 / 3 三联），每幅自适应所配图片比例。"
      },
      {
        "key": "imageFit",
        "label": "图片填充",
        "type": "select",
        "default": "cover",
        "options": [
          {
            "value": "cover",
            "label": "裁剪填满"
          },
          {
            "value": "contain",
            "label": "完整自适应"
          }
        ],
        "desc": "图片填充方式：裁剪填满铺满画面，完整自适应按原始比例显示。",
        "publicKey": "imageFit",
        "publicLabel": "图片填充",
        "description": "图片填充方式：裁剪填满铺满画面，完整自适应按原始比例显示。"
      },
      {
        "key": "images",
        "label": "图片",
        "type": "images",
        "countKey": "imageSlotCount",
        "desc": "上传满版画面，槽位自适应图片比例不变形。",
        "publicKey": "images",
        "publicLabel": "图片",
        "description": "上传满版画面，槽位自适应图片比例不变形。"
      },
      {
        "key": "highlight",
        "label": "重点强调",
        "type": "boolean",
        "default": true,
        "desc": "是否高亮其中一联（主题色描边 + 强调标签）。",
        "publicKey": "highlight",
        "publicLabel": "重点强调",
        "description": "是否高亮其中一联（主题色描边 + 强调标签）。"
      },
      {
        "key": "highlightIndex",
        "label": "强调第几联",
        "type": "number",
        "default": 1,
        "min": 0,
        "max": 2,
        "step": 1,
        "desc": "被强调的画面序号（从 0 开始）。",
        "publicKey": "highlightIndex",
        "publicLabel": "强调第几联",
        "description": "被强调的画面序号（从 0 开始）。"
      },
      {
        "key": "accentColor",
        "label": "主题色",
        "type": "color",
        "default": "#7a5ae0",
        "options": [
          "#7a5ae0",
          "#5b8def",
          "#46b083",
          "#e0a23a",
          "#e8503a"
        ],
        "desc": "头牌、强调描边与高亮标签的颜色。",
        "publicKey": "accentColor",
        "publicLabel": "主题色",
        "description": "头牌、强调描边与高亮标签的颜色。"
      },
      {
        "key": "showIndex",
        "label": "巨型序号",
        "type": "boolean",
        "default": true,
        "desc": "每联左上角超大 01 / 02 / 03 序号的显示。",
        "publicKey": "showIndex",
        "publicLabel": "巨型序号",
        "description": "每联左上角超大 01 / 02 / 03 序号的显示。"
      },
      {
        "key": "showCaption",
        "label": "装饰文案",
        "type": "boolean",
        "default": true,
        "desc": "底部 */ … /* 说明文案的显示。",
        "publicKey": "showCaption",
        "publicLabel": "装饰文案",
        "description": "底部 */ … /* 说明文案的显示。"
      }
    ],
    "defaultProps": {
      "kicker": "前沿现场 · 资本投向何处",
      "tone": "violet",
      "title": "钱，最终砸向了这三件事",
      "en": "Where The Capital Lands",
      "panels": [
        {
          "tag": "训练集群",
          "tagTone": "blue",
          "heading": "超大规模训练",
          "sub": "十万卡级集群，是大模型的入场券"
        },
        {
          "tag": "具身智能",
          "tagTone": "violet",
          "heading": "走进物理世界",
          "sub": "人形机器人从演示走向量产"
        },
        {
          "tag": "算力基建",
          "tagTone": "amber",
          "heading": "卖铲子的人",
          "sub": "数据中心与电力成为新的稀缺"
        }
      ],
      "images": [
        "",
        "",
        ""
      ],
      "caption": "满版影像 · 训练、具身、基建——资本叙事的三个落点",
      "imageSlotCount": 3,
      "imageFit": "cover",
      "highlight": true,
      "highlightIndex": 1,
      "accentColor": "#7a5ae0",
      "showIndex": true,
      "showCaption": true
    }
  },
  {
    "key": "theme01_page082",
    "themeKey": "theme01",
    "pageNumber": 82,
    "layout": "THEME01-082",
    "slot": "type-statement",
    "label": "大字主张 · 从叙事到兑现",
    "bgClass": "",
    "controls": [
      {
        "key": "accentColor",
        "label": "主题色",
        "type": "color",
        "default": "#7a5ae0",
        "options": [
          "#7a5ae0",
          "#5b8def",
          "#46b083",
          "#e0a23a",
          "#e8503a"
        ],
        "desc": "荧光高亮、强调字与强调贴纸的颜色。",
        "publicKey": "accentColor",
        "publicLabel": "主题色",
        "description": "荧光高亮、强调字与强调贴纸的颜色。"
      },
      {
        "key": "showHighlighter",
        "label": "荧光 / 贴纸标记",
        "type": "boolean",
        "default": true,
        "desc": "关闭后高亮词回退为普通文字（仅保留删除线语义）。",
        "publicKey": "showHighlighter",
        "publicLabel": "荧光 / 贴纸标记",
        "description": "关闭后高亮词回退为普通文字（仅保留删除线语义）。"
      },
      {
        "key": "showSub",
        "label": "副文说明",
        "type": "boolean",
        "default": true,
        "desc": "主张下方说明段落的显示。",
        "publicKey": "showSub",
        "publicLabel": "副文说明",
        "description": "主张下方说明段落的显示。"
      },
      {
        "key": "statCount",
        "label": "数据贴纸数量",
        "type": "number",
        "default": 3,
        "min": 0,
        "max": 3,
        "step": 1,
        "desc": "底部数据贴纸数量（0 时只留大字主张）。",
        "publicKey": "statCount",
        "publicLabel": "数据贴纸数量",
        "description": "底部数据贴纸数量（0 时只留大字主张）。"
      },
      {
        "key": "highlight",
        "label": "重点强调",
        "type": "boolean",
        "default": true,
        "desc": "是否把其中一张数据贴纸渲染成主题色强调款。",
        "publicKey": "highlight",
        "publicLabel": "重点强调",
        "description": "是否把其中一张数据贴纸渲染成主题色强调款。"
      },
      {
        "key": "highlightIndex",
        "label": "强调第几张",
        "type": "number",
        "default": 0,
        "min": 0,
        "max": 2,
        "step": 1,
        "desc": "被强调的数据贴纸序号（从 0 开始）。",
        "publicKey": "highlightIndex",
        "publicLabel": "强调第几张",
        "description": "被强调的数据贴纸序号（从 0 开始）。"
      },
      {
        "key": "align",
        "label": "对齐",
        "type": "select",
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
        "desc": "主张文字的对齐方式。",
        "publicKey": "align",
        "publicLabel": "对齐",
        "description": "主张文字的对齐方式。"
      },
      {
        "key": "showCaption",
        "label": "装饰文案",
        "type": "boolean",
        "default": true,
        "desc": "底部 */ … /* 说明文案的显示。",
        "publicKey": "showCaption",
        "publicLabel": "装饰文案",
        "description": "底部 */ … /* 说明文案的显示。"
      }
    ],
    "defaultProps": {
      "kicker": "核心主张 · Thesis",
      "tone": "violet",
      "lines": [
        [
          {
            "t": "资本不再为 "
          },
          {
            "t": "叙事",
            "mark": "strike"
          },
          {
            "t": " 买单，"
          }
        ],
        [
          {
            "t": "开始为 "
          },
          {
            "t": "兑现",
            "mark": "hi"
          },
          {
            "t": " 定价。"
          }
        ]
      ],
      "sub": "2025 年起，估值锚点从「想象空间」转向「收入与现金流」——能讲故事的公司很多，能持续交付的不多。资本的下一程，押注确定性。",
      "stats": [
        {
          "value": "1000×+",
          "label": "头部市销率"
        },
        {
          "value": ">60%",
          "label": "资金流向 Top 5"
        },
        {
          "value": "2026",
          "label": "IPO 窗口开启"
        }
      ],
      "caption": "大字主张 · 从赌叙事，到看兑现",
      "accentColor": "#7a5ae0",
      "showHighlighter": true,
      "showSub": true,
      "statCount": 3,
      "highlight": true,
      "highlightIndex": 0,
      "align": "left",
      "showCaption": true
    }
  },
  {
    "key": "theme01_page083",
    "themeKey": "theme01",
    "pageNumber": 83,
    "layout": "THEME01-083",
    "slot": "conclusion",
    "label": "结论",
    "bgClass": "",
    "controls": [
      {
        "key": "takeawayCount",
        "label": "结论卡数量",
        "type": "number",
        "default": 3,
        "min": 1,
        "max": 4,
        "step": 1,
        "desc": "展示的核心结论卡数量（最多 4 条）。",
        "publicKey": "takeawayCount",
        "publicLabel": "结论卡数量",
        "description": "展示的核心结论卡数量（最多 4 条）。"
      },
      {
        "key": "colorMode",
        "label": "配色模式",
        "type": "select",
        "default": "series",
        "options": [
          {
            "value": "series",
            "label": "多彩品牌色"
          },
          {
            "value": "mono",
            "label": "单一主题色"
          }
        ],
        "desc": "每卡使用品牌色序列，或统一使用单一主题色。",
        "publicKey": "colorMode",
        "publicLabel": "配色模式",
        "description": "每卡使用品牌色序列，或统一使用单一主题色。"
      },
      {
        "key": "accentColor",
        "label": "主题色",
        "type": "color",
        "default": "#5b8def",
        "options": [
          "#5b8def",
          "#46b083",
          "#e0a23a",
          "#e8503a",
          "#7a5ae0"
        ],
        "desc": "「单一主题色」模式下，所有卡片与高亮的统一颜色。",
        "publicKey": "accentColor",
        "publicLabel": "主题色",
        "description": "「单一主题色」模式下，所有卡片与高亮的统一颜色。"
      },
      {
        "key": "showEn",
        "label": "英文标签",
        "type": "boolean",
        "default": true,
        "desc": "是否显示每卡的英文 mono 标签。",
        "publicKey": "showEn",
        "publicLabel": "英文标签",
        "description": "是否显示每卡的英文 mono 标签。"
      },
      {
        "key": "highlight",
        "label": "重点强调",
        "type": "boolean",
        "default": false,
        "desc": "是否高亮强调其中一条结论。",
        "publicKey": "highlight",
        "publicLabel": "重点强调",
        "description": "是否高亮强调其中一条结论。"
      },
      {
        "key": "highlightIndex",
        "label": "强调第几条",
        "type": "number",
        "default": 0,
        "min": 0,
        "max": 3,
        "step": 1,
        "desc": "被强调的结论序号（从 0 开始）。",
        "publicKey": "highlightIndex",
        "publicLabel": "强调第几条",
        "description": "被强调的结论序号（从 0 开始）。"
      },
      {
        "key": "showSummary",
        "label": "一句话总结",
        "type": "boolean",
        "default": true,
        "desc": "是否显示底部强调的一句话总结。",
        "publicKey": "showSummary",
        "publicLabel": "一句话总结",
        "description": "是否显示底部强调的一句话总结。"
      },
      {
        "key": "showCaption",
        "label": "装饰文案",
        "type": "boolean",
        "default": true,
        "desc": "是否显示底部说明文案。",
        "publicKey": "showCaption",
        "publicLabel": "装饰文案",
        "description": "是否显示底部说明文案。"
      }
    ],
    "defaultProps": {
      "kicker": "# 结论",
      "title": "结论 · 三条核心判断",
      "en": "Conclusions",
      "cn": "透过横纵分析得到的三条主线",
      "takeaways": [
        {
          "tag": "横向看集中",
          "en": "CONCENTRATION",
          "color": "#5b8def",
          "text": "资金高度向头部公司、通用大模型赛道、旧金山湾区集中，「赢家通吃」格局确立。"
        },
        {
          "tag": "纵向看节奏",
          "en": "CADENCE",
          "color": "#e0a23a",
          "text": "全年融资「前高后稳」，Q2–Q3 达峰后理性回落，市场从狂热转向分化。"
        },
        {
          "tag": "结构看分层",
          "en": "STRUCTURE",
          "color": "#46b083",
          "text": "上游基础设施确定性最强，中游模型层竞争最激烈，下游应用层潜力最大但需时间验证。"
        },
        {
          "tag": "策略看兑现",
          "en": "DELIVERY",
          "color": "#7a5ae0",
          "text": "资本下一阶段从「赌叙事」转向「看兑现」，能把技术变成可持续收入者，方能留在牌桌。"
        }
      ],
      "summary": "盛宴仍在继续，但音乐的节奏正在变化——资本下一阶段将从「赌叙事」转向「看兑现」，能把技术转化为可持续收入的公司，才能在退潮后留在牌桌上。",
      "bandLabel": "TL;DR",
      "caption": "从赌叙事到看兑现 · 退潮之后见真章",
      "takeawayCount": 3,
      "colorMode": "series",
      "accentColor": "#5b8def",
      "showEn": true,
      "highlight": false,
      "highlightIndex": 0,
      "showSummary": true,
      "showCaption": true
    }
  },
  {
    "key": "theme01_page084",
    "themeKey": "theme01",
    "pageNumber": 84,
    "layout": "THEME01-084",
    "slot": "appendix",
    "label": "附录 · 数据来源",
    "bgClass": "",
    "controls": [
      {
        "key": "sourceCount",
        "label": "来源数量",
        "type": "number",
        "default": 4,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "左栏来源索引的行数（0 时只显示右侧说明面板）。",
        "publicKey": "sourceCount",
        "publicLabel": "来源数量",
        "description": "左栏来源索引的行数（0 时只显示右侧说明面板）。"
      },
      {
        "key": "highlight",
        "label": "重点强调",
        "type": "boolean",
        "default": false,
        "desc": "是否高亮强调其中一条来源。",
        "publicKey": "highlight",
        "publicLabel": "重点强调",
        "description": "是否高亮强调其中一条来源。"
      },
      {
        "key": "highlightIndex",
        "label": "强调第几条",
        "type": "number",
        "default": 3,
        "min": 0,
        "max": 3,
        "step": 1,
        "desc": "被强调的来源序号（从 0 开始）。",
        "publicKey": "highlightIndex",
        "publicLabel": "强调第几条",
        "description": "被强调的来源序号（从 0 开始）。"
      },
      {
        "key": "accentColor",
        "label": "主题色",
        "type": "color",
        "default": "#5b8def",
        "options": [
          "#5b8def",
          "#46b083",
          "#e0a23a",
          "#e8503a",
          "#7a5ae0"
        ],
        "desc": "编号、分隔与高亮的统一强调色。",
        "publicKey": "accentColor",
        "publicLabel": "主题色",
        "description": "编号、分隔与高亮的统一强调色。"
      },
      {
        "key": "showPanel",
        "label": "说明面板",
        "type": "boolean",
        "default": true,
        "desc": "是否显示右侧「口径与说明」玻璃面板（关闭时来源清单占满整页）。",
        "publicKey": "showPanel",
        "publicLabel": "说明面板",
        "description": "是否显示右侧「口径与说明」玻璃面板（关闭时来源清单占满整页）。"
      },
      {
        "key": "showDisclaimer",
        "label": "免责声明",
        "type": "boolean",
        "default": true,
        "desc": "是否在说明面板内显示免责声明。",
        "publicKey": "showDisclaimer",
        "publicLabel": "免责声明",
        "description": "是否在说明面板内显示免责声明。"
      },
      {
        "key": "showCaption",
        "label": "装饰文案",
        "type": "boolean",
        "default": true,
        "desc": "底部 */ … /* 说明文案的显示。",
        "publicKey": "showCaption",
        "publicLabel": "装饰文案",
        "description": "底部 */ … /* 说明文案的显示。"
      }
    ],
    "defaultProps": {
      "kicker": "# 附录",
      "title": "数据来源与研究说明",
      "en": "Sources & Methodology",
      "cn": "数据口径与免责说明",
      "listLabel": "数据来源 · SOURCES",
      "sources": [
        {
          "label": "公开融资数据库",
          "note": "PitchBook · Crunchbase 等一级市场数据"
        },
        {
          "label": "企业公告与新闻",
          "note": "官方披露 · 主流财经媒体报道"
        },
        {
          "label": "行业研究报告",
          "note": "一级 / 二级市场机构研究"
        },
        {
          "label": "研究性推演补全",
          "note": "部分数据缺口经建模估算"
        }
      ],
      "panelLabel": "口径与说明 · NOTES",
      "lead": "本报告聚焦 2024 全年单笔 ≥ 1 亿美元的公开融资事件，采用「横纵分析法」对全景、赛道、轮次、产业链与典型案例展开梳理。",
      "meta": [
        {
          "k": "编制日期",
          "v": "2026-06-03"
        },
        {
          "k": "数据口径",
          "v": "2024 全年 ≥ 1 亿美元事件"
        },
        {
          "k": "样本规模",
          "v": "97 笔 · 970 亿美元"
        }
      ],
      "disclaimer": "数据为调研整理，部分经研究性推演，仅供研究参考；内容由 AI 生成，请谨慎参考。",
      "caption": "附录 · 数据来源与口径说明",
      "sourceCount": 4,
      "highlight": false,
      "highlightIndex": 3,
      "accentColor": "#5b8def",
      "showPanel": true,
      "showDisclaimer": true,
      "showCaption": true
    }
  }
];
