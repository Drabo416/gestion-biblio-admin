import axios, { ResponseType } from "axios";
import { formatUrl } from "./fomat-url.function";
import { addBearerToken } from "./token.function";
import { AxiosResponseType } from "../enum/axios-response-type.enum";
import { RequestContentTypeEnum } from "../enum/request-content-type.enum";

const deleteFunc = async (
  baseUrl: string,
  uri: string,
  token?: string,
  query?: object,
  responseType?: ResponseType,
  contentType?: RequestContentTypeEnum
) => {
  addBearerToken(token);
  const url = formatUrl({ uri, query, baseUrl });
  const response = await axios.delete(url, {
    validateStatus: () => true,
    responseType: responseType ? responseType : "json",
    headers: {
      "Content-Type": contentType || RequestContentTypeEnum.Json,
    },
  });
  return response;
};

export { deleteFunc };
