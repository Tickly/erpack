import type { VueConstructor } from 'vue'
import Table from './Table'

export default {
  install(Vue: VueConstructor) {
    Vue.component(Table.name, Table)
  },
}
