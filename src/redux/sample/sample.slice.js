import { createSlice } from "@reduxjs/toolkit";

export const sampleSlice = createSlice({
  name: "sample2",
  // set initial state
  initialState: {
    stringValue: "",
    numberValue: 0,
    isValid: false,
  },
  // define actions
  reducers: {
    toggleIsValid: (state) => {
      state.isValid = !state.isValid;
    },
    increment: (state) => {
      state.numberValue += 1;
    },
    decrement: (state) => {
      state.numberValue -= 1;
    },
    submitNumberValueByAmount: (state, action) => {
      state.numberValue = action.payload;
    },
    submitStringValue: (state, action) => {
      state.stringValue = action.payload;
    },
  },
});

export const sampleActions = sampleSlice.actions;

export default sampleSlice.reducer;
