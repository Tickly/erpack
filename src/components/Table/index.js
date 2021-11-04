/**
 * 表格组件
 * 
 * todo 需要支持自动合并单元格
 */

import { Table } from 'ant-design-vue'
import Model from '../../model'
import { prefixName } from '../utils'
import { getColumn } from './Columns/Factory'
import './style.less'

export default {
  name: prefixName('Table'),
  props: {
    /**
     * 模型
     * 如果传了模型，就必须是基于Model定义。
     */
    modelClass: {
      validator (value) {
        if (value instanceof Function) {
          const model = new value()
          if (model instanceof Model) return true
        }

        return false
      }
    },
    columns: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    tableColumns () {

      let model = null
      if (this.modelClass) {
        model = new this.modelClass()
      }

      return this.columns
        .map(col => getColumn(col, model))
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