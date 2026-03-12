import { citiesService } from "@/api/citiesService";
import { useApi } from "./useApi";
import { inject, provide } from "vue";
const CITIES_SYMBOL = Symbol("CitiesContext");

export function useCitiesProvider() {
  const { execute, isLoading, error, data } = useApi();

  const actions = {
    async getAllCities() {
      await execute(citiesService.getAll);
    },
  };

  provide(CITIES_SYMBOL, { data, error, isLoading, ...actions });

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
