import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  //个人主页
  {
    text:"个人主页",
    icon: "hacker",
    link: "/README.md",
  },
  {
    text:"博客主页",
    icon: "blog",
    link: "/blog.md",
  },
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
        children: ["java/"],
      },
      {
        text: "运维",
        icon: "config",
        children: ["linux/"],
      },
      {
        text: "Android",
        icon: "config",
        children: ["android/"],
      }
    ],
  },
  {
    text: "博客||推荐",
    icon: "note",
    prefix: "/share/",
    // 导航栏链接 放在这里
    children: [
      {
        text: "导航",
        icon: "creative",
        link: "navigation"
      },
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
