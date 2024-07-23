import { create } from "zustand";

const useStore = create((set) => ({
  bears: 0, // initial state
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
  updateBears: (newBears) => set({ bears: newBears }),
}));

const usePersonStore = create((set) => ({
  name: "",
  setName: (newName) => set({ name: newName }),
}));

export {
    useStore,
    usePersonStore,
};
