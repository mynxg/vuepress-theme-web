import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
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
    //资料整理
    {
      text: "资料整理",
      icon: "note",
      prefix: "computer/",
      collapsable: true,
      children: [{
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
        children: "structure",
      },
      //前端
      {
        text: "web",
        icon: "note",
        prefix: "web/",
        //自动收缩
        collapsable: true,
        children: "structure",
      },],
    },
    {
      text: "工具",
      icon: "note",
      collapsable: true,
      prefix: "recommend/",
      children: ["","tool/"],
    },
    {
      text: "博客||推荐",
      icon: "note",
      prefix: "share/",
      collapsable: true,
      children: ["","read"],
    },
    "slides",
  ],
  "/post/": "structure",
  //当做主页跳转
  "/note/": "structure",
  "/readbook/": [
    {
      text: "教程",
      icon: "guide",
      prefix: "program/",
      collapsable: true,
      children: [
        "env",
      ],
    },
    
   
  ],
  
  
});
