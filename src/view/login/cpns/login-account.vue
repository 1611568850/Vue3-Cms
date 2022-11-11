<template>
  <div class="login-account">
    <el-form
      label-width="100px"
      :rules="rules"
      :model="account"
      ref="ElFormRef"
    >
      <el-form-item label="账号" label-width="60px" prop="name">
        <el-input v-model="account.name" />
      </el-form-item>
      <el-form-item label="密码" label-width="60px" prop="password">
        <el-input v-model="account.password" type="password" show-password />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { ElForm, ElInput, ElFormItem } from 'element-plus'
import { reactive, defineExpose } from 'vue'
import rules from '../config/account-config'
import { ref } from 'vue'
import localCache from '@/utils/cache'
import useLoginStore from '@/stores/login/login'

// 收集用户的登录信息
const account = reactive({
  name: localCache.getCache('name') ?? '',
  password: localCache.getCache('password') ?? ''
})

// 登录所用数据
const ElFormRef = ref<InstanceType<typeof ElForm>>()
const useStore = useLoginStore()
// 登录函数主体
function loginAction(isKeepPassword: boolean) {
  ElFormRef.value?.validate((isValide) => {
    // console.log(isValide)
    if (isValide) {
      if (isKeepPassword) {
        localCache.setCache('name', account.name)
        localCache.setCache('password', account.password)
      } else {
        localCache.clearCache()
      }
      useStore.accountLoginAction({ ...account })
    }
    return isValide
  })
}
defineExpose({
  loginAction
})
</script>

<style lang="less"></style>
