import {
  PasswordModal_default,
  useGlobalEcrypt
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

// node_modules/.pnpm/registry.npmmirror.com+vuepress-theme-hope@2.0.0-beta.104/node_modules/vuepress-theme-hope/lib/client/modules/encrypt/components/GloablEncrypt.js
var GloablEncrypt_default = defineComponent({
  name: "GlobalEncrypt",
  setup(_props, { slots }) {
    const { isGlobalEncrypted, validateGlobalToken } = useGlobalEcrypt();
    return () => {
      var _a;
      return isGlobalEncrypted.value ? h(PasswordModal_default, { full: true, onVerify: validateGlobalToken }) : ((_a = slots["default"]) == null ? void 0 : _a.call(slots)) || null;
    };
  }
});

// dep:@theme-hope_modules_encrypt_components_GloablEncrypt__js
var theme_hope_modules_encrypt_components_GloablEncrypt_js_default = GloablEncrypt_default;
export {
  theme_hope_modules_encrypt_components_GloablEncrypt_js_default as default
};
//# sourceMappingURL=@theme-hope_modules_encrypt_components_GloablEncrypt__js.js.map
