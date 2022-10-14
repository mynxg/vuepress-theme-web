import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  //主页
  "/post/",
  //随记博客
  "/note/",
  {
    text: "Java资料整理",
    icon: "creative",
    prefix: "/computer/",
    // 导航栏链接 放在这里
    children: [
      {
        text: "前端",
        icon: "creative",
        children: ["web/"]
      },
      {
        text: "后端",
        icon: "config",
        children: ["java/", "linux/"],
      },
    ],
  },
  {
    text: "博客||推荐",
    icon: "note",
    prefix: "/share/",
    // 导航栏链接 放在这里
    children: [
      {
        text: "github",
        icon: "creative",
        link: "http://github.com"
      },
      {
        text: "nxg",
        icon: "config",
        link: "http://gitee.com",
      },
    ],
  },
  {
    text: "工具",
    icon: "creative",
    prefix: "/recommend/",
    children: [
      "tool/",
      {
        text: "快捷查找",
        icon: "creative",
        link: "http://hisnxg.top"
      },
      {
        text: "导航",
        icon: "creative",
        link: "https://shimo.im"
      },

    ],
  },
]);
