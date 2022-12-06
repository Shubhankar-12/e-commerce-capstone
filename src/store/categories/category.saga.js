import { takeLatest, all, call, put } from "redux-saga/effects";
import { getCollectionandDocuments } from "../../utils/firebase/firebase";
import { fetchCategoryFailed, fetchCategorySuccess } from "./category.action";
import { CATEGORIES_ACTION_TYPES } from "./category.type";

// export const fetchCategoryAsync = () => {
//   return async (dispatch) => {
//     dispatch(fetchCategoryStart());
//     try {
//       const categoriesArray = await getCollectionandDocuments();
//       dispatch(fetchCategorySuccess(categoriesArray));
//     } catch (error) {
//       dispatch(fetchCategoryFailed(error));
//     }
//   };
// };

export function* fetchCategoryAsync() {
  try {
    const categoriesArray = yield call(getCollectionandDocuments);
    yield put(fetchCategorySuccess(categoriesArray));
  } catch (error) {
    yield put(fetchCategoryFailed(error));
  }
}

export function* onFetchCategories() {
  yield takeLatest(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORY_START,
    fetchCategoryAsync
  );
}

export function* categoriesSaga() {
  yield all([call(onFetchCategories)]);
}
