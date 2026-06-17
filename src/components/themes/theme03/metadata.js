export const theme = {
  "key": "theme03",
  "displayName": "深浅代码风",
  "label": "深浅代码风",
  "name": "深浅代码风",
  "scenario": "技术方案、开发者大会、系统架构、AI 工程实践",
  "audience": "工程师、技术管理者、架构师、开发者社区",
  "mode": "replace"
};
export const pages = [
  {
    "key": "theme03_page001",
    "themeKey": "theme03",
    "pageNumber": 1,
    "layout": "THEME03-001",
    "slot": "cover",
    "label": "封面",
    "bgClass": "",
    "controls": [
      {
        "key": "forceDark",
        "label": "全局深色",
        "type": "toggle",
        "default": true,
        "desc": "复刻 Claude Design 右上角深浅配色切换。",
        "publicKey": "forceDark",
        "publicLabel": "全局深色",
        "description": "复刻 Claude Design 右上角深浅配色切换。"
      },
      {
        "key": "showEyebrow",
        "label": "装饰标签",
        "type": "toggle",
        "default": true,
        "publicKey": "showEyebrow",
        "publicLabel": "装饰标签"
      },
      {
        "key": "showFigure",
        "label": "重点数字",
        "type": "toggle",
        "default": true,
        "publicKey": "showFigure",
        "publicLabel": "重点数字"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "select",
        "default": "blue",
        "options": [
          {
            "value": "blue",
            "label": "电光蓝"
          },
          {
            "value": "lime",
            "label": "荧光绿"
          }
        ],
        "publicKey": "accent",
        "publicLabel": "强调色"
      },
      {
        "key": "imageCount",
        "label": "图片数量",
        "type": "slider",
        "default": 1,
        "min": 0,
        "max": 3,
        "step": 1,
        "publicKey": "imageCount",
        "publicLabel": "图片数量"
      },
      {
        "key": "showMeta",
        "label": "页脚信息",
        "type": "toggle",
        "default": true,
        "publicKey": "showMeta",
        "publicLabel": "页脚信息"
      }
    ],
    "defaultProps": {
      "showEyebrow": true,
      "showFigure": true,
      "accent": "blue",
      "imageCount": 1,
      "showMeta": true,
      "eyebrow": "调研报告 · 2024",
      "kicker": "AI · VENTURE CAPITAL // USA",
      "titlePrefix": "2024 美国大额融资",
      "titleAccent": "AI",
      "titleSuffix": " 公司调研报告",
      "lead": "2024 年是美国人工智能产业的「资本大年」。本报告聚焦单笔 ≥1 亿美元的大额融资事件，以横纵分析法梳理市场全景、行业分布、轮次结构与典型案例。",
      "figureValue": "970",
      "figureUnit": "亿美元",
      "figureLabel": "全年 AI 风险投资额",
      "figureCaption": "占全美风险投资近 ⅓ · 97 笔大额融资事件",
      "galleryCaption": "封面配图 / DROP IMAGE",
      "meta": [
        "编制 · 2026.06",
        "口径 · ≥1 亿美元公开融资",
        "横纵分析法",
        "仅供研究参考"
      ],
      "forceDark": true
    }
  },
  {
    "key": "theme03_page002",
    "themeKey": "theme03",
    "pageNumber": 2,
    "layout": "THEME03-002",
    "slot": "coverband",
    "label": "封面·横向",
    "bgClass": "",
    "controls": [
      {
        "key": "forceDark",
        "label": "全局深色",
        "type": "toggle",
        "default": true,
        "desc": "复刻 Claude Design 右上角深浅配色切换。",
        "publicKey": "forceDark",
        "publicLabel": "全局深色",
        "description": "复刻 Claude Design 右上角深浅配色切换。"
      },
      {
        "key": "showEyebrow",
        "label": "装饰标签",
        "type": "toggle",
        "default": true,
        "publicKey": "showEyebrow",
        "publicLabel": "装饰标签"
      },
      {
        "key": "theme",
        "label": "背景主题",
        "type": "select",
        "default": "light",
        "options": [
          {
            "value": "dark",
            "label": "深色"
          },
          {
            "value": "light",
            "label": "浅色"
          }
        ],
        "publicKey": "theme",
        "publicLabel": "背景主题"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "select",
        "default": "blue",
        "options": [
          {
            "value": "blue",
            "label": "电光蓝"
          },
          {
            "value": "lime",
            "label": "荧光绿"
          }
        ],
        "publicKey": "accent",
        "publicLabel": "强调色"
      },
      {
        "key": "statCount",
        "label": "数据条目",
        "type": "slider",
        "default": 3,
        "min": 0,
        "max": 4,
        "step": 1,
        "publicKey": "itemCount",
        "publicLabel": "数据条目"
      },
      {
        "key": "showMeta",
        "label": "页脚信息",
        "type": "toggle",
        "default": true,
        "publicKey": "showMeta",
        "publicLabel": "页脚信息"
      }
    ],
    "defaultProps": {
      "showEyebrow": true,
      "theme": "light",
      "accent": "blue",
      "statCount": 3,
      "showMeta": true,
      "eyebrow": "行业研究报告 · 年度",
      "kicker": "SMART HARDWARE // CHINA 2026",
      "titleA": "2026 中国",
      "titleAccent": "智能硬件",
      "titleB": " 产业",
      "titleC": "增长报告",
      "sub": "供应链、终端体验与生态格局的全景扫描 —— 一份关于「谁在增长、增长从何而来」的结构化研究。",
      "stats": [
        {
          "v": "4820",
          "u": "亿元",
          "k": "市场规模 / 2026E"
        },
        {
          "v": "+38",
          "u": "%",
          "k": "整体同比增速"
        },
        {
          "v": "97",
          "u": "家",
          "k": "头部厂商样本"
        },
        {
          "v": "12",
          "u": "类",
          "k": "覆盖核心品类"
        }
      ],
      "meta": [
        "编制 · 2026.06",
        "口径 · 公开市场数据 + 厂商调研",
        "样本 · 2,400+",
        "仅供研究参考"
      ],
      "forceDark": true
    }
  },
  {
    "key": "theme03_page003",
    "themeKey": "theme03",
    "pageNumber": 3,
    "layout": "THEME03-003",
    "slot": "coverposter",
    "label": "封面·海报",
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
        "key": "forceDark",
        "label": "全局深色",
        "type": "toggle",
        "default": true,
        "desc": "复刻 Claude Design 右上角深浅配色切换。",
        "publicKey": "forceDark",
        "publicLabel": "全局深色",
        "description": "复刻 Claude Design 右上角深浅配色切换。"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "select",
        "default": "blue",
        "options": [
          {
            "value": "blue",
            "label": "电光蓝"
          },
          {
            "value": "lime",
            "label": "荧光绿"
          }
        ],
        "desc": "theme03 全局强调色，作用于该主题所有页面。",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "theme03 全局强调色，作用于该主题所有页面。"
      },
      {
        "key": "imageCount",
        "label": "背景图",
        "type": "slider",
        "default": 1,
        "min": 0,
        "max": 1,
        "step": 1,
        "dependsOn": "backgroundMode",
        "dependsOnValue": "media",
        "publicKey": "imageCount",
        "publicLabel": "背景图"
      },
      {
        "key": "showEyebrow",
        "label": "中央标签",
        "type": "toggle",
        "default": true,
        "publicKey": "showEyebrow",
        "publicLabel": "中央标签"
      },
      {
        "key": "theme",
        "label": "背景主题",
        "type": "select",
        "default": "light",
        "options": [
          {
            "value": "dark",
            "label": "深色"
          },
          {
            "value": "light",
            "label": "浅色"
          }
        ],
        "publicKey": "theme",
        "publicLabel": "背景主题"
      },
      {
        "key": "showFrame",
        "label": "描边边框",
        "type": "toggle",
        "default": true,
        "publicKey": "showFrame",
        "publicLabel": "描边边框"
      },
      {
        "key": "showFigure",
        "label": "核心数字",
        "type": "toggle",
        "default": true,
        "publicKey": "showFigure",
        "publicLabel": "核心数字"
      },
      {
        "key": "showMeta",
        "label": "页脚信息",
        "type": "toggle",
        "default": true,
        "publicKey": "showMeta",
        "publicLabel": "页脚信息"
      },
      {
        "key": "showDecor",
        "label": "装饰图片",
        "type": "toggle",
        "default": false,
        "publicKey": "showDecor",
        "publicLabel": "装饰图片"
      },
      {
        "key": "decorSrc",
        "label": "装饰元素",
        "type": "icons",
        "options": [
          {
            "value": "assets/3d/01.png",
            "label": "胜利手势",
            "image": "assets/3d/01.png"
          },
          {
            "value": "assets/3d/02.png",
            "label": "YES 按键",
            "image": "assets/3d/02.png"
          },
          {
            "value": "assets/3d/03.png",
            "label": "404 方块",
            "image": "assets/3d/03.png"
          },
          {
            "value": "assets/3d/04.png",
            "label": "8-bit 幽灵",
            "image": "assets/3d/04.png"
          },
          {
            "value": "assets/3d/05.png",
            "label": "YES 气泡",
            "image": "assets/3d/05.png"
          },
          {
            "value": "assets/3d/06.png",
            "label": "掌机图表",
            "image": "assets/3d/06.png"
          },
          {
            "value": "assets/3d/07.png",
            "label": "像素显示器",
            "image": "assets/3d/07.png"
          },
          {
            "value": "assets/3d/08.png",
            "label": "复古电脑",
            "image": "assets/3d/08.png"
          },
          {
            "value": "assets/3d/09.png",
            "label": "拍立得",
            "image": "assets/3d/09.png"
          },
          {
            "value": "assets/3d/10.png",
            "label": "奖杯",
            "image": "assets/3d/10.png"
          },
          {
            "value": "assets/3d/11.png",
            "label": "文件夹",
            "image": "assets/3d/11.png"
          },
          {
            "value": "assets/3d/12.png",
            "label": "番茄箱",
            "image": "assets/3d/12.png"
          }
        ],
        "publicKey": "decorSrc",
        "publicLabel": "装饰元素"
      },
      {
        "key": "decorScale",
        "label": "图片大小",
        "type": "slider",
        "default": 1,
        "min": 0.6,
        "max": 1.6,
        "step": 0.05,
        "publicKey": "decorScale",
        "publicLabel": "图片大小"
      }
    ],
    "defaultProps": {
      "showEyebrow": true,
      "theme": "light",
      "accent": "blue",
      "backgroundMode": "unicorn",
      "unicornScene": "automations",
      "imageCount": 1,
      "imageCaption": "背景图 / DROP IMAGE",
      "showFrame": true,
      "showFigure": true,
      "showMeta": true,
      "eyebrow": "行业研究报告 · 年度专题",
      "titleA": "2026 中国智能硬件",
      "titleB": "产业",
      "titleAccent": "增长",
      "titleC": "报告",
      "sub": "供应链、终端体验与生态格局的全景扫描",
      "figureValue": "4820",
      "figureCaption": "亿元市场规模 · 同比 +38%",
      "corners": [
        {
          "pos": {
            "top": 0,
            "left": 0
          },
          "t": "VOL. 04"
        },
        {
          "pos": {
            "top": 0,
            "right": 0
          },
          "t": "2026.06"
        },
        {
          "pos": {
            "bottom": 0,
            "left": 0
          },
          "t": "RESEARCH"
        },
        {
          "pos": {
            "bottom": 0,
            "right": 0
          },
          "t": "CN // HW"
        }
      ],
      "meta": [
        "编制 · 2026.06",
        "口径 · 公开市场数据",
        "样本 · 2,400+"
      ],
      "showDecor": false,
      "decorSrc": null,
      "decorScale": 1,
      "forceDark": true
    }
  },
  {
    "key": "theme03_page004",
    "themeKey": "theme03",
    "pageNumber": 4,
    "layout": "THEME03-004",
    "slot": "covergrid",
    "label": "封面·网格",
    "bgClass": "",
    "controls": [
      {
        "key": "forceDark",
        "label": "全局深色",
        "type": "toggle",
        "default": true,
        "desc": "复刻 Claude Design 右上角深浅配色切换。",
        "publicKey": "forceDark",
        "publicLabel": "全局深色",
        "description": "复刻 Claude Design 右上角深浅配色切换。"
      },
      {
        "key": "showEyebrow",
        "label": "装饰标签",
        "type": "toggle",
        "default": true,
        "publicKey": "showEyebrow",
        "publicLabel": "装饰标签"
      },
      {
        "key": "theme",
        "label": "背景主题",
        "type": "select",
        "default": "light",
        "options": [
          {
            "value": "dark",
            "label": "深色"
          },
          {
            "value": "light",
            "label": "浅色"
          }
        ],
        "publicKey": "theme",
        "publicLabel": "背景主题"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "select",
        "default": "blue",
        "options": [
          {
            "value": "blue",
            "label": "电光蓝"
          },
          {
            "value": "lime",
            "label": "荧光绿"
          }
        ],
        "publicKey": "accent",
        "publicLabel": "强调色"
      },
      {
        "key": "showFigure",
        "label": "巨数模块",
        "type": "toggle",
        "default": true,
        "publicKey": "showFigure",
        "publicLabel": "巨数模块"
      },
      {
        "key": "showPunch",
        "label": "荧光绿块",
        "type": "toggle",
        "default": true,
        "publicKey": "showPunch",
        "publicLabel": "荧光绿块"
      },
      {
        "key": "showMeta",
        "label": "元数据块",
        "type": "toggle",
        "default": true,
        "publicKey": "showMeta",
        "publicLabel": "元数据块"
      }
    ],
    "defaultProps": {
      "showEyebrow": true,
      "theme": "light",
      "accent": "blue",
      "showFigure": true,
      "showPunch": true,
      "showMeta": true,
      "eyebrow": "行业研究报告 · 04",
      "kicker": "SMART HARDWARE // CHINA · 2026",
      "titleKicker": "ANNUAL · 年度增长研究",
      "titleA": "2026 中国",
      "titleAccent": "智能硬件",
      "titleC": "增长报告",
      "titleBody": "供应链、终端体验与生态格局的全景扫描。",
      "figureLabel": "市场规模 / 2026E",
      "figureValue": "4820",
      "figureUnit": "亿元 · 同比 +38%",
      "figureNote": "— 97 家头部厂商样本",
      "punchKicker": "核心判断 / THESIS",
      "punchText": "增长来自结构性升级，\n而非总量扩张。",
      "metaLines": [
        "编制 · 2026.06",
        "口径 · 公开市场数据 + 厂商调研",
        "样本 · 2,400+ · 仅供研究参考"
      ],
      "metaStrip": [
        "编制 · 2026.06",
        "口径 · 公开市场数据 + 厂商调研",
        "样本 · 2,400+",
        "仅供研究参考"
      ],
      "forceDark": true
    }
  },
  {
    "key": "theme03_page005",
    "themeKey": "theme03",
    "pageNumber": 5,
    "layout": "THEME03-005",
    "slot": "coverimage",
    "label": "封面·影像",
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
        "key": "forceDark",
        "label": "全局深色",
        "type": "toggle",
        "default": true,
        "desc": "复刻 Claude Design 右上角深浅配色切换。",
        "publicKey": "forceDark",
        "publicLabel": "全局深色",
        "description": "复刻 Claude Design 右上角深浅配色切换。"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "select",
        "default": "blue",
        "options": [
          {
            "value": "blue",
            "label": "电光蓝"
          },
          {
            "value": "lime",
            "label": "荧光绿"
          }
        ],
        "desc": "theme03 全局强调色，作用于该主题所有页面。",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "theme03 全局强调色，作用于该主题所有页面。"
      },
      {
        "key": "showEyebrow",
        "label": "装饰标签",
        "type": "toggle",
        "default": true,
        "publicKey": "showEyebrow",
        "publicLabel": "装饰标签"
      },
      {
        "key": "theme",
        "label": "背景主题",
        "type": "select",
        "default": "light",
        "options": [
          {
            "value": "dark",
            "label": "深色"
          },
          {
            "value": "light",
            "label": "浅色"
          }
        ],
        "publicKey": "theme",
        "publicLabel": "背景主题"
      },
      {
        "key": "imageCount",
        "label": "图片数量",
        "type": "slider",
        "default": 1,
        "min": 0,
        "max": 1,
        "step": 1,
        "publicKey": "imageCount",
        "publicLabel": "图片数量"
      },
      {
        "key": "showFigure",
        "label": "核心数字",
        "type": "toggle",
        "default": true,
        "publicKey": "showFigure",
        "publicLabel": "核心数字"
      },
      {
        "key": "showMeta",
        "label": "底部数据",
        "type": "toggle",
        "default": true,
        "publicKey": "showMeta",
        "publicLabel": "底部数据"
      },
      {
        "key": "showDecor",
        "label": "装饰图片",
        "type": "toggle",
        "default": false,
        "publicKey": "showDecor",
        "publicLabel": "装饰图片"
      },
      {
        "key": "decorSrc",
        "label": "装饰元素",
        "type": "icons",
        "options": [
          {
            "value": "assets/3d/01.png",
            "label": "胜利手势",
            "image": "assets/3d/01.png"
          },
          {
            "value": "assets/3d/02.png",
            "label": "YES 按键",
            "image": "assets/3d/02.png"
          },
          {
            "value": "assets/3d/03.png",
            "label": "404 方块",
            "image": "assets/3d/03.png"
          },
          {
            "value": "assets/3d/04.png",
            "label": "8-bit 幽灵",
            "image": "assets/3d/04.png"
          },
          {
            "value": "assets/3d/05.png",
            "label": "YES 气泡",
            "image": "assets/3d/05.png"
          },
          {
            "value": "assets/3d/06.png",
            "label": "掌机图表",
            "image": "assets/3d/06.png"
          },
          {
            "value": "assets/3d/07.png",
            "label": "像素显示器",
            "image": "assets/3d/07.png"
          },
          {
            "value": "assets/3d/08.png",
            "label": "复古电脑",
            "image": "assets/3d/08.png"
          },
          {
            "value": "assets/3d/09.png",
            "label": "拍立得",
            "image": "assets/3d/09.png"
          },
          {
            "value": "assets/3d/10.png",
            "label": "奖杯",
            "image": "assets/3d/10.png"
          },
          {
            "value": "assets/3d/11.png",
            "label": "文件夹",
            "image": "assets/3d/11.png"
          },
          {
            "value": "assets/3d/12.png",
            "label": "番茄箱",
            "image": "assets/3d/12.png"
          }
        ],
        "publicKey": "decorSrc",
        "publicLabel": "装饰元素"
      },
      {
        "key": "decorScale",
        "label": "图片大小",
        "type": "slider",
        "default": 1,
        "min": 0.6,
        "max": 1.6,
        "step": 0.05,
        "publicKey": "decorScale",
        "publicLabel": "图片大小"
      }
    ],
    "defaultProps": {
      "showEyebrow": true,
      "theme": "light",
      "imageCount": 1,
      "backgroundMode": "unicorn",
      "unicornScene": "moving",
      "accent": "blue",
      "showFigure": true,
      "showMeta": true,
      "eyebrow": "行业研究报告 · 年度",
      "kicker": "SMART HARDWARE // CHINA 2026",
      "titleKicker": "年度增长研究 · 封面",
      "titleA": "2026 中国",
      "titleAccent": "智能硬件",
      "titleC": "产业增长报告",
      "sub": "供应链、终端体验与生态格局的全景扫描。",
      "imageCaption": "封面主视觉 / DROP HERO IMAGE",
      "figureValue": "+38",
      "figureUnit": "%",
      "figureCaption": "整体市场 · 同比增速",
      "meta": [
        {
          "v": "4820 亿",
          "k": "市场规模 · 元 / 2026E"
        },
        {
          "v": "+38%",
          "k": "整体同比增速"
        },
        {
          "v": "97 家",
          "k": "头部厂商样本"
        }
      ],
      "showDecor": false,
      "decorSrc": null,
      "decorScale": 1,
      "forceDark": true
    }
  },
  {
    "key": "theme03_page006",
    "themeKey": "theme03",
    "pageNumber": 6,
    "layout": "THEME03-006",
    "slot": "agenda",
    "label": "导览",
    "bgClass": "",
    "controls": [
      {
        "key": "forceDark",
        "label": "全局深色",
        "type": "toggle",
        "default": true,
        "desc": "复刻 Claude Design 右上角深浅配色切换。",
        "publicKey": "forceDark",
        "publicLabel": "全局深色",
        "description": "复刻 Claude Design 右上角深浅配色切换。"
      },
      {
        "key": "showEyebrow",
        "label": "装饰标签",
        "type": "toggle",
        "default": true,
        "publicKey": "showEyebrow",
        "publicLabel": "装饰标签"
      },
      {
        "key": "itemCount",
        "label": "章节数量",
        "type": "slider",
        "default": 7,
        "min": 4,
        "max": 7,
        "step": 1,
        "publicKey": "itemCount",
        "publicLabel": "章节数量"
      },
      {
        "key": "columns",
        "label": "栏目布局",
        "type": "select",
        "default": "1",
        "options": [
          {
            "value": "1",
            "label": "单栏"
          },
          {
            "value": "2",
            "label": "双栏"
          }
        ],
        "publicKey": "columns",
        "publicLabel": "栏目布局"
      },
      {
        "key": "showRule",
        "label": "分隔线",
        "type": "toggle",
        "default": true,
        "publicKey": "showRule",
        "publicLabel": "分隔线"
      },
      {
        "key": "focusEnabled",
        "label": "重点突出",
        "type": "toggle",
        "default": false,
        "publicKey": "focusEnabled",
        "publicLabel": "重点突出"
      },
      {
        "key": "focusIndex",
        "label": "突出项",
        "type": "slider",
        "default": 0,
        "min": 0,
        "max": 6,
        "step": 1,
        "publicKey": "focusIndex",
        "publicLabel": "突出项"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "select",
        "default": "blue",
        "options": [
          {
            "value": "blue",
            "label": "电光蓝"
          },
          {
            "value": "lime",
            "label": "荧光绿"
          }
        ],
        "publicKey": "accent",
        "publicLabel": "强调色"
      }
    ],
    "defaultProps": {
      "showEyebrow": true,
      "itemCount": 7,
      "columns": "1",
      "showRule": true,
      "focusEnabled": false,
      "focusIndex": 0,
      "accent": "blue",
      "eyebrow": "导览 / CONTENTS",
      "kicker": "07 章 · 横纵分析法",
      "titlePre": "报告",
      "titleAccent": "导览",
      "chapters": [
        {
          "idx": "01",
          "title": "研究方法 · 横纵分析法",
          "en": "METHODOLOGY"
        },
        {
          "idx": "02",
          "title": "市场全景 · 纵向趋势",
          "en": "MARKET PANORAMA"
        },
        {
          "idx": "03",
          "title": "横向透视 · 行业·轮次·头部",
          "en": "HORIZONTAL VIEW"
        },
        {
          "idx": "04",
          "title": "产业链分层 · 上中下游",
          "en": "VALUE CHAIN"
        },
        {
          "idx": "05",
          "title": "典型案例 · 深度剖析",
          "en": "CASE STUDIES"
        },
        {
          "idx": "06",
          "title": "风险研判与投资展望",
          "en": "RISK & OUTLOOK"
        },
        {
          "idx": "07",
          "title": "结论 · 横纵收束",
          "en": "CONCLUSION"
        }
      ],
      "forceDark": true
    }
  },
  {
    "key": "theme03_page007",
    "themeKey": "theme03",
    "pageNumber": 7,
    "layout": "THEME03-007",
    "slot": "method",
    "label": "研究方法",
    "bgClass": "",
    "controls": [
      {
        "key": "forceDark",
        "label": "全局深色",
        "type": "toggle",
        "default": true,
        "desc": "复刻 Claude Design 右上角深浅配色切换。",
        "publicKey": "forceDark",
        "publicLabel": "全局深色",
        "description": "复刻 Claude Design 右上角深浅配色切换。"
      },
      {
        "key": "showEyebrow",
        "label": "装饰标签",
        "type": "toggle",
        "default": true,
        "publicKey": "showEyebrow",
        "publicLabel": "装饰标签"
      },
      {
        "key": "cardCount",
        "label": "卡片数量",
        "type": "slider",
        "default": 2,
        "min": 1,
        "max": 3,
        "step": 1,
        "publicKey": "cardCount",
        "publicLabel": "卡片数量"
      },
      {
        "key": "showDiagram",
        "label": "装饰图形",
        "type": "toggle",
        "default": true,
        "publicKey": "showDiagram",
        "publicLabel": "装饰图形"
      },
      {
        "key": "diagramStyle1",
        "label": "图形类型 1",
        "type": "select",
        "default": "auto",
        "options": [
          {
            "value": "auto",
            "label": "自动"
          },
          {
            "value": "radial",
            "label": "网格"
          },
          {
            "value": "burst",
            "label": "放射"
          },
          {
            "value": "orbit",
            "label": "环轨"
          },
          {
            "value": "mesh",
            "label": "矩阵"
          },
          {
            "value": "spiral",
            "label": "螺旋"
          },
          {
            "value": "constellation",
            "label": "星座"
          }
        ],
        "countKey": "cardCount",
        "countIndex": 0,
        "publicKey": "diagramStyle1",
        "publicLabel": "图形类型 1"
      },
      {
        "key": "diagramStyle2",
        "label": "图形类型 2",
        "type": "select",
        "default": "auto",
        "options": [
          {
            "value": "auto",
            "label": "自动"
          },
          {
            "value": "radial",
            "label": "网格"
          },
          {
            "value": "burst",
            "label": "放射"
          },
          {
            "value": "orbit",
            "label": "环轨"
          },
          {
            "value": "mesh",
            "label": "矩阵"
          },
          {
            "value": "spiral",
            "label": "螺旋"
          },
          {
            "value": "constellation",
            "label": "星座"
          }
        ],
        "countKey": "cardCount",
        "countIndex": 1,
        "publicKey": "diagramStyle2",
        "publicLabel": "图形类型 2"
      },
      {
        "key": "diagramStyle3",
        "label": "图形类型 3",
        "type": "select",
        "default": "auto",
        "options": [
          {
            "value": "auto",
            "label": "自动"
          },
          {
            "value": "radial",
            "label": "网格"
          },
          {
            "value": "burst",
            "label": "放射"
          },
          {
            "value": "orbit",
            "label": "环轨"
          },
          {
            "value": "mesh",
            "label": "矩阵"
          },
          {
            "value": "spiral",
            "label": "螺旋"
          },
          {
            "value": "constellation",
            "label": "星座"
          }
        ],
        "countKey": "cardCount",
        "countIndex": 2,
        "publicKey": "diagramStyle3",
        "publicLabel": "图形类型 3"
      },
      {
        "key": "focusEnabled",
        "label": "重点突出",
        "type": "toggle",
        "default": false,
        "publicKey": "focusEnabled",
        "publicLabel": "重点突出"
      },
      {
        "key": "focusIndex",
        "label": "突出项",
        "type": "slider",
        "default": 0,
        "min": 0,
        "max": 2,
        "step": 1,
        "publicKey": "focusIndex",
        "publicLabel": "突出项"
      }
    ],
    "defaultProps": {
      "showEyebrow": true,
      "cardCount": 2,
      "showDiagram": true,
      "diagramStyle": "auto",
      "diagramStyle1": "auto",
      "diagramStyle2": "auto",
      "diagramStyle3": "auto",
      "focusEnabled": false,
      "focusIndex": 0,
      "eyebrow": "研究方法 / METHOD",
      "kicker": "01 / 横纵分析框架",
      "leadTitle": "横纵分析法",
      "leadBody": "本报告以横纵分析法为基本框架——从两个正交的维度切入同一组数据，互为补充，避免单一视角的盲区。",
      "leadNote": "↳ 横向看集中 · 纵向看节奏",
      "cards": [
        {
          "idx": "01",
          "name": "横向",
          "dim": "空间维度 // 对比",
          "desc": "在同一时间截面上，对不同公司、赛道、轮次与地区做横向对比，回答「谁更大、谁更密集、资源集中在哪里」。"
        },
        {
          "idx": "02",
          "name": "纵向",
          "dim": "时间维度 // 趋势",
          "desc": "沿时间轴追踪同一指标的演化，回答「趋势向上还是向下、拐点在何处、节奏是否可持续」。"
        },
        {
          "idx": "03",
          "name": "交叉",
          "dim": "结构维度 // 因果",
          "desc": "两个维度交叉后，识别产业链的层级结构与因果传导关系，定位结构性机会所在。"
        }
      ],
      "forceDark": true
    }
  },
  {
    "key": "theme03_page008",
    "themeKey": "theme03",
    "pageNumber": 8,
    "layout": "THEME03-008",
    "slot": "trend",
    "label": "市场全景",
    "bgClass": "",
    "controls": [
      {
        "key": "forceDark",
        "label": "全局深色",
        "type": "toggle",
        "default": true,
        "desc": "复刻 Claude Design 右上角深浅配色切换。",
        "publicKey": "forceDark",
        "publicLabel": "全局深色",
        "description": "复刻 Claude Design 右上角深浅配色切换。"
      },
      {
        "key": "showEyebrow",
        "label": "装饰标签",
        "type": "toggle",
        "default": true,
        "publicKey": "showEyebrow",
        "publicLabel": "装饰标签"
      },
      {
        "key": "chartType",
        "label": "图表类型",
        "type": "select",
        "default": "line",
        "options": [
          {
            "value": "line",
            "label": "折线"
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
        "publicKey": "chartType",
        "publicLabel": "图表类型"
      },
      {
        "key": "showSecondary",
        "label": "次级系列",
        "type": "toggle",
        "default": true,
        "publicKey": "showSecondary",
        "publicLabel": "次级系列"
      },
      {
        "key": "showGrid",
        "label": "网格线",
        "type": "toggle",
        "default": true,
        "publicKey": "showGrid",
        "publicLabel": "网格线"
      },
      {
        "key": "focusEnabled",
        "label": "重点突出",
        "type": "toggle",
        "default": true,
        "publicKey": "focusEnabled",
        "publicLabel": "重点突出"
      },
      {
        "key": "focusIndex",
        "label": "突出项",
        "type": "slider",
        "default": 2,
        "min": 0,
        "max": 3,
        "step": 1,
        "publicKey": "focusIndex",
        "publicLabel": "突出项"
      },
      {
        "key": "showAnnotation",
        "label": "装饰解读",
        "type": "toggle",
        "default": true,
        "publicKey": "showAnnotation",
        "publicLabel": "装饰解读"
      }
    ],
    "defaultProps": {
      "showEyebrow": true,
      "chartType": "line",
      "showSecondary": true,
      "showGrid": true,
      "focusEnabled": true,
      "focusIndex": 2,
      "showAnnotation": true,
      "eyebrow": "市场全景 / 02",
      "kicker": "单笔 ≥1 亿美元 · 单位：亿美元",
      "chartTitle": "逐季度融资额走势",
      "figureValue": "970",
      "figureUnit": "亿美元",
      "figureCaption": "全年合计 · 97 笔事件 · 平均单笔约 10 亿美元",
      "annotationLabel": "↳ 趋势解读",
      "annotationBody": "Q2、Q3 为融资高峰，进入 Q4 有所回落但仍处高位。市场对头部标的高度追捧，全年呈「前高后稳」态势。",
      "primaryLegend": "融资总额",
      "secondaryLegend": "事件笔数",
      "data": [
        {
          "label": "Q1",
          "amount": 162,
          "count": 18
        },
        {
          "label": "Q2",
          "amount": 284,
          "count": 26
        },
        {
          "label": "Q3",
          "amount": 318,
          "count": 31
        },
        {
          "label": "Q4",
          "amount": 206,
          "count": 22
        }
      ],
      "forceDark": true
    }
  },
  {
    "key": "theme03_page009",
    "themeKey": "theme03",
    "pageNumber": 9,
    "layout": "THEME03-009",
    "slot": "chronicle",
    "label": "年度编年",
    "bgClass": "",
    "controls": [
      {
        "key": "forceDark",
        "label": "全局深色",
        "type": "toggle",
        "default": true,
        "desc": "复刻 Claude Design 右上角深浅配色切换。",
        "publicKey": "forceDark",
        "publicLabel": "全局深色",
        "description": "复刻 Claude Design 右上角深浅配色切换。"
      },
      {
        "key": "showEyebrow",
        "label": "装饰标签",
        "type": "toggle",
        "default": true,
        "publicKey": "showEyebrow",
        "publicLabel": "装饰标签"
      },
      {
        "key": "itemCount",
        "label": "节点数量",
        "type": "slider",
        "default": 6,
        "min": 3,
        "max": 6,
        "step": 1,
        "publicKey": "itemCount",
        "publicLabel": "节点数量"
      },
      {
        "key": "showConnector",
        "label": "连接轨道",
        "type": "toggle",
        "default": true,
        "publicKey": "showConnector",
        "publicLabel": "连接轨道"
      },
      {
        "key": "showMetric",
        "label": "关键数字",
        "type": "toggle",
        "default": true,
        "publicKey": "showMetric",
        "publicLabel": "关键数字"
      },
      {
        "key": "focusEnabled",
        "label": "重点突出",
        "type": "toggle",
        "default": true,
        "publicKey": "focusEnabled",
        "publicLabel": "重点突出"
      },
      {
        "key": "focusIndex",
        "label": "突出项",
        "type": "slider",
        "default": 3,
        "min": 0,
        "max": 5,
        "step": 1,
        "publicKey": "focusIndex",
        "publicLabel": "突出项"
      },
      {
        "key": "showMeta",
        "label": "底部口径",
        "type": "toggle",
        "default": true,
        "publicKey": "showMeta",
        "publicLabel": "底部口径"
      },
      {
        "key": "theme",
        "label": "主题",
        "type": "select",
        "default": "light",
        "options": [
          {
            "value": "light",
            "label": "浅色"
          },
          {
            "value": "dark",
            "label": "深色"
          }
        ],
        "publicKey": "theme",
        "publicLabel": "主题"
      }
    ],
    "defaultProps": {
      "showEyebrow": true,
      "itemCount": 6,
      "showConnector": true,
      "showMetric": true,
      "focusEnabled": true,
      "focusIndex": 3,
      "showMeta": true,
      "theme": "light",
      "eyebrow": "市场全景 / CHRONICLE",
      "kicker": "2024 · 资本年度编年",
      "title": "大额融资 · 年度编年",
      "titleNote": "前高后稳 · 双峰节奏 · 头部反超",
      "metaLabel": "↳ 节奏",
      "metaPre": "Q2–Q3 达峰后理性回落，",
      "metaStrong": "5 月、8 月两度冲高",
      "metaPost": "，11 月 Anthropic 估值反超、xAI 入局——全年呈“前高后稳”，市场从狂热走向分化。",
      "events": [
        {
          "time": "01–03 月",
          "title": "资本大年开局",
          "tag": "市场起步",
          "val": "162",
          "unit": "亿 · 18 笔"
        },
        {
          "time": "5 月",
          "title": "Anthropic Series G",
          "tag": "估值 600 亿",
          "val": "105",
          "unit": "亿 · 单月"
        },
        {
          "time": "8 月",
          "title": "头部集中关账",
          "tag": "全年最高月",
          "val": "118",
          "unit": "亿 · 单月"
        },
        {
          "time": "11 月",
          "title": "Anthropic 反超 · xAI 入局",
          "tag": "估值 9650 / 500 亿",
          "val": "50",
          "unit": "亿 · xAI"
        },
        {
          "time": "12 月",
          "title": "狂热转向分化",
          "tag": "理性回落",
          "val": "52",
          "unit": "亿 · 单月"
        },
        {
          "time": "全年",
          "title": "创历史新高",
          "tag": "占全美风投近 1/3",
          "val": "970",
          "unit": "亿 · 97 笔"
        }
      ],
      "forceDark": true
    }
  },
  {
    "key": "theme03_page010",
    "themeKey": "theme03",
    "pageNumber": 10,
    "layout": "THEME03-010",
    "slot": "sector",
    "label": "横向透视",
    "bgClass": "",
    "controls": [
      {
        "key": "forceDark",
        "label": "全局深色",
        "type": "toggle",
        "default": true,
        "desc": "复刻 Claude Design 右上角深浅配色切换。",
        "publicKey": "forceDark",
        "publicLabel": "全局深色",
        "description": "复刻 Claude Design 右上角深浅配色切换。"
      },
      {
        "key": "showEyebrow",
        "label": "装饰标签",
        "type": "toggle",
        "default": true,
        "publicKey": "showEyebrow",
        "publicLabel": "装饰标签"
      },
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
        "publicKey": "chartType",
        "publicLabel": "图表类型"
      },
      {
        "key": "focusEnabled",
        "label": "重点突出",
        "type": "toggle",
        "default": true,
        "publicKey": "focusEnabled",
        "publicLabel": "重点突出"
      },
      {
        "key": "focusIndex",
        "label": "突出项",
        "type": "slider",
        "default": 0,
        "min": 0,
        "max": 4,
        "step": 1,
        "publicKey": "focusIndex",
        "publicLabel": "突出项"
      },
      {
        "key": "dotFill",
        "label": "点阵填充",
        "type": "toggle",
        "default": true,
        "publicKey": "dotFill",
        "publicLabel": "点阵填充"
      },
      {
        "key": "showCenter",
        "label": "中心数据",
        "type": "toggle",
        "default": true,
        "publicKey": "showCenter",
        "publicLabel": "中心数据"
      },
      {
        "key": "showLegend",
        "label": "图例明细",
        "type": "toggle",
        "default": true,
        "publicKey": "showLegend",
        "publicLabel": "图例明细"
      },
      {
        "key": "showCallout",
        "label": "装饰解读",
        "type": "toggle",
        "default": true,
        "publicKey": "showCallout",
        "publicLabel": "装饰解读"
      }
    ],
    "defaultProps": {
      "showEyebrow": true,
      "chartType": "donut",
      "focusEnabled": true,
      "focusIndex": 0,
      "dotFill": true,
      "showCenter": true,
      "showLegend": true,
      "showCallout": true,
      "eyebrow": "横向透视 / 03",
      "kicker": "97 笔融资 · 按赛道归类",
      "title": "行业赛道融资额占比",
      "centerValue": "970",
      "centerUnit": "亿美元 · 100%",
      "calloutLabel": "↳ 核心发现",
      "calloutBody": "通用大模型占据近半壁江山，反映投资人押注「AGI 叙事」；垂直应用紧随其后，显示市场已开始寻找商业化路径；基础设施与芯片合计超四分之一，上游投资热度不减。",
      "data": [
        {
          "label": "通用大模型",
          "en": "Foundation Model",
          "amount": 420,
          "pct": 43.3
        },
        {
          "label": "垂直应用",
          "en": "Vertical AI",
          "amount": 245,
          "pct": 25.3
        },
        {
          "label": "AI 基础设施",
          "en": "Infrastructure",
          "amount": 158,
          "pct": 16.3
        },
        {
          "label": "AI 芯片",
          "en": "Hardware",
          "amount": 97,
          "pct": 10
        },
        {
          "label": "其他",
          "en": "Tooling · Safety",
          "amount": 50,
          "pct": 5.1
        }
      ],
      "copy": {
        "t001": "亿"
      },
      "forceDark": true
    }
  },
  {
    "key": "theme03_page011",
    "themeKey": "theme03",
    "pageNumber": 11,
    "layout": "THEME03-011",
    "slot": "rank",
    "label": "头部玩家",
    "bgClass": "",
    "controls": [
      {
        "key": "forceDark",
        "label": "全局深色",
        "type": "toggle",
        "default": true,
        "desc": "复刻 Claude Design 右上角深浅配色切换。",
        "publicKey": "forceDark",
        "publicLabel": "全局深色",
        "description": "复刻 Claude Design 右上角深浅配色切换。"
      },
      {
        "key": "showEyebrow",
        "label": "装饰标签",
        "type": "toggle",
        "default": true,
        "publicKey": "showEyebrow",
        "publicLabel": "装饰标签"
      },
      {
        "key": "itemCount",
        "label": "条目数量",
        "type": "slider",
        "default": 8,
        "min": 5,
        "max": 10,
        "step": 1,
        "publicKey": "itemCount",
        "publicLabel": "条目数量"
      },
      {
        "key": "chartType",
        "label": "图表类型",
        "type": "select",
        "default": "bar",
        "options": [
          {
            "value": "bar",
            "label": "条形"
          },
          {
            "value": "lollipop",
            "label": "棒棒糖"
          }
        ],
        "publicKey": "chartType",
        "publicLabel": "图表类型"
      },
      {
        "key": "focusEnabled",
        "label": "重点突出",
        "type": "toggle",
        "default": true,
        "publicKey": "focusEnabled",
        "publicLabel": "重点突出"
      },
      {
        "key": "focusIndex",
        "label": "突出项",
        "type": "slider",
        "default": 0,
        "min": 0,
        "max": 9,
        "step": 1,
        "publicKey": "focusIndex",
        "publicLabel": "突出项"
      },
      {
        "key": "showCallout",
        "label": "装饰解读",
        "type": "toggle",
        "default": true,
        "publicKey": "showCallout",
        "publicLabel": "装饰解读"
      }
    ],
    "defaultProps": {
      "showEyebrow": true,
      "itemCount": 8,
      "chartType": "bar",
      "focusEnabled": true,
      "focusIndex": 0,
      "showCallout": true,
      "eyebrow": "横向透视 / 04",
      "kicker": "单笔最大融资 · 单位：亿美元",
      "title": "头部玩家融资排名",
      "subtitle": "2024 年单笔融资额最大的头部公司 · 赢家通吃格局",
      "calloutLabel": "↳ 集中度",
      "calloutBody": "「D 轮及以后」与「未标明轮次」融资占比过半，平均单笔超 15 亿美元——少数独角兽反复获得巨额追加投资，市场集中度极高。",
      "data": [
        {
          "name": "OpenAI",
          "amt": 66,
          "sector": "通用大模型"
        },
        {
          "name": "Anthropic",
          "amt": 65,
          "sector": "通用大模型"
        },
        {
          "name": "xAI",
          "amt": 50,
          "sector": "通用大模型"
        },
        {
          "name": "CoreWeave",
          "amt": 11,
          "sector": "AI 基础设施"
        },
        {
          "name": "Safe Superintelligence",
          "amt": 10,
          "sector": "通用大模型"
        },
        {
          "name": "Scale AI",
          "amt": 10,
          "sector": "AI 基础设施"
        },
        {
          "name": "Figure AI",
          "amt": 6.8,
          "sector": "AI 硬件"
        },
        {
          "name": "Perplexity AI",
          "amt": 5.2,
          "sector": "垂直应用"
        },
        {
          "name": "Databricks",
          "amt": 5,
          "sector": "AI 基础设施"
        },
        {
          "name": "Glean",
          "amt": 2.6,
          "sector": "垂直应用"
        }
      ],
      "forceDark": true
    }
  },
  {
    "key": "theme03_page012",
    "themeKey": "theme03",
    "pageNumber": 12,
    "layout": "THEME03-012",
    "slot": "table",
    "label": "速查表",
    "bgClass": "",
    "controls": [
      {
        "key": "forceDark",
        "label": "全局深色",
        "type": "toggle",
        "default": true,
        "desc": "复刻 Claude Design 右上角深浅配色切换。",
        "publicKey": "forceDark",
        "publicLabel": "全局深色",
        "description": "复刻 Claude Design 右上角深浅配色切换。"
      },
      {
        "key": "showEyebrow",
        "label": "装饰标签",
        "type": "toggle",
        "default": true,
        "publicKey": "showEyebrow",
        "publicLabel": "装饰标签"
      },
      {
        "key": "itemCount",
        "label": "条目数量",
        "type": "slider",
        "default": 10,
        "min": 5,
        "max": 10,
        "step": 1,
        "publicKey": "itemCount",
        "publicLabel": "条目数量"
      },
      {
        "key": "showBar",
        "label": "数值条",
        "type": "toggle",
        "default": true,
        "publicKey": "showValueLabels",
        "publicLabel": "数值条"
      },
      {
        "key": "showSecondary",
        "label": "附加列",
        "type": "toggle",
        "default": true,
        "publicKey": "showSecondary",
        "publicLabel": "附加列"
      },
      {
        "key": "focusEnabled",
        "label": "重点突出",
        "type": "toggle",
        "default": true,
        "publicKey": "focusEnabled",
        "publicLabel": "重点突出"
      },
      {
        "key": "focusIndex",
        "label": "突出项",
        "type": "slider",
        "default": 0,
        "min": 0,
        "max": 9,
        "step": 1,
        "publicKey": "focusIndex",
        "publicLabel": "突出项"
      },
      {
        "key": "showCallout",
        "label": "装饰解读",
        "type": "toggle",
        "default": true,
        "publicKey": "showCallout",
        "publicLabel": "装饰解读"
      }
    ],
    "defaultProps": {
      "showEyebrow": true,
      "itemCount": 10,
      "showBar": true,
      "showSecondary": true,
      "focusEnabled": true,
      "focusIndex": 0,
      "showCallout": true,
      "eyebrow": "头部玩家 / 04",
      "kicker": "TOP 10 · 最大单笔融资（亿美元）",
      "title": "头部玩家融资速查表",
      "headers": [
        "排名",
        "公司",
        "最大单笔",
        "主营赛道",
        "产业链层级"
      ],
      "calloutLabel": "↳ 集中度",
      "calloutBody": "前三名均为通用大模型赛道，单笔融资均超 50 亿美元——资本高度向头部公司与 AGI 叙事集中，「赢家通吃」格局确立。",
      "rows": [
        {
          "co": "OpenAI",
          "amt": 66,
          "sector": "通用大模型",
          "layer": "中游"
        },
        {
          "co": "Anthropic",
          "amt": 65,
          "sector": "通用大模型",
          "layer": "中游"
        },
        {
          "co": "xAI",
          "amt": 50,
          "sector": "通用大模型",
          "layer": "中游"
        },
        {
          "co": "Safe Superintelligence",
          "amt": 10,
          "sector": "通用大模型",
          "layer": "中游"
        },
        {
          "co": "CoreWeave",
          "amt": 11,
          "sector": "AI 基础设施",
          "layer": "上游"
        },
        {
          "co": "Figure AI",
          "amt": 6.8,
          "sector": "AI 硬件 · 人形机器人",
          "layer": "下游"
        },
        {
          "co": "Scale AI",
          "amt": 10,
          "sector": "AI 基础设施 · 数据标注",
          "layer": "上游"
        },
        {
          "co": "Perplexity AI",
          "amt": 5.2,
          "sector": "垂直应用 · AI 搜索",
          "layer": "下游"
        },
        {
          "co": "Databricks",
          "amt": 5,
          "sector": "AI 基础设施 · 数据平台",
          "layer": "下游"
        },
        {
          "co": "Glean",
          "amt": 2.6,
          "sector": "垂直应用 · 企业搜索",
          "layer": "下游"
        }
      ],
      "forceDark": true
    }
  },
  {
    "key": "theme03_page013",
    "themeKey": "theme03",
    "pageNumber": 13,
    "layout": "THEME03-013",
    "slot": "bubble",
    "label": "融资体量",
    "bgClass": "",
    "controls": [
      {
        "key": "forceDark",
        "label": "全局深色",
        "type": "toggle",
        "default": true,
        "desc": "复刻 Claude Design 右上角深浅配色切换。",
        "publicKey": "forceDark",
        "publicLabel": "全局深色",
        "description": "复刻 Claude Design 右上角深浅配色切换。"
      },
      {
        "key": "showEyebrow",
        "label": "装饰标签",
        "type": "toggle",
        "default": true,
        "publicKey": "showEyebrow",
        "publicLabel": "装饰标签"
      },
      {
        "key": "showValues",
        "label": "数值标注",
        "type": "toggle",
        "default": true,
        "publicKey": "showValueLabels",
        "publicLabel": "数值标注"
      },
      {
        "key": "showLegend",
        "label": "分类图例",
        "type": "toggle",
        "default": true,
        "publicKey": "showLegend",
        "publicLabel": "分类图例"
      },
      {
        "key": "focusEnabled",
        "label": "重点突出",
        "type": "toggle",
        "default": true,
        "publicKey": "focusEnabled",
        "publicLabel": "重点突出"
      },
      {
        "key": "focusIndex",
        "label": "突出项",
        "type": "slider",
        "default": 0,
        "min": 0,
        "max": 9,
        "step": 1,
        "publicKey": "focusIndex",
        "publicLabel": "突出项"
      },
      {
        "key": "showCallout",
        "label": "结构解读",
        "type": "toggle",
        "default": true,
        "publicKey": "showCallout",
        "publicLabel": "结构解读"
      },
      {
        "key": "theme",
        "label": "主题",
        "type": "select",
        "default": "light",
        "options": [
          {
            "value": "light",
            "label": "浅色"
          },
          {
            "value": "dark",
            "label": "深色"
          }
        ],
        "publicKey": "theme",
        "publicLabel": "主题"
      }
    ],
    "defaultProps": {
      "showEyebrow": true,
      "showValues": true,
      "showLegend": true,
      "focusEnabled": true,
      "focusIndex": 0,
      "showCallout": true,
      "theme": "light",
      "eyebrow": "头部玩家 / TOP 10",
      "kicker": "2024 · 单笔最大融资额 · 亿美元",
      "title": "融资体量 · 气泡阵",
      "titleNote": "圆面积 ∝ 单笔融资额　·　按赛道着色",
      "calloutLabel": "↳ 赢家通吃",
      "calloutPre": "通用大模型三强 ",
      "calloutStrong": "OpenAI / Anthropic / xAI 单笔即达 50–66 亿美元",
      "calloutPost": "，体量碾压其余赛道——前三名吸纳的资金便超过 Top 10 其余七家之和，头部集中度一目了然。",
      "sectors": [
        "通用大模型",
        "AI 基础设施",
        "垂直应用",
        "AI 硬件"
      ],
      "companies": [
        {
          "name": "OpenAI",
          "amt": 66,
          "s": 0
        },
        {
          "name": "Anthropic",
          "amt": 65,
          "s": 0
        },
        {
          "name": "xAI",
          "amt": 50,
          "s": 0
        },
        {
          "name": "CoreWeave",
          "amt": 11,
          "s": 1
        },
        {
          "name": "Scale AI",
          "amt": 10,
          "s": 1
        },
        {
          "name": "SSI",
          "amt": 10,
          "s": 0
        },
        {
          "name": "Figure AI",
          "amt": 6.8,
          "s": 3
        },
        {
          "name": "Perplexity",
          "amt": 5.2,
          "s": 2
        },
        {
          "name": "Databricks",
          "amt": 5,
          "s": 1
        },
        {
          "name": "Glean",
          "amt": 2.6,
          "s": 2
        }
      ],
      "forceDark": true
    }
  },
  {
    "key": "theme03_page014",
    "themeKey": "theme03",
    "pageNumber": 14,
    "layout": "THEME03-014",
    "slot": "quadrant",
    "label": "选题四象限",
    "bgClass": "",
    "controls": [
      {
        "key": "forceDark",
        "label": "全局深色",
        "type": "toggle",
        "default": true,
        "desc": "复刻 Claude Design 右上角深浅配色切换。",
        "publicKey": "forceDark",
        "publicLabel": "全局深色",
        "description": "复刻 Claude Design 右上角深浅配色切换。"
      },
      {
        "key": "showEyebrow",
        "label": "装饰标签",
        "type": "toggle",
        "default": true,
        "publicKey": "showEyebrow",
        "publicLabel": "装饰标签"
      },
      {
        "key": "showAxis",
        "label": "坐标轴标注",
        "type": "toggle",
        "default": true,
        "publicKey": "showAxis",
        "publicLabel": "坐标轴标注"
      },
      {
        "key": "showChips",
        "label": "对象标签",
        "type": "toggle",
        "default": true,
        "publicKey": "showChips",
        "publicLabel": "对象标签"
      },
      {
        "key": "focusEnabled",
        "label": "重点突出",
        "type": "toggle",
        "default": true,
        "publicKey": "focusEnabled",
        "publicLabel": "重点突出"
      },
      {
        "key": "focusIndex",
        "label": "突出项",
        "type": "slider",
        "default": 1,
        "min": 0,
        "max": 3,
        "step": 1,
        "publicKey": "focusIndex",
        "publicLabel": "突出项"
      }
    ],
    "defaultProps": {
      "showEyebrow": true,
      "showAxis": true,
      "showChips": true,
      "focusEnabled": true,
      "focusIndex": 1,
      "copy": {
        "t001": "横向透视 / 05",
        "t002": "资本热度 × 商业兑现度",
        "t003": "选题四象限",
        "t004": "从「融资总量大」到「资本从叙事驱动转向兑现驱动」",
        "t005": "资本热度 高 ↑",
        "t006": "低",
        "t007": "商业兑现度 高 →",
        "t008": "← 低"
      },
      "cells": [
        {
          "name": "叙事泡沫区",
          "tag": "热度高 · 兑现待验证",
          "desc": "通用大模型与 AGI 实验室获得巨额融资，但兑现仍受算力成本、模型差异化与监管约束。",
          "chips": [
            "OpenAI",
            "Anthropic",
            "xAI",
            "SSI"
          ]
        },
        {
          "name": "明星兑现区",
          "tag": "热度高 · 兑现高",
          "desc": "基础设施、算力云、数据平台兼具融资热度与收入确定性，典型的「卖铲子」逻辑。",
          "chips": [
            "CoreWeave",
            "Databricks",
            "Scale AI"
          ]
        },
        {
          "name": "等待验证区",
          "tag": "热度中低 · 兑现待验证",
          "desc": "长尾工具链、安全与早期硬件「概念成立但规模未证」，更适合作为风险与边缘变量。",
          "chips": [
            "工具链",
            "安全",
            "早期硬件"
          ]
        },
        {
          "name": "隐形价值区",
          "tag": "热度中低 · 兑现高",
          "desc": "垂直应用、企业搜索、工作流自动化单笔不一定最大，但落地路径更清晰。",
          "chips": [
            "Glean",
            "Perplexity"
          ]
        }
      ],
      "forceDark": true
    }
  },
  {
    "key": "theme03_page015",
    "themeKey": "theme03",
    "pageNumber": 15,
    "layout": "THEME03-015",
    "slot": "chain",
    "label": "产业链分层",
    "bgClass": "",
    "controls": [
      {
        "key": "forceDark",
        "label": "全局深色",
        "type": "toggle",
        "default": true,
        "desc": "复刻 Claude Design 右上角深浅配色切换。",
        "publicKey": "forceDark",
        "publicLabel": "全局深色",
        "description": "复刻 Claude Design 右上角深浅配色切换。"
      },
      {
        "key": "showEyebrow",
        "label": "装饰标签",
        "type": "toggle",
        "default": true,
        "publicKey": "showEyebrow",
        "publicLabel": "装饰标签"
      },
      {
        "key": "layerCount",
        "label": "层级数量",
        "type": "slider",
        "default": 3,
        "min": 1,
        "max": 3,
        "step": 1,
        "publicKey": "layerCount",
        "publicLabel": "层级数量"
      },
      {
        "key": "showChips",
        "label": "对象标签",
        "type": "toggle",
        "default": true,
        "publicKey": "showChips",
        "publicLabel": "对象标签"
      },
      {
        "key": "focusEnabled",
        "label": "重点突出",
        "type": "toggle",
        "default": false,
        "publicKey": "focusEnabled",
        "publicLabel": "重点突出"
      },
      {
        "key": "focusIndex",
        "label": "突出项",
        "type": "slider",
        "default": 1,
        "min": 0,
        "max": 2,
        "step": 1,
        "publicKey": "focusIndex",
        "publicLabel": "突出项"
      }
    ],
    "defaultProps": {
      "showEyebrow": true,
      "layerCount": 3,
      "showChips": true,
      "focusEnabled": false,
      "focusIndex": 1,
      "eyebrow": "产业链 / 06",
      "kicker": "上游 → 中游 → 下游 · 分层映射",
      "title": "产业链分层透视",
      "layers": [
        {
          "idx": "01",
          "tier": "上游",
          "name": "基础设施",
          "en": "INFRASTRUCTURE",
          "segs": [
            {
              "seg": "AI 芯片",
              "cos": [
                "Cerebras",
                "Groq"
              ]
            },
            {
              "seg": "算力云 / 数据",
              "cos": [
                "CoreWeave",
                "Scale AI"
              ]
            }
          ]
        },
        {
          "idx": "02",
          "tier": "中游",
          "name": "模型层",
          "en": "MODEL LAYER",
          "segs": [
            {
              "seg": "通用大模型",
              "cos": [
                "OpenAI",
                "Anthropic",
                "xAI"
              ]
            },
            {
              "seg": "开源 / 专用模型",
              "cos": [
                "Mistral",
                "SSI"
              ]
            }
          ]
        },
        {
          "idx": "03",
          "tier": "下游",
          "name": "应用层",
          "en": "APPLICATION",
          "segs": [
            {
              "seg": "企业生产力",
              "cos": [
                "Glean",
                "Databricks"
              ]
            },
            {
              "seg": "消费 / 搜索",
              "cos": [
                "Perplexity"
              ]
            },
            {
              "seg": "具身智能",
              "cos": [
                "Figure AI"
              ]
            }
          ]
        }
      ],
      "forceDark": true
    }
  },
  {
    "key": "theme03_page016",
    "themeKey": "theme03",
    "pageNumber": 16,
    "layout": "THEME03-016",
    "slot": "layertable",
    "label": "产业链速查",
    "bgClass": "",
    "controls": [
      {
        "key": "forceDark",
        "label": "全局深色",
        "type": "toggle",
        "default": true,
        "desc": "复刻 Claude Design 右上角深浅配色切换。",
        "publicKey": "forceDark",
        "publicLabel": "全局深色",
        "description": "复刻 Claude Design 右上角深浅配色切换。"
      },
      {
        "key": "showEyebrow",
        "label": "装饰标签",
        "type": "toggle",
        "default": true,
        "publicKey": "showEyebrow",
        "publicLabel": "装饰标签"
      },
      {
        "key": "showCompanies",
        "label": "代表公司",
        "type": "toggle",
        "default": true,
        "publicKey": "showCompanies",
        "publicLabel": "代表公司"
      },
      {
        "key": "showAmount",
        "label": "层资金量级",
        "type": "toggle",
        "default": true,
        "publicKey": "showAmount",
        "publicLabel": "层资金量级"
      },
      {
        "key": "showCertainty",
        "label": "确定性标记",
        "type": "toggle",
        "default": true,
        "publicKey": "showCertainty",
        "publicLabel": "确定性标记"
      },
      {
        "key": "focusEnabled",
        "label": "重点突出",
        "type": "toggle",
        "default": false,
        "publicKey": "focusEnabled",
        "publicLabel": "重点突出"
      },
      {
        "key": "focusIndex",
        "label": "突出项",
        "type": "slider",
        "default": 0,
        "min": 0,
        "max": 2,
        "step": 1,
        "publicKey": "focusIndex",
        "publicLabel": "突出项"
      },
      {
        "key": "showCallout",
        "label": "装饰解读",
        "type": "toggle",
        "default": true,
        "publicKey": "showCallout",
        "publicLabel": "装饰解读"
      },
      {
        "key": "theme",
        "label": "主题",
        "type": "select",
        "default": "light",
        "options": [
          {
            "value": "light",
            "label": "浅色"
          },
          {
            "value": "dark",
            "label": "深色"
          }
        ],
        "publicKey": "theme",
        "publicLabel": "主题"
      }
    ],
    "defaultProps": {
      "showEyebrow": true,
      "showCompanies": true,
      "showAmount": true,
      "showCertainty": true,
      "focusEnabled": false,
      "focusIndex": 0,
      "showCallout": true,
      "theme": "light",
      "eyebrow": "结构透视 / VALUE CHAIN",
      "kicker": "上游 → 中游 → 下游 · 分层速查",
      "title": "AI 产业链分层速查表",
      "titleNote": "环节 · 代表公司 · 层资金量级 · 确定性",
      "header1": "层级 / 资金量级",
      "header2": "细分环节 · 代表公司",
      "calloutLabel": "↳ 结构看分层",
      "calloutSegments": [
        {
          "t": "上游基础设施"
        },
        {
          "t": "确定性最强",
          "b": true
        },
        {
          "t": "，中游模型层"
        },
        {
          "t": "竞争最激烈",
          "b": true
        },
        {
          "t": "，下游应用层"
        },
        {
          "t": "潜力最大但尚需时间验证",
          "b": true
        },
        {
          "t": "——\"卖铲子\" 环节最稳，模型层最卷，应用层赔率最高。"
        }
      ],
      "layers": [
        {
          "cn": "上游 · 基础设施",
          "en": "UPSTREAM",
          "amt": 255,
          "tag": "确定性最强",
          "rows": [
            {
              "seg": "AI 芯片",
              "cos": [
                "Cerebras",
                "Groq"
              ]
            },
            {
              "seg": "算力云 / 数据",
              "cos": [
                "CoreWeave",
                "Scale AI"
              ]
            }
          ]
        },
        {
          "cn": "中游 · 模型层",
          "en": "MIDSTREAM",
          "amt": 420,
          "tag": "竞争最激烈",
          "rows": [
            {
              "seg": "通用大模型",
              "cos": [
                "OpenAI",
                "Anthropic",
                "xAI"
              ]
            },
            {
              "seg": "开源 / 专用模型",
              "cos": [
                "Mistral",
                "SSI"
              ]
            }
          ]
        },
        {
          "cn": "下游 · 应用层",
          "en": "DOWNSTREAM",
          "amt": 295,
          "tag": "潜力最大 · 待验证",
          "rows": [
            {
              "seg": "企业生产力",
              "cos": [
                "Glean",
                "Databricks"
              ]
            },
            {
              "seg": "消费 / 搜索",
              "cos": [
                "Perplexity AI"
              ]
            },
            {
              "seg": "具身智能 / 机器人",
              "cos": [
                "Figure AI"
              ]
            }
          ]
        }
      ],
      "copy": {
        "t001": "亿"
      },
      "forceDark": true
    }
  },
  {
    "key": "theme03_page017",
    "themeKey": "theme03",
    "pageNumber": 17,
    "layout": "THEME03-017",
    "slot": "vertical",
    "label": "应用层",
    "bgClass": "",
    "controls": [
      {
        "key": "forceDark",
        "label": "全局深色",
        "type": "toggle",
        "default": true,
        "desc": "复刻 Claude Design 右上角深浅配色切换。",
        "publicKey": "forceDark",
        "publicLabel": "全局深色",
        "description": "复刻 Claude Design 右上角深浅配色切换。"
      },
      {
        "key": "showEyebrow",
        "label": "装饰标签",
        "type": "toggle",
        "default": true,
        "publicKey": "showEyebrow",
        "publicLabel": "装饰标签"
      },
      {
        "key": "imageCount",
        "label": "图片数量",
        "type": "slider",
        "default": 2,
        "min": 0,
        "max": 4,
        "step": 1,
        "publicKey": "imageCount",
        "publicLabel": "图片数量"
      },
      {
        "key": "layout",
        "label": "图片排布",
        "type": "select",
        "default": "row",
        "options": [
          {
            "value": "row",
            "label": "横排"
          },
          {
            "value": "column",
            "label": "竖排"
          }
        ],
        "publicKey": "layout",
        "publicLabel": "图片排布"
      },
      {
        "key": "showFigure",
        "label": "核心数字",
        "type": "toggle",
        "default": true,
        "publicKey": "showFigure",
        "publicLabel": "核心数字"
      },
      {
        "key": "chipCount",
        "label": "特征标签",
        "type": "slider",
        "default": 3,
        "min": 0,
        "max": 3,
        "step": 1,
        "publicKey": "chipCount",
        "publicLabel": "特征标签"
      },
      {
        "key": "showCallout",
        "label": "装饰解读",
        "type": "toggle",
        "default": true,
        "publicKey": "showCallout",
        "publicLabel": "装饰解读"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "select",
        "default": "blue",
        "options": [
          {
            "value": "blue",
            "label": "电光蓝"
          },
          {
            "value": "lime",
            "label": "荧光绿"
          }
        ],
        "publicKey": "accent",
        "publicLabel": "强调色"
      }
    ],
    "defaultProps": {
      "showEyebrow": true,
      "imageCount": 2,
      "layout": "row",
      "showFigure": true,
      "chipCount": 3,
      "showCallout": true,
      "accent": "blue",
      "copy": {
        "t001": "下游 · 应用层 / VERTICAL AI",
        "t002": "垂直应用 · 代表 Glean / Perplexity / Databricks",
        "t003": "SECTOR · 垂直应用",
        "t004": "离",
        "t005": "收入最近",
        "t006": "的一层",
        "t007": "企业搜索、工作流自动化、行业 AI 等垂直应用全年吸纳 245 亿美元、占比 25.3%，仅次于通用大模型。 单笔金额不一定最大，但落地路径更清晰——Glean、Perplexity AI、Databricks 这类场景型公司 已嵌入真实业务流程，判断重点从\"融资规模\"转向\"付费留存与客户续约\"。",
        "t008": "245",
        "t009": "亿美元",
        "t010": "垂直应用 · 占全年 25.3%",
        "t011": "↳ 隐形价值区",
        "t012": "当资本从\"赌叙事\"转向\"看兑现\"，已验证 PMF、ARR 持续增长的垂直应用， 是退潮后最可能留在牌桌上的标的——下游潜力最大，但仍需时间验证。",
        "t013": "应用 / 产品界面配图 / DROP IMAGE",
        "t014": "应用 / 产品界面配图 / DROP IMAGE",
        "t015": "纯文字版式 · 无配图",
        "t016": "↗ 企业搜索 · 工作流 · 数据平台界面"
      },
      "chips": [
        "落地路径清晰 · 已验证 PMF",
        "看付费留存与客户续约",
        "嵌入刚性业务流程"
      ],
      "forceDark": true
    }
  },
  {
    "key": "theme03_page018",
    "themeKey": "theme03",
    "pageNumber": 18,
    "layout": "THEME03-018",
    "slot": "case",
    "label": "典型案例",
    "bgClass": "",
    "controls": [
      {
        "key": "forceDark",
        "label": "全局深色",
        "type": "toggle",
        "default": true,
        "desc": "复刻 Claude Design 右上角深浅配色切换。",
        "publicKey": "forceDark",
        "publicLabel": "全局深色",
        "description": "复刻 Claude Design 右上角深浅配色切换。"
      },
      {
        "key": "showEyebrow",
        "label": "装饰标签",
        "type": "toggle",
        "default": true,
        "publicKey": "showEyebrow",
        "publicLabel": "装饰标签"
      },
      {
        "key": "imageCount",
        "label": "图片数量",
        "type": "slider",
        "default": 1,
        "min": 0,
        "max": 3,
        "step": 1,
        "publicKey": "imageCount",
        "publicLabel": "图片数量"
      },
      {
        "key": "showTimeline",
        "label": "时间轴",
        "type": "toggle",
        "default": true,
        "publicKey": "showTimeline",
        "publicLabel": "时间轴"
      },
      {
        "key": "focusEnabled",
        "label": "重点突出",
        "type": "toggle",
        "default": true,
        "publicKey": "focusEnabled",
        "publicLabel": "重点突出"
      },
      {
        "key": "focusIndex",
        "label": "突出项",
        "type": "slider",
        "default": 2,
        "min": 0,
        "max": 3,
        "step": 1,
        "publicKey": "focusIndex",
        "publicLabel": "突出项"
      },
      {
        "key": "showQuote",
        "label": "装饰引言",
        "type": "toggle",
        "default": true,
        "publicKey": "showQuote",
        "publicLabel": "装饰引言"
      }
    ],
    "defaultProps": {
      "showEyebrow": true,
      "imageCount": 1,
      "showTimeline": true,
      "focusEnabled": true,
      "focusIndex": 2,
      "showQuote": true,
      "eyebrow": "典型案例 / 07",
      "kicker": "估值 9650 亿美元 · 全球最高",
      "caseTag": "CASE STUDY · ANTHROPIC",
      "title": "Anthropic：从追赶到反超",
      "lead": "由 Dario Amodei 团队 2021 年创立。2024 年连续完成三轮大额融资，累计超 650 亿美元，估值突破 9650 亿美元，超越 OpenAI 成为全球估值最高的 AI 初创企业。",
      "galleryCaption": "案例配图 / DROP IMAGE",
      "quoteBody": "「通过 Constitutional AI 构建可解释、可控的系统，比单纯追求规模更符合长远利益。」",
      "quoteAttribution": "—— Dario Amodei · CEO",
      "milestones": [
        {
          "time": "2024.05",
          "label": "Series G",
          "detail": "融资 280 亿 · 估值 600 亿"
        },
        {
          "time": "2024.08",
          "label": "Series H 首轮",
          "detail": "融资 180 亿 · 估值 830 亿"
        },
        {
          "time": "2024.11",
          "label": "Series H 扩轮",
          "detail": "融资 190 亿 · 估值 9650 亿"
        },
        {
          "time": "2026.06",
          "label": "已递交 IPO 申请",
          "detail": "预计年内上市"
        }
      ],
      "forceDark": true
    }
  },
  {
    "key": "theme03_page019",
    "themeKey": "theme03",
    "pageNumber": 19,
    "layout": "THEME03-019",
    "slot": "spotlight",
    "label": "案例聚焦",
    "bgClass": "",
    "controls": [
      {
        "key": "forceDark",
        "label": "全局深色",
        "type": "toggle",
        "default": true,
        "desc": "复刻 Claude Design 右上角深浅配色切换。",
        "publicKey": "forceDark",
        "publicLabel": "全局深色",
        "description": "复刻 Claude Design 右上角深浅配色切换。"
      },
      {
        "key": "showEyebrow",
        "label": "装饰标签",
        "type": "toggle",
        "default": true,
        "publicKey": "showEyebrow",
        "publicLabel": "装饰标签"
      },
      {
        "key": "imageCount",
        "label": "图片数量",
        "type": "slider",
        "default": 2,
        "min": 0,
        "max": 4,
        "step": 1,
        "publicKey": "imageCount",
        "publicLabel": "图片数量"
      },
      {
        "key": "layout",
        "label": "图片排布",
        "type": "select",
        "default": "row",
        "options": [
          {
            "value": "row",
            "label": "横排"
          },
          {
            "value": "column",
            "label": "竖排"
          }
        ],
        "publicKey": "layout",
        "publicLabel": "图片排布"
      },
      {
        "key": "statCount",
        "label": "关键数字",
        "type": "slider",
        "default": 3,
        "min": 0,
        "max": 3,
        "step": 1,
        "publicKey": "statCount",
        "publicLabel": "关键数字"
      },
      {
        "key": "focusEnabled",
        "label": "重点突出",
        "type": "toggle",
        "default": true,
        "publicKey": "focusEnabled",
        "publicLabel": "重点突出"
      },
      {
        "key": "focusIndex",
        "label": "突出项",
        "type": "slider",
        "default": 1,
        "min": 0,
        "max": 2,
        "step": 1,
        "publicKey": "focusIndex",
        "publicLabel": "突出项"
      },
      {
        "key": "showCallout",
        "label": "装饰解读",
        "type": "toggle",
        "default": true,
        "publicKey": "showCallout",
        "publicLabel": "装饰解读"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "select",
        "default": "blue",
        "options": [
          {
            "value": "blue",
            "label": "电光蓝"
          },
          {
            "value": "lime",
            "label": "荧光绿"
          }
        ],
        "publicKey": "accent",
        "publicLabel": "强调色"
      }
    ],
    "defaultProps": {
      "showEyebrow": true,
      "imageCount": 2,
      "layout": "row",
      "statCount": 3,
      "focusEnabled": true,
      "focusIndex": 1,
      "showCallout": true,
      "accent": "blue",
      "copy": {
        "t001": "典型案例 / 08",
        "t002": "xAI · 估值 500 亿美元",
        "t003": "CASE STUDY · xAI",
        "t004": "马斯克的",
        "t005": "「第三次创业」",
        "t006": "2023 年由埃隆·马斯克创立，2024 年 11 月完成 50 亿美元融资、估值达 500 亿美元。 体量虽不及 OpenAI / Anthropic，但增速惊人——从成立到跻身头部梯队仅用 18 个月。",
        "t007": "↳ 差异化优势",
        "t008": "背靠 X（原 Twitter）平台的海量实时社交数据，并与特斯拉自动驾驶团队协同； Grok 模型主打「幽默 · 实时 · 无审查」，差异化定位明显。",
        "t009": "案例配图 / DROP IMAGE",
        "t010": "案例配图 / DROP IMAGE",
        "t011": "纯文字案例 · 无配图",
        "t012": "↗ Grok · 多模态感知"
      },
      "stats": [
        {
          "num": "50",
          "unit": "亿美元",
          "note": "2024.11 单轮融资"
        },
        {
          "num": "500",
          "unit": "亿美元",
          "note": "最新估值"
        },
        {
          "num": "18",
          "unit": "个月",
          "note": "从成立到头部梯队"
        }
      ],
      "forceDark": true
    }
  },
  {
    "key": "theme03_page020",
    "themeKey": "theme03",
    "pageNumber": 20,
    "layout": "THEME03-020",
    "slot": "coreweave",
    "label": "卖铲赢家",
    "bgClass": "",
    "controls": [
      {
        "key": "forceDark",
        "label": "全局深色",
        "type": "toggle",
        "default": true,
        "desc": "复刻 Claude Design 右上角深浅配色切换。",
        "publicKey": "forceDark",
        "publicLabel": "全局深色",
        "description": "复刻 Claude Design 右上角深浅配色切换。"
      },
      {
        "key": "showEyebrow",
        "label": "装饰标签",
        "type": "toggle",
        "default": true,
        "publicKey": "showEyebrow",
        "publicLabel": "装饰标签"
      },
      {
        "key": "showPivot",
        "label": "转型对比",
        "type": "toggle",
        "default": true,
        "publicKey": "showPivot",
        "publicLabel": "转型对比"
      },
      {
        "key": "imageCount",
        "label": "图片数量",
        "type": "slider",
        "default": 2,
        "min": 0,
        "max": 4,
        "step": 1,
        "publicKey": "imageCount",
        "publicLabel": "图片数量"
      },
      {
        "key": "layout",
        "label": "图片排布",
        "type": "select",
        "default": "column",
        "options": [
          {
            "value": "row",
            "label": "横排"
          },
          {
            "value": "column",
            "label": "竖排"
          }
        ],
        "publicKey": "layout",
        "publicLabel": "图片排布"
      },
      {
        "key": "statCount",
        "label": "关键数字",
        "type": "slider",
        "default": 3,
        "min": 0,
        "max": 3,
        "step": 1,
        "publicKey": "statCount",
        "publicLabel": "关键数字"
      },
      {
        "key": "focusEnabled",
        "label": "重点突出",
        "type": "toggle",
        "default": true,
        "publicKey": "focusEnabled",
        "publicLabel": "重点突出"
      },
      {
        "key": "focusIndex",
        "label": "突出项",
        "type": "slider",
        "default": 0,
        "min": 0,
        "max": 2,
        "step": 1,
        "publicKey": "focusIndex",
        "publicLabel": "突出项"
      },
      {
        "key": "showCallout",
        "label": "装饰解读",
        "type": "toggle",
        "default": true,
        "publicKey": "showCallout",
        "publicLabel": "装饰解读"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "select",
        "default": "lime",
        "options": [
          {
            "value": "blue",
            "label": "电光蓝"
          },
          {
            "value": "lime",
            "label": "荧光绿"
          }
        ],
        "publicKey": "accent",
        "publicLabel": "强调色"
      }
    ],
    "defaultProps": {
      "showEyebrow": true,
      "showPivot": true,
      "imageCount": 2,
      "layout": "column",
      "statCount": 3,
      "focusEnabled": true,
      "focusIndex": 0,
      "showCallout": true,
      "accent": "lime",
      "eyebrow": "典型案例 / 03",
      "kicker": "CoreWeave · 估值 190 亿美元+",
      "caseTag": "CASE STUDY · CoreWeave",
      "titlePrefix": "「卖铲子」的人，",
      "titleAccentPrefix": "也",
      "titleAccent": "赚翻了",
      "pivotFromTime": "2018 — 2022",
      "pivotFromLabel": "加密货币挖矿",
      "pivotToTime": "2023 →",
      "pivotToLabel": "AI 算力云服务",
      "lead": "CoreWeave 原本是一家加密货币挖矿公司，2023 年转身为 AI 算力云服务商。与 NVIDIA 签订长期供应协议，手握数万张 H100 / H200 GPU，成为 OpenAI、Stability AI 等公司的核心算力供应商。",
      "calloutLabel": "↳ 「卖铲子」逻辑",
      "calloutBody": "当所有模型公司都在抢 GPU，提前锁定算力资源的基础设施提供商，反而成为最稀缺的标的——「淘金热中卖铲子」的商业逻辑被完美印证。",
      "galleryCaption": "案例配图 / DROP IMAGE",
      "emptyText": "纯文字案例 · 无配图",
      "stats": [
        {
          "num": "110",
          "unit": "亿美元",
          "note": "2024 年融资额"
        },
        {
          "num": "190",
          "unit": "亿美元+",
          "note": "最新估值"
        },
        {
          "num": "2023",
          "unit": "转型元年",
          "note": "矿场 → 算力云"
        }
      ],
      "forceDark": true
    }
  },
  {
    "key": "theme03_page021",
    "themeKey": "theme03",
    "pageNumber": 21,
    "layout": "THEME03-021",
    "slot": "casecompare",
    "label": "案例对比",
    "bgClass": "",
    "controls": [
      {
        "key": "forceDark",
        "label": "全局深色",
        "type": "toggle",
        "default": true,
        "desc": "复刻 Claude Design 右上角深浅配色切换。",
        "publicKey": "forceDark",
        "publicLabel": "全局深色",
        "description": "复刻 Claude Design 右上角深浅配色切换。"
      },
      {
        "key": "showEyebrow",
        "label": "装饰标签",
        "type": "toggle",
        "default": true,
        "publicKey": "showEyebrow",
        "publicLabel": "装饰标签"
      },
      {
        "key": "itemCount",
        "label": "公司数量",
        "type": "slider",
        "default": 3,
        "min": 2,
        "max": 3,
        "step": 1,
        "publicKey": "itemCount",
        "publicLabel": "公司数量"
      },
      {
        "key": "showEdge",
        "label": "差异化行",
        "type": "toggle",
        "default": true,
        "publicKey": "showEdge",
        "publicLabel": "差异化行"
      },
      {
        "key": "showRank",
        "label": "指标标记",
        "type": "toggle",
        "default": true,
        "publicKey": "showRank",
        "publicLabel": "指标标记"
      },
      {
        "key": "focusEnabled",
        "label": "重点突出",
        "type": "toggle",
        "default": true,
        "publicKey": "focusEnabled",
        "publicLabel": "重点突出"
      },
      {
        "key": "focusIndex",
        "label": "突出项",
        "type": "slider",
        "default": 0,
        "min": 0,
        "max": 2,
        "step": 1,
        "publicKey": "focusIndex",
        "publicLabel": "突出项"
      },
      {
        "key": "showCallout",
        "label": "装饰解读",
        "type": "toggle",
        "default": true,
        "publicKey": "showCallout",
        "publicLabel": "装饰解读"
      }
    ],
    "defaultProps": {
      "showEyebrow": true,
      "itemCount": 3,
      "showEdge": true,
      "showRank": true,
      "focusEnabled": true,
      "focusIndex": 0,
      "showCallout": true,
      "eyebrow": "典型案例 / 对比",
      "kicker": "三大案例 · 横向对比",
      "title": "三大案例对比速览",
      "cornerLabel": "维度 / COMPANY",
      "calloutLabel": "↳ 小结",
      "calloutBody": "三家路径迥异——Anthropic 以「安全对齐」构筑企业信任，xAI 靠数据与速度后来居上，CoreWeave 则以「卖铲子」绕开模型竞争。叙事不同，但都印证了头部标的的资本虹吸。",
      "companies": [
        {
          "name": "Anthropic",
          "en": "通用大模型",
          "tier": "全球估值最高"
        },
        {
          "name": "xAI",
          "en": "通用大模型",
          "tier": "18 个月入头部"
        },
        {
          "name": "CoreWeave",
          "en": "AI 算力云",
          "tier": "卖铲子赢家"
        }
      ],
      "rows": [
        {
          "metric": "成立年份",
          "en": "FOUNDED",
          "vals": [
            "2021",
            "2023",
            "2023 转型"
          ]
        },
        {
          "metric": "2024 融资",
          "en": "RAISED",
          "vals": [
            "累计 650 亿",
            "50 亿",
            "110 亿"
          ],
          "unit": "亿美元"
        },
        {
          "metric": "最新估值",
          "en": "VALUATION",
          "vals": [
            "9650 亿",
            "500 亿",
            "190 亿+"
          ],
          "unit": "亿美元",
          "strong": true
        },
        {
          "metric": "主营赛道",
          "en": "SECTOR",
          "vals": [
            "通用大模型",
            "通用大模型",
            "AI 算力云"
          ]
        },
        {
          "metric": "差异化优势",
          "en": "EDGE",
          "vals": [
            "安全对齐 · 企业信任",
            "X 实时数据 · 特斯拉协同",
            "锁定算力 · 卖铲子逻辑"
          ],
          "edge": true
        }
      ],
      "forceDark": true
    }
  },
  {
    "key": "theme03_page022",
    "themeKey": "theme03",
    "pageNumber": 22,
    "layout": "THEME03-022",
    "slot": "section",
    "label": "章节页",
    "bgClass": "",
    "controls": [
      {
        "key": "forceDark",
        "label": "全局深色",
        "type": "toggle",
        "default": true,
        "desc": "复刻 Claude Design 右上角深浅配色切换。",
        "publicKey": "forceDark",
        "publicLabel": "全局深色",
        "description": "复刻 Claude Design 右上角深浅配色切换。"
      },
      {
        "key": "showEyebrow",
        "label": "装饰标签",
        "type": "toggle",
        "default": true,
        "publicKey": "showEyebrow",
        "publicLabel": "装饰标签"
      },
      {
        "key": "theme",
        "label": "背景主题",
        "type": "select",
        "default": "light",
        "options": [
          {
            "value": "dark",
            "label": "深色"
          },
          {
            "value": "light",
            "label": "浅色"
          }
        ],
        "publicKey": "theme",
        "publicLabel": "背景主题"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "select",
        "default": "blue",
        "options": [
          {
            "value": "blue",
            "label": "电光蓝"
          },
          {
            "value": "lime",
            "label": "荧光绿"
          }
        ],
        "publicKey": "accent",
        "publicLabel": "强调色"
      },
      {
        "key": "showIndex",
        "label": "章节序号",
        "type": "toggle",
        "default": true,
        "publicKey": "showIndex",
        "publicLabel": "章节序号"
      },
      {
        "key": "imageCount",
        "label": "图片数量",
        "type": "slider",
        "default": 1,
        "min": 0,
        "max": 2,
        "step": 1,
        "publicKey": "imageCount",
        "publicLabel": "图片数量"
      },
      {
        "key": "showMeta",
        "label": "页脚信息",
        "type": "toggle",
        "default": true,
        "publicKey": "showMeta",
        "publicLabel": "页脚信息"
      }
    ],
    "defaultProps": {
      "showEyebrow": true,
      "theme": "light",
      "accent": "blue",
      "showIndex": true,
      "imageCount": 1,
      "showMeta": true,
      "copy": {
        "t001": "章节 / SECTION",
        "t002": "AI · VENTURE CAPITAL // USA",
        "t003": "04",
        "t004": "CHAPTER FOUR",
        "t005": "结构透视",
        "t006": "与",
        "t007": "展望",
        "t008": "在市场全景之上，进一步拆解轮次结构、月度节奏与集中度， 回答资金「如何分布、何时加速、向谁集中」，并据此展望下一阶段的产业走向。",
        "t009": "章节配图 / DROP IMAGE",
        "t010": "04",
        "t011": "本章包含",
        "t012": "横纵分析法"
      },
      "subsections": [
        "逐月明细",
        "轮次结构",
        "核心数据"
      ],
      "forceDark": true
    }
  },
  {
    "key": "theme03_page023",
    "themeKey": "theme03",
    "pageNumber": 23,
    "layout": "THEME03-023",
    "slot": "round",
    "label": "轮次结构",
    "bgClass": "",
    "controls": [
      {
        "key": "forceDark",
        "label": "全局深色",
        "type": "toggle",
        "default": true,
        "desc": "复刻 Claude Design 右上角深浅配色切换。",
        "publicKey": "forceDark",
        "publicLabel": "全局深色",
        "description": "复刻 Claude Design 右上角深浅配色切换。"
      },
      {
        "key": "showEyebrow",
        "label": "装饰标签",
        "type": "toggle",
        "default": true,
        "publicKey": "showEyebrow",
        "publicLabel": "装饰标签"
      },
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
            "value": "lollipop",
            "label": "棒棒糖"
          }
        ],
        "publicKey": "chartType",
        "publicLabel": "图表类型"
      },
      {
        "key": "showSecondary",
        "label": "次级系列",
        "type": "toggle",
        "default": true,
        "publicKey": "showSecondary",
        "publicLabel": "次级系列"
      },
      {
        "key": "showGrid",
        "label": "网格线",
        "type": "toggle",
        "default": true,
        "publicKey": "showGrid",
        "publicLabel": "网格线"
      },
      {
        "key": "focusEnabled",
        "label": "重点突出",
        "type": "toggle",
        "default": true,
        "publicKey": "focusEnabled",
        "publicLabel": "重点突出"
      },
      {
        "key": "focusIndex",
        "label": "突出项",
        "type": "slider",
        "default": 4,
        "min": 0,
        "max": 5,
        "step": 1,
        "publicKey": "focusIndex",
        "publicLabel": "突出项"
      },
      {
        "key": "showCallout",
        "label": "装饰解读",
        "type": "toggle",
        "default": true,
        "publicKey": "showCallout",
        "publicLabel": "装饰解读"
      }
    ],
    "defaultProps": {
      "showEyebrow": true,
      "chartType": "bar",
      "showSecondary": true,
      "showGrid": true,
      "focusEnabled": true,
      "focusIndex": 4,
      "showCallout": true,
      "eyebrow": "轮次结构 / 03",
      "kicker": "97 笔 · 笔数 × 平均单笔（亿美元）",
      "title": "融资轮次结构对比",
      "primaryLegend": "事件笔数",
      "secondaryLegend": "平均单笔",
      "focusUnit": "亿美元 / 笔",
      "focusCaptionSuffix": "笔事件 · 平均单笔金额",
      "calloutLabel": "↳ 结构解读",
      "calloutBody": "笔数集中在 B 轮及以后，资金则随轮次显著上移——平均单笔从种子轮的 1.2 亿攀升至 D+ 轮的 15.2 亿，呈现「后期化、巨额化」的典型特征。",
      "data": [
        {
          "label": "种子",
          "en": "Seed",
          "count": 8,
          "avg": 1.2
        },
        {
          "label": "A 轮",
          "en": "Series A",
          "count": 12,
          "avg": 1.8
        },
        {
          "label": "B 轮",
          "en": "Series B",
          "count": 18,
          "avg": 3.5
        },
        {
          "label": "C 轮",
          "en": "Series C",
          "count": 15,
          "avg": 6.8
        },
        {
          "label": "D+ 轮",
          "en": "Series D+",
          "count": 22,
          "avg": 15.2
        },
        {
          "label": "未披露",
          "en": "Undisc.",
          "count": 22,
          "avg": 18.6
        }
      ],
      "forceDark": true
    }
  },
  {
    "key": "theme03_page024",
    "themeKey": "theme03",
    "pageNumber": 24,
    "layout": "THEME03-024",
    "slot": "waffle",
    "label": "轮次单位图",
    "bgClass": "",
    "controls": [
      {
        "key": "forceDark",
        "label": "全局深色",
        "type": "toggle",
        "default": true,
        "desc": "复刻 Claude Design 右上角深浅配色切换。",
        "publicKey": "forceDark",
        "publicLabel": "全局深色",
        "description": "复刻 Claude Design 右上角深浅配色切换。"
      },
      {
        "key": "showEyebrow",
        "label": "装饰标签",
        "type": "toggle",
        "default": true,
        "publicKey": "showEyebrow",
        "publicLabel": "装饰标签"
      },
      {
        "key": "columns",
        "label": "每行格数",
        "type": "slider",
        "default": 14,
        "min": 10,
        "max": 16,
        "step": 1,
        "publicKey": "columns",
        "publicLabel": "每行格数"
      },
      {
        "key": "showLegend",
        "label": "阶段图例",
        "type": "toggle",
        "default": true,
        "publicKey": "showLegend",
        "publicLabel": "阶段图例"
      },
      {
        "key": "showAvg",
        "label": "平均单笔",
        "type": "toggle",
        "default": true,
        "publicKey": "showAvg",
        "publicLabel": "平均单笔"
      },
      {
        "key": "focusEnabled",
        "label": "重点突出",
        "type": "toggle",
        "default": true,
        "publicKey": "focusEnabled",
        "publicLabel": "重点突出"
      },
      {
        "key": "focusIndex",
        "label": "突出项",
        "type": "slider",
        "default": 4,
        "min": 0,
        "max": 5,
        "step": 1,
        "publicKey": "focusIndex",
        "publicLabel": "突出项"
      },
      {
        "key": "showCallout",
        "label": "核心发现",
        "type": "toggle",
        "default": true,
        "publicKey": "showCallout",
        "publicLabel": "核心发现"
      },
      {
        "key": "theme",
        "label": "主题",
        "type": "select",
        "default": "light",
        "options": [
          {
            "value": "light",
            "label": "浅色"
          },
          {
            "value": "dark",
            "label": "深色"
          }
        ],
        "publicKey": "theme",
        "publicLabel": "主题"
      }
    ],
    "defaultProps": {
      "showEyebrow": true,
      "columns": 14,
      "showLegend": true,
      "showAvg": true,
      "focusEnabled": true,
      "focusIndex": 4,
      "showCallout": true,
      "theme": "light",
      "eyebrow": "轮次结构 / ROUND MIX",
      "kicker": "1 格 = 1 笔 · 97 笔大额融资（≥1 亿美元）",
      "title": "97 笔大额融资 · 轮次构成",
      "titleNote": "后期轮少笔数、却吞下大额资金",
      "footerHint": "▮ 按轮次连续铺排 · 颜色由浅到深 = 轮次由早到晚",
      "calloutLabel": "↳ 核心发现",
      "calloutSegments": [
        {
          "t": "\"D 轮及以后\" 与 \"未标明轮次\" 合计 "
        },
        {
          "t": "44 笔",
          "b": true
        },
        {
          "t": "、占全部 97 笔的近一半，平均单笔却高达 "
        },
        {
          "t": "15–19 亿美元",
          "b": true
        },
        {
          "t": "——少数头部独角兽反复获得巨额追加投资，\"赢家通吃\" 在轮次层面同样成立。"
        }
      ],
      "rounds": [
        {
          "cn": "种子轮",
          "en": "SEED",
          "n": 8,
          "avg": 1.2
        },
        {
          "cn": "A 轮",
          "en": "SERIES A",
          "n": 12,
          "avg": 1.8
        },
        {
          "cn": "B 轮",
          "en": "SERIES B",
          "n": 18,
          "avg": 3.5
        },
        {
          "cn": "C 轮",
          "en": "SERIES C",
          "n": 15,
          "avg": 6.8
        },
        {
          "cn": "D 轮及以后",
          "en": "SERIES D+",
          "n": 22,
          "avg": 15.2
        },
        {
          "cn": "未标明轮次",
          "en": "UNDISCLOSED",
          "n": 22,
          "avg": 18.6
        }
      ],
      "total": 97,
      "copy": {
        "t001": "笔",
        "t002": "均",
        "t003": "亿"
      },
      "forceDark": true
    }
  },
  {
    "key": "theme03_page025",
    "themeKey": "theme03",
    "pageNumber": 25,
    "layout": "THEME03-025",
    "slot": "monthly",
    "label": "月度明细",
    "bgClass": "",
    "controls": [
      {
        "key": "forceDark",
        "label": "全局深色",
        "type": "toggle",
        "default": true,
        "desc": "复刻 Claude Design 右上角深浅配色切换。",
        "publicKey": "forceDark",
        "publicLabel": "全局深色",
        "description": "复刻 Claude Design 右上角深浅配色切换。"
      },
      {
        "key": "showEyebrow",
        "label": "装饰标签",
        "type": "toggle",
        "default": true,
        "publicKey": "showEyebrow",
        "publicLabel": "装饰标签"
      },
      {
        "key": "showHeat",
        "label": "热力底色",
        "type": "toggle",
        "default": true,
        "publicKey": "showHeat",
        "publicLabel": "热力底色"
      },
      {
        "key": "showBar",
        "label": "数值条",
        "type": "toggle",
        "default": true,
        "publicKey": "showValueLabels",
        "publicLabel": "数值条"
      },
      {
        "key": "focusEnabled",
        "label": "重点突出",
        "type": "toggle",
        "default": true,
        "publicKey": "focusEnabled",
        "publicLabel": "重点突出"
      },
      {
        "key": "focusIndex",
        "label": "突出项",
        "type": "slider",
        "default": 7,
        "min": 0,
        "max": 11,
        "step": 1,
        "publicKey": "focusIndex",
        "publicLabel": "突出项"
      },
      {
        "key": "showSummary",
        "label": "侧栏汇总",
        "type": "toggle",
        "default": true,
        "publicKey": "showSummary",
        "publicLabel": "侧栏汇总"
      }
    ],
    "defaultProps": {
      "showEyebrow": true,
      "showHeat": true,
      "showBar": true,
      "focusEnabled": true,
      "focusIndex": 7,
      "showSummary": true,
      "eyebrow": "月度明细 / 03",
      "kicker": "单位：亿美元 · 2024 全年",
      "title": "逐月融资额明细",
      "h1Label": "上半年 · H1",
      "h2Label": "下半年 · H2",
      "peakLabel": "↳ 全年峰值",
      "unit": "亿美元",
      "monthSuffix": "月",
      "peakNote": "月单月新高 · 多家头部公司集中关账",
      "quarterLabel": "↳ 季度合计",
      "data": [
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
      "quarters": [
        [
          "Q1",
          162
        ],
        [
          "Q2",
          284
        ],
        [
          "Q3",
          318
        ],
        [
          "Q4",
          206
        ]
      ],
      "forceDark": true
    }
  },
  {
    "key": "theme03_page026",
    "themeKey": "theme03",
    "pageNumber": 26,
    "layout": "THEME03-026",
    "slot": "peak",
    "label": "单月峰值",
    "bgClass": "",
    "controls": [
      {
        "key": "forceDark",
        "label": "全局深色",
        "type": "toggle",
        "default": true,
        "desc": "复刻 Claude Design 右上角深浅配色切换。",
        "publicKey": "forceDark",
        "publicLabel": "全局深色",
        "description": "复刻 Claude Design 右上角深浅配色切换。"
      },
      {
        "key": "showEyebrow",
        "label": "装饰标签",
        "type": "toggle",
        "default": true,
        "publicKey": "showEyebrow",
        "publicLabel": "装饰标签"
      },
      {
        "key": "theme",
        "label": "背景主题",
        "type": "select",
        "default": "dark",
        "options": [
          {
            "value": "dark",
            "label": "深色"
          },
          {
            "value": "light",
            "label": "浅色"
          }
        ],
        "publicKey": "theme",
        "publicLabel": "背景主题"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "select",
        "default": "lime",
        "options": [
          {
            "value": "blue",
            "label": "电光蓝"
          },
          {
            "value": "lime",
            "label": "荧光绿"
          }
        ],
        "publicKey": "accent",
        "publicLabel": "强调色"
      },
      {
        "key": "showUnit",
        "label": "数字单位",
        "type": "toggle",
        "default": true,
        "publicKey": "showUnit",
        "publicLabel": "数字单位"
      },
      {
        "key": "showSupport",
        "label": "辅助说明",
        "type": "toggle",
        "default": true,
        "publicKey": "showSupport",
        "publicLabel": "辅助说明"
      },
      {
        "key": "showChart",
        "label": "月度节奏",
        "type": "toggle",
        "default": true,
        "publicKey": "showChart",
        "publicLabel": "月度节奏"
      },
      {
        "key": "showSecondPeak",
        "label": "次峰标记",
        "type": "toggle",
        "default": true,
        "publicKey": "showSecondPeak",
        "publicLabel": "次峰标记"
      }
    ],
    "defaultProps": {
      "showEyebrow": true,
      "theme": "dark",
      "accent": "lime",
      "showUnit": true,
      "showSupport": true,
      "showChart": true,
      "showSecondPeak": true,
      "eyebrow": "纵向节奏 / RHYTHM",
      "kicker": "2024 · 逐月融资额 · 单月峰值",
      "figureValue": "118",
      "unit": "亿\n美元",
      "headlineSegments": [
        {
          "t": "8 月",
          "a": true
        },
        {
          "t": " 单月融资创全年峰值——"
        },
        {
          "br": true
        },
        {
          "t": "全年呈「"
        },
        {
          "t": "前高后稳",
          "a": true
        },
        {
          "t": "」，Q2–Q3 达峰后理性回落。"
        }
      ],
      "supportLabel": "↳ 双峰节奏",
      "supportSegments": [
        {
          "t": "全年出现 "
        },
        {
          "t": "5 月（105 亿）",
          "b": true
        },
        {
          "t": " 与"
        },
        {
          "t": " 8 月（118 亿）",
          "b": true
        },
        {
          "t": " 两次峰值，与多家头部公司集中关账有关。达峰后市场并未失速，而是从狂热转向分化——节奏的变化，往往比总量更早预示风向。"
        }
      ],
      "peakIndex": 7,
      "secondIndex": 4,
      "data": [
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
      "months": [
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
      "copy": {
        "t001": "月"
      },
      "forceDark": true
    }
  },
  {
    "key": "theme03_page027",
    "themeKey": "theme03",
    "pageNumber": 27,
    "layout": "THEME03-027",
    "slot": "cumulative",
    "label": "资金累积",
    "bgClass": "",
    "controls": [
      {
        "key": "forceDark",
        "label": "全局深色",
        "type": "toggle",
        "default": true,
        "desc": "复刻 Claude Design 右上角深浅配色切换。",
        "publicKey": "forceDark",
        "publicLabel": "全局深色",
        "description": "复刻 Claude Design 右上角深浅配色切换。"
      },
      {
        "key": "showEyebrow",
        "label": "装饰标签",
        "type": "toggle",
        "default": true,
        "publicKey": "showEyebrow",
        "publicLabel": "装饰标签"
      },
      {
        "key": "chartType",
        "label": "主系列样式",
        "type": "select",
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
        "publicKey": "chartType",
        "publicLabel": "主系列样式"
      },
      {
        "key": "showSecondary",
        "label": "月度增量",
        "type": "toggle",
        "default": true,
        "publicKey": "showSecondary",
        "publicLabel": "月度增量"
      },
      {
        "key": "showGrid",
        "label": "网格线",
        "type": "toggle",
        "default": true,
        "publicKey": "showGrid",
        "publicLabel": "网格线"
      },
      {
        "key": "focusEnabled",
        "label": "重点突出",
        "type": "toggle",
        "default": true,
        "publicKey": "focusEnabled",
        "publicLabel": "重点突出"
      },
      {
        "key": "focusIndex",
        "label": "突出项",
        "type": "slider",
        "default": 7,
        "min": 0,
        "max": 11,
        "step": 1,
        "publicKey": "focusIndex",
        "publicLabel": "突出项"
      },
      {
        "key": "showCallout",
        "label": "趋势解读",
        "type": "toggle",
        "default": true,
        "publicKey": "showCallout",
        "publicLabel": "趋势解读"
      },
      {
        "key": "theme",
        "label": "主题",
        "type": "select",
        "default": "light",
        "options": [
          {
            "value": "light",
            "label": "浅色"
          },
          {
            "value": "dark",
            "label": "深色"
          }
        ],
        "publicKey": "theme",
        "publicLabel": "主题"
      }
    ],
    "defaultProps": {
      "showEyebrow": true,
      "chartType": "area",
      "showSecondary": true,
      "showGrid": true,
      "focusEnabled": true,
      "focusIndex": 7,
      "showCallout": true,
      "theme": "light",
      "eyebrow": "市场全景 / ACCUMULATION",
      "kicker": "2024 · 逐月累计融资额 · 单位亿美元",
      "title": "970 亿是如何累积的",
      "titleNote": "逐月新增汇成全年总额 · S 曲线",
      "calloutLabel": "↳ 累积节奏",
      "calloutSegments": [
        {
          "t": "曲线在 "
        },
        {
          "t": "5 月、8 月两度陡峭抬升",
          "b": true
        },
        {
          "t": "——年中至下半年贡献了大半增量，到 8 月累计已破 650 亿；全年逐月汇成 "
        },
        {
          "t": "970 亿美元",
          "a": true
        },
        {
          "t": " 的历史新高，呈典型「双峰 + 前高后稳」节律。"
        }
      ],
      "monthly": [
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
      "copy": {
        "t001": "累计 · +"
      },
      "forceDark": true
    }
  },
  {
    "key": "theme03_page028",
    "themeKey": "theme03",
    "pageNumber": 28,
    "layout": "THEME03-028",
    "slot": "stat",
    "label": "核心数据",
    "bgClass": "",
    "controls": [
      {
        "key": "forceDark",
        "label": "全局深色",
        "type": "toggle",
        "default": true,
        "desc": "复刻 Claude Design 右上角深浅配色切换。",
        "publicKey": "forceDark",
        "publicLabel": "全局深色",
        "description": "复刻 Claude Design 右上角深浅配色切换。"
      },
      {
        "key": "showEyebrow",
        "label": "装饰标签",
        "type": "toggle",
        "default": true,
        "publicKey": "showEyebrow",
        "publicLabel": "装饰标签"
      },
      {
        "key": "theme",
        "label": "背景主题",
        "type": "select",
        "default": "light",
        "options": [
          {
            "value": "dark",
            "label": "深色"
          },
          {
            "value": "light",
            "label": "浅色"
          }
        ],
        "publicKey": "theme",
        "publicLabel": "背景主题"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "select",
        "default": "blue",
        "options": [
          {
            "value": "blue",
            "label": "电光蓝"
          },
          {
            "value": "lime",
            "label": "荧光绿"
          }
        ],
        "publicKey": "accent",
        "publicLabel": "强调色"
      },
      {
        "key": "showUnit",
        "label": "数字单位",
        "type": "toggle",
        "default": true,
        "publicKey": "showUnit",
        "publicLabel": "数字单位"
      },
      {
        "key": "showSupport",
        "label": "辅助说明",
        "type": "toggle",
        "default": true,
        "publicKey": "showSupport",
        "publicLabel": "辅助说明"
      },
      {
        "key": "statCount",
        "label": "佐证数据",
        "type": "slider",
        "default": 3,
        "min": 0,
        "max": 3,
        "step": 1,
        "publicKey": "statCount",
        "publicLabel": "佐证数据"
      }
    ],
    "defaultProps": {
      "showEyebrow": true,
      "theme": "light",
      "accent": "blue",
      "showUnit": true,
      "showSupport": true,
      "statCount": 3,
      "copy": {
        "t001": "核心数据 / KEY FIGURE",
        "t002": "2024 · USA · AI VENTURE",
        "t003": "32",
        "t004": "2024 年美国 AI 吸纳的风险投资，",
        "t005": "约占全美风险投资总额的",
        "t006": "三分之一",
        "t007": "↳ 资本大年",
        "t008": "AI 首次成为美国风险投资的绝对主线。资本以前所未有的密度向「AGI 叙事」 押注——单笔 ≥1 亿美元的大额事件高度集中于头部标的，平均单笔接近 10 亿美元， 创下历史新高。"
      },
      "stats": [
        {
          "value": "970",
          "unit": "亿美元",
          "label": "全年 AI 风险投资额"
        },
        {
          "value": "97",
          "unit": "笔",
          "label": "单笔 ≥1 亿美元事件"
        },
        {
          "value": "10",
          "unit": "亿美元",
          "label": "平均单笔融资额"
        }
      ],
      "forceDark": true
    }
  },
  {
    "key": "theme03_page029",
    "themeKey": "theme03",
    "pageNumber": 29,
    "layout": "THEME03-029",
    "slot": "geo",
    "label": "地区分布",
    "bgClass": "",
    "controls": [
      {
        "key": "forceDark",
        "label": "全局深色",
        "type": "toggle",
        "default": true,
        "desc": "复刻 Claude Design 右上角深浅配色切换。",
        "publicKey": "forceDark",
        "publicLabel": "全局深色",
        "description": "复刻 Claude Design 右上角深浅配色切换。"
      },
      {
        "key": "showEyebrow",
        "label": "装饰标签",
        "type": "toggle",
        "default": true,
        "publicKey": "showEyebrow",
        "publicLabel": "装饰标签"
      },
      {
        "key": "itemCount",
        "label": "条目数量",
        "type": "slider",
        "default": 5,
        "min": 3,
        "max": 5,
        "step": 1,
        "publicKey": "itemCount",
        "publicLabel": "条目数量"
      },
      {
        "key": "chartType",
        "label": "图表类型",
        "type": "select",
        "default": "bar",
        "options": [
          {
            "value": "bar",
            "label": "条形"
          },
          {
            "value": "lollipop",
            "label": "棒棒糖"
          }
        ],
        "publicKey": "chartType",
        "publicLabel": "图表类型"
      },
      {
        "key": "focusEnabled",
        "label": "重点突出",
        "type": "toggle",
        "default": true,
        "publicKey": "focusEnabled",
        "publicLabel": "重点突出"
      },
      {
        "key": "focusIndex",
        "label": "突出项",
        "type": "slider",
        "default": 0,
        "min": 0,
        "max": 4,
        "step": 1,
        "publicKey": "focusIndex",
        "publicLabel": "突出项"
      },
      {
        "key": "imageCount",
        "label": "图片数量",
        "type": "slider",
        "default": 1,
        "min": 0,
        "max": 2,
        "step": 1,
        "publicKey": "imageCount",
        "publicLabel": "图片数量"
      },
      {
        "key": "showCallout",
        "label": "装饰解读",
        "type": "toggle",
        "default": true,
        "publicKey": "showCallout",
        "publicLabel": "装饰解读"
      }
    ],
    "defaultProps": {
      "showEyebrow": true,
      "itemCount": 5,
      "chartType": "bar",
      "focusEnabled": true,
      "focusIndex": 0,
      "imageCount": 1,
      "showCallout": true,
      "copy": {
        "t001": "地区生态 / 08",
        "t002": "按科技枢纽归类 · 单位：亿美元",
        "t003": "融资的地理版图",
        "t004": "资金高度向少数科技枢纽集聚",
        "t005": "亿",
        "t006": "↳ 高度集聚",
        "t007": "旧金山湾区独占六成以上，人才、资本、算力的虹吸效应进一步强化，「地理护城河」短期内难以撼动。",
        "t008": "科技枢纽实景 / DROP IMAGE",
        "t009": "63.9",
        "t010": "资金落在",
        "t011": "旧金山湾区",
        "t012": "63.9",
        "t013": "资金落在旧金山湾区"
      },
      "data": [
        {
          "region": "旧金山湾区",
          "en": "SF Bay Area",
          "amt": 620,
          "pct": 63.9
        },
        {
          "region": "纽约",
          "en": "New York",
          "amt": 120,
          "pct": 12.4
        },
        {
          "region": "西雅图",
          "en": "Seattle",
          "amt": 95,
          "pct": 9.8
        },
        {
          "region": "波士顿",
          "en": "Boston",
          "amt": 75,
          "pct": 7.7
        },
        {
          "region": "其他地区",
          "en": "Others",
          "amt": 60,
          "pct": 6.2
        }
      ],
      "forceDark": true
    }
  },
  {
    "key": "theme03_page030",
    "themeKey": "theme03",
    "pageNumber": 30,
    "layout": "THEME03-030",
    "slot": "mosaic",
    "label": "地理图集",
    "bgClass": "",
    "controls": [
      {
        "key": "forceDark",
        "label": "全局深色",
        "type": "toggle",
        "default": true,
        "desc": "复刻 Claude Design 右上角深浅配色切换。",
        "publicKey": "forceDark",
        "publicLabel": "全局深色",
        "description": "复刻 Claude Design 右上角深浅配色切换。"
      },
      {
        "key": "showEyebrow",
        "label": "装饰标签",
        "type": "toggle",
        "default": true,
        "publicKey": "showEyebrow",
        "publicLabel": "装饰标签"
      },
      {
        "key": "imageCount",
        "label": "图片数量",
        "type": "slider",
        "default": 4,
        "min": 2,
        "max": 5,
        "step": 1,
        "publicKey": "imageCount",
        "publicLabel": "图片数量"
      },
      {
        "key": "showFigure",
        "label": "主视觉数字",
        "type": "toggle",
        "default": true,
        "publicKey": "showFigure",
        "publicLabel": "主视觉数字"
      },
      {
        "key": "showMeta",
        "label": "地区明细",
        "type": "toggle",
        "default": true,
        "publicKey": "showMeta",
        "publicLabel": "地区明细"
      },
      {
        "key": "theme",
        "label": "明暗主题",
        "type": "select",
        "default": "light",
        "options": [
          {
            "value": "light",
            "label": "浅色"
          },
          {
            "value": "dark",
            "label": "深色"
          }
        ],
        "publicKey": "theme",
        "publicLabel": "明暗主题"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "select",
        "default": "blue",
        "options": [
          {
            "value": "blue",
            "label": "电光蓝"
          },
          {
            "value": "lime",
            "label": "荧光绿"
          }
        ],
        "publicKey": "accent",
        "publicLabel": "强调色"
      }
    ],
    "defaultProps": {
      "showEyebrow": true,
      "imageCount": 4,
      "showFigure": true,
      "showMeta": true,
      "theme": "light",
      "accent": "blue",
      "copy": {
        "t001": "地区分布 / 13",
        "t002": "融资地理 · 高度集聚",
        "t003": "融资的",
        "t004": "地理版图",
        "t005": "湾区现场 / DROP",
        "t006": "配图 / DROP",
        "t007": "旧金山湾区 · Bay Area",
        "t008": "63.9",
        "t009": "独占全美 AI 融资六成以上"
      },
      "regions": [
        {
          "name": "旧金山湾区",
          "en": "Bay Area",
          "pct": 63.9
        },
        {
          "name": "纽约",
          "en": "New York",
          "pct": 12.4
        },
        {
          "name": "西雅图",
          "en": "Seattle",
          "pct": 9.8
        },
        {
          "name": "波士顿",
          "en": "Boston",
          "pct": 7.7
        },
        {
          "name": "其他地区",
          "en": "Others",
          "pct": 6.2
        }
      ],
      "forceDark": true
    }
  },
  {
    "key": "theme03_page031",
    "themeKey": "theme03",
    "pageNumber": 31,
    "layout": "THEME03-031",
    "slot": "valuationjump",
    "label": "估值跃迁",
    "bgClass": "",
    "controls": [
      {
        "key": "forceDark",
        "label": "全局深色",
        "type": "toggle",
        "default": true,
        "desc": "复刻 Claude Design 右上角深浅配色切换。",
        "publicKey": "forceDark",
        "publicLabel": "全局深色",
        "description": "复刻 Claude Design 右上角深浅配色切换。"
      },
      {
        "key": "showEyebrow",
        "label": "装饰标签",
        "type": "toggle",
        "default": true,
        "publicKey": "showEyebrow",
        "publicLabel": "装饰标签"
      },
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
            "value": "step",
            "label": "阶梯"
          },
          {
            "value": "area",
            "label": "面积"
          }
        ],
        "publicKey": "chartType",
        "publicLabel": "图表类型"
      },
      {
        "key": "showSecondary",
        "label": "次级系列",
        "type": "toggle",
        "default": true,
        "publicKey": "showSecondary",
        "publicLabel": "次级系列"
      },
      {
        "key": "showGrid",
        "label": "网格线",
        "type": "toggle",
        "default": true,
        "publicKey": "showGrid",
        "publicLabel": "网格线"
      },
      {
        "key": "focusEnabled",
        "label": "重点突出",
        "type": "toggle",
        "default": true,
        "publicKey": "focusEnabled",
        "publicLabel": "重点突出"
      },
      {
        "key": "focusIndex",
        "label": "突出项",
        "type": "slider",
        "default": 2,
        "min": 0,
        "max": 2,
        "step": 1,
        "publicKey": "focusIndex",
        "publicLabel": "突出项"
      },
      {
        "key": "showCallout",
        "label": "装饰解读",
        "type": "toggle",
        "default": true,
        "publicKey": "showCallout",
        "publicLabel": "装饰解读"
      }
    ],
    "defaultProps": {
      "showEyebrow": true,
      "chartType": "bar",
      "showSecondary": true,
      "showGrid": true,
      "focusEnabled": true,
      "focusIndex": 2,
      "showCallout": true,
      "eyebrow": "典型案例 / JUMP",
      "kicker": "Anthropic · 2024 估值（亿美元）",
      "title": "从追赶到反超 · 估值跃迁",
      "primaryLegend": "投后估值",
      "secondaryLegend": "单轮融资额",
      "focusUnit": "亿估值",
      "focusRaisePre": "单轮融资 ",
      "focusRaiseSuffix": " 亿美元",
      "calloutLabel": "↳ 反超 OpenAI",
      "calloutBody": "2024 年连续三轮、累计融资超 650 亿美元，估值一举突破 9650 亿——超越 OpenAI 成为全球估值最高的 AI 初创企业；2026 年 6 月已递交 IPO 申请。",
      "data": [
        {
          "label": "5 月",
          "en": "Series G",
          "val": 600,
          "raise": 280
        },
        {
          "label": "8 月",
          "en": "Series H",
          "val": 830,
          "raise": 180
        },
        {
          "label": "11 月",
          "en": "H 扩轮",
          "val": 9650,
          "raise": 190
        }
      ],
      "forceDark": true
    }
  },
  {
    "key": "theme03_page032",
    "themeKey": "theme03",
    "pageNumber": 32,
    "layout": "THEME03-032",
    "slot": "valuation",
    "label": "估值之谜",
    "bgClass": "",
    "controls": [
      {
        "key": "forceDark",
        "label": "全局深色",
        "type": "toggle",
        "default": true,
        "desc": "复刻 Claude Design 右上角深浅配色切换。",
        "publicKey": "forceDark",
        "publicLabel": "全局深色",
        "description": "复刻 Claude Design 右上角深浅配色切换。"
      },
      {
        "key": "showEyebrow",
        "label": "装饰标签",
        "type": "toggle",
        "default": true,
        "publicKey": "showEyebrow",
        "publicLabel": "装饰标签"
      },
      {
        "key": "theme",
        "label": "背景主题",
        "type": "select",
        "default": "dark",
        "options": [
          {
            "value": "dark",
            "label": "深色"
          },
          {
            "value": "light",
            "label": "浅色"
          }
        ],
        "publicKey": "theme",
        "publicLabel": "背景主题"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "select",
        "default": "lime",
        "options": [
          {
            "value": "blue",
            "label": "电光蓝"
          },
          {
            "value": "lime",
            "label": "荧光绿"
          }
        ],
        "publicKey": "accent",
        "publicLabel": "强调色"
      },
      {
        "key": "showInputs",
        "label": "构成项",
        "type": "toggle",
        "default": true,
        "publicKey": "showInputs",
        "publicLabel": "构成项"
      },
      {
        "key": "showBar",
        "label": "量级条",
        "type": "toggle",
        "default": true,
        "publicKey": "showBar",
        "publicLabel": "量级条"
      },
      {
        "key": "showSupport",
        "label": "辅助说明",
        "type": "toggle",
        "default": true,
        "publicKey": "showSupport",
        "publicLabel": "辅助说明"
      }
    ],
    "defaultProps": {
      "showEyebrow": true,
      "theme": "dark",
      "accent": "lime",
      "showInputs": true,
      "showBar": true,
      "showSupport": true,
      "eyebrow": "估值研判 / VALUATION",
      "kicker": "Anthropic · 2024E",
      "ratioLabel": "市销率 · P/S RATIO",
      "ratioValue": "1000",
      "ratioSuffix": "×+",
      "headlineSegments": [
        {
          "t": "估值建立在「"
        },
        {
          "t": "未来市值",
          "a": true
        },
        {
          "t": "」，"
        },
        {
          "br": true
        },
        {
          "t": "而非当期收入之上。"
        }
      ],
      "supportLabel": "↳ 泡沫信号",
      "supportBody": "Anthropic 9650 亿美元估值，对应 2024 年预计收入仅约 8 亿美元。一旦宏观环境收紧，估值回调几乎不可避免——这也是当前 AI 资本市场最核心的结构性风险。",
      "inputs": [
        {
          "label": "最新估值",
          "en": "VALUATION",
          "value": "9650",
          "unit": "亿美元",
          "mag": 1
        },
        {
          "label": "2024E 收入",
          "en": "REVENUE",
          "value": "8",
          "unit": "亿美元",
          "mag": 0.0008290155440414508
        }
      ],
      "forceDark": true
    }
  },
  {
    "key": "theme03_page033",
    "themeKey": "theme03",
    "pageNumber": 33,
    "layout": "THEME03-033",
    "slot": "risk",
    "label": "风险研判",
    "bgClass": "",
    "controls": [
      {
        "key": "forceDark",
        "label": "全局深色",
        "type": "toggle",
        "default": true,
        "desc": "复刻 Claude Design 右上角深浅配色切换。",
        "publicKey": "forceDark",
        "publicLabel": "全局深色",
        "description": "复刻 Claude Design 右上角深浅配色切换。"
      },
      {
        "key": "showEyebrow",
        "label": "装饰标签",
        "type": "toggle",
        "default": true,
        "publicKey": "showEyebrow",
        "publicLabel": "装饰标签"
      },
      {
        "key": "cardCount",
        "label": "卡片数量",
        "type": "slider",
        "default": 4,
        "min": 1,
        "max": 4,
        "step": 1,
        "publicKey": "cardCount",
        "publicLabel": "卡片数量"
      },
      {
        "key": "columns",
        "label": "网格列数",
        "type": "select",
        "default": "2",
        "options": [
          {
            "value": "2",
            "label": "两列"
          },
          {
            "value": "4",
            "label": "四列"
          }
        ],
        "publicKey": "columns",
        "publicLabel": "网格列数"
      },
      {
        "key": "showIndex",
        "label": "卡片序号",
        "type": "toggle",
        "default": true,
        "publicKey": "showIndex",
        "publicLabel": "卡片序号"
      },
      {
        "key": "showMeter",
        "label": "状态等级",
        "type": "toggle",
        "default": true,
        "publicKey": "showStatusRating",
        "publicLabel": "状态等级"
      },
      {
        "key": "focusEnabled",
        "label": "重点突出",
        "type": "toggle",
        "default": false,
        "publicKey": "focusEnabled",
        "publicLabel": "重点突出"
      },
      {
        "key": "focusIndex",
        "label": "突出项",
        "type": "slider",
        "default": 0,
        "min": 0,
        "max": 3,
        "step": 1,
        "publicKey": "focusIndex",
        "publicLabel": "突出项"
      }
    ],
    "defaultProps": {
      "showEyebrow": true,
      "cardCount": 4,
      "columns": "2",
      "showIndex": true,
      "showMeter": true,
      "focusEnabled": false,
      "focusIndex": 0,
      "copy": {
        "t001": "风险研判 / 09",
        "t002": "多重风险信号 · 不容忽视",
        "t003": "当前市场的主要风险"
      },
      "risks": [
        {
          "idx": "01",
          "name": "估值泡沫与盈利困境",
          "en": "VALUATION BUBBLE",
          "level": 3,
          "desc": "多数估值建立在「未来市值」而非当前收入之上。Anthropic 9650 亿估值对应 2024 年预计收入约 8 亿，P/S 超千倍，宏观收紧时回调难免。"
        },
        {
          "idx": "02",
          "name": "监管压力加大",
          "en": "REGULATION",
          "level": 2,
          "desc": "欧盟 AI Act、美国各州数据隐私法案相继生效，合规成本与法律风险上升；技术标准尚未统一，政策不确定性高。"
        },
        {
          "idx": "03",
          "name": "大厂挤压与开源冲击",
          "en": "BIG-TECH & OSS",
          "level": 3,
          "desc": "Google、Meta、Microsoft 自研模型凭生态优势形成降维打击；Llama、Mistral 等开源性能逼近闭源，削弱 API 收费壁垒。"
        },
        {
          "idx": "04",
          "name": "算力供应链卡脖子",
          "en": "COMPUTE SUPPLY",
          "level": 2,
          "desc": "NVIDIA GPU 供应紧张，叠加出口管制加码，算力成本居高不下，中小公司难以承受长期烧钱。"
        }
      ],
      "forceDark": true
    }
  },
  {
    "key": "theme03_page034",
    "themeKey": "theme03",
    "pageNumber": 34,
    "layout": "THEME03-034",
    "slot": "riskchain",
    "label": "风险传导",
    "bgClass": "",
    "controls": [
      {
        "key": "forceDark",
        "label": "全局深色",
        "type": "toggle",
        "default": true,
        "desc": "复刻 Claude Design 右上角深浅配色切换。",
        "publicKey": "forceDark",
        "publicLabel": "全局深色",
        "description": "复刻 Claude Design 右上角深浅配色切换。"
      },
      {
        "key": "showEyebrow",
        "label": "装饰标签",
        "type": "toggle",
        "default": true,
        "publicKey": "showEyebrow",
        "publicLabel": "装饰标签"
      },
      {
        "key": "chainCount",
        "label": "链条数量",
        "type": "slider",
        "default": 3,
        "min": 1,
        "max": 3,
        "step": 1,
        "publicKey": "chainCount",
        "publicLabel": "链条数量"
      },
      {
        "key": "showConnector",
        "label": "传导箭头",
        "type": "toggle",
        "default": true,
        "publicKey": "showConnector",
        "publicLabel": "传导箭头"
      },
      {
        "key": "showOutcome",
        "label": "终局结果",
        "type": "toggle",
        "default": true,
        "publicKey": "showOutcome",
        "publicLabel": "终局结果"
      },
      {
        "key": "focusEnabled",
        "label": "重点突出",
        "type": "toggle",
        "default": false,
        "publicKey": "focusEnabled",
        "publicLabel": "重点突出"
      },
      {
        "key": "focusIndex",
        "label": "突出项",
        "type": "slider",
        "default": 0,
        "min": 0,
        "max": 2,
        "step": 1,
        "publicKey": "focusIndex",
        "publicLabel": "突出项"
      }
    ],
    "defaultProps": {
      "showEyebrow": true,
      "chainCount": 3,
      "showConnector": true,
      "showOutcome": true,
      "focusEnabled": false,
      "focusIndex": 0,
      "copy": {
        "t001": "风险研判 / CHAIN",
        "t002": "风险如何一步步传导",
        "t003": "风险传导链条",
        "t004": "三组风险并非孤立，而是沿因果链层层放大——最终汇向估值回调与行业出清。"
      },
      "chains": [
        {
          "tag": "传导链 A",
          "title": "泡沫 → 出清",
          "nodes": [
            "高估值泡沫",
            "盈利模式未验证",
            "烧钱速度过快",
            "资本耐心耗尽"
          ],
          "outcomes": [
            "估值回调",
            "倒闭潮"
          ]
        },
        {
          "tag": "传导链 B",
          "title": "监管收紧",
          "nodes": [
            "监管收紧",
            "AI 安全法案",
            "合规成本激增"
          ]
        },
        {
          "tag": "传导链 C",
          "title": "竞争加剧",
          "nodes": [
            "大厂自研竞争",
            "开源模型普及",
            "商业化壁垒降低"
          ]
        }
      ],
      "forceDark": true
    }
  },
  {
    "key": "theme03_page035",
    "themeKey": "theme03",
    "pageNumber": 35,
    "layout": "THEME03-035",
    "slot": "outlook",
    "label": "投资建议",
    "bgClass": "",
    "controls": [
      {
        "key": "forceDark",
        "label": "全局深色",
        "type": "toggle",
        "default": true,
        "desc": "复刻 Claude Design 右上角深浅配色切换。",
        "publicKey": "forceDark",
        "publicLabel": "全局深色",
        "description": "复刻 Claude Design 右上角深浅配色切换。"
      },
      {
        "key": "showEyebrow",
        "label": "装饰标签",
        "type": "toggle",
        "default": true,
        "publicKey": "showEyebrow",
        "publicLabel": "装饰标签"
      },
      {
        "key": "itemCount",
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
        "key": "focusSide",
        "label": "突出栏目",
        "type": "select",
        "default": "none",
        "options": [
          {
            "value": "none",
            "label": "并重"
          },
          {
            "value": "left",
            "label": "看好"
          },
          {
            "value": "right",
            "label": "谨慎"
          }
        ],
        "publicKey": "focusSide",
        "publicLabel": "突出栏目"
      },
      {
        "key": "showTag",
        "label": "栏目标记",
        "type": "toggle",
        "default": true,
        "publicKey": "showTag",
        "publicLabel": "栏目标记"
      },
      {
        "key": "showCallout",
        "label": "装饰解读",
        "type": "toggle",
        "default": true,
        "publicKey": "showCallout",
        "publicLabel": "装饰解读"
      }
    ],
    "defaultProps": {
      "showEyebrow": true,
      "itemCount": 3,
      "focusSide": "none",
      "showTag": true,
      "showCallout": true,
      "copy": {
        "t001": "投资展望 / 10",
        "t002": "从「赌叙事」转向「看兑现」",
        "t003": "投资建议与策略",
        "t004": "看好方向",
        "t005": "谨慎对待",
        "t006": "↳ 阶段策略",
        "t007": "25–26 年观察头部 IPO 表现，警惕破发引发的估值回调；26–27 年优选 ARR 超 1 亿、续约率 >120% 的垂直标的；27 年后若 AGI 未兑现，进入洗牌期可抄底被低估的技术资产。"
      },
      "favorItems": [
        {
          "name": "垂直应用",
          "desc": "有清晰商业模式、已验证 PMF 的细分赛道（企业搜索 Glean、法律 AI Harvey）。"
        },
        {
          "name": "基础设施中游",
          "desc": "数据标注（Scale AI）、向量数据库（Pinecone）等「卖铲子」环节。"
        },
        {
          "name": "具身智能",
          "desc": "人形机器人（Figure AI）、自动驾驶等长周期技术积累的硬科技。"
        }
      ],
      "cautionItems": [
        {
          "name": "高估值无收入纯模型",
          "desc": "烧钱速度快、竞争壁垒低、估值泡沫大。"
        },
        {
          "name": "跟风「AI 包装」项目",
          "desc": "仅在传统业务上加一层 LLM 调用，无核心技术壁垒。"
        },
        {
          "name": "缺乏数据护城河应用",
          "desc": "用户迁移成本低，易被大厂复制。"
        }
      ],
      "forceDark": true
    }
  },
  {
    "key": "theme03_page036",
    "themeKey": "theme03",
    "pageNumber": 36,
    "layout": "THEME03-036",
    "slot": "timeline",
    "label": "策略时间轴",
    "bgClass": "",
    "controls": [
      {
        "key": "forceDark",
        "label": "全局深色",
        "type": "toggle",
        "default": true,
        "desc": "复刻 Claude Design 右上角深浅配色切换。",
        "publicKey": "forceDark",
        "publicLabel": "全局深色",
        "description": "复刻 Claude Design 右上角深浅配色切换。"
      },
      {
        "key": "showEyebrow",
        "label": "装饰标签",
        "type": "toggle",
        "default": true,
        "publicKey": "showEyebrow",
        "publicLabel": "装饰标签"
      },
      {
        "key": "orientation",
        "label": "排布方向",
        "type": "select",
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
        "publicKey": "orientation",
        "publicLabel": "排布方向"
      },
      {
        "key": "itemCount",
        "label": "阶段数量",
        "type": "slider",
        "default": 3,
        "min": 1,
        "max": 3,
        "step": 1,
        "publicKey": "itemCount",
        "publicLabel": "阶段数量"
      },
      {
        "key": "showConnector",
        "label": "连接轨道",
        "type": "toggle",
        "default": true,
        "publicKey": "showConnector",
        "publicLabel": "连接轨道"
      },
      {
        "key": "focusEnabled",
        "label": "重点突出",
        "type": "toggle",
        "default": false,
        "publicKey": "focusEnabled",
        "publicLabel": "重点突出"
      },
      {
        "key": "focusIndex",
        "label": "突出项",
        "type": "slider",
        "default": 1,
        "min": 0,
        "max": 2,
        "step": 1,
        "publicKey": "focusIndex",
        "publicLabel": "突出项"
      },
      {
        "key": "showMeta",
        "label": "页脚说明",
        "type": "toggle",
        "default": true,
        "publicKey": "showMeta",
        "publicLabel": "页脚说明"
      }
    ],
    "defaultProps": {
      "showEyebrow": true,
      "orientation": "horizontal",
      "itemCount": 3,
      "showConnector": true,
      "focusEnabled": false,
      "focusIndex": 1,
      "showMeta": true,
      "copy": {
        "t001": "投资展望 / 15",
        "t002": "阶段性策略 · 2025 → 2027+",
        "t003": "阶段性投资策略",
        "t004": "路线图",
        "t005": "策略为基于公开数据的研究推演 · 不构成投资建议"
      },
      "phases": [
        {
          "span": "2025 — 2026",
          "tag": "PHASE 01",
          "head": "观察 · 警惕回调",
          "body": "持续观察头部公司 IPO 表现；若 Anthropic、OpenAI 上市后破发，警惕全行业估值回调。",
          "cue": "触发：头部 IPO 破发"
        },
        {
          "span": "2026 — 2027",
          "tag": "PHASE 02",
          "head": "聚焦兑现能力",
          "body": "关注垂直应用收入增长曲线，优选 ARR ≥ 1 亿美元、续约率 > 120% 的标的。",
          "cue": "信号：ARR 与续约率"
        },
        {
          "span": "2027 年 后",
          "tag": "PHASE 03",
          "head": "洗牌期 · 逢低布局",
          "body": "若 AGI 突破未兑现，预计进入行业洗牌期，可逢低布局被低估的技术资产。",
          "cue": "窗口：行业洗牌期"
        }
      ],
      "forceDark": true
    }
  },
  {
    "key": "theme03_page037",
    "themeKey": "theme03",
    "pageNumber": 37,
    "layout": "THEME03-037",
    "slot": "horizon",
    "label": "三视野",
    "bgClass": "",
    "controls": [
      {
        "key": "forceDark",
        "label": "全局深色",
        "type": "toggle",
        "default": true,
        "desc": "复刻 Claude Design 右上角深浅配色切换。",
        "publicKey": "forceDark",
        "publicLabel": "全局深色",
        "description": "复刻 Claude Design 右上角深浅配色切换。"
      },
      {
        "key": "showEyebrow",
        "label": "装饰标签",
        "type": "toggle",
        "default": true,
        "publicKey": "showEyebrow",
        "publicLabel": "装饰标签"
      },
      {
        "key": "showEnvelope",
        "label": "雄心包络",
        "type": "toggle",
        "default": true,
        "publicKey": "showEnvelope",
        "publicLabel": "雄心包络"
      },
      {
        "key": "showCards",
        "label": "视野卡片",
        "type": "toggle",
        "default": true,
        "publicKey": "showCards",
        "publicLabel": "视野卡片"
      },
      {
        "key": "showMeter",
        "label": "定性标尺",
        "type": "toggle",
        "default": true,
        "publicKey": "showMeter",
        "publicLabel": "定性标尺"
      },
      {
        "key": "focusEnabled",
        "label": "重点突出",
        "type": "toggle",
        "default": false,
        "publicKey": "focusEnabled",
        "publicLabel": "重点突出"
      },
      {
        "key": "focusIndex",
        "label": "突出项",
        "type": "slider",
        "default": 0,
        "min": 0,
        "max": 2,
        "step": 1,
        "publicKey": "focusIndex",
        "publicLabel": "突出项"
      },
      {
        "key": "showCallout",
        "label": "底部小结",
        "type": "toggle",
        "default": true,
        "publicKey": "showCallout",
        "publicLabel": "底部小结"
      },
      {
        "key": "theme",
        "label": "主题",
        "type": "select",
        "default": "light",
        "options": [
          {
            "value": "light",
            "label": "浅色"
          },
          {
            "value": "dark",
            "label": "深色"
          }
        ],
        "publicKey": "theme",
        "publicLabel": "主题"
      }
    ],
    "defaultProps": {
      "showEyebrow": true,
      "showEnvelope": true,
      "showCards": true,
      "showMeter": true,
      "focusEnabled": false,
      "focusIndex": 0,
      "showCallout": true,
      "theme": "light",
      "copy": {
        "t001": "投资框架 / THREE HORIZONS",
        "t002": "守正 · 成长 · 远望 · 三层配置",
        "t003": "三视野投资框架",
        "t004": "用时间轴把 AI 押注分成三档梯队",
        "t005": "价值 / 确定性 ▲ 时间 / 兑现距离 ▶",
        "t006": "↳ 组合配置",
        "t007": "以",
        "t008": "H1 守正",
        "t009": "锚定现金流确定性，用",
        "t010": "H2 成长",
        "t011": "捕捉高增长主战场，再以小仓位的",
        "t012": "H3 远望",
        "t013": "买入非连续性期权——三档梯队对冲「叙事兑现」的时间差。"
      },
      "horizons": [
        {
          "h": "H1",
          "cn": "守正",
          "en": "DEFEND THE CORE",
          "t": 0.17,
          "amp": 0.74,
          "theme": "当下兑现",
          "lanes": [
            "已验证 PMF 的应用层",
            "算力基建 · 卖铲赢家"
          ],
          "meter": {
            "确定性": 3,
            "赔率": 2,
            "现金流": 3
          },
          "read": "现金流可被验证、嵌入业务流程；CoreWeave、Databricks 一类已在兑现。"
        },
        {
          "h": "H2",
          "cn": "成长",
          "en": "GROW THE NEXT",
          "t": 0.5,
          "amp": 0.92,
          "theme": "高增长主战场",
          "lanes": [
            "通用大模型头部",
            "垂直应用龙头"
          ],
          "meter": {
            "确定性": 2,
            "赔率": 3,
            "现金流": 2
          },
          "read": "吸金最猛、增速最高，但估值博弈激烈，需紧盯叙事向兑现的转化。"
        },
        {
          "h": "H3",
          "cn": "远望",
          "en": "SEED THE FUTURE",
          "t": 0.84,
          "amp": 0.66,
          "theme": "前沿期权",
          "lanes": [
            "具身智能",
            "AGI 级前沿押注"
          ],
          "meter": {
            "确定性": 1,
            "赔率": 3,
            "现金流": 1
          },
          "read": "落地遥远、波动极大，以小仓位押注非连续性的高赔率期权。"
        }
      ],
      "timeAxis": [
        "现在",
        "1–2 年",
        "3–5 年",
        "未来"
      ],
      "forceDark": true
    }
  },
  {
    "key": "theme03_page038",
    "themeKey": "theme03",
    "pageNumber": 38,
    "layout": "THEME03-038",
    "slot": "takeaway",
    "label": "核心结论",
    "bgClass": "",
    "controls": [
      {
        "key": "forceDark",
        "label": "全局深色",
        "type": "toggle",
        "default": true,
        "desc": "复刻 Claude Design 右上角深浅配色切换。",
        "publicKey": "forceDark",
        "publicLabel": "全局深色",
        "description": "复刻 Claude Design 右上角深浅配色切换。"
      },
      {
        "key": "showEyebrow",
        "label": "装饰标签",
        "type": "toggle",
        "default": true,
        "publicKey": "showEyebrow",
        "publicLabel": "装饰标签"
      },
      {
        "key": "itemCount",
        "label": "结论数量",
        "type": "slider",
        "default": 3,
        "min": 1,
        "max": 3,
        "step": 1,
        "publicKey": "itemCount",
        "publicLabel": "结论数量"
      },
      {
        "key": "showIndex",
        "label": "巨型序号",
        "type": "toggle",
        "default": true,
        "publicKey": "showIndex",
        "publicLabel": "巨型序号"
      },
      {
        "key": "focusEnabled",
        "label": "重点突出",
        "type": "toggle",
        "default": false,
        "publicKey": "focusEnabled",
        "publicLabel": "重点突出"
      },
      {
        "key": "focusIndex",
        "label": "突出项",
        "type": "slider",
        "default": 0,
        "min": 0,
        "max": 2,
        "step": 1,
        "publicKey": "focusIndex",
        "publicLabel": "突出项"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "select",
        "default": "blue",
        "options": [
          {
            "value": "blue",
            "label": "电光蓝"
          },
          {
            "value": "lime",
            "label": "荧光绿"
          }
        ],
        "publicKey": "accent",
        "publicLabel": "强调色"
      },
      {
        "key": "showMeta",
        "label": "底部口径",
        "type": "toggle",
        "default": true,
        "publicKey": "showMeta",
        "publicLabel": "底部口径"
      }
    ],
    "defaultProps": {
      "showEyebrow": true,
      "itemCount": 3,
      "showIndex": true,
      "focusEnabled": false,
      "focusIndex": 0,
      "accent": "blue",
      "showMeta": true,
      "copy": {
        "t001": "结论 / TAKEAWAYS",
        "t002": "横纵分析 · 三条核心结论",
        "t003": "一张图读懂",
        "t004": "这一年",
        "t005": "《2024 美国大额融资 AI 公司调研报告》· 第七章 结论",
        "t006": "从「赌叙事」转向「看兑现」"
      },
      "takeaways": [
        {
          "idx": "01",
          "axis": "横向 · 空间",
          "key": "集中",
          "title": "横向看集中",
          "desc": "资金高度向头部公司、通用大模型赛道、旧金山湾区集中，「赢家通吃」格局确立。"
        },
        {
          "idx": "02",
          "axis": "纵向 · 时间",
          "key": "节奏",
          "title": "纵向看节奏",
          "desc": "全年融资「前高后稳」，Q2–Q3 达峰后理性回落，市场从狂热转向分化。"
        },
        {
          "idx": "03",
          "axis": "交叉 · 分层",
          "key": "分层",
          "title": "结构看分层",
          "desc": "上游基础设施确定性最强，中游模型层竞争最激烈，下游应用层潜力最大但尚需时间验证。"
        }
      ],
      "forceDark": true
    }
  },
  {
    "key": "theme03_page039",
    "themeKey": "theme03",
    "pageNumber": 39,
    "layout": "THEME03-039",
    "slot": "quote",
    "label": "金句页",
    "bgClass": "",
    "controls": [
      {
        "key": "forceDark",
        "label": "全局深色",
        "type": "toggle",
        "default": true,
        "desc": "复刻 Claude Design 右上角深浅配色切换。",
        "publicKey": "forceDark",
        "publicLabel": "全局深色",
        "description": "复刻 Claude Design 右上角深浅配色切换。"
      },
      {
        "key": "showEyebrow",
        "label": "装饰标签",
        "type": "toggle",
        "default": true,
        "publicKey": "showEyebrow",
        "publicLabel": "装饰标签"
      },
      {
        "key": "theme",
        "label": "背景主题",
        "type": "select",
        "default": "light",
        "options": [
          {
            "value": "dark",
            "label": "深色"
          },
          {
            "value": "light",
            "label": "浅色"
          }
        ],
        "publicKey": "theme",
        "publicLabel": "背景主题"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "select",
        "default": "blue",
        "options": [
          {
            "value": "blue",
            "label": "电光蓝"
          },
          {
            "value": "lime",
            "label": "荧光绿"
          }
        ],
        "publicKey": "accent",
        "publicLabel": "强调色"
      },
      {
        "key": "showMark",
        "label": "引号装饰",
        "type": "toggle",
        "default": true,
        "publicKey": "showMark",
        "publicLabel": "引号装饰"
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
        "publicKey": "align",
        "publicLabel": "对齐方式"
      },
      {
        "key": "showAttribution",
        "label": "署名出处",
        "type": "toggle",
        "default": true,
        "publicKey": "showAttribution",
        "publicLabel": "署名出处"
      }
    ],
    "defaultProps": {
      "showEyebrow": true,
      "theme": "light",
      "accent": "blue",
      "showMark": true,
      "align": "left",
      "showAttribution": true,
      "copy": {
        "t001": "结论 / CONCLUSION",
        "t002": "2024 · 一句话总结",
        "t003": "AI 融资盛宴仍在继续，",
        "t004": "但",
        "t005": "音乐节奏",
        "t006": "正在变化——资本的下一阶段，",
        "t007": "将从「",
        "t008": "赌叙事",
        "t009": "」转向「",
        "t010": "看兑现",
        "t011": "能把技术转化为可持续收入的公司，才能在退潮后留在牌桌上",
        "t012": "《2024 美国大额融资 AI 公司调研报告》",
        "t013": "横向看集中 · 纵向看节奏 · 结构看分层"
      },
      "forceDark": true
    }
  },
  {
    "key": "theme03_page040",
    "themeKey": "theme03",
    "pageNumber": 40,
    "layout": "THEME03-040",
    "slot": "aarrr",
    "label": "AARRR",
    "bgClass": "",
    "controls": [
      {
        "key": "forceDark",
        "label": "全局深色",
        "type": "toggle",
        "default": true,
        "desc": "复刻 Claude Design 右上角深浅配色切换。",
        "publicKey": "forceDark",
        "publicLabel": "全局深色",
        "description": "复刻 Claude Design 右上角深浅配色切换。"
      },
      {
        "key": "showEyebrow",
        "label": "装饰标签",
        "type": "toggle",
        "default": true,
        "publicKey": "showEyebrow",
        "publicLabel": "装饰标签"
      },
      {
        "key": "stageCount",
        "label": "阶段数量",
        "type": "slider",
        "default": 5,
        "min": 3,
        "max": 5,
        "step": 1,
        "publicKey": "stageCount",
        "publicLabel": "阶段数量"
      },
      {
        "key": "showMetric",
        "label": "指标数值",
        "type": "toggle",
        "default": true,
        "publicKey": "showValueLabels",
        "publicLabel": "指标数值"
      },
      {
        "key": "showRate",
        "label": "转化率",
        "type": "toggle",
        "default": true,
        "publicKey": "showRate",
        "publicLabel": "转化率"
      },
      {
        "key": "showStrategy",
        "label": "策略解读",
        "type": "toggle",
        "default": true,
        "publicKey": "showStrategy",
        "publicLabel": "策略解读"
      },
      {
        "key": "focusEnabled",
        "label": "重点突出",
        "type": "toggle",
        "default": false,
        "publicKey": "focusEnabled",
        "publicLabel": "重点突出"
      },
      {
        "key": "focusIndex",
        "label": "突出项",
        "type": "slider",
        "default": 2,
        "min": 0,
        "max": 4,
        "step": 1,
        "publicKey": "focusIndex",
        "publicLabel": "突出项"
      },
      {
        "key": "theme",
        "label": "主题",
        "type": "select",
        "default": "light",
        "options": [
          {
            "value": "light",
            "label": "浅色"
          },
          {
            "value": "dark",
            "label": "深色"
          }
        ],
        "publicKey": "theme",
        "publicLabel": "主题"
      }
    ],
    "defaultProps": {
      "showEyebrow": true,
      "stageCount": 5,
      "showMetric": true,
      "showRate": true,
      "showStrategy": true,
      "focusEnabled": false,
      "focusIndex": 2,
      "theme": "light",
      "eyebrow": "增长模型 / AARRR",
      "kicker": "海盗指标 · 用户增长漏斗",
      "title": "AARRR 增长漏斗",
      "subtitle": "Acquisition · Activation · Retention · Revenue · Referral",
      "panelTitle": "各环节策略解读 / PLAYBOOK",
      "ratePrefix": "↘ 转化",
      "annotationLabel": "↳ 解读",
      "annotationBody": "漏斗最大流失常出现在「激活 → 留存」环节，应作为优化第一优先级；获客成本高企时优先提升激活率，而非盲目扩大触达。Referral 自传播是摊薄 CAC 的关键杠杆。",
      "stages": [
        {
          "L": "A",
          "cn": "获取用户",
          "en": "ACQUISITION",
          "value": "120,000",
          "kpi": "渠道触达",
          "rate": null,
          "note": "按渠道 ROI 分配预算，关注获客成本 CAC 而非曝光量。"
        },
        {
          "L": "A",
          "cn": "激活用户",
          "en": "ACTIVATION",
          "value": "38,400",
          "kpi": "完成关键行为",
          "rate": "32%",
          "note": "缩短首次价值时间（TTV），优化新手引导转化。"
        },
        {
          "L": "R",
          "cn": "提高留存",
          "en": "RETENTION",
          "value": "16,100",
          "kpi": "次周回访",
          "rate": "42%",
          "note": "建立使用习惯与回访触点——留存是增长的地基。"
        },
        {
          "L": "R",
          "cn": "获取收入",
          "en": "REVENUE",
          "value": "5,280",
          "kpi": "付费转化",
          "rate": "33%",
          "note": "设计清晰付费动机与定价阶梯，提升付费率。"
        },
        {
          "L": "R",
          "cn": "用户推荐",
          "en": "REFERRAL",
          "value": "1,460",
          "kpi": "推荐带新",
          "rate": "28%",
          "note": "产品内置分享激励，用口碑摊薄获客成本。"
        }
      ],
      "forceDark": true
    }
  },
  {
    "key": "theme03_page041",
    "themeKey": "theme03",
    "pageNumber": 41,
    "layout": "THEME03-041",
    "slot": "rfm",
    "label": "RFM",
    "bgClass": "",
    "controls": [
      {
        "key": "forceDark",
        "label": "全局深色",
        "type": "toggle",
        "default": true,
        "desc": "复刻 Claude Design 右上角深浅配色切换。",
        "publicKey": "forceDark",
        "publicLabel": "全局深色",
        "description": "复刻 Claude Design 右上角深浅配色切换。"
      },
      {
        "key": "showEyebrow",
        "label": "装饰标签",
        "type": "toggle",
        "default": true,
        "publicKey": "showEyebrow",
        "publicLabel": "装饰标签"
      },
      {
        "key": "showCube",
        "label": "方位立方体",
        "type": "toggle",
        "default": true,
        "publicKey": "showCube",
        "publicLabel": "方位立方体"
      },
      {
        "key": "showAxis",
        "label": "坐标轴标注",
        "type": "toggle",
        "default": true,
        "publicKey": "showAxis",
        "publicLabel": "坐标轴标注"
      },
      {
        "key": "showAction",
        "label": "行动策略",
        "type": "toggle",
        "default": true,
        "publicKey": "showAction",
        "publicLabel": "行动策略"
      },
      {
        "key": "showAnalysis",
        "label": "模型解读",
        "type": "toggle",
        "default": true,
        "publicKey": "showAnalysis",
        "publicLabel": "模型解读"
      },
      {
        "key": "focusEnabled",
        "label": "重点突出",
        "type": "toggle",
        "default": true,
        "publicKey": "focusEnabled",
        "publicLabel": "重点突出"
      },
      {
        "key": "focusIndex",
        "label": "突出项",
        "type": "slider",
        "default": 0,
        "min": 0,
        "max": 7,
        "step": 1,
        "publicKey": "focusIndex",
        "publicLabel": "突出项"
      },
      {
        "key": "theme",
        "label": "主题",
        "type": "select",
        "default": "light",
        "options": [
          {
            "value": "light",
            "label": "浅色"
          },
          {
            "value": "dark",
            "label": "深色"
          }
        ],
        "publicKey": "theme",
        "publicLabel": "主题"
      }
    ],
    "defaultProps": {
      "showEyebrow": true,
      "showCube": true,
      "showAxis": true,
      "showAction": true,
      "showAnalysis": true,
      "focusEnabled": true,
      "focusIndex": 0,
      "theme": "light",
      "copy": {
        "t001": "投资模型 / RFM",
        "t002": "近期度 · 频次 · 金额 → 标的分层",
        "t003": "RFM 标的分层模型",
        "t004": "用 RFM 三维切分 97 笔 AI 融资标的 · 八类差异化打法",
        "t005": "↑ M 金额",
        "t006": "F 频次 →",
        "t007": "↙ R 近期",
        "t008": "近期度",
        "t009": "最近一轮距今",
        "t010": "频次",
        "t011": "轮次密度",
        "t012": "金额",
        "t013": "累计 / 估值量级",
        "t014": "8 类标的 · 差异化打法 / SEGMENTS",
        "t015": "高",
        "t016": "低",
        "t017": "↳ 解读",
        "t018": "「巨额」不等于「健康」——",
        "t019": "降温巨鲸",
        "t020": "（高额却近期转冷）往往是估值回调的前兆，需逢高减配； 真正的超额收益常藏在",
        "t021": "成长黑马",
        "t022": "（高频小额）里。当前聚焦：",
        "t023": "· 建议"
      },
      "segments": [
        {
          "name": "头部吸金兽",
          "r": 1,
          "f": 1,
          "m": 1,
          "tag": "近期 · 高频 · 巨额",
          "act": "核心配置 · 长期跟踪、逢轮加注"
        },
        {
          "name": "巨额新贵",
          "r": 1,
          "f": 0,
          "m": 1,
          "tag": "近期 · 低频 · 巨额",
          "act": "关注兑现 · 单笔巨额，择机重仓"
        },
        {
          "name": "降温巨鲸",
          "r": 0,
          "f": 1,
          "m": 1,
          "tag": "沉寂 · 高频 · 巨额",
          "act": "警惕回调 · 高位逢高减配"
        },
        {
          "name": "滞涨巨头",
          "r": 0,
          "f": 0,
          "m": 1,
          "tag": "沉寂 · 低频 · 巨额",
          "act": "盯基本面 · 防估值泡沫挤压"
        },
        {
          "name": "成长黑马",
          "r": 1,
          "f": 1,
          "m": 0,
          "tag": "近期 · 高频 · 小额",
          "act": "早期布局 · 跟投高潜力标的"
        },
        {
          "name": "首融新秀",
          "r": 1,
          "f": 0,
          "m": 0,
          "tag": "近期 · 低频 · 小额",
          "act": "小额试探 · 纳入观察池"
        },
        {
          "name": "长尾活跃",
          "r": 0,
          "f": 1,
          "m": 0,
          "tag": "沉寂 · 高频 · 小额",
          "act": "分散谨慎 · 小额跟投验证"
        },
        {
          "name": "沉寂长尾",
          "r": 0,
          "f": 0,
          "m": 0,
          "tag": "沉寂 · 低频 · 小额",
          "act": "低优先级 · 接受自然淘汰"
        }
      ],
      "forceDark": true
    }
  },
  {
    "key": "theme03_page042",
    "themeKey": "theme03",
    "pageNumber": 42,
    "layout": "THEME03-042",
    "slot": "maba",
    "label": "MABA",
    "bgClass": "",
    "controls": [
      {
        "key": "forceDark",
        "label": "全局深色",
        "type": "toggle",
        "default": true,
        "desc": "复刻 Claude Design 右上角深浅配色切换。",
        "publicKey": "forceDark",
        "publicLabel": "全局深色",
        "description": "复刻 Claude Design 右上角深浅配色切换。"
      },
      {
        "key": "showEyebrow",
        "label": "装饰标签",
        "type": "toggle",
        "default": true,
        "publicKey": "showEyebrow",
        "publicLabel": "装饰标签"
      },
      {
        "key": "showAxis",
        "label": "坐标轴标注",
        "type": "toggle",
        "default": true,
        "publicKey": "showAxis",
        "publicLabel": "坐标轴标注"
      },
      {
        "key": "showZones",
        "label": "三区配色",
        "type": "toggle",
        "default": true,
        "publicKey": "showZones",
        "publicLabel": "三区配色"
      },
      {
        "key": "bubbleCount",
        "label": "分类数量",
        "type": "slider",
        "default": 6,
        "min": 1,
        "max": 6,
        "step": 1,
        "publicKey": "categoryCount",
        "publicLabel": "分类数量"
      },
      {
        "key": "showReads",
        "label": "分类读解",
        "type": "toggle",
        "default": true,
        "publicKey": "showReads",
        "publicLabel": "分类读解"
      },
      {
        "key": "showAnalysis",
        "label": "策略解读",
        "type": "toggle",
        "default": true,
        "publicKey": "showAnalysis",
        "publicLabel": "策略解读"
      },
      {
        "key": "focusEnabled",
        "label": "重点突出",
        "type": "toggle",
        "default": false,
        "publicKey": "focusEnabled",
        "publicLabel": "重点突出"
      },
      {
        "key": "focusIndex",
        "label": "突出项",
        "type": "slider",
        "default": 0,
        "min": 0,
        "max": 5,
        "step": 1,
        "publicKey": "focusIndex",
        "publicLabel": "突出项"
      },
      {
        "key": "theme",
        "label": "主题",
        "type": "select",
        "default": "light",
        "options": [
          {
            "value": "light",
            "label": "浅色"
          },
          {
            "value": "dark",
            "label": "深色"
          }
        ],
        "publicKey": "theme",
        "publicLabel": "主题"
      }
    ],
    "defaultProps": {
      "showEyebrow": true,
      "showAxis": true,
      "showZones": true,
      "bubbleCount": 6,
      "showReads": true,
      "showAnalysis": true,
      "focusEnabled": false,
      "focusIndex": 0,
      "theme": "light",
      "copy": {
        "t001": "战略模型 / MABA",
        "t002": "赛道吸引力 × 竞争实力 · 气泡 ∝ 融资额",
        "t003": "MABA 赛道矩阵",
        "t004": "九宫格研判 AI 赛道投资优先级 · 把 970 亿配到对的格子",
        "t005": "赛道吸引力 — 高 → 低",
        "t006": "竞争实力 — 强 → 弱",
        "t007": "各赛道投资读解 / READ-OUT",
        "t008": "↳ 结论",
        "t009": "垂直应用",
        "t010": "与",
        "t011": "基础设施",
        "t012": "落在「投资区」——兑现确定性高，是组合的压舱石； 通用大模型吸引力虽高但竞争白热、风险并存，宜以头部集中、控制单一敞口；早期硬件位于「收获区」，控敞口、择优跟踪。"
      },
      "bubbles": [
        {
          "name": "通用大模型",
          "amt": "420 亿",
          "r": 0,
          "c": 0,
          "size": 1,
          "read": "资本最密集（43%），但算力成本高、差异化收窄——高投入高风险。"
        },
        {
          "name": "垂直应用",
          "amt": "245 亿",
          "r": 1,
          "c": 0,
          "size": 0.9,
          "read": "商业化路径渐清晰（25%），落地为王、兑现确定性最高。"
        },
        {
          "name": "AI 基础设施",
          "amt": "158 亿",
          "r": 0,
          "c": 1,
          "size": 0.78,
          "read": "「卖铲子」逻辑（16%），收入确定性高、贯穿全周期。"
        },
        {
          "name": "AI 芯片",
          "amt": "97 亿",
          "r": 1,
          "c": 1,
          "size": 0.58,
          "read": "上游硬件（10%），壁垒高、资本密集、回报周期长。"
        },
        {
          "name": "工具 · 安全",
          "amt": "50 亿",
          "r": 1,
          "c": 2,
          "size": 0.4,
          "read": "长尾概念（5%），方向成立但规模与盈利仍待验证。"
        },
        {
          "name": "早期硬件",
          "amt": "—",
          "r": 2,
          "c": 2,
          "size": 0.34,
          "read": "早期形态、规模未证，敞口宜控、择优跟踪。"
        }
      ],
      "zones": [
        {
          "label": "投资 / 增长",
          "en": "INVEST",
          "color": "#2742ec",
          "strat": "资源倾斜，抢占市场份额"
        },
        {
          "label": "选择 / 盈利",
          "en": "SELECTIVE",
          "color": "#aee21f",
          "strat": "选择性投入，维持现金流"
        },
        {
          "label": "收获 / 退出",
          "en": "HARVEST",
          "color": "#9a988f",
          "strat": "控制投入，收获或退出"
        }
      ],
      "forceDark": true
    }
  },
  {
    "key": "theme03_page043",
    "themeKey": "theme03",
    "pageNumber": 43,
    "layout": "THEME03-043",
    "slot": "gantt",
    "label": "建仓甘特",
    "bgClass": "",
    "controls": [
      {
        "key": "forceDark",
        "label": "全局深色",
        "type": "toggle",
        "default": true,
        "desc": "复刻 Claude Design 右上角深浅配色切换。",
        "publicKey": "forceDark",
        "publicLabel": "全局深色",
        "description": "复刻 Claude Design 右上角深浅配色切换。"
      },
      {
        "key": "showEyebrow",
        "label": "装饰标签",
        "type": "toggle",
        "default": true,
        "publicKey": "showEyebrow",
        "publicLabel": "装饰标签"
      },
      {
        "key": "taskCount",
        "label": "任务数量",
        "type": "slider",
        "default": 7,
        "min": 3,
        "max": 8,
        "step": 1,
        "publicKey": "taskCount",
        "publicLabel": "任务数量"
      },
      {
        "key": "showGrid",
        "label": "网格线",
        "type": "toggle",
        "default": true,
        "publicKey": "showGrid",
        "publicLabel": "网格线"
      },
      {
        "key": "showProgress",
        "label": "配置进度",
        "type": "toggle",
        "default": true,
        "publicKey": "showProgress",
        "publicLabel": "配置进度"
      },
      {
        "key": "showMilestones",
        "label": "关键节点",
        "type": "toggle",
        "default": true,
        "publicKey": "showMilestones",
        "publicLabel": "关键节点"
      },
      {
        "key": "showToday",
        "label": "当前基准线",
        "type": "toggle",
        "default": true,
        "publicKey": "showToday",
        "publicLabel": "当前基准线"
      },
      {
        "key": "showAnalysis",
        "label": "节奏解读",
        "type": "toggle",
        "default": true,
        "publicKey": "showAnalysis",
        "publicLabel": "节奏解读"
      },
      {
        "key": "focusEnabled",
        "label": "重点突出",
        "type": "toggle",
        "default": false,
        "publicKey": "focusEnabled",
        "publicLabel": "重点突出"
      },
      {
        "key": "focusIndex",
        "label": "突出项",
        "type": "slider",
        "default": 2,
        "min": 0,
        "max": 7,
        "step": 1,
        "publicKey": "focusIndex",
        "publicLabel": "突出项"
      },
      {
        "key": "theme",
        "label": "主题",
        "type": "select",
        "default": "light",
        "options": [
          {
            "value": "light",
            "label": "浅色"
          },
          {
            "value": "dark",
            "label": "深色"
          }
        ],
        "publicKey": "theme",
        "publicLabel": "主题"
      }
    ],
    "defaultProps": {
      "showEyebrow": true,
      "taskCount": 7,
      "showGrid": true,
      "showProgress": true,
      "showMilestones": true,
      "showToday": true,
      "showAnalysis": true,
      "focusEnabled": false,
      "focusIndex": 2,
      "theme": "light",
      "copy": {
        "t001": "执行模型 / GANTT",
        "t002": "分阶段建仓 · 投资执行甘特",
        "t003": "分阶段建仓路线图",
        "t004": "赛道 · 窗口 · 配置进度 · 关键节点 — 把投资建议落到时间表",
        "t005": "执行任务 / 负责",
        "t006": "当前",
        "t007": "研究 / 观察",
        "t008": "建仓 / 布局",
        "t009": "收获 / 再平衡",
        "t010": "里程碑",
        "t011": "↳ 解读",
        "t012": "建仓节奏、“卖铲赢家”优先——基建 / 算力是当前关键路径，收入确定性高、可先行建仓； 大模型以头部集中、持续跟投，同时全程跳动“估值泡沫监测”；26 年下半年进入组合再平衡与收获窗口。"
      },
      "tasks": [
        {
          "name": "卖铲赢家建仓",
          "owner": "基建·算力",
          "start": 0,
          "end": 2.6,
          "prog": 0.65,
          "phase": 1,
          "ms": 2.6
        },
        {
          "name": "头部大模型跟投",
          "owner": "通用模型",
          "start": 0,
          "end": 5,
          "prog": 0.4,
          "phase": 1
        },
        {
          "name": "垂直应用布局",
          "owner": "应用层",
          "start": 1.6,
          "end": 5.6,
          "prog": 0.3,
          "phase": 1,
          "ms": 5.6
        },
        {
          "name": "芯片·硬件观察",
          "owner": "上游硬件",
          "start": 1,
          "end": 4,
          "prog": 0.5,
          "phase": 0
        },
        {
          "name": "估值泡沫监测",
          "owner": "风险控制",
          "start": 0,
          "end": 8,
          "prog": 0.45,
          "phase": 0
        },
        {
          "name": "长尾标的筛选",
          "owner": "研究池",
          "start": 2.2,
          "end": 4.6,
          "prog": 0.25,
          "phase": 0
        },
        {
          "name": "组合再平衡",
          "owner": "组合管理",
          "start": 4.8,
          "end": 6.8,
          "prog": 0,
          "phase": 2,
          "ms": 6.8
        },
        {
          "name": "收获 / 退出窗口",
          "owner": "组合管理",
          "start": 6.4,
          "end": 8,
          "prog": 0,
          "phase": 2
        }
      ],
      "forceDark": true
    }
  },
  {
    "key": "theme03_page044",
    "themeKey": "theme03",
    "pageNumber": 44,
    "layout": "THEME03-044",
    "slot": "doublediamond",
    "label": "决策双钻",
    "bgClass": "",
    "controls": [
      {
        "key": "forceDark",
        "label": "全局深色",
        "type": "toggle",
        "default": true,
        "desc": "复刻 Claude Design 右上角深浅配色切换。",
        "publicKey": "forceDark",
        "publicLabel": "全局深色",
        "description": "复刻 Claude Design 右上角深浅配色切换。"
      },
      {
        "key": "showEyebrow",
        "label": "装饰标签",
        "type": "toggle",
        "default": true,
        "publicKey": "showEyebrow",
        "publicLabel": "装饰标签"
      },
      {
        "key": "showSpaces",
        "label": "空间括注",
        "type": "toggle",
        "default": true,
        "publicKey": "showSpaces",
        "publicLabel": "空间括注"
      },
      {
        "key": "showFlow",
        "label": "发散收敛标注",
        "type": "toggle",
        "default": true,
        "publicKey": "showFlow",
        "publicLabel": "发散收敛标注"
      },
      {
        "key": "showCards",
        "label": "阶段说明",
        "type": "toggle",
        "default": true,
        "publicKey": "showCards",
        "publicLabel": "阶段说明"
      },
      {
        "key": "showAnalysis",
        "label": "模型解读",
        "type": "toggle",
        "default": true,
        "publicKey": "showAnalysis",
        "publicLabel": "模型解读"
      },
      {
        "key": "focusEnabled",
        "label": "重点突出",
        "type": "toggle",
        "default": false,
        "publicKey": "focusEnabled",
        "publicLabel": "重点突出"
      },
      {
        "key": "focusIndex",
        "label": "突出项",
        "type": "slider",
        "default": 0,
        "min": 0,
        "max": 3,
        "step": 1,
        "publicKey": "focusIndex",
        "publicLabel": "突出项"
      },
      {
        "key": "theme",
        "label": "主题",
        "type": "select",
        "default": "light",
        "options": [
          {
            "value": "light",
            "label": "浅色"
          },
          {
            "value": "dark",
            "label": "深色"
          }
        ],
        "publicKey": "theme",
        "publicLabel": "主题"
      }
    ],
    "defaultProps": {
      "showEyebrow": true,
      "showSpaces": true,
      "showFlow": true,
      "showCards": true,
      "showAnalysis": true,
      "focusEnabled": false,
      "focusIndex": 0,
      "theme": "light",
      "copy": {
        "t001": "决策模型 / DOUBLE DIAMOND",
        "t002": "发现 · 定义 · 构建 · 配置",
        "t003": "投资决策双钻",
        "t004": "两次「发散—收敛」· 先选对赛道，再配好组合",
        "t005": "问题空间",
        "t006": "投什么赛道",
        "t007": "解决方案空间",
        "t008": "怎么配组合",
        "t009": "发散",
        "t010": "◄ 发散 ►",
        "t011": "► 收敛 ◄",
        "t012": "0",
        "t013": "↳ 解读",
        "t014": "投资决策双钻的价值在于「两次收敛」——第一颗钻避免一上来就追单个标的、确保先选对赛道（兑现 > 叙事）； 第二颗钻避免过早押注单一标的，在候选池中分散择优。发散阶段重机会与广度，收敛阶段重纪律与取舍。"
      },
      "stages": [
        {
          "cn": "发现",
          "en": "DISCOVER",
          "dir": "发散",
          "desc": "广扫 970 亿融资全景 · 识别热点、拐点与风险信号",
          "accent": "#2742ec"
        },
        {
          "cn": "定义",
          "en": "DEFINE",
          "dir": "收敛",
          "desc": "收敛到兑现确定性高的赛道 · 锁定投资主题",
          "accent": "#2742ec"
        },
        {
          "cn": "构建",
          "en": "DEVELOP",
          "dir": "发散",
          "desc": "多元筛选头部与潜力标的 · 搭建候选标的池",
          "accent": "#7ba80c"
        },
        {
          "cn": "配置",
          "en": "DELIVER",
          "dir": "收敛",
          "desc": "择优定权重 · 交付可落地的投资组合",
          "accent": "#7ba80c"
        }
      ],
      "forceDark": true
    }
  },
  {
    "key": "theme03_page045",
    "themeKey": "theme03",
    "pageNumber": 45,
    "layout": "THEME03-045",
    "slot": "swot",
    "label": "SWOT",
    "bgClass": "",
    "controls": [
      {
        "key": "forceDark",
        "label": "全局深色",
        "type": "toggle",
        "default": true,
        "desc": "复刻 Claude Design 右上角深浅配色切换。",
        "publicKey": "forceDark",
        "publicLabel": "全局深色",
        "description": "复刻 Claude Design 右上角深浅配色切换。"
      },
      {
        "key": "showEyebrow",
        "label": "装饰标签",
        "type": "toggle",
        "default": true,
        "publicKey": "showEyebrow",
        "publicLabel": "装饰标签"
      },
      {
        "key": "showAxis",
        "label": "坐标轴标注",
        "type": "toggle",
        "default": true,
        "publicKey": "showAxis",
        "publicLabel": "坐标轴标注"
      },
      {
        "key": "showLetter",
        "label": "象限字母",
        "type": "toggle",
        "default": true,
        "publicKey": "showLetter",
        "publicLabel": "象限字母"
      },
      {
        "key": "itemCount",
        "label": "每象限条目",
        "type": "slider",
        "default": 3,
        "min": 2,
        "max": 4,
        "step": 1,
        "publicKey": "itemCount",
        "publicLabel": "每象限条目"
      },
      {
        "key": "showAnalysis",
        "label": "模型解读",
        "type": "toggle",
        "default": true,
        "publicKey": "showAnalysis",
        "publicLabel": "模型解读"
      },
      {
        "key": "focusEnabled",
        "label": "重点突出",
        "type": "toggle",
        "default": false,
        "publicKey": "focusEnabled",
        "publicLabel": "重点突出"
      },
      {
        "key": "focusIndex",
        "label": "突出项",
        "type": "slider",
        "default": 0,
        "min": 0,
        "max": 3,
        "step": 1,
        "publicKey": "focusIndex",
        "publicLabel": "突出项"
      },
      {
        "key": "theme",
        "label": "主题",
        "type": "select",
        "default": "light",
        "options": [
          {
            "value": "light",
            "label": "浅色"
          },
          {
            "value": "dark",
            "label": "深色"
          }
        ],
        "publicKey": "theme",
        "publicLabel": "主题"
      }
    ],
    "defaultProps": {
      "showEyebrow": true,
      "showAxis": true,
      "showLetter": true,
      "itemCount": 3,
      "showAnalysis": true,
      "focusEnabled": false,
      "focusIndex": 0,
      "theme": "light",
      "copy": {
        "t001": "战略模型 / SWOT",
        "t002": "优势 · 劣势 · 机会 · 威胁",
        "t003": "SWOT 模型",
        "t004": "内部能力 × 外部环境 · 系统盘点优劣与机危",
        "t005": "内部",
        "t006": "外部",
        "t007": "INTERNAL",
        "t008": "EXTERNAL",
        "t009": "增益 · HELPFUL",
        "t010": "损害 · HARMFUL",
        "t011": "↳ 解读",
        "t012": "SWOT 不止于罗列——价值在于「交叉匹配」：用优势抓机会（SO 进攻）、补劣势防威胁（WT 防守）、 以机会化解劣势（WO 改善）、用优势对冲威胁（ST 缓冲），从四象限推导出可执行的战略组合。"
      },
      "quadrants": [
        {
          "k": "S",
          "cn": "优势",
          "en": "STRENGTHS",
          "side": "内部 · 增益",
          "accent": "#2742ec",
          "tint": "rgba(39,66,236,0.10)",
          "items": [
            "核心技术壁垒领先",
            "研发团队稳定高效",
            "现金流健康可持续",
            "头部客户粘性强"
          ]
        },
        {
          "k": "W",
          "cn": "劣势",
          "en": "WEAKNESSES",
          "side": "内部 · 损害",
          "accent": "#b8821a",
          "tint": "rgba(184,130,26,0.12)",
          "items": [
            "渠道覆盖仍有限",
            "品牌认知度偏弱",
            "单一客户依赖度高",
            "组织扩张存挑战"
          ]
        },
        {
          "k": "O",
          "cn": "机会",
          "en": "OPPORTUNITIES",
          "side": "外部 · 增益",
          "accent": "#5f8f0c",
          "tint": "rgba(95,143,12,0.13)",
          "items": [
            "政策红利持续释放",
            "新兴市场快速扩张",
            "上下游整合空间大",
            "需求侧加速渗透"
          ]
        },
        {
          "k": "T",
          "cn": "威胁",
          "en": "THREATS",
          "side": "外部 · 损害",
          "accent": "#b04a2f",
          "tint": "rgba(176,74,47,0.12)",
          "items": [
            "巨头入场加剧竞争",
            "替代技术迭代涌现",
            "行业监管趋于收紧",
            "资本环境周期波动"
          ]
        }
      ],
      "quadDarkAccents": [
        "#6e85ff",
        "#d8a43c",
        "#9ccb3a",
        "#e07a5a"
      ],
      "forceDark": true
    }
  },
  {
    "key": "theme03_page046",
    "themeKey": "theme03",
    "pageNumber": 46,
    "layout": "THEME03-046",
    "slot": "fiveforces",
    "label": "五力",
    "bgClass": "",
    "controls": [
      {
        "key": "forceDark",
        "label": "全局深色",
        "type": "toggle",
        "default": true,
        "desc": "复刻 Claude Design 右上角深浅配色切换。",
        "publicKey": "forceDark",
        "publicLabel": "全局深色",
        "description": "复刻 Claude Design 右上角深浅配色切换。"
      },
      {
        "key": "showEyebrow",
        "label": "装饰标签",
        "type": "toggle",
        "default": true,
        "publicKey": "showEyebrow",
        "publicLabel": "装饰标签"
      },
      {
        "key": "showArrows",
        "label": "传导箭头",
        "type": "toggle",
        "default": true,
        "publicKey": "showArrows",
        "publicLabel": "传导箭头"
      },
      {
        "key": "showMeter",
        "label": "强度标尺",
        "type": "toggle",
        "default": true,
        "publicKey": "showMeter",
        "publicLabel": "强度标尺"
      },
      {
        "key": "showAnalysis",
        "label": "模型解读",
        "type": "toggle",
        "default": true,
        "publicKey": "showAnalysis",
        "publicLabel": "模型解读"
      },
      {
        "key": "focusEnabled",
        "label": "重点突出",
        "type": "toggle",
        "default": false,
        "publicKey": "focusEnabled",
        "publicLabel": "重点突出"
      },
      {
        "key": "focusIndex",
        "label": "突出项",
        "type": "slider",
        "default": 0,
        "min": 0,
        "max": 4,
        "step": 1,
        "publicKey": "focusIndex",
        "publicLabel": "突出项"
      },
      {
        "key": "theme",
        "label": "主题",
        "type": "select",
        "default": "light",
        "options": [
          {
            "value": "light",
            "label": "浅色"
          },
          {
            "value": "dark",
            "label": "深色"
          }
        ],
        "publicKey": "theme",
        "publicLabel": "主题"
      }
    ],
    "defaultProps": {
      "showEyebrow": true,
      "showArrows": true,
      "showMeter": true,
      "showAnalysis": true,
      "focusEnabled": false,
      "focusIndex": 0,
      "theme": "light",
      "copy": {
        "t001": "核心",
        "t002": "竞争分析 / FIVE FORCES",
        "t003": "五力 · 行业结构与盈利能力",
        "t004": "波特五力模型",
        "t005": "从五股力量研判行业吸引力与议价格局",
        "t006": "↳ 解读",
        "t007": "五力越强、行业平均盈利越被挤压。分析的目的不是描述现状，而是找到「改变力量对比」的着力点—— 抬高进入壁垒、降低对单一供应商的依赖、用差异化削弱买方议价与替代威胁，从而把行业结构往有利方向重塑。"
      },
      "center": {
        "cn": "现有竞争者",
        "en": "COMPETITIVE RIVALRY",
        "desc": "同业竞争激烈程度 · 五力交汇的核心",
        "lvl": 3
      },
      "forces": [
        {
          "cn": "新进入者威胁",
          "en": "NEW ENTRANTS",
          "desc": "进入壁垒 · 规模与资本门槛",
          "lvl": 2
        },
        {
          "cn": "购买方议价",
          "en": "BUYER POWER",
          "desc": "客户集中度 · 转换成本高低",
          "lvl": 1
        },
        {
          "cn": "替代品威胁",
          "en": "SUBSTITUTES",
          "desc": "替代方案 · 性价比与迁移意愿",
          "lvl": 3
        },
        {
          "cn": "供应商议价",
          "en": "SUPPLIER POWER",
          "desc": "上游集中度 · 关键资源稀缺性",
          "lvl": 2
        }
      ],
      "meterLabel": "强度",
      "levelLabels": [
        "低",
        "中",
        "高"
      ],
      "forceDark": true
    }
  },
  {
    "key": "theme03_page047",
    "themeKey": "theme03",
    "pageNumber": 47,
    "layout": "THEME03-047",
    "slot": "canvas",
    "label": "画布",
    "bgClass": "",
    "controls": [
      {
        "key": "forceDark",
        "label": "全局深色",
        "type": "toggle",
        "default": true,
        "desc": "复刻 Claude Design 右上角深浅配色切换。",
        "publicKey": "forceDark",
        "publicLabel": "全局深色",
        "description": "复刻 Claude Design 右上角深浅配色切换。"
      },
      {
        "key": "showEyebrow",
        "label": "装饰标签",
        "type": "toggle",
        "default": true,
        "publicKey": "showEyebrow",
        "publicLabel": "装饰标签"
      },
      {
        "key": "showItems",
        "label": "要点条目",
        "type": "toggle",
        "default": true,
        "publicKey": "showItems",
        "publicLabel": "要点条目"
      },
      {
        "key": "showIndex",
        "label": "模块编号",
        "type": "toggle",
        "default": true,
        "publicKey": "showIndex",
        "publicLabel": "模块编号"
      },
      {
        "key": "groupColor",
        "label": "三区配色",
        "type": "toggle",
        "default": true,
        "publicKey": "groupColor",
        "publicLabel": "三区配色"
      },
      {
        "key": "showAnalysis",
        "label": "模型解读",
        "type": "toggle",
        "default": true,
        "publicKey": "showAnalysis",
        "publicLabel": "模型解读"
      },
      {
        "key": "focusEnabled",
        "label": "重点突出",
        "type": "toggle",
        "default": false,
        "publicKey": "focusEnabled",
        "publicLabel": "重点突出"
      },
      {
        "key": "focusIndex",
        "label": "突出项",
        "type": "slider",
        "default": 0,
        "min": 0,
        "max": 8,
        "step": 1,
        "publicKey": "focusIndex",
        "publicLabel": "突出项"
      },
      {
        "key": "theme",
        "label": "主题",
        "type": "select",
        "default": "light",
        "options": [
          {
            "value": "light",
            "label": "浅色"
          },
          {
            "value": "dark",
            "label": "深色"
          }
        ],
        "publicKey": "theme",
        "publicLabel": "主题"
      }
    ],
    "defaultProps": {
      "showEyebrow": true,
      "showItems": true,
      "showIndex": true,
      "groupColor": true,
      "showAnalysis": true,
      "focusEnabled": false,
      "focusIndex": 0,
      "theme": "light",
      "eyebrow": "商业设计 / BMC",
      "kicker": "九大模块 · 一页看懂商业模式",
      "title": "商业模式画布",
      "subtitle": "效率侧 · 价值主张 · 客户侧 · 财务底盘，环环相扣",
      "analysisLabel": "↳ 解读",
      "analysisBody": "画布以「价值主张」为枢纽：右侧三块回答「为谁、如何触达、靠什么维系」，左侧三块回答「靠谁、做什么、用什么」交付价值，底部两块则是这套逻辑的财务投影。九块自洽闭环，才算一个跑得通的商业模式。",
      "blocks": [
        {
          "area": "kp",
          "cn": "重要合作",
          "en": "KEY PARTNERS",
          "g": 0,
          "items": [
            "战略联盟",
            "关键供应商"
          ]
        },
        {
          "area": "ka",
          "cn": "关键业务",
          "en": "KEY ACTIVITIES",
          "g": 0,
          "items": [
            "平台研发",
            "运营履约"
          ]
        },
        {
          "area": "kr",
          "cn": "核心资源",
          "en": "KEY RESOURCES",
          "g": 0,
          "items": [
            "技术 IP",
            "数据资产"
          ]
        },
        {
          "area": "vp",
          "cn": "价值主张",
          "en": "VALUE PROPOSITIONS",
          "g": 1,
          "items": [
            "更省 · 更快 · 更可靠",
            "解决核心痛点"
          ]
        },
        {
          "area": "cr",
          "cn": "客户关系",
          "en": "CUSTOMER RELATIONS",
          "g": 2,
          "items": [
            "自助服务",
            "专属客户成功"
          ]
        },
        {
          "area": "ch",
          "cn": "渠道通路",
          "en": "CHANNELS",
          "g": 2,
          "items": [
            "直销 + 生态分发",
            "线上自服务"
          ]
        },
        {
          "area": "cs",
          "cn": "客户细分",
          "en": "CUSTOMER SEGMENTS",
          "g": 2,
          "items": [
            "头部企业",
            "中长尾开发者"
          ]
        },
        {
          "area": "cost",
          "cn": "成本结构",
          "en": "COST STRUCTURE",
          "g": 3,
          "items": [
            "研发与算力",
            "获客与履约"
          ]
        },
        {
          "area": "rev",
          "cn": "收入来源",
          "en": "REVENUE STREAMS",
          "g": 3,
          "items": [
            "订阅 · 按量计费",
            "增值与服务"
          ]
        }
      ],
      "copy": {
        "t001": "0"
      },
      "forceDark": true
    }
  },
  {
    "key": "theme03_page048",
    "themeKey": "theme03",
    "pageNumber": 48,
    "layout": "THEME03-048",
    "slot": "journey",
    "label": "旅程图",
    "bgClass": "",
    "controls": [
      {
        "key": "forceDark",
        "label": "全局深色",
        "type": "toggle",
        "default": true,
        "desc": "复刻 Claude Design 右上角深浅配色切换。",
        "publicKey": "forceDark",
        "publicLabel": "全局深色",
        "description": "复刻 Claude Design 右上角深浅配色切换。"
      },
      {
        "key": "showEyebrow",
        "label": "装饰标签",
        "type": "toggle",
        "default": true,
        "publicKey": "showEyebrow",
        "publicLabel": "装饰标签"
      },
      {
        "key": "stageCount",
        "label": "阶段数量",
        "type": "slider",
        "default": 5,
        "min": 3,
        "max": 5,
        "step": 1,
        "publicKey": "stageCount",
        "publicLabel": "阶段数量"
      },
      {
        "key": "showBehaviour",
        "label": "行为",
        "type": "toggle",
        "default": true,
        "publicKey": "showBehaviour",
        "publicLabel": "行为"
      },
      {
        "key": "showCurve",
        "label": "情绪曲线",
        "type": "toggle",
        "default": true,
        "publicKey": "showCurve",
        "publicLabel": "情绪曲线"
      },
      {
        "key": "showOpportunity",
        "label": "机会点",
        "type": "toggle",
        "default": true,
        "publicKey": "showOpportunity",
        "publicLabel": "机会点"
      },
      {
        "key": "focusEnabled",
        "label": "重点突出",
        "type": "toggle",
        "default": false,
        "publicKey": "focusEnabled",
        "publicLabel": "重点突出"
      },
      {
        "key": "focusIndex",
        "label": "突出项",
        "type": "slider",
        "default": 2,
        "min": 0,
        "max": 4,
        "step": 1,
        "publicKey": "focusIndex",
        "publicLabel": "突出项"
      },
      {
        "key": "theme",
        "label": "主题",
        "type": "select",
        "default": "light",
        "options": [
          {
            "value": "light",
            "label": "浅色"
          },
          {
            "value": "dark",
            "label": "深色"
          }
        ],
        "publicKey": "theme",
        "publicLabel": "主题"
      }
    ],
    "defaultProps": {
      "showEyebrow": true,
      "stageCount": 5,
      "showBehaviour": true,
      "showCurve": true,
      "showOpportunity": true,
      "focusEnabled": false,
      "focusIndex": 2,
      "theme": "light",
      "copy": {
        "t001": "体验设计 / JOURNEY MAP",
        "t002": "阶段 · 行为 · 情绪 · 机会",
        "t003": "用户旅程地图",
        "t004": "沿全旅程还原体验起伏，定位关键时刻与机会点",
        "t005": "0",
        "t006": "用户行为",
        "t007": "情绪曲线 · 高 ↑ / 低 ↓",
        "t008": "↳ 机会点"
      },
      "stages": [
        {
          "cn": "认知",
          "en": "AWARE",
          "behaviour": "广告 / 口碑触达，初次建立印象",
          "score": 0.55,
          "mood": "好奇",
          "opp": "精准触达 · 内容种草"
        },
        {
          "cn": "考虑",
          "en": "CONSIDER",
          "behaviour": "横向比价、查评测，反复犹豫",
          "score": 0.32,
          "mood": "纠结",
          "opp": "场景化案例 · 打消疑虑"
        },
        {
          "cn": "转化",
          "en": "CONVERT",
          "behaviour": "注册下单 / 开通付费",
          "score": 0.72,
          "mood": "期待",
          "opp": "简化流程 · 限时激励"
        },
        {
          "cn": "使用",
          "en": "USE",
          "behaviour": "上手体验，遇阻时求助客服",
          "score": 0.48,
          "mood": "考验",
          "opp": "引导上手 · 主动关怀"
        },
        {
          "cn": "拥护",
          "en": "ADVOCATE",
          "behaviour": "复购续费，主动推荐分享",
          "score": 0.92,
          "mood": "认同",
          "opp": "会员体系 · 裂变激励"
        }
      ],
      "forceDark": true
    }
  },
  {
    "key": "theme03_page049",
    "themeKey": "theme03",
    "pageNumber": 49,
    "layout": "THEME03-049",
    "slot": "pyramid",
    "label": "金字塔",
    "bgClass": "",
    "controls": [
      {
        "key": "forceDark",
        "label": "全局深色",
        "type": "toggle",
        "default": true,
        "desc": "复刻 Claude Design 右上角深浅配色切换。",
        "publicKey": "forceDark",
        "publicLabel": "全局深色",
        "description": "复刻 Claude Design 右上角深浅配色切换。"
      },
      {
        "key": "showEyebrow",
        "label": "装饰标签",
        "type": "toggle",
        "default": true,
        "publicKey": "showEyebrow",
        "publicLabel": "装饰标签"
      },
      {
        "key": "layerCount",
        "label": "层级数量",
        "type": "slider",
        "default": 5,
        "min": 3,
        "max": 6,
        "step": 1,
        "publicKey": "layerCount",
        "publicLabel": "层级数量"
      },
      {
        "key": "showSideNote",
        "label": "层级解读",
        "type": "toggle",
        "default": true,
        "publicKey": "showSideNote",
        "publicLabel": "层级解读"
      },
      {
        "key": "showTierTag",
        "label": "层级序号",
        "type": "toggle",
        "default": true,
        "publicKey": "showTierTag",
        "publicLabel": "层级序号"
      },
      {
        "key": "showAnalysis",
        "label": "模型解读",
        "type": "toggle",
        "default": true,
        "publicKey": "showAnalysis",
        "publicLabel": "模型解读"
      },
      {
        "key": "focusEnabled",
        "label": "重点突出",
        "type": "toggle",
        "default": false,
        "publicKey": "focusEnabled",
        "publicLabel": "重点突出"
      },
      {
        "key": "focusIndex",
        "label": "突出项",
        "type": "slider",
        "default": 0,
        "min": 0,
        "max": 5,
        "step": 1,
        "publicKey": "focusIndex",
        "publicLabel": "突出项"
      },
      {
        "key": "theme",
        "label": "主题",
        "type": "select",
        "default": "light",
        "options": [
          {
            "value": "light",
            "label": "浅色"
          },
          {
            "value": "dark",
            "label": "深色"
          }
        ],
        "publicKey": "theme",
        "publicLabel": "主题"
      }
    ],
    "defaultProps": {
      "showEyebrow": true,
      "layerCount": 5,
      "showSideNote": true,
      "showTierTag": true,
      "showAnalysis": true,
      "focusEnabled": false,
      "focusIndex": 0,
      "theme": "light",
      "copy": {
        "t001": "战略模型 / PYRAMID",
        "t002": "自上而下 · 愿景 → 资源",
        "t003": "金字塔模型",
        "t004": "层层支撑 · 把愿景拆解为可执行的底座",
        "t005": "↳ 解读",
        "t006": "金字塔的价值在于「向下追问支撑」：每上一层都必须由下一层兜底——没有资源基础的战略是空想， 没有愿景牵引的资源是浪费。自上而下对齐方向、自下而上验证可行，才能让顶层意图真正落地。"
      },
      "layers": [
        {
          "cn": "愿景使命",
          "en": "VISION",
          "note": "组织存在的根本意义与长期方向"
        },
        {
          "cn": "战略目标",
          "en": "STRATEGY",
          "note": "可衡量的中期目标与必赢之战"
        },
        {
          "cn": "核心能力",
          "en": "CAPABILITY",
          "note": "支撑战略的差异化能力与壁垒"
        },
        {
          "cn": "关键举措",
          "en": "INITIATIVES",
          "note": "落地战略的重点项目与节奏"
        },
        {
          "cn": "运营机制",
          "en": "OPERATIONS",
          "note": "保障执行的流程、组织与协同"
        },
        {
          "cn": "资源基础",
          "en": "FOUNDATION",
          "note": "人才、资本、数据与技术底座"
        }
      ],
      "forceDark": true
    }
  },
  {
    "key": "theme03_page050",
    "themeKey": "theme03",
    "pageNumber": 50,
    "layout": "THEME03-050",
    "slot": "bcg",
    "label": "波士顿矩阵",
    "bgClass": "",
    "controls": [
      {
        "key": "forceDark",
        "label": "全局深色",
        "type": "toggle",
        "default": true,
        "desc": "复刻 Claude Design 右上角深浅配色切换。",
        "publicKey": "forceDark",
        "publicLabel": "全局深色",
        "description": "复刻 Claude Design 右上角深浅配色切换。"
      },
      {
        "key": "showEyebrow",
        "label": "装饰标签",
        "type": "toggle",
        "default": true,
        "publicKey": "showEyebrow",
        "publicLabel": "装饰标签"
      },
      {
        "key": "showAxis",
        "label": "坐标轴标注",
        "type": "toggle",
        "default": true,
        "publicKey": "showAxis",
        "publicLabel": "坐标轴标注"
      },
      {
        "key": "showQuadLabel",
        "label": "象限水印",
        "type": "toggle",
        "default": true,
        "publicKey": "showQuadLabel",
        "publicLabel": "象限水印"
      },
      {
        "key": "showEmblem",
        "label": "3D 象限元素",
        "type": "toggle",
        "default": true,
        "publicKey": "showEmblem",
        "publicLabel": "3D 象限元素"
      },
      {
        "key": "bubbleCount",
        "label": "气泡数量",
        "type": "slider",
        "default": 6,
        "min": 1,
        "max": 6,
        "step": 1,
        "publicKey": "bubbleCount",
        "publicLabel": "气泡数量"
      },
      {
        "key": "showPanel",
        "label": "策略面板",
        "type": "toggle",
        "default": true,
        "publicKey": "showPanel",
        "publicLabel": "策略面板"
      },
      {
        "key": "focusEnabled",
        "label": "重点突出",
        "type": "toggle",
        "default": false,
        "publicKey": "focusEnabled",
        "publicLabel": "重点突出"
      },
      {
        "key": "focusIndex",
        "label": "突出项",
        "type": "slider",
        "default": 0,
        "min": 0,
        "max": 3,
        "step": 1,
        "publicKey": "focusIndex",
        "publicLabel": "突出项"
      },
      {
        "key": "theme",
        "label": "主题",
        "type": "select",
        "default": "light",
        "options": [
          {
            "value": "light",
            "label": "浅色"
          },
          {
            "value": "dark",
            "label": "深色"
          }
        ],
        "publicKey": "theme",
        "publicLabel": "主题"
      }
    ],
    "defaultProps": {
      "showEyebrow": true,
      "showAxis": true,
      "showQuadLabel": true,
      "showEmblem": true,
      "quadIcons": null,
      "bubbleCount": 6,
      "showPanel": true,
      "focusEnabled": false,
      "focusIndex": 0,
      "theme": "light",
      "eyebrow": "战略模型 / BCG",
      "kicker": "增长率 × 相对市场份额",
      "title": "波士顿矩阵",
      "subtitle": "业务组合定位 · 现金流与增长的平衡",
      "yAxisLabel": "市场增长率 — 高 → 低",
      "xAxisLabel": "相对市场份额 — 高 → 低",
      "panelTitle": "四象限策略 / STRATEGY",
      "conclusionLabel": "↳ 结论",
      "conclusionBody": "用现金牛的盈余去喂养明星、孵化问题业务，让组合形成「造血—增长」的良性循环。",
      "quads": [
        {
          "cn": "明星",
          "en": "STAR",
          "icon": "star",
          "side": "高增长 · 高份额",
          "accent": "#2742ec",
          "strat": "加大投入，保持领先地位"
        },
        {
          "cn": "问题",
          "en": "QUESTION MARK",
          "icon": "question",
          "side": "高增长 · 低份额",
          "accent": "#b8821a",
          "strat": "选择性投入，择优育成明星"
        },
        {
          "cn": "现金牛",
          "en": "CASH COW",
          "icon": "cash",
          "side": "低增长 · 高份额",
          "accent": "#5f8f0c",
          "strat": "收割现金流，反哺增长业务"
        },
        {
          "cn": "瘦狗",
          "en": "DOG",
          "icon": "dog",
          "side": "低增长 · 低份额",
          "accent": "#b04a2f",
          "strat": "控制投入，适时收缩退出"
        }
      ],
      "quadDarkAccents": [
        "#6e85ff",
        "#d8a43c",
        "#9ccb3a",
        "#e07a5a"
      ],
      "bubbles": [
        {
          "name": "通用大模型",
          "gx": 0.22,
          "gy": 0.2,
          "size": 1,
          "q": 0
        },
        {
          "name": "算力设施",
          "gx": 0.32,
          "gy": 0.36,
          "size": 0.9,
          "q": 0
        },
        {
          "name": "企业级应用",
          "gx": 0.7,
          "gy": 0.26,
          "size": 0.6,
          "q": 1
        },
        {
          "name": "垂直方案",
          "gx": 0.78,
          "gy": 0.42,
          "size": 0.5,
          "q": 1
        },
        {
          "name": "云服务",
          "gx": 0.26,
          "gy": 0.74,
          "size": 0.85,
          "q": 2
        },
        {
          "name": "早期硬件",
          "gx": 0.78,
          "gy": 0.79,
          "size": 0.42,
          "q": 3
        }
      ],
      "forceDark": true
    }
  },
  {
    "key": "theme03_page051",
    "themeKey": "theme03",
    "pageNumber": 51,
    "layout": "THEME03-051",
    "slot": "flywheel",
    "label": "飞轮",
    "bgClass": "",
    "controls": [
      {
        "key": "forceDark",
        "label": "全局深色",
        "type": "toggle",
        "default": true,
        "desc": "复刻 Claude Design 右上角深浅配色切换。",
        "publicKey": "forceDark",
        "publicLabel": "全局深色",
        "description": "复刻 Claude Design 右上角深浅配色切换。"
      },
      {
        "key": "showEyebrow",
        "label": "装饰标签",
        "type": "toggle",
        "default": true,
        "publicKey": "showEyebrow",
        "publicLabel": "装饰标签"
      },
      {
        "key": "stageCount",
        "label": "环节数量",
        "type": "slider",
        "default": 6,
        "min": 4,
        "max": 6,
        "step": 1,
        "publicKey": "stageCount",
        "publicLabel": "环节数量"
      },
      {
        "key": "showArrows",
        "label": "传导箭头",
        "type": "toggle",
        "default": true,
        "publicKey": "showArrows",
        "publicLabel": "传导箭头"
      },
      {
        "key": "showLegend",
        "label": "环节解读",
        "type": "toggle",
        "default": true,
        "publicKey": "showLegend",
        "publicLabel": "环节解读"
      },
      {
        "key": "showHub",
        "label": "中心枢纽",
        "type": "toggle",
        "default": true,
        "publicKey": "showHub",
        "publicLabel": "中心枢纽"
      },
      {
        "key": "showAnalysis",
        "label": "模型解读",
        "type": "toggle",
        "default": true,
        "publicKey": "showAnalysis",
        "publicLabel": "模型解读"
      },
      {
        "key": "focusEnabled",
        "label": "重点突出",
        "type": "toggle",
        "default": false,
        "publicKey": "focusEnabled",
        "publicLabel": "重点突出"
      },
      {
        "key": "focusIndex",
        "label": "突出项",
        "type": "slider",
        "default": 0,
        "min": 0,
        "max": 5,
        "step": 1,
        "publicKey": "focusIndex",
        "publicLabel": "突出项"
      },
      {
        "key": "theme",
        "label": "主题",
        "type": "select",
        "default": "light",
        "options": [
          {
            "value": "light",
            "label": "浅色"
          },
          {
            "value": "dark",
            "label": "深色"
          }
        ],
        "publicKey": "theme",
        "publicLabel": "主题"
      }
    ],
    "defaultProps": {
      "showEyebrow": true,
      "stageCount": 6,
      "showArrows": true,
      "showLegend": true,
      "showHub": true,
      "showAnalysis": true,
      "focusEnabled": false,
      "focusIndex": 0,
      "theme": "light",
      "copy": {
        "t001": "增长模型 / FLYWHEEL",
        "t002": "自我强化 · 越转越快",
        "t003": "飞轮模型",
        "t004": "环环相扣 · 让每个环节都为下一环加速",
        "t005": "增长飞轮",
        "t006": "FLYWHEEL",
        "t007": "↳ 解读",
        "t008": "飞轮没有起点，关键是找到能持续发力的一两个环节、把阻力降到最低。前期推动很费力， 但一旦每一圈都把动能传给下一环，增长就会自我强化、越转越快——复利效应正源于此。"
      },
      "stages": [
        {
          "cn": "优质供给",
          "en": "SELECTION",
          "note": "更丰富的产品与内容供给"
        },
        {
          "cn": "体验提升",
          "en": "EXPERIENCE",
          "note": "更优的体验赢得用户口碑"
        },
        {
          "cn": "流量增长",
          "en": "TRAFFIC",
          "note": "访问量与用户规模扩大"
        },
        {
          "cn": "生态扩张",
          "en": "ECOSYSTEM",
          "note": "更多伙伴与供给方加入"
        },
        {
          "cn": "规模效应",
          "en": "SCALE",
          "note": "规模摊薄单位成本结构"
        },
        {
          "cn": "成本下降",
          "en": "LOWER COST",
          "note": "成本与价格持续优化"
        }
      ],
      "forceDark": true
    }
  },
  {
    "key": "theme03_page052",
    "themeKey": "theme03",
    "pageNumber": 52,
    "layout": "THEME03-052",
    "slot": "pest",
    "label": "PEST",
    "bgClass": "",
    "controls": [
      {
        "key": "forceDark",
        "label": "全局深色",
        "type": "toggle",
        "default": true,
        "desc": "复刻 Claude Design 右上角深浅配色切换。",
        "publicKey": "forceDark",
        "publicLabel": "全局深色",
        "description": "复刻 Claude Design 右上角深浅配色切换。"
      },
      {
        "key": "showEyebrow",
        "label": "装饰标签",
        "type": "toggle",
        "default": true,
        "publicKey": "showEyebrow",
        "publicLabel": "装饰标签"
      },
      {
        "key": "factorCount",
        "label": "因素维度",
        "type": "slider",
        "default": 4,
        "min": 4,
        "max": 6,
        "step": 1,
        "publicKey": "factorCount",
        "publicLabel": "因素维度"
      },
      {
        "key": "itemCount",
        "label": "每维条目",
        "type": "slider",
        "default": 3,
        "min": 2,
        "max": 4,
        "step": 1,
        "publicKey": "itemCount",
        "publicLabel": "每维条目"
      },
      {
        "key": "showLetter",
        "label": "维度字母",
        "type": "toggle",
        "default": true,
        "publicKey": "showLetter",
        "publicLabel": "维度字母"
      },
      {
        "key": "showAnalysis",
        "label": "模型解读",
        "type": "toggle",
        "default": true,
        "publicKey": "showAnalysis",
        "publicLabel": "模型解读"
      },
      {
        "key": "focusEnabled",
        "label": "重点突出",
        "type": "toggle",
        "default": false,
        "publicKey": "focusEnabled",
        "publicLabel": "重点突出"
      },
      {
        "key": "focusIndex",
        "label": "突出项",
        "type": "slider",
        "default": 0,
        "min": 0,
        "max": 5,
        "step": 1,
        "publicKey": "focusIndex",
        "publicLabel": "突出项"
      },
      {
        "key": "theme",
        "label": "主题",
        "type": "select",
        "default": "light",
        "options": [
          {
            "value": "light",
            "label": "浅色"
          },
          {
            "value": "dark",
            "label": "深色"
          }
        ],
        "publicKey": "theme",
        "publicLabel": "主题"
      }
    ],
    "defaultProps": {
      "showEyebrow": true,
      "factorCount": 4,
      "itemCount": 3,
      "showLetter": true,
      "showAnalysis": true,
      "focusEnabled": false,
      "focusIndex": 0,
      "theme": "light",
      "copy": {
        "t001": "环境分析 /",
        "t002": "宏观环境 · 不可控外部力量",
        "t003": "宏观环境分析",
        "t004": "扫描外部不可控力量 · 识别机会与威胁",
        "t005": "↳ 解读",
        "t006": "扫描的是企业「不可控」的外部环境——分析重点不是逐条罗列，而是判断每股力量的",
        "t007": "方向与强度",
        "t008": "， 进而把宏观趋势转译为自身的机会与威胁，前置到战略与 SWOT 之中。"
      },
      "factors": [
        {
          "k": "P",
          "cn": "政治",
          "en": "POLITICAL",
          "accent": "#2742ec",
          "items": [
            "政策监管走向",
            "政府补贴与扶持",
            "出口与技术管制",
            "地缘政治格局"
          ]
        },
        {
          "k": "E",
          "cn": "经济",
          "en": "ECONOMIC",
          "accent": "#5f8f0c",
          "items": [
            "利率与流动性",
            "资本市场景气",
            "通胀与成本压力",
            "整体增长预期"
          ]
        },
        {
          "k": "S",
          "cn": "社会",
          "en": "SOCIAL",
          "accent": "#b8821a",
          "items": [
            "用户接受度",
            "人才供给结构",
            "伦理与舆论环境",
            "使用习惯迁移"
          ]
        },
        {
          "k": "T",
          "cn": "技术",
          "en": "TECHNOLOGICAL",
          "accent": "#b04a2f",
          "items": [
            "算法能力突破",
            "算力成本曲线",
            "开源生态演进",
            "专利与标准之争"
          ]
        },
        {
          "k": "E",
          "cn": "环境",
          "en": "ENVIRONMENTAL",
          "accent": "#2a7d8c",
          "items": [
            "能耗与碳排放",
            "数据中心选址",
            "绿色算力转型",
            "可持续合规要求"
          ]
        },
        {
          "k": "L",
          "cn": "法律",
          "en": "LEGAL",
          "accent": "#6a4ea3",
          "items": [
            "数据合规要求",
            "知识产权边界",
            "反垄断审查",
            "安全与责任立法"
          ]
        }
      ],
      "forceDark": true
    }
  },
  {
    "key": "theme03_page053",
    "themeKey": "theme03",
    "pageNumber": 53,
    "layout": "THEME03-053",
    "slot": "pareto",
    "label": "资本集中度",
    "bgClass": "",
    "controls": [
      {
        "key": "forceDark",
        "label": "全局深色",
        "type": "toggle",
        "default": true,
        "desc": "复刻 Claude Design 右上角深浅配色切换。",
        "publicKey": "forceDark",
        "publicLabel": "全局深色",
        "description": "复刻 Claude Design 右上角深浅配色切换。"
      },
      {
        "key": "showEyebrow",
        "label": "装饰标签",
        "type": "toggle",
        "default": true,
        "publicKey": "showEyebrow",
        "publicLabel": "装饰标签"
      },
      {
        "key": "chartType",
        "label": "柱样式",
        "type": "select",
        "default": "bar",
        "options": [
          {
            "value": "bar",
            "label": "柱状"
          },
          {
            "value": "lollipop",
            "label": "棒棒糖"
          }
        ],
        "publicKey": "chartType",
        "publicLabel": "柱样式"
      },
      {
        "key": "showCumulative",
        "label": "累计曲线",
        "type": "toggle",
        "default": true,
        "publicKey": "showCumulative",
        "publicLabel": "累计曲线"
      },
      {
        "key": "showThreshold",
        "label": "80% 基准线",
        "type": "toggle",
        "default": true,
        "publicKey": "showThreshold",
        "publicLabel": "80% 基准线"
      },
      {
        "key": "showGrid",
        "label": "网格线",
        "type": "toggle",
        "default": true,
        "publicKey": "showGrid",
        "publicLabel": "网格线"
      },
      {
        "key": "focusEnabled",
        "label": "重点突出",
        "type": "toggle",
        "default": true,
        "publicKey": "focusEnabled",
        "publicLabel": "重点突出"
      },
      {
        "key": "focusIndex",
        "label": "突出项",
        "type": "slider",
        "default": 0,
        "min": 0,
        "max": 4,
        "step": 1,
        "publicKey": "focusIndex",
        "publicLabel": "突出项"
      },
      {
        "key": "showCallout",
        "label": "核心发现",
        "type": "toggle",
        "default": true,
        "publicKey": "showCallout",
        "publicLabel": "核心发现"
      },
      {
        "key": "theme",
        "label": "主题",
        "type": "select",
        "default": "light",
        "options": [
          {
            "value": "light",
            "label": "浅色"
          },
          {
            "value": "dark",
            "label": "深色"
          }
        ],
        "publicKey": "theme",
        "publicLabel": "主题"
      }
    ],
    "defaultProps": {
      "showEyebrow": true,
      "chartType": "bar",
      "showCumulative": true,
      "showThreshold": true,
      "showGrid": true,
      "focusEnabled": true,
      "focusIndex": 0,
      "showCallout": true,
      "theme": "light",
      "eyebrow": "横向透视 / CONCENTRATION",
      "kicker": "2024 · 赛道融资额 × 累计占比",
      "title": "资本集中度 · 帕累托",
      "titleNote": "少数赛道吸纳绝大多数资本 · “赢家通吃”",
      "leftAxisLabel": "亿美元",
      "rightAxisLabel": "累计",
      "thresholdLabel": "帕累托 80% 线",
      "calloutLabel": "↳ 核心发现",
      "calloutSegments": [
        {
          "t": "头部两条赛道（通用大模型 + 垂直应用）吸纳全年 "
        },
        {
          "t": "68.6%",
          "b": true
        },
        {
          "t": " 的大额资本；叠加基础设施后前三名突破 "
        },
        {
          "t": "85%",
          "b": true
        },
        {
          "t": "。更极端的是公司层面——Anthropic 三轮合计 650 亿美元，约占全年 970 亿的 "
        },
        {
          "t": "67%",
          "b": true
        },
        {
          "t": "，集中度远超典型 80/20。"
        }
      ],
      "sectors": [
        {
          "cn": "通用大模型",
          "en": "FOUNDATION",
          "amt": 420,
          "pct": 43.3
        },
        {
          "cn": "垂直应用",
          "en": "VERTICAL AI",
          "amt": 245,
          "pct": 25.3
        },
        {
          "cn": "AI 基础设施",
          "en": "INFRA",
          "amt": 158,
          "pct": 16.3
        },
        {
          "cn": "AI 芯片",
          "en": "HARDWARE",
          "amt": 97,
          "pct": 10
        },
        {
          "cn": "其他",
          "en": "TOOLING",
          "amt": 50,
          "pct": 5.1
        }
      ],
      "forceDark": true
    }
  },
  {
    "key": "theme03_page054",
    "themeKey": "theme03",
    "pageNumber": 54,
    "layout": "THEME03-054",
    "slot": "radar",
    "label": "风险雷达",
    "bgClass": "",
    "controls": [
      {
        "key": "forceDark",
        "label": "全局深色",
        "type": "toggle",
        "default": true,
        "desc": "复刻 Claude Design 右上角深浅配色切换。",
        "publicKey": "forceDark",
        "publicLabel": "全局深色",
        "description": "复刻 Claude Design 右上角深浅配色切换。"
      },
      {
        "key": "showEyebrow",
        "label": "装饰标签",
        "type": "toggle",
        "default": true,
        "publicKey": "showEyebrow",
        "publicLabel": "装饰标签"
      },
      {
        "key": "showRings",
        "label": "强度刻度环",
        "type": "toggle",
        "default": true,
        "publicKey": "showRings",
        "publicLabel": "强度刻度环"
      },
      {
        "key": "showValue",
        "label": "强度数值",
        "type": "toggle",
        "default": true,
        "publicKey": "showValueLabels",
        "publicLabel": "强度数值"
      },
      {
        "key": "showPanel",
        "label": "状态解读",
        "type": "toggle",
        "default": true,
        "publicKey": "showPanel",
        "publicLabel": "状态解读"
      },
      {
        "key": "showAnalysis",
        "label": "模型解读",
        "type": "toggle",
        "default": true,
        "publicKey": "showAnalysis",
        "publicLabel": "模型解读"
      },
      {
        "key": "focusEnabled",
        "label": "重点突出",
        "type": "toggle",
        "default": false,
        "publicKey": "focusEnabled",
        "publicLabel": "重点突出"
      },
      {
        "key": "focusIndex",
        "label": "突出项",
        "type": "slider",
        "default": 0,
        "min": 0,
        "max": 3,
        "step": 1,
        "publicKey": "focusIndex",
        "publicLabel": "突出项"
      },
      {
        "key": "theme",
        "label": "主题",
        "type": "select",
        "default": "light",
        "options": [
          {
            "value": "light",
            "label": "浅色"
          },
          {
            "value": "dark",
            "label": "深色"
          }
        ],
        "publicKey": "theme",
        "publicLabel": "主题"
      }
    ],
    "defaultProps": {
      "showEyebrow": true,
      "showRings": true,
      "showValue": true,
      "showPanel": true,
      "showAnalysis": true,
      "focusEnabled": false,
      "focusIndex": 0,
      "theme": "light",
      "copy": {
        "t001": "风险研判 / RISK RADAR",
        "t002": "创纪录之下 · 四维风险信号",
        "t003": "风险信号雷达",
        "t004": "融资虽创历史新高 · 多重风险不容忽视",
        "t005": "强度",
        "t006": "/5",
        "t007": "↳ 解读",
        "t008": "四股风险并非孤立——估值泡沫被算力成本与大厂/开源的双重挤压放大，又被趋紧的监管点燃；一旦宏观收紧， 它们会沿“估值回调 → 融资断档 → 倒闭潮”的链条相互传导。资本热度越高，越需对兑现能力保持清醒。"
      },
      "risks": [
        {
          "cn": "估值泡沫",
          "en": "VALUATION BUBBLE",
          "lvl": 5,
          "accent": "#b04a2f",
          "desc": "估值建立在“未来市值”而非当前收入：Anthropic 9650 亿估值对应约 8 亿收入，P/S 超千倍。"
        },
        {
          "cn": "算力卡脖子",
          "en": "COMPUTE SUPPLY",
          "lvl": 4,
          "accent": "#b8821a",
          "desc": "NVIDIA GPU 供应紧张，叠加对华出口管制加码，算力成本居高不下。"
        },
        {
          "cn": "大厂 / 开源",
          "en": "INCUMBENTS & OSS",
          "lvl": 4,
          "accent": "#6a4ea3",
          "desc": "Google / Meta / 微软自研模型降维打击；Llama、Mistral 等开源逼近闭源。"
        },
        {
          "cn": "监管压力",
          "en": "REGULATION",
          "lvl": 3,
          "accent": "#2a7d8c",
          "desc": "欧盟 AI Act、美国各州隐私法相继生效，合规成本与法律不确定性上升。"
        }
      ],
      "lv": [
        "",
        "很低",
        "低",
        "中",
        "高",
        "极高"
      ],
      "forceDark": true
    }
  },
  {
    "key": "theme03_page055",
    "themeKey": "theme03",
    "pageNumber": 55,
    "layout": "THEME03-055",
    "slot": "register",
    "label": "风险登记册",
    "bgClass": "",
    "controls": [
      {
        "key": "forceDark",
        "label": "全局深色",
        "type": "toggle",
        "default": true,
        "desc": "复刻 Claude Design 右上角深浅配色切换。",
        "publicKey": "forceDark",
        "publicLabel": "全局深色",
        "description": "复刻 Claude Design 右上角深浅配色切换。"
      },
      {
        "key": "showEyebrow",
        "label": "装饰标签",
        "type": "toggle",
        "default": true,
        "publicKey": "showEyebrow",
        "publicLabel": "装饰标签"
      },
      {
        "key": "itemCount",
        "label": "状态项数量",
        "type": "slider",
        "default": 4,
        "min": 2,
        "max": 4,
        "step": 1,
        "publicKey": "itemCount",
        "publicLabel": "状态项数量"
      },
      {
        "key": "showLikelihood",
        "label": "可能性列",
        "type": "toggle",
        "default": true,
        "publicKey": "showLikelihood",
        "publicLabel": "可能性列"
      },
      {
        "key": "showImpact",
        "label": "主要影响列",
        "type": "toggle",
        "default": true,
        "publicKey": "showImpact",
        "publicLabel": "主要影响列"
      },
      {
        "key": "focusEnabled",
        "label": "重点突出",
        "type": "toggle",
        "default": true,
        "publicKey": "focusEnabled",
        "publicLabel": "重点突出"
      },
      {
        "key": "focusIndex",
        "label": "突出项",
        "type": "slider",
        "default": 0,
        "min": 0,
        "max": 3,
        "step": 1,
        "publicKey": "focusIndex",
        "publicLabel": "突出项"
      },
      {
        "key": "showCallout",
        "label": "结论解读",
        "type": "toggle",
        "default": true,
        "publicKey": "showCallout",
        "publicLabel": "结论解读"
      },
      {
        "key": "theme",
        "label": "主题",
        "type": "select",
        "default": "light",
        "options": [
          {
            "value": "light",
            "label": "浅色"
          },
          {
            "value": "dark",
            "label": "深色"
          }
        ],
        "publicKey": "theme",
        "publicLabel": "主题"
      }
    ],
    "defaultProps": {
      "showEyebrow": true,
      "itemCount": 4,
      "showLikelihood": true,
      "showImpact": true,
      "focusEnabled": true,
      "focusIndex": 0,
      "showCallout": true,
      "theme": "light",
      "copy": {
        "t001": "风险研判 / RISK REGISTER",
        "t002": "依据 · 报告 6.1 主要风险",
        "t003": "风险登记册",
        "t004": "严重度 × 可能性 · 五档量表 · 触发条件 → 主要影响",
        "t005": "风险类型",
        "t006": "严重度",
        "t007": "可能性",
        "t008": "触发条件",
        "t009": "主要影响",
        "t010": "↳ 登记册小结",
        "t011": "估值泡沫与算力卡脖子",
        "t012": "严重度最高、且高度可能—— 四类风险首尾相扣：高估值需要持续烧钱，烧钱依赖紧缺算力，一旦资本耐心耗尽，回调与洗牌随之而来。"
      },
      "rows": [
        {
          "name": "估值泡沫与盈利困境",
          "sev": 5,
          "like": 4,
          "trig": "P/S 超千倍 · 收入远不及估值",
          "impact": "估值回调 · 倒闭潮"
        },
        {
          "name": "算力供应链卡脖子",
          "sev": 5,
          "like": 4,
          "trig": "GPU 供应紧张 · 对华出口管制",
          "impact": "成本居高 · 中小出局"
        },
        {
          "name": "大厂挤压与开源冲击",
          "sev": 4,
          "like": 4,
          "trig": "巨头自研 · Llama / Mistral 逼近",
          "impact": "商业壁垒降低"
        },
        {
          "name": "监管压力加大",
          "sev": 3,
          "like": 4,
          "trig": "欧盟 AI Act · 各州隐私法案",
          "impact": "合规成本激增"
        }
      ],
      "forceDark": true
    }
  },
  {
    "key": "theme03_page056",
    "themeKey": "theme03",
    "pageNumber": 56,
    "layout": "THEME03-056",
    "slot": "shift",
    "label": "范式转变",
    "bgClass": "",
    "controls": [
      {
        "key": "forceDark",
        "label": "全局深色",
        "type": "toggle",
        "default": true,
        "desc": "复刻 Claude Design 右上角深浅配色切换。",
        "publicKey": "forceDark",
        "publicLabel": "全局深色",
        "description": "复刻 Claude Design 右上角深浅配色切换。"
      },
      {
        "key": "showEyebrow",
        "label": "装饰标签",
        "type": "toggle",
        "default": true,
        "publicKey": "showEyebrow",
        "publicLabel": "装饰标签"
      },
      {
        "key": "showCriteria",
        "label": "判断标准",
        "type": "toggle",
        "default": true,
        "publicKey": "showCriteria",
        "publicLabel": "判断标准"
      },
      {
        "key": "showBridge",
        "label": "转变中枢",
        "type": "toggle",
        "default": true,
        "publicKey": "showBridge",
        "publicLabel": "转变中枢"
      },
      {
        "key": "focusSide",
        "label": "重点突出",
        "type": "select",
        "default": "none",
        "options": [
          {
            "value": "none",
            "label": "无"
          },
          {
            "value": "left",
            "label": "叙事侧"
          },
          {
            "value": "right",
            "label": "兑现侧"
          }
        ],
        "publicKey": "focusSide",
        "publicLabel": "重点突出"
      },
      {
        "key": "showMeta",
        "label": "底部小结",
        "type": "toggle",
        "default": true,
        "publicKey": "showMeta",
        "publicLabel": "底部小结"
      },
      {
        "key": "theme",
        "label": "主题",
        "type": "select",
        "default": "light",
        "options": [
          {
            "value": "light",
            "label": "浅色"
          },
          {
            "value": "dark",
            "label": "深色"
          }
        ],
        "publicKey": "theme",
        "publicLabel": "主题"
      }
    ],
    "defaultProps": {
      "showEyebrow": true,
      "showCriteria": true,
      "showBridge": true,
      "focusSide": "none",
      "showMeta": true,
      "theme": "light",
      "copy": {
        "t001": "判断标准 ·",
        "t002": "看热度",
        "t003": "看兑现",
        "t004": "选题主线 / THESIS",
        "t005": "资本逻辑的范式转变",
        "t006": "从叙事驱动 → 兑现驱动",
        "t007": "资本不再只为故事买单 · 开始追问能否兑现",
        "t008": "融资额",
        "t009": "轮次",
        "t010": "头部集中度",
        "t011": "资本正在",
        "t012": "转向兑现",
        "t013": "收入确定性",
        "t014": "客户留存",
        "t015": "成本结构",
        "t016": "商业闭环",
        "t017": "↳ 内容重点",
        "t018": "前半部分用数据证明资本热度，后半部分用案例与风险证明兑现能力的分化——",
        "t019": "“融资总量很大”只是起点，“资本从叙事转向兑现”才是这一年的真正主线。"
      },
      "narrativeItems": [
        {
          "k": "融资额",
          "en": "CAPITAL",
          "v": "全年 970 亿美元 · 创历史新高"
        },
        {
          "k": "轮次结构",
          "en": "ROUNDS",
          "v": "D 轮及以后平均单笔 15.2 亿"
        },
        {
          "k": "头部集中度",
          "en": "CONCENTRATION",
          "v": "通用大模型独占 43.3%"
        }
      ],
      "deliveryItems": [
        {
          "k": "收入确定性",
          "en": "REVENUE",
          "v": "ARR 规模与增速可被验证"
        },
        {
          "k": "客户留存",
          "en": "RETENTION",
          "v": "续约率、付费留存、使用频次"
        },
        {
          "k": "成本结构",
          "en": "COST",
          "v": "毛利稳定性与算力成本"
        },
        {
          "k": "商业闭环",
          "en": "LOOP",
          "v": "是否嵌入刚性业务流程"
        }
      ],
      "forceDark": true
    }
  },
  {
    "key": "theme03_page057",
    "themeKey": "theme03",
    "pageNumber": 57,
    "layout": "THEME03-057",
    "slot": "hypecycle",
    "label": "成熟度曲线",
    "bgClass": "",
    "controls": [
      {
        "key": "forceDark",
        "label": "全局深色",
        "type": "toggle",
        "default": true,
        "desc": "复刻 Claude Design 右上角深浅配色切换。",
        "publicKey": "forceDark",
        "publicLabel": "全局深色",
        "description": "复刻 Claude Design 右上角深浅配色切换。"
      },
      {
        "key": "showEyebrow",
        "label": "装饰标签",
        "type": "toggle",
        "default": true,
        "publicKey": "showEyebrow",
        "publicLabel": "装饰标签"
      },
      {
        "key": "showPhases",
        "label": "阶段分区",
        "type": "toggle",
        "default": true,
        "publicKey": "showPhases",
        "publicLabel": "阶段分区"
      },
      {
        "key": "showReads",
        "label": "分类读解",
        "type": "toggle",
        "default": true,
        "publicKey": "showReads",
        "publicLabel": "分类读解"
      },
      {
        "key": "showValue",
        "label": "量级标注",
        "type": "toggle",
        "default": true,
        "publicKey": "showValue",
        "publicLabel": "量级标注"
      },
      {
        "key": "focusEnabled",
        "label": "重点突出",
        "type": "toggle",
        "default": true,
        "publicKey": "focusEnabled",
        "publicLabel": "重点突出"
      },
      {
        "key": "focusIndex",
        "label": "突出项",
        "type": "slider",
        "default": 1,
        "min": 0,
        "max": 4,
        "step": 1,
        "publicKey": "focusIndex",
        "publicLabel": "突出项"
      },
      {
        "key": "showCallout",
        "label": "底部小结",
        "type": "toggle",
        "default": true,
        "publicKey": "showCallout",
        "publicLabel": "底部小结"
      },
      {
        "key": "theme",
        "label": "主题",
        "type": "select",
        "default": "light",
        "options": [
          {
            "value": "light",
            "label": "浅色"
          },
          {
            "value": "dark",
            "label": "深色"
          }
        ],
        "publicKey": "theme",
        "publicLabel": "主题"
      }
    ],
    "defaultProps": {
      "showEyebrow": true,
      "showPhases": true,
      "showReads": true,
      "showValue": true,
      "focusEnabled": true,
      "focusIndex": 1,
      "showCallout": true,
      "theme": "light",
      "eyebrow": "选题主线 / HYPE CYCLE",
      "kicker": "AI 赛道 · 资本热度 × 技术成熟度",
      "title": "技术成熟度曲线",
      "titleNote": "谁在烒作顶点 · 谁已走向兑现",
      "axisLabel": "资本热度 / 预期 ▲",
      "calloutLabel": "↳ 周期解读",
      "calloutSegments": [
        {
          "t": "热钱集中在曲线左半的"
        },
        {
          "t": "「期望膨胀」顶点",
          "b": true
        },
        {
          "t": "，而现金流确定性沿右半的爨升段累积——投资的胜负手，是判断每条赛道"
        },
        {
          "t": "距离「兑现」还有多远",
          "a": true
        },
        {
          "t": "。"
        }
      ],
      "sectors": [
        {
          "name": "具身智能",
          "en": "EMBODIED",
          "t": 0.205,
          "amt": "前沿押注",
          "phase": "期望膨胀",
          "read": "热度顶点、估值领跑，落地仍待验证（6.2 前沿押注）"
        },
        {
          "name": "通用大模型",
          "en": "FOUNDATION",
          "t": 0.315,
          "amt": "420 亿 · 43.3%",
          "phase": "见顶回落",
          "read": "吸金最猛但 P/S 高悬，叙事开始接受兑现拷问（6.1）"
        },
        {
          "name": "AI 芯片",
          "en": "SILICON",
          "t": 0.52,
          "amt": "97 亿 · 10%",
          "phase": "触底爨升",
          "read": "上游确定性最强，算力刚需托底（卖铲逻辑）"
        },
        {
          "name": "算力基础设施",
          "en": "INFRA",
          "t": 0.635,
          "amt": "158 亿 · 16%",
          "phase": "稳步爨升",
          "read": "CoreWeave 等卖铲赢家率先兑现现金流（5.3）"
        },
        {
          "name": "垂直应用",
          "en": "VERTICAL",
          "t": 0.79,
          "amt": "245 亿 · 25%",
          "phase": "趋于成熟",
          "read": "已验证 PMF、嵌入业务流程的隐形价值区（3.4）"
        }
      ],
      "phases": [
        {
          "cn": "萌芽期",
          "en": "TRIGGER",
          "a": 0,
          "b": 0.12
        },
        {
          "cn": "期望膨胀期",
          "en": "PEAK",
          "a": 0.12,
          "b": 0.36
        },
        {
          "cn": "泡沫低谷期",
          "en": "TROUGH",
          "a": 0.36,
          "b": 0.5
        },
        {
          "cn": "稳步爨升期",
          "en": "SLOPE",
          "a": 0.5,
          "b": 0.72
        },
        {
          "cn": "生产成熟期",
          "en": "PLATEAU",
          "a": 0.72,
          "b": 1
        }
      ],
      "forceDark": true
    }
  },
  {
    "key": "theme03_page058",
    "themeKey": "theme03",
    "pageNumber": 58,
    "layout": "THEME03-058",
    "slot": "betmatrix",
    "label": "决策矩阵",
    "bgClass": "",
    "controls": [
      {
        "key": "forceDark",
        "label": "全局深色",
        "type": "toggle",
        "default": true,
        "desc": "复刻 Claude Design 右上角深浅配色切换。",
        "publicKey": "forceDark",
        "publicLabel": "全局深色",
        "description": "复刻 Claude Design 右上角深浅配色切换。"
      },
      {
        "key": "showEyebrow",
        "label": "装饰标签",
        "type": "toggle",
        "default": true,
        "publicKey": "showEyebrow",
        "publicLabel": "装饰标签"
      },
      {
        "key": "showAxis",
        "label": "坐标轴标注",
        "type": "toggle",
        "default": true,
        "publicKey": "showAxis",
        "publicLabel": "坐标轴标注"
      },
      {
        "key": "showZones",
        "label": "优选/规避区",
        "type": "toggle",
        "default": true,
        "publicKey": "showZones",
        "publicLabel": "优选/规避区"
      },
      {
        "key": "showAvoid",
        "label": "规避标的",
        "type": "toggle",
        "default": true,
        "publicKey": "showAvoid",
        "publicLabel": "规避标的"
      },
      {
        "key": "showCallout",
        "label": "策略小结",
        "type": "toggle",
        "default": true,
        "publicKey": "showCallout",
        "publicLabel": "策略小结"
      },
      {
        "key": "focusEnabled",
        "label": "重点突出",
        "type": "toggle",
        "default": false,
        "publicKey": "focusEnabled",
        "publicLabel": "重点突出"
      },
      {
        "key": "focusIndex",
        "label": "突出项",
        "type": "slider",
        "default": 0,
        "min": 0,
        "max": 10,
        "step": 1,
        "publicKey": "focusIndex",
        "publicLabel": "突出项"
      },
      {
        "key": "theme",
        "label": "主题",
        "type": "select",
        "default": "light",
        "options": [
          {
            "value": "light",
            "label": "浅色"
          },
          {
            "value": "dark",
            "label": "深色"
          }
        ],
        "publicKey": "theme",
        "publicLabel": "主题"
      }
    ],
    "defaultProps": {
      "showEyebrow": true,
      "showAxis": true,
      "showZones": true,
      "showAvoid": true,
      "showCallout": true,
      "focusEnabled": false,
      "focusIndex": 0,
      "theme": "light",
      "eyebrow": "投资建议 / BET MATRIX",
      "kicker": "兑现确定性 × 竞争壁垒",
      "title": "投资标的决策矩阵",
      "subtitle": "看好右上「优选区」· 规避左下「规避区」",
      "yAxisLabel": "竞争壁垒 / 护城河 — 低 → 高",
      "xAxisLabel": "商业兑现确定性 — 低 → 高",
      "zoneGoodLabel": "优选区 / PREFER ✓",
      "zoneAvoidLabel": "规避区 / AVOID ✕",
      "calloutLabel": "↳ 策略",
      "calloutBody": "看好兑现路径清晰、壁垒可守的标的——垂直应用（Glean、Harvey）、中游“卖铲子”（Scale AI、Pinecone、CoreWeave）与长周期具身智能（Figure AI）；规避高估值无收入的纯模型、“AI 包装”项目与缺乏数据护城河的消费应用。**判断重点不是融资规模，而是兑现与壁垒。**",
      "goodItems": [
        {
          "name": "CoreWeave",
          "note": "算力云 · NVIDIA 长约",
          "gx": 0.86,
          "gy": 0.7,
          "w": 1
        },
        {
          "name": "Databricks",
          "note": "数据平台",
          "gx": 0.78,
          "gy": 0.83,
          "w": 0.82
        },
        {
          "name": "Scale AI",
          "note": "数据标注",
          "gx": 0.68,
          "gy": 0.58,
          "w": 0.66
        },
        {
          "name": "Glean",
          "note": "企业搜索",
          "gx": 0.66,
          "gy": 0.67,
          "w": 0.58
        },
        {
          "name": "Harvey",
          "note": "法律 AI",
          "gx": 0.55,
          "gy": 0.69,
          "w": 0.52
        },
        {
          "name": "Pinecone",
          "note": "向量数据库",
          "gx": 0.58,
          "gy": 0.49,
          "w": 0.48
        },
        {
          "name": "Figure AI",
          "note": "人形机器人 · 具身智能",
          "gx": 0.37,
          "gy": 0.81,
          "w": 0.6
        },
        {
          "name": "Perplexity",
          "note": "AI 搜索",
          "gx": 0.5,
          "gy": 0.37,
          "w": 0.5
        }
      ],
      "avoidItems": [
        {
          "name": "高估值纯模型",
          "note": "烧钱快 · 壁垒被开源削弱",
          "gx": 0.22,
          "gy": 0.45,
          "w": 0.86
        },
        {
          "name": "“AI 包装”项目",
          "note": "仅套一层 LLM 调用",
          "gx": 0.36,
          "gy": 0.17,
          "w": 0.5
        },
        {
          "name": "无护城河消费应用",
          "note": "易被大厂复制",
          "gx": 0.48,
          "gy": 0.2,
          "w": 0.52
        }
      ],
      "forceDark": true
    }
  },
  {
    "key": "theme03_page059",
    "themeKey": "theme03",
    "pageNumber": 59,
    "layout": "THEME03-059",
    "slot": "share",
    "label": "资本大年",
    "bgClass": "",
    "controls": [
      {
        "key": "forceDark",
        "label": "全局深色",
        "type": "toggle",
        "default": true,
        "desc": "复刻 Claude Design 右上角深浅配色切换。",
        "publicKey": "forceDark",
        "publicLabel": "全局深色",
        "description": "复刻 Claude Design 右上角深浅配色切换。"
      },
      {
        "key": "showEyebrow",
        "label": "装饰标签",
        "type": "toggle",
        "default": true,
        "publicKey": "showEyebrow",
        "publicLabel": "装饰标签"
      },
      {
        "key": "showRing",
        "label": "占比圆环",
        "type": "toggle",
        "default": true,
        "publicKey": "showRing",
        "publicLabel": "占比圆环"
      },
      {
        "key": "showSupport",
        "label": "支撑微数据",
        "type": "toggle",
        "default": true,
        "publicKey": "showSupport",
        "publicLabel": "支撑微数据"
      },
      {
        "key": "statCount",
        "label": "微数据条数",
        "type": "slider",
        "default": 3,
        "min": 0,
        "max": 3,
        "step": 1,
        "publicKey": "statCount",
        "publicLabel": "微数据条数"
      },
      {
        "key": "showNote",
        "label": "口径注记",
        "type": "toggle",
        "default": true,
        "publicKey": "showNote",
        "publicLabel": "口径注记"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "select",
        "default": "blue",
        "options": [
          {
            "value": "blue",
            "label": "电光蓝"
          },
          {
            "value": "lime",
            "label": "荧光绿"
          }
        ],
        "publicKey": "accent",
        "publicLabel": "强调色"
      },
      {
        "key": "theme",
        "label": "主题",
        "type": "select",
        "default": "dark",
        "options": [
          {
            "value": "light",
            "label": "浅色"
          },
          {
            "value": "dark",
            "label": "深色"
          }
        ],
        "publicKey": "theme",
        "publicLabel": "主题"
      }
    ],
    "defaultProps": {
      "showEyebrow": true,
      "showRing": true,
      "showSupport": true,
      "statCount": 3,
      "showNote": true,
      "accent": "blue",
      "theme": "dark",
      "eyebrow": "资本大年 / CAPITAL YEAR",
      "kicker": "2024 · 美国 AI 风险投资",
      "ringSymbol": "⅓",
      "ringNote": "≈ 32% · 占全美风投",
      "figureValue": "970",
      "figureUnit": "亿美元",
      "leadSegments": [
        {
          "t": "2024 全年 AI 初创公司吸纳风险投资约 "
        },
        {
          "t": "970 亿美元",
          "b": true
        },
        {
          "t": "，占美国全部风险投资的"
        },
        {
          "t": "近三分之一",
          "b": true
        },
        {
          "t": "，是名副其实的“资本大年”。"
        }
      ],
      "noteLabel": "口径",
      "noteBody": "“近三分之一”为报告原文口径；970 亿为 2024 全年公开披露的 AI 风险投资合计。",
      "stats": [
        {
          "v": "历史新高",
          "k": "全年 AI 风投同比创纪录"
        },
        {
          "v": "97 笔",
          "k": "单笔 ≥ 1 亿美元的大额事件"
        },
        {
          "v": "≈ 10 亿",
          "k": "平均单笔融资额（美元）"
        }
      ],
      "forceDark": true
    }
  },
  {
    "key": "theme03_page060",
    "themeKey": "theme03",
    "pageNumber": 60,
    "layout": "THEME03-060",
    "slot": "waterfall",
    "label": "季度节奏",
    "bgClass": "",
    "controls": [
      {
        "key": "forceDark",
        "label": "全局深色",
        "type": "toggle",
        "default": true,
        "desc": "复刻 Claude Design 右上角深浅配色切换。",
        "publicKey": "forceDark",
        "publicLabel": "全局深色",
        "description": "复刻 Claude Design 右上角深浅配色切换。"
      },
      {
        "key": "showEyebrow",
        "label": "装饰标签",
        "type": "toggle",
        "default": true,
        "publicKey": "showEyebrow",
        "publicLabel": "装饰标签"
      },
      {
        "key": "showConnector",
        "label": "桥接连线",
        "type": "toggle",
        "default": true,
        "publicKey": "showConnector",
        "publicLabel": "桥接连线"
      },
      {
        "key": "showDelta",
        "label": "环比变化",
        "type": "toggle",
        "default": true,
        "publicKey": "showDelta",
        "publicLabel": "环比变化"
      },
      {
        "key": "showCount",
        "label": "事件笔数",
        "type": "toggle",
        "default": true,
        "publicKey": "showCount",
        "publicLabel": "事件笔数"
      },
      {
        "key": "showGrid",
        "label": "网格线",
        "type": "toggle",
        "default": true,
        "publicKey": "showGrid",
        "publicLabel": "网格线"
      },
      {
        "key": "focusEnabled",
        "label": "重点突出",
        "type": "toggle",
        "default": true,
        "publicKey": "focusEnabled",
        "publicLabel": "重点突出"
      },
      {
        "key": "focusIndex",
        "label": "突出项",
        "type": "slider",
        "default": 2,
        "min": 0,
        "max": 3,
        "step": 1,
        "publicKey": "focusIndex",
        "publicLabel": "突出项"
      },
      {
        "key": "showCallout",
        "label": "趋势解读",
        "type": "toggle",
        "default": true,
        "publicKey": "showCallout",
        "publicLabel": "趋势解读"
      },
      {
        "key": "theme",
        "label": "主题",
        "type": "select",
        "default": "light",
        "options": [
          {
            "value": "light",
            "label": "浅色"
          },
          {
            "value": "dark",
            "label": "深色"
          }
        ],
        "publicKey": "theme",
        "publicLabel": "主题"
      }
    ],
    "defaultProps": {
      "showEyebrow": true,
      "showConnector": true,
      "showDelta": true,
      "showCount": true,
      "showGrid": true,
      "focusEnabled": true,
      "focusIndex": 2,
      "showCallout": true,
      "theme": "light",
      "eyebrow": "市场全景 / MOMENTUM",
      "kicker": "2024 · 逐季度融资额 · 单位亿美元",
      "title": "季度融资节奏 · 桥接图",
      "titleNote": "前高后稳 · Q2–Q3 达峰后理性回落",
      "calloutLabel": "↳ 趋势解读",
      "calloutSegments": [
        {
          "t": "Q2 单季猛增 "
        },
        {
          "t": "+122",
          "c": "up"
        },
        {
          "t": "、Q3 再创 318 亿峰值，随后 Q4 理性回落 "
        },
        {
          "t": "−112",
          "c": "down"
        },
        {
          "t": "——全年合计 970 亿、97 笔，平均单笔约 10 亿美元，显示市场对头部标的高度追捧但已从狂热转向分化。"
        }
      ],
      "data": [
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
      "copy": {
        "t001": "笔"
      },
      "forceDark": true
    }
  },
  {
    "key": "theme03_page061",
    "themeKey": "theme03",
    "pageNumber": 61,
    "layout": "THEME03-061",
    "slot": "treemap",
    "label": "资金版图",
    "bgClass": "",
    "controls": [
      {
        "key": "forceDark",
        "label": "全局深色",
        "type": "toggle",
        "default": true,
        "desc": "复刻 Claude Design 右上角深浅配色切换。",
        "publicKey": "forceDark",
        "publicLabel": "全局深色",
        "description": "复刻 Claude Design 右上角深浅配色切换。"
      },
      {
        "key": "showEyebrow",
        "label": "装饰标签",
        "type": "toggle",
        "default": true,
        "publicKey": "showEyebrow",
        "publicLabel": "装饰标签"
      },
      {
        "key": "showShare",
        "label": "数值/占比",
        "type": "toggle",
        "default": true,
        "publicKey": "showValueLabels",
        "publicLabel": "数值/占比"
      },
      {
        "key": "showCompanies",
        "label": "代表公司",
        "type": "toggle",
        "default": true,
        "publicKey": "showCompanies",
        "publicLabel": "代表公司"
      },
      {
        "key": "showCallout",
        "label": "核心发现",
        "type": "toggle",
        "default": true,
        "publicKey": "showCallout",
        "publicLabel": "核心发现"
      },
      {
        "key": "focusEnabled",
        "label": "重点突出",
        "type": "toggle",
        "default": false,
        "publicKey": "focusEnabled",
        "publicLabel": "重点突出"
      },
      {
        "key": "focusIndex",
        "label": "突出项",
        "type": "slider",
        "default": 0,
        "min": 0,
        "max": 4,
        "step": 1,
        "publicKey": "focusIndex",
        "publicLabel": "突出项"
      },
      {
        "key": "theme",
        "label": "主题",
        "type": "select",
        "default": "light",
        "options": [
          {
            "value": "light",
            "label": "浅色"
          },
          {
            "value": "dark",
            "label": "深色"
          }
        ],
        "publicKey": "theme",
        "publicLabel": "主题"
      }
    ],
    "defaultProps": {
      "showEyebrow": true,
      "showShare": true,
      "showCompanies": true,
      "showCallout": true,
      "focusEnabled": false,
      "focusIndex": 0,
      "theme": "light",
      "eyebrow": "横向透视 / TREEMAP",
      "kicker": "2024 · 970 亿美元 · 赛道资金版图",
      "title": "赛道资金版图",
      "titleNote": "块面积 ∝ 融资额 · 一眼看清资本去向",
      "unit": "亿美元",
      "calloutLabel": "↳ 核心发现",
      "calloutBody": "通用大模型独占近半壁江山（420 亿 / 43.3%），反映投资人押注“AGI 叙事”；垂直应用紧随其后，显示市场已开始寻找商业化路径；基础设施与芯片合计超四分之一，产业链上游投资热度不减。",
      "sectors": [
        {
          "cn": "通用大模型",
          "en": "FOUNDATION MODEL",
          "amt": 420,
          "pct": "43.3%",
          "firms": "OpenAI · Anthropic · xAI · SSI"
        },
        {
          "cn": "垂直应用",
          "en": "VERTICAL AI",
          "amt": 245,
          "pct": "25.3%",
          "firms": "Glean · Perplexity · Harvey"
        },
        {
          "cn": "AI 基础设施",
          "en": "INFRASTRUCTURE",
          "amt": 158,
          "pct": "16.3%",
          "firms": "CoreWeave · Databricks · Scale AI"
        },
        {
          "cn": "AI 芯片",
          "en": "HARDWARE",
          "amt": 97,
          "pct": "10.0%",
          "firms": "GPU · 加速芯片"
        },
        {
          "cn": "其他",
          "en": "TOOLING / SAFETY",
          "amt": 50,
          "pct": "5.1%",
          "firms": "工具链 · 安全"
        }
      ],
      "forceDark": true
    }
  },
  {
    "key": "theme03_page062",
    "themeKey": "theme03",
    "pageNumber": 62,
    "layout": "THEME03-062",
    "slot": "escalation",
    "label": "单笔阶梯",
    "bgClass": "",
    "controls": [
      {
        "key": "forceDark",
        "label": "全局深色",
        "type": "toggle",
        "default": true,
        "desc": "复刻 Claude Design 右上角深浅配色切换。",
        "publicKey": "forceDark",
        "publicLabel": "全局深色",
        "description": "复刻 Claude Design 右上角深浅配色切换。"
      },
      {
        "key": "showEyebrow",
        "label": "装饰标签",
        "type": "toggle",
        "default": true,
        "publicKey": "showEyebrow",
        "publicLabel": "装饰标签"
      },
      {
        "key": "showStep",
        "label": "阶梯连线",
        "type": "toggle",
        "default": true,
        "publicKey": "showStep",
        "publicLabel": "阶梯连线"
      },
      {
        "key": "showMultiple",
        "label": "放大倍数",
        "type": "toggle",
        "default": true,
        "publicKey": "showMultiple",
        "publicLabel": "放大倍数"
      },
      {
        "key": "showCount",
        "label": "事件笔数",
        "type": "toggle",
        "default": true,
        "publicKey": "showCount",
        "publicLabel": "事件笔数"
      },
      {
        "key": "showGrid",
        "label": "网格线",
        "type": "toggle",
        "default": true,
        "publicKey": "showGrid",
        "publicLabel": "网格线"
      },
      {
        "key": "focusEnabled",
        "label": "重点突出",
        "type": "toggle",
        "default": true,
        "publicKey": "focusEnabled",
        "publicLabel": "重点突出"
      },
      {
        "key": "focusIndex",
        "label": "突出项",
        "type": "slider",
        "default": 4,
        "min": 0,
        "max": 4,
        "step": 1,
        "publicKey": "focusIndex",
        "publicLabel": "突出项"
      },
      {
        "key": "showCallout",
        "label": "结构解读",
        "type": "toggle",
        "default": true,
        "publicKey": "showCallout",
        "publicLabel": "结构解读"
      },
      {
        "key": "theme",
        "label": "主题",
        "type": "select",
        "default": "light",
        "options": [
          {
            "value": "light",
            "label": "浅色"
          },
          {
            "value": "dark",
            "label": "深色"
          }
        ],
        "publicKey": "theme",
        "publicLabel": "主题"
      }
    ],
    "defaultProps": {
      "showEyebrow": true,
      "showStep": true,
      "showMultiple": true,
      "showCount": true,
      "showGrid": true,
      "focusEnabled": true,
      "focusIndex": 4,
      "showCallout": true,
      "theme": "light",
      "eyebrow": "横向透视 / ESCALATION",
      "kicker": "2024 · 轮次平均单笔 · 单位亿美元",
      "title": "资金巨额化 · 单笔阶梯",
      "titleNotePre": "种子轮 → D 轮及以后 · 平均单笔放大约 ",
      "titleNoteStrong": "12×",
      "calloutLabel": "↳ 解读",
      "calloutPre": "单笔金额随轮次拾级而上——种子轮 1.2 亿，到 D 轮及以后跃升至 15.2 亿，放大约 ",
      "calloutStrong": "12.7×",
      "calloutPost": "。资金明显向后期、头部标的集中；早期虽笔数不少，但“巨额化”主要发生在成长后段。",
      "rounds": [
        {
          "label": "种子轮",
          "en": "SEED",
          "avg": 1.2,
          "cnt": 8
        },
        {
          "label": "A 轮",
          "en": "SERIES A",
          "avg": 1.8,
          "cnt": 12
        },
        {
          "label": "B 轮",
          "en": "SERIES B",
          "avg": 3.5,
          "cnt": 18
        },
        {
          "label": "C 轮",
          "en": "SERIES C",
          "avg": 6.8,
          "cnt": 15
        },
        {
          "label": "D 轮及以后",
          "en": "SERIES D+",
          "avg": 15.2,
          "cnt": 22
        }
      ],
      "copy": {
        "t001": "笔 ·"
      },
      "forceDark": true
    }
  },
  {
    "key": "theme03_page063",
    "themeKey": "theme03",
    "pageNumber": 63,
    "layout": "THEME03-063",
    "slot": "gallery",
    "label": "实验室影像",
    "bgClass": "",
    "controls": [
      {
        "key": "forceDark",
        "label": "全局深色",
        "type": "toggle",
        "default": true,
        "desc": "复刻 Claude Design 右上角深浅配色切换。",
        "publicKey": "forceDark",
        "publicLabel": "全局深色",
        "description": "复刻 Claude Design 右上角深浅配色切换。"
      },
      {
        "key": "showEyebrow",
        "label": "装饰标签",
        "type": "toggle",
        "default": true,
        "publicKey": "showEyebrow",
        "publicLabel": "装饰标签"
      },
      {
        "key": "imageCount",
        "label": "图片数量",
        "type": "slider",
        "default": 3,
        "min": 0,
        "max": 5,
        "step": 1,
        "publicKey": "imageCount",
        "publicLabel": "图片数量"
      },
      {
        "key": "layout",
        "label": "图片排布",
        "type": "select",
        "default": "row",
        "options": [
          {
            "value": "row",
            "label": "横排"
          },
          {
            "value": "column",
            "label": "竖排"
          }
        ],
        "publicKey": "layout",
        "publicLabel": "图片排布"
      },
      {
        "key": "labCount",
        "label": "实验室数量",
        "type": "slider",
        "default": 4,
        "min": 2,
        "max": 5,
        "step": 1,
        "publicKey": "labCount",
        "publicLabel": "实验室数量"
      },
      {
        "key": "showValuation",
        "label": "指标标记",
        "type": "toggle",
        "default": true,
        "publicKey": "showMetricMarker",
        "publicLabel": "指标标记"
      },
      {
        "key": "focusEnabled",
        "label": "重点突出",
        "type": "toggle",
        "default": true,
        "publicKey": "focusEnabled",
        "publicLabel": "重点突出"
      },
      {
        "key": "focusIndex",
        "label": "突出项",
        "type": "slider",
        "default": 0,
        "min": 0,
        "max": 4,
        "step": 1,
        "publicKey": "focusIndex",
        "publicLabel": "突出项"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "select",
        "default": "blue",
        "options": [
          {
            "value": "blue",
            "label": "电光蓝"
          },
          {
            "value": "lime",
            "label": "荧光绿"
          }
        ],
        "publicKey": "accent",
        "publicLabel": "强调色"
      }
    ],
    "defaultProps": {
      "showEyebrow": true,
      "imageCount": 3,
      "layout": "row",
      "labCount": 4,
      "showValuation": true,
      "focusEnabled": true,
      "focusIndex": 0,
      "accent": "blue",
      "copy": {
        "t001": "中游 · 模型层 / LABS",
        "t002": "2024 · 头部实验室影像志",
        "t003": "押注 AGI 的",
        "t004": "四张面孔",
        "t005": "资本最密集、竞争最激烈、兑现最待验证的一层",
        "t006": "实验室影像 / DROP IMAGE",
        "t007": "实验室影像 / DROP IMAGE",
        "t008": "纯文字版式 · 无配图",
        "t009": "0"
      },
      "labs": [
        {
          "name": "Anthropic",
          "tag": "通用大模型",
          "note": "估值 9650 亿 · 全球最高"
        },
        {
          "name": "OpenAI",
          "tag": "通用大模型",
          "note": "估值次席 · AGI 先行者"
        },
        {
          "name": "xAI",
          "tag": "通用大模型",
          "note": "估值 500 亿 · 18 个月跻身"
        },
        {
          "name": "SSI",
          "tag": "安全超级智能",
          "note": "专用路线 · 安全对齐"
        },
        {
          "name": "Mistral",
          "tag": "开源模型",
          "note": "欧洲 · 开源专用"
        }
      ],
      "forceDark": true
    }
  },
  {
    "key": "theme03_page064",
    "themeKey": "theme03",
    "pageNumber": 64,
    "layout": "THEME03-064",
    "slot": "sankey",
    "label": "资本流向",
    "bgClass": "",
    "controls": [
      {
        "key": "forceDark",
        "label": "全局深色",
        "type": "toggle",
        "default": true,
        "desc": "复刻 Claude Design 右上角深浅配色切换。",
        "publicKey": "forceDark",
        "publicLabel": "全局深色",
        "description": "复刻 Claude Design 右上角深浅配色切换。"
      },
      {
        "key": "showEyebrow",
        "label": "装饰标签",
        "type": "toggle",
        "default": true,
        "publicKey": "showEyebrow",
        "publicLabel": "装饰标签"
      },
      {
        "key": "showLayers",
        "label": "产业链分层",
        "type": "toggle",
        "default": true,
        "publicKey": "showLayers",
        "publicLabel": "产业链分层"
      },
      {
        "key": "showValues",
        "label": "数值标注",
        "type": "toggle",
        "default": true,
        "publicKey": "showValueLabels",
        "publicLabel": "数值标注"
      },
      {
        "key": "focusEnabled",
        "label": "重点突出",
        "type": "toggle",
        "default": true,
        "publicKey": "focusEnabled",
        "publicLabel": "重点突出"
      },
      {
        "key": "focusIndex",
        "label": "突出项",
        "type": "slider",
        "default": 0,
        "min": 0,
        "max": 4,
        "step": 1,
        "publicKey": "focusIndex",
        "publicLabel": "突出项"
      },
      {
        "key": "showCallout",
        "label": "趋势解读",
        "type": "toggle",
        "default": true,
        "publicKey": "showCallout",
        "publicLabel": "趋势解读"
      },
      {
        "key": "theme",
        "label": "主题",
        "type": "select",
        "default": "light",
        "options": [
          {
            "value": "light",
            "label": "浅色"
          },
          {
            "value": "dark",
            "label": "深色"
          }
        ],
        "publicKey": "theme",
        "publicLabel": "主题"
      }
    ],
    "defaultProps": {
      "showEyebrow": true,
      "showLayers": true,
      "showValues": true,
      "focusEnabled": true,
      "focusIndex": 0,
      "showCallout": true,
      "theme": "light",
      "eyebrow": "横向透视 / FLOW OF CAPITAL",
      "kicker": "2024 · 全年 970 亿美元 · 97 笔",
      "title": "资本流向 · 桑基图",
      "titleNote": "从总盘 → 五大赛道 → 产业链上 / 中 / 下游",
      "captionTotal": "全年总额",
      "captionSector": "业务赛道",
      "captionLayer": "产业链层级",
      "totalValue": "970",
      "totalUnit": "亿美元 · 100%",
      "calloutLabel": "↳ 流向解读",
      "calloutSegments": [
        {
          "t": "资金主流汇入"
        },
        {
          "t": "中游模型层",
          "b": true
        },
        {
          "t": "（420 亿，43.3%）；上游基础设施 + 芯片合计 "
        },
        {
          "t": "255 亿",
          "b": true
        },
        {
          "t": "（26.3%），\"卖铲子\"环节热度不减；下游应用层 295 亿承接落地需求——产业链三层均被重金押注，但确定性自上而下递减。"
        }
      ],
      "total": 970,
      "layers": [
        {
          "id": "up",
          "name": "上游 · 基础设施"
        },
        {
          "id": "mid",
          "name": "中游 · 模型层"
        },
        {
          "id": "down",
          "name": "下游 · 应用层"
        }
      ],
      "sectors": [
        {
          "name": "通用大模型",
          "amt": 420,
          "pct": "43.3%",
          "layer": "mid"
        },
        {
          "name": "垂直应用",
          "amt": 245,
          "pct": "25.3%",
          "layer": "down"
        },
        {
          "name": "AI 基础设施",
          "amt": 158,
          "pct": "16.3%",
          "layer": "up"
        },
        {
          "name": "AI 芯片",
          "amt": 97,
          "pct": "10.0%",
          "layer": "up"
        },
        {
          "name": "其他工具链",
          "amt": 50,
          "pct": "5.1%",
          "layer": "down"
        }
      ],
      "copy": {
        "t001": "亿 ·",
        "t002": "亿 ·"
      },
      "forceDark": true
    }
  },
  {
    "key": "theme03_page065",
    "themeKey": "theme03",
    "pageNumber": 65,
    "layout": "THEME03-065",
    "slot": "scorecard",
    "label": "投资记分卡",
    "bgClass": "",
    "controls": [
      {
        "key": "forceDark",
        "label": "全局深色",
        "type": "toggle",
        "default": true,
        "desc": "复刻 Claude Design 右上角深浅配色切换。",
        "publicKey": "forceDark",
        "publicLabel": "全局深色",
        "description": "复刻 Claude Design 右上角深浅配色切换。"
      },
      {
        "key": "showEyebrow",
        "label": "装饰标签",
        "type": "toggle",
        "default": true,
        "publicKey": "showEyebrow",
        "publicLabel": "装饰标签"
      },
      {
        "key": "itemCount",
        "label": "公司数量",
        "type": "slider",
        "default": 8,
        "min": 4,
        "max": 8,
        "step": 1,
        "publicKey": "itemCount",
        "publicLabel": "公司数量"
      },
      {
        "key": "showQuadrant",
        "label": "象限定位",
        "type": "toggle",
        "default": true,
        "publicKey": "showQuadrant",
        "publicLabel": "象限定位"
      },
      {
        "key": "showBarrier",
        "label": "竞争壁垒",
        "type": "toggle",
        "default": true,
        "publicKey": "showBarrier",
        "publicLabel": "竞争壁垒"
      },
      {
        "key": "focusEnabled",
        "label": "重点突出",
        "type": "toggle",
        "default": true,
        "publicKey": "focusEnabled",
        "publicLabel": "重点突出"
      },
      {
        "key": "focusIndex",
        "label": "突出项",
        "type": "slider",
        "default": 0,
        "min": 0,
        "max": 7,
        "step": 1,
        "publicKey": "focusIndex",
        "publicLabel": "突出项"
      },
      {
        "key": "showCallout",
        "label": "结论解读",
        "type": "toggle",
        "default": true,
        "publicKey": "showCallout",
        "publicLabel": "结论解读"
      },
      {
        "key": "theme",
        "label": "主题",
        "type": "select",
        "default": "light",
        "options": [
          {
            "value": "light",
            "label": "浅色"
          },
          {
            "value": "dark",
            "label": "深色"
          }
        ],
        "publicKey": "theme",
        "publicLabel": "主题"
      }
    ],
    "defaultProps": {
      "showEyebrow": true,
      "itemCount": 8,
      "showQuadrant": true,
      "showBarrier": true,
      "focusEnabled": true,
      "focusIndex": 0,
      "showCallout": true,
      "theme": "light",
      "copy": {
        "t001": "投资研判 / SCORECARD",
        "t002": "评分依据 · 报告 3.4 选题四象限",
        "t003": "头部标的 · 投资记分卡",
        "t004": "资本热度 × 商业兑现 × 竞争壁垒 · 五档量表",
        "t005": "公司",
        "t006": "赛道 / 产业链层",
        "t007": "资本热度",
        "t008": "商业兑现",
        "t009": "竞争壁垒",
        "t010": "四象限定位",
        "t011": "↳ 记分卡小结",
        "t012": "热度 ≠ 兑现",
        "t013": "：模型层四巨头资本热度满格，但商业兑现仍待验证； 真正\"热度 × 兑现\"双高的，是 CoreWeave、Databricks 等上游基础设施\"卖铲\"标的——记分卡越往兑现列看，确定性越分化。"
      },
      "rows": [
        {
          "name": "CoreWeave",
          "seg": "上游 · 算力云",
          "heat": 5,
          "deliver": 5,
          "moat": 4,
          "q": "star"
        },
        {
          "name": "Databricks",
          "seg": "下游 · 数据平台",
          "heat": 5,
          "deliver": 5,
          "moat": 4,
          "q": "star"
        },
        {
          "name": "Scale AI",
          "seg": "上游 · 数据标注",
          "heat": 4,
          "deliver": 4,
          "moat": 4,
          "q": "star"
        },
        {
          "name": "Anthropic",
          "seg": "中游 · 通用大模型",
          "heat": 5,
          "deliver": 2,
          "moat": 4,
          "q": "bubble"
        },
        {
          "name": "OpenAI",
          "seg": "中游 · 通用大模型",
          "heat": 5,
          "deliver": 2,
          "moat": 4,
          "q": "bubble"
        },
        {
          "name": "xAI",
          "seg": "中游 · 通用大模型",
          "heat": 4,
          "deliver": 2,
          "moat": 3,
          "q": "bubble"
        },
        {
          "name": "Glean",
          "seg": "下游 · 企业搜索",
          "heat": 3,
          "deliver": 4,
          "moat": 3,
          "q": "hidden"
        },
        {
          "name": "Perplexity AI",
          "seg": "下游 · 消费搜索",
          "heat": 3,
          "deliver": 4,
          "moat": 2,
          "q": "hidden"
        }
      ],
      "quad": {
        "star": {
          "label": "明星兑现区",
          "c": "#5f8f0c"
        },
        "bubble": {
          "label": "叙事泡沫区",
          "c": "#2742ec"
        },
        "hidden": {
          "label": "隐形价值区",
          "c": "#5c5b57"
        }
      },
      "forceDark": true
    }
  },
  {
    "key": "theme03_page066",
    "themeKey": "theme03",
    "pageNumber": 66,
    "layout": "THEME03-066",
    "slot": "gauge",
    "label": "泡沫温度计",
    "bgClass": "",
    "controls": [
      {
        "key": "forceDark",
        "label": "全局深色",
        "type": "toggle",
        "default": true,
        "desc": "复刻 Claude Design 右上角深浅配色切换。",
        "publicKey": "forceDark",
        "publicLabel": "全局深色",
        "description": "复刻 Claude Design 右上角深浅配色切换。"
      },
      {
        "key": "showEyebrow",
        "label": "装饰标签",
        "type": "toggle",
        "default": true,
        "publicKey": "showEyebrow",
        "publicLabel": "装饰标签"
      },
      {
        "key": "showZones",
        "label": "区间色带",
        "type": "toggle",
        "default": true,
        "publicKey": "showZones",
        "publicLabel": "区间色带"
      },
      {
        "key": "showTicks",
        "label": "刻度标注",
        "type": "toggle",
        "default": true,
        "publicKey": "showTicks",
        "publicLabel": "刻度标注"
      },
      {
        "key": "showSupport",
        "label": "佐证数据",
        "type": "toggle",
        "default": true,
        "publicKey": "showSupport",
        "publicLabel": "佐证数据"
      },
      {
        "key": "showCallout",
        "label": "状态解读",
        "type": "toggle",
        "default": true,
        "publicKey": "showCallout",
        "publicLabel": "状态解读"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "select",
        "default": "blue",
        "options": [
          {
            "value": "blue",
            "label": "电光蓝"
          },
          {
            "value": "lime",
            "label": "荧光绿"
          }
        ],
        "publicKey": "accent",
        "publicLabel": "强调色"
      },
      {
        "key": "theme",
        "label": "主题",
        "type": "select",
        "default": "dark",
        "options": [
          {
            "value": "light",
            "label": "浅色"
          },
          {
            "value": "dark",
            "label": "深色"
          }
        ],
        "publicKey": "theme",
        "publicLabel": "主题"
      }
    ],
    "defaultProps": {
      "showEyebrow": true,
      "showZones": true,
      "showTicks": true,
      "showSupport": true,
      "showCallout": true,
      "accent": "blue",
      "theme": "dark",
      "eyebrow": "风险研判 / VALUATION HEAT",
      "kicker": "报告 6.1 · 估值泡沫与盈利困境",
      "title": "估值泡沫温度计",
      "titleNote": "市销率 P/S · 头部标的已驶入「泡沫」区",
      "scaleLo": 5,
      "scaleHi": 1500,
      "value": 1200,
      "centerLabel": "当前头部 P/S 量级",
      "calloutLabel": "↳ 风险解读",
      "calloutPre": "多数头部估值建立在「未来市值」而非当前收入之上——Anthropic 9650 亿估值对应预计收入仅约 8 亿，",
      "calloutStrong": " P/S 超千倍",
      "calloutPost": "。一旦宏观收紧或 IPO 破发，估值回调难以避免。",
      "zones": [
        {
          "v0": 5,
          "v1": 25,
          "label": "理性"
        },
        {
          "v0": 25,
          "v1": 100,
          "label": "偏热"
        },
        {
          "v0": 100,
          "v1": 500,
          "label": "过热"
        },
        {
          "v0": 500,
          "v1": 1500,
          "label": "泡沫"
        }
      ],
      "support": [
        {
          "num": "9650",
          "unit": "亿美元",
          "note": "Anthropic 最新估值"
        },
        {
          "num": "≈8",
          "unit": "亿美元",
          "note": "2024 预计年收入"
        },
        {
          "num": ">1000",
          "unit": "倍",
          "note": "P/S 市销率"
        }
      ],
      "forceDark": true
    }
  },
  {
    "key": "theme03_page067",
    "themeKey": "theme03",
    "pageNumber": 67,
    "layout": "THEME03-067",
    "slot": "embodied",
    "label": "具身智能",
    "bgClass": "",
    "controls": [
      {
        "key": "forceDark",
        "label": "全局深色",
        "type": "toggle",
        "default": true,
        "desc": "复刻 Claude Design 右上角深浅配色切换。",
        "publicKey": "forceDark",
        "publicLabel": "全局深色",
        "description": "复刻 Claude Design 右上角深浅配色切换。"
      },
      {
        "key": "showEyebrow",
        "label": "装饰标签",
        "type": "toggle",
        "default": true,
        "publicKey": "showEyebrow",
        "publicLabel": "装饰标签"
      },
      {
        "key": "imageCount",
        "label": "图片数量",
        "type": "slider",
        "default": 2,
        "min": 0,
        "max": 4,
        "step": 1,
        "publicKey": "imageCount",
        "publicLabel": "图片数量"
      },
      {
        "key": "layout",
        "label": "图片排布",
        "type": "select",
        "default": "row",
        "options": [
          {
            "value": "row",
            "label": "横排"
          },
          {
            "value": "column",
            "label": "竖排"
          }
        ],
        "publicKey": "layout",
        "publicLabel": "图片排布"
      },
      {
        "key": "showFigure",
        "label": "核心数字",
        "type": "toggle",
        "default": true,
        "publicKey": "showFigure",
        "publicLabel": "核心数字"
      },
      {
        "key": "chipCount",
        "label": "理由标签",
        "type": "slider",
        "default": 3,
        "min": 0,
        "max": 3,
        "step": 1,
        "publicKey": "chipCount",
        "publicLabel": "理由标签"
      },
      {
        "key": "showCallout",
        "label": "装饰解读",
        "type": "toggle",
        "default": true,
        "publicKey": "showCallout",
        "publicLabel": "装饰解读"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "select",
        "default": "lime",
        "options": [
          {
            "value": "blue",
            "label": "电光蓝"
          },
          {
            "value": "lime",
            "label": "荧光绿"
          }
        ],
        "publicKey": "accent",
        "publicLabel": "强调色"
      }
    ],
    "defaultProps": {
      "showEyebrow": true,
      "imageCount": 2,
      "layout": "row",
      "showFigure": true,
      "chipCount": 3,
      "showCallout": true,
      "accent": "lime",
      "copy": {
        "t001": "下游应用层 / FRONTIER",
        "t002": "看好方向 · 具身智能 / EMBODIED AI",
        "t003": "SECTOR · 具身智能",
        "t004": "把模型",
        "t005": "装进身体",
        "t006": "的下一站",
        "t007": "人形机器人与自动驾驶把通用智能从屏幕推向物理世界。Figure AI 作为该赛道代表， 坐落产业链下游应用层——单笔融资即达 6.8 亿美元，是「需要长周期技术积累的硬科技」典型。",
        "t008": "6.8",
        "t009": "亿美元",
        "t010": "Figure AI · 最大单笔",
        "t011": "↳ 看好逻辑",
        "t012": "技术壁垒高、复制周期长，一旦落地便形成数据 + 硬件双护城河—— 适合作为「长周期、高确定性」的耐心资本配置，而非短线叙事博弈。",
        "t013": "具身智能配图 / DROP IMAGE",
        "t014": "具身智能配图 / DROP IMAGE",
        "t015": "纯文字版式 · 无配图",
        "t016": "↗ 人形机器人 · 物理世界落地"
      },
      "chips": [
        "人形机器人 · 具身硬件",
        "长周期硬科技壁垒",
        "与自动驾驶协同感知"
      ],
      "forceDark": true
    }
  },
  {
    "key": "theme03_page068",
    "themeKey": "theme03",
    "pageNumber": 68,
    "layout": "THEME03-068",
    "slot": "rose",
    "label": "月度玫瑰",
    "bgClass": "",
    "controls": [
      {
        "key": "forceDark",
        "label": "全局深色",
        "type": "toggle",
        "default": true,
        "desc": "复刻 Claude Design 右上角深浅配色切换。",
        "publicKey": "forceDark",
        "publicLabel": "全局深色",
        "description": "复刻 Claude Design 右上角深浅配色切换。"
      },
      {
        "key": "showEyebrow",
        "label": "装饰标签",
        "type": "toggle",
        "default": true,
        "publicKey": "showEyebrow",
        "publicLabel": "装饰标签"
      },
      {
        "key": "showRings",
        "label": "刻度环",
        "type": "toggle",
        "default": true,
        "publicKey": "showRings",
        "publicLabel": "刻度环"
      },
      {
        "key": "showValue",
        "label": "花瓣数值",
        "type": "toggle",
        "default": true,
        "publicKey": "showValueLabels",
        "publicLabel": "花瓣数值"
      },
      {
        "key": "showLegend",
        "label": "时间面板",
        "type": "toggle",
        "default": true,
        "publicKey": "showLegend",
        "publicLabel": "时间面板"
      },
      {
        "key": "focusEnabled",
        "label": "重点突出",
        "type": "toggle",
        "default": true,
        "publicKey": "focusEnabled",
        "publicLabel": "重点突出"
      },
      {
        "key": "focusIndex",
        "label": "突出项",
        "type": "slider",
        "default": 7,
        "min": 0,
        "max": 11,
        "step": 1,
        "publicKey": "focusIndex",
        "publicLabel": "突出项"
      },
      {
        "key": "showCallout",
        "label": "趋势解读",
        "type": "toggle",
        "default": true,
        "publicKey": "showCallout",
        "publicLabel": "趋势解读"
      },
      {
        "key": "theme",
        "label": "主题",
        "type": "select",
        "default": "light",
        "options": [
          {
            "value": "light",
            "label": "浅色"
          },
          {
            "value": "dark",
            "label": "深色"
          }
        ],
        "publicKey": "theme",
        "publicLabel": "主题"
      }
    ],
    "defaultProps": {
      "showEyebrow": true,
      "showRings": true,
      "showValue": true,
      "showLegend": true,
      "focusEnabled": true,
      "focusIndex": 7,
      "showCallout": true,
      "theme": "light",
      "eyebrow": "市场全景 / SEASONALITY",
      "kicker": "2024 · 逐月融资额 · 单位亿美元",
      "title": "逐月融资 · 玫瑰图",
      "titleNote": "花瓣半径 ∝ 当月融资额 · 5 月 / 8 月双峰",
      "legendTitle": "季度汇总 · 亿美元",
      "peakPre": "峰值：",
      "peakStrong": "8 月 118",
      "peakPost": " · 5 月 105，与头部公司集中关账有关。",
      "calloutLabel": "↳ 节奏解读",
      "calloutPre": "全年呈双峰节律——",
      "calloutStrong": "5 月、8 月",
      "calloutPost": "两次冲高对应多家头部公司集中关账；Q2–Q3 维持高位后于年末回落，印证「前高后稳」的整体走势。",
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
      "quarters": [
        {
          "name": "Q1",
          "total": 162
        },
        {
          "name": "Q2",
          "total": 284
        },
        {
          "name": "Q3",
          "total": 318
        },
        {
          "name": "Q4",
          "total": 206
        }
      ],
      "copy": {
        "t001": "月"
      },
      "forceDark": true
    }
  },
  {
    "key": "theme03_page069",
    "themeKey": "theme03",
    "pageNumber": 69,
    "layout": "THEME03-069",
    "slot": "marimekko",
    "label": "资金矩阵",
    "bgClass": "",
    "controls": [
      {
        "key": "forceDark",
        "label": "全局深色",
        "type": "toggle",
        "default": true,
        "desc": "复刻 Claude Design 右上角深浅配色切换。",
        "publicKey": "forceDark",
        "publicLabel": "全局深色",
        "description": "复刻 Claude Design 右上角深浅配色切换。"
      },
      {
        "key": "showEyebrow",
        "label": "装饰标签",
        "type": "toggle",
        "default": true,
        "publicKey": "showEyebrow",
        "publicLabel": "装饰标签"
      },
      {
        "key": "showValues",
        "label": "数值标注",
        "type": "toggle",
        "default": true,
        "publicKey": "showValueLabels",
        "publicLabel": "数值标注"
      },
      {
        "key": "showPercent",
        "label": "占比标注",
        "type": "toggle",
        "default": true,
        "publicKey": "showPercent",
        "publicLabel": "占比标注"
      },
      {
        "key": "focusEnabled",
        "label": "重点突出",
        "type": "toggle",
        "default": true,
        "publicKey": "focusEnabled",
        "publicLabel": "重点突出"
      },
      {
        "key": "focusIndex",
        "label": "突出项",
        "type": "slider",
        "default": 0,
        "min": 0,
        "max": 4,
        "step": 1,
        "publicKey": "focusIndex",
        "publicLabel": "突出项"
      },
      {
        "key": "showCallout",
        "label": "结构解读",
        "type": "toggle",
        "default": true,
        "publicKey": "showCallout",
        "publicLabel": "结构解读"
      },
      {
        "key": "theme",
        "label": "主题",
        "type": "select",
        "default": "light",
        "options": [
          {
            "value": "light",
            "label": "浅色"
          },
          {
            "value": "dark",
            "label": "深色"
          }
        ],
        "publicKey": "theme",
        "publicLabel": "主题"
      }
    ],
    "defaultProps": {
      "showEyebrow": true,
      "showValues": true,
      "showPercent": true,
      "focusEnabled": true,
      "focusIndex": 0,
      "showCallout": true,
      "theme": "light",
      "eyebrow": "横向透视 / STRUCTURE",
      "kicker": "2024 · 全年 970 亿美元 · 块面积 ∝ 金额",
      "title": "产业链资金结构矩阵",
      "titleNote": "列宽 ∝ 层级总额 · 段高 ∝ 层内赛道占比",
      "calloutLabel": "↳ 结构解读",
      "calloutPre": "中游模型层以单一赛道",
      "calloutStrong": "通用大模型",
      "calloutPost": "独占 43.3%、列宽最大；上游靠基础设施 + 芯片两段堆出 26.3%；下游由垂直应用主导、其他工具链补足——一图看清「钱去了哪层、又压在哪个赛道」。",
      "total": 970,
      "layers": [
        {
          "name": "上游 · 基础设施",
          "total": 255,
          "members": [
            {
              "fi": 2,
              "name": "AI 基础设施",
              "amt": 158
            },
            {
              "fi": 3,
              "name": "AI 芯片",
              "amt": 97
            }
          ]
        },
        {
          "name": "中游 · 模型层",
          "total": 420,
          "members": [
            {
              "fi": 0,
              "name": "通用大模型",
              "amt": 420
            }
          ]
        },
        {
          "name": "下游 · 应用层",
          "total": 295,
          "members": [
            {
              "fi": 1,
              "name": "垂直应用",
              "amt": 245
            },
            {
              "fi": 4,
              "name": "其他工具链",
              "amt": 50
            }
          ]
        }
      ],
      "copy": {
        "t001": "亿 ·"
      },
      "forceDark": true
    }
  },
  {
    "key": "theme03_page070",
    "themeKey": "theme03",
    "pageNumber": 70,
    "layout": "THEME03-070",
    "slot": "concentration",
    "label": "三重集中",
    "bgClass": "",
    "controls": [
      {
        "key": "forceDark",
        "label": "全局深色",
        "type": "toggle",
        "default": true,
        "desc": "复刻 Claude Design 右上角深浅配色切换。",
        "publicKey": "forceDark",
        "publicLabel": "全局深色",
        "description": "复刻 Claude Design 右上角深浅配色切换。"
      },
      {
        "key": "showEyebrow",
        "label": "装饰标签",
        "type": "toggle",
        "default": true,
        "publicKey": "showEyebrow",
        "publicLabel": "装饰标签"
      },
      {
        "key": "ringCount",
        "label": "圆环数量",
        "type": "slider",
        "default": 3,
        "min": 2,
        "max": 3,
        "step": 1,
        "publicKey": "ringCount",
        "publicLabel": "圆环数量"
      },
      {
        "key": "showArc",
        "label": "环形进度",
        "type": "toggle",
        "default": true,
        "publicKey": "showArc",
        "publicLabel": "环形进度"
      },
      {
        "key": "focusEnabled",
        "label": "重点突出",
        "type": "toggle",
        "default": true,
        "publicKey": "focusEnabled",
        "publicLabel": "重点突出"
      },
      {
        "key": "focusIndex",
        "label": "突出项",
        "type": "slider",
        "default": 2,
        "min": 0,
        "max": 2,
        "step": 1,
        "publicKey": "focusIndex",
        "publicLabel": "突出项"
      },
      {
        "key": "showCallout",
        "label": "结论解读",
        "type": "toggle",
        "default": true,
        "publicKey": "showCallout",
        "publicLabel": "结论解读"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "select",
        "default": "blue",
        "options": [
          {
            "value": "blue",
            "label": "电光蓝"
          },
          {
            "value": "lime",
            "label": "荧光绿"
          }
        ],
        "publicKey": "accent",
        "publicLabel": "强调色"
      },
      {
        "key": "theme",
        "label": "主题",
        "type": "select",
        "default": "dark",
        "options": [
          {
            "value": "light",
            "label": "浅色"
          },
          {
            "value": "dark",
            "label": "深色"
          }
        ],
        "publicKey": "theme",
        "publicLabel": "主题"
      }
    ],
    "defaultProps": {
      "showEyebrow": true,
      "ringCount": 3,
      "showArc": true,
      "focusEnabled": true,
      "focusIndex": 2,
      "showCallout": true,
      "accent": "blue",
      "theme": "dark",
      "eyebrow": "结论 · 横向看集中 / WINNER-TAKE-ALL",
      "kicker": "2024 · 资本高度集聚",
      "titlePre": "资本大年的",
      "titleAccent": "三重集中",
      "titleNote": "资金向赛道、地区、头部三向收敛",
      "shareLabel": "占比 / SHARE",
      "calloutLabel": "↳ 结论一",
      "calloutPre": "资金高度向",
      "calloutStrong": "头部公司、通用大模型赛道、旧金山湾区",
      "calloutPost": "集中，「赢家通吃」格局确立——人才、资本、算力的虹吸效应短期内难以撆动。",
      "dims": [
        {
          "pct": 33,
          "label": "AI 占全美风投",
          "sub": "近三分之一 · 资本大年"
        },
        {
          "pct": 43.3,
          "label": "通用大模型",
          "sub": "占 AI 大额融资 · 赛道集中"
        },
        {
          "pct": 63.9,
          "label": "旧金山湾区",
          "sub": "占 AI 大额融资 · 地理集中"
        }
      ],
      "forceDark": true
    }
  },
  {
    "key": "theme03_page071",
    "themeKey": "theme03",
    "pageNumber": 71,
    "layout": "THEME03-071",
    "slot": "statement",
    "label": "资本主张",
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
        "key": "forceDark",
        "label": "全局深色",
        "type": "toggle",
        "default": true,
        "desc": "复刻 Claude Design 右上角深浅配色切换。",
        "publicKey": "forceDark",
        "publicLabel": "全局深色",
        "description": "复刻 Claude Design 右上角深浅配色切换。"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "select",
        "default": "blue",
        "options": [
          {
            "value": "blue",
            "label": "电光蓝"
          },
          {
            "value": "lime",
            "label": "荧光绿"
          }
        ],
        "desc": "theme03 全局强调色，作用于该主题所有页面。",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "theme03 全局强调色，作用于该主题所有页面。"
      },
      {
        "key": "showEyebrow",
        "label": "装饰标签",
        "type": "toggle",
        "default": true,
        "publicKey": "showEyebrow",
        "publicLabel": "装饰标签"
      },
      {
        "key": "imageCount",
        "label": "图片数量",
        "type": "slider",
        "default": 1,
        "min": 0,
        "max": 1,
        "step": 1,
        "publicKey": "imageCount",
        "publicLabel": "图片数量"
      },
      {
        "key": "showFigure",
        "label": "核心数字",
        "type": "toggle",
        "default": true,
        "publicKey": "showFigure",
        "publicLabel": "核心数字"
      },
      {
        "key": "showMeta",
        "label": "支撑数据",
        "type": "toggle",
        "default": true,
        "publicKey": "showMeta",
        "publicLabel": "支撑数据"
      },
      {
        "key": "align",
        "label": "文案对齐",
        "type": "select",
        "default": "left",
        "options": [
          {
            "value": "left",
            "label": "左下"
          },
          {
            "value": "center",
            "label": "居中"
          }
        ],
        "publicKey": "align",
        "publicLabel": "文案对齐"
      },
      {
        "key": "theme",
        "label": "主题",
        "type": "select",
        "default": "dark",
        "options": [
          {
            "value": "dark",
            "label": "深色"
          },
          {
            "value": "light",
            "label": "浅色"
          }
        ],
        "publicKey": "theme",
        "publicLabel": "主题"
      },
      {
        "key": "showDecor",
        "label": "装饰图片",
        "type": "toggle",
        "default": false,
        "publicKey": "showDecor",
        "publicLabel": "装饰图片"
      },
      {
        "key": "decorSrc",
        "label": "装饰元素",
        "type": "icons",
        "options": [
          {
            "value": "assets/3d/01.png",
            "label": "胜利手势",
            "image": "assets/3d/01.png"
          },
          {
            "value": "assets/3d/02.png",
            "label": "YES 按键",
            "image": "assets/3d/02.png"
          },
          {
            "value": "assets/3d/03.png",
            "label": "404 方块",
            "image": "assets/3d/03.png"
          },
          {
            "value": "assets/3d/04.png",
            "label": "8-bit 幽灵",
            "image": "assets/3d/04.png"
          },
          {
            "value": "assets/3d/05.png",
            "label": "YES 气泡",
            "image": "assets/3d/05.png"
          },
          {
            "value": "assets/3d/06.png",
            "label": "掌机图表",
            "image": "assets/3d/06.png"
          },
          {
            "value": "assets/3d/07.png",
            "label": "像素显示器",
            "image": "assets/3d/07.png"
          },
          {
            "value": "assets/3d/08.png",
            "label": "复古电脑",
            "image": "assets/3d/08.png"
          },
          {
            "value": "assets/3d/09.png",
            "label": "拍立得",
            "image": "assets/3d/09.png"
          },
          {
            "value": "assets/3d/10.png",
            "label": "奖杯",
            "image": "assets/3d/10.png"
          },
          {
            "value": "assets/3d/11.png",
            "label": "文件夹",
            "image": "assets/3d/11.png"
          },
          {
            "value": "assets/3d/12.png",
            "label": "番茄箱",
            "image": "assets/3d/12.png"
          }
        ],
        "publicKey": "decorSrc",
        "publicLabel": "装饰元素"
      },
      {
        "key": "decorScale",
        "label": "图片大小",
        "type": "slider",
        "default": 1,
        "min": 0.6,
        "max": 1.6,
        "step": 0.05,
        "publicKey": "decorScale",
        "publicLabel": "图片大小"
      }
    ],
    "defaultProps": {
      "showEyebrow": true,
      "imageCount": 1,
      "backgroundMode": "unicorn",
      "unicornScene": "goey",
      "showFigure": true,
      "showMeta": true,
      "align": "left",
      "accent": "blue",
      "theme": "dark",
      "copy": {
        "t001": "全幅主视觉 / DROP HERO IMAGE",
        "t002": "资本大年 / CAPITAL YEAR",
        "t003": "2024 · 美国 AI 大额融资",
        "t004": "报告摘要 · 一句话定调",
        "t005": "这一年，AI 吞下了全美",
        "t006": "近三分之一",
        "t007": "的风险投资。",
        "t008": "970 亿美元、97 笔单笔过亿的大额融资，把资本的天平彻底压向人工智能——一个由少数头部赢家定义的资本大年。",
        "t009": "AI 占全美风投 · 近三分之一"
      },
      "meta": [
        {
          "v": "970 亿",
          "k": "全年大额融资总额 / 美元"
        },
        {
          "v": "97 笔",
          "k": "单笔 ≥ 1 亿美元事件"
        },
        {
          "v": "43.3%",
          "k": "通用大模型占 AI 大额融资"
        }
      ],
      "showDecor": false,
      "decorSrc": null,
      "decorScale": 1,
      "forceDark": true
    }
  },
  {
    "key": "theme03_page072",
    "themeKey": "theme03",
    "pageNumber": 72,
    "layout": "THEME03-072",
    "slot": "tornado",
    "label": "轮次背向",
    "bgClass": "",
    "controls": [
      {
        "key": "forceDark",
        "label": "全局深色",
        "type": "toggle",
        "default": true,
        "desc": "复刻 Claude Design 右上角深浅配色切换。",
        "publicKey": "forceDark",
        "publicLabel": "全局深色",
        "description": "复刻 Claude Design 右上角深浅配色切换。"
      },
      {
        "key": "showEyebrow",
        "label": "装饰标签",
        "type": "toggle",
        "default": true,
        "publicKey": "showEyebrow",
        "publicLabel": "装饰标签"
      },
      {
        "key": "showValues",
        "label": "数值标注",
        "type": "toggle",
        "default": true,
        "publicKey": "showValueLabels",
        "publicLabel": "数值标注"
      },
      {
        "key": "showAxis",
        "label": "两侧轴名",
        "type": "toggle",
        "default": true,
        "publicKey": "showAxis",
        "publicLabel": "两侧轴名"
      },
      {
        "key": "focusEnabled",
        "label": "重点突出",
        "type": "toggle",
        "default": true,
        "publicKey": "focusEnabled",
        "publicLabel": "重点突出"
      },
      {
        "key": "focusIndex",
        "label": "突出项",
        "type": "slider",
        "default": 4,
        "min": 0,
        "max": 5,
        "step": 1,
        "publicKey": "focusIndex",
        "publicLabel": "突出项"
      },
      {
        "key": "showCallout",
        "label": "结构解读",
        "type": "toggle",
        "default": true,
        "publicKey": "showCallout",
        "publicLabel": "结构解读"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "select",
        "default": "blue",
        "options": [
          {
            "value": "blue",
            "label": "电光蓝"
          },
          {
            "value": "lime",
            "label": "荧光绿"
          }
        ],
        "publicKey": "accent",
        "publicLabel": "强调色"
      },
      {
        "key": "theme",
        "label": "主题",
        "type": "select",
        "default": "light",
        "options": [
          {
            "value": "light",
            "label": "浅色"
          },
          {
            "value": "dark",
            "label": "深色"
          }
        ],
        "publicKey": "theme",
        "publicLabel": "主题"
      }
    ],
    "defaultProps": {
      "showEyebrow": true,
      "showValues": true,
      "showAxis": true,
      "focusEnabled": true,
      "focusIndex": 4,
      "showCallout": true,
      "accent": "blue",
      "theme": "light",
      "eyebrow": "横向透视 / ROUND STRUCTURE",
      "kicker": "2024 · 97 笔 · 金额 = 笔数 × 平均单笔",
      "title": "轮次结构 · 笔数 ↔ 金额",
      "titleNote": "左：事件笔数　右：估算资金量级",
      "axisLeft": "事件笔数 ◂",
      "axisRight": "▸ 估算金额 / 亿美元",
      "calloutLabel": "↳ 结构解读",
      "calloutPre": "笔数沿轮次抬升，但",
      "calloutStrong": "资金量级在 D 轮及以后陡然放大",
      "calloutPost": "——后期 + 未标明轮次约占四成笔数，却吸纳近八成资金，\"钱往后期头部集中\"的特征一目了然。",
      "rounds": [
        {
          "name": "种子轮",
          "cnt": 8,
          "avg": 1.2
        },
        {
          "name": "A 轮",
          "cnt": 12,
          "avg": 1.8
        },
        {
          "name": "B 轮",
          "cnt": 18,
          "avg": 3.5
        },
        {
          "name": "C 轮",
          "cnt": 15,
          "avg": 6.8
        },
        {
          "name": "D 轮及以后",
          "cnt": 22,
          "avg": 15.2
        },
        {
          "name": "未标明轮次",
          "cnt": 22,
          "avg": 18.6
        }
      ],
      "forceDark": true
    }
  },
  {
    "key": "theme03_page073",
    "themeKey": "theme03",
    "pageNumber": 73,
    "layout": "THEME03-073",
    "slot": "moat",
    "label": "护城河",
    "bgClass": "",
    "controls": [
      {
        "key": "forceDark",
        "label": "全局深色",
        "type": "toggle",
        "default": true,
        "desc": "复刻 Claude Design 右上角深浅配色切换。",
        "publicKey": "forceDark",
        "publicLabel": "全局深色",
        "description": "复刻 Claude Design 右上角深浅配色切换。"
      },
      {
        "key": "showEyebrow",
        "label": "装饰标签",
        "type": "toggle",
        "default": true,
        "publicKey": "showEyebrow",
        "publicLabel": "装饰标签"
      },
      {
        "key": "itemCount",
        "label": "公司数量",
        "type": "slider",
        "default": 3,
        "min": 2,
        "max": 3,
        "step": 1,
        "publicKey": "itemCount",
        "publicLabel": "公司数量"
      },
      {
        "key": "showType",
        "label": "壁垒类型",
        "type": "toggle",
        "default": true,
        "publicKey": "showType",
        "publicLabel": "壁垒类型"
      },
      {
        "key": "showMeter",
        "label": "护城河深度",
        "type": "toggle",
        "default": true,
        "publicKey": "showMeter",
        "publicLabel": "护城河深度"
      },
      {
        "key": "focusEnabled",
        "label": "重点突出",
        "type": "toggle",
        "default": false,
        "publicKey": "focusEnabled",
        "publicLabel": "重点突出"
      },
      {
        "key": "focusIndex",
        "label": "突出项",
        "type": "slider",
        "default": 2,
        "min": 0,
        "max": 2,
        "step": 1,
        "publicKey": "focusIndex",
        "publicLabel": "突出项"
      },
      {
        "key": "showCallout",
        "label": "结构解读",
        "type": "toggle",
        "default": true,
        "publicKey": "showCallout",
        "publicLabel": "结构解读"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "select",
        "default": "blue",
        "options": [
          {
            "value": "blue",
            "label": "电光蓝"
          },
          {
            "value": "lime",
            "label": "荧光绿"
          }
        ],
        "publicKey": "accent",
        "publicLabel": "强调色"
      },
      {
        "key": "theme",
        "label": "主题",
        "type": "select",
        "default": "light",
        "options": [
          {
            "value": "light",
            "label": "浅色"
          },
          {
            "value": "dark",
            "label": "深色"
          }
        ],
        "publicKey": "theme",
        "publicLabel": "主题"
      }
    ],
    "defaultProps": {
      "showEyebrow": true,
      "itemCount": 3,
      "showType": true,
      "showMeter": true,
      "focusEnabled": false,
      "focusIndex": 2,
      "showCallout": true,
      "accent": "blue",
      "copy": {
        "t001": "典型案例 / MOAT ANATOMY",
        "t002": "头部公司 · 核心竞争力剖析",
        "t003": "护城河 · 凭什么是它们",
        "t004": "同样吸金，壁垒来源各不相同",
        "t005": "0",
        "t006": "护城河深度",
        "t007": "↳ 护城河小结",
        "t008": "模型层靠",
        "t009": "信任、数据与渠道",
        "t010": "筑墙，上游靠",
        "t011": "资源锁定",
        "t012": "立壁—— 判断标的，先看其护城河是\"可被大厂复制\"还是\"难以复制\"。"
      },
      "companies": [
        {
          "name": "Anthropic",
          "seg": "中游 · 通用大模型",
          "type": "信任 × 渠道",
          "depth": 4,
          "points": [
            "「安全对齐」路线 → 企业客户信任优势",
            "Claude 在代码生成、长文本理解领先",
            "与 Amazon、Google 云深度合作、渠道快覆盖"
          ]
        },
        {
          "name": "xAI",
          "seg": "中游 · 通用大模型",
          "type": "数据 × 协同",
          "depth": 3,
          "points": [
            "背靠 X 平台海量实时社交数据",
            "与特斯拉自动驾驶团队协同多模态感知",
            "Grok 主打「幽默 · 实时 · 无审查」差异化"
          ]
        },
        {
          "name": "CoreWeave",
          "seg": "上游 · 算力云",
          "type": "资源锁定",
          "depth": 4,
          "points": [
            "与 NVIDIA 签订长期供应协议",
            "手握数万张 H100 / H200 GPU",
            "OpenAI、Stability 等公司核心算力供应商"
          ]
        }
      ],
      "forceDark": true
    }
  },
  {
    "key": "theme03_page074",
    "themeKey": "theme03",
    "pageNumber": 74,
    "layout": "THEME03-074",
    "slot": "supply",
    "label": "算力卡脖",
    "bgClass": "",
    "controls": [
      {
        "key": "forceDark",
        "label": "全局深色",
        "type": "toggle",
        "default": true,
        "desc": "复刻 Claude Design 右上角深浅配色切换。",
        "publicKey": "forceDark",
        "publicLabel": "全局深色",
        "description": "复刻 Claude Design 右上角深浅配色切换。"
      },
      {
        "key": "showEyebrow",
        "label": "装饰标签",
        "type": "toggle",
        "default": true,
        "publicKey": "showEyebrow",
        "publicLabel": "装饰标签"
      },
      {
        "key": "stageCount",
        "label": "环节数量",
        "type": "slider",
        "default": 4,
        "min": 2,
        "max": 4,
        "step": 1,
        "publicKey": "stageCount",
        "publicLabel": "环节数量"
      },
      {
        "key": "showConnector",
        "label": "传导箭头",
        "type": "toggle",
        "default": true,
        "publicKey": "showConnector",
        "publicLabel": "传导箭头"
      },
      {
        "key": "showWinner",
        "label": "赢家条",
        "type": "toggle",
        "default": true,
        "publicKey": "showWinner",
        "publicLabel": "赢家条"
      },
      {
        "key": "focusEnabled",
        "label": "重点突出",
        "type": "toggle",
        "default": true,
        "publicKey": "focusEnabled",
        "publicLabel": "重点突出"
      },
      {
        "key": "focusIndex",
        "label": "突出项",
        "type": "slider",
        "default": 1,
        "min": 0,
        "max": 3,
        "step": 1,
        "publicKey": "focusIndex",
        "publicLabel": "突出项"
      },
      {
        "key": "showCallout",
        "label": "结构解读",
        "type": "toggle",
        "default": true,
        "publicKey": "showCallout",
        "publicLabel": "结构解读"
      },
      {
        "key": "theme",
        "label": "主题",
        "type": "select",
        "default": "light",
        "options": [
          {
            "value": "light",
            "label": "浅色"
          },
          {
            "value": "dark",
            "label": "深色"
          }
        ],
        "publicKey": "theme",
        "publicLabel": "主题"
      }
    ],
    "defaultProps": {
      "showEyebrow": true,
      "stageCount": 4,
      "showConnector": true,
      "showWinner": true,
      "focusEnabled": true,
      "focusIndex": 1,
      "showCallout": true,
      "theme": "light",
      "copy": {
        "t001": "风险研判 / SUPPLY CHAIN",
        "t002": "报告 6.1 · 算力「卡脖子」",
        "t003": "算力供应链的瓶颈",
        "t004": "从 GPU 紧缺到中小出清 · 一条约束传导链",
        "t005": "◆ 瓶颈所在",
        "t006": "卖铲赢家",
        "t007": "CoreWeave",
        "t008": "与 NVIDIA 签长约、手握数万张 H100 / H200，成为 OpenAI、Stability 的核心算力供应商—— 当所有人抢 GPU，提前锁定算力的人反而成了稀缺标的。",
        "t009": "↳ 卖铲子逻辑",
        "t010": "算力是这轮 AI 的硬约束——卡脖子越紧，越凸显上游\"卖铲子\"环节的确定性溢价。"
      },
      "stages": [
        {
          "tag": "供给",
          "title": "NVIDIA GPU 供应紧张",
          "note": "高端算力卡产能受限"
        },
        {
          "tag": "政策",
          "title": "对华出口管制加码",
          "note": "可用算力进一步收窄"
        },
        {
          "tag": "成本",
          "title": "算力成本居高不下",
          "note": "训练 / 推理开销攀升"
        },
        {
          "tag": "出清",
          "title": "中小公司难以承受",
          "note": "长期烧钱被迫退出"
        }
      ],
      "forceDark": true
    }
  },
  {
    "key": "theme03_page075",
    "themeKey": "theme03",
    "pageNumber": 75,
    "layout": "THEME03-075",
    "slot": "chips",
    "label": "AI 芯片",
    "bgClass": "",
    "controls": [
      {
        "key": "forceDark",
        "label": "全局深色",
        "type": "toggle",
        "default": true,
        "desc": "复刻 Claude Design 右上角深浅配色切换。",
        "publicKey": "forceDark",
        "publicLabel": "全局深色",
        "description": "复刻 Claude Design 右上角深浅配色切换。"
      },
      {
        "key": "showEyebrow",
        "label": "装饰标签",
        "type": "toggle",
        "default": true,
        "publicKey": "showEyebrow",
        "publicLabel": "装饰标签"
      },
      {
        "key": "imageCount",
        "label": "图片数量",
        "type": "slider",
        "default": 2,
        "min": 0,
        "max": 4,
        "step": 1,
        "publicKey": "imageCount",
        "publicLabel": "图片数量"
      },
      {
        "key": "layout",
        "label": "图片排布",
        "type": "select",
        "default": "row",
        "options": [
          {
            "value": "row",
            "label": "横排"
          },
          {
            "value": "column",
            "label": "竖排"
          }
        ],
        "publicKey": "layout",
        "publicLabel": "图片排布"
      },
      {
        "key": "showFigure",
        "label": "核心数字",
        "type": "toggle",
        "default": true,
        "publicKey": "showFigure",
        "publicLabel": "核心数字"
      },
      {
        "key": "chipCount",
        "label": "特征标签",
        "type": "slider",
        "default": 3,
        "min": 0,
        "max": 3,
        "step": 1,
        "publicKey": "chipCount",
        "publicLabel": "特征标签"
      },
      {
        "key": "showCallout",
        "label": "装饰解读",
        "type": "toggle",
        "default": true,
        "publicKey": "showCallout",
        "publicLabel": "装饰解读"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "select",
        "default": "blue",
        "options": [
          {
            "value": "blue",
            "label": "电光蓝"
          },
          {
            "value": "lime",
            "label": "荧光绿"
          }
        ],
        "publicKey": "accent",
        "publicLabel": "强调色"
      }
    ],
    "defaultProps": {
      "showEyebrow": true,
      "imageCount": 2,
      "layout": "row",
      "showFigure": true,
      "chipCount": 3,
      "showCallout": true,
      "accent": "blue",
      "eyebrow": "上游 · 基础设施 / SILICON",
      "kicker": "AI 芯片 · 代表 Cerebras / Groq",
      "sectorTag": "SECTOR · AI 芯片",
      "titlePrefix": "算力的",
      "titleAccent": "最底层底座",
      "titleSuffix": "",
      "lead": "位居产业链最上游的 AI 芯片，是整条价值链的硬约束。本年度该赛道吸纳 97 亿美元、约占 10%，代表公司 Cerebras、Groq 以专用架构切入训练与推理算力——上游确定性最强，但同样受供给与出口管制牵制。",
      "figureValue": "97",
      "figureUnit": "亿美元",
      "figureCaption": "芯片赛道 · 占全年 10%",
      "chips": [
        "训练 + 推理算力底座",
        "上游确定性最强环节",
        "出口管制下的战略资产"
      ],
      "calloutLabel": "↳ 上游确定性",
      "calloutBody": "无论模型与应用如何更迭，训练与推理都要消耗芯片算力——上游硬件因此成为“卖铲子”逻辑里确定性最高、最难被绕过的一环。",
      "galleryCaption": "芯片 / 硬件配图 / DROP IMAGE",
      "galleryNote": "↗ 晶圆 · 推理芯片 · 算力机柜",
      "emptyText": "纯文字版式 · 无配图",
      "forceDark": true
    }
  },
  {
    "key": "theme03_page076",
    "themeKey": "theme03",
    "pageNumber": 76,
    "layout": "THEME03-076",
    "slot": "compute",
    "label": "算力军备",
    "bgClass": "",
    "controls": [
      {
        "key": "forceDark",
        "label": "全局深色",
        "type": "toggle",
        "default": true,
        "desc": "复刻 Claude Design 右上角深浅配色切换。",
        "publicKey": "forceDark",
        "publicLabel": "全局深色",
        "description": "复刻 Claude Design 右上角深浅配色切换。"
      },
      {
        "key": "showEyebrow",
        "label": "装饰标签",
        "type": "toggle",
        "default": true,
        "publicKey": "showEyebrow",
        "publicLabel": "装饰标签"
      },
      {
        "key": "imageCount",
        "label": "图片数量",
        "type": "slider",
        "default": 2,
        "min": 0,
        "max": 4,
        "step": 1,
        "publicKey": "imageCount",
        "publicLabel": "图片数量"
      },
      {
        "key": "layout",
        "label": "图片排布",
        "type": "select",
        "default": "row",
        "options": [
          {
            "value": "row",
            "label": "横排"
          },
          {
            "value": "column",
            "label": "竖排"
          }
        ],
        "publicKey": "layout",
        "publicLabel": "图片排布"
      },
      {
        "key": "showFigure",
        "label": "核心数字",
        "type": "toggle",
        "default": true,
        "publicKey": "showFigure",
        "publicLabel": "核心数字"
      },
      {
        "key": "chipCount",
        "label": "特征标签",
        "type": "slider",
        "default": 3,
        "min": 0,
        "max": 3,
        "step": 1,
        "publicKey": "chipCount",
        "publicLabel": "特征标签"
      },
      {
        "key": "showCallout",
        "label": "装饰解读",
        "type": "toggle",
        "default": true,
        "publicKey": "showCallout",
        "publicLabel": "装饰解读"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "select",
        "default": "blue",
        "options": [
          {
            "value": "blue",
            "label": "电光蓝"
          },
          {
            "value": "lime",
            "label": "荧光绿"
          }
        ],
        "publicKey": "accent",
        "publicLabel": "强调色"
      }
    ],
    "defaultProps": {
      "showEyebrow": true,
      "imageCount": 2,
      "layout": "row",
      "showFigure": true,
      "chipCount": 3,
      "showCallout": true,
      "accent": "blue",
      "eyebrow": "中游 · 基础设施 / COMPUTE",
      "kicker": "算力云 · 代表 CoreWeave / NVIDIA 长约",
      "sectorTag": "SECTOR · 算力云 / 数据中心",
      "titlePrefix": "抢 GPU，就是",
      "titleAccent": "抢未来",
      "titleSuffix": "",
      "lead": "当所有模型公司都在抢 GPU，提前锁定算力的基础设施提供商反而成为稀缺标的。CoreWeave 手握数万张 H100/H200、与 NVIDIA 签下长期供应协议，成为 OpenAI、Stability AI 等公司的核心算力供应商——基础设施赛道全年吸纳 158 亿美元、约占 16.3%。",
      "figureValue": "158",
      "figureUnit": "亿美元",
      "figureCaption": "基础设施赛道 · 占全年 16.3%",
      "chips": [
        "数万张 H100 / H200",
        "NVIDIA 长期供应协议",
        "头部模型公司核心供应商"
      ],
      "calloutLabel": "↳ 卖铲赢家",
      "calloutBody": "“淘金热中卖铲子”——谁掌握 GPU 与电力，谁就握住整条价值链的咽喉。算力云因此成为兼具融资热度与收入确定性的“明星兑现”标的。",
      "galleryCaption": "数据中心 / GPU 机柜 / DROP IMAGE",
      "galleryNote": "↗ 机房 · GPU 机柜 · 算力集群",
      "emptyText": "纯文字版式 · 无配图",
      "forceDark": true
    }
  },
  {
    "key": "theme03_page077",
    "themeKey": "theme03",
    "pageNumber": 77,
    "layout": "THEME03-077",
    "slot": "colophon",
    "label": "封底",
    "bgClass": "",
    "controls": [
      {
        "key": "forceDark",
        "label": "全局深色",
        "type": "toggle",
        "default": true,
        "desc": "复刻 Claude Design 右上角深浅配色切换。",
        "publicKey": "forceDark",
        "publicLabel": "全局深色",
        "description": "复刻 Claude Design 右上角深浅配色切换。"
      },
      {
        "key": "showEyebrow",
        "label": "装饰标签",
        "type": "toggle",
        "default": true,
        "publicKey": "showEyebrow",
        "publicLabel": "装饰标签"
      },
      {
        "key": "theme",
        "label": "背景主题",
        "type": "select",
        "default": "dark",
        "options": [
          {
            "value": "dark",
            "label": "深色"
          },
          {
            "value": "light",
            "label": "浅色"
          }
        ],
        "publicKey": "theme",
        "publicLabel": "背景主题"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "select",
        "default": "lime",
        "options": [
          {
            "value": "blue",
            "label": "电光蓝"
          },
          {
            "value": "lime",
            "label": "荧光绿"
          }
        ],
        "publicKey": "accent",
        "publicLabel": "强调色"
      },
      {
        "key": "showSources",
        "label": "来源说明",
        "type": "toggle",
        "default": true,
        "publicKey": "showSources",
        "publicLabel": "来源说明"
      },
      {
        "key": "noteCount",
        "label": "提示条数",
        "type": "slider",
        "default": 3,
        "min": 1,
        "max": 3,
        "step": 1,
        "publicKey": "noteCount",
        "publicLabel": "提示条数"
      },
      {
        "key": "showMeta",
        "label": "页脚信息",
        "type": "toggle",
        "default": true,
        "publicKey": "showMeta",
        "publicLabel": "页脚信息"
      }
    ],
    "defaultProps": {
      "showEyebrow": true,
      "theme": "dark",
      "accent": "lime",
      "showSources": true,
      "noteCount": 3,
      "showMeta": true,
      "eyebrow": "附录 / COLOPHON",
      "kicker": "END · 数据来源与说明",
      "titlePrefix": "下一程，",
      "titleAccentA": "赌叙事",
      "titleMid": "到",
      "titleAccentB": "看兑现",
      "titleSuffix": "。",
      "lead": "2024 年是美国 AI 资本化进程的关键一年。能把技术转化为可持续收入的公司，才能在退潮后留在牌桌上。",
      "meta": [
        "《2024 美国大额融资 AI 公司调研报告》",
        "编制 · 2026.06",
        "仅供研究参考"
      ],
      "sourcesLabel": "↳ 数据来源",
      "notesLabel": "↳ 研究提示",
      "sources": [
        {
          "k": "数据口径",
          "v": "2024 全年公开披露的 ≥1 亿美元融资事件"
        },
        {
          "k": "数据来源",
          "v": "综合整理自公开渠道，部分数据经研究性推演"
        },
        {
          "k": "分析框架",
          "v": "横纵分析法 · 横向看集中 / 纵向看节奏 / 结构看分层"
        }
      ],
      "notes": [
        "本报告数据仅供研究与测试参考，不构成任何投资建议。",
        "部分估值与收入为研究性推演，可能与最终披露存在差异。",
        "内容由 AI 生成，请谨慎参考并自行核实关键数据。"
      ],
      "copy": {
        "t001": "从"
      },
      "forceDark": true
    }
  }
];
