import Vue from 'vue'

interface Config {
  isDark?: boolean
  isLocked?: boolean
  isFull?: boolean
}

const defaultConfig: Config = {
  isDark: false,
  isLocked: false,
  isFull: false,
}

export function defineConfig(config: Config) {
  const c = Object.assign({}, defaultConfig, config)
  return Vue.observable(c)
}

const AppConfig = defineConfig({})

Vue.prototype.$app = AppConfig

export default AppConfig
