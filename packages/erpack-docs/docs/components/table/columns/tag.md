# TagColumn 标签列

```js
const columns = [
  {
    type: "tag",
    dataIndex: "tags",
    // 如果字段的值是字符串，或者字符串数组，那么无需设置tags
    // 如果字段的值是对象，或者对象数组，那么需要设置tags
    // 传入字符串，表示属性名称，会把对象的该属性显示出来
    text: "label",
    // 传入函数
    text: (tag) => tag.label,
    // 标签的颜色
    // 传入字符串，所有的标签将使用此颜色
    // 传入函数，可以根据当前标签的文本，返回不同的颜色。
    color: "red",
    color: (tag) => {
      return tag.length > 5 ? "red" : "blue";
    },
  },
];
```



## 示例

<table-tag-column />
<<< @/docs/.vuepress/components/table/tag-column.vue