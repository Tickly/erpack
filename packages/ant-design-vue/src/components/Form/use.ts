import type { FormItemConfig } from './FormItemConfig'

export const useForm = (
  form: Record<string, any>,
  items: FormItemConfig<typeof form>[]
) => {
  const props = {
    items,
  }

  return { props }
}

export const useFormItems = <T>(
  configs: Array<FormItemConfig<T> | Array<FormItemConfig<T> | null>>
) => {
  return configs
}
