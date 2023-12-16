import { StateInterface } from "../../interface/state.interface";

export function ResetResourceAction(defaultValue: any) {
  return {
    isLoading: false,
    error: null,
    data: defaultValue,
  } as StateInterface;
}
