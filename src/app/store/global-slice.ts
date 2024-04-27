import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface GlobalState {
  tableGraphic: boolean;
  selectedFSComponent: string;
  settings: {
    ext2: {
      "super-block": string;
      "block-group-descriptor": string;
      "block-bitmap": string;
      "inode-bitmap": string;
      "inode-table": string;
      "data-blocks": string;
    };
  };
}

const initialState: GlobalState = {
  tableGraphic: true,
  selectedFSComponent: "",
  settings: {
    ext2: {
      "super-block": "",
      "block-group-descriptor": "",
      "block-bitmap": "",
      "inode-bitmap": "",
      "inode-table": "",
      "data-blocks": "",
    },
  },
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
    setEXT2BlockGroupComponentColor: (
      state,
      action: PayloadAction<{
        id: keyof GlobalState["settings"]["ext2"];
        color: string;
      }>
    ) => {
      state.settings.ext2[action.payload.id] = action.payload.color;
    },
  },
  selectors: {
    selectTableGraphic: (global) => global.tableGraphic,
    selectFSComponent: (global) => global.selectedFSComponent,
    selectEXT2BlockGroupColors: (global) => global.settings.ext2,
  },
});

// Action creators are generated for each case reducer function
export const {
  toggleTableGraphic,
  changeSelectedFSComponent,
  setEXT2BlockGroupComponentColor,
} = globalSlice.actions;
export const {
  selectTableGraphic,
  selectFSComponent,
  selectEXT2BlockGroupColors,
} = globalSlice.selectors;
export default globalSlice.reducer;
