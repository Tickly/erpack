import { Button } from 'ant-design-vue'

export default {
  name: 'ErpButton',
  props: {
    type: String
  },
  render(h) {
    return h(Button, {
      props: {
        type: this.type
      }
    }, this.$slots.default)
  }
}