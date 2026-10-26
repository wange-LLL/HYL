"use strict";
const common_vendor = require("../common/vendor.js");
const services_home = require("../services/home.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "HylGuess",
  setup(__props, { expose: __expose }) {
    const pageParams = {
      page: 1,
      pageSize: 10
    };
    const guessList = common_vendor.ref([]);
    const finish = common_vendor.ref(false);
    const getHomeGoodsGuessLikeData = async () => {
      if (finish.value === true) {
        return common_vendor.index.showToast({ icon: "none", title: "没有更多数据啦~" });
      }
      const res = await services_home.getHomeGoodsGuessLikeAPI(pageParams);
      guessList.value.push(...res.result.items);
      if (pageParams.page < res.result.pages) {
        pageParams.page++;
      } else {
        finish.value = true;
      }
    };
    const resetData = () => {
      pageParams.page = 1;
      guessList.value = [];
      finish.value = false;
    };
    common_vendor.onMounted(() => {
      getHomeGoodsGuessLikeData();
    });
    __expose({
      resetData,
      getMore: getHomeGoodsGuessLikeData
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(guessList.value, (item, k0, i0) => {
          return {
            a: item.picture,
            b: common_vendor.t(item.name),
            c: common_vendor.t(item.price),
            d: item.id
          };
        }),
        b: `/pages/goods/goods?id=4007498`,
        c: common_vendor.t(finish.value ? "数据已经燃尽啦~" : "数据正在加载中")
      };
    };
  }
});
wx.createComponent(_sfc_main);
