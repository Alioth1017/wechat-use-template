import axios from "axios";
import { apiConfig, authConfig } from "@/config";
import { GET_TOKEN, redirectToWechatAuth } from "@/hooks/useWechatLogin";

const service = axios.create(apiConfig);

/**
 * 请求发送
 */
service.interceptors.request.use(
  (config) => {
    config.headers[authConfig.tokenKey] = GET_TOKEN();
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

/**
 * 请求响应
 */
service.interceptors.response.use(
  (response) => {
    if (response) {
      const { code, message } = response.data;

      switch (code) {
        case -1:
        case 1000:
          return response.data;
        case 401:
          return redirectToWechatAuth();
        default:
          return Promise.reject(message);
      }
    }
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default service;
