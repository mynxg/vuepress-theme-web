import {
  client_exports
} from "./chunk-ANKY43RT.js";
import {
  useRoute
} from "./chunk-EGR3CLFO.js";
import "./chunk-CNG6RXDS.js";
import {
  computed,
  defineComponent,
  h,
  onMounted,
  ref
} from "./chunk-QNG632ER.js";
import "./chunk-4LQFXFAH.js";
import "./chunk-BPKF3OQJ.js";

// node_modules/.pnpm/registry.npmmirror.com+vuepress-plugin-comment2@2.0.0-beta.104/node_modules/vuepress-plugin-comment2/lib/client/components/Giscus.js
import "E:/college/blogTemplate/vuepress-theme-web/node_modules/.pnpm/registry.npmmirror.com+vuepress-plugin-comment2@2.0.0-beta.104/node_modules/vuepress-plugin-comment2/lib/client/styles/giscus.scss";
var e = COMMENT_OPTIONS;
var P = Boolean(e.repo && e.repoId && e.category && e.categoryId);
var i = ["de", "gsw", "en", "es", "fr", "id", "it", "ja", "ko", "pl", "ro", "ru", "vi", "zh-CN", "zh-TW"];
var k = defineComponent({ name: "GiscusComment", props: { darkmode: Boolean }, setup(s) {
  const p = (0, client_exports.usePageFrontmatter)(), u = useRoute(), n = ref(false), c = computed(() => {
    const t = (0, client_exports.usePageLang)().value;
    if (i.includes(t))
      return t;
    const o = t.split("-")[0];
    return i.includes(o) ? o : "en";
  }), m = computed(() => {
    if (!P)
      return false;
    const t = e.comment !== false, o = p.value.comment;
    return Boolean(o) || t !== false && o !== false;
  }), d = computed(() => ({ repo: e.repo, repoId: e.repoId, category: e.category, categoryId: e.categoryId, lang: c.value, theme: s.darkmode ? "dark" : "light", mapping: e.mapping || "pathname", term: (0, client_exports.withBase)(u.path), inputPosition: e.inputPosition || "top", reactionsEnabled: e.reactionsEnabled !== false ? "1" : "0", strict: e.strict !== false ? "1" : "0", emitMetadata: "0" }));
  return onMounted(async () => {
    await import("./giscus-6KC3IEUF.js"), n.value = true;
  }), () => h("div", { class: ["giscus-wrapper", { "input-top": e.inputPosition !== "bottom" }], style: { display: m.value ? "block" : "none" } }, n.value ? h("giscus-widget", d.value) : h("div", { style: "text-align:center" }, "Loading..."));
} });

// dep:@CommentProvider
var CommentProvider_default = k;
export {
  CommentProvider_default as default
};
//# sourceMappingURL=@CommentProvider.js.map
