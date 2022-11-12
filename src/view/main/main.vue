<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="main">
    <el-container class="main-content">
      <el-aside :width="isCollapsed ? '60px' : '200px'">
        <NavMune :isCollapsed="isCollapsed"></NavMune>
      </el-aside>
      <el-container class="page">
        <el-header class="page-header">
          <NavHeader @foldChange="handleChangde"></NavHeader>
        </el-header>
        <el-main class="page-content">
          <div class="pageinfo">
            <router-view></router-view>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import { ElContainer, ElAside, ElHeader, ElMain } from 'element-plus'
import NavMune from '@/components/nav-menu'
import NavHeader from '@/components/nav-header'
import { ref } from 'vue'

const isCollapsed = ref(false)
function handleChangde(isCollapse: boolean) {
  isCollapsed.value = isCollapse
}
</script>
<style scoped lang="less">
.pageinfo {
  background-color: #fff;
}
.main {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.main-content,
.page {
  height: 100%;
}

.page-content {
  height: calc(100% - 48px);

  .page-info {
    background-color: #fff;
    border-radius: 5px;
  }
}

.page-header,
.el-footer {
  display: flex;
  color: #333;
  // text-align: center;
  // justify-content: center;
  align-items: center;
  background-color: aqua;
}

.el-header {
  height: 48px !important;
  widows: 100%;
}

.el-aside {
  overflow-x: hidden;
  overflow-y: auto;
  line-height: 200px;
  text-align: left;
  cursor: pointer;
  background-color: #001529;
  transition: width 0.3s linear;
  scrollbar-width: none; /* firefox */
  -ms-overflow-style: none; /* IE 10+ */

  &::-webkit-scrollbar {
    display: none;
  }
}

.el-main {
  color: #333;
  text-align: center;
  background-color: #f0f2f5;
}
</style>
