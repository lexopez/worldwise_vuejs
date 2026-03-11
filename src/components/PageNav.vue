<script setup>
import AppLogo from "./AppLogo.vue";
</script>

<template>
  <nav class="nav">
    <AppLogo />
    <ul>
      <li>
        <RouterLink to="pricing">Pricing</RouterLink>
      </li>
      <li>
        <RouterLink to="product">Product</RouterLink>
      </li>
      <li>
        <RouterLink to="login" class="ctaLink">Login</RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav ul {
  list-style: none;
  display: flex;
  align-items: center;
  gap: 4rem;
}

.nav a:link,
.nav a:visited {
  text-decoration: none;
  color: var(--color-light--2);
  text-transform: uppercase;
  font-size: 1.5rem;
  font-weight: 600;
}

.nav a.router-link-exact-active {
  color: var(--color-brand--2);
}

a.ctaLink:link,
a.ctaLink:visited {
  background-color: var(--color-brand--2);
  color: var(--color-dark--0);
  padding: 0.8rem 2rem;
  border-radius: 7px;
}
</style>
