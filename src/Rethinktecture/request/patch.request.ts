import axios from "axios";
import { formatUrl } from "./fomat-url.function";
import { addBearerToken } from "./token.function";
import { AxiosResponseType } from "../enum/axios-response-type.enum";

const patchRequest = async (
  baseUrl: string,
  uri: string,
  id: string,
  data: any,
  token?: string,
  responseType?: AxiosResponseType
) => {
  addBearerToken(token);
  const url = formatUrl({ baseUrl, id, uri });
  const response = await axios.patch(url, data, {
    validateStatus: () => true,
    responseType: responseType ? responseType : "json",
  });
  return response;
};

export { patchRequest };
