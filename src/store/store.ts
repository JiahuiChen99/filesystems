import { fat16Slice } from "@/app/fat-16/store/fat-16-slice";
import { globalSlice } from "@/app/store/global-slice";
import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "global",
  storage,
};

const rootReducer = combineSlices(globalSlice, fat16Slice);

const storeReducer = persistReducer(persistConfig, rootReducer);

export const makeStore = () => {
  let store: any = configureStore({
    reducer: storeReducer,
    devTools: process.env.NODE_ENV !== "production",
  });

  store.persistor = persistStore(store);
  return store;
};

export type StoreState = ReturnType<typeof storeReducer>;
// Infer the return type of `makeStore`
export type Store = ReturnType<typeof makeStore>;
// Infer the `AppDispatch` type from the store itself
export type AppDispatch = Store["dispatch"];
