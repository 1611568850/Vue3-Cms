<template>
  <div class="nav-menu">
    <div class="logo">
      <img class="img" src="@/assets/img/logo.svg" alt="logo" />
      <span class="title" v-show="!isCollapsed">Vue+ts</span>
    </div>
    <el-menu
      class="el-menu-vertical-demo"
      text-color="#b7bdc3"
      :collapse="isCollapsed"
      :default-active="$route.path"
    >
      <template v-for="item in loginStore.userMenuList" :key="item.id">
        <template v-if="item.type === 1">
          <!-- 如果type等于1表示有可以展开的子类 -->
          <el-sub-menu :index="item.url">
            <template #title>
              <el-icon>
                <i class="iconfont" :class="item.icon.slice(3)"></i>
              </el-icon>
              <span>{{ item.name }}</span>
            </template>
            <!-- 遍历字item -->
            <template v-for="itemChild in item.children" :key="itemChild.id">
              <el-menu-item
                :index="itemChild.url"
                @click="handleItemClick(itemChild)"
              >
                <el-icon>
                  <i class="iconfont" :class="item.icon.slice(3)"></i
                ></el-icon>
                <span>{{ itemChild.name }}</span>
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>
        <template v-else-if="item.type === 2">
          <el-menu-item :index="item.id + ''">
            <i v-if="item.icon" :class="item.icon"></i>
            <span>{{ item.name }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts" setup>
import { ElMenu, ElSubMenu, ElMenuItem, ElIcon } from 'element-plus'
import useLoginStore from '@/stores/login/login'
// import { Monitor, Setting, Goods, ChatDotRound } from '@element-plus/icons-vue'
import { defineProps } from 'vue'
import { useRouter, useRoute } from 'vue-router'
// 获取控制放大缩小的值
const props = defineProps({
  isCollapsed: {
    type: Boolean,
    default: false
  }
})

// 获取用户对应的菜单列表
const loginStore = useLoginStore()
// 点击菜单项,拿到对应的route地址
const router = useRouter()
const route = useRoute()
function handleItemClick(item: any) {
  router.push({
    path: item.url ?? '/not-found'
  })
  // console.log(item.url)
  // console.log(route.path)
}
</script>

<style lang="less">
.nav-menu {
  height: 100%;
  background-color: #001529;

  .logo {
    display: flex;
    height: 28px;
    padding: 12px 10px 8px 10px;
    // flex-direction: row;
    // justify-content: flex-start;
    // align-items: center;

    .img {
      height: 100%;
      margin: 0 10px;
      // background: red;
    }

    .title {
      font-size: 16px;
      font-weight: 700;
      color: white;
      line-height: 28px;
      // z-index: 1;
    }
  }
  .el-menu {
    background-color: #001529 !important;
    border-right: none;
  }
  .el-sub-menu {
    background-color: #001529 !important;
    .el-menu-item {
      padding-left: 50px !important;
      background-color: #0c2135 !important;
    }
  }
  .el-menu-item:hover {
    color: #fff !important; // 菜单
    background-color: #0a60bd !important;
  }
  .el-sub-menu__title {
    // background-color: #fff !important;
    .el-icon {
      width: 10px;
      height: 10px;
      // color: #eb2020;
    }
  }
  .el-sub-menu__title:hover {
    background-color: #0a60bd;
    span {
      color: #000;
    }
  }

  .el-menu-item.is-active {
    color: #fff !important;
    background-color: #0a60bd !important;
  }
}
</style>
