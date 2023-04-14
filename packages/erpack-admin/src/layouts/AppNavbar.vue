<template>
  <div class="app-navbar">
    <div class="flex-grow-1">
      <menu-unfold-outlined v-if="appStore.sidebarCollapsed" @click="appStore.toggle" />
      <menu-fold-outlined @click="appStore.toggle" />
    </div>

    <thunderbolt-outlined
      title="Dark Mode"
      :theme="appStore.isDarkMode && 'filled'"
      @click="toggleDarkMode"
    />

    <unlock-outlined v-if="appStore.locked" />
    <lock-outlined v-else />

    <fullscreen-exit-outlined v-if="appStore.full" />
    <fullscreen-outlined />
    <app-user />
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useAppStore } from '../store/modules/app'
import AppUser from './AppUser.vue'
import {
  UnlockOutlined,
  LockOutlined,
  FullscreenExitOutlined,
  FullscreenOutlined,
  ThunderboltOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined
} from '@ant-design/icons-vue'

const appStore = useAppStore()

function toggleDarkMode() {
  appStore.isDarkMode = !appStore.isDarkMode
}

// export default Vue.extend({
//   components: { AppUser },
//   data() {
//     return {}
//   },
//   computed: {
//     ...mapState('app', ['sidebarCollapsed', 'locked', 'full']),

//   },
//   methods: {
//     ...mapActions('app', ['toggle']),
//     toggleDarkMode() {
//       // this.$app
//       this.$app.isDark = !this.$app.isDark
//     },
//   },
// })
</script>

<style lang="scss">
.app-navbar {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  > .anticon {
    cursor: pointer;
  }
}
</style>
