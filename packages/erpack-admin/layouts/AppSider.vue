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
<style lang="less">
.ant-layout-sider {
  background-color: #333;
}
.ant-layout-sider-trigger {
  background-color: #333;
  border-top: 1px solid #444;
}
.app-sider {
  .ant-menu {
    color: #c2c2c2;
    background-color: transparent;
    border-right: none;

    a {
      color: inherit;
    }
  }
}
.app-brand {
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #444;

  a {
    font-size: 1.6em;
    font-weight: bold;
    display: flex;
    // overflow: hidden;
  }

  img {
    width: 32px;
    height: 32px;
    margin-right: 8px;
  }
  .brand-name {
    overflow: hidden;
    white-space: nowrap;
    transition: width 0.2s;
  }
}

.ant-layout-sider-collapsed {
  .app-brand {
    .brand-name {
      width: 0;
    }
  }
}
</style>
