import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { ActionEnum } from "../enum/action.enum";
import { ActionInterface } from "../interface/action.interface";

export function useResourceAction() {
  const dispatch = useDispatch();
  const addResource = useCallback(
    (stateName: string, payload: any, option?: Partial<ActionInterface>) => {
      dispatch({
        type: `${ActionEnum.AddResource}${stateName}`,
        payload,
        ...option,
      });
    },
    []
  );
  const updateResource = useCallback(
    (stateName: string, payload: any, option?: Partial<ActionInterface>) => {
      dispatch({
        type: `${ActionEnum.UpdateResource}${stateName}`,
        payload,
        ...option,
      });
    },
    []
  );
  const deleteResource = useCallback(
    (stateName: string, payload: any, option?: Partial<ActionInterface>) => {
      dispatch({
        type: `${ActionEnum.DeleteResource}${stateName}`,
        payload,
        ...option,
      });
    },
    []
  );
  const loadRequest = useCallback((stateName: string) => {
    dispatch({
      type: `${ActionEnum.LoadRequest}${stateName}`,
    });
  }, []);
  const failureRequest = useCallback(
    (stateName: string, payload: any, option?: Partial<ActionInterface>) => {
      dispatch({
        type: `${ActionEnum.FailureRequest}${stateName}`,
        payload,
        ...option,
      });
    },
    []
  );
  const reset = useCallback((stateName: string, action: ActionInterface) => {
    dispatch({ type: `${ActionEnum.Reset}${stateName}`, action: action });
  }, []);
  return {
    addResource,
    updateResource,
    reset,
    deleteResource,
    failureRequest,
    loadRequest,
  };
}
