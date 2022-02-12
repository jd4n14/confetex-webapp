import api from "../core/api/axios";

export const createNewLine = async () => {
  const { data } = await api.post("lines");
  return data;
};

export const deleteLine = async (id: number) => {
  const { data } = await api.delete(`lines/${id}`);
  return data;
};
