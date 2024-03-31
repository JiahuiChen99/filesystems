import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "@/app/fat16/store/fat16-slice";

const storeReducer = combineSlices(counterSlice);

export const makeStore = () => {
  return configureStore({
    reducer: storeReducer,
  });
};

export type StoreState = ReturnType<typeof storeReducer>;
// Infer the return type of `makeStore`
export type Store = ReturnType<typeof makeStore>;
// Infer the `AppDispatch` type from the store itself
export type AppDispatch = Store["dispatch"];
