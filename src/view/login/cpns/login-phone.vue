<template>
  <div class="login-phone">
    <el-form
      label-width="70px"
      :rules="rules"
      :model="phoneaccount"
      ref="ElFormRef"
    >
      <el-form-item label="手机" prop="num">
        <el-input v-model="phoneaccount.num" />
      </el-form-item>
      <el-form-item label="验证码" prop="phoneRge">
        <div class="get-code">
          <el-input v-model="phoneaccount.code" placeholder="验证码"></el-input>
          <el-button type="primary" class="get-btn">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { ElForm, ElInput, ElFormItem, ElButton } from 'element-plus'
import { reactive, defineExpose, ref } from 'vue'
import { rules } from '../config/phone-config'
const phoneaccount = reactive({
  code: '',
  num: ''
})
const ElFormRef = ref<InstanceType<typeof ElForm>>()

function loginAction() {
  console.log('这里是phone登录的地方')
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

<style lang="less">
.get-code {
  display: flex;
  .get-btn {
    margin-left: 10px;
  }
}
</style>
