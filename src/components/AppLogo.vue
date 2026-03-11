<script setup>
import logo from "@/assets/img/logo.png";
</script>
<template>
  <RouterLink to="/">
    <img :src="logo" alt="Worlwise logo" class="logo" />
  </RouterLink>
</template>

<style scoped>
.logo {
  height: 5.2rem;
}
</style>
