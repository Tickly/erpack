import numeral from 'numeral'
import StringColumn from './StringColumn'

export default class NumberColumn extends StringColumn {
  constructor (opt) {
    super(opt)
    const { format = '0,0.00' } = opt
    this.format = format
  }

  render (h, value) {
    return numeral(value).format(this.format)
  }
}