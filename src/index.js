/**
 * todo 将ant-design-vue作为项目依赖，打包时候过滤掉。
 */

import Button from './components/Button'

export {
  Button,
}

export const install = Vue => {
  Vue.component(Button.name, Button)
}

export default {
  install
}