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
        <el-input v-model="account.password" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { ElForm, ElInput, ElFormItem, Instance } from 'element-plus'
import { reactive, defineExpose } from 'vue'
import rules from '../config/account-config'
import { ref } from 'vue'
const account = reactive({
  name: '',
  password: ''
})

const ElFormRef = ref<InstanceType<typeof ElForm>>()
function loginAction() {
  console.log('这里是 账号 登录地方')
  ElFormRef.value?.validate((isValide) => {
    // console.log(isValide)
    if (isValide) {
      console.log('执行登录逻辑')
    }
    return isValide
  })
}
defineExpose({
  loginAction
})
</script>

<style lang="less"></style>
