import produce from "immer";
import ACTION_TYPES from "../actions/actionTypes";

const initialState = {
  tasks: [],
  isFetchingTasks: false,
  errorTasks: null,
};

const handlerRequest = produce((draft, action) => {
  draft.isFetchingTasks = true;
});

const handlerError = produce((draft, action) => {
  const { error } = action.payload;
  draft.isFetchingTasks = false;
  draft.errorTasks = error;
});

const handlers = {
  [ACTION_TYPES.GET_TASKS_REQUEST]: handlerRequest,

  [ACTION_TYPES.GET_TASKS_SUCCESS]: produce((draft, action) => {
    const { tasks } = action.payload;
    draft.isFetchingTasks = false;
    draft.tasks = tasks;
  }),

  [ACTION_TYPES.GET_TASKS_ERROR]: handlerError,
};

const taskReducer = (state = initialState, action) => {
  const handler = handlers[action.type];

  if (handler) {
    return handler(state, action);
  }
  return state;
};

export default taskReducer;