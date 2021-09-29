import Column from './Column'

export default class SerialColumn extends Column {
  constructor (opt) {
    const { title = '序号' } = opt
    super({
      ...opt,
      title
    })
  }

  render (h, value, row, index) {
    return index + 1
  }
}