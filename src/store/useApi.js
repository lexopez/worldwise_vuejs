import { ref } from "vue";

export function useApi() {
  const data = ref(null);
  const currentCity = ref(null);
  const error = ref(null);
  const isLoading = ref(false);

  const execute = async (apiCall) => {
    isLoading.value = true;
    error.value = null;
    try {
      data.value = await apiCall();
      return data.value; // Return for immediate use if needed
    } catch (err) {
      console.error(err.message);
      error.value = err.message || "An unexpected error occurred";
      throw err; // Re-throw so the component can handle specific logic if it wants
    } finally {
      isLoading.value = false;
    }
  };

  return { data, error, isLoading, execute }; // for immediate use
}
