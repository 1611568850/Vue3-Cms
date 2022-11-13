<template>
  <div class="nav-breadcrumb">
    <el-breadcrumb :separator-icon="ArrowRight">
      <template v-for="item in breadcurmbs" :key="item.name">
        <el-breadcrumb-item>{{ item.name }}</el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<script lang="ts" setup>
import { ElBreadcrumb, ElBreadcrumbItem } from 'element-plus'
import { ArrowRight } from '@element-plus/icons-vue'
import { defineProps, PropType } from 'vue'
import { IbreadCrumbItem } from '../type/index'
const porps = defineProps({
  breadcurmbs: {
    type: Array as PropType<IbreadCrumbItem[]>,
    default: () => []
  }
})
</script>

<style lang="less"></style>
