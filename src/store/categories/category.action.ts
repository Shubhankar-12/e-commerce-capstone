import {
  CATEGORIES_ACTION_TYPES,
  Category,
  CategoryItem,
} from "./category.type";
import {
  createAction,
  Action,
  ActionWithPayload,
  withMatcher,
} from "../../utils/reducer/reducer";

export type FetchCategoryStart =
  Action<CATEGORIES_ACTION_TYPES.FETCH_CATEGORY_START>;

export type FetchCategorySuccess = ActionWithPayload<
  CATEGORIES_ACTION_TYPES.FETCH_CATEGORY_SUCCESS,
  Category[]
>;

export type FetchCategoryFailed = ActionWithPayload<
  CATEGORIES_ACTION_TYPES.FETCH_CATEGORY_FAILED,
  Error
>;

export type CategoryAction =
  | FetchCategoryStart
  | FetchCategorySuccess
  | FetchCategoryFailed;

export const fetchCategoryStart = withMatcher(
  (): FetchCategoryStart =>
    createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORY_START)
);

export const fetchCategorySuccess = withMatcher(
  (categoriesArray: Category[]): FetchCategorySuccess =>
    createAction(
      CATEGORIES_ACTION_TYPES.FETCH_CATEGORY_SUCCESS,
      categoriesArray
    )
);

export const fetchCategoryFailed = withMatcher(
  (error: Error): FetchCategoryFailed =>
    createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORY_FAILED, error)
);
