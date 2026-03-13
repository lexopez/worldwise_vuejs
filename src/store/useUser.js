import { inject, provide, ref, reactive } from "vue";

const FAKE_USER = {
  name: "Jack",
  email: "jack@example.com",
  password: "qwerty",
  avatar: "https://i.pravatar.cc/100?u=zz",
};

const USER_SYMBOL = Symbol("user");

// 1. Move state OUTSIDE the functions so it's a single shared instance
const user = ref(null);
const isAuthenticated = ref(false);

const actions = {
  login(email, password) {
    if (email === FAKE_USER.email && password === FAKE_USER.password) {
      user.value = { ...FAKE_USER };
      isAuthenticated.value = true;
    }
  },
  logout() {
    user.value = null;
    isAuthenticated.value = false;
  },
};

// 2. This is what you'll import in your Router
export const userState = {
  user,
  isAuthenticated,
  ...actions,
};

// 3. Keep these for your components (optional)
export const useUserProvider = () => {
  provide(USER_SYMBOL, userState);
  return userState;
};

export const useUser = () => {
  const context = inject(USER_SYMBOL);
  return context || userState; // Fallback to global state if inject fails
};
