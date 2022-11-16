<template>
  <div class="form">
    <div class="headerContainer">
      <slot name="header"></slot>
    </div>

    <el-form :label-width="labelWidth" :style="itemStyle">
      <el-row>
        <template v-for="item in fromItems" :key="item.label">
          <el-col v-bind="colLayout">
            <el-form-item :label="item.label">
              <template
                v-if="item.type === 'input' || item.type === 'password'"
              >
                <el-input
                  v-model="formData[`${item.field}`]"
                  :placeholder="item.placeholder"
                  :show-password="item.type === 'password'"
              /></template>
              <template v-else-if="item.type === 'datepicker'">
                <el-date-picker
                  v-model="formData[`${item.field}`]"
                  v-bind="item.otherOption"
                  style="width: 100%"
                ></el-date-picker>
              </template>
              <template v-else-if="item.type === 'select'">
                <el-select :placeholder="item.placeholder" style="width: 100%">
                  <el-option
                    v-for="option in item.options"
                    v-model="formData[`${item.field}`]"
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

    <div class="footer"><slot name="footer"></slot></div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, PropType, computed } from 'vue'
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
import { ref, watch, defineEmits } from 'vue'
const props = defineProps({
  modelValue: {
    type: Object,
    required: true
  },
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
let formData = ref({ ...props.modelValue })
// watch(
//   () => props.modelValue,
//   (value) => {
//     console.log('bianbhua', value)
//     console.log(props.modelValue)
//     formData.value = value
//   },
//   { deep: true }
// )
// watch(props.modelValue)
const $emit = defineEmits(['update:modelValue'])
watch(formData, (newValue) => $emit('update:modelValue', newValue), {
  deep: true
})
</script>

<style lang="less" scoped>
.header {
  text-align: center;
  display: inline-block;
  color: #c43d33;
}
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
