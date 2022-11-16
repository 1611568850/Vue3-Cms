<template>
  <div class="page-search">
    <ShFrom v-bind="searchFormItemConfig" v-model="formData">
      <template #header>
        <h1 class="header">高级检索</h1>
      </template>
      <template #footer>
        <div class="hander-btns">
          <el-button type="primary" @click="handleSearchClick">搜索</el-button>
          <el-button type="danger" @click="handleResetClick">重置</el-button>
        </div>
      </template>
    </ShFrom>
  </div>
</template>

<script lang="ts" setup>
import ShFrom from '@/base-ui/form'
import { ElButton } from 'element-plus'
import { ref, defineProps, PropType } from 'vue'
import { IFormItemConfig } from '@/base-ui/form'
import { defineEmits } from 'vue'
const props = defineProps({
  searchFormItemConfig: {
    type: Object as PropType<IFormItemConfig>,
    require: true
  }
})
const formItems = props.searchFormItemConfig?.fromItems ?? []
const originFormItems: any = {}
for (const item of formItems) {
  originFormItems[item.field] = ''
}
const formData = ref(originFormItems)
// 重置搜索框信息的操作函数
// formData.value.id = originFormItems.id
// console.log('点击', originFormItems)
// formData.value.id = 1
// console.log('点击', formData.value)
const $emits = defineEmits(['SearchClick', 'ResetClick'])
const handleResetClick = () => {
  for (const key of Object.keys(originFormItems)) {
    formData.value[key] = originFormItems[key]
  }
  $emits('ResetClick')
}
// const handleResetClick = () => {
//   formData.value = originFormItems
// }
// 搜索功能
const handleSearchClick = () => {
  console.log('点击了')
  $emits('SearchClick', formData.value)
  // console.log(formData.value)
}
</script>

<style lang="less" scoped>
.header {
  color: #c43d33;
  text-align: center;
}
.footer {
  .hander-btns {
    // position: absolute;
    text-align: right;
    .el-button {
      // background-color: aqua;
      margin: 10px;
    }
  }
}
</style>
