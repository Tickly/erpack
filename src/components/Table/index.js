import { Table } from 'ant-design-vue'
import { prefixName } from '../utils'
import { getColumn } from './Columns/Factory'
import './style.less'

export default {
  name: prefixName('Table'),
  props: {
    columns: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    tableColumns () {
      return this.columns
        .map(getColumn)
        .map(col => col.to(this.$createElement))
    }
  },
  render (h) {
    return h(Table, {
      class: 'erp-table',
      props: {
        ...this.$attrs,
        columns: this.tableColumns,
      },
    })
  }
}