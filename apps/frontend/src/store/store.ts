import { combineReducers, configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({});

const storeSetup = () =>
  configureStore({
    reducer: rootReducer,
  });

export const store = storeSetup();

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof storeSetup>;
export type AppDispatch = AppStore["dispatch"];
