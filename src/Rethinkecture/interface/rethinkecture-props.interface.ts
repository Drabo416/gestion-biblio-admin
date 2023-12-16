import { ReactElement } from "react";
import { StoreInterface } from "./store.interface";
import { DefaultRequestInterface } from "./default-request.interface";
import { ErrorMessageInterface } from "./error-message.interface";

export interface RethinkectureInterface {
  store?: StoreInterface;
  children?: ReactElement;
  requests?: DefaultRequestInterface;
  baseUrl?: string;
  token?: string;
  errorMessage?: ErrorMessageInterface[];
}
