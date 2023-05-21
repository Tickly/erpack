import type { FormItemConfig } from './FormItemConfig'

export const useForm = (
  form: Record<string, any>,
  configs: FormItemConfig[]
) => {
  return configs
}

export const useFormItems = (
  configs: Array<FormItemConfig | FormItemConfig[]>
) => {
  return configs
}
