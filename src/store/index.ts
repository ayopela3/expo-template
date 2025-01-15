import { create } from "zustand";
import { persist, StorageValue } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createGlobalSlice, GlobalSlice } from "./slices/GlobalSlice";

type BoundState = GlobalSlice;

/**
 * this is the store that will handle the slices
 */

export const useBoundStore = create<BoundState>()(
  persist(
    (...a) => ({
      ...createGlobalSlice(...a),
    }),
    {
      name: "app-bound-store",
      storage: {
        getItem: async (name: string) => {
          const item = await AsyncStorage.getItem(name);
          return item ? JSON.parse(item) : null;
        },
        setItem: async (name: string, value: StorageValue<GlobalSlice>) => {
          await AsyncStorage.setItem(name, JSON.stringify(value));
        },
        removeItem: async (name: string) => {
          await AsyncStorage.removeItem(name);
        },
      },
    }
  )
);
