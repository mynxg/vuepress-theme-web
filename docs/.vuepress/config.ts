import { defineUserConfig } from "vuepress";
import { searchPlugin } from "@vuepress/plugin-search";
import { docsearchPlugin } from "@vuepress/plugin-docsearch";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/v2/",

  dest: "./dist",

  locales: {
    "/v2/": {
      lang: "zh-CN",
      title: "所遇所思",
      description: "记录笔记",
    },
  },
  theme,//已经配置了
  plugins: [
    searchPlugin({
      // your options
    }),
  ],
  shouldPrefetch: false,
});
