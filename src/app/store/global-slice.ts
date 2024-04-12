import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface GlobalState {
  tableGraphic: boolean;
  selectedFSComponent: string;
}

const initialState: GlobalState = {
  tableGraphic: true,
  selectedFSComponent: "",
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    toggleTableGraphic: (state) => {
      state.tableGraphic = !state.tableGraphic;
    },
    changeSelectedFSComponent: (
      state,
      action: PayloadAction<string | null>
    ) => {
      state.selectedFSComponent = action.payload ?? "";
    },
  },
  selectors: {
    selectTableGraphicSwitch: (global) => global.tableGraphic,
    selectFSComponent: (global) => global.selectedFSComponent,
  },
});

// Action creators are generated for each case reducer function
export const { toggleTableGraphic, changeSelectedFSComponent } =
  globalSlice.actions;
export const { selectTableGraphicSwitch, selectFSComponent } =
  globalSlice.selectors;
export default globalSlice.reducer;
