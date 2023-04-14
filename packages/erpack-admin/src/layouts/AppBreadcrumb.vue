<template>
  <Breadcrumb class="app-breadcrumb">
    <BreadcrumbItem v-for="item in list" :key="item.title">
      <router-link :to="item.path">{{ item.title }}</router-link>
    </BreadcrumbItem>
  </Breadcrumb>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { Breadcrumb, BreadcrumbItem } from 'ant-design-vue'

const list = ref<breadcrumb[]>([])

interface breadcrumb {
  title: string
  path: string
}

// export default Vue.extend({
//   name: 'AppBreadcrumb',
//   data() {
//     return {
//       list: [] as breadcrumb[],
//     }
//   },
//   watch: {
//     $route() {
//       this.parseBreadcrumbs()
//     },
//   },
//   mounted() {
//     this.parseBreadcrumbs()
//   },
//   methods: {
//     parseBreadcrumbs() {
//       const list: breadcrumb[] = []
//       console.log(this.$route.matched)

//       this.$route.matched.forEach((route) => {
//         const {
//           path,
//           meta: { title },
//         } = route

//         if (title) {
//           list.push({
//             title,
//             path: path || '/',
//           })
//         }
//       })

//       this.list = list
//     },
//   },
// })
</script>
<style lang="scss">
.app-breadcrumb {
  text-align: left;
  padding: 1em;
}
</style>
