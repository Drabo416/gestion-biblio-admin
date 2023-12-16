import { RethinkectureContext } from "./../context/rethinkecture.context";

import { useContext } from "react";
import { useRequest } from "./use-request.hook";
interface FuncInterface {
  (arg1: any): any;
}
export function useRequestSelector(requestFunc: FuncInterface) {
  const { requests } = useContext(RethinkectureContext);
  const { transformeToRequest } = useRequest();
  return requestFunc(transformeToRequest(requests) || {});
}
