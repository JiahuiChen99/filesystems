import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface FAT16State {
  selectedProp: string;
}

const initialState: FAT16State = {
  selectedProp: "",
};

export const counterSlice = createSlice({
  name: "fat16",
  initialState,
  reducers: {
    changeSelection: (state, action: PayloadAction<string | null>) => {
      state.selectedProp = action.payload ?? "";
    },
  },
  selectors: {
    selectSelectedProp: (fat16) => fat16.selectedProp,
  },
});

// Action creators are generated for each case reducer function
export const { changeSelection } = counterSlice.actions;
export const { selectSelectedProp } = counterSlice.selectors;
export default counterSlice.reducer;
