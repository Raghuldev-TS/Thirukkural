import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configStore from "./store";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from "./App";

const store = configStore();

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>,
  rootElement
);
