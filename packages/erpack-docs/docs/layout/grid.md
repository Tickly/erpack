# Grid 布局

## Grid 组件

| 参数    | 类型              | 说明                                                                                                                 |
| ------- | ----------------- | -------------------------------------------------------------------------------------------------------------------- |
| rows    | `String` `Number` | 用来设置`grid-template-rows`的值。如果传`Number`则会生成 N 行，每行的高度都是一样的。如果传`String`则是原样输出。    |
| columns | `String` `Number` | 用来设置`grid-template-columns`的值。如果传`Number`则会生成 N 列，每列的宽度都是一样的。如果传`String`则是原样输出。 |
| gap     | `String`          | 用来设置`grid-gap`的值。                                                                                             |

## GridItem 组件

| 参数   | 类型              | 说明                                                                                   |
| ------ | ----------------- | -------------------------------------------------------------------------------------- |
| row    | `String` `Number` | 用来设置`grid-row`的值。如果传`Number`则表示跨越 N 行。如果传`String`则是原样输出。    |
| column | `String` `Number` | 用来设置`grid-column`的值。如果传`Number`则表示跨越 N 列。如果传`String`则是原样输出。 |

## 示例
::: code-example grid/demo-1.vue
:::
