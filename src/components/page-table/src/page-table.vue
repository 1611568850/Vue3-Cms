<template>
  <div class="page-table">
    <ShTable :userList="userList" :contentTableConfig="contentTableConfig">
      <template #status="scoped">
        <el-button :type="scoped.row.enable ? 'primary' : 'danger'">{{
          scoped.row.enable ? '启用' : '关闭'
        }}</el-button>
      </template>
      <template #createAt="scoped">
        <strong>{{ scoped.row.createAt }}</strong>
      </template>
    </ShTable>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'
import ShTable from '@/base-ui/table'
import useSystemStore from '@/stores/main/system/system'
import { ElButton } from 'element-plus'
import { ref } from 'vue'
const props = defineProps({
  contentTableConfig: {
    type: Object,
    require: true
  }
})
const SystemStore = useSystemStore()
let userList = ref([])

SystemStore.getPageListData('/users/list', 10).then(() => {
  userList.value = SystemStore.userList
})
</script>

<style lang="less"></style>
