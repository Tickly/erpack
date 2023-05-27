import Vue from 'vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.min.css'
import erpack from './lib'
import App from './App.vue'
import './assets/main.css'

Vue.use(Antd)
Vue.use(erpack)

new Vue({
  render: (h) => h(App),
}).$mount('#app')
