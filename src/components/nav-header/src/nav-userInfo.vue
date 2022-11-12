<template>
  <el-dropdown trigger="click">
    <span class="el-dropdown-link">
      {{ LoginStore.userInfo.name }}
      <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>切换用户</el-dropdown-item>
        <el-dropdown-item>退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script lang="ts" setup>
import {
  ElDropdown,
  ElIcon,
  ElDropdownItem,
  ElDropdownMenu
} from 'element-plus'
import { ArrowDown } from '@element-plus/icons-vue'
import useLoginStore from '@/stores/login/login'
const LoginStore = useLoginStore()
</script>

<style lang="less">
.el-dropdown {
  cursor: pointer;
}
</style>
