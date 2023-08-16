import { combineReducers } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import { authSlice } from "../slices/auth_slice/auth";
import storage from "redux-persist/lib/storage/session";
import { configureStore } from "@reduxjs/toolkit";
import { ApiSlice } from "../slices/api_slice/api";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  auth: authSlice.reducer,
  api: ApiSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

const persistor = persistStore(store);

export { store, persistor };
