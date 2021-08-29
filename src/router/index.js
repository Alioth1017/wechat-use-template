import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";
import { useDefaultRouterConfig } from "@/config";
import Index from "@/views/Index.vue";

const { routerMode, defaultRouter } = useDefaultRouterConfig();

export default createRouter({
  history:
    routerMode == "history" ? createWebHistory() : createWebHashHistory(),
  routes: [
    /* 首页*/
    {
      path: `${defaultRouter}/`,
      redirect: `${defaultRouter}/index`,
    },
    {
      path: `${defaultRouter}/index`,
      name: "index",
      component: Index,
    },
  ],
});
