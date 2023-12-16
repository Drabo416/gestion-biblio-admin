import { AxiosResponse } from "axios";
import { ErrorEnumType } from "../enum/error-type.enum";
import { ErrorMessageInterface } from "../interface/error-message.interface";
import { ErrorInterface } from "../interface/state.interface";
import { RequestDefaultMessage } from "../utils/constant/request-default-message.constant";

export function errorInterceptor(
  response: AxiosResponse,
  errorMessage?: ErrorMessageInterface[]
): ErrorInterface {
  const error: ErrorInterface = {
    message: "",
    code: 0,
    serverResponse: null,
  };
  error.serverResponse = response.data;
  error.code = response.status;
  if (errorMessage) {
    const index = errorMessage.findIndex((data) => data.code == error.code);
    if (index != -1) error.message = errorMessage[index].message;
    else error.message = RequestDefaultMessage[error.code];
  } else {
    error.message = RequestDefaultMessage[error.code];
  }
  if (!error.message) error.code = -1;
  return error;
}
