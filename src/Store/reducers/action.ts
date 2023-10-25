export const CREATE_RESOURCE_REQUEST = "CREATE_RESOURCE_REQUEST";
export const CREATE_FILE_RESOURCE_REQUEST = "CREATE_FILE_RESOURCE_REQUEST";
export const UPDATE_RESOURCE_REQUEST = "UPDATE_RESOURCE_REQUEST";
export const GET_RESOURCE_REQUEST = "GET_RESOURCE_REQUEST";
export const DELETE_RESOURCE_REQUEST = "DELETE_RESOURCE_REQUEST";
export const FETCH_DATA_LOADING = "FETCH_DATA_LOADING";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";
export const ADD_RESOURCE = "ADD_RESOURCE";
export const UPDATE_RESOURCE = "UPDATE_RESOURCE";
export const DELETE_RESOURCE = "DELETE_RESOURCE";
export const DROP_ALL_DATA = "DROP_ALL_DATA";

export function addResource(stateName: string, data: Object | Array<any>) {
  return { type: ADD_RESOURCE, stateName, payload: data };
}
export function updateResource(stateName: string, data: Object | Array<any>) {
  return { type: UPDATE_RESOURCE, stateName, payload: data };
}
export function deleteResource(stateName: string, data: Object | Array<any>) {
  return { type: DELETE_RESOURCE, stateName, payload: data };
}
export function fetchDataLoading(stateName: string) {
  return { type: FETCH_DATA_LOADING, stateName };
}
export function fetchDataFailure(
  stateName: string,
  error: Object | Array<any>
) {
  return { type: FETCH_DATA_FAILURE, stateName, payload: error };
}
