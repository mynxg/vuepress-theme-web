import {
  PasswordModal_default,
  usePathEncrypt
} from "./chunk-BCM5PQF3.js";
import "./chunk-BZLGL2AW.js";
import "./chunk-74GDCJBT.js";
import "./chunk-ANKY43RT.js";
import "./chunk-EGR3CLFO.js";
import "./chunk-CNG6RXDS.js";
import {
  defineComponent,
  h
} from "./chunk-QNG632ER.js";
import "./chunk-4LQFXFAH.js";
import "./chunk-BPKF3OQJ.js";

// node_modules/.pnpm/registry.npmmirror.com+vuepress-theme-hope@2.0.0-beta.104/node_modules/vuepress-theme-hope/lib/client/modules/encrypt/components/LocalEncrypt.js
var LocalEncrypt_default = defineComponent({
  name: "LocalEncrypt",
  setup(_props, { slots }) {
    const { isEncrypted, validateToken } = usePathEncrypt();
    return () => {
      var _a;
      return isEncrypted.value ? h(PasswordModal_default, { full: true, onVerify: validateToken }) : ((_a = slots["default"]) == null ? void 0 : _a.call(slots)) || null;
    };
  }
});

// dep:@theme-hope_modules_encrypt_components_LocalEncrypt__js
var theme_hope_modules_encrypt_components_LocalEncrypt_js_default = LocalEncrypt_default;
export {
  theme_hope_modules_encrypt_components_LocalEncrypt_js_default as default
};
//# sourceMappingURL=@theme-hope_modules_encrypt_components_LocalEncrypt__js.js.map
