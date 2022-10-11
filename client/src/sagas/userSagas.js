import { put } from "redux-saga/effects";
import * as API from "../api";

import * as ActionUserCreator from "../actions/userCreators";

export function* createUserSaga(action) {
  try {
    const {
      data: { data: user },
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
        data: { users, totalCount },
      },
    } = yield API.getAllUsers(action.payload);
    yield put(ActionUserCreator.getUsersSuccess({ users }));
    yield put(ActionUserCreator.setTotalUsersCount({ totalCount }));
  } catch (error) {
    yield put(ActionUserCreator.getUsersError(error));
  }
}

export function* deleteUserSaga(action) {
  try {
    const {
      data: {
        data: { user },
      },
    } = yield API.deleteUserById(action.payload.userId);
    yield put(ActionUserCreator.deleteUserSuccess(user));
  } catch (error) {
    yield put(ActionUserCreator.deleteUserError(error));
  }
}

export function* updateUserSaga(action) {
  try {
    const {
      data: { data: user },
    } = yield API.updateUser({
      data: action.payload.values,
      userId: action.payload.userId,
    });
    yield put(ActionUserCreator.updateUserSuccess(user));
  } catch (error) {
    yield put(ActionUserCreator.updateUserError(error));
  }
}

export function* getUserByIdSaga(action) {
  try {
    const {
      data: { data },
    } = yield API.getUserById(action.payload.userId);
    yield put(ActionUserCreator.getUserSuccess(data));
  } catch (error) {
    yield put(ActionUserCreator.getUserError(error));
  }
}

export function* createTaskSaga(action) {
  console.log(action.payload);
  try {
    const {
      data: { data },
    } = yield API.createTask({
      data: action.payload.values,
      userId: action.payload.userId,
    });
    yield put(ActionUserCreator.createTaskSuccess(data));
  } catch (error) {
    yield put(ActionUserCreator.createTaskError(error));
  }
}

export function* getUserTasksSaga(action) {
  try {
    const {
      data: { data },
    } = yield API.getUserTasks(action.payload.userId);
    yield put(ActionUserCreator.getUserTasksSuccess(data));
  } catch (error) {
    yield put(ActionUserCreator.getUserTasksError(error));
  }
}

export function* deleteUserTaskSaga(action) {
  try {
    const {
      data: { data },
    } = yield API.deleteUserTaskById({
      userId: action.payload.userId,
      taskId: action.payload.taskId,
    });
    yield put(ActionUserCreator.deleteUserTaskSuccess(data));
    yield put(ActionUserCreator.getUserTasksRequest(action.payload.userId));
  } catch (error) {
    yield put(ActionUserCreator.deleteUserTaskError(error));
  }
}

export function* updateUserTaskSaga(action) {
  try {
    const {
      data: { data },
    } = yield API.updateTask({
      data: action.payload.values,
      userId: action.payload.userId,
      taskId: action.payload.taskId,
    });
    yield put(ActionUserCreator.updateUserTaskSuccess(data));
    yield put(ActionUserCreator.getUserTasksRequest(action.payload.userId));
  } catch (error) {
    yield put(ActionUserCreator.updateUserTaskError(error));
  }
}
