<template>
  <div class="page-table">
    <ShTable
      :DataList="DataList"
      v-bind="contentTableConfig"
      v-model:page="pageInfo"
      :DataCount="DataCount"
    >
      <template #headerHandler>
        <el-button type="primary" v-if="isCreate" @click="handleNewUser"
          >新建用户</el-button
        >
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
      <template #handler="scoped">
        <el-button
          size="small"
          type="primary"
          v-if="isUpdate"
          @click="handleEditorUser(scoped.row)"
          >编辑</el-button
        >
        <el-button
          size="small"
          type="danger"
          v-if="isDelete"
          @click="handleDelet(scoped.row.id)"
          >删除</el-button
        >
      </template>
      <template
        v-for="item in otherPropSlots"
        :key="item.prop"
        #[item.slotName]="scoped"
      >
        <template v-if="item.slotName">
          <slot :name="item.slotName" :row="scoped.row"></slot>
        </template>
      </template>
    </ShTable>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'
import ShTable from '@/base-ui/table'
import useSystemStore from '@/stores/main/system/system'
import { ElButton } from 'element-plus'
import { ref, defineExpose, watch } from 'vue'
import { utcFormat } from '@/utils/format'
import { Iuser } from '@/stores/main/system/type'
import { usePermissions } from '@/hooks/usePermission'
import { defineEmits } from 'vue'
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
const $emits = defineEmits(['EmitChangeDialog', 'EmiteEditorUser'])
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
let DataCount = ref()
// 双向绑定pageInfo
const pageInfo = ref({ currentPage: 1, pageSize: 10 })
watch(pageInfo, () => {
  pageTableData()
  // 重新发送了
})
// 权限判定
const isCreate = usePermissions(props.pageName, 'create')
const isDelete = usePermissions(props.pageName, 'delete')
const isUpdate = usePermissions(props.pageName, 'update')
const isQuery = usePermissions(props.pageName, 'query')
// 发送post请求,获取table表格数据
const pageTableData = (queryInfo: any = {}) => {
  // console.log(isQuery)
  if (!isQuery) return
  console.log(queryInfo)
  SystemStore.getPageListData({
    pageName: props.pageName,
    queryInfo: {
      offset: (pageInfo.value.currentPage - 1) * pageInfo.value.pageSize,
      size: pageInfo.value.pageSize,
      ...queryInfo
    }
  }).then(() => {
    // console.log('内部')
    switch (props.pageName) {
      case 'user':
        DataList.value = SystemStore.userList
        DataCount.value = SystemStore.userCount
        break
      case 'role':
        DataList.value = SystemStore.roleList
        DataCount.value = SystemStore.roleCout
        break
      case 'goods':
        DataList.value = SystemStore.goodsList
        DataCount.value = SystemStore.goodsCount
        break
      case 'menu':
        DataList.value = SystemStore.menuList
        DataCount.value = SystemStore.menuCount
        break
    }
  })
}

// 获取其他动态插槽的名称
const otherPropSlots = props.contentTableConfig?.propList.filter(
  (item: any) => {
    if (item.slotName === 'status') return false
    if (item.slotName === 'createAt') return false
    if (item.slotName === 'handler') return false
    if (item.slotName === 'updateAt') return false
    // console.log(item)
    return true
  }
)
// 删除操作
function handleDelet(id: number) {
  console.log(id)
  SystemStore.deleteInfo({ pageName: props.pageName, id: id })
}
// 通知父组件弹出新建用户窗口
function handleNewUser() {
  $emits('EmitChangeDialog')
}
function handleEditorUser(item: any) {
  $emits('EmiteEditorUser', item)
}
pageTableData()
defineExpose({ pageTableData })
</script>

<style lang="less" scoped></style>
