import produce from "immer";
import ACTION_TYPES from "../actions/actionTypes";

const initialState = {
  users: [],
  isFetching: false,
  error: null,
};

const handlers = {
  [ACTION_TYPES.CREATE_USER_REQUEST]: produce((draft, action) => {
    draft.isFetching = true;
  }),
  [ACTION_TYPES.CREATE_USER_SUCCESS]: produce((draft, action) => {
    const { user } = action.payload;
    draft.isFetching = false;
    draft.users.push(user);
  }),
  [ACTION_TYPES.CREATE_USER_ERROR]: produce((draft, action) => {
    const { error } = action.payload;
    draft.isFetching = false;
    draft.error = error;
  }),
};

const userReducer = (state = initialState, action) => {
  const handler = handlers[action.type];

  if (handler) {
    return handler(state, action);
  }
  return state;
};

export default userReducer;
