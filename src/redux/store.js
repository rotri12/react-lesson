import { combineReducers, configureStore } from "@reduxjs/toolkit";
import totalReducer from "./slice/totalSlice";
import cartReducer from "./slice/cartSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
  keyPrefix: "redux-",
  whitelist: ["cart"],
};

const rootReducer = combineReducers({
  total: totalReducer,
  cart: cartReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
});

export const persistor = persistStore(store);
