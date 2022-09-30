import { defineUserConfig } from "vuepress";
import { searchPlugin } from "@vuepress/plugin-search";
import { docsearchPlugin } from "@vuepress/plugin-docsearch";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  dest: "./dist",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "所遇所思",
      description: "记录笔记",
    },
    //   /en/
    // "/en": {
    //   lang: "en-US",
    //   title: "Experiences and thoughts",
    //   description: "Experiences and thoughts",
    // },
  },
  theme,//已经配置了
  plugins: [
    searchPlugin({
      // your options
    }),
  ],
  shouldPrefetch: false,
});
