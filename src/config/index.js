// TODO mock 模式会跳过微信授权
export const mockConfig = {
  mock: false,
};

export const wechatConfig = {
  appid: "wx485254d6a167d195",
  redirect_uri:
    process.env.NODE_ENV === "development"
      ? "http://127.0.0.1"
      : "http://127.0.0.1",
};

export const apiConfig = {
  baseURL:
    process.env.NODE_ENV === "development"
      ? "http://127.0.0.1/serve-api"
      : "http://127.0.0.1/serve-api",
  timeout: 15 * 1000, // 请求超时时间
};

export const authConfig = {
  tokenKey: "Authorization",
  userKey: "userInfo",
  redirectKey: "redirectPath",
  homePage: { name: "list" },
};

export function useDefaultRouterConfig() {
  const routerMode = "hash";
  let defaultRouter = "";
  if (process.env.NODE_ENV === "development") {
    defaultRouter = "";
  } else {
    // TODO
  }
  return { routerMode, defaultRouter };
}

export default {
  mockConfig,
  wechatConfig,
  apiConfig,
  useDefaultRouterConfig,
};
