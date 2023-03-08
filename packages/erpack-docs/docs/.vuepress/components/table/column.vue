<script>
import { notification } from 'ant-design-vue'
export default {
  data () {
    return {
      columns: [
        '#',
        { dataIndex: 'name', title: '用户名' },
        { type: 'date', dataIndex: 'created_at', title: '创建时间' },
        { type: 'date', dataIndex: 'updated_at', title: '更新时间', format: 'YYYY-MM-DD' },
        { type: 'number', dataIndex: 'balance', title: '微信余额' },
        {
          type: 'tag',
          dataIndex: 'tags',
          title: '标签',
          color: tag => tag === 'loser' ? 'volcano' : tag.length > 5 ? 'geekblue' : 'green'
        },
        {
          type: 'action', buttons: [
            {
              text: '编辑',
              click (row) {
                notification.info({ message: row.name })
              }
            },
            {
              text: '删除',
              visible: row => row.balance < 100,
              confirm: '确定要删除吗？',
              click (row) {
                notification.info({ message: `删除${row.name}成功！` })
              }
            },
          ]
        }
      ],
      source: [
        {
          name: '张三',
          created_at: Date.now(),
          updated_at: Date.now(),
          balance: 12345,
          tags: ['nice', 'developer'],
        },
        {
          name: '李四',
          created_at: Date.now(),
          updated_at: Date.now(),
          balance: 1.03,
          tags: ['loser'],
        },
      ]
    }
  },
  render () {
    return <erp-table
      rowKey="name"
      dataSource={this.source}
      columns={this.columns}
    />
  }
}
</script>