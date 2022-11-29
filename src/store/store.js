import { compose, applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";

// const middleware = [logger];

// const composeEnhancer = compose(applyMiddleware(...middleware));

export const store = configureStore({
  reducer: rootReducer,
  middleware: [logger],
});
