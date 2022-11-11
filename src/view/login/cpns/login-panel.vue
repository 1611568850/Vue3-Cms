<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>
    <el-tabs
      type="border-card"
      class="demo-tabs"
      stretch
      model-value="accountTabpane"
      ref="EltabRef"
    >
      <el-tab-pane name="accountTabpane">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><User /></el-icon>
            <span>账号登录</span>
          </span>
        </template>
        <loginAccount ref="accountRef"></loginAccount>
      </el-tab-pane>
      <el-tab-pane name="phoneTabpane">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><Cellphone /></el-icon>
            <span>手机登录</span>
          </span>
        </template>
        <loginPhone ref="phoneRef"></loginPhone>
      </el-tab-pane>
    </el-tabs>
    <div class="account-control">
      <el-checkbox v-model="isKeepPassword" label="记住密码" size="large" />
      <el-link type="primary">忘记密码?</el-link>
    </div>
    <div class="account-button">
      <el-button type="primary" @click="handeLoginClick">登录</el-button>
      <el-button type="primary">注册</el-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  ElTabs,
  ElTabPane,
  ElIcon,
  ElCheckbox,
  ElLink,
  ElButton
} from 'element-plus'
import { User, Cellphone } from '@element-plus/icons-vue'
import loginAccount from './login-account.vue'
import loginPhone from './login-phone.vue'
import { ref } from 'vue'

// 定义属性
const EltabRef = ref<typeof ElTabs>()
const accountRef = ref<InstanceType<typeof loginAccount>>()
const phoneRef = ref<InstanceType<typeof loginPhone>>()

// 定义方法
const isKeepPassword = ref(true)
const handeLoginClick = () => {
  // console.log('立即登录', accountRef.value?.loginAction())
  if (EltabRef.value?.currentName === 'accountTabpane') {
    accountRef.value?.loginAction(isKeepPassword.value)
  } else {
    phoneRef.value?.loginAction()
  }
}
</script>
<style lang="less" scoped>
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
.demo-tabs .custom-tabs-label .el-icon {
  vertical-align: middle;
}
.demo-tabs .custom-tabs-label span {
  vertical-align: middle;
  margin-left: 4px;
}
.login-panel {
  margin-bottom: 150px;
  width: 320px;
  .title {
    text-align: center;
  }
}
.account-control {
  display: flex;
  justify-content: space-between;
}
.account-button {
  display: flex;
  justify-content: center;
  button {
    width: 50%;
  }
}
</style>
