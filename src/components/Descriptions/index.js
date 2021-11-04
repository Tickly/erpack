import { Descriptions } from 'ant-design-vue'
import Model from '../../model'
import { prefixName } from '../utils'

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
  methods: {
    renderItems (h) {
      const { form } = this

      const r = ({ label, prop, span }) => h(Descriptions.Item, {
        props: {
          label,
          span
        }
      }, Reflect.get(form, prop))

      return this.obj_items.map(r)
    },
  },
  render (h) {
    return h(Descriptions, {
      props: {
        title: this.title,
        bordered: this.bordered,
      }
    }, this.$slots.default || this.renderItems(h))
  }
}