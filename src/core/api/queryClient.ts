import { QueryClient } from "react-query";
import api from "./axios";

interface DefaultQueryFnProp {
  queryKey: string[];
}

const defaultQueryFn = async ({ queryKey }: DefaultQueryFnProp) => {
  const { data } = await api.get(queryKey[0]);
  return data;
};

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: defaultQueryFn as any,
    },
  },
});
