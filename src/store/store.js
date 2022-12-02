import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";

// custom middleware

// const loggerMiddleware = (store) => (next) => (action) => {
//   if (!action.type) return next(action);
//   console.log("type: ", action.type);
//   console.log("payload: ", action.payload);
//   console.log("current State: ", store.getState());
//   next(action);
//   console.log("next State: ", store.getState());
// };

// middlewares used
export const store = configureStore({
  reducer: rootReducer,
  middleware: [logger],
});
