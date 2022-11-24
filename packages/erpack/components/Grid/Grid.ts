import Vue from 'vue'
import { prefixName } from '../utils'

export default Vue.extend({
  name: prefixName('Grid'),
  props: {
    gap: String,
    columns: [String, Number],
    rows: [String, Number],
  },
  render(h) {
    const style = {} as any

    const { columns, rows, gap } = this

    if (columns) {
      if (typeof columns === typeof 0) {
        style['grid-template-columns'] = `repeat(${columns}, 1fr)`
      } else {
        style['grid-template-columns'] = columns
      }
    }

    if (rows) {
      if (typeof rows === typeof 0) {
        style['grid-template-rows'] = `repeat(${rows}, 1fr)`
      } else {
        style['grid-template-rows'] = rows
      }
    }

    if (gap) {
      style['grid-gap'] = gap
    }

    return h(
      'div',
      {
        class: 'erp-grid',
        style,
      },
      this.$slots.default
    )
  },
})
