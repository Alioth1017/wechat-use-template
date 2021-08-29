<template>
  <div class="index">首页</div>
</template>

<script>
import { defineComponent, onUnmounted, reactive } from "vue";
import useWechatLogin from "@/hooks/useWechatLogin";
// import usePhoneLogin from "@/hooks/usePhoneLogin";

export default defineComponent({
  name: "Index",
  setup() {
    const { checkUserIsLogin } = useWechatLogin();
    checkUserIsLogin();

    return {};
  },
});
</script>

<style scoped lang="less">
</style>
