import { IFormItemConfig } from '@/base-ui/form'
const searchFormItemConfig: IFormItemConfig = {
  fromItems: [
    {
      field: 'name',
      label: '用户名',
      type: 'input',
      placeholder: '请输入用户名'
    },
    {
      field: 'password',
      label: '密码',
      type: 'password',
      placeholder: '请输入,密码'
    },
    {
      field: 'value',
      label: '爱好',
      type: 'select',
      placeholder: '请输入爱好',
      options: [
        {
          label: '篮球',
          value: 'basketball'
        },
        {
          label: '足球',
          value: 'football'
        }
      ]
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
