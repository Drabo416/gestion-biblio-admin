import { AxiosResponse } from "axios";
import { AxiosResponseType } from "../enum/axios-response-type.enum";

export interface RequestInterface {
  type: string;
  stateName?: string;
  payload?: Object | Array<any>;
  uri?: string;
  responseType?: AxiosResponseType;
}

export interface RequestPostInterface {
  stateName?: string;
  payload?: Object | Array<any>;
  uri?: string;
}

export interface RequestConfigInterface {
  token?: string;
  baseUrl?: string;
}
