import { Notify } from "vant";
import { getQueryVariable } from "@/utils/tool";
import { checkOpenId } from "@/service/login";
import {
  redirectToWechatAuth,
  SET_TOKEN,
  SET_USER_INFO,
} from "@/hooks/useWechatLogin";

async function bootstrap() {
  saveUrlParams();
  await checkWechatLogin();
}

/** 缓存页面现有参数 */
function saveUrlParams() {
  SET_TOKEN();
  SET_USER_INFO();

  // 缓存链接信息
  // localStorage.removeItem("paySearchUrl");
  // localStorage.removeItem("activeId"); // 当前活动id
  // localStorage.removeItem("indexUrl"); // 当前活动 首页
  // const searchUrl = window.location.search;
  // localStorage.setItem("paySearchUrl", searchUrl);
  // if (searchUrl.includes("id=")) {
  //   const activeId = getQueryVariable("id") || "17"; // 通过 url 获取活动 id - 查询活动装修
  //   const indexUrl = window.location.href;
  //   localStorage.setItem("activeId", activeId); // 当前活动id
  //   localStorage.setItem("indexUrl", indexUrl); // 当前活动 首页
  // }
}

/** 检验微信授权 */
async function checkWechatLogin() {
  const wxCode = getQueryVariable("code");
  if (!wxCode) {
    return redirectToWechatAuth();
  }
  const result = await checkOpenId(wxCode).catch((message) => {
    Notify({
      type: "warning",
      message: message || "当前参与人数过多，请稍后再试。",
    });
  });
  console.log("checkOpenId", result);
  if (!result) return;
  if (result.code === -1) {
    // 刷新页面，导致code重复使用 需重新授权
    return redirectToWechatAuth();
  }
  SET_TOKEN(result.data.jwt);
  // 免登陆情形下会有用户信息
  result.data.userInfo && SET_USER_INFO(result.data.userInfo);
}

export default bootstrap;
