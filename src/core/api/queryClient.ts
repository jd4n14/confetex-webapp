import axios from "axios";
import { QueryClient } from "react-query";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 1000,
  headers: {
    Authorization: "",
  },
});

interface DefaultQueryFnProp {
  queryKey: string;
}

const defaultQueryFn = async ({ queryKey }: DefaultQueryFnProp) => {
  const { data } = await api.get(`http://localhost:4000/api${queryKey}`);
  return data;
};

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: defaultQueryFn as any,
    },
  },
});
