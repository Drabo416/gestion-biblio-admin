import { ReduxActionInterface } from "../../Rethinktecture/interface/redux-action.interface";
import {
  ADD_RESOURCE,
  DELETE_RESOURCE,
  DROP_ALL_DATA,
  FETCH_DATA_FAILURE,
  FETCH_DATA_LOADING,
  GET_RESOURCE_REQUEST,
  UPDATE_RESOURCE,
  UPDATE_RESOURCE_REQUEST,
} from "./action";

const createDataReducer = (stateName: string, defaultState: object | any[]) => {
  const initialState = {
    isLoading: false,
    error: null,
    data: defaultState,
  };
  return function dataReducer(
    state = initialState,
    action: ReduxActionInterface
  ) {
    if (action.type == DROP_ALL_DATA) return initialState;
    if (action.stateName !== stateName) {
      return state;
    }
    let nextState = { ...state };
    switch (action.type) {
      case ADD_RESOURCE:
        if (Array.isArray(state.data)) {
          if (Array.isArray(action.payload)) {
            return {
              ...state,
              isLoading: false,
              error: null,
              data: [...action.payload, ...state.data],
            };
          } else {
            let index = state.data.findIndex((data) =>
              (data.id ? data.id : data._id) === Array.isArray(action.payload)
                ? action.payload[0].id
                : action.payload.id
            );
            if (index != -1) {
              nextState.isLoading = false;
              nextState.data[index] = action.payload;
              nextState.error = null;
              return nextState;
            } else {
              return {
                ...state,
                isLoading: false,
                error: null,
                data: [...state.data, action.payload],
              };
            }
          }
        } else {
          return {
            ...state,
            isLoading: false,
            error: null,
            data: { ...state.data, ...action.payload },
          };
        }
        break;
      case UPDATE_RESOURCE:
        if (Array.isArray(state.data)) {
          let index = state.data.findIndex(
            (data) =>
              (data.id ? data.id : data._id) ===
              (Array.isArray(action.payload)
                ? action.payload[0].id
                  ? action.payload[0].id
                  : action.payload[0]._id
                : action.payload.id
                ? action.payload.id
                : action.payload._id)
          );
          if (index != -1) {
            nextState.data[index] = {
              ...nextState[index],
              ...action.payload,
            };
          } else {
            if (Array.isArray(action.payload)) {
              nextState.data = [...nextState.data, ...action.payload];
            } else {
              nextState.data = [...nextState.data, action.payload];
            }
          }

          return {
            ...nextState,
            isLoading: false,
            error: null,
          };
        } else {
          return {
            ...state,
            isLoading: false,
            error: null,
            data: { ...state.data, ...action.payload },
          };
        }
        break;
      case DELETE_RESOURCE:
        if (Array.isArray(state.data)) {
          nextState.data = state.data.filter(
            (item) => (item.id ? item.id : item._id) != action.payload.id
          );
        } else {
          nextState.data = defaultState;
        }
        return {
          ...nextState,
          isLoading: false,
          error: null,
        };
      case FETCH_DATA_FAILURE:
        return {
          ...state,
          isLoading: false,
          error: action.payload,
        };
      case FETCH_DATA_LOADING:
        return {
          ...state,
          isLoading: true,
          error: null,
        };
      default:
        return state;
    }
  };
};

export { createDataReducer };
