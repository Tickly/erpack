import { useRadio } from '@/components/Form/Editors/RadioEditor'
import { useFormItems, Form, useForm } from '@/lib'
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  data() {
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

    const visibleDemo = useForm({}, [
      useRadio('', 'a', {
        options: [
          { label: '显示', value: '1' },
          { label: '隐藏', value: '0' },
        ],
      }),
      { label: 'b', visible: (form) => form.a === '1' },
    ])

    const state = {
      column: 1,
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
      visibleDemo,
    }
  },
  render() {
    return (
      <div class="flex-grow flex flex-col gap-12">
        <a-card id="inline-mode" title="行内模式">
          <Form inline items={this.formItems} />
        </a-card>
        <a-card id="column-1" title="列的数量">
          <a-form layout="inline">
            <a-form-item label="选择列的数量">
              <a-radio-group v-model={this.state.column}>
                <a-radio value={1}>1</a-radio>
                <a-radio value={2}>2</a-radio>
                <a-radio value={3}>3</a-radio>
                <a-radio value={4}>4</a-radio>
                <a-radio value={5}>5</a-radio>
                <a-radio value={6}>6</a-radio>
              </a-radio-group>
            </a-form-item>
          </a-form>
          <Form column={this.state.column} items={this.formItems} />
        </a-card>

        <a-card id="item-visible" title="控制字段显示状态">
          {this.visibleDemo.render()}
        </a-card>
        <a-card id="layout" title="自定义布局">
          <Form items={this.state.layoutDemo} />
        </a-card>
      </div>
    )
  },
})
