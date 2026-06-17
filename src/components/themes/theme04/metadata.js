export const theme = {
  "key": "theme04",
  "displayName": "玻璃糖果风",
  "label": "玻璃糖果风",
  "name": "玻璃糖果风",
  "scenario": "年轻化品牌、消费产品、创意提案、社媒感内容",
  "audience": "品牌团队、设计师、内容创作者、消费品团队",
  "mode": "replace"
};
export const pages = [
  {
    "key": "theme04_page001",
    "themeKey": "theme04",
    "pageNumber": 1,
    "layout": "THEME04-001",
    "slot": "coverHero",
    "label": "居中主题封面",
    "bgClass": "",
    "controls": [
      {
        "key": "hlStyle",
        "label": "高亮样式",
        "type": "radio",
        "default": "glass",
        "options": [
          [
            "glass",
            "玻璃糖果"
          ],
          [
            "pill",
            "扁平药丸"
          ],
          [
            "underline",
            "下划线"
          ],
          [
            "text",
            "纯文字"
          ]
        ],
        "desc": "关键词高亮：玻璃糖果 / 扁平药丸 / 下划线 / 纯文字",
        "publicKey": "hlStyle",
        "publicLabel": "高亮样式",
        "description": "关键词高亮：玻璃糖果 / 扁平药丸 / 下划线 / 纯文字"
      },
      {
        "key": "hlTilt",
        "label": "高亮倾斜",
        "type": "slider",
        "default": 2,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "关键词胶囊旋转角度（仅糖果/药丸样式生效）",
        "publicKey": "hlTilt",
        "publicLabel": "高亮倾斜",
        "description": "关键词胶囊旋转角度（仅糖果/药丸样式生效）"
      },
      {
        "key": "accentTone",
        "label": "主色调",
        "type": "radio",
        "default": "green",
        "options": [
          [
            "green",
            "绿"
          ],
          [
            "yellow",
            "黄"
          ],
          [
            "blue",
            "蓝"
          ],
          [
            "pink",
            "粉"
          ]
        ],
        "desc": "页面主色调(通用命名)",
        "publicKey": "accentTone",
        "publicLabel": "主色调",
        "description": "页面主色调(通用命名)"
      },
      {
        "key": "statCount",
        "label": "指标卡片数量",
        "type": "slider",
        "default": 3,
        "min": 0,
        "max": 3,
        "step": 1,
        "desc": "底部并置指标卡片数量",
        "publicKey": "statCount",
        "publicLabel": "指标卡片数量",
        "description": "底部并置指标卡片数量"
      },
      {
        "key": "focusEnabled",
        "label": "重点突出",
        "type": "toggle",
        "default": false,
        "desc": "是否高亮某一枚芯片",
        "publicKey": "focusEnabled",
        "publicLabel": "重点突出",
        "description": "是否高亮某一枚芯片"
      },
      {
        "key": "focusIndex",
        "label": "高亮第几个",
        "type": "slider",
        "default": 1,
        "min": 1,
        "max": 3,
        "step": 1,
        "maxFromKey": "statCount",
        "desc": "被高亮芯片序号",
        "publicKey": "focusIndex",
        "publicLabel": "高亮第几个",
        "description": "被高亮芯片序号"
      },
      {
        "key": "showSub",
        "label": "副标题",
        "type": "toggle",
        "default": true,
        "desc": "副标题显隐",
        "publicKey": "showSub",
        "publicLabel": "副标题",
        "description": "副标题显隐"
      },
      {
        "key": "showBrand",
        "label": "顶部刊名",
        "type": "toggle",
        "default": true,
        "desc": "顶部刊名显隐",
        "publicKey": "showBrand",
        "publicLabel": "顶部刊名",
        "description": "顶部刊名显隐"
      },
      {
        "key": "showDecorations",
        "label": "装饰元素",
        "type": "toggle",
        "default": true,
        "desc": "星芒等点缀",
        "publicKey": "showDecorations",
        "publicLabel": "装饰元素",
        "description": "星芒等点缀"
      },
      {
        "key": "stats",
        "label": "指标卡片",
        "type": "list",
        "default": [
          {
            "n": "970",
            "l": "亿美元 · 全年总额",
            "color": "#27E021"
          },
          {
            "n": "97",
            "l": "笔 · 单笔 ≥1 亿",
            "color": "#15A7F0"
          },
          {
            "n": "×3",
            "l": "估值 · 一年跃迁",
            "color": "#FF9FE2"
          }
        ],
        "desc": "底部指标卡片：数字 / 标签 / 主色",
        "publicKey": "stats",
        "publicLabel": "指标卡片",
        "description": "底部指标卡片：数字 / 标签 / 主色"
      }
    ],
    "defaultProps": {
      "hlStyle": "glass",
      "hlTilt": 2,
      "accentTone": "green",
      "statCount": 3,
      "focusEnabled": false,
      "focusIndex": 1,
      "showSub": true,
      "showBrand": true,
      "showDecorations": true,
      "brand": "AI CAPITAL",
      "brandZh": "资本观察 · 年度特刊",
      "eyebrow": "年度封面 · ANNUAL COVER",
      "titleLead": "资本，正在",
      "titleKeyword": "重新分配",
      "sub": "2024 全球 AI 大额融资 · 全景年鉴",
      "stats": [
        {
          "n": "970",
          "l": "亿美元 · 全年总额",
          "color": "#27E021"
        },
        {
          "n": "97",
          "l": "笔 · 单笔 ≥1 亿",
          "color": "#15A7F0"
        },
        {
          "n": "×3",
          "l": "估值 · 一年跃迁",
          "color": "#FF9FE2"
        }
      ]
    }
  },
  {
    "key": "theme04_page002",
    "themeKey": "theme04",
    "pageNumber": 2,
    "layout": "THEME04-002",
    "slot": "coverIndex",
    "label": "索引导读封面",
    "bgClass": "",
    "controls": [
      {
        "key": "hlStyle",
        "label": "高亮样式",
        "type": "radio",
        "default": "glass",
        "options": [
          [
            "glass",
            "玻璃糖果"
          ],
          [
            "pill",
            "扁平药丸"
          ],
          [
            "underline",
            "下划线"
          ],
          [
            "text",
            "纯文字"
          ]
        ],
        "desc": "关键词高亮：玻璃糖果 / 扁平药丸 / 下划线 / 纯文字",
        "publicKey": "hlStyle",
        "publicLabel": "高亮样式",
        "description": "关键词高亮：玻璃糖果 / 扁平药丸 / 下划线 / 纯文字"
      },
      {
        "key": "hlTilt",
        "label": "高亮倾斜",
        "type": "slider",
        "default": 2,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "关键词胶囊旋转角度（仅糖果/药丸样式生效）",
        "publicKey": "hlTilt",
        "publicLabel": "高亮倾斜",
        "description": "关键词胶囊旋转角度（仅糖果/药丸样式生效）"
      },
      {
        "key": "accentTone",
        "label": "主色调",
        "type": "radio",
        "default": "blue",
        "options": [
          [
            "green",
            "绿"
          ],
          [
            "yellow",
            "黄"
          ],
          [
            "blue",
            "蓝"
          ],
          [
            "pink",
            "粉"
          ]
        ],
        "desc": "页面主色调(通用命名)",
        "publicKey": "accentTone",
        "publicLabel": "主色调",
        "description": "页面主色调(通用命名)"
      },
      {
        "key": "itemCount",
        "label": "索引卡数量",
        "type": "slider",
        "default": 4,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "右侧索引卡数量",
        "publicKey": "itemCount",
        "publicLabel": "索引卡数量",
        "description": "右侧索引卡数量"
      },
      {
        "key": "focusEnabled",
        "label": "重点突出",
        "type": "toggle",
        "default": false,
        "desc": "是否高亮某一张索引卡",
        "publicKey": "focusEnabled",
        "publicLabel": "重点突出",
        "description": "是否高亮某一张索引卡"
      },
      {
        "key": "focusIndex",
        "label": "高亮第几个",
        "type": "slider",
        "default": 1,
        "min": 1,
        "max": 4,
        "step": 1,
        "maxFromKey": "itemCount",
        "desc": "被高亮索引卡序号",
        "publicKey": "focusIndex",
        "publicLabel": "高亮第几个",
        "description": "被高亮索引卡序号"
      },
      {
        "key": "showIssue",
        "label": "期号徽标",
        "type": "toggle",
        "default": true,
        "desc": "期号徽标显隐",
        "publicKey": "showIssue",
        "publicLabel": "期号徽标",
        "description": "期号徽标显隐"
      },
      {
        "key": "showSub",
        "label": "副标题",
        "type": "toggle",
        "default": true,
        "desc": "副标题显隐",
        "publicKey": "showSub",
        "publicLabel": "副标题",
        "description": "副标题显隐"
      },
      {
        "key": "showDecorations",
        "label": "装饰元素",
        "type": "toggle",
        "default": true,
        "desc": "星芒等点缀",
        "publicKey": "showDecorations",
        "publicLabel": "装饰元素",
        "description": "星芒等点缀"
      },
      {
        "key": "items",
        "label": "索引卡",
        "type": "list",
        "default": [
          {
            "tag": "01",
            "head": "算力霸权",
            "sub": "芯片 · 数据中心 · 谁卡住咽喉",
            "color": "#27E021"
          },
          {
            "tag": "02",
            "head": "模型军备",
            "sub": "基础模型三强 · 烧钱与护城河",
            "color": "#15A7F0"
          },
          {
            "tag": "03",
            "head": "应用突围",
            "sub": "从 Demo 到收入 · 谁先跑通",
            "color": "#FFC700"
          },
          {
            "tag": "04",
            "head": "资本退潮",
            "sub": "热钱之后 · 谁会被留在沙滩上",
            "color": "#FF9FE2"
          }
        ],
        "desc": "右侧索引卡：编号 / 主句 / 释义 / 主色",
        "publicKey": "items",
        "publicLabel": "索引卡",
        "description": "右侧索引卡：编号 / 主句 / 释义 / 主色"
      }
    ],
    "defaultProps": {
      "hlStyle": "glass",
      "hlTilt": 2,
      "accentTone": "blue",
      "itemCount": 4,
      "focusEnabled": false,
      "focusIndex": 1,
      "showIssue": true,
      "showSub": true,
      "showDecorations": true,
      "brand": "AI CAPITAL",
      "brandZh": "资本观察 · 特别报告",
      "issueNo": "NO.",
      "issueVol": "04",
      "issueYr": "2024 年刊",
      "eyebrow": "封面故事 · COVER STORY",
      "titleLead": "谁在",
      "titleKeyword": "改写",
      "titleTail": "估值规则",
      "sub": "头部玩家、资本流向与一年翻倍的独角兽流水线",
      "items": [
        {
          "tag": "01",
          "head": "算力霸权",
          "sub": "芯片 · 数据中心 · 谁卡住咽喉",
          "color": "#27E021"
        },
        {
          "tag": "02",
          "head": "模型军备",
          "sub": "基础模型三强 · 烧钱与护城河",
          "color": "#15A7F0"
        },
        {
          "tag": "03",
          "head": "应用突围",
          "sub": "从 Demo 到收入 · 谁先跑通",
          "color": "#FFC700"
        },
        {
          "tag": "04",
          "head": "资本退潮",
          "sub": "热钱之后 · 谁会被留在沙滩上",
          "color": "#FF9FE2"
        }
      ]
    }
  },
  {
    "key": "theme04_page003",
    "themeKey": "theme04",
    "pageNumber": 3,
    "layout": "THEME04-003",
    "slot": "coverGhost",
    "label": "幽灵数字封面",
    "bgClass": "",
    "controls": [
      {
        "key": "hlStyle",
        "label": "高亮样式",
        "type": "radio",
        "default": "glass",
        "options": [
          [
            "glass",
            "玻璃糖果"
          ],
          [
            "pill",
            "扁平药丸"
          ],
          [
            "underline",
            "下划线"
          ],
          [
            "text",
            "纯文字"
          ]
        ],
        "desc": "关键词高亮：玻璃糖果 / 扁平药丸 / 下划线 / 纯文字",
        "publicKey": "hlStyle",
        "publicLabel": "高亮样式",
        "description": "关键词高亮：玻璃糖果 / 扁平药丸 / 下划线 / 纯文字"
      },
      {
        "key": "hlTilt",
        "label": "高亮倾斜",
        "type": "slider",
        "default": 2,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "关键词胶囊旋转角度（仅糖果/药丸样式生效）",
        "publicKey": "hlTilt",
        "publicLabel": "高亮倾斜",
        "description": "关键词胶囊旋转角度（仅糖果/药丸样式生效）"
      },
      {
        "key": "accentTone",
        "label": "主色调",
        "type": "radio",
        "default": "yellow",
        "options": [
          [
            "green",
            "绿"
          ],
          [
            "yellow",
            "黄"
          ],
          [
            "blue",
            "蓝"
          ],
          [
            "pink",
            "粉"
          ]
        ],
        "desc": "页面主色调(通用命名)",
        "publicKey": "accentTone",
        "publicLabel": "主色调",
        "description": "页面主色调(通用命名)"
      },
      {
        "key": "lineCount",
        "label": "导读条数量",
        "type": "slider",
        "default": 4,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "底部导读条数量",
        "publicKey": "lineCount",
        "publicLabel": "导读条数量",
        "description": "底部导读条数量"
      },
      {
        "key": "focusEnabled",
        "label": "重点突出",
        "type": "toggle",
        "default": false,
        "desc": "是否高亮某一导读条",
        "publicKey": "focusEnabled",
        "publicLabel": "重点突出",
        "description": "是否高亮某一导读条"
      },
      {
        "key": "focusIndex",
        "label": "高亮第几个",
        "type": "slider",
        "default": 1,
        "min": 1,
        "max": 4,
        "step": 1,
        "maxFromKey": "lineCount",
        "desc": "被高亮导读条序号",
        "publicKey": "focusIndex",
        "publicLabel": "高亮第几个",
        "description": "被高亮导读条序号"
      },
      {
        "key": "showGhost",
        "label": "幽灵数字",
        "type": "toggle",
        "default": true,
        "desc": "背景巨型描边数字显隐",
        "publicKey": "showGhost",
        "publicLabel": "幽灵数字",
        "description": "背景巨型描边数字显隐"
      },
      {
        "key": "showIssue",
        "label": "期号徽标",
        "type": "toggle",
        "default": true,
        "desc": "期号徽标显隐",
        "publicKey": "showIssue",
        "publicLabel": "期号徽标",
        "description": "期号徽标显隐"
      },
      {
        "key": "showDecorations",
        "label": "装饰元素",
        "type": "toggle",
        "default": true,
        "desc": "星芒等点缀",
        "publicKey": "showDecorations",
        "publicLabel": "装饰元素",
        "description": "星芒等点缀"
      },
      {
        "key": "lines",
        "label": "导读条",
        "type": "list",
        "default": [
          {
            "head": "970 亿美元",
            "sub": "全年总额创历史新高",
            "color": "#27E021"
          },
          {
            "head": "97 笔大额轮",
            "sub": "单笔 ≥1 亿 · 头部集中",
            "color": "#15A7F0"
          },
          {
            "head": "六大赛道",
            "sub": "算力 · 模型 · 应用争霸",
            "color": "#FFC700"
          },
          {
            "head": "估值翻数倍",
            "sub": "独角兽流水线 · 资本不眠",
            "color": "#FF9FE2"
          }
        ],
        "desc": "底部导读条：主句 / 释义 / 主色",
        "publicKey": "lines",
        "publicLabel": "导读条",
        "description": "底部导读条：主句 / 释义 / 主色"
      }
    ],
    "defaultProps": {
      "hlStyle": "glass",
      "hlTilt": 2,
      "accentTone": "yellow",
      "lineCount": 4,
      "focusEnabled": false,
      "focusIndex": 1,
      "showGhost": true,
      "showIssue": true,
      "showDecorations": true,
      "brand": "AI CAPITAL",
      "brandZh": "资本观察 · 数据特辑",
      "issueNo": "VOL.",
      "issueVol": "04",
      "issueYr": "2024 年度",
      "ghostText": "04",
      "eyebrow": "特别报告 · SPECIAL ISSUE",
      "titleLead": "大额时代",
      "titleKeyword": "来了",
      "sub": "单笔过亿成为新常态 —— 一年里，钱以前所未有的速度涌入",
      "lines": [
        {
          "head": "970 亿美元",
          "sub": "全年总额创历史新高",
          "color": "#27E021"
        },
        {
          "head": "97 笔大额轮",
          "sub": "单笔 ≥1 亿 · 头部集中",
          "color": "#15A7F0"
        },
        {
          "head": "六大赛道",
          "sub": "算力 · 模型 · 应用争霸",
          "color": "#FFC700"
        },
        {
          "head": "估值翻数倍",
          "sub": "独角兽流水线 · 资本不眠",
          "color": "#FF9FE2"
        }
      ]
    }
  },
  {
    "key": "theme04_page004",
    "themeKey": "theme04",
    "pageNumber": 4,
    "layout": "THEME04-004",
    "slot": "coverBento",
    "label": "糖果速览封面",
    "bgClass": "",
    "controls": [
      {
        "key": "accentTone",
        "label": "标题板主色",
        "type": "radio",
        "default": "green",
        "options": [
          [
            "green",
            "绿"
          ],
          [
            "yellow",
            "黄"
          ],
          [
            "blue",
            "蓝"
          ],
          [
            "pink",
            "粉"
          ]
        ],
        "desc": "标题板主色调(通用命名)",
        "publicKey": "accentTone",
        "publicLabel": "标题板主色",
        "description": "标题板主色调(通用命名)"
      },
      {
        "key": "tileCount",
        "label": "瓷砖数量",
        "type": "slider",
        "default": 4,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "玻璃糖果数据瓷砖数量(自动重排)",
        "publicKey": "tileCount",
        "publicLabel": "瓷砖数量",
        "description": "玻璃糖果数据瓷砖数量(自动重排)"
      },
      {
        "key": "paletteVariant",
        "label": "瓷砖配色",
        "type": "radio",
        "default": "multi",
        "options": [
          [
            "multi",
            "多彩"
          ],
          [
            "mono",
            "单色"
          ]
        ],
        "desc": "瓷砖多彩 / 统一主色",
        "publicKey": "paletteVariant",
        "publicLabel": "瓷砖配色",
        "description": "瓷砖多彩 / 统一主色"
      },
      {
        "key": "focusEnabled",
        "label": "重点突出",
        "type": "toggle",
        "default": false,
        "desc": "是否高亮某一块瓷砖",
        "publicKey": "focusEnabled",
        "publicLabel": "重点突出",
        "description": "是否高亮某一块瓷砖"
      },
      {
        "key": "focusIndex",
        "label": "高亮第几个",
        "type": "slider",
        "default": 1,
        "min": 1,
        "max": 4,
        "step": 1,
        "maxFromKey": "tileCount",
        "desc": "被高亮瓷砖序号",
        "publicKey": "focusIndex",
        "publicLabel": "高亮第几个",
        "description": "被高亮瓷砖序号"
      },
      {
        "key": "showIssue",
        "label": "期号徽标",
        "type": "toggle",
        "default": true,
        "desc": "期号徽标显隐",
        "publicKey": "showIssue",
        "publicLabel": "期号徽标",
        "description": "期号徽标显隐"
      },
      {
        "key": "showKicker",
        "label": "瓷砖角标",
        "type": "toggle",
        "default": true,
        "desc": "瓷砖英文小标显隐",
        "publicKey": "showKicker",
        "publicLabel": "瓷砖角标",
        "description": "瓷砖英文小标显隐"
      },
      {
        "key": "showDecorations",
        "label": "装饰元素",
        "type": "toggle",
        "default": true,
        "desc": "星芒等点缀",
        "publicKey": "showDecorations",
        "publicLabel": "装饰元素",
        "description": "星芒等点缀"
      },
      {
        "key": "tiles",
        "label": "数据瓷砖",
        "type": "list",
        "default": [
          {
            "kick": "TOTAL",
            "big": "970",
            "unit": "亿",
            "lab": "全年融资总额",
            "color": "#27E021"
          },
          {
            "kick": "SECTORS",
            "big": "6",
            "unit": "",
            "lab": "赛道争霸",
            "color": "#FFC700"
          },
          {
            "kick": "MEGA",
            "big": "97",
            "unit": "",
            "lab": "笔大额轮",
            "color": "#15A7F0"
          },
          {
            "kick": "VALUATION",
            "big": "×3",
            "unit": "",
            "lab": "独角兽一年估值跃迁",
            "color": "#FF9FE2"
          }
        ],
        "desc": "数据瓷砖：角标 / 大数 / 单位 / 标签 / 主色",
        "publicKey": "tiles",
        "publicLabel": "数据瓷砖",
        "description": "数据瓷砖：角标 / 大数 / 单位 / 标签 / 主色"
      }
    ],
    "defaultProps": {
      "accentTone": "green",
      "tileCount": 4,
      "paletteVariant": "multi",
      "focusEnabled": false,
      "focusIndex": 1,
      "showIssue": true,
      "showKicker": true,
      "showDecorations": true,
      "brand": "AI CAPITAL",
      "brandZh": "资本观察",
      "issueNo": "NO.",
      "issueVol": "04",
      "issueYr": "2024 年刊",
      "eyebrow": "一图速览 · AT A GLANCE",
      "titleLead": "AI 资本",
      "titleTail": "全景图鉴",
      "tiles": [
        {
          "kick": "TOTAL",
          "big": "970",
          "unit": "亿",
          "lab": "全年融资总额",
          "color": "#27E021"
        },
        {
          "kick": "SECTORS",
          "big": "6",
          "unit": "",
          "lab": "赛道争霸",
          "color": "#FFC700"
        },
        {
          "kick": "MEGA",
          "big": "97",
          "unit": "",
          "lab": "笔大额轮",
          "color": "#15A7F0"
        },
        {
          "kick": "VALUATION",
          "big": "×3",
          "unit": "",
          "lab": "独角兽一年估值跃迁",
          "color": "#FF9FE2"
        }
      ]
    }
  },
  {
    "key": "theme04_page005",
    "themeKey": "theme04",
    "pageNumber": 5,
    "layout": "THEME04-005",
    "slot": "agenda",
    "label": "研究框架",
    "bgClass": "",
    "controls": [
      {
        "key": "hlStyle",
        "label": "高亮样式",
        "type": "radio",
        "default": "glass",
        "options": [
          [
            "glass",
            "玻璃糖果"
          ],
          [
            "pill",
            "扁平药丸"
          ],
          [
            "underline",
            "下划线"
          ],
          [
            "text",
            "纯文字"
          ]
        ],
        "desc": "关键词高亮：玻璃糖果 / 扁平药丸 / 下划线 / 纯文字",
        "publicKey": "hlStyle",
        "publicLabel": "高亮样式",
        "description": "关键词高亮：玻璃糖果 / 扁平药丸 / 下划线 / 纯文字"
      },
      {
        "key": "hlTilt",
        "label": "高亮倾斜",
        "type": "slider",
        "default": 2,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "关键词胶囊旋转角度（仅糖果/药丸样式生效）",
        "publicKey": "hlTilt",
        "publicLabel": "高亮倾斜",
        "description": "关键词胶囊旋转角度（仅糖果/药丸样式生效）"
      },
      {
        "key": "itemCount",
        "label": "模块数量",
        "type": "slider",
        "default": 4,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "展示的章节模块卡数量",
        "publicKey": "itemCount",
        "publicLabel": "模块数量",
        "description": "展示的章节模块卡数量"
      },
      {
        "key": "focusEnabled",
        "label": "重点突出",
        "type": "toggle",
        "default": false,
        "desc": "是否高亮某一个模块",
        "publicKey": "focusEnabled",
        "publicLabel": "重点突出",
        "description": "是否高亮某一个模块"
      },
      {
        "key": "focusIndex",
        "label": "重点序号",
        "type": "slider",
        "default": 1,
        "min": 1,
        "max": 4,
        "step": 1,
        "maxFromKey": "itemCount",
        "desc": "被高亮模块的序号",
        "publicKey": "focusIndex",
        "publicLabel": "重点序号",
        "description": "被高亮模块的序号"
      },
      {
        "key": "tilt",
        "label": "卡片倾斜",
        "type": "toggle",
        "default": true,
        "desc": "卡片是否带随机倾斜角",
        "publicKey": "tilt",
        "publicLabel": "卡片倾斜",
        "description": "卡片是否带随机倾斜角"
      },
      {
        "key": "showTag",
        "label": "序号标签",
        "type": "toggle",
        "default": true,
        "desc": "显示 <Part0X> 标签",
        "publicKey": "showTag",
        "publicLabel": "序号标签",
        "description": "显示 <Part0X> 标签"
      },
      {
        "key": "showDecorations",
        "label": "装饰元素",
        "type": "toggle",
        "default": true,
        "desc": "星芒 / 圆环等点缀",
        "publicKey": "showDecorations",
        "publicLabel": "装饰元素",
        "description": "星芒 / 圆环等点缀"
      },
      {
        "key": "items",
        "label": "模块卡",
        "type": "list",
        "default": [
          {
            "tag": "<Part01>",
            "title": "市场全景",
            "caption": "全年 970 亿美元 · 融资全景"
          },
          {
            "tag": "<Part02>",
            "title": "行业透视",
            "caption": "赛道 / 轮次 / 头部玩家"
          },
          {
            "tag": "<Part03>",
            "title": "产业链分层",
            "caption": "上 · 中 · 下游结构透视"
          },
          {
            "tag": "<Part04>",
            "title": "品质涌现",
            "caption": "从「赌叙事」到「看兑现」"
          }
        ],
        "desc": "章节模块卡：标签 / 标题 / 说明",
        "publicKey": "items",
        "publicLabel": "模块卡",
        "description": "章节模块卡：标签 / 标题 / 说明"
      }
    ],
    "defaultProps": {
      "hlStyle": "glass",
      "hlTilt": 2,
      "itemCount": 4,
      "focusEnabled": false,
      "focusIndex": 1,
      "showDecorations": true,
      "showTag": true,
      "tilt": true,
      "kicker": "RESEARCH FRAMEWORK / 调研框架",
      "titleLine1": "2024 美国大额融资 AI 公司",
      "titleKeyword": "调研报告",
      "footnote": "横纵分析法 · 在空间维度与时间维度交叉透视同一组数据",
      "items": [
        {
          "tag": "<Part01>",
          "title": "市场全景",
          "caption": "全年 970 亿美元 · 融资全景"
        },
        {
          "tag": "<Part02>",
          "title": "行业透视",
          "caption": "赛道 / 轮次 / 头部玩家"
        },
        {
          "tag": "<Part03>",
          "title": "产业链分层",
          "caption": "上 · 中 · 下游结构透视"
        },
        {
          "tag": "<Part04>",
          "title": "品质涌现",
          "caption": "从「赌叙事」到「看兑现」"
        }
      ]
    }
  },
  {
    "key": "theme04_page006",
    "themeKey": "theme04",
    "pageNumber": 6,
    "layout": "THEME04-006",
    "slot": "contents",
    "label": "图文目录",
    "bgClass": "",
    "controls": [
      {
        "key": "copy",
        "label": "可见文案",
        "type": "list",
        "default": {
          "text001": "全篇导览 · CONTENTS",
          "text002": "六章，看懂这一年的 AI 资本"
        },
        "desc": "页面中的固定可见文案、单位和图片槽提示",
        "publicKey": "copy",
        "publicLabel": "可见文案",
        "description": "页面中的固定可见文案、单位和图片槽提示"
      },
      {
        "key": "itemsData",
        "label": "itemsData",
        "type": "list",
        "default": [
          {
            "no": "01",
            "zh": "市场全景",
            "en": "MARKET",
            "desc": "970 亿与 97 笔大额融资",
            "color": "#27E021"
          },
          {
            "no": "02",
            "zh": "资金版图",
            "en": "LANDSCAPE",
            "desc": "赛道、地区与头部集中",
            "color": "#FFC700"
          },
          {
            "no": "03",
            "zh": "头部玩家",
            "en": "PLAYERS",
            "desc": "OpenAI · Anthropic · xAI 争霸",
            "color": "#15A7F0"
          },
          {
            "no": "04",
            "zh": "产业链条",
            "en": "VALUE CHAIN",
            "desc": "上中下游与算力底座",
            "color": "#FF9FE2"
          },
          {
            "no": "05",
            "zh": "投资策略",
            "en": "STRATEGY",
            "desc": "看好与谨慎的分野",
            "color": "#27E021"
          },
          {
            "no": "06",
            "zh": "风险展望",
            "en": "OUTLOOK",
            "desc": "集中度风险与 2025 路径",
            "color": "#FFC700"
          }
        ],
        "desc": "默认数据内容",
        "publicKey": "itemsData",
        "publicLabel": "itemsData",
        "description": "默认数据内容"
      },
      {
        "key": "itemCount",
        "label": "章节卡数量",
        "type": "slider",
        "default": 6,
        "min": 4,
        "max": 6,
        "step": 1,
        "desc": "展示的章节卡数量",
        "publicKey": "itemCount",
        "publicLabel": "章节卡数量",
        "description": "展示的章节卡数量"
      },
      {
        "key": "mediaCount",
        "label": "缩略图卡数",
        "type": "slider",
        "default": 6,
        "min": 0,
        "max": 6,
        "step": 1,
        "maxFromKey": "itemCount",
        "desc": "显示缩略图的卡数(其余转霓虹编号)",
        "publicKey": "mediaCount",
        "publicLabel": "缩略图卡数",
        "description": "显示缩略图的卡数(其余转霓虹编号)"
      },
      {
        "key": "focusEnabled",
        "label": "重点突出",
        "type": "toggle",
        "default": true,
        "desc": "是否高亮某一章节",
        "publicKey": "focusEnabled",
        "publicLabel": "重点突出",
        "description": "是否高亮某一章节"
      },
      {
        "key": "focusIndex",
        "label": "重点序号",
        "type": "slider",
        "default": 1,
        "min": 1,
        "max": 6,
        "step": 1,
        "maxFromKey": "itemCount",
        "desc": "被高亮章节的序号",
        "publicKey": "focusIndex",
        "publicLabel": "重点序号",
        "description": "被高亮章节的序号"
      },
      {
        "key": "showDesc",
        "label": "导读",
        "type": "toggle",
        "default": true,
        "desc": "卡片导读一句话",
        "publicKey": "showDesc",
        "publicLabel": "导读",
        "description": "卡片导读一句话"
      },
      {
        "key": "showDecorations",
        "label": "装饰元素",
        "type": "toggle",
        "default": true,
        "desc": "星芒等点缀",
        "publicKey": "showDecorations",
        "publicLabel": "装饰元素",
        "description": "星芒等点缀"
      }
    ],
    "defaultProps": {
      "copy": {
        "text001": "全篇导览 · CONTENTS",
        "text002": "六章，看懂这一年的 AI 资本"
      },
      "itemsData": [
        {
          "no": "01",
          "zh": "市场全景",
          "en": "MARKET",
          "desc": "970 亿与 97 笔大额融资",
          "color": "#27E021"
        },
        {
          "no": "02",
          "zh": "资金版图",
          "en": "LANDSCAPE",
          "desc": "赛道、地区与头部集中",
          "color": "#FFC700"
        },
        {
          "no": "03",
          "zh": "头部玩家",
          "en": "PLAYERS",
          "desc": "OpenAI · Anthropic · xAI 争霸",
          "color": "#15A7F0"
        },
        {
          "no": "04",
          "zh": "产业链条",
          "en": "VALUE CHAIN",
          "desc": "上中下游与算力底座",
          "color": "#FF9FE2"
        },
        {
          "no": "05",
          "zh": "投资策略",
          "en": "STRATEGY",
          "desc": "看好与谨慎的分野",
          "color": "#27E021"
        },
        {
          "no": "06",
          "zh": "风险展望",
          "en": "OUTLOOK",
          "desc": "集中度风险与 2025 路径",
          "color": "#FFC700"
        }
      ],
      "itemCount": 6,
      "mediaCount": 6,
      "focusEnabled": true,
      "focusIndex": 1,
      "showDesc": true,
      "showDecorations": true
    }
  },
  {
    "key": "theme04_page007",
    "themeKey": "theme04",
    "pageNumber": 7,
    "layout": "THEME04-007",
    "slot": "method",
    "label": "研究方法",
    "bgClass": "",
    "controls": [
      {
        "key": "copy",
        "label": "可见文案",
        "type": "list",
        "default": {
          "text001": "研究方法 · METHODOLOGY",
          "text002": "横纵分析法，",
          "text003": "两个正交维度",
          "text004": "看清同一组数据",
          "text005": "×",
          "text006": "两维交叉，进一步识别",
          "text007": "产业链的层级结构",
          "text008": "与",
          "text009": "因果传导关系",
          "placeholder001": "研究框架 / 数据墙示意"
        },
        "desc": "页面中的固定可见文案、单位和图片槽提示",
        "publicKey": "copy",
        "publicLabel": "可见文案",
        "description": "页面中的固定可见文案、单位和图片槽提示"
      },
      {
        "key": "dimsData",
        "label": "dimsData",
        "type": "list",
        "default": [
          {
            "tag": "横向 · 空间维度",
            "en": "HORIZONTAL",
            "color": "#15A7F0",
            "axis": "h",
            "desc": "在同一时间截面，对公司 / 赛道 / 轮次 / 地区横向对比——回答「谁更大、谁更密集、资源集中在哪里」。"
          },
          {
            "tag": "纵向 · 时间维度",
            "en": "VERTICAL",
            "color": "#FFC700",
            "axis": "v",
            "desc": "沿时间轴追踪同一指标的演化——回答「趋势向上还是向下、拐点在何处、节奏是否可持续」。"
          }
        ],
        "desc": "默认数据内容",
        "publicKey": "dimsData",
        "publicLabel": "dimsData",
        "description": "默认数据内容"
      },
      {
        "key": "hlStyle",
        "label": "高亮样式",
        "type": "radio",
        "default": "glass",
        "options": [
          [
            "glass",
            "玻璃糖果"
          ],
          [
            "pill",
            "扁平药丸"
          ],
          [
            "underline",
            "下划线"
          ],
          [
            "text",
            "纯文字"
          ]
        ],
        "desc": "关键词高亮：玻璃糖果 / 扁平药丸 / 下划线 / 纯文字",
        "publicKey": "hlStyle",
        "publicLabel": "高亮样式",
        "description": "关键词高亮：玻璃糖果 / 扁平药丸 / 下划线 / 纯文字"
      },
      {
        "key": "hlTilt",
        "label": "高亮倾斜",
        "type": "slider",
        "default": 2,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "关键词胶囊旋转角度（仅糖果/药丸样式生效）",
        "publicKey": "hlTilt",
        "publicLabel": "高亮倾斜",
        "description": "关键词胶囊旋转角度（仅糖果/药丸样式生效）"
      },
      {
        "key": "mediaCount",
        "label": "图片槽数量",
        "type": "slider",
        "default": 1,
        "min": 0,
        "max": 1,
        "step": 1,
        "desc": "自适应配图(0=纯概念居中)",
        "publicKey": "mediaCount",
        "publicLabel": "图片槽数量",
        "description": "自适应配图(0=纯概念居中)"
      },
      {
        "key": "imageSide",
        "label": "配图位置",
        "type": "radio",
        "default": "left",
        "options": [
          [
            "left",
            "左侧"
          ],
          [
            "right",
            "右侧"
          ]
        ],
        "desc": "配图在左 / 右(有图时生效)",
        "publicKey": "imageSide",
        "publicLabel": "配图位置",
        "description": "配图在左 / 右(有图时生效)"
      },
      {
        "key": "dimCount",
        "label": "维度卡数量",
        "type": "slider",
        "default": 2,
        "min": 1,
        "max": 2,
        "step": 1,
        "desc": "展示的维度卡数量(横向 / 纵向)",
        "publicKey": "dimCount",
        "publicLabel": "维度卡数量",
        "description": "展示的维度卡数量(横向 / 纵向)"
      },
      {
        "key": "accentTone",
        "label": "主色调",
        "type": "radio",
        "default": "blue",
        "options": [
          [
            "green",
            "绿"
          ],
          [
            "yellow",
            "黄"
          ],
          [
            "blue",
            "蓝"
          ],
          [
            "pink",
            "粉"
          ]
        ],
        "desc": "页面主色调(通用命名)",
        "publicKey": "accentTone",
        "publicLabel": "主色调",
        "description": "页面主色调(通用命名)"
      },
      {
        "key": "showSynthesis",
        "label": "交叉结论条",
        "type": "toggle",
        "default": true,
        "desc": "底部「两维交叉」结论条",
        "publicKey": "showSynthesis",
        "publicLabel": "交叉结论条",
        "description": "底部「两维交叉」结论条"
      },
      {
        "key": "showDecorations",
        "label": "装饰元素",
        "type": "toggle",
        "default": true,
        "desc": "星芒 / 圆环等点缀",
        "publicKey": "showDecorations",
        "publicLabel": "装饰元素",
        "description": "星芒 / 圆环等点缀"
      }
    ],
    "defaultProps": {
      "copy": {
        "text001": "研究方法 · METHODOLOGY",
        "text002": "横纵分析法，",
        "text003": "两个正交维度",
        "text004": "看清同一组数据",
        "text005": "×",
        "text006": "两维交叉，进一步识别",
        "text007": "产业链的层级结构",
        "text008": "与",
        "text009": "因果传导关系",
        "placeholder001": "研究框架 / 数据墙示意"
      },
      "dimsData": [
        {
          "tag": "横向 · 空间维度",
          "en": "HORIZONTAL",
          "color": "#15A7F0",
          "axis": "h",
          "desc": "在同一时间截面，对公司 / 赛道 / 轮次 / 地区横向对比——回答「谁更大、谁更密集、资源集中在哪里」。"
        },
        {
          "tag": "纵向 · 时间维度",
          "en": "VERTICAL",
          "color": "#FFC700",
          "axis": "v",
          "desc": "沿时间轴追踪同一指标的演化——回答「趋势向上还是向下、拐点在何处、节奏是否可持续」。"
        }
      ],
      "hlStyle": "glass",
      "hlTilt": 2,
      "mediaCount": 1,
      "imageSide": "left",
      "dimCount": 2,
      "accentTone": "blue",
      "showSynthesis": true,
      "showDecorations": true
    }
  },
  {
    "key": "theme04_page008",
    "themeKey": "theme04",
    "pageNumber": 8,
    "layout": "THEME04-008",
    "slot": "section",
    "label": "章节页",
    "bgClass": "",
    "controls": [
      {
        "key": "partNumber",
        "label": "章节编号",
        "type": "slider",
        "default": 2,
        "min": 1,
        "max": 6,
        "step": 1,
        "desc": "大号 Part 编号徽章",
        "publicKey": "partNumber",
        "publicLabel": "章节编号",
        "description": "大号 Part 编号徽章"
      },
      {
        "key": "accentTone",
        "label": "主色调",
        "type": "radio",
        "default": "blue",
        "options": [
          [
            "green",
            "绿"
          ],
          [
            "yellow",
            "黄"
          ],
          [
            "blue",
            "蓝"
          ],
          [
            "pink",
            "粉"
          ]
        ],
        "desc": "页面主色调",
        "publicKey": "accentTone",
        "publicLabel": "主色调",
        "description": "页面主色调"
      },
      {
        "key": "showIndex",
        "label": "章节索引",
        "type": "toggle",
        "default": true,
        "desc": "右侧章节导航列表",
        "publicKey": "showIndex",
        "publicLabel": "章节索引",
        "description": "右侧章节导航列表"
      },
      {
        "key": "indexCount",
        "label": "索引条目",
        "type": "slider",
        "default": 4,
        "min": 2,
        "max": 5,
        "step": 1,
        "desc": "索引列表条目数量",
        "publicKey": "itemCount",
        "publicLabel": "索引条目",
        "description": "索引列表条目数量"
      },
      {
        "key": "focusEnabled",
        "label": "当前高亮",
        "type": "toggle",
        "default": true,
        "desc": "高亮当前章节",
        "publicKey": "focusEnabled",
        "publicLabel": "当前高亮",
        "description": "高亮当前章节"
      },
      {
        "key": "focusIndex",
        "label": "当前序号",
        "type": "slider",
        "default": 2,
        "min": 1,
        "max": 5,
        "step": 1,
        "maxFromKey": "indexCount",
        "desc": "当前章节的序号",
        "publicKey": "focusIndex",
        "publicLabel": "当前序号",
        "description": "当前章节的序号"
      },
      {
        "key": "showDecorations",
        "label": "装饰元素",
        "type": "toggle",
        "default": true,
        "desc": "星芒等点缀",
        "publicKey": "showDecorations",
        "publicLabel": "装饰元素",
        "description": "星芒等点缀"
      },
      {
        "key": "chapters",
        "label": "章节",
        "type": "list",
        "default": [
          {
            "no": "01",
            "zh": "研究方法",
            "en": "METHODOLOGY"
          },
          {
            "no": "02",
            "zh": "市场全景",
            "en": "MARKET LANDSCAPE"
          },
          {
            "no": "03",
            "zh": "横向透视",
            "en": "SECTOR & PLAYERS"
          },
          {
            "no": "04",
            "zh": "产业链分层",
            "en": "VALUE CHAIN"
          },
          {
            "no": "05",
            "zh": "风险研判",
            "en": "RISK & OUTLOOK"
          }
        ],
        "desc": "章节列表：编号 / 中文 / 英文（海报卡标题取 partNumber 对应项）",
        "publicKey": "chapters",
        "publicLabel": "章节",
        "description": "章节列表：编号 / 中文 / 英文（海报卡标题取 partNumber 对应项）"
      }
    ],
    "defaultProps": {
      "partNumber": 2,
      "accentTone": "blue",
      "showIndex": true,
      "indexCount": 4,
      "focusEnabled": true,
      "focusIndex": 2,
      "showDecorations": true,
      "indexKicker": "CONTENTS · 章节导航",
      "lead": "沿时间轴追踪同一指标的演化，回答趋势的走向、拐点与节奏是否可持续——这是「横纵分析法」的纵向维度。",
      "chapters": [
        {
          "no": "01",
          "zh": "研究方法",
          "en": "METHODOLOGY"
        },
        {
          "no": "02",
          "zh": "市场全景",
          "en": "MARKET LANDSCAPE"
        },
        {
          "no": "03",
          "zh": "横向透视",
          "en": "SECTOR & PLAYERS"
        },
        {
          "no": "04",
          "zh": "产业链分层",
          "en": "VALUE CHAIN"
        },
        {
          "no": "05",
          "zh": "风险研判",
          "en": "RISK & OUTLOOK"
        }
      ]
    }
  },
  {
    "key": "theme04_page009",
    "themeKey": "theme04",
    "pageNumber": 9,
    "layout": "THEME04-009",
    "slot": "cards",
    "label": "行业赛道",
    "bgClass": "",
    "controls": [
      {
        "key": "copy",
        "label": "可见文案",
        "type": "list",
        "default": {
          "text001": "占比"
        },
        "desc": "页面中的固定可见文案、单位和图片槽提示",
        "publicKey": "copy",
        "publicLabel": "可见文案",
        "description": "页面中的固定可见文案、单位和图片槽提示"
      },
      {
        "key": "hlStyle",
        "label": "高亮样式",
        "type": "radio",
        "default": "glass",
        "options": [
          [
            "glass",
            "玻璃糖果"
          ],
          [
            "pill",
            "扁平药丸"
          ],
          [
            "underline",
            "下划线"
          ],
          [
            "text",
            "纯文字"
          ]
        ],
        "desc": "关键词高亮：玻璃糖果 / 扁平药丸 / 下划线 / 纯文字",
        "publicKey": "hlStyle",
        "publicLabel": "高亮样式",
        "description": "关键词高亮：玻璃糖果 / 扁平药丸 / 下划线 / 纯文字"
      },
      {
        "key": "hlTilt",
        "label": "高亮倾斜",
        "type": "slider",
        "default": 2,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "关键词胶囊旋转角度（仅糖果/药丸样式生效）",
        "publicKey": "hlTilt",
        "publicLabel": "高亮倾斜",
        "description": "关键词胶囊旋转角度（仅糖果/药丸样式生效）"
      },
      {
        "key": "cardCount",
        "label": "卡片数量",
        "type": "slider",
        "default": 4,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "分类卡片数量",
        "publicKey": "categoryCount",
        "publicLabel": "卡片数量",
        "description": "分类卡片数量"
      },
      {
        "key": "focusEnabled",
        "label": "重点突出",
        "type": "toggle",
        "default": false,
        "desc": "是否高亮某一张卡片",
        "publicKey": "focusEnabled",
        "publicLabel": "重点突出",
        "description": "是否高亮某一张卡片"
      },
      {
        "key": "focusIndex",
        "label": "重点序号",
        "type": "slider",
        "default": 1,
        "min": 1,
        "max": 4,
        "step": 1,
        "maxFromKey": "cardCount",
        "desc": "被高亮卡片的序号",
        "publicKey": "focusIndex",
        "publicLabel": "重点序号",
        "description": "被高亮卡片的序号"
      },
      {
        "key": "mediaCount",
        "label": "图片槽数量",
        "type": "slider",
        "default": 0,
        "min": 0,
        "max": 4,
        "step": 1,
        "maxFromKey": "cardCount",
        "desc": "从左起 N 张卡片加入自适应图片槽",
        "publicKey": "mediaCount",
        "publicLabel": "图片槽数量",
        "description": "从左起 N 张卡片加入自适应图片槽"
      },
      {
        "key": "showTags",
        "label": "底部标签",
        "type": "toggle",
        "default": true,
        "desc": "卡片底部小标签",
        "publicKey": "showTags",
        "publicLabel": "底部标签",
        "description": "卡片底部小标签"
      },
      {
        "key": "showDecorations",
        "label": "装饰元素",
        "type": "toggle",
        "default": true,
        "desc": "星芒等点缀",
        "publicKey": "showDecorations",
        "publicLabel": "装饰元素",
        "description": "星芒等点缀"
      },
      {
        "key": "cards",
        "label": "分类卡",
        "type": "list",
        "default": [
          {
            "title": "通用大模型",
            "amount": "420 亿",
            "share": "43.3%",
            "note": "押注「AGI 叙事」，OpenAI / Anthropic / xAI 领跑。",
            "tags": [
              "明星赛道",
              "资本高地"
            ]
          },
          {
            "title": "垂直应用",
            "amount": "245 亿",
            "share": "25.3%",
            "note": "商业化路径渐清晰，企业搜索 / 法律 AI 落地。",
            "tags": [
              "落地清晰",
              "隐形价值"
            ]
          },
          {
            "title": "AI 基础设施",
            "amount": "158 亿",
            "share": "16.3%",
            "note": "「卖铲子」逻辑，算力云与数据平台稀缺。",
            "tags": [
              "确定性强",
              "卖铲子"
            ]
          },
          {
            "title": "AI 芯片",
            "amount": "97 亿",
            "share": "10.0%",
            "note": "产业链上游硬件，Cerebras / Groq 等新势力。",
            "tags": [
              "上游硬件",
              "长周期"
            ]
          }
        ],
        "desc": "分类卡：标题 / 数值 / 占比 / 说明 / 标签",
        "publicKey": "cards",
        "publicLabel": "分类卡",
        "description": "分类卡：标题 / 数值 / 占比 / 说明 / 标签"
      }
    ],
    "defaultProps": {
      "copy": {
        "text001": "占比"
      },
      "hlStyle": "glass",
      "hlTilt": 2,
      "cardCount": 4,
      "focusEnabled": false,
      "focusIndex": 1,
      "showTags": true,
      "showDecorations": true,
      "mediaCount": 0,
      "kicker": "行业赛道 · 资金分布格局",
      "titleLine1": "资本高度集中",
      "titleKeyword1": "通用大模型",
      "titleLead2": "占据",
      "titleKeyword2": "近半壁江山",
      "sub": "按业务类型对 97 笔 ≥1 亿美元融资归类，统计各赛道吸纳资金占比。",
      "mediaPlaceholder": "拖入图片",
      "cards": [
        {
          "title": "通用大模型",
          "amount": "420 亿",
          "share": "43.3%",
          "note": "押注「AGI 叙事」，OpenAI / Anthropic / xAI 领跑。",
          "tags": [
            "明星赛道",
            "资本高地"
          ]
        },
        {
          "title": "垂直应用",
          "amount": "245 亿",
          "share": "25.3%",
          "note": "商业化路径渐清晰，企业搜索 / 法律 AI 落地。",
          "tags": [
            "落地清晰",
            "隐形价值"
          ]
        },
        {
          "title": "AI 基础设施",
          "amount": "158 亿",
          "share": "16.3%",
          "note": "「卖铲子」逻辑，算力云与数据平台稀缺。",
          "tags": [
            "确定性强",
            "卖铲子"
          ]
        },
        {
          "title": "AI 芯片",
          "amount": "97 亿",
          "share": "10.0%",
          "note": "产业链上游硬件，Cerebras / Groq 等新势力。",
          "tags": [
            "上游硬件",
            "长周期"
          ]
        }
      ]
    }
  },
  {
    "key": "theme04_page010",
    "themeKey": "theme04",
    "pageNumber": 10,
    "layout": "THEME04-010",
    "slot": "donut",
    "label": "赛道占比",
    "bgClass": "",
    "controls": [
      {
        "key": "copy",
        "label": "可见文案",
        "type": "list",
        "default": {
          "text001": "亿",
          "text002": "%"
        },
        "desc": "页面中的固定可见文案、单位和图片槽提示",
        "publicKey": "copy",
        "publicLabel": "可见文案",
        "description": "页面中的固定可见文案、单位和图片槽提示"
      },
      {
        "key": "hlStyle",
        "label": "高亮样式",
        "type": "radio",
        "default": "glass",
        "options": [
          [
            "glass",
            "玻璃糖果"
          ],
          [
            "pill",
            "扁平药丸"
          ],
          [
            "underline",
            "下划线"
          ],
          [
            "text",
            "纯文字"
          ]
        ],
        "desc": "关键词高亮：玻璃糖果 / 扁平药丸 / 下划线 / 纯文字",
        "publicKey": "hlStyle",
        "publicLabel": "高亮样式",
        "description": "关键词高亮：玻璃糖果 / 扁平药丸 / 下划线 / 纯文字"
      },
      {
        "key": "hlTilt",
        "label": "高亮倾斜",
        "type": "slider",
        "default": 2,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "关键词胶囊旋转角度（仅糖果/药丸样式生效）",
        "publicKey": "hlTilt",
        "publicLabel": "高亮倾斜",
        "description": "关键词胶囊旋转角度（仅糖果/药丸样式生效）"
      },
      {
        "key": "segmentCount",
        "label": "分段数量",
        "type": "slider",
        "default": 5,
        "min": 2,
        "max": 5,
        "step": 1,
        "desc": "展示的分类分段数量",
        "publicKey": "categoryCount",
        "publicLabel": "分段数量",
        "description": "展示的分类分段数量"
      },
      {
        "key": "chartVariant",
        "label": "图表类型",
        "type": "radio",
        "default": "donut",
        "options": [
          [
            "donut",
            "环形"
          ],
          [
            "bar",
            "柱状"
          ]
        ],
        "desc": "同心放射环 / 纵向渐变柱",
        "publicKey": "chartVariant",
        "publicLabel": "图表类型",
        "description": "同心放射环 / 纵向渐变柱"
      },
      {
        "key": "focusEnabled",
        "label": "重点突出",
        "type": "toggle",
        "default": true,
        "desc": "是否高亮某一分段",
        "publicKey": "focusEnabled",
        "publicLabel": "重点突出",
        "description": "是否高亮某一分段"
      },
      {
        "key": "focusIndex",
        "label": "重点序号",
        "type": "slider",
        "default": 1,
        "min": 1,
        "max": 5,
        "step": 1,
        "maxFromKey": "segmentCount",
        "desc": "被高亮分段的序号",
        "publicKey": "focusIndex",
        "publicLabel": "重点序号",
        "description": "被高亮分段的序号"
      },
      {
        "key": "showCenterTotal",
        "label": "中心总额",
        "type": "toggle",
        "default": true,
        "desc": "环形中心总数值(环形生效)",
        "publicKey": "showValueLabels",
        "publicLabel": "中心总额",
        "description": "环形中心总数值(环形生效)"
      },
      {
        "key": "showLegend",
        "label": "图例列表",
        "type": "toggle",
        "default": true,
        "desc": "右侧图例列表(环形生效)",
        "publicKey": "showLegend",
        "publicLabel": "图例列表",
        "description": "右侧图例列表(环形生效)"
      },
      {
        "key": "showDecorations",
        "label": "装饰元素",
        "type": "toggle",
        "default": true,
        "desc": "星芒 / 圆环等点缀",
        "publicKey": "showDecorations",
        "publicLabel": "装饰元素",
        "description": "星芒 / 圆环等点缀"
      },
      {
        "key": "segments",
        "label": "分类分段",
        "type": "list",
        "default": [
          {
            "zh": "通用大模型",
            "en": "Foundation Model",
            "amt": 420,
            "pct": 43.3,
            "color": "#15A7F0"
          },
          {
            "zh": "垂直应用",
            "en": "Vertical AI",
            "amt": 245,
            "pct": 25.3,
            "color": "#27E021"
          },
          {
            "zh": "AI 基础设施",
            "en": "Infrastructure",
            "amt": 158,
            "pct": 16.3,
            "color": "#FFC700"
          },
          {
            "zh": "AI 芯片",
            "en": "Hardware",
            "amt": 97,
            "pct": 10,
            "color": "#FF9FE2"
          },
          {
            "zh": "其他赛道",
            "en": "Tooling · Safety",
            "amt": 50,
            "pct": 5.1,
            "color": "#8a8f98"
          }
        ],
        "desc": "分类：中文 / 英文 / 数值 / 占比 / 主色（中心总额自动求和）",
        "publicKey": "segments",
        "publicLabel": "分类分段",
        "description": "分类：中文 / 英文 / 数值 / 占比 / 主色（中心总额自动求和）"
      }
    ],
    "defaultProps": {
      "copy": {
        "text001": "亿",
        "text002": "%"
      },
      "hlStyle": "glass",
      "hlTilt": 2,
      "segmentCount": 5,
      "chartVariant": "donut",
      "focusEnabled": true,
      "focusIndex": 1,
      "showCenterTotal": true,
      "showLegend": true,
      "showDecorations": true,
      "kicker": "行业分布 · SECTOR SHARE",
      "titleLead": "通用大模型",
      "titleKeyword": "独占近半",
      "sub": "97 笔大额融资按赛道归类，资金向「底座」高度倾斜——投资人押注 AGI 叙事。",
      "centerUnit": "亿美元",
      "centerCap": "总融资额",
      "segments": [
        {
          "zh": "通用大模型",
          "en": "Foundation Model",
          "amt": 420,
          "pct": 43.3,
          "color": "#15A7F0"
        },
        {
          "zh": "垂直应用",
          "en": "Vertical AI",
          "amt": 245,
          "pct": 25.3,
          "color": "#27E021"
        },
        {
          "zh": "AI 基础设施",
          "en": "Infrastructure",
          "amt": 158,
          "pct": 16.3,
          "color": "#FFC700"
        },
        {
          "zh": "AI 芯片",
          "en": "Hardware",
          "amt": 97,
          "pct": 10,
          "color": "#FF9FE2"
        },
        {
          "zh": "其他赛道",
          "en": "Tooling · Safety",
          "amt": 50,
          "pct": 5.1,
          "color": "#8a8f98"
        }
      ]
    }
  },
  {
    "key": "theme04_page011",
    "themeKey": "theme04",
    "pageNumber": 11,
    "layout": "THEME04-011",
    "slot": "scatter",
    "label": "估值散点",
    "bgClass": "",
    "controls": [
      {
        "key": "copy",
        "label": "可见文案",
        "type": "list",
        "default": {
          "text001": "资本图谱 · VALUATION MAP",
          "text002": "融资越猛，",
          "text003": "估值就越高吗",
          "text004": "亿",
          "text005": "融资",
          "text006": "亿",
          "text007": "估值跑在融资前面",
          "text008": "融资换体量 · 估值待追",
          "text009": "亿 · 热度",
          "text010": "最新估值（亿美元）→",
          "text011": "2024 融资规模（亿美元）→",
          "text012": "资本图谱",
          "text013": "气泡大小 = 资本热度 · 纵轴为 sqrt 示意比例（小值仍可辨识）· 数值见标注（报告 2.x · 调研整理）"
        },
        "desc": "页面中的固定可见文案、单位和图片槽提示",
        "publicKey": "copy",
        "publicLabel": "可见文案",
        "description": "页面中的固定可见文案、单位和图片槽提示"
      },
      {
        "key": "ptsData",
        "label": "ptsData",
        "type": "list",
        "default": [
          {
            "name": "OpenAI",
            "raise": 66,
            "val": 1570,
            "heat": 5,
            "color": "#27E021",
            "note": "估值断层第一"
          },
          {
            "name": "Databricks",
            "raise": 100,
            "val": 620,
            "heat": 4,
            "color": "#FFC700",
            "note": "单轮融资最猛"
          },
          {
            "name": "Anthropic",
            "raise": 80,
            "val": 600,
            "heat": 5,
            "color": "#15A7F0",
            "note": "安全派头号挑战者"
          },
          {
            "name": "xAI",
            "raise": 60,
            "val": 500,
            "heat": 4,
            "color": "#FF9FE2",
            "note": "后发高举高打"
          },
          {
            "name": "CoreWeave",
            "raise": 75,
            "val": 230,
            "heat": 3,
            "color": "#27E021",
            "note": "算力底座 · 估值待追"
          },
          {
            "name": "SSI",
            "raise": 10,
            "val": 50,
            "heat": 3,
            "color": "#15A7F0",
            "note": "种子即被追捧"
          }
        ],
        "desc": "默认数据内容",
        "publicKey": "ptsData",
        "publicLabel": "ptsData",
        "description": "默认数据内容"
      },
      {
        "key": "hlStyle",
        "label": "高亮样式",
        "type": "radio",
        "default": "glass",
        "options": [
          [
            "glass",
            "玻璃糖果"
          ],
          [
            "pill",
            "扁平药丸"
          ],
          [
            "underline",
            "下划线"
          ],
          [
            "text",
            "纯文字"
          ]
        ],
        "desc": "关键词高亮：玻璃糖果 / 扁平药丸 / 下划线 / 纯文字",
        "publicKey": "hlStyle",
        "publicLabel": "高亮样式",
        "description": "关键词高亮：玻璃糖果 / 扁平药丸 / 下划线 / 纯文字"
      },
      {
        "key": "hlTilt",
        "label": "高亮倾斜",
        "type": "slider",
        "default": 2,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "关键词胶囊旋转角度（仅糖果/药丸样式生效）",
        "publicKey": "hlTilt",
        "publicLabel": "高亮倾斜",
        "description": "关键词胶囊旋转角度（仅糖果/药丸样式生效）"
      },
      {
        "key": "itemCount",
        "label": "公司气泡数",
        "type": "slider",
        "default": 6,
        "min": 3,
        "max": 6,
        "step": 1,
        "desc": "展示的公司气泡数量",
        "publicKey": "itemCount",
        "publicLabel": "公司气泡数",
        "description": "展示的公司气泡数量"
      },
      {
        "key": "chartVariant",
        "label": "图表类型",
        "type": "radio",
        "default": "scatter",
        "options": [
          [
            "scatter",
            "散点"
          ],
          [
            "bars",
            "柱状"
          ]
        ],
        "desc": "气泡散点 / 横向柱状",
        "publicKey": "chartVariant",
        "publicLabel": "图表类型",
        "description": "气泡散点 / 横向柱状"
      },
      {
        "key": "focusEnabled",
        "label": "重点突出",
        "type": "toggle",
        "default": true,
        "desc": "是否高亮某一公司",
        "publicKey": "focusEnabled",
        "publicLabel": "重点突出",
        "description": "是否高亮某一公司"
      },
      {
        "key": "focusIndex",
        "label": "重点序号",
        "type": "slider",
        "default": 1,
        "min": 1,
        "max": 6,
        "step": 1,
        "maxFromKey": "itemCount",
        "desc": "被高亮公司的序号",
        "publicKey": "focusIndex",
        "publicLabel": "重点序号",
        "description": "被高亮公司的序号"
      },
      {
        "key": "showZones",
        "label": "对角分区",
        "type": "toggle",
        "default": true,
        "desc": "背景指标兑现 / 跑前淡色块",
        "publicKey": "showZones",
        "publicLabel": "对角分区",
        "description": "背景指标兑现 / 跑前淡色块"
      },
      {
        "key": "showAxisLabels",
        "label": "坐标轴文字",
        "type": "toggle",
        "default": true,
        "desc": "横纵坐标轴文字",
        "publicKey": "showAxisLabels",
        "publicLabel": "坐标轴文字",
        "description": "横纵坐标轴文字"
      },
      {
        "key": "showDecorations",
        "label": "装饰元素",
        "type": "toggle",
        "default": true,
        "desc": "星芒等点缀",
        "publicKey": "showDecorations",
        "publicLabel": "装饰元素",
        "description": "星芒等点缀"
      }
    ],
    "defaultProps": {
      "copy": {
        "text001": "资本图谱 · VALUATION MAP",
        "text002": "融资越猛，",
        "text003": "估值就越高吗",
        "text004": "亿",
        "text005": "融资",
        "text006": "亿",
        "text007": "估值跑在融资前面",
        "text008": "融资换体量 · 估值待追",
        "text009": "亿 · 热度",
        "text010": "最新估值（亿美元）→",
        "text011": "2024 融资规模（亿美元）→",
        "text012": "资本图谱",
        "text013": "气泡大小 = 资本热度 · 纵轴为 sqrt 示意比例（小值仍可辨识）· 数值见标注（报告 2.x · 调研整理）"
      },
      "ptsData": [
        {
          "name": "OpenAI",
          "raise": 66,
          "val": 1570,
          "heat": 5,
          "color": "#27E021",
          "note": "估值断层第一"
        },
        {
          "name": "Databricks",
          "raise": 100,
          "val": 620,
          "heat": 4,
          "color": "#FFC700",
          "note": "单轮融资最猛"
        },
        {
          "name": "Anthropic",
          "raise": 80,
          "val": 600,
          "heat": 5,
          "color": "#15A7F0",
          "note": "安全派头号挑战者"
        },
        {
          "name": "xAI",
          "raise": 60,
          "val": 500,
          "heat": 4,
          "color": "#FF9FE2",
          "note": "后发高举高打"
        },
        {
          "name": "CoreWeave",
          "raise": 75,
          "val": 230,
          "heat": 3,
          "color": "#27E021",
          "note": "算力底座 · 估值待追"
        },
        {
          "name": "SSI",
          "raise": 10,
          "val": 50,
          "heat": 3,
          "color": "#15A7F0",
          "note": "种子即被追捧"
        }
      ],
      "hlStyle": "glass",
      "hlTilt": 2,
      "itemCount": 6,
      "chartVariant": "scatter",
      "focusEnabled": true,
      "focusIndex": 1,
      "showZones": true,
      "showAxisLabels": true,
      "showDecorations": true
    }
  },
  {
    "key": "theme04_page012",
    "themeKey": "theme04",
    "pageNumber": 12,
    "layout": "THEME04-012",
    "slot": "slope",
    "label": "排名变迁",
    "bgClass": "",
    "controls": [
      {
        "key": "copy",
        "label": "可见文案",
        "type": "list",
        "default": {
          "text001": "半年风向 · RANK SHIFT",
          "text002": "半年之间，谁在",
          "text003": "逆势上位",
          "text004": "2024 上半年",
          "text005": "2024 下半年",
          "text006": "#",
          "text007": "#",
          "text008": "数据为调研整理与推演 · 名次＝该赛道半年内 ≥1 亿美元 AI 轮次的资本关注度排名（1＝最热 · 示意）"
        },
        "desc": "页面中的固定可见文案、单位和图片槽提示",
        "publicKey": "copy",
        "publicLabel": "可见文案",
        "description": "页面中的固定可见文案、单位和图片槽提示"
      },
      {
        "key": "rowsData",
        "label": "rowsData",
        "type": "list",
        "default": [
          {
            "name": "AI 算力 / 基础设施",
            "short": "算力·基建",
            "h1": 4,
            "h2": 1,
            "color": "#15A7F0"
          },
          {
            "name": "通用大模型",
            "short": "通用大模型",
            "h1": 1,
            "h2": 2,
            "color": "#27E021"
          },
          {
            "name": "企业级 AI 应用",
            "short": "企业应用",
            "h1": 2,
            "h2": 3,
            "color": "#FFC700"
          },
          {
            "name": "具身智能 / 机器人",
            "short": "具身智能",
            "h1": 6,
            "h2": 4,
            "color": "#FF9FE2"
          },
          {
            "name": "AI 安全 / 对齐",
            "short": "安全·对齐",
            "h1": 5,
            "h2": 5,
            "color": "#27E021"
          },
          {
            "name": "AIGC 内容生成",
            "short": "内容生成",
            "h1": 3,
            "h2": 6,
            "color": "#FFC700"
          }
        ],
        "desc": "默认数据内容",
        "publicKey": "rowsData",
        "publicLabel": "rowsData",
        "description": "默认数据内容"
      },
      {
        "key": "hlStyle",
        "label": "高亮样式",
        "type": "radio",
        "default": "glass",
        "options": [
          [
            "glass",
            "玻璃糖果"
          ],
          [
            "pill",
            "扁平药丸"
          ],
          [
            "underline",
            "下划线"
          ],
          [
            "text",
            "纯文字"
          ]
        ],
        "desc": "关键词高亮：玻璃糖果 / 扁平药丸 / 下划线 / 纯文字",
        "publicKey": "hlStyle",
        "publicLabel": "高亮样式",
        "description": "关键词高亮：玻璃糖果 / 扁平药丸 / 下划线 / 纯文字"
      },
      {
        "key": "hlTilt",
        "label": "高亮倾斜",
        "type": "slider",
        "default": 2,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "关键词胶囊旋转角度（仅糖果/药丸样式生效）",
        "publicKey": "hlTilt",
        "publicLabel": "高亮倾斜",
        "description": "关键词胶囊旋转角度（仅糖果/药丸样式生效）"
      },
      {
        "key": "itemCount",
        "label": "分类条数",
        "type": "slider",
        "default": 6,
        "min": 3,
        "max": 6,
        "step": 1,
        "desc": "展示的分类数量",
        "publicKey": "categoryCount",
        "publicLabel": "分类条数",
        "description": "展示的分类数量"
      },
      {
        "key": "chartVariant",
        "label": "图表类型",
        "type": "radio",
        "default": "slope",
        "options": [
          [
            "slope",
            "斜率图"
          ],
          [
            "bars",
            "横向柱"
          ]
        ],
        "desc": "斜率图 / 横向柱状",
        "publicKey": "chartVariant",
        "publicLabel": "图表类型",
        "description": "斜率图 / 横向柱状"
      },
      {
        "key": "focusEnabled",
        "label": "重点突出",
        "type": "toggle",
        "default": true,
        "desc": "是否高亮某一分类",
        "publicKey": "focusEnabled",
        "publicLabel": "重点突出",
        "description": "是否高亮某一分类"
      },
      {
        "key": "focusIndex",
        "label": "重点序号",
        "type": "slider",
        "default": 1,
        "min": 1,
        "max": 6,
        "step": 1,
        "maxFromKey": "itemCount",
        "desc": "被高亮分类的序号",
        "publicKey": "focusIndex",
        "publicLabel": "重点序号",
        "description": "被高亮分类的序号"
      },
      {
        "key": "showDelta",
        "label": "升降徽标",
        "type": "toggle",
        "default": true,
        "desc": "▲n / ▼n / = 升降标记",
        "publicKey": "showDelta",
        "publicLabel": "升降徽标",
        "description": "▲n / ▼n / = 升降标记"
      },
      {
        "key": "showRankNum",
        "label": "名次数字",
        "type": "toggle",
        "default": true,
        "desc": "两端名次数字",
        "publicKey": "showRankNum",
        "publicLabel": "名次数字",
        "description": "两端名次数字"
      },
      {
        "key": "showDecorations",
        "label": "装饰元素",
        "type": "toggle",
        "default": true,
        "desc": "星芒等点缀",
        "publicKey": "showDecorations",
        "publicLabel": "装饰元素",
        "description": "星芒等点缀"
      }
    ],
    "defaultProps": {
      "copy": {
        "text001": "半年风向 · RANK SHIFT",
        "text002": "半年之间，谁在",
        "text003": "逆势上位",
        "text004": "2024 上半年",
        "text005": "2024 下半年",
        "text006": "#",
        "text007": "#",
        "text008": "数据为调研整理与推演 · 名次＝该赛道半年内 ≥1 亿美元 AI 轮次的资本关注度排名（1＝最热 · 示意）"
      },
      "rowsData": [
        {
          "name": "AI 算力 / 基础设施",
          "short": "算力·基建",
          "h1": 4,
          "h2": 1,
          "color": "#15A7F0"
        },
        {
          "name": "通用大模型",
          "short": "通用大模型",
          "h1": 1,
          "h2": 2,
          "color": "#27E021"
        },
        {
          "name": "企业级 AI 应用",
          "short": "企业应用",
          "h1": 2,
          "h2": 3,
          "color": "#FFC700"
        },
        {
          "name": "具身智能 / 机器人",
          "short": "具身智能",
          "h1": 6,
          "h2": 4,
          "color": "#FF9FE2"
        },
        {
          "name": "AI 安全 / 对齐",
          "short": "安全·对齐",
          "h1": 5,
          "h2": 5,
          "color": "#27E021"
        },
        {
          "name": "AIGC 内容生成",
          "short": "内容生成",
          "h1": 3,
          "h2": 6,
          "color": "#FFC700"
        }
      ],
      "hlStyle": "glass",
      "hlTilt": 2,
      "itemCount": 6,
      "chartVariant": "slope",
      "focusEnabled": true,
      "focusIndex": 1,
      "showDelta": true,
      "showRankNum": true,
      "showDecorations": true
    }
  },
  {
    "key": "theme04_page013",
    "themeKey": "theme04",
    "pageNumber": 13,
    "layout": "THEME04-013",
    "slot": "treemap",
    "label": "资金版图",
    "bgClass": "",
    "controls": [
      {
        "key": "copy",
        "label": "可见文案",
        "type": "list",
        "default": {
          "text001": "资金版图 · FUNDING MAP",
          "text002": "赛道版图：通用大模型",
          "text003": "独占四成",
          "text004": "亿",
          "text005": "全年合计",
          "text006": "亿美元",
          "text007": "面积 / 长度 ∝ 赛道融资额 · 数据为调研整理（报告 3.1）"
        },
        "desc": "页面中的固定可见文案、单位和图片槽提示",
        "publicKey": "copy",
        "publicLabel": "可见文案",
        "description": "页面中的固定可见文案、单位和图片槽提示"
      },
      {
        "key": "segData",
        "label": "segData",
        "type": "list",
        "default": [
          {
            "zh": "通用大模型",
            "en": "FOUNDATION MODEL",
            "val": 420,
            "pct": "43.3%",
            "color": "#27E021",
            "note": "押注 AGI 叙事"
          },
          {
            "zh": "垂直应用",
            "en": "VERTICAL AI",
            "val": 245,
            "pct": "25.3%",
            "color": "#FF9FE2",
            "note": "寻找商业化路径"
          },
          {
            "zh": "AI 基础设施",
            "en": "INFRASTRUCTURE",
            "val": 158,
            "pct": "16.3%",
            "color": "#15A7F0",
            "note": "“卖铲子”逻辑"
          },
          {
            "zh": "AI 芯片",
            "en": "HARDWARE",
            "val": 97,
            "pct": "10.0%",
            "color": "#FFC700",
            "note": "算力上游"
          },
          {
            "zh": "其他",
            "en": "TOOLING · SAFETY",
            "val": 50,
            "pct": "5.1%",
            "color": "#9aa0a6",
            "note": "工具链 / 安全"
          }
        ],
        "desc": "默认数据内容",
        "publicKey": "segData",
        "publicLabel": "segData",
        "description": "默认数据内容"
      },
      {
        "key": "hlStyle",
        "label": "高亮样式",
        "type": "radio",
        "default": "glass",
        "options": [
          [
            "glass",
            "玻璃糖果"
          ],
          [
            "pill",
            "扁平药丸"
          ],
          [
            "underline",
            "下划线"
          ],
          [
            "text",
            "纯文字"
          ]
        ],
        "desc": "关键词高亮：玻璃糖果 / 扁平药丸 / 下划线 / 纯文字",
        "publicKey": "hlStyle",
        "publicLabel": "高亮样式",
        "description": "关键词高亮：玻璃糖果 / 扁平药丸 / 下划线 / 纯文字"
      },
      {
        "key": "hlTilt",
        "label": "高亮倾斜",
        "type": "slider",
        "default": 2,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "关键词胶囊旋转角度（仅糖果/药丸样式生效）",
        "publicKey": "hlTilt",
        "publicLabel": "高亮倾斜",
        "description": "关键词胶囊旋转角度（仅糖果/药丸样式生效）"
      },
      {
        "key": "segmentCount",
        "label": "分类块",
        "type": "slider",
        "default": 5,
        "min": 2,
        "max": 5,
        "step": 1,
        "desc": "展示的分类块数",
        "publicKey": "categoryCount",
        "publicLabel": "分类块",
        "description": "展示的分类块数"
      },
      {
        "key": "chartVariant",
        "label": "图表类型",
        "type": "radio",
        "default": "treemap",
        "options": [
          [
            "treemap",
            "矩形树图"
          ],
          [
            "bar",
            "横向柱"
          ]
        ],
        "desc": "矩形树图 / 横向柱状",
        "publicKey": "chartVariant",
        "publicLabel": "图表类型",
        "description": "矩形树图 / 横向柱状"
      },
      {
        "key": "focusEnabled",
        "label": "重点突出",
        "type": "toggle",
        "default": true,
        "desc": "是否高亮某一分类",
        "publicKey": "focusEnabled",
        "publicLabel": "重点突出",
        "description": "是否高亮某一分类"
      },
      {
        "key": "focusIndex",
        "label": "重点序号",
        "type": "slider",
        "default": 1,
        "min": 1,
        "max": 5,
        "step": 1,
        "maxFromKey": "segmentCount",
        "desc": "被高亮分类的序号",
        "publicKey": "focusIndex",
        "publicLabel": "重点序号",
        "description": "被高亮分类的序号"
      },
      {
        "key": "showShare",
        "label": "占比百分比",
        "type": "toggle",
        "default": true,
        "desc": "瓷砖 / 柱尾占比显隐",
        "publicKey": "showShare",
        "publicLabel": "占比百分比",
        "description": "瓷砖 / 柱尾占比显隐"
      },
      {
        "key": "showTotal",
        "label": "合计徽标",
        "type": "toggle",
        "default": true,
        "desc": "页脚总额显隐",
        "publicKey": "showTotal",
        "publicLabel": "合计徽标",
        "description": "页脚总额显隐"
      },
      {
        "key": "showDecorations",
        "label": "装饰元素",
        "type": "toggle",
        "default": true,
        "desc": "星芒等点缀",
        "publicKey": "showDecorations",
        "publicLabel": "装饰元素",
        "description": "星芒等点缀"
      }
    ],
    "defaultProps": {
      "copy": {
        "text001": "资金版图 · FUNDING MAP",
        "text002": "赛道版图：通用大模型",
        "text003": "独占四成",
        "text004": "亿",
        "text005": "全年合计",
        "text006": "亿美元",
        "text007": "面积 / 长度 ∝ 赛道融资额 · 数据为调研整理（报告 3.1）"
      },
      "segData": [
        {
          "zh": "通用大模型",
          "en": "FOUNDATION MODEL",
          "val": 420,
          "pct": "43.3%",
          "color": "#27E021",
          "note": "押注 AGI 叙事"
        },
        {
          "zh": "垂直应用",
          "en": "VERTICAL AI",
          "val": 245,
          "pct": "25.3%",
          "color": "#FF9FE2",
          "note": "寻找商业化路径"
        },
        {
          "zh": "AI 基础设施",
          "en": "INFRASTRUCTURE",
          "val": 158,
          "pct": "16.3%",
          "color": "#15A7F0",
          "note": "“卖铲子”逻辑"
        },
        {
          "zh": "AI 芯片",
          "en": "HARDWARE",
          "val": 97,
          "pct": "10.0%",
          "color": "#FFC700",
          "note": "算力上游"
        },
        {
          "zh": "其他",
          "en": "TOOLING · SAFETY",
          "val": 50,
          "pct": "5.1%",
          "color": "#9aa0a6",
          "note": "工具链 / 安全"
        }
      ],
      "hlStyle": "glass",
      "hlTilt": 2,
      "segmentCount": 5,
      "chartVariant": "treemap",
      "focusEnabled": true,
      "focusIndex": 1,
      "showShare": true,
      "showTotal": true,
      "showDecorations": true
    }
  },
  {
    "key": "theme04_page014",
    "themeKey": "theme04",
    "pageNumber": 14,
    "layout": "THEME04-014",
    "slot": "waterfall",
    "label": "资金瀑布",
    "bgClass": "",
    "controls": [
      {
        "key": "copy",
        "label": "可见文案",
        "type": "list",
        "default": {
          "text001": "资金构成 · WATERFALL",
          "text002": "总盘子，是被",
          "text003": "逐层堆出来",
          "text004": "的",
          "text005": "合计盘子",
          "text006": "TOTAL · 亿美元",
          "text007": "亿",
          "text008": "头部赛道领跑",
          "text009": "通用大模型 + 算力两条赛道吃掉七成盘子 · 数据为调研整理（报告 3.1，单位亿美元 / 示意比例）"
        },
        "desc": "页面中的固定可见文案、单位和图片槽提示",
        "publicKey": "copy",
        "publicLabel": "可见文案",
        "description": "页面中的固定可见文案、单位和图片槽提示"
      },
      {
        "key": "segsData",
        "label": "segsData",
        "type": "list",
        "default": [
          {
            "zh": "通用大模型",
            "en": "FOUNDATION",
            "value": 480,
            "color": "#27E021"
          },
          {
            "zh": "算力 / 云",
            "en": "COMPUTE",
            "value": 360,
            "color": "#15A7F0"
          },
          {
            "zh": "应用层",
            "en": "APPLICATION",
            "value": 150,
            "color": "#FFC700"
          },
          {
            "zh": "具身智能",
            "en": "ROBOTICS",
            "value": 120,
            "color": "#FF9FE2"
          },
          {
            "zh": "其他赛道",
            "en": "OTHERS",
            "value": 90,
            "color": "#9aa0ff"
          }
        ],
        "desc": "默认数据内容",
        "publicKey": "segsData",
        "publicLabel": "segsData",
        "description": "默认数据内容"
      },
      {
        "key": "hlStyle",
        "label": "高亮样式",
        "type": "radio",
        "default": "glass",
        "options": [
          [
            "glass",
            "玻璃糖果"
          ],
          [
            "pill",
            "扁平药丸"
          ],
          [
            "underline",
            "下划线"
          ],
          [
            "text",
            "纯文字"
          ]
        ],
        "desc": "关键词高亮：玻璃糖果 / 扁平药丸 / 下划线 / 纯文字",
        "publicKey": "hlStyle",
        "publicLabel": "高亮样式",
        "description": "关键词高亮：玻璃糖果 / 扁平药丸 / 下划线 / 纯文字"
      },
      {
        "key": "hlTilt",
        "label": "高亮倾斜",
        "type": "slider",
        "default": 2,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "关键词胶囊旋转角度（仅糖果/药丸样式生效）",
        "publicKey": "hlTilt",
        "publicLabel": "高亮倾斜",
        "description": "关键词胶囊旋转角度（仅糖果/药丸样式生效）"
      },
      {
        "key": "segmentCount",
        "label": "分类段数",
        "type": "slider",
        "default": 5,
        "min": 2,
        "max": 5,
        "step": 1,
        "desc": "参与累加的分类段数",
        "publicKey": "categoryCount",
        "publicLabel": "分类段数",
        "description": "参与累加的分类段数"
      },
      {
        "key": "chartVariant",
        "label": "图表类型",
        "type": "radio",
        "default": "waterfall",
        "options": [
          [
            "waterfall",
            "瀑布图"
          ],
          [
            "bar",
            "横向柱"
          ]
        ],
        "desc": "瀑布累加 / 横向柱状",
        "publicKey": "chartVariant",
        "publicLabel": "图表类型",
        "description": "瀑布累加 / 横向柱状"
      },
      {
        "key": "focusEnabled",
        "label": "重点突出",
        "type": "toggle",
        "default": true,
        "desc": "是否高亮某一分类段",
        "publicKey": "focusEnabled",
        "publicLabel": "重点突出",
        "description": "是否高亮某一分类段"
      },
      {
        "key": "focusIndex",
        "label": "重点序号",
        "type": "slider",
        "default": 1,
        "min": 1,
        "max": 5,
        "step": 1,
        "maxFromKey": "segmentCount",
        "desc": "被高亮分类段的序号",
        "publicKey": "focusIndex",
        "publicLabel": "重点序号",
        "description": "被高亮分类段的序号"
      },
      {
        "key": "showConnectors",
        "label": "段间连接",
        "type": "toggle",
        "default": true,
        "desc": "瀑布段间虚线连接（瀑布生效）",
        "publicKey": "showConnectors",
        "publicLabel": "段间连接",
        "description": "瀑布段间虚线连接（瀑布生效）"
      },
      {
        "key": "showTotal",
        "label": "合计柱",
        "type": "toggle",
        "default": true,
        "desc": "末端总额柱显隐（瀑布生效）",
        "publicKey": "showTotal",
        "publicLabel": "合计柱",
        "description": "末端总额柱显隐（瀑布生效）"
      },
      {
        "key": "showDecorations",
        "label": "装饰元素",
        "type": "toggle",
        "default": true,
        "desc": "星芒等点缀",
        "publicKey": "showDecorations",
        "publicLabel": "装饰元素",
        "description": "星芒等点缀"
      }
    ],
    "defaultProps": {
      "copy": {
        "text001": "资金构成 · WATERFALL",
        "text002": "总盘子，是被",
        "text003": "逐层堆出来",
        "text004": "的",
        "text005": "合计盘子",
        "text006": "TOTAL · 亿美元",
        "text007": "亿",
        "text008": "头部赛道领跑",
        "text009": "通用大模型 + 算力两条赛道吃掉七成盘子 · 数据为调研整理（报告 3.1，单位亿美元 / 示意比例）"
      },
      "segsData": [
        {
          "zh": "通用大模型",
          "en": "FOUNDATION",
          "value": 480,
          "color": "#27E021"
        },
        {
          "zh": "算力 / 云",
          "en": "COMPUTE",
          "value": 360,
          "color": "#15A7F0"
        },
        {
          "zh": "应用层",
          "en": "APPLICATION",
          "value": 150,
          "color": "#FFC700"
        },
        {
          "zh": "具身智能",
          "en": "ROBOTICS",
          "value": 120,
          "color": "#FF9FE2"
        },
        {
          "zh": "其他赛道",
          "en": "OTHERS",
          "value": 90,
          "color": "#9aa0ff"
        }
      ],
      "hlStyle": "glass",
      "hlTilt": 2,
      "segmentCount": 5,
      "chartVariant": "waterfall",
      "focusEnabled": true,
      "focusIndex": 1,
      "showConnectors": true,
      "showTotal": true,
      "showDecorations": true
    }
  },
  {
    "key": "theme04_page015",
    "themeKey": "theme04",
    "pageNumber": 15,
    "layout": "THEME04-015",
    "slot": "groupbars",
    "label": "半年对比柱",
    "bgClass": "",
    "controls": [
      {
        "key": "copy",
        "label": "可见文案",
        "type": "list",
        "default": {
          "text001": "半年消长 · H1 vs H2",
          "text002": "下半年，",
          "text003": "每条赛道都在加速",
          "text004": "上半年 H1",
          "text005": "下半年 H2",
          "text006": "半年消长",
          "text007": "柱高为示意比例，数值以柱顶标签为准（单位亿美元）· 报告 3.x · 调研整理"
        },
        "desc": "页面中的固定可见文案、单位和图片槽提示",
        "publicKey": "copy",
        "publicLabel": "可见文案",
        "description": "页面中的固定可见文案、单位和图片槽提示"
      },
      {
        "key": "groupsData",
        "label": "groupsData",
        "type": "list",
        "default": [
          {
            "name": "算力基础设施",
            "en": "COMPUTE",
            "h1": 180,
            "h2": 260,
            "color": "#27E021"
          },
          {
            "name": "通用大模型",
            "en": "FOUNDATION",
            "h1": 150,
            "h2": 210,
            "color": "#15A7F0"
          },
          {
            "name": "应用层",
            "en": "APPLICATION",
            "h1": 70,
            "h2": 110,
            "color": "#FFC700"
          },
          {
            "name": "行业垂直",
            "en": "VERTICAL",
            "h1": 45,
            "h2": 80,
            "color": "#FF9FE2"
          },
          {
            "name": "数据与工具",
            "en": "DATA & TOOLS",
            "h1": 30,
            "h2": 55,
            "color": "#27E021"
          }
        ],
        "desc": "默认数据内容",
        "publicKey": "groupsData",
        "publicLabel": "groupsData",
        "description": "默认数据内容"
      },
      {
        "key": "hlStyle",
        "label": "高亮样式",
        "type": "radio",
        "default": "glass",
        "options": [
          [
            "glass",
            "玻璃糖果"
          ],
          [
            "pill",
            "扁平药丸"
          ],
          [
            "underline",
            "下划线"
          ],
          [
            "text",
            "纯文字"
          ]
        ],
        "desc": "关键词高亮：玻璃糖果 / 扁平药丸 / 下划线 / 纯文字",
        "publicKey": "hlStyle",
        "publicLabel": "高亮样式",
        "description": "关键词高亮：玻璃糖果 / 扁平药丸 / 下划线 / 纯文字"
      },
      {
        "key": "hlTilt",
        "label": "高亮倾斜",
        "type": "slider",
        "default": 2,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "关键词胶囊旋转角度（仅糖果/药丸样式生效）",
        "publicKey": "hlTilt",
        "publicLabel": "高亮倾斜",
        "description": "关键词胶囊旋转角度（仅糖果/药丸样式生效）"
      },
      {
        "key": "columnCount",
        "label": "分类组数",
        "type": "slider",
        "default": 5,
        "min": 3,
        "max": 5,
        "step": 1,
        "desc": "展示的分类组数量",
        "publicKey": "categoryCount",
        "publicLabel": "分类组数",
        "description": "展示的分类组数量"
      },
      {
        "key": "chartVariant",
        "label": "图表类型",
        "type": "radio",
        "default": "group",
        "options": [
          [
            "group",
            "双柱"
          ],
          [
            "total",
            "合计"
          ]
        ],
        "desc": "上下半年双柱 / 合计单柱",
        "publicKey": "chartVariant",
        "publicLabel": "图表类型",
        "description": "上下半年双柱 / 合计单柱"
      },
      {
        "key": "focusEnabled",
        "label": "重点突出",
        "type": "toggle",
        "default": true,
        "desc": "是否高亮某一分类组",
        "publicKey": "focusEnabled",
        "publicLabel": "重点突出",
        "description": "是否高亮某一分类组"
      },
      {
        "key": "focusIndex",
        "label": "重点序号",
        "type": "slider",
        "default": 1,
        "min": 1,
        "max": 5,
        "step": 1,
        "maxFromKey": "columnCount",
        "desc": "被高亮分类的序号",
        "publicKey": "focusIndex",
        "publicLabel": "重点序号",
        "description": "被高亮分类的序号"
      },
      {
        "key": "showValues",
        "label": "柱顶数值",
        "type": "toggle",
        "default": true,
        "desc": "柱顶数值标签",
        "publicKey": "showValueLabels",
        "publicLabel": "柱顶数值",
        "description": "柱顶数值标签"
      },
      {
        "key": "showLegend",
        "label": "图例",
        "type": "toggle",
        "default": true,
        "desc": "上 / 下半年图例",
        "publicKey": "showLegend",
        "publicLabel": "图例",
        "description": "上 / 下半年图例"
      },
      {
        "key": "showDecorations",
        "label": "装饰元素",
        "type": "toggle",
        "default": true,
        "desc": "星芒等点缀",
        "publicKey": "showDecorations",
        "publicLabel": "装饰元素",
        "description": "星芒等点缀"
      }
    ],
    "defaultProps": {
      "copy": {
        "text001": "半年消长 · H1 vs H2",
        "text002": "下半年，",
        "text003": "每条赛道都在加速",
        "text004": "上半年 H1",
        "text005": "下半年 H2",
        "text006": "半年消长",
        "text007": "柱高为示意比例，数值以柱顶标签为准（单位亿美元）· 报告 3.x · 调研整理"
      },
      "groupsData": [
        {
          "name": "算力基础设施",
          "en": "COMPUTE",
          "h1": 180,
          "h2": 260,
          "color": "#27E021"
        },
        {
          "name": "通用大模型",
          "en": "FOUNDATION",
          "h1": 150,
          "h2": 210,
          "color": "#15A7F0"
        },
        {
          "name": "应用层",
          "en": "APPLICATION",
          "h1": 70,
          "h2": 110,
          "color": "#FFC700"
        },
        {
          "name": "行业垂直",
          "en": "VERTICAL",
          "h1": 45,
          "h2": 80,
          "color": "#FF9FE2"
        },
        {
          "name": "数据与工具",
          "en": "DATA & TOOLS",
          "h1": 30,
          "h2": 55,
          "color": "#27E021"
        }
      ],
      "hlStyle": "glass",
      "hlTilt": 2,
      "columnCount": 5,
      "chartVariant": "group",
      "focusEnabled": true,
      "focusIndex": 1,
      "showValues": true,
      "showLegend": true,
      "showDecorations": true
    }
  },
  {
    "key": "theme04_page016",
    "themeKey": "theme04",
    "pageNumber": 16,
    "layout": "THEME04-016",
    "slot": "bento",
    "label": "一图速览",
    "bgClass": "",
    "controls": [
      {
        "key": "copy",
        "label": "可见文案",
        "type": "list",
        "default": {
          "text001": "AT A GLANCE · 一图速览",
          "text002": "2024，",
          "text003": "一屏看懂资本流向",
          "text004": "“"
        },
        "desc": "页面中的固定可见文案、单位和图片槽提示",
        "publicKey": "copy",
        "publicLabel": "可见文案",
        "description": "页面中的固定可见文案、单位和图片槽提示"
      },
      {
        "key": "tilesData",
        "label": "tilesData",
        "type": "list",
        "default": [
          {
            "type": "image",
            "area": "hero",
            "color": "#15A7F0",
            "initial": "AI",
            "ph": "主视觉 · 机房 / 团队 / 现场",
            "cap": "2024 · 资本现场"
          },
          {
            "type": "stat",
            "area": "big",
            "color": "#27E021",
            "value": "970",
            "unit": "亿",
            "label": "全年 AI 风投总额 / 美元",
            "big": true
          },
          {
            "type": "stat",
            "area": "s1",
            "color": "#FFC700",
            "value": "97",
            "unit": "笔",
            "label": "≥1 亿美元事件"
          },
          {
            "type": "image",
            "area": "img",
            "color": "#FF9FE2",
            "initial": "GPU",
            "ph": "算力 / 卡墙",
            "cap": "算力基建"
          },
          {
            "type": "quote",
            "area": "quote",
            "color": "#FF9FE2",
            "quote": "钱在追少数人",
            "tail": "头部高度集中，通用大模型最拥挤。"
          },
          {
            "type": "stat",
            "area": "s2",
            "color": "#15A7F0",
            "value": "≈1/3",
            "unit": "",
            "label": "占全美 VC"
          },
          {
            "type": "stat",
            "area": "s3",
            "color": "#FF9FE2",
            "value": "190",
            "unit": "亿",
            "label": "头部单笔估值峰值 / 美元"
          }
        ],
        "desc": "默认数据内容",
        "publicKey": "tilesData",
        "publicLabel": "tilesData",
        "description": "默认数据内容"
      },
      {
        "key": "hlStyle",
        "label": "高亮样式",
        "type": "radio",
        "default": "glass",
        "options": [
          [
            "glass",
            "玻璃糖果"
          ],
          [
            "pill",
            "扁平药丸"
          ],
          [
            "underline",
            "下划线"
          ],
          [
            "text",
            "纯文字"
          ]
        ],
        "desc": "关键词高亮：玻璃糖果 / 扁平药丸 / 下划线 / 纯文字",
        "publicKey": "hlStyle",
        "publicLabel": "高亮样式",
        "description": "关键词高亮：玻璃糖果 / 扁平药丸 / 下划线 / 纯文字"
      },
      {
        "key": "hlTilt",
        "label": "高亮倾斜",
        "type": "slider",
        "default": 2,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "关键词胶囊旋转角度（仅糖果/药丸样式生效）",
        "publicKey": "hlTilt",
        "publicLabel": "高亮倾斜",
        "description": "关键词胶囊旋转角度（仅糖果/药丸样式生效）"
      },
      {
        "key": "mediaCount",
        "label": "图片瓷砖",
        "type": "slider",
        "default": 2,
        "min": 0,
        "max": 2,
        "step": 1,
        "desc": "显示图片槽的瓷砖数(其余转无图态)",
        "publicKey": "mediaCount",
        "publicLabel": "图片瓷砖",
        "description": "显示图片槽的瓷砖数(其余转无图态)"
      },
      {
        "key": "focusEnabled",
        "label": "重点突出",
        "type": "toggle",
        "default": false,
        "desc": "是否高亮某一块瓷砖",
        "publicKey": "focusEnabled",
        "publicLabel": "重点突出",
        "description": "是否高亮某一块瓷砖"
      },
      {
        "key": "focusIndex",
        "label": "重点序号",
        "type": "slider",
        "default": 1,
        "min": 1,
        "max": 7,
        "step": 1,
        "desc": "被高亮瓷砖的序号",
        "publicKey": "focusIndex",
        "publicLabel": "重点序号",
        "description": "被高亮瓷砖的序号"
      },
      {
        "key": "paletteVariant",
        "label": "配色",
        "type": "radio",
        "default": "multi",
        "options": [
          [
            "multi",
            "多彩"
          ],
          [
            "mono",
            "单色"
          ]
        ],
        "desc": "瓷砖多彩 / 统一单色",
        "publicKey": "paletteVariant",
        "publicLabel": "配色",
        "description": "瓷砖多彩 / 统一单色"
      },
      {
        "key": "showCaptions",
        "label": "瓷砖标签",
        "type": "toggle",
        "default": true,
        "desc": "瓷砖小标签 / 说明",
        "publicKey": "showCaptions",
        "publicLabel": "瓷砖标签",
        "description": "瓷砖小标签 / 说明"
      },
      {
        "key": "showDecorations",
        "label": "装饰元素",
        "type": "toggle",
        "default": true,
        "desc": "星芒等点缀",
        "publicKey": "showDecorations",
        "publicLabel": "装饰元素",
        "description": "星芒等点缀"
      }
    ],
    "defaultProps": {
      "copy": {
        "text001": "AT A GLANCE · 一图速览",
        "text002": "2024，",
        "text003": "一屏看懂资本流向",
        "text004": "“"
      },
      "tilesData": [
        {
          "type": "image",
          "area": "hero",
          "color": "#15A7F0",
          "initial": "AI",
          "ph": "主视觉 · 机房 / 团队 / 现场",
          "cap": "2024 · 资本现场"
        },
        {
          "type": "stat",
          "area": "big",
          "color": "#27E021",
          "value": "970",
          "unit": "亿",
          "label": "全年 AI 风投总额 / 美元",
          "big": true
        },
        {
          "type": "stat",
          "area": "s1",
          "color": "#FFC700",
          "value": "97",
          "unit": "笔",
          "label": "≥1 亿美元事件"
        },
        {
          "type": "image",
          "area": "img",
          "color": "#FF9FE2",
          "initial": "GPU",
          "ph": "算力 / 卡墙",
          "cap": "算力基建"
        },
        {
          "type": "quote",
          "area": "quote",
          "color": "#FF9FE2",
          "quote": "钱在追少数人",
          "tail": "头部高度集中，通用大模型最拥挤。"
        },
        {
          "type": "stat",
          "area": "s2",
          "color": "#15A7F0",
          "value": "≈1/3",
          "unit": "",
          "label": "占全美 VC"
        },
        {
          "type": "stat",
          "area": "s3",
          "color": "#FF9FE2",
          "value": "190",
          "unit": "亿",
          "label": "头部单笔估值峰值 / 美元"
        }
      ],
      "hlStyle": "glass",
      "hlTilt": 2,
      "mediaCount": 2,
      "focusEnabled": false,
      "focusIndex": 1,
      "paletteVariant": "multi",
      "showCaptions": true,
      "showDecorations": true
    }
  },
  {
    "key": "theme04_page017",
    "themeKey": "theme04",
    "pageNumber": 17,
    "layout": "THEME04-017",
    "slot": "charts",
    "label": "融资趋势",
    "bgClass": "",
    "controls": [
      {
        "key": "copy",
        "label": "可见文案",
        "type": "list",
        "default": {
          "text001": "单位：",
          "text002": "%"
        },
        "desc": "页面中的固定可见文案、单位和图片槽提示",
        "publicKey": "copy",
        "publicLabel": "可见文案",
        "description": "页面中的固定可见文案、单位和图片槽提示"
      },
      {
        "key": "hlStyle",
        "label": "高亮样式",
        "type": "radio",
        "default": "glass",
        "options": [
          [
            "glass",
            "玻璃糖果"
          ],
          [
            "pill",
            "扁平药丸"
          ],
          [
            "underline",
            "下划线"
          ],
          [
            "text",
            "纯文字"
          ]
        ],
        "desc": "关键词高亮：玻璃糖果 / 扁平药丸 / 下划线 / 纯文字",
        "publicKey": "hlStyle",
        "publicLabel": "高亮样式",
        "description": "关键词高亮：玻璃糖果 / 扁平药丸 / 下划线 / 纯文字"
      },
      {
        "key": "hlTilt",
        "label": "高亮倾斜",
        "type": "slider",
        "default": 2,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "关键词胶囊旋转角度（仅糖果/药丸样式生效）",
        "publicKey": "hlTilt",
        "publicLabel": "高亮倾斜",
        "description": "关键词胶囊旋转角度（仅糖果/药丸样式生效）"
      },
      {
        "key": "panelCount",
        "label": "面板数量",
        "type": "slider",
        "default": 2,
        "min": 1,
        "max": 2,
        "step": 1,
        "desc": "并排展示的图表面板数",
        "publicKey": "panelCount",
        "publicLabel": "面板数量",
        "description": "并排展示的图表面板数"
      },
      {
        "key": "chartVariant",
        "label": "图表类型",
        "type": "radio",
        "default": "bar",
        "options": [
          [
            "bar",
            "柱状"
          ],
          [
            "line",
            "折线"
          ]
        ],
        "desc": "柱状图或折线图",
        "publicKey": "chartVariant",
        "publicLabel": "图表类型",
        "description": "柱状图或折线图"
      },
      {
        "key": "focusEnabled",
        "label": "高亮重点",
        "type": "toggle",
        "default": true,
        "desc": "是否高亮某个数据点",
        "publicKey": "focusEnabled",
        "publicLabel": "高亮重点",
        "description": "是否高亮某个数据点"
      },
      {
        "key": "focusIndex",
        "label": "重点序号",
        "type": "slider",
        "default": 3,
        "min": 1,
        "max": 4,
        "step": 1,
        "desc": "被高亮数据点的序号",
        "publicKey": "focusIndex",
        "publicLabel": "重点序号",
        "description": "被高亮数据点的序号"
      },
      {
        "key": "showGrowthMarkers",
        "label": "增长标注",
        "type": "toggle",
        "default": true,
        "desc": "柱间 +x% 增幅标注",
        "publicKey": "showGrowthMarkers",
        "publicLabel": "增长标注",
        "description": "柱间 +x% 增幅标注"
      },
      {
        "key": "showDecorations",
        "label": "装饰元素",
        "type": "toggle",
        "default": true,
        "desc": "星芒等点缀",
        "publicKey": "showDecorations",
        "publicLabel": "装饰元素",
        "description": "星芒等点缀"
      },
      {
        "key": "panels",
        "label": "图表面板",
        "type": "list",
        "default": [
          {
            "color": "#27E021",
            "title": "融资节奏",
            "hl": "前高后稳",
            "desc": "全年单笔 ≥1 亿美元融资呈「前高后稳」：Q2–Q3 连续达峰后理性回落，平均单笔约 10 亿美元，市场对头部标的高度追捧。",
            "unit": "亿美元",
            "data": [
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
            ]
          },
          {
            "color": "#FFC700",
            "title": "头部集中",
            "hl": "赢家通吃",
            "desc": "随着轮次后移，平均单笔融资额持续放大——「D 轮及以后」超 15 亿美元，少数独角兽反复获得巨额追加，市场集中度极高。",
            "unit": "亿美元",
            "data": [
              {
                "label": "B 轮",
                "value": 3.5
              },
              {
                "label": "C 轮",
                "value": 6.8
              },
              {
                "label": "D+ 轮",
                "value": 15.2
              }
            ]
          }
        ],
        "desc": "面板文案：标题 / 关键词 / 描述 / 单位（柱点数值 data 在 defaults 中）",
        "publicKey": "panels",
        "publicLabel": "图表面板",
        "description": "面板文案：标题 / 关键词 / 描述 / 单位（柱点数值 data 在 defaults 中）"
      }
    ],
    "defaultProps": {
      "copy": {
        "text001": "单位：",
        "text002": "%"
      },
      "panelCount": 2,
      "chartVariant": "bar",
      "focusEnabled": true,
      "focusIndex": 3,
      "showGrowthMarkers": true,
      "showDecorations": true,
      "hlStyle": "glass",
      "hlTilt": 2,
      "kicker": "市场节奏 · 融资趋势透视",
      "title": "全年「前高后稳」，资金向头部加速集中",
      "panels": [
        {
          "color": "#27E021",
          "title": "融资节奏",
          "hl": "前高后稳",
          "desc": "全年单笔 ≥1 亿美元融资呈「前高后稳」：Q2–Q3 连续达峰后理性回落，平均单笔约 10 亿美元，市场对头部标的高度追捧。",
          "unit": "亿美元",
          "data": [
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
          ]
        },
        {
          "color": "#FFC700",
          "title": "头部集中",
          "hl": "赢家通吃",
          "desc": "随着轮次后移，平均单笔融资额持续放大——「D 轮及以后」超 15 亿美元，少数独角兽反复获得巨额追加，市场集中度极高。",
          "unit": "亿美元",
          "data": [
            {
              "label": "B 轮",
              "value": 3.5
            },
            {
              "label": "C 轮",
              "value": 6.8
            },
            {
              "label": "D+ 轮",
              "value": 15.2
            }
          ]
        }
      ]
    }
  },
  {
    "key": "theme04_page018",
    "themeKey": "theme04",
    "pageNumber": 18,
    "layout": "THEME04-018",
    "slot": "monthchart",
    "label": "月度趋势",
    "bgClass": "",
    "controls": [
      {
        "key": "hlStyle",
        "label": "高亮样式",
        "type": "radio",
        "default": "glass",
        "options": [
          [
            "glass",
            "玻璃糖果"
          ],
          [
            "pill",
            "扁平药丸"
          ],
          [
            "underline",
            "下划线"
          ],
          [
            "text",
            "纯文字"
          ]
        ],
        "desc": "关键词高亮：玻璃糖果 / 扁平药丸 / 下划线 / 纯文字",
        "publicKey": "hlStyle",
        "publicLabel": "高亮样式",
        "description": "关键词高亮：玻璃糖果 / 扁平药丸 / 下划线 / 纯文字"
      },
      {
        "key": "hlTilt",
        "label": "高亮倾斜",
        "type": "slider",
        "default": 2,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "关键词胶囊旋转角度（仅糖果/药丸样式生效）",
        "publicKey": "hlTilt",
        "publicLabel": "高亮倾斜",
        "description": "关键词胶囊旋转角度（仅糖果/药丸样式生效）"
      },
      {
        "key": "chartVariant",
        "label": "图表类型",
        "type": "radio",
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
            "bar",
            "柱状"
          ]
        ],
        "desc": "面积 / 折线 / 柱状",
        "publicKey": "chartVariant",
        "publicLabel": "图表类型",
        "description": "面积 / 折线 / 柱状"
      },
      {
        "key": "focusEnabled",
        "label": "重点月份",
        "type": "toggle",
        "default": true,
        "desc": "是否高亮某个月份",
        "publicKey": "focusEnabled",
        "publicLabel": "重点月份",
        "description": "是否高亮某个月份"
      },
      {
        "key": "focusIndex",
        "label": "重点序号",
        "type": "slider",
        "default": 8,
        "min": 1,
        "max": 12,
        "step": 1,
        "desc": "被高亮月份(1=1月)",
        "publicKey": "focusIndex",
        "publicLabel": "重点序号",
        "description": "被高亮月份(1=1月)"
      },
      {
        "key": "showPeakMarkers",
        "label": "峰值标记",
        "type": "toggle",
        "default": true,
        "desc": "5月/8月峰值标注",
        "publicKey": "showPeakMarkers",
        "publicLabel": "峰值标记",
        "description": "5月/8月峰值标注"
      },
      {
        "key": "showAvgLine",
        "label": "月均线",
        "type": "toggle",
        "default": true,
        "desc": "月均参考虚线",
        "publicKey": "showAvgLine",
        "publicLabel": "月均线",
        "description": "月均参考虚线"
      },
      {
        "key": "showDecorations",
        "label": "装饰元素",
        "type": "toggle",
        "default": true,
        "desc": "星芒等点缀",
        "publicKey": "showDecorations",
        "publicLabel": "装饰元素",
        "description": "星芒等点缀"
      },
      {
        "key": "data",
        "label": "月度数据",
        "type": "list",
        "default": [
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
        "desc": "12 个月的数值（峰值标记自动取最大两点）",
        "publicKey": "data",
        "publicLabel": "月度数据",
        "description": "12 个月的数值（峰值标记自动取最大两点）"
      }
    ],
    "defaultProps": {
      "hlStyle": "glass",
      "hlTilt": 2,
      "chartVariant": "area",
      "focusEnabled": true,
      "focusIndex": 8,
      "showPeakMarkers": true,
      "showAvgLine": true,
      "showDecorations": true,
      "kicker": "逐月节奏 · MONTHLY TREND",
      "titleLead": "全年",
      "titleKeyword": "双峰",
      "titleTail": "：5 月、8 月集中关账",
      "sub": "细化到月度，多家头部公司集中关账推高 5 月（105）与 8 月（118）两次峰值，单位：亿美元。",
      "avgLabel": "月均 ≈",
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
      "avgValue": 81
    }
  },
  {
    "key": "theme04_page019",
    "themeKey": "theme04",
    "pageNumber": 19,
    "layout": "THEME04-019",
    "slot": "stacked",
    "label": "季度资本构成",
    "bgClass": "",
    "controls": [
      {
        "key": "copy",
        "label": "可见文案",
        "type": "list",
        "default": {
          "text001": "季度构成 · CAPITAL MIX BY QUARTER",
          "text002": "钱往哪挪？",
          "text003": "算力逐季抬升",
          "text004": "数据为调研整理与推演 ·",
          "text005": "· 示意"
        },
        "desc": "页面中的固定可见文案、单位和图片槽提示",
        "publicKey": "copy",
        "publicLabel": "可见文案",
        "description": "页面中的固定可见文案、单位和图片槽提示"
      },
      {
        "key": "colsData",
        "label": "colsData",
        "type": "list",
        "default": [
          {
            "q": "Q1",
            "total": 180,
            "parts": {
              "infra": 28,
              "model": 34,
              "app": 22,
              "other": 16
            }
          },
          {
            "q": "Q2",
            "total": 220,
            "parts": {
              "infra": 33,
              "model": 31,
              "app": 21,
              "other": 15
            }
          },
          {
            "q": "Q3",
            "total": 260,
            "parts": {
              "infra": 38,
              "model": 28,
              "app": 20,
              "other": 14
            }
          },
          {
            "q": "Q4",
            "total": 310,
            "parts": {
              "infra": 44,
              "model": 25,
              "app": 19,
              "other": 12
            }
          }
        ],
        "desc": "默认数据内容",
        "publicKey": "colsData",
        "publicLabel": "colsData",
        "description": "默认数据内容"
      },
      {
        "key": "tracksData",
        "label": "tracksData",
        "type": "list",
        "default": [
          {
            "key": "infra",
            "name": "AI 算力 / 基础设施",
            "short": "算力·基建",
            "color": "#15A7F0"
          },
          {
            "key": "model",
            "name": "通用大模型",
            "short": "通用大模型",
            "color": "#27E021"
          },
          {
            "key": "app",
            "name": "企业级 AI 应用",
            "short": "企业应用",
            "color": "#FFC700"
          },
          {
            "key": "other",
            "name": "具身 / 内容 / 其他",
            "short": "其他赛道",
            "color": "#FF9FE2"
          }
        ],
        "desc": "默认数据内容",
        "publicKey": "tracksData",
        "publicLabel": "tracksData",
        "description": "默认数据内容"
      },
      {
        "key": "hlStyle",
        "label": "高亮样式",
        "type": "radio",
        "default": "glass",
        "options": [
          [
            "glass",
            "玻璃糖果"
          ],
          [
            "pill",
            "扁平药丸"
          ],
          [
            "underline",
            "下划线"
          ],
          [
            "text",
            "纯文字"
          ]
        ],
        "desc": "关键词高亮：玻璃糖果 / 扁平药丸 / 下划线 / 纯文字",
        "publicKey": "hlStyle",
        "publicLabel": "高亮样式",
        "description": "关键词高亮：玻璃糖果 / 扁平药丸 / 下划线 / 纯文字"
      },
      {
        "key": "hlTilt",
        "label": "高亮倾斜",
        "type": "slider",
        "default": 2,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "关键词胶囊旋转角度（仅糖果/药丸样式生效）",
        "publicKey": "hlTilt",
        "publicLabel": "高亮倾斜",
        "description": "关键词胶囊旋转角度（仅糖果/药丸样式生效）"
      },
      {
        "key": "columnCount",
        "label": "时间柱数",
        "type": "slider",
        "default": 4,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "展示的时间段数量",
        "publicKey": "columnCount",
        "publicLabel": "时间柱数",
        "description": "展示的时间段数量"
      },
      {
        "key": "chartVariant",
        "label": "堆叠口径",
        "type": "radio",
        "default": "ratio",
        "options": [
          [
            "ratio",
            "百分比"
          ],
          [
            "absolute",
            "绝对额"
          ]
        ],
        "desc": "100% 占比 / 绝对额(柱高随总盘)",
        "publicKey": "chartVariant",
        "publicLabel": "堆叠口径",
        "description": "100% 占比 / 绝对额(柱高随总盘)"
      },
      {
        "key": "focusEnabled",
        "label": "重点突出",
        "type": "toggle",
        "default": true,
        "desc": "是否高亮某一分类",
        "publicKey": "focusEnabled",
        "publicLabel": "重点突出",
        "description": "是否高亮某一分类"
      },
      {
        "key": "focusIndex",
        "label": "重点分类",
        "type": "slider",
        "default": 1,
        "min": 1,
        "max": 4,
        "step": 1,
        "desc": "被高亮分类的序号",
        "publicKey": "focusIndex",
        "publicLabel": "重点分类",
        "description": "被高亮分类的序号"
      },
      {
        "key": "showSegLabel",
        "label": "段内标签",
        "type": "toggle",
        "default": true,
        "desc": "段内占比 / 数值标签",
        "publicKey": "showValueLabels",
        "publicLabel": "段内标签",
        "description": "段内占比 / 数值标签"
      },
      {
        "key": "showLegend",
        "label": "分类图例",
        "type": "toggle",
        "default": true,
        "desc": "底部分类图例",
        "publicKey": "showLegend",
        "publicLabel": "分类图例",
        "description": "底部分类图例"
      },
      {
        "key": "showDecorations",
        "label": "装饰元素",
        "type": "toggle",
        "default": true,
        "desc": "星芒等点缀",
        "publicKey": "showDecorations",
        "publicLabel": "装饰元素",
        "description": "星芒等点缀"
      }
    ],
    "defaultProps": {
      "copy": {
        "text001": "季度构成 · CAPITAL MIX BY QUARTER",
        "text002": "钱往哪挪？",
        "text003": "算力逐季抬升",
        "text004": "数据为调研整理与推演 ·",
        "text005": "· 示意"
      },
      "colsData": [
        {
          "q": "Q1",
          "total": 180,
          "parts": {
            "infra": 28,
            "model": 34,
            "app": 22,
            "other": 16
          }
        },
        {
          "q": "Q2",
          "total": 220,
          "parts": {
            "infra": 33,
            "model": 31,
            "app": 21,
            "other": 15
          }
        },
        {
          "q": "Q3",
          "total": 260,
          "parts": {
            "infra": 38,
            "model": 28,
            "app": 20,
            "other": 14
          }
        },
        {
          "q": "Q4",
          "total": 310,
          "parts": {
            "infra": 44,
            "model": 25,
            "app": 19,
            "other": 12
          }
        }
      ],
      "tracksData": [
        {
          "key": "infra",
          "name": "AI 算力 / 基础设施",
          "short": "算力·基建",
          "color": "#15A7F0"
        },
        {
          "key": "model",
          "name": "通用大模型",
          "short": "通用大模型",
          "color": "#27E021"
        },
        {
          "key": "app",
          "name": "企业级 AI 应用",
          "short": "企业应用",
          "color": "#FFC700"
        },
        {
          "key": "other",
          "name": "具身 / 内容 / 其他",
          "short": "其他赛道",
          "color": "#FF9FE2"
        }
      ],
      "hlStyle": "glass",
      "hlTilt": 2,
      "columnCount": 4,
      "chartVariant": "ratio",
      "focusEnabled": true,
      "focusIndex": 1,
      "showSegLabel": true,
      "showLegend": true,
      "showDecorations": true
    }
  },
  {
    "key": "theme04_page020",
    "themeKey": "theme04",
    "pageNumber": 20,
    "layout": "THEME04-020",
    "slot": "gauges",
    "label": "三重集中",
    "bgClass": "",
    "controls": [
      {
        "key": "copy",
        "label": "可见文案",
        "type": "list",
        "default": {
          "text001": "集中度 · CONCENTRATION",
          "text002": "钱、赛道、地理，",
          "text003": "越挤越窄",
          "text004": "%",
          "text005": "赢家通吃",
          "text006": "资金高度向头部公司、单一赛道与少数枢纽集中 · 数据为调研整理（报告 3.1 / 3.2）"
        },
        "desc": "页面中的固定可见文案、单位和图片槽提示",
        "publicKey": "copy",
        "publicLabel": "可见文案",
        "description": "页面中的固定可见文案、单位和图片槽提示"
      },
      {
        "key": "dialsData",
        "label": "dialsData",
        "type": "list",
        "default": [
          {
            "dim": "地理集中",
            "en": "GEOGRAPHY",
            "value": 63.9,
            "label": "旧金山湾区",
            "color": "#15A7F0",
            "note": "六成资金落在一座湾区"
          },
          {
            "dim": "赛道集中",
            "en": "SECTOR",
            "value": 43.3,
            "label": "通用大模型",
            "color": "#27E021",
            "note": "近半押注同一条赛道"
          },
          {
            "dim": "头部集中",
            "en": "LATE-STAGE",
            "value": 45.4,
            "label": "D 轮及以后 / 未标明",
            "color": "#FFC700",
            "note": "后期大额轮包揽近半笔数"
          }
        ],
        "desc": "默认数据内容",
        "publicKey": "dialsData",
        "publicLabel": "dialsData",
        "description": "默认数据内容"
      },
      {
        "key": "hlStyle",
        "label": "高亮样式",
        "type": "radio",
        "default": "glass",
        "options": [
          [
            "glass",
            "玻璃糖果"
          ],
          [
            "pill",
            "扁平药丸"
          ],
          [
            "underline",
            "下划线"
          ],
          [
            "text",
            "纯文字"
          ]
        ],
        "desc": "关键词高亮：玻璃糖果 / 扁平药丸 / 下划线 / 纯文字",
        "publicKey": "hlStyle",
        "publicLabel": "高亮样式",
        "description": "关键词高亮：玻璃糖果 / 扁平药丸 / 下划线 / 纯文字"
      },
      {
        "key": "hlTilt",
        "label": "高亮倾斜",
        "type": "slider",
        "default": 2,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "关键词胶囊旋转角度（仅糖果/药丸样式生效）",
        "publicKey": "hlTilt",
        "publicLabel": "高亮倾斜",
        "description": "关键词胶囊旋转角度（仅糖果/药丸样式生效）"
      },
      {
        "key": "gaugeCount",
        "label": "仪表盘数",
        "type": "slider",
        "default": 3,
        "min": 1,
        "max": 3,
        "step": 1,
        "desc": "展示的环形仪表盘数量",
        "publicKey": "gaugeCount",
        "publicLabel": "仪表盘数",
        "description": "展示的环形仪表盘数量"
      },
      {
        "key": "chartVariant",
        "label": "图表类型",
        "type": "radio",
        "default": "gauge",
        "options": [
          [
            "gauge",
            "环形盘"
          ],
          [
            "bar",
            "横向柱"
          ]
        ],
        "desc": "环形仪表盘 / 横向柱状",
        "publicKey": "chartVariant",
        "publicLabel": "图表类型",
        "description": "环形仪表盘 / 横向柱状"
      },
      {
        "key": "focusEnabled",
        "label": "重点突出",
        "type": "toggle",
        "default": false,
        "desc": "是否高亮某一仪表盘",
        "publicKey": "focusEnabled",
        "publicLabel": "重点突出",
        "description": "是否高亮某一仪表盘"
      },
      {
        "key": "focusIndex",
        "label": "重点序号",
        "type": "slider",
        "default": 1,
        "min": 1,
        "max": 3,
        "step": 1,
        "maxFromKey": "gaugeCount",
        "desc": "被高亮仪表盘的序号",
        "publicKey": "focusIndex",
        "publicLabel": "重点序号",
        "description": "被高亮仪表盘的序号"
      },
      {
        "key": "showContext",
        "label": "盘下注释",
        "type": "toggle",
        "default": true,
        "desc": "仪表盘下方注释行",
        "publicKey": "showContext",
        "publicLabel": "盘下注释",
        "description": "仪表盘下方注释行"
      },
      {
        "key": "showTrack",
        "label": "底环",
        "type": "toggle",
        "default": true,
        "desc": "未填充弧（底环）显隐",
        "publicKey": "showGuide",
        "publicLabel": "底环",
        "description": "未填充弧（底环）显隐"
      },
      {
        "key": "showDecorations",
        "label": "装饰元素",
        "type": "toggle",
        "default": true,
        "desc": "星芒等点缀",
        "publicKey": "showDecorations",
        "publicLabel": "装饰元素",
        "description": "星芒等点缀"
      }
    ],
    "defaultProps": {
      "copy": {
        "text001": "集中度 · CONCENTRATION",
        "text002": "钱、赛道、地理，",
        "text003": "越挤越窄",
        "text004": "%",
        "text005": "赢家通吃",
        "text006": "资金高度向头部公司、单一赛道与少数枢纽集中 · 数据为调研整理（报告 3.1 / 3.2）"
      },
      "dialsData": [
        {
          "dim": "地理集中",
          "en": "GEOGRAPHY",
          "value": 63.9,
          "label": "旧金山湾区",
          "color": "#15A7F0",
          "note": "六成资金落在一座湾区"
        },
        {
          "dim": "赛道集中",
          "en": "SECTOR",
          "value": 43.3,
          "label": "通用大模型",
          "color": "#27E021",
          "note": "近半押注同一条赛道"
        },
        {
          "dim": "头部集中",
          "en": "LATE-STAGE",
          "value": 45.4,
          "label": "D 轮及以后 / 未标明",
          "color": "#FFC700",
          "note": "后期大额轮包揽近半笔数"
        }
      ],
      "hlStyle": "glass",
      "hlTilt": 2,
      "gaugeCount": 3,
      "chartVariant": "gauge",
      "focusEnabled": false,
      "focusIndex": 1,
      "showContext": true,
      "showTrack": true,
      "showDecorations": true
    }
  },
  {
    "key": "theme04_page021",
    "themeKey": "theme04",
    "pageNumber": 21,
    "layout": "THEME04-021",
    "slot": "heatmap",
    "label": "资金热力矩阵",
    "bgClass": "",
    "controls": [
      {
        "key": "copy",
        "label": "可见文案",
        "type": "list",
        "default": {
          "text001": "资金热力 · MONTHLY HEATMAP",
          "text002": "热钱",
          "text003": "扎堆 5 月、8 月",
          "text004": "，通用大模型最烫手",
          "text005": "赛道 / 月",
          "text006": "合计",
          "text007": "弱",
          "text008": "强",
          "text009": "数值为相对热度（0–100）· 颜色深浅 / 气泡大小同义",
          "text010": "数据为调研整理与月度推演 · 列「合计」越高代表当月越热"
        },
        "desc": "页面中的固定可见文案、单位和图片槽提示",
        "publicKey": "copy",
        "publicLabel": "可见文案",
        "description": "页面中的固定可见文案、单位和图片槽提示"
      },
      {
        "key": "monthsData",
        "label": "monthsData",
        "type": "list",
        "default": [
          "1月",
          "2月",
          "3月",
          "4月",
          "5月",
          "6月",
          "7月",
          "8月",
          "9月",
          "10月",
          "11月",
          "12月"
        ],
        "desc": "默认数据内容",
        "publicKey": "monthsData",
        "publicLabel": "monthsData",
        "description": "默认数据内容"
      },
      {
        "key": "rowsData",
        "label": "rowsData",
        "type": "list",
        "default": [
          {
            "track": "通用大模型",
            "short": "LLM",
            "color": "#27E021",
            "vals": [
              32,
              44,
              58,
              70,
              96,
              54,
              50,
              92,
              64,
              82,
              70,
              76
            ]
          },
          {
            "track": "AI 基础设施",
            "short": "INFRA",
            "color": "#15A7F0",
            "vals": [
              40,
              34,
              50,
              46,
              62,
              56,
              70,
              76,
              56,
              60,
              66,
              82
            ]
          },
          {
            "track": "AI 硬件",
            "short": "HW",
            "color": "#FFC700",
            "vals": [
              22,
              30,
              56,
              40,
              84,
              36,
              30,
              46,
              40,
              30,
              36,
              42
            ]
          },
          {
            "track": "垂直应用",
            "short": "APP",
            "color": "#FF9FE2",
            "vals": [
              24,
              30,
              36,
              30,
              42,
              46,
              36,
              56,
              40,
              52,
              46,
              60
            ]
          }
        ],
        "desc": "默认数据内容",
        "publicKey": "rowsData",
        "publicLabel": "rowsData",
        "description": "默认数据内容"
      },
      {
        "key": "hlStyle",
        "label": "高亮样式",
        "type": "radio",
        "default": "glass",
        "options": [
          [
            "glass",
            "玻璃糖果"
          ],
          [
            "pill",
            "扁平药丸"
          ],
          [
            "underline",
            "下划线"
          ],
          [
            "text",
            "纯文字"
          ]
        ],
        "desc": "关键词高亮：玻璃糖果 / 扁平药丸 / 下划线 / 纯文字",
        "publicKey": "hlStyle",
        "publicLabel": "高亮样式",
        "description": "关键词高亮：玻璃糖果 / 扁平药丸 / 下划线 / 纯文字"
      },
      {
        "key": "hlTilt",
        "label": "高亮倾斜",
        "type": "slider",
        "default": 2,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "关键词胶囊旋转角度（仅糖果/药丸样式生效）",
        "publicKey": "hlTilt",
        "publicLabel": "高亮倾斜",
        "description": "关键词胶囊旋转角度（仅糖果/药丸样式生效）"
      },
      {
        "key": "columnCount",
        "label": "月份列数",
        "type": "slider",
        "default": 12,
        "min": 6,
        "max": 12,
        "step": 1,
        "desc": "展示的月份列数",
        "publicKey": "columnCount",
        "publicLabel": "月份列数",
        "description": "展示的月份列数"
      },
      {
        "key": "rowCount",
        "label": "分类行数",
        "type": "slider",
        "default": 4,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "展示的分类行数",
        "publicKey": "categoryCount",
        "publicLabel": "分类行数",
        "description": "展示的分类行数"
      },
      {
        "key": "chartVariant",
        "label": "编码方式",
        "type": "radio",
        "default": "heat",
        "options": [
          [
            "heat",
            "热力格"
          ],
          [
            "bubble",
            "气泡"
          ]
        ],
        "desc": "颜色深浅 / 气泡大小",
        "publicKey": "chartVariant",
        "publicLabel": "编码方式",
        "description": "颜色深浅 / 气泡大小"
      },
      {
        "key": "focusEnabled",
        "label": "重点突出",
        "type": "toggle",
        "default": true,
        "desc": "是否高亮某一月份",
        "publicKey": "focusEnabled",
        "publicLabel": "重点突出",
        "description": "是否高亮某一月份"
      },
      {
        "key": "focusIndex",
        "label": "重点月份",
        "type": "slider",
        "default": 5,
        "min": 1,
        "max": 12,
        "step": 1,
        "maxFromKey": "columnCount",
        "desc": "被高亮月份的序号",
        "publicKey": "focusIndex",
        "publicLabel": "重点月份",
        "description": "被高亮月份的序号"
      },
      {
        "key": "showRowTotal",
        "label": "分类合计",
        "type": "toggle",
        "default": true,
        "desc": "行尾分类合计列",
        "publicKey": "showRowTotal",
        "publicLabel": "分类合计",
        "description": "行尾分类合计列"
      },
      {
        "key": "showScale",
        "label": "强度图例",
        "type": "toggle",
        "default": true,
        "desc": "底部强度图例",
        "publicKey": "showScale",
        "publicLabel": "强度图例",
        "description": "底部强度图例"
      },
      {
        "key": "showDecorations",
        "label": "装饰元素",
        "type": "toggle",
        "default": true,
        "desc": "星芒 / 圆环等点缀",
        "publicKey": "showDecorations",
        "publicLabel": "装饰元素",
        "description": "星芒 / 圆环等点缀"
      }
    ],
    "defaultProps": {
      "copy": {
        "text001": "资金热力 · MONTHLY HEATMAP",
        "text002": "热钱",
        "text003": "扎堆 5 月、8 月",
        "text004": "，通用大模型最烫手",
        "text005": "赛道 / 月",
        "text006": "合计",
        "text007": "弱",
        "text008": "强",
        "text009": "数值为相对热度（0–100）· 颜色深浅 / 气泡大小同义",
        "text010": "数据为调研整理与月度推演 · 列「合计」越高代表当月越热"
      },
      "monthsData": [
        "1月",
        "2月",
        "3月",
        "4月",
        "5月",
        "6月",
        "7月",
        "8月",
        "9月",
        "10月",
        "11月",
        "12月"
      ],
      "rowsData": [
        {
          "track": "通用大模型",
          "short": "LLM",
          "color": "#27E021",
          "vals": [
            32,
            44,
            58,
            70,
            96,
            54,
            50,
            92,
            64,
            82,
            70,
            76
          ]
        },
        {
          "track": "AI 基础设施",
          "short": "INFRA",
          "color": "#15A7F0",
          "vals": [
            40,
            34,
            50,
            46,
            62,
            56,
            70,
            76,
            56,
            60,
            66,
            82
          ]
        },
        {
          "track": "AI 硬件",
          "short": "HW",
          "color": "#FFC700",
          "vals": [
            22,
            30,
            56,
            40,
            84,
            36,
            30,
            46,
            40,
            30,
            36,
            42
          ]
        },
        {
          "track": "垂直应用",
          "short": "APP",
          "color": "#FF9FE2",
          "vals": [
            24,
            30,
            36,
            30,
            42,
            46,
            36,
            56,
            40,
            52,
            46,
            60
          ]
        }
      ],
      "hlStyle": "glass",
      "hlTilt": 2,
      "columnCount": 12,
      "rowCount": 4,
      "chartVariant": "heat",
      "focusEnabled": true,
      "focusIndex": 5,
      "showRowTotal": true,
      "showScale": true,
      "showDecorations": true
    }
  },
  {
    "key": "theme04_page022",
    "themeKey": "theme04",
    "pageNumber": 22,
    "layout": "THEME04-022",
    "slot": "calendar",
    "label": "资本月历",
    "bgClass": "",
    "controls": [
      {
        "key": "copy",
        "label": "可见文案",
        "type": "list",
        "default": {
          "text001": "资本月历 · 2024 CALENDAR",
          "text002": "一年十二格，",
          "text003": "三个月最热",
          "text004": "大额融资笔数",
          "text005": "少",
          "text006": "多",
          "text007": "★ 峰值",
          "text008": "笔",
          "text009": "资本月历",
          "text010": "格内为当月 ≥1 亿美元融资笔数 · 着色随笔数加深 · 峰值月加 ★（报告 2.x · 调研整理）"
        },
        "desc": "页面中的固定可见文案、单位和图片槽提示",
        "publicKey": "copy",
        "publicLabel": "可见文案",
        "description": "页面中的固定可见文案、单位和图片槽提示"
      },
      {
        "key": "monthsData",
        "label": "monthsData",
        "type": "list",
        "default": [
          {
            "mo": "1月",
            "en": "JAN",
            "deals": 5,
            "ev": "",
            "peak": false
          },
          {
            "mo": "2月",
            "en": "FEB",
            "deals": 6,
            "ev": "Figure 6.7亿",
            "peak": false
          },
          {
            "mo": "3月",
            "en": "MAR",
            "deals": 8,
            "ev": "Anthropic 加注",
            "peak": false
          },
          {
            "mo": "4月",
            "en": "APR",
            "deals": 6,
            "ev": "",
            "peak": false
          },
          {
            "mo": "5月",
            "en": "MAY",
            "deals": 11,
            "ev": "xAI 60亿 · CoreWeave",
            "peak": true
          },
          {
            "mo": "6月",
            "en": "JUN",
            "deals": 7,
            "ev": "",
            "peak": false
          },
          {
            "mo": "7月",
            "en": "JUL",
            "deals": 6,
            "ev": "",
            "peak": false
          },
          {
            "mo": "8月",
            "en": "AUG",
            "deals": 9,
            "ev": "应用层放量",
            "peak": false
          },
          {
            "mo": "9月",
            "en": "SEP",
            "deals": 7,
            "ev": "",
            "peak": false
          },
          {
            "mo": "10月",
            "en": "OCT",
            "deals": 10,
            "ev": "OpenAI 66亿",
            "peak": true
          },
          {
            "mo": "11月",
            "en": "NOV",
            "deals": 8,
            "ev": "Anthropic 40亿",
            "peak": false
          },
          {
            "mo": "12月",
            "en": "DEC",
            "deals": 14,
            "ev": "Databricks 100亿",
            "peak": true
          }
        ],
        "desc": "默认数据内容",
        "publicKey": "monthsData",
        "publicLabel": "monthsData",
        "description": "默认数据内容"
      },
      {
        "key": "hlStyle",
        "label": "高亮样式",
        "type": "radio",
        "default": "glass",
        "options": [
          [
            "glass",
            "玻璃糖果"
          ],
          [
            "pill",
            "扁平药丸"
          ],
          [
            "underline",
            "下划线"
          ],
          [
            "text",
            "纯文字"
          ]
        ],
        "desc": "关键词高亮：玻璃糖果 / 扁平药丸 / 下划线 / 纯文字",
        "publicKey": "hlStyle",
        "publicLabel": "高亮样式",
        "description": "关键词高亮：玻璃糖果 / 扁平药丸 / 下划线 / 纯文字"
      },
      {
        "key": "hlTilt",
        "label": "高亮倾斜",
        "type": "slider",
        "default": 2,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "关键词胶囊旋转角度（仅糖果/药丸样式生效）",
        "publicKey": "hlTilt",
        "publicLabel": "高亮倾斜",
        "description": "关键词胶囊旋转角度（仅糖果/药丸样式生效）"
      },
      {
        "key": "monthCount",
        "label": "月份数",
        "type": "slider",
        "default": 12,
        "min": 6,
        "max": 12,
        "step": 1,
        "desc": "展示的月份数量",
        "publicKey": "monthCount",
        "publicLabel": "月份数",
        "description": "展示的月份数量"
      },
      {
        "key": "focusEnabled",
        "label": "重点突出",
        "type": "toggle",
        "default": true,
        "desc": "是否高亮某一月份",
        "publicKey": "focusEnabled",
        "publicLabel": "重点突出",
        "description": "是否高亮某一月份"
      },
      {
        "key": "focusIndex",
        "label": "重点月份",
        "type": "slider",
        "default": 12,
        "min": 1,
        "max": 12,
        "step": 1,
        "maxFromKey": "monthCount",
        "desc": "被高亮月份(1=1月)",
        "publicKey": "focusIndex",
        "publicLabel": "重点月份",
        "description": "被高亮月份(1=1月)"
      },
      {
        "key": "showHeat",
        "label": "热力着色",
        "type": "toggle",
        "default": true,
        "desc": "按笔数热力着色",
        "publicKey": "showHeat",
        "publicLabel": "热力着色",
        "description": "按笔数热力着色"
      },
      {
        "key": "showEventNote",
        "label": "标志事件",
        "type": "toggle",
        "default": true,
        "desc": "标志事件芯片",
        "publicKey": "showEventNote",
        "publicLabel": "标志事件",
        "description": "标志事件芯片"
      },
      {
        "key": "showPeakTag",
        "label": "峰值角标",
        "type": "toggle",
        "default": true,
        "desc": "峰值月 ★ 角标",
        "publicKey": "showPeakTag",
        "publicLabel": "峰值角标",
        "description": "峰值月 ★ 角标"
      },
      {
        "key": "showDecorations",
        "label": "装饰元素",
        "type": "toggle",
        "default": true,
        "desc": "星芒等点缀",
        "publicKey": "showDecorations",
        "publicLabel": "装饰元素",
        "description": "星芒等点缀"
      }
    ],
    "defaultProps": {
      "copy": {
        "text001": "资本月历 · 2024 CALENDAR",
        "text002": "一年十二格，",
        "text003": "三个月最热",
        "text004": "大额融资笔数",
        "text005": "少",
        "text006": "多",
        "text007": "★ 峰值",
        "text008": "笔",
        "text009": "资本月历",
        "text010": "格内为当月 ≥1 亿美元融资笔数 · 着色随笔数加深 · 峰值月加 ★（报告 2.x · 调研整理）"
      },
      "monthsData": [
        {
          "mo": "1月",
          "en": "JAN",
          "deals": 5,
          "ev": "",
          "peak": false
        },
        {
          "mo": "2月",
          "en": "FEB",
          "deals": 6,
          "ev": "Figure 6.7亿",
          "peak": false
        },
        {
          "mo": "3月",
          "en": "MAR",
          "deals": 8,
          "ev": "Anthropic 加注",
          "peak": false
        },
        {
          "mo": "4月",
          "en": "APR",
          "deals": 6,
          "ev": "",
          "peak": false
        },
        {
          "mo": "5月",
          "en": "MAY",
          "deals": 11,
          "ev": "xAI 60亿 · CoreWeave",
          "peak": true
        },
        {
          "mo": "6月",
          "en": "JUN",
          "deals": 7,
          "ev": "",
          "peak": false
        },
        {
          "mo": "7月",
          "en": "JUL",
          "deals": 6,
          "ev": "",
          "peak": false
        },
        {
          "mo": "8月",
          "en": "AUG",
          "deals": 9,
          "ev": "应用层放量",
          "peak": false
        },
        {
          "mo": "9月",
          "en": "SEP",
          "deals": 7,
          "ev": "",
          "peak": false
        },
        {
          "mo": "10月",
          "en": "OCT",
          "deals": 10,
          "ev": "OpenAI 66亿",
          "peak": true
        },
        {
          "mo": "11月",
          "en": "NOV",
          "deals": 8,
          "ev": "Anthropic 40亿",
          "peak": false
        },
        {
          "mo": "12月",
          "en": "DEC",
          "deals": 14,
          "ev": "Databricks 100亿",
          "peak": true
        }
      ],
      "hlStyle": "glass",
      "hlTilt": 2,
      "monthCount": 12,
      "focusEnabled": true,
      "focusIndex": 12,
      "showHeat": true,
      "showEventNote": true,
      "showPeakTag": true,
      "showDecorations": true
    }
  },
  {
    "key": "theme04_page023",
    "themeKey": "theme04",
    "pageNumber": 23,
    "layout": "THEME04-023",
    "slot": "quartertable",
    "label": "季度走势表",
    "bgClass": "",
    "controls": [
      {
        "key": "copy",
        "label": "可见文案",
        "type": "list",
        "default": {
          "text001": "季度走势 · QUARTERLY TREND",
          "text002": "四个季度",
          "text003": "逐级走高",
          "text004": "，Q4 冲上全年峰值",
          "text005": "指标 / 季度",
          "text006": "趋势",
          "text007": "峰值",
          "text008": "数据为调研整理与推演 · 单位见各行标注 · 峰值角标标示该指标全年最高季度"
        },
        "desc": "页面中的固定可见文案、单位和图片槽提示",
        "publicKey": "copy",
        "publicLabel": "可见文案",
        "description": "页面中的固定可见文案、单位和图片槽提示"
      },
      {
        "key": "colsData",
        "label": "colsData",
        "type": "list",
        "default": [
          "Q1",
          "Q2",
          "Q3",
          "Q4"
        ],
        "desc": "默认数据内容",
        "publicKey": "colsData",
        "publicLabel": "colsData",
        "description": "默认数据内容"
      },
      {
        "key": "rowsData",
        "label": "rowsData",
        "type": "list",
        "default": [
          {
            "metric": "融资总额",
            "unit": "亿美元",
            "color": "#15A7F0",
            "vals": [
              185,
              232,
              248,
              305
            ]
          },
          {
            "metric": "大额轮次",
            "unit": "笔",
            "color": "#27E021",
            "vals": [
              18,
              23,
              27,
              29
            ]
          },
          {
            "metric": "平均单笔",
            "unit": "亿美元",
            "color": "#FFC700",
            "vals": [
              10.3,
              10.1,
              9.2,
              10.5
            ]
          },
          {
            "metric": "十亿级轮次",
            "unit": "笔",
            "color": "#FF9FE2",
            "vals": [
              2,
              4,
              5,
              7
            ]
          }
        ],
        "desc": "默认数据内容",
        "publicKey": "rowsData",
        "publicLabel": "rowsData",
        "description": "默认数据内容"
      },
      {
        "key": "hlStyle",
        "label": "高亮样式",
        "type": "radio",
        "default": "glass",
        "options": [
          [
            "glass",
            "玻璃糖果"
          ],
          [
            "pill",
            "扁平药丸"
          ],
          [
            "underline",
            "下划线"
          ],
          [
            "text",
            "纯文字"
          ]
        ],
        "desc": "关键词高亮：玻璃糖果 / 扁平药丸 / 下划线 / 纯文字",
        "publicKey": "hlStyle",
        "publicLabel": "高亮样式",
        "description": "关键词高亮：玻璃糖果 / 扁平药丸 / 下划线 / 纯文字"
      },
      {
        "key": "hlTilt",
        "label": "高亮倾斜",
        "type": "slider",
        "default": 2,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "关键词胶囊旋转角度（仅糖果/药丸样式生效）",
        "publicKey": "hlTilt",
        "publicLabel": "高亮倾斜",
        "description": "关键词胶囊旋转角度（仅糖果/药丸样式生效）"
      },
      {
        "key": "columnCount",
        "label": "时间列数",
        "type": "slider",
        "default": 4,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "展示的时间列数",
        "publicKey": "columnCount",
        "publicLabel": "时间列数",
        "description": "展示的时间列数"
      },
      {
        "key": "rowCount",
        "label": "指标行数",
        "type": "slider",
        "default": 4,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "展示的指标行数",
        "publicKey": "rowCount",
        "publicLabel": "指标行数",
        "description": "展示的指标行数"
      },
      {
        "key": "focusEnabled",
        "label": "重点突出",
        "type": "toggle",
        "default": true,
        "desc": "是否高亮某一列",
        "publicKey": "focusEnabled",
        "publicLabel": "重点突出",
        "description": "是否高亮某一列"
      },
      {
        "key": "focusIndex",
        "label": "重点列序号",
        "type": "slider",
        "default": 4,
        "min": 1,
        "max": 4,
        "step": 1,
        "maxFromKey": "columnCount",
        "desc": "被高亮列的序号",
        "publicKey": "focusIndex",
        "publicLabel": "重点列序号",
        "description": "被高亮列的序号"
      },
      {
        "key": "showTrendBar",
        "label": "趋势条",
        "type": "toggle",
        "default": false,
        "desc": "行尾迷你趋势折线",
        "publicKey": "showTrendBar",
        "publicLabel": "趋势条",
        "description": "行尾迷你趋势折线"
      },
      {
        "key": "showPeakTag",
        "label": "峰值角标",
        "type": "toggle",
        "default": true,
        "desc": "各行峰值单元格角标",
        "publicKey": "showPeakTag",
        "publicLabel": "峰值角标",
        "description": "各行峰值单元格角标"
      },
      {
        "key": "showDecorations",
        "label": "装饰元素",
        "type": "toggle",
        "default": true,
        "desc": "星芒 / 圆环等点缀",
        "publicKey": "showDecorations",
        "publicLabel": "装饰元素",
        "description": "星芒 / 圆环等点缀"
      }
    ],
    "defaultProps": {
      "copy": {
        "text001": "季度走势 · QUARTERLY TREND",
        "text002": "四个季度",
        "text003": "逐级走高",
        "text004": "，Q4 冲上全年峰值",
        "text005": "指标 / 季度",
        "text006": "趋势",
        "text007": "峰值",
        "text008": "数据为调研整理与推演 · 单位见各行标注 · 峰值角标标示该指标全年最高季度"
      },
      "colsData": [
        "Q1",
        "Q2",
        "Q3",
        "Q4"
      ],
      "rowsData": [
        {
          "metric": "融资总额",
          "unit": "亿美元",
          "color": "#15A7F0",
          "vals": [
            185,
            232,
            248,
            305
          ]
        },
        {
          "metric": "大额轮次",
          "unit": "笔",
          "color": "#27E021",
          "vals": [
            18,
            23,
            27,
            29
          ]
        },
        {
          "metric": "平均单笔",
          "unit": "亿美元",
          "color": "#FFC700",
          "vals": [
            10.3,
            10.1,
            9.2,
            10.5
          ]
        },
        {
          "metric": "十亿级轮次",
          "unit": "笔",
          "color": "#FF9FE2",
          "vals": [
            2,
            4,
            5,
            7
          ]
        }
      ],
      "hlStyle": "glass",
      "hlTilt": 2,
      "columnCount": 4,
      "rowCount": 4,
      "focusEnabled": true,
      "focusIndex": 4,
      "showTrendBar": false,
      "showPeakTag": true,
      "showDecorations": true
    }
  },
  {
    "key": "theme04_page024",
    "themeKey": "theme04",
    "pageNumber": 24,
    "layout": "THEME04-024",
    "slot": "table",
    "label": "轮次结构表",
    "bgClass": "",
    "controls": [
      {
        "key": "copy",
        "label": "可见文案",
        "type": "list",
        "default": {
          "text001": "笔",
          "text002": "笔"
        },
        "desc": "页面中的固定可见文案、单位和图片槽提示",
        "publicKey": "copy",
        "publicLabel": "可见文案",
        "description": "页面中的固定可见文案、单位和图片槽提示"
      },
      {
        "key": "hlStyle",
        "label": "高亮样式",
        "type": "radio",
        "default": "glass",
        "options": [
          [
            "glass",
            "玻璃糖果"
          ],
          [
            "pill",
            "扁平药丸"
          ],
          [
            "underline",
            "下划线"
          ],
          [
            "text",
            "纯文字"
          ]
        ],
        "desc": "关键词高亮：玻璃糖果 / 扁平药丸 / 下划线 / 纯文字",
        "publicKey": "hlStyle",
        "publicLabel": "高亮样式",
        "description": "关键词高亮：玻璃糖果 / 扁平药丸 / 下划线 / 纯文字"
      },
      {
        "key": "hlTilt",
        "label": "高亮倾斜",
        "type": "slider",
        "default": 2,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "关键词胶囊旋转角度（仅糖果/药丸样式生效）",
        "publicKey": "hlTilt",
        "publicLabel": "高亮倾斜",
        "description": "关键词胶囊旋转角度（仅糖果/药丸样式生效）"
      },
      {
        "key": "rowCount",
        "label": "数据行数",
        "type": "slider",
        "default": 6,
        "min": 3,
        "max": 6,
        "step": 1,
        "desc": "展示的数据行数量",
        "publicKey": "rowCount",
        "publicLabel": "数据行数",
        "description": "展示的数据行数量"
      },
      {
        "key": "focusEnabled",
        "label": "重点突出",
        "type": "toggle",
        "default": true,
        "desc": "是否高亮某一行",
        "publicKey": "focusEnabled",
        "publicLabel": "重点突出",
        "description": "是否高亮某一行"
      },
      {
        "key": "focusIndex",
        "label": "重点行号",
        "type": "slider",
        "default": 6,
        "min": 1,
        "max": 6,
        "step": 1,
        "maxFromKey": "rowCount",
        "desc": "被高亮行的序号",
        "publicKey": "focusIndex",
        "publicLabel": "重点行号",
        "description": "被高亮行的序号"
      },
      {
        "key": "showBar",
        "label": "可视化列",
        "type": "toggle",
        "default": true,
        "desc": "行内规模对比柱条列",
        "publicKey": "showBar",
        "publicLabel": "可视化列",
        "description": "行内规模对比柱条列"
      },
      {
        "key": "showTotalRow",
        "label": "合计行",
        "type": "toggle",
        "default": true,
        "desc": "底部合计行",
        "publicKey": "showTotalRow",
        "publicLabel": "合计行",
        "description": "底部合计行"
      },
      {
        "key": "showDecorations",
        "label": "装饰元素",
        "type": "toggle",
        "default": true,
        "desc": "星芒等点缀",
        "publicKey": "showDecorations",
        "publicLabel": "装饰元素",
        "description": "星芒等点缀"
      },
      {
        "key": "rows",
        "label": "数据行",
        "type": "list",
        "default": [
          {
            "stage": "种子轮",
            "en": "Seed",
            "count": 8,
            "avg": 1.2
          },
          {
            "stage": "A 轮",
            "en": "Series A",
            "count": 12,
            "avg": 1.8
          },
          {
            "stage": "B 轮",
            "en": "Series B",
            "count": 18,
            "avg": 3.5
          },
          {
            "stage": "C 轮",
            "en": "Series C",
            "count": 15,
            "avg": 6.8
          },
          {
            "stage": "D 轮及以后",
            "en": "Series D+",
            "count": 22,
            "avg": 15.2
          },
          {
            "stage": "未标明轮次",
            "en": "Undisclosed",
            "count": 22,
            "avg": 18.6
          }
        ],
        "desc": "表格数据行：阶段 / 英文 / 笔数 / 平均单笔",
        "publicKey": "rows",
        "publicLabel": "数据行",
        "description": "表格数据行：阶段 / 英文 / 笔数 / 平均单笔"
      },
      {
        "key": "totalRow",
        "label": "合计行",
        "type": "list",
        "default": {
          "stage": "全年合计",
          "en": "Total",
          "count": 97,
          "avg": 10
        },
        "desc": "底部合计行",
        "publicKey": "totalRow",
        "publicLabel": "合计行",
        "description": "底部合计行"
      }
    ],
    "defaultProps": {
      "copy": {
        "text001": "笔",
        "text002": "笔"
      },
      "hlStyle": "glass",
      "hlTilt": 2,
      "rowCount": 6,
      "focusEnabled": true,
      "focusIndex": 6,
      "showBar": true,
      "showTotalRow": true,
      "showDecorations": true,
      "kicker": "轮次结构 · ROUND STRUCTURE",
      "titleLead": "越往后轮次，",
      "titleKeyword": "单笔越大",
      "titleTail": "——头部「赢家通吃」",
      "sub": "「D 轮及以后」与「未标明轮次」合计占比过半，平均单笔超 15 亿美元。",
      "colStage": "融资轮次",
      "colCount": "事件笔数",
      "colAvg": "平均单笔 / 亿美元",
      "colBar": "规模对比",
      "rows": [
        {
          "stage": "种子轮",
          "en": "Seed",
          "count": 8,
          "avg": 1.2
        },
        {
          "stage": "A 轮",
          "en": "Series A",
          "count": 12,
          "avg": 1.8
        },
        {
          "stage": "B 轮",
          "en": "Series B",
          "count": 18,
          "avg": 3.5
        },
        {
          "stage": "C 轮",
          "en": "Series C",
          "count": 15,
          "avg": 6.8
        },
        {
          "stage": "D 轮及以后",
          "en": "Series D+",
          "count": 22,
          "avg": 15.2
        },
        {
          "stage": "未标明轮次",
          "en": "Undisclosed",
          "count": 22,
          "avg": 18.6
        }
      ],
      "totalRow": {
        "stage": "全年合计",
        "en": "Total",
        "count": 97,
        "avg": 10
      }
    }
  },
  {
    "key": "theme04_page025",
    "themeKey": "theme04",
    "pageNumber": 25,
    "layout": "THEME04-025",
    "slot": "spread",
    "label": "资金消长",
    "bgClass": "",
    "controls": [
      {
        "key": "copy",
        "label": "可见文案",
        "type": "list",
        "default": {
          "text001": "亿",
          "text002": "亿",
          "text003": "上",
          "text004": "下",
          "text005": "半年消长 · H1 → H2 SWING",
          "text006": "下半年，资本",
          "text007": "集体加码算力",
          "text008": "赛道",
          "text009": "2024 上半年",
          "text010": "2024 下半年",
          "text011": "环比 Δ",
          "text012": "上 / 下半年对比",
          "text013": "全市场合计",
          "text014": "亿",
          "text015": "亿",
          "text016": "数据为调研整理与推演 · 金额＝该赛道半年内 ≥1 亿美元 AI 轮次合计（亿美元 · 示意）· mini 双柱按全表最高额归一"
        },
        "desc": "页面中的固定可见文案、单位和图片槽提示",
        "publicKey": "copy",
        "publicLabel": "可见文案",
        "description": "页面中的固定可见文案、单位和图片槽提示"
      },
      {
        "key": "rowsData",
        "label": "rowsData",
        "type": "list",
        "default": [
          {
            "name": "AI 算力 / 基础设施",
            "short": "算力·基建",
            "h1": 120,
            "h2": 210,
            "color": "#15A7F0"
          },
          {
            "name": "具身智能 / 机器人",
            "short": "具身智能",
            "h1": 24,
            "h2": 58,
            "color": "#FF9FE2"
          },
          {
            "name": "企业级 AI 应用",
            "short": "企业应用",
            "h1": 60,
            "h2": 88,
            "color": "#FFC700"
          },
          {
            "name": "通用大模型",
            "short": "通用大模型",
            "h1": 110,
            "h2": 140,
            "color": "#27E021"
          },
          {
            "name": "AI 安全 / 对齐",
            "short": "安全·对齐",
            "h1": 16,
            "h2": 28,
            "color": "#15A7F0"
          },
          {
            "name": "AIGC 内容生成",
            "short": "内容生成",
            "h1": 38,
            "h2": 34,
            "color": "#FFC700"
          }
        ],
        "desc": "默认数据内容",
        "publicKey": "rowsData",
        "publicLabel": "rowsData",
        "description": "默认数据内容"
      },
      {
        "key": "hlStyle",
        "label": "高亮样式",
        "type": "radio",
        "default": "glass",
        "options": [
          [
            "glass",
            "玻璃糖果"
          ],
          [
            "pill",
            "扁平药丸"
          ],
          [
            "underline",
            "下划线"
          ],
          [
            "text",
            "纯文字"
          ]
        ],
        "desc": "关键词高亮：玻璃糖果 / 扁平药丸 / 下划线 / 纯文字",
        "publicKey": "hlStyle",
        "publicLabel": "高亮样式",
        "description": "关键词高亮：玻璃糖果 / 扁平药丸 / 下划线 / 纯文字"
      },
      {
        "key": "hlTilt",
        "label": "高亮倾斜",
        "type": "slider",
        "default": 2,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "关键词胶囊旋转角度（仅糖果/药丸样式生效）",
        "publicKey": "hlTilt",
        "publicLabel": "高亮倾斜",
        "description": "关键词胶囊旋转角度（仅糖果/药丸样式生效）"
      },
      {
        "key": "rowCount",
        "label": "分类行数",
        "type": "slider",
        "default": 6,
        "min": 3,
        "max": 6,
        "step": 1,
        "desc": "展示的分类行数",
        "publicKey": "categoryCount",
        "publicLabel": "分类行数",
        "description": "展示的分类行数"
      },
      {
        "key": "focusEnabled",
        "label": "重点突出",
        "type": "toggle",
        "default": true,
        "desc": "是否高亮某一行",
        "publicKey": "focusEnabled",
        "publicLabel": "重点突出",
        "description": "是否高亮某一行"
      },
      {
        "key": "focusIndex",
        "label": "重点行序号",
        "type": "slider",
        "default": 1,
        "min": 1,
        "max": 6,
        "step": 1,
        "maxFromKey": "rowCount",
        "desc": "被高亮行的序号",
        "publicKey": "focusIndex",
        "publicLabel": "重点行序号",
        "description": "被高亮行的序号"
      },
      {
        "key": "showDelta",
        "label": "环比徽标",
        "type": "toggle",
        "default": true,
        "desc": "Δ 升降徽标列",
        "publicKey": "showDelta",
        "publicLabel": "环比徽标",
        "description": "Δ 升降徽标列"
      },
      {
        "key": "showMiniBar",
        "label": "双柱对比",
        "type": "toggle",
        "default": true,
        "desc": "上 / 下半年并置双柱列",
        "publicKey": "showMiniBar",
        "publicLabel": "双柱对比",
        "description": "上 / 下半年并置双柱列"
      },
      {
        "key": "showTotalRow",
        "label": "合计行",
        "type": "toggle",
        "default": true,
        "desc": "底部全市场合计行",
        "publicKey": "showTotalRow",
        "publicLabel": "合计行",
        "description": "底部全市场合计行"
      },
      {
        "key": "showDecorations",
        "label": "装饰元素",
        "type": "toggle",
        "default": true,
        "desc": "星芒等点缀",
        "publicKey": "showDecorations",
        "publicLabel": "装饰元素",
        "description": "星芒等点缀"
      }
    ],
    "defaultProps": {
      "copy": {
        "text001": "亿",
        "text002": "亿",
        "text003": "上",
        "text004": "下",
        "text005": "半年消长 · H1 → H2 SWING",
        "text006": "下半年，资本",
        "text007": "集体加码算力",
        "text008": "赛道",
        "text009": "2024 上半年",
        "text010": "2024 下半年",
        "text011": "环比 Δ",
        "text012": "上 / 下半年对比",
        "text013": "全市场合计",
        "text014": "亿",
        "text015": "亿",
        "text016": "数据为调研整理与推演 · 金额＝该赛道半年内 ≥1 亿美元 AI 轮次合计（亿美元 · 示意）· mini 双柱按全表最高额归一"
      },
      "rowsData": [
        {
          "name": "AI 算力 / 基础设施",
          "short": "算力·基建",
          "h1": 120,
          "h2": 210,
          "color": "#15A7F0"
        },
        {
          "name": "具身智能 / 机器人",
          "short": "具身智能",
          "h1": 24,
          "h2": 58,
          "color": "#FF9FE2"
        },
        {
          "name": "企业级 AI 应用",
          "short": "企业应用",
          "h1": 60,
          "h2": 88,
          "color": "#FFC700"
        },
        {
          "name": "通用大模型",
          "short": "通用大模型",
          "h1": 110,
          "h2": 140,
          "color": "#27E021"
        },
        {
          "name": "AI 安全 / 对齐",
          "short": "安全·对齐",
          "h1": 16,
          "h2": 28,
          "color": "#15A7F0"
        },
        {
          "name": "AIGC 内容生成",
          "short": "内容生成",
          "h1": 38,
          "h2": 34,
          "color": "#FFC700"
        }
      ],
      "hlStyle": "glass",
      "hlTilt": 2,
      "rowCount": 6,
      "focusEnabled": true,
      "focusIndex": 1,
      "showDelta": true,
      "showMiniBar": true,
      "showTotalRow": true,
      "showDecorations": true
    }
  },
  {
    "key": "theme04_page026",
    "themeKey": "theme04",
    "pageNumber": 26,
    "layout": "THEME04-026",
    "slot": "scoreboard",
    "label": "头部玩家对照表",
    "bgClass": "",
    "controls": [
      {
        "key": "copy",
        "label": "可见文案",
        "type": "list",
        "default": {
          "text001": "头部对照 · SCOREBOARD",
          "text002": "六家头部，",
          "text003": "估值与热度一表看清",
          "text004": "#",
          "text005": "公司",
          "text006": "主投赛道",
          "text007": "最新估值",
          "text008": "亿美元",
          "text009": "最大单笔",
          "text010": "亿美元",
          "text011": "资本热度",
          "text012": "数据为调研整理与推演 · 估值柱条按全表最高估值归一 · 资本热度＝该公司 2024 受追捧程度（0–5）"
        },
        "desc": "页面中的固定可见文案、单位和图片槽提示",
        "publicKey": "copy",
        "publicLabel": "可见文案",
        "description": "页面中的固定可见文案、单位和图片槽提示"
      },
      {
        "key": "rowsData",
        "label": "rowsData",
        "type": "list",
        "default": [
          {
            "name": "OpenAI",
            "cat": "通用大模型",
            "val": 1570,
            "single": 66,
            "heat": 5
          },
          {
            "name": "Databricks",
            "cat": "AI 基础设施",
            "val": 620,
            "single": 100,
            "heat": 5
          },
          {
            "name": "Anthropic",
            "cat": "通用大模型",
            "val": 600,
            "single": 40,
            "heat": 5
          },
          {
            "name": "xAI",
            "cat": "通用大模型",
            "val": 500,
            "single": 60,
            "heat": 4
          },
          {
            "name": "CoreWeave",
            "cat": "AI 基础设施",
            "val": 190,
            "single": 11,
            "heat": 4
          },
          {
            "name": "Safe Superintelligence",
            "cat": "通用大模型",
            "val": 50,
            "single": 10,
            "heat": 3
          }
        ],
        "desc": "默认数据内容",
        "publicKey": "rowsData",
        "publicLabel": "rowsData",
        "description": "默认数据内容"
      },
      {
        "key": "hlStyle",
        "label": "高亮样式",
        "type": "radio",
        "default": "glass",
        "options": [
          [
            "glass",
            "玻璃糖果"
          ],
          [
            "pill",
            "扁平药丸"
          ],
          [
            "underline",
            "下划线"
          ],
          [
            "text",
            "纯文字"
          ]
        ],
        "desc": "关键词高亮：玻璃糖果 / 扁平药丸 / 下划线 / 纯文字",
        "publicKey": "hlStyle",
        "publicLabel": "高亮样式",
        "description": "关键词高亮：玻璃糖果 / 扁平药丸 / 下划线 / 纯文字"
      },
      {
        "key": "hlTilt",
        "label": "高亮倾斜",
        "type": "slider",
        "default": 2,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "关键词胶囊旋转角度（仅糖果/药丸样式生效）",
        "publicKey": "hlTilt",
        "publicLabel": "高亮倾斜",
        "description": "关键词胶囊旋转角度（仅糖果/药丸样式生效）"
      },
      {
        "key": "rowCount",
        "label": "公司行数",
        "type": "slider",
        "default": 6,
        "min": 3,
        "max": 6,
        "step": 1,
        "desc": "展示的公司行数",
        "publicKey": "rowCount",
        "publicLabel": "公司行数",
        "description": "展示的公司行数"
      },
      {
        "key": "focusEnabled",
        "label": "重点突出",
        "type": "toggle",
        "default": true,
        "desc": "是否高亮某一行",
        "publicKey": "focusEnabled",
        "publicLabel": "重点突出",
        "description": "是否高亮某一行"
      },
      {
        "key": "focusIndex",
        "label": "重点行序号",
        "type": "slider",
        "default": 1,
        "min": 1,
        "max": 6,
        "step": 1,
        "maxFromKey": "rowCount",
        "desc": "被高亮行的序号",
        "publicKey": "focusIndex",
        "publicLabel": "重点行序号",
        "description": "被高亮行的序号"
      },
      {
        "key": "showBar",
        "label": "指标柱条",
        "type": "toggle",
        "default": true,
        "desc": "行内指标规模柱条",
        "publicKey": "showBar",
        "publicLabel": "指标柱条",
        "description": "行内指标规模柱条"
      },
      {
        "key": "showRating",
        "label": "关注度",
        "type": "toggle",
        "default": true,
        "desc": "关注度评级点",
        "publicKey": "showStatusRating",
        "publicLabel": "关注度",
        "description": "关注度评级点"
      },
      {
        "key": "showCategory",
        "label": "分类标签",
        "type": "toggle",
        "default": true,
        "desc": "主投分类标签列",
        "publicKey": "showCategory",
        "publicLabel": "分类标签",
        "description": "主投分类标签列"
      },
      {
        "key": "showDecorations",
        "label": "装饰元素",
        "type": "toggle",
        "default": true,
        "desc": "星芒 / 圆环等点缀",
        "publicKey": "showDecorations",
        "publicLabel": "装饰元素",
        "description": "星芒 / 圆环等点缀"
      }
    ],
    "defaultProps": {
      "copy": {
        "text001": "头部对照 · SCOREBOARD",
        "text002": "六家头部，",
        "text003": "估值与热度一表看清",
        "text004": "#",
        "text005": "公司",
        "text006": "主投赛道",
        "text007": "最新估值",
        "text008": "亿美元",
        "text009": "最大单笔",
        "text010": "亿美元",
        "text011": "资本热度",
        "text012": "数据为调研整理与推演 · 估值柱条按全表最高估值归一 · 资本热度＝该公司 2024 受追捧程度（0–5）"
      },
      "rowsData": [
        {
          "name": "OpenAI",
          "cat": "通用大模型",
          "val": 1570,
          "single": 66,
          "heat": 5
        },
        {
          "name": "Databricks",
          "cat": "AI 基础设施",
          "val": 620,
          "single": 100,
          "heat": 5
        },
        {
          "name": "Anthropic",
          "cat": "通用大模型",
          "val": 600,
          "single": 40,
          "heat": 5
        },
        {
          "name": "xAI",
          "cat": "通用大模型",
          "val": 500,
          "single": 60,
          "heat": 4
        },
        {
          "name": "CoreWeave",
          "cat": "AI 基础设施",
          "val": 190,
          "single": 11,
          "heat": 4
        },
        {
          "name": "Safe Superintelligence",
          "cat": "通用大模型",
          "val": 50,
          "single": 10,
          "heat": 3
        }
      ],
      "hlStyle": "glass",
      "hlTilt": 2,
      "rowCount": 6,
      "focusEnabled": true,
      "focusIndex": 1,
      "showBar": true,
      "showRating": true,
      "showCategory": true,
      "showDecorations": true
    }
  },
  {
    "key": "theme04_page027",
    "themeKey": "theme04",
    "pageNumber": 27,
    "layout": "THEME04-027",
    "slot": "ledger",
    "label": "投资人出手榜",
    "bgClass": "",
    "controls": [
      {
        "key": "copy",
        "label": "可见文案",
        "type": "list",
        "default": {
          "text001": "出资方 · WHO'S WRITING CHECKS",
          "text002": "谁在出手？",
          "text003": "头部资本最忙",
          "text004": "#",
          "text005": "出资方",
          "text006": "机构类型",
          "text007": "2024 出手",
          "text008": "次",
          "text009": "代表押注",
          "text010": "数据为调研整理与推演 · 出手次数＝该机构 2024 参与的 ≥1 亿美元 AI 轮次（示意量级）· 柱条按全表最多出手归一"
        },
        "desc": "页面中的固定可见文案、单位和图片槽提示",
        "publicKey": "copy",
        "publicLabel": "可见文案",
        "description": "页面中的固定可见文案、单位和图片槽提示"
      },
      {
        "key": "rowsData",
        "label": "rowsData",
        "type": "list",
        "default": [
          {
            "name": "a16z",
            "full": "Andreessen Horowitz",
            "type": "风险投资",
            "deals": 12,
            "rep": "xAI · Databricks"
          },
          {
            "name": "Nvidia",
            "full": "英伟达战投",
            "type": "战略投资",
            "deals": 9,
            "rep": "CoreWeave · xAI"
          },
          {
            "name": "Sequoia",
            "full": "红杉资本",
            "type": "风险投资",
            "deals": 8,
            "rep": "OpenAI 生态"
          },
          {
            "name": "Thrive Capital",
            "full": "成长基金",
            "type": "成长基金",
            "deals": 7,
            "rep": "领投 OpenAI 66 亿"
          },
          {
            "name": "SoftBank",
            "full": "软银愿景基金",
            "type": "成长基金",
            "deals": 6,
            "rep": "重返 AI 牌桌"
          },
          {
            "name": "MGX",
            "full": "阿布扎比主权",
            "type": "主权基金",
            "deals": 5,
            "rep": "中东资本进场"
          }
        ],
        "desc": "默认数据内容",
        "publicKey": "rowsData",
        "publicLabel": "rowsData",
        "description": "默认数据内容"
      },
      {
        "key": "hlStyle",
        "label": "高亮样式",
        "type": "radio",
        "default": "glass",
        "options": [
          [
            "glass",
            "玻璃糖果"
          ],
          [
            "pill",
            "扁平药丸"
          ],
          [
            "underline",
            "下划线"
          ],
          [
            "text",
            "纯文字"
          ]
        ],
        "desc": "关键词高亮：玻璃糖果 / 扁平药丸 / 下划线 / 纯文字",
        "publicKey": "hlStyle",
        "publicLabel": "高亮样式",
        "description": "关键词高亮：玻璃糖果 / 扁平药丸 / 下划线 / 纯文字"
      },
      {
        "key": "hlTilt",
        "label": "高亮倾斜",
        "type": "slider",
        "default": 2,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "关键词胶囊旋转角度（仅糖果/药丸样式生效）",
        "publicKey": "hlTilt",
        "publicLabel": "高亮倾斜",
        "description": "关键词胶囊旋转角度（仅糖果/药丸样式生效）"
      },
      {
        "key": "rowCount",
        "label": "机构行数",
        "type": "slider",
        "default": 6,
        "min": 3,
        "max": 6,
        "step": 1,
        "desc": "展示的出资方行数",
        "publicKey": "rowCount",
        "publicLabel": "机构行数",
        "description": "展示的出资方行数"
      },
      {
        "key": "focusEnabled",
        "label": "重点突出",
        "type": "toggle",
        "default": true,
        "desc": "是否高亮某一行",
        "publicKey": "focusEnabled",
        "publicLabel": "重点突出",
        "description": "是否高亮某一行"
      },
      {
        "key": "focusIndex",
        "label": "重点行序号",
        "type": "slider",
        "default": 1,
        "min": 1,
        "max": 6,
        "step": 1,
        "maxFromKey": "rowCount",
        "desc": "被高亮行的序号",
        "publicKey": "focusIndex",
        "publicLabel": "重点行序号",
        "description": "被高亮行的序号"
      },
      {
        "key": "showBar",
        "label": "出手柱条",
        "type": "toggle",
        "default": true,
        "desc": "行内出手次数柱条",
        "publicKey": "showBar",
        "publicLabel": "出手柱条",
        "description": "行内出手次数柱条"
      },
      {
        "key": "showType",
        "label": "类型标签",
        "type": "toggle",
        "default": true,
        "desc": "机构类型标签列",
        "publicKey": "showType",
        "publicLabel": "类型标签",
        "description": "机构类型标签列"
      },
      {
        "key": "showRep",
        "label": "代表押注",
        "type": "toggle",
        "default": true,
        "desc": "代表押注列",
        "publicKey": "showRep",
        "publicLabel": "代表押注",
        "description": "代表押注列"
      },
      {
        "key": "showDecorations",
        "label": "装饰元素",
        "type": "toggle",
        "default": true,
        "desc": "星芒等点缀",
        "publicKey": "showDecorations",
        "publicLabel": "装饰元素",
        "description": "星芒等点缀"
      }
    ],
    "defaultProps": {
      "copy": {
        "text001": "出资方 · WHO'S WRITING CHECKS",
        "text002": "谁在出手？",
        "text003": "头部资本最忙",
        "text004": "#",
        "text005": "出资方",
        "text006": "机构类型",
        "text007": "2024 出手",
        "text008": "次",
        "text009": "代表押注",
        "text010": "数据为调研整理与推演 · 出手次数＝该机构 2024 参与的 ≥1 亿美元 AI 轮次（示意量级）· 柱条按全表最多出手归一"
      },
      "rowsData": [
        {
          "name": "a16z",
          "full": "Andreessen Horowitz",
          "type": "风险投资",
          "deals": 12,
          "rep": "xAI · Databricks"
        },
        {
          "name": "Nvidia",
          "full": "英伟达战投",
          "type": "战略投资",
          "deals": 9,
          "rep": "CoreWeave · xAI"
        },
        {
          "name": "Sequoia",
          "full": "红杉资本",
          "type": "风险投资",
          "deals": 8,
          "rep": "OpenAI 生态"
        },
        {
          "name": "Thrive Capital",
          "full": "成长基金",
          "type": "成长基金",
          "deals": 7,
          "rep": "领投 OpenAI 66 亿"
        },
        {
          "name": "SoftBank",
          "full": "软银愿景基金",
          "type": "成长基金",
          "deals": 6,
          "rep": "重返 AI 牌桌"
        },
        {
          "name": "MGX",
          "full": "阿布扎比主权",
          "type": "主权基金",
          "deals": 5,
          "rep": "中东资本进场"
        }
      ],
      "hlStyle": "glass",
      "hlTilt": 2,
      "rowCount": 6,
      "focusEnabled": true,
      "focusIndex": 1,
      "showBar": true,
      "showType": true,
      "showRep": true,
      "showDecorations": true
    }
  },
  {
    "key": "theme04_page028",
    "themeKey": "theme04",
    "pageNumber": 28,
    "layout": "THEME04-028",
    "slot": "matrix",
    "label": "能力对照矩阵",
    "bgClass": "",
    "controls": [
      {
        "key": "copy",
        "label": "可见文案",
        "type": "list",
        "default": {
          "text001": "能力画像 · CAPABILITY MATRIX",
          "text002": "同样是头部，",
          "text003": "强项各不同",
          "text004": "公司 \\ 维度",
          "text005": "综合强度",
          "text006": "横纵分析法 · 能力画像（报告 2，评级为调研整理 / 示意）"
        },
        "desc": "页面中的固定可见文案、单位和图片槽提示",
        "publicKey": "copy",
        "publicLabel": "可见文案",
        "description": "页面中的固定可见文案、单位和图片槽提示"
      },
      {
        "key": "dimsData",
        "label": "dimsData",
        "type": "list",
        "default": [
          {
            "zh": "通用大模型",
            "en": "MODEL"
          },
          {
            "zh": "算力自有",
            "en": "COMPUTE"
          },
          {
            "zh": "商业兑现",
            "en": "REVENUE"
          },
          {
            "zh": "安全治理",
            "en": "SAFETY"
          },
          {
            "zh": "生态分发",
            "en": "ECOSYSTEM"
          }
        ],
        "desc": "默认数据内容",
        "publicKey": "dimsData",
        "publicLabel": "dimsData",
        "description": "默认数据内容"
      },
      {
        "key": "rowsData",
        "label": "rowsData",
        "type": "list",
        "default": [
          {
            "name": "OpenAI",
            "cat": "通用大模型 · 应用",
            "color": "#27E021",
            "s": [
              3,
              2,
              3,
              2,
              3
            ]
          },
          {
            "name": "Anthropic",
            "cat": "通用大模型 · 安全",
            "color": "#15A7F0",
            "s": [
              3,
              2,
              2,
              3,
              2
            ]
          },
          {
            "name": "Google DeepMind",
            "cat": "大模型 · 全栈",
            "color": "#FFC700",
            "s": [
              3,
              3,
              2,
              3,
              3
            ]
          },
          {
            "name": "xAI",
            "cat": "通用大模型 · 算力",
            "color": "#FF9FE2",
            "s": [
              2,
              3,
              1,
              1,
              3
            ]
          }
        ],
        "desc": "默认数据内容",
        "publicKey": "rowsData",
        "publicLabel": "rowsData",
        "description": "默认数据内容"
      },
      {
        "key": "lvData",
        "label": "lvData",
        "type": "list",
        "default": {
          "1": {
            "color": "#5f5f5f",
            "glyph": "–",
            "tag": "偏弱"
          },
          "2": {
            "color": "#FFC700",
            "glyph": "●",
            "tag": "具备"
          },
          "3": {
            "color": "#27E021",
            "glyph": "✓",
            "tag": "领先"
          }
        },
        "desc": "默认数据内容",
        "publicKey": "lvData",
        "publicLabel": "lvData",
        "description": "默认数据内容"
      },
      {
        "key": "hlStyle",
        "label": "高亮样式",
        "type": "radio",
        "default": "glass",
        "options": [
          [
            "glass",
            "玻璃糖果"
          ],
          [
            "pill",
            "扁平药丸"
          ],
          [
            "underline",
            "下划线"
          ],
          [
            "text",
            "纯文字"
          ]
        ],
        "desc": "关键词高亮：玻璃糖果 / 扁平药丸 / 下划线 / 纯文字",
        "publicKey": "hlStyle",
        "publicLabel": "高亮样式",
        "description": "关键词高亮：玻璃糖果 / 扁平药丸 / 下划线 / 纯文字"
      },
      {
        "key": "hlTilt",
        "label": "高亮倾斜",
        "type": "slider",
        "default": 2,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "关键词胶囊旋转角度（仅糖果/药丸样式生效）",
        "publicKey": "hlTilt",
        "publicLabel": "高亮倾斜",
        "description": "关键词胶囊旋转角度（仅糖果/药丸样式生效）"
      },
      {
        "key": "rowCount",
        "label": "公司行数",
        "type": "slider",
        "default": 4,
        "min": 3,
        "max": 4,
        "step": 1,
        "desc": "展示的公司行数",
        "publicKey": "rowCount",
        "publicLabel": "公司行数",
        "description": "展示的公司行数"
      },
      {
        "key": "colCount",
        "label": "维度列数",
        "type": "slider",
        "default": 5,
        "min": 3,
        "max": 5,
        "step": 1,
        "desc": "展示的能力维度列数",
        "publicKey": "colCount",
        "publicLabel": "维度列数",
        "description": "展示的能力维度列数"
      },
      {
        "key": "focusEnabled",
        "label": "重点突出",
        "type": "toggle",
        "default": true,
        "desc": "是否高亮某一行",
        "publicKey": "focusEnabled",
        "publicLabel": "重点突出",
        "description": "是否高亮某一行"
      },
      {
        "key": "focusIndex",
        "label": "重点序号",
        "type": "slider",
        "default": 1,
        "min": 1,
        "max": 4,
        "step": 1,
        "maxFromKey": "rowCount",
        "desc": "被高亮行的序号",
        "publicKey": "focusIndex",
        "publicLabel": "重点序号",
        "description": "被高亮行的序号"
      },
      {
        "key": "showRowMeta",
        "label": "分类副标",
        "type": "toggle",
        "default": true,
        "desc": "公司下方分类副标显隐",
        "publicKey": "showRowMeta",
        "publicLabel": "分类副标",
        "description": "公司下方分类副标显隐"
      },
      {
        "key": "showLegend",
        "label": "评级图例",
        "type": "toggle",
        "default": true,
        "desc": "底部评级图例显隐",
        "publicKey": "showLegend",
        "publicLabel": "评级图例",
        "description": "底部评级图例显隐"
      },
      {
        "key": "showColScore",
        "label": "综合强度行",
        "type": "toggle",
        "default": true,
        "desc": "列尾综合强度行显隐",
        "publicKey": "showColScore",
        "publicLabel": "综合强度行",
        "description": "列尾综合强度行显隐"
      },
      {
        "key": "showDecorations",
        "label": "装饰元素",
        "type": "toggle",
        "default": true,
        "desc": "星芒等点缀",
        "publicKey": "showDecorations",
        "publicLabel": "装饰元素",
        "description": "星芒等点缀"
      }
    ],
    "defaultProps": {
      "copy": {
        "text001": "能力画像 · CAPABILITY MATRIX",
        "text002": "同样是头部，",
        "text003": "强项各不同",
        "text004": "公司 \\ 维度",
        "text005": "综合强度",
        "text006": "横纵分析法 · 能力画像（报告 2，评级为调研整理 / 示意）"
      },
      "dimsData": [
        {
          "zh": "通用大模型",
          "en": "MODEL"
        },
        {
          "zh": "算力自有",
          "en": "COMPUTE"
        },
        {
          "zh": "商业兑现",
          "en": "REVENUE"
        },
        {
          "zh": "安全治理",
          "en": "SAFETY"
        },
        {
          "zh": "生态分发",
          "en": "ECOSYSTEM"
        }
      ],
      "rowsData": [
        {
          "name": "OpenAI",
          "cat": "通用大模型 · 应用",
          "color": "#27E021",
          "s": [
            3,
            2,
            3,
            2,
            3
          ]
        },
        {
          "name": "Anthropic",
          "cat": "通用大模型 · 安全",
          "color": "#15A7F0",
          "s": [
            3,
            2,
            2,
            3,
            2
          ]
        },
        {
          "name": "Google DeepMind",
          "cat": "大模型 · 全栈",
          "color": "#FFC700",
          "s": [
            3,
            3,
            2,
            3,
            3
          ]
        },
        {
          "name": "xAI",
          "cat": "通用大模型 · 算力",
          "color": "#FF9FE2",
          "s": [
            2,
            3,
            1,
            1,
            3
          ]
        }
      ],
      "lvData": {
        "1": {
          "color": "#5f5f5f",
          "glyph": "–",
          "tag": "偏弱"
        },
        "2": {
          "color": "#FFC700",
          "glyph": "●",
          "tag": "具备"
        },
        "3": {
          "color": "#27E021",
          "glyph": "✓",
          "tag": "领先"
        }
      },
      "hlStyle": "glass",
      "hlTilt": 2,
      "rowCount": 4,
      "colCount": 5,
      "focusEnabled": true,
      "focusIndex": 1,
      "showRowMeta": true,
      "showLegend": true,
      "showColScore": true,
      "showDecorations": true
    }
  },
  {
    "key": "theme04_page029",
    "themeKey": "theme04",
    "pageNumber": 29,
    "layout": "THEME04-029",
    "slot": "bignumber",
    "label": "大数字",
    "bgClass": "",
    "controls": [
      {
        "key": "statCount",
        "label": "支撑卡数量",
        "type": "slider",
        "default": 3,
        "min": 0,
        "max": 3,
        "step": 1,
        "desc": "主数字下方支撑数据卡数量",
        "publicKey": "statCount",
        "publicLabel": "支撑卡数量",
        "description": "主数字下方支撑数据卡数量"
      },
      {
        "key": "focusEnabled",
        "label": "重点突出",
        "type": "toggle",
        "default": false,
        "desc": "是否高亮某一张支撑卡",
        "publicKey": "focusEnabled",
        "publicLabel": "重点突出",
        "description": "是否高亮某一张支撑卡"
      },
      {
        "key": "focusIndex",
        "label": "重点序号",
        "type": "slider",
        "default": 1,
        "min": 1,
        "max": 3,
        "step": 1,
        "maxFromKey": "statCount",
        "desc": "被高亮支撑卡的序号",
        "publicKey": "focusIndex",
        "publicLabel": "重点序号",
        "description": "被高亮支撑卡的序号"
      },
      {
        "key": "showUnit",
        "label": "单位后缀",
        "type": "toggle",
        "default": true,
        "desc": "主数字「亿美元」单位",
        "publicKey": "showUnit",
        "publicLabel": "单位后缀",
        "description": "主数字「亿美元」单位"
      },
      {
        "key": "showCaption",
        "label": "底部说明",
        "type": "toggle",
        "default": true,
        "desc": "底部数据口径说明",
        "publicKey": "showCaption",
        "publicLabel": "底部说明",
        "description": "底部数据口径说明"
      },
      {
        "key": "showDecorations",
        "label": "装饰元素",
        "type": "toggle",
        "default": true,
        "desc": "星芒等点缀",
        "publicKey": "showDecorations",
        "publicLabel": "装饰元素",
        "description": "星芒等点缀"
      },
      {
        "key": "stats",
        "label": "支撑卡",
        "type": "list",
        "default": [
          {
            "value": "≈1/3",
            "label": "占美国全部风险投资",
            "color": "#15A7F0"
          },
          {
            "value": "97",
            "unit": "笔",
            "label": "单笔 ≥1 亿美元事件",
            "color": "#FFC700"
          },
          {
            "value": "≈10",
            "unit": "亿",
            "label": "平均指标",
            "color": "#FF9FE2"
          }
        ],
        "desc": "支撑数据卡：数值 / 单位 / 标签 / 主色",
        "publicKey": "stats",
        "publicLabel": "支撑卡",
        "description": "支撑数据卡：数值 / 单位 / 标签 / 主色"
      }
    ],
    "defaultProps": {
      "statCount": 3,
      "focusEnabled": false,
      "focusIndex": 1,
      "showUnit": true,
      "showCaption": true,
      "showDecorations": true,
      "kicker": "MARKET SCALE · 资本大年",
      "pre": "2024 全年 AI 初创吸纳风投",
      "mainValue": "970",
      "mainUnit": "亿美元",
      "post": "创历史新高 · 平均单笔约 10 亿美元，市场对头部标的高度追捧",
      "caption": "数据口径：2024 全年公开披露的 ≥1 亿美元融资事件 · 占美国 VC 近三分之一",
      "stats": [
        {
          "value": "≈1/3",
          "label": "占美国全部风险投资",
          "color": "#15A7F0"
        },
        {
          "value": "97",
          "unit": "笔",
          "label": "单笔 ≥1 亿美元事件",
          "color": "#FFC700"
        },
        {
          "value": "≈10",
          "unit": "亿",
          "label": "平均单笔融资金额",
          "color": "#FF9FE2"
        }
      ]
    }
  },
  {
    "key": "theme04_page030",
    "themeKey": "theme04",
    "pageNumber": 30,
    "layout": "THEME04-030",
    "slot": "stattrio",
    "label": "三联大数字",
    "bgClass": "",
    "controls": [
      {
        "key": "copy",
        "label": "可见文案",
        "type": "list",
        "default": {
          "text001": "资本大年 · BY THE NUMBERS",
          "text002": "三组数字，",
          "text003": "读懂这一年",
          "text004": "▲",
          "text005": "资本大年",
          "text006": "数据口径：2024 全年公开披露的 ≥1 亿美元 AI 融资事件 · 占美国 VC 近三分之一（报告 2.x · 调研整理）"
        },
        "desc": "页面中的固定可见文案、单位和图片槽提示",
        "publicKey": "copy",
        "publicLabel": "可见文案",
        "description": "页面中的固定可见文案、单位和图片槽提示"
      },
      {
        "key": "statsData",
        "label": "statsData",
        "type": "list",
        "default": [
          {
            "eyebrow": "全年总额 · TOTAL",
            "num": "970",
            "unit": "亿",
            "sub": "2024 全年 AI 初创吸纳风险投资",
            "delta": "创历史新高",
            "color": "#27E021"
          },
          {
            "eyebrow": "大额事件 · MEGA-DEALS",
            "num": "97",
            "unit": "笔",
            "sub": "单笔 ≥1 亿美元的融资事件",
            "delta": "头部高度集中",
            "color": "#15A7F0"
          },
          {
            "eyebrow": "市场占比 · SHARE",
            "num": "≈1/3",
            "unit": "",
            "sub": "占全美风险投资总额",
            "delta": "近三分之一",
            "color": "#FFC700"
          }
        ],
        "desc": "默认数据内容",
        "publicKey": "statsData",
        "publicLabel": "statsData",
        "description": "默认数据内容"
      },
      {
        "key": "hlStyle",
        "label": "高亮样式",
        "type": "radio",
        "default": "glass",
        "options": [
          [
            "glass",
            "玻璃糖果"
          ],
          [
            "pill",
            "扁平药丸"
          ],
          [
            "underline",
            "下划线"
          ],
          [
            "text",
            "纯文字"
          ]
        ],
        "desc": "关键词高亮：玻璃糖果 / 扁平药丸 / 下划线 / 纯文字",
        "publicKey": "hlStyle",
        "publicLabel": "高亮样式",
        "description": "关键词高亮：玻璃糖果 / 扁平药丸 / 下划线 / 纯文字"
      },
      {
        "key": "hlTilt",
        "label": "高亮倾斜",
        "type": "slider",
        "default": 2,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "关键词胶囊旋转角度（仅糖果/药丸样式生效）",
        "publicKey": "hlTilt",
        "publicLabel": "高亮倾斜",
        "description": "关键词胶囊旋转角度（仅糖果/药丸样式生效）"
      },
      {
        "key": "statCount",
        "label": "巨数列数",
        "type": "slider",
        "default": 3,
        "min": 1,
        "max": 3,
        "step": 1,
        "desc": "并置展示的巨型数字列数",
        "publicKey": "statCount",
        "publicLabel": "巨数列数",
        "description": "并置展示的巨型数字列数"
      },
      {
        "key": "focusEnabled",
        "label": "重点突出",
        "type": "toggle",
        "default": false,
        "desc": "是否高亮某一列",
        "publicKey": "focusEnabled",
        "publicLabel": "重点突出",
        "description": "是否高亮某一列"
      },
      {
        "key": "focusIndex",
        "label": "重点序号",
        "type": "slider",
        "default": 1,
        "min": 1,
        "max": 3,
        "step": 1,
        "maxFromKey": "statCount",
        "desc": "被高亮列的序号",
        "publicKey": "focusIndex",
        "publicLabel": "重点序号",
        "description": "被高亮列的序号"
      },
      {
        "key": "showDelta",
        "label": "趋势徽标",
        "type": "toggle",
        "default": true,
        "desc": "数字下方趋势徽标",
        "publicKey": "showDelta",
        "publicLabel": "趋势徽标",
        "description": "数字下方趋势徽标"
      },
      {
        "key": "showDivider",
        "label": "列间分隔",
        "type": "toggle",
        "default": true,
        "desc": "列与列之间的分隔线",
        "publicKey": "showDivider",
        "publicLabel": "列间分隔",
        "description": "列与列之间的分隔线"
      },
      {
        "key": "showDecorations",
        "label": "装饰元素",
        "type": "toggle",
        "default": true,
        "desc": "星芒等点缀",
        "publicKey": "showDecorations",
        "publicLabel": "装饰元素",
        "description": "星芒等点缀"
      }
    ],
    "defaultProps": {
      "copy": {
        "text001": "资本大年 · BY THE NUMBERS",
        "text002": "三组数字，",
        "text003": "读懂这一年",
        "text004": "▲",
        "text005": "资本大年",
        "text006": "数据口径：2024 全年公开披露的 ≥1 亿美元 AI 融资事件 · 占美国 VC 近三分之一（报告 2.x · 调研整理）"
      },
      "statsData": [
        {
          "eyebrow": "全年总额 · TOTAL",
          "num": "970",
          "unit": "亿",
          "sub": "2024 全年 AI 初创吸纳风险投资",
          "delta": "创历史新高",
          "color": "#27E021"
        },
        {
          "eyebrow": "大额事件 · MEGA-DEALS",
          "num": "97",
          "unit": "笔",
          "sub": "单笔 ≥1 亿美元的融资事件",
          "delta": "头部高度集中",
          "color": "#15A7F0"
        },
        {
          "eyebrow": "市场占比 · SHARE",
          "num": "≈1/3",
          "unit": "",
          "sub": "占全美风险投资总额",
          "delta": "近三分之一",
          "color": "#FFC700"
        }
      ],
      "hlStyle": "glass",
      "hlTilt": 2,
      "statCount": 3,
      "focusEnabled": false,
      "focusIndex": 1,
      "showDelta": true,
      "showDivider": true,
      "showDecorations": true
    }
  },
  {
    "key": "theme04_page031",
    "themeKey": "theme04",
    "pageNumber": 31,
    "layout": "THEME04-031",
    "slot": "deltahero",
    "label": "增长大数字",
    "bgClass": "",
    "controls": [
      {
        "key": "copy",
        "label": "可见文案",
        "type": "list",
        "default": {
          "text001": "一年之变 · YEAR-OVER-YEAR",
          "text002": "一年时间，",
          "text003": "资本翻了一倍",
          "text004": "▲",
          "text005": "116",
          "text006": "%",
          "text007": "2024 AI 初创吸纳风险投资 · 同比增速",
          "text008": "2023",
          "text009": "≈450",
          "text010": "亿",
          "text011": "×2.2",
          "text012": "2024",
          "text013": "≈970",
          "text014": "亿",
          "text015": "一年之变",
          "text016": "同比口径：2023→2024 全年公开披露 AI 融资额，比例为示意（报告 2.x · 调研整理）"
        },
        "desc": "页面中的固定可见文案、单位和图片槽提示",
        "publicKey": "copy",
        "publicLabel": "可见文案",
        "description": "页面中的固定可见文案、单位和图片槽提示"
      },
      {
        "key": "metricsData",
        "label": "metricsData",
        "type": "list",
        "default": [
          {
            "k": "大额事件数",
            "d": "+64",
            "u": "%",
            "dir": "up",
            "note": "≥1 亿美元单笔融资"
          },
          {
            "k": "单笔均值",
            "d": "+38",
            "u": "%",
            "dir": "up",
            "note": "头部抬高整体水位"
          },
          {
            "k": "占全美 VC",
            "d": "+9",
            "u": "pct",
            "dir": "up",
            "note": "逼近三分之一"
          }
        ],
        "desc": "默认数据内容",
        "publicKey": "metricsData",
        "publicLabel": "metricsData",
        "description": "默认数据内容"
      },
      {
        "key": "hlStyle",
        "label": "高亮样式",
        "type": "radio",
        "default": "glass",
        "options": [
          [
            "glass",
            "玻璃糖果"
          ],
          [
            "pill",
            "扁平药丸"
          ],
          [
            "underline",
            "下划线"
          ],
          [
            "text",
            "纯文字"
          ]
        ],
        "desc": "关键词高亮：玻璃糖果 / 扁平药丸 / 下划线 / 纯文字",
        "publicKey": "hlStyle",
        "publicLabel": "高亮样式",
        "description": "关键词高亮：玻璃糖果 / 扁平药丸 / 下划线 / 纯文字"
      },
      {
        "key": "hlTilt",
        "label": "高亮倾斜",
        "type": "slider",
        "default": 2,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "关键词胶囊旋转角度（仅糖果/药丸样式生效）",
        "publicKey": "hlTilt",
        "publicLabel": "高亮倾斜",
        "description": "关键词胶囊旋转角度（仅糖果/药丸样式生效）"
      },
      {
        "key": "accentTone",
        "label": "主色调",
        "type": "radio",
        "default": "green",
        "options": [
          [
            "green",
            "绿"
          ],
          [
            "yellow",
            "黄"
          ],
          [
            "blue",
            "蓝"
          ],
          [
            "pink",
            "粉"
          ]
        ],
        "desc": "页面主色调(通用命名)",
        "publicKey": "accentTone",
        "publicLabel": "主色调",
        "description": "页面主色调(通用命名)"
      },
      {
        "key": "metricCount",
        "label": "支撑变化卡",
        "type": "slider",
        "default": 3,
        "min": 0,
        "max": 3,
        "step": 1,
        "desc": "右栏支撑变化卡数量",
        "publicKey": "metricCount",
        "publicLabel": "支撑变化卡",
        "description": "右栏支撑变化卡数量"
      },
      {
        "key": "focusEnabled",
        "label": "重点突出",
        "type": "toggle",
        "default": false,
        "desc": "是否高亮某一张支撑卡",
        "publicKey": "focusEnabled",
        "publicLabel": "重点突出",
        "description": "是否高亮某一张支撑卡"
      },
      {
        "key": "focusIndex",
        "label": "重点序号",
        "type": "slider",
        "default": 1,
        "min": 1,
        "max": 3,
        "step": 1,
        "maxFromKey": "metricCount",
        "desc": "被高亮支撑卡序号",
        "publicKey": "focusIndex",
        "publicLabel": "重点序号",
        "description": "被高亮支撑卡序号"
      },
      {
        "key": "showTrack",
        "label": "跃迁条",
        "type": "toggle",
        "default": true,
        "desc": "去年→今年体量跃迁条",
        "publicKey": "showGuide",
        "publicLabel": "跃迁条",
        "description": "去年→今年体量跃迁条"
      },
      {
        "key": "showUnit",
        "label": "单位后缀",
        "type": "toggle",
        "default": true,
        "desc": "主数字 % 单位后缀",
        "publicKey": "showUnit",
        "publicLabel": "单位后缀",
        "description": "主数字 % 单位后缀"
      },
      {
        "key": "showDecorations",
        "label": "装饰元素",
        "type": "toggle",
        "default": true,
        "desc": "星芒等点缀",
        "publicKey": "showDecorations",
        "publicLabel": "装饰元素",
        "description": "星芒等点缀"
      }
    ],
    "defaultProps": {
      "copy": {
        "text001": "一年之变 · YEAR-OVER-YEAR",
        "text002": "一年时间，",
        "text003": "资本翻了一倍",
        "text004": "▲",
        "text005": "116",
        "text006": "%",
        "text007": "2024 AI 初创吸纳风险投资 · 同比增速",
        "text008": "2023",
        "text009": "≈450",
        "text010": "亿",
        "text011": "×2.2",
        "text012": "2024",
        "text013": "≈970",
        "text014": "亿",
        "text015": "一年之变",
        "text016": "同比口径：2023→2024 全年公开披露 AI 融资额，比例为示意（报告 2.x · 调研整理）"
      },
      "metricsData": [
        {
          "k": "大额事件数",
          "d": "+64",
          "u": "%",
          "dir": "up",
          "note": "≥1 亿美元单笔融资"
        },
        {
          "k": "单笔均值",
          "d": "+38",
          "u": "%",
          "dir": "up",
          "note": "头部抬高整体水位"
        },
        {
          "k": "占全美 VC",
          "d": "+9",
          "u": "pct",
          "dir": "up",
          "note": "逼近三分之一"
        }
      ],
      "hlStyle": "glass",
      "hlTilt": 2,
      "accentTone": "green",
      "metricCount": 3,
      "focusEnabled": false,
      "focusIndex": 1,
      "showTrack": true,
      "showUnit": true,
      "showDecorations": true
    }
  },
  {
    "key": "theme04_page032",
    "themeKey": "theme04",
    "pageNumber": 32,
    "layout": "THEME04-032",
    "slot": "scorecards",
    "label": "资本计分卡",
    "bgClass": "",
    "controls": [
      {
        "key": "copy",
        "label": "可见文案",
        "type": "list",
        "default": {
          "text001": "2024 资本大年 · SCORECARD",
          "text002": "四个数字，读懂这场",
          "text003": "资本大年",
          "text004": "数据为调研整理与推演 · 口径＝2024 全年美国 ≥1 亿美元 AI 融资事件汇总（示意）"
        },
        "desc": "页面中的固定可见文案、单位和图片槽提示",
        "publicKey": "copy",
        "publicLabel": "可见文案",
        "description": "页面中的固定可见文案、单位和图片槽提示"
      },
      {
        "key": "cardsData",
        "label": "cardsData",
        "type": "list",
        "default": [
          {
            "eyebrow": "TOTAL · 总额",
            "num": "970",
            "unit": "亿美元",
            "label": "全年 AI 初创吸纳风投",
            "delta": {
              "dir": "up",
              "txt": "创历史新高"
            },
            "ctx": "平均单笔约 10 亿美元，头部标的高度追捧",
            "color": "#15A7F0"
          },
          {
            "eyebrow": "MEGA-DEALS · 大额事件",
            "num": "97",
            "unit": "笔",
            "label": "单笔 ≥1 亿美元的融资",
            "delta": {
              "dir": "up",
              "txt": "同比显著放量"
            },
            "ctx": "资金向少数巨型轮次集中",
            "color": "#27E021"
          },
          {
            "eyebrow": "SHARE · 市场占比",
            "num": "≈1/3",
            "unit": "",
            "label": "占全美风险投资总额",
            "delta": {
              "dir": "flat",
              "txt": "资本虹吸"
            },
            "ctx": "AI 单一主题吸走近三分之一弹药",
            "color": "#FFC700"
          },
          {
            "eyebrow": "AVG TICKET · 单笔均值",
            "num": "10",
            "unit": "亿美元",
            "label": "大额轮次平均规模",
            "delta": {
              "dir": "up",
              "txt": "持续大额化"
            },
            "ctx": "从「百万级」迈入「十亿级」叙事",
            "color": "#FF9FE2"
          }
        ],
        "desc": "默认数据内容",
        "publicKey": "cardsData",
        "publicLabel": "cardsData",
        "description": "默认数据内容"
      },
      {
        "key": "deltaSymData",
        "label": "deltaSymData",
        "type": "list",
        "default": {
          "up": "▲",
          "down": "▼",
          "flat": "="
        },
        "desc": "默认数据内容",
        "publicKey": "deltaSymData",
        "publicLabel": "deltaSymData",
        "description": "默认数据内容"
      },
      {
        "key": "hlStyle",
        "label": "高亮样式",
        "type": "radio",
        "default": "glass",
        "options": [
          [
            "glass",
            "玻璃糖果"
          ],
          [
            "pill",
            "扁平药丸"
          ],
          [
            "underline",
            "下划线"
          ],
          [
            "text",
            "纯文字"
          ]
        ],
        "desc": "关键词高亮：玻璃糖果 / 扁平药丸 / 下划线 / 纯文字",
        "publicKey": "hlStyle",
        "publicLabel": "高亮样式",
        "description": "关键词高亮：玻璃糖果 / 扁平药丸 / 下划线 / 纯文字"
      },
      {
        "key": "hlTilt",
        "label": "高亮倾斜",
        "type": "slider",
        "default": 2,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "关键词胶囊旋转角度（仅糖果/药丸样式生效）",
        "publicKey": "hlTilt",
        "publicLabel": "高亮倾斜",
        "description": "关键词胶囊旋转角度（仅糖果/药丸样式生效）"
      },
      {
        "key": "statCount",
        "label": "计分卡数",
        "type": "slider",
        "default": 4,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "展示的计分卡数量",
        "publicKey": "statCount",
        "publicLabel": "计分卡数",
        "description": "展示的计分卡数量"
      },
      {
        "key": "layoutVariant",
        "label": "排布",
        "type": "radio",
        "default": "grid",
        "options": [
          [
            "grid",
            "2×2 网格"
          ],
          [
            "row",
            "一行排开"
          ]
        ],
        "desc": "网格 / 一行（2 张自动一行）",
        "publicKey": "layoutVariant",
        "publicLabel": "排布",
        "description": "网格 / 一行（2 张自动一行）"
      },
      {
        "key": "focusEnabled",
        "label": "重点突出",
        "type": "toggle",
        "default": false,
        "desc": "是否高亮某一张卡",
        "publicKey": "focusEnabled",
        "publicLabel": "重点突出",
        "description": "是否高亮某一张卡"
      },
      {
        "key": "focusIndex",
        "label": "重点卡序号",
        "type": "slider",
        "default": 1,
        "min": 1,
        "max": 4,
        "step": 1,
        "maxFromKey": "statCount",
        "desc": "被高亮卡的序号",
        "publicKey": "focusIndex",
        "publicLabel": "重点卡序号",
        "description": "被高亮卡的序号"
      },
      {
        "key": "showDelta",
        "label": "趋势徽标",
        "type": "toggle",
        "default": true,
        "desc": "卡内趋势徽标",
        "publicKey": "showDelta",
        "publicLabel": "趋势徽标",
        "description": "卡内趋势徽标"
      },
      {
        "key": "showContext",
        "label": "卡片注脚",
        "type": "toggle",
        "default": true,
        "desc": "卡片底部一句注脚",
        "publicKey": "showContext",
        "publicLabel": "卡片注脚",
        "description": "卡片底部一句注脚"
      },
      {
        "key": "showDecorations",
        "label": "装饰元素",
        "type": "toggle",
        "default": true,
        "desc": "星芒等点缀",
        "publicKey": "showDecorations",
        "publicLabel": "装饰元素",
        "description": "星芒等点缀"
      }
    ],
    "defaultProps": {
      "copy": {
        "text001": "2024 资本大年 · SCORECARD",
        "text002": "四个数字，读懂这场",
        "text003": "资本大年",
        "text004": "数据为调研整理与推演 · 口径＝2024 全年美国 ≥1 亿美元 AI 融资事件汇总（示意）"
      },
      "cardsData": [
        {
          "eyebrow": "TOTAL · 总额",
          "num": "970",
          "unit": "亿美元",
          "label": "全年 AI 初创吸纳风投",
          "delta": {
            "dir": "up",
            "txt": "创历史新高"
          },
          "ctx": "平均单笔约 10 亿美元，头部标的高度追捧",
          "color": "#15A7F0"
        },
        {
          "eyebrow": "MEGA-DEALS · 大额事件",
          "num": "97",
          "unit": "笔",
          "label": "单笔 ≥1 亿美元的融资",
          "delta": {
            "dir": "up",
            "txt": "同比显著放量"
          },
          "ctx": "资金向少数巨型轮次集中",
          "color": "#27E021"
        },
        {
          "eyebrow": "SHARE · 市场占比",
          "num": "≈1/3",
          "unit": "",
          "label": "占全美风险投资总额",
          "delta": {
            "dir": "flat",
            "txt": "资本虹吸"
          },
          "ctx": "AI 单一主题吸走近三分之一弹药",
          "color": "#FFC700"
        },
        {
          "eyebrow": "AVG TICKET · 单笔均值",
          "num": "10",
          "unit": "亿美元",
          "label": "大额轮次平均规模",
          "delta": {
            "dir": "up",
            "txt": "持续大额化"
          },
          "ctx": "从「百万级」迈入「十亿级」叙事",
          "color": "#FF9FE2"
        }
      ],
      "deltaSymData": {
        "up": "▲",
        "down": "▼",
        "flat": "="
      },
      "hlStyle": "glass",
      "hlTilt": 2,
      "statCount": 4,
      "layoutVariant": "grid",
      "focusEnabled": false,
      "focusIndex": 1,
      "showDelta": true,
      "showContext": true,
      "showDecorations": true
    }
  },
  {
    "key": "theme04_page033",
    "themeKey": "theme04",
    "pageNumber": 33,
    "layout": "THEME04-033",
    "slot": "versus",
    "label": "对比双数字",
    "bgClass": "",
    "controls": [
      {
        "key": "copy",
        "label": "可见文案",
        "type": "list",
        "default": {
          "text001": "HEAD TO HEAD · 两笔头部融资正面对决",
          "text002": "两强相争，",
          "text003": "只差 6 亿美元",
          "text004": "VS",
          "text005": "OpenAI · 66 亿",
          "text006": "xAI · 60 亿",
          "text007": "两笔交易体量近乎并驾齐驱，头部资金高度集中于通用大模型「第一梯队」。"
        },
        "desc": "页面中的固定可见文案、单位和图片槽提示",
        "publicKey": "copy",
        "publicLabel": "可见文案",
        "description": "页面中的固定可见文案、单位和图片槽提示"
      },
      {
        "key": "sidesData",
        "label": "sidesData",
        "type": "list",
        "default": [
          {
            "key": "left",
            "name": "OpenAI",
            "initial": "O",
            "color": "#15A7F0",
            "big": "66",
            "unit": "亿",
            "sub": "2024 单笔融资额 / 美元",
            "metrics": [
              {
                "v": "1570",
                "u": "亿",
                "l": "投后估值 / 美元"
              },
              {
                "v": "No.1",
                "u": "",
                "l": "全年最大单笔"
              }
            ]
          },
          {
            "key": "right",
            "name": "xAI",
            "initial": "x",
            "color": "#FFC700",
            "big": "60",
            "unit": "亿",
            "sub": "2024 单笔融资额 / 美元",
            "metrics": [
              {
                "v": "240",
                "u": "亿",
                "l": "投后估值 / 美元"
              },
              {
                "v": "18",
                "u": "月",
                "l": "成立到 B 轮"
              }
            ]
          }
        ],
        "desc": "默认数据内容",
        "publicKey": "sidesData",
        "publicLabel": "sidesData",
        "description": "默认数据内容"
      },
      {
        "key": "hlStyle",
        "label": "高亮样式",
        "type": "radio",
        "default": "glass",
        "options": [
          [
            "glass",
            "玻璃糖果"
          ],
          [
            "pill",
            "扁平药丸"
          ],
          [
            "underline",
            "下划线"
          ],
          [
            "text",
            "纯文字"
          ]
        ],
        "desc": "关键词高亮：玻璃糖果 / 扁平药丸 / 下划线 / 纯文字",
        "publicKey": "hlStyle",
        "publicLabel": "高亮样式",
        "description": "关键词高亮：玻璃糖果 / 扁平药丸 / 下划线 / 纯文字"
      },
      {
        "key": "hlTilt",
        "label": "高亮倾斜",
        "type": "slider",
        "default": 2,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "关键词胶囊旋转角度（仅糖果/药丸样式生效）",
        "publicKey": "hlTilt",
        "publicLabel": "高亮倾斜",
        "description": "关键词胶囊旋转角度（仅糖果/药丸样式生效）"
      },
      {
        "key": "metricCount",
        "label": "支撑指标",
        "type": "slider",
        "default": 2,
        "min": 0,
        "max": 2,
        "step": 1,
        "desc": "每侧支撑指标行数",
        "publicKey": "metricCount",
        "publicLabel": "支撑指标",
        "description": "每侧支撑指标行数"
      },
      {
        "key": "focusSide",
        "label": "高亮侧",
        "type": "radio",
        "default": "none",
        "options": [
          [
            "none",
            "不高亮"
          ],
          [
            "left",
            "左侧"
          ],
          [
            "right",
            "右侧"
          ]
        ],
        "desc": "高亮左 / 右某一侧",
        "publicKey": "focusSide",
        "publicLabel": "高亮侧",
        "description": "高亮左 / 右某一侧"
      },
      {
        "key": "showVsBadge",
        "label": "VS 徽章",
        "type": "toggle",
        "default": true,
        "desc": "中缝 VS 徽章",
        "publicKey": "showVsBadge",
        "publicLabel": "VS 徽章",
        "description": "中缝 VS 徽章"
      },
      {
        "key": "showDelta",
        "label": "差额对比条",
        "type": "toggle",
        "default": true,
        "desc": "底部两侧体量对比条",
        "publicKey": "showDelta",
        "publicLabel": "差额对比条",
        "description": "底部两侧体量对比条"
      },
      {
        "key": "showUnit",
        "label": "单位后缀",
        "type": "toggle",
        "default": true,
        "desc": "主数字「亿」单位",
        "publicKey": "showUnit",
        "publicLabel": "单位后缀",
        "description": "主数字「亿」单位"
      },
      {
        "key": "showDecorations",
        "label": "装饰元素",
        "type": "toggle",
        "default": true,
        "desc": "星芒等点缀",
        "publicKey": "showDecorations",
        "publicLabel": "装饰元素",
        "description": "星芒等点缀"
      }
    ],
    "defaultProps": {
      "copy": {
        "text001": "HEAD TO HEAD · 两笔头部融资正面对决",
        "text002": "两强相争，",
        "text003": "只差 6 亿美元",
        "text004": "VS",
        "text005": "OpenAI · 66 亿",
        "text006": "xAI · 60 亿",
        "text007": "两笔交易体量近乎并驾齐驱，头部资金高度集中于通用大模型「第一梯队」。"
      },
      "sidesData": [
        {
          "key": "left",
          "name": "OpenAI",
          "initial": "O",
          "color": "#15A7F0",
          "big": "66",
          "unit": "亿",
          "sub": "2024 单笔融资额 / 美元",
          "metrics": [
            {
              "v": "1570",
              "u": "亿",
              "l": "投后估值 / 美元"
            },
            {
              "v": "No.1",
              "u": "",
              "l": "全年最大单笔"
            }
          ]
        },
        {
          "key": "right",
          "name": "xAI",
          "initial": "x",
          "color": "#FFC700",
          "big": "60",
          "unit": "亿",
          "sub": "2024 单笔融资额 / 美元",
          "metrics": [
            {
              "v": "240",
              "u": "亿",
              "l": "投后估值 / 美元"
            },
            {
              "v": "18",
              "u": "月",
              "l": "成立到 B 轮"
            }
          ]
        }
      ],
      "hlStyle": "glass",
      "hlTilt": 2,
      "metricCount": 2,
      "focusSide": "none",
      "showVsBadge": true,
      "showDelta": true,
      "showUnit": true,
      "showDecorations": true
    }
  },
  {
    "key": "theme04_page034",
    "themeKey": "theme04",
    "pageNumber": 34,
    "layout": "THEME04-034",
    "slot": "funnel",
    "label": "资本漏斗",
    "bgClass": "",
    "controls": [
      {
        "key": "copy",
        "label": "可见文案",
        "type": "list",
        "default": {
          "text001": "交易漏斗 · DEAL FUNNEL",
          "text002": "五千家筛到最后，",
          "text003": "只有 97 笔",
          "text004": "从活跃创业公司到亿美元级大额融资，层层筛选——本报告聚焦的，正是漏斗最底端那批顶流。",
          "text005": "家",
          "text006": "▼",
          "text007": "通过率",
          "text008": "漏斗宽度为示意比例 · 通过率 = 本层 ÷ 上一层 · 数据为调研整理推演"
        },
        "desc": "页面中的固定可见文案、单位和图片槽提示",
        "publicKey": "copy",
        "publicLabel": "可见文案",
        "description": "页面中的固定可见文案、单位和图片槽提示"
      },
      {
        "key": "stagesData",
        "label": "stagesData",
        "type": "list",
        "default": [
          {
            "name": "活跃 AI 创业公司",
            "sub": "全美在投",
            "count": "5,000",
            "suffix": "+",
            "conv": "",
            "color": "#15A7F0",
            "topW": 100
          },
          {
            "name": "全年获得新融资",
            "sub": "完成至少一轮",
            "count": "1,200",
            "suffix": "",
            "conv": "24%",
            "color": "#27E021",
            "topW": 75
          },
          {
            "name": "千万美元级以上",
            "sub": "$10M+ 单笔",
            "count": "380",
            "suffix": "",
            "conv": "32%",
            "color": "#FFC700",
            "topW": 51
          },
          {
            "name": "亿美元级以上",
            "sub": "本报告样本 · $100M+",
            "count": "97",
            "suffix": "",
            "conv": "26%",
            "color": "#FF9FE2",
            "topW": 31
          },
          {
            "name": "十亿美元级",
            "sub": "$1B+ 巨额轮",
            "count": "12",
            "suffix": "",
            "conv": "12%",
            "color": "#15A7F0",
            "topW": 17
          }
        ],
        "desc": "默认数据内容",
        "publicKey": "stagesData",
        "publicLabel": "stagesData",
        "description": "默认数据内容"
      },
      {
        "key": "hlStyle",
        "label": "高亮样式",
        "type": "radio",
        "default": "glass",
        "options": [
          [
            "glass",
            "玻璃糖果"
          ],
          [
            "pill",
            "扁平药丸"
          ],
          [
            "underline",
            "下划线"
          ],
          [
            "text",
            "纯文字"
          ]
        ],
        "desc": "关键词高亮：玻璃糖果 / 扁平药丸 / 下划线 / 纯文字",
        "publicKey": "hlStyle",
        "publicLabel": "高亮样式",
        "description": "关键词高亮：玻璃糖果 / 扁平药丸 / 下划线 / 纯文字"
      },
      {
        "key": "hlTilt",
        "label": "高亮倾斜",
        "type": "slider",
        "default": 2,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "关键词胶囊旋转角度（仅糖果/药丸样式生效）",
        "publicKey": "hlTilt",
        "publicLabel": "高亮倾斜",
        "description": "关键词胶囊旋转角度（仅糖果/药丸样式生效）"
      },
      {
        "key": "stageCount",
        "label": "层级数量",
        "type": "slider",
        "default": 5,
        "min": 3,
        "max": 5,
        "step": 1,
        "desc": "漏斗层级数量",
        "publicKey": "stageCount",
        "publicLabel": "层级数量",
        "description": "漏斗层级数量"
      },
      {
        "key": "chartVariant",
        "label": "图表类型",
        "type": "radio",
        "default": "funnel",
        "options": [
          [
            "funnel",
            "漏斗"
          ],
          [
            "bars",
            "横向柱"
          ]
        ],
        "desc": "梯形漏斗 / 横向柱状",
        "publicKey": "chartVariant",
        "publicLabel": "图表类型",
        "description": "梯形漏斗 / 横向柱状"
      },
      {
        "key": "focusEnabled",
        "label": "重点突出",
        "type": "toggle",
        "default": true,
        "desc": "是否高亮某一层级",
        "publicKey": "focusEnabled",
        "publicLabel": "重点突出",
        "description": "是否高亮某一层级"
      },
      {
        "key": "focusIndex",
        "label": "重点序号",
        "type": "slider",
        "default": 4,
        "min": 1,
        "max": 5,
        "step": 1,
        "maxFromKey": "stageCount",
        "desc": "被高亮层级的序号",
        "publicKey": "focusIndex",
        "publicLabel": "重点序号",
        "description": "被高亮层级的序号"
      },
      {
        "key": "showConversion",
        "label": "层级转化率",
        "type": "toggle",
        "default": true,
        "desc": "层级间通过率显隐",
        "publicKey": "showConversion",
        "publicLabel": "层级转化率",
        "description": "层级间通过率显隐"
      },
      {
        "key": "showStageIndex",
        "label": "层级编号",
        "type": "toggle",
        "default": true,
        "desc": "漏斗内层级编号(funnel/bars)",
        "publicKey": "showStageIndex",
        "publicLabel": "层级编号",
        "description": "漏斗内层级编号(funnel/bars)"
      },
      {
        "key": "showDecorations",
        "label": "装饰元素",
        "type": "toggle",
        "default": true,
        "desc": "星芒 / 圆环等点缀",
        "publicKey": "showDecorations",
        "publicLabel": "装饰元素",
        "description": "星芒 / 圆环等点缀"
      }
    ],
    "defaultProps": {
      "copy": {
        "text001": "交易漏斗 · DEAL FUNNEL",
        "text002": "五千家筛到最后，",
        "text003": "只有 97 笔",
        "text004": "从活跃创业公司到亿美元级大额融资，层层筛选——本报告聚焦的，正是漏斗最底端那批顶流。",
        "text005": "家",
        "text006": "▼",
        "text007": "通过率",
        "text008": "漏斗宽度为示意比例 · 通过率 = 本层 ÷ 上一层 · 数据为调研整理推演"
      },
      "stagesData": [
        {
          "name": "活跃 AI 创业公司",
          "sub": "全美在投",
          "count": "5,000",
          "suffix": "+",
          "conv": "",
          "color": "#15A7F0",
          "topW": 100
        },
        {
          "name": "全年获得新融资",
          "sub": "完成至少一轮",
          "count": "1,200",
          "suffix": "",
          "conv": "24%",
          "color": "#27E021",
          "topW": 75
        },
        {
          "name": "千万美元级以上",
          "sub": "$10M+ 单笔",
          "count": "380",
          "suffix": "",
          "conv": "32%",
          "color": "#FFC700",
          "topW": 51
        },
        {
          "name": "亿美元级以上",
          "sub": "本报告样本 · $100M+",
          "count": "97",
          "suffix": "",
          "conv": "26%",
          "color": "#FF9FE2",
          "topW": 31
        },
        {
          "name": "十亿美元级",
          "sub": "$1B+ 巨额轮",
          "count": "12",
          "suffix": "",
          "conv": "12%",
          "color": "#15A7F0",
          "topW": 17
        }
      ],
      "hlStyle": "glass",
      "hlTilt": 2,
      "stageCount": 5,
      "chartVariant": "funnel",
      "focusEnabled": true,
      "focusIndex": 4,
      "showConversion": true,
      "showStageIndex": true,
      "showDecorations": true
    }
  },
  {
    "key": "theme04_page035",
    "themeKey": "theme04",
    "pageNumber": 35,
    "layout": "THEME04-035",
    "slot": "chapter",
    "label": "章节大字",
    "bgClass": "",
    "controls": [
      {
        "key": "copy",
        "label": "可见文案",
        "type": "list",
        "default": {
          "text001": "PART"
        },
        "desc": "页面中的固定可见文案、单位和图片槽提示",
        "publicKey": "copy",
        "publicLabel": "可见文案",
        "description": "页面中的固定可见文案、单位和图片槽提示"
      },
      {
        "key": "chapterData",
        "label": "chapterData",
        "type": "list",
        "default": {
          "zh": "横向透视",
          "en": "SECTOR · ROUNDS · PLAYERS",
          "lead": "在同一时间截面上，对赛道、轮次、地区与头部玩家做横向对比——回答「谁更大、谁更密集、资源集中在哪里」。",
          "tags": [
            "行业赛道",
            "轮次结构",
            "头部玩家"
          ]
        },
        "desc": "默认数据内容",
        "publicKey": "chapterData",
        "publicLabel": "chapterData",
        "description": "默认数据内容"
      },
      {
        "key": "partNumber",
        "label": "章节编号",
        "type": "slider",
        "default": 3,
        "min": 1,
        "max": 7,
        "step": 1,
        "maxFromKey": "progressCount",
        "desc": "徽章 / 进度轨当前段",
        "publicKey": "partNumber",
        "publicLabel": "章节编号",
        "description": "徽章 / 进度轨当前段"
      },
      {
        "key": "accentTone",
        "label": "主色调",
        "type": "radio",
        "default": "green",
        "options": [
          [
            "green",
            "绿"
          ],
          [
            "yellow",
            "黄"
          ],
          [
            "blue",
            "蓝"
          ],
          [
            "pink",
            "粉"
          ]
        ],
        "desc": "页面主色调",
        "publicKey": "accentTone",
        "publicLabel": "主色调",
        "description": "页面主色调"
      },
      {
        "key": "textAlign",
        "label": "文案对齐",
        "type": "radio",
        "default": "center",
        "options": [
          [
            "center",
            "居中"
          ],
          [
            "left",
            "靠左"
          ]
        ],
        "desc": "居中 / 靠左",
        "publicKey": "textAlign",
        "publicLabel": "文案对齐",
        "description": "居中 / 靠左"
      },
      {
        "key": "showGhost",
        "label": "幽灵数字",
        "type": "toggle",
        "default": true,
        "desc": "背景巨型描边数字",
        "publicKey": "showGhost",
        "publicLabel": "幽灵数字",
        "description": "背景巨型描边数字"
      },
      {
        "key": "showProgress",
        "label": "进度轨",
        "type": "toggle",
        "default": true,
        "desc": "底部章节进度轨",
        "publicKey": "showProgress",
        "publicLabel": "进度轨",
        "description": "底部章节进度轨"
      },
      {
        "key": "progressCount",
        "label": "进度段数",
        "type": "slider",
        "default": 6,
        "min": 3,
        "max": 7,
        "step": 1,
        "desc": "进度轨段数",
        "publicKey": "progressCount",
        "publicLabel": "进度段数",
        "description": "进度轨段数"
      },
      {
        "key": "showDecorations",
        "label": "装饰元素",
        "type": "toggle",
        "default": true,
        "desc": "星芒等点缀",
        "publicKey": "showDecorations",
        "publicLabel": "装饰元素",
        "description": "星芒等点缀"
      }
    ],
    "defaultProps": {
      "copy": {
        "text001": "PART"
      },
      "chapterData": {
        "zh": "横向透视",
        "en": "SECTOR · ROUNDS · PLAYERS",
        "lead": "在同一时间截面上，对赛道、轮次、地区与头部玩家做横向对比——回答「谁更大、谁更密集、资源集中在哪里」。",
        "tags": [
          "行业赛道",
          "轮次结构",
          "头部玩家"
        ]
      },
      "partNumber": 3,
      "accentTone": "green",
      "textAlign": "center",
      "showGhost": true,
      "showProgress": true,
      "progressCount": 6,
      "showDecorations": true
    }
  },
  {
    "key": "theme04_page036",
    "themeKey": "theme04",
    "pageNumber": 36,
    "layout": "THEME04-036",
    "slot": "ranking",
    "label": "头部玩家",
    "bgClass": "",
    "controls": [
      {
        "key": "hlStyle",
        "label": "高亮样式",
        "type": "radio",
        "default": "glass",
        "options": [
          [
            "glass",
            "玻璃糖果"
          ],
          [
            "pill",
            "扁平药丸"
          ],
          [
            "underline",
            "下划线"
          ],
          [
            "text",
            "纯文字"
          ]
        ],
        "desc": "关键词高亮：玻璃糖果 / 扁平药丸 / 下划线 / 纯文字",
        "publicKey": "hlStyle",
        "publicLabel": "高亮样式",
        "description": "关键词高亮：玻璃糖果 / 扁平药丸 / 下划线 / 纯文字"
      },
      {
        "key": "hlTilt",
        "label": "高亮倾斜",
        "type": "slider",
        "default": 2,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "关键词胶囊旋转角度（仅糖果/药丸样式生效）",
        "publicKey": "hlTilt",
        "publicLabel": "高亮倾斜",
        "description": "关键词胶囊旋转角度（仅糖果/药丸样式生效）"
      },
      {
        "key": "itemCount",
        "label": "条目数量",
        "type": "slider",
        "default": 6,
        "min": 3,
        "max": 10,
        "step": 1,
        "desc": "展示的排行条目数量",
        "publicKey": "itemCount",
        "publicLabel": "条目数量",
        "description": "展示的排行条目数量"
      },
      {
        "key": "focusEnabled",
        "label": "重点突出",
        "type": "toggle",
        "default": true,
        "desc": "是否高亮某一名次",
        "publicKey": "focusEnabled",
        "publicLabel": "重点突出",
        "description": "是否高亮某一名次"
      },
      {
        "key": "focusIndex",
        "label": "重点序号",
        "type": "slider",
        "default": 1,
        "min": 1,
        "max": 10,
        "step": 1,
        "maxFromKey": "itemCount",
        "desc": "被高亮条目的名次",
        "publicKey": "focusIndex",
        "publicLabel": "重点序号",
        "description": "被高亮条目的名次"
      },
      {
        "key": "sortDir",
        "label": "排序方向",
        "type": "radio",
        "default": "desc",
        "options": [
          [
            "desc",
            "从高到低"
          ],
          [
            "asc",
            "从低到高"
          ]
        ],
        "desc": "展示顺序方向",
        "publicKey": "sortDir",
        "publicLabel": "排序方向",
        "description": "展示顺序方向"
      },
      {
        "key": "showValue",
        "label": "数值显示",
        "type": "toggle",
        "default": true,
        "desc": "条末数值标签",
        "publicKey": "showValueLabels",
        "publicLabel": "数值显示",
        "description": "条末数值标签"
      },
      {
        "key": "showCategory",
        "label": "类别标签",
        "type": "toggle",
        "default": true,
        "desc": "名称下方的分类标签",
        "publicKey": "showCategory",
        "publicLabel": "类别标签",
        "description": "名称下方的分类标签"
      },
      {
        "key": "showRankBadge",
        "label": "序号徽章",
        "type": "toggle",
        "default": true,
        "desc": "左侧名次徽章",
        "publicKey": "showRankBadge",
        "publicLabel": "序号徽章",
        "description": "左侧名次徽章"
      },
      {
        "key": "showDecorations",
        "label": "装饰元素",
        "type": "toggle",
        "default": true,
        "desc": "星芒等点缀",
        "publicKey": "showDecorations",
        "publicLabel": "装饰元素",
        "description": "星芒等点缀"
      },
      {
        "key": "rows",
        "label": "排行条目",
        "type": "list",
        "default": [
          {
            "name": "OpenAI",
            "value": 66,
            "cat": "通用大模型"
          },
          {
            "name": "Anthropic",
            "value": 65,
            "cat": "通用大模型"
          },
          {
            "name": "xAI",
            "value": 50,
            "cat": "通用大模型"
          },
          {
            "name": "CoreWeave",
            "value": 11,
            "cat": "AI 基础设施"
          },
          {
            "name": "Safe Superintelligence",
            "value": 10,
            "cat": "通用大模型"
          },
          {
            "name": "Scale AI",
            "value": 10,
            "cat": "AI 基础设施"
          },
          {
            "name": "Figure AI",
            "value": 6.8,
            "cat": "AI 硬件"
          },
          {
            "name": "Perplexity AI",
            "value": 5.2,
            "cat": "垂直应用"
          },
          {
            "name": "Databricks",
            "value": 5,
            "cat": "AI 基础设施"
          },
          {
            "name": "Glean",
            "value": 2.6,
            "cat": "垂直应用"
          }
        ],
        "desc": "排行条目：名称 / 数值 / 分类（分类名决定色彩）",
        "publicKey": "rows",
        "publicLabel": "排行条目",
        "description": "排行条目：名称 / 数值 / 分类（分类名决定色彩）"
      }
    ],
    "defaultProps": {
      "hlStyle": "glass",
      "hlTilt": 2,
      "itemCount": 6,
      "focusEnabled": true,
      "focusIndex": 1,
      "sortDir": "desc",
      "showValue": true,
      "showCategory": true,
      "showRankBadge": true,
      "showDecorations": true,
      "kicker": "头部玩家 · TOP 10 单笔融资排名",
      "titleLead": "三大模型公司",
      "titleKeyword": "霸榜前三",
      "sub": "单位：亿美元 · 仅取各公司 2024 年最大单笔融资",
      "rows": [
        {
          "name": "OpenAI",
          "value": 66,
          "cat": "通用大模型"
        },
        {
          "name": "Anthropic",
          "value": 65,
          "cat": "通用大模型"
        },
        {
          "name": "xAI",
          "value": 50,
          "cat": "通用大模型"
        },
        {
          "name": "CoreWeave",
          "value": 11,
          "cat": "AI 基础设施"
        },
        {
          "name": "Safe Superintelligence",
          "value": 10,
          "cat": "通用大模型"
        },
        {
          "name": "Scale AI",
          "value": 10,
          "cat": "AI 基础设施"
        },
        {
          "name": "Figure AI",
          "value": 6.8,
          "cat": "AI 硬件"
        },
        {
          "name": "Perplexity AI",
          "value": 5.2,
          "cat": "垂直应用"
        },
        {
          "name": "Databricks",
          "value": 5,
          "cat": "AI 基础设施"
        },
        {
          "name": "Glean",
          "value": 2.6,
          "cat": "垂直应用"
        }
      ]
    }
  },
  {
    "key": "theme04_page037",
    "themeKey": "theme04",
    "pageNumber": 37,
    "layout": "THEME04-037",
    "slot": "layers",
    "label": "产业链分层",
    "bgClass": "",
    "controls": [
      {
        "key": "hlStyle",
        "label": "高亮样式",
        "type": "radio",
        "default": "glass",
        "options": [
          [
            "glass",
            "玻璃糖果"
          ],
          [
            "pill",
            "扁平药丸"
          ],
          [
            "underline",
            "下划线"
          ],
          [
            "text",
            "纯文字"
          ]
        ],
        "desc": "关键词高亮：玻璃糖果 / 扁平药丸 / 下划线 / 纯文字",
        "publicKey": "hlStyle",
        "publicLabel": "高亮样式",
        "description": "关键词高亮：玻璃糖果 / 扁平药丸 / 下划线 / 纯文字"
      },
      {
        "key": "hlTilt",
        "label": "高亮倾斜",
        "type": "slider",
        "default": 2,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "关键词胶囊旋转角度（仅糖果/药丸样式生效）",
        "publicKey": "hlTilt",
        "publicLabel": "高亮倾斜",
        "description": "关键词胶囊旋转角度（仅糖果/药丸样式生效）"
      },
      {
        "key": "layerCount",
        "label": "展示层数",
        "type": "slider",
        "default": 3,
        "min": 1,
        "max": 3,
        "step": 1,
        "desc": "展示的产业链层数(上→中→下游)",
        "publicKey": "layerCount",
        "publicLabel": "展示层数",
        "description": "展示的产业链层数(上→中→下游)"
      },
      {
        "key": "focusEnabled",
        "label": "重点突出",
        "type": "toggle",
        "default": false,
        "desc": "是否高亮某一层",
        "publicKey": "focusEnabled",
        "publicLabel": "重点突出",
        "description": "是否高亮某一层"
      },
      {
        "key": "focusIndex",
        "label": "重点序号",
        "type": "slider",
        "default": 1,
        "min": 1,
        "max": 3,
        "step": 1,
        "maxFromKey": "layerCount",
        "desc": "被高亮层的序号",
        "publicKey": "focusIndex",
        "publicLabel": "重点序号",
        "description": "被高亮层的序号"
      },
      {
        "key": "showSegments",
        "label": "细分环节",
        "type": "toggle",
        "default": true,
        "desc": "每层的细分环节卡",
        "publicKey": "showSegments",
        "publicLabel": "细分环节",
        "description": "每层的细分环节卡"
      },
      {
        "key": "showTags",
        "label": "对象标签",
        "type": "toggle",
        "default": true,
        "desc": "代表对象标签",
        "publicKey": "showTags",
        "publicLabel": "对象标签",
        "description": "代表对象标签"
      },
      {
        "key": "showDecorations",
        "label": "装饰元素",
        "type": "toggle",
        "default": true,
        "desc": "星芒等点缀",
        "publicKey": "showDecorations",
        "publicLabel": "装饰元素",
        "description": "星芒等点缀"
      },
      {
        "key": "layers",
        "label": "产业层",
        "type": "list",
        "default": [
          {
            "tier": "上游 · 基础设施",
            "en": "UPSTREAM",
            "color": "#15A7F0",
            "note": "确定性最强 ·「卖铲子」",
            "segments": [
              {
                "name": "AI 芯片",
                "comps": [
                  "Cerebras",
                  "Groq"
                ]
              },
              {
                "name": "算力云 / 数据",
                "comps": [
                  "CoreWeave",
                  "Scale AI"
                ]
              }
            ]
          },
          {
            "tier": "中游 · 模型层",
            "en": "MIDSTREAM",
            "color": "#27E021",
            "note": "竞争最激烈 · 兵家必争",
            "segments": [
              {
                "name": "通用大模型",
                "comps": [
                  "OpenAI",
                  "Anthropic",
                  "xAI"
                ]
              },
              {
                "name": "开源 / 专用",
                "comps": [
                  "Mistral",
                  "SSI"
                ]
              }
            ]
          },
          {
            "tier": "下游 · 应用层",
            "en": "DOWNSTREAM",
            "color": "#FFC700",
            "note": "潜力最大 · 待验证",
            "segments": [
              {
                "name": "企业生产力",
                "comps": [
                  "Glean",
                  "Databricks"
                ]
              },
              {
                "name": "消费搜索 · 具身",
                "comps": [
                  "Perplexity",
                  "Figure AI"
                ]
              }
            ]
          }
        ],
        "desc": "产业层：层名 / 英文 / 注释 / 颜色（细分 segments 在 defaults 中）",
        "publicKey": "layers",
        "publicLabel": "产业层",
        "description": "产业层：层名 / 英文 / 注释 / 颜色（细分 segments 在 defaults 中）"
      }
    ],
    "defaultProps": {
      "hlStyle": "glass",
      "hlTilt": 2,
      "layerCount": 3,
      "focusEnabled": false,
      "focusIndex": 1,
      "showSegments": true,
      "showTags": true,
      "showDecorations": true,
      "kicker": "产业链分层 · 上 → 中 → 下游",
      "titleLead": "越往",
      "titleKeyword": "上游",
      "titleTail": "越确定，越往下游越有想象",
      "layers": [
        {
          "tier": "上游 · 基础设施",
          "en": "UPSTREAM",
          "color": "#15A7F0",
          "note": "确定性最强 ·「卖铲子」",
          "segments": [
            {
              "name": "AI 芯片",
              "comps": [
                "Cerebras",
                "Groq"
              ]
            },
            {
              "name": "算力云 / 数据",
              "comps": [
                "CoreWeave",
                "Scale AI"
              ]
            }
          ]
        },
        {
          "tier": "中游 · 模型层",
          "en": "MIDSTREAM",
          "color": "#27E021",
          "note": "竞争最激烈 · 兵家必争",
          "segments": [
            {
              "name": "通用大模型",
              "comps": [
                "OpenAI",
                "Anthropic",
                "xAI"
              ]
            },
            {
              "name": "开源 / 专用",
              "comps": [
                "Mistral",
                "SSI"
              ]
            }
          ]
        },
        {
          "tier": "下游 · 应用层",
          "en": "DOWNSTREAM",
          "color": "#FFC700",
          "note": "潜力最大 · 待验证",
          "segments": [
            {
              "name": "企业生产力",
              "comps": [
                "Glean",
                "Databricks"
              ]
            },
            {
              "name": "消费搜索 · 具身",
              "comps": [
                "Perplexity",
                "Figure AI"
              ]
            }
          ]
        }
      ]
    }
  },
  {
    "key": "theme04_page038",
    "themeKey": "theme04",
    "pageNumber": 38,
    "layout": "THEME04-038",
    "slot": "chaintable",
    "label": "产业链分层表",
    "bgClass": "",
    "controls": [
      {
        "key": "copy",
        "label": "可见文案",
        "type": "list",
        "default": {
          "text001": "产业链分层 · VALUE CHAIN",
          "text002": "从",
          "text003": "芯片算力",
          "text004": "到",
          "text005": "终端应用",
          "text006": "，三层结构一表读懂",
          "text007": "产业层级",
          "text008": "细分环节",
          "text009": "代表公司"
        },
        "desc": "页面中的固定可见文案、单位和图片槽提示",
        "publicKey": "copy",
        "publicLabel": "可见文案",
        "description": "页面中的固定可见文案、单位和图片槽提示"
      },
      {
        "key": "groupsData",
        "label": "groupsData",
        "type": "list",
        "default": [
          {
            "level": "上游",
            "theme": "基础设施",
            "en": "INFRASTRUCTURE",
            "color": "#FFC700",
            "segs": [
              {
                "env": "AI 芯片",
                "cos": [
                  "Cerebras",
                  "Groq"
                ]
              },
              {
                "env": "算力云 / 数据",
                "cos": [
                  "CoreWeave",
                  "Scale AI"
                ]
              }
            ]
          },
          {
            "level": "中游",
            "theme": "模型层",
            "en": "MODEL LAYER",
            "color": "#15A7F0",
            "segs": [
              {
                "env": "通用大模型",
                "cos": [
                  "OpenAI",
                  "Anthropic",
                  "xAI"
                ]
              },
              {
                "env": "开源 / 专用模型",
                "cos": [
                  "Mistral",
                  "SSI"
                ]
              }
            ]
          },
          {
            "level": "下游",
            "theme": "应用层",
            "en": "APPLICATION",
            "color": "#27E021",
            "segs": [
              {
                "env": "企业生产力",
                "cos": [
                  "Glean",
                  "Databricks"
                ]
              },
              {
                "env": "消费 / 搜索",
                "cos": [
                  "Perplexity AI"
                ]
              },
              {
                "env": "具身智能 / 机器人",
                "cos": [
                  "Figure AI"
                ]
              }
            ]
          }
        ],
        "desc": "默认数据内容",
        "publicKey": "groupsData",
        "publicLabel": "groupsData",
        "description": "默认数据内容"
      },
      {
        "key": "hlStyle",
        "label": "高亮样式",
        "type": "radio",
        "default": "glass",
        "options": [
          [
            "glass",
            "玻璃糖果"
          ],
          [
            "pill",
            "扁平药丸"
          ],
          [
            "underline",
            "下划线"
          ],
          [
            "text",
            "纯文字"
          ]
        ],
        "desc": "关键词高亮：玻璃糖果 / 扁平药丸 / 下划线 / 纯文字",
        "publicKey": "hlStyle",
        "publicLabel": "高亮样式",
        "description": "关键词高亮：玻璃糖果 / 扁平药丸 / 下划线 / 纯文字"
      },
      {
        "key": "hlTilt",
        "label": "高亮倾斜",
        "type": "slider",
        "default": 2,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "关键词胶囊旋转角度（仅糖果/药丸样式生效）",
        "publicKey": "hlTilt",
        "publicLabel": "高亮倾斜",
        "description": "关键词胶囊旋转角度（仅糖果/药丸样式生效）"
      },
      {
        "key": "groupCount",
        "label": "层级数量",
        "type": "slider",
        "default": 3,
        "min": 1,
        "max": 3,
        "step": 1,
        "desc": "展示的产业层级数(上中下游)",
        "publicKey": "groupCount",
        "publicLabel": "层级数量",
        "description": "展示的产业层级数(上中下游)"
      },
      {
        "key": "focusEnabled",
        "label": "重点突出",
        "type": "toggle",
        "default": false,
        "desc": "是否高亮某一层级",
        "publicKey": "focusEnabled",
        "publicLabel": "重点突出",
        "description": "是否高亮某一层级"
      },
      {
        "key": "focusIndex",
        "label": "重点序号",
        "type": "slider",
        "default": 1,
        "min": 1,
        "max": 3,
        "step": 1,
        "maxFromKey": "groupCount",
        "desc": "被高亮层级的序号",
        "publicKey": "focusIndex",
        "publicLabel": "重点序号",
        "description": "被高亮层级的序号"
      },
      {
        "key": "showCompanyTags",
        "label": "对象标签",
        "type": "toggle",
        "default": true,
        "desc": "代表公司用标签(关) / 纯文本",
        "publicKey": "showCompanyTags",
        "publicLabel": "对象标签",
        "description": "代表公司用标签(关) / 纯文本"
      },
      {
        "key": "showLevelBadge",
        "label": "层级徽章",
        "type": "toggle",
        "default": true,
        "desc": "层级大徽章 + 英文",
        "publicKey": "showLevelBadge",
        "publicLabel": "层级徽章",
        "description": "层级大徽章 + 英文"
      },
      {
        "key": "showFlow",
        "label": "传导箭头",
        "type": "toggle",
        "default": true,
        "desc": "层级间向下传导箭头",
        "publicKey": "showFlow",
        "publicLabel": "传导箭头",
        "description": "层级间向下传导箭头"
      },
      {
        "key": "showDecorations",
        "label": "装饰元素",
        "type": "toggle",
        "default": true,
        "desc": "星芒 / 圆环等点缀",
        "publicKey": "showDecorations",
        "publicLabel": "装饰元素",
        "description": "星芒 / 圆环等点缀"
      }
    ],
    "defaultProps": {
      "copy": {
        "text001": "产业链分层 · VALUE CHAIN",
        "text002": "从",
        "text003": "芯片算力",
        "text004": "到",
        "text005": "终端应用",
        "text006": "，三层结构一表读懂",
        "text007": "产业层级",
        "text008": "细分环节",
        "text009": "代表公司"
      },
      "groupsData": [
        {
          "level": "上游",
          "theme": "基础设施",
          "en": "INFRASTRUCTURE",
          "color": "#FFC700",
          "segs": [
            {
              "env": "AI 芯片",
              "cos": [
                "Cerebras",
                "Groq"
              ]
            },
            {
              "env": "算力云 / 数据",
              "cos": [
                "CoreWeave",
                "Scale AI"
              ]
            }
          ]
        },
        {
          "level": "中游",
          "theme": "模型层",
          "en": "MODEL LAYER",
          "color": "#15A7F0",
          "segs": [
            {
              "env": "通用大模型",
              "cos": [
                "OpenAI",
                "Anthropic",
                "xAI"
              ]
            },
            {
              "env": "开源 / 专用模型",
              "cos": [
                "Mistral",
                "SSI"
              ]
            }
          ]
        },
        {
          "level": "下游",
          "theme": "应用层",
          "en": "APPLICATION",
          "color": "#27E021",
          "segs": [
            {
              "env": "企业生产力",
              "cos": [
                "Glean",
                "Databricks"
              ]
            },
            {
              "env": "消费 / 搜索",
              "cos": [
                "Perplexity AI"
              ]
            },
            {
              "env": "具身智能 / 机器人",
              "cos": [
                "Figure AI"
              ]
            }
          ]
        }
      ],
      "hlStyle": "glass",
      "hlTilt": 2,
      "groupCount": 3,
      "focusEnabled": false,
      "focusIndex": 1,
      "showCompanyTags": true,
      "showLevelBadge": true,
      "showFlow": true,
      "showDecorations": true
    }
  },
  {
    "key": "theme04_page039",
    "themeKey": "theme04",
    "pageNumber": 39,
    "layout": "THEME04-039",
    "slot": "chainflow",
    "label": "产业链分层·流向",
    "bgClass": "",
    "controls": [
      {
        "key": "copy",
        "label": "可见文案",
        "type": "list",
        "default": {
          "text001": "产业链分层 · VALUE CHAIN",
          "text002": "一条产业链，",
          "text003": "钱主要压在中游",
          "text004": "%",
          "text005": "资本占比"
        },
        "desc": "页面中的固定可见文案、单位和图片槽提示",
        "publicKey": "copy",
        "publicLabel": "可见文案",
        "description": "页面中的固定可见文案、单位和图片槽提示"
      },
      {
        "key": "layersData",
        "label": "layersData",
        "type": "list",
        "default": [
          {
            "tier": "上游",
            "cn": "基础设施",
            "en": "INFRASTRUCTURE",
            "color": "#FFC700",
            "share": 30,
            "cats": [
              {
                "name": "AI 芯片",
                "firms": [
                  "Cerebras",
                  "Groq"
                ]
              },
              {
                "name": "算力云 / 数据",
                "firms": [
                  "CoreWeave",
                  "Scale AI"
                ]
              }
            ]
          },
          {
            "tier": "中游",
            "cn": "模型层",
            "en": "MODEL LAYER",
            "color": "#15A7F0",
            "share": 55,
            "cats": [
              {
                "name": "通用大模型",
                "firms": [
                  "OpenAI",
                  "Anthropic",
                  "xAI"
                ]
              },
              {
                "name": "开源 / 专用模型",
                "firms": [
                  "Mistral",
                  "SSI"
                ]
              }
            ]
          },
          {
            "tier": "下游",
            "cn": "应用层",
            "en": "APPLICATION",
            "color": "#27E021",
            "share": 15,
            "cats": [
              {
                "name": "企业生产力",
                "firms": [
                  "Glean",
                  "Databricks"
                ]
              },
              {
                "name": "消费 / 搜索",
                "firms": [
                  "Perplexity AI"
                ]
              },
              {
                "name": "具身智能 / 机器人",
                "firms": [
                  "Figure AI"
                ]
              }
            ]
          }
        ],
        "desc": "默认数据内容",
        "publicKey": "layersData",
        "publicLabel": "layersData",
        "description": "默认数据内容"
      },
      {
        "key": "hlStyle",
        "label": "高亮样式",
        "type": "radio",
        "default": "glass",
        "options": [
          [
            "glass",
            "玻璃糖果"
          ],
          [
            "pill",
            "扁平药丸"
          ],
          [
            "underline",
            "下划线"
          ],
          [
            "text",
            "纯文字"
          ]
        ],
        "desc": "关键词高亮：玻璃糖果 / 扁平药丸 / 下划线 / 纯文字",
        "publicKey": "hlStyle",
        "publicLabel": "高亮样式",
        "description": "关键词高亮：玻璃糖果 / 扁平药丸 / 下划线 / 纯文字"
      },
      {
        "key": "hlTilt",
        "label": "高亮倾斜",
        "type": "slider",
        "default": 2,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "关键词胶囊旋转角度（仅糖果/药丸样式生效）",
        "publicKey": "hlTilt",
        "publicLabel": "高亮倾斜",
        "description": "关键词胶囊旋转角度（仅糖果/药丸样式生效）"
      },
      {
        "key": "groupCount",
        "label": "产业层数",
        "type": "slider",
        "default": 3,
        "min": 1,
        "max": 3,
        "step": 1,
        "desc": "展示的产业层级数（上中下游）",
        "publicKey": "groupCount",
        "publicLabel": "产业层数",
        "description": "展示的产业层级数（上中下游）"
      },
      {
        "key": "focusEnabled",
        "label": "重点突出",
        "type": "toggle",
        "default": false,
        "desc": "是否高亮某一层级",
        "publicKey": "focusEnabled",
        "publicLabel": "重点突出",
        "description": "是否高亮某一层级"
      },
      {
        "key": "focusIndex",
        "label": "重点层序号",
        "type": "slider",
        "default": 2,
        "min": 1,
        "max": 3,
        "step": 1,
        "maxFromKey": "groupCount",
        "desc": "被高亮层级的序号",
        "publicKey": "focusIndex",
        "publicLabel": "重点层序号",
        "description": "被高亮层级的序号"
      },
      {
        "key": "showShareBar",
        "label": "占比",
        "type": "toggle",
        "default": true,
        "desc": "右栏占比大数字 + 进度条",
        "publicKey": "showShareBar",
        "publicLabel": "占比",
        "description": "右栏占比大数字 + 进度条"
      },
      {
        "key": "showCompanyTags",
        "label": "对象标签",
        "type": "toggle",
        "default": true,
        "desc": "公司用霓虹芯片（关=纯文本）",
        "publicKey": "showCompanyTags",
        "publicLabel": "对象标签",
        "description": "公司用霓虹芯片（关=纯文本）"
      },
      {
        "key": "showLevelBadge",
        "label": "层级徽章",
        "type": "toggle",
        "default": true,
        "desc": "层级大徽章 + 英文",
        "publicKey": "showLevelBadge",
        "publicLabel": "层级徽章",
        "description": "层级大徽章 + 英文"
      },
      {
        "key": "showFlow",
        "label": "传导箭头",
        "type": "toggle",
        "default": true,
        "desc": "层级间向下传导箭头",
        "publicKey": "showFlow",
        "publicLabel": "传导箭头",
        "description": "层级间向下传导箭头"
      },
      {
        "key": "showDecorations",
        "label": "装饰元素",
        "type": "toggle",
        "default": true,
        "desc": "星芒 / 圆环等点缀",
        "publicKey": "showDecorations",
        "publicLabel": "装饰元素",
        "description": "星芒 / 圆环等点缀"
      }
    ],
    "defaultProps": {
      "copy": {
        "text001": "产业链分层 · VALUE CHAIN",
        "text002": "一条产业链，",
        "text003": "钱主要压在中游",
        "text004": "%",
        "text005": "资本占比"
      },
      "layersData": [
        {
          "tier": "上游",
          "cn": "基础设施",
          "en": "INFRASTRUCTURE",
          "color": "#FFC700",
          "share": 30,
          "cats": [
            {
              "name": "AI 芯片",
              "firms": [
                "Cerebras",
                "Groq"
              ]
            },
            {
              "name": "算力云 / 数据",
              "firms": [
                "CoreWeave",
                "Scale AI"
              ]
            }
          ]
        },
        {
          "tier": "中游",
          "cn": "模型层",
          "en": "MODEL LAYER",
          "color": "#15A7F0",
          "share": 55,
          "cats": [
            {
              "name": "通用大模型",
              "firms": [
                "OpenAI",
                "Anthropic",
                "xAI"
              ]
            },
            {
              "name": "开源 / 专用模型",
              "firms": [
                "Mistral",
                "SSI"
              ]
            }
          ]
        },
        {
          "tier": "下游",
          "cn": "应用层",
          "en": "APPLICATION",
          "color": "#27E021",
          "share": 15,
          "cats": [
            {
              "name": "企业生产力",
              "firms": [
                "Glean",
                "Databricks"
              ]
            },
            {
              "name": "消费 / 搜索",
              "firms": [
                "Perplexity AI"
              ]
            },
            {
              "name": "具身智能 / 机器人",
              "firms": [
                "Figure AI"
              ]
            }
          ]
        }
      ],
      "hlStyle": "glass",
      "hlTilt": 2,
      "groupCount": 3,
      "focusEnabled": false,
      "focusIndex": 2,
      "showShareBar": true,
      "showCompanyTags": true,
      "showLevelBadge": true,
      "showFlow": true,
      "showDecorations": true
    }
  },
  {
    "key": "theme04_page040",
    "themeKey": "theme04",
    "pageNumber": 40,
    "layout": "THEME04-040",
    "slot": "region",
    "label": "地区分布",
    "bgClass": "",
    "controls": [
      {
        "key": "copy",
        "label": "可见文案",
        "type": "list",
        "default": {
          "text001": "亿",
          "text002": "%",
          "text003": "· 融资额领先",
          "text004": "亿",
          "text005": "%"
        },
        "desc": "页面中的固定可见文案、单位和图片槽提示",
        "publicKey": "copy",
        "publicLabel": "可见文案",
        "description": "页面中的固定可见文案、单位和图片槽提示"
      },
      {
        "key": "hlStyle",
        "label": "高亮样式",
        "type": "radio",
        "default": "glass",
        "options": [
          [
            "glass",
            "玻璃糖果"
          ],
          [
            "pill",
            "扁平药丸"
          ],
          [
            "underline",
            "下划线"
          ],
          [
            "text",
            "纯文字"
          ]
        ],
        "desc": "关键词高亮：玻璃糖果 / 扁平药丸 / 下划线 / 纯文字",
        "publicKey": "hlStyle",
        "publicLabel": "高亮样式",
        "description": "关键词高亮：玻璃糖果 / 扁平药丸 / 下划线 / 纯文字"
      },
      {
        "key": "hlTilt",
        "label": "高亮倾斜",
        "type": "slider",
        "default": 2,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "关键词胶囊旋转角度（仅糖果/药丸样式生效）",
        "publicKey": "hlTilt",
        "publicLabel": "高亮倾斜",
        "description": "关键词胶囊旋转角度（仅糖果/药丸样式生效）"
      },
      {
        "key": "itemCount",
        "label": "条目数量",
        "type": "slider",
        "default": 5,
        "min": 3,
        "max": 5,
        "step": 1,
        "desc": "展示的地区条目数量",
        "publicKey": "itemCount",
        "publicLabel": "条目数量",
        "description": "展示的地区条目数量"
      },
      {
        "key": "chartVariant",
        "label": "图表类型",
        "type": "radio",
        "default": "donut",
        "options": [
          [
            "donut",
            "环形"
          ],
          [
            "bar",
            "柱状"
          ]
        ],
        "desc": "环形图或柱状图",
        "publicKey": "chartVariant",
        "publicLabel": "图表类型",
        "description": "环形图或柱状图"
      },
      {
        "key": "focusEnabled",
        "label": "重点突出",
        "type": "toggle",
        "default": true,
        "desc": "是否高亮某一地区",
        "publicKey": "focusEnabled",
        "publicLabel": "重点突出",
        "description": "是否高亮某一地区"
      },
      {
        "key": "focusIndex",
        "label": "重点序号",
        "type": "slider",
        "default": 1,
        "min": 1,
        "max": 5,
        "step": 1,
        "maxFromKey": "itemCount",
        "desc": "被高亮地区的序号",
        "publicKey": "focusIndex",
        "publicLabel": "重点序号",
        "description": "被高亮地区的序号"
      },
      {
        "key": "showPercent",
        "label": "百分比",
        "type": "toggle",
        "default": true,
        "desc": "右侧百分比徽章",
        "publicKey": "showPercent",
        "publicLabel": "百分比",
        "description": "右侧百分比徽章"
      },
      {
        "key": "showDecorations",
        "label": "装饰元素",
        "type": "toggle",
        "default": true,
        "desc": "星芒等点缀",
        "publicKey": "showDecorations",
        "publicLabel": "装饰元素",
        "description": "星芒等点缀"
      },
      {
        "key": "regions",
        "label": "地区",
        "type": "list",
        "default": [
          {
            "name": "旧金山湾区",
            "value": 620,
            "pct": 63.9,
            "color": "#27E021"
          },
          {
            "name": "纽约",
            "value": 120,
            "pct": 12.4,
            "color": "#FFC700"
          },
          {
            "name": "西雅图",
            "value": 95,
            "pct": 9.8,
            "color": "#15A7F0"
          },
          {
            "name": "波士顿",
            "value": 75,
            "pct": 7.7,
            "color": "#FF9FE2"
          },
          {
            "name": "其他地区",
            "value": 60,
            "pct": 6.2,
            "color": "#9aa0a6"
          }
        ],
        "desc": "地区：名称 / 数值 / 占比 / 颜色",
        "publicKey": "regions",
        "publicLabel": "地区",
        "description": "地区：名称 / 数值 / 占比 / 颜色"
      }
    ],
    "defaultProps": {
      "copy": {
        "text001": "亿",
        "text002": "%",
        "text003": "· 融资额领先",
        "text004": "亿",
        "text005": "%"
      },
      "hlStyle": "glass",
      "hlTilt": 2,
      "itemCount": 5,
      "chartVariant": "donut",
      "focusEnabled": true,
      "focusIndex": 1,
      "showPercent": true,
      "showDecorations": true,
      "kicker": "地理护城河 · 融资地区分布",
      "titleLead": "旧金山湾区",
      "titleKeyword": "独占六成",
      "captionTotal": "全年 970 亿美元",
      "captionSub": "按公司总部所在地统计",
      "regions": [
        {
          "name": "旧金山湾区",
          "value": 620,
          "pct": 63.9,
          "color": "#27E021"
        },
        {
          "name": "纽约",
          "value": 120,
          "pct": 12.4,
          "color": "#FFC700"
        },
        {
          "name": "西雅图",
          "value": 95,
          "pct": 9.8,
          "color": "#15A7F0"
        },
        {
          "name": "波士顿",
          "value": 75,
          "pct": 7.7,
          "color": "#FF9FE2"
        },
        {
          "name": "其他地区",
          "value": 60,
          "pct": 6.2,
          "color": "#9aa0a6"
        }
      ]
    }
  },
  {
    "key": "theme04_page041",
    "themeKey": "theme04",
    "pageNumber": 41,
    "layout": "THEME04-041",
    "slot": "gallery",
    "label": "地区画廊",
    "bgClass": "",
    "controls": [
      {
        "key": "areaData",
        "label": "areaData",
        "type": "list",
        "default": [
          "a",
          "b",
          "c",
          "d"
        ],
        "desc": "默认数据内容",
        "publicKey": "areaData",
        "publicLabel": "areaData",
        "description": "默认数据内容"
      },
      {
        "key": "hlStyle",
        "label": "高亮样式",
        "type": "radio",
        "default": "glass",
        "options": [
          [
            "glass",
            "玻璃糖果"
          ],
          [
            "pill",
            "扁平药丸"
          ],
          [
            "underline",
            "下划线"
          ],
          [
            "text",
            "纯文字"
          ]
        ],
        "desc": "关键词高亮：玻璃糖果 / 扁平药丸 / 下划线 / 纯文字",
        "publicKey": "hlStyle",
        "publicLabel": "高亮样式",
        "description": "关键词高亮：玻璃糖果 / 扁平药丸 / 下划线 / 纯文字"
      },
      {
        "key": "hlTilt",
        "label": "高亮倾斜",
        "type": "slider",
        "default": 2,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "关键词胶囊旋转角度（仅糖果/药丸样式生效）",
        "publicKey": "hlTilt",
        "publicLabel": "高亮倾斜",
        "description": "关键词胶囊旋转角度（仅糖果/药丸样式生效）"
      },
      {
        "key": "mediaCount",
        "label": "图片槽数量",
        "type": "slider",
        "default": 4,
        "min": 1,
        "max": 4,
        "step": 1,
        "desc": "自适应图片槽数量(按上传图片比例)",
        "publicKey": "mediaCount",
        "publicLabel": "图片槽数量",
        "description": "自适应图片槽数量(按上传图片比例)"
      },
      {
        "key": "mediaLayout",
        "label": "排布构图",
        "type": "radio",
        "default": "mosaic",
        "options": [
          [
            "mosaic",
            "特写网格"
          ],
          [
            "grid",
            "等比网格"
          ]
        ],
        "desc": "特写网格(首图大) / 等比网格",
        "publicKey": "mediaLayout",
        "publicLabel": "排布构图",
        "description": "特写网格(首图大) / 等比网格"
      },
      {
        "key": "showCaptions",
        "label": "浮层标注",
        "type": "toggle",
        "default": true,
        "desc": "图片底部城市/占比标注",
        "publicKey": "showCaptions",
        "publicLabel": "浮层标注",
        "description": "图片底部城市/占比标注"
      },
      {
        "key": "focusEnabled",
        "label": "重点突出",
        "type": "toggle",
        "default": true,
        "desc": "是否高亮某一张图片",
        "publicKey": "focusEnabled",
        "publicLabel": "重点突出",
        "description": "是否高亮某一张图片"
      },
      {
        "key": "focusIndex",
        "label": "重点序号",
        "type": "slider",
        "default": 1,
        "min": 1,
        "max": 4,
        "step": 1,
        "maxFromKey": "mediaCount",
        "desc": "被高亮图片的序号",
        "publicKey": "focusIndex",
        "publicLabel": "重点序号",
        "description": "被高亮图片的序号"
      },
      {
        "key": "showDecorations",
        "label": "装饰元素",
        "type": "toggle",
        "default": true,
        "desc": "星芒等点缀",
        "publicKey": "showDecorations",
        "publicLabel": "装饰元素",
        "description": "星芒等点缀"
      },
      {
        "key": "items",
        "label": "地区",
        "type": "list",
        "default": [
          {
            "city": "旧金山湾区",
            "en": "SF BAY AREA",
            "pct": "63.9%",
            "amt": "620 亿",
            "rank": "01"
          },
          {
            "city": "纽约",
            "en": "NEW YORK",
            "pct": "12.4%",
            "amt": "120 亿",
            "rank": "02"
          },
          {
            "city": "西雅图",
            "en": "SEATTLE",
            "pct": "9.8%",
            "amt": "95 亿",
            "rank": "03"
          },
          {
            "city": "波士顿",
            "en": "BOSTON",
            "pct": "7.7%",
            "amt": "75 亿",
            "rank": "04"
          }
        ],
        "desc": "每张图的浮层标注：名次 / 城市 / 英文 / 数值 / 占比",
        "publicKey": "items",
        "publicLabel": "地区",
        "description": "每张图的浮层标注：名次 / 城市 / 英文 / 数值 / 占比"
      }
    ],
    "defaultProps": {
      "areaData": [
        "a",
        "b",
        "c",
        "d"
      ],
      "hlStyle": "glass",
      "hlTilt": 2,
      "mediaCount": 4,
      "mediaLayout": "mosaic",
      "showCaptions": true,
      "focusEnabled": true,
      "focusIndex": 1,
      "showDecorations": true,
      "kicker": "地区分布 · GEO HUBS",
      "titleLead": "资本与算力，",
      "titleKeyword": "高度集聚",
      "sub": "旧金山湾区独占六成以上，人才、资本、算力的虹吸效应进一步强化「地理护城河」。",
      "mediaPlaceholder": "拖入图片",
      "items": [
        {
          "city": "旧金山湾区",
          "en": "SF BAY AREA",
          "pct": "63.9%",
          "amt": "620 亿",
          "rank": "01"
        },
        {
          "city": "纽约",
          "en": "NEW YORK",
          "pct": "12.4%",
          "amt": "120 亿",
          "rank": "02"
        },
        {
          "city": "西雅图",
          "en": "SEATTLE",
          "pct": "9.8%",
          "amt": "95 亿",
          "rank": "03"
        },
        {
          "city": "波士顿",
          "en": "BOSTON",
          "pct": "7.7%",
          "amt": "75 亿",
          "rank": "04"
        }
      ]
    }
  },
  {
    "key": "theme04_page042",
    "themeKey": "theme04",
    "pageNumber": 42,
    "layout": "THEME04-042",
    "slot": "filmstrip",
    "label": "胶片印样",
    "bgClass": "",
    "controls": [
      {
        "key": "copy",
        "label": "可见文案",
        "type": "list",
        "default": {
          "text001": "资本现场 · CONTACT SHEET",
          "text002": "一卷胶片，",
          "text003": "记录 2024 的资本现场",
          "text004": "把镜头对准签约桌、机房与发布日 —— 拖入你的现场照片，自动排进受控画框"
        },
        "desc": "页面中的固定可见文案、单位和图片槽提示",
        "publicKey": "copy",
        "publicLabel": "可见文案",
        "description": "页面中的固定可见文案、单位和图片槽提示"
      },
      {
        "key": "framesData",
        "label": "framesData",
        "type": "list",
        "default": [
          {
            "color": "#27E021",
            "initial": "A",
            "code": "ROLL-01 / 12A",
            "cap": "签约现场 · 头部轮次"
          },
          {
            "color": "#15A7F0",
            "initial": "B",
            "code": "ROLL-01 / 18B",
            "cap": "算力机房 · GPU 卡墙"
          },
          {
            "color": "#FFC700",
            "initial": "C",
            "code": "ROLL-01 / 23C",
            "cap": "发布日 · 产品 demo"
          },
          {
            "color": "#FF9FE2",
            "initial": "D",
            "code": "ROLL-01 / 31D",
            "cap": "团队合影 · 创始团队"
          }
        ],
        "desc": "默认数据内容",
        "publicKey": "framesData",
        "publicLabel": "framesData",
        "description": "默认数据内容"
      },
      {
        "key": "hlStyle",
        "label": "高亮样式",
        "type": "radio",
        "default": "glass",
        "options": [
          [
            "glass",
            "玻璃糖果"
          ],
          [
            "pill",
            "扁平药丸"
          ],
          [
            "underline",
            "下划线"
          ],
          [
            "text",
            "纯文字"
          ]
        ],
        "desc": "关键词高亮：玻璃糖果 / 扁平药丸 / 下划线 / 纯文字",
        "publicKey": "hlStyle",
        "publicLabel": "高亮样式",
        "description": "关键词高亮：玻璃糖果 / 扁平药丸 / 下划线 / 纯文字"
      },
      {
        "key": "hlTilt",
        "label": "高亮倾斜",
        "type": "slider",
        "default": 2,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "关键词胶囊旋转角度（仅糖果/药丸样式生效）",
        "publicKey": "hlTilt",
        "publicLabel": "高亮倾斜",
        "description": "关键词胶囊旋转角度（仅糖果/药丸样式生效）"
      },
      {
        "key": "mediaCount",
        "label": "图片格数",
        "type": "slider",
        "default": 3,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "显示图片槽的格数(其余转未曝光占位)",
        "publicKey": "mediaCount",
        "publicLabel": "图片格数",
        "description": "显示图片槽的格数(其余转未曝光占位)"
      },
      {
        "key": "frameRatio",
        "label": "画框构图",
        "type": "radio",
        "default": "landscape",
        "options": [
          [
            "landscape",
            "横构图"
          ],
          [
            "portrait",
            "竖构图"
          ]
        ],
        "desc": "画框横 / 竖比例",
        "publicKey": "frameRatio",
        "publicLabel": "画框构图",
        "description": "画框横 / 竖比例"
      },
      {
        "key": "focusEnabled",
        "label": "重点突出",
        "type": "toggle",
        "default": false,
        "desc": "是否高亮某一格",
        "publicKey": "focusEnabled",
        "publicLabel": "重点突出",
        "description": "是否高亮某一格"
      },
      {
        "key": "focusIndex",
        "label": "重点格序号",
        "type": "slider",
        "default": 1,
        "min": 1,
        "max": 4,
        "step": 1,
        "desc": "被高亮格的序号",
        "publicKey": "focusIndex",
        "publicLabel": "重点格序号",
        "description": "被高亮格的序号"
      },
      {
        "key": "showCaptions",
        "label": "逐格说明",
        "type": "toggle",
        "default": true,
        "desc": "每格编号 / 说明",
        "publicKey": "showCaptions",
        "publicLabel": "逐格说明",
        "description": "每格编号 / 说明"
      },
      {
        "key": "showSprockets",
        "label": "胶片齿孔",
        "type": "toggle",
        "default": true,
        "desc": "上下齿孔显隐",
        "publicKey": "showSprockets",
        "publicLabel": "胶片齿孔",
        "description": "上下齿孔显隐"
      },
      {
        "key": "showDecorations",
        "label": "装饰元素",
        "type": "toggle",
        "default": true,
        "desc": "星芒 / 圆环等点缀",
        "publicKey": "showDecorations",
        "publicLabel": "装饰元素",
        "description": "星芒 / 圆环等点缀"
      }
    ],
    "defaultProps": {
      "copy": {
        "text001": "资本现场 · CONTACT SHEET",
        "text002": "一卷胶片，",
        "text003": "记录 2024 的资本现场",
        "text004": "把镜头对准签约桌、机房与发布日 —— 拖入你的现场照片，自动排进受控画框"
      },
      "framesData": [
        {
          "color": "#27E021",
          "initial": "A",
          "code": "ROLL-01 / 12A",
          "cap": "签约现场 · 头部轮次"
        },
        {
          "color": "#15A7F0",
          "initial": "B",
          "code": "ROLL-01 / 18B",
          "cap": "算力机房 · GPU 卡墙"
        },
        {
          "color": "#FFC700",
          "initial": "C",
          "code": "ROLL-01 / 23C",
          "cap": "发布日 · 产品 demo"
        },
        {
          "color": "#FF9FE2",
          "initial": "D",
          "code": "ROLL-01 / 31D",
          "cap": "团队合影 · 创始团队"
        }
      ],
      "hlStyle": "glass",
      "hlTilt": 2,
      "mediaCount": 3,
      "frameRatio": "landscape",
      "focusEnabled": false,
      "focusIndex": 1,
      "showCaptions": true,
      "showSprockets": true,
      "showDecorations": true
    }
  },
  {
    "key": "theme04_page043",
    "themeKey": "theme04",
    "pageNumber": 43,
    "layout": "THEME04-043",
    "slot": "quadrant",
    "label": "选题四象限",
    "bgClass": "",
    "controls": [
      {
        "key": "hlStyle",
        "label": "高亮样式",
        "type": "radio",
        "default": "glass",
        "options": [
          [
            "glass",
            "玻璃糖果"
          ],
          [
            "pill",
            "扁平药丸"
          ],
          [
            "underline",
            "下划线"
          ],
          [
            "text",
            "纯文字"
          ]
        ],
        "desc": "关键词高亮：玻璃糖果 / 扁平药丸 / 下划线 / 纯文字",
        "publicKey": "hlStyle",
        "publicLabel": "高亮样式",
        "description": "关键词高亮：玻璃糖果 / 扁平药丸 / 下划线 / 纯文字"
      },
      {
        "key": "hlTilt",
        "label": "高亮倾斜",
        "type": "slider",
        "default": 2,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "关键词胶囊旋转角度（仅糖果/药丸样式生效）",
        "publicKey": "hlTilt",
        "publicLabel": "高亮倾斜",
        "description": "关键词胶囊旋转角度（仅糖果/药丸样式生效）"
      },
      {
        "key": "focusEnabled",
        "label": "重点突出",
        "type": "toggle",
        "default": false,
        "desc": "是否高亮某一象限",
        "publicKey": "focusEnabled",
        "publicLabel": "重点突出",
        "description": "是否高亮某一象限"
      },
      {
        "key": "focusIndex",
        "label": "重点象限",
        "type": "slider",
        "default": 1,
        "min": 1,
        "max": 4,
        "step": 1,
        "desc": "被高亮象限序号(1左上→4右下)",
        "publicKey": "focusIndex",
        "publicLabel": "重点象限",
        "description": "被高亮象限序号(1左上→4右下)"
      },
      {
        "key": "chipCount",
        "label": "标签数量",
        "type": "slider",
        "default": 3,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "每个象限展示的示例标签数量",
        "publicKey": "chipCount",
        "publicLabel": "标签数量",
        "description": "每个象限展示的示例标签数量"
      },
      {
        "key": "showAxisLabels",
        "label": "坐标轴标注",
        "type": "toggle",
        "default": true,
        "desc": "横纵坐标轴文字",
        "publicKey": "showAxisLabels",
        "publicLabel": "坐标轴标注",
        "description": "横纵坐标轴文字"
      },
      {
        "key": "showChips",
        "label": "示例标签",
        "type": "toggle",
        "default": true,
        "desc": "象限内示例对象标签",
        "publicKey": "showChips",
        "publicLabel": "示例标签",
        "description": "象限内示例对象标签"
      },
      {
        "key": "showDecorations",
        "label": "装饰元素",
        "type": "toggle",
        "default": true,
        "desc": "星芒等点缀",
        "publicKey": "showDecorations",
        "publicLabel": "装饰元素",
        "description": "星芒等点缀"
      },
      {
        "key": "cells",
        "label": "象限",
        "type": "list",
        "default": [
          {
            "name": "明星兑现区",
            "color": "#27E021",
            "desc": "融资热度与收入确定性兼具，\"卖铲子\"逻辑成立。",
            "chips": [
              "CoreWeave",
              "Databricks",
              "Scale AI"
            ]
          },
          {
            "name": "叙事泡沫区",
            "color": "#FFC700",
            "desc": "巨额融资在手，商业兑现仍受成本与监管约束。",
            "chips": [
              "OpenAI",
              "Anthropic",
              "xAI",
              "SSI"
            ]
          },
          {
            "name": "隐形价值区",
            "color": "#15A7F0",
            "desc": "单笔不一定最大，但落地路径与留存更清晰。",
            "chips": [
              "Glean",
              "Perplexity"
            ]
          },
          {
            "name": "等待验证区",
            "color": "#FF9FE2",
            "desc": "概念成立、规模未证，作为风险与边缘变量观察。",
            "chips": [
              "长尾工具链",
              "AI 安全",
              "早期硬件"
            ]
          }
        ],
        "desc": "四象限：名称 / 描述 / 示例标签 / 颜色",
        "publicKey": "cells",
        "publicLabel": "象限",
        "description": "四象限：名称 / 描述 / 示例标签 / 颜色"
      }
    ],
    "defaultProps": {
      "hlStyle": "glass",
      "hlTilt": 2,
      "focusEnabled": false,
      "focusIndex": 1,
      "chipCount": 3,
      "showAxisLabels": true,
      "showChips": true,
      "showDecorations": true,
      "kicker": "选题四象限 · 资本热度 × 商业兑现",
      "titleLead": "从「谁融得多」升级为",
      "titleKeyword": "「谁能兑现」",
      "axisColHigh": "商业兑现度 · 高",
      "axisColLow": "商业兑现度 · 低 / 待验证",
      "axisRowHigh": "资本热度 · 高",
      "axisRowLow": "资本热度 · 低 / 中",
      "cells": [
        {
          "name": "明星兑现区",
          "color": "#27E021",
          "desc": "融资热度与收入确定性兼具，\"卖铲子\"逻辑成立。",
          "chips": [
            "CoreWeave",
            "Databricks",
            "Scale AI"
          ]
        },
        {
          "name": "叙事泡沫区",
          "color": "#FFC700",
          "desc": "巨额融资在手，商业兑现仍受成本与监管约束。",
          "chips": [
            "OpenAI",
            "Anthropic",
            "xAI",
            "SSI"
          ]
        },
        {
          "name": "隐形价值区",
          "color": "#15A7F0",
          "desc": "单笔不一定最大，但落地路径与留存更清晰。",
          "chips": [
            "Glean",
            "Perplexity"
          ]
        },
        {
          "name": "等待验证区",
          "color": "#FF9FE2",
          "desc": "概念成立、规模未证，作为风险与边缘变量观察。",
          "chips": [
            "长尾工具链",
            "AI 安全",
            "早期硬件"
          ]
        }
      ]
    }
  },
  {
    "key": "theme04_page044",
    "themeKey": "theme04",
    "pageNumber": 44,
    "layout": "THEME04-044",
    "slot": "cover",
    "label": "杂志封面",
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
        "key": "copy",
        "label": "可见文案",
        "type": "list",
        "default": {
          "placeholder001": "封面大图 · 资本现场 / 人物 / 城市",
          "text001": "AI CAPITAL",
          "text002": "资本观察 · 特别报告",
          "text003": "NO.",
          "text004": "04",
          "text005": "2024 年刊",
          "text006": "封面故事 · COVER STORY",
          "text007": "钱，都",
          "text008": "去哪了",
          "text009": "2024 美国大额融资 AI 公司 · 全景调研"
        },
        "desc": "页面中的固定可见文案、单位和图片槽提示",
        "publicKey": "copy",
        "publicLabel": "可见文案",
        "description": "页面中的固定可见文案、单位和图片槽提示"
      },
      {
        "key": "linesData",
        "label": "linesData",
        "type": "list",
        "default": [
          {
            "tag": "01",
            "head": "970 亿美元",
            "sub": "全年总额创历史新高",
            "color": "#27E021"
          },
          {
            "tag": "02",
            "head": "97 笔大额轮",
            "sub": "单笔 ≥1 亿 · 头部高度集中",
            "color": "#15A7F0"
          },
          {
            "tag": "03",
            "head": "六大赛道争霸",
            "sub": "算力 · 大模型 · 应用 · 谁吸金",
            "color": "#FFC700"
          },
          {
            "tag": "04",
            "head": "估值一年翻数倍",
            "sub": "独角兽流水线 · 资本不眠",
            "color": "#FF9FE2"
          }
        ],
        "desc": "默认数据内容",
        "publicKey": "linesData",
        "publicLabel": "linesData",
        "description": "默认数据内容"
      },
      {
        "key": "hlStyle",
        "label": "高亮样式",
        "type": "radio",
        "default": "glass",
        "options": [
          [
            "glass",
            "玻璃糖果"
          ],
          [
            "pill",
            "扁平药丸"
          ],
          [
            "underline",
            "下划线"
          ],
          [
            "text",
            "纯文字"
          ]
        ],
        "desc": "关键词高亮：玻璃糖果 / 扁平药丸 / 下划线 / 纯文字",
        "publicKey": "hlStyle",
        "publicLabel": "高亮样式",
        "description": "关键词高亮：玻璃糖果 / 扁平药丸 / 下划线 / 纯文字"
      },
      {
        "key": "hlTilt",
        "label": "高亮倾斜",
        "type": "slider",
        "default": 2,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "关键词胶囊旋转角度（仅糖果/药丸样式生效）",
        "publicKey": "hlTilt",
        "publicLabel": "高亮倾斜",
        "description": "关键词胶囊旋转角度（仅糖果/药丸样式生效）"
      },
      {
        "key": "mediaCount",
        "label": "背景图片槽",
        "type": "slider",
        "default": 1,
        "min": 0,
        "max": 1,
        "step": 1,
        "dependsOn": "backgroundMode",
        "dependsOnValue": "media",
        "desc": "整屏 cover 背景图片槽(0=霓虹渐变底)",
        "publicKey": "mediaCount",
        "publicLabel": "背景图片槽",
        "description": "整屏 cover 背景图片槽(0=霓虹渐变底)"
      },
      {
        "key": "accentTone",
        "label": "主色调",
        "type": "radio",
        "default": "green",
        "options": [
          [
            "green",
            "绿"
          ],
          [
            "yellow",
            "黄"
          ],
          [
            "blue",
            "蓝"
          ],
          [
            "pink",
            "粉"
          ]
        ],
        "desc": "页面主色调(通用命名)",
        "publicKey": "accentTone",
        "publicLabel": "主色调",
        "description": "页面主色调(通用命名)"
      },
      {
        "key": "lineCount",
        "label": "角标导读条数",
        "type": "slider",
        "default": 4,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "右侧角标导读条数",
        "publicKey": "lineCount",
        "publicLabel": "角标导读条数",
        "description": "右侧角标导读条数"
      },
      {
        "key": "showMasthead",
        "label": "顶部刊头",
        "type": "toggle",
        "default": true,
        "desc": "顶部刊头",
        "publicKey": "showMasthead",
        "publicLabel": "顶部刊头",
        "description": "顶部刊头"
      },
      {
        "key": "showIssue",
        "label": "期号徽标",
        "type": "toggle",
        "default": true,
        "desc": "期号徽标",
        "publicKey": "showIssue",
        "publicLabel": "期号徽标",
        "description": "期号徽标"
      },
      {
        "key": "showScrim",
        "label": "暗角遮罩",
        "type": "toggle",
        "default": true,
        "desc": "保证文字可读的暗角遮罩",
        "publicKey": "showScrim",
        "publicLabel": "暗角遮罩",
        "description": "保证文字可读的暗角遮罩"
      },
      {
        "key": "showDecorations",
        "label": "装饰元素",
        "type": "toggle",
        "default": true,
        "desc": "星芒等点缀",
        "publicKey": "showDecorations",
        "publicLabel": "装饰元素",
        "description": "星芒等点缀"
      }
    ],
    "defaultProps": {
      "copy": {
        "placeholder001": "封面大图 · 资本现场 / 人物 / 城市",
        "text001": "AI CAPITAL",
        "text002": "资本观察 · 特别报告",
        "text003": "NO.",
        "text004": "04",
        "text005": "2024 年刊",
        "text006": "封面故事 · COVER STORY",
        "text007": "钱，都",
        "text008": "去哪了",
        "text009": "2024 美国大额融资 AI 公司 · 全景调研"
      },
      "linesData": [
        {
          "tag": "01",
          "head": "970 亿美元",
          "sub": "全年总额创历史新高",
          "color": "#27E021"
        },
        {
          "tag": "02",
          "head": "97 笔大额轮",
          "sub": "单笔 ≥1 亿 · 头部高度集中",
          "color": "#15A7F0"
        },
        {
          "tag": "03",
          "head": "六大赛道争霸",
          "sub": "算力 · 大模型 · 应用 · 谁吸金",
          "color": "#FFC700"
        },
        {
          "tag": "04",
          "head": "估值一年翻数倍",
          "sub": "独角兽流水线 · 资本不眠",
          "color": "#FF9FE2"
        }
      ],
      "hlStyle": "glass",
      "hlTilt": 2,
      "mediaCount": 1,
      "backgroundMode": "unicorn",
      "unicornScene": "tech",
      "accentTone": "green",
      "lineCount": 4,
      "showMasthead": true,
      "showIssue": true,
      "showScrim": true,
      "showDecorations": true
    }
  },
  {
    "key": "theme04_page045",
    "themeKey": "theme04",
    "pageNumber": 45,
    "layout": "THEME04-045",
    "slot": "coversection",
    "label": "图背章节页",
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
        "key": "copy",
        "label": "可见文案",
        "type": "list",
        "default": {
          "placeholder001": "整屏背景 · 机房 / 团队 / 资本现场",
          "text001": "CONTENTS"
        },
        "desc": "页面中的固定可见文案、单位和图片槽提示",
        "publicKey": "copy",
        "publicLabel": "可见文案",
        "description": "页面中的固定可见文案、单位和图片槽提示"
      },
      {
        "key": "progressData",
        "label": "progressData",
        "type": "list",
        "default": [
          "研究方法",
          "市场全景",
          "横向透视",
          "资本现场",
          "风险研判",
          "投资展望"
        ],
        "desc": "默认数据内容",
        "publicKey": "progressData",
        "publicLabel": "progressData",
        "description": "默认数据内容"
      },
      {
        "key": "chapterData",
        "label": "chapterData",
        "type": "list",
        "default": {
          "zh": "资本现场",
          "en": "INSIDE THE CAPITAL",
          "lead": "镜头拉近到一线——机房、团队、发布会与签约桌，看资本如何在真实场景里落地。"
        },
        "desc": "默认数据内容",
        "publicKey": "chapterData",
        "publicLabel": "chapterData",
        "description": "默认数据内容"
      },
      {
        "key": "mediaCount",
        "label": "整屏背景图",
        "type": "slider",
        "default": 1,
        "min": 0,
        "max": 1,
        "step": 1,
        "dependsOn": "backgroundMode",
        "dependsOnValue": "media",
        "desc": "整屏背景图片槽(0=霓虹渐变底)",
        "publicKey": "mediaCount",
        "publicLabel": "整屏背景图",
        "description": "整屏背景图片槽(0=霓虹渐变底)"
      },
      {
        "key": "partNumber",
        "label": "章节编号",
        "type": "slider",
        "default": 4,
        "min": 1,
        "max": 6,
        "step": 1,
        "desc": "大号 Part 编号徽章",
        "publicKey": "partNumber",
        "publicLabel": "章节编号",
        "description": "大号 Part 编号徽章"
      },
      {
        "key": "accentTone",
        "label": "主色调",
        "type": "radio",
        "default": "pink",
        "options": [
          [
            "green",
            "绿"
          ],
          [
            "yellow",
            "黄"
          ],
          [
            "blue",
            "蓝"
          ],
          [
            "pink",
            "粉"
          ]
        ],
        "desc": "页面主色调",
        "publicKey": "accentTone",
        "publicLabel": "主色调",
        "description": "页面主色调"
      },
      {
        "key": "textAlign",
        "label": "文案对齐",
        "type": "radio",
        "default": "left",
        "options": [
          [
            "left",
            "左下"
          ],
          [
            "center",
            "居中"
          ]
        ],
        "desc": "文案靠左下 / 居中",
        "publicKey": "textAlign",
        "publicLabel": "文案对齐",
        "description": "文案靠左下 / 居中"
      },
      {
        "key": "showProgress",
        "label": "章节进度",
        "type": "toggle",
        "default": true,
        "desc": "右下角章节进度条",
        "publicKey": "showProgress",
        "publicLabel": "章节进度",
        "description": "右下角章节进度条"
      },
      {
        "key": "progressCount",
        "label": "进度段数",
        "type": "slider",
        "default": 5,
        "min": 3,
        "max": 6,
        "step": 1,
        "desc": "进度条段数",
        "publicKey": "progressCount",
        "publicLabel": "进度段数",
        "description": "进度条段数"
      },
      {
        "key": "showScrim",
        "label": "暗角遮罩",
        "type": "toggle",
        "default": true,
        "desc": "保证文字可读的暗角遮罩",
        "publicKey": "showScrim",
        "publicLabel": "暗角遮罩",
        "description": "保证文字可读的暗角遮罩"
      },
      {
        "key": "showDecorations",
        "label": "装饰元素",
        "type": "toggle",
        "default": true,
        "desc": "星芒等点缀",
        "publicKey": "showDecorations",
        "publicLabel": "装饰元素",
        "description": "星芒等点缀"
      }
    ],
    "defaultProps": {
      "copy": {
        "placeholder001": "整屏背景 · 机房 / 团队 / 资本现场",
        "text001": "CONTENTS"
      },
      "progressData": [
        "研究方法",
        "市场全景",
        "横向透视",
        "资本现场",
        "风险研判",
        "投资展望"
      ],
      "chapterData": {
        "zh": "资本现场",
        "en": "INSIDE THE CAPITAL",
        "lead": "镜头拉近到一线——机房、团队、发布会与签约桌，看资本如何在真实场景里落地。"
      },
      "mediaCount": 1,
      "backgroundMode": "unicorn",
      "unicornScene": "automations",
      "partNumber": 4,
      "accentTone": "pink",
      "textAlign": "left",
      "showProgress": true,
      "progressCount": 5,
      "showScrim": true,
      "showDecorations": true
    }
  },
  {
    "key": "theme04_page046",
    "themeKey": "theme04",
    "pageNumber": 46,
    "layout": "THEME04-046",
    "slot": "trio",
    "label": "三强争霸",
    "bgClass": "",
    "controls": [
      {
        "key": "copy",
        "label": "可见文案",
        "type": "list",
        "default": {
          "text001": "头部玩家 · FOUNDATION MODEL",
          "text002": "三强争霸，",
          "text003": "瓜分半数资金",
          "text004": "OpenAI、Anthropic、xAI 包揽 Top3 单笔融资，通用大模型成为资本最拥挤的赛道。",
          "text005": "亿",
          "text006": "2024 单笔最大融资 / 美元"
        },
        "desc": "页面中的固定可见文案、单位和图片槽提示",
        "publicKey": "copy",
        "publicLabel": "可见文案",
        "description": "页面中的固定可见文案、单位和图片槽提示"
      },
      {
        "key": "itemsData",
        "label": "itemsData",
        "type": "list",
        "default": [
          {
            "rank": "01",
            "name": "OpenAI",
            "initial": "O",
            "founder": "Sam Altman",
            "sector": "通用大模型",
            "amt": "66",
            "color": "#15A7F0",
            "ph": "OpenAI · 团队 / Logo"
          },
          {
            "rank": "02",
            "name": "Anthropic",
            "initial": "A",
            "founder": "Dario Amodei",
            "sector": "通用大模型",
            "amt": "65",
            "color": "#27E021",
            "ph": "Anthropic · 团队 / Logo"
          },
          {
            "rank": "03",
            "name": "xAI",
            "initial": "x",
            "founder": "Elon Musk",
            "sector": "通用大模型",
            "amt": "50",
            "color": "#FFC700",
            "ph": "xAI · 团队 / Logo"
          }
        ],
        "desc": "默认数据内容",
        "publicKey": "itemsData",
        "publicLabel": "itemsData",
        "description": "默认数据内容"
      },
      {
        "key": "hlStyle",
        "label": "高亮样式",
        "type": "radio",
        "default": "glass",
        "options": [
          [
            "glass",
            "玻璃糖果"
          ],
          [
            "pill",
            "扁平药丸"
          ],
          [
            "underline",
            "下划线"
          ],
          [
            "text",
            "纯文字"
          ]
        ],
        "desc": "关键词高亮：玻璃糖果 / 扁平药丸 / 下划线 / 纯文字",
        "publicKey": "hlStyle",
        "publicLabel": "高亮样式",
        "description": "关键词高亮：玻璃糖果 / 扁平药丸 / 下划线 / 纯文字"
      },
      {
        "key": "hlTilt",
        "label": "高亮倾斜",
        "type": "slider",
        "default": 2,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "关键词胶囊旋转角度（仅糖果/药丸样式生效）",
        "publicKey": "hlTilt",
        "publicLabel": "高亮倾斜",
        "description": "关键词胶囊旋转角度（仅糖果/药丸样式生效）"
      },
      {
        "key": "itemCount",
        "label": "公司卡数量",
        "type": "slider",
        "default": 3,
        "min": 2,
        "max": 3,
        "step": 1,
        "desc": "展示的公司卡片数量",
        "publicKey": "itemCount",
        "publicLabel": "公司卡数量",
        "description": "展示的公司卡片数量"
      },
      {
        "key": "mediaCount",
        "label": "图片槽数量",
        "type": "slider",
        "default": 3,
        "min": 0,
        "max": 3,
        "step": 1,
        "maxFromKey": "itemCount",
        "desc": "从左起带图片槽的卡片数(其余转无图态)",
        "publicKey": "mediaCount",
        "publicLabel": "图片槽数量",
        "description": "从左起带图片槽的卡片数(其余转无图态)"
      },
      {
        "key": "focusEnabled",
        "label": "重点突出",
        "type": "toggle",
        "default": true,
        "desc": "是否高亮某一张卡片",
        "publicKey": "focusEnabled",
        "publicLabel": "重点突出",
        "description": "是否高亮某一张卡片"
      },
      {
        "key": "focusIndex",
        "label": "重点序号",
        "type": "slider",
        "default": 1,
        "min": 1,
        "max": 3,
        "step": 1,
        "maxFromKey": "itemCount",
        "desc": "被高亮卡片的序号",
        "publicKey": "focusIndex",
        "publicLabel": "重点序号",
        "description": "被高亮卡片的序号"
      },
      {
        "key": "showMeta",
        "label": "角色 / 分类",
        "type": "toggle",
        "default": true,
        "desc": "角色 + 分类标签行",
        "publicKey": "showMeta",
        "publicLabel": "角色 / 分类",
        "description": "角色 + 分类标签行"
      },
      {
        "key": "showRank",
        "label": "名次徽章",
        "type": "toggle",
        "default": true,
        "desc": "左上角名次徽章",
        "publicKey": "showRank",
        "publicLabel": "名次徽章",
        "description": "左上角名次徽章"
      },
      {
        "key": "showDecorations",
        "label": "装饰元素",
        "type": "toggle",
        "default": true,
        "desc": "星芒 / 圆环等点缀",
        "publicKey": "showDecorations",
        "publicLabel": "装饰元素",
        "description": "星芒 / 圆环等点缀"
      }
    ],
    "defaultProps": {
      "copy": {
        "text001": "头部玩家 · FOUNDATION MODEL",
        "text002": "三强争霸，",
        "text003": "瓜分半数资金",
        "text004": "OpenAI、Anthropic、xAI 包揽 Top3 单笔融资，通用大模型成为资本最拥挤的赛道。",
        "text005": "亿",
        "text006": "2024 单笔最大融资 / 美元"
      },
      "itemsData": [
        {
          "rank": "01",
          "name": "OpenAI",
          "initial": "O",
          "founder": "Sam Altman",
          "sector": "通用大模型",
          "amt": "66",
          "color": "#15A7F0",
          "ph": "OpenAI · 团队 / Logo"
        },
        {
          "rank": "02",
          "name": "Anthropic",
          "initial": "A",
          "founder": "Dario Amodei",
          "sector": "通用大模型",
          "amt": "65",
          "color": "#27E021",
          "ph": "Anthropic · 团队 / Logo"
        },
        {
          "rank": "03",
          "name": "xAI",
          "initial": "x",
          "founder": "Elon Musk",
          "sector": "通用大模型",
          "amt": "50",
          "color": "#FFC700",
          "ph": "xAI · 团队 / Logo"
        }
      ],
      "hlStyle": "glass",
      "hlTilt": 2,
      "itemCount": 3,
      "mediaCount": 3,
      "focusEnabled": true,
      "focusIndex": 1,
      "showMeta": true,
      "showRank": true,
      "showDecorations": true
    }
  },
  {
    "key": "theme04_page047",
    "themeKey": "theme04",
    "pageNumber": 47,
    "layout": "THEME04-047",
    "slot": "editorial",
    "label": "杂志式跨页",
    "bgClass": "",
    "controls": [
      {
        "key": "copy",
        "label": "可见文案",
        "type": "list",
        "default": {
          "text001": "案例 · CASE FILE 03",
          "text002": "AI 基础设施",
          "text003": "CoreWeave",
          "text004": "踩中算力风口的基建黑马",
          "text005": "所有人都在抢 GPU，把卡变成「云」的人先吃到红利。CoreWeave 从加密矿场转型为 AI 算力云，靠规模化 GPU 集群与长约绑定，成为大模型公司绕不开的算力供应商。",
          "text006": "它的估值半年内翻数倍——不是因为模型多强，而是因为站在了所有模型的「下游」。 基础设施的确定性，让资本愿意为它的现金流与扩张速度付高溢价。",
          "text007": "“",
          "text008": "卖铲子的人，往往比挖金子的人更早赚到钱。",
          "placeholder001": "算力机房 / GPU 卡墙 / 团队实拍",
          "text009": "P. 03"
        },
        "desc": "页面中的固定可见文案、单位和图片槽提示",
        "publicKey": "copy",
        "publicLabel": "可见文案",
        "description": "页面中的固定可见文案、单位和图片槽提示"
      },
      {
        "key": "statsData",
        "label": "statsData",
        "type": "list",
        "default": [
          {
            "value": "190",
            "unit": "亿",
            "label": "最新估值 / 美元"
          },
          {
            "value": "11",
            "unit": "亿",
            "label": "2024 单笔融资 / 美元"
          },
          {
            "value": "2017",
            "unit": "",
            "label": "公司成立年份"
          }
        ],
        "desc": "默认数据内容",
        "publicKey": "statsData",
        "publicLabel": "statsData",
        "description": "默认数据内容"
      },
      {
        "key": "hlStyle",
        "label": "高亮样式",
        "type": "radio",
        "default": "glass",
        "options": [
          [
            "glass",
            "玻璃糖果"
          ],
          [
            "pill",
            "扁平药丸"
          ],
          [
            "underline",
            "下划线"
          ],
          [
            "text",
            "纯文字"
          ]
        ],
        "desc": "关键词高亮：玻璃糖果 / 扁平药丸 / 下划线 / 纯文字",
        "publicKey": "hlStyle",
        "publicLabel": "高亮样式",
        "description": "关键词高亮：玻璃糖果 / 扁平药丸 / 下划线 / 纯文字"
      },
      {
        "key": "hlTilt",
        "label": "高亮倾斜",
        "type": "slider",
        "default": 2,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "关键词胶囊旋转角度（仅糖果/药丸样式生效）",
        "publicKey": "hlTilt",
        "publicLabel": "高亮倾斜",
        "description": "关键词胶囊旋转角度（仅糖果/药丸样式生效）"
      },
      {
        "key": "mediaCount",
        "label": "图片槽数量",
        "type": "slider",
        "default": 1,
        "min": 0,
        "max": 1,
        "step": 1,
        "desc": "自适应单张大图(0=满栏文字跨页)",
        "publicKey": "mediaCount",
        "publicLabel": "图片槽数量",
        "description": "自适应单张大图(0=满栏文字跨页)"
      },
      {
        "key": "imageSide",
        "label": "配图位置",
        "type": "radio",
        "default": "right",
        "options": [
          [
            "left",
            "左侧"
          ],
          [
            "right",
            "右侧"
          ]
        ],
        "desc": "配图在左 / 右(有图时生效)",
        "publicKey": "imageSide",
        "publicLabel": "配图位置",
        "description": "配图在左 / 右(有图时生效)"
      },
      {
        "key": "accentTone",
        "label": "主色调",
        "type": "radio",
        "default": "blue",
        "options": [
          [
            "green",
            "绿"
          ],
          [
            "yellow",
            "黄"
          ],
          [
            "blue",
            "蓝"
          ],
          [
            "pink",
            "粉"
          ]
        ],
        "desc": "页面主色调(通用命名)",
        "publicKey": "accentTone",
        "publicLabel": "主色调",
        "description": "页面主色调(通用命名)"
      },
      {
        "key": "statCount",
        "label": "数据栏条目",
        "type": "slider",
        "default": 3,
        "min": 0,
        "max": 3,
        "step": 1,
        "desc": "底部数据栏条目数",
        "publicKey": "itemCount",
        "publicLabel": "数据栏条目",
        "description": "底部数据栏条目数"
      },
      {
        "key": "showPullQuote",
        "label": "抽言",
        "type": "toggle",
        "default": true,
        "desc": "抽言(pull quote)显隐",
        "publicKey": "showPullQuote",
        "publicLabel": "抽言",
        "description": "抽言(pull quote)显隐"
      },
      {
        "key": "showLede",
        "label": "首段导语",
        "type": "toggle",
        "default": true,
        "desc": "首段导语强调(加粗 + 色条)",
        "publicKey": "showLede",
        "publicLabel": "首段导语",
        "description": "首段导语强调(加粗 + 色条)"
      },
      {
        "key": "showDecorations",
        "label": "装饰元素",
        "type": "toggle",
        "default": true,
        "desc": "星芒 / 圆环等点缀",
        "publicKey": "showDecorations",
        "publicLabel": "装饰元素",
        "description": "星芒 / 圆环等点缀"
      }
    ],
    "defaultProps": {
      "copy": {
        "text001": "案例 · CASE FILE 03",
        "text002": "AI 基础设施",
        "text003": "CoreWeave",
        "text004": "踩中算力风口的基建黑马",
        "text005": "所有人都在抢 GPU，把卡变成「云」的人先吃到红利。CoreWeave 从加密矿场转型为 AI 算力云，靠规模化 GPU 集群与长约绑定，成为大模型公司绕不开的算力供应商。",
        "text006": "它的估值半年内翻数倍——不是因为模型多强，而是因为站在了所有模型的「下游」。 基础设施的确定性，让资本愿意为它的现金流与扩张速度付高溢价。",
        "text007": "“",
        "text008": "卖铲子的人，往往比挖金子的人更早赚到钱。",
        "placeholder001": "算力机房 / GPU 卡墙 / 团队实拍",
        "text009": "P. 03"
      },
      "statsData": [
        {
          "value": "190",
          "unit": "亿",
          "label": "最新估值 / 美元"
        },
        {
          "value": "11",
          "unit": "亿",
          "label": "2024 单笔融资 / 美元"
        },
        {
          "value": "2017",
          "unit": "",
          "label": "公司成立年份"
        }
      ],
      "hlStyle": "glass",
      "hlTilt": 2,
      "mediaCount": 1,
      "imageSide": "right",
      "accentTone": "blue",
      "statCount": 3,
      "showPullQuote": true,
      "showLede": true,
      "showDecorations": true
    }
  },
  {
    "key": "theme04_page048",
    "themeKey": "theme04",
    "pageNumber": 48,
    "layout": "THEME04-048",
    "slot": "triptych",
    "label": "全幅三联",
    "bgClass": "",
    "controls": [
      {
        "key": "copy",
        "label": "可见文案",
        "type": "list",
        "default": {
          "text001": "资本现场 · ON THE GROUND",
          "text002": "钱涌向哪里，",
          "text003": "故事就发生在哪里"
        },
        "desc": "页面中的固定可见文案、单位和图片槽提示",
        "publicKey": "copy",
        "publicLabel": "可见文案",
        "description": "页面中的固定可见文案、单位和图片槽提示"
      },
      {
        "key": "panelsData",
        "label": "panelsData",
        "type": "list",
        "default": [
          {
            "no": "01",
            "zh": "算力机房",
            "en": "COMPUTE",
            "note": "260 亿美元流向基础设施",
            "color": "#27E021",
            "glyph": "C"
          },
          {
            "no": "02",
            "zh": "路演签约",
            "en": "DEALS",
            "note": "97 笔单笔过亿的大额融资",
            "color": "#FFC700",
            "glyph": "D"
          },
          {
            "no": "03",
            "zh": "人才争夺",
            "en": "TALENT",
            "note": "顶尖团队成为最稀缺资产",
            "color": "#15A7F0",
            "glyph": "T"
          }
        ],
        "desc": "默认数据内容",
        "publicKey": "panelsData",
        "publicLabel": "panelsData",
        "description": "默认数据内容"
      },
      {
        "key": "mediaCount",
        "label": "图片槽条数",
        "type": "slider",
        "default": 3,
        "min": 0,
        "max": 3,
        "step": 1,
        "desc": "显示图片槽的条数(其余转霓虹占位)",
        "publicKey": "mediaCount",
        "publicLabel": "图片槽条数",
        "description": "显示图片槽的条数(其余转霓虹占位)"
      },
      {
        "key": "focusEnabled",
        "label": "重点突出",
        "type": "toggle",
        "default": false,
        "desc": "是否高亮某一条",
        "publicKey": "focusEnabled",
        "publicLabel": "重点突出",
        "description": "是否高亮某一条"
      },
      {
        "key": "focusIndex",
        "label": "重点序号",
        "type": "slider",
        "default": 2,
        "min": 1,
        "max": 3,
        "step": 1,
        "desc": "被高亮条的序号",
        "publicKey": "focusIndex",
        "publicLabel": "重点序号",
        "description": "被高亮条的序号"
      },
      {
        "key": "showCaptions",
        "label": "现场注解",
        "type": "toggle",
        "default": true,
        "desc": "每条底部现场注解",
        "publicKey": "showCaptions",
        "publicLabel": "现场注解",
        "description": "每条底部现场注解"
      },
      {
        "key": "showHeader",
        "label": "顶部标题",
        "type": "toggle",
        "default": true,
        "desc": "顶部总标题浮层",
        "publicKey": "showHeader",
        "publicLabel": "顶部标题",
        "description": "顶部总标题浮层"
      },
      {
        "key": "showDecorations",
        "label": "装饰元素",
        "type": "toggle",
        "default": true,
        "desc": "星芒等点缀",
        "publicKey": "showDecorations",
        "publicLabel": "装饰元素",
        "description": "星芒等点缀"
      }
    ],
    "defaultProps": {
      "copy": {
        "text001": "资本现场 · ON THE GROUND",
        "text002": "钱涌向哪里，",
        "text003": "故事就发生在哪里"
      },
      "panelsData": [
        {
          "no": "01",
          "zh": "算力机房",
          "en": "COMPUTE",
          "note": "260 亿美元流向基础设施",
          "color": "#27E021",
          "glyph": "C"
        },
        {
          "no": "02",
          "zh": "路演签约",
          "en": "DEALS",
          "note": "97 笔单笔过亿的大额融资",
          "color": "#FFC700",
          "glyph": "D"
        },
        {
          "no": "03",
          "zh": "人才争夺",
          "en": "TALENT",
          "note": "顶尖团队成为最稀缺资产",
          "color": "#15A7F0",
          "glyph": "T"
        }
      ],
      "mediaCount": 3,
      "focusEnabled": false,
      "focusIndex": 2,
      "showCaptions": true,
      "showHeader": true,
      "showDecorations": true
    }
  },
  {
    "key": "theme04_page049",
    "themeKey": "theme04",
    "pageNumber": 49,
    "layout": "THEME04-049",
    "slot": "radar",
    "label": "多维雷达",
    "bgClass": "",
    "controls": [
      {
        "key": "copy",
        "label": "可见文案",
        "type": "list",
        "default": {
          "text001": "头部玩家 · CAPABILITY RADAR",
          "text002": "三强各有所长，没有",
          "text003": "全能选手",
          "text004": "同样是通用大模型，OpenAI 全面、Anthropic 押注安全治理、xAI 死磕算力——六大维度看清差异。",
          "text005": "综合分",
          "text006": "评分为调研示意（0–100）· 维度权重等权 · 数据为调研整理推演"
        },
        "desc": "页面中的固定可见文案、单位和图片槽提示",
        "publicKey": "copy",
        "publicLabel": "可见文案",
        "description": "页面中的固定可见文案、单位和图片槽提示"
      },
      {
        "key": "playersData",
        "label": "playersData",
        "type": "list",
        "default": [
          {
            "name": "OpenAI",
            "en": "GPT",
            "color": "#15A7F0",
            "vals": [
              95,
              92,
              86,
              90,
              88,
              70
            ]
          },
          {
            "name": "Anthropic",
            "en": "Claude",
            "color": "#27E021",
            "vals": [
              90,
              84,
              72,
              78,
              85,
              96
            ]
          },
          {
            "name": "xAI",
            "en": "Grok",
            "color": "#FFC700",
            "vals": [
              82,
              80,
              54,
              96,
              70,
              58
            ]
          }
        ],
        "desc": "默认数据内容",
        "publicKey": "playersData",
        "publicLabel": "playersData",
        "description": "默认数据内容"
      },
      {
        "key": "hlStyle",
        "label": "高亮样式",
        "type": "radio",
        "default": "glass",
        "options": [
          [
            "glass",
            "玻璃糖果"
          ],
          [
            "pill",
            "扁平药丸"
          ],
          [
            "underline",
            "下划线"
          ],
          [
            "text",
            "纯文字"
          ]
        ],
        "desc": "关键词高亮：玻璃糖果 / 扁平药丸 / 下划线 / 纯文字",
        "publicKey": "hlStyle",
        "publicLabel": "高亮样式",
        "description": "关键词高亮：玻璃糖果 / 扁平药丸 / 下划线 / 纯文字"
      },
      {
        "key": "hlTilt",
        "label": "高亮倾斜",
        "type": "slider",
        "default": 2,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "关键词胶囊旋转角度（仅糖果/药丸样式生效）",
        "publicKey": "hlTilt",
        "publicLabel": "高亮倾斜",
        "description": "关键词胶囊旋转角度（仅糖果/药丸样式生效）"
      },
      {
        "key": "itemCount",
        "label": "玩家数量",
        "type": "slider",
        "default": 3,
        "min": 2,
        "max": 3,
        "step": 1,
        "desc": "对比的玩家数量",
        "publicKey": "itemCount",
        "publicLabel": "玩家数量",
        "description": "对比的玩家数量"
      },
      {
        "key": "chartVariant",
        "label": "图表类型",
        "type": "radio",
        "default": "radar",
        "options": [
          [
            "radar",
            "雷达"
          ],
          [
            "bars",
            "分组柱"
          ]
        ],
        "desc": "雷达图 / 分组柱状图",
        "publicKey": "chartVariant",
        "publicLabel": "图表类型",
        "description": "雷达图 / 分组柱状图"
      },
      {
        "key": "focusEnabled",
        "label": "重点突出",
        "type": "toggle",
        "default": true,
        "desc": "是否高亮某一玩家",
        "publicKey": "focusEnabled",
        "publicLabel": "重点突出",
        "description": "是否高亮某一玩家"
      },
      {
        "key": "focusIndex",
        "label": "重点序号",
        "type": "slider",
        "default": 2,
        "min": 1,
        "max": 3,
        "step": 1,
        "maxFromKey": "itemCount",
        "desc": "被高亮玩家的序号",
        "publicKey": "focusIndex",
        "publicLabel": "重点序号",
        "description": "被高亮玩家的序号"
      },
      {
        "key": "showGrid",
        "label": "雷达网格",
        "type": "toggle",
        "default": true,
        "desc": "雷达网格 / 刻度环(雷达生效)",
        "publicKey": "showGrid",
        "publicLabel": "雷达网格",
        "description": "雷达网格 / 刻度环(雷达生效)"
      },
      {
        "key": "showLegend",
        "label": "图例列表",
        "type": "toggle",
        "default": true,
        "desc": "右侧玩家图例 + 综合分",
        "publicKey": "showLegend",
        "publicLabel": "图例列表",
        "description": "右侧玩家图例 + 综合分"
      },
      {
        "key": "showDecorations",
        "label": "装饰元素",
        "type": "toggle",
        "default": true,
        "desc": "星芒 / 圆环等点缀",
        "publicKey": "showDecorations",
        "publicLabel": "装饰元素",
        "description": "星芒 / 圆环等点缀"
      }
    ],
    "defaultProps": {
      "copy": {
        "text001": "头部玩家 · CAPABILITY RADAR",
        "text002": "三强各有所长，没有",
        "text003": "全能选手",
        "text004": "同样是通用大模型，OpenAI 全面、Anthropic 押注安全治理、xAI 死磕算力——六大维度看清差异。",
        "text005": "综合分",
        "text006": "评分为调研示意（0–100）· 维度权重等权 · 数据为调研整理推演"
      },
      "playersData": [
        {
          "name": "OpenAI",
          "en": "GPT",
          "color": "#15A7F0",
          "vals": [
            95,
            92,
            86,
            90,
            88,
            70
          ]
        },
        {
          "name": "Anthropic",
          "en": "Claude",
          "color": "#27E021",
          "vals": [
            90,
            84,
            72,
            78,
            85,
            96
          ]
        },
        {
          "name": "xAI",
          "en": "Grok",
          "color": "#FFC700",
          "vals": [
            82,
            80,
            54,
            96,
            70,
            58
          ]
        }
      ],
      "hlStyle": "glass",
      "hlTilt": 2,
      "itemCount": 3,
      "chartVariant": "radar",
      "focusEnabled": true,
      "focusIndex": 2,
      "showGrid": true,
      "showLegend": true,
      "showDecorations": true
    }
  },
  {
    "key": "theme04_page050",
    "themeKey": "theme04",
    "pageNumber": 50,
    "layout": "THEME04-050",
    "slot": "case",
    "label": "典型案例",
    "bgClass": "",
    "controls": [
      {
        "key": "copy",
        "label": "可见文案",
        "type": "list",
        "default": {
          "text001": "“"
        },
        "desc": "页面中的固定可见文案、单位和图片槽提示",
        "publicKey": "copy",
        "publicLabel": "可见文案",
        "description": "页面中的固定可见文案、单位和图片槽提示"
      },
      {
        "key": "mediaCount",
        "label": "图片槽数量",
        "type": "slider",
        "default": 1,
        "min": 0,
        "max": 2,
        "step": 1,
        "desc": "自适应图片槽数量(按上传图片比例)",
        "publicKey": "mediaCount",
        "publicLabel": "图片槽数量",
        "description": "自适应图片槽数量(按上传图片比例)"
      },
      {
        "key": "mediaLayout",
        "label": "多图排布",
        "type": "radio",
        "default": "stack",
        "options": [
          [
            "stack",
            "堆叠"
          ],
          [
            "row",
            "并排"
          ]
        ],
        "desc": "多张图片的排列方式",
        "publicKey": "mediaLayout",
        "publicLabel": "多图排布",
        "description": "多张图片的排列方式"
      },
      {
        "key": "milestoneCount",
        "label": "里程碑数量",
        "type": "slider",
        "default": 4,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "时间轴节点数量",
        "publicKey": "milestoneCount",
        "publicLabel": "里程碑数量",
        "description": "时间轴节点数量"
      },
      {
        "key": "focusEnabled",
        "label": "重点突出",
        "type": "toggle",
        "default": true,
        "desc": "是否高亮某一里程碑",
        "publicKey": "focusEnabled",
        "publicLabel": "重点突出",
        "description": "是否高亮某一里程碑"
      },
      {
        "key": "focusIndex",
        "label": "重点序号",
        "type": "slider",
        "default": 4,
        "min": 1,
        "max": 4,
        "step": 1,
        "maxFromKey": "milestoneCount",
        "desc": "被高亮里程碑的序号",
        "publicKey": "focusIndex",
        "publicLabel": "重点序号",
        "description": "被高亮里程碑的序号"
      },
      {
        "key": "showQuote",
        "label": "引言显示",
        "type": "toggle",
        "default": true,
        "desc": "底部人物引言",
        "publicKey": "showQuote",
        "publicLabel": "引言显示",
        "description": "底部人物引言"
      },
      {
        "key": "showDecorations",
        "label": "装饰元素",
        "type": "toggle",
        "default": true,
        "desc": "星芒等点缀",
        "publicKey": "showDecorations",
        "publicLabel": "装饰元素",
        "description": "星芒等点缀"
      },
      {
        "key": "milestones",
        "label": "里程碑",
        "type": "list",
        "default": [
          {
            "date": "2024 · 5月",
            "title": "Series G",
            "metric": "融资 280 亿 · 估值 600 亿"
          },
          {
            "date": "2024 · 8月",
            "title": "Series H 首轮",
            "metric": "融资 180 亿 · 估值 830 亿"
          },
          {
            "date": "2024 · 11月",
            "title": "Series H 扩轮",
            "metric": "融资 190 亿 · 估值 9650 亿"
          },
          {
            "date": "2026 · 6月",
            "title": "递交 IPO 申请",
            "metric": "估值登顶 · 预计年内上市"
          }
        ],
        "desc": "里程碑：日期 / 标题 / 数据",
        "publicKey": "milestones",
        "publicLabel": "里程碑",
        "description": "里程碑：日期 / 标题 / 数据"
      }
    ],
    "defaultProps": {
      "copy": {
        "text001": "“"
      },
      "mediaCount": 1,
      "mediaLayout": "stack",
      "milestoneCount": 4,
      "focusEnabled": true,
      "focusIndex": 4,
      "showQuote": true,
      "showDecorations": true,
      "kicker": "典型案例 · CASE STUDY",
      "name": "Anthropic",
      "tagline": "从追赶到反超 · 估值登顶",
      "pill": "估值 9650 亿美元 · 全球最高",
      "quote": "通过 Constitutional AI 构建可解释、可控的系统，比单纯追求规模更符合长远利益。",
      "quoteCite": "— Dario Amodei，CEO",
      "mediaPlaceholder1": "公司 Logo",
      "mediaPlaceholder2": "创始人 / 团队",
      "milestones": [
        {
          "date": "2024 · 5月",
          "title": "Series G",
          "metric": "融资 280 亿 · 估值 600 亿"
        },
        {
          "date": "2024 · 8月",
          "title": "Series H 首轮",
          "metric": "融资 180 亿 · 估值 830 亿"
        },
        {
          "date": "2024 · 11月",
          "title": "Series H 扩轮",
          "metric": "融资 190 亿 · 估值 9650 亿"
        },
        {
          "date": "2026 · 6月",
          "title": "递交 IPO 申请",
          "metric": "估值登顶 · 预计年内上市"
        }
      ]
    }
  },
  {
    "key": "theme04_page051",
    "themeKey": "theme04",
    "pageNumber": 51,
    "layout": "THEME04-051",
    "slot": "profile",
    "label": "人物档案卡",
    "bgClass": "",
    "controls": [
      {
        "key": "copy",
        "label": "可见文案",
        "type": "list",
        "default": {
          "text001": "档案 NO. 02 · CASE",
          "placeholder001": "Dario Amodei · 人物肖像",
          "text002": "A",
          "text003": "典型案例 · DOSSIER",
          "text004": "一张档案，",
          "text005": "看懂头号挑战者",
          "text006": "联合创始人 & CEO",
          "text007": "Dario Amodei",
          "text008": "Anthropic",
          "text009": "通用大模型 · 安全对齐",
          "text010": "资本热度",
          "text011": "5 / 5",
          "text012": "“",
          "text013": "以「AI 安全」为旗号，成为资本最青睐的 OpenAI 头号挑战者——估值一年翻数倍。"
        },
        "desc": "页面中的固定可见文案、单位和图片槽提示",
        "publicKey": "copy",
        "publicLabel": "可见文案",
        "description": "页面中的固定可见文案、单位和图片槽提示"
      },
      {
        "key": "factsData",
        "label": "factsData",
        "type": "list",
        "default": [
          {
            "k": "最新估值",
            "v": "600",
            "u": "亿美元"
          },
          {
            "k": "2024 融资",
            "v": "80",
            "u": "亿美元"
          },
          {
            "k": "成立年份",
            "v": "2021",
            "u": ""
          },
          {
            "k": "主投赛道",
            "v": "通用大模型",
            "u": "安全对齐"
          }
        ],
        "desc": "默认数据内容",
        "publicKey": "factsData",
        "publicLabel": "factsData",
        "description": "默认数据内容"
      },
      {
        "key": "hlStyle",
        "label": "高亮样式",
        "type": "radio",
        "default": "glass",
        "options": [
          [
            "glass",
            "玻璃糖果"
          ],
          [
            "pill",
            "扁平药丸"
          ],
          [
            "underline",
            "下划线"
          ],
          [
            "text",
            "纯文字"
          ]
        ],
        "desc": "关键词高亮：玻璃糖果 / 扁平药丸 / 下划线 / 纯文字",
        "publicKey": "hlStyle",
        "publicLabel": "高亮样式",
        "description": "关键词高亮：玻璃糖果 / 扁平药丸 / 下划线 / 纯文字"
      },
      {
        "key": "hlTilt",
        "label": "高亮倾斜",
        "type": "slider",
        "default": 2,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "关键词胶囊旋转角度（仅糖果/药丸样式生效）",
        "publicKey": "hlTilt",
        "publicLabel": "高亮倾斜",
        "description": "关键词胶囊旋转角度（仅糖果/药丸样式生效）"
      },
      {
        "key": "mediaCount",
        "label": "肖像图片槽",
        "type": "slider",
        "default": 1,
        "min": 0,
        "max": 1,
        "step": 1,
        "desc": "肖像图片槽数量(0=霓虹首字母无图态)",
        "publicKey": "mediaCount",
        "publicLabel": "肖像图片槽",
        "description": "肖像图片槽数量(0=霓虹首字母无图态)"
      },
      {
        "key": "imageSide",
        "label": "肖像位置",
        "type": "radio",
        "default": "left",
        "options": [
          [
            "left",
            "左侧"
          ],
          [
            "right",
            "右侧"
          ]
        ],
        "desc": "肖像在左 / 右",
        "publicKey": "imageSide",
        "publicLabel": "肖像位置",
        "description": "肖像在左 / 右"
      },
      {
        "key": "accentTone",
        "label": "主色调",
        "type": "radio",
        "default": "blue",
        "options": [
          [
            "green",
            "绿"
          ],
          [
            "yellow",
            "黄"
          ],
          [
            "blue",
            "蓝"
          ],
          [
            "pink",
            "粉"
          ]
        ],
        "desc": "页面主色调(通用命名)",
        "publicKey": "accentTone",
        "publicLabel": "主色调",
        "description": "页面主色调(通用命名)"
      },
      {
        "key": "statCount",
        "label": "档案数据条数",
        "type": "slider",
        "default": 4,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "结构化档案数据条数",
        "publicKey": "statCount",
        "publicLabel": "档案数据条数",
        "description": "结构化档案数据条数"
      },
      {
        "key": "showRating",
        "label": "关注度",
        "type": "toggle",
        "default": true,
        "desc": "关注度评级点",
        "publicKey": "showStatusRating",
        "publicLabel": "关注度",
        "description": "关注度评级点"
      },
      {
        "key": "showNote",
        "label": "批注金句",
        "type": "toggle",
        "default": true,
        "desc": "底部批注金句",
        "publicKey": "showNote",
        "publicLabel": "批注金句",
        "description": "底部批注金句"
      },
      {
        "key": "showDecorations",
        "label": "装饰元素",
        "type": "toggle",
        "default": true,
        "desc": "星芒等点缀",
        "publicKey": "showDecorations",
        "publicLabel": "装饰元素",
        "description": "星芒等点缀"
      }
    ],
    "defaultProps": {
      "copy": {
        "text001": "档案 NO. 02 · CASE",
        "placeholder001": "Dario Amodei · 人物肖像",
        "text002": "A",
        "text003": "典型案例 · DOSSIER",
        "text004": "一张档案，",
        "text005": "看懂头号挑战者",
        "text006": "联合创始人 & CEO",
        "text007": "Dario Amodei",
        "text008": "Anthropic",
        "text009": "通用大模型 · 安全对齐",
        "text010": "资本热度",
        "text011": "5 / 5",
        "text012": "“",
        "text013": "以「AI 安全」为旗号，成为资本最青睐的 OpenAI 头号挑战者——估值一年翻数倍。"
      },
      "factsData": [
        {
          "k": "最新估值",
          "v": "600",
          "u": "亿美元"
        },
        {
          "k": "2024 融资",
          "v": "80",
          "u": "亿美元"
        },
        {
          "k": "成立年份",
          "v": "2021",
          "u": ""
        },
        {
          "k": "主投赛道",
          "v": "通用大模型",
          "u": "安全对齐"
        }
      ],
      "hlStyle": "glass",
      "hlTilt": 2,
      "mediaCount": 1,
      "imageSide": "left",
      "accentTone": "blue",
      "statCount": 4,
      "showRating": true,
      "showNote": true,
      "showDecorations": true
    }
  },
  {
    "key": "theme04_page052",
    "themeKey": "theme04",
    "pageNumber": 52,
    "layout": "THEME04-052",
    "slot": "valuechart",
    "label": "估值三级跳",
    "bgClass": "",
    "controls": [
      {
        "key": "copy",
        "label": "可见文案",
        "type": "list",
        "default": {
          "text001": "典型案例 · ANTHROPIC 估值跃迁",
          "text002": "Anthropic 估值，半年内",
          "text003": "三级跳",
          "text004": "5 月 → 8 月 → 11 月 连续三轮，估值从 600 亿冲上 9650 亿美元，登顶全球最高估值 AI 初创。",
          "text005": "亿",
          "text006": "亿",
          "text007": "估值单位：亿美元 · 纵轴为示意比例，数值以标签为准 · 数据为调研整理推演"
        },
        "desc": "页面中的固定可见文案、单位和图片槽提示",
        "publicKey": "copy",
        "publicLabel": "可见文案",
        "description": "页面中的固定可见文案、单位和图片槽提示"
      },
      {
        "key": "pointsData",
        "label": "pointsData",
        "type": "list",
        "default": [
          {
            "month": "5 月",
            "round": "Series G",
            "val": 600,
            "color": "#15A7F0"
          },
          {
            "month": "8 月",
            "round": "Series H 首轮",
            "val": 830,
            "color": "#27E021"
          },
          {
            "month": "11 月",
            "round": "Series H 扩轮",
            "val": 9650,
            "color": "#FFC700"
          }
        ],
        "desc": "默认数据内容",
        "publicKey": "pointsData",
        "publicLabel": "pointsData",
        "description": "默认数据内容"
      },
      {
        "key": "hlStyle",
        "label": "高亮样式",
        "type": "radio",
        "default": "glass",
        "options": [
          [
            "glass",
            "玻璃糖果"
          ],
          [
            "pill",
            "扁平药丸"
          ],
          [
            "underline",
            "下划线"
          ],
          [
            "text",
            "纯文字"
          ]
        ],
        "desc": "关键词高亮：玻璃糖果 / 扁平药丸 / 下划线 / 纯文字",
        "publicKey": "hlStyle",
        "publicLabel": "高亮样式",
        "description": "关键词高亮：玻璃糖果 / 扁平药丸 / 下划线 / 纯文字"
      },
      {
        "key": "hlTilt",
        "label": "高亮倾斜",
        "type": "slider",
        "default": 2,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "关键词胶囊旋转角度（仅糖果/药丸样式生效）",
        "publicKey": "hlTilt",
        "publicLabel": "高亮倾斜",
        "description": "关键词胶囊旋转角度（仅糖果/药丸样式生效）"
      },
      {
        "key": "pointCount",
        "label": "数据点数量",
        "type": "slider",
        "default": 3,
        "min": 2,
        "max": 3,
        "step": 1,
        "desc": "展示的指标数据点数量",
        "publicKey": "pointCount",
        "publicLabel": "数据点数量",
        "description": "展示的指标数据点数量"
      },
      {
        "key": "chartVariant",
        "label": "图表类型",
        "type": "radio",
        "default": "area",
        "options": [
          [
            "area",
            "面积"
          ],
          [
            "bar",
            "柱状"
          ]
        ],
        "desc": "面积折线 / 柱状",
        "publicKey": "chartVariant",
        "publicLabel": "图表类型",
        "description": "面积折线 / 柱状"
      },
      {
        "key": "focusEnabled",
        "label": "重点突出",
        "type": "toggle",
        "default": true,
        "desc": "是否高亮某一数据点",
        "publicKey": "focusEnabled",
        "publicLabel": "重点突出",
        "description": "是否高亮某一数据点"
      },
      {
        "key": "focusIndex",
        "label": "重点序号",
        "type": "slider",
        "default": 3,
        "min": 1,
        "max": 3,
        "step": 1,
        "maxFromKey": "pointCount",
        "desc": "被高亮数据点的序号",
        "publicKey": "focusIndex",
        "publicLabel": "重点序号",
        "description": "被高亮数据点的序号"
      },
      {
        "key": "showGrowthMarkers",
        "label": "增幅标注",
        "type": "toggle",
        "default": true,
        "desc": "点 / 柱间增幅标注",
        "publicKey": "showGrowthMarkers",
        "publicLabel": "增幅标注",
        "description": "点 / 柱间增幅标注"
      },
      {
        "key": "showValueLabels",
        "label": "数值标签",
        "type": "toggle",
        "default": true,
        "desc": "各点 / 柱数值标签",
        "publicKey": "showValueLabels",
        "publicLabel": "数值标签",
        "description": "各点 / 柱数值标签"
      },
      {
        "key": "showDecorations",
        "label": "装饰元素",
        "type": "toggle",
        "default": true,
        "desc": "星芒 / 圆环等点缀",
        "publicKey": "showDecorations",
        "publicLabel": "装饰元素",
        "description": "星芒 / 圆环等点缀"
      }
    ],
    "defaultProps": {
      "copy": {
        "text001": "典型案例 · ANTHROPIC 估值跃迁",
        "text002": "Anthropic 估值，半年内",
        "text003": "三级跳",
        "text004": "5 月 → 8 月 → 11 月 连续三轮，估值从 600 亿冲上 9650 亿美元，登顶全球最高估值 AI 初创。",
        "text005": "亿",
        "text006": "亿",
        "text007": "估值单位：亿美元 · 纵轴为示意比例，数值以标签为准 · 数据为调研整理推演"
      },
      "pointsData": [
        {
          "month": "5 月",
          "round": "Series G",
          "val": 600,
          "color": "#15A7F0"
        },
        {
          "month": "8 月",
          "round": "Series H 首轮",
          "val": 830,
          "color": "#27E021"
        },
        {
          "month": "11 月",
          "round": "Series H 扩轮",
          "val": 9650,
          "color": "#FFC700"
        }
      ],
      "hlStyle": "glass",
      "hlTilt": 2,
      "pointCount": 3,
      "chartVariant": "area",
      "focusEnabled": true,
      "focusIndex": 3,
      "showGrowthMarkers": true,
      "showValueLabels": true,
      "showDecorations": true
    }
  },
  {
    "key": "theme04_page053",
    "themeKey": "theme04",
    "pageNumber": 53,
    "layout": "THEME04-053",
    "slot": "dumbbell",
    "label": "估值跃迁",
    "bgClass": "",
    "controls": [
      {
        "key": "copy",
        "label": "可见文案",
        "type": "list",
        "default": {
          "text001": "估值跃迁 · ONE-YEAR LEAP",
          "text002": "一年之内，头部把估值",
          "text003": "整段拉远",
          "text004": "×",
          "text005": "亿",
          "text006": "强者愈强",
          "text007": "起投估值 ●——● 当前估值 · 横轴 sqrt 示意比例，数值以标签为准（报告 3.2，亿美元）"
        },
        "desc": "页面中的固定可见文案、单位和图片槽提示",
        "publicKey": "copy",
        "publicLabel": "可见文案",
        "description": "页面中的固定可见文案、单位和图片槽提示"
      },
      {
        "key": "rowsData",
        "label": "rowsData",
        "type": "list",
        "default": [
          {
            "name": "OpenAI",
            "cat": "通用大模型",
            "start": 290,
            "now": 1570,
            "color": "#27E021"
          },
          {
            "name": "Anthropic",
            "cat": "通用大模型",
            "start": 184,
            "now": 615,
            "color": "#15A7F0"
          },
          {
            "name": "xAI",
            "cat": "通用大模型",
            "start": 240,
            "now": 500,
            "color": "#FF9FE2"
          },
          {
            "name": "Safe Superintelligence",
            "cat": "安全对齐",
            "start": 50,
            "now": 320,
            "color": "#FFC700"
          },
          {
            "name": "CoreWeave",
            "cat": "算力 / 云",
            "start": 190,
            "now": 235,
            "color": "#9aa0ff"
          }
        ],
        "desc": "默认数据内容",
        "publicKey": "rowsData",
        "publicLabel": "rowsData",
        "description": "默认数据内容"
      },
      {
        "key": "hlStyle",
        "label": "高亮样式",
        "type": "radio",
        "default": "glass",
        "options": [
          [
            "glass",
            "玻璃糖果"
          ],
          [
            "pill",
            "扁平药丸"
          ],
          [
            "underline",
            "下划线"
          ],
          [
            "text",
            "纯文字"
          ]
        ],
        "desc": "关键词高亮：玻璃糖果 / 扁平药丸 / 下划线 / 纯文字",
        "publicKey": "hlStyle",
        "publicLabel": "高亮样式",
        "description": "关键词高亮：玻璃糖果 / 扁平药丸 / 下划线 / 纯文字"
      },
      {
        "key": "hlTilt",
        "label": "高亮倾斜",
        "type": "slider",
        "default": 2,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "关键词胶囊旋转角度（仅糖果/药丸样式生效）",
        "publicKey": "hlTilt",
        "publicLabel": "高亮倾斜",
        "description": "关键词胶囊旋转角度（仅糖果/药丸样式生效）"
      },
      {
        "key": "itemCount",
        "label": "公司数",
        "type": "slider",
        "default": 5,
        "min": 2,
        "max": 5,
        "step": 1,
        "desc": "展示的公司哑铃条数",
        "publicKey": "itemCount",
        "publicLabel": "公司数",
        "description": "展示的公司哑铃条数"
      },
      {
        "key": "chartVariant",
        "label": "图表类型",
        "type": "radio",
        "default": "dumbbell",
        "options": [
          [
            "dumbbell",
            "哑铃图"
          ],
          [
            "bar",
            "横向柱"
          ]
        ],
        "desc": "哑铃区间 / 横向柱状",
        "publicKey": "chartVariant",
        "publicLabel": "图表类型",
        "description": "哑铃区间 / 横向柱状"
      },
      {
        "key": "focusEnabled",
        "label": "重点突出",
        "type": "toggle",
        "default": true,
        "desc": "是否高亮某一行",
        "publicKey": "focusEnabled",
        "publicLabel": "重点突出",
        "description": "是否高亮某一行"
      },
      {
        "key": "focusIndex",
        "label": "重点序号",
        "type": "slider",
        "default": 1,
        "min": 1,
        "max": 5,
        "step": 1,
        "maxFromKey": "itemCount",
        "desc": "被高亮行的序号",
        "publicKey": "focusIndex",
        "publicLabel": "重点序号",
        "description": "被高亮行的序号"
      },
      {
        "key": "showStartDot",
        "label": "起点端点",
        "type": "toggle",
        "default": true,
        "desc": "起投指标端点显隐（哑铃生效）",
        "publicKey": "showStartDot",
        "publicLabel": "起点端点",
        "description": "起投指标端点显隐（哑铃生效）"
      },
      {
        "key": "showMultiplier",
        "label": "倍数徽标",
        "type": "toggle",
        "default": true,
        "desc": "×倍数徽标显隐（哑铃生效）",
        "publicKey": "showMultiplier",
        "publicLabel": "倍数徽标",
        "description": "×倍数徽标显隐（哑铃生效）"
      },
      {
        "key": "showScale",
        "label": "刻度参考",
        "type": "toggle",
        "default": true,
        "desc": "底部刻度参考线显隐",
        "publicKey": "showScale",
        "publicLabel": "刻度参考",
        "description": "底部刻度参考线显隐"
      },
      {
        "key": "showDecorations",
        "label": "装饰元素",
        "type": "toggle",
        "default": true,
        "desc": "星芒等点缀",
        "publicKey": "showDecorations",
        "publicLabel": "装饰元素",
        "description": "星芒等点缀"
      }
    ],
    "defaultProps": {
      "copy": {
        "text001": "估值跃迁 · ONE-YEAR LEAP",
        "text002": "一年之内，头部把估值",
        "text003": "整段拉远",
        "text004": "×",
        "text005": "亿",
        "text006": "强者愈强",
        "text007": "起投估值 ●——● 当前估值 · 横轴 sqrt 示意比例，数值以标签为准（报告 3.2，亿美元）"
      },
      "rowsData": [
        {
          "name": "OpenAI",
          "cat": "通用大模型",
          "start": 290,
          "now": 1570,
          "color": "#27E021"
        },
        {
          "name": "Anthropic",
          "cat": "通用大模型",
          "start": 184,
          "now": 615,
          "color": "#15A7F0"
        },
        {
          "name": "xAI",
          "cat": "通用大模型",
          "start": 240,
          "now": 500,
          "color": "#FF9FE2"
        },
        {
          "name": "Safe Superintelligence",
          "cat": "安全对齐",
          "start": 50,
          "now": 320,
          "color": "#FFC700"
        },
        {
          "name": "CoreWeave",
          "cat": "算力 / 云",
          "start": 190,
          "now": 235,
          "color": "#9aa0ff"
        }
      ],
      "hlStyle": "glass",
      "hlTilt": 2,
      "itemCount": 5,
      "chartVariant": "dumbbell",
      "focusEnabled": true,
      "focusIndex": 1,
      "showStartDot": true,
      "showMultiplier": true,
      "showScale": true,
      "showDecorations": true
    }
  },
  {
    "key": "theme04_page054",
    "themeKey": "theme04",
    "pageNumber": 54,
    "layout": "THEME04-054",
    "slot": "pyramid",
    "label": "估值金字塔",
    "bgClass": "",
    "controls": [
      {
        "key": "copy",
        "label": "可见文案",
        "type": "list",
        "default": {
          "text001": "估值分层 · THE PYRAMID",
          "text002": "估值金字塔，",
          "text003": "越往上越稀缺",
          "text004": "↑",
          "text005": "越往上 · 越稀缺",
          "text006": "估值门槛 ·",
          "text007": "数据为调研整理与推演 · 家数 / 笔数为 2024 ≥1 亿美元 AI 融资玩家的估值分层（示意量级）· 梯形宽度示意各层规模"
        },
        "desc": "页面中的固定可见文案、单位和图片槽提示",
        "publicKey": "copy",
        "publicLabel": "可见文案",
        "description": "页面中的固定可见文案、单位和图片槽提示"
      },
      {
        "key": "tiersData",
        "label": "tiersData",
        "type": "list",
        "default": [
          {
            "name": "超级独角兽",
            "en": "SUPER",
            "threshold": "≥ 1000 亿美元",
            "count": "3",
            "unit": "家",
            "weight": 3,
            "reps": [
              "OpenAI",
              "xAI",
              "Databricks"
            ],
            "color": "#27E021"
          },
          {
            "name": "巨型独角兽",
            "en": "MEGA",
            "threshold": "≥ 100 亿美元",
            "count": "9",
            "unit": "家",
            "weight": 9,
            "reps": [
              "Anthropic",
              "CoreWeave",
              "Scale AI"
            ],
            "color": "#15A7F0"
          },
          {
            "name": "独角兽",
            "en": "UNICORN",
            "threshold": "≥ 10 亿美元",
            "count": "30+",
            "unit": "家",
            "weight": 33,
            "reps": [
              "Figure",
              "Perplexity",
              "Glean"
            ],
            "color": "#FFC700"
          },
          {
            "name": "成长梯队",
            "en": "GROWTH",
            "threshold": "1 – 10 亿美元",
            "count": "55+",
            "unit": "笔",
            "weight": 58,
            "reps": [
              "大量早 / 中期玩家"
            ],
            "color": "#FF9FE2"
          }
        ],
        "desc": "默认数据内容",
        "publicKey": "tiersData",
        "publicLabel": "tiersData",
        "description": "默认数据内容"
      },
      {
        "key": "hlStyle",
        "label": "高亮样式",
        "type": "radio",
        "default": "glass",
        "options": [
          [
            "glass",
            "玻璃糖果"
          ],
          [
            "pill",
            "扁平药丸"
          ],
          [
            "underline",
            "下划线"
          ],
          [
            "text",
            "纯文字"
          ]
        ],
        "desc": "关键词高亮：玻璃糖果 / 扁平药丸 / 下划线 / 纯文字",
        "publicKey": "hlStyle",
        "publicLabel": "高亮样式",
        "description": "关键词高亮：玻璃糖果 / 扁平药丸 / 下划线 / 纯文字"
      },
      {
        "key": "hlTilt",
        "label": "高亮倾斜",
        "type": "slider",
        "default": 2,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "关键词胶囊旋转角度（仅糖果/药丸样式生效）",
        "publicKey": "hlTilt",
        "publicLabel": "高亮倾斜",
        "description": "关键词胶囊旋转角度（仅糖果/药丸样式生效）"
      },
      {
        "key": "tierCount",
        "label": "分层数",
        "type": "slider",
        "default": 4,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "展示的指标分层数",
        "publicKey": "tierCount",
        "publicLabel": "分层数",
        "description": "展示的指标分层数"
      },
      {
        "key": "chartVariant",
        "label": "图表类型",
        "type": "radio",
        "default": "pyramid",
        "options": [
          [
            "pyramid",
            "金字塔"
          ],
          [
            "bars",
            "横向柱"
          ]
        ],
        "desc": "金字塔 / 横向柱状",
        "publicKey": "chartVariant",
        "publicLabel": "图表类型",
        "description": "金字塔 / 横向柱状"
      },
      {
        "key": "focusEnabled",
        "label": "重点突出",
        "type": "toggle",
        "default": true,
        "desc": "是否高亮某一层",
        "publicKey": "focusEnabled",
        "publicLabel": "重点突出",
        "description": "是否高亮某一层"
      },
      {
        "key": "focusIndex",
        "label": "重点层序号",
        "type": "slider",
        "default": 1,
        "min": 1,
        "max": 4,
        "step": 1,
        "maxFromKey": "tierCount",
        "desc": "被高亮层的序号（顶为1）",
        "publicKey": "focusIndex",
        "publicLabel": "重点层序号",
        "description": "被高亮层的序号（顶为1）"
      },
      {
        "key": "showCount",
        "label": "家数数字",
        "type": "toggle",
        "default": true,
        "desc": "层内家数数字",
        "publicKey": "showCount",
        "publicLabel": "家数数字",
        "description": "层内家数数字"
      },
      {
        "key": "showExamples",
        "label": "代表公司",
        "type": "toggle",
        "default": true,
        "desc": "右栏代表对象标签",
        "publicKey": "showExamples",
        "publicLabel": "代表公司",
        "description": "右栏代表对象标签"
      },
      {
        "key": "showDecorations",
        "label": "装饰元素",
        "type": "toggle",
        "default": true,
        "desc": "星芒等点缀",
        "publicKey": "showDecorations",
        "publicLabel": "装饰元素",
        "description": "星芒等点缀"
      }
    ],
    "defaultProps": {
      "copy": {
        "text001": "估值分层 · THE PYRAMID",
        "text002": "估值金字塔，",
        "text003": "越往上越稀缺",
        "text004": "↑",
        "text005": "越往上 · 越稀缺",
        "text006": "估值门槛 ·",
        "text007": "数据为调研整理与推演 · 家数 / 笔数为 2024 ≥1 亿美元 AI 融资玩家的估值分层（示意量级）· 梯形宽度示意各层规模"
      },
      "tiersData": [
        {
          "name": "超级独角兽",
          "en": "SUPER",
          "threshold": "≥ 1000 亿美元",
          "count": "3",
          "unit": "家",
          "weight": 3,
          "reps": [
            "OpenAI",
            "xAI",
            "Databricks"
          ],
          "color": "#27E021"
        },
        {
          "name": "巨型独角兽",
          "en": "MEGA",
          "threshold": "≥ 100 亿美元",
          "count": "9",
          "unit": "家",
          "weight": 9,
          "reps": [
            "Anthropic",
            "CoreWeave",
            "Scale AI"
          ],
          "color": "#15A7F0"
        },
        {
          "name": "独角兽",
          "en": "UNICORN",
          "threshold": "≥ 10 亿美元",
          "count": "30+",
          "unit": "家",
          "weight": 33,
          "reps": [
            "Figure",
            "Perplexity",
            "Glean"
          ],
          "color": "#FFC700"
        },
        {
          "name": "成长梯队",
          "en": "GROWTH",
          "threshold": "1 – 10 亿美元",
          "count": "55+",
          "unit": "笔",
          "weight": 58,
          "reps": [
            "大量早 / 中期玩家"
          ],
          "color": "#FF9FE2"
        }
      ],
      "hlStyle": "glass",
      "hlTilt": 2,
      "tierCount": 4,
      "chartVariant": "pyramid",
      "focusEnabled": true,
      "focusIndex": 1,
      "showCount": true,
      "showExamples": true,
      "showDecorations": true
    }
  },
  {
    "key": "theme04_page055",
    "themeKey": "theme04",
    "pageNumber": 55,
    "layout": "THEME04-055",
    "slot": "hero",
    "label": "大图封面",
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
        "key": "hlStyle",
        "label": "高亮样式",
        "type": "radio",
        "default": "glass",
        "options": [
          [
            "glass",
            "玻璃糖果"
          ],
          [
            "pill",
            "扁平药丸"
          ],
          [
            "underline",
            "下划线"
          ],
          [
            "text",
            "纯文字"
          ]
        ],
        "desc": "关键词高亮：玻璃糖果 / 扁平药丸 / 下划线 / 纯文字",
        "publicKey": "hlStyle",
        "publicLabel": "高亮样式",
        "description": "关键词高亮：玻璃糖果 / 扁平药丸 / 下划线 / 纯文字"
      },
      {
        "key": "hlTilt",
        "label": "高亮倾斜",
        "type": "slider",
        "default": 2,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "关键词胶囊旋转角度（仅糖果/药丸样式生效）",
        "publicKey": "hlTilt",
        "publicLabel": "高亮倾斜",
        "description": "关键词胶囊旋转角度（仅糖果/药丸样式生效）"
      },
      {
        "key": "mediaCount",
        "label": "背景图数量",
        "type": "slider",
        "default": 1,
        "min": 0,
        "max": 1,
        "step": 1,
        "dependsOn": "backgroundMode",
        "dependsOnValue": "media",
        "desc": "整屏 cover 背景图(0=渐变底)",
        "publicKey": "mediaCount",
        "publicLabel": "背景图数量",
        "description": "整屏 cover 背景图(0=渐变底)"
      },
      {
        "key": "textAlign",
        "label": "文案对齐",
        "type": "radio",
        "default": "left",
        "options": [
          [
            "left",
            "左下"
          ],
          [
            "center",
            "居中"
          ]
        ],
        "desc": "浮层文案对齐方式",
        "publicKey": "textAlign",
        "publicLabel": "文案对齐",
        "description": "浮层文案对齐方式"
      },
      {
        "key": "accentTone",
        "label": "主色调",
        "type": "radio",
        "default": "blue",
        "options": [
          [
            "green",
            "绿"
          ],
          [
            "yellow",
            "黄"
          ],
          [
            "blue",
            "蓝"
          ],
          [
            "pink",
            "粉"
          ]
        ],
        "desc": "页面主色调",
        "publicKey": "accentTone",
        "publicLabel": "主色调",
        "description": "页面主色调"
      },
      {
        "key": "statCount",
        "label": "数据卡数量",
        "type": "slider",
        "default": 3,
        "min": 0,
        "max": 3,
        "step": 1,
        "desc": "底部数据卡数量",
        "publicKey": "statCount",
        "publicLabel": "数据卡数量",
        "description": "底部数据卡数量"
      },
      {
        "key": "showScrim",
        "label": "暗角遮罩",
        "type": "toggle",
        "default": true,
        "desc": "保证文字可读的暗角",
        "publicKey": "showScrim",
        "publicLabel": "暗角遮罩",
        "description": "保证文字可读的暗角"
      },
      {
        "key": "showDecorations",
        "label": "装饰元素",
        "type": "toggle",
        "default": true,
        "desc": "星芒等点缀",
        "publicKey": "showDecorations",
        "publicLabel": "装饰元素",
        "description": "星芒等点缀"
      },
      {
        "key": "stats",
        "label": "数据卡",
        "type": "list",
        "default": [
          {
            "value": "50",
            "unit": "亿",
            "label": "2024 融资额"
          },
          {
            "value": "500",
            "unit": "亿",
            "label": "估值 / 美元"
          },
          {
            "value": "18",
            "unit": "个月",
            "label": "跻身头部梯队"
          }
        ],
        "desc": "底部数据卡：数值 / 单位 / 标签",
        "publicKey": "stats",
        "publicLabel": "数据卡",
        "description": "底部数据卡：数值 / 单位 / 标签"
      }
    ],
    "defaultProps": {
      "hlStyle": "glass",
      "hlTilt": 2,
      "mediaCount": 1,
      "backgroundMode": "unicorn",
      "unicornScene": "moving",
      "textAlign": "left",
      "accentTone": "blue",
      "statCount": 3,
      "showScrim": true,
      "showDecorations": true,
      "kicker": "典型案例 · 第三次创业",
      "name": "xAI",
      "taglineLead": "马斯克的",
      "taglineKeyword": "第三次创业",
      "taglineTail": "",
      "body": "背靠 X 平台海量实时社交数据，协同特斯拉自动驾驶团队——Grok 主打「幽默、实时、无审查」，从成立到跻身头部梯队仅用 18 个月。",
      "mediaPlaceholder": "拖入整屏背景图",
      "stats": [
        {
          "value": "50",
          "unit": "亿",
          "label": "2024 融资额"
        },
        {
          "value": "500",
          "unit": "亿",
          "label": "估值 / 美元"
        },
        {
          "value": "18",
          "unit": "个月",
          "label": "跻身头部梯队"
        }
      ]
    }
  },
  {
    "key": "theme04_page056",
    "themeKey": "theme04",
    "pageNumber": 56,
    "layout": "THEME04-056",
    "slot": "annotated",
    "label": "标注特写",
    "bgClass": "",
    "controls": [
      {
        "key": "copy",
        "label": "可见文案",
        "type": "list",
        "default": {
          "text001": "算力军备 · CASE / COLOSSUS",
          "text002": "把超算，",
          "text003": "122 天",
          "text004": "盖出来",
          "text005": "大额融资的尽头是算力。xAI 在孟菲斯把十万张 H100 塞进同一个集群，用四个月完成传统需要数年的工程—— 资本、电力与工程速度，正在成为大模型竞赛真正的护城河。",
          "placeholder001": "超算中心 / GPU 集群 / 数据中心实拍"
        },
        "desc": "页面中的固定可见文案、单位和图片槽提示",
        "publicKey": "copy",
        "publicLabel": "可见文案",
        "description": "页面中的固定可见文案、单位和图片槽提示"
      },
      {
        "key": "pinsData",
        "label": "pinsData",
        "type": "list",
        "default": [
          {
            "x": 31,
            "y": 26,
            "val": "10万",
            "unit": "卡",
            "label": "H100 GPU · 同一集群",
            "color": "#27E021"
          },
          {
            "x": 69,
            "y": 50,
            "val": "122",
            "unit": "天",
            "label": "从破土到点亮上线",
            "color": "#FFC700"
          },
          {
            "x": 44,
            "y": 77,
            "val": "孟菲斯",
            "unit": "",
            "label": "田纳西 · 电网就近供电",
            "color": "#15A7F0"
          }
        ],
        "desc": "默认数据内容",
        "publicKey": "pinsData",
        "publicLabel": "pinsData",
        "description": "默认数据内容"
      },
      {
        "key": "hlStyle",
        "label": "高亮样式",
        "type": "radio",
        "default": "glass",
        "options": [
          [
            "glass",
            "玻璃糖果"
          ],
          [
            "pill",
            "扁平药丸"
          ],
          [
            "underline",
            "下划线"
          ],
          [
            "text",
            "纯文字"
          ]
        ],
        "desc": "关键词高亮：玻璃糖果 / 扁平药丸 / 下划线 / 纯文字",
        "publicKey": "hlStyle",
        "publicLabel": "高亮样式",
        "description": "关键词高亮：玻璃糖果 / 扁平药丸 / 下划线 / 纯文字"
      },
      {
        "key": "hlTilt",
        "label": "高亮倾斜",
        "type": "slider",
        "default": 2,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "关键词胶囊旋转角度（仅糖果/药丸样式生效）",
        "publicKey": "hlTilt",
        "publicLabel": "高亮倾斜",
        "description": "关键词胶囊旋转角度（仅糖果/药丸样式生效）"
      },
      {
        "key": "mediaCount",
        "label": "图片槽数量",
        "type": "slider",
        "default": 1,
        "min": 0,
        "max": 1,
        "step": 1,
        "desc": "自适应单张大图(0=纯文案+数据卡)",
        "publicKey": "mediaCount",
        "publicLabel": "图片槽数量",
        "description": "自适应单张大图(0=纯文案+数据卡)"
      },
      {
        "key": "imageSide",
        "label": "配图位置",
        "type": "radio",
        "default": "right",
        "options": [
          [
            "left",
            "左侧"
          ],
          [
            "right",
            "右侧"
          ]
        ],
        "desc": "配图在左 / 右(有图时生效)",
        "publicKey": "imageSide",
        "publicLabel": "配图位置",
        "description": "配图在左 / 右(有图时生效)"
      },
      {
        "key": "accentTone",
        "label": "主色调",
        "type": "radio",
        "default": "blue",
        "options": [
          [
            "green",
            "绿"
          ],
          [
            "yellow",
            "黄"
          ],
          [
            "blue",
            "蓝"
          ],
          [
            "pink",
            "粉"
          ]
        ],
        "desc": "页面主色调(通用命名)",
        "publicKey": "accentTone",
        "publicLabel": "主色调",
        "description": "页面主色调(通用命名)"
      },
      {
        "key": "pinCount",
        "label": "标注数量",
        "type": "slider",
        "default": 3,
        "min": 0,
        "max": 3,
        "step": 1,
        "desc": "浮层标注 pin 数量",
        "publicKey": "pinCount",
        "publicLabel": "标注数量",
        "description": "浮层标注 pin 数量"
      },
      {
        "key": "focusEnabled",
        "label": "重点放大",
        "type": "toggle",
        "default": true,
        "desc": "是否放大某一标注",
        "publicKey": "focusEnabled",
        "publicLabel": "重点放大",
        "description": "是否放大某一标注"
      },
      {
        "key": "focusIndex",
        "label": "重点序号",
        "type": "slider",
        "default": 1,
        "min": 1,
        "max": 3,
        "step": 1,
        "maxFromKey": "pinCount",
        "desc": "被放大标注的序号",
        "publicKey": "focusIndex",
        "publicLabel": "重点序号",
        "description": "被放大标注的序号"
      },
      {
        "key": "showDecorations",
        "label": "装饰元素",
        "type": "toggle",
        "default": true,
        "desc": "星芒 / 圆环等点缀",
        "publicKey": "showDecorations",
        "publicLabel": "装饰元素",
        "description": "星芒 / 圆环等点缀"
      }
    ],
    "defaultProps": {
      "copy": {
        "text001": "算力军备 · CASE / COLOSSUS",
        "text002": "把超算，",
        "text003": "122 天",
        "text004": "盖出来",
        "text005": "大额融资的尽头是算力。xAI 在孟菲斯把十万张 H100 塞进同一个集群，用四个月完成传统需要数年的工程—— 资本、电力与工程速度，正在成为大模型竞赛真正的护城河。",
        "placeholder001": "超算中心 / GPU 集群 / 数据中心实拍"
      },
      "pinsData": [
        {
          "x": 31,
          "y": 26,
          "val": "10万",
          "unit": "卡",
          "label": "H100 GPU · 同一集群",
          "color": "#27E021"
        },
        {
          "x": 69,
          "y": 50,
          "val": "122",
          "unit": "天",
          "label": "从破土到点亮上线",
          "color": "#FFC700"
        },
        {
          "x": 44,
          "y": 77,
          "val": "孟菲斯",
          "unit": "",
          "label": "田纳西 · 电网就近供电",
          "color": "#15A7F0"
        }
      ],
      "hlStyle": "glass",
      "hlTilt": 2,
      "mediaCount": 1,
      "imageSide": "right",
      "accentTone": "blue",
      "pinCount": 3,
      "focusEnabled": true,
      "focusIndex": 1,
      "showDecorations": true
    }
  },
  {
    "key": "theme04_page057",
    "themeKey": "theme04",
    "pageNumber": 57,
    "layout": "THEME04-057",
    "slot": "imagestory",
    "label": "图片故事",
    "bgClass": "",
    "controls": [
      {
        "key": "hlStyle",
        "label": "高亮样式",
        "type": "radio",
        "default": "glass",
        "options": [
          [
            "glass",
            "玻璃糖果"
          ],
          [
            "pill",
            "扁平药丸"
          ],
          [
            "underline",
            "下划线"
          ],
          [
            "text",
            "纯文字"
          ]
        ],
        "desc": "关键词高亮：玻璃糖果 / 扁平药丸 / 下划线 / 纯文字",
        "publicKey": "hlStyle",
        "publicLabel": "高亮样式",
        "description": "关键词高亮：玻璃糖果 / 扁平药丸 / 下划线 / 纯文字"
      },
      {
        "key": "hlTilt",
        "label": "高亮倾斜",
        "type": "slider",
        "default": 2,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "关键词胶囊旋转角度（仅糖果/药丸样式生效）",
        "publicKey": "hlTilt",
        "publicLabel": "高亮倾斜",
        "description": "关键词胶囊旋转角度（仅糖果/药丸样式生效）"
      },
      {
        "key": "mediaCount",
        "label": "图片槽数量",
        "type": "slider",
        "default": 3,
        "min": 0,
        "max": 3,
        "step": 1,
        "desc": "自适应图片槽数量(按上传图片比例)",
        "publicKey": "mediaCount",
        "publicLabel": "图片槽数量",
        "description": "自适应图片槽数量(按上传图片比例)"
      },
      {
        "key": "mediaLayout",
        "label": "多图构图",
        "type": "radio",
        "default": "feature",
        "options": [
          [
            "feature",
            "特写网格"
          ],
          [
            "stack",
            "等列堆叠"
          ]
        ],
        "desc": "多张图片的排布构图",
        "publicKey": "mediaLayout",
        "publicLabel": "多图构图",
        "description": "多张图片的排布构图"
      },
      {
        "key": "statCount",
        "label": "数据标签",
        "type": "slider",
        "default": 3,
        "min": 0,
        "max": 3,
        "step": 1,
        "desc": "左侧数据标签数量",
        "publicKey": "statCount",
        "publicLabel": "数据标签",
        "description": "左侧数据标签数量"
      },
      {
        "key": "focusEnabled",
        "label": "重点突出",
        "type": "toggle",
        "default": false,
        "desc": "是否高亮某一张图片",
        "publicKey": "focusEnabled",
        "publicLabel": "重点突出",
        "description": "是否高亮某一张图片"
      },
      {
        "key": "focusIndex",
        "label": "重点序号",
        "type": "slider",
        "default": 1,
        "min": 1,
        "max": 3,
        "step": 1,
        "maxFromKey": "mediaCount",
        "desc": "被高亮图片的序号",
        "publicKey": "focusIndex",
        "publicLabel": "重点序号",
        "description": "被高亮图片的序号"
      },
      {
        "key": "showDecorations",
        "label": "装饰元素",
        "type": "toggle",
        "default": true,
        "desc": "星芒等点缀",
        "publicKey": "showDecorations",
        "publicLabel": "装饰元素",
        "description": "星芒等点缀"
      },
      {
        "key": "stats",
        "label": "数据标签",
        "type": "list",
        "default": [
          {
            "value": "110",
            "unit": "亿",
            "label": "2024 融资额",
            "color": "#15A7F0"
          },
          {
            "value": "190",
            "unit": "亿",
            "label": "估值 / 美元",
            "color": "#FFC700"
          },
          {
            "value": "数万",
            "unit": "张",
            "label": "H100/H200 储备",
            "color": "#27E021"
          }
        ],
        "desc": "左侧数据标签：数值 / 单位 / 说明 / 主色",
        "publicKey": "stats",
        "publicLabel": "数据标签",
        "description": "左侧数据标签：数值 / 单位 / 说明 / 主色"
      },
      {
        "key": "slotLabels",
        "label": "图片槽提示",
        "type": "list",
        "default": [
          "公司 / 机房实景",
          "创始团队 / Logo",
          "GPU 算力示意"
        ],
        "desc": "各图片槽占位提示文案",
        "publicKey": "slotLabels",
        "publicLabel": "图片槽提示",
        "description": "各图片槽占位提示文案"
      }
    ],
    "defaultProps": {
      "hlStyle": "glass",
      "hlTilt": 2,
      "mediaCount": 3,
      "mediaLayout": "feature",
      "statCount": 3,
      "focusEnabled": false,
      "focusIndex": 1,
      "showDecorations": true,
      "kicker": "典型案例 · 卖铲子的人",
      "name": "CoreWeave",
      "taglineLead": "淘金热里",
      "taglineKeyword": "卖铲子",
      "taglineTail": "，也赚翻了",
      "body": "从加密货币挖矿转型 AI 算力云，与 NVIDIA 锁定长期供应，手握数万张 H100/H200，成为 OpenAI、Stability AI 等公司的核心算力供应商——当所有模型公司都在抢 GPU，提前锁定算力的人反而成了稀缺标的。",
      "stats": [
        {
          "value": "110",
          "unit": "亿",
          "label": "2024 融资额",
          "color": "#15A7F0"
        },
        {
          "value": "190",
          "unit": "亿",
          "label": "估值 / 美元",
          "color": "#FFC700"
        },
        {
          "value": "数万",
          "unit": "张",
          "label": "H100/H200 储备",
          "color": "#27E021"
        }
      ],
      "slotLabels": [
        "公司 / 机房实景",
        "创始团队 / Logo",
        "GPU 算力示意"
      ]
    }
  },
  {
    "key": "theme04_page058",
    "themeKey": "theme04",
    "pageNumber": 58,
    "layout": "THEME04-058",
    "slot": "spotlight",
    "label": "焦点特写",
    "bgClass": "",
    "controls": [
      {
        "key": "copy",
        "label": "可见文案",
        "type": "list",
        "default": {
          "text001": "具身智能 · EMBODIED AI",
          "text002": "Figure AI",
          "text003": "人形机器人，硬科技的",
          "text004": "长周期下注",
          "text005": "资本愿意为「具身智能」的星辰大海买单，但兑现周期远长于软件——它需要长周期的技术积累， 是一场关于耐心的赌注。一旦机器人真正理解物理世界，想象空间将远超任何一个软件应用。",
          "placeholder001": "具身智能 / 人形机器人实拍",
          "text006": "FOCUS",
          "text007": "“",
          "text008": "真正的通用智能，需要一具身体来理解物理世界——这正是具身智能值得长期押注的理由。"
        },
        "desc": "页面中的固定可见文案、单位和图片槽提示",
        "publicKey": "copy",
        "publicLabel": "可见文案",
        "description": "页面中的固定可见文案、单位和图片槽提示"
      },
      {
        "key": "statsData",
        "label": "statsData",
        "type": "list",
        "default": [
          {
            "value": "6.8",
            "unit": "亿",
            "label": "2024 融资额 / 美元"
          },
          {
            "value": "2022",
            "unit": "",
            "label": "公司成立年份"
          },
          {
            "value": "人形",
            "unit": "机器人",
            "label": "具身智能赛道"
          }
        ],
        "desc": "默认数据内容",
        "publicKey": "statsData",
        "publicLabel": "statsData",
        "description": "默认数据内容"
      },
      {
        "key": "hlStyle",
        "label": "高亮样式",
        "type": "radio",
        "default": "glass",
        "options": [
          [
            "glass",
            "玻璃糖果"
          ],
          [
            "pill",
            "扁平药丸"
          ],
          [
            "underline",
            "下划线"
          ],
          [
            "text",
            "纯文字"
          ]
        ],
        "desc": "关键词高亮：玻璃糖果 / 扁平药丸 / 下划线 / 纯文字",
        "publicKey": "hlStyle",
        "publicLabel": "高亮样式",
        "description": "关键词高亮：玻璃糖果 / 扁平药丸 / 下划线 / 纯文字"
      },
      {
        "key": "hlTilt",
        "label": "高亮倾斜",
        "type": "slider",
        "default": 2,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "关键词胶囊旋转角度（仅糖果/药丸样式生效）",
        "publicKey": "hlTilt",
        "publicLabel": "高亮倾斜",
        "description": "关键词胶囊旋转角度（仅糖果/药丸样式生效）"
      },
      {
        "key": "mediaCount",
        "label": "图片槽数量",
        "type": "slider",
        "default": 1,
        "min": 0,
        "max": 1,
        "step": 1,
        "desc": "自适应单张大图(0=纯文案居中)",
        "publicKey": "mediaCount",
        "publicLabel": "图片槽数量",
        "description": "自适应单张大图(0=纯文案居中)"
      },
      {
        "key": "imageSide",
        "label": "配图位置",
        "type": "radio",
        "default": "left",
        "options": [
          [
            "left",
            "左侧"
          ],
          [
            "right",
            "右侧"
          ]
        ],
        "desc": "配图在左 / 右(有图时生效)",
        "publicKey": "imageSide",
        "publicLabel": "配图位置",
        "description": "配图在左 / 右(有图时生效)"
      },
      {
        "key": "accentTone",
        "label": "主色调",
        "type": "radio",
        "default": "green",
        "options": [
          [
            "green",
            "绿"
          ],
          [
            "yellow",
            "黄"
          ],
          [
            "blue",
            "蓝"
          ],
          [
            "pink",
            "粉"
          ]
        ],
        "desc": "页面主色调(通用命名)",
        "publicKey": "accentTone",
        "publicLabel": "主色调",
        "description": "页面主色调(通用命名)"
      },
      {
        "key": "statCount",
        "label": "数据卡数量",
        "type": "slider",
        "default": 3,
        "min": 0,
        "max": 3,
        "step": 1,
        "desc": "浮层数据卡数量",
        "publicKey": "statCount",
        "publicLabel": "数据卡数量",
        "description": "浮层数据卡数量"
      },
      {
        "key": "showQuote",
        "label": "底部金句",
        "type": "toggle",
        "default": true,
        "desc": "底部金句显隐",
        "publicKey": "showQuote",
        "publicLabel": "底部金句",
        "description": "底部金句显隐"
      },
      {
        "key": "showDecorations",
        "label": "装饰元素",
        "type": "toggle",
        "default": true,
        "desc": "星芒 / 圆环等点缀",
        "publicKey": "showDecorations",
        "publicLabel": "装饰元素",
        "description": "星芒 / 圆环等点缀"
      }
    ],
    "defaultProps": {
      "copy": {
        "text001": "具身智能 · EMBODIED AI",
        "text002": "Figure AI",
        "text003": "人形机器人，硬科技的",
        "text004": "长周期下注",
        "text005": "资本愿意为「具身智能」的星辰大海买单，但兑现周期远长于软件——它需要长周期的技术积累， 是一场关于耐心的赌注。一旦机器人真正理解物理世界，想象空间将远超任何一个软件应用。",
        "placeholder001": "具身智能 / 人形机器人实拍",
        "text006": "FOCUS",
        "text007": "“",
        "text008": "真正的通用智能，需要一具身体来理解物理世界——这正是具身智能值得长期押注的理由。"
      },
      "statsData": [
        {
          "value": "6.8",
          "unit": "亿",
          "label": "2024 融资额 / 美元"
        },
        {
          "value": "2022",
          "unit": "",
          "label": "公司成立年份"
        },
        {
          "value": "人形",
          "unit": "机器人",
          "label": "具身智能赛道"
        }
      ],
      "hlStyle": "glass",
      "hlTilt": 2,
      "mediaCount": 1,
      "imageSide": "left",
      "accentTone": "green",
      "statCount": 3,
      "showQuote": true,
      "showDecorations": true
    }
  },
  {
    "key": "theme04_page059",
    "themeKey": "theme04",
    "pageNumber": 59,
    "layout": "THEME04-059",
    "slot": "showcase",
    "label": "焦点机位",
    "bgClass": "",
    "controls": [
      {
        "key": "copy",
        "label": "可见文案",
        "type": "list",
        "default": {
          "placeholder001": "主图 · 资本现场主场",
          "text001": "焦点机位 · SHOWCASE",
          "text002": "同一笔大钱，",
          "text003": "不同的现场切面",
          "text004": "主图之外，再切三个机位——看资金、看团队、看入场券的争夺。"
        },
        "desc": "页面中的固定可见文案、单位和图片槽提示",
        "publicKey": "copy",
        "publicLabel": "可见文案",
        "description": "页面中的固定可见文案、单位和图片槽提示"
      },
      {
        "key": "thumbsData",
        "label": "thumbsData",
        "type": "list",
        "default": [
          {
            "no": "02",
            "tag": "算力",
            "note": "资金的去向",
            "color": "#27E021"
          },
          {
            "no": "03",
            "tag": "团队",
            "note": "稀缺的人才",
            "color": "#15A7F0"
          },
          {
            "no": "04",
            "tag": "路演",
            "note": "争夺入场券",
            "color": "#FFC700"
          }
        ],
        "desc": "默认数据内容",
        "publicKey": "thumbsData",
        "publicLabel": "thumbsData",
        "description": "默认数据内容"
      },
      {
        "key": "heroData",
        "label": "heroData",
        "type": "list",
        "default": {
          "no": "机位 01",
          "tag": "主场 · MAIN",
          "note": "签约现场：97 笔大额融资的缩影",
          "glyph": "01"
        },
        "desc": "默认数据内容",
        "publicKey": "heroData",
        "publicLabel": "heroData",
        "description": "默认数据内容"
      },
      {
        "key": "thumbCount",
        "label": "缩略图数量",
        "type": "slider",
        "default": 3,
        "min": 0,
        "max": 3,
        "step": 1,
        "desc": "右侧缩略图机位数量",
        "publicKey": "thumbCount",
        "publicLabel": "缩略图数量",
        "description": "右侧缩略图机位数量"
      },
      {
        "key": "mediaCount",
        "label": "图片槽画框数",
        "type": "slider",
        "default": 4,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "显示图片槽的画框数(主图优先)",
        "publicKey": "mediaCount",
        "publicLabel": "图片槽画框数",
        "description": "显示图片槽的画框数(主图优先)"
      },
      {
        "key": "imageSide",
        "label": "主图位置",
        "type": "radio",
        "default": "left",
        "options": [
          [
            "left",
            "左侧"
          ],
          [
            "right",
            "右侧"
          ]
        ],
        "desc": "主图在左 / 右",
        "publicKey": "imageSide",
        "publicLabel": "主图位置",
        "description": "主图在左 / 右"
      },
      {
        "key": "focusEnabled",
        "label": "选中环",
        "type": "toggle",
        "default": true,
        "desc": "缩略图选中环",
        "publicKey": "focusEnabled",
        "publicLabel": "选中环",
        "description": "缩略图选中环"
      },
      {
        "key": "focusIndex",
        "label": "选中序号",
        "type": "slider",
        "default": 1,
        "min": 1,
        "max": 3,
        "step": 1,
        "maxFromKey": "thumbCount",
        "desc": "被选中缩略图序号",
        "publicKey": "focusIndex",
        "publicLabel": "选中序号",
        "description": "被选中缩略图序号"
      },
      {
        "key": "showHeroCaption",
        "label": "主图注解",
        "type": "toggle",
        "default": true,
        "desc": "主图底部浮层注解",
        "publicKey": "showHeroCaption",
        "publicLabel": "主图注解",
        "description": "主图底部浮层注解"
      },
      {
        "key": "showDecorations",
        "label": "装饰元素",
        "type": "toggle",
        "default": true,
        "desc": "星芒等点缀",
        "publicKey": "showDecorations",
        "publicLabel": "装饰元素",
        "description": "星芒等点缀"
      }
    ],
    "defaultProps": {
      "copy": {
        "placeholder001": "主图 · 资本现场主场",
        "text001": "焦点机位 · SHOWCASE",
        "text002": "同一笔大钱，",
        "text003": "不同的现场切面",
        "text004": "主图之外，再切三个机位——看资金、看团队、看入场券的争夺。"
      },
      "thumbsData": [
        {
          "no": "02",
          "tag": "算力",
          "note": "资金的去向",
          "color": "#27E021"
        },
        {
          "no": "03",
          "tag": "团队",
          "note": "稀缺的人才",
          "color": "#15A7F0"
        },
        {
          "no": "04",
          "tag": "路演",
          "note": "争夺入场券",
          "color": "#FFC700"
        }
      ],
      "heroData": {
        "no": "机位 01",
        "tag": "主场 · MAIN",
        "note": "签约现场：97 笔大额融资的缩影",
        "glyph": "01"
      },
      "thumbCount": 3,
      "mediaCount": 4,
      "imageSide": "left",
      "focusEnabled": true,
      "focusIndex": 1,
      "showHeroCaption": true,
      "showDecorations": true
    }
  },
  {
    "key": "theme04_page060",
    "themeKey": "theme04",
    "pageNumber": 60,
    "layout": "THEME04-060",
    "slot": "polaroid",
    "label": "拍立得拼贴",
    "bgClass": "",
    "controls": [
      {
        "key": "copy",
        "label": "可见文案",
        "type": "list",
        "default": {
          "text001": "资本现场 · ON THE GROUND",
          "text002": "钱潮之下，是一张张",
          "text003": "真实的脸",
          "text004": "从旧金山的总部到田纳西的超算集群——把这一年的 AI 资本现场，钉在一面拍立得墙上。",
          "text005": "把「资本现场」的实拍照片拖进来 · 0–4 张"
        },
        "desc": "页面中的固定可见文案、单位和图片槽提示",
        "publicKey": "copy",
        "publicLabel": "可见文案",
        "description": "页面中的固定可见文案、单位和图片槽提示"
      },
      {
        "key": "shotsData",
        "label": "shotsData",
        "type": "list",
        "default": [
          {
            "cap": "旧金山 · 总部",
            "note": "SF / HQ",
            "tone": "#15A7F0",
            "ph": "公司总部 / 团队合影"
          },
          {
            "cap": "GPU 算力集群",
            "note": "COMPUTE",
            "tone": "#27E021",
            "ph": "数据中心 / GPU 集群实拍"
          },
          {
            "cap": "融资签约现场",
            "note": "THE DEAL",
            "tone": "#FFC700",
            "ph": "路演 / 签约 / 发布会现场"
          },
          {
            "cap": "创始人特写",
            "note": "FOUNDER",
            "tone": "#FF9FE2",
            "ph": "创始人 / 人物特写"
          }
        ],
        "desc": "默认数据内容",
        "publicKey": "shotsData",
        "publicLabel": "shotsData",
        "description": "默认数据内容"
      },
      {
        "key": "hlStyle",
        "label": "高亮样式",
        "type": "radio",
        "default": "glass",
        "options": [
          [
            "glass",
            "玻璃糖果"
          ],
          [
            "pill",
            "扁平药丸"
          ],
          [
            "underline",
            "下划线"
          ],
          [
            "text",
            "纯文字"
          ]
        ],
        "desc": "关键词高亮：玻璃糖果 / 扁平药丸 / 下划线 / 纯文字",
        "publicKey": "hlStyle",
        "publicLabel": "高亮样式",
        "description": "关键词高亮：玻璃糖果 / 扁平药丸 / 下划线 / 纯文字"
      },
      {
        "key": "hlTilt",
        "label": "高亮倾斜",
        "type": "slider",
        "default": 2,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "关键词胶囊旋转角度（仅糖果/药丸样式生效）",
        "publicKey": "hlTilt",
        "publicLabel": "高亮倾斜",
        "description": "关键词胶囊旋转角度（仅糖果/药丸样式生效）"
      },
      {
        "key": "mediaCount",
        "label": "照片数量",
        "type": "slider",
        "default": 4,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "拍立得照片数量(图片槽)",
        "publicKey": "mediaCount",
        "publicLabel": "照片数量",
        "description": "拍立得照片数量(图片槽)"
      },
      {
        "key": "mediaLayout",
        "label": "排布方式",
        "type": "radio",
        "default": "scatter",
        "options": [
          [
            "scatter",
            "散落"
          ],
          [
            "row",
            "整齐"
          ]
        ],
        "desc": "散落倾斜 / 整齐排列",
        "publicKey": "mediaLayout",
        "publicLabel": "排布方式",
        "description": "散落倾斜 / 整齐排列"
      },
      {
        "key": "focusEnabled",
        "label": "重点突出",
        "type": "toggle",
        "default": false,
        "desc": "是否高亮某一张照片",
        "publicKey": "focusEnabled",
        "publicLabel": "重点突出",
        "description": "是否高亮某一张照片"
      },
      {
        "key": "focusIndex",
        "label": "重点序号",
        "type": "slider",
        "default": 2,
        "min": 1,
        "max": 4,
        "step": 1,
        "maxFromKey": "mediaCount",
        "desc": "被高亮照片的序号",
        "publicKey": "focusIndex",
        "publicLabel": "重点序号",
        "description": "被高亮照片的序号"
      },
      {
        "key": "showCaptions",
        "label": "手写标签",
        "type": "toggle",
        "default": true,
        "desc": "照片底部标签显隐",
        "publicKey": "showCaptions",
        "publicLabel": "手写标签",
        "description": "照片底部标签显隐"
      },
      {
        "key": "showTape",
        "label": "彩色胶带",
        "type": "toggle",
        "default": true,
        "desc": "顶部彩色胶带显隐",
        "publicKey": "showTape",
        "publicLabel": "彩色胶带",
        "description": "顶部彩色胶带显隐"
      },
      {
        "key": "showDecorations",
        "label": "装饰元素",
        "type": "toggle",
        "default": true,
        "desc": "星芒 / 圆环等点缀",
        "publicKey": "showDecorations",
        "publicLabel": "装饰元素",
        "description": "星芒 / 圆环等点缀"
      }
    ],
    "defaultProps": {
      "copy": {
        "text001": "资本现场 · ON THE GROUND",
        "text002": "钱潮之下，是一张张",
        "text003": "真实的脸",
        "text004": "从旧金山的总部到田纳西的超算集群——把这一年的 AI 资本现场，钉在一面拍立得墙上。",
        "text005": "把「资本现场」的实拍照片拖进来 · 0–4 张"
      },
      "shotsData": [
        {
          "cap": "旧金山 · 总部",
          "note": "SF / HQ",
          "tone": "#15A7F0",
          "ph": "公司总部 / 团队合影"
        },
        {
          "cap": "GPU 算力集群",
          "note": "COMPUTE",
          "tone": "#27E021",
          "ph": "数据中心 / GPU 集群实拍"
        },
        {
          "cap": "融资签约现场",
          "note": "THE DEAL",
          "tone": "#FFC700",
          "ph": "路演 / 签约 / 发布会现场"
        },
        {
          "cap": "创始人特写",
          "note": "FOUNDER",
          "tone": "#FF9FE2",
          "ph": "创始人 / 人物特写"
        }
      ],
      "hlStyle": "glass",
      "hlTilt": 2,
      "mediaCount": 4,
      "mediaLayout": "scatter",
      "focusEnabled": false,
      "focusIndex": 2,
      "showCaptions": true,
      "showTape": true,
      "showDecorations": true
    }
  },
  {
    "key": "theme04_page061",
    "themeKey": "theme04",
    "pageNumber": 61,
    "layout": "THEME04-061",
    "slot": "split",
    "label": "分屏章节",
    "bgClass": "",
    "controls": [
      {
        "key": "copy",
        "label": "可见文案",
        "type": "list",
        "default": {
          "text001": "这一章，我们回答四个问题里",
          "text002": "最关键的",
          "text003": "几个"
        },
        "desc": "页面中的固定可见文案、单位和图片槽提示",
        "publicKey": "copy",
        "publicLabel": "可见文案",
        "description": "页面中的固定可见文案、单位和图片槽提示"
      },
      {
        "key": "objectivesData",
        "label": "objectivesData",
        "type": "list",
        "default": [
          {
            "no": "01",
            "zh": "资本高度集中的结构性风险",
            "en": "CONCENTRATION RISK"
          },
          {
            "no": "02",
            "zh": "估值与商业兑现的落差",
            "en": "VALUATION vs DELIVERY"
          },
          {
            "no": "03",
            "zh": "2025 的三段式演进路径",
            "en": "PATH AHEAD · 2025"
          },
          {
            "no": "04",
            "zh": "泡沫还是新基建之争",
            "en": "BUBBLE OR BEDROCK"
          }
        ],
        "desc": "默认数据内容",
        "publicKey": "objectivesData",
        "publicLabel": "objectivesData",
        "description": "默认数据内容"
      },
      {
        "key": "chapterData",
        "label": "chapterData",
        "type": "list",
        "default": {
          "zh": "风险与展望",
          "en": "RISK & OUTLOOK",
          "tag": "本章导读 · CHAPTER BRIEF"
        },
        "desc": "默认数据内容",
        "publicKey": "chapterData",
        "publicLabel": "chapterData",
        "description": "默认数据内容"
      },
      {
        "key": "partNumber",
        "label": "章节编号",
        "type": "slider",
        "default": 5,
        "min": 1,
        "max": 6,
        "step": 1,
        "desc": "大号 Part 编号",
        "publicKey": "partNumber",
        "publicLabel": "章节编号",
        "description": "大号 Part 编号"
      },
      {
        "key": "accentTone",
        "label": "主色调",
        "type": "radio",
        "default": "yellow",
        "options": [
          [
            "green",
            "绿"
          ],
          [
            "yellow",
            "黄"
          ],
          [
            "blue",
            "蓝"
          ],
          [
            "pink",
            "粉"
          ]
        ],
        "desc": "页面主色调",
        "publicKey": "accentTone",
        "publicLabel": "主色调",
        "description": "页面主色调"
      },
      {
        "key": "panelSide",
        "label": "面板侧",
        "type": "radio",
        "default": "left",
        "options": [
          [
            "left",
            "左"
          ],
          [
            "right",
            "右"
          ]
        ],
        "desc": "accent 面板在左 / 右",
        "publicKey": "panelSide",
        "publicLabel": "面板侧",
        "description": "accent 面板在左 / 右"
      },
      {
        "key": "showObjectives",
        "label": "议题清单",
        "type": "toggle",
        "default": true,
        "desc": "右侧议题清单",
        "publicKey": "showObjectives",
        "publicLabel": "议题清单",
        "description": "右侧议题清单"
      },
      {
        "key": "objectiveCount",
        "label": "议题条数",
        "type": "slider",
        "default": 3,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "议题条目数量",
        "publicKey": "itemCount",
        "publicLabel": "议题条数",
        "description": "议题条目数量"
      },
      {
        "key": "focusEnabled",
        "label": "当前高亮",
        "type": "toggle",
        "default": true,
        "desc": "高亮当前议题",
        "publicKey": "focusEnabled",
        "publicLabel": "当前高亮",
        "description": "高亮当前议题"
      },
      {
        "key": "focusIndex",
        "label": "当前序号",
        "type": "slider",
        "default": 1,
        "min": 1,
        "max": 4,
        "step": 1,
        "maxFromKey": "objectiveCount",
        "desc": "当前议题序号",
        "publicKey": "focusIndex",
        "publicLabel": "当前序号",
        "description": "当前议题序号"
      },
      {
        "key": "showDecorations",
        "label": "装饰元素",
        "type": "toggle",
        "default": true,
        "desc": "星芒等点缀",
        "publicKey": "showDecorations",
        "publicLabel": "装饰元素",
        "description": "星芒等点缀"
      }
    ],
    "defaultProps": {
      "copy": {
        "text001": "这一章，我们回答四个问题里",
        "text002": "最关键的",
        "text003": "几个"
      },
      "objectivesData": [
        {
          "no": "01",
          "zh": "资本高度集中的结构性风险",
          "en": "CONCENTRATION RISK"
        },
        {
          "no": "02",
          "zh": "估值与商业兑现的落差",
          "en": "VALUATION vs DELIVERY"
        },
        {
          "no": "03",
          "zh": "2025 的三段式演进路径",
          "en": "PATH AHEAD · 2025"
        },
        {
          "no": "04",
          "zh": "泡沫还是新基建之争",
          "en": "BUBBLE OR BEDROCK"
        }
      ],
      "chapterData": {
        "zh": "风险与展望",
        "en": "RISK & OUTLOOK",
        "tag": "本章导读 · CHAPTER BRIEF"
      },
      "partNumber": 5,
      "accentTone": "yellow",
      "panelSide": "left",
      "showObjectives": true,
      "objectiveCount": 3,
      "focusEnabled": true,
      "focusIndex": 1,
      "showDecorations": true
    }
  },
  {
    "key": "theme04_page062",
    "themeKey": "theme04",
    "pageNumber": 62,
    "layout": "THEME04-062",
    "slot": "compare",
    "label": "投资策略",
    "bgClass": "",
    "controls": [
      {
        "key": "hlStyle",
        "label": "高亮样式",
        "type": "radio",
        "default": "glass",
        "options": [
          [
            "glass",
            "玻璃糖果"
          ],
          [
            "pill",
            "扁平药丸"
          ],
          [
            "underline",
            "下划线"
          ],
          [
            "text",
            "纯文字"
          ]
        ],
        "desc": "关键词高亮：玻璃糖果 / 扁平药丸 / 下划线 / 纯文字",
        "publicKey": "hlStyle",
        "publicLabel": "高亮样式",
        "description": "关键词高亮：玻璃糖果 / 扁平药丸 / 下划线 / 纯文字"
      },
      {
        "key": "hlTilt",
        "label": "高亮倾斜",
        "type": "slider",
        "default": 2,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "关键词胶囊旋转角度（仅糖果/药丸样式生效）",
        "publicKey": "hlTilt",
        "publicLabel": "高亮倾斜",
        "description": "关键词胶囊旋转角度（仅糖果/药丸样式生效）"
      },
      {
        "key": "columnCount",
        "label": "列数",
        "type": "slider",
        "default": 2,
        "min": 1,
        "max": 2,
        "step": 1,
        "desc": "对比列数(=1 仅显示首列)",
        "publicKey": "columnCount",
        "publicLabel": "列数",
        "description": "对比列数(=1 仅显示首列)"
      },
      {
        "key": "itemCount",
        "label": "条目数量",
        "type": "slider",
        "default": 3,
        "min": 2,
        "max": 3,
        "step": 1,
        "desc": "每列展示的条目数量",
        "publicKey": "itemCount",
        "publicLabel": "条目数量",
        "description": "每列展示的条目数量"
      },
      {
        "key": "focusEnabled",
        "label": "重点突出",
        "type": "toggle",
        "default": false,
        "desc": "是否高亮某一列",
        "publicKey": "focusEnabled",
        "publicLabel": "重点突出",
        "description": "是否高亮某一列"
      },
      {
        "key": "focusSide",
        "label": "重点列",
        "type": "radio",
        "default": "left",
        "options": [
          [
            "left",
            "首列"
          ],
          [
            "right",
            "次列"
          ]
        ],
        "desc": "被高亮的列",
        "publicKey": "focusSide",
        "publicLabel": "重点列",
        "description": "被高亮的列"
      },
      {
        "key": "showIcons",
        "label": "图标显示",
        "type": "toggle",
        "default": true,
        "desc": "列首 ✓/✕ 图标",
        "publicKey": "showIcons",
        "publicLabel": "图标显示",
        "description": "列首 ✓/✕ 图标"
      },
      {
        "key": "showDecorations",
        "label": "装饰元素",
        "type": "toggle",
        "default": true,
        "desc": "星芒等点缀",
        "publicKey": "showDecorations",
        "publicLabel": "装饰元素",
        "description": "星芒等点缀"
      },
      {
        "key": "columns",
        "label": "对比列",
        "type": "list",
        "default": [
          {
            "side": "left",
            "color": "#27E021",
            "kind": "good",
            "heading": "看好方向",
            "sub": "有商业闭环 · 确定性强",
            "items": [
              {
                "title": "垂直应用",
                "desc": "商业模式清晰、已验证 PMF，如 Glean、Harvey。"
              },
              {
                "title": "基础设施中游",
                "desc": "数据标注、向量数据库等\"卖铲子\"环节，如 Scale AI、Pinecone。"
              },
              {
                "title": "具身智能",
                "desc": "人形机器人、自动驾驶等长周期硬科技，如 Figure AI。"
              }
            ]
          },
          {
            "side": "right",
            "color": "#FF2442",
            "kind": "bad",
            "heading": "谨慎对待",
            "sub": "泡沫高 · 壁垒低",
            "items": [
              {
                "title": "高估值无收入纯模型",
                "desc": "烧钱速度快、竞争壁垒低、估值泡沫大。"
              },
              {
                "title": "跟风的\"AI 包装\"项目",
                "desc": "仅在传统业务上加一层 LLM 调用，无核心壁垒。"
              },
              {
                "title": "无数据护城河的消费应用",
                "desc": "用户迁移成本低，易被大厂直接复制。"
              }
            ]
          }
        ],
        "desc": "对比列：标题 / 副标 / 颜色（每列条目 items 在 defaults 中）",
        "publicKey": "columns",
        "publicLabel": "对比列",
        "description": "对比列：标题 / 副标 / 颜色（每列条目 items 在 defaults 中）"
      }
    ],
    "defaultProps": {
      "hlStyle": "glass",
      "hlTilt": 2,
      "columnCount": 2,
      "itemCount": 3,
      "focusEnabled": false,
      "focusSide": "left",
      "showIcons": true,
      "showDecorations": true,
      "kicker": "投资展望 · 策略对比",
      "titleLead": "退潮之后，谁能",
      "titleKeyword": "留在牌桌",
      "columns": [
        {
          "side": "left",
          "color": "#27E021",
          "kind": "good",
          "heading": "看好方向",
          "sub": "有商业闭环 · 确定性强",
          "items": [
            {
              "title": "垂直应用",
              "desc": "商业模式清晰、已验证 PMF，如 Glean、Harvey。"
            },
            {
              "title": "基础设施中游",
              "desc": "数据标注、向量数据库等\"卖铲子\"环节，如 Scale AI、Pinecone。"
            },
            {
              "title": "具身智能",
              "desc": "人形机器人、自动驾驶等长周期硬科技，如 Figure AI。"
            }
          ]
        },
        {
          "side": "right",
          "color": "#FF2442",
          "kind": "bad",
          "heading": "谨慎对待",
          "sub": "泡沫高 · 壁垒低",
          "items": [
            {
              "title": "高估值无收入纯模型",
              "desc": "烧钱速度快、竞争壁垒低、估值泡沫大。"
            },
            {
              "title": "跟风的\"AI 包装\"项目",
              "desc": "仅在传统业务上加一层 LLM 调用，无核心壁垒。"
            },
            {
              "title": "无数据护城河的消费应用",
              "desc": "用户迁移成本低，易被大厂直接复制。"
            }
          ]
        }
      ]
    }
  },
  {
    "key": "theme04_page063",
    "themeKey": "theme04",
    "pageNumber": 63,
    "layout": "THEME04-063",
    "slot": "diptych",
    "label": "叙事对兑现",
    "bgClass": "",
    "controls": [
      {
        "key": "copy",
        "label": "可见文案",
        "type": "list",
        "default": {
          "text001": "范式转折 · NARRATIVE → PROOF",
          "text002": "从赌",
          "text003": "叙事",
          "text004": "，到看",
          "text005": "兑现",
          "text006": "VS"
        },
        "desc": "页面中的固定可见文案、单位和图片槽提示",
        "publicKey": "copy",
        "publicLabel": "可见文案",
        "description": "页面中的固定可见文案、单位和图片槽提示"
      },
      {
        "key": "sidesData",
        "label": "sidesData",
        "type": "list",
        "default": [
          {
            "key": "left",
            "era": "2023",
            "color": "#15A7F0",
            "title": "赌「叙事」",
            "en": "BET ON STORY",
            "desc": "愿景与团队即可撬动巨额融资，市场为想象空间买单。",
            "points": [
              "宏大愿景驱动估值",
              "PPT 与 Demo 即可融资",
              "增长速度优先于利润"
            ]
          },
          {
            "key": "right",
            "era": "2024",
            "color": "#27E021",
            "title": "看「兑现」",
            "en": "SHOW THE PROOF",
            "desc": "资本回归理性，营收与留存成为穿越周期的硬通货。",
            "points": [
              "营收能力成为分水岭",
              "单位经济模型被审视",
              "商业化进度决定下一轮"
            ]
          }
        ],
        "desc": "默认数据内容",
        "publicKey": "sidesData",
        "publicLabel": "sidesData",
        "description": "默认数据内容"
      },
      {
        "key": "hlStyle",
        "label": "高亮样式",
        "type": "radio",
        "default": "glass",
        "options": [
          [
            "glass",
            "玻璃糖果"
          ],
          [
            "pill",
            "扁平药丸"
          ],
          [
            "underline",
            "下划线"
          ],
          [
            "text",
            "纯文字"
          ]
        ],
        "desc": "关键词高亮：玻璃糖果 / 扁平药丸 / 下划线 / 纯文字",
        "publicKey": "hlStyle",
        "publicLabel": "高亮样式",
        "description": "关键词高亮：玻璃糖果 / 扁平药丸 / 下划线 / 纯文字"
      },
      {
        "key": "hlTilt",
        "label": "高亮倾斜",
        "type": "slider",
        "default": 2,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "关键词胶囊旋转角度（仅糖果/药丸样式生效）",
        "publicKey": "hlTilt",
        "publicLabel": "高亮倾斜",
        "description": "关键词胶囊旋转角度（仅糖果/药丸样式生效）"
      },
      {
        "key": "mediaCount",
        "label": "图片槽数量",
        "type": "slider",
        "default": 2,
        "min": 0,
        "max": 2,
        "step": 1,
        "desc": "带图片槽的面板数(其余转霓虹标题态)",
        "publicKey": "mediaCount",
        "publicLabel": "图片槽数量",
        "description": "带图片槽的面板数(其余转霓虹标题态)"
      },
      {
        "key": "pointCount",
        "label": "要点数量",
        "type": "slider",
        "default": 3,
        "min": 0,
        "max": 3,
        "step": 1,
        "desc": "每侧对位要点数量",
        "publicKey": "pointCount",
        "publicLabel": "要点数量",
        "description": "每侧对位要点数量"
      },
      {
        "key": "focusSide",
        "label": "重点侧",
        "type": "radio",
        "default": "none",
        "options": [
          [
            "none",
            "不强调"
          ],
          [
            "left",
            "左侧"
          ],
          [
            "right",
            "右侧"
          ]
        ],
        "desc": "高亮左 / 右面板",
        "publicKey": "focusSide",
        "publicLabel": "重点侧",
        "description": "高亮左 / 右面板"
      },
      {
        "key": "showVsBadge",
        "label": "VS 徽章",
        "type": "toggle",
        "default": true,
        "desc": "中缝 VS 徽章显隐",
        "publicKey": "showVsBadge",
        "publicLabel": "VS 徽章",
        "description": "中缝 VS 徽章显隐"
      },
      {
        "key": "showDecorations",
        "label": "装饰元素",
        "type": "toggle",
        "default": true,
        "desc": "星芒 / 圆环等点缀",
        "publicKey": "showDecorations",
        "publicLabel": "装饰元素",
        "description": "星芒 / 圆环等点缀"
      }
    ],
    "defaultProps": {
      "copy": {
        "text001": "范式转折 · NARRATIVE → PROOF",
        "text002": "从赌",
        "text003": "叙事",
        "text004": "，到看",
        "text005": "兑现",
        "text006": "VS"
      },
      "sidesData": [
        {
          "key": "left",
          "era": "2023",
          "color": "#15A7F0",
          "title": "赌「叙事」",
          "en": "BET ON STORY",
          "desc": "愿景与团队即可撬动巨额融资，市场为想象空间买单。",
          "points": [
            "宏大愿景驱动估值",
            "PPT 与 Demo 即可融资",
            "增长速度优先于利润"
          ]
        },
        {
          "key": "right",
          "era": "2024",
          "color": "#27E021",
          "title": "看「兑现」",
          "en": "SHOW THE PROOF",
          "desc": "资本回归理性，营收与留存成为穿越周期的硬通货。",
          "points": [
            "营收能力成为分水岭",
            "单位经济模型被审视",
            "商业化进度决定下一轮"
          ]
        }
      ],
      "hlStyle": "glass",
      "hlTilt": 2,
      "mediaCount": 2,
      "pointCount": 3,
      "focusSide": "none",
      "showVsBadge": true,
      "showDecorations": true
    }
  },
  {
    "key": "theme04_page064",
    "themeKey": "theme04",
    "pageNumber": 64,
    "layout": "THEME04-064",
    "slot": "riskchain",
    "label": "风险传导",
    "bgClass": "",
    "controls": [
      {
        "key": "hlStyle",
        "label": "高亮样式",
        "type": "radio",
        "default": "glass",
        "options": [
          [
            "glass",
            "玻璃糖果"
          ],
          [
            "pill",
            "扁平药丸"
          ],
          [
            "underline",
            "下划线"
          ],
          [
            "text",
            "纯文字"
          ]
        ],
        "desc": "关键词高亮：玻璃糖果 / 扁平药丸 / 下划线 / 纯文字",
        "publicKey": "hlStyle",
        "publicLabel": "高亮样式",
        "description": "关键词高亮：玻璃糖果 / 扁平药丸 / 下划线 / 纯文字"
      },
      {
        "key": "hlTilt",
        "label": "高亮倾斜",
        "type": "slider",
        "default": 2,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "关键词胶囊旋转角度（仅糖果/药丸样式生效）",
        "publicKey": "hlTilt",
        "publicLabel": "高亮倾斜",
        "description": "关键词胶囊旋转角度（仅糖果/药丸样式生效）"
      },
      {
        "key": "chainCount",
        "label": "链路数量",
        "type": "slider",
        "default": 3,
        "min": 1,
        "max": 3,
        "step": 1,
        "desc": "展示的状态传导链数量",
        "publicKey": "chainCount",
        "publicLabel": "链路数量",
        "description": "展示的状态传导链数量"
      },
      {
        "key": "focusEnabled",
        "label": "重点突出",
        "type": "toggle",
        "default": false,
        "desc": "是否高亮某一条链路",
        "publicKey": "focusEnabled",
        "publicLabel": "重点突出",
        "description": "是否高亮某一条链路"
      },
      {
        "key": "focusIndex",
        "label": "重点序号",
        "type": "slider",
        "default": 1,
        "min": 1,
        "max": 3,
        "step": 1,
        "maxFromKey": "chainCount",
        "desc": "被高亮链路的序号",
        "publicKey": "focusIndex",
        "publicLabel": "重点序号",
        "description": "被高亮链路的序号"
      },
      {
        "key": "showArrows",
        "label": "箭头连接",
        "type": "toggle",
        "default": true,
        "desc": "节点间的箭头流向",
        "publicKey": "showArrows",
        "publicLabel": "箭头连接",
        "description": "节点间的箭头流向"
      },
      {
        "key": "showOutcome",
        "label": "结果强调",
        "type": "toggle",
        "default": true,
        "desc": "末端结果节点高亮",
        "publicKey": "showOutcome",
        "publicLabel": "结果强调",
        "description": "末端结果节点高亮"
      },
      {
        "key": "showDecorations",
        "label": "装饰元素",
        "type": "toggle",
        "default": true,
        "desc": "星芒等点缀",
        "publicKey": "showDecorations",
        "publicLabel": "装饰元素",
        "description": "星芒等点缀"
      },
      {
        "key": "chains",
        "label": "传导链",
        "type": "list",
        "default": [
          {
            "label": "估值泡沫",
            "color": "#FF2442",
            "nodes": [
              "高估值泡沫",
              "盈利模式未验证",
              "烧钱速度过快",
              "资本耐心耗尽"
            ],
            "outcome": "估值回调 · 倒闭潮"
          },
          {
            "label": "监管压力",
            "color": "#FFC700",
            "nodes": [
              "监管收紧",
              "AI 安全法案",
              "合规成本激增"
            ],
            "outcome": "不确定性升高"
          },
          {
            "label": "竞争挤压",
            "color": "#15A7F0",
            "nodes": [
              "大厂自研",
              "开源模型普及",
              "商业化壁垒降低"
            ],
            "outcome": "API 收费承压"
          }
        ],
        "desc": "传导链：标签 / 节点 / 结果 / 颜色",
        "publicKey": "chains",
        "publicLabel": "传导链",
        "description": "传导链：标签 / 节点 / 结果 / 颜色"
      }
    ],
    "defaultProps": {
      "hlStyle": "glass",
      "hlTilt": 2,
      "chainCount": 3,
      "focusEnabled": false,
      "focusIndex": 1,
      "showArrows": true,
      "showOutcome": true,
      "showDecorations": true,
      "kicker": "风险研判 · 传导链条",
      "titleLead": "盛宴仍在，但",
      "titleKeyword": "风险在累积",
      "chains": [
        {
          "label": "估值泡沫",
          "color": "#FF2442",
          "nodes": [
            "高估值泡沫",
            "盈利模式未验证",
            "烧钱速度过快",
            "资本耐心耗尽"
          ],
          "outcome": "估值回调 · 倒闭潮"
        },
        {
          "label": "监管压力",
          "color": "#FFC700",
          "nodes": [
            "监管收紧",
            "AI 安全法案",
            "合规成本激增"
          ],
          "outcome": "不确定性升高"
        },
        {
          "label": "竞争挤压",
          "color": "#15A7F0",
          "nodes": [
            "大厂自研",
            "开源模型普及",
            "商业化壁垒降低"
          ],
          "outcome": "API 收费承压"
        }
      ]
    }
  },
  {
    "key": "theme04_page065",
    "themeKey": "theme04",
    "pageNumber": 65,
    "layout": "THEME04-065",
    "slot": "roadmap",
    "label": "资本三段式",
    "bgClass": "",
    "controls": [
      {
        "key": "copy",
        "label": "可见文案",
        "type": "list",
        "default": {
          "text001": "资本节奏 · ROADMAP",
          "text002": "一年三步：从赌叙事，到",
          "text003": "看兑现",
          "text004": "「",
          "text005": "」",
          "text006": "STEP",
          "text007": "节节收窄",
          "text008": "资本叙事的重心逐级上移：愿景 → 算力 → 兑现 · 阶段为调研整理（报告 4 结论 / 示意）"
        },
        "desc": "页面中的固定可见文案、单位和图片槽提示",
        "publicKey": "copy",
        "publicLabel": "可见文案",
        "description": "页面中的固定可见文案、单位和图片槽提示"
      },
      {
        "key": "stepsData",
        "label": "stepsData",
        "type": "list",
        "default": [
          {
            "tag": "2024 H1",
            "theme": "叙事驱动",
            "phrase": "为愿景下注",
            "desc": "估值跑在收入前面，资本愿意为故事埋单。",
            "color": "#27E021"
          },
          {
            "tag": "2024 H2",
            "theme": "算力卡位",
            "phrase": "卖铲子的赢",
            "desc": "资金大举涌入算力与云，谁锁住 GPU 谁掌握主动。",
            "color": "#15A7F0"
          },
          {
            "tag": "2025 起",
            "theme": "兑现为王",
            "phrase": "看 ARR 说话",
            "desc": "能把模型变成真实收入的公司，才留在牌桌上。",
            "color": "#FFC700"
          },
          {
            "tag": "前瞻",
            "theme": "集中加剧",
            "phrase": "强者通吃",
            "desc": "资金继续向头部、单一赛道与少数枢纽收拢。",
            "color": "#FF9FE2"
          }
        ],
        "desc": "默认数据内容",
        "publicKey": "stepsData",
        "publicLabel": "stepsData",
        "description": "默认数据内容"
      },
      {
        "key": "hlStyle",
        "label": "高亮样式",
        "type": "radio",
        "default": "glass",
        "options": [
          [
            "glass",
            "玻璃糖果"
          ],
          [
            "pill",
            "扁平药丸"
          ],
          [
            "underline",
            "下划线"
          ],
          [
            "text",
            "纯文字"
          ]
        ],
        "desc": "关键词高亮：玻璃糖果 / 扁平药丸 / 下划线 / 纯文字",
        "publicKey": "hlStyle",
        "publicLabel": "高亮样式",
        "description": "关键词高亮：玻璃糖果 / 扁平药丸 / 下划线 / 纯文字"
      },
      {
        "key": "hlTilt",
        "label": "高亮倾斜",
        "type": "slider",
        "default": 2,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "关键词胶囊旋转角度（仅糖果/药丸样式生效）",
        "publicKey": "hlTilt",
        "publicLabel": "高亮倾斜",
        "description": "关键词胶囊旋转角度（仅糖果/药丸样式生效）"
      },
      {
        "key": "stepCount",
        "label": "阶段数",
        "type": "slider",
        "default": 3,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "展示的阶段数量",
        "publicKey": "stepCount",
        "publicLabel": "阶段数",
        "description": "展示的阶段数量"
      },
      {
        "key": "layoutVariant",
        "label": "基座形态",
        "type": "radio",
        "default": "ascend",
        "options": [
          [
            "ascend",
            "升阶"
          ],
          [
            "flat",
            "等高"
          ]
        ],
        "desc": "逐级抬高 / 等高平台",
        "publicKey": "layoutVariant",
        "publicLabel": "基座形态",
        "description": "逐级抬高 / 等高平台"
      },
      {
        "key": "focusEnabled",
        "label": "重点突出",
        "type": "toggle",
        "default": false,
        "desc": "是否高亮某一阶段",
        "publicKey": "focusEnabled",
        "publicLabel": "重点突出",
        "description": "是否高亮某一阶段"
      },
      {
        "key": "focusIndex",
        "label": "重点序号",
        "type": "slider",
        "default": 3,
        "min": 1,
        "max": 4,
        "step": 1,
        "maxFromKey": "stepCount",
        "desc": "被高亮阶段的序号",
        "publicKey": "focusIndex",
        "publicLabel": "重点序号",
        "description": "被高亮阶段的序号"
      },
      {
        "key": "showGhost",
        "label": "幽灵编号",
        "type": "toggle",
        "default": true,
        "desc": "背景巨型描边编号显隐",
        "publicKey": "showGhost",
        "publicLabel": "幽灵编号",
        "description": "背景巨型描边编号显隐"
      },
      {
        "key": "showBaseline",
        "label": "底部基线",
        "type": "toggle",
        "default": true,
        "desc": "阶梯底部基线显隐",
        "publicKey": "showBaseline",
        "publicLabel": "底部基线",
        "description": "阶梯底部基线显隐"
      },
      {
        "key": "showPhrase",
        "label": "阶段金句",
        "type": "toggle",
        "default": true,
        "desc": "阶段金句短语显隐",
        "publicKey": "showPhrase",
        "publicLabel": "阶段金句",
        "description": "阶段金句短语显隐"
      },
      {
        "key": "showDecorations",
        "label": "装饰元素",
        "type": "toggle",
        "default": true,
        "desc": "星芒等点缀",
        "publicKey": "showDecorations",
        "publicLabel": "装饰元素",
        "description": "星芒等点缀"
      }
    ],
    "defaultProps": {
      "copy": {
        "text001": "资本节奏 · ROADMAP",
        "text002": "一年三步：从赌叙事，到",
        "text003": "看兑现",
        "text004": "「",
        "text005": "」",
        "text006": "STEP",
        "text007": "节节收窄",
        "text008": "资本叙事的重心逐级上移：愿景 → 算力 → 兑现 · 阶段为调研整理（报告 4 结论 / 示意）"
      },
      "stepsData": [
        {
          "tag": "2024 H1",
          "theme": "叙事驱动",
          "phrase": "为愿景下注",
          "desc": "估值跑在收入前面，资本愿意为故事埋单。",
          "color": "#27E021"
        },
        {
          "tag": "2024 H2",
          "theme": "算力卡位",
          "phrase": "卖铲子的赢",
          "desc": "资金大举涌入算力与云，谁锁住 GPU 谁掌握主动。",
          "color": "#15A7F0"
        },
        {
          "tag": "2025 起",
          "theme": "兑现为王",
          "phrase": "看 ARR 说话",
          "desc": "能把模型变成真实收入的公司，才留在牌桌上。",
          "color": "#FFC700"
        },
        {
          "tag": "前瞻",
          "theme": "集中加剧",
          "phrase": "强者通吃",
          "desc": "资金继续向头部、单一赛道与少数枢纽收拢。",
          "color": "#FF9FE2"
        }
      ],
      "hlStyle": "glass",
      "hlTilt": 2,
      "stepCount": 3,
      "layoutVariant": "ascend",
      "focusEnabled": false,
      "focusIndex": 3,
      "showGhost": true,
      "showBaseline": true,
      "showPhrase": true,
      "showDecorations": true
    }
  },
  {
    "key": "theme04_page066",
    "themeKey": "theme04",
    "pageNumber": 66,
    "layout": "THEME04-066",
    "slot": "gantt",
    "label": "泳道甘特",
    "bgClass": "",
    "controls": [
      {
        "key": "copy",
        "label": "可见文案",
        "type": "list",
        "default": {
          "text001": "资本节奏 · 2024 FUNDING CALENDAR",
          "text002": "一整年的",
          "text003": "资本节奏",
          "text004": "Q",
          "text005": "亿",
          "text006": "资本节奏",
          "text007": "每个标记 = 一笔披露融资 · 区间条 = 同年多轮 · 月份为示意（报告案例 · 调研整理）"
        },
        "desc": "页面中的固定可见文案、单位和图片槽提示",
        "publicKey": "copy",
        "publicLabel": "可见文案",
        "description": "页面中的固定可见文案、单位和图片槽提示"
      },
      {
        "key": "lanesData",
        "label": "lanesData",
        "type": "list",
        "default": [
          {
            "name": "OpenAI",
            "en": "GENERAL",
            "color": "#27E021",
            "ev": [
              {
                "m": 9,
                "amt": "66"
              }
            ]
          },
          {
            "name": "Databricks",
            "en": "DATA",
            "color": "#FFC700",
            "ev": [
              {
                "m": 11,
                "amt": "100"
              }
            ]
          },
          {
            "name": "Anthropic",
            "en": "SAFETY",
            "color": "#15A7F0",
            "ev": [
              {
                "m": 2,
                "amt": "27"
              },
              {
                "m": 10,
                "amt": "40"
              }
            ]
          },
          {
            "name": "xAI",
            "en": "GENERAL",
            "color": "#FF9FE2",
            "ev": [
              {
                "m": 4,
                "amt": "60"
              },
              {
                "m": 11,
                "amt": "50"
              }
            ]
          },
          {
            "name": "CoreWeave",
            "en": "COMPUTE",
            "color": "#27E021",
            "ev": [
              {
                "m": 4,
                "amt": "75"
              }
            ]
          },
          {
            "name": "Figure AI",
            "en": "ROBOTICS",
            "color": "#15A7F0",
            "ev": [
              {
                "m": 1,
                "amt": "6.7"
              }
            ]
          }
        ],
        "desc": "默认数据内容",
        "publicKey": "lanesData",
        "publicLabel": "lanesData",
        "description": "默认数据内容"
      },
      {
        "key": "monthsData",
        "label": "monthsData",
        "type": "list",
        "default": [
          "J",
          "F",
          "M",
          "A",
          "M",
          "J",
          "J",
          "A",
          "S",
          "O",
          "N",
          "D"
        ],
        "desc": "默认数据内容",
        "publicKey": "monthsData",
        "publicLabel": "monthsData",
        "description": "默认数据内容"
      },
      {
        "key": "hlStyle",
        "label": "高亮样式",
        "type": "radio",
        "default": "glass",
        "options": [
          [
            "glass",
            "玻璃糖果"
          ],
          [
            "pill",
            "扁平药丸"
          ],
          [
            "underline",
            "下划线"
          ],
          [
            "text",
            "纯文字"
          ]
        ],
        "desc": "关键词高亮：玻璃糖果 / 扁平药丸 / 下划线 / 纯文字",
        "publicKey": "hlStyle",
        "publicLabel": "高亮样式",
        "description": "关键词高亮：玻璃糖果 / 扁平药丸 / 下划线 / 纯文字"
      },
      {
        "key": "hlTilt",
        "label": "高亮倾斜",
        "type": "slider",
        "default": 2,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "关键词胶囊旋转角度（仅糖果/药丸样式生效）",
        "publicKey": "hlTilt",
        "publicLabel": "高亮倾斜",
        "description": "关键词胶囊旋转角度（仅糖果/药丸样式生效）"
      },
      {
        "key": "laneCount",
        "label": "公司泳道数",
        "type": "slider",
        "default": 6,
        "min": 3,
        "max": 6,
        "step": 1,
        "desc": "展示的公司泳道数量",
        "publicKey": "laneCount",
        "publicLabel": "公司泳道数",
        "description": "展示的公司泳道数量"
      },
      {
        "key": "focusEnabled",
        "label": "重点突出",
        "type": "toggle",
        "default": true,
        "desc": "是否高亮某一泳道",
        "publicKey": "focusEnabled",
        "publicLabel": "重点突出",
        "description": "是否高亮某一泳道"
      },
      {
        "key": "focusIndex",
        "label": "重点序号",
        "type": "slider",
        "default": 1,
        "min": 1,
        "max": 6,
        "step": 1,
        "maxFromKey": "laneCount",
        "desc": "被高亮泳道的序号",
        "publicKey": "focusIndex",
        "publicLabel": "重点序号",
        "description": "被高亮泳道的序号"
      },
      {
        "key": "showSpan",
        "label": "多轮区间条",
        "type": "toggle",
        "default": true,
        "desc": "同年多轮的区间连接条",
        "publicKey": "showSpan",
        "publicLabel": "多轮区间条",
        "description": "同年多轮的区间连接条"
      },
      {
        "key": "showAmount",
        "label": "数值标签",
        "type": "toggle",
        "default": true,
        "desc": "事件数值标签",
        "publicKey": "showValueLabels",
        "publicLabel": "数值标签",
        "description": "事件数值标签"
      },
      {
        "key": "showQuarterTint",
        "label": "时间分区",
        "type": "toggle",
        "default": true,
        "desc": "时间段背景分区淡色块",
        "publicKey": "showQuarterTint",
        "publicLabel": "时间分区",
        "description": "时间段背景分区淡色块"
      },
      {
        "key": "showDecorations",
        "label": "装饰元素",
        "type": "toggle",
        "default": true,
        "desc": "星芒等点缀",
        "publicKey": "showDecorations",
        "publicLabel": "装饰元素",
        "description": "星芒等点缀"
      }
    ],
    "defaultProps": {
      "copy": {
        "text001": "资本节奏 · 2024 FUNDING CALENDAR",
        "text002": "一整年的",
        "text003": "资本节奏",
        "text004": "Q",
        "text005": "亿",
        "text006": "资本节奏",
        "text007": "每个标记 = 一笔披露融资 · 区间条 = 同年多轮 · 月份为示意（报告案例 · 调研整理）"
      },
      "lanesData": [
        {
          "name": "OpenAI",
          "en": "GENERAL",
          "color": "#27E021",
          "ev": [
            {
              "m": 9,
              "amt": "66"
            }
          ]
        },
        {
          "name": "Databricks",
          "en": "DATA",
          "color": "#FFC700",
          "ev": [
            {
              "m": 11,
              "amt": "100"
            }
          ]
        },
        {
          "name": "Anthropic",
          "en": "SAFETY",
          "color": "#15A7F0",
          "ev": [
            {
              "m": 2,
              "amt": "27"
            },
            {
              "m": 10,
              "amt": "40"
            }
          ]
        },
        {
          "name": "xAI",
          "en": "GENERAL",
          "color": "#FF9FE2",
          "ev": [
            {
              "m": 4,
              "amt": "60"
            },
            {
              "m": 11,
              "amt": "50"
            }
          ]
        },
        {
          "name": "CoreWeave",
          "en": "COMPUTE",
          "color": "#27E021",
          "ev": [
            {
              "m": 4,
              "amt": "75"
            }
          ]
        },
        {
          "name": "Figure AI",
          "en": "ROBOTICS",
          "color": "#15A7F0",
          "ev": [
            {
              "m": 1,
              "amt": "6.7"
            }
          ]
        }
      ],
      "monthsData": [
        "J",
        "F",
        "M",
        "A",
        "M",
        "J",
        "J",
        "A",
        "S",
        "O",
        "N",
        "D"
      ],
      "hlStyle": "glass",
      "hlTilt": 2,
      "laneCount": 6,
      "focusEnabled": true,
      "focusIndex": 1,
      "showSpan": true,
      "showAmount": true,
      "showQuarterTint": true,
      "showDecorations": true
    }
  },
  {
    "key": "theme04_page067",
    "themeKey": "theme04",
    "pageNumber": 67,
    "layout": "THEME04-067",
    "slot": "metro",
    "label": "资本地铁线",
    "bgClass": "",
    "controls": [
      {
        "key": "copy",
        "label": "可见文案",
        "type": "list",
        "default": {
          "text001": "资本时间线 · CAPITAL LINE",
          "text002": "一年六站，",
          "text003": "资本一路加速",
          "text004": "节节攀升",
          "text005": "从基础模型回暖到头部冲刺 IPO，2024 资本沿这条线一路加速 · 数据为调研整理（报告 2.x · 示意）"
        },
        "desc": "页面中的固定可见文案、单位和图片槽提示",
        "publicKey": "copy",
        "publicLabel": "可见文案",
        "description": "页面中的固定可见文案、单位和图片槽提示"
      },
      {
        "key": "nodesData",
        "label": "nodesData",
        "type": "list",
        "default": [
          {
            "tag": "2023 Q4",
            "name": "资本回暖",
            "val": "基础模型重启大额融资",
            "color": "#27E021"
          },
          {
            "tag": "2024 Q1",
            "name": "Anthropic 加注",
            "val": "亚马逊再追投 40 亿",
            "color": "#15A7F0"
          },
          {
            "tag": "2024 Q2",
            "name": "xAI B 轮",
            "val": "单笔募资 60 亿美元",
            "color": "#FFC700"
          },
          {
            "tag": "2024 Q4",
            "name": "Databricks",
            "val": "史上最大轮 100 亿",
            "color": "#FF9FE2"
          },
          {
            "tag": "2024 末",
            "name": "OpenAI",
            "val": "66 亿 · 估值 1570 亿",
            "color": "#27E021"
          },
          {
            "tag": "2025 展望",
            "name": "IPO 窗口",
            "val": "头部排队冲刺上市",
            "color": "#15A7F0"
          }
        ],
        "desc": "默认数据内容",
        "publicKey": "nodesData",
        "publicLabel": "nodesData",
        "description": "默认数据内容"
      },
      {
        "key": "hlStyle",
        "label": "高亮样式",
        "type": "radio",
        "default": "glass",
        "options": [
          [
            "glass",
            "玻璃糖果"
          ],
          [
            "pill",
            "扁平药丸"
          ],
          [
            "underline",
            "下划线"
          ],
          [
            "text",
            "纯文字"
          ]
        ],
        "desc": "关键词高亮：玻璃糖果 / 扁平药丸 / 下划线 / 纯文字",
        "publicKey": "hlStyle",
        "publicLabel": "高亮样式",
        "description": "关键词高亮：玻璃糖果 / 扁平药丸 / 下划线 / 纯文字"
      },
      {
        "key": "hlTilt",
        "label": "高亮倾斜",
        "type": "slider",
        "default": 2,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "关键词胶囊旋转角度（仅糖果/药丸样式生效）",
        "publicKey": "hlTilt",
        "publicLabel": "高亮倾斜",
        "description": "关键词胶囊旋转角度（仅糖果/药丸样式生效）"
      },
      {
        "key": "nodeCount",
        "label": "站点数量",
        "type": "slider",
        "default": 6,
        "min": 3,
        "max": 6,
        "step": 1,
        "desc": "地铁线上的里程碑站点数量",
        "publicKey": "nodeCount",
        "publicLabel": "站点数量",
        "description": "地铁线上的里程碑站点数量"
      },
      {
        "key": "focusEnabled",
        "label": "重点突出",
        "type": "toggle",
        "default": true,
        "desc": "是否高亮某一站",
        "publicKey": "focusEnabled",
        "publicLabel": "重点突出",
        "description": "是否高亮某一站"
      },
      {
        "key": "focusIndex",
        "label": "重点序号",
        "type": "slider",
        "default": 3,
        "min": 1,
        "max": 6,
        "step": 1,
        "maxFromKey": "nodeCount",
        "desc": "被高亮站点的序号",
        "publicKey": "focusIndex",
        "publicLabel": "重点序号",
        "description": "被高亮站点的序号"
      },
      {
        "key": "alternate",
        "label": "上下交替",
        "type": "toggle",
        "default": true,
        "desc": "标签在线上 / 线下交替（关=全部在线下）",
        "publicKey": "alternate",
        "publicLabel": "上下交替",
        "description": "标签在线上 / 线下交替（关=全部在线下）"
      },
      {
        "key": "showValue",
        "label": "结论行",
        "type": "toggle",
        "default": true,
        "desc": "站点数值 / 结论行显隐",
        "publicKey": "showValueLabels",
        "publicLabel": "结论行",
        "description": "站点数值 / 结论行显隐"
      },
      {
        "key": "showLine",
        "label": "贯穿线",
        "type": "toggle",
        "default": true,
        "desc": "贯穿全幅的地铁线显隐",
        "publicKey": "showLine",
        "publicLabel": "贯穿线",
        "description": "贯穿全幅的地铁线显隐"
      },
      {
        "key": "showDecorations",
        "label": "装饰元素",
        "type": "toggle",
        "default": true,
        "desc": "星芒等点缀",
        "publicKey": "showDecorations",
        "publicLabel": "装饰元素",
        "description": "星芒等点缀"
      }
    ],
    "defaultProps": {
      "copy": {
        "text001": "资本时间线 · CAPITAL LINE",
        "text002": "一年六站，",
        "text003": "资本一路加速",
        "text004": "节节攀升",
        "text005": "从基础模型回暖到头部冲刺 IPO，2024 资本沿这条线一路加速 · 数据为调研整理（报告 2.x · 示意）"
      },
      "nodesData": [
        {
          "tag": "2023 Q4",
          "name": "资本回暖",
          "val": "基础模型重启大额融资",
          "color": "#27E021"
        },
        {
          "tag": "2024 Q1",
          "name": "Anthropic 加注",
          "val": "亚马逊再追投 40 亿",
          "color": "#15A7F0"
        },
        {
          "tag": "2024 Q2",
          "name": "xAI B 轮",
          "val": "单笔募资 60 亿美元",
          "color": "#FFC700"
        },
        {
          "tag": "2024 Q4",
          "name": "Databricks",
          "val": "史上最大轮 100 亿",
          "color": "#FF9FE2"
        },
        {
          "tag": "2024 末",
          "name": "OpenAI",
          "val": "66 亿 · 估值 1570 亿",
          "color": "#27E021"
        },
        {
          "tag": "2025 展望",
          "name": "IPO 窗口",
          "val": "头部排队冲刺上市",
          "color": "#15A7F0"
        }
      ],
      "hlStyle": "glass",
      "hlTilt": 2,
      "nodeCount": 6,
      "focusEnabled": true,
      "focusIndex": 3,
      "alternate": true,
      "showValue": true,
      "showLine": true,
      "showDecorations": true
    }
  },
  {
    "key": "theme04_page068",
    "themeKey": "theme04",
    "pageNumber": 68,
    "layout": "THEME04-068",
    "slot": "timeline",
    "label": "阶段策略",
    "bgClass": "",
    "controls": [
      {
        "key": "hlStyle",
        "label": "高亮样式",
        "type": "radio",
        "default": "glass",
        "options": [
          [
            "glass",
            "玻璃糖果"
          ],
          [
            "pill",
            "扁平药丸"
          ],
          [
            "underline",
            "下划线"
          ],
          [
            "text",
            "纯文字"
          ]
        ],
        "desc": "关键词高亮：玻璃糖果 / 扁平药丸 / 下划线 / 纯文字",
        "publicKey": "hlStyle",
        "publicLabel": "高亮样式",
        "description": "关键词高亮：玻璃糖果 / 扁平药丸 / 下划线 / 纯文字"
      },
      {
        "key": "hlTilt",
        "label": "高亮倾斜",
        "type": "slider",
        "default": 2,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "关键词胶囊旋转角度（仅糖果/药丸样式生效）",
        "publicKey": "hlTilt",
        "publicLabel": "高亮倾斜",
        "description": "关键词胶囊旋转角度（仅糖果/药丸样式生效）"
      },
      {
        "key": "stepCount",
        "label": "阶段数量",
        "type": "slider",
        "default": 3,
        "min": 2,
        "max": 3,
        "step": 1,
        "desc": "时间轴阶段数量",
        "publicKey": "stepCount",
        "publicLabel": "阶段数量",
        "description": "时间轴阶段数量"
      },
      {
        "key": "focusEnabled",
        "label": "重点突出",
        "type": "toggle",
        "default": false,
        "desc": "是否高亮某一阶段",
        "publicKey": "focusEnabled",
        "publicLabel": "重点突出",
        "description": "是否高亮某一阶段"
      },
      {
        "key": "focusIndex",
        "label": "重点序号",
        "type": "slider",
        "default": 1,
        "min": 1,
        "max": 3,
        "step": 1,
        "maxFromKey": "stepCount",
        "desc": "被高亮阶段的序号",
        "publicKey": "focusIndex",
        "publicLabel": "重点序号",
        "description": "被高亮阶段的序号"
      },
      {
        "key": "showAxis",
        "label": "连接轴线",
        "type": "toggle",
        "default": true,
        "desc": "贯穿节点的横向轴线",
        "publicKey": "showAxis",
        "publicLabel": "连接轴线",
        "description": "贯穿节点的横向轴线"
      },
      {
        "key": "showRange",
        "label": "时间区间",
        "type": "toggle",
        "default": true,
        "desc": "节点下方的时间区间标签",
        "publicKey": "showRange",
        "publicLabel": "时间区间",
        "description": "节点下方的时间区间标签"
      },
      {
        "key": "showDecorations",
        "label": "装饰元素",
        "type": "toggle",
        "default": true,
        "desc": "星芒等点缀",
        "publicKey": "showDecorations",
        "publicLabel": "装饰元素",
        "description": "星芒等点缀"
      },
      {
        "key": "steps",
        "label": "阶段",
        "type": "list",
        "default": [
          {
            "range": "2025 – 2026",
            "color": "#27E021",
            "focus": "观察 IPO",
            "desc": "盯头部公司 IPO 表现；若 OpenAI / Anthropic 上市破发，警惕全行业估值回调。"
          },
          {
            "range": "2026 – 2027",
            "color": "#15A7F0",
            "focus": "收入曲线",
            "desc": "关注垂直应用收入增长；优选 ARR ≥ 1 亿美元、续约率 > 120% 的标的。"
          },
          {
            "range": "2027 年后",
            "color": "#FFC700",
            "focus": "行业洗牌",
            "desc": "若 AGI 突破未兑现，进入洗牌期，可逢低抄底被低估的技术资产。"
          }
        ],
        "desc": "时间轴阶段：区间 / 关键词 / 说明 / 主色",
        "publicKey": "steps",
        "publicLabel": "阶段",
        "description": "时间轴阶段：区间 / 关键词 / 说明 / 主色"
      }
    ],
    "defaultProps": {
      "hlStyle": "glass",
      "hlTilt": 2,
      "stepCount": 3,
      "focusEnabled": false,
      "focusIndex": 1,
      "showAxis": true,
      "showRange": true,
      "showDecorations": true,
      "kicker": "投资展望 · 阶段性策略",
      "titleLead": "分三步走，",
      "titleKeyword": "穿越周期",
      "sub": "不押注单点爆发，按时间窗口分阶段布局——用纪律穿越 AI 资本周期的起伏。",
      "steps": [
        {
          "range": "2025 – 2026",
          "color": "#27E021",
          "focus": "观察 IPO",
          "desc": "盯头部公司 IPO 表现；若 OpenAI / Anthropic 上市破发，警惕全行业估值回调。"
        },
        {
          "range": "2026 – 2027",
          "color": "#15A7F0",
          "focus": "收入曲线",
          "desc": "关注垂直应用收入增长；优选 ARR ≥ 1 亿美元、续约率 > 120% 的标的。"
        },
        {
          "range": "2027 年后",
          "color": "#FFC700",
          "focus": "行业洗牌",
          "desc": "若 AGI 突破未兑现，进入洗牌期，可逢低抄底被低估的技术资产。"
        }
      ]
    }
  },
  {
    "key": "theme04_page069",
    "themeKey": "theme04",
    "pageNumber": 69,
    "layout": "THEME04-069",
    "slot": "numbered",
    "label": "极简编号章节",
    "bgClass": "",
    "controls": [
      {
        "key": "chapterData",
        "label": "chapterData",
        "type": "list",
        "default": {
          "zh": "结论与展望",
          "en": "CONCLUSION",
          "tag": "本章导读 · FINAL CHAPTER",
          "sub": "把全篇收束成一句判断"
        },
        "desc": "默认数据内容",
        "publicKey": "chapterData",
        "publicLabel": "chapterData",
        "description": "默认数据内容"
      },
      {
        "key": "partNumber",
        "label": "章节编号",
        "type": "slider",
        "default": 6,
        "min": 1,
        "max": 7,
        "step": 1,
        "maxFromKey": "stepCount",
        "desc": "当前章节编号（同时定位步进位置）",
        "publicKey": "partNumber",
        "publicLabel": "章节编号",
        "description": "当前章节编号（同时定位步进位置）"
      },
      {
        "key": "accentTone",
        "label": "主色调",
        "type": "radio",
        "default": "pink",
        "options": [
          [
            "green",
            "绿"
          ],
          [
            "yellow",
            "黄"
          ],
          [
            "blue",
            "蓝"
          ],
          [
            "pink",
            "粉"
          ]
        ],
        "desc": "页面主色调(通用命名)",
        "publicKey": "accentTone",
        "publicLabel": "主色调",
        "description": "页面主色调(通用命名)"
      },
      {
        "key": "stepCount",
        "label": "步进段数",
        "type": "slider",
        "default": 6,
        "min": 3,
        "max": 7,
        "step": 1,
        "desc": "底部分章步进轨段数",
        "publicKey": "stepCount",
        "publicLabel": "步进段数",
        "description": "底部分章步进轨段数"
      },
      {
        "key": "showStepper",
        "label": "步进轨",
        "type": "toggle",
        "default": true,
        "desc": "底部分章步进轨",
        "publicKey": "showStepper",
        "publicLabel": "步进轨",
        "description": "底部分章步进轨"
      },
      {
        "key": "showRule",
        "label": "顶部细线",
        "type": "toggle",
        "default": true,
        "desc": "顶部细分隔线",
        "publicKey": "showRule",
        "publicLabel": "顶部细线",
        "description": "顶部细分隔线"
      },
      {
        "key": "showKana",
        "label": "英文小注",
        "type": "toggle",
        "default": true,
        "desc": "标题下英文小注",
        "publicKey": "showKana",
        "publicLabel": "英文小注",
        "description": "标题下英文小注"
      },
      {
        "key": "showDecorations",
        "label": "装饰元素",
        "type": "toggle",
        "default": true,
        "desc": "星芒等点缀",
        "publicKey": "showDecorations",
        "publicLabel": "装饰元素",
        "description": "星芒等点缀"
      }
    ],
    "defaultProps": {
      "chapterData": {
        "zh": "结论与展望",
        "en": "CONCLUSION",
        "tag": "本章导读 · FINAL CHAPTER",
        "sub": "把全篇收束成一句判断"
      },
      "partNumber": 6,
      "accentTone": "pink",
      "stepCount": 6,
      "showStepper": true,
      "showRule": true,
      "showKana": true,
      "showDecorations": true
    }
  },
  {
    "key": "theme04_page070",
    "themeKey": "theme04",
    "pageNumber": 70,
    "layout": "THEME04-070",
    "slot": "voices",
    "label": "投资人说",
    "bgClass": "",
    "controls": [
      {
        "key": "copy",
        "label": "可见文案",
        "type": "list",
        "default": {
          "text001": "观点墙 · WHAT THEY SAY",
          "text002": "三种声音，一个共识：",
          "text003": "从叙事到兑现",
          "text004": "“"
        },
        "desc": "页面中的固定可见文案、单位和图片槽提示",
        "publicKey": "copy",
        "publicLabel": "可见文案",
        "description": "页面中的固定可见文案、单位和图片槽提示"
      },
      {
        "key": "cardsData",
        "label": "cardsData",
        "type": "list",
        "default": [
          {
            "quote": "构建可解释、可控的系统，比单纯追求规模更符合长远利益。",
            "name": "Dario Amodei",
            "role": "Anthropic 联合创始人 / CEO",
            "color": "#27E021",
            "initial": "DA",
            "ph": "人物头像"
          },
          {
            "quote": "资本正在从「赌叙事」转向「看兑现」——能把技术变成收入的公司才留在牌桌上。",
            "name": "本报告 · 核心判断",
            "role": "横纵分析法 · 结论篇",
            "color": "#FFC700",
            "initial": "判",
            "ph": "观点配图"
          },
          {
            "quote": "淘金热里，提前锁定算力的「卖铲子」的人，反而成了最稀缺的标的。",
            "name": "基础设施视角",
            "role": "案例 · CoreWeave 算力云",
            "color": "#15A7F0",
            "initial": "IN",
            "ph": "人物头像"
          }
        ],
        "desc": "默认数据内容",
        "publicKey": "cardsData",
        "publicLabel": "cardsData",
        "description": "默认数据内容"
      },
      {
        "key": "hlStyle",
        "label": "高亮样式",
        "type": "radio",
        "default": "glass",
        "options": [
          [
            "glass",
            "玻璃糖果"
          ],
          [
            "pill",
            "扁平药丸"
          ],
          [
            "underline",
            "下划线"
          ],
          [
            "text",
            "纯文字"
          ]
        ],
        "desc": "关键词高亮：玻璃糖果 / 扁平药丸 / 下划线 / 纯文字",
        "publicKey": "hlStyle",
        "publicLabel": "高亮样式",
        "description": "关键词高亮：玻璃糖果 / 扁平药丸 / 下划线 / 纯文字"
      },
      {
        "key": "hlTilt",
        "label": "高亮倾斜",
        "type": "slider",
        "default": 2,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "关键词胶囊旋转角度（仅糖果/药丸样式生效）",
        "publicKey": "hlTilt",
        "publicLabel": "高亮倾斜",
        "description": "关键词胶囊旋转角度（仅糖果/药丸样式生效）"
      },
      {
        "key": "cardCount",
        "label": "观点卡数",
        "type": "slider",
        "default": 3,
        "min": 2,
        "max": 3,
        "step": 1,
        "desc": "展示的观点卡数量",
        "publicKey": "cardCount",
        "publicLabel": "观点卡数",
        "description": "展示的观点卡数量"
      },
      {
        "key": "mediaCount",
        "label": "头像图片槽",
        "type": "slider",
        "default": 0,
        "min": 0,
        "max": 3,
        "step": 1,
        "maxFromKey": "cardCount",
        "desc": "显示头像槽的卡片数(其余转首字母)",
        "publicKey": "mediaCount",
        "publicLabel": "头像图片槽",
        "description": "显示头像槽的卡片数(其余转首字母)"
      },
      {
        "key": "focusEnabled",
        "label": "重点突出",
        "type": "toggle",
        "default": false,
        "desc": "是否高亮某一张卡片",
        "publicKey": "focusEnabled",
        "publicLabel": "重点突出",
        "description": "是否高亮某一张卡片"
      },
      {
        "key": "focusIndex",
        "label": "重点序号",
        "type": "slider",
        "default": 1,
        "min": 1,
        "max": 3,
        "step": 1,
        "maxFromKey": "cardCount",
        "desc": "被高亮卡片的序号",
        "publicKey": "focusIndex",
        "publicLabel": "重点序号",
        "description": "被高亮卡片的序号"
      },
      {
        "key": "showRole",
        "label": "职务行",
        "type": "toggle",
        "default": true,
        "desc": "署名下职务行显隐",
        "publicKey": "showRole",
        "publicLabel": "职务行",
        "description": "署名下职务行显隐"
      },
      {
        "key": "showDecorations",
        "label": "装饰元素",
        "type": "toggle",
        "default": true,
        "desc": "星芒等点缀",
        "publicKey": "showDecorations",
        "publicLabel": "装饰元素",
        "description": "星芒等点缀"
      }
    ],
    "defaultProps": {
      "copy": {
        "text001": "观点墙 · WHAT THEY SAY",
        "text002": "三种声音，一个共识：",
        "text003": "从叙事到兑现",
        "text004": "“"
      },
      "cardsData": [
        {
          "quote": "构建可解释、可控的系统，比单纯追求规模更符合长远利益。",
          "name": "Dario Amodei",
          "role": "Anthropic 联合创始人 / CEO",
          "color": "#27E021",
          "initial": "DA",
          "ph": "人物头像"
        },
        {
          "quote": "资本正在从「赌叙事」转向「看兑现」——能把技术变成收入的公司才留在牌桌上。",
          "name": "本报告 · 核心判断",
          "role": "横纵分析法 · 结论篇",
          "color": "#FFC700",
          "initial": "判",
          "ph": "观点配图"
        },
        {
          "quote": "淘金热里，提前锁定算力的「卖铲子」的人，反而成了最稀缺的标的。",
          "name": "基础设施视角",
          "role": "案例 · CoreWeave 算力云",
          "color": "#15A7F0",
          "initial": "IN",
          "ph": "人物头像"
        }
      ],
      "hlStyle": "glass",
      "hlTilt": 2,
      "cardCount": 3,
      "mediaCount": 0,
      "focusEnabled": false,
      "focusIndex": 1,
      "showRole": true,
      "showDecorations": true
    }
  },
  {
    "key": "theme04_page071",
    "themeKey": "theme04",
    "pageNumber": 71,
    "layout": "THEME04-071",
    "slot": "manifesto",
    "label": "宣言金句",
    "bgClass": "",
    "controls": [
      {
        "key": "copy",
        "label": "可见文案",
        "type": "list",
        "default": {
          "text001": "“",
          "text002": "核心判断 · THE THESIS",
          "text003": "2024 不是 AI 的泡沫之年，",
          "text004": "而是",
          "text005": "资本用脚投票",
          "text006": "的一年——",
          "text007": "钱，正涌向能造出",
          "text008": "下一代基础设施",
          "text009": "的少数人。",
          "text010": "970 亿美元、97 笔大额轮、近三分之一的美国风投——这一年的结论只有一句：",
          "text011": "头部赢家通吃，资本不再撒胡椒面。",
          "text012": "《2024 美国大额融资 AI 公司调研报告》",
          "text013": "· 核心结论"
        },
        "desc": "页面中的固定可见文案、单位和图片槽提示",
        "publicKey": "copy",
        "publicLabel": "可见文案",
        "description": "页面中的固定可见文案、单位和图片槽提示"
      },
      {
        "key": "hlStyle",
        "label": "高亮样式",
        "type": "radio",
        "default": "glass",
        "options": [
          [
            "glass",
            "玻璃糖果"
          ],
          [
            "pill",
            "扁平药丸"
          ],
          [
            "underline",
            "下划线"
          ],
          [
            "text",
            "纯文字"
          ]
        ],
        "desc": "关键词高亮：玻璃糖果 / 扁平药丸 / 下划线 / 纯文字",
        "publicKey": "hlStyle",
        "publicLabel": "高亮样式",
        "description": "关键词高亮：玻璃糖果 / 扁平药丸 / 下划线 / 纯文字"
      },
      {
        "key": "hlTilt",
        "label": "高亮倾斜",
        "type": "slider",
        "default": 2,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "关键词胶囊旋转角度（仅糖果/药丸样式生效）",
        "publicKey": "hlTilt",
        "publicLabel": "高亮倾斜",
        "description": "关键词胶囊旋转角度（仅糖果/药丸样式生效）"
      },
      {
        "key": "accentTone",
        "label": "主色调",
        "type": "radio",
        "default": "green",
        "options": [
          [
            "green",
            "绿"
          ],
          [
            "yellow",
            "黄"
          ],
          [
            "blue",
            "蓝"
          ],
          [
            "pink",
            "粉"
          ]
        ],
        "desc": "页面主色调(通用命名)",
        "publicKey": "accentTone",
        "publicLabel": "主色调",
        "description": "页面主色调(通用命名)"
      },
      {
        "key": "textAlign",
        "label": "文案对齐",
        "type": "radio",
        "default": "left",
        "options": [
          [
            "left",
            "靠左"
          ],
          [
            "center",
            "居中"
          ]
        ],
        "desc": "文案靠左 / 居中",
        "publicKey": "textAlign",
        "publicLabel": "文案对齐",
        "description": "文案靠左 / 居中"
      },
      {
        "key": "showGhostMark",
        "label": "背景引号",
        "type": "toggle",
        "default": true,
        "desc": "背景巨型引号",
        "publicKey": "showGhostMark",
        "publicLabel": "背景引号",
        "description": "背景巨型引号"
      },
      {
        "key": "showSub",
        "label": "支撑副句",
        "type": "toggle",
        "default": true,
        "desc": "论断下方支撑副句",
        "publicKey": "showSub",
        "publicLabel": "支撑副句",
        "description": "论断下方支撑副句"
      },
      {
        "key": "showAttribution",
        "label": "底部署名",
        "type": "toggle",
        "default": true,
        "desc": "底部署名",
        "publicKey": "showAttribution",
        "publicLabel": "底部署名",
        "description": "底部署名"
      },
      {
        "key": "showRule",
        "label": "署名短线",
        "type": "toggle",
        "default": true,
        "desc": "署名前装饰短线",
        "publicKey": "showRule",
        "publicLabel": "署名短线",
        "description": "署名前装饰短线"
      },
      {
        "key": "showDecorations",
        "label": "装饰元素",
        "type": "toggle",
        "default": true,
        "desc": "星芒等点缀",
        "publicKey": "showDecorations",
        "publicLabel": "装饰元素",
        "description": "星芒等点缀"
      }
    ],
    "defaultProps": {
      "copy": {
        "text001": "“",
        "text002": "核心判断 · THE THESIS",
        "text003": "2024 不是 AI 的泡沫之年，",
        "text004": "而是",
        "text005": "资本用脚投票",
        "text006": "的一年——",
        "text007": "钱，正涌向能造出",
        "text008": "下一代基础设施",
        "text009": "的少数人。",
        "text010": "970 亿美元、97 笔大额轮、近三分之一的美国风投——这一年的结论只有一句：",
        "text011": "头部赢家通吃，资本不再撒胡椒面。",
        "text012": "《2024 美国大额融资 AI 公司调研报告》",
        "text013": "· 核心结论"
      },
      "hlStyle": "glass",
      "hlTilt": 2,
      "accentTone": "green",
      "textAlign": "left",
      "showGhostMark": true,
      "showSub": true,
      "showAttribution": true,
      "showRule": true,
      "showDecorations": true
    }
  },
  {
    "key": "theme04_page072",
    "themeKey": "theme04",
    "pageNumber": 72,
    "layout": "THEME04-072",
    "slot": "verdict",
    "label": "论断印章",
    "bgClass": "",
    "controls": [
      {
        "key": "copy",
        "label": "可见文案",
        "type": "list",
        "default": {
          "text001": "”",
          "text002": "终审判断 · THE VERDICT",
          "text003": "这不是一次普通的风口，",
          "text004": "而是一场",
          "text005": "资本的总动员",
          "text006": "钱、算力与共识，",
          "text007": "同时压向了同一个方向。",
          "text008": "970 亿美元在一年内涌入，把「AI 是否值得」的争论，直接改写成了「谁能上车」。",
          "text009": "《2024 美国大额融资 AI 公司调研报告》· 总结",
          "text010": "资本大年 · CONFIRMED",
          "text011": "FUNDING YEAR · 2024",
          "text012": "970",
          "text013": "亿美元",
          "text014": "★"
        },
        "desc": "页面中的固定可见文案、单位和图片槽提示",
        "publicKey": "copy",
        "publicLabel": "可见文案",
        "description": "页面中的固定可见文案、单位和图片槽提示"
      },
      {
        "key": "hlStyle",
        "label": "高亮样式",
        "type": "radio",
        "default": "glass",
        "options": [
          [
            "glass",
            "玻璃糖果"
          ],
          [
            "pill",
            "扁平药丸"
          ],
          [
            "underline",
            "下划线"
          ],
          [
            "text",
            "纯文字"
          ]
        ],
        "desc": "关键词高亮：玻璃糖果 / 扁平药丸 / 下划线 / 纯文字",
        "publicKey": "hlStyle",
        "publicLabel": "高亮样式",
        "description": "关键词高亮：玻璃糖果 / 扁平药丸 / 下划线 / 纯文字"
      },
      {
        "key": "hlTilt",
        "label": "高亮倾斜",
        "type": "slider",
        "default": 2,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "关键词胶囊旋转角度（仅糖果/药丸样式生效）",
        "publicKey": "hlTilt",
        "publicLabel": "高亮倾斜",
        "description": "关键词胶囊旋转角度（仅糖果/药丸样式生效）"
      },
      {
        "key": "accentTone",
        "label": "主色调",
        "type": "radio",
        "default": "yellow",
        "options": [
          [
            "green",
            "绿"
          ],
          [
            "yellow",
            "黄"
          ],
          [
            "blue",
            "蓝"
          ],
          [
            "pink",
            "粉"
          ]
        ],
        "desc": "页面主色调(通用命名)",
        "publicKey": "accentTone",
        "publicLabel": "主色调",
        "description": "页面主色调(通用命名)"
      },
      {
        "key": "textAlign",
        "label": "论断对齐",
        "type": "radio",
        "default": "left",
        "options": [
          [
            "left",
            "靠左"
          ],
          [
            "center",
            "居中"
          ]
        ],
        "desc": "论断靠左(带印章) / 居中(纯文字)",
        "publicKey": "textAlign",
        "publicLabel": "论断对齐",
        "description": "论断靠左(带印章) / 居中(纯文字)"
      },
      {
        "key": "showSeal",
        "label": "数据印章",
        "type": "toggle",
        "default": true,
        "desc": "右侧圆形数据印章",
        "publicKey": "showSeal",
        "publicLabel": "数据印章",
        "description": "右侧圆形数据印章"
      },
      {
        "key": "showGhostMark",
        "label": "背景引号",
        "type": "toggle",
        "default": true,
        "desc": "背景巨型引号",
        "publicKey": "showGhostMark",
        "publicLabel": "背景引号",
        "description": "背景巨型引号"
      },
      {
        "key": "showSub",
        "label": "支撑副句",
        "type": "toggle",
        "default": true,
        "desc": "论断下方支撑副句",
        "publicKey": "showSub",
        "publicLabel": "支撑副句",
        "description": "论断下方支撑副句"
      },
      {
        "key": "showAttribution",
        "label": "署名",
        "type": "toggle",
        "default": true,
        "desc": "底部署名",
        "publicKey": "showAttribution",
        "publicLabel": "署名",
        "description": "底部署名"
      },
      {
        "key": "showDecorations",
        "label": "装饰元素",
        "type": "toggle",
        "default": true,
        "desc": "星芒等点缀",
        "publicKey": "showDecorations",
        "publicLabel": "装饰元素",
        "description": "星芒等点缀"
      }
    ],
    "defaultProps": {
      "copy": {
        "text001": "”",
        "text002": "终审判断 · THE VERDICT",
        "text003": "这不是一次普通的风口，",
        "text004": "而是一场",
        "text005": "资本的总动员",
        "text006": "钱、算力与共识，",
        "text007": "同时压向了同一个方向。",
        "text008": "970 亿美元在一年内涌入，把「AI 是否值得」的争论，直接改写成了「谁能上车」。",
        "text009": "《2024 美国大额融资 AI 公司调研报告》· 总结",
        "text010": "资本大年 · CONFIRMED",
        "text011": "FUNDING YEAR · 2024",
        "text012": "970",
        "text013": "亿美元",
        "text014": "★"
      },
      "hlStyle": "glass",
      "hlTilt": 2,
      "accentTone": "yellow",
      "textAlign": "left",
      "showSeal": true,
      "showGhostMark": true,
      "showSub": true,
      "showAttribution": true,
      "showDecorations": true
    }
  },
  {
    "key": "theme04_page073",
    "themeKey": "theme04",
    "pageNumber": 73,
    "layout": "THEME04-073",
    "slot": "quoteimage",
    "label": "图文金句",
    "bgClass": "",
    "controls": [
      {
        "key": "copy",
        "label": "可见文案",
        "type": "list",
        "default": {
          "text001": "“"
        },
        "desc": "页面中的固定可见文案、单位和图片槽提示",
        "publicKey": "copy",
        "publicLabel": "可见文案",
        "description": "页面中的固定可见文案、单位和图片槽提示"
      },
      {
        "key": "mediaCount",
        "label": "配图数量",
        "type": "slider",
        "default": 1,
        "min": 0,
        "max": 1,
        "step": 1,
        "desc": "自适应配图(0=纯金句)",
        "publicKey": "mediaCount",
        "publicLabel": "配图数量",
        "description": "自适应配图(0=纯金句)"
      },
      {
        "key": "imageSide",
        "label": "配图位置",
        "type": "radio",
        "default": "right",
        "options": [
          [
            "left",
            "左侧"
          ],
          [
            "right",
            "右侧"
          ]
        ],
        "desc": "配图在左 / 右",
        "publicKey": "imageSide",
        "publicLabel": "配图位置",
        "description": "配图在左 / 右"
      },
      {
        "key": "highlightStyle",
        "label": "强调样式",
        "type": "radio",
        "default": "box",
        "options": [
          [
            "box",
            "色块"
          ],
          [
            "underline",
            "下划线"
          ]
        ],
        "desc": "关键词强调方式",
        "publicKey": "highlightStyle",
        "publicLabel": "强调样式",
        "description": "关键词强调方式"
      },
      {
        "key": "showAttribution",
        "label": "署名显示",
        "type": "toggle",
        "default": true,
        "desc": "底部署名",
        "publicKey": "showAttribution",
        "publicLabel": "署名显示",
        "description": "底部署名"
      },
      {
        "key": "showDecorations",
        "label": "装饰元素",
        "type": "toggle",
        "default": true,
        "desc": "星芒等点缀",
        "publicKey": "showDecorations",
        "publicLabel": "装饰元素",
        "description": "星芒等点缀"
      }
    ],
    "defaultProps": {
      "copy": {
        "text001": "“"
      },
      "mediaCount": 1,
      "imageSide": "right",
      "highlightStyle": "box",
      "showAttribution": true,
      "showDecorations": true,
      "quoteLead": "AI 融资盛宴仍在继续，但",
      "quoteKeyword": "音乐节奏正在变化",
      "quoteTail": "。",
      "sub": "资本的下一阶段，将从「赌叙事」转向「看兑现」——能把技术变成可持续收入的公司，才能在退潮后留在牌桌上。",
      "attribution": "—— 2024 美国大额融资 AI 调研 · 结论",
      "mediaPlaceholder": "拖入配图"
    }
  },
  {
    "key": "theme04_page074",
    "themeKey": "theme04",
    "pageNumber": 74,
    "layout": "THEME04-074",
    "slot": "statement",
    "label": "核心结论",
    "bgClass": "",
    "controls": [
      {
        "key": "lineCount",
        "label": "文案行数",
        "type": "slider",
        "default": 2,
        "min": 1,
        "max": 2,
        "step": 1,
        "desc": "展示的金句行数",
        "publicKey": "lineCount",
        "publicLabel": "文案行数",
        "description": "展示的金句行数"
      },
      {
        "key": "highlightStyle",
        "label": "强调样式",
        "type": "radio",
        "default": "box",
        "options": [
          [
            "box",
            "色块"
          ],
          [
            "underline",
            "下划线"
          ]
        ],
        "desc": "关键词强调方式",
        "publicKey": "highlightStyle",
        "publicLabel": "强调样式",
        "description": "关键词强调方式"
      },
      {
        "key": "showIcons",
        "label": "图标显示",
        "type": "toggle",
        "default": true,
        "desc": "行尾圆形图标",
        "publicKey": "showIcons",
        "publicLabel": "图标显示",
        "description": "行尾圆形图标"
      },
      {
        "key": "showDecorations",
        "label": "装饰元素",
        "type": "toggle",
        "default": true,
        "desc": "星芒等点缀",
        "publicKey": "showDecorations",
        "publicLabel": "装饰元素",
        "description": "星芒等点缀"
      },
      {
        "key": "lines",
        "label": "金句行",
        "type": "list",
        "default": [
          {
            "color": "#15A7F0",
            "before": "资本下一阶段，从 赌叙事 转向",
            "mark": "看兑现",
            "after": "",
            "icon": "trend"
          },
          {
            "color": "#FFC700",
            "before": "能把技术变成",
            "mark": "可持续收入",
            "after": "的公司，才留在牌桌",
            "icon": "check"
          }
        ],
        "desc": "金句：前文 / 关键词 / 后文 / 颜色 / 图标",
        "publicKey": "lines",
        "publicLabel": "金句行",
        "description": "金句：前文 / 关键词 / 后文 / 颜色 / 图标"
      }
    ],
    "defaultProps": {
      "lineCount": 2,
      "highlightStyle": "box",
      "showIcons": true,
      "showDecorations": true,
      "kicker": "CONCLUSION · 核心结论",
      "footnote": "音乐节奏正在变化 · 资本从「赌叙事」走向「看兑现」",
      "lines": [
        {
          "color": "#15A7F0",
          "before": "资本下一阶段，从 赌叙事 转向",
          "mark": "看兑现",
          "after": "",
          "icon": "trend"
        },
        {
          "color": "#FFC700",
          "before": "能把技术变成",
          "mark": "可持续收入",
          "after": "的公司，才留在牌桌",
          "icon": "check"
        }
      ]
    }
  }
];
