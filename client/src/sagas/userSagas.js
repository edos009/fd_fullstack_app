import { put } from "redux-saga/effects";
import * as API from "../api";

import * as ActionUserCreator from "../actions/userCreators";

export function* createUserSaga(action) {
  try {
    const {
      data: {
        data: user,
      },
    } = yield API.createUser(action.payload.values);
    yield put(ActionUserCreator.createUserSuccess(user));
  } catch (error) {
    yield put(ActionUserCreator.createUserError(error));
  }
}

export function* getUsersSaga(action) {
  try {
    const {
      data: {
        data: {users, totalCount},
      },
    } = yield API.getAllUsers(action.payload);
    yield put(ActionUserCreator.getUsersSuccess({users}));
    yield put(ActionUserCreator.setTotalUsersCount({totalCount}));
  } catch (error) {
    yield put(ActionUserCreator.getUsersError(error));
  }
}
