import { defineStore } from 'pinia'
import { IRootStore } from './type'
import { reqDepartmentList } from '@/service/root/root'
const useRootStore = defineStore('root', {
  state: (): IRootStore => ({
    entireDepartment: [],
    entireRole: []
  }),
  actions: {
    // 获取全部部门数据
    async getEnterDepartment() {
      const result = await reqDepartmentList('/department/list', {
        offset: 0,
        size: 10
      })
      const { list, totalCount } = result.data
      console.log(list, totalCount)
      this.entireDepartment = list
    },
    // 获取觉得列表
    async getEnterRole() {
      const result = await reqDepartmentList('/role/list', {
        offset: 0,
        size: 10
      })
      const { list, totalCount } = result.data
      console.log(list, totalCount)
      this.entireRole = list
    }
  }
})
export default useRootStore
