// This file serves as a central hub for re-exporting pre-typed Redux hooks.
import { useDispatch, useSelector, useStore } from "react-redux";
import type { AppDispatch, Store, StoreState } from "./store";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useStoreDispatch = useDispatch.withTypes<AppDispatch>();
export const useStoreSelector = useSelector.withTypes<StoreState>();
export const useAppStore = useStore.withTypes<Store>();
