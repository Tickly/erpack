# Descriptions 描述列表

通过数组的形式来展示数据

## bordered 是否显示边框

## column 列的数量

## form 数据对象

## labelWidth 文本单元格的宽度

- 设置为数字，表示占几个字体大小的宽度。
- 设置为字符串，就自己写具体单位。

## items 字段列表

| 参数      | 说明                                 | 类型             |
| --------- | ------------------------------------ | ---------------- |
| label     | 描述文本                             | `String` `VNode` |
| value     | 描述的内容                           |
| prop      | 字段值，会自动从 form 中获取值去展示 | `String`         |
| formatter | 格式器，比如可以对数字，日期做格式化 | `Function`       |

## 对比原组件

::: code-example descriptions/basic.vue
:::

## 配合模型
::: code-example descriptions/with-model.vue
:::