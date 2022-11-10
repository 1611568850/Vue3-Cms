<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="login">
    <loginPanel></loginPanel>
  </div>
</template>

<script lang="ts" setup>
import loginPanel from './cpns/login-panel.vue'
</script>

<style lang="less" scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: url('../../assets/img/login-bg.svg');
}
</style>
