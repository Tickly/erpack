import numeral from 'numeral'
import { CreateElement } from 'vue'
import StringColumn from './StringColumn'

export default class NumberColumn extends StringColumn {
  public format: string
  constructor(opt: any) {
    super(opt)
    const { format = '0,0.00' } = opt
    this.format = format
  }

  render(h: CreateElement, value: any) {
    return numeral(value).format(this.format)
  }
}
