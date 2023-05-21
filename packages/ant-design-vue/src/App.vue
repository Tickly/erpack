<template>
  <div id="app">
    <div class="flex">
      <div class="flex-grow flex flex-col gap-16">
        <a-card title="行内模式">
          <Form inline :items="formItems" />
        </a-card>
        <a-card title="1列">
          <Form :column="1" :items="formItems" />
        </a-card>
        <a-card title="2列">
          <Form :column="2" :items="formItems" />
        </a-card>
        <a-card title="3列">
          <Form :column="3" :items="formItems" />
        </a-card>
        <a-card title="4列">
          <Form :column="4" :items="formItems" />
        </a-card>
        <a-card title="控制字段显示状态">
          <Form :column="3" :items="itemsVisible" />
        </a-card>
      </div>
      <a-anchor>
        <a-anchor-link
          href="#components-anchor-demo-basic"
          title="Basic demo"
        />
      </a-anchor>
    </div>
  </div>
</template>
<script setup lang="ts">
import Table from './components/Table'
import Descriptions from './components/Descriptions'
import Form from './components/Form'
import { computed } from 'vue'
import { useFormItems } from './components'

const columns = computed(() => {
  return []
})

const tableData = [{ id: 1, name: '张三' }]

const formItems = [
  //
  { label: 'a' },
  { label: 'b' },
  { label: 'c' },
  { label: 'd' },
  { label: 'e' },
  { label: 'f' },
  { label: 'g' },
]

const itemsVisible = useFormItems([
  //
  { label: 'a' },
  { label: 'b', visible: () => false },
])
</script>

<style>
#app {
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}
</style>
