/**
 * Erpack
 */

import Model from './model'

import * as components from './components'
export * from './components'

export const install = Vue => {
  Object.values(components).forEach(component => {
    if (component.install) {
      component.install(Vue)
    } else {
      Vue.component(component.name, component)
    }
  })
}

export {
  Model,
}

export * from './model/Properties'

export default {
  install,
}