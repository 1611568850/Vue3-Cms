export interface IAccount {
  name: string
  password: string
}
// 用户登录返回token的类型
export interface IloginDataResult {
  id: number
  name: string
  token: string
}
// 用户登录返回信息的类型
export interface Role {
  id: number
  name: string
  intro: string
  createAt: Date
  updateAt: Date
}

export interface Department {
  id: number
  name: string
  parentId?: any
  createAt: Date
  updateAt: Date
  leader: string
}

export interface RootObject {
  id: number
  name: string
  realname: string
  cellphone: number
  enable: number
  createAt: Date
  updateAt: Date
  role: Role
  department: Department
}
