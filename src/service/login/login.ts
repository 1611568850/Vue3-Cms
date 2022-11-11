import shrequest from '..'
import { IAccount, IloginDataResult } from './type'
import { IDataType } from '../type'
import { RootObject } from './type'
enum LoginAPI {
  AccountLogin = '/login',
  UserLIst = '/users/',
  UserMenus = '/role/'
}

// 收集登录的请求
export function reqPhoneLoginRequest(account: IAccount) {
  return shrequest.post<IDataType<IloginDataResult>>({
    url: LoginAPI.AccountLogin,
    data: account
  })
}

// 登录后获取用户信息的请求
export function reqUserInfoRequest(id: number) {
  return shrequest.get<IDataType<RootObject>>({
    url: LoginAPI.UserLIst + id
  })
}

// 登录后获取用户权限对应的菜单列表
export function reqUserMenuListRequest(id: number) {
  return shrequest.get<IDataType>({
    url: LoginAPI.UserMenus + id + '/menu'
  })
}
