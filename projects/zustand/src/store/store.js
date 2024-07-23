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

const useProductStore = create((set) => ({
  products: [],
  setProducts: (newProducts) => set({ products: newProducts }),
}));

const useCartStore = create((set) => ({
  cart: [],
  addToCart: (product) => set((state) => ({ cart: [...state.cart, product] })),
  removeFromCart: (product) => 
    set((state) => ({ cart: state.cart.filter((p) => p.id !== product.id) })),
  emptyCart: () => set({ cart: [] }),
}));


export {
    useStore,
    usePersonStore,
    useProductStore,
    useCartStore
};
