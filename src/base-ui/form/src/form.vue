<template>
  <div class="container">
    <el-form :label-width="labelWidth" :style="itemStyle">
      <el-row>
        <template v-for="item in fromItems" :key="item.label">
          <el-col v-bind="colLayout">
            <el-form-item :label="item.label">
              <template
                v-if="item.type === 'input' || item.type === 'password'"
              >
                <el-input
                  :placeholder="item.placeholder"
                  :show-password="item.type === 'password'"
              /></template>
              <template v-else-if="item.type === 'datepicker'">
                <el-date-picker
                  v-bind="item.otherOption"
                  style="width: 100%"
                ></el-date-picker>
              </template>
              <template v-else-if="item.type === 'select'">
                <el-select :placeholder="item.placeholder" style="width: 100%">
                  <el-option
                    v-for="option in item.options"
                    :key="option.label"
                    :label="option.label"
                    :value="option.value"
                  ></el-option>
                </el-select>
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, PropType } from 'vue'
import { IFromItem } from '../type'
import {
  ElForm,
  ElFormItem,
  ElInput,
  ElSelect,
  ElOption,
  ElDatePicker,
  ElRow,
  ElCol
} from 'element-plus'
const props = defineProps({
  fromItems: {
    type: Array as PropType<IFromItem[]>,
    default: () => []
  },
  labelWidth: {
    type: String,
    default: '100px'
  },
  itemStyle: {
    type: Object,
    default: () => ({ padding: '10px 40px' })
  },
  colLayout: {
    type: Object,
    default: () => ({
      xl: 6,
      lg: 8,
      md: 12,
      sm: 24
    })
  }
})
</script>

<style lang="less">
.el-form {
  padding-top: 20px;
  transition: padding 1s;
}
@media (max-width: 665px) {
  .el-form {
    padding: 0 !important;
  }
}
</style>
