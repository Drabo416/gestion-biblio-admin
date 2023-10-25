import { AxiosResponseType } from "../enum/axios-response-type.enum";
import { formatUrl } from "./fomat-url.function";
import { addBearerToken } from "./token.function";

const postRequest = async (
  baseUrl: string,
  uri: string,
  data: any,
  token?: string,
  responseType?: AxiosResponseType
) => {
  const axios = addBearerToken(token);
  const url = formatUrl({ uri, baseUrl });
  const response = await axios.post(url, data, {
    validateStatus: () => true,
    responseType: responseType ? responseType : "json",
  });
  return response;
};

const postFileRequest = async (
  baseUrl: string,
  uri: string,
  data: any,
  token?: string,
  responseType?: AxiosResponseType
) => {
  const axios = addBearerToken(token);
  const url = formatUrl({ uri, baseUrl });
  const response = await axios.post(url, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    validateStatus: () => true,
    responseType: responseType ? responseType : "json",
  });
  return response;
};

export { postRequest, postFileRequest };
