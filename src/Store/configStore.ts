import { createStore, combineReducers, applyMiddleware } from "redux";
import { createDataReducer } from "./reducers/create-reducer.reducer";
import { ReducerEnum } from "../enum/reducer.enum";

const Store = createStore(
  combineReducers({
    requestConfig: createDataReducer(ReducerEnum.RequestConfig, {}),
    currentError: createDataReducer(ReducerEnum.CurrentError, {}),
    user: createDataReducer(ReducerEnum.User, {}),
    livre: createDataReducer(ReducerEnum.Livre, []),
    categorie: createDataReducer(ReducerEnum.Categorie, []),
  })
);

export default Store;
