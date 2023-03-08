<script>
import zh_CN from 'ant-design-vue/lib/locale-provider/zh_CN';
import { ActionButtons } from 'erpack'

export default {
  data () {
    return {
      limit: 0,
      showDivider: true,
    };
  },
  computed: {
    columns () {
      return [
        { title: '序号', customRender: (v, r, i) => i + 1 },
        {
          title: '操作',
          customRender: this.renderActionColumn
        },
      ];
    },
  },
  methods: {
    renderActionColumn (v, record, index) {
      const { id } = record

      const buttons = [
        {
          text: "查看",
          visible: id > 1,
        },
        {
          text: "编辑",
          visible: () => index === 1,
          icon: 'edit',
        },
        {
          text: "删除",
          confirm: "确定删除？",
          click () {
            console.log("已删除");
          },
        },
        {
          text: "启用",
          confirm: "确定启用？",
          click (row, index) {
            console.log("已启用", row, index);
          },
        },
        { text: "禁用" },
      ]

      return <ActionButtons limit={this.limit} showDivider={this.showDivider} buttons={buttons} />
    }
  },
  render (h) {
    const source = [{ id: 1 }, { id: 2 }, { id: 3 }];

    return (
      <a-config-provider locale={zh_CN}>
        <div>
          <a-form layout="inline">
            <a-form-item label="最大按钮数量">
              <a-input-number min={0} vModel={this.limit} />
            </a-form-item>
            <a-form-item label="显示分割线">
              <a-checkbox vModel={this.showDivider} />
            </a-form-item>
          </a-form>
          <a-table row-key="id" columns={this.columns} data-source={source} />
        </div>
      </a-config-provider>
    );
  },
};
</script>