import Column from './Column'
import { Divider } from 'ant-design-vue'
import Button from '../../Button'

export default class ActionColumn extends Column {
  constructor (opt) {
    const {
      title = '操作',
      buttons = [],
      ...other
    } = opt

    super({ ...other, title, })

    this.buttons = buttons
  }

  render (h, value, row, index) {
    return h(
      'div',
      { class: 'erp-table-action-column' },
      this.renderButtons(h, row, index)
    )
  }

  renderButtons (h, row, index) {
    const renders = []

    for (const button of this.buttons) {

      if (button.visible) {
        if (button.visible(row, index) === false) continue
      }

      renders.push(this.renderButton(h, button, row, index))
      renders.push(this.renderDivider(h))
    }

    renders.pop()

    return renders
  }

  renderButton (h, button, row, index) {
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

  renderDivider (h) {
    return h(Divider, {
      props: {
        type: 'vertical'
      }
    })
  }
}