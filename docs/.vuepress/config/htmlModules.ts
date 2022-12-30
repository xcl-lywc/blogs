import { VdoingThemeConfig } from 'vuepress-theme-vdoing/types'
import glCfg from './gloabelConfig'

/* 自定义模块测试 */
// const htmlString = `<div style="width:100%;height:100px;color:#fff;background: #eee;">自定义模块测试</div>`;
/* google的推广广告 */
const htmlString_adsbygoogle = `<!-- 纵向自适应 --><ins class="adsbygoogle" style="display:block;padding: 0.95rem;" data-ad-client="ca-pub-7828333725993554" data-ad-slot="7802654582" data-ad-format="auto" data-full-width-responsive="true"></ins><script> (adsbygoogle = window.adsbygoogle || []).push({}); </script>`;
/* 万维广告 - 横向 */
const htmlString_wwads_horizontal = `<div class="wwads-cn wwads-horizontal page-wwads" data-id="136"></div><style>.page-wwads{ width:100%!important; min-height: 0; margin: 0; }.page-wwads .wwads-img img{ width:80px!important; }.page-wwads .wwads-poweredby{ width: 40px; position: absolute; right: 25px; bottom: 3px;}.wwads-content .wwads-text, .page-wwads .wwads-text{ height: 100%; padding-top: 5px; display: block;}</style>`;
/* 赞助商广告 */
const htmlString_sponsorads = `<a href="http://apifox.cn/a103xugaoyi" target="_blank"><img src="img/Apifox-2.png" alt="npm" class="no-zoom" style="width: 100%;border-radius: 2px;"></a>`;
/* 万维广告 - 纵向 */
const htmlString_wwads_vertical = `<div class="wwads-cn wwads-vertical windowRB" data-id="136" style="max-width:160px;min-width: auto;min-height:auto;"></div><style> .windowRB{ padding: 0;}.windowRB .wwads-img{margin-top: 10px;}.windowRB .wwads-content{margin: 0 10px 10px 10px;}.custom-html-window-rb .close-but{ display: none;}</style>`
/* 微信公众号+前端资源链接 */
const htmlString_weixinOpen_FrontEndResources = `<div style="padding: 0.95rem">
  <p style="
    color: var(--textColor);
    opacity: 0.9;
    font-size: 20px;
    font-weight: bold;
    margin: 0 0 8px 0;">
    公众号
  </p>
    <img src="${glCfg.weixinOpenLink}"  style="width:100%;" />
    <p style="width:100%;text-align: center;">
      <b>~欢迎关注公众号~</b>
    </p>
    <p style="width:100%;text-align: center;">
      <a href="${glCfg.FrontEndResourcesLink}" target="_blank" >
        前端资源
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" 
            aria-hidden="true" focusable="false" 
            x="0px" 
            y="0px" 
            viewBox="0 0 100 100" 
            width="15" 
            height="15" 
            class="icon outbound">
            <path fill="currentColor" d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"></path>
            <polygon fill="currentColor" points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"></polygon>
          </svg>
          <span class="sr-only">(opens new window)</span>
        </span>
      </a>
      [，<i>提取码: ${glCfg.FrontEndResourcesExtractedCode}</i>]
    </p>
  </p>
</div>`;

/** 插入自定义html模块 (可用于插入广告模块等)
 * {
 *   homeSidebarB: htmlString, 首页侧边栏底部
 *
 *   sidebarT: htmlString, 所有左侧边栏顶部
 *   sidebarB: htmlString, 所有左侧边栏底部
 *
 *   pageT: htmlString, 页面顶部
 *   pageB: htmlString, 页面底部
 *   pageTshowMode: string, 页面顶部-显示方式：未配置默认所有页面；'article' => 仅文章页①； 'custom' => 仅自定义页①
 *   pageBshowMode: string, 页面底部-显示方式：未配置默认所有页面；'article' => 仅文章页①； 'custom' => 仅自定义页①
 *
 *   windowLB: htmlString, 全局窗口左下角②
 *   windowRB: htmlString, 全局窗口右下角②
 * }
 *
 * ①注：在.md文件front matter配置`article: false`的页面是自定义页，未配置的默认是文章页（首页除外）。
 * ②注：windowLB 和 windowRB：1.展示区块最大宽高200px*400px。2.请给自定义元素定一个不超过200px*400px的宽高。3.在屏幕宽度小于960px时无论如何都不会显示。
 */
const htmlModule: VdoingThemeConfig['htmlModules'] = {
  homeSidebarB: htmlString_weixinOpen_FrontEndResources,
  // sidebarT: htmlString,
  // sidebarB: htmlString,
  // pageT: htmlString,
  // pageTshowMode: 'custom',
  // pageB: htmlString,
  // pageBshowMode: 'custom',
  // windowLB: htmlString,// 会遮挡部分侧边栏
  // windowRB: htmlString,// 会遮挡部分侧边栏
}

export default htmlModule
