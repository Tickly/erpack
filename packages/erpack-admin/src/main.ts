import { createApp } from 'vue'
import { createPinia } from 'pinia'
// import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
// import Erpack from 'erpack'
import '../config'
import './styles/index.scss'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia()).use(router).mount('#app')
