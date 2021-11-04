import Property from './Properties/Property'
import NumberProperty from './Properties/NumberProperty'

export default class Model {
  /**
   * 
   * @returns {Object.<string, Property>} properties
   */
  properties () {
    return {

    }
  }

  /**
   * 
   * @param {String} prop 
   * @returns {Object}
   */
  getProperty (prop) {
    const props = this.properties()
    return props[prop]
  }

  rules () {
    const rules = {}
    const props = this.properties()
    for (const prop in props) {
      const property = props[prop]
      Reflect.set(rules, prop, property.getRules())
    }
    return rules
  }

}