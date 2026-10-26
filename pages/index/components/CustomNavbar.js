"use strict";
const common_vendor = require("../../../common/vendor.js");
const common_assets = require("../../../common/assets.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "CustomNavbar",
  setup(__props) {
    const { safeAreaInsets } = common_vendor.index.getSystemInfoSync();
    return (_ctx, _cache) => {
      var _a;
      return {
        a: common_assets._imports_0,
        b: ((_a = common_vendor.unref(safeAreaInsets)) == null ? void 0 : _a.top) + "px"
      };
    };
  }
});
wx.createComponent(_sfc_main);
