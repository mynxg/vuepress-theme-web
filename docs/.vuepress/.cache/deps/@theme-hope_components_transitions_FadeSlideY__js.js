import {
  useScrollPromise
} from "./chunk-BZLGL2AW.js";
import "./chunk-74GDCJBT.js";
import "./chunk-ANKY43RT.js";
import "./chunk-EGR3CLFO.js";
import "./chunk-CNG6RXDS.js";
import {
  Transition,
  defineComponent,
  h
} from "./chunk-QNG632ER.js";
import "./chunk-4LQFXFAH.js";
import "./chunk-BPKF3OQJ.js";

// node_modules/.pnpm/registry.npmmirror.com+vuepress-theme-hope@2.0.0-beta.104/node_modules/vuepress-theme-hope/lib/client/components/transitions/FadeSlideY.js
import "E:/college/blogTemplate/vuepress-theme-web/node_modules/.pnpm/registry.npmmirror.com+vuepress-theme-hope@2.0.0-beta.104/node_modules/vuepress-theme-hope/lib/client/styles/fade-slide-y.scss";
var FadeSlideY_default = defineComponent({
  name: "FadeSlideY",
  setup(_props, { slots }) {
    const scrollPromise = useScrollPromise();
    const onBeforeEnter = scrollPromise.resolve;
    const onBeforeLeave = scrollPromise.pending;
    return () => h(Transition, {
      name: "fade-slide-y",
      mode: "out-in",
      onBeforeEnter,
      onBeforeLeave
    }, () => {
      var _a;
      return (_a = slots["default"]) == null ? void 0 : _a.call(slots);
    });
  }
});

// dep:@theme-hope_components_transitions_FadeSlideY__js
var theme_hope_components_transitions_FadeSlideY_js_default = FadeSlideY_default;
export {
  theme_hope_components_transitions_FadeSlideY_js_default as default
};
//# sourceMappingURL=@theme-hope_components_transitions_FadeSlideY__js.js.map
