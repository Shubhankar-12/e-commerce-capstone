import {
  CATEGORIES_ACTION_TYPES,
  Category,
  CategoryItem,
} from "./category.type";
import {
  createAction,
  Action,
  ActionWithPayload,
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

export const fetchCategoryStart = (): FetchCategoryStart =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORY_START);

export const fetchCategorySuccess = (
  categoriesArray: Category[]
): FetchCategorySuccess =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORY_SUCCESS, categoriesArray);

export const fetchCategoryFailed = (error: Error): FetchCategoryFailed =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORY_FAILED, error);
