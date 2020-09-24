import { combineReducers } from "redux";
import { ADD_CARD } from "./actionTypes";
import { initialStore } from "./store";

const initialState = {
  boardStore: initialStore
};

const boardStore = (state = initialState.boardStore, action: any) => {
  let boardStore;
  switch (action.type) {
    case ADD_CARD:
      boardStore = Object.assign({}, state, action.boardStore);
      break;
    default:
      boardStore = state;
  }
  return boardStore;
};

export default combineReducers({ boardStore });
