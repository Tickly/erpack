import { prefixName } from '../utils'
import { FormModel } from 'ant-design-vue'
import Model from '../../model'

export default {
  name: prefixName('Form'),
  provide () {
    return {
      erpform: this,
    }
  },
  props: {
    form: Object,
  },
  computed: {
    rules () {
      if (this.form instanceof Model) return this.form.rules()
    },
  },
  methods: {
    validate () {
      return this.$refs.form.validate()
    },
  },
  render (h) {
    return h(FormModel, {
      class: 'erp-form',
      ref: 'form',
      props: {
        model: this.form,
        rules: this.rules,
        ...this.$attrs,
      },
    }, this.$slots.default)
  }
}