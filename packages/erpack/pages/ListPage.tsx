import Page from './Page'

export default Page.extend({
  name: 'ErpackListPage',
  methods: {
    renderPageBody() {
      return [this.renderForm(), this.renderTable()]
    },
    renderForm() {
      return (
        <a-form>
          <a-form-item>
            <a-button>查询</a-button>
          </a-form-item>
        </a-form>
      )
    },
    renderTable() {
      return <a-table />
    },
  },
})
