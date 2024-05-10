import { RootState } from "@/app/redux/store";

export const selectCart = (state: RootState) => state.cartSlice;

export const selectQuantity = (id: string) => (state: RootState) =>
  state.cartSlice.products.find((obj) => obj.id === id);
