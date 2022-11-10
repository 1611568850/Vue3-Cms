import { defineStore } from 'pinia'
const useLoginStore = defineStore('login', {
  state: () => ({
    name: '我是login数据aa'
  })
})
export default useLoginStore
