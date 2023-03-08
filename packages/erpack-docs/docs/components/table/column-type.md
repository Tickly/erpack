# 重新设计表格列的配置

> 思路参考自 [Yii GridView](https://www.yiiframework.com/doc/guide/2.0/zh-cn/output-data-widgets#grid-view)

## 背景

相信你肯定遇到过这样的需求

- 时间需要格式化展示，有的精确到天，有的精确到秒。
- 数字要有千分位分隔符，或者保留几位小数。

针对这些常见需求，为了简化写法，特地将列的配置进行了一次封装，省得每次去写`customRender`。

## 配置项

在[原有表格列的配置](https://www.antdv.com/components/table-cn/#Column)基础上继续扩展配置

| 参数 | 说明                                                                           | 类型     | 默认值 |
| ---- | ------------------------------------------------------------------------------ | -------- | ------ |
| type | 指定列的类型，目前内置了 serial,date,number,tag,action。也可以自己在项目中扩展 | `String` | 'string' |

## 新的写法

<table-column />
<<< @/docs/.vuepress/components/table/column.vue

## 扩展自定义列类型

当你发现，项目中有好几个地方，同样的列写了相同的`customRender`，这时候你就得考虑一下自己扩展一个列类型了。

```js
import { Column } from 'erpack';
class MyColumn extends Column {}
```
