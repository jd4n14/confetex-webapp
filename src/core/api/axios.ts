import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 1000,
});
console.log(import.meta.env.VITE_API_URL);
export default api;
