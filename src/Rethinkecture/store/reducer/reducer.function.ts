import { createAction, createReducer, current } from "@reduxjs/toolkit";
import { StoreElement } from "../../interface/store.interface";
import { StateInterface } from "../../interface/state.interface";
import { ActionInterface } from "../../interface/action.interface";
import { AddResourceAction } from "../action/add.resource.action";
import { LoadRequest } from "../action/load-request.action";
import { FalureRequest } from "../action/falure-request.action";
import { DeleteResourceAction } from "../action/delete.resource.action";
import { ResetResourceAction } from "../action/reset-resource.action";
import OtherResourceAction from "../action/other.resource.action";
import { ActionEnum } from "../../enum/action.enum";

export function Reducer(storeItem: StoreElement) {
  const addResource = createAction(
    `${ActionEnum.AddResource}${storeItem.stateName}`
  );
  const updateResource = createAction(
    `${ActionEnum.UpdateResource}${storeItem.stateName}`
  );
  const deleteResource = createAction(
    `${ActionEnum.DeleteResource}${storeItem.stateName}`
  );
  const loadRequest = createAction(
    `${ActionEnum.LoadRequest}${storeItem.stateName}`
  );
  const failureRequest = createAction(
    `${ActionEnum.FailureRequest}${storeItem.stateName}`
  );
  const reset = createAction(`${ActionEnum.Reset}${storeItem.stateName}`);
  const otherAction = createAction(
    `${ActionEnum.OtherAction}${storeItem.stateName}`
  );
  const defaultState: StateInterface = {
    isLoading: false,
    error: null,
    data: storeItem.defaultValue,
  };
  return createReducer(defaultState as StateInterface, (builder) => {
    builder
      .addCase(addResource, (state: StateInterface, action: ActionInterface) =>
        AddResourceAction(current(state), action, storeItem.id || "id")
      )
      .addCase(
        updateResource,
        (state: StateInterface, action: ActionInterface) =>
          AddResourceAction(current(state), action, storeItem.id || "id")
      )
      .addCase(
        deleteResource,
        (state: StateInterface, action: ActionInterface) =>
          DeleteResourceAction(
            current(state),
            action,
            storeItem.id || "id",
            storeItem.defaultValue
          )
      )
      .addCase(loadRequest, (state: StateInterface) => LoadRequest(state))
      .addCase(
        failureRequest,
        (state: StateInterface, action: ActionInterface) =>
          FalureRequest(current(state), action)
      )
      .addCase(reset, (state: StateInterface, action: ActionInterface) =>
        ResetResourceAction(storeItem.defaultValue)
      )
      .addCase(otherAction, (state: StateInterface, action: ActionInterface) =>
        OtherResourceAction(
          current(state),
          action,
          action.action || storeItem.action,
          storeItem.defaultValue
        )
      );
  });
}
