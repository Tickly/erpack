import Vue, { CreateElement, VNode } from 'vue'
import { Icon, Menu } from 'ant-design-vue'
import { RouteConfig } from 'vue-router'

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
  public title: string
  public icon: string
  public path: string
  public children: MenuItem[] = []
  public parent?: MenuItem

  constructor(route: RouteConfig, parentMenu?: MenuItem) {
    this.parent = parentMenu

    let defaultIcon = 'file'

    this.key = this.path = getFullPath(route.path, parentMenu)

    const { title, icon, hide } = route.meta || {}

    this.title = title

    if (route.children?.length) {
      this.children = route.children.map((r) => new MenuItem(r, this))
      defaultIcon = 'folder'
    }

    this.icon = icon || defaultIcon
  }
}

export default Vue.extend({
  data() {
    return {
      menus: [] as MenuItem[],
      keys: [] as string[],

      // 所有的菜单节点，以菜单路径为Key
      menusMap: {} as Record<string, MenuItem>,
      openKeys: [] as string[],
    }
  },
  mounted() {
    this.menus = this.parseLocalMenu()
    this.menusMap = tree2hash(this.menus)

    const currentMenu = this.getCurrentMenu()
    this.keys = [currentMenu.path]
    this.openKeys = this.getParentKeys(currentMenu)
  },
  methods: {
    getCurrentMenu() {
      return this.menusMap[this.$route.path]
    },
    getParentKeys(node: MenuItem) {
      const keys = []
      while (node.parent) {
        node = node.parent
        keys.unshift(node.path)
      }
      return keys
    },
    /**
     * 本地路由构建菜单
     */
    parseLocalMenu(): MenuItem[] {
      const root = this.$router.options.routes?.find((r) => r.path === '/')
      const ms = root?.children as []

      return ms.map((m) => new MenuItem(m))
    },
    renderMenu(item: MenuItem): VNode {
      // 父菜单
      if (item.children && item.children.length > 0) {
        return (
          <Menu.SubMenu key={item.key}>
            <span slot="title">
              {item.icon ? <a-icon type={item.icon} /> : null}
              <span>{item.title}</span>
            </span>
            {item.children.map(this.renderMenu)}
          </Menu.SubMenu>
        )
      } else {
        // 子菜单
        return (
          <Menu.Item key={item.key} title={item.title}>
            <router-link to={item.key}>
              {item.icon ? <Icon type={item.icon} /> : null}
              <span>{item.title}</span>
            </router-link>
          </Menu.Item>
        )
      }
    },
    onOpen(openKeys: string[]) {
      // console.log(openKeys)
      this.openKeys = openKeys
    },
  },
  render(): VNode {
    return (
      <a-menu
        v-model={this.keys}
        mode="inline"
        openKeys={this.openKeys}
        inlineCollapsed={this.$store.state.app.sidebarCollapsed}
        on-openChange={this.onOpen}
      >
        {this.menus.map(this.renderMenu)}
      </a-menu>
    )
  },
})
