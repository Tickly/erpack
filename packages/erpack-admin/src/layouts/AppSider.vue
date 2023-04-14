<template>
  <LayoutSider
    class="app-sider"
    collapsible
    :collapsed="appStore.sidebarCollapsed"
    @collapse="appStore.toggle"
    width="256"
  >
    <div class="app-brand">
      <a href="/">
        <img class="brand-logo" src="@/assets/logo.png" />
        <span class="brand-name">Erpack Admin</span>
      </a>
    </div>
    <app-side-menu />
  </LayoutSider>
</template>
<script lang="ts" setup>
import { useAppStore } from '@/store/modules/app'
import AppSideMenu from './AppSideMenu'
import { LayoutSider } from 'ant-design-vue'

const appStore = useAppStore()

// export default Vue.extend({
//   components: { AppSideMenu },
//   computed: {
//     ...mapState('app', ['sidebarCollapsed']),
//   },
//   methods: {
//     ...mapActions('app', ['toggle']),
//   },
// })
</script>
