import { useFormItems, Form } from '@/lib'
import { defineComponent } from 'vue'

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

    const formItems = [
      //
      { label: 'a' },
      { label: 'b' },
      { label: 'c' },
      { label: 'd' },
      { label: 'e' },
      { label: 'f' },
      { label: 'g' },
    ]

    const state = {
      layoutDemo: useFormItems([
        [{ label: '1/1' }],
        [{ label: '1/2' }, null],
        [null, { label: '1/3' }, null],
        [{ label: '1/4' }, null, null, null],
        [{ label: '1/5' }, null, null, null, null],
        [{ label: '1/6' }, null, null, null, null, null],
      ]),
    }

    return {
      state,
      formItems,
      formVisible,
      itemsVisible,
    }
  },
  render() {
    return (
      <div class="flex-grow flex flex-col gap-16">
        <a-card id="inline-mode" title="行内模式">
          <Form inline items={this.formItems} />
        </a-card>
        <a-card id="column-1" title="1列">
          <Form column={1} items={this.formItems} />
        </a-card>

        <a-card title="控制字段显示状态">
          <Form column={3} items={this.itemsVisible} />
        </a-card>
        <a-card title="自定义布局">
          <Form items={this.state.layoutDemo} />
        </a-card>
      </div>
    )
  },
})
