const { defineConfig } = require('@vue/cli-service')
// const AutoImport = require('unplugin-auto-import/webpack')
// const Components = require('unplugin-vue-components/webpack')
// const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')
module.exports = defineConfig({
  transpileDependencies: true,
  // lintOnSave: false,

  devServer: {
    proxy: {
      '/api': {
        // 匹配访问路径中含有 '/api' 的路径
        target: 'http://152.136.185.210:5000', // 测试地址、目标地址
        changeOrigin: true,
        pathRewrite: {
          // 请求路径重写
          '/api': '' //重写请求路径
        }
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        components: '@/components'
      }
    },
    // plugins: [
    //   AutoImport({
    //     resolvers: [ElementPlusResolver()]
    //   }),
    //   Components({
    //     resolvers: [ElementPlusResolver()]
    //   })
    // ]
    plugins: [
      require('unplugin-element-plus/webpack')({
        // options
      })
    ]
  }
})
