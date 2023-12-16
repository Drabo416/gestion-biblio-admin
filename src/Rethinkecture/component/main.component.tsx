import React, { useContext, useEffect } from "react";
import { Provider } from "react-redux";
import { RethinkectureContext } from "../context/rethinkecture.context";
import { createReducers } from "../store/reducer/create-reducers.function";
import { configureStore } from "@reduxjs/toolkit";
import { useRequest } from "../hooks/use-request.hook";

export default function MainComponent({ children }) {
  return <React.Fragment>{children}</React.Fragment>;
}
