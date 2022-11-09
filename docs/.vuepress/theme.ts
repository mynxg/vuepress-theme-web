import { getDirname, path } from "@vuepress/utils";
import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";
import { searchPlugin } from "@vuepress/plugin-search";
import { enNavbar, zhNavbar } from "./navbar/index.js";
import { enSidebar, zhSidebar } from "./sidebar/index.js";


export default hopeTheme({
  hostname: "mynxg.eu.org",
  //全局的博主信息，所有文章如果不指定authoer就使用下面配置的信息
  author: {
    name: "hisnxg",
    url: "",
  },
  // 生成图标文件
  iconAssets: "iconfont",
  //启用这个会在页面右侧展示出文章标题信息
  toc: true,
  logo: "/logo.png",
  //是否显示全屏按钮
  fullscreen: true,

  //是否开启纯净模式，开启后切换主题色的功能将被禁用
  //pure: true,

  // 默认为 GitHub. 同时也可以是一个完整的 URL
  repo: "mynxg/v2",
  // 自定义仓库链接文字。默认从 `repo` 中自动推断为
  // "GitHub" / "GitLab" / "Gitee" / "Bitbucket" 其中之一，或是 "Source"。
  repoLabel: "GitHub",
  // 是否在导航栏内显示仓库链接，默认为 `true`
  repoDisplay: true,

  docsDir: "/docs",

  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],


  locales: {

    /**
     * Chinese locale config
     */
    "/": {
      // 导航栏 navbar:如果要禁止显示navbar，将值配置为false
      navbar: zhNavbar,

      // sidebar 侧边导航
      sidebar: zhSidebar,
      //全局关闭显示copyright，使用footer信息来充当copyright信息
      copyright: false,
      //非首页页面页脚显示文字
      footer: "Copyright © 2022-present Mr.keney",
      //是否开启显示页脚
      displayFooter: true,

      // page meta
      metaLocales: {
        editLink: "在 GitHub 上编辑此页",
      },
    },
  },
  //配置导航栏导航条目的位置
  navbarLayout: {
    left: ["Brand"],
    center: ["Links"],
    right: ["Language", "Repo", "Outlook","Search"],
  },
  //显示边栏
  sidebar: "heading",
  //主题色配置，配置了这个之后，会显出切换不同主题色的按钮
  themeColor: {
    steelblue: "#336699",
    blue: "#2196f3",
    red: "#f26d6d",
    green: "#3eaf7c",
    orange: "#fb9b5f",
    skyblue: "#2196f3",
    darkblue: "#00008B",
    darkcyan: "#008B8B",
  },
  encrypt: {
    config: {
      "/computer/java/encrypt.html": ["1234"],
    },
  },
  blog:{
    avatar: "/favicon.ico",
    name: "所遇所思",
    //description: "<h4 style='color:#4ABF8A;'>mynxg@qq.com</h4>",
    //intro: "/intro.html",
    medias: {
      // GitHub 已经内置了图标
      GitHub: "https://github.com/mynxg",
      // Gitee
      Gitee: "https://gitee.com/hisnxg",
    },
    //每页显示的文章数目
    articlePerPage: 5,
    //是否将博客首页个人信息处头像裁剪成圆形
    roundAvatar: true,
    //点击博客主页时间线后出来的页面最顶部的文字
    timeline: "时间线",
    //博客主页文章列表文章主要内容简介下面的显示的都有什么信息，配置顺序决定显示顺序
    articleInfo: ["Author", "Original", "Date", "ReadingTime", "Word", "Category", "Tag", "PageView"],
  },
  //配置是否启用文章最顶部的路径导航
  breadcrumb: true,
  //是否在路径导航信息中显示图标
  breadcrumbIcon: true,

  /**
   * 页面元数据
   */
  //是否在文章页面底部左侧显示 编辑此页按钮
  editLink: false,
  //是否在文章页面底部右侧显示 文章的贡献者
  contributors: true,
  //插件配置
  plugins: {
    // If you don't need comment feature, you can remove following option
    // The following config is for demo ONLY, if you need comment feature, please generate and use your own config, see comment plugin documentation for details.
    // To avoid disturbing the theme developer and consuming his resources, please DO NOT use the following config directly in your production environment!!!!!
    photoSwipe: true,
    blog: {
       //是否自动抽取文章摘要
       autoExcerpt: true,
    },
    //代码一键复制
    copyCode: {
      showInMobile: true,
    },
    comment: {
      /**
       * Using Giscus
       * 可以使用评论
       */
      provider: "Giscus",
      repo: "hisnxg/giscus-discussions",
      repoId: "R_kgDOIE-irg",
      category: "Announcements",
      categoryId: "DIC_kwDOIE-irs4CRqTV",

      /**
       * Using Twikoo
       */
      // provider: "Twikoo",
      // envId: "https://twikoo.ccknbc.vercel.app",

      /**
       * Using Waline
       */
      // provider: "Waline",
      // serverURL: "https://vuepress-theme-hope-comment.vercel.app",
    },


    // Disable features you don't want here
    /**
     * 启用 Markdown 增强
     */
    mdEnhance: {
      //启用全部的md增强功能
      //enableAll: true,
      //根据需要启动md增强功能
      //启用幻灯片支持
      /**
       * 启用自自定义对齐，语法
       *
       *  ::: center/middle/righe
       *  重大的变动。
       *  :::
       */
      align: true,
      //启用属性增强，在md文件中添加属性，生成的dom上就有属性
      attrs: true,
      chart: true,
      codetabs: true,
      //启用对添加提示、注释、信息、注意、警告和详情自定义容器的支持
      container: true,
      demo: true,
      echarts: true,
      flowchart: true,
      gfm: true,
      imageSize: true,
      include: true,
      katex: true,
      //是否启用任务列表
      tasklist: true,
      //启用懒加载md中的图片
      lazyLoad: true,
      //启用标记功能，使用 == == 进行标记。请注意两边需要有空格
      mark: true,
      //开启md支持mermaid画图功能
      mermaid: true,    
      playground: {
        presets: ["ts", "vue"],
      },
      //启用幻灯片支持
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
      stylize: [
        {
          matcher: "Recommanded",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommanded",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,// 添加选项卡支持
      vpre: true,
      vuePlayground: true,
    },
     /**
    * 版权保护
    * triggerWords：触发版权数目的最小复制字数
    * global：是否全局开启版权保护
    * disableCopy 是否禁止复制文章，fasle：可以复制，true:不可以复制
    * disableSelection: 是否禁止页面文字选择 false:可以选中 true；无法选中
    */
    copyright: {
      author: "keney",
      hostname: "https://github.com/hisnxg",
      license: "Copyright 2022-present Mr.keney",
      triggerWords: 200,
      global: true,
      disableCopy: false,
      disableSelection: false
    },
    /**PWA:提供渐进式 Web 应用程序支持 */
    pwa: {
      favicon: "/favicon.ico",
      cacheHTML: true,
      cachePic: true,
      appendBase: true,
      apple: {
        icon: "/favicon.ico",
        statusBarColor: "black",
      },
      msTile: {
        image: "/favicon.ico",
        color: "#ffffff",
      },
      manifest: {
        icons: [
          {
            src: "/favicon.ico",
            sizes: "512x512",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/favicon.ico",
            sizes: "192x192",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/favicon.ico",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/favicon.ico",
            sizes: "192x192",
            type: "image/png",
          },
        ],
        shortcuts: [
          {
            name: "computer",
            short_name: "computer",
            url: "/computer/",
            icons: [
              {
                src: "/assets/icon/guide-maskable.png",
                sizes: "192x192",
                purpose: "maskable",
                type: "image/png",
              },
              {
                src: "/assets/icon/guide-monochrome.png",
                sizes: "192x192",
                purpose: "monochrome",
                type: "image/png",
              },
            ],
          },
        ],
      },
      //允许缓存的最大大小 (以 KB 为单位)
      maxSize: 2048,
      //PWA应用主题色，默认绿色
      themeColor: "#46bd87",
      //是否缓存图片
      //图片允许缓存的最大大小 (以 KB 为单位)
      maxPicSize: 2048,
      //显示更新内容可用提示，并允许用户立即刷新。当新的 SW 成功注册后，将转为更新内容就绪弹窗
      //update: "hint",
      update: "available",
    },
  },

});
