<script setup lang="ts">
import SpinnerPage from "./SpinnerPage.vue";
</script>

<template>
  <div class="spinnerFullpage">
    <SpinnerPage />
  </div>
</template>

<style scoped>
.spinnerFullpage {
  margin: 2.5rem;
  height: calc(100vh - 5rem);
  background-color: var(--color-dark--1);
}
</style>
