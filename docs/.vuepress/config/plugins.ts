// 插件配置, 详见 https://v1.vuepress.vuejs.org/zh/plugin/using-a-plugin.html

import { UserPlugins } from "vuepress/config";
import fs from "fs";
import { resolve } from "path";
import dayjs from 'dayjs'
import glCfg from './gloabelConfig'

// 配置插件，推荐使用 Babel 式, 根据自己插件情况修改插件配置
export default <UserPlugins>[
  // 网站地图
  [
    "sitemap",
    {
      hostname: `https://${fs.readFileSync(
        resolve(__dirname, "../public", "CNAME")
      )}`,
    },
  ],
  // 百度自动推送
  ['vuepress-plugin-baidu-autopush'],
  // 百度统计
  [
    'vuepress-plugin-baidu-tongji',
    {
      hm: glCfg.baiduCode,// 百度统计hm码
    },
  ],
  // 全文搜索，第三方搜索链接的搜索框（继承原官方搜索框@vuepress/plugin-search的配置参数） https://www.npmjs.com/package/vuepress-plugin-thirdparty-search
  [
    'thirdparty-search',
    {
      thirdparty: glCfg.thirdpartySearch,
    }
  ],
  // 代码块复制按钮 https://www.npmjs.com/package/vuepress-plugin-one-click-copy
  [
    "one-click-copy",
    {
      copySelector: [
        'div[class*="language-"] pre',
        'div[class*="aside-code"] aside',
      ],// String or Array
      copyMessage: "复制成功",
      duration: 1000,// 提示消息显示时间
      showInMobile: true, // 是否在移动端显示
      toolTipMessage: '复制代码',
    },
  ],
  // demo演示模块 https://www.npmjs.com/package/vuepress-plugin-demo-block
  [
    'demo-block',
    {
      settings: {
        // jsLib: ['http://xxx'], // 在线示例(jsfiddle, codepen)中的js依赖
        // cssLib: ['http://xxx'], // 在线示例中的css依赖
        // vue: 'https://fastly.jsdelivr.net/npm/vue/dist/vue.min.js', // 在线示例中的vue依赖
        jsfiddle: false, // 是否显示 jsfiddle 链接
        codepen: true, // 是否显示 codepen 链接
        horizontal: false, // 是否展示为横向样式
      },
    },
  ],
  // 放大图片
  [
    'vuepress-plugin-zooming',
    {
      selector: '.theme-vdoing-content img:not(.no-zoom)', // 排除class是no-zoom的图片
      options: {
        bgColor: 'rgba(0,0,0,0.5)',
      },
    },
  ],
  // "上次更新"时间格式
  [
    '@vuepress/last-updated',
    {
      transformer: (timestamp, lang) => {
        return dayjs(timestamp).format('YYYY/MM/DD, HH:mm:ss')
      },
    },
  ],
  // 音乐插件 https://www.npmjs.com/package/@vuepress-reco/vuepress-plugin-bgm-player
  [
    '@vuepress-reco/vuepress-plugin-bgm-player', {
      // 播放列表
      audios: [
        // 本地文件示例
        {
          name: '장가갈 수 있을까',
          artist: '咖啡少年',
          url: '/bgm/1.mp3',
          cover: '/bgm/1.jpg'
        },
        // 网络文件示例
        {
          name: '강남역 4번 출구',
          artist: 'Plastic / Fallin` Dild',
          url: 'https://assets.smallsunnyfox.com/music/2.mp3',
          cover: 'https://assets.smallsunnyfox.com/music/2.jpg'
        },
        {
          name: '用胳膊当枕头',
          artist: '최낙타',
          url: 'https://assets.smallsunnyfox.com/music/3.mp3',
          cover: 'https://assets.smallsunnyfox.com/music/3.jpg'
        }
      ],
      // 播放器位置
      position: { left: '5px', bottom: '5px', 'z-index': '999999' },
      // 是否自动播放
      autoplay: false,
      // 是否自动缩小
      autoShrink: false,
      // 指定PC端缩小为哪种模式 'mini'/'float'
      shrinkMode: 'float',
      // 指定浮窗模式浮动在哪一侧 'left'/'right'
      floatPosition: 'left',
      // 浮窗的样式
      floatStyle: { bottom: '200px', 'z-index': '999999' },
    }
  ],
  // 鼠标点击爱心特效
  [
    require('../plugins/love-me'),
    {
      color: '#11a8cd', // 爱心颜色，默认随机色
      excludeClassName: 'theme-vdoing-content' // 要排除元素的class, 默认空''
    }
  ],
  // 趣味标题插件 https://www.npmjs.com/package/vuepress-plugin-dynamic-title
  [
    "dynamic-title",
    {
      showIcon: "/img/favicon.ico",
      showText: "(/≧▽≦/)Hello World！",
      hideIcon: "/img/favicon.ico",
      hideText: "(●—●)Welcome to！",
      recoverTime: 2000
    }
  ],
  // Live2D看板娘  https://www.npmjs.com/package/vuepress-plugin-helper-live2d
  [
    'vuepress-plugin-helper-live2d', {
      // 是否开启控制台日志打印(default: false)
      log: false,
      live2d: {
        // 是否启用(关闭请设置为false)(default: true)
        enable: true,
        // 模型名称(default: hibiki)>>>取值请参考：
        // https://github.com/JoeyBling/hexo-theme-yilia-plus/wiki/live2d%E6%A8%A1%E5%9E%8B%E5%8C%85%E5%B1%95%E7%A4%BA
        model: 'hibiki',
        display: {
          position: "right", // 显示位置：left/right(default: 'right')
          width: 135, // 模型的长度(default: 135)
          height: 300, // 模型的高度(default: 300)
          hOffset: 65, //  水平偏移(default: 65)
          vOffset: 0, //  垂直偏移(default: 0)
        },
        mobile: {
          show: false // 是否在移动设备上显示(default: false)
        },
        react: {
          opacity: 0.8 // 模型透明度(default: 0.8)
        }
      }
    }
  ],
  // ???
  ["pangu"],
];
