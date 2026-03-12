import client from "./apiClient";

export const citiesService = {
  async getAll() {
    try {
      const res = await client.get("/cities").then((res) => res.data);
      return res;
    } catch (err) {
      console.error(err);
      throw new Error("Failed to fetch cities");
    }
  },
};
