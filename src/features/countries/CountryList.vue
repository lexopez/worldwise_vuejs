<script setup>
import MessageNotif from "@/components/MessageNotif.vue";
import { useCities } from "@/store/useCities";

const { data } = useCities();

const countries = data.value.reduce((arr, city) => {
  if (!arr.map((el) => el.country).includes(city.country))
    return [...arr, { country: city.country, emoji: city.emoji }];
  else return arr;
}, []);
</script>
<template>
  <MessageNotif
    v-if="!data.length"
    message="Add your first city by clicking on a city on the map"
  />
  <ul class="countryList">
    <li v-for="(country, index) in countries" :key="index" class="countryItem">
      <span>{{ country.emoji }}</span>
      <span>{{ country.country }}</span>
    </li>
  </ul>
</template>

<style scoped>
.countryList {
  width: 100%;
  height: 65vh;
  list-style: none;
  overflow-y: scroll;
  overflow-x: hidden;

  display: grid;
  grid-template-columns: 1fr 1fr;
  align-content: start;
  gap: 1.6rem;
}

.countryItem {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.2rem;

  font-size: 1.7rem;
  font-weight: 600;

  background-color: var(--color-dark--2);
  border-radius: 7px;
  padding: 1rem 2rem;
  border-left: 5px solid var(--color-brand--1);
}

.countryItem span:first-child {
  font-size: 3rem;
  line-height: 1;
}
</style>
