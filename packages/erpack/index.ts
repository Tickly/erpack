/**
 * Erpack
 */
import { VueConstructor } from 'vue'

import * as components from './components'
export * from './components'

export const install = (vue: VueConstructor) => {
  Object.values(components).forEach((component: any) => {
    if (component.install) {
      component.install(vue)
    } else {
      vue.component(component.name, component)
    }
  })
}

export default {
  install,
}
