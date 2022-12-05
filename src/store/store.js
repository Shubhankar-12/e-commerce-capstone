import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import createSagaMiddleware from "@redux-saga/core";
// import thunk from "redux-thunk";

const sagaMiddleware = createSagaMiddleware();
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// middlewares used
export const store = configureStore({
  reducer: persistedReducer,
  middleware: [
    process.env.NODE_ENV === "development" && logger,
    sagaMiddleware,
  ].filter(Boolean),
});

sagaMiddleware.run(rootReducer);

export const persistor = persistStore(store);
