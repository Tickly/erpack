// @ts-nocheck
import { prefixName } from '../utils'
import { FormModel } from 'ant-design-vue'
import Model from '../../model'

export default {
  name: prefixName('FormItem'),
  inject: ['erpform'],
  props: {
    prop: String,
    label: String,
  },
  computed: {
    displayLabel () {
      if (this.property) return this.property.label
      return this.label || this.prop
    },
    model () {
      return this.erpform.form
    },
    property () {
      if (this.model instanceof Model) {
        return this.model.getProperty(this.prop)
      }
    }
  },
  render (h) {
    return h(
      FormModel.Item,
      {
        class: 'erp-form-item',
        props: {
          prop: this.prop,
          label: this.displayLabel,
          ...this.$attrs,
        }
      },
      this.$slots.default
    )
  }
}