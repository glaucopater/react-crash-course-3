import * as React from "react";
import { Provider } from "react-redux";
import "./styles.css";
import Board from "./containers/Board";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./store/reducer";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';


const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk, logger)
));


export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>React Crash Course</h1>
        <h2>Session 3</h2>
        <Board />
      </div>
    </Provider>
  );
}
