import moment from 'moment'
import { CreateElement } from 'vue'
import StringColumn from './StringColumn'

export default class DateColumn extends StringColumn {
  public format: string
  constructor(opt: any) {
    super(opt)
    const { format = 'YYYY-MM-DD HH:mm:ss' } = opt
    this.format = format
  }

  render(h: CreateElement, value: any) {
    return moment(value).format(this.format)
  }
}
