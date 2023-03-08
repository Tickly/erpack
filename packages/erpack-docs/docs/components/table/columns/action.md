# ActionColumn 操作列

为了整体交互统一，提供了一个操作列。（效果见顶部）

你总不想有的页面表格操作是按钮，有的页面表格操作是文本按钮，这样就很奇怪。

---

提供一个参数，可以控制最多显示的按钮数量，当按钮过多时，会自动放入【更多】按钮下拉菜单中。

## 示例

<table-action-column-demo />
<<< @/docs/.vuepress/components/table/action-column-demo.vue

## Column 参数

| 参数         | 类型    | 说明                                                                                          |
| ------------ | ------- | --------------------------------------------------------------------------------------------- |
| type         | `string`  | 必须指定为 'action'                                                                           |
| buttons      | Array   | 按钮列表，详细配置见下文                                                                      |
| limit        | Number  | 定义一个数字，表示当超过几个按钮后，将剩余的按钮放到【更多】下拉菜单中。设置为 0 表示全部展示 |
| show-divider | Boolean | 是否在按钮之间显示分割线                                                                      |

## Button 配置

| 参数    | 类型     | 说明                                                                                           |
| ------- | -------- | ---------------------------------------------------------------------------------------------- |
| text    | `string`   | 按钮文本                                                                                       |
| click   | `Function` | 点击事件，有两个参数依次是当前行的数据，当前行的索引                                           |
| confirm | `string`   | 确认提示，如果设置了该值，点击按钮会弹出一个确认框，点击确定之后才会触发 click 事件            |
| visible | `Function` | 控制按钮是否可见的回调，返回 true 即表示按钮可见。有两个参数依次是当前行的数据，当前行的索引。 |

## 配置示例

```js
const columns = [
  {
    type: "action",
    buttons: [
      {
        text: "编辑",
        click(row, index) {},
      },
      {
        text: "删除",
        confirm: "确定要删除吗？",
        visible(row) {
          // 数据没发布，就显示删除按钮
          return !row.published;
        },
        click(row, index) {},
      },
    ],
  },
];
```
