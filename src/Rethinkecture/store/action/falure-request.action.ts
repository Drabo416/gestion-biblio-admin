import { ActionInterface } from "../../interface/action.interface";
import { StateInterface } from "../../interface/state.interface";

export function FalureRequest(state: StateInterface, action: ActionInterface) {
  return {
    ...state,
    isLoading: false,
    error: action.payload,
  } as StateInterface;
}
