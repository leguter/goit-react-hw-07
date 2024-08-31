import { createSlice } from "@reduxjs/toolkit";
const INITIAL_STATE = {
  filterValue: "",
};
const filterSlice = createSlice({
  // Ім'я слайсу
  name: "filter",
  // Початковий стан редюсера слайсу
  initialState: INITIAL_STATE,
  // Об'єкт редюсерів
  reducers: {
    setFilterValue(state, action) {
      state.filterValue = action.payload;
    },
  },
});
export const { setFilterValue } = filterSlice.actions;
// Редюсер  слайсу
export const filterReducer = filterSlice.reducer;
