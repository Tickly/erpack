const { defineConfig } = require('@vue/cli-service')
const path = require('path')

module.exports = defineConfig({
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './packages/erpack-admin'),
        erpack: path.resolve(__dirname, './packages/erpack'),
      },
    },
    externals: {
      // 'ant-design-vue': 'commonjs2 ant-design-vue',
      // moment: 'commonjs2 moment',
    },
  },
  chainWebpack: (config) => {
    config.entry('app').clear().add('./packages/erpack-admin/index.ts')
  },
})
