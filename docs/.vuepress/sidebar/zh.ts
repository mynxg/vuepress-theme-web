import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/v2/": [
    "",
    {
      icon: "discover",
      text: "个人总结",
      prefix: "note/",
      collapsable: true,
      children: ["", "blog/"],
    },
    {
      text: "随记博客",
      icon: "note",
      prefix: "post/",
      //自动收缩
      collapsable: true,
      children: [
        "info",
        "note/",
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
      children: [ "read"],
    },
  ],
  //资料整理
  "/v2/computer/": [
    {
      //java模块
      text: "java",
      icon: "note",
      prefix: "java/",
      //自动收缩
      collapsable: true,
      children: [
        "read",
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
      children: ["","page"],
    },
    //前端
    {
      text: "web",
      icon: "note",
      prefix: "web/",
      //自动收缩
      collapsable: true,
      children: "structure",
    },
  ],
  "/v2/post/": "structure",
  "/v2/share/": "structure",

});
