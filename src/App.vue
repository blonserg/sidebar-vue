<script setup lang="ts">
import { RouterView } from 'vue-router'
import SidebarMenu from '@/components/SidebarMenu.vue';

</script>

<template>
  <div id="root">
    <SidebarMenu class="sidebar" />
    <RouterView class="router-view" />
  </div>
</template>

<style scoped lang="scss">
#root {
  display: grid;
  grid-template-areas: 'sidebar router-view';
  grid-template-columns: auto 1fr;
  font-family: sans-serif;
}

.sidebar {
  grid-area: 'sidebar';

  @media all and (max-width: 768px) {
    position: absolute;
  }
}

.router-view {
  grid-area: 'router-view';
  padding: 1rem;

  @media all and (max-width: 768px) {
    margin-left: 6rem;
  }
}
</style>
