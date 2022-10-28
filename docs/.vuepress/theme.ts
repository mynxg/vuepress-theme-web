import { hopeTheme } from "vuepress-theme-hope";
import { searchPlugin } from "@vuepress/plugin-search";
import { enNavbar, zhNavbar } from "./navbar/index.js";
import { enSidebar, zhSidebar } from "./sidebar/index.js";

export default hopeTheme({
  hostname: "https://mynxg.github.io",

  author: {
    name: "hisnxg",
    url: "",
  },
  // 生成图标文件
  iconAssets: "iconfont",

  logo: "/logo.png",
  // 默认为 GitHub. 同时也可以是一个完整的 URL
  repo: "mynxg/v2",
  // 自定义仓库链接文字。默认从 `repo` 中自动推断为
  // "GitHub" / "GitLab" / "Gitee" / "Bitbucket" 其中之一，或是 "Source"。
  repoLabel: "GitHub",
  // 是否在导航栏内显示仓库链接，默认为 `true`
  repoDisplay: true,

  docsDir: "/docs",

  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],

  fullscreen: true,

  locales: {

    /**
     * Chinese locale config
     */
    "/": {
      // navbar 导航栏
      navbar: zhNavbar,

      // sidebar 侧边导航
      sidebar: zhSidebar,

      footer: "默认页脚",

      displayFooter: true,

      // page meta
      metaLocales: {
        editLink: "在 GitHub 上编辑此页",
      },
    },
  },
  //导航位置
  navbarLayout: {
    left: ["Brand"],
    center: ["Search", "Links"],
    right: ["Language", "Repo", "Outlook"],
  },
  //显示边栏
  sidebar: "heading",
  // 主题颜色
  themeColor: {
    blue: "#2196f3",
    red: "#f26d6d",
    green: "#3eaf7c",
    orange: "#fb9b5f",
  },
  encrypt: {
    config: {
      "/computer/java/encrypt.html": ["1234"],
    },
  },

  plugins: {
    // If you don't need comment feature, you can remove following option
    // The following config is for demo ONLY, if you need comment feature, please generate and use your own config, see comment plugin documentation for details.
    // To avoid disturbing the theme developer and consuming his resources, please DO NOT use the following config directly in your production environment!!!!!
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
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      container: true,
      demo: true,
      echarts: true,
      flowchart: true,
      gfm: true,
      imageSize: true,
      include: true,
      katex: true,
      lazyLoad: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"],
      },
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
    pwa: {
      favicon: "/favicon.ico",
      cacheHTML: true,
      cachePic: true,
      appendBase: true,
      apple: {
        icon: "/assets/icon/apple-icon-152.png",
        statusBarColor: "black",
      },
      msTile: {
        image: "/assets/icon/ms-icon-144.png",
        color: "#ffffff",
      },
      manifest: {
        icons: [
          {
            src: "/assets/icon/chrome-mask-512.png",
            sizes: "512x512",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-mask-192.png",
            sizes: "192x192",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-192.png",
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
    },
  },
});
