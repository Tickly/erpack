/**
 * todo 将ant-design-vue作为项目依赖，打包时候过滤掉。
 */

import components from './components'

export const install = Vue => {
  components.forEach(component => Vue.component(component.name, component))
}

export default {
  install
}