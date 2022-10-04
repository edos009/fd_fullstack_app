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
export const getUsersRequest = ({limit, offset}) => ({
  type: ACTION_TYPES.GET_USER_REQUEST,
  payload: { limit, offset },
});

export const getUsersSuccess = (users) => ({
  type: ACTION_TYPES.GET_USER_SUCCESS,
  payload: { users },
});

export const getUsersError = (error) => ({
  type: ACTION_TYPES.GET_USER_ERROR,
  payload: { error },
});
