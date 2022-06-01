import { combineReducers, createStore as reduxCreateStore, applyMiddleware } from "redux";
import {connectRouter, routerMiddleware} from "connected-react-router"

import { UsersReducer } from "../users/reducers";

export default function createStore() {
  return reduxCreateStore(
    UsersReducer
  )
}