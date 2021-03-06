import { Descriptions } from 'ant-design-vue'
import Model from '../../model'
import { prefixName } from '../utils'
import './style.less'

export default {
  name: prefixName('Descriptions'),
  props: {
    title: String,
    bordered: {
      type: Boolean,
      default: true,
    },
    items: {
      type: Array,
      default: () => []
    },
    form: Object,
    labelWidth: [Number, String],
    column: {
      type: Number,
      default: 3,
    },
  },
  computed: {
    obj_items () {
      const map = v => {
        // 纯字符
        if (typeof v === typeof '') v = { prop: v }

        const { prop, label } = v

        // 如果没有手动指定label，就自动设置
        if (label === undefined) {
          // 先用prop做label
          v.label = prop

          // 如果是模型实例，且定义了属性
          if (this.form instanceof Model) {
            const property = this.form.getProperty(prop)
            if (property) {
              v.label = property.label
            }
          }
        }

        return v
      }
      return this.items.map(map)
    }
  },
  mounted () {
    if (this.labelWidth) {
      this.setLabelWidth()
    }
  },
  methods: {
    setLabelWidth () {
      const table = this.$el.querySelector('table')
      const colgroup = document.createElement('colgroup')
      for (let i = 0; i < this.column; i++) {
        const colLabel = document.createElement('col')
        colLabel.setAttribute('width', this.labelWidth)
        const colValue = document.createElement('col')
        colgroup.appendChild(colLabel)
        colgroup.appendChild(colValue)
      }
      table.appendChild(colgroup)
    },
    renderItems (h) {
      return this.obj_items.map(item => this.renderItem(h, item))
    },
    renderItem (h, item) {
      const { form } = this
      const {
        span,
        label,
        prop,
        value = Reflect.get(form, prop),
      } = item

      return h(Descriptions.Item, {
        props: {
          label,
          span
        }
      }, value)
    },
  },
  render (h) {
    return h(Descriptions, {
      class: 'erp-descriptions',
      props: {
        title: this.title,
        bordered: this.bordered,
      }
    }, this.$slots.default || this.renderItems(h))
  }
}