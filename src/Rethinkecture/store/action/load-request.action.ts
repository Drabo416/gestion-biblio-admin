import { StateInterface } from "../../interface/state.interface";

export function LoadRequest(state: StateInterface) {
  return {
    ...state,
    isLoading: true,
    error: null,
  } as StateInterface;
}
