import { CategoryAction } from "./category.action";
import { CATEGORIES_ACTION_TYPES, Category } from "./category.type";

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
  action = {} as CategoryAction
): CategoryState => {
  switch (action.type) {
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORY_START:
      return { ...state, isLoading: true };
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORY_SUCCESS:
      return { ...state, categories: action.payload, isLoading: false };
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORY_FAILED:
      return { ...state, error: action.payload, isLoading: false };

    // default:
    //   return state;
  }
};