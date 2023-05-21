import { defineComponent } from 'vue'
import { Form, useFormItems } from '../../components'

export default defineComponent({
  data() {
    const formVisible: any = {
      a: '1',
    }
    const itemsVisible = useFormItems([
      //
      {
        label: 'a',
        customRender: () => {
          return (
            <a-radio-group v-model={formVisible.a}>
              <a-radio value="1">显示</a-radio>
              <a-radio value="2">隐藏</a-radio>
            </a-radio-group>
          )
        },
      },
      { label: 'b', visible: () => false },
    ])

    return {
      formVisible,
      itemsVisible,
    }
  },
  render() {
    return (
      <a-card title="控制字段显示状态">
        <Form column={3} items={this.itemsVisible} />
      </a-card>
    )
  },
})
