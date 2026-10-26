"use strict";
const common_vendor = require("../../common/vendor.js");
const useMemberStore = common_vendor.defineStore(
  "member",
  () => {
    const profile = common_vendor.ref();
    const setProfile = (val) => {
      profile.value = val;
    };
    const clearProfile = () => {
      profile.value = void 0;
    };
    return {
      profile,
      setProfile,
      clearProfile
    };
  },
  // TODO: 持久化
  {
    //网页端口配置
    //persist:true;
    // 小程序端口配置如下
    persist: {
      // 配置持久化
      storage: {
        // 在此处调整为兼容多端的API
        getItem(key) {
          return common_vendor.index.getStorageSync(key);
        },
        setItem(key, value) {
          common_vendor.index.setStorageSync(key, value);
        }
      }
    }
  }
);
exports.useMemberStore = useMemberStore;
