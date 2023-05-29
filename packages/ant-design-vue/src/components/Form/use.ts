import { h } from 'vue'
import type { FormItemConfig } from './FormItemConfig'

export const useForm = (
  form: Record<string, any>,
  items: FormItemConfig<typeof form>[],
  props?: {},
  events?: {}
) => {
  function render() {
    return h('erp-form', {
      props: {
        form,
        items,
      },
      on: {
        change(prop: string, value: any) {
          console.log('form change', prop, value)
        },
      },
    })
  }

  return { render }
}

export const useFormItems = <T>(
  configs: Array<FormItemConfig<T> | Array<FormItemConfig<T> | null>>
) => {
  return configs
}
