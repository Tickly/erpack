import type { VueConstructor } from 'vue'
import DisplayRenderer from './components/DisplayRenderer'
import Form from './components/Form'
export * from './components/Form/use'
import Table from './components/Table'

export { DisplayRenderer, Form, Table }

export default {
  install(Vue: VueConstructor): void {
    ;[DisplayRenderer, Form, Table].forEach((cpt: any) => {
      Vue.component(cpt.options.name, cpt)
    })
  },
}
