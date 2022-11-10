import type { ShAxiosRequestConfig, Shinterceports } from './type'
import type { AxiosInstance } from 'axios'
import axios from 'axios'
import { ElLoading } from 'element-plus'
class ShAxios {
  instance: AxiosInstance
  interceports?: Shinterceports
  loading: any
  showLoading: boolean
  constructor(config: ShAxiosRequestConfig) {
    this.instance = axios.create(config)
    this.interceports = config.interceports
    console.log('config.showLoading', config.showLoading)
    this.showLoading = config.showLoading ?? true

    this.instance.interceptors.request.use(
      this.interceports?.ShinterceportRequest,
      this.interceports?.ShinterceportRequestCatch
    )
    this.instance.interceptors.response.use(
      this.interceports?.ShinterceportResponse,
      this.interceports?.ShinterceportResponseCatch
    )
    // 全局拦截器(后面的拦截器先执行)
    this.instance.interceptors.request.use(
      (config) => {
        if (this.showLoading) {
          console.log('this.showLoading', this.showLoading)
          this.loading = ElLoading.service({
            lock: true,
            text: '正在请求数据',
            background: 'rgba(0,0,0,0.5)',
            fullscreen: true
          })
        }
        return config
      },
      (err) => {
        return err
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        console.log('我是全局响应拦截器')
        if (this.loading) {
          this.loading.close()
        }
        return res
      },
      (err) => {
        if (this.loading) {
          this.loading.close()
        }
        return err
      }
    )
  }
  request<T>(config: ShAxiosRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      if (config.interceports?.ShinterceportRequest) {
        config = config.interceports.ShinterceportRequest(config)
      }
      if (config.showLoading === false) {
        this.showLoading = false
      }
      console.log('this.showLoading', this.showLoading)

      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceports?.ShinterceportResponse) {
            res = config.interceports.ShinterceportResponse(res)
          }
          this.showLoading = true
          // console.log('res.data', res.data)
          resolve(res)
        })
        .catch((err) => {
          this.showLoading = true
          reject(err)
          console.log('err', err)
        })
    })
  }
  get<T>(config: ShAxiosRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }
  post<T>(config: ShAxiosRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' })
  }
  delete<T>(config: ShAxiosRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' })
  }
  patch<T>(config: ShAxiosRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'PATCH' })
  }
}
export default ShAxios
