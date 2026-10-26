"use strict";
const common_vendor = require("../../common/vendor.js");
const services_home = require("../../services/home.js");
if (!Math) {
  (CustomNavbar + HylSwiper + Categorypanel + HotPanel + HylGuess)();
}
const HylSwiper = () => "../../components/HylSwiper.js";
const CustomNavbar = () => "./components/CustomNavbar.js";
const Categorypanel = () => "./components/Categorypanel.js";
const HotPanel = () => "./components/HotPanel.js";
const HylGuess = () => "../../components/HylGuess.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    const bannerList = common_vendor.ref([]);
    const getHomeBannerData = async () => {
      const res = await services_home.getHomeBannerAPI();
      bannerList.value = res.result;
    };
    const categoryList = common_vendor.ref([]);
    const getHomeCategoryData = async () => {
      const res = await services_home.getHomeCategoryAPI();
      categoryList.value = res.result;
    };
    const hotList = common_vendor.ref([]);
    const getHomeHotData = async () => {
      const res = await services_home.getHomeHotAPI();
      hotList.value = res.result;
    };
    common_vendor.onLoad(() => {
      getHomeBannerData();
      getHomeCategoryData();
      getHomeHotData();
    });
    const guessRef = common_vendor.ref();
    const onScrolltolower = () => {
      var _a;
      (_a = guessRef.value) == null ? void 0 : _a.getMore();
    };
    const isTriggered = common_vendor.ref(false);
    const onrefresherrefresh = async () => {
      var _a, _b;
      isTriggered.value = true;
      (_a = guessRef.value) == null ? void 0 : _a.resetData();
      await Promise.all([
        getHomeBannerData(),
        getHomeCategoryData(),
        getHomeHotData(),
        (_b = guessRef.value) == null ? void 0 : _b.getMore()
      ]);
      isTriggered.value = false;
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          list: bannerList.value
        }),
        b: common_vendor.p({
          list: categoryList.value
        }),
        c: common_vendor.p({
          list: hotList.value
        }),
        d: common_vendor.sr(guessRef, "375eb4b5-4", {
          "k": "guessRef"
        }),
        e: common_vendor.o(onrefresherrefresh),
        f: isTriggered.value,
        g: common_vendor.o(onScrolltolower)
      };
    };
  }
});
wx.createPage(_sfc_main);
