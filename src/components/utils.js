import { isPlainObject as ipo } from 'lodash'

export const prefixName = name => `Erp${name}`
export const prefixClassName = name => `erp-${name}`

export const isString = value => typeof value === typeof ''

export const isFunction = value => value instanceof Function

export const isPlainObject = value => ipo(value)

export const isArray = value => Array.isArray(value)