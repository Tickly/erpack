import Column from './Column'

export default class SerialColumn extends Column {
  constructor (opt) {
    const { title = '序号' } = opt
    super({
      ...opt,
      title
    })
  }

  /**
   * 显示序号就行
   */
  render (h, value, row, index) {
    return index + 1
  }

  static parser (col) {
    if (col === '#') return true
  }
}