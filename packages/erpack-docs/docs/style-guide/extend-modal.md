# 编写一个弹框组件

也许你会觉得，弹框有什么好说的？无非就是在页面中码一些代码咯。

```vue
<template>
  <div>
    ...
    <a-modal
      title="弹框标题"
      :visible="modalVisible"
      @ok="onModalOk"
      @cancel="onModalCancel"
    >
      ...弹框内容
    </a-modal>
  </div>
</template>
<script>
export default {
  data() {
    return {
      modalVisible: false,
    };
  },
  methods: {
    // 弹框确定
    onModalOk() {
      this.validate().submit().closeModal().reloadTable();
    },
    onModalCancel() {
      this.modalVisible = false;
    },
  },
};
</script>
```

但是系统里面肯定不止一个弹框吧？我可不想每次都去处理visible，再说也不想污染页面代码，弹框与页面各论各的。

所以最好是能够有一个方法，能够快速的生成一个弹框组件，避免重复写一些业务无关代码（比如这里弹框的关闭事件）。

所以提供一个`ModalMixin.js`用来快速制作弹框。

```jsx
export default {
  mixins: [ModalMixin],
  data() {
    return {
      title: "弹框标题",
    };
  },
  methods: {
    renderModalBody() {
      return <div>...弹框内容</div>;
    },
  },
};
```

## 弹框类型

我接触到的弹框，基本可以先分为两大类。

- 查看数据
- 获取数据

### 查看数据类型的弹框

这一类的弹框很简单，footer 通常只有一个【关闭】按钮，或者 footer=null。

### 获取数据类型的弹框

比如【新增】【修改】的弹框，这个弹框就得给到我【表单数据】或者【保存结果】，方便弹框的调用者根据结果做下一步数据。
比如【选择 XXX】的弹框，也是要给到调用者一个【选中数据】。

## Promise 形式的弹框

这样盘下来，一个理想的效果是，弹框组件提供一个方法去显示弹框，然后该方法的返回结果是一个`Promise`对象，在点击弹框的【确定】按钮之后，`Promise`对象的状态变为`fulfilled`，点击【关闭】按钮之后，`Promise`对象的状态变为`rejected`。

```js
// 添加用户
this.$refs.userEditor
  // 打开弹框
  .create()
  // 点击确定之后，弹框内部会做【验证】【保存】
  .then(() => {
    // 添加了用户之后刷新表格
    this.$refs.table.reload();
  });

// 修改用户
this.$refs.userEditor.edit(user).then(() => {
  this.$refs.table.reload();
});

// 选择用户
this.$refs.userSelector
  // 打开弹框选择用户
  .open()
  // 点击确定之后，页面提交搜索条件。
  .then((users) => {
    this.$refs.search.search({ userIds: users });
  });
```

## 最终效果

在列表页面，表格中有个修改按钮，要求点击之后通过弹框修改内容。

```js
const buttons = [
  {
    text: "修改",
    click: (v, row) => {
      // 引用弹框
      // 调用编辑方法
      // 编辑完，点击确定按钮后，弹框自动提交请求保存数据，保存成功之后再刷新当前列表
      this.$refs.itemModal.edit(row).then(this.reloadTable);
    },
  },
];
```
