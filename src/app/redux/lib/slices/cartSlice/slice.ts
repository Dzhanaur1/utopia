import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartSliceState } from "./types";
import { calcTotalPrice } from "@/app/utils/calcTptalPrice";

const initialState: CartSliceState = {
  totalPrice: 0,
  products: [],
  id: "",
  name: "",
  image: "",
  price: 0,
  size: "",
  material: "",
  count: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action: PayloadAction<CartProduct>) {
      const findProduct = state.products.find(
        (obj) => obj.id === action.payload.id
      );

      if (findProduct && findProduct.count) {
        findProduct.count++;
      } else {
        state.products.push({
          ...action.payload,
          count: 1,
        });
      }
      state.totalPrice = calcTotalPrice(state.products);
    },
    reduce(state, action: PayloadAction<string>) {
      const findProduct = state.products.find(
        (obj) => obj.id === action.payload
      );

      if (findProduct && findProduct.count) {
        findProduct.count > 1
          ? findProduct.count--
          : (state.products = state.products.filter(
              (obj) => obj.id !== action.payload
            ));
      }

      state.totalPrice = calcTotalPrice(state.products);
    },
    remove(state, action: PayloadAction<string>) {
      state.products = state.products.filter(
        (obj) => obj.id !== action.payload
      );
      state.totalPrice = calcTotalPrice(state.products);
    },
    clear(state) {
      (state.products = []), (state.totalPrice = 0);
    },
  },
});
export const { add, reduce, remove, clear } = cartSlice.actions;

export default cartSlice.reducer;
