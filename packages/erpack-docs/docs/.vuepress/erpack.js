import antdv from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import erpack from 'erpack'
import 'erpack/dist/erpack.css'

export default {
  install (Vue) {
    Vue.use(antdv)
    Vue.use(erpack)
  }
}