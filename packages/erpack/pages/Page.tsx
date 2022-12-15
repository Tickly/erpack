import Vue, { VNode } from 'vue'

export default Vue.extend({
  name: 'ErpackPage',
  methods: {
    renderPageBody(): string {
      return 'Erpack Page'
    },
    renderPage(): VNode {
      return <div class="erpack-page">{this.renderPageBody()}</div>
    },
  },
  render(): VNode {
    return this.renderPage()
  },
})
