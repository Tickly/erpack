import Column from './Column'
import ActionButtons, { ActionButton } from '../../ActionButtons'
import { CreateElement } from 'vue'
export default class ActionColumn extends Column {
  public buttons: ActionButton[]
  public limit: number
  public showDivider: boolean

  constructor(opt: any) {
    const {
      title = '操作',
      buttons = [],
      limit = 3,
      showDivider = true,
      ...other
    } = opt

    super({ ...other, title })

    this.buttons = buttons
    this.limit = limit
    this.showDivider = showDivider
  }

  getButtons(row: any, index: number) {
    return this.buttons.map((button) => {
      const { click, visible, ...other } = button as any
      const nb = other as any

      if (click) {
        nb.click = () => click(row, index)
      }
      if (visible) {
        nb.visible = () => visible(row, index)
      }

      return other
    })
  }

  render(h: CreateElement, value: any, row: any, index: number) {
    const { limit, showDivider } = this

    return h(ActionButtons, {
      key: row.id,
      props: {
        limit,
        buttons: this.getButtons(row, index),
        showDivider,
      },
    })
  }
}
