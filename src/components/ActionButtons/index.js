import { prefixName } from '../utils'
import Button from '../Button'
import { Menu, Modal, Divider, Dropdown, Icon, Space } from 'ant-design-vue'
import './style.less'

export default {
  name: prefixName('ActionButtons'),
  props: {
    /**
     * 设定一个数值，当按钮超过该数量之后，自动收到【更多】下拉里面。
     * 默认为0，表示全部展开。
     */
    limit: {
      type: Number,
      default: 0
    },
    /**
     * 按钮配置项组成的数组
     * 按钮配置项为对象，包含以下属性
     * text [String] 按钮文字
     * visible [Boolean,Function] 可直接传true，false，也可传入一个function，该function要返回一个Boolean结果，为True时按钮可见。
     * click [Function] 单击事件
     * confirm [String] 设定一段文本，点击按钮后，会弹框二次确认，确认之后才会触发click事件。
     */
    buttons: {
      type: Array,
      default: () => []
    },
    /**
     * 是否显示分割线
     */
    showDivider: {
      type: Boolean,
      default: true,
    }
  },
  methods: {
    renderButtons (h) {
      let limit = this.limit

      // 计算出当前需要展示的按钮
      const visibleButtons = []
      // 正常展示的按钮
      const normalButtons = []
      // 需要放到 更多 里面的按钮
      const moreButtons = []

      // 先提取出当前需要渲染的按钮
      for (const button of this.buttons) {

        // 如果设置了visible
        if (Reflect.has(button, 'visible')) {
          const { visible } = button
          if (visible === false) continue

          if (visible instanceof Function) {
            if (visible() === false) continue
          }
        }
        visibleButtons.push(button)
      }

      // 分组

      /**
       * 假如limit=3，刚好渲染的按钮数量=3，那更多是不需要的
       * 假如渲染按钮=4，那么，只会渲染前面两个按钮，后面的都在更多
       */
      visibleButtons.forEach((button, index) => {
        if (limit === 0 || index < limit - 1) normalButtons.push(button)
        else moreButtons.push(button)
      })

      //  构造渲染列表
      let renders = []

      for (const button of normalButtons) {
        renders.push(this.renderButton(h, button))
      }
      if (moreButtons.length) {
        renders.push(this.renderMoreButtons(h, moreButtons))
      }

      // 如果需要显示分割线
      if (this.showDivider) {
        renders = renders.reduce((list, render) => {
          list.push(render, this.renderDivider(h))
          return list
        }, [])
        renders.pop()
      }

      return renders
    },
    renderButton (h, button) {
      return h(Button, {
        props: {
          type: 'link',
          size: 'small',
          icon: button.icon,
          confirm: button.confirm,
        },
        on: {
          click: () => {
            if (button.click) {
              button.click()
            }
          },
        }
      }, button.text)
    },
    renderMoreButtons (h, buttons) {
      return h(Dropdown, [
        h(Button,
          { props: { type: 'link', size: 'small' } },
          [
            '更多',
            h(Icon, { props: { type: 'down' } })
          ]),
        h(Menu,
          { slot: 'overlay' },
          buttons.map(button => {
            return this.renderMoreButton(h, button)
          }),
        )
      ])
    },
    renderMoreButton (h, button) {
      return h(Menu.Item, {
        on: {
          click: () => {
            if (button.confirm) {
              Modal.confirm({
                content: button.confirm,
                onOk () {
                  button.click()
                }
              })
            } else {
              button.click()
            }
          }
        }
      }, button.text)
    },
    renderDivider (h) {
      return h(Divider, {
        props: {
          type: 'vertical'
        }
      })
    }
  },
  render (h) {
    return h('div', { class: 'erp-action-buttons' }, [
      this.showDivider
        ? this.renderButtons(h)
        : h(Space, this.renderButtons(h))
    ])
  }
}