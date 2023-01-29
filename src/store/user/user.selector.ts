import { createSelector } from "reselect";
import { UserState } from "./user.reducer";

export const selectUserReducer = (state: any): UserState => state.user;

export const selectCurrentUser = (state: any) => {
  createSelector(selectUserReducer, (user) => user.currentUser);
};
