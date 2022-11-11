import { defineStore } from 'pinia'
import router from '@/router'
import {
  reqPhoneLoginRequest,
  reqUserInfoRequest,
  reqUserMenuListRequest
} from '@/service/login/login'
import { IAccount } from '@/service/login/type'
import { RootObject } from '@/service/login/type'
import LocalCache from '@/utils/cache'
const useLoginStore = defineStore('login', {
  state: () => ({
    token: '',
    userInfo: {} as RootObject,
    userMenuList: {}
  }),
  actions: {
    //实现登录的逻辑
    async accountLoginAction(accountInfo: IAccount) {
      // console.log('传入信息', accountInfo)
      const result = await reqPhoneLoginRequest(accountInfo)
      // 1 保存token信息
      if (result.code === 0) {
        const { id, token } = result.data
        this.token = token
        LocalCache.setCache('token', this.token)
        // 2 请求并缓存用户信息
        const userInfoResponse = await reqUserInfoRequest(id)
        this.userInfo = userInfoResponse.data
        LocalCache.setCache('userInfo', this.userInfo)
        // 3 根据用户的id获取对应的菜单列表
        const userMenuListResponse = await reqUserMenuListRequest(id)
        this.userMenuList = userMenuListResponse.data
        LocalCache.setCache('userMenuList', this.userMenuList)
        // 3.跳转到主页面

        router.push('/main')
      }
    }
  }
})

export default useLoginStore
