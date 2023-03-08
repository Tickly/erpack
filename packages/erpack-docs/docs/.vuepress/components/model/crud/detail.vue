<script>
import dataSource from '../dataSource'
const user = dataSource[0]

export default {
  render () {
    return <a-descriptions bordered>
      <a-descriptions-item label="姓名">{user.name}</a-descriptions-item>
      <a-descriptions-item label="年龄">{user.age}</a-descriptions-item>
      <a-descriptions-item label="性别">{user.gender}</a-descriptions-item>
      <a-descriptions-item label="出生日期">{user.birthday}</a-descriptions-item>
      <a-descriptions-item label="住址">{user.address}</a-descriptions-item>
    </a-descriptions>
  }
}
</script>