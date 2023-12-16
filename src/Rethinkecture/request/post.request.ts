import { ResponseType } from "axios";
import { RequestContentTypeEnum } from "../enum/request-content-type.enum";
import { formatUrl } from "./fomat-url.function";
import { addBearerToken } from "./token.function";

const postFunc = async (
  baseUrl: string,
  uri: string,
  data: any,
  token?: string,
  query?: object,
  responseType?: ResponseType,
  contentType?: RequestContentTypeEnum
) => {
  const axios = addBearerToken(token);
  const url = formatUrl({ uri, query, baseUrl });
  const response = await axios.post(url, data, {
    validateStatus: () => true,
    responseType: responseType ? responseType : "json",
    headers: {
      "Content-Type": contentType || RequestContentTypeEnum.Json,
    },
  });
  return response;
};

export { postFunc };
