import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";

export const useAuthStore = create((set) => ({
  token: null,

  login: async (token) => {
    await AsyncStorage.setItem("token", token);
    set({ token });
  },

  logout: async () => {
    await AsyncStorage.removeItem("token");
    set({ token: null });
  },

  loadToken: async () => {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      set({ token });
    }
  },
}));
