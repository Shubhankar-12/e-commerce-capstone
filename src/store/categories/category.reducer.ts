import { AnyAction } from "redux";
import {
  fetchCategoryFailed,
  fetchCategoryStart,
  fetchCategorySuccess,
} from "./category.action";
import { Category } from "./category.type";

export type CategoryState = {
  readonly categories: Category[];
  readonly isLoading: boolean;
  readonly error: Error | null;
};

export const CATEGORIES_INITIAL_STATE: CategoryState = {
  categories: [],
  isLoading: false,
  error: null,
};

export const categoriesReducer = (
  state = CATEGORIES_INITIAL_STATE,
  action: AnyAction
): CategoryState => {
  if (fetchCategoryStart.match(action)) {
    return { ...state, isLoading: true };
  }

  if (fetchCategorySuccess.match(action)) {
    return { ...state, categories: action.payload, isLoading: false };
  }

  if (fetchCategoryFailed.match(action)) {
    return { ...state, error: action.payload, isLoading: false };
  }
  return state;
};
