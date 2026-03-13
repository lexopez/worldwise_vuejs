import { ref, watch, watchEffect } from "vue";

export function useGeolocation(defaultPosition = null) {
  const isLoading = ref(false);
  const position = ref(defaultPosition);
  const error = ref(null);

  function getPosition() {
    isLoading.value = true;
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        isLoading.value = false;
        error.value = null;
        position.value = pos;
      },
      (error) => {
        isLoading.value = false;
        position.value = null;
        error.value = error;
      },
    );
  }

  return { isLoading, position, error, getPosition };
}
