import { defineStore } from 'pinia'
import { reqPageListData } from '@/service/system/system'

interface ISystemState {
  userList: any[]
  userCount: number
  roleList: any[]
  roleCout: number
}
const useSystemStore = defineStore('system', {
  state: (): ISystemState => ({
    userList: [],
    userCount: 0,
    roleList: [],
    roleCout: 0
  }),
  actions: {
    async getPageListData(payload: any) {
      // console.log('发送请求了', payload)
      const pageName = payload.pageName
      let pageUrl = ''
      switch (pageName) {
        case 'user':
          pageUrl = '/users/list'
          break
        case 'role':
          pageUrl = '/role/list'
          break
      }
      const result = await reqPageListData(pageUrl, payload.queryInfo)
      console.log(payload.queryInfo)
      const { list, totalCount } = result.data
      // console.log(list)
      switch (pageUrl) {
        case '/users/list':
          this.userList = list
          this.userCount = totalCount
          break
        case '/role/list':
          this.roleList = list
          this.roleCout = totalCount
          break
      }
      // console.log('数据更行')
    }
  }
})
export default useSystemStore
