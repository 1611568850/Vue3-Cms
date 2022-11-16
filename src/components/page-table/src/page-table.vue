<template>
  <div class="page-table">
    <ShTable :userList="DataList" v-bind="contentTableConfig">
      <template #headerHandler>
        <el-button type="primary">新建用户</el-button>
        <el-button type="success">刷新</el-button>
      </template>
      <template #status="scoped">
        <el-button :type="scoped.row.enable ? 'primary' : 'danger'">{{
          scoped.row.enable ? '启用' : '关闭'
        }}</el-button>
      </template>
      <template #createAt="scoped">
        <strong>{{ utcFormat(scoped.row.createAt) }}</strong>
      </template>
      <template #updateAt="scoped">
        <strong>{{ utcFormat(scoped.row.updateAt) }}</strong>
      </template>
      <template #handler>
        <el-button size="small" type="primary">增加</el-button>
        <el-button size="small" type="danger">删除</el-button>
      </template>
    </ShTable>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'
import ShTable from '@/base-ui/table'
import useSystemStore from '@/stores/main/system/system'
import { ElButton } from 'element-plus'
import { ref, defineExpose } from 'vue'
import { utcFormat } from '@/utils/format'
import { Iuser } from '@/stores/main/system/type'

// interface IProps {
//   contentTableConfig: {
//     type: object
//     require: true
//   }
//   pageName: {
//     type: string
//     require: true
//     default: 'user'
//   }
// }
const props = defineProps({
  contentTableConfig: {
    type: Object,
    require: true
  },
  pageName: {
    type: String,
    require: true
    // default: 'user'
  }
})
const SystemStore = useSystemStore()
let DataList = ref<Iuser[]>()
// console.log('这里')
const pageTableData = (queryInfo: any = {}) => {
  SystemStore.getPageListData({
    pageName: props.pageName,
    queryInfo: {
      offset: 0,
      size: 10,
      ...queryInfo
    }
  }).then(() => {
    // console.log('内部')
    switch (props.pageName) {
      case 'user':
        DataList.value = SystemStore.userList

        break
      case 'role':
        DataList.value = SystemStore.roleList

        break
    }
  })
}
pageTableData()
defineExpose({ pageTableData })
</script>

<style lang="less" scoped></style>
