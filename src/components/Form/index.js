import Form from './Form'
import FormItem from './FormItem'

Form.Item = FormItem

export default {
  install (Vue) {
    Vue.component(Form.name, Form)
    Vue.component(FormItem.name, FormItem)
  }
}