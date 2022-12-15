import { RouteConfig, RouterView } from 'vue-router'
import MenuView from '@/layouts/MenuView.vue'

interface MenuRouteConfig {
  path: string
  title?: string
  icon?: string
  /**
   * 为true隐藏菜单
   */
  hide?: boolean
  children?: Array<MenuRouteConfig>
  component?: any
}

export default class RouterMenu {
  public config
  constructor(config: MenuRouteConfig) {
    this.config = config
  }
}

function parseRoute(config: MenuRouteConfig): RouteConfig {
  const route: RouteConfig = {
    path: config.path,
    component: config.component,
    children: config.children?.map(parseRoute),
    meta: {},
  }

  // 如果有子路由，并且当前没有设定组件，那么就把当成纯嵌套路由用，自动引入
  if (!route.component && route.children) {
    route.component = MenuView
  }

  if (route.meta) {
    const { title, icon, hide } = config
    Object.assign(route.meta, {
      title,
      icon,
      hide,
    })
  }

  return route
}

export function createRoutes(config: Array<MenuRouteConfig>) {
  return config.map(parseRoute)
}
