export default class Property {
  constructor (opt) {
    if (typeof opt === typeof '') {
      opt = {
        label: opt
      }
    }

    const { label, required } = opt

    this.label = label
    this.required = required
  }

  getRules () {
    const rules = []
    if (this.required) {
      rules.push({
        required: true,
        message: '请输入' + this.label,
      })
    }

    return rules
  }
}