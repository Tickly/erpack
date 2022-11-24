import Vue, { CreateElement, VNode } from 'vue'
import { Button, Popconfirm } from 'ant-design-vue'
import { prefixName } from '../utils'
import './index.less'

export default Vue.extend({
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
    icon: String,
    size: String,
  },
  methods: {
    handleClick(): void {
      this.$emit('click')
    },
    renderPopConfirm(h: CreateElement) {
      return h(
        Popconfirm,
        {
          props: {
            title: this.confirm,
          },
          on: {
            confirm: this.handleClick,
          },
        },
        [this.renderButton(h)]
      )
    },
    renderButton(h: CreateElement) {
      return h(
        Button,
        {
          props: {
            type: this.type,
            icon: this.icon,
            size: this.size,
            ...this.$attrs,
          },
          on: {
            click: () => {
              if (this.confirm) return

              this.handleClick()
            },
          },
        },
        this.$slots.default
      )
    },
  },
  render(h): VNode {
    return this.confirm ? this.renderPopConfirm(h) : this.renderButton(h)
  },
})
