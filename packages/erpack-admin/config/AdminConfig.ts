import Vue from 'vue'

export const AppConfig = Vue.observable({
  /**
   * 是否为暗黑模式
   */
  isDarkMode: false,
  /**
   * 是否为标签模式
   * 此模式下，每次打开页面，会以标签的形式打开，原先的页面不会关闭
   */
  isTabsMode: false,
  /**
   * 是否缓存页面
   * todo 如果开启了缓存，还需要支持设置哪些页面不缓存。
   * 在路由meta里面直接设置
   * 或者是没有开启，但是需要哪些页面开启的需求。
   */
  isKeepAlive: false,
})
