<template>
  <div class="page-modal">
    <el-dialog
      v-model="dialogVisible"
      title="新建用户"
      width="30%"
      destroy-on-close
    >
      <ShFrom v-bind="modalConfig" v-model="modalDate"></ShFrom>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="handleConfirmClick">
            确定
          </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import { ElDialog, ElButton } from 'element-plus'
import { ref } from 'vue'
import ShFrom from '@/base-ui/form'
import { defineProps, defineExpose, watch } from 'vue'
interface PropsItems {
  modalConfig: any
  defaultInfo: any
}
const props = defineProps<PropsItems>()
const dialogVisible = ref(false)
const modalDate = ref<any>({})
watch(
  () => props.defaultInfo,
  (newValue) => {
    for (const item of props.modalConfig.fromItems) {
      modalDate.value[`${item.field}`] = newValue[`${item.field}`]
    }
  },
  { immediate: true, deep: true }
)

const handleConfirmClick = () => {
  dialogVisible.value = false
}
defineExpose({ dialogVisible })
</script>

<style lang="less" scoped></style>
