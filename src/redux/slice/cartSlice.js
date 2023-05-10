import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state, action) => {
      const { payload } = action;
      const item = state.data.find((product) => product.id === payload.id);

      if (item) {
        state.data = state.data.map((item) =>
          item.id === payload.id
            ? {
                ...item,
                qty: item.qty + 1,
              }
            : item
        );
      } else {
        let newPayload = payload;
        newPayload.qty = 1;
        state.data = [...state.data, newPayload];
      }
    },
    removeCart: (state, action) => {
      const newState = [...state.data];
      let stateFilter = newState.filter((val) => val.id !== action.payload);
      state.data = stateFilter;
    },
    updateQty: (state, action) => {
      const { payload } = action;
      const item = state.data.find((product) => product.id === payload.id);
      if (payload.operator == "+") {
        state.data = state.data.map((item) =>
          item.id === payload.id
            ? {
                ...item,
                qty: item.qty + 1,
              }
            : item
        );
      } else if (payload.operator == "-") {
        state.data = state.data.map((item) =>
          item.id === payload.id
            ? {
                ...item,
                qty: item.qty - 1,
              }
            : item
        );
      }
    },
  },
});
export const { addCart, removeCart, updateQty } = cartSlice.actions;

export default cartSlice.reducer;
