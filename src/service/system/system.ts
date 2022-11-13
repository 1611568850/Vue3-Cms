import shrequest from '..'
import { IDataType } from '../type'
export function reqPageListData(url: string, querInfo: any) {
  return shrequest.post<IDataType>({
    url: url,
    data: querInfo
  })
}
