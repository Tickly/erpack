import Vue from 'vue'

export default Vue.extend({
  props: {
    icon: String,
    title: String,
  },
  render() {
    return (
      <a-menu-item>
        <div>
          {this.icon && <a-icon type={this.icon} />}
          <span title={this.title}>{this.title}</span>
        </div>
      </a-menu-item>
    )
  },
})
