import { ActionInterface } from "./action.interface";
import { StateInterface } from "./state.interface";

export interface OtherActionInterface {
  (
    arg1: StateInterface,
    agr2: ActionInterface,
    defaultState: any
  ): StateInterface;
}
