import Vue from 'vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.min.css'
import App from './App.vue'
import './assets/main.css'

Vue.use(Antd)
new Vue({
  render: (h) => h(App),
}).$mount('#app')
