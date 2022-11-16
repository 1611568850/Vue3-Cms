<template>
  <div class="user">
    <searchPage
      :searchFormItemConfig="searchFormItemConfig"
      @SearchClick="handelSearchClick"
      @ResetClick="handelResetClick"
    ></searchPage>
    <div class="content">
      <page-table
        ref="pageTable"
        :contentTableConfig="contentTableConfig"
        pageName="user"
      ></page-table>
    </div>
  </div>
</template>

<script lang="ts" setup>
import searchPage from '@/components/page-search/src/page-search.vue'
import searchFormItemConfig from '@/view/main/system/user/config/searchConfig'
import PageTable from '@/components/page-table/src/page-table.vue'
import contentTableConfig from '@/view/main/system/user/config/tableConfig'
import { usePageSearch } from '@/hooks/usePageSearch'

const [pageTable, handelSearchClick, handelResetClick] = usePageSearch()
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
