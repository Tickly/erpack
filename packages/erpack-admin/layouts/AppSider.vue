<template>
  <a-layout-sider
    class="app-sider"
    collapsible
    :collapsed="sidebarCollapsed"
    @collapse="toggle"
    width="256"
  >
    <div class="app-brand">
      <a href="/">
        <img class="brand-logo" src="@/assets/logo.png" />
        <span class="brand-name">Erpack Admin</span>
      </a>
    </div>
    <app-side-menu />
  </a-layout-sider>
</template>
<script lang="ts">
import Vue from 'vue'
import { mapActions, mapState } from 'vuex'
import AppSideMenu from './AppSideMenu'
export default Vue.extend({
  components: { AppSideMenu },
  computed: {
    ...mapState('app', ['sidebarCollapsed']),
  },
  methods: {
    ...mapActions('app', ['toggle']),
  },
})
</script>
