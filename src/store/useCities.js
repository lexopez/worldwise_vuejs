import { citiesService } from "@/api/citiesService";
import { useApi } from "./useApi";
import { inject, provide, ref } from "vue";
const CITIES_SYMBOL = Symbol("CitiesContext");

export function useCitiesProvider() {
  const data = ref(null);
  const currentCity = ref(null);
  const { execute, isLoading, error } = useApi();

  const actions = {
    async getAllCities() {
      data.value = await execute(citiesService.getAll);
    },
    async deleteCity(id) {
      await execute(() => citiesService.delete(id));

      data.value.splice(
        data.value.findIndex((city) => city.id === id),
        1,
      );
    },
    async getCity(id) {
      currentCity.value = data.value?.find((city) => city.id === id);
      // if (!currentCity.value)
      //   currentCity.value = await execute(() => citiesService.getOne(id));
    },
  };

  provide(CITIES_SYMBOL, { data, currentCity, error, isLoading, ...actions });

  return { ...actions, isLoading, error, data };
}

export function useCities() {
  const context = inject(CITIES_SYMBOL);
  if (!context) {
    throw new Error(
      "useCities must be used within a component that calls useProviderCities",
    );
  }
  return context;
}
