export const theme = {
  "key": "theme11",
  "displayName": "高能增长风",
  "label": "高能增长风",
  "name": "高能增长风",
  "scenario": "增长复盘、商业计划、融资路演、市场扩张方案",
  "audience": "创业者、增长团队、销售团队、VC/PE 路演团队",
  "mode": "new"
};
export const pages = [
  {
    "key": "theme11_page001",
    "themeKey": "theme11",
    "pageNumber": 1,
    "layout": "THEME11-001",
    "slot": "page1",
    "label": "封面 · 海报",
    "bgClass": "",
    "controls": [
      {
        "key": "surface",
        "label": "背景基调",
        "type": "select",
        "default": "paper",
        "options": [
          {
            "value": "ink",
            "label": "深色"
          },
          {
            "value": "paper",
            "label": "浅色"
          },
          {
            "value": "ember",
            "label": "暖橙"
          }
        ],
        "desc": "页面背景主题，用于在相邻页之间制造色彩跳跃。",
        "publicKey": "surface",
        "publicLabel": "背景基调",
        "description": "页面背景主题，用于在相邻页之间制造色彩跳跃。"
      },
      {
        "key": "showStatus",
        "label": "状态胶囊",
        "type": "toggle",
        "default": true,
        "desc": "顶部的接单状态胶囊。",
        "publicKey": "showStatus",
        "publicLabel": "状态胶囊",
        "description": "顶部的接单状态胶囊。"
      },
      {
        "key": "showKicker",
        "label": "装饰副标题",
        "type": "toggle",
        "default": true,
        "desc": "主标题上方的刊号式装饰小标。",
        "publicKey": "showKicker",
        "publicLabel": "装饰副标题",
        "description": "主标题上方的刊号式装饰小标。"
      },
      {
        "key": "showSweep",
        "label": "暖橙扫光条",
        "type": "toggle",
        "default": true,
        "desc": "主标题下方的暖橙渐变扫光条（图形母题）。",
        "publicKey": "showSweep",
        "publicLabel": "暖橙扫光条",
        "description": "主标题下方的暖橙渐变扫光条（图形母题）。"
      },
      {
        "key": "showLede",
        "label": "衬线引言",
        "type": "toggle",
        "default": true,
        "desc": "扫光条下方的衬线斜体引言。",
        "publicKey": "showLede",
        "publicLabel": "衬线引言",
        "description": "扫光条下方的衬线斜体引言。"
      },
      {
        "key": "showTicker",
        "label": "关键词跑马条",
        "type": "toggle",
        "default": true,
        "desc": "底部的箭头串联关键词跑马条。",
        "publicKey": "showTicker",
        "publicLabel": "关键词跑马条",
        "description": "底部的箭头串联关键词跑马条。"
      },
      {
        "key": "tickerCount",
        "label": "关键词数量",
        "type": "slider",
        "default": 5,
        "min": 3,
        "max": 5,
        "step": 1,
        "desc": "跑马条中的关键词数量（末项点亮）。",
        "publicKey": "tickerCount",
        "publicLabel": "关键词数量",
        "description": "跑马条中的关键词数量（末项点亮）。"
      },
      {
        "key": "showGhostMark",
        "label": "背景大字符",
        "type": "toggle",
        "default": true,
        "desc": "角落的超大幽灵字符装饰。",
        "publicKey": "showGhostMark",
        "publicLabel": "背景大字符",
        "description": "角落的超大幽灵字符装饰。"
      },
      {
        "key": "showScaffold",
        "label": "边框骨架",
        "type": "toggle",
        "default": true,
        "desc": "侧边竖排标签与四角括线。",
        "publicKey": "showScaffold",
        "publicLabel": "边框骨架",
        "description": "侧边竖排标签与四角括线。"
      }
    ],
    "defaultProps": {
      "surface": "paper",
      "showStatus": true,
      "showKicker": true,
      "showSweep": true,
      "showLede": true,
      "showTicker": true,
      "tickerCount": 5,
      "showGhostMark": true,
      "showScaffold": true,
      "statusText": "现接受 2026 Q3 合作",
      "deckLabel": "CAPABILITIES DECK",
      "deckYear": "2026",
      "kickerLabel": "AI 增长引擎",
      "kickerText": "Rank higher, convert better",
      "ghostMark": "燃",
      "headlineHtml": "<span class=\"row\">把流量，</span><span class=\"row\">拧成 <span class=\"ign-ember-text\">增长</span>。</span>",
      "ledeHtml": "搜索、内容与投放，合成一台<b>会复利的增长引擎</b>——让每一次曝光，都换成实际增长。",
      "ticker": [
        "搜索",
        "内容",
        "投放",
        "转化",
        "复利增长"
      ],
      "pageLabel": "↓ 开始"
    }
  },
  {
    "key": "theme11_page002",
    "themeKey": "theme11",
    "pageNumber": 2,
    "layout": "THEME11-002",
    "slot": "page2",
    "label": "封面 · 满铺图",
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
        "key": "surface",
        "label": "背景基调",
        "type": "select",
        "default": "ink",
        "options": [
          {
            "value": "ink",
            "label": "深色"
          },
          {
            "value": "paper",
            "label": "浅色"
          },
          {
            "value": "ember",
            "label": "暖橙"
          }
        ],
        "desc": "页面背景主题，用于在相邻页之间制造色彩跳跃。",
        "publicKey": "surface",
        "publicLabel": "背景基调",
        "description": "页面背景主题，用于在相邻页之间制造色彩跳跃。"
      },
      {
        "key": "showScrim",
        "label": "压暗叠层",
        "type": "toggle",
        "default": true,
        "desc": "图片上的渐变压暗层，保证文字可读。",
        "publicKey": "showScrim",
        "publicLabel": "压暗叠层",
        "description": "图片上的渐变压暗层，保证文字可读。"
      },
      {
        "key": "showStatus",
        "label": "状态胶囊",
        "type": "toggle",
        "default": true,
        "desc": "顶部的接单状态胶囊。",
        "publicKey": "showStatus",
        "publicLabel": "状态胶囊",
        "description": "顶部的接单状态胶囊。"
      },
      {
        "key": "showLede",
        "label": "衬线引言",
        "type": "toggle",
        "default": true,
        "desc": "主标题上方的衬线斜体引言。",
        "publicKey": "showLede",
        "publicLabel": "衬线引言",
        "description": "主标题上方的衬线斜体引言。"
      },
      {
        "key": "showSub",
        "label": "副标题",
        "type": "toggle",
        "default": true,
        "desc": "主标题下方的副标题。",
        "publicKey": "showSub",
        "publicLabel": "副标题",
        "description": "主标题下方的副标题。"
      },
      {
        "key": "showStrip",
        "label": "指标条",
        "type": "toggle",
        "default": true,
        "desc": "底部的关键指标条。",
        "publicKey": "showStrip",
        "publicLabel": "指标条",
        "description": "底部的关键指标条。"
      },
      {
        "key": "statCount",
        "label": "指标数量",
        "type": "slider",
        "default": 3,
        "min": 2,
        "max": 3,
        "step": 1,
        "desc": "指标条中的指标数量。",
        "publicKey": "statCount",
        "publicLabel": "指标数量",
        "description": "指标条中的指标数量。"
      },
      {
        "key": "showGhostMark",
        "label": "背景大字符",
        "type": "toggle",
        "default": false,
        "desc": "角落超大幽灵字符装饰（满铺图上默认关闭）。",
        "publicKey": "showGhostMark",
        "publicLabel": "背景大字符",
        "description": "角落超大幽灵字符装饰（满铺图上默认关闭）。"
      },
      {
        "key": "showScaffold",
        "label": "边框骨架",
        "type": "toggle",
        "default": true,
        "desc": "侧边竖排标签与四角括线。",
        "publicKey": "showScaffold",
        "publicLabel": "边框骨架",
        "description": "侧边竖排标签与四角括线。"
      }
    ],
    "defaultProps": {
      "surface": "ink",
      "images": [],
      "backgroundMode": "unicorn",
      "unicornScene": "automations",
      "showScrim": true,
      "showStatus": true,
      "showLede": true,
      "showSub": true,
      "showStrip": true,
      "statCount": 3,
      "showGhostMark": false,
      "showScaffold": true,
      "imagePlaceholder": "封面满铺主图 · 16:9 横构图",
      "statusText": "现接受 2026 Q3 合作",
      "deckLabel": "CAPABILITIES DECK",
      "deckYear": "2026",
      "ghostMark": "IGNIS",
      "lede": "Rank higher, convert better.",
      "headlineHtml": "<span class=\"row\">排名更高，</span><span class=\"row\">转化<em>更强</em>。</span>",
      "sub": "把搜索、内容与投放，拧成一股力。",
      "stats": [
        {
          "v": "×3.8",
          "l": "平均转化率提升"
        },
        {
          "v": "+182%",
          "l": "12 个月自然流量"
        },
        {
          "v": "14 天",
          "l": "首次见效周期"
        }
      ]
    }
  },
  {
    "key": "theme11_page003",
    "themeKey": "theme11",
    "pageNumber": 3,
    "layout": "THEME11-003",
    "slot": "page3",
    "label": "封面 · 陈述",
    "bgClass": "",
    "controls": [
      {
        "key": "surface",
        "label": "背景基调",
        "type": "select",
        "default": "ember",
        "options": [
          {
            "value": "ink",
            "label": "深色"
          },
          {
            "value": "paper",
            "label": "浅色"
          },
          {
            "value": "ember",
            "label": "暖橙"
          }
        ],
        "desc": "页面背景主题，用于在相邻页之间制造色彩跳跃。",
        "publicKey": "surface",
        "publicLabel": "背景基调",
        "description": "页面背景主题，用于在相邻页之间制造色彩跳跃。"
      },
      {
        "key": "showTagBar",
        "label": "箭头标签栏",
        "type": "toggle",
        "default": true,
        "desc": "顶部的箭头串联标签栏。",
        "publicKey": "showTagBar",
        "publicLabel": "箭头标签栏",
        "description": "顶部的箭头串联标签栏。"
      },
      {
        "key": "showMark",
        "label": "巨型箭头母题",
        "type": "toggle",
        "default": true,
        "desc": "陈述句上方的超大暖橙箭头母题。",
        "publicKey": "showMark",
        "publicLabel": "巨型箭头母题",
        "description": "陈述句上方的超大暖橙箭头母题。"
      },
      {
        "key": "showRibbon",
        "label": "指标条",
        "type": "toggle",
        "default": true,
        "desc": "底部的分隔式关键指标条。",
        "publicKey": "showRibbon",
        "publicLabel": "指标条",
        "description": "底部的分隔式关键指标条。"
      },
      {
        "key": "statCount",
        "label": "指标数量",
        "type": "slider",
        "default": 3,
        "min": 1,
        "max": 3,
        "step": 1,
        "desc": "指标条中的指标数量。",
        "publicKey": "statCount",
        "publicLabel": "指标数量",
        "description": "指标条中的指标数量。"
      },
      {
        "key": "showSignoff",
        "label": "翻页提示",
        "type": "toggle",
        "default": true,
        "desc": "右下角的箭头母题与翻页提示。",
        "publicKey": "showSignoff",
        "publicLabel": "翻页提示",
        "description": "右下角的箭头母题与翻页提示。"
      },
      {
        "key": "showGhostMark",
        "label": "背景大字符",
        "type": "toggle",
        "default": true,
        "desc": "角落的超大幽灵字符装饰。",
        "publicKey": "showGhostMark",
        "publicLabel": "背景大字符",
        "description": "角落的超大幽灵字符装饰。"
      },
      {
        "key": "showScaffold",
        "label": "边框骨架",
        "type": "toggle",
        "default": true,
        "desc": "侧边竖排标签与四角括线。",
        "publicKey": "showScaffold",
        "publicLabel": "边框骨架",
        "description": "侧边竖排标签与四角括线。"
      }
    ],
    "defaultProps": {
      "surface": "ember",
      "showTagBar": true,
      "showMark": true,
      "showRibbon": true,
      "statCount": 3,
      "showSignoff": true,
      "showGhostMark": true,
      "showScaffold": true,
      "deckLabel": "CAPABILITIES DECK",
      "deckYear": "2026",
      "ghostMark": "IG",
      "tagSegHtml": "AI 增长引擎<span class=\"ar\">→</span>系统化<span class=\"ar\">→</span>可复利",
      "tagYear": "2026",
      "markGlyph": "↗",
      "headlineHtml": "<span class=\"row\">增长不是运气，</span><span class=\"row\">是一套 <span class=\"ign-ember-text\">可复用</span> 的</span><span class=\"row\"><em>增长系统</em>。</span>",
      "signoffText": "向后翻阅",
      "stats": [
        {
          "v": "×3.8",
          "l": "平均转化率提升"
        },
        {
          "v": "+182%",
          "l": "12 个月自然流量"
        },
        {
          "v": "14 天",
          "l": "首次见效周期"
        }
      ]
    }
  },
  {
    "key": "theme11_page004",
    "themeKey": "theme11",
    "pageNumber": 4,
    "layout": "THEME11-004",
    "slot": "page4",
    "label": "封面 · 分栏",
    "bgClass": "",
    "controls": [
      {
        "key": "surface",
        "label": "背景基调",
        "type": "select",
        "default": "ink",
        "options": [
          {
            "value": "ink",
            "label": "深色"
          },
          {
            "value": "paper",
            "label": "浅色"
          },
          {
            "value": "ember",
            "label": "暖橙"
          }
        ],
        "desc": "页面背景主题，用于在相邻页之间制造色彩跳跃。",
        "publicKey": "surface",
        "publicLabel": "背景基调",
        "description": "页面背景主题，用于在相邻页之间制造色彩跳跃。"
      },
      {
        "key": "showKicker",
        "label": "装饰副标题",
        "type": "toggle",
        "default": true,
        "desc": "左栏标题上方的状态小标。",
        "publicKey": "showKicker",
        "publicLabel": "装饰副标题",
        "description": "左栏标题上方的状态小标。"
      },
      {
        "key": "showLede",
        "label": "衬线引言",
        "type": "toggle",
        "default": true,
        "desc": "左栏标题下方的衬线引言。",
        "publicKey": "showLede",
        "publicLabel": "衬线引言",
        "description": "左栏标题下方的衬线引言。"
      },
      {
        "key": "showArrow",
        "label": "翻页箭头",
        "type": "toggle",
        "default": true,
        "desc": "左栏底部的箭头母题与提示。",
        "publicKey": "showArrow",
        "publicLabel": "翻页箭头",
        "description": "左栏底部的箭头母题与提示。"
      },
      {
        "key": "imageCount",
        "label": "图片槽数量",
        "type": "slider",
        "default": 0,
        "min": 0,
        "max": 1,
        "step": 1,
        "desc": "右栏图片槽数量：0 = 呈现指标堆叠，1 = 呈现一张满栏图。",
        "publicKey": "imageCount",
        "publicLabel": "图片槽数量",
        "description": "右栏图片槽数量：0 = 呈现指标堆叠，1 = 呈现一张满栏图。"
      },
      {
        "key": "statCount",
        "label": "指标数量",
        "type": "slider",
        "default": 3,
        "min": 2,
        "max": 3,
        "step": 1,
        "desc": "右栏指标堆叠的条目数量（仅图片槽数量为 0 时）。",
        "publicKey": "itemCount",
        "publicLabel": "指标数量",
        "description": "右栏指标堆叠的条目数量（仅图片槽数量为 0 时）。"
      },
      {
        "key": "showGhostMark",
        "label": "背景大字符",
        "type": "toggle",
        "default": true,
        "desc": "左栏的超大幽灵字符装饰。",
        "publicKey": "showGhostMark",
        "publicLabel": "背景大字符",
        "description": "左栏的超大幽灵字符装饰。"
      },
      {
        "key": "showScaffold",
        "label": "边框骨架",
        "type": "toggle",
        "default": true,
        "desc": "侧边竖排标签与四角括线。",
        "publicKey": "showScaffold",
        "publicLabel": "边框骨架",
        "description": "侧边竖排标签与四角括线。"
      }
    ],
    "defaultProps": {
      "surface": "ink",
      "showKicker": true,
      "showLede": true,
      "showArrow": true,
      "statCount": 3,
      "imageCount": 0,
      "images": [],
      "showGhostMark": true,
      "showScaffold": true,
      "ghostMark": "IG",
      "kickerText": "现接受 2026 Q3 增长合作",
      "headlineHtml": "<span class=\"row\">排名<span class=\"ign-ember-text\">更高</span></span><span class=\"row\">转化<em>更强</em></span>",
      "ledeHtml": "把搜索、内容与投放，拧成<b>一股力</b>——让曝光换成实际增长。",
      "arrowText": "Capabilities Deck · 2026",
      "imagePlaceholder": "封面满栏图 · 竖构图",
      "ribbonCap": "成绩单 · 截至 2026",
      "stats": [
        {
          "v": "2,400+",
          "l": "服务品牌"
        },
        {
          "v": "3.8×",
          "l": "平均转化率提升"
        },
        {
          "v": "14 天",
          "l": "首次见效周期"
        }
      ]
    }
  },
  {
    "key": "theme11_page005",
    "themeKey": "theme11",
    "pageNumber": 5,
    "layout": "THEME11-005",
    "slot": "page5",
    "label": "封面",
    "bgClass": "",
    "controls": [
      {
        "key": "surface",
        "label": "背景基调",
        "type": "select",
        "default": "ink",
        "options": [
          {
            "value": "ink",
            "label": "深色"
          },
          {
            "value": "paper",
            "label": "浅色"
          },
          {
            "value": "ember",
            "label": "暖橙"
          }
        ],
        "desc": "页面背景主题，用于在相邻页之间制造色彩跳跃。",
        "publicKey": "surface",
        "publicLabel": "背景基调",
        "description": "页面背景主题，用于在相邻页之间制造色彩跳跃。"
      },
      {
        "key": "showNav",
        "label": "章节导航",
        "type": "toggle",
        "default": true,
        "desc": "顶部章节面包屑导航的显示与隐藏。",
        "publicKey": "showNav",
        "publicLabel": "章节导航",
        "description": "顶部章节面包屑导航的显示与隐藏。"
      },
      {
        "key": "showKicker",
        "label": "装饰副标题",
        "type": "toggle",
        "default": true,
        "desc": "状态胶囊 + 衬线斜体引言等装饰性文案。",
        "publicKey": "showKicker",
        "publicLabel": "装饰副标题",
        "description": "状态胶囊 + 衬线斜体引言等装饰性文案。"
      },
      {
        "key": "showStats",
        "label": "关键指标行",
        "type": "toggle",
        "default": true,
        "desc": "主标题下方的三组关键数字。",
        "publicKey": "showStats",
        "publicLabel": "关键指标行",
        "description": "主标题下方的三组关键数字。"
      },
      {
        "key": "showGhostMark",
        "label": "背景大字符",
        "type": "toggle",
        "default": true,
        "desc": "角落的超大幽灵字符装饰。",
        "publicKey": "showGhostMark",
        "publicLabel": "背景大字符",
        "description": "角落的超大幽灵字符装饰。"
      },
      {
        "key": "showScaffold",
        "label": "边框骨架",
        "type": "toggle",
        "default": true,
        "desc": "侧边竖排标签与四角括线。",
        "publicKey": "showScaffold",
        "publicLabel": "边框骨架",
        "description": "侧边竖排标签与四角括线。"
      },
      {
        "key": "logoCount",
        "label": "图片槽数量",
        "type": "slider",
        "default": 0,
        "min": 0,
        "max": 6,
        "step": 1,
        "desc": "底部图片槽（Logo 墙）的数量；为 0 时回退为文字标识。",
        "publicKey": "logoCount",
        "publicLabel": "图片槽数量",
        "description": "底部图片槽（Logo 墙）的数量；为 0 时回退为文字标识。"
      }
    ],
    "defaultProps": {
      "surface": "ink",
      "showNav": true,
      "showKicker": true,
      "showStats": true,
      "showGhostMark": true,
      "showScaffold": true,
      "logoCount": 0,
      "logos": [],
      "ghostMark": "IG",
      "deckLabel": "CAPABILITIES DECK",
      "deckYear": "2026",
      "navItems": [
        "封面",
        "方法",
        "实证",
        "成果"
      ],
      "navCurrent": 0,
      "statusText": "现接受 2026 Q3 增长合作",
      "lede": "Rank higher, convert better.",
      "headlineHtml": "<span class=\"row\">排名<span class=\"ign-ember-text\">更高</span></span><span class=\"row\">转化<span class=\"ign-ember-text\">更强</span></span>",
      "subHtml": "把搜索、内容与投放，拧成<span class=\"ign-serif\" style=\"color:var(--ign-ink)\"> one </span>股力。",
      "stats": [
        {
          "v": "2,400+",
          "l": "Brands served"
        },
        {
          "v": "3.8×",
          "l": "Conversion lift"
        },
        {
          "v": "14d",
          "l": "Time to impact"
        }
      ],
      "trustedLabel": "Trusted by",
      "marks": [
        [
          "DAZZ",
          "."
        ],
        [
          "MULTIPLY"
        ],
        [
          "CLOUDBOLT"
        ],
        [
          "VOLT"
        ],
        [
          "CAYO",
          "soft"
        ],
        [
          "DENSIFY"
        ]
      ],
      "pageRange": "↓ 01 — 18"
    }
  },
  {
    "key": "theme11_page006",
    "themeKey": "theme11",
    "pageNumber": 6,
    "layout": "THEME11-006",
    "slot": "page6",
    "label": "序章",
    "bgClass": "",
    "controls": [
      {
        "key": "surface",
        "label": "背景基调",
        "type": "select",
        "default": "ember",
        "options": [
          {
            "value": "ink",
            "label": "深色"
          },
          {
            "value": "paper",
            "label": "浅色"
          },
          {
            "value": "ember",
            "label": "暖橙"
          }
        ],
        "desc": "页面背景主题，用于在相邻页之间制造色彩跳跃。",
        "publicKey": "surface",
        "publicLabel": "背景基调",
        "description": "页面背景主题，用于在相邻页之间制造色彩跳跃。"
      },
      {
        "key": "showTag",
        "label": "章节标签",
        "type": "toggle",
        "default": true,
        "desc": "主标题上方的「第 N 章」标签行。",
        "publicKey": "showTag",
        "publicLabel": "章节标签",
        "description": "主标题上方的「第 N 章」标签行。"
      },
      {
        "key": "showLede",
        "label": "导语",
        "type": "toggle",
        "default": true,
        "desc": "标题下方的衬线斜体导语。",
        "publicKey": "showLede",
        "publicLabel": "导语",
        "description": "标题下方的衬线斜体导语。"
      },
      {
        "key": "showAgenda",
        "label": "本章导览",
        "type": "toggle",
        "default": true,
        "desc": "底部分栏的章节导览条目。",
        "publicKey": "showAgenda",
        "publicLabel": "本章导览",
        "description": "底部分栏的章节导览条目。"
      },
      {
        "key": "agendaCount",
        "label": "导览条目数",
        "type": "slider",
        "default": 3,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "本章导览的条目数量。",
        "publicKey": "itemCount",
        "publicLabel": "导览条目数",
        "description": "本章导览的条目数量。"
      },
      {
        "key": "emphasis",
        "label": "重点突出",
        "type": "toggle",
        "default": false,
        "desc": "开启后突出某一条导览，其余弱化。",
        "publicKey": "emphasis",
        "publicLabel": "重点突出",
        "description": "开启后突出某一条导览，其余弱化。"
      },
      {
        "key": "emphasisIndex",
        "label": "重点序号",
        "type": "slider",
        "default": 0,
        "min": 0,
        "max": 3,
        "step": 1,
        "desc": "需要突出的导览序号（从 0 起）。",
        "publicKey": "emphasisIndex",
        "publicLabel": "重点序号",
        "description": "需要突出的导览序号（从 0 起）。"
      },
      {
        "key": "showGhostMark",
        "label": "背景大字符",
        "type": "toggle",
        "default": true,
        "desc": "角落超大幽灵数字装饰。",
        "publicKey": "showGhostMark",
        "publicLabel": "背景大字符",
        "description": "角落超大幽灵数字装饰。"
      },
      {
        "key": "showScaffold",
        "label": "边框骨架",
        "type": "toggle",
        "default": true,
        "desc": "侧边竖排标签与四角括线。",
        "publicKey": "showScaffold",
        "publicLabel": "边框骨架",
        "description": "侧边竖排标签与四角括线。"
      },
      {
        "key": "showMeta",
        "label": "底部信息条",
        "type": "toggle",
        "default": true,
        "desc": "底部页脚信息与进度条。",
        "publicKey": "showMeta",
        "publicLabel": "底部信息条",
        "description": "底部页脚信息与进度条。"
      }
    ],
    "defaultProps": {
      "surface": "ember",
      "showTag": true,
      "showLede": true,
      "showAgenda": true,
      "agendaCount": 3,
      "emphasis": false,
      "emphasisIndex": 0,
      "showGhostMark": true,
      "showScaffold": true,
      "showMeta": true,
      "ghostMark": "01",
      "railText": "Chapter — 序章",
      "navItems": [
        "序章"
      ],
      "navCurrent": 0,
      "ixNo": "01",
      "ixLabel": "Chapter",
      "tagChapter": "第一章",
      "tagEn": "The Growth Logic",
      "headingHtml": "增长，<br><span class=\"ign-ember-text\">不靠运气</span>。",
      "lede": "市场每天都在变，但增长的底层逻辑没变——把对的内容，放到对的人面前，让每一次曝光都通向收入。",
      "agenda": [
        {
          "t": "市场现状",
          "e": "Where you are"
        },
        {
          "t": "增长杠杆",
          "e": "What moves it"
        },
        {
          "t": "燃点方法",
          "e": "How we do it"
        },
        {
          "t": "真实成果",
          "e": "What you get"
        }
      ],
      "metaLeft": "IGNIS — 燃点 · 增长引擎",
      "metaMid": "先看清局面，再点燃增长"
    }
  },
  {
    "key": "theme11_page007",
    "themeKey": "theme11",
    "pageNumber": 7,
    "layout": "THEME11-007",
    "slot": "page7",
    "label": "纲目",
    "bgClass": "",
    "controls": [
      {
        "key": "surface",
        "label": "背景基调",
        "type": "select",
        "default": "ink",
        "options": [
          {
            "value": "ink",
            "label": "深色"
          },
          {
            "value": "paper",
            "label": "浅色"
          },
          {
            "value": "ember",
            "label": "暖橙"
          }
        ],
        "desc": "页面背景主题，用于在相邻页之间制造色彩跳跃。",
        "publicKey": "surface",
        "publicLabel": "背景基调",
        "description": "页面背景主题，用于在相邻页之间制造色彩跳跃。"
      },
      {
        "key": "partCount",
        "label": "章节数量",
        "type": "slider",
        "default": 5,
        "min": 3,
        "max": 5,
        "step": 1,
        "desc": "目录中列出的章节条目数量。",
        "publicKey": "itemCount",
        "publicLabel": "章节数量",
        "description": "目录中列出的章节条目数量。"
      },
      {
        "key": "emphasis",
        "label": "重点突出",
        "type": "toggle",
        "default": true,
        "desc": "开启后高亮当前章节（编号着色 + 箭头），其余保持低调。",
        "publicKey": "emphasis",
        "publicLabel": "重点突出",
        "description": "开启后高亮当前章节（编号着色 + 箭头），其余保持低调。"
      },
      {
        "key": "emphasisIndex",
        "label": "重点序号",
        "type": "slider",
        "default": 0,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "需要高亮的章节序号（从 0 起）。",
        "publicKey": "emphasisIndex",
        "publicLabel": "重点序号",
        "description": "需要高亮的章节序号（从 0 起）。"
      },
      {
        "key": "showKicker",
        "label": "装饰引言",
        "type": "toggle",
        "default": true,
        "desc": "标题上方的衬线引言。",
        "publicKey": "showKicker",
        "publicLabel": "装饰引言",
        "description": "标题上方的衬线引言。"
      },
      {
        "key": "showLede",
        "label": "说明文案",
        "type": "toggle",
        "default": true,
        "desc": "标题下方的说明段落。",
        "publicKey": "showLede",
        "publicLabel": "说明文案",
        "description": "标题下方的说明段落。"
      },
      {
        "key": "showGhostMark",
        "label": "背景大字符",
        "type": "toggle",
        "default": true,
        "desc": "角落超大幽灵字符装饰。",
        "publicKey": "showGhostMark",
        "publicLabel": "背景大字符",
        "description": "角落超大幽灵字符装饰。"
      },
      {
        "key": "showScaffold",
        "label": "边框骨架",
        "type": "toggle",
        "default": true,
        "desc": "侧边竖排标签与四角括线。",
        "publicKey": "showScaffold",
        "publicLabel": "边框骨架",
        "description": "侧边竖排标签与四角括线。"
      },
      {
        "key": "showMeta",
        "label": "底部信息条",
        "type": "toggle",
        "default": true,
        "desc": "底部页脚信息与进度条。",
        "publicKey": "showMeta",
        "publicLabel": "底部信息条",
        "description": "底部页脚信息与进度条。"
      }
    ],
    "defaultProps": {
      "surface": "ink",
      "partCount": 5,
      "emphasis": true,
      "emphasisIndex": 0,
      "showKicker": true,
      "showLede": true,
      "showGhostMark": true,
      "showScaffold": true,
      "showMeta": true,
      "ghostMark": "目录",
      "railText": "Contents — 纲目",
      "navItems": [
        "纲目"
      ],
      "navCurrent": 0,
      "ixNo": "01",
      "ixLabel": "Contents",
      "lead": "What follows.",
      "headingHtml": "这一程，<br><span class=\"ign-ember-text\">怎么走</span>。",
      "lede": "五个部分，从看清局面到一起行动。每一段都对应一组可被验证的动作。",
      "parts": [
        {
          "t": "增长逻辑",
          "en": "The Logic"
        },
        {
          "t": "方法与实证",
          "en": "Method & Proof"
        },
        {
          "t": "服务与流程",
          "en": "Services & Process"
        },
        {
          "t": "路线与套餐",
          "en": "Roadmap & Plans"
        },
        {
          "t": "一起行动",
          "en": "Take Action"
        }
      ],
      "metaLeft": "IGNIS — 燃点 · 内容纲目",
      "metaMid": "先看清，再点燃"
    }
  },
  {
    "key": "theme11_page008",
    "themeKey": "theme11",
    "pageNumber": 8,
    "layout": "THEME11-008",
    "slot": "page8",
    "label": "大势",
    "bgClass": "",
    "controls": [
      {
        "key": "surface",
        "label": "背景基调",
        "type": "select",
        "default": "paper",
        "options": [
          {
            "value": "ink",
            "label": "深色"
          },
          {
            "value": "paper",
            "label": "浅色"
          },
          {
            "value": "ember",
            "label": "暖橙"
          }
        ],
        "desc": "页面背景主题，用于在相邻页之间制造色彩跳跃。",
        "publicKey": "surface",
        "publicLabel": "背景基调",
        "description": "页面背景主题，用于在相邻页之间制造色彩跳跃。"
      },
      {
        "key": "showKicker",
        "label": "装饰副标题",
        "type": "toggle",
        "default": true,
        "desc": "大数字上方的装饰性引导标签。",
        "publicKey": "showKicker",
        "publicLabel": "装饰副标题",
        "description": "大数字上方的装饰性引导标签。"
      },
      {
        "key": "showTrend",
        "label": "迷你趋势线",
        "type": "toggle",
        "default": true,
        "desc": "大数字下方的装饰趋势曲线。",
        "publicKey": "showTrend",
        "publicLabel": "迷你趋势线",
        "description": "大数字下方的装饰趋势曲线。"
      },
      {
        "key": "showCaption",
        "label": "数字说明",
        "type": "toggle",
        "default": true,
        "desc": "大数字正下方的说明文案。",
        "publicKey": "showCaption",
        "publicLabel": "数字说明",
        "description": "大数字正下方的说明文案。"
      },
      {
        "key": "showSubStats",
        "label": "辅助数据行",
        "type": "toggle",
        "default": true,
        "desc": "底部分栏的辅助数据。",
        "publicKey": "showSubStats",
        "publicLabel": "辅助数据行",
        "description": "底部分栏的辅助数据。"
      },
      {
        "key": "subStatCount",
        "label": "辅助数据数量",
        "type": "slider",
        "default": 3,
        "min": 1,
        "max": 3,
        "step": 1,
        "desc": "底部辅助数据的条目数量。",
        "publicKey": "itemCount",
        "publicLabel": "辅助数据数量",
        "description": "底部辅助数据的条目数量。"
      },
      {
        "key": "emphasis",
        "label": "重点突出",
        "type": "toggle",
        "default": false,
        "desc": "开启后突出某一条辅助数据，其余弱化。",
        "publicKey": "emphasis",
        "publicLabel": "重点突出",
        "description": "开启后突出某一条辅助数据，其余弱化。"
      },
      {
        "key": "emphasisIndex",
        "label": "重点序号",
        "type": "slider",
        "default": 0,
        "min": 0,
        "max": 2,
        "step": 1,
        "desc": "需要突出的辅助数据序号（从 0 起）。",
        "publicKey": "emphasisIndex",
        "publicLabel": "重点序号",
        "description": "需要突出的辅助数据序号（从 0 起）。"
      },
      {
        "key": "showNote",
        "label": "装饰注释",
        "type": "toggle",
        "default": true,
        "desc": "底部居中的衬线注释文案。",
        "publicKey": "showNote",
        "publicLabel": "装饰注释",
        "description": "底部居中的衬线注释文案。"
      },
      {
        "key": "showGhostMark",
        "label": "背景大字符",
        "type": "toggle",
        "default": true,
        "desc": "角落超大幽灵数字装饰。",
        "publicKey": "showGhostMark",
        "publicLabel": "背景大字符",
        "description": "角落超大幽灵数字装饰。"
      },
      {
        "key": "showScaffold",
        "label": "边框骨架",
        "type": "toggle",
        "default": true,
        "desc": "侧边竖排标签与四角括线。",
        "publicKey": "showScaffold",
        "publicLabel": "边框骨架",
        "description": "侧边竖排标签与四角括线。"
      },
      {
        "key": "showMeta",
        "label": "底部信息条",
        "type": "toggle",
        "default": true,
        "desc": "底部页脚信息与进度条。",
        "publicKey": "showMeta",
        "publicLabel": "底部信息条",
        "description": "底部页脚信息与进度条。"
      }
    ],
    "defaultProps": {
      "surface": "paper",
      "showKicker": true,
      "showTrend": true,
      "showCaption": true,
      "showSubStats": true,
      "subStatCount": 3,
      "emphasis": false,
      "emphasisIndex": 0,
      "showNote": true,
      "showGhostMark": true,
      "showScaffold": true,
      "showMeta": true,
      "ghostMark": "%",
      "railText": "Headline — 大势",
      "navItems": [
        "大势"
      ],
      "navCurrent": 0,
      "ixNo": "02",
      "ixLabel": "Headline",
      "kickerLead": "Average organic lift",
      "kickerEn": "12-month median",
      "heroValue": "+182%",
      "caption": "接入燃点后，自然搜索流量在 12 个月内的平均增幅——不是一次性峰值，而是持续复利。",
      "subs": [
        {
          "v": "2,400+",
          "l": "服务品牌总数"
        },
        {
          "v": "12 月",
          "l": "复利兑现周期"
        },
        {
          "v": "0",
          "l": "隐藏在报表里的成本"
        }
      ],
      "metaLeft": "IGNIS — 燃点 · 跨 2,400+ 品牌中位",
      "noteText": "一个数字，胜过一页 slide"
    }
  },
  {
    "key": "theme11_page009",
    "themeKey": "theme11",
    "pageNumber": 9,
    "layout": "THEME11-009",
    "slot": "page9",
    "label": "图景",
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
        "key": "surface",
        "label": "背景基调",
        "type": "select",
        "default": "ember",
        "options": [
          {
            "value": "ink",
            "label": "深色"
          },
          {
            "value": "paper",
            "label": "浅色"
          },
          {
            "value": "ember",
            "label": "暖橙"
          }
        ],
        "desc": "空槽占位与底纹的基调（图片满铺时主要影响占位区）。",
        "publicKey": "surface",
        "publicLabel": "背景基调",
        "description": "空槽占位与底纹的基调（图片满铺时主要影响占位区）。"
      },
      {
        "key": "imageCount",
        "label": "图片数量",
        "type": "slider",
        "default": 1,
        "min": 0,
        "max": 2,
        "step": 1,
        "desc": "满铺图片槽数量：0 为留白占位，1 为整幅，2 为左右双联。点击画面上的图片区域即可上传/更换。",
        "publicKey": "imageCount",
        "publicLabel": "图片数量",
        "description": "满铺图片槽数量：0 为留白占位，1 为整幅，2 为左右双联。点击画面上的图片区域即可上传/更换。"
      },
      {
        "key": "overlayPosition",
        "label": "文字位置",
        "type": "select",
        "default": "left",
        "options": [
          {
            "value": "left",
            "label": "左下"
          },
          {
            "value": "right",
            "label": "右下"
          }
        ],
        "desc": "标题文字版块所在角落。",
        "publicKey": "overlayPosition",
        "publicLabel": "文字位置",
        "description": "标题文字版块所在角落。"
      },
      {
        "key": "showCaption",
        "label": "说明文案",
        "type": "toggle",
        "default": true,
        "desc": "标题下方的说明段落。",
        "publicKey": "showCaption",
        "publicLabel": "说明文案",
        "description": "标题下方的说明段落。"
      },
      {
        "key": "showOverlayStat",
        "label": "浮层数字",
        "type": "toggle",
        "default": true,
        "desc": "画面一角的大号叠加指标。",
        "publicKey": "showOverlayStat",
        "publicLabel": "浮层数字",
        "description": "画面一角的大号叠加指标。"
      },
      {
        "key": "showTag",
        "label": "标签行",
        "type": "toggle",
        "default": true,
        "desc": "标题上方的分类标签行。",
        "publicKey": "showTag",
        "publicLabel": "标签行",
        "description": "标题上方的分类标签行。"
      },
      {
        "key": "showGhostMark",
        "label": "背景大字符",
        "type": "toggle",
        "default": false,
        "desc": "角落超大幽灵字符装饰（满铺图片时通常关闭）。",
        "publicKey": "showGhostMark",
        "publicLabel": "背景大字符",
        "description": "角落超大幽灵字符装饰（满铺图片时通常关闭）。"
      },
      {
        "key": "showScaffold",
        "label": "边框骨架",
        "type": "toggle",
        "default": true,
        "desc": "侧边竖排标签与四角括线。",
        "publicKey": "showScaffold",
        "publicLabel": "边框骨架",
        "description": "侧边竖排标签与四角括线。"
      },
      {
        "key": "showMeta",
        "label": "底部信息条",
        "type": "toggle",
        "default": true,
        "desc": "底部页脚信息与进度条。",
        "publicKey": "showMeta",
        "publicLabel": "底部信息条",
        "description": "底部页脚信息与进度条。"
      }
    ],
    "defaultProps": {
      "surface": "ember",
      "imageCount": 1,
      "images": [],
      "backgroundMode": "unicorn",
      "unicornScene": "moving",
      "overlayPosition": "left",
      "showCaption": true,
      "showOverlayStat": true,
      "showTag": true,
      "showGhostMark": false,
      "showScaffold": true,
      "showMeta": true,
      "ghostMark": "案例",
      "railText": "Showcase — 图景",
      "navItems": [
        "图景"
      ],
      "navCurrent": 0,
      "ixNo": "05",
      "ixLabel": "Showcase",
      "placeholderFull": "满铺主图 · FULL-BLEED",
      "placeholder1": "主图 01",
      "placeholder2": "主图 02",
      "statValue": "+182%",
      "statLabel": "Organic traffic · 12mo",
      "tagText": "客户案例 · DAZZ 重构",
      "headingHtml": "看得见的，<br><span class=\"ign-ember-text\">才算数</span>。",
      "caption": "一次彻底的转化重排：把首页、落地页与投放拧成同一条路径，三个月内自然流量与成交同步抬升。",
      "metaLeft": "IGNIS — 燃点 · 案例图景",
      "metaMid": "结果，摆出来看"
    }
  },
  {
    "key": "theme11_page010",
    "themeKey": "theme11",
    "pageNumber": 10,
    "layout": "THEME11-010",
    "slot": "page10",
    "label": "主张",
    "bgClass": "",
    "controls": [
      {
        "key": "surface",
        "label": "背景基调",
        "type": "select",
        "default": "ink",
        "options": [
          {
            "value": "ink",
            "label": "深色"
          },
          {
            "value": "paper",
            "label": "浅色"
          },
          {
            "value": "ember",
            "label": "暖橙"
          }
        ],
        "desc": "页面背景主题，用于在相邻页之间制造色彩跳跃。",
        "publicKey": "surface",
        "publicLabel": "背景基调",
        "description": "页面背景主题，用于在相邻页之间制造色彩跳跃。"
      },
      {
        "key": "showMark",
        "label": "引号字符",
        "type": "toggle",
        "default": true,
        "desc": "金句上方的超大装饰引号。",
        "publicKey": "showMark",
        "publicLabel": "引号字符",
        "description": "金句上方的超大装饰引号。"
      },
      {
        "key": "showAttribution",
        "label": "署名区块",
        "type": "toggle",
        "default": true,
        "desc": "金句下方的署名与来源行。",
        "publicKey": "showAttribution",
        "publicLabel": "署名区块",
        "description": "金句下方的署名与来源行。"
      },
      {
        "key": "showRule",
        "label": "分隔细线",
        "type": "toggle",
        "default": true,
        "desc": "署名上方的分隔细线。",
        "publicKey": "showRule",
        "publicLabel": "分隔细线",
        "description": "署名上方的分隔细线。"
      },
      {
        "key": "avatarCount",
        "label": "头像图片槽",
        "type": "slider",
        "default": 0,
        "min": 0,
        "max": 1,
        "step": 1,
        "desc": "署名旁的头像图片槽数量（0 或 1），自动裁为圆形。",
        "publicKey": "avatarCount",
        "publicLabel": "头像图片槽",
        "description": "署名旁的头像图片槽数量（0 或 1），自动裁为圆形。"
      },
      {
        "key": "showKicker",
        "label": "装饰副标题",
        "type": "toggle",
        "default": true,
        "desc": "顶部导航处的章节标识。",
        "publicKey": "showKicker",
        "publicLabel": "装饰副标题",
        "description": "顶部导航处的章节标识。"
      },
      {
        "key": "showGhostMark",
        "label": "背景大字符",
        "type": "toggle",
        "default": true,
        "desc": "角落超大幽灵数字装饰。",
        "publicKey": "showGhostMark",
        "publicLabel": "背景大字符",
        "description": "角落超大幽灵数字装饰。"
      },
      {
        "key": "showScaffold",
        "label": "边框骨架",
        "type": "toggle",
        "default": true,
        "desc": "侧边竖排标签与四角括线。",
        "publicKey": "showScaffold",
        "publicLabel": "边框骨架",
        "description": "侧边竖排标签与四角括线。"
      },
      {
        "key": "showMeta",
        "label": "底部信息条",
        "type": "toggle",
        "default": false,
        "desc": "底部页脚信息与进度条。",
        "publicKey": "showMeta",
        "publicLabel": "底部信息条",
        "description": "底部页脚信息与进度条。"
      }
    ],
    "defaultProps": {
      "surface": "ink",
      "showMark": true,
      "showRule": true,
      "showAttribution": true,
      "avatarCount": 0,
      "avatar": [],
      "showKicker": true,
      "showGhostMark": true,
      "showScaffold": true,
      "showMeta": false,
      "ghostMark": "“",
      "markGlyph": "“",
      "railText": "Manifesto — 主张",
      "navItems": [
        "主张"
      ],
      "navCurrent": 0,
      "ixNo": "03",
      "ixLabel": "Manifesto",
      "quoteHtml": "我们不投放广告。<br>我们设计<span class=\"ign-ember-text\">增长</span>。",
      "attrName": "林越 · Lin Yue",
      "attrRole": "创始人 / 燃点 IGNIS",
      "attrSrc": "Founder's note",
      "avatarPlaceholder": "头像",
      "metaLeft": "IGNIS — 燃点 · 增长主张",
      "metaMid": "把曝光做成收入"
    }
  },
  {
    "key": "theme11_page011",
    "themeKey": "theme11",
    "pageNumber": 11,
    "layout": "THEME11-011",
    "slot": "page11",
    "label": "方法",
    "bgClass": "",
    "controls": [
      {
        "key": "surface",
        "label": "背景基调",
        "type": "select",
        "default": "paper",
        "options": [
          {
            "value": "ink",
            "label": "深色"
          },
          {
            "value": "paper",
            "label": "浅色"
          },
          {
            "value": "ember",
            "label": "暖橙"
          }
        ],
        "desc": "页面背景主题，用于在相邻页之间制造色彩跳跃。",
        "publicKey": "surface",
        "publicLabel": "背景基调",
        "description": "页面背景主题，用于在相邻页之间制造色彩跳跃。"
      },
      {
        "key": "showSidePanel",
        "label": "侧栏信息卡",
        "type": "toggle",
        "default": true,
        "desc": "右上角的指标信息卡显示与隐藏；隐藏时主标题占满整行。",
        "publicKey": "showSidePanel",
        "publicLabel": "侧栏信息卡",
        "description": "右上角的指标信息卡显示与隐藏；隐藏时主标题占满整行。"
      },
      {
        "key": "stepCount",
        "label": "步骤数量",
        "type": "slider",
        "default": 3,
        "min": 2,
        "max": 3,
        "step": 1,
        "desc": "底部流程步骤的数量。",
        "publicKey": "stepCount",
        "publicLabel": "步骤数量",
        "description": "底部流程步骤的数量。"
      },
      {
        "key": "emphasis",
        "label": "重点突出",
        "type": "toggle",
        "default": false,
        "desc": "开启后突出某一步骤，其余弱化。",
        "publicKey": "emphasis",
        "publicLabel": "重点突出",
        "description": "开启后突出某一步骤，其余弱化。"
      },
      {
        "key": "emphasisIndex",
        "label": "重点序号",
        "type": "slider",
        "default": 0,
        "min": 0,
        "max": 2,
        "step": 1,
        "desc": "需要突出的步骤序号（从 0 起），仅在“重点突出”开启时生效。",
        "publicKey": "emphasisIndex",
        "publicLabel": "重点序号",
        "description": "需要突出的步骤序号（从 0 起），仅在“重点突出”开启时生效。"
      },
      {
        "key": "showGhostMark",
        "label": "背景大字符",
        "type": "toggle",
        "default": true,
        "desc": "角落超大幽灵数字装饰。",
        "publicKey": "showGhostMark",
        "publicLabel": "背景大字符",
        "description": "角落超大幽灵数字装饰。"
      },
      {
        "key": "showScaffold",
        "label": "边框骨架",
        "type": "toggle",
        "default": true,
        "desc": "侧边竖排标签与四角括线。",
        "publicKey": "showScaffold",
        "publicLabel": "边框骨架",
        "description": "侧边竖排标签与四角括线。"
      },
      {
        "key": "showMeta",
        "label": "底部信息条",
        "type": "toggle",
        "default": true,
        "desc": "底部页脚信息与进度条。",
        "publicKey": "showMeta",
        "publicLabel": "底部信息条",
        "description": "底部页脚信息与进度条。"
      }
    ],
    "defaultProps": {
      "surface": "paper",
      "showSidePanel": true,
      "stepCount": 3,
      "emphasis": false,
      "emphasisIndex": 0,
      "showGhostMark": true,
      "showScaffold": true,
      "showMeta": true,
      "ghostMark": "01",
      "railText": "Operating System — 方法",
      "navItems": [
        "封面",
        "方法",
        "实证",
        "成果"
      ],
      "navCurrent": 1,
      "ixNo": "01",
      "ixLabel": "Operating System",
      "leadEn": "Seamless onboarding.",
      "headingHtml": "无缝接入，<br><span class=\"ign-ember-text\">卓越成效</span>。",
      "leadText": "燃点像团队的一部分一样运转——把目标、节奏与责任装进同一套增长操作系统，从第一天起就开始产出。",
      "panelTitle": "交付节奏",
      "panelTag": "CADENCE",
      "panelRows": [
        {
          "k": "首次见效",
          "v": "14 <em>天</em>"
        },
        {
          "k": "协作透明度",
          "v": "100<em>%</em>"
        },
        {
          "k": "周迭代次数",
          "v": "3<em>×</em>"
        }
      ],
      "steps": [
        {
          "fn": "01 — Team",
          "t": "协作",
          "en": "faster",
          "d": "作为你团队的延伸而存在，主动推进、快速交付，省去反复对齐的内耗。"
        },
        {
          "fn": "02 — Goals",
          "t": "目标",
          "en": "sooner",
          "d": "把增长目标拆成清晰优先级，第一天就排进可执行的行动日程。"
        },
        {
          "fn": "03 — Attitude",
          "t": "结果",
          "en": "first",
          "d": "用数据说话、对结果负责，这是燃点区别于其他营销伙伴的态度。"
        }
      ],
      "metaLeft": "IGNIS — 燃点 · 增长操作系统",
      "metaMid": "让每一次曝光都通向收入"
    }
  },
  {
    "key": "theme11_page012",
    "themeKey": "theme11",
    "pageNumber": 12,
    "layout": "THEME11-012",
    "slot": "page12",
    "label": "实证",
    "bgClass": "",
    "controls": [
      {
        "key": "surface",
        "label": "背景基调",
        "type": "select",
        "default": "ink",
        "options": [
          {
            "value": "ink",
            "label": "深色"
          },
          {
            "value": "paper",
            "label": "浅色"
          },
          {
            "value": "ember",
            "label": "暖橙"
          }
        ],
        "desc": "页面背景主题，用于在相邻页之间制造色彩跳跃。",
        "publicKey": "surface",
        "publicLabel": "背景基调",
        "description": "页面背景主题，用于在相邻页之间制造色彩跳跃。"
      },
      {
        "key": "chartVariant",
        "label": "图表类型",
        "type": "select",
        "default": "area",
        "options": [
          {
            "value": "area",
            "label": "面积图"
          },
          {
            "value": "line",
            "label": "折线图"
          },
          {
            "value": "bars",
            "label": "柱状图"
          }
        ],
        "desc": "右侧数据图的可视化类型。",
        "publicKey": "chartVariant",
        "publicLabel": "图表类型",
        "description": "右侧数据图的可视化类型。"
      },
      {
        "key": "showChart",
        "label": "数据图卡片",
        "type": "toggle",
        "default": true,
        "desc": "右侧图表卡片显示与隐藏；隐藏时左侧内容占满整行。",
        "publicKey": "showChart",
        "publicLabel": "数据图卡片",
        "description": "右侧图表卡片显示与隐藏；隐藏时左侧内容占满整行。"
      },
      {
        "key": "itemCount",
        "label": "列表项数量",
        "type": "slider",
        "default": 3,
        "min": 1,
        "max": 3,
        "step": 1,
        "desc": "左侧能力清单的条目数量。",
        "publicKey": "itemCount",
        "publicLabel": "列表项数量",
        "description": "左侧能力清单的条目数量。"
      },
      {
        "key": "emphasis",
        "label": "重点突出",
        "type": "toggle",
        "default": false,
        "desc": "开启后突出某一条目，其余弱化。",
        "publicKey": "emphasis",
        "publicLabel": "重点突出",
        "description": "开启后突出某一条目，其余弱化。"
      },
      {
        "key": "emphasisIndex",
        "label": "重点序号",
        "type": "slider",
        "default": 0,
        "min": 0,
        "max": 2,
        "step": 1,
        "desc": "需要突出的条目序号（从 0 起）。",
        "publicKey": "emphasisIndex",
        "publicLabel": "重点序号",
        "description": "需要突出的条目序号（从 0 起）。"
      },
      {
        "key": "showPills",
        "label": "装饰标签行",
        "type": "toggle",
        "default": true,
        "desc": "左下角的标签胶囊行。",
        "publicKey": "showPills",
        "publicLabel": "装饰标签行",
        "description": "左下角的标签胶囊行。"
      },
      {
        "key": "showGhostMark",
        "label": "背景大字符",
        "type": "toggle",
        "default": true,
        "desc": "角落超大幽灵数字装饰。",
        "publicKey": "showGhostMark",
        "publicLabel": "背景大字符",
        "description": "角落超大幽灵数字装饰。"
      },
      {
        "key": "showScaffold",
        "label": "边框骨架",
        "type": "toggle",
        "default": true,
        "desc": "侧边竖排标签与四角括线。",
        "publicKey": "showScaffold",
        "publicLabel": "边框骨架",
        "description": "侧边竖排标签与四角括线。"
      },
      {
        "key": "showMeta",
        "label": "底部信息条",
        "type": "toggle",
        "default": true,
        "desc": "底部页脚信息与进度条。",
        "publicKey": "showMeta",
        "publicLabel": "底部信息条",
        "description": "底部页脚信息与进度条。"
      }
    ],
    "defaultProps": {
      "surface": "ink",
      "chartVariant": "area",
      "showChart": true,
      "itemCount": 3,
      "emphasis": false,
      "emphasisIndex": 0,
      "showPills": true,
      "showGhostMark": true,
      "showScaffold": true,
      "showMeta": true,
      "ghostMark": "02",
      "railText": "Proof — 实证",
      "navItems": [
        "封面",
        "方法",
        "实证",
        "成果"
      ],
      "navCurrent": 2,
      "ixNo": "02",
      "ixLabel": "Proof",
      "eyebrowNo": "02",
      "eyebrowText": "Capabilities",
      "headingHtml": "搜索表现，<br><span class=\"ign-ember-text\">肉眼可见</span>。<br><span class=\"ign-serif\">Search that compounds.</span>",
      "items": [
        {
          "t": "搜索引擎优化",
          "e": "Search"
        },
        {
          "t": "转化率优化",
          "e": "Convert"
        },
        {
          "t": "付费投放",
          "e": "Paid Media"
        }
      ],
      "pills": [
        "关键词研究",
        "竞品分析",
        "内容策略",
        "A/B 测试",
        "技术 SEO"
      ],
      "chartTitle": "自然搜索流量 · Organic",
      "legendA": "接入后",
      "legendB": "接入前",
      "xLabels": [
        "1月",
        "3月",
        "6月",
        "接入燃点",
        "9月",
        "12月 · +182%"
      ],
      "metaLeft": "IGNIS — 燃点 · 12 个月真实数据",
      "metaMid": "让 SEO 超越算法，对齐真实意图"
    }
  },
  {
    "key": "theme11_page013",
    "themeKey": "theme11",
    "pageNumber": 13,
    "layout": "THEME11-013",
    "slot": "page13",
    "label": "渠道",
    "bgClass": "",
    "controls": [
      {
        "key": "surface",
        "label": "背景基调",
        "type": "select",
        "default": "paper",
        "options": [
          {
            "value": "ink",
            "label": "深色"
          },
          {
            "value": "paper",
            "label": "浅色"
          },
          {
            "value": "ember",
            "label": "暖橙"
          }
        ],
        "desc": "页面背景主题，用于在相邻页之间制造色彩跳跃。",
        "publicKey": "surface",
        "publicLabel": "背景基调",
        "description": "页面背景主题，用于在相邻页之间制造色彩跳跃。"
      },
      {
        "key": "chartVariant",
        "label": "图表类型",
        "type": "select",
        "default": "donut",
        "options": [
          {
            "value": "donut",
            "label": "环形图"
          },
          {
            "value": "bars",
            "label": "条形图"
          },
          {
            "value": "stacked",
            "label": "堆叠条"
          }
        ],
        "desc": "渠道占比的可视化类型。",
        "publicKey": "chartVariant",
        "publicLabel": "图表类型",
        "description": "渠道占比的可视化类型。"
      },
      {
        "key": "itemCount",
        "label": "渠道数量",
        "type": "slider",
        "default": 4,
        "min": 3,
        "max": 5,
        "step": 1,
        "desc": "参与构成的渠道数量。",
        "publicKey": "itemCount",
        "publicLabel": "渠道数量",
        "description": "参与构成的渠道数量。"
      },
      {
        "key": "emphasis",
        "label": "重点突出",
        "type": "toggle",
        "default": false,
        "desc": "开启后突出某一渠道，其余弱化。",
        "publicKey": "emphasis",
        "publicLabel": "重点突出",
        "description": "开启后突出某一渠道，其余弱化。"
      },
      {
        "key": "emphasisIndex",
        "label": "重点序号",
        "type": "slider",
        "default": 0,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "需要突出的渠道序号（从 0 起）。",
        "publicKey": "emphasisIndex",
        "publicLabel": "重点序号",
        "description": "需要突出的渠道序号（从 0 起）。"
      },
      {
        "key": "showLegend",
        "label": "明细图例",
        "type": "toggle",
        "default": true,
        "desc": "环形图右侧的明细图例（仅环形图模式）。",
        "publicKey": "showLegend",
        "publicLabel": "明细图例",
        "description": "环形图右侧的明细图例（仅环形图模式）。"
      },
      {
        "key": "showNote",
        "label": "装饰注释",
        "type": "toggle",
        "default": true,
        "desc": "标题旁的衬线注释文案。",
        "publicKey": "showNote",
        "publicLabel": "装饰注释",
        "description": "标题旁的衬线注释文案。"
      },
      {
        "key": "showKicker",
        "label": "装饰副标题",
        "type": "toggle",
        "default": true,
        "desc": "主标题上方的装饰标签。",
        "publicKey": "showKicker",
        "publicLabel": "装饰副标题",
        "description": "主标题上方的装饰标签。"
      },
      {
        "key": "showGhostMark",
        "label": "背景大字符",
        "type": "toggle",
        "default": true,
        "desc": "角落超大幽灵数字装饰。",
        "publicKey": "showGhostMark",
        "publicLabel": "背景大字符",
        "description": "角落超大幽灵数字装饰。"
      },
      {
        "key": "showScaffold",
        "label": "边框骨架",
        "type": "toggle",
        "default": true,
        "desc": "侧边竖排标签与四角括线。",
        "publicKey": "showScaffold",
        "publicLabel": "边框骨架",
        "description": "侧边竖排标签与四角括线。"
      },
      {
        "key": "showMeta",
        "label": "底部信息条",
        "type": "toggle",
        "default": true,
        "desc": "底部页脚信息与进度条。",
        "publicKey": "showMeta",
        "publicLabel": "底部信息条",
        "description": "底部页脚信息与进度条。"
      }
    ],
    "defaultProps": {
      "surface": "paper",
      "chartVariant": "donut",
      "itemCount": 4,
      "emphasis": false,
      "emphasisIndex": 0,
      "showLegend": true,
      "showNote": true,
      "showKicker": true,
      "showGhostMark": true,
      "showScaffold": true,
      "showMeta": true,
      "ghostMark": "%",
      "railText": "Channel Mix — 渠道",
      "navItems": [
        "渠道"
      ],
      "navCurrent": 0,
      "ixNo": "06",
      "ixLabel": "Channel Mix",
      "eyebrowNo": "06",
      "eyebrowText": "Where growth comes from",
      "headingHtml": "增长，<span class=\"ign-ember-text\">有据可循</span>。",
      "noteHtml": "每一分增长，<br>都能拆回到具体渠道。",
      "donutNote": "占比最高",
      "channels": [
        {
          "nm": "自然搜索",
          "en": "SEO",
          "pct": 38
        },
        {
          "nm": "付费投放",
          "en": "Paid Media",
          "pct": 26
        },
        {
          "nm": "内容营销",
          "en": "Content",
          "pct": 22
        },
        {
          "nm": "社媒互动",
          "en": "Social",
          "pct": 9
        },
        {
          "nm": "邮件复购",
          "en": "Lifecycle",
          "pct": 5
        }
      ],
      "metaLeft": "IGNIS — 燃点 · 渠道构成（中位样本）",
      "metaMid": "归因清晰，预算才花得明白"
    }
  },
  {
    "key": "theme11_page014",
    "themeKey": "theme11",
    "pageNumber": 14,
    "layout": "THEME11-014",
    "slot": "page14",
    "label": "成果",
    "bgClass": "",
    "controls": [
      {
        "key": "surface",
        "label": "背景基调",
        "type": "select",
        "default": "ember",
        "options": [
          {
            "value": "ink",
            "label": "深色"
          },
          {
            "value": "paper",
            "label": "浅色"
          },
          {
            "value": "ember",
            "label": "暖橙"
          }
        ],
        "desc": "页面背景主题，用于在相邻页之间制造色彩跳跃。",
        "publicKey": "surface",
        "publicLabel": "背景基调",
        "description": "页面背景主题，用于在相邻页之间制造色彩跳跃。"
      },
      {
        "key": "statCount",
        "label": "数据卡数量",
        "type": "slider",
        "default": 3,
        "min": 1,
        "max": 3,
        "step": 1,
        "desc": "关键数据卡片的数量。",
        "publicKey": "statCount",
        "publicLabel": "数据卡数量",
        "description": "关键数据卡片的数量。"
      },
      {
        "key": "emphasis",
        "label": "重点突出",
        "type": "toggle",
        "default": false,
        "desc": "开启后突出某一张数据卡，其余弱化。",
        "publicKey": "emphasis",
        "publicLabel": "重点突出",
        "description": "开启后突出某一张数据卡，其余弱化。"
      },
      {
        "key": "emphasisIndex",
        "label": "重点序号",
        "type": "slider",
        "default": 0,
        "min": 0,
        "max": 2,
        "step": 1,
        "desc": "需要突出的数据卡序号（从 0 起）。",
        "publicKey": "emphasisIndex",
        "publicLabel": "重点序号",
        "description": "需要突出的数据卡序号（从 0 起）。"
      },
      {
        "key": "showBars",
        "label": "迷你趋势图",
        "type": "toggle",
        "default": true,
        "desc": "每张数据卡下方的迷你柱状趋势。",
        "publicKey": "showBars",
        "publicLabel": "迷你趋势图",
        "description": "每张数据卡下方的迷你柱状趋势。"
      },
      {
        "key": "showRibbon",
        "label": "流程飘带",
        "type": "toggle",
        "default": true,
        "desc": "中部的流程步骤飘带。",
        "publicKey": "showRibbon",
        "publicLabel": "流程飘带",
        "description": "中部的流程步骤飘带。"
      },
      {
        "key": "ribbonStepCount",
        "label": "流程节点数",
        "type": "slider",
        "default": 5,
        "min": 3,
        "max": 5,
        "step": 1,
        "desc": "流程飘带的节点数量。",
        "publicKey": "ribbonStepCount",
        "publicLabel": "流程节点数",
        "description": "流程飘带的节点数量。"
      },
      {
        "key": "showQuote",
        "label": "引述区块",
        "type": "toggle",
        "default": true,
        "desc": "底部客户引述显示与隐藏。",
        "publicKey": "showQuote",
        "publicLabel": "引述区块",
        "description": "底部客户引述显示与隐藏。"
      },
      {
        "key": "avatarCount",
        "label": "头像图片槽",
        "type": "slider",
        "default": 0,
        "min": 0,
        "max": 1,
        "step": 1,
        "desc": "引述旁的头像图片槽数量（0 或 1），自动按原图比例裁切为圆形。",
        "publicKey": "avatarCount",
        "publicLabel": "头像图片槽",
        "description": "引述旁的头像图片槽数量（0 或 1），自动按原图比例裁切为圆形。"
      },
      {
        "key": "showNote",
        "label": "装饰注释",
        "type": "toggle",
        "default": true,
        "desc": "标题旁的衬线注释文案。",
        "publicKey": "showNote",
        "publicLabel": "装饰注释",
        "description": "标题旁的衬线注释文案。"
      },
      {
        "key": "showGhostMark",
        "label": "背景大字符",
        "type": "toggle",
        "default": true,
        "desc": "角落超大幽灵数字装饰。",
        "publicKey": "showGhostMark",
        "publicLabel": "背景大字符",
        "description": "角落超大幽灵数字装饰。"
      },
      {
        "key": "showScaffold",
        "label": "边框骨架",
        "type": "toggle",
        "default": true,
        "desc": "侧边竖排标签与四角括线。",
        "publicKey": "showScaffold",
        "publicLabel": "边框骨架",
        "description": "侧边竖排标签与四角括线。"
      }
    ],
    "defaultProps": {
      "surface": "ember",
      "statCount": 3,
      "emphasis": false,
      "emphasisIndex": 0,
      "showBars": true,
      "showRibbon": true,
      "ribbonStepCount": 5,
      "showQuote": true,
      "avatarCount": 0,
      "avatar": [],
      "showNote": true,
      "showGhostMark": true,
      "showScaffold": true,
      "ghostMark": "03",
      "railText": "Outcomes — 成果",
      "navItems": [
        "封面",
        "方法",
        "实证",
        "成果"
      ],
      "navCurrent": 3,
      "ixNo": "03",
      "ixLabel": "Outcomes",
      "headingHtml": "用数据，<span class=\"ign-ember-text\">点燃增长</span>。",
      "noteHtml": "三类核心指标，<br>跨 2,400+ 品牌的中位表现。",
      "stats": [
        {
          "v": "+182%",
          "l": "自然搜索流量 · 12 月平均增幅",
          "bars": [
            22,
            30,
            28,
            42,
            52,
            64,
            82,
            100
          ],
          "hotFrom": 6
        },
        {
          "v": "3.8×",
          "l": "转化率提升 · 较投放前基线",
          "bars": [
            26,
            24,
            38,
            46,
            44,
            60,
            78,
            96
          ],
          "hotFrom": 6
        },
        {
          "v": "−41%",
          "l": "单客获取成本 · 持续优化下降",
          "bars": [
            100,
            90,
            72,
            66,
            54,
            48,
            40,
            34
          ],
          "hotTo": 2
        }
      ],
      "ribbon": [
        "关键词研究",
        "落地页搭建",
        "A/B 测试",
        "转化率优化",
        "规模化复利"
      ],
      "quoteText": "“一支团队，搞定过去三家代理才做完的事。”",
      "quoteAttr": "— Sarah Chen · 增长负责人",
      "ctaSub": "hello@ignis.cn · 通往收入的 shortest 路径",
      "ctaText": "预约增长诊断"
    }
  },
  {
    "key": "theme11_page015",
    "themeKey": "theme11",
    "pageNumber": 15,
    "layout": "THEME11-015",
    "slot": "page15",
    "label": "漏斗",
    "bgClass": "",
    "controls": [
      {
        "key": "surface",
        "label": "背景基调",
        "type": "select",
        "default": "paper",
        "options": [
          {
            "value": "ink",
            "label": "深色"
          },
          {
            "value": "paper",
            "label": "浅色"
          },
          {
            "value": "ember",
            "label": "暖橙"
          }
        ],
        "desc": "页面背景主题，用于在相邻页之间制造色彩跳跃。",
        "publicKey": "surface",
        "publicLabel": "背景基调",
        "description": "页面背景主题，用于在相邻页之间制造色彩跳跃。"
      },
      {
        "key": "stageCount",
        "label": "漏斗层数",
        "type": "slider",
        "default": 5,
        "min": 3,
        "max": 5,
        "step": 1,
        "desc": "从曝光到成交的漏斗阶段数量。",
        "publicKey": "stageCount",
        "publicLabel": "漏斗层数",
        "description": "从曝光到成交的漏斗阶段数量。"
      },
      {
        "key": "emphasis",
        "label": "重点突出",
        "type": "toggle",
        "default": false,
        "desc": "开启后突出某一阶段，其余弱化。",
        "publicKey": "emphasis",
        "publicLabel": "重点突出",
        "description": "开启后突出某一阶段，其余弱化。"
      },
      {
        "key": "emphasisIndex",
        "label": "重点序号",
        "type": "slider",
        "default": 4,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "需要突出的阶段序号（从 0 起）。",
        "publicKey": "emphasisIndex",
        "publicLabel": "重点序号",
        "description": "需要突出的阶段序号（从 0 起）。"
      },
      {
        "key": "showRates",
        "label": "转化率标注",
        "type": "toggle",
        "default": true,
        "desc": "右侧逐级转化率与下钻箭头。",
        "publicKey": "showRates",
        "publicLabel": "转化率标注",
        "description": "右侧逐级转化率与下钻箭头。"
      },
      {
        "key": "showKicker",
        "label": "装饰引言",
        "type": "toggle",
        "default": true,
        "desc": "标题上方的衬线引言。",
        "publicKey": "showKicker",
        "publicLabel": "装饰引言",
        "description": "标题上方的衬线引言。"
      },
      {
        "key": "showLede",
        "label": "说明文案",
        "type": "toggle",
        "default": true,
        "desc": "右上角的说明段落。",
        "publicKey": "showLede",
        "publicLabel": "说明文案",
        "description": "右上角的说明段落。"
      },
      {
        "key": "showGhostMark",
        "label": "背景大字符",
        "type": "toggle",
        "default": true,
        "desc": "角落超大幽灵字符装饰。",
        "publicKey": "showGhostMark",
        "publicLabel": "背景大字符",
        "description": "角落超大幽灵字符装饰。"
      },
      {
        "key": "showScaffold",
        "label": "边框骨架",
        "type": "toggle",
        "default": true,
        "desc": "侧边竖排标签与四角括线。",
        "publicKey": "showScaffold",
        "publicLabel": "边框骨架",
        "description": "侧边竖排标签与四角括线。"
      },
      {
        "key": "showMeta",
        "label": "底部信息条",
        "type": "toggle",
        "default": true,
        "desc": "底部页脚信息与进度条。",
        "publicKey": "showMeta",
        "publicLabel": "底部信息条",
        "description": "底部页脚信息与进度条。"
      }
    ],
    "defaultProps": {
      "surface": "paper",
      "stageCount": 5,
      "emphasis": false,
      "emphasisIndex": 4,
      "showRates": true,
      "showKicker": true,
      "showLede": true,
      "showGhostMark": true,
      "showScaffold": true,
      "showMeta": true,
      "ghostMark": "↓",
      "railText": "Funnel — 漏斗",
      "navItems": [
        "漏斗"
      ],
      "navCurrent": 0,
      "ixNo": "07",
      "ixLabel": "Funnel",
      "lead": "From reach to revenue.",
      "headingHtml": "每一层，<span class=\"ign-ember-text\">都在漏</span>。",
      "lede": "增长不是堆流量，而是把每一级的转化率抬上去——同样的曝光，成交能差出数倍。",
      "stages": [
        {
          "name": "曝光触达",
          "en": "Reach",
          "v": "1.2M",
          "rate": "入口"
        },
        {
          "name": "点击进入",
          "en": "Clicks",
          "v": "216K",
          "rate": "18%"
        },
        {
          "name": "互动停留",
          "en": "Engaged",
          "v": "77K",
          "rate": "36%"
        },
        {
          "name": "留资线索",
          "en": "Leads",
          "v": "15.4K",
          "rate": "20%"
        },
        {
          "name": "成交客户",
          "en": "Customers",
          "v": "2.9K",
          "rate": "19%"
        }
      ],
      "metaLeft": "IGNIS — 燃点 · 转化漏斗（中位样本）",
      "metaMid": "省下的漏损，都是利润"
    }
  },
  {
    "key": "theme11_page016",
    "themeKey": "theme11",
    "pageNumber": 16,
    "layout": "THEME11-016",
    "slot": "page16",
    "label": "案例",
    "bgClass": "",
    "controls": [
      {
        "key": "surface",
        "label": "背景基调",
        "type": "select",
        "default": "ink",
        "options": [
          {
            "value": "ink",
            "label": "深色"
          },
          {
            "value": "paper",
            "label": "浅色"
          },
          {
            "value": "ember",
            "label": "暖橙"
          }
        ],
        "desc": "页面背景主题，用于在相邻页之间制造色彩跳跃。",
        "publicKey": "surface",
        "publicLabel": "背景基调",
        "description": "页面背景主题，用于在相邻页之间制造色彩跳跃。"
      },
      {
        "key": "imageCount",
        "label": "图片槽数量",
        "type": "slider",
        "default": 1,
        "min": 0,
        "max": 1,
        "step": 1,
        "desc": "主图图片槽数量；为 0 时回退为单栏文字版式。",
        "publicKey": "imageCount",
        "publicLabel": "图片槽数量",
        "description": "主图图片槽数量；为 0 时回退为单栏文字版式。"
      },
      {
        "key": "imagePosition",
        "label": "图片位置",
        "type": "select",
        "default": "right",
        "options": [
          {
            "value": "left",
            "label": "左"
          },
          {
            "value": "right",
            "label": "右"
          }
        ],
        "desc": "主图相对文字的位置。",
        "publicKey": "imagePosition",
        "publicLabel": "图片位置",
        "description": "主图相对文字的位置。"
      },
      {
        "key": "showStats",
        "label": "指标行",
        "type": "toggle",
        "default": true,
        "desc": "正文下方的关键指标行。",
        "publicKey": "showStats",
        "publicLabel": "指标行",
        "description": "正文下方的关键指标行。"
      },
      {
        "key": "statCount",
        "label": "指标数量",
        "type": "slider",
        "default": 3,
        "min": 1,
        "max": 3,
        "step": 1,
        "desc": "关键指标的条目数量。",
        "publicKey": "itemCount",
        "publicLabel": "指标数量",
        "description": "关键指标的条目数量。"
      },
      {
        "key": "emphasis",
        "label": "重点突出",
        "type": "toggle",
        "default": false,
        "desc": "开启后突出某一指标，其余弱化。",
        "publicKey": "emphasis",
        "publicLabel": "重点突出",
        "description": "开启后突出某一指标，其余弱化。"
      },
      {
        "key": "emphasisIndex",
        "label": "重点序号",
        "type": "slider",
        "default": 0,
        "min": 0,
        "max": 2,
        "step": 1,
        "desc": "需要突出的指标序号（从 0 起）。",
        "publicKey": "emphasisIndex",
        "publicLabel": "重点序号",
        "description": "需要突出的指标序号（从 0 起）。"
      },
      {
        "key": "showCaption",
        "label": "图片说明",
        "type": "toggle",
        "default": true,
        "desc": "主图下方的说明标注（有图时）。",
        "publicKey": "showCaption",
        "publicLabel": "图片说明",
        "description": "主图下方的说明标注（有图时）。"
      },
      {
        "key": "showKicker",
        "label": "装饰副标题",
        "type": "toggle",
        "default": true,
        "desc": "主标题上方的装饰标签。",
        "publicKey": "showKicker",
        "publicLabel": "装饰副标题",
        "description": "主标题上方的装饰标签。"
      },
      {
        "key": "showGhostMark",
        "label": "背景大字符",
        "type": "toggle",
        "default": true,
        "desc": "角落超大幽灵数字装饰。",
        "publicKey": "showGhostMark",
        "publicLabel": "背景大字符",
        "description": "角落超大幽灵数字装饰。"
      },
      {
        "key": "showScaffold",
        "label": "边框骨架",
        "type": "toggle",
        "default": true,
        "desc": "侧边竖排标签与四角括线。",
        "publicKey": "showScaffold",
        "publicLabel": "边框骨架",
        "description": "侧边竖排标签与四角括线。"
      },
      {
        "key": "showMeta",
        "label": "底部信息条",
        "type": "toggle",
        "default": true,
        "desc": "底部页脚信息与进度条。",
        "publicKey": "showMeta",
        "publicLabel": "底部信息条",
        "description": "底部页脚信息与进度条。"
      }
    ],
    "defaultProps": {
      "surface": "ink",
      "imageCount": 1,
      "images": [],
      "imagePosition": "right",
      "showStats": true,
      "statCount": 3,
      "emphasis": false,
      "emphasisIndex": 0,
      "showCaption": true,
      "showKicker": true,
      "showGhostMark": true,
      "showScaffold": true,
      "showMeta": true,
      "ghostMark": "08",
      "railText": "Case — 案例",
      "navItems": [
        "案例"
      ],
      "navCurrent": 0,
      "ixNo": "08",
      "ixLabel": "Case",
      "kickerNo": "案例",
      "kickerEn": "Case study",
      "headingHtml": "一个落地页，<br><span class=\"ign-ember-text\">跑赢三家代理</span>。",
      "bodyText": "我们重建了客户的主落地页：信息层级、首屏主张、行动路径全部围绕「转化」重写。上线 14 天，自然进线翻倍，单客成本反而下降。",
      "imagePlaceholder": "案例主图 · 16:10",
      "capTag": "↗ Before / After",
      "capText": "VOLT 落地页改版",
      "stats": [
        {
          "sv": "×3.8",
          "sl": "转化率提升"
        },
        {
          "sv": "−41%",
          "sl": "获客成本"
        },
        {
          "sv": "14 天",
          "sl": "首次见效"
        }
      ],
      "metaLeft": "IGNIS — 燃点 · 真实客户案例",
      "metaMid": "改版不是换皮，是重排路径"
    }
  },
  {
    "key": "theme11_page017",
    "themeKey": "theme11",
    "pageNumber": 17,
    "layout": "THEME11-017",
    "slot": "page17",
    "label": "见证",
    "bgClass": "",
    "controls": [
      {
        "key": "surface",
        "label": "背景基调",
        "type": "select",
        "default": "ember",
        "options": [
          {
            "value": "ink",
            "label": "深色"
          },
          {
            "value": "paper",
            "label": "浅色"
          },
          {
            "value": "ember",
            "label": "暖橙"
          }
        ],
        "desc": "页面背景主题，用于在相邻页之间制造色彩跳跃。",
        "publicKey": "surface",
        "publicLabel": "背景基调",
        "description": "页面背景主题，用于在相邻页之间制造色彩跳跃。"
      },
      {
        "key": "avatarCount",
        "label": "头像数量",
        "type": "slider",
        "default": 1,
        "min": 0,
        "max": 1,
        "step": 1,
        "desc": "客户头像图片槽数量（0 为留白占位）。",
        "publicKey": "avatarCount",
        "publicLabel": "头像数量",
        "description": "客户头像图片槽数量（0 为留白占位）。"
      },
      {
        "key": "portraitShape",
        "label": "头像形状",
        "type": "select",
        "default": "rounded",
        "options": [
          {
            "value": "rounded",
            "label": "圆角方形"
          },
          {
            "value": "circle",
            "label": "正圆"
          }
        ],
        "desc": "头像槽的裁切形状。",
        "publicKey": "portraitShape",
        "publicLabel": "头像形状",
        "description": "头像槽的裁切形状。"
      },
      {
        "key": "showRating",
        "label": "评分行",
        "type": "toggle",
        "default": true,
        "desc": "引文上下的菱形评分点。",
        "publicKey": "showStatusRating",
        "publicLabel": "评分行",
        "description": "引文上下的菱形评分点。"
      },
      {
        "key": "showMetric",
        "label": "成果数字",
        "type": "toggle",
        "default": true,
        "desc": "左下角的大号成果指标。",
        "publicKey": "showMetric",
        "publicLabel": "成果数字",
        "description": "左下角的大号成果指标。"
      },
      {
        "key": "showKicker",
        "label": "装饰副标题",
        "type": "toggle",
        "default": true,
        "desc": "导航旁的装饰标签。",
        "publicKey": "showKicker",
        "publicLabel": "装饰副标题",
        "description": "导航旁的装饰标签。"
      },
      {
        "key": "showGhostMark",
        "label": "背景大字符",
        "type": "toggle",
        "default": true,
        "desc": "角落超大幽灵引号装饰。",
        "publicKey": "showGhostMark",
        "publicLabel": "背景大字符",
        "description": "角落超大幽灵引号装饰。"
      },
      {
        "key": "showScaffold",
        "label": "边框骨架",
        "type": "toggle",
        "default": true,
        "desc": "侧边竖排标签与四角括线。",
        "publicKey": "showScaffold",
        "publicLabel": "边框骨架",
        "description": "侧边竖排标签与四角括线。"
      },
      {
        "key": "showMeta",
        "label": "底部信息条",
        "type": "toggle",
        "default": true,
        "desc": "底部页脚信息与进度条。",
        "publicKey": "showMeta",
        "publicLabel": "底部信息条",
        "description": "底部页脚信息与进度条。"
      }
    ],
    "defaultProps": {
      "surface": "ember",
      "avatarCount": 1,
      "avatar": [],
      "portraitShape": "rounded",
      "showRating": true,
      "showMetric": true,
      "showKicker": true,
      "showGhostMark": true,
      "showScaffold": true,
      "showMeta": true,
      "ghostMark": "“",
      "markGlyph": "“",
      "railText": "Voice — 见证",
      "navItems": [
        "见证"
      ],
      "navCurrent": 0,
      "ixNo": "09",
      "ixLabel": "Voice",
      "quoteHtml": "他们不是接了个活，而是把<span class=\"ign-ember-text\">整条增长路径</span>接管下来——三个月，转化曲线第一次<span class=\"ign-serif\">真的</span>立起来了。",
      "ratingText": "5.0 · 长期续约",
      "attrName": "林见川",
      "attrTitle": "DAZZ · 增长负责人",
      "metricValue": "3.8×",
      "metricLabel": "合作首季度，注册到付费的转化倍数。",
      "portraitPlaceholder": "客户头像",
      "capName": "DAZZ",
      "capSuffix": " .",
      "capSub": "SaaS · 北美",
      "metaLeft": "IGNIS — 燃点 · 客户见证",
      "metaMid": "让结果替我们说话"
    }
  },
  {
    "key": "theme11_page018",
    "themeKey": "theme11",
    "pageNumber": 18,
    "layout": "THEME11-018",
    "slot": "page18",
    "label": "价值",
    "bgClass": "",
    "controls": [
      {
        "key": "surface",
        "label": "背景基调",
        "type": "select",
        "default": "paper",
        "options": [
          {
            "value": "ink",
            "label": "深色"
          },
          {
            "value": "paper",
            "label": "浅色"
          },
          {
            "value": "ember",
            "label": "暖橙"
          }
        ],
        "desc": "页面背景主题，用于在相邻页之间制造色彩跳跃。",
        "publicKey": "surface",
        "publicLabel": "背景基调",
        "description": "页面背景主题，用于在相邻页之间制造色彩跳跃。"
      },
      {
        "key": "pillarCount",
        "label": "价值柱数量",
        "type": "slider",
        "default": 3,
        "min": 2,
        "max": 3,
        "step": 1,
        "desc": "横向价值柱的数量。",
        "publicKey": "pillarCount",
        "publicLabel": "价值柱数量",
        "description": "横向价值柱的数量。"
      },
      {
        "key": "emphasis",
        "label": "重点突出",
        "type": "toggle",
        "default": true,
        "desc": "开启后突出某一根价值柱，其余弱化。",
        "publicKey": "emphasis",
        "publicLabel": "重点突出",
        "description": "开启后突出某一根价值柱，其余弱化。"
      },
      {
        "key": "emphasisIndex",
        "label": "重点序号",
        "type": "slider",
        "default": 2,
        "min": 0,
        "max": 2,
        "step": 1,
        "desc": "需要突出的价值柱序号（从 0 起），仅在“重点突出”开启时生效。",
        "publicKey": "emphasisIndex",
        "publicLabel": "重点序号",
        "description": "需要突出的价值柱序号（从 0 起），仅在“重点突出”开启时生效。"
      },
      {
        "key": "showStat",
        "label": "指标行",
        "type": "toggle",
        "default": true,
        "desc": "每根价值柱底部的关键数字。",
        "publicKey": "showStat",
        "publicLabel": "指标行",
        "description": "每根价值柱底部的关键数字。"
      },
      {
        "key": "showKicker",
        "label": "装饰副标题",
        "type": "toggle",
        "default": true,
        "desc": "标题旁的衬线注释文案。",
        "publicKey": "showKicker",
        "publicLabel": "装饰副标题",
        "description": "标题旁的衬线注释文案。"
      },
      {
        "key": "showGhostMark",
        "label": "背景大字符",
        "type": "toggle",
        "default": true,
        "desc": "角落超大幽灵数字装饰。",
        "publicKey": "showGhostMark",
        "publicLabel": "背景大字符",
        "description": "角落超大幽灵数字装饰。"
      },
      {
        "key": "showScaffold",
        "label": "边框骨架",
        "type": "toggle",
        "default": true,
        "desc": "侧边竖排标签与四角括线。",
        "publicKey": "showScaffold",
        "publicLabel": "边框骨架",
        "description": "侧边竖排标签与四角括线。"
      },
      {
        "key": "showMeta",
        "label": "底部信息条",
        "type": "toggle",
        "default": true,
        "desc": "底部页脚信息与进度条。",
        "publicKey": "showMeta",
        "publicLabel": "底部信息条",
        "description": "底部页脚信息与进度条。"
      }
    ],
    "defaultProps": {
      "surface": "paper",
      "pillarCount": 3,
      "emphasis": true,
      "emphasisIndex": 2,
      "showStat": true,
      "showKicker": true,
      "showGhostMark": true,
      "showScaffold": true,
      "showMeta": true,
      "ghostMark": "04",
      "railText": "Value — 价值",
      "navItems": [
        "价值"
      ],
      "navCurrent": 0,
      "ixNo": "04",
      "ixLabel": "Value",
      "headingHtml": "从优化，<br><span class=\"ign-ember-text\">到利润</span>。",
      "noteHtml": "同一支团队，从降本到增收，<br>覆盖转化的每一段路径。",
      "pillars": [
        {
          "w": "优化",
          "en": "Optimize",
          "d": "通过最大化现有流量的价值来降低获客成本，把每一次到访都变成可衡量的资产。",
          "sv": "−38%",
          "sl": "获客成本 CAC"
        },
        {
          "w": "互动",
          "en": "Engage",
          "d": "用数据驱动决策、改进策略规划，让内容与受众在每个触点真正发生连接。",
          "sv": "2.4×",
          "sl": "互动深度"
        },
        {
          "w": "利润",
          "en": "Profit",
          "d": "通过消除任何阻碍访客转化的摩擦，确保从点击到收入的体验始终无缝顺滑。",
          "sv": "3.8×",
          "sl": "投放回报 ROI"
        }
      ],
      "metaLeft": "IGNIS — 燃点 · 转化价值模型",
      "metaMid": "优化 · 互动 · 利润"
    }
  },
  {
    "key": "theme11_page019",
    "themeKey": "theme11",
    "pageNumber": 19,
    "layout": "THEME11-019",
    "slot": "page19",
    "label": "格局",
    "bgClass": "",
    "controls": [
      {
        "key": "surface",
        "label": "背景基调",
        "type": "select",
        "default": "ember",
        "options": [
          {
            "value": "ink",
            "label": "深色"
          },
          {
            "value": "paper",
            "label": "浅色"
          },
          {
            "value": "ember",
            "label": "暖橙"
          }
        ],
        "desc": "页面背景主题，用于在相邻页之间制造色彩跳跃。",
        "publicKey": "surface",
        "publicLabel": "背景基调",
        "description": "页面背景主题，用于在相邻页之间制造色彩跳跃。"
      },
      {
        "key": "plotCount",
        "label": "气泡数量",
        "type": "slider",
        "default": 6,
        "min": 3,
        "max": 6,
        "step": 1,
        "desc": "矩阵中绘制的参与者数量（始终包含「燃点」自身）。",
        "publicKey": "plotCount",
        "publicLabel": "气泡数量",
        "description": "矩阵中绘制的参与者数量（始终包含「燃点」自身）。"
      },
      {
        "key": "emphasis",
        "label": "重点突出",
        "type": "toggle",
        "default": true,
        "desc": "开启后弱化竞品气泡，突出「燃点」自身。",
        "publicKey": "emphasis",
        "publicLabel": "重点突出",
        "description": "开启后弱化竞品气泡，突出「燃点」自身。"
      },
      {
        "key": "showAxisLabels",
        "label": "坐标轴标签",
        "type": "toggle",
        "default": true,
        "desc": "横纵坐标轴的含义标签。",
        "publicKey": "showAxisLabels",
        "publicLabel": "坐标轴标签",
        "description": "横纵坐标轴的含义标签。"
      },
      {
        "key": "showQuadrantLabels",
        "label": "象限标签",
        "type": "toggle",
        "default": true,
        "desc": "四个象限角落的定性标签。",
        "publicKey": "showQuadrantLabels",
        "publicLabel": "象限标签",
        "description": "四个象限角落的定性标签。"
      },
      {
        "key": "showLegend",
        "label": "图例",
        "type": "toggle",
        "default": true,
        "desc": "左侧的气泡含义图例。",
        "publicKey": "showLegend",
        "publicLabel": "图例",
        "description": "左侧的气泡含义图例。"
      },
      {
        "key": "showKicker",
        "label": "装饰引言",
        "type": "toggle",
        "default": true,
        "desc": "标题上方的衬线引言。",
        "publicKey": "showKicker",
        "publicLabel": "装饰引言",
        "description": "标题上方的衬线引言。"
      },
      {
        "key": "showLede",
        "label": "说明文案",
        "type": "toggle",
        "default": true,
        "desc": "标题下方的说明段落。",
        "publicKey": "showLede",
        "publicLabel": "说明文案",
        "description": "标题下方的说明段落。"
      },
      {
        "key": "showGhostMark",
        "label": "背景大字符",
        "type": "toggle",
        "default": true,
        "desc": "角落超大幽灵字符装饰。",
        "publicKey": "showGhostMark",
        "publicLabel": "背景大字符",
        "description": "角落超大幽灵字符装饰。"
      },
      {
        "key": "showScaffold",
        "label": "边框骨架",
        "type": "toggle",
        "default": true,
        "desc": "侧边竖排标签与四角括线。",
        "publicKey": "showScaffold",
        "publicLabel": "边框骨架",
        "description": "侧边竖排标签与四角括线。"
      },
      {
        "key": "showMeta",
        "label": "底部信息条",
        "type": "toggle",
        "default": true,
        "desc": "底部页脚信息与进度条。",
        "publicKey": "showMeta",
        "publicLabel": "底部信息条",
        "description": "底部页脚信息与进度条。"
      }
    ],
    "defaultProps": {
      "surface": "ember",
      "plotCount": 6,
      "emphasis": true,
      "showAxisLabels": true,
      "showQuadrantLabels": true,
      "showLegend": true,
      "showKicker": true,
      "showLede": true,
      "showGhostMark": true,
      "showScaffold": true,
      "showMeta": true,
      "ghostMark": "2×2",
      "railText": "Landscape — 格局",
      "navItems": [
        "格局"
      ],
      "navCurrent": 0,
      "ixNo": "10",
      "ixLabel": "Landscape",
      "lead": "Where we sit.",
      "headingHtml": "同样的钱，<br><span class=\"ign-ember-text\">买更高的效</span>。",
      "lede": "把市面上的选择放进同一张图：多数方案要么贵、要么平庸，左上角的「划算且高效」几乎空着。",
      "legendUs": "燃点 · 高效且划算",
      "legendThem": "其它方案 · 现状分布",
      "quadrantLabels": [
        "划算 · 高效",
        "昂贵 · 高效",
        "便宜 · 平庸",
        "昂贵 · 低效"
      ],
      "axisX": "投入成本 →",
      "axisY": "增长效果 →",
      "others": [
        {
          "name": "综合代理",
          "x": 78,
          "y": 50,
          "r": 36
        },
        {
          "name": "外包工厂",
          "x": 68,
          "y": 20,
          "r": 30
        },
        {
          "name": "内部团队",
          "x": 56,
          "y": 34,
          "r": 32
        },
        {
          "name": "垂直工具",
          "x": 40,
          "y": 42,
          "r": 28
        },
        {
          "name": "自由职业",
          "x": 28,
          "y": 22,
          "r": 26
        }
      ],
      "us": {
        "name": "燃点",
        "x": 22,
        "y": 80,
        "r": 52,
        "us": true
      },
      "metaLeft": "IGNIS — 燃点 · 竞争格局",
      "metaMid": "左上角，本该有人站"
    }
  },
  {
    "key": "theme11_page020",
    "themeKey": "theme11",
    "pageNumber": 20,
    "layout": "THEME11-020",
    "slot": "page20",
    "label": "服务",
    "bgClass": "",
    "controls": [
      {
        "key": "surface",
        "label": "背景基调",
        "type": "select",
        "default": "ink",
        "options": [
          {
            "value": "ink",
            "label": "深色"
          },
          {
            "value": "paper",
            "label": "浅色"
          },
          {
            "value": "ember",
            "label": "暖橙"
          }
        ],
        "desc": "页面背景主题，用于在相邻页之间制造色彩跳跃。",
        "publicKey": "surface",
        "publicLabel": "背景基调",
        "description": "页面背景主题，用于在相邻页之间制造色彩跳跃。"
      },
      {
        "key": "serviceCount",
        "label": "服务条目数",
        "type": "slider",
        "default": 4,
        "min": 3,
        "max": 5,
        "step": 1,
        "desc": "左侧服务清单的条目数量。",
        "publicKey": "itemCount",
        "publicLabel": "服务条目数",
        "description": "左侧服务清单的条目数量。"
      },
      {
        "key": "emphasis",
        "label": "重点突出",
        "type": "toggle",
        "default": false,
        "desc": "开启后突出某一条服务，其余弱化。",
        "publicKey": "emphasis",
        "publicLabel": "重点突出",
        "description": "开启后突出某一条服务，其余弱化。"
      },
      {
        "key": "emphasisIndex",
        "label": "重点序号",
        "type": "slider",
        "default": 0,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "需要突出的服务序号（从 0 起）。",
        "publicKey": "emphasisIndex",
        "publicLabel": "重点序号",
        "description": "需要突出的服务序号（从 0 起）。"
      },
      {
        "key": "showArrow",
        "label": "箭头母题",
        "type": "toggle",
        "default": true,
        "desc": "右侧的圆环箭头品牌母题。",
        "publicKey": "showArrow",
        "publicLabel": "箭头母题",
        "description": "右侧的圆环箭头品牌母题。"
      },
      {
        "key": "showPills",
        "label": "能力标签行",
        "type": "toggle",
        "default": true,
        "desc": "底部的能力标签胶囊行。",
        "publicKey": "showPills",
        "publicLabel": "能力标签行",
        "description": "底部的能力标签胶囊行。"
      },
      {
        "key": "pillCount",
        "label": "标签数量",
        "type": "slider",
        "default": 6,
        "min": 3,
        "max": 8,
        "step": 1,
        "desc": "能力标签的数量。",
        "publicKey": "pillCount",
        "publicLabel": "标签数量",
        "description": "能力标签的数量。"
      },
      {
        "key": "pillActiveIndex",
        "label": "高亮标签序号",
        "type": "slider",
        "default": 1,
        "min": 0,
        "max": 7,
        "step": 1,
        "desc": "高亮为实底的标签序号（从 0 起）。",
        "publicKey": "pillActiveIndex",
        "publicLabel": "高亮标签序号",
        "description": "高亮为实底的标签序号（从 0 起）。"
      },
      {
        "key": "showKicker",
        "label": "装饰副标题",
        "type": "toggle",
        "default": true,
        "desc": "主标题上方的装饰眉标。",
        "publicKey": "showKicker",
        "publicLabel": "装饰副标题",
        "description": "主标题上方的装饰眉标。"
      },
      {
        "key": "showGhostMark",
        "label": "背景大字符",
        "type": "toggle",
        "default": true,
        "desc": "角落超大幽灵数字装饰。",
        "publicKey": "showGhostMark",
        "publicLabel": "背景大字符",
        "description": "角落超大幽灵数字装饰。"
      },
      {
        "key": "showScaffold",
        "label": "边框骨架",
        "type": "toggle",
        "default": true,
        "desc": "侧边竖排标签与四角括线。",
        "publicKey": "showScaffold",
        "publicLabel": "边框骨架",
        "description": "侧边竖排标签与四角括线。"
      }
    ],
    "defaultProps": {
      "surface": "ink",
      "serviceCount": 4,
      "emphasis": false,
      "emphasisIndex": 0,
      "showArrow": true,
      "showPills": true,
      "pillCount": 6,
      "pillActiveIndex": 1,
      "showKicker": true,
      "showGhostMark": true,
      "showScaffold": true,
      "ghostMark": "05",
      "railText": "Services — 服务",
      "navItems": [
        "服务"
      ],
      "navCurrent": 0,
      "ixNo": "05",
      "ixLabel": "Services",
      "eyebrowNo": "05",
      "eyebrowText": "What we do",
      "headingHtml": "不止于<br><span class=\"ign-ember-text\">数字营销</span>。",
      "arrowGlyph": "↗",
      "services": [
        {
          "t": "搜索引擎优化",
          "e": "Search"
        },
        {
          "t": "网站开发与维护",
          "e": "Web Dev"
        },
        {
          "t": "转化率优化",
          "e": "Convert"
        },
        {
          "t": "付费搜索投放",
          "e": "Paid Media"
        },
        {
          "t": "数据分析与归因",
          "e": "Analytics"
        }
      ],
      "pills": [
        "关键词映射",
        "竞品分析",
        "关键词研究",
        "网站分析",
        "内容策略",
        "流量获取",
        "A/B 测试",
        "技术 SEO"
      ]
    }
  },
  {
    "key": "theme11_page021",
    "themeKey": "theme11",
    "pageNumber": 21,
    "layout": "THEME11-021",
    "slot": "page21",
    "label": "路线",
    "bgClass": "",
    "controls": [
      {
        "key": "surface",
        "label": "背景基调",
        "type": "select",
        "default": "ember",
        "options": [
          {
            "value": "ink",
            "label": "深色"
          },
          {
            "value": "paper",
            "label": "浅色"
          },
          {
            "value": "ember",
            "label": "暖橙"
          }
        ],
        "desc": "页面背景主题，用于在相邻页之间制造色彩跳跃。",
        "publicKey": "surface",
        "publicLabel": "背景基调",
        "description": "页面背景主题，用于在相邻页之间制造色彩跳跃。"
      },
      {
        "key": "milestoneCount",
        "label": "里程碑数量",
        "type": "slider",
        "default": 5,
        "min": 3,
        "max": 5,
        "step": 1,
        "desc": "时间轴里程碑的数量。",
        "publicKey": "milestoneCount",
        "publicLabel": "里程碑数量",
        "description": "时间轴里程碑的数量。"
      },
      {
        "key": "emphasis",
        "label": "重点突出",
        "type": "toggle",
        "default": false,
        "desc": "开启后突出某一里程碑，其余弱化。",
        "publicKey": "emphasis",
        "publicLabel": "重点突出",
        "description": "开启后突出某一里程碑，其余弱化。"
      },
      {
        "key": "emphasisIndex",
        "label": "重点序号",
        "type": "slider",
        "default": 0,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "需要突出的里程碑序号（从 0 起）。",
        "publicKey": "emphasisIndex",
        "publicLabel": "重点序号",
        "description": "需要突出的里程碑序号（从 0 起）。"
      },
      {
        "key": "showAxis",
        "label": "时间轴线",
        "type": "toggle",
        "default": true,
        "desc": "左侧的竖向轴线与节点圆点。",
        "publicKey": "showAxis",
        "publicLabel": "时间轴线",
        "description": "左侧的竖向轴线与节点圆点。"
      },
      {
        "key": "showKicker",
        "label": "装饰引言",
        "type": "toggle",
        "default": true,
        "desc": "标题上方的衬线引言。",
        "publicKey": "showKicker",
        "publicLabel": "装饰引言",
        "description": "标题上方的衬线引言。"
      },
      {
        "key": "showLede",
        "label": "说明文案",
        "type": "toggle",
        "default": true,
        "desc": "标题下方的说明段落。",
        "publicKey": "showLede",
        "publicLabel": "说明文案",
        "description": "标题下方的说明段落。"
      },
      {
        "key": "showGhostMark",
        "label": "背景大字符",
        "type": "toggle",
        "default": true,
        "desc": "角落超大幽灵数字装饰。",
        "publicKey": "showGhostMark",
        "publicLabel": "背景大字符",
        "description": "角落超大幽灵数字装饰。"
      },
      {
        "key": "showScaffold",
        "label": "边框骨架",
        "type": "toggle",
        "default": true,
        "desc": "侧边竖排标签与四角括线。",
        "publicKey": "showScaffold",
        "publicLabel": "边框骨架",
        "description": "侧边竖排标签与四角括线。"
      },
      {
        "key": "showMeta",
        "label": "底部信息条",
        "type": "toggle",
        "default": true,
        "desc": "底部页脚信息与进度条。",
        "publicKey": "showMeta",
        "publicLabel": "底部信息条",
        "description": "底部页脚信息与进度条。"
      }
    ],
    "defaultProps": {
      "surface": "ember",
      "milestoneCount": 5,
      "emphasis": false,
      "emphasisIndex": 0,
      "showAxis": true,
      "showKicker": true,
      "showLede": true,
      "showGhostMark": true,
      "showScaffold": true,
      "showMeta": true,
      "ghostMark": "90d",
      "railText": "Roadmap — 路线",
      "navItems": [
        "路线"
      ],
      "navCurrent": 0,
      "ixNo": "11",
      "ixLabel": "Roadmap",
      "lead": "First 90 days.",
      "headingHtml": "前 90 天，<br><span class=\"ign-ember-text\">路线清晰</span>。",
      "lede": "没有模糊的「再观察看看」。每个阶段都有明确动作、明确产出、明确节点。",
      "miles": [
        {
          "day": "第 0 天",
          "t": "增长诊断",
          "en": "Audit",
          "d": "盘点现状、锁定增长瓶颈，给出可执行的优先级清单。"
        },
        {
          "day": "第 14 天",
          "t": "首批见效",
          "en": "Quick wins",
          "d": "从最容易兑现的杠杆切入，两周内拿到第一波可量化结果。"
        },
        {
          "day": "第 30 天",
          "t": "落地页上线",
          "en": "Launch",
          "d": "围绕转化重写主路径，新落地页与投放联动上线。"
        },
        {
          "day": "第 60 天",
          "t": "规模化测试",
          "en": "Scale",
          "d": "把跑通的玩法放大，系统化做 A/B 与渠道扩张。"
        },
        {
          "day": "第 90 天",
          "t": "复利增长",
          "en": "Compounding",
          "d": "增长进入复利区间，结构沉淀为可持续的引擎。"
        }
      ],
      "metaLeft": "IGNIS — 燃点 · 合作路线图",
      "metaMid": "每个节点，都看得见"
    }
  },
  {
    "key": "theme11_page022",
    "themeKey": "theme11",
    "pageNumber": 22,
    "layout": "THEME11-022",
    "slot": "page22",
    "label": "图辑",
    "bgClass": "",
    "controls": [
      {
        "key": "surface",
        "label": "背景基调",
        "type": "select",
        "default": "ink",
        "options": [
          {
            "value": "ink",
            "label": "深色"
          },
          {
            "value": "paper",
            "label": "浅色"
          },
          {
            "value": "ember",
            "label": "暖橙"
          }
        ],
        "desc": "页面背景主题，用于在相邻页之间制造色彩跳跃。",
        "publicKey": "surface",
        "publicLabel": "背景基调",
        "description": "页面背景主题，用于在相邻页之间制造色彩跳跃。"
      },
      {
        "key": "imageCount",
        "label": "图片数量",
        "type": "slider",
        "default": 2,
        "min": 0,
        "max": 2,
        "step": 1,
        "desc": "拼贴图片槽数量：0 占位、1 单图、2 主图+叠加小图。",
        "publicKey": "imageCount",
        "publicLabel": "图片数量",
        "description": "拼贴图片槽数量：0 占位、1 单图、2 主图+叠加小图。"
      },
      {
        "key": "showPoints",
        "label": "要点清单",
        "type": "toggle",
        "default": true,
        "desc": "左侧编号要点清单。",
        "publicKey": "showPoints",
        "publicLabel": "要点清单",
        "description": "左侧编号要点清单。"
      },
      {
        "key": "pointCount",
        "label": "要点数量",
        "type": "slider",
        "default": 3,
        "min": 2,
        "max": 3,
        "step": 1,
        "desc": "编号要点的条目数量。",
        "publicKey": "itemCount",
        "publicLabel": "要点数量",
        "description": "编号要点的条目数量。"
      },
      {
        "key": "showCaptions",
        "label": "图片标签",
        "type": "toggle",
        "default": true,
        "desc": "图片角标分类标签。",
        "publicKey": "showCaptions",
        "publicLabel": "图片标签",
        "description": "图片角标分类标签。"
      },
      {
        "key": "showNumber",
        "label": "装饰编号",
        "type": "toggle",
        "default": true,
        "desc": "拼贴角落的大号装饰编号。",
        "publicKey": "showNumber",
        "publicLabel": "装饰编号",
        "description": "拼贴角落的大号装饰编号。"
      },
      {
        "key": "showKicker",
        "label": "装饰引言",
        "type": "toggle",
        "default": true,
        "desc": "标题上方的衬线引言。",
        "publicKey": "showKicker",
        "publicLabel": "装饰引言",
        "description": "标题上方的衬线引言。"
      },
      {
        "key": "showGhostMark",
        "label": "背景大字符",
        "type": "toggle",
        "default": true,
        "desc": "角落超大幽灵字符装饰。",
        "publicKey": "showGhostMark",
        "publicLabel": "背景大字符",
        "description": "角落超大幽灵字符装饰。"
      },
      {
        "key": "showScaffold",
        "label": "边框骨架",
        "type": "toggle",
        "default": true,
        "desc": "侧边竖排标签与四角括线。",
        "publicKey": "showScaffold",
        "publicLabel": "边框骨架",
        "description": "侧边竖排标签与四角括线。"
      },
      {
        "key": "showMeta",
        "label": "底部信息条",
        "type": "toggle",
        "default": true,
        "desc": "底部页脚信息与进度条。",
        "publicKey": "showMeta",
        "publicLabel": "底部信息条",
        "description": "底部页脚信息与进度条。"
      }
    ],
    "defaultProps": {
      "surface": "ink",
      "imageCount": 2,
      "images": [],
      "showPoints": true,
      "pointCount": 3,
      "showCaptions": true,
      "showNumber": true,
      "showKicker": true,
      "showGhostMark": true,
      "showScaffold": true,
      "showMeta": true,
      "ghostMark": "图辑",
      "railText": "Spread — 镜像",
      "navItems": [
        "图辑"
      ],
      "navCurrent": 0,
      "ixNo": "12",
      "ixLabel": "Spread",
      "lead": "Before & after.",
      "headingHtml": "一次改版，<br><span class=\"ign-ember-text\">三层重排</span>。",
      "bodyText": "我们不只是换皮。从前台体验、后台结构到增长闭环，三层同时重排，结果才立得住。",
      "primaryTag": "改版后 · After",
      "secondaryTag": "改版前 · Before",
      "primaryPlaceholder": "主图 · 改版后",
      "secondaryPlaceholder": "叠加小图",
      "decoNumber": "02",
      "pts": [
        {
          "t": "前台体验",
          "d": "从首屏到结算的视觉与节奏"
        },
        {
          "t": "后台结构",
          "d": "信息架构与可维护性重排"
        },
        {
          "t": "增长闭环",
          "d": "投放、落地与复购的衔接"
        }
      ],
      "metaLeft": "IGNIS — 燃点 · 改版图辑",
      "metaMid": "换皮没用，换路径才行"
    }
  },
  {
    "key": "theme11_page023",
    "themeKey": "theme11",
    "pageNumber": 23,
    "layout": "THEME11-023",
    "slot": "page23",
    "label": "流程",
    "bgClass": "",
    "controls": [
      {
        "key": "surface",
        "label": "背景基调",
        "type": "select",
        "default": "paper",
        "options": [
          {
            "value": "ink",
            "label": "深色"
          },
          {
            "value": "paper",
            "label": "浅色"
          },
          {
            "value": "ember",
            "label": "暖橙"
          }
        ],
        "desc": "页面背景主题，用于在相邻页之间制造色彩跳跃。",
        "publicKey": "surface",
        "publicLabel": "背景基调",
        "description": "页面背景主题，用于在相邻页之间制造色彩跳跃。"
      },
      {
        "key": "stepCount",
        "label": "流程节点数",
        "type": "slider",
        "default": 5,
        "min": 3,
        "max": 5,
        "step": 1,
        "desc": "横向流程的节点数量。",
        "publicKey": "stepCount",
        "publicLabel": "流程节点数",
        "description": "横向流程的节点数量。"
      },
      {
        "key": "showStartNode",
        "label": "起点节点",
        "type": "toggle",
        "default": true,
        "desc": "流程最左侧的脉冲起点圆点。",
        "publicKey": "showStartNode",
        "publicLabel": "起点节点",
        "description": "流程最左侧的脉冲起点圆点。"
      },
      {
        "key": "emphasis",
        "label": "重点突出",
        "type": "toggle",
        "default": false,
        "desc": "开启后突出某一个流程节点，其余弱化。",
        "publicKey": "emphasis",
        "publicLabel": "重点突出",
        "description": "开启后突出某一个流程节点，其余弱化。"
      },
      {
        "key": "emphasisIndex",
        "label": "重点序号",
        "type": "slider",
        "default": 0,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "需要突出的节点序号（从 0 起）。",
        "publicKey": "emphasisIndex",
        "publicLabel": "重点序号",
        "description": "需要突出的节点序号（从 0 起）。"
      },
      {
        "key": "showCaptions",
        "label": "底部说明",
        "type": "toggle",
        "default": true,
        "desc": "底部的成果说明栏。",
        "publicKey": "showCaptions",
        "publicLabel": "底部说明",
        "description": "底部的成果说明栏。"
      },
      {
        "key": "captionCount",
        "label": "说明数量",
        "type": "slider",
        "default": 3,
        "min": 2,
        "max": 3,
        "step": 1,
        "desc": "底部说明栏的条目数量。",
        "publicKey": "itemCount",
        "publicLabel": "说明数量",
        "description": "底部说明栏的条目数量。"
      },
      {
        "key": "showKicker",
        "label": "装饰副标题",
        "type": "toggle",
        "default": true,
        "desc": "主标题上方的衬线引言。",
        "publicKey": "showKicker",
        "publicLabel": "装饰副标题",
        "description": "主标题上方的衬线引言。"
      },
      {
        "key": "showGhostMark",
        "label": "背景大字符",
        "type": "toggle",
        "default": true,
        "desc": "角落超大幽灵数字装饰。",
        "publicKey": "showGhostMark",
        "publicLabel": "背景大字符",
        "description": "角落超大幽灵数字装饰。"
      },
      {
        "key": "showScaffold",
        "label": "边框骨架",
        "type": "toggle",
        "default": true,
        "desc": "侧边竖排标签与四角括线。",
        "publicKey": "showScaffold",
        "publicLabel": "边框骨架",
        "description": "侧边竖排标签与四角括线。"
      },
      {
        "key": "showMeta",
        "label": "底部信息条",
        "type": "toggle",
        "default": true,
        "desc": "底部页脚信息与进度条。",
        "publicKey": "showMeta",
        "publicLabel": "底部信息条",
        "description": "底部页脚信息与进度条。"
      }
    ],
    "defaultProps": {
      "surface": "paper",
      "stepCount": 5,
      "showStartNode": true,
      "emphasis": false,
      "emphasisIndex": 0,
      "showCaptions": true,
      "captionCount": 3,
      "showKicker": true,
      "showGhostMark": true,
      "showScaffold": true,
      "showMeta": true,
      "ghostMark": "06",
      "railText": "Process — 流程",
      "navItems": [
        "流程"
      ],
      "navCurrent": 0,
      "ixNo": "06",
      "ixLabel": "Process",
      "lead": "Make every dollar count.",
      "headingHtml": "让每一分投入，<br><span class=\"ign-ember-text\">都转化为增长</span>。",
      "noteHtml": "一条贯通的工作流，<br>从研究到复利环环相扣。",
      "steps": [
        {
          "t": "关键词研究",
          "e": "Research"
        },
        {
          "t": "落地页搭建",
          "e": "Build"
        },
        {
          "t": "文案撰写",
          "e": "Copy"
        },
        {
          "t": "A/B 测试",
          "e": "Test"
        },
        {
          "t": "转化率优化",
          "e": "Optimize"
        }
      ],
      "caps": [
        {
          "t": "Immediate exposure",
          "d": "凭借精准的渠道定位，让品牌即刻获得有效曝光。"
        },
        {
          "t": "Accelerate leads",
          "d": "用清晰、高转化的落地页，加速整条线索生成流程。"
        },
        {
          "t": "Maximize budget",
          "d": "以高效的出价策略，让每一份预算都物尽其用。"
        }
      ],
      "metaLeft": "IGNIS — 燃点 · 增长工作流",
      "metaMid": "研究 → 搭建 → 测试 → 复利"
    }
  },
  {
    "key": "theme11_page024",
    "themeKey": "theme11",
    "pageNumber": 24,
    "layout": "THEME11-024",
    "slot": "page24",
    "label": "诊断",
    "bgClass": "",
    "controls": [
      {
        "key": "surface",
        "label": "背景基调",
        "type": "select",
        "default": "ink",
        "options": [
          {
            "value": "ink",
            "label": "深色"
          },
          {
            "value": "paper",
            "label": "浅色"
          },
          {
            "value": "ember",
            "label": "暖橙"
          }
        ],
        "desc": "页面背景主题，用于在相邻页之间制造色彩跳跃。",
        "publicKey": "surface",
        "publicLabel": "背景基调",
        "description": "页面背景主题，用于在相邻页之间制造色彩跳跃。"
      },
      {
        "key": "showGauge",
        "label": "状态度仪表",
        "type": "toggle",
        "default": true,
        "desc": "左侧的半环状态度仪表；隐藏时右侧指标占满整行。",
        "publicKey": "showGauge",
        "publicLabel": "状态度仪表",
        "description": "左侧的半环状态度仪表；隐藏时右侧指标占满整行。"
      },
      {
        "key": "metricCount",
        "label": "指标数量",
        "type": "slider",
        "default": 3,
        "min": 1,
        "max": 3,
        "step": 1,
        "desc": "右侧技术指标的数量。",
        "publicKey": "metricCount",
        "publicLabel": "指标数量",
        "description": "右侧技术指标的数量。"
      },
      {
        "key": "emphasis",
        "label": "重点突出",
        "type": "toggle",
        "default": false,
        "desc": "开启后突出某一项指标，其余弱化。",
        "publicKey": "emphasis",
        "publicLabel": "重点突出",
        "description": "开启后突出某一项指标，其余弱化。"
      },
      {
        "key": "emphasisIndex",
        "label": "重点序号",
        "type": "slider",
        "default": 0,
        "min": 0,
        "max": 2,
        "step": 1,
        "desc": "需要突出的指标序号（从 0 起）。",
        "publicKey": "emphasisIndex",
        "publicLabel": "重点序号",
        "description": "需要突出的指标序号（从 0 起）。"
      },
      {
        "key": "showBars",
        "label": "指标进度条",
        "type": "toggle",
        "default": true,
        "desc": "每项指标下方的进度条。",
        "publicKey": "showBars",
        "publicLabel": "指标进度条",
        "description": "每项指标下方的进度条。"
      },
      {
        "key": "showFoot",
        "label": "底部说明",
        "type": "toggle",
        "default": true,
        "desc": "底部的成果说明栏。",
        "publicKey": "showFoot",
        "publicLabel": "底部说明",
        "description": "底部的成果说明栏。"
      },
      {
        "key": "footCount",
        "label": "说明数量",
        "type": "slider",
        "default": 2,
        "min": 1,
        "max": 2,
        "step": 1,
        "desc": "底部说明栏的条目数量。",
        "publicKey": "itemCount",
        "publicLabel": "说明数量",
        "description": "底部说明栏的条目数量。"
      },
      {
        "key": "showKicker",
        "label": "装饰副标题",
        "type": "toggle",
        "default": true,
        "desc": "主标题上方的衬线引言。",
        "publicKey": "showKicker",
        "publicLabel": "装饰副标题",
        "description": "主标题上方的衬线引言。"
      },
      {
        "key": "showGhostMark",
        "label": "背景大字符",
        "type": "toggle",
        "default": true,
        "desc": "角落超大幽灵数字装饰。",
        "publicKey": "showGhostMark",
        "publicLabel": "背景大字符",
        "description": "角落超大幽灵数字装饰。"
      },
      {
        "key": "showScaffold",
        "label": "边框骨架",
        "type": "toggle",
        "default": true,
        "desc": "侧边竖排标签与四角括线。",
        "publicKey": "showScaffold",
        "publicLabel": "边框骨架",
        "description": "侧边竖排标签与四角括线。"
      }
    ],
    "defaultProps": {
      "surface": "ink",
      "showGauge": true,
      "metricCount": 3,
      "emphasis": false,
      "emphasisIndex": 0,
      "showBars": true,
      "showFoot": true,
      "footCount": 2,
      "showKicker": true,
      "showGhostMark": true,
      "showScaffold": true,
      "ghostMark": "07",
      "railText": "Health — 诊断",
      "navItems": [
        "诊断"
      ],
      "navCurrent": 0,
      "ixNo": "07",
      "ixLabel": "Health",
      "lead": "Websites that convert.",
      "headingHtml": "开发与维护，<br><span class=\"ign-ember-text\">同样可量化</span>。",
      "noteHtml": "一份透明的健康度档案，<br>问题与进展一目了然。",
      "gaugeValue": 96,
      "gaugeCaption": "健康度 · 优秀",
      "metrics": [
        {
          "v": "185",
          "l": "已修复技术问题 · 本月累计",
          "bar": 92
        },
        {
          "v": "15%",
          "l": "警告项 · 排队等待优化",
          "bar": 15
        },
        {
          "v": "4%",
          "l": "严重项 · 正在处理中",
          "bar": 4
        }
      ],
      "foot": [
        {
          "t": "Higher rankings",
          "d": "为现有页面创建优化内容，让网站更受搜索引擎青睐。"
        },
        {
          "t": "Free your team",
          "d": "把例行的内容发布与迁移工作交给我们，团队得以专注核心。"
        }
      ]
    }
  },
  {
    "key": "theme11_page025",
    "themeKey": "theme11",
    "pageNumber": 25,
    "layout": "THEME11-025",
    "slot": "page25",
    "label": "对比",
    "bgClass": "",
    "controls": [
      {
        "key": "surface",
        "label": "背景基调",
        "type": "select",
        "default": "ember",
        "options": [
          {
            "value": "ink",
            "label": "深色"
          },
          {
            "value": "paper",
            "label": "浅色"
          },
          {
            "value": "ember",
            "label": "暖橙"
          }
        ],
        "desc": "页面背景主题，用于在相邻页之间制造色彩跳跃。",
        "publicKey": "surface",
        "publicLabel": "背景基调",
        "description": "页面背景主题，用于在相邻页之间制造色彩跳跃。"
      },
      {
        "key": "columnCount",
        "label": "对比列数",
        "type": "slider",
        "default": 3,
        "min": 2,
        "max": 3,
        "step": 1,
        "desc": "参与对比的方案列数。",
        "publicKey": "columnCount",
        "publicLabel": "对比列数",
        "description": "参与对比的方案列数。"
      },
      {
        "key": "rowCount",
        "label": "对比行数",
        "type": "slider",
        "default": 6,
        "min": 3,
        "max": 6,
        "step": 1,
        "desc": "对比维度（行）的数量。",
        "publicKey": "rowCount",
        "publicLabel": "对比行数",
        "description": "对比维度（行）的数量。"
      },
      {
        "key": "highlightColumnIndex",
        "label": "高亮列",
        "type": "slider",
        "default": 0,
        "min": 0,
        "max": 2,
        "step": 1,
        "desc": "需要高亮的方案列序号（从 0 起，默认燃点列）。",
        "publicKey": "highlightColumnIndex",
        "publicLabel": "高亮列",
        "description": "需要高亮的方案列序号（从 0 起，默认燃点列）。"
      },
      {
        "key": "showHeadRow",
        "label": "表头行",
        "type": "toggle",
        "default": true,
        "desc": "方案名称表头行的显示与隐藏。",
        "publicKey": "showHeadRow",
        "publicLabel": "表头行",
        "description": "方案名称表头行的显示与隐藏。"
      },
      {
        "key": "showKicker",
        "label": "装饰副标题",
        "type": "toggle",
        "default": true,
        "desc": "主标题上方的装饰标签。",
        "publicKey": "showKicker",
        "publicLabel": "装饰副标题",
        "description": "主标题上方的装饰标签。"
      },
      {
        "key": "showFootNote",
        "label": "脚注",
        "type": "toggle",
        "default": true,
        "desc": "表格下方的衬线脚注。",
        "publicKey": "showFootNote",
        "publicLabel": "脚注",
        "description": "表格下方的衬线脚注。"
      },
      {
        "key": "showGhostMark",
        "label": "背景大字符",
        "type": "toggle",
        "default": true,
        "desc": "角落超大幽灵数字装饰。",
        "publicKey": "showGhostMark",
        "publicLabel": "背景大字符",
        "description": "角落超大幽灵数字装饰。"
      },
      {
        "key": "showScaffold",
        "label": "边框骨架",
        "type": "toggle",
        "default": true,
        "desc": "侧边竖排标签与四角括线。",
        "publicKey": "showScaffold",
        "publicLabel": "边框骨架",
        "description": "侧边竖排标签与四角括线。"
      },
      {
        "key": "showMeta",
        "label": "底部信息条",
        "type": "toggle",
        "default": true,
        "desc": "底部页脚信息与进度条。",
        "publicKey": "showMeta",
        "publicLabel": "底部信息条",
        "description": "底部页脚信息与进度条。"
      }
    ],
    "defaultProps": {
      "surface": "ember",
      "columnCount": 3,
      "rowCount": 6,
      "highlightColumnIndex": 0,
      "showHeadRow": true,
      "showKicker": true,
      "showFootNote": true,
      "showGhostMark": true,
      "showScaffold": true,
      "showMeta": true,
      "ghostMark": "VS",
      "railText": "Compare — 对比",
      "navItems": [
        "对比"
      ],
      "navCurrent": 0,
      "ixNo": "14",
      "ixLabel": "Compare",
      "eyebrowNo": "14",
      "eyebrowText": "Why one team wins",
      "headingHtml": "一支团队，<span class=\"ign-ember-text\">胜过一堆外包</span>。",
      "noteHtml": "同样的预算，<br>放在哪里更划算？",
      "cols": [
        {
          "hn": "燃点 IGNIS",
          "ht": "One team"
        },
        {
          "hn": "传统代理",
          "ht": "Agency"
        },
        {
          "hn": "自建团队",
          "ht": "In-house"
        }
      ],
      "rows": [
        {
          "k": "上线速度",
          "cells": [
            "14 天见效",
            "45–90 天",
            "3–6 个月"
          ]
        },
        {
          "k": "数据透明",
          "cells": [
            "全程可见",
            "月度报告",
            "视情况而定"
          ]
        },
        {
          "k": "月度成本",
          "cells": [
            "一份预算",
            "多笔外包",
            "多份全职薪资"
          ]
        },
        {
          "k": "渠道覆盖",
          "cells": [
            "搜索 + 投放 + 内容",
            "按项目拆分",
            "受限于人手"
          ]
        },
        {
          "k": "灵活度",
          "cells": [
            "随时调整",
            "合同绑定",
            "招聘周期"
          ]
        },
        {
          "k": "结果归属",
          "cells": [
            "对增长负责",
            "对交付负责",
            "对任务负责"
          ]
        }
      ],
      "footNote": "* 数据为典型合作场景下的中位表现，具体以诊断结果为准。",
      "metaLeft": "IGNIS — 燃点 · 方案对比",
      "metaMid": "省下的，都是利润"
    }
  },
  {
    "key": "theme11_page026",
    "themeKey": "theme11",
    "pageNumber": 26,
    "layout": "THEME11-026",
    "slot": "page26",
    "label": "清单",
    "bgClass": "",
    "controls": [
      {
        "key": "surface",
        "label": "背景基调",
        "type": "select",
        "default": "ink",
        "options": [
          {
            "value": "ink",
            "label": "深色"
          },
          {
            "value": "paper",
            "label": "浅色"
          },
          {
            "value": "ember",
            "label": "暖橙"
          }
        ],
        "desc": "页面背景主题，用于在相邻页之间制造色彩跳跃。",
        "publicKey": "surface",
        "publicLabel": "背景基调",
        "description": "页面背景主题，用于在相邻页之间制造色彩跳跃。"
      },
      {
        "key": "rowCount",
        "label": "能力行数",
        "type": "slider",
        "default": 7,
        "min": 4,
        "max": 7,
        "step": 1,
        "desc": "矩阵中的能力维度行数。",
        "publicKey": "rowCount",
        "publicLabel": "能力行数",
        "description": "矩阵中的能力维度行数。"
      },
      {
        "key": "columnCount",
        "label": "对比列数",
        "type": "slider",
        "default": 4,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "对比的方案列数（最后一列始终为「燃点」）。",
        "publicKey": "columnCount",
        "publicLabel": "对比列数",
        "description": "对比的方案列数（最后一列始终为「燃点」）。"
      },
      {
        "key": "highlightColumnIndex",
        "label": "高亮列",
        "type": "slider",
        "default": 3,
        "min": 0,
        "max": 3,
        "step": 1,
        "desc": "需要高亮的列序号（从 0 起，超出列数自动收敛）。",
        "publicKey": "highlightColumnIndex",
        "publicLabel": "高亮列",
        "description": "需要高亮的列序号（从 0 起，超出列数自动收敛）。"
      },
      {
        "key": "showHeadRow",
        "label": "表头行",
        "type": "toggle",
        "default": true,
        "desc": "顶部的方案名称表头。",
        "publicKey": "showHeadRow",
        "publicLabel": "表头行",
        "description": "顶部的方案名称表头。"
      },
      {
        "key": "showLegend",
        "label": "图例",
        "type": "toggle",
        "default": true,
        "desc": "底部的符号含义图例。",
        "publicKey": "showLegend",
        "publicLabel": "图例",
        "description": "底部的符号含义图例。"
      },
      {
        "key": "showKicker",
        "label": "装饰引言",
        "type": "toggle",
        "default": true,
        "desc": "标题上方的衬线引言。",
        "publicKey": "showKicker",
        "publicLabel": "装饰引言",
        "description": "标题上方的衬线引言。"
      },
      {
        "key": "showLede",
        "label": "说明文案",
        "type": "toggle",
        "default": true,
        "desc": "右上角的说明段落。",
        "publicKey": "showLede",
        "publicLabel": "说明文案",
        "description": "右上角的说明段落。"
      },
      {
        "key": "showGhostMark",
        "label": "背景大字符",
        "type": "toggle",
        "default": true,
        "desc": "角落超大幽灵字符装饰。",
        "publicKey": "showGhostMark",
        "publicLabel": "背景大字符",
        "description": "角落超大幽灵字符装饰。"
      },
      {
        "key": "showScaffold",
        "label": "边框骨架",
        "type": "toggle",
        "default": true,
        "desc": "侧边竖排标签与四角括线。",
        "publicKey": "showScaffold",
        "publicLabel": "边框骨架",
        "description": "侧边竖排标签与四角括线。"
      },
      {
        "key": "showMeta",
        "label": "底部信息条",
        "type": "toggle",
        "default": true,
        "desc": "底部页脚信息与进度条。",
        "publicKey": "showMeta",
        "publicLabel": "底部信息条",
        "description": "底部页脚信息与进度条。"
      }
    ],
    "defaultProps": {
      "surface": "ink",
      "rowCount": 7,
      "columnCount": 4,
      "highlightColumnIndex": 3,
      "showHeadRow": true,
      "showLegend": true,
      "showKicker": true,
      "showLede": true,
      "showGhostMark": true,
      "showScaffold": true,
      "showMeta": true,
      "ghostMark": "✓",
      "railText": "Coverage — 清单",
      "navItems": [
        "清单"
      ],
      "navCurrent": 0,
      "ixNo": "13",
      "ixLabel": "Coverage",
      "lead": "One team covers it.",
      "headingHtml": "覆盖，<span class=\"ign-ember-text\">无死角</span>。",
      "lede": "把能力摊开看：别的方案总在某一格留白，而一体化的意义，是没有那一格。",
      "rowHeadLabel": "能力维度",
      "colLabels": [
        "内部团队",
        "综合代理",
        "垂直工具"
      ],
      "usLabel": "燃点",
      "rows": [
        {
          "t": "搜索与内容",
          "en": "SEO & Content",
          "cells": [
            1,
            2,
            1,
            2
          ]
        },
        {
          "t": "转化率优化",
          "en": "CRO",
          "cells": [
            0,
            1,
            1,
            2
          ]
        },
        {
          "t": "网站开发维护",
          "en": "Web & Maintenance",
          "cells": [
            1,
            1,
            0,
            2
          ]
        },
        {
          "t": "付费投放",
          "en": "Paid Media",
          "cells": [
            1,
            2,
            2,
            2
          ]
        },
        {
          "t": "数据与归因",
          "en": "Data & Attribution",
          "cells": [
            0,
            1,
            1,
            2
          ]
        },
        {
          "t": "一体化协同",
          "en": "One Team",
          "cells": [
            0,
            0,
            0,
            2
          ]
        },
        {
          "t": "复利式增长",
          "en": "Compounding",
          "cells": [
            0,
            1,
            0,
            2
          ]
        }
      ],
      "legendFull": "完整覆盖",
      "legendHalf": "部分覆盖",
      "legendNone": "基本缺失",
      "metaLeft": "IGNIS — 燃点 · 能力覆盖矩阵",
      "metaMid": "没有留白的那一格"
    }
  },
  {
    "key": "theme11_page027",
    "themeKey": "theme11",
    "pageNumber": 27,
    "layout": "THEME11-027",
    "slot": "page27",
    "label": "套餐",
    "bgClass": "",
    "controls": [
      {
        "key": "surface",
        "label": "背景基调",
        "type": "select",
        "default": "paper",
        "options": [
          {
            "value": "ink",
            "label": "深色"
          },
          {
            "value": "paper",
            "label": "浅色"
          },
          {
            "value": "ember",
            "label": "暖橙"
          }
        ],
        "desc": "页面背景主题，用于在相邻页之间制造色彩跳跃。",
        "publicKey": "surface",
        "publicLabel": "背景基调",
        "description": "页面背景主题，用于在相邻页之间制造色彩跳跃。"
      },
      {
        "key": "planCount",
        "label": "套餐数量",
        "type": "slider",
        "default": 3,
        "min": 2,
        "max": 3,
        "step": 1,
        "desc": "价格套餐卡片的数量。",
        "publicKey": "planCount",
        "publicLabel": "套餐数量",
        "description": "价格套餐卡片的数量。"
      },
      {
        "key": "featured",
        "label": "主推套餐",
        "type": "toggle",
        "default": true,
        "desc": "开启后高亮某一张套餐为主推方案。",
        "publicKey": "featured",
        "publicLabel": "主推套餐",
        "description": "开启后高亮某一张套餐为主推方案。"
      },
      {
        "key": "featuredIndex",
        "label": "主推序号",
        "type": "slider",
        "default": 1,
        "min": 0,
        "max": 2,
        "step": 1,
        "desc": "主推套餐的序号（从 0 起），仅在“主推套餐”开启时生效。",
        "publicKey": "featuredIndex",
        "publicLabel": "主推序号",
        "description": "主推套餐的序号（从 0 起），仅在“主推套餐”开启时生效。"
      },
      {
        "key": "featureCount",
        "label": "权益条目数",
        "type": "slider",
        "default": 4,
        "min": 3,
        "max": 5,
        "step": 1,
        "desc": "每张套餐展示的权益条目数量。",
        "publicKey": "itemCount",
        "publicLabel": "权益条目数",
        "description": "每张套餐展示的权益条目数量。"
      },
      {
        "key": "showPriceNote",
        "label": "价格注释",
        "type": "toggle",
        "default": true,
        "desc": "标题旁的衬线说明文案。",
        "publicKey": "showPriceNote",
        "publicLabel": "价格注释",
        "description": "标题旁的衬线说明文案。"
      },
      {
        "key": "showKicker",
        "label": "装饰副标题",
        "type": "toggle",
        "default": true,
        "desc": "主标题上方的装饰眉标。",
        "publicKey": "showKicker",
        "publicLabel": "装饰副标题",
        "description": "主标题上方的装饰眉标。"
      },
      {
        "key": "showGhostMark",
        "label": "背景大字符",
        "type": "toggle",
        "default": true,
        "desc": "角落超大幽灵数字装饰。",
        "publicKey": "showGhostMark",
        "publicLabel": "背景大字符",
        "description": "角落超大幽灵数字装饰。"
      },
      {
        "key": "showScaffold",
        "label": "边框骨架",
        "type": "toggle",
        "default": true,
        "desc": "侧边竖排标签与四角括线。",
        "publicKey": "showScaffold",
        "publicLabel": "边框骨架",
        "description": "侧边竖排标签与四角括线。"
      },
      {
        "key": "showMeta",
        "label": "底部信息条",
        "type": "toggle",
        "default": true,
        "desc": "底部页脚信息与进度条。",
        "publicKey": "showMeta",
        "publicLabel": "底部信息条",
        "description": "底部页脚信息与进度条。"
      }
    ],
    "defaultProps": {
      "surface": "paper",
      "planCount": 3,
      "featured": true,
      "featuredIndex": 1,
      "featureCount": 4,
      "showPriceNote": true,
      "showKicker": true,
      "showGhostMark": true,
      "showScaffold": true,
      "showMeta": true,
      "ghostMark": "08",
      "railText": "Plans — 套餐",
      "navItems": [
        "套餐"
      ],
      "navCurrent": 0,
      "ixNo": "08",
      "ixLabel": "Plans",
      "eyebrowNo": "08",
      "eyebrowText": "Engagement",
      "headingHtml": "合作方式，<span class=\"ign-ember-text\">按目标定价</span>。",
      "noteHtml": "无长期捆绑，<br>随增长阶段灵活升降级。",
      "tagLabel": "Most popular",
      "ctaHot": "预约增长诊断",
      "ctaDefault": "了解详情",
      "metaLeft": "IGNIS — 燃点 · 合作方式",
      "metaMid": "一支团队，搞定三家代理的活",
      "plans": [
        {
          "name": "启动",
          "en": "Spark",
          "cur": "¥",
          "amt": "12k",
          "per": "/ 月起",
          "feats": [
            "搜索引擎优化基础包",
            "每月内容产出 4 篇",
            "月度数据看板",
            "邮件支持"
          ]
        },
        {
          "name": "增长",
          "en": "Growth",
          "cur": "¥",
          "amt": "28k",
          "per": "/ 月起",
          "feats": [
            "SEO + 转化率优化",
            "付费投放代运营",
            "每周 A/B 测试迭代",
            "专属增长策略师",
            "双周复盘会"
          ]
        },
        {
          "name": "规模",
          "en": "Scale",
          "cur": "",
          "amt": "定制",
          "per": "按目标计费",
          "feats": [
            "全栈增长团队延伸",
            "多渠道归因建模",
            "落地页与网站开发",
            "7×24 优先响应",
            "季度董事会汇报"
          ]
        }
      ]
    }
  },
  {
    "key": "theme11_page028",
    "themeKey": "theme11",
    "pageNumber": 28,
    "layout": "THEME11-028",
    "slot": "page28",
    "label": "原则",
    "bgClass": "",
    "controls": [
      {
        "key": "surface",
        "label": "背景基调",
        "type": "select",
        "default": "ember",
        "options": [
          {
            "value": "ink",
            "label": "深色"
          },
          {
            "value": "paper",
            "label": "浅色"
          },
          {
            "value": "ember",
            "label": "暖橙"
          }
        ],
        "desc": "页面背景主题，用于在相邻页之间制造色彩跳跃。",
        "publicKey": "surface",
        "publicLabel": "背景基调",
        "description": "页面背景主题，用于在相邻页之间制造色彩跳跃。"
      },
      {
        "key": "principleCount",
        "label": "原则数量",
        "type": "slider",
        "default": 6,
        "min": 3,
        "max": 6,
        "step": 1,
        "desc": "列出的操作原则条目数量。",
        "publicKey": "itemCount",
        "publicLabel": "原则数量",
        "description": "列出的操作原则条目数量。"
      },
      {
        "key": "emphasis",
        "label": "重点突出",
        "type": "toggle",
        "default": false,
        "desc": "开启后突出某一条原则，其余弱化。",
        "publicKey": "emphasis",
        "publicLabel": "重点突出",
        "description": "开启后突出某一条原则，其余弱化。"
      },
      {
        "key": "emphasisIndex",
        "label": "重点序号",
        "type": "slider",
        "default": 0,
        "min": 0,
        "max": 5,
        "step": 1,
        "desc": "需要突出的原则序号（从 0 起）。",
        "publicKey": "emphasisIndex",
        "publicLabel": "重点序号",
        "description": "需要突出的原则序号（从 0 起）。"
      },
      {
        "key": "showKicker",
        "label": "装饰引言",
        "type": "toggle",
        "default": true,
        "desc": "标题上方的衬线引言。",
        "publicKey": "showKicker",
        "publicLabel": "装饰引言",
        "description": "标题上方的衬线引言。"
      },
      {
        "key": "showLede",
        "label": "说明文案",
        "type": "toggle",
        "default": true,
        "desc": "右上角的说明段落。",
        "publicKey": "showLede",
        "publicLabel": "说明文案",
        "description": "右上角的说明段落。"
      },
      {
        "key": "showGhostMark",
        "label": "背景大字符",
        "type": "toggle",
        "default": true,
        "desc": "角落超大幽灵字符装饰。",
        "publicKey": "showGhostMark",
        "publicLabel": "背景大字符",
        "description": "角落超大幽灵字符装饰。"
      },
      {
        "key": "showScaffold",
        "label": "边框骨架",
        "type": "toggle",
        "default": true,
        "desc": "侧边竖排标签与四角括线。",
        "publicKey": "showScaffold",
        "publicLabel": "边框骨架",
        "description": "侧边竖排标签与四角括线。"
      },
      {
        "key": "showMeta",
        "label": "底部信息条",
        "type": "toggle",
        "default": true,
        "desc": "底部页脚信息与进度条。",
        "publicKey": "showMeta",
        "publicLabel": "底部信息条",
        "description": "底部页脚信息与进度条。"
      }
    ],
    "defaultProps": {
      "surface": "ember",
      "principleCount": 6,
      "emphasis": false,
      "emphasisIndex": 0,
      "showKicker": true,
      "showLede": true,
      "showGhostMark": true,
      "showScaffold": true,
      "showMeta": true,
      "ghostMark": "原则",
      "railText": "Principles — 原则",
      "navItems": [
        "原则"
      ],
      "navCurrent": 0,
      "ixNo": "14",
      "ixLabel": "Principles",
      "lead": "How we operate.",
      "headingHtml": "我们怎么<span class=\"ign-ember-text\">做事</span>。",
      "lede": "六条原则，不写在墙上，写在每一次决策里——它们决定了我们拒绝什么、坚持什么。",
      "principles": [
        {
          "t": "先诊断，再动手",
          "d": "没有数据支撑的动作，我们不做。"
        },
        {
          "t": "一支团队，一条路径",
          "d": "搜索、内容、投放不再各管一段。"
        },
        {
          "t": "为收入负责",
          "d": "只盯能真正兑现成收入的指标。"
        },
        {
          "t": "复利优先",
          "d": "宁可慢一点，也要可持续地涨。"
        },
        {
          "t": "透明到底",
          "d": "报表里没有任何看不懂的成本。"
        },
        {
          "t": "结果即代表作",
          "d": "作品会说话，增长更会说话。"
        }
      ],
      "metaLeft": "IGNIS — 燃点 · 操作原则",
      "metaMid": "写在每一次决策里"
    }
  },
  {
    "key": "theme11_page029",
    "themeKey": "theme11",
    "pageNumber": 29,
    "layout": "THEME11-029",
    "slot": "page29",
    "label": "作品",
    "bgClass": "",
    "controls": [
      {
        "key": "surface",
        "label": "背景基调",
        "type": "select",
        "default": "ink",
        "options": [
          {
            "value": "ink",
            "label": "深色"
          },
          {
            "value": "paper",
            "label": "浅色"
          },
          {
            "value": "ember",
            "label": "暖橙"
          }
        ],
        "desc": "页面背景主题，用于在相邻页之间制造色彩跳跃。",
        "publicKey": "surface",
        "publicLabel": "背景基调",
        "description": "页面背景主题，用于在相邻页之间制造色彩跳跃。"
      },
      {
        "key": "imageCount",
        "label": "图片槽数量",
        "type": "slider",
        "default": 3,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "画廊图片槽数量（0–4）；版式随数量自适应，为 0 时回退为留白引导。",
        "publicKey": "imageCount",
        "publicLabel": "图片槽数量",
        "description": "画廊图片槽数量（0–4）；版式随数量自适应，为 0 时回退为留白引导。"
      },
      {
        "key": "showCaptions",
        "label": "图片说明",
        "type": "toggle",
        "default": true,
        "desc": "每张图片下方的客户标注。",
        "publicKey": "showCaptions",
        "publicLabel": "图片说明",
        "description": "每张图片下方的客户标注。"
      },
      {
        "key": "showHeadline",
        "label": "标题",
        "type": "toggle",
        "default": true,
        "desc": "页面主标题的显示与隐藏。",
        "publicKey": "showHeadline",
        "publicLabel": "标题",
        "description": "页面主标题的显示与隐藏。"
      },
      {
        "key": "showKicker",
        "label": "装饰注释",
        "type": "toggle",
        "default": true,
        "desc": "标题旁的衬线注释文案。",
        "publicKey": "showKicker",
        "publicLabel": "装饰注释",
        "description": "标题旁的衬线注释文案。"
      },
      {
        "key": "showGhostMark",
        "label": "背景大字符",
        "type": "toggle",
        "default": true,
        "desc": "角落超大幽灵字符装饰。",
        "publicKey": "showGhostMark",
        "publicLabel": "背景大字符",
        "description": "角落超大幽灵字符装饰。"
      },
      {
        "key": "showScaffold",
        "label": "边框骨架",
        "type": "toggle",
        "default": true,
        "desc": "侧边竖排标签与四角括线。",
        "publicKey": "showScaffold",
        "publicLabel": "边框骨架",
        "description": "侧边竖排标签与四角括线。"
      },
      {
        "key": "showMeta",
        "label": "底部信息条",
        "type": "toggle",
        "default": true,
        "desc": "底部页脚信息与进度条。",
        "publicKey": "showMeta",
        "publicLabel": "底部信息条",
        "description": "底部页脚信息与进度条。"
      }
    ],
    "defaultProps": {
      "surface": "ink",
      "imageCount": 3,
      "images": [],
      "showCaptions": true,
      "showHeadline": true,
      "showKicker": true,
      "showGhostMark": true,
      "showScaffold": true,
      "showMeta": true,
      "ghostMark": "WORK",
      "railText": "Gallery — 作品",
      "navItems": [
        "作品"
      ],
      "navCurrent": 0,
      "ixNo": "16",
      "ixLabel": "Gallery",
      "headingHtml": "把结果，<span class=\"ign-ember-text\">摆出来看</span>。",
      "noteHtml": "作品会说话，<br>增长更会。",
      "emptyTitle": "案例画廊",
      "emptyHint": "上传作品图片以填充 · 支持 1–4 张",
      "caps": [
        {
          "no": "VOLT",
          "t": "落地页改版"
        },
        {
          "no": "CAYO",
          "t": "搜索增长"
        },
        {
          "no": "DAZZ",
          "t": "内容矩阵"
        },
        {
          "no": "DENSIFY",
          "t": "投放重构"
        }
      ],
      "metaLeft": "IGNIS — 燃点 · 精选作品",
      "metaMid": "少即是多，结果即代表作"
    }
  },
  {
    "key": "theme11_page030",
    "themeKey": "theme11",
    "pageNumber": 30,
    "layout": "THEME11-030",
    "slot": "page30",
    "label": "行动",
    "bgClass": "",
    "controls": [
      {
        "key": "surface",
        "label": "背景基调",
        "type": "select",
        "default": "ember",
        "options": [
          {
            "value": "ink",
            "label": "深色"
          },
          {
            "value": "paper",
            "label": "浅色"
          },
          {
            "value": "ember",
            "label": "暖橙"
          }
        ],
        "desc": "页面背景主题，用于在相邻页之间制造色彩跳跃。",
        "publicKey": "surface",
        "publicLabel": "背景基调",
        "description": "页面背景主题，用于在相邻页之间制造色彩跳跃。"
      },
      {
        "key": "showLede",
        "label": "装饰引言",
        "type": "toggle",
        "default": true,
        "desc": "主标题上方的衬线斜体引言。",
        "publicKey": "showLede",
        "publicLabel": "装饰引言",
        "description": "主标题上方的衬线斜体引言。"
      },
      {
        "key": "showSub",
        "label": "副标题",
        "type": "toggle",
        "default": true,
        "desc": "主标题下方的说明副标题。",
        "publicKey": "showSub",
        "publicLabel": "副标题",
        "description": "主标题下方的说明副标题。"
      },
      {
        "key": "showCta",
        "label": "行动召唤",
        "type": "toggle",
        "default": true,
        "desc": "排版化的主行动召唤语（大字 + 箭头 + 分隔线）。",
        "publicKey": "showCta",
        "publicLabel": "行动召唤",
        "description": "排版化的主行动召唤语（大字 + 箭头 + 分隔线）。"
      },
      {
        "key": "showChannels",
        "label": "次级文案",
        "type": "toggle",
        "default": true,
        "desc": "邮箱 / 电话 / 地点等联系信息组。",
        "publicKey": "showChannels",
        "publicLabel": "次级文案",
        "description": "邮箱 / 电话 / 地点等联系信息组。"
      },
      {
        "key": "channelCount",
        "label": "信息条目数量",
        "type": "slider",
        "default": 3,
        "min": 1,
        "max": 3,
        "step": 1,
        "desc": "展示的次级文案条目数量。",
        "publicKey": "itemCount",
        "publicLabel": "信息条目数量",
        "description": "展示的次级文案条目数量。"
      },
      {
        "key": "showBigMark",
        "label": "右上品牌标",
        "type": "toggle",
        "default": true,
        "desc": "右上角的品牌图标锁定组合。",
        "publicKey": "showBigMark",
        "publicLabel": "右上品牌标",
        "description": "右上角的品牌图标锁定组合。"
      },
      {
        "key": "showGhostMark",
        "label": "背景大字符",
        "type": "toggle",
        "default": true,
        "desc": "角落超大幽灵字符装饰。",
        "publicKey": "showGhostMark",
        "publicLabel": "背景大字符",
        "description": "角落超大幽灵字符装饰。"
      },
      {
        "key": "showScaffold",
        "label": "边框骨架",
        "type": "toggle",
        "default": true,
        "desc": "侧边竖排标签与四角括线。",
        "publicKey": "showScaffold",
        "publicLabel": "边框骨架",
        "description": "侧边竖排标签与四角括线。"
      },
      {
        "key": "logoCount",
        "label": "合作图片槽",
        "type": "slider",
        "default": 0,
        "min": 0,
        "max": 6,
        "step": 1,
        "desc": "底部合作伙伴图片槽数量；为 0 时回退为文字标识。",
        "publicKey": "logoCount",
        "publicLabel": "合作图片槽",
        "description": "底部合作伙伴图片槽数量；为 0 时回退为文字标识。"
      }
    ],
    "defaultProps": {
      "surface": "ember",
      "showLede": true,
      "showSub": true,
      "showCta": true,
      "showChannels": true,
      "channelCount": 3,
      "showBigMark": true,
      "showGhostMark": true,
      "showScaffold": true,
      "logoCount": 0,
      "logos": [],
      "ghostMark": "09",
      "railText": "Let's begin — 行动",
      "navItems": [
        "行动"
      ],
      "navCurrent": 0,
      "ixNo": "09",
      "ixLabel": "Contact",
      "lede": "Let's get started.",
      "headingHtml": "一起，<span class=\"ign-ember-text\">点燃增长</span>。",
      "sub": "把搜索、内容与投放交给一支团队。我们先做一次免费的增长诊断，再谈下一步。",
      "ctaText": "预约一次免费增长诊断",
      "trustedLabel": "Trusted by",
      "marks": [
        "DAZZ",
        "MULTIPLY",
        "VOLT",
        "DENSIFY"
      ],
      "channels": [
        {
          "l": "Email",
          "v": "hello@ignis.cn"
        },
        {
          "l": "Phone",
          "v": "400 818 0826"
        },
        {
          "l": "Studio",
          "v": "上海 · 北京"
        }
      ]
    }
  },
  {
    "key": "theme11_page031",
    "themeKey": "theme11",
    "pageNumber": 31,
    "layout": "THEME11-031",
    "slot": "page31",
    "label": "能力",
    "bgClass": "",
    "controls": [
      {
        "key": "surface",
        "label": "背景基调",
        "type": "select",
        "default": "ink",
        "options": [
          {
            "value": "ink",
            "label": "深色"
          },
          {
            "value": "paper",
            "label": "浅色"
          },
          {
            "value": "ember",
            "label": "暖橙"
          }
        ],
        "desc": "页面背景主题，用于在相邻页之间制造色彩跳跃。",
        "publicKey": "surface",
        "publicLabel": "背景基调",
        "description": "页面背景主题，用于在相邻页之间制造色彩跳跃。"
      },
      {
        "key": "axisCount",
        "label": "能力维度",
        "type": "slider",
        "default": 7,
        "min": 5,
        "max": 7,
        "step": 1,
        "desc": "雷达图的能力轴数量（多边形边数）。",
        "publicKey": "axisCount",
        "publicLabel": "能力维度",
        "description": "雷达图的能力轴数量（多边形边数）。"
      },
      {
        "key": "emphasis",
        "label": "重点突出",
        "type": "toggle",
        "default": true,
        "desc": "开启后弱化「参考基准」多边形，突出「燃点」。",
        "publicKey": "emphasis",
        "publicLabel": "重点突出",
        "description": "开启后弱化「参考基准」多边形，突出「燃点」。"
      },
      {
        "key": "showBaseline",
        "label": "参考基准",
        "type": "toggle",
        "default": true,
        "desc": "叠加的参考基准对比多边形。",
        "publicKey": "showBaseline",
        "publicLabel": "参考基准",
        "description": "叠加的参考基准对比多边形。"
      },
      {
        "key": "showRings",
        "label": "刻度网格",
        "type": "toggle",
        "default": true,
        "desc": "同心刻度环与放射轴线。",
        "publicKey": "showRings",
        "publicLabel": "刻度网格",
        "description": "同心刻度环与放射轴线。"
      },
      {
        "key": "showAxisLabels",
        "label": "维度标签",
        "type": "toggle",
        "default": true,
        "desc": "每条轴外侧的能力维度标签。",
        "publicKey": "showAxisLabels",
        "publicLabel": "维度标签",
        "description": "每条轴外侧的能力维度标签。"
      },
      {
        "key": "showLegend",
        "label": "图例",
        "type": "toggle",
        "default": true,
        "desc": "左侧的多边形含义图例。",
        "publicKey": "showLegend",
        "publicLabel": "图例",
        "description": "左侧的多边形含义图例。"
      },
      {
        "key": "showKicker",
        "label": "装饰引言",
        "type": "toggle",
        "default": true,
        "desc": "标题上方的衬线引言。",
        "publicKey": "showKicker",
        "publicLabel": "装饰引言",
        "description": "标题上方的衬线引言。"
      },
      {
        "key": "showLede",
        "label": "说明文案",
        "type": "toggle",
        "default": true,
        "desc": "标题下方的说明段落。",
        "publicKey": "showLede",
        "publicLabel": "说明文案",
        "description": "标题下方的说明段落。"
      },
      {
        "key": "showGhostMark",
        "label": "背景大字符",
        "type": "toggle",
        "default": true,
        "desc": "角落超大幽灵字符装饰。",
        "publicKey": "showGhostMark",
        "publicLabel": "背景大字符",
        "description": "角落超大幽灵字符装饰。"
      },
      {
        "key": "showScaffold",
        "label": "边框骨架",
        "type": "toggle",
        "default": true,
        "desc": "侧边竖排标签与四角括线。",
        "publicKey": "showScaffold",
        "publicLabel": "边框骨架",
        "description": "侧边竖排标签与四角括线。"
      },
      {
        "key": "showMeta",
        "label": "底部信息条",
        "type": "toggle",
        "default": true,
        "desc": "底部页脚信息与进度条。",
        "publicKey": "showMeta",
        "publicLabel": "底部信息条",
        "description": "底部页脚信息与进度条。"
      }
    ],
    "defaultProps": {
      "surface": "ink",
      "axisCount": 7,
      "emphasis": true,
      "showBaseline": true,
      "showRings": true,
      "showAxisLabels": true,
      "showLegend": true,
      "showKicker": true,
      "showLede": true,
      "showGhostMark": true,
      "showScaffold": true,
      "showMeta": true,
      "ghostMark": "◆",
      "railText": "Radar — 能力",
      "navItems": [
        "能力"
      ],
      "navCurrent": 0,
      "ixNo": "27",
      "ixLabel": "Radar",
      "lead": "All axes, lit at once.",
      "headingHtml": "不是某一项强，<br><span class=\"ign-ember-text\">是整张图都满</span>。",
      "lede": "多数方案只在一两个维度突出，其余塌陷。燃点要的是覆盖整张能力图——没有短板拖累复利。",
      "legendUsName": "燃点",
      "legendUsDesc": "能力轮廓",
      "legendBaseName": "行业基准",
      "legendBaseDesc": "中位水平",
      "axes": [
        {
          "zh": "搜索可见度",
          "en": "Visibility",
          "us": 92,
          "base": 55
        },
        {
          "zh": "转化效率",
          "en": "Conversion",
          "us": 88,
          "base": 48
        },
        {
          "zh": "内容产能",
          "en": "Content",
          "us": 80,
          "base": 60
        },
        {
          "zh": "数据归因",
          "en": "Attribution",
          "us": 86,
          "base": 40
        },
        {
          "zh": "投放回报",
          "en": "Paid ROI",
          "us": 78,
          "base": 52
        },
        {
          "zh": "站点性能",
          "en": "Performance",
          "us": 90,
          "base": 58
        },
        {
          "zh": "协同响应",
          "en": "Velocity",
          "us": 95,
          "base": 45
        }
      ],
      "metaLeft": "IGNIS — 燃点 · 能力轮廓（自评 vs 行业中位）",
      "metaMid": "短板，才是复利的天花板"
    }
  },
  {
    "key": "theme11_page032",
    "themeKey": "theme11",
    "pageNumber": 32,
    "layout": "THEME11-032",
    "slot": "page32",
    "label": "对照",
    "bgClass": "",
    "controls": [
      {
        "key": "surface",
        "label": "背景基调",
        "type": "select",
        "default": "paper",
        "options": [
          {
            "value": "ink",
            "label": "深色"
          },
          {
            "value": "paper",
            "label": "浅色"
          },
          {
            "value": "ember",
            "label": "暖橙"
          }
        ],
        "desc": "页面背景主题，用于在相邻页之间制造色彩跳跃。",
        "publicKey": "surface",
        "publicLabel": "背景基调",
        "description": "页面背景主题，用于在相邻页之间制造色彩跳跃。"
      },
      {
        "key": "showKicker",
        "label": "装饰引言",
        "type": "toggle",
        "default": true,
        "desc": "标题上方的衬线引言。",
        "publicKey": "showKicker",
        "publicLabel": "装饰引言",
        "description": "标题上方的衬线引言。"
      },
      {
        "key": "showDelta",
        "label": "中间增幅章",
        "type": "toggle",
        "default": true,
        "desc": "两栏之间的增幅对比标记。",
        "publicKey": "showDelta",
        "publicLabel": "中间增幅章",
        "description": "两栏之间的增幅对比标记。"
      },
      {
        "key": "showCaptions",
        "label": "数字说明",
        "type": "toggle",
        "default": true,
        "desc": "每栏大数字下方的说明文案。",
        "publicKey": "showCaptions",
        "publicLabel": "数字说明",
        "description": "每栏大数字下方的说明文案。"
      },
      {
        "key": "emphasis",
        "label": "重点突出",
        "type": "toggle",
        "default": true,
        "desc": "开启后点亮其中一栏，另一栏弱化为「现状」。",
        "publicKey": "emphasis",
        "publicLabel": "重点突出",
        "description": "开启后点亮其中一栏，另一栏弱化为「现状」。"
      },
      {
        "key": "emphasisSide",
        "label": "重点栏位",
        "type": "select",
        "default": "right",
        "options": [
          {
            "value": "left",
            "label": "左栏"
          },
          {
            "value": "right",
            "label": "右栏"
          }
        ],
        "desc": "被点亮（暖橙）的栏位。",
        "publicKey": "emphasisSide",
        "publicLabel": "重点栏位",
        "description": "被点亮（暖橙）的栏位。"
      },
      {
        "key": "showSubStats",
        "label": "辅助数据行",
        "type": "toggle",
        "default": true,
        "desc": "底部分栏的辅助数据。",
        "publicKey": "showSubStats",
        "publicLabel": "辅助数据行",
        "description": "底部分栏的辅助数据。"
      },
      {
        "key": "subStatCount",
        "label": "辅助数据数量",
        "type": "slider",
        "default": 3,
        "min": 1,
        "max": 3,
        "step": 1,
        "desc": "底部辅助数据的条目数量。",
        "publicKey": "itemCount",
        "publicLabel": "辅助数据数量",
        "description": "底部辅助数据的条目数量。"
      },
      {
        "key": "showNote",
        "label": "装饰注释",
        "type": "toggle",
        "default": true,
        "desc": "底部信息条中间的衬线注释。",
        "publicKey": "showNote",
        "publicLabel": "装饰注释",
        "description": "底部信息条中间的衬线注释。"
      },
      {
        "key": "showGhostMark",
        "label": "背景大字符",
        "type": "toggle",
        "default": true,
        "desc": "角落超大幽灵字符装饰。",
        "publicKey": "showGhostMark",
        "publicLabel": "背景大字符",
        "description": "角落超大幽灵字符装饰。"
      },
      {
        "key": "showScaffold",
        "label": "边框骨架",
        "type": "toggle",
        "default": true,
        "desc": "侧边竖排标签与四角括线。",
        "publicKey": "showScaffold",
        "publicLabel": "边框骨架",
        "description": "侧边竖排标签与四角括线。"
      },
      {
        "key": "showMeta",
        "label": "底部信息条",
        "type": "toggle",
        "default": true,
        "desc": "底部页脚信息与进度条。",
        "publicKey": "showMeta",
        "publicLabel": "底部信息条",
        "description": "底部页脚信息与进度条。"
      }
    ],
    "defaultProps": {
      "surface": "paper",
      "showKicker": true,
      "showDelta": true,
      "showCaptions": true,
      "emphasis": true,
      "emphasisSide": "right",
      "showSubStats": true,
      "subStatCount": 3,
      "showNote": true,
      "showGhostMark": true,
      "showScaffold": true,
      "showMeta": true,
      "ghostMark": "vs",
      "railText": "Before / After — 对照",
      "navItems": [
        "对照"
      ],
      "navCurrent": 0,
      "ixNo": "28",
      "ixLabel": "Before / After",
      "lead": "Same budget, different math.",
      "headingHtml": "同一笔预算，<span class=\"ign-ember-text\">两种结局</span>。",
      "showLede": false,
      "lede": "左边是接入前的转化效率，右边是同样投入下，引擎跑满之后的样子。",
      "leftTag": "接入前 · Before",
      "rightTag": "接入后 · After",
      "beforeValue": "1.0×",
      "afterValue": "3.8×",
      "leftCaption": "转化基线——流量来了，却大多在首屏流失。",
      "rightCaption": "同样的曝光，把每一级转化率都抬上去。",
      "deltaValue": "+280%",
      "deltaLabel": "净增幅",
      "subs": [
        {
          "v": "−41%",
          "l": "获客成本"
        },
        {
          "v": "×2.4",
          "l": "线索质量"
        },
        {
          "v": "14 天",
          "l": "首次见效"
        }
      ],
      "metaLeft": "IGNIS — 燃点 · 接入前后对照（中位样本）",
      "noteText": "差距，不在预算，在引擎"
    }
  },
  {
    "key": "theme11_page033",
    "themeKey": "theme11",
    "pageNumber": 33,
    "layout": "THEME11-033",
    "slot": "page33",
    "label": "团队",
    "bgClass": "",
    "controls": [
      {
        "key": "surface",
        "label": "背景基调",
        "type": "select",
        "default": "ember",
        "options": [
          {
            "value": "ink",
            "label": "深色"
          },
          {
            "value": "paper",
            "label": "浅色"
          },
          {
            "value": "ember",
            "label": "暖橙"
          }
        ],
        "desc": "页面背景主题，用于在相邻页之间制造色彩跳跃。",
        "publicKey": "surface",
        "publicLabel": "背景基调",
        "description": "页面背景主题，用于在相邻页之间制造色彩跳跃。"
      },
      {
        "key": "memberCount",
        "label": "成员数量",
        "type": "slider",
        "default": 4,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "展示的成员卡片数量。",
        "publicKey": "memberCount",
        "publicLabel": "成员数量",
        "description": "展示的成员卡片数量。"
      },
      {
        "key": "avatarCount",
        "label": "头像槽数量",
        "type": "slider",
        "default": 0,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "使用真实照片的成员数量；其余回退为字号大的姓氏字符。",
        "publicKey": "avatarCount",
        "publicLabel": "头像槽数量",
        "description": "使用真实照片的成员数量；其余回退为字号大的姓氏字符。"
      },
      {
        "key": "portraitShape",
        "label": "头像形状",
        "type": "select",
        "default": "rounded",
        "options": [
          {
            "value": "rounded",
            "label": "竖版方形"
          },
          {
            "value": "circle",
            "label": "圆形"
          }
        ],
        "desc": "头像槽的裁切形状。",
        "publicKey": "portraitShape",
        "publicLabel": "头像形状",
        "description": "头像槽的裁切形状。"
      },
      {
        "key": "showRoles",
        "label": "职务",
        "type": "toggle",
        "default": true,
        "desc": "姓名下方的中文职务。",
        "publicKey": "showRoles",
        "publicLabel": "职务",
        "description": "姓名下方的中文职务。"
      },
      {
        "key": "showEn",
        "label": "英文标签",
        "type": "toggle",
        "default": true,
        "desc": "卡片底部的英文职能标签。",
        "publicKey": "showEn",
        "publicLabel": "英文标签",
        "description": "卡片底部的英文职能标签。"
      },
      {
        "key": "showLede",
        "label": "说明文案",
        "type": "toggle",
        "default": true,
        "desc": "左侧标题下方的说明段落。",
        "publicKey": "showLede",
        "publicLabel": "说明文案",
        "description": "左侧标题下方的说明段落。"
      },
      {
        "key": "showKicker",
        "label": "装饰引言",
        "type": "toggle",
        "default": true,
        "desc": "标题上方的衬线引言。",
        "publicKey": "showKicker",
        "publicLabel": "装饰引言",
        "description": "标题上方的衬线引言。"
      },
      {
        "key": "showGhostMark",
        "label": "背景大字符",
        "type": "toggle",
        "default": true,
        "desc": "角落超大幽灵字符装饰。",
        "publicKey": "showGhostMark",
        "publicLabel": "背景大字符",
        "description": "角落超大幽灵字符装饰。"
      },
      {
        "key": "showScaffold",
        "label": "边框骨架",
        "type": "toggle",
        "default": true,
        "desc": "侧边竖排标签与四角括线。",
        "publicKey": "showScaffold",
        "publicLabel": "边框骨架",
        "description": "侧边竖排标签与四角括线。"
      },
      {
        "key": "showMeta",
        "label": "底部信息条",
        "type": "toggle",
        "default": true,
        "desc": "底部页脚信息与进度条。",
        "publicKey": "showMeta",
        "publicLabel": "底部信息条",
        "description": "底部页脚信息与进度条。"
      }
    ],
    "defaultProps": {
      "surface": "ember",
      "memberCount": 4,
      "avatarCount": 0,
      "avatars": [],
      "portraitShape": "rounded",
      "showRoles": true,
      "showEn": true,
      "showLede": true,
      "showKicker": true,
      "showGhostMark": true,
      "showScaffold": true,
      "showMeta": true,
      "ghostMark": "团队",
      "railText": "Team — 团队",
      "navItems": [
        "团队"
      ],
      "navCurrent": 0,
      "ixNo": "29",
      "ixLabel": "Team",
      "lead": "One team, not five vendors.",
      "headingHtml": "一支队，<br><span class=\"ign-ember-text\">跑通全链路</span>。",
      "lede": "策略、内容、转化、工程坐在同一张桌子上——没有交接成本，没有互相甲锅，只有一个对增长负责的团队。",
      "members": [
        {
          "name": "林 远",
          "role": "增长策略总监",
          "en": "Strategy",
          "mono": "远"
        },
        {
          "name": "苏 黎",
          "role": "内容与SEO主理",
          "en": "Content / SEO",
          "mono": "黎"
        },
        {
          "name": "陈 默",
          "role": "转化与数据负责",
          "en": "CRO / Data",
          "mono": "默"
        },
        {
          "name": "何 川",
          "role": "前端与性能工程",
          "en": "Web / Perf",
          "mono": "川"
        }
      ],
      "metaLeft": "IGNIS — 燃点 · 核心团队",
      "metaMid": "一张桌子，一个目标"
    }
  },
  {
    "key": "theme11_page034",
    "themeKey": "theme11",
    "pageNumber": 34,
    "layout": "THEME11-034",
    "slot": "page34",
    "label": "指标",
    "bgClass": "",
    "controls": [
      {
        "key": "surface",
        "label": "背景基调",
        "type": "select",
        "default": "ink",
        "options": [
          {
            "value": "ink",
            "label": "深色"
          },
          {
            "value": "paper",
            "label": "浅色"
          },
          {
            "value": "ember",
            "label": "暖橙"
          }
        ],
        "desc": "页面背景主题，用于在相邻页之间制造色彩跳跃。",
        "publicKey": "surface",
        "publicLabel": "背景基调",
        "description": "页面背景主题，用于在相邻页之间制造色彩跳跃。"
      },
      {
        "key": "ringCount",
        "label": "指标环数量",
        "type": "slider",
        "default": 4,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "展示的 KPI 进度环数量。",
        "publicKey": "ringCount",
        "publicLabel": "指标环数量",
        "description": "展示的 KPI 进度环数量。"
      },
      {
        "key": "emphasis",
        "label": "重点突出",
        "type": "toggle",
        "default": false,
        "desc": "开启后突出某一个环，其余弱化。",
        "publicKey": "emphasis",
        "publicLabel": "重点突出",
        "description": "开启后突出某一个环，其余弱化。"
      },
      {
        "key": "emphasisIndex",
        "label": "重点序号",
        "type": "slider",
        "default": 0,
        "min": 0,
        "max": 3,
        "step": 1,
        "desc": "需要突出的环序号（从 0 起）。",
        "publicKey": "emphasisIndex",
        "publicLabel": "重点序号",
        "description": "需要突出的环序号（从 0 起）。"
      },
      {
        "key": "showCenterValue",
        "label": "环心数值",
        "type": "toggle",
        "default": true,
        "desc": "每个环中心的百分比数值。",
        "publicKey": "showValueLabels",
        "publicLabel": "环心数值",
        "description": "每个环中心的百分比数值。"
      },
      {
        "key": "showDelta",
        "label": "同比增幅",
        "type": "toggle",
        "default": true,
        "desc": "名称下方的同比增幅标记。",
        "publicKey": "showDelta",
        "publicLabel": "同比增幅",
        "description": "名称下方的同比增幅标记。"
      },
      {
        "key": "showKicker",
        "label": "装饰引言",
        "type": "toggle",
        "default": true,
        "desc": "标题上方的衬线引言。",
        "publicKey": "showKicker",
        "publicLabel": "装饰引言",
        "description": "标题上方的衬线引言。"
      },
      {
        "key": "showLede",
        "label": "说明文案",
        "type": "toggle",
        "default": true,
        "desc": "右上角的说明段落。",
        "publicKey": "showLede",
        "publicLabel": "说明文案",
        "description": "右上角的说明段落。"
      },
      {
        "key": "showGhostMark",
        "label": "背景大字符",
        "type": "toggle",
        "default": true,
        "desc": "角落超大幽灵字符装饰。",
        "publicKey": "showGhostMark",
        "publicLabel": "背景大字符",
        "description": "角落超大幽灵字符装饰。"
      },
      {
        "key": "showScaffold",
        "label": "边框骨架",
        "type": "toggle",
        "default": true,
        "desc": "侧边竖排标签与四角括线。",
        "publicKey": "showScaffold",
        "publicLabel": "边框骨架",
        "description": "侧边竖排标签与四角括线。"
      },
      {
        "key": "showMeta",
        "label": "底部信息条",
        "type": "toggle",
        "default": true,
        "desc": "底部页脚信息与进度条。",
        "publicKey": "showMeta",
        "publicLabel": "底部信息条",
        "description": "底部页脚信息与进度条。"
      }
    ],
    "defaultProps": {
      "surface": "ink",
      "ringCount": 4,
      "emphasis": false,
      "emphasisIndex": 0,
      "showCenterValue": true,
      "showDelta": true,
      "showKicker": true,
      "showLede": true,
      "showGhostMark": true,
      "showScaffold": true,
      "showMeta": true,
      "ghostMark": "%",
      "railText": "Scoreboard — 指标",
      "navItems": [
        "指标"
      ],
      "navCurrent": 0,
      "ixNo": "30",
      "ixLabel": "Scoreboard",
      "lead": "Every dial, climbing.",
      "headingHtml": "每一项，<span class=\"ign-ember-text\">都在往上走</span>。",
      "lede": "不是单点漂亮，而是关键指标同时抬升——这才是引擎跑顺的样子。",
      "deltaSuffix": " pts · 同比",
      "rings": [
        {
          "pct": 96,
          "name": "站点健康度",
          "en": "Site Health",
          "delta": "+38"
        },
        {
          "pct": 82,
          "name": "内容收录率",
          "en": "Indexation",
          "delta": "+27"
        },
        {
          "pct": 73,
          "name": "转化达成",
          "en": "Conversion",
          "delta": "+19"
        },
        {
          "pct": 88,
          "name": "投放回报达标",
          "en": "Paid ROI",
          "delta": "+24"
        }
      ],
      "metaLeft": "IGNIS — 燃点 · 关键指标记分牌（季度）",
      "metaMid": "同时抬升，才叫引擎"
    }
  },
  {
    "key": "theme11_page035",
    "themeKey": "theme11",
    "pageNumber": 35,
    "layout": "THEME11-035",
    "slot": "page35",
    "label": "账目",
    "bgClass": "",
    "controls": [
      {
        "key": "surface",
        "label": "背景基调",
        "type": "select",
        "default": "paper",
        "options": [
          {
            "value": "ink",
            "label": "深色"
          },
          {
            "value": "paper",
            "label": "浅色"
          },
          {
            "value": "ember",
            "label": "暖橙"
          }
        ],
        "desc": "页面背景主题，用于在相邻页之间制造色彩跳跃。",
        "publicKey": "surface",
        "publicLabel": "背景基调",
        "description": "页面背景主题，用于在相邻页之间制造色彩跳跃。"
      },
      {
        "key": "rowCount",
        "label": "账目行数",
        "type": "slider",
        "default": 6,
        "min": 3,
        "max": 6,
        "step": 1,
        "desc": "账目表的明细行数。",
        "publicKey": "rowCount",
        "publicLabel": "账目行数",
        "description": "账目表的明细行数。"
      },
      {
        "key": "showColHeads",
        "label": "表头行",
        "type": "toggle",
        "default": true,
        "desc": "顶部的列名表头。",
        "publicKey": "showColHeads",
        "publicLabel": "表头行",
        "description": "顶部的列名表头。"
      },
      {
        "key": "emphasis",
        "label": "重点突出",
        "type": "toggle",
        "default": false,
        "desc": "开启后高亮某一明细行，其余弱化。",
        "publicKey": "emphasis",
        "publicLabel": "重点突出",
        "description": "开启后高亮某一明细行，其余弱化。"
      },
      {
        "key": "emphasisIndex",
        "label": "重点序号",
        "type": "slider",
        "default": 1,
        "min": 0,
        "max": 5,
        "step": 1,
        "desc": "需要高亮的明细行序号（从 0 起）。",
        "publicKey": "emphasisIndex",
        "publicLabel": "重点序号",
        "description": "需要高亮的明细行序号（从 0 起）。"
      },
      {
        "key": "showNetRow",
        "label": "净值汇总行",
        "type": "toggle",
        "default": true,
        "desc": "底部高亮的净值/总回报汇总行。",
        "publicKey": "showNetRow",
        "publicLabel": "净值汇总行",
        "description": "底部高亮的净值/总回报汇总行。"
      },
      {
        "key": "showFootNote",
        "label": "脚注",
        "type": "toggle",
        "default": true,
        "desc": "表格右下角的衬线脚注。",
        "publicKey": "showFootNote",
        "publicLabel": "脚注",
        "description": "表格右下角的衬线脚注。"
      },
      {
        "key": "showKicker",
        "label": "装饰引言",
        "type": "toggle",
        "default": true,
        "desc": "标题上方的衬线引言。",
        "publicKey": "showKicker",
        "publicLabel": "装饰引言",
        "description": "标题上方的衬线引言。"
      },
      {
        "key": "showLede",
        "label": "说明文案",
        "type": "toggle",
        "default": true,
        "desc": "右上角的说明段落。",
        "publicKey": "showLede",
        "publicLabel": "说明文案",
        "description": "右上角的说明段落。"
      },
      {
        "key": "showGhostMark",
        "label": "背景大字符",
        "type": "toggle",
        "default": true,
        "desc": "角落超大幽灵字符装饰。",
        "publicKey": "showGhostMark",
        "publicLabel": "背景大字符",
        "description": "角落超大幽灵字符装饰。"
      },
      {
        "key": "showScaffold",
        "label": "边框骨架",
        "type": "toggle",
        "default": true,
        "desc": "侧边竖排标签与四角括线。",
        "publicKey": "showScaffold",
        "publicLabel": "边框骨架",
        "description": "侧边竖排标签与四角括线。"
      },
      {
        "key": "showMeta",
        "label": "底部信息条",
        "type": "toggle",
        "default": true,
        "desc": "底部页脚信息与进度条。",
        "publicKey": "showMeta",
        "publicLabel": "底部信息条",
        "description": "底部页脚信息与进度条。"
      }
    ],
    "defaultProps": {
      "surface": "paper",
      "rowCount": 6,
      "showColHeads": true,
      "emphasis": false,
      "emphasisIndex": 1,
      "showNetRow": true,
      "showFootNote": true,
      "showKicker": true,
      "showLede": true,
      "showGhostMark": true,
      "showScaffold": true,
      "showMeta": true,
      "ghostMark": "¥",
      "railText": "Ledger — 账目",
      "navItems": [
        "账目"
      ],
      "navCurrent": 0,
      "ixNo": "31",
      "ixLabel": "Ledger",
      "leadHtml": "Read it like a P&amp;L.",
      "headingHtml": "每一笔投入，<span class=\"ign-ember-text\">都记得清</span>。",
      "lede": "把预算摊到每条线上看回报：增长不是玄学，是一张能对账的明细表。",
      "colHeads": [
        "投入项目",
        "月度投入",
        "12 月回报",
        "回报倍数"
      ],
      "rows": [
        {
          "it": "搜索与内容",
          "en": "SEO & Content",
          "cost": "¥38K",
          "gain": "¥182K",
          "mult": "×4.8"
        },
        {
          "it": "转化率优化",
          "en": "CRO",
          "cost": "¥22K",
          "gain": "¥150K",
          "mult": "×6.8"
        },
        {
          "it": "付费投放",
          "en": "Paid Media",
          "cost": "¥60K",
          "gain": "¥204K",
          "mult": "×3.4"
        },
        {
          "it": "网站与性能",
          "en": "Web & Perf",
          "cost": "¥18K",
          "gain": "¥66K",
          "mult": "×3.7"
        },
        {
          "it": "数据与归因",
          "en": "Data & Attribution",
          "cost": "¥12K",
          "gain": "¥58K",
          "mult": "×4.8"
        },
        {
          "it": "一体化协同",
          "en": "One Team",
          "cost": "¥10K",
          "gain": "¥70K",
          "mult": "×7.0"
        }
      ],
      "netLabel": "净增长价值",
      "netEn": "Net created value",
      "netCostLabel": "合计投入",
      "netGain": "¥730K",
      "netMult": "×4.6",
      "footNote": "＊ 数据为中位客户 12 个月口径，含自然与付费合并归因。",
      "metaLeft": "IGNIS — 燃点 · 价值账目表",
      "metaMid": "能对账的增长，才是真增长"
    }
  },
  {
    "key": "theme11_page036",
    "themeKey": "theme11",
    "pageNumber": 36,
    "layout": "THEME11-036",
    "slot": "page36",
    "label": "拆解",
    "bgClass": "",
    "controls": [
      {
        "key": "surface",
        "label": "背景基调",
        "type": "select",
        "default": "ink",
        "options": [
          {
            "value": "ink",
            "label": "深色"
          },
          {
            "value": "paper",
            "label": "浅色"
          },
          {
            "value": "ember",
            "label": "暖橙"
          }
        ],
        "desc": "页面背景主题，用于在相邻页之间制造色彩跳跃。",
        "publicKey": "surface",
        "publicLabel": "背景基调",
        "description": "页面背景主题，用于在相邻页之间制造色彩跳跃。"
      },
      {
        "key": "imageCount",
        "label": "图片槽数量",
        "type": "slider",
        "default": 1,
        "min": 0,
        "max": 1,
        "step": 1,
        "desc": "样机内的截图槽数量；为 0 时显示条纹占位。",
        "publicKey": "imageCount",
        "publicLabel": "图片槽数量",
        "description": "样机内的截图槽数量；为 0 时显示条纹占位。"
      },
      {
        "key": "imagePosition",
        "label": "样机位置",
        "type": "select",
        "default": "right",
        "options": [
          {
            "value": "left",
            "label": "左"
          },
          {
            "value": "right",
            "label": "右"
          }
        ],
        "desc": "设备样机相对文字的位置。",
        "publicKey": "imagePosition",
        "publicLabel": "样机位置",
        "description": "设备样机相对文字的位置。"
      },
      {
        "key": "showChrome",
        "label": "浏览器外框",
        "type": "toggle",
        "default": true,
        "desc": "样机顶部的浏览器窗口外框。",
        "publicKey": "showChrome",
        "publicLabel": "浏览器外框",
        "description": "样机顶部的浏览器窗口外框。"
      },
      {
        "key": "showPins",
        "label": "标注点",
        "type": "toggle",
        "default": true,
        "desc": "截图上的编号标注点与左侧说明清单。",
        "publicKey": "showPins",
        "publicLabel": "标注点",
        "description": "截图上的编号标注点与左侧说明清单。"
      },
      {
        "key": "pinCount",
        "label": "标注数量",
        "type": "slider",
        "default": 3,
        "min": 2,
        "max": 3,
        "step": 1,
        "desc": "编号标注点的数量。",
        "publicKey": "pinCount",
        "publicLabel": "标注数量",
        "description": "编号标注点的数量。"
      },
      {
        "key": "showCaption",
        "label": "图片说明",
        "type": "toggle",
        "default": true,
        "desc": "样机下方的说明标注。",
        "publicKey": "showCaption",
        "publicLabel": "图片说明",
        "description": "样机下方的说明标注。"
      },
      {
        "key": "showKicker",
        "label": "装饰副标题",
        "type": "toggle",
        "default": true,
        "desc": "主标题上方的装饰标签。",
        "publicKey": "showKicker",
        "publicLabel": "装饰副标题",
        "description": "主标题上方的装饰标签。"
      },
      {
        "key": "showGhostMark",
        "label": "背景大字符",
        "type": "toggle",
        "default": true,
        "desc": "角落超大幽灵字符装饰。",
        "publicKey": "showGhostMark",
        "publicLabel": "背景大字符",
        "description": "角落超大幽灵字符装饰。"
      },
      {
        "key": "showScaffold",
        "label": "边框骨架",
        "type": "toggle",
        "default": true,
        "desc": "侧边竖排标签与四角括线。",
        "publicKey": "showScaffold",
        "publicLabel": "边框骨架",
        "description": "侧边竖排标签与四角括线。"
      },
      {
        "key": "showMeta",
        "label": "底部信息条",
        "type": "toggle",
        "default": true,
        "desc": "底部页脚信息与进度条。",
        "publicKey": "showMeta",
        "publicLabel": "底部信息条",
        "description": "底部页脚信息与进度条。"
      }
    ],
    "defaultProps": {
      "surface": "ink",
      "imageCount": 1,
      "images": [],
      "imagePosition": "right",
      "showChrome": true,
      "showPins": true,
      "pinCount": 3,
      "showCaption": true,
      "showKicker": true,
      "showGhostMark": true,
      "showScaffold": true,
      "showMeta": true,
      "ghostMark": "UI",
      "railText": "Teardown — 拆解",
      "navItems": [
        "拆解"
      ],
      "navCurrent": 0,
      "ixNo": "32",
      "ixLabel": "Teardown",
      "kickerNo": "改版拆解",
      "kickerEn": "Teardown",
      "headingHtml": "不是更好看，<br><span class=\"ign-ember-text\">是更会转化</span>。",
      "bodyText": "同一个页面，重排信息层级之后的样子——每一处改动，都对着一个转化目标。",
      "chromeUrl": "volt.io / growth",
      "imagePlaceholder": "产品截图 · 16:10",
      "capTag": "↗ After",
      "capText": "VOLT 落地页 · 重构版",
      "pins": [
        {
          "x": 24,
          "y": 30,
          "t": "首屏主张",
          "en": "Hero promise"
        },
        {
          "x": 72,
          "y": 52,
          "t": "单一行动路径",
          "en": "One clear CTA"
        },
        {
          "x": 38,
          "y": 78,
          "t": "社会证明前置",
          "en": "Proof up front"
        }
      ],
      "metaLeft": "IGNIS — 燃点 · 落地页改版拆解",
      "metaMid": "每一处改动，都对着转化"
    }
  },
  {
    "key": "theme11_page037",
    "themeKey": "theme11",
    "pageNumber": 37,
    "layout": "THEME11-037",
    "slot": "page37",
    "label": "宣言",
    "bgClass": "",
    "controls": [
      {
        "key": "surface",
        "label": "背景基调",
        "type": "select",
        "default": "ember",
        "options": [
          {
            "value": "ink",
            "label": "深色"
          },
          {
            "value": "paper",
            "label": "浅色"
          },
          {
            "value": "ember",
            "label": "暖橙"
          }
        ],
        "desc": "页面背景主题，用于在相邻页之间制造色彩跳跃。",
        "publicKey": "surface",
        "publicLabel": "背景基调",
        "description": "页面背景主题，用于在相邻页之间制造色彩跳跃。"
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
        "desc": "宣言文字的对齐方式。",
        "publicKey": "align",
        "publicLabel": "对齐方式",
        "description": "宣言文字的对齐方式。"
      },
      {
        "key": "showKicker",
        "label": "装饰引言",
        "type": "toggle",
        "default": true,
        "desc": "宣言上方的装饰性引导标签。",
        "publicKey": "showKicker",
        "publicLabel": "装饰引言",
        "description": "宣言上方的装饰性引导标签。"
      },
      {
        "key": "showRule",
        "label": "强调短线",
        "type": "toggle",
        "default": true,
        "desc": "宣言下方的暖橙强调短线。",
        "publicKey": "showRule",
        "publicLabel": "强调短线",
        "description": "宣言下方的暖橙强调短线。"
      },
      {
        "key": "showFootLine",
        "label": "落款句",
        "type": "toggle",
        "default": true,
        "desc": "宣言下方的衬线收束句。",
        "publicKey": "showFootLine",
        "publicLabel": "落款句",
        "description": "宣言下方的衬线收束句。"
      },
      {
        "key": "showGhostMark",
        "label": "背景大字符",
        "type": "toggle",
        "default": true,
        "desc": "角落超大幽灵字符装饰。",
        "publicKey": "showGhostMark",
        "publicLabel": "背景大字符",
        "description": "角落超大幽灵字符装饰。"
      },
      {
        "key": "showScaffold",
        "label": "边框骨架",
        "type": "toggle",
        "default": true,
        "desc": "侧边竖排标签与四角括线。",
        "publicKey": "showScaffold",
        "publicLabel": "边框骨架",
        "description": "侧边竖排标签与四角括线。"
      },
      {
        "key": "showMeta",
        "label": "底部信息条",
        "type": "toggle",
        "default": true,
        "desc": "底部页脚信息与进度条。",
        "publicKey": "showMeta",
        "publicLabel": "底部信息条",
        "description": "底部页脚信息与进度条。"
      }
    ],
    "defaultProps": {
      "surface": "ember",
      "align": "left",
      "showKicker": true,
      "showRule": true,
      "showFootLine": true,
      "showGhostMark": true,
      "showScaffold": true,
      "showMeta": true,
      "ghostMark": "↗",
      "railText": "Manifesto — 宣言",
      "navItems": [
        "宣言"
      ],
      "navCurrent": 0,
      "ixNo": "33",
      "ixLabel": "Manifesto",
      "kickerNo": "Our promise",
      "kickerZh": "燃点的承诺",
      "headingHtml": "我们不卖<span class=\"ign-ember-text\">流量</span>，<br>我们交付<span class=\"ign-ember-text\">复利</span>。",
      "footLine": "把每一次曝光都接到收入上，让增长在停止投放之后，还在继续发生。",
      "metaLeft": "IGNIS — 燃点 · 增长哲学",
      "metaMid": "流量会停，复利不会"
    }
  },
  {
    "key": "theme11_page038",
    "themeKey": "theme11",
    "pageNumber": 38,
    "layout": "THEME11-038",
    "slot": "page38",
    "label": "观点",
    "bgClass": "",
    "controls": [
      {
        "key": "surface",
        "label": "背景基调",
        "type": "select",
        "default": "paper",
        "options": [
          {
            "value": "ink",
            "label": "深色"
          },
          {
            "value": "paper",
            "label": "浅色"
          },
          {
            "value": "ember",
            "label": "暖橙"
          }
        ],
        "desc": "页面背景主题，用于在相邻页之间制造色彩跳跃。",
        "publicKey": "surface",
        "publicLabel": "背景基调",
        "description": "页面背景主题，用于在相邻页之间制造色彩跳跃。"
      },
      {
        "key": "imageCount",
        "label": "图片槽数量",
        "type": "slider",
        "default": 1,
        "min": 0,
        "max": 1,
        "step": 1,
        "desc": "配图槽数量；为 0 时正文扩展为单栏满宽。",
        "publicKey": "imageCount",
        "publicLabel": "图片槽数量",
        "description": "配图槽数量；为 0 时正文扩展为单栏满宽。"
      },
      {
        "key": "imagePosition",
        "label": "配图位置",
        "type": "select",
        "default": "right",
        "options": [
          {
            "value": "left",
            "label": "左"
          },
          {
            "value": "right",
            "label": "右"
          }
        ],
        "desc": "配图相对正文的位置。",
        "publicKey": "imagePosition",
        "publicLabel": "配图位置",
        "description": "配图相对正文的位置。"
      },
      {
        "key": "columnCount",
        "label": "正文栏数",
        "type": "slider",
        "default": 2,
        "min": 1,
        "max": 2,
        "step": 1,
        "desc": "正文的分栏数量。",
        "publicKey": "columnCount",
        "publicLabel": "正文栏数",
        "description": "正文的分栏数量。"
      },
      {
        "key": "showDropCap",
        "label": "首字下沉",
        "type": "toggle",
        "default": true,
        "desc": "正文首段的大号首字母装饰。",
        "publicKey": "showDropCap",
        "publicLabel": "首字下沉",
        "description": "正文首段的大号首字母装饰。"
      },
      {
        "key": "showPullQuote",
        "label": "插入金句",
        "type": "toggle",
        "default": true,
        "desc": "正文中的衬线引文段落。",
        "publicKey": "showPullQuote",
        "publicLabel": "插入金句",
        "description": "正文中的衬线引文段落。"
      },
      {
        "key": "showByline",
        "label": "署名行",
        "type": "toggle",
        "default": true,
        "desc": "正文末尾的作者署名。",
        "publicKey": "showByline",
        "publicLabel": "署名行",
        "description": "正文末尾的作者署名。"
      },
      {
        "key": "showKicker",
        "label": "装饰副标题",
        "type": "toggle",
        "default": true,
        "desc": "标题上方的装饰标签。",
        "publicKey": "showKicker",
        "publicLabel": "装饰副标题",
        "description": "标题上方的装饰标签。"
      },
      {
        "key": "showGhostMark",
        "label": "背景大字符",
        "type": "toggle",
        "default": true,
        "desc": "角落超大幽灵字符装饰。",
        "publicKey": "showGhostMark",
        "publicLabel": "背景大字符",
        "description": "角落超大幽灵字符装饰。"
      },
      {
        "key": "showScaffold",
        "label": "边框骨架",
        "type": "toggle",
        "default": true,
        "desc": "侧边竖排标签与四角括线。",
        "publicKey": "showScaffold",
        "publicLabel": "边框骨架",
        "description": "侧边竖排标签与四角括线。"
      },
      {
        "key": "showMeta",
        "label": "底部信息条",
        "type": "toggle",
        "default": true,
        "desc": "底部页脚信息与进度条。",
        "publicKey": "showMeta",
        "publicLabel": "底部信息条",
        "description": "底部页脚信息与进度条。"
      }
    ],
    "defaultProps": {
      "surface": "paper",
      "imageCount": 1,
      "images": [],
      "imagePosition": "right",
      "columnCount": 2,
      "showDropCap": true,
      "showPullQuote": true,
      "showByline": true,
      "showKicker": true,
      "showGhostMark": true,
      "showScaffold": true,
      "showMeta": true,
      "ghostMark": "札记",
      "railText": "Essay — 观点",
      "navItems": [
        "观点"
      ],
      "navCurrent": 0,
      "ixNo": "34",
      "ixLabel": "Essay",
      "kickerNo": "观点",
      "kickerEn": "The long game",
      "headingHtml": "增长不是冲刺，<br><span class=\"ign-serif\">是一场复利</span>。",
      "para1": "大多数团队把增长理解成一次次活动：投一波广告、换一版页面、追一个热点。流量来了又走，预算停了就归零，报表上的曲线像心电图——好看，但不持续。",
      "pullQuote": "真正的增长，是停止投放之后还在发生的那部分。",
      "para2": "我们做的事情相反：把搜索、内容、转化、性能拧成一条能复利的链路。每一次曝光都沉淀成资产，每一处优化都抬高下一次的起点。慢，但是越跑越快。",
      "bylineHtml": "燃点增长团队 · <b>策略札记</b>",
      "imagePlaceholder": "配图 · 4:5",
      "capText": "现场 · 增长复盘会",
      "metaLeft": "IGNIS — 燃点 · 增长札记",
      "metaMid": "越跑越快的那种慢"
    }
  },
  {
    "key": "theme11_page039",
    "themeKey": "theme11",
    "pageNumber": 39,
    "layout": "THEME11-039",
    "slot": "page39",
    "label": "叠加",
    "bgClass": "",
    "controls": [
      {
        "key": "surface",
        "label": "背景基调",
        "type": "select",
        "default": "ink",
        "options": [
          {
            "value": "ink",
            "label": "深色"
          },
          {
            "value": "paper",
            "label": "浅色"
          },
          {
            "value": "ember",
            "label": "暖橙"
          }
        ],
        "desc": "页面背景主题，用于在相邻页之间制造色彩跳跃。",
        "publicKey": "surface",
        "publicLabel": "背景基调",
        "description": "页面背景主题，用于在相邻页之间制造色彩跳跃。"
      },
      {
        "key": "periodCount",
        "label": "周期数量",
        "type": "slider",
        "default": 5,
        "min": 3,
        "max": 6,
        "step": 1,
        "desc": "横轴上的时间周期（柱子）数量。",
        "publicKey": "periodCount",
        "publicLabel": "周期数量",
        "description": "横轴上的时间周期（柱子）数量。"
      },
      {
        "key": "segmentCount",
        "label": "渠道层数",
        "type": "slider",
        "default": 3,
        "min": 2,
        "max": 3,
        "step": 1,
        "desc": "每根柱子堆叠的渠道层数。",
        "publicKey": "segmentCount",
        "publicLabel": "渠道层数",
        "description": "每根柱子堆叠的渠道层数。"
      },
      {
        "key": "showTotals",
        "label": "柱顶合计",
        "type": "toggle",
        "default": true,
        "desc": "每根柱子顶部的合计数值。",
        "publicKey": "showValueLabels",
        "publicLabel": "柱顶合计",
        "description": "每根柱子顶部的合计数值。"
      },
      {
        "key": "showGrid",
        "label": "网格线",
        "type": "toggle",
        "default": true,
        "desc": "背景的水平刻度网格。",
        "publicKey": "showGrid",
        "publicLabel": "网格线",
        "description": "背景的水平刻度网格。"
      },
      {
        "key": "showLegend",
        "label": "图例",
        "type": "toggle",
        "default": true,
        "desc": "右上角的渠道图例。",
        "publicKey": "showLegend",
        "publicLabel": "图例",
        "description": "右上角的渠道图例。"
      },
      {
        "key": "emphasis",
        "label": "重点突出",
        "type": "toggle",
        "default": true,
        "desc": "开启后突出最新一根柱子，其余弱化。",
        "publicKey": "emphasis",
        "publicLabel": "重点突出",
        "description": "开启后突出最新一根柱子，其余弱化。"
      },
      {
        "key": "showKicker",
        "label": "装饰引言",
        "type": "toggle",
        "default": true,
        "desc": "标题上方的衬线引言。",
        "publicKey": "showKicker",
        "publicLabel": "装饰引言",
        "description": "标题上方的衬线引言。"
      },
      {
        "key": "showLede",
        "label": "说明文案",
        "type": "toggle",
        "default": true,
        "desc": "右上角的说明段落。",
        "publicKey": "showLede",
        "publicLabel": "说明文案",
        "description": "右上角的说明段落。"
      },
      {
        "key": "showGhostMark",
        "label": "背景大字符",
        "type": "toggle",
        "default": true,
        "desc": "角落超大幽灵字符装饰。",
        "publicKey": "showGhostMark",
        "publicLabel": "背景大字符",
        "description": "角落超大幽灵字符装饰。"
      },
      {
        "key": "showScaffold",
        "label": "边框骨架",
        "type": "toggle",
        "default": true,
        "desc": "侧边竖排标签与四角括线。",
        "publicKey": "showScaffold",
        "publicLabel": "边框骨架",
        "description": "侧边竖排标签与四角括线。"
      },
      {
        "key": "showMeta",
        "label": "底部信息条",
        "type": "toggle",
        "default": true,
        "desc": "底部页脚信息与进度条。",
        "publicKey": "showMeta",
        "publicLabel": "底部信息条",
        "description": "底部页脚信息与进度条。"
      }
    ],
    "defaultProps": {
      "surface": "ink",
      "periodCount": 5,
      "segmentCount": 3,
      "showTotals": true,
      "showGrid": true,
      "showLegend": true,
      "emphasis": true,
      "showKicker": true,
      "showLede": true,
      "showGhostMark": true,
      "showScaffold": true,
      "showMeta": true,
      "ghostMark": "▦",
      "railText": "Stacked — 叠加",
      "navItems": [
        "叠加"
      ],
      "navCurrent": 0,
      "ixNo": "35",
      "ixLabel": "Stacked",
      "lead": "Channels compound.",
      "headingHtml": "每个季度，<span class=\"ign-ember-text\">多一层动能</span>。",
      "lede": "不是把预算从一个渠道挪到另一个，而是让每条渠道都往上叠——这才是复利的形状。",
      "segs": [
        {
          "key": "s2",
          "name": "付费投放",
          "en": "Paid"
        },
        {
          "key": "s1",
          "name": "内容自然",
          "en": "Content"
        },
        {
          "key": "s0",
          "name": "直接/品牌",
          "en": "Direct"
        }
      ],
      "periods": [
        {
          "x": "Q1",
          "vals": [
            10,
            14,
            12
          ]
        },
        {
          "x": "Q2",
          "vals": [
            16,
            22,
            16
          ]
        },
        {
          "x": "Q3",
          "vals": [
            24,
            34,
            20
          ]
        },
        {
          "x": "Q4",
          "vals": [
            34,
            48,
            26
          ]
        },
        {
          "x": "Q5",
          "vals": [
            46,
            64,
            32
          ]
        },
        {
          "x": "Q6",
          "vals": [
            58,
            82,
            40
          ]
        }
      ],
      "metaLeft": "IGNIS — 燃点 · 渠道贡献叠加（季度营收 / 万元）",
      "metaMid": "往上叠，别来回挪"
    }
  },
  {
    "key": "theme11_page040",
    "themeKey": "theme11",
    "pageNumber": 40,
    "layout": "THEME11-040",
    "slot": "page40",
    "label": "拆解",
    "bgClass": "",
    "controls": [
      {
        "key": "surface",
        "label": "背景基调",
        "type": "select",
        "default": "paper",
        "options": [
          {
            "value": "ink",
            "label": "深色"
          },
          {
            "value": "paper",
            "label": "浅色"
          },
          {
            "value": "ember",
            "label": "暖橙"
          }
        ],
        "desc": "页面背景主题，用于在相邻页之间制造色彩跳跃。",
        "publicKey": "surface",
        "publicLabel": "背景基调",
        "description": "页面背景主题，用于在相邻页之间制造色彩跳跃。"
      },
      {
        "key": "stepCount",
        "label": "增量步骤",
        "type": "slider",
        "default": 4,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "基线与总计之间的增量步骤数量。",
        "publicKey": "stepCount",
        "publicLabel": "增量步骤",
        "description": "基线与总计之间的增量步骤数量。"
      },
      {
        "key": "showConnectors",
        "label": "连接虚线",
        "type": "toggle",
        "default": true,
        "desc": "相邻柱之间的水平连接虚线。",
        "publicKey": "showConnectors",
        "publicLabel": "连接虚线",
        "description": "相邻柱之间的水平连接虚线。"
      },
      {
        "key": "showValues",
        "label": "数值标签",
        "type": "toggle",
        "default": true,
        "desc": "每根柱顶部的数值。",
        "publicKey": "showValueLabels",
        "publicLabel": "数值标签",
        "description": "每根柱顶部的数值。"
      },
      {
        "key": "showBaseline",
        "label": "基线柱",
        "type": "toggle",
        "default": true,
        "desc": "最左侧的接入前基线柱。",
        "publicKey": "showBaseline",
        "publicLabel": "基线柱",
        "description": "最左侧的接入前基线柱。"
      },
      {
        "key": "showTotal",
        "label": "总计柱",
        "type": "toggle",
        "default": true,
        "desc": "最右侧的累计总计柱。",
        "publicKey": "showTotal",
        "publicLabel": "总计柱",
        "description": "最右侧的累计总计柱。"
      },
      {
        "key": "emphasis",
        "label": "重点突出",
        "type": "toggle",
        "default": false,
        "desc": "开启后突出某一增量步骤，其余弱化。",
        "publicKey": "emphasis",
        "publicLabel": "重点突出",
        "description": "开启后突出某一增量步骤，其余弱化。"
      },
      {
        "key": "emphasisIndex",
        "label": "重点序号",
        "type": "slider",
        "default": 1,
        "min": 0,
        "max": 5,
        "step": 1,
        "desc": "需要突出的柱序号（含基线，从 0 起）。",
        "publicKey": "emphasisIndex",
        "publicLabel": "重点序号",
        "description": "需要突出的柱序号（含基线，从 0 起）。"
      },
      {
        "key": "showKicker",
        "label": "装饰引言",
        "type": "toggle",
        "default": true,
        "desc": "标题上方的衬线引言。",
        "publicKey": "showKicker",
        "publicLabel": "装饰引言",
        "description": "标题上方的衬线引言。"
      },
      {
        "key": "showLede",
        "label": "说明文案",
        "type": "toggle",
        "default": true,
        "desc": "右上角的说明段落。",
        "publicKey": "showLede",
        "publicLabel": "说明文案",
        "description": "右上角的说明段落。"
      },
      {
        "key": "showGhostMark",
        "label": "背景大字符",
        "type": "toggle",
        "default": true,
        "desc": "角落超大幽灵字符装饰。",
        "publicKey": "showGhostMark",
        "publicLabel": "背景大字符",
        "description": "角落超大幽灵字符装饰。"
      },
      {
        "key": "showScaffold",
        "label": "边框骨架",
        "type": "toggle",
        "default": true,
        "desc": "侧边竖排标签与四角括线。",
        "publicKey": "showScaffold",
        "publicLabel": "边框骨架",
        "description": "侧边竖排标签与四角括线。"
      },
      {
        "key": "showMeta",
        "label": "底部信息条",
        "type": "toggle",
        "default": true,
        "desc": "底部页脚信息与进度条。",
        "publicKey": "showMeta",
        "publicLabel": "底部信息条",
        "description": "底部页脚信息与进度条。"
      }
    ],
    "defaultProps": {
      "surface": "paper",
      "stepCount": 4,
      "showConnectors": true,
      "showValues": true,
      "showBaseline": true,
      "showTotal": true,
      "emphasis": false,
      "emphasisIndex": 1,
      "showKicker": true,
      "showLede": true,
      "showGhostMark": true,
      "showScaffold": true,
      "showMeta": true,
      "ghostMark": "↗",
      "railText": "Bridge — 拆解",
      "navItems": [
        "拆解"
      ],
      "navCurrent": 0,
      "ixNo": "36",
      "ixLabel": "Bridge",
      "lead": "From 100 to 300, step by step.",
      "headingHtml": "这 <span class=\"ign-ember-text\">3 倍</span>，<br>是怎么一段段搭起来的。",
      "lede": "把增长拆成可解释的几段：每一段都来自一个具体动作，没有黑箱。",
      "steps": [
        {
          "type": "base",
          "zh": "接入前基线",
          "en": "Baseline",
          "v": 100
        },
        {
          "type": "inc",
          "zh": "搜索与内容",
          "en": "+SEO",
          "v": 64
        },
        {
          "type": "inc",
          "zh": "转化优化",
          "en": "+CRO",
          "v": 52
        },
        {
          "type": "inc",
          "zh": "付费放大",
          "en": "+Paid",
          "v": 48
        },
        {
          "type": "inc",
          "zh": "协同复利",
          "en": "+Synergy",
          "v": 36
        },
        {
          "type": "tot",
          "zh": "12 个月后",
          "en": "Total",
          "v": 300
        }
      ],
      "metaLeft": "IGNIS — 燃点 · 增长来源拆解（指数化 · 基线 = 100）",
      "metaMid": "每一段，都说得清来源"
    }
  },
  {
    "key": "theme11_page041",
    "themeKey": "theme11",
    "pageNumber": 41,
    "layout": "THEME11-041",
    "slot": "page41",
    "label": "影像",
    "bgClass": "",
    "controls": [
      {
        "key": "surface",
        "label": "背景基调",
        "type": "select",
        "default": "ember",
        "options": [
          {
            "value": "ink",
            "label": "深色"
          },
          {
            "value": "paper",
            "label": "浅色"
          },
          {
            "value": "ember",
            "label": "暖橙"
          }
        ],
        "desc": "页面背景主题，用于在相邻页之间制造色彩跳跃。",
        "publicKey": "surface",
        "publicLabel": "背景基调",
        "description": "页面背景主题，用于在相邻页之间制造色彩跳跃。"
      },
      {
        "key": "tileCount",
        "label": "拼贴块数",
        "type": "slider",
        "default": 3,
        "min": 2,
        "max": 5,
        "step": 1,
        "desc": "拼贴的图块数量，每个图块都是可点击上传的图片槽，布局随之自适应。",
        "publicKey": "tileCount",
        "publicLabel": "拼贴块数",
        "description": "拼贴的图块数量，每个图块都是可点击上传的图片槽，布局随之自适应。"
      },
      {
        "key": "showTags",
        "label": "图块标注",
        "type": "toggle",
        "default": true,
        "desc": "每个图块左下角的编号标注。",
        "publicKey": "showTags",
        "publicLabel": "图块标注",
        "description": "每个图块左下角的编号标注。"
      },
      {
        "key": "showHead",
        "label": "标题区",
        "type": "toggle",
        "default": true,
        "desc": "顶部标题与说明区域。",
        "publicKey": "showHead",
        "publicLabel": "标题区",
        "description": "顶部标题与说明区域。"
      },
      {
        "key": "showKicker",
        "label": "装饰引言",
        "type": "toggle",
        "default": true,
        "desc": "标题上方的衬线引言。",
        "publicKey": "showKicker",
        "publicLabel": "装饰引言",
        "description": "标题上方的衬线引言。"
      },
      {
        "key": "showLede",
        "label": "说明文案",
        "type": "toggle",
        "default": true,
        "desc": "右上角的说明段落。",
        "publicKey": "showLede",
        "publicLabel": "说明文案",
        "description": "右上角的说明段落。"
      },
      {
        "key": "showGhostMark",
        "label": "背景大字符",
        "type": "toggle",
        "default": true,
        "desc": "角落超大幽灵字符装饰。",
        "publicKey": "showGhostMark",
        "publicLabel": "背景大字符",
        "description": "角落超大幽灵字符装饰。"
      },
      {
        "key": "showScaffold",
        "label": "边框骨架",
        "type": "toggle",
        "default": true,
        "desc": "侧边竖排标签与四角括线。",
        "publicKey": "showScaffold",
        "publicLabel": "边框骨架",
        "description": "侧边竖排标签与四角括线。"
      },
      {
        "key": "showMeta",
        "label": "底部信息条",
        "type": "toggle",
        "default": true,
        "desc": "底部页脚信息与进度条。",
        "publicKey": "showMeta",
        "publicLabel": "底部信息条",
        "description": "底部页脚信息与进度条。"
      }
    ],
    "defaultProps": {
      "surface": "ember",
      "tileCount": 3,
      "images": [],
      "showTags": true,
      "showHead": true,
      "showKicker": true,
      "showLede": true,
      "showGhostMark": true,
      "showScaffold": true,
      "showMeta": true,
      "ghostMark": "◳",
      "railText": "Mosaic — 影像",
      "navItems": [
        "影像"
      ],
      "navCurrent": 0,
      "ixNo": "37",
      "ixLabel": "Mosaic",
      "lead": "One look, every surface.",
      "headingHtml": "一套视觉，<span class=\"ign-ember-text\">铺满每个触点</span>。",
      "lede": "从落地页到广告位到社媒，同一套语言反复出现——认知靠的是一致，不是惊喜。",
      "tiles": [
        {
          "area": "ca",
          "cls": "ca",
          "ph": "主视觉 · 3:2",
          "no": "01",
          "tag": "品牌主张"
        },
        {
          "area": "cb",
          "cls": "cb",
          "ph": "场景 · 4:3",
          "no": "02",
          "tag": "落地页"
        },
        {
          "area": "cc",
          "cls": "cc",
          "ph": "细节 · 4:3",
          "no": "03",
          "tag": "内容矩阵"
        },
        {
          "area": "cd",
          "cls": "cd",
          "ph": "细节 · 1:1",
          "no": "04",
          "tag": "社媒"
        },
        {
          "area": "ce",
          "cls": "ce",
          "ph": "细节 · 1:1",
          "no": "05",
          "tag": "广告"
        }
      ],
      "metaLeft": "IGNIS — 燃点 · 全触点视觉拼贴",
      "metaMid": "一致，才会被记住"
    }
  },
  {
    "key": "theme11_page042",
    "themeKey": "theme11",
    "pageNumber": 42,
    "layout": "THEME11-042",
    "slot": "page42",
    "label": "信任",
    "bgClass": "",
    "controls": [
      {
        "key": "surface",
        "label": "背景基调",
        "type": "select",
        "default": "ink",
        "options": [
          {
            "value": "ink",
            "label": "深色"
          },
          {
            "value": "paper",
            "label": "浅色"
          },
          {
            "value": "ember",
            "label": "暖橙"
          }
        ],
        "desc": "页面背景主题，用于在相邻页之间制造色彩跳跃。",
        "publicKey": "surface",
        "publicLabel": "背景基调",
        "description": "页面背景主题，用于在相邻页之间制造色彩跳跃。"
      },
      {
        "key": "brandCount",
        "label": "品牌数量",
        "type": "slider",
        "default": 8,
        "min": 4,
        "max": 12,
        "step": 1,
        "desc": "展示的品牌格子数量。",
        "publicKey": "brandCount",
        "publicLabel": "品牌数量",
        "description": "展示的品牌格子数量。"
      },
      {
        "key": "columns",
        "label": "每行列数",
        "type": "slider",
        "default": 4,
        "min": 3,
        "max": 6,
        "step": 1,
        "desc": "品牌墙每行的列数。",
        "publicKey": "columns",
        "publicLabel": "每行列数",
        "description": "品牌墙每行的列数。"
      },
      {
        "key": "logoCount",
        "label": "Logo 槽数量",
        "type": "slider",
        "default": 0,
        "min": 0,
        "max": 12,
        "step": 1,
        "desc": "使用真实 logo 的格子数；其余回退为字母组合标记。",
        "publicKey": "logoCount",
        "publicLabel": "Logo 槽数量",
        "description": "使用真实 logo 的格子数；其余回退为字母组合标记。"
      },
      {
        "key": "showNames",
        "label": "品牌名",
        "type": "toggle",
        "default": true,
        "desc": "字母标记旁的品牌名称。",
        "publicKey": "showNames",
        "publicLabel": "品牌名",
        "description": "字母标记旁的品牌名称。"
      },
      {
        "key": "showStat",
        "label": "信任数据",
        "type": "toggle",
        "default": true,
        "desc": "右上角的客户数量大数字。",
        "publicKey": "showStat",
        "publicLabel": "信任数据",
        "description": "右上角的客户数量大数字。"
      },
      {
        "key": "showKicker",
        "label": "装饰引言",
        "type": "toggle",
        "default": true,
        "desc": "标题上方的衬线引言。",
        "publicKey": "showKicker",
        "publicLabel": "装饰引言",
        "description": "标题上方的衬线引言。"
      },
      {
        "key": "showGhostMark",
        "label": "背景大字符",
        "type": "toggle",
        "default": true,
        "desc": "角落超大幽灵字符装饰。",
        "publicKey": "showGhostMark",
        "publicLabel": "背景大字符",
        "description": "角落超大幽灵字符装饰。"
      },
      {
        "key": "showScaffold",
        "label": "边框骨架",
        "type": "toggle",
        "default": true,
        "desc": "侧边竖排标签与四角括线。",
        "publicKey": "showScaffold",
        "publicLabel": "边框骨架",
        "description": "侧边竖排标签与四角括线。"
      },
      {
        "key": "showMeta",
        "label": "底部信息条",
        "type": "toggle",
        "default": true,
        "desc": "底部页脚信息与进度条。",
        "publicKey": "showMeta",
        "publicLabel": "底部信息条",
        "description": "底部页脚信息与进度条。"
      }
    ],
    "defaultProps": {
      "surface": "ink",
      "brandCount": 8,
      "columns": 4,
      "logoCount": 0,
      "images": [],
      "showNames": true,
      "showStat": true,
      "showKicker": true,
      "showGhostMark": true,
      "showScaffold": true,
      "showMeta": true,
      "ghostMark": "★",
      "railText": "Clients — 信任",
      "navItems": [
        "信任"
      ],
      "navCurrent": 0,
      "ixNo": "38",
      "ixLabel": "Clients",
      "lead": "They bet on the engine.",
      "headingHtml": "这些团队，<span class=\"ign-ember-text\">把增长交给了我们</span>。",
      "statValue": "120+",
      "statLabel": "合作品牌 · 续约率 94%",
      "brands": [
        {
          "mk": "V",
          "nm": "VOLT"
        },
        {
          "mk": "Ar",
          "nm": "ARCO"
        },
        {
          "mk": "N",
          "nm": "NIMBUS"
        },
        {
          "mk": "Q",
          "nm": "QUILL"
        },
        {
          "mk": "Fe",
          "nm": "FERRO"
        },
        {
          "mk": "Lu",
          "nm": "LUMA"
        },
        {
          "mk": "Hx",
          "nm": "HELIX"
        },
        {
          "mk": "Od",
          "nm": "ODEON"
        },
        {
          "mk": "Pi",
          "nm": "PIVOT"
        },
        {
          "mk": "Sa",
          "nm": "SABLE"
        },
        {
          "mk": "Tg",
          "nm": "TANGRAM"
        },
        {
          "mk": "Ze",
          "nm": "ZEN"
        }
      ],
      "metaLeft": "IGNIS — 燃点 · 部分合作品牌",
      "metaMid": "信任，是最难伪造的指标"
    }
  },
  {
    "key": "theme11_page043",
    "themeKey": "theme11",
    "pageNumber": 43,
    "layout": "THEME11-043",
    "slot": "page43",
    "label": "异议",
    "bgClass": "",
    "controls": [
      {
        "key": "surface",
        "label": "背景基调",
        "type": "select",
        "default": "paper",
        "options": [
          {
            "value": "ink",
            "label": "深色"
          },
          {
            "value": "paper",
            "label": "浅色"
          },
          {
            "value": "ember",
            "label": "暖橙"
          }
        ],
        "desc": "页面背景主题，用于在相邻页之间制造色彩跳跃。",
        "publicKey": "surface",
        "publicLabel": "背景基调",
        "description": "页面背景主题，用于在相邻页之间制造色彩跳跃。"
      },
      {
        "key": "rowCount",
        "label": "问答行数",
        "type": "slider",
        "default": 4,
        "min": 3,
        "max": 5,
        "step": 1,
        "desc": "问答表的行数。",
        "publicKey": "rowCount",
        "publicLabel": "问答行数",
        "description": "问答表的行数。"
      },
      {
        "key": "showColHeads",
        "label": "列名表头",
        "type": "toggle",
        "default": true,
        "desc": "顶部「顾虑 / 我们的回答」列名。",
        "publicKey": "showColHeads",
        "publicLabel": "列名表头",
        "description": "顶部「顾虑 / 我们的回答」列名。"
      },
      {
        "key": "showNumbers",
        "label": "序号列",
        "type": "toggle",
        "default": true,
        "desc": "每行左侧的编号。",
        "publicKey": "showNumbers",
        "publicLabel": "序号列",
        "description": "每行左侧的编号。"
      },
      {
        "key": "emphasis",
        "label": "重点突出",
        "type": "toggle",
        "default": false,
        "desc": "开启后高亮某一行，其余弱化。",
        "publicKey": "emphasis",
        "publicLabel": "重点突出",
        "description": "开启后高亮某一行，其余弱化。"
      },
      {
        "key": "emphasisIndex",
        "label": "重点序号",
        "type": "slider",
        "default": 0,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "需要高亮的行序号（从 0 起）。",
        "publicKey": "emphasisIndex",
        "publicLabel": "重点序号",
        "description": "需要高亮的行序号（从 0 起）。"
      },
      {
        "key": "showKicker",
        "label": "装饰引言",
        "type": "toggle",
        "default": true,
        "desc": "标题上方的衬线引言。",
        "publicKey": "showKicker",
        "publicLabel": "装饰引言",
        "description": "标题上方的衬线引言。"
      },
      {
        "key": "showLede",
        "label": "说明文案",
        "type": "toggle",
        "default": true,
        "desc": "右上角的说明段落。",
        "publicKey": "showLede",
        "publicLabel": "说明文案",
        "description": "右上角的说明段落。"
      },
      {
        "key": "showGhostMark",
        "label": "背景大字符",
        "type": "toggle",
        "default": true,
        "desc": "角落超大幽灵字符装饰。",
        "publicKey": "showGhostMark",
        "publicLabel": "背景大字符",
        "description": "角落超大幽灵字符装饰。"
      },
      {
        "key": "showScaffold",
        "label": "边框骨架",
        "type": "toggle",
        "default": true,
        "desc": "侧边竖排标签与四角括线。",
        "publicKey": "showScaffold",
        "publicLabel": "边框骨架",
        "description": "侧边竖排标签与四角括线。"
      },
      {
        "key": "showMeta",
        "label": "底部信息条",
        "type": "toggle",
        "default": true,
        "desc": "底部页脚信息与进度条。",
        "publicKey": "showMeta",
        "publicLabel": "底部信息条",
        "description": "底部页脚信息与进度条。"
      }
    ],
    "defaultProps": {
      "surface": "paper",
      "rowCount": 4,
      "showColHeads": true,
      "showNumbers": true,
      "emphasis": false,
      "emphasisIndex": 0,
      "showKicker": true,
      "showLede": true,
      "showGhostMark": true,
      "showScaffold": true,
      "showMeta": true,
      "ghostMark": "?",
      "railText": "FAQ — 异议",
      "navItems": [
        "异议"
      ],
      "navCurrent": 0,
      "ixNo": "39",
      "ixLabel": "FAQ",
      "lead": "The honest answers.",
      "headingHtml": "你大概在想的，<span class=\"ign-ember-text\">我们先答了</span>。",
      "lede": "把最常见的顾虑摆到台面上——不绕弯子，直接给确定的回答。",
      "numLabel": "№",
      "qHead": "常见顾虑",
      "aHead": "我们的回答",
      "qMark": "Q",
      "aMark": "A",
      "qa": [
        {
          "q": "是不是又要长期绑定？",
          "a": "按季度结算，首季不满意全额退。我们靠结果续约，不靠合同锁定。"
        },
        {
          "q": "多久能看到效果？",
          "a": "14 天内出可量化的首批信号，90 天进入复利区间。每周同步进展。"
        },
        {
          "q": "我们已经有营销团队了。",
          "a": "我们不替代，我们补齐缺口、放大产能。你的团队 + 我们的引擎。"
        },
        {
          "q": "数据和归因可信吗？",
          "a": "全链路埋点，自然与付费合并归因，报表你随时可查、可导出。"
        },
        {
          "q": "预算停了会归零吗？",
          "a": "内容与SEO是沉淀资产，停投后仍持续带量——这正是复利的意义。"
        }
      ],
      "metaLeft": "IGNIS — 燃点 · 常见顾虑与回答",
      "metaMid": "把疑虑摆上台面"
    }
  },
  {
    "key": "theme11_page044",
    "themeKey": "theme11",
    "pageNumber": 44,
    "layout": "THEME11-044",
    "slot": "page44",
    "label": "章节",
    "bgClass": "",
    "controls": [
      {
        "key": "surface",
        "label": "背景基调",
        "type": "select",
        "default": "ink",
        "options": [
          {
            "value": "ink",
            "label": "深色"
          },
          {
            "value": "paper",
            "label": "浅色"
          },
          {
            "value": "ember",
            "label": "暖橙"
          }
        ],
        "desc": "页面背景主题，用于在相邻页之间制造色彩跳跃。",
        "publicKey": "surface",
        "publicLabel": "背景基调",
        "description": "页面背景主题，用于在相邻页之间制造色彩跳跃。"
      },
      {
        "key": "chapterNo",
        "label": "章节编号",
        "type": "select",
        "default": "03",
        "options": [
          {
            "value": "01",
            "label": "01"
          },
          {
            "value": "02",
            "label": "02"
          },
          {
            "value": "03",
            "label": "03"
          },
          {
            "value": "04",
            "label": "04"
          },
          {
            "value": "05",
            "label": "05"
          }
        ],
        "desc": "巨型章节序号。",
        "publicKey": "chapterNo",
        "publicLabel": "章节编号",
        "description": "巨型章节序号。"
      },
      {
        "key": "showNumber",
        "label": "巨型序号",
        "type": "toggle",
        "default": true,
        "desc": "左侧的超大章节数字。",
        "publicKey": "showNumber",
        "publicLabel": "巨型序号",
        "description": "左侧的超大章节数字。"
      },
      {
        "key": "showSub",
        "label": "副标题",
        "type": "toggle",
        "default": true,
        "desc": "章节标题下方的说明句。",
        "publicKey": "showSub",
        "publicLabel": "副标题",
        "description": "章节标题下方的说明句。"
      },
      {
        "key": "showAgenda",
        "label": "小目录",
        "type": "toggle",
        "default": true,
        "desc": "右侧本章覆盖要点的小目录。",
        "publicKey": "showAgenda",
        "publicLabel": "小目录",
        "description": "右侧本章覆盖要点的小目录。"
      },
      {
        "key": "agendaCount",
        "label": "目录条数",
        "type": "slider",
        "default": 4,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "小目录的条目数量。",
        "publicKey": "itemCount",
        "publicLabel": "目录条数",
        "description": "小目录的条目数量。"
      },
      {
        "key": "agendaCurrent",
        "label": "当前条目",
        "type": "slider",
        "default": 0,
        "min": 0,
        "max": 3,
        "step": 1,
        "desc": "小目录中高亮的当前条目序号（从 0 起）。",
        "publicKey": "agendaCurrent",
        "publicLabel": "当前条目",
        "description": "小目录中高亮的当前条目序号（从 0 起）。"
      },
      {
        "key": "showKicker",
        "label": "装饰引言",
        "type": "toggle",
        "default": true,
        "desc": "标题上方的章节引导标签。",
        "publicKey": "showKicker",
        "publicLabel": "装饰引言",
        "description": "标题上方的章节引导标签。"
      },
      {
        "key": "showGhostMark",
        "label": "背景大字符",
        "type": "toggle",
        "default": true,
        "desc": "角落超大描边字符装饰。",
        "publicKey": "showGhostMark",
        "publicLabel": "背景大字符",
        "description": "角落超大描边字符装饰。"
      },
      {
        "key": "showScaffold",
        "label": "边框骨架",
        "type": "toggle",
        "default": true,
        "desc": "侧边竖排标签与四角括线。",
        "publicKey": "showScaffold",
        "publicLabel": "边框骨架",
        "description": "侧边竖排标签与四角括线。"
      },
      {
        "key": "showMeta",
        "label": "底部信息条",
        "type": "toggle",
        "default": true,
        "desc": "底部页脚信息与进度条。",
        "publicKey": "showMeta",
        "publicLabel": "底部信息条",
        "description": "底部页脚信息与进度条。"
      }
    ],
    "defaultProps": {
      "surface": "ink",
      "chapterNo": "03",
      "showNumber": true,
      "showSub": true,
      "showAgenda": true,
      "agendaCount": 4,
      "agendaCurrent": 0,
      "showKicker": true,
      "showGhostMark": true,
      "showScaffold": true,
      "showMeta": true,
      "railText": "Chapter — 章节",
      "navItems": [
        "章节"
      ],
      "navCurrent": 0,
      "ixNo": "40",
      "ixLabel": "Chapter",
      "leadEnPrefix": "Chapter",
      "leadZh": "本章",
      "headingHtml": "把引擎，<br><span class=\"ign-serif\">拆给你看</span>。",
      "sub": "接下来三页，我们逐层打开增长引擎——每一个齿轮，怎么咬合、怎么发力。",
      "agenda": [
        {
          "tt": "增长引擎拆解",
          "en": "The engine",
          "cur": true
        },
        {
          "tt": "渠道与归因",
          "en": "Channels & data",
          "cur": false
        },
        {
          "tt": "定价与合作",
          "en": "Pricing",
          "cur": false
        },
        {
          "tt": "下一步行动",
          "en": "Next steps",
          "cur": false
        }
      ],
      "metaMid": "逐层打开"
    }
  },
  {
    "key": "theme11_page045",
    "themeKey": "theme11",
    "pageNumber": 45,
    "layout": "THEME11-045",
    "slot": "page45",
    "label": "数字",
    "bgClass": "",
    "controls": [
      {
        "key": "surface",
        "label": "背景基调",
        "type": "select",
        "default": "ember",
        "options": [
          {
            "value": "ink",
            "label": "深色"
          },
          {
            "value": "paper",
            "label": "浅色"
          },
          {
            "value": "ember",
            "label": "暖橙"
          }
        ],
        "desc": "页面背景主题，用于在相邻页之间制造色彩跳跃。",
        "publicKey": "surface",
        "publicLabel": "背景基调",
        "description": "页面背景主题，用于在相邻页之间制造色彩跳跃。"
      },
      {
        "key": "statCount",
        "label": "数字数量",
        "type": "slider",
        "default": 3,
        "min": 2,
        "max": 3,
        "step": 1,
        "desc": "并列展示的大数字数量。",
        "publicKey": "statCount",
        "publicLabel": "数字数量",
        "description": "并列展示的大数字数量。"
      },
      {
        "key": "orientation",
        "label": "排列方向",
        "type": "select",
        "default": "row",
        "options": [
          {
            "value": "row",
            "label": "横向并列"
          },
          {
            "value": "stack",
            "label": "纵向堆叠"
          }
        ],
        "desc": "大数字的排列方向。",
        "publicKey": "orientation",
        "publicLabel": "排列方向",
        "description": "大数字的排列方向。"
      },
      {
        "key": "showDeltas",
        "label": "趋势标记",
        "type": "toggle",
        "default": true,
        "desc": "每个数字的趋势/对比标记。",
        "publicKey": "showDeltas",
        "publicLabel": "趋势标记",
        "description": "每个数字的趋势/对比标记。"
      },
      {
        "key": "showCaptions",
        "label": "数字说明",
        "type": "toggle",
        "default": true,
        "desc": "每个数字的说明文案。",
        "publicKey": "showCaptions",
        "publicLabel": "数字说明",
        "description": "每个数字的说明文案。"
      },
      {
        "key": "emphasis",
        "label": "重点突出",
        "type": "toggle",
        "default": false,
        "desc": "开启后突出某一个数字，其余弱化。",
        "publicKey": "emphasis",
        "publicLabel": "重点突出",
        "description": "开启后突出某一个数字，其余弱化。"
      },
      {
        "key": "emphasisIndex",
        "label": "重点序号",
        "type": "slider",
        "default": 0,
        "min": 0,
        "max": 2,
        "step": 1,
        "desc": "需要突出的数字序号（从 0 起）。",
        "publicKey": "emphasisIndex",
        "publicLabel": "重点序号",
        "description": "需要突出的数字序号（从 0 起）。"
      },
      {
        "key": "showKicker",
        "label": "装饰副标题",
        "type": "toggle",
        "default": true,
        "desc": "主标题上方的装饰标签。",
        "publicKey": "showKicker",
        "publicLabel": "装饰副标题",
        "description": "主标题上方的装饰标签。"
      },
      {
        "key": "showLede",
        "label": "主标题",
        "type": "toggle",
        "default": true,
        "desc": "数字带上方的主标题。",
        "publicKey": "showLede",
        "publicLabel": "主标题",
        "description": "数字带上方的主标题。"
      },
      {
        "key": "showGhostMark",
        "label": "背景大字符",
        "type": "toggle",
        "default": true,
        "desc": "角落超大幽灵字符装饰。",
        "publicKey": "showGhostMark",
        "publicLabel": "背景大字符",
        "description": "角落超大幽灵字符装饰。"
      },
      {
        "key": "showScaffold",
        "label": "边框骨架",
        "type": "toggle",
        "default": true,
        "desc": "侧边竖排标签与四角括线。",
        "publicKey": "showScaffold",
        "publicLabel": "边框骨架",
        "description": "侧边竖排标签与四角括线。"
      },
      {
        "key": "showMeta",
        "label": "底部信息条",
        "type": "toggle",
        "default": true,
        "desc": "底部页脚信息与进度条。",
        "publicKey": "showMeta",
        "publicLabel": "底部信息条",
        "description": "底部页脚信息与进度条。"
      }
    ],
    "defaultProps": {
      "surface": "ember",
      "statCount": 3,
      "orientation": "row",
      "showDeltas": true,
      "showCaptions": true,
      "emphasis": false,
      "emphasisIndex": 0,
      "showKicker": true,
      "showLede": true,
      "showGhostMark": true,
      "showScaffold": true,
      "showMeta": true,
      "ghostMark": "%",
      "railText": "Numbers — 数字",
      "navItems": [
        "数字"
      ],
      "navCurrent": 0,
      "ixNo": "41",
      "ixLabel": "Numbers",
      "leadEn": "By the numbers",
      "leadZh": "三个数字",
      "headingHtml": "不用形容词，<span class=\"ign-ember-text\">用三个数字</span>说话。",
      "stats": [
        {
          "num": "3.8",
          "u": "×",
          "delta": "↑ vs 行业 1.4×",
          "cap": "平均转化率提升，接入 12 个月口径。"
        },
        {
          "num": "−41",
          "u": "%",
          "delta": "↓ 持续下降",
          "cap": "单客获取成本，靠自然流量稀释付费。"
        },
        {
          "num": "94",
          "u": "%",
          "delta": "↑ 逐年走高",
          "cap": "客户续约率——结果好，才留得住。"
        }
      ],
      "metaLeft": "IGNIS — 燃点 · 关键成效（中位客户口径）",
      "metaMid": "数字不会替你夸张"
    }
  },
  {
    "key": "theme11_page046",
    "themeKey": "theme11",
    "pageNumber": 46,
    "layout": "THEME11-046",
    "slot": "page46",
    "label": "节拍",
    "bgClass": "",
    "controls": [
      {
        "key": "surface",
        "label": "背景基调",
        "type": "select",
        "default": "ink",
        "options": [
          {
            "value": "ink",
            "label": "深色"
          },
          {
            "value": "paper",
            "label": "浅色"
          },
          {
            "value": "ember",
            "label": "暖橙"
          }
        ],
        "desc": "页面背景主题，用于在相邻页之间制造色彩跳跃。",
        "publicKey": "surface",
        "publicLabel": "背景基调",
        "description": "页面背景主题，用于在相邻页之间制造色彩跳跃。"
      },
      {
        "key": "imageCount",
        "label": "图片槽数量",
        "type": "slider",
        "default": 1,
        "min": 0,
        "max": 1,
        "step": 1,
        "desc": "配图槽数量；为 0 时正文区扩展为整宽。",
        "publicKey": "imageCount",
        "publicLabel": "图片槽数量",
        "description": "配图槽数量；为 0 时正文区扩展为整宽。"
      },
      {
        "key": "imagePosition",
        "label": "配图位置",
        "type": "select",
        "default": "right",
        "options": [
          {
            "value": "left",
            "label": "左"
          },
          {
            "value": "right",
            "label": "右"
          }
        ],
        "desc": "配图相对正文的位置。",
        "publicKey": "imagePosition",
        "publicLabel": "配图位置",
        "description": "配图相对正文的位置。"
      },
      {
        "key": "pointCount",
        "label": "要点数量",
        "type": "slider",
        "default": 3,
        "min": 2,
        "max": 3,
        "step": 1,
        "desc": "编号要点的数量。",
        "publicKey": "pointCount",
        "publicLabel": "要点数量",
        "description": "编号要点的数量。"
      },
      {
        "key": "showLede",
        "label": "导语",
        "type": "toggle",
        "default": true,
        "desc": "标题下方的说明段落。",
        "publicKey": "showLede",
        "publicLabel": "导语",
        "description": "标题下方的说明段落。"
      },
      {
        "key": "showStatTab",
        "label": "数据浮签",
        "type": "toggle",
        "default": true,
        "desc": "配图上叠加的数据浮签。",
        "publicKey": "showStatTab",
        "publicLabel": "数据浮签",
        "description": "配图上叠加的数据浮签。"
      },
      {
        "key": "showKicker",
        "label": "装饰副标题",
        "type": "toggle",
        "default": true,
        "desc": "主标题上方的装饰标签。",
        "publicKey": "showKicker",
        "publicLabel": "装饰副标题",
        "description": "主标题上方的装饰标签。"
      },
      {
        "key": "showGhostMark",
        "label": "背景大字符",
        "type": "toggle",
        "default": true,
        "desc": "角落超大幽灵字符装饰。",
        "publicKey": "showGhostMark",
        "publicLabel": "背景大字符",
        "description": "角落超大幽灵字符装饰。"
      },
      {
        "key": "showScaffold",
        "label": "边框骨架",
        "type": "toggle",
        "default": true,
        "desc": "侧边竖排标签与四角括线。",
        "publicKey": "showScaffold",
        "publicLabel": "边框骨架",
        "description": "侧边竖排标签与四角括线。"
      },
      {
        "key": "showMeta",
        "label": "底部信息条",
        "type": "toggle",
        "default": true,
        "desc": "底部页脚信息与进度条。",
        "publicKey": "showMeta",
        "publicLabel": "底部信息条",
        "description": "底部页脚信息与进度条。"
      }
    ],
    "defaultProps": {
      "surface": "ink",
      "imageCount": 1,
      "images": [],
      "imagePosition": "right",
      "pointCount": 3,
      "showLede": true,
      "showStatTab": true,
      "showKicker": true,
      "showGhostMark": true,
      "showScaffold": true,
      "showMeta": true,
      "ghostMark": "节拍",
      "railText": "Cadence — 节拍",
      "navItems": [
        "节拍"
      ],
      "navCurrent": 0,
      "ixNo": "42",
      "ixLabel": "Cadence",
      "kickerNo": "工作方式",
      "kickerEn": "How we run",
      "headingHtml": "慢一点开始，<br><span class=\"ign-serif\">快很多见效</span>。",
      "lede": "我们不追求第一周就放烟花，而是把基础打牢——让后面每一步都踩在前一步的肩膀上。",
      "imagePlaceholder": "配图 · 4:5",
      "statValue": "×2.4",
      "statLabel": "迭代效率 · 对比传统排期",
      "points": [
        {
          "nv": "01",
          "tx": "诊断先行",
          "sub": "上手前先把现状量化，不拍脑袋。"
        },
        {
          "nv": "02",
          "tx": "小步快跑",
          "sub": "每周一次迭代，快速验证、快速纠偏。"
        },
        {
          "nv": "03",
          "tx": "资产沉淀",
          "sub": "内容与数据留存复用，越跑越省力。"
        }
      ],
      "metaLeft": "IGNIS — 燃点 · 工作方式",
      "metaMid": "打牢地基，再起跳"
    }
  },
  {
    "key": "theme11_page047",
    "themeKey": "theme11",
    "pageNumber": 47,
    "layout": "THEME11-047",
    "slot": "page47",
    "label": "留存",
    "bgClass": "",
    "controls": [
      {
        "key": "surface",
        "label": "背景基调",
        "type": "select",
        "default": "ink",
        "options": [
          {
            "value": "ink",
            "label": "深色"
          },
          {
            "value": "paper",
            "label": "浅色"
          },
          {
            "value": "ember",
            "label": "暖橙"
          }
        ],
        "desc": "页面背景主题，用于在相邻页之间制造色彩跳跃。",
        "publicKey": "surface",
        "publicLabel": "背景基调",
        "description": "页面背景主题，用于在相邻页之间制造色彩跳跃。"
      },
      {
        "key": "cohortCount",
        "label": "群组行数",
        "type": "slider",
        "default": 5,
        "min": 3,
        "max": 5,
        "step": 1,
        "desc": "横向群组（每月新客队列）行数。",
        "publicKey": "cohortCount",
        "publicLabel": "群组行数",
        "description": "横向群组（每月新客队列）行数。"
      },
      {
        "key": "periodCount",
        "label": "观察周期",
        "type": "slider",
        "default": 6,
        "min": 4,
        "max": 6,
        "step": 1,
        "desc": "纵向观察周期（周）列数。",
        "publicKey": "periodCount",
        "publicLabel": "观察周期",
        "description": "纵向观察周期（周）列数。"
      },
      {
        "key": "showValues",
        "label": "单元数值",
        "type": "toggle",
        "default": true,
        "desc": "每个色块中的留存百分比数值。",
        "publicKey": "showValueLabels",
        "publicLabel": "单元数值",
        "description": "每个色块中的留存百分比数值。"
      },
      {
        "key": "showRowHead",
        "label": "行标题",
        "type": "toggle",
        "default": true,
        "desc": "左侧群组名称与样本量。",
        "publicKey": "showRowHead",
        "publicLabel": "行标题",
        "description": "左侧群组名称与样本量。"
      },
      {
        "key": "showColHead",
        "label": "列标题",
        "type": "toggle",
        "default": true,
        "desc": "顶部周期标签。",
        "publicKey": "showColHead",
        "publicLabel": "列标题",
        "description": "顶部周期标签。"
      },
      {
        "key": "showLegend",
        "label": "色阶图例",
        "type": "toggle",
        "default": true,
        "desc": "底部留存强度色阶。",
        "publicKey": "showLegend",
        "publicLabel": "色阶图例",
        "description": "底部留存强度色阶。"
      },
      {
        "key": "emphasis",
        "label": "重点突出",
        "type": "toggle",
        "default": false,
        "desc": "开启后突出某一行群组，其余弱化。",
        "publicKey": "emphasis",
        "publicLabel": "重点突出",
        "description": "开启后突出某一行群组，其余弱化。"
      },
      {
        "key": "emphasisRow",
        "label": "重点行",
        "type": "slider",
        "default": 0,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "需要突出的群组行序号（从 0 起）。",
        "publicKey": "emphasisRow",
        "publicLabel": "重点行",
        "description": "需要突出的群组行序号（从 0 起）。"
      },
      {
        "key": "showKicker",
        "label": "装饰引言",
        "type": "toggle",
        "default": true,
        "desc": "标题上方的衬线引言。",
        "publicKey": "showKicker",
        "publicLabel": "装饰引言",
        "description": "标题上方的衬线引言。"
      },
      {
        "key": "showLede",
        "label": "说明文案",
        "type": "toggle",
        "default": true,
        "desc": "右上角的说明段落。",
        "publicKey": "showLede",
        "publicLabel": "说明文案",
        "description": "右上角的说明段落。"
      },
      {
        "key": "showGhostMark",
        "label": "背景大字符",
        "type": "toggle",
        "default": true,
        "desc": "角落超大幽灵字符装饰。",
        "publicKey": "showGhostMark",
        "publicLabel": "背景大字符",
        "description": "角落超大幽灵字符装饰。"
      },
      {
        "key": "showScaffold",
        "label": "边框骨架",
        "type": "toggle",
        "default": true,
        "desc": "侧边竖排标签与四角括线。",
        "publicKey": "showScaffold",
        "publicLabel": "边框骨架",
        "description": "侧边竖排标签与四角括线。"
      },
      {
        "key": "showMeta",
        "label": "底部信息条",
        "type": "toggle",
        "default": true,
        "desc": "底部页脚信息与进度条。",
        "publicKey": "showMeta",
        "publicLabel": "底部信息条",
        "description": "底部页脚信息与进度条。"
      }
    ],
    "defaultProps": {
      "surface": "ink",
      "cohortCount": 5,
      "periodCount": 6,
      "showValues": true,
      "showRowHead": true,
      "showColHead": true,
      "showLegend": true,
      "emphasis": false,
      "emphasisRow": 0,
      "showKicker": true,
      "showLede": true,
      "showGhostMark": true,
      "showScaffold": true,
      "showMeta": true,
      "ghostMark": "▥",
      "railText": "Cohort — 留存",
      "navItems": [
        "留存"
      ],
      "navCurrent": 0,
      "ixNo": "43",
      "ixLabel": "Cohort",
      "lead": "Newer cohorts hold better.",
      "headingHtml": "越往后的客户，<span class=\"ign-ember-text\">留得越久</span>。",
      "lede": "每一行是一个月的新客队列，颜色越亮代表留存越高——引擎在让后面的队列站得更稳。",
      "legendLow": "低留存",
      "legendHigh": "高留存",
      "cohorts": [
        {
          "c": "1 月",
          "s": "1,240 新客",
          "vals": [
            100,
            82,
            71,
            64,
            58,
            54
          ]
        },
        {
          "c": "2 月",
          "s": "1,580 新客",
          "vals": [
            100,
            85,
            75,
            68,
            63,
            0
          ]
        },
        {
          "c": "3 月",
          "s": "1,910 新客",
          "vals": [
            100,
            88,
            80,
            74,
            0,
            0
          ]
        },
        {
          "c": "4 月",
          "s": "2,260 新客",
          "vals": [
            100,
            90,
            84,
            0,
            0,
            0
          ]
        },
        {
          "c": "5 月",
          "s": "2,640 新客",
          "vals": [
            100,
            92,
            0,
            0,
            0,
            0
          ]
        }
      ],
      "periods": [
        "第0周",
        "第1周",
        "第2周",
        "第3周",
        "第4周",
        "第5周"
      ],
      "metaLeft": "IGNIS — 燃点 · 月度群组周留存（%）",
      "metaMid": "留得住，才算赢"
    }
  },
  {
    "key": "theme11_page048",
    "themeKey": "theme11",
    "pageNumber": 48,
    "layout": "THEME11-048",
    "slot": "page48",
    "label": "优先级",
    "bgClass": "",
    "controls": [
      {
        "key": "surface",
        "label": "背景基调",
        "type": "select",
        "default": "paper",
        "options": [
          {
            "value": "ink",
            "label": "深色"
          },
          {
            "value": "paper",
            "label": "浅色"
          },
          {
            "value": "ember",
            "label": "暖橙"
          }
        ],
        "desc": "页面背景主题，用于在相邻页之间制造色彩跳跃。",
        "publicKey": "surface",
        "publicLabel": "背景基调",
        "description": "页面背景主题，用于在相邻页之间制造色彩跳跃。"
      },
      {
        "key": "bubbleCount",
        "label": "气泡数量",
        "type": "slider",
        "default": 6,
        "min": 3,
        "max": 6,
        "step": 1,
        "desc": "散点图中的气泡（举措）数量。",
        "publicKey": "bubbleCount",
        "publicLabel": "气泡数量",
        "description": "散点图中的气泡（举措）数量。"
      },
      {
        "key": "showAxes",
        "label": "坐标轴",
        "type": "toggle",
        "default": true,
        "desc": "X/Y 轴线与轴标题。",
        "publicKey": "showAxes",
        "publicLabel": "坐标轴",
        "description": "X/Y 轴线与轴标题。"
      },
      {
        "key": "showGrid",
        "label": "网格线",
        "type": "toggle",
        "default": true,
        "desc": "背景刻度网格。",
        "publicKey": "showGrid",
        "publicLabel": "网格线",
        "description": "背景刻度网格。"
      },
      {
        "key": "showLabels",
        "label": "气泡标签",
        "type": "toggle",
        "default": true,
        "desc": "每个气泡旁的举措名称。",
        "publicKey": "showLabels",
        "publicLabel": "气泡标签",
        "description": "每个气泡旁的举措名称。"
      },
      {
        "key": "showLegend",
        "label": "图例",
        "type": "toggle",
        "default": true,
        "desc": "左侧的气泡含义图例。",
        "publicKey": "showLegend",
        "publicLabel": "图例",
        "description": "左侧的气泡含义图例。"
      },
      {
        "key": "showSweetSpot",
        "label": "甜区高亮",
        "type": "toggle",
        "default": true,
        "desc": "右上角「高影响·低投入」甜区高亮。",
        "publicKey": "showSweetSpot",
        "publicLabel": "甜区高亮",
        "description": "右上角「高影响·低投入」甜区高亮。"
      },
      {
        "key": "emphasis",
        "label": "重点突出",
        "type": "toggle",
        "default": false,
        "desc": "开启后弱化非重点气泡，突出燃点主推举措。",
        "publicKey": "emphasis",
        "publicLabel": "重点突出",
        "description": "开启后弱化非重点气泡，突出燃点主推举措。"
      },
      {
        "key": "showKicker",
        "label": "装饰引言",
        "type": "toggle",
        "default": true,
        "desc": "标题上方的衬线引言。",
        "publicKey": "showKicker",
        "publicLabel": "装饰引言",
        "description": "标题上方的衬线引言。"
      },
      {
        "key": "showLede",
        "label": "说明文案",
        "type": "toggle",
        "default": true,
        "desc": "标题下方的说明段落。",
        "publicKey": "showLede",
        "publicLabel": "说明文案",
        "description": "标题下方的说明段落。"
      },
      {
        "key": "showGhostMark",
        "label": "背景大字符",
        "type": "toggle",
        "default": true,
        "desc": "角落超大幽灵字符装饰。",
        "publicKey": "showGhostMark",
        "publicLabel": "背景大字符",
        "description": "角落超大幽灵字符装饰。"
      },
      {
        "key": "showScaffold",
        "label": "边框骨架",
        "type": "toggle",
        "default": true,
        "desc": "侧边竖排标签与四角括线。",
        "publicKey": "showScaffold",
        "publicLabel": "边框骨架",
        "description": "侧边竖排标签与四角括线。"
      },
      {
        "key": "showMeta",
        "label": "底部信息条",
        "type": "toggle",
        "default": true,
        "desc": "底部页脚信息与进度条。",
        "publicKey": "showMeta",
        "publicLabel": "底部信息条",
        "description": "底部页脚信息与进度条。"
      }
    ],
    "defaultProps": {
      "surface": "paper",
      "bubbleCount": 6,
      "showAxes": true,
      "showGrid": true,
      "showLabels": true,
      "showLegend": true,
      "showSweetSpot": true,
      "emphasis": false,
      "showKicker": true,
      "showLede": true,
      "showGhostMark": true,
      "showScaffold": true,
      "showMeta": true,
      "ghostMark": "◌",
      "railText": "Impact — 优先级",
      "navItems": [
        "优先级"
      ],
      "navCurrent": 0,
      "ixNo": "44",
      "ixLabel": "Impact",
      "lead": "Where the leverage lives.",
      "headingHtml": "把力气，<br><span class=\"ign-ember-text\">花在右上角</span>。",
      "lede": "横轴是投入，纵轴是影响，气泡大小是覆盖面。我们只重押右上角——高影响、低投入、广覆盖。",
      "legendLit": "燃点主推举措",
      "legendBase": "常规备选",
      "legendSize": "气泡大小 = 覆盖面",
      "axisX": "投入 →",
      "axisY": "影响 →",
      "axisXLow": "低",
      "axisYLow": "低",
      "bubbles": [
        {
          "x": 22,
          "y": 78,
          "r": 46,
          "lit": true,
          "label": "内容引擎"
        },
        {
          "x": 38,
          "y": 62,
          "r": 34,
          "lit": true,
          "label": "转化优化"
        },
        {
          "x": 68,
          "y": 84,
          "r": 40,
          "lit": true,
          "label": "付费放大"
        },
        {
          "x": 30,
          "y": 34,
          "r": 22,
          "lit": false,
          "label": "社媒运营"
        },
        {
          "x": 74,
          "y": 40,
          "r": 28,
          "lit": false,
          "label": "线下活动"
        },
        {
          "x": 55,
          "y": 52,
          "r": 18,
          "lit": false,
          "label": "邮件触达"
        }
      ],
      "metaLeft": "IGNIS — 燃点 · 举措优先级（投入 × 影响 × 覆盖）",
      "metaMid": "少做，但做对"
    }
  },
  {
    "key": "theme11_page049",
    "themeKey": "theme11",
    "pageNumber": 49,
    "layout": "THEME11-049",
    "slot": "page49",
    "label": "路线",
    "bgClass": "",
    "controls": [
      {
        "key": "surface",
        "label": "背景基调",
        "type": "select",
        "default": "ink",
        "options": [
          {
            "value": "ink",
            "label": "深色"
          },
          {
            "value": "paper",
            "label": "浅色"
          },
          {
            "value": "ember",
            "label": "暖橙"
          }
        ],
        "desc": "页面背景主题，用于在相邻页之间制造色彩跳跃。",
        "publicKey": "surface",
        "publicLabel": "背景基调",
        "description": "页面背景主题，用于在相邻页之间制造色彩跳跃。"
      },
      {
        "key": "milestoneCount",
        "label": "里程碑数量",
        "type": "slider",
        "default": 5,
        "min": 3,
        "max": 5,
        "step": 1,
        "desc": "路线图上的阶段节点数量。",
        "publicKey": "milestoneCount",
        "publicLabel": "里程碑数量",
        "description": "路线图上的阶段节点数量。"
      },
      {
        "key": "currentIndex",
        "label": "当前阶段",
        "type": "slider",
        "default": 2,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "「当前所在」节点序号（从 0 起）；之前为已完成，之后为待办。",
        "publicKey": "currentIndex",
        "publicLabel": "当前阶段",
        "description": "「当前所在」节点序号（从 0 起）；之前为已完成，之后为待办。"
      },
      {
        "key": "showDesc",
        "label": "节点描述",
        "type": "toggle",
        "default": true,
        "desc": "每个里程碑下方的描述句。",
        "publicKey": "showDesc",
        "publicLabel": "节点描述",
        "description": "每个里程碑下方的描述句。"
      },
      {
        "key": "showPhaseLabel",
        "label": "阶段标签",
        "type": "toggle",
        "default": true,
        "desc": "每个节点的 Phase 标签。",
        "publicKey": "showPhaseLabel",
        "publicLabel": "阶段标签",
        "description": "每个节点的 Phase 标签。"
      },
      {
        "key": "showProgress",
        "label": "进度填充",
        "type": "toggle",
        "default": true,
        "desc": "主轴上的暖橙进度填充。",
        "publicKey": "showProgress",
        "publicLabel": "进度填充",
        "description": "主轴上的暖橙进度填充。"
      },
      {
        "key": "showKicker",
        "label": "装饰引言",
        "type": "toggle",
        "default": true,
        "desc": "标题上方的衬线引言。",
        "publicKey": "showKicker",
        "publicLabel": "装饰引言",
        "description": "标题上方的衬线引言。"
      },
      {
        "key": "showLede",
        "label": "说明文案",
        "type": "toggle",
        "default": true,
        "desc": "右上角的说明段落。",
        "publicKey": "showLede",
        "publicLabel": "说明文案",
        "description": "右上角的说明段落。"
      },
      {
        "key": "showGhostMark",
        "label": "背景大字符",
        "type": "toggle",
        "default": true,
        "desc": "角落超大幽灵字符装饰。",
        "publicKey": "showGhostMark",
        "publicLabel": "背景大字符",
        "description": "角落超大幽灵字符装饰。"
      },
      {
        "key": "showScaffold",
        "label": "边框骨架",
        "type": "toggle",
        "default": true,
        "desc": "侧边竖排标签与四角括线。",
        "publicKey": "showScaffold",
        "publicLabel": "边框骨架",
        "description": "侧边竖排标签与四角括线。"
      },
      {
        "key": "showMeta",
        "label": "底部信息条",
        "type": "toggle",
        "default": true,
        "desc": "底部页脚信息与进度条。",
        "publicKey": "showMeta",
        "publicLabel": "底部信息条",
        "description": "底部页脚信息与进度条。"
      }
    ],
    "defaultProps": {
      "surface": "ink",
      "milestoneCount": 5,
      "currentIndex": 2,
      "showDesc": true,
      "showPhaseLabel": true,
      "showProgress": true,
      "showKicker": true,
      "showLede": true,
      "showGhostMark": true,
      "showScaffold": true,
      "showMeta": true,
      "ghostMark": "→",
      "railText": "Roadmap — 路线",
      "navItems": [
        "路线"
      ],
      "navCurrent": 0,
      "ixNo": "45",
      "ixLabel": "Roadmap",
      "lead": "You are here.",
      "headingHtml": "从点火到自转，<span class=\"ign-ember-text\">五个阶段</span>。",
      "lede": "不是一锤子买卖，而是一条有节奏的路线——你现在在第三阶段，引擎刚刚点火。",
      "miles": [
        {
          "ph": "Phase 0",
          "tt": "诊断与对齐",
          "ds": "量化现状，锁定北极星指标。"
        },
        {
          "ph": "Phase 1",
          "tt": "基建与埋点",
          "ds": "搭好数据与内容地基。"
        },
        {
          "ph": "Phase 2",
          "tt": "增长引擎点火",
          "ds": "多渠道同时跑起来。"
        },
        {
          "ph": "Phase 3",
          "tt": "复利放大",
          "ds": "把赢的部分加倍投入。"
        },
        {
          "ph": "Phase 4",
          "tt": "自运转体系",
          "ds": "团队接手，引擎自转。"
        }
      ],
      "metaLeft": "IGNIS — 燃点 · 合作路线图",
      "metaMid": "一步一个台阶"
    }
  },
  {
    "key": "theme11_page050",
    "themeKey": "theme11",
    "pageNumber": 50,
    "layout": "THEME11-050",
    "slot": "page50",
    "label": "覆盖",
    "bgClass": "",
    "controls": [
      {
        "key": "surface",
        "label": "背景基调",
        "type": "select",
        "default": "ink",
        "options": [
          {
            "value": "ink",
            "label": "深色"
          },
          {
            "value": "paper",
            "label": "浅色"
          },
          {
            "value": "ember",
            "label": "暖橙"
          }
        ],
        "desc": "页面背景主题，用于在相邻页之间制造色彩跳跃。",
        "publicKey": "surface",
        "publicLabel": "背景基调",
        "description": "页面背景主题，用于在相邻页之间制造色彩跳跃。"
      },
      {
        "key": "regionCount",
        "label": "区域数量",
        "type": "slider",
        "default": 4,
        "min": 2,
        "max": 5,
        "step": 1,
        "desc": "展示的市场区域数量（同时影响地图上的光点）。",
        "publicKey": "regionCount",
        "publicLabel": "区域数量",
        "description": "展示的市场区域数量（同时影响地图上的光点）。"
      },
      {
        "key": "showPins",
        "label": "市场光点",
        "type": "toggle",
        "default": true,
        "desc": "地图上的发光市场光点。",
        "publicKey": "showPins",
        "publicLabel": "市场光点",
        "description": "地图上的发光市场光点。"
      },
      {
        "key": "showRegionList",
        "label": "区域清单",
        "type": "toggle",
        "default": true,
        "desc": "左侧的区域占比清单。",
        "publicKey": "showRegionList",
        "publicLabel": "区域清单",
        "description": "左侧的区域占比清单。"
      },
      {
        "key": "showValues",
        "label": "占比数值",
        "type": "toggle",
        "default": true,
        "desc": "区域清单右侧的占比数值。",
        "publicKey": "showValueLabels",
        "publicLabel": "占比数值",
        "description": "区域清单右侧的占比数值。"
      },
      {
        "key": "showInset",
        "label": "图片插角",
        "type": "toggle",
        "default": false,
        "desc": "地图右下角的图片插角（自适应比例）。",
        "publicKey": "showInset",
        "publicLabel": "图片插角",
        "description": "地图右下角的图片插角（自适应比例）。"
      },
      {
        "key": "insetImage",
        "label": "插角图片",
        "type": "image",
        "default": "",
        "desc": "上传插角图片，按原图比例自适应。",
        "publicKey": "insetImage",
        "publicLabel": "插角图片",
        "description": "上传插角图片，按原图比例自适应。"
      },
      {
        "key": "showKicker",
        "label": "装饰引言",
        "type": "toggle",
        "default": true,
        "desc": "标题上方的衬线引言。",
        "publicKey": "showKicker",
        "publicLabel": "装饰引言",
        "description": "标题上方的衬线引言。"
      },
      {
        "key": "showLede",
        "label": "说明文案",
        "type": "toggle",
        "default": true,
        "desc": "标题下方的说明段落。",
        "publicKey": "showLede",
        "publicLabel": "说明文案",
        "description": "标题下方的说明段落。"
      },
      {
        "key": "showGhostMark",
        "label": "背景大字符",
        "type": "toggle",
        "default": true,
        "desc": "角落超大幽灵字符装饰。",
        "publicKey": "showGhostMark",
        "publicLabel": "背景大字符",
        "description": "角落超大幽灵字符装饰。"
      },
      {
        "key": "showScaffold",
        "label": "边框骨架",
        "type": "toggle",
        "default": true,
        "desc": "侧边竖排标签与四角括线。",
        "publicKey": "showScaffold",
        "publicLabel": "边框骨架",
        "description": "侧边竖排标签与四角括线。"
      },
      {
        "key": "showMeta",
        "label": "底部信息条",
        "type": "toggle",
        "default": true,
        "desc": "底部页脚信息与进度条。",
        "publicKey": "showMeta",
        "publicLabel": "底部信息条",
        "description": "底部页脚信息与进度条。"
      }
    ],
    "defaultProps": {
      "surface": "ink",
      "regionCount": 4,
      "showPins": true,
      "showRegionList": true,
      "showValues": true,
      "showInset": false,
      "insetImage": "",
      "showKicker": true,
      "showLede": true,
      "showGhostMark": true,
      "showScaffold": true,
      "showMeta": true,
      "ghostMark": "◍",
      "railText": "Coverage — 覆盖",
      "navItems": [
        "覆盖"
      ],
      "navCurrent": 0,
      "ixNo": "46",
      "ixLabel": "Coverage",
      "lead": "Wherever your buyers are.",
      "headingHtml": "增长不挑<br><span class=\"ign-ember-text\">地理边界</span>。",
      "lede": "同一套引擎，已经在这些市场点亮——区域不同，复利的逻辑一样成立。",
      "insetPlaceholder": "现场 · 16:10",
      "regions": [
        {
          "nm": "华东",
          "vl": "38%",
          "pins": [
            [
              0.62,
              0.46,
              30
            ],
            [
              0.66,
              0.52,
              18
            ]
          ]
        },
        {
          "nm": "华南",
          "vl": "24%",
          "pins": [
            [
              0.58,
              0.66,
              24
            ]
          ]
        },
        {
          "nm": "华北",
          "vl": "21%",
          "pins": [
            [
              0.56,
              0.3,
              22
            ]
          ]
        },
        {
          "nm": "西部",
          "vl": "11%",
          "pins": [
            [
              0.34,
              0.44,
              16
            ]
          ]
        },
        {
          "nm": "海外",
          "vl": "6%",
          "pins": [
            [
              0.16,
              0.36,
              13
            ],
            [
              0.82,
              0.4,
              13
            ]
          ]
        }
      ],
      "metaLeft": "IGNIS — 燃点 · 市场覆盖分布",
      "metaMid": "边界之外，依然成立"
    }
  },
  {
    "key": "theme11_page051",
    "themeKey": "theme11",
    "pageNumber": 51,
    "layout": "THEME11-051",
    "slot": "page51",
    "label": "对比",
    "bgClass": "",
    "controls": [
      {
        "key": "surface",
        "label": "背景基调",
        "type": "select",
        "default": "paper",
        "options": [
          {
            "value": "ink",
            "label": "深色"
          },
          {
            "value": "paper",
            "label": "浅色"
          },
          {
            "value": "ember",
            "label": "暖橙"
          }
        ],
        "desc": "页面背景主题，用于在相邻页之间制造色彩跳跃。",
        "publicKey": "surface",
        "publicLabel": "背景基调",
        "description": "页面背景主题，用于在相邻页之间制造色彩跳跃。"
      },
      {
        "key": "rowCount",
        "label": "对比项数",
        "type": "slider",
        "default": 4,
        "min": 3,
        "max": 5,
        "step": 1,
        "desc": "对比清单的标准行数。",
        "publicKey": "rowCount",
        "publicLabel": "对比项数",
        "description": "对比清单的标准行数。"
      },
      {
        "key": "showColHeads",
        "label": "列表头",
        "type": "toggle",
        "default": true,
        "desc": "顶部「燃点 / 传统代理」列头。",
        "publicKey": "showColHeads",
        "publicLabel": "列表头",
        "description": "顶部「燃点 / 传统代理」列头。"
      },
      {
        "key": "showNotes",
        "label": "说明文案",
        "type": "toggle",
        "default": true,
        "desc": "每个对勾旁的简短说明。",
        "publicKey": "showNotes",
        "publicLabel": "说明文案",
        "description": "每个对勾旁的简短说明。"
      },
      {
        "key": "emphasis",
        "label": "重点突出",
        "type": "toggle",
        "default": false,
        "desc": "开启后高亮某一对比项，其余弱化。",
        "publicKey": "emphasis",
        "publicLabel": "重点突出",
        "description": "开启后高亮某一对比项，其余弱化。"
      },
      {
        "key": "emphasisIndex",
        "label": "重点序号",
        "type": "slider",
        "default": 0,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "需要高亮的对比项序号（从 0 起）。",
        "publicKey": "emphasisIndex",
        "publicLabel": "重点序号",
        "description": "需要高亮的对比项序号（从 0 起）。"
      },
      {
        "key": "showKicker",
        "label": "装饰引言",
        "type": "toggle",
        "default": true,
        "desc": "标题上方的衬线引言。",
        "publicKey": "showKicker",
        "publicLabel": "装饰引言",
        "description": "标题上方的衬线引言。"
      },
      {
        "key": "showLede",
        "label": "说明文案",
        "type": "toggle",
        "default": true,
        "desc": "右上角的说明段落。",
        "publicKey": "showLede",
        "publicLabel": "说明文案",
        "description": "右上角的说明段落。"
      },
      {
        "key": "showGhostMark",
        "label": "背景大字符",
        "type": "toggle",
        "default": true,
        "desc": "角落超大幽灵字符装饰。",
        "publicKey": "showGhostMark",
        "publicLabel": "背景大字符",
        "description": "角落超大幽灵字符装饰。"
      },
      {
        "key": "showScaffold",
        "label": "边框骨架",
        "type": "toggle",
        "default": true,
        "desc": "侧边竖排标签与四角括线。",
        "publicKey": "showScaffold",
        "publicLabel": "边框骨架",
        "description": "侧边竖排标签与四角括线。"
      },
      {
        "key": "showMeta",
        "label": "底部信息条",
        "type": "toggle",
        "default": true,
        "desc": "底部页脚信息与进度条。",
        "publicKey": "showMeta",
        "publicLabel": "底部信息条",
        "description": "底部页脚信息与进度条。"
      }
    ],
    "defaultProps": {
      "surface": "paper",
      "rowCount": 4,
      "showColHeads": true,
      "showNotes": true,
      "emphasis": false,
      "emphasisIndex": 0,
      "showKicker": true,
      "showLede": true,
      "showGhostMark": true,
      "showScaffold": true,
      "showMeta": true,
      "ghostMark": "✓",
      "railText": "Versus — 对比",
      "navItems": [
        "对比"
      ],
      "navCurrent": 0,
      "ixNo": "47",
      "ixLabel": "Versus",
      "lead": "Same brief, different model.",
      "headingHtml": "同样的活，<span class=\"ign-ember-text\">不一样的接法</span>。",
      "lede": "把我们和传统代理摆在一张表里——你最在意的那几项，差别一眼就看得出。",
      "critHead": "对比维度",
      "critHeadEn": "Criteria",
      "usHead": "燃点",
      "usHeadEn": "IGNIS",
      "themHead": "传统代理",
      "themHeadEn": "Legacy agency",
      "rows": [
        {
          "crit": "按结果计费",
          "us": [
            true,
            "季度结算，不满意退款"
          ],
          "them": [
            false,
            "预付坑位，先收钱"
          ]
        },
        {
          "crit": "全链路一体",
          "us": [
            true,
            "策略到工程一个团队"
          ],
          "them": [
            false,
            "环节割裂，反复交接"
          ]
        },
        {
          "crit": "数据可对账",
          "us": [
            true,
            "埋点透明，随时可查"
          ],
          "them": [
            false,
            "报表美化，归因模糊"
          ]
        },
        {
          "crit": "资产可沉淀",
          "us": [
            true,
            "停投后仍持续带量"
          ],
          "them": [
            false,
            "停投即归零"
          ]
        },
        {
          "crit": "响应速度",
          "us": [
            true,
            "周级迭代"
          ],
          "them": [
            false,
            "月级排期"
          ]
        }
      ],
      "yesMark": "✓",
      "noMark": "✕",
      "metaLeft": "IGNIS — 燃点 · 与传统代理对比",
      "metaMid": "差别，写在表里"
    }
  },
  {
    "key": "theme11_page052",
    "themeKey": "theme11",
    "pageNumber": 52,
    "layout": "THEME11-052",
    "slot": "page52",
    "label": "证言",
    "bgClass": "",
    "controls": [
      {
        "key": "surface",
        "label": "背景基调",
        "type": "select",
        "default": "ink",
        "options": [
          {
            "value": "ink",
            "label": "深色"
          },
          {
            "value": "paper",
            "label": "浅色"
          },
          {
            "value": "ember",
            "label": "暖橙"
          }
        ],
        "desc": "页面背景主题，用于在相邻页之间制造色彩跳跃。",
        "publicKey": "surface",
        "publicLabel": "背景基调",
        "description": "页面背景主题，用于在相邻页之间制造色彩跳跃。"
      },
      {
        "key": "quoteCount",
        "label": "证言数量",
        "type": "slider",
        "default": 4,
        "min": 2,
        "max": 5,
        "step": 1,
        "desc": "展示的客户证言数量（含主推）。",
        "publicKey": "quoteCount",
        "publicLabel": "证言数量",
        "description": "展示的客户证言数量（含主推）。"
      },
      {
        "key": "columns",
        "label": "列表列数",
        "type": "slider",
        "default": 1,
        "min": 1,
        "max": 2,
        "step": 1,
        "desc": "右侧次要证言的排布列数；证言较多时可用 2 列。",
        "publicKey": "columns",
        "publicLabel": "列表列数",
        "description": "右侧次要证言的排布列数；证言较多时可用 2 列。"
      },
      {
        "key": "showLeadQuote",
        "label": "主推证言",
        "type": "toggle",
        "default": true,
        "desc": "首条证言作为左侧大号引述锚点；关闭则全部并入列表。",
        "publicKey": "showLeadQuote",
        "publicLabel": "主推证言",
        "description": "首条证言作为左侧大号引述锚点；关闭则全部并入列表。"
      },
      {
        "key": "showBylines",
        "label": "署名",
        "type": "toggle",
        "default": true,
        "desc": "每条证言下方的姓名与职务。",
        "publicKey": "showBylines",
        "publicLabel": "署名",
        "description": "每条证言下方的姓名与职务。"
      },
      {
        "key": "showStat",
        "label": "信任数据",
        "type": "toggle",
        "default": true,
        "desc": "右上角的满意度大数字。",
        "publicKey": "showStat",
        "publicLabel": "信任数据",
        "description": "右上角的满意度大数字。"
      },
      {
        "key": "showKicker",
        "label": "装饰引言",
        "type": "toggle",
        "default": true,
        "desc": "标题上方的衬线引言。",
        "publicKey": "showKicker",
        "publicLabel": "装饰引言",
        "description": "标题上方的衬线引言。"
      },
      {
        "key": "showGhostMark",
        "label": "背景大字符",
        "type": "toggle",
        "default": true,
        "desc": "角落超大幽灵字符装饰。",
        "publicKey": "showGhostMark",
        "publicLabel": "背景大字符",
        "description": "角落超大幽灵字符装饰。"
      },
      {
        "key": "showScaffold",
        "label": "边框骨架",
        "type": "toggle",
        "default": true,
        "desc": "侧边竖排标签与四角括线。",
        "publicKey": "showScaffold",
        "publicLabel": "边框骨架",
        "description": "侧边竖排标签与四角括线。"
      },
      {
        "key": "showMeta",
        "label": "底部信息条",
        "type": "toggle",
        "default": true,
        "desc": "底部页脚信息与进度条。",
        "publicKey": "showMeta",
        "publicLabel": "底部信息条",
        "description": "底部页脚信息与进度条。"
      }
    ],
    "defaultProps": {
      "surface": "ink",
      "quoteCount": 4,
      "columns": 1,
      "showLeadQuote": true,
      "showBylines": true,
      "showStat": true,
      "showKicker": true,
      "showGhostMark": true,
      "showScaffold": true,
      "showMeta": true,
      "ghostMark": "“",
      "railText": "Voices — 证言",
      "navItems": [
        "证言"
      ],
      "navCurrent": 0,
      "ixNo": "48",
      "ixLabel": "Voices",
      "lead": "In their words.",
      "headingHtml": "不用我们说，<span class=\"ign-ember-text\">听他们说</span>。",
      "statValue": "4.9/5",
      "statLabel": "客户满意度 · 120+ 合作品牌",
      "leadRating": "5.0 · 长期续约",
      "quotes": [
        {
          "q": "停掉投放那个月，自然流量反而<span class=\"hl\">还在涨</span>。这才是我们要的增长。",
          "nm": "周岚",
          "rl": "VOLT · CMO",
          "mono": "V"
        },
        {
          "q": "第一次有团队把转化率讲清楚，而不是甩给我一堆漂亮图表。",
          "nm": "李航",
          "rl": "ARCO · 创始人",
          "mono": "A"
        },
        {
          "q": "14 天就出了首批信号，季度复盘直接超了 KPI。",
          "nm": "陈思",
          "rl": "NIMBUS · 增长负责人",
          "mono": "N"
        },
        {
          "q": "一个团队搞定策略到落地，再没有来回扯皮。",
          "nm": "吴桐",
          "rl": "QUILL · COO",
          "mono": "Q"
        },
        {
          "q": "续了第三年——结果说话，比什么承诺都管用。",
          "nm": "何宇",
          "rl": "FERRO · CEO",
          "mono": "F"
        }
      ],
      "metaLeft": "IGNIS — 燃点 · 客户证言",
      "metaMid": "结果，会自己说话"
    }
  },
  {
    "key": "theme11_page053",
    "themeKey": "theme11",
    "pageNumber": 53,
    "layout": "THEME11-053",
    "slot": "page53",
    "label": "飞轮",
    "bgClass": "",
    "controls": [
      {
        "key": "surface",
        "label": "背景基调",
        "type": "select",
        "default": "ember",
        "options": [
          {
            "value": "ink",
            "label": "深色"
          },
          {
            "value": "paper",
            "label": "浅色"
          },
          {
            "value": "ember",
            "label": "暖橙"
          }
        ],
        "desc": "页面背景主题，用于在相邻页之间制造色彩跳跃。",
        "publicKey": "surface",
        "publicLabel": "背景基调",
        "description": "页面背景主题，用于在相邻页之间制造色彩跳跃。"
      },
      {
        "key": "stageCount",
        "label": "环节数量",
        "type": "slider",
        "default": 4,
        "min": 3,
        "max": 5,
        "step": 1,
        "desc": "飞轮上的环节数量。",
        "publicKey": "stageCount",
        "publicLabel": "环节数量",
        "description": "飞轮上的环节数量。"
      },
      {
        "key": "showHub",
        "label": "中心标签",
        "type": "toggle",
        "default": true,
        "desc": "飞轮中心的核心标签。",
        "publicKey": "showHub",
        "publicLabel": "中心标签",
        "description": "飞轮中心的核心标签。"
      },
      {
        "key": "showList",
        "label": "环节清单",
        "type": "toggle",
        "default": true,
        "desc": "左侧的环节文字清单。",
        "publicKey": "showList",
        "publicLabel": "环节清单",
        "description": "左侧的环节文字清单。"
      },
      {
        "key": "showArrows",
        "label": "循环箭头",
        "type": "toggle",
        "default": true,
        "desc": "环节之间的循环方向箭头。",
        "publicKey": "showArrows",
        "publicLabel": "循环箭头",
        "description": "环节之间的循环方向箭头。"
      },
      {
        "key": "emphasis",
        "label": "重点突出",
        "type": "toggle",
        "default": false,
        "desc": "开启后突出某一环节，其余弱化。",
        "publicKey": "emphasis",
        "publicLabel": "重点突出",
        "description": "开启后突出某一环节，其余弱化。"
      },
      {
        "key": "emphasisIndex",
        "label": "重点序号",
        "type": "slider",
        "default": 0,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "需要突出的环节序号（从 0 起）。",
        "publicKey": "emphasisIndex",
        "publicLabel": "重点序号",
        "description": "需要突出的环节序号（从 0 起）。"
      },
      {
        "key": "showKicker",
        "label": "装饰引言",
        "type": "toggle",
        "default": true,
        "desc": "标题上方的衬线引言。",
        "publicKey": "showKicker",
        "publicLabel": "装饰引言",
        "description": "标题上方的衬线引言。"
      },
      {
        "key": "showLede",
        "label": "说明文案",
        "type": "toggle",
        "default": true,
        "desc": "标题下方的说明段落。",
        "publicKey": "showLede",
        "publicLabel": "说明文案",
        "description": "标题下方的说明段落。"
      },
      {
        "key": "showGhostMark",
        "label": "背景大字符",
        "type": "toggle",
        "default": true,
        "desc": "角落超大幽灵字符装饰。",
        "publicKey": "showGhostMark",
        "publicLabel": "背景大字符",
        "description": "角落超大幽灵字符装饰。"
      },
      {
        "key": "showScaffold",
        "label": "边框骨架",
        "type": "toggle",
        "default": true,
        "desc": "侧边竖排标签与四角括线。",
        "publicKey": "showScaffold",
        "publicLabel": "边框骨架",
        "description": "侧边竖排标签与四角括线。"
      },
      {
        "key": "showMeta",
        "label": "底部信息条",
        "type": "toggle",
        "default": true,
        "desc": "底部页脚信息与进度条。",
        "publicKey": "showMeta",
        "publicLabel": "底部信息条",
        "description": "底部页脚信息与进度条。"
      }
    ],
    "defaultProps": {
      "surface": "ember",
      "stageCount": 4,
      "showHub": true,
      "showList": true,
      "showArrows": true,
      "emphasis": false,
      "emphasisIndex": 0,
      "showKicker": true,
      "showLede": true,
      "showGhostMark": true,
      "showScaffold": true,
      "showMeta": true,
      "ghostMark": "↻",
      "railText": "Flywheel — 飞轮",
      "navItems": [
        "飞轮"
      ],
      "navCurrent": 0,
      "ixNo": "49",
      "ixLabel": "Flywheel",
      "lead": "It keeps spinning.",
      "headingHtml": "转起来之后，<br><span class=\"ign-ember-text\">就停不下来</span>。",
      "lede": "每一环都给下一环加速：吸引带来转化，转化沉淀资产，资产放大吸引——这就是飞轮。",
      "stages": [
        {
          "zh": "吸引",
          "en": "Attract"
        },
        {
          "zh": "转化",
          "en": "Convert"
        },
        {
          "zh": "沉淀",
          "en": "Retain"
        },
        {
          "zh": "放大",
          "en": "Amplify"
        },
        {
          "zh": "复利",
          "en": "Compound"
        }
      ],
      "hubZh": "复利",
      "hubEn": "COMPOUND",
      "metaLeft": "IGNIS — 燃点 · 增长飞轮",
      "metaMid": "越转越快"
    }
  },
  {
    "key": "theme11_page054",
    "themeKey": "theme11",
    "pageNumber": 54,
    "layout": "THEME11-054",
    "slot": "page54",
    "label": "趋势",
    "bgClass": "",
    "controls": [
      {
        "key": "surface",
        "label": "背景基调",
        "type": "select",
        "default": "ink",
        "options": [
          {
            "value": "ink",
            "label": "深色"
          },
          {
            "value": "paper",
            "label": "浅色"
          },
          {
            "value": "ember",
            "label": "暖橙"
          }
        ],
        "desc": "页面背景主题，用于在相邻页之间制造色彩跳跃。",
        "publicKey": "surface",
        "publicLabel": "背景基调",
        "description": "页面背景主题，用于在相邻页之间制造色彩跳跃。"
      },
      {
        "key": "chartVariant",
        "label": "图表类型",
        "type": "select",
        "default": "area",
        "options": [
          {
            "value": "area",
            "label": "面积折线"
          },
          {
            "value": "lines",
            "label": "纯折线"
          }
        ],
        "desc": "主序列是否带面积填充。",
        "publicKey": "chartVariant",
        "publicLabel": "图表类型",
        "description": "主序列是否带面积填充。"
      },
      {
        "key": "seriesCount",
        "label": "序列数量",
        "type": "slider",
        "default": 3,
        "min": 2,
        "max": 3,
        "step": 1,
        "desc": "参与对比的趋势序列数量。",
        "publicKey": "seriesCount",
        "publicLabel": "序列数量",
        "description": "参与对比的趋势序列数量。"
      },
      {
        "key": "emphasis",
        "label": "重点突出",
        "type": "toggle",
        "default": false,
        "desc": "开启后突出某一序列，其余弱化。",
        "publicKey": "emphasis",
        "publicLabel": "重点突出",
        "description": "开启后突出某一序列，其余弱化。"
      },
      {
        "key": "emphasisIndex",
        "label": "重点序号",
        "type": "slider",
        "default": 0,
        "min": 0,
        "max": 2,
        "step": 1,
        "desc": "需要突出的序列序号（从 0 起）。",
        "publicKey": "emphasisIndex",
        "publicLabel": "重点序号",
        "description": "需要突出的序列序号（从 0 起）。"
      },
      {
        "key": "showGrid",
        "label": "网格线",
        "type": "toggle",
        "default": true,
        "desc": "图表的横向参考网格线。",
        "publicKey": "showGrid",
        "publicLabel": "网格线",
        "description": "图表的横向参考网格线。"
      },
      {
        "key": "showEndDots",
        "label": "终点标记",
        "type": "toggle",
        "default": true,
        "desc": "每条曲线末端的圆点标记。",
        "publicKey": "showEndDots",
        "publicLabel": "终点标记",
        "description": "每条曲线末端的圆点标记。"
      },
      {
        "key": "showKeys",
        "label": "序列图例",
        "type": "toggle",
        "default": true,
        "desc": "左侧带终值的序列图例清单。",
        "publicKey": "showKeys",
        "publicLabel": "序列图例",
        "description": "左侧带终值的序列图例清单。"
      },
      {
        "key": "showKicker",
        "label": "装饰副标题",
        "type": "toggle",
        "default": true,
        "desc": "主标题上方的装饰标签。",
        "publicKey": "showKicker",
        "publicLabel": "装饰副标题",
        "description": "主标题上方的装饰标签。"
      },
      {
        "key": "showLede",
        "label": "说明文案",
        "type": "toggle",
        "default": true,
        "desc": "主标题下方的说明段落。",
        "publicKey": "showLede",
        "publicLabel": "说明文案",
        "description": "主标题下方的说明段落。"
      },
      {
        "key": "showGhostMark",
        "label": "背景大字符",
        "type": "toggle",
        "default": true,
        "desc": "角落超大幽灵字符装饰。",
        "publicKey": "showGhostMark",
        "publicLabel": "背景大字符",
        "description": "角落超大幽灵字符装饰。"
      },
      {
        "key": "showScaffold",
        "label": "边框骨架",
        "type": "toggle",
        "default": true,
        "desc": "侧边竖排标签与四角括线。",
        "publicKey": "showScaffold",
        "publicLabel": "边框骨架",
        "description": "侧边竖排标签与四角括线。"
      },
      {
        "key": "showMeta",
        "label": "底部信息条",
        "type": "toggle",
        "default": true,
        "desc": "底部页脚信息与进度条。",
        "publicKey": "showMeta",
        "publicLabel": "底部信息条",
        "description": "底部页脚信息与进度条。"
      }
    ],
    "defaultProps": {
      "surface": "ink",
      "chartVariant": "area",
      "seriesCount": 3,
      "emphasis": false,
      "emphasisIndex": 0,
      "showGrid": true,
      "showEndDots": true,
      "showKeys": true,
      "showKicker": true,
      "showLede": true,
      "showGhostMark": true,
      "showScaffold": true,
      "showMeta": true,
      "ghostMark": "↗",
      "railText": "Trend — 趋势",
      "navItems": [
        "趋势"
      ],
      "navCurrent": 0,
      "ixNo": "50",
      "ixLabel": "Trend",
      "eyebrowNo": "趋势",
      "eyebrowEn": "12-month index",
      "headingHtml": "同一条起跰线，<br><span class=\"ign-ember-text\">跑出三种结局</span>。",
      "lede": "把基期归一为 100，看 12 个月后的走向——干预与否，差的是一整条曲线。",
      "cardTitle": "增长指数 · 基期 = 100",
      "cardNote": "越高越好",
      "series": [
        {
          "nm": "接入燃点",
          "en": "IGNIS",
          "kind": "lead",
          "data": [
            12,
            17,
            22,
            30,
            39,
            47,
            56,
            67,
            76,
            85,
            92,
            99
          ]
        },
        {
          "nm": "行业均值",
          "en": "Industry",
          "kind": "mid",
          "data": [
            12,
            14,
            16,
            17,
            19,
            20,
            22,
            23,
            25,
            26,
            27,
            29
          ]
        },
        {
          "nm": "自然增长",
          "en": "No action",
          "kind": "low",
          "data": [
            12,
            12,
            13,
            12,
            14,
            13,
            14,
            13,
            15,
            14,
            15,
            16
          ]
        }
      ],
      "xLabels": [
        "1月",
        "3月",
        "6月",
        "9月",
        "12月"
      ],
      "metaLeft": "IGNIS — 燃点 · 跨 2,400+ 品牌中位",
      "metaMid": "差距不是一天拉开的"
    }
  },
  {
    "key": "theme11_page055",
    "themeKey": "theme11",
    "pageNumber": 55,
    "layout": "THEME11-055",
    "slot": "page55",
    "label": "主张",
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
        "key": "surface",
        "label": "背景基调",
        "type": "select",
        "default": "ember",
        "options": [
          {
            "value": "ink",
            "label": "深色"
          },
          {
            "value": "paper",
            "label": "浅色"
          },
          {
            "value": "ember",
            "label": "暖橙"
          }
        ],
        "desc": "页面背景主题，用于在相邻页之间制造色彩跳跃。",
        "publicKey": "surface",
        "publicLabel": "背景基调",
        "description": "页面背景主题，用于在相邻页之间制造色彩跳跃。"
      },
      {
        "key": "showScrim",
        "label": "压暗叠层",
        "type": "toggle",
        "default": true,
        "desc": "图片上的渐变压暗层，保证文字可读。",
        "publicKey": "showScrim",
        "publicLabel": "压暗叠层",
        "description": "图片上的渐变压暗层，保证文字可读。"
      },
      {
        "key": "showTag",
        "label": "顶部标签",
        "type": "toggle",
        "default": true,
        "desc": "左上角的装饰标签。",
        "publicKey": "showTag",
        "publicLabel": "顶部标签",
        "description": "左上角的装饰标签。"
      },
      {
        "key": "showSub",
        "label": "副标题",
        "type": "toggle",
        "default": true,
        "desc": "主标题下方的衬线副标题。",
        "publicKey": "showSub",
        "publicLabel": "副标题",
        "description": "主标题下方的衬线副标题。"
      },
      {
        "key": "showStrip",
        "label": "指标条",
        "type": "toggle",
        "default": true,
        "desc": "底部的关键指标条。",
        "publicKey": "showStrip",
        "publicLabel": "指标条",
        "description": "底部的关键指标条。"
      },
      {
        "key": "statCount",
        "label": "指标数量",
        "type": "slider",
        "default": 3,
        "min": 2,
        "max": 3,
        "step": 1,
        "desc": "指标条中的指标数量。",
        "publicKey": "statCount",
        "publicLabel": "指标数量",
        "description": "指标条中的指标数量。"
      },
      {
        "key": "showGhostMark",
        "label": "背景大字符",
        "type": "toggle",
        "default": false,
        "desc": "角落超大幽灵字符装饰（满铺图上默认关闭）。",
        "publicKey": "showGhostMark",
        "publicLabel": "背景大字符",
        "description": "角落超大幽灵字符装饰（满铺图上默认关闭）。"
      },
      {
        "key": "showScaffold",
        "label": "边框骨架",
        "type": "toggle",
        "default": true,
        "desc": "侧边竖排标签与四角括线。",
        "publicKey": "showScaffold",
        "publicLabel": "边框骨架",
        "description": "侧边竖排标签与四角括线。"
      },
      {
        "key": "showMeta",
        "label": "底部信息条",
        "type": "toggle",
        "default": true,
        "desc": "底部页脚信息与进度条。",
        "publicKey": "showMeta",
        "publicLabel": "底部信息条",
        "description": "底部页脚信息与进度条。"
      }
    ],
    "defaultProps": {
      "surface": "ember",
      "images": [],
      "backgroundMode": "unicorn",
      "unicornScene": "goey",
      "showScrim": true,
      "showTag": true,
      "showSub": true,
      "showStrip": true,
      "statCount": 3,
      "showGhostMark": false,
      "showScaffold": true,
      "showMeta": true,
      "ghostMark": "IGNIS",
      "railText": "Vision — 主张",
      "ixNo": "51",
      "ixLabel": "Vision",
      "imagePlaceholder": "满铺主图 · 16:9 横构图",
      "tagText": "Field note",
      "headingHtml": "把每一次曝光，<br>都换成 <span class=\"ign-ember-text\">实际增长</span>。",
      "sub": "流量是借来的，资产才是自己的——我们帮你把前者沉淀成后者。",
      "stats": [
        {
          "v": "×3.8",
          "l": "平均转化率提升"
        },
        {
          "v": "+182%",
          "l": "12 个月自然流量"
        },
        {
          "v": "14 天",
          "l": "首次见效周期"
        }
      ],
      "metaLeft": "IGNIS — 燃点 · 增长引擎",
      "metaMid": "看得见的曝光，留得住的增长"
    }
  },
  {
    "key": "theme11_page056",
    "themeKey": "theme11",
    "pageNumber": 56,
    "layout": "THEME11-056",
    "slot": "page56",
    "label": "数字",
    "bgClass": "",
    "controls": [
      {
        "key": "surface",
        "label": "背景基调",
        "type": "select",
        "default": "paper",
        "options": [
          {
            "value": "ink",
            "label": "深色"
          },
          {
            "value": "paper",
            "label": "浅色"
          },
          {
            "value": "ember",
            "label": "暖橙"
          }
        ],
        "desc": "页面背景主题，用于在相邻页之间制造色彩跳跃。",
        "publicKey": "surface",
        "publicLabel": "背景基调",
        "description": "页面背景主题，用于在相邻页之间制造色彩跳跃。"
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
        "desc": "巨型数字与文案的对齐方向。",
        "publicKey": "align",
        "publicLabel": "对齐方式",
        "description": "巨型数字与文案的对齐方向。"
      },
      {
        "key": "showKicker",
        "label": "装饰副标题",
        "type": "toggle",
        "default": true,
        "desc": "数字上方的装饰标签。",
        "publicKey": "showKicker",
        "publicLabel": "装饰副标题",
        "description": "数字上方的装饰标签。"
      },
      {
        "key": "showPrefix",
        "label": "前缀符号",
        "type": "toggle",
        "default": false,
        "desc": "数字前的符号（如 + 号）。",
        "publicKey": "showPrefix",
        "publicLabel": "前缀符号",
        "description": "数字前的符号（如 + 号）。"
      },
      {
        "key": "showUnit",
        "label": "单位符号",
        "type": "toggle",
        "default": true,
        "desc": "数字后的单位（如 %）。",
        "publicKey": "showUnit",
        "publicLabel": "单位符号",
        "description": "数字后的单位（如 %）。"
      },
      {
        "key": "showSub",
        "label": "副标题",
        "type": "toggle",
        "default": true,
        "desc": "数字下方的衬线说明句。",
        "publicKey": "showSub",
        "publicLabel": "副标题",
        "description": "数字下方的衬线说明句。"
      },
      {
        "key": "showFootStats",
        "label": "辅助数据",
        "type": "toggle",
        "default": true,
        "desc": "底部的小号辅助数据行。",
        "publicKey": "showFootStats",
        "publicLabel": "辅助数据",
        "description": "底部的小号辅助数据行。"
      },
      {
        "key": "subStatCount",
        "label": "辅助数据数量",
        "type": "slider",
        "default": 3,
        "min": 1,
        "max": 3,
        "step": 1,
        "desc": "底部辅助数据的条目数量。",
        "publicKey": "itemCount",
        "publicLabel": "辅助数据数量",
        "description": "底部辅助数据的条目数量。"
      },
      {
        "key": "showGhostMark",
        "label": "背景大字符",
        "type": "toggle",
        "default": true,
        "desc": "角落超大幽灵字符装饰。",
        "publicKey": "showGhostMark",
        "publicLabel": "背景大字符",
        "description": "角落超大幽灵字符装饰。"
      },
      {
        "key": "showScaffold",
        "label": "边框骨架",
        "type": "toggle",
        "default": true,
        "desc": "侧边竖排标签与四角括线。",
        "publicKey": "showScaffold",
        "publicLabel": "边框骨架",
        "description": "侧边竖排标签与四角括线。"
      },
      {
        "key": "showMeta",
        "label": "底部信息条",
        "type": "toggle",
        "default": true,
        "desc": "底部页脚信息与进度条。",
        "publicKey": "showMeta",
        "publicLabel": "底部信息条",
        "description": "底部页脚信息与进度条。"
      }
    ],
    "defaultProps": {
      "surface": "paper",
      "align": "left",
      "showKicker": true,
      "showPrefix": false,
      "showUnit": true,
      "showSub": true,
      "showFootStats": true,
      "subStatCount": 3,
      "showGhostMark": true,
      "showScaffold": true,
      "showMeta": true,
      "ghostMark": "%",
      "railText": "Headline — 数字",
      "navItems": [
        "数字"
      ],
      "navCurrent": 0,
      "ixNo": "52",
      "ixLabel": "Headline",
      "kickerEn": "One number",
      "kickerZh": "平均自然流量增幅",
      "prefix": "+",
      "bigNumber": "182",
      "unit": "%",
      "sub": "接入燃点 12 个月后，自然搜索流量的中位增幅——不是某个爆款，是 2,400+ 品牌一起跑出来的。",
      "subs": [
        {
          "v": "2,400+",
          "l": "合作品牌样本"
        },
        {
          "v": "12 个月",
          "l": "统计窗口"
        },
        {
          "v": "中位口径",
          "l": "非头部个例"
        }
      ],
      "metaLeft": "IGNIS — 燃点 · 全样本中位",
      "metaMid": "一个数字，胜过一页 slide"
    }
  },
  {
    "key": "theme11_page057",
    "themeKey": "theme11",
    "pageNumber": 57,
    "layout": "THEME11-057",
    "slot": "page57",
    "label": "明细",
    "bgClass": "",
    "controls": [
      {
        "key": "surface",
        "label": "背景基调",
        "type": "select",
        "default": "ink",
        "options": [
          {
            "value": "ink",
            "label": "深色"
          },
          {
            "value": "paper",
            "label": "浅色"
          },
          {
            "value": "ember",
            "label": "暖橙"
          }
        ],
        "desc": "页面背景主题，用于在相邻页之间制造色彩跳跃。",
        "publicKey": "surface",
        "publicLabel": "背景基调",
        "description": "页面背景主题，用于在相邻页之间制造色彩跳跃。"
      },
      {
        "key": "rowCount",
        "label": "模块行数",
        "type": "slider",
        "default": 6,
        "min": 4,
        "max": 6,
        "step": 1,
        "desc": "明细表的模块（行）数量。",
        "publicKey": "rowCount",
        "publicLabel": "模块行数",
        "description": "明细表的模块（行）数量。"
      },
      {
        "key": "showColHeads",
        "label": "表头行",
        "type": "toggle",
        "default": true,
        "desc": "列标题行的显示与隐藏。",
        "publicKey": "showColHeads",
        "publicLabel": "表头行",
        "description": "列标题行的显示与隐藏。"
      },
      {
        "key": "emphasis",
        "label": "高亮某行",
        "type": "toggle",
        "default": true,
        "desc": "开启后高亮某一模块行。",
        "publicKey": "emphasis",
        "publicLabel": "高亮某行",
        "description": "开启后高亮某一模块行。"
      },
      {
        "key": "emphasisIndex",
        "label": "高亮行序号",
        "type": "slider",
        "default": 0,
        "min": 0,
        "max": 5,
        "step": 1,
        "desc": "需要高亮的模块行序号（从 0 起）。",
        "publicKey": "emphasisIndex",
        "publicLabel": "高亮行序号",
        "description": "需要高亮的模块行序号（从 0 起）。"
      },
      {
        "key": "showKicker",
        "label": "装饰副标题",
        "type": "toggle",
        "default": true,
        "desc": "主标题上方的装饰标签。",
        "publicKey": "showKicker",
        "publicLabel": "装饰副标题",
        "description": "主标题上方的装饰标签。"
      },
      {
        "key": "showFootNote",
        "label": "脚注",
        "type": "toggle",
        "default": true,
        "desc": "表格下方的衬线脚注。",
        "publicKey": "showFootNote",
        "publicLabel": "脚注",
        "description": "表格下方的衬线脚注。"
      },
      {
        "key": "showGhostMark",
        "label": "背景大字符",
        "type": "toggle",
        "default": true,
        "desc": "角落超大幽灵字符装饰。",
        "publicKey": "showGhostMark",
        "publicLabel": "背景大字符",
        "description": "角落超大幽灵字符装饰。"
      },
      {
        "key": "showScaffold",
        "label": "边框骨架",
        "type": "toggle",
        "default": true,
        "desc": "侧边竖排标签与四角括线。",
        "publicKey": "showScaffold",
        "publicLabel": "边框骨架",
        "description": "侧边竖排标签与四角括线。"
      },
      {
        "key": "showMeta",
        "label": "底部信息条",
        "type": "toggle",
        "default": true,
        "desc": "底部页脚信息与进度条。",
        "publicKey": "showMeta",
        "publicLabel": "底部信息条",
        "description": "底部页脚信息与进度条。"
      }
    ],
    "defaultProps": {
      "surface": "ink",
      "rowCount": 6,
      "showColHeads": true,
      "emphasis": true,
      "emphasisIndex": 0,
      "showKicker": true,
      "showFootNote": true,
      "showGhostMark": true,
      "showScaffold": true,
      "showMeta": true,
      "ghostMark": "§",
      "railText": "Spec — 明细",
      "navItems": [
        "明细"
      ],
      "navCurrent": 0,
      "ixNo": "53",
      "ixLabel": "Spec",
      "eyebrowNo": "交付明细",
      "eyebrowEn": "What you get",
      "headingHtml": "每个模块，<span class=\"ign-ember-text\">怎么交、怎么量</span>。",
      "noteHtml": "一份预算，<br>一张清单说清楚。",
      "cols": [
        "模块 · Module",
        "周期 · Cadence",
        "关键交付 · Deliverables",
        "衡量指标 · Measured by"
      ],
      "rows": [
        {
          "mn": "搜索增长",
          "me": "SEARCH",
          "cad": "持续",
          "dl": "技术 SEO · 内容矩阵 · 权威外链",
          "mb": "自然流量 / 关键词排名"
        },
        {
          "mn": "转化优化",
          "me": "CONVERT",
          "cad": "4 周冲刺",
          "dl": "落地页重写 · 路径梳理 · A/B 测试",
          "mb": "转化率 / 单客成本"
        },
        {
          "mn": "付费投放",
          "me": "PAID",
          "cad": "月度",
          "dl": "渠道组合 · 创意迭代 · 预算调度",
          "mb": "ROAS / 获客成本"
        },
        {
          "mn": "内容引擎",
          "me": "CONTENT",
          "cad": "双周",
          "dl": "选题 · 制作 · 多渠道分发",
          "mb": "触达 / 互动率"
        },
        {
          "mn": "数据看板",
          "me": "DATA",
          "cad": "实时",
          "dl": "指标定义 · 归因模型 · 自动报表",
          "mb": "全链路可见"
        },
        {
          "mn": "增长复盘",
          "me": "REVIEW",
          "cad": "月度",
          "dl": "结论沉淀 · 下阶段路线图",
          "mb": "目标达成率"
        }
      ],
      "footNote": "* 各模块按需组合，周期可随阶段目标调整；具体交付以诊断后的路线图为准。",
      "metaLeft": "IGNIS — 燃点 · 服务交付明细",
      "metaMid": "说得清，才交付得了"
    }
  },
  {
    "key": "theme11_page058",
    "themeKey": "theme11",
    "pageNumber": 58,
    "layout": "THEME11-058",
    "slot": "page58",
    "label": "案例集",
    "bgClass": "",
    "controls": [
      {
        "key": "surface",
        "label": "背景基调",
        "type": "select",
        "default": "paper",
        "options": [
          {
            "value": "ink",
            "label": "深色"
          },
          {
            "value": "paper",
            "label": "浅色"
          },
          {
            "value": "ember",
            "label": "暖橙"
          }
        ],
        "desc": "页面背景主题，用于在相邻页之间制造色彩跳跃。",
        "publicKey": "surface",
        "publicLabel": "背景基调",
        "description": "页面背景主题，用于在相邻页之间制造色彩跳跃。"
      },
      {
        "key": "cardCount",
        "label": "卡片数量",
        "type": "slider",
        "default": 3,
        "min": 2,
        "max": 3,
        "step": 1,
        "desc": "并列案例卡的数量。",
        "publicKey": "cardCount",
        "publicLabel": "卡片数量",
        "description": "并列案例卡的数量。"
      },
      {
        "key": "showMetric",
        "label": "成果数字",
        "type": "toggle",
        "default": true,
        "desc": "每张卡底部的成果数字。",
        "publicKey": "showMetric",
        "publicLabel": "成果数字",
        "description": "每张卡底部的成果数字。"
      },
      {
        "key": "showResult",
        "label": "成果描述",
        "type": "toggle",
        "default": true,
        "desc": "每张卡的一句话成果描述。",
        "publicKey": "showResult",
        "publicLabel": "成果描述",
        "description": "每张卡的一句话成果描述。"
      },
      {
        "key": "emphasis",
        "label": "重点突出",
        "type": "toggle",
        "default": false,
        "desc": "开启后突出某一张卡，其余弱化。",
        "publicKey": "emphasis",
        "publicLabel": "重点突出",
        "description": "开启后突出某一张卡，其余弱化。"
      },
      {
        "key": "emphasisIndex",
        "label": "重点序号",
        "type": "slider",
        "default": 0,
        "min": 0,
        "max": 2,
        "step": 1,
        "desc": "需要突出的卡片序号（从 0 起）。",
        "publicKey": "emphasisIndex",
        "publicLabel": "重点序号",
        "description": "需要突出的卡片序号（从 0 起）。"
      },
      {
        "key": "showKicker",
        "label": "装饰副标题",
        "type": "toggle",
        "default": true,
        "desc": "主标题上方的装饰标签。",
        "publicKey": "showKicker",
        "publicLabel": "装饰副标题",
        "description": "主标题上方的装饰标签。"
      },
      {
        "key": "showGhostMark",
        "label": "背景大字符",
        "type": "toggle",
        "default": true,
        "desc": "角落超大幽灵字符装饰。",
        "publicKey": "showGhostMark",
        "publicLabel": "背景大字符",
        "description": "角落超大幽灵字符装饰。"
      },
      {
        "key": "showScaffold",
        "label": "边框骨架",
        "type": "toggle",
        "default": true,
        "desc": "侧边竖排标签与四角括线。",
        "publicKey": "showScaffold",
        "publicLabel": "边框骨架",
        "description": "侧边竖排标签与四角括线。"
      },
      {
        "key": "showMeta",
        "label": "底部信息条",
        "type": "toggle",
        "default": true,
        "desc": "底部页脚信息与进度条。",
        "publicKey": "showMeta",
        "publicLabel": "底部信息条",
        "description": "底部页脚信息与进度条。"
      }
    ],
    "defaultProps": {
      "surface": "paper",
      "cardCount": 3,
      "images": [],
      "showMetric": true,
      "showResult": true,
      "emphasis": false,
      "emphasisIndex": 0,
      "showKicker": true,
      "showGhostMark": true,
      "showScaffold": true,
      "showMeta": true,
      "ghostMark": "★",
      "railText": "Cases — 案例集",
      "navItems": [
        "案例集"
      ],
      "navCurrent": 0,
      "ixNo": "54",
      "ixLabel": "Cases",
      "eyebrowNo": "案例集",
      "eyebrowEn": "Selected work",
      "headingHtml": "不同行业，<span class=\"ign-ember-text\">同一种增长</span>。",
      "noteHtml": "硬件、连锁、SaaS——<br>路径一致，结果可复制。",
      "cards": [
        {
          "nm": "VOLT 电动",
          "cat": "DTC 硬件",
          "res": "主落地页重排 + 投放提效，14 天进线翻倍。",
          "v": "×3.8",
          "l": "转化率"
        },
        {
          "nm": "桥本生活",
          "cat": "本地连锁",
          "res": "本地 SEO 与内容矩阵双轮，门店进店稳步上扬。",
          "v": "+182%",
          "l": "自然进线"
        },
        {
          "nm": "Nimbus SaaS",
          "cat": "B2B 软件",
          "res": "重建获客漏斗，把试用转付费的链路拉直。",
          "v": "−41%",
          "l": "获客成本"
        }
      ],
      "metaLeft": "IGNIS — 燃点 · 精选客户案例",
      "metaMid": "能复制的，才叫方法"
    }
  },
  {
    "key": "theme11_page059",
    "themeKey": "theme11",
    "pageNumber": 59,
    "layout": "THEME11-059",
    "slot": "page59",
    "label": "构成",
    "bgClass": "",
    "controls": [
      {
        "key": "surface",
        "label": "背景基调",
        "type": "select",
        "default": "ink",
        "options": [
          {
            "value": "ink",
            "label": "深色"
          },
          {
            "value": "paper",
            "label": "浅色"
          },
          {
            "value": "ember",
            "label": "暖橙"
          }
        ],
        "desc": "页面背景主题，用于在相邻页之间制造色彩跳跃。",
        "publicKey": "surface",
        "publicLabel": "背景基调",
        "description": "页面背景主题，用于在相邻页之间制造色彩跳跃。"
      },
      {
        "key": "blockCount",
        "label": "区块数量",
        "type": "slider",
        "default": 5,
        "min": 3,
        "max": 5,
        "step": 1,
        "desc": "树图中按占比划分的渠道区块数量。",
        "publicKey": "blockCount",
        "publicLabel": "区块数量",
        "description": "树图中按占比划分的渠道区块数量。"
      },
      {
        "key": "emphasis",
        "label": "重点突出",
        "type": "toggle",
        "default": false,
        "desc": "开启后突出某一区块，其余弱化。",
        "publicKey": "emphasis",
        "publicLabel": "重点突出",
        "description": "开启后突出某一区块，其余弱化。"
      },
      {
        "key": "emphasisIndex",
        "label": "重点序号",
        "type": "slider",
        "default": 0,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "需要突出的区块序号（从 0 起）。",
        "publicKey": "emphasisIndex",
        "publicLabel": "重点序号",
        "description": "需要突出的区块序号（从 0 起）。"
      },
      {
        "key": "showKeys",
        "label": "占比图例",
        "type": "toggle",
        "default": true,
        "desc": "左侧带百分比的图例清单。",
        "publicKey": "showKeys",
        "publicLabel": "占比图例",
        "description": "左侧带百分比的图例清单。"
      },
      {
        "key": "showKicker",
        "label": "装饰副标题",
        "type": "toggle",
        "default": true,
        "desc": "主标题上方的装饰标签。",
        "publicKey": "showKicker",
        "publicLabel": "装饰副标题",
        "description": "主标题上方的装饰标签。"
      },
      {
        "key": "showLede",
        "label": "说明文案",
        "type": "toggle",
        "default": true,
        "desc": "主标题下方的说明段落。",
        "publicKey": "showLede",
        "publicLabel": "说明文案",
        "description": "主标题下方的说明段落。"
      },
      {
        "key": "showGhostMark",
        "label": "背景大字符",
        "type": "toggle",
        "default": true,
        "desc": "角落超大幽灵字符装饰。",
        "publicKey": "showGhostMark",
        "publicLabel": "背景大字符",
        "description": "角落超大幽灵字符装饰。"
      },
      {
        "key": "showScaffold",
        "label": "边框骨架",
        "type": "toggle",
        "default": true,
        "desc": "侧边竖排标签与四角括线。",
        "publicKey": "showScaffold",
        "publicLabel": "边框骨架",
        "description": "侧边竖排标签与四角括线。"
      },
      {
        "key": "showMeta",
        "label": "底部信息条",
        "type": "toggle",
        "default": true,
        "desc": "底部页脚信息与进度条。",
        "publicKey": "showMeta",
        "publicLabel": "底部信息条",
        "description": "底部页脚信息与进度条。"
      }
    ],
    "defaultProps": {
      "surface": "ink",
      "blockCount": 5,
      "emphasis": false,
      "emphasisIndex": 0,
      "showKeys": true,
      "showKicker": true,
      "showLede": true,
      "showGhostMark": true,
      "showScaffold": true,
      "showMeta": true,
      "ghostMark": "▦",
      "railText": "Mix — 构成",
      "navItems": [
        "构成"
      ],
      "navCurrent": 0,
      "ixNo": "55",
      "ixLabel": "Mix",
      "eyebrowNo": "构成",
      "eyebrowEn": "Where growth comes from",
      "headingHtml": "增长从哪来，<br><span class=\"ign-ember-text\">面积说了算</span>。",
      "lede": "把一年的增量按来源拆开——块越大，贡献越多。自然资产，才是底盘。",
      "data": [
        {
          "nm": "自然搜索",
          "v": 38
        },
        {
          "nm": "内容分发",
          "v": 24
        },
        {
          "nm": "付费投放",
          "v": 18
        },
        {
          "nm": "社媒互动",
          "v": 12
        },
        {
          "nm": "品牌直访",
          "v": 8
        }
      ],
      "metaLeft": "IGNIS — 燃点 · 增量来源拆解",
      "metaMid": "大的那块，得是你自己的"
    }
  },
  {
    "key": "theme11_page060",
    "themeKey": "theme11",
    "pageNumber": 60,
    "layout": "THEME11-060",
    "slot": "page60",
    "label": "痛点",
    "bgClass": "",
    "controls": [
      {
        "key": "surface",
        "label": "背景基调",
        "type": "select",
        "default": "ember",
        "options": [
          {
            "value": "ink",
            "label": "深色"
          },
          {
            "value": "paper",
            "label": "浅色"
          },
          {
            "value": "ember",
            "label": "暖橙"
          }
        ],
        "desc": "页面背景主题，用于在相邻页之间制造色彩跳跃。",
        "publicKey": "surface",
        "publicLabel": "背景基调",
        "description": "页面背景主题，用于在相邻页之间制造色彩跳跃。"
      },
      {
        "key": "pairCount",
        "label": "配对数量",
        "type": "slider",
        "default": 4,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "痛点→解法配对的数量。",
        "publicKey": "pairCount",
        "publicLabel": "配对数量",
        "description": "痛点→解法配对的数量。"
      },
      {
        "key": "showArrows",
        "label": "箭头母题",
        "type": "toggle",
        "default": true,
        "desc": "痛点与解法之间的箭头。",
        "publicKey": "showArrows",
        "publicLabel": "箭头母题",
        "description": "痛点与解法之间的箭头。"
      },
      {
        "key": "showColLabels",
        "label": "列标签",
        "type": "toggle",
        "default": true,
        "desc": "顶部「痛点 / 解法」列标签。",
        "publicKey": "showColLabels",
        "publicLabel": "列标签",
        "description": "顶部「痛点 / 解法」列标签。"
      },
      {
        "key": "emphasis",
        "label": "重点突出",
        "type": "toggle",
        "default": false,
        "desc": "开启后突出某一对，其余弱化。",
        "publicKey": "emphasis",
        "publicLabel": "重点突出",
        "description": "开启后突出某一对，其余弱化。"
      },
      {
        "key": "emphasisIndex",
        "label": "重点序号",
        "type": "slider",
        "default": 0,
        "min": 0,
        "max": 3,
        "step": 1,
        "desc": "需要突出的配对序号（从 0 起）。",
        "publicKey": "emphasisIndex",
        "publicLabel": "重点序号",
        "description": "需要突出的配对序号（从 0 起）。"
      },
      {
        "key": "showKicker",
        "label": "装饰副标题",
        "type": "toggle",
        "default": true,
        "desc": "主标题上方的装饰标签。",
        "publicKey": "showKicker",
        "publicLabel": "装饰副标题",
        "description": "主标题上方的装饰标签。"
      },
      {
        "key": "showFootLine",
        "label": "收束句",
        "type": "toggle",
        "default": true,
        "desc": "列表下方的衬线收束句。",
        "publicKey": "showFootLine",
        "publicLabel": "收束句",
        "description": "列表下方的衬线收束句。"
      },
      {
        "key": "showGhostMark",
        "label": "背景大字符",
        "type": "toggle",
        "default": true,
        "desc": "角落超大幽灵字符装饰。",
        "publicKey": "showGhostMark",
        "publicLabel": "背景大字符",
        "description": "角落超大幽灵字符装饰。"
      },
      {
        "key": "showScaffold",
        "label": "边框骨架",
        "type": "toggle",
        "default": true,
        "desc": "侧边竖排标签与四角括线。",
        "publicKey": "showScaffold",
        "publicLabel": "边框骨架",
        "description": "侧边竖排标签与四角括线。"
      },
      {
        "key": "showMeta",
        "label": "底部信息条",
        "type": "toggle",
        "default": true,
        "desc": "底部页脚信息与进度条。",
        "publicKey": "showMeta",
        "publicLabel": "底部信息条",
        "description": "底部页脚信息与进度条。"
      }
    ],
    "defaultProps": {
      "surface": "ember",
      "pairCount": 4,
      "showArrows": true,
      "showColLabels": true,
      "emphasis": false,
      "emphasisIndex": 0,
      "showKicker": true,
      "showFootLine": true,
      "showGhostMark": true,
      "showScaffold": true,
      "showMeta": true,
      "ghostMark": "→",
      "railText": "Shift — 痛点",
      "navItems": [
        "痛点"
      ],
      "navCurrent": 0,
      "ixNo": "56",
      "ixLabel": "Shift",
      "eyebrowNo": "从痛点到解法",
      "eyebrowEn": "Old way → IGNIS",
      "headingHtml": "把每一个老问题，<span class=\"ign-ember-text\">翻成新答案</span>。",
      "colLabel": "过去这样 → 现在这样",
      "pairs": [
        {
          "p": "流量买来就走，留不住",
          "g": "内容沉淀成资产，复利留存"
        },
        {
          "p": "报表一大堆，看不懂赚没赚",
          "g": "一块看板，直接对齐利润"
        },
        {
          "p": "换了三家代理，各说各话",
          "g": "一支团队，对增长负责"
        },
        {
          "p": "投放一停，增长就停",
          "g": "自然流量托底，越滚越大"
        }
      ],
      "footLine": "同样的预算，换一种活法——把花掉的流量，变成攒下的资产。",
      "metaLeft": "IGNIS — 燃点 · 痛点与解法",
      "metaMid": "问题没变，答法变了"
    }
  },
  {
    "key": "theme11_page061",
    "themeKey": "theme11",
    "pageNumber": 61,
    "layout": "THEME11-061",
    "slot": "page61",
    "label": "蜕变",
    "bgClass": "",
    "controls": [
      {
        "key": "surface",
        "label": "背景基调",
        "type": "select",
        "default": "paper",
        "options": [
          {
            "value": "ink",
            "label": "深色"
          },
          {
            "value": "paper",
            "label": "浅色"
          },
          {
            "value": "ember",
            "label": "暖橙"
          }
        ],
        "desc": "页面背景主题，用于在相邻页之间制造色彩跳跃。",
        "publicKey": "surface",
        "publicLabel": "背景基调",
        "description": "页面背景主题，用于在相邻页之间制造色彩跳跃。"
      },
      {
        "key": "showLabels",
        "label": "前后标签",
        "type": "toggle",
        "default": true,
        "desc": "面板左上角的「改版前 / 改版后」标签。",
        "publicKey": "showLabels",
        "publicLabel": "前后标签",
        "description": "面板左上角的「改版前 / 改版后」标签。"
      },
      {
        "key": "showCaptions",
        "label": "面板说明",
        "type": "toggle",
        "default": true,
        "desc": "面板底部的说明文案。",
        "publicKey": "showCaptions",
        "publicLabel": "面板说明",
        "description": "面板底部的说明文案。"
      },
      {
        "key": "showSeam",
        "label": "中缝徽标",
        "type": "toggle",
        "default": true,
        "desc": "两幅图中缝的箭头徽标。",
        "publicKey": "showSeam",
        "publicLabel": "中缝徽标",
        "description": "两幅图中缝的箭头徽标。"
      },
      {
        "key": "showStrip",
        "label": "成果条",
        "type": "toggle",
        "default": true,
        "desc": "底部的成果指标条。",
        "publicKey": "showStrip",
        "publicLabel": "成果条",
        "description": "底部的成果指标条。"
      },
      {
        "key": "statCount",
        "label": "成果数量",
        "type": "slider",
        "default": 3,
        "min": 1,
        "max": 3,
        "step": 1,
        "desc": "成果条中的指标数量。",
        "publicKey": "statCount",
        "publicLabel": "成果数量",
        "description": "成果条中的指标数量。"
      },
      {
        "key": "showKicker",
        "label": "装饰副标题",
        "type": "toggle",
        "default": true,
        "desc": "主标题上方的装饰标签。",
        "publicKey": "showKicker",
        "publicLabel": "装饰副标题",
        "description": "主标题上方的装饰标签。"
      },
      {
        "key": "showGhostMark",
        "label": "背景大字符",
        "type": "toggle",
        "default": true,
        "desc": "角落超大幽灵字符装饰。",
        "publicKey": "showGhostMark",
        "publicLabel": "背景大字符",
        "description": "角落超大幽灵字符装饰。"
      },
      {
        "key": "showScaffold",
        "label": "边框骨架",
        "type": "toggle",
        "default": true,
        "desc": "侧边竖排标签与四角括线。",
        "publicKey": "showScaffold",
        "publicLabel": "边框骨架",
        "description": "侧边竖排标签与四角括线。"
      },
      {
        "key": "showMeta",
        "label": "底部信息条",
        "type": "toggle",
        "default": true,
        "desc": "底部页脚信息与进度条。",
        "publicKey": "showMeta",
        "publicLabel": "底部信息条",
        "description": "底部页脚信息与进度条。"
      }
    ],
    "defaultProps": {
      "surface": "paper",
      "images": [],
      "showLabels": true,
      "showCaptions": true,
      "showSeam": true,
      "showStrip": true,
      "statCount": 3,
      "showKicker": true,
      "showGhostMark": true,
      "showScaffold": true,
      "showMeta": true,
      "ghostMark": "↔",
      "railText": "Before · After",
      "navItems": [
        "蜕变"
      ],
      "navCurrent": 0,
      "ixNo": "57",
      "ixLabel": "Redesign",
      "eyebrowNo": "改版前后",
      "eyebrowEn": "Same page, rebuilt",
      "headingHtml": "不是换皮，<span class=\"ign-ember-text\">是重排路径</span>。",
      "noteHtml": "VOLT 电动 · 主落地页<br>同一份流量，两种结果。",
      "beforePlaceholder": "改版前截图",
      "afterPlaceholder": "改版后截图",
      "beforeChip": "改版前 · Before",
      "afterChip": "改版后 · After",
      "beforeCap": "信息堆叠、行动模糊，跳出率高。",
      "afterCap": "层级清晰、主张前置，路径直达转化。",
      "seamGlyph": "→",
      "stats": [
        {
          "v": "×3.8",
          "l": "转化率"
        },
        {
          "v": "+182%",
          "l": "自然进线"
        },
        {
          "v": "14 天",
          "l": "见效周期"
        }
      ],
      "metaLeft": "IGNIS — 燃点 · 落地页改版",
      "metaMid": "改对地方，数字自己会说话"
    }
  },
  {
    "key": "theme11_page062",
    "themeKey": "theme11",
    "pageNumber": 62,
    "layout": "THEME11-062",
    "slot": "page62",
    "label": "层级",
    "bgClass": "",
    "controls": [
      {
        "key": "surface",
        "label": "背景基调",
        "type": "select",
        "default": "ink",
        "options": [
          {
            "value": "ink",
            "label": "深色"
          },
          {
            "value": "paper",
            "label": "浅色"
          },
          {
            "value": "ember",
            "label": "暖橙"
          }
        ],
        "desc": "页面背景主题，用于在相邻页之间制造色彩跳跃。",
        "publicKey": "surface",
        "publicLabel": "背景基调",
        "description": "页面背景主题，用于在相邻页之间制造色彩跳跃。"
      },
      {
        "key": "layerCount",
        "label": "层级数量",
        "type": "slider",
        "default": 5,
        "min": 3,
        "max": 5,
        "step": 1,
        "desc": "金字塔的分层数量（自顶向下）。",
        "publicKey": "layerCount",
        "publicLabel": "层级数量",
        "description": "金字塔的分层数量（自顶向下）。"
      },
      {
        "key": "emphasis",
        "label": "重点突出",
        "type": "toggle",
        "default": false,
        "desc": "开启后突出某一层，其余弱化。",
        "publicKey": "emphasis",
        "publicLabel": "重点突出",
        "description": "开启后突出某一层，其余弱化。"
      },
      {
        "key": "emphasisIndex",
        "label": "重点序号",
        "type": "slider",
        "default": 0,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "需要突出的层级序号（0 = 顶层）。",
        "publicKey": "emphasisIndex",
        "publicLabel": "重点序号",
        "description": "需要突出的层级序号（0 = 顶层）。"
      },
      {
        "key": "showValues",
        "label": "层级标注",
        "type": "toggle",
        "default": true,
        "desc": "每层名称右侧的层位标注。",
        "publicKey": "showValues",
        "publicLabel": "层级标注",
        "description": "每层名称右侧的层位标注。"
      },
      {
        "key": "showKeys",
        "label": "占比图例",
        "type": "toggle",
        "default": true,
        "desc": "左侧带占比的图例清单。",
        "publicKey": "showKeys",
        "publicLabel": "占比图例",
        "description": "左侧带占比的图例清单。"
      },
      {
        "key": "showAxis",
        "label": "方向轴标",
        "type": "toggle",
        "default": true,
        "desc": "金字塔右侧的「价值 / 体量」方向标注。",
        "publicKey": "showAxis",
        "publicLabel": "方向轴标",
        "description": "金字塔右侧的「价值 / 体量」方向标注。"
      },
      {
        "key": "showKicker",
        "label": "装饰副标题",
        "type": "toggle",
        "default": true,
        "desc": "主标题上方的装饰标签。",
        "publicKey": "showKicker",
        "publicLabel": "装饰副标题",
        "description": "主标题上方的装饰标签。"
      },
      {
        "key": "showLede",
        "label": "说明文案",
        "type": "toggle",
        "default": true,
        "desc": "主标题下方的说明段落。",
        "publicKey": "showLede",
        "publicLabel": "说明文案",
        "description": "主标题下方的说明段落。"
      },
      {
        "key": "showGhostMark",
        "label": "背景大字符",
        "type": "toggle",
        "default": true,
        "desc": "角落超大幽灵字符装饰。",
        "publicKey": "showGhostMark",
        "publicLabel": "背景大字符",
        "description": "角落超大幽灵字符装饰。"
      },
      {
        "key": "showScaffold",
        "label": "边框骨架",
        "type": "toggle",
        "default": true,
        "desc": "侧边竖排标签与四角括线。",
        "publicKey": "showScaffold",
        "publicLabel": "边框骨架",
        "description": "侧边竖排标签与四角括线。"
      },
      {
        "key": "showMeta",
        "label": "底部信息条",
        "type": "toggle",
        "default": true,
        "desc": "底部页脚信息与进度条。",
        "publicKey": "showMeta",
        "publicLabel": "底部信息条",
        "description": "底部页脚信息与进度条。"
      }
    ],
    "defaultProps": {
      "surface": "ink",
      "layerCount": 5,
      "emphasis": false,
      "emphasisIndex": 0,
      "showValues": true,
      "showKeys": true,
      "showAxis": true,
      "showKicker": true,
      "showLede": true,
      "showGhostMark": true,
      "showScaffold": true,
      "showMeta": true,
      "ghostMark": "▲",
      "railText": "Pyramid — 层级",
      "navItems": [
        "层级"
      ],
      "navCurrent": 0,
      "ixNo": "58",
      "ixLabel": "Pyramid",
      "eyebrowNo": "层级",
      "eyebrowEn": "The growth stack",
      "headingHtml": "越往上越值钱，<br><span class=\"ign-ember-text\">越往下越扎实</span>。",
      "lede": "增长不是单点爆发，是一层托一层——地基稳，复利才滚得起来。",
      "axisTop": "↑ 价值 / 利润",
      "axisBot": "↓ 体量 / 流量",
      "layers": [
        {
          "nm": "利润复利",
          "vv": "复利层",
          "share": 8
        },
        {
          "nm": "转化系统",
          "vv": "收口层",
          "share": 16
        },
        {
          "nm": "自然流量",
          "vv": "增长层",
          "share": 24
        },
        {
          "nm": "内容资产",
          "vv": "沉淀层",
          "share": 28
        },
        {
          "nm": "数据地基",
          "vv": "地基层",
          "share": 36
        }
      ],
      "metaLeft": "IGNIS — 燃点 · 增长价值栈",
      "metaMid": "尖顶赚钱，底盘抗摔"
    }
  },
  {
    "key": "theme11_page063",
    "themeKey": "theme11",
    "pageNumber": 63,
    "layout": "THEME11-063",
    "slot": "page63",
    "label": "现场",
    "bgClass": "",
    "controls": [
      {
        "key": "surface",
        "label": "背景基调",
        "type": "select",
        "default": "paper",
        "options": [
          {
            "value": "ink",
            "label": "深色"
          },
          {
            "value": "paper",
            "label": "浅色"
          },
          {
            "value": "ember",
            "label": "暖橙"
          }
        ],
        "desc": "页面背景主题，用于在相邻页之间制造色彩跳跃。",
        "publicKey": "surface",
        "publicLabel": "背景基调",
        "description": "页面背景主题，用于在相邻页之间制造色彩跳跃。"
      },
      {
        "key": "imageCount",
        "label": "照片数量",
        "type": "slider",
        "default": 4,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "散落宝丽来照片槽数量（0–4）；不足回退条纹占位。",
        "publicKey": "imageCount",
        "publicLabel": "照片数量",
        "description": "散落宝丽来照片槽数量（0–4）；不足回退条纹占位。"
      },
      {
        "key": "showCaptions",
        "label": "手写说明",
        "type": "toggle",
        "default": true,
        "desc": "每张相纸下方的手写体说明。",
        "publicKey": "showCaptions",
        "publicLabel": "手写说明",
        "description": "每张相纸下方的手写体说明。"
      },
      {
        "key": "showPins",
        "label": "图钉",
        "type": "toggle",
        "default": true,
        "desc": "相纸顶部的图钉装饰。",
        "publicKey": "showPins",
        "publicLabel": "图钉",
        "description": "相纸顶部的图钉装饰。"
      },
      {
        "key": "showTags",
        "label": "标签行",
        "type": "toggle",
        "default": true,
        "desc": "左侧的关键词标签行。",
        "publicKey": "showTags",
        "publicLabel": "标签行",
        "description": "左侧的关键词标签行。"
      },
      {
        "key": "showKicker",
        "label": "装饰副标题",
        "type": "toggle",
        "default": true,
        "desc": "主标题上方的装饰标签。",
        "publicKey": "showKicker",
        "publicLabel": "装饰副标题",
        "description": "主标题上方的装饰标签。"
      },
      {
        "key": "showLede",
        "label": "说明文案",
        "type": "toggle",
        "default": true,
        "desc": "主标题下方的说明段落。",
        "publicKey": "showLede",
        "publicLabel": "说明文案",
        "description": "主标题下方的说明段落。"
      },
      {
        "key": "showGhostMark",
        "label": "背景大字符",
        "type": "toggle",
        "default": true,
        "desc": "角落超大幽灵字符装饰。",
        "publicKey": "showGhostMark",
        "publicLabel": "背景大字符",
        "description": "角落超大幽灵字符装饰。"
      },
      {
        "key": "showScaffold",
        "label": "边框骨架",
        "type": "toggle",
        "default": true,
        "desc": "侧边竖排标签与四角括线。",
        "publicKey": "showScaffold",
        "publicLabel": "边框骨架",
        "description": "侧边竖排标签与四角括线。"
      },
      {
        "key": "showMeta",
        "label": "底部信息条",
        "type": "toggle",
        "default": true,
        "desc": "底部页脚信息与进度条。",
        "publicKey": "showMeta",
        "publicLabel": "底部信息条",
        "description": "底部页脚信息与进度条。"
      }
    ],
    "defaultProps": {
      "surface": "paper",
      "imageCount": 4,
      "images": [],
      "showCaptions": true,
      "showPins": true,
      "showTags": true,
      "showKicker": true,
      "showLede": true,
      "showGhostMark": true,
      "showScaffold": true,
      "showMeta": true,
      "ghostMark": "◆",
      "railText": "Field — 现场",
      "navItems": [
        "现场"
      ],
      "navCurrent": 0,
      "ixNo": "59",
      "ixLabel": "Field",
      "eyebrowNo": "现场",
      "eyebrowEn": "From the field",
      "headingHtml": "数据之外，<br><span class=\"ign-ember-text\">是真发生的事</span>。",
      "lede": "报表会冷掉，现场不会——把这些瞬间钉在墙上，提醒我们增长长什么样。",
      "tags": [
        "门店",
        "产品",
        "团队",
        "后台"
      ],
      "photos": [
        {
          "ph": "门店开业",
          "cap": "首店 · 当天售罄",
          "rot": -6,
          "w": 360,
          "x": 2,
          "y": 40,
          "z": 4
        },
        {
          "ph": "产品特写",
          "cap": "复购率 ×2.4",
          "rot": 5,
          "w": 320,
          "x": 360,
          "y": 8,
          "z": 3
        },
        {
          "ph": "团队现场",
          "cap": "上线第 14 天",
          "rot": -3,
          "w": 300,
          "x": 240,
          "y": 360,
          "z": 5
        },
        {
          "ph": "后台数据",
          "cap": "自然进线 +182%",
          "rot": 7,
          "w": 286,
          "x": 612,
          "y": 300,
          "z": 2
        }
      ],
      "metaLeft": "IGNIS — 燃点 · 增长现场",
      "metaMid": "看得见的增长，才让人信"
    }
  },
  {
    "key": "theme11_page064",
    "themeKey": "theme11",
    "pageNumber": 64,
    "layout": "THEME11-064",
    "slot": "page64",
    "label": "排行",
    "bgClass": "",
    "controls": [
      {
        "key": "surface",
        "label": "背景基调",
        "type": "select",
        "default": "ember",
        "options": [
          {
            "value": "ink",
            "label": "深色"
          },
          {
            "value": "paper",
            "label": "浅色"
          },
          {
            "value": "ember",
            "label": "暖橙"
          }
        ],
        "desc": "页面背景主题，用于在相邻页之间制造色彩跳跃。",
        "publicKey": "surface",
        "publicLabel": "背景基调",
        "description": "页面背景主题，用于在相邻页之间制造色彩跳跃。"
      },
      {
        "key": "rowCount",
        "label": "榜单条目",
        "type": "slider",
        "default": 5,
        "min": 3,
        "max": 5,
        "step": 1,
        "desc": "排行榜的条目数量（自高到低）。",
        "publicKey": "itemCount",
        "publicLabel": "榜单条目",
        "description": "排行榜的条目数量（自高到低）。"
      },
      {
        "key": "emphasis",
        "label": "榜首突出",
        "type": "toggle",
        "default": true,
        "desc": "开启后榜首放大并点亮为暖橙，其余弱化。",
        "publicKey": "emphasis",
        "publicLabel": "榜首突出",
        "description": "开启后榜首放大并点亮为暖橙，其余弱化。"
      },
      {
        "key": "showRankNo",
        "label": "名次序号",
        "type": "toggle",
        "default": true,
        "desc": "每行左侧的名次大序号。",
        "publicKey": "showRankNo",
        "publicLabel": "名次序号",
        "description": "每行左侧的名次大序号。"
      },
      {
        "key": "showBars",
        "label": "占比条",
        "type": "toggle",
        "default": true,
        "desc": "每行的占比进度条。",
        "publicKey": "showBars",
        "publicLabel": "占比条",
        "description": "每行的占比进度条。"
      },
      {
        "key": "showDelta",
        "label": "占比注释",
        "type": "toggle",
        "default": true,
        "desc": "数值下方的占增量注释。",
        "publicKey": "showValueLabels",
        "publicLabel": "占比注释",
        "description": "数值下方的占增量注释。"
      },
      {
        "key": "showNote",
        "label": "右上注释",
        "type": "toggle",
        "default": true,
        "desc": "标题右侧的衬线注释。",
        "publicKey": "showNote",
        "publicLabel": "右上注释",
        "description": "标题右侧的衬线注释。"
      },
      {
        "key": "showKicker",
        "label": "装饰副标题",
        "type": "toggle",
        "default": true,
        "desc": "主标题上方的装饰标签。",
        "publicKey": "showKicker",
        "publicLabel": "装饰副标题",
        "description": "主标题上方的装饰标签。"
      },
      {
        "key": "showGhostMark",
        "label": "背景大字符",
        "type": "toggle",
        "default": true,
        "desc": "角落超大幽灵字符装饰。",
        "publicKey": "showGhostMark",
        "publicLabel": "背景大字符",
        "description": "角落超大幽灵字符装饰。"
      },
      {
        "key": "showScaffold",
        "label": "边框骨架",
        "type": "toggle",
        "default": true,
        "desc": "侧边竖排标签与四角括线。",
        "publicKey": "showScaffold",
        "publicLabel": "边框骨架",
        "description": "侧边竖排标签与四角括线。"
      },
      {
        "key": "showMeta",
        "label": "底部信息条",
        "type": "toggle",
        "default": true,
        "desc": "底部页脚信息与进度条。",
        "publicKey": "showMeta",
        "publicLabel": "底部信息条",
        "description": "底部页脚信息与进度条。"
      }
    ],
    "defaultProps": {
      "surface": "ember",
      "rowCount": 5,
      "emphasis": true,
      "showRankNo": true,
      "showBars": true,
      "showDelta": true,
      "showNote": true,
      "showKicker": true,
      "showGhostMark": true,
      "showScaffold": true,
      "showMeta": true,
      "ghostMark": "#1",
      "railText": "Ranking — 排行",
      "navItems": [
        "排行"
      ],
      "navCurrent": 0,
      "ixNo": "60",
      "ixLabel": "Ranking",
      "eyebrowNo": "谁在拉增长",
      "eyebrowEn": "What moves the needle",
      "headingHtml": "把增长的功劳，<span class=\"ign-ember-text\">按贡献排个序</span>。",
      "noteHtml": "12 个月增量归因<br>榜首抵得过后四名之和。",
      "unit": "%",
      "rows": [
        {
          "nm": "自然搜索",
          "en": "Organic",
          "val": 182,
          "w": 100,
          "d": "占增量 38%"
        },
        {
          "nm": "内容分发",
          "en": "Content",
          "val": 124,
          "w": 68,
          "d": "占增量 24%"
        },
        {
          "nm": "私域复购",
          "en": "Retention",
          "val": 96,
          "w": 53,
          "d": "占增量 18%"
        },
        {
          "nm": "社媒互动",
          "en": "Social",
          "val": 61,
          "w": 34,
          "d": "占增量 12%"
        },
        {
          "nm": "付费投放",
          "en": "Paid",
          "val": 38,
          "w": 21,
          "d": "占增量 8%"
        }
      ],
      "metaLeft": "IGNIS — 燃点 · 增量归因排行",
      "metaMid": "把钱押在第一名上"
    }
  },
  {
    "key": "theme11_page065",
    "themeKey": "theme11",
    "pageNumber": 65,
    "layout": "THEME11-065",
    "slot": "page65",
    "label": "封面",
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
        "key": "surface",
        "label": "背景基调",
        "type": "select",
        "default": "ink",
        "options": [
          {
            "value": "ink",
            "label": "深色"
          },
          {
            "value": "paper",
            "label": "浅色"
          },
          {
            "value": "ember",
            "label": "暖橙"
          }
        ],
        "desc": "页面背景主题，用于在相邻页之间制造色彩跳跃。",
        "publicKey": "surface",
        "publicLabel": "背景基调",
        "description": "页面背景主题，用于在相邻页之间制造色彩跳跃。"
      },
      {
        "key": "showMast",
        "label": "刊头",
        "type": "toggle",
        "default": true,
        "desc": "顶部超大刊头字。",
        "publicKey": "showMast",
        "publicLabel": "刊头",
        "description": "顶部超大刊头字。"
      },
      {
        "key": "showIssue",
        "label": "刊期行",
        "type": "toggle",
        "default": true,
        "desc": "刊头下方的刊期与署名行。",
        "publicKey": "showIssue",
        "publicLabel": "刊期行",
        "description": "刊头下方的刊期与署名行。"
      },
      {
        "key": "showDeck",
        "label": "主标语",
        "type": "toggle",
        "default": true,
        "desc": "底部的大号封面主标语。",
        "publicKey": "showDeck",
        "publicLabel": "主标语",
        "description": "底部的大号封面主标语。"
      },
      {
        "key": "showLines",
        "label": "导读条目",
        "type": "toggle",
        "default": true,
        "desc": "右下角的封面导读条目列表。",
        "publicKey": "showLines",
        "publicLabel": "导读条目",
        "description": "右下角的封面导读条目列表。"
      },
      {
        "key": "lineCount",
        "label": "导读数量",
        "type": "slider",
        "default": 4,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "封面导读条目的数量。",
        "publicKey": "itemCount",
        "publicLabel": "导读数量",
        "description": "封面导读条目的数量。"
      },
      {
        "key": "showBarcode",
        "label": "条码装饰",
        "type": "toggle",
        "default": true,
        "desc": "杂志封面式的条码装饰。",
        "publicKey": "showBarcode",
        "publicLabel": "条码装饰",
        "description": "杂志封面式的条码装饰。"
      },
      {
        "key": "showScrim",
        "label": "压暗叠层",
        "type": "toggle",
        "default": true,
        "desc": "图上的压暗渐变，保证文字可读。",
        "publicKey": "showScrim",
        "publicLabel": "压暗叠层",
        "description": "图上的压暗渐变，保证文字可读。"
      },
      {
        "key": "showGhostMark",
        "label": "背景大字符",
        "type": "toggle",
        "default": true,
        "desc": "角落超大幽灵字符装饰。",
        "publicKey": "showGhostMark",
        "publicLabel": "背景大字符",
        "description": "角落超大幽灵字符装饰。"
      },
      {
        "key": "showMeta",
        "label": "底部信息条",
        "type": "toggle",
        "default": true,
        "desc": "底部页脚信息（融入封面，简化呈现）。",
        "publicKey": "showMeta",
        "publicLabel": "底部信息条",
        "description": "底部页脚信息（融入封面，简化呈现）。"
      }
    ],
    "defaultProps": {
      "surface": "ink",
      "images": [],
      "backgroundMode": "unicorn",
      "unicornScene": "tech",
      "showMast": true,
      "showIssue": true,
      "showDeck": true,
      "showLines": true,
      "lineCount": 4,
      "showBarcode": true,
      "showScrim": true,
      "showGhostMark": true,
      "showMeta": true,
      "ghostMark": "★",
      "imagePlaceholder": "封面满铺大图",
      "topLeft": "IGNIS QUARTERLY · 增长志",
      "topRight": "第 04 期 · 2026 春",
      "mastHtml": "燃<em>点</em>",
      "issueSegs": [
        "AI 增长引擎",
        "The growth issue",
        "¥0 · 免费阅"
      ],
      "deckHtml": "把营销，<br>做成<b>一台会复利的增长机器</b>。",
      "lines": [
        {
          "k": "P.182",
          "t": "一年增长 182% 的复盘"
        },
        {
          "k": "P.58",
          "t": "把流量买回来，不如长出来"
        },
        {
          "k": "P.24",
          "t": "14 天见效的接入手册"
        },
        {
          "k": "P.09",
          "t": "为什么自然资产是底盘"
        }
      ],
      "metaLeft": "IGNIS — 燃点 · 增长志封面"
    }
  },
  {
    "key": "theme11_page066",
    "themeKey": "theme11",
    "pageNumber": 66,
    "layout": "THEME11-066",
    "slot": "page66",
    "label": "跃迁",
    "bgClass": "",
    "controls": [
      {
        "key": "surface",
        "label": "背景基调",
        "type": "select",
        "default": "paper",
        "options": [
          {
            "value": "ink",
            "label": "深色"
          },
          {
            "value": "paper",
            "label": "浅色"
          },
          {
            "value": "ember",
            "label": "暖橙"
          }
        ],
        "desc": "页面背景主题，用于在相邻页之间制造色彩跳跃。",
        "publicKey": "surface",
        "publicLabel": "背景基调",
        "description": "页面背景主题，用于在相邻页之间制造色彩跳跃。"
      },
      {
        "key": "lineCount",
        "label": "指标数量",
        "type": "slider",
        "default": 5,
        "min": 3,
        "max": 5,
        "step": 1,
        "desc": "参与前后对比的指标（斜线）数量。",
        "publicKey": "lineCount",
        "publicLabel": "指标数量",
        "description": "参与前后对比的指标（斜线）数量。"
      },
      {
        "key": "emphasis",
        "label": "重点突出",
        "type": "toggle",
        "default": false,
        "desc": "开启后突出某一条斜线，其余弱化。",
        "publicKey": "emphasis",
        "publicLabel": "重点突出",
        "description": "开启后突出某一条斜线，其余弱化。"
      },
      {
        "key": "emphasisIndex",
        "label": "重点序号",
        "type": "slider",
        "default": 0,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "需要突出的指标序号（从 0 起）。",
        "publicKey": "emphasisIndex",
        "publicLabel": "重点序号",
        "description": "需要突出的指标序号（从 0 起）。"
      },
      {
        "key": "showValues",
        "label": "端点数值",
        "type": "toggle",
        "default": true,
        "desc": "斜线两端的数值标注。",
        "publicKey": "showValueLabels",
        "publicLabel": "端点数值",
        "description": "斜线两端的数值标注。"
      },
      {
        "key": "showAxisLabels",
        "label": "轴标签",
        "type": "toggle",
        "default": true,
        "desc": "左右两端「接入前 / 接入后」轴标签。",
        "publicKey": "showAxisLabels",
        "publicLabel": "轴标签",
        "description": "左右两端「接入前 / 接入后」轴标签。"
      },
      {
        "key": "showKeys",
        "label": "指标图例",
        "type": "toggle",
        "default": true,
        "desc": "左侧带变化量的指标图例清单。",
        "publicKey": "showKeys",
        "publicLabel": "指标图例",
        "description": "左侧带变化量的指标图例清单。"
      },
      {
        "key": "showKicker",
        "label": "装饰副标题",
        "type": "toggle",
        "default": true,
        "desc": "主标题上方的装饰标签。",
        "publicKey": "showKicker",
        "publicLabel": "装饰副标题",
        "description": "主标题上方的装饰标签。"
      },
      {
        "key": "showLede",
        "label": "说明文案",
        "type": "toggle",
        "default": true,
        "desc": "主标题下方的说明段落。",
        "publicKey": "showLede",
        "publicLabel": "说明文案",
        "description": "主标题下方的说明段落。"
      },
      {
        "key": "showGhostMark",
        "label": "背景大字符",
        "type": "toggle",
        "default": true,
        "desc": "角落超大幽灵字符装饰。",
        "publicKey": "showGhostMark",
        "publicLabel": "背景大字符",
        "description": "角落超大幽灵字符装饰。"
      },
      {
        "key": "showScaffold",
        "label": "边框骨架",
        "type": "toggle",
        "default": true,
        "desc": "侧边竖排标签与四角括线。",
        "publicKey": "showScaffold",
        "publicLabel": "边框骨架",
        "description": "侧边竖排标签与四角括线。"
      },
      {
        "key": "showMeta",
        "label": "底部信息条",
        "type": "toggle",
        "default": true,
        "desc": "底部页脚信息与进度条。",
        "publicKey": "showMeta",
        "publicLabel": "底部信息条",
        "description": "底部页脚信息与进度条。"
      }
    ],
    "defaultProps": {
      "surface": "paper",
      "lineCount": 5,
      "emphasis": false,
      "emphasisIndex": 0,
      "showValues": true,
      "showAxisLabels": true,
      "showKeys": true,
      "showKicker": true,
      "showLede": true,
      "showGhostMark": true,
      "showScaffold": true,
      "showMeta": true,
      "ghostMark": "⟋",
      "railText": "Slope — 跃迁",
      "navItems": [
        "跃迁"
      ],
      "navCurrent": 0,
      "ixNo": "62",
      "ixLabel": "Slope",
      "eyebrowNo": "跃迁",
      "eyebrowEn": "Before → After",
      "headingHtml": "五条线，<br><span class=\"ign-ember-text\">同时拐了个弯</span>。",
      "lede": "接入前后各取一刻，斜率越陡，变化越猛——好指标向上，成本指标向下。",
      "axisBeforeHtml": "接入<b>前</b>",
      "axisAfterHtml": "接入<b>后</b>",
      "metrics": [
        {
          "nm": "自然流量",
          "b": 26,
          "a": 92,
          "kind": "lead"
        },
        {
          "nm": "转化率",
          "b": 34,
          "a": 71,
          "kind": "mid"
        },
        {
          "nm": "复购率",
          "b": 41,
          "a": 64,
          "kind": "mid"
        },
        {
          "nm": "获客成本",
          "b": 78,
          "a": 38,
          "kind": "low"
        },
        {
          "nm": "跳出率",
          "b": 70,
          "a": 33,
          "kind": "low"
        }
      ],
      "metaLeft": "IGNIS — 燃点 · 接入前后跃迁",
      "metaMid": "陡的那条，是自然流量"
    }
  },
  {
    "key": "theme11_page067",
    "themeKey": "theme11",
    "pageNumber": 67,
    "layout": "THEME11-067",
    "slot": "page67",
    "label": "术语",
    "bgClass": "",
    "controls": [
      {
        "key": "surface",
        "label": "背景基调",
        "type": "select",
        "default": "ember",
        "options": [
          {
            "value": "ink",
            "label": "深色"
          },
          {
            "value": "paper",
            "label": "浅色"
          },
          {
            "value": "ember",
            "label": "暖橙"
          }
        ],
        "desc": "页面背景主题，用于在相邻页之间制造色彩跳跃。",
        "publicKey": "surface",
        "publicLabel": "背景基调",
        "description": "页面背景主题，用于在相邻页之间制造色彩跳跃。"
      },
      {
        "key": "rowCount",
        "label": "词条数量",
        "type": "slider",
        "default": 5,
        "min": 3,
        "max": 5,
        "step": 1,
        "desc": "术语定义的词条数量。",
        "publicKey": "rowCount",
        "publicLabel": "词条数量",
        "description": "术语定义的词条数量。"
      },
      {
        "key": "showNumbers",
        "label": "词条序号",
        "type": "toggle",
        "default": true,
        "desc": "每条左侧的序号。",
        "publicKey": "showNumbers",
        "publicLabel": "词条序号",
        "description": "每条左侧的序号。"
      },
      {
        "key": "showEnTerm",
        "label": "英文术语",
        "type": "toggle",
        "default": true,
        "desc": "中文术语下方的英文对照。",
        "publicKey": "showEnTerm",
        "publicLabel": "英文术语",
        "description": "中文术语下方的英文对照。"
      },
      {
        "key": "emphasis",
        "label": "重点突出",
        "type": "toggle",
        "default": false,
        "desc": "开启后突出某一词条，其余弱化。",
        "publicKey": "emphasis",
        "publicLabel": "重点突出",
        "description": "开启后突出某一词条，其余弱化。"
      },
      {
        "key": "emphasisIndex",
        "label": "重点序号",
        "type": "slider",
        "default": 0,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "需要突出的词条序号（从 0 起）。",
        "publicKey": "emphasisIndex",
        "publicLabel": "重点序号",
        "description": "需要突出的词条序号（从 0 起）。"
      },
      {
        "key": "showNote",
        "label": "右上注释",
        "type": "toggle",
        "default": true,
        "desc": "标题右侧的衬线注释。",
        "publicKey": "showNote",
        "publicLabel": "右上注释",
        "description": "标题右侧的衬线注释。"
      },
      {
        "key": "showKicker",
        "label": "装饰副标题",
        "type": "toggle",
        "default": true,
        "desc": "主标题上方的装饰标签。",
        "publicKey": "showKicker",
        "publicLabel": "装饰副标题",
        "description": "主标题上方的装饰标签。"
      },
      {
        "key": "showGhostMark",
        "label": "背景大字符",
        "type": "toggle",
        "default": true,
        "desc": "角落超大幽灵字符装饰。",
        "publicKey": "showGhostMark",
        "publicLabel": "背景大字符",
        "description": "角落超大幽灵字符装饰。"
      },
      {
        "key": "showScaffold",
        "label": "边框骨架",
        "type": "toggle",
        "default": true,
        "desc": "侧边竖排标签与四角括线。",
        "publicKey": "showScaffold",
        "publicLabel": "边框骨架",
        "description": "侧边竖排标签与四角括线。"
      },
      {
        "key": "showMeta",
        "label": "底部信息条",
        "type": "toggle",
        "default": true,
        "desc": "底部页脚信息与进度条。",
        "publicKey": "showMeta",
        "publicLabel": "底部信息条",
        "description": "底部页脚信息与进度条。"
      }
    ],
    "defaultProps": {
      "surface": "ember",
      "rowCount": 5,
      "showNumbers": true,
      "showEnTerm": true,
      "emphasis": false,
      "emphasisIndex": 0,
      "showNote": true,
      "showKicker": true,
      "showGhostMark": true,
      "showScaffold": true,
      "showMeta": true,
      "ghostMark": "A→Z",
      "railText": "Lexicon — 术语",
      "navItems": [
        "术语"
      ],
      "navCurrent": 0,
      "ixNo": "63",
      "ixLabel": "Lexicon",
      "eyebrowNo": "先对齐词",
      "eyebrowEn": "Speak the same language",
      "headingHtml": "同一套词，<span class=\"ign-ember-text\">才聊得到一块</span>。",
      "noteHtml": "五个关键词<br>读懂它们，就读懂了燃点怎么干活。",
      "terms": [
        {
          "t": "增长资产",
          "e": "Growth Asset",
          "d": "不随投放停摆而消失的东西——内容、口碑、自然排名。<b>越攒越多，不花钱也在涨。</b>"
        },
        {
          "t": "复利留存",
          "e": "Compounding",
          "d": "老用户带新用户、内容带流量，<b>增长自己滚增长</b>，而不是每月从零开始买。"
        },
        {
          "t": "单一看板",
          "e": "One Dashboard",
          "d": "把散落的报表收成一块板，<b>直接对齐利润</b>，而不是对齐点击与曝光。"
        },
        {
          "t": "接入即用",
          "e": "Plug-in",
          "d": "不改你的组织、不换你的系统，<b>14 天接上就跑</b>，增长团队即插即用。"
        },
        {
          "t": "自然托底",
          "e": "Organic Floor",
          "d": "投放是油门，自然流量是底盘；<b>停了投放也不至于归零</b>。"
        }
      ],
      "metaLeft": "IGNIS — 燃点 · 关键词表",
      "metaMid": "词对了，事就顺了"
    }
  },
  {
    "key": "theme11_page068",
    "themeKey": "theme11",
    "pageNumber": 68,
    "layout": "THEME11-068",
    "slot": "page68",
    "label": "序列",
    "bgClass": "",
    "controls": [
      {
        "key": "surface",
        "label": "背景基调",
        "type": "select",
        "default": "ink",
        "options": [
          {
            "value": "ink",
            "label": "深色"
          },
          {
            "value": "paper",
            "label": "浅色"
          },
          {
            "value": "ember",
            "label": "暖橙"
          }
        ],
        "desc": "页面背景主题，用于在相邻页之间制造色彩跳跃。",
        "publicKey": "surface",
        "publicLabel": "背景基调",
        "description": "页面背景主题，用于在相邻页之间制造色彩跳跃。"
      },
      {
        "key": "frameCount",
        "label": "画格数量",
        "type": "slider",
        "default": 5,
        "min": 3,
        "max": 5,
        "step": 1,
        "desc": "胶片画格的数量。",
        "publicKey": "frameCount",
        "publicLabel": "画格数量",
        "description": "胶片画格的数量。"
      },
      {
        "key": "emphasis",
        "label": "重点突出",
        "type": "toggle",
        "default": false,
        "desc": "开启后高亮某一画格的边框与说明。",
        "publicKey": "emphasis",
        "publicLabel": "重点突出",
        "description": "开启后高亮某一画格的边框与说明。"
      },
      {
        "key": "emphasisIndex",
        "label": "重点序号",
        "type": "slider",
        "default": 0,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "需要突出的画格序号（从 0 起）。",
        "publicKey": "emphasisIndex",
        "publicLabel": "重点序号",
        "description": "需要突出的画格序号（从 0 起）。"
      },
      {
        "key": "showPerf",
        "label": "齿孔",
        "type": "toggle",
        "default": true,
        "desc": "胶片上下的齿孔装饰。",
        "publicKey": "showPerf",
        "publicLabel": "齿孔",
        "description": "胶片上下的齿孔装饰。"
      },
      {
        "key": "showCaptions",
        "label": "画格说明",
        "type": "toggle",
        "default": true,
        "desc": "每个画格下方的编号说明。",
        "publicKey": "showCaptions",
        "publicLabel": "画格说明",
        "description": "每个画格下方的编号说明。"
      },
      {
        "key": "showNote",
        "label": "右上注释",
        "type": "toggle",
        "default": true,
        "desc": "标题右侧的衬线注释。",
        "publicKey": "showNote",
        "publicLabel": "右上注释",
        "description": "标题右侧的衬线注释。"
      },
      {
        "key": "showKicker",
        "label": "装饰副标题",
        "type": "toggle",
        "default": true,
        "desc": "主标题上方的装饰标签。",
        "publicKey": "showKicker",
        "publicLabel": "装饰副标题",
        "description": "主标题上方的装饰标签。"
      },
      {
        "key": "showGhostMark",
        "label": "背景大字符",
        "type": "toggle",
        "default": true,
        "desc": "角落超大幽灵字符装饰。",
        "publicKey": "showGhostMark",
        "publicLabel": "背景大字符",
        "description": "角落超大幽灵字符装饰。"
      },
      {
        "key": "showScaffold",
        "label": "边框骨架",
        "type": "toggle",
        "default": true,
        "desc": "侧边竖排标签与四角括线。",
        "publicKey": "showScaffold",
        "publicLabel": "边框骨架",
        "description": "侧边竖排标签与四角括线。"
      },
      {
        "key": "showMeta",
        "label": "底部信息条",
        "type": "toggle",
        "default": true,
        "desc": "底部页脚信息与进度条。",
        "publicKey": "showMeta",
        "publicLabel": "底部信息条",
        "description": "底部页脚信息与进度条。"
      }
    ],
    "defaultProps": {
      "surface": "ink",
      "frameCount": 5,
      "images": [],
      "emphasis": false,
      "emphasisIndex": 0,
      "showPerf": true,
      "showCaptions": true,
      "showNote": true,
      "showKicker": true,
      "showGhostMark": true,
      "showScaffold": true,
      "showMeta": true,
      "ghostMark": "►",
      "railText": "Reel — 序列",
      "navItems": [
        "序列"
      ],
      "navCurrent": 0,
      "ixNo": "64",
      "ixLabel": "Reel",
      "eyebrowNo": "一卷到底",
      "eyebrowEn": "One reel, start to scale",
      "headingHtml": "增长不是一帧，<span class=\"ign-ember-text\">是连起来的一卷</span>。",
      "noteHtml": "从诊断到复利<br>每一格都接得上一格。",
      "frames": [
        {
          "ph": "诊断",
          "tx": "盘清家底，找出漏点"
        },
        {
          "ph": "搭建",
          "tx": "接入引擎，铺好资产"
        },
        {
          "ph": "点火",
          "tx": "内容投放，同时起跑"
        },
        {
          "ph": "复盘",
          "tx": "看板对齐，持续加注"
        },
        {
          "ph": "复利",
          "tx": "自然滚大，越跑越省"
        }
      ],
      "metaLeft": "IGNIS — 燃点 · 增长序列",
      "metaMid": "连起来看，才看得懂"
    }
  },
  {
    "key": "theme11_page069",
    "themeKey": "theme11",
    "pageNumber": 69,
    "layout": "THEME11-069",
    "slot": "page69",
    "label": "收束",
    "bgClass": "",
    "controls": [
      {
        "key": "surface",
        "label": "背景基调",
        "type": "select",
        "default": "paper",
        "options": [
          {
            "value": "ink",
            "label": "深色"
          },
          {
            "value": "paper",
            "label": "浅色"
          },
          {
            "value": "ember",
            "label": "暖橙"
          }
        ],
        "desc": "页面背景主题，用于在相邻页之间制造色彩跳跃。",
        "publicKey": "surface",
        "publicLabel": "背景基调",
        "description": "页面背景主题，用于在相邻页之间制造色彩跳跃。"
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
        "desc": "收束语的对齐方向。",
        "publicKey": "align",
        "publicLabel": "对齐方式",
        "description": "收束语的对齐方向。"
      },
      {
        "key": "showKicker",
        "label": "装饰副标题",
        "type": "toggle",
        "default": true,
        "desc": "金句上方的装饰标签。",
        "publicKey": "showKicker",
        "publicLabel": "装饰副标题",
        "description": "金句上方的装饰标签。"
      },
      {
        "key": "showArrow",
        "label": "箭头母题",
        "type": "toggle",
        "default": true,
        "desc": "句末的箭头母题。",
        "publicKey": "showArrow",
        "publicLabel": "箭头母题",
        "description": "句末的箭头母题。"
      },
      {
        "key": "showRule",
        "label": "细分隔线",
        "type": "toggle",
        "default": true,
        "desc": "金句下方的细分隔线。",
        "publicKey": "showRule",
        "publicLabel": "细分隔线",
        "description": "金句下方的细分隔线。"
      },
      {
        "key": "showSignoff",
        "label": "署名",
        "type": "toggle",
        "default": true,
        "desc": "分隔线旁的品牌署名。",
        "publicKey": "showSignoff",
        "publicLabel": "署名",
        "description": "分隔线旁的品牌署名。"
      },
      {
        "key": "showGhostMark",
        "label": "背景大字符",
        "type": "toggle",
        "default": true,
        "desc": "角落超大幽灵字符装饰。",
        "publicKey": "showGhostMark",
        "publicLabel": "背景大字符",
        "description": "角落超大幽灵字符装饰。"
      },
      {
        "key": "showScaffold",
        "label": "边框骨架",
        "type": "toggle",
        "default": true,
        "desc": "侧边竖排标签与四角括线。",
        "publicKey": "showScaffold",
        "publicLabel": "边框骨架",
        "description": "侧边竖排标签与四角括线。"
      },
      {
        "key": "showMeta",
        "label": "底部信息条",
        "type": "toggle",
        "default": true,
        "desc": "底部页脚信息与进度条。",
        "publicKey": "showMeta",
        "publicLabel": "底部信息条",
        "description": "底部页脚信息与进度条。"
      }
    ],
    "defaultProps": {
      "surface": "paper",
      "align": "left",
      "showKicker": true,
      "showArrow": true,
      "showRule": true,
      "showSignoff": true,
      "showGhostMark": true,
      "showScaffold": true,
      "showMeta": true,
      "ghostMark": "→",
      "railText": "Coda — 收束",
      "navItems": [
        "收束"
      ],
      "navCurrent": 0,
      "ixNo": "65",
      "ixLabel": "Coda",
      "kickerNo": "最后一句",
      "kickerEn": "Before we hand it over",
      "quoteHtml": "别再为流量<span class=\"ign-serif\">付租金</span>，<br>是时候<span class=\"ign-ember-text\">盖一栋自己的楼</span>",
      "arrowGlyph": "→",
      "signoffHtml": "IGNIS <b>燃点</b> · 用数据，点燃增长",
      "metaLeft": "IGNIS — 燃点 · 收束语",
      "metaMid": "下一页，见真章"
    }
  },
  {
    "key": "theme11_page070",
    "themeKey": "theme11",
    "pageNumber": 70,
    "layout": "THEME11-070",
    "slot": "page70",
    "label": "旅程",
    "bgClass": "",
    "controls": [
      {
        "key": "surface",
        "label": "背景基调",
        "type": "select",
        "default": "ink",
        "options": [
          {
            "value": "ink",
            "label": "深色"
          },
          {
            "value": "paper",
            "label": "浅色"
          },
          {
            "value": "ember",
            "label": "暖橙"
          }
        ],
        "desc": "页面背景主题，用于在相邻页之间制造色彩跳跃。",
        "publicKey": "surface",
        "publicLabel": "背景基调",
        "description": "页面背景主题，用于在相邻页之间制造色彩跳跃。"
      },
      {
        "key": "screenCount",
        "label": "屏幕数量",
        "type": "slider",
        "default": 4,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "横向排列的手机屏数量（流程步数）。",
        "publicKey": "screenCount",
        "publicLabel": "屏幕数量",
        "description": "横向排列的手机屏数量（流程步数）。"
      },
      {
        "key": "showArrows",
        "label": "连接箭头",
        "type": "toggle",
        "default": true,
        "desc": "屏与屏之间的流向箭头。",
        "publicKey": "showArrows",
        "publicLabel": "连接箭头",
        "description": "屏与屏之间的流向箭头。"
      },
      {
        "key": "showSteps",
        "label": "步骤序号",
        "type": "toggle",
        "default": true,
        "desc": "每屏下方的步骤序号。",
        "publicKey": "showSteps",
        "publicLabel": "步骤序号",
        "description": "每屏下方的步骤序号。"
      },
      {
        "key": "showCaptions",
        "label": "步骤说明",
        "type": "toggle",
        "default": true,
        "desc": "每屏下方的一句话说明。",
        "publicKey": "showCaptions",
        "publicLabel": "步骤说明",
        "description": "每屏下方的一句话说明。"
      },
      {
        "key": "emphasis",
        "label": "重点突出",
        "type": "toggle",
        "default": false,
        "desc": "开启后突出某一屏，其余弱化。",
        "publicKey": "emphasis",
        "publicLabel": "重点突出",
        "description": "开启后突出某一屏，其余弱化。"
      },
      {
        "key": "emphasisIndex",
        "label": "重点序号",
        "type": "slider",
        "default": 0,
        "min": 0,
        "max": 3,
        "step": 1,
        "desc": "需要突出的屏序号（从 0 起）。",
        "publicKey": "emphasisIndex",
        "publicLabel": "重点序号",
        "description": "需要突出的屏序号（从 0 起）。"
      },
      {
        "key": "showKicker",
        "label": "装饰副标题",
        "type": "toggle",
        "default": true,
        "desc": "主标题上方的装饰标签。",
        "publicKey": "showKicker",
        "publicLabel": "装饰副标题",
        "description": "主标题上方的装饰标签。"
      },
      {
        "key": "showGhostMark",
        "label": "背景大字符",
        "type": "toggle",
        "default": true,
        "desc": "角落超大幽灵字符装饰。",
        "publicKey": "showGhostMark",
        "publicLabel": "背景大字符",
        "description": "角落超大幽灵字符装饰。"
      },
      {
        "key": "showScaffold",
        "label": "边框骨架",
        "type": "toggle",
        "default": true,
        "desc": "侧边竖排标签与四角括线。",
        "publicKey": "showScaffold",
        "publicLabel": "边框骨架",
        "description": "侧边竖排标签与四角括线。"
      },
      {
        "key": "showMeta",
        "label": "底部信息条",
        "type": "toggle",
        "default": true,
        "desc": "底部页脚信息与进度条。",
        "publicKey": "showMeta",
        "publicLabel": "底部信息条",
        "description": "底部页脚信息与进度条。"
      }
    ],
    "defaultProps": {
      "surface": "ink",
      "screenCount": 4,
      "images": [],
      "showArrows": true,
      "showSteps": true,
      "showCaptions": true,
      "emphasis": false,
      "emphasisIndex": 0,
      "showKicker": true,
      "showGhostMark": true,
      "showScaffold": true,
      "showMeta": true,
      "ghostMark": "→",
      "railText": "Flow — 旅程",
      "navItems": [
        "旅程"
      ],
      "navCurrent": 0,
      "ixNo": "66",
      "ixLabel": "Flow",
      "eyebrowNo": "用户旅程",
      "eyebrowEn": "The journey",
      "headingHtml": "从被看见，<span class=\"ign-ember-text\">到留下来</span>。",
      "noteHtml": "同一条路径，<br>每一屏都在替转化让路。",
      "stepLabel": "STEP",
      "arrowGlyph": "→",
      "steps": [
        {
          "t": "看见",
          "d": "一次精准曝光，把对的人引到对的入口。"
        },
        {
          "t": "进入",
          "d": "落地页直给价值，3 秒内说清「为什么是你」。"
        },
        {
          "t": "行动",
          "d": "路径无摩擦，把犹豫拦在按钮之前。"
        },
        {
          "t": "复购",
          "d": "私域承接沉淀，把一次成交变成复利。"
        }
      ],
      "metaLeft": "IGNIS — 燃点 · 用户旅程",
      "metaMid": "每一屏都在替转化让路"
    }
  },
  {
    "key": "theme11_page071",
    "themeKey": "theme11",
    "pageNumber": 71,
    "layout": "THEME11-071",
    "slot": "page71",
    "label": "量级",
    "bgClass": "",
    "controls": [
      {
        "key": "surface",
        "label": "背景基调",
        "type": "select",
        "default": "paper",
        "options": [
          {
            "value": "ink",
            "label": "深色"
          },
          {
            "value": "paper",
            "label": "浅色"
          },
          {
            "value": "ember",
            "label": "暖橙"
          }
        ],
        "desc": "页面背景主题，用于在相邻页之间制造色彩跳跃。",
        "publicKey": "surface",
        "publicLabel": "背景基调",
        "description": "页面背景主题，用于在相邻页之间制造色彩跳跃。"
      },
      {
        "key": "itemCount",
        "label": "条目数量",
        "type": "slider",
        "default": 6,
        "min": 3,
        "max": 6,
        "step": 1,
        "desc": "棒棒糖条目数量（自高到低）。",
        "publicKey": "itemCount",
        "publicLabel": "条目数量",
        "description": "棒棒糖条目数量（自高到低）。"
      },
      {
        "key": "emphasis",
        "label": "榜首突出",
        "type": "toggle",
        "default": true,
        "desc": "开启后榜首点亮为暖橙并放大圆点，其余弱化。",
        "publicKey": "emphasis",
        "publicLabel": "榜首突出",
        "description": "开启后榜首点亮为暖橙并放大圆点，其余弱化。"
      },
      {
        "key": "emphasisIndex",
        "label": "重点序号",
        "type": "slider",
        "default": 0,
        "min": 0,
        "max": 5,
        "step": 1,
        "desc": "需要突出的条目序号（从 0 起）。",
        "publicKey": "emphasisIndex",
        "publicLabel": "重点序号",
        "description": "需要突出的条目序号（从 0 起）。"
      },
      {
        "key": "showValues",
        "label": "数值标注",
        "type": "toggle",
        "default": true,
        "desc": "每行右侧的数值。",
        "publicKey": "showValueLabels",
        "publicLabel": "数值标注",
        "description": "每行右侧的数值。"
      },
      {
        "key": "showGrid",
        "label": "刻度网格",
        "type": "toggle",
        "default": true,
        "desc": "背景的纵向刻度线与轴标。",
        "publicKey": "showGrid",
        "publicLabel": "刻度网格",
        "description": "背景的纵向刻度线与轴标。"
      },
      {
        "key": "showKicker",
        "label": "装饰副标题",
        "type": "toggle",
        "default": true,
        "desc": "主标题上方的装饰标签。",
        "publicKey": "showKicker",
        "publicLabel": "装饰副标题",
        "description": "主标题上方的装饰标签。"
      },
      {
        "key": "showLede",
        "label": "右上注释",
        "type": "toggle",
        "default": true,
        "desc": "标题右侧的衬线注释。",
        "publicKey": "showLede",
        "publicLabel": "右上注释",
        "description": "标题右侧的衬线注释。"
      },
      {
        "key": "showGhostMark",
        "label": "背景大字符",
        "type": "toggle",
        "default": true,
        "desc": "角落超大幽灵字符装饰。",
        "publicKey": "showGhostMark",
        "publicLabel": "背景大字符",
        "description": "角落超大幽灵字符装饰。"
      },
      {
        "key": "showScaffold",
        "label": "边框骨架",
        "type": "toggle",
        "default": true,
        "desc": "侧边竖排标签与四角括线。",
        "publicKey": "showScaffold",
        "publicLabel": "边框骨架",
        "description": "侧边竖排标签与四角括线。"
      },
      {
        "key": "showMeta",
        "label": "底部信息条",
        "type": "toggle",
        "default": true,
        "desc": "底部页脚信息与进度条。",
        "publicKey": "showMeta",
        "publicLabel": "底部信息条",
        "description": "底部页脚信息与进度条。"
      }
    ],
    "defaultProps": {
      "surface": "paper",
      "itemCount": 6,
      "emphasis": true,
      "emphasisIndex": 0,
      "showValues": true,
      "showGrid": true,
      "showKicker": true,
      "showLede": true,
      "showGhostMark": true,
      "showScaffold": true,
      "showMeta": true,
      "ghostMark": "＋",
      "railText": "Lollipop — 量级",
      "navItems": [
        "量级"
      ],
      "navCurrent": 0,
      "ixNo": "67",
      "ixLabel": "Lollipop",
      "eyebrowNo": "渠道量级",
      "eyebrowEn": "Lift by channel",
      "headingHtml": "同一个口径，<span class=\"ign-ember-text\">量级一目了然</span>。",
      "noteHtml": "12 个月增量指数<br>（基线 = 100，越远越强）。",
      "rows": [
        {
          "nm": "自然搜索",
          "en": "Organic",
          "val": 182
        },
        {
          "nm": "内容矩阵",
          "en": "Content",
          "val": 138
        },
        {
          "nm": "私域复购",
          "en": "Retention",
          "val": 104
        },
        {
          "nm": "社媒互动",
          "en": "Social",
          "val": 72
        },
        {
          "nm": "联盟分发",
          "en": "Affiliate",
          "val": 49
        },
        {
          "nm": "付费投放",
          "en": "Paid",
          "val": 31
        }
      ],
      "metaLeft": "IGNIS — 燃点 · 渠道增量量级（指数化）",
      "metaMid": "越远的那颗，越值得加注"
    }
  },
  {
    "key": "theme11_page072",
    "themeKey": "theme11",
    "pageNumber": 72,
    "layout": "THEME11-072",
    "slot": "page72",
    "label": "累计",
    "bgClass": "",
    "controls": [
      {
        "key": "surface",
        "label": "背景基调",
        "type": "select",
        "default": "ember",
        "options": [
          {
            "value": "ink",
            "label": "深色"
          },
          {
            "value": "paper",
            "label": "浅色"
          },
          {
            "value": "ember",
            "label": "暖橙"
          }
        ],
        "desc": "页面背景主题，用于在相邻页之间制造色彩跳跃。",
        "publicKey": "surface",
        "publicLabel": "背景基调",
        "description": "页面背景主题，用于在相邻页之间制造色彩跳跃。"
      },
      {
        "key": "subStatCount",
        "label": "辅助数据",
        "type": "slider",
        "default": 3,
        "min": 1,
        "max": 3,
        "step": 1,
        "desc": "左侧贡献分项的数量。",
        "publicKey": "subStatCount",
        "publicLabel": "辅助数据",
        "description": "左侧贡献分项的数量。"
      },
      {
        "key": "showPrefix",
        "label": "数字前缀",
        "type": "toggle",
        "default": true,
        "desc": "大数字上方的口径前缀。",
        "publicKey": "showPrefix",
        "publicLabel": "数字前缀",
        "description": "大数字上方的口径前缀。"
      },
      {
        "key": "showUnit",
        "label": "数字单位",
        "type": "toggle",
        "default": true,
        "desc": "大数字右侧的单位。",
        "publicKey": "showUnit",
        "publicLabel": "数字单位",
        "description": "大数字右侧的单位。"
      },
      {
        "key": "showCaption",
        "label": "底部标记",
        "type": "toggle",
        "default": true,
        "desc": "大数字下方的口径与增长胶囊标记。",
        "publicKey": "showCaption",
        "publicLabel": "底部标记",
        "description": "大数字下方的口径与增长胶囊标记。"
      },
      {
        "key": "showSubStats",
        "label": "辅助清单",
        "type": "toggle",
        "default": true,
        "desc": "左侧带数值的贡献分项清单。",
        "publicKey": "showValueLabels",
        "publicLabel": "辅助清单",
        "description": "左侧带数值的贡献分项清单。"
      },
      {
        "key": "showKicker",
        "label": "装饰副标题",
        "type": "toggle",
        "default": true,
        "desc": "左栏顶部的装饰标签。",
        "publicKey": "showKicker",
        "publicLabel": "装饰副标题",
        "description": "左栏顶部的装饰标签。"
      },
      {
        "key": "showGhostMark",
        "label": "背景大字符",
        "type": "toggle",
        "default": true,
        "desc": "角落超大幽灵字符装饰。",
        "publicKey": "showGhostMark",
        "publicLabel": "背景大字符",
        "description": "角落超大幽灵字符装饰。"
      },
      {
        "key": "showScaffold",
        "label": "边框骨架",
        "type": "toggle",
        "default": true,
        "desc": "侧边竖排标签与四角括线。",
        "publicKey": "showScaffold",
        "publicLabel": "边框骨架",
        "description": "侧边竖排标签与四角括线。"
      },
      {
        "key": "showMeta",
        "label": "底部信息条",
        "type": "toggle",
        "default": true,
        "desc": "底部页脚信息与进度条。",
        "publicKey": "showMeta",
        "publicLabel": "底部信息条",
        "description": "底部页脚信息与进度条。"
      }
    ],
    "defaultProps": {
      "surface": "ember",
      "bigNumber": "4.7",
      "unit": "亿",
      "prefix": "累计为客户创造增量营收",
      "subStatCount": 3,
      "showPrefix": true,
      "showUnit": true,
      "showCaption": true,
      "showSubStats": true,
      "showKicker": true,
      "showGhostMark": true,
      "showScaffold": true,
      "showMeta": true,
      "ghostMark": "¥",
      "railText": "Total — 累计",
      "navItems": [
        "累计"
      ],
      "navCurrent": 0,
      "ixNo": "68",
      "ixLabel": "Total",
      "eyebrowNo": "累计至今",
      "eyebrowEn": "Compounded",
      "headingHtml": "不是一次爆发，<br><span class=\"ign-ember-text\">是攒出来的复利</span>。",
      "bodyText": "把每一次曝光的价值留住、再投资——四年下来，它长成了一个不容忽视的数字。",
      "captionText": "2,400+ 品牌 · 截至 2026 Q2",
      "captionPill": "仍在累加",
      "subs": [
        {
          "l": "自然搜索增量",
          "v": "+182%"
        },
        {
          "l": "内容资产沉淀",
          "v": "5,400 篇"
        },
        {
          "l": "私域复购占比",
          "v": "34%"
        }
      ],
      "metaLeft": "IGNIS — 燃点 · 累计创造增量营收",
      "metaMid": "攒出来的，才拿得走"
    }
  },
  {
    "key": "theme11_page073",
    "themeKey": "theme11",
    "pageNumber": 73,
    "layout": "THEME11-073",
    "slot": "page73",
    "label": "全景",
    "bgClass": "",
    "controls": [
      {
        "key": "surface",
        "label": "背景基调",
        "type": "select",
        "default": "ink",
        "options": [
          {
            "value": "ink",
            "label": "深色"
          },
          {
            "value": "paper",
            "label": "浅色"
          },
          {
            "value": "ember",
            "label": "暖橙"
          }
        ],
        "desc": "页面背景主题，用于在相邻页之间制造色彩跳跃。",
        "publicKey": "surface",
        "publicLabel": "背景基调",
        "description": "页面背景主题，用于在相邻页之间制造色彩跳跃。"
      },
      {
        "key": "showTags",
        "label": "图片角标",
        "type": "toggle",
        "default": true,
        "desc": "图片格左下角的标签。",
        "publicKey": "showTags",
        "publicLabel": "图片角标",
        "description": "图片格左下角的标签。"
      },
      {
        "key": "showStats",
        "label": "数据格",
        "type": "toggle",
        "default": true,
        "desc": "显示两个排版化数据格（关闭则全部为图片格）。",
        "publicKey": "showStats",
        "publicLabel": "数据格",
        "description": "显示两个排版化数据格（关闭则全部为图片格）。"
      },
      {
        "key": "emphasis",
        "label": "数据格点亮",
        "type": "toggle",
        "default": false,
        "desc": "开启后第一个数据格点亮为暖橙。",
        "publicKey": "emphasis",
        "publicLabel": "数据格点亮",
        "description": "开启后第一个数据格点亮为暖橙。"
      },
      {
        "key": "showKicker",
        "label": "装饰副标题",
        "type": "toggle",
        "default": true,
        "desc": "主标题上方的装饰标签。",
        "publicKey": "showKicker",
        "publicLabel": "装饰副标题",
        "description": "主标题上方的装饰标签。"
      },
      {
        "key": "showGhostMark",
        "label": "背景大字符",
        "type": "toggle",
        "default": true,
        "desc": "角落超大幽灵字符装饰。",
        "publicKey": "showGhostMark",
        "publicLabel": "背景大字符",
        "description": "角落超大幽灵字符装饰。"
      },
      {
        "key": "showScaffold",
        "label": "边框骨架",
        "type": "toggle",
        "default": true,
        "desc": "侧边竖排标签与四角括线。",
        "publicKey": "showScaffold",
        "publicLabel": "边框骨架",
        "description": "侧边竖排标签与四角括线。"
      },
      {
        "key": "showMeta",
        "label": "底部信息条",
        "type": "toggle",
        "default": true,
        "desc": "底部页脚信息与进度条。",
        "publicKey": "showMeta",
        "publicLabel": "底部信息条",
        "description": "底部页脚信息与进度条。"
      }
    ],
    "defaultProps": {
      "surface": "ink",
      "images": [],
      "showTags": true,
      "showStats": true,
      "emphasis": false,
      "showKicker": true,
      "showGhostMark": true,
      "showScaffold": true,
      "showMeta": true,
      "ghostMark": "▦",
      "railText": "Bento — 全景",
      "navItems": [
        "全景"
      ],
      "navCurrent": 0,
      "ixNo": "69",
      "ixLabel": "Bento",
      "eyebrowNo": "一屏看全",
      "eyebrowEn": "At a glance",
      "headingHtml": "画面与数字，<span class=\"ign-ember-text\">拼成一张全景</span>。",
      "noteHtml": "触点、资产、成果——<br>在同一格栅里互相印证。",
      "stats": [
        {
          "k": "Conversion",
          "v": "×3.8",
          "c": "主路径重排后的转化提升"
        },
        {
          "k": "Organic",
          "v": "+182",
          "u": "%",
          "c": "12 个月自然进线增量"
        }
      ],
      "shots": [
        "落地页",
        "私域承接",
        "内容资产"
      ],
      "metaLeft": "IGNIS — 燃点 · 增长全景",
      "metaMid": "画面会骗人，并排就不会"
    }
  },
  {
    "key": "theme11_page074",
    "themeKey": "theme11",
    "pageNumber": 74,
    "layout": "THEME11-074",
    "slot": "page74",
    "label": "排期",
    "bgClass": "",
    "controls": [
      {
        "key": "surface",
        "label": "背景基调",
        "type": "select",
        "default": "paper",
        "options": [
          {
            "value": "ink",
            "label": "深色"
          },
          {
            "value": "paper",
            "label": "浅色"
          },
          {
            "value": "ember",
            "label": "暖橙"
          }
        ],
        "desc": "页面背景主题，用于在相邻页之间制造色彩跳跃。",
        "publicKey": "surface",
        "publicLabel": "背景基调",
        "description": "页面背景主题，用于在相邻页之间制造色彩跳跃。"
      },
      {
        "key": "rowCount",
        "label": "工作流数量",
        "type": "slider",
        "default": 5,
        "min": 3,
        "max": 5,
        "step": 1,
        "desc": "排期表的工作流行数。",
        "publicKey": "rowCount",
        "publicLabel": "工作流数量",
        "description": "排期表的工作流行数。"
      },
      {
        "key": "periodCount",
        "label": "周期列数",
        "type": "slider",
        "default": 6,
        "min": 4,
        "max": 6,
        "step": 1,
        "desc": "时间轴的周期列数（月）。",
        "publicKey": "periodCount",
        "publicLabel": "周期列数",
        "description": "时间轴的周期列数（月）。"
      },
      {
        "key": "highlightRowIndex",
        "label": "高亮工作流",
        "type": "slider",
        "default": 1,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "点亮为暖橙的工作流序号（从 0 起）。",
        "publicKey": "highlightRowIndex",
        "publicLabel": "高亮工作流",
        "description": "点亮为暖橙的工作流序号（从 0 起）。"
      },
      {
        "key": "showColHeads",
        "label": "周期表头",
        "type": "toggle",
        "default": true,
        "desc": "顶部的周期列标题。",
        "publicKey": "showColHeads",
        "publicLabel": "周期表头",
        "description": "顶部的周期列标题。"
      },
      {
        "key": "showBars",
        "label": "排期色条",
        "type": "toggle",
        "default": true,
        "desc": "每行的跨周期排期色条。",
        "publicKey": "showBars",
        "publicLabel": "排期色条",
        "description": "每行的跨周期排期色条。"
      },
      {
        "key": "showMilestones",
        "label": "里程碑标记",
        "type": "toggle",
        "default": true,
        "desc": "每行的菱形里程碑标记。",
        "publicKey": "showMilestones",
        "publicLabel": "里程碑标记",
        "description": "每行的菱形里程碑标记。"
      },
      {
        "key": "showLegend",
        "label": "图例",
        "type": "toggle",
        "default": true,
        "desc": "底部的色条 / 节点 / 里程碑图例。",
        "publicKey": "showLegend",
        "publicLabel": "图例",
        "description": "底部的色条 / 节点 / 里程碑图例。"
      },
      {
        "key": "showKicker",
        "label": "装饰副标题",
        "type": "toggle",
        "default": true,
        "desc": "主标题上方的装饰标签。",
        "publicKey": "showKicker",
        "publicLabel": "装饰副标题",
        "description": "主标题上方的装饰标签。"
      },
      {
        "key": "showLede",
        "label": "右上注释",
        "type": "toggle",
        "default": true,
        "desc": "标题右侧的衬线注释。",
        "publicKey": "showLede",
        "publicLabel": "右上注释",
        "description": "标题右侧的衬线注释。"
      },
      {
        "key": "showGhostMark",
        "label": "背景大字符",
        "type": "toggle",
        "default": true,
        "desc": "角落超大幽灵字符装饰。",
        "publicKey": "showGhostMark",
        "publicLabel": "背景大字符",
        "description": "角落超大幽灵字符装饰。"
      },
      {
        "key": "showScaffold",
        "label": "边框骨架",
        "type": "toggle",
        "default": true,
        "desc": "侧边竖排标签与四角括线。",
        "publicKey": "showScaffold",
        "publicLabel": "边框骨架",
        "description": "侧边竖排标签与四角括线。"
      },
      {
        "key": "showMeta",
        "label": "底部信息条",
        "type": "toggle",
        "default": true,
        "desc": "底部页脚信息与进度条。",
        "publicKey": "showMeta",
        "publicLabel": "底部信息条",
        "description": "底部页脚信息与进度条。"
      }
    ],
    "defaultProps": {
      "surface": "paper",
      "rowCount": 5,
      "periodCount": 6,
      "highlightRowIndex": 1,
      "showColHeads": true,
      "showBars": true,
      "showMilestones": true,
      "showLegend": true,
      "showKicker": true,
      "showLede": true,
      "showGhostMark": true,
      "showScaffold": true,
      "showMeta": true,
      "ghostMark": "90d",
      "railText": "Cadence — 排期",
      "navItems": [
        "排期"
      ],
      "navCurrent": 0,
      "ixNo": "70",
      "ixLabel": "Cadence",
      "eyebrowNo": "执行排期",
      "eyebrowEn": "The schedule",
      "headingHtml": "不是 PPT 上的承诺，<span class=\"ign-ember-text\">是排进日历的事</span>。",
      "noteHtml": "六个月运行节奏<br>每条工作流都有起点与交付。",
      "legendLead": "主线工作流",
      "legendNormal": "常规工作流",
      "legendStart": "启动",
      "legendMile": "里程碑交付",
      "rows": [
        {
          "nm": "诊断与基线",
          "en": "Audit",
          "start": 1,
          "span": 2,
          "mileAt": 2,
          "ph": "建立口径"
        },
        {
          "nm": "内容与 SEO",
          "en": "Content",
          "start": 2,
          "span": 5,
          "mileAt": 4,
          "ph": "矩阵铺开"
        },
        {
          "nm": "落地页重排",
          "en": "Pages",
          "start": 2,
          "span": 3,
          "mileAt": 5,
          "ph": "转化收口"
        },
        {
          "nm": "私域承接",
          "en": "Retention",
          "start": 4,
          "span": 3,
          "mileAt": 6,
          "ph": "复利沉淀"
        },
        {
          "nm": "复盘与扩量",
          "en": "Scale",
          "start": 5,
          "span": 2,
          "mileAt": 6,
          "ph": "放大赢家"
        }
      ],
      "periods": [
        "月 1",
        "月 2",
        "月 3",
        "月 4",
        "月 5",
        "月 6"
      ],
      "metaLeft": "IGNIS — 燃点 · 六个月执行排期",
      "metaMid": "排进日历，才会发生"
    }
  },
  {
    "key": "theme11_page075",
    "themeKey": "theme11",
    "pageNumber": 75,
    "layout": "THEME11-075",
    "slot": "page75",
    "label": "达成",
    "bgClass": "",
    "controls": [
      {
        "key": "surface",
        "label": "背景基调",
        "type": "select",
        "default": "ember",
        "options": [
          {
            "value": "ink",
            "label": "深色"
          },
          {
            "value": "paper",
            "label": "浅色"
          },
          {
            "value": "ember",
            "label": "暖橙"
          }
        ],
        "desc": "页面背景主题，用于在相邻页之间制造色彩跳跃。",
        "publicKey": "surface",
        "publicLabel": "背景基调",
        "description": "页面背景主题，用于在相邻页之间制造色彩跳跃。"
      },
      {
        "key": "metricCount",
        "label": "指标数量",
        "type": "slider",
        "default": 5,
        "min": 3,
        "max": 5,
        "step": 1,
        "desc": "子弹图的指标行数。",
        "publicKey": "metricCount",
        "publicLabel": "指标数量",
        "description": "子弹图的指标行数。"
      },
      {
        "key": "emphasis",
        "label": "重点突出",
        "type": "toggle",
        "default": true,
        "desc": "开启后突出某一指标，其余弱化。",
        "publicKey": "emphasis",
        "publicLabel": "重点突出",
        "description": "开启后突出某一指标，其余弱化。"
      },
      {
        "key": "emphasisIndex",
        "label": "重点序号",
        "type": "slider",
        "default": 0,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "需要突出的指标序号（从 0 起）。",
        "publicKey": "emphasisIndex",
        "publicLabel": "重点序号",
        "description": "需要突出的指标序号（从 0 起）。"
      },
      {
        "key": "showBands",
        "label": "分级背景",
        "type": "toggle",
        "default": true,
        "desc": "每行的差/中/优分级背景带。",
        "publicKey": "showBands",
        "publicLabel": "分级背景",
        "description": "每行的差/中/优分级背景带。"
      },
      {
        "key": "showTargets",
        "label": "目标刻度",
        "type": "toggle",
        "default": true,
        "desc": "每行的纵向目标刻度线。",
        "publicKey": "showTargets",
        "publicLabel": "目标刻度",
        "description": "每行的纵向目标刻度线。"
      },
      {
        "key": "showValues",
        "label": "数值标注",
        "type": "toggle",
        "default": true,
        "desc": "每行右侧的成果数值。",
        "publicKey": "showValueLabels",
        "publicLabel": "数值标注",
        "description": "每行右侧的成果数值。"
      },
      {
        "key": "showStatus",
        "label": "达成标记",
        "type": "toggle",
        "default": true,
        "desc": "数值下方的达成 / 在途标记。",
        "publicKey": "showValueLabels2",
        "publicLabel": "达成标记",
        "description": "数值下方的达成 / 在途标记。"
      },
      {
        "key": "showKicker",
        "label": "装饰副标题",
        "type": "toggle",
        "default": true,
        "desc": "主标题上方的装饰标签。",
        "publicKey": "showKicker",
        "publicLabel": "装饰副标题",
        "description": "主标题上方的装饰标签。"
      },
      {
        "key": "showLede",
        "label": "右上注释",
        "type": "toggle",
        "default": true,
        "desc": "标题右侧的衬线注释。",
        "publicKey": "showLede",
        "publicLabel": "右上注释",
        "description": "标题右侧的衬线注释。"
      },
      {
        "key": "showGhostMark",
        "label": "背景大字符",
        "type": "toggle",
        "default": true,
        "desc": "角落超大幽灵字符装饰。",
        "publicKey": "showGhostMark",
        "publicLabel": "背景大字符",
        "description": "角落超大幽灵字符装饰。"
      },
      {
        "key": "showScaffold",
        "label": "边框骨架",
        "type": "toggle",
        "default": true,
        "desc": "侧边竖排标签与四角括线。",
        "publicKey": "showScaffold",
        "publicLabel": "边框骨架",
        "description": "侧边竖排标签与四角括线。"
      },
      {
        "key": "showMeta",
        "label": "底部信息条",
        "type": "toggle",
        "default": true,
        "desc": "底部页脚信息与进度条。",
        "publicKey": "showMeta",
        "publicLabel": "底部信息条",
        "description": "底部页脚信息与进度条。"
      }
    ],
    "defaultProps": {
      "surface": "ember",
      "metricCount": 5,
      "emphasis": true,
      "emphasisIndex": 0,
      "showBands": true,
      "showTargets": true,
      "showValues": true,
      "showStatus": true,
      "showKicker": true,
      "showLede": true,
      "showGhostMark": true,
      "showScaffold": true,
      "showMeta": true,
      "ghostMark": "◎",
      "railText": "Targets — 达成",
      "navItems": [
        "达成"
      ],
      "navCurrent": 0,
      "ixNo": "71",
      "ixLabel": "Targets",
      "eyebrowNo": "目标达成",
      "eyebrowEn": "Vs target",
      "headingHtml": "定了目标，<span class=\"ign-ember-text\">就拿数字对账</span>。",
      "noteHtml": "深条为实际，竖线为目标<br>越过线，才算交付。",
      "targetLabel": "目标",
      "statusHit": "✓ 达成",
      "statusMiss": "◷ 在途",
      "rows": [
        {
          "nm": "自然进线",
          "en": "Organic leads",
          "meas": 96,
          "target": 80,
          "b2": 55,
          "b3": 78,
          "disp": "+182",
          "u": "%",
          "hit": true
        },
        {
          "nm": "转化率",
          "en": "Conversion",
          "meas": 88,
          "target": 75,
          "b2": 50,
          "b3": 72,
          "disp": "×3.8",
          "u": "",
          "hit": true
        },
        {
          "nm": "获客成本",
          "en": "CAC ↓",
          "meas": 71,
          "target": 70,
          "b2": 45,
          "b3": 68,
          "disp": "−41",
          "u": "%",
          "hit": true
        },
        {
          "nm": "复购占比",
          "en": "Repeat rate",
          "meas": 62,
          "target": 75,
          "b2": 50,
          "b3": 72,
          "disp": "34",
          "u": "%",
          "hit": false
        },
        {
          "nm": "内容产出",
          "en": "Content velocity",
          "meas": 84,
          "target": 70,
          "b2": 48,
          "b3": 70,
          "disp": "5.4k",
          "u": "",
          "hit": true
        }
      ],
      "metaLeft": "IGNIS — 燃点 · 关键指标达成（中位样本）",
      "metaMid": "越过那条线，才算数"
    }
  },
  {
    "key": "theme11_page076",
    "themeKey": "theme11",
    "pageNumber": 76,
    "layout": "THEME11-076",
    "slot": "page76",
    "label": "案例辑",
    "bgClass": "",
    "controls": [
      {
        "key": "surface",
        "label": "背景基调",
        "type": "select",
        "default": "ink",
        "options": [
          {
            "value": "ink",
            "label": "深色"
          },
          {
            "value": "paper",
            "label": "浅色"
          },
          {
            "value": "ember",
            "label": "暖橙"
          }
        ],
        "desc": "页面背景主题，用于在相邻页之间制造色彩跳跃。",
        "publicKey": "surface",
        "publicLabel": "背景基调",
        "description": "页面背景主题，用于在相邻页之间制造色彩跳跃。"
      },
      {
        "key": "bandCount",
        "label": "条带数量",
        "type": "slider",
        "default": 3,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "纵向堆叠的图片条带数量。",
        "publicKey": "bandCount",
        "publicLabel": "条带数量",
        "description": "纵向堆叠的图片条带数量。"
      },
      {
        "key": "emphasis",
        "label": "重点突出",
        "type": "toggle",
        "default": false,
        "desc": "开启后突出某一条带，其余弱化。",
        "publicKey": "emphasis",
        "publicLabel": "重点突出",
        "description": "开启后突出某一条带，其余弱化。"
      },
      {
        "key": "emphasisIndex",
        "label": "重点序号",
        "type": "slider",
        "default": 0,
        "min": 0,
        "max": 3,
        "step": 1,
        "desc": "需要突出的条带序号（从 0 起）。",
        "publicKey": "emphasisIndex",
        "publicLabel": "重点序号",
        "description": "需要突出的条带序号（从 0 起）。"
      },
      {
        "key": "showIndex",
        "label": "序号",
        "type": "toggle",
        "default": true,
        "desc": "每条带左侧的大序号。",
        "publicKey": "showIndex",
        "publicLabel": "序号",
        "description": "每条带左侧的大序号。"
      },
      {
        "key": "showTags",
        "label": "分类标签",
        "type": "toggle",
        "default": true,
        "desc": "每条带的分类小标签。",
        "publicKey": "showTags",
        "publicLabel": "分类标签",
        "description": "每条带的分类小标签。"
      },
      {
        "key": "showCaptions",
        "label": "说明文案",
        "type": "toggle",
        "default": true,
        "desc": "每条带的一句话说明。",
        "publicKey": "showCaptions",
        "publicLabel": "说明文案",
        "description": "每条带的一句话说明。"
      },
      {
        "key": "showKpi",
        "label": "成果数字",
        "type": "toggle",
        "default": true,
        "desc": "每条带右侧的成果数字。",
        "publicKey": "showKpi",
        "publicLabel": "成果数字",
        "description": "每条带右侧的成果数字。"
      },
      {
        "key": "showKicker",
        "label": "装饰副标题",
        "type": "toggle",
        "default": true,
        "desc": "主标题上方的装饰标签。",
        "publicKey": "showKicker",
        "publicLabel": "装饰副标题",
        "description": "主标题上方的装饰标签。"
      },
      {
        "key": "showGhostMark",
        "label": "背景大字符",
        "type": "toggle",
        "default": true,
        "desc": "角落超大幽灵字符装饰。",
        "publicKey": "showGhostMark",
        "publicLabel": "背景大字符",
        "description": "角落超大幽灵字符装饰。"
      },
      {
        "key": "showScaffold",
        "label": "边框骨架",
        "type": "toggle",
        "default": true,
        "desc": "侧边竖排标签与四角括线。",
        "publicKey": "showScaffold",
        "publicLabel": "边框骨架",
        "description": "侧边竖排标签与四角括线。"
      },
      {
        "key": "showMeta",
        "label": "底部信息条",
        "type": "toggle",
        "default": true,
        "desc": "底部页脚信息与进度条。",
        "publicKey": "showMeta",
        "publicLabel": "底部信息条",
        "description": "底部页脚信息与进度条。"
      }
    ],
    "defaultProps": {
      "surface": "ink",
      "bandCount": 3,
      "images": [],
      "emphasis": false,
      "emphasisIndex": 0,
      "showIndex": true,
      "showTags": true,
      "showCaptions": true,
      "showKpi": true,
      "showKicker": true,
      "showGhostMark": true,
      "showScaffold": true,
      "showMeta": true,
      "ghostMark": "≡",
      "railText": "Cases — 案例辑",
      "navItems": [
        "案例辑"
      ],
      "navCurrent": 0,
      "ixNo": "72",
      "ixLabel": "Reel",
      "eyebrowNo": "案例辑",
      "eyebrowEn": "Case reel",
      "headingHtml": "一条接一条，<span class=\"ign-ember-text\">都是同一套打法</span>。",
      "noteHtml": "行业不同，路径一致——<br>结果各自说话。",
      "bands": [
        {
          "tag": "DTC 硬件",
          "t": "VOLT 电动 · 主路径重排",
          "c": "14 天进线翻倍，把犹豫拦在按钮之前。",
          "v": "×3.8",
          "l": "转化率"
        },
        {
          "tag": "本地连锁",
          "t": "桥本生活 · 本地 SEO 矩阵",
          "c": "门店进店稳步上扬，自然进线接管增长。",
          "v": "+182%",
          "l": "自然进线"
        },
        {
          "tag": "B2B 软件",
          "t": "Nimbus SaaS · 获客漏斗重建",
          "c": "试用转付费链路拉直，获客成本显著下降。",
          "v": "−41%",
          "l": "获客成本"
        },
        {
          "tag": "内容消费",
          "t": "Kindle 计划 · 内容资产沉淀",
          "c": "把流量沉成可复利的内容库，长尾持续供血。",
          "v": "5.4k",
          "l": "内容产出"
        }
      ],
      "metaLeft": "IGNIS — 燃点 · 案例辑",
      "metaMid": "一条一条往下读"
    }
  },
  {
    "key": "theme11_page077",
    "themeKey": "theme11",
    "pageNumber": 77,
    "layout": "THEME11-077",
    "slot": "page77",
    "label": "下一步",
    "bgClass": "",
    "controls": [
      {
        "key": "surface",
        "label": "背景基调",
        "type": "select",
        "default": "paper",
        "options": [
          {
            "value": "ink",
            "label": "深色"
          },
          {
            "value": "paper",
            "label": "浅色"
          },
          {
            "value": "ember",
            "label": "暖橙"
          }
        ],
        "desc": "页面背景主题，用于在相邻页之间制造色彩跳跃。",
        "publicKey": "surface",
        "publicLabel": "背景基调",
        "description": "页面背景主题，用于在相邻页之间制造色彩跳跃。"
      },
      {
        "key": "stepCount",
        "label": "步骤数量",
        "type": "slider",
        "default": 3,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "下一步行动的条目数量。",
        "publicKey": "itemCount",
        "publicLabel": "步骤数量",
        "description": "下一步行动的条目数量。"
      },
      {
        "key": "emphasis",
        "label": "首步突出",
        "type": "toggle",
        "default": true,
        "desc": "开启后第一步点亮为暖橙。",
        "publicKey": "emphasis",
        "publicLabel": "首步突出",
        "description": "开启后第一步点亮为暖橙。"
      },
      {
        "key": "emphasisIndex",
        "label": "重点序号",
        "type": "slider",
        "default": 0,
        "min": 0,
        "max": 3,
        "step": 1,
        "desc": "需要突出的步骤序号（从 0 起）。",
        "publicKey": "emphasisIndex",
        "publicLabel": "重点序号",
        "description": "需要突出的步骤序号（从 0 起）。"
      },
      {
        "key": "showTag",
        "label": "顶部标签",
        "type": "toggle",
        "default": true,
        "desc": "大标题上方的小标签。",
        "publicKey": "showTag",
        "publicLabel": "顶部标签",
        "description": "大标题上方的小标签。"
      },
      {
        "key": "showLede",
        "label": "说明文案",
        "type": "toggle",
        "default": true,
        "desc": "大标题下方的说明段落。",
        "publicKey": "showLede",
        "publicLabel": "说明文案",
        "description": "大标题下方的说明段落。"
      },
      {
        "key": "showArrows",
        "label": "箭头母题",
        "type": "toggle",
        "default": true,
        "desc": "每步右侧的流向箭头。",
        "publicKey": "showArrows",
        "publicLabel": "箭头母题",
        "description": "每步右侧的流向箭头。"
      },
      {
        "key": "showDesc",
        "label": "步骤说明",
        "type": "toggle",
        "default": true,
        "desc": "每步的一句话说明。",
        "publicKey": "showDesc",
        "publicLabel": "步骤说明",
        "description": "每步的一句话说明。"
      },
      {
        "key": "showWhen",
        "label": "时间注脚",
        "type": "toggle",
        "default": true,
        "desc": "步骤下方的「最快多久启动」注脚。",
        "publicKey": "showWhen",
        "publicLabel": "时间注脚",
        "description": "步骤下方的「最快多久启动」注脚。"
      },
      {
        "key": "showGhostMark",
        "label": "背景大字符",
        "type": "toggle",
        "default": true,
        "desc": "角落超大幽灵字符装饰。",
        "publicKey": "showGhostMark",
        "publicLabel": "背景大字符",
        "description": "角落超大幽灵字符装饰。"
      },
      {
        "key": "showScaffold",
        "label": "边框骨架",
        "type": "toggle",
        "default": true,
        "desc": "侧边竖排标签与四角括线。",
        "publicKey": "showScaffold",
        "publicLabel": "边框骨架",
        "description": "侧边竖排标签与四角括线。"
      },
      {
        "key": "showMeta",
        "label": "底部信息条",
        "type": "toggle",
        "default": true,
        "desc": "底部页脚信息与进度条。",
        "publicKey": "showMeta",
        "publicLabel": "底部信息条",
        "description": "底部页脚信息与进度条。"
      }
    ],
    "defaultProps": {
      "surface": "paper",
      "stepCount": 3,
      "emphasis": true,
      "emphasisIndex": 0,
      "showTag": true,
      "showLede": true,
      "showArrows": true,
      "showDesc": true,
      "showWhen": true,
      "showGhostMark": true,
      "showScaffold": true,
      "showMeta": true,
      "ghostMark": "↗",
      "railText": "Next — 下一步",
      "navItems": [
        "下一步"
      ],
      "navCurrent": 0,
      "ixNo": "73",
      "ixLabel": "Next",
      "tagText": "从这里开始 / Where we go next",
      "headingHtml": "下一步，<br><span class=\"ign-ember-text\">就一步</span>。",
      "lede": "不必推翻什么。先做一次诊断，挑出能立刻发力的地方——然后点火。",
      "arrowGlyph": "→",
      "whenLeft": "最快本周即可启动",
      "whenRight": "14 天见首个数据",
      "steps": [
        {
          "t": "一次增长诊断",
          "d": "我们看你的数据，给出可执行的增长缺口清单。"
        },
        {
          "t": "锁定首月路线",
          "d": "挑出 2–3 个高杠杆动作，排进六个月节奏。"
        },
        {
          "t": "点火，开始复利",
          "d": "上线、测量、放大赢家——让引擎自己转起来。"
        }
      ],
      "metaLeft": "IGNIS — 燃点 · 下一步",
      "metaMid": "少说一句，多走一步"
    }
  },
  {
    "key": "theme11_page078",
    "themeKey": "theme11",
    "pageNumber": 78,
    "layout": "THEME11-078",
    "slot": "page78",
    "label": "主屏",
    "bgClass": "",
    "controls": [
      {
        "key": "surface",
        "label": "背景基调",
        "type": "select",
        "default": "ink",
        "options": [
          {
            "value": "ink",
            "label": "深色"
          },
          {
            "value": "paper",
            "label": "浅色"
          },
          {
            "value": "ember",
            "label": "暖橙"
          }
        ],
        "desc": "页面背景主题，用于在相邻页之间制造色彩跳跃。",
        "publicKey": "surface",
        "publicLabel": "背景基调",
        "description": "页面背景主题，用于在相邻页之间制造色彩跳跃。"
      },
      {
        "key": "imagePosition",
        "label": "手机位置",
        "type": "select",
        "default": "left",
        "options": [
          {
            "value": "left",
            "label": "左"
          },
          {
            "value": "right",
            "label": "右"
          }
        ],
        "desc": "手机在版面中的左右位置。",
        "publicKey": "imagePosition",
        "publicLabel": "手机位置",
        "description": "手机在版面中的左右位置。"
      },
      {
        "key": "annotationCount",
        "label": "标注数量",
        "type": "slider",
        "default": 4,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "右侧功能标注的条目数量。",
        "publicKey": "itemCount",
        "publicLabel": "标注数量",
        "description": "右侧功能标注的条目数量。"
      },
      {
        "key": "emphasis",
        "label": "重点突出",
        "type": "toggle",
        "default": false,
        "desc": "开启后突出某一条标注，其余弱化。",
        "publicKey": "emphasis",
        "publicLabel": "重点突出",
        "description": "开启后突出某一条标注，其余弱化。"
      },
      {
        "key": "emphasisIndex",
        "label": "重点序号",
        "type": "slider",
        "default": 0,
        "min": 0,
        "max": 3,
        "step": 1,
        "desc": "需要突出的标注序号（从 0 起）。",
        "publicKey": "emphasisIndex",
        "publicLabel": "重点序号",
        "description": "需要突出的标注序号（从 0 起）。"
      },
      {
        "key": "showLede",
        "label": "说明文案",
        "type": "toggle",
        "default": true,
        "desc": "主标题下方的说明段落。",
        "publicKey": "showLede",
        "publicLabel": "说明文案",
        "description": "主标题下方的说明段落。"
      },
      {
        "key": "showKicker",
        "label": "装饰副标题",
        "type": "toggle",
        "default": true,
        "desc": "主标题上方的装饰标签。",
        "publicKey": "showKicker",
        "publicLabel": "装饰副标题",
        "description": "主标题上方的装饰标签。"
      },
      {
        "key": "showGhostMark",
        "label": "背景大字符",
        "type": "toggle",
        "default": true,
        "desc": "角落超大幽灵字符装饰。",
        "publicKey": "showGhostMark",
        "publicLabel": "背景大字符",
        "description": "角落超大幽灵字符装饰。"
      },
      {
        "key": "showScaffold",
        "label": "边框骨架",
        "type": "toggle",
        "default": true,
        "desc": "侧边竖排标签与四角括线。",
        "publicKey": "showScaffold",
        "publicLabel": "边框骨架",
        "description": "侧边竖排标签与四角括线。"
      },
      {
        "key": "showMeta",
        "label": "底部信息条",
        "type": "toggle",
        "default": true,
        "desc": "底部页脚信息与进度条。",
        "publicKey": "showMeta",
        "publicLabel": "底部信息条",
        "description": "底部页脚信息与进度条。"
      }
    ],
    "defaultProps": {
      "surface": "ink",
      "images": [],
      "imagePosition": "left",
      "annotationCount": 4,
      "emphasis": false,
      "emphasisIndex": 0,
      "showLede": true,
      "showKicker": true,
      "showGhostMark": true,
      "showScaffold": true,
      "showMeta": true,
      "ghostMark": "▤",
      "railText": "Handset — 主屏",
      "navItems": [
        "主屏"
      ],
      "navCurrent": 0,
      "ixNo": "74",
      "ixLabel": "Handset",
      "imagePlaceholder": "主屏 · 截图",
      "eyebrowNo": "产品主屏",
      "eyebrowEn": "The hero screen",
      "headingHtml": "一屏之内，<br><span class=\"ign-ember-text\">把转化讲完</span>。",
      "lede": "没有第二次机会做第一印象——主屏的每一块都在替转化工作。",
      "notes": [
        {
          "t": "三秒说清价值",
          "d": "首屏只讲一件事：为什么是你，现在就买。"
        },
        {
          "t": "零摩擦下单",
          "d": "把表单砍到一步，犹豫拦在按钮之前。"
        },
        {
          "t": "会员即时承接",
          "d": "成交当下入会，把一次性变成可复利。"
        },
        {
          "t": "行为埋点回流",
          "d": "每次点击都回流，喂养下一轮投放与内容。"
        }
      ],
      "metaLeft": "IGNIS — 燃点 · 产品主屏",
      "metaMid": "第一屏，就是全部"
    }
  },
  {
    "key": "theme11_page079",
    "themeKey": "theme11",
    "pageNumber": 79,
    "layout": "THEME11-079",
    "slot": "page79",
    "label": "构成",
    "bgClass": "",
    "controls": [
      {
        "key": "surface",
        "label": "背景基调",
        "type": "select",
        "default": "paper",
        "options": [
          {
            "value": "ink",
            "label": "深色"
          },
          {
            "value": "paper",
            "label": "浅色"
          },
          {
            "value": "ember",
            "label": "暖橙"
          }
        ],
        "desc": "页面背景主题，用于在相邻页之间制造色彩跳跃。",
        "publicKey": "surface",
        "publicLabel": "背景基调",
        "description": "页面背景主题，用于在相邻页之间制造色彩跳跃。"
      },
      {
        "key": "categoryCount",
        "label": "类别数量",
        "type": "slider",
        "default": 5,
        "min": 2,
        "max": 5,
        "step": 1,
        "desc": "构成类别数量（剩余补为「其他」灰格）。",
        "publicKey": "categoryCount",
        "publicLabel": "类别数量",
        "description": "构成类别数量（剩余补为「其他」灰格）。"
      },
      {
        "key": "emphasis",
        "label": "首类突出",
        "type": "toggle",
        "default": true,
        "desc": "开启后占比最大的类别点亮为暖橙，图例其余弱化。",
        "publicKey": "emphasis",
        "publicLabel": "首类突出",
        "description": "开启后占比最大的类别点亮为暖橙，图例其余弱化。"
      },
      {
        "key": "emphasisIndex",
        "label": "重点序号",
        "type": "slider",
        "default": 0,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "需要突出的类别序号（从 0 起）。",
        "publicKey": "emphasisIndex",
        "publicLabel": "重点序号",
        "description": "需要突出的类别序号（从 0 起）。"
      },
      {
        "key": "showLegend",
        "label": "图例",
        "type": "toggle",
        "default": true,
        "desc": "左侧带占比的图例清单。",
        "publicKey": "showLegend",
        "publicLabel": "图例",
        "description": "左侧带占比的图例清单。"
      },
      {
        "key": "showValues",
        "label": "占比数值",
        "type": "toggle",
        "default": true,
        "desc": "图例右侧的百分比数值。",
        "publicKey": "showValueLabels",
        "publicLabel": "占比数值",
        "description": "图例右侧的百分比数值。"
      },
      {
        "key": "showKicker",
        "label": "装饰副标题",
        "type": "toggle",
        "default": true,
        "desc": "主标题上方的装饰标签。",
        "publicKey": "showKicker",
        "publicLabel": "装饰副标题",
        "description": "主标题上方的装饰标签。"
      },
      {
        "key": "showLede",
        "label": "说明文案",
        "type": "toggle",
        "default": true,
        "desc": "主标题下方的说明段落。",
        "publicKey": "showLede",
        "publicLabel": "说明文案",
        "description": "主标题下方的说明段落。"
      },
      {
        "key": "showGhostMark",
        "label": "背景大字符",
        "type": "toggle",
        "default": true,
        "desc": "角落超大幽灵字符装饰。",
        "publicKey": "showGhostMark",
        "publicLabel": "背景大字符",
        "description": "角落超大幽灵字符装饰。"
      },
      {
        "key": "showScaffold",
        "label": "边框骨架",
        "type": "toggle",
        "default": true,
        "desc": "侧边竖排标签与四角括线。",
        "publicKey": "showScaffold",
        "publicLabel": "边框骨架",
        "description": "侧边竖排标签与四角括线。"
      },
      {
        "key": "showMeta",
        "label": "底部信息条",
        "type": "toggle",
        "default": true,
        "desc": "底部页脚信息与进度条。",
        "publicKey": "showMeta",
        "publicLabel": "底部信息条",
        "description": "底部页脚信息与进度条。"
      }
    ],
    "defaultProps": {
      "surface": "paper",
      "categoryCount": 5,
      "emphasis": true,
      "emphasisIndex": 0,
      "showLegend": true,
      "showValues": true,
      "showKicker": true,
      "showLede": true,
      "showGhostMark": true,
      "showScaffold": true,
      "showMeta": true,
      "ghostMark": "▥",
      "railText": "Waffle — 构成",
      "navItems": [
        "构成"
      ],
      "navCurrent": 0,
      "ixNo": "75",
      "ixLabel": "Waffle",
      "eyebrowNo": "流量构成",
      "eyebrowEn": "Out of 100",
      "headingHtml": "每 100 次进线，<br><span class=\"ign-ember-text\">这样分布</span>。",
      "lede": "把占比摊成 100 格——一眼能数清，谁在真正供血。",
      "cats": [
        {
          "nm": "自然搜索",
          "share": 38,
          "tone": "lead"
        },
        {
          "nm": "内容矩阵",
          "share": 24,
          "tone": "rgba(255,110,46,0.5)"
        },
        {
          "nm": "私域复购",
          "share": 18,
          "tone": "rgba(255,110,46,0.3)"
        },
        {
          "nm": "社媒互动",
          "share": 12,
          "tone": "rgba(255,110,46,0.18)"
        },
        {
          "nm": "付费投放",
          "share": 8,
          "tone": "rgba(255,110,46,0.1)"
        }
      ],
      "metaLeft": "IGNIS — 燃点 · 进线构成（每 100 次）",
      "metaMid": "数得清，才算看明白"
    }
  },
  {
    "key": "theme11_page080",
    "themeKey": "theme11",
    "pageNumber": 80,
    "layout": "THEME11-080",
    "slot": "page80",
    "label": "评分",
    "bgClass": "",
    "controls": [
      {
        "key": "surface",
        "label": "背景基调",
        "type": "select",
        "default": "ember",
        "options": [
          {
            "value": "ink",
            "label": "深色"
          },
          {
            "value": "paper",
            "label": "浅色"
          },
          {
            "value": "ember",
            "label": "暖橙"
          }
        ],
        "desc": "页面背景主题，用于在相邻页之间制造色彩跳跃。",
        "publicKey": "surface",
        "publicLabel": "背景基调",
        "description": "页面背景主题，用于在相邻页之间制造色彩跳跃。"
      },
      {
        "key": "rowCount",
        "label": "维度数量",
        "type": "slider",
        "default": 5,
        "min": 3,
        "max": 5,
        "step": 1,
        "desc": "评分卡的维度行数。",
        "publicKey": "rowCount",
        "publicLabel": "维度数量",
        "description": "评分卡的维度行数。"
      },
      {
        "key": "emphasis",
        "label": "首行突出",
        "type": "toggle",
        "default": true,
        "desc": "开启后首行点亮为暖橙，其余弱化。",
        "publicKey": "emphasis",
        "publicLabel": "首行突出",
        "description": "开启后首行点亮为暖橙，其余弱化。"
      },
      {
        "key": "emphasisIndex",
        "label": "重点序号",
        "type": "slider",
        "default": 0,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "需要突出的维度序号（从 0 起）。",
        "publicKey": "emphasisIndex",
        "publicLabel": "重点序号",
        "description": "需要突出的维度序号（从 0 起）。"
      },
      {
        "key": "showColHeads",
        "label": "列表头",
        "type": "toggle",
        "default": true,
        "desc": "顶部的列标题行。",
        "publicKey": "showColHeads",
        "publicLabel": "列表头",
        "description": "顶部的列标题行。"
      },
      {
        "key": "showDots",
        "label": "评级圆点",
        "type": "toggle",
        "default": true,
        "desc": "每行的 5 点评级。",
        "publicKey": "showDots",
        "publicLabel": "评级圆点",
        "description": "每行的 5 点评级。"
      },
      {
        "key": "showScore",
        "label": "得分",
        "type": "toggle",
        "default": true,
        "desc": "每行的 10 分制得分。",
        "publicKey": "showScore",
        "publicLabel": "得分",
        "description": "每行的 10 分制得分。"
      },
      {
        "key": "showDelta",
        "label": "对比基准",
        "type": "toggle",
        "default": true,
        "desc": "每行相对参考基准的差值列。",
        "publicKey": "showDelta",
        "publicLabel": "对比基准",
        "description": "每行相对参考基准的差值列。"
      },
      {
        "key": "showKicker",
        "label": "装饰副标题",
        "type": "toggle",
        "default": true,
        "desc": "主标题上方的装饰标签。",
        "publicKey": "showKicker",
        "publicLabel": "装饰副标题",
        "description": "主标题上方的装饰标签。"
      },
      {
        "key": "showGhostMark",
        "label": "背景大字符",
        "type": "toggle",
        "default": true,
        "desc": "角落超大幽灵字符装饰。",
        "publicKey": "showGhostMark",
        "publicLabel": "背景大字符",
        "description": "角落超大幽灵字符装饰。"
      },
      {
        "key": "showScaffold",
        "label": "边框骨架",
        "type": "toggle",
        "default": true,
        "desc": "侧边竖排标签与四角括线。",
        "publicKey": "showScaffold",
        "publicLabel": "边框骨架",
        "description": "侧边竖排标签与四角括线。"
      },
      {
        "key": "showMeta",
        "label": "底部信息条",
        "type": "toggle",
        "default": true,
        "desc": "底部页脚信息与进度条。",
        "publicKey": "showMeta",
        "publicLabel": "底部信息条",
        "description": "底部页脚信息与进度条。"
      }
    ],
    "defaultProps": {
      "surface": "ember",
      "rowCount": 5,
      "emphasis": true,
      "emphasisIndex": 0,
      "showColHeads": true,
      "showDots": true,
      "showScore": true,
      "showDelta": true,
      "showKicker": true,
      "showGhostMark": true,
      "showScaffold": true,
      "showMeta": true,
      "ghostMark": "★",
      "railText": "Scorecard — 评分",
      "navItems": [
        "评分"
      ],
      "navCurrent": 0,
      "ixNo": "76",
      "ixLabel": "Scorecard",
      "eyebrowNo": "能力评分",
      "eyebrowEn": "Graded",
      "headingHtml": "逐项打分，<span class=\"ign-ember-text\">不挑好看的说</span>。",
      "noteHtml": "10 分制 · 对标行业基准<br>差值即领先幅度。",
      "cols": [
        "维度 / Dimension",
        "评级",
        "得分",
        "对比基准"
      ],
      "scoreUnit": " /10",
      "deltaSuffix": " vs 基准",
      "rows": [
        {
          "nm": "自然增长",
          "en": "Organic",
          "dots": 5,
          "score": "9.4",
          "delta": "+3.1"
        },
        {
          "nm": "转化效率",
          "en": "Conversion",
          "dots": 5,
          "score": "9.0",
          "delta": "+2.4"
        },
        {
          "nm": "内容资产",
          "en": "Content",
          "dots": 4,
          "score": "8.2",
          "delta": "+1.8"
        },
        {
          "nm": "私域复利",
          "en": "Retention",
          "dots": 4,
          "score": "7.8",
          "delta": "+1.5"
        },
        {
          "nm": "投放效率",
          "en": "Paid ROI",
          "dots": 3,
          "score": "6.9",
          "delta": "+0.6"
        }
      ],
      "metaLeft": "IGNIS — 燃点 · 能力评分卡（对标行业基准）",
      "metaMid": "打分这事，不留情面"
    }
  },
  {
    "key": "theme11_page081",
    "themeKey": "theme11",
    "pageNumber": 81,
    "layout": "THEME11-081",
    "slot": "page81",
    "label": "标注",
    "bgClass": "",
    "controls": [
      {
        "key": "surface",
        "label": "背景基调",
        "type": "select",
        "default": "ink",
        "options": [
          {
            "value": "ink",
            "label": "深色"
          },
          {
            "value": "paper",
            "label": "浅色"
          },
          {
            "value": "ember",
            "label": "暖橙"
          }
        ],
        "desc": "页面背景主题，用于在相邻页之间制造色彩跳跃。",
        "publicKey": "surface",
        "publicLabel": "背景基调",
        "description": "页面背景主题，用于在相邻页之间制造色彩跳跃。"
      },
      {
        "key": "pinCount",
        "label": "标注数量",
        "type": "slider",
        "default": 4,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "图上热点与图例条目的数量。",
        "publicKey": "itemCount",
        "publicLabel": "标注数量",
        "description": "图上热点与图例条目的数量。"
      },
      {
        "key": "emphasis",
        "label": "重点突出",
        "type": "toggle",
        "default": false,
        "desc": "开启后突出某一标注，其余弱化。",
        "publicKey": "emphasis",
        "publicLabel": "重点突出",
        "description": "开启后突出某一标注，其余弱化。"
      },
      {
        "key": "emphasisIndex",
        "label": "重点序号",
        "type": "slider",
        "default": 0,
        "min": 0,
        "max": 3,
        "step": 1,
        "desc": "需要突出的标注序号（从 0 起）。",
        "publicKey": "emphasisIndex",
        "publicLabel": "重点序号",
        "description": "需要突出的标注序号（从 0 起）。"
      },
      {
        "key": "showPins",
        "label": "图上热点",
        "type": "toggle",
        "default": true,
        "desc": "叠在截图上的编号热点。",
        "publicKey": "showPins",
        "publicLabel": "图上热点",
        "description": "叠在截图上的编号热点。"
      },
      {
        "key": "showLegend",
        "label": "图例条",
        "type": "toggle",
        "default": true,
        "desc": "截图下方的编号图例。",
        "publicKey": "showLegend",
        "publicLabel": "图例条",
        "description": "截图下方的编号图例。"
      },
      {
        "key": "showScrim",
        "label": "压暗叠层",
        "type": "toggle",
        "default": true,
        "desc": "截图四周的压暗渐变，提升热点可读性。",
        "publicKey": "showScrim",
        "publicLabel": "压暗叠层",
        "description": "截图四周的压暗渐变，提升热点可读性。"
      },
      {
        "key": "showKicker",
        "label": "装饰副标题",
        "type": "toggle",
        "default": true,
        "desc": "主标题上方的装饰标签。",
        "publicKey": "showKicker",
        "publicLabel": "装饰副标题",
        "description": "主标题上方的装饰标签。"
      },
      {
        "key": "showGhostMark",
        "label": "背景大字符",
        "type": "toggle",
        "default": true,
        "desc": "角落超大幽灵字符装饰。",
        "publicKey": "showGhostMark",
        "publicLabel": "背景大字符",
        "description": "角落超大幽灵字符装饰。"
      },
      {
        "key": "showScaffold",
        "label": "边框骨架",
        "type": "toggle",
        "default": true,
        "desc": "侧边竖排标签与四角括线。",
        "publicKey": "showScaffold",
        "publicLabel": "边框骨架",
        "description": "侧边竖排标签与四角括线。"
      },
      {
        "key": "showMeta",
        "label": "底部信息条",
        "type": "toggle",
        "default": true,
        "desc": "底部页脚信息与进度条。",
        "publicKey": "showMeta",
        "publicLabel": "底部信息条",
        "description": "底部页脚信息与进度条。"
      }
    ],
    "defaultProps": {
      "surface": "ink",
      "images": [],
      "pinCount": 4,
      "emphasis": false,
      "emphasisIndex": 0,
      "showPins": true,
      "showLegend": true,
      "showScrim": true,
      "showKicker": true,
      "showGhostMark": true,
      "showScaffold": true,
      "showMeta": true,
      "ghostMark": "◉",
      "railText": "Annotated — 标注",
      "navItems": [
        "标注"
      ],
      "navCurrent": 0,
      "ixNo": "77",
      "ixLabel": "Annotated",
      "imagePlaceholder": "落地页 / 产品截图",
      "eyebrowNo": "逐处拆解",
      "eyebrowEn": "What we changed",
      "headingHtml": "一张截图，<span class=\"ign-ember-text\">把每处改动指出来</span>。",
      "noteHtml": "编号对应改动点——<br>每一处都对着转化。",
      "pins": [
        {
          "x": 16,
          "y": 26,
          "t": "价值主张",
          "d": "首屏一句话锁定意图。"
        },
        {
          "x": 78,
          "y": 34,
          "t": "社会证明",
          "d": "客户与数据即时建立信任。"
        },
        {
          "x": 30,
          "y": 72,
          "t": "主行动按钮",
          "d": "高对比、零干扰的唯一出口。"
        },
        {
          "x": 66,
          "y": 78,
          "t": "风险消解",
          "d": "退款与保障，临门一脚不丢人。"
        }
      ],
      "metaLeft": "IGNIS — 燃点 · 改动逐处标注",
      "metaMid": "改在哪，写在哪"
    }
  },
  {
    "key": "theme11_page082",
    "themeKey": "theme11",
    "pageNumber": 82,
    "layout": "THEME11-082",
    "slot": "page82",
    "label": "前后",
    "bgClass": "",
    "controls": [
      {
        "key": "surface",
        "label": "背景基调",
        "type": "select",
        "default": "paper",
        "options": [
          {
            "value": "ink",
            "label": "深色"
          },
          {
            "value": "paper",
            "label": "浅色"
          },
          {
            "value": "ember",
            "label": "暖橙"
          }
        ],
        "desc": "页面背景主题，用于在相邻页之间制造色彩跳跃。",
        "publicKey": "surface",
        "publicLabel": "背景基调",
        "description": "页面背景主题，用于在相邻页之间制造色彩跳跃。"
      },
      {
        "key": "itemCount",
        "label": "指标数量",
        "type": "slider",
        "default": 5,
        "min": 3,
        "max": 5,
        "step": 1,
        "desc": "哑铃图的指标行数。",
        "publicKey": "itemCount",
        "publicLabel": "指标数量",
        "description": "哑铃图的指标行数。"
      },
      {
        "key": "emphasis",
        "label": "首行突出",
        "type": "toggle",
        "default": true,
        "desc": "开启后首行点亮为暖橙，其余弱化。",
        "publicKey": "emphasis",
        "publicLabel": "首行突出",
        "description": "开启后首行点亮为暖橙，其余弱化。"
      },
      {
        "key": "emphasisIndex",
        "label": "重点序号",
        "type": "slider",
        "default": 0,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "需要突出的指标序号（从 0 起）。",
        "publicKey": "emphasisIndex",
        "publicLabel": "重点序号",
        "description": "需要突出的指标序号（从 0 起）。"
      },
      {
        "key": "showValues",
        "label": "端点数值",
        "type": "toggle",
        "default": true,
        "desc": "前后两点上方的数值。",
        "publicKey": "showValueLabels",
        "publicLabel": "端点数值",
        "description": "前后两点上方的数值。"
      },
      {
        "key": "showDelta",
        "label": "变化幅度",
        "type": "toggle",
        "default": true,
        "desc": "每行右侧的变化幅度。",
        "publicKey": "showDelta",
        "publicLabel": "变化幅度",
        "description": "每行右侧的变化幅度。"
      },
      {
        "key": "showGrid",
        "label": "刻度网格",
        "type": "toggle",
        "default": true,
        "desc": "背景的纵向刻度线与轴标。",
        "publicKey": "showGrid",
        "publicLabel": "刻度网格",
        "description": "背景的纵向刻度线与轴标。"
      },
      {
        "key": "showLegend",
        "label": "图例",
        "type": "toggle",
        "default": true,
        "desc": "标题右侧的「接入前 / 接入后」图例。",
        "publicKey": "showLegend",
        "publicLabel": "图例",
        "description": "标题右侧的「接入前 / 接入后」图例。"
      },
      {
        "key": "showKicker",
        "label": "装饰副标题",
        "type": "toggle",
        "default": true,
        "desc": "主标题上方的装饰标签。",
        "publicKey": "showKicker",
        "publicLabel": "装饰副标题",
        "description": "主标题上方的装饰标签。"
      },
      {
        "key": "showGhostMark",
        "label": "背景大字符",
        "type": "toggle",
        "default": true,
        "desc": "角落超大幽灵字符装饰。",
        "publicKey": "showGhostMark",
        "publicLabel": "背景大字符",
        "description": "角落超大幽灵字符装饰。"
      },
      {
        "key": "showScaffold",
        "label": "边框骨架",
        "type": "toggle",
        "default": true,
        "desc": "侧边竖排标签与四角括线。",
        "publicKey": "showScaffold",
        "publicLabel": "边框骨架",
        "description": "侧边竖排标签与四角括线。"
      },
      {
        "key": "showMeta",
        "label": "底部信息条",
        "type": "toggle",
        "default": true,
        "desc": "底部页脚信息与进度条。",
        "publicKey": "showMeta",
        "publicLabel": "底部信息条",
        "description": "底部页脚信息与进度条。"
      }
    ],
    "defaultProps": {
      "surface": "paper",
      "itemCount": 5,
      "emphasis": true,
      "emphasisIndex": 0,
      "showValues": true,
      "showDelta": true,
      "showGrid": true,
      "showLegend": true,
      "showKicker": true,
      "showGhostMark": true,
      "showScaffold": true,
      "showMeta": true,
      "ghostMark": "⟷",
      "railText": "Shift — 前后",
      "navItems": [
        "前后"
      ],
      "navCurrent": 0,
      "ixNo": "78",
      "ixLabel": "Dumbbell",
      "eyebrowNo": "接入前后",
      "eyebrowEn": "Before / after",
      "headingHtml": "同一批指标，<span class=\"ign-ember-text\">挪了多远</span>。",
      "legendBefore": "接入前",
      "legendAfter": "接入后",
      "rows": [
        {
          "nm": "自然进线",
          "en": "Organic",
          "before": 52,
          "after": 182,
          "delta": "+250%"
        },
        {
          "nm": "转化率",
          "en": "Conversion",
          "before": 38,
          "after": 144,
          "delta": "×3.8"
        },
        {
          "nm": "客单价",
          "en": "AOV",
          "before": 70,
          "after": 122,
          "delta": "+74%"
        },
        {
          "nm": "复购率",
          "en": "Repeat",
          "before": 44,
          "after": 96,
          "delta": "+118%"
        },
        {
          "nm": "获客成本",
          "en": "CAC",
          "before": 130,
          "after": 77,
          "delta": "−41%"
        }
      ],
      "metaLeft": "IGNIS — 燃点 · 接入前后对照（指数化）",
      "metaMid": "挪动的距离，就是价值"
    }
  },
  {
    "key": "theme11_page083",
    "themeKey": "theme11",
    "pageNumber": 83,
    "layout": "THEME11-083",
    "slot": "page83",
    "label": "金句",
    "bgClass": "",
    "controls": [
      {
        "key": "surface",
        "label": "背景基调",
        "type": "select",
        "default": "ember",
        "options": [
          {
            "value": "ink",
            "label": "深色"
          },
          {
            "value": "paper",
            "label": "浅色"
          },
          {
            "value": "ember",
            "label": "暖橙"
          }
        ],
        "desc": "页面背景主题，用于在相邻页之间制造色彩跳跃。",
        "publicKey": "surface",
        "publicLabel": "背景基调",
        "description": "页面背景主题，用于在相邻页之间制造色彩跳跃。"
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
        "desc": "金句的对齐方式。",
        "publicKey": "align",
        "publicLabel": "对齐",
        "description": "金句的对齐方式。"
      },
      {
        "key": "showMark",
        "label": "引号字符",
        "type": "toggle",
        "default": true,
        "desc": "金句上方的超大装饰引号。",
        "publicKey": "showMark",
        "publicLabel": "引号字符",
        "description": "金句上方的超大装饰引号。"
      },
      {
        "key": "showBig",
        "label": "巨号数字",
        "type": "toggle",
        "default": true,
        "desc": "句中嵌入的巨号暖橙数字（关闭则回退为普通字号）。",
        "publicKey": "showBig",
        "publicLabel": "巨号数字",
        "description": "句中嵌入的巨号暖橙数字（关闭则回退为普通字号）。"
      },
      {
        "key": "showRule",
        "label": "分隔细线",
        "type": "toggle",
        "default": true,
        "desc": "署名上方的分隔细线。",
        "publicKey": "showRule",
        "publicLabel": "分隔细线",
        "description": "署名上方的分隔细线。"
      },
      {
        "key": "showAttribution",
        "label": "署名区块",
        "type": "toggle",
        "default": true,
        "desc": "金句下方的署名与来源。",
        "publicKey": "showAttribution",
        "publicLabel": "署名区块",
        "description": "金句下方的署名与来源。"
      },
      {
        "key": "showKicker",
        "label": "装饰副标题",
        "type": "toggle",
        "default": true,
        "desc": "顶部导航处的章节标识。",
        "publicKey": "showKicker",
        "publicLabel": "装饰副标题",
        "description": "顶部导航处的章节标识。"
      },
      {
        "key": "showGhostMark",
        "label": "背景大字符",
        "type": "toggle",
        "default": true,
        "desc": "角落超大幽灵字符装饰。",
        "publicKey": "showGhostMark",
        "publicLabel": "背景大字符",
        "description": "角落超大幽灵字符装饰。"
      },
      {
        "key": "showScaffold",
        "label": "边框骨架",
        "type": "toggle",
        "default": true,
        "desc": "侧边竖排标签与四角括线。",
        "publicKey": "showScaffold",
        "publicLabel": "边框骨架",
        "description": "侧边竖排标签与四角括线。"
      },
      {
        "key": "showMeta",
        "label": "底部信息条",
        "type": "toggle",
        "default": true,
        "desc": "底部页脚信息与进度条。",
        "publicKey": "showMeta",
        "publicLabel": "底部信息条",
        "description": "底部页脚信息与进度条。"
      }
    ],
    "defaultProps": {
      "surface": "ember",
      "align": "left",
      "showMark": true,
      "showBig": true,
      "showRule": true,
      "showAttribution": true,
      "showKicker": true,
      "showGhostMark": true,
      "showScaffold": true,
      "showMeta": true,
      "ghostMark": "¥",
      "railText": "Pull — 金句",
      "navItems": [
        "金句"
      ],
      "navCurrent": 0,
      "ixNo": "79",
      "ixLabel": "Pull",
      "markGlyph": "“",
      "quotePre": "每投入 1 块预算，我们还给你",
      "bigValue": "¥7",
      "bigUnit": ".4",
      "bigInline": " ¥7.4 ",
      "quotePost": "的可归因增量营收。",
      "attrName": "跨 2,400+ 品牌 · 中位口径",
      "attrRole": "12 个月真实结算数据",
      "attrSrc": "Median ROAS",
      "metaLeft": "IGNIS — 燃点 · 投产比",
      "metaMid": "能归因的回报，才敢承诺"
    }
  },
  {
    "key": "theme11_page084",
    "themeKey": "theme11",
    "pageNumber": 84,
    "layout": "THEME11-084",
    "slot": "page84",
    "label": "陈列",
    "bgClass": "",
    "controls": [
      {
        "key": "surface",
        "label": "背景基调",
        "type": "select",
        "default": "ink",
        "options": [
          {
            "value": "ink",
            "label": "深色"
          },
          {
            "value": "paper",
            "label": "浅色"
          },
          {
            "value": "ember",
            "label": "暖橙"
          }
        ],
        "desc": "页面背景主题，用于在相邻页之间制造色彩跳跃。",
        "publicKey": "surface",
        "publicLabel": "背景基调",
        "description": "页面背景主题，用于在相邻页之间制造色彩跳跃。"
      },
      {
        "key": "showFrameLine",
        "label": "内框线",
        "type": "toggle",
        "default": true,
        "desc": "画框内的双重细线。",
        "publicKey": "showFrameLine",
        "publicLabel": "内框线",
        "description": "画框内的双重细线。"
      },
      {
        "key": "showPlate",
        "label": "说明牌",
        "type": "toggle",
        "default": true,
        "desc": "图片下方的居中说明牌。",
        "publicKey": "showPlate",
        "publicLabel": "说明牌",
        "description": "图片下方的居中说明牌。"
      },
      {
        "key": "showIndex",
        "label": "编号",
        "type": "toggle",
        "default": true,
        "desc": "说明牌左侧的作品编号。",
        "publicKey": "showIndex",
        "publicLabel": "编号",
        "description": "说明牌左侧的作品编号。"
      },
      {
        "key": "showMeta_meta",
        "label": "说明牌副信息",
        "type": "toggle",
        "default": true,
        "desc": "说明牌右侧的媒介 / 年份式副信息。",
        "publicKey": "showMeta_meta",
        "publicLabel": "说明牌副信息",
        "description": "说明牌右侧的媒介 / 年份式副信息。"
      },
      {
        "key": "showKicker",
        "label": "装饰副标题",
        "type": "toggle",
        "default": true,
        "desc": "顶部导航处的章节标识。",
        "publicKey": "showKicker",
        "publicLabel": "装饰副标题",
        "description": "顶部导航处的章节标识。"
      },
      {
        "key": "showGhostMark",
        "label": "背景大字符",
        "type": "toggle",
        "default": true,
        "desc": "角落超大幽灵字符装饰。",
        "publicKey": "showGhostMark",
        "publicLabel": "背景大字符",
        "description": "角落超大幽灵字符装饰。"
      },
      {
        "key": "showScaffold",
        "label": "边框骨架",
        "type": "toggle",
        "default": true,
        "desc": "侧边竖排标签与四角括线。",
        "publicKey": "showScaffold",
        "publicLabel": "边框骨架",
        "description": "侧边竖排标签与四角括线。"
      },
      {
        "key": "showMeta",
        "label": "底部信息条",
        "type": "toggle",
        "default": true,
        "desc": "底部页脚信息与进度条。",
        "publicKey": "showMeta",
        "publicLabel": "底部信息条",
        "description": "底部页脚信息与进度条。"
      }
    ],
    "defaultProps": {
      "surface": "ink",
      "images": [],
      "showFrameLine": true,
      "showPlate": true,
      "showIndex": true,
      "showMeta_meta": true,
      "showKicker": true,
      "showGhostMark": true,
      "showScaffold": true,
      "showMeta": true,
      "ghostMark": "◳",
      "railText": "Plate — 陈列",
      "navItems": [
        "陈列"
      ],
      "navCurrent": 0,
      "ixNo": "80",
      "ixLabel": "Plate",
      "imagePlaceholder": "代表作 · 主视觉",
      "plateIndex": "№ 01",
      "plateTitleHtml": "VOLT 电动 · <span class=\"ign-serif\">主视觉重制</span>",
      "plateMeta": "Brand · 2026",
      "metaLeft": "IGNIS — 燃点 · 作品陈列",
      "metaMid": "一件作品，留足呼吸"
    }
  },
  {
    "key": "theme11_page085",
    "themeKey": "theme11",
    "pageNumber": 85,
    "layout": "THEME11-085",
    "slot": "page85",
    "label": "历程",
    "bgClass": "",
    "controls": [
      {
        "key": "surface",
        "label": "背景基调",
        "type": "select",
        "default": "paper",
        "options": [
          {
            "value": "ink",
            "label": "深色"
          },
          {
            "value": "paper",
            "label": "浅色"
          },
          {
            "value": "ember",
            "label": "暖橙"
          }
        ],
        "desc": "页面背景主题，用于在相邻页之间制造色彩跳跃。",
        "publicKey": "surface",
        "publicLabel": "背景基调",
        "description": "页面背景主题，用于在相邻页之间制造色彩跳跃。"
      },
      {
        "key": "eraCount",
        "label": "阶段数量",
        "type": "slider",
        "default": 5,
        "min": 3,
        "max": 5,
        "step": 1,
        "desc": "历程的阶段节点数量。",
        "publicKey": "eraCount",
        "publicLabel": "阶段数量",
        "description": "历程的阶段节点数量。"
      },
      {
        "key": "currentIndex",
        "label": "当前阶段",
        "type": "slider",
        "default": 4,
        "min": 0,
        "max": 4,
        "step": 1,
        "desc": "点亮为暖橙的「当前」阶段序号（进度填充至此）。",
        "publicKey": "currentIndex",
        "publicLabel": "当前阶段",
        "description": "点亮为暖橙的「当前」阶段序号（进度填充至此）。"
      },
      {
        "key": "showYears",
        "label": "年份",
        "type": "toggle",
        "default": true,
        "desc": "每个节点上方的年份。",
        "publicKey": "showYears",
        "publicLabel": "年份",
        "description": "每个节点上方的年份。"
      },
      {
        "key": "showDesc",
        "label": "阶段说明",
        "type": "toggle",
        "default": true,
        "desc": "每个节点下方的一句话说明。",
        "publicKey": "showDesc",
        "publicLabel": "阶段说明",
        "description": "每个节点下方的一句话说明。"
      },
      {
        "key": "showTags",
        "label": "阶段标签",
        "type": "toggle",
        "default": true,
        "desc": "每个节点的英文阶段标签。",
        "publicKey": "showTags",
        "publicLabel": "阶段标签",
        "description": "每个节点的英文阶段标签。"
      },
      {
        "key": "showAxis",
        "label": "时间轴线",
        "type": "toggle",
        "default": true,
        "desc": "贯穿的横向时间轴与进度填充。",
        "publicKey": "showAxis",
        "publicLabel": "时间轴线",
        "description": "贯穿的横向时间轴与进度填充。"
      },
      {
        "key": "showKicker",
        "label": "装饰副标题",
        "type": "toggle",
        "default": true,
        "desc": "主标题上方的装饰标签。",
        "publicKey": "showKicker",
        "publicLabel": "装饰副标题",
        "description": "主标题上方的装饰标签。"
      },
      {
        "key": "showLede",
        "label": "右上注释",
        "type": "toggle",
        "default": true,
        "desc": "标题右侧的衬线注释。",
        "publicKey": "showLede",
        "publicLabel": "右上注释",
        "description": "标题右侧的衬线注释。"
      },
      {
        "key": "showGhostMark",
        "label": "背景大字符",
        "type": "toggle",
        "default": true,
        "desc": "角落超大幽灵字符装饰。",
        "publicKey": "showGhostMark",
        "publicLabel": "背景大字符",
        "description": "角落超大幽灵字符装饰。"
      },
      {
        "key": "showScaffold",
        "label": "边框骨架",
        "type": "toggle",
        "default": true,
        "desc": "侧边竖排标签与四角括线。",
        "publicKey": "showScaffold",
        "publicLabel": "边框骨架",
        "description": "侧边竖排标签与四角括线。"
      },
      {
        "key": "showMeta",
        "label": "底部信息条",
        "type": "toggle",
        "default": true,
        "desc": "底部页脚信息与进度条。",
        "publicKey": "showMeta",
        "publicLabel": "底部信息条",
        "description": "底部页脚信息与进度条。"
      }
    ],
    "defaultProps": {
      "surface": "paper",
      "eraCount": 5,
      "currentIndex": 4,
      "showYears": true,
      "showDesc": true,
      "showTags": true,
      "showAxis": true,
      "showKicker": true,
      "showLede": true,
      "showGhostMark": true,
      "showScaffold": true,
      "showMeta": true,
      "ghostMark": "↗",
      "railText": "Era — 历程",
      "navItems": [
        "历程"
      ],
      "navCurrent": 0,
      "ixNo": "81",
      "ixLabel": "Era",
      "eyebrowNo": "一路走来",
      "eyebrowEn": "Our story",
      "headingHtml": "从一间房，<span class=\"ign-ember-text\">到一台引擎</span>。",
      "noteHtml": "六年时间<br>把手艺打磨成系统。",
      "eras": [
        {
          "yr": "2019",
          "tt": "起步",
          "dd": "三个人一间房，第一批客户口口相传。",
          "tag": "Founded"
        },
        {
          "yr": "2021",
          "tt": "成型",
          "dd": "增长操作系统跑通，方法开始可复制。",
          "tag": "System"
        },
        {
          "yr": "2023",
          "tt": "规模",
          "dd": "跨行业验证，服务品牌数破千。",
          "tag": "Scale"
        },
        {
          "yr": "2025",
          "tt": "AI 化",
          "dd": "引擎接入 AI，研究到上线提速一个量级。",
          "tag": "AI engine"
        },
        {
          "yr": "今天",
          "tt": "复利",
          "dd": "2,400+ 品牌在同一套引擎上持续滚动。",
          "tag": "Today"
        }
      ],
      "metaLeft": "IGNIS — 燃点 · 发展历程",
      "metaMid": "慢慢来，比较快"
    }
  },
  {
    "key": "theme11_page086",
    "themeKey": "theme11",
    "pageNumber": 86,
    "layout": "THEME11-086",
    "slot": "page86",
    "label": "谢幕",
    "bgClass": "",
    "controls": [
      {
        "key": "surface",
        "label": "背景基调",
        "type": "select",
        "default": "ink",
        "options": [
          {
            "value": "ink",
            "label": "深色"
          },
          {
            "value": "paper",
            "label": "浅色"
          },
          {
            "value": "ember",
            "label": "暖橙"
          }
        ],
        "desc": "页面背景主题，用于在相邻页之间制造色彩跳跃。",
        "publicKey": "surface",
        "publicLabel": "背景基调",
        "description": "页面背景主题，用于在相邻页之间制造色彩跳跃。"
      },
      {
        "key": "imageCount",
        "label": "图片槽数量",
        "type": "slider",
        "default": 1,
        "min": 0,
        "max": 1,
        "step": 1,
        "desc": "配图槽数量；为 0 时谢幕语整宽居中。",
        "publicKey": "imageCount",
        "publicLabel": "图片槽数量",
        "description": "配图槽数量；为 0 时谢幕语整宽居中。"
      },
      {
        "key": "image",
        "label": "配图上传",
        "type": "image",
        "default": "",
        "desc": "上传谢幕配图，按原图比例自适应。",
        "publicKey": "image",
        "publicLabel": "配图上传",
        "description": "上传谢幕配图，按原图比例自适应。"
      },
      {
        "key": "imagePosition",
        "label": "配图位置",
        "type": "select",
        "default": "right",
        "options": [
          {
            "value": "left",
            "label": "左"
          },
          {
            "value": "right",
            "label": "右"
          }
        ],
        "desc": "配图相对文字的位置。",
        "publicKey": "imagePosition",
        "publicLabel": "配图位置",
        "description": "配图相对文字的位置。"
      },
      {
        "key": "imageMode",
        "label": "配图填充",
        "type": "select",
        "default": "fill",
        "options": [
          {
            "value": "fill",
            "label": "满铺裁切"
          },
          {
            "value": "ratio",
            "label": "原比例"
          }
        ],
        "desc": "配图的填充方式。",
        "publicKey": "imageMode",
        "publicLabel": "配图填充",
        "description": "配图的填充方式。"
      },
      {
        "key": "showSub",
        "label": "谢幕说明",
        "type": "toggle",
        "default": true,
        "desc": "谢幕语下方的说明句。",
        "publicKey": "showSub",
        "publicLabel": "谢幕说明",
        "description": "谢幕语下方的说明句。"
      },
      {
        "key": "showRule",
        "label": "强调短线",
        "type": "toggle",
        "default": true,
        "desc": "谢幕语下方的暖橙强调短线。",
        "publicKey": "showRule",
        "publicLabel": "强调短线",
        "description": "谢幕语下方的暖橙强调短线。"
      },
      {
        "key": "showContact",
        "label": "次级文案",
        "type": "toggle",
        "default": true,
        "desc": "排版化的次级文案清单（非按钮控件）。",
        "publicKey": "showContact",
        "publicLabel": "次级文案",
        "description": "排版化的次级文案清单（非按钮控件）。"
      },
      {
        "key": "contactCount",
        "label": "联系条数",
        "type": "slider",
        "default": 3,
        "min": 1,
        "max": 3,
        "step": 1,
        "desc": "次级文案的条目数量。",
        "publicKey": "itemCount",
        "publicLabel": "联系条数",
        "description": "次级文案的条目数量。"
      },
      {
        "key": "showKicker",
        "label": "装饰引言",
        "type": "toggle",
        "default": true,
        "desc": "谢幕语上方的装饰引导标签。",
        "publicKey": "showKicker",
        "publicLabel": "装饰引言",
        "description": "谢幕语上方的装饰引导标签。"
      },
      {
        "key": "showGhostMark",
        "label": "背景大字符",
        "type": "toggle",
        "default": true,
        "desc": "角落超大幽灵字符装饰。",
        "publicKey": "showGhostMark",
        "publicLabel": "背景大字符",
        "description": "角落超大幽灵字符装饰。"
      },
      {
        "key": "showScaffold",
        "label": "边框骨架",
        "type": "toggle",
        "default": true,
        "desc": "侧边竖排标签与四角括线。",
        "publicKey": "showScaffold",
        "publicLabel": "边框骨架",
        "description": "侧边竖排标签与四角括线。"
      },
      {
        "key": "showMeta",
        "label": "底部信息条",
        "type": "toggle",
        "default": true,
        "desc": "底部页脚信息与进度条。",
        "publicKey": "showMeta",
        "publicLabel": "底部信息条",
        "description": "底部页脚信息与进度条。"
      }
    ],
    "defaultProps": {
      "surface": "ink",
      "imageCount": 1,
      "image": "",
      "imagePosition": "right",
      "imageMode": "fill",
      "showSub": true,
      "showRule": true,
      "showContact": true,
      "contactCount": 3,
      "showKicker": true,
      "showGhostMark": true,
      "showScaffold": true,
      "showMeta": true,
      "ghostMark": "↗",
      "railText": "Thank you — 谢幕",
      "navItems": [
        "谢幕"
      ],
      "navCurrent": 0,
      "ixNo": "82",
      "ixLabel": "End",
      "kickerEn": "Thank you",
      "kickerZh": "谢谢",
      "headingHtml": "一起，<br><span class=\"ign-serif\">把它点燃</span>。",
      "sub": "增长不是等来的。准备好了，我们随时可以开始第一次诊断。",
      "badge": "IGNIS · 燃点",
      "imagePlaceholderFill": "配图 · 满铺",
      "imagePlaceholderRatio": "配图 · 原比例",
      "contact": [
        {
          "k": "官网",
          "v": "ignis.studio",
          "ar": "↗"
        },
        {
          "k": "邮箱",
          "v": "hi@ignis.studio",
          "ar": "→"
        },
        {
          "k": "电话",
          "v": "400-820-1958",
          "ar": ""
        }
      ],
      "metaLeft": "IGNIS — 燃点 · 增长引擎",
      "metaMid": "流量会停，复利不会"
    }
  }
];
