// 获取微信认证网址
export const genWechatAuthUrl = ({ appid, redirect_uri }) => {
  return `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appid}&redirect_uri=${encodeURIComponent(
    redirect_uri
  )}&response_type=code&scope=snsapi_base#wechat_redirect`;
};

// 根据链接获取参数
export const getQueryVariable = (variable) => {
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    if (pair[0] == variable) {
      return pair[1];
    }
  }
  return false;
};

// 线程等待
export const sleep = (seconds) =>
  new Promise((resolve) => setTimeout(resolve, seconds * 1000));

// 缓存
export const cache = {
  set(key, value) {
    value ? localStorage.setItem(key, value) : localStorage.removeItem(key);
  },
  get(key) {
    let str = localStorage.getItem(key);
    return str ? JSON.parse(str) : undefined;
  },
  setItem(key, value) {
    this.set(key, JSON.stringify(value));
  },
  getItem(key) {
    let str = this.get(key);
    return str ? JSON.parse(str) : undefined;
  },
};
