<script setup>
import BackButton from "@/components/BackButton.vue";

const { emoji, cityName, date, notes } = {
  cityName: "Lisbon",
  country: "Portugal",
  emoji: "🇵🇹",
  date: "2027-10-31T15:59:59.138Z",
  notes: "My favorite city so far!",
  position: {
    lat: 38.727881642324164,
    lng: -9.140900099907554,
  },
  id: 73930385,
};

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
</script>
<template>
  <div class="city">
    <div class="row">
      <h6>City name</h6>
      <h3>
        <span>{{ emoji }}</span> {{ cityName }}
      </h3>
    </div>

    <div class="row">
      <h6>You went to {{ cityName }} on</h6>
      <p>{{ formatDate(date || null) }}</p>
    </div>

    <div class="row" v-if="notes !== ''">
      <h6>Your notes</h6>
      <p>{{ notes }}</p>
    </div>

    <div class="row">
      <h6>Lear more</h6>
      <a
        :href="`https://en.wikipedia.org/wiki/${cityName}`"
        target="_blank"
        rel="noreferrer"
      >
        Check out {{ cityName }} on Wikipedia &rarr;</a
      >
    </div>
    <div>
      <BackButton />
    </div>
  </div>
</template>

<style scoped>
.city {
  padding: 2rem 3rem;
  max-height: 70%;
  background-color: var(--color-dark--2);
  border-radius: 7px;
  overflow: scroll;

  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.row {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.city h6 {
  text-transform: uppercase;
  font-size: 1.1rem;
  font-weight: 900;
  color: var(--color-light--1);
}

.city h3 {
  font-size: 1.9rem;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.city h3 span {
  font-size: 3.2rem;
  line-height: 1;
}

.city p {
  font-size: 1.6rem;
}

.city a:link,
.city a:visited {
  font-size: 1.6rem;
  color: var(--color-brand--1);
}
</style>
