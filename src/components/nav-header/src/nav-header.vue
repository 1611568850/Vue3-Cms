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
        <ShBreadCurmb :breadcurmbs="breadcurmbs"></ShBreadCurmb>
      </div>
      <div class="userInfo">
        <navUserInfoVue></navUserInfoVue>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ElIcon } from 'element-plus'
import { Fold, Expand } from '@element-plus/icons-vue'
import ShBreadCurmb from '@/base-ui/breadcrumb'
import { ref, defineEmits, watch } from 'vue'
import navUserInfoVue from './nav-userInfo.vue'
import LocalCache from '@/utils/cache'
import { pathMapToMenu } from '@/utils/map-menus'
import { IbreadCrumbItem } from '@/base-ui/breadcrumb'
import { useRoute } from 'vue-router'
// 获取面包屑数据

const isCollapse = ref(false)
const $emits = defineEmits(['foldChange'])
function changeCollapse() {
  isCollapse.value = !isCollapse.value
  $emits('foldChange', isCollapse.value)
}

const route = useRoute()
const userMenuList = LocalCache.getCache('userMenuList')
let breadcurmbs = ref<IbreadCrumbItem[]>()
watch(
  () => route.path,
  () => {
    breadcurmbs.value = pathMapToMenu(userMenuList, route.path)
    // console.log('监听到啊了', breadcurmbs.value)
  },
  { immediate: true }
)
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
