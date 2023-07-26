import { type RouteObject } from "react-router-dom";
import { lazy } from "react";

const HomePage = lazy(() => import("./home"));
const SettingsPage = lazy(() => import("./settings"));

export enum AppRoutes {
  MAIN = "main",
  SETTINGS = "settings",
}

export const routePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.SETTINGS]: "/settings",
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
};
