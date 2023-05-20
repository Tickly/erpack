import { defineComponent, h } from 'vue'
import type { PropType, VNode } from 'vue'
import { Col, Form, Input, Row } from 'ant-design-vue'
import type { FormItemConfig } from './FormItemConfig'

export default defineComponent({
  props: {
    inline: Boolean,
    /**
     * 非inline模式下有效
     */
    column: {
      type: Number,
      default: 1,
    },
    items: {
      type: Array as PropType<Array<FormItemConfig | FormItemConfig[]>>,
    },
  },
  methods: {
    renderFormItem(item: FormItemConfig | FormItemConfig[]) {
      if (Array.isArray(item)) {
        const span = 24 / item.length
        return (
          <Row gutter={24}>
            {item.map((i) => {
              return <Col span={span}>{this.renderFormItem(i)}</Col>
            })}
          </Row>
        )
      } else {
        return (
          <Col>
            {h(
              Form.Item,
              {
                props: {
                  label: item.label,
                },
              },
              [<Input />]
            )}
          </Col>
        )
      }
    },
  },
  render(h): VNode {
    return h(
      Form,
      {
        props: {
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
