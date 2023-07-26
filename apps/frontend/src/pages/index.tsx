import { Route, Routes } from "react-router-dom";
import { routeConfig } from "./route";
import { Suspense } from "react";

export const Routing = () => {
  return (
    <Suspense>
      <Routes>
        {Object.values(routeConfig).map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </Suspense>
  );
};
