# 定义模型

```js
import { Model, Property, NumberProperty } from "erpack";

export default class User extends Model {
  /**
   * 对字段做定义
   */
  properties() {
    return {
      name: new Property({
        label: "姓名",
        required: true,
      }),
      age: new NumberProperty({
        label: "年龄",
        required: true,
        min: 0,
      }),
      gender: new Property({
        label: "性别",
        required: true,
      }),
      birthday: new Property("出生日期"),
      address: new Property("住址"),
    };
  }
}
```
