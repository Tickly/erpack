<script>
import dataSource from '../dataSource'
import moment from 'moment'


const columns = [
  { dataIndex: 'name', title: '姓名' },
  { dataIndex: 'age', title: '年龄' },
  { dataIndex: 'gender', title: '性别' },
  {
    dataIndex: 'birthday',
    title: '出生日期',
    customRender: v => moment(v).format('YYYY年MM月DD日')
  },
  { dataIndex: 'address', title: '住址' },
]

export default {
  render () {
    return <a-table rowKey="id" dataSource={dataSource} columns={columns} />
  }
}
</script>