import { defineComponent, h } from 'vue'
import type { PropType, VNode, VNodeChildren } from 'vue'
import { Col, Form, Input, Row } from 'ant-design-vue'
import type { FormItemConfig } from './FormItemConfig'

export default defineComponent({
  name: 'ErpForm',
  props: {
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
    colSpan() {
      return 24 / this.column
    },
  },
  methods: {
    renderRow(children: JSX.Element[]) {
      return this.inline ? children : <Row gutter={24}>{children}</Row>
    },
    renderCol(children: JSX.Element, span?: number) {
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
        return this.renderCol(
          h(
            Form.Item,
            {
              props: {
                label: item.label,
              },
            },
            [this.renderFormItemControl(item)]
          ),
          this.colSpan
        )
      }
    },
  },
  render(h): VNode {
    return h(
      Form,
      {
        props: {
          layout: this.inline ? 'inline' : null,
          ...this.$props,
        },
      },
      [
        <Row gutter={24}>
          {this.items?.map((item) => this.renderFormItem(item))}
        </Row>,
      ]
    )
  },
})
