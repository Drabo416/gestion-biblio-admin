import React, { useContext, useEffect, useState } from "react";
import { RethinkectureInterface } from "../interface/rethinkecture-props.interface";
import { RethinkectureContext } from "../context/rethinkecture.context";
import MainComponent from "../component/main.component";
import { useRequest } from "../hooks/use-request.hook";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { createReducers } from "../store/reducer/create-reducers.function";
import { DefaultRequestInterface } from "../interface/default-request.interface";

export default function RethinkectureProvider(params: RethinkectureInterface) {
  return (
    <RethinkectureContext.Provider
      value={{
        store: params.store,
        requests: params.requests,
        baseUrl: params.baseUrl,
        token: params.token,
        errorMessage: params.errorMessage,
      }}
    >
      <Provider
        store={configureStore({ reducer: createReducers(params.store) })}
      >
        <MainComponent>
          {params.children ? params.children : null}
        </MainComponent>
      </Provider>
    </RethinkectureContext.Provider>
  );
}
