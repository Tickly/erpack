<template>
  <div id="app">
    <!-- <Table :data-source="tableData" /> -->
    <a-card>
      <Form :column="2" :items="formItems" />
    </a-card>
    <!-- <Descriptions /> -->
  </div>
</template>
<script setup lang="ts">
import Table from './components/Table'
import Descriptions from './components/Descriptions'
import Form from './components/Form'
import { computed } from 'vue'

const columns = computed(() => {
  return []
})

const tableData = [{ id: 1, name: '张三' }]

const formItems = [
  //
  { label: 'a' },
  [{ label: 'b' }, { label: 'c' }],
]
</script>

<style>
#app {
  padding: 24px;
}
</style>
