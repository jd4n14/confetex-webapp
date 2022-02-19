import api from "../core/api/axios";
import { Machine } from "./types";

export const createMachine = async (
  machine: Omit<Machine, "id">
): Promise<Machine> => {
  const { data } = await api.post("machines", machine);
  return data;
};

export const getMachineDetail = async (id: number): Promise<Machine> => {
  const { data } = await api.get(`machines/${id}`);
  return data;
};
