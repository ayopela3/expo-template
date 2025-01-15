/**
 * Represents the global state slice.
 */
import { StateCreator } from 'zustand'

/**
 * this will handle global state changes for the app
 * such as loading and toggling between dark and light mode.
 */
export type GlobalSlice = {
  isDarkMode: boolean
  isLoading: boolean
  setLoading: (value: boolean) => void
  setDarkMode: (value: boolean) => void
}

export const createGlobalSlice: StateCreator<GlobalSlice> = (set) => ({
  isDarkMode: false,
  isLoading: false,
  setLoading: (value: boolean) => set(() => ({ isLoading: value })),
  setDarkMode: (value: boolean) => set(() => ({ isDarkMode: value }))
})
