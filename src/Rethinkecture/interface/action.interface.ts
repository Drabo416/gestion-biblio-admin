import { OtherActionInterface } from "./other-action.interface";

export interface ActionInterface {
  type: string;
  payload?: any;
  action?: OtherActionInterface;
  converse?: boolean;
}
