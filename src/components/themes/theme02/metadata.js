export const theme = {
  "key": "theme02",
  "displayName": "炫光紫绿风",
  "label": "炫光紫绿风",
  "name": "炫光紫绿风",
  "scenario": "科技发布会、AI/自动驾驶/机器人主题、增长故事、创新项目展示",
  "audience": "科技公司创始人、技术负责人、品牌市场团队、投资路演团队",
  "mode": "replace"
};
export const pages = [
  {
    "key": "theme02_page001",
    "themeKey": "theme02",
    "pageNumber": 1,
    "layout": "THEME02-001",
    "slot": "cover",
    "label": "封面 · Cover",
    "bgClass": "",
    "controls": [
      {
        "key": "scheme",
        "label": "配色方案",
        "type": "enum",
        "default": "green",
        "options": [
          [
            "green",
            "霓虹绿"
          ],
          [
            "violet",
            "炫光紫"
          ]
        ],
        "desc": "切换整页炫光配色。",
        "publicKey": "scheme",
        "publicLabel": "配色方案",
        "description": "切换整页炫光配色。"
      },
      {
        "key": "emphasis",
        "label": "强调卡片",
        "type": "enum",
        "default": "ticket",
        "options": [
          [
            "default",
            "默认发光"
          ],
          [
            "ticket",
            "炫光票卡"
          ]
        ],
        "desc": "切换焦点卡片的发光质感。",
        "publicKey": "emphasis",
        "publicLabel": "强调卡片",
        "description": "切换焦点卡片的发光质感。"
      },
      {
        "key": "breath",
        "label": "内光呼吸感",
        "type": "slider",
        "default": 55,
        "min": 0,
        "max": 100,
        "step": 1,
        "desc": "炫光票卡模式下的内光呼吸强度。",
        "publicKey": "breath",
        "publicLabel": "内光呼吸感",
        "description": "炫光票卡模式下的内光呼吸强度。"
      },
      {
        "key": "magnet",
        "label": "磁吸悬停",
        "type": "toggle",
        "default": true,
        "desc": "焦点卡片跟随指针产生轻微位移和倾斜。",
        "publicKey": "magnet",
        "publicLabel": "磁吸悬停",
        "description": "焦点卡片跟随指针产生轻微位移和倾斜。"
      },
      {
        "key": "aurora",
        "label": "渐变流光",
        "type": "toggle",
        "default": true,
        "desc": "开启标题、数字和图表重点元素的流光渐变。",
        "publicKey": "aurora",
        "publicLabel": "渐变流光",
        "description": "开启标题、数字和图表重点元素的流光渐变。"
      },
      {
        "key": "auroraSpeed",
        "label": "流光速度",
        "type": "slider",
        "default": 1,
        "min": 0.4,
        "max": 3,
        "step": 0.1,
        "desc": "流光动画速度。",
        "publicKey": "auroraSpeed",
        "publicLabel": "流光速度",
        "description": "流光动画速度。"
      },
      {
        "key": "focusEnabled",
        "label": "重点强调",
        "type": "toggle",
        "default": true,
        "desc": "是否对核心数据做高亮发光强调",
        "publicKey": "focusEnabled",
        "publicLabel": "重点强调",
        "description": "是否对核心数据做高亮发光强调"
      },
      {
        "key": "imageCount",
        "label": "图片数量",
        "type": "number",
        "default": 1,
        "min": 0,
        "max": 3,
        "step": 1,
        "desc": "右侧配图槽位数量（0 = 纯文字封面）",
        "publicKey": "imageCount",
        "publicLabel": "图片数量",
        "description": "右侧配图槽位数量（0 = 纯文字封面）"
      },
      {
        "key": "layout",
        "label": "版式",
        "type": "enum",
        "default": "split",
        "options": [
          {
            "value": "split",
            "label": "左右分栏"
          },
          {
            "value": "centered",
            "label": "居中"
          }
        ],
        "desc": "整体构图：左右分栏带配图，或纯居中标题",
        "publicKey": "layout",
        "publicLabel": "版式",
        "description": "整体构图：左右分栏带配图，或纯居中标题"
      },
      {
        "key": "showTags",
        "label": "装饰标签",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏标题下方的装饰标签",
        "publicKey": "showTags",
        "publicLabel": "装饰标签",
        "description": "显示/隐藏标题下方的装饰标签"
      },
      {
        "key": "showFootnote",
        "label": "附注信息",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏底部的编制日期与口径附注",
        "publicKey": "showFootnote",
        "publicLabel": "附注信息",
        "description": "显示/隐藏底部的编制日期与口径附注"
      }
    ],
    "defaultProps": {
      "kicker": "AI · VENTURE FINANCING · 2024",
      "title": "2024 美国大额融资",
      "titleEm": "AI 公司调研报告",
      "subtitle": "聚焦全年单笔 ≥1 亿美元的大额融资事件，以横纵分析法梳理市场全景、行业分布与产业链分层。",
      "stat": {
        "value": "970",
        "unit": "亿美元",
        "caption": "全年 AI 风险投资总额 · 创历史新高"
      },
      "footnote": [
        "编制日期 2026-06-03",
        "数据口径 2024 全年公开披露 ≥1 亿美元事件",
        "仅供研究参考"
      ],
      "tags": [
        "横纵分析法",
        "97 笔事件",
        "资本大年"
      ],
      "layout": "split",
      "focusEnabled": true,
      "imageCount": 1,
      "showFootnote": true,
      "showTags": true,
      "images": [],
      "scheme": "green",
      "emphasis": "ticket",
      "breath": 55,
      "magnet": true,
      "aurora": true,
      "auroraSpeed": 1,
      "index": null
    }
  },
  {
    "key": "theme02_page002",
    "themeKey": "theme02",
    "pageNumber": 2,
    "layout": "THEME02-002",
    "slot": "coverbeam",
    "label": "封面 A · 居中聚光",
    "bgClass": "",
    "controls": [
      {
        "key": "scheme",
        "label": "配色方案",
        "type": "enum",
        "default": "green",
        "options": [
          [
            "green",
            "霓虹绿"
          ],
          [
            "violet",
            "炫光紫"
          ]
        ],
        "desc": "切换整页炫光配色。",
        "publicKey": "scheme",
        "publicLabel": "配色方案",
        "description": "切换整页炫光配色。"
      },
      {
        "key": "emphasis",
        "label": "强调卡片",
        "type": "enum",
        "default": "ticket",
        "options": [
          [
            "default",
            "默认发光"
          ],
          [
            "ticket",
            "炫光票卡"
          ]
        ],
        "desc": "切换焦点卡片的发光质感。",
        "publicKey": "emphasis",
        "publicLabel": "强调卡片",
        "description": "切换焦点卡片的发光质感。"
      },
      {
        "key": "breath",
        "label": "内光呼吸感",
        "type": "slider",
        "default": 55,
        "min": 0,
        "max": 100,
        "step": 1,
        "desc": "炫光票卡模式下的内光呼吸强度。",
        "publicKey": "breath",
        "publicLabel": "内光呼吸感",
        "description": "炫光票卡模式下的内光呼吸强度。"
      },
      {
        "key": "magnet",
        "label": "磁吸悬停",
        "type": "toggle",
        "default": true,
        "desc": "焦点卡片跟随指针产生轻微位移和倾斜。",
        "publicKey": "magnet",
        "publicLabel": "磁吸悬停",
        "description": "焦点卡片跟随指针产生轻微位移和倾斜。"
      },
      {
        "key": "aurora",
        "label": "渐变流光",
        "type": "toggle",
        "default": true,
        "desc": "开启标题、数字和图表重点元素的流光渐变。",
        "publicKey": "aurora",
        "publicLabel": "渐变流光",
        "description": "开启标题、数字和图表重点元素的流光渐变。"
      },
      {
        "key": "auroraSpeed",
        "label": "流光速度",
        "type": "slider",
        "default": 1,
        "min": 0.4,
        "max": 3,
        "step": 0.1,
        "desc": "流光动画速度。",
        "publicKey": "auroraSpeed",
        "publicLabel": "流光速度",
        "description": "流光动画速度。"
      },
      {
        "key": "focusEnabled",
        "label": "重点强调",
        "type": "toggle",
        "default": true,
        "desc": "主标题次行做发光流光强调",
        "publicKey": "focusEnabled",
        "publicLabel": "重点强调",
        "description": "主标题次行做发光流光强调"
      },
      {
        "key": "showKicker",
        "label": "眉题",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏标题上方的居中眉题",
        "publicKey": "showKicker",
        "publicLabel": "眉题",
        "description": "显示/隐藏标题上方的居中眉题"
      },
      {
        "key": "showRule",
        "label": "发光分隔线",
        "type": "toggle",
        "default": true,
        "desc": "标题与副标题之间的发光分隔线",
        "publicKey": "showRule",
        "publicLabel": "发光分隔线",
        "description": "标题与副标题之间的发光分隔线"
      },
      {
        "key": "statCount",
        "label": "底部数据",
        "type": "number",
        "default": 3,
        "min": 0,
        "max": 3,
        "step": 1,
        "desc": "底部一排迷你数据的数量（0 = 隐藏）",
        "publicKey": "statCount",
        "publicLabel": "底部数据",
        "description": "底部一排迷你数据的数量（0 = 隐藏）"
      },
      {
        "key": "showMeta",
        "label": "附注信息",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏底部的日期与口径附注",
        "publicKey": "showMeta",
        "publicLabel": "附注信息",
        "description": "显示/隐藏底部的日期与口径附注"
      }
    ],
    "defaultProps": {
      "kicker": "GENERATIVE AI · INDUSTRY LANDSCAPE · 2026",
      "title": "2026 全球生成式 AI",
      "titleEm": "产业全景报告",
      "subtitle": "横跨模型、算力、应用与生态四层结构，沿资本与采用度两条主线，勾勒出这一年的产业地形与拐点。",
      "stats": [
        {
          "value": "1,240",
          "unit": "亿美元",
          "label": "全年产业总投入"
        },
        {
          "value": "58",
          "unit": "%",
          "label": "企业级渗透率"
        },
        {
          "value": "7",
          "unit": "大赛道",
          "label": "核心结构分层"
        }
      ],
      "meta": [
        "编制 2026-06 · 季度刊",
        "数据口径 公开披露",
        "仅供研究参考"
      ],
      "focusEnabled": true,
      "showKicker": true,
      "showRule": true,
      "statCount": 3,
      "showMeta": true,
      "scheme": "green",
      "emphasis": "ticket",
      "breath": 55,
      "magnet": true,
      "aurora": true,
      "auroraSpeed": 1,
      "index": "01 / 73"
    }
  },
  {
    "key": "theme02_page003",
    "themeKey": "theme02",
    "pageNumber": 3,
    "layout": "THEME02-003",
    "slot": "coverfigure",
    "label": "封面 B · 大数主视觉",
    "bgClass": "",
    "controls": [
      {
        "key": "scheme",
        "label": "配色方案",
        "type": "enum",
        "default": "green",
        "options": [
          [
            "green",
            "霓虹绿"
          ],
          [
            "violet",
            "炫光紫"
          ]
        ],
        "desc": "切换整页炫光配色。",
        "publicKey": "scheme",
        "publicLabel": "配色方案",
        "description": "切换整页炫光配色。"
      },
      {
        "key": "emphasis",
        "label": "强调卡片",
        "type": "enum",
        "default": "ticket",
        "options": [
          [
            "default",
            "默认发光"
          ],
          [
            "ticket",
            "炫光票卡"
          ]
        ],
        "desc": "切换焦点卡片的发光质感。",
        "publicKey": "emphasis",
        "publicLabel": "强调卡片",
        "description": "切换焦点卡片的发光质感。"
      },
      {
        "key": "breath",
        "label": "内光呼吸感",
        "type": "slider",
        "default": 55,
        "min": 0,
        "max": 100,
        "step": 1,
        "desc": "炫光票卡模式下的内光呼吸强度。",
        "publicKey": "breath",
        "publicLabel": "内光呼吸感",
        "description": "炫光票卡模式下的内光呼吸强度。"
      },
      {
        "key": "magnet",
        "label": "磁吸悬停",
        "type": "toggle",
        "default": true,
        "desc": "焦点卡片跟随指针产生轻微位移和倾斜。",
        "publicKey": "magnet",
        "publicLabel": "磁吸悬停",
        "description": "焦点卡片跟随指针产生轻微位移和倾斜。"
      },
      {
        "key": "aurora",
        "label": "渐变流光",
        "type": "toggle",
        "default": true,
        "desc": "开启标题、数字和图表重点元素的流光渐变。",
        "publicKey": "aurora",
        "publicLabel": "渐变流光",
        "description": "开启标题、数字和图表重点元素的流光渐变。"
      },
      {
        "key": "auroraSpeed",
        "label": "流光速度",
        "type": "slider",
        "default": 1,
        "min": 0.4,
        "max": 3,
        "step": 0.1,
        "desc": "流光动画速度。",
        "publicKey": "auroraSpeed",
        "publicLabel": "流光速度",
        "description": "流光动画速度。"
      },
      {
        "key": "focusEnabled",
        "label": "重点强调",
        "type": "toggle",
        "default": true,
        "desc": "右侧巨数面板做发光强调（接入全局强调样式）",
        "publicKey": "focusEnabled",
        "publicLabel": "重点强调",
        "description": "右侧巨数面板做发光强调（接入全局强调样式）"
      },
      {
        "key": "statSide",
        "label": "巨数侧别",
        "type": "enum",
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
        "desc": "巨型数字面板放在左或右",
        "publicKey": "statSide",
        "publicLabel": "巨数侧别",
        "description": "巨型数字面板放在左或右"
      },
      {
        "key": "subStatCount",
        "label": "小指标数量",
        "type": "number",
        "default": 2,
        "min": 0,
        "max": 2,
        "step": 1,
        "desc": "巨数下方的小指标数量（0 = 隐藏）",
        "publicKey": "subStatCount",
        "publicLabel": "小指标数量",
        "description": "巨数下方的小指标数量（0 = 隐藏）"
      },
      {
        "key": "showSubtitle",
        "label": "副标题",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏左列副标题",
        "publicKey": "showSubtitle",
        "publicLabel": "副标题",
        "description": "显示/隐藏左列副标题"
      },
      {
        "key": "showTags",
        "label": "装饰标签",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏左列标签",
        "publicKey": "showTags",
        "publicLabel": "装饰标签",
        "description": "显示/隐藏左列标签"
      }
    ],
    "defaultProps": {
      "kicker": "GENERATIVE AI · CAPITAL REPORT · 2026",
      "title": "资本涌入",
      "titleEm": "智能新纪元",
      "subtitle": "一年之内，生成式 AI 从概念验证走向规模部署。本报告以横纵分析法，复盘资本与采用度的双重跃迁。",
      "tags": [
        "横纵分析法",
        "四层结构",
        "资本大年"
      ],
      "stat": {
        "value": "1,240",
        "unit": "亿美元",
        "caption": "全年产业总投入 · 创历史新高"
      },
      "subStats": [
        {
          "value": "+38%",
          "label": "同比增速"
        },
        {
          "value": "97",
          "label": "亿级事件（笔）"
        }
      ],
      "statSide": "right",
      "focusEnabled": true,
      "subStatCount": 2,
      "showSubtitle": true,
      "showTags": true,
      "scheme": "green",
      "emphasis": "ticket",
      "breath": 55,
      "magnet": true,
      "aurora": true,
      "auroraSpeed": 1,
      "index": "02 / 73"
    }
  },
  {
    "key": "theme02_page004",
    "themeKey": "theme02",
    "pageNumber": 4,
    "layout": "THEME02-004",
    "slot": "coverposter",
    "label": "封面 C · 满幅图海报",
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
        "key": "scheme",
        "label": "配色方案",
        "type": "enum",
        "default": "green",
        "options": [
          [
            "green",
            "霓虹绿"
          ],
          [
            "violet",
            "炫光紫"
          ]
        ],
        "desc": "切换整页炫光配色。",
        "publicKey": "scheme",
        "publicLabel": "配色方案",
        "description": "切换整页炫光配色。"
      },
      {
        "key": "emphasis",
        "label": "强调卡片",
        "type": "enum",
        "default": "ticket",
        "options": [
          [
            "default",
            "默认发光"
          ],
          [
            "ticket",
            "炫光票卡"
          ]
        ],
        "desc": "切换焦点卡片的发光质感。",
        "publicKey": "emphasis",
        "publicLabel": "强调卡片",
        "description": "切换焦点卡片的发光质感。"
      },
      {
        "key": "breath",
        "label": "内光呼吸感",
        "type": "slider",
        "default": 55,
        "min": 0,
        "max": 100,
        "step": 1,
        "desc": "炫光票卡模式下的内光呼吸强度。",
        "publicKey": "breath",
        "publicLabel": "内光呼吸感",
        "description": "炫光票卡模式下的内光呼吸强度。"
      },
      {
        "key": "magnet",
        "label": "磁吸悬停",
        "type": "toggle",
        "default": true,
        "desc": "焦点卡片跟随指针产生轻微位移和倾斜。",
        "publicKey": "magnet",
        "publicLabel": "磁吸悬停",
        "description": "焦点卡片跟随指针产生轻微位移和倾斜。"
      },
      {
        "key": "aurora",
        "label": "渐变流光",
        "type": "toggle",
        "default": true,
        "desc": "开启标题、数字和图表重点元素的流光渐变。",
        "publicKey": "aurora",
        "publicLabel": "渐变流光",
        "description": "开启标题、数字和图表重点元素的流光渐变。"
      },
      {
        "key": "auroraSpeed",
        "label": "流光速度",
        "type": "slider",
        "default": 1,
        "min": 0.4,
        "max": 3,
        "step": 0.1,
        "desc": "流光动画速度。",
        "publicKey": "auroraSpeed",
        "publicLabel": "流光速度",
        "description": "流光动画速度。"
      },
      {
        "key": "imageCount",
        "label": "主图",
        "type": "number",
        "default": 1,
        "min": 0,
        "max": 1,
        "step": 1,
        "desc": "满幅主图槽（0 = 纯文字海报）",
        "publicKey": "imageCount",
        "publicLabel": "主图",
        "description": "满幅主图槽（0 = 纯文字海报）"
      },
      {
        "key": "fit",
        "label": "图片填充",
        "type": "enum",
        "default": "cover",
        "options": [
          {
            "value": "cover",
            "label": "满幅裁切"
          },
          {
            "value": "contain",
            "label": "完整不裁切"
          }
        ],
        "desc": "主图满幅裁切，或按原始比例完整显示",
        "publicKey": "fit",
        "publicLabel": "图片填充",
        "description": "主图满幅裁切，或按原始比例完整显示"
      },
      {
        "key": "titlePos",
        "label": "标题位置",
        "type": "enum",
        "default": "bottom",
        "options": [
          {
            "value": "bottom",
            "label": "左下"
          },
          {
            "value": "center",
            "label": "居中"
          }
        ],
        "desc": "标题锁定在左下压字，或整体居中",
        "publicKey": "titlePos",
        "publicLabel": "标题位置",
        "description": "标题锁定在左下压字，或整体居中"
      },
      {
        "key": "showQuote",
        "label": "金句",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏标题下方金句",
        "publicKey": "showQuote",
        "publicLabel": "金句",
        "description": "显示/隐藏标题下方金句"
      },
      {
        "key": "showFrame",
        "label": "内嵌描边框",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏海报内嵌的发光描边框",
        "publicKey": "showFrame",
        "publicLabel": "内嵌描边框",
        "description": "显示/隐藏海报内嵌的发光描边框"
      },
      {
        "key": "metaCount",
        "label": "底部数据",
        "type": "number",
        "default": 3,
        "min": 0,
        "max": 3,
        "step": 1,
        "desc": "底部内联数据数量（0 = 隐藏）",
        "publicKey": "metaCount",
        "publicLabel": "底部数据",
        "description": "底部内联数据数量（0 = 隐藏）"
      }
    ],
    "defaultProps": {
      "kicker": "GENERATIVE AI · 2026",
      "title": "智能的形状",
      "titleEm": "正在被重写",
      "quote": "当模型成为基础设施，每一个行业都将重新计算自己的边界。",
      "metas": [
        {
          "value": "1,240",
          "label": "亿美元投入"
        },
        {
          "value": "58%",
          "label": "企业渗透率"
        },
        {
          "value": "7",
          "label": "核心赛道"
        }
      ],
      "caption": "主视觉 · 替换为产业大图",
      "imageCount": 1,
      "fit": "cover",
      "backgroundMode": "unicorn",
      "unicornScene": "goey",
      "titlePos": "bottom",
      "showQuote": true,
      "showFrame": true,
      "metaCount": 3,
      "images": [],
      "scheme": "green",
      "emphasis": "ticket",
      "breath": 55,
      "magnet": true,
      "aurora": true,
      "auroraSpeed": 1,
      "index": "03 / 73"
    }
  },
  {
    "key": "theme02_page005",
    "themeKey": "theme02",
    "pageNumber": 5,
    "layout": "THEME02-005",
    "slot": "coverpanel",
    "label": "封面 D · 模块网格",
    "bgClass": "",
    "controls": [
      {
        "key": "scheme",
        "label": "配色方案",
        "type": "enum",
        "default": "green",
        "options": [
          [
            "green",
            "霓虹绿"
          ],
          [
            "violet",
            "炫光紫"
          ]
        ],
        "desc": "切换整页炫光配色。",
        "publicKey": "scheme",
        "publicLabel": "配色方案",
        "description": "切换整页炫光配色。"
      },
      {
        "key": "emphasis",
        "label": "强调卡片",
        "type": "enum",
        "default": "ticket",
        "options": [
          [
            "default",
            "默认发光"
          ],
          [
            "ticket",
            "炫光票卡"
          ]
        ],
        "desc": "切换焦点卡片的发光质感。",
        "publicKey": "emphasis",
        "publicLabel": "强调卡片",
        "description": "切换焦点卡片的发光质感。"
      },
      {
        "key": "breath",
        "label": "内光呼吸感",
        "type": "slider",
        "default": 55,
        "min": 0,
        "max": 100,
        "step": 1,
        "desc": "炫光票卡模式下的内光呼吸强度。",
        "publicKey": "breath",
        "publicLabel": "内光呼吸感",
        "description": "炫光票卡模式下的内光呼吸强度。"
      },
      {
        "key": "magnet",
        "label": "磁吸悬停",
        "type": "toggle",
        "default": true,
        "desc": "焦点卡片跟随指针产生轻微位移和倾斜。",
        "publicKey": "magnet",
        "publicLabel": "磁吸悬停",
        "description": "焦点卡片跟随指针产生轻微位移和倾斜。"
      },
      {
        "key": "aurora",
        "label": "渐变流光",
        "type": "toggle",
        "default": true,
        "desc": "开启标题、数字和图表重点元素的流光渐变。",
        "publicKey": "aurora",
        "publicLabel": "渐变流光",
        "description": "开启标题、数字和图表重点元素的流光渐变。"
      },
      {
        "key": "auroraSpeed",
        "label": "流光速度",
        "type": "slider",
        "default": 1,
        "min": 0.4,
        "max": 3,
        "step": 0.1,
        "desc": "流光动画速度。",
        "publicKey": "auroraSpeed",
        "publicLabel": "流光速度",
        "description": "流光动画速度。"
      },
      {
        "key": "pillarCount",
        "label": "支柱数量",
        "type": "number",
        "default": 4,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "右列支柱面板的数量",
        "publicKey": "pillarCount",
        "publicLabel": "支柱数量",
        "description": "右列支柱面板的数量"
      },
      {
        "key": "focusEnabled",
        "label": "重点强调",
        "type": "toggle",
        "default": true,
        "desc": "强调其中一块支柱（发光）",
        "publicKey": "focusEnabled",
        "publicLabel": "重点强调",
        "description": "强调其中一块支柱（发光）"
      },
      {
        "key": "focusIndex",
        "label": "强调序号",
        "type": "number",
        "default": 1,
        "min": 0,
        "max": 3,
        "step": 1,
        "desc": "被强调支柱的序号",
        "publicKey": "focusIndex",
        "publicLabel": "强调序号",
        "description": "被强调支柱的序号"
      },
      {
        "key": "showIndex",
        "label": "支柱编号",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏支柱的描边巨号",
        "publicKey": "showIndex",
        "publicLabel": "支柱编号",
        "description": "显示/隐藏支柱的描边巨号"
      },
      {
        "key": "showDesc",
        "label": "支柱说明",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏支柱的一句说明",
        "publicKey": "showDesc",
        "publicLabel": "支柱说明",
        "description": "显示/隐藏支柱的一句说明"
      },
      {
        "key": "showMeta",
        "label": "附注信息",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏左列底部附注",
        "publicKey": "showMeta",
        "publicLabel": "附注信息",
        "description": "显示/隐藏左列底部附注"
      }
    ],
    "defaultProps": {
      "kicker": "GENERATIVE AI · INDUSTRY LANDSCAPE · 2026",
      "title": "四层结构",
      "titleEm": "读懂这一年",
      "subtitle": "从底层算力到上层应用，本报告沿四个维度逐层拆解生成式 AI 的产业地形与资本流向。",
      "meta": [
        "编制 2026-06",
        "数据口径 公开披露",
        "仅供研究参考"
      ],
      "pillars": [
        {
          "title": "算力底座",
          "desc": "芯片、云与训练集群的供给与成本"
        },
        {
          "title": "模型层",
          "desc": "基础模型的能力跃迁与开闭源格局"
        },
        {
          "title": "应用生态",
          "desc": "垂直场景的渗透与商业化节奏"
        },
        {
          "title": "资本流向",
          "desc": "轮次结构、估值地形与头部集中"
        }
      ],
      "pillarCount": 4,
      "focusEnabled": true,
      "focusIndex": 1,
      "showIndex": true,
      "showDesc": true,
      "showMeta": true,
      "scheme": "green",
      "emphasis": "ticket",
      "breath": 55,
      "magnet": true,
      "aurora": true,
      "auroraSpeed": 1,
      "index": "04 / 73"
    }
  },
  {
    "key": "theme02_page006",
    "themeKey": "theme02",
    "pageNumber": 6,
    "layout": "THEME02-006",
    "slot": "method",
    "label": "研究方法 · Method",
    "bgClass": "",
    "controls": [
      {
        "key": "scheme",
        "label": "配色方案",
        "type": "enum",
        "default": "green",
        "options": [
          [
            "green",
            "霓虹绿"
          ],
          [
            "violet",
            "炫光紫"
          ]
        ],
        "desc": "切换整页炫光配色。",
        "publicKey": "scheme",
        "publicLabel": "配色方案",
        "description": "切换整页炫光配色。"
      },
      {
        "key": "emphasis",
        "label": "强调卡片",
        "type": "enum",
        "default": "ticket",
        "options": [
          [
            "default",
            "默认发光"
          ],
          [
            "ticket",
            "炫光票卡"
          ]
        ],
        "desc": "切换焦点卡片的发光质感。",
        "publicKey": "emphasis",
        "publicLabel": "强调卡片",
        "description": "切换焦点卡片的发光质感。"
      },
      {
        "key": "breath",
        "label": "内光呼吸感",
        "type": "slider",
        "default": 55,
        "min": 0,
        "max": 100,
        "step": 1,
        "desc": "炫光票卡模式下的内光呼吸强度。",
        "publicKey": "breath",
        "publicLabel": "内光呼吸感",
        "description": "炫光票卡模式下的内光呼吸强度。"
      },
      {
        "key": "magnet",
        "label": "磁吸悬停",
        "type": "toggle",
        "default": true,
        "desc": "焦点卡片跟随指针产生轻微位移和倾斜。",
        "publicKey": "magnet",
        "publicLabel": "磁吸悬停",
        "description": "焦点卡片跟随指针产生轻微位移和倾斜。"
      },
      {
        "key": "aurora",
        "label": "渐变流光",
        "type": "toggle",
        "default": true,
        "desc": "开启标题、数字和图表重点元素的流光渐变。",
        "publicKey": "aurora",
        "publicLabel": "渐变流光",
        "description": "开启标题、数字和图表重点元素的流光渐变。"
      },
      {
        "key": "auroraSpeed",
        "label": "流光速度",
        "type": "slider",
        "default": 1,
        "min": 0.4,
        "max": 3,
        "step": 0.1,
        "desc": "流光动画速度。",
        "publicKey": "auroraSpeed",
        "publicLabel": "流光速度",
        "description": "流光动画速度。"
      },
      {
        "key": "cardCount",
        "label": "卡片数量",
        "type": "number",
        "default": 3,
        "min": 1,
        "max": 4,
        "step": 1,
        "desc": "展示的维度卡片数量",
        "publicKey": "cardCount",
        "publicLabel": "卡片数量",
        "description": "展示的维度卡片数量"
      },
      {
        "key": "focusEnabled",
        "label": "重点强调",
        "type": "toggle",
        "default": false,
        "desc": "是否高亮其中一张卡片",
        "publicKey": "focusEnabled",
        "publicLabel": "重点强调",
        "description": "是否高亮其中一张卡片"
      },
      {
        "key": "focusIndex",
        "label": "强调项",
        "type": "number",
        "default": 0,
        "min": 0,
        "step": 1,
        "desc": "被强调卡片的序号",
        "publicKey": "focusIndex",
        "publicLabel": "强调项",
        "description": "被强调卡片的序号"
      },
      {
        "key": "showIndex",
        "label": "序号显示",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏卡片左上角的 01 · 02 序号",
        "publicKey": "showIndex",
        "publicLabel": "序号显示",
        "description": "显示/隐藏卡片左上角的 01 · 02 序号"
      }
    ],
    "defaultProps": {
      "kicker": "METHOD · 研究方法",
      "title": "横纵分析法 ",
      "titleEm": "双维透视",
      "intro": "从两个正交维度切入同一组数据，互为补充，避免单一视角的盲区，并在交叉处识别产业链结构。",
      "cards": [
        {
          "tag": "横向 · 空间维度",
          "title": "谁更大 · 谁更密集",
          "axis": "h",
          "desc": "在同一时间截面上，对不同公司、赛道、轮次、地区做横向对比，回答资源集中在哪里。"
        },
        {
          "tag": "纵向 · 时间维度",
          "title": "趋势向上还是向下",
          "axis": "v",
          "desc": "沿时间轴追踪同一指标的演化，回答拐点在何处、节奏是否可持续。"
        },
        {
          "tag": "交叉 · 结构维度",
          "title": "层级与因果传导",
          "axis": "x",
          "desc": "两个维度交叉后，进一步识别产业链的上中下游层级结构与因果传导关系。"
        },
        {
          "tag": "应用 · 决策维度",
          "title": "结构化的投资参考",
          "axis": "d",
          "desc": "将横纵结论转化为可执行的判断框架，为后续投资与产品决策提供结构化依据。"
        }
      ],
      "cardCount": 3,
      "focusEnabled": false,
      "focusIndex": 0,
      "showIndex": true,
      "scheme": "green",
      "emphasis": "ticket",
      "breath": 55,
      "magnet": true,
      "aurora": true,
      "auroraSpeed": 1,
      "index": "05 / 73"
    }
  },
  {
    "key": "theme02_page007",
    "themeKey": "theme02",
    "pageNumber": 7,
    "layout": "THEME02-007",
    "slot": "agenda",
    "label": "报告目录 · Agenda",
    "bgClass": "",
    "controls": [
      {
        "key": "scheme",
        "label": "配色方案",
        "type": "enum",
        "default": "green",
        "options": [
          [
            "green",
            "霓虹绿"
          ],
          [
            "violet",
            "炫光紫"
          ]
        ],
        "desc": "切换整页炫光配色。",
        "publicKey": "scheme",
        "publicLabel": "配色方案",
        "description": "切换整页炫光配色。"
      },
      {
        "key": "emphasis",
        "label": "强调卡片",
        "type": "enum",
        "default": "ticket",
        "options": [
          [
            "default",
            "默认发光"
          ],
          [
            "ticket",
            "炫光票卡"
          ]
        ],
        "desc": "切换焦点卡片的发光质感。",
        "publicKey": "emphasis",
        "publicLabel": "强调卡片",
        "description": "切换焦点卡片的发光质感。"
      },
      {
        "key": "breath",
        "label": "内光呼吸感",
        "type": "slider",
        "default": 55,
        "min": 0,
        "max": 100,
        "step": 1,
        "desc": "炫光票卡模式下的内光呼吸强度。",
        "publicKey": "breath",
        "publicLabel": "内光呼吸感",
        "description": "炫光票卡模式下的内光呼吸强度。"
      },
      {
        "key": "magnet",
        "label": "磁吸悬停",
        "type": "toggle",
        "default": true,
        "desc": "焦点卡片跟随指针产生轻微位移和倾斜。",
        "publicKey": "magnet",
        "publicLabel": "磁吸悬停",
        "description": "焦点卡片跟随指针产生轻微位移和倾斜。"
      },
      {
        "key": "aurora",
        "label": "渐变流光",
        "type": "toggle",
        "default": true,
        "desc": "开启标题、数字和图表重点元素的流光渐变。",
        "publicKey": "aurora",
        "publicLabel": "渐变流光",
        "description": "开启标题、数字和图表重点元素的流光渐变。"
      },
      {
        "key": "auroraSpeed",
        "label": "流光速度",
        "type": "slider",
        "default": 1,
        "min": 0.4,
        "max": 3,
        "step": 0.1,
        "desc": "流光动画速度。",
        "publicKey": "auroraSpeed",
        "publicLabel": "流光速度",
        "description": "流光动画速度。"
      },
      {
        "key": "itemCount",
        "label": "章节条数",
        "type": "number",
        "default": 6,
        "min": 2,
        "step": 1,
        "desc": "目录展示的章节条数",
        "publicKey": "itemCount",
        "publicLabel": "章节条数",
        "description": "目录展示的章节条数"
      },
      {
        "key": "columns",
        "label": "卡片列数",
        "type": "number",
        "default": 2,
        "min": 1,
        "max": 2,
        "step": 1,
        "desc": "章节卡片的列数（1 或 2）",
        "publicKey": "columns",
        "publicLabel": "卡片列数",
        "description": "章节卡片的列数（1 或 2）"
      },
      {
        "key": "focusEnabled",
        "label": "重点强调",
        "type": "toggle",
        "default": true,
        "desc": "高亮“当前 / 重点”章节",
        "publicKey": "focusEnabled",
        "publicLabel": "重点强调",
        "description": "高亮“当前 / 重点”章节"
      },
      {
        "key": "focusIndex",
        "label": "强调项",
        "type": "number",
        "default": 0,
        "min": 0,
        "step": 1,
        "desc": "被强调章节的序号",
        "publicKey": "focusIndex",
        "publicLabel": "强调项",
        "description": "被强调章节的序号"
      },
      {
        "key": "showSub",
        "label": "小节说明",
        "type": "toggle",
        "default": true,
        "desc": "章节下方小节说明显隐",
        "publicKey": "showSub",
        "publicLabel": "小节说明",
        "description": "章节下方小节说明显隐"
      },
      {
        "key": "showRail",
        "label": "清单光轨",
        "type": "toggle",
        "default": true,
        "desc": "单列时竖向光轨与发光节点显隐",
        "publicKey": "showRail",
        "publicLabel": "清单光轨",
        "description": "单列时竖向光轨与发光节点显隐"
      },
      {
        "key": "showLead",
        "label": "左侧导语",
        "type": "toggle",
        "default": true,
        "desc": "左侧导语立柱显隐",
        "publicKey": "showLead",
        "publicLabel": "左侧导语",
        "description": "左侧导语立柱显隐"
      }
    ],
    "defaultProps": {
      "kicker": "CONTENTS · 报告目录",
      "title": "六个章节 ",
      "titleEm": "读完这一年",
      "lead": "从市场全景到风险研判，沿着资本流向逐层拆解 2024 年美国大额融资 AI 公司的真实图景。",
      "items": [
        {
          "title": "市场全景与资本节奏",
          "sub": "总量、季度趋势与月度热力"
        },
        {
          "title": "赛道结构与头部榜单",
          "sub": "行业占比、融资排名与产业链分层"
        },
        {
          "title": "估值地形与轮次结构",
          "sub": "估值散点、资本漏斗与轮次分布"
        },
        {
          "title": "地区分布与公司图谱",
          "sub": "地理集中度与代表性公司"
        },
        {
          "title": "能力评估与判断框架",
          "sub": "能力雷达、四象限与评级矩阵"
        },
        {
          "title": "核心结论与风险研判",
          "sub": "关键判断、潜在风险与展望"
        }
      ],
      "itemCount": 6,
      "columns": 2,
      "focusEnabled": true,
      "focusIndex": 0,
      "showSub": true,
      "showRail": true,
      "showLead": true,
      "scheme": "green",
      "emphasis": "ticket",
      "breath": 55,
      "magnet": true,
      "aurora": true,
      "auroraSpeed": 1,
      "index": "06 / 73"
    }
  },
  {
    "key": "theme02_page008",
    "themeKey": "theme02",
    "pageNumber": 8,
    "layout": "THEME02-008",
    "slot": "trend",
    "label": "市场全景 · Trend",
    "bgClass": "",
    "controls": [
      {
        "key": "scheme",
        "label": "配色方案",
        "type": "enum",
        "default": "green",
        "options": [
          [
            "green",
            "霓虹绿"
          ],
          [
            "violet",
            "炫光紫"
          ]
        ],
        "desc": "切换整页炫光配色。",
        "publicKey": "scheme",
        "publicLabel": "配色方案",
        "description": "切换整页炫光配色。"
      },
      {
        "key": "emphasis",
        "label": "强调卡片",
        "type": "enum",
        "default": "ticket",
        "options": [
          [
            "default",
            "默认发光"
          ],
          [
            "ticket",
            "炫光票卡"
          ]
        ],
        "desc": "切换焦点卡片的发光质感。",
        "publicKey": "emphasis",
        "publicLabel": "强调卡片",
        "description": "切换焦点卡片的发光质感。"
      },
      {
        "key": "breath",
        "label": "内光呼吸感",
        "type": "slider",
        "default": 55,
        "min": 0,
        "max": 100,
        "step": 1,
        "desc": "炫光票卡模式下的内光呼吸强度。",
        "publicKey": "breath",
        "publicLabel": "内光呼吸感",
        "description": "炫光票卡模式下的内光呼吸强度。"
      },
      {
        "key": "magnet",
        "label": "磁吸悬停",
        "type": "toggle",
        "default": true,
        "desc": "焦点卡片跟随指针产生轻微位移和倾斜。",
        "publicKey": "magnet",
        "publicLabel": "磁吸悬停",
        "description": "焦点卡片跟随指针产生轻微位移和倾斜。"
      },
      {
        "key": "aurora",
        "label": "渐变流光",
        "type": "toggle",
        "default": true,
        "desc": "开启标题、数字和图表重点元素的流光渐变。",
        "publicKey": "aurora",
        "publicLabel": "渐变流光",
        "description": "开启标题、数字和图表重点元素的流光渐变。"
      },
      {
        "key": "auroraSpeed",
        "label": "流光速度",
        "type": "slider",
        "default": 1,
        "min": 0.4,
        "max": 3,
        "step": 0.1,
        "desc": "流光动画速度。",
        "publicKey": "auroraSpeed",
        "publicLabel": "流光速度",
        "description": "流光动画速度。"
      },
      {
        "key": "chartType",
        "label": "图表类型",
        "type": "enum",
        "default": "line",
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
        "desc": "主数据系列的呈现形式",
        "publicKey": "chartType",
        "publicLabel": "图表类型",
        "description": "主数据系列的呈现形式"
      },
      {
        "key": "focusEnabled",
        "label": "重点强调",
        "type": "toggle",
        "default": true,
        "desc": "是否高亮某一数据点",
        "publicKey": "focusEnabled",
        "publicLabel": "重点强调",
        "description": "是否高亮某一数据点"
      },
      {
        "key": "focusIndex",
        "label": "强调项",
        "type": "number",
        "default": 2,
        "min": 0,
        "step": 1,
        "desc": "被强调数据点的序号",
        "publicKey": "focusIndex",
        "publicLabel": "强调项",
        "description": "被强调数据点的序号"
      },
      {
        "key": "showSecondary",
        "label": "次要指标",
        "type": "toggle",
        "default": true,
        "desc": "叠加显示次要系列（事件笔数）",
        "publicKey": "showSecondary",
        "publicLabel": "次要指标",
        "description": "叠加显示次要系列（事件笔数）"
      },
      {
        "key": "showValueLabels",
        "label": "数值标签",
        "type": "toggle",
        "default": true,
        "desc": "在图表上显示具体数值",
        "publicKey": "showValueLabels",
        "publicLabel": "数值标签",
        "description": "在图表上显示具体数值"
      },
      {
        "key": "showAnnotation",
        "label": "解读文案",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏右下角的趋势解读",
        "publicKey": "showAnnotation",
        "publicLabel": "解读文案",
        "description": "显示/隐藏右下角的趋势解读"
      }
    ],
    "defaultProps": {
      "kicker": "MARKET · 市场全景",
      "title": "逐季度融资走势 ",
      "titleEm": "前高后稳",
      "data": [
        {
          "label": "Q1",
          "value": 162,
          "secondary": 18
        },
        {
          "label": "Q2",
          "value": 284,
          "secondary": 26
        },
        {
          "label": "Q3",
          "value": 318,
          "secondary": 31
        },
        {
          "label": "Q4",
          "value": 206,
          "secondary": 22
        }
      ],
      "chartType": "line",
      "showSecondary": true,
      "showValueLabels": true,
      "focusEnabled": true,
      "focusIndex": 2,
      "showAnnotation": true,
      "annotation": "Q2–Q3 为融资高峰，Q4 回落但仍处高位。平均单笔约 10 亿美元，市场对头部标的高度追捧。",
      "stats": [
        {
          "value": "970",
          "unit": "亿美元",
          "caption": "全年融资总额"
        },
        {
          "value": "97",
          "unit": "笔",
          "caption": "大额融资事件"
        },
        {
          "value": "≈10",
          "unit": "亿/笔",
          "caption": "平均单笔规模"
        }
      ],
      "seriesLabels": {
        "primary": "融资额（亿美元）",
        "secondary": "事件笔数"
      },
      "scheme": "green",
      "emphasis": "ticket",
      "breath": 55,
      "magnet": true,
      "aurora": true,
      "auroraSpeed": 1,
      "index": "07 / 73"
    }
  },
  {
    "key": "theme02_page009",
    "themeKey": "theme02",
    "pageNumber": 9,
    "layout": "THEME02-009",
    "slot": "heatmap",
    "label": "月度热力 · Heatmap",
    "bgClass": "",
    "controls": [
      {
        "key": "scheme",
        "label": "配色方案",
        "type": "enum",
        "default": "green",
        "options": [
          [
            "green",
            "霓虹绿"
          ],
          [
            "violet",
            "炫光紫"
          ]
        ],
        "desc": "切换整页炫光配色。",
        "publicKey": "scheme",
        "publicLabel": "配色方案",
        "description": "切换整页炫光配色。"
      },
      {
        "key": "emphasis",
        "label": "强调卡片",
        "type": "enum",
        "default": "ticket",
        "options": [
          [
            "default",
            "默认发光"
          ],
          [
            "ticket",
            "炫光票卡"
          ]
        ],
        "desc": "切换焦点卡片的发光质感。",
        "publicKey": "emphasis",
        "publicLabel": "强调卡片",
        "description": "切换焦点卡片的发光质感。"
      },
      {
        "key": "breath",
        "label": "内光呼吸感",
        "type": "slider",
        "default": 55,
        "min": 0,
        "max": 100,
        "step": 1,
        "desc": "炫光票卡模式下的内光呼吸强度。",
        "publicKey": "breath",
        "publicLabel": "内光呼吸感",
        "description": "炫光票卡模式下的内光呼吸强度。"
      },
      {
        "key": "magnet",
        "label": "磁吸悬停",
        "type": "toggle",
        "default": true,
        "desc": "焦点卡片跟随指针产生轻微位移和倾斜。",
        "publicKey": "magnet",
        "publicLabel": "磁吸悬停",
        "description": "焦点卡片跟随指针产生轻微位移和倾斜。"
      },
      {
        "key": "aurora",
        "label": "渐变流光",
        "type": "toggle",
        "default": true,
        "desc": "开启标题、数字和图表重点元素的流光渐变。",
        "publicKey": "aurora",
        "publicLabel": "渐变流光",
        "description": "开启标题、数字和图表重点元素的流光渐变。"
      },
      {
        "key": "auroraSpeed",
        "label": "流光速度",
        "type": "slider",
        "default": 1,
        "min": 0.4,
        "max": 3,
        "step": 0.1,
        "desc": "流光动画速度。",
        "publicKey": "auroraSpeed",
        "publicLabel": "流光速度",
        "description": "流光动画速度。"
      },
      {
        "key": "cellCount",
        "label": "单元格数量",
        "type": "number",
        "default": 12,
        "min": 3,
        "step": 1,
        "desc": "展示的时间单元数量",
        "publicKey": "cellCount",
        "publicLabel": "单元格数量",
        "description": "展示的时间单元数量"
      },
      {
        "key": "columns",
        "label": "网格列数",
        "type": "number",
        "default": 6,
        "min": 2,
        "max": 6,
        "step": 1,
        "desc": "热力网格的列数，自动换行",
        "publicKey": "columns",
        "publicLabel": "网格列数",
        "description": "热力网格的列数，自动换行"
      },
      {
        "key": "focusEnabled",
        "label": "重点强调",
        "type": "toggle",
        "default": true,
        "desc": "是否高亮某一单元格",
        "publicKey": "focusEnabled",
        "publicLabel": "重点强调",
        "description": "是否高亮某一单元格"
      },
      {
        "key": "focusIndex",
        "label": "强调项",
        "type": "number",
        "default": 7,
        "min": 0,
        "step": 1,
        "desc": "被强调单元格的序号",
        "publicKey": "focusIndex",
        "publicLabel": "强调项",
        "description": "被强调单元格的序号"
      },
      {
        "key": "showValues",
        "label": "数值显示",
        "type": "toggle",
        "default": true,
        "desc": "单元格内显示/隐藏数值",
        "publicKey": "showValueLabels",
        "publicLabel": "数值显示",
        "description": "单元格内显示/隐藏数值"
      },
      {
        "key": "showPeakTag",
        "label": "峰值标记",
        "type": "toggle",
        "default": true,
        "desc": "自动标注最高值单元格",
        "publicKey": "showPeakTag",
        "publicLabel": "峰值标记",
        "description": "自动标注最高值单元格"
      },
      {
        "key": "showScale",
        "label": "强度图例",
        "type": "toggle",
        "default": true,
        "desc": "底部强度渐变图例显隐",
        "publicKey": "showScale",
        "publicLabel": "强度图例",
        "description": "底部强度渐变图例显隐"
      }
    ],
    "defaultProps": {
      "kicker": "HEATMAP · 月度节奏",
      "title": "逐月融资热力 ",
      "titleEm": "双峰浮现",
      "cells": [
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
      "cellCount": 12,
      "columns": 6,
      "valueUnit": "亿",
      "focusEnabled": true,
      "focusIndex": 7,
      "showValues": true,
      "showPeakTag": true,
      "showScale": true,
      "scheme": "green",
      "emphasis": "ticket",
      "breath": 55,
      "magnet": true,
      "aurora": true,
      "auroraSpeed": 1,
      "index": "08 / 73"
    }
  },
  {
    "key": "theme02_page010",
    "themeKey": "theme02",
    "pageNumber": 10,
    "layout": "THEME02-010",
    "slot": "industry",
    "label": "行业占比 · Share",
    "bgClass": "",
    "controls": [
      {
        "key": "scheme",
        "label": "配色方案",
        "type": "enum",
        "default": "green",
        "options": [
          [
            "green",
            "霓虹绿"
          ],
          [
            "violet",
            "炫光紫"
          ]
        ],
        "desc": "切换整页炫光配色。",
        "publicKey": "scheme",
        "publicLabel": "配色方案",
        "description": "切换整页炫光配色。"
      },
      {
        "key": "emphasis",
        "label": "强调卡片",
        "type": "enum",
        "default": "ticket",
        "options": [
          [
            "default",
            "默认发光"
          ],
          [
            "ticket",
            "炫光票卡"
          ]
        ],
        "desc": "切换焦点卡片的发光质感。",
        "publicKey": "emphasis",
        "publicLabel": "强调卡片",
        "description": "切换焦点卡片的发光质感。"
      },
      {
        "key": "breath",
        "label": "内光呼吸感",
        "type": "slider",
        "default": 55,
        "min": 0,
        "max": 100,
        "step": 1,
        "desc": "炫光票卡模式下的内光呼吸强度。",
        "publicKey": "breath",
        "publicLabel": "内光呼吸感",
        "description": "炫光票卡模式下的内光呼吸强度。"
      },
      {
        "key": "magnet",
        "label": "磁吸悬停",
        "type": "toggle",
        "default": true,
        "desc": "焦点卡片跟随指针产生轻微位移和倾斜。",
        "publicKey": "magnet",
        "publicLabel": "磁吸悬停",
        "description": "焦点卡片跟随指针产生轻微位移和倾斜。"
      },
      {
        "key": "aurora",
        "label": "渐变流光",
        "type": "toggle",
        "default": true,
        "desc": "开启标题、数字和图表重点元素的流光渐变。",
        "publicKey": "aurora",
        "publicLabel": "渐变流光",
        "description": "开启标题、数字和图表重点元素的流光渐变。"
      },
      {
        "key": "auroraSpeed",
        "label": "流光速度",
        "type": "slider",
        "default": 1,
        "min": 0.4,
        "max": 3,
        "step": 0.1,
        "desc": "流光动画速度。",
        "publicKey": "auroraSpeed",
        "publicLabel": "流光速度",
        "description": "流光动画速度。"
      },
      {
        "key": "chartType",
        "label": "图表类型",
        "type": "enum",
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
        "desc": "占比数据的呈现形式",
        "publicKey": "chartType",
        "publicLabel": "图表类型",
        "description": "占比数据的呈现形式"
      },
      {
        "key": "focusEnabled",
        "label": "重点强调",
        "type": "toggle",
        "default": true,
        "desc": "是否高亮某一分类",
        "publicKey": "focusEnabled",
        "publicLabel": "重点强调",
        "description": "是否高亮某一分类"
      },
      {
        "key": "focusIndex",
        "label": "强调项",
        "type": "number",
        "default": 0,
        "min": 0,
        "step": 1,
        "desc": "被强调分类的序号",
        "publicKey": "focusIndex",
        "publicLabel": "强调项",
        "description": "被强调分类的序号"
      },
      {
        "key": "showLegend",
        "label": "图例",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏右侧图例列表",
        "publicKey": "showLegend",
        "publicLabel": "图例",
        "description": "显示/隐藏右侧图例列表"
      },
      {
        "key": "showCenter",
        "label": "中心数据",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏环形图中心的合计读数",
        "publicKey": "showCenter",
        "publicLabel": "中心数据",
        "description": "显示/隐藏环形图中心的合计读数"
      },
      {
        "key": "showValueLabels",
        "label": "数值标签",
        "type": "toggle",
        "default": true,
        "desc": "在图表上显示占比数值",
        "publicKey": "showValueLabels",
        "publicLabel": "数值标签",
        "description": "在图表上显示占比数值"
      }
    ],
    "defaultProps": {
      "kicker": "STRUCTURE · 横向透视",
      "title": "行业赛道融资额占比 ",
      "titleEm": "大模型领跑",
      "data": [
        {
          "label": "通用大模型",
          "value": 420,
          "pct": "43.3%"
        },
        {
          "label": "垂直应用",
          "value": 245,
          "pct": "25.3%"
        },
        {
          "label": "AI 基础设施",
          "value": 158,
          "pct": "16.3%"
        },
        {
          "label": "AI 芯片",
          "value": 97,
          "pct": "10.0%"
        },
        {
          "label": "其他（工具链 / 安全）",
          "value": 50,
          "pct": "5.1%",
          "color": "#41454f",
          "hatch": true
        }
      ],
      "chartType": "donut",
      "focusEnabled": true,
      "focusIndex": 0,
      "showLegend": true,
      "showCenter": true,
      "showValueLabels": true,
      "centerValue": "970",
      "centerLabel": "亿美元 · 全年合计",
      "finding": "通用大模型占据近半壁江山，反映投资人押注 AGI 叙事；基础设施与芯片合计超四分之一，上游热度不减。",
      "scheme": "green",
      "emphasis": "ticket",
      "breath": 55,
      "magnet": true,
      "aurora": true,
      "auroraSpeed": 1,
      "index": "09 / 73"
    }
  },
  {
    "key": "theme02_page011",
    "themeKey": "theme02",
    "pageNumber": 11,
    "layout": "THEME02-011",
    "slot": "ranking",
    "label": "融资榜单 · Leaderboard",
    "bgClass": "",
    "controls": [
      {
        "key": "scheme",
        "label": "配色方案",
        "type": "enum",
        "default": "green",
        "options": [
          [
            "green",
            "霓虹绿"
          ],
          [
            "violet",
            "炫光紫"
          ]
        ],
        "desc": "切换整页炫光配色。",
        "publicKey": "scheme",
        "publicLabel": "配色方案",
        "description": "切换整页炫光配色。"
      },
      {
        "key": "emphasis",
        "label": "强调卡片",
        "type": "enum",
        "default": "ticket",
        "options": [
          [
            "default",
            "默认发光"
          ],
          [
            "ticket",
            "炫光票卡"
          ]
        ],
        "desc": "切换焦点卡片的发光质感。",
        "publicKey": "emphasis",
        "publicLabel": "强调卡片",
        "description": "切换焦点卡片的发光质感。"
      },
      {
        "key": "breath",
        "label": "内光呼吸感",
        "type": "slider",
        "default": 55,
        "min": 0,
        "max": 100,
        "step": 1,
        "desc": "炫光票卡模式下的内光呼吸强度。",
        "publicKey": "breath",
        "publicLabel": "内光呼吸感",
        "description": "炫光票卡模式下的内光呼吸强度。"
      },
      {
        "key": "magnet",
        "label": "磁吸悬停",
        "type": "toggle",
        "default": true,
        "desc": "焦点卡片跟随指针产生轻微位移和倾斜。",
        "publicKey": "magnet",
        "publicLabel": "磁吸悬停",
        "description": "焦点卡片跟随指针产生轻微位移和倾斜。"
      },
      {
        "key": "aurora",
        "label": "渐变流光",
        "type": "toggle",
        "default": true,
        "desc": "开启标题、数字和图表重点元素的流光渐变。",
        "publicKey": "aurora",
        "publicLabel": "渐变流光",
        "description": "开启标题、数字和图表重点元素的流光渐变。"
      },
      {
        "key": "auroraSpeed",
        "label": "流光速度",
        "type": "slider",
        "default": 1,
        "min": 0.4,
        "max": 3,
        "step": 0.1,
        "desc": "流光动画速度。",
        "publicKey": "auroraSpeed",
        "publicLabel": "流光速度",
        "description": "流光动画速度。"
      },
      {
        "key": "rowCount",
        "label": "行数",
        "type": "number",
        "default": 6,
        "min": 3,
        "step": 1,
        "desc": "展示的榜单行数",
        "publicKey": "rowCount",
        "publicLabel": "行数",
        "description": "展示的榜单行数"
      },
      {
        "key": "focusEnabled",
        "label": "重点强调",
        "type": "toggle",
        "default": true,
        "desc": "是否高亮其中一行",
        "publicKey": "focusEnabled",
        "publicLabel": "重点强调",
        "description": "是否高亮其中一行"
      },
      {
        "key": "focusIndex",
        "label": "强调项",
        "type": "number",
        "default": 0,
        "min": 0,
        "step": 1,
        "desc": "被强调行的序号",
        "publicKey": "focusIndex",
        "publicLabel": "强调项",
        "description": "被强调行的序号"
      },
      {
        "key": "showRank",
        "label": "名次徽章",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏左侧名次徽章",
        "publicKey": "showRank",
        "publicLabel": "名次徽章",
        "description": "显示/隐藏左侧名次徽章"
      },
      {
        "key": "showTrack",
        "label": "分类列",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏公司下方的分类说明",
        "publicKey": "showGuide",
        "publicLabel": "分类列",
        "description": "显示/隐藏公司下方的分类说明"
      },
      {
        "key": "showBars",
        "label": "条形可视化",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏数值的等比条形",
        "publicKey": "showValueLabels",
        "publicLabel": "条形可视化",
        "description": "显示/隐藏数值的等比条形"
      },
      {
        "key": "showValueLabels",
        "label": "数值列",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏右侧数值",
        "publicKey": "showValueLabels2",
        "publicLabel": "数值列",
        "description": "显示/隐藏右侧数值"
      }
    ],
    "defaultProps": {
      "kicker": "LEADERBOARD · 头部玩家",
      "title": "头部公司融资榜单 ",
      "titleEm": "巨头吸金",
      "columns": {
        "rank": "排名",
        "name": "公司",
        "track": "主营赛道",
        "value": "最大单笔（亿美元）"
      },
      "unit": "",
      "rows": [
        {
          "name": "OpenAI",
          "track": "通用大模型",
          "value": 66
        },
        {
          "name": "Anthropic",
          "track": "通用大模型",
          "value": 65
        },
        {
          "name": "xAI",
          "track": "通用大模型",
          "value": 50
        },
        {
          "name": "CoreWeave",
          "track": "AI 基础设施 · 算力云",
          "value": 11
        },
        {
          "name": "Safe Superintelligence",
          "track": "通用大模型",
          "value": 10
        },
        {
          "name": "Scale AI",
          "track": "AI 基础设施 · 数据标注",
          "value": 10
        },
        {
          "name": "Figure AI",
          "track": "AI 硬件 · 人形机器人",
          "value": 6.8
        },
        {
          "name": "Perplexity AI",
          "track": "垂直应用 · AI 搜索",
          "value": 5.2
        },
        {
          "name": "Databricks",
          "track": "AI 基础设施 · 数据平台",
          "value": 5
        },
        {
          "name": "Glean",
          "track": "垂直应用 · 企业搜索",
          "value": 2.6
        }
      ],
      "rowCount": 6,
      "focusEnabled": true,
      "focusIndex": 0,
      "showRank": true,
      "showTrack": true,
      "showBars": true,
      "showValueLabels": true,
      "footnote": "注：部分公司全年有多轮融资，此处仅列其最大单笔。",
      "scheme": "green",
      "emphasis": "ticket",
      "breath": 55,
      "magnet": true,
      "aurora": true,
      "auroraSpeed": 1,
      "index": "10 / 73"
    }
  },
  {
    "key": "theme02_page012",
    "themeKey": "theme02",
    "pageNumber": 12,
    "layout": "THEME02-012",
    "slot": "timeline",
    "label": "时间轴 · Timeline",
    "bgClass": "",
    "controls": [
      {
        "key": "scheme",
        "label": "配色方案",
        "type": "enum",
        "default": "green",
        "options": [
          [
            "green",
            "霓虹绿"
          ],
          [
            "violet",
            "炫光紫"
          ]
        ],
        "desc": "切换整页炫光配色。",
        "publicKey": "scheme",
        "publicLabel": "配色方案",
        "description": "切换整页炫光配色。"
      },
      {
        "key": "emphasis",
        "label": "强调卡片",
        "type": "enum",
        "default": "ticket",
        "options": [
          [
            "default",
            "默认发光"
          ],
          [
            "ticket",
            "炫光票卡"
          ]
        ],
        "desc": "切换焦点卡片的发光质感。",
        "publicKey": "emphasis",
        "publicLabel": "强调卡片",
        "description": "切换焦点卡片的发光质感。"
      },
      {
        "key": "breath",
        "label": "内光呼吸感",
        "type": "slider",
        "default": 55,
        "min": 0,
        "max": 100,
        "step": 1,
        "desc": "炫光票卡模式下的内光呼吸强度。",
        "publicKey": "breath",
        "publicLabel": "内光呼吸感",
        "description": "炫光票卡模式下的内光呼吸强度。"
      },
      {
        "key": "magnet",
        "label": "磁吸悬停",
        "type": "toggle",
        "default": true,
        "desc": "焦点卡片跟随指针产生轻微位移和倾斜。",
        "publicKey": "magnet",
        "publicLabel": "磁吸悬停",
        "description": "焦点卡片跟随指针产生轻微位移和倾斜。"
      },
      {
        "key": "aurora",
        "label": "渐变流光",
        "type": "toggle",
        "default": true,
        "desc": "开启标题、数字和图表重点元素的流光渐变。",
        "publicKey": "aurora",
        "publicLabel": "渐变流光",
        "description": "开启标题、数字和图表重点元素的流光渐变。"
      },
      {
        "key": "auroraSpeed",
        "label": "流光速度",
        "type": "slider",
        "default": 1,
        "min": 0.4,
        "max": 3,
        "step": 0.1,
        "desc": "流光动画速度。",
        "publicKey": "auroraSpeed",
        "publicLabel": "流光速度",
        "description": "流光动画速度。"
      },
      {
        "key": "itemCount",
        "label": "节点数量",
        "type": "number",
        "default": 5,
        "min": 3,
        "step": 1,
        "desc": "时间轴节点数量",
        "publicKey": "itemCount",
        "publicLabel": "节点数量",
        "description": "时间轴节点数量"
      },
      {
        "key": "orientation",
        "label": "轴向",
        "type": "enum",
        "default": "horizontal",
        "options": [
          {
            "value": "horizontal",
            "label": "横向"
          },
          {
            "value": "vertical",
            "label": "纵向"
          }
        ],
        "desc": "时间轴排布方向",
        "publicKey": "orientation",
        "publicLabel": "轴向",
        "description": "时间轴排布方向"
      },
      {
        "key": "focusEnabled",
        "label": "重点强调",
        "type": "toggle",
        "default": true,
        "desc": "是否高亮某一节点",
        "publicKey": "focusEnabled",
        "publicLabel": "重点强调",
        "description": "是否高亮某一节点"
      },
      {
        "key": "focusIndex",
        "label": "强调项",
        "type": "number",
        "default": 3,
        "min": 0,
        "step": 1,
        "desc": "被强调节点的序号",
        "publicKey": "focusIndex",
        "publicLabel": "强调项",
        "description": "被强调节点的序号"
      },
      {
        "key": "showConnector",
        "label": "连接轴线",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏贯穿节点的轴线",
        "publicKey": "showConnector",
        "publicLabel": "连接轴线",
        "description": "显示/隐藏贯穿节点的轴线"
      },
      {
        "key": "showMeta",
        "label": "描述文案",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏节点的补充描述",
        "publicKey": "showMeta",
        "publicLabel": "描述文案",
        "description": "显示/隐藏节点的补充描述"
      }
    ],
    "defaultProps": {
      "kicker": "TIMELINE · 资本节奏",
      "title": "2024 关键融资里程碑 ",
      "titleEm": "前高后稳",
      "items": [
        {
          "date": "2024 · Q1",
          "tag": "市场回暖",
          "title": "单季 162 亿美元",
          "desc": "18 笔大额事件，情绪自年初快速回暖。"
        },
        {
          "date": "2024 · 05",
          "tag": "Anthropic Series G",
          "title": "融资 280 亿 · 估值 600 亿",
          "desc": "安全对齐路线获企业信任，开启反超序章。"
        },
        {
          "date": "2024 · 08",
          "tag": "集中关账",
          "title": "单月峰值 118 亿",
          "desc": "多家头部公司同期完成大额轮次。"
        },
        {
          "date": "2024 · 11",
          "tag": "xAI / Anthropic",
          "title": "估值登顶 9650 亿",
          "desc": "xAI 融资 50 亿，Anthropic 扩轮 190 亿。"
        },
        {
          "date": "2024 · Q4",
          "tag": "理性回落",
          "title": "单季 206 亿 仍处高位",
          "desc": "从狂热转向分化，资本回归兑现逻辑。"
        },
        {
          "date": "2026 · 06",
          "tag": "IPO 在即",
          "title": "Anthropic 递交上市申请",
          "desc": "一级市场盛宴向二级市场传导。"
        }
      ],
      "itemCount": 5,
      "orientation": "horizontal",
      "focusEnabled": true,
      "focusIndex": 3,
      "showConnector": true,
      "showMeta": true,
      "scheme": "green",
      "emphasis": "ticket",
      "breath": 55,
      "magnet": true,
      "aurora": true,
      "auroraSpeed": 1,
      "index": "11 / 73"
    }
  },
  {
    "key": "theme02_page013",
    "themeKey": "theme02",
    "pageNumber": 13,
    "layout": "THEME02-013",
    "slot": "showcase",
    "label": "案例图景 · Showcase",
    "bgClass": "",
    "controls": [
      {
        "key": "scheme",
        "label": "配色方案",
        "type": "enum",
        "default": "green",
        "options": [
          [
            "green",
            "霓虹绿"
          ],
          [
            "violet",
            "炫光紫"
          ]
        ],
        "desc": "切换整页炫光配色。",
        "publicKey": "scheme",
        "publicLabel": "配色方案",
        "description": "切换整页炫光配色。"
      },
      {
        "key": "emphasis",
        "label": "强调卡片",
        "type": "enum",
        "default": "ticket",
        "options": [
          [
            "default",
            "默认发光"
          ],
          [
            "ticket",
            "炫光票卡"
          ]
        ],
        "desc": "切换焦点卡片的发光质感。",
        "publicKey": "emphasis",
        "publicLabel": "强调卡片",
        "description": "切换焦点卡片的发光质感。"
      },
      {
        "key": "breath",
        "label": "内光呼吸感",
        "type": "slider",
        "default": 55,
        "min": 0,
        "max": 100,
        "step": 1,
        "desc": "炫光票卡模式下的内光呼吸强度。",
        "publicKey": "breath",
        "publicLabel": "内光呼吸感",
        "description": "炫光票卡模式下的内光呼吸强度。"
      },
      {
        "key": "magnet",
        "label": "磁吸悬停",
        "type": "toggle",
        "default": true,
        "desc": "焦点卡片跟随指针产生轻微位移和倾斜。",
        "publicKey": "magnet",
        "publicLabel": "磁吸悬停",
        "description": "焦点卡片跟随指针产生轻微位移和倾斜。"
      },
      {
        "key": "aurora",
        "label": "渐变流光",
        "type": "toggle",
        "default": true,
        "desc": "开启标题、数字和图表重点元素的流光渐变。",
        "publicKey": "aurora",
        "publicLabel": "渐变流光",
        "description": "开启标题、数字和图表重点元素的流光渐变。"
      },
      {
        "key": "auroraSpeed",
        "label": "流光速度",
        "type": "slider",
        "default": 1,
        "min": 0.4,
        "max": 3,
        "step": 0.1,
        "desc": "流光动画速度。",
        "publicKey": "auroraSpeed",
        "publicLabel": "流光速度",
        "description": "流光动画速度。"
      },
      {
        "key": "imageCount",
        "label": "图片数量",
        "type": "number",
        "default": 3,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "配图槽位数量（0 = 纯文字版式）",
        "publicKey": "imageCount",
        "publicLabel": "图片数量",
        "description": "配图槽位数量（0 = 纯文字版式）"
      },
      {
        "key": "layout",
        "label": "版式",
        "type": "enum",
        "default": "split",
        "options": [
          {
            "value": "split",
            "label": "图文分栏"
          },
          {
            "value": "full",
            "label": "满幅图廊"
          }
        ],
        "desc": "图文分栏，或图片占主导的满幅图廊",
        "publicKey": "layout",
        "publicLabel": "版式",
        "description": "图文分栏，或图片占主导的满幅图廊"
      },
      {
        "key": "focusEnabled",
        "label": "重点强调",
        "type": "toggle",
        "default": false,
        "desc": "是否高亮其中一张配图",
        "publicKey": "focusEnabled",
        "publicLabel": "重点强调",
        "description": "是否高亮其中一张配图"
      },
      {
        "key": "focusIndex",
        "label": "强调项",
        "type": "number",
        "default": 0,
        "min": 0,
        "step": 1,
        "desc": "被强调配图的序号",
        "publicKey": "focusIndex",
        "publicLabel": "强调项",
        "description": "被强调配图的序号"
      },
      {
        "key": "showCaptions",
        "label": "图注",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏图片上的说明文字",
        "publicKey": "showCaptions",
        "publicLabel": "图注",
        "description": "显示/隐藏图片上的说明文字"
      },
      {
        "key": "showStat",
        "label": "关键数字",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏侧栏的关键数字",
        "publicKey": "showStat",
        "publicLabel": "关键数字",
        "description": "显示/隐藏侧栏的关键数字"
      }
    ],
    "defaultProps": {
      "kicker": "CASES · 案例图景",
      "title": "典型案例图景 ",
      "titleEm": "头部玩家",
      "lead": "从模型层到基础设施，头部玩家以不同路径吸纳资本——技术领先、安全对齐、算力卡位，共同构成 2024 的资本图景。",
      "imageCount": 3,
      "layout": "split",
      "captions": [
        "OpenAI · 通用大模型",
        "Anthropic · 安全对齐",
        "xAI · 实时多模态",
        "CoreWeave · 算力云"
      ],
      "focusEnabled": false,
      "focusIndex": 0,
      "showCaptions": true,
      "showStat": true,
      "stat": {
        "value": "650",
        "unit": "亿美元",
        "caption": "Anthropic 全年累计融资"
      },
      "tags": [
        "通用大模型",
        "安全对齐",
        "算力卡位"
      ],
      "images": [],
      "scheme": "green",
      "emphasis": "ticket",
      "breath": 55,
      "magnet": true,
      "aurora": true,
      "auroraSpeed": 1,
      "index": "12 / 73"
    }
  },
  {
    "key": "theme02_page014",
    "themeKey": "theme02",
    "pageNumber": 14,
    "layout": "THEME02-014",
    "slot": "section",
    "label": "章节页 · Section",
    "bgClass": "",
    "controls": [
      {
        "key": "scheme",
        "label": "配色方案",
        "type": "enum",
        "default": "green",
        "options": [
          [
            "green",
            "霓虹绿"
          ],
          [
            "violet",
            "炫光紫"
          ]
        ],
        "desc": "切换整页炫光配色。",
        "publicKey": "scheme",
        "publicLabel": "配色方案",
        "description": "切换整页炫光配色。"
      },
      {
        "key": "emphasis",
        "label": "强调卡片",
        "type": "enum",
        "default": "ticket",
        "options": [
          [
            "default",
            "默认发光"
          ],
          [
            "ticket",
            "炫光票卡"
          ]
        ],
        "desc": "切换焦点卡片的发光质感。",
        "publicKey": "emphasis",
        "publicLabel": "强调卡片",
        "description": "切换焦点卡片的发光质感。"
      },
      {
        "key": "breath",
        "label": "内光呼吸感",
        "type": "slider",
        "default": 55,
        "min": 0,
        "max": 100,
        "step": 1,
        "desc": "炫光票卡模式下的内光呼吸强度。",
        "publicKey": "breath",
        "publicLabel": "内光呼吸感",
        "description": "炫光票卡模式下的内光呼吸强度。"
      },
      {
        "key": "magnet",
        "label": "磁吸悬停",
        "type": "toggle",
        "default": true,
        "desc": "焦点卡片跟随指针产生轻微位移和倾斜。",
        "publicKey": "magnet",
        "publicLabel": "磁吸悬停",
        "description": "焦点卡片跟随指针产生轻微位移和倾斜。"
      },
      {
        "key": "aurora",
        "label": "渐变流光",
        "type": "toggle",
        "default": true,
        "desc": "开启标题、数字和图表重点元素的流光渐变。",
        "publicKey": "aurora",
        "publicLabel": "渐变流光",
        "description": "开启标题、数字和图表重点元素的流光渐变。"
      },
      {
        "key": "auroraSpeed",
        "label": "流光速度",
        "type": "slider",
        "default": 1,
        "min": 0.4,
        "max": 3,
        "step": 0.1,
        "desc": "流光动画速度。",
        "publicKey": "auroraSpeed",
        "publicLabel": "流光速度",
        "description": "流光动画速度。"
      },
      {
        "key": "align",
        "label": "对齐",
        "type": "enum",
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
        "desc": "章节页整体对齐方式",
        "publicKey": "align",
        "publicLabel": "对齐",
        "description": "章节页整体对齐方式"
      },
      {
        "key": "showNumber",
        "label": "章节大序号",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏超大章节编号",
        "publicKey": "showNumber",
        "publicLabel": "章节大序号",
        "description": "显示/隐藏超大章节编号"
      },
      {
        "key": "showAgenda",
        "label": "章节目录",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏小节索引列表",
        "publicKey": "showAgenda",
        "publicLabel": "章节目录",
        "description": "显示/隐藏小节索引列表"
      },
      {
        "key": "showLead",
        "label": "导语",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏章节导语",
        "publicKey": "showLead",
        "publicLabel": "导语",
        "description": "显示/隐藏章节导语"
      },
      {
        "key": "showRule",
        "label": "强调分隔线",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏标题旁的强调短线",
        "publicKey": "showRule",
        "publicLabel": "强调分隔线",
        "description": "显示/隐藏标题旁的强调短线"
      }
    ],
    "defaultProps": {
      "kicker": "PART 02 · 深度透视",
      "chapterNo": "02",
      "title": "结构与机会 ",
      "titleEm": "在分化中定位",
      "lead": "当资本从“赌叙事”转向“看兑现”，真正的问题不再是谁融得最多，而是热度与兑现如何分布、产业链各层级的确定性几何。",
      "agenda": [
        "四象限 · 资本热度 × 商业兑现",
        "产业链分层 · 上游 / 中游 / 下游",
        "年度关键指标复盘"
      ],
      "align": "left",
      "showNumber": true,
      "showAgenda": true,
      "showLead": true,
      "showRule": true,
      "scheme": "green",
      "emphasis": "ticket",
      "breath": 55,
      "magnet": true,
      "aurora": true,
      "auroraSpeed": 1,
      "index": "13 / 73"
    }
  },
  {
    "key": "theme02_page015",
    "themeKey": "theme02",
    "pageNumber": 15,
    "layout": "THEME02-015",
    "slot": "quadrant",
    "label": "四象限 · Matrix",
    "bgClass": "",
    "controls": [
      {
        "key": "scheme",
        "label": "配色方案",
        "type": "enum",
        "default": "green",
        "options": [
          [
            "green",
            "霓虹绿"
          ],
          [
            "violet",
            "炫光紫"
          ]
        ],
        "desc": "切换整页炫光配色。",
        "publicKey": "scheme",
        "publicLabel": "配色方案",
        "description": "切换整页炫光配色。"
      },
      {
        "key": "emphasis",
        "label": "强调卡片",
        "type": "enum",
        "default": "ticket",
        "options": [
          [
            "default",
            "默认发光"
          ],
          [
            "ticket",
            "炫光票卡"
          ]
        ],
        "desc": "切换焦点卡片的发光质感。",
        "publicKey": "emphasis",
        "publicLabel": "强调卡片",
        "description": "切换焦点卡片的发光质感。"
      },
      {
        "key": "breath",
        "label": "内光呼吸感",
        "type": "slider",
        "default": 55,
        "min": 0,
        "max": 100,
        "step": 1,
        "desc": "炫光票卡模式下的内光呼吸强度。",
        "publicKey": "breath",
        "publicLabel": "内光呼吸感",
        "description": "炫光票卡模式下的内光呼吸强度。"
      },
      {
        "key": "magnet",
        "label": "磁吸悬停",
        "type": "toggle",
        "default": true,
        "desc": "焦点卡片跟随指针产生轻微位移和倾斜。",
        "publicKey": "magnet",
        "publicLabel": "磁吸悬停",
        "description": "焦点卡片跟随指针产生轻微位移和倾斜。"
      },
      {
        "key": "aurora",
        "label": "渐变流光",
        "type": "toggle",
        "default": true,
        "desc": "开启标题、数字和图表重点元素的流光渐变。",
        "publicKey": "aurora",
        "publicLabel": "渐变流光",
        "description": "开启标题、数字和图表重点元素的流光渐变。"
      },
      {
        "key": "auroraSpeed",
        "label": "流光速度",
        "type": "slider",
        "default": 1,
        "min": 0.4,
        "max": 3,
        "step": 0.1,
        "desc": "流光动画速度。",
        "publicKey": "auroraSpeed",
        "publicLabel": "流光速度",
        "description": "流光动画速度。"
      },
      {
        "key": "focusEnabled",
        "label": "重点强调",
        "type": "toggle",
        "default": true,
        "desc": "是否高亮某一象限",
        "publicKey": "focusEnabled",
        "publicLabel": "重点强调",
        "description": "是否高亮某一象限"
      },
      {
        "key": "focusIndex",
        "label": "强调象限",
        "type": "number",
        "default": 1,
        "min": 0,
        "max": 3,
        "step": 1,
        "desc": "被强调象限的序号（按阅读顺序）",
        "publicKey": "focusIndex",
        "publicLabel": "强调象限",
        "description": "被强调象限的序号（按阅读顺序）"
      },
      {
        "key": "showItems",
        "label": "代表公司",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏象限内的对象标签",
        "publicKey": "showItems",
        "publicLabel": "代表公司",
        "description": "显示/隐藏象限内的对象标签"
      },
      {
        "key": "showDesc",
        "label": "象限说明",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏象限描述文案",
        "publicKey": "showDesc",
        "publicLabel": "象限说明",
        "description": "显示/隐藏象限描述文案"
      },
      {
        "key": "showAxisLabels",
        "label": "坐标轴",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏坐标轴标签与端点",
        "publicKey": "showAxisLabels",
        "publicLabel": "坐标轴",
        "description": "显示/隐藏坐标轴标签与端点"
      }
    ],
    "defaultProps": {
      "kicker": "MATRIX · 选题四象限",
      "title": "资本热度 × 商业兑现 ",
      "titleEm": "四类机会",
      "axes": {
        "x": "商业兑现度",
        "y": "资本热度",
        "xLow": "待验证",
        "xHigh": "高",
        "yLow": "低 / 中",
        "yHigh": "高"
      },
      "quadrants": [
        {
          "label": "叙事泡沫区",
          "desc": "巨额融资，兑现受算力成本与付费转化约束。",
          "items": [
            "OpenAI",
            "Anthropic",
            "xAI",
            "SSI"
          ]
        },
        {
          "label": "明星兑现区",
          "desc": "热度与收入确定性兼具，“卖铲子”逻辑。",
          "items": [
            "CoreWeave",
            "Databricks",
            "Scale AI"
          ]
        },
        {
          "label": "等待验证区",
          "desc": "概念成立但规模未证，作为边缘变量观察。",
          "items": [
            "工具链",
            "安全",
            "早期硬件"
          ]
        },
        {
          "label": "隐形价值区",
          "desc": "单笔不大但落地清晰，看留存与续约。",
          "items": [
            "Glean",
            "Perplexity"
          ]
        }
      ],
      "focusEnabled": true,
      "focusIndex": 1,
      "showItems": true,
      "showDesc": true,
      "showAxisLabels": true,
      "scheme": "green",
      "emphasis": "ticket",
      "breath": 55,
      "magnet": true,
      "aurora": true,
      "auroraSpeed": 1,
      "index": "14 / 73"
    }
  },
  {
    "key": "theme02_page016",
    "themeKey": "theme02",
    "pageNumber": 16,
    "layout": "THEME02-016",
    "slot": "radar",
    "label": "能力雷达 · Radar",
    "bgClass": "",
    "controls": [
      {
        "key": "scheme",
        "label": "配色方案",
        "type": "enum",
        "default": "green",
        "options": [
          [
            "green",
            "霓虹绿"
          ],
          [
            "violet",
            "炫光紫"
          ]
        ],
        "desc": "切换整页炫光配色。",
        "publicKey": "scheme",
        "publicLabel": "配色方案",
        "description": "切换整页炫光配色。"
      },
      {
        "key": "emphasis",
        "label": "强调卡片",
        "type": "enum",
        "default": "ticket",
        "options": [
          [
            "default",
            "默认发光"
          ],
          [
            "ticket",
            "炫光票卡"
          ]
        ],
        "desc": "切换焦点卡片的发光质感。",
        "publicKey": "emphasis",
        "publicLabel": "强调卡片",
        "description": "切换焦点卡片的发光质感。"
      },
      {
        "key": "breath",
        "label": "内光呼吸感",
        "type": "slider",
        "default": 55,
        "min": 0,
        "max": 100,
        "step": 1,
        "desc": "炫光票卡模式下的内光呼吸强度。",
        "publicKey": "breath",
        "publicLabel": "内光呼吸感",
        "description": "炫光票卡模式下的内光呼吸强度。"
      },
      {
        "key": "magnet",
        "label": "磁吸悬停",
        "type": "toggle",
        "default": true,
        "desc": "焦点卡片跟随指针产生轻微位移和倾斜。",
        "publicKey": "magnet",
        "publicLabel": "磁吸悬停",
        "description": "焦点卡片跟随指针产生轻微位移和倾斜。"
      },
      {
        "key": "aurora",
        "label": "渐变流光",
        "type": "toggle",
        "default": true,
        "desc": "开启标题、数字和图表重点元素的流光渐变。",
        "publicKey": "aurora",
        "publicLabel": "渐变流光",
        "description": "开启标题、数字和图表重点元素的流光渐变。"
      },
      {
        "key": "auroraSpeed",
        "label": "流光速度",
        "type": "slider",
        "default": 1,
        "min": 0.4,
        "max": 3,
        "step": 0.1,
        "desc": "流光动画速度。",
        "publicKey": "auroraSpeed",
        "publicLabel": "流光速度",
        "description": "流光动画速度。"
      },
      {
        "key": "axisCount",
        "label": "维度数量",
        "type": "number",
        "default": 6,
        "min": 3,
        "step": 1,
        "desc": "雷达展示的维度数量",
        "publicKey": "axisCount",
        "publicLabel": "维度数量",
        "description": "雷达展示的维度数量"
      },
      {
        "key": "seriesCount",
        "label": "系列数量",
        "type": "number",
        "default": 5,
        "min": 1,
        "step": 1,
        "desc": "叠加对比的系列数量",
        "publicKey": "seriesCount",
        "publicLabel": "系列数量",
        "description": "叠加对比的系列数量"
      },
      {
        "key": "focusEnabled",
        "label": "重点强调",
        "type": "toggle",
        "default": false,
        "desc": "是否强调某一系列（其余淡出）",
        "publicKey": "focusEnabled",
        "publicLabel": "重点强调",
        "description": "是否强调某一系列（其余淡出）"
      },
      {
        "key": "focusIndex",
        "label": "强调项",
        "type": "number",
        "default": 0,
        "min": 0,
        "step": 1,
        "desc": "被强调系列的序号",
        "publicKey": "focusIndex",
        "publicLabel": "强调项",
        "description": "被强调系列的序号"
      },
      {
        "key": "showRings",
        "label": "背景环网",
        "type": "toggle",
        "default": true,
        "desc": "同心环 + 辐射轴显隐",
        "publicKey": "showRings",
        "publicLabel": "背景环网",
        "description": "同心环 + 辐射轴显隐"
      },
      {
        "key": "showDots",
        "label": "顶点圆点",
        "type": "toggle",
        "default": true,
        "desc": "各维度顶点圆点显隐",
        "publicKey": "showDots",
        "publicLabel": "顶点圆点",
        "description": "各维度顶点圆点显隐"
      },
      {
        "key": "showLegend",
        "label": "系列图例",
        "type": "toggle",
        "default": true,
        "desc": "右侧系列图例显隐",
        "publicKey": "showLegend",
        "publicLabel": "系列图例",
        "description": "右侧系列图例显隐"
      },
      {
        "key": "showAxisLabels",
        "label": "维度标签",
        "type": "toggle",
        "default": true,
        "desc": "外圈维度文字标签显隐",
        "publicKey": "showAxisLabels",
        "publicLabel": "维度标签",
        "description": "外圈维度文字标签显隐"
      }
    ],
    "defaultProps": {
      "kicker": "RADAR · 能力雷达",
      "title": "头部之争 ",
      "titleEm": "六维能力画像",
      "lead": "把抽象的“谁更强”拆成六个可比维度——头部玩家的优势与短板，一眼可辨。",
      "axes": [
        "模型能力",
        "商业化",
        "算力储备",
        "数据壁垒",
        "安全对齐",
        "资本厚度"
      ],
      "series": [
        {
          "name": "OpenAI",
          "values": [
            95,
            88,
            90,
            82,
            78,
            96
          ]
        },
        {
          "name": "Anthropic",
          "values": [
            90,
            70,
            76,
            74,
            95,
            84
          ]
        },
        {
          "name": "xAI",
          "values": [
            86,
            58,
            94,
            68,
            60,
            92
          ]
        },
        {
          "name": "Google DeepMind",
          "values": [
            93,
            78,
            90,
            88,
            82,
            89
          ]
        },
        {
          "name": "Mistral",
          "values": [
            80,
            62,
            56,
            60,
            72,
            64
          ]
        }
      ],
      "axisCount": 6,
      "seriesCount": 5,
      "focusEnabled": false,
      "focusIndex": 0,
      "showRings": true,
      "showDots": true,
      "showLegend": true,
      "showAxisLabels": true,
      "scheme": "green",
      "emphasis": "ticket",
      "breath": 55,
      "magnet": true,
      "aurora": true,
      "auroraSpeed": 1,
      "index": "15 / 73"
    }
  },
  {
    "key": "theme02_page017",
    "themeKey": "theme02",
    "pageNumber": 17,
    "layout": "THEME02-017",
    "slot": "matrix",
    "label": "评级矩阵 · Rating",
    "bgClass": "",
    "controls": [
      {
        "key": "scheme",
        "label": "配色方案",
        "type": "enum",
        "default": "green",
        "options": [
          [
            "green",
            "霓虹绿"
          ],
          [
            "violet",
            "炫光紫"
          ]
        ],
        "desc": "切换整页炫光配色。",
        "publicKey": "scheme",
        "publicLabel": "配色方案",
        "description": "切换整页炫光配色。"
      },
      {
        "key": "emphasis",
        "label": "强调卡片",
        "type": "enum",
        "default": "ticket",
        "options": [
          [
            "default",
            "默认发光"
          ],
          [
            "ticket",
            "炫光票卡"
          ]
        ],
        "desc": "切换焦点卡片的发光质感。",
        "publicKey": "emphasis",
        "publicLabel": "强调卡片",
        "description": "切换焦点卡片的发光质感。"
      },
      {
        "key": "breath",
        "label": "内光呼吸感",
        "type": "slider",
        "default": 55,
        "min": 0,
        "max": 100,
        "step": 1,
        "desc": "炫光票卡模式下的内光呼吸强度。",
        "publicKey": "breath",
        "publicLabel": "内光呼吸感",
        "description": "炫光票卡模式下的内光呼吸强度。"
      },
      {
        "key": "magnet",
        "label": "磁吸悬停",
        "type": "toggle",
        "default": true,
        "desc": "焦点卡片跟随指针产生轻微位移和倾斜。",
        "publicKey": "magnet",
        "publicLabel": "磁吸悬停",
        "description": "焦点卡片跟随指针产生轻微位移和倾斜。"
      },
      {
        "key": "aurora",
        "label": "渐变流光",
        "type": "toggle",
        "default": true,
        "desc": "开启标题、数字和图表重点元素的流光渐变。",
        "publicKey": "aurora",
        "publicLabel": "渐变流光",
        "description": "开启标题、数字和图表重点元素的流光渐变。"
      },
      {
        "key": "auroraSpeed",
        "label": "流光速度",
        "type": "slider",
        "default": 1,
        "min": 0.4,
        "max": 3,
        "step": 0.1,
        "desc": "流光动画速度。",
        "publicKey": "auroraSpeed",
        "publicLabel": "流光速度",
        "description": "流光动画速度。"
      },
      {
        "key": "rowCount",
        "label": "行数",
        "type": "number",
        "default": 5,
        "min": 2,
        "step": 1,
        "desc": "展示的数据行数",
        "publicKey": "rowCount",
        "publicLabel": "行数",
        "description": "展示的数据行数"
      },
      {
        "key": "scaleMax",
        "label": "评分满分",
        "type": "number",
        "default": 5,
        "min": 3,
        "max": 5,
        "step": 1,
        "desc": "点阵评分的满分点数",
        "publicKey": "scaleMax",
        "publicLabel": "评分满分",
        "description": "点阵评分的满分点数"
      },
      {
        "key": "focusEnabled",
        "label": "重点强调",
        "type": "toggle",
        "default": true,
        "desc": "是否高亮其中一行",
        "publicKey": "focusEnabled",
        "publicLabel": "重点强调",
        "description": "是否高亮其中一行"
      },
      {
        "key": "focusIndex",
        "label": "强调项",
        "type": "number",
        "default": 2,
        "min": 0,
        "step": 1,
        "desc": "被强调行的序号",
        "publicKey": "focusIndex",
        "publicLabel": "强调项",
        "description": "被强调行的序号"
      },
      {
        "key": "showSub",
        "label": "副标题",
        "type": "toggle",
        "default": true,
        "desc": "行名下方英文/副标显隐",
        "publicKey": "showSub",
        "publicLabel": "副标题",
        "description": "行名下方英文/副标显隐"
      },
      {
        "key": "showVerdict",
        "label": "综合判断列",
        "type": "toggle",
        "default": true,
        "desc": "末列综合判断标签显隐",
        "publicKey": "showVerdict",
        "publicLabel": "综合判断列",
        "description": "末列综合判断标签显隐"
      }
    ],
    "defaultProps": {
      "kicker": "MATRIX · 赛道评级",
      "title": "五大赛道 ",
      "titleEm": "热度·兑现·风险",
      "dims": [
        {
          "label": "资本热度"
        },
        {
          "label": "商业兑现"
        },
        {
          "label": "风险水位"
        }
      ],
      "rows": [
        {
          "label": "通用大模型",
          "sub": "Foundation Model",
          "scores": [
            5,
            2,
            4
          ],
          "verdict": "叙事泡沫区 · 观察",
          "tone": "warn"
        },
        {
          "label": "垂直应用",
          "sub": "Vertical AI",
          "scores": [
            3,
            4,
            2
          ],
          "verdict": "隐形价值区 · 看好",
          "tone": "good"
        },
        {
          "label": "AI 基础设施",
          "sub": "Infrastructure",
          "scores": [
            4,
            5,
            2
          ],
          "verdict": "明星兑现区 · 重点",
          "tone": "good"
        },
        {
          "label": "AI 芯片",
          "sub": "Hardware",
          "scores": [
            3,
            4,
            3
          ],
          "verdict": "卖铲长线 · 中性",
          "tone": "mid"
        },
        {
          "label": "其他工具链",
          "sub": "Tools / Safety",
          "scores": [
            2,
            2,
            3
          ],
          "verdict": "等待验证区 · 谨慎",
          "tone": "warn"
        }
      ],
      "rowCount": 5,
      "scaleMax": 5,
      "focusEnabled": true,
      "focusIndex": 2,
      "showSub": true,
      "showVerdict": true,
      "scheme": "green",
      "emphasis": "ticket",
      "breath": 55,
      "magnet": true,
      "aurora": true,
      "auroraSpeed": 1,
      "index": "16 / 73"
    }
  },
  {
    "key": "theme02_page018",
    "themeKey": "theme02",
    "pageNumber": 18,
    "layout": "THEME02-018",
    "slot": "chain",
    "label": "产业链分层 · Chain",
    "bgClass": "",
    "controls": [
      {
        "key": "scheme",
        "label": "配色方案",
        "type": "enum",
        "default": "green",
        "options": [
          [
            "green",
            "霓虹绿"
          ],
          [
            "violet",
            "炫光紫"
          ]
        ],
        "desc": "切换整页炫光配色。",
        "publicKey": "scheme",
        "publicLabel": "配色方案",
        "description": "切换整页炫光配色。"
      },
      {
        "key": "emphasis",
        "label": "强调卡片",
        "type": "enum",
        "default": "ticket",
        "options": [
          [
            "default",
            "默认发光"
          ],
          [
            "ticket",
            "炫光票卡"
          ]
        ],
        "desc": "切换焦点卡片的发光质感。",
        "publicKey": "emphasis",
        "publicLabel": "强调卡片",
        "description": "切换焦点卡片的发光质感。"
      },
      {
        "key": "breath",
        "label": "内光呼吸感",
        "type": "slider",
        "default": 55,
        "min": 0,
        "max": 100,
        "step": 1,
        "desc": "炫光票卡模式下的内光呼吸强度。",
        "publicKey": "breath",
        "publicLabel": "内光呼吸感",
        "description": "炫光票卡模式下的内光呼吸强度。"
      },
      {
        "key": "magnet",
        "label": "磁吸悬停",
        "type": "toggle",
        "default": true,
        "desc": "焦点卡片跟随指针产生轻微位移和倾斜。",
        "publicKey": "magnet",
        "publicLabel": "磁吸悬停",
        "description": "焦点卡片跟随指针产生轻微位移和倾斜。"
      },
      {
        "key": "aurora",
        "label": "渐变流光",
        "type": "toggle",
        "default": true,
        "desc": "开启标题、数字和图表重点元素的流光渐变。",
        "publicKey": "aurora",
        "publicLabel": "渐变流光",
        "description": "开启标题、数字和图表重点元素的流光渐变。"
      },
      {
        "key": "auroraSpeed",
        "label": "流光速度",
        "type": "slider",
        "default": 1,
        "min": 0.4,
        "max": 3,
        "step": 0.1,
        "desc": "流光动画速度。",
        "publicKey": "auroraSpeed",
        "publicLabel": "流光速度",
        "description": "流光动画速度。"
      },
      {
        "key": "layerCount",
        "label": "层级数量",
        "type": "number",
        "default": 3,
        "min": 2,
        "step": 1,
        "desc": "展示的产业链层级数量",
        "publicKey": "layerCount",
        "publicLabel": "层级数量",
        "description": "展示的产业链层级数量"
      },
      {
        "key": "focusEnabled",
        "label": "重点强调",
        "type": "toggle",
        "default": true,
        "desc": "是否高亮某一层级",
        "publicKey": "focusEnabled",
        "publicLabel": "重点强调",
        "description": "是否高亮某一层级"
      },
      {
        "key": "focusIndex",
        "label": "强调层级",
        "type": "number",
        "default": 0,
        "min": 0,
        "step": 1,
        "desc": "被强调层级的序号",
        "publicKey": "focusIndex",
        "publicLabel": "强调层级",
        "description": "被强调层级的序号"
      },
      {
        "key": "showCompanies",
        "label": "代表公司",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏各环节代表公司",
        "publicKey": "showCompanies",
        "publicLabel": "代表公司",
        "description": "显示/隐藏各环节代表公司"
      },
      {
        "key": "showFlow",
        "label": "层级连接",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏层级之间的传导箭头",
        "publicKey": "showFlow",
        "publicLabel": "层级连接",
        "description": "显示/隐藏层级之间的传导箭头"
      },
      {
        "key": "showNote",
        "label": "层级批注",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏每层右上角的确定性批注",
        "publicKey": "showNote",
        "publicLabel": "层级批注",
        "description": "显示/隐藏每层右上角的确定性批注"
      }
    ],
    "defaultProps": {
      "kicker": "VALUE CHAIN · 产业链分层",
      "title": "上游 · 中游 · 下游 ",
      "titleEm": "层级与确定性",
      "layers": [
        {
          "tier": "上游 · 基础设施",
          "label": "算力与数据底座",
          "note": "确定性最强 · “卖铲子”",
          "segments": [
            {
              "name": "AI 芯片",
              "companies": [
                "Cerebras",
                "Groq"
              ]
            },
            {
              "name": "算力云 / 数据",
              "companies": [
                "CoreWeave",
                "Scale AI"
              ]
            }
          ]
        },
        {
          "tier": "中游 · 模型层",
          "label": "通用与专用模型",
          "note": "竞争最激烈 · 叙事驱动",
          "segments": [
            {
              "name": "通用大模型",
              "companies": [
                "OpenAI",
                "Anthropic",
                "xAI"
              ]
            },
            {
              "name": "开源 / 专用",
              "companies": [
                "Mistral",
                "SSI"
              ]
            }
          ]
        },
        {
          "tier": "下游 · 应用层",
          "label": "生产力与消费场景",
          "note": "潜力最大 · 待验证",
          "segments": [
            {
              "name": "企业生产力",
              "companies": [
                "Glean",
                "Databricks"
              ]
            },
            {
              "name": "消费 / 搜索",
              "companies": [
                "Perplexity"
              ]
            },
            {
              "name": "具身智能 / 机器人",
              "companies": [
                "Figure AI"
              ]
            }
          ]
        }
      ],
      "layerCount": 3,
      "focusEnabled": true,
      "focusIndex": 0,
      "showCompanies": true,
      "showFlow": true,
      "showNote": true,
      "scheme": "green",
      "emphasis": "ticket",
      "breath": 55,
      "magnet": true,
      "aurora": true,
      "auroraSpeed": 1,
      "index": "17 / 73"
    }
  },
  {
    "key": "theme02_page019",
    "themeKey": "theme02",
    "pageNumber": 19,
    "layout": "THEME02-019",
    "slot": "sankey",
    "label": "资金流向 · Sankey",
    "bgClass": "",
    "controls": [
      {
        "key": "scheme",
        "label": "配色方案",
        "type": "enum",
        "default": "green",
        "options": [
          [
            "green",
            "霓虹绿"
          ],
          [
            "violet",
            "炫光紫"
          ]
        ],
        "desc": "切换整页炫光配色。",
        "publicKey": "scheme",
        "publicLabel": "配色方案",
        "description": "切换整页炫光配色。"
      },
      {
        "key": "emphasis",
        "label": "强调卡片",
        "type": "enum",
        "default": "ticket",
        "options": [
          [
            "default",
            "默认发光"
          ],
          [
            "ticket",
            "炫光票卡"
          ]
        ],
        "desc": "切换焦点卡片的发光质感。",
        "publicKey": "emphasis",
        "publicLabel": "强调卡片",
        "description": "切换焦点卡片的发光质感。"
      },
      {
        "key": "breath",
        "label": "内光呼吸感",
        "type": "slider",
        "default": 55,
        "min": 0,
        "max": 100,
        "step": 1,
        "desc": "炫光票卡模式下的内光呼吸强度。",
        "publicKey": "breath",
        "publicLabel": "内光呼吸感",
        "description": "炫光票卡模式下的内光呼吸强度。"
      },
      {
        "key": "magnet",
        "label": "磁吸悬停",
        "type": "toggle",
        "default": true,
        "desc": "焦点卡片跟随指针产生轻微位移和倾斜。",
        "publicKey": "magnet",
        "publicLabel": "磁吸悬停",
        "description": "焦点卡片跟随指针产生轻微位移和倾斜。"
      },
      {
        "key": "aurora",
        "label": "渐变流光",
        "type": "toggle",
        "default": true,
        "desc": "开启标题、数字和图表重点元素的流光渐变。",
        "publicKey": "aurora",
        "publicLabel": "渐变流光",
        "description": "开启标题、数字和图表重点元素的流光渐变。"
      },
      {
        "key": "auroraSpeed",
        "label": "流光速度",
        "type": "slider",
        "default": 1,
        "min": 0.4,
        "max": 3,
        "step": 0.1,
        "desc": "流光动画速度。",
        "publicKey": "auroraSpeed",
        "publicLabel": "流光速度",
        "description": "流光动画速度。"
      },
      {
        "key": "sourceCount",
        "label": "来源数量",
        "type": "number",
        "default": 5,
        "min": 2,
        "step": 1,
        "desc": "左列展示的来源数量",
        "publicKey": "sourceCount",
        "publicLabel": "来源数量",
        "description": "左列展示的来源数量"
      },
      {
        "key": "focusEnabled",
        "label": "重点强调",
        "type": "toggle",
        "default": true,
        "desc": "辉光强调某一来源（其丝带高亮、其余淡出）",
        "publicKey": "focusEnabled",
        "publicLabel": "重点强调",
        "description": "辉光强调某一来源（其丝带高亮、其余淡出）"
      },
      {
        "key": "focusIndex",
        "label": "强调项",
        "type": "number",
        "default": 0,
        "min": 0,
        "step": 1,
        "desc": "被强调来源的序号",
        "publicKey": "focusIndex",
        "publicLabel": "强调项",
        "description": "被强调来源的序号"
      },
      {
        "key": "showValueLabels",
        "label": "数值标签",
        "type": "toggle",
        "default": true,
        "desc": "来源数值 + 占比显隐",
        "publicKey": "showValueLabels",
        "publicLabel": "数值标签",
        "description": "来源数值 + 占比显隐"
      },
      {
        "key": "showTargetMeta",
        "label": "目标说明",
        "type": "toggle",
        "default": true,
        "desc": "右列目标说明 + 流入合计显隐",
        "publicKey": "showTargetMeta",
        "publicLabel": "目标说明",
        "description": "右列目标说明 + 流入合计显隐"
      }
    ],
    "defaultProps": {
      "kicker": "FLOW · 资金流向",
      "title": "970 亿美元 ",
      "titleEm": "流向了哪里",
      "lead": "左侧为各业务赛道吸纳的资金，右侧汇聚到 AI 产业链的上 / 中 / 下游——丝带越宽，金额越大。",
      "sources": [
        {
          "label": "通用大模型",
          "value": 420,
          "to": 1,
          "note": "AGI 叙事"
        },
        {
          "label": "垂直应用",
          "value": 245,
          "to": 2,
          "note": "商业化落地"
        },
        {
          "label": "AI 基础设施",
          "value": 158,
          "to": 0,
          "note": "卖铲子逻辑"
        },
        {
          "label": "AI 芯片",
          "value": 97,
          "to": 0,
          "note": "上游硬件"
        },
        {
          "label": "其他赛道",
          "value": 50,
          "to": 2,
          "note": "工具链 · 安全"
        }
      ],
      "targets": [
        {
          "label": "上游 · 基础设施",
          "sub": "芯片 / 算力云"
        },
        {
          "label": "中游 · 模型层",
          "sub": "通用 / 专用模型"
        },
        {
          "label": "下游 · 应用层",
          "sub": "企业 / 消费 / 具身"
        }
      ],
      "unit": "亿美元",
      "sourceCount": 5,
      "focusEnabled": true,
      "focusIndex": 0,
      "showValueLabels": true,
      "showTargetMeta": true,
      "scheme": "green",
      "emphasis": "ticket",
      "breath": 55,
      "magnet": true,
      "aurora": true,
      "auroraSpeed": 1,
      "index": "18 / 73"
    }
  },
  {
    "key": "theme02_page020",
    "themeKey": "theme02",
    "pageNumber": 20,
    "layout": "THEME02-020",
    "slot": "metrics",
    "label": "关键数字 · Metrics",
    "bgClass": "",
    "controls": [
      {
        "key": "scheme",
        "label": "配色方案",
        "type": "enum",
        "default": "green",
        "options": [
          [
            "green",
            "霓虹绿"
          ],
          [
            "violet",
            "炫光紫"
          ]
        ],
        "desc": "切换整页炫光配色。",
        "publicKey": "scheme",
        "publicLabel": "配色方案",
        "description": "切换整页炫光配色。"
      },
      {
        "key": "emphasis",
        "label": "强调卡片",
        "type": "enum",
        "default": "ticket",
        "options": [
          [
            "default",
            "默认发光"
          ],
          [
            "ticket",
            "炫光票卡"
          ]
        ],
        "desc": "切换焦点卡片的发光质感。",
        "publicKey": "emphasis",
        "publicLabel": "强调卡片",
        "description": "切换焦点卡片的发光质感。"
      },
      {
        "key": "breath",
        "label": "内光呼吸感",
        "type": "slider",
        "default": 55,
        "min": 0,
        "max": 100,
        "step": 1,
        "desc": "炫光票卡模式下的内光呼吸强度。",
        "publicKey": "breath",
        "publicLabel": "内光呼吸感",
        "description": "炫光票卡模式下的内光呼吸强度。"
      },
      {
        "key": "magnet",
        "label": "磁吸悬停",
        "type": "toggle",
        "default": true,
        "desc": "焦点卡片跟随指针产生轻微位移和倾斜。",
        "publicKey": "magnet",
        "publicLabel": "磁吸悬停",
        "description": "焦点卡片跟随指针产生轻微位移和倾斜。"
      },
      {
        "key": "aurora",
        "label": "渐变流光",
        "type": "toggle",
        "default": true,
        "desc": "开启标题、数字和图表重点元素的流光渐变。",
        "publicKey": "aurora",
        "publicLabel": "渐变流光",
        "description": "开启标题、数字和图表重点元素的流光渐变。"
      },
      {
        "key": "auroraSpeed",
        "label": "流光速度",
        "type": "slider",
        "default": 1,
        "min": 0.4,
        "max": 3,
        "step": 0.1,
        "desc": "流光动画速度。",
        "publicKey": "auroraSpeed",
        "publicLabel": "流光速度",
        "description": "流光动画速度。"
      },
      {
        "key": "statCount",
        "label": "数字数量",
        "type": "number",
        "default": 4,
        "min": 2,
        "step": 1,
        "desc": "展示的关键数字数量",
        "publicKey": "statCount",
        "publicLabel": "数字数量",
        "description": "展示的关键数字数量"
      },
      {
        "key": "layout",
        "label": "版式",
        "type": "enum",
        "default": "row",
        "options": [
          {
            "value": "row",
            "label": "等分排列"
          },
          {
            "value": "feature",
            "label": "主次结构"
          }
        ],
        "desc": "等分一排，或一个主数字 + 其余次级",
        "publicKey": "layout",
        "publicLabel": "版式",
        "description": "等分一排，或一个主数字 + 其余次级"
      },
      {
        "key": "focusEnabled",
        "label": "重点强调",
        "type": "toggle",
        "default": false,
        "desc": "是否高亮其中一个数字",
        "publicKey": "focusEnabled",
        "publicLabel": "重点强调",
        "description": "是否高亮其中一个数字"
      },
      {
        "key": "focusIndex",
        "label": "强调项",
        "type": "number",
        "default": 0,
        "min": 0,
        "step": 1,
        "desc": "被强调数字的序号",
        "publicKey": "focusIndex",
        "publicLabel": "强调项",
        "description": "被强调数字的序号"
      },
      {
        "key": "showDelta",
        "label": "注解徽章",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏数字旁的注解徽章",
        "publicKey": "showDelta",
        "publicLabel": "注解徽章",
        "description": "显示/隐藏数字旁的注解徽章"
      },
      {
        "key": "showCaption",
        "label": "说明文案",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏数字下方说明",
        "publicKey": "showCaption",
        "publicLabel": "说明文案",
        "description": "显示/隐藏数字下方说明"
      }
    ],
    "defaultProps": {
      "kicker": "KEY FIGURES · 年度关键指标",
      "title": "一年资本盛宴 ",
      "titleEm": "浓缩为四个数字",
      "stats": [
        {
          "value": "970",
          "unit": "亿美元",
          "caption": "全年 AI 风险投资总额",
          "delta": "创历史新高"
        },
        {
          "value": "97",
          "unit": "笔",
          "caption": "单笔 ≥1 亿美元事件",
          "delta": "占全美 VC 近 1/3"
        },
        {
          "value": "≈10",
          "unit": "亿/笔",
          "caption": "平均单笔融资规模",
          "delta": "头部高度追捧"
        },
        {
          "value": "63.9",
          "unit": "%",
          "caption": "旧金山湾区融资占比",
          "delta": "地理护城河"
        }
      ],
      "statCount": 4,
      "layout": "row",
      "focusEnabled": false,
      "focusIndex": 0,
      "showDelta": true,
      "showCaption": true,
      "scheme": "green",
      "emphasis": "ticket",
      "breath": 55,
      "magnet": true,
      "aurora": true,
      "auroraSpeed": 1,
      "index": "19 / 73"
    }
  },
  {
    "key": "theme02_page021",
    "themeKey": "theme02",
    "pageNumber": 21,
    "layout": "THEME02-021",
    "slot": "bignumber",
    "label": "巨型数字 · Big Number",
    "bgClass": "",
    "controls": [
      {
        "key": "scheme",
        "label": "配色方案",
        "type": "enum",
        "default": "green",
        "options": [
          [
            "green",
            "霓虹绿"
          ],
          [
            "violet",
            "炫光紫"
          ]
        ],
        "desc": "切换整页炫光配色。",
        "publicKey": "scheme",
        "publicLabel": "配色方案",
        "description": "切换整页炫光配色。"
      },
      {
        "key": "emphasis",
        "label": "强调卡片",
        "type": "enum",
        "default": "ticket",
        "options": [
          [
            "default",
            "默认发光"
          ],
          [
            "ticket",
            "炫光票卡"
          ]
        ],
        "desc": "切换焦点卡片的发光质感。",
        "publicKey": "emphasis",
        "publicLabel": "强调卡片",
        "description": "切换焦点卡片的发光质感。"
      },
      {
        "key": "breath",
        "label": "内光呼吸感",
        "type": "slider",
        "default": 55,
        "min": 0,
        "max": 100,
        "step": 1,
        "desc": "炫光票卡模式下的内光呼吸强度。",
        "publicKey": "breath",
        "publicLabel": "内光呼吸感",
        "description": "炫光票卡模式下的内光呼吸强度。"
      },
      {
        "key": "magnet",
        "label": "磁吸悬停",
        "type": "toggle",
        "default": true,
        "desc": "焦点卡片跟随指针产生轻微位移和倾斜。",
        "publicKey": "magnet",
        "publicLabel": "磁吸悬停",
        "description": "焦点卡片跟随指针产生轻微位移和倾斜。"
      },
      {
        "key": "aurora",
        "label": "渐变流光",
        "type": "toggle",
        "default": true,
        "desc": "开启标题、数字和图表重点元素的流光渐变。",
        "publicKey": "aurora",
        "publicLabel": "渐变流光",
        "description": "开启标题、数字和图表重点元素的流光渐变。"
      },
      {
        "key": "auroraSpeed",
        "label": "流光速度",
        "type": "slider",
        "default": 1,
        "min": 0.4,
        "max": 3,
        "step": 0.1,
        "desc": "流光动画速度。",
        "publicKey": "auroraSpeed",
        "publicLabel": "流光速度",
        "description": "流光动画速度。"
      },
      {
        "key": "align",
        "label": "版式",
        "type": "enum",
        "default": "split",
        "options": [
          {
            "value": "split",
            "label": "分栏"
          },
          {
            "value": "center",
            "label": "居中铺满"
          }
        ],
        "desc": "数字+导语分栏，或数字居中铺满",
        "publicKey": "align",
        "publicLabel": "版式",
        "description": "数字+导语分栏，或数字居中铺满"
      },
      {
        "key": "supportCount",
        "label": "支撑数据",
        "type": "number",
        "default": 3,
        "min": 0,
        "step": 1,
        "desc": "底部支撑小数据数量（0 = 不显示）",
        "publicKey": "supportCount",
        "publicLabel": "支撑数据",
        "description": "底部支撑小数据数量（0 = 不显示）"
      },
      {
        "key": "showRing",
        "label": "辉光弧环",
        "type": "toggle",
        "default": false,
        "desc": "主数字背后的发光弧环显隐",
        "publicKey": "showRing",
        "publicLabel": "辉光弧环",
        "description": "主数字背后的发光弧环显隐"
      },
      {
        "key": "showLead",
        "label": "导语",
        "type": "toggle",
        "default": true,
        "desc": "分栏版式右侧导语显隐",
        "publicKey": "showLead",
        "publicLabel": "导语",
        "description": "分栏版式右侧导语显隐"
      },
      {
        "key": "showCaption",
        "label": "数字说明",
        "type": "toggle",
        "default": true,
        "desc": "主数字下方说明文案显隐",
        "publicKey": "showCaption",
        "publicLabel": "数字说明",
        "description": "主数字下方说明文案显隐"
      }
    ],
    "defaultProps": {
      "kicker": "HEADLINE · 资本大年",
      "value": "970",
      "unit": "亿美元",
      "caption": "2024 全年美国 AI 初创吸纳风险投资 · 创历史新高",
      "lead": "单笔 ≥1 亿美元的大额事件共 97 笔，平均每笔约 10 亿美元，占全美风险投资近三分之一——资本正以前所未有的密度涌入 AI。",
      "support": [
        {
          "value": "97",
          "unit": "笔",
          "label": "大额融资事件"
        },
        {
          "value": "≈1/3",
          "unit": "",
          "label": "占全美 VC 比重"
        },
        {
          "value": "63.9",
          "unit": "%",
          "label": "集中于旧金山湾区"
        }
      ],
      "supportCount": 3,
      "align": "split",
      "showRing": false,
      "showLead": true,
      "showCaption": true,
      "scheme": "green",
      "emphasis": "ticket",
      "breath": 55,
      "magnet": true,
      "aurora": true,
      "auroraSpeed": 1,
      "index": "20 / 73"
    }
  },
  {
    "key": "theme02_page022",
    "themeKey": "theme02",
    "pageNumber": 22,
    "layout": "THEME02-022",
    "slot": "delta",
    "label": "今昔对照 · Delta",
    "bgClass": "",
    "controls": [
      {
        "key": "scheme",
        "label": "配色方案",
        "type": "enum",
        "default": "green",
        "options": [
          [
            "green",
            "霓虹绿"
          ],
          [
            "violet",
            "炫光紫"
          ]
        ],
        "desc": "切换整页炫光配色。",
        "publicKey": "scheme",
        "publicLabel": "配色方案",
        "description": "切换整页炫光配色。"
      },
      {
        "key": "emphasis",
        "label": "强调卡片",
        "type": "enum",
        "default": "ticket",
        "options": [
          [
            "default",
            "默认发光"
          ],
          [
            "ticket",
            "炫光票卡"
          ]
        ],
        "desc": "切换焦点卡片的发光质感。",
        "publicKey": "emphasis",
        "publicLabel": "强调卡片",
        "description": "切换焦点卡片的发光质感。"
      },
      {
        "key": "breath",
        "label": "内光呼吸感",
        "type": "slider",
        "default": 55,
        "min": 0,
        "max": 100,
        "step": 1,
        "desc": "炫光票卡模式下的内光呼吸强度。",
        "publicKey": "breath",
        "publicLabel": "内光呼吸感",
        "description": "炫光票卡模式下的内光呼吸强度。"
      },
      {
        "key": "magnet",
        "label": "磁吸悬停",
        "type": "toggle",
        "default": true,
        "desc": "焦点卡片跟随指针产生轻微位移和倾斜。",
        "publicKey": "magnet",
        "publicLabel": "磁吸悬停",
        "description": "焦点卡片跟随指针产生轻微位移和倾斜。"
      },
      {
        "key": "aurora",
        "label": "渐变流光",
        "type": "toggle",
        "default": true,
        "desc": "开启标题、数字和图表重点元素的流光渐变。",
        "publicKey": "aurora",
        "publicLabel": "渐变流光",
        "description": "开启标题、数字和图表重点元素的流光渐变。"
      },
      {
        "key": "auroraSpeed",
        "label": "流光速度",
        "type": "slider",
        "default": 1,
        "min": 0.4,
        "max": 3,
        "step": 0.1,
        "desc": "流光动画速度。",
        "publicKey": "auroraSpeed",
        "publicLabel": "流光速度",
        "description": "流光动画速度。"
      },
      {
        "key": "emphasize",
        "label": "强调侧",
        "type": "enum",
        "default": "to",
        "options": [
          {
            "value": "to",
            "label": "强调终点"
          },
          {
            "value": "from",
            "label": "强调起点"
          },
          {
            "value": "both",
            "label": "两侧都亮"
          }
        ],
        "desc": "辉光强调哪一侧数字",
        "publicKey": "emphasize",
        "publicLabel": "强调侧",
        "description": "辉光强调哪一侧数字"
      },
      {
        "key": "showBadge",
        "label": "变化徽标",
        "type": "toggle",
        "default": true,
        "desc": "中央箭头 + 增减幅徽标显隐",
        "publicKey": "showBadge",
        "publicLabel": "变化徽标",
        "description": "中央箭头 + 增减幅徽标显隐"
      },
      {
        "key": "showLabels",
        "label": "时点标签",
        "type": "toggle",
        "default": true,
        "desc": "起点 / 终点的时点标签显隐",
        "publicKey": "showLabels",
        "publicLabel": "时点标签",
        "description": "起点 / 终点的时点标签显隐"
      },
      {
        "key": "supportCount",
        "label": "支撑数据",
        "type": "number",
        "default": 3,
        "min": 0,
        "step": 1,
        "desc": "底部支撑小数据数量（0 = 不显示）",
        "publicKey": "supportCount",
        "publicLabel": "支撑数据",
        "description": "底部支撑小数据数量（0 = 不显示）"
      },
      {
        "key": "showCaption",
        "label": "底部说明",
        "type": "toggle",
        "default": true,
        "desc": "底部一句话说明显隐",
        "publicKey": "showCaption",
        "publicLabel": "底部说明",
        "description": "底部一句话说明显隐"
      }
    ],
    "defaultProps": {
      "kicker": "SHIFT · 一年之变",
      "from": {
        "value": "305",
        "unit": "亿",
        "label": "2023 全年"
      },
      "to": {
        "value": "970",
        "unit": "亿",
        "label": "2024 全年"
      },
      "delta": {
        "value": "+218",
        "dir": "up",
        "label": "同比增幅"
      },
      "caption": "一年时间，美国 AI 初创吸纳的风险投资翻了三倍有余——资本以前所未有的密度押注同一条主线。",
      "support": [
        {
          "value": "97",
          "unit": "笔",
          "label": "大额融资事件"
        },
        {
          "value": "≈1/3",
          "unit": "",
          "label": "占全美 VC 比重"
        },
        {
          "value": "10",
          "unit": "亿/笔",
          "label": "平均单笔规模"
        }
      ],
      "supportCount": 3,
      "emphasize": "to",
      "showBadge": true,
      "showLabels": true,
      "showCaption": true,
      "scheme": "green",
      "emphasis": "ticket",
      "breath": 55,
      "magnet": true,
      "aurora": true,
      "auroraSpeed": 1,
      "index": "21 / 73"
    }
  },
  {
    "key": "theme02_page023",
    "themeKey": "theme02",
    "pageNumber": 23,
    "layout": "THEME02-023",
    "slot": "bento",
    "label": "数据看板 · Bento",
    "bgClass": "",
    "controls": [
      {
        "key": "scheme",
        "label": "配色方案",
        "type": "enum",
        "default": "green",
        "options": [
          [
            "green",
            "霓虹绿"
          ],
          [
            "violet",
            "炫光紫"
          ]
        ],
        "desc": "切换整页炫光配色。",
        "publicKey": "scheme",
        "publicLabel": "配色方案",
        "description": "切换整页炫光配色。"
      },
      {
        "key": "emphasis",
        "label": "强调卡片",
        "type": "enum",
        "default": "ticket",
        "options": [
          [
            "default",
            "默认发光"
          ],
          [
            "ticket",
            "炫光票卡"
          ]
        ],
        "desc": "切换焦点卡片的发光质感。",
        "publicKey": "emphasis",
        "publicLabel": "强调卡片",
        "description": "切换焦点卡片的发光质感。"
      },
      {
        "key": "breath",
        "label": "内光呼吸感",
        "type": "slider",
        "default": 55,
        "min": 0,
        "max": 100,
        "step": 1,
        "desc": "炫光票卡模式下的内光呼吸强度。",
        "publicKey": "breath",
        "publicLabel": "内光呼吸感",
        "description": "炫光票卡模式下的内光呼吸强度。"
      },
      {
        "key": "magnet",
        "label": "磁吸悬停",
        "type": "toggle",
        "default": true,
        "desc": "焦点卡片跟随指针产生轻微位移和倾斜。",
        "publicKey": "magnet",
        "publicLabel": "磁吸悬停",
        "description": "焦点卡片跟随指针产生轻微位移和倾斜。"
      },
      {
        "key": "aurora",
        "label": "渐变流光",
        "type": "toggle",
        "default": true,
        "desc": "开启标题、数字和图表重点元素的流光渐变。",
        "publicKey": "aurora",
        "publicLabel": "渐变流光",
        "description": "开启标题、数字和图表重点元素的流光渐变。"
      },
      {
        "key": "auroraSpeed",
        "label": "流光速度",
        "type": "slider",
        "default": 1,
        "min": 0.4,
        "max": 3,
        "step": 0.1,
        "desc": "流光动画速度。",
        "publicKey": "auroraSpeed",
        "publicLabel": "流光速度",
        "description": "流光动画速度。"
      },
      {
        "key": "statCount",
        "label": "支撑数字",
        "type": "number",
        "default": 4,
        "min": 2,
        "step": 1,
        "desc": "右侧支撑小数字数量",
        "publicKey": "statCount",
        "publicLabel": "支撑数字",
        "description": "右侧支撑小数字数量"
      },
      {
        "key": "layout",
        "label": "版式",
        "type": "enum",
        "default": "hero-left",
        "options": [
          {
            "value": "hero-left",
            "label": "主单元在左"
          },
          {
            "value": "hero-right",
            "label": "主单元在右"
          }
        ],
        "desc": "主单元位于左侧或右侧",
        "publicKey": "layout",
        "publicLabel": "版式",
        "description": "主单元位于左侧或右侧"
      },
      {
        "key": "accentHero",
        "label": "主单元强调",
        "type": "toggle",
        "default": true,
        "desc": "主单元辉光强调显隐",
        "publicKey": "accentHero",
        "publicLabel": "主单元强调",
        "description": "主单元辉光强调显隐"
      },
      {
        "key": "heroExtra",
        "label": "主单元底部",
        "type": "enum",
        "default": "tags",
        "options": [
          {
            "value": "tags",
            "label": "标签"
          },
          {
            "value": "spark",
            "label": "迷你柱"
          },
          {
            "value": "none",
            "label": "无"
          }
        ],
        "desc": "主单元底部内容形态",
        "publicKey": "heroExtra",
        "publicLabel": "主单元底部",
        "description": "主单元底部内容形态"
      },
      {
        "key": "showCaption",
        "label": "主单元说明",
        "type": "toggle",
        "default": true,
        "desc": "主单元说明文案显隐",
        "publicKey": "showCaption",
        "publicLabel": "主单元说明",
        "description": "主单元说明文案显隐"
      }
    ],
    "defaultProps": {
      "kicker": "DASHBOARD · 数据看板",
      "title": "一屏读懂 ",
      "titleEm": "2024 资本全景",
      "hero": {
        "value": "970",
        "unit": "亿美元",
        "caption": "全年美国 AI 初创吸纳风险投资",
        "note": "创历史新高 · 约占全美 VC 三分之一"
      },
      "stats": [
        {
          "value": "97",
          "unit": "笔",
          "label": "大额融资事件 ≥$100M"
        },
        {
          "value": "≈10",
          "unit": "亿美元",
          "label": "平均单笔规模"
        },
        {
          "value": "63.9",
          "unit": "%",
          "label": "集中于旧金山湾区"
        },
        {
          "value": "5",
          "unit": "家",
          "label": "百亿美元估值俱乐部"
        }
      ],
      "tags": [
        "通用大模型",
        "算力云",
        "AI 应用",
        "数据基础设施",
        "安全对齐"
      ],
      "spark": [
        38,
        52,
        61,
        74,
        88,
        97
      ],
      "statCount": 4,
      "layout": "hero-left",
      "accentHero": true,
      "heroExtra": "tags",
      "showCaption": true,
      "scheme": "green",
      "emphasis": "ticket",
      "breath": 55,
      "magnet": true,
      "aurora": true,
      "auroraSpeed": 1,
      "index": "22 / 73"
    }
  },
  {
    "key": "theme02_page024",
    "themeKey": "theme02",
    "pageNumber": 24,
    "layout": "THEME02-024",
    "slot": "spotlight",
    "label": "案例聚焦 · Spotlight",
    "bgClass": "",
    "controls": [
      {
        "key": "scheme",
        "label": "配色方案",
        "type": "enum",
        "default": "green",
        "options": [
          [
            "green",
            "霓虹绿"
          ],
          [
            "violet",
            "炫光紫"
          ]
        ],
        "desc": "切换整页炫光配色。",
        "publicKey": "scheme",
        "publicLabel": "配色方案",
        "description": "切换整页炫光配色。"
      },
      {
        "key": "emphasis",
        "label": "强调卡片",
        "type": "enum",
        "default": "ticket",
        "options": [
          [
            "default",
            "默认发光"
          ],
          [
            "ticket",
            "炫光票卡"
          ]
        ],
        "desc": "切换焦点卡片的发光质感。",
        "publicKey": "emphasis",
        "publicLabel": "强调卡片",
        "description": "切换焦点卡片的发光质感。"
      },
      {
        "key": "breath",
        "label": "内光呼吸感",
        "type": "slider",
        "default": 55,
        "min": 0,
        "max": 100,
        "step": 1,
        "desc": "炫光票卡模式下的内光呼吸强度。",
        "publicKey": "breath",
        "publicLabel": "内光呼吸感",
        "description": "炫光票卡模式下的内光呼吸强度。"
      },
      {
        "key": "magnet",
        "label": "磁吸悬停",
        "type": "toggle",
        "default": true,
        "desc": "焦点卡片跟随指针产生轻微位移和倾斜。",
        "publicKey": "magnet",
        "publicLabel": "磁吸悬停",
        "description": "焦点卡片跟随指针产生轻微位移和倾斜。"
      },
      {
        "key": "aurora",
        "label": "渐变流光",
        "type": "toggle",
        "default": true,
        "desc": "开启标题、数字和图表重点元素的流光渐变。",
        "publicKey": "aurora",
        "publicLabel": "渐变流光",
        "description": "开启标题、数字和图表重点元素的流光渐变。"
      },
      {
        "key": "auroraSpeed",
        "label": "流光速度",
        "type": "slider",
        "default": 1,
        "min": 0.4,
        "max": 3,
        "step": 0.1,
        "desc": "流光动画速度。",
        "publicKey": "auroraSpeed",
        "publicLabel": "流光速度",
        "description": "流光动画速度。"
      },
      {
        "key": "imageCount",
        "label": "图片数量",
        "type": "number",
        "default": 1,
        "min": 0,
        "max": 1,
        "step": 1,
        "desc": "主图槽位（0 = 纯文字版式）",
        "publicKey": "imageCount",
        "publicLabel": "图片数量",
        "description": "主图槽位（0 = 纯文字版式）"
      },
      {
        "key": "imageSide",
        "label": "图片位置",
        "type": "enum",
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
        "desc": "主图位于左侧或右侧",
        "publicKey": "imageSide",
        "publicLabel": "图片位置",
        "description": "主图位于左侧或右侧"
      },
      {
        "key": "pointCount",
        "label": "要点数量",
        "type": "number",
        "default": 3,
        "min": 1,
        "max": 4,
        "step": 1,
        "desc": "展示的要点条数",
        "publicKey": "pointCount",
        "publicLabel": "要点数量",
        "description": "展示的要点条数"
      },
      {
        "key": "showPoints",
        "label": "要点列表",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏要点列表",
        "publicKey": "showPoints",
        "publicLabel": "要点列表",
        "description": "显示/隐藏要点列表"
      },
      {
        "key": "showStat",
        "label": "关键数字",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏关键数字",
        "publicKey": "showStat",
        "publicLabel": "关键数字",
        "description": "显示/隐藏关键数字"
      },
      {
        "key": "showCaption",
        "label": "图注",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏图片说明",
        "publicKey": "showCaption",
        "publicLabel": "图注",
        "description": "显示/隐藏图片说明"
      }
    ],
    "defaultProps": {
      "kicker": "CASE · 案例聚焦",
      "title": "Anthropic ",
      "titleEm": "从追赶到反超",
      "lead": "2021 年由 OpenAI 前研究副总裁创立，2024 年连续三轮大额融资，一举登顶全球估值最高的 AI 初创企业。",
      "points": [
        {
          "title": "一年三轮",
          "desc": "5/8/11 月三轮关账，累计超 650 亿美元。"
        },
        {
          "title": "安全对齐",
          "desc": "Constitutional AI，赢得企业客户信任。"
        },
        {
          "title": "云巨头加持",
          "desc": "联手 Amazon、Google，渠道覆盖迅速。"
        },
        {
          "title": "IPO 在即",
          "desc": "2026 年 6 月递交上市申请，预计年内挂牌。"
        }
      ],
      "pointCount": 3,
      "stat": {
        "value": "9650",
        "unit": "亿美元",
        "caption": "最新估值 · 全球最高 AI 初创"
      },
      "caption": "Anthropic · 安全对齐",
      "imageCount": 1,
      "imageSide": "right",
      "showStat": true,
      "showPoints": true,
      "showCaption": true,
      "images": [],
      "scheme": "green",
      "emphasis": "ticket",
      "breath": 55,
      "magnet": true,
      "aurora": true,
      "auroraSpeed": 1,
      "index": "23 / 73"
    }
  },
  {
    "key": "theme02_page025",
    "themeKey": "theme02",
    "pageNumber": 25,
    "layout": "THEME02-025",
    "slot": "feature",
    "label": "沉浸大图 · Feature",
    "bgClass": "",
    "controls": [
      {
        "key": "scheme",
        "label": "配色方案",
        "type": "enum",
        "default": "green",
        "options": [
          [
            "green",
            "霓虹绿"
          ],
          [
            "violet",
            "炫光紫"
          ]
        ],
        "desc": "切换整页炫光配色。",
        "publicKey": "scheme",
        "publicLabel": "配色方案",
        "description": "切换整页炫光配色。"
      },
      {
        "key": "emphasis",
        "label": "强调卡片",
        "type": "enum",
        "default": "ticket",
        "options": [
          [
            "default",
            "默认发光"
          ],
          [
            "ticket",
            "炫光票卡"
          ]
        ],
        "desc": "切换焦点卡片的发光质感。",
        "publicKey": "emphasis",
        "publicLabel": "强调卡片",
        "description": "切换焦点卡片的发光质感。"
      },
      {
        "key": "breath",
        "label": "内光呼吸感",
        "type": "slider",
        "default": 55,
        "min": 0,
        "max": 100,
        "step": 1,
        "desc": "炫光票卡模式下的内光呼吸强度。",
        "publicKey": "breath",
        "publicLabel": "内光呼吸感",
        "description": "炫光票卡模式下的内光呼吸强度。"
      },
      {
        "key": "magnet",
        "label": "磁吸悬停",
        "type": "toggle",
        "default": true,
        "desc": "焦点卡片跟随指针产生轻微位移和倾斜。",
        "publicKey": "magnet",
        "publicLabel": "磁吸悬停",
        "description": "焦点卡片跟随指针产生轻微位移和倾斜。"
      },
      {
        "key": "aurora",
        "label": "渐变流光",
        "type": "toggle",
        "default": true,
        "desc": "开启标题、数字和图表重点元素的流光渐变。",
        "publicKey": "aurora",
        "publicLabel": "渐变流光",
        "description": "开启标题、数字和图表重点元素的流光渐变。"
      },
      {
        "key": "auroraSpeed",
        "label": "流光速度",
        "type": "slider",
        "default": 1,
        "min": 0.4,
        "max": 3,
        "step": 0.1,
        "desc": "流光动画速度。",
        "publicKey": "auroraSpeed",
        "publicLabel": "流光速度",
        "description": "流光动画速度。"
      },
      {
        "key": "imageCount",
        "label": "图片数量",
        "type": "number",
        "default": 1,
        "min": 0,
        "max": 3,
        "step": 1,
        "desc": "图片槽位数量（0 = 纯文字主视觉）",
        "publicKey": "imageCount",
        "publicLabel": "图片数量",
        "description": "图片槽位数量（0 = 纯文字主视觉）"
      },
      {
        "key": "overlay",
        "label": "标题蒙层",
        "type": "enum",
        "default": "corner",
        "options": [
          {
            "value": "corner",
            "label": "左下角标"
          },
          {
            "value": "bar",
            "label": "底部通栏"
          },
          {
            "value": "none",
            "label": "不压字"
          }
        ],
        "desc": "标题蒙层位置（不压字时标题回到顶部）",
        "publicKey": "overlay",
        "publicLabel": "标题蒙层",
        "description": "标题蒙层位置（不压字时标题回到顶部）"
      },
      {
        "key": "showStat",
        "label": "角标数字",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏角落关键数字",
        "publicKey": "showStat",
        "publicLabel": "角标数字",
        "description": "显示/隐藏角落关键数字"
      },
      {
        "key": "showLead",
        "label": "蒙层导语",
        "type": "toggle",
        "default": true,
        "desc": "蒙层内导语显隐",
        "publicKey": "showLead",
        "publicLabel": "蒙层导语",
        "description": "蒙层内导语显隐"
      },
      {
        "key": "focusEnabled",
        "label": "重点强调",
        "type": "toggle",
        "default": false,
        "desc": "是否高亮其中一张图",
        "publicKey": "focusEnabled",
        "publicLabel": "重点强调",
        "description": "是否高亮其中一张图"
      },
      {
        "key": "focusIndex",
        "label": "强调项",
        "type": "number",
        "default": 0,
        "min": 0,
        "step": 1,
        "desc": "被强调图的序号",
        "publicKey": "focusIndex",
        "publicLabel": "强调项",
        "description": "被强调图的序号"
      }
    ],
    "defaultProps": {
      "kicker": "CASE · 卖铲子的人",
      "title": "CoreWeave ",
      "titleEm": "算力即稀缺",
      "lead": "从加密挖矿转型 AI 算力云，2024 年融资 110 亿美元、估值破 190 亿——当所有模型公司都在抢 GPU，提前锁定算力的人成了最稀缺标的。",
      "captions": [
        "CoreWeave · AI 算力云",
        "数据中心 · GPU 集群",
        "NVIDIA · 长期供应"
      ],
      "imageCount": 1,
      "overlay": "corner",
      "stat": {
        "value": "110",
        "unit": "亿美元",
        "caption": "2024 融资额 · 估值破 190 亿"
      },
      "showStat": true,
      "showLead": true,
      "focusEnabled": false,
      "focusIndex": 0,
      "images": [],
      "scheme": "green",
      "emphasis": "ticket",
      "breath": 55,
      "magnet": true,
      "aurora": true,
      "auroraSpeed": 1,
      "index": "24 / 73"
    }
  },
  {
    "key": "theme02_page026",
    "themeKey": "theme02",
    "pageNumber": 26,
    "layout": "THEME02-026",
    "slot": "poster",
    "label": "主题海报 · Poster",
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
        "key": "scheme",
        "label": "配色方案",
        "type": "enum",
        "default": "green",
        "options": [
          [
            "green",
            "霓虹绿"
          ],
          [
            "violet",
            "炫光紫"
          ]
        ],
        "desc": "切换整页炫光配色。",
        "publicKey": "scheme",
        "publicLabel": "配色方案",
        "description": "切换整页炫光配色。"
      },
      {
        "key": "emphasis",
        "label": "强调卡片",
        "type": "enum",
        "default": "ticket",
        "options": [
          [
            "default",
            "默认发光"
          ],
          [
            "ticket",
            "炫光票卡"
          ]
        ],
        "desc": "切换焦点卡片的发光质感。",
        "publicKey": "emphasis",
        "publicLabel": "强调卡片",
        "description": "切换焦点卡片的发光质感。"
      },
      {
        "key": "breath",
        "label": "内光呼吸感",
        "type": "slider",
        "default": 55,
        "min": 0,
        "max": 100,
        "step": 1,
        "desc": "炫光票卡模式下的内光呼吸强度。",
        "publicKey": "breath",
        "publicLabel": "内光呼吸感",
        "description": "炫光票卡模式下的内光呼吸强度。"
      },
      {
        "key": "magnet",
        "label": "磁吸悬停",
        "type": "toggle",
        "default": true,
        "desc": "焦点卡片跟随指针产生轻微位移和倾斜。",
        "publicKey": "magnet",
        "publicLabel": "磁吸悬停",
        "description": "焦点卡片跟随指针产生轻微位移和倾斜。"
      },
      {
        "key": "aurora",
        "label": "渐变流光",
        "type": "toggle",
        "default": true,
        "desc": "开启标题、数字和图表重点元素的流光渐变。",
        "publicKey": "aurora",
        "publicLabel": "渐变流光",
        "description": "开启标题、数字和图表重点元素的流光渐变。"
      },
      {
        "key": "auroraSpeed",
        "label": "流光速度",
        "type": "slider",
        "default": 1,
        "min": 0.4,
        "max": 3,
        "step": 0.1,
        "desc": "流光动画速度。",
        "publicKey": "auroraSpeed",
        "publicLabel": "流光速度",
        "description": "流光动画速度。"
      },
      {
        "key": "imageCount",
        "label": "主图数量",
        "type": "number",
        "default": 1,
        "min": 0,
        "max": 1,
        "step": 1,
        "desc": "主图槽位（0 = 纯文字主视觉海报）",
        "publicKey": "imageCount",
        "publicLabel": "主图数量",
        "description": "主图槽位（0 = 纯文字主视觉海报）"
      },
      {
        "key": "fit",
        "label": "图片填充",
        "type": "enum",
        "default": "cover",
        "options": [
          {
            "value": "cover",
            "label": "满幅裁切"
          },
          {
            "value": "contain",
            "label": "完整不裁切"
          }
        ],
        "desc": "主图填充方式（完整 = 按原始比例不裁切）",
        "publicKey": "fit",
        "publicLabel": "图片填充",
        "description": "主图填充方式（完整 = 按原始比例不裁切）"
      },
      {
        "key": "titlePos",
        "label": "标题位置",
        "type": "enum",
        "default": "bottom",
        "options": [
          {
            "value": "bottom",
            "label": "左下压字"
          },
          {
            "value": "center",
            "label": "居中"
          }
        ],
        "desc": "标题在海报上的位置",
        "publicKey": "titlePos",
        "publicLabel": "标题位置",
        "description": "标题在海报上的位置"
      },
      {
        "key": "metaCount",
        "label": "数据数量",
        "type": "number",
        "default": 3,
        "min": 0,
        "step": 1,
        "desc": "底部内联数据数量",
        "publicKey": "metaCount",
        "publicLabel": "数据数量",
        "description": "底部内联数据数量"
      },
      {
        "key": "showQuote",
        "label": "金句",
        "type": "toggle",
        "default": true,
        "desc": "标题下金句显隐",
        "publicKey": "showQuote",
        "publicLabel": "金句",
        "description": "标题下金句显隐"
      },
      {
        "key": "showFrame",
        "label": "描边框",
        "type": "toggle",
        "default": true,
        "desc": "海报内嵌描边框显隐",
        "publicKey": "showFrame",
        "publicLabel": "描边框",
        "description": "海报内嵌描边框显隐"
      },
      {
        "key": "showCaption",
        "label": "图注",
        "type": "toggle",
        "default": true,
        "desc": "左下角图注显隐",
        "publicKey": "showCaption",
        "publicLabel": "图注",
        "description": "左下角图注显隐"
      }
    ],
    "defaultProps": {
      "kicker": "CASE · 估值反超",
      "title": "Anthropic",
      "titleEm": "从追赶到领跑",
      "quote": "“比起单纯追求规模，构建可解释、可控的系统，更符合长远利益。”",
      "metas": [
        {
          "value": "9650",
          "unit": "亿美元",
          "label": "最新估值 · 全球最高"
        },
        {
          "value": "650+",
          "unit": "亿美元",
          "label": "2024 累计融资"
        },
        {
          "value": "3",
          "unit": "轮",
          "label": "年内连续大额融资"
        }
      ],
      "caption": "Anthropic · Claude 系列",
      "imageCount": 1,
      "fit": "cover",
      "backgroundMode": "unicorn",
      "unicornScene": "tech",
      "titlePos": "bottom",
      "metaCount": 3,
      "showQuote": true,
      "showFrame": true,
      "showCaption": true,
      "images": [],
      "scheme": "green",
      "emphasis": "ticket",
      "breath": 55,
      "magnet": true,
      "aurora": true,
      "auroraSpeed": 1,
      "index": "25 / 73"
    }
  },
  {
    "key": "theme02_page027",
    "themeKey": "theme02",
    "pageNumber": 27,
    "layout": "THEME02-027",
    "slot": "cardgrid",
    "label": "图文卡组 · Card Grid",
    "bgClass": "",
    "controls": [
      {
        "key": "scheme",
        "label": "配色方案",
        "type": "enum",
        "default": "green",
        "options": [
          [
            "green",
            "霓虹绿"
          ],
          [
            "violet",
            "炫光紫"
          ]
        ],
        "desc": "切换整页炫光配色。",
        "publicKey": "scheme",
        "publicLabel": "配色方案",
        "description": "切换整页炫光配色。"
      },
      {
        "key": "emphasis",
        "label": "强调卡片",
        "type": "enum",
        "default": "ticket",
        "options": [
          [
            "default",
            "默认发光"
          ],
          [
            "ticket",
            "炫光票卡"
          ]
        ],
        "desc": "切换焦点卡片的发光质感。",
        "publicKey": "emphasis",
        "publicLabel": "强调卡片",
        "description": "切换焦点卡片的发光质感。"
      },
      {
        "key": "breath",
        "label": "内光呼吸感",
        "type": "slider",
        "default": 55,
        "min": 0,
        "max": 100,
        "step": 1,
        "desc": "炫光票卡模式下的内光呼吸强度。",
        "publicKey": "breath",
        "publicLabel": "内光呼吸感",
        "description": "炫光票卡模式下的内光呼吸强度。"
      },
      {
        "key": "magnet",
        "label": "磁吸悬停",
        "type": "toggle",
        "default": true,
        "desc": "焦点卡片跟随指针产生轻微位移和倾斜。",
        "publicKey": "magnet",
        "publicLabel": "磁吸悬停",
        "description": "焦点卡片跟随指针产生轻微位移和倾斜。"
      },
      {
        "key": "aurora",
        "label": "渐变流光",
        "type": "toggle",
        "default": true,
        "desc": "开启标题、数字和图表重点元素的流光渐变。",
        "publicKey": "aurora",
        "publicLabel": "渐变流光",
        "description": "开启标题、数字和图表重点元素的流光渐变。"
      },
      {
        "key": "auroraSpeed",
        "label": "流光速度",
        "type": "slider",
        "default": 1,
        "min": 0.4,
        "max": 3,
        "step": 0.1,
        "desc": "流光动画速度。",
        "publicKey": "auroraSpeed",
        "publicLabel": "流光速度",
        "description": "流光动画速度。"
      },
      {
        "key": "cardCount",
        "label": "卡片数量",
        "type": "number",
        "default": 4,
        "min": 1,
        "step": 1,
        "desc": "图文卡数量",
        "publicKey": "cardCount",
        "publicLabel": "卡片数量",
        "description": "图文卡数量"
      },
      {
        "key": "fit",
        "label": "贴合方式",
        "type": "enum",
        "default": "cover",
        "options": [
          {
            "value": "cover",
            "label": "填充（裁切）"
          },
          {
            "value": "contain",
            "label": "完整（不裁切）"
          }
        ],
        "desc": "图片在卡片内填充或完整显示",
        "publicKey": "fit",
        "publicLabel": "贴合方式",
        "description": "图片在卡片内填充或完整显示"
      },
      {
        "key": "focusEnabled",
        "label": "重点强调",
        "type": "toggle",
        "default": false,
        "desc": "是否辉光强调某一张",
        "publicKey": "focusEnabled",
        "publicLabel": "重点强调",
        "description": "是否辉光强调某一张"
      },
      {
        "key": "focusIndex",
        "label": "强调项",
        "type": "number",
        "default": 0,
        "min": 0,
        "step": 1,
        "desc": "被强调卡片的序号",
        "publicKey": "focusIndex",
        "publicLabel": "强调项",
        "description": "被强调卡片的序号"
      },
      {
        "key": "showDesc",
        "label": "描述",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏卡片描述",
        "publicKey": "showDesc",
        "publicLabel": "描述",
        "description": "显示/隐藏卡片描述"
      },
      {
        "key": "showTags",
        "label": "标签",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏卡片标签",
        "publicKey": "showTags",
        "publicLabel": "标签",
        "description": "显示/隐藏卡片标签"
      }
    ],
    "defaultProps": {
      "kicker": "CASES · 案例图文",
      "title": "四张面孔 ",
      "titleEm": "四条技术路线",
      "lead": "同样的“大额融资”，落到不同公司身上，讲的是四套截然不同的故事。",
      "cards": [
        {
          "title": "OpenAI",
          "desc": "通用大模型领跑者，以产品化速度与生态绑定构筑护城河。",
          "tag": "通用大模型"
        },
        {
          "title": "Anthropic",
          "desc": "以安全对齐为叙事核心，企业级市场稳步扩张。",
          "tag": "安全对齐"
        },
        {
          "title": "xAI",
          "desc": "自建超大算力集群，押注实时多模态与社交数据。",
          "tag": "实时多模态"
        },
        {
          "title": "CoreWeave",
          "desc": "把 GPU 算力做成云生意，吃下训练侧的基础设施红利。",
          "tag": "算力云"
        }
      ],
      "cardCount": 4,
      "fit": "cover",
      "focusEnabled": false,
      "focusIndex": 0,
      "showDesc": true,
      "showTags": true,
      "images": [],
      "scheme": "green",
      "emphasis": "ticket",
      "breath": 55,
      "magnet": true,
      "aurora": true,
      "auroraSpeed": 1,
      "index": "26 / 73"
    }
  },
  {
    "key": "theme02_page028",
    "themeKey": "theme02",
    "pageNumber": 28,
    "layout": "THEME02-028",
    "slot": "zigzag",
    "label": "交错图文 · Zigzag",
    "bgClass": "",
    "controls": [
      {
        "key": "scheme",
        "label": "配色方案",
        "type": "enum",
        "default": "green",
        "options": [
          [
            "green",
            "霓虹绿"
          ],
          [
            "violet",
            "炫光紫"
          ]
        ],
        "desc": "切换整页炫光配色。",
        "publicKey": "scheme",
        "publicLabel": "配色方案",
        "description": "切换整页炫光配色。"
      },
      {
        "key": "emphasis",
        "label": "强调卡片",
        "type": "enum",
        "default": "ticket",
        "options": [
          [
            "default",
            "默认发光"
          ],
          [
            "ticket",
            "炫光票卡"
          ]
        ],
        "desc": "切换焦点卡片的发光质感。",
        "publicKey": "emphasis",
        "publicLabel": "强调卡片",
        "description": "切换焦点卡片的发光质感。"
      },
      {
        "key": "breath",
        "label": "内光呼吸感",
        "type": "slider",
        "default": 55,
        "min": 0,
        "max": 100,
        "step": 1,
        "desc": "炫光票卡模式下的内光呼吸强度。",
        "publicKey": "breath",
        "publicLabel": "内光呼吸感",
        "description": "炫光票卡模式下的内光呼吸强度。"
      },
      {
        "key": "magnet",
        "label": "磁吸悬停",
        "type": "toggle",
        "default": true,
        "desc": "焦点卡片跟随指针产生轻微位移和倾斜。",
        "publicKey": "magnet",
        "publicLabel": "磁吸悬停",
        "description": "焦点卡片跟随指针产生轻微位移和倾斜。"
      },
      {
        "key": "aurora",
        "label": "渐变流光",
        "type": "toggle",
        "default": true,
        "desc": "开启标题、数字和图表重点元素的流光渐变。",
        "publicKey": "aurora",
        "publicLabel": "渐变流光",
        "description": "开启标题、数字和图表重点元素的流光渐变。"
      },
      {
        "key": "auroraSpeed",
        "label": "流光速度",
        "type": "slider",
        "default": 1,
        "min": 0.4,
        "max": 3,
        "step": 0.1,
        "desc": "流光动画速度。",
        "publicKey": "auroraSpeed",
        "publicLabel": "流光速度",
        "description": "流光动画速度。"
      },
      {
        "key": "rowCount",
        "label": "行数",
        "type": "number",
        "default": 3,
        "min": 2,
        "step": 1,
        "desc": "图文行数（2–n）",
        "publicKey": "rowCount",
        "publicLabel": "行数",
        "description": "图文行数（2–n）"
      },
      {
        "key": "startSide",
        "label": "首行图片",
        "type": "enum",
        "default": "left",
        "options": [
          {
            "value": "left",
            "label": "居左起"
          },
          {
            "value": "right",
            "label": "居右起"
          }
        ],
        "desc": "首行图片所在侧，逐行交错翻转",
        "publicKey": "startSide",
        "publicLabel": "首行图片",
        "description": "首行图片所在侧，逐行交错翻转"
      },
      {
        "key": "fit",
        "label": "贴合方式",
        "type": "enum",
        "default": "contain",
        "options": [
          {
            "value": "contain",
            "label": "完整（不裁切）"
          },
          {
            "value": "cover",
            "label": "填充（裁切）"
          }
        ],
        "desc": "图片在槽内完整显示或填充裁切",
        "publicKey": "fit",
        "publicLabel": "贴合方式",
        "description": "图片在槽内完整显示或填充裁切"
      },
      {
        "key": "focusEnabled",
        "label": "重点强调",
        "type": "toggle",
        "default": false,
        "desc": "是否辉光强调某一行",
        "publicKey": "focusEnabled",
        "publicLabel": "重点强调",
        "description": "是否辉光强调某一行"
      },
      {
        "key": "focusIndex",
        "label": "强调项",
        "type": "number",
        "default": 0,
        "min": 0,
        "step": 1,
        "desc": "被强调行的序号",
        "publicKey": "focusIndex",
        "publicLabel": "强调项",
        "description": "被强调行的序号"
      },
      {
        "key": "showCopy",
        "label": "解读段落",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏每行解读段落",
        "publicKey": "showCopy",
        "publicLabel": "解读段落",
        "description": "显示/隐藏每行解读段落"
      },
      {
        "key": "showStat",
        "label": "行内数字",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏行内关键数字",
        "publicKey": "showStat",
        "publicLabel": "行内数字",
        "description": "显示/隐藏行内关键数字"
      }
    ],
    "defaultProps": {
      "kicker": "EDITORIAL · 图文叙事",
      "title": "三段切片 ",
      "titleEm": "读懂这轮资本",
      "lead": "把一年里最有代表性的三组画面并排铺开——从算力机房到模型发布会，钱流向哪里，故事就发生在哪里。",
      "rows": [
        {
          "title": "算力是新的石油",
          "tag": "INFRA · 基础设施",
          "copy": "超大规模训练把 GPU 集群变成稀缺资产，算力供给方率先吃到这轮红利，估值随订单一起膨胀。",
          "stat": {
            "value": "78",
            "unit": "%"
          }
        },
        {
          "title": "模型即产品",
          "tag": "MODEL · 通用大模型",
          "copy": "头部模型公司以产品化速度构筑生态绑定，单轮融资屡破纪录，资本愿意为“下一个平台”提前下注。",
          "stat": {
            "value": "10",
            "unit": "亿/笔"
          }
        },
        {
          "title": "应用层在追赶",
          "tag": "APP · 应用落地",
          "copy": "企业级场景的付费意愿与续费率双双走高，应用层公司开始用真实营收兑现资本的耐心。",
          "stat": {
            "value": "41",
            "unit": "%"
          }
        }
      ],
      "rowCount": 3,
      "startSide": "left",
      "fit": "contain",
      "focusEnabled": false,
      "focusIndex": 0,
      "showCopy": true,
      "showStat": true,
      "images": [],
      "scheme": "green",
      "emphasis": "ticket",
      "breath": 55,
      "magnet": true,
      "aurora": true,
      "auroraSpeed": 1,
      "index": "27 / 73"
    }
  },
  {
    "key": "theme02_page029",
    "themeKey": "theme02",
    "pageNumber": 29,
    "layout": "THEME02-029",
    "slot": "gallery",
    "label": "案例图集 · Gallery",
    "bgClass": "",
    "controls": [
      {
        "key": "scheme",
        "label": "配色方案",
        "type": "enum",
        "default": "green",
        "options": [
          [
            "green",
            "霓虹绿"
          ],
          [
            "violet",
            "炫光紫"
          ]
        ],
        "desc": "切换整页炫光配色。",
        "publicKey": "scheme",
        "publicLabel": "配色方案",
        "description": "切换整页炫光配色。"
      },
      {
        "key": "emphasis",
        "label": "强调卡片",
        "type": "enum",
        "default": "ticket",
        "options": [
          [
            "default",
            "默认发光"
          ],
          [
            "ticket",
            "炫光票卡"
          ]
        ],
        "desc": "切换焦点卡片的发光质感。",
        "publicKey": "emphasis",
        "publicLabel": "强调卡片",
        "description": "切换焦点卡片的发光质感。"
      },
      {
        "key": "breath",
        "label": "内光呼吸感",
        "type": "slider",
        "default": 55,
        "min": 0,
        "max": 100,
        "step": 1,
        "desc": "炫光票卡模式下的内光呼吸强度。",
        "publicKey": "breath",
        "publicLabel": "内光呼吸感",
        "description": "炫光票卡模式下的内光呼吸强度。"
      },
      {
        "key": "magnet",
        "label": "磁吸悬停",
        "type": "toggle",
        "default": true,
        "desc": "焦点卡片跟随指针产生轻微位移和倾斜。",
        "publicKey": "magnet",
        "publicLabel": "磁吸悬停",
        "description": "焦点卡片跟随指针产生轻微位移和倾斜。"
      },
      {
        "key": "aurora",
        "label": "渐变流光",
        "type": "toggle",
        "default": true,
        "desc": "开启标题、数字和图表重点元素的流光渐变。",
        "publicKey": "aurora",
        "publicLabel": "渐变流光",
        "description": "开启标题、数字和图表重点元素的流光渐变。"
      },
      {
        "key": "auroraSpeed",
        "label": "流光速度",
        "type": "slider",
        "default": 1,
        "min": 0.4,
        "max": 3,
        "step": 0.1,
        "desc": "流光动画速度。",
        "publicKey": "auroraSpeed",
        "publicLabel": "流光速度",
        "description": "流光动画速度。"
      },
      {
        "key": "imageCount",
        "label": "图片数量",
        "type": "number",
        "default": 4,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "横排图集的槽位数量（0 = 纯标题）",
        "publicKey": "imageCount",
        "publicLabel": "图片数量",
        "description": "横排图集的槽位数量（0 = 纯标题）"
      },
      {
        "key": "fit",
        "label": "贴合方式",
        "type": "enum",
        "default": "contain",
        "options": [
          {
            "value": "contain",
            "label": "完整（不裁切）"
          },
          {
            "value": "cover",
            "label": "填充（裁切）"
          }
        ],
        "desc": "图片在单元内完整显示或填充裁切",
        "publicKey": "fit",
        "publicLabel": "贴合方式",
        "description": "图片在单元内完整显示或填充裁切"
      },
      {
        "key": "focusEnabled",
        "label": "重点强调",
        "type": "toggle",
        "default": false,
        "desc": "是否高亮其中一张",
        "publicKey": "focusEnabled",
        "publicLabel": "重点强调",
        "description": "是否高亮其中一张"
      },
      {
        "key": "focusIndex",
        "label": "强调项",
        "type": "number",
        "default": 0,
        "min": 0,
        "step": 1,
        "desc": "被强调图片的序号",
        "publicKey": "focusIndex",
        "publicLabel": "强调项",
        "description": "被强调图片的序号"
      },
      {
        "key": "showCaptions",
        "label": "图注",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏图片说明",
        "publicKey": "showCaptions",
        "publicLabel": "图注",
        "description": "显示/隐藏图片说明"
      },
      {
        "key": "showLead",
        "label": "导语",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏标题下的导语",
        "publicKey": "showLead",
        "publicLabel": "导语",
        "description": "显示/隐藏标题下的导语"
      }
    ],
    "defaultProps": {
      "kicker": "GALLERY · 案例图集",
      "title": "头部玩家图集 ",
      "titleEm": "资本的面孔",
      "lead": "从模型实验室到算力云，2024 年的大额融资塑造了一组高度集中的“头部面孔”。",
      "imageCount": 4,
      "captions": [
        "OpenAI · 通用大模型",
        "Anthropic · 安全对齐",
        "xAI · 实时多模态",
        "CoreWeave · 算力云"
      ],
      "fit": "contain",
      "focusEnabled": false,
      "focusIndex": 0,
      "showCaptions": true,
      "showLead": true,
      "images": [],
      "scheme": "green",
      "emphasis": "ticket",
      "breath": 55,
      "magnet": true,
      "aurora": true,
      "auroraSpeed": 1,
      "index": "28 / 73"
    }
  },
  {
    "key": "theme02_page030",
    "themeKey": "theme02",
    "pageNumber": 30,
    "layout": "THEME02-030",
    "slot": "logowall",
    "label": "公司图谱 · Logo Wall",
    "bgClass": "",
    "controls": [
      {
        "key": "scheme",
        "label": "配色方案",
        "type": "enum",
        "default": "green",
        "options": [
          [
            "green",
            "霓虹绿"
          ],
          [
            "violet",
            "炫光紫"
          ]
        ],
        "desc": "切换整页炫光配色。",
        "publicKey": "scheme",
        "publicLabel": "配色方案",
        "description": "切换整页炫光配色。"
      },
      {
        "key": "emphasis",
        "label": "强调卡片",
        "type": "enum",
        "default": "ticket",
        "options": [
          [
            "default",
            "默认发光"
          ],
          [
            "ticket",
            "炫光票卡"
          ]
        ],
        "desc": "切换焦点卡片的发光质感。",
        "publicKey": "emphasis",
        "publicLabel": "强调卡片",
        "description": "切换焦点卡片的发光质感。"
      },
      {
        "key": "breath",
        "label": "内光呼吸感",
        "type": "slider",
        "default": 55,
        "min": 0,
        "max": 100,
        "step": 1,
        "desc": "炫光票卡模式下的内光呼吸强度。",
        "publicKey": "breath",
        "publicLabel": "内光呼吸感",
        "description": "炫光票卡模式下的内光呼吸强度。"
      },
      {
        "key": "magnet",
        "label": "磁吸悬停",
        "type": "toggle",
        "default": true,
        "desc": "焦点卡片跟随指针产生轻微位移和倾斜。",
        "publicKey": "magnet",
        "publicLabel": "磁吸悬停",
        "description": "焦点卡片跟随指针产生轻微位移和倾斜。"
      },
      {
        "key": "aurora",
        "label": "渐变流光",
        "type": "toggle",
        "default": true,
        "desc": "开启标题、数字和图表重点元素的流光渐变。",
        "publicKey": "aurora",
        "publicLabel": "渐变流光",
        "description": "开启标题、数字和图表重点元素的流光渐变。"
      },
      {
        "key": "auroraSpeed",
        "label": "流光速度",
        "type": "slider",
        "default": 1,
        "min": 0.4,
        "max": 3,
        "step": 0.1,
        "desc": "流光动画速度。",
        "publicKey": "auroraSpeed",
        "publicLabel": "流光速度",
        "description": "流光动画速度。"
      },
      {
        "key": "tileCount",
        "label": "瓦片数量",
        "type": "number",
        "default": 6,
        "min": 0,
        "step": 1,
        "desc": "公司瓦片数量（0 = 纯标题）",
        "publicKey": "tileCount",
        "publicLabel": "瓦片数量",
        "description": "公司瓦片数量（0 = 纯标题）"
      },
      {
        "key": "fit",
        "label": "贴合方式",
        "type": "enum",
        "default": "cover",
        "options": [
          {
            "value": "cover",
            "label": "填充（裁切）"
          },
          {
            "value": "contain",
            "label": "完整（不裁切）"
          }
        ],
        "desc": "图片在瓦片内填充或完整显示",
        "publicKey": "fit",
        "publicLabel": "贴合方式",
        "description": "图片在瓦片内填充或完整显示"
      },
      {
        "key": "focusEnabled",
        "label": "重点强调",
        "type": "toggle",
        "default": false,
        "desc": "是否高亮其中一块",
        "publicKey": "focusEnabled",
        "publicLabel": "重点强调",
        "description": "是否高亮其中一块"
      },
      {
        "key": "focusIndex",
        "label": "强调项",
        "type": "number",
        "default": 0,
        "min": 0,
        "step": 1,
        "desc": "被强调瓦片的序号",
        "publicKey": "focusIndex",
        "publicLabel": "强调项",
        "description": "被强调瓦片的序号"
      },
      {
        "key": "showNames",
        "label": "名称",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏公司名称",
        "publicKey": "showNames",
        "publicLabel": "名称",
        "description": "显示/隐藏公司名称"
      },
      {
        "key": "showTags",
        "label": "标签",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏分类标签",
        "publicKey": "showTags",
        "publicLabel": "标签",
        "description": "显示/隐藏分类标签"
      }
    ],
    "defaultProps": {
      "kicker": "PLAYERS · 公司图谱",
      "title": "一张图看懂 ",
      "titleEm": "头部玩家阵营",
      "lead": "模型实验室、算力云、应用层与基础设施——大额融资塑造的头部阵营，集中在少数几张面孔上。",
      "names": [
        "OpenAI",
        "Anthropic",
        "xAI",
        "CoreWeave",
        "Scale AI",
        "Databricks",
        "Mistral",
        "Perplexity"
      ],
      "tags": [
        "通用大模型",
        "安全对齐",
        "实时多模态",
        "算力云",
        "数据标注",
        "数据平台",
        "开源模型",
        "AI 搜索"
      ],
      "tileCount": 6,
      "fit": "cover",
      "focusEnabled": false,
      "focusIndex": 0,
      "showNames": true,
      "showTags": true,
      "images": [],
      "scheme": "green",
      "emphasis": "ticket",
      "breath": 55,
      "magnet": true,
      "aurora": true,
      "auroraSpeed": 1,
      "index": "29 / 73"
    }
  },
  {
    "key": "theme02_page031",
    "themeKey": "theme02",
    "pageNumber": 31,
    "layout": "THEME02-031",
    "slot": "compare",
    "label": "双图对比 · Compare",
    "bgClass": "",
    "controls": [
      {
        "key": "scheme",
        "label": "配色方案",
        "type": "enum",
        "default": "green",
        "options": [
          [
            "green",
            "霓虹绿"
          ],
          [
            "violet",
            "炫光紫"
          ]
        ],
        "desc": "切换整页炫光配色。",
        "publicKey": "scheme",
        "publicLabel": "配色方案",
        "description": "切换整页炫光配色。"
      },
      {
        "key": "emphasis",
        "label": "强调卡片",
        "type": "enum",
        "default": "ticket",
        "options": [
          [
            "default",
            "默认发光"
          ],
          [
            "ticket",
            "炫光票卡"
          ]
        ],
        "desc": "切换焦点卡片的发光质感。",
        "publicKey": "emphasis",
        "publicLabel": "强调卡片",
        "description": "切换焦点卡片的发光质感。"
      },
      {
        "key": "breath",
        "label": "内光呼吸感",
        "type": "slider",
        "default": 55,
        "min": 0,
        "max": 100,
        "step": 1,
        "desc": "炫光票卡模式下的内光呼吸强度。",
        "publicKey": "breath",
        "publicLabel": "内光呼吸感",
        "description": "炫光票卡模式下的内光呼吸强度。"
      },
      {
        "key": "magnet",
        "label": "磁吸悬停",
        "type": "toggle",
        "default": true,
        "desc": "焦点卡片跟随指针产生轻微位移和倾斜。",
        "publicKey": "magnet",
        "publicLabel": "磁吸悬停",
        "description": "焦点卡片跟随指针产生轻微位移和倾斜。"
      },
      {
        "key": "aurora",
        "label": "渐变流光",
        "type": "toggle",
        "default": true,
        "desc": "开启标题、数字和图表重点元素的流光渐变。",
        "publicKey": "aurora",
        "publicLabel": "渐变流光",
        "description": "开启标题、数字和图表重点元素的流光渐变。"
      },
      {
        "key": "auroraSpeed",
        "label": "流光速度",
        "type": "slider",
        "default": 1,
        "min": 0.4,
        "max": 3,
        "step": 0.1,
        "desc": "流光动画速度。",
        "publicKey": "auroraSpeed",
        "publicLabel": "流光速度",
        "description": "流光动画速度。"
      },
      {
        "key": "imageCount",
        "label": "配图栏数",
        "type": "number",
        "default": 2,
        "min": 0,
        "max": 2,
        "step": 1,
        "desc": "带配图的对比栏数（0 = 纯文字对比）",
        "publicKey": "imageCount",
        "publicLabel": "配图栏数",
        "description": "带配图的对比栏数（0 = 纯文字对比）"
      },
      {
        "key": "focusEnabled",
        "label": "重点强调",
        "type": "toggle",
        "default": false,
        "desc": "是否高亮其中一栏",
        "publicKey": "focusEnabled",
        "publicLabel": "重点强调",
        "description": "是否高亮其中一栏"
      },
      {
        "key": "focusIndex",
        "label": "强调栏",
        "type": "number",
        "default": 1,
        "min": 0,
        "max": 1,
        "step": 1,
        "desc": "被强调栏（A / B）",
        "publicKey": "focusIndex",
        "publicLabel": "强调栏",
        "description": "被强调栏（A / B）"
      },
      {
        "key": "showVs",
        "label": "中央 VS",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏中央 VS 徽章",
        "publicKey": "showVs",
        "publicLabel": "中央 VS",
        "description": "显示/隐藏中央 VS 徽章"
      },
      {
        "key": "showAttrs",
        "label": "属性标签",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏每栏的属性标签",
        "publicKey": "showAttrs",
        "publicLabel": "属性标签",
        "description": "显示/隐藏每栏的属性标签"
      },
      {
        "key": "showCaptions",
        "label": "图注",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏图片说明",
        "publicKey": "showCaptions",
        "publicLabel": "图注",
        "description": "显示/隐藏图片说明"
      },
      {
        "key": "showVerdict",
        "label": "结论",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏底部结论",
        "publicKey": "showVerdict",
        "publicLabel": "结论",
        "description": "显示/隐藏底部结论"
      }
    ],
    "defaultProps": {
      "kicker": "CONTRAST · 两种路径",
      "title": "叙事驱动 vs ",
      "titleEm": "兑现驱动",
      "sides": [
        {
          "label": "叙事驱动",
          "tag": "模型层 · OpenAI / Anthropic",
          "caption": "通用大模型",
          "attrs": [
            "巨额融资",
            "估值领先",
            "兑现待验证"
          ]
        },
        {
          "label": "兑现驱动",
          "tag": "基础设施 · CoreWeave / Scale",
          "caption": "算力与数据",
          "attrs": [
            "收入确定",
            "客户集中",
            "卖铲子逻辑"
          ]
        }
      ],
      "verdict": "两条路径并非对立，而是节奏先后——资本正从“赌叙事”转向“看兑现”。",
      "imageCount": 2,
      "focusEnabled": false,
      "focusIndex": 1,
      "showVs": true,
      "showAttrs": true,
      "showVerdict": true,
      "showCaptions": true,
      "images": [],
      "scheme": "green",
      "emphasis": "ticket",
      "breath": 55,
      "magnet": true,
      "aurora": true,
      "auroraSpeed": 1,
      "index": "30 / 73"
    }
  },
  {
    "key": "theme02_page032",
    "themeKey": "theme02",
    "pageNumber": 32,
    "layout": "THEME02-032",
    "slot": "rounds",
    "label": "轮次结构 · Rounds",
    "bgClass": "",
    "controls": [
      {
        "key": "scheme",
        "label": "配色方案",
        "type": "enum",
        "default": "green",
        "options": [
          [
            "green",
            "霓虹绿"
          ],
          [
            "violet",
            "炫光紫"
          ]
        ],
        "desc": "切换整页炫光配色。",
        "publicKey": "scheme",
        "publicLabel": "配色方案",
        "description": "切换整页炫光配色。"
      },
      {
        "key": "emphasis",
        "label": "强调卡片",
        "type": "enum",
        "default": "ticket",
        "options": [
          [
            "default",
            "默认发光"
          ],
          [
            "ticket",
            "炫光票卡"
          ]
        ],
        "desc": "切换焦点卡片的发光质感。",
        "publicKey": "emphasis",
        "publicLabel": "强调卡片",
        "description": "切换焦点卡片的发光质感。"
      },
      {
        "key": "breath",
        "label": "内光呼吸感",
        "type": "slider",
        "default": 55,
        "min": 0,
        "max": 100,
        "step": 1,
        "desc": "炫光票卡模式下的内光呼吸强度。",
        "publicKey": "breath",
        "publicLabel": "内光呼吸感",
        "description": "炫光票卡模式下的内光呼吸强度。"
      },
      {
        "key": "magnet",
        "label": "磁吸悬停",
        "type": "toggle",
        "default": true,
        "desc": "焦点卡片跟随指针产生轻微位移和倾斜。",
        "publicKey": "magnet",
        "publicLabel": "磁吸悬停",
        "description": "焦点卡片跟随指针产生轻微位移和倾斜。"
      },
      {
        "key": "aurora",
        "label": "渐变流光",
        "type": "toggle",
        "default": true,
        "desc": "开启标题、数字和图表重点元素的流光渐变。",
        "publicKey": "aurora",
        "publicLabel": "渐变流光",
        "description": "开启标题、数字和图表重点元素的流光渐变。"
      },
      {
        "key": "auroraSpeed",
        "label": "流光速度",
        "type": "slider",
        "default": 1,
        "min": 0.4,
        "max": 3,
        "step": 0.1,
        "desc": "流光动画速度。",
        "publicKey": "auroraSpeed",
        "publicLabel": "流光速度",
        "description": "流光动画速度。"
      },
      {
        "key": "rowCount",
        "label": "行数",
        "type": "number",
        "default": 6,
        "min": 3,
        "step": 1,
        "desc": "展示的阶段行数",
        "publicKey": "rowCount",
        "publicLabel": "行数",
        "description": "展示的阶段行数"
      },
      {
        "key": "focusEnabled",
        "label": "重点强调",
        "type": "toggle",
        "default": true,
        "desc": "是否高亮其中一行",
        "publicKey": "focusEnabled",
        "publicLabel": "重点强调",
        "description": "是否高亮其中一行"
      },
      {
        "key": "focusIndex",
        "label": "强调项",
        "type": "number",
        "default": 4,
        "min": 0,
        "step": 1,
        "desc": "被强调行的序号",
        "publicKey": "focusIndex",
        "publicLabel": "强调项",
        "description": "被强调行的序号"
      },
      {
        "key": "showCountBar",
        "label": "笔数条形",
        "type": "toggle",
        "default": true,
        "desc": "事件笔数列的等比条形显隐",
        "publicKey": "showCountBar",
        "publicLabel": "笔数条形",
        "description": "事件笔数列的等比条形显隐"
      },
      {
        "key": "showAvg",
        "label": "平均单笔列",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏平均单笔指标列",
        "publicKey": "showAvg",
        "publicLabel": "平均单笔列",
        "description": "显示/隐藏平均单笔指标列"
      },
      {
        "key": "showAvgBar",
        "label": "平均条形",
        "type": "toggle",
        "default": true,
        "desc": "平均单笔列的等比条形显隐",
        "publicKey": "showAvgBar",
        "publicLabel": "平均条形",
        "description": "平均单笔列的等比条形显隐"
      },
      {
        "key": "showTotal",
        "label": "合计行",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏底部合计行",
        "publicKey": "showTotal",
        "publicLabel": "合计行",
        "description": "显示/隐藏底部合计行"
      }
    ],
    "defaultProps": {
      "kicker": "ROUNDS · 轮次结构",
      "title": "融资轮次结构 ",
      "titleEm": "越往后越集中",
      "columns": {
        "label": "融资轮次",
        "count": "事件笔数",
        "avg": "平均单笔（亿美元）"
      },
      "rows": [
        {
          "label": "种子轮 · Seed",
          "count": 8,
          "avg": 1.2
        },
        {
          "label": "A 轮 · Series A",
          "count": 12,
          "avg": 1.8
        },
        {
          "label": "B 轮 · Series B",
          "count": 18,
          "avg": 3.5
        },
        {
          "label": "C 轮 · Series C",
          "count": 15,
          "avg": 6.8
        },
        {
          "label": "D 轮及以后 · Series D+",
          "count": 22,
          "avg": 15.2
        },
        {
          "label": "未标明轮次 · Undisclosed",
          "count": 22,
          "avg": 18.6
        }
      ],
      "total": {
        "label": "合计",
        "count": 97,
        "avg": "≈10"
      },
      "rowCount": 6,
      "focusEnabled": true,
      "focusIndex": 4,
      "showCountBar": true,
      "showAvg": true,
      "showAvgBar": true,
      "showTotal": true,
      "scheme": "green",
      "emphasis": "ticket",
      "breath": 55,
      "magnet": true,
      "aurora": true,
      "auroraSpeed": 1,
      "index": "31 / 73"
    }
  },
  {
    "key": "theme02_page033",
    "themeKey": "theme02",
    "pageNumber": 33,
    "layout": "THEME02-033",
    "slot": "pictogram",
    "label": "笔数分布 · Pictogram",
    "bgClass": "",
    "controls": [
      {
        "key": "scheme",
        "label": "配色方案",
        "type": "enum",
        "default": "green",
        "options": [
          [
            "green",
            "霓虹绿"
          ],
          [
            "violet",
            "炫光紫"
          ]
        ],
        "desc": "切换整页炫光配色。",
        "publicKey": "scheme",
        "publicLabel": "配色方案",
        "description": "切换整页炫光配色。"
      },
      {
        "key": "emphasis",
        "label": "强调卡片",
        "type": "enum",
        "default": "ticket",
        "options": [
          [
            "default",
            "默认发光"
          ],
          [
            "ticket",
            "炫光票卡"
          ]
        ],
        "desc": "切换焦点卡片的发光质感。",
        "publicKey": "emphasis",
        "publicLabel": "强调卡片",
        "description": "切换焦点卡片的发光质感。"
      },
      {
        "key": "breath",
        "label": "内光呼吸感",
        "type": "slider",
        "default": 55,
        "min": 0,
        "max": 100,
        "step": 1,
        "desc": "炫光票卡模式下的内光呼吸强度。",
        "publicKey": "breath",
        "publicLabel": "内光呼吸感",
        "description": "炫光票卡模式下的内光呼吸强度。"
      },
      {
        "key": "magnet",
        "label": "磁吸悬停",
        "type": "toggle",
        "default": true,
        "desc": "焦点卡片跟随指针产生轻微位移和倾斜。",
        "publicKey": "magnet",
        "publicLabel": "磁吸悬停",
        "description": "焦点卡片跟随指针产生轻微位移和倾斜。"
      },
      {
        "key": "aurora",
        "label": "渐变流光",
        "type": "toggle",
        "default": true,
        "desc": "开启标题、数字和图表重点元素的流光渐变。",
        "publicKey": "aurora",
        "publicLabel": "渐变流光",
        "description": "开启标题、数字和图表重点元素的流光渐变。"
      },
      {
        "key": "auroraSpeed",
        "label": "流光速度",
        "type": "slider",
        "default": 1,
        "min": 0.4,
        "max": 3,
        "step": 0.1,
        "desc": "流光动画速度。",
        "publicKey": "auroraSpeed",
        "publicLabel": "流光速度",
        "description": "流光动画速度。"
      },
      {
        "key": "groupCount",
        "label": "分组数量",
        "type": "number",
        "default": 6,
        "min": 2,
        "step": 1,
        "desc": "点阵着色的分组数量",
        "publicKey": "groupCount",
        "publicLabel": "分组数量",
        "description": "点阵着色的分组数量"
      },
      {
        "key": "perRow",
        "label": "每行点数",
        "type": "number",
        "default": 16,
        "min": 8,
        "max": 24,
        "step": 1,
        "desc": "每行的点数（越大点越小、阵列越宽）",
        "publicKey": "perRow",
        "publicLabel": "每行点数",
        "description": "每行的点数（越大点越小、阵列越宽）"
      },
      {
        "key": "focusEnabled",
        "label": "重点强调",
        "type": "toggle",
        "default": true,
        "desc": "辉光强调某一组（其余淡出）",
        "publicKey": "focusEnabled",
        "publicLabel": "重点强调",
        "description": "辉光强调某一组（其余淡出）"
      },
      {
        "key": "focusIndex",
        "label": "强调项",
        "type": "number",
        "default": 4,
        "min": 0,
        "step": 1,
        "desc": "被强调组的序号",
        "publicKey": "focusIndex",
        "publicLabel": "强调项",
        "description": "被强调组的序号"
      },
      {
        "key": "showLegend",
        "label": "图例",
        "type": "toggle",
        "default": true,
        "desc": "右侧分组图例显隐",
        "publicKey": "showLegend",
        "publicLabel": "图例",
        "description": "右侧分组图例显隐"
      },
      {
        "key": "showValueLabels",
        "label": "数量占比",
        "type": "toggle",
        "default": true,
        "desc": "图例中数量 + 占比显隐",
        "publicKey": "showValueLabels",
        "publicLabel": "数量占比",
        "description": "图例中数量 + 占比显隐"
      }
    ],
    "defaultProps": {
      "kicker": "UNIT · 笔数分布",
      "title": "97 笔大额融资 ",
      "titleEm": "都在哪些轮次",
      "lead": "每一个点代表一笔 ≥1 亿美元的融资事件，按融资轮次着色——「D 轮及以后」与「未标明轮次」合计占去半数。",
      "groups": [
        {
          "label": "种子轮 / Seed",
          "value": 8
        },
        {
          "label": "A 轮 / Series A",
          "value": 12
        },
        {
          "label": "B 轮 / Series B",
          "value": 18
        },
        {
          "label": "C 轮 / Series C",
          "value": 15
        },
        {
          "label": "D 轮及以后",
          "value": 22
        },
        {
          "label": "未标明轮次",
          "value": 22
        }
      ],
      "unit": "笔",
      "perRow": 16,
      "groupCount": 6,
      "focusEnabled": true,
      "focusIndex": 4,
      "showLegend": true,
      "showValueLabels": true,
      "scheme": "green",
      "emphasis": "ticket",
      "breath": 55,
      "magnet": true,
      "aurora": true,
      "auroraSpeed": 1,
      "index": "32 / 73"
    }
  },
  {
    "key": "theme02_page034",
    "themeKey": "theme02",
    "pageNumber": 34,
    "layout": "THEME02-034",
    "slot": "comparetable",
    "label": "特性对照 · Compare Table",
    "bgClass": "",
    "controls": [
      {
        "key": "scheme",
        "label": "配色方案",
        "type": "enum",
        "default": "green",
        "options": [
          [
            "green",
            "霓虹绿"
          ],
          [
            "violet",
            "炫光紫"
          ]
        ],
        "desc": "切换整页炫光配色。",
        "publicKey": "scheme",
        "publicLabel": "配色方案",
        "description": "切换整页炫光配色。"
      },
      {
        "key": "emphasis",
        "label": "强调卡片",
        "type": "enum",
        "default": "ticket",
        "options": [
          [
            "default",
            "默认发光"
          ],
          [
            "ticket",
            "炫光票卡"
          ]
        ],
        "desc": "切换焦点卡片的发光质感。",
        "publicKey": "emphasis",
        "publicLabel": "强调卡片",
        "description": "切换焦点卡片的发光质感。"
      },
      {
        "key": "breath",
        "label": "内光呼吸感",
        "type": "slider",
        "default": 55,
        "min": 0,
        "max": 100,
        "step": 1,
        "desc": "炫光票卡模式下的内光呼吸强度。",
        "publicKey": "breath",
        "publicLabel": "内光呼吸感",
        "description": "炫光票卡模式下的内光呼吸强度。"
      },
      {
        "key": "magnet",
        "label": "磁吸悬停",
        "type": "toggle",
        "default": true,
        "desc": "焦点卡片跟随指针产生轻微位移和倾斜。",
        "publicKey": "magnet",
        "publicLabel": "磁吸悬停",
        "description": "焦点卡片跟随指针产生轻微位移和倾斜。"
      },
      {
        "key": "aurora",
        "label": "渐变流光",
        "type": "toggle",
        "default": true,
        "desc": "开启标题、数字和图表重点元素的流光渐变。",
        "publicKey": "aurora",
        "publicLabel": "渐变流光",
        "description": "开启标题、数字和图表重点元素的流光渐变。"
      },
      {
        "key": "auroraSpeed",
        "label": "流光速度",
        "type": "slider",
        "default": 1,
        "min": 0.4,
        "max": 3,
        "step": 0.1,
        "desc": "流光动画速度。",
        "publicKey": "auroraSpeed",
        "publicLabel": "流光速度",
        "description": "流光动画速度。"
      },
      {
        "key": "rowCount",
        "label": "行数（能力）",
        "type": "number",
        "default": 6,
        "min": 3,
        "step": 1,
        "desc": "展示的能力维度行数",
        "publicKey": "rowCount",
        "publicLabel": "行数（能力）",
        "description": "展示的能力维度行数"
      },
      {
        "key": "colCount",
        "label": "列数（公司）",
        "type": "number",
        "default": 4,
        "min": 2,
        "step": 1,
        "desc": "展示的公司列数",
        "publicKey": "colCount",
        "publicLabel": "列数（公司）",
        "description": "展示的公司列数"
      },
      {
        "key": "focusEnabled",
        "label": "重点强调",
        "type": "toggle",
        "default": true,
        "desc": "是否高亮某一列",
        "publicKey": "focusEnabled",
        "publicLabel": "重点强调",
        "description": "是否高亮某一列"
      },
      {
        "key": "focusCol",
        "label": "强调列",
        "type": "number",
        "default": 0,
        "min": 0,
        "step": 1,
        "desc": "被强调公司列的序号",
        "publicKey": "focusCol",
        "publicLabel": "强调列",
        "description": "被强调公司列的序号"
      },
      {
        "key": "showLegend",
        "label": "图例",
        "type": "toggle",
        "default": true,
        "desc": "✓/◐/✕ 释义图例显隐",
        "publicKey": "showLegend",
        "publicLabel": "图例",
        "description": "✓/◐/✕ 释义图例显隐"
      },
      {
        "key": "showRowNote",
        "label": "行序号",
        "type": "toggle",
        "default": true,
        "desc": "行首序号显隐",
        "publicKey": "showRowNote",
        "publicLabel": "行序号",
        "description": "行首序号显隐"
      }
    ],
    "defaultProps": {
      "kicker": "MATRIX · 能力对照",
      "title": "谁支持什么 ",
      "titleEm": "一表看清",
      "lead": "把头部玩家放进同一张能力清单——优势与缺口，落在每一个勾叉里。",
      "cols": [
        "OpenAI",
        "Anthropic",
        "Mistral",
        "xAI"
      ],
      "rows": [
        {
          "label": "自研基础大模型",
          "cells": [
            "yes",
            "yes",
            "yes",
            "yes"
          ]
        },
        {
          "label": "商用 API / 开放平台",
          "cells": [
            "yes",
            "yes",
            "yes",
            "partial"
          ]
        },
        {
          "label": "开源模型权重",
          "cells": [
            "no",
            "no",
            "yes",
            "partial"
          ]
        },
        {
          "label": "企业级私有化部署",
          "cells": [
            "yes",
            "yes",
            "partial",
            "no"
          ]
        },
        {
          "label": "原生多模态",
          "cells": [
            "yes",
            "partial",
            "partial",
            "yes"
          ]
        },
        {
          "label": "公开安全对齐承诺",
          "cells": [
            "partial",
            "yes",
            "partial",
            "no"
          ]
        }
      ],
      "rowCount": 6,
      "colCount": 4,
      "focusEnabled": true,
      "focusCol": 0,
      "showLegend": true,
      "showRowNote": true,
      "scheme": "green",
      "emphasis": "ticket",
      "breath": 55,
      "magnet": true,
      "aurora": true,
      "auroraSpeed": 1,
      "index": "33 / 73"
    }
  },
  {
    "key": "theme02_page035",
    "themeKey": "theme02",
    "pageNumber": 35,
    "layout": "THEME02-035",
    "slot": "region",
    "label": "地区分布 · Region",
    "bgClass": "",
    "controls": [
      {
        "key": "scheme",
        "label": "配色方案",
        "type": "enum",
        "default": "green",
        "options": [
          [
            "green",
            "霓虹绿"
          ],
          [
            "violet",
            "炫光紫"
          ]
        ],
        "desc": "切换整页炫光配色。",
        "publicKey": "scheme",
        "publicLabel": "配色方案",
        "description": "切换整页炫光配色。"
      },
      {
        "key": "emphasis",
        "label": "强调卡片",
        "type": "enum",
        "default": "ticket",
        "options": [
          [
            "default",
            "默认发光"
          ],
          [
            "ticket",
            "炫光票卡"
          ]
        ],
        "desc": "切换焦点卡片的发光质感。",
        "publicKey": "emphasis",
        "publicLabel": "强调卡片",
        "description": "切换焦点卡片的发光质感。"
      },
      {
        "key": "breath",
        "label": "内光呼吸感",
        "type": "slider",
        "default": 55,
        "min": 0,
        "max": 100,
        "step": 1,
        "desc": "炫光票卡模式下的内光呼吸强度。",
        "publicKey": "breath",
        "publicLabel": "内光呼吸感",
        "description": "炫光票卡模式下的内光呼吸强度。"
      },
      {
        "key": "magnet",
        "label": "磁吸悬停",
        "type": "toggle",
        "default": true,
        "desc": "焦点卡片跟随指针产生轻微位移和倾斜。",
        "publicKey": "magnet",
        "publicLabel": "磁吸悬停",
        "description": "焦点卡片跟随指针产生轻微位移和倾斜。"
      },
      {
        "key": "aurora",
        "label": "渐变流光",
        "type": "toggle",
        "default": true,
        "desc": "开启标题、数字和图表重点元素的流光渐变。",
        "publicKey": "aurora",
        "publicLabel": "渐变流光",
        "description": "开启标题、数字和图表重点元素的流光渐变。"
      },
      {
        "key": "auroraSpeed",
        "label": "流光速度",
        "type": "slider",
        "default": 1,
        "min": 0.4,
        "max": 3,
        "step": 0.1,
        "desc": "流光动画速度。",
        "publicKey": "auroraSpeed",
        "publicLabel": "流光速度",
        "description": "流光动画速度。"
      },
      {
        "key": "regionCount",
        "label": "地区数量",
        "type": "number",
        "default": 5,
        "min": 3,
        "step": 1,
        "desc": "展示的地区数量",
        "publicKey": "regionCount",
        "publicLabel": "地区数量",
        "description": "展示的地区数量"
      },
      {
        "key": "focusEnabled",
        "label": "重点强调",
        "type": "toggle",
        "default": true,
        "desc": "是否高亮某一地区",
        "publicKey": "focusEnabled",
        "publicLabel": "重点强调",
        "description": "是否高亮某一地区"
      },
      {
        "key": "focusIndex",
        "label": "强调项",
        "type": "number",
        "default": 0,
        "min": 0,
        "step": 1,
        "desc": "被强调地区的序号",
        "publicKey": "focusIndex",
        "publicLabel": "强调项",
        "description": "被强调地区的序号"
      },
      {
        "key": "showLegend",
        "label": "图例",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏图例列表",
        "publicKey": "showLegend",
        "publicLabel": "图例",
        "description": "显示/隐藏图例列表"
      },
      {
        "key": "showValueLabels",
        "label": "数值标签",
        "type": "toggle",
        "default": true,
        "desc": "在条形段上显示占比",
        "publicKey": "showValueLabels",
        "publicLabel": "数值标签",
        "description": "在条形段上显示占比"
      },
      {
        "key": "showCallout",
        "label": "主导读数",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏主导地区读数面板",
        "publicKey": "showCallout",
        "publicLabel": "主导读数",
        "description": "显示/隐藏主导地区读数面板"
      }
    ],
    "defaultProps": {
      "kicker": "GEOGRAPHY · 地区分布",
      "title": "融资高度集聚 ",
      "titleEm": "湾区独占六成",
      "data": [
        {
          "label": "旧金山湾区",
          "value": 620,
          "pct": "63.9%"
        },
        {
          "label": "纽约",
          "value": 120,
          "pct": "12.4%"
        },
        {
          "label": "西雅图",
          "value": 95,
          "pct": "9.8%"
        },
        {
          "label": "波士顿",
          "value": 75,
          "pct": "7.7%"
        },
        {
          "label": "其他地区",
          "value": 60,
          "pct": "6.2%",
          "color": "#41454f"
        }
      ],
      "regionCount": 5,
      "focusEnabled": true,
      "focusIndex": 0,
      "showLegend": true,
      "showValueLabels": true,
      "showCallout": true,
      "callout": {
        "value": "63.9",
        "unit": "%",
        "caption": "旧金山湾区融资占比",
        "note": "人才、资本、算力的虹吸效应进一步强化，“地理护城河”短期难以撼动。"
      },
      "scheme": "green",
      "emphasis": "ticket",
      "breath": 55,
      "magnet": true,
      "aurora": true,
      "auroraSpeed": 1,
      "index": "34 / 73"
    }
  },
  {
    "key": "theme02_page036",
    "themeKey": "theme02",
    "pageNumber": 36,
    "layout": "THEME02-036",
    "slot": "marimekko",
    "label": "市场结构 · Marimekko",
    "bgClass": "",
    "controls": [
      {
        "key": "scheme",
        "label": "配色方案",
        "type": "enum",
        "default": "green",
        "options": [
          [
            "green",
            "霓虹绿"
          ],
          [
            "violet",
            "炫光紫"
          ]
        ],
        "desc": "切换整页炫光配色。",
        "publicKey": "scheme",
        "publicLabel": "配色方案",
        "description": "切换整页炫光配色。"
      },
      {
        "key": "emphasis",
        "label": "强调卡片",
        "type": "enum",
        "default": "ticket",
        "options": [
          [
            "default",
            "默认发光"
          ],
          [
            "ticket",
            "炫光票卡"
          ]
        ],
        "desc": "切换焦点卡片的发光质感。",
        "publicKey": "emphasis",
        "publicLabel": "强调卡片",
        "description": "切换焦点卡片的发光质感。"
      },
      {
        "key": "breath",
        "label": "内光呼吸感",
        "type": "slider",
        "default": 55,
        "min": 0,
        "max": 100,
        "step": 1,
        "desc": "炫光票卡模式下的内光呼吸强度。",
        "publicKey": "breath",
        "publicLabel": "内光呼吸感",
        "description": "炫光票卡模式下的内光呼吸强度。"
      },
      {
        "key": "magnet",
        "label": "磁吸悬停",
        "type": "toggle",
        "default": true,
        "desc": "焦点卡片跟随指针产生轻微位移和倾斜。",
        "publicKey": "magnet",
        "publicLabel": "磁吸悬停",
        "description": "焦点卡片跟随指针产生轻微位移和倾斜。"
      },
      {
        "key": "aurora",
        "label": "渐变流光",
        "type": "toggle",
        "default": true,
        "desc": "开启标题、数字和图表重点元素的流光渐变。",
        "publicKey": "aurora",
        "publicLabel": "渐变流光",
        "description": "开启标题、数字和图表重点元素的流光渐变。"
      },
      {
        "key": "auroraSpeed",
        "label": "流光速度",
        "type": "slider",
        "default": 1,
        "min": 0.4,
        "max": 3,
        "step": 0.1,
        "desc": "流光动画速度。",
        "publicKey": "auroraSpeed",
        "publicLabel": "流光速度",
        "description": "流光动画速度。"
      },
      {
        "key": "colCount",
        "label": "列数（分类）",
        "type": "number",
        "default": 5,
        "min": 2,
        "step": 1,
        "desc": "展示的分类列数",
        "publicKey": "categoryCount",
        "publicLabel": "列数（分类）",
        "description": "展示的分类列数"
      },
      {
        "key": "focusEnabled",
        "label": "重点强调",
        "type": "toggle",
        "default": true,
        "desc": "是否辉光强调某一列",
        "publicKey": "focusEnabled",
        "publicLabel": "重点强调",
        "description": "是否辉光强调某一列"
      },
      {
        "key": "focusIndex",
        "label": "强调项",
        "type": "number",
        "default": 0,
        "min": 0,
        "step": 1,
        "desc": "被强调分类列的序号",
        "publicKey": "focusIndex",
        "publicLabel": "强调项",
        "description": "被强调分类列的序号"
      },
      {
        "key": "showWidthLabels",
        "label": "列名 / 宽度",
        "type": "toggle",
        "default": true,
        "desc": "列顶名称 + 宽度占比显隐",
        "publicKey": "showWidthLabels",
        "publicLabel": "列名 / 宽度",
        "description": "列顶名称 + 宽度占比显隐"
      },
      {
        "key": "showValueLabels",
        "label": "段内占比",
        "type": "toggle",
        "default": true,
        "desc": "每个色块内的阶段占比显隐",
        "publicKey": "showValueLabels",
        "publicLabel": "段内占比",
        "description": "每个色块内的阶段占比显隐"
      },
      {
        "key": "showLegend",
        "label": "图例",
        "type": "toggle",
        "default": true,
        "desc": "底部分段图例显隐",
        "publicKey": "showLegend",
        "publicLabel": "图例",
        "description": "底部分段图例显隐"
      }
    ],
    "defaultProps": {
      "kicker": "STRUCTURE · 市场结构",
      "title": "宽度看赛道，高度看阶段 ",
      "titleEm": "资本的双重集中",
      "lead": "列越宽，说明这条赛道吸金越多；列内色块越高，说明钱越集中在那个阶段——基础设施又大又靠后期。",
      "segLabels": [
        "种子 / A 轮",
        "成长期",
        "后期 / Pre-IPO"
      ],
      "columns": [
        {
          "label": "基础设施",
          "weight": 38,
          "parts": [
            12,
            30,
            58
          ]
        },
        {
          "label": "通用大模型",
          "weight": 27,
          "parts": [
            18,
            34,
            48
          ]
        },
        {
          "label": "应用层",
          "weight": 20,
          "parts": [
            40,
            38,
            22
          ]
        },
        {
          "label": "行业垂直",
          "weight": 9,
          "parts": [
            52,
            33,
            15
          ]
        },
        {
          "label": "工具 / 中间件",
          "weight": 6,
          "parts": [
            60,
            28,
            12
          ]
        }
      ],
      "colCount": 5,
      "focusEnabled": true,
      "focusIndex": 0,
      "showLegend": true,
      "showWidthLabels": true,
      "showValueLabels": true,
      "scheme": "green",
      "emphasis": "ticket",
      "breath": 55,
      "magnet": true,
      "aurora": true,
      "auroraSpeed": 1,
      "index": "35 / 73"
    }
  },
  {
    "key": "theme02_page037",
    "themeKey": "theme02",
    "pageNumber": 37,
    "layout": "THEME02-037",
    "slot": "funnel",
    "label": "资本漏斗 · Funnel",
    "bgClass": "",
    "controls": [
      {
        "key": "scheme",
        "label": "配色方案",
        "type": "enum",
        "default": "green",
        "options": [
          [
            "green",
            "霓虹绿"
          ],
          [
            "violet",
            "炫光紫"
          ]
        ],
        "desc": "切换整页炫光配色。",
        "publicKey": "scheme",
        "publicLabel": "配色方案",
        "description": "切换整页炫光配色。"
      },
      {
        "key": "emphasis",
        "label": "强调卡片",
        "type": "enum",
        "default": "ticket",
        "options": [
          [
            "default",
            "默认发光"
          ],
          [
            "ticket",
            "炫光票卡"
          ]
        ],
        "desc": "切换焦点卡片的发光质感。",
        "publicKey": "emphasis",
        "publicLabel": "强调卡片",
        "description": "切换焦点卡片的发光质感。"
      },
      {
        "key": "breath",
        "label": "内光呼吸感",
        "type": "slider",
        "default": 55,
        "min": 0,
        "max": 100,
        "step": 1,
        "desc": "炫光票卡模式下的内光呼吸强度。",
        "publicKey": "breath",
        "publicLabel": "内光呼吸感",
        "description": "炫光票卡模式下的内光呼吸强度。"
      },
      {
        "key": "magnet",
        "label": "磁吸悬停",
        "type": "toggle",
        "default": true,
        "desc": "焦点卡片跟随指针产生轻微位移和倾斜。",
        "publicKey": "magnet",
        "publicLabel": "磁吸悬停",
        "description": "焦点卡片跟随指针产生轻微位移和倾斜。"
      },
      {
        "key": "aurora",
        "label": "渐变流光",
        "type": "toggle",
        "default": true,
        "desc": "开启标题、数字和图表重点元素的流光渐变。",
        "publicKey": "aurora",
        "publicLabel": "渐变流光",
        "description": "开启标题、数字和图表重点元素的流光渐变。"
      },
      {
        "key": "auroraSpeed",
        "label": "流光速度",
        "type": "slider",
        "default": 1,
        "min": 0.4,
        "max": 3,
        "step": 0.1,
        "desc": "流光动画速度。",
        "publicKey": "auroraSpeed",
        "publicLabel": "流光速度",
        "description": "流光动画速度。"
      },
      {
        "key": "stageCount",
        "label": "层级数量",
        "type": "number",
        "default": 4,
        "min": 2,
        "step": 1,
        "desc": "漏斗展示的层级数量",
        "publicKey": "stageCount",
        "publicLabel": "层级数量",
        "description": "漏斗展示的层级数量"
      },
      {
        "key": "focusEnabled",
        "label": "重点强调",
        "type": "toggle",
        "default": true,
        "desc": "是否辉光强调某一级",
        "publicKey": "focusEnabled",
        "publicLabel": "重点强调",
        "description": "是否辉光强调某一级"
      },
      {
        "key": "focusIndex",
        "label": "强调项",
        "type": "number",
        "default": 1,
        "min": 0,
        "step": 1,
        "desc": "被强调层级的序号",
        "publicKey": "focusIndex",
        "publicLabel": "强调项",
        "description": "被强调层级的序号"
      },
      {
        "key": "showValueLabels",
        "label": "段内数值",
        "type": "toggle",
        "default": true,
        "desc": "漏斗段内数值标签显隐",
        "publicKey": "showValueLabels",
        "publicLabel": "段内数值",
        "description": "漏斗段内数值标签显隐"
      },
      {
        "key": "showRate",
        "label": "逐级转化率",
        "type": "toggle",
        "default": true,
        "desc": "相邻层级的留存/转化率显隐",
        "publicKey": "showRate",
        "publicLabel": "逐级转化率",
        "description": "相邻层级的留存/转化率显隐"
      },
      {
        "key": "showDetail",
        "label": "右侧明细",
        "type": "toggle",
        "default": true,
        "desc": "右侧层级明细列显隐",
        "publicKey": "showDetail",
        "publicLabel": "右侧明细",
        "description": "右侧层级明细列显隐"
      }
    ],
    "defaultProps": {
      "kicker": "FUNNEL · 资本漏斗",
      "title": "从大盘到头部 ",
      "titleEm": "资本的逐级收窄",
      "lead": "把一年的美国 AI 风险投资放进同一只漏斗——每下一级，门槛抬高一档，留下的玩家越来越少。",
      "stages": [
        {
          "label": "AI 初创融资事件",
          "value": 1160,
          "unit": "笔",
          "note": "全年完成融资的美国 AI 公司"
        },
        {
          "label": "大额融资 ≥ $100M",
          "value": 97,
          "unit": "笔",
          "note": "单笔金额跨过一亿美元门槛"
        },
        {
          "label": "超大额 ≥ $1B",
          "value": 12,
          "unit": "笔",
          "note": "单笔金额跨过十亿美元门槛"
        },
        {
          "label": "百亿美元俱乐部",
          "value": 5,
          "unit": "家",
          "note": "估值站上百亿美元的头部"
        }
      ],
      "stageCount": 4,
      "focusEnabled": true,
      "focusIndex": 1,
      "showValueLabels": true,
      "showRate": true,
      "showDetail": true,
      "scheme": "green",
      "emphasis": "ticket",
      "breath": 55,
      "magnet": true,
      "aurora": true,
      "auroraSpeed": 1,
      "index": "36 / 73"
    }
  },
  {
    "key": "theme02_page038",
    "themeKey": "theme02",
    "pageNumber": 38,
    "layout": "THEME02-038",
    "slot": "scatter",
    "label": "估值散点 · Scatter",
    "bgClass": "",
    "controls": [
      {
        "key": "scheme",
        "label": "配色方案",
        "type": "enum",
        "default": "green",
        "options": [
          [
            "green",
            "霓虹绿"
          ],
          [
            "violet",
            "炫光紫"
          ]
        ],
        "desc": "切换整页炫光配色。",
        "publicKey": "scheme",
        "publicLabel": "配色方案",
        "description": "切换整页炫光配色。"
      },
      {
        "key": "emphasis",
        "label": "强调卡片",
        "type": "enum",
        "default": "ticket",
        "options": [
          [
            "default",
            "默认发光"
          ],
          [
            "ticket",
            "炫光票卡"
          ]
        ],
        "desc": "切换焦点卡片的发光质感。",
        "publicKey": "emphasis",
        "publicLabel": "强调卡片",
        "description": "切换焦点卡片的发光质感。"
      },
      {
        "key": "breath",
        "label": "内光呼吸感",
        "type": "slider",
        "default": 55,
        "min": 0,
        "max": 100,
        "step": 1,
        "desc": "炫光票卡模式下的内光呼吸强度。",
        "publicKey": "breath",
        "publicLabel": "内光呼吸感",
        "description": "炫光票卡模式下的内光呼吸强度。"
      },
      {
        "key": "magnet",
        "label": "磁吸悬停",
        "type": "toggle",
        "default": true,
        "desc": "焦点卡片跟随指针产生轻微位移和倾斜。",
        "publicKey": "magnet",
        "publicLabel": "磁吸悬停",
        "description": "焦点卡片跟随指针产生轻微位移和倾斜。"
      },
      {
        "key": "aurora",
        "label": "渐变流光",
        "type": "toggle",
        "default": true,
        "desc": "开启标题、数字和图表重点元素的流光渐变。",
        "publicKey": "aurora",
        "publicLabel": "渐变流光",
        "description": "开启标题、数字和图表重点元素的流光渐变。"
      },
      {
        "key": "auroraSpeed",
        "label": "流光速度",
        "type": "slider",
        "default": 1,
        "min": 0.4,
        "max": 3,
        "step": 0.1,
        "desc": "流光动画速度。",
        "publicKey": "auroraSpeed",
        "publicLabel": "流光速度",
        "description": "流光动画速度。"
      },
      {
        "key": "pointCount",
        "label": "公司数量",
        "type": "number",
        "default": 6,
        "min": 3,
        "step": 1,
        "desc": "散点上展示的公司数量",
        "publicKey": "pointCount",
        "publicLabel": "公司数量",
        "description": "散点上展示的公司数量"
      },
      {
        "key": "focusEnabled",
        "label": "重点强调",
        "type": "toggle",
        "default": true,
        "desc": "辉光强调某一气泡（其余淡出）",
        "publicKey": "focusEnabled",
        "publicLabel": "重点强调",
        "description": "辉光强调某一气泡（其余淡出）"
      },
      {
        "key": "focusIndex",
        "label": "强调项",
        "type": "number",
        "default": 0,
        "min": 0,
        "step": 1,
        "desc": "被强调气泡的序号",
        "publicKey": "focusIndex",
        "publicLabel": "强调项",
        "description": "被强调气泡的序号"
      },
      {
        "key": "showGrid",
        "label": "网格刻度",
        "type": "toggle",
        "default": true,
        "desc": "坐标网格与刻度显隐",
        "publicKey": "showGrid",
        "publicLabel": "网格刻度",
        "description": "坐标网格与刻度显隐"
      },
      {
        "key": "showLabels",
        "label": "气泡名称",
        "type": "toggle",
        "default": true,
        "desc": "气泡上的公司名显隐",
        "publicKey": "showLabels",
        "publicLabel": "气泡名称",
        "description": "气泡上的公司名显隐"
      },
      {
        "key": "showAxisTitles",
        "label": "坐标轴标题",
        "type": "toggle",
        "default": true,
        "desc": "X/Y 轴标题显隐",
        "publicKey": "showAxisTitles",
        "publicLabel": "坐标轴标题",
        "description": "X/Y 轴标题显隐"
      }
    ],
    "defaultProps": {
      "kicker": "VALUATION · 估值地形",
      "title": "估值与营收 ",
      "titleEm": "正在脱钩",
      "lead": "横轴为年化营收，纵轴为资本估值，气泡越大代表最近一轮融资额越高。",
      "points": [
        {
          "label": "OpenAI",
          "x": 3.7,
          "y": 157,
          "r": 6.6,
          "note": "产品化领跑"
        },
        {
          "label": "Databricks",
          "x": 2.4,
          "y": 62,
          "r": 10,
          "note": "数据平台"
        },
        {
          "label": "xAI",
          "x": 0.1,
          "y": 50,
          "r": 6,
          "note": "算力豪赌"
        },
        {
          "label": "Anthropic",
          "x": 0.9,
          "y": 40,
          "r": 4,
          "note": "安全叙事"
        },
        {
          "label": "CoreWeave",
          "x": 2,
          "y": 23,
          "r": 1.1,
          "note": "算力云"
        },
        {
          "label": "Scale AI",
          "x": 0.7,
          "y": 14,
          "r": 1,
          "note": "数据标注"
        },
        {
          "label": "Perplexity",
          "x": 0.05,
          "y": 9,
          "r": 0.5,
          "note": "AI 搜索"
        },
        {
          "label": "Mistral",
          "x": 0.03,
          "y": 6,
          "r": 0.6,
          "note": "开源模型"
        }
      ],
      "xLabel": "年化营收 ARR（十亿美元）",
      "yLabel": "估值（十亿美元）",
      "sizeLabel": "气泡大小 = 最近一轮融资额",
      "xMax": 4,
      "yMax": 170,
      "pointCount": 6,
      "focusEnabled": true,
      "focusIndex": 0,
      "showGrid": true,
      "showLabels": true,
      "showAxisTitles": true,
      "scheme": "green",
      "emphasis": "ticket",
      "breath": 55,
      "magnet": true,
      "aurora": true,
      "auroraSpeed": 1,
      "index": "37 / 73"
    }
  },
  {
    "key": "theme02_page039",
    "themeKey": "theme02",
    "pageNumber": 39,
    "layout": "THEME02-039",
    "slot": "waterfall",
    "label": "资本桥 · Waterfall",
    "bgClass": "",
    "controls": [
      {
        "key": "scheme",
        "label": "配色方案",
        "type": "enum",
        "default": "green",
        "options": [
          [
            "green",
            "霓虹绿"
          ],
          [
            "violet",
            "炫光紫"
          ]
        ],
        "desc": "切换整页炫光配色。",
        "publicKey": "scheme",
        "publicLabel": "配色方案",
        "description": "切换整页炫光配色。"
      },
      {
        "key": "emphasis",
        "label": "强调卡片",
        "type": "enum",
        "default": "ticket",
        "options": [
          [
            "default",
            "默认发光"
          ],
          [
            "ticket",
            "炫光票卡"
          ]
        ],
        "desc": "切换焦点卡片的发光质感。",
        "publicKey": "emphasis",
        "publicLabel": "强调卡片",
        "description": "切换焦点卡片的发光质感。"
      },
      {
        "key": "breath",
        "label": "内光呼吸感",
        "type": "slider",
        "default": 55,
        "min": 0,
        "max": 100,
        "step": 1,
        "desc": "炫光票卡模式下的内光呼吸强度。",
        "publicKey": "breath",
        "publicLabel": "内光呼吸感",
        "description": "炫光票卡模式下的内光呼吸强度。"
      },
      {
        "key": "magnet",
        "label": "磁吸悬停",
        "type": "toggle",
        "default": true,
        "desc": "焦点卡片跟随指针产生轻微位移和倾斜。",
        "publicKey": "magnet",
        "publicLabel": "磁吸悬停",
        "description": "焦点卡片跟随指针产生轻微位移和倾斜。"
      },
      {
        "key": "aurora",
        "label": "渐变流光",
        "type": "toggle",
        "default": true,
        "desc": "开启标题、数字和图表重点元素的流光渐变。",
        "publicKey": "aurora",
        "publicLabel": "渐变流光",
        "description": "开启标题、数字和图表重点元素的流光渐变。"
      },
      {
        "key": "auroraSpeed",
        "label": "流光速度",
        "type": "slider",
        "default": 1,
        "min": 0.4,
        "max": 3,
        "step": 0.1,
        "desc": "流光动画速度。",
        "publicKey": "auroraSpeed",
        "publicLabel": "流光速度",
        "description": "流光动画速度。"
      },
      {
        "key": "barCount",
        "label": "条目数量",
        "type": "number",
        "default": 6,
        "min": 2,
        "step": 1,
        "desc": "瀑布图展示的条目数量",
        "publicKey": "itemCount",
        "publicLabel": "条目数量",
        "description": "瀑布图展示的条目数量"
      },
      {
        "key": "focusEnabled",
        "label": "重点强调",
        "type": "toggle",
        "default": true,
        "desc": "辉光强调某一条（其余淡出）",
        "publicKey": "focusEnabled",
        "publicLabel": "重点强调",
        "description": "辉光强调某一条（其余淡出）"
      },
      {
        "key": "focusIndex",
        "label": "强调项",
        "type": "number",
        "default": 1,
        "min": 0,
        "step": 1,
        "desc": "被强调条目的序号",
        "publicKey": "focusIndex",
        "publicLabel": "强调项",
        "description": "被强调条目的序号"
      },
      {
        "key": "showConnector",
        "label": "连接器",
        "type": "toggle",
        "default": true,
        "desc": "浮动条之间的虚线连接器显隐",
        "publicKey": "showConnector",
        "publicLabel": "连接器",
        "description": "浮动条之间的虚线连接器显隐"
      },
      {
        "key": "showValueLabels",
        "label": "数值标签",
        "type": "toggle",
        "default": true,
        "desc": "条上方有符号数值显隐",
        "publicKey": "showValueLabels",
        "publicLabel": "数值标签",
        "description": "条上方有符号数值显隐"
      },
      {
        "key": "showGrid",
        "label": "网格刻度",
        "type": "toggle",
        "default": true,
        "desc": "水平网格与刻度显隐",
        "publicKey": "showGrid",
        "publicLabel": "网格刻度",
        "description": "水平网格与刻度显隐"
      }
    ],
    "defaultProps": {
      "kicker": "BRIDGE · 资本桥",
      "title": "本年总额 ",
      "titleEm": "是怎么搭起来的",
      "lead": "以 2023 年基数为起点，逐层叠加各赛道的资本增减，桥接出 2024 年美国 AI 大额融资总盘。",
      "bars": [
        {
          "label": "2023 基数",
          "value": 96,
          "type": "total"
        },
        {
          "label": "基础设施层",
          "value": 58,
          "type": "inc"
        },
        {
          "label": "模型层",
          "value": 41,
          "type": "inc"
        },
        {
          "label": "应用层回落",
          "value": -12,
          "type": "dec"
        },
        {
          "label": "其它赛道",
          "value": 9,
          "type": "inc"
        },
        {
          "label": "2024 总额",
          "value": 192,
          "type": "total"
        }
      ],
      "unit": "十亿美元",
      "barCount": 6,
      "focusEnabled": true,
      "focusIndex": 1,
      "showConnector": true,
      "showValueLabels": true,
      "showGrid": true,
      "scheme": "green",
      "emphasis": "ticket",
      "breath": 55,
      "magnet": true,
      "aurora": true,
      "auroraSpeed": 1,
      "index": "38 / 73"
    }
  },
  {
    "key": "theme02_page040",
    "themeKey": "theme02",
    "pageNumber": 40,
    "layout": "THEME02-040",
    "slot": "gauge",
    "label": "达成率 · Gauge",
    "bgClass": "",
    "controls": [
      {
        "key": "scheme",
        "label": "配色方案",
        "type": "enum",
        "default": "green",
        "options": [
          [
            "green",
            "霓虹绿"
          ],
          [
            "violet",
            "炫光紫"
          ]
        ],
        "desc": "切换整页炫光配色。",
        "publicKey": "scheme",
        "publicLabel": "配色方案",
        "description": "切换整页炫光配色。"
      },
      {
        "key": "emphasis",
        "label": "强调卡片",
        "type": "enum",
        "default": "ticket",
        "options": [
          [
            "default",
            "默认发光"
          ],
          [
            "ticket",
            "炫光票卡"
          ]
        ],
        "desc": "切换焦点卡片的发光质感。",
        "publicKey": "emphasis",
        "publicLabel": "强调卡片",
        "description": "切换焦点卡片的发光质感。"
      },
      {
        "key": "breath",
        "label": "内光呼吸感",
        "type": "slider",
        "default": 55,
        "min": 0,
        "max": 100,
        "step": 1,
        "desc": "炫光票卡模式下的内光呼吸强度。",
        "publicKey": "breath",
        "publicLabel": "内光呼吸感",
        "description": "炫光票卡模式下的内光呼吸强度。"
      },
      {
        "key": "magnet",
        "label": "磁吸悬停",
        "type": "toggle",
        "default": true,
        "desc": "焦点卡片跟随指针产生轻微位移和倾斜。",
        "publicKey": "magnet",
        "publicLabel": "磁吸悬停",
        "description": "焦点卡片跟随指针产生轻微位移和倾斜。"
      },
      {
        "key": "aurora",
        "label": "渐变流光",
        "type": "toggle",
        "default": true,
        "desc": "开启标题、数字和图表重点元素的流光渐变。",
        "publicKey": "aurora",
        "publicLabel": "渐变流光",
        "description": "开启标题、数字和图表重点元素的流光渐变。"
      },
      {
        "key": "auroraSpeed",
        "label": "流光速度",
        "type": "slider",
        "default": 1,
        "min": 0.4,
        "max": 3,
        "step": 0.1,
        "desc": "流光动画速度。",
        "publicKey": "auroraSpeed",
        "publicLabel": "流光速度",
        "description": "流光动画速度。"
      },
      {
        "key": "layout",
        "label": "版式",
        "type": "enum",
        "default": "ring",
        "options": [
          {
            "value": "ring",
            "label": "同心多环"
          },
          {
            "value": "gauges",
            "label": "一排仪表"
          }
        ],
        "desc": "同心多环 (Bklit 风) / 一排 270° 仪表",
        "publicKey": "layout",
        "publicLabel": "版式",
        "description": "同心多环 (Bklit 风) / 一排 270° 仪表"
      },
      {
        "key": "gaugeCount",
        "label": "环数量",
        "type": "number",
        "default": 4,
        "min": 2,
        "step": 1,
        "desc": "环 / 仪表的数量",
        "publicKey": "gaugeCount",
        "publicLabel": "环数量",
        "description": "环 / 仪表的数量"
      },
      {
        "key": "focusEnabled",
        "label": "重点强调",
        "type": "toggle",
        "default": true,
        "desc": "强调某一项（圆心切到该项，其余淡出）",
        "publicKey": "focusEnabled",
        "publicLabel": "重点强调",
        "description": "强调某一项（圆心切到该项，其余淡出）"
      },
      {
        "key": "focusIndex",
        "label": "强调项",
        "type": "number",
        "default": 0,
        "min": 0,
        "step": 1,
        "desc": "被强调项的序号",
        "publicKey": "focusIndex",
        "publicLabel": "强调项",
        "description": "被强调项的序号"
      },
      {
        "key": "showTrack",
        "label": "背景轨道",
        "type": "toggle",
        "default": true,
        "desc": "背景轨道弧显隐",
        "publicKey": "showGuide",
        "publicLabel": "背景轨道",
        "description": "背景轨道弧显隐"
      },
      {
        "key": "showCenter",
        "label": "圆心读数",
        "type": "toggle",
        "default": true,
        "desc": "同心多环的圆心读数显隐",
        "publicKey": "showCenter",
        "publicLabel": "圆心读数",
        "description": "同心多环的圆心读数显隐"
      },
      {
        "key": "showLegend",
        "label": "图例",
        "type": "toggle",
        "default": true,
        "desc": "同心多环右侧图例显隐",
        "publicKey": "showLegend",
        "publicLabel": "图例",
        "description": "同心多环右侧图例显隐"
      },
      {
        "key": "showNote",
        "label": "说明文案",
        "type": "toggle",
        "default": true,
        "desc": "说明文案显隐（图例内 / 仪表下方）",
        "publicKey": "showNote",
        "publicLabel": "说明文案",
        "description": "说明文案显隐（图例内 / 仪表下方）"
      }
    ],
    "defaultProps": {
      "kicker": "RINGS · 关键达成率",
      "title": "四个比率 ",
      "titleEm": "看清结构性力量",
      "lead": "把这一年最具结构意义的几个比率叠进同一组进度环——资本正在向哪里、向谁集中。",
      "gauges": [
        {
          "label": "基础设施层占比",
          "value": 78,
          "note": "算力 + 数据吃下最确定红利"
        },
        {
          "label": "头部资本集中度",
          "value": 63,
          "note": "前十大公司拿走六成资金"
        },
        {
          "label": "湾区地理集中度",
          "value": 55,
          "note": "融资进一步向旧金山聚拢"
        },
        {
          "label": "商业化兑现率",
          "value": 41,
          "note": "营收兑现仍是下一阶段考题"
        }
      ],
      "gaugeCount": 4,
      "layout": "ring",
      "focusEnabled": true,
      "focusIndex": 0,
      "showTrack": true,
      "showCenter": true,
      "showLegend": true,
      "showNote": true,
      "scheme": "green",
      "emphasis": "ticket",
      "breath": 55,
      "magnet": true,
      "aurora": true,
      "auroraSpeed": 1,
      "index": "39 / 73"
    }
  },
  {
    "key": "theme02_page041",
    "themeKey": "theme02",
    "pageNumber": 41,
    "layout": "THEME02-041",
    "slot": "progress",
    "label": "达成度 · Progress",
    "bgClass": "",
    "controls": [
      {
        "key": "scheme",
        "label": "配色方案",
        "type": "enum",
        "default": "green",
        "options": [
          [
            "green",
            "霓虹绿"
          ],
          [
            "violet",
            "炫光紫"
          ]
        ],
        "desc": "切换整页炫光配色。",
        "publicKey": "scheme",
        "publicLabel": "配色方案",
        "description": "切换整页炫光配色。"
      },
      {
        "key": "emphasis",
        "label": "强调卡片",
        "type": "enum",
        "default": "ticket",
        "options": [
          [
            "default",
            "默认发光"
          ],
          [
            "ticket",
            "炫光票卡"
          ]
        ],
        "desc": "切换焦点卡片的发光质感。",
        "publicKey": "emphasis",
        "publicLabel": "强调卡片",
        "description": "切换焦点卡片的发光质感。"
      },
      {
        "key": "breath",
        "label": "内光呼吸感",
        "type": "slider",
        "default": 55,
        "min": 0,
        "max": 100,
        "step": 1,
        "desc": "炫光票卡模式下的内光呼吸强度。",
        "publicKey": "breath",
        "publicLabel": "内光呼吸感",
        "description": "炫光票卡模式下的内光呼吸强度。"
      },
      {
        "key": "magnet",
        "label": "磁吸悬停",
        "type": "toggle",
        "default": true,
        "desc": "焦点卡片跟随指针产生轻微位移和倾斜。",
        "publicKey": "magnet",
        "publicLabel": "磁吸悬停",
        "description": "焦点卡片跟随指针产生轻微位移和倾斜。"
      },
      {
        "key": "aurora",
        "label": "渐变流光",
        "type": "toggle",
        "default": true,
        "desc": "开启标题、数字和图表重点元素的流光渐变。",
        "publicKey": "aurora",
        "publicLabel": "渐变流光",
        "description": "开启标题、数字和图表重点元素的流光渐变。"
      },
      {
        "key": "auroraSpeed",
        "label": "流光速度",
        "type": "slider",
        "default": 1,
        "min": 0.4,
        "max": 3,
        "step": 0.1,
        "desc": "流光动画速度。",
        "publicKey": "auroraSpeed",
        "publicLabel": "流光速度",
        "description": "流光动画速度。"
      },
      {
        "key": "barCount",
        "label": "行数",
        "type": "number",
        "default": 5,
        "min": 2,
        "step": 1,
        "desc": "进度条行数（2–n）",
        "publicKey": "barCount",
        "publicLabel": "行数",
        "description": "进度条行数（2–n）"
      },
      {
        "key": "focusEnabled",
        "label": "重点强调",
        "type": "toggle",
        "default": true,
        "desc": "是否辉光强调某一行",
        "publicKey": "focusEnabled",
        "publicLabel": "重点强调",
        "description": "是否辉光强调某一行"
      },
      {
        "key": "focusIndex",
        "label": "强调项",
        "type": "number",
        "default": 0,
        "min": 0,
        "step": 1,
        "desc": "被强调行的序号",
        "publicKey": "focusIndex",
        "publicLabel": "强调项",
        "description": "被强调行的序号"
      },
      {
        "key": "showTarget",
        "label": "目标刻度",
        "type": "toggle",
        "default": true,
        "desc": "目标参照虚线显隐",
        "publicKey": "showTarget",
        "publicLabel": "目标刻度",
        "description": "目标参照虚线显隐"
      },
      {
        "key": "showValueLabels",
        "label": "百分比读数",
        "type": "toggle",
        "default": true,
        "desc": "右侧百分比读数显隐",
        "publicKey": "showValueLabels",
        "publicLabel": "百分比读数",
        "description": "右侧百分比读数显隐"
      },
      {
        "key": "showNote",
        "label": "说明文案",
        "type": "toggle",
        "default": true,
        "desc": "行内说明文案显隐",
        "publicKey": "showNote",
        "publicLabel": "说明文案",
        "description": "行内说明文案显隐"
      }
    ],
    "defaultProps": {
      "kicker": "PROGRESS · 关键比率",
      "title": "五条比率 ",
      "titleEm": "量出资本的偏好",
      "lead": "把这一年最有结构意义的几个比率拉平了横向比——填得越满，说明这股力量越强；虚线是参照目标。",
      "bars": [
        {
          "label": "基础设施层资金占比",
          "value": 78,
          "target": 70,
          "note": "算力 + 数据吃下最确定红利"
        },
        {
          "label": "头部十强资本集中度",
          "value": 63,
          "target": 55,
          "note": "前十大公司拿走六成资金"
        },
        {
          "label": "湾区地理集中度",
          "value": 55,
          "target": 50,
          "note": "融资进一步向旧金山聚拢"
        },
        {
          "label": "企业级付费渗透率",
          "value": 47,
          "target": 45,
          "note": "续费率走高，落地在加速"
        },
        {
          "label": "商业化营收兑现率",
          "value": 41,
          "target": 60,
          "note": "兑现仍是下一阶段的考题"
        }
      ],
      "barCount": 5,
      "focusEnabled": true,
      "focusIndex": 0,
      "showTarget": true,
      "showNote": true,
      "showValueLabels": true,
      "scheme": "green",
      "emphasis": "ticket",
      "breath": 55,
      "magnet": true,
      "aurora": true,
      "auroraSpeed": 1,
      "index": "40 / 73"
    }
  },
  {
    "key": "theme02_page042",
    "themeKey": "theme02",
    "pageNumber": 42,
    "layout": "THEME02-042",
    "slot": "portrait",
    "label": "人物金句 · Portrait",
    "bgClass": "",
    "controls": [
      {
        "key": "scheme",
        "label": "配色方案",
        "type": "enum",
        "default": "green",
        "options": [
          [
            "green",
            "霓虹绿"
          ],
          [
            "violet",
            "炫光紫"
          ]
        ],
        "desc": "切换整页炫光配色。",
        "publicKey": "scheme",
        "publicLabel": "配色方案",
        "description": "切换整页炫光配色。"
      },
      {
        "key": "emphasis",
        "label": "强调卡片",
        "type": "enum",
        "default": "ticket",
        "options": [
          [
            "default",
            "默认发光"
          ],
          [
            "ticket",
            "炫光票卡"
          ]
        ],
        "desc": "切换焦点卡片的发光质感。",
        "publicKey": "emphasis",
        "publicLabel": "强调卡片",
        "description": "切换焦点卡片的发光质感。"
      },
      {
        "key": "breath",
        "label": "内光呼吸感",
        "type": "slider",
        "default": 55,
        "min": 0,
        "max": 100,
        "step": 1,
        "desc": "炫光票卡模式下的内光呼吸强度。",
        "publicKey": "breath",
        "publicLabel": "内光呼吸感",
        "description": "炫光票卡模式下的内光呼吸强度。"
      },
      {
        "key": "magnet",
        "label": "磁吸悬停",
        "type": "toggle",
        "default": true,
        "desc": "焦点卡片跟随指针产生轻微位移和倾斜。",
        "publicKey": "magnet",
        "publicLabel": "磁吸悬停",
        "description": "焦点卡片跟随指针产生轻微位移和倾斜。"
      },
      {
        "key": "aurora",
        "label": "渐变流光",
        "type": "toggle",
        "default": true,
        "desc": "开启标题、数字和图表重点元素的流光渐变。",
        "publicKey": "aurora",
        "publicLabel": "渐变流光",
        "description": "开启标题、数字和图表重点元素的流光渐变。"
      },
      {
        "key": "auroraSpeed",
        "label": "流光速度",
        "type": "slider",
        "default": 1,
        "min": 0.4,
        "max": 3,
        "step": 0.1,
        "desc": "流光动画速度。",
        "publicKey": "auroraSpeed",
        "publicLabel": "流光速度",
        "description": "流光动画速度。"
      },
      {
        "key": "imageCount",
        "label": "头像数量",
        "type": "number",
        "default": 1,
        "min": 0,
        "max": 1,
        "step": 1,
        "desc": "人物头像槽（0 = 纯引言）",
        "publicKey": "imageCount",
        "publicLabel": "头像数量",
        "description": "人物头像槽（0 = 纯引言）"
      },
      {
        "key": "imageSide",
        "label": "头像位置",
        "type": "enum",
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
        "desc": "头像位于左 / 右",
        "publicKey": "imageSide",
        "publicLabel": "头像位置",
        "description": "头像位于左 / 右"
      },
      {
        "key": "showMark",
        "label": "装饰引号",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏大号装饰引号",
        "publicKey": "showMark",
        "publicLabel": "装饰引号",
        "description": "显示/隐藏大号装饰引号"
      },
      {
        "key": "showEmphasis",
        "label": "短语强调",
        "type": "toggle",
        "default": true,
        "desc": "将关键短语处理为发光强调",
        "publicKey": "showEmphasis",
        "publicLabel": "短语强调",
        "description": "将关键短语处理为发光强调"
      },
      {
        "key": "showRole",
        "label": "头衔",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏署名头衔",
        "publicKey": "showRole",
        "publicLabel": "头衔",
        "description": "显示/隐藏署名头衔"
      },
      {
        "key": "showCaption",
        "label": "头像图注",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏头像说明",
        "publicKey": "showCaption",
        "publicLabel": "头像图注",
        "description": "显示/隐藏头像说明"
      }
    ],
    "defaultProps": {
      "kicker": "VOICE · 创始人之声",
      "quote": "比起单纯追求规模，我们更相信构建",
      "quoteEm": "可解释、可控",
      "quoteTail": "的系统，更符合长远利益。",
      "name": "Dario Amodei",
      "role": "Anthropic 联合创始人 & CEO",
      "caption": "Dario Amodei · Anthropic",
      "imageCount": 1,
      "imageSide": "left",
      "showMark": true,
      "showEmphasis": true,
      "showRole": true,
      "showCaption": true,
      "images": [],
      "scheme": "green",
      "emphasis": "ticket",
      "breath": 55,
      "magnet": true,
      "aurora": true,
      "auroraSpeed": 1,
      "index": "41 / 73"
    }
  },
  {
    "key": "theme02_page043",
    "themeKey": "theme02",
    "pageNumber": 43,
    "layout": "THEME02-043",
    "slot": "voices",
    "label": "声音墙 · Voices",
    "bgClass": "",
    "controls": [
      {
        "key": "scheme",
        "label": "配色方案",
        "type": "enum",
        "default": "green",
        "options": [
          [
            "green",
            "霓虹绿"
          ],
          [
            "violet",
            "炫光紫"
          ]
        ],
        "desc": "切换整页炫光配色。",
        "publicKey": "scheme",
        "publicLabel": "配色方案",
        "description": "切换整页炫光配色。"
      },
      {
        "key": "emphasis",
        "label": "强调卡片",
        "type": "enum",
        "default": "ticket",
        "options": [
          [
            "default",
            "默认发光"
          ],
          [
            "ticket",
            "炫光票卡"
          ]
        ],
        "desc": "切换焦点卡片的发光质感。",
        "publicKey": "emphasis",
        "publicLabel": "强调卡片",
        "description": "切换焦点卡片的发光质感。"
      },
      {
        "key": "breath",
        "label": "内光呼吸感",
        "type": "slider",
        "default": 55,
        "min": 0,
        "max": 100,
        "step": 1,
        "desc": "炫光票卡模式下的内光呼吸强度。",
        "publicKey": "breath",
        "publicLabel": "内光呼吸感",
        "description": "炫光票卡模式下的内光呼吸强度。"
      },
      {
        "key": "magnet",
        "label": "磁吸悬停",
        "type": "toggle",
        "default": true,
        "desc": "焦点卡片跟随指针产生轻微位移和倾斜。",
        "publicKey": "magnet",
        "publicLabel": "磁吸悬停",
        "description": "焦点卡片跟随指针产生轻微位移和倾斜。"
      },
      {
        "key": "aurora",
        "label": "渐变流光",
        "type": "toggle",
        "default": true,
        "desc": "开启标题、数字和图表重点元素的流光渐变。",
        "publicKey": "aurora",
        "publicLabel": "渐变流光",
        "description": "开启标题、数字和图表重点元素的流光渐变。"
      },
      {
        "key": "auroraSpeed",
        "label": "流光速度",
        "type": "slider",
        "default": 1,
        "min": 0.4,
        "max": 3,
        "step": 0.1,
        "desc": "流光动画速度。",
        "publicKey": "auroraSpeed",
        "publicLabel": "流光速度",
        "description": "流光动画速度。"
      },
      {
        "key": "voiceCount",
        "label": "人物卡数量",
        "type": "number",
        "default": 3,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "一排人物卡的数量（2–4）",
        "publicKey": "voiceCount",
        "publicLabel": "人物卡数量",
        "description": "一排人物卡的数量（2–4）"
      },
      {
        "key": "focusEnabled",
        "label": "重点强调",
        "type": "toggle",
        "default": false,
        "desc": "辉光强调某一张（其余淡出）",
        "publicKey": "focusEnabled",
        "publicLabel": "重点强调",
        "description": "辉光强调某一张（其余淡出）"
      },
      {
        "key": "focusIndex",
        "label": "强调项",
        "type": "number",
        "default": 0,
        "min": 0,
        "step": 1,
        "desc": "被强调卡片的序号",
        "publicKey": "focusIndex",
        "publicLabel": "强调项",
        "description": "被强调卡片的序号"
      },
      {
        "key": "showMark",
        "label": "装饰引号",
        "type": "toggle",
        "default": true,
        "desc": "卡内装饰引号显隐",
        "publicKey": "showMark",
        "publicLabel": "装饰引号",
        "description": "卡内装饰引号显隐"
      },
      {
        "key": "showRole",
        "label": "头衔",
        "type": "toggle",
        "default": true,
        "desc": "署名头衔显隐",
        "publicKey": "showRole",
        "publicLabel": "头衔",
        "description": "署名头衔显隐"
      },
      {
        "key": "showCaption",
        "label": "头像图注",
        "type": "toggle",
        "default": true,
        "desc": "头像下方图注显隐",
        "publicKey": "showCaption",
        "publicLabel": "头像图注",
        "description": "头像下方图注显隐"
      }
    ],
    "defaultProps": {
      "kicker": "VOICES · 多方之声",
      "title": "资本与创始人 ",
      "titleEm": "怎么看这一年",
      "lead": "把投资人、创始人与研究者的判断并置——同一片热潮，他们读出的信号并不相同。",
      "voices": [
        {
          "quote": "算力与数据是这一轮唯一确定的红利，其余都要用收入来证明。",
          "name": "Investor A",
          "role": "成长期基金合伙人",
          "caption": "投资人 · GROWTH"
        },
        {
          "quote": "我们更相信可解释、可控的系统，长期看这才符合用户利益。",
          "name": "Founder B",
          "role": "模型公司联合创始人",
          "caption": "创始人 · MODEL"
        },
        {
          "quote": "估值跑在营收前面，窗口正在收窄，下一年是兑现之年。",
          "name": "Analyst C",
          "role": "一级市场研究负责人",
          "caption": "研究者 · RESEARCH"
        }
      ],
      "voiceCount": 3,
      "focusEnabled": false,
      "focusIndex": 0,
      "showMark": true,
      "showRole": true,
      "showCaption": true,
      "images": [],
      "scheme": "green",
      "emphasis": "ticket",
      "breath": 55,
      "magnet": true,
      "aurora": true,
      "auroraSpeed": 1,
      "index": "42 / 73"
    }
  },
  {
    "key": "theme02_page044",
    "themeKey": "theme02",
    "pageNumber": 44,
    "layout": "THEME02-044",
    "slot": "process",
    "label": "判断框架 · Process",
    "bgClass": "",
    "controls": [
      {
        "key": "scheme",
        "label": "配色方案",
        "type": "enum",
        "default": "green",
        "options": [
          [
            "green",
            "霓虹绿"
          ],
          [
            "violet",
            "炫光紫"
          ]
        ],
        "desc": "切换整页炫光配色。",
        "publicKey": "scheme",
        "publicLabel": "配色方案",
        "description": "切换整页炫光配色。"
      },
      {
        "key": "emphasis",
        "label": "强调卡片",
        "type": "enum",
        "default": "ticket",
        "options": [
          [
            "default",
            "默认发光"
          ],
          [
            "ticket",
            "炫光票卡"
          ]
        ],
        "desc": "切换焦点卡片的发光质感。",
        "publicKey": "emphasis",
        "publicLabel": "强调卡片",
        "description": "切换焦点卡片的发光质感。"
      },
      {
        "key": "breath",
        "label": "内光呼吸感",
        "type": "slider",
        "default": 55,
        "min": 0,
        "max": 100,
        "step": 1,
        "desc": "炫光票卡模式下的内光呼吸强度。",
        "publicKey": "breath",
        "publicLabel": "内光呼吸感",
        "description": "炫光票卡模式下的内光呼吸强度。"
      },
      {
        "key": "magnet",
        "label": "磁吸悬停",
        "type": "toggle",
        "default": true,
        "desc": "焦点卡片跟随指针产生轻微位移和倾斜。",
        "publicKey": "magnet",
        "publicLabel": "磁吸悬停",
        "description": "焦点卡片跟随指针产生轻微位移和倾斜。"
      },
      {
        "key": "aurora",
        "label": "渐变流光",
        "type": "toggle",
        "default": true,
        "desc": "开启标题、数字和图表重点元素的流光渐变。",
        "publicKey": "aurora",
        "publicLabel": "渐变流光",
        "description": "开启标题、数字和图表重点元素的流光渐变。"
      },
      {
        "key": "auroraSpeed",
        "label": "流光速度",
        "type": "slider",
        "default": 1,
        "min": 0.4,
        "max": 3,
        "step": 0.1,
        "desc": "流光动画速度。",
        "publicKey": "auroraSpeed",
        "publicLabel": "流光速度",
        "description": "流光动画速度。"
      },
      {
        "key": "stepCount",
        "label": "步骤数量",
        "type": "number",
        "default": 4,
        "min": 2,
        "step": 1,
        "desc": "展示的步骤数量",
        "publicKey": "stepCount",
        "publicLabel": "步骤数量",
        "description": "展示的步骤数量"
      },
      {
        "key": "orientation",
        "label": "排布方向",
        "type": "enum",
        "default": "horizontal",
        "options": [
          {
            "value": "horizontal",
            "label": "横向"
          },
          {
            "value": "vertical",
            "label": "纵向"
          }
        ],
        "desc": "步骤流的排布方向",
        "publicKey": "orientation",
        "publicLabel": "排布方向",
        "description": "步骤流的排布方向"
      },
      {
        "key": "focusEnabled",
        "label": "重点强调",
        "type": "toggle",
        "default": false,
        "desc": "是否高亮某一步骤",
        "publicKey": "focusEnabled",
        "publicLabel": "重点强调",
        "description": "是否高亮某一步骤"
      },
      {
        "key": "focusIndex",
        "label": "强调项",
        "type": "number",
        "default": 0,
        "min": 0,
        "step": 1,
        "desc": "被强调步骤的序号",
        "publicKey": "focusIndex",
        "publicLabel": "强调项",
        "description": "被强调步骤的序号"
      },
      {
        "key": "showConnector",
        "label": "步骤箭头",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏步骤之间的箭头",
        "publicKey": "showConnector",
        "publicLabel": "步骤箭头",
        "description": "显示/隐藏步骤之间的箭头"
      },
      {
        "key": "showStepNo",
        "label": "步骤编号",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏大号步骤编号",
        "publicKey": "showStepNo",
        "publicLabel": "步骤编号",
        "description": "显示/隐藏大号步骤编号"
      },
      {
        "key": "showDesc",
        "label": "步骤说明",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏步骤描述",
        "publicKey": "showDesc",
        "publicLabel": "步骤说明",
        "description": "显示/隐藏步骤描述"
      }
    ],
    "defaultProps": {
      "kicker": "FRAMEWORK · 判断框架",
      "title": "从数据到决策 ",
      "titleEm": "四步判断",
      "steps": [
        {
          "title": "看热度",
          "desc": "融资额、轮次与头部集中度，判断资本在哪里聚集。"
        },
        {
          "title": "辨兑现",
          "desc": "收入确定性、客户留存与成本结构，判断能否落地。"
        },
        {
          "title": "分层级",
          "desc": "上游确定、中游竞争、下游潜力，定位风险与机会。"
        },
        {
          "title": "定策略",
          "desc": "转化为可执行的投资与产品判断，留在牌桌上。"
        }
      ],
      "stepCount": 4,
      "orientation": "horizontal",
      "focusEnabled": false,
      "focusIndex": 0,
      "showConnector": true,
      "showStepNo": true,
      "showDesc": true,
      "scheme": "green",
      "emphasis": "ticket",
      "breath": 55,
      "magnet": true,
      "aurora": true,
      "auroraSpeed": 1,
      "index": "43 / 73"
    }
  },
  {
    "key": "theme02_page045",
    "themeKey": "theme02",
    "pageNumber": 45,
    "layout": "THEME02-045",
    "slot": "takeaway",
    "label": "核心结论 · Takeaways",
    "bgClass": "",
    "controls": [
      {
        "key": "scheme",
        "label": "配色方案",
        "type": "enum",
        "default": "green",
        "options": [
          [
            "green",
            "霓虹绿"
          ],
          [
            "violet",
            "炫光紫"
          ]
        ],
        "desc": "切换整页炫光配色。",
        "publicKey": "scheme",
        "publicLabel": "配色方案",
        "description": "切换整页炫光配色。"
      },
      {
        "key": "emphasis",
        "label": "强调卡片",
        "type": "enum",
        "default": "ticket",
        "options": [
          [
            "default",
            "默认发光"
          ],
          [
            "ticket",
            "炫光票卡"
          ]
        ],
        "desc": "切换焦点卡片的发光质感。",
        "publicKey": "emphasis",
        "publicLabel": "强调卡片",
        "description": "切换焦点卡片的发光质感。"
      },
      {
        "key": "breath",
        "label": "内光呼吸感",
        "type": "slider",
        "default": 55,
        "min": 0,
        "max": 100,
        "step": 1,
        "desc": "炫光票卡模式下的内光呼吸强度。",
        "publicKey": "breath",
        "publicLabel": "内光呼吸感",
        "description": "炫光票卡模式下的内光呼吸强度。"
      },
      {
        "key": "magnet",
        "label": "磁吸悬停",
        "type": "toggle",
        "default": true,
        "desc": "焦点卡片跟随指针产生轻微位移和倾斜。",
        "publicKey": "magnet",
        "publicLabel": "磁吸悬停",
        "description": "焦点卡片跟随指针产生轻微位移和倾斜。"
      },
      {
        "key": "aurora",
        "label": "渐变流光",
        "type": "toggle",
        "default": true,
        "desc": "开启标题、数字和图表重点元素的流光渐变。",
        "publicKey": "aurora",
        "publicLabel": "渐变流光",
        "description": "开启标题、数字和图表重点元素的流光渐变。"
      },
      {
        "key": "auroraSpeed",
        "label": "流光速度",
        "type": "slider",
        "default": 1,
        "min": 0.4,
        "max": 3,
        "step": 0.1,
        "desc": "流光动画速度。",
        "publicKey": "auroraSpeed",
        "publicLabel": "流光速度",
        "description": "流光动画速度。"
      },
      {
        "key": "itemCount",
        "label": "结论条数",
        "type": "number",
        "default": 4,
        "min": 2,
        "step": 1,
        "desc": "核心结论的条数",
        "publicKey": "itemCount",
        "publicLabel": "结论条数",
        "description": "核心结论的条数"
      },
      {
        "key": "featureIndex",
        "label": "特写项",
        "type": "number",
        "default": 0,
        "min": 0,
        "step": 1,
        "desc": "作为左侧特写大图的结论序号",
        "publicKey": "featureIndex",
        "publicLabel": "特写项",
        "description": "作为左侧特写大图的结论序号"
      },
      {
        "key": "focusEnabled",
        "label": "重点强调",
        "type": "toggle",
        "default": true,
        "desc": "是否辉光强调左侧特写面板",
        "publicKey": "focusEnabled",
        "publicLabel": "重点强调",
        "description": "是否辉光强调左侧特写面板"
      },
      {
        "key": "showIndex",
        "label": "编号",
        "type": "toggle",
        "default": true,
        "desc": "大号 / 细号编号显隐",
        "publicKey": "showIndex",
        "publicLabel": "编号",
        "description": "大号 / 细号编号显隐"
      },
      {
        "key": "showBody",
        "label": "支撑说明",
        "type": "toggle",
        "default": true,
        "desc": "支撑说明文案显隐",
        "publicKey": "showBody",
        "publicLabel": "支撑说明",
        "description": "支撑说明文案显隐"
      },
      {
        "key": "showRail",
        "label": "清单光轨",
        "type": "toggle",
        "default": true,
        "desc": "右侧清单竖向光轨与发光节点显隐",
        "publicKey": "showRail",
        "publicLabel": "清单光轨",
        "description": "右侧清单竖向光轨与发光节点显隐"
      },
      {
        "key": "showDivider",
        "label": "清单分隔线",
        "type": "toggle",
        "default": true,
        "desc": "右侧清单条目之间分隔细线显隐",
        "publicKey": "showDivider",
        "publicLabel": "清单分隔线",
        "description": "右侧清单条目之间分隔细线显隐"
      }
    ],
    "defaultProps": {
      "kicker": "TAKEAWAYS · 核心结论",
      "title": "四句话 ",
      "titleEm": "读懂这一年",
      "items": [
        {
          "lead": "资本高度集中",
          "body": "近三分之一的美国风险投资涌入 AI，并进一步向旧金山湾区与少数头部聚拢。"
        },
        {
          "lead": "估值跑在营收前面",
          "body": "大额融资由叙事与算力预期驱动，商业化兑现是下一阶段真正的考题。"
        },
        {
          "lead": "基础设施最确定",
          "body": "算力、数据与平台层吃下最确定的红利，应用层的分化将更加剧烈。"
        },
        {
          "lead": "窗口正在收窄",
          "body": "门槛逐级抬高，能把技术转化为可持续收入的公司，才会穿越周期。"
        }
      ],
      "itemCount": 4,
      "featureIndex": 0,
      "focusEnabled": true,
      "showIndex": true,
      "showBody": true,
      "showRail": true,
      "showDivider": true,
      "scheme": "green",
      "emphasis": "ticket",
      "breath": 55,
      "magnet": true,
      "aurora": true,
      "auroraSpeed": 1,
      "index": "44 / 73"
    }
  },
  {
    "key": "theme02_page046",
    "themeKey": "theme02",
    "pageNumber": 46,
    "layout": "THEME02-046",
    "slot": "risk",
    "label": "风险研判 · Risk",
    "bgClass": "",
    "controls": [
      {
        "key": "scheme",
        "label": "配色方案",
        "type": "enum",
        "default": "green",
        "options": [
          [
            "green",
            "霓虹绿"
          ],
          [
            "violet",
            "炫光紫"
          ]
        ],
        "desc": "切换整页炫光配色。",
        "publicKey": "scheme",
        "publicLabel": "配色方案",
        "description": "切换整页炫光配色。"
      },
      {
        "key": "emphasis",
        "label": "强调卡片",
        "type": "enum",
        "default": "ticket",
        "options": [
          [
            "default",
            "默认发光"
          ],
          [
            "ticket",
            "炫光票卡"
          ]
        ],
        "desc": "切换焦点卡片的发光质感。",
        "publicKey": "emphasis",
        "publicLabel": "强调卡片",
        "description": "切换焦点卡片的发光质感。"
      },
      {
        "key": "breath",
        "label": "内光呼吸感",
        "type": "slider",
        "default": 55,
        "min": 0,
        "max": 100,
        "step": 1,
        "desc": "炫光票卡模式下的内光呼吸强度。",
        "publicKey": "breath",
        "publicLabel": "内光呼吸感",
        "description": "炫光票卡模式下的内光呼吸强度。"
      },
      {
        "key": "magnet",
        "label": "磁吸悬停",
        "type": "toggle",
        "default": true,
        "desc": "焦点卡片跟随指针产生轻微位移和倾斜。",
        "publicKey": "magnet",
        "publicLabel": "磁吸悬停",
        "description": "焦点卡片跟随指针产生轻微位移和倾斜。"
      },
      {
        "key": "aurora",
        "label": "渐变流光",
        "type": "toggle",
        "default": true,
        "desc": "开启标题、数字和图表重点元素的流光渐变。",
        "publicKey": "aurora",
        "publicLabel": "渐变流光",
        "description": "开启标题、数字和图表重点元素的流光渐变。"
      },
      {
        "key": "auroraSpeed",
        "label": "流光速度",
        "type": "slider",
        "default": 1,
        "min": 0.4,
        "max": 3,
        "step": 0.1,
        "desc": "流光动画速度。",
        "publicKey": "auroraSpeed",
        "publicLabel": "流光速度",
        "description": "流光动画速度。"
      },
      {
        "key": "riskCount",
        "label": "状态项数量",
        "type": "number",
        "default": 5,
        "min": 3,
        "step": 1,
        "desc": "展示的状态条数",
        "publicKey": "statusItemCount",
        "publicLabel": "状态项数量",
        "description": "展示的状态条数"
      },
      {
        "key": "layout",
        "label": "版式",
        "type": "enum",
        "default": "list",
        "options": [
          {
            "value": "list",
            "label": "清单"
          },
          {
            "value": "grid",
            "label": "卡片网格"
          }
        ],
        "desc": "竖排清单或双列卡片",
        "publicKey": "layout",
        "publicLabel": "版式",
        "description": "竖排清单或双列卡片"
      },
      {
        "key": "focusEnabled",
        "label": "重点强调",
        "type": "toggle",
        "default": true,
        "desc": "是否高亮某一状态",
        "publicKey": "focusEnabled",
        "publicLabel": "重点强调",
        "description": "是否高亮某一状态"
      },
      {
        "key": "focusIndex",
        "label": "强调项",
        "type": "number",
        "default": 0,
        "min": 0,
        "step": 1,
        "desc": "被强调状态的序号",
        "publicKey": "focusIndex",
        "publicLabel": "强调项",
        "description": "被强调状态的序号"
      },
      {
        "key": "showLevel",
        "label": "严重度",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏严重度徽章",
        "publicKey": "showStatusLevel",
        "publicLabel": "严重度",
        "description": "显示/隐藏严重度徽章"
      },
      {
        "key": "showDesc",
        "label": "状态说明",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏状态描述",
        "publicKey": "showDesc",
        "publicLabel": "状态说明",
        "description": "显示/隐藏状态描述"
      }
    ],
    "defaultProps": {
      "kicker": "RISK · 风险研判",
      "title": "盛宴之下 ",
      "titleEm": "五个风险信号",
      "levels": {
        "high": "高",
        "mid": "中",
        "low": "观察"
      },
      "risks": [
        {
          "title": "估值泡沫",
          "desc": "部分头部估值远超当期收入，存在回调风险。",
          "level": "high"
        },
        {
          "title": "商业化滞后",
          "desc": "叙事驱动公司的付费转化与留存仍待验证。",
          "level": "high"
        },
        {
          "title": "算力成本高企",
          "desc": "GPU 与训练成本居高，持续挤压毛利空间。",
          "level": "mid"
        },
        {
          "title": "监管不确定",
          "desc": "安全与合规政策走向，影响落地节奏。",
          "level": "mid"
        },
        {
          "title": "头部过度集中",
          "desc": "资金与人才高度集中，长尾公司承压。",
          "level": "low"
        }
      ],
      "riskCount": 5,
      "layout": "list",
      "focusEnabled": true,
      "focusIndex": 0,
      "showLevel": true,
      "showDesc": true,
      "scheme": "green",
      "emphasis": "ticket",
      "breath": 55,
      "magnet": true,
      "aurora": true,
      "auroraSpeed": 1,
      "index": "45 / 73"
    }
  },
  {
    "key": "theme02_page047",
    "themeKey": "theme02",
    "pageNumber": 47,
    "layout": "THEME02-047",
    "slot": "quote",
    "label": "结语金句 · Quote",
    "bgClass": "",
    "controls": [
      {
        "key": "scheme",
        "label": "配色方案",
        "type": "enum",
        "default": "green",
        "options": [
          [
            "green",
            "霓虹绿"
          ],
          [
            "violet",
            "炫光紫"
          ]
        ],
        "desc": "切换整页炫光配色。",
        "publicKey": "scheme",
        "publicLabel": "配色方案",
        "description": "切换整页炫光配色。"
      },
      {
        "key": "emphasis",
        "label": "强调卡片",
        "type": "enum",
        "default": "ticket",
        "options": [
          [
            "default",
            "默认发光"
          ],
          [
            "ticket",
            "炫光票卡"
          ]
        ],
        "desc": "切换焦点卡片的发光质感。",
        "publicKey": "emphasis",
        "publicLabel": "强调卡片",
        "description": "切换焦点卡片的发光质感。"
      },
      {
        "key": "breath",
        "label": "内光呼吸感",
        "type": "slider",
        "default": 55,
        "min": 0,
        "max": 100,
        "step": 1,
        "desc": "炫光票卡模式下的内光呼吸强度。",
        "publicKey": "breath",
        "publicLabel": "内光呼吸感",
        "description": "炫光票卡模式下的内光呼吸强度。"
      },
      {
        "key": "magnet",
        "label": "磁吸悬停",
        "type": "toggle",
        "default": true,
        "desc": "焦点卡片跟随指针产生轻微位移和倾斜。",
        "publicKey": "magnet",
        "publicLabel": "磁吸悬停",
        "description": "焦点卡片跟随指针产生轻微位移和倾斜。"
      },
      {
        "key": "aurora",
        "label": "渐变流光",
        "type": "toggle",
        "default": true,
        "desc": "开启标题、数字和图表重点元素的流光渐变。",
        "publicKey": "aurora",
        "publicLabel": "渐变流光",
        "description": "开启标题、数字和图表重点元素的流光渐变。"
      },
      {
        "key": "auroraSpeed",
        "label": "流光速度",
        "type": "slider",
        "default": 1,
        "min": 0.4,
        "max": 3,
        "step": 0.1,
        "desc": "流光动画速度。",
        "publicKey": "auroraSpeed",
        "publicLabel": "流光速度",
        "description": "流光动画速度。"
      },
      {
        "key": "align",
        "label": "对齐",
        "type": "enum",
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
        "desc": "金句整体的对齐方式",
        "publicKey": "align",
        "publicLabel": "对齐",
        "description": "金句整体的对齐方式"
      },
      {
        "key": "showMark",
        "label": "引号装饰",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏大号装饰引号",
        "publicKey": "showMark",
        "publicLabel": "引号装饰",
        "description": "显示/隐藏大号装饰引号"
      },
      {
        "key": "showEmphasis",
        "label": "短语强调",
        "type": "toggle",
        "default": true,
        "desc": "将关键短语处理为发光强调",
        "publicKey": "showEmphasis",
        "publicLabel": "短语强调",
        "description": "将关键短语处理为发光强调"
      },
      {
        "key": "showRule",
        "label": "强调分隔线",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏落款上方的强调短线",
        "publicKey": "showRule",
        "publicLabel": "强调分隔线",
        "description": "显示/隐藏落款上方的强调短线"
      },
      {
        "key": "showAttribution",
        "label": "落款",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏底部署名",
        "publicKey": "showAttribution",
        "publicLabel": "落款",
        "description": "显示/隐藏底部署名"
      }
    ],
    "defaultProps": {
      "kicker": "INSIGHT · 结语",
      "quote": "AI 融资盛宴仍在继续，但音乐节奏正在变化。资本的下一阶段，将从",
      "quoteEm": "赌叙事转向看兑现",
      "quoteTail": "——能把技术转化为可持续收入的公司，才能在退潮后留在牌桌上。",
      "attribution": "2024 美国大额融资 AI 公司调研报告 · 结语",
      "align": "left",
      "showMark": true,
      "showEmphasis": true,
      "showAttribution": true,
      "showRule": true,
      "scheme": "green",
      "emphasis": "ticket",
      "breath": 55,
      "magnet": true,
      "aurora": true,
      "auroraSpeed": 1,
      "index": "46 / 73"
    }
  },
  {
    "key": "theme02_page048",
    "themeKey": "theme02",
    "pageNumber": 48,
    "layout": "THEME02-048",
    "slot": "stacked",
    "label": "资本结构 · Stacked Bar",
    "bgClass": "",
    "controls": [
      {
        "key": "scheme",
        "label": "配色方案",
        "type": "enum",
        "default": "green",
        "options": [
          [
            "green",
            "霓虹绿"
          ],
          [
            "violet",
            "炫光紫"
          ]
        ],
        "desc": "切换整页炫光配色。",
        "publicKey": "scheme",
        "publicLabel": "配色方案",
        "description": "切换整页炫光配色。"
      },
      {
        "key": "emphasis",
        "label": "强调卡片",
        "type": "enum",
        "default": "ticket",
        "options": [
          [
            "default",
            "默认发光"
          ],
          [
            "ticket",
            "炫光票卡"
          ]
        ],
        "desc": "切换焦点卡片的发光质感。",
        "publicKey": "emphasis",
        "publicLabel": "强调卡片",
        "description": "切换焦点卡片的发光质感。"
      },
      {
        "key": "breath",
        "label": "内光呼吸感",
        "type": "slider",
        "default": 55,
        "min": 0,
        "max": 100,
        "step": 1,
        "desc": "炫光票卡模式下的内光呼吸强度。",
        "publicKey": "breath",
        "publicLabel": "内光呼吸感",
        "description": "炫光票卡模式下的内光呼吸强度。"
      },
      {
        "key": "magnet",
        "label": "磁吸悬停",
        "type": "toggle",
        "default": true,
        "desc": "焦点卡片跟随指针产生轻微位移和倾斜。",
        "publicKey": "magnet",
        "publicLabel": "磁吸悬停",
        "description": "焦点卡片跟随指针产生轻微位移和倾斜。"
      },
      {
        "key": "aurora",
        "label": "渐变流光",
        "type": "toggle",
        "default": true,
        "desc": "开启标题、数字和图表重点元素的流光渐变。",
        "publicKey": "aurora",
        "publicLabel": "渐变流光",
        "description": "开启标题、数字和图表重点元素的流光渐变。"
      },
      {
        "key": "auroraSpeed",
        "label": "流光速度",
        "type": "slider",
        "default": 1,
        "min": 0.4,
        "max": 3,
        "step": 0.1,
        "desc": "流光动画速度。",
        "publicKey": "auroraSpeed",
        "publicLabel": "流光速度",
        "description": "流光动画速度。"
      },
      {
        "key": "chartType",
        "label": "图表形态",
        "type": "enum",
        "default": "area",
        "options": [
          {
            "value": "area",
            "label": "堆叠面积"
          },
          {
            "value": "stacked",
            "label": "堆叠柱"
          },
          {
            "value": "norm",
            "label": "百分比"
          },
          {
            "value": "grouped",
            "label": "分组柱"
          }
        ],
        "desc": "堆叠面积(Bklit 风) / 堆叠柱 / 100% 占比 / 同组分项并列",
        "publicKey": "chartType",
        "publicLabel": "图表形态",
        "description": "堆叠面积(Bklit 风) / 堆叠柱 / 100% 占比 / 同组分项并列"
      },
      {
        "key": "groupCount",
        "label": "组数",
        "type": "number",
        "default": 4,
        "min": 2,
        "step": 1,
        "desc": "展示的数据点（年份/期）数量",
        "publicKey": "groupCount",
        "publicLabel": "组数",
        "description": "展示的数据点（年份/期）数量"
      },
      {
        "key": "focusEnabled",
        "label": "重点强调",
        "type": "toggle",
        "default": true,
        "desc": "是否强调某一组（面积图显示浮窗 + 引导线）",
        "publicKey": "focusEnabled",
        "publicLabel": "重点强调",
        "description": "是否强调某一组（面积图显示浮窗 + 引导线）"
      },
      {
        "key": "focusIndex",
        "label": "强调项",
        "type": "number",
        "default": 3,
        "min": 0,
        "step": 1,
        "desc": "被强调数据点的序号",
        "publicKey": "focusIndex",
        "publicLabel": "强调项",
        "description": "被强调数据点的序号"
      },
      {
        "key": "showTotals",
        "label": "合计标签",
        "type": "toggle",
        "default": true,
        "desc": "各组合计数值标签显隐",
        "publicKey": "showValueLabels",
        "publicLabel": "合计标签",
        "description": "各组合计数值标签显隐"
      },
      {
        "key": "showGrid",
        "label": "网格刻度",
        "type": "toggle",
        "default": true,
        "desc": "横向网格与纵轴刻度显隐",
        "publicKey": "showGrid",
        "publicLabel": "网格刻度",
        "description": "横向网格与纵轴刻度显隐"
      },
      {
        "key": "showMarkers",
        "label": "数据点标记",
        "type": "toggle",
        "default": true,
        "desc": "面积图数据点的环形标记显隐",
        "publicKey": "showMarkers",
        "publicLabel": "数据点标记",
        "description": "面积图数据点的环形标记显隐"
      },
      {
        "key": "showLegend",
        "label": "图例",
        "type": "toggle",
        "default": true,
        "desc": "分项图例显隐",
        "publicKey": "showLegend",
        "publicLabel": "图例",
        "description": "分项图例显隐"
      }
    ],
    "defaultProps": {
      "kicker": "COMPOSITION · 资本结构演变",
      "title": "一年比一年厚的资本堆叠 ",
      "titleEm": "阶段构成",
      "lead": "把每年的美国 AI 风险投资按融资阶段拆开堆叠——成长期始终是最厚的一层，2024 年早期与成长期共同把总盘推向新高。",
      "series": [
        {
          "key": "seed",
          "label": "种子 / 天使"
        },
        {
          "key": "early",
          "label": "早期 A·B 轮"
        },
        {
          "key": "growth",
          "label": "成长期 C+"
        },
        {
          "key": "late",
          "label": "后期 / Pre-IPO"
        }
      ],
      "groups": [
        {
          "label": "2021",
          "values": {
            "seed": 8,
            "early": 22,
            "growth": 30,
            "late": 18
          }
        },
        {
          "label": "2022",
          "values": {
            "seed": 6,
            "early": 18,
            "growth": 24,
            "late": 12
          }
        },
        {
          "label": "2023",
          "values": {
            "seed": 9,
            "early": 26,
            "growth": 34,
            "late": 20
          }
        },
        {
          "label": "2024",
          "values": {
            "seed": 12,
            "early": 34,
            "growth": 41,
            "late": 10
          }
        }
      ],
      "groupCount": 4,
      "chartType": "area",
      "focusEnabled": true,
      "focusIndex": 3,
      "showTotals": true,
      "showGrid": true,
      "showMarkers": true,
      "showLegend": true,
      "valueSuffix": "B",
      "scheme": "green",
      "emphasis": "ticket",
      "breath": 55,
      "magnet": true,
      "aurora": true,
      "auroraSpeed": 1,
      "index": "47 / 73"
    }
  },
  {
    "key": "theme02_page049",
    "themeKey": "theme02",
    "pageNumber": 49,
    "layout": "THEME02-049",
    "slot": "mosaic",
    "label": "案例拼贴 · Mosaic",
    "bgClass": "",
    "controls": [
      {
        "key": "scheme",
        "label": "配色方案",
        "type": "enum",
        "default": "green",
        "options": [
          [
            "green",
            "霓虹绿"
          ],
          [
            "violet",
            "炫光紫"
          ]
        ],
        "desc": "切换整页炫光配色。",
        "publicKey": "scheme",
        "publicLabel": "配色方案",
        "description": "切换整页炫光配色。"
      },
      {
        "key": "emphasis",
        "label": "强调卡片",
        "type": "enum",
        "default": "ticket",
        "options": [
          [
            "default",
            "默认发光"
          ],
          [
            "ticket",
            "炫光票卡"
          ]
        ],
        "desc": "切换焦点卡片的发光质感。",
        "publicKey": "emphasis",
        "publicLabel": "强调卡片",
        "description": "切换焦点卡片的发光质感。"
      },
      {
        "key": "breath",
        "label": "内光呼吸感",
        "type": "slider",
        "default": 55,
        "min": 0,
        "max": 100,
        "step": 1,
        "desc": "炫光票卡模式下的内光呼吸强度。",
        "publicKey": "breath",
        "publicLabel": "内光呼吸感",
        "description": "炫光票卡模式下的内光呼吸强度。"
      },
      {
        "key": "magnet",
        "label": "磁吸悬停",
        "type": "toggle",
        "default": true,
        "desc": "焦点卡片跟随指针产生轻微位移和倾斜。",
        "publicKey": "magnet",
        "publicLabel": "磁吸悬停",
        "description": "焦点卡片跟随指针产生轻微位移和倾斜。"
      },
      {
        "key": "aurora",
        "label": "渐变流光",
        "type": "toggle",
        "default": true,
        "desc": "开启标题、数字和图表重点元素的流光渐变。",
        "publicKey": "aurora",
        "publicLabel": "渐变流光",
        "description": "开启标题、数字和图表重点元素的流光渐变。"
      },
      {
        "key": "auroraSpeed",
        "label": "流光速度",
        "type": "slider",
        "default": 1,
        "min": 0.4,
        "max": 3,
        "step": 0.1,
        "desc": "流光动画速度。",
        "publicKey": "auroraSpeed",
        "publicLabel": "流光速度",
        "description": "流光动画速度。"
      },
      {
        "key": "imageCount",
        "label": "图片数量",
        "type": "number",
        "default": 5,
        "min": 0,
        "max": 5,
        "step": 1,
        "desc": "拼贴图片槽位数量（0 = 纯文字浮层）",
        "publicKey": "imageCount",
        "publicLabel": "图片数量",
        "description": "拼贴图片槽位数量（0 = 纯文字浮层）"
      },
      {
        "key": "titlePlacement",
        "label": "标题位置",
        "type": "enum",
        "default": "tl",
        "options": [
          {
            "value": "tl",
            "label": "左上"
          },
          {
            "value": "bl",
            "label": "左下"
          },
          {
            "value": "tr",
            "label": "右上"
          }
        ],
        "desc": "标题浮层贴靠的角落",
        "publicKey": "titlePlacement",
        "publicLabel": "标题位置",
        "description": "标题浮层贴靠的角落"
      },
      {
        "key": "overlayStyle",
        "label": "浮层样式",
        "type": "enum",
        "default": "panel",
        "options": [
          {
            "value": "panel",
            "label": "磨砂卡片"
          },
          {
            "value": "plain",
            "label": "直接压字"
          }
        ],
        "desc": "标题浮层是否带磨砂卡片底",
        "publicKey": "overlayStyle",
        "publicLabel": "浮层样式",
        "description": "标题浮层是否带磨砂卡片底"
      },
      {
        "key": "focusEnabled",
        "label": "重点强调",
        "type": "toggle",
        "default": false,
        "desc": "是否高亮其中一张图片",
        "publicKey": "focusEnabled",
        "publicLabel": "重点强调",
        "description": "是否高亮其中一张图片"
      },
      {
        "key": "focusIndex",
        "label": "强调项",
        "type": "number",
        "default": 0,
        "min": 0,
        "step": 1,
        "desc": "被强调图片的序号",
        "publicKey": "focusIndex",
        "publicLabel": "强调项",
        "description": "被强调图片的序号"
      },
      {
        "key": "showCaptions",
        "label": "图注",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏图片上的图注",
        "publicKey": "showCaptions",
        "publicLabel": "图注",
        "description": "显示/隐藏图片上的图注"
      }
    ],
    "defaultProps": {
      "kicker": "GALLERY · 案例拼贴",
      "title": "资本聚光下的 ",
      "titleEm": "面孔与现场",
      "lead": "模型、芯片、机器人、数据中心——把这一年最被资本追逐的现场拼在同一张版面里。",
      "imageCount": 5,
      "captions": [
        "大模型发布现场",
        "GPU 算力集群",
        "自动驾驶路测",
        "具身智能样机",
        "数据中心机房"
      ],
      "focusEnabled": false,
      "focusIndex": 0,
      "showCaptions": true,
      "titlePlacement": "tl",
      "overlayStyle": "panel",
      "images": [],
      "scheme": "green",
      "emphasis": "ticket",
      "breath": 55,
      "magnet": true,
      "aurora": true,
      "auroraSpeed": 1,
      "index": "48 / 73"
    }
  },
  {
    "key": "theme02_page050",
    "themeKey": "theme02",
    "pageNumber": 50,
    "layout": "THEME02-050",
    "slot": "datatable",
    "label": "明细表 · Data Table",
    "bgClass": "",
    "controls": [
      {
        "key": "scheme",
        "label": "配色方案",
        "type": "enum",
        "default": "green",
        "options": [
          [
            "green",
            "霓虹绿"
          ],
          [
            "violet",
            "炫光紫"
          ]
        ],
        "desc": "切换整页炫光配色。",
        "publicKey": "scheme",
        "publicLabel": "配色方案",
        "description": "切换整页炫光配色。"
      },
      {
        "key": "emphasis",
        "label": "强调卡片",
        "type": "enum",
        "default": "ticket",
        "options": [
          [
            "default",
            "默认发光"
          ],
          [
            "ticket",
            "炫光票卡"
          ]
        ],
        "desc": "切换焦点卡片的发光质感。",
        "publicKey": "emphasis",
        "publicLabel": "强调卡片",
        "description": "切换焦点卡片的发光质感。"
      },
      {
        "key": "breath",
        "label": "内光呼吸感",
        "type": "slider",
        "default": 55,
        "min": 0,
        "max": 100,
        "step": 1,
        "desc": "炫光票卡模式下的内光呼吸强度。",
        "publicKey": "breath",
        "publicLabel": "内光呼吸感",
        "description": "炫光票卡模式下的内光呼吸强度。"
      },
      {
        "key": "magnet",
        "label": "磁吸悬停",
        "type": "toggle",
        "default": true,
        "desc": "焦点卡片跟随指针产生轻微位移和倾斜。",
        "publicKey": "magnet",
        "publicLabel": "磁吸悬停",
        "description": "焦点卡片跟随指针产生轻微位移和倾斜。"
      },
      {
        "key": "aurora",
        "label": "渐变流光",
        "type": "toggle",
        "default": true,
        "desc": "开启标题、数字和图表重点元素的流光渐变。",
        "publicKey": "aurora",
        "publicLabel": "渐变流光",
        "description": "开启标题、数字和图表重点元素的流光渐变。"
      },
      {
        "key": "auroraSpeed",
        "label": "流光速度",
        "type": "slider",
        "default": 1,
        "min": 0.4,
        "max": 3,
        "step": 0.1,
        "desc": "流光动画速度。",
        "publicKey": "auroraSpeed",
        "publicLabel": "流光速度",
        "description": "流光动画速度。"
      },
      {
        "key": "rowCount",
        "label": "行数",
        "type": "number",
        "default": 6,
        "min": 3,
        "step": 1,
        "desc": "展示的数据行数量",
        "publicKey": "rowCount",
        "publicLabel": "行数",
        "description": "展示的数据行数量"
      },
      {
        "key": "showRank",
        "label": "序号列",
        "type": "toggle",
        "default": true,
        "desc": "左侧排名序号列显隐",
        "publicKey": "showRank",
        "publicLabel": "序号列",
        "description": "左侧排名序号列显隐"
      },
      {
        "key": "zebra",
        "label": "斑马纹",
        "type": "toggle",
        "default": true,
        "desc": "隔行底色显隐",
        "publicKey": "zebra",
        "publicLabel": "斑马纹",
        "description": "隔行底色显隐"
      },
      {
        "key": "focusEnabled",
        "label": "重点强调",
        "type": "toggle",
        "default": true,
        "desc": "是否辉光强调某一行",
        "publicKey": "focusEnabled",
        "publicLabel": "重点强调",
        "description": "是否辉光强调某一行"
      },
      {
        "key": "focusIndex",
        "label": "强调项",
        "type": "number",
        "default": 0,
        "min": 0,
        "step": 1,
        "desc": "被强调行的序号",
        "publicKey": "focusIndex",
        "publicLabel": "强调项",
        "description": "被强调行的序号"
      },
      {
        "key": "highlightCol",
        "label": "强调列",
        "type": "number",
        "default": 3,
        "min": 0,
        "step": 1,
        "desc": "accent 着色的列序号（用于突出关键指标列）",
        "publicKey": "highlightCol",
        "publicLabel": "强调列",
        "description": "accent 着色的列序号（用于突出关键指标列）"
      }
    ],
    "defaultProps": {
      "kicker": "LEAGUE TABLE · 头部公司明细",
      "title": "十亿美元俱乐部的 ",
      "titleEm": "入场名单",
      "lead": "2024 年单笔或累计跨过十亿美元门槛的美国 AI 公司——融资额、最新估值与领投方一览。",
      "columns": [
        {
          "key": "company",
          "label": "公司",
          "align": "left"
        },
        {
          "key": "sector",
          "label": "赛道",
          "align": "left"
        },
        {
          "key": "round",
          "label": "轮次",
          "align": "left"
        },
        {
          "key": "raise",
          "label": "融资额",
          "align": "right",
          "unit": "亿$"
        },
        {
          "key": "valuation",
          "label": "估值",
          "align": "right",
          "unit": "亿$"
        },
        {
          "key": "lead",
          "label": "领投方",
          "align": "left"
        }
      ],
      "rows": [
        {
          "company": "OpenAI",
          "sector": "通用大模型",
          "round": "后期",
          "raise": "66",
          "valuation": "1570",
          "lead": "Thrive Capital"
        },
        {
          "company": "xAI",
          "sector": "通用大模型",
          "round": "B/C",
          "raise": "120",
          "valuation": "500",
          "lead": "Sequoia 等"
        },
        {
          "company": "Anthropic",
          "sector": "安全对齐",
          "round": "战略",
          "raise": "40",
          "valuation": "180",
          "lead": "Amazon"
        },
        {
          "company": "Databricks",
          "sector": "数据平台",
          "round": "J 轮",
          "raise": "100",
          "valuation": "620",
          "lead": "Thrive Capital"
        },
        {
          "company": "Waymo",
          "sector": "自动驾驶",
          "round": "战略",
          "raise": "56",
          "valuation": "450",
          "lead": "Alphabet"
        },
        {
          "company": "CoreWeave",
          "sector": "算力云",
          "round": "债+股",
          "raise": "110",
          "valuation": "190",
          "lead": "Blackstone"
        }
      ],
      "rowCount": 6,
      "showRank": true,
      "zebra": true,
      "focusEnabled": true,
      "focusIndex": 0,
      "highlightCol": 3,
      "scheme": "green",
      "emphasis": "ticket",
      "breath": 55,
      "magnet": true,
      "aurora": true,
      "auroraSpeed": 1,
      "index": "49 / 73"
    }
  },
  {
    "key": "theme02_page051",
    "themeKey": "theme02",
    "pageNumber": 51,
    "layout": "THEME02-051",
    "slot": "versus",
    "label": "多空对照 · Versus",
    "bgClass": "",
    "controls": [
      {
        "key": "scheme",
        "label": "配色方案",
        "type": "enum",
        "default": "green",
        "options": [
          [
            "green",
            "霓虹绿"
          ],
          [
            "violet",
            "炫光紫"
          ]
        ],
        "desc": "切换整页炫光配色。",
        "publicKey": "scheme",
        "publicLabel": "配色方案",
        "description": "切换整页炫光配色。"
      },
      {
        "key": "emphasis",
        "label": "强调卡片",
        "type": "enum",
        "default": "ticket",
        "options": [
          [
            "default",
            "默认发光"
          ],
          [
            "ticket",
            "炫光票卡"
          ]
        ],
        "desc": "切换焦点卡片的发光质感。",
        "publicKey": "emphasis",
        "publicLabel": "强调卡片",
        "description": "切换焦点卡片的发光质感。"
      },
      {
        "key": "breath",
        "label": "内光呼吸感",
        "type": "slider",
        "default": 55,
        "min": 0,
        "max": 100,
        "step": 1,
        "desc": "炫光票卡模式下的内光呼吸强度。",
        "publicKey": "breath",
        "publicLabel": "内光呼吸感",
        "description": "炫光票卡模式下的内光呼吸强度。"
      },
      {
        "key": "magnet",
        "label": "磁吸悬停",
        "type": "toggle",
        "default": true,
        "desc": "焦点卡片跟随指针产生轻微位移和倾斜。",
        "publicKey": "magnet",
        "publicLabel": "磁吸悬停",
        "description": "焦点卡片跟随指针产生轻微位移和倾斜。"
      },
      {
        "key": "aurora",
        "label": "渐变流光",
        "type": "toggle",
        "default": true,
        "desc": "开启标题、数字和图表重点元素的流光渐变。",
        "publicKey": "aurora",
        "publicLabel": "渐变流光",
        "description": "开启标题、数字和图表重点元素的流光渐变。"
      },
      {
        "key": "auroraSpeed",
        "label": "流光速度",
        "type": "slider",
        "default": 1,
        "min": 0.4,
        "max": 3,
        "step": 0.1,
        "desc": "流光动画速度。",
        "publicKey": "auroraSpeed",
        "publicLabel": "流光速度",
        "description": "流光动画速度。"
      },
      {
        "key": "pointCount",
        "label": "每栏论点数",
        "type": "number",
        "default": 3,
        "min": 2,
        "step": 1,
        "desc": "每栏展示的论点条数",
        "publicKey": "pointCount",
        "publicLabel": "每栏论点数",
        "description": "每栏展示的论点条数"
      },
      {
        "key": "showStat",
        "label": "关键数字",
        "type": "toggle",
        "default": true,
        "desc": "每栏顶部关键数字显隐",
        "publicKey": "showStat",
        "publicLabel": "关键数字",
        "description": "每栏顶部关键数字显隐"
      },
      {
        "key": "showVs",
        "label": "中央 VS",
        "type": "toggle",
        "default": true,
        "desc": "中央 VS 徽标显隐",
        "publicKey": "showVs",
        "publicLabel": "中央 VS",
        "description": "中央 VS 徽标显隐"
      },
      {
        "key": "focusSide",
        "label": "重点强调",
        "type": "enum",
        "default": "none",
        "options": [
          {
            "value": "none",
            "label": "不强调"
          },
          {
            "value": "left",
            "label": "强调左栏"
          },
          {
            "value": "right",
            "label": "强调右栏"
          }
        ],
        "desc": "辉光强调某一栏，另一栏自动暗淡",
        "publicKey": "focusSide",
        "publicLabel": "重点强调",
        "description": "辉光强调某一栏，另一栏自动暗淡"
      }
    ],
    "defaultProps": {
      "kicker": "BULL vs BEAR · 多空对照",
      "title": "同一张资本牌桌上的 ",
      "titleEm": "两种声音",
      "leftTag": "看多 · 顺风",
      "rightTag": "看空 · 逆风",
      "leftPoints": [
        "算力与模型能力仍在快速攀升，头部公司护城河持续加宽",
        "企业级 AI 落地加速，付费意愿与续费率双双走高",
        "一级市场资金充裕，超大额融资为头部续航"
      ],
      "rightPoints": [
        "估值透支未来数年增长，回报周期被显著拉长",
        "算力成本与能耗高企，单位经济模型尚未跑通",
        "资本高度集中于少数玩家，长尾公司融资骤冷"
      ],
      "pointCount": 3,
      "leftStat": {
        "value": "63.9",
        "unit": "%",
        "caption": "资金流向头部湾区"
      },
      "rightStat": {
        "value": "≈10",
        "unit": "亿/笔",
        "caption": "平均单笔估值门槛"
      },
      "showStat": true,
      "showVs": true,
      "focusSide": "none",
      "scheme": "green",
      "emphasis": "ticket",
      "breath": 55,
      "magnet": true,
      "aurora": true,
      "auroraSpeed": 1,
      "index": "50 / 73"
    }
  },
  {
    "key": "theme02_page052",
    "themeKey": "theme02",
    "pageNumber": 52,
    "layout": "THEME02-052",
    "slot": "profile",
    "label": "公司档案 · Profile",
    "bgClass": "",
    "controls": [
      {
        "key": "scheme",
        "label": "配色方案",
        "type": "enum",
        "default": "green",
        "options": [
          [
            "green",
            "霓虹绿"
          ],
          [
            "violet",
            "炫光紫"
          ]
        ],
        "desc": "切换整页炫光配色。",
        "publicKey": "scheme",
        "publicLabel": "配色方案",
        "description": "切换整页炫光配色。"
      },
      {
        "key": "emphasis",
        "label": "强调卡片",
        "type": "enum",
        "default": "ticket",
        "options": [
          [
            "default",
            "默认发光"
          ],
          [
            "ticket",
            "炫光票卡"
          ]
        ],
        "desc": "切换焦点卡片的发光质感。",
        "publicKey": "emphasis",
        "publicLabel": "强调卡片",
        "description": "切换焦点卡片的发光质感。"
      },
      {
        "key": "breath",
        "label": "内光呼吸感",
        "type": "slider",
        "default": 55,
        "min": 0,
        "max": 100,
        "step": 1,
        "desc": "炫光票卡模式下的内光呼吸强度。",
        "publicKey": "breath",
        "publicLabel": "内光呼吸感",
        "description": "炫光票卡模式下的内光呼吸强度。"
      },
      {
        "key": "magnet",
        "label": "磁吸悬停",
        "type": "toggle",
        "default": true,
        "desc": "焦点卡片跟随指针产生轻微位移和倾斜。",
        "publicKey": "magnet",
        "publicLabel": "磁吸悬停",
        "description": "焦点卡片跟随指针产生轻微位移和倾斜。"
      },
      {
        "key": "aurora",
        "label": "渐变流光",
        "type": "toggle",
        "default": true,
        "desc": "开启标题、数字和图表重点元素的流光渐变。",
        "publicKey": "aurora",
        "publicLabel": "渐变流光",
        "description": "开启标题、数字和图表重点元素的流光渐变。"
      },
      {
        "key": "auroraSpeed",
        "label": "流光速度",
        "type": "slider",
        "default": 1,
        "min": 0.4,
        "max": 3,
        "step": 0.1,
        "desc": "流光动画速度。",
        "publicKey": "auroraSpeed",
        "publicLabel": "流光速度",
        "description": "流光动画速度。"
      },
      {
        "key": "imageCount",
        "label": "图片数量",
        "type": "number",
        "default": 1,
        "min": 0,
        "max": 2,
        "step": 1,
        "desc": "档案配图槽位数量（0 = 纯文字版式）",
        "publicKey": "imageCount",
        "publicLabel": "图片数量",
        "description": "档案配图槽位数量（0 = 纯文字版式）"
      },
      {
        "key": "imageSide",
        "label": "图片位置",
        "type": "enum",
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
        "desc": "配图列位于左侧或右侧",
        "publicKey": "imageSide",
        "publicLabel": "图片位置",
        "description": "配图列位于左侧或右侧"
      },
      {
        "key": "factCount",
        "label": "档案条目",
        "type": "number",
        "default": 5,
        "min": 2,
        "step": 1,
        "desc": "展示的事实条目数量",
        "publicKey": "itemCount",
        "publicLabel": "档案条目",
        "description": "展示的事实条目数量"
      },
      {
        "key": "showQuote",
        "label": "人物金句",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏底部的人物金句",
        "publicKey": "showQuote",
        "publicLabel": "人物金句",
        "description": "显示/隐藏底部的人物金句"
      },
      {
        "key": "focusEnabled",
        "label": "重点强调",
        "type": "toggle",
        "default": false,
        "desc": "是否高亮其中一张配图",
        "publicKey": "focusEnabled",
        "publicLabel": "重点强调",
        "description": "是否高亮其中一张配图"
      },
      {
        "key": "focusIndex",
        "label": "强调项",
        "type": "number",
        "default": 0,
        "min": 0,
        "step": 1,
        "desc": "被强调配图的序号",
        "publicKey": "focusIndex",
        "publicLabel": "强调项",
        "description": "被强调配图的序号"
      }
    ],
    "defaultProps": {
      "kicker": "CASE · 公司档案",
      "name": "Anthropic ",
      "nameEm": "安全对齐路线",
      "role": "通用大模型 · 从追赶到反超",
      "facts": [
        {
          "label": "成立",
          "value": "2021"
        },
        {
          "label": "最新估值",
          "value": "9650 亿美元"
        },
        {
          "label": "全年累计融资",
          "value": "650 亿美元"
        },
        {
          "label": "融资轮次",
          "value": "Series G → H 三轮"
        },
        {
          "label": "IPO 进度",
          "value": "2026 已递交申请"
        }
      ],
      "factCount": 5,
      "quote": "通过 Constitutional AI 构建可解释、可控的系统，比单纯追求规模更符合长远利益。",
      "quoteBy": "Dario Amodei · 联合创始人 / CEO",
      "tags": [
        "安全对齐",
        "企业信任",
        "云巨头渠道"
      ],
      "imageCount": 1,
      "imageSide": "right",
      "captions": [
        "Anthropic · 公司形象",
        "Claude · 产品界面"
      ],
      "focusEnabled": false,
      "focusIndex": 0,
      "showQuote": true,
      "images": [],
      "scheme": "green",
      "emphasis": "ticket",
      "breath": 55,
      "magnet": true,
      "aurora": true,
      "auroraSpeed": 1,
      "index": "51 / 73"
    }
  },
  {
    "key": "theme02_page053",
    "themeKey": "theme02",
    "pageNumber": 53,
    "layout": "THEME02-053",
    "slot": "storyboard",
    "label": "进程图带 · Storyboard",
    "bgClass": "",
    "controls": [
      {
        "key": "scheme",
        "label": "配色方案",
        "type": "enum",
        "default": "green",
        "options": [
          [
            "green",
            "霓虹绿"
          ],
          [
            "violet",
            "炫光紫"
          ]
        ],
        "desc": "切换整页炫光配色。",
        "publicKey": "scheme",
        "publicLabel": "配色方案",
        "description": "切换整页炫光配色。"
      },
      {
        "key": "emphasis",
        "label": "强调卡片",
        "type": "enum",
        "default": "ticket",
        "options": [
          [
            "default",
            "默认发光"
          ],
          [
            "ticket",
            "炫光票卡"
          ]
        ],
        "desc": "切换焦点卡片的发光质感。",
        "publicKey": "emphasis",
        "publicLabel": "强调卡片",
        "description": "切换焦点卡片的发光质感。"
      },
      {
        "key": "breath",
        "label": "内光呼吸感",
        "type": "slider",
        "default": 55,
        "min": 0,
        "max": 100,
        "step": 1,
        "desc": "炫光票卡模式下的内光呼吸强度。",
        "publicKey": "breath",
        "publicLabel": "内光呼吸感",
        "description": "炫光票卡模式下的内光呼吸强度。"
      },
      {
        "key": "magnet",
        "label": "磁吸悬停",
        "type": "toggle",
        "default": true,
        "desc": "焦点卡片跟随指针产生轻微位移和倾斜。",
        "publicKey": "magnet",
        "publicLabel": "磁吸悬停",
        "description": "焦点卡片跟随指针产生轻微位移和倾斜。"
      },
      {
        "key": "aurora",
        "label": "渐变流光",
        "type": "toggle",
        "default": true,
        "desc": "开启标题、数字和图表重点元素的流光渐变。",
        "publicKey": "aurora",
        "publicLabel": "渐变流光",
        "description": "开启标题、数字和图表重点元素的流光渐变。"
      },
      {
        "key": "auroraSpeed",
        "label": "流光速度",
        "type": "slider",
        "default": 1,
        "min": 0.4,
        "max": 3,
        "step": 0.1,
        "desc": "流光动画速度。",
        "publicKey": "auroraSpeed",
        "publicLabel": "流光速度",
        "description": "流光动画速度。"
      },
      {
        "key": "stepCount",
        "label": "步骤数量",
        "type": "number",
        "default": 4,
        "min": 2,
        "step": 1,
        "desc": "进程带中的步骤数量",
        "publicKey": "stepCount",
        "publicLabel": "步骤数量",
        "description": "进程带中的步骤数量"
      },
      {
        "key": "imageCount",
        "label": "图片数量",
        "type": "number",
        "default": 4,
        "min": 0,
        "step": 1,
        "desc": "配图槽位数量（自前向后填充；0 = 纯文字步骤）",
        "publicKey": "imageCount",
        "publicLabel": "图片数量",
        "description": "配图槽位数量（自前向后填充；0 = 纯文字步骤）"
      },
      {
        "key": "focusEnabled",
        "label": "重点强调",
        "type": "toggle",
        "default": true,
        "desc": "是否高亮其中一个步骤",
        "publicKey": "focusEnabled",
        "publicLabel": "重点强调",
        "description": "是否高亮其中一个步骤"
      },
      {
        "key": "focusIndex",
        "label": "强调项",
        "type": "number",
        "default": 2,
        "min": 0,
        "step": 1,
        "desc": "被强调步骤的序号",
        "publicKey": "focusIndex",
        "publicLabel": "强调项",
        "description": "被强调步骤的序号"
      },
      {
        "key": "showLead",
        "label": "引言",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏标题下方的引言",
        "publicKey": "showLead",
        "publicLabel": "引言",
        "description": "显示/隐藏标题下方的引言"
      }
    ],
    "defaultProps": {
      "kicker": "CASE · 融资进程",
      "title": "Anthropic 一年内 ",
      "titleEm": "连续三轮跃迁",
      "lead": "2024 年 5 月、8 月、11 月连续完成大额融资，估值由 600 亿一路抬升至 9650 亿美元，并于 2026 年递交 IPO 申请。",
      "steps": [
        {
          "tag": "2024 · 05",
          "title": "Series G",
          "note": "融资 280 亿 · 估值 600 亿美元"
        },
        {
          "tag": "2024 · 08",
          "title": "Series H 首轮",
          "note": "融资 180 亿 · 估值 830 亿美元"
        },
        {
          "tag": "2024 · 11",
          "title": "Series H 扩轮",
          "note": "融资 190 亿 · 估值 9650 亿美元"
        },
        {
          "tag": "2026 · 06",
          "title": "递交 IPO",
          "note": "已提交申请 · 预计年内上市"
        }
      ],
      "stepCount": 4,
      "imageCount": 4,
      "focusEnabled": true,
      "focusIndex": 2,
      "showLead": true,
      "images": [],
      "scheme": "green",
      "emphasis": "ticket",
      "breath": 55,
      "magnet": true,
      "aurora": true,
      "auroraSpeed": 1,
      "index": "52 / 73"
    }
  },
  {
    "key": "theme02_page054",
    "themeKey": "theme02",
    "pageNumber": 54,
    "layout": "THEME02-054",
    "slot": "dumbbell",
    "label": "差距图 · Dumbbell",
    "bgClass": "",
    "controls": [
      {
        "key": "scheme",
        "label": "配色方案",
        "type": "enum",
        "default": "green",
        "options": [
          [
            "green",
            "霓虹绿"
          ],
          [
            "violet",
            "炫光紫"
          ]
        ],
        "desc": "切换整页炫光配色。",
        "publicKey": "scheme",
        "publicLabel": "配色方案",
        "description": "切换整页炫光配色。"
      },
      {
        "key": "emphasis",
        "label": "强调卡片",
        "type": "enum",
        "default": "ticket",
        "options": [
          [
            "default",
            "默认发光"
          ],
          [
            "ticket",
            "炫光票卡"
          ]
        ],
        "desc": "切换焦点卡片的发光质感。",
        "publicKey": "emphasis",
        "publicLabel": "强调卡片",
        "description": "切换焦点卡片的发光质感。"
      },
      {
        "key": "breath",
        "label": "内光呼吸感",
        "type": "slider",
        "default": 55,
        "min": 0,
        "max": 100,
        "step": 1,
        "desc": "炫光票卡模式下的内光呼吸强度。",
        "publicKey": "breath",
        "publicLabel": "内光呼吸感",
        "description": "炫光票卡模式下的内光呼吸强度。"
      },
      {
        "key": "magnet",
        "label": "磁吸悬停",
        "type": "toggle",
        "default": true,
        "desc": "焦点卡片跟随指针产生轻微位移和倾斜。",
        "publicKey": "magnet",
        "publicLabel": "磁吸悬停",
        "description": "焦点卡片跟随指针产生轻微位移和倾斜。"
      },
      {
        "key": "aurora",
        "label": "渐变流光",
        "type": "toggle",
        "default": true,
        "desc": "开启标题、数字和图表重点元素的流光渐变。",
        "publicKey": "aurora",
        "publicLabel": "渐变流光",
        "description": "开启标题、数字和图表重点元素的流光渐变。"
      },
      {
        "key": "auroraSpeed",
        "label": "流光速度",
        "type": "slider",
        "default": 1,
        "min": 0.4,
        "max": 3,
        "step": 0.1,
        "desc": "流光动画速度。",
        "publicKey": "auroraSpeed",
        "publicLabel": "流光速度",
        "description": "流光动画速度。"
      },
      {
        "key": "sortBy",
        "label": "排序方式",
        "type": "enum",
        "default": "to",
        "options": [
          {
            "value": "none",
            "label": "默认"
          },
          {
            "value": "to",
            "label": "终值"
          },
          {
            "value": "delta",
            "label": "增幅"
          }
        ],
        "desc": "行的排序依据",
        "publicKey": "sortBy",
        "publicLabel": "排序方式",
        "description": "行的排序依据"
      },
      {
        "key": "rowCount",
        "label": "行数",
        "type": "number",
        "default": 5,
        "min": 2,
        "step": 1,
        "desc": "展示的对比行数量",
        "publicKey": "rowCount",
        "publicLabel": "行数",
        "description": "展示的对比行数量"
      },
      {
        "key": "focusEnabled",
        "label": "重点强调",
        "type": "toggle",
        "default": true,
        "desc": "是否高亮其中一行",
        "publicKey": "focusEnabled",
        "publicLabel": "重点强调",
        "description": "是否高亮其中一行"
      },
      {
        "key": "focusIndex",
        "label": "强调项",
        "type": "number",
        "default": 0,
        "min": 0,
        "step": 1,
        "desc": "被强调行的序号（按当前排序）",
        "publicKey": "focusIndex",
        "publicLabel": "强调项",
        "description": "被强调行的序号（按当前排序）"
      },
      {
        "key": "showDelta",
        "label": "增幅标签",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏每行末尾的 Δ 增幅",
        "publicKey": "showDelta",
        "publicLabel": "增幅标签",
        "description": "显示/隐藏每行末尾的 Δ 增幅"
      },
      {
        "key": "showLegend",
        "label": "图例",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏起止图例",
        "publicKey": "showLegend",
        "publicLabel": "图例",
        "description": "显示/隐藏起止图例"
      },
      {
        "key": "showAnnotation",
        "label": "解读文案",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏底部的趋势解读",
        "publicKey": "showAnnotation",
        "publicLabel": "解读文案",
        "description": "显示/隐藏底部的趋势解读"
      }
    ],
    "defaultProps": {
      "kicker": "MARKET · 赛道增长",
      "title": "各赛道融资额 ",
      "titleEm": "一年翻倍",
      "data": [
        {
          "label": "通用大模型",
          "from": 210,
          "to": 420
        },
        {
          "label": "垂直应用",
          "from": 120,
          "to": 245
        },
        {
          "label": "AI 基础设施",
          "from": 95,
          "to": 158
        },
        {
          "label": "AI 芯片",
          "from": 60,
          "to": 97
        },
        {
          "label": "其他（工具 / 安全）",
          "from": 38,
          "to": 50
        }
      ],
      "rowCount": 5,
      "valueSuffix": "亿",
      "fromLabel": "2023",
      "toLabel": "2024",
      "sortBy": "to",
      "focusEnabled": true,
      "focusIndex": 0,
      "showDelta": true,
      "showLegend": true,
      "showAnnotation": true,
      "annotation": "通用大模型一年内融资规模翻倍并拉开身位，垂直应用与基础设施同步放量，资本向上游与头部赛道集中的趋势进一步强化。",
      "scheme": "green",
      "emphasis": "ticket",
      "breath": 55,
      "magnet": true,
      "aurora": true,
      "auroraSpeed": 1,
      "index": "53 / 73"
    }
  },
  {
    "key": "theme02_page055",
    "themeKey": "theme02",
    "pageNumber": 55,
    "layout": "THEME02-055",
    "slot": "manifesto",
    "label": "结论主张 · Manifesto",
    "bgClass": "",
    "controls": [
      {
        "key": "scheme",
        "label": "配色方案",
        "type": "enum",
        "default": "green",
        "options": [
          [
            "green",
            "霓虹绿"
          ],
          [
            "violet",
            "炫光紫"
          ]
        ],
        "desc": "切换整页炫光配色。",
        "publicKey": "scheme",
        "publicLabel": "配色方案",
        "description": "切换整页炫光配色。"
      },
      {
        "key": "emphasis",
        "label": "强调卡片",
        "type": "enum",
        "default": "ticket",
        "options": [
          [
            "default",
            "默认发光"
          ],
          [
            "ticket",
            "炫光票卡"
          ]
        ],
        "desc": "切换焦点卡片的发光质感。",
        "publicKey": "emphasis",
        "publicLabel": "强调卡片",
        "description": "切换焦点卡片的发光质感。"
      },
      {
        "key": "breath",
        "label": "内光呼吸感",
        "type": "slider",
        "default": 55,
        "min": 0,
        "max": 100,
        "step": 1,
        "desc": "炫光票卡模式下的内光呼吸强度。",
        "publicKey": "breath",
        "publicLabel": "内光呼吸感",
        "description": "炫光票卡模式下的内光呼吸强度。"
      },
      {
        "key": "magnet",
        "label": "磁吸悬停",
        "type": "toggle",
        "default": true,
        "desc": "焦点卡片跟随指针产生轻微位移和倾斜。",
        "publicKey": "magnet",
        "publicLabel": "磁吸悬停",
        "description": "焦点卡片跟随指针产生轻微位移和倾斜。"
      },
      {
        "key": "aurora",
        "label": "渐变流光",
        "type": "toggle",
        "default": true,
        "desc": "开启标题、数字和图表重点元素的流光渐变。",
        "publicKey": "aurora",
        "publicLabel": "渐变流光",
        "description": "开启标题、数字和图表重点元素的流光渐变。"
      },
      {
        "key": "auroraSpeed",
        "label": "流光速度",
        "type": "slider",
        "default": 1,
        "min": 0.4,
        "max": 3,
        "step": 0.1,
        "desc": "流光动画速度。",
        "publicKey": "auroraSpeed",
        "publicLabel": "流光速度",
        "description": "流光动画速度。"
      },
      {
        "key": "claimCount",
        "label": "主张数量",
        "type": "number",
        "default": 3,
        "min": 2,
        "step": 1,
        "desc": "展示的主张条数",
        "publicKey": "claimCount",
        "publicLabel": "主张数量",
        "description": "展示的主张条数"
      },
      {
        "key": "showIndex",
        "label": "编号",
        "type": "toggle",
        "default": true,
        "desc": "为每条主张显示序号",
        "publicKey": "showIndex",
        "publicLabel": "编号",
        "description": "为每条主张显示序号"
      },
      {
        "key": "showDivider",
        "label": "分隔线",
        "type": "toggle",
        "default": true,
        "desc": "在主张之间显示分隔线",
        "publicKey": "showDivider",
        "publicLabel": "分隔线",
        "description": "在主张之间显示分隔线"
      },
      {
        "key": "focusEnabled",
        "label": "重点强调",
        "type": "toggle",
        "default": false,
        "desc": "是否高亮其中一条主张",
        "publicKey": "focusEnabled",
        "publicLabel": "重点强调",
        "description": "是否高亮其中一条主张"
      },
      {
        "key": "focusIndex",
        "label": "强调项",
        "type": "number",
        "default": 0,
        "min": 0,
        "step": 1,
        "desc": "被强调主张的序号",
        "publicKey": "focusIndex",
        "publicLabel": "强调项",
        "description": "被强调主张的序号"
      },
      {
        "key": "showFootnote",
        "label": "收束句",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏底部的收束句",
        "publicKey": "showFootnote",
        "publicLabel": "收束句",
        "description": "显示/隐藏底部的收束句"
      }
    ],
    "defaultProps": {
      "kicker": "CONCLUSION · 三条核心结论",
      "claims": [
        {
          "key": "横向看集中",
          "lead": "资金高度向头部公司、通用大模型与旧金山湾区集中，",
          "em": "「赢家通吃」",
          "tail": "格局确立。"
        },
        {
          "key": "纵向看节奏",
          "lead": "全年呈「前高后稳」，Q2–Q3 达峰后理性回落，市场由",
          "em": "狂热转向分化",
          "tail": "。"
        },
        {
          "key": "结构看分层",
          "lead": "上游确定性最强、中游竞争最激烈，下游潜力最大但",
          "em": "仍需时间兑现",
          "tail": "。"
        }
      ],
      "claimCount": 3,
      "showIndex": true,
      "showDivider": true,
      "focusEnabled": false,
      "focusIndex": 0,
      "footnote": "资本的下一阶段，将从「赌叙事」转向「看兑现」。",
      "showFootnote": true,
      "scheme": "green",
      "emphasis": "ticket",
      "breath": 55,
      "magnet": true,
      "aurora": true,
      "auroraSpeed": 1,
      "index": "54 / 73"
    }
  },
  {
    "key": "theme02_page056",
    "themeKey": "theme02",
    "pageNumber": 56,
    "layout": "THEME02-056",
    "slot": "roadmap",
    "label": "策略路线 · Roadmap",
    "bgClass": "",
    "controls": [
      {
        "key": "scheme",
        "label": "配色方案",
        "type": "enum",
        "default": "green",
        "options": [
          [
            "green",
            "霓虹绿"
          ],
          [
            "violet",
            "炫光紫"
          ]
        ],
        "desc": "切换整页炫光配色。",
        "publicKey": "scheme",
        "publicLabel": "配色方案",
        "description": "切换整页炫光配色。"
      },
      {
        "key": "emphasis",
        "label": "强调卡片",
        "type": "enum",
        "default": "ticket",
        "options": [
          [
            "default",
            "默认发光"
          ],
          [
            "ticket",
            "炫光票卡"
          ]
        ],
        "desc": "切换焦点卡片的发光质感。",
        "publicKey": "emphasis",
        "publicLabel": "强调卡片",
        "description": "切换焦点卡片的发光质感。"
      },
      {
        "key": "breath",
        "label": "内光呼吸感",
        "type": "slider",
        "default": 55,
        "min": 0,
        "max": 100,
        "step": 1,
        "desc": "炫光票卡模式下的内光呼吸强度。",
        "publicKey": "breath",
        "publicLabel": "内光呼吸感",
        "description": "炫光票卡模式下的内光呼吸强度。"
      },
      {
        "key": "magnet",
        "label": "磁吸悬停",
        "type": "toggle",
        "default": true,
        "desc": "焦点卡片跟随指针产生轻微位移和倾斜。",
        "publicKey": "magnet",
        "publicLabel": "磁吸悬停",
        "description": "焦点卡片跟随指针产生轻微位移和倾斜。"
      },
      {
        "key": "aurora",
        "label": "渐变流光",
        "type": "toggle",
        "default": true,
        "desc": "开启标题、数字和图表重点元素的流光渐变。",
        "publicKey": "aurora",
        "publicLabel": "渐变流光",
        "description": "开启标题、数字和图表重点元素的流光渐变。"
      },
      {
        "key": "auroraSpeed",
        "label": "流光速度",
        "type": "slider",
        "default": 1,
        "min": 0.4,
        "max": 3,
        "step": 0.1,
        "desc": "流光动画速度。",
        "publicKey": "auroraSpeed",
        "publicLabel": "流光速度",
        "description": "流光动画速度。"
      },
      {
        "key": "phaseCount",
        "label": "阶段数量",
        "type": "number",
        "default": 3,
        "min": 2,
        "step": 1,
        "desc": "路线图的阶段数量",
        "publicKey": "phaseCount",
        "publicLabel": "阶段数量",
        "description": "路线图的阶段数量"
      },
      {
        "key": "showRail",
        "label": "进度轨道",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏底部的进度轨道与节点",
        "publicKey": "showRail",
        "publicLabel": "进度轨道",
        "description": "显示/隐藏底部的进度轨道与节点"
      },
      {
        "key": "focusEnabled",
        "label": "重点强调",
        "type": "toggle",
        "default": false,
        "desc": "是否高亮其中一个阶段",
        "publicKey": "focusEnabled",
        "publicLabel": "重点强调",
        "description": "是否高亮其中一个阶段"
      },
      {
        "key": "focusIndex",
        "label": "强调项",
        "type": "number",
        "default": 1,
        "min": 0,
        "step": 1,
        "desc": "被强调阶段的序号",
        "publicKey": "focusIndex",
        "publicLabel": "强调项",
        "description": "被强调阶段的序号"
      },
      {
        "key": "showLead",
        "label": "引言",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏标题下方的引言",
        "publicKey": "showLead",
        "publicLabel": "引言",
        "description": "显示/隐藏标题下方的引言"
      }
    ],
    "defaultProps": {
      "kicker": "STRATEGY · 阶段性策略",
      "title": "资本下一程的 ",
      "titleEm": "三段节奏",
      "lead": "从「赌叙事」转向「看兑现」，节奏分三段推进：先观察头部 IPO，再优选可兑现标的，最后在洗牌期布局被低估的技术资产。",
      "phases": [
        {
          "period": "2025 – 2026",
          "title": "观察期",
          "desc": "跟踪头部公司 IPO 表现；若 Anthropic / OpenAI 上市破发，警惕全行业估值回调。"
        },
        {
          "period": "2026 – 2027",
          "title": "优选期",
          "desc": "关注垂直应用收入曲线，优选 ARR > 1 亿美元、续约率 > 120% 的标的。"
        },
        {
          "period": "2027 年后",
          "title": "洗牌期",
          "desc": "若 AGI 突破未兑现进入行业洗牌，可逆势抄底被低估的技术资产。"
        }
      ],
      "phaseCount": 3,
      "focusEnabled": false,
      "focusIndex": 1,
      "showRail": true,
      "showLead": true,
      "scheme": "green",
      "emphasis": "ticket",
      "breath": 55,
      "magnet": true,
      "aurora": true,
      "auroraSpeed": 1,
      "index": "55 / 73"
    }
  },
  {
    "key": "theme02_page057",
    "themeKey": "theme02",
    "pageNumber": 57,
    "layout": "THEME02-057",
    "slot": "bubbletl",
    "label": "月度气泡 · Bubble TL",
    "bgClass": "",
    "controls": [
      {
        "key": "scheme",
        "label": "配色方案",
        "type": "enum",
        "default": "green",
        "options": [
          [
            "green",
            "霓虹绿"
          ],
          [
            "violet",
            "炫光紫"
          ]
        ],
        "desc": "切换整页炫光配色。",
        "publicKey": "scheme",
        "publicLabel": "配色方案",
        "description": "切换整页炫光配色。"
      },
      {
        "key": "emphasis",
        "label": "强调卡片",
        "type": "enum",
        "default": "ticket",
        "options": [
          [
            "default",
            "默认发光"
          ],
          [
            "ticket",
            "炫光票卡"
          ]
        ],
        "desc": "切换焦点卡片的发光质感。",
        "publicKey": "emphasis",
        "publicLabel": "强调卡片",
        "description": "切换焦点卡片的发光质感。"
      },
      {
        "key": "breath",
        "label": "内光呼吸感",
        "type": "slider",
        "default": 55,
        "min": 0,
        "max": 100,
        "step": 1,
        "desc": "炫光票卡模式下的内光呼吸强度。",
        "publicKey": "breath",
        "publicLabel": "内光呼吸感",
        "description": "炫光票卡模式下的内光呼吸强度。"
      },
      {
        "key": "magnet",
        "label": "磁吸悬停",
        "type": "toggle",
        "default": true,
        "desc": "焦点卡片跟随指针产生轻微位移和倾斜。",
        "publicKey": "magnet",
        "publicLabel": "磁吸悬停",
        "description": "焦点卡片跟随指针产生轻微位移和倾斜。"
      },
      {
        "key": "aurora",
        "label": "渐变流光",
        "type": "toggle",
        "default": true,
        "desc": "开启标题、数字和图表重点元素的流光渐变。",
        "publicKey": "aurora",
        "publicLabel": "渐变流光",
        "description": "开启标题、数字和图表重点元素的流光渐变。"
      },
      {
        "key": "auroraSpeed",
        "label": "流光速度",
        "type": "slider",
        "default": 1,
        "min": 0.4,
        "max": 3,
        "step": 0.1,
        "desc": "流光动画速度。",
        "publicKey": "auroraSpeed",
        "publicLabel": "流光速度",
        "description": "流光动画速度。"
      },
      {
        "key": "focusEnabled",
        "label": "重点强调",
        "type": "toggle",
        "default": true,
        "desc": "是否高亮某一月份",
        "publicKey": "focusEnabled",
        "publicLabel": "重点强调",
        "description": "是否高亮某一月份"
      },
      {
        "key": "focusIndex",
        "label": "强调项",
        "type": "number",
        "default": 7,
        "min": 0,
        "step": 1,
        "desc": "被强调月份的序号",
        "publicKey": "focusIndex",
        "publicLabel": "强调项",
        "description": "被强调月份的序号"
      },
      {
        "key": "showValueLabels",
        "label": "数值标签",
        "type": "toggle",
        "default": true,
        "desc": "在气泡上显示具体数值",
        "publicKey": "showValueLabels",
        "publicLabel": "数值标签",
        "description": "在气泡上显示具体数值"
      },
      {
        "key": "showAnnotation",
        "label": "解读文案",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏趋势解读",
        "publicKey": "showAnnotation",
        "publicLabel": "解读文案",
        "description": "显示/隐藏趋势解读"
      }
    ],
    "defaultProps": {
      "kicker": "MARKET · 月度节奏",
      "title": "逐月融资额 ",
      "titleEm": "双峰脉冲",
      "data": [
        {
          "label": "1月",
          "value": 45
        },
        {
          "label": "2月",
          "value": 58
        },
        {
          "label": "3月",
          "value": 59
        },
        {
          "label": "4月",
          "value": 86
        },
        {
          "label": "5月",
          "value": 105
        },
        {
          "label": "6月",
          "value": 93
        },
        {
          "label": "7月",
          "value": 92
        },
        {
          "label": "8月",
          "value": 118
        },
        {
          "label": "9月",
          "value": 108
        },
        {
          "label": "10月",
          "value": 73
        },
        {
          "label": "11月",
          "value": 81
        },
        {
          "label": "12月",
          "value": 52
        }
      ],
      "valueSuffix": "亿",
      "focusEnabled": true,
      "focusIndex": 7,
      "showValueLabels": true,
      "showAnnotation": true,
      "annotation": "5 月与 8 月形成两次峰值，与多家头部公司集中关账有关；年末回落但仍高于上半年，节奏呈「双峰脉冲」。",
      "scheme": "green",
      "emphasis": "ticket",
      "breath": 55,
      "magnet": true,
      "aurora": true,
      "auroraSpeed": 1,
      "index": "56 / 73"
    }
  },
  {
    "key": "theme02_page058",
    "themeKey": "theme02",
    "pageNumber": 58,
    "layout": "THEME02-058",
    "slot": "pyramid",
    "label": "优先金字塔 · Pyramid",
    "bgClass": "",
    "controls": [
      {
        "key": "scheme",
        "label": "配色方案",
        "type": "enum",
        "default": "green",
        "options": [
          [
            "green",
            "霓虹绿"
          ],
          [
            "violet",
            "炫光紫"
          ]
        ],
        "desc": "切换整页炫光配色。",
        "publicKey": "scheme",
        "publicLabel": "配色方案",
        "description": "切换整页炫光配色。"
      },
      {
        "key": "emphasis",
        "label": "强调卡片",
        "type": "enum",
        "default": "ticket",
        "options": [
          [
            "default",
            "默认发光"
          ],
          [
            "ticket",
            "炫光票卡"
          ]
        ],
        "desc": "切换焦点卡片的发光质感。",
        "publicKey": "emphasis",
        "publicLabel": "强调卡片",
        "description": "切换焦点卡片的发光质感。"
      },
      {
        "key": "breath",
        "label": "内光呼吸感",
        "type": "slider",
        "default": 55,
        "min": 0,
        "max": 100,
        "step": 1,
        "desc": "炫光票卡模式下的内光呼吸强度。",
        "publicKey": "breath",
        "publicLabel": "内光呼吸感",
        "description": "炫光票卡模式下的内光呼吸强度。"
      },
      {
        "key": "magnet",
        "label": "磁吸悬停",
        "type": "toggle",
        "default": true,
        "desc": "焦点卡片跟随指针产生轻微位移和倾斜。",
        "publicKey": "magnet",
        "publicLabel": "磁吸悬停",
        "description": "焦点卡片跟随指针产生轻微位移和倾斜。"
      },
      {
        "key": "aurora",
        "label": "渐变流光",
        "type": "toggle",
        "default": true,
        "desc": "开启标题、数字和图表重点元素的流光渐变。",
        "publicKey": "aurora",
        "publicLabel": "渐变流光",
        "description": "开启标题、数字和图表重点元素的流光渐变。"
      },
      {
        "key": "auroraSpeed",
        "label": "流光速度",
        "type": "slider",
        "default": 1,
        "min": 0.4,
        "max": 3,
        "step": 0.1,
        "desc": "流光动画速度。",
        "publicKey": "auroraSpeed",
        "publicLabel": "流光速度",
        "description": "流光动画速度。"
      },
      {
        "key": "tierCount",
        "label": "层级数量",
        "type": "number",
        "default": 3,
        "min": 2,
        "step": 1,
        "desc": "金字塔的层级数量",
        "publicKey": "tierCount",
        "publicLabel": "层级数量",
        "description": "金字塔的层级数量"
      },
      {
        "key": "showDesc",
        "label": "层级说明",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏右侧的层级说明栏",
        "publicKey": "showDesc",
        "publicLabel": "层级说明",
        "description": "显示/隐藏右侧的层级说明栏"
      },
      {
        "key": "showNumbers",
        "label": "层级编号",
        "type": "toggle",
        "default": true,
        "desc": "在金字塔每层显示序号",
        "publicKey": "showNumbers",
        "publicLabel": "层级编号",
        "description": "在金字塔每层显示序号"
      },
      {
        "key": "faceTexture",
        "label": "表面质感",
        "type": "enum",
        "default": "gloss",
        "options": [
          {
            "value": "gloss",
            "label": "玻璃光泽"
          },
          {
            "value": "duotone",
            "label": "双色调"
          },
          {
            "value": "hatched",
            "label": "斜纹"
          }
        ],
        "desc": "层面的表面质感样式",
        "publicKey": "faceTexture",
        "publicLabel": "表面质感",
        "description": "层面的表面质感样式"
      },
      {
        "key": "focusEnabled",
        "label": "重点强调",
        "type": "toggle",
        "default": false,
        "desc": "是否高亮其中一个层级",
        "publicKey": "focusEnabled",
        "publicLabel": "重点强调",
        "description": "是否高亮其中一个层级"
      },
      {
        "key": "focusIndex",
        "label": "强调项",
        "type": "number",
        "default": 0,
        "min": 0,
        "step": 1,
        "desc": "被强调层级的序号（塔尖为 1）",
        "publicKey": "focusIndex",
        "publicLabel": "强调项",
        "description": "被强调层级的序号（塔尖为 1）"
      },
      {
        "key": "showLead",
        "label": "引言",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏标题下方的引言",
        "publicKey": "showLead",
        "publicLabel": "引言",
        "description": "显示/隐藏标题下方的引言"
      }
    ],
    "defaultProps": {
      "kicker": "OUTLOOK · 投资优先级",
      "title": "可兑现性 ",
      "titleEm": "分层金字塔",
      "lead": "按兑现确定性自下而上堆叠：塔基越稳，收入越可见、确定性越强；越向塔尖，潜力越大但兑现周期越长。",
      "tiers": [
        {
          "tag": "长线",
          "title": "具身智能",
          "desc": "人形机器人、自动驾驶等硬科技，潜力最大但兑现周期最长。"
        },
        {
          "tag": "进阶",
          "title": "垂直应用",
          "desc": "已验证 PMF、商业模式清晰的细分赛道，如企业搜索、法律 AI。"
        },
        {
          "tag": "优先",
          "title": "基础设施中游",
          "desc": "数据标注、向量数据库等「卖铲子」环节，需求确定、收入可见。"
        }
      ],
      "tierCount": 3,
      "focusEnabled": false,
      "focusIndex": 0,
      "showDesc": true,
      "showNumbers": true,
      "showLead": true,
      "faceTexture": "gloss",
      "gxnScheme": {},
      "scheme": "green",
      "emphasis": "ticket",
      "breath": 55,
      "magnet": true,
      "aurora": true,
      "auroraSpeed": 1,
      "index": "57 / 73"
    }
  },
  {
    "key": "theme02_page059",
    "themeKey": "theme02",
    "pageNumber": 59,
    "layout": "THEME02-059",
    "slot": "editorial",
    "label": "杂志大图 · Editorial",
    "bgClass": "",
    "controls": [
      {
        "key": "scheme",
        "label": "配色方案",
        "type": "enum",
        "default": "green",
        "options": [
          [
            "green",
            "霓虹绿"
          ],
          [
            "violet",
            "炫光紫"
          ]
        ],
        "desc": "切换整页炫光配色。",
        "publicKey": "scheme",
        "publicLabel": "配色方案",
        "description": "切换整页炫光配色。"
      },
      {
        "key": "emphasis",
        "label": "强调卡片",
        "type": "enum",
        "default": "ticket",
        "options": [
          [
            "default",
            "默认发光"
          ],
          [
            "ticket",
            "炫光票卡"
          ]
        ],
        "desc": "切换焦点卡片的发光质感。",
        "publicKey": "emphasis",
        "publicLabel": "强调卡片",
        "description": "切换焦点卡片的发光质感。"
      },
      {
        "key": "breath",
        "label": "内光呼吸感",
        "type": "slider",
        "default": 55,
        "min": 0,
        "max": 100,
        "step": 1,
        "desc": "炫光票卡模式下的内光呼吸强度。",
        "publicKey": "breath",
        "publicLabel": "内光呼吸感",
        "description": "炫光票卡模式下的内光呼吸强度。"
      },
      {
        "key": "magnet",
        "label": "磁吸悬停",
        "type": "toggle",
        "default": true,
        "desc": "焦点卡片跟随指针产生轻微位移和倾斜。",
        "publicKey": "magnet",
        "publicLabel": "磁吸悬停",
        "description": "焦点卡片跟随指针产生轻微位移和倾斜。"
      },
      {
        "key": "aurora",
        "label": "渐变流光",
        "type": "toggle",
        "default": true,
        "desc": "开启标题、数字和图表重点元素的流光渐变。",
        "publicKey": "aurora",
        "publicLabel": "渐变流光",
        "description": "开启标题、数字和图表重点元素的流光渐变。"
      },
      {
        "key": "auroraSpeed",
        "label": "流光速度",
        "type": "slider",
        "default": 1,
        "min": 0.4,
        "max": 3,
        "step": 0.1,
        "desc": "流光动画速度。",
        "publicKey": "auroraSpeed",
        "publicLabel": "流光速度",
        "description": "流光动画速度。"
      },
      {
        "key": "imageCount",
        "label": "图片数量",
        "type": "number",
        "default": 1,
        "min": 0,
        "max": 2,
        "step": 1,
        "desc": "配图槽位数量（0 = 纯文字版式）",
        "publicKey": "imageCount",
        "publicLabel": "图片数量",
        "description": "配图槽位数量（0 = 纯文字版式）"
      },
      {
        "key": "imageSide",
        "label": "图片位置",
        "type": "enum",
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
        "desc": "配图位于左侧或右侧",
        "publicKey": "imageSide",
        "publicLabel": "图片位置",
        "description": "配图位于左侧或右侧"
      },
      {
        "key": "showStat",
        "label": "关键数字",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏标题区的关键数字",
        "publicKey": "showStat",
        "publicLabel": "关键数字",
        "description": "显示/隐藏标题区的关键数字"
      },
      {
        "key": "showBackdrop",
        "label": "背景大字",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏背景的大号装饰字",
        "publicKey": "showBackdrop",
        "publicLabel": "背景大字",
        "description": "显示/隐藏背景的大号装饰字"
      },
      {
        "key": "focusEnabled",
        "label": "重点强调",
        "type": "toggle",
        "default": false,
        "desc": "是否高亮其中一张配图",
        "publicKey": "focusEnabled",
        "publicLabel": "重点强调",
        "description": "是否高亮其中一张配图"
      },
      {
        "key": "focusIndex",
        "label": "强调项",
        "type": "number",
        "default": 0,
        "min": 0,
        "step": 1,
        "desc": "被强调配图的序号",
        "publicKey": "focusIndex",
        "publicLabel": "强调项",
        "description": "被强调配图的序号"
      }
    ],
    "defaultProps": {
      "kicker": "DEEP DIVE · 卖铲子的人",
      "vertical": "CASE STUDY",
      "title": "CoreWeave ",
      "titleEm": "淘金热里卖铲子",
      "lead": "从加密矿场转型 AI 算力云：当所有模型公司都在抢 GPU，提前锁定算力的基础设施商反而成为最稀缺的标的。",
      "stat": {
        "value": "110",
        "unit": "亿美元",
        "caption": "2024 年融资 · 估值超 190 亿"
      },
      "showStat": true,
      "tags": [
        "算力云",
        "NVIDIA 长约",
        "H100 / H200"
      ],
      "imageCount": 1,
      "imageSide": "right",
      "captions": [
        "CoreWeave · 算力机房",
        "GPU 集群"
      ],
      "focusEnabled": false,
      "focusIndex": 0,
      "backdropText": "05",
      "showBackdrop": true,
      "images": [],
      "scheme": "green",
      "emphasis": "ticket",
      "breath": 55,
      "magnet": true,
      "aurora": true,
      "auroraSpeed": 1,
      "index": "58 / 73"
    }
  },
  {
    "key": "theme02_page060",
    "themeKey": "theme02",
    "pageNumber": 60,
    "layout": "THEME02-060",
    "slot": "pareto",
    "label": "集中度 · Pareto",
    "bgClass": "",
    "controls": [
      {
        "key": "scheme",
        "label": "配色方案",
        "type": "enum",
        "default": "green",
        "options": [
          [
            "green",
            "霓虹绿"
          ],
          [
            "violet",
            "炫光紫"
          ]
        ],
        "desc": "切换整页炫光配色。",
        "publicKey": "scheme",
        "publicLabel": "配色方案",
        "description": "切换整页炫光配色。"
      },
      {
        "key": "emphasis",
        "label": "强调卡片",
        "type": "enum",
        "default": "ticket",
        "options": [
          [
            "default",
            "默认发光"
          ],
          [
            "ticket",
            "炫光票卡"
          ]
        ],
        "desc": "切换焦点卡片的发光质感。",
        "publicKey": "emphasis",
        "publicLabel": "强调卡片",
        "description": "切换焦点卡片的发光质感。"
      },
      {
        "key": "breath",
        "label": "内光呼吸感",
        "type": "slider",
        "default": 55,
        "min": 0,
        "max": 100,
        "step": 1,
        "desc": "炫光票卡模式下的内光呼吸强度。",
        "publicKey": "breath",
        "publicLabel": "内光呼吸感",
        "description": "炫光票卡模式下的内光呼吸强度。"
      },
      {
        "key": "magnet",
        "label": "磁吸悬停",
        "type": "toggle",
        "default": true,
        "desc": "焦点卡片跟随指针产生轻微位移和倾斜。",
        "publicKey": "magnet",
        "publicLabel": "磁吸悬停",
        "description": "焦点卡片跟随指针产生轻微位移和倾斜。"
      },
      {
        "key": "aurora",
        "label": "渐变流光",
        "type": "toggle",
        "default": true,
        "desc": "开启标题、数字和图表重点元素的流光渐变。",
        "publicKey": "aurora",
        "publicLabel": "渐变流光",
        "description": "开启标题、数字和图表重点元素的流光渐变。"
      },
      {
        "key": "auroraSpeed",
        "label": "流光速度",
        "type": "slider",
        "default": 1,
        "min": 0.4,
        "max": 3,
        "step": 0.1,
        "desc": "流光动画速度。",
        "publicKey": "auroraSpeed",
        "publicLabel": "流光速度",
        "description": "流光动画速度。"
      },
      {
        "key": "barCount",
        "label": "条目数量",
        "type": "number",
        "default": 10,
        "min": 2,
        "step": 1,
        "desc": "帕累托图展示的条目数量",
        "publicKey": "itemCount",
        "publicLabel": "条目数量",
        "description": "帕累托图展示的条目数量"
      },
      {
        "key": "focusEnabled",
        "label": "重点强调",
        "type": "toggle",
        "default": true,
        "desc": "辉光强调某一柱（其余淡出）",
        "publicKey": "focusEnabled",
        "publicLabel": "重点强调",
        "description": "辉光强调某一柱（其余淡出）"
      },
      {
        "key": "focusIndex",
        "label": "强调项",
        "type": "number",
        "default": 0,
        "min": 0,
        "step": 1,
        "desc": "被强调柱的序号",
        "publicKey": "focusIndex",
        "publicLabel": "强调项",
        "description": "被强调柱的序号"
      },
      {
        "key": "showCumLine",
        "label": "累计曲线",
        "type": "toggle",
        "default": true,
        "desc": "累计占比折线显隐",
        "publicKey": "showCumLine",
        "publicLabel": "累计曲线",
        "description": "累计占比折线显隐"
      },
      {
        "key": "showEighty",
        "label": "80% 线",
        "type": "toggle",
        "default": true,
        "desc": "80% 参考线显隐",
        "publicKey": "showEighty",
        "publicLabel": "80% 线",
        "description": "80% 参考线显隐"
      },
      {
        "key": "showValueLabels",
        "label": "数值标签",
        "type": "toggle",
        "default": true,
        "desc": "柱上数值显隐",
        "publicKey": "showValueLabels",
        "publicLabel": "数值标签",
        "description": "柱上数值显隐"
      },
      {
        "key": "showGrid",
        "label": "网格刻度",
        "type": "toggle",
        "default": true,
        "desc": "左轴网格刻度显隐",
        "publicKey": "showGrid",
        "publicLabel": "网格刻度",
        "description": "左轴网格刻度显隐"
      }
    ],
    "defaultProps": {
      "kicker": "PARETO · 集中度",
      "title": "少数头部 ",
      "titleEm": "吸走多数资本",
      "lead": "把 Top 10 单笔融资按金额降序排开，累计曲线快速逼近顶部——前三家就吃掉大半盘子。",
      "items": [
        {
          "label": "OpenAI",
          "value": 66
        },
        {
          "label": "Anthropic",
          "value": 65
        },
        {
          "label": "xAI",
          "value": 50
        },
        {
          "label": "CoreWeave",
          "value": 11
        },
        {
          "label": "SSI",
          "value": 10
        },
        {
          "label": "Scale AI",
          "value": 10
        },
        {
          "label": "Figure AI",
          "value": 6.8
        },
        {
          "label": "Perplexity",
          "value": 5.2
        },
        {
          "label": "Databricks",
          "value": 5
        },
        {
          "label": "Glean",
          "value": 2.6
        }
      ],
      "unit": "亿美元",
      "barCount": 10,
      "focusEnabled": true,
      "focusIndex": 0,
      "showCumLine": true,
      "showEighty": true,
      "showValueLabels": true,
      "showGrid": true,
      "scheme": "green",
      "emphasis": "ticket",
      "breath": 55,
      "magnet": true,
      "aurora": true,
      "auroraSpeed": 1,
      "index": "59 / 73"
    }
  },
  {
    "key": "theme02_page061",
    "themeKey": "theme02",
    "pageNumber": 61,
    "layout": "THEME02-061",
    "slot": "rose",
    "label": "节律玫瑰 · Rose",
    "bgClass": "",
    "controls": [
      {
        "key": "scheme",
        "label": "配色方案",
        "type": "enum",
        "default": "green",
        "options": [
          [
            "green",
            "霓虹绿"
          ],
          [
            "violet",
            "炫光紫"
          ]
        ],
        "desc": "切换整页炫光配色。",
        "publicKey": "scheme",
        "publicLabel": "配色方案",
        "description": "切换整页炫光配色。"
      },
      {
        "key": "emphasis",
        "label": "强调卡片",
        "type": "enum",
        "default": "ticket",
        "options": [
          [
            "default",
            "默认发光"
          ],
          [
            "ticket",
            "炫光票卡"
          ]
        ],
        "desc": "切换焦点卡片的发光质感。",
        "publicKey": "emphasis",
        "publicLabel": "强调卡片",
        "description": "切换焦点卡片的发光质感。"
      },
      {
        "key": "breath",
        "label": "内光呼吸感",
        "type": "slider",
        "default": 55,
        "min": 0,
        "max": 100,
        "step": 1,
        "desc": "炫光票卡模式下的内光呼吸强度。",
        "publicKey": "breath",
        "publicLabel": "内光呼吸感",
        "description": "炫光票卡模式下的内光呼吸强度。"
      },
      {
        "key": "magnet",
        "label": "磁吸悬停",
        "type": "toggle",
        "default": true,
        "desc": "焦点卡片跟随指针产生轻微位移和倾斜。",
        "publicKey": "magnet",
        "publicLabel": "磁吸悬停",
        "description": "焦点卡片跟随指针产生轻微位移和倾斜。"
      },
      {
        "key": "aurora",
        "label": "渐变流光",
        "type": "toggle",
        "default": true,
        "desc": "开启标题、数字和图表重点元素的流光渐变。",
        "publicKey": "aurora",
        "publicLabel": "渐变流光",
        "description": "开启标题、数字和图表重点元素的流光渐变。"
      },
      {
        "key": "auroraSpeed",
        "label": "流光速度",
        "type": "slider",
        "default": 1,
        "min": 0.4,
        "max": 3,
        "step": 0.1,
        "desc": "流光动画速度。",
        "publicKey": "auroraSpeed",
        "publicLabel": "流光速度",
        "description": "流光动画速度。"
      },
      {
        "key": "petalCount",
        "label": "花瓣数量",
        "type": "number",
        "default": 12,
        "min": 3,
        "step": 1,
        "desc": "玫瑰图展示的花瓣（周期）数量",
        "publicKey": "petalCount",
        "publicLabel": "花瓣数量",
        "description": "玫瑰图展示的花瓣（周期）数量"
      },
      {
        "key": "scaleMode",
        "label": "半径映射",
        "type": "enum",
        "default": "radius",
        "options": [
          {
            "value": "radius",
            "label": "线性"
          },
          {
            "value": "area",
            "label": "面积守恒"
          }
        ],
        "desc": "半径 ∝ 数值，或面积 ∝ 数值（√）",
        "publicKey": "scaleMode",
        "publicLabel": "半径映射",
        "description": "半径 ∝ 数值，或面积 ∝ 数值（√）"
      },
      {
        "key": "focusEnabled",
        "label": "重点强调",
        "type": "toggle",
        "default": true,
        "desc": "辉光强调某一瓣（其余淡出）",
        "publicKey": "focusEnabled",
        "publicLabel": "重点强调",
        "description": "辉光强调某一瓣（其余淡出）"
      },
      {
        "key": "focusIndex",
        "label": "强调项",
        "type": "number",
        "default": 7,
        "min": 0,
        "step": 1,
        "desc": "被强调花瓣的序号",
        "publicKey": "focusIndex",
        "publicLabel": "强调项",
        "description": "被强调花瓣的序号"
      },
      {
        "key": "showRings",
        "label": "背景环网",
        "type": "toggle",
        "default": true,
        "desc": "同心环 + 刻度显隐",
        "publicKey": "showRings",
        "publicLabel": "背景环网",
        "description": "同心环 + 刻度显隐"
      },
      {
        "key": "showLabels",
        "label": "周期标签",
        "type": "toggle",
        "default": true,
        "desc": "外圈周期标签显隐",
        "publicKey": "showLabels",
        "publicLabel": "周期标签",
        "description": "外圈周期标签显隐"
      },
      {
        "key": "showValueLabels",
        "label": "峰值数值",
        "type": "toggle",
        "default": true,
        "desc": "峰值瓣数值显隐",
        "publicKey": "showValueLabels",
        "publicLabel": "峰值数值",
        "description": "峰值瓣数值显隐"
      }
    ],
    "defaultProps": {
      "kicker": "ROSE · 节律",
      "title": "资本的 ",
      "titleEm": "十二个月",
      "lead": "把全年逐月融资额绕成一圈——5 月与 8 月两次冲高，与多家头部公司集中关账同步。",
      "items": [
        {
          "label": "1月",
          "value": 45
        },
        {
          "label": "2月",
          "value": 58
        },
        {
          "label": "3月",
          "value": 59
        },
        {
          "label": "4月",
          "value": 86
        },
        {
          "label": "5月",
          "value": 105
        },
        {
          "label": "6月",
          "value": 93
        },
        {
          "label": "7月",
          "value": 92
        },
        {
          "label": "8月",
          "value": 118
        },
        {
          "label": "9月",
          "value": 108
        },
        {
          "label": "10月",
          "value": 73
        },
        {
          "label": "11月",
          "value": 81
        },
        {
          "label": "12月",
          "value": 52
        }
      ],
      "unit": "亿美元",
      "petalCount": 12,
      "scaleMode": "radius",
      "focusEnabled": true,
      "focusIndex": 7,
      "showRings": true,
      "showLabels": true,
      "showValueLabels": true,
      "scheme": "green",
      "emphasis": "ticket",
      "breath": 55,
      "magnet": true,
      "aurora": true,
      "auroraSpeed": 1,
      "index": "60 / 73"
    }
  },
  {
    "key": "theme02_page062",
    "themeKey": "theme02",
    "pageNumber": 62,
    "layout": "THEME02-062",
    "slot": "treemap",
    "label": "赛道版图 · Treemap",
    "bgClass": "",
    "controls": [
      {
        "key": "scheme",
        "label": "配色方案",
        "type": "enum",
        "default": "green",
        "options": [
          [
            "green",
            "霓虹绿"
          ],
          [
            "violet",
            "炫光紫"
          ]
        ],
        "desc": "切换整页炫光配色。",
        "publicKey": "scheme",
        "publicLabel": "配色方案",
        "description": "切换整页炫光配色。"
      },
      {
        "key": "emphasis",
        "label": "强调卡片",
        "type": "enum",
        "default": "ticket",
        "options": [
          [
            "default",
            "默认发光"
          ],
          [
            "ticket",
            "炫光票卡"
          ]
        ],
        "desc": "切换焦点卡片的发光质感。",
        "publicKey": "emphasis",
        "publicLabel": "强调卡片",
        "description": "切换焦点卡片的发光质感。"
      },
      {
        "key": "breath",
        "label": "内光呼吸感",
        "type": "slider",
        "default": 55,
        "min": 0,
        "max": 100,
        "step": 1,
        "desc": "炫光票卡模式下的内光呼吸强度。",
        "publicKey": "breath",
        "publicLabel": "内光呼吸感",
        "description": "炫光票卡模式下的内光呼吸强度。"
      },
      {
        "key": "magnet",
        "label": "磁吸悬停",
        "type": "toggle",
        "default": true,
        "desc": "焦点卡片跟随指针产生轻微位移和倾斜。",
        "publicKey": "magnet",
        "publicLabel": "磁吸悬停",
        "description": "焦点卡片跟随指针产生轻微位移和倾斜。"
      },
      {
        "key": "aurora",
        "label": "渐变流光",
        "type": "toggle",
        "default": true,
        "desc": "开启标题、数字和图表重点元素的流光渐变。",
        "publicKey": "aurora",
        "publicLabel": "渐变流光",
        "description": "开启标题、数字和图表重点元素的流光渐变。"
      },
      {
        "key": "auroraSpeed",
        "label": "流光速度",
        "type": "slider",
        "default": 1,
        "min": 0.4,
        "max": 3,
        "step": 0.1,
        "desc": "流光动画速度。",
        "publicKey": "auroraSpeed",
        "publicLabel": "流光速度",
        "description": "流光动画速度。"
      },
      {
        "key": "itemCount",
        "label": "色块数量",
        "type": "number",
        "default": 5,
        "min": 2,
        "step": 1,
        "desc": "矩形树图展示的色块数量",
        "publicKey": "itemCount",
        "publicLabel": "色块数量",
        "description": "矩形树图展示的色块数量"
      },
      {
        "key": "focusEnabled",
        "label": "重点强调",
        "type": "toggle",
        "default": true,
        "desc": "辉光强调某一块（其余淡出）",
        "publicKey": "focusEnabled",
        "publicLabel": "重点强调",
        "description": "辉光强调某一块（其余淡出）"
      },
      {
        "key": "focusIndex",
        "label": "强调项",
        "type": "number",
        "default": 0,
        "min": 0,
        "step": 1,
        "desc": "被强调色块的序号",
        "publicKey": "focusIndex",
        "publicLabel": "强调项",
        "description": "被强调色块的序号"
      },
      {
        "key": "showValue",
        "label": "数值",
        "type": "toggle",
        "default": true,
        "desc": "块内数值显隐",
        "publicKey": "showValueLabels",
        "publicLabel": "数值",
        "description": "块内数值显隐"
      },
      {
        "key": "showShare",
        "label": "占比",
        "type": "toggle",
        "default": true,
        "desc": "块内占比百分比显隐",
        "publicKey": "showShare",
        "publicLabel": "占比",
        "description": "块内占比百分比显隐"
      },
      {
        "key": "showNote",
        "label": "注解",
        "type": "toggle",
        "default": true,
        "desc": "大块内一句注解显隐",
        "publicKey": "showNote",
        "publicLabel": "注解",
        "description": "大块内一句注解显隐"
      }
    ],
    "defaultProps": {
      "kicker": "TREEMAP · 赛道版图",
      "title": "资金落在 ",
      "titleEm": "哪些赛道",
      "lead": "把 970 亿美元按业务类型切块——面积越大，吸金越多。通用大模型独占近半壁江山。",
      "items": [
        {
          "label": "通用大模型",
          "value": 420,
          "note": "押注 AGI 叙事"
        },
        {
          "label": "垂直应用",
          "value": 245,
          "note": "寻找商业化路径"
        },
        {
          "label": "AI 基础设施",
          "value": 158,
          "note": "卖铲子逻辑"
        },
        {
          "label": "AI 芯片",
          "value": 97,
          "note": "上游硬件"
        },
        {
          "label": "其他赛道",
          "value": 50,
          "note": "工具链 · 安全"
        }
      ],
      "unit": "亿美元",
      "itemCount": 5,
      "focusEnabled": true,
      "focusIndex": 0,
      "showValue": true,
      "showShare": true,
      "showNote": true,
      "scheme": "green",
      "emphasis": "ticket",
      "breath": 55,
      "magnet": true,
      "aurora": true,
      "auroraSpeed": 1,
      "index": "61 / 73"
    }
  },
  {
    "key": "theme02_page063",
    "themeKey": "theme02",
    "pageNumber": 63,
    "layout": "THEME02-063",
    "slot": "cyclewheel",
    "label": "资本飞轮 · Cycle",
    "bgClass": "",
    "controls": [
      {
        "key": "scheme",
        "label": "配色方案",
        "type": "enum",
        "default": "green",
        "options": [
          [
            "green",
            "霓虹绿"
          ],
          [
            "violet",
            "炫光紫"
          ]
        ],
        "desc": "切换整页炫光配色。",
        "publicKey": "scheme",
        "publicLabel": "配色方案",
        "description": "切换整页炫光配色。"
      },
      {
        "key": "emphasis",
        "label": "强调卡片",
        "type": "enum",
        "default": "ticket",
        "options": [
          [
            "default",
            "默认发光"
          ],
          [
            "ticket",
            "炫光票卡"
          ]
        ],
        "desc": "切换焦点卡片的发光质感。",
        "publicKey": "emphasis",
        "publicLabel": "强调卡片",
        "description": "切换焦点卡片的发光质感。"
      },
      {
        "key": "breath",
        "label": "内光呼吸感",
        "type": "slider",
        "default": 55,
        "min": 0,
        "max": 100,
        "step": 1,
        "desc": "炫光票卡模式下的内光呼吸强度。",
        "publicKey": "breath",
        "publicLabel": "内光呼吸感",
        "description": "炫光票卡模式下的内光呼吸强度。"
      },
      {
        "key": "magnet",
        "label": "磁吸悬停",
        "type": "toggle",
        "default": true,
        "desc": "焦点卡片跟随指针产生轻微位移和倾斜。",
        "publicKey": "magnet",
        "publicLabel": "磁吸悬停",
        "description": "焦点卡片跟随指针产生轻微位移和倾斜。"
      },
      {
        "key": "aurora",
        "label": "渐变流光",
        "type": "toggle",
        "default": true,
        "desc": "开启标题、数字和图表重点元素的流光渐变。",
        "publicKey": "aurora",
        "publicLabel": "渐变流光",
        "description": "开启标题、数字和图表重点元素的流光渐变。"
      },
      {
        "key": "auroraSpeed",
        "label": "流光速度",
        "type": "slider",
        "default": 1,
        "min": 0.4,
        "max": 3,
        "step": 0.1,
        "desc": "流光动画速度。",
        "publicKey": "auroraSpeed",
        "publicLabel": "流光速度",
        "description": "流光动画速度。"
      },
      {
        "key": "segmentCount",
        "label": "环节数量",
        "type": "number",
        "default": 3,
        "min": 3,
        "max": 5,
        "step": 1,
        "desc": "飞轮环节数量（角度自适应：3→120°、4→90°、5→72°）",
        "publicKey": "segmentCount",
        "publicLabel": "环节数量",
        "description": "飞轮环节数量（角度自适应：3→120°、4→90°、5→72°）"
      },
      {
        "key": "focusEnabled",
        "label": "重点强调",
        "type": "toggle",
        "default": true,
        "desc": "是否高亮其中一个环节",
        "publicKey": "focusEnabled",
        "publicLabel": "重点强调",
        "description": "是否高亮其中一个环节"
      },
      {
        "key": "focusIndex",
        "label": "强调项",
        "type": "number",
        "default": 2,
        "min": 0,
        "step": 1,
        "desc": "被强调环节的序号",
        "publicKey": "focusIndex",
        "publicLabel": "强调项",
        "description": "被强调环节的序号"
      },
      {
        "key": "showArrows",
        "label": "旋转箭头",
        "type": "toggle",
        "default": true,
        "desc": "段间旋转箭头显隐",
        "publicKey": "showArrows",
        "publicLabel": "旋转箭头",
        "description": "段间旋转箭头显隐"
      },
      {
        "key": "showCards",
        "label": "说明卡片",
        "type": "toggle",
        "default": true,
        "desc": "右侧环节说明卡列显隐",
        "publicKey": "showCards",
        "publicLabel": "说明卡片",
        "description": "右侧环节说明卡列显隐"
      },
      {
        "key": "showTags",
        "label": "卡片标签",
        "type": "toggle",
        "default": true,
        "desc": "卡片内标签显隐",
        "publicKey": "showTags",
        "publicLabel": "卡片标签",
        "description": "卡片内标签显隐"
      }
    ],
    "defaultProps": {
      "kicker": "FLYWHEEL · 资本飞轮",
      "title": "AI 资本飞轮 ",
      "titleEm": "三段循环",
      "index": "62 / 73",
      "center": {
        "label": "资本飞轮",
        "sub": "FLYWHEEL"
      },
      "segments": [
        {
          "label": "资本涌入",
          "en": "CAPITAL",
          "desc": "970 亿美元注入头部，估值快速攀升。",
          "tags": [
            "集中头部",
            "估值攀升"
          ]
        },
        {
          "label": "技术突破",
          "en": "BREAKTHROUGH",
          "desc": "模型与算力加速迭代，能力边界外扩。",
          "tags": [
            "模型迭代",
            "算力卡位"
          ]
        },
        {
          "label": "商业兑现",
          "en": "REVENUE",
          "desc": "收入与客户验证价值，反哺下一轮融资。",
          "tags": [
            "收入增速",
            "客户留存"
          ]
        },
        {
          "label": "生态绑定",
          "en": "ECOSYSTEM",
          "desc": "平台与开发者生态形成网络效应，抬高迁移成本。",
          "tags": [
            "平台绑定",
            "网络效应"
          ]
        },
        {
          "label": "人才虹吸",
          "en": "TALENT",
          "desc": "头部吸纳顶尖研究者与团队，强化技术领先。",
          "tags": [
            "顶尖团队",
            "技术领先"
          ]
        }
      ],
      "segmentCount": 3,
      "focusEnabled": true,
      "focusIndex": 2,
      "showArrows": true,
      "showCards": true,
      "showTags": true,
      "scheme": "green",
      "emphasis": "ticket",
      "breath": 55,
      "magnet": true,
      "aurora": true,
      "auroraSpeed": 1
    }
  },
  {
    "key": "theme02_page064",
    "themeKey": "theme02",
    "pageNumber": 64,
    "layout": "THEME02-064",
    "slot": "slope",
    "label": "斜率图 · Slope",
    "bgClass": "",
    "controls": [
      {
        "key": "scheme",
        "label": "配色方案",
        "type": "enum",
        "default": "green",
        "options": [
          [
            "green",
            "霓虹绿"
          ],
          [
            "violet",
            "炫光紫"
          ]
        ],
        "desc": "切换整页炫光配色。",
        "publicKey": "scheme",
        "publicLabel": "配色方案",
        "description": "切换整页炫光配色。"
      },
      {
        "key": "emphasis",
        "label": "强调卡片",
        "type": "enum",
        "default": "ticket",
        "options": [
          [
            "default",
            "默认发光"
          ],
          [
            "ticket",
            "炫光票卡"
          ]
        ],
        "desc": "切换焦点卡片的发光质感。",
        "publicKey": "emphasis",
        "publicLabel": "强调卡片",
        "description": "切换焦点卡片的发光质感。"
      },
      {
        "key": "breath",
        "label": "内光呼吸感",
        "type": "slider",
        "default": 55,
        "min": 0,
        "max": 100,
        "step": 1,
        "desc": "炫光票卡模式下的内光呼吸强度。",
        "publicKey": "breath",
        "publicLabel": "内光呼吸感",
        "description": "炫光票卡模式下的内光呼吸强度。"
      },
      {
        "key": "magnet",
        "label": "磁吸悬停",
        "type": "toggle",
        "default": true,
        "desc": "焦点卡片跟随指针产生轻微位移和倾斜。",
        "publicKey": "magnet",
        "publicLabel": "磁吸悬停",
        "description": "焦点卡片跟随指针产生轻微位移和倾斜。"
      },
      {
        "key": "aurora",
        "label": "渐变流光",
        "type": "toggle",
        "default": true,
        "desc": "开启标题、数字和图表重点元素的流光渐变。",
        "publicKey": "aurora",
        "publicLabel": "渐变流光",
        "description": "开启标题、数字和图表重点元素的流光渐变。"
      },
      {
        "key": "auroraSpeed",
        "label": "流光速度",
        "type": "slider",
        "default": 1,
        "min": 0.4,
        "max": 3,
        "step": 0.1,
        "desc": "流光动画速度。",
        "publicKey": "auroraSpeed",
        "publicLabel": "流光速度",
        "description": "流光动画速度。"
      },
      {
        "key": "itemCount",
        "label": "条目数量",
        "type": "number",
        "default": 6,
        "min": 2,
        "step": 1,
        "desc": "斜率图展示的条目数量",
        "publicKey": "itemCount",
        "publicLabel": "条目数量",
        "description": "斜率图展示的条目数量"
      },
      {
        "key": "focusEnabled",
        "label": "重点强调",
        "type": "toggle",
        "default": true,
        "desc": "辉光强调某一条（其余淡出）",
        "publicKey": "focusEnabled",
        "publicLabel": "重点强调",
        "description": "辉光强调某一条（其余淡出）"
      },
      {
        "key": "focusIndex",
        "label": "强调项",
        "type": "number",
        "default": 5,
        "min": 0,
        "step": 1,
        "desc": "被强调条目的序号",
        "publicKey": "focusIndex",
        "publicLabel": "强调项",
        "description": "被强调条目的序号"
      },
      {
        "key": "showDots",
        "label": "端点圆点",
        "type": "toggle",
        "default": true,
        "desc": "两端圆点显隐",
        "publicKey": "showDots",
        "publicLabel": "端点圆点",
        "description": "两端圆点显隐"
      },
      {
        "key": "showValueLabels",
        "label": "端点数值",
        "type": "toggle",
        "default": true,
        "desc": "两端数值显隐",
        "publicKey": "showValueLabels",
        "publicLabel": "端点数值",
        "description": "两端数值显隐"
      },
      {
        "key": "showDelta",
        "label": "变化徽章",
        "type": "toggle",
        "default": true,
        "desc": "右侧变化量徽章显隐",
        "publicKey": "showDelta",
        "publicLabel": "变化徽章",
        "description": "右侧变化量徽章显隐"
      }
    ],
    "defaultProps": {
      "kicker": "SLOPE · 赢家通吃",
      "title": "从「笔数」到「金额」",
      "titleEm": "",
      "lead": "同样 97 笔融资，按笔数还算分散；可一旦换算成金额，后期与未披露轮次便陡然放大——少数大额轮次吸走多数资本。",
      "leftLabel": "事件笔数 份额",
      "rightLabel": "融资金额 份额",
      "items": [
        {
          "label": "种子轮",
          "left": 8.2,
          "right": 1
        },
        {
          "label": "A 轮",
          "left": 12.4,
          "right": 2.3
        },
        {
          "label": "B 轮",
          "left": 18.6,
          "right": 6.7
        },
        {
          "label": "C 轮",
          "left": 15.5,
          "right": 10.9
        },
        {
          "label": "D 轮及以后",
          "left": 22.7,
          "right": 35.6
        },
        {
          "label": "未披露轮次",
          "left": 22.7,
          "right": 43.5
        }
      ],
      "unit": "%",
      "itemCount": 6,
      "focusEnabled": true,
      "focusIndex": 5,
      "showDots": true,
      "showValueLabels": true,
      "showDelta": true,
      "scheme": "green",
      "emphasis": "ticket",
      "breath": 55,
      "magnet": true,
      "aurora": true,
      "auroraSpeed": 1,
      "index": "63 / 73"
    }
  },
  {
    "key": "theme02_page065",
    "themeKey": "theme02",
    "pageNumber": 65,
    "layout": "THEME02-065",
    "slot": "orbit",
    "label": "径向枢纽 · Orbit",
    "bgClass": "",
    "controls": [
      {
        "key": "scheme",
        "label": "配色方案",
        "type": "enum",
        "default": "green",
        "options": [
          [
            "green",
            "霓虹绿"
          ],
          [
            "violet",
            "炫光紫"
          ]
        ],
        "desc": "切换整页炫光配色。",
        "publicKey": "scheme",
        "publicLabel": "配色方案",
        "description": "切换整页炫光配色。"
      },
      {
        "key": "emphasis",
        "label": "强调卡片",
        "type": "enum",
        "default": "ticket",
        "options": [
          [
            "default",
            "默认发光"
          ],
          [
            "ticket",
            "炫光票卡"
          ]
        ],
        "desc": "切换焦点卡片的发光质感。",
        "publicKey": "emphasis",
        "publicLabel": "强调卡片",
        "description": "切换焦点卡片的发光质感。"
      },
      {
        "key": "breath",
        "label": "内光呼吸感",
        "type": "slider",
        "default": 55,
        "min": 0,
        "max": 100,
        "step": 1,
        "desc": "炫光票卡模式下的内光呼吸强度。",
        "publicKey": "breath",
        "publicLabel": "内光呼吸感",
        "description": "炫光票卡模式下的内光呼吸强度。"
      },
      {
        "key": "magnet",
        "label": "磁吸悬停",
        "type": "toggle",
        "default": true,
        "desc": "焦点卡片跟随指针产生轻微位移和倾斜。",
        "publicKey": "magnet",
        "publicLabel": "磁吸悬停",
        "description": "焦点卡片跟随指针产生轻微位移和倾斜。"
      },
      {
        "key": "aurora",
        "label": "渐变流光",
        "type": "toggle",
        "default": true,
        "desc": "开启标题、数字和图表重点元素的流光渐变。",
        "publicKey": "aurora",
        "publicLabel": "渐变流光",
        "description": "开启标题、数字和图表重点元素的流光渐变。"
      },
      {
        "key": "auroraSpeed",
        "label": "流光速度",
        "type": "slider",
        "default": 1,
        "min": 0.4,
        "max": 3,
        "step": 0.1,
        "desc": "流光动画速度。",
        "publicKey": "auroraSpeed",
        "publicLabel": "流光速度",
        "description": "流光动画速度。"
      },
      {
        "key": "nodeCount",
        "label": "节点数量",
        "type": "number",
        "default": 5,
        "min": 3,
        "step": 1,
        "desc": "环绕节点的数量",
        "publicKey": "nodeCount",
        "publicLabel": "节点数量",
        "description": "环绕节点的数量"
      },
      {
        "key": "focusEnabled",
        "label": "重点强调",
        "type": "toggle",
        "default": false,
        "desc": "是否高亮其中一个节点",
        "publicKey": "focusEnabled",
        "publicLabel": "重点强调",
        "description": "是否高亮其中一个节点"
      },
      {
        "key": "focusIndex",
        "label": "强调项",
        "type": "number",
        "default": 0,
        "min": 0,
        "step": 1,
        "desc": "被强调节点的序号",
        "publicKey": "focusIndex",
        "publicLabel": "强调项",
        "description": "被强调节点的序号"
      },
      {
        "key": "coreFlow",
        "label": "中心流光",
        "type": "toggle",
        "default": true,
        "desc": "中心球体的荧光流动动效",
        "publicKey": "coreFlow",
        "publicLabel": "中心流光",
        "description": "中心球体的荧光流动动效"
      },
      {
        "key": "showSpokes",
        "label": "辐射连线",
        "type": "toggle",
        "default": true,
        "desc": "中心→节点的辐射连线显隐",
        "publicKey": "showSpokes",
        "publicLabel": "辐射连线",
        "description": "中心→节点的辐射连线显隐"
      },
      {
        "key": "showOrbit",
        "label": "轨道环",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏环绕轨道线",
        "publicKey": "showOrbit",
        "publicLabel": "轨道环",
        "description": "显示/隐藏环绕轨道线"
      },
      {
        "key": "showIndex",
        "label": "节点序号",
        "type": "toggle",
        "default": true,
        "desc": "节点内序号显隐",
        "publicKey": "showIndex",
        "publicLabel": "节点序号",
        "description": "节点内序号显隐"
      },
      {
        "key": "showDesc",
        "label": "节点说明",
        "type": "toggle",
        "default": true,
        "desc": "节点说明文案显隐",
        "publicKey": "showDesc",
        "publicLabel": "节点说明",
        "description": "节点说明文案显隐"
      }
    ],
    "defaultProps": {
      "kicker": "FRAMEWORK · 调研框架",
      "title": "五维透视 ",
      "titleEm": "横纵分析法",
      "index": "64 / 73",
      "center": {
        "label": "AI 资本图景",
        "sub": "2024 · 横纵分析"
      },
      "nodes": [
        {
          "label": "市场全景",
          "desc": "逐季逐月的资本节奏与拐点"
        },
        {
          "label": "行业分布",
          "desc": "五大赛道的资金占比结构"
        },
        {
          "label": "轮次结构",
          "desc": "从种子到 D+ 的集中度"
        },
        {
          "label": "产业链分层",
          "desc": "上游—中游—下游的传导"
        },
        {
          "label": "典型案例",
          "desc": "头部玩家的路径剖析"
        }
      ],
      "nodeCount": 5,
      "focusEnabled": false,
      "focusIndex": 0,
      "coreFlow": true,
      "showSpokes": true,
      "showOrbit": true,
      "showIndex": true,
      "showDesc": true,
      "scheme": "green",
      "emphasis": "ticket",
      "breath": 55,
      "magnet": true,
      "aurora": true,
      "auroraSpeed": 1
    }
  },
  {
    "key": "theme02_page066",
    "themeKey": "theme02",
    "pageNumber": 66,
    "layout": "THEME02-066",
    "slot": "spheres",
    "label": "三球串联 · Spheres",
    "bgClass": "",
    "controls": [
      {
        "key": "scheme",
        "label": "配色方案",
        "type": "enum",
        "default": "green",
        "options": [
          [
            "green",
            "霓虹绿"
          ],
          [
            "violet",
            "炫光紫"
          ]
        ],
        "desc": "切换整页炫光配色。",
        "publicKey": "scheme",
        "publicLabel": "配色方案",
        "description": "切换整页炫光配色。"
      },
      {
        "key": "emphasis",
        "label": "强调卡片",
        "type": "enum",
        "default": "ticket",
        "options": [
          [
            "default",
            "默认发光"
          ],
          [
            "ticket",
            "炫光票卡"
          ]
        ],
        "desc": "切换焦点卡片的发光质感。",
        "publicKey": "emphasis",
        "publicLabel": "强调卡片",
        "description": "切换焦点卡片的发光质感。"
      },
      {
        "key": "breath",
        "label": "内光呼吸感",
        "type": "slider",
        "default": 55,
        "min": 0,
        "max": 100,
        "step": 1,
        "desc": "炫光票卡模式下的内光呼吸强度。",
        "publicKey": "breath",
        "publicLabel": "内光呼吸感",
        "description": "炫光票卡模式下的内光呼吸强度。"
      },
      {
        "key": "magnet",
        "label": "磁吸悬停",
        "type": "toggle",
        "default": true,
        "desc": "焦点卡片跟随指针产生轻微位移和倾斜。",
        "publicKey": "magnet",
        "publicLabel": "磁吸悬停",
        "description": "焦点卡片跟随指针产生轻微位移和倾斜。"
      },
      {
        "key": "aurora",
        "label": "渐变流光",
        "type": "toggle",
        "default": true,
        "desc": "开启标题、数字和图表重点元素的流光渐变。",
        "publicKey": "aurora",
        "publicLabel": "渐变流光",
        "description": "开启标题、数字和图表重点元素的流光渐变。"
      },
      {
        "key": "auroraSpeed",
        "label": "流光速度",
        "type": "slider",
        "default": 1,
        "min": 0.4,
        "max": 3,
        "step": 0.1,
        "desc": "流光动画速度。",
        "publicKey": "auroraSpeed",
        "publicLabel": "流光速度",
        "description": "流光动画速度。"
      },
      {
        "key": "nodeCount",
        "label": "球体数量",
        "type": "number",
        "default": 3,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "横向并列的阶段球数量",
        "publicKey": "nodeCount",
        "publicLabel": "球体数量",
        "description": "横向并列的阶段球数量"
      },
      {
        "key": "focusEnabled",
        "label": "重点强调",
        "type": "toggle",
        "default": true,
        "desc": "是否高亮其中一个阶段",
        "publicKey": "focusEnabled",
        "publicLabel": "重点强调",
        "description": "是否高亮其中一个阶段"
      },
      {
        "key": "focusIndex",
        "label": "强调项",
        "type": "number",
        "default": 2,
        "min": 0,
        "step": 1,
        "desc": "被强调阶段的序号",
        "publicKey": "focusIndex",
        "publicLabel": "强调项",
        "description": "被强调阶段的序号"
      },
      {
        "key": "showConnectors",
        "label": "连接标签",
        "type": "toggle",
        "default": true,
        "desc": "球之间的连接标签显隐",
        "publicKey": "showConnectors",
        "publicLabel": "连接标签",
        "description": "球之间的连接标签显隐"
      },
      {
        "key": "showDesc",
        "label": "球内说明",
        "type": "toggle",
        "default": true,
        "desc": "球内说明文案显隐",
        "publicKey": "showDesc",
        "publicLabel": "球内说明",
        "description": "球内说明文案显隐"
      },
      {
        "key": "showGhost",
        "label": "背景大字",
        "type": "toggle",
        "default": true,
        "desc": "标题后的背景大字英文显隐",
        "publicKey": "showGhost",
        "publicLabel": "背景大字",
        "description": "标题后的背景大字英文显隐"
      }
    ],
    "defaultProps": {
      "kicker": "THESIS · 资本主线",
      "title": "资本逻辑 ",
      "titleEm": "三段演进",
      "index": "65 / 73",
      "lead": "2024 的资本主线，是从「叙事驱动」转向「兑现驱动」——市场开始分辨谁能把技术真正跑成可持续收入。",
      "ghost": "narrative to revenue",
      "nodes": [
        {
          "tag": "PHASE 01",
          "label": "叙事驱动",
          "desc": "AGI 故事吸金，估值脱离当期收入，资本押注未来市值。"
        },
        {
          "tag": "PHASE 02",
          "label": "分化验证",
          "desc": "资本开始分辨商业闭环，头部集中、长尾承压。"
        },
        {
          "tag": "PHASE 03",
          "label": "兑现驱动",
          "desc": "收入确定性、客户留存成为新的估值标尺。"
        }
      ],
      "nodeCount": 3,
      "connectors": [
        {
          "label": "估值高企"
        },
        {
          "label": "理性回归"
        },
        {
          "label": "价值重估"
        }
      ],
      "focusEnabled": true,
      "focusIndex": 2,
      "showConnectors": true,
      "showDesc": true,
      "showGhost": true,
      "scheme": "green",
      "emphasis": "ticket",
      "breath": 55,
      "magnet": true,
      "aurora": true,
      "auroraSpeed": 1
    }
  },
  {
    "key": "theme02_page067",
    "themeKey": "theme02",
    "pageNumber": 67,
    "layout": "THEME02-067",
    "slot": "mindmap",
    "label": "机会图谱 · Mindmap",
    "bgClass": "",
    "controls": [
      {
        "key": "scheme",
        "label": "配色方案",
        "type": "enum",
        "default": "green",
        "options": [
          [
            "green",
            "霓虹绿"
          ],
          [
            "violet",
            "炫光紫"
          ]
        ],
        "desc": "切换整页炫光配色。",
        "publicKey": "scheme",
        "publicLabel": "配色方案",
        "description": "切换整页炫光配色。"
      },
      {
        "key": "emphasis",
        "label": "强调卡片",
        "type": "enum",
        "default": "ticket",
        "options": [
          [
            "default",
            "默认发光"
          ],
          [
            "ticket",
            "炫光票卡"
          ]
        ],
        "desc": "切换焦点卡片的发光质感。",
        "publicKey": "emphasis",
        "publicLabel": "强调卡片",
        "description": "切换焦点卡片的发光质感。"
      },
      {
        "key": "breath",
        "label": "内光呼吸感",
        "type": "slider",
        "default": 55,
        "min": 0,
        "max": 100,
        "step": 1,
        "desc": "炫光票卡模式下的内光呼吸强度。",
        "publicKey": "breath",
        "publicLabel": "内光呼吸感",
        "description": "炫光票卡模式下的内光呼吸强度。"
      },
      {
        "key": "magnet",
        "label": "磁吸悬停",
        "type": "toggle",
        "default": true,
        "desc": "焦点卡片跟随指针产生轻微位移和倾斜。",
        "publicKey": "magnet",
        "publicLabel": "磁吸悬停",
        "description": "焦点卡片跟随指针产生轻微位移和倾斜。"
      },
      {
        "key": "aurora",
        "label": "渐变流光",
        "type": "toggle",
        "default": true,
        "desc": "开启标题、数字和图表重点元素的流光渐变。",
        "publicKey": "aurora",
        "publicLabel": "渐变流光",
        "description": "开启标题、数字和图表重点元素的流光渐变。"
      },
      {
        "key": "auroraSpeed",
        "label": "流光速度",
        "type": "slider",
        "default": 1,
        "min": 0.4,
        "max": 3,
        "step": 0.1,
        "desc": "流光动画速度。",
        "publicKey": "auroraSpeed",
        "publicLabel": "流光速度",
        "description": "流光动画速度。"
      },
      {
        "key": "branchCount",
        "label": "分支数量",
        "type": "number",
        "default": 3,
        "min": 2,
        "max": 3,
        "step": 1,
        "desc": "分支节点数量",
        "publicKey": "branchCount",
        "publicLabel": "分支数量",
        "description": "分支节点数量"
      },
      {
        "key": "leafCount",
        "label": "叶子数量",
        "type": "number",
        "default": 3,
        "min": 1,
        "max": 3,
        "step": 1,
        "desc": "每个分支发散的叶子卡数量",
        "publicKey": "leafCount",
        "publicLabel": "叶子数量",
        "description": "每个分支发散的叶子卡数量"
      },
      {
        "key": "focusEnabled",
        "label": "重点强调",
        "type": "toggle",
        "default": false,
        "desc": "是否高亮某一分支及其叶子",
        "publicKey": "focusEnabled",
        "publicLabel": "重点强调",
        "description": "是否高亮某一分支及其叶子"
      },
      {
        "key": "focusIndex",
        "label": "强调项",
        "type": "number",
        "default": 1,
        "min": 0,
        "step": 1,
        "desc": "被强调分支的序号",
        "publicKey": "focusIndex",
        "publicLabel": "强调项",
        "description": "被强调分支的序号"
      },
      {
        "key": "showLeaves",
        "label": "叶子卡",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏叶子卡",
        "publicKey": "showLeaves",
        "publicLabel": "叶子卡",
        "description": "显示/隐藏叶子卡"
      },
      {
        "key": "showSub",
        "label": "分支副标题",
        "type": "toggle",
        "default": true,
        "desc": "分支副标题显隐",
        "publicKey": "showSub",
        "publicLabel": "分支副标题",
        "description": "分支副标题显隐"
      },
      {
        "key": "showConnectors",
        "label": "连接线",
        "type": "toggle",
        "default": true,
        "desc": "层级连接线显隐",
        "publicKey": "showConnectors",
        "publicLabel": "连接线",
        "description": "层级连接线显隐"
      },
      {
        "key": "coreFlow",
        "label": "中心流光",
        "type": "toggle",
        "default": true,
        "desc": "中心球体的荧光流动动效",
        "publicKey": "coreFlow",
        "publicLabel": "中心流光",
        "description": "中心球体的荧光流动动效"
      }
    ],
    "defaultProps": {
      "kicker": "OPPORTUNITY · 机会图谱",
      "title": "看好方向 ",
      "titleEm": "三维机会",
      "index": "66 / 73",
      "core": {
        "label": "核心机会"
      },
      "branches": [
        {
          "label": "垂直应用",
          "sub": "Vertical AI",
          "leaves": [
            {
              "title": "企业搜索",
              "desc": "Glean · 嵌入刚性工作流"
            },
            {
              "title": "法律 AI",
              "desc": "Harvey · 已验证 PMF"
            },
            {
              "title": "场景闭环",
              "desc": "付费留存与续约清晰"
            }
          ]
        },
        {
          "label": "基础设施中游",
          "sub": "Infrastructure",
          "leaves": [
            {
              "title": "数据标注",
              "desc": "Scale AI · 训练刚需"
            },
            {
              "title": "向量数据库",
              "desc": "Pinecone · 检索底座"
            },
            {
              "title": "卖铲子逻辑",
              "desc": "需求来自模型训练推理"
            }
          ]
        },
        {
          "label": "具身智能",
          "sub": "Embodied AI",
          "leaves": [
            {
              "title": "人形机器人",
              "desc": "Figure AI · 长周期硬科技"
            },
            {
              "title": "自动驾驶",
              "desc": "多模态感知积累深厚"
            },
            {
              "title": "技术壁垒",
              "desc": "资本与时间双重护城河"
            }
          ]
        }
      ],
      "branchCount": 3,
      "leafCount": 3,
      "focusEnabled": false,
      "focusIndex": 1,
      "showLeaves": true,
      "showSub": true,
      "showConnectors": true,
      "coreFlow": true,
      "scheme": "green",
      "emphasis": "ticket",
      "breath": 55,
      "magnet": true,
      "aurora": true,
      "auroraSpeed": 1
    }
  },
  {
    "key": "theme02_page068",
    "themeKey": "theme02",
    "pageNumber": 68,
    "layout": "THEME02-068",
    "slot": "sunburst",
    "label": "资本去向 · Sunburst",
    "bgClass": "",
    "controls": [
      {
        "key": "scheme",
        "label": "配色方案",
        "type": "enum",
        "default": "green",
        "options": [
          [
            "green",
            "霓虹绿"
          ],
          [
            "violet",
            "炫光紫"
          ]
        ],
        "desc": "切换整页炫光配色。",
        "publicKey": "scheme",
        "publicLabel": "配色方案",
        "description": "切换整页炫光配色。"
      },
      {
        "key": "emphasis",
        "label": "强调卡片",
        "type": "enum",
        "default": "ticket",
        "options": [
          [
            "default",
            "默认发光"
          ],
          [
            "ticket",
            "炫光票卡"
          ]
        ],
        "desc": "切换焦点卡片的发光质感。",
        "publicKey": "emphasis",
        "publicLabel": "强调卡片",
        "description": "切换焦点卡片的发光质感。"
      },
      {
        "key": "breath",
        "label": "内光呼吸感",
        "type": "slider",
        "default": 55,
        "min": 0,
        "max": 100,
        "step": 1,
        "desc": "炫光票卡模式下的内光呼吸强度。",
        "publicKey": "breath",
        "publicLabel": "内光呼吸感",
        "description": "炫光票卡模式下的内光呼吸强度。"
      },
      {
        "key": "magnet",
        "label": "磁吸悬停",
        "type": "toggle",
        "default": true,
        "desc": "焦点卡片跟随指针产生轻微位移和倾斜。",
        "publicKey": "magnet",
        "publicLabel": "磁吸悬停",
        "description": "焦点卡片跟随指针产生轻微位移和倾斜。"
      },
      {
        "key": "aurora",
        "label": "渐变流光",
        "type": "toggle",
        "default": true,
        "desc": "开启标题、数字和图表重点元素的流光渐变。",
        "publicKey": "aurora",
        "publicLabel": "渐变流光",
        "description": "开启标题、数字和图表重点元素的流光渐变。"
      },
      {
        "key": "auroraSpeed",
        "label": "流光速度",
        "type": "slider",
        "default": 1,
        "min": 0.4,
        "max": 3,
        "step": 0.1,
        "desc": "流光动画速度。",
        "publicKey": "auroraSpeed",
        "publicLabel": "流光速度",
        "description": "流光动画速度。"
      },
      {
        "key": "groupCount",
        "label": "板块数量",
        "type": "number",
        "default": 3,
        "min": 1,
        "step": 1,
        "desc": "旭日图展示的顶层板块数量",
        "publicKey": "groupCount",
        "publicLabel": "板块数量",
        "description": "旭日图展示的顶层板块数量"
      },
      {
        "key": "focusEnabled",
        "label": "重点强调",
        "type": "toggle",
        "default": true,
        "desc": "辉光强调某一板块（其余淡出）",
        "publicKey": "focusEnabled",
        "publicLabel": "重点强调",
        "description": "辉光强调某一板块（其余淡出）"
      },
      {
        "key": "focusIndex",
        "label": "强调项",
        "type": "number",
        "default": 0,
        "min": 0,
        "step": 1,
        "desc": "被强调板块的序号",
        "publicKey": "focusIndex",
        "publicLabel": "强调项",
        "description": "被强调板块的序号"
      },
      {
        "key": "showInnerLabels",
        "label": "板块标签",
        "type": "toggle",
        "default": true,
        "desc": "内环板块标签显隐",
        "publicKey": "showInnerLabels",
        "publicLabel": "板块标签",
        "description": "内环板块标签显隐"
      },
      {
        "key": "showValueLabels",
        "label": "子项数值",
        "type": "toggle",
        "default": true,
        "desc": "外环子项数值显隐",
        "publicKey": "showValueLabels",
        "publicLabel": "子项数值",
        "description": "外环子项数值显隐"
      },
      {
        "key": "showLegend",
        "label": "右侧明细",
        "type": "toggle",
        "default": true,
        "desc": "右侧明细图例显隐",
        "publicKey": "showLegend",
        "publicLabel": "右侧明细",
        "description": "右侧明细图例显隐"
      }
    ],
    "defaultProps": {
      "kicker": "SUNBURST · 资本去向",
      "title": "970 亿美元 ",
      "titleEm": "层层拆解",
      "lead": "内环是三大板块、外环是子赛道——角度越宽，吸金越多。资本高度向「模型层 + 算力底座」聚拢。",
      "groups": [
        {
          "label": "模型层",
          "children": [
            {
              "label": "通用大模型",
              "value": 380
            },
            {
              "label": "开源 / 专用模型",
              "value": 90
            }
          ]
        },
        {
          "label": "基础设施",
          "children": [
            {
              "label": "算力云",
              "value": 210
            },
            {
              "label": "AI 芯片",
              "value": 95
            },
            {
              "label": "数据底座",
              "value": 45
            }
          ]
        },
        {
          "label": "应用层",
          "children": [
            {
              "label": "企业级应用",
              "value": 90
            },
            {
              "label": "AI 搜索 / 消费",
              "value": 35
            },
            {
              "label": "行业垂直",
              "value": 25
            }
          ]
        }
      ],
      "unit": "亿美元",
      "centerLabel": "全年总额",
      "groupCount": 3,
      "focusEnabled": true,
      "focusIndex": 0,
      "showInnerLabels": true,
      "showValueLabels": true,
      "showLegend": true,
      "scheme": "green",
      "emphasis": "ticket",
      "breath": 55,
      "magnet": true,
      "aurora": true,
      "auroraSpeed": 1,
      "index": "67 / 73"
    }
  },
  {
    "key": "theme02_page069",
    "themeKey": "theme02",
    "pageNumber": 69,
    "layout": "THEME02-069",
    "slot": "bump",
    "label": "名次变迁 · Bump",
    "bgClass": "",
    "controls": [
      {
        "key": "scheme",
        "label": "配色方案",
        "type": "enum",
        "default": "green",
        "options": [
          [
            "green",
            "霓虹绿"
          ],
          [
            "violet",
            "炫光紫"
          ]
        ],
        "desc": "切换整页炫光配色。",
        "publicKey": "scheme",
        "publicLabel": "配色方案",
        "description": "切换整页炫光配色。"
      },
      {
        "key": "emphasis",
        "label": "强调卡片",
        "type": "enum",
        "default": "ticket",
        "options": [
          [
            "default",
            "默认发光"
          ],
          [
            "ticket",
            "炫光票卡"
          ]
        ],
        "desc": "切换焦点卡片的发光质感。",
        "publicKey": "emphasis",
        "publicLabel": "强调卡片",
        "description": "切换焦点卡片的发光质感。"
      },
      {
        "key": "breath",
        "label": "内光呼吸感",
        "type": "slider",
        "default": 55,
        "min": 0,
        "max": 100,
        "step": 1,
        "desc": "炫光票卡模式下的内光呼吸强度。",
        "publicKey": "breath",
        "publicLabel": "内光呼吸感",
        "description": "炫光票卡模式下的内光呼吸强度。"
      },
      {
        "key": "magnet",
        "label": "磁吸悬停",
        "type": "toggle",
        "default": true,
        "desc": "焦点卡片跟随指针产生轻微位移和倾斜。",
        "publicKey": "magnet",
        "publicLabel": "磁吸悬停",
        "description": "焦点卡片跟随指针产生轻微位移和倾斜。"
      },
      {
        "key": "aurora",
        "label": "渐变流光",
        "type": "toggle",
        "default": true,
        "desc": "开启标题、数字和图表重点元素的流光渐变。",
        "publicKey": "aurora",
        "publicLabel": "渐变流光",
        "description": "开启标题、数字和图表重点元素的流光渐变。"
      },
      {
        "key": "auroraSpeed",
        "label": "流光速度",
        "type": "slider",
        "default": 1,
        "min": 0.4,
        "max": 3,
        "step": 0.1,
        "desc": "流光动画速度。",
        "publicKey": "auroraSpeed",
        "publicLabel": "流光速度",
        "description": "流光动画速度。"
      },
      {
        "key": "itemCount",
        "label": "条目数量",
        "type": "number",
        "default": 5,
        "min": 2,
        "step": 1,
        "desc": "名次图展示的条目数量",
        "publicKey": "itemCount",
        "publicLabel": "条目数量",
        "description": "名次图展示的条目数量"
      },
      {
        "key": "focusEnabled",
        "label": "重点强调",
        "type": "toggle",
        "default": true,
        "desc": "辉光强调某一条（其余淡出）",
        "publicKey": "focusEnabled",
        "publicLabel": "重点强调",
        "description": "辉光强调某一条（其余淡出）"
      },
      {
        "key": "focusIndex",
        "label": "强调项",
        "type": "number",
        "default": 1,
        "min": 0,
        "step": 1,
        "desc": "被强调条目的序号",
        "publicKey": "focusIndex",
        "publicLabel": "强调项",
        "description": "被强调条目的序号"
      },
      {
        "key": "showDots",
        "label": "端点圆点",
        "type": "toggle",
        "default": true,
        "desc": "各期端点圆点显隐",
        "publicKey": "showDots",
        "publicLabel": "端点圆点",
        "description": "各期端点圆点显隐"
      },
      {
        "key": "showRankAxis",
        "label": "名次刻度",
        "type": "toggle",
        "default": true,
        "desc": "左侧名次刻度显隐",
        "publicKey": "showRankAxis",
        "publicLabel": "名次刻度",
        "description": "左侧名次刻度显隐"
      },
      {
        "key": "showEndLabels",
        "label": "两端名称",
        "type": "toggle",
        "default": true,
        "desc": "两端条目名称显隐",
        "publicKey": "showEndLabels",
        "publicLabel": "两端名称",
        "description": "两端条目名称显隐"
      }
    ],
    "defaultProps": {
      "kicker": "BUMP · 名次变迁",
      "title": "四个季度 ",
      "titleEm": "赛道排位赛",
      "lead": "按季度吸金额给五大赛道排名——算力底座在 Q3 一度登顶，数据平台则一路下滑，资本的注意力在持续换位。",
      "periods": [
        "2024 · Q1",
        "2024 · Q2",
        "2024 · Q3",
        "2024 · Q4"
      ],
      "items": [
        {
          "label": "通用大模型",
          "ranks": [
            1,
            1,
            2,
            1
          ]
        },
        {
          "label": "算力底座",
          "ranks": [
            3,
            2,
            1,
            2
          ]
        },
        {
          "label": "数据平台",
          "ranks": [
            2,
            4,
            4,
            3
          ]
        },
        {
          "label": "企业级应用",
          "ranks": [
            4,
            3,
            3,
            4
          ]
        },
        {
          "label": "AI 芯片",
          "ranks": [
            5,
            5,
            5,
            5
          ]
        }
      ],
      "itemCount": 5,
      "focusEnabled": true,
      "focusIndex": 1,
      "showDots": true,
      "showRankAxis": true,
      "showEndLabels": true,
      "scheme": "green",
      "emphasis": "ticket",
      "breath": 55,
      "magnet": true,
      "aurora": true,
      "auroraSpeed": 1,
      "index": "68 / 73"
    }
  },
  {
    "key": "theme02_page070",
    "themeKey": "theme02",
    "pageNumber": 70,
    "layout": "THEME02-070",
    "slot": "masonry",
    "label": "瀑布流图墙 · Masonry",
    "bgClass": "",
    "controls": [
      {
        "key": "scheme",
        "label": "配色方案",
        "type": "enum",
        "default": "green",
        "options": [
          [
            "green",
            "霓虹绿"
          ],
          [
            "violet",
            "炫光紫"
          ]
        ],
        "desc": "切换整页炫光配色。",
        "publicKey": "scheme",
        "publicLabel": "配色方案",
        "description": "切换整页炫光配色。"
      },
      {
        "key": "emphasis",
        "label": "强调卡片",
        "type": "enum",
        "default": "ticket",
        "options": [
          [
            "default",
            "默认发光"
          ],
          [
            "ticket",
            "炫光票卡"
          ]
        ],
        "desc": "切换焦点卡片的发光质感。",
        "publicKey": "emphasis",
        "publicLabel": "强调卡片",
        "description": "切换焦点卡片的发光质感。"
      },
      {
        "key": "breath",
        "label": "内光呼吸感",
        "type": "slider",
        "default": 55,
        "min": 0,
        "max": 100,
        "step": 1,
        "desc": "炫光票卡模式下的内光呼吸强度。",
        "publicKey": "breath",
        "publicLabel": "内光呼吸感",
        "description": "炫光票卡模式下的内光呼吸强度。"
      },
      {
        "key": "magnet",
        "label": "磁吸悬停",
        "type": "toggle",
        "default": true,
        "desc": "焦点卡片跟随指针产生轻微位移和倾斜。",
        "publicKey": "magnet",
        "publicLabel": "磁吸悬停",
        "description": "焦点卡片跟随指针产生轻微位移和倾斜。"
      },
      {
        "key": "aurora",
        "label": "渐变流光",
        "type": "toggle",
        "default": true,
        "desc": "开启标题、数字和图表重点元素的流光渐变。",
        "publicKey": "aurora",
        "publicLabel": "渐变流光",
        "description": "开启标题、数字和图表重点元素的流光渐变。"
      },
      {
        "key": "auroraSpeed",
        "label": "流光速度",
        "type": "slider",
        "default": 1,
        "min": 0.4,
        "max": 3,
        "step": 0.1,
        "desc": "流光动画速度。",
        "publicKey": "auroraSpeed",
        "publicLabel": "流光速度",
        "description": "流光动画速度。"
      },
      {
        "key": "tileCount",
        "label": "图片数量",
        "type": "number",
        "default": 7,
        "min": 0,
        "step": 1,
        "desc": "瀑布流图片块数量（0 = 纯标题）",
        "publicKey": "tileCount",
        "publicLabel": "图片数量",
        "description": "瀑布流图片块数量（0 = 纯标题）"
      },
      {
        "key": "columns",
        "label": "列数",
        "type": "number",
        "default": 3,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "瀑布流列数（自适应错落）",
        "publicKey": "columns",
        "publicLabel": "列数",
        "description": "瀑布流列数（自适应错落）"
      },
      {
        "key": "fit",
        "label": "贴合方式",
        "type": "enum",
        "default": "cover",
        "options": [
          {
            "value": "cover",
            "label": "填充（裁切）"
          },
          {
            "value": "contain",
            "label": "完整（不裁切）"
          }
        ],
        "desc": "图片在块内填充或完整显示",
        "publicKey": "fit",
        "publicLabel": "贴合方式",
        "description": "图片在块内填充或完整显示"
      },
      {
        "key": "focusEnabled",
        "label": "重点强调",
        "type": "toggle",
        "default": false,
        "desc": "辉光强调某一块（描边）",
        "publicKey": "focusEnabled",
        "publicLabel": "重点强调",
        "description": "辉光强调某一块（描边）"
      },
      {
        "key": "focusIndex",
        "label": "强调项",
        "type": "number",
        "default": 0,
        "min": 0,
        "step": 1,
        "desc": "被强调块的序号",
        "publicKey": "focusIndex",
        "publicLabel": "强调项",
        "description": "被强调块的序号"
      },
      {
        "key": "showCaptions",
        "label": "图注",
        "type": "toggle",
        "default": true,
        "desc": "显示/隐藏图注",
        "publicKey": "showCaptions",
        "publicLabel": "图注",
        "description": "显示/隐藏图注"
      }
    ],
    "defaultProps": {
      "kicker": "GALLERY · 资本图墙",
      "title": "一面墙 ",
      "titleEm": "看尽头部面孔",
      "lead": "模型实验室、算力云、芯片与应用——把这一年最受资本追捧的面孔错落铺开，越大的块，越是焦点。",
      "captions": [
        "OpenAI · 通用大模型",
        "Anthropic · 安全对齐",
        "xAI · 实时多模态",
        "CoreWeave · 算力云",
        "Scale AI · 数据标注",
        "Databricks · 数据平台",
        "Mistral · 开源模型",
        "Perplexity · AI 搜索",
        "Cerebras · AI 芯片",
        "Glean · 企业搜索"
      ],
      "tileCount": 7,
      "columns": 3,
      "fit": "cover",
      "focusEnabled": false,
      "focusIndex": 0,
      "showCaptions": true,
      "images": [],
      "scheme": "green",
      "emphasis": "ticket",
      "breath": 55,
      "magnet": true,
      "aurora": true,
      "auroraSpeed": 1,
      "index": "69 / 73"
    }
  },
  {
    "key": "theme02_page071",
    "themeKey": "theme02",
    "pageNumber": 71,
    "layout": "THEME02-071",
    "slot": "venn",
    "label": "维恩交集 · Venn",
    "bgClass": "",
    "controls": [
      {
        "key": "scheme",
        "label": "配色方案",
        "type": "enum",
        "default": "green",
        "options": [
          [
            "green",
            "霓虹绿"
          ],
          [
            "violet",
            "炫光紫"
          ]
        ],
        "desc": "切换整页炫光配色。",
        "publicKey": "scheme",
        "publicLabel": "配色方案",
        "description": "切换整页炫光配色。"
      },
      {
        "key": "emphasis",
        "label": "强调卡片",
        "type": "enum",
        "default": "ticket",
        "options": [
          [
            "default",
            "默认发光"
          ],
          [
            "ticket",
            "炫光票卡"
          ]
        ],
        "desc": "切换焦点卡片的发光质感。",
        "publicKey": "emphasis",
        "publicLabel": "强调卡片",
        "description": "切换焦点卡片的发光质感。"
      },
      {
        "key": "breath",
        "label": "内光呼吸感",
        "type": "slider",
        "default": 55,
        "min": 0,
        "max": 100,
        "step": 1,
        "desc": "炫光票卡模式下的内光呼吸强度。",
        "publicKey": "breath",
        "publicLabel": "内光呼吸感",
        "description": "炫光票卡模式下的内光呼吸强度。"
      },
      {
        "key": "magnet",
        "label": "磁吸悬停",
        "type": "toggle",
        "default": true,
        "desc": "焦点卡片跟随指针产生轻微位移和倾斜。",
        "publicKey": "magnet",
        "publicLabel": "磁吸悬停",
        "description": "焦点卡片跟随指针产生轻微位移和倾斜。"
      },
      {
        "key": "aurora",
        "label": "渐变流光",
        "type": "toggle",
        "default": true,
        "desc": "开启标题、数字和图表重点元素的流光渐变。",
        "publicKey": "aurora",
        "publicLabel": "渐变流光",
        "description": "开启标题、数字和图表重点元素的流光渐变。"
      },
      {
        "key": "auroraSpeed",
        "label": "流光速度",
        "type": "slider",
        "default": 1,
        "min": 0.4,
        "max": 3,
        "step": 0.1,
        "desc": "流光动画速度。",
        "publicKey": "auroraSpeed",
        "publicLabel": "流光速度",
        "description": "流光动画速度。"
      },
      {
        "key": "setCount",
        "label": "集合数量",
        "type": "number",
        "default": 3,
        "min": 2,
        "max": 3,
        "step": 1,
        "desc": "维恩图集合数量（2–3）",
        "publicKey": "setCount",
        "publicLabel": "集合数量",
        "description": "维恩图集合数量（2–3）"
      },
      {
        "key": "focusEnabled",
        "label": "重点强调",
        "type": "toggle",
        "default": false,
        "desc": "辉光强调某一集合（其余淡出）",
        "publicKey": "focusEnabled",
        "publicLabel": "重点强调",
        "description": "辉光强调某一集合（其余淡出）"
      },
      {
        "key": "focusIndex",
        "label": "强调项",
        "type": "number",
        "default": 0,
        "min": 0,
        "step": 1,
        "desc": "被强调集合的序号",
        "publicKey": "focusIndex",
        "publicLabel": "强调项",
        "description": "被强调集合的序号"
      },
      {
        "key": "showPairs",
        "label": "配对交集",
        "type": "toggle",
        "default": true,
        "desc": "两两交集说明显隐",
        "publicKey": "showPairs",
        "publicLabel": "配对交集",
        "description": "两两交集说明显隐"
      },
      {
        "key": "showCenter",
        "label": "中心交集",
        "type": "toggle",
        "default": true,
        "desc": "中心交集节点显隐",
        "publicKey": "showCenter",
        "publicLabel": "中心交集",
        "description": "中心交集节点显隐"
      },
      {
        "key": "showSub",
        "label": "要素副标题",
        "type": "toggle",
        "default": true,
        "desc": "集合副标题显隐",
        "publicKey": "showSub",
        "publicLabel": "要素副标题",
        "description": "集合副标题显隐"
      }
    ],
    "defaultProps": {
      "kicker": "VENN · 赢家方程式",
      "title": "稀缺要素的 ",
      "titleEm": "交集",
      "lead": "算力、数据、顶尖人才——单点优势已不足以胜出。真正拉开差距的，是同时握住三者的那一小撮交集。",
      "sets": [
        {
          "label": "算力",
          "sub": "万卡级训练集群"
        },
        {
          "label": "数据",
          "sub": "高质量 + 专有语料"
        },
        {
          "label": "顶尖人才",
          "sub": "前沿研究与对齐"
        }
      ],
      "pairs": [
        {
          "label": "规模化预训练"
        },
        {
          "label": "对齐与精调"
        },
        {
          "label": "前沿研究突破"
        }
      ],
      "centerLabel": "头部护城河",
      "centerSub": "三者俱备者寥寥可数",
      "setCount": 3,
      "focusEnabled": false,
      "focusIndex": 0,
      "showPairs": true,
      "showCenter": true,
      "showSub": true,
      "scheme": "green",
      "emphasis": "ticket",
      "breath": 55,
      "magnet": true,
      "aurora": true,
      "auroraSpeed": 1,
      "index": "70 / 73"
    }
  },
  {
    "key": "theme02_page072",
    "themeKey": "theme02",
    "pageNumber": 72,
    "layout": "THEME02-072",
    "slot": "stream",
    "label": "主题河流 · Stream",
    "bgClass": "",
    "controls": [
      {
        "key": "scheme",
        "label": "配色方案",
        "type": "enum",
        "default": "green",
        "options": [
          [
            "green",
            "霓虹绿"
          ],
          [
            "violet",
            "炫光紫"
          ]
        ],
        "desc": "切换整页炫光配色。",
        "publicKey": "scheme",
        "publicLabel": "配色方案",
        "description": "切换整页炫光配色。"
      },
      {
        "key": "emphasis",
        "label": "强调卡片",
        "type": "enum",
        "default": "ticket",
        "options": [
          [
            "default",
            "默认发光"
          ],
          [
            "ticket",
            "炫光票卡"
          ]
        ],
        "desc": "切换焦点卡片的发光质感。",
        "publicKey": "emphasis",
        "publicLabel": "强调卡片",
        "description": "切换焦点卡片的发光质感。"
      },
      {
        "key": "breath",
        "label": "内光呼吸感",
        "type": "slider",
        "default": 55,
        "min": 0,
        "max": 100,
        "step": 1,
        "desc": "炫光票卡模式下的内光呼吸强度。",
        "publicKey": "breath",
        "publicLabel": "内光呼吸感",
        "description": "炫光票卡模式下的内光呼吸强度。"
      },
      {
        "key": "magnet",
        "label": "磁吸悬停",
        "type": "toggle",
        "default": true,
        "desc": "焦点卡片跟随指针产生轻微位移和倾斜。",
        "publicKey": "magnet",
        "publicLabel": "磁吸悬停",
        "description": "焦点卡片跟随指针产生轻微位移和倾斜。"
      },
      {
        "key": "aurora",
        "label": "渐变流光",
        "type": "toggle",
        "default": true,
        "desc": "开启标题、数字和图表重点元素的流光渐变。",
        "publicKey": "aurora",
        "publicLabel": "渐变流光",
        "description": "开启标题、数字和图表重点元素的流光渐变。"
      },
      {
        "key": "auroraSpeed",
        "label": "流光速度",
        "type": "slider",
        "default": 1,
        "min": 0.4,
        "max": 3,
        "step": 0.1,
        "desc": "流光动画速度。",
        "publicKey": "auroraSpeed",
        "publicLabel": "流光速度",
        "description": "流光动画速度。"
      },
      {
        "key": "baseline",
        "label": "基线形态",
        "type": "enum",
        "default": "center",
        "options": [
          {
            "value": "center",
            "label": "中心河流"
          },
          {
            "value": "bottom",
            "label": "底部堆叠"
          }
        ],
        "desc": "中心对称基线(ThemeRiver) / 底部堆叠面积",
        "publicKey": "baseline",
        "publicLabel": "基线形态",
        "description": "中心对称基线(ThemeRiver) / 底部堆叠面积"
      },
      {
        "key": "pointCount",
        "label": "时点数量",
        "type": "number",
        "default": 12,
        "min": 4,
        "step": 1,
        "desc": "展示的时点（月/期）数量",
        "publicKey": "pointCount",
        "publicLabel": "时点数量",
        "description": "展示的时点（月/期）数量"
      },
      {
        "key": "focusEnabled",
        "label": "重点强调",
        "type": "toggle",
        "default": true,
        "desc": "辉光强调某一条带（其余淡出 + 峰值读数）",
        "publicKey": "focusEnabled",
        "publicLabel": "重点强调",
        "description": "辉光强调某一条带（其余淡出 + 峰值读数）"
      },
      {
        "key": "focusIndex",
        "label": "强调项",
        "type": "number",
        "default": 0,
        "min": 0,
        "step": 1,
        "desc": "被强调分项的序号",
        "publicKey": "focusIndex",
        "publicLabel": "强调项",
        "description": "被强调分项的序号"
      },
      {
        "key": "showBaseline",
        "label": "基线",
        "type": "toggle",
        "default": true,
        "desc": "中心基线 / 底轴显隐",
        "publicKey": "showBaseline",
        "publicLabel": "基线",
        "description": "中心基线 / 底轴显隐"
      },
      {
        "key": "showAxis",
        "label": "时点刻度",
        "type": "toggle",
        "default": true,
        "desc": "横轴时点标签显隐",
        "publicKey": "showAxis",
        "publicLabel": "时点刻度",
        "description": "横轴时点标签显隐"
      },
      {
        "key": "showPeak",
        "label": "峰值读数",
        "type": "toggle",
        "default": true,
        "desc": "焦点带峰值数值显隐",
        "publicKey": "showValueLabels",
        "publicLabel": "峰值读数",
        "description": "焦点带峰值数值显隐"
      },
      {
        "key": "showLegend",
        "label": "图例",
        "type": "toggle",
        "default": true,
        "desc": "右侧分项图例显隐",
        "publicKey": "showLegend",
        "publicLabel": "图例",
        "description": "右侧分项图例显隐"
      }
    ],
    "defaultProps": {
      "kicker": "STREAM · 月度赛道节律",
      "title": "一条会呼吸的 ",
      "titleEm": "资本河流",
      "lead": "把全年每月的 AI 融资额按赛道叠成一条河——河面越宽，当月吸金越多。通用大模型始终是最厚的主流，并在年末把整条河推向峰值。",
      "series": [
        {
          "key": "llm",
          "label": "通用大模型"
        },
        {
          "key": "app",
          "label": "应用层"
        },
        {
          "key": "infra",
          "label": "AI 基础设施"
        },
        {
          "key": "chip",
          "label": "AI 芯片"
        }
      ],
      "groups": [
        {
          "label": "01",
          "values": {
            "llm": 28,
            "app": 14,
            "infra": 12,
            "chip": 6
          }
        },
        {
          "label": "02",
          "values": {
            "llm": 22,
            "app": 12,
            "infra": 10,
            "chip": 5
          }
        },
        {
          "label": "03",
          "values": {
            "llm": 41,
            "app": 18,
            "infra": 16,
            "chip": 8
          }
        },
        {
          "label": "04",
          "values": {
            "llm": 35,
            "app": 20,
            "infra": 15,
            "chip": 7
          }
        },
        {
          "label": "05",
          "values": {
            "llm": 52,
            "app": 24,
            "infra": 22,
            "chip": 10
          }
        },
        {
          "label": "06",
          "values": {
            "llm": 44,
            "app": 26,
            "infra": 20,
            "chip": 9
          }
        },
        {
          "label": "07",
          "values": {
            "llm": 38,
            "app": 22,
            "infra": 18,
            "chip": 8
          }
        },
        {
          "label": "08",
          "values": {
            "llm": 30,
            "app": 19,
            "infra": 15,
            "chip": 7
          }
        },
        {
          "label": "09",
          "values": {
            "llm": 58,
            "app": 30,
            "infra": 26,
            "chip": 12
          }
        },
        {
          "label": "10",
          "values": {
            "llm": 49,
            "app": 28,
            "infra": 24,
            "chip": 11
          }
        },
        {
          "label": "11",
          "values": {
            "llm": 66,
            "app": 34,
            "infra": 30,
            "chip": 14
          }
        },
        {
          "label": "12",
          "values": {
            "llm": 72,
            "app": 40,
            "infra": 33,
            "chip": 16
          }
        }
      ],
      "pointCount": 12,
      "baseline": "center",
      "focusEnabled": true,
      "focusIndex": 0,
      "showBaseline": true,
      "showAxis": true,
      "showPeak": true,
      "showLegend": true,
      "valueSuffix": "亿",
      "scheme": "green",
      "emphasis": "ticket",
      "breath": 55,
      "magnet": true,
      "aurora": true,
      "auroraSpeed": 1,
      "index": "71 / 73"
    }
  },
  {
    "key": "theme02_page073",
    "themeKey": "theme02",
    "pageNumber": 73,
    "layout": "THEME02-073",
    "slot": "histogram",
    "label": "规模分布 · Distribution",
    "bgClass": "",
    "controls": [
      {
        "key": "scheme",
        "label": "配色方案",
        "type": "enum",
        "default": "green",
        "options": [
          [
            "green",
            "霓虹绿"
          ],
          [
            "violet",
            "炫光紫"
          ]
        ],
        "desc": "切换整页炫光配色。",
        "publicKey": "scheme",
        "publicLabel": "配色方案",
        "description": "切换整页炫光配色。"
      },
      {
        "key": "emphasis",
        "label": "强调卡片",
        "type": "enum",
        "default": "ticket",
        "options": [
          [
            "default",
            "默认发光"
          ],
          [
            "ticket",
            "炫光票卡"
          ]
        ],
        "desc": "切换焦点卡片的发光质感。",
        "publicKey": "emphasis",
        "publicLabel": "强调卡片",
        "description": "切换焦点卡片的发光质感。"
      },
      {
        "key": "breath",
        "label": "内光呼吸感",
        "type": "slider",
        "default": 55,
        "min": 0,
        "max": 100,
        "step": 1,
        "desc": "炫光票卡模式下的内光呼吸强度。",
        "publicKey": "breath",
        "publicLabel": "内光呼吸感",
        "description": "炫光票卡模式下的内光呼吸强度。"
      },
      {
        "key": "magnet",
        "label": "磁吸悬停",
        "type": "toggle",
        "default": true,
        "desc": "焦点卡片跟随指针产生轻微位移和倾斜。",
        "publicKey": "magnet",
        "publicLabel": "磁吸悬停",
        "description": "焦点卡片跟随指针产生轻微位移和倾斜。"
      },
      {
        "key": "aurora",
        "label": "渐变流光",
        "type": "toggle",
        "default": true,
        "desc": "开启标题、数字和图表重点元素的流光渐变。",
        "publicKey": "aurora",
        "publicLabel": "渐变流光",
        "description": "开启标题、数字和图表重点元素的流光渐变。"
      },
      {
        "key": "auroraSpeed",
        "label": "流光速度",
        "type": "slider",
        "default": 1,
        "min": 0.4,
        "max": 3,
        "step": 0.1,
        "desc": "流光动画速度。",
        "publicKey": "auroraSpeed",
        "publicLabel": "流光速度",
        "description": "流光动画速度。"
      },
      {
        "key": "layout",
        "label": "版式",
        "type": "enum",
        "default": "split",
        "options": [
          {
            "value": "split",
            "label": "左右分栏"
          },
          {
            "value": "stack",
            "label": "通栏横排"
          }
        ],
        "desc": "左陈述右数字 / 上陈述下数字横排",
        "publicKey": "layout",
        "publicLabel": "版式",
        "description": "左陈述右数字 / 上陈述下数字横排"
      },
      {
        "key": "pointCount",
        "label": "数字条目",
        "type": "number",
        "default": 4,
        "min": 2,
        "step": 1,
        "desc": "展示的数字条目数量",
        "publicKey": "itemCount",
        "publicLabel": "数字条目",
        "description": "展示的数字条目数量"
      },
      {
        "key": "focusEnabled",
        "label": "重点强调",
        "type": "toggle",
        "default": true,
        "desc": "辉光强调某一条数字",
        "publicKey": "focusEnabled",
        "publicLabel": "重点强调",
        "description": "辉光强调某一条数字"
      },
      {
        "key": "focusIndex",
        "label": "强调项",
        "type": "number",
        "default": 3,
        "min": 0,
        "step": 1,
        "desc": "被强调条目的序号",
        "publicKey": "focusIndex",
        "publicLabel": "强调项",
        "description": "被强调条目的序号"
      },
      {
        "key": "showLead",
        "label": "支撑导语",
        "type": "toggle",
        "default": true,
        "desc": "陈述下方支撑导语显隐",
        "publicKey": "showLead",
        "publicLabel": "支撑导语",
        "description": "陈述下方支撑导语显隐"
      },
      {
        "key": "showNote",
        "label": "条目注解",
        "type": "toggle",
        "default": true,
        "desc": "数字条目的一句注解显隐",
        "publicKey": "showNote",
        "publicLabel": "条目注解",
        "description": "数字条目的一句注解显隐"
      },
      {
        "key": "showRule",
        "label": "分隔线",
        "type": "toggle",
        "default": true,
        "desc": "条目分隔线 / 分栏竖线显隐",
        "publicKey": "showRule",
        "publicLabel": "分隔线",
        "description": "条目分隔线 / 分栏竖线显隐"
      }
    ],
    "defaultProps": {
      "kicker": "DISTRIBUTION · 单笔融资规模",
      "title": "钱不是平均分配的，而是 ",
      "titleEm": "长尾",
      "statement": "把每一笔融资按金额排开，绝大多数交易都停在亿元以内——",
      "statementEm": "真正拉长这条分布的，是屈指可数的十亿级超级轮。",
      "lead": "头部高度集中：最小的两档区间就装下了约六成笔数；而右尾虽稀，却决定了整年资本叙事的上限。",
      "points": [
        {
          "value": "107",
          "unit": "笔",
          "label": "全年大额融资事件",
          "note": "统计口径：单笔 ≥ 1 亿美元"
        },
        {
          "value": "61",
          "unit": "%",
          "label": "落在最小的两档区间",
          "note": "单笔 < 1 亿美元的密集区"
        },
        {
          "value": "0.9",
          "unit": "亿",
          "label": "单笔融资中位数",
          "note": "一半交易低于此体量"
        },
        {
          "value": "5",
          "unit": "笔",
          "label": "≥ 10 亿美元的超级轮",
          "note": "数量稀少，却把右尾拉得很长"
        }
      ],
      "pointCount": 4,
      "layout": "split",
      "focusEnabled": true,
      "focusIndex": 3,
      "showLead": true,
      "showNote": true,
      "showRule": true,
      "scheme": "green",
      "emphasis": "ticket",
      "breath": 55,
      "magnet": true,
      "aurora": true,
      "auroraSpeed": 1,
      "index": "72 / 73"
    }
  },
  {
    "key": "theme02_page074",
    "themeKey": "theme02",
    "pageNumber": 74,
    "layout": "THEME02-074",
    "slot": "closing",
    "label": "封底结语 · Closing",
    "bgClass": "",
    "controls": [
      {
        "key": "scheme",
        "label": "配色方案",
        "type": "enum",
        "default": "green",
        "options": [
          [
            "green",
            "霓虹绿"
          ],
          [
            "violet",
            "炫光紫"
          ]
        ],
        "desc": "切换整页炫光配色。",
        "publicKey": "scheme",
        "publicLabel": "配色方案",
        "description": "切换整页炫光配色。"
      },
      {
        "key": "emphasis",
        "label": "强调卡片",
        "type": "enum",
        "default": "ticket",
        "options": [
          [
            "default",
            "默认发光"
          ],
          [
            "ticket",
            "炫光票卡"
          ]
        ],
        "desc": "切换焦点卡片的发光质感。",
        "publicKey": "emphasis",
        "publicLabel": "强调卡片",
        "description": "切换焦点卡片的发光质感。"
      },
      {
        "key": "breath",
        "label": "内光呼吸感",
        "type": "slider",
        "default": 55,
        "min": 0,
        "max": 100,
        "step": 1,
        "desc": "炫光票卡模式下的内光呼吸强度。",
        "publicKey": "breath",
        "publicLabel": "内光呼吸感",
        "description": "炫光票卡模式下的内光呼吸强度。"
      },
      {
        "key": "magnet",
        "label": "磁吸悬停",
        "type": "toggle",
        "default": true,
        "desc": "焦点卡片跟随指针产生轻微位移和倾斜。",
        "publicKey": "magnet",
        "publicLabel": "磁吸悬停",
        "description": "焦点卡片跟随指针产生轻微位移和倾斜。"
      },
      {
        "key": "aurora",
        "label": "渐变流光",
        "type": "toggle",
        "default": true,
        "desc": "开启标题、数字和图表重点元素的流光渐变。",
        "publicKey": "aurora",
        "publicLabel": "渐变流光",
        "description": "开启标题、数字和图表重点元素的流光渐变。"
      },
      {
        "key": "auroraSpeed",
        "label": "流光速度",
        "type": "slider",
        "default": 1,
        "min": 0.4,
        "max": 3,
        "step": 0.1,
        "desc": "流光动画速度。",
        "publicKey": "auroraSpeed",
        "publicLabel": "流光速度",
        "description": "流光动画速度。"
      },
      {
        "key": "align",
        "label": "对齐",
        "type": "enum",
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
        "desc": "封底整体对齐方式",
        "publicKey": "align",
        "publicLabel": "对齐",
        "description": "封底整体对齐方式"
      },
      {
        "key": "showGhost",
        "label": "背景巨型字",
        "type": "toggle",
        "default": true,
        "desc": "背景描边巨型字（如 FIN）显隐",
        "publicKey": "showGhost",
        "publicLabel": "背景巨型字",
        "description": "背景描边巨型字（如 FIN）显隐"
      },
      {
        "key": "showMark",
        "label": "装饰引号",
        "type": "toggle",
        "default": true,
        "desc": "主张上方装饰引号显隐",
        "publicKey": "showMark",
        "publicLabel": "装饰引号",
        "description": "主张上方装饰引号显隐"
      },
      {
        "key": "showRule",
        "label": "发光分隔线",
        "type": "toggle",
        "default": true,
        "desc": "主张与说明之间的发光线显隐",
        "publicKey": "showRule",
        "publicLabel": "发光分隔线",
        "description": "主张与说明之间的发光线显隐"
      },
      {
        "key": "showSub",
        "label": "补充说明",
        "type": "toggle",
        "default": true,
        "desc": "主张下方补充说明显隐",
        "publicKey": "showSub",
        "publicLabel": "补充说明",
        "description": "主张下方补充说明显隐"
      },
      {
        "key": "showSignature",
        "label": "落款署名",
        "type": "toggle",
        "default": true,
        "desc": "底部报告名 / 日期 / 口径显隐",
        "publicKey": "showSignature",
        "publicLabel": "落款署名",
        "description": "底部报告名 / 日期 / 口径显隐"
      }
    ],
    "defaultProps": {
      "kicker": "CLOSING · 结语",
      "ghost": "FIN",
      "statement": "AI 融资盛宴仍在继续，",
      "statementEm": "但音乐节奏正在变化。",
      "sub": "资本的下一阶段，将从「赌叙事」转向「看兑现」——能把技术转化为可持续收入的公司，才能在退潮后留在牌桌上。",
      "signature": {
        "org": "2024 美国大额融资 AI 公司调研报告",
        "date": "2026 · 06",
        "note": "数据口径：2024 全年 ≥1 亿美元公开融资事件 · 仅供研究参考"
      },
      "align": "left",
      "showGhost": true,
      "showRule": true,
      "showSub": true,
      "showSignature": true,
      "showMark": true,
      "scheme": "green",
      "emphasis": "ticket",
      "breath": 55,
      "magnet": true,
      "aurora": true,
      "auroraSpeed": 1,
      "index": "73 / 73"
    }
  }
];
