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
      :data="DataList"
      @selection-change="hadleSelectionChange"
      v-bind="childrenProps"
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
        <el-table-column v-bind="PropItem" align="center" show-overflow-tooltip>
          <template #default="scope">
            <slot :name="PropItem.slotName" :row="scope.row">
              {{ scope.row[PropItem.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <div class="footer" v-if="showPagination">
      <slot name="footer">
        <el-pagination
          :current-page="page.currentPage"
          :page-size="page.pageSize"
          :page-sizes="[10, 20, 30]"
          :small="small"
          :disabled="disabled"
          :background="background"
          layout="total, sizes, prev, pager, next, jumper"
          :total="DataCount"
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
import { ref, computed } from 'vue'
import useSystemStore from '@/stores/main/system/system'

const props = defineProps({
  contentTableConfig: {
    type: Object,
    require: true
  },
  propList: {
    type: Array as PropType<any[]>,
    required: true
  },
  DataList: {
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
  },
  DataCount: {
    type: Number,
    default: 0
  },
  page: {
    type: Object,
    default: () => ({ currentPage: 0, pageSize: 10 })
  },
  childrenProps: {
    type: Object,
    default: () => ({})
  },
  showPagination: {
    type: Boolean,
    default: true
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
//选项发生变化会触发el-table的事件,会返回改变的元素,自定义分发事件,在需要的地方监听事件,就可以拿到
const $emit = defineEmits(['selectionChange', 'update:page'])
function hadleSelectionChange(value: any) {
  // console.log('被选中', value)
  $emit('selectionChange', value)
}
// 底部pager页数据
const small = ref(false)
const background = ref(false)
const disabled = ref(false)

const handleSizeChange = (pageSize: number) => {
  $emit('update:page', { ...props.page, pageSize })
}
const handleCurrentChange = (currentPage: number) => {
  $emit('update:page', { ...props.page, currentPage })
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
