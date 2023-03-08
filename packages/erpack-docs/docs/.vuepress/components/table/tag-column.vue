<script>
export default {
  render () {
    return <erp-table
      dataSource={[
        {
          key: 1,
          tagsString: 'Hello',
          tags: ['a', 'b'],
          tagsObjArray: [
            { label: 'a', value: 1 },
            { label: 'b', value: 2 },
          ],
          tagsObj: {
            label: 'a',
            value: 1,
          },
        },
        {
          key: 2,
          tagsString: 'World',
          tags: ['c', 'd'],
          tagsObjArray: [
            { label: 'c', value: 3 },
            { label: 'd', value: 4 },
          ],
          tagsObj: {
            label: 'c',
            value: 3,
          }
        },
      ]}
      columns={[
        '#',
        {
          type: 'tag',
          dataIndex: 'tags',
          title: '字符串数组',
        },
        {
          type: 'tag',
          dataIndex: 'tagsString',
          title: '字符串',
        },
        {
          type: 'tag',
          dataIndex: 'tagsObj',
          title: '对象',
          text: 'label',
        },
        {
          type: 'tag',
          dataIndex: 'tagsObjArray',
          text: 'label',
          title: '对象数组，指定属性',
          color: 'red',
        },
        {
          type: 'tag',
          key: 'tagsObjArrayFn',
          dataIndex: 'tagsObjArray',
          title: '对象数组，函数用法',
          text: tag => tag.label,
          color: tag => tag === 'a' ? 'red' : 'blue'
        },
      ]}
    />
  }
}
</script>