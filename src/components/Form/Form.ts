/**
 * Form
 * todo label-width参数，默认提供1-10个em长度的样式类
 */
import Vue, { CreateElement, PropType, VNode } from 'vue'
import { FormModel } from 'ant-design-vue'
import { prefixName } from '../utils'
import Model from '../../model'

export default Vue.extend({
  name: prefixName('Form'),
  provide() {
    return {
      erpform: this,
    }
  },
  props: {
    form: {
      type: Object as PropType<any>,
    },
  },
  computed: {
    rules(): any {
      if (this.form instanceof Model) return this.form.rules()
      return {}
    },
  },
  methods: {
    validate(): any {
      return (this.$refs.form as any).validate()
    },
  },
  render(h: CreateElement): any {
    return h(
      FormModel,
      {
        class: 'erp-form',
        ref: 'form',
        props: {
          model: this.form,
          rules: this.rules,
          ...this.$attrs,
        },
      },
      this.$slots.default
    )
  },
})
