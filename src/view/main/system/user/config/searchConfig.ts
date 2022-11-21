import { IFormItemConfig } from '@/base-ui/form'
const searchFormItemConfig: IFormItemConfig = {
  fromItems: [
    {
      field: 'id',
      label: 'id',
      type: 'input',
      placeholder: '请输入id'
    },
    {
      field: 'name',
      label: '用户名',
      type: 'input',
      placeholder: '请输入用户名'
    },
    {
      field: 'realname',
      label: '真实姓名',
      type: 'input',
      placeholder: '请输入真实姓名'
    },
    {
      field: 'cellphone',
      label: '电话号码',
      type: 'input',
      placeholder: '请输入手机号'
    },
    {
      field: 'enable',
      label: '用户状态',
      type: 'select',
      placeholder: '请输入用户状态',
      options: [
        { label: '启用', value: '1' },
        { label: '禁用', value: '0' }
      ]
    },
    {
      field: 'createAt',
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
