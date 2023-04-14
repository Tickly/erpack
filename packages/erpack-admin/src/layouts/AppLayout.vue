<template>
  <Layout :class="appStore.isDarkMode && 'dark-mode'">
    <app-sider />
    <Layout>
      <LayoutHeader>
        <app-navbar />
      </LayoutHeader>
      <LayoutContent>
        <app-breadcrumb />
        <div class="page-view">
          <router-view />
        </div>
      </LayoutContent>
      <LayoutFooter>Footer</LayoutFooter>
    </Layout>
  </Layout>
</template>
<script lang="ts" setup>
import { useAppStore } from '../store/modules/app'
import AppBreadcrumb from './AppBreadcrumb.vue'
import AppNavbar from './AppNavbar.vue'
import AppSider from './AppSider.vue'
import { Layout, LayoutHeader, LayoutContent, LayoutFooter } from 'ant-design-vue'

const appStore = useAppStore()

// export default Vue.extend({
//   name: 'AppLayout',
//   components: {
//     AppBreadcrumb,
//     AppSider,
//     AppNavbar
//   }
// })
</script>
<style lang="scss">
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
  border-bottom: 1px solid $border-color;
}
.ant-layout-content {
  padding: 0;
  display: flex;
  flex-direction: column;
}
.ant-layout-footer {
  /* back */
  border-top: 1px solid $border-color;
  padding: 1em;
  text-align: center;
  height: $footer-height;
}

.page-view {
  flex-grow: 1;
  padding: 1em;
  overflow: auto;
}
</style>
