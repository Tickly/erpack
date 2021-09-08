import { Table } from 'ant-design-vue'
import { prefixName } from '../utils'
import { getColumn } from './Columns/Factory'

export default {
  name: prefixName('Table'),
  props: {
    columns: Array,
  },
  computed: {
    tableColumns () {
      return this.columns
        .map(getColumn)
        .map(col => col.to())
    }
  },
  render (h) {
    return h(Table, {
      props: {
        ...this.$attrs,
        columns: this.tableColumns,
      }
    })
  }
}