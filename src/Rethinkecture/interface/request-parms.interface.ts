import { ResponseType } from "axios";
import { RequestContentTypeEnum } from "../enum/request-content-type.enum";

export interface RequestParam {
  uri: string;
  query?: object;
  payload?: any;
  responseType?: ResponseType;
  stateName?: string;
  contentType?: RequestContentTypeEnum;
  baseUrl?: string;
  token?: string;
}

export interface DefaultRequestParam extends RequestParam {
  type: "Post" | "Patch" | "Delete" | "Get";
}
