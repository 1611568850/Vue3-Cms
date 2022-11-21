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
import { Ilogin } from './type'
import { mapMenusToRoutes, mapMenusToPermission } from '@/utils/map-menus'

const useLoginStore = defineStore('login', {
  state: (): Ilogin => ({
    token: LocalCache.getCache('token') || '',
    userInfo: LocalCache.getCache('userInfo') || ({} as RootObject),
    userMenuList: LocalCache.getCache('userMenuList'),
    permissions: []
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
        await this.accoutUserInfo(id)
        // 3 根据用户的id获取对应的菜单列表
        await this.accountMenuList(id)
        // 4.传入用户对应列表动态获取路由
        // console.log('进入函数之前')
        await this.changeUserMenus(this.userMenuList)
        // 3.跳转到主页面
        router.push('/main')
      }
    },
    // 2 请求并缓存用户信息

    async accoutUserInfo(id: number) {
      const userInfoResponse = await reqUserInfoRequest(id)
      this.userInfo = userInfoResponse.data
      LocalCache.setCache('userInfo', this.userInfo)
    },
    // 3 根据用户的请求获取菜单
    async accountMenuList(id: number) {
      const userMenuListResponse = await reqUserMenuListRequest(id)
      this.userMenuList = userMenuListResponse.data
      // console.log(userMenuListResponse.data)
      LocalCache.setCache('userMenuList', this.userMenuList)
    },
    // 4 传入用户对应列表,动态路由
    async changeUserMenus(menuList: any) {
      // console.log('用户列表', menuList)
      const routes = mapMenusToRoutes(menuList)
      // 根据用户请求的菜单列表,获取对应的权限
      const permissions = mapMenusToPermission(menuList)
      this.permissions = permissions
      // console.log(this.permissions)
      console.log('权限', permissions)
      if (routes.length !== 0) {
        // console.log(routes)
        routes.forEach((route) => {
          router.addRoute('main', route)
          // console.log(router)
        })
      }
    },
    // 5. 解决动态路由刷新问题
    async loadLocalLogin() {
      // console.log('loadLocalLogin执行了')
      // const token = LocalCache.getCache('token')
      // if (token) {
      //   this.token = token
      // }
      // const userInfo = LocalCache.getCache('userInfo')
      // if (userInfo) {
      //   this.userInfo = userInfo
      // }
      const userMenus = LocalCache.getCache('userMenuList')
      if (userMenus) {
        this.userMenuList = userMenus
        this.changeUserMenus(userMenus)
      }
    }
  }
})

export default useLoginStore
