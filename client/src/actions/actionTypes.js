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

  SET_TOTAL_USERS_COUNT: "set/total_users_count",
  SET_OFFSET: "set/offset",
};

export default ACTION_TYPES;