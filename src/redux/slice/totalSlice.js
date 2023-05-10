import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: 0,
};
export const totalSlice = createSlice({
  name: "total",
  initialState,
  reducers: {
    updateTotal: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { updateTotal } = totalSlice.actions;
export default totalSlice.reducer;
