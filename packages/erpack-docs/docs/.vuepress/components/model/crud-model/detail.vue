<script>
import dataSource from '../dataSource'
import User from '../User'
const user = new User(dataSource[0])

const items = [
  'name', 'age', 'gender',
  'birthday', 'address'
]

export default {
  render () {
    return <erp-descriptions
      bordered
      form={user}
      items={items}
    />
  }
}
</script>