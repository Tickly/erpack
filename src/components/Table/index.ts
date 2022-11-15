/**
 * 表格组件
 *
 * todo 需要支持自动合并单元格
 */

import Vue, { CreateElement, PropType, VNode } from 'vue'
import { Table } from 'ant-design-vue'
import Model from '../../model'
import { prefixName } from '../utils'
import { getColumn } from './Columns/Factory'
import './style.less'

export default Vue.extend({
  name: prefixName('Table'),
  props: {
    /**
     * 模型
     * 如果传了模型，就必须是基于Model定义。
     */
    modelClass: {
      type: Function as PropType<any>,
      validator(value: any) {
        if (value instanceof Function) {
          const model = new value()
          if (model instanceof Model) return true
        }

        return false
      },
    },
    columns: {
      type: Array as PropType<string[]>,
      default: () => [],
    },
  },
  computed: {
    tableColumns(): any {
      let model = null as any
      if (this.modelClass) {
        model = new (this.modelClass as any)()
      }

      return this.columns
        .map((col) => getColumn(col, model))
        .map((col) => col.to(this.$createElement))
    },
  },
  mounted() {},
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
