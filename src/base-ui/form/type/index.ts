type IFromItemType = 'input' | 'password' | 'select' | 'datepicker'

export interface IFromItem {
  label: string
  type: IFromItemType
  rules?: any[]
  placeholder?: any
  options?: any[]
  otherOption?: any
}
export interface IFormItemConfig {
  fromItems: IFromItem[]
  labelWidth?: string
  itemStyle?: any
  colLayout?: any
}
