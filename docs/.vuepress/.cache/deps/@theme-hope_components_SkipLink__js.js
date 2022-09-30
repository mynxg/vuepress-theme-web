import {
  useRoute
} from "./chunk-EGR3CLFO.js";
import "./chunk-CNG6RXDS.js";
import {
  defineComponent,
  h,
  ref,
  watch
} from "./chunk-QNG632ER.js";
import "./chunk-4LQFXFAH.js";
import "./chunk-BPKF3OQJ.js";

// node_modules/.pnpm/registry.npmmirror.com+vuepress-theme-hope@2.0.0-beta.104/node_modules/vuepress-theme-hope/lib/client/components/SkipLink.js
import "E:/college/blogTemplate/vuepress-theme-web/node_modules/.pnpm/registry.npmmirror.com+vuepress-theme-hope@2.0.0-beta.104/node_modules/vuepress-theme-hope/lib/client/styles/skip-link.scss";
var SkipLink_default = defineComponent({
  name: "SkipLink",
  props: {
    content: {
      type: String,
      default: "main-content"
    }
  },
  setup(props) {
    const route = useRoute();
    const backToTop = ref();
    watch(() => route.path, () => backToTop.value.focus());
    const focusMainContent = ({ target }) => {
      const el = document.querySelector(target.hash);
      if (el) {
        const removeTabIndex = () => {
          el.removeAttribute("tabindex");
          el.removeEventListener("blur", removeTabIndex);
        };
        el.setAttribute("tabindex", "-1");
        el.addEventListener("blur", removeTabIndex);
        el.focus();
        window.scrollTo(0, 0);
      }
    };
    return () => [
      h("span", {
        ref: backToTop,
        tabindex: "-1"
      }),
      h("a", {
        href: `#${props.content}`,
        class: "skip-link sr-only",
        onClick: focusMainContent
      }, "Skip to content")
    ];
  }
});

// dep:@theme-hope_components_SkipLink__js
var theme_hope_components_SkipLink_js_default = SkipLink_default;
export {
  theme_hope_components_SkipLink_js_default as default
};
//# sourceMappingURL=@theme-hope_components_SkipLink__js.js.map
