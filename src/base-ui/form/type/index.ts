type IFromItemType = 'input' | 'password' | 'select' | 'datepicker'

export interface IFromItem {
  field: string
  label: string
  type: IFromItemType
  rules?: any[]
  placeholder?: any
  options?: any[]
  otherOption?: any
  isHidden?: boolean
}
export interface IFormItemConfig {
  fromItems: IFromItem[]
  labelWidth?: string
  itemStyle?: any
  colLayout?: any
}
