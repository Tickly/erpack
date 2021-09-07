import { Button, Popconfirm } from 'ant-design-vue'
import { prefixName } from '../utils'
import './index.less'

export default {
  name: prefixName('Button'),
  props: {
    /**
     * 在原有的type基础上，额外扩展了几个值。
     * success
     * danger
     */
    type: String,
    /**
     * 在某些场景下面，点击按钮的时候，希望能够有一个二次确认的操作，所以提供了这个参数，快速设置一个提示语。
     */
    confirm: String,
  },
  methods: {
    handleClick () {
      this.$emit('click')
    },
    renderPopConfirm (h) {
      return h(Popconfirm, {
        props: {
          title: this.confirm
        },
        on: {
          confirm: this.handleClick
        }
      }, [
        this.renderButton(h)
      ])
    },
    renderButton (h) {
      return h(Button, {
        props: {
          type: this.type,
          ...this.$attrs,
        },
        on: {
          click: () => {
            if (this.confirm) return

            this.handleClick()
          }
        }
      }, this.$slots.default)
    }
  },
  render (h) {
    return this.confirm ? this.renderPopConfirm(h) : this.renderButton(h)
  },
}