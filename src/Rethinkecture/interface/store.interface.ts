import { OtherActionInterface } from "./other-action.interface";

export interface StoreElement {
  stateName: string;
  defaultValue: any;
  id?: string;
  action?: OtherActionInterface;
}
export interface StoreInterface {
  [key: string]: StoreElement;
}
