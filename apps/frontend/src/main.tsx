import AppWithErrorBoundary from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "store";
import { Analytics } from "@vercel/analytics/react";
import ReactDOM from "react-dom/client";
import React from "react";
import "./styles/index.scss";
import { YMInitializer } from "react-yandex-metrika";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <AppWithErrorBoundary />
        </Provider>
      </BrowserRouter>
    </React.StrictMode>
    <YMInitializer accounts={[98707984]} options={{ webvisor: true }} />
    <Analytics />
  </>,
);
