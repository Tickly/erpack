<template>
  <a-breadcrumb class="app-breadcrumb">
    <a-breadcrumb-item v-for="item in list" :key="item.title">
      <router-link :to="item.path">{{ item.title }}</router-link>
    </a-breadcrumb-item>
  </a-breadcrumb>
</template>
<script lang="ts">
import Vue from "vue";

interface breadcrumb {
  title: string;
  path: string;
}

export default Vue.extend({
  name: "AppBreadcrumb",
  data() {
    return {
      list: [] as breadcrumb[],
    };
  },
  watch: {
    $route() {
      this.parseBreadcrumbs();
    },
  },
  mounted() {
    this.parseBreadcrumbs();
  },
  methods: {
    parseBreadcrumbs() {
      const list: breadcrumb[] = [];
      console.log(this.$route.matched);

      this.$route.matched.forEach((route) => {
        const {
          path,
          meta: { title },
        } = route;

        if (title) {
          list.push({
            title,
            path: path || "/",
          });
        }
      });

      this.list = list;
    },
  },
});
</script>
<style lang="less">
.app-breadcrumb {
  text-align: left;
}
</style>
