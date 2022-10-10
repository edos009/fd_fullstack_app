import { put } from "redux-saga/effects";
import * as API from "../api";

import * as ActionTaskCreator from "../actions/taskCreators";

export function* getTasksSaga(action) {
  try {
    const {
      data: {
        data: { tasks },
      },
    } = yield API.getAllTasks();
    yield put(ActionTaskCreator.getTasksSuccess({ tasks }));
  } catch (error) {
    yield put(ActionTaskCreator.getTasksError(error));
  }
}
