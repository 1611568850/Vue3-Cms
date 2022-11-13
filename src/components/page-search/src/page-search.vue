<template>
  <div class="page-search">
    <ShFrom v-bind="searchFormItemConfig" v-model="formData">
      <template #header>
        <h1 class="header">高级检索</h1>
      </template>
      <template #footer>
        <div class="hander-btns">
          <el-button type="primary">搜索</el-button>
          <el-button type="danger">重置</el-button>
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
const props = defineProps({
  searchFormItemConfig: {
    type: Object as PropType<IFormItemConfig>,
    require: true
  }
})
const formData = ref({
  name: '',
  password: '',
  value: '',
  createTime: ''
})
</script>

<style lang="less">
.header {
  color: #c43d33;
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
