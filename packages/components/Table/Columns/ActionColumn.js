import Column from './Column'
import ActionButtons from '../../ActionButtons'
export default class ActionColumn extends Column {
  constructor(opt) {
    const {
      title = '操作',
      buttons = [],
      limit = 3,
      showDivider = true,
      ...other
    } = opt

    super({ ...other, title, })

    this.buttons = buttons
    this.limit = limit
    this.showDivider = showDivider
  }

  getButtons(row, index) {
    return this.buttons.map(button => {
      const { click, visible, ...other } = button
      if (click) {
        other.click = () => click(row, index)
      }
      if (visible) {
        other.visible = () => visible(row, index)
      }

      return other
    })
  }

  render(h, value, row, index) {
    const { limit, showDivider } = this

    return h(ActionButtons, {
      key: row.id,
      props: {
        limit,
        buttons: this.getButtons(row, index),
        showDivider,
      }
    })
  }
}