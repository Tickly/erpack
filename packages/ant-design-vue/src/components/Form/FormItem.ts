import { FormModel } from 'ant-design-vue'
import Vue from 'vue'
export default Vue.extend({
  name: 'ErpFormItem',
  props: {
    label: String,
  },
  methods: {},
  render(h) {
    return h(
      FormModel.Item,
      {
        props: {
          ...this.$props,
        },
      },
      this.$slots.default
    )
  },
})
