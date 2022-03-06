import { Params } from "react-router-dom";

export interface Line {
  id: number;
}

export interface Paginate<T> {
  data: T[];
  meta: {
    itemsPerPage: number;
    totalItems: number;
    currentPage: number;
    totalPages: number;
    sortBy: Array<Array<string>>;
  };
  links: {
    current: string;
    last: string;
  };
}

export interface ParamsId extends Params {
  id: string;
}
