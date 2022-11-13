import { defineStore } from 'pinia'
import { reqPageListData } from '@/service/system/system'
const useSystemStore = defineStore('system', {
  state: () => ({
    userList: [],
    userCount: 0
  }),
  actions: {
    async getPageListData(url: string, querInfo: any) {
      const result = await reqPageListData(url, querInfo)
      const { list, totalCount } = result.data
      this.userList = list
      this.userCount = totalCount
      console.log('数据更行')
    }
  }
})
export default useSystemStore
