import shrequest from '..'
import { IDataType } from '../type'
export function reqDepartmentList(url: string, queryInfo: any) {
  return shrequest.post<IDataType>({
    url: url,
    data: queryInfo
  })
}
