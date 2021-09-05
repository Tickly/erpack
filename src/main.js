import Vue from 'vue'

import 'ant-design-vue/dist/antd.css'

import App from './App.js'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
