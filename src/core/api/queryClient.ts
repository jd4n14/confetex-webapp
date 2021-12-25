import axios from "axios";
import { QueryClient } from "react-query";

const instance = axios.create({
  baseURL: "",
  timeout: 1000,
  headers: {
    Authorization: "",
  },
});

interface DefaultQueryFnProp {
  queryKey: string;
}

const defaultQueryFn = async ({ queryKey }: DefaultQueryFnProp) => {
  const { data } = await instance.get(queryKey);
  return data;
};

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: defaultQueryFn as any,
    },
  },
});
