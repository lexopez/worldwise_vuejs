<script setup>
import BackButton from "@/components/BackButton.vue";
import MessageNotif from "@/components/MessageNotif.vue";
import SharedButton from "@/components/SharedButton.vue";
import SpinnerPage from "@/components/SpinnerPage.vue";
import { useUrlPosition } from "@/composables/useUrlPosition";
import router from "@/router";
import { useCities } from "@/store/useCities";
import { convertToEmoji } from "@/utils/convertToEmoji";
import { ref, watchEffect } from "vue";
import Datepicker from "vue3-datepicker";

const { city, fetchCityFromlatlng, isLoading, error, createCity } = useCities();
const [lat, lng] = useUrlPosition();

const cityName = ref("");
const date = ref(new Date());
const notes = ref("");
const emoji = ref("");
const country = ref("");

watchEffect(async () => {
  await fetchCityFromlatlng(lat.value, lng.value);

  cityName.value = city.value.city || city.value.locality || "";
  emoji.value = convertToEmoji(city.value.countryCode);
  country.value = city.value.countryName;
});

async function handleSubmit() {
  if (!cityName || !date) return;

  const newCity = {
    cityName: cityName.value,
    country: country.value,
    emoji: emoji.value,
    date: date.value,
    notes: notes.value,
    position: { lat: lat.value, lng: lng.value },
  };

  await createCity(newCity);
  router.push("/app/cities");
}
</script>

<template>
  <MessageNotif
    v-if="!lat && !lng"
    message="Add your first city by clicking on a city on the map"
  />
  <SpinnerPage v-if="isLoading" />
  <MessageNotif :message="error" v-else-if="error" />
  <form v-else class="form" @submit.prevent="handleSubmit">
    <div class="row">
      <label for="cityName">City name</label>
      <input type="text" id="cityName" v-model="cityName" />
      <span class="flag">{{ city?.emoji }}</span>
    </div>

    <div class="row">
      <label for="date">When did you go to {{ city?.city }}</label>
      <Datepicker id="date" v-model="date" />
    </div>

    <div class="row">
      <label for="notes">Notes about your trip to {{ city?.city }}</label>
      <textarea id="notes" v-model="notes" />
    </div>

    <div class="buttons">
      <SharedButton type="primary">Add</SharedButton>
      <BackButton />
    </div>
  </form>
</template>

<style scoped>
.form {
  background-color: var(--color-dark--2);
  border-radius: 7px;
  padding: 2rem 3rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.row {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  position: relative;
}

.buttons {
  display: flex;
  justify-content: space-between;
}

.flag {
  position: absolute;
  right: 1rem;
  top: 2.7rem;
  font-size: 2.8rem;
}

.form.loading {
  opacity: 0.3;
}

.form.loading button {
  pointer-events: none;
  background-color: var(--color-light--1);
  border: 1px solid var(--color-light--1);
  color: var(--color-dark--0);
}

:global(.react-datepicker) {
  font-family: inherit;
  font-size: 1.2rem;
}
</style>
