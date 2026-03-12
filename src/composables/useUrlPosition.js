import { ref, watch } from "vue";
import { useRoute } from "vue-router";

export function useUrlPosition() {
  const route = useRoute();
  const lat = ref(null);
  const lng = ref(null);
  watch(
    () => [route.query.lat, route.query.lng],
    ([p1, p2]) => {
      lat.value = p1;
      lng.value = p2;
    },
    { immediate: true },
  );

  return [lat, lng];
}
