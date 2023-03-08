<script>
export default {
  data () {
    return {
      dataSource: [
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
      ],
      columns: [
        {
          dataIndex: 'name',
          title: <span><a-icon type="smile-o" /> Name</span>,
          customRender: text => <a>{text}</a>
        },
        {
          title: 'Age',
          dataIndex: 'age',
          key: 'age',
        },
        {
          title: 'Address',
          dataIndex: 'address',
          key: 'address',
        },
        {
          title: 'Tags',
          key: 'tags',
          dataIndex: 'tags',
          customRender: (tags) => <span>
            {
              tags.map(tag => <a-tag
                key={tag}
                color={tag === 'loser' ? 'volcano' : tag.length > 5 ? 'geekblue' : 'green'}
              >
                {tag.toUpperCase()}
              </a-tag>)
            }
          </span>
        },
        {
          title: 'Action',
          key: 'action',
          customRender: (text, record) => <span>
            <a>Invite 一 {record.name}</a>
            <a-divider type="vertical" />
            <a>Delete</a>
            <a-divider type="vertical" />
            <a class="ant-dropdown-link"> More actions <a-icon type="down" /> </a>
          </span>
        },
      ]
    }
  },
  render () {
    return <erp-table
      dataSource={this.dataSource}
      columns={this.columns}
    />
  }
}
</script>