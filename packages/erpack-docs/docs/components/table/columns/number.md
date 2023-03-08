# NumberColumn 数字列

数字的展示，最常见的就是千分位分割了，不然数值比较大的时候，很难一眼看个大概。

使用[numeral.js](http://numeraljs.com/#format)作为数字格式化工具。

```js
const columns = [
  {
    // 指定该列为数字列
    type: "number",
    dataIndex: "balance",
    // 可以快速设置数字格式，格式化使用 numeral.js
    format: "0,0.00",
  },
];
```
