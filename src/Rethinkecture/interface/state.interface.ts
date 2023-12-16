import { error } from "console";
export interface StateInterface {
  isLoading: boolean;
  error: ErrorInterface;
  data: any;
}

export interface ErrorInterface {
  message: string;
  serverResponse: any;
  code: string | number;
}
