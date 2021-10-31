import { prefixName } from '../utils'

export default {
  name: prefixName('GridItem'),
  props: {
    colSpan: [String, Number],
  },
  render(h) {
    const style = {}

    if (this.colSpan) {
      style['grid-column'] = `span ${this.colSpan}`
    }

    return h('div', {
      class: 'erp-grid-item',
      style,
    }, this.$slots.default)
  }
}