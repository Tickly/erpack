<script>
import { Model, Property } from 'erpack'

class User extends Model {
  properties () {
    return {
      name: new Property('姓名'),
      age: new Property('年龄'),
      address: new Property('地址'),
      tags: new Property('标签'),
    }
  }
}

const dataSource = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
]

const columns = [
  '#',
  'name',
  'age',
  'address',
  'tags',
]

export default {
  render () {
    return <erp-table
      modelClass={User}
      columns={columns}
      dataSource={dataSource}
    />
  }
}
</script>