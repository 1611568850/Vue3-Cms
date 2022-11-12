import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import LocalCache from '@/utils/cache'
import useLoginStore from '@/stores/login/login'
import { mapMenusToRoutes } from '@/utils/map-menus'
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/view/login/login.vue')
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('@/view/main/main.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/view/main/not-found/not-found.vue')
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})
router.beforeEach((to) => {
  if (to.path === '/main') {
    const token = LocalCache.getCache('token')
    if (!token) {
      return '/login'
    }
  }
  // else {
  //   const loginStore = useLoginStore()
  //   console.log('执行了')
  //   loginStore.loadLocalLogin()
  // }
  // console.log(router.getRoutes())
  // console.log(to) // route对象

  // const routes = mapMenusToRoutes(loginStore.userMenuList)
  // routes.forEach((route) => {
  //   router.addRoute('main', route)
  //   console.log(router)
  // })
})
export default router
