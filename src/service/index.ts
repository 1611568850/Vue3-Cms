import { TIME_OUT, BASE_URL } from './request/config'
import ShAxios from './request'
const shrequest = new ShAxios({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceports: {
    ShinterceportRequest: (target) => {
      console.log('这里是请求拦截器,拦截成功')
      return target
    },
    ShinterceportResponse: (res) => {
      console.log('这里是响应拦截器')
      return res
    }
  }
  // showLoading: true
})
export default shrequest
