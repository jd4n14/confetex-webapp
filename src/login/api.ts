import { Login } from "./types";
import api from "../core/api/axios";

export const login = async (login: Login) => {
  console.log("api");
  const { data } = await api.post("auth/login", login);
  return data;
};
