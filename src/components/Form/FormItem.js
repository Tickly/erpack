import { prefixName } from '../utils'
import { Form } from 'ant-design-vue'

export default {
  name: prefixName('FormItem'),
  render(h) {
    return h(
      Form.Item,
      {
        class: 'erp-form-item',
        props: this.$attrs,
      },
      this.$slots.default
    )
  }
}