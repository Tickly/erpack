import type { VueConstructor } from 'vue'
import Table from './Table'
export * from './Form/use'

export default {
  install(Vue: VueConstructor) {
    Vue.component(Table.name, Table)
  },
}
