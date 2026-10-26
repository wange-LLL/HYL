"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "HotPanel",
  props: {
    list: {}
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(_ctx.list, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.title),
            b: common_vendor.t(item.alt),
            c: common_vendor.f(item.pictures, (src, k1, i1) => {
              return {
                a: src,
                b: src
              };
            }),
            d: item.id
          };
        })
      };
    };
  }
});
wx.createComponent(_sfc_main);
