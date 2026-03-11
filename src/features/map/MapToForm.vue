<script setup>
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer } from "@vue-leaflet/vue-leaflet";
import L from "leaflet";
import { ref } from "vue";
import SharedButton from "@/components/SharedButton.vue";
const zoom = ref(2);
</script>

<template>
  <div class="mapContainer">
    <SharedButton type="position">Use your position</SharedButton>
    <l-map
      class="map"
      ref="map"
      v-model:zoom="zoom"
      :center="[47.41322, -1.219482]"
    >
      <l-tile-layer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        layer-type="base"
        name="OpenStreetMap"
      ></l-tile-layer>
    </l-map>
  </div>
</template>

<style scoped>
.mapContainer {
  flex: 1;
  height: 100%;
  background-color: var(--color-dark--2);
  position: relative;
}

.map {
  height: 100%;
}

/* Styling Leaflet classes (external library) */

:deep(.leaflet-popup .leaflet-popup-content-wrapper) {
  background-color: var(--color-dark--1);
  color: var(--color-light--2);
  border-radius: 5px;
  padding-right: 0.6rem;
}

:deep(.leaflet-popup .leaflet-popup-content) {
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
}

:deep(.leaflet-popup .leaflet-popup-content span:first-child) {
  font-size: 2.5rem;
  line-height: 1;
}

:deep(.leaflet-popup .leaflet-popup-tip) {
  background-color: var(--color-dark--1);
}

:deep(.leaflet-popup-content-wrapper) {
  border-left: 5px solid var(--color-brand--2);
}
</style>
