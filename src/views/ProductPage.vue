<script setup>
import PageNav from "@/components/PageNav.vue";
</script>

<template>
  <main class="product">
    <PageNav />

    <section>
      <img
        src="/img-1.jpg"
        alt="person with dog overlooking mountain with sunset"
      />
      <div>
        <h2>About WorldWide.</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo est
          dicta illum vero culpa cum quaerat architecto sapiente eius non
          soluta, molestiae nihil laborum, placeat debitis, laboriosam at fuga
          perspiciatis?
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
          doloribus libero sunt expedita ratione iusto, magni, id sapiente sequi
          officiis et.
        </p>
      </div>
    </section>
  </main>
</template>

<style scoped>
.product {
  margin: 2.5rem;
  padding: 2.5rem 5rem;
  background-color: var(--color-dark--1);
  min-height: calc(100vh - 5rem);
}

.product section {
  width: clamp(80rem, 80%, 90rem);
  margin: 6rem auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 7rem;
  align-items: center;
}

.product img {
  width: 100%;
}

.product h2 {
  font-size: 4rem;
  line-height: 1.2;
  margin-bottom: 3rem;
}

.product p {
  font-size: 1.6rem;
  margin-bottom: 2rem;
}

.product section a {
  margin-top: 2rem;
}
</style>
