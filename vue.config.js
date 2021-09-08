module.exports = {
  configureWebpack: {
    externals: {
      'ant-design-vue': 'commonjs2 ant-design-vue',
      'moment': 'commonjs2 moment',
    },
  },
}
