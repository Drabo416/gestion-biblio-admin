import { ActionInterface } from "../../interface/action.interface";
import { OtherActionInterface } from "../../interface/other-action.interface";
import { StateInterface } from "../../interface/state.interface";

export default function OtherResourceAction(
  state: StateInterface,
  action: ActionInterface,
  func: OtherActionInterface,
  defaultState: any
) {
  return func(state, action, defaultState);
}
