import { AxiosRequestConfig, AxiosResponse } from 'axios'
export interface Shinterceports<T = AxiosResponse> {
  ShinterceportRequest?: (target: AxiosRequestConfig) => AxiosRequestConfig
  ShinterceportRequestCatch?: (err: any) => any
  ShinterceportResponse?: (res: T) => T
  ShinterceportResponseCatch?: (err: any) => any
}
export interface ShAxiosRequestConfig<T = AxiosResponse>
  extends AxiosRequestConfig {
  interceports?: Shinterceports<T>
  showLoading?: boolean
}
