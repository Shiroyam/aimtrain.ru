import AppWithErrorBoundary from "./app";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "store";
import ReactDOM from "react-dom/client";
import React from "react";
import "./styles/index.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <AppWithErrorBoundary />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
);
