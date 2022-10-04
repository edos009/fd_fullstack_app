import axios from "axios";
import FormData from "form-data";

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

export const getAllUsers = ({ limit = 5, offset = 0 }) => httpClient.get('/users')
