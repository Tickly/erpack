<script>
export default {
  data() {
    return {
      form: {
        username: 'Zhou Maomao',
        telephone: '1810000000',
        live: 'Hangzhou, Zhejiang',
        remark: 'empty',
        address:
          'No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China',
      },
    };
  },
  render() {
    const { form } = this;

    return (
      <div>
        <a-descriptions bordered>
          <a-descriptions-item span="3" label="用户名">
            {form.username}
          </a-descriptions-item>
          <a-descriptions-item label="电话号码">
            {form.telephone}
          </a-descriptions-item>
          <a-descriptions-item label="居住地">{form.live}</a-descriptions-item>
          <a-descriptions-item label="简介">{form.remark}</a-descriptions-item>
          <a-descriptions-item label="详细地址">
            {form.address}
          </a-descriptions-item>
          <a-descriptions-item label="其余的值">123</a-descriptions-item>
        </a-descriptions>
        <br />
        <erp-descriptions
          bordered
          form={form}
          items={[
            { prop: 'username', label: '用户名', span: 3 },
            { prop: 'telephone', label: '电话号码' },
            { prop: 'live', label: '居住地' },
            { prop: 'remark', label: '简介' },
            { prop: 'address', label: '详细地址' },
            { label: '其余的值', value: '123' },
          ]}
        />
      </div>
    );
  },
};
</script>
