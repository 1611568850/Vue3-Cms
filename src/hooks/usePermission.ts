// 用户的权限数组
import useLoginStore from '@/stores/login/login'
const LoginStore = useLoginStore()
export function usePermissions(pageName: any, handlequery: any) {
  const permissions = LoginStore.permissions
  let verifyPermission = `system:${pageName}:${handlequery}`
  if (pageName === 'user') {
    verifyPermission = `system:${pageName}s:${handlequery}`
  }
  // console.log(verifyPermission)
  return !!permissions.find((item) => item === verifyPermission)
}
