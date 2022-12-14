import { takeLatest } from "redux-saga/effects";

import ACTION_TYPES from "../actions/actionTypes";
import {
  createUserSaga,
  getUsersSaga,
  deleteUserSaga,
  updateUserSaga,
  getUserByIdSaga,
  createTaskSaga,
  getUserTasksSaga,
  deleteUserTaskSaga,
  updateUserTaskSaga,
} from "./userSagas";
import { getTasksSaga } from "./taskSagas";

function* rootSaga() {
  yield takeLatest(ACTION_TYPES.CREATE_USER_REQUEST, createUserSaga);
  yield takeLatest(ACTION_TYPES.GET_USERS_REQUEST, getUsersSaga);
  yield takeLatest(ACTION_TYPES.DELETE_USER_REQUEST, deleteUserSaga);
  yield takeLatest(ACTION_TYPES.UPDATE_USER_REQUEST, updateUserSaga);
  yield takeLatest(ACTION_TYPES.GET_USER_REQUEST, getUserByIdSaga);
  yield takeLatest(ACTION_TYPES.CREATE_TASK_REQUEST, createTaskSaga);
  yield takeLatest(ACTION_TYPES.GET_USER_TASKS_REQUEST, getUserTasksSaga);
  yield takeLatest(ACTION_TYPES.DELETE_USER_TASK_REQUEST, deleteUserTaskSaga);
  yield takeLatest(ACTION_TYPES.UPDATE_USER_TASK_REQUEST, updateUserTaskSaga);

  yield takeLatest(ACTION_TYPES.GET_TASKS_REQUEST, getTasksSaga);
}

export default rootSaga;
