import { useAppStore } from '@/store/modules/app'
import { Menu } from 'ant-design-vue'
import { ref } from 'vue'
import { h, defineComponent, onMounted } from 'vue'
import type { RouteRecordRaw } from 'vue-router'
import { useRoute } from 'vue-router'
import { useRouter } from 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    title?: string
    icon?: string
    hide?: boolean
  }
}

function getFullPath(path: string, parentMenu?: MenuItem): string {
  if (path.startsWith('/')) return path
  const prefix = parentMenu ? parentMenu.path : ''
  return prefix + '/' + path
}

function tree2hash(tree: Array<MenuItem>): Record<string, MenuItem> {
  const hash = {} as Record<string, MenuItem>

  const each = (list: Array<MenuItem>) => {
    for (const node of list) {
      hash[node.key] = node
      if (node.children) {
        each(node.children)
      }
    }
  }

  each(tree)

  return hash
}

class MenuItem {
  public key: string
  public title: string = ''
  public icon: string = ''
  public path: string
  public children: MenuItem[] = []
  public parent?: MenuItem

  constructor(route: RouteRecordRaw, parentMenu?: MenuItem) {
    this.parent = parentMenu

    let defaultIcon = 'file'

    this.key = this.path = getFullPath(route.path, parentMenu)

    if (route.meta) {
      const { title, icon, hide } = route.meta || {}

      this.title = title || ''
      this.icon = icon || defaultIcon
    }

    if (route.children?.length) {
      this.children = route.children.map((r) => new MenuItem(r, this))
      defaultIcon = 'folder'
    }
  }
}

function parseLocalMenu(): MenuItem[] {
  const router = useRouter()
  const root = router.options.routes?.find((r) => r.path === '/')
  const ms = root?.children as []

  return ms.map((m) => new MenuItem(m))
}

export default defineComponent(() => {
  const appStore = useAppStore()
  const route = useRoute()

  const menus = ref<MenuItem[]>([])
  // 所有的菜单节点，以菜单路径为Key
  const menusMap = ref<Record<string, MenuItem>>({})
  const openKeys = ref<string[]>([])
  const keys = ref<string[]>([])

  function renderMenu(item: MenuItem) {
    // 父菜单
    if (item.children && item.children.length > 0) {
      const slots = {
        title: () => (
          <div>
            {/* {item.icon ? <a-icon type={item.icon} /> : null} */}
            <span title={item.title}>{item.title}</span>
          </div>
        )
      }

      return (
        <Menu.SubMenu key={item.key} v-slots={slots}>
          {item.children.map(renderMenu)}
        </Menu.SubMenu>
      )
    } else {
      // 子菜单
      return (
        <Menu.Item key={item.key} title={item.title}>
          <router-link to={item.key}>
            {/* {item.icon ? <Icon type={item.icon} /> : null} */}
            <span class="ant-table-row-cell-ellipsis" title={item.title}>
              {item.title}
            </span>
          </router-link>
        </Menu.Item>
      )
    }
  }

  function onOpen(keys: Array<string | number>) {
    openKeys.value = keys as string[]
  }

  /**
   * 获取当前路由匹配的菜单节点
   * @returns
   */
  function getCurrentMenu() {
    return menusMap.value[route.path]
  }
  function getParentKeys(node: MenuItem) {
    const keys = []
    while (node.parent) {
      node = node.parent
      keys.unshift(node.path)
    }
    return keys
  }

  onMounted(() => {
    menus.value = parseLocalMenu()
    menusMap.value = tree2hash(menus.value)

    const currentMenu = getCurrentMenu()
    if (currentMenu) {
      keys.value = [currentMenu.path]
      openKeys.value = getParentKeys(currentMenu)
    }
  })

  return () => (
    <Menu
      v-model:value={keys.value}
      mode="inline"
      inlineCollapsed={appStore.sidebarCollapsed}
      openKeys={openKeys.value}
      onOpenChange={onOpen}
    >
      {menus.value.map(renderMenu)}
    </Menu>
  )
})

// export default Vue.extend({
//   data() {
//     return {
//     }
//   },
//   mounted() {

//
//   },
//   methods: {
//
//
//     /**
//      * 本地路由构建菜单
//      */
//
//     renderMenu(item: MenuItem): VNode {
//
//     },
//
//   },
//   render(): VNode {
//     return (
//       <a-menu
//         v-model={this.keys}
//         mode="inline"
//         theme={this.$app.isDark ? 'dark' : 'light'}
//         openKeys={this.openKeys}
//         on-openChange={this.onOpen}
//       >
//         {this.menus.map(this.renderMenu)}
//       </a-menu>
//     )
//   }
// })
