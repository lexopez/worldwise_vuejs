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

  async getOne(id) {
    try {
      const res = await client.get(`/cities/${id}`).then((res) => res.data);
      return res;
    } catch (error) {
      console.error(error);
      throw new Error("Failed to fetch city");
    }
  },

  async delete(id) {
    try {
      await client.delete(`/cities/${id}`);
    } catch (err) {
      console.error(err);
      throw new Error("Failed to delete city");
    }
  },
};
