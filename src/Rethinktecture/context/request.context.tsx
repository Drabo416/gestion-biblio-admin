import { createContext, useState } from "react";
import { RequestContextInterface } from "../interface/request-contextinterface";
import { StackNotificationParams } from "../../interface/stack-notification-params.interface";

let functions:RequestContextInterface
export const RethinktectureContext = createContext({...functions});

export function RethinktectureContenair({ children }) {
  const [fetchData, setFetchData] = useState<(params:StackNotificationParams)=>{}>()
  const [handleSetReqestConfig, setHandleSetReqestConfig] = useState<(params:StackNotificationParams)=>{}>()
    return (
      <RethinktectureContext.Provider value={{fetchData,setFetchData,setHandleSetReqestConfig, handleSetReqestConfig}}>
        {children}
      </RethinktectureContext.Provider>
    );
  }