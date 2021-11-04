// @ts-nocheck
import Property from './Property'

export default class NumberProperty extends Property {
  constructor (opt) {
    super(opt)

    const { min, max } = opt
    this.min = min
    this.max = max
  }

  getRules () {
    const rules = super.getRules()

    // 认为是设置了值
    if (typeof this.min === typeof 0) {
      rules.push({
        type: 'number',
        min: this.min,
        message: `${this.label}不能小于${this.min}`
      })
    }

    if (typeof this.max === typeof 0) {
      rules.push({
        type: 'number',
        min: this.max,
        message: `${this.label}不能大于${this.max}`
      })
    }

    return rules
  }
}