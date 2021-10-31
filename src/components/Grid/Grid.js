import { prefixName } from '../utils'

export default {
  name: prefixName('Grid'),
  props: {
    columns: [String, Number]
  },
  render(h) {
    const style = {}

    if (this.columns) {
      style['grid-template-columns'] = `repeat(${this.columns}, 1fr)`
    }

    return h('div', {
      class: 'erp-grid',
      style,
    }, this.$slots.default)
  }
}