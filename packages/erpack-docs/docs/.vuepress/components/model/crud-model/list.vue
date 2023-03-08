<script>
import dataSource from '../dataSource'
import User from '../User'

const columns = [
  'name',
  'age',
  'gender',
  { type: 'date', dataIndex: 'birthday', format: 'YYYY年MM月DD日' },
  'address',
]

export default {
  render () {
    return <erp-table
      rowKey="id"
      dataSource={dataSource}
      columns={columns}
      modelClass={User}
    />
  }
}
</script>