import Column from './Column'

export default class TextColumn extends Column {
  constructor(opt) {
    super(opt)

    const { formatter } = opt

    this.formatter = formatter
  }

  render(h, value) {
    if (this.formatter) {
      // 如果是字符串模板
      if (typeof this.formatter === typeof '') {
        value = value.replace('{v}', value)
      }
      if (this.formatter instanceof Function) {
        value = this.formatter(value)
      }
    }

    return value
  }
}