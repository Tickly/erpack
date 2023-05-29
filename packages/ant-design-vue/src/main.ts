import Vue from 'vue'
import VueRouter from 'vue-router'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.min.css'
import erpack from './lib'
import App from './layout/App.vue'
import './assets/main.css'

Vue.use(VueRouter)
Vue.use(Antd)
Vue.use(erpack)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/form',
      component: () => import('@/docs/Form'),
    },
  ],
})

new Vue({
  render: (h) => h(App),
  router,
}).$mount('#app')
