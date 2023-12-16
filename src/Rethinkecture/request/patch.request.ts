import axios, { ResponseType } from "axios";
import { formatUrl } from "./fomat-url.function";
import { addBearerToken } from "./token.function";
import { RequestContentTypeEnum } from "../enum/request-content-type.enum";

const patchFunc = async (
  baseUrl: string,
  uri: string,
  data: any,
  token?: string,
  query?: object,
  responseType?: ResponseType,
  contentType?: RequestContentTypeEnum
) => {
  addBearerToken(token);
  const url = formatUrl({ baseUrl, query, uri });
  const response = await axios.patch(url, data, {
    validateStatus: () => true,
    responseType: responseType ? responseType : "json",
    headers: {
      "Content-Type": contentType || RequestContentTypeEnum.Json,
    },
  });
  return response;
};

export { patchFunc };
