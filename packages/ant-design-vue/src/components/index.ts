import type { VueConstructor } from 'vue'
import Table from './Table'
import Form from './Form'
export * from './Form/use'

export { Form, Table }
export default {
  install(Vue: VueConstructor): void {
    Vue.component(Table.name, Table)
    Vue.component(Form.name, Form)
  },
}
