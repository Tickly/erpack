import moment from 'moment'
import StringColumn from './StringColumn'

export default class DateColumn extends StringColumn {
  constructor (opt) {
    super(opt)
    const { format = 'YYYY-MM-DD HH:mm:ss' } = opt
    this.format = format
  }

  render (h, value) {
    return moment(value).format(this.format)
  }
}