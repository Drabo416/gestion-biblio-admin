import { AxiosResponseType } from "../enum/axios-response-type.enum";

export interface Payload {
  id: number | string;
  [key: string]: any;
}
export interface ReduxActionInterface {
  type: string;
  stateName?: string;
  payload?: any; //Payload |Payload[]
  token?: string;
  baseUrl?: string;
  uri?: string;
  responseType?: AxiosResponseType;
}
