import ACTION_TYPES from "./actionTypes";

/* Create User */
export const createUserRequest = (values) => ({
  type: ACTION_TYPES.CREATE_USER_REQUEST,
  payload: { values },
});

export const createUserSuccess = (user) => ({
  type: ACTION_TYPES.CREATE_USER_SUCCESS,
  payload: { user },
});

export const createUserError = (error) => ({
  type: ACTION_TYPES.CREATE_USER_ERROR,
  payload: { error },
});

/* Get Users */
export const getUsersRequest = ({ limit, offset }) => ({
  type: ACTION_TYPES.GET_USERS_REQUEST,
  payload: { limit, offset },
});

export const getUsersSuccess = ({ users }) => ({
  type: ACTION_TYPES.GET_USERS_SUCCESS,
  payload: { users },
});

export const getUsersError = (error) => ({
  type: ACTION_TYPES.GET_USERS_ERROR,
  payload: { error },
});

/* Delete User */
export const deleteUserRequest = (userId) => ({
  type: ACTION_TYPES.DELETE_USER_REQUEST,
  payload: { userId },
});

export const deleteUserSuccess = (user) => ({
  type: ACTION_TYPES.DELETE_USER_SUCCESS,
  payload: { user },
});

export const deleteUserError = (error) => ({
  type: ACTION_TYPES.DELETE_USER_ERROR,
  payload: { error },
});

/* Update User */
export const updateUserRequest = ({ values, userId }) => ({
  type: ACTION_TYPES.UPDATE_USER_REQUEST,
  payload: { values, userId },
});

export const updateUserSuccess = (user) => ({
  type: ACTION_TYPES.UPDATE_USER_SUCCESS,
  payload: { user },
});

export const updateUserError = (error) => ({
  type: ACTION_TYPES.UPDATE_USER_ERROR,
  payload: { error },
});

/* Get User By Id */
export const getUserRequest = (userId) => ({
  type: ACTION_TYPES.GET_USER_REQUEST,
  payload: { userId },
});

export const getUserSuccess = (user) => ({
  type: ACTION_TYPES.GET_USER_SUCCESS,
  payload: { user },
});

export const getUserError = (error) => ({
  type: ACTION_TYPES.GET_USER_ERROR,
  payload: { error },
});

/* Create Task */
export const createTaskRequest = ({values, userId}) => ({
  type: ACTION_TYPES.CREATE_TASK_REQUEST,
  payload: { values, userId },
});

export const createTaskSuccess = (task) => ({
  type: ACTION_TYPES.CREATE_TASK_SUCCESS,
  payload: { task },
});

export const createTaskError = (error) => ({
  type: ACTION_TYPES.CREATE_TASK_ERROR,
  payload: { error },
});

/* Get User Tasks */
export const getUserTasksRequest = (userId) => ({
  type: ACTION_TYPES.GET_USER_TASKS_REQUEST,
  payload: { userId },
});

export const getUserTasksSuccess = (tasks) => ({
  type: ACTION_TYPES.GET_USER_TASKS_SUCCESS,
  payload: { tasks },
});

export const getUserTasksError = (error) => ({
  type: ACTION_TYPES.GET_USER_TASKS_ERROR,
  payload: { error },
});

/* Delete User */
export const deleteUserTaskRequest = ({userId, taskId}) => ({
  type: ACTION_TYPES.DELETE_USER_TASK_REQUEST,
  payload: { userId, taskId },
});

export const deleteUserTaskSuccess = (task) => ({
  type: ACTION_TYPES.DELETE_USER_TASK_SUCCESS,
  payload: { task },
});

export const deleteUserTaskError = (error) => ({
  type: ACTION_TYPES.DELETE_USER_TASK_ERROR,
  payload: { error },
});

/* Update User Task */
export const updateUserTaskRequest = ({ values, userId, taskId }) => ({
  type: ACTION_TYPES.UPDATE_USER_TASK_REQUEST,
  payload: { values, userId, taskId },
});

export const updateUserTaskSuccess = (task) => ({
  type: ACTION_TYPES.UPDATE_USER_TASK_SUCCESS,
  payload: { task },
});

export const updateUserTaskError = (error) => ({
  type: ACTION_TYPES.UPDATE_USER_TASK_ERROR,
  payload: { error },
});

/* Set Total Users Count */
export const setTotalUsersCount = ({ totalCount }) => ({
  type: ACTION_TYPES.SET_TOTAL_USERS_COUNT,
  payload: { totalCount },
});

/* Set Offset */
export const setOffset = (offset) => ({
  type: ACTION_TYPES.SET_OFFSET,
  payload: { offset },
});
