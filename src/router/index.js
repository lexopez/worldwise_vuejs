import { createRouter, createWebHistory } from "vue-router";

const AppLayout = () => import("@/layouts/AppLayout.vue");

const HomePage = () => import("@/views/HomePage.vue");
const ProductPage = () => import("@/views/ProductPage.vue");
const PricingPage = () => import("@/views/PricingPage.vue");
const LoginPage = () => import("@/views/LoginPage.vue");

const CityList = () => import("@/features/cities/CityList.vue");
const CityItem = () => import("@/features/cities/CityItem.vue");
const CityForm = () => import("@/features/cities/CityForm.vue");
const CountryList = () => import("@/features/countries/CountryList.vue");

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", component: HomePage },
    { path: "/product", component: ProductPage },
    { path: "/pricing", component: PricingPage },
    { path: "/login", component: LoginPage },
    {
      path: "/app",
      component: AppLayout,
      children: [
        { path: "", redirect: "app/cities" },
        { path: "cities", component: CityList },
        { path: "countries", component: CountryList },
        { path: "cities/:id", component: CityItem },
        { path: "form", component: CityForm },
      ],
    },
  ],
});

export default router;
