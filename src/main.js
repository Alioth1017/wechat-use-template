import { createApp } from "vue";
import router from "./router";
import bootstrap from "./bootstrap";

bootstrap()
  .then(() =>
    createApp(() => import("./App.vue"))
      .use(router)
      .mount("#app")
  )
  .catch((err) => {
    console.log("启动失败", err);
  });
