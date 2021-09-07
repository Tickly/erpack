import { Descriptions } from 'ant-design-vue'
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
    },
    form: Object,
  },
  computed: {
    obj_items () {
      const map = v => {
        if (typeof v === typeof '') v = { label: v, prop: v }
        return v
      }
      return this.items.map(map)
    }
  },
  methods: {
    renderItems (h) {
      const { form } = this

      const r = ({ label, prop }) => h(Descriptions.Item, {
        props: {
          label: label,
        }
      }, Reflect.get(form, prop))

      return this.obj_items.map(r)
    }
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