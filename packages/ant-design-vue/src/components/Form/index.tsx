import Vue, { defineComponent, h } from 'vue'
import type { PropType, VNode, VNodeChildren } from 'vue'
import { Col, Form, FormModel, Input, Row } from 'ant-design-vue'
import type { FormItemConfig } from './FormItemConfig'
import './style.scss'
import FormItem from './FormItem'

export default Vue.extend({
  name: 'ErpForm',
  props: {
    form: Object,
    inline: Boolean,
    /**
     * 非inline模式下有效
     */
    column: {
      type: Number,
      default: 1,
    },
    /**
     * items接收一个数组
     * 其中，如果元素为FormItemConfig，则宽度跟随Form的Column来走。
     */
    items: {
      type: Array as PropType<Array<FormItemConfig | FormItemConfig[]>>,
    },
  },
  computed: {
    fmProps() {
      const { form, layout = this.inline ? 'inline' : null, ...o } = this.$props

      return {
        ...o,
        model: form,
        layout,
      }
    },
    colSpan() {
      return 24 / this.column
    },
  },
  methods: {
    renderRow(children: Array<JSX.Element | null>) {
      return this.inline ? children : <Row gutter={24}>{children}</Row>
    },
    renderCol(children: JSX.Element | null, span?: number) {
      return this.inline ? children : <Col span={span}>{children}</Col>
    },
    renderFormItemControl(item: FormItemConfig) {
      return item.customRender ? item.customRender() : <Input />
    },
    renderFormItem(item: FormItemConfig | FormItemConfig[]): any {
      if (Array.isArray(item)) {
        const span = 24 / item.length
        return this.renderRow(
          item.map((i: FormItemConfig) => {
            return this.renderCol(this.renderFormItem(i), span)
          })
        )
      } else {
        const children =
          item === null
            ? null
            : h(
                FormItem,
                {
                  props: {
                    label: item.label,
                  },
                  on: {
                    change(v: any) {
                      console.log('on form item change', v)
                    },
                  },
                },
                [this.renderFormItemControl(item)]
              )

        return this.renderCol(children, this.colSpan)
      }
    },
  },
  render(h): VNode {
    return h(
      FormModel,
      {
        class: 'erp-form',
        props: this.fmProps,
      },
      [
        <Row gutter={24}>
          {this.items?.map((item) => this.renderFormItem(item))}
        </Row>,
      ]
    )
  },
})
