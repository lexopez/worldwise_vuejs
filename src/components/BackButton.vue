<script setup>
import { useRouter } from "vue-router";

import SharedButton from "./SharedButton.vue";

const router = useRouter();

function goBack(e) {
  e.preventDefault();
  router.go(-1);
}
</script>

<template>
  <SharedButton type="back" @click="goBack"> &larr; Back </SharedButton>
</template>
