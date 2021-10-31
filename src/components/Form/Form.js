import { prefixName } from '../utils'
import { Form } from 'ant-design-vue'

export default {
  name: prefixName('Form'),
  render(h) {
    return h(Form, {
      class: 'erp-form',
      props: this.$attrs,
    }, this.$slots.default)
  }
}