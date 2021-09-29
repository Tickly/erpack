import Column from './Column'
import numeral from 'numeral'

export default class NumberColumn extends Column {
  constructor (opt) {
    super(opt)
    const { format = '0,0.00' } = opt
    this.format = format
  }

  render (h, value) {
    return numeral(value).format(this.format)
  }
}