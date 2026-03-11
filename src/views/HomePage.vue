<script setup>
import PageNav from "@/components/PageNav.vue";
import { RouterLink } from "vue-router";
</script>

<template>
  <main class="homepage">
    <PageNav />

    <section>
      <h1>
        You travel the world.
        <br />
        WorldWise keeps track of your adventures.
      </h1>
      <h2>
        A world map that tracks your footsteps into every city you can think of.
        Never forget your wonderful experiences, and show your friends how you
        have wandered the world.
      </h2>
      <RouterLink to="login" class="cta">Start tracking now</RouterLink>
    </section>
  </main>
</template>

<style scoped>
.homepage {
  height: calc(100vh - 5rem);
  margin: 2.5rem;
  background-image:
    linear-gradient(rgba(36, 42, 46, 0.8), rgba(36, 42, 46, 0.8)),
    url("/bg.jpg");
  background-size: cover;
  background-position: center;
  padding: 2.5rem 5rem;
}

.homepage section {
  display: flex;
  flex-direction: column;
  height: 85%;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;
  text-align: center;
}

.homepage h1 {
  font-size: 4.5rem;
  line-height: 1.3;
}

.homepage h2 {
  width: 90%;
  font-size: 1.9rem;
  color: var(--color-light--1);
  margin-bottom: 2.5rem;
}
</style>
