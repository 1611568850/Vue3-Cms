<template>
  <div class="table">
    <div class="header">
      <slot name="header">
        <div class="title">{{ title }}</div>
        <div class="handler">
          <slot name="headerHandler"></slot>
        </div>
      </slot>
    </div>
    <el-table
      border
      style="width: 100%"
      :data="userList"
      @selection-change="hadleSelectionChange"
    >
      <el-table-column
        v-if="showSelectColumn"
        type="selection"
        align="center"
        min-width="60px"
      ></el-table-column>
      <el-table-column
        v-if="showIndexColumn"
        type="index"
        label="序号"
        align="center"
        min-width="60px"
      ></el-table-column>
      <template v-for="PropItem in propList" :key="PropItem.prop">
        <el-table-column v-bind="PropItem" align="center">
          <template #default="scope">
            <slot :name="PropItem.slotName" :row="scope.row">
              {{ scope.row[PropItem.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <div class="footer">
      <slot name="footer">
        <el-pagination
          v-model:current-page="currentPage4"
          v-model:page-size="pageSize4"
          :page-sizes="[100, 200, 300, 400]"
          :small="small"
          :disabled="disabled"
          :background="background"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, PropType } from 'vue'
import { ElTableColumn, ElTable, ElPagination } from 'element-plus'
import { defineEmits } from 'vue'
import { ref } from 'vue'

const currentPage4 = ref(4)
const pageSize4 = ref(100)
const small = ref(false)
const background = ref(false)
const disabled = ref(false)
const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`)
}
const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`)
}

const props = defineProps({
  contentTableConfig: {
    type: Object,
    require: true
  },
  propList: {
    type: Array as PropType<any[]>,
    required: true
  },
  userList: {
    type: Array as PropType<any[]>,
    default: () => []
  },
  showIndexColumn: {
    type: Boolean,
    default: false
  },
  showSelectColumn: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: ''
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
const $emit = defineEmits(['selectionChange'])
function hadleSelectionChange(value: any) {
  console.log(value)
  $emit('selectionChange', value)
}
</script>

<style lang="less" scoped>
.header {
  display: flex;
  height: 45px;
  padding: 0 5px;
  justify-content: space-between;
  align-items: center;

  .title {
    font-size: 20px;
    font-weight: 700;
  }

  .handler {
    align-items: center;
  }
}

.footer {
  margin-top: 15px;
  // box-sizing: border-box;
  overflow: hidden;
  .el-pagination {
    // text-align: center;
    float: right;
  }
}
</style>
