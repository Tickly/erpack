import { prefixName } from '../utils'
import { FormModel } from 'ant-design-vue'
import Vue, { VNode } from 'vue'

export default Vue.extend({
  name: prefixName('FormItem'),
  inject: ['erpform'],
  props: {
    prop: String,
    label: String,
  },
  computed: {
    displayLabel(): string {
      return this.label || this.prop
    },
  },
  render(h): VNode {
    return h(
      FormModel.Item,
      {
        class: 'erp-form-item',
        props: {
          prop: this.prop,
          label: this.displayLabel,
          ...this.$attrs,
        },
      },
      this.$slots.default
    )
  },
})
