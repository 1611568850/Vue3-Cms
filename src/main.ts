import { createApp } from 'vue'
import 'normalize.css'
import './assets/css/index.less'
import App from './App.vue'
import router from './router'
import pinia from './stores'
// import shrequest from './service'

// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
createApp(App).use(pinia).use(router).mount('#app')
// interface DataType {
//   data: any
// }
// shrequest
//   .request<DataType>({
//     url: '/api/city/all',
//     method: 'get',
//     interceports: {
//       ShinterceportRequest: (config) => {
//         console.log('我是request拦截器')
//         return config
//       }
//     },
//     showLoading: false
//   })
//   .then((res) => {
//     console.log('res.data', res.data)
//     console.log('res.data', res)
//   })
