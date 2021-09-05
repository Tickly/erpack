import Vue from 'vue'
import { Button } from 'ant-design-vue'

export default Vue.extend({
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
})