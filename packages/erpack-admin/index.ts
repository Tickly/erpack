import Vue from 'vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import Erpack from 'erpack'
import './style/index.less'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.use(Antd)
Vue.use(Erpack)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
