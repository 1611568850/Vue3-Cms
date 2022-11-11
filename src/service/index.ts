import { TIME_OUT, BASE_URL } from './request/config'
import ShAxios from './request'
import localCache from '@/utils/cache'
const shrequest = new ShAxios({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceports: {
    ShinterceportRequest: (config) => {
      // console.log('这里是请求拦截器,拦截成功')
      const token = localCache.getCache('token')
      if (token) {
        if (config.headers) {
          config.headers.Authorization = `Bearer ${token}`
        }
      }
      return config
    },
    ShinterceportResponse: (res) => {
      // console.log('这里是响应拦截器')
      return res
    }
  },
  showLoading: true
})
export default shrequest
