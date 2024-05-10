import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./lib/slices/cartSlice/slice";
import filterSlice from "./lib/slices/filterSlice/slice";
export const makeStore = () => {
  return configureStore({
    reducer: { cartSlice, filterSlice },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];