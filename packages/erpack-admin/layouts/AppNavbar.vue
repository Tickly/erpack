<template>
  <div class="app-navbar">
    <div class="flex-grow-1">
      <a-icon @click="toggle" :type="icon" />
    </div>

    <a-icon :type="locked ? 'unlock' : 'lock'" />
    <a-icon :type="full ? 'fullscreen-exit' : 'fullscreen'" />
    <div class="user">
      <a-badge :count="1"><a-avatar shape="square" icon="user" /></a-badge>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions, mapState } from 'vuex'
export default Vue.extend({
  computed: {
    ...mapState('app', ['sidebarCollapsed', 'locked', 'full']),
    icon() {
      return this.sidebarCollapsed ? 'menu-unfold' : 'menu-fold'
    },
  },
  methods: {
    ...mapActions('app', ['toggle']),
  },
})
</script>

<style lang="less">
.app-navbar {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
</style>
