<template>
  <div class="user">
    <searchPage :searchFormItemConfig="searchFormItemConfig"></searchPage>
    <div class="content">
      <page-table :contentTableConfig="contentTableConfig"></page-table>
    </div>
  </div>
</template>

<script lang="ts" setup>
import searchPage from '@/components/page-search/src/page-search.vue'
import PageTable from '@/components/page-table'
import searchFormItemConfig from '@/view/main/system/user/config/searchConfig'
import contentTableConfig from '@/view/main/system/user/config/tableConfig'
</script>

<style scoped lang="less">
.content {
  width: 100%;
  border-top: 20px solid#f5f5f5;
  box-sizing: border-box;
  padding: 30px;
  margin-top: 20px;
  // background-color: aquamarine;
}
</style>
