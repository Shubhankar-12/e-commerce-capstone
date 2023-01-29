import { takeLatest, all, call, put } from "typed-redux-saga/macro";
import { getCollectionandDocuments } from "../../utils/firebase/firebase";
import { fetchCategoryFailed, fetchCategorySuccess } from "./category.action";
import { CATEGORIES_ACTION_TYPES } from "./category.type";

export function* fetchCategoryAsync() {
  try {
    const categoriesArray = yield* call(getCollectionandDocuments);
    yield* put(fetchCategorySuccess(categoriesArray));
  } catch (error) {
    yield* put(fetchCategoryFailed(error as Error));
  }
}

export function* onFetchCategories() {
  yield* takeLatest(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORY_START,
    fetchCategoryAsync
  );
}

export function* categoriesSaga() {
  yield* all([call(onFetchCategories)]);
}
