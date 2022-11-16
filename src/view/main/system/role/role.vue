<template>
  <div class="role">
    <searchPage :searchFormItemConfig="searchFormItemConfig"></searchPage>
    <div class="content">
      <page-table
        :contentTableConfig="PageTableConfig"
        pageName="role"
      ></page-table>
    </div>
  </div>
</template>

<script lang="ts" setup>
import PageTableConfig from './config/tableConfig'
import PageTable from '@/components/page-table'

import searchPage from '@/components/page-search/src/page-search.vue'
import searchFormItemConfig from '@/view/main/system/role/config/searchConfig'
// import ShTable from '@/base-ui/table'
</script>

<style scoped>
.content {
  width: 100%;
  border-top: 20px solid#f5f5f5;
  box-sizing: border-box;
  padding: 30px;
  margin-top: 20px;
  /* // background-color: aquamarine; */
}
</style>
