export const data = JSON.parse("{\"key\":\"v-8daa1a0e\",\"path\":\"/\",\"title\":\"主页\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"icon\":\"home\",\"title\":\"主页\",\"heroImage\":\"/logo.png\",\"heroText\":\"技术知识整理中\",\"tagline\":\"你可以在这里放置或是整个项目的描述。\",\"actions\":[{\"text\":\"快速了解 💡\",\"link\":\"/computer/web/\",\"type\":\"primary\"},{\"text\":\"随记博客\",\"link\":\"/post/\"}],\"copyright\":false,\"summary\":\"这是一个主页,开发中...\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://vuepress-theme-hope-v2.netlify.app/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"所遇所思\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"主页\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}]]},\"excerpt\":\"\",\"headers\":[],\"readingTime\":{\"minutes\":0.24,\"words\":73},\"filePathRelative\":\"README.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
