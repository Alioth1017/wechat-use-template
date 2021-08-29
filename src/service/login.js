import request from "@/utils/request";

export function weChatLogin(params) {
  return request({
    url: "/wechat/login",
    method: "POST",
    params,
  });
}

// 通过code，获取openId
export function checkOpenId(wxCode) {
  return request({
    url: "/wechat/checkOpenId",
    method: "POST",
    params: { code: wxCode },
  });
}

export function getCheckCode(number) {
  return request({
    url: "/wechat/get-check-code",
    method: "get",
    params: { number },
  });
}
