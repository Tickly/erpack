import { reactive } from 'vue'

interface Config {
  isDark?: boolean
  isLocked?: boolean
  isFull?: boolean
}

const defaultConfig: Config = {
  isDark: false,
  isLocked: false,
  isFull: false
}

export function defineConfig(config: Config) {
  const c = Object.assign({}, defaultConfig, config)
  return reactive(c)
}

const AppConfig = defineConfig({})

export default AppConfig
