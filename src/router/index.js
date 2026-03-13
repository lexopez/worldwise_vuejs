import { userState } from "@/store/useUser";
import { createRouter, createWebHistory } from "vue-router";

const AppLayout = () => import("@/layouts/AppLayout.vue");

const HomePage = () => import("@/views/HomePage.vue");
const ProductPage = () => import("@/views/ProductPage.vue");
const PricingPage = () => import("@/views/PricingPage.vue");
const LoginPage = () => import("@/views/LoginPage.vue");
const PageNotFound = () => import("@/views/PageNotFound.vue");

const CityList = () => import("@/features/cities/CityList.vue");
const CityItem = () => import("@/features/cities/CityItem.vue");
const CityForm = () => import("@/features/cities/CityForm.vue");
const CountryList = () => import("@/features/countries/CountryList.vue");

const routes = [
  { path: "/", component: HomePage },
  { path: "/product", component: ProductPage },
  { path: "/pricing", component: PricingPage },
  { path: "/login", component: LoginPage },
  {
    path: "/app",
    component: AppLayout,
    meta: { requiresAuth: true },
    children: [
      { path: "", redirect: "app/cities" },
      { path: "cities", component: CityList },
      { path: "countries", component: CountryList },
      { path: "cities/:id", component: CityItem },
      { path: "form", component: CityForm },
    ],
  },
  { path: "/:pathMatch(.*)*", component: PageNotFound },
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach((to, from) => {
  // Access the ref value directly
  if (to.meta.requiresAuth && !userState.isAuthenticated.value) {
    return "/login";
  }
});

export default router;
