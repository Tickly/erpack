/**
 * 表格组件
 *
 * todo 需要支持自动合并单元格
 */

import Vue, { CreateElement, PropType, VNode } from 'vue'
import { Table } from 'ant-design-vue'
import { prefixName } from '../utils'
import { getColumn } from './Columns/Factory'
import './style.less'

export default Vue.extend({
  name: prefixName('Table'),
  props: {
    columns: {
      type: Array as PropType<string[]>,
      default: () => [],
    },
  },
  computed: {
    tableColumns(): any {
      return this.columns
        .map((col) => getColumn(col, null))
        .map((col) => col.to(this.$createElement))
    },
  },
  render(h: CreateElement): VNode {
    return h(Table, {
      class: 'erp-table',
      props: {
        ...this.$attrs,
        columns: this.tableColumns,
      },
    })
  },
})
