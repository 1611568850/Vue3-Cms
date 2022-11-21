// 拿到所有动态生成的路由
import { IbreadCrumbItem } from '@/base-ui/breadcrumb'
import menu from '@/view/main/system/menu/menu'
import { RouteRecordRaw } from 'vue-router'
let firstMenue: any = null
export function mapMenusToRoutes(menuList: any): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = []
  const AllRoutes: RouteRecordRaw[] = []
  const routeFiles = require.context('../view/main', true, /\.ts$/)
  routeFiles.keys().forEach((key) => {
    const route = require('../view/main' + key.split('.')[1])
    AllRoutes.push(route.default)
    // console.log(AllRoutes)
  })
  // console.log('拿到的数据', AllRoutes)

  // 根据菜单拿到对应的路由地址
  const recurseGetRoute = (menus: any) => {
    for (const menu of menus) {
      // console.log('这里暂停')
      if (menu.type === 2) {
        const route = AllRoutes.find((item) => item.path === menu.url)
        if (route) routes.push(route)
        if (!firstMenue) {
          firstMenue = route
        }
        // console.log(firstMenue)
      } else {
        recurseGetRoute(menu.children)
      }
    }
  }
  recurseGetRoute(menuList)
  return routes
}
export { firstMenue }

// 面包屑逻辑
export function pathMapToMenu(menuList: any, currentPath: string): any {
  const breadcrubs: IbreadCrumbItem[] = []
  for (const menu of menuList) {
    if (menu.type === 1) {
      const findMenu = pathMapToMenu(menu.children ?? [], currentPath)
      if (findMenu.type === 2) {
        breadcrubs.push({ name: menu.name, path: menu.url })
        breadcrubs.push({ name: findMenu.name, path: findMenu.url })
      }
    } else if (menu.type === 2 && menu.url === currentPath) {
      return menu
    }
  }
  return breadcrubs
}
// 拿到权限数组
export function mapMenusToPermission(useMenuList: any) {
  const permissions: string[] = []
  const _recurseGetPermission = (menus: any) => {
    for (const menu of menus) {
      if (menu.type === 1 || menu.type === 2) {
        _recurseGetPermission(menu.children ?? [])
      } else if (menu.type === 3) {
        permissions.push(menu.permission)
      }
    }
  }
  _recurseGetPermission(useMenuList)
  return permissions
}
