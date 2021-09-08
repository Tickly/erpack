import moment from 'moment'
import Column from './Column'

export default class DateColumn extends Column {
  render (value) {
    return moment(value).format('YYYY-MM-DD')
  }
}