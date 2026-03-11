<script setup>
defineProps({ message: String });
</script>
<template>
  <p class="message"><span role="img">👋</span> {{ message }}</p>
</template>

<style scoped>
.message {
  text-align: center;
  font-size: 1.8rem;
  width: 80%;
  margin: 2rem auto;
  font-weight: 600;
}
</style>
