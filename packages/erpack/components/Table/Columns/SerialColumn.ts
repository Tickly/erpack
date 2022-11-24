import { CreateElement } from 'vue'
import Column from './Column'

export default class SerialColumn extends Column {
  constructor(opt: any) {
    const { title = '序号' } = opt
    super({
      ...opt,
      title,
    })
  }

  /**
   * 显示序号就行
   */
  render(h: CreateElement, value: any, row: any, index: number) {
    return index + 1
  }

  static parser(col: any) {
    if (col === '#') return true
  }
}
