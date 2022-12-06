import { all, call, takeLatest, put } from "redux-saga/effects";
import {
  createUserDocFromAuth,
  getCurrentUser,
} from "../../utils/firebase/firebase";
import { signInFailed } from "./user.acton";
import { USER_ACTION_TYPES } from "./user.types";

export function* getSnapshotFromUserAuth(userAuth, additionalDetails) {
  try {
    const userSnapshot = yield call(
      createUserDocFromAuth,
      userAuth,
      additionalDetails
    );
    console.log(userSnapshot);
    console.log(userSnapshot.data());
  } catch (error) {
    yield put(signInFailed);
  }
}

export function* isUserAuthenticated() {
  try {
    const userAuth = call(getCurrentUser);
    if (!userAuth) return;
    yield call(getSnapshotFromUserAuth, userAuth);
  } catch (error) {
    yield put(signInFailed);
  }
}

export function* onCheckUserSession() {
  yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* userSaga() {
  yield all([onCheckUserSession]);
}
