import { useEffect, useRef } from "react";

export function useOnceCall(cb:any, condition:any = true) {
    const isCalledRef = useRef(false);
  
    useEffect(() => {
      if (condition && !isCalledRef.current) {
        isCalledRef.current = true;
        cb();
      }
    }, [cb, condition]);
  }