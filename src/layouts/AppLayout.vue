<script setup>
import SideBar from "@/components/SideBar.vue";
import UserView from "@/features/user/UserView.vue";
import MapToForm from "@/features/map/MapToForm.vue";
</script>

<template>
  <div class="app">
    <SideBar />
    <MapToForm />
    <UserView />
  </div>
</template>

<style scoped>
.app {
  height: 100vh;
  padding: 2.4rem;
  overscroll-behavior-y: none;
  display: flex;
  position: relative;
}
</style>
