import { defineUserConfig } from "vuepress";
import { searchPlugin } from "@vuepress/plugin-search";
import { docsearchPlugin } from "@vuepress/plugin-docsearch";
import { photoSwipePlugin } from "vuepress-plugin-photo-swipe";
import theme from "./theme.js";

export default defineUserConfig({
  //不同仓库路径不一样，比如在mynxg的github下有一个mynxg仓库，则base 是这样配置： /mynxg/
  base: "/",

  dest: "./dist",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "所遇所思",
      description: "记录笔记",
    },
  },
  theme,//已经配置了
  markdown: {
    //vuepress解析md标题的深度
    headers: {
      level: [1,2,3,4,5]
    },
    code: {
      lineNumbers: false,
    }
  },
  plugins: [

    docsearchPlugin({
      appId: "",
      apiKey: "",
      indexName: "",
      locales: {
        "/": {
          placeholder: "搜索",
          translations: {
            button: {
              buttonText: "搜索",
              buttonAriaLabel: "搜索",
            },
            modal: {
              searchBox: {
                resetButtonTitle: "清除查询条件",
                resetButtonAriaLabel: "清除查询条件",
                cancelButtonText: "取消",
                cancelButtonAriaLabel: "取消",
              },
              startScreen: {
                recentSearchesTitle: "搜索历史",
                noRecentSearchesText: "没有搜索历史",
                saveRecentSearchButtonTitle: "保存至搜索历史",
                removeRecentSearchButtonTitle: "从搜索历史中移除",
                favoriteSearchesTitle: "收藏",
                removeFavoriteSearchButtonTitle: "从收藏中移除",
              },
              errorScreen: {
                titleText: "无法获取结果",
                helpText: "你可能需要检查你的网络连接",
              },
              footer: {
                selectText: "选择",
                navigateText: "切换",
                closeText: "关闭",
                searchByText: "搜索提供者",
              },
              noResultsScreen: {
                noResultsText: "无法找到相关结果",
                suggestedQueryText: "你可以尝试查询",
                reportMissingResultsText: "你认为该查询应该有结果？",
                reportMissingResultsLinkText: "点击反馈",
              },
            },
          },
        },
      },
    }),
   
  ],
  //开启PWA时将这个值设置为false
  shouldPrefetch: false,
});
