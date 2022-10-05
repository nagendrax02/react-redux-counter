import { createStore } from "redux";
import { reducerFn } from "./reducer";

const initialState = {
  counter: 0
};

export const store = createStore(reducerFn, initialState);
