import { Module } from 'vuex'

const state = {
  sidebarCollapsed: false,
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
