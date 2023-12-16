import { ActionInterface } from "../../interface/action.interface";
import { StateInterface } from "../../interface/state.interface";

export function AddResourceAction(
  state: StateInterface,
  action: ActionInterface,
  id?: string
) {
  let nextState: StateInterface = { ...state, isLoading: false, error: null };
  if (Array.isArray(state.data)) {
    if (Array.isArray(action.payload)) {
      nextState = {
        ...nextState,
        data: action.converse
          ? [...state.data, ...action.payload]
          : [...action.payload],
      };
    } else if (typeof action.payload == "object") {
      if (id) {
        let index = state.data.findIndex(
          (data) => data[id] == action.payload[id]
        );
        if (index != -1) {
          const data = [...nextState.data];
          data[index] = {
            ...nextState.data[index],
            ...action.payload,
          };
          nextState.data = data;
        } else {
          nextState.data = [...nextState.data, action.payload];
        }
      } else {
        nextState.data = [...nextState.data, action.payload];
      }
    } else {
      nextState.data = [...nextState.data, action.payload];
    }
  } else if (typeof state.data == "object") {
    if (typeof action.payload == "object") {
      nextState.data = { ...state.data, ...action.payload };
    } else {
      throw "Object can accept an other type of value";
    }
  } else {
    nextState.data = action.payload;
  }
  return nextState;
}
