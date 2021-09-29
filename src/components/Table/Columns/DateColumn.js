import Column from './Column'
import moment from 'moment'

export default class DateColumn extends Column {
  constructor (opt) {
    super(opt)
    const { format = 'YYYY-MM-DD HH:mm:ss' } = opt
    this.format = format
  }

  render (h, value) {
    return moment(value).format(this.format)
  }
}