import axios from "axios";
import { formatUrl } from "./fomat-url.function";
import { addBearerToken } from "./token.function";
import { AxiosResponseType } from "../enum/axios-response-type.enum";

const deleteRequest = async (
  baseUrl: string,
  uri: string,
  id: string,
  token?: string,
  responseType?: AxiosResponseType
) => {
  addBearerToken(token);
  const url = formatUrl({ id, uri, baseUrl });
  const response = await axios.delete(url, {
    validateStatus: () => true,
    responseType: responseType ? responseType : "json",
  });
  return response;
};

export { deleteRequest };
