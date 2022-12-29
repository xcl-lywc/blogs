/**
 * 提示：如您想使用JS版本的配置文件可参考：https://github.com/xugaoyi/vuepress-theme-vdoing/tree/a2f03e993dd2f2a3afdc57cf72adfc6f1b6b0c32/docs/.vuepress
 */
import { resolve } from 'path'
import { defineConfig4CustomTheme } from 'vuepress/config'
import { VdoingThemeConfig } from 'vuepress-theme-vdoing/types'
import glCfg from './config/gloabelConfig'
import head from "./config/head";
import themeConfig from "./config/themeVdoingConfig";
import markdown from "./config/markdown";
import plugins from "./config/plugins";


export default defineConfig4CustomTheme<VdoingThemeConfig>({
  theme: 'vdoing', // 使用npm主题包
  // theme: resolve(__dirname, '../../vdoing'), // 使用本地主题 (先将vdoing主题文件下载到本地：https://github.com/xugaoyi/vuepress-theme-vdoing)
  locales: {
    '/': {
      lang: 'zh-CN',
      title: glCfg.blogsTitle,
      description: glCfg.blogsDesc,
    }
  },
  title: glCfg.blogsTitle, //站点标题, 建议修改
  description: glCfg.blogsDesc, //描述, 建议修改
  dest: "dist", //输出目录, 默认是 dist,无需修改
  base: "/blogs/",//部署站点的基础路径，默认'/'。如果你想将你的网站部署到如 https://foo.github.io/bar/，那么 base 应该被设置成 "/bar/",（否则页面将失去样式等文件）
  shouldPrefetch: () => false, //是否开启预加载, 建议不开启, 无需修改

  head: head, //全局头部信息配置, 如需修改请修改 config/head.ts
  themeConfig, //主题配置, 如需修改请修改 config/themeVdoingConfig.ts
  plugins, //插件配置, 如需修改请修改 config/plugins.ts
  markdown, //markdown 相关配置, 如需修改请修改 config/markdown.ts

  // 监听文件变化并重新构建
  extraWatchFiles: [
    '.vuepress/config.ts',
    '.vuepress/config/htmlModules.ts',
  ]
})
