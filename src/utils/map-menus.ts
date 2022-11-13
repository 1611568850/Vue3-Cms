// 拿到所有动态生成的路由
import { RouteRecordRaw } from 'vue-router'
export function mapMenusToRoutes(menuList: any): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = []
  const AllRoutes: RouteRecordRaw[] = []
  const routeFiles = require.context('../view/main', true, /\.ts$/)
  routeFiles.keys().forEach((key) => {
    const route = require('../view/main' + key.split('.')[1])
    AllRoutes.push(route.default)
    console.log(AllRoutes)
  })
  console.log('拿到的数据', AllRoutes)

  // 根据菜单拿到对应的路由地址
  const recurseGetRoute = (menus: any) => {
    for (const menu of menus) {
      // console.log('这里暂停')
      if (menu.type === 2) {
        const route = AllRoutes.find((item) => item.path === menu.url)
        if (route) routes.push(route)
      } else {
        recurseGetRoute(menu.children)
      }
    }
  }
  recurseGetRoute(menuList)
  return routes
}
