export const theme = {
  "key": "theme12",
  "displayName": "声波霓虹风",
  "label": "声波霓虹风",
  "name": "声波霓虹风",
  "scenario": "音乐娱乐、潮流活动、直播内容、年轻化发布",
  "audience": "娱乐品牌、活动策划、内容团队、潮流消费品牌",
  "mode": "replace"
};
export const pages = [
  {
    "key": "theme12_page001",
    "themeKey": "theme12",
    "pageNumber": 1,
    "layout": "THEME12-001",
    "slot": "coverType",
    "label": "封面 · 字体 / Masthead",
    "bgClass": "",
    "controls": [
      {
        "key": "theme",
        "label": "配色",
        "type": "segment",
        "default": "light",
        "def": "light",
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
        "desc": "整版底色：腮红浅底 / 深色板",
        "publicKey": "theme",
        "publicLabel": "配色",
        "description": "整版底色：腮红浅底 / 深色板"
      },
      {
        "key": "showCoverLines",
        "label": "封面导语",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏右栏封面导语",
        "publicKey": "showCoverLines",
        "publicLabel": "封面导语",
        "description": "显示/隐藏右栏封面导语"
      },
      {
        "key": "lineCount",
        "label": "导语条数",
        "type": "slider",
        "default": 3,
        "def": 3,
        "min": 1,
        "max": 3,
        "step": 1,
        "dependsOn": "showCoverLines",
        "desc": "封面导语条目数量",
        "publicKey": "itemCount",
        "publicLabel": "导语条数",
        "description": "封面导语条目数量"
      },
      {
        "key": "showSeal",
        "label": "身份印章",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏 CREATOR-OWNED 圆章",
        "publicKey": "showSeal",
        "publicLabel": "身份印章",
        "description": "显示/隐藏 CREATOR-OWNED 圆章"
      },
      {
        "key": "showGhost",
        "label": "巨型刊号",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏出血的巨型刊号数字",
        "publicKey": "showGhost",
        "publicLabel": "巨型刊号",
        "description": "显示/隐藏出血的巨型刊号数字"
      },
      {
        "key": "showBarcode",
        "label": "刊号条码",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏角落刊号条码",
        "publicKey": "showBarcode",
        "publicLabel": "刊号条码",
        "description": "显示/隐藏角落刊号条码"
      },
      {
        "key": "showShapes",
        "label": "几何装饰",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏漂浮几何装饰",
        "publicKey": "showShapes",
        "publicLabel": "几何装饰",
        "description": "显示/隐藏漂浮几何装饰"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#f15a29",
        "def": "#f15a29",
        "options": [
          "#f15a29",
          "#d61fb5",
          "#3bb6ec",
          "#1f6b2a"
        ],
        "desc": "主字高亮 / 编号 / 印章强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "主字高亮 / 编号 / 印章强调色"
      }
    ],
    "defaultProps": {
      "accent": "#f15a29",
      "theme": "light",
      "showCoverLines": true,
      "lineCount": 3,
      "showSeal": true,
      "showGhost": true,
      "showBarcode": true,
      "showShapes": true,
      "barMeta": "创刊号 / Premiere Issue · Vol. 01",
      "kicker": "The Sound of Sovereignty",
      "title": "声[[浪]]",
      "titleEn": "SOUNDWAVE",
      "tagline": "为独立音乐人而造的发行与变现操作系统——**声音的主权，归于创作者。**",
      "ghostText": "01",
      "linesTitle": "本期 / In This Issue",
      "lines": [
        {
          "n": "01",
          "big": "独立厂牌",
          "sub": "一个人，撑起一座厂牌的 12 种方式"
        },
        {
          "n": "02",
          "big": "版税透明",
          "sub": "每一分钱，看得见来处"
        },
        {
          "n": "03",
          "big": "现场复兴",
          "sub": "小场地里，正在发生的大事"
        }
      ],
      "seal": {
        "top": "★ EST. 2026 ★",
        "name": "声浪",
        "sub": "CREATOR-OWNED"
      },
      "barcodeLabel": "SW 01 · 2026",
      "page": "01",
      "total": "86"
    }
  },
  {
    "key": "theme12_page002",
    "themeKey": "theme12",
    "pageNumber": 2,
    "layout": "THEME12-002",
    "slot": "coverWave",
    "label": "封面 · 声波 / Spectrum",
    "bgClass": "",
    "controls": [
      {
        "key": "align",
        "label": "对齐",
        "type": "segment",
        "default": "left",
        "def": "left",
        "options": [
          {
            "value": "left",
            "label": "居左"
          },
          {
            "value": "center",
            "label": "居中"
          }
        ],
        "desc": "标题与文案的排版对齐",
        "publicKey": "align",
        "publicLabel": "对齐",
        "description": "标题与文案的排版对齐"
      },
      {
        "key": "barCount",
        "label": "频谱条数",
        "type": "slider",
        "default": 34,
        "def": 34,
        "min": 18,
        "max": 52,
        "step": 1,
        "desc": "频谱分析条的数量",
        "publicKey": "barCount",
        "publicLabel": "频谱条数",
        "description": "频谱分析条的数量"
      },
      {
        "key": "showReflection",
        "label": "镜面倒影",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏频谱下方的倒影",
        "publicKey": "showReflection",
        "publicLabel": "镜面倒影",
        "description": "显示/隐藏频谱下方的倒影"
      },
      {
        "key": "showAxis",
        "label": "频率刻度",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏基线与频率刻度",
        "publicKey": "showAxis",
        "publicLabel": "频率刻度",
        "description": "显示/隐藏基线与频率刻度"
      },
      {
        "key": "showPlayhead",
        "label": "进度游标",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏扫过频谱的进度游标",
        "publicKey": "showPlayhead",
        "publicLabel": "进度游标",
        "description": "显示/隐藏扫过频谱的进度游标"
      },
      {
        "key": "showTagline",
        "label": "副标语",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏一行副标语",
        "publicKey": "showTagline",
        "publicLabel": "副标语",
        "description": "显示/隐藏一行副标语"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#d61fb5",
        "def": "#d61fb5",
        "options": [
          "#d61fb5",
          "#f15a29",
          "#3bb6ec",
          "#baf04f"
        ],
        "desc": "主高亮 / 频谱主色 / 游标色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "主高亮 / 频谱主色 / 游标色"
      }
    ],
    "defaultProps": {
      "accent": "#d61fb5",
      "align": "left",
      "barCount": 34,
      "showReflection": true,
      "showAxis": true,
      "showPlayhead": true,
      "showTagline": true,
      "barMeta": "正在直播 / On Air · Vol. 01",
      "badge": "LIVE · 声浪电台",
      "title": "每一道[[声浪]]，\n都被听见。",
      "tagline": "发行、结算、版权与听众，收拢进同一处——为独立音乐人打造的操作系统。",
      "ticks": [
        "20Hz",
        "120",
        "500",
        "1k",
        "4k",
        "12k",
        "20k"
      ],
      "page": "02",
      "total": "86"
    }
  },
  {
    "key": "theme12_page003",
    "themeKey": "theme12",
    "pageNumber": 3,
    "layout": "THEME12-003",
    "slot": "coverImage",
    "label": "封面 · 大图 / Cover Story",
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
        "key": "mediaFit",
        "label": "图片填充",
        "type": "segment",
        "default": "cover",
        "def": "cover",
        "options": [
          {
            "value": "cover",
            "label": "裁切"
          },
          {
            "value": "contain",
            "label": "完整"
          }
        ],
        "desc": "封面大图的填充方式",
        "publicKey": "mediaFit",
        "publicLabel": "图片填充",
        "description": "封面大图的填充方式"
      },
      {
        "key": "scrim",
        "label": "蒙版",
        "type": "segment",
        "default": "dark",
        "def": "dark",
        "options": [
          {
            "value": "dark",
            "label": "暗"
          },
          {
            "value": "light",
            "label": "亮"
          }
        ],
        "desc": "叠加渐变蒙版的明暗",
        "publicKey": "scrim",
        "publicLabel": "蒙版",
        "description": "叠加渐变蒙版的明暗"
      },
      {
        "key": "showSpine",
        "label": "书脊标",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏左缘竖排书脊文字",
        "publicKey": "showSpine",
        "publicLabel": "书脊标",
        "description": "显示/隐藏左缘竖排书脊文字"
      },
      {
        "key": "showCoverLines",
        "label": "封面导语",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏右侧封面导语",
        "publicKey": "showCoverLines",
        "publicLabel": "封面导语",
        "description": "显示/隐藏右侧封面导语"
      },
      {
        "key": "lineCount",
        "label": "导语条数",
        "type": "slider",
        "default": 2,
        "def": 2,
        "min": 1,
        "max": 3,
        "step": 1,
        "dependsOn": "showCoverLines",
        "desc": "封面导语条目数量",
        "publicKey": "itemCount",
        "publicLabel": "导语条数",
        "description": "封面导语条目数量"
      },
      {
        "key": "showBarcode",
        "label": "刊号条码",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏右下角刊号条码",
        "publicKey": "showBarcode",
        "publicLabel": "刊号条码",
        "description": "显示/隐藏右下角刊号条码"
      },
      {
        "key": "showCredit",
        "label": "封面署名",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏封面人物署名",
        "publicKey": "showCredit",
        "publicLabel": "封面署名",
        "description": "显示/隐藏封面人物署名"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#f15a29",
        "def": "#f15a29",
        "options": [
          "#f15a29",
          "#d61fb5",
          "#3bb6ec",
          "#baf04f"
        ],
        "desc": "规线 / 导语高亮 / 条码强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "规线 / 导语高亮 / 条码强调色"
      }
    ],
    "defaultProps": {
      "accent": "#f15a29",
      "backgroundMode": "unicorn",
      "unicornScene": "tech",
      "mediaFit": "cover",
      "scrim": "dark",
      "showSpine": true,
      "showCoverLines": true,
      "lineCount": 2,
      "showBarcode": true,
      "showCredit": true,
      "media": [],
      "brand": "声浪 SOUNDWAVE",
      "issueLabel": "Issue 01 · Summer 2026",
      "spineText": "Independent Music OS · Vol. 01",
      "kicker": "The Cover Story",
      "title": "声浪",
      "titleEn": "SOUNDWAVE",
      "lines": [
        {
          "big": "声音的主权",
          "sub": "归于做音乐的人"
        },
        {
          "big": "版税透明",
          "sub": "每一分钱看得见来处"
        },
        {
          "big": "现场复兴",
          "sub": "小场地里的大事"
        }
      ],
      "creditLabel": "封面人物 / Cover:",
      "creditName": "＿＿＿＿",
      "barcodeLabel": "SW 01 · 2026",
      "mediaPlaceholder": "拖入封面大图 / Cover image",
      "page": "03",
      "total": "86"
    }
  },
  {
    "key": "theme12_page004",
    "themeKey": "theme12",
    "pageNumber": 4,
    "layout": "THEME12-004",
    "slot": "coverGrid",
    "label": "封面 · 目录 / Contents",
    "bgClass": "",
    "controls": [
      {
        "key": "theme",
        "label": "面板配色",
        "type": "segment",
        "default": "accent",
        "def": "accent",
        "options": [
          {
            "value": "accent",
            "label": "强调"
          },
          {
            "value": "dark",
            "label": "深色"
          }
        ],
        "desc": "左侧面板底色",
        "publicKey": "theme",
        "publicLabel": "面板配色",
        "description": "左侧面板底色"
      },
      {
        "key": "itemCount",
        "label": "目录条目",
        "type": "slider",
        "default": 4,
        "def": 4,
        "min": 3,
        "max": 5,
        "step": 1,
        "desc": "右栏目录条目数",
        "publicKey": "itemCount",
        "publicLabel": "目录条目",
        "description": "右栏目录条目数"
      },
      {
        "key": "focus",
        "label": "重点强调",
        "type": "toggle",
        "default": false,
        "def": false,
        "desc": "高亮某一目录条目，弱化其余",
        "publicKey": "focus",
        "publicLabel": "重点强调",
        "description": "高亮某一目录条目，弱化其余"
      },
      {
        "key": "focusIndex",
        "label": "强调第几个",
        "type": "slider",
        "default": 1,
        "def": 1,
        "min": 1,
        "max": 5,
        "step": 1,
        "dependsOn": "focus",
        "desc": "被强调条目的序号（1 起）",
        "publicKey": "focusIndex",
        "publicLabel": "强调第几个",
        "description": "被强调条目的序号（1 起）"
      },
      {
        "key": "showStats",
        "label": "数据标签",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏底部数据标签",
        "publicKey": "showStats",
        "publicLabel": "数据标签",
        "description": "显示/隐藏底部数据标签"
      },
      {
        "key": "statCount",
        "label": "标签数量",
        "type": "slider",
        "default": 3,
        "def": 3,
        "min": 0,
        "max": 3,
        "step": 1,
        "dependsOn": "showStats",
        "desc": "数据标签的数量",
        "publicKey": "statCount",
        "publicLabel": "标签数量",
        "description": "数据标签的数量"
      },
      {
        "key": "showSeal",
        "label": "身份印章",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏 CREATOR-OWNED 圆章",
        "publicKey": "showSeal",
        "publicLabel": "身份印章",
        "description": "显示/隐藏 CREATOR-OWNED 圆章"
      },
      {
        "key": "showGhost",
        "label": "巨型刊号",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏面板内出血的巨型刊号",
        "publicKey": "showGhost",
        "publicLabel": "巨型刊号",
        "description": "显示/隐藏面板内出血的巨型刊号"
      },
      {
        "key": "colorfulRows",
        "label": "彩色目录",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "每条目录使用不同的品牌色编号",
        "publicKey": "colorfulRows",
        "publicLabel": "彩色目录",
        "description": "每条目录使用不同的品牌色编号"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#5a138e",
        "def": "#5a138e",
        "options": [
          "#5a138e",
          "#f15a29",
          "#3bb6ec",
          "#1f6b2a"
        ],
        "desc": "面板 / 编号 / 高亮强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "面板 / 编号 / 高亮强调色"
      }
    ],
    "defaultProps": {
      "accent": "#5a138e",
      "theme": "accent",
      "itemCount": 4,
      "focus": false,
      "focusIndex": 1,
      "showStats": true,
      "statCount": 3,
      "showSeal": true,
      "showGhost": true,
      "colorfulRows": true,
      "brand": "声浪 SOUNDWAVE",
      "panelKicker": "Independent Music OS",
      "titleCn": "声浪",
      "titleEn": "SOUNDWAVE",
      "tagline": "为独立音乐人而造的\n发行与变现操作系统。",
      "ghostText": "01",
      "issueLine": "VOL. 01\n夏 / Summer 2026",
      "seal": {
        "top": "★ EST. 2026 ★",
        "name": "声浪",
        "sub": "CREATOR-OWNED"
      },
      "contentsTitle": "目录",
      "contentsMeta": "Contents · 本期共 86 页",
      "contents": [
        {
          "n": "01",
          "t": "宣言",
          "e": "Manifesto",
          "d": "主权，为何比流量更重要",
          "pg": "05"
        },
        {
          "n": "02",
          "t": "产品矩阵",
          "e": "The Stack",
          "d": "发行 · 直连 · 结算 · 护盾",
          "pg": "09"
        },
        {
          "n": "03",
          "t": "为什么是现在",
          "e": "Why Now",
          "d": "独立发行的拐点已到来",
          "pg": "24"
        },
        {
          "n": "04",
          "t": "加入声浪",
          "e": "Join Us",
          "d": "轮到你，发出声浪",
          "pg": "78"
        },
        {
          "n": "05",
          "t": "路线图",
          "e": "Roadmap",
          "d": "接下来的四个季度",
          "pg": "52"
        }
      ],
      "chips": [
        {
          "v": "30+",
          "lb": "分发平台"
        },
        {
          "v": "72h",
          "lb": "版税到账"
        },
        {
          "v": "0%",
          "lb": "首季分成"
        }
      ],
      "page": "04",
      "total": "86"
    }
  },
  {
    "key": "theme12_page005",
    "themeKey": "theme12",
    "pageNumber": 5,
    "layout": "THEME12-005",
    "slot": "manifesto",
    "label": "封面 / Manifesto",
    "bgClass": "",
    "controls": [
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#f15a29",
        "def": "#f15a29",
        "options": [
          "#f15a29",
          "#5a138e",
          "#3bb6ec",
          "#1f6b2a"
        ],
        "desc": "主强调色，作用于编号、页脚、装饰条",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "主强调色，作用于编号、页脚、装饰条"
      },
      {
        "key": "mediaCount",
        "label": "图片数量",
        "type": "slider",
        "default": 0,
        "def": 0,
        "min": 0,
        "max": 3,
        "step": 1,
        "desc": "右栏图片槽数量；0 时显示文字说明卡，1 时图片按原始比例自适应",
        "publicKey": "mediaCount",
        "publicLabel": "图片数量",
        "description": "右栏图片槽数量；0 时显示文字说明卡，1 时图片按原始比例自适应"
      },
      {
        "key": "mediaFit",
        "label": "图片填充",
        "type": "segment",
        "default": "cover",
        "def": "cover",
        "options": [
          {
            "value": "cover",
            "label": "裁切"
          },
          {
            "value": "contain",
            "label": "完整"
          }
        ],
        "dependsOn": "mediaCount",
        "desc": "多图时图片的填充方式",
        "publicKey": "mediaFit",
        "publicLabel": "图片填充",
        "description": "多图时图片的填充方式"
      },
      {
        "key": "indexCount",
        "label": "目录条目",
        "type": "slider",
        "default": 4,
        "def": 4,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "底部目录展示的条目数",
        "publicKey": "itemCount",
        "publicLabel": "目录条目",
        "description": "底部目录展示的条目数"
      },
      {
        "key": "focus",
        "label": "重点强调",
        "type": "toggle",
        "default": false,
        "def": false,
        "desc": "高亮某一目录条目，弱化其余",
        "publicKey": "focus",
        "publicLabel": "重点强调",
        "description": "高亮某一目录条目，弱化其余"
      },
      {
        "key": "focusIndex",
        "label": "强调第几个",
        "type": "slider",
        "default": 1,
        "def": 1,
        "min": 1,
        "max": 4,
        "step": 1,
        "dependsOn": "focus",
        "desc": "被强调条目的序号（1 起）",
        "publicKey": "focusIndex",
        "publicLabel": "强调第几个",
        "description": "被强调条目的序号（1 起）"
      },
      {
        "key": "showKicker",
        "label": "显示导语",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏标题上方的小标签",
        "publicKey": "showKicker",
        "publicLabel": "显示导语",
        "description": "显示/隐藏标题上方的小标签"
      },
      {
        "key": "showDecorations",
        "label": "显示装饰",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏几何装饰图形",
        "publicKey": "showDecorations",
        "publicLabel": "显示装饰",
        "description": "显示/隐藏几何装饰图形"
      }
    ],
    "defaultProps": {
      "accent": "#f15a29",
      "showDecorations": true,
      "showKicker": true,
      "mediaCount": 0,
      "mediaFit": "cover",
      "indexCount": 4,
      "focus": false,
      "focusIndex": 1,
      "media": [],
      "barMeta": "Independent Music OS — Vol. 01 / 2026",
      "kicker": "01 — 宣言 / Manifesto",
      "title": "声音的主权，\n属于[[创作者]]。",
      "titleEn": "Ownership of sound\nbelongs to the maker.",
      "aboutLabel": "What is 声浪",
      "aboutBody": "声浪是为独立音乐人打造的[[发行与变现操作系统]]。把发行、结算、版权登记与粉丝运营收拢进同一处——让你不必再把作品、收入和听众，交到任何中间人手里。",
      "aboutFoot": "一次上传，全球分发；每一分收益，路径透明。",
      "mediaPlaceholderHero": "拖入主图 / Hero image",
      "mediaPlaceholder": "拖入图片",
      "index": [
        {
          "n": "01",
          "t": "宣言",
          "e": "Manifesto",
          "d": "主权，为何比流量更重要。",
          "c": "#f15a29"
        },
        {
          "n": "02",
          "t": "产品矩阵",
          "e": "The Stack",
          "d": "发行 · 直连 · 结算 · 护盾。",
          "c": "#d61fb5"
        },
        {
          "n": "03",
          "t": "为什么是现在",
          "e": "Why Now",
          "d": "独立发行的拐点已到来。",
          "c": "#3bb6ec"
        },
        {
          "n": "04",
          "t": "加入声浪",
          "e": "Join Us",
          "d": "轮到你，发出声浪。",
          "c": "#1f6b2a"
        }
      ],
      "page": "01",
      "total": "82"
    }
  },
  {
    "key": "theme12_page006",
    "themeKey": "theme12",
    "pageNumber": 6,
    "layout": "THEME12-006",
    "slot": "quote",
    "label": "金句 / Quote",
    "bgClass": "",
    "controls": [
      {
        "key": "theme",
        "label": "配色",
        "type": "segment",
        "default": "light",
        "def": "light",
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
        "desc": "页面整体明暗配色",
        "publicKey": "theme",
        "publicLabel": "配色",
        "description": "页面整体明暗配色"
      },
      {
        "key": "align",
        "label": "对齐",
        "type": "segment",
        "default": "left",
        "def": "left",
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
        "desc": "引文与署名的排版对齐",
        "publicKey": "align",
        "publicLabel": "对齐",
        "description": "引文与署名的排版对齐"
      },
      {
        "key": "showMark",
        "label": "引号装饰",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏大引号符号",
        "publicKey": "showMark",
        "publicLabel": "引号装饰",
        "description": "显示/隐藏大引号符号"
      },
      {
        "key": "showAttribution",
        "label": "署名",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏引文署名",
        "publicKey": "showAttribution",
        "publicLabel": "署名",
        "description": "显示/隐藏引文署名"
      },
      {
        "key": "showDecorations",
        "label": "显示装饰",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏几何装饰图形",
        "publicKey": "showDecorations",
        "publicLabel": "显示装饰",
        "description": "显示/隐藏几何装饰图形"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#f15a29",
        "def": "#f15a29",
        "options": [
          "#f15a29",
          "#5a138e",
          "#3bb6ec",
          "#1f6b2a"
        ],
        "desc": "引号 / 高亮 / 页脚强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "引号 / 高亮 / 页脚强调色"
      }
    ],
    "defaultProps": {
      "accent": "#f15a29",
      "theme": "light",
      "align": "left",
      "showMark": true,
      "showAttribution": true,
      "showDecorations": true,
      "barMeta": "02 — In Their Words",
      "kicker": "金句 / In Their Words",
      "quote": "把发行权[[还给创作者]]，不是行业的让步——\n而是它[[本该有]]的默认。",
      "authorName": "李声 · 声浪创始人",
      "authorEn": "Li Sheng — Founder, SoundWave",
      "page": "02",
      "total": "82"
    }
  },
  {
    "key": "theme12_page007",
    "themeKey": "theme12",
    "pageNumber": 7,
    "layout": "THEME12-007",
    "slot": "agenda",
    "label": "目录 / Agenda",
    "bgClass": "",
    "controls": [
      {
        "key": "chapterCount",
        "label": "章节数量",
        "type": "slider",
        "default": 6,
        "def": 6,
        "min": 3,
        "max": 6,
        "step": 1,
        "desc": "目录中的章节条目数量",
        "publicKey": "itemCount",
        "publicLabel": "章节数量",
        "description": "目录中的章节条目数量"
      },
      {
        "key": "columns",
        "label": "栏数",
        "type": "segment",
        "default": 2,
        "def": 2,
        "options": [
          {
            "value": 1,
            "label": "1 栏"
          },
          {
            "value": 2,
            "label": "2 栏"
          }
        ],
        "desc": "目录条目的列数",
        "publicKey": "columns",
        "publicLabel": "栏数",
        "description": "目录条目的列数"
      },
      {
        "key": "focus",
        "label": "重点强调",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "把某一章提升为强调色块",
        "publicKey": "focus",
        "publicLabel": "重点强调",
        "description": "把某一章提升为强调色块"
      },
      {
        "key": "focusIndex",
        "label": "强调第几章",
        "type": "slider",
        "default": 1,
        "def": 1,
        "min": 1,
        "max": 6,
        "step": 1,
        "dependsOn": "focus",
        "desc": "被强调章节的序号（1 起）",
        "publicKey": "focusIndex",
        "publicLabel": "强调第几章",
        "description": "被强调章节的序号（1 起）"
      },
      {
        "key": "theme",
        "label": "配色",
        "type": "segment",
        "default": "light",
        "def": "light",
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
        "desc": "页面整体明暗配色",
        "publicKey": "theme",
        "publicLabel": "配色",
        "description": "页面整体明暗配色"
      },
      {
        "key": "showLede",
        "label": "显示导语",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏标题区导语",
        "publicKey": "showLede",
        "publicLabel": "显示导语",
        "description": "显示/隐藏标题区导语"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#f15a29",
        "def": "#f15a29",
        "options": [
          "#f15a29",
          "#5a138e",
          "#3bb6ec",
          "#1f6b2a"
        ],
        "desc": "焦点 / 高亮 / 页脚强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "焦点 / 高亮 / 页脚强调色"
      }
    ],
    "defaultProps": {
      "accent": "#f15a29",
      "theme": "light",
      "chapterCount": 6,
      "columns": 2,
      "focus": true,
      "focusIndex": 1,
      "showLede": true,
      "barMeta": "03 — Agenda",
      "kicker": "本场内容 / Agenda",
      "title": "接下来，[[六个章节]]。",
      "chapters": [
        {
          "cn": "主张与信条",
          "en": "The Manifesto",
          "s": "为什么主权比流量更重要。"
        },
        {
          "cn": "产品与能力",
          "en": "The Product",
          "s": "一个工作台，全链路覆盖。"
        },
        {
          "cn": "影像与现场",
          "en": "In The Wild",
          "s": "声音真正发生的地方。"
        },
        {
          "cn": "数据与增长",
          "en": "The Numbers",
          "s": "透明的收益，可见的曲线。"
        },
        {
          "cn": "定价与对照",
          "en": "Plans",
          "s": "谁真的站在创作者这边。"
        },
        {
          "cn": "路线与加入",
          "en": "What’s Next",
          "s": "轮到你，发出声浪。"
        }
      ],
      "page": "03",
      "total": "82"
    }
  },
  {
    "key": "theme12_page008",
    "themeKey": "theme12",
    "pageNumber": 8,
    "layout": "THEME12-008",
    "slot": "statement",
    "label": "满版标语 / Statement",
    "bgClass": "",
    "controls": [
      {
        "key": "theme",
        "label": "配色",
        "type": "segment",
        "default": "accent",
        "def": "accent",
        "options": [
          {
            "value": "accent",
            "label": "强调"
          },
          {
            "value": "dark",
            "label": "深色"
          },
          {
            "value": "light",
            "label": "浅色"
          }
        ],
        "desc": "整版底色：强调色 / 深色 / 浅色",
        "publicKey": "theme",
        "publicLabel": "配色",
        "description": "整版底色：强调色 / 深色 / 浅色"
      },
      {
        "key": "align",
        "label": "对齐",
        "type": "segment",
        "default": "left",
        "def": "left",
        "options": [
          {
            "value": "left",
            "label": "居左"
          },
          {
            "value": "center",
            "label": "居中"
          }
        ],
        "desc": "标语排版对齐方式",
        "publicKey": "align",
        "publicLabel": "对齐",
        "description": "标语排版对齐方式"
      },
      {
        "key": "showKicker",
        "label": "显示眉标",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏顶部小标题",
        "publicKey": "showKicker",
        "publicLabel": "显示眉标",
        "description": "显示/隐藏顶部小标题"
      },
      {
        "key": "showGhost",
        "label": "巨型数字",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏出血的巨型页码",
        "publicKey": "showGhost",
        "publicLabel": "巨型数字",
        "description": "显示/隐藏出血的巨型页码"
      },
      {
        "key": "showShapes",
        "label": "几何装饰",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏漂浮的几何装饰",
        "publicKey": "showShapes",
        "publicLabel": "几何装饰",
        "description": "显示/隐藏漂浮的几何装饰"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#f15a29",
        "def": "#f15a29",
        "options": [
          "#f15a29",
          "#5a138e",
          "#3bb6ec",
          "#1f6b2a"
        ],
        "desc": "底色 / 高亮 / 页脚强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "底色 / 高亮 / 页脚强调色"
      }
    ],
    "defaultProps": {
      "theme": "accent",
      "accent": "#f15a29",
      "align": "left",
      "showGhost": true,
      "showShapes": true,
      "showKicker": true,
      "barMeta": "04 — Statement",
      "kicker": "我们的主张 / What We Stand For",
      "title": "创作者，\n理应[[掌握]]自己的\n声浪。",
      "lede": "发行、结算、版权与听众——本该握在做音乐的人手里，而不是散落在十几个看不懂的后台。",
      "page": "04",
      "total": "82"
    }
  },
  {
    "key": "theme12_page009",
    "themeKey": "theme12",
    "pageNumber": 9,
    "layout": "THEME12-009",
    "slot": "stack",
    "label": "产品矩阵 / The Stack",
    "bgClass": "",
    "controls": [
      {
        "key": "cardCount",
        "label": "卡片数量",
        "type": "slider",
        "default": 4,
        "def": 4,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "展示的产品卡片数量",
        "publicKey": "cardCount",
        "publicLabel": "卡片数量",
        "description": "展示的产品卡片数量"
      },
      {
        "key": "columns",
        "label": "栏数",
        "type": "segment",
        "default": 2,
        "def": 2,
        "options": [
          {
            "value": 1,
            "label": "1 栏"
          },
          {
            "value": 2,
            "label": "2 栏"
          }
        ],
        "desc": "卡片网格的列数",
        "publicKey": "columns",
        "publicLabel": "栏数",
        "description": "卡片网格的列数"
      },
      {
        "key": "focus",
        "label": "重点强调",
        "type": "toggle",
        "default": false,
        "def": false,
        "desc": "高亮某一张卡片，弱化其余",
        "publicKey": "focus",
        "publicLabel": "重点强调",
        "description": "高亮某一张卡片，弱化其余"
      },
      {
        "key": "focusIndex",
        "label": "强调第几个",
        "type": "slider",
        "default": 1,
        "def": 1,
        "min": 1,
        "max": 4,
        "step": 1,
        "dependsOn": "focus",
        "desc": "被强调卡片的序号（1 起）",
        "publicKey": "focusIndex",
        "publicLabel": "强调第几个",
        "description": "被强调卡片的序号（1 起）"
      },
      {
        "key": "showLede",
        "label": "显示导语",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏顶部高亮短句",
        "publicKey": "showLede",
        "publicLabel": "显示导语",
        "description": "显示/隐藏顶部高亮短句"
      },
      {
        "key": "showDeco",
        "label": "显示装饰",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏卡片内的图形装饰",
        "publicKey": "showDeco",
        "publicLabel": "显示装饰",
        "description": "显示/隐藏卡片内的图形装饰"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#f15a29",
        "def": "#f15a29",
        "options": [
          "#f15a29",
          "#5a138e",
          "#3bb6ec",
          "#1f6b2a"
        ],
        "desc": "页脚等强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "页脚等强调色"
      }
    ],
    "defaultProps": {
      "accent": "#f15a29",
      "cardCount": 4,
      "columns": 2,
      "focus": false,
      "focusIndex": 1,
      "showLede": true,
      "showDeco": true,
      "barMeta": "05 — The Stack",
      "lede": "你只管[[写歌]]，发行 · 结算 · [[维权]]，[[声浪全包了]]。",
      "cards": [
        {
          "num": "01",
          "cn": "一键发行",
          "en": "Release",
          "body": "一次上传，自动分发到全球 30+ 流媒体平台，元数据与封面规格代为校验。",
          "tag": "30+ 平台"
        },
        {
          "num": "02",
          "cn": "粉丝直连",
          "en": "Direct",
          "body": "跳过算法与中间商，用专属页面与会员把听众沉淀为可经营的资产。",
          "tag": "0 中间商"
        },
        {
          "num": "03",
          "cn": "收益透明",
          "en": "Ledger",
          "body": "实时结算面板，按平台、地区、单曲拆解每一笔版税，路径可追溯。",
          "tag": "72h 到账"
        },
        {
          "num": "04",
          "cn": "版权护盾",
          "en": "Shield",
          "body": "作品自动登记存证，全网监测翻唱、采样与盗用，一键发起维权。",
          "tag": "全网监测"
        }
      ],
      "page": "05",
      "total": "82"
    }
  },
  {
    "key": "theme12_page010",
    "themeKey": "theme12",
    "pageNumber": 10,
    "layout": "THEME12-010",
    "slot": "bento",
    "label": "能力便当 / Capabilities",
    "bgClass": "",
    "controls": [
      {
        "key": "theme",
        "label": "配色",
        "type": "segment",
        "default": "light",
        "def": "light",
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
        "desc": "页面整体明暗配色",
        "publicKey": "theme",
        "publicLabel": "配色",
        "description": "页面整体明暗配色"
      },
      {
        "key": "tileCount",
        "label": "便当格数",
        "type": "slider",
        "default": 6,
        "def": 6,
        "min": 4,
        "max": 6,
        "step": 1,
        "desc": "便当网格中的格子数量",
        "publicKey": "tileCount",
        "publicLabel": "便当格数",
        "description": "便当网格中的格子数量"
      },
      {
        "key": "focus",
        "label": "重点强调",
        "type": "toggle",
        "default": false,
        "def": false,
        "desc": "高亮某一格，弱化其余",
        "publicKey": "focus",
        "publicLabel": "重点强调",
        "description": "高亮某一格，弱化其余"
      },
      {
        "key": "focusIndex",
        "label": "强调第几格",
        "type": "slider",
        "default": 1,
        "def": 1,
        "min": 1,
        "max": 6,
        "step": 1,
        "dependsOn": "focus",
        "desc": "被强调格子的序号（1 起）",
        "publicKey": "focusIndex",
        "publicLabel": "强调第几格",
        "description": "被强调格子的序号（1 起）"
      },
      {
        "key": "showDeco",
        "label": "显示装饰",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏格子内几何装饰",
        "publicKey": "showDeco",
        "publicLabel": "显示装饰",
        "description": "显示/隐藏格子内几何装饰"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#f15a29",
        "def": "#f15a29",
        "options": [
          "#f15a29",
          "#5a138e",
          "#3bb6ec",
          "#1f6b2a"
        ],
        "desc": "导语 / 焦点 / 页脚强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "导语 / 焦点 / 页脚强调色"
      }
    ],
    "defaultProps": {
      "accent": "#f15a29",
      "theme": "light",
      "tileCount": 6,
      "focus": false,
      "focusIndex": 1,
      "showDeco": true,
      "barMeta": "06 — Capabilities",
      "kicker": "能力便当 / Capabilities",
      "title": "一个工作台，[[全链路]]覆盖。",
      "lede": "从母带到结算，从听众到维权——把分散在十几个后台里的事，收进同一块面板。",
      "heroTags": [
        "30+ 平台",
        "0 中间商"
      ],
      "tiles": [
        {
          "cn": "一键发行",
          "en": "Release",
          "d": "一次上传，自动分发到全球 30+ 流媒体平台，元数据代为校验。",
          "kind": "hero"
        },
        {
          "cn": "透明结算",
          "en": "Ledger",
          "d": "按平台拆解每一笔版税。",
          "kind": "kpi",
          "kpi": "72h"
        },
        {
          "cn": "粉丝直连",
          "en": "Direct",
          "d": "专属页面把听众沉淀为资产。",
          "kind": "plain"
        },
        {
          "cn": "版权护盾",
          "en": "Shield",
          "d": "全网监测盗用，一键存证维权。",
          "kind": "plain"
        },
        {
          "cn": "协作分账",
          "en": "Splits",
          "d": "词曲编混按比例自动拆账。",
          "kind": "plain"
        },
        {
          "cn": "数据洞察",
          "en": "Insights",
          "d": "听众画像与趋势一目了然。",
          "kind": "plain"
        }
      ],
      "page": "06",
      "total": "82"
    }
  },
  {
    "key": "theme12_page011",
    "themeKey": "theme12",
    "pageNumber": 11,
    "layout": "THEME12-011",
    "slot": "process",
    "label": "流程 / How It Works",
    "bgClass": "",
    "controls": [
      {
        "key": "stepCount",
        "label": "步骤数量",
        "type": "slider",
        "default": 4,
        "def": 4,
        "min": 3,
        "max": 5,
        "step": 1,
        "desc": "流程展示的步骤数量",
        "publicKey": "stepCount",
        "publicLabel": "步骤数量",
        "description": "流程展示的步骤数量"
      },
      {
        "key": "focus",
        "label": "重点强调",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "把某一步提升为强调色卡片",
        "publicKey": "focus",
        "publicLabel": "重点强调",
        "description": "把某一步提升为强调色卡片"
      },
      {
        "key": "focusIndex",
        "label": "强调第几步",
        "type": "slider",
        "default": 4,
        "def": 4,
        "min": 1,
        "max": 5,
        "step": 1,
        "dependsOn": "focus",
        "desc": "被强调步骤的序号（1 起）",
        "publicKey": "focusIndex",
        "publicLabel": "强调第几步",
        "description": "被强调步骤的序号（1 起）"
      },
      {
        "key": "showConnector",
        "label": "连接箭头",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏步骤间的箭头",
        "publicKey": "showConnector",
        "publicLabel": "连接箭头",
        "description": "显示/隐藏步骤间的箭头"
      },
      {
        "key": "showLede",
        "label": "显示导语",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏标题区导语",
        "publicKey": "showLede",
        "publicLabel": "显示导语",
        "description": "显示/隐藏标题区导语"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#f15a29",
        "def": "#f15a29",
        "options": [
          "#f15a29",
          "#5a138e",
          "#3bb6ec",
          "#1f6b2a"
        ],
        "desc": "焦点卡 / 导语 / 页脚强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "焦点卡 / 导语 / 页脚强调色"
      }
    ],
    "defaultProps": {
      "accent": "#f15a29",
      "stepCount": 4,
      "focus": true,
      "focusIndex": 4,
      "showConnector": true,
      "showLede": true,
      "barMeta": "07 — How It Works",
      "kicker": "工作流 / How It Works",
      "title": "从一条 demo，到一笔[[到账]]。",
      "steps": [
        {
          "cn": "上传作品",
          "en": "Upload",
          "d": "拖入母带与封面，元数据自动校验合规。"
        },
        {
          "cn": "一键分发",
          "en": "Distribute",
          "d": "同步推送到全球 30+ 流媒体与商店。"
        },
        {
          "cn": "透明结算",
          "en": "Settle",
          "d": "版税按平台拆解，最快 72 小时到账。"
        },
        {
          "cn": "经营听众",
          "en": "Grow",
          "d": "把听众沉淀为可直连、可复购的资产。"
        },
        {
          "cn": "版权护盾",
          "en": "Protect",
          "d": "全网监测盗用，一键存证与维权。"
        }
      ],
      "page": "07",
      "total": "82"
    }
  },
  {
    "key": "theme12_page012",
    "themeKey": "theme12",
    "pageNumber": 12,
    "layout": "THEME12-012",
    "slot": "ecosystem",
    "label": "生态网络 / Ecosystem",
    "bgClass": "",
    "controls": [
      {
        "key": "nodeCount",
        "label": "节点数量",
        "type": "slider",
        "default": 6,
        "def": 6,
        "min": 3,
        "max": 6,
        "step": 1,
        "desc": "环绕中枢的能力节点数量",
        "publicKey": "nodeCount",
        "publicLabel": "节点数量",
        "description": "环绕中枢的能力节点数量"
      },
      {
        "key": "showConnectors",
        "label": "连接线",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏中枢到各节点的连线",
        "publicKey": "showConnectors",
        "publicLabel": "连接线",
        "description": "显示/隐藏中枢到各节点的连线"
      },
      {
        "key": "showCenter",
        "label": "中枢标签",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏中央中枢说明",
        "publicKey": "showCenter",
        "publicLabel": "中枢标签",
        "description": "显示/隐藏中央中枢说明"
      },
      {
        "key": "showNodeEn",
        "label": "英文副标",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏节点上的英文副标题",
        "publicKey": "showNodeEn",
        "publicLabel": "英文副标",
        "description": "显示/隐藏节点上的英文副标题"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#f15a29",
        "def": "#f15a29",
        "options": [
          "#f15a29",
          "#5a138e",
          "#3bb6ec",
          "#1f6b2a"
        ],
        "desc": "中枢 / 连线 / 页脚强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "中枢 / 连线 / 页脚强调色"
      }
    ],
    "defaultProps": {
      "accent": "#f15a29",
      "nodeCount": 6,
      "showConnectors": true,
      "showCenter": true,
      "showNodeEn": true,
      "barMeta": "08 — Ecosystem",
      "kicker": "生态网络 / Ecosystem",
      "title": "一个账户，\n接管[[每一环]]。",
      "intro": "分发、结算、粉丝、版权——不再散落在十几个后台。声浪把它们收进同一个中枢，彼此打通。",
      "moduleNote": "个模块 · 同一数据底座",
      "hubName": "声浪",
      "hubTitle": "OS",
      "hubSub": "ONE ACCOUNT",
      "nodes": [
        {
          "cn": "一键分发",
          "en": "Distribute"
        },
        {
          "cn": "版税结算",
          "en": "Royalties"
        },
        {
          "cn": "粉丝直连",
          "en": "Fans"
        },
        {
          "cn": "版权护盾",
          "en": "Rights"
        },
        {
          "cn": "数据洞察",
          "en": "Insights"
        },
        {
          "cn": "演出票务",
          "en": "Live"
        }
      ],
      "page": "08",
      "total": "82"
    }
  },
  {
    "key": "theme12_page013",
    "themeKey": "theme12",
    "pageNumber": 13,
    "layout": "THEME12-013",
    "slot": "orgchart",
    "label": "组织架构 / Structure",
    "bgClass": "",
    "controls": [
      {
        "key": "childCount",
        "label": "分支数量",
        "type": "slider",
        "default": 3,
        "def": 3,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "第二层分支节点数量",
        "publicKey": "childCount",
        "publicLabel": "分支数量",
        "description": "第二层分支节点数量"
      },
      {
        "key": "showLevel3",
        "label": "第三层",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏第三层叶子节点",
        "publicKey": "showLevel3",
        "publicLabel": "第三层",
        "description": "显示/隐藏第三层叶子节点"
      },
      {
        "key": "showLeafDesc",
        "label": "叶子说明",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏叶子节点下方说明",
        "publicKey": "showLeafDesc",
        "publicLabel": "叶子说明",
        "description": "显示/隐藏叶子节点下方说明"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#5a138e",
        "def": "#5a138e",
        "options": [
          "#5a138e",
          "#f15a29",
          "#3bb6ec",
          "#1f6b2a"
        ],
        "desc": "根节点 / 连线 / 页脚强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "根节点 / 连线 / 页脚强调色"
      }
    ],
    "defaultProps": {
      "accent": "#5a138e",
      "childCount": 3,
      "showLevel3": true,
      "showLeafDesc": true,
      "barMeta": "09 — Structure",
      "kicker": "组织架构 / Structure",
      "title": "一个内核，[[四面延展]]。",
      "rootTitle": "声浪 OS",
      "rootSub": "INDEPENDENT MUSIC CORE",
      "branches": [
        {
          "t": "创作者中台",
          "s": "CREATORS",
          "c": "#3bb6ec",
          "leaves": [
            [
              "发行",
              "一键多平台"
            ],
            [
              "结算",
              "72h 到账"
            ]
          ]
        },
        {
          "t": "版权中枢",
          "s": "RIGHTS",
          "c": "#1f6b2a",
          "leaves": [
            [
              "存证",
              "链上确权"
            ],
            [
              "授权",
              "全球清算"
            ]
          ]
        },
        {
          "t": "听众网络",
          "s": "AUDIENCE",
          "c": "#f15a29",
          "leaves": [
            [
              "订阅",
              "粉丝直连"
            ],
            [
              "现场",
              "票务联动"
            ]
          ]
        },
        {
          "t": "生态伙伴",
          "s": "PARTNERS",
          "c": "#c44ee0",
          "leaves": [
            [
              "平台",
              "30+ 渠道"
            ],
            [
              "品牌",
              "联合企划"
            ]
          ]
        }
      ],
      "page": "09",
      "total": "82"
    }
  },
  {
    "key": "theme12_page014",
    "themeKey": "theme12",
    "pageNumber": 14,
    "layout": "THEME12-014",
    "slot": "split",
    "label": "影像分栏 / Split",
    "bgClass": "",
    "controls": [
      {
        "key": "theme",
        "label": "配色",
        "type": "segment",
        "default": "dark",
        "def": "dark",
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
        "desc": "文字栏的明暗配色",
        "publicKey": "theme",
        "publicLabel": "配色",
        "description": "文字栏的明暗配色"
      },
      {
        "key": "imageSide",
        "label": "图片位置",
        "type": "segment",
        "default": "left",
        "def": "left",
        "options": [
          {
            "value": "left",
            "label": "靠左"
          },
          {
            "value": "right",
            "label": "靠右"
          }
        ],
        "desc": "大图位于左侧或右侧",
        "publicKey": "imageSide",
        "publicLabel": "图片位置",
        "description": "大图位于左侧或右侧"
      },
      {
        "key": "showCaption",
        "label": "骑缝图注",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏跨缝的图注小标签",
        "publicKey": "showCaption",
        "publicLabel": "骑缝图注",
        "description": "显示/隐藏跨缝的图注小标签"
      },
      {
        "key": "showStats",
        "label": "数据小行",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏标题下的数据小行",
        "publicKey": "showStats",
        "publicLabel": "数据小行",
        "description": "显示/隐藏标题下的数据小行"
      },
      {
        "key": "statCount",
        "label": "数据数量",
        "type": "slider",
        "default": 2,
        "def": 2,
        "min": 0,
        "max": 2,
        "step": 1,
        "dependsOn": "showStats",
        "desc": "标题下数据条目的数量",
        "publicKey": "itemCount",
        "publicLabel": "数据数量",
        "description": "标题下数据条目的数量"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#f15a29",
        "def": "#f15a29",
        "options": [
          "#f15a29",
          "#5a138e",
          "#3bb6ec",
          "#1f6b2a"
        ],
        "desc": "导语 / 图注 / 页脚强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "导语 / 图注 / 页脚强调色"
      }
    ],
    "defaultProps": {
      "accent": "#f15a29",
      "theme": "dark",
      "imageSide": "left",
      "showCaption": true,
      "showStats": true,
      "statCount": 2,
      "media": [],
      "ghostText": "09",
      "kicker": "创作者现场 / On Set",
      "title": "镜头之外，\n还有一整套[[系统]]\n在替你运转。",
      "intro": "当你在台上、在棚里、在路上，发行、结算与维权仍在后台无声完成。你只需要专注那一刻的表达。",
      "captionTag": "Live · 2026",
      "captionText": "声浪现场 / 巡演纪实",
      "mediaPlaceholder": "拖入整幅人物 / 现场大图",
      "stats": [
        {
          "v": "12k+",
          "lb": "入驻音乐人"
        },
        {
          "v": "¥2.4亿",
          "lb": "已发版税"
        }
      ],
      "page": "10",
      "total": "82"
    }
  },
  {
    "key": "theme12_page015",
    "themeKey": "theme12",
    "pageNumber": 15,
    "layout": "THEME12-015",
    "slot": "triptych",
    "label": "三联像 / Triptych",
    "bgClass": "",
    "controls": [
      {
        "key": "frameCount",
        "label": "画框数量",
        "type": "slider",
        "default": 3,
        "def": 3,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "竖向人像画框的数量",
        "publicKey": "frameCount",
        "publicLabel": "画框数量",
        "description": "竖向人像画框的数量"
      },
      {
        "key": "panelSide",
        "label": "标题面板",
        "type": "segment",
        "default": "left",
        "def": "left",
        "options": [
          {
            "value": "left",
            "label": "居左"
          },
          {
            "value": "right",
            "label": "居右"
          }
        ],
        "desc": "实色标题面板的位置",
        "publicKey": "panelSide",
        "publicLabel": "标题面板",
        "description": "实色标题面板的位置"
      },
      {
        "key": "theme",
        "label": "配色",
        "type": "segment",
        "default": "light",
        "def": "light",
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
        "desc": "页面整体明暗配色",
        "publicKey": "theme",
        "publicLabel": "配色",
        "description": "页面整体明暗配色"
      },
      {
        "key": "showCaptions",
        "label": "图注",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏每框下方图注",
        "publicKey": "showCaptions",
        "publicLabel": "图注",
        "description": "显示/隐藏每框下方图注"
      },
      {
        "key": "showIndex",
        "label": "序号角标",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏画框序号",
        "publicKey": "showIndex",
        "publicLabel": "序号角标",
        "description": "显示/隐藏画框序号"
      },
      {
        "key": "mediaFit",
        "label": "图片填充",
        "type": "segment",
        "default": "cover",
        "def": "cover",
        "options": [
          {
            "value": "cover",
            "label": "裁切"
          },
          {
            "value": "contain",
            "label": "完整"
          }
        ],
        "desc": "图片填充方式",
        "publicKey": "mediaFit",
        "publicLabel": "图片填充",
        "description": "图片填充方式"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#f15a29",
        "def": "#f15a29",
        "options": [
          "#f15a29",
          "#5a138e",
          "#3bb6ec",
          "#1f6b2a"
        ],
        "desc": "标题面板 / 高亮 / 页脚强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "标题面板 / 高亮 / 页脚强调色"
      }
    ],
    "defaultProps": {
      "accent": "#f15a29",
      "theme": "light",
      "frameCount": 3,
      "panelSide": "left",
      "showCaptions": true,
      "showIndex": true,
      "mediaFit": "cover",
      "media": [],
      "barMeta": "11 — Triptych",
      "panelKicker": "影像 / Faces",
      "panelTitle": "每一帧，\n都是一条[[声浪]]。",
      "panelText": "从录音棚的深夜，到结算页的那笔到账——创作的每个瞬间，都被同一块工作台接住。",
      "panelHint": "/ Frames · drag to fill",
      "mediaPlaceholder": "拖入人像",
      "captions": [
        {
          "cn": "录音棚",
          "en": "Studio · 02:14 AM"
        },
        {
          "cn": "巡演路上",
          "en": "On Tour · Berlin"
        },
        {
          "cn": "结算页",
          "en": "Payout · +¥8,420"
        },
        {
          "cn": "后台",
          "en": "Backstage · Live"
        }
      ],
      "page": "11",
      "total": "82"
    }
  },
  {
    "key": "theme12_page016",
    "themeKey": "theme12",
    "pageNumber": 16,
    "layout": "THEME12-016",
    "slot": "layers",
    "label": "叠影 / Layered",
    "bgClass": "",
    "controls": [
      {
        "key": "mediaCount",
        "label": "图片数量",
        "type": "slider",
        "default": 3,
        "def": 3,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "叠放的照片数量",
        "publicKey": "mediaCount",
        "publicLabel": "图片数量",
        "description": "叠放的照片数量"
      },
      {
        "key": "spread",
        "label": "错位间距",
        "type": "slider",
        "default": 64,
        "def": 64,
        "min": 24,
        "max": 110,
        "step": 2,
        "desc": "相邻照片之间的错位距离",
        "publicKey": "spread",
        "publicLabel": "错位间距",
        "description": "相邻照片之间的错位距离"
      },
      {
        "key": "tilt",
        "label": "倾斜角度",
        "type": "slider",
        "default": 5,
        "def": 5,
        "min": 0,
        "max": 12,
        "step": 1,
        "desc": "照片的倾斜强度",
        "publicKey": "tilt",
        "publicLabel": "倾斜角度",
        "description": "照片的倾斜强度"
      },
      {
        "key": "showFrame",
        "label": "白边相纸",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "为照片添加白色相纸边框",
        "publicKey": "showFrame",
        "publicLabel": "白边相纸",
        "description": "为照片添加白色相纸边框"
      },
      {
        "key": "showCaptions",
        "label": "编号角标",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏照片编号角标",
        "publicKey": "showCaptions",
        "publicLabel": "编号角标",
        "description": "显示/隐藏照片编号角标"
      },
      {
        "key": "mediaFit",
        "label": "图片填充",
        "type": "segment",
        "default": "cover",
        "def": "cover",
        "options": [
          {
            "value": "cover",
            "label": "裁切"
          },
          {
            "value": "contain",
            "label": "完整"
          }
        ],
        "desc": "图片的填充方式",
        "publicKey": "mediaFit",
        "publicLabel": "图片填充",
        "description": "图片的填充方式"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#f15a29",
        "def": "#f15a29",
        "options": [
          "#f15a29",
          "#5a138e",
          "#3bb6ec",
          "#1f6b2a"
        ],
        "desc": "标题 / 角标强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "标题 / 角标强调色"
      }
    ],
    "defaultProps": {
      "accent": "#f15a29",
      "mediaCount": 3,
      "spread": 64,
      "tilt": 5,
      "showFrame": true,
      "showCaptions": true,
      "mediaFit": "cover",
      "media": [],
      "brand": "声浪 SOUNDWAVE",
      "kicker": "叠影 / Layered",
      "title": "一沓[[现场]]，\n摞成一年。",
      "intro": "把巡演、排练、后台的瞬间一张张叠起来——这就是声浪记录的、属于你的现场档案。",
      "hint": "Drag to fill",
      "frameBrand": "SOUNDWAVE",
      "mediaPlaceholder": "拖入图片",
      "page": "12",
      "total": "82"
    }
  },
  {
    "key": "theme12_page017",
    "themeKey": "theme12",
    "pageNumber": 17,
    "layout": "THEME12-017",
    "slot": "magazine",
    "label": "杂志特写 / Magazine",
    "bgClass": "",
    "controls": [
      {
        "key": "imageSide",
        "label": "图片位置",
        "type": "segment",
        "default": "left",
        "def": "left",
        "options": [
          {
            "value": "left",
            "label": "居左"
          },
          {
            "value": "right",
            "label": "居右"
          }
        ],
        "desc": "特写大图所在的一侧",
        "publicKey": "imageSide",
        "publicLabel": "图片位置",
        "description": "特写大图所在的一侧"
      },
      {
        "key": "theme",
        "label": "配色",
        "type": "segment",
        "default": "light",
        "def": "light",
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
        "desc": "页面整体明暗配色",
        "publicKey": "theme",
        "publicLabel": "配色",
        "description": "页面整体明暗配色"
      },
      {
        "key": "showDropCap",
        "label": "首字下沉",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "正文首字母放大下沉",
        "publicKey": "showDropCap",
        "publicLabel": "首字下沉",
        "description": "正文首字母放大下沉"
      },
      {
        "key": "showPullQuote",
        "label": "引文条",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏彩色引文条",
        "publicKey": "showPullQuote",
        "publicLabel": "引文条",
        "description": "显示/隐藏彩色引文条"
      },
      {
        "key": "mediaFit",
        "label": "图片填充",
        "type": "segment",
        "default": "cover",
        "def": "cover",
        "options": [
          {
            "value": "cover",
            "label": "裁切"
          },
          {
            "value": "contain",
            "label": "完整"
          }
        ],
        "desc": "图片填充方式",
        "publicKey": "mediaFit",
        "publicLabel": "图片填充",
        "description": "图片填充方式"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#f15a29",
        "def": "#f15a29",
        "options": [
          "#f15a29",
          "#5a138e",
          "#3bb6ec",
          "#1f6b2a"
        ],
        "desc": "首字 / 引文 / 页脚强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "首字 / 引文 / 页脚强调色"
      }
    ],
    "defaultProps": {
      "accent": "#f15a29",
      "theme": "light",
      "imageSide": "left",
      "showDropCap": true,
      "showPullQuote": true,
      "mediaFit": "cover",
      "media": [],
      "barMeta": "13 — Magazine",
      "imageTag": "FEATURE · 2026",
      "kicker": "封面故事 / Cover Story",
      "title": "一个人，\n也能撑起\n一座厂牌。",
      "dropCap": "声",
      "body": "浪把发行、结算、版权与粉丝运营收拢进同一块工作台。曾经需要一整个团队、十几个后台才能跑通的事，如今一个人、一块屏幕就能完成——而且每一分收益的来处，都看得见。",
      "pullQuote": "“工具退场，创作者才是主角。”",
      "mediaPlaceholder": "拖入特写大图 / Feature image",
      "page": "13",
      "total": "82"
    }
  },
  {
    "key": "theme12_page018",
    "themeKey": "theme12",
    "pageNumber": 18,
    "layout": "THEME12-018",
    "slot": "editorial",
    "label": "图文交错 / Editorial",
    "bgClass": "",
    "controls": [
      {
        "key": "rowCount",
        "label": "段落数",
        "type": "slider",
        "default": 3,
        "def": 3,
        "min": 2,
        "max": 3,
        "step": 1,
        "desc": "交错的图文段落数量",
        "publicKey": "rowCount",
        "publicLabel": "段落数",
        "description": "交错的图文段落数量"
      },
      {
        "key": "imageSide",
        "label": "首段图片侧",
        "type": "segment",
        "default": "left",
        "def": "left",
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
        "desc": "第一段图片在左还是右（逐段交替）",
        "publicKey": "imageSide",
        "publicLabel": "首段图片侧",
        "description": "第一段图片在左还是右（逐段交替）"
      },
      {
        "key": "showNumbers",
        "label": "段落编号",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏每段的大编号",
        "publicKey": "showNumbers",
        "publicLabel": "段落编号",
        "description": "显示/隐藏每段的大编号"
      },
      {
        "key": "showCaption",
        "label": "段落正文",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏每段说明文字",
        "publicKey": "showCaption",
        "publicLabel": "段落正文",
        "description": "显示/隐藏每段说明文字"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#f15a29",
        "def": "#f15a29",
        "options": [
          "#f15a29",
          "#5a138e",
          "#3bb6ec",
          "#1f6b2a"
        ],
        "desc": "导语 / 编号 / 页脚强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "导语 / 编号 / 页脚强调色"
      }
    ],
    "defaultProps": {
      "accent": "#f15a29",
      "rowCount": 3,
      "imageSide": "left",
      "showNumbers": true,
      "showCaption": true,
      "media": [],
      "barMeta": "14 — Editorial",
      "kicker": "创作日常 / A Day in the Work",
      "title": "一首歌的[[三个现场]]，同一块屏幕。",
      "bands": [
        {
          "k": "录音棚 / Studio",
          "t": "一条 demo 的开始",
          "d": "在房间里按下录音键的那一刻，声浪就已经在记账——拆轨、版本、灵感来源，自动归档。"
        },
        {
          "k": "舞台 / Stage",
          "t": "让现场被听见",
          "d": "从 Livehouse 到音乐节，一个页面同步票务、点歌与打赏，演出结束即生成结算单。"
        },
        {
          "k": "结算 / Payout",
          "t": "把收入握在手里",
          "d": "全网版税 72 小时透明到账，每一分钱都能追溯到那一首歌、那一场演出。"
        }
      ],
      "page": "14",
      "total": "82"
    }
  },
  {
    "key": "theme12_page019",
    "themeKey": "theme12",
    "pageNumber": 19,
    "layout": "THEME12-019",
    "slot": "showcase",
    "label": "图片页 / In Context",
    "bgClass": "",
    "controls": [
      {
        "key": "mediaCount",
        "label": "图片数量",
        "type": "slider",
        "default": 3,
        "def": 3,
        "min": 0,
        "max": 5,
        "step": 1,
        "desc": "图片槽数量；0=纯文字版式，1=按原图比例自适应主图，2–5=自动排布的画廊",
        "publicKey": "mediaCount",
        "publicLabel": "图片数量",
        "description": "图片槽数量；0=纯文字版式，1=按原图比例自适应主图，2–5=自动排布的画廊"
      },
      {
        "key": "mediaFit",
        "label": "图片填充",
        "type": "segment",
        "default": "cover",
        "def": "cover",
        "options": [
          {
            "value": "cover",
            "label": "裁切"
          },
          {
            "value": "contain",
            "label": "完整"
          }
        ],
        "dependsOn": "mediaCount",
        "desc": "多图时图片的填充方式",
        "publicKey": "mediaFit",
        "publicLabel": "图片填充",
        "description": "多图时图片的填充方式"
      },
      {
        "key": "showCaption",
        "label": "显示图注",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏左栏图注说明",
        "publicKey": "showCaption",
        "publicLabel": "显示图注",
        "description": "显示/隐藏左栏图注说明"
      },
      {
        "key": "showDecorations",
        "label": "显示装饰",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏编号角标装饰",
        "publicKey": "showDecorations",
        "publicLabel": "显示装饰",
        "description": "显示/隐藏编号角标装饰"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#f15a29",
        "def": "#f15a29",
        "options": [
          "#f15a29",
          "#5a138e",
          "#3bb6ec",
          "#1f6b2a"
        ],
        "desc": "导语 / 角标 / 页脚强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "导语 / 角标 / 页脚强调色"
      }
    ],
    "defaultProps": {
      "accent": "#f15a29",
      "mediaCount": 3,
      "mediaFit": "cover",
      "showCaption": true,
      "showDecorations": true,
      "media": [],
      "barMeta": "15 — In Context",
      "kicker": "现场 / In Context",
      "title": "声浪，长在\n创作者的[[日常]]里。",
      "caption": "从录音棚到结算页，从一条 demo 到一笔到账——把创作的每一个现场，收进同一块屏幕。",
      "hint": "/ Frames · drag to fill",
      "mediaPlaceholderHero": "拖入主图 / Hero image",
      "mediaPlaceholder": "拖入图片",
      "page": "15",
      "total": "82"
    }
  },
  {
    "key": "theme12_page020",
    "themeKey": "theme12",
    "pageNumber": 20,
    "layout": "THEME12-020",
    "slot": "hero",
    "label": "整版大图 / On Stage",
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
        "key": "overlayPosition",
        "label": "文案位置",
        "type": "segment",
        "default": "bottom-left",
        "def": "bottom-left",
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
            "value": "left",
            "label": "左侧"
          }
        ],
        "desc": "叠加文案面板的位置",
        "publicKey": "overlayPosition",
        "publicLabel": "文案位置",
        "description": "叠加文案面板的位置"
      },
      {
        "key": "scrim",
        "label": "蒙版",
        "type": "segment",
        "default": "dark",
        "def": "dark",
        "options": [
          {
            "value": "dark",
            "label": "暗"
          },
          {
            "value": "light",
            "label": "亮"
          }
        ],
        "desc": "叠加渐变蒙版的明暗",
        "publicKey": "scrim",
        "publicLabel": "蒙版",
        "description": "叠加渐变蒙版的明暗"
      },
      {
        "key": "mediaFit",
        "label": "图片填充",
        "type": "segment",
        "default": "cover",
        "def": "cover",
        "options": [
          {
            "value": "cover",
            "label": "裁切"
          },
          {
            "value": "contain",
            "label": "完整"
          }
        ],
        "desc": "整版大图的填充方式",
        "publicKey": "mediaFit",
        "publicLabel": "图片填充",
        "description": "整版大图的填充方式"
      },
      {
        "key": "showStats",
        "label": "数据标签",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏底部数据标签",
        "publicKey": "showStats",
        "publicLabel": "数据标签",
        "description": "显示/隐藏底部数据标签"
      },
      {
        "key": "statCount",
        "label": "标签数量",
        "type": "slider",
        "default": 3,
        "def": 3,
        "min": 0,
        "max": 3,
        "step": 1,
        "dependsOn": "showStats",
        "desc": "数据标签的数量",
        "publicKey": "statCount",
        "publicLabel": "标签数量",
        "description": "数据标签的数量"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#f15a29",
        "def": "#f15a29",
        "options": [
          "#f15a29",
          "#5a138e",
          "#3bb6ec",
          "#1f6b2a"
        ],
        "desc": "高亮 / 标签 / 页码强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "高亮 / 标签 / 页码强调色"
      }
    ],
    "defaultProps": {
      "accent": "#f15a29",
      "backgroundMode": "unicorn",
      "unicornScene": "automations",
      "mediaFit": "cover",
      "overlayPosition": "bottom-left",
      "scrim": "dark",
      "showStats": true,
      "statCount": 3,
      "media": [],
      "brand": "声浪 SOUNDWAVE",
      "metaLine": "06 — On Stage",
      "kicker": "现场 / On Stage",
      "title": "声音从这里，\n传向[[世界]]。",
      "lede": "把舞台、录音棚与结算页连成一条线——你只负责创作，剩下的交给声浪。",
      "mediaPlaceholder": "拖入整版大图 / Drop a full-bleed image",
      "chips": [
        {
          "v": "30+",
          "lb": "分发平台"
        },
        {
          "v": "72h",
          "lb": "版税到账"
        },
        {
          "v": "0%",
          "lb": "首季分成"
        }
      ],
      "page": "16",
      "total": "82"
    }
  },
  {
    "key": "theme12_page021",
    "themeKey": "theme12",
    "pageNumber": 21,
    "layout": "THEME12-021",
    "slot": "cover",
    "label": "杂志封面 / Cover",
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
        "key": "mediaFit",
        "label": "图片填充",
        "type": "segment",
        "default": "cover",
        "def": "cover",
        "options": [
          {
            "value": "cover",
            "label": "裁切"
          },
          {
            "value": "contain",
            "label": "完整"
          }
        ],
        "desc": "封面大图填充方式",
        "publicKey": "mediaFit",
        "publicLabel": "图片填充",
        "description": "封面大图填充方式"
      },
      {
        "key": "showCoverLines",
        "label": "封面导语",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏两侧封面文案",
        "publicKey": "showCoverLines",
        "publicLabel": "封面导语",
        "description": "显示/隐藏两侧封面文案"
      },
      {
        "key": "showBarcode",
        "label": "刊号条码",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏角落刊号条码",
        "publicKey": "showBarcode",
        "publicLabel": "刊号条码",
        "description": "显示/隐藏角落刊号条码"
      },
      {
        "key": "mastheadFill",
        "label": "刊头实底",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "刊头使用实色块或描边样式",
        "publicKey": "mastheadFill",
        "publicLabel": "刊头实底",
        "description": "刊头使用实色块或描边样式"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#f15a29",
        "def": "#f15a29",
        "options": [
          "#f15a29",
          "#d61fb5",
          "#3bb6ec",
          "#baf04f"
        ],
        "desc": "刊头 / 导语高亮 / 条码强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "刊头 / 导语高亮 / 条码强调色"
      }
    ],
    "defaultProps": {
      "accent": "#f15a29",
      "backgroundMode": "unicorn",
      "unicornScene": "moving",
      "mediaFit": "cover",
      "showCoverLines": true,
      "showBarcode": true,
      "mastheadFill": true,
      "media": [],
      "titleCn": "声浪",
      "titleEn": "SOUNDWAVE",
      "issueLine": "ISSUE 04 · 夏 / 2026 · ¥0 永远免费",
      "barcodeLabel": "SW 04 2026",
      "mediaPlaceholder": "拖入封面人物大图 / Cover portrait",
      "linesL": [
        {
          "big": "独立厂牌",
          "small": "一个人撑起一座厂牌的 12 种方式"
        },
        {
          "big": "版税透明",
          "small": "每一分钱，看得见来处"
        }
      ],
      "linesR": [
        {
          "big": "现场复兴",
          "small": "小场地里，正在发生的大事"
        }
      ],
      "page": "17",
      "total": "82"
    }
  },
  {
    "key": "theme12_page022",
    "themeKey": "theme12",
    "pageNumber": 22,
    "layout": "THEME12-022",
    "slot": "fullbleed",
    "label": "满版出血 / Full Bleed",
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
        "key": "cardCorner",
        "label": "文字卡位置",
        "type": "segment",
        "default": "bl",
        "def": "bl",
        "options": [
          {
            "value": "bl",
            "label": "左下"
          },
          {
            "value": "br",
            "label": "右下"
          },
          {
            "value": "tl",
            "label": "左上"
          },
          {
            "value": "tr",
            "label": "右上"
          }
        ],
        "desc": "实色文字卡所在的画面角落",
        "publicKey": "cardCorner",
        "publicLabel": "文字卡位置",
        "description": "实色文字卡所在的画面角落"
      },
      {
        "key": "showScrim",
        "label": "压暗渐变",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "文字卡后的压暗渐变，提升可读性",
        "publicKey": "showScrim",
        "publicLabel": "压暗渐变",
        "description": "文字卡后的压暗渐变，提升可读性"
      },
      {
        "key": "showCaption",
        "label": "副文案",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏卡片副文案",
        "publicKey": "showCaption",
        "publicLabel": "副文案",
        "description": "显示/隐藏卡片副文案"
      },
      {
        "key": "showShapes",
        "label": "几何装饰",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏漂浮的几何装饰",
        "publicKey": "showShapes",
        "publicLabel": "几何装饰",
        "description": "显示/隐藏漂浮的几何装饰"
      },
      {
        "key": "mediaFit",
        "label": "图片填充",
        "type": "segment",
        "default": "cover",
        "def": "cover",
        "options": [
          {
            "value": "cover",
            "label": "裁切"
          },
          {
            "value": "contain",
            "label": "完整"
          }
        ],
        "desc": "图片填充方式",
        "publicKey": "mediaFit",
        "publicLabel": "图片填充",
        "description": "图片填充方式"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#f15a29",
        "def": "#f15a29",
        "options": [
          "#f15a29",
          "#5a138e",
          "#3bb6ec",
          "#1f6b2a"
        ],
        "desc": "文字卡 / 高亮 / 角标强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "文字卡 / 高亮 / 角标强调色"
      }
    ],
    "defaultProps": {
      "accent": "#f15a29",
      "cardCorner": "bl",
      "showScrim": true,
      "showCaption": true,
      "showShapes": true,
      "backgroundMode": "unicorn",
      "unicornScene": "goey",
      "mediaFit": "cover",
      "media": [],
      "brand": "声浪 SOUNDWAVE",
      "metaLine": "13 — Full Bleed",
      "kicker": "现场 / In The Wild",
      "title": "声音发生的\n[[地方]]。",
      "caption": "每一张照片背后，是一个正在用声浪经营自己事业的创作者。",
      "mediaPlaceholder": "拖入整版大图 / Full-bleed image",
      "page": "18",
      "total": "82"
    }
  },
  {
    "key": "theme12_page023",
    "themeKey": "theme12",
    "pageNumber": 23,
    "layout": "THEME12-023",
    "slot": "billboard",
    "label": "灯箱海报 / Lightbox",
    "bgClass": "",
    "controls": [
      {
        "key": "mediaFit",
        "label": "图片填充",
        "type": "segment",
        "default": "cover",
        "def": "cover",
        "options": [
          {
            "value": "cover",
            "label": "裁切"
          },
          {
            "value": "contain",
            "label": "完整"
          }
        ],
        "desc": "海报图填充方式",
        "publicKey": "mediaFit",
        "publicLabel": "图片填充",
        "description": "海报图填充方式"
      },
      {
        "key": "showSpotlights",
        "label": "射灯",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏顶部射灯与光晕",
        "publicKey": "showSpotlights",
        "publicLabel": "射灯",
        "description": "显示/隐藏顶部射灯与光晕"
      },
      {
        "key": "showBrandStrip",
        "label": "品牌条",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏灯箱顶部品牌条",
        "publicKey": "showBrandStrip",
        "publicLabel": "品牌条",
        "description": "显示/隐藏灯箱顶部品牌条"
      },
      {
        "key": "showCaption",
        "label": "位置说明",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏底部投放位置说明",
        "publicKey": "showCaption",
        "publicLabel": "位置说明",
        "description": "显示/隐藏底部投放位置说明"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#f15a29",
        "def": "#f15a29",
        "options": [
          "#f15a29",
          "#5a138e",
          "#3bb6ec",
          "#1f6b2a"
        ],
        "desc": "灯箱边框 / 品牌条 / 页脚强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "灯箱边框 / 品牌条 / 页脚强调色"
      }
    ],
    "defaultProps": {
      "accent": "#f15a29",
      "mediaFit": "cover",
      "showSpotlights": true,
      "showBrandStrip": true,
      "showCaption": true,
      "media": [],
      "barMeta": "19 — Lightbox",
      "brand": "声浪 SOUNDWAVE",
      "brandTag": "NOW PLAYING · 2026",
      "caption": "城市中心 · 户外灯箱 6m × 3m · OUT-OF-HOME",
      "mediaPlaceholder": "拖入投放主视觉 / Campaign key visual",
      "page": "19",
      "total": "82"
    }
  },
  {
    "key": "theme12_page024",
    "themeKey": "theme12",
    "pageNumber": 24,
    "layout": "THEME12-024",
    "slot": "panorama",
    "label": "全景宽幅 / Panorama",
    "bgClass": "",
    "controls": [
      {
        "key": "mediaCount",
        "label": "图片数量",
        "type": "slider",
        "default": 1,
        "def": 1,
        "min": 1,
        "max": 2,
        "step": 1,
        "desc": "1=单张全景，2=左右拼接全景",
        "publicKey": "mediaCount",
        "publicLabel": "图片数量",
        "description": "1=单张全景，2=左右拼接全景"
      },
      {
        "key": "mediaFit",
        "label": "图片填充",
        "type": "segment",
        "default": "cover",
        "def": "cover",
        "options": [
          {
            "value": "cover",
            "label": "裁切"
          },
          {
            "value": "contain",
            "label": "完整"
          }
        ],
        "desc": "图片填充方式",
        "publicKey": "mediaFit",
        "publicLabel": "图片填充",
        "description": "图片填充方式"
      },
      {
        "key": "showMeta",
        "label": "信息条",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏图片下方的事实条",
        "publicKey": "showMeta",
        "publicLabel": "信息条",
        "description": "显示/隐藏图片下方的事实条"
      },
      {
        "key": "metaCount",
        "label": "事实条数",
        "type": "slider",
        "default": 3,
        "def": 3,
        "min": 2,
        "max": 3,
        "step": 1,
        "dependsOn": "showMeta",
        "desc": "事实条目数量",
        "publicKey": "itemCount",
        "publicLabel": "事实条数",
        "description": "事实条目数量"
      },
      {
        "key": "showCaption",
        "label": "图注",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏图片下方图注",
        "publicKey": "showCaption",
        "publicLabel": "图注",
        "description": "显示/隐藏图片下方图注"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#3bb6ec",
        "def": "#3bb6ec",
        "options": [
          "#3bb6ec",
          "#f15a29",
          "#5a138e",
          "#1f6b2a"
        ],
        "desc": "标题侧栏 / 事实 / 页脚强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "标题侧栏 / 事实 / 页脚强调色"
      }
    ],
    "defaultProps": {
      "accent": "#3bb6ec",
      "mediaCount": 1,
      "mediaFit": "cover",
      "showMeta": true,
      "metaCount": 3,
      "showCaption": true,
      "media": [],
      "barMeta": "20 — Panorama",
      "kicker": "巡演现场 / On Tour",
      "title": "一整片\n[[声浪]]，\n铺满全场。",
      "caption": "把横跨数城的现场，收进同一条时间线。",
      "mediaPlaceholder": "拖入全景照片 / Panorama",
      "facts": [
        {
          "v": "32",
          "u": "城市巡演 Cities"
        },
        {
          "v": "180+",
          "u": "现场场次 Shows"
        },
        {
          "v": "¥0",
          "u": "场地抽成 Venue cut"
        }
      ],
      "page": "20",
      "total": "82"
    }
  },
  {
    "key": "theme12_page025",
    "themeKey": "theme12",
    "pageNumber": 25,
    "layout": "THEME12-025",
    "slot": "polaroid",
    "label": "拍立得 / Polaroid",
    "bgClass": "",
    "controls": [
      {
        "key": "photoCount",
        "label": "照片数量",
        "type": "slider",
        "default": 4,
        "def": 4,
        "min": 3,
        "max": 5,
        "step": 1,
        "desc": "拍立得照片的数量",
        "publicKey": "photoCount",
        "publicLabel": "照片数量",
        "description": "拍立得照片的数量"
      },
      {
        "key": "scatter",
        "label": "随意散落",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "开启倾斜散落 / 关闭则整齐排布",
        "publicKey": "scatter",
        "publicLabel": "随意散落",
        "description": "开启倾斜散落 / 关闭则整齐排布"
      },
      {
        "key": "theme",
        "label": "配色",
        "type": "segment",
        "default": "light",
        "def": "light",
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
        "desc": "页面整体明暗配色",
        "publicKey": "theme",
        "publicLabel": "配色",
        "description": "页面整体明暗配色"
      },
      {
        "key": "showCaptions",
        "label": "手写图注",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏照片下方说明",
        "publicKey": "showCaptions",
        "publicLabel": "手写图注",
        "description": "显示/隐藏照片下方说明"
      },
      {
        "key": "mediaFit",
        "label": "图片填充",
        "type": "segment",
        "default": "cover",
        "def": "cover",
        "options": [
          {
            "value": "cover",
            "label": "裁切"
          },
          {
            "value": "contain",
            "label": "完整"
          }
        ],
        "desc": "图片填充方式",
        "publicKey": "mediaFit",
        "publicLabel": "图片填充",
        "description": "图片填充方式"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#f15a29",
        "def": "#f15a29",
        "options": [
          "#f15a29",
          "#5a138e",
          "#3bb6ec",
          "#1f6b2a"
        ],
        "desc": "标题块 / 高亮 / 页脚强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "标题块 / 高亮 / 页脚强调色"
      }
    ],
    "defaultProps": {
      "accent": "#f15a29",
      "theme": "light",
      "photoCount": 4,
      "scatter": true,
      "showCaptions": true,
      "mediaFit": "cover",
      "media": [],
      "barMeta": "21 — Polaroid",
      "kicker": "影像手账 / Snapshots",
      "title": "把高光\n一张张[[钉]]下来。",
      "intro": "不是冷冰冰的数据，而是一个个真实的瞬间——这才是创作者经营事业的样子。",
      "hint": "shots · drag to fill",
      "captions": [
        "首演之夜",
        "深夜母带",
        "签售现场",
        "巡演后台",
        "排练室"
      ],
      "mediaPlaceholder": "拖入",
      "page": "21",
      "total": "82"
    }
  },
  {
    "key": "theme12_page026",
    "themeKey": "theme12",
    "pageNumber": 26,
    "layout": "THEME12-026",
    "slot": "postcard",
    "label": "明信片 / Postcard",
    "bgClass": "",
    "controls": [
      {
        "key": "imageSide",
        "label": "照片位置",
        "type": "segment",
        "default": "left",
        "def": "left",
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
        "desc": "照片所在的一侧",
        "publicKey": "imageSide",
        "publicLabel": "照片位置",
        "description": "照片所在的一侧"
      },
      {
        "key": "showStamp",
        "label": "邮票槽",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏邮票占位（可拖入图片）",
        "publicKey": "showStamp",
        "publicLabel": "邮票槽",
        "description": "显示/隐藏邮票占位（可拖入图片）"
      },
      {
        "key": "showPostmark",
        "label": "邮戳",
        "type": "toggle",
        "default": true,
        "def": true,
        "dependsOn": "showStamp",
        "desc": "邮票上的圆形邮戳",
        "publicKey": "showPostmark",
        "publicLabel": "邮戳",
        "description": "邮票上的圆形邮戳"
      },
      {
        "key": "showDivider",
        "label": "分隔竖线",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "信息区与地址区之间的竖线",
        "publicKey": "showDivider",
        "publicLabel": "分隔竖线",
        "description": "信息区与地址区之间的竖线"
      },
      {
        "key": "mediaFit",
        "label": "图片填充",
        "type": "segment",
        "default": "cover",
        "def": "cover",
        "options": [
          {
            "value": "cover",
            "label": "裁切"
          },
          {
            "value": "contain",
            "label": "完整"
          }
        ],
        "desc": "照片的填充方式",
        "publicKey": "mediaFit",
        "publicLabel": "图片填充",
        "description": "照片的填充方式"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#f15a29",
        "def": "#f15a29",
        "options": [
          "#f15a29",
          "#5a138e",
          "#3bb6ec",
          "#1f6b2a"
        ],
        "desc": "邮戳 / 标记 / 页脚强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "邮戳 / 标记 / 页脚强调色"
      }
    ],
    "defaultProps": {
      "accent": "#f15a29",
      "imageSide": "left",
      "showStamp": true,
      "showPostmark": true,
      "showDivider": true,
      "mediaFit": "cover",
      "media": [],
      "barMeta": "22 — Postcard",
      "photoTag": "Greetings from 现场",
      "eyebrow": "Post Card",
      "title": "每一站都想\n写信告诉你。",
      "message": "台上三分钟，台下一整年。把这张寄给那个最初按下录音键的自己——你做到了，而且才刚开始。",
      "postmark": {
        "name": "声浪邮政",
        "year": "2026",
        "foot": "LIVE · 现场"
      },
      "mediaPlaceholder": "拖入风景 / 现场照片",
      "stampPlaceholder": "邮票",
      "addr": [
        "致 — 所有还在等被听见的人",
        "声浪邮局 · 独立音乐 OS",
        "中国 · 任何有现场的地方"
      ],
      "page": "22",
      "total": "82"
    }
  },
  {
    "key": "theme12_page027",
    "themeKey": "theme12",
    "pageNumber": 27,
    "layout": "THEME12-027",
    "slot": "ticket",
    "label": "票根 / Ticket Stub",
    "bgClass": "",
    "controls": [
      {
        "key": "theme",
        "label": "配色",
        "type": "segment",
        "default": "dark",
        "def": "dark",
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
        "desc": "票面整体明暗配色",
        "publicKey": "theme",
        "publicLabel": "配色",
        "description": "票面整体明暗配色"
      },
      {
        "key": "mediaFit",
        "label": "图片填充",
        "type": "segment",
        "default": "cover",
        "def": "cover",
        "options": [
          {
            "value": "cover",
            "label": "裁切"
          },
          {
            "value": "contain",
            "label": "完整"
          }
        ],
        "desc": "主图的填充方式",
        "publicKey": "mediaFit",
        "publicLabel": "图片填充",
        "description": "主图的填充方式"
      },
      {
        "key": "showPerforation",
        "label": "撕裂齿孔",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏票根之间的撕裂虚线",
        "publicKey": "showPerforation",
        "publicLabel": "撕裂齿孔",
        "description": "显示/隐藏票根之间的撕裂虚线"
      },
      {
        "key": "showBarcode",
        "label": "条形码",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏存根下方的条形码",
        "publicKey": "showBarcode",
        "publicLabel": "条形码",
        "description": "显示/隐藏存根下方的条形码"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#f15a29",
        "def": "#f15a29",
        "options": [
          "#f15a29",
          "#5a138e",
          "#3bb6ec",
          "#1f6b2a"
        ],
        "desc": "票面边条 / 存根 / 页脚强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "票面边条 / 存根 / 页脚强调色"
      }
    ],
    "defaultProps": {
      "accent": "#f15a29",
      "theme": "dark",
      "mediaFit": "cover",
      "showPerforation": true,
      "showBarcode": true,
      "media": [],
      "barMeta": "23 — Ticket Stub",
      "admitLabel": "ADMIT ONE · 声浪现场",
      "title": "声浪巡演\n2026 夏",
      "stubLabel": "STUB · 存根",
      "stubNo": "NO. 0426",
      "barcodeLabel": "SW · 0620 · 2026",
      "mediaPlaceholder": "拖入演出主视觉 / Live artwork",
      "stub": [
        {
          "k": "DATE",
          "v": "2026.06.20"
        },
        {
          "k": "DOORS",
          "v": "19:30"
        },
        {
          "k": "VENUE",
          "v": "声浪现场 LIVEHOUSE"
        },
        {
          "k": "CITY",
          "v": "上海 · SHANGHAI"
        },
        {
          "k": "SEAT",
          "v": "GA — STANDING"
        }
      ],
      "page": "23",
      "total": "82"
    }
  },
  {
    "key": "theme12_page028",
    "themeKey": "theme12",
    "pageNumber": 28,
    "layout": "THEME12-028",
    "slot": "filmstrip",
    "label": "胶片样张 / Contact Sheet",
    "bgClass": "",
    "controls": [
      {
        "key": "mediaCount",
        "label": "画格数量",
        "type": "slider",
        "default": 4,
        "def": 4,
        "min": 3,
        "max": 5,
        "step": 1,
        "desc": "胶片中的画格数量",
        "publicKey": "mediaCount",
        "publicLabel": "画格数量",
        "description": "胶片中的画格数量"
      },
      {
        "key": "mediaFit",
        "label": "图片填充",
        "type": "segment",
        "default": "cover",
        "def": "cover",
        "options": [
          {
            "value": "cover",
            "label": "裁切"
          },
          {
            "value": "contain",
            "label": "完整"
          }
        ],
        "desc": "图片的填充方式",
        "publicKey": "mediaFit",
        "publicLabel": "图片填充",
        "description": "图片的填充方式"
      },
      {
        "key": "showSprockets",
        "label": "齿孔",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏胶片齿孔轨",
        "publicKey": "showSprockets",
        "publicLabel": "齿孔",
        "description": "显示/隐藏胶片齿孔轨"
      },
      {
        "key": "showCaptions",
        "label": "画格图注",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏每格下方的编号图注",
        "publicKey": "showCaptions",
        "publicLabel": "画格图注",
        "description": "显示/隐藏每格下方的编号图注"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#f15a29",
        "def": "#f15a29",
        "options": [
          "#f15a29",
          "#5a138e",
          "#3bb6ec",
          "#1f6b2a"
        ],
        "desc": "导语 / 高亮 / 页脚强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "导语 / 高亮 / 页脚强调色"
      }
    ],
    "defaultProps": {
      "accent": "#f15a29",
      "mediaCount": 4,
      "mediaFit": "cover",
      "showSprockets": true,
      "showCaptions": true,
      "media": [],
      "barMeta": "24 — Contact Sheet",
      "kicker": "胶片样张 / Contact Sheet",
      "title": "一卷胶片，[[一段路]]。",
      "metaLine": "ISO 400",
      "hint": "frames",
      "mediaPlaceholder": "拖入画格",
      "captions": [
        {
          "t": "录音棚",
          "s": "IN STUDIO"
        },
        {
          "t": "巡演路上",
          "s": "ON TOUR"
        },
        {
          "t": "后台",
          "s": "BACKSTAGE"
        },
        {
          "t": "结算面板",
          "s": "PAYOUT"
        },
        {
          "t": "粉丝现场",
          "s": "CROWD"
        }
      ],
      "page": "24",
      "total": "82"
    }
  },
  {
    "key": "theme12_page029",
    "themeKey": "theme12",
    "pageNumber": 29,
    "layout": "THEME12-029",
    "slot": "stampsheet",
    "label": "邮票张 / Stamps",
    "bgClass": "",
    "controls": [
      {
        "key": "mediaCount",
        "label": "邮票数量",
        "type": "slider",
        "default": 6,
        "def": 6,
        "min": 4,
        "max": 8,
        "step": 1,
        "desc": "邮票张上的邮票数量",
        "publicKey": "mediaCount",
        "publicLabel": "邮票数量",
        "description": "邮票张上的邮票数量"
      },
      {
        "key": "cols",
        "label": "每行列数",
        "type": "slider",
        "default": 4,
        "def": 4,
        "min": 3,
        "max": 4,
        "step": 1,
        "desc": "每行排布的邮票数",
        "publicKey": "cols",
        "publicLabel": "每行列数",
        "description": "每行排布的邮票数"
      },
      {
        "key": "mediaFit",
        "label": "图片填充",
        "type": "segment",
        "default": "cover",
        "def": "cover",
        "options": [
          {
            "value": "cover",
            "label": "裁切"
          },
          {
            "value": "contain",
            "label": "完整"
          }
        ],
        "desc": "邮票图填充方式",
        "publicKey": "mediaFit",
        "publicLabel": "图片填充",
        "description": "邮票图填充方式"
      },
      {
        "key": "showDenom",
        "label": "面值",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏每枚邮票的面值",
        "publicKey": "showDenom",
        "publicLabel": "面值",
        "description": "显示/隐藏每枚邮票的面值"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#f15a29",
        "def": "#f15a29",
        "options": [
          "#f15a29",
          "#5a138e",
          "#3bb6ec",
          "#1f6b2a"
        ],
        "desc": "导语 / 高亮 / 页脚强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "导语 / 高亮 / 页脚强调色"
      }
    ],
    "defaultProps": {
      "accent": "#f15a29",
      "mediaCount": 6,
      "mediaFit": "cover",
      "showDenom": true,
      "cols": 4,
      "media": [],
      "barMeta": "25 — Stamps",
      "kicker": "邮票张 / Stamps",
      "title": "每张作品，[[值得收藏]]。",
      "intro": "把现场、封面与样带，做成一枚枚可寄出的邮票——独立音乐，也能盖上自己的邮戳。",
      "postLabel": "声浪邮政",
      "metaPrefix": "声浪邮政 ·",
      "mediaPlaceholder": "拖入",
      "stampTint": [
        "#f15a29",
        "#3bb6ec",
        "#c44ee0",
        "#1f6b2a",
        "#fbb24d",
        "#d61fb5",
        "#74d2f0",
        "#baf04f"
      ],
      "denom": [
        "¥1.2",
        "¥2.0",
        "¥0.8",
        "¥3.0",
        "¥1.5",
        "¥0.5",
        "¥2.4",
        "¥1.0"
      ],
      "page": "25",
      "total": "82"
    }
  },
  {
    "key": "theme12_page030",
    "themeKey": "theme12",
    "pageNumber": 30,
    "layout": "THEME12-030",
    "slot": "coverflow",
    "label": "封面流 / Coverflow",
    "bgClass": "",
    "controls": [
      {
        "key": "mediaCount",
        "label": "封面数量",
        "type": "slider",
        "default": 5,
        "def": 5,
        "min": 3,
        "max": 7,
        "step": 1,
        "desc": "封面流中的封面数量",
        "publicKey": "mediaCount",
        "publicLabel": "封面数量",
        "description": "封面流中的封面数量"
      },
      {
        "key": "focusIndex",
        "label": "聚焦封面",
        "type": "slider",
        "default": 3,
        "def": 3,
        "min": 1,
        "max": 7,
        "step": 1,
        "desc": "居中竖立放大的封面（第几张）",
        "publicKey": "focusIndex",
        "publicLabel": "聚焦封面",
        "description": "居中竖立放大的封面（第几张）"
      },
      {
        "key": "mediaFit",
        "label": "图片填充",
        "type": "segment",
        "default": "cover",
        "def": "cover",
        "options": [
          {
            "value": "cover",
            "label": "裁切"
          },
          {
            "value": "contain",
            "label": "完整"
          }
        ],
        "desc": "封面图填充方式",
        "publicKey": "mediaFit",
        "publicLabel": "图片填充",
        "description": "封面图填充方式"
      },
      {
        "key": "showReflection",
        "label": "倒影",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏封面下方倒影",
        "publicKey": "showReflection",
        "publicLabel": "倒影",
        "description": "显示/隐藏封面下方倒影"
      },
      {
        "key": "showCaption",
        "label": "焦点图注",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏焦点封面的条目标签",
        "publicKey": "showCaption",
        "publicLabel": "焦点图注",
        "description": "显示/隐藏焦点封面的条目标签"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#3bb6ec",
        "def": "#3bb6ec",
        "options": [
          "#3bb6ec",
          "#f15a29",
          "#5a138e",
          "#1f6b2a"
        ],
        "desc": "导语 / 高亮 / 页脚强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "导语 / 高亮 / 页脚强调色"
      }
    ],
    "defaultProps": {
      "accent": "#3bb6ec",
      "mediaCount": 5,
      "focusIndex": 3,
      "mediaFit": "cover",
      "showReflection": true,
      "showCaption": true,
      "media": [],
      "barMeta": "26 — Coverflow",
      "kicker": "封面流 / Coverflow",
      "title": "每张封面，[[一个世界]]。",
      "hint": "releases",
      "mediaPlaceholder": "拖入封面",
      "titles": [
        {
          "t": "午夜电台",
          "s": "MIDNIGHT RADIO"
        },
        {
          "t": "潮汐",
          "s": "TIDES"
        },
        {
          "t": "霓虹废墟",
          "s": "NEON RUINS"
        },
        {
          "t": "回声花园",
          "s": "ECHO GARDEN"
        },
        {
          "t": "低气压",
          "s": "LOW PRESSURE"
        },
        {
          "t": "盐与光",
          "s": "SALT & LIGHT"
        },
        {
          "t": "夜行列车",
          "s": "NIGHT TRAIN"
        }
      ],
      "page": "26",
      "total": "82"
    }
  },
  {
    "key": "theme12_page031",
    "themeKey": "theme12",
    "pageNumber": 31,
    "layout": "THEME12-031",
    "slot": "beforeafter",
    "label": "前后对比 / Before · After",
    "bgClass": "",
    "controls": [
      {
        "key": "orientation",
        "label": "排布方向",
        "type": "segment",
        "default": "horizontal",
        "def": "horizontal",
        "options": [
          {
            "value": "horizontal",
            "label": "左右"
          },
          {
            "value": "vertical",
            "label": "上下"
          }
        ],
        "desc": "两图的排布方向",
        "publicKey": "orientation",
        "publicLabel": "排布方向",
        "description": "两图的排布方向"
      },
      {
        "key": "showLabels",
        "label": "前后标签",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏 BEFORE / AFTER 标签",
        "publicKey": "showLabels",
        "publicLabel": "前后标签",
        "description": "显示/隐藏 BEFORE / AFTER 标签"
      },
      {
        "key": "showHandle",
        "label": "中缝手柄",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏接缝处的圆形手柄",
        "publicKey": "showHandle",
        "publicLabel": "中缝手柄",
        "description": "显示/隐藏接缝处的圆形手柄"
      },
      {
        "key": "showStat",
        "label": "变化数据",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏底部变化数据条",
        "publicKey": "showStat",
        "publicLabel": "变化数据",
        "description": "显示/隐藏底部变化数据条"
      },
      {
        "key": "mediaFit",
        "label": "图片填充",
        "type": "segment",
        "default": "cover",
        "def": "cover",
        "options": [
          {
            "value": "cover",
            "label": "裁切"
          },
          {
            "value": "contain",
            "label": "完整"
          }
        ],
        "desc": "图片的填充方式",
        "publicKey": "mediaFit",
        "publicLabel": "图片填充",
        "description": "图片的填充方式"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#f15a29",
        "def": "#f15a29",
        "options": [
          "#f15a29",
          "#5a138e",
          "#3bb6ec",
          "#1f6b2a"
        ],
        "desc": "标签 / 手柄 / 页脚强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "标签 / 手柄 / 页脚强调色"
      }
    ],
    "defaultProps": {
      "accent": "#f15a29",
      "orientation": "horizontal",
      "showLabels": true,
      "showHandle": true,
      "showStat": true,
      "mediaFit": "cover",
      "media": [],
      "barMeta": "27 — Before · After",
      "title": "同一个你，[[换一种活法]]。",
      "beforeLabel": "BEFORE",
      "afterLabel": "AFTER",
      "beforeSub": "单打独斗",
      "afterSub": "声浪之后",
      "beforePlaceholder": "拖入「之前」",
      "afterPlaceholder": "拖入「之后」",
      "stats": [
        {
          "v": "+320%",
          "l": "人均年收入",
          "e": "Annual income"
        },
        {
          "v": "72h",
          "l": "版税到账",
          "e": "Payout time"
        },
        {
          "v": "0",
          "l": "需要的中间商",
          "e": "Middlemen"
        }
      ],
      "page": "27",
      "total": "82"
    }
  },
  {
    "key": "theme12_page032",
    "themeKey": "theme12",
    "pageNumber": 32,
    "layout": "THEME12-032",
    "slot": "table",
    "label": "表格 / Compare",
    "bgClass": "",
    "controls": [
      {
        "key": "columnCount",
        "label": "对比列数",
        "type": "slider",
        "default": 3,
        "def": 3,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "参与对比的方案列数",
        "publicKey": "columnCount",
        "publicLabel": "对比列数",
        "description": "参与对比的方案列数"
      },
      {
        "key": "rowCount",
        "label": "对比项数",
        "type": "slider",
        "default": 6,
        "def": 6,
        "min": 3,
        "max": 6,
        "step": 1,
        "desc": "展示的对比维度行数",
        "publicKey": "rowCount",
        "publicLabel": "对比项数",
        "description": "展示的对比维度行数"
      },
      {
        "key": "highlight",
        "label": "高亮某列",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "突出显示某一方案列",
        "publicKey": "highlight",
        "publicLabel": "高亮某列",
        "description": "突出显示某一方案列"
      },
      {
        "key": "highlightIndex",
        "label": "高亮第几列",
        "type": "slider",
        "default": 1,
        "def": 1,
        "min": 1,
        "max": 4,
        "step": 1,
        "dependsOn": "highlight",
        "desc": "被突出列的序号（1 起）",
        "publicKey": "highlightIndex",
        "publicLabel": "高亮第几列",
        "description": "被突出列的序号（1 起）"
      },
      {
        "key": "zebra",
        "label": "斑马纹",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "行间隔底色，便于横向阅读",
        "publicKey": "zebra",
        "publicLabel": "斑马纹",
        "description": "行间隔底色，便于横向阅读"
      },
      {
        "key": "showLede",
        "label": "显示导语",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏表格上方说明句",
        "publicKey": "showLede",
        "publicLabel": "显示导语",
        "description": "显示/隐藏表格上方说明句"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#f15a29",
        "def": "#f15a29",
        "options": [
          "#f15a29",
          "#5a138e",
          "#3bb6ec",
          "#1f6b2a"
        ],
        "desc": "高亮列 / 对勾 / 页脚强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "高亮列 / 对勾 / 页脚强调色"
      }
    ],
    "defaultProps": {
      "accent": "#f15a29",
      "columnCount": 3,
      "rowCount": 6,
      "highlight": true,
      "highlightIndex": 1,
      "zebra": true,
      "showLede": true,
      "barMeta": "28 — Compare",
      "lede": "同样一首歌，[[在声浪]]能多拿回多少？",
      "featureLabel": "对比维度 / Feature",
      "plans": [
        {
          "name": "声浪",
          "en": "SoundWave"
        },
        {
          "name": "传统发行",
          "en": "Label / Distro"
        },
        {
          "name": "独立 DIY",
          "en": "Self-managed"
        },
        {
          "name": "平台直营",
          "en": "Platform"
        }
      ],
      "rows": [
        {
          "cn": "平台分成",
          "en": "Commission",
          "vals": [
            "0–15%",
            "15–30%",
            "0%",
            "30–45%"
          ]
        },
        {
          "cn": "版税到账",
          "en": "Payout",
          "vals": [
            "72 小时",
            "按季度",
            "不定",
            "按月"
          ]
        },
        {
          "cn": "版权登记",
          "en": "Rights",
          "vals": [
            true,
            false,
            false,
            true
          ]
        },
        {
          "cn": "粉丝数据",
          "en": "Audience",
          "vals": [
            true,
            "部分",
            false,
            "部分"
          ]
        },
        {
          "cn": "盗用监测",
          "en": "Monitoring",
          "vals": [
            true,
            false,
            false,
            true
          ]
        },
        {
          "cn": "一键多平台",
          "en": "Distribution",
          "vals": [
            true,
            true,
            false,
            true
          ]
        }
      ],
      "page": "28",
      "total": "82"
    }
  },
  {
    "key": "theme12_page033",
    "themeKey": "theme12",
    "pageNumber": 33,
    "layout": "THEME12-033",
    "slot": "specs",
    "label": "规格清单 / Spec Sheet",
    "bgClass": "",
    "controls": [
      {
        "key": "groupCount",
        "label": "分组数",
        "type": "slider",
        "default": 4,
        "def": 4,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "规格分组的数量",
        "publicKey": "groupCount",
        "publicLabel": "分组数",
        "description": "规格分组的数量"
      },
      {
        "key": "columns",
        "label": "栏数",
        "type": "slider",
        "default": 2,
        "def": 2,
        "min": 1,
        "max": 2,
        "step": 1,
        "desc": "分组排布的列数",
        "publicKey": "columns",
        "publicLabel": "栏数",
        "description": "分组排布的列数"
      },
      {
        "key": "showLeaders",
        "label": "引导点",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏项与值之间的虚线引导",
        "publicKey": "showLeaders",
        "publicLabel": "引导点",
        "description": "显示/隐藏项与值之间的虚线引导"
      },
      {
        "key": "showLede",
        "label": "显示导语",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏标题区说明",
        "publicKey": "showLede",
        "publicLabel": "显示导语",
        "description": "显示/隐藏标题区说明"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#5a138e",
        "def": "#5a138e",
        "options": [
          "#5a138e",
          "#f15a29",
          "#3bb6ec",
          "#1f6b2a"
        ],
        "desc": "分组标号 / 重点值 / 页脚强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "分组标号 / 重点值 / 页脚强调色"
      }
    ],
    "defaultProps": {
      "accent": "#5a138e",
      "groupCount": 4,
      "columns": 2,
      "showLeaders": true,
      "showLede": true,
      "barMeta": "29 — Spec Sheet",
      "kicker": "规格清单 / The Fine Print",
      "title": "把[[每一条]]都写明白。",
      "metaLine": "SoundWave OS\nSpec · v2.6",
      "groups": [
        {
          "g": "结算 / Payout",
          "rows": [
            {
              "k": "到账周期",
              "v": "72 小时"
            },
            {
              "k": "最低提现",
              "v": "¥1"
            },
            {
              "k": "分账方式",
              "v": "实时多方"
            },
            {
              "k": "币种",
              "v": "12 种"
            }
          ]
        },
        {
          "g": "版权 / Rights",
          "rows": [
            {
              "k": "登记时长",
              "v": "< 5 分钟"
            },
            {
              "k": "全网监测",
              "v": "7×24"
            },
            {
              "k": "维权响应",
              "v": "一键发起"
            },
            {
              "k": "存证",
              "v": "区块链"
            }
          ]
        },
        {
          "g": "发行 / Distribution",
          "rows": [
            {
              "k": "上线平台",
              "v": "50+"
            },
            {
              "k": "审核时长",
              "v": "当日"
            },
            {
              "k": "预约发行",
              "v": "支持"
            },
            {
              "k": "下架",
              "v": "即时"
            }
          ]
        },
        {
          "g": "数据 / Insights",
          "rows": [
            {
              "k": "听众画像",
              "v": "实时"
            },
            {
              "k": "数据导出",
              "v": "CSV / API"
            },
            {
              "k": "更新频率",
              "v": "每小时"
            },
            {
              "k": "历史留存",
              "v": "永久"
            }
          ]
        }
      ],
      "page": "29",
      "total": "82"
    }
  },
  {
    "key": "theme12_page034",
    "themeKey": "theme12",
    "pageNumber": 34,
    "layout": "THEME12-034",
    "slot": "directory",
    "label": "名录榜 / Directory",
    "bgClass": "",
    "controls": [
      {
        "key": "rowCount",
        "label": "名录行数",
        "type": "slider",
        "default": 6,
        "def": 6,
        "min": 4,
        "max": 7,
        "step": 1,
        "desc": "名录中展示的条目数量",
        "publicKey": "itemCount",
        "publicLabel": "名录行数",
        "description": "名录中展示的条目数量"
      },
      {
        "key": "showRank",
        "label": "排名序号",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏左侧排名序号",
        "publicKey": "showRank",
        "publicLabel": "排名序号",
        "description": "显示/隐藏左侧排名序号"
      },
      {
        "key": "showBar",
        "label": "数据条",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏数值内联条形",
        "publicKey": "showValueLabels",
        "publicLabel": "数据条",
        "description": "显示/隐藏数值内联条形"
      },
      {
        "key": "focus",
        "label": "聚焦高亮",
        "type": "toggle",
        "default": false,
        "def": false,
        "desc": "突出其中一行，其余常态",
        "publicKey": "focus",
        "publicLabel": "聚焦高亮",
        "description": "突出其中一行，其余常态"
      },
      {
        "key": "focusIndex",
        "label": "聚焦第几行",
        "type": "slider",
        "default": 1,
        "def": 1,
        "min": 1,
        "max": 7,
        "step": 1,
        "dependsOn": "focus",
        "desc": "高亮的行序号",
        "publicKey": "focusIndex",
        "publicLabel": "聚焦第几行",
        "description": "高亮的行序号"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#3bb6ec",
        "def": "#3bb6ec",
        "options": [
          "#3bb6ec",
          "#f15a29",
          "#5a138e",
          "#1f6b2a"
        ],
        "desc": "聚焦行 / 导语 / 页脚强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "聚焦行 / 导语 / 页脚强调色"
      }
    ],
    "defaultProps": {
      "accent": "#3bb6ec",
      "rowCount": 6,
      "showRank": true,
      "showBar": true,
      "focus": false,
      "focusIndex": 1,
      "barMeta": "30 — Directory",
      "kicker": "名录榜 / Directory",
      "title": "本季[[领跑]]的声音。",
      "metaLine": "Q2 2026 · TOP",
      "colArtist": "音乐人 ARTIST",
      "colGenre": "风格 GENRE",
      "colCity": "城市 CITY",
      "colStreams": "月播放量 STREAMS",
      "artists": [
        {
          "m": "林",
          "n": "林夏",
          "g": "独立流行",
          "city": "上海",
          "v": 1,
          "s": "8.4M"
        },
        {
          "m": "A",
          "n": "阿特拉斯乐队",
          "g": "后摇",
          "city": "成都",
          "v": 0.82,
          "s": "6.9M"
        },
        {
          "m": "M",
          "n": "Mira K.",
          "g": "电子",
          "city": "柏林",
          "v": 0.74,
          "s": "6.2M"
        },
        {
          "m": "周",
          "n": "老周厂牌",
          "g": "说唱",
          "city": "北京",
          "v": 0.63,
          "s": "5.3M"
        },
        {
          "m": "电",
          "n": "午夜电台",
          "g": "合成器流行",
          "city": "广州",
          "v": 0.55,
          "s": "4.6M"
        },
        {
          "m": "盐",
          "n": "盐与光",
          "g": "民谣",
          "city": "杭州",
          "v": 0.41,
          "s": "3.4M"
        },
        {
          "m": "潮",
          "n": "潮汐计划",
          "g": "氛围",
          "city": "重庆",
          "v": 0.33,
          "s": "2.8M"
        }
      ],
      "page": "30",
      "total": "82"
    }
  },
  {
    "key": "theme12_page035",
    "themeKey": "theme12",
    "pageNumber": 35,
    "layout": "THEME12-035",
    "slot": "calendar",
    "label": "发布排期 / Schedule",
    "bgClass": "",
    "controls": [
      {
        "key": "eventCount",
        "label": "排期数量",
        "type": "slider",
        "default": 4,
        "def": 4,
        "min": 1,
        "max": 5,
        "step": 1,
        "desc": "日历上高亮的发布节点数量",
        "publicKey": "eventCount",
        "publicLabel": "排期数量",
        "description": "日历上高亮的发布节点数量"
      },
      {
        "key": "showWeekdays",
        "label": "星期表头",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏星期表头行",
        "publicKey": "showWeekdays",
        "publicLabel": "星期表头",
        "description": "显示/隐藏星期表头行"
      },
      {
        "key": "showLegend",
        "label": "图例",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏右上角事件图例",
        "publicKey": "showLegend",
        "publicLabel": "图例",
        "description": "显示/隐藏右上角事件图例"
      },
      {
        "key": "markToday",
        "label": "今日标记",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "在“今日”加圆环标记",
        "publicKey": "markToday",
        "publicLabel": "今日标记",
        "description": "在“今日”加圆环标记"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#f15a29",
        "def": "#f15a29",
        "options": [
          "#f15a29",
          "#5a138e",
          "#3bb6ec",
          "#1f6b2a"
        ],
        "desc": "主事件 / 今日 / 页脚强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "主事件 / 今日 / 页脚强调色"
      }
    ],
    "defaultProps": {
      "accent": "#f15a29",
      "eventCount": 4,
      "showWeekdays": true,
      "showLegend": true,
      "markToday": true,
      "barMeta": "31 — Schedule",
      "kicker": "发布排期 / Schedule",
      "title": "一张图，看清[[整月节奏]]。",
      "monthTitle": "2026 · 三月",
      "monthSub": "March · Release Plan",
      "weekdays": [
        "一",
        "二",
        "三",
        "四",
        "五",
        "六",
        "日"
      ],
      "monthOffset": 2,
      "monthDays": 31,
      "today": 9,
      "events": [
        {
          "day": 5,
          "cn": "预热单曲",
          "en": "Single",
          "ci": 0
        },
        {
          "day": 12,
          "cn": "专辑上线",
          "en": "Album drop",
          "ci": 1
        },
        {
          "day": 18,
          "cn": "MV 首发",
          "en": "Music video",
          "ci": 2
        },
        {
          "day": 23,
          "cn": "巡演开票",
          "en": "Tour on-sale",
          "ci": 3
        },
        {
          "day": 28,
          "cn": "直播专场",
          "en": "Livestream",
          "ci": 0
        }
      ],
      "page": "31",
      "total": "82"
    }
  },
  {
    "key": "theme12_page036",
    "themeKey": "theme12",
    "pageNumber": 36,
    "layout": "THEME12-036",
    "slot": "roadmap",
    "label": "路线图 / Roadmap",
    "bgClass": "",
    "controls": [
      {
        "key": "laneCount",
        "label": "泳道数量",
        "type": "slider",
        "default": 3,
        "def": 3,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "并行工作线（泳道）的数量",
        "publicKey": "laneCount",
        "publicLabel": "泳道数量",
        "description": "并行工作线（泳道）的数量"
      },
      {
        "key": "quarterCount",
        "label": "时间列数",
        "type": "slider",
        "default": 4,
        "def": 4,
        "min": 4,
        "max": 6,
        "step": 1,
        "desc": "时间轴上的时间列数",
        "publicKey": "timeColumnCount",
        "publicLabel": "时间列数",
        "description": "时间轴上的时间列数"
      },
      {
        "key": "focus",
        "label": "聚焦泳道",
        "type": "toggle",
        "default": false,
        "def": false,
        "desc": "突出其中一条泳道，其余淡化",
        "publicKey": "focus",
        "publicLabel": "聚焦泳道",
        "description": "突出其中一条泳道，其余淡化"
      },
      {
        "key": "focusIndex",
        "label": "聚焦第几条",
        "type": "slider",
        "default": 1,
        "def": 1,
        "min": 1,
        "max": 4,
        "step": 1,
        "dependsOn": "focus",
        "desc": "高亮的泳道序号",
        "publicKey": "focusIndex",
        "publicLabel": "聚焦第几条",
        "description": "高亮的泳道序号"
      },
      {
        "key": "showMilestones",
        "label": "里程碑",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏菱形里程碑标记",
        "publicKey": "showMilestones",
        "publicLabel": "里程碑",
        "description": "显示/隐藏菱形里程碑标记"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#3bb6ec",
        "def": "#3bb6ec",
        "options": [
          "#3bb6ec",
          "#f15a29",
          "#5a138e",
          "#1f6b2a"
        ],
        "desc": "当前时间段 / 导语 / 页脚强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "当前时间段 / 导语 / 页脚强调色"
      }
    ],
    "defaultProps": {
      "accent": "#3bb6ec",
      "laneCount": 3,
      "quarterCount": 4,
      "focus": false,
      "focusIndex": 1,
      "showMilestones": true,
      "barMeta": "32 — Roadmap",
      "kicker": "路线图 / Roadmap",
      "title": "未来四季，[[齐头并进]]。",
      "nowLabel": "当前 NOW",
      "nowCol": 1,
      "quarters": [
        "26·Q1",
        "26·Q2",
        "26·Q3",
        "26·Q4",
        "27·Q1",
        "27·Q2"
      ],
      "lanes": [
        {
          "t": "平台 Platform",
          "s": "CORE",
          "c": "#3bb6ec",
          "bars": [
            {
              "s": 0,
              "e": 1,
              "t": "结算引擎 2.0"
            },
            {
              "s": 2,
              "e": 3,
              "t": "开放 API"
            }
          ],
          "ms": 1
        },
        {
          "t": "创作者 Creators",
          "s": "GROWTH",
          "c": "#f15a29",
          "bars": [
            {
              "s": 0,
              "e": 0,
              "t": "入驻自助化"
            },
            {
              "s": 1,
              "e": 3,
              "t": "万人扶持计划"
            }
          ],
          "ms": 3
        },
        {
          "t": "版权 Rights",
          "s": "TRUST",
          "c": "#1f6b2a",
          "bars": [
            {
              "s": 1,
              "e": 2,
              "t": "链上存证"
            },
            {
              "s": 3,
              "e": 4,
              "t": "全球清算"
            }
          ],
          "ms": 4
        },
        {
          "t": "生态 Ecosystem",
          "s": "REACH",
          "c": "#c44ee0",
          "bars": [
            {
              "s": 0,
              "e": 2,
              "t": "30+ 平台同步"
            },
            {
              "s": 3,
              "e": 5,
              "t": "海外发行"
            }
          ],
          "ms": 5
        }
      ],
      "page": "32",
      "total": "82"
    }
  },
  {
    "key": "theme12_page037",
    "themeKey": "theme12",
    "pageNumber": 37,
    "layout": "THEME12-037",
    "slot": "heatmap",
    "label": "热力网格 / Heatmap",
    "bgClass": "",
    "controls": [
      {
        "key": "weeks",
        "label": "周数",
        "type": "slider",
        "default": 14,
        "def": 14,
        "min": 8,
        "max": 16,
        "step": 1,
        "desc": "热力网格的列数（周）",
        "publicKey": "weeks",
        "publicLabel": "周数",
        "description": "热力网格的列数（周）"
      },
      {
        "key": "showLegend",
        "label": "图例",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏 少→多 强度图例",
        "publicKey": "showLegend",
        "publicLabel": "图例",
        "description": "显示/隐藏 少→多 强度图例"
      },
      {
        "key": "showSidebar",
        "label": "侧栏数据",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏右侧统计侧栏",
        "publicKey": "showSidebar",
        "publicLabel": "侧栏数据",
        "description": "显示/隐藏右侧统计侧栏"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#f15a29",
        "def": "#f15a29",
        "options": [
          "#f15a29",
          "#1f6b2a",
          "#5a138e",
          "#3bb6ec"
        ],
        "desc": "热力 / 导语 / 页脚强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "热力 / 导语 / 页脚强调色"
      }
    ],
    "defaultProps": {
      "accent": "#f15a29",
      "weeks": 14,
      "showLegend": true,
      "showSidebar": true,
      "barMeta": "33 — Heatmap",
      "kicker": "热力网格 / Heatmap",
      "title": "发行的[[节奏]]，一目了然。",
      "weekdays": [
        "一",
        "二",
        "三",
        "四",
        "五",
        "六",
        "日"
      ],
      "months": [
        "3月",
        "4月",
        "5月",
        "6月"
      ],
      "legendLess": "少",
      "legendMore": "多",
      "legendNote": "每格 = 一日发行强度",
      "sidebarGhost": "71",
      "sidebarLabel": "近 {weeks} 周 · 发行总量",
      "sidebarText": "颜色越深、那天越热闹。周末（{peak}）是上新与开演的高峰。",
      "sidebarFoot": "峰值 +38% · 周末效应",
      "page": "33",
      "total": "82"
    }
  },
  {
    "key": "theme12_page038",
    "themeKey": "theme12",
    "pageNumber": 38,
    "layout": "THEME12-038",
    "slot": "checklist",
    "label": "特性矩阵 / Feature Matrix",
    "bgClass": "",
    "controls": [
      {
        "key": "rowCount",
        "label": "特性行数",
        "type": "slider",
        "default": 6,
        "def": 6,
        "min": 4,
        "max": 7,
        "step": 1,
        "desc": "对照的能力条目数量",
        "publicKey": "itemCount",
        "publicLabel": "特性行数",
        "description": "对照的能力条目数量"
      },
      {
        "key": "columnCount",
        "label": "对手列数",
        "type": "slider",
        "default": 3,
        "def": 3,
        "min": 2,
        "max": 3,
        "step": 1,
        "desc": "除声浪外的对照列数量",
        "publicKey": "columnCount",
        "publicLabel": "对手列数",
        "description": "除声浪外的对照列数量"
      },
      {
        "key": "showLegend",
        "label": "显示图例",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏底部符号图例",
        "publicKey": "showLegend",
        "publicLabel": "显示图例",
        "description": "显示/隐藏底部符号图例"
      },
      {
        "key": "showLede",
        "label": "显示导语",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏标题区导语",
        "publicKey": "showLede",
        "publicLabel": "显示导语",
        "description": "显示/隐藏标题区导语"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#f15a29",
        "def": "#f15a29",
        "options": [
          "#f15a29",
          "#5a138e",
          "#3bb6ec",
          "#1f6b2a"
        ],
        "desc": "声浪列 / 高亮 / 页脚强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "声浪列 / 高亮 / 页脚强调色"
      }
    ],
    "defaultProps": {
      "accent": "#f15a29",
      "rowCount": 6,
      "columnCount": 3,
      "ownIndex": 1,
      "showLegend": true,
      "showLede": true,
      "barMeta": "34 — Feature Matrix",
      "kicker": "横向对照 / Why SoundWave",
      "title": "同一张清单，[[差距]]一目了然。",
      "lede": "把分散在不同方案里的能力，摆进同一张表里——谁真的站在创作者这边。",
      "capabilityLabel": "能力 / Capability",
      "legendYes": "支持",
      "legendPartial": "部分",
      "legendNo": "不支持",
      "cols": [
        "声浪 SoundWave",
        "传统厂牌",
        "聚合分发",
        "自建独立"
      ],
      "rows": [
        {
          "cn": "版税实时透明",
          "en": "Realtime royalties",
          "v": [
            2,
            0,
            1,
            0
          ]
        },
        {
          "cn": "听众数据归属创作者",
          "en": "Own your audience",
          "v": [
            2,
            0,
            0,
            1
          ]
        },
        {
          "cn": "一键全球分发",
          "en": "One-click distribution",
          "v": [
            2,
            1,
            2,
            0
          ]
        },
        {
          "cn": "版权监测与维权",
          "en": "Rights protection",
          "v": [
            2,
            2,
            0,
            0
          ]
        },
        {
          "cn": "0 抽成 · 0 中间商",
          "en": "No middlemen",
          "v": [
            2,
            0,
            1,
            2
          ]
        },
        {
          "cn": "协作自动分账",
          "en": "Automatic splits",
          "v": [
            2,
            1,
            0,
            0
          ]
        },
        {
          "cn": "可随时迁出",
          "en": "Export anytime",
          "v": [
            2,
            0,
            1,
            2
          ]
        }
      ],
      "page": "34",
      "total": "82"
    }
  },
  {
    "key": "theme12_page039",
    "themeKey": "theme12",
    "pageNumber": 39,
    "layout": "THEME12-039",
    "slot": "contrast",
    "label": "对照 / Before · After",
    "bgClass": "",
    "controls": [
      {
        "key": "pointCount",
        "label": "对照条目",
        "type": "slider",
        "default": 4,
        "def": 4,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "每侧列出的对照条目数量",
        "publicKey": "itemCount",
        "publicLabel": "对照条目",
        "description": "每侧列出的对照条目数量"
      },
      {
        "key": "showStat",
        "label": "对照大数",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏每侧顶部的对比数字",
        "publicKey": "showStat",
        "publicLabel": "对照大数",
        "description": "显示/隐藏每侧顶部的对比数字"
      },
      {
        "key": "showBadge",
        "label": "中缝徽标",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏中间的 VS 徽标",
        "publicKey": "showBadge",
        "publicLabel": "中缝徽标",
        "description": "显示/隐藏中间的 VS 徽标"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#f15a29",
        "def": "#f15a29",
        "options": [
          "#f15a29",
          "#5a138e",
          "#3bb6ec",
          "#1f6b2a"
        ],
        "desc": "“有声浪”一侧 / 页脚强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "“有声浪”一侧 / 页脚强调色"
      }
    ],
    "defaultProps": {
      "accent": "#f15a29",
      "pointCount": 4,
      "showStat": true,
      "showBadge": true,
      "barMeta": "35 — Before · After",
      "badgeLabel": "VS",
      "beforeSide": "没有声浪 / Without",
      "afterSide": "有了声浪 / With",
      "before": {
        "stat": "15–45%",
        "statLb": "被层层抽走的分成",
        "points": [
          "作品散落在十几个后台",
          "版税要等一整个季度",
          "听众数据握在平台手里",
          "盗用翻唱无从追踪"
        ]
      },
      "after": {
        "stat": "0–15%",
        "statLb": "透明、可追溯的分成",
        "points": [
          "一个入口管完全链路",
          "版税最快 72 小时到账",
          "粉丝数据回到你手中",
          "全网监测，一键维权"
        ]
      },
      "page": "35",
      "total": "82"
    }
  },
  {
    "key": "theme12_page040",
    "themeKey": "theme12",
    "pageNumber": 40,
    "layout": "THEME12-040",
    "slot": "faq",
    "label": "问答 / FAQ",
    "bgClass": "",
    "controls": [
      {
        "key": "itemCount",
        "label": "问题数量",
        "type": "slider",
        "default": 4,
        "def": 4,
        "min": 3,
        "max": 6,
        "step": 1,
        "desc": "问答条目的数量",
        "publicKey": "itemCount",
        "publicLabel": "问题数量",
        "description": "问答条目的数量"
      },
      {
        "key": "columns",
        "label": "栏数",
        "type": "segment",
        "default": 2,
        "def": 2,
        "options": [
          {
            "value": 1,
            "label": "1 栏"
          },
          {
            "value": 2,
            "label": "2 栏"
          }
        ],
        "desc": "问答条目的列数",
        "publicKey": "columns",
        "publicLabel": "栏数",
        "description": "问答条目的列数"
      },
      {
        "key": "focus",
        "label": "重点强调",
        "type": "toggle",
        "default": false,
        "def": false,
        "desc": "把某一条提升为强调色卡片",
        "publicKey": "focus",
        "publicLabel": "重点强调",
        "description": "把某一条提升为强调色卡片"
      },
      {
        "key": "focusIndex",
        "label": "强调第几条",
        "type": "slider",
        "default": 1,
        "def": 1,
        "min": 1,
        "max": 6,
        "step": 1,
        "dependsOn": "focus",
        "desc": "被强调条目的序号（1 起）",
        "publicKey": "focusIndex",
        "publicLabel": "强调第几条",
        "description": "被强调条目的序号（1 起）"
      },
      {
        "key": "theme",
        "label": "配色",
        "type": "segment",
        "default": "light",
        "def": "light",
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
        "desc": "页面整体明暗配色",
        "publicKey": "theme",
        "publicLabel": "配色",
        "description": "页面整体明暗配色"
      },
      {
        "key": "showLede",
        "label": "显示导语",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏标题区导语",
        "publicKey": "showLede",
        "publicLabel": "显示导语",
        "description": "显示/隐藏标题区导语"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#f15a29",
        "def": "#f15a29",
        "options": [
          "#f15a29",
          "#5a138e",
          "#3bb6ec",
          "#1f6b2a"
        ],
        "desc": "焦点 / 高亮 / 页脚强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "焦点 / 高亮 / 页脚强调色"
      }
    ],
    "defaultProps": {
      "accent": "#f15a29",
      "theme": "light",
      "itemCount": 4,
      "columns": 2,
      "focus": false,
      "focusIndex": 1,
      "showLede": true,
      "barMeta": "36 — FAQ",
      "kicker": "常见问题 / FAQ",
      "title": "你大概想问的[[几件事]]。",
      "lede": "把签约前最常被追问的问题，提前摊开讲清楚。",
      "items": [
        {
          "q": "我的版权会被声浪拿走吗？",
          "a": "永远不会。作品、母带与收益 100% 归你，声浪只是工具。"
        },
        {
          "q": "结算到底有多快？",
          "a": "版税按平台拆解，最快 72 小时到账，路径全程可追溯。"
        },
        {
          "q": "能分发到哪些平台？",
          "a": "一次上传，自动推送到全球 30+ 主流流媒体与商店。"
        },
        {
          "q": "可以随时离开吗？",
          "a": "可以。数据与听众随时导出，绝不把你锁进围墙。"
        },
        {
          "q": "协作如何分账？",
          "a": "词曲编混按比例自动拆账，每个人实时看到自己那份。"
        },
        {
          "q": "需要技术团队吗？",
          "a": "不需要。复杂留给系统，你只管做音乐。"
        }
      ],
      "page": "36",
      "total": "82"
    }
  },
  {
    "key": "theme12_page041",
    "themeKey": "theme12",
    "pageNumber": 41,
    "layout": "THEME12-041",
    "slot": "pricing",
    "label": "价格 / Plans",
    "bgClass": "",
    "controls": [
      {
        "key": "planCount",
        "label": "方案数量",
        "type": "slider",
        "default": 3,
        "def": 3,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "展示的价格方案数量",
        "publicKey": "planCount",
        "publicLabel": "方案数量",
        "description": "展示的价格方案数量"
      },
      {
        "key": "highlightIndex",
        "label": "推荐方案",
        "type": "slider",
        "default": 2,
        "def": 2,
        "min": 1,
        "max": 4,
        "step": 1,
        "desc": "被突出为推荐的方案序号（1 起）",
        "publicKey": "highlightIndex",
        "publicLabel": "推荐方案",
        "description": "被突出为推荐的方案序号（1 起）"
      },
      {
        "key": "billing",
        "label": "计费周期",
        "type": "segment",
        "default": "monthly",
        "def": "monthly",
        "options": [
          {
            "value": "monthly",
            "label": "按月"
          },
          {
            "value": "yearly",
            "label": "按年"
          }
        ],
        "desc": "切换月付 / 年付价格",
        "publicKey": "billing",
        "publicLabel": "计费周期",
        "description": "切换月付 / 年付价格"
      },
      {
        "key": "showFeatures",
        "label": "功能清单",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏每个方案的功能清单",
        "publicKey": "showFeatures",
        "publicLabel": "功能清单",
        "description": "显示/隐藏每个方案的功能清单"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#f15a29",
        "def": "#f15a29",
        "options": [
          "#f15a29",
          "#5a138e",
          "#3bb6ec",
          "#1f6b2a"
        ],
        "desc": "推荐卡 / 对勾 / 页脚强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "推荐卡 / 对勾 / 页脚强调色"
      }
    ],
    "defaultProps": {
      "accent": "#f15a29",
      "planCount": 3,
      "highlightIndex": 2,
      "billing": "monthly",
      "showFeatures": true,
      "barMeta": "37 — Plans",
      "title": "选一个[[起点]]，随成长升级。",
      "billMonthly": "按月",
      "billYearly": "按年省 25%",
      "popularLabel": "推荐 Popular",
      "ctaDefault": "免费开始",
      "ctaContact": "联系销售",
      "customLabel": "定制",
      "plans": [
        {
          "cn": "入门",
          "en": "Starter",
          "m": 0,
          "y": 0,
          "note": "永久免费",
          "desc": "适合刚起步的创作者",
          "feats": [
            "全球 30+ 平台分发",
            "基础结算面板",
            "社区支持"
          ]
        },
        {
          "cn": "专业",
          "en": "Pro",
          "m": 39,
          "y": 29,
          "note": "按月计费",
          "desc": "为认真经营的音乐人",
          "feats": [
            "一切「入门」功能",
            "72h 极速到账",
            "粉丝直连与会员",
            "版权登记存证"
          ]
        },
        {
          "cn": "厂牌",
          "en": "Label",
          "m": 99,
          "y": 79,
          "note": "按月计费",
          "desc": "多艺人 · 团队协作",
          "feats": [
            "一切「专业」功能",
            "盗用全网监测",
            "多账号与分润",
            "专属客户经理"
          ]
        },
        {
          "cn": "企业",
          "en": "Enterprise",
          "m": null,
          "y": null,
          "note": "定制报价",
          "desc": "平台级集成需求",
          "feats": [
            "一切「厂牌」功能",
            "开放 API 接入",
            "SLA 与私有部署",
            "定制结算规则"
          ]
        }
      ],
      "page": "37",
      "total": "82"
    }
  },
  {
    "key": "theme12_page042",
    "themeKey": "theme12",
    "pageNumber": 42,
    "layout": "THEME12-042",
    "slot": "interlude",
    "label": "间章 / Interlude",
    "bgClass": "",
    "controls": [
      {
        "key": "theme",
        "label": "配色",
        "type": "segment",
        "default": "dark",
        "def": "dark",
        "options": [
          {
            "value": "dark",
            "label": "深色"
          },
          {
            "value": "color",
            "label": "彩色"
          }
        ],
        "desc": "间章底色：深色 / 强调色铺底",
        "publicKey": "theme",
        "publicLabel": "配色",
        "description": "间章底色：深色 / 强调色铺底"
      },
      {
        "key": "numeral",
        "label": "编号样式",
        "type": "segment",
        "default": "arabic",
        "def": "arabic",
        "options": [
          {
            "value": "arabic",
            "label": "02"
          },
          {
            "value": "roman",
            "label": "Ⅱ"
          }
        ],
        "desc": "大编号的呈现方式",
        "publicKey": "numeral",
        "publicLabel": "编号样式",
        "description": "大编号的呈现方式"
      },
      {
        "key": "showIndex",
        "label": "巨大编号",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏背景巨大编号",
        "publicKey": "showIndex",
        "publicLabel": "巨大编号",
        "description": "显示/隐藏背景巨大编号"
      },
      {
        "key": "showTag",
        "label": "下一幕标签",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏“接下来”标签",
        "publicKey": "showTag",
        "publicLabel": "下一幕标签",
        "description": "显示/隐藏“接下来”标签"
      },
      {
        "key": "showDecorations",
        "label": "显示装饰",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏几何装饰",
        "publicKey": "showDecorations",
        "publicLabel": "显示装饰",
        "description": "显示/隐藏几何装饰"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#f15a29",
        "def": "#f15a29",
        "options": [
          "#f15a29",
          "#5a138e",
          "#3bb6ec",
          "#1f6b2a"
        ],
        "desc": "高亮 / 编号 / 铺底强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "高亮 / 编号 / 铺底强调色"
      }
    ],
    "defaultProps": {
      "accent": "#f15a29",
      "theme": "dark",
      "numeral": "arabic",
      "showIndex": true,
      "showTag": true,
      "showDecorations": true,
      "barMeta": "38 — Interlude",
      "act": 2,
      "kicker": "第二幕 / Act",
      "title": "光有热爱不够，\n还得[[算得清]]。",
      "tag": "接下来 · 用数据说话 / By the numbers",
      "page": "38",
      "total": "82"
    }
  },
  {
    "key": "theme12_page043",
    "themeKey": "theme12",
    "pageNumber": 43,
    "layout": "THEME12-043",
    "slot": "whynow",
    "label": "为什么是现在 / Why Now",
    "bgClass": "",
    "controls": [
      {
        "key": "statCount",
        "label": "指标数量",
        "type": "slider",
        "default": 4,
        "def": 4,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "展示的数据指标数量",
        "publicKey": "statCount",
        "publicLabel": "指标数量",
        "description": "展示的数据指标数量"
      },
      {
        "key": "chartType",
        "label": "图表类型",
        "type": "segment",
        "default": "number",
        "def": "number",
        "options": [
          {
            "value": "number",
            "label": "数字"
          },
          {
            "value": "bar",
            "label": "条形"
          },
          {
            "value": "donut",
            "label": "环形"
          }
        ],
        "desc": "每个指标的可视化形式",
        "publicKey": "chartType",
        "publicLabel": "图表类型",
        "description": "每个指标的可视化形式"
      },
      {
        "key": "focus",
        "label": "重点强调",
        "type": "toggle",
        "default": false,
        "def": false,
        "desc": "高亮某一指标，弱化其余",
        "publicKey": "focus",
        "publicLabel": "重点强调",
        "description": "高亮某一指标，弱化其余"
      },
      {
        "key": "focusIndex",
        "label": "强调第几个",
        "type": "slider",
        "default": 1,
        "def": 1,
        "min": 1,
        "max": 4,
        "step": 1,
        "dependsOn": "focus",
        "desc": "被强调指标的序号（1 起）",
        "publicKey": "focusIndex",
        "publicLabel": "强调第几个",
        "description": "被强调指标的序号（1 起）"
      },
      {
        "key": "showIntro",
        "label": "显示引言",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏右上引言段落",
        "publicKey": "showIntro",
        "publicLabel": "显示引言",
        "description": "显示/隐藏右上引言段落"
      },
      {
        "key": "showArgument",
        "label": "显示论述",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏底部现状/解法两栏",
        "publicKey": "showArgument",
        "publicLabel": "显示论述",
        "description": "显示/隐藏底部现状/解法两栏"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#f15a29",
        "def": "#f15a29",
        "options": [
          "#f15a29",
          "#5a138e",
          "#3bb6ec",
          "#1f6b2a"
        ],
        "desc": "导语/页脚等强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "导语/页脚等强调色"
      }
    ],
    "defaultProps": {
      "accent": "#f15a29",
      "statCount": 4,
      "chartType": "number",
      "focus": false,
      "focusIndex": 1,
      "showIntro": true,
      "showArgument": true,
      "barMeta": "39 — Why Now",
      "kicker": "为什么是现在",
      "title": "独立发行的拐点，\n已经到来。",
      "intro": "流媒体把听众带到每个人面前，却把分成层层稀释。当工具足够成熟、成本足够低，[[音乐人不必再让渡主动权]]——声浪要做的，是把这件事彻底变简单。",
      "problemLabel": "现状 / The Problem",
      "problemText": "作品散落在数个后台，版税要等一个季度，盗用难以追踪，听众数据握在平台手里。**你创造了价值，却看不清、也拿不全。**",
      "fixLabel": "我们的解法 / The Fix",
      "fixText": "一个入口管完发行、结算与版权，数据回到你手中，分账全程透明。**把复杂留给系统，把主动权留给你。**",
      "stats": [
        {
          "v": "30",
          "u": "+",
          "lb": "Platforms",
          "ds": "一次上传，同步触达全球平台。",
          "pct": 0.86
        },
        {
          "v": "0",
          "u": "%",
          "lb": "Commission",
          "ds": "发行首季 90 天，0 分成。",
          "pct": 0.04
        },
        {
          "v": "72",
          "u": "h",
          "lb": "Payout",
          "ds": "版税最快三天到账。",
          "pct": 0.6
        },
        {
          "v": "12",
          "u": "k+",
          "lb": "Artists",
          "ds": "已入驻的音乐人与厂牌。",
          "pct": 0.92
        }
      ],
      "page": "39",
      "total": "82"
    }
  },
  {
    "key": "theme12_page044",
    "themeKey": "theme12",
    "pageNumber": 44,
    "layout": "THEME12-044",
    "slot": "donut",
    "label": "收益构成 / Composition",
    "bgClass": "",
    "controls": [
      {
        "key": "segmentCount",
        "label": "分段数量",
        "type": "slider",
        "default": 5,
        "def": 5,
        "min": 3,
        "max": 5,
        "step": 1,
        "desc": "收益构成的分段数量",
        "publicKey": "segmentCount",
        "publicLabel": "分段数量",
        "description": "收益构成的分段数量"
      },
      {
        "key": "chartType",
        "label": "图表类型",
        "type": "segment",
        "default": "donut",
        "def": "donut",
        "options": [
          {
            "value": "donut",
            "label": "环形"
          },
          {
            "value": "pie",
            "label": "扇形"
          }
        ],
        "desc": "环形或实心扇形",
        "publicKey": "chartType",
        "publicLabel": "图表类型",
        "description": "环形或实心扇形"
      },
      {
        "key": "showCenter",
        "label": "中心总计",
        "type": "toggle",
        "default": true,
        "def": true,
        "dependsOn": "chartType",
        "desc": "环形中心显示总计（仅环形）",
        "publicKey": "showCenter",
        "publicLabel": "中心总计",
        "description": "环形中心显示总计（仅环形）"
      },
      {
        "key": "focus",
        "label": "重点强调",
        "type": "toggle",
        "default": false,
        "def": false,
        "desc": "放大并高亮某一分段",
        "publicKey": "focus",
        "publicLabel": "重点强调",
        "description": "放大并高亮某一分段"
      },
      {
        "key": "focusIndex",
        "label": "强调第几段",
        "type": "slider",
        "default": 1,
        "def": 1,
        "min": 1,
        "max": 5,
        "step": 1,
        "dependsOn": "focus",
        "desc": "被强调分段的序号（1 起）",
        "publicKey": "focusIndex",
        "publicLabel": "强调第几段",
        "description": "被强调分段的序号（1 起）"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#f15a29",
        "def": "#f15a29",
        "options": [
          "#f15a29",
          "#5a138e",
          "#3bb6ec",
          "#1f6b2a"
        ],
        "desc": "主分段 / 导语 / 页脚强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "主分段 / 导语 / 页脚强调色"
      }
    ],
    "defaultProps": {
      "accent": "#f15a29",
      "segmentCount": 5,
      "chartType": "donut",
      "showCenter": true,
      "focus": false,
      "focusIndex": 1,
      "barMeta": "40 — Composition",
      "kicker": "收益构成 / Composition",
      "title": "版税之外，收入更[[多元]]。",
      "ghost": "31",
      "centerValue": "100",
      "centerLabel": "Total Income",
      "sources": [
        {
          "cn": "流媒体播放",
          "en": "Streaming",
          "v": 42
        },
        {
          "cn": "专属会员",
          "en": "Memberships",
          "v": 24
        },
        {
          "cn": "现场与周边",
          "en": "Live & Merch",
          "v": 16
        },
        {
          "cn": "授权与同步",
          "en": "Sync / License",
          "v": 12
        },
        {
          "cn": "粉丝打赏",
          "en": "Tips",
          "v": 6
        }
      ],
      "page": "40",
      "total": "82"
    }
  },
  {
    "key": "theme12_page045",
    "themeKey": "theme12",
    "pageNumber": 45,
    "layout": "THEME12-045",
    "slot": "treemap",
    "label": "占比方块 / Treemap",
    "bgClass": "",
    "controls": [
      {
        "key": "blockCount",
        "label": "方块数量",
        "type": "slider",
        "default": 6,
        "def": 6,
        "min": 4,
        "max": 6,
        "step": 1,
        "desc": "占比方块（收入来源）的数量",
        "publicKey": "blockCount",
        "publicLabel": "方块数量",
        "description": "占比方块（收入来源）的数量"
      },
      {
        "key": "focus",
        "label": "聚焦高亮",
        "type": "toggle",
        "default": false,
        "def": false,
        "desc": "突出其中一个方块，其余淡化",
        "publicKey": "focus",
        "publicLabel": "聚焦高亮",
        "description": "突出其中一个方块，其余淡化"
      },
      {
        "key": "focusIndex",
        "label": "聚焦第几块",
        "type": "slider",
        "default": 1,
        "def": 1,
        "min": 1,
        "max": 6,
        "step": 1,
        "dependsOn": "focus",
        "desc": "高亮的方块（按占比从大到小）",
        "publicKey": "focusIndex",
        "publicLabel": "聚焦第几块",
        "description": "高亮的方块（按占比从大到小）"
      },
      {
        "key": "showShare",
        "label": "占比数字",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏每块的占比百分比",
        "publicKey": "showShare",
        "publicLabel": "占比数字",
        "description": "显示/隐藏每块的占比百分比"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#1f6b2a",
        "def": "#1f6b2a",
        "options": [
          "#1f6b2a",
          "#f15a29",
          "#5a138e",
          "#3bb6ec"
        ],
        "desc": "聚焦方块 / 导语 / 页脚强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "聚焦方块 / 导语 / 页脚强调色"
      }
    ],
    "defaultProps": {
      "accent": "#1f6b2a",
      "blockCount": 6,
      "focus": false,
      "focusIndex": 1,
      "showShare": true,
      "barMeta": "41 — Treemap",
      "kicker": "占比方块 / Treemap",
      "title": "收入从\n哪里[[长出来]]。",
      "intro": "每个方块的面积，就是它在创作者总收入中的占比。流媒体仍是底盘，而现场与周边正快速变厚。",
      "totalValue": "¥2.4亿",
      "totalLabel": "年度总收入\nTOTAL · 2026",
      "sources": [
        {
          "t": "流媒体版税",
          "s": "Streaming",
          "v": 42,
          "c": "#5a138e",
          "fg": "#fff",
          "sub": "#f3b8ec"
        },
        {
          "t": "现场演出",
          "s": "Live Shows",
          "v": 23,
          "c": "#3bb6ec",
          "fg": "#143049",
          "sub": "#1c5b82"
        },
        {
          "t": "周边电商",
          "s": "Merch",
          "v": 16,
          "c": "#1f6b2a",
          "fg": "#fff",
          "sub": "#baf04f"
        },
        {
          "t": "粉丝订阅",
          "s": "Memberships",
          "v": 12,
          "c": "#f15a29",
          "fg": "#fff",
          "sub": "#fdddc6"
        },
        {
          "t": "版权授权",
          "s": "Sync / License",
          "v": 7,
          "c": "#fbb24d",
          "fg": "#3a2607",
          "sub": "#7a3a18"
        },
        {
          "t": "众筹预售",
          "s": "Crowdfund",
          "v": 5,
          "c": "#c44ee0",
          "fg": "#fff",
          "sub": "#f3b8ec"
        }
      ],
      "page": "41",
      "total": "82"
    }
  },
  {
    "key": "theme12_page046",
    "themeKey": "theme12",
    "pageNumber": 46,
    "layout": "THEME12-046",
    "slot": "sankey",
    "label": "资金流向 / Flow",
    "bgClass": "",
    "controls": [
      {
        "key": "bucketCount",
        "label": "去向数量",
        "type": "slider",
        "default": 5,
        "def": 5,
        "min": 3,
        "max": 5,
        "step": 1,
        "desc": "资金分配的去向数量",
        "publicKey": "bucketCount",
        "publicLabel": "去向数量",
        "description": "资金分配的去向数量"
      },
      {
        "key": "focus",
        "label": "聚焦高亮",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "突出其中一条资金流，其余淡化",
        "publicKey": "focus",
        "publicLabel": "聚焦高亮",
        "description": "突出其中一条资金流，其余淡化"
      },
      {
        "key": "focusIndex",
        "label": "聚焦第几条",
        "type": "slider",
        "default": 1,
        "def": 1,
        "min": 1,
        "max": 5,
        "step": 1,
        "dependsOn": "focus",
        "desc": "高亮的资金流序号",
        "publicKey": "focusIndex",
        "publicLabel": "聚焦第几条",
        "description": "高亮的资金流序号"
      },
      {
        "key": "showValues",
        "label": "数值占比",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏每条流向的占比",
        "publicKey": "showValueLabels",
        "publicLabel": "数值占比",
        "description": "显示/隐藏每条流向的占比"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#1f6b2a",
        "def": "#1f6b2a",
        "options": [
          "#1f6b2a",
          "#f15a29",
          "#3bb6ec",
          "#5a138e"
        ],
        "desc": "聚焦流 / 导语 / 页脚强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "聚焦流 / 导语 / 页脚强调色"
      }
    ],
    "defaultProps": {
      "accent": "#1f6b2a",
      "bucketCount": 5,
      "focus": true,
      "focusIndex": 1,
      "showValues": true,
      "barMeta": "42 — Flow",
      "kicker": "资金流向 / Flow",
      "title": "每 100 元，[[70 元]]回到创作者。",
      "totalValue": "¥2.4亿",
      "totalLabel": "年度总营收 · 2026",
      "sourceLabel": "总营收",
      "sourceSub": "REVENUE",
      "buckets": [
        {
          "t": "创作者分成",
          "s": "To Artists",
          "v": 70,
          "c": "#1f6b2a"
        },
        {
          "t": "平台运营",
          "s": "Platform",
          "v": 14,
          "c": "#3bb6ec"
        },
        {
          "t": "版权清算",
          "s": "Rights",
          "v": 9,
          "c": "#c44ee0"
        },
        {
          "t": "生态再投资",
          "s": "Reinvest",
          "v": 5,
          "c": "#f15a29"
        },
        {
          "t": "公益基金",
          "s": "Fund",
          "v": 2,
          "c": "#fbb24d"
        }
      ],
      "page": "42",
      "total": "82"
    }
  },
  {
    "key": "theme12_page047",
    "themeKey": "theme12",
    "pageNumber": 47,
    "layout": "THEME12-047",
    "slot": "waterfall",
    "label": "瀑布图 / Waterfall",
    "bgClass": "",
    "controls": [
      {
        "key": "stepCount",
        "label": "变动项数",
        "type": "slider",
        "default": 4,
        "def": 4,
        "min": 3,
        "max": 5,
        "step": 1,
        "desc": "总收入与到手之间的增减项数量",
        "publicKey": "stepCount",
        "publicLabel": "变动项数",
        "description": "总收入与到手之间的增减项数量"
      },
      {
        "key": "showConnectors",
        "label": "连接线",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏柱顶之间的虚线",
        "publicKey": "showConnectors",
        "publicLabel": "连接线",
        "description": "显示/隐藏柱顶之间的虚线"
      },
      {
        "key": "showValues",
        "label": "数值标签",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏每根柱的增减数值",
        "publicKey": "showValueLabels",
        "publicLabel": "数值标签",
        "description": "显示/隐藏每根柱的增减数值"
      },
      {
        "key": "focus",
        "label": "高亮某项",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "突出某一增减项",
        "publicKey": "focus",
        "publicLabel": "高亮某项",
        "description": "突出某一增减项"
      },
      {
        "key": "focusIndex",
        "label": "高亮第几项",
        "type": "slider",
        "default": 3,
        "def": 3,
        "min": 1,
        "max": 5,
        "step": 1,
        "dependsOn": "focus",
        "desc": "被突出增减项的序号（1 起）",
        "publicKey": "focusIndex",
        "publicLabel": "高亮第几项",
        "description": "被突出增减项的序号（1 起）"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#f15a29",
        "def": "#f15a29",
        "options": [
          "#f15a29",
          "#5a138e",
          "#3bb6ec",
          "#1f6b2a"
        ],
        "desc": "到手总额 / 高亮 / 页脚强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "到手总额 / 高亮 / 页脚强调色"
      }
    ],
    "defaultProps": {
      "accent": "#f15a29",
      "stepCount": 4,
      "showConnectors": true,
      "showValues": true,
      "focus": true,
      "focusIndex": 3,
      "barMeta": "43 — Waterfall",
      "kicker": "收入桥 / The Bridge",
      "base": 100,
      "grossLabel": {
        "cn": "总收入",
        "en": "Gross"
      },
      "netLabel": {
        "cn": "到手",
        "en": "Net"
      },
      "deltaCaption": "对比传统发行 vs Label",
      "steps": [
        {
          "cn": "发行分销",
          "en": "Distro",
          "d": -8
        },
        {
          "cn": "支付通道",
          "en": "Fees",
          "d": -2
        },
        {
          "cn": "粉丝直连",
          "en": "Direct",
          "d": 12
        },
        {
          "cn": "维权追回",
          "en": "Recovered",
          "d": 5
        },
        {
          "cn": "数据增益",
          "en": "Insights",
          "d": 3
        }
      ],
      "page": "43",
      "total": "82"
    }
  },
  {
    "key": "theme12_page048",
    "themeKey": "theme12",
    "pageNumber": 48,
    "layout": "THEME12-048",
    "slot": "growth",
    "label": "增长曲线 / Growth",
    "bgClass": "",
    "controls": [
      {
        "key": "chartType",
        "label": "图表类型",
        "type": "segment",
        "default": "area",
        "def": "area",
        "options": [
          {
            "value": "area",
            "label": "面积"
          },
          {
            "value": "line",
            "label": "折线"
          },
          {
            "value": "bars",
            "label": "柱状"
          }
        ],
        "desc": "增长曲线的呈现形式",
        "publicKey": "chartType",
        "publicLabel": "图表类型",
        "description": "增长曲线的呈现形式"
      },
      {
        "key": "seriesCount",
        "label": "数据系列",
        "type": "slider",
        "default": 2,
        "def": 2,
        "min": 1,
        "max": 2,
        "step": 1,
        "desc": "同时展示的数据系列数（指标 / 成员）",
        "publicKey": "seriesCount",
        "publicLabel": "数据系列",
        "description": "同时展示的数据系列数（指标 / 成员）"
      },
      {
        "key": "showGrid",
        "label": "网格线",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏背景网格与刻度",
        "publicKey": "showGrid",
        "publicLabel": "网格线",
        "description": "显示/隐藏背景网格与刻度"
      },
      {
        "key": "showLegend",
        "label": "图例",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏系列图例",
        "publicKey": "showLegend",
        "publicLabel": "图例",
        "description": "显示/隐藏系列图例"
      },
      {
        "key": "showCallout",
        "label": "终点标注",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "高亮并标注最新一季",
        "publicKey": "showCallout",
        "publicLabel": "终点标注",
        "description": "高亮并标注最新一季"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#f15a29",
        "def": "#f15a29",
        "options": [
          "#f15a29",
          "#5a138e",
          "#3bb6ec",
          "#1f6b2a"
        ],
        "desc": "主系列 / 标注 / 页脚强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "主系列 / 标注 / 页脚强调色"
      }
    ],
    "defaultProps": {
      "accent": "#f15a29",
      "chartType": "area",
      "seriesCount": 2,
      "showGrid": true,
      "showLegend": true,
      "showCallout": true,
      "barMeta": "44 — Growth",
      "kicker": "增长曲线 / Growth",
      "title": "八个季度，[[指数级]]放大。",
      "quarters": [
        "24·Q3",
        "24·Q4",
        "25·Q1",
        "25·Q2",
        "25·Q3",
        "25·Q4",
        "26·Q1",
        "26·Q2"
      ],
      "seriesA": [
        0.16,
        0.25,
        0.33,
        0.44,
        0.55,
        0.7,
        0.85,
        1
      ],
      "seriesB": [
        0.1,
        0.15,
        0.22,
        0.3,
        0.42,
        0.55,
        0.72,
        0.9
      ],
      "calloutPeriod": "26 · Q2",
      "calloutValue": "¥2.4亿",
      "railGhost": "33",
      "railValue": "+320%",
      "railLabel": "累计版税 · 同比",
      "railText": "发放给独立音乐人的版税，在过去一年里增长超三倍。",
      "legendA": "累计版税 Royalties",
      "legendB": "入驻音乐人 Artists",
      "page": "44",
      "total": "82"
    }
  },
  {
    "key": "theme12_page049",
    "themeKey": "theme12",
    "pageNumber": 49,
    "layout": "THEME12-049",
    "slot": "areastack",
    "label": "堆叠面积 / Stacked Area",
    "bgClass": "",
    "controls": [
      {
        "key": "seriesCount",
        "label": "数据系列",
        "type": "slider",
        "default": 3,
        "def": 3,
        "min": 2,
        "max": 3,
        "step": 1,
        "desc": "堆叠的收入构成系列数",
        "publicKey": "seriesCount",
        "publicLabel": "数据系列",
        "description": "堆叠的收入构成系列数"
      },
      {
        "key": "showGrid",
        "label": "网格线",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏背景网格与刻度",
        "publicKey": "showGrid",
        "publicLabel": "网格线",
        "description": "显示/隐藏背景网格与刻度"
      },
      {
        "key": "showLegend",
        "label": "图例",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏系列图例",
        "publicKey": "showLegend",
        "publicLabel": "图例",
        "description": "显示/隐藏系列图例"
      },
      {
        "key": "showEndLabels",
        "label": "终值标注",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏右端各层占比标注",
        "publicKey": "showEndLabels",
        "publicLabel": "终值标注",
        "description": "显示/隐藏右端各层占比标注"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#f15a29",
        "def": "#f15a29",
        "options": [
          "#f15a29",
          "#5a138e",
          "#3bb6ec",
          "#1f6b2a"
        ],
        "desc": "主系列 / 导语 / 页脚强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "主系列 / 导语 / 页脚强调色"
      }
    ],
    "defaultProps": {
      "accent": "#f15a29",
      "seriesCount": 3,
      "showGrid": true,
      "showLegend": true,
      "showEndLabels": true,
      "barMeta": "45 — Stacked Area",
      "kicker": "堆叠面积 / Stacked Area",
      "title": "收入结构，[[越长越宽]]。",
      "axisLabel": "创作者季度总收入构成 · ¥百万 / QUARTER",
      "quarters": [
        "24·Q3",
        "24·Q4",
        "25·Q1",
        "25·Q2",
        "25·Q3",
        "25·Q4",
        "26·Q1",
        "26·Q2"
      ],
      "series": [
        {
          "t": "流媒体版税",
          "s": "Streaming",
          "c": "#f15a29",
          "v": [
            22,
            28,
            33,
            40,
            48,
            55,
            63,
            70
          ]
        },
        {
          "t": "现场演出",
          "s": "Live",
          "c": "#3bb6ec",
          "v": [
            8,
            10,
            13,
            16,
            20,
            25,
            30,
            36
          ]
        },
        {
          "t": "周边电商",
          "s": "Merch",
          "c": "#baf04f",
          "v": [
            3,
            4,
            6,
            8,
            10,
            13,
            16,
            20
          ]
        }
      ],
      "page": "45",
      "total": "82"
    }
  },
  {
    "key": "theme12_page050",
    "themeKey": "theme12",
    "pageNumber": 50,
    "layout": "THEME12-050",
    "slot": "slope",
    "label": "斜率图 / Slope",
    "bgClass": "",
    "controls": [
      {
        "key": "lineCount",
        "label": "指标数量",
        "type": "slider",
        "default": 5,
        "def": 5,
        "min": 3,
        "max": 6,
        "step": 1,
        "desc": "参与对比的指标线数量",
        "publicKey": "lineCount",
        "publicLabel": "指标数量",
        "description": "参与对比的指标线数量"
      },
      {
        "key": "focus",
        "label": "聚焦高亮",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "突出其中一条指标线，其余淡化",
        "publicKey": "focus",
        "publicLabel": "聚焦高亮",
        "description": "突出其中一条指标线，其余淡化"
      },
      {
        "key": "focusIndex",
        "label": "聚焦第几条",
        "type": "slider",
        "default": 1,
        "def": 1,
        "min": 1,
        "max": 6,
        "step": 1,
        "dependsOn": "focus",
        "desc": "高亮的指标线（自上而下）",
        "publicKey": "focusIndex",
        "publicLabel": "聚焦第几条",
        "description": "高亮的指标线（自上而下）"
      },
      {
        "key": "showGrid",
        "label": "刻度网格",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏两端刻度与基线",
        "publicKey": "showGrid",
        "publicLabel": "刻度网格",
        "description": "显示/隐藏两端刻度与基线"
      },
      {
        "key": "showDelta",
        "label": "变化标注",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏每条线的变化百分比",
        "publicKey": "showDelta",
        "publicLabel": "变化标注",
        "description": "显示/隐藏每条线的变化百分比"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#f15a29",
        "def": "#f15a29",
        "options": [
          "#f15a29",
          "#5a138e",
          "#3bb6ec",
          "#1f6b2a"
        ],
        "desc": "聚焦线 / 导语 / 页脚强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "聚焦线 / 导语 / 页脚强调色"
      }
    ],
    "defaultProps": {
      "accent": "#f15a29",
      "lineCount": 5,
      "focus": true,
      "focusIndex": 1,
      "showGrid": true,
      "showDelta": true,
      "barMeta": "46 — Slope",
      "kicker": "斜率图 / Slope",
      "title": "两年之间，[[格局翻转]]。",
      "periodLeft": {
        "y": "2024",
        "s": "声浪上线前"
      },
      "periodRight": {
        "y": "2026",
        "s": "当下"
      },
      "axisLabel": "占总播放份额 · SHARE OF PLAYS (%)",
      "metrics": [
        {
          "t": "独立厂牌 Indies",
          "a": 28,
          "b": 71
        },
        {
          "t": "自助发行 DIY",
          "a": 12,
          "b": 52
        },
        {
          "t": "现场演出 Live",
          "a": 34,
          "b": 58
        },
        {
          "t": "海外流媒 Global",
          "a": 9,
          "b": 40
        },
        {
          "t": "版税透明 Payout",
          "a": 21,
          "b": 84
        },
        {
          "t": "粉丝直连 Direct",
          "a": 17,
          "b": 63
        }
      ],
      "page": "46",
      "total": "82"
    }
  },
  {
    "key": "theme12_page051",
    "themeKey": "theme12",
    "pageNumber": 51,
    "layout": "THEME12-051",
    "slot": "funnel",
    "label": "转化漏斗 / Funnel",
    "bgClass": "",
    "controls": [
      {
        "key": "stageCount",
        "label": "阶段数量",
        "type": "slider",
        "default": 4,
        "def": 4,
        "min": 3,
        "max": 5,
        "step": 1,
        "desc": "漏斗的阶段数量",
        "publicKey": "stageCount",
        "publicLabel": "阶段数量",
        "description": "漏斗的阶段数量"
      },
      {
        "key": "showRates",
        "label": "转化率",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏阶段间转化率",
        "publicKey": "showRates",
        "publicLabel": "转化率",
        "description": "显示/隐藏阶段间转化率"
      },
      {
        "key": "focus",
        "label": "高亮阶段",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "高亮某个阶段、弱化其余",
        "publicKey": "focus",
        "publicLabel": "高亮阶段",
        "description": "高亮某个阶段、弱化其余"
      },
      {
        "key": "focusIndex",
        "label": "高亮第几个",
        "type": "slider",
        "default": 4,
        "def": 4,
        "min": 1,
        "max": 5,
        "step": 1,
        "dependsOn": "focus",
        "desc": "被高亮阶段的序号（1 起）",
        "publicKey": "focusIndex",
        "publicLabel": "高亮第几个",
        "description": "被高亮阶段的序号（1 起）"
      },
      {
        "key": "showNotes",
        "label": "右侧说明",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏右侧文字说明",
        "publicKey": "showNotes",
        "publicLabel": "右侧说明",
        "description": "显示/隐藏右侧文字说明"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#f15a29",
        "def": "#f15a29",
        "options": [
          "#f15a29",
          "#5a138e",
          "#3bb6ec",
          "#1f6b2a"
        ],
        "desc": "末段 / 高亮 / 页脚强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "末段 / 高亮 / 页脚强调色"
      }
    ],
    "defaultProps": {
      "accent": "#f15a29",
      "stageCount": 4,
      "showRates": true,
      "focus": true,
      "focusIndex": 4,
      "showNotes": true,
      "barMeta": "47 — Funnel",
      "kicker": "从听见到留下 / Funnel",
      "title": "把路人，\n变成[[铁粉]]。",
      "notes": "每往下一层，都是一次真实的选择。声浪把每一步的转化都摆给你看——知道粉丝在哪一环流失，才知道下一步该往哪使劲。",
      "totalValue": "1.8%",
      "totalLabel": "整体付费转化",
      "stages": [
        {
          "cn": "听到作品",
          "en": "Reached",
          "v": "1,200,000",
          "w": 100
        },
        {
          "cn": "点进主页",
          "en": "Visited",
          "v": "384,000",
          "w": 84
        },
        {
          "cn": "关注 / 收藏",
          "en": "Followed",
          "v": "96,000",
          "w": 68
        },
        {
          "cn": "付费支持",
          "en": "Paid",
          "v": "21,500",
          "w": 54
        },
        {
          "cn": "复购会员",
          "en": "Renewed",
          "v": "8,900",
          "w": 42
        }
      ],
      "rates": [
        "32%",
        "25%",
        "22%",
        "41%"
      ],
      "page": "47",
      "total": "82"
    }
  },
  {
    "key": "theme12_page052",
    "themeKey": "theme12",
    "pageNumber": 52,
    "layout": "THEME12-052",
    "slot": "dotplot",
    "label": "点阵单位 / Units",
    "bgClass": "",
    "controls": [
      {
        "key": "categoryCount",
        "label": "类目数量",
        "type": "slider",
        "default": 4,
        "def": 4,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "参与对比的类目数量",
        "publicKey": "categoryCount",
        "publicLabel": "类目数量",
        "description": "参与对比的类目数量"
      },
      {
        "key": "dotValue",
        "label": "每点单位",
        "type": "slider",
        "default": 20,
        "def": 20,
        "min": 10,
        "max": 40,
        "step": 5,
        "desc": "每个圆点代表的数量（万）",
        "publicKey": "dotValue",
        "publicLabel": "每点单位",
        "description": "每个圆点代表的数量（万）"
      },
      {
        "key": "showValues",
        "label": "数值标签",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏每行右侧数值",
        "publicKey": "showValueLabels",
        "publicLabel": "数值标签",
        "description": "显示/隐藏每行右侧数值"
      },
      {
        "key": "focus",
        "label": "高亮某行",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "高亮某一类目、弱化其余",
        "publicKey": "focus",
        "publicLabel": "高亮某行",
        "description": "高亮某一类目、弱化其余"
      },
      {
        "key": "focusIndex",
        "label": "高亮第几行",
        "type": "slider",
        "default": 1,
        "def": 1,
        "min": 1,
        "max": 4,
        "step": 1,
        "dependsOn": "focus",
        "desc": "被高亮类目的序号（1 起）",
        "publicKey": "focusIndex",
        "publicLabel": "高亮第几行",
        "description": "被高亮类目的序号（1 起）"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#f15a29",
        "def": "#f15a29",
        "options": [
          "#f15a29",
          "#5a138e",
          "#3bb6ec",
          "#1f6b2a"
        ],
        "desc": "高亮行 / 页脚强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "高亮行 / 页脚强调色"
      }
    ],
    "defaultProps": {
      "accent": "#f15a29",
      "categoryCount": 4,
      "dotValue": 20,
      "showValues": true,
      "focus": true,
      "focusIndex": 1,
      "barMeta": "48 — Units",
      "kicker": "互动构成 / Engagement",
      "title": "每个点，都是[[真实的人]]。",
      "unit": "万",
      "cats": [
        {
          "cn": "流媒体播放",
          "en": "Streaming",
          "value": 420
        },
        {
          "cn": "主页收藏",
          "en": "Saves",
          "value": 260
        },
        {
          "cn": "转发分享",
          "en": "Shares",
          "value": 150
        },
        {
          "cn": "评论互动",
          "en": "Comments",
          "value": 90
        }
      ],
      "page": "48",
      "total": "82"
    }
  },
  {
    "key": "theme12_page053",
    "themeKey": "theme12",
    "pageNumber": 53,
    "layout": "THEME12-053",
    "slot": "bubble",
    "label": "气泡图 / Bubble",
    "bgClass": "",
    "controls": [
      {
        "key": "bubbleCount",
        "label": "气泡数量",
        "type": "slider",
        "default": 6,
        "def": 6,
        "min": 4,
        "max": 7,
        "step": 1,
        "desc": "散点中的气泡（对象类型）数量",
        "publicKey": "bubbleCount",
        "publicLabel": "气泡数量",
        "description": "散点中的气泡（对象类型）数量"
      },
      {
        "key": "focus",
        "label": "聚焦高亮",
        "type": "toggle",
        "default": false,
        "def": false,
        "desc": "突出其中一个气泡，其余淡化",
        "publicKey": "focus",
        "publicLabel": "聚焦高亮",
        "description": "突出其中一个气泡，其余淡化"
      },
      {
        "key": "focusIndex",
        "label": "聚焦第几个",
        "type": "slider",
        "default": 4,
        "def": 4,
        "min": 1,
        "max": 7,
        "step": 1,
        "dependsOn": "focus",
        "desc": "高亮的气泡序号",
        "publicKey": "focusIndex",
        "publicLabel": "聚焦第几个",
        "description": "高亮的气泡序号"
      },
      {
        "key": "showGrid",
        "label": "坐标网格",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏坐标轴与网格",
        "publicKey": "showGrid",
        "publicLabel": "坐标网格",
        "description": "显示/隐藏坐标轴与网格"
      },
      {
        "key": "showLabels",
        "label": "气泡标签",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏气泡上的名称标签",
        "publicKey": "showLabels",
        "publicLabel": "气泡标签",
        "description": "显示/隐藏气泡上的名称标签"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#5a138e",
        "def": "#5a138e",
        "options": [
          "#5a138e",
          "#f15a29",
          "#3bb6ec",
          "#1f6b2a"
        ],
        "desc": "聚焦气泡 / 导语 / 页脚强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "聚焦气泡 / 导语 / 页脚强调色"
      }
    ],
    "defaultProps": {
      "accent": "#5a138e",
      "bubbleCount": 6,
      "focus": false,
      "focusIndex": 4,
      "showGrid": true,
      "showLabels": true,
      "barMeta": "49 — Bubble",
      "kicker": "气泡图 / Bubble",
      "title": "谁在[[高效]]地变现？",
      "axisX": "← 月均播放量 STREAMS →",
      "legendSize": "气泡大小 = 粉丝规模",
      "railGhost": "63",
      "railValue": "4.3×",
      "railLabel": "说唱厂牌 · 单位粉丝产值",
      "railText": "纵轴越高、变现越强；横轴越右、播放越多。右上角的气泡，正是声浪最值得加码的人群。",
      "railAxisY": "纵轴 = 人均版税 · REVENUE / ARTIST",
      "bubbles": [
        {
          "t": "独立厂牌",
          "s": "Indies",
          "x": 72,
          "y": 68,
          "r": 0.92
        },
        {
          "t": "卧室制作人",
          "s": "Bedroom",
          "x": 38,
          "y": 44,
          "r": 0.55
        },
        {
          "t": "现场乐队",
          "s": "Live Band",
          "x": 55,
          "y": 78,
          "r": 0.7
        },
        {
          "t": "说唱厂牌",
          "s": "Hip-Hop",
          "x": 84,
          "y": 58,
          "r": 1
        },
        {
          "t": "电子制作",
          "s": "Electronic",
          "x": 64,
          "y": 36,
          "r": 0.62
        },
        {
          "t": "民谣唱作",
          "s": "Folk",
          "x": 30,
          "y": 62,
          "r": 0.46
        },
        {
          "t": "实验声音",
          "s": "Experimental",
          "x": 20,
          "y": 28,
          "r": 0.4
        }
      ],
      "page": "49",
      "total": "82"
    }
  },
  {
    "key": "theme12_page054",
    "themeKey": "theme12",
    "pageNumber": 54,
    "layout": "THEME12-054",
    "slot": "stackbars",
    "label": "堆叠柱状 / Stacked Bars",
    "bgClass": "",
    "controls": [
      {
        "key": "periodCount",
        "label": "周期数量",
        "type": "slider",
        "default": 6,
        "def": 6,
        "min": 4,
        "max": 8,
        "step": 1,
        "desc": "横轴上的周期（时间段）数量",
        "publicKey": "periodCount",
        "publicLabel": "周期数量",
        "description": "横轴上的周期（时间段）数量"
      },
      {
        "key": "seriesCount",
        "label": "分项数量",
        "type": "slider",
        "default": 3,
        "def": 3,
        "min": 2,
        "max": 3,
        "step": 1,
        "desc": "每根柱子堆叠的收入分项数量",
        "publicKey": "seriesCount",
        "publicLabel": "分项数量",
        "description": "每根柱子堆叠的收入分项数量"
      },
      {
        "key": "chartType",
        "label": "图表类型",
        "type": "segment",
        "default": "stacked",
        "def": "stacked",
        "options": [
          {
            "value": "stacked",
            "label": "堆叠"
          },
          {
            "value": "grouped",
            "label": "分组"
          }
        ],
        "desc": "堆叠柱 或 分组柱",
        "publicKey": "chartType",
        "publicLabel": "图表类型",
        "description": "堆叠柱 或 分组柱"
      },
      {
        "key": "focus",
        "label": "高亮周期",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "高亮某个周期、弱化其余",
        "publicKey": "focus",
        "publicLabel": "高亮周期",
        "description": "高亮某个周期、弱化其余"
      },
      {
        "key": "focusIndex",
        "label": "高亮第几个",
        "type": "slider",
        "default": 6,
        "def": 6,
        "min": 1,
        "max": 8,
        "step": 1,
        "dependsOn": "focus",
        "desc": "被高亮周期的序号（1 起）",
        "publicKey": "focusIndex",
        "publicLabel": "高亮第几个",
        "description": "被高亮周期的序号（1 起）"
      },
      {
        "key": "showValues",
        "label": "数值标签",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏每柱顶部合计",
        "publicKey": "showValueLabels",
        "publicLabel": "数值标签",
        "description": "显示/隐藏每柱顶部合计"
      },
      {
        "key": "showGrid",
        "label": "网格线",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏背景横向网格线",
        "publicKey": "showGrid",
        "publicLabel": "网格线",
        "description": "显示/隐藏背景横向网格线"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#f15a29",
        "def": "#f15a29",
        "options": [
          "#f15a29",
          "#5a138e",
          "#3bb6ec",
          "#1f6b2a"
        ],
        "desc": "主分项 / 高亮 / 页脚强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "主分项 / 高亮 / 页脚强调色"
      }
    ],
    "defaultProps": {
      "accent": "#f15a29",
      "periodCount": 6,
      "seriesCount": 3,
      "chartType": "stacked",
      "focus": true,
      "focusIndex": 6,
      "showValues": true,
      "showGrid": true,
      "barMeta": "50 — Stacked Bars",
      "kicker": "收入结构 / Revenue Mix",
      "title": "不止增长，而是[[越来越稳]]。",
      "periods": [
        "Q1·24",
        "Q2·24",
        "Q3·24",
        "Q4·24",
        "Q1·25",
        "Q2·25",
        "Q3·25",
        "Q4·25"
      ],
      "series": [
        {
          "cn": "流媒体版税",
          "en": "Streaming"
        },
        {
          "cn": "直连粉丝",
          "en": "Direct"
        },
        {
          "cn": "授权与演出",
          "en": "Sync & Live"
        }
      ],
      "data": [
        [
          28,
          10,
          6
        ],
        [
          34,
          14,
          8
        ],
        [
          40,
          18,
          11
        ],
        [
          49,
          22,
          14
        ],
        [
          57,
          28,
          17
        ],
        [
          66,
          35,
          21
        ],
        [
          74,
          41,
          26
        ],
        [
          83,
          48,
          30
        ]
      ],
      "page": "50",
      "total": "82"
    }
  },
  {
    "key": "theme12_page055",
    "themeKey": "theme12",
    "pageNumber": 55,
    "layout": "THEME12-055",
    "slot": "ranking",
    "label": "平台排行 / Ranking",
    "bgClass": "",
    "controls": [
      {
        "key": "barCount",
        "label": "条目数量",
        "type": "slider",
        "default": 6,
        "def": 6,
        "min": 4,
        "max": 7,
        "step": 1,
        "desc": "排行展示的平台条目数量",
        "publicKey": "itemCount",
        "publicLabel": "条目数量",
        "description": "排行展示的平台条目数量"
      },
      {
        "key": "showValue",
        "label": "数值标签",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏每条末端的数值",
        "publicKey": "showValueLabels",
        "publicLabel": "数值标签",
        "description": "显示/隐藏每条末端的数值"
      },
      {
        "key": "showAxis",
        "label": "刻度网格",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏背景刻度网格",
        "publicKey": "showAxis",
        "publicLabel": "刻度网格",
        "description": "显示/隐藏背景刻度网格"
      },
      {
        "key": "focus",
        "label": "重点强调",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "高亮某一条，弱化其余",
        "publicKey": "focus",
        "publicLabel": "重点强调",
        "description": "高亮某一条，弱化其余"
      },
      {
        "key": "focusIndex",
        "label": "强调第几条",
        "type": "slider",
        "default": 1,
        "def": 1,
        "min": 1,
        "max": 7,
        "step": 1,
        "dependsOn": "focus",
        "desc": "被强调条目的序号（1 起）",
        "publicKey": "focusIndex",
        "publicLabel": "强调第几条",
        "description": "被强调条目的序号（1 起）"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#f15a29",
        "def": "#f15a29",
        "options": [
          "#f15a29",
          "#5a138e",
          "#3bb6ec",
          "#1f6b2a"
        ],
        "desc": "榜首 / 导语 / 页脚强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "榜首 / 导语 / 页脚强调色"
      }
    ],
    "defaultProps": {
      "accent": "#f15a29",
      "barCount": 6,
      "showValue": true,
      "showAxis": true,
      "focus": true,
      "focusIndex": 1,
      "barMeta": "51 — Ranking",
      "kicker": "平台排行 / By Platform",
      "title": "收入来自[[哪里]]，一目了然。",
      "caption": "近 12 个月\n版税占比",
      "ghost": "37",
      "rows": [
        {
          "cn": "声浪 直连",
          "en": "SoundWave Direct",
          "v": 100,
          "share": "38%"
        },
        {
          "cn": "Spotify",
          "en": "Streaming",
          "v": 74,
          "share": "22%"
        },
        {
          "cn": "Apple Music",
          "en": "Streaming",
          "v": 58,
          "share": "15%"
        },
        {
          "cn": "网易云 / QQ",
          "en": "Streaming",
          "v": 46,
          "share": "12%"
        },
        {
          "cn": "现场 & 周边",
          "en": "Live & Merch",
          "v": 33,
          "share": "8%"
        },
        {
          "cn": "YouTube",
          "en": "Video",
          "v": 22,
          "share": "4%"
        },
        {
          "cn": "授权 / 同步",
          "en": "Sync",
          "v": 13,
          "share": "1%"
        }
      ],
      "page": "51",
      "total": "82"
    }
  },
  {
    "key": "theme12_page056",
    "themeKey": "theme12",
    "pageNumber": 56,
    "layout": "THEME12-056",
    "slot": "gauges",
    "label": "仪表盘 / Gauges",
    "bgClass": "",
    "controls": [
      {
        "key": "gaugeCount",
        "label": "仪表数量",
        "type": "slider",
        "default": 3,
        "def": 3,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "环形仪表的数量",
        "publicKey": "gaugeCount",
        "publicLabel": "仪表数量",
        "description": "环形仪表的数量"
      },
      {
        "key": "showTrack",
        "label": "底环轨道",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏环形底色轨道",
        "publicKey": "showGuide",
        "publicLabel": "底环轨道",
        "description": "显示/隐藏环形底色轨道"
      },
      {
        "key": "theme",
        "label": "配色",
        "type": "segment",
        "default": "light",
        "def": "light",
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
        "desc": "页面整体明暗配色",
        "publicKey": "theme",
        "publicLabel": "配色",
        "description": "页面整体明暗配色"
      },
      {
        "key": "showLede",
        "label": "显示导语",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏标题区导语",
        "publicKey": "showLede",
        "publicLabel": "显示导语",
        "description": "显示/隐藏标题区导语"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#f15a29",
        "def": "#f15a29",
        "options": [
          "#f15a29",
          "#5a138e",
          "#3bb6ec",
          "#1f6b2a"
        ],
        "desc": "首个仪表 / 高亮 / 页脚强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "首个仪表 / 高亮 / 页脚强调色"
      }
    ],
    "defaultProps": {
      "accent": "#f15a29",
      "gaugeCount": 3,
      "showTrack": true,
      "showLede": true,
      "theme": "light",
      "barMeta": "52 — Gauges",
      "kicker": "健康度 / Health",
      "title": "几个我们[[最在意]]的数。",
      "lede": "不是越大越好，而是越透明越好——这些环，量的是创作者对平台的信任。",
      "gauges": [
        {
          "pct": 94,
          "cn": "版税透明度",
          "en": "Transparency",
          "note": "每一分都可追溯"
        },
        {
          "pct": 88,
          "cn": "创作者留存",
          "en": "Retention",
          "note": "年度续约率"
        },
        {
          "pct": 72,
          "cn": "收入来自直连",
          "en": "Direct income",
          "note": "非平台抽成部分"
        },
        {
          "pct": 65,
          "cn": "海外结算占比",
          "en": "Global payout",
          "note": "多币种实时"
        }
      ],
      "page": "52",
      "total": "82"
    }
  },
  {
    "key": "theme12_page057",
    "themeKey": "theme12",
    "pageNumber": 57,
    "layout": "THEME12-057",
    "slot": "bullet",
    "label": "子弹图 / Bullet",
    "bgClass": "",
    "controls": [
      {
        "key": "rowCount",
        "label": "指标数量",
        "type": "slider",
        "default": 4,
        "def": 4,
        "min": 3,
        "max": 5,
        "step": 1,
        "desc": "子弹图的指标行数",
        "publicKey": "rowCount",
        "publicLabel": "指标数量",
        "description": "子弹图的指标行数"
      },
      {
        "key": "showBands",
        "label": "区间底色",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏差/中/好的区间底色",
        "publicKey": "showBands",
        "publicLabel": "区间底色",
        "description": "显示/隐藏差/中/好的区间底色"
      },
      {
        "key": "showTarget",
        "label": "目标刻度",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏目标值竖线",
        "publicKey": "showTarget",
        "publicLabel": "目标刻度",
        "description": "显示/隐藏目标值竖线"
      },
      {
        "key": "focus",
        "label": "聚焦高亮",
        "type": "toggle",
        "default": false,
        "def": false,
        "desc": "突出其中一行，其余淡化",
        "publicKey": "focus",
        "publicLabel": "聚焦高亮",
        "description": "突出其中一行，其余淡化"
      },
      {
        "key": "focusIndex",
        "label": "聚焦第几行",
        "type": "slider",
        "default": 1,
        "def": 1,
        "min": 1,
        "max": 5,
        "step": 1,
        "dependsOn": "focus",
        "desc": "高亮的指标行序号",
        "publicKey": "focusIndex",
        "publicLabel": "聚焦第几行",
        "description": "高亮的指标行序号"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#1f6b2a",
        "def": "#1f6b2a",
        "options": [
          "#1f6b2a",
          "#f15a29",
          "#3bb6ec",
          "#5a138e"
        ],
        "desc": "达成条 / 导语 / 页脚强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "达成条 / 导语 / 页脚强调色"
      }
    ],
    "defaultProps": {
      "accent": "#1f6b2a",
      "rowCount": 4,
      "showBands": true,
      "showTarget": true,
      "focus": false,
      "focusIndex": 1,
      "barMeta": "53 — Bullet",
      "kicker": "子弹图 / Bullet",
      "title": "目标对账，[[一条看清]]。",
      "legendDone": "达成",
      "legendTarget": "目标",
      "hitLabel": "达标",
      "missLabel": "追赶中",
      "kpis": [
        {
          "t": "版税到账速度",
          "s": "Payout speed",
          "v": 88,
          "target": 75,
          "disp": "72h",
          "good": true
        },
        {
          "t": "创作者留存率",
          "s": "Retention",
          "v": 81,
          "target": 80,
          "disp": "81%",
          "good": true
        },
        {
          "t": "全球分发覆盖",
          "s": "Distribution",
          "v": 72,
          "target": 85,
          "disp": "30+",
          "good": false
        },
        {
          "t": "版税透明度",
          "s": "Transparency",
          "v": 95,
          "target": 70,
          "disp": "100%",
          "good": true
        },
        {
          "t": "客服响应",
          "s": "Support SLA",
          "v": 64,
          "target": 75,
          "disp": "4.2h",
          "good": false
        }
      ],
      "page": "53",
      "total": "82"
    }
  },
  {
    "key": "theme12_page058",
    "themeKey": "theme12",
    "pageNumber": 58,
    "layout": "THEME12-058",
    "slot": "pyramid",
    "label": "受众分层 / Pyramid",
    "bgClass": "",
    "controls": [
      {
        "key": "tierCount",
        "label": "分层数量",
        "type": "slider",
        "default": 5,
        "def": 5,
        "min": 4,
        "max": 6,
        "step": 1,
        "desc": "受众年龄分层的数量",
        "publicKey": "tierCount",
        "publicLabel": "分层数量",
        "description": "受众年龄分层的数量"
      },
      {
        "key": "showValues",
        "label": "数值标签",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏每条占比数值",
        "publicKey": "showValueLabels",
        "publicLabel": "数值标签",
        "description": "显示/隐藏每条占比数值"
      },
      {
        "key": "showAxis",
        "label": "中轴线",
        "type": "toggle",
        "default": false,
        "def": false,
        "desc": "显示/隐藏中央分隔轴",
        "publicKey": "showAxis",
        "publicLabel": "中轴线",
        "description": "显示/隐藏中央分隔轴"
      },
      {
        "key": "focus",
        "label": "高亮某层",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "高亮某一分层、弱化其余",
        "publicKey": "focus",
        "publicLabel": "高亮某层",
        "description": "高亮某一分层、弱化其余"
      },
      {
        "key": "focusIndex",
        "label": "高亮第几层",
        "type": "slider",
        "default": 2,
        "def": 2,
        "min": 1,
        "max": 6,
        "step": 1,
        "dependsOn": "focus",
        "desc": "被高亮分层的序号（自上而下，1 起）",
        "publicKey": "focusIndex",
        "publicLabel": "高亮第几层",
        "description": "被高亮分层的序号（自上而下，1 起）"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#f15a29",
        "def": "#f15a29",
        "options": [
          "#f15a29",
          "#5a138e",
          "#3bb6ec",
          "#1f6b2a"
        ],
        "desc": "左列 / 高亮 / 页脚强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "左列 / 高亮 / 页脚强调色"
      }
    ],
    "defaultProps": {
      "accent": "#f15a29",
      "tierCount": 5,
      "showValues": true,
      "showAxis": false,
      "focus": true,
      "focusIndex": 2,
      "barMeta": "54 — Pyramid",
      "kicker": "受众分层 / Audience",
      "title": "线上线下，[[同一批人]]。",
      "legendLeft": {
        "t": "线上听众",
        "e": "Online"
      },
      "legendRight": {
        "t": "现场观众",
        "e": "Live"
      },
      "ageUnit": "岁",
      "tiers": [
        {
          "age": "18–24",
          "l": 32,
          "r": 24
        },
        {
          "age": "25–30",
          "l": 28,
          "r": 30
        },
        {
          "age": "31–36",
          "l": 19,
          "r": 22
        },
        {
          "age": "37–42",
          "l": 12,
          "r": 15
        },
        {
          "age": "43–50",
          "l": 6,
          "r": 7
        },
        {
          "age": "50+",
          "l": 3,
          "r": 2
        }
      ],
      "page": "54",
      "total": "82"
    }
  },
  {
    "key": "theme12_page059",
    "themeKey": "theme12",
    "pageNumber": 59,
    "layout": "THEME12-059",
    "slot": "radar",
    "label": "能力雷达 / Radar",
    "bgClass": "",
    "controls": [
      {
        "key": "axisCount",
        "label": "维度数",
        "type": "slider",
        "default": 6,
        "def": 6,
        "min": 4,
        "max": 6,
        "step": 1,
        "desc": "雷达图的能力维度数量",
        "publicKey": "axisCount",
        "publicLabel": "维度数",
        "description": "雷达图的能力维度数量"
      },
      {
        "key": "seriesCount",
        "label": "系列数",
        "type": "slider",
        "default": 2,
        "def": 2,
        "min": 1,
        "max": 2,
        "step": 1,
        "desc": "对比的系列数（声浪 / 传统）",
        "publicKey": "seriesCount",
        "publicLabel": "系列数",
        "description": "对比的系列数（声浪 / 传统）"
      },
      {
        "key": "showGrid",
        "label": "网格环",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏背景网格环与刻度",
        "publicKey": "showGrid",
        "publicLabel": "网格环",
        "description": "显示/隐藏背景网格环与刻度"
      },
      {
        "key": "showLabels",
        "label": "维度标签",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏外圈维度名称",
        "publicKey": "showLabels",
        "publicLabel": "维度标签",
        "description": "显示/隐藏外圈维度名称"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#5a138e",
        "def": "#5a138e",
        "options": [
          "#5a138e",
          "#f15a29",
          "#3bb6ec",
          "#1f6b2a"
        ],
        "desc": "主系列 / 页脚强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "主系列 / 页脚强调色"
      }
    ],
    "defaultProps": {
      "accent": "#5a138e",
      "axisCount": 6,
      "seriesCount": 2,
      "showGrid": true,
      "showLabels": true,
      "barMeta": "55 — Radar",
      "kicker": "能力雷达 / Capability",
      "title": "同一把尺子，\n[[六个维度]]全面领先。",
      "intro": "把发行、版权、结算与数据放在一张图上比较——声浪几乎贴着外环，传统路径仍困在中心。",
      "seriesAName": "声浪 SoundWave",
      "seriesBName": "传统发行 Legacy",
      "axes": [
        {
          "cn": "分成",
          "en": "Payout",
          "a": 0.96,
          "b": 0.45
        },
        {
          "cn": "版权",
          "en": "Rights",
          "a": 0.92,
          "b": 0.4
        },
        {
          "cn": "数据",
          "en": "Insights",
          "a": 0.88,
          "b": 0.3
        },
        {
          "cn": "发行",
          "en": "Distro",
          "a": 0.9,
          "b": 0.62
        },
        {
          "cn": "粉丝",
          "en": "Fans",
          "a": 0.84,
          "b": 0.35
        },
        {
          "cn": "速度",
          "en": "Speed",
          "a": 0.94,
          "b": 0.5
        }
      ],
      "page": "55",
      "total": "82"
    }
  },
  {
    "key": "theme12_page060",
    "themeKey": "theme12",
    "pageNumber": 60,
    "layout": "THEME12-060",
    "slot": "matrix",
    "label": "定位矩阵 / Positioning",
    "bgClass": "",
    "controls": [
      {
        "key": "pointCount",
        "label": "对手数量",
        "type": "slider",
        "default": 5,
        "def": 5,
        "min": 3,
        "max": 6,
        "step": 1,
        "desc": "矩阵中除声浪外的对照点数量",
        "publicKey": "pointCount",
        "publicLabel": "对手数量",
        "description": "矩阵中除声浪外的对照点数量"
      },
      {
        "key": "showQuadrants",
        "label": "象限标注",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏象限底色与标签",
        "publicKey": "showQuadrants",
        "publicLabel": "象限标注",
        "description": "显示/隐藏象限底色与标签"
      },
      {
        "key": "showGrid",
        "label": "坐标网格",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏坐标轴与网格",
        "publicKey": "showGrid",
        "publicLabel": "坐标网格",
        "description": "显示/隐藏坐标轴与网格"
      },
      {
        "key": "showRivalLabels",
        "label": "对手标签",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏对照点名称",
        "publicKey": "showRivalLabels",
        "publicLabel": "对手标签",
        "description": "显示/隐藏对照点名称"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#f15a29",
        "def": "#f15a29",
        "options": [
          "#f15a29",
          "#5a138e",
          "#3bb6ec",
          "#1f6b2a"
        ],
        "desc": "声浪点 / 高亮 / 页脚强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "声浪点 / 高亮 / 页脚强调色"
      }
    ],
    "defaultProps": {
      "accent": "#f15a29",
      "pointCount": 5,
      "showQuadrants": true,
      "showGrid": true,
      "showRivalLabels": true,
      "barMeta": "56 — Positioning",
      "kicker": "市场定位 / Where We Sit",
      "title": "把创作者放回\n[[坐标原点]]。",
      "intro": "越往右上，越透明、越属于创作者本人。大多数方案挤在左下——而声浪，独自站在那个理应属于你的象限。",
      "quadrantTop": "创作者主权 · 透明",
      "quadrantBottom": "平台主导 · 不透明",
      "axisX": "结算透明度 →",
      "axisY": "创作者掌控力 →",
      "ownLegend": "声浪 · 创作者主权象限",
      "rivalLegend": "传统方案 ·",
      "own": {
        "cn": "声浪",
        "en": "SoundWave",
        "x": 82,
        "y": 86
      },
      "rivals": [
        {
          "cn": "传统厂牌",
          "en": "Labels",
          "x": 22,
          "y": 24
        },
        {
          "cn": "聚合分发",
          "en": "Aggregators",
          "x": 58,
          "y": 40
        },
        {
          "cn": "流媒体直发",
          "en": "DSP Direct",
          "x": 46,
          "y": 62
        },
        {
          "cn": "自建独立",
          "en": "DIY",
          "x": 30,
          "y": 70
        },
        {
          "cn": "版权代理",
          "en": "Publishers",
          "x": 40,
          "y": 30
        },
        {
          "cn": "经纪公司",
          "en": "Agencies",
          "x": 26,
          "y": 48
        }
      ],
      "page": "56",
      "total": "82"
    }
  },
  {
    "key": "theme12_page061",
    "themeKey": "theme12",
    "pageNumber": 61,
    "layout": "THEME12-061",
    "slot": "scorecard",
    "label": "评分表 / Scorecard",
    "bgClass": "",
    "controls": [
      {
        "key": "columnCount",
        "label": "方案数量",
        "type": "slider",
        "default": 3,
        "def": 3,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "参与对比的方案（列）数量",
        "publicKey": "columnCount",
        "publicLabel": "方案数量",
        "description": "参与对比的方案（列）数量"
      },
      {
        "key": "rowCount",
        "label": "评估维度",
        "type": "slider",
        "default": 5,
        "def": 5,
        "min": 4,
        "max": 6,
        "step": 1,
        "desc": "评估维度（行）数量",
        "publicKey": "rowCount",
        "publicLabel": "评估维度",
        "description": "评估维度（行）数量"
      },
      {
        "key": "focusIndex",
        "label": "高亮方案",
        "type": "slider",
        "default": 1,
        "def": 1,
        "min": 1,
        "max": 4,
        "step": 1,
        "desc": "高亮强调的方案列",
        "publicKey": "focusIndex",
        "publicLabel": "高亮方案",
        "description": "高亮强调的方案列"
      },
      {
        "key": "showTotals",
        "label": "合计得分",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏底部合计得分",
        "publicKey": "showTotals",
        "publicLabel": "合计得分",
        "description": "显示/隐藏底部合计得分"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#5a138e",
        "def": "#5a138e",
        "options": [
          "#5a138e",
          "#f15a29",
          "#3bb6ec",
          "#1f6b2a"
        ],
        "desc": "高亮列 / 导语 / 页脚强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "高亮列 / 导语 / 页脚强调色"
      }
    ],
    "defaultProps": {
      "accent": "#5a138e",
      "columnCount": 3,
      "rowCount": 5,
      "focusIndex": 1,
      "showTotals": true,
      "barMeta": "57 — Scorecard",
      "kicker": "评分表 / Scorecard",
      "title": "同台评分，[[高下立见]]。",
      "dimensionLabel": "评估维度",
      "totalLabel": "合计",
      "cols": [
        {
          "t": "声浪 OS",
          "s": "一体化"
        },
        {
          "t": "传统厂牌",
          "s": "代理制"
        },
        {
          "t": "自助平台",
          "s": "DIY"
        },
        {
          "t": "经纪公司",
          "s": "托管"
        }
      ],
      "rows": [
        {
          "t": "版税透明",
          "s": "Transparency",
          "v": [
            5,
            2,
            3,
            2
          ]
        },
        {
          "t": "到账速度",
          "s": "Payout speed",
          "v": [
            5,
            2,
            4,
            3
          ]
        },
        {
          "t": "全球分发",
          "s": "Distribution",
          "v": [
            4,
            3,
            5,
            3
          ]
        },
        {
          "t": "版权掌控",
          "s": "Ownership",
          "v": [
            5,
            1,
            4,
            2
          ]
        },
        {
          "t": "运营支持",
          "s": "Support",
          "v": [
            4,
            5,
            2,
            5
          ]
        },
        {
          "t": "综合费率",
          "s": "Fees",
          "v": [
            5,
            2,
            4,
            2
          ]
        }
      ],
      "page": "57",
      "total": "82"
    }
  },
  {
    "key": "theme12_page062",
    "themeKey": "theme12",
    "pageNumber": 62,
    "layout": "THEME12-062",
    "slot": "bignumber",
    "label": "大数字 / By the Numbers",
    "bgClass": "",
    "controls": [
      {
        "key": "theme",
        "label": "配色",
        "type": "segment",
        "default": "dark",
        "def": "dark",
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
        "desc": "页面整体明暗配色",
        "publicKey": "theme",
        "publicLabel": "配色",
        "description": "页面整体明暗配色"
      },
      {
        "key": "showTrend",
        "label": "趋势图",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏主数字旁的小条形趋势",
        "publicKey": "showTrend",
        "publicLabel": "趋势图",
        "description": "显示/隐藏主数字旁的小条形趋势"
      },
      {
        "key": "showSupporting",
        "label": "辅助指标",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏底部辅助数据行",
        "publicKey": "showSupporting",
        "publicLabel": "辅助指标",
        "description": "显示/隐藏底部辅助数据行"
      },
      {
        "key": "supportingCount",
        "label": "辅助数量",
        "type": "slider",
        "default": 3,
        "def": 3,
        "min": 0,
        "max": 3,
        "step": 1,
        "dependsOn": "showSupporting",
        "desc": "底部辅助指标的数量",
        "publicKey": "supportingCount",
        "publicLabel": "辅助数量",
        "description": "底部辅助指标的数量"
      },
      {
        "key": "showDecorations",
        "label": "显示装饰",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏几何装饰图形",
        "publicKey": "showDecorations",
        "publicLabel": "显示装饰",
        "description": "显示/隐藏几何装饰图形"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#3bb6ec",
        "def": "#3bb6ec",
        "options": [
          "#3bb6ec",
          "#f15a29",
          "#5a138e",
          "#1f6b2a"
        ],
        "desc": "主数字 / 导语 / 页脚强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "主数字 / 导语 / 页脚强调色"
      }
    ],
    "defaultProps": {
      "accent": "#3bb6ec",
      "theme": "dark",
      "showTrend": true,
      "showSupporting": true,
      "supportingCount": 3,
      "showDecorations": true,
      "barMeta": "58 — By the Numbers",
      "kicker": "截至 2026 / To Date",
      "prefix": "¥",
      "figure": "2.4",
      "suffix": "亿+",
      "caption": "已发放给独立音乐人的版税总额",
      "captionEn": "Total royalties paid out to independent artists",
      "trend": [
        0.32,
        0.46,
        0.41,
        0.62,
        0.78,
        1
      ],
      "supporting": [
        {
          "v": "12k+",
          "lb": "Artists",
          "ds": "入驻音乐人与厂牌"
        },
        {
          "v": "30+",
          "lb": "Platforms",
          "ds": "同步分发平台"
        },
        {
          "v": "72h",
          "lb": "Payout",
          "ds": "版税平均到账"
        }
      ],
      "page": "58",
      "total": "82"
    }
  },
  {
    "key": "theme12_page063",
    "themeKey": "theme12",
    "pageNumber": 63,
    "layout": "THEME12-063",
    "slot": "stat3",
    "label": "三连大数 / Headline Stats",
    "bgClass": "",
    "controls": [
      {
        "key": "theme",
        "label": "配色",
        "type": "segment",
        "default": "light",
        "def": "light",
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
        "desc": "页面整体明暗配色",
        "publicKey": "theme",
        "publicLabel": "配色",
        "description": "页面整体明暗配色"
      },
      {
        "key": "statCount",
        "label": "数字数量",
        "type": "slider",
        "default": 3,
        "def": 3,
        "min": 2,
        "max": 3,
        "step": 1,
        "desc": "并置的大数字数量",
        "publicKey": "statCount",
        "publicLabel": "数字数量",
        "description": "并置的大数字数量"
      },
      {
        "key": "showDividers",
        "label": "分隔线",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏数字之间的竖向分隔线",
        "publicKey": "showDividers",
        "publicLabel": "分隔线",
        "description": "显示/隐藏数字之间的竖向分隔线"
      },
      {
        "key": "showDecorations",
        "label": "显示装饰",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏几何装饰图形",
        "publicKey": "showDecorations",
        "publicLabel": "显示装饰",
        "description": "显示/隐藏几何装饰图形"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#f15a29",
        "def": "#f15a29",
        "options": [
          "#f15a29",
          "#5a138e",
          "#3bb6ec",
          "#1f6b2a"
        ],
        "desc": "首个数字 / 导语 / 页脚强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "首个数字 / 导语 / 页脚强调色"
      }
    ],
    "defaultProps": {
      "accent": "#f15a29",
      "theme": "light",
      "statCount": 3,
      "showDividers": true,
      "showDecorations": true,
      "barMeta": "59 — Headline Stats",
      "kicker": "截至 2026 / By the Numbers",
      "title": "三个数字，说清声浪的一年。",
      "stats": [
        {
          "v": "12万+",
          "lb": "入驻音乐人",
          "s": "Independent artists onboard"
        },
        {
          "v": "¥2.4亿",
          "lb": "已发版税",
          "s": "Royalties paid to date"
        },
        {
          "v": "72h",
          "lb": "平均到账",
          "s": "Average payout time"
        }
      ],
      "page": "59",
      "total": "82"
    }
  },
  {
    "key": "theme12_page064",
    "themeKey": "theme12",
    "pageNumber": 64,
    "layout": "THEME12-064",
    "slot": "scoreboard",
    "label": "记分牌 / Scoreboard",
    "bgClass": "",
    "controls": [
      {
        "key": "statCount",
        "label": "指标数量",
        "type": "slider",
        "default": 4,
        "def": 4,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "记分牌上的大数字指标数量",
        "publicKey": "statCount",
        "publicLabel": "指标数量",
        "description": "记分牌上的大数字指标数量"
      },
      {
        "key": "columns",
        "label": "栏数",
        "type": "segment",
        "default": 2,
        "def": 2,
        "options": [
          {
            "value": 2,
            "label": "2 栏"
          },
          {
            "value": 4,
            "label": "4 栏"
          }
        ],
        "desc": "指标块的排布列数",
        "publicKey": "columns",
        "publicLabel": "栏数",
        "description": "指标块的排布列数"
      },
      {
        "key": "showDelta",
        "label": "同比",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏同比涨跌标记",
        "publicKey": "showDelta",
        "publicLabel": "同比",
        "description": "显示/隐藏同比涨跌标记"
      },
      {
        "key": "showSpark",
        "label": "迷你走势",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏迷你趋势线",
        "publicKey": "showSpark",
        "publicLabel": "迷你走势",
        "description": "显示/隐藏迷你趋势线"
      },
      {
        "key": "showLede",
        "label": "显示导语",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏标题区导语",
        "publicKey": "showLede",
        "publicLabel": "显示导语",
        "description": "显示/隐藏标题区导语"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#f15a29",
        "def": "#f15a29",
        "options": [
          "#f15a29",
          "#5a138e",
          "#3bb6ec",
          "#1f6b2a"
        ],
        "desc": "导语高亮 / 页脚强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "导语高亮 / 页脚强调色"
      }
    ],
    "defaultProps": {
      "accent": "#f15a29",
      "statCount": 4,
      "columns": 2,
      "showDelta": true,
      "showSpark": true,
      "showLede": true,
      "barMeta": "60 — Scoreboard",
      "kicker": "记分牌 / By The Numbers",
      "title": "数字不会[[说谎]]。",
      "lede": "一块只属于创作者的记分牌——发出去多少、回到谁手里，全摆在台面上。",
      "stats": [
        {
          "big": "¥2.4亿",
          "unit": "累计版税发放",
          "en": "Royalties paid",
          "delta": "+182%",
          "up": true,
          "spark": [
            10,
            14,
            13,
            20,
            26,
            31,
            40
          ]
        },
        {
          "big": "12,400",
          "unit": "活跃独立音乐人",
          "en": "Active artists",
          "delta": "+64%",
          "up": true,
          "spark": [
            8,
            11,
            15,
            17,
            22,
            28,
            33
          ]
        },
        {
          "big": "72h",
          "unit": "平均结算时长",
          "en": "Avg payout time",
          "delta": "−58%",
          "up": false,
          "spark": [
            40,
            33,
            28,
            22,
            18,
            14,
            12
          ]
        },
        {
          "big": "30+",
          "unit": "一键分发平台",
          "en": "Distribution targets",
          "delta": "+9",
          "up": true,
          "spark": [
            12,
            14,
            16,
            19,
            22,
            26,
            30
          ]
        }
      ],
      "page": "60",
      "total": "82"
    }
  },
  {
    "key": "theme12_page065",
    "themeKey": "theme12",
    "pageNumber": 65,
    "layout": "THEME12-065",
    "slot": "mosaic",
    "label": "影像拼贴 / Gallery",
    "bgClass": "",
    "controls": [
      {
        "key": "mediaCount",
        "label": "图片数量",
        "type": "slider",
        "default": 4,
        "def": 4,
        "min": 2,
        "max": 5,
        "step": 1,
        "desc": "拼贴中的图片块数量",
        "publicKey": "mediaCount",
        "publicLabel": "图片数量",
        "description": "拼贴中的图片块数量"
      },
      {
        "key": "mediaFit",
        "label": "图片填充",
        "type": "segment",
        "default": "cover",
        "def": "cover",
        "options": [
          {
            "value": "cover",
            "label": "裁切"
          },
          {
            "value": "contain",
            "label": "完整"
          }
        ],
        "desc": "图片的填充方式",
        "publicKey": "mediaFit",
        "publicLabel": "图片填充",
        "description": "图片的填充方式"
      },
      {
        "key": "gap",
        "label": "间距",
        "type": "slider",
        "default": 14,
        "def": 14,
        "min": 4,
        "max": 28,
        "step": 2,
        "desc": "拼贴块之间的间距",
        "publicKey": "gap",
        "publicLabel": "间距",
        "description": "拼贴块之间的间距"
      },
      {
        "key": "showCaptions",
        "label": "图块编号",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏图块上的编号角标",
        "publicKey": "showCaptions",
        "publicLabel": "图块编号",
        "description": "显示/隐藏图块上的编号角标"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#1f6b2a",
        "def": "#1f6b2a",
        "options": [
          "#1f6b2a",
          "#5a138e",
          "#f15a29",
          "#3bb6ec"
        ],
        "desc": "文字块 / 角标强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "文字块 / 角标强调色"
      }
    ],
    "defaultProps": {
      "accent": "#1f6b2a",
      "mediaCount": 4,
      "mediaFit": "cover",
      "gap": 14,
      "showCaptions": true,
      "media": [],
      "brand": "声浪 SOUNDWAVE",
      "title": "一帧一帧，\n都是[[现场]]。",
      "hint": "Gallery — drag to fill",
      "mediaPlaceholder": "拖入图片",
      "page": "61",
      "total": "82"
    }
  },
  {
    "key": "theme12_page066",
    "themeKey": "theme12",
    "pageNumber": 66,
    "layout": "THEME12-066",
    "slot": "zine",
    "label": "拼贴海报 / Zine",
    "bgClass": "",
    "controls": [
      {
        "key": "scrapCount",
        "label": "拼贴张数",
        "type": "slider",
        "default": 3,
        "def": 3,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "拼贴中的照片碎片数量",
        "publicKey": "scrapCount",
        "publicLabel": "拼贴张数",
        "description": "拼贴中的照片碎片数量"
      },
      {
        "key": "mediaFit",
        "label": "图片填充",
        "type": "segment",
        "default": "cover",
        "def": "cover",
        "options": [
          {
            "value": "cover",
            "label": "裁切"
          },
          {
            "value": "contain",
            "label": "完整"
          }
        ],
        "desc": "碎片图填充方式",
        "publicKey": "mediaFit",
        "publicLabel": "图片填充",
        "description": "碎片图填充方式"
      },
      {
        "key": "showTape",
        "label": "胶带",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏贴在碎片上的胶带",
        "publicKey": "showTape",
        "publicLabel": "胶带",
        "description": "显示/隐藏贴在碎片上的胶带"
      },
      {
        "key": "tilt",
        "label": "倾斜角度",
        "type": "slider",
        "default": 5,
        "def": 5,
        "min": 0,
        "max": 10,
        "step": 1,
        "desc": "碎片随机倾斜的基准角度",
        "publicKey": "tilt",
        "publicLabel": "倾斜角度",
        "description": "碎片随机倾斜的基准角度"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#baf04f",
        "def": "#baf04f",
        "options": [
          "#baf04f",
          "#f15a29",
          "#3bb6ec",
          "#d61fb5"
        ],
        "desc": "标语高亮 / 页脚强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "标语高亮 / 页脚强调色"
      }
    ],
    "defaultProps": {
      "accent": "#baf04f",
      "scrapCount": 3,
      "mediaFit": "cover",
      "showTape": true,
      "tilt": 5,
      "media": [],
      "barMeta": "62 — Zine",
      "eyebrow": "ISSUE 04 · 自己印",
      "line1": "剪下来，",
      "line2": "贴上去，",
      "line3": "就是态度",
      "intro": "独立不是风格，是方法。把现场、样带、手写歌词一把抓起，钉成一张属于自己的海报。",
      "mediaPlaceholder": "拖入碎片",
      "scrapTint": [
        "#3bb6ec",
        "#f15a29",
        "#baf04f",
        "#c44ee0"
      ],
      "page": "62",
      "total": "82"
    }
  },
  {
    "key": "theme12_page067",
    "themeKey": "theme12",
    "pageNumber": 67,
    "layout": "THEME12-067",
    "slot": "moodboard",
    "label": "灵感板 / Moodboard",
    "bgClass": "",
    "controls": [
      {
        "key": "mediaCount",
        "label": "照片数量",
        "type": "slider",
        "default": 4,
        "def": 4,
        "min": 3,
        "max": 6,
        "step": 1,
        "desc": "灵感板上钉住的照片数量",
        "publicKey": "mediaCount",
        "publicLabel": "照片数量",
        "description": "灵感板上钉住的照片数量"
      },
      {
        "key": "mediaFit",
        "label": "图片填充",
        "type": "segment",
        "default": "cover",
        "def": "cover",
        "options": [
          {
            "value": "cover",
            "label": "裁切"
          },
          {
            "value": "contain",
            "label": "完整"
          }
        ],
        "desc": "照片填充方式",
        "publicKey": "mediaFit",
        "publicLabel": "图片填充",
        "description": "照片填充方式"
      },
      {
        "key": "showSwatches",
        "label": "色卡",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏右侧配色色卡",
        "publicKey": "showSwatches",
        "publicLabel": "色卡",
        "description": "显示/隐藏右侧配色色卡"
      },
      {
        "key": "showNote",
        "label": "便签",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏右侧手写便签",
        "publicKey": "showNote",
        "publicLabel": "便签",
        "description": "显示/隐藏右侧手写便签"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#f15a29",
        "def": "#f15a29",
        "options": [
          "#f15a29",
          "#5a138e",
          "#3bb6ec",
          "#1f6b2a"
        ],
        "desc": "导语 / 高亮 / 页脚强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "导语 / 高亮 / 页脚强调色"
      }
    ],
    "defaultProps": {
      "accent": "#f15a29",
      "mediaCount": 4,
      "mediaFit": "cover",
      "showSwatches": true,
      "showNote": true,
      "media": [],
      "barMeta": "63 — Moodboard",
      "kicker": "灵感板 / Moodboard",
      "title": "把氛围，[[先钉下来]]。",
      "metaPrefix": "视觉方向 ·",
      "paletteLabel": "Palette · 配色",
      "noteText": "暖橙 + 深墨\n留白要够\n质感 > 装饰",
      "noteSign": "— 视觉备忘",
      "mediaPlaceholder": "拖入灵感",
      "pin": [
        "#f15a29",
        "#3bb6ec",
        "#c44ee0",
        "#1f6b2a",
        "#fbb24d",
        "#d61fb5"
      ],
      "tilt": [
        -2.2,
        1.6,
        -1.4,
        2,
        -1.8,
        1.2
      ],
      "swatches": [
        "#f15a29",
        "#1c1416",
        "#3bb6ec",
        "#baf04f",
        "#f5e1e3",
        "#c44ee0"
      ],
      "page": "63",
      "total": "82"
    }
  },
  {
    "key": "theme12_page068",
    "themeKey": "theme12",
    "pageNumber": 68,
    "layout": "THEME12-068",
    "slot": "album",
    "label": "专辑曲目 / Tracklist",
    "bgClass": "",
    "controls": [
      {
        "key": "trackCount",
        "label": "条目数量",
        "type": "slider",
        "default": 8,
        "def": 8,
        "min": 5,
        "max": 10,
        "step": 1,
        "desc": "条目清单的条目数量",
        "publicKey": "itemCount",
        "publicLabel": "条目数量",
        "description": "条目清单的条目数量"
      },
      {
        "key": "showDuration",
        "label": "时长",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏每首条目的时长",
        "publicKey": "showDuration",
        "publicLabel": "时长",
        "description": "显示/隐藏每首条目的时长"
      },
      {
        "key": "coverSide",
        "label": "封面位置",
        "type": "segment",
        "default": "left",
        "def": "left",
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
        "desc": "封面图所在的一侧",
        "publicKey": "coverSide",
        "publicLabel": "封面位置",
        "description": "封面图所在的一侧"
      },
      {
        "key": "focus",
        "label": "重点高亮",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "高亮重点条目",
        "publicKey": "focus",
        "publicLabel": "重点高亮",
        "description": "高亮重点条目"
      },
      {
        "key": "focusIndex",
        "label": "重点序号",
        "type": "slider",
        "default": 3,
        "def": 3,
        "min": 1,
        "max": 10,
        "step": 1,
        "dependsOn": "focus",
        "desc": "重点条目的序号（1 起）",
        "publicKey": "focusIndex",
        "publicLabel": "重点序号",
        "description": "重点条目的序号（1 起）"
      },
      {
        "key": "mediaFit",
        "label": "封面填充",
        "type": "segment",
        "default": "cover",
        "def": "cover",
        "options": [
          {
            "value": "cover",
            "label": "裁切"
          },
          {
            "value": "contain",
            "label": "完整"
          }
        ],
        "desc": "封面的填充方式",
        "publicKey": "mediaFit",
        "publicLabel": "封面填充",
        "description": "封面的填充方式"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#f15a29",
        "def": "#f15a29",
        "options": [
          "#f15a29",
          "#5a138e",
          "#3bb6ec",
          "#1f6b2a"
        ],
        "desc": "重点 / 序号 / 页脚强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "重点 / 序号 / 页脚强调色"
      }
    ],
    "defaultProps": {
      "accent": "#f15a29",
      "trackCount": 8,
      "showDuration": true,
      "coverSide": "left",
      "focus": true,
      "focusIndex": 3,
      "mediaFit": "cover",
      "media": [],
      "barMeta": "64 — Tracklist",
      "coverTag": "LP · 2026",
      "albumTitle": "《现场》",
      "albumSub": "声浪首发 · 全网同步上线",
      "listTitle": "曲目[[清单]]",
      "tracksLabel": "TRACKS",
      "focusTag": "主打",
      "mediaPlaceholder": "拖入专辑封面",
      "tracks": [
        {
          "cn": "开场",
          "en": "Intro",
          "d": "1:12"
        },
        {
          "cn": "逆光",
          "en": "Backlight",
          "d": "3:48"
        },
        {
          "cn": "声浪",
          "en": "Soundwave",
          "d": "4:05"
        },
        {
          "cn": "夜班车",
          "en": "Last Bus",
          "d": "3:21"
        },
        {
          "cn": "潮汐",
          "en": "Tides",
          "d": "3:57"
        },
        {
          "cn": "空房间",
          "en": "Empty Room",
          "d": "4:32"
        },
        {
          "cn": "北纬",
          "en": "Latitude",
          "d": "3:09"
        },
        {
          "cn": "回声",
          "en": "Echo",
          "d": "4:18"
        },
        {
          "cn": "黎明前",
          "en": "Before Dawn",
          "d": "3:44"
        },
        {
          "cn": "尾声",
          "en": "Outro",
          "d": "2:05"
        }
      ],
      "page": "64",
      "total": "82"
    }
  },
  {
    "key": "theme12_page069",
    "themeKey": "theme12",
    "pageNumber": 69,
    "layout": "THEME12-069",
    "slot": "vinyl",
    "label": "黑胶 / Now Playing",
    "bgClass": "",
    "controls": [
      {
        "key": "recordSide",
        "label": "视觉元素位置",
        "type": "segment",
        "default": "left",
        "def": "left",
        "options": [
          {
            "value": "left",
            "label": "居左"
          },
          {
            "value": "right",
            "label": "居右"
          }
        ],
        "desc": "黑胶唱片所在的一侧",
        "publicKey": "visualSide",
        "publicLabel": "视觉元素位置",
        "description": "黑胶唱片所在的一侧"
      },
      {
        "key": "theme",
        "label": "配色",
        "type": "segment",
        "default": "dark",
        "def": "dark",
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
        "desc": "页面整体明暗配色",
        "publicKey": "theme",
        "publicLabel": "配色",
        "description": "页面整体明暗配色"
      },
      {
        "key": "showGrooves",
        "label": "环形纹理",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏环形纹理",
        "publicKey": "showGrooves",
        "publicLabel": "环形纹理",
        "description": "显示/隐藏环形纹理"
      },
      {
        "key": "showTracklist",
        "label": "条目表",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏右侧条目列表",
        "publicKey": "showItemList",
        "publicLabel": "条目表",
        "description": "显示/隐藏右侧条目列表"
      },
      {
        "key": "trackCount",
        "label": "条目数量",
        "type": "slider",
        "default": 4,
        "def": 4,
        "min": 3,
        "max": 6,
        "step": 1,
        "dependsOn": "showTracklist",
        "desc": "条目列表的行数",
        "publicKey": "itemCount",
        "publicLabel": "条目数量",
        "description": "条目列表的行数"
      },
      {
        "key": "mediaFit",
        "label": "图片填充",
        "type": "segment",
        "default": "cover",
        "def": "cover",
        "options": [
          {
            "value": "cover",
            "label": "裁切"
          },
          {
            "value": "contain",
            "label": "完整"
          }
        ],
        "desc": "封面图填充方式",
        "publicKey": "mediaFit",
        "publicLabel": "图片填充",
        "description": "封面图填充方式"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#d61fb5",
        "def": "#d61fb5",
        "options": [
          "#d61fb5",
          "#f15a29",
          "#3bb6ec",
          "#1f6b2a"
        ],
        "desc": "播放进度 / 高亮 / 页脚强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "播放进度 / 高亮 / 页脚强调色"
      }
    ],
    "defaultProps": {
      "accent": "#d61fb5",
      "theme": "dark",
      "recordSide": "left",
      "mediaFit": "cover",
      "showGrooves": true,
      "showTracklist": true,
      "trackCount": 4,
      "media": [],
      "barMeta": "65 — Now Playing",
      "kicker": "正在播放 / Now Playing",
      "trackTitle": "潮汐",
      "trackMeta": "午夜电台 Midnight Radio · 2026",
      "elapsed": "1:24",
      "duration": "3:42",
      "progress": 38,
      "nowLabel": "NOW",
      "mediaPlaceholder": "拖入封面",
      "tracks": [
        {
          "n": "01",
          "t": "潮汐 Tides",
          "d": "3:42"
        },
        {
          "n": "02",
          "t": "霓虹废墟 Neon Ruins",
          "d": "4:11"
        },
        {
          "n": "03",
          "t": "回声花园 Echo Garden",
          "d": "3:05"
        },
        {
          "n": "04",
          "t": "盐与光 Salt & Light",
          "d": "5:20"
        },
        {
          "n": "05",
          "t": "夜行列车 Night Train",
          "d": "4:48"
        },
        {
          "n": "06",
          "t": "低气压 Low Pressure",
          "d": "3:29"
        }
      ],
      "page": "65",
      "total": "82"
    }
  },
  {
    "key": "theme12_page070",
    "themeKey": "theme12",
    "pageNumber": 70,
    "layout": "THEME12-070",
    "slot": "gridwall",
    "label": "图墙 / Grid Wall",
    "bgClass": "",
    "controls": [
      {
        "key": "mediaCount",
        "label": "图片数量",
        "type": "slider",
        "default": 7,
        "def": 7,
        "min": 4,
        "max": 8,
        "step": 1,
        "desc": "图墙中的图片格数量（另含一个标题格）",
        "publicKey": "mediaCount",
        "publicLabel": "图片数量",
        "description": "图墙中的图片格数量（另含一个标题格）"
      },
      {
        "key": "columns",
        "label": "栏数",
        "type": "segment",
        "default": 4,
        "def": 4,
        "options": [
          {
            "value": 3,
            "label": "3 栏"
          },
          {
            "value": 4,
            "label": "4 栏"
          }
        ],
        "desc": "图墙的列数",
        "publicKey": "columns",
        "publicLabel": "栏数",
        "description": "图墙的列数"
      },
      {
        "key": "theme",
        "label": "配色",
        "type": "segment",
        "default": "light",
        "def": "light",
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
        "desc": "页面整体明暗配色",
        "publicKey": "theme",
        "publicLabel": "配色",
        "description": "页面整体明暗配色"
      },
      {
        "key": "showIndex",
        "label": "序号角标",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏图片序号",
        "publicKey": "showIndex",
        "publicLabel": "序号角标",
        "description": "显示/隐藏图片序号"
      },
      {
        "key": "showCaptions",
        "label": "悬浮图注",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏图片底部说明条",
        "publicKey": "showCaptions",
        "publicLabel": "悬浮图注",
        "description": "显示/隐藏图片底部说明条"
      },
      {
        "key": "mediaFit",
        "label": "图片填充",
        "type": "segment",
        "default": "cover",
        "def": "cover",
        "options": [
          {
            "value": "cover",
            "label": "裁切"
          },
          {
            "value": "contain",
            "label": "完整"
          }
        ],
        "desc": "图片填充方式",
        "publicKey": "mediaFit",
        "publicLabel": "图片填充",
        "description": "图片填充方式"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#1f6b2a",
        "def": "#1f6b2a",
        "options": [
          "#1f6b2a",
          "#f15a29",
          "#5a138e",
          "#3bb6ec"
        ],
        "desc": "标题格 / 高亮 / 页脚强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "标题格 / 高亮 / 页脚强调色"
      }
    ],
    "defaultProps": {
      "accent": "#1f6b2a",
      "theme": "light",
      "mediaCount": 7,
      "columns": 4,
      "showIndex": true,
      "showCaptions": true,
      "mediaFit": "cover",
      "media": [],
      "barMeta": "66 — Grid Wall",
      "kicker": "影像墙 / The Wall",
      "title": "一面墙，装下[[整个场景]]。",
      "hint": "frames · drag to fill",
      "captions": [
        "现场 Live",
        "录音棚 Studio",
        "幕后 Backstage",
        "巡演 Tour",
        "排练 Rehearsal",
        "封面 Artwork",
        "粉丝 Fans",
        "签售 Signing"
      ],
      "mediaPlaceholder": "拖入",
      "page": "66",
      "total": "82"
    }
  },
  {
    "key": "theme12_page071",
    "themeKey": "theme12",
    "pageNumber": 71,
    "layout": "THEME12-071",
    "slot": "gallerywall",
    "label": "画框墙 / Gallery Wall",
    "bgClass": "",
    "controls": [
      {
        "key": "mediaCount",
        "label": "画框数量",
        "type": "slider",
        "default": 4,
        "def": 4,
        "min": 3,
        "max": 6,
        "step": 1,
        "desc": "墙上悬挂的画框数量",
        "publicKey": "mediaCount",
        "publicLabel": "画框数量",
        "description": "墙上悬挂的画框数量"
      },
      {
        "key": "mediaFit",
        "label": "图片填充",
        "type": "segment",
        "default": "cover",
        "def": "cover",
        "options": [
          {
            "value": "cover",
            "label": "裁切"
          },
          {
            "value": "contain",
            "label": "完整"
          }
        ],
        "desc": "画作填充方式",
        "publicKey": "mediaFit",
        "publicLabel": "图片填充",
        "description": "画作填充方式"
      },
      {
        "key": "showMat",
        "label": "卡纸边",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏画框内的白色卡纸边",
        "publicKey": "showMat",
        "publicLabel": "卡纸边",
        "description": "显示/隐藏画框内的白色卡纸边"
      },
      {
        "key": "showPlaque",
        "label": "铭牌",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏画框下方的作品铭牌",
        "publicKey": "showPlaque",
        "publicLabel": "铭牌",
        "description": "显示/隐藏画框下方的作品铭牌"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#7a3a18",
        "def": "#7a3a18",
        "options": [
          "#7a3a18",
          "#f15a29",
          "#5a138e",
          "#1f6b2a"
        ],
        "desc": "导语 / 高亮 / 页脚强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "导语 / 高亮 / 页脚强调色"
      }
    ],
    "defaultProps": {
      "accent": "#7a3a18",
      "mediaCount": 4,
      "mediaFit": "cover",
      "showMat": true,
      "showPlaque": true,
      "media": [],
      "barMeta": "67 — Gallery Wall",
      "kicker": "画框墙 / Gallery Wall",
      "title": "把每张作品，[[挂上墙]]。",
      "metaPrefix": "声浪典藏 ·",
      "mediaPlaceholder": "拖入画作",
      "plaques": [
        {
          "t": "《潮汐》",
          "s": "林夏 · 数字版税",
          "y": "2026"
        },
        {
          "t": "《霓虹废墟》",
          "s": "阿特拉斯 · 现场",
          "y": "2026"
        },
        {
          "t": "《回声花园》",
          "s": "Mira K. · 海外发行",
          "y": "2025"
        },
        {
          "t": "《盐与光》",
          "s": "老周厂牌 · 黑胶",
          "y": "2026"
        },
        {
          "t": "《夜行列车》",
          "s": "午夜电台 · 巡演",
          "y": "2025"
        },
        {
          "t": "《低气压》",
          "s": "声浪现场 · 众筹",
          "y": "2026"
        }
      ],
      "page": "67",
      "total": "82"
    }
  },
  {
    "key": "theme12_page072",
    "themeKey": "theme12",
    "pageNumber": 72,
    "layout": "THEME12-072",
    "slot": "spectrum",
    "label": "声波画廊 / Spectrum",
    "bgClass": "",
    "controls": [
      {
        "key": "mediaCount",
        "label": "图片列数",
        "type": "slider",
        "default": 7,
        "def": 7,
        "min": 5,
        "max": 9,
        "step": 1,
        "desc": "组成声波的图片列数",
        "publicKey": "mediaCount",
        "publicLabel": "图片列数",
        "description": "组成声波的图片列数"
      },
      {
        "key": "mediaFit",
        "label": "图片填充",
        "type": "segment",
        "default": "cover",
        "def": "cover",
        "options": [
          {
            "value": "cover",
            "label": "裁切"
          },
          {
            "value": "contain",
            "label": "完整"
          }
        ],
        "desc": "图片填充方式",
        "publicKey": "mediaFit",
        "publicLabel": "图片填充",
        "description": "图片填充方式"
      },
      {
        "key": "showAxis",
        "label": "中线",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏声波中线",
        "publicKey": "showAxis",
        "publicLabel": "中线",
        "description": "显示/隐藏声波中线"
      },
      {
        "key": "showNumbers",
        "label": "帧编号",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏每列帧编号",
        "publicKey": "showNumbers",
        "publicLabel": "帧编号",
        "description": "显示/隐藏每列帧编号"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#baf04f",
        "def": "#baf04f",
        "options": [
          "#baf04f",
          "#3bb6ec",
          "#f15a29",
          "#f3b8ec"
        ],
        "desc": "中线 / 导语 / 页脚强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "中线 / 导语 / 页脚强调色"
      }
    ],
    "defaultProps": {
      "accent": "#baf04f",
      "mediaCount": 7,
      "mediaFit": "cover",
      "showAxis": true,
      "showNumbers": true,
      "media": [],
      "barMeta": "68 — Spectrum",
      "kicker": "声波画廊 / Waveform",
      "title": "每一张图，都是一段[[声浪]]。",
      "hint": "Frames",
      "page": "68",
      "total": "82"
    }
  },
  {
    "key": "theme12_page073",
    "themeKey": "theme12",
    "pageNumber": 73,
    "layout": "THEME12-073",
    "slot": "logowall",
    "label": "伙伴墙 / Logo Wall",
    "bgClass": "",
    "controls": [
      {
        "key": "logoCount",
        "label": "品牌数量",
        "type": "slider",
        "default": 10,
        "def": 10,
        "min": 6,
        "max": 12,
        "step": 1,
        "desc": "伙伴墙的 logo 格数量",
        "publicKey": "logoCount",
        "publicLabel": "品牌数量",
        "description": "伙伴墙的 logo 格数量"
      },
      {
        "key": "columns",
        "label": "栏数",
        "type": "segment",
        "default": 5,
        "def": 5,
        "options": [
          {
            "value": 3,
            "label": "3"
          },
          {
            "value": 4,
            "label": "4"
          },
          {
            "value": 5,
            "label": "5"
          }
        ],
        "desc": "logo 网格列数",
        "publicKey": "columns",
        "publicLabel": "栏数",
        "description": "logo 网格列数"
      },
      {
        "key": "theme",
        "label": "配色",
        "type": "segment",
        "default": "light",
        "def": "light",
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
        "desc": "页面整体明暗配色",
        "publicKey": "theme",
        "publicLabel": "配色",
        "description": "页面整体明暗配色"
      },
      {
        "key": "showTitle",
        "label": "标题条",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏顶部标题区",
        "publicKey": "showTitle",
        "publicLabel": "标题条",
        "description": "显示/隐藏顶部标题区"
      },
      {
        "key": "showCaptions",
        "label": "伙伴名",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏 logo 下方名称",
        "publicKey": "showCaptions",
        "publicLabel": "伙伴名",
        "description": "显示/隐藏 logo 下方名称"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#f15a29",
        "def": "#f15a29",
        "options": [
          "#f15a29",
          "#5a138e",
          "#3bb6ec",
          "#1f6b2a"
        ],
        "desc": "高亮 / 页脚强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "高亮 / 页脚强调色"
      }
    ],
    "defaultProps": {
      "accent": "#f15a29",
      "theme": "light",
      "logoCount": 10,
      "columns": 5,
      "showTitle": true,
      "showCaptions": true,
      "media": [],
      "barMeta": "69 — Logo Wall",
      "kicker": "分发网络 / Everywhere",
      "title": "一次上传，[[处处可听]]。",
      "lede": "声浪已接入全球主流平台——你的作品，会出现在听众本来就在的地方。",
      "names": [
        "Spotify",
        "Apple Music",
        "YouTube",
        "TikTok",
        "Amazon",
        "Tidal",
        "Deezer",
        "Bandcamp",
        "SoundCloud",
        "QQ音乐",
        "网易云",
        "Pandora"
      ],
      "mediaPlaceholder": "拖入 Logo",
      "page": "69",
      "total": "82"
    }
  },
  {
    "key": "theme12_page074",
    "themeKey": "theme12",
    "pageNumber": 74,
    "layout": "THEME12-074",
    "slot": "duo",
    "label": "双联像 / Diptych",
    "bgClass": "",
    "controls": [
      {
        "key": "theme",
        "label": "配色",
        "type": "segment",
        "default": "dark",
        "def": "dark",
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
        "desc": "页面整体明暗配色",
        "publicKey": "theme",
        "publicLabel": "配色",
        "description": "页面整体明暗配色"
      },
      {
        "key": "mediaCount",
        "label": "人像数量",
        "type": "slider",
        "default": 2,
        "def": 2,
        "min": 0,
        "max": 2,
        "step": 1,
        "desc": "两侧人像数量；0=纯文字，1=单侧人像，2=对称双联",
        "publicKey": "mediaCount",
        "publicLabel": "人像数量",
        "description": "两侧人像数量；0=纯文字，1=单侧人像，2=对称双联"
      },
      {
        "key": "showCaptions",
        "label": "图块编号",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏人像角标编号",
        "publicKey": "showCaptions",
        "publicLabel": "图块编号",
        "description": "显示/隐藏人像角标编号"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#5a138e",
        "def": "#5a138e",
        "options": [
          "#5a138e",
          "#d61fb5",
          "#f15a29",
          "#1f6b2a"
        ],
        "desc": "导语 / 高亮 / 页脚强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "导语 / 高亮 / 页脚强调色"
      }
    ],
    "defaultProps": {
      "accent": "#5a138e",
      "theme": "dark",
      "mediaCount": 2,
      "showCaptions": true,
      "media": [],
      "ghost": "声",
      "kicker": "创作者群像 / Faces",
      "title": "每一张脸，\n都是一条[[声浪]]。",
      "body": "从地下室的第一支 demo，到登上更大的舞台——我们把发行、结算与版权交给系统，让更多人能只为创作而活。",
      "footLabel": "12,000+ 独立音乐人 · 声浪",
      "mediaPlaceholder": "拖入人像",
      "page": "70",
      "total": "82"
    }
  },
  {
    "key": "theme12_page075",
    "themeKey": "theme12",
    "pageNumber": 75,
    "layout": "THEME12-075",
    "slot": "spotlight",
    "label": "功能聚焦 / Feature",
    "bgClass": "",
    "controls": [
      {
        "key": "imageSide",
        "label": "图片位置",
        "type": "segment",
        "default": "right",
        "def": "right",
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
        "desc": "大图所在的一侧",
        "publicKey": "imageSide",
        "publicLabel": "图片位置",
        "description": "大图所在的一侧"
      },
      {
        "key": "calloutCount",
        "label": "标注数量",
        "type": "slider",
        "default": 4,
        "def": 4,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "标注点与说明条目的数量",
        "publicKey": "itemCount",
        "publicLabel": "标注数量",
        "description": "标注点与说明条目的数量"
      },
      {
        "key": "showPins",
        "label": "图上标注点",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏图片上的编号标注点",
        "publicKey": "showPins",
        "publicLabel": "图上标注点",
        "description": "显示/隐藏图片上的编号标注点"
      },
      {
        "key": "mediaFit",
        "label": "图片填充",
        "type": "segment",
        "default": "cover",
        "def": "cover",
        "options": [
          {
            "value": "cover",
            "label": "裁切"
          },
          {
            "value": "contain",
            "label": "完整"
          }
        ],
        "desc": "图片的填充方式",
        "publicKey": "mediaFit",
        "publicLabel": "图片填充",
        "description": "图片的填充方式"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#f15a29",
        "def": "#f15a29",
        "options": [
          "#f15a29",
          "#5a138e",
          "#3bb6ec",
          "#1f6b2a"
        ],
        "desc": "标注点 / 编号 / 页脚强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "标注点 / 编号 / 页脚强调色"
      }
    ],
    "defaultProps": {
      "accent": "#f15a29",
      "imageSide": "right",
      "calloutCount": 4,
      "showPins": true,
      "mediaFit": "cover",
      "media": [],
      "barMeta": "71 — Feature",
      "ghost": "50",
      "kicker": "功能聚焦 / Feature",
      "title": "一块屏幕，\n管完整条[[链路]]。",
      "mediaPlaceholder": "拖入产品 / 功能截图",
      "callouts": [
        {
          "cn": "实时结算",
          "en": "Live Ledger",
          "d": "每一笔版税按平台、地区即时拆解。",
          "pin": {
            "top": "18%",
            "left": "22%"
          }
        },
        {
          "cn": "一键分发",
          "en": "Distribute",
          "d": "同步上架全球 30+ 流媒体平台。",
          "pin": {
            "top": "40%",
            "left": "70%"
          }
        },
        {
          "cn": "粉丝直连",
          "en": "Direct",
          "d": "专属页面把听众沉淀为资产。",
          "pin": {
            "top": "66%",
            "left": "34%"
          }
        },
        {
          "cn": "版权护盾",
          "en": "Shield",
          "d": "全网监测盗用，一键发起维权。",
          "pin": {
            "top": "80%",
            "left": "78%"
          }
        }
      ],
      "page": "71",
      "total": "82"
    }
  },
  {
    "key": "theme12_page076",
    "themeKey": "theme12",
    "pageNumber": 76,
    "layout": "THEME12-076",
    "slot": "journey",
    "label": "旅程纵览 / Journey",
    "bgClass": "",
    "controls": [
      {
        "key": "stepCount",
        "label": "节点数",
        "type": "slider",
        "default": 5,
        "def": 5,
        "min": 3,
        "max": 5,
        "step": 1,
        "desc": "旅程节点的数量",
        "publicKey": "stepCount",
        "publicLabel": "节点数",
        "description": "旅程节点的数量"
      },
      {
        "key": "focus",
        "label": "当前节点",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "高亮“此刻”所处的节点",
        "publicKey": "focus",
        "publicLabel": "当前节点",
        "description": "高亮“此刻”所处的节点"
      },
      {
        "key": "focusIndex",
        "label": "进行到第几个",
        "type": "slider",
        "default": 5,
        "def": 5,
        "min": 1,
        "max": 5,
        "step": 1,
        "dependsOn": "focus",
        "desc": "当前节点序号（1 起）",
        "publicKey": "focusIndex",
        "publicLabel": "进行到第几个",
        "description": "当前节点序号（1 起）"
      },
      {
        "key": "showSpine",
        "label": "中轴脊线",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏中央脊线与进度填充",
        "publicKey": "showSpine",
        "publicLabel": "中轴脊线",
        "description": "显示/隐藏中央脊线与进度填充"
      },
      {
        "key": "showDescriptions",
        "label": "节点描述",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏节点描述文字",
        "publicKey": "showDescriptions",
        "publicLabel": "节点描述",
        "description": "显示/隐藏节点描述文字"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#f15a29",
        "def": "#f15a29",
        "options": [
          "#f15a29",
          "#5a138e",
          "#3bb6ec",
          "#1f6b2a"
        ],
        "desc": "当前节点 / 进度 / 页脚强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "当前节点 / 进度 / 页脚强调色"
      }
    ],
    "defaultProps": {
      "accent": "#f15a29",
      "stepCount": 5,
      "focus": true,
      "focusIndex": 5,
      "showSpine": true,
      "showDescriptions": true,
      "barMeta": "72 — Journey",
      "kicker": "我们的旅程 / The Journey",
      "title": "从一间\n出租屋，\n到[[十万人]]。",
      "intro": "声浪不是凭空出现的——它长在创作者真实的难处里。",
      "nowLabel": "Now",
      "nodes": [
        {
          "y": "2019",
          "t": "一间出租屋",
          "d": "几个乐手凑钱，做了第一版给自己用的结算表。"
        },
        {
          "y": "2021",
          "t": "第一笔到账",
          "d": "帮一位独立音乐人，追回被漏发的版税。"
        },
        {
          "y": "2023",
          "t": "声浪成形",
          "d": "发行、版权、结算，合成同一个产品。"
        },
        {
          "y": "2025",
          "t": "十万创作者",
          "d": "平台服务的音乐人，突破十万。"
        },
        {
          "y": "2026",
          "t": "全球结算",
          "d": "多币种实时透明分账，正式上线。"
        }
      ],
      "page": "72",
      "total": "82"
    }
  },
  {
    "key": "theme12_page077",
    "themeKey": "theme12",
    "pageNumber": 77,
    "layout": "THEME12-077",
    "slot": "quoteimage",
    "label": "图上金句 / Quote over Image",
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
        "key": "tint",
        "label": "蒙版色调",
        "type": "segment",
        "default": "dark",
        "def": "dark",
        "options": [
          {
            "value": "dark",
            "label": "深色"
          },
          {
            "value": "accent",
            "label": "强调色"
          }
        ],
        "desc": "图片上的蒙版色调",
        "publicKey": "tint",
        "publicLabel": "蒙版色调",
        "description": "图片上的蒙版色调"
      },
      {
        "key": "quotePos",
        "label": "金句位置",
        "type": "segment",
        "default": "bottom",
        "def": "bottom",
        "options": [
          {
            "value": "bottom",
            "label": "底部"
          },
          {
            "value": "center",
            "label": "居中"
          }
        ],
        "desc": "金句在画面中的位置",
        "publicKey": "quotePos",
        "publicLabel": "金句位置",
        "description": "金句在画面中的位置"
      },
      {
        "key": "showMark",
        "label": "引号装饰",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏大引号符号",
        "publicKey": "showMark",
        "publicLabel": "引号装饰",
        "description": "显示/隐藏大引号符号"
      },
      {
        "key": "showAttribution",
        "label": "署名",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏引文署名",
        "publicKey": "showAttribution",
        "publicLabel": "署名",
        "description": "显示/隐藏引文署名"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#f15a29",
        "def": "#f15a29",
        "options": [
          "#f15a29",
          "#5a138e",
          "#3bb6ec",
          "#1f6b2a"
        ],
        "desc": "蒙版 / 引号 / 页脚强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "蒙版 / 引号 / 页脚强调色"
      }
    ],
    "defaultProps": {
      "accent": "#f15a29",
      "backgroundMode": "unicorn",
      "unicornScene": "tech",
      "tint": "dark",
      "quotePos": "bottom",
      "showMark": true,
      "showAttribution": true,
      "media": [],
      "kicker": "金句 / In Their Words",
      "quote": "我第一次清楚地看见，\n我的歌，**到底值多少钱**。",
      "authorName": "陈屿 · 独立音乐人",
      "authorEn": "Chen Yu — Indie Artist, 4 yrs on SoundWave",
      "footLabel": "声浪 SOUNDWAVE — Independent Music OS",
      "mediaPlaceholder": "拖入整幅现场 / 人物大图",
      "page": "73",
      "total": "82"
    }
  },
  {
    "key": "theme12_page078",
    "themeKey": "theme12",
    "pageNumber": 78,
    "layout": "THEME12-078",
    "slot": "lyric",
    "label": "歌词金句 / Lyric",
    "bgClass": "",
    "controls": [
      {
        "key": "theme",
        "label": "配色",
        "type": "segment",
        "default": "light",
        "def": "light",
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
        "desc": "页面整体明暗配色",
        "publicKey": "theme",
        "publicLabel": "配色",
        "description": "页面整体明暗配色"
      },
      {
        "key": "align",
        "label": "对齐",
        "type": "segment",
        "default": "center",
        "def": "center",
        "options": [
          {
            "value": "left",
            "label": "居左"
          },
          {
            "value": "center",
            "label": "居中"
          }
        ],
        "desc": "诗句的对齐方式",
        "publicKey": "align",
        "publicLabel": "对齐",
        "description": "诗句的对齐方式"
      },
      {
        "key": "showEqualizer",
        "label": "声波条",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏底部声波条装饰",
        "publicKey": "showEqualizer",
        "publicLabel": "声波条",
        "description": "显示/隐藏底部声波条装饰"
      },
      {
        "key": "showDecorations",
        "label": "显示装饰",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏几何装饰图形",
        "publicKey": "showDecorations",
        "publicLabel": "显示装饰",
        "description": "显示/隐藏几何装饰图形"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#c44ee0",
        "def": "#c44ee0",
        "options": [
          "#c44ee0",
          "#fbb24d",
          "#74d2f0",
          "#bcee54"
        ],
        "desc": "高亮句 / 页脚强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "高亮句 / 页脚强调色"
      }
    ],
    "defaultProps": {
      "accent": "#c44ee0",
      "theme": "light",
      "align": "center",
      "showEqualizer": true,
      "showDecorations": true,
      "barMeta": "74 — Lyric",
      "eyebrow": "♪ 午夜电台 ·《潮汐》",
      "lines": [
        {
          "t": "我把整座城市的夜",
          "hl": false
        },
        {
          "t": "调成你的频率",
          "hl": true
        },
        {
          "t": "在没人听见的地方",
          "hl": false
        },
        {
          "t": "我们也曾大声",
          "hl": true
        }
      ],
      "credit": "— 词 / 曲 林夏 · 声浪原创",
      "bars": [
        0.4,
        0.7,
        0.5,
        0.95,
        0.6,
        0.85,
        0.45,
        0.72,
        0.55,
        0.9,
        0.5,
        0.78,
        0.42,
        0.66,
        0.58,
        0.88,
        0.46,
        0.7,
        0.52,
        0.8
      ],
      "page": "74",
      "total": "82"
    }
  },
  {
    "key": "theme12_page079",
    "themeKey": "theme12",
    "pageNumber": 79,
    "layout": "THEME12-079",
    "slot": "section",
    "label": "章节页 / Section",
    "bgClass": "",
    "controls": [
      {
        "key": "theme",
        "label": "配色",
        "type": "segment",
        "default": "color",
        "def": "color",
        "options": [
          {
            "value": "dark",
            "label": "深色"
          },
          {
            "value": "color",
            "label": "彩色"
          },
          {
            "value": "light",
            "label": "浅色"
          }
        ],
        "desc": "章节页底色：深色 / 强调色铺底 / 浅色",
        "publicKey": "theme",
        "publicLabel": "配色",
        "description": "章节页底色：深色 / 强调色铺底 / 浅色"
      },
      {
        "key": "numeral",
        "label": "编号样式",
        "type": "segment",
        "default": "roman",
        "def": "roman",
        "options": [
          {
            "value": "roman",
            "label": "Ⅳ"
          },
          {
            "value": "arabic",
            "label": "04"
          }
        ],
        "desc": "大编号的呈现方式",
        "publicKey": "numeral",
        "publicLabel": "编号样式",
        "description": "大编号的呈现方式"
      },
      {
        "key": "showIndex",
        "label": "章节编号",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏巨大的章节编号",
        "publicKey": "showIndex",
        "publicLabel": "章节编号",
        "description": "显示/隐藏巨大的章节编号"
      },
      {
        "key": "showAgenda",
        "label": "章节目录",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏右侧章节进度列表",
        "publicKey": "showAgenda",
        "publicLabel": "章节目录",
        "description": "显示/隐藏右侧章节进度列表"
      },
      {
        "key": "showDecorations",
        "label": "显示装饰",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏几何装饰图形",
        "publicKey": "showDecorations",
        "publicLabel": "显示装饰",
        "description": "显示/隐藏几何装饰图形"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#5a138e",
        "def": "#5a138e",
        "options": [
          "#5a138e",
          "#f15a29",
          "#3bb6ec",
          "#1f6b2a"
        ],
        "desc": "编号 / 高亮 / 铺底强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "编号 / 高亮 / 铺底强调色"
      }
    ],
    "defaultProps": {
      "accent": "#5a138e",
      "theme": "color",
      "numeral": "roman",
      "showIndex": true,
      "showAgenda": true,
      "showDecorations": true,
      "barMeta": "75 — Chapter",
      "kicker": "路线图 / The Road Ahead",
      "title": "接下来，\n我们去[[哪里]]。",
      "intro": "已经跑通的，与正在路上的——一张写给创作者的时间表。",
      "current": 4,
      "acts": [
        "宣言 Manifesto",
        "产品矩阵 The Stack",
        "为什么是现在 Why Now",
        "路线图 Roadmap",
        "加入声浪 Join Us"
      ],
      "page": "75",
      "total": "82"
    }
  },
  {
    "key": "theme12_page080",
    "themeKey": "theme12",
    "pageNumber": 80,
    "layout": "THEME12-080",
    "slot": "divider",
    "label": "大间章 / Divider",
    "bgClass": "",
    "controls": [
      {
        "key": "theme",
        "label": "配色",
        "type": "segment",
        "default": "accent",
        "def": "accent",
        "options": [
          {
            "value": "dark",
            "label": "深色"
          },
          {
            "value": "accent",
            "label": "强调色"
          }
        ],
        "desc": "间章整体配色",
        "publicKey": "theme",
        "publicLabel": "配色",
        "description": "间章整体配色"
      },
      {
        "key": "sectionNo",
        "label": "章节序号",
        "type": "slider",
        "default": 3,
        "def": 3,
        "min": 1,
        "max": 9,
        "step": 1,
        "desc": "本章的序号",
        "publicKey": "sectionNo",
        "publicLabel": "章节序号",
        "description": "本章的序号"
      },
      {
        "key": "align",
        "label": "对齐",
        "type": "segment",
        "default": "left",
        "def": "left",
        "options": [
          {
            "value": "left",
            "label": "居左"
          },
          {
            "value": "center",
            "label": "居中"
          }
        ],
        "desc": "标题对齐方式",
        "publicKey": "align",
        "publicLabel": "对齐",
        "description": "标题对齐方式"
      },
      {
        "key": "showRule",
        "label": "分隔线",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏标题下方分隔线",
        "publicKey": "showRule",
        "publicLabel": "分隔线",
        "description": "显示/隐藏标题下方分隔线"
      },
      {
        "key": "showGhost",
        "label": "背景大字",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏背景超大序号",
        "publicKey": "showGhost",
        "publicLabel": "背景大字",
        "description": "显示/隐藏背景超大序号"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#f15a29",
        "def": "#f15a29",
        "options": [
          "#f15a29",
          "#5a138e",
          "#3bb6ec",
          "#1f6b2a"
        ],
        "desc": "强调色 / 序号 / 页脚强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "强调色 / 序号 / 页脚强调色"
      }
    ],
    "defaultProps": {
      "accent": "#f15a29",
      "theme": "accent",
      "sectionNo": 3,
      "align": "left",
      "showRule": true,
      "showGhost": true,
      "barMeta": "76 — Section",
      "chapterLabel": "CHAPTER",
      "title": "分发与结算，\n一块工作台搞定。",
      "intro": "从上传母带到版税到账——这一章，拆解声浪如何把一整条链路收进同一块屏幕。",
      "page": "76",
      "total": "82"
    }
  },
  {
    "key": "theme12_page081",
    "themeKey": "theme12",
    "pageNumber": 81,
    "layout": "THEME12-081",
    "slot": "timeline",
    "label": "时间轴 / Roadmap",
    "bgClass": "",
    "controls": [
      {
        "key": "milestoneCount",
        "label": "节点数量",
        "type": "slider",
        "default": 5,
        "def": 5,
        "min": 3,
        "max": 5,
        "step": 1,
        "desc": "时间轴上的里程碑数量",
        "publicKey": "milestoneCount",
        "publicLabel": "节点数量",
        "description": "时间轴上的里程碑数量"
      },
      {
        "key": "focus",
        "label": "当前进度",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "高亮“当前”所处的里程碑",
        "publicKey": "focus",
        "publicLabel": "当前进度",
        "description": "高亮“当前”所处的里程碑"
      },
      {
        "key": "focusIndex",
        "label": "进行到第几个",
        "type": "slider",
        "default": 4,
        "def": 4,
        "min": 1,
        "max": 5,
        "step": 1,
        "dependsOn": "focus",
        "desc": "当前里程碑的序号（1 起）",
        "publicKey": "focusIndex",
        "publicLabel": "进行到第几个",
        "description": "当前里程碑的序号（1 起）"
      },
      {
        "key": "showProgress",
        "label": "进度填充",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "连接线按当前进度着色填充",
        "publicKey": "showProgress",
        "publicLabel": "进度填充",
        "description": "连接线按当前进度着色填充"
      },
      {
        "key": "showDescriptions",
        "label": "节点描述",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏每个节点的描述文字",
        "publicKey": "showDescriptions",
        "publicLabel": "节点描述",
        "description": "显示/隐藏每个节点的描述文字"
      },
      {
        "key": "showIntro",
        "label": "显示引言",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏顶部标题与引言",
        "publicKey": "showIntro",
        "publicLabel": "显示引言",
        "description": "显示/隐藏顶部标题与引言"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#f15a29",
        "def": "#f15a29",
        "options": [
          "#f15a29",
          "#5a138e",
          "#3bb6ec",
          "#1f6b2a"
        ],
        "desc": "当前节点 / 进度 / 页脚强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "当前节点 / 进度 / 页脚强调色"
      }
    ],
    "defaultProps": {
      "accent": "#f15a29",
      "milestoneCount": 5,
      "focus": true,
      "focusIndex": 4,
      "showProgress": true,
      "showDescriptions": true,
      "showIntro": true,
      "barMeta": "77 — Roadmap",
      "kicker": "路线图 / Roadmap",
      "title": "已经在路上，[[还在加速]]。",
      "nowLabel": "Now",
      "milestones": [
        {
          "q": "2024 · Q3",
          "t": "声浪上线",
          "d": "发行 + 结算闭环首发。"
        },
        {
          "q": "2025 · Q1",
          "t": "版权护盾",
          "d": "全网监测与一键维权。"
        },
        {
          "q": "2025 · Q4",
          "t": "粉丝直连",
          "d": "会员与专属创作者页面。"
        },
        {
          "q": "2026 · Q2",
          "t": "数据洞察",
          "d": "听众画像与增长工具。"
        },
        {
          "q": "2026 · Q4",
          "t": "全球结算",
          "d": "多币种实时透明分账。"
        }
      ],
      "page": "77",
      "total": "82"
    }
  },
  {
    "key": "theme12_page082",
    "themeKey": "theme12",
    "pageNumber": 82,
    "layout": "THEME12-082",
    "slot": "principles",
    "label": "信条 / Principles",
    "bgClass": "",
    "controls": [
      {
        "key": "principleCount",
        "label": "信条数量",
        "type": "slider",
        "default": 4,
        "def": 4,
        "min": 3,
        "max": 6,
        "step": 1,
        "desc": "展示的信条条目数量",
        "publicKey": "itemCount",
        "publicLabel": "信条数量",
        "description": "展示的信条条目数量"
      },
      {
        "key": "columns",
        "label": "栏数",
        "type": "segment",
        "default": 2,
        "def": 2,
        "options": [
          {
            "value": 1,
            "label": "1 栏"
          },
          {
            "value": 2,
            "label": "2 栏"
          }
        ],
        "desc": "信条卡片的列数",
        "publicKey": "columns",
        "publicLabel": "栏数",
        "description": "信条卡片的列数"
      },
      {
        "key": "theme",
        "label": "配色",
        "type": "segment",
        "default": "light",
        "def": "light",
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
        "desc": "页面整体明暗配色",
        "publicKey": "theme",
        "publicLabel": "配色",
        "description": "页面整体明暗配色"
      },
      {
        "key": "showLede",
        "label": "显示导语",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏标题区导语",
        "publicKey": "showLede",
        "publicLabel": "显示导语",
        "description": "显示/隐藏标题区导语"
      },
      {
        "key": "showDeco",
        "label": "显示装饰",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏卡片内几何装饰",
        "publicKey": "showDeco",
        "publicLabel": "显示装饰",
        "description": "显示/隐藏卡片内几何装饰"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#f15a29",
        "def": "#f15a29",
        "options": [
          "#f15a29",
          "#5a138e",
          "#3bb6ec",
          "#1f6b2a"
        ],
        "desc": "导语高亮 / 页脚强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "导语高亮 / 页脚强调色"
      }
    ],
    "defaultProps": {
      "accent": "#f15a29",
      "principleCount": 4,
      "columns": 2,
      "theme": "light",
      "showLede": true,
      "showDeco": true,
      "barMeta": "78 — Principles",
      "kicker": "信条 / What We Believe",
      "title": "我们[[相信]]的事。",
      "lede": "这些不是功能列表，而是声浪做每一个决定时，反复回到的几条底线。",
      "tenets": [
        {
          "t": "主权优先",
          "en": "Ownership",
          "s": "作品、收入与听众，永远属于创作者本人。"
        },
        {
          "t": "路径透明",
          "en": "Transparency",
          "s": "每一分收益的来处与去向，都可被追溯。"
        },
        {
          "t": "工具退场",
          "en": "Invisible",
          "s": "复杂留给系统，让你只需专注创作本身。"
        },
        {
          "t": "直连听众",
          "en": "Direct",
          "s": "不被算法隔开，把关系握在自己手里。"
        },
        {
          "t": "即时回报",
          "en": "Instant",
          "s": "价值产生即可见，版税最快三天到账。"
        },
        {
          "t": "生而开放",
          "en": "Open",
          "s": "可迁出、可接入，绝不把你锁进围墙。"
        }
      ],
      "page": "78",
      "total": "82"
    }
  },
  {
    "key": "theme12_page083",
    "themeKey": "theme12",
    "pageNumber": 83,
    "layout": "THEME12-083",
    "slot": "team",
    "label": "团队群像 / Team",
    "bgClass": "",
    "controls": [
      {
        "key": "memberCount",
        "label": "成员数量",
        "type": "slider",
        "default": 4,
        "def": 4,
        "min": 3,
        "max": 6,
        "step": 1,
        "desc": "团队成员卡片的数量",
        "publicKey": "memberCount",
        "publicLabel": "成员数量",
        "description": "团队成员卡片的数量"
      },
      {
        "key": "showRole",
        "label": "职位",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏成员职位",
        "publicKey": "showRole",
        "publicLabel": "职位",
        "description": "显示/隐藏成员职位"
      },
      {
        "key": "showLede",
        "label": "显示导语",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏标题区导语",
        "publicKey": "showLede",
        "publicLabel": "显示导语",
        "description": "显示/隐藏标题区导语"
      },
      {
        "key": "theme",
        "label": "配色",
        "type": "segment",
        "default": "light",
        "def": "light",
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
        "desc": "页面整体明暗配色",
        "publicKey": "theme",
        "publicLabel": "配色",
        "description": "页面整体明暗配色"
      },
      {
        "key": "mediaFit",
        "label": "图片填充",
        "type": "segment",
        "default": "cover",
        "def": "cover",
        "options": [
          {
            "value": "cover",
            "label": "裁切"
          },
          {
            "value": "contain",
            "label": "完整"
          }
        ],
        "desc": "头像填充方式",
        "publicKey": "mediaFit",
        "publicLabel": "图片填充",
        "description": "头像填充方式"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#f15a29",
        "def": "#f15a29",
        "options": [
          "#f15a29",
          "#5a138e",
          "#3bb6ec",
          "#1f6b2a"
        ],
        "desc": "色条 / 高亮 / 页脚强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "色条 / 高亮 / 页脚强调色"
      }
    ],
    "defaultProps": {
      "accent": "#f15a29",
      "theme": "light",
      "memberCount": 4,
      "showRole": true,
      "showLede": true,
      "mediaFit": "cover",
      "media": [],
      "barMeta": "79 — Team",
      "kicker": "团队 / The Crew",
      "title": "一群[[做音乐的人]]，在做工具。",
      "lede": "我们自己也是创作者——所以更懂，把主权还给做音乐的人有多重要。",
      "mediaPlaceholder": "拖入头像",
      "members": [
        {
          "cn": "林知夏",
          "en": "Zhixia Lin",
          "role": "创始人 · CEO"
        },
        {
          "cn": "陈屿",
          "en": "Yu Chen",
          "role": "产品负责人 · CPO"
        },
        {
          "cn": "苏野",
          "en": "Ye Su",
          "role": "版权与结算 · COO"
        },
        {
          "cn": "何川",
          "en": "Chuan He",
          "role": "技术负责人 · CTO"
        },
        {
          "cn": "罗念",
          "en": "Nian Luo",
          "role": "创作者增长"
        },
        {
          "cn": "周屿森",
          "en": "Yusen Zhou",
          "role": "设计负责人"
        }
      ],
      "page": "79",
      "total": "82"
    }
  },
  {
    "key": "theme12_page084",
    "themeKey": "theme12",
    "pageNumber": 84,
    "layout": "THEME12-084",
    "slot": "voices",
    "label": "证言 / Voices",
    "bgClass": "",
    "controls": [
      {
        "key": "portraitSide",
        "label": "人像位置",
        "type": "segment",
        "default": "left",
        "def": "left",
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
        "desc": "人像所在的一侧",
        "publicKey": "portraitSide",
        "publicLabel": "人像位置",
        "description": "人像所在的一侧"
      },
      {
        "key": "portraitShape",
        "label": "人像形状",
        "type": "segment",
        "default": "rounded",
        "def": "rounded",
        "options": [
          {
            "value": "rounded",
            "label": "圆角"
          },
          {
            "value": "circle",
            "label": "圆形"
          }
        ],
        "desc": "人像裁切形状",
        "publicKey": "portraitShape",
        "publicLabel": "人像形状",
        "description": "人像裁切形状"
      },
      {
        "key": "theme",
        "label": "配色",
        "type": "segment",
        "default": "dark",
        "def": "dark",
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
        "desc": "页面整体明暗配色",
        "publicKey": "theme",
        "publicLabel": "配色",
        "description": "页面整体明暗配色"
      },
      {
        "key": "showWave",
        "label": "声波装饰",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏引文下方的声波装饰",
        "publicKey": "showWave",
        "publicLabel": "声波装饰",
        "description": "显示/隐藏引文下方的声波装饰"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#d61fb5",
        "def": "#d61fb5",
        "options": [
          "#d61fb5",
          "#f15a29",
          "#5a138e",
          "#1f6b2a"
        ],
        "desc": "声波 / 高亮 / 页脚强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "声波 / 高亮 / 页脚强调色"
      }
    ],
    "defaultProps": {
      "accent": "#d61fb5",
      "portraitSide": "left",
      "portraitShape": "rounded",
      "theme": "dark",
      "showWave": true,
      "media": [],
      "barMeta": "80 — Voices",
      "portraitTag": "VOICES / 01",
      "kicker": "证言 / In Their Words",
      "quote": "“上线半年，我第一次**看清**每一分收入从哪来——也第一次，觉得作品真的**是我的**。”",
      "authorName": "陈屿 · 独立音乐人",
      "authorEn": "Chen Yu — Independent Artist",
      "portraitPlaceholderCircle": "拖入头像",
      "portraitPlaceholderRect": "拖入人像 / Portrait",
      "wave": [
        22,
        46,
        30,
        58,
        38,
        70,
        44,
        60,
        28,
        50,
        34,
        64,
        24,
        42
      ],
      "page": "80",
      "total": "82"
    }
  },
  {
    "key": "theme12_page085",
    "themeKey": "theme12",
    "pageNumber": 85,
    "layout": "THEME12-085",
    "slot": "quotewall",
    "label": "群言 / Quote Wall",
    "bgClass": "",
    "controls": [
      {
        "key": "quoteCount",
        "label": "引言数量",
        "type": "slider",
        "default": 4,
        "def": 4,
        "min": 2,
        "max": 4,
        "step": 1,
        "desc": "墙上展示的引言数量",
        "publicKey": "quoteCount",
        "publicLabel": "引言数量",
        "description": "墙上展示的引言数量"
      },
      {
        "key": "showBadge",
        "label": "姓名徽标",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏发言人首字徽标",
        "publicKey": "showBadge",
        "publicLabel": "姓名徽标",
        "description": "显示/隐藏发言人首字徽标"
      },
      {
        "key": "focus",
        "label": "聚焦高亮",
        "type": "toggle",
        "default": false,
        "def": false,
        "desc": "突出其中一条引言，其余淡化",
        "publicKey": "focus",
        "publicLabel": "聚焦高亮",
        "description": "突出其中一条引言，其余淡化"
      },
      {
        "key": "focusIndex",
        "label": "聚焦第几条",
        "type": "slider",
        "default": 1,
        "def": 1,
        "min": 1,
        "max": 4,
        "step": 1,
        "dependsOn": "focus",
        "desc": "高亮的引言序号",
        "publicKey": "focusIndex",
        "publicLabel": "聚焦第几条",
        "description": "高亮的引言序号"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#5a138e",
        "def": "#5a138e",
        "options": [
          "#5a138e",
          "#f15a29",
          "#3bb6ec",
          "#1f6b2a"
        ],
        "desc": "主引言 / 导语 / 页脚强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "主引言 / 导语 / 页脚强调色"
      }
    ],
    "defaultProps": {
      "accent": "#5a138e",
      "quoteCount": 4,
      "showBadge": true,
      "focus": false,
      "focusIndex": 1,
      "barMeta": "81 — Quote Wall",
      "kicker": "群言 / In Their Words",
      "title": "十二万音乐人，[[同一句话]]。",
      "quotes": [
        {
          "q": "过去对账要等三个月，现在打开声浪就能看到每一笔版税的来处。",
          "n": "林夏",
          "r": "独立唱作人 / 上海",
          "m": "林",
          "c": "#5a138e",
          "fg": "#fff",
          "sub": "#f3b8ec",
          "big": true
        },
        {
          "q": "一个人就是一支队伍——发行、结算、粉丝运营都在一块屏幕上。",
          "n": "阿特拉斯乐队",
          "r": "后摇乐队 / 成都",
          "m": "A",
          "c": "#3bb6ec",
          "fg": "#143049",
          "sub": "#1c5b82"
        },
        {
          "q": "海外平台同步分发，让我们第一次拿到了真正的全球收入。",
          "n": "Mira K.",
          "r": "电子制作人 / 柏林",
          "m": "M",
          "c": "#1f6b2a",
          "fg": "#fff",
          "sub": "#baf04f"
        },
        {
          "q": "版权上链之后，合作再也不用靠口头承诺。",
          "n": "老周",
          "r": "厂牌主理人 / 北京",
          "m": "周",
          "c": "#f15a29",
          "fg": "#fff",
          "sub": "#fdddc6"
        }
      ],
      "page": "81",
      "total": "82"
    }
  },
  {
    "key": "theme12_page086",
    "themeKey": "theme12",
    "pageNumber": 86,
    "layout": "THEME12-086",
    "slot": "join",
    "label": "加入声浪 / Join Us",
    "bgClass": "",
    "controls": [
      {
        "key": "showDirectory",
        "label": "显示目录",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏底部链接目录",
        "publicKey": "showDirectory",
        "publicLabel": "显示目录",
        "description": "显示/隐藏底部链接目录"
      },
      {
        "key": "directoryColumns",
        "label": "目录栏数",
        "type": "slider",
        "default": 4,
        "def": 4,
        "min": 2,
        "max": 4,
        "step": 1,
        "dependsOn": "showDirectory",
        "desc": "链接目录的列数",
        "publicKey": "directoryColumns",
        "publicLabel": "目录栏数",
        "description": "链接目录的列数"
      },
      {
        "key": "showMarquee",
        "label": "显示跑马灯",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏底部滚动条",
        "publicKey": "showMarquee",
        "publicLabel": "显示跑马灯",
        "description": "显示/隐藏底部滚动条"
      },
      {
        "key": "marqueeSpeed",
        "label": "跑马灯速度",
        "type": "slider",
        "default": 20,
        "def": 20,
        "min": 8,
        "max": 40,
        "step": 1,
        "dependsOn": "showMarquee",
        "desc": "滚动一圈的秒数（越小越快）",
        "publicKey": "marqueeSpeed",
        "publicLabel": "跑马灯速度",
        "description": "滚动一圈的秒数（越小越快）"
      },
      {
        "key": "showDecorations",
        "label": "显示装饰",
        "type": "toggle",
        "default": true,
        "def": true,
        "desc": "显示/隐藏几何装饰图形",
        "publicKey": "showDecorations",
        "publicLabel": "显示装饰",
        "description": "显示/隐藏几何装饰图形"
      },
      {
        "key": "accent",
        "label": "强调色",
        "type": "color",
        "default": "#f15a29",
        "def": "#f15a29",
        "options": [
          "#f15a29",
          "#5a138e",
          "#3bb6ec",
          "#1f6b2a"
        ],
        "desc": "高亮/按钮等强调色",
        "publicKey": "accent",
        "publicLabel": "强调色",
        "description": "高亮/按钮等强调色"
      }
    ],
    "defaultProps": {
      "accent": "#f15a29",
      "showDirectory": true,
      "directoryColumns": 4,
      "showMarquee": true,
      "marqueeSpeed": 20,
      "showDecorations": true,
      "barMeta": "82 — Join Us",
      "kicker": "加入声浪 / Join Us",
      "title": "现在，轮到你\n发出[[声浪]]。",
      "subtitle": "Now — make some noise.",
      "ctaText": "免费开始发行",
      "ctaUrl": "sound.wave / start",
      "marqueeCn": "声浪",
      "marqueeEn": "SOUNDWAVE",
      "directory": [
        {
          "h": "产品 / Product",
          "links": [
            "一键发行 Release",
            "收益结算 Ledger",
            "版权护盾 Shield",
            "数据洞察 Insights"
          ]
        },
        {
          "h": "资源 / Resources",
          "links": [
            "帮助中心 Docs",
            "开发者 API",
            "博客 Journal",
            "价格 Pricing"
          ]
        },
        {
          "h": "社区 / Community",
          "links": [
            "创作者计划",
            "论坛 Forum",
            "Discord",
            "活动 Live"
          ]
        },
        {
          "h": "关于 / About",
          "links": [
            "团队 Team",
            "招聘 Careers",
            "媒体 Press",
            "联系 Contact"
          ]
        }
      ]
    }
  }
];
