<template>
  <a-anchor class="h-full">
    <a-anchor-link
      v-for="anchor of anchorLinks"
      :key="anchor.title"
      :href="anchor.href"
      :title="anchor.title"
    />
  </a-anchor>
</template>
<script setup lang="ts">
import { computed, nextTick, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router/composables'
const router = useRouter()

interface AnchorLink {
  title: string
  href: string
}

const anchorLinks = ref<AnchorLink[]>([])

function update() {
  anchorLinks.value = []
  nextTick(() => {
    const mainEl = document.querySelector('main')
    // console.log(mainEl)
    if (mainEl) {
      const cards = mainEl?.querySelectorAll('.ant-card')
      // console.log(cards)
      cards.forEach((el) => {
        // console.log(el)
        const tEl = el.querySelector('.ant-card-head-title')
        if (tEl) {
          anchorLinks.value.push({
            title: tEl.innerHTML,
            href: '#' + el.id,
          })
        }
      })
    }
  })
}

onMounted(() => {
  update()
})

router.afterEach(() => {
  console.log('afterEach')
  update()
})
</script>
