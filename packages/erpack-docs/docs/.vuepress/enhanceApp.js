// import erpack from './erpack'
// import pageComponents from '@internal/page-components'
import erpack from '@erpack/ant-design-vue'

export default ({ Vue }) => {
  // Object.entries(pageComponents).forEach(([name, component]) =>  Vue.component(name, component))
  // erpack.install(Vue)

  Vue.use(erpack)
}
