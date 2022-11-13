<template>
  <div class="table">
    <el-table border style="width: 100%" :data="userList">
      <template
        v-for="PropItem in contentTableConfig?.propList"
        :key="PropItem"
      >
        <el-table-column v-bind="PropItem" align="center">
          <template #default="scope">
            <slot :name="PropItem.slotName" :row="scope.row">
              {{ scope.row[PropItem.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'
import { ElTableColumn, ElTable, ElButton } from 'element-plus'
const props = defineProps({
  contentTableConfig: {
    type: Object,
    require: true
  },
  userList: {
    type: Array,
    default: () => []
  }
  // listData: {
  //   type: Array,
  //   required: true
  // },
  // propList: {
  //   type: Array,
  //   required: true
  // }
})
</script>

<style lang="less"></style>
