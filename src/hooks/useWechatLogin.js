import { useRouter } from "vue-router";
import { wechatConfig, authConfig } from "@/config";
import { cache, genWechatAuthUrl } from "@/utils/tool";

let router;

export const GET_TOKEN = () => cache.get(authConfig.tokenKey);
export const SET_TOKEN = (token) => cache.set(authConfig.tokenKey, token);
export const GET_USER_INFO = () => cache.getItem(authConfig.userKey);
export const SET_USER_INFO = (user) => cache.setItem(authConfig.userKey, user);
export const redirectToWechatAuth = () =>
  window.location.replace(genWechatAuthUrl(wechatConfig));

// 验证登录用户信息 如果useInfo存在 则直接跳转；否则登录后再跳转
const checkUserIsLogin = () => {
  if (GET_USER_INFO()) return router.push(authConfig.homePage);
};

export default () => {
  router = useRouter();
  return {
    GET_TOKEN,
    SET_TOKEN,
    GET_USER_INFO,
    SET_USER_INFO,
    redirectToWechatAuth,
    checkUserIsLogin,
  };
};
