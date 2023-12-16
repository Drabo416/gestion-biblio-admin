import { StoreInterface } from "../../interface/store.interface";
import { Reducer } from "./reducer.function";

const createReducers = (store: StoreInterface) => {
  let reducerData = {};
  for (let element in store) {
    reducerData = { ...reducerData, [element]: Reducer(store[element]) };
  }
  return reducerData;
};
export { createReducers };
