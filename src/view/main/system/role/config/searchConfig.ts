import { IFormItemConfig } from '@/base-ui/form'
const searchFormItemConfig: IFormItemConfig = {
  fromItems: [
    {
      field: 'name',
      type: 'input',
      label: '角色名称',
      placeholder: '请输入角色名称'
    },
    {
      field: 'intro',
      type: 'input',
      label: '权限介绍',
      placeholder: '请输入权限介绍'
    },
    {
      field: 'createTime',
      label: '创建时间',
      type: 'datepicker',
      otherOption: {
        startPlaceholder: '开始时间',
        endPlaceholder: '结束时间',
        type: 'daterange'
      }
    }
  ],
  colLayout: {
    xl: 6,
    lg: 8,
    md: 12,
    sm: 24
  },
  itemStyle: {
    padding: '10px 100px'
    // margin: '100px'
  },
  labelWidth: '100px'
}
export default searchFormItemConfig
