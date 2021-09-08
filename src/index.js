/**
 * 
 */

import components from './components'

export const install = Vue => {
  components.forEach(component => Vue.component(component.name, component))
}

export default {
  install
}