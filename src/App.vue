<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <!-- <router-view v-slot="{ Component, route }">
    <transition name="route" mode="out-in">
      <div :key="route.fullPath">
        <component :is="Component" />
      </div>
    </transition>
  </router-view> -->
  <router-view></router-view>
</template>

<style scoped>
.route-enter-from {
  opacity: 0;
}
.route-enter-active {
  transition: all 0.3s ease-out;

}
.route-leave-to {
  opacity: 0;
}
.route-leave-active {
  transition: all 0.3s ease-in;
}

html {
  scroll-behavior: smooth;
}
</style>