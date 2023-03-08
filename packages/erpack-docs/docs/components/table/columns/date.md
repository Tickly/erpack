# DateColumn 时间列

一般时间都需要格式化展示，相比于写`customRender`，还是直接指定`format`更方便。

使用[moment.js](https://momentjs.com/docs/#/displaying/format/)作为时间格式化工具。

```js
const columns = [
  {
    // 指定该列为日期列
    type: "date",
    dataIndex: "created_at",
    // 可以快速设置时间格式，格式化使用 moment.js
    format: "YYYY-MM-DD",
  },
];
```

## 配置项

继承自`TextColumn`

| 参数   | 说明 | 类型 | 默认值 |
| ------ | ---- | ---- | ------ |
| format |
