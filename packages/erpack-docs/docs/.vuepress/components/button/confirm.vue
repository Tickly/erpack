<script>
import { message } from 'ant-design-vue'
export default {
  methods: {
    handleDelete () {
      message.success('删除成功！')
    }
  },
  render () {
    return (
      <div>
        <erp-button type="danger" icon="delete" on-click={this.handleDelete}>删除</erp-button>
        <erp-button confirm="确定要删除吗？" type="danger" icon="delete" on-click={this.handleDelete}>删除(二次确认)</erp-button>
      </div>
    );
  },
};
</script>