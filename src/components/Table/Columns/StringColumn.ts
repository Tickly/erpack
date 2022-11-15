import { CreateElement } from 'vue'
import Column from './Column'

export default class StringColumn extends Column {
  public formatter: string | ((v: any) => string)

  constructor(opt: any) {
    super(opt)

    const { formatter } = opt

    this.formatter = formatter
  }

  render(h: CreateElement, value: any) {
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
