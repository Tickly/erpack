<template>
  <div class="app-navbar">
    <div class="flex-grow-1">
      <a-icon @click="toggle" :type="icon" />
    </div>

    <a-icon
      title="Dark Mode"
      type="thunderbolt"
      :theme="$app.isDark && 'filled'"
      @click="toggleDarkMode"
    />
    <a-icon :type="locked ? 'unlock' : 'lock'" />
    <a-icon :type="full ? 'fullscreen-exit' : 'fullscreen'" />
    <app-user />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions, mapState } from 'vuex'
import AppUser from './AppUser.vue'
export default Vue.extend({
  components: { AppUser },
  data() {
    return {}
  },
  computed: {
    ...mapState('app', ['sidebarCollapsed', 'locked', 'full']),
    icon() {
      return this.sidebarCollapsed ? 'menu-unfold' : 'menu-fold'
    },
  },
  methods: {
    ...mapActions('app', ['toggle']),
    toggleDarkMode() {
      // this.$app
      this.$app.isDark = !this.$app.isDark
    },
  },
})
</script>

<style lang="less">
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
