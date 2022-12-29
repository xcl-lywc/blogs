import { HeadTags } from "vuepress/config";
import glCfg from './gloabelConfig'

// 注入到页面<head>中的标签，格式[tagName, { attrName: attrValue }, innerHTML?]
export default <HeadTags>[
  // 网页标签栏图标/站点图标，资源放在public文件夹
  ['link', { rel: 'icon', href: '/img/favicon.ico' }],
  // 关键词
  ['meta', { name: 'keywords', content: glCfg.blogsDesc }],
  // 移动栏优化
  ["meta", { name: "viewport", content: "width=device-width,initial-scale=1,user-scalable=no" }],
  // 移动浏览器主题颜色
  ['meta', { name: 'theme-color', content: '#11a8cd' }],
  // 保护用户的隐私
  ['meta', { name: 'referrer', content: 'no-referrer-when-downgrade' }],


  // 引入jquery3.x
  ["script", {
    "language": "javascript",
    "type": "text/javascript",
    "src": "/libs/jquery/3.5.1/jquery.min.js"
  }],
  // 引入vue2.x
  ["script", {
    "language": "javascript",
    "type": "text/javascript",
    "src": "/libs/vue/2.7.11/vue.min.js"
  }],

  // 引入鼠标点击脚本
  ["script", {
    "language": "javascript",
    "type": "text/javascript",
    "src": "/js/MouseClickEffect.js"
  }]

  // 百度统计的站长验证（你可以去掉）
  // ['meta', { name: 'baidu-site-verification', content: '7F55weZDDc' }], 
  // 广告相关（你可以去掉）
  // ['meta', { name: 'wwads-cn-verify', content: '6c4b761a28b734fe93831e3fb400ce87' }], // 万维广告
  // ['script', { src: 'https://cdn.wwads.cn/js/makemoney.js', type: 'text/javascript' }], // 万维广告
  // [
  //   'script',
  //   {
  //     'data-ad-client': 'ca-pub-7828333725993554',
  //     async: 'async',
  //     src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
  //   },
  // ], // 网站关联 Google 广告
];
