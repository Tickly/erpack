<template>
  <a-layout :class="$app.isDark && 'dark-mode'">
    <app-sider />
    <a-layout>
      <a-layout-header>
        <app-navbar />
      </a-layout-header>
      <a-layout-content>
        <app-breadcrumb />
        <div class="page-view">
          <router-view />
        </div>
      </a-layout-content>
      <a-layout-footer>Footer</a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script lang="ts">
import Vue from 'vue'
import AppBreadcrumb from './AppBreadcrumb.vue'
import AppNavbar from './AppNavbar.vue'
import AppSider from './AppSider.vue'

export default Vue.extend({
  name: 'AppLayout',
  components: {
    AppBreadcrumb,
    AppSider,
    AppNavbar,
  },
})
</script>
<style lang="less">
.ant-layout {
  height: 100%;
}
.ant-layout-header {
  padding: 8px 16px;
  line-height: 1;
  height: 56px;
  display: flex;
  align-items: center;
  background-color: #fff;
  border-bottom: 1px solid @border-color;
}
.ant-layout-content {
  padding: 0;
  display: flex;
  flex-direction: column;
}
.ant-layout-footer {
  /* back */
  border-top: 1px solid @border-color;
  padding: 1em;
  text-align: center;
  height: @footer-height;
}

.page-view {
  flex-grow: 1;
  padding: 1em;
  overflow: auto;
}
</style>
