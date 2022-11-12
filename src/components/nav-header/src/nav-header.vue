<template>
  <div class="nav_header">
    <div class="logo" @click="changeCollapse">
      <template v-if="isCollapse">
        <el-icon size="30"><Fold /></el-icon>
      </template>
      <template v-else>
        <el-icon size="30"><Expand /></el-icon>
      </template>
    </div>
    <div class="content">
      <div class="breadContanier">
        <el-breadcrumb :separator-icon="ArrowRight">
          <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
          <el-breadcrumb-item>promotion management</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="userInfo">
        <navUserInfoVue></navUserInfoVue>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ElIcon, ElBreadcrumb, ElBreadcrumbItem } from 'element-plus'
import { Fold, Expand, ArrowRight } from '@element-plus/icons-vue'
import { ref, defineEmits } from 'vue'
import navUserInfoVue from './nav-userInfo.vue'

const isCollapse = ref(false)
const $emits = defineEmits(['foldChange'])
function changeCollapse() {
  isCollapse.value = !isCollapse.value
  $emits('foldChange', isCollapse.value)
}
</script>

<style lang="less">
.nav_header {
  display: flex;
  width: 100%;
  .logo {
    width: 30px;
    cursor: pointer;
  }
  .content {
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 20px;
  }
}
</style>
