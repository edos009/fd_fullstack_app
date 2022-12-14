import axios from "axios";
import FormData from "form-data";
import qs from "query-string";

const httpClient = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const createUser = (data) => {
  const form = new FormData();
  form.append("login", data.login);
  form.append("password", data.password);
  form.append("avatar", data.avatar);

  return httpClient.post("/users", form, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const getAllUsers = ({ limit, offset }) =>
  httpClient.get(`/users?${qs.stringify({ limit, offset })}`);

export const deleteUserById = (userId) => {
  return httpClient.delete(`/users/${userId}`);
};

export const updateUser = ({ data, userId }) => {
  const form = new FormData();
  form.append("login", data.login);
  if (data.password) {
    form.append("password", data.password);
  }
  if (data.avatar) {
    form.append("avatar", data.avatar);
  }

  return httpClient.patch(`/users/${userId}`, form, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const getUserById = (userId) => {
  return httpClient.get(`/users/${userId}`);
};

export const createTask = ({ data, userId }) => {
  return httpClient.post(`/users/${userId}/tasks`, data);
};

export const getUserTasks = (userId) => {
  return httpClient.get(`/users/${userId}/tasks`);
};

export const deleteUserTaskById = ({ userId, taskId }) => {
  return httpClient.delete(`/users/${userId}/tasks/${taskId}`);
};

export const updateTask = ({ data, userId, taskId }) => {
  return httpClient.patch(`/users/${userId}/tasks/${taskId}`, data);
};

export const getAllTasks = () => httpClient.get(`/tasks`);

// export const createTask = ({ data, userId }) => {
//   console.log(data);
//   const form = new FormData();
//   form.append("content", data.content);
//   form.append("deadLine", data.deadLine);

//   return httpClient.post(`/users/${userId}/tasks`, form, {
//     headers: {
//       "Content-Type": "multipart/form-data",
//     },
//   });
// };
