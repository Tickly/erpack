/**
 * Erpack
 */

import Model from './model'

import components from './components'

export const install = Vue => {
  components.forEach(component => Vue.component(component.name, component))
}

export {
  Model,
}
export * from './model/Properties'

export default {
  install,
}