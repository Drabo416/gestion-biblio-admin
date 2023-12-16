import axios, { ResponseType } from "axios";
import { formatUrl } from "./fomat-url.function";
import { addBearerToken } from "./token.function";
import { AxiosResponseType } from "../enum/axios-response-type.enum";
import { RequestContentTypeEnum } from "../enum/request-content-type.enum";

const getFunc = async (
  baseUrl: string,
  uri: string,
  token: string,
  query: Object,
  responseType?: Partial<ResponseType>,
  contentType?: RequestContentTypeEnum
) => {
  addBearerToken(token);
  const url = formatUrl({ uri, baseUrl, query: query });
  const response = await axios.get(url, {
    validateStatus: () => true,
    responseType: responseType || "json",
    headers: {
      "Content-Type": contentType || RequestContentTypeEnum.Json,
    },
  });
  return response;
};

export { getFunc };
