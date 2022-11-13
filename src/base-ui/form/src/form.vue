<template>
  <div class="container">
    <div class="header"><slot name="header"></slot></div>

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
const $emit = defineEmits(['update:modelValue'])
const formData = ref({ ...props.modelValue })
watch(formData, (newValue) => $emit('update:modelValue', newValue), {
  deep: true
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
