import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface FilterState {
  id: string;
  name: string;
}
const initialState: FilterState = {
  id: "bench",
  name: "Лавочки",
};
const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategoryId(state, action: PayloadAction<FilterState>) {
      state.id = action.payload.id;
    },
  },
});
export const { setCategoryId } = filterSlice.actions;
export default filterSlice.reducer;
