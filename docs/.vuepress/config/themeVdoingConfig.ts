// 主题配置，详见 https://doc.xugaoyi.com

import nav from "./nav";
import { VdoingThemeConfig } from "vuepress-theme-vdoing/types";
import glCfg from './gloabelConfig'
import htmlModules from './htmlModules' // 自定义插入的html块

export default <VdoingThemeConfig>{
  nav: nav, // 上方导航栏配置, 如需修改请修改 nav.ts
  sidebarDepth: 2, // 侧边栏显示深度，默认1，最大2（显示到h3标题）
  logo: "img/logo.png", // 导航栏Logo
  repo: glCfg.blogsGithubRepo, // 导航栏右侧生成Github链接
  searchMaxSuggestions: 10, // 搜索结果显示最大数
  lastUpdated: "上次更新", // 更新的时间，及前缀文字   string | boolean (取值为git提交时间)
  docsDir: "docs", // 编辑的文件夹
  docsBranch: 'main', // 编辑的文件所在分支，默认master。 注意：如果你的分支是main则修改为main
  editLinks: false, // true: 启用编辑
  editLinkText: "编辑", // 编辑链接文字

  //*** 以下是Vdoing主题相关配置，文档：https://doc.xugaoyi.com/pages/a20ce8/ ***//

  category: true, // 是否打开分类功能，默认true。 如打开，会做的事情有：1. 自动生成的front matter包含分类字段 2.页面中显示与分类相关的信息和模块 3.自动生成分类页面（在@pages文件夹）。如关闭，则反之。
  tag: true, // 是否打开标签功能，默认true。 如打开，会做的事情有：1. 自动生成的front matter包含标签字段 2.页面中显示与标签相关的信息和模块 3.自动生成标签页面（在@pages文件夹）。如关闭，则反之。
  archive: true, // 是否打开归档功能，默认true。 如打开，会做的事情有：1.自动生成归档页面（在@pages文件夹）。如关闭，则反之。
  categoryText: '随笔', // 碎片化文章（_posts文件夹的文章）预设生成的分类值，默认'随笔'

  pageStyle: 'card', // 页面风格，可选值：'card'卡片 | 'line' 线（未设置bodyBgImg时才生效）， 默认'card'。 说明：card时背景显示灰色衬托出卡片样式，line时背景显示纯色，并且部分模块带线条边框
  bodyBgImg: glCfg.bodyBgImg, // body背景大图，默认无。 单张图片 String | 多张图片 Array, 多张图片时每隔15秒换一张。
  bodyBgImgOpacity: 1.0, // body背景图透明度，选值 0.1~ 1.0, 默认0.5
  bodyBgImgInterval: 10, // body多张背景图时的切换间隔, 默认15，单位s

  titleBadge: true, // 文章标题前的图标是否显示，默认true
  // titleBadgeIcons: [ // 文章标题前图标的地址，默认主题内置图标
  //   '图标地址1',
  //   '图标地址2'
  // ],
  contentBgStyle: 6, // 文章内容块的背景风格，默认无. 1 方格 | 2 横线 | 3 竖线 | 4 左斜线 | 5 右斜线 | 6 点状

  rightMenuBar: true, // 是否显示右侧文章大纲栏，默认true (屏宽小于1300px下无论如何都不显示)
  pageButton: true, // 是否显示快捷翻页按钮，默认true

  sidebarOpen: true, // 初始状态是否打开侧边栏，默认true
  sidebar: { mode: "structuring", collapsable: true }, // 侧边栏  'structuring' | { mode: 'structuring', collapsable: Boolean} | 'auto' | 自定义

  // 默认外观模式/换肤（用户未在页面手动修改过模式时才生效，否则以用户设置的模式为准），可选：'auto' | 'light' | 'dark' | 'read'，默认'auto'。
  defaultMode: 'auto',

  // 最近更新栏
  updateBar: {
    showToArticle: false, // 显示到文章页底部，默认true
    moreArticle: "/archives", // “更多文章”跳转的页面，默认'/archives'
  },

  // 文章默认的作者信息，可在.md文件front matter中单独配置此信息 String | {name: String, link: String}
  author: {
    name: glCfg.myShortName, // 必需
    link: glCfg.blogsGithubLink, // 可选的
  },

  // 博主信息，显示在首页侧边栏
  blogger: {
    avatar: "img/avatar.jpg",
    name: glCfg.myName,
    slogan: glCfg.myBrief,
  },

  // 社交图标 (显示于博主信息栏和页脚栏。内置图标：https://doc.xugaoyi.com/pages/a20ce8/#social)
  social: {
    iconfontCssFile: 'style/font_social.css', // 可选，阿里图标库在线css文件地址，对于主题没有的图标可自由添加
    icons: [
      {
        iconClass: "icon-QQ",
        title: "QQ群",
        link: "/html/qq-groups.html",
      },
      {
        iconClass: "icon-youjian",
        title: "发邮件",
        link: glCfg.sendEmailLink,
      },

      {
        iconClass: "icon-github",
        title: "GitHub",
        link: glCfg.githubLink,
      },
      {
        iconClass: "icon-npm",
        title: "NPM",
        link: glCfg.npmLink,
      },
      {
        iconClass: "icon-gitee",
        title: "Gitee",
        link: glCfg.giteeLink,
      },

      {
        iconClass: 'icon-erji',
        title: '听音乐',
        link: glCfg.listenMusicLink,
      },
    ],
  },

  // 页脚信息, 请根据实际情况修改, 删掉不需要的部分
  footer: {
    createYear: 2022, // 博客创建年份
    copyrightInfo: glCfg.copyrightInfo,// 博客版权信息、备案信息等，支持a标签或换行标签</br>
  },

  // 扩展自动生成frontmatter。（当md文件的frontmatter不存在相应的字段时将自动添加。不会覆盖已有的数据。）
  extendFrontmatter: {
    author: {
      name: glCfg.myShortName,
      link: glCfg.githubLink
    }
  },

  // 自定义hmtl(广告)模块
  htmlModules
};
