import { Tag } from 'ant-design-vue'
import { isArray, isFunction, isPlainObject, isString } from '../../utils'
import StringColumn from './StringColumn'

export default class TagColumn extends StringColumn {
  constructor (opt) {
    super(opt)

    let { text, color } = opt
    this.color = color

    if (text) {
      if (isString(text)) {
        text = tag => Reflect.get(tag, opt.text)
      }
    }

    this.text = text
  }

  render (h, value) {
    const { color } = this

    const tags = this.valueToArray(value)

    return h(
      'div',
      tags.map(tag => {
        const props = {}
        const text = this.getText(tag)

        if (color) {
          if (isString(color)) {
            props.color = color
          }
          if (isFunction(color)) {
            props.color = color(text)
          }
        }

        return h(Tag, { props }, text)
      })
    )
  }

  /**
   * 先把value转成array
   * @param {*} value 
   * @returns {string[]}
   */
  valueToArray (value) {
    // 如果原始值是字符串，直接把它返回成数组
    if (isString(value)) return [value]
    // 如果原始值是对象
    if (isPlainObject(value)) return [value]
    // 如果原始值是数组
    if (isArray(value)) return value
  }

  /**
   * 解析标签
   */
  getText (tag) {
    // 值是字符串，就直接返回，不走转换
    if (isString(tag)) return tag

    if (isPlainObject(tag)) {
      return this.text ? this.text(tag) : tag
    }
  }
}