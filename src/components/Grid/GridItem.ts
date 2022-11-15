import Vue from 'vue'
import { prefixName } from '../utils'

export default Vue.extend({
  name: prefixName('GridItem'),
  props: {
    /**
     * 设置grid-column样式
     * 如果传Number，就表示跨越多少个网格。
     * 如果传String，就原样输出。
     */
    column: [String, Number],
    /**
     * 设置grid-row样式
     * 如果传Number，就表示跨越多少个网格。
     * 如果传String，就原样输出。
     */
    row: [String, Number],
  },
  render(h) {
    const style = {} as any

    if (this.column) {
      if (typeof this.column === typeof 0) {
        style['grid-column'] = `span ${this.column}`
      } else {
        style['grid-column'] = this.column
      }
    }
    if (this.row) {
      if (typeof this.row === typeof 0) {
        style['grid-row'] = `span ${this.row}`
      } else {
        style['grid-row'] = this.row
      }
    }

    return h(
      'div',
      {
        class: 'erp-grid-item',
        style,
      },
      this.$slots.default
    )
  },
})
