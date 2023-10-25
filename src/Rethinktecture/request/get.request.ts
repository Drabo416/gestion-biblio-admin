import axios from "axios";
import { formatUrl } from "./fomat-url.function";
import { addBearerToken } from "./token.function";
import { AxiosResponseType } from "../enum/axios-response-type.enum";

const getManyRequest = async (
  baseUrl: string,
  uri: string,
  token: string,
  query: Object,
  responseType?: AxiosResponseType
) => {
  addBearerToken(token);
  const url = formatUrl({ uri, baseUrl, query: query });
  const response = await axios.get(url, {
    validateStatus: () => true,
    responseType: responseType ? responseType : "json",
  });
  return response;
};

const getByIdRequest = async (
  baseUrl: string,
  uri: string,
  id: string,
  token: string,
  responseType?: AxiosResponseType
) => {
  addBearerToken(token);
  const url = formatUrl({ baseUrl, uri, id });
  const response = await axios.get(url, {
    validateStatus: () => true,
    responseType: responseType ? responseType : "json",
  });
  return response;
};
export { getManyRequest, getByIdRequest };
