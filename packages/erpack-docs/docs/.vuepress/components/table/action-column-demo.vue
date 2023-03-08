<script>
import zh_CN from 'ant-design-vue/lib/locale-provider/zh_CN';

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
        "#",
        {
          type: "action",
          limit: this.limit,
          showDivider: this.showDivider,
          buttons: [
            {
              text: "查看",
              visible ({ id }) {
                return id > 1;
              },
            },
            {
              text: "编辑",
              visible: (row, index) => {
                return index === 1;
              },
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
          ],
        },
      ];
    },
  },
  render (h) {
    const source = [{ id: 1 }, { id: 2 }, { id: 3 }];

    return (
      <a-config-provider locale={zh_CN}>
        <div>
          <erp-form layout="inline">
            <erp-form-item label="最大按钮数量">
              <a-input-number vModel={this.limit} />
            </erp-form-item>
            <erp-form-item label="显示分割线">
              <a-checkbox vModel={this.showDivider} />
            </erp-form-item>
          </erp-form>
          <erp-table row-key="id" columns={this.columns} data-source={source} />
        </div>
      </a-config-provider>
    );
  },
};
</script>