import { ActionInterface } from "../../interface/action.interface";
import { StateInterface } from "../../interface/state.interface";

export function DeleteResourceAction(
  state: StateInterface,
  action: ActionInterface,
  id?: string,
  defaultState?: any
) {
  const nextState = {
    ...state,
    isLoading: false,
    error: null,
  } as StateInterface;
  if (Array.isArray(nextState.data)) {
    if (Array.isArray(action.payload)) {
      nextState.data = nextState.data.filter(
        (data) => !action.payload.map((item) => item[id]).includes(data[id])
      );
    } else if (typeof action.payload == "object") {
      nextState.data = nextState.data.filter(
        (data) => data[id] != action.payload[id]
      );
    } else {
      nextState.data = nextState.data.filter((data) => data == action.payload);
    }
  } else {
    nextState.data = defaultState;
  }
  return nextState;
}
