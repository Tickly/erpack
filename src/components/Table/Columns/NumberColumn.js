import Column from './Column'

export default class NumberColumn extends Column {
  render (value) {
    return `￥ ${value}`
  }
}