import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/en/": [
    "",
    {
      icon: "discover",
      text: "Demo",
      prefix: "en/demo/",
      link: "en/demo/",
      children: "structure",
    },
    {
      text: "Docs",
      icon: "note",
      prefix: "en/guide/",
      children: "structure",
    },
    "slides",
  ],
});
