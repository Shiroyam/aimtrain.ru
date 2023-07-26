import { Route, Routes } from "react-router-dom";
import { routeConfig } from "./route";
import { Suspense } from "react";
import { BlockingSmallScreen } from "components";

export const Routing = () => {
  return (
    <Suspense>
      <BlockingSmallScreen />
      <Routes>
        {Object.values(routeConfig).map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </Suspense>
  );
};
