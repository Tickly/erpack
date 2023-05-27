<template>
  <div id="app">
    <div class="flex gap-16" ref="mainRef">
      <FormDemo />
      <a-anchor>
        <a-anchor-link
          v-for="anchor of anchorLinks"
          :key="anchor.title"
          :href="anchor.href"
          :title="anchor.title"
        />
      </a-anchor>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'

import FormDemo from './docs/Form'

const columns = computed(() => {
  return []
})

const tableData = [{ id: 1, name: '张三' }]

interface AnchorLink {
  title: string
  href: string
}
const anchorLinks = ref<AnchorLink[]>([])

const mainRef = ref<HTMLDivElement>()

onMounted(() => {
  console.log(mainRef.value)

  mainRef.value?.querySelectorAll('.ant-card').forEach((el) => {
    console.log(el)
    const tEl = el.querySelector('.ant-card-head-title')
    if (tEl) {
      anchorLinks.value.push({
        title: tEl.innerHTML,
        href: '#' + el.id,
      })
    }
  })
})
</script>

<style>
#app {
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.ant-col-4\.8 {
  display: block;
  box-sizing: border-box;
  width: 20%;
}
</style>
