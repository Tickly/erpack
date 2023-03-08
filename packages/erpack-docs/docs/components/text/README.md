# Text 文本组件

## Demo

下面是一些示例
::: code-example text/demo.vue
:::

## Props

| 参数名称  | 说明           | 类型                    |
| --------- | -------------- | ----------------------- |
| text      | 需要展示的文本 | `*`                     |
| formatter | 格式化方法     | `Function(text):string` |
| colors    | 颜色           | `object<string, any>`   |

## 参数详解

### text

需要展示的文本内容

### formatter

支持传入一个格式化方法，对内容进行格式化输出。

---

例如，要展示年龄字段，拿到的数据是一个数字`18`，这时候就配合`formatter`展示成`18岁`

### colors

参照`Bootstrap`的设计，内置了几个文本颜色的样式。

- <span class="erp-text-primary">primary</span>
- <span class="erp-text-secondary">secondary</span>
- <span class="erp-text-success">success</span>
- <span class="erp-text-danger">danger</span>
- <span class="erp-text-warning">warning</span>
- <span class="erp-text-info">info</span>

---

例如，需要展示某个数据，希望当数据超过一定数值之后展示成红色

```js
const colors = {
  /**
   * 函数形式
   * value 是组件的text
   * 这个就表示，当value小于80之后，会有danger的样式
   */
  danger: (value) => value < 80,
  /**
   * 非函数形式，组件会直接判断该值与text是否全等
   */
  success: 100,
};
```

## todo

- 提供一个参数，允许设置是否超过宽度将自动省略。
- 提供一个参数，允许设置是否自动生成 title 属性，这样鼠标放上去可以展示数据。
