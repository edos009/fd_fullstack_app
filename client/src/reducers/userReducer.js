import produce from "immer";
import ACTION_TYPES from "../actions/actionTypes";

const initialState = {
  users: [],
  isFetching: false,
  error: null,
};

const handlerRequest = produce((draft, action) => {
  draft.isFetching = true;
});

const handlerError = produce((draft, action) => {
  const { error } = action.payload;
  draft.isFetching = false;
  draft.error = error;
});

const handlers = {
  [ACTION_TYPES.CREATE_USER_REQUEST]: handlerRequest,
  [ACTION_TYPES.GET_USERS_REQUEST]: handlerRequest,

  [ACTION_TYPES.CREATE_USER_SUCCESS]: produce((draft, action) => {
    const { user } = action.payload;
    draft.isFetching = false;
    draft.users.push(user);
  }),
  [ACTION_TYPES.GET_USERS_SUCCESS]: produce((draft, action) => {
    const { users } = action.payload;
    draft.isFetching = false;
    draft.users.push(...users);
  }),

  [ACTION_TYPES.CREATE_USER_ERROR]: handlerError,
  [ACTION_TYPES.GET_USERS_ERROR]: handlerError,
};

const userReducer = (state = initialState, action) => {
  const handler = handlers[action.type];

  if (handler) {
    return handler(state, action);
  }
  return state;
};

export default userReducer;
