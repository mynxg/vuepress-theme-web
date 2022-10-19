import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    "",
    {
      icon: "discover",
      text: "个人总结",
      prefix: "note/",
      collapsable: true,
      children: ["info", ""],
    },
    {
      text: "随记博客",
      icon: "note",
      prefix: "post/",
      //自动收缩
      collapsable: true,
      children: [
        "info",
        "",
      ],
    },
    {
      text: "工具",
      icon: "note",
      collapsable: true,
      prefix: "recommend/",
      children: ["tool/"],
    },
    {
      text: "博客||推荐",
      icon: "note",
      prefix: "share/",
      collapsable: true,
      children: "structure",
    },
  ],
  //资料整理
  "/computer/": [
    {
      //java模块
      text: "java",
      icon: "note",
      prefix: "java/",
      //自动收缩
      collapsable: true,
      children: [
        "javaweb/",
        "spring/",
      ]
    },
    {
      text: "linux",
      icon: "note",
      prefix: "linux/",
      //自动收缩
      collapsable: true,
      //自动生成目录结构
      children: ["","page","git"],
    },
    //前端
    {
      text: "web",
      icon: "note",
      prefix: "web/",
      //自动收缩
      collapsable: true,
      children: [
        "js/",
        "page",
      ],
    },
    //Android
    {
      text: "android",
      icon: "note",
      prefix: "android/",
      //自动收缩
      collapsable: true,
      children: "structure",
    },
  ],
  "/post/": "structure",
  "/share/": "structure",
  "/note": "structure",
});
