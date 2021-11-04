import Property from './Properties/Property'

export default class Model {

  constructor (data) {
    for (const key in data) {
      Reflect.set(this, key, Reflect.get(data, key))
    }
  }

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