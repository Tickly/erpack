import { h } from 'vue'
import { useEditor } from './Editor'
import { Radio } from 'ant-design-vue'
interface RadioOption {
  value: string
  label: string
}

interface RadioProps {
  options: Array<RadioOption>
}
export const useRadio = (prop: string, label: string, props?: RadioProps) => {
  return useEditor(prop, label, () =>
    h(Radio.Group, {
      props: {
        name: prop,
        options: props?.options,
      },
      on: {
        change(v: any) {
          console.log('radio change', v)
        },
      },
    })
  )
}
