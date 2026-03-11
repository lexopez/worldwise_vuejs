<script setup>
import { RouterView } from "vue-router";
import SpinnerFullPage from "./components/SpinnerFullPage.vue";
</script>

<template>
  <Suspense>
    <template #default>
      <RouterView />
    </template>

    <template #fallback>
      <SpinnerFullPage />
    </template>
  </Suspense>
</template>
<!-- <template>
  <router-view v-slot="{ Component }">
    <template v-if="Component">
      <Suspense :timeout="0">
        <component :is="Component" />

        <template #fallback>
          <SpinnerFullPage />
        </template>
      </Suspense>
    </template>
  </router-view>
</template> -->
<style scoped></style>
