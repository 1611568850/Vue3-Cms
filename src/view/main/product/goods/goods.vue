<template>
  <div class="goods">
    <pageTableVue :contentTableConfig="goodsTableConfig" pageName="goods">
      <template #imgUrl="scoped">
        <el-image
          style="width: 60px; height: 80px"
          :src="scoped.row.imgUrl"
          :preview-src-list="[scoped.row.imgUrl]"
          preview-teleported
        ></el-image>
      </template>
      <template #oldPrice="scoped"> {{ scoped.row.oldPrice }}元 </template>
    </pageTableVue>
  </div>
</template>

<script lang="ts" setup>
import { ElImage } from 'element-plus'
import pageTableVue from '@/components/page-table'
import goodsTableConfig from '@/view/main/product/goods/config/goodsTableConfig'
</script>

<style scoped></style>
