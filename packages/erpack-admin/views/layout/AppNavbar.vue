<template>
  <div>
    <a-icon @click="toggle" :type="icon" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions, mapState } from 'vuex'
export default Vue.extend({
  computed: {
    ...mapState('app', ['sidebarCollapsed']),
    icon() {
      return this.sidebarCollapsed ? 'menu-unfold' : 'menu-fold'
    },
  },
  methods: {
    ...mapActions('app', ['toggle']),
  },
})
</script>
