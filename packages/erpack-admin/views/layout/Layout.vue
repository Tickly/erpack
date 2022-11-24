<template>
  <a-layout>
    <app-sider />
    <a-layout>
      <a-layout-header>
        <app-navbar />
      </a-layout-header>
      <a-layout-content>
        <app-breadcrumb />
        <router-view />
      </a-layout-content>
      <a-layout-footer>Footer</a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script lang="ts">
import Vue from "vue";
import AppBreadcrumb from "./AppBreadcrumb.vue";
import AppNavbar from "./AppNavbar.vue";
import AppSider from "./AppSider.vue";

export default Vue.extend({
  name: "AppLayout",
  components: {
    AppBreadcrumb,
    AppSider,
    AppNavbar,
  },
});
</script>
<style>
.ant-layout {
  height: 100%;
}
.ant-layout-header {
  padding: 8px;
  line-height: 1;
  height: 56px;
  display: flex;
  align-items: center;
  background-color: #fff;
  border-bottom: 1px solid #d9d9d9;
}
.ant-layout-content{
  padding: 8px;
}
</style>
