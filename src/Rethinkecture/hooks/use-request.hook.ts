import { useCallback, useContext } from "react";
import { RethinkectureContext } from "../context/rethinkecture.context";
import { useResourceAction } from "./resource-action.hook";
import { RequestParam } from "../interface/request-parms.interface";
import { postFunc } from "../request/post.request";
import { errorInterceptor } from "../interceptor/error.interceptor";
import { patchFunc } from "../request/patch.request";
import { deleteFunc } from "../request/delete.request";
import { getFunc } from "../request/get.request";
import { DefaultRequestInterface } from "../interface/default-request.interface";

export function useRequest() {
  const { token, baseUrl, errorMessage } = useContext(RethinkectureContext);
  const {
    loadRequest,
    failureRequest,
    addResource,
    updateResource,
    deleteResource,
  } = useResourceAction();
  const postRequest = useCallback(
    async (params: RequestParam) => {
      if (params.stateName) loadRequest(params.stateName);
      const response = await postFunc(
        params.baseUrl || baseUrl,
        params.uri,
        params.payload,
        params.token || token,
        params.query,
        params.responseType,
        params.contentType
      );
      const error = errorInterceptor(
        response,
        errorMessage?.length ? errorMessage : []
      );
      if (error.code != -1 && params.stateName)
        failureRequest(params.stateName, error);
      else if (params.stateName) {
        addResource(params.stateName, response.data);
      }
      return { data: response.data, error };
    },
    [token, baseUrl]
  );
  const patchRequest = useCallback(
    async (params: RequestParam) => {
      if (params.stateName) loadRequest(params.stateName);
      const response = await patchFunc(
        params.baseUrl || baseUrl,
        params.uri,
        params.payload,
        params.token || token,
        params.query,
        params.responseType,
        params.contentType
      );
      const error = errorInterceptor(
        response,
        errorMessage?.length ? errorMessage : []
      );
      if (error.code != -1 && params.stateName)
        failureRequest(params.stateName, error);
      else if (params.stateName) {
        updateResource(params.stateName, response.data);
      }
      return { data: response.data, error };
    },
    [token, baseUrl]
  );
  const deleteRequest = useCallback(
    async (params: RequestParam) => {
      if (params.stateName) loadRequest(params.stateName);
      const response = await deleteFunc(
        params.baseUrl || baseUrl,
        params.uri,
        params.token || token,
        params.query,
        params.responseType,
        params.contentType
      );
      const error = errorInterceptor(
        response,
        errorMessage?.length ? errorMessage : []
      );
      if (error.code != -1 && params.stateName)
        failureRequest(params.stateName, error);
      else if (params.stateName) {
        deleteResource(params.stateName, response.data);
      }
      return { data: response.data, error };
    },
    [token, baseUrl]
  );
  const getRequest = useCallback(
    async (params: RequestParam) => {
      if (params.stateName) loadRequest(params.stateName);
      const response = await getFunc(
        params.baseUrl || baseUrl,
        params.uri,
        params.token || token,
        params.query,
        params.responseType,
        params.contentType
      );
      const error = errorInterceptor(
        response,
        errorMessage?.length ? errorMessage : []
      );
      if (error.code != -1 && params.stateName)
        failureRequest(params.stateName, error);
      else if (params.stateName) {
        addResource(params.stateName, response.data);
      }
      return { data: response.data, error };
    },
    [token, baseUrl]
  );
  const transformeToRequest = useCallback(
    (requests: DefaultRequestInterface) => {
      let requestData = {};
      for (let element in requests) {
        if (requests[element].type == "Post") {
          requestData = {
            ...requestData,
            [element]: (payload?: any) =>
              postRequest({
                ...requests[element],
                payload: payload || requests[element].payload,
              }),
          };
        }
        if (requests[element].type == "Patch") {
          requestData = {
            ...requestData,
            [element]: (payload?: any) =>
              patchRequest({
                ...requests[element],
                payload: payload || requests[element].payload,
              }),
          };
        }
        if (requests[element].type == "Delete") {
          requestData = {
            ...requestData,
            [element]: (payload?: any) =>
              deleteRequest({
                ...requests[element],
                payload: payload || requests[element].payload,
              }),
          };
        }
        if (requests[element].type == "Get") {
          requestData = {
            ...requestData,
            [element]: (payload?: any) =>
              getRequest({
                ...requests[element],
                payload: payload || requests[element].payload,
              }),
          };
        }
      }
      return requestData;
    },
    [token, baseUrl]
  );
  return {
    deleteRequest,
    postRequest,
    getRequest,
    patchRequest,
    transformeToRequest,
  };
}
