<script setup>
import { onMounted } from "vue";
import { useCities } from "@/store/useCities";
import MessageNotif from "@/components/MessageNotif.vue";

import { formatDate } from "@/utils/formatDate";

const { getAllCities, deleteCity, data, currentCity } = useCities();

onMounted(async () => {
  await getAllCities();
});
</script>
<template>
  <MessageNotif
    v-if="data?.length === 0"
    message="Add your first city by clicking on a city on the map"
  />
  <ul class="cityList">
    <li v-for="city in data">
      <RouterLink
        :to="`cities/${city.id}`"
        :class="`cityItem ${currentCity?.id === city.id ? 'cityItem--active' : ''}`"
      >
        <span class="emoji">{{ city.emoji }}</span>
        <h3 class="name">{{ city.cityName }}</h3>
        <time class="date">{{ formatDate(city.date) }}</time>
        <button class="deleteBtn" @click.stop.prevent="deleteCity(city.id)">
          &times;
        </button>
      </RouterLink>
    </li>
  </ul>
</template>

<style scoped>
.cityList {
  width: 100%;
  height: 65vh;
  list-style: none;
  overflow-y: scroll;
  overflow-x: hidden;

  display: flex;
  flex-direction: column;
  gap: 1.4rem;
}

.cityList::-webkit-scrollbar {
  width: 0;
}

.cityItem,
.cityItem:link,
.cityItem:visited {
  display: flex;
  gap: 1.6rem;
  align-items: center;

  background-color: var(--color-dark--2);
  border-radius: 7px;
  padding: 1rem 2rem;
  border-left: 5px solid var(--color-brand--2);
  cursor: pointer;

  color: inherit;
  text-decoration: none;
}

.cityItem--active {
  border: 2px solid var(--color-brand--2);
  border-left: 5px solid var(--color-brand--2);
}

.emoji {
  font-size: 2.6rem;
  line-height: 1;
}

.name {
  font-size: 1.7rem;
  font-weight: 600;
  margin-right: auto;
}

.date {
  font-size: 1.5rem;
}

.deleteBtn {
  height: 2rem;
  aspect-ratio: 1;
  border-radius: 50%;
  border: none;
  background-color: var(--color-dark--1);
  color: var(--color-light--2);
  font-size: 1.6rem;
  font-weight: 400;
  cursor: pointer;
  transition: all 0.2s;
}

.deleteBtn:hover {
  background-color: var(--color-brand--1);
  color: var(--color-dark--1);
}
</style>
