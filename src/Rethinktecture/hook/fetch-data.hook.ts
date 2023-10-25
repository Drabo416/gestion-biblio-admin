import { useCallback, useEffect } from "react";
import {
  RequestInterface,
  RequestPostInterface,
} from "../interface/request.interface";
import {
  CREATE_FILE_RESOURCE_REQUEST,
  CREATE_RESOURCE_REQUEST,
  DELETE_RESOURCE_REQUEST,
  GET_RESOURCE_REQUEST,
  UPDATE_RESOURCE_REQUEST,
  addResource,
  deleteResource,
  fetchDataFailure,
  fetchDataLoading,
  updateResource,
} from "../../Store/reducers/action";
import { postFileRequest, postRequest } from "../request/post.request";
import { errorInterceptor } from "../interceptor/error.interceptor";
import { patchRequest } from "../request/patch.request";
import { ReduxActionInterface } from "../interface/redux-action.interface";
import { deleteRequest } from "../request/delete.request";
import { AxiosResponse } from "axios";
import { getByIdRequest, getManyRequest } from "../request/get.request";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { ReducerEnum } from "../../enum/reducer.enum";
export function useRequest() {
  const dispatch = useDispatch();
  const requestConfig = useSelector((state: any) => state.requestConfig);
  const postData = useCallback(async (param: ReduxActionInterface) => {
    try {
      if (param.stateName) {
        dispatch(fetchDataLoading(param.stateName));
      }
      const response =
        param.type == CREATE_RESOURCE_REQUEST
          ? await postRequest(
              param.baseUrl,
              param.uri,
              param.payload,
              param.token,
              param.responseType
            )
          : await postFileRequest(
              param.baseUrl,
              getRessourceURI(param.stateName),
              param.payload,
              param.token,
              param.responseType
            );
      const error = errorInterceptor(response);
      dispatch(addResource(ReducerEnum.CurrentError, error));
      const data = response.data;
      if (error.code != -1 && param.stateName) {
        dispatch(fetchDataFailure(param.stateName, error));
      } else {
        if (param.stateName) {
          dispatch(addResource(param.stateName, data));
        }
      }
      return { data: error.code != -1 ? null : data, error };
    } catch (error) {
      dispatch(addResource(ReducerEnum.CurrentError, error));
      if (param.stateName) {
        const errorObject = errorInterceptor(
          error.response ? error.response : { status: error.code }
        );
        dispatch(fetchDataFailure(param.stateName, errorObject));
        return { error: errorObject, data: null };
      }
    }
  }, []);
  const updateData = useCallback(async (param: ReduxActionInterface) => {
    try {
      if (param.stateName) {
        dispatch(fetchDataLoading(param.stateName));
      }
      const { id, ...data } = param.payload;
      const response = await patchRequest(
        param.baseUrl,
        param.uri,
        id,
        data,
        param.token,
        param.responseType
      );
      const error = errorInterceptor(response);
      if (error.code != -1 && param.stateName) {
        dispatch(fetchDataFailure(param.stateName, error));
      } else {
        if (param.stateName) {
          dispatch(updateResource(param.stateName, response.data));
        }
      }
      dispatch(addResource(ReducerEnum.CurrentError, error));
      return { data: error.code != -1 ? null : response.data, error };
    } catch (error) {
      const errorText = errorInterceptor(
        error.response ? error.response : { status: error.code }
      );
      dispatch(fetchDataFailure(param.stateName, errorText));
      dispatch(addResource(ReducerEnum.CurrentError, error));
      return { error: errorText, data: null };
    }
  }, []);
  const deleteData = useCallback(async (param: ReduxActionInterface) => {
    try {
      if (param.stateName) {
        dispatch(fetchDataLoading(param.stateName));
      }
      const response = await deleteRequest(
        param.baseUrl,
        param.uri,
        param.payload?.id,
        param.token,
        param.responseType
      );
      const error = errorInterceptor(response);
      if (error.code != -1 && param.stateName) {
        dispatch(fetchDataFailure(param.stateName, error));
      } else {
        if (param.stateName) {
          dispatch(deleteResource(param.stateName, param.payload));
        }
      }
      dispatch(addResource(ReducerEnum.CurrentError, error));
      return { data: error.code != -1 ? null : response.data, error };
    } catch (error) {
      dispatch(addResource(ReducerEnum.CurrentError, error));
      const errorText = errorInterceptor(
        error.response ? error.response : { status: error.code }
      );
      dispatch(fetchDataFailure(param.stateName, errorText));
      return { error: errorText, data: null };
    }
  }, []);
  const getData = useCallback(async (param: ReduxActionInterface) => {
    try {
      let response: AxiosResponse;
      if (param.stateName) {
        dispatch(fetchDataLoading(param.stateName));
      }
      if (param.payload && param.payload.id) {
        response = await getByIdRequest(
          param.baseUrl,
          param.uri,
          param.payload?.id,
          param.token,
          param.responseType
        );
      } else {
        response = await getManyRequest(
          param.baseUrl,
          param.uri,
          param.token,
          param.payload && param.payload.query,
          param.responseType
        );
      }
      const error = errorInterceptor(response);
      if (error.code != -1 && param.stateName) {
        dispatch(fetchDataFailure(param.stateName, error));
      } else {
        if (param.stateName) {
          dispatch(addResource(param.stateName, response.data));
        }
      }
      dispatch(addResource(ReducerEnum.CurrentError, error));
      return { data: error.code != -1 ? null : response.data, error };
    } catch (error) {
      dispatch(addResource(ReducerEnum.CurrentError, error));
      const errorText = errorInterceptor(
        error.response ? error.response : { status: error.code }
      );
      dispatch(fetchDataFailure(param.stateName, errorText));
      return { error: errorText, data: null };
    }
  }, []);

  const fetchData = useCallback(
    async (param: RequestInterface) => {
      const requestParam = {
        ...param,
        baseUrl: requestConfig?.data?.baseUrl,
        token: requestConfig?.data?.token,
      };
      if (requestParam.type === CREATE_RESOURCE_REQUEST) {
        return await postData(requestParam);
      }
      if (requestParam.type === UPDATE_RESOURCE_REQUEST) {
        return await updateData(requestParam);
      }
      if (requestParam.type == DELETE_RESOURCE_REQUEST) {
        return await deleteData(requestParam);
      }
      if (requestParam.type == GET_RESOURCE_REQUEST) {
        return await getData(requestParam);
      }
      if (requestParam.type == CREATE_FILE_RESOURCE_REQUEST) {
        return await postData(requestParam);
      }
    },
    [requestConfig]
  );
  return { fetchData };
}
