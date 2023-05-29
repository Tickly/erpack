<template>
  <div id="app" class="h-full">
    <a-layout class="h-full">
      <a-layout class="gap-4">
        <a-layout-sider>
          <a-menu mode="inline" class="h-full">
            <a-menu-item key="1">
              <router-link to="/form">
                <a-icon type="pie-chart" />
                <span>Form</span>
              </router-link>
            </a-menu-item>
            <a-menu-item key="2">
              <router-link to="/table">
                <a-icon type="pie-chart" />
                <span>Table</span>
              </router-link>
            </a-menu-item>
          </a-menu>
        </a-layout-sider>
        <a-layout-content>
          <div class="flex flex-col overflow-auto px-4" ref="mainRef">
            <router-view />
          </div>
        </a-layout-content>
        <a-layout-sider> <Anchor /> </a-layout-sider>
      </a-layout>
    </a-layout>
  </div>
</template>
<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import Anchor from './Anchor.vue'

import FormDemo from '../docs/Form'

const columns = computed(() => {
  return []
})

const tableData = [{ id: 1, name: '张三' }]

const mainRef = ref<HTMLDivElement>()
</script>

<style lang="scss">
html,
body {
  height: 100%;
}

#app {
  .ant-layout-sider {
    background-color: transparent;
  }
  main {
    &::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>
