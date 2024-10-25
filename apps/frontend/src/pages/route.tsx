import { type RouteObject } from "react-router-dom";
import { lazy } from "react";
import FormPage from "./form";

const HomePage = lazy(() => import("./home"));
const SettingsPage = lazy(() => import("./settings"));
const NotFoundPage = lazy(() => import("./404"));

export enum AppRoutes {
  MAIN = "main",
  SETTINGS = "settings",
  NOTFOUND = "notfound",
  FORM = "form",
}

export const routePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.SETTINGS]: "/settings",
  [AppRoutes.NOTFOUND]: "*",
  [AppRoutes.FORM]: "/form",
};

export const routeConfig: Record<AppRoutes, RouteObject> = {
  [AppRoutes.MAIN]: {
    path: routePath[AppRoutes.MAIN],
    element: <HomePage />,
  },

  [AppRoutes.SETTINGS]: {
    path: routePath[AppRoutes.SETTINGS],
    element: <SettingsPage />,
  },
  [AppRoutes.NOTFOUND]: {
    path: routePath[AppRoutes.NOTFOUND],
    element: <NotFoundPage />,
  },
  [AppRoutes.FORM]: {
    path: routePath[AppRoutes.FORM],
    element: <FormPage />,
  },
};
