//src/Global/Auth/useUserStore.ts

import { create } from "zustand";

interface UserState {
  userData: any;
  setUserData: (data: any) => void;
}

export const useUserStore = create<UserState>((set) => ({
  userData: null,
  setUserData: (data) => set({ userData: data }),
}));

// Para sincronizar con localStorage
export const syncUserWithLocalStorage = () => {
  const savedData = localStorage.getItem("userData");
  if (savedData) {
    const parsedData = JSON.parse(savedData);
    useUserStore.getState().setUserData(parsedData);
  }
};
