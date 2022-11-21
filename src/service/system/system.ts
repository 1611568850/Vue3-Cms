import shrequest from '..'
import { IDataType } from '../type'
export function reqPageListData(url: string, querInfo: any) {
  return shrequest.post<IDataType>({
    url: url,
    data: querInfo
  })
}
export function reqDeleteInfo(url: string, userInfo: any) {
  return shrequest.delete<IDataType>({
    url: url,
    data: userInfo
  })
}
