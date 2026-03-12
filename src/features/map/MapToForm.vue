<script setup>
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer, LMarker, LPopup } from "@vue-leaflet/vue-leaflet";
import L from "leaflet";
import { ref, watch, watchEffect } from "vue";
import SharedButton from "@/components/SharedButton.vue";
import { useCities } from "@/store/useCities";
import { useUrlPosition } from "@/composables/useUrlPosition";

const { data } = useCities();
const cities = ref(data);

const [lat, lng] = useUrlPosition();
const mapPosition = ref([40, 0]);

watchEffect(
  () =>
    (mapPosition.value =
      lat.value && lng.value ? [lat.value, lng.value] : mapPosition.value),
);

const zoom = ref(6);
</script>

<template>
  <div class="mapContainer">
    <SharedButton type="position">Use your position</SharedButton>
    <l-map class="map" ref="map" v-model:zoom="zoom" :center="mapPosition">
      <l-tile-layer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        layer-type="base"
        name="OpenStreetMap"
      ></l-tile-layer>

      <l-marker
        v-for="city in cities"
        :key="city.id"
        :lat-lng="[city.position.lat, city.position.lng]"
      >
        <l-popup>
          <span>{{ city.emoji }}</span>
          <span>{{ city.cityName }}</span>
        </l-popup>
      </l-marker>
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
