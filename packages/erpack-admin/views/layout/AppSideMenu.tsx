import Vue, { CreateElement, VNode } from "vue";
import { Icon, Menu } from "ant-design-vue";
import { RouteConfig } from 'vue-router';

function getFullPath (path: string, parentMenu?: MenuItem): string {
  if (path.startsWith('/')) return path
  const prefix = parentMenu ? parentMenu.path : ''
  return prefix + '/' + path
}

class MenuItem {
  public key: string
  public title: string
  public icon: string
  public path: string
  public children: MenuItem[] = []


  constructor(route: RouteConfig, parentMenu?: MenuItem) {
    this.key = this.path = getFullPath(route.path, parentMenu)

    const { title, icon } = route.meta || {}

    this.title = title
    this.icon = icon

    if (route.children?.length) {
      this.children = route.children.map(r => new MenuItem(r, this))
    }
  }
}


export default Vue.extend({
  data () {
    return {
      menus: [] as MenuItem[],
    };
  },
  mounted () {
    this.menus = this.parseLocalMenu();
  },
  methods: {
    /**
     * 本地路由构建菜单
     */
    parseLocalMenu (): MenuItem[] {
      const root = this.$router.options.routes?.find((r) => r.path === "/");
      const ms = root?.children as [];

      return ms.map(m => new MenuItem(m));
    },
    renderMenu (item: MenuItem): VNode {
      if (item.children && item.children.length > 0) {
        return <Menu.SubMenu key={item.key} >
          <span slot="title">
            {item.icon ? <a-icon type={item.icon} /> : null}
            <span>{item.title}</span>
          </span>
          {item.children.map(this.renderMenu)}
        </Menu.SubMenu>
      } else {
        return <Menu.Item key={item.key}>
          <router-link to={item.key}>
            {item.icon ? <Icon type={item.icon} /> : null}
            <span>{item.title}</span>
          </router-link>
        </Menu.Item >
      }
    },
  },
  render (h): VNode {
    return h(Menu, { props: { mode: 'inline' } }, this.menus.map(this.renderMenu))
  }
})