/// MODULES
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import reportWebVitals from "./reportWebVitals";
import { reducer as formReducer } from "redux-form";
import thunk from "redux-thunk";
import reducers from "./redux/reducers";

/// COMPONENTS
import App from "./components/App";

const rootReducers = combineReducers({
  form: formReducer,
  ...reducers,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducers,
  composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
