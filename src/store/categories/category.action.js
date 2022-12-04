import { getCollectionandDocuments } from "../../utils/firebase/firebase";
import { createAction } from "../../utils/reducer/reducer";
import { CATEGORIES_ACTION_TYPES } from "./category.type";

export const fetchCategoryStart = () =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORY_START);
export const fetchCategorySuccess = (categoriesArray) =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORY_SUCCESS, categoriesArray);
export const fetchCategoryFailed = (error) =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORY_FAILED, error);

export const fetchCategoryAsync = () => {
  return async (dispatch) => {
    dispatch(fetchCategoryStart());
    try {
      const categoriesArray = await getCollectionandDocuments();
      dispatch(fetchCategorySuccess(categoriesArray));
    } catch (error) {
      dispatch(fetchCategoryFailed(error));
    }
  };
};
