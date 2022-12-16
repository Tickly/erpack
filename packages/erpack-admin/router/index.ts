import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layouts/Layout.vue'

import { createRoutes } from '@/components/Menu/RouterMenu'

const routes = createRoutes([
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '',
        title: 'Dashboard',
        icon: 'appstore',
        component: () => import('@/views/dashboard/index.vue'),
      },
      {
        path: 'user',
        title: '用户管理',
        icon: 'user',
        children: [
          {
            path: 'list',
            title: '用户列表',
            icon: 'user',
            children: [
              {
                path: 'create',
                title: '新增',
                hide: true,
                icon: 'user-add',
                component: () => import('@/views/user/create'),
              },
            ],
          },
          {
            path: 'birthday',
            title: '本月寿星',
          },
        ],
      },
      {
        path: 'bug',
        title: 'Bug管理-父级菜单名字很长怎么办呢',
        children: [
          {
            path: 'my-bugs',
            title: '我的Bug',
            component: () => import('@/views/bugs/MyBugs'),
          },
        ],
      },
      {
        path: 'components',
        title: '组件',
      },
      {
        path: 'system',
        title: '系统设置，顺便测试一下非常长的文字怎么办',
      },
    ],
  },
])
console.log(routes)

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
