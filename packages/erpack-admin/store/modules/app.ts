import { Module } from 'vuex'

const state = {
  sidebarCollapsed: false,
  /**
   * Dark Mode
   */
  isDark: false,
  /**
   * 锁屏
   */
  locked: false,
  /**
   * 全屏
   */
  full: false,
}

export default {
  namespaced: true,
  state,
  actions: {
    toggle({ state }) {
      state.sidebarCollapsed = !state.sidebarCollapsed
    },
  },
} as Module<typeof state, any>
