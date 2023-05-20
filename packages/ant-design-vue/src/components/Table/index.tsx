import Vue from 'vue'
import { Table } from 'ant-design-vue'
export default Vue.extend({
  name: 'EPTable',
  props: {
    dataSource: Array,
    rowKey: {
      type: String,
      default: 'id',
    },
  },
  render(h) {
    return h(Table, {
      props: {
        ...this.$props,
      },
    })
  },
})
