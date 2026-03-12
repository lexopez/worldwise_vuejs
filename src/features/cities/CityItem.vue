<script setup>
import BackButton from "@/components/BackButton.vue";
import { useCities } from "@/store/useCities";
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import { formatDate } from "@/utils/formatDate";

const { getCity, currentCity } = useCities();
const id = useRoute().params.id;

onMounted(async () => {
  await getCity(id);
});
</script>
<template>
  <div class="city" v-if="currentCity">
    <div class="row">
      <h6>City name</h6>
      <h3>
        <span>{{ currentCity.emoji }}</span> {{ currentCity.cityName }}
      </h3>
    </div>

    <div class="row">
      <h6>You went to {{ currentCity.cityName }} on</h6>
      <p>{{ formatDate(currentCity.date || null) }}</p>
    </div>

    <div class="row" v-if="currentCity.notes !== ''">
      <h6>Your notes</h6>
      <p>{{ currentCity.notes }}</p>
    </div>

    <div class="row">
      <h6>Lear more</h6>
      <a
        :href="`https://en.wikipedia.org/wiki/${currentCity.cityName}`"
        target="_blank"
        rel="noreferrer"
      >
        Check out {{ currentCity.cityName }} on Wikipedia &rarr;</a
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
