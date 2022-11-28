import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: { count: 0 },
  reducers: {
    increament: (state) => {
      state.count += 1;
    },
    decreament: (state) => {
      state.count -= 1;
    },
    incrementByAmount: (state, action) => {
      state.count = state.count + action.payload;
    },
    reset: (state) => {
      state.count = 0;
    },
  },
});

export const { increament, decreament, reset, incrementByAmount } =
  counterSlice.actions;

export default counterSlice.reducer;
