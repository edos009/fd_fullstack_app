const ACTION_TYPES = {
  //users
  CREATE_USER_REQUEST: "post/users/request",
  CREATE_USER_SUCCESS: "post/users/success",
  CREATE_USER_ERROR: "post/users/error",

  GET_USERS_REQUEST: "get/users/request",
  GET_USERS_SUCCESS: "get/users/success",
  GET_USERS_ERROR: "get/users/error",

  DELETE_USER_REQUEST: "delete/user/request",
  DELETE_USER_SUCCESS: "delete/user/success",
  DELETE_USER_ERROR: "delete/user/error",

  UPDATE_USER_REQUEST: "update/user/request",
  UPDATE_USER_SUCCESS: "update/user/success",
  UPDATE_USER_ERROR: "update/user/error",

  GET_USER_REQUEST: "get/user/request",
  GET_USER_SUCCESS: "get/user/success",
  GET_USER_ERROR: "get/user/error",

  CREATE_TASK_REQUEST: "post/task/request",
  CREATE_TASK_SUCCESS: "post/task/success",
  CREATE_TASK_ERROR: "post/task/error",

  GET_USER_TASKS_REQUEST: "get/user/tasks/request",
  GET_USER_TASKS_SUCCESS: "get/user/tasks/success",
  GET_USER_TASKS_ERROR: "get/user/tasks/error",

  DELETE_USER_TASK_REQUEST: "delete/user/task/request",
  DELETE_USER_TASK_SUCCESS: "delete/user/task/success",
  DELETE_USER_TASK_ERROR: "delete/user/task/error",

  SET_TOTAL_USERS_COUNT: "set/total_users_count",
  SET_OFFSET: "set/offset",
};

export default ACTION_TYPES;