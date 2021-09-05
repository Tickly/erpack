import 'ant-design-vue/dist/antd.css'

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