import Column from './Column'
import { Divider, Dropdown, Icon, Menu, Modal } from 'ant-design-vue'
import Button from '../../Button'

export default class ActionColumn extends Column {
  constructor(opt) {
    const {
      title = '操作',
      buttons = [],
      limit = 3,
      ...other
    } = opt

    super({ ...other, title, })

    this.buttons = buttons
    this.limit = limit
  }

  render(h, value, row, index) {
    return h(
      'div',
      { class: 'erp-table-action-column' },
      [
        this.renderButtons(h, row, index),
      ]
    )
  }

  /**
   * 
   * @param {Array} buttons 
   */
  renderMoreButtons(h, buttons) {
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
  }

  renderMoreButton(h, button) {
    return h(Menu.Item, {
      on: {
        click: () => {
          if (button.confirm) {
            Modal.confirm({
              content: button.confirm,
              onOk() {
                button.click()
              }
            })
          } else {
            button.click()
          }
        }
      }
    }, button.text)
  }

  renderButtons(h, row, index) {
    let limit = this.limit

    // 计算出当前需要展示的按钮
    const visibleButtons = []
    // 正常展示的按钮
    const normalButtons = []
    // 需要放到 更多 里面的按钮
    const moreButtons = []

    // 先提取出当前需要渲染的按钮
    for (const button of this.buttons) {
      if (button.visible) {
        if (button.visible(row, index) === false) continue
      }
      visibleButtons.push(button)
    }

    // 分组

    /**
     * 假如limit=3，刚好渲染的按钮数量=3，那更多是不需要的
     * 假如渲染按钮=4，那么，只会渲染前面两个按钮，后面的都在更多
     */
    if (visibleButtons.length > limit) limit--
    visibleButtons.forEach((button, index) => {
      if (index < limit) normalButtons.push(button)
      else moreButtons.push(button)
    })

    //  构造渲染列表
    const renders = []

    for (const button of normalButtons) {
      renders.push(this.renderButton(h, button, row, index))
      renders.push(this.renderDivider(h))
    }
    if (moreButtons.length) {
      renders.push(this.renderMoreButtons(h, moreButtons))
      renders.push(this.renderDivider(h))
    }

    renders.pop()

    return renders
  }

  renderButton(h, button, row, index) {
    return h(Button, {
      props: {
        type: 'link',
        size: 'small',
        confirm: button.confirm,
      },
      on: {
        click: () => {
          if (button.click) {
            button.click(row, index)
          }
        },
      }
    }, button.text)
  }

  renderDivider(h) {
    return h(Divider, {
      props: {
        type: 'vertical'
      }
    })
  }
}