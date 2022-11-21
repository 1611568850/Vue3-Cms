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
        @EmitChangeDialog="EmitChangeDialog"
        @EmiteEditorUser="EmiteEditorUser"
      ></page-table>
    </div>
    <div class="page-modal">
      <PageModal
        :modalConfig="modalConfig"
        ref="pageModalRef"
        :defaultInfo="defaultInfo"
      ></PageModal>
    </div>
  </div>
</template>

<script lang="ts" setup>
import searchPage from '@/components/page-search/src/page-search.vue'
import searchFormItemConfig from '@/view/main/system/user/config/searchConfig'
import PageTable from '@/components/page-table/src/page-table.vue'

import contentTableConfig from '@/view/main/system/user/config/tableConfig'
import { usePageSearch } from '@/hooks/usePageSearch'

import PageModal from '@/components/page-modal/index'
import modalConfig from '@/view/main/system/user/config/modalConfig'
import { usePageModule } from '@/hooks/usePageModule'

import useRootStore from '@/stores/main/root/root'
const RootStore = useRootStore()

const [pageTable, handelSearchClick, handelResetClick] = usePageSearch()

const newCallBack = () => {
  const passwordItem = modalConfig.fromItems.find(
    (item) => item.field === 'password'
  )
  passwordItem!.isHidden = false
}
const newEditBack = () => {
  const passwordItem = modalConfig.fromItems.find(
    (item) => item.field === 'password'
  )
  passwordItem!.isHidden = true
}
// 将部分分类存入modalConfig
const departmentItem = modalConfig.fromItems.find(
  (item) => item.field === 'departmentId'
)
RootStore.getEnterDepartment().then(() => {
  console.log('department', departmentItem)
  console.log(RootStore.entireDepartment)
  if (departmentItem) {
    departmentItem.options = RootStore.entireDepartment.map((item) => {
      return {
        title: item.id,
        value: item.name
      }
    })
  }
})
// 将人物部分分类存入modalConfig
const RoleItem = modalConfig.fromItems.find((item) => item.field === 'roleId')
RootStore.getEnterRole().then(() => {
  // console.log('department', departmentItem)
  // console.log(RootStore.entireDepartment)
  if (RoleItem) {
    RoleItem.options = RootStore.entireRole.map((item) => {
      return {
        title: item.id,
        value: item.name
      }
    })
  }
})

// 新增的操作 编辑的操作
const [pageModalRef, EmitChangeDialog, EmiteEditorUser, defaultInfo] =
  usePageModule(newCallBack, newEditBack)
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
