import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";

// custom middleware

// middlewares used
export const store = configureStore({
  reducer: rootReducer,
  middleware: [logger],
});
