import { prefixClassName, prefixName } from '../utils'
import './style.less'

export default {
  name: prefixName('Text'),
  props: {
    /**
     * 需要展示的文本内容
     */
    text: {},
    /**
     * 自定义格式化输出
     */
    formatter: Function,
    /**
     * 文本颜色
     */
    colors: Object,
  },
  computed: {
    classes () {
      const cn = prefixClassName('text')
      const cls = [cn]

      const { colors } = this
      if (colors) {
        Object.entries(colors).forEach(([key, value]) => {
          do {
            if (value instanceof Function) {
              // 如果是函数形式，只有函数返回了true才应用样式
              if (value(this.text) !== true) break
            } else {
              // 否则，如果给到的值，等于text，也应用样式
              if (value !== this.text) break
            }

            cls.push([cn, key].join('-'))
          } while (false)
        })
      }

      return cls
    },
    content () {
      let { text, formatter } = this

      if (formatter) {
        text = formatter(text)
      }

      return text.toString()
    }
  },
  render (h) {
    const { content } = this
    return h('span', {
      class: this.classes,
      attrs: {
        title: content
      }
    }, content)
  }
}