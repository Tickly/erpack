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

    // 处理本地svg
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule
      .use('babel-loader')
      .loader('babel-loader')
      .end()
      .use('vue-svg-loader')
      .loader('vue-svg-loader')

    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach((type) =>
      addStyleResource(config.module.rule('less').oneOf(type))
    )
  },
})

function addStyleResource(rule) {
  rule
    .use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './packages/erpack-admin/style/var.less'),
      ],
    })
}
