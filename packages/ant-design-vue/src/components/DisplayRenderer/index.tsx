import Vue from 'vue'

export default Vue.extend({
  name: 'DisplayRenderer',
  render(h) {
    return h('div', 'display')
  },
})
