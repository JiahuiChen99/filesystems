import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { fat16Slice } from "@/app/fat16/store/fat16-slice";
import { globalSlice } from "@/app/store/global-slice";

const storeReducer = combineSlices(globalSlice, fat16Slice);

export const makeStore = () => {
  return configureStore({
    reducer: storeReducer,
    devTools: process.env.NODE_ENV !== "production",
  });
};

export type StoreState = ReturnType<typeof storeReducer>;
// Infer the return type of `makeStore`
export type Store = ReturnType<typeof makeStore>;
// Infer the `AppDispatch` type from the store itself
export type AppDispatch = Store["dispatch"];
