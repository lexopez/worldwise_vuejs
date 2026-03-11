<script setup>
import BackButton from "@/components/BackButton.vue";
import MessageNotif from "@/components/MessageNotif.vue";
import SharedButton from "@/components/SharedButton.vue";
import Datepicker from "vue3-datepicker";
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
</script>

<template>
  <!-- <MessageNotif
    message="Add your first city by clicking on a city on the map"
  /> -->
  <form class="form">
    <div class="row">
      <label for="cityName">City name</label>
      <input type="text" id="cityName" />
      <span class="flag">{{ emoji }}</span>
    </div>

    <div class="row">
      <label for="date">When did you go to {{ cityName }}</label>
      <Datepicker />
    </div>

    <div class="row">
      <label for="notes">Notes about your trip to {{ cityName }}</label>
      <textarea id="notes" />
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
