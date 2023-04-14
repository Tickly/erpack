import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAppStore = defineStore('app', () => {
  const sidebarCollapsed = ref(false)
  /**
   * Dark Mode
   */
  const isDarkMode = ref(false)
  /**
   * 锁屏
   */
  const locked = ref(false)
  /**
   * 全屏
   */
  const full = ref(false)

  function toggle() {
    sidebarCollapsed.value = !sidebarCollapsed.value
  }

  return {
    sidebarCollapsed,
    isDarkMode,
    locked,
    full,
    toggle
  }
})
