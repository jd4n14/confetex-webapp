export enum Role {
  ADMIN = "ADMIN",
  SUPERVISOR = "SUPERVISOR",
  MECHANIC = "MECHANIC",
}

export interface User {
  id?: number;
  name: string;
  email: string;
  password?: string | undefined;
  role: Role;
}
