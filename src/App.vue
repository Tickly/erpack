<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue';
</script>

<template>
  <header>123</header>
  <aside>
    <ul>
      <li>button</li>
    </ul>
  </aside>
  <div class="app-main">
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>

    <HelloWorld msg="Vite + Vue" />
  </div>
</template>

<style lang="scss">
#app {
  // display: grid;
  // grid-template-columns: 2;

  header {
    background-color: aquamarine;
  }
  aside {
    background-color: blanchedalmond;
  }
  .app-main {
    background-color: cornflowerblue;
  }
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
