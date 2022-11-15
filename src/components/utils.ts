import { isPlainObject as ipo } from 'lodash'

export const prefixName = (name: string) => `Erp${name}`

export const isString = (value: any) => typeof value === typeof ''

export const isFunction = (value: any) => value instanceof Function

export const isPlainObject = (value: any) => ipo(value)

export const isArray = (value: any) => Array.isArray(value)
